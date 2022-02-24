/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Gdk-4.0
 */

import type cairo from './cairo-1.0';
import type PangoCairo from './PangoCairo-1.0';
import type Pango from './Pango-1.0';
import type HarfBuzz from './HarfBuzz-0.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type Gio from './Gio-2.0';
import type GdkPixbuf from './GdkPixbuf-2.0';
import type GModule from './GModule-2.0';

export namespace Gdk {

/**
 * Defines how device axes are interpreted by GTK.
 * 
 * Note that the X and Y axes are not really needed; pointer devices
 * report their location via the x/y members of events regardless. Whether
 * X and Y are present as axes depends on the GDK backend.
 */
enum AxisUse {
    /**
     * the axis is ignored.
     */
    IGNORE,
    /**
     * the axis is used as the x axis.
     */
    X,
    /**
     * the axis is used as the y axis.
     */
    Y,
    /**
     * the axis is used as the scroll x delta
     */
    DELTA_X,
    /**
     * the axis is used as the scroll y delta
     */
    DELTA_Y,
    /**
     * the axis is used for pressure information.
     */
    PRESSURE,
    /**
     * the axis is used for x tilt information.
     */
    XTILT,
    /**
     * the axis is used for y tilt information.
     */
    YTILT,
    /**
     * the axis is used for wheel information.
     */
    WHEEL,
    /**
     * the axis is used for pen/tablet distance information
     */
    DISTANCE,
    /**
     * the axis is used for pen rotation information
     */
    ROTATION,
    /**
     * the axis is used for pen slider information
     */
    SLIDER,
    /**
     * a constant equal to the numerically highest axis value.
     */
    LAST,
}
/**
 * Specifies the crossing mode for enter and leave events.
 */
enum CrossingMode {
    /**
     * crossing because of pointer motion.
     */
    NORMAL,
    /**
     * crossing because a grab is activated.
     */
    GRAB,
    /**
     * crossing because a grab is deactivated.
     */
    UNGRAB,
    /**
     * crossing because a GTK grab is activated.
     */
    GTK_GRAB,
    /**
     * crossing because a GTK grab is deactivated.
     */
    GTK_UNGRAB,
    /**
     * crossing because a GTK widget changed
     *   state (e.g. sensitivity).
     */
    STATE_CHANGED,
    /**
     * crossing because a touch sequence has begun,
     *   this event is synthetic as the pointer might have not left the surface.
     */
    TOUCH_BEGIN,
    /**
     * crossing because a touch sequence has ended,
     *   this event is synthetic as the pointer might have not left the surface.
     */
    TOUCH_END,
    /**
     * crossing because of a device switch (i.e.
     *   a mouse taking control of the pointer after a touch device), this event
     *   is synthetic as the pointer didn’t leave the surface.
     */
    DEVICE_SWITCH,
}
/**
 * A pad feature.
 */
enum DevicePadFeature {
    /**
     * a button
     */
    BUTTON,
    /**
     * a ring-shaped interactive area
     */
    RING,
    /**
     * a straight interactive area
     */
    STRIP,
}
/**
 * Indicates the specific type of tool being used being a tablet. Such as an
 * airbrush, pencil, etc.
 */
enum DeviceToolType {
    /**
     * Tool is of an unknown type.
     */
    UNKNOWN,
    /**
     * Tool is a standard tablet stylus.
     */
    PEN,
    /**
     * Tool is standard tablet eraser.
     */
    ERASER,
    /**
     * Tool is a brush stylus.
     */
    BRUSH,
    /**
     * Tool is a pencil stylus.
     */
    PENCIL,
    /**
     * Tool is an airbrush stylus.
     */
    AIRBRUSH,
    /**
     * Tool is a mouse.
     */
    MOUSE,
    /**
     * Tool is a lens cursor.
     */
    LENS,
}
/**
 * Used in `GdkDrag` to the reason of a cancelled DND operation.
 */
enum DragCancelReason {
    /**
     * There is no suitable drop target.
     */
    NO_TARGET,
    /**
     * Drag cancelled by the user
     */
    USER_CANCELLED,
    /**
     * Unspecified error.
     */
    ERROR,
}
/**
 * Specifies the type of the event.
 */
enum EventType {
    /**
     * the window manager has requested that the toplevel surface be
     *   hidden or destroyed, usually when the user clicks on a special icon in the
     *   title bar.
     */
    DELETE,
    /**
     * the pointer (usually a mouse) has moved.
     */
    MOTION_NOTIFY,
    /**
     * a mouse button has been pressed.
     */
    BUTTON_PRESS,
    /**
     * a mouse button has been released.
     */
    BUTTON_RELEASE,
    /**
     * a key has been pressed.
     */
    KEY_PRESS,
    /**
     * a key has been released.
     */
    KEY_RELEASE,
    /**
     * the pointer has entered the surface.
     */
    ENTER_NOTIFY,
    /**
     * the pointer has left the surface.
     */
    LEAVE_NOTIFY,
    /**
     * the keyboard focus has entered or left the surface.
     */
    FOCUS_CHANGE,
    /**
     * an input device has moved into contact with a sensing
     *   surface (e.g. a touchscreen or graphics tablet).
     */
    PROXIMITY_IN,
    /**
     * an input device has moved out of contact with a sensing
     *   surface.
     */
    PROXIMITY_OUT,
    /**
     * the mouse has entered the surface while a drag is in progress.
     */
    DRAG_ENTER,
    /**
     * the mouse has left the surface while a drag is in progress.
     */
    DRAG_LEAVE,
    /**
     * the mouse has moved in the surface while a drag is in
     *   progress.
     */
    DRAG_MOTION,
    /**
     * a drop operation onto the surface has started.
     */
    DROP_START,
    /**
     * the scroll wheel was turned
     */
    SCROLL,
    /**
     * a pointer or keyboard grab was broken.
     */
    GRAB_BROKEN,
    /**
     * A new touch event sequence has just started.
     */
    TOUCH_BEGIN,
    /**
     * A touch event sequence has been updated.
     */
    TOUCH_UPDATE,
    /**
     * A touch event sequence has finished.
     */
    TOUCH_END,
    /**
     * A touch event sequence has been canceled.
     */
    TOUCH_CANCEL,
    /**
     * A touchpad swipe gesture event, the current state
     *   is determined by its phase field.
     */
    TOUCHPAD_SWIPE,
    /**
     * A touchpad pinch gesture event, the current state
     *   is determined by its phase field.
     */
    TOUCHPAD_PINCH,
    /**
     * A tablet pad button press event.
     */
    PAD_BUTTON_PRESS,
    /**
     * A tablet pad button release event.
     */
    PAD_BUTTON_RELEASE,
    /**
     * A tablet pad axis event from a "ring".
     */
    PAD_RING,
    /**
     * A tablet pad axis event from a "strip".
     */
    PAD_STRIP,
    /**
     * A tablet pad group mode change.
     */
    PAD_GROUP_MODE,
    /**
     * A touchpad hold gesture event, the current state
     *   is determined by its phase field. Since: 4.6
     */
    TOUCHPAD_HOLD,
    /**
     * marks the end of the GdkEventType enumeration.
     */
    EVENT_LAST,
}
/**
 * Indicates which monitor a surface should span over when in fullscreen mode.
 */
enum FullscreenMode {
    /**
     * Fullscreen on current monitor only.
     */
    CURRENT_MONITOR,
    /**
     * Span across all monitors when fullscreen.
     */
    ALL_MONITORS,
}
/**
 * Error enumeration for `GdkGLContext`.
 */
enum GLError {
    /**
     * OpenGL support is not available
     */
    NOT_AVAILABLE,
    /**
     * The requested visual format is not supported
     */
    UNSUPPORTED_FORMAT,
    /**
     * The requested profile is not supported
     */
    UNSUPPORTED_PROFILE,
    /**
     * The shader compilation failed
     */
    COMPILATION_FAILED,
    /**
     * The shader linking failed
     */
    LINK_FAILED,
}
/**
 * Defines the reference point of a surface and is used in `GdkPopupLayout`.
 */
enum Gravity {
    /**
     * the reference point is at the top left corner.
     */
    NORTH_WEST,
    /**
     * the reference point is in the middle of the top edge.
     */
    NORTH,
    /**
     * the reference point is at the top right corner.
     */
    NORTH_EAST,
    /**
     * the reference point is at the middle of the left edge.
     */
    WEST,
    /**
     * the reference point is at the center of the surface.
     */
    CENTER,
    /**
     * the reference point is at the middle of the right edge.
     */
    EAST,
    /**
     * the reference point is at the lower left corner.
     */
    SOUTH_WEST,
    /**
     * the reference point is at the middle of the lower edge.
     */
    SOUTH,
    /**
     * the reference point is at the lower right corner.
     */
    SOUTH_EAST,
    /**
     * the reference point is at the top left corner of the
     *  surface itself, ignoring window manager decorations.
     */
    STATIC,
}
/**
 * An enumeration describing the type of an input device in general terms.
 */
enum InputSource {
    /**
     * the device is a mouse. (This will be reported for the core
     *   pointer, even if it is something else, such as a trackball.)
     */
    MOUSE,
    /**
     * the device is a stylus of a graphics tablet or similar device.
     */
    PEN,
    /**
     * the device is a keyboard.
     */
    KEYBOARD,
    /**
     * the device is a direct-input touch device, such
     *   as a touchscreen or tablet
     */
    TOUCHSCREEN,
    /**
     * the device is an indirect touch device, such
     *   as a touchpad
     */
    TOUCHPAD,
    /**
     * the device is a trackpoint
     */
    TRACKPOINT,
    /**
     * the device is a "pad", a collection of buttons,
     *   rings and strips found in drawing tablets
     */
    TABLET_PAD,
}
/**
 * Describes how well an event matches a given keyval and modifiers.
 * 
 * `GdkKeyMatch` values are returned by [method`Gdk`.KeyEvent.matches].
 */
enum KeyMatch {
    /**
     * The key event does not match
     */
    NONE,
    /**
     * The key event matches if keyboard state
     *   (specifically, the currently active group) is ignored
     */
    PARTIAL,
    /**
     * The key event matches
     */
    EXACT,
}
/**
 * `GdkMemoryFormat` describes formats that image data can have in memory.
 * 
 * It describes formats by listing the contents of the memory passed to it.
 * So GDK_MEMORY_A8R8G8B8 will be 1 byte (8 bits) of alpha, followed by a
 * byte each of red, green and blue. It is not endian-dependent, so
 * CAIRO_FORMAT_ARGB32 is represented by different `GdkMemoryFormats`
 * on architectures with different endiannesses.
 * 
 * Its naming is modelled after
 * [VkFormat](https://www.khronos.org/registry/vulkan/specs/1.0/html/vkspec.html#VkFormat)
 * for details).
 */
enum MemoryFormat {
    /**
     * 4 bytes; for blue, green, red, alpha.
     *   The color values are premultiplied with the alpha value.
     */
    B8G8R8A8_PREMULTIPLIED,
    /**
     * 4 bytes; for alpha, red, green, blue.
     *   The color values are premultiplied with the alpha value.
     */
    A8R8G8B8_PREMULTIPLIED,
    /**
     * 4 bytes; for red, green, blue, alpha
     *   The color values are premultiplied with the alpha value.
     */
    R8G8B8A8_PREMULTIPLIED,
    /**
     * 4 bytes; for blue, green, red, alpha.
     */
    B8G8R8A8,
    /**
     * 4 bytes; for alpha, red, green, blue.
     */
    A8R8G8B8,
    /**
     * 4 bytes; for red, green, blue, alpha.
     */
    R8G8B8A8,
    /**
     * 4 bytes; for alpha, blue, green, red.
     */
    A8B8G8R8,
    /**
     * 3 bytes; for red, green, blue. The data is opaque.
     */
    R8G8B8,
    /**
     * 3 bytes; for blue, green, red. The data is opaque.
     */
    B8G8R8,
    /**
     * 3 guint16 values; for red, green, blue. Since: 4.6
     */
    R16G16B16,
    /**
     * 4 guint16 values; for red, green,
     *   blue, alpha. The color values are premultiplied with the alpha value.
     *  Since: 4.6
     */
    R16G16B16A16_PREMULTIPLIED,
    /**
     * 4 guint16 values; for red, green, blue, alpha.
     *  Since: 4.6
     */
    R16G16B16A16,
    /**
     * 3 half-float values; for red, green, blue.
     *   The data is opaque. Since: 4.6
     */
    R16G16B16_FLOAT,
    /**
     * 4 half-float values; for
     *   red, green, blue and alpha. The color values are premultiplied with
     *   the alpha value. Since: 4.6
     */
    R16G16B16A16_FLOAT_PREMULTIPLIED,
    /**
     * 4 half-float values; for red, green,
     *   blue and alpha. Since: 4.6
     */
    R16G16B16A16_FLOAT,
    R32G32B32_FLOAT,
    /**
     * 4 float values; for
     *   red, green, blue and alpha. The color values are premultiplied with
     *   the alpha value. Since: 4.6
     */
    R32G32B32A32_FLOAT_PREMULTIPLIED,
    /**
     * 4 float values; for red, green, blue and
     *   alpha. Since: 4.6
     */
    R32G32B32A32_FLOAT,
    /**
     * The number of formats. This value will change as
     *   more formats get added, so do not rely on its concrete integer.
     */
    N_FORMATS,
}
/**
 * Specifies the kind of crossing for enter and leave events.
 * 
 * See the X11 protocol specification of LeaveNotify for
 * full details of crossing event generation.
 */
enum NotifyType {
    /**
     * the surface is entered from an ancestor or
     *   left towards an ancestor.
     */
    ANCESTOR,
    /**
     * the pointer moves between an ancestor and an
     *   inferior of the surface.
     */
    VIRTUAL,
    /**
     * the surface is entered from an inferior or
     *   left towards an inferior.
     */
    INFERIOR,
    /**
     * the surface is entered from or left towards
     *   a surface which is neither an ancestor nor an inferior.
     */
    NONLINEAR,
    /**
     * the pointer moves between two surfaces
     *   which are not ancestors of each other and the surface is part of
     *   the ancestor chain between one of these surfaces and their least
     *   common ancestor.
     */
    NONLINEAR_VIRTUAL,
    /**
     * an unknown type of enter/leave event occurred.
     */
    UNKNOWN,
}
/**
 * Specifies the direction for scroll events.
 */
enum ScrollDirection {
    /**
     * the surface is scrolled up.
     */
    UP,
    /**
     * the surface is scrolled down.
     */
    DOWN,
    /**
     * the surface is scrolled to the left.
     */
    LEFT,
    /**
     * the surface is scrolled to the right.
     */
    RIGHT,
    /**
     * the scrolling is determined by the delta values
     *   in scroll events. See gdk_scroll_event_get_deltas()
     */
    SMOOTH,
}
/**
 * This enumeration describes how the red, green and blue components
 * of physical pixels on an output device are laid out.
 */
enum SubpixelLayout {
    /**
     * The layout is not known
     */
    UNKNOWN,
    /**
     * Not organized in this way
     */
    NONE,
    /**
     * The layout is horizontal, the order is RGB
     */
    HORIZONTAL_RGB,
    /**
     * The layout is horizontal, the order is BGR
     */
    HORIZONTAL_BGR,
    /**
     * The layout is vertical, the order is RGB
     */
    VERTICAL_RGB,
    /**
     * The layout is vertical, the order is BGR
     */
    VERTICAL_BGR,
}
/**
 * Determines a surface edge or corner.
 */
enum SurfaceEdge {
    /**
     * the top left corner.
     */
    NORTH_WEST,
    /**
     * the top edge.
     */
    NORTH,
    /**
     * the top right corner.
     */
    NORTH_EAST,
    /**
     * the left edge.
     */
    WEST,
    /**
     * the right edge.
     */
    EAST,
    /**
     * the lower left corner.
     */
    SOUTH_WEST,
    /**
     * the lower edge.
     */
    SOUTH,
    /**
     * the lower right corner.
     */
    SOUTH_EAST,
}
/**
 * Possible errors that can be returned by `GdkTexture` constructors.
 */
enum TextureError {
    /**
     * Not enough memory to handle this image
     */
    TOO_LARGE,
    /**
     * The image data appears corrupted
     */
    CORRUPT_IMAGE,
    /**
     * The image contains features
     *   that cannot be loaded
     */
    UNSUPPORTED_CONTENT,
    /**
     * The image format is not supported
     */
    UNSUPPORTED_FORMAT,
}
enum TitlebarGesture {
    DOUBLE_CLICK,
    RIGHT_CLICK,
    MIDDLE_CLICK,
}
/**
 * Specifies the current state of a touchpad gesture.
 * 
 * All gestures are guaranteed to begin with an event with phase
 * %GDK_TOUCHPAD_GESTURE_PHASE_BEGIN, followed by 0 or several events
 * with phase %GDK_TOUCHPAD_GESTURE_PHASE_UPDATE.
 * 
 * A finished gesture may have 2 possible outcomes, an event with phase
 * %GDK_TOUCHPAD_GESTURE_PHASE_END will be emitted when the gesture is
 * considered successful, this should be used as the hint to perform any
 * permanent changes.
 * 
 * Cancelled gestures may be so for a variety of reasons, due to hardware
 * or the compositor, or due to the gesture recognition layers hinting the
 * gesture did not finish resolutely (eg. a 3rd finger being added during
 * a pinch gesture). In these cases, the last event will report the phase
 * %GDK_TOUCHPAD_GESTURE_PHASE_CANCEL, this should be used as a hint
 * to undo any visible/permanent changes that were done throughout the
 * progress of the gesture.
 */
enum TouchpadGesturePhase {
    /**
     * The gesture has begun.
     */
    BEGIN,
    /**
     * The gesture has been updated.
     */
    UPDATE,
    /**
     * The gesture was finished, changes
     *   should be permanently applied.
     */
    END,
    /**
     * The gesture was cancelled, all
     *   changes should be undone.
     */
    CANCEL,
}
/**
 * Error enumeration for `GdkVulkanContext`.
 */
enum VulkanError {
    /**
     * Vulkan is not supported on this backend or has not been
     *   compiled in.
     */
    UNSUPPORTED,
    /**
     * Vulkan support is not available on this Surface
     */
    NOT_AVAILABLE,
}
/**
 * Positioning hints for aligning a surface relative to a rectangle.
 * 
 * These hints determine how the surface should be positioned in the case that
 * the surface would fall off-screen if placed in its ideal position.
 * 
 * For example, %GDK_ANCHOR_FLIP_X will replace %GDK_GRAVITY_NORTH_WEST with
 * %GDK_GRAVITY_NORTH_EAST and vice versa if the surface extends beyond the left
 * or right edges of the monitor.
 * 
 * If %GDK_ANCHOR_SLIDE_X is set, the surface can be shifted horizontally to fit
 * on-screen. If %GDK_ANCHOR_RESIZE_X is set, the surface can be shrunken
 * horizontally to fit.
 * 
 * In general, when multiple flags are set, flipping should take precedence over
 * sliding, which should take precedence over resizing.
 */
enum AnchorHints {
    /**
     * allow flipping anchors horizontally
     */
    FLIP_X,
    /**
     * allow flipping anchors vertically
     */
    FLIP_Y,
    /**
     * allow sliding surface horizontally
     */
    SLIDE_X,
    /**
     * allow sliding surface vertically
     */
    SLIDE_Y,
    /**
     * allow resizing surface horizontally
     */
    RESIZE_X,
    /**
     * allow resizing surface vertically
     */
    RESIZE_Y,
    /**
     * allow flipping anchors on both axes
     */
    FLIP,
    /**
     * allow sliding surface on both axes
     */
    SLIDE,
    /**
     * allow resizing surface on both axes
     */
    RESIZE,
}
/**
 * Flags describing the current capabilities of a device/tool.
 */
enum AxisFlags {
    /**
     * X axis is present
     */
    X,
    /**
     * Y axis is present
     */
    Y,
    /**
     * Scroll X delta axis is present
     */
    DELTA_X,
    /**
     * Scroll Y delta axis is present
     */
    DELTA_Y,
    /**
     * Pressure axis is present
     */
    PRESSURE,
    /**
     * X tilt axis is present
     */
    XTILT,
    /**
     * Y tilt axis is present
     */
    YTILT,
    /**
     * Wheel axis is present
     */
    WHEEL,
    /**
     * Distance axis is present
     */
    DISTANCE,
    /**
     * Z-axis rotation is present
     */
    ROTATION,
    /**
     * Slider axis is present
     */
    SLIDER,
}
/**
 * Used in `GdkDrop` and `GdkDrag` to indicate the actions that the
 * destination can and should do with the dropped data.
 */
enum DragAction {
    /**
     * Copy the data.
     */
    COPY,
    /**
     * Move the data, i.e. first copy it, then delete
     *   it from the source using the DELETE target of the X selection protocol.
     */
    MOVE,
    /**
     * Add a link to the data. Note that this is only
     *   useful if source and destination agree on what it means, and is not
     *   supported on all platforms.
     */
    LINK,
    /**
     * Ask the user what to do with the data.
     */
    ASK,
}
/**
 * Used to represent the different paint clock phases that can be requested.
 * 
 * The elements of the enumeration correspond to the signals of `GdkFrameClock`.
 */
enum FrameClockPhase {
    /**
     * no phase
     */
    NONE,
    /**
     * corresponds to GdkFrameClock::flush-events. Should not be handled by applications.
     */
    FLUSH_EVENTS,
    /**
     * corresponds to GdkFrameClock::before-paint. Should not be handled by applications.
     */
    BEFORE_PAINT,
    /**
     * corresponds to GdkFrameClock::update.
     */
    UPDATE,
    /**
     * corresponds to GdkFrameClock::layout. Should not be handled by applicatiosn.
     */
    LAYOUT,
    /**
     * corresponds to GdkFrameClock::paint.
     */
    PAINT,
    /**
     * corresponds to GdkFrameClock::resume-events. Should not be handled by applications.
     */
    RESUME_EVENTS,
    /**
     * corresponds to GdkFrameClock::after-paint. Should not be handled by applications.
     */
    AFTER_PAINT,
}
/**
 * The list of the different APIs that GdkGLContext can potentially support.
 */
enum GLAPI {
    /**
     * The OpenGL API
     */
    GL,
    /**
     * The OpenGL ES API
     */
    GLES,
}
/**
 * Flags to indicate the state of modifier keys and mouse buttons
 * in events.
 * 
 * Typical modifier keys are Shift, Control, Meta, Super, Hyper, Alt, Compose,
 * Apple, CapsLock or ShiftLock.
 * 
 * Note that GDK may add internal values to events which include values outside
 * of this enumeration. Your code should preserve and ignore them.  You can use
 * %GDK_MODIFIER_MASK to remove all private values.
 */
enum ModifierType {
    /**
     * the Shift key.
     */
    SHIFT_MASK,
    /**
     * a Lock key (depending on the modifier mapping of the
     *  X server this may either be CapsLock or ShiftLock).
     */
    LOCK_MASK,
    /**
     * the Control key.
     */
    CONTROL_MASK,
    /**
     * the fourth modifier key (it depends on the modifier
     *  mapping of the X server which key is interpreted as this modifier, but
     *  normally it is the Alt key).
     */
    ALT_MASK,
    /**
     * the first mouse button.
     */
    BUTTON1_MASK,
    /**
     * the second mouse button.
     */
    BUTTON2_MASK,
    /**
     * the third mouse button.
     */
    BUTTON3_MASK,
    /**
     * the fourth mouse button.
     */
    BUTTON4_MASK,
    /**
     * the fifth mouse button.
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
}
/**
 * Flags about a paintable object.
 * 
 * Implementations use these for optimizations such as caching.
 */
enum PaintableFlags {
    /**
     * The size is immutable.
     *   The [signal`GdkPaintable:`:invalidate-size] signal will never be
     *   emitted.
     */
    SIZE,
    /**
     * The content is immutable.
     *   The [signal`GdkPaintable:`:invalidate-contents] signal will never be
     *   emitted.
     */
    CONTENTS,
}
/**
 * Flags describing the seat capabilities.
 */
enum SeatCapabilities {
    /**
     * No input capabilities
     */
    NONE,
    /**
     * The seat has a pointer (e.g. mouse)
     */
    POINTER,
    /**
     * The seat has touchscreen(s) attached
     */
    TOUCH,
    /**
     * The seat has drawing tablet(s) attached
     */
    TABLET_STYLUS,
    /**
     * The seat has keyboard(s) attached
     */
    KEYBOARD,
    /**
     * The seat has drawing tablet pad(s) attached
     */
    TABLET_PAD,
    /**
     * The union of all pointing capabilities
     */
    ALL_POINTING,
    /**
     * The union of all capabilities
     */
    ALL,
}
/**
 * Specifies the state of a toplevel surface.
 * 
 * On platforms that support information about individual edges, the
 * %GDK_TOPLEVEL_STATE_TILED state will be set whenever any of the individual
 * tiled states is set. On platforms that lack that support, the tiled state
 * will give an indication of tiledness without any of the per-edge states
 * being set.
 */
enum ToplevelState {
    /**
     * the surface is minimized
     */
    MINIMIZED,
    /**
     * the surface is maximized
     */
    MAXIMIZED,
    /**
     * the surface is sticky
     */
    STICKY,
    /**
     * the surface is maximized without decorations
     */
    FULLSCREEN,
    /**
     * the surface is kept above other surfaces
     */
    ABOVE,
    /**
     * the surface is kept below other surfaces
     */
    BELOW,
    /**
     * the surface is presented as focused (with active decorations)
     */
    FOCUSED,
    /**
     * the surface is in a tiled state
     */
    TILED,
    /**
     * whether the top edge is tiled
     */
    TOP_TILED,
    /**
     * whether the top edge is resizable
     */
    TOP_RESIZABLE,
    /**
     * whether the right edge is tiled
     */
    RIGHT_TILED,
    /**
     * whether the right edge is resizable
     */
    RIGHT_RESIZABLE,
    /**
     * whether the bottom edge is tiled
     */
    BOTTOM_TILED,
    /**
     * whether the bottom edge is resizable
     */
    BOTTOM_RESIZABLE,
    /**
     * whether the left edge is tiled
     */
    LEFT_TILED,
    /**
     * whether the left edge is resizable
     */
    LEFT_RESIZABLE,
}
/**
 * Defines all possible DND actions.
 * 
 * This can be used in [method`Gdk`.Drop.status] messages when any drop
 * can be accepted or a more specific drop method is not yet known.
 */
const ACTION_ALL: number
/**
 * The middle button.
 */
const BUTTON_MIDDLE: number
/**
 * The primary button. This is typically the left mouse button, or the
 * right button in a left-handed setup.
 */
const BUTTON_PRIMARY: number
/**
 * The secondary button. This is typically the right mouse button, or the
 * left button in a left-handed setup.
 */
const BUTTON_SECONDARY: number
/**
 * Represents the current time, and can be used anywhere a time is expected.
 */
const CURRENT_TIME: number
/**
 * Use this macro as the return value for continuing the propagation of
 * an event handler.
 */
const EVENT_PROPAGATE: boolean
/**
 * Use this macro as the return value for stopping the propagation of
 * an event handler.
 */
const EVENT_STOP: boolean
const KEY_0: number
const KEY_1: number
const KEY_2: number
const KEY_3: number
const KEY_3270_AltCursor: number
const KEY_3270_Attn: number
const KEY_3270_BackTab: number
const KEY_3270_ChangeScreen: number
const KEY_3270_Copy: number
const KEY_3270_CursorBlink: number
const KEY_3270_CursorSelect: number
const KEY_3270_DeleteWord: number
const KEY_3270_Duplicate: number
const KEY_3270_Enter: number
const KEY_3270_EraseEOF: number
const KEY_3270_EraseInput: number
const KEY_3270_ExSelect: number
const KEY_3270_FieldMark: number
const KEY_3270_Ident: number
const KEY_3270_Jump: number
const KEY_3270_KeyClick: number
const KEY_3270_Left2: number
const KEY_3270_PA1: number
const KEY_3270_PA2: number
const KEY_3270_PA3: number
const KEY_3270_Play: number
const KEY_3270_PrintScreen: number
const KEY_3270_Quit: number
const KEY_3270_Record: number
const KEY_3270_Reset: number
const KEY_3270_Right2: number
const KEY_3270_Rule: number
const KEY_3270_Setup: number
const KEY_3270_Test: number
const KEY_4: number
const KEY_5: number
const KEY_6: number
const KEY_7: number
const KEY_8: number
const KEY_9: number
const KEY_A: number
const KEY_AE: number
const KEY_Aacute: number
const KEY_Abelowdot: number
const KEY_Abreve: number
const KEY_Abreveacute: number
const KEY_Abrevebelowdot: number
const KEY_Abrevegrave: number
const KEY_Abrevehook: number
const KEY_Abrevetilde: number
const KEY_AccessX_Enable: number
const KEY_AccessX_Feedback_Enable: number
const KEY_Acircumflex: number
const KEY_Acircumflexacute: number
const KEY_Acircumflexbelowdot: number
const KEY_Acircumflexgrave: number
const KEY_Acircumflexhook: number
const KEY_Acircumflextilde: number
const KEY_AddFavorite: number
const KEY_Adiaeresis: number
const KEY_Agrave: number
const KEY_Ahook: number
const KEY_Alt_L: number
const KEY_Alt_R: number
const KEY_Amacron: number
const KEY_Aogonek: number
const KEY_ApplicationLeft: number
const KEY_ApplicationRight: number
const KEY_Arabic_0: number
const KEY_Arabic_1: number
const KEY_Arabic_2: number
const KEY_Arabic_3: number
const KEY_Arabic_4: number
const KEY_Arabic_5: number
const KEY_Arabic_6: number
const KEY_Arabic_7: number
const KEY_Arabic_8: number
const KEY_Arabic_9: number
const KEY_Arabic_ain: number
const KEY_Arabic_alef: number
const KEY_Arabic_alefmaksura: number
const KEY_Arabic_beh: number
const KEY_Arabic_comma: number
const KEY_Arabic_dad: number
const KEY_Arabic_dal: number
const KEY_Arabic_damma: number
const KEY_Arabic_dammatan: number
const KEY_Arabic_ddal: number
const KEY_Arabic_farsi_yeh: number
const KEY_Arabic_fatha: number
const KEY_Arabic_fathatan: number
const KEY_Arabic_feh: number
const KEY_Arabic_fullstop: number
const KEY_Arabic_gaf: number
const KEY_Arabic_ghain: number
const KEY_Arabic_ha: number
const KEY_Arabic_hah: number
const KEY_Arabic_hamza: number
const KEY_Arabic_hamza_above: number
const KEY_Arabic_hamza_below: number
const KEY_Arabic_hamzaonalef: number
const KEY_Arabic_hamzaonwaw: number
const KEY_Arabic_hamzaonyeh: number
const KEY_Arabic_hamzaunderalef: number
const KEY_Arabic_heh: number
const KEY_Arabic_heh_doachashmee: number
const KEY_Arabic_heh_goal: number
const KEY_Arabic_jeem: number
const KEY_Arabic_jeh: number
const KEY_Arabic_kaf: number
const KEY_Arabic_kasra: number
const KEY_Arabic_kasratan: number
const KEY_Arabic_keheh: number
const KEY_Arabic_khah: number
const KEY_Arabic_lam: number
const KEY_Arabic_madda_above: number
const KEY_Arabic_maddaonalef: number
const KEY_Arabic_meem: number
const KEY_Arabic_noon: number
const KEY_Arabic_noon_ghunna: number
const KEY_Arabic_peh: number
const KEY_Arabic_percent: number
const KEY_Arabic_qaf: number
const KEY_Arabic_question_mark: number
const KEY_Arabic_ra: number
const KEY_Arabic_rreh: number
const KEY_Arabic_sad: number
const KEY_Arabic_seen: number
const KEY_Arabic_semicolon: number
const KEY_Arabic_shadda: number
const KEY_Arabic_sheen: number
const KEY_Arabic_sukun: number
const KEY_Arabic_superscript_alef: number
const KEY_Arabic_switch: number
const KEY_Arabic_tah: number
const KEY_Arabic_tatweel: number
const KEY_Arabic_tcheh: number
const KEY_Arabic_teh: number
const KEY_Arabic_tehmarbuta: number
const KEY_Arabic_thal: number
const KEY_Arabic_theh: number
const KEY_Arabic_tteh: number
const KEY_Arabic_veh: number
const KEY_Arabic_waw: number
const KEY_Arabic_yeh: number
const KEY_Arabic_yeh_baree: number
const KEY_Arabic_zah: number
const KEY_Arabic_zain: number
const KEY_Aring: number
const KEY_Armenian_AT: number
const KEY_Armenian_AYB: number
const KEY_Armenian_BEN: number
const KEY_Armenian_CHA: number
const KEY_Armenian_DA: number
const KEY_Armenian_DZA: number
const KEY_Armenian_E: number
const KEY_Armenian_FE: number
const KEY_Armenian_GHAT: number
const KEY_Armenian_GIM: number
const KEY_Armenian_HI: number
const KEY_Armenian_HO: number
const KEY_Armenian_INI: number
const KEY_Armenian_JE: number
const KEY_Armenian_KE: number
const KEY_Armenian_KEN: number
const KEY_Armenian_KHE: number
const KEY_Armenian_LYUN: number
const KEY_Armenian_MEN: number
const KEY_Armenian_NU: number
const KEY_Armenian_O: number
const KEY_Armenian_PE: number
const KEY_Armenian_PYUR: number
const KEY_Armenian_RA: number
const KEY_Armenian_RE: number
const KEY_Armenian_SE: number
const KEY_Armenian_SHA: number
const KEY_Armenian_TCHE: number
const KEY_Armenian_TO: number
const KEY_Armenian_TSA: number
const KEY_Armenian_TSO: number
const KEY_Armenian_TYUN: number
const KEY_Armenian_VEV: number
const KEY_Armenian_VO: number
const KEY_Armenian_VYUN: number
const KEY_Armenian_YECH: number
const KEY_Armenian_ZA: number
const KEY_Armenian_ZHE: number
const KEY_Armenian_accent: number
const KEY_Armenian_amanak: number
const KEY_Armenian_apostrophe: number
const KEY_Armenian_at: number
const KEY_Armenian_ayb: number
const KEY_Armenian_ben: number
const KEY_Armenian_but: number
const KEY_Armenian_cha: number
const KEY_Armenian_da: number
const KEY_Armenian_dza: number
const KEY_Armenian_e: number
const KEY_Armenian_exclam: number
const KEY_Armenian_fe: number
const KEY_Armenian_full_stop: number
const KEY_Armenian_ghat: number
const KEY_Armenian_gim: number
const KEY_Armenian_hi: number
const KEY_Armenian_ho: number
const KEY_Armenian_hyphen: number
const KEY_Armenian_ini: number
const KEY_Armenian_je: number
const KEY_Armenian_ke: number
const KEY_Armenian_ken: number
const KEY_Armenian_khe: number
const KEY_Armenian_ligature_ew: number
const KEY_Armenian_lyun: number
const KEY_Armenian_men: number
const KEY_Armenian_nu: number
const KEY_Armenian_o: number
const KEY_Armenian_paruyk: number
const KEY_Armenian_pe: number
const KEY_Armenian_pyur: number
const KEY_Armenian_question: number
const KEY_Armenian_ra: number
const KEY_Armenian_re: number
const KEY_Armenian_se: number
const KEY_Armenian_separation_mark: number
const KEY_Armenian_sha: number
const KEY_Armenian_shesht: number
const KEY_Armenian_tche: number
const KEY_Armenian_to: number
const KEY_Armenian_tsa: number
const KEY_Armenian_tso: number
const KEY_Armenian_tyun: number
const KEY_Armenian_verjaket: number
const KEY_Armenian_vev: number
const KEY_Armenian_vo: number
const KEY_Armenian_vyun: number
const KEY_Armenian_yech: number
const KEY_Armenian_yentamna: number
const KEY_Armenian_za: number
const KEY_Armenian_zhe: number
const KEY_Atilde: number
const KEY_AudibleBell_Enable: number
const KEY_AudioCycleTrack: number
const KEY_AudioForward: number
const KEY_AudioLowerVolume: number
const KEY_AudioMedia: number
const KEY_AudioMicMute: number
const KEY_AudioMute: number
const KEY_AudioNext: number
const KEY_AudioPause: number
const KEY_AudioPlay: number
const KEY_AudioPreset: number
const KEY_AudioPrev: number
const KEY_AudioRaiseVolume: number
const KEY_AudioRandomPlay: number
const KEY_AudioRecord: number
const KEY_AudioRepeat: number
const KEY_AudioRewind: number
const KEY_AudioStop: number
const KEY_Away: number
const KEY_B: number
const KEY_Babovedot: number
const KEY_Back: number
const KEY_BackForward: number
const KEY_BackSpace: number
const KEY_Battery: number
const KEY_Begin: number
const KEY_Blue: number
const KEY_Bluetooth: number
const KEY_Book: number
const KEY_BounceKeys_Enable: number
const KEY_Break: number
const KEY_BrightnessAdjust: number
const KEY_Byelorussian_SHORTU: number
const KEY_Byelorussian_shortu: number
const KEY_C: number
const KEY_CD: number
const KEY_CH: number
const KEY_C_H: number
const KEY_C_h: number
const KEY_Cabovedot: number
const KEY_Cacute: number
const KEY_Calculator: number
const KEY_Calendar: number
const KEY_Cancel: number
const KEY_Caps_Lock: number
const KEY_Ccaron: number
const KEY_Ccedilla: number
const KEY_Ccircumflex: number
const KEY_Ch: number
const KEY_Clear: number
const KEY_ClearGrab: number
const KEY_Close: number
const KEY_Codeinput: number
const KEY_ColonSign: number
const KEY_Community: number
const KEY_ContrastAdjust: number
const KEY_Control_L: number
const KEY_Control_R: number
const KEY_Copy: number
const KEY_CruzeiroSign: number
const KEY_Cut: number
const KEY_CycleAngle: number
const KEY_Cyrillic_A: number
const KEY_Cyrillic_BE: number
const KEY_Cyrillic_CHE: number
const KEY_Cyrillic_CHE_descender: number
const KEY_Cyrillic_CHE_vertstroke: number
const KEY_Cyrillic_DE: number
const KEY_Cyrillic_DZHE: number
const KEY_Cyrillic_E: number
const KEY_Cyrillic_EF: number
const KEY_Cyrillic_EL: number
const KEY_Cyrillic_EM: number
const KEY_Cyrillic_EN: number
const KEY_Cyrillic_EN_descender: number
const KEY_Cyrillic_ER: number
const KEY_Cyrillic_ES: number
const KEY_Cyrillic_GHE: number
const KEY_Cyrillic_GHE_bar: number
const KEY_Cyrillic_HA: number
const KEY_Cyrillic_HARDSIGN: number
const KEY_Cyrillic_HA_descender: number
const KEY_Cyrillic_I: number
const KEY_Cyrillic_IE: number
const KEY_Cyrillic_IO: number
const KEY_Cyrillic_I_macron: number
const KEY_Cyrillic_JE: number
const KEY_Cyrillic_KA: number
const KEY_Cyrillic_KA_descender: number
const KEY_Cyrillic_KA_vertstroke: number
const KEY_Cyrillic_LJE: number
const KEY_Cyrillic_NJE: number
const KEY_Cyrillic_O: number
const KEY_Cyrillic_O_bar: number
const KEY_Cyrillic_PE: number
const KEY_Cyrillic_SCHWA: number
const KEY_Cyrillic_SHA: number
const KEY_Cyrillic_SHCHA: number
const KEY_Cyrillic_SHHA: number
const KEY_Cyrillic_SHORTI: number
const KEY_Cyrillic_SOFTSIGN: number
const KEY_Cyrillic_TE: number
const KEY_Cyrillic_TSE: number
const KEY_Cyrillic_U: number
const KEY_Cyrillic_U_macron: number
const KEY_Cyrillic_U_straight: number
const KEY_Cyrillic_U_straight_bar: number
const KEY_Cyrillic_VE: number
const KEY_Cyrillic_YA: number
const KEY_Cyrillic_YERU: number
const KEY_Cyrillic_YU: number
const KEY_Cyrillic_ZE: number
const KEY_Cyrillic_ZHE: number
const KEY_Cyrillic_ZHE_descender: number
const KEY_Cyrillic_a: number
const KEY_Cyrillic_be: number
const KEY_Cyrillic_che: number
const KEY_Cyrillic_che_descender: number
const KEY_Cyrillic_che_vertstroke: number
const KEY_Cyrillic_de: number
const KEY_Cyrillic_dzhe: number
const KEY_Cyrillic_e: number
const KEY_Cyrillic_ef: number
const KEY_Cyrillic_el: number
const KEY_Cyrillic_em: number
const KEY_Cyrillic_en: number
const KEY_Cyrillic_en_descender: number
const KEY_Cyrillic_er: number
const KEY_Cyrillic_es: number
const KEY_Cyrillic_ghe: number
const KEY_Cyrillic_ghe_bar: number
const KEY_Cyrillic_ha: number
const KEY_Cyrillic_ha_descender: number
const KEY_Cyrillic_hardsign: number
const KEY_Cyrillic_i: number
const KEY_Cyrillic_i_macron: number
const KEY_Cyrillic_ie: number
const KEY_Cyrillic_io: number
const KEY_Cyrillic_je: number
const KEY_Cyrillic_ka: number
const KEY_Cyrillic_ka_descender: number
const KEY_Cyrillic_ka_vertstroke: number
const KEY_Cyrillic_lje: number
const KEY_Cyrillic_nje: number
const KEY_Cyrillic_o: number
const KEY_Cyrillic_o_bar: number
const KEY_Cyrillic_pe: number
const KEY_Cyrillic_schwa: number
const KEY_Cyrillic_sha: number
const KEY_Cyrillic_shcha: number
const KEY_Cyrillic_shha: number
const KEY_Cyrillic_shorti: number
const KEY_Cyrillic_softsign: number
const KEY_Cyrillic_te: number
const KEY_Cyrillic_tse: number
const KEY_Cyrillic_u: number
const KEY_Cyrillic_u_macron: number
const KEY_Cyrillic_u_straight: number
const KEY_Cyrillic_u_straight_bar: number
const KEY_Cyrillic_ve: number
const KEY_Cyrillic_ya: number
const KEY_Cyrillic_yeru: number
const KEY_Cyrillic_yu: number
const KEY_Cyrillic_ze: number
const KEY_Cyrillic_zhe: number
const KEY_Cyrillic_zhe_descender: number
const KEY_D: number
const KEY_DOS: number
const KEY_Dabovedot: number
const KEY_Dcaron: number
const KEY_Delete: number
const KEY_Display: number
const KEY_Documents: number
const KEY_DongSign: number
const KEY_Down: number
const KEY_Dstroke: number
const KEY_E: number
const KEY_ENG: number
const KEY_ETH: number
const KEY_EZH: number
const KEY_Eabovedot: number
const KEY_Eacute: number
const KEY_Ebelowdot: number
const KEY_Ecaron: number
const KEY_Ecircumflex: number
const KEY_Ecircumflexacute: number
const KEY_Ecircumflexbelowdot: number
const KEY_Ecircumflexgrave: number
const KEY_Ecircumflexhook: number
const KEY_Ecircumflextilde: number
const KEY_EcuSign: number
const KEY_Ediaeresis: number
const KEY_Egrave: number
const KEY_Ehook: number
const KEY_Eisu_Shift: number
const KEY_Eisu_toggle: number
const KEY_Eject: number
const KEY_Emacron: number
const KEY_End: number
const KEY_Eogonek: number
const KEY_Escape: number
const KEY_Eth: number
const KEY_Etilde: number
const KEY_EuroSign: number
const KEY_Excel: number
const KEY_Execute: number
const KEY_Explorer: number
const KEY_F: number
const KEY_F1: number
const KEY_F10: number
const KEY_F11: number
const KEY_F12: number
const KEY_F13: number
const KEY_F14: number
const KEY_F15: number
const KEY_F16: number
const KEY_F17: number
const KEY_F18: number
const KEY_F19: number
const KEY_F2: number
const KEY_F20: number
const KEY_F21: number
const KEY_F22: number
const KEY_F23: number
const KEY_F24: number
const KEY_F25: number
const KEY_F26: number
const KEY_F27: number
const KEY_F28: number
const KEY_F29: number
const KEY_F3: number
const KEY_F30: number
const KEY_F31: number
const KEY_F32: number
const KEY_F33: number
const KEY_F34: number
const KEY_F35: number
const KEY_F4: number
const KEY_F5: number
const KEY_F6: number
const KEY_F7: number
const KEY_F8: number
const KEY_F9: number
const KEY_FFrancSign: number
const KEY_Fabovedot: number
const KEY_Farsi_0: number
const KEY_Farsi_1: number
const KEY_Farsi_2: number
const KEY_Farsi_3: number
const KEY_Farsi_4: number
const KEY_Farsi_5: number
const KEY_Farsi_6: number
const KEY_Farsi_7: number
const KEY_Farsi_8: number
const KEY_Farsi_9: number
const KEY_Farsi_yeh: number
const KEY_Favorites: number
const KEY_Finance: number
const KEY_Find: number
const KEY_First_Virtual_Screen: number
const KEY_Forward: number
const KEY_FrameBack: number
const KEY_FrameForward: number
const KEY_G: number
const KEY_Gabovedot: number
const KEY_Game: number
const KEY_Gbreve: number
const KEY_Gcaron: number
const KEY_Gcedilla: number
const KEY_Gcircumflex: number
const KEY_Georgian_an: number
const KEY_Georgian_ban: number
const KEY_Georgian_can: number
const KEY_Georgian_char: number
const KEY_Georgian_chin: number
const KEY_Georgian_cil: number
const KEY_Georgian_don: number
const KEY_Georgian_en: number
const KEY_Georgian_fi: number
const KEY_Georgian_gan: number
const KEY_Georgian_ghan: number
const KEY_Georgian_hae: number
const KEY_Georgian_har: number
const KEY_Georgian_he: number
const KEY_Georgian_hie: number
const KEY_Georgian_hoe: number
const KEY_Georgian_in: number
const KEY_Georgian_jhan: number
const KEY_Georgian_jil: number
const KEY_Georgian_kan: number
const KEY_Georgian_khar: number
const KEY_Georgian_las: number
const KEY_Georgian_man: number
const KEY_Georgian_nar: number
const KEY_Georgian_on: number
const KEY_Georgian_par: number
const KEY_Georgian_phar: number
const KEY_Georgian_qar: number
const KEY_Georgian_rae: number
const KEY_Georgian_san: number
const KEY_Georgian_shin: number
const KEY_Georgian_tan: number
const KEY_Georgian_tar: number
const KEY_Georgian_un: number
const KEY_Georgian_vin: number
const KEY_Georgian_we: number
const KEY_Georgian_xan: number
const KEY_Georgian_zen: number
const KEY_Georgian_zhar: number
const KEY_Go: number
const KEY_Greek_ALPHA: number
const KEY_Greek_ALPHAaccent: number
const KEY_Greek_BETA: number
const KEY_Greek_CHI: number
const KEY_Greek_DELTA: number
const KEY_Greek_EPSILON: number
const KEY_Greek_EPSILONaccent: number
const KEY_Greek_ETA: number
const KEY_Greek_ETAaccent: number
const KEY_Greek_GAMMA: number
const KEY_Greek_IOTA: number
const KEY_Greek_IOTAaccent: number
const KEY_Greek_IOTAdiaeresis: number
const KEY_Greek_IOTAdieresis: number
const KEY_Greek_KAPPA: number
const KEY_Greek_LAMBDA: number
const KEY_Greek_LAMDA: number
const KEY_Greek_MU: number
const KEY_Greek_NU: number
const KEY_Greek_OMEGA: number
const KEY_Greek_OMEGAaccent: number
const KEY_Greek_OMICRON: number
const KEY_Greek_OMICRONaccent: number
const KEY_Greek_PHI: number
const KEY_Greek_PI: number
const KEY_Greek_PSI: number
const KEY_Greek_RHO: number
const KEY_Greek_SIGMA: number
const KEY_Greek_TAU: number
const KEY_Greek_THETA: number
const KEY_Greek_UPSILON: number
const KEY_Greek_UPSILONaccent: number
const KEY_Greek_UPSILONdieresis: number
const KEY_Greek_XI: number
const KEY_Greek_ZETA: number
const KEY_Greek_accentdieresis: number
const KEY_Greek_alpha: number
const KEY_Greek_alphaaccent: number
const KEY_Greek_beta: number
const KEY_Greek_chi: number
const KEY_Greek_delta: number
const KEY_Greek_epsilon: number
const KEY_Greek_epsilonaccent: number
const KEY_Greek_eta: number
const KEY_Greek_etaaccent: number
const KEY_Greek_finalsmallsigma: number
const KEY_Greek_gamma: number
const KEY_Greek_horizbar: number
const KEY_Greek_iota: number
const KEY_Greek_iotaaccent: number
const KEY_Greek_iotaaccentdieresis: number
const KEY_Greek_iotadieresis: number
const KEY_Greek_kappa: number
const KEY_Greek_lambda: number
const KEY_Greek_lamda: number
const KEY_Greek_mu: number
const KEY_Greek_nu: number
const KEY_Greek_omega: number
const KEY_Greek_omegaaccent: number
const KEY_Greek_omicron: number
const KEY_Greek_omicronaccent: number
const KEY_Greek_phi: number
const KEY_Greek_pi: number
const KEY_Greek_psi: number
const KEY_Greek_rho: number
const KEY_Greek_sigma: number
const KEY_Greek_switch: number
const KEY_Greek_tau: number
const KEY_Greek_theta: number
const KEY_Greek_upsilon: number
const KEY_Greek_upsilonaccent: number
const KEY_Greek_upsilonaccentdieresis: number
const KEY_Greek_upsilondieresis: number
const KEY_Greek_xi: number
const KEY_Greek_zeta: number
const KEY_Green: number
const KEY_H: number
const KEY_Hangul: number
const KEY_Hangul_A: number
const KEY_Hangul_AE: number
const KEY_Hangul_AraeA: number
const KEY_Hangul_AraeAE: number
const KEY_Hangul_Banja: number
const KEY_Hangul_Cieuc: number
const KEY_Hangul_Codeinput: number
const KEY_Hangul_Dikeud: number
const KEY_Hangul_E: number
const KEY_Hangul_EO: number
const KEY_Hangul_EU: number
const KEY_Hangul_End: number
const KEY_Hangul_Hanja: number
const KEY_Hangul_Hieuh: number
const KEY_Hangul_I: number
const KEY_Hangul_Ieung: number
const KEY_Hangul_J_Cieuc: number
const KEY_Hangul_J_Dikeud: number
const KEY_Hangul_J_Hieuh: number
const KEY_Hangul_J_Ieung: number
const KEY_Hangul_J_Jieuj: number
const KEY_Hangul_J_Khieuq: number
const KEY_Hangul_J_Kiyeog: number
const KEY_Hangul_J_KiyeogSios: number
const KEY_Hangul_J_KkogjiDalrinIeung: number
const KEY_Hangul_J_Mieum: number
const KEY_Hangul_J_Nieun: number
const KEY_Hangul_J_NieunHieuh: number
const KEY_Hangul_J_NieunJieuj: number
const KEY_Hangul_J_PanSios: number
const KEY_Hangul_J_Phieuf: number
const KEY_Hangul_J_Pieub: number
const KEY_Hangul_J_PieubSios: number
const KEY_Hangul_J_Rieul: number
const KEY_Hangul_J_RieulHieuh: number
const KEY_Hangul_J_RieulKiyeog: number
const KEY_Hangul_J_RieulMieum: number
const KEY_Hangul_J_RieulPhieuf: number
const KEY_Hangul_J_RieulPieub: number
const KEY_Hangul_J_RieulSios: number
const KEY_Hangul_J_RieulTieut: number
const KEY_Hangul_J_Sios: number
const KEY_Hangul_J_SsangKiyeog: number
const KEY_Hangul_J_SsangSios: number
const KEY_Hangul_J_Tieut: number
const KEY_Hangul_J_YeorinHieuh: number
const KEY_Hangul_Jamo: number
const KEY_Hangul_Jeonja: number
const KEY_Hangul_Jieuj: number
const KEY_Hangul_Khieuq: number
const KEY_Hangul_Kiyeog: number
const KEY_Hangul_KiyeogSios: number
const KEY_Hangul_KkogjiDalrinIeung: number
const KEY_Hangul_Mieum: number
const KEY_Hangul_MultipleCandidate: number
const KEY_Hangul_Nieun: number
const KEY_Hangul_NieunHieuh: number
const KEY_Hangul_NieunJieuj: number
const KEY_Hangul_O: number
const KEY_Hangul_OE: number
const KEY_Hangul_PanSios: number
const KEY_Hangul_Phieuf: number
const KEY_Hangul_Pieub: number
const KEY_Hangul_PieubSios: number
const KEY_Hangul_PostHanja: number
const KEY_Hangul_PreHanja: number
const KEY_Hangul_PreviousCandidate: number
const KEY_Hangul_Rieul: number
const KEY_Hangul_RieulHieuh: number
const KEY_Hangul_RieulKiyeog: number
const KEY_Hangul_RieulMieum: number
const KEY_Hangul_RieulPhieuf: number
const KEY_Hangul_RieulPieub: number
const KEY_Hangul_RieulSios: number
const KEY_Hangul_RieulTieut: number
const KEY_Hangul_RieulYeorinHieuh: number
const KEY_Hangul_Romaja: number
const KEY_Hangul_SingleCandidate: number
const KEY_Hangul_Sios: number
const KEY_Hangul_Special: number
const KEY_Hangul_SsangDikeud: number
const KEY_Hangul_SsangJieuj: number
const KEY_Hangul_SsangKiyeog: number
const KEY_Hangul_SsangPieub: number
const KEY_Hangul_SsangSios: number
const KEY_Hangul_Start: number
const KEY_Hangul_SunkyeongeumMieum: number
const KEY_Hangul_SunkyeongeumPhieuf: number
const KEY_Hangul_SunkyeongeumPieub: number
const KEY_Hangul_Tieut: number
const KEY_Hangul_U: number
const KEY_Hangul_WA: number
const KEY_Hangul_WAE: number
const KEY_Hangul_WE: number
const KEY_Hangul_WEO: number
const KEY_Hangul_WI: number
const KEY_Hangul_YA: number
const KEY_Hangul_YAE: number
const KEY_Hangul_YE: number
const KEY_Hangul_YEO: number
const KEY_Hangul_YI: number
const KEY_Hangul_YO: number
const KEY_Hangul_YU: number
const KEY_Hangul_YeorinHieuh: number
const KEY_Hangul_switch: number
const KEY_Hankaku: number
const KEY_Hcircumflex: number
const KEY_Hebrew_switch: number
const KEY_Help: number
const KEY_Henkan: number
const KEY_Henkan_Mode: number
const KEY_Hibernate: number
const KEY_Hiragana: number
const KEY_Hiragana_Katakana: number
const KEY_History: number
const KEY_Home: number
const KEY_HomePage: number
const KEY_HotLinks: number
const KEY_Hstroke: number
const KEY_Hyper_L: number
const KEY_Hyper_R: number
const KEY_I: number
const KEY_ISO_Center_Object: number
const KEY_ISO_Continuous_Underline: number
const KEY_ISO_Discontinuous_Underline: number
const KEY_ISO_Emphasize: number
const KEY_ISO_Enter: number
const KEY_ISO_Fast_Cursor_Down: number
const KEY_ISO_Fast_Cursor_Left: number
const KEY_ISO_Fast_Cursor_Right: number
const KEY_ISO_Fast_Cursor_Up: number
const KEY_ISO_First_Group: number
const KEY_ISO_First_Group_Lock: number
const KEY_ISO_Group_Latch: number
const KEY_ISO_Group_Lock: number
const KEY_ISO_Group_Shift: number
const KEY_ISO_Last_Group: number
const KEY_ISO_Last_Group_Lock: number
const KEY_ISO_Left_Tab: number
const KEY_ISO_Level2_Latch: number
const KEY_ISO_Level3_Latch: number
const KEY_ISO_Level3_Lock: number
const KEY_ISO_Level3_Shift: number
const KEY_ISO_Level5_Latch: number
const KEY_ISO_Level5_Lock: number
const KEY_ISO_Level5_Shift: number
const KEY_ISO_Lock: number
const KEY_ISO_Move_Line_Down: number
const KEY_ISO_Move_Line_Up: number
const KEY_ISO_Next_Group: number
const KEY_ISO_Next_Group_Lock: number
const KEY_ISO_Partial_Line_Down: number
const KEY_ISO_Partial_Line_Up: number
const KEY_ISO_Partial_Space_Left: number
const KEY_ISO_Partial_Space_Right: number
const KEY_ISO_Prev_Group: number
const KEY_ISO_Prev_Group_Lock: number
const KEY_ISO_Release_Both_Margins: number
const KEY_ISO_Release_Margin_Left: number
const KEY_ISO_Release_Margin_Right: number
const KEY_ISO_Set_Margin_Left: number
const KEY_ISO_Set_Margin_Right: number
const KEY_Iabovedot: number
const KEY_Iacute: number
const KEY_Ibelowdot: number
const KEY_Ibreve: number
const KEY_Icircumflex: number
const KEY_Idiaeresis: number
const KEY_Igrave: number
const KEY_Ihook: number
const KEY_Imacron: number
const KEY_Insert: number
const KEY_Iogonek: number
const KEY_Itilde: number
const KEY_J: number
const KEY_Jcircumflex: number
const KEY_K: number
const KEY_KP_0: number
const KEY_KP_1: number
const KEY_KP_2: number
const KEY_KP_3: number
const KEY_KP_4: number
const KEY_KP_5: number
const KEY_KP_6: number
const KEY_KP_7: number
const KEY_KP_8: number
const KEY_KP_9: number
const KEY_KP_Add: number
const KEY_KP_Begin: number
const KEY_KP_Decimal: number
const KEY_KP_Delete: number
const KEY_KP_Divide: number
const KEY_KP_Down: number
const KEY_KP_End: number
const KEY_KP_Enter: number
const KEY_KP_Equal: number
const KEY_KP_F1: number
const KEY_KP_F2: number
const KEY_KP_F3: number
const KEY_KP_F4: number
const KEY_KP_Home: number
const KEY_KP_Insert: number
const KEY_KP_Left: number
const KEY_KP_Multiply: number
const KEY_KP_Next: number
const KEY_KP_Page_Down: number
const KEY_KP_Page_Up: number
const KEY_KP_Prior: number
const KEY_KP_Right: number
const KEY_KP_Separator: number
const KEY_KP_Space: number
const KEY_KP_Subtract: number
const KEY_KP_Tab: number
const KEY_KP_Up: number
const KEY_Kana_Lock: number
const KEY_Kana_Shift: number
const KEY_Kanji: number
const KEY_Kanji_Bangou: number
const KEY_Katakana: number
const KEY_KbdBrightnessDown: number
const KEY_KbdBrightnessUp: number
const KEY_KbdLightOnOff: number
const KEY_Kcedilla: number
const KEY_Keyboard: number
const KEY_Korean_Won: number
const KEY_L: number
const KEY_L1: number
const KEY_L10: number
const KEY_L2: number
const KEY_L3: number
const KEY_L4: number
const KEY_L5: number
const KEY_L6: number
const KEY_L7: number
const KEY_L8: number
const KEY_L9: number
const KEY_Lacute: number
const KEY_Last_Virtual_Screen: number
const KEY_Launch0: number
const KEY_Launch1: number
const KEY_Launch2: number
const KEY_Launch3: number
const KEY_Launch4: number
const KEY_Launch5: number
const KEY_Launch6: number
const KEY_Launch7: number
const KEY_Launch8: number
const KEY_Launch9: number
const KEY_LaunchA: number
const KEY_LaunchB: number
const KEY_LaunchC: number
const KEY_LaunchD: number
const KEY_LaunchE: number
const KEY_LaunchF: number
const KEY_Lbelowdot: number
const KEY_Lcaron: number
const KEY_Lcedilla: number
const KEY_Left: number
const KEY_LightBulb: number
const KEY_Linefeed: number
const KEY_LiraSign: number
const KEY_LogGrabInfo: number
const KEY_LogOff: number
const KEY_LogWindowTree: number
const KEY_Lstroke: number
const KEY_M: number
const KEY_Mabovedot: number
const KEY_Macedonia_DSE: number
const KEY_Macedonia_GJE: number
const KEY_Macedonia_KJE: number
const KEY_Macedonia_dse: number
const KEY_Macedonia_gje: number
const KEY_Macedonia_kje: number
const KEY_Mae_Koho: number
const KEY_Mail: number
const KEY_MailForward: number
const KEY_Market: number
const KEY_Massyo: number
const KEY_Meeting: number
const KEY_Memo: number
const KEY_Menu: number
const KEY_MenuKB: number
const KEY_MenuPB: number
const KEY_Messenger: number
const KEY_Meta_L: number
const KEY_Meta_R: number
const KEY_MillSign: number
const KEY_ModeLock: number
const KEY_Mode_switch: number
const KEY_MonBrightnessDown: number
const KEY_MonBrightnessUp: number
const KEY_MouseKeys_Accel_Enable: number
const KEY_MouseKeys_Enable: number
const KEY_Muhenkan: number
const KEY_Multi_key: number
const KEY_MultipleCandidate: number
const KEY_Music: number
const KEY_MyComputer: number
const KEY_MySites: number
const KEY_N: number
const KEY_Nacute: number
const KEY_NairaSign: number
const KEY_Ncaron: number
const KEY_Ncedilla: number
const KEY_New: number
const KEY_NewSheqelSign: number
const KEY_News: number
const KEY_Next: number
const KEY_Next_VMode: number
const KEY_Next_Virtual_Screen: number
const KEY_Ntilde: number
const KEY_Num_Lock: number
const KEY_O: number
const KEY_OE: number
const KEY_Oacute: number
const KEY_Obarred: number
const KEY_Obelowdot: number
const KEY_Ocaron: number
const KEY_Ocircumflex: number
const KEY_Ocircumflexacute: number
const KEY_Ocircumflexbelowdot: number
const KEY_Ocircumflexgrave: number
const KEY_Ocircumflexhook: number
const KEY_Ocircumflextilde: number
const KEY_Odiaeresis: number
const KEY_Odoubleacute: number
const KEY_OfficeHome: number
const KEY_Ograve: number
const KEY_Ohook: number
const KEY_Ohorn: number
const KEY_Ohornacute: number
const KEY_Ohornbelowdot: number
const KEY_Ohorngrave: number
const KEY_Ohornhook: number
const KEY_Ohorntilde: number
const KEY_Omacron: number
const KEY_Ooblique: number
const KEY_Open: number
const KEY_OpenURL: number
const KEY_Option: number
const KEY_Oslash: number
const KEY_Otilde: number
const KEY_Overlay1_Enable: number
const KEY_Overlay2_Enable: number
const KEY_P: number
const KEY_Pabovedot: number
const KEY_Page_Down: number
const KEY_Page_Up: number
const KEY_Paste: number
const KEY_Pause: number
const KEY_PesetaSign: number
const KEY_Phone: number
const KEY_Pictures: number
const KEY_Pointer_Accelerate: number
const KEY_Pointer_Button1: number
const KEY_Pointer_Button2: number
const KEY_Pointer_Button3: number
const KEY_Pointer_Button4: number
const KEY_Pointer_Button5: number
const KEY_Pointer_Button_Dflt: number
const KEY_Pointer_DblClick1: number
const KEY_Pointer_DblClick2: number
const KEY_Pointer_DblClick3: number
const KEY_Pointer_DblClick4: number
const KEY_Pointer_DblClick5: number
const KEY_Pointer_DblClick_Dflt: number
const KEY_Pointer_DfltBtnNext: number
const KEY_Pointer_DfltBtnPrev: number
const KEY_Pointer_Down: number
const KEY_Pointer_DownLeft: number
const KEY_Pointer_DownRight: number
const KEY_Pointer_Drag1: number
const KEY_Pointer_Drag2: number
const KEY_Pointer_Drag3: number
const KEY_Pointer_Drag4: number
const KEY_Pointer_Drag5: number
const KEY_Pointer_Drag_Dflt: number
const KEY_Pointer_EnableKeys: number
const KEY_Pointer_Left: number
const KEY_Pointer_Right: number
const KEY_Pointer_Up: number
const KEY_Pointer_UpLeft: number
const KEY_Pointer_UpRight: number
const KEY_PowerDown: number
const KEY_PowerOff: number
const KEY_Prev_VMode: number
const KEY_Prev_Virtual_Screen: number
const KEY_PreviousCandidate: number
const KEY_Print: number
const KEY_Prior: number
const KEY_Q: number
const KEY_R: number
const KEY_R1: number
const KEY_R10: number
const KEY_R11: number
const KEY_R12: number
const KEY_R13: number
const KEY_R14: number
const KEY_R15: number
const KEY_R2: number
const KEY_R3: number
const KEY_R4: number
const KEY_R5: number
const KEY_R6: number
const KEY_R7: number
const KEY_R8: number
const KEY_R9: number
const KEY_RFKill: number
const KEY_Racute: number
const KEY_Rcaron: number
const KEY_Rcedilla: number
const KEY_Red: number
const KEY_Redo: number
const KEY_Refresh: number
const KEY_Reload: number
const KEY_RepeatKeys_Enable: number
const KEY_Reply: number
const KEY_Return: number
const KEY_Right: number
const KEY_RockerDown: number
const KEY_RockerEnter: number
const KEY_RockerUp: number
const KEY_Romaji: number
const KEY_RotateWindows: number
const KEY_RotationKB: number
const KEY_RotationPB: number
const KEY_RupeeSign: number
const KEY_S: number
const KEY_SCHWA: number
const KEY_Sabovedot: number
const KEY_Sacute: number
const KEY_Save: number
const KEY_Scaron: number
const KEY_Scedilla: number
const KEY_Scircumflex: number
const KEY_ScreenSaver: number
const KEY_ScrollClick: number
const KEY_ScrollDown: number
const KEY_ScrollUp: number
const KEY_Scroll_Lock: number
const KEY_Search: number
const KEY_Select: number
const KEY_SelectButton: number
const KEY_Send: number
const KEY_Serbian_DJE: number
const KEY_Serbian_DZE: number
const KEY_Serbian_JE: number
const KEY_Serbian_LJE: number
const KEY_Serbian_NJE: number
const KEY_Serbian_TSHE: number
const KEY_Serbian_dje: number
const KEY_Serbian_dze: number
const KEY_Serbian_je: number
const KEY_Serbian_lje: number
const KEY_Serbian_nje: number
const KEY_Serbian_tshe: number
const KEY_Shift_L: number
const KEY_Shift_Lock: number
const KEY_Shift_R: number
const KEY_Shop: number
const KEY_SingleCandidate: number
const KEY_Sinh_a: number
const KEY_Sinh_aa: number
const KEY_Sinh_aa2: number
const KEY_Sinh_ae: number
const KEY_Sinh_ae2: number
const KEY_Sinh_aee: number
const KEY_Sinh_aee2: number
const KEY_Sinh_ai: number
const KEY_Sinh_ai2: number
const KEY_Sinh_al: number
const KEY_Sinh_au: number
const KEY_Sinh_au2: number
const KEY_Sinh_ba: number
const KEY_Sinh_bha: number
const KEY_Sinh_ca: number
const KEY_Sinh_cha: number
const KEY_Sinh_dda: number
const KEY_Sinh_ddha: number
const KEY_Sinh_dha: number
const KEY_Sinh_dhha: number
const KEY_Sinh_e: number
const KEY_Sinh_e2: number
const KEY_Sinh_ee: number
const KEY_Sinh_ee2: number
const KEY_Sinh_fa: number
const KEY_Sinh_ga: number
const KEY_Sinh_gha: number
const KEY_Sinh_h2: number
const KEY_Sinh_ha: number
const KEY_Sinh_i: number
const KEY_Sinh_i2: number
const KEY_Sinh_ii: number
const KEY_Sinh_ii2: number
const KEY_Sinh_ja: number
const KEY_Sinh_jha: number
const KEY_Sinh_jnya: number
const KEY_Sinh_ka: number
const KEY_Sinh_kha: number
const KEY_Sinh_kunddaliya: number
const KEY_Sinh_la: number
const KEY_Sinh_lla: number
const KEY_Sinh_lu: number
const KEY_Sinh_lu2: number
const KEY_Sinh_luu: number
const KEY_Sinh_luu2: number
const KEY_Sinh_ma: number
const KEY_Sinh_mba: number
const KEY_Sinh_na: number
const KEY_Sinh_ndda: number
const KEY_Sinh_ndha: number
const KEY_Sinh_ng: number
const KEY_Sinh_ng2: number
const KEY_Sinh_nga: number
const KEY_Sinh_nja: number
const KEY_Sinh_nna: number
const KEY_Sinh_nya: number
const KEY_Sinh_o: number
const KEY_Sinh_o2: number
const KEY_Sinh_oo: number
const KEY_Sinh_oo2: number
const KEY_Sinh_pa: number
const KEY_Sinh_pha: number
const KEY_Sinh_ra: number
const KEY_Sinh_ri: number
const KEY_Sinh_rii: number
const KEY_Sinh_ru2: number
const KEY_Sinh_ruu2: number
const KEY_Sinh_sa: number
const KEY_Sinh_sha: number
const KEY_Sinh_ssha: number
const KEY_Sinh_tha: number
const KEY_Sinh_thha: number
const KEY_Sinh_tta: number
const KEY_Sinh_ttha: number
const KEY_Sinh_u: number
const KEY_Sinh_u2: number
const KEY_Sinh_uu: number
const KEY_Sinh_uu2: number
const KEY_Sinh_va: number
const KEY_Sinh_ya: number
const KEY_Sleep: number
const KEY_SlowKeys_Enable: number
const KEY_Spell: number
const KEY_SplitScreen: number
const KEY_Standby: number
const KEY_Start: number
const KEY_StickyKeys_Enable: number
const KEY_Stop: number
const KEY_Subtitle: number
const KEY_Super_L: number
const KEY_Super_R: number
const KEY_Support: number
const KEY_Suspend: number
const KEY_Switch_VT_1: number
const KEY_Switch_VT_10: number
const KEY_Switch_VT_11: number
const KEY_Switch_VT_12: number
const KEY_Switch_VT_2: number
const KEY_Switch_VT_3: number
const KEY_Switch_VT_4: number
const KEY_Switch_VT_5: number
const KEY_Switch_VT_6: number
const KEY_Switch_VT_7: number
const KEY_Switch_VT_8: number
const KEY_Switch_VT_9: number
const KEY_Sys_Req: number
const KEY_T: number
const KEY_THORN: number
const KEY_Tab: number
const KEY_Tabovedot: number
const KEY_TaskPane: number
const KEY_Tcaron: number
const KEY_Tcedilla: number
const KEY_Terminal: number
const KEY_Terminate_Server: number
const KEY_Thai_baht: number
const KEY_Thai_bobaimai: number
const KEY_Thai_chochan: number
const KEY_Thai_chochang: number
const KEY_Thai_choching: number
const KEY_Thai_chochoe: number
const KEY_Thai_dochada: number
const KEY_Thai_dodek: number
const KEY_Thai_fofa: number
const KEY_Thai_fofan: number
const KEY_Thai_hohip: number
const KEY_Thai_honokhuk: number
const KEY_Thai_khokhai: number
const KEY_Thai_khokhon: number
const KEY_Thai_khokhuat: number
const KEY_Thai_khokhwai: number
const KEY_Thai_khorakhang: number
const KEY_Thai_kokai: number
const KEY_Thai_lakkhangyao: number
const KEY_Thai_lekchet: number
const KEY_Thai_lekha: number
const KEY_Thai_lekhok: number
const KEY_Thai_lekkao: number
const KEY_Thai_leknung: number
const KEY_Thai_lekpaet: number
const KEY_Thai_leksam: number
const KEY_Thai_leksi: number
const KEY_Thai_leksong: number
const KEY_Thai_leksun: number
const KEY_Thai_lochula: number
const KEY_Thai_loling: number
const KEY_Thai_lu: number
const KEY_Thai_maichattawa: number
const KEY_Thai_maiek: number
const KEY_Thai_maihanakat: number
const KEY_Thai_maihanakat_maitho: number
const KEY_Thai_maitaikhu: number
const KEY_Thai_maitho: number
const KEY_Thai_maitri: number
const KEY_Thai_maiyamok: number
const KEY_Thai_moma: number
const KEY_Thai_ngongu: number
const KEY_Thai_nikhahit: number
const KEY_Thai_nonen: number
const KEY_Thai_nonu: number
const KEY_Thai_oang: number
const KEY_Thai_paiyannoi: number
const KEY_Thai_phinthu: number
const KEY_Thai_phophan: number
const KEY_Thai_phophung: number
const KEY_Thai_phosamphao: number
const KEY_Thai_popla: number
const KEY_Thai_rorua: number
const KEY_Thai_ru: number
const KEY_Thai_saraa: number
const KEY_Thai_saraaa: number
const KEY_Thai_saraae: number
const KEY_Thai_saraaimaimalai: number
const KEY_Thai_saraaimaimuan: number
const KEY_Thai_saraam: number
const KEY_Thai_sarae: number
const KEY_Thai_sarai: number
const KEY_Thai_saraii: number
const KEY_Thai_sarao: number
const KEY_Thai_sarau: number
const KEY_Thai_saraue: number
const KEY_Thai_sarauee: number
const KEY_Thai_sarauu: number
const KEY_Thai_sorusi: number
const KEY_Thai_sosala: number
const KEY_Thai_soso: number
const KEY_Thai_sosua: number
const KEY_Thai_thanthakhat: number
const KEY_Thai_thonangmontho: number
const KEY_Thai_thophuthao: number
const KEY_Thai_thothahan: number
const KEY_Thai_thothan: number
const KEY_Thai_thothong: number
const KEY_Thai_thothung: number
const KEY_Thai_topatak: number
const KEY_Thai_totao: number
const KEY_Thai_wowaen: number
const KEY_Thai_yoyak: number
const KEY_Thai_yoying: number
const KEY_Thorn: number
const KEY_Time: number
const KEY_ToDoList: number
const KEY_Tools: number
const KEY_TopMenu: number
const KEY_TouchpadOff: number
const KEY_TouchpadOn: number
const KEY_TouchpadToggle: number
const KEY_Touroku: number
const KEY_Travel: number
const KEY_Tslash: number
const KEY_U: number
const KEY_UWB: number
const KEY_Uacute: number
const KEY_Ubelowdot: number
const KEY_Ubreve: number
const KEY_Ucircumflex: number
const KEY_Udiaeresis: number
const KEY_Udoubleacute: number
const KEY_Ugrave: number
const KEY_Uhook: number
const KEY_Uhorn: number
const KEY_Uhornacute: number
const KEY_Uhornbelowdot: number
const KEY_Uhorngrave: number
const KEY_Uhornhook: number
const KEY_Uhorntilde: number
const KEY_Ukrainian_GHE_WITH_UPTURN: number
const KEY_Ukrainian_I: number
const KEY_Ukrainian_IE: number
const KEY_Ukrainian_YI: number
const KEY_Ukrainian_ghe_with_upturn: number
const KEY_Ukrainian_i: number
const KEY_Ukrainian_ie: number
const KEY_Ukrainian_yi: number
const KEY_Ukranian_I: number
const KEY_Ukranian_JE: number
const KEY_Ukranian_YI: number
const KEY_Ukranian_i: number
const KEY_Ukranian_je: number
const KEY_Ukranian_yi: number
const KEY_Umacron: number
const KEY_Undo: number
const KEY_Ungrab: number
const KEY_Uogonek: number
const KEY_Up: number
const KEY_Uring: number
const KEY_User1KB: number
const KEY_User2KB: number
const KEY_UserPB: number
const KEY_Utilde: number
const KEY_V: number
const KEY_VendorHome: number
const KEY_Video: number
const KEY_View: number
const KEY_VoidSymbol: number
const KEY_W: number
const KEY_WLAN: number
const KEY_WWAN: number
const KEY_WWW: number
const KEY_Wacute: number
const KEY_WakeUp: number
const KEY_Wcircumflex: number
const KEY_Wdiaeresis: number
const KEY_WebCam: number
const KEY_Wgrave: number
const KEY_WheelButton: number
const KEY_WindowClear: number
const KEY_WonSign: number
const KEY_Word: number
const KEY_X: number
const KEY_Xabovedot: number
const KEY_Xfer: number
const KEY_Y: number
const KEY_Yacute: number
const KEY_Ybelowdot: number
const KEY_Ycircumflex: number
const KEY_Ydiaeresis: number
const KEY_Yellow: number
const KEY_Ygrave: number
const KEY_Yhook: number
const KEY_Ytilde: number
const KEY_Z: number
const KEY_Zabovedot: number
const KEY_Zacute: number
const KEY_Zcaron: number
const KEY_Zen_Koho: number
const KEY_Zenkaku: number
const KEY_Zenkaku_Hankaku: number
const KEY_ZoomIn: number
const KEY_ZoomOut: number
const KEY_Zstroke: number
const KEY_a: number
const KEY_aacute: number
const KEY_abelowdot: number
const KEY_abovedot: number
const KEY_abreve: number
const KEY_abreveacute: number
const KEY_abrevebelowdot: number
const KEY_abrevegrave: number
const KEY_abrevehook: number
const KEY_abrevetilde: number
const KEY_acircumflex: number
const KEY_acircumflexacute: number
const KEY_acircumflexbelowdot: number
const KEY_acircumflexgrave: number
const KEY_acircumflexhook: number
const KEY_acircumflextilde: number
const KEY_acute: number
const KEY_adiaeresis: number
const KEY_ae: number
const KEY_agrave: number
const KEY_ahook: number
const KEY_amacron: number
const KEY_ampersand: number
const KEY_aogonek: number
const KEY_apostrophe: number
const KEY_approxeq: number
const KEY_approximate: number
const KEY_aring: number
const KEY_asciicircum: number
const KEY_asciitilde: number
const KEY_asterisk: number
const KEY_at: number
const KEY_atilde: number
const KEY_b: number
const KEY_babovedot: number
const KEY_backslash: number
const KEY_ballotcross: number
const KEY_bar: number
const KEY_because: number
const KEY_blank: number
const KEY_botintegral: number
const KEY_botleftparens: number
const KEY_botleftsqbracket: number
const KEY_botleftsummation: number
const KEY_botrightparens: number
const KEY_botrightsqbracket: number
const KEY_botrightsummation: number
const KEY_bott: number
const KEY_botvertsummationconnector: number
const KEY_braceleft: number
const KEY_braceright: number
const KEY_bracketleft: number
const KEY_bracketright: number
const KEY_braille_blank: number
const KEY_braille_dot_1: number
const KEY_braille_dot_10: number
const KEY_braille_dot_2: number
const KEY_braille_dot_3: number
const KEY_braille_dot_4: number
const KEY_braille_dot_5: number
const KEY_braille_dot_6: number
const KEY_braille_dot_7: number
const KEY_braille_dot_8: number
const KEY_braille_dot_9: number
const KEY_braille_dots_1: number
const KEY_braille_dots_12: number
const KEY_braille_dots_123: number
const KEY_braille_dots_1234: number
const KEY_braille_dots_12345: number
const KEY_braille_dots_123456: number
const KEY_braille_dots_1234567: number
const KEY_braille_dots_12345678: number
const KEY_braille_dots_1234568: number
const KEY_braille_dots_123457: number
const KEY_braille_dots_1234578: number
const KEY_braille_dots_123458: number
const KEY_braille_dots_12346: number
const KEY_braille_dots_123467: number
const KEY_braille_dots_1234678: number
const KEY_braille_dots_123468: number
const KEY_braille_dots_12347: number
const KEY_braille_dots_123478: number
const KEY_braille_dots_12348: number
const KEY_braille_dots_1235: number
const KEY_braille_dots_12356: number
const KEY_braille_dots_123567: number
const KEY_braille_dots_1235678: number
const KEY_braille_dots_123568: number
const KEY_braille_dots_12357: number
const KEY_braille_dots_123578: number
const KEY_braille_dots_12358: number
const KEY_braille_dots_1236: number
const KEY_braille_dots_12367: number
const KEY_braille_dots_123678: number
const KEY_braille_dots_12368: number
const KEY_braille_dots_1237: number
const KEY_braille_dots_12378: number
const KEY_braille_dots_1238: number
const KEY_braille_dots_124: number
const KEY_braille_dots_1245: number
const KEY_braille_dots_12456: number
const KEY_braille_dots_124567: number
const KEY_braille_dots_1245678: number
const KEY_braille_dots_124568: number
const KEY_braille_dots_12457: number
const KEY_braille_dots_124578: number
const KEY_braille_dots_12458: number
const KEY_braille_dots_1246: number
const KEY_braille_dots_12467: number
const KEY_braille_dots_124678: number
const KEY_braille_dots_12468: number
const KEY_braille_dots_1247: number
const KEY_braille_dots_12478: number
const KEY_braille_dots_1248: number
const KEY_braille_dots_125: number
const KEY_braille_dots_1256: number
const KEY_braille_dots_12567: number
const KEY_braille_dots_125678: number
const KEY_braille_dots_12568: number
const KEY_braille_dots_1257: number
const KEY_braille_dots_12578: number
const KEY_braille_dots_1258: number
const KEY_braille_dots_126: number
const KEY_braille_dots_1267: number
const KEY_braille_dots_12678: number
const KEY_braille_dots_1268: number
const KEY_braille_dots_127: number
const KEY_braille_dots_1278: number
const KEY_braille_dots_128: number
const KEY_braille_dots_13: number
const KEY_braille_dots_134: number
const KEY_braille_dots_1345: number
const KEY_braille_dots_13456: number
const KEY_braille_dots_134567: number
const KEY_braille_dots_1345678: number
const KEY_braille_dots_134568: number
const KEY_braille_dots_13457: number
const KEY_braille_dots_134578: number
const KEY_braille_dots_13458: number
const KEY_braille_dots_1346: number
const KEY_braille_dots_13467: number
const KEY_braille_dots_134678: number
const KEY_braille_dots_13468: number
const KEY_braille_dots_1347: number
const KEY_braille_dots_13478: number
const KEY_braille_dots_1348: number
const KEY_braille_dots_135: number
const KEY_braille_dots_1356: number
const KEY_braille_dots_13567: number
const KEY_braille_dots_135678: number
const KEY_braille_dots_13568: number
const KEY_braille_dots_1357: number
const KEY_braille_dots_13578: number
const KEY_braille_dots_1358: number
const KEY_braille_dots_136: number
const KEY_braille_dots_1367: number
const KEY_braille_dots_13678: number
const KEY_braille_dots_1368: number
const KEY_braille_dots_137: number
const KEY_braille_dots_1378: number
const KEY_braille_dots_138: number
const KEY_braille_dots_14: number
const KEY_braille_dots_145: number
const KEY_braille_dots_1456: number
const KEY_braille_dots_14567: number
const KEY_braille_dots_145678: number
const KEY_braille_dots_14568: number
const KEY_braille_dots_1457: number
const KEY_braille_dots_14578: number
const KEY_braille_dots_1458: number
const KEY_braille_dots_146: number
const KEY_braille_dots_1467: number
const KEY_braille_dots_14678: number
const KEY_braille_dots_1468: number
const KEY_braille_dots_147: number
const KEY_braille_dots_1478: number
const KEY_braille_dots_148: number
const KEY_braille_dots_15: number
const KEY_braille_dots_156: number
const KEY_braille_dots_1567: number
const KEY_braille_dots_15678: number
const KEY_braille_dots_1568: number
const KEY_braille_dots_157: number
const KEY_braille_dots_1578: number
const KEY_braille_dots_158: number
const KEY_braille_dots_16: number
const KEY_braille_dots_167: number
const KEY_braille_dots_1678: number
const KEY_braille_dots_168: number
const KEY_braille_dots_17: number
const KEY_braille_dots_178: number
const KEY_braille_dots_18: number
const KEY_braille_dots_2: number
const KEY_braille_dots_23: number
const KEY_braille_dots_234: number
const KEY_braille_dots_2345: number
const KEY_braille_dots_23456: number
const KEY_braille_dots_234567: number
const KEY_braille_dots_2345678: number
const KEY_braille_dots_234568: number
const KEY_braille_dots_23457: number
const KEY_braille_dots_234578: number
const KEY_braille_dots_23458: number
const KEY_braille_dots_2346: number
const KEY_braille_dots_23467: number
const KEY_braille_dots_234678: number
const KEY_braille_dots_23468: number
const KEY_braille_dots_2347: number
const KEY_braille_dots_23478: number
const KEY_braille_dots_2348: number
const KEY_braille_dots_235: number
const KEY_braille_dots_2356: number
const KEY_braille_dots_23567: number
const KEY_braille_dots_235678: number
const KEY_braille_dots_23568: number
const KEY_braille_dots_2357: number
const KEY_braille_dots_23578: number
const KEY_braille_dots_2358: number
const KEY_braille_dots_236: number
const KEY_braille_dots_2367: number
const KEY_braille_dots_23678: number
const KEY_braille_dots_2368: number
const KEY_braille_dots_237: number
const KEY_braille_dots_2378: number
const KEY_braille_dots_238: number
const KEY_braille_dots_24: number
const KEY_braille_dots_245: number
const KEY_braille_dots_2456: number
const KEY_braille_dots_24567: number
const KEY_braille_dots_245678: number
const KEY_braille_dots_24568: number
const KEY_braille_dots_2457: number
const KEY_braille_dots_24578: number
const KEY_braille_dots_2458: number
const KEY_braille_dots_246: number
const KEY_braille_dots_2467: number
const KEY_braille_dots_24678: number
const KEY_braille_dots_2468: number
const KEY_braille_dots_247: number
const KEY_braille_dots_2478: number
const KEY_braille_dots_248: number
const KEY_braille_dots_25: number
const KEY_braille_dots_256: number
const KEY_braille_dots_2567: number
const KEY_braille_dots_25678: number
const KEY_braille_dots_2568: number
const KEY_braille_dots_257: number
const KEY_braille_dots_2578: number
const KEY_braille_dots_258: number
const KEY_braille_dots_26: number
const KEY_braille_dots_267: number
const KEY_braille_dots_2678: number
const KEY_braille_dots_268: number
const KEY_braille_dots_27: number
const KEY_braille_dots_278: number
const KEY_braille_dots_28: number
const KEY_braille_dots_3: number
const KEY_braille_dots_34: number
const KEY_braille_dots_345: number
const KEY_braille_dots_3456: number
const KEY_braille_dots_34567: number
const KEY_braille_dots_345678: number
const KEY_braille_dots_34568: number
const KEY_braille_dots_3457: number
const KEY_braille_dots_34578: number
const KEY_braille_dots_3458: number
const KEY_braille_dots_346: number
const KEY_braille_dots_3467: number
const KEY_braille_dots_34678: number
const KEY_braille_dots_3468: number
const KEY_braille_dots_347: number
const KEY_braille_dots_3478: number
const KEY_braille_dots_348: number
const KEY_braille_dots_35: number
const KEY_braille_dots_356: number
const KEY_braille_dots_3567: number
const KEY_braille_dots_35678: number
const KEY_braille_dots_3568: number
const KEY_braille_dots_357: number
const KEY_braille_dots_3578: number
const KEY_braille_dots_358: number
const KEY_braille_dots_36: number
const KEY_braille_dots_367: number
const KEY_braille_dots_3678: number
const KEY_braille_dots_368: number
const KEY_braille_dots_37: number
const KEY_braille_dots_378: number
const KEY_braille_dots_38: number
const KEY_braille_dots_4: number
const KEY_braille_dots_45: number
const KEY_braille_dots_456: number
const KEY_braille_dots_4567: number
const KEY_braille_dots_45678: number
const KEY_braille_dots_4568: number
const KEY_braille_dots_457: number
const KEY_braille_dots_4578: number
const KEY_braille_dots_458: number
const KEY_braille_dots_46: number
const KEY_braille_dots_467: number
const KEY_braille_dots_4678: number
const KEY_braille_dots_468: number
const KEY_braille_dots_47: number
const KEY_braille_dots_478: number
const KEY_braille_dots_48: number
const KEY_braille_dots_5: number
const KEY_braille_dots_56: number
const KEY_braille_dots_567: number
const KEY_braille_dots_5678: number
const KEY_braille_dots_568: number
const KEY_braille_dots_57: number
const KEY_braille_dots_578: number
const KEY_braille_dots_58: number
const KEY_braille_dots_6: number
const KEY_braille_dots_67: number
const KEY_braille_dots_678: number
const KEY_braille_dots_68: number
const KEY_braille_dots_7: number
const KEY_braille_dots_78: number
const KEY_braille_dots_8: number
const KEY_breve: number
const KEY_brokenbar: number
const KEY_c: number
const KEY_c_h: number
const KEY_cabovedot: number
const KEY_cacute: number
const KEY_careof: number
const KEY_caret: number
const KEY_caron: number
const KEY_ccaron: number
const KEY_ccedilla: number
const KEY_ccircumflex: number
const KEY_cedilla: number
const KEY_cent: number
const KEY_ch: number
const KEY_checkerboard: number
const KEY_checkmark: number
const KEY_circle: number
const KEY_club: number
const KEY_colon: number
const KEY_comma: number
const KEY_containsas: number
const KEY_copyright: number
const KEY_cr: number
const KEY_crossinglines: number
const KEY_cuberoot: number
const KEY_currency: number
const KEY_cursor: number
const KEY_d: number
const KEY_dabovedot: number
const KEY_dagger: number
const KEY_dcaron: number
const KEY_dead_A: number
const KEY_dead_E: number
const KEY_dead_I: number
const KEY_dead_O: number
const KEY_dead_U: number
const KEY_dead_a: number
const KEY_dead_abovecomma: number
const KEY_dead_abovedot: number
const KEY_dead_abovereversedcomma: number
const KEY_dead_abovering: number
const KEY_dead_aboveverticalline: number
const KEY_dead_acute: number
const KEY_dead_belowbreve: number
const KEY_dead_belowcircumflex: number
const KEY_dead_belowcomma: number
const KEY_dead_belowdiaeresis: number
const KEY_dead_belowdot: number
const KEY_dead_belowmacron: number
const KEY_dead_belowring: number
const KEY_dead_belowtilde: number
const KEY_dead_belowverticalline: number
const KEY_dead_breve: number
const KEY_dead_capital_schwa: number
const KEY_dead_caron: number
const KEY_dead_cedilla: number
const KEY_dead_circumflex: number
const KEY_dead_currency: number
const KEY_dead_dasia: number
const KEY_dead_diaeresis: number
const KEY_dead_doubleacute: number
const KEY_dead_doublegrave: number
const KEY_dead_e: number
const KEY_dead_grave: number
const KEY_dead_greek: number
const KEY_dead_hook: number
const KEY_dead_horn: number
const KEY_dead_i: number
const KEY_dead_invertedbreve: number
const KEY_dead_iota: number
const KEY_dead_longsolidusoverlay: number
const KEY_dead_lowline: number
const KEY_dead_macron: number
const KEY_dead_o: number
const KEY_dead_ogonek: number
const KEY_dead_perispomeni: number
const KEY_dead_psili: number
const KEY_dead_semivoiced_sound: number
const KEY_dead_small_schwa: number
const KEY_dead_stroke: number
const KEY_dead_tilde: number
const KEY_dead_u: number
const KEY_dead_voiced_sound: number
const KEY_decimalpoint: number
const KEY_degree: number
const KEY_diaeresis: number
const KEY_diamond: number
const KEY_digitspace: number
const KEY_dintegral: number
const KEY_division: number
const KEY_dollar: number
const KEY_doubbaselinedot: number
const KEY_doubleacute: number
const KEY_doubledagger: number
const KEY_doublelowquotemark: number
const KEY_downarrow: number
const KEY_downcaret: number
const KEY_downshoe: number
const KEY_downstile: number
const KEY_downtack: number
const KEY_dstroke: number
const KEY_e: number
const KEY_eabovedot: number
const KEY_eacute: number
const KEY_ebelowdot: number
const KEY_ecaron: number
const KEY_ecircumflex: number
const KEY_ecircumflexacute: number
const KEY_ecircumflexbelowdot: number
const KEY_ecircumflexgrave: number
const KEY_ecircumflexhook: number
const KEY_ecircumflextilde: number
const KEY_ediaeresis: number
const KEY_egrave: number
const KEY_ehook: number
const KEY_eightsubscript: number
const KEY_eightsuperior: number
const KEY_elementof: number
const KEY_ellipsis: number
const KEY_em3space: number
const KEY_em4space: number
const KEY_emacron: number
const KEY_emdash: number
const KEY_emfilledcircle: number
const KEY_emfilledrect: number
const KEY_emopencircle: number
const KEY_emopenrectangle: number
const KEY_emptyset: number
const KEY_emspace: number
const KEY_endash: number
const KEY_enfilledcircbullet: number
const KEY_enfilledsqbullet: number
const KEY_eng: number
const KEY_enopencircbullet: number
const KEY_enopensquarebullet: number
const KEY_enspace: number
const KEY_eogonek: number
const KEY_equal: number
const KEY_eth: number
const KEY_etilde: number
const KEY_exclam: number
const KEY_exclamdown: number
const KEY_ezh: number
const KEY_f: number
const KEY_fabovedot: number
const KEY_femalesymbol: number
const KEY_ff: number
const KEY_figdash: number
const KEY_filledlefttribullet: number
const KEY_filledrectbullet: number
const KEY_filledrighttribullet: number
const KEY_filledtribulletdown: number
const KEY_filledtribulletup: number
const KEY_fiveeighths: number
const KEY_fivesixths: number
const KEY_fivesubscript: number
const KEY_fivesuperior: number
const KEY_fourfifths: number
const KEY_foursubscript: number
const KEY_foursuperior: number
const KEY_fourthroot: number
const KEY_function: number
const KEY_g: number
const KEY_gabovedot: number
const KEY_gbreve: number
const KEY_gcaron: number
const KEY_gcedilla: number
const KEY_gcircumflex: number
const KEY_grave: number
const KEY_greater: number
const KEY_greaterthanequal: number
const KEY_guillemotleft: number
const KEY_guillemotright: number
const KEY_h: number
const KEY_hairspace: number
const KEY_hcircumflex: number
const KEY_heart: number
const KEY_hebrew_aleph: number
const KEY_hebrew_ayin: number
const KEY_hebrew_bet: number
const KEY_hebrew_beth: number
const KEY_hebrew_chet: number
const KEY_hebrew_dalet: number
const KEY_hebrew_daleth: number
const KEY_hebrew_doublelowline: number
const KEY_hebrew_finalkaph: number
const KEY_hebrew_finalmem: number
const KEY_hebrew_finalnun: number
const KEY_hebrew_finalpe: number
const KEY_hebrew_finalzade: number
const KEY_hebrew_finalzadi: number
const KEY_hebrew_gimel: number
const KEY_hebrew_gimmel: number
const KEY_hebrew_he: number
const KEY_hebrew_het: number
const KEY_hebrew_kaph: number
const KEY_hebrew_kuf: number
const KEY_hebrew_lamed: number
const KEY_hebrew_mem: number
const KEY_hebrew_nun: number
const KEY_hebrew_pe: number
const KEY_hebrew_qoph: number
const KEY_hebrew_resh: number
const KEY_hebrew_samech: number
const KEY_hebrew_samekh: number
const KEY_hebrew_shin: number
const KEY_hebrew_taf: number
const KEY_hebrew_taw: number
const KEY_hebrew_tet: number
const KEY_hebrew_teth: number
const KEY_hebrew_waw: number
const KEY_hebrew_yod: number
const KEY_hebrew_zade: number
const KEY_hebrew_zadi: number
const KEY_hebrew_zain: number
const KEY_hebrew_zayin: number
const KEY_hexagram: number
const KEY_horizconnector: number
const KEY_horizlinescan1: number
const KEY_horizlinescan3: number
const KEY_horizlinescan5: number
const KEY_horizlinescan7: number
const KEY_horizlinescan9: number
const KEY_hstroke: number
const KEY_ht: number
const KEY_hyphen: number
const KEY_i: number
const KEY_iTouch: number
const KEY_iacute: number
const KEY_ibelowdot: number
const KEY_ibreve: number
const KEY_icircumflex: number
const KEY_identical: number
const KEY_idiaeresis: number
const KEY_idotless: number
const KEY_ifonlyif: number
const KEY_igrave: number
const KEY_ihook: number
const KEY_imacron: number
const KEY_implies: number
const KEY_includedin: number
const KEY_includes: number
const KEY_infinity: number
const KEY_integral: number
const KEY_intersection: number
const KEY_iogonek: number
const KEY_itilde: number
const KEY_j: number
const KEY_jcircumflex: number
const KEY_jot: number
const KEY_k: number
const KEY_kana_A: number
const KEY_kana_CHI: number
const KEY_kana_E: number
const KEY_kana_FU: number
const KEY_kana_HA: number
const KEY_kana_HE: number
const KEY_kana_HI: number
const KEY_kana_HO: number
const KEY_kana_HU: number
const KEY_kana_I: number
const KEY_kana_KA: number
const KEY_kana_KE: number
const KEY_kana_KI: number
const KEY_kana_KO: number
const KEY_kana_KU: number
const KEY_kana_MA: number
const KEY_kana_ME: number
const KEY_kana_MI: number
const KEY_kana_MO: number
const KEY_kana_MU: number
const KEY_kana_N: number
const KEY_kana_NA: number
const KEY_kana_NE: number
const KEY_kana_NI: number
const KEY_kana_NO: number
const KEY_kana_NU: number
const KEY_kana_O: number
const KEY_kana_RA: number
const KEY_kana_RE: number
const KEY_kana_RI: number
const KEY_kana_RO: number
const KEY_kana_RU: number
const KEY_kana_SA: number
const KEY_kana_SE: number
const KEY_kana_SHI: number
const KEY_kana_SO: number
const KEY_kana_SU: number
const KEY_kana_TA: number
const KEY_kana_TE: number
const KEY_kana_TI: number
const KEY_kana_TO: number
const KEY_kana_TSU: number
const KEY_kana_TU: number
const KEY_kana_U: number
const KEY_kana_WA: number
const KEY_kana_WO: number
const KEY_kana_YA: number
const KEY_kana_YO: number
const KEY_kana_YU: number
const KEY_kana_a: number
const KEY_kana_closingbracket: number
const KEY_kana_comma: number
const KEY_kana_conjunctive: number
const KEY_kana_e: number
const KEY_kana_fullstop: number
const KEY_kana_i: number
const KEY_kana_middledot: number
const KEY_kana_o: number
const KEY_kana_openingbracket: number
const KEY_kana_switch: number
const KEY_kana_tsu: number
const KEY_kana_tu: number
const KEY_kana_u: number
const KEY_kana_ya: number
const KEY_kana_yo: number
const KEY_kana_yu: number
const KEY_kappa: number
const KEY_kcedilla: number
const KEY_kra: number
const KEY_l: number
const KEY_lacute: number
const KEY_latincross: number
const KEY_lbelowdot: number
const KEY_lcaron: number
const KEY_lcedilla: number
const KEY_leftanglebracket: number
const KEY_leftarrow: number
const KEY_leftcaret: number
const KEY_leftdoublequotemark: number
const KEY_leftmiddlecurlybrace: number
const KEY_leftopentriangle: number
const KEY_leftpointer: number
const KEY_leftradical: number
const KEY_leftshoe: number
const KEY_leftsinglequotemark: number
const KEY_leftt: number
const KEY_lefttack: number
const KEY_less: number
const KEY_lessthanequal: number
const KEY_lf: number
const KEY_logicaland: number
const KEY_logicalor: number
const KEY_lowleftcorner: number
const KEY_lowrightcorner: number
const KEY_lstroke: number
const KEY_m: number
const KEY_mabovedot: number
const KEY_macron: number
const KEY_malesymbol: number
const KEY_maltesecross: number
const KEY_marker: number
const KEY_masculine: number
const KEY_minus: number
const KEY_minutes: number
const KEY_mu: number
const KEY_multiply: number
const KEY_musicalflat: number
const KEY_musicalsharp: number
const KEY_n: number
const KEY_nabla: number
const KEY_nacute: number
const KEY_ncaron: number
const KEY_ncedilla: number
const KEY_ninesubscript: number
const KEY_ninesuperior: number
const KEY_nl: number
const KEY_nobreakspace: number
const KEY_notapproxeq: number
const KEY_notelementof: number
const KEY_notequal: number
const KEY_notidentical: number
const KEY_notsign: number
const KEY_ntilde: number
const KEY_numbersign: number
const KEY_numerosign: number
const KEY_o: number
const KEY_oacute: number
const KEY_obarred: number
const KEY_obelowdot: number
const KEY_ocaron: number
const KEY_ocircumflex: number
const KEY_ocircumflexacute: number
const KEY_ocircumflexbelowdot: number
const KEY_ocircumflexgrave: number
const KEY_ocircumflexhook: number
const KEY_ocircumflextilde: number
const KEY_odiaeresis: number
const KEY_odoubleacute: number
const KEY_oe: number
const KEY_ogonek: number
const KEY_ograve: number
const KEY_ohook: number
const KEY_ohorn: number
const KEY_ohornacute: number
const KEY_ohornbelowdot: number
const KEY_ohorngrave: number
const KEY_ohornhook: number
const KEY_ohorntilde: number
const KEY_omacron: number
const KEY_oneeighth: number
const KEY_onefifth: number
const KEY_onehalf: number
const KEY_onequarter: number
const KEY_onesixth: number
const KEY_onesubscript: number
const KEY_onesuperior: number
const KEY_onethird: number
const KEY_ooblique: number
const KEY_openrectbullet: number
const KEY_openstar: number
const KEY_opentribulletdown: number
const KEY_opentribulletup: number
const KEY_ordfeminine: number
const KEY_oslash: number
const KEY_otilde: number
const KEY_overbar: number
const KEY_overline: number
const KEY_p: number
const KEY_pabovedot: number
const KEY_paragraph: number
const KEY_parenleft: number
const KEY_parenright: number
const KEY_partdifferential: number
const KEY_partialderivative: number
const KEY_percent: number
const KEY_period: number
const KEY_periodcentered: number
const KEY_permille: number
const KEY_phonographcopyright: number
const KEY_plus: number
const KEY_plusminus: number
const KEY_prescription: number
const KEY_prolongedsound: number
const KEY_punctspace: number
const KEY_q: number
const KEY_quad: number
const KEY_question: number
const KEY_questiondown: number
const KEY_quotedbl: number
const KEY_quoteleft: number
const KEY_quoteright: number
const KEY_r: number
const KEY_racute: number
const KEY_radical: number
const KEY_rcaron: number
const KEY_rcedilla: number
const KEY_registered: number
const KEY_rightanglebracket: number
const KEY_rightarrow: number
const KEY_rightcaret: number
const KEY_rightdoublequotemark: number
const KEY_rightmiddlecurlybrace: number
const KEY_rightmiddlesummation: number
const KEY_rightopentriangle: number
const KEY_rightpointer: number
const KEY_rightshoe: number
const KEY_rightsinglequotemark: number
const KEY_rightt: number
const KEY_righttack: number
const KEY_s: number
const KEY_sabovedot: number
const KEY_sacute: number
const KEY_scaron: number
const KEY_scedilla: number
const KEY_schwa: number
const KEY_scircumflex: number
const KEY_script_switch: number
const KEY_seconds: number
const KEY_section: number
const KEY_semicolon: number
const KEY_semivoicedsound: number
const KEY_seveneighths: number
const KEY_sevensubscript: number
const KEY_sevensuperior: number
const KEY_signaturemark: number
const KEY_signifblank: number
const KEY_similarequal: number
const KEY_singlelowquotemark: number
const KEY_sixsubscript: number
const KEY_sixsuperior: number
const KEY_slash: number
const KEY_soliddiamond: number
const KEY_space: number
const KEY_squareroot: number
const KEY_ssharp: number
const KEY_sterling: number
const KEY_stricteq: number
const KEY_t: number
const KEY_tabovedot: number
const KEY_tcaron: number
const KEY_tcedilla: number
const KEY_telephone: number
const KEY_telephonerecorder: number
const KEY_therefore: number
const KEY_thinspace: number
const KEY_thorn: number
const KEY_threeeighths: number
const KEY_threefifths: number
const KEY_threequarters: number
const KEY_threesubscript: number
const KEY_threesuperior: number
const KEY_tintegral: number
const KEY_topintegral: number
const KEY_topleftparens: number
const KEY_topleftradical: number
const KEY_topleftsqbracket: number
const KEY_topleftsummation: number
const KEY_toprightparens: number
const KEY_toprightsqbracket: number
const KEY_toprightsummation: number
const KEY_topt: number
const KEY_topvertsummationconnector: number
const KEY_trademark: number
const KEY_trademarkincircle: number
const KEY_tslash: number
const KEY_twofifths: number
const KEY_twosubscript: number
const KEY_twosuperior: number
const KEY_twothirds: number
const KEY_u: number
const KEY_uacute: number
const KEY_ubelowdot: number
const KEY_ubreve: number
const KEY_ucircumflex: number
const KEY_udiaeresis: number
const KEY_udoubleacute: number
const KEY_ugrave: number
const KEY_uhook: number
const KEY_uhorn: number
const KEY_uhornacute: number
const KEY_uhornbelowdot: number
const KEY_uhorngrave: number
const KEY_uhornhook: number
const KEY_uhorntilde: number
const KEY_umacron: number
const KEY_underbar: number
const KEY_underscore: number
const KEY_union: number
const KEY_uogonek: number
const KEY_uparrow: number
const KEY_upcaret: number
const KEY_upleftcorner: number
const KEY_uprightcorner: number
const KEY_upshoe: number
const KEY_upstile: number
const KEY_uptack: number
const KEY_uring: number
const KEY_utilde: number
const KEY_v: number
const KEY_variation: number
const KEY_vertbar: number
const KEY_vertconnector: number
const KEY_voicedsound: number
const KEY_vt: number
const KEY_w: number
const KEY_wacute: number
const KEY_wcircumflex: number
const KEY_wdiaeresis: number
const KEY_wgrave: number
const KEY_x: number
const KEY_xabovedot: number
const KEY_y: number
const KEY_yacute: number
const KEY_ybelowdot: number
const KEY_ycircumflex: number
const KEY_ydiaeresis: number
const KEY_yen: number
const KEY_ygrave: number
const KEY_yhook: number
const KEY_ytilde: number
const KEY_z: number
const KEY_zabovedot: number
const KEY_zacute: number
const KEY_zcaron: number
const KEY_zerosubscript: number
const KEY_zerosuperior: number
const KEY_zstroke: number
/**
 * A mask covering all entries in `GdkModifierType`.
 */
const MODIFIER_MASK: number
/**
 * This is the priority that the idle handler processing surface updates
 * is given in the main loop.
 */
const PRIORITY_REDRAW: number
function cairoDrawFromGl(cr: cairo.Context, surface: Surface, source: number, sourceType: number, bufferScale: number, x: number, y: number, width: number, height: number): void
function cairoRectangle(cr: cairo.Context, rectangle: Rectangle): void
function cairoRegion(cr: cairo.Context, region: cairo.Region): void
function cairoRegionCreateFromSurface(surface: cairo.Surface): cairo.Region
function cairoSetSourcePixbuf(cr: cairo.Context, pixbuf: GdkPixbuf.Pixbuf, pixbufX: number, pixbufY: number): void
function cairoSetSourceRgba(cr: cairo.Context, rgba: RGBA): void
function contentDeserializeAsync(stream: Gio.InputStream, mimeType: string, type: GObject.Type, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
function contentDeserializeFinish(result: Gio.AsyncResult, value: any): boolean
function contentFormatsParse(string: string): ContentFormats | null
function contentRegisterDeserializer(mimeType: string, type: GObject.Type, deserialize: ContentDeserializeFunc): void
function contentRegisterSerializer(type: GObject.Type, mimeType: string, serialize: ContentSerializeFunc): void
function contentSerializeAsync(stream: Gio.OutputStream, mimeType: string, value: any, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
function contentSerializeFinish(result: Gio.AsyncResult): boolean
function dragActionIsUnique(action: DragAction): boolean
function eventsGetAngle(event1: Event, event2: Event): [ /* returnType */ boolean, /* angle */ number ]
function eventsGetCenter(event1: Event, event2: Event): [ /* returnType */ boolean, /* x */ number, /* y */ number ]
function eventsGetDistance(event1: Event, event2: Event): [ /* returnType */ boolean, /* distance */ number ]
function glErrorQuark(): GLib.Quark
function internMimeType(string: string): string | null
function keyvalConvertCase(symbol: number): [ /* lower */ number, /* upper */ number ]
function keyvalFromName(keyvalName: string): number
function keyvalIsLower(keyval: number): boolean
function keyvalIsUpper(keyval: number): boolean
function keyvalName(keyval: number): string | null
function keyvalToLower(keyval: number): number
function keyvalToUnicode(keyval: number): number
function keyvalToUpper(keyval: number): number
function paintableNewEmpty(intrinsicWidth: number, intrinsicHeight: number): Paintable
function pixbufGetFromSurface(surface: cairo.Surface, srcX: number, srcY: number, width: number, height: number): GdkPixbuf.Pixbuf | null
function pixbufGetFromTexture(texture: Texture): GdkPixbuf.Pixbuf | null
function setAllowedBackends(backends: string): void
function textureErrorQuark(): GLib.Quark
function toplevelSizeGetType(): GObject.Type
function unicodeToKeyval(wc: number): number
function vulkanErrorQuark(): GLib.Quark
/**
 * The type of a function that can be registered with gdk_content_register_deserializer().
 * 
 * When the function gets called to operate on content, it can call functions on the
 * `deserializer` object to obtain the mime type, input stream, user data, etc. for its
 * operation.
 */
interface ContentDeserializeFunc {
    (deserializer: ContentDeserializer): void
}
/**
 * The type of a function that can be registered with gdk_content_register_serializer().
 * 
 * When the function gets called to operate on content, it can call functions on the
 * `serializer` object to obtain the mime type, output stream, user data, etc. for its
 * operation.
 */
interface ContentSerializeFunc {
    (serializer: ContentSerializer): void
}
interface DevicePad_ConstructProps extends Device_ConstructProps {
}
class DevicePad {
    /* Properties of Gdk-4.0.Gdk.Device */
    /**
     * Whether Caps Lock is on.
     * 
     * This is only relevant for keyboard devices.
     */
    readonly capsLockState: boolean
    /**
     * The direction of the current layout.
     * 
     * This is only relevant for keyboard devices.
     */
    readonly direction: Pango.Direction
    /**
     * Whether the device has both right-to-left and left-to-right layouts.
     * 
     * This is only relevant for keyboard devices.
     */
    readonly hasBidiLayouts: boolean
    /**
     * The current modifier state of the device.
     * 
     * This is only relevant for keyboard devices.
     */
    readonly modifierState: ModifierType
    /**
     * Number of axes in the device.
     */
    readonly nAxes: number
    /**
     * Whether Num Lock is on.
     * 
     * This is only relevant for keyboard devices.
     */
    readonly numLockState: boolean
    /**
     * Whether Scroll Lock is on.
     * 
     * This is only relevant for keyboard devices.
     */
    readonly scrollLockState: boolean
    /**
     * `GdkSeat` of this device.
     */
    seat: Seat
    /**
     * The `GdkDeviceTool` that is currently used with this device.
     */
    readonly tool: DeviceTool
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gdk-4.0.Gdk.DevicePad */
    /**
     * Returns the group the given `feature` and `idx` belong to.
     * 
     * f the feature or index do not exist in `pad,` -1 is returned.
     */
    getFeatureGroup(feature: DevicePadFeature, featureIdx: number): number
    /**
     * Returns the number of modes that `group` may have.
     */
    getGroupNModes(groupIdx: number): number
    /**
     * Returns the number of features a tablet pad has.
     */
    getNFeatures(feature: DevicePadFeature): number
    /**
     * Returns the number of groups this pad device has.
     * 
     * Pads have at least one group. A pad group is a subcollection of
     * buttons/strip/rings that is affected collectively by a same
     * current mode.
     */
    getNGroups(): number
    /* Methods of Gdk-4.0.Gdk.Device */
    /**
     * Retrieves whether the Caps Lock modifier of the keyboard is locked.
     * 
     * This is only relevant for keyboard devices.
     */
    getCapsLockState(): boolean
    /**
     * Retrieves the current tool for `device`.
     */
    getDeviceTool(): DeviceTool | null
    /**
     * Returns the direction of effective layout of the keyboard.
     * 
     * This is only relevant for keyboard devices.
     * 
     * The direction of a layout is the direction of the majority
     * of its symbols. See [func`Pango`.unichar_direction].
     */
    getDirection(): Pango.Direction
    /**
     * Returns the `GdkDisplay` to which `device` pertains.
     */
    getDisplay(): Display
    /**
     * Determines whether the pointer follows device motion.
     * 
     * This is not meaningful for keyboard devices, which
     * don't have a pointer.
     */
    getHasCursor(): boolean
    /**
     * Retrieves the current modifier state of the keyboard.
     * 
     * This is only relevant for keyboard devices.
     */
    getModifierState(): ModifierType
    /**
     * The name of the device, suitable for showing in a user interface.
     */
    getName(): string
    /**
     * Retrieves whether the Num Lock modifier of the keyboard is locked.
     * 
     * This is only relevant for keyboard devices.
     */
    getNumLockState(): boolean
    /**
     * Retrieves the number of touch points associated to `device`.
     */
    getNumTouches(): number
    /**
     * Returns the product ID of this device.
     * 
     * This ID is retrieved from the device, and does not change.
     * See [method`Gdk`.Device.get_vendor_id] for more information.
     */
    getProductId(): string | null
    /**
     * Retrieves whether the Scroll Lock modifier of the keyboard is locked.
     * 
     * This is only relevant for keyboard devices.
     */
    getScrollLockState(): boolean
    /**
     * Returns the `GdkSeat` the device belongs to.
     */
    getSeat(): Seat
    /**
     * Determines the type of the device.
     */
    getSource(): InputSource
    /**
     * Obtains the surface underneath `device,` returning the location of the
     * device in `win_x` and `win_y`.
     * 
     * Returns %NULL if the surface tree under `device` is not known to GDK
     * (for example, belongs to another application).
     */
    getSurfaceAtPosition(): [ /* returnType */ Surface | null, /* winX */ number | null, /* winY */ number | null ]
    /**
     * Returns the timestamp of the last activity for this device.
     * 
     * In practice, this means the timestamp of the last event that was
     * received from the OS for this device. (GTK may occasionally produce
     * events for a device that are not received from the OS, and will not
     * update the timestamp).
     */
    getTimestamp(): number
    /**
     * Returns the vendor ID of this device.
     * 
     * This ID is retrieved from the device, and does not change.
     * 
     * This function, together with [method`Gdk`.Device.get_product_id],
     * can be used to eg. compose `GSettings` paths to store settings
     * for this device.
     * 
     * ```c
     *  static GSettings *
     *  get_device_settings (GdkDevice *device)
     *  {
     *    const char *vendor, *product;
     *    GSettings *settings;
     *    GdkDevice *device;
     *    char *path;
     * 
     *    vendor = gdk_device_get_vendor_id (device);
     *    product = gdk_device_get_product_id (device);
     * 
     *    path = g_strdup_printf ("/org/example/app/devices/%s:%s/", vendor, product);
     *    settings = g_settings_new_with_path (DEVICE_SCHEMA, path);
     *    g_free (path);
     * 
     *    return settings;
     *  }
     * ```
     */
    getVendorId(): string | null
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
    /* Signals of Gdk-4.0.Gdk.Device */
    /**
     * Emitted either when the number of either axes or keys changes.
     * 
     * On X11 this will normally happen when the physical device
     * routing events through the logical device changes (for
     * example, user switches from the USB mouse to a tablet); in
     * that case the logical device will change to reflect the axes
     * and keys on the new physical device.
     */
    connect(sigName: "changed", callback: (() => void)): number
    on(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "changed"): void
    /**
     * Emitted on pen/eraser devices whenever tools enter or leave proximity.
     */
    connect(sigName: "tool-changed", callback: ((tool: DeviceTool) => void)): number
    on(sigName: "tool-changed", callback: (tool: DeviceTool) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "tool-changed", callback: (tool: DeviceTool) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "tool-changed", callback: (tool: DeviceTool) => void): NodeJS.EventEmitter
    emit(sigName: "tool-changed", tool: DeviceTool): void
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
    connect(sigName: "notify::caps-lock-state", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::caps-lock-state", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::caps-lock-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::caps-lock-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::caps-lock-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::direction", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::direction", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::direction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::direction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::direction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-bidi-layouts", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-bidi-layouts", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-bidi-layouts", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-bidi-layouts", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-bidi-layouts", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::modifier-state", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modifier-state", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::modifier-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::modifier-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::modifier-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::n-axes", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::n-axes", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::n-axes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::n-axes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::n-axes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::num-lock-state", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::num-lock-state", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::num-lock-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::num-lock-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::num-lock-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scroll-lock-state", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scroll-lock-state", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scroll-lock-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scroll-lock-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scroll-lock-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::seat", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::seat", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::seat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::seat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::seat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tool", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tool", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tool", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tool", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tool", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DevicePad_ConstructProps)
    _init (config?: DevicePad_ConstructProps): void
    static $gtype: GObject.Type
}
interface DragSurface_ConstructProps extends Surface_ConstructProps {
}
class DragSurface {
    /* Properties of Gdk-4.0.Gdk.Surface */
    /**
     * The mouse pointer for the `GdkSurface`.
     */
    cursor: Cursor
    /**
     * The height of the surface, in pixels.
     */
    readonly height: number
    /**
     * Whether the surface is mapped.
     */
    readonly mapped: boolean
    /**
     * The scale factor of the surface.
     */
    readonly scaleFactor: number
    /**
     * The width of the surface in pixels.
     */
    readonly width: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gdk-4.0.Gdk.DragSurface */
    /**
     * Present `drag_surface`.
     */
    present(width: number, height: number): boolean
    /* Methods of Gdk-4.0.Gdk.Surface */
    /**
     * Emits a short beep associated to `surface`.
     * 
     * If the display of `surface` does not support per-surface beeps,
     * emits a short beep on the display just as [method`Gdk`.Display.beep].
     */
    beep(): void
    /**
     * Creates a new `GdkCairoContext` for rendering on `surface`.
     */
    createCairoContext(): CairoContext
    /**
     * Creates a new `GdkGLContext` for the `GdkSurface`.
     * 
     * The context is disconnected from any particular surface or surface.
     * If the creation of the `GdkGLContext` failed, `error` will be set.
     * Before using the returned `GdkGLContext`, you will need to
     * call [method`Gdk`.GLContext.make_current] or [method`Gdk`.GLContext.realize].
     */
    createGlContext(): GLContext
    /**
     * Create a new Cairo surface that is as compatible as possible with the
     * given `surface`.
     * 
     * For example the new surface will have the same fallback resolution
     * and font options as `surface`. Generally, the new surface will also
     * use the same backend as `surface,` unless that is not possible for
     * some reason. The type of the returned surface may be examined with
     * cairo_surface_get_type().
     * 
     * Initially the surface contents are all 0 (transparent if contents
     * have transparency, black otherwise.)
     * 
     * This function always returns a valid pointer, but it will return a
     * pointer to a “nil” surface if `other` is already in an error state
     * or any other error occurs.
     */
    createSimilarSurface(content: cairo.Content, width: number, height: number): cairo.Surface
    /**
     * Creates a new `GdkVulkanContext` for rendering on `surface`.
     * 
     * If the creation of the `GdkVulkanContext` failed, `error` will be set.
     */
    createVulkanContext(): VulkanContext
    /**
     * Destroys the window system resources associated with `surface` and
     * decrements `surface'`s reference count.
     * 
     * The window system resources for all children of `surface` are also
     * destroyed, but the children’s reference counts are not decremented.
     * 
     * Note that a surface will not be destroyed automatically when its
     * reference count reaches zero. You must call this function yourself
     * before that happens.
     */
    destroy(): void
    /**
     * Retrieves a `GdkCursor` pointer for the cursor currently set on the
     * `GdkSurface`.
     * 
     * If the return value is %NULL then there is no custom cursor set on
     * the surface, and it is using the cursor for its parent surface.
     * 
     * Use [method`Gdk`.Surface.set_cursor] to unset the cursor of the surface.
     */
    getCursor(): Cursor | null
    /**
     * Retrieves a `GdkCursor` pointer for the `device` currently set on the
     * specified `GdkSurface`.
     * 
     * If the return value is %NULL then there is no custom cursor set on the
     * specified surface, and it is using the cursor for its parent surface.
     * 
     * Use [method`Gdk`.Surface.set_cursor] to unset the cursor of the surface.
     */
    getDeviceCursor(device: Device): Cursor | null
    /**
     * Obtains the current device position and modifier state.
     * 
     * The position is given in coordinates relative to the upper
     * left corner of `surface`.
     */
    getDevicePosition(device: Device): [ /* returnType */ boolean, /* x */ number | null, /* y */ number | null, /* mask */ ModifierType | null ]
    /**
     * Gets the `GdkDisplay` associated with a `GdkSurface`.
     */
    getDisplay(): Display
    /**
     * Gets the frame clock for the surface.
     * 
     * The frame clock for a surface never changes unless the surface is
     * reparented to a new toplevel surface.
     */
    getFrameClock(): FrameClock
    /**
     * Returns the height of the given `surface`.
     * 
     * Surface size is reported in ”application pixels”, not
     * ”device pixels” (see [method`Gdk`.Surface.get_scale_factor]).
     */
    getHeight(): number
    /**
     * Checks whether the surface has been mapped.
     * 
     * A surface is mapped with [method`Gdk`.Toplevel.present]
     * or [method`Gdk`.Popup.present].
     */
    getMapped(): boolean
    /**
     * Returns the internal scale factor that maps from surface coordinates
     * to the actual device pixels.
     * 
     * On traditional systems this is 1, but on very high density outputs
     * this can be a higher value (often 2). A higher value means that drawing
     * is automatically scaled up to a higher resolution, so any code doing
     * drawing will automatically look nicer. However, if you are supplying
     * pixel-based data the scale value can be used to determine whether to
     * use a pixel resource with higher resolution data.
     * 
     * The scale of a surface may change during runtime.
     */
    getScaleFactor(): number
    /**
     * Returns the width of the given `surface`.
     * 
     * Surface size is reported in ”application pixels”, not
     * ”device pixels” (see [method`Gdk`.Surface.get_scale_factor]).
     */
    getWidth(): number
    /**
     * Hide the surface.
     * 
     * For toplevel surfaces, withdraws them, so they will no longer be
     * known to the window manager; for all surfaces, unmaps them, so
     * they won’t be displayed. Normally done automatically as
     * part of [method`Gtk`.Widget.hide].
     */
    hide(): void
    /**
     * Check to see if a surface is destroyed.
     */
    isDestroyed(): boolean
    /**
     * Forces a [signal`Gdk`.Surface::render] signal emission for `surface`
     * to be scheduled.
     * 
     * This function is useful for implementations that track invalid
     * regions on their own.
     */
    queueRender(): void
    /**
     * Request a layout phase from the surface's frame clock.
     * 
     * See [method`Gdk`.FrameClock.request_phase].
     */
    requestLayout(): void
    /**
     * Sets the default mouse pointer for a `GdkSurface`.
     * 
     * Passing %NULL for the `cursor` argument means that `surface` will use
     * the cursor of its parent surface. Most surfaces should use this default.
     * Note that `cursor` must be for the same display as `surface`.
     * 
     * Use [ctor`Gdk`.Cursor.new_from_name] or [ctor`Gdk`.Cursor.new_from_texture]
     * to create the cursor. To make the cursor invisible, use %GDK_BLANK_CURSOR.
     */
    setCursor(cursor?: Cursor | null): void
    /**
     * Sets a specific `GdkCursor` for a given device when it gets inside `surface`.
     * 
     * Passing %NULL for the `cursor` argument means that `surface` will use the
     * cursor of its parent surface. Most surfaces should use this default.
     * 
     * Use [ctor`Gdk`.Cursor.new_from_name] or [ctor`Gdk`.Cursor.new_from_texture]
     * to create the cursor. To make the cursor invisible, use %GDK_BLANK_CURSOR.
     */
    setDeviceCursor(device: Device, cursor: Cursor): void
    /**
     * Apply the region to the surface for the purpose of event
     * handling.
     * 
     * Mouse events which happen while the pointer position corresponds
     * to an unset bit in the mask will be passed on the surface below
     * `surface`.
     * 
     * An input region is typically used with RGBA surfaces. The alpha
     * channel of the surface defines which pixels are invisible and
     * allows for nicely antialiased borders, and the input region
     * controls where the surface is “clickable”.
     * 
     * Use [method`Gdk`.Display.supports_input_shapes] to find out if
     * a particular backend supports input regions.
     */
    setInputRegion(region: cairo.Region): void
    /**
     * Marks a region of the `GdkSurface` as opaque.
     * 
     * For optimisation purposes, compositing window managers may
     * like to not draw obscured regions of surfaces, or turn off blending
     * during for these regions. With RGB windows with no transparency,
     * this is just the shape of the window, but with ARGB32 windows, the
     * compositor does not know what regions of the window are transparent
     * or not.
     * 
     * This function only works for toplevel surfaces.
     * 
     * GTK will update this property automatically if the `surface` background
     * is opaque, as we know where the opaque regions are. If your surface
     * background is not opaque, please update this property in your
     * [vfunc`Gtk`.Widget.css_changed] handler.
     */
    setOpaqueRegion(region?: cairo.Region | null): void
    /**
     * Translates coordinates between two surfaces.
     * 
     * Note that this only works if `to` and `from` are popups or
     * transient-for to the same toplevel (directly or indirectly).
     */
    translateCoordinates(to: Surface, x: number, y: number): [ /* returnType */ boolean, /* x */ number, /* y */ number ]
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
    /* Signals of Gdk-4.0.Gdk.Surface */
    /**
     * Emitted when `surface` starts being present on the monitor.
     */
    connect(sigName: "enter-monitor", callback: ((monitor: Monitor) => void)): number
    on(sigName: "enter-monitor", callback: (monitor: Monitor) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "enter-monitor", callback: (monitor: Monitor) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "enter-monitor", callback: (monitor: Monitor) => void): NodeJS.EventEmitter
    emit(sigName: "enter-monitor", monitor: Monitor): void
    /**
     * Emitted when GDK receives an input event for `surface`.
     */
    connect(sigName: "event", callback: ((event: Event) => boolean)): number
    on(sigName: "event", callback: (event: Event) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "event", callback: (event: Event) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "event", callback: (event: Event) => void): NodeJS.EventEmitter
    emit(sigName: "event", event: Event): void
    /**
     * Emitted when the size of `surface` is changed, or when relayout should
     * be performed.
     * 
     * Surface size is reported in ”application pixels”, not
     * ”device pixels” (see gdk_surface_get_scale_factor()).
     */
    connect(sigName: "layout", callback: ((width: number, height: number) => void)): number
    on(sigName: "layout", callback: (width: number, height: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "layout", callback: (width: number, height: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "layout", callback: (width: number, height: number) => void): NodeJS.EventEmitter
    emit(sigName: "layout", width: number, height: number): void
    /**
     * Emitted when `surface` stops being present on the monitor.
     */
    connect(sigName: "leave-monitor", callback: ((monitor: Monitor) => void)): number
    on(sigName: "leave-monitor", callback: (monitor: Monitor) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "leave-monitor", callback: (monitor: Monitor) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "leave-monitor", callback: (monitor: Monitor) => void): NodeJS.EventEmitter
    emit(sigName: "leave-monitor", monitor: Monitor): void
    /**
     * Emitted when part of the surface needs to be redrawn.
     */
    connect(sigName: "render", callback: ((region: cairo.Region) => boolean)): number
    on(sigName: "render", callback: (region: cairo.Region) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "render", callback: (region: cairo.Region) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "render", callback: (region: cairo.Region) => void): NodeJS.EventEmitter
    emit(sigName: "render", region: cairo.Region): void
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
    connect(sigName: "notify::cursor", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mapped", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mapped", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mapped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mapped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mapped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-factor", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DragSurface_ConstructProps)
    _init (config?: DragSurface_ConstructProps): void
    static $gtype: GObject.Type
}
class Paintable {
    /* Methods of Gdk-4.0.Gdk.Paintable */
    /**
     * Compute a concrete size for the `GdkPaintable`.
     * 
     * Applies the sizing algorithm outlined in the
     * [CSS Image spec](https://drafts.csswg.org/css-images-3/#default-sizing)
     * to the given `paintable`. See that link for more details.
     * 
     * It is not necessary to call this function when both `specified_width`
     * and `specified_height` are known, but it is useful to call this
     * function in GtkWidget:measure implementations to compute the
     * other dimension when only one dimension is given.
     */
    computeConcreteSize(specifiedWidth: number, specifiedHeight: number, defaultWidth: number, defaultHeight: number): [ /* concreteWidth */ number, /* concreteHeight */ number ]
    /**
     * Gets an immutable paintable for the current contents displayed by `paintable`.
     * 
     * This is useful when you want to retain the current state of an animation,
     * for example to take a screenshot of a running animation.
     * 
     * If the `paintable` is already immutable, it will return itself.
     */
    getCurrentImage(): Paintable
    /**
     * Get flags for the paintable.
     * 
     * This is oftentimes useful for optimizations.
     * 
     * See [flags`Gdk`.PaintableFlags] for the flags and what they mean.
     */
    getFlags(): PaintableFlags
    /**
     * Gets the preferred aspect ratio the `paintable` would like to be displayed at.
     * 
     * The aspect ratio is the width divided by the height, so a value of 0.5
     * means that the `paintable` prefers to be displayed twice as high as it
     * is wide. Consumers of this interface can use this to preserve aspect
     * ratio when displaying the paintable.
     * 
     * This is a purely informational value and does not in any way limit the
     * values that may be passed to [method`Gdk`.Paintable.snapshot].
     * 
     * Usually when a `paintable` returns nonzero values from
     * [method`Gdk`.Paintable.get_intrinsic_width] and
     * [method`Gdk`.Paintable.get_intrinsic_height] the aspect ratio
     * should conform to those values, though that is not required.
     * 
     * If the `paintable` does not have a preferred aspect ratio,
     * it returns 0. Negative values are never returned.
     */
    getIntrinsicAspectRatio(): number
    /**
     * Gets the preferred height the `paintable` would like to be displayed at.
     * 
     * Consumers of this interface can use this to reserve enough space to draw
     * the paintable.
     * 
     * This is a purely informational value and does not in any way limit the
     * values that may be passed to [method`Gdk`.Paintable.snapshot].
     * 
     * If the `paintable` does not have a preferred height, it returns 0.
     * Negative values are never returned.
     */
    getIntrinsicHeight(): number
    /**
     * Gets the preferred width the `paintable` would like to be displayed at.
     * 
     * Consumers of this interface can use this to reserve enough space to draw
     * the paintable.
     * 
     * This is a purely informational value and does not in any way limit the
     * values that may be passed to [method`Gdk`.Paintable.snapshot].
     * 
     * If the `paintable` does not have a preferred width, it returns 0.
     * Negative values are never returned.
     */
    getIntrinsicWidth(): number
    /**
     * Called by implementations of `GdkPaintable` to invalidate their contents.
     * 
     * Unless the contents are invalidated, implementations must guarantee that
     * multiple calls of [method`Gdk`.Paintable.snapshot] produce the same output.
     * 
     * This function will emit the [signal`Gdk`.Paintable::invalidate-contents]
     * signal.
     * 
     * If a `paintable` reports the %GDK_PAINTABLE_STATIC_CONTENTS flag,
     * it must not call this function.
     */
    invalidateContents(): void
    /**
     * Called by implementations of `GdkPaintable` to invalidate their size.
     * 
     * As long as the size is not invalidated, `paintable` must return the same
     * values for its intrinsic width, height and aspect ratio.
     * 
     * This function will emit the [signal`Gdk`.Paintable::invalidate-size]
     * signal.
     * 
     * If a `paintable` reports the %GDK_PAINTABLE_STATIC_SIZE flag,
     * it must not call this function.
     */
    invalidateSize(): void
    /**
     * Snapshots the given paintable with the given `width` and `height`.
     * 
     * The paintable is drawn at the current (0,0) offset of the `snapshot`.
     * If `width` and `height` are not larger than zero, this function will
     * do nothing.
     */
    snapshot(snapshot: Snapshot, width: number, height: number): void
    /* Signals of Gdk-4.0.Gdk.Paintable */
    /**
     * Emitted when the contents of the `paintable` change.
     * 
     * Examples for such an event would be videos changing to the next frame or
     * the icon theme for an icon changing.
     */
    connect(sigName: "invalidate-contents", callback: (() => void)): number
    on(sigName: "invalidate-contents", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "invalidate-contents", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "invalidate-contents", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "invalidate-contents"): void
    /**
     * Emitted when the intrinsic size of the `paintable` changes.
     * 
     * This means the values reported by at least one of
     * [method`Gdk`.Paintable.get_intrinsic_width],
     * [method`Gdk`.Paintable.get_intrinsic_height] or
     * [method`Gdk`.Paintable.get_intrinsic_aspect_ratio]
     * has changed.
     * 
     * Examples for such an event would be a paintable displaying
     * the contents of a toplevel surface being resized.
     */
    connect(sigName: "invalidate-size", callback: (() => void)): number
    on(sigName: "invalidate-size", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "invalidate-size", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "invalidate-size", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "invalidate-size"): void
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Returns a paintable that has the given intrinsic size and draws nothing.
     * 
     * This is often useful for implementing the
     * [vfunc`Gdk`.Paintable.get_current_image] virtual function
     * when the paintable is in an incomplete state (like a
     * [class`Gtk`.MediaStream] before receiving the first frame).
     */
    static newEmpty(intrinsicWidth: number, intrinsicHeight: number): Paintable
}
interface Popup_ConstructProps extends Surface_ConstructProps {
    /* Constructor properties of Gdk-4.0.Gdk.Popup */
    /**
     * Whether to hide on outside clicks.
     */
    autohide?: boolean
    /**
     * The parent surface.
     */
    parent?: Surface
}
class Popup {
    /* Properties of Gdk-4.0.Gdk.Surface */
    /**
     * The mouse pointer for the `GdkSurface`.
     */
    cursor: Cursor
    /**
     * The height of the surface, in pixels.
     */
    readonly height: number
    /**
     * Whether the surface is mapped.
     */
    readonly mapped: boolean
    /**
     * The scale factor of the surface.
     */
    readonly scaleFactor: number
    /**
     * The width of the surface in pixels.
     */
    readonly width: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gdk-4.0.Gdk.Popup */
    /**
     * Returns whether this popup is set to hide on outside clicks.
     */
    getAutohide(): boolean
    /**
     * Returns the parent surface of a popup.
     */
    getParent(): Surface | null
    /**
     * Obtains the position of the popup relative to its parent.
     */
    getPositionX(): number
    /**
     * Obtains the position of the popup relative to its parent.
     */
    getPositionY(): number
    /**
     * Gets the current popup rectangle anchor.
     * 
     * The value returned may change after calling [method`Gdk`.Popup.present],
     * or after the [signal`Gdk`.Surface::layout] signal is emitted.
     */
    getRectAnchor(): Gravity
    /**
     * Gets the current popup surface anchor.
     * 
     * The value returned may change after calling [method`Gdk`.Popup.present],
     * or after the [signal`Gdk`.Surface::layout] signal is emitted.
     */
    getSurfaceAnchor(): Gravity
    /**
     * Present `popup` after having processed the `GdkPopupLayout` rules.
     * 
     * If the popup was previously now showing, it will be showed,
     * otherwise it will change position according to `layout`.
     * 
     * After calling this function, the result should be handled in response
     * to the [signal`GdkSurface:`:layout] signal being emitted. The resulting
     * popup position can be queried using [method`Gdk`.Popup.get_position_x],
     * [method`Gdk`.Popup.get_position_y], and the resulting size will be sent as
     * parameters in the layout signal. Use [method`Gdk`.Popup.get_rect_anchor]
     * and [method`Gdk`.Popup.get_surface_anchor] to get the resulting anchors.
     * 
     * Presenting may fail, for example if the `popup` is set to autohide
     * and is immediately hidden upon being presented. If presenting failed,
     * the [signal`Gdk`.Surface::layout] signal will not me emitted.
     */
    present(width: number, height: number, layout: PopupLayout): boolean
    /* Methods of Gdk-4.0.Gdk.Surface */
    /**
     * Emits a short beep associated to `surface`.
     * 
     * If the display of `surface` does not support per-surface beeps,
     * emits a short beep on the display just as [method`Gdk`.Display.beep].
     */
    beep(): void
    /**
     * Creates a new `GdkCairoContext` for rendering on `surface`.
     */
    createCairoContext(): CairoContext
    /**
     * Creates a new `GdkGLContext` for the `GdkSurface`.
     * 
     * The context is disconnected from any particular surface or surface.
     * If the creation of the `GdkGLContext` failed, `error` will be set.
     * Before using the returned `GdkGLContext`, you will need to
     * call [method`Gdk`.GLContext.make_current] or [method`Gdk`.GLContext.realize].
     */
    createGlContext(): GLContext
    /**
     * Create a new Cairo surface that is as compatible as possible with the
     * given `surface`.
     * 
     * For example the new surface will have the same fallback resolution
     * and font options as `surface`. Generally, the new surface will also
     * use the same backend as `surface,` unless that is not possible for
     * some reason. The type of the returned surface may be examined with
     * cairo_surface_get_type().
     * 
     * Initially the surface contents are all 0 (transparent if contents
     * have transparency, black otherwise.)
     * 
     * This function always returns a valid pointer, but it will return a
     * pointer to a “nil” surface if `other` is already in an error state
     * or any other error occurs.
     */
    createSimilarSurface(content: cairo.Content, width: number, height: number): cairo.Surface
    /**
     * Creates a new `GdkVulkanContext` for rendering on `surface`.
     * 
     * If the creation of the `GdkVulkanContext` failed, `error` will be set.
     */
    createVulkanContext(): VulkanContext
    /**
     * Destroys the window system resources associated with `surface` and
     * decrements `surface'`s reference count.
     * 
     * The window system resources for all children of `surface` are also
     * destroyed, but the children’s reference counts are not decremented.
     * 
     * Note that a surface will not be destroyed automatically when its
     * reference count reaches zero. You must call this function yourself
     * before that happens.
     */
    destroy(): void
    /**
     * Retrieves a `GdkCursor` pointer for the cursor currently set on the
     * `GdkSurface`.
     * 
     * If the return value is %NULL then there is no custom cursor set on
     * the surface, and it is using the cursor for its parent surface.
     * 
     * Use [method`Gdk`.Surface.set_cursor] to unset the cursor of the surface.
     */
    getCursor(): Cursor | null
    /**
     * Retrieves a `GdkCursor` pointer for the `device` currently set on the
     * specified `GdkSurface`.
     * 
     * If the return value is %NULL then there is no custom cursor set on the
     * specified surface, and it is using the cursor for its parent surface.
     * 
     * Use [method`Gdk`.Surface.set_cursor] to unset the cursor of the surface.
     */
    getDeviceCursor(device: Device): Cursor | null
    /**
     * Obtains the current device position and modifier state.
     * 
     * The position is given in coordinates relative to the upper
     * left corner of `surface`.
     */
    getDevicePosition(device: Device): [ /* returnType */ boolean, /* x */ number | null, /* y */ number | null, /* mask */ ModifierType | null ]
    /**
     * Gets the `GdkDisplay` associated with a `GdkSurface`.
     */
    getDisplay(): Display
    /**
     * Gets the frame clock for the surface.
     * 
     * The frame clock for a surface never changes unless the surface is
     * reparented to a new toplevel surface.
     */
    getFrameClock(): FrameClock
    /**
     * Returns the height of the given `surface`.
     * 
     * Surface size is reported in ”application pixels”, not
     * ”device pixels” (see [method`Gdk`.Surface.get_scale_factor]).
     */
    getHeight(): number
    /**
     * Checks whether the surface has been mapped.
     * 
     * A surface is mapped with [method`Gdk`.Toplevel.present]
     * or [method`Gdk`.Popup.present].
     */
    getMapped(): boolean
    /**
     * Returns the internal scale factor that maps from surface coordinates
     * to the actual device pixels.
     * 
     * On traditional systems this is 1, but on very high density outputs
     * this can be a higher value (often 2). A higher value means that drawing
     * is automatically scaled up to a higher resolution, so any code doing
     * drawing will automatically look nicer. However, if you are supplying
     * pixel-based data the scale value can be used to determine whether to
     * use a pixel resource with higher resolution data.
     * 
     * The scale of a surface may change during runtime.
     */
    getScaleFactor(): number
    /**
     * Returns the width of the given `surface`.
     * 
     * Surface size is reported in ”application pixels”, not
     * ”device pixels” (see [method`Gdk`.Surface.get_scale_factor]).
     */
    getWidth(): number
    /**
     * Hide the surface.
     * 
     * For toplevel surfaces, withdraws them, so they will no longer be
     * known to the window manager; for all surfaces, unmaps them, so
     * they won’t be displayed. Normally done automatically as
     * part of [method`Gtk`.Widget.hide].
     */
    hide(): void
    /**
     * Check to see if a surface is destroyed.
     */
    isDestroyed(): boolean
    /**
     * Forces a [signal`Gdk`.Surface::render] signal emission for `surface`
     * to be scheduled.
     * 
     * This function is useful for implementations that track invalid
     * regions on their own.
     */
    queueRender(): void
    /**
     * Request a layout phase from the surface's frame clock.
     * 
     * See [method`Gdk`.FrameClock.request_phase].
     */
    requestLayout(): void
    /**
     * Sets the default mouse pointer for a `GdkSurface`.
     * 
     * Passing %NULL for the `cursor` argument means that `surface` will use
     * the cursor of its parent surface. Most surfaces should use this default.
     * Note that `cursor` must be for the same display as `surface`.
     * 
     * Use [ctor`Gdk`.Cursor.new_from_name] or [ctor`Gdk`.Cursor.new_from_texture]
     * to create the cursor. To make the cursor invisible, use %GDK_BLANK_CURSOR.
     */
    setCursor(cursor?: Cursor | null): void
    /**
     * Sets a specific `GdkCursor` for a given device when it gets inside `surface`.
     * 
     * Passing %NULL for the `cursor` argument means that `surface` will use the
     * cursor of its parent surface. Most surfaces should use this default.
     * 
     * Use [ctor`Gdk`.Cursor.new_from_name] or [ctor`Gdk`.Cursor.new_from_texture]
     * to create the cursor. To make the cursor invisible, use %GDK_BLANK_CURSOR.
     */
    setDeviceCursor(device: Device, cursor: Cursor): void
    /**
     * Apply the region to the surface for the purpose of event
     * handling.
     * 
     * Mouse events which happen while the pointer position corresponds
     * to an unset bit in the mask will be passed on the surface below
     * `surface`.
     * 
     * An input region is typically used with RGBA surfaces. The alpha
     * channel of the surface defines which pixels are invisible and
     * allows for nicely antialiased borders, and the input region
     * controls where the surface is “clickable”.
     * 
     * Use [method`Gdk`.Display.supports_input_shapes] to find out if
     * a particular backend supports input regions.
     */
    setInputRegion(region: cairo.Region): void
    /**
     * Marks a region of the `GdkSurface` as opaque.
     * 
     * For optimisation purposes, compositing window managers may
     * like to not draw obscured regions of surfaces, or turn off blending
     * during for these regions. With RGB windows with no transparency,
     * this is just the shape of the window, but with ARGB32 windows, the
     * compositor does not know what regions of the window are transparent
     * or not.
     * 
     * This function only works for toplevel surfaces.
     * 
     * GTK will update this property automatically if the `surface` background
     * is opaque, as we know where the opaque regions are. If your surface
     * background is not opaque, please update this property in your
     * [vfunc`Gtk`.Widget.css_changed] handler.
     */
    setOpaqueRegion(region?: cairo.Region | null): void
    /**
     * Translates coordinates between two surfaces.
     * 
     * Note that this only works if `to` and `from` are popups or
     * transient-for to the same toplevel (directly or indirectly).
     */
    translateCoordinates(to: Surface, x: number, y: number): [ /* returnType */ boolean, /* x */ number, /* y */ number ]
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
    /* Signals of Gdk-4.0.Gdk.Surface */
    /**
     * Emitted when `surface` starts being present on the monitor.
     */
    connect(sigName: "enter-monitor", callback: ((monitor: Monitor) => void)): number
    on(sigName: "enter-monitor", callback: (monitor: Monitor) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "enter-monitor", callback: (monitor: Monitor) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "enter-monitor", callback: (monitor: Monitor) => void): NodeJS.EventEmitter
    emit(sigName: "enter-monitor", monitor: Monitor): void
    /**
     * Emitted when GDK receives an input event for `surface`.
     */
    connect(sigName: "event", callback: ((event: Event) => boolean)): number
    on(sigName: "event", callback: (event: Event) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "event", callback: (event: Event) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "event", callback: (event: Event) => void): NodeJS.EventEmitter
    emit(sigName: "event", event: Event): void
    /**
     * Emitted when the size of `surface` is changed, or when relayout should
     * be performed.
     * 
     * Surface size is reported in ”application pixels”, not
     * ”device pixels” (see gdk_surface_get_scale_factor()).
     */
    connect(sigName: "layout", callback: ((width: number, height: number) => void)): number
    on(sigName: "layout", callback: (width: number, height: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "layout", callback: (width: number, height: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "layout", callback: (width: number, height: number) => void): NodeJS.EventEmitter
    emit(sigName: "layout", width: number, height: number): void
    /**
     * Emitted when `surface` stops being present on the monitor.
     */
    connect(sigName: "leave-monitor", callback: ((monitor: Monitor) => void)): number
    on(sigName: "leave-monitor", callback: (monitor: Monitor) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "leave-monitor", callback: (monitor: Monitor) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "leave-monitor", callback: (monitor: Monitor) => void): NodeJS.EventEmitter
    emit(sigName: "leave-monitor", monitor: Monitor): void
    /**
     * Emitted when part of the surface needs to be redrawn.
     */
    connect(sigName: "render", callback: ((region: cairo.Region) => boolean)): number
    on(sigName: "render", callback: (region: cairo.Region) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "render", callback: (region: cairo.Region) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "render", callback: (region: cairo.Region) => void): NodeJS.EventEmitter
    emit(sigName: "render", region: cairo.Region): void
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
    connect(sigName: "notify::cursor", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mapped", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mapped", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mapped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mapped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mapped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-factor", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Popup_ConstructProps)
    _init (config?: Popup_ConstructProps): void
    static $gtype: GObject.Type
}
interface Toplevel_ConstructProps extends Surface_ConstructProps {
    /* Constructor properties of Gdk-4.0.Gdk.Toplevel */
    /**
     * Whether the window manager should add decorations.
     */
    decorated?: boolean
    /**
     * Whether the window manager should allow to close the surface.
     */
    deletable?: boolean
    /**
     * The fullscreen mode of the surface.
     */
    fullscreenMode?: FullscreenMode
    /**
     * A list of textures to use as icon.
     */
    iconList?: object
    /**
     * Whether the surface is modal.
     */
    modal?: boolean
    /**
     * The startup ID of the surface.
     * 
     * See [class`Gdk`.AppLaunchContext] for more information about
     * startup feedback.
     */
    startupId?: string
    /**
     * The title of the surface.
     */
    title?: string
    /**
     * The transient parent of the surface.
     */
    transientFor?: Surface
}
class Toplevel {
    /* Properties of Gdk-4.0.Gdk.Toplevel */
    /**
     * Whether the window manager should add decorations.
     */
    decorated: boolean
    /**
     * Whether the window manager should allow to close the surface.
     */
    deletable: boolean
    /**
     * The fullscreen mode of the surface.
     */
    fullscreenMode: FullscreenMode
    /**
     * A list of textures to use as icon.
     */
    iconList: object
    /**
     * Whether the surface is modal.
     */
    modal: boolean
    /**
     * Whether the surface should inhibit keyboard shortcuts.
     */
    readonly shortcutsInhibited: boolean
    /**
     * The startup ID of the surface.
     * 
     * See [class`Gdk`.AppLaunchContext] for more information about
     * startup feedback.
     */
    startupId: string
    /**
     * The state of the toplevel.
     */
    readonly state: ToplevelState
    /**
     * The title of the surface.
     */
    title: string
    /**
     * The transient parent of the surface.
     */
    transientFor: Surface
    /* Properties of Gdk-4.0.Gdk.Surface */
    /**
     * The mouse pointer for the `GdkSurface`.
     */
    cursor: Cursor
    /**
     * The height of the surface, in pixels.
     */
    readonly height: number
    /**
     * Whether the surface is mapped.
     */
    readonly mapped: boolean
    /**
     * The scale factor of the surface.
     */
    readonly scaleFactor: number
    /**
     * The width of the surface in pixels.
     */
    readonly width: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gdk-4.0.Gdk.Toplevel */
    /**
     * Begins an interactive move operation.
     * 
     * You might use this function to implement draggable titlebars.
     */
    beginMove(device: Device, button: number, x: number, y: number, timestamp: number): void
    /**
     * Begins an interactive resize operation.
     * 
     * You might use this function to implement a “window resize grip.”
     */
    beginResize(edge: SurfaceEdge, device: Device | null, button: number, x: number, y: number, timestamp: number): void
    /**
     * Sets keyboard focus to `surface`.
     * 
     * In most cases, [method`Gtk`.Window.present_with_time] should be
     * used on a [class`Gtk`.Window], rather than calling this function.
     */
    focus(timestamp: number): void
    /**
     * Gets the bitwise or of the currently active surface state flags,
     * from the `GdkToplevelState` enumeration.
     */
    getState(): ToplevelState
    /**
     * Requests that the `toplevel` inhibit the system shortcuts.
     * 
     * This is asking the desktop environment/windowing system to let all
     * keyboard events reach the surface, as long as it is focused, instead
     * of triggering system actions.
     * 
     * If granted, the rerouting remains active until the default shortcuts
     * processing is restored with [method`Gdk`.Toplevel.restore_system_shortcuts],
     * or the request is revoked by the desktop environment, windowing system
     * or the user.
     * 
     * A typical use case for this API is remote desktop or virtual machine
     * viewers which need to inhibit the default system keyboard shortcuts
     * so that the remote session or virtual host gets those instead of the
     * local environment.
     * 
     * The windowing system or desktop environment may ask the user to grant
     * or deny the request or even choose to ignore the request entirely.
     * 
     * The caller can be notified whenever the request is granted or revoked
     * by listening to the [property`Gdk`.Toplevel:shortcuts-inhibited] property.
     */
    inhibitSystemShortcuts(event?: Event | null): void
    /**
     * Asks to lower the `toplevel` below other windows.
     * 
     * The windowing system may choose to ignore the request.
     */
    lower(): boolean
    /**
     * Asks to minimize the `toplevel`.
     * 
     * The windowing system may choose to ignore the request.
     */
    minimize(): boolean
    /**
     * Present `toplevel` after having processed the `GdkToplevelLayout` rules.
     * 
     * If the toplevel was previously not showing, it will be showed,
     * otherwise it will change layout according to `layout`.
     * 
     * GDK may emit the [signal`Gdk`.Toplevel::compute-size] signal to let
     * the user of this toplevel compute the preferred size of the toplevel
     * surface.
     * 
     * Presenting is asynchronous and the specified layout parameters are not
     * guaranteed to be respected.
     */
    present(layout: ToplevelLayout): void
    /**
     * Restore default system keyboard shortcuts which were previously
     * inhibited.
     * 
     * This undoes the effect of [method`Gdk`.Toplevel.inhibit_system_shortcuts].
     */
    restoreSystemShortcuts(): void
    /**
     * Sets the toplevel to be decorated.
     * 
     * Setting `decorated` to %FALSE hints the desktop environment
     * that the surface has its own, client-side decorations and
     * does not need to have window decorations added.
     */
    setDecorated(decorated: boolean): void
    /**
     * Sets the toplevel to be deletable.
     * 
     * Setting `deletable` to %TRUE hints the desktop environment
     * that it should offer the user a way to close the surface.
     */
    setDeletable(deletable: boolean): void
    /**
     * Sets a list of icons for the surface.
     * 
     * One of these will be used to represent the surface in iconic form.
     * The icon may be shown in window lists or task bars. Which icon
     * size is shown depends on the window manager. The window manager
     * can scale the icon but setting several size icons can give better
     * image quality.
     * 
     * Note that some platforms don't support surface icons.
     */
    setIconList(surfaces: Texture[]): void
    /**
     * Sets the toplevel to be modal.
     * 
     * The application can use this hint to tell the
     * window manager that a certain surface has modal
     * behaviour. The window manager can use this information
     * to handle modal surfaces in a special way.
     * 
     * You should only use this on surfaces for which you have
     * previously called [method`Gdk`.Toplevel.set_transient_for].
     */
    setModal(modal: boolean): void
    /**
     * Sets the startup notification ID.
     * 
     * When using GTK, typically you should use
     * [method`Gtk`.Window.set_startup_id] instead of this
     * low-level function.
     */
    setStartupId(startupId: string): void
    /**
     * Sets the title of a toplevel surface.
     * 
     * The title maybe be displayed in the titlebar,
     * in lists of windows, etc.
     */
    setTitle(title: string): void
    /**
     * Sets a transient-for parent.
     * 
     * Indicates to the window manager that `surface` is a transient
     * dialog associated with the application surface `parent`. This
     * allows the window manager to do things like center `surface`
     * on `parent` and keep `surface` above `parent`.
     * 
     * See [method`Gtk`.Window.set_transient_for] if you’re using
     * [class`Gtk`.Window] or [class`Gtk`.Dialog].
     */
    setTransientFor(parent: Surface): void
    /**
     * Asks the windowing system to show the window menu.
     * 
     * The window menu is the menu shown when right-clicking the titlebar
     * on traditional windows managed by the window manager. This is useful
     * for windows using client-side decorations, activating it with a
     * right-click on the window decorations.
     */
    showWindowMenu(event: Event): boolean
    /**
     * Returns whether the desktop environment supports
     * tiled window states.
     */
    supportsEdgeConstraints(): boolean
    titlebarGesture(gesture: TitlebarGesture): boolean
    /* Methods of Gdk-4.0.Gdk.Surface */
    /**
     * Emits a short beep associated to `surface`.
     * 
     * If the display of `surface` does not support per-surface beeps,
     * emits a short beep on the display just as [method`Gdk`.Display.beep].
     */
    beep(): void
    /**
     * Creates a new `GdkCairoContext` for rendering on `surface`.
     */
    createCairoContext(): CairoContext
    /**
     * Creates a new `GdkGLContext` for the `GdkSurface`.
     * 
     * The context is disconnected from any particular surface or surface.
     * If the creation of the `GdkGLContext` failed, `error` will be set.
     * Before using the returned `GdkGLContext`, you will need to
     * call [method`Gdk`.GLContext.make_current] or [method`Gdk`.GLContext.realize].
     */
    createGlContext(): GLContext
    /**
     * Create a new Cairo surface that is as compatible as possible with the
     * given `surface`.
     * 
     * For example the new surface will have the same fallback resolution
     * and font options as `surface`. Generally, the new surface will also
     * use the same backend as `surface,` unless that is not possible for
     * some reason. The type of the returned surface may be examined with
     * cairo_surface_get_type().
     * 
     * Initially the surface contents are all 0 (transparent if contents
     * have transparency, black otherwise.)
     * 
     * This function always returns a valid pointer, but it will return a
     * pointer to a “nil” surface if `other` is already in an error state
     * or any other error occurs.
     */
    createSimilarSurface(content: cairo.Content, width: number, height: number): cairo.Surface
    /**
     * Creates a new `GdkVulkanContext` for rendering on `surface`.
     * 
     * If the creation of the `GdkVulkanContext` failed, `error` will be set.
     */
    createVulkanContext(): VulkanContext
    /**
     * Destroys the window system resources associated with `surface` and
     * decrements `surface'`s reference count.
     * 
     * The window system resources for all children of `surface` are also
     * destroyed, but the children’s reference counts are not decremented.
     * 
     * Note that a surface will not be destroyed automatically when its
     * reference count reaches zero. You must call this function yourself
     * before that happens.
     */
    destroy(): void
    /**
     * Retrieves a `GdkCursor` pointer for the cursor currently set on the
     * `GdkSurface`.
     * 
     * If the return value is %NULL then there is no custom cursor set on
     * the surface, and it is using the cursor for its parent surface.
     * 
     * Use [method`Gdk`.Surface.set_cursor] to unset the cursor of the surface.
     */
    getCursor(): Cursor | null
    /**
     * Retrieves a `GdkCursor` pointer for the `device` currently set on the
     * specified `GdkSurface`.
     * 
     * If the return value is %NULL then there is no custom cursor set on the
     * specified surface, and it is using the cursor for its parent surface.
     * 
     * Use [method`Gdk`.Surface.set_cursor] to unset the cursor of the surface.
     */
    getDeviceCursor(device: Device): Cursor | null
    /**
     * Obtains the current device position and modifier state.
     * 
     * The position is given in coordinates relative to the upper
     * left corner of `surface`.
     */
    getDevicePosition(device: Device): [ /* returnType */ boolean, /* x */ number | null, /* y */ number | null, /* mask */ ModifierType | null ]
    /**
     * Gets the `GdkDisplay` associated with a `GdkSurface`.
     */
    getDisplay(): Display
    /**
     * Gets the frame clock for the surface.
     * 
     * The frame clock for a surface never changes unless the surface is
     * reparented to a new toplevel surface.
     */
    getFrameClock(): FrameClock
    /**
     * Returns the height of the given `surface`.
     * 
     * Surface size is reported in ”application pixels”, not
     * ”device pixels” (see [method`Gdk`.Surface.get_scale_factor]).
     */
    getHeight(): number
    /**
     * Checks whether the surface has been mapped.
     * 
     * A surface is mapped with [method`Gdk`.Toplevel.present]
     * or [method`Gdk`.Popup.present].
     */
    getMapped(): boolean
    /**
     * Returns the internal scale factor that maps from surface coordinates
     * to the actual device pixels.
     * 
     * On traditional systems this is 1, but on very high density outputs
     * this can be a higher value (often 2). A higher value means that drawing
     * is automatically scaled up to a higher resolution, so any code doing
     * drawing will automatically look nicer. However, if you are supplying
     * pixel-based data the scale value can be used to determine whether to
     * use a pixel resource with higher resolution data.
     * 
     * The scale of a surface may change during runtime.
     */
    getScaleFactor(): number
    /**
     * Returns the width of the given `surface`.
     * 
     * Surface size is reported in ”application pixels”, not
     * ”device pixels” (see [method`Gdk`.Surface.get_scale_factor]).
     */
    getWidth(): number
    /**
     * Hide the surface.
     * 
     * For toplevel surfaces, withdraws them, so they will no longer be
     * known to the window manager; for all surfaces, unmaps them, so
     * they won’t be displayed. Normally done automatically as
     * part of [method`Gtk`.Widget.hide].
     */
    hide(): void
    /**
     * Check to see if a surface is destroyed.
     */
    isDestroyed(): boolean
    /**
     * Forces a [signal`Gdk`.Surface::render] signal emission for `surface`
     * to be scheduled.
     * 
     * This function is useful for implementations that track invalid
     * regions on their own.
     */
    queueRender(): void
    /**
     * Request a layout phase from the surface's frame clock.
     * 
     * See [method`Gdk`.FrameClock.request_phase].
     */
    requestLayout(): void
    /**
     * Sets the default mouse pointer for a `GdkSurface`.
     * 
     * Passing %NULL for the `cursor` argument means that `surface` will use
     * the cursor of its parent surface. Most surfaces should use this default.
     * Note that `cursor` must be for the same display as `surface`.
     * 
     * Use [ctor`Gdk`.Cursor.new_from_name] or [ctor`Gdk`.Cursor.new_from_texture]
     * to create the cursor. To make the cursor invisible, use %GDK_BLANK_CURSOR.
     */
    setCursor(cursor?: Cursor | null): void
    /**
     * Sets a specific `GdkCursor` for a given device when it gets inside `surface`.
     * 
     * Passing %NULL for the `cursor` argument means that `surface` will use the
     * cursor of its parent surface. Most surfaces should use this default.
     * 
     * Use [ctor`Gdk`.Cursor.new_from_name] or [ctor`Gdk`.Cursor.new_from_texture]
     * to create the cursor. To make the cursor invisible, use %GDK_BLANK_CURSOR.
     */
    setDeviceCursor(device: Device, cursor: Cursor): void
    /**
     * Apply the region to the surface for the purpose of event
     * handling.
     * 
     * Mouse events which happen while the pointer position corresponds
     * to an unset bit in the mask will be passed on the surface below
     * `surface`.
     * 
     * An input region is typically used with RGBA surfaces. The alpha
     * channel of the surface defines which pixels are invisible and
     * allows for nicely antialiased borders, and the input region
     * controls where the surface is “clickable”.
     * 
     * Use [method`Gdk`.Display.supports_input_shapes] to find out if
     * a particular backend supports input regions.
     */
    setInputRegion(region: cairo.Region): void
    /**
     * Marks a region of the `GdkSurface` as opaque.
     * 
     * For optimisation purposes, compositing window managers may
     * like to not draw obscured regions of surfaces, or turn off blending
     * during for these regions. With RGB windows with no transparency,
     * this is just the shape of the window, but with ARGB32 windows, the
     * compositor does not know what regions of the window are transparent
     * or not.
     * 
     * This function only works for toplevel surfaces.
     * 
     * GTK will update this property automatically if the `surface` background
     * is opaque, as we know where the opaque regions are. If your surface
     * background is not opaque, please update this property in your
     * [vfunc`Gtk`.Widget.css_changed] handler.
     */
    setOpaqueRegion(region?: cairo.Region | null): void
    /**
     * Translates coordinates between two surfaces.
     * 
     * Note that this only works if `to` and `from` are popups or
     * transient-for to the same toplevel (directly or indirectly).
     */
    translateCoordinates(to: Surface, x: number, y: number): [ /* returnType */ boolean, /* x */ number, /* y */ number ]
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
    /* Signals of Gdk-4.0.Gdk.Toplevel */
    /**
     * Emitted when the size for the surface needs to be computed, when
     * it is present.
     * 
     * It will normally be emitted during or after [method`Gdk`.Toplevel.present],
     * depending on the configuration received by the windowing system.
     * It may also be emitted at any other point in time, in response
     * to the windowing system spontaneously changing the configuration.
     * 
     * It is the responsibility of the toplevel user to handle this signal
     * and compute the desired size of the toplevel, given the information
     * passed via the [struct`Gdk`.ToplevelSize] object. Failing to do so
     * will result in an arbitrary size being used as a result.
     */
    connect(sigName: "compute-size", callback: (() => void)): number
    on(sigName: "compute-size", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "compute-size", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "compute-size", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "compute-size"): void
    /* Signals of Gdk-4.0.Gdk.Surface */
    /**
     * Emitted when `surface` starts being present on the monitor.
     */
    connect(sigName: "enter-monitor", callback: ((monitor: Monitor) => void)): number
    on(sigName: "enter-monitor", callback: (monitor: Monitor) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "enter-monitor", callback: (monitor: Monitor) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "enter-monitor", callback: (monitor: Monitor) => void): NodeJS.EventEmitter
    emit(sigName: "enter-monitor", monitor: Monitor): void
    /**
     * Emitted when GDK receives an input event for `surface`.
     */
    connect(sigName: "event", callback: ((event: Event) => boolean)): number
    on(sigName: "event", callback: (event: Event) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "event", callback: (event: Event) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "event", callback: (event: Event) => void): NodeJS.EventEmitter
    emit(sigName: "event", event: Event): void
    /**
     * Emitted when the size of `surface` is changed, or when relayout should
     * be performed.
     * 
     * Surface size is reported in ”application pixels”, not
     * ”device pixels” (see gdk_surface_get_scale_factor()).
     */
    connect(sigName: "layout", callback: ((width: number, height: number) => void)): number
    on(sigName: "layout", callback: (width: number, height: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "layout", callback: (width: number, height: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "layout", callback: (width: number, height: number) => void): NodeJS.EventEmitter
    emit(sigName: "layout", width: number, height: number): void
    /**
     * Emitted when `surface` stops being present on the monitor.
     */
    connect(sigName: "leave-monitor", callback: ((monitor: Monitor) => void)): number
    on(sigName: "leave-monitor", callback: (monitor: Monitor) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "leave-monitor", callback: (monitor: Monitor) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "leave-monitor", callback: (monitor: Monitor) => void): NodeJS.EventEmitter
    emit(sigName: "leave-monitor", monitor: Monitor): void
    /**
     * Emitted when part of the surface needs to be redrawn.
     */
    connect(sigName: "render", callback: ((region: cairo.Region) => boolean)): number
    on(sigName: "render", callback: (region: cairo.Region) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "render", callback: (region: cairo.Region) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "render", callback: (region: cairo.Region) => void): NodeJS.EventEmitter
    emit(sigName: "render", region: cairo.Region): void
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
    connect(sigName: "notify::decorated", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::decorated", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::decorated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::decorated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::decorated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::deletable", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::deletable", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::deletable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::deletable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::deletable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::fullscreen-mode", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fullscreen-mode", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::fullscreen-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::fullscreen-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::fullscreen-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::icon-list", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-list", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::icon-list", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::icon-list", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::icon-list", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::modal", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modal", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::modal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::modal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::modal", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::shortcuts-inhibited", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shortcuts-inhibited", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::shortcuts-inhibited", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::shortcuts-inhibited", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::shortcuts-inhibited", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::startup-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::startup-id", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::startup-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::startup-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::startup-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::state", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::transient-for", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transient-for", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::transient-for", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::transient-for", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::transient-for", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::cursor", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mapped", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mapped", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mapped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mapped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mapped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-factor", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Toplevel_ConstructProps)
    _init (config?: Toplevel_ConstructProps): void
    static $gtype: GObject.Type
}
interface AppLaunchContext_ConstructProps extends Gio.AppLaunchContext_ConstructProps {
    /* Constructor properties of Gdk-4.0.Gdk.AppLaunchContext */
    /**
     * The display that the `GdkAppLaunchContext` is on.
     */
    display?: Display
}
class AppLaunchContext {
    /* Fields of Gio-2.0.Gio.AppLaunchContext */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gdk-4.0.Gdk.AppLaunchContext */
    /**
     * Gets the `GdkDisplay` that `context` is for.
     */
    getDisplay(): Display
    /**
     * Sets the workspace on which applications will be launched.
     * 
     * This only works when running under a window manager that
     * supports multiple workspaces, as described in the
     * [Extended Window Manager Hints](http://www.freedesktop.org/Standards/wm-spec).
     * Specifically this sets the `_NET_WM_DESKTOP` property described
     * in that spec.
     * 
     * This only works when using the X11 backend.
     * 
     * When the workspace is not specified or `desktop` is set to -1,
     * it is up to the window manager to pick one, typically it will
     * be the current workspace.
     */
    setDesktop(desktop: number): void
    /**
     * Sets the icon for applications that are launched with this
     * context.
     * 
     * Window Managers can use this information when displaying startup
     * notification.
     * 
     * See also [method`Gdk`.AppLaunchContext.set_icon_name].
     */
    setIcon(icon?: Gio.Icon | null): void
    /**
     * Sets the icon for applications that are launched with this context.
     * 
     * The `icon_name` will be interpreted in the same way as the Icon field
     * in desktop files. See also [method`Gdk`.AppLaunchContext.set_icon].
     * 
     * If both `icon` and `icon_name` are set, the `icon_name` takes priority.
     * If neither `icon` or `icon_name` is set, the icon is taken from either
     * the file that is passed to launched application or from the `GAppInfo`
     * for the launched application itself.
     */
    setIconName(iconName?: string | null): void
    /**
     * Sets the timestamp of `context`.
     * 
     * The timestamp should ideally be taken from the event that
     * triggered the launch.
     * 
     * Window managers can use this information to avoid moving the
     * focus to the newly launched application when the user is busy
     * typing in another window. This is also known as 'focus stealing
     * prevention'.
     */
    setTimestamp(timestamp: number): void
    /* Methods of Gio-2.0.Gio.AppLaunchContext */
    /**
     * Gets the display string for the `context`. This is used to ensure new
     * applications are started on the same display as the launching
     * application, by setting the `DISPLAY` environment variable.
     */
    getDisplay(info: Gio.AppInfo, files: Gio.File[]): string | null
    /**
     * Gets the complete environment variable list to be passed to
     * the child process when `context` is used to launch an application.
     * This is a %NULL-terminated array of strings, where each string has
     * the form `KEY=VALUE`.
     */
    getEnvironment(): string[]
    /**
     * Initiates startup notification for the application and returns the
     * `DESKTOP_STARTUP_ID` for the launched operation, if supported.
     * 
     * Startup notification IDs are defined in the
     * [FreeDesktop.Org Startup Notifications standard](http://standards.freedesktop.org/startup-notification-spec/startup-notification-latest.txt).
     */
    getStartupNotifyId(info: Gio.AppInfo, files: Gio.File[]): string | null
    /**
     * Called when an application has failed to launch, so that it can cancel
     * the application startup notification started in g_app_launch_context_get_startup_notify_id().
     */
    launchFailed(startupNotifyId: string): void
    /**
     * Arranges for `variable` to be set to `value` in the child's
     * environment when `context` is used to launch an application.
     */
    setenv(variable: string, value: string): void
    /**
     * Arranges for `variable` to be unset in the child's environment
     * when `context` is used to launch an application.
     */
    unsetenv(variable: string): void
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
    /* Signals of Gio-2.0.Gio.AppLaunchContext */
    /**
     * The #GAppLaunchContext::launch-failed signal is emitted when a #GAppInfo launch
     * fails. The startup notification id is provided, so that the launcher
     * can cancel the startup notification.
     */
    connect(sigName: "launch-failed", callback: ((startupNotifyId: string) => void)): number
    on(sigName: "launch-failed", callback: (startupNotifyId: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "launch-failed", callback: (startupNotifyId: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "launch-failed", callback: (startupNotifyId: string) => void): NodeJS.EventEmitter
    emit(sigName: "launch-failed", startupNotifyId: string): void
    /**
     * The #GAppLaunchContext::launch-started signal is emitted when a #GAppInfo is
     * about to be launched. If non-null the `platform_data` is an
     * GVariant dictionary mapping strings to variants (ie `a{sv}`), which
     * contains additional, platform-specific data about this launch. On
     * UNIX, at least the `startup-notification-id` keys will be
     * present.
     * 
     * The value of the `startup-notification-id` key (type `s`) is a startup
     * notification ID corresponding to the format from the [startup-notification
     * specification](https://specifications.freedesktop.org/startup-notification-spec/startup-notification-0.1.txt).
     * It allows tracking the progress of the launchee through startup.
     * 
     * It is guaranteed that this signal is followed by either a #GAppLaunchContext::launched or
     * #GAppLaunchContext::launch-failed signal.
     */
    connect(sigName: "launch-started", callback: ((info: Gio.AppInfo, platformData?: GLib.Variant | null) => void)): number
    on(sigName: "launch-started", callback: (info: Gio.AppInfo, platformData?: GLib.Variant | null) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "launch-started", callback: (info: Gio.AppInfo, platformData?: GLib.Variant | null) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "launch-started", callback: (info: Gio.AppInfo, platformData?: GLib.Variant | null) => void): NodeJS.EventEmitter
    emit(sigName: "launch-started", info: Gio.AppInfo, platformData?: GLib.Variant | null): void
    /**
     * The #GAppLaunchContext::launched signal is emitted when a #GAppInfo is successfully
     * launched. The `platform_data` is an GVariant dictionary mapping
     * strings to variants (ie `a{sv}`), which contains additional,
     * platform-specific data about this launch. On UNIX, at least the
     * `pid` and `startup-notification-id` keys will be present.
     * 
     * Since 2.72 the `pid` may be 0 if the process id wasn't known (for
     * example if the process was launched via D-Bus). The `pid` may not be
     * set at all in subsequent releases.
     */
    connect(sigName: "launched", callback: ((info: Gio.AppInfo, platformData: GLib.Variant) => void)): number
    on(sigName: "launched", callback: (info: Gio.AppInfo, platformData: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "launched", callback: (info: Gio.AppInfo, platformData: GLib.Variant) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "launched", callback: (info: Gio.AppInfo, platformData: GLib.Variant) => void): NodeJS.EventEmitter
    emit(sigName: "launched", info: Gio.AppInfo, platformData: GLib.Variant): void
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
    constructor (config?: AppLaunchContext_ConstructProps)
    _init (config?: AppLaunchContext_ConstructProps): void
    static $gtype: GObject.Type
}
class ButtonEvent {
    /* Methods of Gdk-4.0.Gdk.ButtonEvent */
    /**
     * Extract the button number from a button event.
     */
    getButton(): number
    /* Methods of Gdk-4.0.Gdk.Event */
    /**
     * Returns the relative angle from `event1` to `event2`.
     * 
     * The relative angle is the angle between the X axis and the line
     * through both events' positions. The rotation direction for positive
     * angles is from the positive X axis towards the positive Y axis.
     * 
     * This assumes that both events have X/Y information.
     * If not, this function returns %FALSE.
     */
    getAngle(event2: Event): [ /* returnType */ boolean, /* angle */ number ]
    /**
     * Returns the point halfway between the events' positions.
     * 
     * This assumes that both events have X/Y information.
     * If not, this function returns %FALSE.
     */
    getCenter(event2: Event): [ /* returnType */ boolean, /* x */ number, /* y */ number ]
    /**
     * Returns the distance between the event locations.
     * 
     * This assumes that both events have X/Y information.
     * If not, this function returns %FALSE.
     */
    getDistance(event2: Event): [ /* returnType */ boolean, /* distance */ number ]
    /**
     * Extracts all axis values from an event.
     * 
     * To find out which axes are used, use [method`Gdk`.DeviceTool.get_axes]
     * on the device tool returned by [method`Gdk`.Event.get_device_tool].
     */
    getAxes(): [ /* returnType */ boolean, /* axes */ number[] ]
    /**
     * Extract the axis value for a particular axis use from
     * an event structure.
     * 
     * To find out which axes are used, use [method`Gdk`.DeviceTool.get_axes]
     * on the device tool returned by [method`Gdk`.Event.get_device_tool].
     */
    getAxis(axisUse: AxisUse): [ /* returnType */ boolean, /* value */ number ]
    /**
     * Returns the device of an event.
     */
    getDevice(): Device | null
    /**
     * Returns a `GdkDeviceTool` representing the tool that
     * caused the event.
     * 
     * If the was not generated by a device that supports
     * different tools (such as a tablet), this function will
     * return %NULL.
     * 
     * Note: the `GdkDeviceTool` will be constant during
     * the application lifetime, if settings must be stored
     * persistently across runs, see [method`Gdk`.DeviceTool.get_serial].
     */
    getDeviceTool(): DeviceTool | null
    /**
     * Retrieves the display associated to the `event`.
     */
    getDisplay(): Display | null
    /**
     * Retuns the event sequence to which the event belongs.
     * 
     * Related touch events are connected in a sequence. Other
     * events typically don't have event sequence information.
     */
    getEventSequence(): EventSequence
    /**
     * Retrieves the type of the event.
     */
    getEventType(): EventType
    /**
     * Retrieves the history of the device that `event` is for, as a list of
     * time and coordinates.
     * 
     * The history includes positions that are not delivered as separate events
     * to the application because they occurred in the same frame as `event`.
     * 
     * Note that only motion and scroll events record history, and motion
     * events do it only if one of the mouse buttons is down, or the device
     * has a tool.
     */
    getHistory(): TimeCoord[] | null
    /**
     * Returns the modifier state field of an event.
     */
    getModifierState(): ModifierType
    /**
     * Returns whether this event is an 'emulated' pointer event.
     * 
     * Emulated pointer events typically originate from a touch events.
     */
    getPointerEmulated(): boolean
    /**
     * Extract the event surface relative x/y coordinates from an event.
     */
    getPosition(): [ /* returnType */ boolean, /* x */ number, /* y */ number ]
    /**
     * Returns the seat that originated the event.
     */
    getSeat(): Seat | null
    /**
     * Extracts the surface associated with an event.
     */
    getSurface(): Surface | null
    /**
     * Returns the timestamp of `event`.
     * 
     * Not all events have timestamps. In that case, this function
     * returns %GDK_CURRENT_TIME.
     */
    getTime(): number
    /**
     * Increase the ref count of `event`.
     */
    ref(): Event
    /**
     * Returns whether a `GdkEvent` should trigger a context menu,
     * according to platform conventions.
     * 
     * The right mouse button typically triggers context menus.
     * 
     * This function should always be used instead of simply checking for
     * event->button == %GDK_BUTTON_SECONDARY.
     */
    triggersContextMenu(): boolean
    /**
     * Decrease the ref count of `event`.
     * 
     * If the last reference is dropped, the structure is freed.
     */
    unref(): void
    static name: string
}
interface CairoContext_ConstructProps extends DrawContext_ConstructProps {
}
class CairoContext {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gdk-4.0.Gdk.CairoContext */
    /**
     * Retrieves a Cairo context to be used to draw on the `GdkSurface`
     * of `context`.
     * 
     * A call to [method`Gdk`.DrawContext.begin_frame] with this
     * `context` must have been done or this function will return %NULL.
     * 
     * The returned context is guaranteed to be valid until
     * [method`Gdk`.DrawContext.end_frame] is called.
     */
    cairoCreate(): cairo.Context | null
    /* Methods of Gdk-4.0.Gdk.DrawContext */
    /**
     * Indicates that you are beginning the process of redrawing `region`
     * on the `context'`s surface.
     * 
     * Calling this function begins a drawing operation using `context` on the
     * surface that `context` was created from. The actual requirements and
     * guarantees for the drawing operation vary for different implementations
     * of drawing, so a [class`Gdk`.CairoContext] and a [class`Gdk`.GLContext]
     * need to be treated differently.
     * 
     * A call to this function is a requirement for drawing and must be
     * followed by a call to [method`Gdk`.DrawContext.end_frame], which will
     * complete the drawing operation and ensure the contents become visible
     * on screen.
     * 
     * Note that the `region` passed to this function is the minimum region that
     * needs to be drawn and depending on implementation, windowing system and
     * hardware in use, it might be necessary to draw a larger region. Drawing
     * implementation must use [method`Gdk`.DrawContext.get_frame_region] to
     * query the region that must be drawn.
     * 
     * When using GTK, the widget system automatically places calls to
     * gdk_draw_context_begin_frame() and gdk_draw_context_end_frame() via the
     * use of [class`Gsk`.Renderer]s, so application code does not need to call
     * these functions explicitly.
     */
    beginFrame(region: cairo.Region): void
    /**
     * Ends a drawing operation started with gdk_draw_context_begin_frame().
     * 
     * This makes the drawing available on screen.
     * See [method`Gdk`.DrawContext.begin_frame] for more details about drawing.
     * 
     * When using a [class`Gdk`.GLContext], this function may call `glFlush()`
     * implicitly before returning; it is not recommended to call `glFlush()`
     * explicitly before calling this function.
     */
    endFrame(): void
    /**
     * Retrieves the `GdkDisplay` the `context` is created for
     */
    getDisplay(): Display | null
    /**
     * Retrieves the region that is currently being repainted.
     * 
     * After a call to [method`Gdk`.DrawContext.begin_frame] this function will
     * return a union of the region passed to that function and the area of the
     * surface that the `context` determined needs to be repainted.
     * 
     * If `context` is not in between calls to [method`Gdk`.DrawContext.begin_frame]
     * and [method`Gdk`.DrawContext.end_frame], %NULL will be returned.
     */
    getFrameRegion(): cairo.Region | null
    /**
     * Retrieves the surface that `context` is bound to.
     */
    getSurface(): Surface | null
    /**
     * Returns %TRUE if `context` is in the process of drawing to its surface.
     * 
     * This is the case between calls to [method`Gdk`.DrawContext.begin_frame]
     * and [method`Gdk`.DrawContext.end_frame]. In this situation, drawing commands
     * may be effecting the contents of the `context'`s surface.
     */
    isInFrame(): boolean
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
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: CairoContext_ConstructProps)
    _init (config?: CairoContext_ConstructProps): void
    static $gtype: GObject.Type
}
interface Clipboard_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gdk-4.0.Gdk.Clipboard */
    /**
     * The `GdkDisplay` that the clipboard belongs to.
     */
    display?: Display
}
class Clipboard {
    /* Properties of Gdk-4.0.Gdk.Clipboard */
    /**
     * The `GdkContentProvider` or %NULL if the clipboard is empty or contents are
     * provided otherwise.
     */
    readonly content: ContentProvider
    /**
     * The possible formats that the clipboard can provide its data in.
     */
    readonly formats: ContentFormats
    /**
     * %TRUE if the contents of the clipboard are owned by this process.
     */
    readonly local: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gdk-4.0.Gdk.Clipboard */
    /**
     * Returns the `GdkContentProvider` currently set on `clipboard`.
     * 
     * If the `clipboard` is empty or its contents are not owned by the
     * current process, %NULL will be returned.
     */
    getContent(): ContentProvider | null
    /**
     * Gets the `GdkDisplay` that the clipboard was created for.
     */
    getDisplay(): Display
    /**
     * Gets the formats that the clipboard can provide its current contents in.
     */
    getFormats(): ContentFormats
    /**
     * Returns if the clipboard is local.
     * 
     * A clipboard is considered local if it was last claimed
     * by the running application.
     * 
     * Note that [method`Gdk`.Clipboard.get_content] may return %NULL
     * even on a local clipboard. In this case the clipboard is empty.
     */
    isLocal(): boolean
    /**
     * Asynchronously requests an input stream to read the `clipboard'`s
     * contents from.
     * 
     * When the operation is finished `callback` will be called. You must then
     * call [method`Gdk`.Clipboard.read_finish] to get the result of the operation.
     * 
     * The clipboard will choose the most suitable mime type from the given list
     * to fulfill the request, preferring the ones listed first.
     */
    readAsync(mimeTypes: string[], ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous clipboard read.
     * 
     * See [method`Gdk`.Clipboard.read_async].
     */
    readFinish(result: Gio.AsyncResult): [ /* returnType */ Gio.InputStream | null, /* outMimeType */ string | null ]
    /**
     * Asynchronously request the `clipboard` contents converted to a string.
     * 
     * When the operation is finished `callback` will be called. You must then
     * call [method`Gdk`.Clipboard.read_text_finish] to get the result.
     * 
     * This is a simple wrapper around [method`Gdk`.Clipboard.read_value_async].
     * Use that function or [method`Gdk`.Clipboard.read_async] directly if you
     * need more control over the operation.
     */
    readTextAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous clipboard read.
     * 
     * See [method`Gdk`.Clipboard.read_text_async].
     */
    readTextFinish(result: Gio.AsyncResult): string | null
    /**
     * Asynchronously request the `clipboard` contents converted to a `GdkPixbuf`.
     * 
     * When the operation is finished `callback` will be called. You must then
     * call [method`Gdk`.Clipboard.read_texture_finish] to get the result.
     * 
     * This is a simple wrapper around [method`Gdk`.Clipboard.read_value_async].
     * Use that function or [method`Gdk`.Clipboard.read_async] directly if you
     * need more control over the operation.
     */
    readTextureAsync(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous clipboard read.
     * 
     * See [method`Gdk`.Clipboard.read_texture_async].
     */
    readTextureFinish(result: Gio.AsyncResult): Texture | null
    /**
     * Asynchronously request the `clipboard` contents converted to the given
     * `type`.
     * 
     * When the operation is finished `callback` will be called. You must then call
     * [method`Gdk`.Clipboard.read_value_finish] to get the resulting `GValue`.
     * 
     * For local clipboard contents that are available in the given `GType`,
     * the value will be copied directly. Otherwise, GDK will try to use
     * [func`content_deserialize_async]` to convert the clipboard's data.
     */
    readValueAsync(type: GObject.Type, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous clipboard read.
     * 
     * See [method`Gdk`.Clipboard.read_value_async].
     */
    readValueFinish(result: Gio.AsyncResult): any
    /**
     * Sets a new content provider on `clipboard`.
     * 
     * The clipboard will claim the `GdkDisplay`'s resources and advertise
     * these new contents to other applications.
     * 
     * In the rare case of a failure, this function will return %FALSE. The
     * clipboard will then continue reporting its old contents and ignore
     * `provider`.
     * 
     * If the contents are read by either an external application or the
     * `clipboard'`s read functions, `clipboard` will select the best format to
     * transfer the contents and then request that format from `provider`.
     */
    setContent(provider?: ContentProvider | null): boolean
    /**
     * Sets the `clipboard` to contain the given `value`.
     */
    set(value: any): void
    /**
     * Asynchronously instructs the `clipboard` to store its contents remotely.
     * 
     * If the clipboard is not local, this function does nothing but report success.
     * 
     * The `callback` must call [method`Gdk`.Clipboard.store_finish].
     * 
     * The purpose of this call is to preserve clipboard contents beyond the
     * lifetime of an application, so this function is typically called on
     * exit. Depending on the platform, the functionality may not be available
     * unless a "clipboard manager" is running.
     * 
     * This function is called automatically when a [class`Gtk`.Application] is
     * shut down, so you likely don't need to call it.
     */
    storeAsync(ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous clipboard store.
     * 
     * See [method`Gdk`.Clipboard.store_async].
     */
    storeFinish(result: Gio.AsyncResult): boolean
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
    /* Signals of Gdk-4.0.Gdk.Clipboard */
    /**
     * Emitted when the clipboard changes ownership.
     */
    connect(sigName: "changed", callback: (() => void)): number
    on(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "changed"): void
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
    connect(sigName: "notify::content", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::formats", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::formats", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::local", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::local", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::local", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::local", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::local", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Clipboard_ConstructProps)
    _init (config?: Clipboard_ConstructProps): void
    static $gtype: GObject.Type
}
interface ContentDeserializer_ConstructProps extends GObject.Object_ConstructProps {
}
class ContentDeserializer {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gdk-4.0.Gdk.ContentDeserializer */
    /**
     * Gets the cancellable for the current operation.
     * 
     * This is the `GCancellable` that was passed to [func`Gdk`.content_deserialize_async].
     */
    getCancellable(): Gio.Cancellable | null
    /**
     * Gets the `GType` to create an instance of.
     */
    getGtype(): GObject.Type
    /**
     * Gets the input stream for the current operation.
     * 
     * This is the stream that was passed to [func`Gdk`.content_deserialize_async].
     */
    getInputStream(): Gio.InputStream
    /**
     * Gets the mime type to deserialize from.
     */
    getMimeType(): string
    /**
     * Gets the I/O priority for the current operation.
     * 
     * This is the priority that was passed to [func`Gdk`.content_deserialize_async].
     */
    getPriority(): number
    /**
     * Gets the data that was associated with the current operation.
     * 
     * See [method`Gdk`.ContentDeserializer.set_task_data].
     */
    getTaskData(): object | null
    /**
     * Gets the user data that was passed when the deserializer was registered.
     */
    getUserData(): object | null
    /**
     * Gets the `GValue` to store the deserialized object in.
     */
    getValue(): any
    /**
     * Indicate that the deserialization has ended with an error.
     * 
     * This function consumes `error`.
     */
    returnError(error: GLib.Error): void
    /**
     * Indicate that the deserialization has been successfully completed.
     */
    returnSuccess(): void
    /**
     * Associate data with the current deserialization operation.
     */
    setTaskData(data: object | null, notify: GLib.DestroyNotify): void
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
    /* Methods of Gio-2.0.Gio.AsyncResult */
    /**
     * Gets the source object from a #GAsyncResult.
     */
    getSourceObject(): GObject.Object | null
    /**
     * Checks if `res` has the given `source_tag` (generally a function
     * pointer indicating the function `res` was created by).
     */
    isTagged(sourceTag?: object | null): boolean
    /**
     * If `res` is a #GSimpleAsyncResult, this is equivalent to
     * g_simple_async_result_propagate_error(). Otherwise it returns
     * %FALSE.
     * 
     * This can be used for legacy error handling in async *_finish()
     * wrapper functions that traditionally handled #GSimpleAsyncResult
     * error returns themselves rather than calling into the virtual method.
     * This should not be used in new code; #GAsyncResult errors that are
     * set by virtual methods should also be extracted by virtual methods,
     * to enable subclasses to chain up correctly.
     */
    legacyPropagateError(): boolean
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
    constructor (config?: ContentDeserializer_ConstructProps)
    _init (config?: ContentDeserializer_ConstructProps): void
    static $gtype: GObject.Type
}
interface ContentProvider_ConstructProps extends GObject.Object_ConstructProps {
}
class ContentProvider {
    /* Properties of Gdk-4.0.Gdk.ContentProvider */
    /**
     * The possible formats that the provider can provide its data in.
     */
    readonly formats: ContentFormats
    /**
     * The subset of formats that clipboard managers should store this provider's data in.
     */
    readonly storableFormats: ContentFormats
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gdk-4.0.Gdk.ContentProvider */
    /**
     * Emits the ::content-changed signal.
     */
    contentChanged(): void
    /**
     * Gets the contents of `provider` stored in `value`.
     * 
     * The `value` will have been initialized to the `GType` the value should be
     * provided in. This given `GType` does not need to be listed in the formats
     * returned by [method`Gdk`.ContentProvider.ref_formats]. However, if the
     * given `GType` is not supported, this operation can fail and
     * `G_IO_ERROR_NOT_SUPPORTED` will be reported.
     */
    getValue(): [ /* returnType */ boolean, /* value */ any ]
    /**
     * Gets the formats that the provider can provide its current contents in.
     */
    refFormats(): ContentFormats
    /**
     * Gets the formats that the provider suggests other applications to store
     * the data in.
     * 
     * An example of such an application would be a clipboard manager.
     * 
     * This can be assumed to be a subset of [method`Gdk`.ContentProvider.ref_formats].
     */
    refStorableFormats(): ContentFormats
    /**
     * Asynchronously writes the contents of `provider` to `stream` in the given
     * `mime_type`.
     * 
     * When the operation is finished `callback` will be called. You must then call
     * [method`Gdk`.ContentProvider.write_mime_type_finish] to get the result
     * of the operation.
     * 
     * The given mime type does not need to be listed in the formats returned by
     * [method`Gdk`.ContentProvider.ref_formats]. However, if the given `GType` is
     * not supported, `G_IO_ERROR_NOT_SUPPORTED` will be reported.
     * 
     * The given `stream` will not be closed.
     */
    writeMimeTypeAsync(mimeType: string, stream: Gio.OutputStream, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous write operation.
     * 
     * See [method`Gdk`.ContentProvider.write_mime_type_async].
     */
    writeMimeTypeFinish(result: Gio.AsyncResult): boolean
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
    /* Signals of Gdk-4.0.Gdk.ContentProvider */
    /**
     * Emitted whenever the content provided by this provider has changed.
     */
    connect(sigName: "content-changed", callback: (() => void)): number
    on(sigName: "content-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "content-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "content-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "content-changed"): void
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
    connect(sigName: "notify::formats", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::formats", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::storable-formats", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::storable-formats", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::storable-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::storable-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::storable-formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: ContentProvider_ConstructProps)
    _init (config?: ContentProvider_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newForBytes(mimeType: string, bytes: any): ContentProvider
    static newForValue(value: any): ContentProvider
    static newUnion(providers: ContentProvider[] | null): ContentProvider
    static $gtype: GObject.Type
}
interface ContentSerializer_ConstructProps extends GObject.Object_ConstructProps {
}
class ContentSerializer {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gdk-4.0.Gdk.ContentSerializer */
    /**
     * Gets the cancellable for the current operation.
     * 
     * This is the `GCancellable` that was passed to [func`content_serialize_async]`.
     */
    getCancellable(): Gio.Cancellable | null
    /**
     * Gets the `GType` to of the object to serialize.
     */
    getGtype(): GObject.Type
    /**
     * Gets the mime type to serialize to.
     */
    getMimeType(): string
    /**
     * Gets the output stream for the current operation.
     * 
     * This is the stream that was passed to [func`content_serialize_async]`.
     */
    getOutputStream(): Gio.OutputStream
    /**
     * Gets the I/O priority for the current operation.
     * 
     * This is the priority that was passed to [func`content_serialize_async]`.
     */
    getPriority(): number
    /**
     * Gets the data that was associated with the current operation.
     * 
     * See [method`Gdk`.ContentSerializer.set_task_data].
     */
    getTaskData(): object | null
    /**
     * Gets the user data that was passed when the serializer was registered.
     */
    getUserData(): object | null
    /**
     * Gets the `GValue` to read the object to serialize from.
     */
    getValue(): any
    /**
     * Indicate that the serialization has ended with an error.
     * 
     * This function consumes `error`.
     */
    returnError(error: GLib.Error): void
    /**
     * Indicate that the serialization has been successfully completed.
     */
    returnSuccess(): void
    /**
     * Associate data with the current serialization operation.
     */
    setTaskData(data: object | null, notify: GLib.DestroyNotify): void
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
    /* Methods of Gio-2.0.Gio.AsyncResult */
    /**
     * Gets the source object from a #GAsyncResult.
     */
    getSourceObject(): GObject.Object | null
    /**
     * Checks if `res` has the given `source_tag` (generally a function
     * pointer indicating the function `res` was created by).
     */
    isTagged(sourceTag?: object | null): boolean
    /**
     * If `res` is a #GSimpleAsyncResult, this is equivalent to
     * g_simple_async_result_propagate_error(). Otherwise it returns
     * %FALSE.
     * 
     * This can be used for legacy error handling in async *_finish()
     * wrapper functions that traditionally handled #GSimpleAsyncResult
     * error returns themselves rather than calling into the virtual method.
     * This should not be used in new code; #GAsyncResult errors that are
     * set by virtual methods should also be extracted by virtual methods,
     * to enable subclasses to chain up correctly.
     */
    legacyPropagateError(): boolean
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
    constructor (config?: ContentSerializer_ConstructProps)
    _init (config?: ContentSerializer_ConstructProps): void
    static $gtype: GObject.Type
}
class CrossingEvent {
    /* Methods of Gdk-4.0.Gdk.CrossingEvent */
    /**
     * Extracts the notify detail from a crossing event.
     */
    getDetail(): NotifyType
    /**
     * Checks if the `event` surface is the focus surface.
     */
    getFocus(): boolean
    /**
     * Extracts the crossing mode from a crossing event.
     */
    getMode(): CrossingMode
    /* Methods of Gdk-4.0.Gdk.Event */
    /**
     * Returns the relative angle from `event1` to `event2`.
     * 
     * The relative angle is the angle between the X axis and the line
     * through both events' positions. The rotation direction for positive
     * angles is from the positive X axis towards the positive Y axis.
     * 
     * This assumes that both events have X/Y information.
     * If not, this function returns %FALSE.
     */
    getAngle(event2: Event): [ /* returnType */ boolean, /* angle */ number ]
    /**
     * Returns the point halfway between the events' positions.
     * 
     * This assumes that both events have X/Y information.
     * If not, this function returns %FALSE.
     */
    getCenter(event2: Event): [ /* returnType */ boolean, /* x */ number, /* y */ number ]
    /**
     * Returns the distance between the event locations.
     * 
     * This assumes that both events have X/Y information.
     * If not, this function returns %FALSE.
     */
    getDistance(event2: Event): [ /* returnType */ boolean, /* distance */ number ]
    /**
     * Extracts all axis values from an event.
     * 
     * To find out which axes are used, use [method`Gdk`.DeviceTool.get_axes]
     * on the device tool returned by [method`Gdk`.Event.get_device_tool].
     */
    getAxes(): [ /* returnType */ boolean, /* axes */ number[] ]
    /**
     * Extract the axis value for a particular axis use from
     * an event structure.
     * 
     * To find out which axes are used, use [method`Gdk`.DeviceTool.get_axes]
     * on the device tool returned by [method`Gdk`.Event.get_device_tool].
     */
    getAxis(axisUse: AxisUse): [ /* returnType */ boolean, /* value */ number ]
    /**
     * Returns the device of an event.
     */
    getDevice(): Device | null
    /**
     * Returns a `GdkDeviceTool` representing the tool that
     * caused the event.
     * 
     * If the was not generated by a device that supports
     * different tools (such as a tablet), this function will
     * return %NULL.
     * 
     * Note: the `GdkDeviceTool` will be constant during
     * the application lifetime, if settings must be stored
     * persistently across runs, see [method`Gdk`.DeviceTool.get_serial].
     */
    getDeviceTool(): DeviceTool | null
    /**
     * Retrieves the display associated to the `event`.
     */
    getDisplay(): Display | null
    /**
     * Retuns the event sequence to which the event belongs.
     * 
     * Related touch events are connected in a sequence. Other
     * events typically don't have event sequence information.
     */
    getEventSequence(): EventSequence
    /**
     * Retrieves the type of the event.
     */
    getEventType(): EventType
    /**
     * Retrieves the history of the device that `event` is for, as a list of
     * time and coordinates.
     * 
     * The history includes positions that are not delivered as separate events
     * to the application because they occurred in the same frame as `event`.
     * 
     * Note that only motion and scroll events record history, and motion
     * events do it only if one of the mouse buttons is down, or the device
     * has a tool.
     */
    getHistory(): TimeCoord[] | null
    /**
     * Returns the modifier state field of an event.
     */
    getModifierState(): ModifierType
    /**
     * Returns whether this event is an 'emulated' pointer event.
     * 
     * Emulated pointer events typically originate from a touch events.
     */
    getPointerEmulated(): boolean
    /**
     * Extract the event surface relative x/y coordinates from an event.
     */
    getPosition(): [ /* returnType */ boolean, /* x */ number, /* y */ number ]
    /**
     * Returns the seat that originated the event.
     */
    getSeat(): Seat | null
    /**
     * Extracts the surface associated with an event.
     */
    getSurface(): Surface | null
    /**
     * Returns the timestamp of `event`.
     * 
     * Not all events have timestamps. In that case, this function
     * returns %GDK_CURRENT_TIME.
     */
    getTime(): number
    /**
     * Increase the ref count of `event`.
     */
    ref(): Event
    /**
     * Returns whether a `GdkEvent` should trigger a context menu,
     * according to platform conventions.
     * 
     * The right mouse button typically triggers context menus.
     * 
     * This function should always be used instead of simply checking for
     * event->button == %GDK_BUTTON_SECONDARY.
     */
    triggersContextMenu(): boolean
    /**
     * Decrease the ref count of `event`.
     * 
     * If the last reference is dropped, the structure is freed.
     */
    unref(): void
    static name: string
}
interface Cursor_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gdk-4.0.Gdk.Cursor */
    /**
     * Cursor to fall back to if this cursor cannot be displayed.
     */
    fallback?: Cursor
    /**
     * X position of the cursor hotspot in the cursor image.
     */
    hotspotX?: number
    /**
     * Y position of the cursor hotspot in the cursor image.
     */
    hotspotY?: number
    /**
     * Name of this this cursor.
     * 
     * The name will be %NULL if the cursor was created from a texture.
     */
    name?: string
    /**
     * The texture displayed by this cursor.
     * 
     * The texture will be %NULL if the cursor was created from a name.
     */
    texture?: Texture
}
class Cursor {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gdk-4.0.Gdk.Cursor */
    /**
     * Returns the fallback for this `cursor`.
     * 
     * The fallback will be used if this cursor is not available on a given
     * `GdkDisplay`. For named cursors, this can happen when using nonstandard
     * names or when using an incomplete cursor theme. For textured cursors,
     * this can happen when the texture is too large or when the `GdkDisplay`
     * it is used on does not support textured cursors.
     */
    getFallback(): Cursor | null
    /**
     * Returns the horizontal offset of the hotspot.
     * 
     * The hotspot indicates the pixel that will be directly above the cursor.
     * 
     * Note that named cursors may have a nonzero hotspot, but this function
     * will only return the hotspot position for cursors created with
     * [ctor`Gdk`.Cursor.new_from_texture].
     */
    getHotspotX(): number
    /**
     * Returns the vertical offset of the hotspot.
     * 
     * The hotspot indicates the pixel that will be directly above the cursor.
     * 
     * Note that named cursors may have a nonzero hotspot, but this function
     * will only return the hotspot position for cursors created with
     * [ctor`Gdk`.Cursor.new_from_texture].
     */
    getHotspotY(): number
    /**
     * Returns the name of the cursor.
     * 
     * If the cursor is not a named cursor, %NULL will be returned.
     */
    getName(): string | null
    /**
     * Returns the texture for the cursor.
     * 
     * If the cursor is a named cursor, %NULL will be returned.
     */
    getTexture(): Texture | null
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
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Cursor_ConstructProps)
    _init (config?: Cursor_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newFromName(name: string, fallback?: Cursor | null): Cursor
    static newFromTexture(texture: Texture, hotspotX: number, hotspotY: number, fallback?: Cursor | null): Cursor
    static $gtype: GObject.Type
}
class DNDEvent {
    /* Methods of Gdk-4.0.Gdk.DNDEvent */
    /**
     * Gets the `GdkDrop` object from a DND event.
     */
    getDrop(): Drop | null
    /* Methods of Gdk-4.0.Gdk.Event */
    /**
     * Returns the relative angle from `event1` to `event2`.
     * 
     * The relative angle is the angle between the X axis and the line
     * through both events' positions. The rotation direction for positive
     * angles is from the positive X axis towards the positive Y axis.
     * 
     * This assumes that both events have X/Y information.
     * If not, this function returns %FALSE.
     */
    getAngle(event2: Event): [ /* returnType */ boolean, /* angle */ number ]
    /**
     * Returns the point halfway between the events' positions.
     * 
     * This assumes that both events have X/Y information.
     * If not, this function returns %FALSE.
     */
    getCenter(event2: Event): [ /* returnType */ boolean, /* x */ number, /* y */ number ]
    /**
     * Returns the distance between the event locations.
     * 
     * This assumes that both events have X/Y information.
     * If not, this function returns %FALSE.
     */
    getDistance(event2: Event): [ /* returnType */ boolean, /* distance */ number ]
    /**
     * Extracts all axis values from an event.
     * 
     * To find out which axes are used, use [method`Gdk`.DeviceTool.get_axes]
     * on the device tool returned by [method`Gdk`.Event.get_device_tool].
     */
    getAxes(): [ /* returnType */ boolean, /* axes */ number[] ]
    /**
     * Extract the axis value for a particular axis use from
     * an event structure.
     * 
     * To find out which axes are used, use [method`Gdk`.DeviceTool.get_axes]
     * on the device tool returned by [method`Gdk`.Event.get_device_tool].
     */
    getAxis(axisUse: AxisUse): [ /* returnType */ boolean, /* value */ number ]
    /**
     * Returns the device of an event.
     */
    getDevice(): Device | null
    /**
     * Returns a `GdkDeviceTool` representing the tool that
     * caused the event.
     * 
     * If the was not generated by a device that supports
     * different tools (such as a tablet), this function will
     * return %NULL.
     * 
     * Note: the `GdkDeviceTool` will be constant during
     * the application lifetime, if settings must be stored
     * persistently across runs, see [method`Gdk`.DeviceTool.get_serial].
     */
    getDeviceTool(): DeviceTool | null
    /**
     * Retrieves the display associated to the `event`.
     */
    getDisplay(): Display | null
    /**
     * Retuns the event sequence to which the event belongs.
     * 
     * Related touch events are connected in a sequence. Other
     * events typically don't have event sequence information.
     */
    getEventSequence(): EventSequence
    /**
     * Retrieves the type of the event.
     */
    getEventType(): EventType
    /**
     * Retrieves the history of the device that `event` is for, as a list of
     * time and coordinates.
     * 
     * The history includes positions that are not delivered as separate events
     * to the application because they occurred in the same frame as `event`.
     * 
     * Note that only motion and scroll events record history, and motion
     * events do it only if one of the mouse buttons is down, or the device
     * has a tool.
     */
    getHistory(): TimeCoord[] | null
    /**
     * Returns the modifier state field of an event.
     */
    getModifierState(): ModifierType
    /**
     * Returns whether this event is an 'emulated' pointer event.
     * 
     * Emulated pointer events typically originate from a touch events.
     */
    getPointerEmulated(): boolean
    /**
     * Extract the event surface relative x/y coordinates from an event.
     */
    getPosition(): [ /* returnType */ boolean, /* x */ number, /* y */ number ]
    /**
     * Returns the seat that originated the event.
     */
    getSeat(): Seat | null
    /**
     * Extracts the surface associated with an event.
     */
    getSurface(): Surface | null
    /**
     * Returns the timestamp of `event`.
     * 
     * Not all events have timestamps. In that case, this function
     * returns %GDK_CURRENT_TIME.
     */
    getTime(): number
    /**
     * Increase the ref count of `event`.
     */
    ref(): Event
    /**
     * Returns whether a `GdkEvent` should trigger a context menu,
     * according to platform conventions.
     * 
     * The right mouse button typically triggers context menus.
     * 
     * This function should always be used instead of simply checking for
     * event->button == %GDK_BUTTON_SECONDARY.
     */
    triggersContextMenu(): boolean
    /**
     * Decrease the ref count of `event`.
     * 
     * If the last reference is dropped, the structure is freed.
     */
    unref(): void
    static name: string
}
class DeleteEvent {
    /* Methods of Gdk-4.0.Gdk.Event */
    /**
     * Returns the relative angle from `event1` to `event2`.
     * 
     * The relative angle is the angle between the X axis and the line
     * through both events' positions. The rotation direction for positive
     * angles is from the positive X axis towards the positive Y axis.
     * 
     * This assumes that both events have X/Y information.
     * If not, this function returns %FALSE.
     */
    getAngle(event2: Event): [ /* returnType */ boolean, /* angle */ number ]
    /**
     * Returns the point halfway between the events' positions.
     * 
     * This assumes that both events have X/Y information.
     * If not, this function returns %FALSE.
     */
    getCenter(event2: Event): [ /* returnType */ boolean, /* x */ number, /* y */ number ]
    /**
     * Returns the distance between the event locations.
     * 
     * This assumes that both events have X/Y information.
     * If not, this function returns %FALSE.
     */
    getDistance(event2: Event): [ /* returnType */ boolean, /* distance */ number ]
    /**
     * Extracts all axis values from an event.
     * 
     * To find out which axes are used, use [method`Gdk`.DeviceTool.get_axes]
     * on the device tool returned by [method`Gdk`.Event.get_device_tool].
     */
    getAxes(): [ /* returnType */ boolean, /* axes */ number[] ]
    /**
     * Extract the axis value for a particular axis use from
     * an event structure.
     * 
     * To find out which axes are used, use [method`Gdk`.DeviceTool.get_axes]
     * on the device tool returned by [method`Gdk`.Event.get_device_tool].
     */
    getAxis(axisUse: AxisUse): [ /* returnType */ boolean, /* value */ number ]
    /**
     * Returns the device of an event.
     */
    getDevice(): Device | null
    /**
     * Returns a `GdkDeviceTool` representing the tool that
     * caused the event.
     * 
     * If the was not generated by a device that supports
     * different tools (such as a tablet), this function will
     * return %NULL.
     * 
     * Note: the `GdkDeviceTool` will be constant during
     * the application lifetime, if settings must be stored
     * persistently across runs, see [method`Gdk`.DeviceTool.get_serial].
     */
    getDeviceTool(): DeviceTool | null
    /**
     * Retrieves the display associated to the `event`.
     */
    getDisplay(): Display | null
    /**
     * Retuns the event sequence to which the event belongs.
     * 
     * Related touch events are connected in a sequence. Other
     * events typically don't have event sequence information.
     */
    getEventSequence(): EventSequence
    /**
     * Retrieves the type of the event.
     */
    getEventType(): EventType
    /**
     * Retrieves the history of the device that `event` is for, as a list of
     * time and coordinates.
     * 
     * The history includes positions that are not delivered as separate events
     * to the application because they occurred in the same frame as `event`.
     * 
     * Note that only motion and scroll events record history, and motion
     * events do it only if one of the mouse buttons is down, or the device
     * has a tool.
     */
    getHistory(): TimeCoord[] | null
    /**
     * Returns the modifier state field of an event.
     */
    getModifierState(): ModifierType
    /**
     * Returns whether this event is an 'emulated' pointer event.
     * 
     * Emulated pointer events typically originate from a touch events.
     */
    getPointerEmulated(): boolean
    /**
     * Extract the event surface relative x/y coordinates from an event.
     */
    getPosition(): [ /* returnType */ boolean, /* x */ number, /* y */ number ]
    /**
     * Returns the seat that originated the event.
     */
    getSeat(): Seat | null
    /**
     * Extracts the surface associated with an event.
     */
    getSurface(): Surface | null
    /**
     * Returns the timestamp of `event`.
     * 
     * Not all events have timestamps. In that case, this function
     * returns %GDK_CURRENT_TIME.
     */
    getTime(): number
    /**
     * Increase the ref count of `event`.
     */
    ref(): Event
    /**
     * Returns whether a `GdkEvent` should trigger a context menu,
     * according to platform conventions.
     * 
     * The right mouse button typically triggers context menus.
     * 
     * This function should always be used instead of simply checking for
     * event->button == %GDK_BUTTON_SECONDARY.
     */
    triggersContextMenu(): boolean
    /**
     * Decrease the ref count of `event`.
     * 
     * If the last reference is dropped, the structure is freed.
     */
    unref(): void
    static name: string
}
interface Device_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gdk-4.0.Gdk.Device */
    /**
     * The `GdkDisplay` the `GdkDevice` pertains to.
     */
    display?: Display
    /**
     * Whether the device is represented by a cursor on the screen.
     */
    hasCursor?: boolean
    /**
     * The device name.
     */
    name?: string
    /**
     * The maximal number of concurrent touches on a touch device.
     * 
     * Will be 0 if the device is not a touch device or if the number
     * of touches is unknown.
     */
    numTouches?: number
    /**
     * Product ID of this device.
     * 
     * See [method`Gdk`.Device.get_product_id].
     */
    productId?: string
    /**
     * `GdkSeat` of this device.
     */
    seat?: Seat
    /**
     * Source type for the device.
     */
    source?: InputSource
    /**
     * Vendor ID of this device.
     * 
     * See [method`Gdk`.Device.get_vendor_id].
     */
    vendorId?: string
}
class Device {
    /* Properties of Gdk-4.0.Gdk.Device */
    /**
     * Whether Caps Lock is on.
     * 
     * This is only relevant for keyboard devices.
     */
    readonly capsLockState: boolean
    /**
     * The direction of the current layout.
     * 
     * This is only relevant for keyboard devices.
     */
    readonly direction: Pango.Direction
    /**
     * Whether the device has both right-to-left and left-to-right layouts.
     * 
     * This is only relevant for keyboard devices.
     */
    readonly hasBidiLayouts: boolean
    /**
     * The current modifier state of the device.
     * 
     * This is only relevant for keyboard devices.
     */
    readonly modifierState: ModifierType
    /**
     * Number of axes in the device.
     */
    readonly nAxes: number
    /**
     * Whether Num Lock is on.
     * 
     * This is only relevant for keyboard devices.
     */
    readonly numLockState: boolean
    /**
     * Whether Scroll Lock is on.
     * 
     * This is only relevant for keyboard devices.
     */
    readonly scrollLockState: boolean
    /**
     * `GdkSeat` of this device.
     */
    seat: Seat
    /**
     * The `GdkDeviceTool` that is currently used with this device.
     */
    readonly tool: DeviceTool
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gdk-4.0.Gdk.Device */
    /**
     * Retrieves whether the Caps Lock modifier of the keyboard is locked.
     * 
     * This is only relevant for keyboard devices.
     */
    getCapsLockState(): boolean
    /**
     * Retrieves the current tool for `device`.
     */
    getDeviceTool(): DeviceTool | null
    /**
     * Returns the direction of effective layout of the keyboard.
     * 
     * This is only relevant for keyboard devices.
     * 
     * The direction of a layout is the direction of the majority
     * of its symbols. See [func`Pango`.unichar_direction].
     */
    getDirection(): Pango.Direction
    /**
     * Returns the `GdkDisplay` to which `device` pertains.
     */
    getDisplay(): Display
    /**
     * Determines whether the pointer follows device motion.
     * 
     * This is not meaningful for keyboard devices, which
     * don't have a pointer.
     */
    getHasCursor(): boolean
    /**
     * Retrieves the current modifier state of the keyboard.
     * 
     * This is only relevant for keyboard devices.
     */
    getModifierState(): ModifierType
    /**
     * The name of the device, suitable for showing in a user interface.
     */
    getName(): string
    /**
     * Retrieves whether the Num Lock modifier of the keyboard is locked.
     * 
     * This is only relevant for keyboard devices.
     */
    getNumLockState(): boolean
    /**
     * Retrieves the number of touch points associated to `device`.
     */
    getNumTouches(): number
    /**
     * Returns the product ID of this device.
     * 
     * This ID is retrieved from the device, and does not change.
     * See [method`Gdk`.Device.get_vendor_id] for more information.
     */
    getProductId(): string | null
    /**
     * Retrieves whether the Scroll Lock modifier of the keyboard is locked.
     * 
     * This is only relevant for keyboard devices.
     */
    getScrollLockState(): boolean
    /**
     * Returns the `GdkSeat` the device belongs to.
     */
    getSeat(): Seat
    /**
     * Determines the type of the device.
     */
    getSource(): InputSource
    /**
     * Obtains the surface underneath `device,` returning the location of the
     * device in `win_x` and `win_y`.
     * 
     * Returns %NULL if the surface tree under `device` is not known to GDK
     * (for example, belongs to another application).
     */
    getSurfaceAtPosition(): [ /* returnType */ Surface | null, /* winX */ number | null, /* winY */ number | null ]
    /**
     * Returns the timestamp of the last activity for this device.
     * 
     * In practice, this means the timestamp of the last event that was
     * received from the OS for this device. (GTK may occasionally produce
     * events for a device that are not received from the OS, and will not
     * update the timestamp).
     */
    getTimestamp(): number
    /**
     * Returns the vendor ID of this device.
     * 
     * This ID is retrieved from the device, and does not change.
     * 
     * This function, together with [method`Gdk`.Device.get_product_id],
     * can be used to eg. compose `GSettings` paths to store settings
     * for this device.
     * 
     * ```c
     *  static GSettings *
     *  get_device_settings (GdkDevice *device)
     *  {
     *    const char *vendor, *product;
     *    GSettings *settings;
     *    GdkDevice *device;
     *    char *path;
     * 
     *    vendor = gdk_device_get_vendor_id (device);
     *    product = gdk_device_get_product_id (device);
     * 
     *    path = g_strdup_printf ("/org/example/app/devices/%s:%s/", vendor, product);
     *    settings = g_settings_new_with_path (DEVICE_SCHEMA, path);
     *    g_free (path);
     * 
     *    return settings;
     *  }
     * ```
     */
    getVendorId(): string | null
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
    /* Signals of Gdk-4.0.Gdk.Device */
    /**
     * Emitted either when the number of either axes or keys changes.
     * 
     * On X11 this will normally happen when the physical device
     * routing events through the logical device changes (for
     * example, user switches from the USB mouse to a tablet); in
     * that case the logical device will change to reflect the axes
     * and keys on the new physical device.
     */
    connect(sigName: "changed", callback: (() => void)): number
    on(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "changed"): void
    /**
     * Emitted on pen/eraser devices whenever tools enter or leave proximity.
     */
    connect(sigName: "tool-changed", callback: ((tool: DeviceTool) => void)): number
    on(sigName: "tool-changed", callback: (tool: DeviceTool) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "tool-changed", callback: (tool: DeviceTool) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "tool-changed", callback: (tool: DeviceTool) => void): NodeJS.EventEmitter
    emit(sigName: "tool-changed", tool: DeviceTool): void
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
    connect(sigName: "notify::caps-lock-state", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::caps-lock-state", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::caps-lock-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::caps-lock-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::caps-lock-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::direction", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::direction", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::direction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::direction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::direction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::has-bidi-layouts", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-bidi-layouts", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::has-bidi-layouts", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::has-bidi-layouts", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::has-bidi-layouts", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::modifier-state", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modifier-state", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::modifier-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::modifier-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::modifier-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::n-axes", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::n-axes", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::n-axes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::n-axes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::n-axes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::num-lock-state", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::num-lock-state", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::num-lock-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::num-lock-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::num-lock-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scroll-lock-state", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scroll-lock-state", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scroll-lock-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scroll-lock-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scroll-lock-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::seat", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::seat", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::seat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::seat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::seat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::tool", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tool", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::tool", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::tool", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::tool", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    static $gtype: GObject.Type
}
interface DeviceTool_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gdk-4.0.Gdk.DeviceTool */
    /**
     * The axes of the tool.
     */
    axes?: AxisFlags
    /**
     * The hardware ID of the tool.
     */
    hardwareId?: number
    /**
     * The serial number of the tool.
     */
    serial?: number
    /**
     * The type of the tool.
     */
    toolType?: DeviceToolType
}
class DeviceTool {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gdk-4.0.Gdk.DeviceTool */
    /**
     * Gets the axes of the tool.
     */
    getAxes(): AxisFlags
    /**
     * Gets the hardware ID of this tool, or 0 if it's not known.
     * 
     * When non-zero, the identificator is unique for the given tool model,
     * meaning that two identical tools will share the same `hardware_id,`
     * but will have different serial numbers (see
     * [method`Gdk`.DeviceTool.get_serial]).
     * 
     * This is a more concrete (and device specific) method to identify
     * a `GdkDeviceTool` than [method`Gdk`.DeviceTool.get_tool_type],
     * as a tablet may support multiple devices with the same
     * `GdkDeviceToolType`, but different hardware identificators.
     */
    getHardwareId(): number
    /**
     * Gets the serial number of this tool.
     * 
     * This value can be used to identify a physical tool
     * (eg. a tablet pen) across program executions.
     */
    getSerial(): number
    /**
     * Gets the `GdkDeviceToolType` of the tool.
     */
    getToolType(): DeviceToolType
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
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DeviceTool_ConstructProps)
    _init (config?: DeviceTool_ConstructProps): void
    static $gtype: GObject.Type
}
interface Display_ConstructProps extends GObject.Object_ConstructProps {
}
class Display {
    /* Properties of Gdk-4.0.Gdk.Display */
    /**
     * %TRUE if the display properly composites the alpha channel.
     */
    readonly composited: boolean
    /**
     * %TRUE if the display supports input shapes.
     */
    readonly inputShapes: boolean
    /**
     * %TRUE if the display supports an alpha channel.
     */
    readonly rgba: boolean
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gdk-4.0.Gdk.Display */
    /**
     * Emits a short beep on `display`
     */
    beep(): void
    /**
     * Closes the connection to the windowing system for the given display.
     * 
     * This cleans up associated resources.
     */
    close(): void
    /**
     * Creates a new `GdkGLContext` for the `GdkDisplay`.
     * 
     * The context is disconnected from any particular surface or surface
     * and cannot be used to draw to any surface. It can only be used to
     * draw to non-surface framebuffers like textures.
     * 
     * If the creation of the `GdkGLContext` failed, `error` will be set.
     * Before using the returned `GdkGLContext`, you will need to
     * call [method`Gdk`.GLContext.make_current] or [method`Gdk`.GLContext.realize].
     */
    createGlContext(): GLContext
    /**
     * Returns %TRUE if there is an ongoing grab on `device` for `display`.
     */
    deviceIsGrabbed(device: Device): boolean
    /**
     * Flushes any requests queued for the windowing system.
     * 
     * This happens automatically when the main loop blocks waiting for new events,
     * but if your application is drawing without returning control to the main loop,
     * you may need to call this function explicitly. A common case where this function
     * needs to be called is when an application is executing drawing commands
     * from a thread other than the thread where the main loop is running.
     * 
     * This is most useful for X11. On windowing systems where requests are
     * handled synchronously, this function will do nothing.
     */
    flush(): void
    /**
     * Returns a `GdkAppLaunchContext` suitable for launching
     * applications on the given display.
     */
    getAppLaunchContext(): AppLaunchContext
    /**
     * Gets the clipboard used for copy/paste operations.
     */
    getClipboard(): Clipboard
    /**
     * Returns the default `GdkSeat` for this display.
     * 
     * Note that a display may not have a seat. In this case,
     * this function will return %NULL.
     */
    getDefaultSeat(): Seat | null
    /**
     * Gets the monitor in which the largest area of `surface`
     * resides.
     * 
     * Returns a monitor close to `surface` if it is outside
     * of all monitors.
     */
    getMonitorAtSurface(surface: Surface): Monitor
    /**
     * Gets the list of monitors associated with this display.
     * 
     * Subsequent calls to this function will always return the
     * same list for the same display.
     * 
     * You can listen to the GListModel::items-changed signal on
     * this list to monitor changes to the monitor of this display.
     */
    getMonitors(): Gio.ListModel
    /**
     * Gets the name of the display.
     */
    getName(): string
    /**
     * Gets the clipboard used for the primary selection.
     * 
     * On backends where the primary clipboard is not supported natively,
     * GDK emulates this clipboard locally.
     */
    getPrimaryClipboard(): Clipboard
    /**
     * Retrieves a desktop-wide setting such as double-click time
     * for the `display`.
     */
    getSetting(name: string, value: any): boolean
    /**
     * Gets the startup notification ID for a Wayland display, or %NULL
     * if no ID has been defined.
     */
    getStartupNotificationId(): string | null
    /**
     * Finds out if the display has been closed.
     */
    isClosed(): boolean
    /**
     * Returns whether surfaces can reasonably be expected to have
     * their alpha channel drawn correctly on the screen.
     * 
     * Check [method`Gdk`.Display.is_rgba] for whether the display
     * supports an alpha channel.
     * 
     * On X11 this function returns whether a compositing manager is
     * compositing on `display`.
     * 
     * On modern displays, this value is always %TRUE.
     */
    isComposited(): boolean
    /**
     * Returns whether surfaces on this `display` are created with an
     * alpha channel.
     * 
     * Even if a %TRUE is returned, it is possible that the
     * surface’s alpha channel won’t be honored when displaying the
     * surface on the screen: in particular, for X an appropriate
     * windowing manager and compositing manager must be running to
     * provide appropriate display. Use [method`Gdk`.Display.is_composited]
     * to check if that is the case.
     * 
     * On modern displays, this value is always %TRUE.
     */
    isRgba(): boolean
    /**
     * Returns the list of seats known to `display`.
     */
    listSeats(): Seat[]
    /**
     * Returns the keyvals bound to `keycode`.
     * 
     * The Nth `GdkKeymapKey` in `keys` is bound to the Nth keyval in `keyvals`.
     * 
     * When a keycode is pressed by the user, the keyval from
     * this list of entries is selected by considering the effective
     * keyboard group and level.
     * 
     * Free the returned arrays with g_free().
     */
    mapKeycode(keycode: number): [ /* returnType */ boolean, /* keys */ KeymapKey[] | null, /* keyvals */ number[] | null ]
    /**
     * Obtains a list of keycode/group/level combinations that will
     * generate `keyval`.
     * 
     * Groups and levels are two kinds of keyboard mode; in general, the level
     * determines whether the top or bottom symbol on a key is used, and the
     * group determines whether the left or right symbol is used.
     * 
     * On US keyboards, the shift key changes the keyboard level, and there
     * are no groups. A group switch key might convert a keyboard between
     * Hebrew to English modes, for example.
     * 
     * `GdkEventKey` contains a %group field that indicates the active
     * keyboard group. The level is computed from the modifier mask.
     * 
     * The returned array should be freed with g_free().
     */
    mapKeyval(keyval: number): [ /* returnType */ boolean, /* keys */ KeymapKey[] ]
    /**
     * Indicates to the GUI environment that the application has
     * finished loading, using a given identifier.
     * 
     * GTK will call this function automatically for [class`Gtk`.Window]
     * with custom startup-notification identifier unless
     * [method`Gtk`.Window.set_auto_startup_notification]
     * is called to disable that feature.
     */
    notifyStartupComplete(startupId: string): void
    /**
     * Checks that OpenGL is available for `self` and ensures that it is
     * properly initialized.
     * When this fails, an `error` will be set describing the error and this
     * function returns %FALSE.
     * 
     * Note that even if this function succeeds, creating a `GdkGLContext`
     * may still fail.
     * 
     * This function is idempotent. Calling it multiple times will just
     * return the same value or error.
     * 
     * You never need to call this function, GDK will call it automatically
     * as needed. But you can use it as a check when setting up code that
     * might make use of OpenGL.
     */
    prepareGl(): boolean
    /**
     * Appends the given event onto the front of the event
     * queue for `display`.
     * 
     * This function is only useful in very special situations
     * and should not be used by applications.
     */
    putEvent(event: Event): void
    /**
     * Returns %TRUE if the display supports input shapes.
     * 
     * This means that [method`Gdk`.Surface.set_input_region] can
     * be used to modify the input shape of surfaces on `display`.
     * 
     * On modern displays, this value is always %TRUE.
     */
    supportsInputShapes(): boolean
    /**
     * Flushes any requests queued for the windowing system and waits until all
     * requests have been handled.
     * 
     * This is often used for making sure that the display is synchronized
     * with the current state of the program. Calling [method`Gdk`.Display.sync]
     * before [method`GdkX1`1.Display.error_trap_pop] makes sure that any errors
     * generated from earlier requests are handled before the error trap is removed.
     * 
     * This is most useful for X11. On windowing systems where requests are
     * handled synchronously, this function will do nothing.
     */
    sync(): void
    /**
     * Translates the contents of a `GdkEventKey` into a keyval, effective group,
     * and level.
     * 
     * Modifiers that affected the translation and are thus unavailable for
     * application use are returned in `consumed_modifiers`.
     * 
     * The `effective_group` is the group that was actually used for the
     * translation; some keys such as Enter are not affected by the active
     * keyboard group. The `level` is derived from `state`.
     * 
     * `consumed_modifiers` gives modifiers that should be masked out
     * from `state` when comparing this key press to a keyboard shortcut.
     * For instance, on a US keyboard, the `plus` symbol is shifted, so
     * when comparing a key press to a `<Control>plus` accelerator `<Shift>`
     * should be masked out.
     * 
     * This function should rarely be needed, since `GdkEventKey` already
     * contains the translated keyval. It is exported for the benefit of
     * virtualized test environments.
     */
    translateKey(keycode: number, state: ModifierType, group: number): [ /* returnType */ boolean, /* keyval */ number | null, /* effectiveGroup */ number | null, /* level */ number | null, /* consumed */ ModifierType | null ]
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
    /* Signals of Gdk-4.0.Gdk.Display */
    /**
     * Emitted when the connection to the windowing system for `display` is closed.
     */
    connect(sigName: "closed", callback: ((isError: boolean) => void)): number
    on(sigName: "closed", callback: (isError: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "closed", callback: (isError: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "closed", callback: (isError: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "closed", isError: boolean): void
    /**
     * Emitted when the connection to the windowing system for `display` is opened.
     */
    connect(sigName: "opened", callback: (() => void)): number
    on(sigName: "opened", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "opened", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "opened", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "opened"): void
    /**
     * Emitted whenever a new seat is made known to the windowing system.
     */
    connect(sigName: "seat-added", callback: ((seat: Seat) => void)): number
    on(sigName: "seat-added", callback: (seat: Seat) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "seat-added", callback: (seat: Seat) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "seat-added", callback: (seat: Seat) => void): NodeJS.EventEmitter
    emit(sigName: "seat-added", seat: Seat): void
    /**
     * Emitted whenever a seat is removed by the windowing system.
     */
    connect(sigName: "seat-removed", callback: ((seat: Seat) => void)): number
    on(sigName: "seat-removed", callback: (seat: Seat) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "seat-removed", callback: (seat: Seat) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "seat-removed", callback: (seat: Seat) => void): NodeJS.EventEmitter
    emit(sigName: "seat-removed", seat: Seat): void
    /**
     * Emitted whenever a setting changes its value.
     */
    connect(sigName: "setting-changed", callback: ((setting: string) => void)): number
    on(sigName: "setting-changed", callback: (setting: string) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "setting-changed", callback: (setting: string) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "setting-changed", callback: (setting: string) => void): NodeJS.EventEmitter
    emit(sigName: "setting-changed", setting: string): void
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
    connect(sigName: "notify::composited", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composited", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::composited", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::composited", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::composited", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::input-shapes", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-shapes", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::input-shapes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::input-shapes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::input-shapes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rgba", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Display_ConstructProps)
    _init (config?: Display_ConstructProps): void
    /* Static methods and pseudo-constructors */
    /**
     * Gets the default `GdkDisplay`.
     * 
     * This is a convenience function for:
     * 
     *     gdk_display_manager_get_default_display (gdk_display_manager_get ())
     */
    static getDefault(): Display | null
    /**
     * Opens a display.
     * 
     * If opening the display fails, `NULL` is returned.
     */
    static open(displayName: string): Display | null
    static $gtype: GObject.Type
}
interface DisplayManager_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gdk-4.0.Gdk.DisplayManager */
    /**
     * The default display.
     */
    defaultDisplay?: Display
}
class DisplayManager {
    /* Properties of Gdk-4.0.Gdk.DisplayManager */
    /**
     * The default display.
     */
    defaultDisplay: Display
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gdk-4.0.Gdk.DisplayManager */
    /**
     * Gets the default `GdkDisplay`.
     */
    getDefaultDisplay(): Display | null
    /**
     * List all currently open displays.
     */
    listDisplays(): Display[]
    /**
     * Opens a display.
     */
    openDisplay(name: string): Display | null
    /**
     * Sets `display` as the default display.
     */
    setDefaultDisplay(display: Display): void
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
    /* Signals of Gdk-4.0.Gdk.DisplayManager */
    /**
     * Emitted when a display is opened.
     */
    connect(sigName: "display-opened", callback: ((display: Display) => void)): number
    on(sigName: "display-opened", callback: (display: Display) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "display-opened", callback: (display: Display) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "display-opened", callback: (display: Display) => void): NodeJS.EventEmitter
    emit(sigName: "display-opened", display: Display): void
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
    connect(sigName: "notify::default-display", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::default-display", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::default-display", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::default-display", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::default-display", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DisplayManager_ConstructProps)
    _init (config?: DisplayManager_ConstructProps): void
    /* Static methods and pseudo-constructors */
    /**
     * Gets the singleton `GdkDisplayManager` object.
     * 
     * When called for the first time, this function consults the
     * `GDK_BACKEND` environment variable to find out which of the
     * supported GDK backends to use (in case GDK has been compiled
     * with multiple backends).
     * 
     * Applications can use [func`set_allowed_backends]` to limit what
     * backends wil be used.
     */
    static get(): DisplayManager
    static $gtype: GObject.Type
}
interface Drag_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gdk-4.0.Gdk.Drag */
    /**
     * The possible actions of this drag.
     */
    actions?: DragAction
    /**
     * The `GdkContentProvider`.
     */
    content?: ContentProvider
    /**
     * The `GdkDevice` that is performing the drag.
     */
    device?: Device
    /**
     * The possible formats that the drag can provide its data in.
     */
    formats?: ContentFormats
    /**
     * The currently selected action of the drag.
     */
    selectedAction?: DragAction
    /**
     * The surface where the drag originates.
     */
    surface?: Surface
}
class Drag {
    /* Properties of Gdk-4.0.Gdk.Drag */
    /**
     * The possible actions of this drag.
     */
    actions: DragAction
    /**
     * The `GdkDisplay` that the drag belongs to.
     */
    readonly display: Display
    /**
     * The currently selected action of the drag.
     */
    selectedAction: DragAction
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gdk-4.0.Gdk.Drag */
    /**
     * Informs GDK that the drop ended.
     * 
     * Passing %FALSE for `success` may trigger a drag cancellation
     * animation.
     * 
     * This function is called by the drag source, and should be the
     * last call before dropping the reference to the `drag`.
     * 
     * The `GdkDrag` will only take the first [method`Gdk`.Drag.drop_done]
     * call as effective, if this function is called multiple times,
     * all subsequent calls will be ignored.
     */
    dropDone(success: boolean): void
    /**
     * Determines the bitmask of possible actions proposed by the source.
     */
    getActions(): DragAction
    /**
     * Returns the `GdkContentProvider` associated to the `GdkDrag` object.
     */
    getContent(): ContentProvider
    /**
     * Returns the `GdkDevice` associated to the `GdkDrag` object.
     */
    getDevice(): Device
    /**
     * Gets the `GdkDisplay` that the drag object was created for.
     */
    getDisplay(): Display
    /**
     * Returns the surface on which the drag icon should be rendered
     * during the drag operation.
     * 
     * Note that the surface may not be available until the drag operation
     * has begun. GDK will move the surface in accordance with the ongoing
     * drag operation. The surface is owned by `drag` and will be destroyed
     * when the drag operation is over.
     */
    getDragSurface(): Surface | null
    /**
     * Retrieves the formats supported by this `GdkDrag` object.
     */
    getFormats(): ContentFormats
    /**
     * Determines the action chosen by the drag destination.
     */
    getSelectedAction(): DragAction
    /**
     * Returns the `GdkSurface` where the drag originates.
     */
    getSurface(): Surface
    /**
     * Sets the position of the drag surface that will be kept
     * under the cursor hotspot.
     * 
     * Initially, the hotspot is at the top left corner of the drag surface.
     */
    setHotspot(hotX: number, hotY: number): void
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
    /* Signals of Gdk-4.0.Gdk.Drag */
    /**
     * Emitted when the drag operation is cancelled.
     */
    connect(sigName: "cancel", callback: ((reason: DragCancelReason) => void)): number
    on(sigName: "cancel", callback: (reason: DragCancelReason) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cancel", callback: (reason: DragCancelReason) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cancel", callback: (reason: DragCancelReason) => void): NodeJS.EventEmitter
    emit(sigName: "cancel", reason: DragCancelReason): void
    /**
     * Emitted when the destination side has finished reading all data.
     * 
     * The drag object can now free all miscellaneous data.
     */
    connect(sigName: "dnd-finished", callback: (() => void)): number
    on(sigName: "dnd-finished", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "dnd-finished", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "dnd-finished", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "dnd-finished"): void
    /**
     * Emitted when the drop operation is performed on an accepting client.
     */
    connect(sigName: "drop-performed", callback: (() => void)): number
    on(sigName: "drop-performed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drop-performed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drop-performed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "drop-performed"): void
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
    connect(sigName: "notify::actions", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actions", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::actions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::actions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::actions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::display", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::display", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::display", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::display", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::selected-action", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selected-action", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::selected-action", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::selected-action", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::selected-action", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Drag_ConstructProps)
    _init (config?: Drag_ConstructProps): void
    /* Static methods and pseudo-constructors */
    /**
     * Starts a drag and creates a new drag context for it.
     * 
     * This function is called by the drag source. After this call, you
     * probably want to set up the drag icon using the surface returned
     * by [method`Gdk`.Drag.get_drag_surface].
     * 
     * This function returns a reference to the [class`Gdk`.Drag] object,
     * but GTK keeps its own reference as well, as long as the DND operation
     * is going on.
     * 
     * Note: if `actions` include %GDK_ACTION_MOVE, you need to listen for
     * the [signal`Gdk`.Drag::dnd-finished] signal and delete the data at
     * the source if [method`Gdk`.Drag.get_selected_action] returns
     * %GDK_ACTION_MOVE.
     */
    static begin(surface: Surface, device: Device, content: ContentProvider, actions: DragAction, dx: number, dy: number): Drag | null
    static $gtype: GObject.Type
}
interface DrawContext_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gdk-4.0.Gdk.DrawContext */
    /**
     * The `GdkDisplay` used to create the `GdkDrawContext`.
     */
    display?: Display
    /**
     * The `GdkSurface` the context is bound to.
     */
    surface?: Surface
}
class DrawContext {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gdk-4.0.Gdk.DrawContext */
    /**
     * Indicates that you are beginning the process of redrawing `region`
     * on the `context'`s surface.
     * 
     * Calling this function begins a drawing operation using `context` on the
     * surface that `context` was created from. The actual requirements and
     * guarantees for the drawing operation vary for different implementations
     * of drawing, so a [class`Gdk`.CairoContext] and a [class`Gdk`.GLContext]
     * need to be treated differently.
     * 
     * A call to this function is a requirement for drawing and must be
     * followed by a call to [method`Gdk`.DrawContext.end_frame], which will
     * complete the drawing operation and ensure the contents become visible
     * on screen.
     * 
     * Note that the `region` passed to this function is the minimum region that
     * needs to be drawn and depending on implementation, windowing system and
     * hardware in use, it might be necessary to draw a larger region. Drawing
     * implementation must use [method`Gdk`.DrawContext.get_frame_region] to
     * query the region that must be drawn.
     * 
     * When using GTK, the widget system automatically places calls to
     * gdk_draw_context_begin_frame() and gdk_draw_context_end_frame() via the
     * use of [class`Gsk`.Renderer]s, so application code does not need to call
     * these functions explicitly.
     */
    beginFrame(region: cairo.Region): void
    /**
     * Ends a drawing operation started with gdk_draw_context_begin_frame().
     * 
     * This makes the drawing available on screen.
     * See [method`Gdk`.DrawContext.begin_frame] for more details about drawing.
     * 
     * When using a [class`Gdk`.GLContext], this function may call `glFlush()`
     * implicitly before returning; it is not recommended to call `glFlush()`
     * explicitly before calling this function.
     */
    endFrame(): void
    /**
     * Retrieves the `GdkDisplay` the `context` is created for
     */
    getDisplay(): Display | null
    /**
     * Retrieves the region that is currently being repainted.
     * 
     * After a call to [method`Gdk`.DrawContext.begin_frame] this function will
     * return a union of the region passed to that function and the area of the
     * surface that the `context` determined needs to be repainted.
     * 
     * If `context` is not in between calls to [method`Gdk`.DrawContext.begin_frame]
     * and [method`Gdk`.DrawContext.end_frame], %NULL will be returned.
     */
    getFrameRegion(): cairo.Region | null
    /**
     * Retrieves the surface that `context` is bound to.
     */
    getSurface(): Surface | null
    /**
     * Returns %TRUE if `context` is in the process of drawing to its surface.
     * 
     * This is the case between calls to [method`Gdk`.DrawContext.begin_frame]
     * and [method`Gdk`.DrawContext.end_frame]. In this situation, drawing commands
     * may be effecting the contents of the `context'`s surface.
     */
    isInFrame(): boolean
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
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: DrawContext_ConstructProps)
    _init (config?: DrawContext_ConstructProps): void
    static $gtype: GObject.Type
}
interface Drop_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gdk-4.0.Gdk.Drop */
    /**
     * The possible actions for this drop
     */
    actions?: DragAction
    /**
     * The `GdkDevice` performing the drop
     */
    device?: Device
    /**
     * The `GdkDrag` that initiated this drop
     */
    drag?: Drag
    /**
     * The possible formats that the drop can provide its data in.
     */
    formats?: ContentFormats
    /**
     * The `GdkSurface` the drop happens on
     */
    surface?: Surface
}
class Drop {
    /* Properties of Gdk-4.0.Gdk.Drop */
    /**
     * The `GdkDisplay` that the drop belongs to.
     */
    readonly display: Display
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gdk-4.0.Gdk.Drop */
    /**
     * Ends the drag operation after a drop.
     * 
     * The `action` must be a single action selected from the actions
     * available via [method`Gdk`.Drop.get_actions].
     */
    finish(action: DragAction): void
    /**
     * Returns the possible actions for this `GdkDrop`.
     * 
     * If this value contains multiple actions - i.e.
     * [func`Gdk`.DragAction.is_unique] returns %FALSE for the result -
     * [method`Gdk`.Drop.finish] must choose the action to use when
     * accepting the drop. This will only happen if you passed
     * %GDK_ACTION_ASK as one of the possible actions in
     * [method`Gdk`.Drop.status]. %GDK_ACTION_ASK itself will not
     * be included in the actions returned by this function.
     * 
     * This value may change over the lifetime of the [class`Gdk`.Drop]
     * both as a response to source side actions as well as to calls to
     * [method`Gdk`.Drop.status] or [method`Gdk`.Drop.finish]. The source
     * side will not change this value anymore once a drop has started.
     */
    getActions(): DragAction
    /**
     * Returns the `GdkDevice` performing the drop.
     */
    getDevice(): Device
    /**
     * Gets the `GdkDisplay` that `self` was created for.
     */
    getDisplay(): Display
    /**
     * If this is an in-app drag-and-drop operation, returns the `GdkDrag`
     * that corresponds to this drop.
     * 
     * If it is not, %NULL is returned.
     */
    getDrag(): Drag | null
    /**
     * Returns the `GdkContentFormats` that the drop offers the data
     * to be read in.
     */
    getFormats(): ContentFormats
    /**
     * Returns the `GdkSurface` performing the drop.
     */
    getSurface(): Surface
    /**
     * Asynchronously read the dropped data from a `GdkDrop`
     * in a format that complies with one of the mime types.
     */
    readAsync(mimeTypes: string[], ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an async drop read operation.
     * 
     * Note that you must not use blocking read calls on the returned stream
     * in the GTK thread, since some platforms might require communication with
     * GTK to complete the data transfer. You can use async APIs such as
     * g_input_stream_read_bytes_async().
     * 
     * See [method`Gdk`.Drop.read_async].
     */
    readFinish(result: Gio.AsyncResult): [ /* returnType */ Gio.InputStream | null, /* outMimeType */ string ]
    /**
     * Asynchronously request the drag operation's contents converted
     * to the given `type`.
     * 
     * When the operation is finished `callback` will be called. You must
     * then call [method`Gdk`.Drop.read_value_finish] to get the resulting
     * `GValue`.
     * 
     * For local drag-and-drop operations that are available in the given
     * `GType`, the value will be copied directly. Otherwise, GDK will
     * try to use [func`Gdk`.content_deserialize_async] to convert the data.
     */
    readValueAsync(type: GObject.Type, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an async drop read.
     * 
     * See [method`Gdk`.Drop.read_value_async].
     */
    readValueFinish(result: Gio.AsyncResult): any
    /**
     * Selects all actions that are potentially supported by the destination.
     * 
     * When calling this function, do not restrict the passed in actions to
     * the ones provided by [method`Gdk`.Drop.get_actions]. Those actions may
     * change in the future, even depending on the actions you provide here.
     * 
     * The `preferred` action is a hint to the drag-and-drop mechanism about which
     * action to use when multiple actions are possible.
     * 
     * This function should be called by drag destinations in response to
     * %GDK_DRAG_ENTER or %GDK_DRAG_MOTION events. If the destination does
     * not yet know the exact actions it supports, it should set any possible
     * actions first and then later call this function again.
     */
    status(actions: DragAction, preferred: DragAction): void
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
    connect(sigName: "notify::display", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::display", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::display", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::display", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Drop_ConstructProps)
    _init (config?: Drop_ConstructProps): void
    static $gtype: GObject.Type
}
class Event {
    /* Methods of Gdk-4.0.Gdk.Event */
    /**
     * Returns the relative angle from `event1` to `event2`.
     * 
     * The relative angle is the angle between the X axis and the line
     * through both events' positions. The rotation direction for positive
     * angles is from the positive X axis towards the positive Y axis.
     * 
     * This assumes that both events have X/Y information.
     * If not, this function returns %FALSE.
     */
    getAngle(event2: Event): [ /* returnType */ boolean, /* angle */ number ]
    /**
     * Returns the point halfway between the events' positions.
     * 
     * This assumes that both events have X/Y information.
     * If not, this function returns %FALSE.
     */
    getCenter(event2: Event): [ /* returnType */ boolean, /* x */ number, /* y */ number ]
    /**
     * Returns the distance between the event locations.
     * 
     * This assumes that both events have X/Y information.
     * If not, this function returns %FALSE.
     */
    getDistance(event2: Event): [ /* returnType */ boolean, /* distance */ number ]
    /**
     * Extracts all axis values from an event.
     * 
     * To find out which axes are used, use [method`Gdk`.DeviceTool.get_axes]
     * on the device tool returned by [method`Gdk`.Event.get_device_tool].
     */
    getAxes(): [ /* returnType */ boolean, /* axes */ number[] ]
    /**
     * Extract the axis value for a particular axis use from
     * an event structure.
     * 
     * To find out which axes are used, use [method`Gdk`.DeviceTool.get_axes]
     * on the device tool returned by [method`Gdk`.Event.get_device_tool].
     */
    getAxis(axisUse: AxisUse): [ /* returnType */ boolean, /* value */ number ]
    /**
     * Returns the device of an event.
     */
    getDevice(): Device | null
    /**
     * Returns a `GdkDeviceTool` representing the tool that
     * caused the event.
     * 
     * If the was not generated by a device that supports
     * different tools (such as a tablet), this function will
     * return %NULL.
     * 
     * Note: the `GdkDeviceTool` will be constant during
     * the application lifetime, if settings must be stored
     * persistently across runs, see [method`Gdk`.DeviceTool.get_serial].
     */
    getDeviceTool(): DeviceTool | null
    /**
     * Retrieves the display associated to the `event`.
     */
    getDisplay(): Display | null
    /**
     * Retuns the event sequence to which the event belongs.
     * 
     * Related touch events are connected in a sequence. Other
     * events typically don't have event sequence information.
     */
    getEventSequence(): EventSequence
    /**
     * Retrieves the type of the event.
     */
    getEventType(): EventType
    /**
     * Retrieves the history of the device that `event` is for, as a list of
     * time and coordinates.
     * 
     * The history includes positions that are not delivered as separate events
     * to the application because they occurred in the same frame as `event`.
     * 
     * Note that only motion and scroll events record history, and motion
     * events do it only if one of the mouse buttons is down, or the device
     * has a tool.
     */
    getHistory(): TimeCoord[] | null
    /**
     * Returns the modifier state field of an event.
     */
    getModifierState(): ModifierType
    /**
     * Returns whether this event is an 'emulated' pointer event.
     * 
     * Emulated pointer events typically originate from a touch events.
     */
    getPointerEmulated(): boolean
    /**
     * Extract the event surface relative x/y coordinates from an event.
     */
    getPosition(): [ /* returnType */ boolean, /* x */ number, /* y */ number ]
    /**
     * Returns the seat that originated the event.
     */
    getSeat(): Seat | null
    /**
     * Extracts the surface associated with an event.
     */
    getSurface(): Surface | null
    /**
     * Returns the timestamp of `event`.
     * 
     * Not all events have timestamps. In that case, this function
     * returns %GDK_CURRENT_TIME.
     */
    getTime(): number
    /**
     * Increase the ref count of `event`.
     */
    ref(): Event
    /**
     * Returns whether a `GdkEvent` should trigger a context menu,
     * according to platform conventions.
     * 
     * The right mouse button typically triggers context menus.
     * 
     * This function should always be used instead of simply checking for
     * event->button == %GDK_BUTTON_SECONDARY.
     */
    triggersContextMenu(): boolean
    /**
     * Decrease the ref count of `event`.
     * 
     * If the last reference is dropped, the structure is freed.
     */
    unref(): void
    static name: string
}
class FocusEvent {
    /* Methods of Gdk-4.0.Gdk.FocusEvent */
    /**
     * Extracts whether this event is about focus entering or
     * leaving the surface.
     */
    getIn(): boolean
    /* Methods of Gdk-4.0.Gdk.Event */
    /**
     * Returns the relative angle from `event1` to `event2`.
     * 
     * The relative angle is the angle between the X axis and the line
     * through both events' positions. The rotation direction for positive
     * angles is from the positive X axis towards the positive Y axis.
     * 
     * This assumes that both events have X/Y information.
     * If not, this function returns %FALSE.
     */
    getAngle(event2: Event): [ /* returnType */ boolean, /* angle */ number ]
    /**
     * Returns the point halfway between the events' positions.
     * 
     * This assumes that both events have X/Y information.
     * If not, this function returns %FALSE.
     */
    getCenter(event2: Event): [ /* returnType */ boolean, /* x */ number, /* y */ number ]
    /**
     * Returns the distance between the event locations.
     * 
     * This assumes that both events have X/Y information.
     * If not, this function returns %FALSE.
     */
    getDistance(event2: Event): [ /* returnType */ boolean, /* distance */ number ]
    /**
     * Extracts all axis values from an event.
     * 
     * To find out which axes are used, use [method`Gdk`.DeviceTool.get_axes]
     * on the device tool returned by [method`Gdk`.Event.get_device_tool].
     */
    getAxes(): [ /* returnType */ boolean, /* axes */ number[] ]
    /**
     * Extract the axis value for a particular axis use from
     * an event structure.
     * 
     * To find out which axes are used, use [method`Gdk`.DeviceTool.get_axes]
     * on the device tool returned by [method`Gdk`.Event.get_device_tool].
     */
    getAxis(axisUse: AxisUse): [ /* returnType */ boolean, /* value */ number ]
    /**
     * Returns the device of an event.
     */
    getDevice(): Device | null
    /**
     * Returns a `GdkDeviceTool` representing the tool that
     * caused the event.
     * 
     * If the was not generated by a device that supports
     * different tools (such as a tablet), this function will
     * return %NULL.
     * 
     * Note: the `GdkDeviceTool` will be constant during
     * the application lifetime, if settings must be stored
     * persistently across runs, see [method`Gdk`.DeviceTool.get_serial].
     */
    getDeviceTool(): DeviceTool | null
    /**
     * Retrieves the display associated to the `event`.
     */
    getDisplay(): Display | null
    /**
     * Retuns the event sequence to which the event belongs.
     * 
     * Related touch events are connected in a sequence. Other
     * events typically don't have event sequence information.
     */
    getEventSequence(): EventSequence
    /**
     * Retrieves the type of the event.
     */
    getEventType(): EventType
    /**
     * Retrieves the history of the device that `event` is for, as a list of
     * time and coordinates.
     * 
     * The history includes positions that are not delivered as separate events
     * to the application because they occurred in the same frame as `event`.
     * 
     * Note that only motion and scroll events record history, and motion
     * events do it only if one of the mouse buttons is down, or the device
     * has a tool.
     */
    getHistory(): TimeCoord[] | null
    /**
     * Returns the modifier state field of an event.
     */
    getModifierState(): ModifierType
    /**
     * Returns whether this event is an 'emulated' pointer event.
     * 
     * Emulated pointer events typically originate from a touch events.
     */
    getPointerEmulated(): boolean
    /**
     * Extract the event surface relative x/y coordinates from an event.
     */
    getPosition(): [ /* returnType */ boolean, /* x */ number, /* y */ number ]
    /**
     * Returns the seat that originated the event.
     */
    getSeat(): Seat | null
    /**
     * Extracts the surface associated with an event.
     */
    getSurface(): Surface | null
    /**
     * Returns the timestamp of `event`.
     * 
     * Not all events have timestamps. In that case, this function
     * returns %GDK_CURRENT_TIME.
     */
    getTime(): number
    /**
     * Increase the ref count of `event`.
     */
    ref(): Event
    /**
     * Returns whether a `GdkEvent` should trigger a context menu,
     * according to platform conventions.
     * 
     * The right mouse button typically triggers context menus.
     * 
     * This function should always be used instead of simply checking for
     * event->button == %GDK_BUTTON_SECONDARY.
     */
    triggersContextMenu(): boolean
    /**
     * Decrease the ref count of `event`.
     * 
     * If the last reference is dropped, the structure is freed.
     */
    unref(): void
    static name: string
}
interface FrameClock_ConstructProps extends GObject.Object_ConstructProps {
}
class FrameClock {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gdk-4.0.Gdk.FrameClock */
    /**
     * Starts updates for an animation.
     * 
     * Until a matching call to [method`Gdk`.FrameClock.end_updating] is made,
     * the frame clock will continually request a new frame with the
     * %GDK_FRAME_CLOCK_PHASE_UPDATE phase. This function may be called multiple
     * times and frames will be requested until gdk_frame_clock_end_updating()
     * is called the same number of times.
     */
    beginUpdating(): void
    /**
     * Stops updates for an animation.
     * 
     * See the documentation for [method`Gdk`.FrameClock.begin_updating].
     */
    endUpdating(): void
    /**
     * Gets the frame timings for the current frame.
     */
    getCurrentTimings(): FrameTimings | null
    /**
     * Calculates the current frames-per-second, based on the
     * frame timings of `frame_clock`.
     */
    getFps(): number
    /**
     * `GdkFrameClock` maintains a 64-bit counter that increments for
     * each frame drawn.
     */
    getFrameCounter(): number
    /**
     * Gets the time that should currently be used for animations.
     * 
     * Inside the processing of a frame, it’s the time used to compute the
     * animation position of everything in a frame. Outside of a frame, it's
     * the time of the conceptual “previous frame,” which may be either
     * the actual previous frame time, or if that’s too old, an updated
     * time.
     */
    getFrameTime(): number
    /**
     * Returns the frame counter for the oldest frame available in history.
     * 
     * `GdkFrameClock` internally keeps a history of `GdkFrameTimings`
     * objects for recent frames that can be retrieved with
     * [method`Gdk`.FrameClock.get_timings]. The set of stored frames
     * is the set from the counter values given by
     * [method`Gdk`.FrameClock.get_history_start] and
     * [method`Gdk`.FrameClock.get_frame_counter], inclusive.
     */
    getHistoryStart(): number
    /**
     * Predicts a presentation time, based on history.
     * 
     * Using the frame history stored in the frame clock, finds the last
     * known presentation time and refresh interval, and assuming that
     * presentation times are separated by the refresh interval,
     * predicts a presentation time that is a multiple of the refresh
     * interval after the last presentation time, and later than `base_time`.
     */
    getRefreshInfo(baseTime: number): [ /* refreshIntervalReturn */ number | null, /* presentationTimeReturn */ number ]
    /**
     * Retrieves a `GdkFrameTimings` object holding timing information
     * for the current frame or a recent frame.
     * 
     * The `GdkFrameTimings` object may not yet be complete: see
     * [method`Gdk`.FrameTimings.get_complete] and
     * [method`Gdk`.FrameClock.get_history_start].
     */
    getTimings(frameCounter: number): FrameTimings | null
    /**
     * Asks the frame clock to run a particular phase.
     * 
     * The signal corresponding the requested phase will be emitted the next
     * time the frame clock processes. Multiple calls to
     * gdk_frame_clock_request_phase() will be combined together
     * and only one frame processed. If you are displaying animated
     * content and want to continually request the
     * %GDK_FRAME_CLOCK_PHASE_UPDATE phase for a period of time,
     * you should use [method`Gdk`.FrameClock.begin_updating] instead,
     * since this allows GTK to adjust system parameters to get maximally
     * smooth animations.
     */
    requestPhase(phase: FrameClockPhase): void
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
    /* Signals of Gdk-4.0.Gdk.FrameClock */
    /**
     * This signal ends processing of the frame.
     * 
     * Applications should generally not handle this signal.
     */
    connect(sigName: "after-paint", callback: (() => void)): number
    on(sigName: "after-paint", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "after-paint", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "after-paint", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "after-paint"): void
    /**
     * Begins processing of the frame.
     * 
     * Applications should generally not handle this signal.
     */
    connect(sigName: "before-paint", callback: (() => void)): number
    on(sigName: "before-paint", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "before-paint", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "before-paint", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "before-paint"): void
    /**
     * Used to flush pending motion events that are being batched up and
     * compressed together.
     * 
     * Applications should not handle this signal.
     */
    connect(sigName: "flush-events", callback: (() => void)): number
    on(sigName: "flush-events", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "flush-events", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "flush-events", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "flush-events"): void
    /**
     * Emitted as the second step of toolkit and application processing
     * of the frame.
     * 
     * Any work to update sizes and positions of application elements
     * should be performed. GTK normally handles this internally.
     */
    connect(sigName: "layout", callback: (() => void)): number
    on(sigName: "layout", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "layout", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "layout", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "layout"): void
    /**
     * Emitted as the third step of toolkit and application processing
     * of the frame.
     * 
     * The frame is repainted. GDK normally handles this internally and
     * emits [signal`Gdk`.Surface::render] signals which are turned into
     * [signal`Gtk`.Widget::snapshot] signals by GTK.
     */
    connect(sigName: "paint", callback: (() => void)): number
    on(sigName: "paint", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "paint", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "paint", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "paint"): void
    /**
     * Emitted after processing of the frame is finished.
     * 
     * This signal is handled internally by GTK to resume normal
     * event processing. Applications should not handle this signal.
     */
    connect(sigName: "resume-events", callback: (() => void)): number
    on(sigName: "resume-events", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "resume-events", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "resume-events", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "resume-events"): void
    /**
     * Emitted as the first step of toolkit and application processing
     * of the frame.
     * 
     * Animations should be updated using [method`Gdk`.FrameClock.get_frame_time].
     * Applications can connect directly to this signal, or use
     * [method`Gtk`.Widget.add_tick_callback] as a more convenient interface.
     */
    connect(sigName: "update", callback: (() => void)): number
    on(sigName: "update", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "update", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "update", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "update"): void
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
    constructor (config?: FrameClock_ConstructProps)
    _init (config?: FrameClock_ConstructProps): void
    static $gtype: GObject.Type
}
interface GLContext_ConstructProps extends DrawContext_ConstructProps {
    /* Constructor properties of Gdk-4.0.Gdk.GLContext */
    /**
     * The allowed APIs.
     */
    allowedApis?: GLAPI
    /**
     * Always %NULL
     * 
     * As many contexts can share data now and no single shared context exists
     * anymore, this function has been deprecated and now always returns %NULL.
     */
    sharedContext?: GLContext
}
class GLContext {
    /* Properties of Gdk-4.0.Gdk.GLContext */
    /**
     * The allowed APIs.
     */
    allowedApis: GLAPI
    /**
     * The API currently in use.
     */
    readonly api: GLAPI
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gdk-4.0.Gdk.GLContext */
    /**
     * Gets the allowed APIs set via gdk_gl_context_set_allowed_apis().
     */
    getAllowedApis(): GLAPI
    /**
     * Gets the API currently in use.
     * 
     * If the renderer has not been realized yet, 0 is returned.
     */
    getApi(): GLAPI
    /**
     * Retrieves whether the context is doing extra validations and runtime checking.
     * 
     * See [method`Gdk`.GLContext.set_debug_enabled].
     */
    getDebugEnabled(): boolean
    /**
     * Retrieves the display the `context` is created for
     */
    getDisplay(): Display | null
    /**
     * Retrieves whether the context is forward-compatible.
     * 
     * See [method`Gdk`.GLContext.set_forward_compatible].
     */
    getForwardCompatible(): boolean
    /**
     * Retrieves required OpenGL version.
     * 
     * See [method`Gdk`.GLContext.set_required_version].
     */
    getRequiredVersion(): [ /* major */ number | null, /* minor */ number | null ]
    /**
     * Used to retrieves the `GdkGLContext` that this `context` share data with.
     * 
     * As many contexts can share data now and no single shared context exists
     * anymore, this function has been deprecated and now always returns %NULL.
     */
    getSharedContext(): GLContext | null
    /**
     * Retrieves the surface used by the `context`.
     */
    getSurface(): Surface | null
    /**
     * Checks whether the `context` is using an OpenGL or OpenGL ES profile.
     */
    getUseEs(): boolean
    /**
     * Retrieves the OpenGL version of the `context`.
     * 
     * The `context` must be realized prior to calling this function.
     */
    getVersion(): [ /* major */ number, /* minor */ number ]
    /**
     * Whether the `GdkGLContext` is in legacy mode or not.
     * 
     * The `GdkGLContext` must be realized before calling this function.
     * 
     * When realizing a GL context, GDK will try to use the OpenGL 3.2 core
     * profile; this profile removes all the OpenGL API that was deprecated
     * prior to the 3.2 version of the specification. If the realization is
     * successful, this function will return %FALSE.
     * 
     * If the underlying OpenGL implementation does not support core profiles,
     * GDK will fall back to a pre-3.2 compatibility profile, and this function
     * will return %TRUE.
     * 
     * You can use the value returned by this function to decide which kind
     * of OpenGL API to use, or whether to do extension discovery, or what
     * kind of shader programs to load.
     */
    isLegacy(): boolean
    /**
     * Checks if the two GL contexts can share resources.
     * 
     * When they can, the texture IDs from `other` can be used in `self`. This
     * is particularly useful when passing `GdkGLTexture` objects between
     * different contexts.
     * 
     * Contexts created for the same display with the same properties will
     * always be compatible, even if they are created for different surfaces.
     * For other contexts it depends on the GL backend.
     * 
     * Both contexts must be realized for this check to succeed. If either one
     * is not, this function will return %FALSE.
     */
    isShared(other: GLContext): boolean
    /**
     * Makes the `context` the current one.
     */
    makeCurrent(): void
    /**
     * Realizes the given `GdkGLContext`.
     * 
     * It is safe to call this function on a realized `GdkGLContext`.
     */
    realize(): boolean
    /**
     * Sets the allowed APIs. When gdk_gl_context_realize() is called, only the
     * allowed APIs will be tried. If you set this to 0, realizing will always fail.
     * 
     * If you set it on a realized context, the property will not have any effect.
     * It is only relevant during gdk_gl_context_realize().
     * 
     * By default, all APIs are allowed.
     */
    setAllowedApis(apis: GLAPI): void
    /**
     * Sets whether the `GdkGLContext` should perform extra validations and
     * runtime checking.
     * 
     * This is useful during development, but has additional overhead.
     * 
     * The `GdkGLContext` must not be realized or made current prior to
     * calling this function.
     */
    setDebugEnabled(enabled: boolean): void
    /**
     * Sets whether the `GdkGLContext` should be forward-compatible.
     * 
     * Forward-compatible contexts must not support OpenGL functionality that
     * has been marked as deprecated in the requested version; non-forward
     * compatible contexts, on the other hand, must support both deprecated and
     * non deprecated functionality.
     * 
     * The `GdkGLContext` must not be realized or made current prior to calling
     * this function.
     */
    setForwardCompatible(compatible: boolean): void
    /**
     * Sets the major and minor version of OpenGL to request.
     * 
     * Setting `major` and `minor` to zero will use the default values.
     * 
     * The `GdkGLContext` must not be realized or made current prior to calling
     * this function.
     */
    setRequiredVersion(major: number, minor: number): void
    /**
     * Requests that GDK create an OpenGL ES context instead of an OpenGL one.
     * 
     * Not all platforms support OpenGL ES.
     * 
     * The `context` must not have been realized.
     * 
     * By default, GDK will attempt to automatically detect whether the
     * underlying GL implementation is OpenGL or OpenGL ES once the `context`
     * is realized.
     * 
     * You should check the return value of [method`Gdk`.GLContext.get_use_es]
     * after calling [method`Gdk`.GLContext.realize] to decide whether to use
     * the OpenGL or OpenGL ES API, extensions, or shaders.
     */
    setUseEs(useEs: number): void
    /* Methods of Gdk-4.0.Gdk.DrawContext */
    /**
     * Indicates that you are beginning the process of redrawing `region`
     * on the `context'`s surface.
     * 
     * Calling this function begins a drawing operation using `context` on the
     * surface that `context` was created from. The actual requirements and
     * guarantees for the drawing operation vary for different implementations
     * of drawing, so a [class`Gdk`.CairoContext] and a [class`Gdk`.GLContext]
     * need to be treated differently.
     * 
     * A call to this function is a requirement for drawing and must be
     * followed by a call to [method`Gdk`.DrawContext.end_frame], which will
     * complete the drawing operation and ensure the contents become visible
     * on screen.
     * 
     * Note that the `region` passed to this function is the minimum region that
     * needs to be drawn and depending on implementation, windowing system and
     * hardware in use, it might be necessary to draw a larger region. Drawing
     * implementation must use [method`Gdk`.DrawContext.get_frame_region] to
     * query the region that must be drawn.
     * 
     * When using GTK, the widget system automatically places calls to
     * gdk_draw_context_begin_frame() and gdk_draw_context_end_frame() via the
     * use of [class`Gsk`.Renderer]s, so application code does not need to call
     * these functions explicitly.
     */
    beginFrame(region: cairo.Region): void
    /**
     * Ends a drawing operation started with gdk_draw_context_begin_frame().
     * 
     * This makes the drawing available on screen.
     * See [method`Gdk`.DrawContext.begin_frame] for more details about drawing.
     * 
     * When using a [class`Gdk`.GLContext], this function may call `glFlush()`
     * implicitly before returning; it is not recommended to call `glFlush()`
     * explicitly before calling this function.
     */
    endFrame(): void
    /**
     * Retrieves the region that is currently being repainted.
     * 
     * After a call to [method`Gdk`.DrawContext.begin_frame] this function will
     * return a union of the region passed to that function and the area of the
     * surface that the `context` determined needs to be repainted.
     * 
     * If `context` is not in between calls to [method`Gdk`.DrawContext.begin_frame]
     * and [method`Gdk`.DrawContext.end_frame], %NULL will be returned.
     */
    getFrameRegion(): cairo.Region | null
    /**
     * Returns %TRUE if `context` is in the process of drawing to its surface.
     * 
     * This is the case between calls to [method`Gdk`.DrawContext.begin_frame]
     * and [method`Gdk`.DrawContext.end_frame]. In this situation, drawing commands
     * may be effecting the contents of the `context'`s surface.
     */
    isInFrame(): boolean
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
    connect(sigName: "notify::allowed-apis", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allowed-apis", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::allowed-apis", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::allowed-apis", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::allowed-apis", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::api", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::api", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::api", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::api", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::api", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: GLContext_ConstructProps)
    _init (config?: GLContext_ConstructProps): void
    /* Static methods and pseudo-constructors */
    /**
     * Clears the current `GdkGLContext`.
     * 
     * Any OpenGL call after this function returns will be ignored
     * until [method`Gdk`.GLContext.make_current] is called.
     */
    static clearCurrent(): void
    /**
     * Retrieves the current `GdkGLContext`.
     */
    static getCurrent(): GLContext | null
    static $gtype: GObject.Type
}
interface GLTexture_ConstructProps extends Texture_ConstructProps {
}
class GLTexture {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gdk-4.0.Gdk.GLTexture */
    /**
     * Releases the GL resources held by a `GdkGLTexture`.
     * 
     * The texture contents are still available via the
     * [method`Gdk`.Texture.download] function, after this
     * function has been called.
     */
    release(): void
    /* Methods of Gdk-4.0.Gdk.Texture */
    /**
     * Downloads the `texture` into local memory.
     * 
     * This may be an expensive operation, as the actual texture data
     * may reside on a GPU or on a remote display server.
     * 
     * The data format of the downloaded data is equivalent to
     * %CAIRO_FORMAT_ARGB32, so every downloaded pixel requires
     * 4 bytes of memory.
     * 
     * Downloading a texture into a Cairo image surface:
     * ```c
     * surface = cairo_image_surface_create (CAIRO_FORMAT_ARGB32,
     *                                       gdk_texture_get_width (texture),
     *                                       gdk_texture_get_height (texture));
     * gdk_texture_download (texture,
     *                       cairo_image_surface_get_data (surface),
     *                       cairo_image_surface_get_stride (surface));
     * cairo_surface_mark_dirty (surface);
     * ```
     */
    download(data: Uint8Array, stride: number): void
    /**
     * Returns the height of the `texture,` in pixels.
     */
    getHeight(): number
    /**
     * Returns the width of `texture,` in pixels.
     */
    getWidth(): number
    /**
     * Store the given `texture` to the `filename` as a PNG file.
     * 
     * This is a utility function intended for debugging and testing.
     * If you want more control over formats, proper error handling or
     * want to store to a [iface`Gio`.File] or other location, you might want to
     * use [method`Gdk`.Texture.save_to_png_bytes] or look into the
     * gdk-pixbuf library.
     */
    saveToPng(filename: string): boolean
    /**
     * Store the given `texture` in memory as a PNG file.
     * 
     * Use [ctor`Gdk`.Texture.new_from_bytes] to read it back.
     * 
     * If you want to serialize a texture, this is a convenient and
     * portable way to do that.
     * 
     * If you need more control over the generated image, such as
     * attaching metadata, you should look into an image handling
     * library such as the gdk-pixbuf library.
     * 
     * If you are dealing with high dynamic range float data, you
     * might also want to consider [method`Gdk`.Texture.save_to_tiff_bytes]
     * instead.
     */
    saveToPngBytes(): any
    /**
     * Store the given `texture` to the `filename` as a TIFF file.
     * 
     * GTK will attempt to store data without loss.
     */
    saveToTiff(filename: string): boolean
    /**
     * Store the given `texture` in memory as a TIFF file.
     * 
     * Use [ctor`Gdk`.Texture.new_from_bytes] to read it back.
     * 
     * This function is intended to store a representation of the
     * texture's data that is as accurate as possible. This is
     * particularly relevant when working with high dynamic range
     * images and floating-point texture data.
     * 
     * If that is not your concern and you are interested in a
     * smaller size and a more portable format, you might want to
     * use [method`Gdk`.Texture.save_to_png_bytes].
     */
    saveToTiffBytes(): any
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
    /* Methods of Gdk-4.0.Gdk.Paintable */
    /**
     * Compute a concrete size for the `GdkPaintable`.
     * 
     * Applies the sizing algorithm outlined in the
     * [CSS Image spec](https://drafts.csswg.org/css-images-3/#default-sizing)
     * to the given `paintable`. See that link for more details.
     * 
     * It is not necessary to call this function when both `specified_width`
     * and `specified_height` are known, but it is useful to call this
     * function in GtkWidget:measure implementations to compute the
     * other dimension when only one dimension is given.
     */
    computeConcreteSize(specifiedWidth: number, specifiedHeight: number, defaultWidth: number, defaultHeight: number): [ /* concreteWidth */ number, /* concreteHeight */ number ]
    /**
     * Gets an immutable paintable for the current contents displayed by `paintable`.
     * 
     * This is useful when you want to retain the current state of an animation,
     * for example to take a screenshot of a running animation.
     * 
     * If the `paintable` is already immutable, it will return itself.
     */
    getCurrentImage(): Paintable
    /**
     * Get flags for the paintable.
     * 
     * This is oftentimes useful for optimizations.
     * 
     * See [flags`Gdk`.PaintableFlags] for the flags and what they mean.
     */
    getFlags(): PaintableFlags
    /**
     * Gets the preferred aspect ratio the `paintable` would like to be displayed at.
     * 
     * The aspect ratio is the width divided by the height, so a value of 0.5
     * means that the `paintable` prefers to be displayed twice as high as it
     * is wide. Consumers of this interface can use this to preserve aspect
     * ratio when displaying the paintable.
     * 
     * This is a purely informational value and does not in any way limit the
     * values that may be passed to [method`Gdk`.Paintable.snapshot].
     * 
     * Usually when a `paintable` returns nonzero values from
     * [method`Gdk`.Paintable.get_intrinsic_width] and
     * [method`Gdk`.Paintable.get_intrinsic_height] the aspect ratio
     * should conform to those values, though that is not required.
     * 
     * If the `paintable` does not have a preferred aspect ratio,
     * it returns 0. Negative values are never returned.
     */
    getIntrinsicAspectRatio(): number
    /**
     * Gets the preferred height the `paintable` would like to be displayed at.
     * 
     * Consumers of this interface can use this to reserve enough space to draw
     * the paintable.
     * 
     * This is a purely informational value and does not in any way limit the
     * values that may be passed to [method`Gdk`.Paintable.snapshot].
     * 
     * If the `paintable` does not have a preferred height, it returns 0.
     * Negative values are never returned.
     */
    getIntrinsicHeight(): number
    /**
     * Gets the preferred width the `paintable` would like to be displayed at.
     * 
     * Consumers of this interface can use this to reserve enough space to draw
     * the paintable.
     * 
     * This is a purely informational value and does not in any way limit the
     * values that may be passed to [method`Gdk`.Paintable.snapshot].
     * 
     * If the `paintable` does not have a preferred width, it returns 0.
     * Negative values are never returned.
     */
    getIntrinsicWidth(): number
    /**
     * Called by implementations of `GdkPaintable` to invalidate their contents.
     * 
     * Unless the contents are invalidated, implementations must guarantee that
     * multiple calls of [method`Gdk`.Paintable.snapshot] produce the same output.
     * 
     * This function will emit the [signal`Gdk`.Paintable::invalidate-contents]
     * signal.
     * 
     * If a `paintable` reports the %GDK_PAINTABLE_STATIC_CONTENTS flag,
     * it must not call this function.
     */
    invalidateContents(): void
    /**
     * Called by implementations of `GdkPaintable` to invalidate their size.
     * 
     * As long as the size is not invalidated, `paintable` must return the same
     * values for its intrinsic width, height and aspect ratio.
     * 
     * This function will emit the [signal`Gdk`.Paintable::invalidate-size]
     * signal.
     * 
     * If a `paintable` reports the %GDK_PAINTABLE_STATIC_SIZE flag,
     * it must not call this function.
     */
    invalidateSize(): void
    /**
     * Snapshots the given paintable with the given `width` and `height`.
     * 
     * The paintable is drawn at the current (0,0) offset of the `snapshot`.
     * If `width` and `height` are not larger than zero, this function will
     * do nothing.
     */
    snapshot(snapshot: Snapshot, width: number, height: number): void
    /* Methods of Gio-2.0.Gio.Icon */
    /**
     * Checks if two icons are equal.
     */
    equal(icon2?: Gio.Icon | null): boolean
    /**
     * Serializes a #GIcon into a #GVariant. An equivalent #GIcon can be retrieved
     * back by calling g_icon_deserialize() on the returned value.
     * As serialization will avoid using raw icon data when possible, it only
     * makes sense to transfer the #GVariant between processes on the same machine,
     * (as opposed to over the network), and within the same file system namespace.
     */
    serialize(): GLib.Variant | null
    /**
     * Generates a textual representation of `icon` that can be used for
     * serialization such as when passing `icon` to a different process or
     * saving it to persistent storage. Use g_icon_new_for_string() to
     * get `icon` back from the returned string.
     * 
     * The encoding of the returned string is proprietary to #GIcon except
     * in the following two cases
     * 
     * - If `icon` is a #GFileIcon, the returned string is a native path
     *   (such as `/path/to/my icon.png`) without escaping
     *   if the #GFile for `icon` is a native file.  If the file is not
     *   native, the returned string is the result of g_file_get_uri()
     *   (such as `sftp://path/to/my%20icon.png`).
     * 
     * - If `icon` is a #GThemedIcon with exactly one name and no fallbacks,
     *   the encoding is simply the name (such as `network-server`).
     */
    toString(): string | null
    /* Methods of Gio-2.0.Gio.LoadableIcon */
    /**
     * Loads a loadable icon. For the asynchronous version of this function,
     * see g_loadable_icon_load_async().
     */
    load(size: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ Gio.InputStream, /* type */ string | null ]
    /**
     * Loads an icon asynchronously. To finish this function, see
     * g_loadable_icon_load_finish(). For the synchronous, blocking
     * version of this function, see g_loadable_icon_load().
     */
    loadAsync(size: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous icon load started in g_loadable_icon_load_async().
     */
    loadFinish(res: Gio.AsyncResult): [ /* returnType */ Gio.InputStream, /* type */ string | null ]
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
    /* Signals of Gdk-4.0.Gdk.Paintable */
    /**
     * Emitted when the contents of the `paintable` change.
     * 
     * Examples for such an event would be videos changing to the next frame or
     * the icon theme for an icon changing.
     */
    connect(sigName: "invalidate-contents", callback: (() => void)): number
    on(sigName: "invalidate-contents", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "invalidate-contents", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "invalidate-contents", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "invalidate-contents"): void
    /**
     * Emitted when the intrinsic size of the `paintable` changes.
     * 
     * This means the values reported by at least one of
     * [method`Gdk`.Paintable.get_intrinsic_width],
     * [method`Gdk`.Paintable.get_intrinsic_height] or
     * [method`Gdk`.Paintable.get_intrinsic_aspect_ratio]
     * has changed.
     * 
     * Examples for such an event would be a paintable displaying
     * the contents of a toplevel surface being resized.
     */
    connect(sigName: "invalidate-size", callback: (() => void)): number
    on(sigName: "invalidate-size", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "invalidate-size", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "invalidate-size", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "invalidate-size"): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: GLTexture_ConstructProps)
    _init (config?: GLTexture_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(context: GLContext, id: number, width: number, height: number, destroy: GLib.DestroyNotify, data?: object | null): GLTexture
    /**
     * Returns a paintable that has the given intrinsic size and draws nothing.
     * 
     * This is often useful for implementing the
     * [vfunc`Gdk`.Paintable.get_current_image] virtual function
     * when the paintable is in an incomplete state (like a
     * [class`Gtk`.MediaStream] before receiving the first frame).
     */
    static newEmpty(intrinsicWidth: number, intrinsicHeight: number): Paintable
    /**
     * Deserializes a #GIcon previously serialized using g_icon_serialize().
     */
    static deserialize(value: GLib.Variant): Gio.Icon | null
    /**
     * Gets a hash for an icon.
     */
    static hash(icon: object): number
    /**
     * Generate a #GIcon instance from `str`. This function can fail if
     * `str` is not valid - see g_icon_to_string() for discussion.
     * 
     * If your application or library provides one or more #GIcon
     * implementations you need to ensure that each #GType is registered
     * with the type system prior to calling g_icon_new_for_string().
     */
    static newForString(str: string): Gio.Icon
    static $gtype: GObject.Type
}
class GrabBrokenEvent {
    /* Methods of Gdk-4.0.Gdk.GrabBrokenEvent */
    /**
     * Extracts the grab surface from a grab broken event.
     */
    getGrabSurface(): Surface
    /**
     * Checks whether the grab broken event is for an implicit grab.
     */
    getImplicit(): boolean
    /* Methods of Gdk-4.0.Gdk.Event */
    /**
     * Returns the relative angle from `event1` to `event2`.
     * 
     * The relative angle is the angle between the X axis and the line
     * through both events' positions. The rotation direction for positive
     * angles is from the positive X axis towards the positive Y axis.
     * 
     * This assumes that both events have X/Y information.
     * If not, this function returns %FALSE.
     */
    getAngle(event2: Event): [ /* returnType */ boolean, /* angle */ number ]
    /**
     * Returns the point halfway between the events' positions.
     * 
     * This assumes that both events have X/Y information.
     * If not, this function returns %FALSE.
     */
    getCenter(event2: Event): [ /* returnType */ boolean, /* x */ number, /* y */ number ]
    /**
     * Returns the distance between the event locations.
     * 
     * This assumes that both events have X/Y information.
     * If not, this function returns %FALSE.
     */
    getDistance(event2: Event): [ /* returnType */ boolean, /* distance */ number ]
    /**
     * Extracts all axis values from an event.
     * 
     * To find out which axes are used, use [method`Gdk`.DeviceTool.get_axes]
     * on the device tool returned by [method`Gdk`.Event.get_device_tool].
     */
    getAxes(): [ /* returnType */ boolean, /* axes */ number[] ]
    /**
     * Extract the axis value for a particular axis use from
     * an event structure.
     * 
     * To find out which axes are used, use [method`Gdk`.DeviceTool.get_axes]
     * on the device tool returned by [method`Gdk`.Event.get_device_tool].
     */
    getAxis(axisUse: AxisUse): [ /* returnType */ boolean, /* value */ number ]
    /**
     * Returns the device of an event.
     */
    getDevice(): Device | null
    /**
     * Returns a `GdkDeviceTool` representing the tool that
     * caused the event.
     * 
     * If the was not generated by a device that supports
     * different tools (such as a tablet), this function will
     * return %NULL.
     * 
     * Note: the `GdkDeviceTool` will be constant during
     * the application lifetime, if settings must be stored
     * persistently across runs, see [method`Gdk`.DeviceTool.get_serial].
     */
    getDeviceTool(): DeviceTool | null
    /**
     * Retrieves the display associated to the `event`.
     */
    getDisplay(): Display | null
    /**
     * Retuns the event sequence to which the event belongs.
     * 
     * Related touch events are connected in a sequence. Other
     * events typically don't have event sequence information.
     */
    getEventSequence(): EventSequence
    /**
     * Retrieves the type of the event.
     */
    getEventType(): EventType
    /**
     * Retrieves the history of the device that `event` is for, as a list of
     * time and coordinates.
     * 
     * The history includes positions that are not delivered as separate events
     * to the application because they occurred in the same frame as `event`.
     * 
     * Note that only motion and scroll events record history, and motion
     * events do it only if one of the mouse buttons is down, or the device
     * has a tool.
     */
    getHistory(): TimeCoord[] | null
    /**
     * Returns the modifier state field of an event.
     */
    getModifierState(): ModifierType
    /**
     * Returns whether this event is an 'emulated' pointer event.
     * 
     * Emulated pointer events typically originate from a touch events.
     */
    getPointerEmulated(): boolean
    /**
     * Extract the event surface relative x/y coordinates from an event.
     */
    getPosition(): [ /* returnType */ boolean, /* x */ number, /* y */ number ]
    /**
     * Returns the seat that originated the event.
     */
    getSeat(): Seat | null
    /**
     * Extracts the surface associated with an event.
     */
    getSurface(): Surface | null
    /**
     * Returns the timestamp of `event`.
     * 
     * Not all events have timestamps. In that case, this function
     * returns %GDK_CURRENT_TIME.
     */
    getTime(): number
    /**
     * Increase the ref count of `event`.
     */
    ref(): Event
    /**
     * Returns whether a `GdkEvent` should trigger a context menu,
     * according to platform conventions.
     * 
     * The right mouse button typically triggers context menus.
     * 
     * This function should always be used instead of simply checking for
     * event->button == %GDK_BUTTON_SECONDARY.
     */
    triggersContextMenu(): boolean
    /**
     * Decrease the ref count of `event`.
     * 
     * If the last reference is dropped, the structure is freed.
     */
    unref(): void
    static name: string
}
class KeyEvent {
    /* Methods of Gdk-4.0.Gdk.KeyEvent */
    /**
     * Extracts the consumed modifiers from a key event.
     */
    getConsumedModifiers(): ModifierType
    /**
     * Extracts the keycode from a key event.
     */
    getKeycode(): number
    /**
     * Extracts the keyval from a key event.
     */
    getKeyval(): number
    /**
     * Extracts the layout from a key event.
     */
    getLayout(): number
    /**
     * Extracts the shift level from a key event.
     */
    getLevel(): number
    /**
     * Gets a keyval and modifier combination that will match
     * the event.
     * 
     * See [method`Gdk`.KeyEvent.matches].
     */
    getMatch(): [ /* returnType */ boolean, /* keyval */ number, /* modifiers */ ModifierType ]
    /**
     * Extracts whether the key event is for a modifier key.
     */
    isModifier(): boolean
    /**
     * Matches a key event against a keyval and modifiers.
     * 
     * This is typically used to trigger keyboard shortcuts such as Ctrl-C.
     * 
     * Partial matches are possible where the combination matches
     * if the currently active group is ignored.
     * 
     * Note that we ignore Caps Lock for matching.
     */
    matches(keyval: number, modifiers: ModifierType): KeyMatch
    /* Methods of Gdk-4.0.Gdk.Event */
    /**
     * Returns the relative angle from `event1` to `event2`.
     * 
     * The relative angle is the angle between the X axis and the line
     * through both events' positions. The rotation direction for positive
     * angles is from the positive X axis towards the positive Y axis.
     * 
     * This assumes that both events have X/Y information.
     * If not, this function returns %FALSE.
     */
    getAngle(event2: Event): [ /* returnType */ boolean, /* angle */ number ]
    /**
     * Returns the point halfway between the events' positions.
     * 
     * This assumes that both events have X/Y information.
     * If not, this function returns %FALSE.
     */
    getCenter(event2: Event): [ /* returnType */ boolean, /* x */ number, /* y */ number ]
    /**
     * Returns the distance between the event locations.
     * 
     * This assumes that both events have X/Y information.
     * If not, this function returns %FALSE.
     */
    getDistance(event2: Event): [ /* returnType */ boolean, /* distance */ number ]
    /**
     * Extracts all axis values from an event.
     * 
     * To find out which axes are used, use [method`Gdk`.DeviceTool.get_axes]
     * on the device tool returned by [method`Gdk`.Event.get_device_tool].
     */
    getAxes(): [ /* returnType */ boolean, /* axes */ number[] ]
    /**
     * Extract the axis value for a particular axis use from
     * an event structure.
     * 
     * To find out which axes are used, use [method`Gdk`.DeviceTool.get_axes]
     * on the device tool returned by [method`Gdk`.Event.get_device_tool].
     */
    getAxis(axisUse: AxisUse): [ /* returnType */ boolean, /* value */ number ]
    /**
     * Returns the device of an event.
     */
    getDevice(): Device | null
    /**
     * Returns a `GdkDeviceTool` representing the tool that
     * caused the event.
     * 
     * If the was not generated by a device that supports
     * different tools (such as a tablet), this function will
     * return %NULL.
     * 
     * Note: the `GdkDeviceTool` will be constant during
     * the application lifetime, if settings must be stored
     * persistently across runs, see [method`Gdk`.DeviceTool.get_serial].
     */
    getDeviceTool(): DeviceTool | null
    /**
     * Retrieves the display associated to the `event`.
     */
    getDisplay(): Display | null
    /**
     * Retuns the event sequence to which the event belongs.
     * 
     * Related touch events are connected in a sequence. Other
     * events typically don't have event sequence information.
     */
    getEventSequence(): EventSequence
    /**
     * Retrieves the type of the event.
     */
    getEventType(): EventType
    /**
     * Retrieves the history of the device that `event` is for, as a list of
     * time and coordinates.
     * 
     * The history includes positions that are not delivered as separate events
     * to the application because they occurred in the same frame as `event`.
     * 
     * Note that only motion and scroll events record history, and motion
     * events do it only if one of the mouse buttons is down, or the device
     * has a tool.
     */
    getHistory(): TimeCoord[] | null
    /**
     * Returns the modifier state field of an event.
     */
    getModifierState(): ModifierType
    /**
     * Returns whether this event is an 'emulated' pointer event.
     * 
     * Emulated pointer events typically originate from a touch events.
     */
    getPointerEmulated(): boolean
    /**
     * Extract the event surface relative x/y coordinates from an event.
     */
    getPosition(): [ /* returnType */ boolean, /* x */ number, /* y */ number ]
    /**
     * Returns the seat that originated the event.
     */
    getSeat(): Seat | null
    /**
     * Extracts the surface associated with an event.
     */
    getSurface(): Surface | null
    /**
     * Returns the timestamp of `event`.
     * 
     * Not all events have timestamps. In that case, this function
     * returns %GDK_CURRENT_TIME.
     */
    getTime(): number
    /**
     * Increase the ref count of `event`.
     */
    ref(): Event
    /**
     * Returns whether a `GdkEvent` should trigger a context menu,
     * according to platform conventions.
     * 
     * The right mouse button typically triggers context menus.
     * 
     * This function should always be used instead of simply checking for
     * event->button == %GDK_BUTTON_SECONDARY.
     */
    triggersContextMenu(): boolean
    /**
     * Decrease the ref count of `event`.
     * 
     * If the last reference is dropped, the structure is freed.
     */
    unref(): void
    static name: string
}
interface MemoryTexture_ConstructProps extends Texture_ConstructProps {
}
class MemoryTexture {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gdk-4.0.Gdk.Texture */
    /**
     * Downloads the `texture` into local memory.
     * 
     * This may be an expensive operation, as the actual texture data
     * may reside on a GPU or on a remote display server.
     * 
     * The data format of the downloaded data is equivalent to
     * %CAIRO_FORMAT_ARGB32, so every downloaded pixel requires
     * 4 bytes of memory.
     * 
     * Downloading a texture into a Cairo image surface:
     * ```c
     * surface = cairo_image_surface_create (CAIRO_FORMAT_ARGB32,
     *                                       gdk_texture_get_width (texture),
     *                                       gdk_texture_get_height (texture));
     * gdk_texture_download (texture,
     *                       cairo_image_surface_get_data (surface),
     *                       cairo_image_surface_get_stride (surface));
     * cairo_surface_mark_dirty (surface);
     * ```
     */
    download(data: Uint8Array, stride: number): void
    /**
     * Returns the height of the `texture,` in pixels.
     */
    getHeight(): number
    /**
     * Returns the width of `texture,` in pixels.
     */
    getWidth(): number
    /**
     * Store the given `texture` to the `filename` as a PNG file.
     * 
     * This is a utility function intended for debugging and testing.
     * If you want more control over formats, proper error handling or
     * want to store to a [iface`Gio`.File] or other location, you might want to
     * use [method`Gdk`.Texture.save_to_png_bytes] or look into the
     * gdk-pixbuf library.
     */
    saveToPng(filename: string): boolean
    /**
     * Store the given `texture` in memory as a PNG file.
     * 
     * Use [ctor`Gdk`.Texture.new_from_bytes] to read it back.
     * 
     * If you want to serialize a texture, this is a convenient and
     * portable way to do that.
     * 
     * If you need more control over the generated image, such as
     * attaching metadata, you should look into an image handling
     * library such as the gdk-pixbuf library.
     * 
     * If you are dealing with high dynamic range float data, you
     * might also want to consider [method`Gdk`.Texture.save_to_tiff_bytes]
     * instead.
     */
    saveToPngBytes(): any
    /**
     * Store the given `texture` to the `filename` as a TIFF file.
     * 
     * GTK will attempt to store data without loss.
     */
    saveToTiff(filename: string): boolean
    /**
     * Store the given `texture` in memory as a TIFF file.
     * 
     * Use [ctor`Gdk`.Texture.new_from_bytes] to read it back.
     * 
     * This function is intended to store a representation of the
     * texture's data that is as accurate as possible. This is
     * particularly relevant when working with high dynamic range
     * images and floating-point texture data.
     * 
     * If that is not your concern and you are interested in a
     * smaller size and a more portable format, you might want to
     * use [method`Gdk`.Texture.save_to_png_bytes].
     */
    saveToTiffBytes(): any
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
    /* Methods of Gdk-4.0.Gdk.Paintable */
    /**
     * Compute a concrete size for the `GdkPaintable`.
     * 
     * Applies the sizing algorithm outlined in the
     * [CSS Image spec](https://drafts.csswg.org/css-images-3/#default-sizing)
     * to the given `paintable`. See that link for more details.
     * 
     * It is not necessary to call this function when both `specified_width`
     * and `specified_height` are known, but it is useful to call this
     * function in GtkWidget:measure implementations to compute the
     * other dimension when only one dimension is given.
     */
    computeConcreteSize(specifiedWidth: number, specifiedHeight: number, defaultWidth: number, defaultHeight: number): [ /* concreteWidth */ number, /* concreteHeight */ number ]
    /**
     * Gets an immutable paintable for the current contents displayed by `paintable`.
     * 
     * This is useful when you want to retain the current state of an animation,
     * for example to take a screenshot of a running animation.
     * 
     * If the `paintable` is already immutable, it will return itself.
     */
    getCurrentImage(): Paintable
    /**
     * Get flags for the paintable.
     * 
     * This is oftentimes useful for optimizations.
     * 
     * See [flags`Gdk`.PaintableFlags] for the flags and what they mean.
     */
    getFlags(): PaintableFlags
    /**
     * Gets the preferred aspect ratio the `paintable` would like to be displayed at.
     * 
     * The aspect ratio is the width divided by the height, so a value of 0.5
     * means that the `paintable` prefers to be displayed twice as high as it
     * is wide. Consumers of this interface can use this to preserve aspect
     * ratio when displaying the paintable.
     * 
     * This is a purely informational value and does not in any way limit the
     * values that may be passed to [method`Gdk`.Paintable.snapshot].
     * 
     * Usually when a `paintable` returns nonzero values from
     * [method`Gdk`.Paintable.get_intrinsic_width] and
     * [method`Gdk`.Paintable.get_intrinsic_height] the aspect ratio
     * should conform to those values, though that is not required.
     * 
     * If the `paintable` does not have a preferred aspect ratio,
     * it returns 0. Negative values are never returned.
     */
    getIntrinsicAspectRatio(): number
    /**
     * Gets the preferred height the `paintable` would like to be displayed at.
     * 
     * Consumers of this interface can use this to reserve enough space to draw
     * the paintable.
     * 
     * This is a purely informational value and does not in any way limit the
     * values that may be passed to [method`Gdk`.Paintable.snapshot].
     * 
     * If the `paintable` does not have a preferred height, it returns 0.
     * Negative values are never returned.
     */
    getIntrinsicHeight(): number
    /**
     * Gets the preferred width the `paintable` would like to be displayed at.
     * 
     * Consumers of this interface can use this to reserve enough space to draw
     * the paintable.
     * 
     * This is a purely informational value and does not in any way limit the
     * values that may be passed to [method`Gdk`.Paintable.snapshot].
     * 
     * If the `paintable` does not have a preferred width, it returns 0.
     * Negative values are never returned.
     */
    getIntrinsicWidth(): number
    /**
     * Called by implementations of `GdkPaintable` to invalidate their contents.
     * 
     * Unless the contents are invalidated, implementations must guarantee that
     * multiple calls of [method`Gdk`.Paintable.snapshot] produce the same output.
     * 
     * This function will emit the [signal`Gdk`.Paintable::invalidate-contents]
     * signal.
     * 
     * If a `paintable` reports the %GDK_PAINTABLE_STATIC_CONTENTS flag,
     * it must not call this function.
     */
    invalidateContents(): void
    /**
     * Called by implementations of `GdkPaintable` to invalidate their size.
     * 
     * As long as the size is not invalidated, `paintable` must return the same
     * values for its intrinsic width, height and aspect ratio.
     * 
     * This function will emit the [signal`Gdk`.Paintable::invalidate-size]
     * signal.
     * 
     * If a `paintable` reports the %GDK_PAINTABLE_STATIC_SIZE flag,
     * it must not call this function.
     */
    invalidateSize(): void
    /**
     * Snapshots the given paintable with the given `width` and `height`.
     * 
     * The paintable is drawn at the current (0,0) offset of the `snapshot`.
     * If `width` and `height` are not larger than zero, this function will
     * do nothing.
     */
    snapshot(snapshot: Snapshot, width: number, height: number): void
    /* Methods of Gio-2.0.Gio.Icon */
    /**
     * Checks if two icons are equal.
     */
    equal(icon2?: Gio.Icon | null): boolean
    /**
     * Serializes a #GIcon into a #GVariant. An equivalent #GIcon can be retrieved
     * back by calling g_icon_deserialize() on the returned value.
     * As serialization will avoid using raw icon data when possible, it only
     * makes sense to transfer the #GVariant between processes on the same machine,
     * (as opposed to over the network), and within the same file system namespace.
     */
    serialize(): GLib.Variant | null
    /**
     * Generates a textual representation of `icon` that can be used for
     * serialization such as when passing `icon` to a different process or
     * saving it to persistent storage. Use g_icon_new_for_string() to
     * get `icon` back from the returned string.
     * 
     * The encoding of the returned string is proprietary to #GIcon except
     * in the following two cases
     * 
     * - If `icon` is a #GFileIcon, the returned string is a native path
     *   (such as `/path/to/my icon.png`) without escaping
     *   if the #GFile for `icon` is a native file.  If the file is not
     *   native, the returned string is the result of g_file_get_uri()
     *   (such as `sftp://path/to/my%20icon.png`).
     * 
     * - If `icon` is a #GThemedIcon with exactly one name and no fallbacks,
     *   the encoding is simply the name (such as `network-server`).
     */
    toString(): string | null
    /* Methods of Gio-2.0.Gio.LoadableIcon */
    /**
     * Loads a loadable icon. For the asynchronous version of this function,
     * see g_loadable_icon_load_async().
     */
    load(size: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ Gio.InputStream, /* type */ string | null ]
    /**
     * Loads an icon asynchronously. To finish this function, see
     * g_loadable_icon_load_finish(). For the synchronous, blocking
     * version of this function, see g_loadable_icon_load().
     */
    loadAsync(size: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous icon load started in g_loadable_icon_load_async().
     */
    loadFinish(res: Gio.AsyncResult): [ /* returnType */ Gio.InputStream, /* type */ string | null ]
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
    /* Signals of Gdk-4.0.Gdk.Paintable */
    /**
     * Emitted when the contents of the `paintable` change.
     * 
     * Examples for such an event would be videos changing to the next frame or
     * the icon theme for an icon changing.
     */
    connect(sigName: "invalidate-contents", callback: (() => void)): number
    on(sigName: "invalidate-contents", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "invalidate-contents", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "invalidate-contents", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "invalidate-contents"): void
    /**
     * Emitted when the intrinsic size of the `paintable` changes.
     * 
     * This means the values reported by at least one of
     * [method`Gdk`.Paintable.get_intrinsic_width],
     * [method`Gdk`.Paintable.get_intrinsic_height] or
     * [method`Gdk`.Paintable.get_intrinsic_aspect_ratio]
     * has changed.
     * 
     * Examples for such an event would be a paintable displaying
     * the contents of a toplevel surface being resized.
     */
    connect(sigName: "invalidate-size", callback: (() => void)): number
    on(sigName: "invalidate-size", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "invalidate-size", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "invalidate-size", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "invalidate-size"): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: MemoryTexture_ConstructProps)
    _init (config?: MemoryTexture_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(width: number, height: number, format: MemoryFormat, bytes: any, stride: number): MemoryTexture
    /**
     * Returns a paintable that has the given intrinsic size and draws nothing.
     * 
     * This is often useful for implementing the
     * [vfunc`Gdk`.Paintable.get_current_image] virtual function
     * when the paintable is in an incomplete state (like a
     * [class`Gtk`.MediaStream] before receiving the first frame).
     */
    static newEmpty(intrinsicWidth: number, intrinsicHeight: number): Paintable
    /**
     * Deserializes a #GIcon previously serialized using g_icon_serialize().
     */
    static deserialize(value: GLib.Variant): Gio.Icon | null
    /**
     * Gets a hash for an icon.
     */
    static hash(icon: object): number
    /**
     * Generate a #GIcon instance from `str`. This function can fail if
     * `str` is not valid - see g_icon_to_string() for discussion.
     * 
     * If your application or library provides one or more #GIcon
     * implementations you need to ensure that each #GType is registered
     * with the type system prior to calling g_icon_new_for_string().
     */
    static newForString(str: string): Gio.Icon
    static $gtype: GObject.Type
}
interface Monitor_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gdk-4.0.Gdk.Monitor */
    /**
     * The `GdkDisplay` of the monitor.
     */
    display?: Display
}
class Monitor {
    /* Properties of Gdk-4.0.Gdk.Monitor */
    /**
     * The connector name.
     */
    readonly connector: string
    /**
     * The geometry of the monitor.
     */
    readonly geometry: Rectangle
    /**
     * The height of the monitor, in millimeters.
     */
    readonly heightMm: number
    /**
     * The manufacturer name.
     */
    readonly manufacturer: string
    /**
     * The model name.
     */
    readonly model: string
    /**
     * The refresh rate, in milli-Hertz.
     */
    readonly refreshRate: number
    /**
     * The scale factor.
     */
    readonly scaleFactor: number
    /**
     * The subpixel layout.
     */
    readonly subpixelLayout: SubpixelLayout
    /**
     * Whether the object is still valid.
     */
    readonly valid: boolean
    /**
     * The width of the monitor, in millimeters.
     */
    readonly widthMm: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gdk-4.0.Gdk.Monitor */
    /**
     * Gets the name of the monitor's connector, if available.
     */
    getConnector(): string | null
    /**
     * Gets the display that this monitor belongs to.
     */
    getDisplay(): Display
    /**
     * Retrieves the size and position of the monitor within the
     * display coordinate space.
     * 
     * The returned geometry is in  ”application pixels”, not in
     * ”device pixels” (see [method`Gdk`.Monitor.get_scale_factor]).
     */
    getGeometry(): /* geometry */ Rectangle
    /**
     * Gets the height in millimeters of the monitor.
     */
    getHeightMm(): number
    /**
     * Gets the name or PNP ID of the monitor's manufacturer.
     * 
     * Note that this value might also vary depending on actual
     * display backend.
     * 
     * The PNP ID registry is located at
     * [https://uefi.org/pnp_id_list](https://uefi.org/pnp_id_list).
     */
    getManufacturer(): string | null
    /**
     * Gets the string identifying the monitor model, if available.
     */
    getModel(): string | null
    /**
     * Gets the refresh rate of the monitor, if available.
     * 
     * The value is in milli-Hertz, so a refresh rate of 60Hz
     * is returned as 60000.
     */
    getRefreshRate(): number
    /**
     * Gets the internal scale factor that maps from monitor coordinates
     * to device pixels.
     * 
     * On traditional systems this is 1, but on very high density outputs
     * it can be a higher value (often 2).
     * 
     * This can be used if you want to create pixel based data for a
     * particular monitor, but most of the time you’re drawing to a surface
     * where it is better to use [method`Gdk`.Surface.get_scale_factor] instead.
     */
    getScaleFactor(): number
    /**
     * Gets information about the layout of red, green and blue
     * primaries for pixels.
     */
    getSubpixelLayout(): SubpixelLayout
    /**
     * Gets the width in millimeters of the monitor.
     */
    getWidthMm(): number
    /**
     * Returns %TRUE if the `monitor` object corresponds to a
     * physical monitor.
     * 
     * The `monitor` becomes invalid when the physical monitor
     * is unplugged or removed.
     */
    isValid(): boolean
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
    /* Signals of Gdk-4.0.Gdk.Monitor */
    /**
     * Emitted when the output represented by `monitor` gets disconnected.
     */
    connect(sigName: "invalidate", callback: (() => void)): number
    on(sigName: "invalidate", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "invalidate", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "invalidate", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "invalidate"): void
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
    connect(sigName: "notify::connector", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connector", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::connector", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::connector", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::connector", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::geometry", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::geometry", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::geometry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::geometry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::geometry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height-mm", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-mm", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height-mm", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height-mm", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height-mm", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::manufacturer", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::manufacturer", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::manufacturer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::manufacturer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::manufacturer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::model", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::refresh-rate", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::refresh-rate", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::refresh-rate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::refresh-rate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::refresh-rate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-factor", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::subpixel-layout", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subpixel-layout", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::subpixel-layout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::subpixel-layout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::subpixel-layout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::valid", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valid", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width-mm", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-mm", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width-mm", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width-mm", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width-mm", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Monitor_ConstructProps)
    _init (config?: Monitor_ConstructProps): void
    static $gtype: GObject.Type
}
class MotionEvent {
    /* Methods of Gdk-4.0.Gdk.Event */
    /**
     * Returns the relative angle from `event1` to `event2`.
     * 
     * The relative angle is the angle between the X axis and the line
     * through both events' positions. The rotation direction for positive
     * angles is from the positive X axis towards the positive Y axis.
     * 
     * This assumes that both events have X/Y information.
     * If not, this function returns %FALSE.
     */
    getAngle(event2: Event): [ /* returnType */ boolean, /* angle */ number ]
    /**
     * Returns the point halfway between the events' positions.
     * 
     * This assumes that both events have X/Y information.
     * If not, this function returns %FALSE.
     */
    getCenter(event2: Event): [ /* returnType */ boolean, /* x */ number, /* y */ number ]
    /**
     * Returns the distance between the event locations.
     * 
     * This assumes that both events have X/Y information.
     * If not, this function returns %FALSE.
     */
    getDistance(event2: Event): [ /* returnType */ boolean, /* distance */ number ]
    /**
     * Extracts all axis values from an event.
     * 
     * To find out which axes are used, use [method`Gdk`.DeviceTool.get_axes]
     * on the device tool returned by [method`Gdk`.Event.get_device_tool].
     */
    getAxes(): [ /* returnType */ boolean, /* axes */ number[] ]
    /**
     * Extract the axis value for a particular axis use from
     * an event structure.
     * 
     * To find out which axes are used, use [method`Gdk`.DeviceTool.get_axes]
     * on the device tool returned by [method`Gdk`.Event.get_device_tool].
     */
    getAxis(axisUse: AxisUse): [ /* returnType */ boolean, /* value */ number ]
    /**
     * Returns the device of an event.
     */
    getDevice(): Device | null
    /**
     * Returns a `GdkDeviceTool` representing the tool that
     * caused the event.
     * 
     * If the was not generated by a device that supports
     * different tools (such as a tablet), this function will
     * return %NULL.
     * 
     * Note: the `GdkDeviceTool` will be constant during
     * the application lifetime, if settings must be stored
     * persistently across runs, see [method`Gdk`.DeviceTool.get_serial].
     */
    getDeviceTool(): DeviceTool | null
    /**
     * Retrieves the display associated to the `event`.
     */
    getDisplay(): Display | null
    /**
     * Retuns the event sequence to which the event belongs.
     * 
     * Related touch events are connected in a sequence. Other
     * events typically don't have event sequence information.
     */
    getEventSequence(): EventSequence
    /**
     * Retrieves the type of the event.
     */
    getEventType(): EventType
    /**
     * Retrieves the history of the device that `event` is for, as a list of
     * time and coordinates.
     * 
     * The history includes positions that are not delivered as separate events
     * to the application because they occurred in the same frame as `event`.
     * 
     * Note that only motion and scroll events record history, and motion
     * events do it only if one of the mouse buttons is down, or the device
     * has a tool.
     */
    getHistory(): TimeCoord[] | null
    /**
     * Returns the modifier state field of an event.
     */
    getModifierState(): ModifierType
    /**
     * Returns whether this event is an 'emulated' pointer event.
     * 
     * Emulated pointer events typically originate from a touch events.
     */
    getPointerEmulated(): boolean
    /**
     * Extract the event surface relative x/y coordinates from an event.
     */
    getPosition(): [ /* returnType */ boolean, /* x */ number, /* y */ number ]
    /**
     * Returns the seat that originated the event.
     */
    getSeat(): Seat | null
    /**
     * Extracts the surface associated with an event.
     */
    getSurface(): Surface | null
    /**
     * Returns the timestamp of `event`.
     * 
     * Not all events have timestamps. In that case, this function
     * returns %GDK_CURRENT_TIME.
     */
    getTime(): number
    /**
     * Increase the ref count of `event`.
     */
    ref(): Event
    /**
     * Returns whether a `GdkEvent` should trigger a context menu,
     * according to platform conventions.
     * 
     * The right mouse button typically triggers context menus.
     * 
     * This function should always be used instead of simply checking for
     * event->button == %GDK_BUTTON_SECONDARY.
     */
    triggersContextMenu(): boolean
    /**
     * Decrease the ref count of `event`.
     * 
     * If the last reference is dropped, the structure is freed.
     */
    unref(): void
    static name: string
}
class PadEvent {
    /* Methods of Gdk-4.0.Gdk.PadEvent */
    /**
     * Extracts the information from a pad strip or ring event.
     */
    getAxisValue(): [ /* index */ number, /* value */ number ]
    /**
     * Extracts information about the pressed button from
     * a pad event.
     */
    getButton(): number
    /**
     * Extracts group and mode information from a pad event.
     */
    getGroupMode(): [ /* group */ number, /* mode */ number ]
    /* Methods of Gdk-4.0.Gdk.Event */
    /**
     * Returns the relative angle from `event1` to `event2`.
     * 
     * The relative angle is the angle between the X axis and the line
     * through both events' positions. The rotation direction for positive
     * angles is from the positive X axis towards the positive Y axis.
     * 
     * This assumes that both events have X/Y information.
     * If not, this function returns %FALSE.
     */
    getAngle(event2: Event): [ /* returnType */ boolean, /* angle */ number ]
    /**
     * Returns the point halfway between the events' positions.
     * 
     * This assumes that both events have X/Y information.
     * If not, this function returns %FALSE.
     */
    getCenter(event2: Event): [ /* returnType */ boolean, /* x */ number, /* y */ number ]
    /**
     * Returns the distance between the event locations.
     * 
     * This assumes that both events have X/Y information.
     * If not, this function returns %FALSE.
     */
    getDistance(event2: Event): [ /* returnType */ boolean, /* distance */ number ]
    /**
     * Extracts all axis values from an event.
     * 
     * To find out which axes are used, use [method`Gdk`.DeviceTool.get_axes]
     * on the device tool returned by [method`Gdk`.Event.get_device_tool].
     */
    getAxes(): [ /* returnType */ boolean, /* axes */ number[] ]
    /**
     * Extract the axis value for a particular axis use from
     * an event structure.
     * 
     * To find out which axes are used, use [method`Gdk`.DeviceTool.get_axes]
     * on the device tool returned by [method`Gdk`.Event.get_device_tool].
     */
    getAxis(axisUse: AxisUse): [ /* returnType */ boolean, /* value */ number ]
    /**
     * Returns the device of an event.
     */
    getDevice(): Device | null
    /**
     * Returns a `GdkDeviceTool` representing the tool that
     * caused the event.
     * 
     * If the was not generated by a device that supports
     * different tools (such as a tablet), this function will
     * return %NULL.
     * 
     * Note: the `GdkDeviceTool` will be constant during
     * the application lifetime, if settings must be stored
     * persistently across runs, see [method`Gdk`.DeviceTool.get_serial].
     */
    getDeviceTool(): DeviceTool | null
    /**
     * Retrieves the display associated to the `event`.
     */
    getDisplay(): Display | null
    /**
     * Retuns the event sequence to which the event belongs.
     * 
     * Related touch events are connected in a sequence. Other
     * events typically don't have event sequence information.
     */
    getEventSequence(): EventSequence
    /**
     * Retrieves the type of the event.
     */
    getEventType(): EventType
    /**
     * Retrieves the history of the device that `event` is for, as a list of
     * time and coordinates.
     * 
     * The history includes positions that are not delivered as separate events
     * to the application because they occurred in the same frame as `event`.
     * 
     * Note that only motion and scroll events record history, and motion
     * events do it only if one of the mouse buttons is down, or the device
     * has a tool.
     */
    getHistory(): TimeCoord[] | null
    /**
     * Returns the modifier state field of an event.
     */
    getModifierState(): ModifierType
    /**
     * Returns whether this event is an 'emulated' pointer event.
     * 
     * Emulated pointer events typically originate from a touch events.
     */
    getPointerEmulated(): boolean
    /**
     * Extract the event surface relative x/y coordinates from an event.
     */
    getPosition(): [ /* returnType */ boolean, /* x */ number, /* y */ number ]
    /**
     * Returns the seat that originated the event.
     */
    getSeat(): Seat | null
    /**
     * Extracts the surface associated with an event.
     */
    getSurface(): Surface | null
    /**
     * Returns the timestamp of `event`.
     * 
     * Not all events have timestamps. In that case, this function
     * returns %GDK_CURRENT_TIME.
     */
    getTime(): number
    /**
     * Increase the ref count of `event`.
     */
    ref(): Event
    /**
     * Returns whether a `GdkEvent` should trigger a context menu,
     * according to platform conventions.
     * 
     * The right mouse button typically triggers context menus.
     * 
     * This function should always be used instead of simply checking for
     * event->button == %GDK_BUTTON_SECONDARY.
     */
    triggersContextMenu(): boolean
    /**
     * Decrease the ref count of `event`.
     * 
     * If the last reference is dropped, the structure is freed.
     */
    unref(): void
    static name: string
}
class ProximityEvent {
    /* Methods of Gdk-4.0.Gdk.Event */
    /**
     * Returns the relative angle from `event1` to `event2`.
     * 
     * The relative angle is the angle between the X axis and the line
     * through both events' positions. The rotation direction for positive
     * angles is from the positive X axis towards the positive Y axis.
     * 
     * This assumes that both events have X/Y information.
     * If not, this function returns %FALSE.
     */
    getAngle(event2: Event): [ /* returnType */ boolean, /* angle */ number ]
    /**
     * Returns the point halfway between the events' positions.
     * 
     * This assumes that both events have X/Y information.
     * If not, this function returns %FALSE.
     */
    getCenter(event2: Event): [ /* returnType */ boolean, /* x */ number, /* y */ number ]
    /**
     * Returns the distance between the event locations.
     * 
     * This assumes that both events have X/Y information.
     * If not, this function returns %FALSE.
     */
    getDistance(event2: Event): [ /* returnType */ boolean, /* distance */ number ]
    /**
     * Extracts all axis values from an event.
     * 
     * To find out which axes are used, use [method`Gdk`.DeviceTool.get_axes]
     * on the device tool returned by [method`Gdk`.Event.get_device_tool].
     */
    getAxes(): [ /* returnType */ boolean, /* axes */ number[] ]
    /**
     * Extract the axis value for a particular axis use from
     * an event structure.
     * 
     * To find out which axes are used, use [method`Gdk`.DeviceTool.get_axes]
     * on the device tool returned by [method`Gdk`.Event.get_device_tool].
     */
    getAxis(axisUse: AxisUse): [ /* returnType */ boolean, /* value */ number ]
    /**
     * Returns the device of an event.
     */
    getDevice(): Device | null
    /**
     * Returns a `GdkDeviceTool` representing the tool that
     * caused the event.
     * 
     * If the was not generated by a device that supports
     * different tools (such as a tablet), this function will
     * return %NULL.
     * 
     * Note: the `GdkDeviceTool` will be constant during
     * the application lifetime, if settings must be stored
     * persistently across runs, see [method`Gdk`.DeviceTool.get_serial].
     */
    getDeviceTool(): DeviceTool | null
    /**
     * Retrieves the display associated to the `event`.
     */
    getDisplay(): Display | null
    /**
     * Retuns the event sequence to which the event belongs.
     * 
     * Related touch events are connected in a sequence. Other
     * events typically don't have event sequence information.
     */
    getEventSequence(): EventSequence
    /**
     * Retrieves the type of the event.
     */
    getEventType(): EventType
    /**
     * Retrieves the history of the device that `event` is for, as a list of
     * time and coordinates.
     * 
     * The history includes positions that are not delivered as separate events
     * to the application because they occurred in the same frame as `event`.
     * 
     * Note that only motion and scroll events record history, and motion
     * events do it only if one of the mouse buttons is down, or the device
     * has a tool.
     */
    getHistory(): TimeCoord[] | null
    /**
     * Returns the modifier state field of an event.
     */
    getModifierState(): ModifierType
    /**
     * Returns whether this event is an 'emulated' pointer event.
     * 
     * Emulated pointer events typically originate from a touch events.
     */
    getPointerEmulated(): boolean
    /**
     * Extract the event surface relative x/y coordinates from an event.
     */
    getPosition(): [ /* returnType */ boolean, /* x */ number, /* y */ number ]
    /**
     * Returns the seat that originated the event.
     */
    getSeat(): Seat | null
    /**
     * Extracts the surface associated with an event.
     */
    getSurface(): Surface | null
    /**
     * Returns the timestamp of `event`.
     * 
     * Not all events have timestamps. In that case, this function
     * returns %GDK_CURRENT_TIME.
     */
    getTime(): number
    /**
     * Increase the ref count of `event`.
     */
    ref(): Event
    /**
     * Returns whether a `GdkEvent` should trigger a context menu,
     * according to platform conventions.
     * 
     * The right mouse button typically triggers context menus.
     * 
     * This function should always be used instead of simply checking for
     * event->button == %GDK_BUTTON_SECONDARY.
     */
    triggersContextMenu(): boolean
    /**
     * Decrease the ref count of `event`.
     * 
     * If the last reference is dropped, the structure is freed.
     */
    unref(): void
    static name: string
}
class ScrollEvent {
    /* Methods of Gdk-4.0.Gdk.ScrollEvent */
    /**
     * Extracts the scroll deltas of a scroll event.
     * 
     * The deltas will be zero unless the scroll direction
     * is %GDK_SCROLL_SMOOTH.
     */
    getDeltas(): [ /* deltaX */ number, /* deltaY */ number ]
    /**
     * Extracts the direction of a scroll event.
     */
    getDirection(): ScrollDirection
    /**
     * Check whether a scroll event is a stop scroll event.
     * 
     * Scroll sequences with smooth scroll information may provide
     * a stop scroll event once the interaction with the device finishes,
     * e.g. by lifting a finger. This stop scroll event is the signal
     * that a widget may trigger kinetic scrolling based on the current
     * velocity.
     * 
     * Stop scroll events always have a delta of 0/0.
     */
    isStop(): boolean
    /* Methods of Gdk-4.0.Gdk.Event */
    /**
     * Returns the relative angle from `event1` to `event2`.
     * 
     * The relative angle is the angle between the X axis and the line
     * through both events' positions. The rotation direction for positive
     * angles is from the positive X axis towards the positive Y axis.
     * 
     * This assumes that both events have X/Y information.
     * If not, this function returns %FALSE.
     */
    getAngle(event2: Event): [ /* returnType */ boolean, /* angle */ number ]
    /**
     * Returns the point halfway between the events' positions.
     * 
     * This assumes that both events have X/Y information.
     * If not, this function returns %FALSE.
     */
    getCenter(event2: Event): [ /* returnType */ boolean, /* x */ number, /* y */ number ]
    /**
     * Returns the distance between the event locations.
     * 
     * This assumes that both events have X/Y information.
     * If not, this function returns %FALSE.
     */
    getDistance(event2: Event): [ /* returnType */ boolean, /* distance */ number ]
    /**
     * Extracts all axis values from an event.
     * 
     * To find out which axes are used, use [method`Gdk`.DeviceTool.get_axes]
     * on the device tool returned by [method`Gdk`.Event.get_device_tool].
     */
    getAxes(): [ /* returnType */ boolean, /* axes */ number[] ]
    /**
     * Extract the axis value for a particular axis use from
     * an event structure.
     * 
     * To find out which axes are used, use [method`Gdk`.DeviceTool.get_axes]
     * on the device tool returned by [method`Gdk`.Event.get_device_tool].
     */
    getAxis(axisUse: AxisUse): [ /* returnType */ boolean, /* value */ number ]
    /**
     * Returns the device of an event.
     */
    getDevice(): Device | null
    /**
     * Returns a `GdkDeviceTool` representing the tool that
     * caused the event.
     * 
     * If the was not generated by a device that supports
     * different tools (such as a tablet), this function will
     * return %NULL.
     * 
     * Note: the `GdkDeviceTool` will be constant during
     * the application lifetime, if settings must be stored
     * persistently across runs, see [method`Gdk`.DeviceTool.get_serial].
     */
    getDeviceTool(): DeviceTool | null
    /**
     * Retrieves the display associated to the `event`.
     */
    getDisplay(): Display | null
    /**
     * Retuns the event sequence to which the event belongs.
     * 
     * Related touch events are connected in a sequence. Other
     * events typically don't have event sequence information.
     */
    getEventSequence(): EventSequence
    /**
     * Retrieves the type of the event.
     */
    getEventType(): EventType
    /**
     * Retrieves the history of the device that `event` is for, as a list of
     * time and coordinates.
     * 
     * The history includes positions that are not delivered as separate events
     * to the application because they occurred in the same frame as `event`.
     * 
     * Note that only motion and scroll events record history, and motion
     * events do it only if one of the mouse buttons is down, or the device
     * has a tool.
     */
    getHistory(): TimeCoord[] | null
    /**
     * Returns the modifier state field of an event.
     */
    getModifierState(): ModifierType
    /**
     * Returns whether this event is an 'emulated' pointer event.
     * 
     * Emulated pointer events typically originate from a touch events.
     */
    getPointerEmulated(): boolean
    /**
     * Extract the event surface relative x/y coordinates from an event.
     */
    getPosition(): [ /* returnType */ boolean, /* x */ number, /* y */ number ]
    /**
     * Returns the seat that originated the event.
     */
    getSeat(): Seat | null
    /**
     * Extracts the surface associated with an event.
     */
    getSurface(): Surface | null
    /**
     * Returns the timestamp of `event`.
     * 
     * Not all events have timestamps. In that case, this function
     * returns %GDK_CURRENT_TIME.
     */
    getTime(): number
    /**
     * Increase the ref count of `event`.
     */
    ref(): Event
    /**
     * Returns whether a `GdkEvent` should trigger a context menu,
     * according to platform conventions.
     * 
     * The right mouse button typically triggers context menus.
     * 
     * This function should always be used instead of simply checking for
     * event->button == %GDK_BUTTON_SECONDARY.
     */
    triggersContextMenu(): boolean
    /**
     * Decrease the ref count of `event`.
     * 
     * If the last reference is dropped, the structure is freed.
     */
    unref(): void
    static name: string
}
interface Seat_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gdk-4.0.Gdk.Seat */
    /**
     * `GdkDisplay` of this seat.
     */
    display?: Display
}
class Seat {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gdk-4.0.Gdk.Seat */
    /**
     * Returns the capabilities this `GdkSeat` currently has.
     */
    getCapabilities(): SeatCapabilities
    /**
     * Returns the devices that match the given capabilities.
     */
    getDevices(capabilities: SeatCapabilities): Device[]
    /**
     * Returns the `GdkDisplay` this seat belongs to.
     */
    getDisplay(): Display
    /**
     * Returns the device that routes keyboard events.
     */
    getKeyboard(): Device | null
    /**
     * Returns the device that routes pointer events.
     */
    getPointer(): Device | null
    /**
     * Returns all `GdkDeviceTools` that are known to the application.
     */
    getTools(): DeviceTool[]
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
    /* Signals of Gdk-4.0.Gdk.Seat */
    /**
     * Emitted when a new input device is related to this seat.
     */
    connect(sigName: "device-added", callback: ((device: Device) => void)): number
    on(sigName: "device-added", callback: (device: Device) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "device-added", callback: (device: Device) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "device-added", callback: (device: Device) => void): NodeJS.EventEmitter
    emit(sigName: "device-added", device: Device): void
    /**
     * Emitted when an input device is removed (e.g. unplugged).
     */
    connect(sigName: "device-removed", callback: ((device: Device) => void)): number
    on(sigName: "device-removed", callback: (device: Device) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "device-removed", callback: (device: Device) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "device-removed", callback: (device: Device) => void): NodeJS.EventEmitter
    emit(sigName: "device-removed", device: Device): void
    /**
     * Emitted whenever a new tool is made known to the seat.
     * 
     * The tool may later be assigned to a device (i.e. on
     * proximity with a tablet). The device will emit the
     * [signal`Gdk`.Device::tool-changed] signal accordingly.
     * 
     * A same tool may be used by several devices.
     */
    connect(sigName: "tool-added", callback: ((tool: DeviceTool) => void)): number
    on(sigName: "tool-added", callback: (tool: DeviceTool) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "tool-added", callback: (tool: DeviceTool) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "tool-added", callback: (tool: DeviceTool) => void): NodeJS.EventEmitter
    emit(sigName: "tool-added", tool: DeviceTool): void
    /**
     * Emitted whenever a tool is no longer known to this `seat`.
     */
    connect(sigName: "tool-removed", callback: ((tool: DeviceTool) => void)): number
    on(sigName: "tool-removed", callback: (tool: DeviceTool) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "tool-removed", callback: (tool: DeviceTool) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "tool-removed", callback: (tool: DeviceTool) => void): NodeJS.EventEmitter
    emit(sigName: "tool-removed", tool: DeviceTool): void
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
    constructor (config?: Seat_ConstructProps)
    _init (config?: Seat_ConstructProps): void
    static $gtype: GObject.Type
}
interface Snapshot_ConstructProps extends GObject.Object_ConstructProps {
}
class Snapshot {
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
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Snapshot_ConstructProps)
    _init (config?: Snapshot_ConstructProps): void
    static $gtype: GObject.Type
}
interface Surface_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gdk-4.0.Gdk.Surface */
    /**
     * The mouse pointer for the `GdkSurface`.
     */
    cursor?: Cursor
    /**
     * The `GdkDisplay` connection of the surface.
     */
    display?: Display
    /**
     * The `GdkFrameClock` of the surface.
     */
    frameClock?: FrameClock
}
class Surface {
    /* Properties of Gdk-4.0.Gdk.Surface */
    /**
     * The mouse pointer for the `GdkSurface`.
     */
    cursor: Cursor
    /**
     * The height of the surface, in pixels.
     */
    readonly height: number
    /**
     * Whether the surface is mapped.
     */
    readonly mapped: boolean
    /**
     * The scale factor of the surface.
     */
    readonly scaleFactor: number
    /**
     * The width of the surface in pixels.
     */
    readonly width: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gdk-4.0.Gdk.Surface */
    /**
     * Emits a short beep associated to `surface`.
     * 
     * If the display of `surface` does not support per-surface beeps,
     * emits a short beep on the display just as [method`Gdk`.Display.beep].
     */
    beep(): void
    /**
     * Creates a new `GdkCairoContext` for rendering on `surface`.
     */
    createCairoContext(): CairoContext
    /**
     * Creates a new `GdkGLContext` for the `GdkSurface`.
     * 
     * The context is disconnected from any particular surface or surface.
     * If the creation of the `GdkGLContext` failed, `error` will be set.
     * Before using the returned `GdkGLContext`, you will need to
     * call [method`Gdk`.GLContext.make_current] or [method`Gdk`.GLContext.realize].
     */
    createGlContext(): GLContext
    /**
     * Create a new Cairo surface that is as compatible as possible with the
     * given `surface`.
     * 
     * For example the new surface will have the same fallback resolution
     * and font options as `surface`. Generally, the new surface will also
     * use the same backend as `surface,` unless that is not possible for
     * some reason. The type of the returned surface may be examined with
     * cairo_surface_get_type().
     * 
     * Initially the surface contents are all 0 (transparent if contents
     * have transparency, black otherwise.)
     * 
     * This function always returns a valid pointer, but it will return a
     * pointer to a “nil” surface if `other` is already in an error state
     * or any other error occurs.
     */
    createSimilarSurface(content: cairo.Content, width: number, height: number): cairo.Surface
    /**
     * Creates a new `GdkVulkanContext` for rendering on `surface`.
     * 
     * If the creation of the `GdkVulkanContext` failed, `error` will be set.
     */
    createVulkanContext(): VulkanContext
    /**
     * Destroys the window system resources associated with `surface` and
     * decrements `surface'`s reference count.
     * 
     * The window system resources for all children of `surface` are also
     * destroyed, but the children’s reference counts are not decremented.
     * 
     * Note that a surface will not be destroyed automatically when its
     * reference count reaches zero. You must call this function yourself
     * before that happens.
     */
    destroy(): void
    /**
     * Retrieves a `GdkCursor` pointer for the cursor currently set on the
     * `GdkSurface`.
     * 
     * If the return value is %NULL then there is no custom cursor set on
     * the surface, and it is using the cursor for its parent surface.
     * 
     * Use [method`Gdk`.Surface.set_cursor] to unset the cursor of the surface.
     */
    getCursor(): Cursor | null
    /**
     * Retrieves a `GdkCursor` pointer for the `device` currently set on the
     * specified `GdkSurface`.
     * 
     * If the return value is %NULL then there is no custom cursor set on the
     * specified surface, and it is using the cursor for its parent surface.
     * 
     * Use [method`Gdk`.Surface.set_cursor] to unset the cursor of the surface.
     */
    getDeviceCursor(device: Device): Cursor | null
    /**
     * Obtains the current device position and modifier state.
     * 
     * The position is given in coordinates relative to the upper
     * left corner of `surface`.
     */
    getDevicePosition(device: Device): [ /* returnType */ boolean, /* x */ number | null, /* y */ number | null, /* mask */ ModifierType | null ]
    /**
     * Gets the `GdkDisplay` associated with a `GdkSurface`.
     */
    getDisplay(): Display
    /**
     * Gets the frame clock for the surface.
     * 
     * The frame clock for a surface never changes unless the surface is
     * reparented to a new toplevel surface.
     */
    getFrameClock(): FrameClock
    /**
     * Returns the height of the given `surface`.
     * 
     * Surface size is reported in ”application pixels”, not
     * ”device pixels” (see [method`Gdk`.Surface.get_scale_factor]).
     */
    getHeight(): number
    /**
     * Checks whether the surface has been mapped.
     * 
     * A surface is mapped with [method`Gdk`.Toplevel.present]
     * or [method`Gdk`.Popup.present].
     */
    getMapped(): boolean
    /**
     * Returns the internal scale factor that maps from surface coordinates
     * to the actual device pixels.
     * 
     * On traditional systems this is 1, but on very high density outputs
     * this can be a higher value (often 2). A higher value means that drawing
     * is automatically scaled up to a higher resolution, so any code doing
     * drawing will automatically look nicer. However, if you are supplying
     * pixel-based data the scale value can be used to determine whether to
     * use a pixel resource with higher resolution data.
     * 
     * The scale of a surface may change during runtime.
     */
    getScaleFactor(): number
    /**
     * Returns the width of the given `surface`.
     * 
     * Surface size is reported in ”application pixels”, not
     * ”device pixels” (see [method`Gdk`.Surface.get_scale_factor]).
     */
    getWidth(): number
    /**
     * Hide the surface.
     * 
     * For toplevel surfaces, withdraws them, so they will no longer be
     * known to the window manager; for all surfaces, unmaps them, so
     * they won’t be displayed. Normally done automatically as
     * part of [method`Gtk`.Widget.hide].
     */
    hide(): void
    /**
     * Check to see if a surface is destroyed.
     */
    isDestroyed(): boolean
    /**
     * Forces a [signal`Gdk`.Surface::render] signal emission for `surface`
     * to be scheduled.
     * 
     * This function is useful for implementations that track invalid
     * regions on their own.
     */
    queueRender(): void
    /**
     * Request a layout phase from the surface's frame clock.
     * 
     * See [method`Gdk`.FrameClock.request_phase].
     */
    requestLayout(): void
    /**
     * Sets the default mouse pointer for a `GdkSurface`.
     * 
     * Passing %NULL for the `cursor` argument means that `surface` will use
     * the cursor of its parent surface. Most surfaces should use this default.
     * Note that `cursor` must be for the same display as `surface`.
     * 
     * Use [ctor`Gdk`.Cursor.new_from_name] or [ctor`Gdk`.Cursor.new_from_texture]
     * to create the cursor. To make the cursor invisible, use %GDK_BLANK_CURSOR.
     */
    setCursor(cursor?: Cursor | null): void
    /**
     * Sets a specific `GdkCursor` for a given device when it gets inside `surface`.
     * 
     * Passing %NULL for the `cursor` argument means that `surface` will use the
     * cursor of its parent surface. Most surfaces should use this default.
     * 
     * Use [ctor`Gdk`.Cursor.new_from_name] or [ctor`Gdk`.Cursor.new_from_texture]
     * to create the cursor. To make the cursor invisible, use %GDK_BLANK_CURSOR.
     */
    setDeviceCursor(device: Device, cursor: Cursor): void
    /**
     * Apply the region to the surface for the purpose of event
     * handling.
     * 
     * Mouse events which happen while the pointer position corresponds
     * to an unset bit in the mask will be passed on the surface below
     * `surface`.
     * 
     * An input region is typically used with RGBA surfaces. The alpha
     * channel of the surface defines which pixels are invisible and
     * allows for nicely antialiased borders, and the input region
     * controls where the surface is “clickable”.
     * 
     * Use [method`Gdk`.Display.supports_input_shapes] to find out if
     * a particular backend supports input regions.
     */
    setInputRegion(region: cairo.Region): void
    /**
     * Marks a region of the `GdkSurface` as opaque.
     * 
     * For optimisation purposes, compositing window managers may
     * like to not draw obscured regions of surfaces, or turn off blending
     * during for these regions. With RGB windows with no transparency,
     * this is just the shape of the window, but with ARGB32 windows, the
     * compositor does not know what regions of the window are transparent
     * or not.
     * 
     * This function only works for toplevel surfaces.
     * 
     * GTK will update this property automatically if the `surface` background
     * is opaque, as we know where the opaque regions are. If your surface
     * background is not opaque, please update this property in your
     * [vfunc`Gtk`.Widget.css_changed] handler.
     */
    setOpaqueRegion(region?: cairo.Region | null): void
    /**
     * Translates coordinates between two surfaces.
     * 
     * Note that this only works if `to` and `from` are popups or
     * transient-for to the same toplevel (directly or indirectly).
     */
    translateCoordinates(to: Surface, x: number, y: number): [ /* returnType */ boolean, /* x */ number, /* y */ number ]
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
    /* Signals of Gdk-4.0.Gdk.Surface */
    /**
     * Emitted when `surface` starts being present on the monitor.
     */
    connect(sigName: "enter-monitor", callback: ((monitor: Monitor) => void)): number
    on(sigName: "enter-monitor", callback: (monitor: Monitor) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "enter-monitor", callback: (monitor: Monitor) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "enter-monitor", callback: (monitor: Monitor) => void): NodeJS.EventEmitter
    emit(sigName: "enter-monitor", monitor: Monitor): void
    /**
     * Emitted when GDK receives an input event for `surface`.
     */
    connect(sigName: "event", callback: ((event: Event) => boolean)): number
    on(sigName: "event", callback: (event: Event) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "event", callback: (event: Event) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "event", callback: (event: Event) => void): NodeJS.EventEmitter
    emit(sigName: "event", event: Event): void
    /**
     * Emitted when the size of `surface` is changed, or when relayout should
     * be performed.
     * 
     * Surface size is reported in ”application pixels”, not
     * ”device pixels” (see gdk_surface_get_scale_factor()).
     */
    connect(sigName: "layout", callback: ((width: number, height: number) => void)): number
    on(sigName: "layout", callback: (width: number, height: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "layout", callback: (width: number, height: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "layout", callback: (width: number, height: number) => void): NodeJS.EventEmitter
    emit(sigName: "layout", width: number, height: number): void
    /**
     * Emitted when `surface` stops being present on the monitor.
     */
    connect(sigName: "leave-monitor", callback: ((monitor: Monitor) => void)): number
    on(sigName: "leave-monitor", callback: (monitor: Monitor) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "leave-monitor", callback: (monitor: Monitor) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "leave-monitor", callback: (monitor: Monitor) => void): NodeJS.EventEmitter
    emit(sigName: "leave-monitor", monitor: Monitor): void
    /**
     * Emitted when part of the surface needs to be redrawn.
     */
    connect(sigName: "render", callback: ((region: cairo.Region) => boolean)): number
    on(sigName: "render", callback: (region: cairo.Region) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "render", callback: (region: cairo.Region) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "render", callback: (region: cairo.Region) => void): NodeJS.EventEmitter
    emit(sigName: "render", region: cairo.Region): void
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
    connect(sigName: "notify::cursor", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::height", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::mapped", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mapped", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::mapped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::mapped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::mapped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::scale-factor", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::width", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Surface_ConstructProps)
    _init (config?: Surface_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newPopup(parent: Surface, autohide: boolean): Surface
    static newToplevel(display: Display): Surface
    static $gtype: GObject.Type
}
interface Texture_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gdk-4.0.Gdk.Texture */
    /**
     * The height of the texture, in pixels.
     */
    height?: number
    /**
     * The width of the texture, in pixels.
     */
    width?: number
}
class Texture {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gdk-4.0.Gdk.Texture */
    /**
     * Downloads the `texture` into local memory.
     * 
     * This may be an expensive operation, as the actual texture data
     * may reside on a GPU or on a remote display server.
     * 
     * The data format of the downloaded data is equivalent to
     * %CAIRO_FORMAT_ARGB32, so every downloaded pixel requires
     * 4 bytes of memory.
     * 
     * Downloading a texture into a Cairo image surface:
     * ```c
     * surface = cairo_image_surface_create (CAIRO_FORMAT_ARGB32,
     *                                       gdk_texture_get_width (texture),
     *                                       gdk_texture_get_height (texture));
     * gdk_texture_download (texture,
     *                       cairo_image_surface_get_data (surface),
     *                       cairo_image_surface_get_stride (surface));
     * cairo_surface_mark_dirty (surface);
     * ```
     */
    download(data: Uint8Array, stride: number): void
    /**
     * Returns the height of the `texture,` in pixels.
     */
    getHeight(): number
    /**
     * Returns the width of `texture,` in pixels.
     */
    getWidth(): number
    /**
     * Store the given `texture` to the `filename` as a PNG file.
     * 
     * This is a utility function intended for debugging and testing.
     * If you want more control over formats, proper error handling or
     * want to store to a [iface`Gio`.File] or other location, you might want to
     * use [method`Gdk`.Texture.save_to_png_bytes] or look into the
     * gdk-pixbuf library.
     */
    saveToPng(filename: string): boolean
    /**
     * Store the given `texture` in memory as a PNG file.
     * 
     * Use [ctor`Gdk`.Texture.new_from_bytes] to read it back.
     * 
     * If you want to serialize a texture, this is a convenient and
     * portable way to do that.
     * 
     * If you need more control over the generated image, such as
     * attaching metadata, you should look into an image handling
     * library such as the gdk-pixbuf library.
     * 
     * If you are dealing with high dynamic range float data, you
     * might also want to consider [method`Gdk`.Texture.save_to_tiff_bytes]
     * instead.
     */
    saveToPngBytes(): any
    /**
     * Store the given `texture` to the `filename` as a TIFF file.
     * 
     * GTK will attempt to store data without loss.
     */
    saveToTiff(filename: string): boolean
    /**
     * Store the given `texture` in memory as a TIFF file.
     * 
     * Use [ctor`Gdk`.Texture.new_from_bytes] to read it back.
     * 
     * This function is intended to store a representation of the
     * texture's data that is as accurate as possible. This is
     * particularly relevant when working with high dynamic range
     * images and floating-point texture data.
     * 
     * If that is not your concern and you are interested in a
     * smaller size and a more portable format, you might want to
     * use [method`Gdk`.Texture.save_to_png_bytes].
     */
    saveToTiffBytes(): any
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
    /* Methods of Gdk-4.0.Gdk.Paintable */
    /**
     * Compute a concrete size for the `GdkPaintable`.
     * 
     * Applies the sizing algorithm outlined in the
     * [CSS Image spec](https://drafts.csswg.org/css-images-3/#default-sizing)
     * to the given `paintable`. See that link for more details.
     * 
     * It is not necessary to call this function when both `specified_width`
     * and `specified_height` are known, but it is useful to call this
     * function in GtkWidget:measure implementations to compute the
     * other dimension when only one dimension is given.
     */
    computeConcreteSize(specifiedWidth: number, specifiedHeight: number, defaultWidth: number, defaultHeight: number): [ /* concreteWidth */ number, /* concreteHeight */ number ]
    /**
     * Gets an immutable paintable for the current contents displayed by `paintable`.
     * 
     * This is useful when you want to retain the current state of an animation,
     * for example to take a screenshot of a running animation.
     * 
     * If the `paintable` is already immutable, it will return itself.
     */
    getCurrentImage(): Paintable
    /**
     * Get flags for the paintable.
     * 
     * This is oftentimes useful for optimizations.
     * 
     * See [flags`Gdk`.PaintableFlags] for the flags and what they mean.
     */
    getFlags(): PaintableFlags
    /**
     * Gets the preferred aspect ratio the `paintable` would like to be displayed at.
     * 
     * The aspect ratio is the width divided by the height, so a value of 0.5
     * means that the `paintable` prefers to be displayed twice as high as it
     * is wide. Consumers of this interface can use this to preserve aspect
     * ratio when displaying the paintable.
     * 
     * This is a purely informational value and does not in any way limit the
     * values that may be passed to [method`Gdk`.Paintable.snapshot].
     * 
     * Usually when a `paintable` returns nonzero values from
     * [method`Gdk`.Paintable.get_intrinsic_width] and
     * [method`Gdk`.Paintable.get_intrinsic_height] the aspect ratio
     * should conform to those values, though that is not required.
     * 
     * If the `paintable` does not have a preferred aspect ratio,
     * it returns 0. Negative values are never returned.
     */
    getIntrinsicAspectRatio(): number
    /**
     * Gets the preferred height the `paintable` would like to be displayed at.
     * 
     * Consumers of this interface can use this to reserve enough space to draw
     * the paintable.
     * 
     * This is a purely informational value and does not in any way limit the
     * values that may be passed to [method`Gdk`.Paintable.snapshot].
     * 
     * If the `paintable` does not have a preferred height, it returns 0.
     * Negative values are never returned.
     */
    getIntrinsicHeight(): number
    /**
     * Gets the preferred width the `paintable` would like to be displayed at.
     * 
     * Consumers of this interface can use this to reserve enough space to draw
     * the paintable.
     * 
     * This is a purely informational value and does not in any way limit the
     * values that may be passed to [method`Gdk`.Paintable.snapshot].
     * 
     * If the `paintable` does not have a preferred width, it returns 0.
     * Negative values are never returned.
     */
    getIntrinsicWidth(): number
    /**
     * Called by implementations of `GdkPaintable` to invalidate their contents.
     * 
     * Unless the contents are invalidated, implementations must guarantee that
     * multiple calls of [method`Gdk`.Paintable.snapshot] produce the same output.
     * 
     * This function will emit the [signal`Gdk`.Paintable::invalidate-contents]
     * signal.
     * 
     * If a `paintable` reports the %GDK_PAINTABLE_STATIC_CONTENTS flag,
     * it must not call this function.
     */
    invalidateContents(): void
    /**
     * Called by implementations of `GdkPaintable` to invalidate their size.
     * 
     * As long as the size is not invalidated, `paintable` must return the same
     * values for its intrinsic width, height and aspect ratio.
     * 
     * This function will emit the [signal`Gdk`.Paintable::invalidate-size]
     * signal.
     * 
     * If a `paintable` reports the %GDK_PAINTABLE_STATIC_SIZE flag,
     * it must not call this function.
     */
    invalidateSize(): void
    /**
     * Snapshots the given paintable with the given `width` and `height`.
     * 
     * The paintable is drawn at the current (0,0) offset of the `snapshot`.
     * If `width` and `height` are not larger than zero, this function will
     * do nothing.
     */
    snapshot(snapshot: Snapshot, width: number, height: number): void
    /* Methods of Gio-2.0.Gio.Icon */
    /**
     * Checks if two icons are equal.
     */
    equal(icon2?: Gio.Icon | null): boolean
    /**
     * Serializes a #GIcon into a #GVariant. An equivalent #GIcon can be retrieved
     * back by calling g_icon_deserialize() on the returned value.
     * As serialization will avoid using raw icon data when possible, it only
     * makes sense to transfer the #GVariant between processes on the same machine,
     * (as opposed to over the network), and within the same file system namespace.
     */
    serialize(): GLib.Variant | null
    /**
     * Generates a textual representation of `icon` that can be used for
     * serialization such as when passing `icon` to a different process or
     * saving it to persistent storage. Use g_icon_new_for_string() to
     * get `icon` back from the returned string.
     * 
     * The encoding of the returned string is proprietary to #GIcon except
     * in the following two cases
     * 
     * - If `icon` is a #GFileIcon, the returned string is a native path
     *   (such as `/path/to/my icon.png`) without escaping
     *   if the #GFile for `icon` is a native file.  If the file is not
     *   native, the returned string is the result of g_file_get_uri()
     *   (such as `sftp://path/to/my%20icon.png`).
     * 
     * - If `icon` is a #GThemedIcon with exactly one name and no fallbacks,
     *   the encoding is simply the name (such as `network-server`).
     */
    toString(): string | null
    /* Methods of Gio-2.0.Gio.LoadableIcon */
    /**
     * Loads a loadable icon. For the asynchronous version of this function,
     * see g_loadable_icon_load_async().
     */
    load(size: number, cancellable?: Gio.Cancellable | null): [ /* returnType */ Gio.InputStream, /* type */ string | null ]
    /**
     * Loads an icon asynchronously. To finish this function, see
     * g_loadable_icon_load_finish(). For the synchronous, blocking
     * version of this function, see g_loadable_icon_load().
     */
    loadAsync(size: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous icon load started in g_loadable_icon_load_async().
     */
    loadFinish(res: Gio.AsyncResult): [ /* returnType */ Gio.InputStream, /* type */ string | null ]
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
    /* Signals of Gdk-4.0.Gdk.Paintable */
    /**
     * Emitted when the contents of the `paintable` change.
     * 
     * Examples for such an event would be videos changing to the next frame or
     * the icon theme for an icon changing.
     */
    connect(sigName: "invalidate-contents", callback: (() => void)): number
    on(sigName: "invalidate-contents", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "invalidate-contents", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "invalidate-contents", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "invalidate-contents"): void
    /**
     * Emitted when the intrinsic size of the `paintable` changes.
     * 
     * This means the values reported by at least one of
     * [method`Gdk`.Paintable.get_intrinsic_width],
     * [method`Gdk`.Paintable.get_intrinsic_height] or
     * [method`Gdk`.Paintable.get_intrinsic_aspect_ratio]
     * has changed.
     * 
     * Examples for such an event would be a paintable displaying
     * the contents of a toplevel surface being resized.
     */
    connect(sigName: "invalidate-size", callback: (() => void)): number
    on(sigName: "invalidate-size", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "invalidate-size", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "invalidate-size", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "invalidate-size"): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Texture_ConstructProps)
    _init (config?: Texture_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static newForPixbuf(pixbuf: GdkPixbuf.Pixbuf): Texture
    static newFromBytes(bytes: any): Texture
    static newFromFile(file: Gio.File): Texture
    static newFromFilename(path: string): Texture
    static newFromResource(resourcePath: string): Texture
    /**
     * Returns a paintable that has the given intrinsic size and draws nothing.
     * 
     * This is often useful for implementing the
     * [vfunc`Gdk`.Paintable.get_current_image] virtual function
     * when the paintable is in an incomplete state (like a
     * [class`Gtk`.MediaStream] before receiving the first frame).
     */
    static newEmpty(intrinsicWidth: number, intrinsicHeight: number): Paintable
    /**
     * Deserializes a #GIcon previously serialized using g_icon_serialize().
     */
    static deserialize(value: GLib.Variant): Gio.Icon | null
    /**
     * Gets a hash for an icon.
     */
    static hash(icon: object): number
    /**
     * Generate a #GIcon instance from `str`. This function can fail if
     * `str` is not valid - see g_icon_to_string() for discussion.
     * 
     * If your application or library provides one or more #GIcon
     * implementations you need to ensure that each #GType is registered
     * with the type system prior to calling g_icon_new_for_string().
     */
    static newForString(str: string): Gio.Icon
    static $gtype: GObject.Type
}
class TouchEvent {
    /* Methods of Gdk-4.0.Gdk.TouchEvent */
    /**
     * Extracts whether a touch event is emulating a pointer event.
     */
    getEmulatingPointer(): boolean
    /* Methods of Gdk-4.0.Gdk.Event */
    /**
     * Returns the relative angle from `event1` to `event2`.
     * 
     * The relative angle is the angle between the X axis and the line
     * through both events' positions. The rotation direction for positive
     * angles is from the positive X axis towards the positive Y axis.
     * 
     * This assumes that both events have X/Y information.
     * If not, this function returns %FALSE.
     */
    getAngle(event2: Event): [ /* returnType */ boolean, /* angle */ number ]
    /**
     * Returns the point halfway between the events' positions.
     * 
     * This assumes that both events have X/Y information.
     * If not, this function returns %FALSE.
     */
    getCenter(event2: Event): [ /* returnType */ boolean, /* x */ number, /* y */ number ]
    /**
     * Returns the distance between the event locations.
     * 
     * This assumes that both events have X/Y information.
     * If not, this function returns %FALSE.
     */
    getDistance(event2: Event): [ /* returnType */ boolean, /* distance */ number ]
    /**
     * Extracts all axis values from an event.
     * 
     * To find out which axes are used, use [method`Gdk`.DeviceTool.get_axes]
     * on the device tool returned by [method`Gdk`.Event.get_device_tool].
     */
    getAxes(): [ /* returnType */ boolean, /* axes */ number[] ]
    /**
     * Extract the axis value for a particular axis use from
     * an event structure.
     * 
     * To find out which axes are used, use [method`Gdk`.DeviceTool.get_axes]
     * on the device tool returned by [method`Gdk`.Event.get_device_tool].
     */
    getAxis(axisUse: AxisUse): [ /* returnType */ boolean, /* value */ number ]
    /**
     * Returns the device of an event.
     */
    getDevice(): Device | null
    /**
     * Returns a `GdkDeviceTool` representing the tool that
     * caused the event.
     * 
     * If the was not generated by a device that supports
     * different tools (such as a tablet), this function will
     * return %NULL.
     * 
     * Note: the `GdkDeviceTool` will be constant during
     * the application lifetime, if settings must be stored
     * persistently across runs, see [method`Gdk`.DeviceTool.get_serial].
     */
    getDeviceTool(): DeviceTool | null
    /**
     * Retrieves the display associated to the `event`.
     */
    getDisplay(): Display | null
    /**
     * Retuns the event sequence to which the event belongs.
     * 
     * Related touch events are connected in a sequence. Other
     * events typically don't have event sequence information.
     */
    getEventSequence(): EventSequence
    /**
     * Retrieves the type of the event.
     */
    getEventType(): EventType
    /**
     * Retrieves the history of the device that `event` is for, as a list of
     * time and coordinates.
     * 
     * The history includes positions that are not delivered as separate events
     * to the application because they occurred in the same frame as `event`.
     * 
     * Note that only motion and scroll events record history, and motion
     * events do it only if one of the mouse buttons is down, or the device
     * has a tool.
     */
    getHistory(): TimeCoord[] | null
    /**
     * Returns the modifier state field of an event.
     */
    getModifierState(): ModifierType
    /**
     * Returns whether this event is an 'emulated' pointer event.
     * 
     * Emulated pointer events typically originate from a touch events.
     */
    getPointerEmulated(): boolean
    /**
     * Extract the event surface relative x/y coordinates from an event.
     */
    getPosition(): [ /* returnType */ boolean, /* x */ number, /* y */ number ]
    /**
     * Returns the seat that originated the event.
     */
    getSeat(): Seat | null
    /**
     * Extracts the surface associated with an event.
     */
    getSurface(): Surface | null
    /**
     * Returns the timestamp of `event`.
     * 
     * Not all events have timestamps. In that case, this function
     * returns %GDK_CURRENT_TIME.
     */
    getTime(): number
    /**
     * Increase the ref count of `event`.
     */
    ref(): Event
    /**
     * Returns whether a `GdkEvent` should trigger a context menu,
     * according to platform conventions.
     * 
     * The right mouse button typically triggers context menus.
     * 
     * This function should always be used instead of simply checking for
     * event->button == %GDK_BUTTON_SECONDARY.
     */
    triggersContextMenu(): boolean
    /**
     * Decrease the ref count of `event`.
     * 
     * If the last reference is dropped, the structure is freed.
     */
    unref(): void
    static name: string
}
class TouchpadEvent {
    /* Methods of Gdk-4.0.Gdk.TouchpadEvent */
    /**
     * Extracts delta information from a touchpad event.
     */
    getDeltas(): [ /* dx */ number, /* dy */ number ]
    /**
     * Extracts the touchpad gesture phase from a touchpad event.
     */
    getGesturePhase(): TouchpadGesturePhase
    /**
     * Extracts the number of fingers from a touchpad event.
     */
    getNFingers(): number
    /**
     * Extracts the angle delta from a touchpad pinch event.
     */
    getPinchAngleDelta(): number
    /**
     * Extracts the scale from a touchpad pinch event.
     */
    getPinchScale(): number
    /* Methods of Gdk-4.0.Gdk.Event */
    /**
     * Returns the relative angle from `event1` to `event2`.
     * 
     * The relative angle is the angle between the X axis and the line
     * through both events' positions. The rotation direction for positive
     * angles is from the positive X axis towards the positive Y axis.
     * 
     * This assumes that both events have X/Y information.
     * If not, this function returns %FALSE.
     */
    getAngle(event2: Event): [ /* returnType */ boolean, /* angle */ number ]
    /**
     * Returns the point halfway between the events' positions.
     * 
     * This assumes that both events have X/Y information.
     * If not, this function returns %FALSE.
     */
    getCenter(event2: Event): [ /* returnType */ boolean, /* x */ number, /* y */ number ]
    /**
     * Returns the distance between the event locations.
     * 
     * This assumes that both events have X/Y information.
     * If not, this function returns %FALSE.
     */
    getDistance(event2: Event): [ /* returnType */ boolean, /* distance */ number ]
    /**
     * Extracts all axis values from an event.
     * 
     * To find out which axes are used, use [method`Gdk`.DeviceTool.get_axes]
     * on the device tool returned by [method`Gdk`.Event.get_device_tool].
     */
    getAxes(): [ /* returnType */ boolean, /* axes */ number[] ]
    /**
     * Extract the axis value for a particular axis use from
     * an event structure.
     * 
     * To find out which axes are used, use [method`Gdk`.DeviceTool.get_axes]
     * on the device tool returned by [method`Gdk`.Event.get_device_tool].
     */
    getAxis(axisUse: AxisUse): [ /* returnType */ boolean, /* value */ number ]
    /**
     * Returns the device of an event.
     */
    getDevice(): Device | null
    /**
     * Returns a `GdkDeviceTool` representing the tool that
     * caused the event.
     * 
     * If the was not generated by a device that supports
     * different tools (such as a tablet), this function will
     * return %NULL.
     * 
     * Note: the `GdkDeviceTool` will be constant during
     * the application lifetime, if settings must be stored
     * persistently across runs, see [method`Gdk`.DeviceTool.get_serial].
     */
    getDeviceTool(): DeviceTool | null
    /**
     * Retrieves the display associated to the `event`.
     */
    getDisplay(): Display | null
    /**
     * Retuns the event sequence to which the event belongs.
     * 
     * Related touch events are connected in a sequence. Other
     * events typically don't have event sequence information.
     */
    getEventSequence(): EventSequence
    /**
     * Retrieves the type of the event.
     */
    getEventType(): EventType
    /**
     * Retrieves the history of the device that `event` is for, as a list of
     * time and coordinates.
     * 
     * The history includes positions that are not delivered as separate events
     * to the application because they occurred in the same frame as `event`.
     * 
     * Note that only motion and scroll events record history, and motion
     * events do it only if one of the mouse buttons is down, or the device
     * has a tool.
     */
    getHistory(): TimeCoord[] | null
    /**
     * Returns the modifier state field of an event.
     */
    getModifierState(): ModifierType
    /**
     * Returns whether this event is an 'emulated' pointer event.
     * 
     * Emulated pointer events typically originate from a touch events.
     */
    getPointerEmulated(): boolean
    /**
     * Extract the event surface relative x/y coordinates from an event.
     */
    getPosition(): [ /* returnType */ boolean, /* x */ number, /* y */ number ]
    /**
     * Returns the seat that originated the event.
     */
    getSeat(): Seat | null
    /**
     * Extracts the surface associated with an event.
     */
    getSurface(): Surface | null
    /**
     * Returns the timestamp of `event`.
     * 
     * Not all events have timestamps. In that case, this function
     * returns %GDK_CURRENT_TIME.
     */
    getTime(): number
    /**
     * Increase the ref count of `event`.
     */
    ref(): Event
    /**
     * Returns whether a `GdkEvent` should trigger a context menu,
     * according to platform conventions.
     * 
     * The right mouse button typically triggers context menus.
     * 
     * This function should always be used instead of simply checking for
     * event->button == %GDK_BUTTON_SECONDARY.
     */
    triggersContextMenu(): boolean
    /**
     * Decrease the ref count of `event`.
     * 
     * If the last reference is dropped, the structure is freed.
     */
    unref(): void
    static name: string
}
interface VulkanContext_ConstructProps extends DrawContext_ConstructProps {
}
class VulkanContext {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gdk-4.0.Gdk.DrawContext */
    /**
     * Indicates that you are beginning the process of redrawing `region`
     * on the `context'`s surface.
     * 
     * Calling this function begins a drawing operation using `context` on the
     * surface that `context` was created from. The actual requirements and
     * guarantees for the drawing operation vary for different implementations
     * of drawing, so a [class`Gdk`.CairoContext] and a [class`Gdk`.GLContext]
     * need to be treated differently.
     * 
     * A call to this function is a requirement for drawing and must be
     * followed by a call to [method`Gdk`.DrawContext.end_frame], which will
     * complete the drawing operation and ensure the contents become visible
     * on screen.
     * 
     * Note that the `region` passed to this function is the minimum region that
     * needs to be drawn and depending on implementation, windowing system and
     * hardware in use, it might be necessary to draw a larger region. Drawing
     * implementation must use [method`Gdk`.DrawContext.get_frame_region] to
     * query the region that must be drawn.
     * 
     * When using GTK, the widget system automatically places calls to
     * gdk_draw_context_begin_frame() and gdk_draw_context_end_frame() via the
     * use of [class`Gsk`.Renderer]s, so application code does not need to call
     * these functions explicitly.
     */
    beginFrame(region: cairo.Region): void
    /**
     * Ends a drawing operation started with gdk_draw_context_begin_frame().
     * 
     * This makes the drawing available on screen.
     * See [method`Gdk`.DrawContext.begin_frame] for more details about drawing.
     * 
     * When using a [class`Gdk`.GLContext], this function may call `glFlush()`
     * implicitly before returning; it is not recommended to call `glFlush()`
     * explicitly before calling this function.
     */
    endFrame(): void
    /**
     * Retrieves the `GdkDisplay` the `context` is created for
     */
    getDisplay(): Display | null
    /**
     * Retrieves the region that is currently being repainted.
     * 
     * After a call to [method`Gdk`.DrawContext.begin_frame] this function will
     * return a union of the region passed to that function and the area of the
     * surface that the `context` determined needs to be repainted.
     * 
     * If `context` is not in between calls to [method`Gdk`.DrawContext.begin_frame]
     * and [method`Gdk`.DrawContext.end_frame], %NULL will be returned.
     */
    getFrameRegion(): cairo.Region | null
    /**
     * Retrieves the surface that `context` is bound to.
     */
    getSurface(): Surface | null
    /**
     * Returns %TRUE if `context` is in the process of drawing to its surface.
     * 
     * This is the case between calls to [method`Gdk`.DrawContext.begin_frame]
     * and [method`Gdk`.DrawContext.end_frame]. In this situation, drawing commands
     * may be effecting the contents of the `context'`s surface.
     */
    isInFrame(): boolean
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
    /* Methods of Gio-2.0.Gio.Initable */
    /**
     * Initializes the object implementing the interface.
     * 
     * This method is intended for language bindings. If writing in C,
     * g_initable_new() should typically be used instead.
     * 
     * The object must be initialized before any real use after initial
     * construction, either with this function or g_async_initable_init_async().
     * 
     * Implementations may also support cancellation. If `cancellable` is not %NULL,
     * then initialization can be cancelled by triggering the cancellable object
     * from another thread. If the operation was cancelled, the error
     * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL and
     * the object doesn't support cancellable initialization the error
     * %G_IO_ERROR_NOT_SUPPORTED will be returned.
     * 
     * If the object is not initialized, or initialization returns with an
     * error, then all operations on the object except g_object_ref() and
     * g_object_unref() are considered to be invalid, and have undefined
     * behaviour. See the [introduction][ginitable] for more details.
     * 
     * Callers should not assume that a class which implements #GInitable can be
     * initialized multiple times, unless the class explicitly documents itself as
     * supporting this. Generally, a class’ implementation of init() can assume
     * (and assert) that it will only be called once. Previously, this documentation
     * recommended all #GInitable implementations should be idempotent; that
     * recommendation was relaxed in GLib 2.54.
     * 
     * If a class explicitly supports being initialized multiple times, it is
     * recommended that the method is idempotent: multiple calls with the same
     * arguments should return the same results. Only the first call initializes
     * the object; further calls return the result of the first call.
     * 
     * One reason why a class might need to support idempotent initialization is if
     * it is designed to be used via the singleton pattern, with a
     * #GObjectClass.constructor that sometimes returns an existing instance.
     * In this pattern, a caller would expect to be able to call g_initable_init()
     * on the result of g_object_new(), regardless of whether it is in fact a new
     * instance.
     */
    init(cancellable?: Gio.Cancellable | null): boolean
    /* Signals of Gdk-4.0.Gdk.VulkanContext */
    /**
     * Emitted when the images managed by this context have changed.
     * 
     * Usually this means that the swapchain had to be recreated,
     * for example in response to a change of the surface size.
     */
    connect(sigName: "images-updated", callback: (() => void)): number
    on(sigName: "images-updated", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "images-updated", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "images-updated", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "images-updated"): void
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
    constructor (config?: VulkanContext_ConstructProps)
    _init (config?: VulkanContext_ConstructProps): void
    /* Static methods and pseudo-constructors */
    /**
     * Helper function for constructing #GInitable object. This is
     * similar to g_object_newv() but also initializes the object
     * and returns %NULL, setting an error on failure.
     */
    static newv(objectType: GObject.Type, parameters: GObject.Parameter[], cancellable?: Gio.Cancellable | null): GObject.Object
    static $gtype: GObject.Type
}
class ContentFormats {
    /* Methods of Gdk-4.0.Gdk.ContentFormats */
    /**
     * Checks if a given `GType` is part of the given `formats`.
     */
    containGtype(type: GObject.Type): boolean
    /**
     * Checks if a given mime type is part of the given `formats`.
     */
    containMimeType(mimeType: string): boolean
    /**
     * Gets the `GType`s included in `formats`.
     * 
     * Note that `formats` may not contain any `GType`s, in particular when
     * they are empty. In that case %NULL will be returned.
     */
    getGtypes(): GObject.Type[] | null
    /**
     * Gets the mime types included in `formats`.
     * 
     * Note that `formats` may not contain any mime types, in particular
     * when they are empty. In that case %NULL will be returned.
     */
    getMimeTypes(): string[] | null
    /**
     * Checks if `first` and `second` have any matching formats.
     */
    match(second: ContentFormats): boolean
    /**
     * Finds the first `GType` from `first` that is also contained
     * in `second`.
     * 
     * If no matching `GType` is found, %G_TYPE_INVALID is returned.
     */
    matchGtype(second: ContentFormats): GObject.Type
    /**
     * Finds the first mime type from `first` that is also contained
     * in `second`.
     * 
     * If no matching mime type is found, %NULL is returned.
     */
    matchMimeType(second: ContentFormats): string | null
    /**
     * Prints the given `formats` into a string for human consumption.
     * 
     * The result of this function can later be parsed with
     * [func`Gdk`.ContentFormats.parse].
     */
    print(string: GLib.String): void
    /**
     * Increases the reference count of a `GdkContentFormats` by one.
     */
    ref(): ContentFormats
    /**
     * Prints the given `formats` into a human-readable string.
     * 
     * The resulting string can be parsed with [func`Gdk`.ContentFormats.parse].
     * 
     * This is a small wrapper around [method`Gdk`.ContentFormats.print]
     * to help when debugging.
     */
    toString(): string
    /**
     * Append all missing types from `second` to `first,` in the order
     * they had in `second`.
     */
    union(second: ContentFormats): ContentFormats
    /**
     * Add GTypes for mime types in `formats` for which deserializers are
     * registered.
     */
    unionDeserializeGtypes(): ContentFormats
    /**
     * Add mime types for GTypes in `formats` for which deserializers are
     * registered.
     */
    unionDeserializeMimeTypes(): ContentFormats
    /**
     * Add GTypes for the mime types in `formats` for which serializers are
     * registered.
     */
    unionSerializeGtypes(): ContentFormats
    /**
     * Add mime types for GTypes in `formats` for which serializers are
     * registered.
     */
    unionSerializeMimeTypes(): ContentFormats
    /**
     * Decreases the reference count of a `GdkContentFormats` by one.
     * 
     * If the resulting reference count is zero, frees the formats.
     */
    unref(): void
    static name: string
    static new(mimeTypes: string[] | null): ContentFormats
    constructor(mimeTypes: string[] | null)
    /* Static methods and pseudo-constructors */
    static new(mimeTypes: string[] | null): ContentFormats
    static newForGtype(type: GObject.Type): ContentFormats
    /**
     * Parses the given `string` into `GdkContentFormats` and
     * returns the formats.
     * 
     * Strings printed via [method`Gdk`.ContentFormats.to_string]
     * can be read in again successfully using this function.
     * 
     * If `string` does not describe valid content formats, %NULL
     * is returned.
     */
    static parse(string: string): ContentFormats | null
}
class ContentFormatsBuilder {
    /* Methods of Gdk-4.0.Gdk.ContentFormatsBuilder */
    /**
     * Appends all formats from `formats` to `builder,` skipping those that
     * already exist.
     */
    addFormats(formats: ContentFormats): void
    /**
     * Appends `type` to `builder` if it has not already been added.
     */
    addGtype(type: GObject.Type): void
    /**
     * Appends `mime_type` to `builder` if it has not already been added.
     */
    addMimeType(mimeType: string): void
    /**
     * Acquires a reference on the given `builder`.
     * 
     * This function is intended primarily for bindings.
     * `GdkContentFormatsBuilder` objects should not be kept around.
     */
    ref(): ContentFormatsBuilder
    /**
     * Creates a new `GdkContentFormats` from the given `builder`.
     * 
     * The given `GdkContentFormatsBuilder` is reset once this function returns;
     * you cannot call this function multiple times on the same `builder` instance.
     * 
     * This function is intended primarily for bindings. C code should use
     * [method`Gdk`.ContentFormatsBuilder.free_to_formats].
     */
    toFormats(): ContentFormats
    /**
     * Releases a reference on the given `builder`.
     */
    unref(): void
    static name: string
    static new(): ContentFormatsBuilder
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): ContentFormatsBuilder
}
abstract class ContentProviderClass {
    /* Fields of Gdk-4.0.Gdk.ContentProviderClass */
    readonly parentClass: GObject.ObjectClass
    readonly contentChanged: (provider: ContentProvider) => void
    readonly attachClipboard: (provider: ContentProvider, clipboard: Clipboard) => void
    readonly detachClipboard: (provider: ContentProvider, clipboard: Clipboard) => void
    readonly refFormats: (provider: ContentProvider) => ContentFormats
    readonly refStorableFormats: (provider: ContentProvider) => ContentFormats
    readonly writeMimeTypeAsync: (provider: ContentProvider, mimeType: string, stream: Gio.OutputStream, ioPriority: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback | null) => void
    readonly writeMimeTypeFinish: (provider: ContentProvider, result: Gio.AsyncResult) => boolean
    readonly getValue: (provider: ContentProvider) => [ /* returnType */ boolean, /* value */ any ]
    static name: string
}
abstract class DevicePadInterface {
    static name: string
}
abstract class DragSurfaceInterface {
    static name: string
}
class EventSequence {
    static name: string
}
class FileList {
    /* Methods of Gdk-4.0.Gdk.FileList */
    /**
     * Retrieves the list of files inside a `GdkFileList`.
     * 
     * This function is meant for language bindings.
     */
    getFiles(): Gio.File[]
    static name: string
}
abstract class FrameClockClass {
    static name: string
}
class FrameClockPrivate {
    static name: string
}
class FrameTimings {
    /* Methods of Gdk-4.0.Gdk.FrameTimings */
    /**
     * Returns whether `timings` are complete.
     * 
     * The timing information in a `GdkFrameTimings` is filled in
     * incrementally as the frame as drawn and passed off to the
     * window system for processing and display to the user. The
     * accessor functions for `GdkFrameTimings` can return 0 to
     * indicate an unavailable value for two reasons: either because
     * the information is not yet available, or because it isn't
     * available at all.
     * 
     * Once this function returns %TRUE for a frame, you can be
     * certain that no further values will become available and be
     * stored in the `GdkFrameTimings`.
     */
    getComplete(): boolean
    /**
     * Gets the frame counter value of the `GdkFrameClock` when
     * this frame was drawn.
     */
    getFrameCounter(): number
    /**
     * Returns the frame time for the frame.
     * 
     * This is the time value that is typically used to time
     * animations for the frame. See [method`Gdk`.FrameClock.get_frame_time].
     */
    getFrameTime(): number
    /**
     * Gets the predicted time at which this frame will be displayed.
     * 
     * Although no predicted time may be available, if one is available,
     * it will be available while the frame is being generated, in contrast
     * to [method`Gdk`.FrameTimings.get_presentation_time], which is only
     * available after the frame has been presented.
     * 
     * In general, if you are simply animating, you should use
     * [method`Gdk`.FrameClock.get_frame_time] rather than this function,
     * but this function is useful for applications that want exact control
     * over latency. For example, a movie player may want this information
     * for Audio/Video synchronization.
     */
    getPredictedPresentationTime(): number
    /**
     * Reurns the presentation time.
     * 
     * This is the time at which the frame became visible to the user.
     */
    getPresentationTime(): number
    /**
     * Gets the natural interval between presentation times for
     * the display that this frame was displayed on.
     * 
     * Frame presentation usually happens during the “vertical
     * blanking interval”.
     */
    getRefreshInterval(): number
    /**
     * Increases the reference count of `timings`.
     */
    ref(): FrameTimings
    /**
     * Decreases the reference count of `timings`.
     * 
     * If `timings` is no longer referenced, it will be freed.
     */
    unref(): void
    static name: string
}
abstract class GLTextureClass {
    static name: string
}
class KeymapKey {
    /* Fields of Gdk-4.0.Gdk.KeymapKey */
    /**
     * the hardware keycode. This is an identifying number for a
     *   physical key.
     */
    readonly keycode: number
    /**
     * indicates movement in a horizontal direction. Usually groups are used
     *   for two different languages. In group 0, a key might have two English
     *   characters, and in group 1 it might have two Hebrew characters. The Hebrew
     *   characters will be printed on the key next to the English characters.
     */
    readonly group: number
    /**
     * indicates which symbol on the key will be used, in a vertical direction.
     *   So on a standard US keyboard, the key with the number “1” on it also has the
     *   exclamation point ("!") character on it. The level indicates whether to use
     *   the “1” or the “!” symbol. The letter keys are considered to have a lowercase
     *   letter at level 0, and an uppercase letter at level 1, though only the
     *   uppercase letter is printed.
     */
    readonly level: number
    static name: string
}
abstract class MemoryTextureClass {
    static name: string
}
abstract class MonitorClass {
    static name: string
}
abstract class PaintableInterface {
    /* Fields of Gdk-4.0.Gdk.PaintableInterface */
    readonly snapshot: (paintable: Paintable, snapshot: Snapshot, width: number, height: number) => void
    readonly getCurrentImage: (paintable: Paintable) => Paintable
    readonly getFlags: (paintable: Paintable) => PaintableFlags
    readonly getIntrinsicWidth: (paintable: Paintable) => number
    readonly getIntrinsicHeight: (paintable: Paintable) => number
    readonly getIntrinsicAspectRatio: (paintable: Paintable) => number
    static name: string
}
abstract class PopupInterface {
    static name: string
}
class PopupLayout {
    /* Methods of Gdk-4.0.Gdk.PopupLayout */
    /**
     * Makes a copy of `layout`.
     */
    copy(): PopupLayout
    /**
     * Check whether `layout` and `other` has identical layout properties.
     */
    equal(other: PopupLayout): boolean
    /**
     * Get the `GdkAnchorHints`.
     */
    getAnchorHints(): AnchorHints
    /**
     * Get the anchor rectangle.
     */
    getAnchorRect(): Rectangle
    /**
     * Retrieves the offset for the anchor rectangle.
     */
    getOffset(): [ /* dx */ number, /* dy */ number ]
    /**
     * Returns the anchor position on the anchor rectangle.
     */
    getRectAnchor(): Gravity
    /**
     * Obtains the shadow widths of this layout.
     */
    getShadowWidth(): [ /* left */ number, /* right */ number, /* top */ number, /* bottom */ number ]
    /**
     * Returns the anchor position on the popup surface.
     */
    getSurfaceAnchor(): Gravity
    /**
     * Increases the reference count of `value`.
     */
    ref(): PopupLayout
    /**
     * Set new anchor hints.
     * 
     * The set `anchor_hints` determines how `surface` will be moved
     * if the anchor points cause it to move off-screen. For example,
     * %GDK_ANCHOR_FLIP_X will replace %GDK_GRAVITY_NORTH_WEST with
     * %GDK_GRAVITY_NORTH_EAST and vice versa if `surface` extends
     * beyond the left or right edges of the monitor.
     */
    setAnchorHints(anchorHints: AnchorHints): void
    /**
     * Set the anchor rectangle.
     */
    setAnchorRect(anchorRect: Rectangle): void
    /**
     * Offset the position of the anchor rectangle with the given delta.
     */
    setOffset(dx: number, dy: number): void
    /**
     * Set the anchor on the anchor rectangle.
     */
    setRectAnchor(anchor: Gravity): void
    /**
     * Sets the shadow width of the popup.
     * 
     * The shadow width corresponds to the part of the computed
     * surface size that would consist of the shadow margin
     * surrounding the window, would there be any.
     */
    setShadowWidth(left: number, right: number, top: number, bottom: number): void
    /**
     * Set the anchor on the popup surface.
     */
    setSurfaceAnchor(anchor: Gravity): void
    /**
     * Decreases the reference count of `value`.
     */
    unref(): void
    static name: string
    static new(anchorRect: Rectangle, rectAnchor: Gravity, surfaceAnchor: Gravity): PopupLayout
    constructor(anchorRect: Rectangle, rectAnchor: Gravity, surfaceAnchor: Gravity)
    /* Static methods and pseudo-constructors */
    static new(anchorRect: Rectangle, rectAnchor: Gravity, surfaceAnchor: Gravity): PopupLayout
}
class RGBA {
    /* Fields of Gdk-4.0.Gdk.RGBA */
    /**
     * The intensity of the red channel from 0.0 to 1.0 inclusive
     */
    readonly red: number
    /**
     * The intensity of the green channel from 0.0 to 1.0 inclusive
     */
    readonly green: number
    /**
     * The intensity of the blue channel from 0.0 to 1.0 inclusive
     */
    readonly blue: number
    /**
     * The opacity of the color from 0.0 for completely translucent to
     *   1.0 for opaque
     */
    readonly alpha: number
    /* Methods of Gdk-4.0.Gdk.RGBA */
    /**
     * Makes a copy of a `GdkRGBA`.
     * 
     * The result must be freed through [method`Gdk`.RGBA.free].
     */
    copy(): RGBA
    /**
     * Compares two `GdkRGBA` colors.
     */
    equal(p2: RGBA): boolean
    /**
     * Frees a `GdkRGBA`.
     */
    free(): void
    /**
     * A hash function suitable for using for a hash
     * table that stores `GdkRGBA`s.
     */
    hash(): number
    /**
     * Checks if an `rgba` value is transparent.
     * 
     * That is, drawing with the value would not produce any change.
     */
    isClear(): boolean
    /**
     * Checks if an `rgba` value is opaque.
     * 
     * That is, drawing with the value will not retain any results
     * from previous contents.
     */
    isOpaque(): boolean
    /**
     * Parses a textual representation of a color.
     * 
     * The string can be either one of:
     * 
     * - A standard name (Taken from the Css specification).
     * - A hexadecimal value in the form “\#rgb”, “\#rrggbb”,
     *   “\#rrrgggbbb” or ”\#rrrrggggbbbb”
     * - A hexadecimal value in the form “\#rgba”, “\#rrggbbaa”,
     *   or ”\#rrrrggggbbbbaaaa”
     * - A RGB color in the form “rgb(r,g,b)” (In this case the color
     *   will have full opacity)
     * - A RGBA color in the form “rgba(r,g,b,a)”
     * 
     * Where “r”, “g”, “b” and “a” are respectively the red, green,
     * blue and alpha color values. In the last two cases, “r”, “g”,
     * and “b” are either integers in the range 0 to 255 or percentage
     * values in the range 0% to 100%, and a is a floating point value
     * in the range 0 to 1.
     */
    parse(spec: string): boolean
    /**
     * Returns a textual specification of `rgba` in the form
     * `rgb(r,g,b)` or `rgba(r,g,b,a)`, where “r”, “g”, “b” and
     * “a” represent the red, green, blue and alpha values
     * respectively. “r”, “g”, and “b” are represented as integers
     * in the range 0 to 255, and “a” is represented as a floating
     * point value in the range 0 to 1.
     * 
     * These string forms are string forms that are supported by
     * the CSS3 colors module, and can be parsed by [method`Gdk`.RGBA.parse].
     * 
     * Note that this string representation may lose some precision,
     * since “r”, “g” and “b” are represented as 8-bit integers. If
     * this is a concern, you should use a different representation.
     */
    toString(): string
    static name: string
}
class Rectangle {
    /* Fields of Gdk-4.0.Gdk.Rectangle */
    /**
     * the x coordinate of the top left corner
     */
    readonly x: number
    /**
     * the y coordinate of the top left corner
     */
    readonly y: number
    /**
     * the width of the rectangle
     */
    readonly width: number
    /**
     * the height of the rectangle
     */
    readonly height: number
    /* Methods of Gdk-4.0.Gdk.Rectangle */
    /**
     * Returns %TRUE if `rect` contains the point described by `x` and `y`.
     */
    containsPoint(x: number, y: number): boolean
    /**
     * Checks if the two given rectangles are equal.
     */
    equal(rect2: Rectangle): boolean
    /**
     * Calculates the intersection of two rectangles.
     * 
     * It is allowed for `dest` to be the same as either `src1` or `src2`.
     * If the rectangles do not intersect, `dest’`s width and height is set
     * to 0 and its x and y values are undefined. If you are only interested
     * in whether the rectangles intersect, but not in the intersecting area
     * itself, pass %NULL for `dest`.
     */
    intersect(src2: Rectangle): [ /* returnType */ boolean, /* dest */ Rectangle | null ]
    /**
     * Calculates the union of two rectangles.
     * 
     * The union of rectangles `src1` and `src2` is the smallest rectangle which
     * includes both `src1` and `src2` within it. It is allowed for `dest` to be
     * the same as either `src1` or `src2`.
     * 
     * Note that this function does not ignore 'empty' rectangles (ie. with
     * zero width or height).
     */
    union(src2: Rectangle): /* dest */ Rectangle
    static name: string
}
abstract class SnapshotClass {
    static name: string
}
abstract class SurfaceClass {
    static name: string
}
abstract class TextureClass {
    static name: string
}
class TimeCoord {
    /* Fields of Gdk-4.0.Gdk.TimeCoord */
    /**
     * The timestamp for this event
     */
    readonly time: number
    /**
     * Flags indicating what axes are present
     */
    readonly flags: AxisFlags
    /**
     * axis values
     */
    readonly axes: number[]
    static name: string
}
abstract class ToplevelInterface {
    static name: string
}
class ToplevelLayout {
    /* Methods of Gdk-4.0.Gdk.ToplevelLayout */
    /**
     * Create a new `GdkToplevelLayout` and copy the contents of `layout` into it.
     */
    copy(): ToplevelLayout
    /**
     * Check whether `layout` and `other` has identical layout properties.
     */
    equal(other: ToplevelLayout): boolean
    /**
     * If the layout specifies whether to the toplevel should go fullscreen,
     * the value pointed to by `fullscreen` is set to %TRUE if it should go
     * fullscreen, or %FALSE, if it should go unfullscreen.
     */
    getFullscreen(): [ /* returnType */ boolean, /* fullscreen */ boolean ]
    /**
     * Returns the monitor that the layout is fullscreening
     * the surface on.
     */
    getFullscreenMonitor(): Monitor | null
    /**
     * If the layout specifies whether to the toplevel should go maximized,
     * the value pointed to by `maximized` is set to %TRUE if it should go
     * fullscreen, or %FALSE, if it should go unmaximized.
     */
    getMaximized(): [ /* returnType */ boolean, /* maximized */ boolean ]
    /**
     * Returns whether the layout should allow the user
     * to resize the surface.
     */
    getResizable(): boolean
    /**
     * Increases the reference count of `layout`.
     */
    ref(): ToplevelLayout
    /**
     * Sets whether the layout should cause the surface
     * to be fullscreen when presented.
     */
    setFullscreen(fullscreen: boolean, monitor?: Monitor | null): void
    /**
     * Sets whether the layout should cause the surface
     * to be maximized when presented.
     */
    setMaximized(maximized: boolean): void
    /**
     * Sets whether the layout should allow the user
     * to resize the surface after it has been presented.
     */
    setResizable(resizable: boolean): void
    /**
     * Decreases the reference count of `layout`.
     */
    unref(): void
    static name: string
    static new(): ToplevelLayout
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): ToplevelLayout
}
class ToplevelSize {
    /* Methods of Gdk-4.0.Gdk.ToplevelSize */
    /**
     * Retrieves the bounds the toplevel is placed within.
     * 
     * The bounds represent the largest size a toplevel may have while still being
     * able to fit within some type of boundary. Depending on the backend, this may
     * be equivalent to the dimensions of the work area or the monitor on which the
     * window is being presented on, or something else that limits the way a
     * toplevel can be presented.
     */
    getBounds(): [ /* boundsWidth */ number, /* boundsHeight */ number ]
    /**
     * Sets the minimum size of the toplevel.
     * 
     * The minimum size corresponds to the limitations the toplevel can be shrunk
     * to, without resulting in incorrect painting. A user of a `GdkToplevel` should
     * calculate these given both the existing size, and the bounds retrieved from
     * the `GdkToplevelSize` object.
     * 
     * The minimum size should be within the bounds (see
     * [method`Gdk`.ToplevelSize.get_bounds]).
     */
    setMinSize(minWidth: number, minHeight: number): void
    /**
     * Sets the shadows size of the toplevel.
     * 
     * The shadow width corresponds to the part of the computed surface size
     * that would consist of the shadow margin surrounding the window, would
     * there be any.
     */
    setShadowWidth(left: number, right: number, top: number, bottom: number): void
    /**
     * Sets the size the toplevel prefers to be resized to.
     * 
     * The size should be within the bounds (see
     * [method`Gdk`.ToplevelSize.get_bounds]). The set size should
     * be considered as a hint, and should not be assumed to be
     * respected by the windowing system, or backend.
     */
    setSize(width: number, height: number): void
    static name: string
}
}
export default Gdk;