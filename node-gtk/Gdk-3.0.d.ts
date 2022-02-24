/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Gdk-3.0
 */

import type cairo from './cairo-1.0';
import type Pango from './Pango-1.0';
import type HarfBuzz from './HarfBuzz-0.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type Gio from './Gio-2.0';
import type GdkPixbuf from './GdkPixbuf-2.0';
import type GModule from './GModule-2.0';

export namespace Gdk {

/**
 * An enumeration describing the way in which a device
 * axis (valuator) maps onto the predefined valuator
 * types that GTK+ understands.
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
     * the axis is used for pen/tablet distance information. (Since: 3.22)
     */
    DISTANCE,
    /**
     * the axis is used for pen rotation information. (Since: 3.22)
     */
    ROTATION,
    /**
     * the axis is used for pen slider information. (Since: 3.22)
     */
    SLIDER,
    /**
     * a constant equal to the numerically highest axis value.
     */
    LAST,
}
/**
 * A set of values describing the possible byte-orders
 * for storing pixel values in memory.
 */
enum ByteOrder {
    /**
     * The values are stored with the least-significant byte
     *   first. For instance, the 32-bit value 0xffeecc would be stored
     *   in memory as 0xcc, 0xee, 0xff, 0x00.
     */
    LSB_FIRST,
    /**
     * The values are stored with the most-significant byte
     *   first. For instance, the 32-bit value 0xffeecc would be stored
     *   in memory as 0x00, 0xff, 0xee, 0xcc.
     */
    MSB_FIRST,
}
/**
 * Specifies the crossing mode for #GdkEventCrossing.
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
     * crossing because a GTK+ grab is activated.
     */
    GTK_GRAB,
    /**
     * crossing because a GTK+ grab is deactivated.
     */
    GTK_UNGRAB,
    /**
     * crossing because a GTK+ widget changed
     *   state (e.g. sensitivity).
     */
    STATE_CHANGED,
    /**
     * crossing because a touch sequence has begun,
     *   this event is synthetic as the pointer might have not left the window.
     */
    TOUCH_BEGIN,
    /**
     * crossing because a touch sequence has ended,
     *   this event is synthetic as the pointer might have not left the window.
     */
    TOUCH_END,
    /**
     * crossing because of a device switch (i.e.
     *   a mouse taking control of the pointer after a touch device), this event
     *   is synthetic as the pointer didn’t leave the window.
     */
    DEVICE_SWITCH,
}
/**
 * Predefined cursors.
 * 
 * Note that these IDs are directly taken from the X cursor font, and many
 * of these cursors are either not useful, or are not available on other platforms.
 * 
 * The recommended way to create cursors is to use gdk_cursor_new_from_name().
 */
enum CursorType {
    /**
     * ![](X_cursor.png)
     */
    X_CURSOR,
    /**
     * ![](arrow.png)
     */
    ARROW,
    /**
     * ![](based_arrow_down.png)
     */
    BASED_ARROW_DOWN,
    /**
     * ![](based_arrow_up.png)
     */
    BASED_ARROW_UP,
    /**
     * ![](boat.png)
     */
    BOAT,
    /**
     * ![](bogosity.png)
     */
    BOGOSITY,
    /**
     * ![](bottom_left_corner.png)
     */
    BOTTOM_LEFT_CORNER,
    /**
     * ![](bottom_right_corner.png)
     */
    BOTTOM_RIGHT_CORNER,
    /**
     * ![](bottom_side.png)
     */
    BOTTOM_SIDE,
    /**
     * ![](bottom_tee.png)
     */
    BOTTOM_TEE,
    /**
     * ![](box_spiral.png)
     */
    BOX_SPIRAL,
    /**
     * ![](center_ptr.png)
     */
    CENTER_PTR,
    /**
     * ![](circle.png)
     */
    CIRCLE,
    /**
     * ![](clock.png)
     */
    CLOCK,
    /**
     * ![](coffee_mug.png)
     */
    COFFEE_MUG,
    /**
     * ![](cross.png)
     */
    CROSS,
    /**
     * ![](cross_reverse.png)
     */
    CROSS_REVERSE,
    /**
     * ![](crosshair.png)
     */
    CROSSHAIR,
    /**
     * ![](diamond_cross.png)
     */
    DIAMOND_CROSS,
    /**
     * ![](dot.png)
     */
    DOT,
    /**
     * ![](dotbox.png)
     */
    DOTBOX,
    /**
     * ![](double_arrow.png)
     */
    DOUBLE_ARROW,
    /**
     * ![](draft_large.png)
     */
    DRAFT_LARGE,
    /**
     * ![](draft_small.png)
     */
    DRAFT_SMALL,
    /**
     * ![](draped_box.png)
     */
    DRAPED_BOX,
    /**
     * ![](exchange.png)
     */
    EXCHANGE,
    /**
     * ![](fleur.png)
     */
    FLEUR,
    /**
     * ![](gobbler.png)
     */
    GOBBLER,
    /**
     * ![](gumby.png)
     */
    GUMBY,
    /**
     * ![](hand1.png)
     */
    HAND1,
    /**
     * ![](hand2.png)
     */
    HAND2,
    /**
     * ![](heart.png)
     */
    HEART,
    /**
     * ![](icon.png)
     */
    ICON,
    /**
     * ![](iron_cross.png)
     */
    IRON_CROSS,
    /**
     * ![](left_ptr.png)
     */
    LEFT_PTR,
    /**
     * ![](left_side.png)
     */
    LEFT_SIDE,
    /**
     * ![](left_tee.png)
     */
    LEFT_TEE,
    /**
     * ![](leftbutton.png)
     */
    LEFTBUTTON,
    /**
     * ![](ll_angle.png)
     */
    LL_ANGLE,
    /**
     * ![](lr_angle.png)
     */
    LR_ANGLE,
    /**
     * ![](man.png)
     */
    MAN,
    /**
     * ![](middlebutton.png)
     */
    MIDDLEBUTTON,
    /**
     * ![](mouse.png)
     */
    MOUSE,
    /**
     * ![](pencil.png)
     */
    PENCIL,
    /**
     * ![](pirate.png)
     */
    PIRATE,
    /**
     * ![](plus.png)
     */
    PLUS,
    /**
     * ![](question_arrow.png)
     */
    QUESTION_ARROW,
    /**
     * ![](right_ptr.png)
     */
    RIGHT_PTR,
    /**
     * ![](right_side.png)
     */
    RIGHT_SIDE,
    /**
     * ![](right_tee.png)
     */
    RIGHT_TEE,
    /**
     * ![](rightbutton.png)
     */
    RIGHTBUTTON,
    /**
     * ![](rtl_logo.png)
     */
    RTL_LOGO,
    /**
     * ![](sailboat.png)
     */
    SAILBOAT,
    /**
     * ![](sb_down_arrow.png)
     */
    SB_DOWN_ARROW,
    /**
     * ![](sb_h_double_arrow.png)
     */
    SB_H_DOUBLE_ARROW,
    /**
     * ![](sb_left_arrow.png)
     */
    SB_LEFT_ARROW,
    /**
     * ![](sb_right_arrow.png)
     */
    SB_RIGHT_ARROW,
    /**
     * ![](sb_up_arrow.png)
     */
    SB_UP_ARROW,
    /**
     * ![](sb_v_double_arrow.png)
     */
    SB_V_DOUBLE_ARROW,
    /**
     * ![](shuttle.png)
     */
    SHUTTLE,
    /**
     * ![](sizing.png)
     */
    SIZING,
    /**
     * ![](spider.png)
     */
    SPIDER,
    /**
     * ![](spraycan.png)
     */
    SPRAYCAN,
    /**
     * ![](star.png)
     */
    STAR,
    /**
     * ![](target.png)
     */
    TARGET,
    /**
     * ![](tcross.png)
     */
    TCROSS,
    /**
     * ![](top_left_arrow.png)
     */
    TOP_LEFT_ARROW,
    /**
     * ![](top_left_corner.png)
     */
    TOP_LEFT_CORNER,
    /**
     * ![](top_right_corner.png)
     */
    TOP_RIGHT_CORNER,
    /**
     * ![](top_side.png)
     */
    TOP_SIDE,
    /**
     * ![](top_tee.png)
     */
    TOP_TEE,
    /**
     * ![](trek.png)
     */
    TREK,
    /**
     * ![](ul_angle.png)
     */
    UL_ANGLE,
    /**
     * ![](umbrella.png)
     */
    UMBRELLA,
    /**
     * ![](ur_angle.png)
     */
    UR_ANGLE,
    /**
     * ![](watch.png)
     */
    WATCH,
    /**
     * ![](xterm.png)
     */
    XTERM,
    /**
     * last cursor type
     */
    LAST_CURSOR,
    /**
     * Blank cursor. Since 2.16
     */
    BLANK_CURSOR,
    /**
     * type of cursors constructed with
     *   gdk_cursor_new_from_pixbuf()
     */
    CURSOR_IS_PIXMAP,
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
 * Indicates the device type. See [above][GdkDeviceManager.description]
 * for more information about the meaning of these device types.
 */
enum DeviceType {
    /**
     * Device is a master (or virtual) device. There will
     *                          be an associated focus indicator on the screen.
     */
    MASTER,
    /**
     * Device is a slave (or physical) device.
     */
    SLAVE,
    /**
     * Device is a physical device, currently not attached to
     *                            any virtual device.
     */
    FLOATING,
}
/**
 * Used in #GdkDragContext to the reason of a cancelled DND operation.
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
 * Used in #GdkDragContext to indicate the protocol according to
 * which DND is done.
 */
enum DragProtocol {
    /**
     * no protocol.
     */
    NONE,
    /**
     * The Motif DND protocol. No longer supported
     */
    MOTIF,
    /**
     * The Xdnd protocol.
     */
    XDND,
    /**
     * An extension to the Xdnd protocol for
     *  unclaimed root window drops.
     */
    ROOTWIN,
    /**
     * The simple WM_DROPFILES protocol.
     */
    WIN32_DROPFILES,
    /**
     * The complex OLE2 DND protocol (not implemented).
     */
    OLE2,
    /**
     * Intra-application DND.
     */
    LOCAL,
    /**
     * Wayland DND protocol.
     */
    WAYLAND,
}
/**
 * Specifies the type of the event.
 * 
 * Do not confuse these events with the signals that GTK+ widgets emit.
 * Although many of these events result in corresponding signals being emitted,
 * the events are often transformed or filtered along the way.
 * 
 * In some language bindings, the values %GDK_2BUTTON_PRESS and
 * %GDK_3BUTTON_PRESS would translate into something syntactically
 * invalid (eg `Gdk.EventType.2ButtonPress`, where a
 * symbol is not allowed to start with a number). In that case, the
 * aliases %GDK_DOUBLE_BUTTON_PRESS and %GDK_TRIPLE_BUTTON_PRESS can
 * be used instead.
 */
enum EventType {
    /**
     * a special code to indicate a null event.
     */
    NOTHING,
    /**
     * the window manager has requested that the toplevel window be
     *   hidden or destroyed, usually when the user clicks on a special icon in the
     *   title bar.
     */
    DELETE,
    /**
     * the window has been destroyed.
     */
    DESTROY,
    /**
     * all or part of the window has become visible and needs to be
     *   redrawn.
     */
    EXPOSE,
    /**
     * the pointer (usually a mouse) has moved.
     */
    MOTION_NOTIFY,
    /**
     * a mouse button has been pressed.
     */
    BUTTON_PRESS,
    /**
     * a mouse button has been double-clicked (clicked twice
     *   within a short period of time). Note that each click also generates a
     *   %GDK_BUTTON_PRESS event.
     */
    TODO_2BUTTON_PRESS,
    /**
     * alias for %GDK_2BUTTON_PRESS, added in 3.6.
     */
    DOUBLE_BUTTON_PRESS,
    /**
     * a mouse button has been clicked 3 times in a short period
     *   of time. Note that each click also generates a %GDK_BUTTON_PRESS event.
     */
    TODO_3BUTTON_PRESS,
    /**
     * alias for %GDK_3BUTTON_PRESS, added in 3.6.
     */
    TRIPLE_BUTTON_PRESS,
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
     * the pointer has entered the window.
     */
    ENTER_NOTIFY,
    /**
     * the pointer has left the window.
     */
    LEAVE_NOTIFY,
    /**
     * the keyboard focus has entered or left the window.
     */
    FOCUS_CHANGE,
    /**
     * the size, position or stacking order of the window has changed.
     *   Note that GTK+ discards these events for %GDK_WINDOW_CHILD windows.
     */
    CONFIGURE,
    /**
     * the window has been mapped.
     */
    MAP,
    /**
     * the window has been unmapped.
     */
    UNMAP,
    /**
     * a property on the window has been changed or deleted.
     */
    PROPERTY_NOTIFY,
    /**
     * the application has lost ownership of a selection.
     */
    SELECTION_CLEAR,
    /**
     * another application has requested a selection.
     */
    SELECTION_REQUEST,
    /**
     * a selection has been received.
     */
    SELECTION_NOTIFY,
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
     * the mouse has entered the window while a drag is in progress.
     */
    DRAG_ENTER,
    /**
     * the mouse has left the window while a drag is in progress.
     */
    DRAG_LEAVE,
    /**
     * the mouse has moved in the window while a drag is in
     *   progress.
     */
    DRAG_MOTION,
    /**
     * the status of the drag operation initiated by the window
     *   has changed.
     */
    DRAG_STATUS,
    /**
     * a drop operation onto the window has started.
     */
    DROP_START,
    /**
     * the drop operation initiated by the window has completed.
     */
    DROP_FINISHED,
    /**
     * a message has been received from another application.
     */
    CLIENT_EVENT,
    /**
     * the window visibility status has changed.
     */
    VISIBILITY_NOTIFY,
    /**
     * the scroll wheel was turned
     */
    SCROLL,
    /**
     * the state of a window has changed. See #GdkWindowState
     *   for the possible window states
     */
    WINDOW_STATE,
    /**
     * a setting has been modified.
     */
    SETTING,
    /**
     * the owner of a selection has changed. This event type
     *   was added in 2.6
     */
    OWNER_CHANGE,
    /**
     * a pointer or keyboard grab was broken. This event type
     *   was added in 2.8.
     */
    GRAB_BROKEN,
    /**
     * the content of the window has been changed. This event type
     *   was added in 2.14.
     */
    DAMAGE,
    /**
     * A new touch event sequence has just started. This event
     *   type was added in 3.4.
     */
    TOUCH_BEGIN,
    /**
     * A touch event sequence has been updated. This event type
     *   was added in 3.4.
     */
    TOUCH_UPDATE,
    /**
     * A touch event sequence has finished. This event type
     *   was added in 3.4.
     */
    TOUCH_END,
    /**
     * A touch event sequence has been canceled. This event type
     *   was added in 3.4.
     */
    TOUCH_CANCEL,
    /**
     * A touchpad swipe gesture event, the current state
     *   is determined by its phase field. This event type was added in 3.18.
     */
    TOUCHPAD_SWIPE,
    /**
     * A touchpad pinch gesture event, the current state
     *   is determined by its phase field. This event type was added in 3.18.
     */
    TOUCHPAD_PINCH,
    /**
     * A tablet pad button press event. This event type
     *   was added in 3.22.
     */
    PAD_BUTTON_PRESS,
    /**
     * A tablet pad button release event. This event type
     *   was added in 3.22.
     */
    PAD_BUTTON_RELEASE,
    /**
     * A tablet pad axis event from a "ring". This event type was
     *   added in 3.22.
     */
    PAD_RING,
    /**
     * A tablet pad axis event from a "strip". This event type was
     *   added in 3.22.
     */
    PAD_STRIP,
    /**
     * A tablet pad group mode change. This event type was
     *   added in 3.22.
     */
    PAD_GROUP_MODE,
    /**
     * marks the end of the GdkEventType enumeration. Added in 2.18
     */
    EVENT_LAST,
}
/**
 * Specifies the result of applying a #GdkFilterFunc to a native event.
 */
enum FilterReturn {
    /**
     * event not handled, continue processing.
     */
    CONTINUE,
    /**
     * native event translated into a GDK event and stored
     *  in the `event` structure that was passed in.
     */
    TRANSLATE,
    /**
     * event handled, terminate processing.
     */
    REMOVE,
}
/**
 * Indicates which monitor (in a multi-head setup) a window should span over
 * when in fullscreen mode.
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
 * Error enumeration for #GdkGLContext.
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
}
/**
 * Defines how device grabs interact with other devices.
 */
enum GrabOwnership {
    /**
     * All other devices’ events are allowed.
     */
    NONE,
    /**
     * Other devices’ events are blocked for the grab window.
     */
    WINDOW,
    /**
     * Other devices’ events are blocked for the whole application.
     */
    APPLICATION,
}
/**
 * Returned by gdk_device_grab(), gdk_pointer_grab() and gdk_keyboard_grab() to
 * indicate success or the reason for the failure of the grab attempt.
 */
enum GrabStatus {
    /**
     * the resource was successfully grabbed.
     */
    SUCCESS,
    /**
     * the resource is actively grabbed by another client.
     */
    ALREADY_GRABBED,
    /**
     * the resource was grabbed more recently than the
     *  specified time.
     */
    INVALID_TIME,
    /**
     * the grab window or the `confine_to` window are not
     *  viewable.
     */
    NOT_VIEWABLE,
    /**
     * the resource is frozen by an active grab of another client.
     */
    FROZEN,
    /**
     * the grab failed for some other reason. Since 3.16
     */
    FAILED,
}
/**
 * Defines the reference point of a window and the meaning of coordinates
 * passed to gtk_window_move(). See gtk_window_move() and the "implementation
 * notes" section of the
 * [Extended Window Manager Hints](http://www.freedesktop.org/Standards/wm-spec)
 * specification for more details.
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
     * the reference point is at the center of the window.
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
     *  window itself, ignoring window manager decorations.
     */
    STATIC,
}
/**
 * An enumeration that describes the mode of an input device.
 */
enum InputMode {
    /**
     * the device is disabled and will not report any events.
     */
    DISABLED,
    /**
     * the device is enabled. The device’s coordinate space
     *                   maps to the entire screen.
     */
    SCREEN,
    /**
     * the device is enabled. The device’s coordinate space
     *                   is mapped to a single window. The manner in which this window
     *                   is chosen is undefined, but it will typically be the same
     *                   way in which the focus window for key events is determined.
     */
    WINDOW,
}
/**
 * An enumeration describing the type of an input device in general terms.
 */
enum InputSource {
    /**
     * the device is a mouse. (This will be reported for the core
     *                    pointer, even if it is something else, such as a trackball.)
     */
    MOUSE,
    /**
     * the device is a stylus of a graphics tablet or similar device.
     */
    PEN,
    /**
     * the device is an eraser. Typically, this would be the other end
     *                     of a stylus on a graphics tablet.
     */
    ERASER,
    /**
     * the device is a graphics tablet “puck” or similar device.
     */
    CURSOR,
    /**
     * the device is a keyboard.
     */
    KEYBOARD,
    /**
     * the device is a direct-input touch device, such
     *     as a touchscreen or tablet. This device type has been added in 3.4.
     */
    TOUCHSCREEN,
    /**
     * the device is an indirect touch device, such
     *     as a touchpad. This device type has been added in 3.4.
     */
    TOUCHPAD,
    /**
     * the device is a trackpoint. This device type has been
     *     added in 3.22
     */
    TRACKPOINT,
    /**
     * the device is a "pad", a collection of buttons,
     *     rings and strips found in drawing tablets. This device type has been
     *     added in 3.22.
     */
    TABLET_PAD,
}
/**
 * This enum is used with gdk_keymap_get_modifier_mask()
 * in order to determine what modifiers the
 * currently used windowing system backend uses for particular
 * purposes. For example, on X11/Windows, the Control key is used for
 * invoking menu shortcuts (accelerators), whereas on Apple computers
 * it’s the Command key (which correspond to %GDK_CONTROL_MASK and
 * %GDK_MOD2_MASK, respectively).
 */
enum ModifierIntent {
    /**
     * the primary modifier used to invoke
     *  menu accelerators.
     */
    PRIMARY_ACCELERATOR,
    /**
     * the modifier used to invoke context menus.
     *  Note that mouse button 3 always triggers context menus. When this modifier
     *  is not 0, it additionally triggers context menus when used with mouse button 1.
     */
    CONTEXT_MENU,
    /**
     * the modifier used to extend selections
     *  using `modifier`-click or `modifier`-cursor-key
     */
    EXTEND_SELECTION,
    /**
     * the modifier used to modify selections,
     *  which in most cases means toggling the clicked item into or out of the selection.
     */
    MODIFY_SELECTION,
    /**
     * when any of these modifiers is pressed, the
     *  key event cannot produce a symbol directly. This is meant to be used for
     *  input methods, and for use cases like typeahead search.
     */
    NO_TEXT_INPUT,
    /**
     * the modifier that switches between keyboard
     *  groups (AltGr on X11/Windows and Option/Alt on OS X).
     */
    SHIFT_GROUP,
    /**
     * The set of modifier masks accepted
     * as modifiers in accelerators. Needed because Command is mapped to MOD2 on
     * OSX, which is widely used, but on X11 MOD2 is NumLock and using that for a
     * mod key is problematic at best.
     * Ref: https://bugzilla.gnome.org/show_bug.cgi?id=736125.
     */
    DEFAULT_MOD_MASK,
}
/**
 * Specifies the kind of crossing for #GdkEventCrossing.
 * 
 * See the X11 protocol specification of LeaveNotify for
 * full details of crossing event generation.
 */
enum NotifyType {
    /**
     * the window is entered from an ancestor or
     *   left towards an ancestor.
     */
    ANCESTOR,
    /**
     * the pointer moves between an ancestor and an
     *   inferior of the window.
     */
    VIRTUAL,
    /**
     * the window is entered from an inferior or
     *   left towards an inferior.
     */
    INFERIOR,
    /**
     * the window is entered from or left towards
     *   a window which is neither an ancestor nor an inferior.
     */
    NONLINEAR,
    /**
     * the pointer moves between two windows
     *   which are not ancestors of each other and the window is part of
     *   the ancestor chain between one of these windows and their least
     *   common ancestor.
     */
    NONLINEAR_VIRTUAL,
    /**
     * an unknown type of enter/leave event occurred.
     */
    UNKNOWN,
}
/**
 * Specifies why a selection ownership was changed.
 */
enum OwnerChange {
    /**
     * some other app claimed the ownership
     */
    NEW_OWNER,
    /**
     * the window was destroyed
     */
    DESTROY,
    /**
     * the client was closed
     */
    CLOSE,
}
/**
 * Describes how existing data is combined with new data when
 * using gdk_property_change().
 */
enum PropMode {
    /**
     * the new data replaces the existing data.
     */
    REPLACE,
    /**
     * the new data is prepended to the existing data.
     */
    PREPEND,
    /**
     * the new data is appended to the existing data.
     */
    APPEND,
}
/**
 * Specifies the type of a property change for a #GdkEventProperty.
 */
enum PropertyState {
    /**
     * the property value was changed.
     */
    NEW_VALUE,
    /**
     * the property was deleted.
     */
    DELETE,
}
/**
 * Specifies the direction for #GdkEventScroll.
 */
enum ScrollDirection {
    /**
     * the window is scrolled up.
     */
    UP,
    /**
     * the window is scrolled down.
     */
    DOWN,
    /**
     * the window is scrolled to the left.
     */
    LEFT,
    /**
     * the window is scrolled to the right.
     */
    RIGHT,
    /**
     * the scrolling is determined by the delta values
     *   in #GdkEventScroll. See gdk_event_get_scroll_deltas(). Since: 3.4
     */
    SMOOTH,
}
/**
 * Specifies the kind of modification applied to a setting in a
 * #GdkEventSetting.
 */
enum SettingAction {
    /**
     * a setting was added.
     */
    NEW,
    /**
     * a setting was changed.
     */
    CHANGED,
    /**
     * a setting was deleted.
     */
    DELETED,
}
enum Status {
    OK,
    ERROR,
    ERROR_PARAM,
    ERROR_FILE,
    ERROR_MEM,
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
 * Specifies the current state of a touchpad gesture. All gestures are
 * guaranteed to begin with an event with phase %GDK_TOUCHPAD_GESTURE_PHASE_BEGIN,
 * followed by 0 or several events with phase %GDK_TOUCHPAD_GESTURE_PHASE_UPDATE.
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
 * 
 * See also #GdkEventTouchpadSwipe and #GdkEventTouchpadPinch.
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
 * Specifies the visiblity status of a window for a #GdkEventVisibility.
 */
enum VisibilityState {
    /**
     * the window is completely visible.
     */
    UNOBSCURED,
    /**
     * the window is partially visible.
     */
    PARTIAL,
    /**
     * the window is not visible at all.
     */
    FULLY_OBSCURED,
}
/**
 * A set of values that describe the manner in which the pixel values
 * for a visual are converted into RGB values for display.
 */
enum VisualType {
    /**
     * Each pixel value indexes a grayscale value
     *     directly.
     */
    STATIC_GRAY,
    /**
     * Each pixel is an index into a color map that
     *     maps pixel values into grayscale values. The color map can be
     *     changed by an application.
     */
    GRAYSCALE,
    /**
     * Each pixel value is an index into a predefined,
     *     unmodifiable color map that maps pixel values into RGB values.
     */
    STATIC_COLOR,
    /**
     * Each pixel is an index into a color map that
     *     maps pixel values into rgb values. The color map can be changed by
     *     an application.
     */
    PSEUDO_COLOR,
    /**
     * Each pixel value directly contains red, green,
     *     and blue components. Use gdk_visual_get_red_pixel_details(), etc,
     *     to obtain information about how the components are assembled into
     *     a pixel value.
     */
    TRUE_COLOR,
    /**
     * Each pixel value contains red, green, and blue
     *     components as for %GDK_VISUAL_TRUE_COLOR, but the components are
     *     mapped via a color table into the final output table instead of
     *     being converted directly.
     */
    DIRECT_COLOR,
}
/**
 * Determines a window edge or corner.
 */
enum WindowEdge {
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
 * Describes the kind of window.
 */
enum WindowType {
    /**
     * root window; this window has no parent, covers the entire
     *  screen, and is created by the window system
     */
    ROOT,
    /**
     * toplevel window (used to implement #GtkWindow)
     */
    TOPLEVEL,
    /**
     * child window (used to implement e.g. #GtkEntry)
     */
    CHILD,
    /**
     * override redirect temporary window (used to implement
     *  #GtkMenu)
     */
    TEMP,
    /**
     * foreign window (see gdk_window_foreign_new())
     */
    FOREIGN,
    /**
     * offscreen window (see
     *  [Offscreen Windows][OFFSCREEN-WINDOWS]). Since 2.18
     */
    OFFSCREEN,
    /**
     * subsurface-based window; This window is visually
     *  tied to a toplevel, and is moved/stacked with it. Currently this window
     *  type is only implemented in Wayland. Since 3.14
     */
    SUBSURFACE,
}
/**
 * These are hints for the window manager that indicate what type of function
 * the window has. The window manager can use this when determining decoration
 * and behaviour of the window. The hint must be set before mapping the window.
 * 
 * See the [Extended Window Manager Hints](http://www.freedesktop.org/Standards/wm-spec)
 * specification for more details about window types.
 */
enum WindowTypeHint {
    /**
     * Normal toplevel window.
     */
    NORMAL,
    /**
     * Dialog window.
     */
    DIALOG,
    /**
     * Window used to implement a menu; GTK+ uses
     *  this hint only for torn-off menus, see #GtkTearoffMenuItem.
     */
    MENU,
    /**
     * Window used to implement toolbars.
     */
    TOOLBAR,
    /**
     * Window used to display a splash
     *  screen during application startup.
     */
    SPLASHSCREEN,
    /**
     * Utility windows which are not detached
     *  toolbars or dialogs.
     */
    UTILITY,
    /**
     * Used for creating dock or panel windows.
     */
    DOCK,
    /**
     * Used for creating the desktop background
     *  window.
     */
    DESKTOP,
    /**
     * A menu that belongs to a menubar.
     */
    DROPDOWN_MENU,
    /**
     * A menu that does not belong to a menubar,
     *  e.g. a context menu.
     */
    POPUP_MENU,
    /**
     * A tooltip.
     */
    TOOLTIP,
    /**
     * A notification - typically a “bubble”
     *  that belongs to a status icon.
     */
    NOTIFICATION,
    /**
     * A popup from a combo box.
     */
    COMBO,
    /**
     * A window that is used to implement a DND cursor.
     */
    DND,
}
/**
 * `GDK_INPUT_OUTPUT` windows are the standard kind of window you might expect.
 * Such windows receive events and are also displayed on screen.
 * `GDK_INPUT_ONLY` windows are invisible; they are usually placed above other
 * windows in order to trap or filter the events. You can’t draw on
 * `GDK_INPUT_ONLY` windows.
 */
enum WindowWindowClass {
    /**
     * window for graphics and events
     */
    INPUT_OUTPUT,
    /**
     * window for events only
     */
    INPUT_ONLY,
}
/**
 * Positioning hints for aligning a window relative to a rectangle.
 * 
 * These hints determine how the window should be positioned in the case that
 * the window would fall off-screen if placed in its ideal position.
 * 
 * For example, %GDK_ANCHOR_FLIP_X will replace %GDK_GRAVITY_NORTH_WEST with
 * %GDK_GRAVITY_NORTH_EAST and vice versa if the window extends beyond the left
 * or right edges of the monitor.
 * 
 * If %GDK_ANCHOR_SLIDE_X is set, the window can be shifted horizontally to fit
 * on-screen. If %GDK_ANCHOR_RESIZE_X is set, the window can be shrunken
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
     * allow sliding window horizontally
     */
    SLIDE_X,
    /**
     * allow sliding window vertically
     */
    SLIDE_Y,
    /**
     * allow resizing window horizontally
     */
    RESIZE_X,
    /**
     * allow resizing window vertically
     */
    RESIZE_Y,
    /**
     * allow flipping anchors on both axes
     */
    FLIP,
    /**
     * allow sliding window on both axes
     */
    SLIDE,
    /**
     * allow resizing window on both axes
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
 * Used in #GdkDragContext to indicate what the destination
 * should do with the dropped data.
 */
enum DragAction {
    /**
     * Means nothing, and should not be used.
     */
    DEFAULT,
    /**
     * Copy the data.
     */
    COPY,
    /**
     * Move the data, i.e. first copy it, then delete
     *  it from the source using the DELETE target of the X selection protocol.
     */
    MOVE,
    /**
     * Add a link to the data. Note that this is only
     *  useful if source and destination agree on what it means.
     */
    LINK,
    /**
     * Special action which tells the source that the
     *  destination will do something that the source doesn’t understand.
     */
    PRIVATE,
    /**
     * Ask the user what to do with the data.
     */
    ASK,
}
/**
 * A set of bit-flags to indicate which events a window is to receive.
 * Most of these masks map onto one or more of the #GdkEventType event types
 * above.
 * 
 * See the [input handling overview][chap-input-handling] for details of
 * [event masks][event-masks] and [event propagation][event-propagation].
 * 
 * %GDK_POINTER_MOTION_HINT_MASK is deprecated. It is a special mask
 * to reduce the number of %GDK_MOTION_NOTIFY events received. When using
 * %GDK_POINTER_MOTION_HINT_MASK, fewer %GDK_MOTION_NOTIFY events will
 * be sent, some of which are marked as a hint (the is_hint member is
 * %TRUE). To receive more motion events after a motion hint event,
 * the application needs to asks for more, by calling
 * gdk_event_request_motions().
 * 
 * Since GTK 3.8, motion events are already compressed by default, independent
 * of this mechanism. This compression can be disabled with
 * gdk_window_set_event_compression(). See the documentation of that function
 * for details.
 * 
 * If %GDK_TOUCH_MASK is enabled, the window will receive touch events
 * from touch-enabled devices. Those will come as sequences of #GdkEventTouch
 * with type %GDK_TOUCH_UPDATE, enclosed by two events with
 * type %GDK_TOUCH_BEGIN and %GDK_TOUCH_END (or %GDK_TOUCH_CANCEL).
 * gdk_event_get_event_sequence() returns the event sequence for these
 * events, so different sequences may be distinguished.
 */
enum EventMask {
    /**
     * receive expose events
     */
    EXPOSURE_MASK,
    /**
     * receive all pointer motion events
     */
    POINTER_MOTION_MASK,
    /**
     * deprecated. see the explanation above
     */
    POINTER_MOTION_HINT_MASK,
    /**
     * receive pointer motion events while any button is pressed
     */
    BUTTON_MOTION_MASK,
    /**
     * receive pointer motion events while 1 button is pressed
     */
    BUTTON1_MOTION_MASK,
    /**
     * receive pointer motion events while 2 button is pressed
     */
    BUTTON2_MOTION_MASK,
    /**
     * receive pointer motion events while 3 button is pressed
     */
    BUTTON3_MOTION_MASK,
    /**
     * receive button press events
     */
    BUTTON_PRESS_MASK,
    /**
     * receive button release events
     */
    BUTTON_RELEASE_MASK,
    /**
     * receive key press events
     */
    KEY_PRESS_MASK,
    /**
     * receive key release events
     */
    KEY_RELEASE_MASK,
    /**
     * receive window enter events
     */
    ENTER_NOTIFY_MASK,
    /**
     * receive window leave events
     */
    LEAVE_NOTIFY_MASK,
    /**
     * receive focus change events
     */
    FOCUS_CHANGE_MASK,
    /**
     * receive events about window configuration change
     */
    STRUCTURE_MASK,
    /**
     * receive property change events
     */
    PROPERTY_CHANGE_MASK,
    /**
     * receive visibility change events
     */
    VISIBILITY_NOTIFY_MASK,
    /**
     * receive proximity in events
     */
    PROXIMITY_IN_MASK,
    /**
     * receive proximity out events
     */
    PROXIMITY_OUT_MASK,
    /**
     * receive events about window configuration changes of
     *   child windows
     */
    SUBSTRUCTURE_MASK,
    /**
     * receive scroll events
     */
    SCROLL_MASK,
    /**
     * receive touch events. Since 3.4
     */
    TOUCH_MASK,
    /**
     * receive smooth scrolling events. Since 3.4
     */
    SMOOTH_SCROLL_MASK,
    /**
     * receive touchpad gesture events. Since 3.18
     */
    TOUCHPAD_GESTURE_MASK,
    /**
     * receive tablet pad events. Since 3.22
     */
    TABLET_PAD_MASK,
    /**
     * the combination of all the above event masks.
     */
    ALL_EVENTS_MASK,
}
/**
 * #GdkFrameClockPhase is used to represent the different paint clock
 * phases that can be requested. The elements of the enumeration
 * correspond to the signals of #GdkFrameClock.
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
     * corresponds to GdkFrameClock::layout.
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
 * A set of bit-flags to indicate the state of modifier keys and mouse buttons
 * in various event types. Typical modifier keys are Shift, Control, Meta,
 * Super, Hyper, Alt, Compose, Apple, CapsLock or ShiftLock.
 * 
 * Like the X Window System, GDK supports 8 modifier keys and 5 mouse buttons.
 * 
 * Since 2.10, GDK recognizes which of the Meta, Super or Hyper keys are mapped
 * to Mod2 - Mod5, and indicates this by setting %GDK_SUPER_MASK,
 * %GDK_HYPER_MASK or %GDK_META_MASK in the state field of key events.
 * 
 * Note that GDK may add internal values to events which include
 * reserved values such as %GDK_MODIFIER_RESERVED_13_MASK.  Your code
 * should preserve and ignore them.  You can use %GDK_MODIFIER_MASK to
 * remove all reserved values.
 * 
 * Also note that the GDK X backend interprets button press events for button
 * 4-7 as scroll events, so %GDK_BUTTON4_MASK and %GDK_BUTTON5_MASK will never
 * be set.
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
    MOD1_MASK,
    /**
     * the fifth modifier key (it depends on the modifier
     *  mapping of the X server which key is interpreted as this modifier).
     */
    MOD2_MASK,
    /**
     * the sixth modifier key (it depends on the modifier
     *  mapping of the X server which key is interpreted as this modifier).
     */
    MOD3_MASK,
    /**
     * the seventh modifier key (it depends on the modifier
     *  mapping of the X server which key is interpreted as this modifier).
     */
    MOD4_MASK,
    /**
     * the eighth modifier key (it depends on the modifier
     *  mapping of the X server which key is interpreted as this modifier).
     */
    MOD5_MASK,
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
     * A reserved bit flag; do not use in your own code
     */
    MODIFIER_RESERVED_13_MASK,
    /**
     * A reserved bit flag; do not use in your own code
     */
    MODIFIER_RESERVED_14_MASK,
    /**
     * A reserved bit flag; do not use in your own code
     */
    MODIFIER_RESERVED_15_MASK,
    /**
     * A reserved bit flag; do not use in your own code
     */
    MODIFIER_RESERVED_16_MASK,
    /**
     * A reserved bit flag; do not use in your own code
     */
    MODIFIER_RESERVED_17_MASK,
    /**
     * A reserved bit flag; do not use in your own code
     */
    MODIFIER_RESERVED_18_MASK,
    /**
     * A reserved bit flag; do not use in your own code
     */
    MODIFIER_RESERVED_19_MASK,
    /**
     * A reserved bit flag; do not use in your own code
     */
    MODIFIER_RESERVED_20_MASK,
    /**
     * A reserved bit flag; do not use in your own code
     */
    MODIFIER_RESERVED_21_MASK,
    /**
     * A reserved bit flag; do not use in your own code
     */
    MODIFIER_RESERVED_22_MASK,
    /**
     * A reserved bit flag; do not use in your own code
     */
    MODIFIER_RESERVED_23_MASK,
    /**
     * A reserved bit flag; do not use in your own code
     */
    MODIFIER_RESERVED_24_MASK,
    /**
     * A reserved bit flag; do not use in your own code
     */
    MODIFIER_RESERVED_25_MASK,
    /**
     * the Super modifier. Since 2.10
     */
    SUPER_MASK,
    /**
     * the Hyper modifier. Since 2.10
     */
    HYPER_MASK,
    /**
     * the Meta modifier. Since 2.10
     */
    META_MASK,
    /**
     * A reserved bit flag; do not use in your own code
     */
    MODIFIER_RESERVED_29_MASK,
    /**
     * not used in GDK itself. GTK+ uses it to differentiate
     *  between (keyval, modifiers) pairs from key press and release events.
     */
    RELEASE_MASK,
    /**
     * a mask covering all modifier types.
     */
    MODIFIER_MASK,
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
     * The union of all pointing capabilities
     */
    ALL_POINTING,
    /**
     * The union of all capabilities
     */
    ALL,
}
/**
 * These are hints originally defined by the Motif toolkit.
 * The window manager can use them when determining how to decorate
 * the window. The hint must be set before mapping the window.
 */
enum WMDecoration {
    /**
     * all decorations should be applied.
     */
    ALL,
    /**
     * a frame should be drawn around the window.
     */
    BORDER,
    /**
     * the frame should have resize handles.
     */
    RESIZEH,
    /**
     * a titlebar should be placed above the window.
     */
    TITLE,
    /**
     * a button for opening a menu should be included.
     */
    MENU,
    /**
     * a minimize button should be included.
     */
    MINIMIZE,
    /**
     * a maximize button should be included.
     */
    MAXIMIZE,
}
/**
 * These are hints originally defined by the Motif toolkit. The window manager
 * can use them when determining the functions to offer for the window. The
 * hint must be set before mapping the window.
 */
enum WMFunction {
    /**
     * all functions should be offered.
     */
    ALL,
    /**
     * the window should be resizable.
     */
    RESIZE,
    /**
     * the window should be movable.
     */
    MOVE,
    /**
     * the window should be minimizable.
     */
    MINIMIZE,
    /**
     * the window should be maximizable.
     */
    MAXIMIZE,
    /**
     * the window should be closable.
     */
    CLOSE,
}
/**
 * Used to indicate which fields in the #GdkWindowAttr struct should be honored.
 * For example, if you filled in the “cursor” and “x” fields of #GdkWindowAttr,
 * pass “`GDK_WA_X` | `GDK_WA_CURSOR”` to gdk_window_new(). Fields in
 * #GdkWindowAttr not covered by a bit in this enum are required; for example,
 * the `width/``height,` `wclass,` and `window_type` fields are required, they have
 * no corresponding flag in #GdkWindowAttributesType.
 */
enum WindowAttributesType {
    /**
     * Honor the title field
     */
    TITLE,
    /**
     * Honor the X coordinate field
     */
    X,
    /**
     * Honor the Y coordinate field
     */
    Y,
    /**
     * Honor the cursor field
     */
    CURSOR,
    /**
     * Honor the visual field
     */
    VISUAL,
    /**
     * Honor the wmclass_class and wmclass_name fields
     */
    WMCLASS,
    /**
     * Honor the override_redirect field
     */
    NOREDIR,
    /**
     * Honor the type_hint field
     */
    TYPE_HINT,
}
/**
 * Used to indicate which fields of a #GdkGeometry struct should be paid
 * attention to. Also, the presence/absence of `GDK_HINT_POS,`
 * `GDK_HINT_USER_POS,` and `GDK_HINT_USER_SIZE` is significant, though they don't
 * directly refer to #GdkGeometry fields. `GDK_HINT_USER_POS` will be set
 * automatically by #GtkWindow if you call gtk_window_move().
 * `GDK_HINT_USER_POS` and `GDK_HINT_USER_SIZE` should be set if the user
 * specified a size/position using a --geometry command-line argument;
 * gtk_window_parse_geometry() automatically sets these flags.
 */
enum WindowHints {
    /**
     * indicates that the program has positioned the window
     */
    POS,
    /**
     * min size fields are set
     */
    MIN_SIZE,
    /**
     * max size fields are set
     */
    MAX_SIZE,
    /**
     * base size fields are set
     */
    BASE_SIZE,
    /**
     * aspect ratio fields are set
     */
    ASPECT,
    /**
     * resize increment fields are set
     */
    RESIZE_INC,
    /**
     * window gravity field is set
     */
    WIN_GRAVITY,
    /**
     * indicates that the window’s position was explicitly set
     *  by the user
     */
    USER_POS,
    /**
     * indicates that the window’s size was explicitly set by
     *  the user
     */
    USER_SIZE,
}
/**
 * Specifies the state of a toplevel window.
 */
enum WindowState {
    /**
     * the window is not shown.
     */
    WITHDRAWN,
    /**
     * the window is minimized.
     */
    ICONIFIED,
    /**
     * the window is maximized.
     */
    MAXIMIZED,
    /**
     * the window is sticky.
     */
    STICKY,
    /**
     * the window is maximized without
     *   decorations.
     */
    FULLSCREEN,
    /**
     * the window is kept above other windows.
     */
    ABOVE,
    /**
     * the window is kept below other windows.
     */
    BELOW,
    /**
     * the window is presented as focused (with active decorations).
     */
    FOCUSED,
    /**
     * the window is in a tiled state, Since 3.10. Since 3.22.23, this
     *                          is deprecated in favor of per-edge information.
     */
    TILED,
    /**
     * whether the top edge is tiled, Since 3.22.23
     */
    TOP_TILED,
    /**
     * whether the top edge is resizable, Since 3.22.23
     */
    TOP_RESIZABLE,
    /**
     * whether the right edge is tiled, Since 3.22.23
     */
    RIGHT_TILED,
    /**
     * whether the right edge is resizable, Since 3.22.23
     */
    RIGHT_RESIZABLE,
    /**
     * whether the bottom edge is tiled, Since 3.22.23
     */
    BOTTOM_TILED,
    /**
     * whether the bottom edge is resizable, Since 3.22.23
     */
    BOTTOM_RESIZABLE,
    /**
     * whether the left edge is tiled, Since 3.22.23
     */
    LEFT_TILED,
    /**
     * whether the left edge is resizable, Since 3.22.23
     */
    LEFT_RESIZABLE,
}
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
const MAJOR_VERSION: number
const MAX_TIMECOORD_AXES: number
const MICRO_VERSION: number
const MINOR_VERSION: number
/**
 * A special value, indicating that the background
 * for a window should be inherited from the parent window.
 */
const PARENT_RELATIVE: number
/**
 * This is the priority that the idle handler processing window updates
 * is given in the
 * [GLib Main Loop][glib-The-Main-Event-Loop].
 */
const PRIORITY_REDRAW: number
function addOptionEntriesLibgtkOnly(group: GLib.OptionGroup): void
function atomIntern(atomName: string, onlyIfExists: boolean): Atom
function atomInternStaticString(atomName: string): Atom
function beep(): void
function cairoCreate(window: Window): cairo.Context
function cairoDrawFromGl(cr: cairo.Context, window: Window, source: number, sourceType: number, bufferScale: number, x: number, y: number, width: number, height: number): void
function cairoGetClipRectangle(cr: cairo.Context): [ /* returnType */ boolean, /* rect */ Rectangle | null ]
function cairoGetDrawingContext(cr: cairo.Context): DrawingContext | null
function cairoRectangle(cr: cairo.Context, rectangle: Rectangle): void
function cairoRegion(cr: cairo.Context, region: cairo.Region): void
function cairoRegionCreateFromSurface(surface: cairo.Surface): cairo.Region
function cairoSetSourceColor(cr: cairo.Context, color: Color): void
function cairoSetSourcePixbuf(cr: cairo.Context, pixbuf: GdkPixbuf.Pixbuf, pixbufX: number, pixbufY: number): void
function cairoSetSourceRgba(cr: cairo.Context, rgba: RGBA): void
function cairoSetSourceWindow(cr: cairo.Context, window: Window, x: number, y: number): void
function cairoSurfaceCreateFromPixbuf(pixbuf: GdkPixbuf.Pixbuf, scale: number, forWindow?: Window | null): cairo.Surface
function colorParse(spec: string): [ /* returnType */ boolean, /* color */ Color ]
function disableMultidevice(): void
function dragAbort(context: DragContext, time: number): void
function dragBegin(window: Window, targets: Atom[]): DragContext
function dragBeginForDevice(window: Window, device: Device, targets: Atom[]): DragContext
function dragBeginFromPoint(window: Window, device: Device, targets: Atom[], xRoot: number, yRoot: number): DragContext
function dragDrop(context: DragContext, time: number): void
function dragDropDone(context: DragContext, success: boolean): void
function dragDropSucceeded(context: DragContext): boolean
function dragFindWindowForScreen(context: DragContext, dragWindow: Window, screen: Screen, xRoot: number, yRoot: number): [ /* destWindow */ Window, /* protocol */ DragProtocol ]
function dragGetSelection(context: DragContext): Atom
function dragMotion(context: DragContext, destWindow: Window, protocol: DragProtocol, xRoot: number, yRoot: number, suggestedAction: DragAction, possibleActions: DragAction, time: number): boolean
function dragStatus(context: DragContext, action: DragAction, time: number): void
function dropFinish(context: DragContext, success: boolean, time: number): void
function dropReply(context: DragContext, accepted: boolean, time: number): void
function errorTrapPop(): number
function errorTrapPopIgnored(): void
function errorTrapPush(): void
function eventGet(): Event | null
function eventHandlerSet(func: EventFunc): void
function eventPeek(): Event | null
function eventRequestMotions(event: EventMotion): void
function eventsGetAngle(event1: Event, event2: Event): [ /* returnType */ boolean, /* angle */ number ]
function eventsGetCenter(event1: Event, event2: Event): [ /* returnType */ boolean, /* x */ number, /* y */ number ]
function eventsGetDistance(event1: Event, event2: Event): [ /* returnType */ boolean, /* distance */ number ]
function eventsPending(): boolean
function flush(): void
function getDefaultRootWindow(): Window
function getDisplay(): string
function getDisplayArgName(): string | null
function getProgramClass(): string
function getShowEvents(): boolean
function glErrorQuark(): GLib.Quark
function init(argv: string[]): /* argv */ string[]
function initCheck(argv: string[]): [ /* returnType */ boolean, /* argv */ string[] ]
function keyboardGrab(window: Window, ownerEvents: boolean, time: number): GrabStatus
function keyboardUngrab(time: number): void
function keyvalConvertCase(symbol: number): [ /* lower */ number, /* upper */ number ]
function keyvalFromName(keyvalName: string): number
function keyvalIsLower(keyval: number): boolean
function keyvalIsUpper(keyval: number): boolean
function keyvalName(keyval: number): string | null
function keyvalToLower(keyval: number): number
function keyvalToUnicode(keyval: number): number
function keyvalToUpper(keyval: number): number
function listVisuals(): Visual[]
function notifyStartupComplete(): void
function notifyStartupCompleteWithId(startupId: string): void
function offscreenWindowGetEmbedder(window: Window): Window | null
function offscreenWindowGetSurface(window: Window): cairo.Surface | null
function offscreenWindowSetEmbedder(window: Window, embedder: Window): void
function pangoContextGet(): Pango.Context
function pangoContextGetForDisplay(display: Display): Pango.Context
function pangoContextGetForScreen(screen: Screen): Pango.Context
function parseArgs(argv: string[]): /* argv */ string[]
function pixbufGetFromSurface(surface: cairo.Surface, srcX: number, srcY: number, width: number, height: number): GdkPixbuf.Pixbuf | null
function pixbufGetFromWindow(window: Window, srcX: number, srcY: number, width: number, height: number): GdkPixbuf.Pixbuf | null
function pointerGrab(window: Window, ownerEvents: boolean, eventMask: EventMask, confineTo: Window | null, cursor: Cursor | null, time: number): GrabStatus
function pointerIsGrabbed(): boolean
function pointerUngrab(time: number): void
function preParseLibgtkOnly(): void
function propertyDelete(window: Window, property: Atom): void
function propertyGet(window: Window, property: Atom, type: Atom, offset: number, length: number, pdelete: number): [ /* returnType */ boolean, /* actualPropertyType */ Atom, /* actualFormat */ number, /* data */ Uint8Array ]
function queryDepths(): /* depths */ number[]
function queryVisualTypes(): /* visualTypes */ VisualType[]
function selectionConvert(requestor: Window, selection: Atom, target: Atom, time: number): void
function selectionOwnerGet(selection: Atom): Window | null
function selectionOwnerGetForDisplay(display: Display, selection: Atom): Window | null
function selectionOwnerSet(owner: Window | null, selection: Atom, time: number, sendEvent: boolean): boolean
function selectionOwnerSetForDisplay(display: Display, owner: Window | null, selection: Atom, time: number, sendEvent: boolean): boolean
function selectionSendNotify(requestor: Window, selection: Atom, target: Atom, property: Atom, time: number): void
function selectionSendNotifyForDisplay(display: Display, requestor: Window, selection: Atom, target: Atom, property: Atom, time: number): void
function setAllowedBackends(backends: string): void
function setDoubleClickTime(msec: number): void
function setProgramClass(programClass: string): void
function setShowEvents(showEvents: boolean): void
function settingGet(name: string, value: any): boolean
function synthesizeWindowState(window: Window, unsetFlags: WindowState, setFlags: WindowState): void
function testRenderSync(window: Window): void
function testSimulateButton(window: Window, x: number, y: number, button: number, modifiers: ModifierType, buttonPressrelease: EventType): boolean
function testSimulateKey(window: Window, x: number, y: number, keyval: number, modifiers: ModifierType, keyPressrelease: EventType): boolean
function textPropertyToUtf8ListForDisplay(display: Display, encoding: Atom, format: number, text: Uint8Array): [ /* returnType */ number, /* list */ string[] ]
function threadsAddIdle(priority: number, function_: GLib.SourceFunc): number
function threadsAddTimeout(priority: number, interval: number, function_: GLib.SourceFunc): number
function threadsAddTimeoutSeconds(priority: number, interval: number, function_: GLib.SourceFunc): number
function threadsEnter(): void
function threadsInit(): void
function threadsLeave(): void
function unicodeToKeyval(wc: number): number
function utf8ToStringTarget(str: string): string | null
/**
 * Specifies the type of function passed to gdk_event_handler_set() to
 * handle all GDK events.
 */
interface EventFunc {
    (event: Event): void
}
/**
 * Specifies the type of function used to filter native events before they are
 * converted to GDK events.
 * 
 * When a filter is called, `event` is unpopulated, except for
 * `event->window`. The filter may translate the native
 * event to a GDK event and store the result in `event,` or handle it without
 * translation. If the filter translates the event and processing should
 * continue, it should return %GDK_FILTER_TRANSLATE.
 */
interface FilterFunc {
    (xevent: XEvent, event: Event): FilterReturn
}
/**
 * Type of the callback used to set up `window` so it can be
 * grabbed. A typical action would be ensuring the window is
 * visible, although there's room for other initialization
 * actions.
 */
interface SeatGrabPrepareFunc {
    (seat: Seat, window: Window): void
}
/**
 * A function of this type is passed to gdk_window_invalidate_maybe_recurse().
 * It gets called for each child of the window to determine whether to
 * recursively invalidate it or now.
 */
interface WindowChildFunc {
    (window: Window): boolean
}
/**
 * Whenever some area of the window is invalidated (directly in the
 * window or in a child window) this gets called with `region` in
 * the coordinate space of `window`. You can use `region` to just
 * keep track of the dirty region, or you can actually change
 * `region` in case you are doing display tricks like showing
 * a child in multiple places.
 */
interface WindowInvalidateHandlerFunc {
    (window: Window, region: cairo.Region): void
}
interface DevicePad_ConstructProps extends Device_ConstructProps {
}
class DevicePad {
    /* Properties of Gdk-3.0.Gdk.Device */
    /**
     * Associated pointer or keyboard with this device, if any. Devices of type #GDK_DEVICE_TYPE_MASTER
     * always come in keyboard/pointer pairs. Other device types will have a %NULL associated device.
     */
    readonly associatedDevice: Device
    /**
     * The axes currently available for this device.
     */
    readonly axes: AxisFlags
    inputMode: InputMode
    /**
     * Number of axes in the device.
     */
    readonly nAxes: number
    /**
     * #GdkSeat of this device.
     */
    seat: Seat
    readonly tool: DeviceTool
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gdk-3.0.Gdk.DevicePad */
    /**
     * Returns the group the given `feature` and `idx` belong to,
     * or -1 if feature/index do not exist in `pad`.
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
     * Returns the number of groups this pad device has. Pads have
     * at least one group. A pad group is a subcollection of
     * buttons/strip/rings that is affected collectively by a same
     * current mode.
     */
    getNGroups(): number
    /* Methods of Gdk-3.0.Gdk.Device */
    /**
     * Returns the associated device to `device,` if `device` is of type
     * %GDK_DEVICE_TYPE_MASTER, it will return the paired pointer or
     * keyboard.
     * 
     * If `device` is of type %GDK_DEVICE_TYPE_SLAVE, it will return
     * the master device to which `device` is attached to.
     * 
     * If `device` is of type %GDK_DEVICE_TYPE_FLOATING, %NULL will be
     * returned, as there is no associated device.
     */
    getAssociatedDevice(): Device | null
    /**
     * Returns the axes currently available on the device.
     */
    getAxes(): AxisFlags
    /**
     * Returns the axis use for `index_`.
     */
    getAxisUse(index: number): AxisUse
    /**
     * Returns the device type for `device`.
     */
    getDeviceType(): DeviceType
    /**
     * Returns the #GdkDisplay to which `device` pertains.
     */
    getDisplay(): Display
    /**
     * Determines whether the pointer follows device motion.
     * This is not meaningful for keyboard devices, which don't have a pointer.
     */
    getHasCursor(): boolean
    /**
     * If `index_` has a valid keyval, this function will return %TRUE
     * and fill in `keyval` and `modifiers` with the keyval settings.
     */
    getKey(index: number): [ /* returnType */ boolean, /* keyval */ number, /* modifiers */ ModifierType ]
    /**
     * Gets information about which window the given pointer device is in, based on events
     * that have been received so far from the display server. If another application
     * has a pointer grab, or this application has a grab with owner_events = %FALSE,
     * %NULL may be returned even if the pointer is physically over one of this
     * application's windows.
     */
    getLastEventWindow(): Window | null
    /**
     * Determines the mode of the device.
     */
    getMode(): InputMode
    /**
     * Returns the number of axes the device currently has.
     */
    getNAxes(): number
    /**
     * Returns the number of keys the device currently has.
     */
    getNKeys(): number
    /**
     * Determines the name of the device.
     */
    getName(): string
    /**
     * Gets the current location of `device`. As a slave device
     * coordinates are those of its master pointer, This function
     * may not be called on devices of type %GDK_DEVICE_TYPE_SLAVE,
     * unless there is an ongoing grab on them, see gdk_device_grab().
     */
    getPosition(): [ /* screen */ Screen | null, /* x */ number | null, /* y */ number | null ]
    /**
     * Gets the current location of `device` in double precision. As a slave device's
     * coordinates are those of its master pointer, this function
     * may not be called on devices of type %GDK_DEVICE_TYPE_SLAVE,
     * unless there is an ongoing grab on them. See gdk_device_grab().
     */
    getPositionDouble(): [ /* screen */ Screen | null, /* x */ number | null, /* y */ number | null ]
    /**
     * Returns the product ID of this device, or %NULL if this information couldn't
     * be obtained. This ID is retrieved from the device, and is thus constant for
     * it. See gdk_device_get_vendor_id() for more information.
     */
    getProductId(): string | null
    /**
     * Returns the #GdkSeat the device belongs to.
     */
    getSeat(): Seat
    /**
     * Determines the type of the device.
     */
    getSource(): InputSource
    /**
     * Returns the vendor ID of this device, or %NULL if this information couldn't
     * be obtained. This ID is retrieved from the device, and is thus constant for
     * it.
     * 
     * This function, together with gdk_device_get_product_id(), can be used to eg.
     * compose #GSettings paths to store settings for this device.
     * 
     * 
     * ```c
     *  static GSettings *
     *  get_device_settings (GdkDevice *device)
     *  {
     *    const gchar *vendor, *product;
     *    GSettings *settings;
     *    GdkDevice *device;
     *    gchar *path;
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
     * 
     */
    getVendorId(): string | null
    /**
     * Obtains the window underneath `device,` returning the location of the device in `win_x` and `win_y`. Returns
     * %NULL if the window tree under `device` is not known to GDK (for example, belongs to another application).
     * 
     * As a slave device coordinates are those of its master pointer, This
     * function may not be called on devices of type %GDK_DEVICE_TYPE_SLAVE,
     * unless there is an ongoing grab on them, see gdk_device_grab().
     */
    getWindowAtPosition(): [ /* returnType */ Window | null, /* winX */ number | null, /* winY */ number | null ]
    /**
     * Obtains the window underneath `device,` returning the location of the device in `win_x` and `win_y` in
     * double precision. Returns %NULL if the window tree under `device` is not known to GDK (for example,
     * belongs to another application).
     * 
     * As a slave device coordinates are those of its master pointer, This
     * function may not be called on devices of type %GDK_DEVICE_TYPE_SLAVE,
     * unless there is an ongoing grab on them, see gdk_device_grab().
     */
    getWindowAtPositionDouble(): [ /* returnType */ Window | null, /* winX */ number | null, /* winY */ number | null ]
    /**
     * Grabs the device so that all events coming from this device are passed to
     * this application until the device is ungrabbed with gdk_device_ungrab(),
     * or the window becomes unviewable. This overrides any previous grab on the device
     * by this client.
     * 
     * Note that `device` and `window` need to be on the same display.
     * 
     * Device grabs are used for operations which need complete control over the
     * given device events (either pointer or keyboard). For example in GTK+ this
     * is used for Drag and Drop operations, popup menus and such.
     * 
     * Note that if the event mask of an X window has selected both button press
     * and button release events, then a button press event will cause an automatic
     * pointer grab until the button is released. X does this automatically since
     * most applications expect to receive button press and release events in pairs.
     * It is equivalent to a pointer grab on the window with `owner_events` set to
     * %TRUE.
     * 
     * If you set up anything at the time you take the grab that needs to be
     * cleaned up when the grab ends, you should handle the #GdkEventGrabBroken
     * events that are emitted when the grab ends unvoluntarily.
     */
    grab(window: Window, grabOwnership: GrabOwnership, ownerEvents: boolean, eventMask: EventMask, cursor: Cursor | null, time: number): GrabStatus
    /**
     * Returns a #GList of #GdkAtoms, containing the labels for
     * the axes that `device` currently has.
     */
    listAxes(): Atom[]
    /**
     * If the device if of type %GDK_DEVICE_TYPE_MASTER, it will return
     * the list of slave devices attached to it, otherwise it will return
     * %NULL
     */
    listSlaveDevices(): Device[] | null
    /**
     * Specifies how an axis of a device is used.
     */
    setAxisUse(index: number, use: AxisUse): void
    /**
     * Specifies the X key event to generate when a macro button of a device
     * is pressed.
     */
    setKey(index: number, keyval: number, modifiers: ModifierType): void
    /**
     * Sets a the mode of an input device. The mode controls if the
     * device is active and whether the device’s range is mapped to the
     * entire screen or to a single window.
     * 
     * Note: This is only meaningful for floating devices, master devices (and
     * slaves connected to these) drive the pointer cursor, which is not limited
     * by the input mode.
     */
    setMode(mode: InputMode): boolean
    /**
     * Release any grab on `device`.
     */
    ungrab(time: number): void
    /**
     * Warps `device` in `display` to the point `x,``y` on
     * the screen `screen,` unless the device is confined
     * to a window by a grab, in which case it will be moved
     * as far as allowed by the grab. Warping the pointer
     * creates events as if the user had moved the mouse
     * instantaneously to the destination.
     * 
     * Note that the pointer should normally be under the
     * control of the user. This function was added to cover
     * some rare use cases like keyboard navigation support
     * for the color picker in the #GtkColorSelectionDialog.
     */
    warp(screen: Screen, x: number, y: number): void
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
    /* Signals of Gdk-3.0.Gdk.Device */
    /**
     * The ::changed signal is emitted either when the #GdkDevice
     * has changed the number of either axes or keys. For example
     * In X this will normally happen when the slave device routing
     * events through the master device changes (for example, user
     * switches from the USB mouse to a tablet), in that case the
     * master device will change to reflect the new slave device
     * axes and keys.
     */
    connect(sigName: "changed", callback: (() => void)): number
    on(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "changed"): void
    /**
     * The ::tool-changed signal is emitted on pen/eraser
     * #GdkDevices whenever tools enter or leave proximity.
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
    connect(sigName: "notify::associated-device", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::associated-device", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::associated-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::associated-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::associated-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::axes", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::axes", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::axes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::axes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::axes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::input-mode", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-mode", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::input-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::input-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::input-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::n-axes", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::n-axes", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::n-axes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::n-axes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::n-axes", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
interface AppLaunchContext_ConstructProps extends Gio.AppLaunchContext_ConstructProps {
    /* Constructor properties of Gdk-3.0.Gdk.AppLaunchContext */
    display?: Display
}
class AppLaunchContext {
    /* Fields of Gio-2.0.Gio.AppLaunchContext */
    readonly parentInstance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gdk-3.0.Gdk.AppLaunchContext */
    /**
     * Sets the workspace on which applications will be launched when
     * using this context when running under a window manager that
     * supports multiple workspaces, as described in the
     * [Extended Window Manager Hints](http://www.freedesktop.org/Standards/wm-spec).
     * 
     * When the workspace is not specified or `desktop` is set to -1,
     * it is up to the window manager to pick one, typically it will
     * be the current workspace.
     */
    setDesktop(desktop: number): void
    /**
     * Sets the display on which applications will be launched when
     * using this context. See also gdk_app_launch_context_set_screen().
     */
    setDisplay(display: Display): void
    /**
     * Sets the icon for applications that are launched with this
     * context.
     * 
     * Window Managers can use this information when displaying startup
     * notification.
     * 
     * See also gdk_app_launch_context_set_icon_name().
     */
    setIcon(icon?: Gio.Icon | null): void
    /**
     * Sets the icon for applications that are launched with this context.
     * The `icon_name` will be interpreted in the same way as the Icon field
     * in desktop files. See also gdk_app_launch_context_set_icon().
     * 
     * If both `icon` and `icon_name` are set, the `icon_name` takes priority.
     * If neither `icon` or `icon_name` is set, the icon is taken from either
     * the file that is passed to launched application or from the #GAppInfo
     * for the launched application itself.
     */
    setIconName(iconName?: string | null): void
    /**
     * Sets the screen on which applications will be launched when
     * using this context. See also gdk_app_launch_context_set_display().
     * 
     * Note that, typically, a #GdkScreen represents a logical screen,
     * not a physical monitor.
     * 
     * If both `screen` and `display` are set, the `screen` takes priority.
     * If neither `screen` or `display` are set, the default screen and
     * display are used.
     */
    setScreen(screen: Screen): void
    /**
     * Sets the timestamp of `context`. The timestamp should ideally
     * be taken from the event that triggered the launch.
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
    /* Static methods and pseudo-constructors */
    static new(): AppLaunchContext
    /* Function overloads */
    static new(): AppLaunchContext
    static $gtype: GObject.Type
}
interface Cursor_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gdk-3.0.Gdk.Cursor */
    cursorType?: CursorType
    display?: Display
}
class Cursor {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gdk-3.0.Gdk.Cursor */
    /**
     * Returns the cursor type for this cursor.
     */
    getCursorType(): CursorType
    /**
     * Returns the display on which the #GdkCursor is defined.
     */
    getDisplay(): Display
    /**
     * Returns a #GdkPixbuf with the image used to display the cursor.
     * 
     * Note that depending on the capabilities of the windowing system and
     * on the cursor, GDK may not be able to obtain the image data. In this
     * case, %NULL is returned.
     */
    getImage(): GdkPixbuf.Pixbuf | null
    /**
     * Returns a cairo image surface with the image used to display the cursor.
     * 
     * Note that depending on the capabilities of the windowing system and
     * on the cursor, GDK may not be able to obtain the image data. In this
     * case, %NULL is returned.
     */
    getSurface(): [ /* returnType */ cairo.Surface | null, /* xHot */ number | null, /* yHot */ number | null ]
    /**
     * Adds a reference to `cursor`.
     */
    ref(): Cursor
    /**
     * Removes a reference from `cursor,` deallocating the cursor
     * if no references remain.
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
    static new(cursorType: CursorType): Cursor
    static newForDisplay(display: Display, cursorType: CursorType): Cursor
    static newFromName(display: Display, name: string): Cursor
    static newFromPixbuf(display: Display, pixbuf: GdkPixbuf.Pixbuf, x: number, y: number): Cursor
    static newFromSurface(display: Display, surface: cairo.Surface, x: number, y: number): Cursor
    static $gtype: GObject.Type
}
interface Device_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gdk-3.0.Gdk.Device */
    /**
     * The #GdkDeviceManager the #GdkDevice pertains to.
     */
    deviceManager?: DeviceManager
    /**
     * The #GdkDisplay the #GdkDevice pertains to.
     */
    display?: Display
    /**
     * Whether the device is represented by a cursor on the screen. Devices of type
     * %GDK_DEVICE_TYPE_MASTER will have %TRUE here.
     */
    hasCursor?: boolean
    inputMode?: InputMode
    /**
     * Source type for the device.
     */
    inputSource?: InputSource
    /**
     * The device name.
     */
    name?: string
    /**
     * The maximal number of concurrent touches on a touch device.
     * Will be 0 if the device is not a touch device or if the number
     * of touches is unknown.
     */
    numTouches?: number
    /**
     * Product ID of this device, see gdk_device_get_product_id().
     */
    productId?: string
    /**
     * #GdkSeat of this device.
     */
    seat?: Seat
    /**
     * Device role in the device manager.
     */
    type?: DeviceType
    /**
     * Vendor ID of this device, see gdk_device_get_vendor_id().
     */
    vendorId?: string
}
class Device {
    /* Properties of Gdk-3.0.Gdk.Device */
    /**
     * Associated pointer or keyboard with this device, if any. Devices of type #GDK_DEVICE_TYPE_MASTER
     * always come in keyboard/pointer pairs. Other device types will have a %NULL associated device.
     */
    readonly associatedDevice: Device
    /**
     * The axes currently available for this device.
     */
    readonly axes: AxisFlags
    inputMode: InputMode
    /**
     * Number of axes in the device.
     */
    readonly nAxes: number
    /**
     * #GdkSeat of this device.
     */
    seat: Seat
    readonly tool: DeviceTool
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gdk-3.0.Gdk.Device */
    /**
     * Returns the associated device to `device,` if `device` is of type
     * %GDK_DEVICE_TYPE_MASTER, it will return the paired pointer or
     * keyboard.
     * 
     * If `device` is of type %GDK_DEVICE_TYPE_SLAVE, it will return
     * the master device to which `device` is attached to.
     * 
     * If `device` is of type %GDK_DEVICE_TYPE_FLOATING, %NULL will be
     * returned, as there is no associated device.
     */
    getAssociatedDevice(): Device | null
    /**
     * Returns the axes currently available on the device.
     */
    getAxes(): AxisFlags
    /**
     * Returns the axis use for `index_`.
     */
    getAxisUse(index: number): AxisUse
    /**
     * Returns the device type for `device`.
     */
    getDeviceType(): DeviceType
    /**
     * Returns the #GdkDisplay to which `device` pertains.
     */
    getDisplay(): Display
    /**
     * Determines whether the pointer follows device motion.
     * This is not meaningful for keyboard devices, which don't have a pointer.
     */
    getHasCursor(): boolean
    /**
     * If `index_` has a valid keyval, this function will return %TRUE
     * and fill in `keyval` and `modifiers` with the keyval settings.
     */
    getKey(index: number): [ /* returnType */ boolean, /* keyval */ number, /* modifiers */ ModifierType ]
    /**
     * Gets information about which window the given pointer device is in, based on events
     * that have been received so far from the display server. If another application
     * has a pointer grab, or this application has a grab with owner_events = %FALSE,
     * %NULL may be returned even if the pointer is physically over one of this
     * application's windows.
     */
    getLastEventWindow(): Window | null
    /**
     * Determines the mode of the device.
     */
    getMode(): InputMode
    /**
     * Returns the number of axes the device currently has.
     */
    getNAxes(): number
    /**
     * Returns the number of keys the device currently has.
     */
    getNKeys(): number
    /**
     * Determines the name of the device.
     */
    getName(): string
    /**
     * Gets the current location of `device`. As a slave device
     * coordinates are those of its master pointer, This function
     * may not be called on devices of type %GDK_DEVICE_TYPE_SLAVE,
     * unless there is an ongoing grab on them, see gdk_device_grab().
     */
    getPosition(): [ /* screen */ Screen | null, /* x */ number | null, /* y */ number | null ]
    /**
     * Gets the current location of `device` in double precision. As a slave device's
     * coordinates are those of its master pointer, this function
     * may not be called on devices of type %GDK_DEVICE_TYPE_SLAVE,
     * unless there is an ongoing grab on them. See gdk_device_grab().
     */
    getPositionDouble(): [ /* screen */ Screen | null, /* x */ number | null, /* y */ number | null ]
    /**
     * Returns the product ID of this device, or %NULL if this information couldn't
     * be obtained. This ID is retrieved from the device, and is thus constant for
     * it. See gdk_device_get_vendor_id() for more information.
     */
    getProductId(): string | null
    /**
     * Returns the #GdkSeat the device belongs to.
     */
    getSeat(): Seat
    /**
     * Determines the type of the device.
     */
    getSource(): InputSource
    /**
     * Returns the vendor ID of this device, or %NULL if this information couldn't
     * be obtained. This ID is retrieved from the device, and is thus constant for
     * it.
     * 
     * This function, together with gdk_device_get_product_id(), can be used to eg.
     * compose #GSettings paths to store settings for this device.
     * 
     * 
     * ```c
     *  static GSettings *
     *  get_device_settings (GdkDevice *device)
     *  {
     *    const gchar *vendor, *product;
     *    GSettings *settings;
     *    GdkDevice *device;
     *    gchar *path;
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
     * 
     */
    getVendorId(): string | null
    /**
     * Obtains the window underneath `device,` returning the location of the device in `win_x` and `win_y`. Returns
     * %NULL if the window tree under `device` is not known to GDK (for example, belongs to another application).
     * 
     * As a slave device coordinates are those of its master pointer, This
     * function may not be called on devices of type %GDK_DEVICE_TYPE_SLAVE,
     * unless there is an ongoing grab on them, see gdk_device_grab().
     */
    getWindowAtPosition(): [ /* returnType */ Window | null, /* winX */ number | null, /* winY */ number | null ]
    /**
     * Obtains the window underneath `device,` returning the location of the device in `win_x` and `win_y` in
     * double precision. Returns %NULL if the window tree under `device` is not known to GDK (for example,
     * belongs to another application).
     * 
     * As a slave device coordinates are those of its master pointer, This
     * function may not be called on devices of type %GDK_DEVICE_TYPE_SLAVE,
     * unless there is an ongoing grab on them, see gdk_device_grab().
     */
    getWindowAtPositionDouble(): [ /* returnType */ Window | null, /* winX */ number | null, /* winY */ number | null ]
    /**
     * Grabs the device so that all events coming from this device are passed to
     * this application until the device is ungrabbed with gdk_device_ungrab(),
     * or the window becomes unviewable. This overrides any previous grab on the device
     * by this client.
     * 
     * Note that `device` and `window` need to be on the same display.
     * 
     * Device grabs are used for operations which need complete control over the
     * given device events (either pointer or keyboard). For example in GTK+ this
     * is used for Drag and Drop operations, popup menus and such.
     * 
     * Note that if the event mask of an X window has selected both button press
     * and button release events, then a button press event will cause an automatic
     * pointer grab until the button is released. X does this automatically since
     * most applications expect to receive button press and release events in pairs.
     * It is equivalent to a pointer grab on the window with `owner_events` set to
     * %TRUE.
     * 
     * If you set up anything at the time you take the grab that needs to be
     * cleaned up when the grab ends, you should handle the #GdkEventGrabBroken
     * events that are emitted when the grab ends unvoluntarily.
     */
    grab(window: Window, grabOwnership: GrabOwnership, ownerEvents: boolean, eventMask: EventMask, cursor: Cursor | null, time: number): GrabStatus
    /**
     * Returns a #GList of #GdkAtoms, containing the labels for
     * the axes that `device` currently has.
     */
    listAxes(): Atom[]
    /**
     * If the device if of type %GDK_DEVICE_TYPE_MASTER, it will return
     * the list of slave devices attached to it, otherwise it will return
     * %NULL
     */
    listSlaveDevices(): Device[] | null
    /**
     * Specifies how an axis of a device is used.
     */
    setAxisUse(index: number, use: AxisUse): void
    /**
     * Specifies the X key event to generate when a macro button of a device
     * is pressed.
     */
    setKey(index: number, keyval: number, modifiers: ModifierType): void
    /**
     * Sets a the mode of an input device. The mode controls if the
     * device is active and whether the device’s range is mapped to the
     * entire screen or to a single window.
     * 
     * Note: This is only meaningful for floating devices, master devices (and
     * slaves connected to these) drive the pointer cursor, which is not limited
     * by the input mode.
     */
    setMode(mode: InputMode): boolean
    /**
     * Release any grab on `device`.
     */
    ungrab(time: number): void
    /**
     * Warps `device` in `display` to the point `x,``y` on
     * the screen `screen,` unless the device is confined
     * to a window by a grab, in which case it will be moved
     * as far as allowed by the grab. Warping the pointer
     * creates events as if the user had moved the mouse
     * instantaneously to the destination.
     * 
     * Note that the pointer should normally be under the
     * control of the user. This function was added to cover
     * some rare use cases like keyboard navigation support
     * for the color picker in the #GtkColorSelectionDialog.
     */
    warp(screen: Screen, x: number, y: number): void
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
    /* Signals of Gdk-3.0.Gdk.Device */
    /**
     * The ::changed signal is emitted either when the #GdkDevice
     * has changed the number of either axes or keys. For example
     * In X this will normally happen when the slave device routing
     * events through the master device changes (for example, user
     * switches from the USB mouse to a tablet), in that case the
     * master device will change to reflect the new slave device
     * axes and keys.
     */
    connect(sigName: "changed", callback: (() => void)): number
    on(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "changed"): void
    /**
     * The ::tool-changed signal is emitted on pen/eraser
     * #GdkDevices whenever tools enter or leave proximity.
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
    connect(sigName: "notify::associated-device", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::associated-device", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::associated-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::associated-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::associated-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::axes", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::axes", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::axes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::axes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::axes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::input-mode", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-mode", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::input-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::input-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::input-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::n-axes", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::n-axes", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::n-axes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::n-axes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::n-axes", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
    /* Static methods and pseudo-constructors */
    /**
     * Determines information about the current keyboard grab.
     * This is not public API and must not be used by applications.
     */
    static grabInfoLibgtkOnly(display: Display, device: Device): [ /* returnType */ boolean, /* grabWindow */ Window, /* ownerEvents */ boolean ]
    static $gtype: GObject.Type
}
interface DeviceManager_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gdk-3.0.Gdk.DeviceManager */
    display?: Display
}
class DeviceManager {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gdk-3.0.Gdk.DeviceManager */
    /**
     * Returns the client pointer, that is, the master pointer that acts as the core pointer
     * for this application. In X11, window managers may change this depending on the interaction
     * pattern under the presence of several pointers.
     * 
     * You should use this function seldomly, only in code that isn’t triggered by a #GdkEvent
     * and there aren’t other means to get a meaningful #GdkDevice to operate on.
     */
    getClientPointer(): Device
    /**
     * Gets the #GdkDisplay associated to `device_manager`.
     */
    getDisplay(): Display | null
    /**
     * Returns the list of devices of type `type` currently attached to
     * `device_manager`.
     */
    listDevices(type: DeviceType): Device[]
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
    /* Signals of Gdk-3.0.Gdk.DeviceManager */
    /**
     * The ::device-added signal is emitted either when a new master
     * pointer is created, or when a slave (Hardware) input device
     * is plugged in.
     */
    connect(sigName: "device-added", callback: ((device: Device) => void)): number
    on(sigName: "device-added", callback: (device: Device) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "device-added", callback: (device: Device) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "device-added", callback: (device: Device) => void): NodeJS.EventEmitter
    emit(sigName: "device-added", device: Device): void
    /**
     * The ::device-changed signal is emitted whenever a device
     * has changed in the hierarchy, either slave devices being
     * disconnected from their master device or connected to
     * another one, or master devices being added or removed
     * a slave device.
     * 
     * If a slave device is detached from all master devices
     * (gdk_device_get_associated_device() returns %NULL), its
     * #GdkDeviceType will change to %GDK_DEVICE_TYPE_FLOATING,
     * if it's attached, it will change to %GDK_DEVICE_TYPE_SLAVE.
     */
    connect(sigName: "device-changed", callback: ((device: Device) => void)): number
    on(sigName: "device-changed", callback: (device: Device) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "device-changed", callback: (device: Device) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "device-changed", callback: (device: Device) => void): NodeJS.EventEmitter
    emit(sigName: "device-changed", device: Device): void
    /**
     * The ::device-removed signal is emitted either when a master
     * pointer is removed, or when a slave (Hardware) input device
     * is unplugged.
     */
    connect(sigName: "device-removed", callback: ((device: Device) => void)): number
    on(sigName: "device-removed", callback: (device: Device) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "device-removed", callback: (device: Device) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "device-removed", callback: (device: Device) => void): NodeJS.EventEmitter
    emit(sigName: "device-removed", device: Device): void
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
    constructor (config?: DeviceManager_ConstructProps)
    _init (config?: DeviceManager_ConstructProps): void
    static $gtype: GObject.Type
}
interface DeviceTool_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gdk-3.0.Gdk.DeviceTool */
    axes?: AxisFlags
    hardwareId?: number
    serial?: number
    toolType?: DeviceToolType
}
class DeviceTool {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gdk-3.0.Gdk.DeviceTool */
    /**
     * Gets the hardware ID of this tool, or 0 if it's not known. When
     * non-zero, the identificator is unique for the given tool model,
     * meaning that two identical tools will share the same `hardware_id,`
     * but will have different serial numbers (see gdk_device_tool_get_serial()).
     * 
     * This is a more concrete (and device specific) method to identify
     * a #GdkDeviceTool than gdk_device_tool_get_tool_type(), as a tablet
     * may support multiple devices with the same #GdkDeviceToolType,
     * but having different hardware identificators.
     */
    getHardwareId(): number
    /**
     * Gets the serial of this tool, this value can be used to identify a
     * physical tool (eg. a tablet pen) across program executions.
     */
    getSerial(): number
    /**
     * Gets the #GdkDeviceToolType of the tool.
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
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gdk-3.0.Gdk.Display */
    /**
     * Emits a short beep on `display`
     */
    beep(): void
    /**
     * Closes the connection to the windowing system for the given display,
     * and cleans up associated resources.
     */
    close(): void
    /**
     * Returns %TRUE if there is an ongoing grab on `device` for `display`.
     */
    deviceIsGrabbed(device: Device): boolean
    /**
     * Flushes any requests queued for the windowing system; this happens automatically
     * when the main loop blocks waiting for new events, but if your application
     * is drawing without returning control to the main loop, you may need
     * to call this function explicitly. A common case where this function
     * needs to be called is when an application is executing drawing commands
     * from a thread other than the thread where the main loop is running.
     * 
     * This is most useful for X11. On windowing systems where requests are
     * handled synchronously, this function will do nothing.
     */
    flush(): void
    /**
     * Returns a #GdkAppLaunchContext suitable for launching
     * applications on the given display.
     */
    getAppLaunchContext(): AppLaunchContext
    /**
     * Returns the default size to use for cursors on `display`.
     */
    getDefaultCursorSize(): number
    /**
     * Returns the default group leader window for all toplevel windows
     * on `display`. This window is implicitly created by GDK.
     * See gdk_window_set_group().
     */
    getDefaultGroup(): Window
    /**
     * Get the default #GdkScreen for `display`.
     */
    getDefaultScreen(): Screen
    /**
     * Returns the default #GdkSeat for this display.
     */
    getDefaultSeat(): Seat
    /**
     * Returns the #GdkDeviceManager associated to `display`.
     */
    getDeviceManager(): DeviceManager | null
    /**
     * Gets the next #GdkEvent to be processed for `display,` fetching events from the
     * windowing system if necessary.
     */
    getEvent(): Event | null
    /**
     * Gets the maximal size to use for cursors on `display`.
     */
    getMaximalCursorSize(): [ /* width */ number, /* height */ number ]
    /**
     * Gets a monitor associated with this display.
     */
    getMonitor(monitorNum: number): Monitor | null
    /**
     * Gets the monitor in which the point (`x,` `y)` is located,
     * or a nearby monitor if the point is not in any monitor.
     */
    getMonitorAtPoint(x: number, y: number): Monitor
    /**
     * Gets the monitor in which the largest area of `window`
     * resides, or a monitor close to `window` if it is outside
     * of all monitors.
     */
    getMonitorAtWindow(window: Window): Monitor
    /**
     * Gets the number of monitors that belong to `display`.
     * 
     * The returned number is valid until the next emission of the
     * #GdkDisplay::monitor-added or #GdkDisplay::monitor-removed signal.
     */
    getNMonitors(): number
    /**
     * Gets the number of screen managed by the `display`.
     */
    getNScreens(): number
    /**
     * Gets the name of the display.
     */
    getName(): string
    /**
     * Gets the current location of the pointer and the current modifier
     * mask for a given display.
     */
    getPointer(): [ /* screen */ Screen | null, /* x */ number | null, /* y */ number | null, /* mask */ ModifierType | null ]
    /**
     * Gets the primary monitor for the display.
     * 
     * The primary monitor is considered the monitor where the “main desktop”
     * lives. While normal application windows typically allow the window
     * manager to place the windows, specialized desktop applications
     * such as panels should place themselves on the primary monitor.
     */
    getPrimaryMonitor(): Monitor | null
    /**
     * Returns a screen object for one of the screens of the display.
     */
    getScreen(screenNum: number): Screen
    /**
     * Obtains the window underneath the mouse pointer, returning the location
     * of the pointer in that window in `win_x,` `win_y` for `screen`. Returns %NULL
     * if the window under the mouse pointer is not known to GDK (for example,
     * belongs to another application).
     */
    getWindowAtPointer(): [ /* returnType */ Window | null, /* winX */ number | null, /* winY */ number | null ]
    /**
     * Returns whether the display has events that are waiting
     * to be processed.
     */
    hasPending(): boolean
    /**
     * Finds out if the display has been closed.
     */
    isClosed(): boolean
    /**
     * Release any keyboard grab
     */
    keyboardUngrab(time: number): void
    /**
     * Returns the list of available input devices attached to `display`.
     * The list is statically allocated and should not be freed.
     */
    listDevices(): Device[]
    /**
     * Returns the list of seats known to `display`.
     */
    listSeats(): Seat[]
    /**
     * Indicates to the GUI environment that the application has
     * finished loading, using a given identifier.
     * 
     * GTK+ will call this function automatically for #GtkWindow
     * with custom startup-notification identifier unless
     * gtk_window_set_auto_startup_notification() is called to
     * disable that feature.
     */
    notifyStartupComplete(startupId: string): void
    /**
     * Gets a copy of the first #GdkEvent in the `display’`s event queue, without
     * removing the event from the queue.  (Note that this function will
     * not get more events from the windowing system.  It only checks the events
     * that have already been moved to the GDK event queue.)
     */
    peekEvent(): Event | null
    /**
     * Test if the pointer is grabbed.
     */
    pointerIsGrabbed(): boolean
    /**
     * Release any pointer grab.
     */
    pointerUngrab(time: number): void
    /**
     * Appends a copy of the given event onto the front of the event
     * queue for `display`.
     */
    putEvent(event: Event): void
    /**
     * Request #GdkEventOwnerChange events for ownership changes
     * of the selection named by the given atom.
     */
    requestSelectionNotification(selection: Atom): boolean
    /**
     * Sets the double click distance (two clicks within this distance
     * count as a double click and result in a #GDK_2BUTTON_PRESS event).
     * See also gdk_display_set_double_click_time().
     * Applications should not set this, it is a global
     * user-configured setting.
     */
    setDoubleClickDistance(distance: number): void
    /**
     * Sets the double click time (two clicks within this time interval
     * count as a double click and result in a #GDK_2BUTTON_PRESS event).
     * Applications should not set this, it is a global
     * user-configured setting.
     */
    setDoubleClickTime(msec: number): void
    /**
     * Issues a request to the clipboard manager to store the
     * clipboard data. On X11, this is a special program that works
     * according to the
     * [FreeDesktop Clipboard Specification](http://www.freedesktop.org/Standards/clipboard-manager-spec).
     */
    storeClipboard(clipboardWindow: Window, time: number, targets: Atom[] | null): void
    /**
     * Returns whether the speicifed display supports clipboard
     * persistance; i.e. if it’s possible to store the clipboard data after an
     * application has quit. On X11 this checks if a clipboard daemon is
     * running.
     */
    supportsClipboardPersistence(): boolean
    /**
     * Returns %TRUE if gdk_window_set_composited() can be used
     * to redirect drawing on the window using compositing.
     * 
     * Currently this only works on X11 with XComposite and
     * XDamage extensions available.
     */
    supportsComposite(): boolean
    /**
     * Returns %TRUE if cursors can use an 8bit alpha channel
     * on `display`. Otherwise, cursors are restricted to bilevel
     * alpha (i.e. a mask).
     */
    supportsCursorAlpha(): boolean
    /**
     * Returns %TRUE if multicolored cursors are supported
     * on `display`. Otherwise, cursors have only a forground
     * and a background color.
     */
    supportsCursorColor(): boolean
    /**
     * Returns %TRUE if gdk_window_input_shape_combine_mask() can
     * be used to modify the input shape of windows on `display`.
     */
    supportsInputShapes(): boolean
    /**
     * Returns whether #GdkEventOwnerChange events will be
     * sent when the owner of a selection changes.
     */
    supportsSelectionNotification(): boolean
    /**
     * Returns %TRUE if gdk_window_shape_combine_mask() can
     * be used to create shaped windows on `display`.
     */
    supportsShapes(): boolean
    /**
     * Flushes any requests queued for the windowing system and waits until all
     * requests have been handled. This is often used for making sure that the
     * display is synchronized with the current state of the program. Calling
     * gdk_display_sync() before gdk_error_trap_pop() makes sure that any errors
     * generated from earlier requests are handled before the error trap is
     * removed.
     * 
     * This is most useful for X11. On windowing systems where requests are
     * handled synchronously, this function will do nothing.
     */
    sync(): void
    /**
     * Warps the pointer of `display` to the point `x,``y` on
     * the screen `screen,` unless the pointer is confined
     * to a window by a grab, in which case it will be moved
     * as far as allowed by the grab. Warping the pointer
     * creates events as if the user had moved the mouse
     * instantaneously to the destination.
     * 
     * Note that the pointer should normally be under the
     * control of the user. This function was added to cover
     * some rare use cases like keyboard navigation support
     * for the color picker in the #GtkColorSelectionDialog.
     */
    warpPointer(screen: Screen, x: number, y: number): void
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
    /* Signals of Gdk-3.0.Gdk.Display */
    /**
     * The ::closed signal is emitted when the connection to the windowing
     * system for `display` is closed.
     */
    connect(sigName: "closed", callback: ((isError: boolean) => void)): number
    on(sigName: "closed", callback: (isError: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "closed", callback: (isError: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "closed", callback: (isError: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "closed", isError: boolean): void
    /**
     * The ::monitor-added signal is emitted whenever a monitor is
     * added.
     */
    connect(sigName: "monitor-added", callback: ((monitor: Monitor) => void)): number
    on(sigName: "monitor-added", callback: (monitor: Monitor) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "monitor-added", callback: (monitor: Monitor) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "monitor-added", callback: (monitor: Monitor) => void): NodeJS.EventEmitter
    emit(sigName: "monitor-added", monitor: Monitor): void
    /**
     * The ::monitor-removed signal is emitted whenever a monitor is
     * removed.
     */
    connect(sigName: "monitor-removed", callback: ((monitor: Monitor) => void)): number
    on(sigName: "monitor-removed", callback: (monitor: Monitor) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "monitor-removed", callback: (monitor: Monitor) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "monitor-removed", callback: (monitor: Monitor) => void): NodeJS.EventEmitter
    emit(sigName: "monitor-removed", monitor: Monitor): void
    /**
     * The ::opened signal is emitted when the connection to the windowing
     * system for `display` is opened.
     */
    connect(sigName: "opened", callback: (() => void)): number
    on(sigName: "opened", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "opened", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "opened", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "opened"): void
    /**
     * The ::seat-added signal is emitted whenever a new seat is made
     * known to the windowing system.
     */
    connect(sigName: "seat-added", callback: ((seat: Seat) => void)): number
    on(sigName: "seat-added", callback: (seat: Seat) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "seat-added", callback: (seat: Seat) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "seat-added", callback: (seat: Seat) => void): NodeJS.EventEmitter
    emit(sigName: "seat-added", seat: Seat): void
    /**
     * The ::seat-removed signal is emitted whenever a seat is removed
     * by the windowing system.
     */
    connect(sigName: "seat-removed", callback: ((seat: Seat) => void)): number
    on(sigName: "seat-removed", callback: (seat: Seat) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "seat-removed", callback: (seat: Seat) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "seat-removed", callback: (seat: Seat) => void): NodeJS.EventEmitter
    emit(sigName: "seat-removed", seat: Seat): void
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
    constructor (config?: Display_ConstructProps)
    _init (config?: Display_ConstructProps): void
    /* Static methods and pseudo-constructors */
    /**
     * Gets the default #GdkDisplay. This is a convenience
     * function for:
     * `gdk_display_manager_get_default_display (gdk_display_manager_get ())`.
     */
    static getDefault(): Display | null
    /**
     * Opens a display.
     */
    static open(displayName: string): Display | null
    /**
     * Opens the default display specified by command line arguments or
     * environment variables, sets it as the default display, and returns
     * it. gdk_parse_args() must have been called first. If the default
     * display has previously been set, simply returns that. An internal
     * function that should not be used by applications.
     */
    static openDefaultLibgtkOnly(): Display | null
    static $gtype: GObject.Type
}
interface DisplayManager_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gdk-3.0.Gdk.DisplayManager */
    defaultDisplay?: Display
}
class DisplayManager {
    /* Properties of Gdk-3.0.Gdk.DisplayManager */
    defaultDisplay: Display
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gdk-3.0.Gdk.DisplayManager */
    /**
     * Gets the default #GdkDisplay.
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
    /* Signals of Gdk-3.0.Gdk.DisplayManager */
    /**
     * The ::display-opened signal is emitted when a display is opened.
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
     * Gets the singleton #GdkDisplayManager object.
     * 
     * When called for the first time, this function consults the
     * `GDK_BACKEND` environment variable to find out which
     * of the supported GDK backends to use (in case GDK has been compiled
     * with multiple backends). Applications can use gdk_set_allowed_backends()
     * to limit what backends can be used.
     */
    static get(): DisplayManager
    static $gtype: GObject.Type
}
interface DragContext_ConstructProps extends GObject.Object_ConstructProps {
}
class DragContext {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gdk-3.0.Gdk.DragContext */
    /**
     * Determines the bitmask of actions proposed by the source if
     * gdk_drag_context_get_suggested_action() returns %GDK_ACTION_ASK.
     */
    getActions(): DragAction
    /**
     * Returns the destination window for the DND operation.
     */
    getDestWindow(): Window
    /**
     * Returns the #GdkDevice associated to the drag context.
     */
    getDevice(): Device
    /**
     * Returns the window on which the drag icon should be rendered
     * during the drag operation. Note that the window may not be
     * available until the drag operation has begun. GDK will move
     * the window in accordance with the ongoing drag operation.
     * The window is owned by `context` and will be destroyed when
     * the drag operation is over.
     */
    getDragWindow(): Window | null
    /**
     * Returns the drag protocol that is used by this context.
     */
    getProtocol(): DragProtocol
    /**
     * Determines the action chosen by the drag destination.
     */
    getSelectedAction(): DragAction
    /**
     * Returns the #GdkWindow where the DND operation started.
     */
    getSourceWindow(): Window
    /**
     * Determines the suggested drag action of the context.
     */
    getSuggestedAction(): DragAction
    /**
     * Retrieves the list of targets of the context.
     */
    listTargets(): Atom[]
    /**
     * Requests the drag and drop operation to be managed by `context`.
     * When a drag and drop operation becomes managed, the #GdkDragContext
     * will internally handle all input and source-side #GdkEventDND events
     * as required by the windowing system.
     * 
     * Once the drag and drop operation is managed, the drag context will
     * emit the following signals:
     * - The #GdkDragContext::action-changed signal whenever the final action
     *   to be performed by the drag and drop operation changes.
     * - The #GdkDragContext::drop-performed signal after the user performs
     *   the drag and drop gesture (typically by releasing the mouse button).
     * - The #GdkDragContext::dnd-finished signal after the drag and drop
     *   operation concludes (after all #GdkSelection transfers happen).
     * - The #GdkDragContext::cancel signal if the drag and drop operation is
     *   finished but doesn't happen over an accepting destination, or is
     *   cancelled through other means.
     */
    manageDnd(ipcWindow: Window, actions: DragAction): boolean
    /**
     * Associates a #GdkDevice to `context,` so all Drag and Drop events
     * for `context` are emitted as if they came from this device.
     */
    setDevice(device: Device): void
    /**
     * Sets the position of the drag window that will be kept
     * under the cursor hotspot. Initially, the hotspot is at the
     * top left corner of the drag window.
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
    /* Signals of Gdk-3.0.Gdk.DragContext */
    /**
     * A new action is being chosen for the drag and drop operation.
     * 
     * This signal will only be emitted if the #GdkDragContext manages
     * the drag and drop operation. See gdk_drag_context_manage_dnd()
     * for more information.
     */
    connect(sigName: "action-changed", callback: ((action: DragAction) => void)): number
    on(sigName: "action-changed", callback: (action: DragAction) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "action-changed", callback: (action: DragAction) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "action-changed", callback: (action: DragAction) => void): NodeJS.EventEmitter
    emit(sigName: "action-changed", action: DragAction): void
    /**
     * The drag and drop operation was cancelled.
     * 
     * This signal will only be emitted if the #GdkDragContext manages
     * the drag and drop operation. See gdk_drag_context_manage_dnd()
     * for more information.
     */
    connect(sigName: "cancel", callback: ((reason: DragCancelReason) => void)): number
    on(sigName: "cancel", callback: (reason: DragCancelReason) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cancel", callback: (reason: DragCancelReason) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cancel", callback: (reason: DragCancelReason) => void): NodeJS.EventEmitter
    emit(sigName: "cancel", reason: DragCancelReason): void
    /**
     * The drag and drop operation was finished, the drag destination
     * finished reading all data. The drag source can now free all
     * miscellaneous data.
     * 
     * This signal will only be emitted if the #GdkDragContext manages
     * the drag and drop operation. See gdk_drag_context_manage_dnd()
     * for more information.
     */
    connect(sigName: "dnd-finished", callback: (() => void)): number
    on(sigName: "dnd-finished", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "dnd-finished", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "dnd-finished", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "dnd-finished"): void
    /**
     * The drag and drop operation was performed on an accepting client.
     * 
     * This signal will only be emitted if the #GdkDragContext manages
     * the drag and drop operation. See gdk_drag_context_manage_dnd()
     * for more information.
     */
    connect(sigName: "drop-performed", callback: ((time: number) => void)): number
    on(sigName: "drop-performed", callback: (time: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "drop-performed", callback: (time: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "drop-performed", callback: (time: number) => void): NodeJS.EventEmitter
    emit(sigName: "drop-performed", time: number): void
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
    constructor (config?: DragContext_ConstructProps)
    _init (config?: DragContext_ConstructProps): void
    static $gtype: GObject.Type
}
interface DrawingContext_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gdk-3.0.Gdk.DrawingContext */
    /**
     * The clip region applied to the drawing context.
     */
    clip?: cairo.Region
    /**
     * The #GdkWindow that created the drawing context.
     */
    window?: Window
}
class DrawingContext {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gdk-3.0.Gdk.DrawingContext */
    /**
     * Retrieves a Cairo context to be used to draw on the #GdkWindow
     * that created the #GdkDrawingContext.
     * 
     * The returned context is guaranteed to be valid as long as the
     * #GdkDrawingContext is valid, that is between a call to
     * gdk_window_begin_draw_frame() and gdk_window_end_draw_frame().
     */
    getCairoContext(): cairo.Context
    /**
     * Retrieves a copy of the clip region used when creating the `context`.
     */
    getClip(): cairo.Region | null
    /**
     * Retrieves the window that created the drawing `context`.
     */
    getWindow(): Window
    /**
     * Checks whether the given #GdkDrawingContext is valid.
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
    constructor (config?: DrawingContext_ConstructProps)
    _init (config?: DrawingContext_ConstructProps): void
    static $gtype: GObject.Type
}
interface FrameClock_ConstructProps extends GObject.Object_ConstructProps {
}
class FrameClock {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gdk-3.0.Gdk.FrameClock */
    /**
     * Starts updates for an animation. Until a matching call to
     * gdk_frame_clock_end_updating() is made, the frame clock will continually
     * request a new frame with the %GDK_FRAME_CLOCK_PHASE_UPDATE phase.
     * This function may be called multiple times and frames will be
     * requested until gdk_frame_clock_end_updating() is called the same
     * number of times.
     */
    beginUpdating(): void
    /**
     * Stops updates for an animation. See the documentation for
     * gdk_frame_clock_begin_updating().
     */
    endUpdating(): void
    /**
     * Gets the frame timings for the current frame.
     */
    getCurrentTimings(): FrameTimings | null
    /**
     * A #GdkFrameClock maintains a 64-bit counter that increments for
     * each frame drawn.
     */
    getFrameCounter(): number
    /**
     * Gets the time that should currently be used for animations.  Inside
     * the processing of a frame, it’s the time used to compute the
     * animation position of everything in a frame. Outside of a frame, it's
     * the time of the conceptual “previous frame,” which may be either
     * the actual previous frame time, or if that’s too old, an updated
     * time.
     */
    getFrameTime(): number
    /**
     * #GdkFrameClock internally keeps a history of #GdkFrameTimings
     * objects for recent frames that can be retrieved with
     * gdk_frame_clock_get_timings(). The set of stored frames
     * is the set from the counter values given by
     * gdk_frame_clock_get_history_start() and
     * gdk_frame_clock_get_frame_counter(), inclusive.
     */
    getHistoryStart(): number
    /**
     * Using the frame history stored in the frame clock, finds the last
     * known presentation time and refresh interval, and assuming that
     * presentation times are separated by the refresh interval,
     * predicts a presentation time that is a multiple of the refresh
     * interval after the last presentation time, and later than `base_time`.
     */
    getRefreshInfo(baseTime: number): [ /* refreshIntervalReturn */ number | null, /* presentationTimeReturn */ number ]
    /**
     * Retrieves a #GdkFrameTimings object holding timing information
     * for the current frame or a recent frame. The #GdkFrameTimings
     * object may not yet be complete: see gdk_frame_timings_get_complete().
     */
    getTimings(frameCounter: number): FrameTimings | null
    /**
     * Asks the frame clock to run a particular phase. The signal
     * corresponding the requested phase will be emitted the next
     * time the frame clock processes. Multiple calls to
     * gdk_frame_clock_request_phase() will be combined together
     * and only one frame processed. If you are displaying animated
     * content and want to continually request the
     * %GDK_FRAME_CLOCK_PHASE_UPDATE phase for a period of time,
     * you should use gdk_frame_clock_begin_updating() instead, since
     * this allows GTK+ to adjust system parameters to get maximally
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
    /* Signals of Gdk-3.0.Gdk.FrameClock */
    /**
     * This signal ends processing of the frame. Applications
     * should generally not handle this signal.
     */
    connect(sigName: "after-paint", callback: (() => void)): number
    on(sigName: "after-paint", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "after-paint", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "after-paint", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "after-paint"): void
    /**
     * This signal begins processing of the frame. Applications
     * should generally not handle this signal.
     */
    connect(sigName: "before-paint", callback: (() => void)): number
    on(sigName: "before-paint", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "before-paint", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "before-paint", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "before-paint"): void
    /**
     * This signal is used to flush pending motion events that
     * are being batched up and compressed together. Applications
     * should not handle this signal.
     */
    connect(sigName: "flush-events", callback: (() => void)): number
    on(sigName: "flush-events", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "flush-events", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "flush-events", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "flush-events"): void
    /**
     * This signal is emitted as the second step of toolkit and
     * application processing of the frame. Any work to update
     * sizes and positions of application elements should be
     * performed. GTK+ normally handles this internally.
     */
    connect(sigName: "layout", callback: (() => void)): number
    on(sigName: "layout", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "layout", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "layout", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "layout"): void
    /**
     * This signal is emitted as the third step of toolkit and
     * application processing of the frame. The frame is
     * repainted. GDK normally handles this internally and
     * produces expose events, which are turned into GTK+
     * #GtkWidget::draw signals.
     */
    connect(sigName: "paint", callback: (() => void)): number
    on(sigName: "paint", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "paint", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "paint", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "paint"): void
    /**
     * This signal is emitted after processing of the frame is
     * finished, and is handled internally by GTK+ to resume normal
     * event processing. Applications should not handle this signal.
     */
    connect(sigName: "resume-events", callback: (() => void)): number
    on(sigName: "resume-events", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "resume-events", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "resume-events", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "resume-events"): void
    /**
     * This signal is emitted as the first step of toolkit and
     * application processing of the frame. Animations should
     * be updated using gdk_frame_clock_get_frame_time().
     * Applications can connect directly to this signal, or
     * use gtk_widget_add_tick_callback() as a more convenient
     * interface.
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
interface GLContext_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gdk-3.0.Gdk.GLContext */
    /**
     * The #GdkDisplay used to create the #GdkGLContext.
     */
    display?: Display
    /**
     * The #GdkGLContext that this context is sharing data with, or %NULL
     */
    sharedContext?: GLContext
    /**
     * The #GdkWindow the gl context is bound to.
     */
    window?: Window
}
class GLContext {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gdk-3.0.Gdk.GLContext */
    /**
     * Retrieves the value set using gdk_gl_context_set_debug_enabled().
     */
    getDebugEnabled(): boolean
    /**
     * Retrieves the #GdkDisplay the `context` is created for
     */
    getDisplay(): Display | null
    /**
     * Retrieves the value set using gdk_gl_context_set_forward_compatible().
     */
    getForwardCompatible(): boolean
    /**
     * Retrieves the major and minor version requested by calling
     * gdk_gl_context_set_required_version().
     */
    getRequiredVersion(): [ /* major */ number | null, /* minor */ number | null ]
    /**
     * Retrieves the #GdkGLContext that this `context` share data with.
     */
    getSharedContext(): GLContext | null
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
     * Retrieves the #GdkWindow used by the `context`.
     */
    getWindow(): Window | null
    /**
     * Whether the #GdkGLContext is in legacy mode or not.
     * 
     * The #GdkGLContext must be realized before calling this function.
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
     * Makes the `context` the current one.
     */
    makeCurrent(): void
    /**
     * Realizes the given #GdkGLContext.
     * 
     * It is safe to call this function on a realized #GdkGLContext.
     */
    realize(): boolean
    /**
     * Sets whether the #GdkGLContext should perform extra validations and
     * run time checking. This is useful during development, but has
     * additional overhead.
     * 
     * The #GdkGLContext must not be realized or made current prior to
     * calling this function.
     */
    setDebugEnabled(enabled: boolean): void
    /**
     * Sets whether the #GdkGLContext should be forward compatible.
     * 
     * Forward compatibile contexts must not support OpenGL functionality that
     * has been marked as deprecated in the requested version; non-forward
     * compatible contexts, on the other hand, must support both deprecated and
     * non deprecated functionality.
     * 
     * The #GdkGLContext must not be realized or made current prior to calling
     * this function.
     */
    setForwardCompatible(compatible: boolean): void
    /**
     * Sets the major and minor version of OpenGL to request.
     * 
     * Setting `major` and `minor` to zero will use the default values.
     * 
     * The #GdkGLContext must not be realized or made current prior to calling
     * this function.
     */
    setRequiredVersion(major: number, minor: number): void
    /**
     * Requests that GDK create a OpenGL ES context instead of an OpenGL one,
     * if the platform and windowing system allows it.
     * 
     * The `context` must not have been realized.
     * 
     * By default, GDK will attempt to automatically detect whether the
     * underlying GL implementation is OpenGL or OpenGL ES once the `context`
     * is realized.
     * 
     * You should check the return value of gdk_gl_context_get_use_es() after
     * calling gdk_gl_context_realize() to decide whether to use the OpenGL or
     * OpenGL ES API, extensions, or shaders.
     */
    setUseEs(useEs: number): void
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
    constructor (config?: GLContext_ConstructProps)
    _init (config?: GLContext_ConstructProps): void
    /* Static methods and pseudo-constructors */
    /**
     * Clears the current #GdkGLContext.
     * 
     * Any OpenGL call after this function returns will be ignored
     * until gdk_gl_context_make_current() is called.
     */
    static clearCurrent(): void
    /**
     * Retrieves the current #GdkGLContext.
     */
    static getCurrent(): GLContext | null
    static $gtype: GObject.Type
}
interface Keymap_ConstructProps extends GObject.Object_ConstructProps {
}
class Keymap {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gdk-3.0.Gdk.Keymap */
    /**
     * Maps the non-virtual modifiers (i.e Mod2, Mod3, ...) which are set
     * in `state` to the virtual modifiers (i.e. Super, Hyper and Meta) and
     * set the corresponding bits in `state`.
     * 
     * GDK already does this before delivering key events, but for
     * compatibility reasons, it only sets the first virtual modifier
     * it finds, whereas this function sets all matching virtual modifiers.
     * 
     * This function is useful when matching key events against
     * accelerators.
     */
    addVirtualModifiers(state: ModifierType): /* state */ ModifierType
    /**
     * Returns whether the Caps Lock modifer is locked.
     */
    getCapsLockState(): boolean
    /**
     * Returns the direction of effective layout of the keymap.
     */
    getDirection(): Pango.Direction
    /**
     * Returns the keyvals bound to `hardware_keycode`.
     * The Nth #GdkKeymapKey in `keys` is bound to the Nth
     * keyval in `keyvals`. Free the returned arrays with g_free().
     * When a keycode is pressed by the user, the keyval from
     * this list of entries is selected by considering the effective
     * keyboard group and level. See gdk_keymap_translate_keyboard_state().
     */
    getEntriesForKeycode(hardwareKeycode: number): [ /* returnType */ boolean, /* keys */ KeymapKey[] | null, /* keyvals */ number[] | null ]
    /**
     * Obtains a list of keycode/group/level combinations that will
     * generate `keyval`. Groups and levels are two kinds of keyboard mode;
     * in general, the level determines whether the top or bottom symbol
     * on a key is used, and the group determines whether the left or
     * right symbol is used. On US keyboards, the shift key changes the
     * keyboard level, and there are no groups. A group switch key might
     * convert a keyboard between Hebrew to English modes, for example.
     * #GdkEventKey contains a %group field that indicates the active
     * keyboard group. The level is computed from the modifier mask.
     * The returned array should be freed
     * with g_free().
     */
    getEntriesForKeyval(keyval: number): [ /* returnType */ boolean, /* keys */ KeymapKey[] ]
    /**
     * Returns the modifier mask the `keymap’`s windowing system backend
     * uses for a particular purpose.
     * 
     * Note that this function always returns real hardware modifiers, not
     * virtual ones (e.g. it will return #GDK_MOD1_MASK rather than
     * #GDK_META_MASK if the backend maps MOD1 to META), so there are use
     * cases where the return value of this function has to be transformed
     * by gdk_keymap_add_virtual_modifiers() in order to contain the
     * expected result.
     */
    getModifierMask(intent: ModifierIntent): ModifierType
    /**
     * Returns the current modifier state.
     */
    getModifierState(): number
    /**
     * Returns whether the Num Lock modifer is locked.
     */
    getNumLockState(): boolean
    /**
     * Returns whether the Scroll Lock modifer is locked.
     */
    getScrollLockState(): boolean
    /**
     * Determines if keyboard layouts for both right-to-left and left-to-right
     * languages are in use.
     */
    haveBidiLayouts(): boolean
    /**
     * Looks up the keyval mapped to a keycode/group/level triplet.
     * If no keyval is bound to `key,` returns 0. For normal user input,
     * you want to use gdk_keymap_translate_keyboard_state() instead of
     * this function, since the effective group/level may not be
     * the same as the current keyboard state.
     */
    lookupKey(key: KeymapKey): number
    /**
     * Maps the virtual modifiers (i.e. Super, Hyper and Meta) which
     * are set in `state` to their non-virtual counterparts (i.e. Mod2,
     * Mod3,...) and set the corresponding bits in `state`.
     * 
     * This function is useful when matching key events against
     * accelerators.
     */
    mapVirtualModifiers(state: ModifierType): [ /* returnType */ boolean, /* state */ ModifierType ]
    /**
     * Translates the contents of a #GdkEventKey into a keyval, effective
     * group, and level. Modifiers that affected the translation and
     * are thus unavailable for application use are returned in
     * `consumed_modifiers`.
     * See [Groups][key-group-explanation] for an explanation of
     * groups and levels. The `effective_group` is the group that was
     * actually used for the translation; some keys such as Enter are not
     * affected by the active keyboard group. The `level` is derived from
     * `state`. For convenience, #GdkEventKey already contains the translated
     * keyval, so this function isn’t as useful as you might think.
     * 
     * `consumed_modifiers` gives modifiers that should be masked outfrom `state`
     * when comparing this key press to a hot key. For instance, on a US keyboard,
     * the `plus` symbol is shifted, so when comparing a key press to a
     * `<Control>plus` accelerator `<Shift>` should be masked out.
     * 
     * 
     * ```c
     * // We want to ignore irrelevant modifiers like ScrollLock
     * #define ALL_ACCELS_MASK (GDK_CONTROL_MASK | GDK_SHIFT_MASK | GDK_MOD1_MASK)
     * gdk_keymap_translate_keyboard_state (keymap, event->hardware_keycode,
     *                                      event->state, event->group,
     *                                      &keyval, NULL, NULL, &consumed);
     * if (keyval == GDK_PLUS &&
     *     (event->state & ~consumed & ALL_ACCELS_MASK) == GDK_CONTROL_MASK)
     *   // Control was pressed
     * ```
     * 
     * 
     * An older interpretation `consumed_modifiers` was that it contained
     * all modifiers that might affect the translation of the key;
     * this allowed accelerators to be stored with irrelevant consumed
     * modifiers, by doing:
     * 
     * ```c
     * // XXX Don’t do this XXX
     * if (keyval == accel_keyval &&
     *     (event->state & ~consumed & ALL_ACCELS_MASK) == (accel_mods & ~consumed))
     *   // Accelerator was pressed
     * ```
     * 
     * 
     * However, this did not work if multi-modifier combinations were
     * used in the keymap, since, for instance, `<Control>` would be
     * masked out even if only `<Control><Alt>` was used in the keymap.
     * To support this usage as well as well as possible, all single
     * modifier combinations that could affect the key for any combination
     * of modifiers will be returned in `consumed_modifiers;` multi-modifier
     * combinations are returned only when actually found in `state`. When
     * you store accelerators, you should always store them with consumed
     * modifiers removed. Store `<Control>plus`, not `<Control><Shift>plus`,
     */
    translateKeyboardState(hardwareKeycode: number, state: ModifierType, group: number): [ /* returnType */ boolean, /* keyval */ number | null, /* effectiveGroup */ number | null, /* level */ number | null, /* consumedModifiers */ ModifierType | null ]
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
    /* Signals of Gdk-3.0.Gdk.Keymap */
    /**
     * The ::direction-changed signal gets emitted when the direction of
     * the keymap changes.
     */
    connect(sigName: "direction-changed", callback: (() => void)): number
    on(sigName: "direction-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "direction-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "direction-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "direction-changed"): void
    /**
     * The ::keys-changed signal is emitted when the mapping represented by
     * `keymap` changes.
     */
    connect(sigName: "keys-changed", callback: (() => void)): number
    on(sigName: "keys-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "keys-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "keys-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "keys-changed"): void
    /**
     * The ::state-changed signal is emitted when the state of the
     * keyboard changes, e.g when Caps Lock is turned on or off.
     * See gdk_keymap_get_caps_lock_state().
     */
    connect(sigName: "state-changed", callback: (() => void)): number
    on(sigName: "state-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "state-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "state-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "state-changed"): void
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
    constructor (config?: Keymap_ConstructProps)
    _init (config?: Keymap_ConstructProps): void
    /* Static methods and pseudo-constructors */
    /**
     * Returns the #GdkKeymap attached to the default display.
     */
    static getDefault(): Keymap
    /**
     * Returns the #GdkKeymap attached to `display`.
     */
    static getForDisplay(display: Display): Keymap
    static $gtype: GObject.Type
}
interface Monitor_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gdk-3.0.Gdk.Monitor */
    display?: Display
}
class Monitor {
    /* Properties of Gdk-3.0.Gdk.Monitor */
    readonly geometry: Rectangle
    readonly heightMm: number
    readonly manufacturer: string
    readonly model: string
    readonly refreshRate: number
    readonly scaleFactor: number
    readonly subpixelLayout: SubpixelLayout
    readonly widthMm: number
    readonly workarea: Rectangle
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gdk-3.0.Gdk.Monitor */
    /**
     * Gets the display that this monitor belongs to.
     */
    getDisplay(): Display
    /**
     * Retrieves the size and position of an individual monitor within the
     * display coordinate space. The returned geometry is in  ”application pixels”,
     * not in ”device pixels” (see gdk_monitor_get_scale_factor()).
     */
    getGeometry(): /* geometry */ Rectangle
    /**
     * Gets the height in millimeters of the monitor.
     */
    getHeightMm(): number
    /**
     * Gets the name or PNP ID of the monitor's manufacturer, if available.
     * 
     * Note that this value might also vary depending on actual
     * display backend.
     * 
     * PNP ID registry is located at https://uefi.org/pnp_id_list
     */
    getManufacturer(): string | null
    /**
     * Gets the a string identifying the monitor model, if available.
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
     * to the actual device pixels. On traditional systems this is 1, but
     * on very high density outputs this can be a higher value (often 2).
     * 
     * This can be used if you want to create pixel based data for a
     * particular monitor, but most of the time you’re drawing to a window
     * where it is better to use gdk_window_get_scale_factor() instead.
     */
    getScaleFactor(): number
    /**
     * Gets information about the layout of red, green and blue
     * primaries for each pixel in this monitor, if available.
     */
    getSubpixelLayout(): SubpixelLayout
    /**
     * Gets the width in millimeters of the monitor.
     */
    getWidthMm(): number
    /**
     * Retrieves the size and position of the “work area” on a monitor
     * within the display coordinate space. The returned geometry is in
     * ”application pixels”, not in ”device pixels” (see
     * gdk_monitor_get_scale_factor()).
     * 
     * The work area should be considered when positioning menus and
     * similar popups, to avoid placing them below panels, docks or other
     * desktop components.
     * 
     * Note that not all backends may have a concept of workarea. This
     * function will return the monitor geometry if a workarea is not
     * available, or does not apply.
     */
    getWorkarea(): /* workarea */ Rectangle
    /**
     * Gets whether this monitor should be considered primary
     * (see gdk_display_get_primary_monitor()).
     */
    isPrimary(): boolean
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
    /* Signals of Gdk-3.0.Gdk.Monitor */
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
    connect(sigName: "notify::width-mm", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-mm", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::width-mm", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::width-mm", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::width-mm", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::workarea", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::workarea", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::workarea", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::workarea", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::workarea", callback: (...args: any[]) => void): NodeJS.EventEmitter
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
interface Screen_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gdk-3.0.Gdk.Screen */
    fontOptions?: object
    resolution?: number
}
class Screen {
    /* Properties of Gdk-3.0.Gdk.Screen */
    fontOptions: object
    resolution: number
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gdk-3.0.Gdk.Screen */
    /**
     * Returns the screen’s currently active window.
     * 
     * On X11, this is done by inspecting the _NET_ACTIVE_WINDOW property
     * on the root window, as described in the
     * [Extended Window Manager Hints](http://www.freedesktop.org/Standards/wm-spec).
     * If there is no currently currently active
     * window, or the window manager does not support the
     * _NET_ACTIVE_WINDOW hint, this function returns %NULL.
     * 
     * On other platforms, this function may return %NULL, depending on whether
     * it is implementable on that platform.
     * 
     * The returned window should be unrefed using g_object_unref() when
     * no longer needed.
     */
    getActiveWindow(): Window | null
    /**
     * Gets the display to which the `screen` belongs.
     */
    getDisplay(): Display
    /**
     * Gets any options previously set with gdk_screen_set_font_options().
     */
    getFontOptions(): cairo.FontOptions | null
    /**
     * Gets the height of `screen` in pixels. The returned size is in
     * ”application pixels”, not in ”device pixels” (see
     * gdk_screen_get_monitor_scale_factor()).
     */
    getHeight(): number
    /**
     * Returns the height of `screen` in millimeters.
     * 
     * Note that this value is somewhat ill-defined when the screen
     * has multiple monitors of different resolution. It is recommended
     * to use the monitor dimensions instead.
     */
    getHeightMm(): number
    /**
     * Returns the monitor number in which the point (`x,``y)` is located.
     */
    getMonitorAtPoint(x: number, y: number): number
    /**
     * Returns the number of the monitor in which the largest area of the
     * bounding rectangle of `window` resides.
     */
    getMonitorAtWindow(window: Window): number
    /**
     * Retrieves the #GdkRectangle representing the size and position of
     * the individual monitor within the entire screen area. The returned
     * geometry is in ”application pixels”, not in ”device pixels” (see
     * gdk_screen_get_monitor_scale_factor()).
     * 
     * Monitor numbers start at 0. To obtain the number of monitors of
     * `screen,` use gdk_screen_get_n_monitors().
     * 
     * Note that the size of the entire screen area can be retrieved via
     * gdk_screen_get_width() and gdk_screen_get_height().
     */
    getMonitorGeometry(monitorNum: number): /* dest */ Rectangle | null
    /**
     * Gets the height in millimeters of the specified monitor.
     */
    getMonitorHeightMm(monitorNum: number): number
    /**
     * Returns the output name of the specified monitor.
     * Usually something like VGA, DVI, or TV, not the actual
     * product name of the display device.
     */
    getMonitorPlugName(monitorNum: number): string | null
    /**
     * Returns the internal scale factor that maps from monitor coordinates
     * to the actual device pixels. On traditional systems this is 1, but
     * on very high density outputs this can be a higher value (often 2).
     * 
     * This can be used if you want to create pixel based data for a
     * particular monitor, but most of the time you’re drawing to a window
     * where it is better to use gdk_window_get_scale_factor() instead.
     */
    getMonitorScaleFactor(monitorNum: number): number
    /**
     * Gets the width in millimeters of the specified monitor, if available.
     */
    getMonitorWidthMm(monitorNum: number): number
    /**
     * Retrieves the #GdkRectangle representing the size and position of
     * the “work area” on a monitor within the entire screen area. The returned
     * geometry is in ”application pixels”, not in ”device pixels” (see
     * gdk_screen_get_monitor_scale_factor()).
     * 
     * The work area should be considered when positioning menus and
     * similar popups, to avoid placing them below panels, docks or other
     * desktop components.
     * 
     * Note that not all backends may have a concept of workarea. This
     * function will return the monitor geometry if a workarea is not
     * available, or does not apply.
     * 
     * Monitor numbers start at 0. To obtain the number of monitors of
     * `screen,` use gdk_screen_get_n_monitors().
     */
    getMonitorWorkarea(monitorNum: number): /* dest */ Rectangle | null
    /**
     * Returns the number of monitors which `screen` consists of.
     */
    getNMonitors(): number
    /**
     * Gets the index of `screen` among the screens in the display
     * to which it belongs. (See gdk_screen_get_display())
     */
    getNumber(): number
    /**
     * Gets the primary monitor for `screen`.  The primary monitor
     * is considered the monitor where the “main desktop” lives.
     * While normal application windows typically allow the window
     * manager to place the windows, specialized desktop applications
     * such as panels should place themselves on the primary monitor.
     * 
     * If no primary monitor is configured by the user, the return value
     * will be 0, defaulting to the first monitor.
     */
    getPrimaryMonitor(): number
    /**
     * Gets the resolution for font handling on the screen; see
     * gdk_screen_set_resolution() for full details.
     */
    getResolution(): number
    /**
     * Gets a visual to use for creating windows with an alpha channel.
     * The windowing system on which GTK+ is running
     * may not support this capability, in which case %NULL will
     * be returned. Even if a non-%NULL value is returned, its
     * possible that the window’s alpha channel won’t be honored
     * when displaying the window on the screen: in particular, for
     * X an appropriate windowing manager and compositing manager
     * must be running to provide appropriate display.
     * 
     * This functionality is not implemented in the Windows backend.
     * 
     * For setting an overall opacity for a top-level window, see
     * gdk_window_set_opacity().
     */
    getRgbaVisual(): Visual | null
    /**
     * Gets the root window of `screen`.
     */
    getRootWindow(): Window
    /**
     * Retrieves a desktop-wide setting such as double-click time
     * for the #GdkScreen `screen`.
     * 
     * FIXME needs a list of valid settings here, or a link to
     * more information.
     */
    getSetting(name: string, value: any): boolean
    /**
     * Get the system’s default visual for `screen`.
     * This is the visual for the root window of the display.
     * The return value should not be freed.
     */
    getSystemVisual(): Visual
    /**
     * Obtains a list of all toplevel windows known to GDK on the screen `screen`.
     * A toplevel window is a child of the root window (see
     * gdk_get_default_root_window()).
     * 
     * The returned list should be freed with g_list_free(), but
     * its elements need not be freed.
     */
    getToplevelWindows(): Window[]
    /**
     * Gets the width of `screen` in pixels. The returned size is in
     * ”application pixels”, not in ”device pixels” (see
     * gdk_screen_get_monitor_scale_factor()).
     */
    getWidth(): number
    /**
     * Gets the width of `screen` in millimeters.
     * 
     * Note that this value is somewhat ill-defined when the screen
     * has multiple monitors of different resolution. It is recommended
     * to use the monitor dimensions instead.
     */
    getWidthMm(): number
    /**
     * Returns a #GList of #GdkWindows representing the current
     * window stack.
     * 
     * On X11, this is done by inspecting the _NET_CLIENT_LIST_STACKING
     * property on the root window, as described in the
     * [Extended Window Manager Hints](http://www.freedesktop.org/Standards/wm-spec).
     * If the window manager does not support the
     * _NET_CLIENT_LIST_STACKING hint, this function returns %NULL.
     * 
     * On other platforms, this function may return %NULL, depending on whether
     * it is implementable on that platform.
     * 
     * The returned list is newly allocated and owns references to the
     * windows it contains, so it should be freed using g_list_free() and
     * its windows unrefed using g_object_unref() when no longer needed.
     */
    getWindowStack(): Window[] | null
    /**
     * Returns whether windows with an RGBA visual can reasonably
     * be expected to have their alpha channel drawn correctly on
     * the screen.
     * 
     * On X11 this function returns whether a compositing manager is
     * compositing `screen`.
     */
    isComposited(): boolean
    /**
     * Lists the available visuals for the specified `screen`.
     * A visual describes a hardware image data format.
     * For example, a visual might support 24-bit color, or 8-bit color,
     * and might expect pixels to be in a certain format.
     * 
     * Call g_list_free() on the return value when you’re finished with it.
     */
    listVisuals(): Visual[]
    /**
     * Determines the name to pass to gdk_display_open() to get
     * a #GdkDisplay with this screen as the default screen.
     */
    makeDisplayName(): string
    /**
     * Sets the default font options for the screen. These
     * options will be set on any #PangoContext’s newly created
     * with gdk_pango_context_get_for_screen(). Changing the
     * default set of font options does not affect contexts that
     * have already been created.
     */
    setFontOptions(options?: cairo.FontOptions | null): void
    /**
     * Sets the resolution for font handling on the screen. This is a
     * scale factor between points specified in a #PangoFontDescription
     * and cairo units. The default value is 96, meaning that a 10 point
     * font will be 13 units high. (10 * 96. / 72. = 13.3).
     */
    setResolution(dpi: number): void
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
    /* Signals of Gdk-3.0.Gdk.Screen */
    /**
     * The ::composited-changed signal is emitted when the composited
     * status of the screen changes
     */
    connect(sigName: "composited-changed", callback: (() => void)): number
    on(sigName: "composited-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "composited-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "composited-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "composited-changed"): void
    /**
     * The ::monitors-changed signal is emitted when the number, size
     * or position of the monitors attached to the screen change.
     * 
     * Only for X11 and OS X for now. A future implementation for Win32
     * may be a possibility.
     */
    connect(sigName: "monitors-changed", callback: (() => void)): number
    on(sigName: "monitors-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "monitors-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "monitors-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "monitors-changed"): void
    /**
     * The ::size-changed signal is emitted when the pixel width or
     * height of a screen changes.
     */
    connect(sigName: "size-changed", callback: (() => void)): number
    on(sigName: "size-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "size-changed", callback: () => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "size-changed", callback: () => void): NodeJS.EventEmitter
    emit(sigName: "size-changed"): void
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
    connect(sigName: "notify::font-options", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::font-options", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::font-options", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::font-options", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::font-options", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: "notify::resolution", callback: ((pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resolution", callback: ((pspec: GObject.ParamSpec) => void)): number
    on(sigName: "notify::resolution", callback: (...args: any[]) => void): NodeJS.EventEmitter
    once(sigName: "notify::resolution", callback: (...args: any[]) => void): NodeJS.EventEmitter
    off(sigName: "notify::resolution", callback: (...args: any[]) => void): NodeJS.EventEmitter
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Screen_ConstructProps)
    _init (config?: Screen_ConstructProps): void
    /* Static methods and pseudo-constructors */
    /**
     * Gets the default screen for the default display. (See
     * gdk_display_get_default ()).
     */
    static getDefault(): Screen | null
    /**
     * Gets the height of the default screen in pixels. The returned
     * size is in ”application pixels”, not in ”device pixels” (see
     * gdk_screen_get_monitor_scale_factor()).
     */
    static height(): number
    /**
     * Returns the height of the default screen in millimeters.
     * Note that on many X servers this value will not be correct.
     */
    static heightMm(): number
    /**
     * Gets the width of the default screen in pixels. The returned
     * size is in ”application pixels”, not in ”device pixels” (see
     * gdk_screen_get_monitor_scale_factor()).
     */
    static width(): number
    /**
     * Returns the width of the default screen in millimeters.
     * Note that on many X servers this value will not be correct.
     */
    static widthMm(): number
    static $gtype: GObject.Type
}
interface Seat_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gdk-3.0.Gdk.Seat */
    /**
     * #GdkDisplay of this seat.
     */
    display?: Display
}
class Seat {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gdk-3.0.Gdk.Seat */
    /**
     * Returns the capabilities this #GdkSeat currently has.
     */
    getCapabilities(): SeatCapabilities
    /**
     * Returns the #GdkDisplay this seat belongs to.
     */
    getDisplay(): Display
    /**
     * Returns the master device that routes keyboard events.
     */
    getKeyboard(): Device | null
    /**
     * Returns the master device that routes pointer events.
     */
    getPointer(): Device | null
    /**
     * Returns the slave devices that match the given capabilities.
     */
    getSlaves(capabilities: SeatCapabilities): Device[]
    /**
     * Grabs the seat so that all events corresponding to the given `capabilities`
     * are passed to this application until the seat is ungrabbed with gdk_seat_ungrab(),
     * or the window becomes hidden. This overrides any previous grab on the
     * seat by this client.
     * 
     * As a rule of thumb, if a grab is desired over %GDK_SEAT_CAPABILITY_POINTER,
     * all other "pointing" capabilities (eg. %GDK_SEAT_CAPABILITY_TOUCH) should
     * be grabbed too, so the user is able to interact with all of those while
     * the grab holds, you should thus use %GDK_SEAT_CAPABILITY_ALL_POINTING most
     * commonly.
     * 
     * Grabs are used for operations which need complete control over the
     * events corresponding to the given capabilities. For example in GTK+ this
     * is used for Drag and Drop operations, popup menus and such.
     * 
     * Note that if the event mask of a #GdkWindow has selected both button press
     * and button release events, or touch begin and touch end, then a press event
     * will cause an automatic grab until the button is released, equivalent to a
     * grab on the window with `owner_events` set to %TRUE. This is done because most
     * applications expect to receive paired press and release events.
     * 
     * If you set up anything at the time you take the grab that needs to be
     * cleaned up when the grab ends, you should handle the #GdkEventGrabBroken
     * events that are emitted when the grab ends unvoluntarily.
     */
    grab(window: Window, capabilities: SeatCapabilities, ownerEvents: boolean, cursor?: Cursor | null, event?: Event | null, prepareFunc?: SeatGrabPrepareFunc | null): GrabStatus
    /**
     * Releases a grab added through gdk_seat_grab().
     */
    ungrab(): void
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
    /* Signals of Gdk-3.0.Gdk.Seat */
    /**
     * The ::device-added signal is emitted when a new input
     * device is related to this seat.
     */
    connect(sigName: "device-added", callback: ((device: Device) => void)): number
    on(sigName: "device-added", callback: (device: Device) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "device-added", callback: (device: Device) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "device-added", callback: (device: Device) => void): NodeJS.EventEmitter
    emit(sigName: "device-added", device: Device): void
    /**
     * The ::device-removed signal is emitted when an
     * input device is removed (e.g. unplugged).
     */
    connect(sigName: "device-removed", callback: ((device: Device) => void)): number
    on(sigName: "device-removed", callback: (device: Device) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "device-removed", callback: (device: Device) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "device-removed", callback: (device: Device) => void): NodeJS.EventEmitter
    emit(sigName: "device-removed", device: Device): void
    /**
     * The ::tool-added signal is emitted whenever a new tool
     * is made known to the seat. The tool may later be assigned
     * to a device (i.e. on proximity with a tablet). The device
     * will emit the #GdkDevice::tool-changed signal accordingly.
     * 
     * A same tool may be used by several devices.
     */
    connect(sigName: "tool-added", callback: ((tool: DeviceTool) => void)): number
    on(sigName: "tool-added", callback: (tool: DeviceTool) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "tool-added", callback: (tool: DeviceTool) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "tool-added", callback: (tool: DeviceTool) => void): NodeJS.EventEmitter
    emit(sigName: "tool-added", tool: DeviceTool): void
    /**
     * This signal is emitted whenever a tool is no longer known
     * to this `seat`.
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
interface Visual_ConstructProps extends GObject.Object_ConstructProps {
}
class Visual {
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gdk-3.0.Gdk.Visual */
    /**
     * Returns the number of significant bits per red, green and blue value.
     * 
     * Not all GDK backend provide a meaningful value for this function.
     */
    getBitsPerRgb(): number
    /**
     * Obtains values that are needed to calculate blue pixel values in TrueColor
     * and DirectColor. The “mask” is the significant bits within the pixel.
     * The “shift” is the number of bits left we must shift a primary for it
     * to be in position (according to the "mask"). Finally, "precision" refers
     * to how much precision the pixel value contains for a particular primary.
     */
    getBluePixelDetails(): [ /* mask */ number | null, /* shift */ number | null, /* precision */ number | null ]
    /**
     * Returns the byte order of this visual.
     * 
     * The information returned by this function is only relevant
     * when working with XImages, and not all backends return
     * meaningful information for this.
     */
    getByteOrder(): ByteOrder
    /**
     * Returns the size of a colormap for this visual.
     * 
     * You have to use platform-specific APIs to manipulate colormaps.
     */
    getColormapSize(): number
    /**
     * Returns the bit depth of this visual.
     */
    getDepth(): number
    /**
     * Obtains values that are needed to calculate green pixel values in TrueColor
     * and DirectColor. The “mask” is the significant bits within the pixel.
     * The “shift” is the number of bits left we must shift a primary for it
     * to be in position (according to the "mask"). Finally, "precision" refers
     * to how much precision the pixel value contains for a particular primary.
     */
    getGreenPixelDetails(): [ /* mask */ number | null, /* shift */ number | null, /* precision */ number | null ]
    /**
     * Obtains values that are needed to calculate red pixel values in TrueColor
     * and DirectColor. The “mask” is the significant bits within the pixel.
     * The “shift” is the number of bits left we must shift a primary for it
     * to be in position (according to the "mask"). Finally, "precision" refers
     * to how much precision the pixel value contains for a particular primary.
     */
    getRedPixelDetails(): [ /* mask */ number | null, /* shift */ number | null, /* precision */ number | null ]
    /**
     * Gets the screen to which this visual belongs
     */
    getScreen(): Screen
    /**
     * Returns the type of visual this is (PseudoColor, TrueColor, etc).
     */
    getVisualType(): VisualType
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
    constructor (config?: Visual_ConstructProps)
    _init (config?: Visual_ConstructProps): void
    /* Static methods and pseudo-constructors */
    /**
     * Get the visual with the most available colors for the default
     * GDK screen. The return value should not be freed.
     */
    static getBest(): Visual
    /**
     * Get the best available depth for the default GDK screen.  “Best”
     * means “largest,” i.e. 32 preferred over 24 preferred over 8 bits
     * per pixel.
     */
    static getBestDepth(): number
    /**
     * Return the best available visual type for the default GDK screen.
     */
    static getBestType(): VisualType
    /**
     * Combines gdk_visual_get_best_with_depth() and
     * gdk_visual_get_best_with_type().
     */
    static getBestWithBoth(depth: number, visualType: VisualType): Visual | null
    /**
     * Get the best visual with depth `depth` for the default GDK screen.
     * Color visuals and visuals with mutable colormaps are preferred
     * over grayscale or fixed-colormap visuals. The return value should
     * not be freed. %NULL may be returned if no visual supports `depth`.
     */
    static getBestWithDepth(depth: number): Visual
    /**
     * Get the best visual of the given `visual_type` for the default GDK screen.
     * Visuals with higher color depths are considered better. The return value
     * should not be freed. %NULL may be returned if no visual has type
     * `visual_type`.
     */
    static getBestWithType(visualType: VisualType): Visual
    /**
     * Get the system’s default visual for the default GDK screen.
     * This is the visual for the root window of the display.
     * The return value should not be freed.
     */
    static getSystem(): Visual
    static $gtype: GObject.Type
}
interface Window_ConstructProps extends GObject.Object_ConstructProps {
    /* Constructor properties of Gdk-3.0.Gdk.Window */
    /**
     * The mouse pointer for a #GdkWindow. See gdk_window_set_cursor() and
     * gdk_window_get_cursor() for details.
     */
    cursor?: Cursor
}
class Window {
    /* Properties of Gdk-3.0.Gdk.Window */
    /**
     * The mouse pointer for a #GdkWindow. See gdk_window_set_cursor() and
     * gdk_window_get_cursor() for details.
     */
    cursor: Cursor
    /* Fields of GObject-2.0.GObject.Object */
    readonly gTypeInstance: GObject.TypeInstance
    /* Methods of Gdk-3.0.Gdk.Window */
    /**
     * Emits a short beep associated to `window` in the appropriate
     * display, if supported. Otherwise, emits a short beep on
     * the display just as gdk_display_beep().
     */
    beep(): void
    /**
     * Indicates that you are beginning the process of redrawing `region`
     * on `window,` and provides you with a #GdkDrawingContext.
     * 
     * If `window` is a top level #GdkWindow, backed by a native window
     * implementation, a backing store (offscreen buffer) large enough to
     * contain `region` will be created. The backing store will be initialized
     * with the background color or background surface for `window`. Then, all
     * drawing operations performed on `window` will be diverted to the
     * backing store. When you call gdk_window_end_frame(), the contents of
     * the backing store will be copied to `window,` making it visible
     * on screen. Only the part of `window` contained in `region` will be
     * modified; that is, drawing operations are clipped to `region`.
     * 
     * The net result of all this is to remove flicker, because the user
     * sees the finished product appear all at once when you call
     * gdk_window_end_draw_frame(). If you draw to `window` directly without
     * calling gdk_window_begin_draw_frame(), the user may see flicker
     * as individual drawing operations are performed in sequence.
     * 
     * When using GTK+, the widget system automatically places calls to
     * gdk_window_begin_draw_frame() and gdk_window_end_draw_frame() around
     * emissions of the `GtkWidget::draw` signal. That is, if you’re
     * drawing the contents of the widget yourself, you can assume that the
     * widget has a cleared background, is already set as the clip region,
     * and already has a backing store. Therefore in most cases, application
     * code in GTK does not need to call gdk_window_begin_draw_frame()
     * explicitly.
     */
    beginDrawFrame(region: cairo.Region): DrawingContext
    /**
     * Begins a window move operation (for a toplevel window).
     * 
     * This function assumes that the drag is controlled by the
     * client pointer device, use gdk_window_begin_move_drag_for_device()
     * to begin a drag with a different device.
     */
    beginMoveDrag(button: number, rootX: number, rootY: number, timestamp: number): void
    /**
     * Begins a window move operation (for a toplevel window).
     * You might use this function to implement a “window move grip,” for
     * example. The function works best with window managers that support the
     * [Extended Window Manager Hints](http://www.freedesktop.org/Standards/wm-spec)
     * but has a fallback implementation for other window managers.
     */
    beginMoveDragForDevice(device: Device, button: number, rootX: number, rootY: number, timestamp: number): void
    /**
     * A convenience wrapper around gdk_window_begin_paint_region() which
     * creates a rectangular region for you. See
     * gdk_window_begin_paint_region() for details.
     */
    beginPaintRect(rectangle: Rectangle): void
    /**
     * Indicates that you are beginning the process of redrawing `region`.
     * A backing store (offscreen buffer) large enough to contain `region`
     * will be created. The backing store will be initialized with the
     * background color or background surface for `window`. Then, all
     * drawing operations performed on `window` will be diverted to the
     * backing store.  When you call gdk_window_end_paint(), the backing
     * store will be copied to `window,` making it visible onscreen. Only
     * the part of `window` contained in `region` will be modified; that is,
     * drawing operations are clipped to `region`.
     * 
     * The net result of all this is to remove flicker, because the user
     * sees the finished product appear all at once when you call
     * gdk_window_end_paint(). If you draw to `window` directly without
     * calling gdk_window_begin_paint_region(), the user may see flicker
     * as individual drawing operations are performed in sequence.  The
     * clipping and background-initializing features of
     * gdk_window_begin_paint_region() are conveniences for the
     * programmer, so you can avoid doing that work yourself.
     * 
     * When using GTK+, the widget system automatically places calls to
     * gdk_window_begin_paint_region() and gdk_window_end_paint() around
     * emissions of the expose_event signal. That is, if you’re writing an
     * expose event handler, you can assume that the exposed area in
     * #GdkEventExpose has already been cleared to the window background,
     * is already set as the clip region, and already has a backing store.
     * Therefore in most cases, application code need not call
     * gdk_window_begin_paint_region(). (You can disable the automatic
     * calls around expose events on a widget-by-widget basis by calling
     * gtk_widget_set_double_buffered().)
     * 
     * If you call this function multiple times before calling the
     * matching gdk_window_end_paint(), the backing stores are pushed onto
     * a stack. gdk_window_end_paint() copies the topmost backing store
     * onscreen, subtracts the topmost region from all other regions in
     * the stack, and pops the stack. All drawing operations affect only
     * the topmost backing store in the stack. One matching call to
     * gdk_window_end_paint() is required for each call to
     * gdk_window_begin_paint_region().
     */
    beginPaintRegion(region: cairo.Region): void
    /**
     * Begins a window resize operation (for a toplevel window).
     * 
     * This function assumes that the drag is controlled by the
     * client pointer device, use gdk_window_begin_resize_drag_for_device()
     * to begin a drag with a different device.
     */
    beginResizeDrag(edge: WindowEdge, button: number, rootX: number, rootY: number, timestamp: number): void
    /**
     * Begins a window resize operation (for a toplevel window).
     * You might use this function to implement a “window resize grip,” for
     * example; in fact #GtkStatusbar uses it. The function works best
     * with window managers that support the
     * [Extended Window Manager Hints](http://www.freedesktop.org/Standards/wm-spec)
     * but has a fallback implementation for other window managers.
     */
    beginResizeDragForDevice(edge: WindowEdge, device: Device, button: number, rootX: number, rootY: number, timestamp: number): void
    /**
     * Does nothing, present only for compatiblity.
     */
    configureFinished(): void
    /**
     * Transforms window coordinates from a parent window to a child
     * window, where the parent window is the normal parent as returned by
     * gdk_window_get_parent() for normal windows, and the window's
     * embedder as returned by gdk_offscreen_window_get_embedder() for
     * offscreen windows.
     * 
     * For normal windows, calling this function is equivalent to subtracting
     * the return values of gdk_window_get_position() from the parent coordinates.
     * For offscreen windows however (which can be arbitrarily transformed),
     * this function calls the GdkWindow::from-embedder: signal to translate
     * the coordinates.
     * 
     * You should always use this function when writing generic code that
     * walks down a window hierarchy.
     * 
     * See also: gdk_window_coords_to_parent()
     */
    coordsFromParent(parentX: number, parentY: number): [ /* x */ number | null, /* y */ number | null ]
    /**
     * Transforms window coordinates from a child window to its parent
     * window, where the parent window is the normal parent as returned by
     * gdk_window_get_parent() for normal windows, and the window's
     * embedder as returned by gdk_offscreen_window_get_embedder() for
     * offscreen windows.
     * 
     * For normal windows, calling this function is equivalent to adding
     * the return values of gdk_window_get_position() to the child coordinates.
     * For offscreen windows however (which can be arbitrarily transformed),
     * this function calls the GdkWindow::to-embedder: signal to translate
     * the coordinates.
     * 
     * You should always use this function when writing generic code that
     * walks up a window hierarchy.
     * 
     * See also: gdk_window_coords_from_parent()
     */
    coordsToParent(x: number, y: number): [ /* parentX */ number | null, /* parentY */ number | null ]
    /**
     * Creates a new #GdkGLContext matching the
     * framebuffer format to the visual of the #GdkWindow. The context
     * is disconnected from any particular window or surface.
     * 
     * If the creation of the #GdkGLContext failed, `error` will be set.
     * 
     * Before using the returned #GdkGLContext, you will need to
     * call gdk_gl_context_make_current() or gdk_gl_context_realize().
     */
    createGlContext(): GLContext
    /**
     * Create a new image surface that is efficient to draw on the
     * given `window`.
     * 
     * Initially the surface contents are all 0 (transparent if contents
     * have transparency, black otherwise.)
     * 
     * The `width` and `height` of the new surface are not affected by
     * the scaling factor of the `window,` or by the `scale` argument; they
     * are the size of the surface in device pixels. If you wish to create
     * an image surface capable of holding the contents of `window` you can
     * use:
     * 
     * 
     * ```c
     *   int scale = gdk_window_get_scale_factor (window);
     *   int width = gdk_window_get_width (window) * scale;
     *   int height = gdk_window_get_height (window) * scale;
     * 
     *   // format is set elsewhere
     *   cairo_surface_t *surface =
     *     gdk_window_create_similar_image_surface (window,
     *                                              format,
     *                                              width, height,
     *                                              scale);
     * ```
     * 
     * 
     * Note that unlike cairo_surface_create_similar_image(), the new
     * surface's device scale is set to `scale,` or to the scale factor of
     * `window` if `scale` is 0.
     */
    createSimilarImageSurface(format: cairo.Format, width: number, height: number, scale: number): cairo.Surface
    /**
     * Create a new surface that is as compatible as possible with the
     * given `window`. For example the new surface will have the same
     * fallback resolution and font options as `window`. Generally, the new
     * surface will also use the same backend as `window,` unless that is
     * not possible for some reason. The type of the returned surface may
     * be examined with cairo_surface_get_type().
     * 
     * Initially the surface contents are all 0 (transparent if contents
     * have transparency, black otherwise.)
     */
    createSimilarSurface(content: cairo.Content, width: number, height: number): cairo.Surface
    /**
     * Attempt to deiconify (unminimize) `window`. On X11 the window manager may
     * choose to ignore the request to deiconify. When using GTK+,
     * use gtk_window_deiconify() instead of the #GdkWindow variant. Or better yet,
     * you probably want to use gtk_window_present_with_time(), which raises the window, focuses it,
     * unminimizes it, and puts it on the current desktop.
     */
    deiconify(): void
    /**
     * Destroys the window system resources associated with `window` and decrements `window'`s
     * reference count. The window system resources for all children of `window` are also
     * destroyed, but the children’s reference counts are not decremented.
     * 
     * Note that a window will not be destroyed automatically when its reference count
     * reaches zero. You must call this function yourself before that happens.
     */
    destroy(): void
    destroyNotify(): void
    /**
     * Does nothing, present only for compatiblity.
     */
    enableSynchronizedConfigure(): void
    /**
     * Indicates that the drawing of the contents of `window` started with
     * gdk_window_begin_frame() has been completed.
     * 
     * This function will take care of destroying the #GdkDrawingContext.
     * 
     * It is an error to call this function without a matching
     * gdk_window_begin_frame() first.
     */
    endDrawFrame(context: DrawingContext): void
    /**
     * Indicates that the backing store created by the most recent call
     * to gdk_window_begin_paint_region() should be copied onscreen and
     * deleted, leaving the next-most-recent backing store or no backing
     * store at all as the active paint region. See
     * gdk_window_begin_paint_region() for full details.
     * 
     * It is an error to call this function without a matching
     * gdk_window_begin_paint_region() first.
     */
    endPaint(): void
    /**
     * Tries to ensure that there is a window-system native window for this
     * GdkWindow. This may fail in some situations, returning %FALSE.
     * 
     * Offscreen window and children of them can never have native windows.
     * 
     * Some backends may not support native child windows.
     */
    ensureNative(): boolean
    /**
     * This function does nothing.
     */
    flush(): void
    /**
     * Sets keyboard focus to `window`. In most cases, gtk_window_present_with_time()
     * should be used on a #GtkWindow, rather than calling this function.
     */
    focus(timestamp: number): void
    /**
     * Temporarily freezes a window and all its descendants such that it won't
     * receive expose events.  The window will begin receiving expose events
     * again when gdk_window_thaw_toplevel_updates_libgtk_only() is called. If
     * gdk_window_freeze_toplevel_updates_libgtk_only()
     * has been called more than once,
     * gdk_window_thaw_toplevel_updates_libgtk_only() must be called
     * an equal number of times to begin processing exposes.
     * 
     * This function is not part of the GDK public API and is only
     * for use by GTK+.
     */
    freezeToplevelUpdatesLibgtkOnly(): void
    /**
     * Temporarily freezes a window such that it won’t receive expose
     * events.  The window will begin receiving expose events again when
     * gdk_window_thaw_updates() is called. If gdk_window_freeze_updates()
     * has been called more than once, gdk_window_thaw_updates() must be called
     * an equal number of times to begin processing exposes.
     */
    freezeUpdates(): void
    /**
     * Moves the window into fullscreen mode. This means the
     * window covers the entire screen and is above any panels
     * or task bars.
     * 
     * If the window was already fullscreen, then this function does nothing.
     * 
     * On X11, asks the window manager to put `window` in a fullscreen
     * state, if the window manager supports this operation. Not all
     * window managers support this, and some deliberately ignore it or
     * don’t have a concept of “fullscreen”; so you can’t rely on the
     * fullscreenification actually happening. But it will happen with
     * most standard window managers, and GDK makes a best effort to get
     * it to happen.
     */
    fullscreen(): void
    /**
     * Moves the window into fullscreen mode on the given monitor. This means
     * the window covers the entire screen and is above any panels or task bars.
     * 
     * If the window was already fullscreen, then this function does nothing.
     */
    fullscreenOnMonitor(monitor: number): void
    /**
     * This function informs GDK that the geometry of an embedded
     * offscreen window has changed. This is necessary for GDK to keep
     * track of which offscreen window the pointer is in.
     */
    geometryChanged(): void
    /**
     * Determines whether or not the desktop environment shuld be hinted that
     * the window does not want to receive input focus.
     */
    getAcceptFocus(): boolean
    /**
     * Gets the pattern used to clear the background on `window`.
     */
    getBackgroundPattern(): cairo.Pattern | null
    /**
     * Gets the list of children of `window` known to GDK.
     * This function only returns children created via GDK,
     * so for example it’s useless when used with the root window;
     * it only returns windows an application created itself.
     * 
     * The returned list must be freed, but the elements in the
     * list need not be.
     */
    getChildren(): Window[]
    /**
     * Gets the list of children of `window` known to GDK with a
     * particular `user_data` set on it.
     * 
     * The returned list must be freed, but the elements in the
     * list need not be.
     * 
     * The list is returned in (relative) stacking order, i.e. the
     * lowest window is first.
     */
    getChildrenWithUserData(userData?: object | null): Window[]
    /**
     * Computes the region of a window that potentially can be written
     * to by drawing primitives. This region may not take into account
     * other factors such as if the window is obscured by other windows,
     * but no area outside of this region will be affected by drawing
     * primitives.
     */
    getClipRegion(): cairo.Region
    /**
     * Determines whether `window` is composited.
     * 
     * See gdk_window_set_composited().
     */
    getComposited(): boolean
    /**
     * Retrieves a #GdkCursor pointer for the cursor currently set on the
     * specified #GdkWindow, or %NULL.  If the return value is %NULL then
     * there is no custom cursor set on the specified window, and it is
     * using the cursor for its parent window.
     */
    getCursor(): Cursor | null
    /**
     * Returns the decorations set on the GdkWindow with
     * gdk_window_set_decorations().
     */
    getDecorations(): [ /* returnType */ boolean, /* decorations */ WMDecoration ]
    /**
     * Retrieves a #GdkCursor pointer for the `device` currently set on the
     * specified #GdkWindow, or %NULL.  If the return value is %NULL then
     * there is no custom cursor set on the specified window, and it is
     * using the cursor for its parent window.
     */
    getDeviceCursor(device: Device): Cursor | null
    /**
     * Returns the event mask for `window` corresponding to an specific device.
     */
    getDeviceEvents(device: Device): EventMask
    /**
     * Obtains the current device position and modifier state.
     * The position is given in coordinates relative to the upper left
     * corner of `window`.
     * 
     * Use gdk_window_get_device_position_double() if you need subpixel precision.
     */
    getDevicePosition(device: Device): [ /* returnType */ Window | null, /* x */ number | null, /* y */ number | null, /* mask */ ModifierType | null ]
    /**
     * Obtains the current device position in doubles and modifier state.
     * The position is given in coordinates relative to the upper left
     * corner of `window`.
     */
    getDevicePositionDouble(device: Device): [ /* returnType */ Window | null, /* x */ number | null, /* y */ number | null, /* mask */ ModifierType | null ]
    /**
     * Gets the #GdkDisplay associated with a #GdkWindow.
     */
    getDisplay(): Display
    /**
     * Finds out the DND protocol supported by a window.
     */
    getDragProtocol(): [ /* returnType */ DragProtocol, /* target */ Window | null ]
    /**
     * Obtains the parent of `window,` as known to GDK. Works like
     * gdk_window_get_parent() for normal windows, but returns the
     * window’s embedder for offscreen windows.
     * 
     * See also: gdk_offscreen_window_get_embedder()
     */
    getEffectiveParent(): Window
    /**
     * Gets the toplevel window that’s an ancestor of `window`.
     * 
     * Works like gdk_window_get_toplevel(), but treats an offscreen window's
     * embedder as its parent, using gdk_window_get_effective_parent().
     * 
     * See also: gdk_offscreen_window_get_embedder()
     */
    getEffectiveToplevel(): Window
    /**
     * Get the current event compression setting for this window.
     */
    getEventCompression(): boolean
    /**
     * Gets the event mask for `window` for all master input devices. See
     * gdk_window_set_events().
     */
    getEvents(): EventMask
    /**
     * Determines whether or not the desktop environment should be hinted that the
     * window does not want to receive input focus when it is mapped.
     */
    getFocusOnMap(): boolean
    /**
     * Gets the frame clock for the window. The frame clock for a window
     * never changes unless the window is reparented to a new toplevel
     * window.
     */
    getFrameClock(): FrameClock
    /**
     * Obtains the bounding box of the window, including window manager
     * titlebar/borders if any. The frame position is given in root window
     * coordinates. To get the position of the window itself (rather than
     * the frame) in root window coordinates, use gdk_window_get_origin().
     */
    getFrameExtents(): /* rect */ Rectangle
    /**
     * Obtains the #GdkFullscreenMode of the `window`.
     */
    getFullscreenMode(): FullscreenMode
    /**
     * Any of the return location arguments to this function may be %NULL,
     * if you aren’t interested in getting the value of that field.
     * 
     * The X and Y coordinates returned are relative to the parent window
     * of `window,` which for toplevels usually means relative to the
     * window decorations (titlebar, etc.) rather than relative to the
     * root window (screen-size background window).
     * 
     * On the X11 platform, the geometry is obtained from the X server,
     * so reflects the latest position of `window;` this may be out-of-sync
     * with the position of `window` delivered in the most-recently-processed
     * #GdkEventConfigure. gdk_window_get_position() in contrast gets the
     * position from the most recent configure event.
     * 
     * Note: If `window` is not a toplevel, it is much better
     * to call gdk_window_get_position(), gdk_window_get_width() and
     * gdk_window_get_height() instead, because it avoids the roundtrip to
     * the X server and because these functions support the full 32-bit
     * coordinate space, whereas gdk_window_get_geometry() is restricted to
     * the 16-bit coordinates of X11.
     */
    getGeometry(): [ /* x */ number | null, /* y */ number | null, /* width */ number | null, /* height */ number | null ]
    /**
     * Returns the group leader window for `window`. See gdk_window_set_group().
     */
    getGroup(): Window
    /**
     * Returns the height of the given `window`.
     * 
     * On the X11 platform the returned size is the size reported in the
     * most-recently-processed configure event, rather than the current
     * size on the X server.
     */
    getHeight(): number
    /**
     * Determines whether or not the window manager is hinted that `window`
     * has modal behaviour.
     */
    getModalHint(): boolean
    /**
     * Obtains the position of a window in root window coordinates.
     * (Compare with gdk_window_get_position() and
     * gdk_window_get_geometry() which return the position of a window
     * relative to its parent window.)
     */
    getOrigin(): [ /* returnType */ number, /* x */ number | null, /* y */ number | null ]
    /**
     * Obtains the parent of `window,` as known to GDK. Does not query the
     * X server; thus this returns the parent as passed to gdk_window_new(),
     * not the actual parent. This should never matter unless you’re using
     * Xlib calls mixed with GDK calls on the X11 platform. It may also
     * matter for toplevel windows, because the window manager may choose
     * to reparent them.
     * 
     * Note that you should use gdk_window_get_effective_parent() when
     * writing generic code that walks up a window hierarchy, because
     * gdk_window_get_parent() will most likely not do what you expect if
     * there are offscreen windows in the hierarchy.
     */
    getParent(): Window
    /**
     * Returns whether input to the window is passed through to the window
     * below.
     * 
     * See gdk_window_set_pass_through() for details
     */
    getPassThrough(): boolean
    /**
     * Obtains the current pointer position and modifier state.
     * The position is given in coordinates relative to the upper left
     * corner of `window`.
     */
    getPointer(): [ /* returnType */ Window | null, /* x */ number | null, /* y */ number | null, /* mask */ ModifierType | null ]
    /**
     * Obtains the position of the window as reported in the
     * most-recently-processed #GdkEventConfigure. Contrast with
     * gdk_window_get_geometry() which queries the X server for the
     * current window position, regardless of which events have been
     * received or processed.
     * 
     * The position coordinates are relative to the window’s parent window.
     */
    getPosition(): [ /* x */ number | null, /* y */ number | null ]
    /**
     * Obtains the position of a window position in root
     * window coordinates. This is similar to
     * gdk_window_get_origin() but allows you to pass
     * in any position in the window, not just the origin.
     */
    getRootCoords(x: number, y: number): [ /* rootX */ number, /* rootY */ number ]
    /**
     * Obtains the top-left corner of the window manager frame in root
     * window coordinates.
     */
    getRootOrigin(): [ /* x */ number, /* y */ number ]
    /**
     * Returns the internal scale factor that maps from window coordiantes
     * to the actual device pixels. On traditional systems this is 1, but
     * on very high density outputs this can be a higher value (often 2).
     * 
     * A higher value means that drawing is automatically scaled up to
     * a higher resolution, so any code doing drawing will automatically look
     * nicer. However, if you are supplying pixel-based data the scale
     * value can be used to determine whether to use a pixel resource
     * with higher resolution data.
     * 
     * The scale of a window may change during runtime, if this happens
     * a configure event will be sent to the toplevel window.
     */
    getScaleFactor(): number
    /**
     * Gets the #GdkScreen associated with a #GdkWindow.
     */
    getScreen(): Screen
    /**
     * Returns the event mask for `window` corresponding to the device class specified
     * by `source`.
     */
    getSourceEvents(source: InputSource): EventMask
    /**
     * Gets the bitwise OR of the currently active window state flags,
     * from the #GdkWindowState enumeration.
     */
    getState(): WindowState
    /**
     * Returns %TRUE if the window is aware of the existence of multiple
     * devices.
     */
    getSupportMultidevice(): boolean
    /**
     * Gets the toplevel window that’s an ancestor of `window`.
     * 
     * Any window type but %GDK_WINDOW_CHILD is considered a
     * toplevel window, as is a %GDK_WINDOW_CHILD window that
     * has a root window as parent.
     * 
     * Note that you should use gdk_window_get_effective_toplevel() when
     * you want to get to a window’s toplevel as seen on screen, because
     * gdk_window_get_toplevel() will most likely not do what you expect
     * if there are offscreen windows in the hierarchy.
     */
    getToplevel(): Window
    /**
     * This function returns the type hint set for a window.
     */
    getTypeHint(): WindowTypeHint
    /**
     * Transfers ownership of the update area from `window` to the caller
     * of the function. That is, after calling this function, `window` will
     * no longer have an invalid/dirty region; the update area is removed
     * from `window` and handed to you. If a window has no update area,
     * gdk_window_get_update_area() returns %NULL. You are responsible for
     * calling cairo_region_destroy() on the returned region if it’s non-%NULL.
     */
    getUpdateArea(): cairo.Region
    /**
     * Retrieves the user data for `window,` which is normally the widget
     * that `window` belongs to. See gdk_window_set_user_data().
     */
    getUserData(): /* data */ object | null
    /**
     * Computes the region of the `window` that is potentially visible.
     * This does not necessarily take into account if the window is
     * obscured by other windows, but no area outside of this region
     * is visible.
     */
    getVisibleRegion(): cairo.Region
    /**
     * Gets the #GdkVisual describing the pixel format of `window`.
     */
    getVisual(): Visual
    /**
     * Returns the width of the given `window`.
     * 
     * On the X11 platform the returned size is the size reported in the
     * most-recently-processed configure event, rather than the current
     * size on the X server.
     */
    getWidth(): number
    /**
     * Gets the type of the window. See #GdkWindowType.
     */
    getWindowType(): WindowType
    /**
     * Checks whether the window has a native window or not. Note that
     * you can use gdk_window_ensure_native() if a native window is needed.
     */
    hasNative(): boolean
    /**
     * For toplevel windows, withdraws them, so they will no longer be
     * known to the window manager; for all windows, unmaps them, so
     * they won’t be displayed. Normally done automatically as
     * part of gtk_widget_hide().
     */
    hide(): void
    /**
     * Asks to iconify (minimize) `window`. The window manager may choose
     * to ignore the request, but normally will honor it. Using
     * gtk_window_iconify() is preferred, if you have a #GtkWindow widget.
     * 
     * This function only makes sense when `window` is a toplevel window.
     */
    iconify(): void
    /**
     * Like gdk_window_shape_combine_region(), but the shape applies
     * only to event handling. Mouse events which happen while
     * the pointer position corresponds to an unset bit in the
     * mask will be passed on the window below `window`.
     * 
     * An input shape is typically used with RGBA windows.
     * The alpha channel of the window defines which pixels are
     * invisible and allows for nicely antialiased borders,
     * and the input shape controls where the window is
     * “clickable”.
     * 
     * On the X11 platform, this requires version 1.1 of the
     * shape extension.
     * 
     * On the Win32 platform, this functionality is not present and the
     * function does nothing.
     */
    inputShapeCombineRegion(shapeRegion: cairo.Region, offsetX: number, offsetY: number): void
    /**
     * Adds `region` to the update area for `window`. The update area is the
     * region that needs to be redrawn, or “dirty region.” The call
     * gdk_window_process_updates() sends one or more expose events to the
     * window, which together cover the entire update area. An
     * application would normally redraw the contents of `window` in
     * response to those expose events.
     * 
     * GDK will call gdk_window_process_all_updates() on your behalf
     * whenever your program returns to the main loop and becomes idle, so
     * normally there’s no need to do that manually, you just need to
     * invalidate regions that you know should be redrawn.
     * 
     * The `child_func` parameter controls whether the region of
     * each child window that intersects `region` will also be invalidated.
     * Only children for which `child_func` returns #TRUE will have the area
     * invalidated.
     */
    invalidateMaybeRecurse(region: cairo.Region, childFunc?: WindowChildFunc | null): void
    /**
     * A convenience wrapper around gdk_window_invalidate_region() which
     * invalidates a rectangular region. See
     * gdk_window_invalidate_region() for details.
     */
    invalidateRect(rect: Rectangle | null, invalidateChildren: boolean): void
    /**
     * Adds `region` to the update area for `window`. The update area is the
     * region that needs to be redrawn, or “dirty region.” The call
     * gdk_window_process_updates() sends one or more expose events to the
     * window, which together cover the entire update area. An
     * application would normally redraw the contents of `window` in
     * response to those expose events.
     * 
     * GDK will call gdk_window_process_all_updates() on your behalf
     * whenever your program returns to the main loop and becomes idle, so
     * normally there’s no need to do that manually, you just need to
     * invalidate regions that you know should be redrawn.
     * 
     * The `invalidate_children` parameter controls whether the region of
     * each child window that intersects `region` will also be invalidated.
     * If %FALSE, then the update area for child windows will remain
     * unaffected. See gdk_window_invalidate_maybe_recurse if you need
     * fine grained control over which children are invalidated.
     */
    invalidateRegion(region: cairo.Region, invalidateChildren: boolean): void
    /**
     * Check to see if a window is destroyed..
     */
    isDestroyed(): boolean
    /**
     * Determines whether or not the window is an input only window.
     */
    isInputOnly(): boolean
    /**
     * Determines whether or not the window is shaped.
     */
    isShaped(): boolean
    /**
     * Check if the window and all ancestors of the window are
     * mapped. (This is not necessarily "viewable" in the X sense, since
     * we only check as far as we have GDK window parents, not to the root
     * window.)
     */
    isViewable(): boolean
    /**
     * Checks whether the window has been mapped (with gdk_window_show() or
     * gdk_window_show_unraised()).
     */
    isVisible(): boolean
    /**
     * Lowers `window` to the bottom of the Z-order (stacking order), so that
     * other windows with the same parent window appear above `window`.
     * This is true whether or not the other windows are visible.
     * 
     * If `window` is a toplevel, the window manager may choose to deny the
     * request to move the window in the Z-order, gdk_window_lower() only
     * requests the restack, does not guarantee it.
     * 
     * Note that gdk_window_show() raises the window again, so don’t call this
     * function before gdk_window_show(). (Try gdk_window_show_unraised().)
     */
    lower(): void
    /**
     * If you call this during a paint (e.g. between gdk_window_begin_paint_region()
     * and gdk_window_end_paint() then GDK will mark the current clip region of the
     * window as being drawn. This is required when mixing GL rendering via
     * gdk_cairo_draw_from_gl() and cairo rendering, as otherwise GDK has no way
     * of knowing when something paints over the GL-drawn regions.
     * 
     * This is typically called automatically by GTK+ and you don't need
     * to care about this.
     */
    markPaintFromClip(cr: cairo.Context): void
    /**
     * Maximizes the window. If the window was already maximized, then
     * this function does nothing.
     * 
     * On X11, asks the window manager to maximize `window,` if the window
     * manager supports this operation. Not all window managers support
     * this, and some deliberately ignore it or don’t have a concept of
     * “maximized”; so you can’t rely on the maximization actually
     * happening. But it will happen with most standard window managers,
     * and GDK makes a best effort to get it to happen.
     * 
     * On Windows, reliably maximizes the window.
     */
    maximize(): void
    /**
     * Merges the input shape masks for any child windows into the
     * input shape mask for `window`. i.e. the union of all input masks
     * for `window` and its children will become the new input mask
     * for `window`. See gdk_window_input_shape_combine_region().
     * 
     * This function is distinct from gdk_window_set_child_input_shapes()
     * because it includes `window’`s input shape mask in the set of
     * shapes to be merged.
     */
    mergeChildInputShapes(): void
    /**
     * Merges the shape masks for any child windows into the
     * shape mask for `window`. i.e. the union of all masks
     * for `window` and its children will become the new mask
     * for `window`. See gdk_window_shape_combine_region().
     * 
     * This function is distinct from gdk_window_set_child_shapes()
     * because it includes `window’`s shape mask in the set of shapes to
     * be merged.
     */
    mergeChildShapes(): void
    /**
     * Repositions a window relative to its parent window.
     * For toplevel windows, window managers may ignore or modify the move;
     * you should probably use gtk_window_move() on a #GtkWindow widget
     * anyway, instead of using GDK functions. For child windows,
     * the move will reliably succeed.
     * 
     * If you’re also planning to resize the window, use gdk_window_move_resize()
     * to both move and resize simultaneously, for a nicer visual effect.
     */
    move(x: number, y: number): void
    /**
     * Move the part of `window` indicated by `region` by `dy` pixels in the Y
     * direction and `dx` pixels in the X direction. The portions of `region`
     * that not covered by the new position of `region` are invalidated.
     * 
     * Child windows are not moved.
     */
    moveRegion(region: cairo.Region, dx: number, dy: number): void
    /**
     * Equivalent to calling gdk_window_move() and gdk_window_resize(),
     * except that both operations are performed at once, avoiding strange
     * visual effects. (i.e. the user may be able to see the window first
     * move, then resize, if you don’t use gdk_window_move_resize().)
     */
    moveResize(x: number, y: number, width: number, height: number): void
    /**
     * Moves `window` to `rect,` aligning their anchor points.
     * 
     * `rect` is relative to the top-left corner of the window that `window` is
     * transient for. `rect_anchor` and `window_anchor` determine anchor points on
     * `rect` and `window` to pin together. `rect'`s anchor point can optionally be
     * offset by `rect_anchor_dx` and `rect_anchor_dy,` which is equivalent to
     * offsetting the position of `window`.
     * 
     * `anchor_hints` determines how `window` will be moved if the anchor points cause
     * it to move off-screen. For example, %GDK_ANCHOR_FLIP_X will replace
     * %GDK_GRAVITY_NORTH_WEST with %GDK_GRAVITY_NORTH_EAST and vice versa if
     * `window` extends beyond the left or right edges of the monitor.
     * 
     * Connect to the #GdkWindow::moved-to-rect signal to find out how it was
     * actually positioned.
     */
    moveToRect(rect: Rectangle, rectAnchor: Gravity, windowAnchor: Gravity, anchorHints: AnchorHints, rectAnchorDx: number, rectAnchorDy: number): void
    /**
     * Like gdk_window_get_children(), but does not copy the list of
     * children, so the list does not need to be freed.
     */
    peekChildren(): Window[]
    /**
     * Sends one or more expose events to `window`. The areas in each
     * expose event will cover the entire update area for the window (see
     * gdk_window_invalidate_region() for details). Normally GDK calls
     * gdk_window_process_all_updates() on your behalf, so there’s no
     * need to call this function unless you want to force expose events
     * to be delivered immediately and synchronously (vs. the usual
     * case, where GDK delivers them in an idle handler). Occasionally
     * this is useful to produce nicer scrolling behavior, for example.
     */
    processUpdates(updateChildren: boolean): void
    /**
     * Raises `window` to the top of the Z-order (stacking order), so that
     * other windows with the same parent window appear below `window`.
     * This is true whether or not the windows are visible.
     * 
     * If `window` is a toplevel, the window manager may choose to deny the
     * request to move the window in the Z-order, gdk_window_raise() only
     * requests the restack, does not guarantee it.
     */
    raise(): void
    /**
     * Registers a window as a potential drop destination.
     */
    registerDnd(): void
    /**
     * Reparents `window` into the given `new_parent`. The window being
     * reparented will be unmapped as a side effect.
     */
    reparent(newParent: Window, x: number, y: number): void
    /**
     * Resizes `window;` for toplevel windows, asks the window manager to resize
     * the window. The window manager may not allow the resize. When using GTK+,
     * use gtk_window_resize() instead of this low-level GDK function.
     * 
     * Windows may not be resized below 1x1.
     * 
     * If you’re also planning to move the window, use gdk_window_move_resize()
     * to both move and resize simultaneously, for a nicer visual effect.
     */
    resize(width: number, height: number): void
    /**
     * Changes the position of  `window` in the Z-order (stacking order), so that
     * it is above `sibling` (if `above` is %TRUE) or below `sibling` (if `above` is
     * %FALSE).
     * 
     * If `sibling` is %NULL, then this either raises (if `above` is %TRUE) or
     * lowers the window.
     * 
     * If `window` is a toplevel, the window manager may choose to deny the
     * request to move the window in the Z-order, gdk_window_restack() only
     * requests the restack, does not guarantee it.
     */
    restack(sibling: Window | null, above: boolean): void
    /**
     * Scroll the contents of `window,` both pixels and children, by the
     * given amount. `window` itself does not move. Portions of the window
     * that the scroll operation brings in from offscreen areas are
     * invalidated. The invalidated region may be bigger than what would
     * strictly be necessary.
     * 
     * For X11, a minimum area will be invalidated if the window has no
     * subwindows, or if the edges of the window’s parent do not extend
     * beyond the edges of the window. In other cases, a multi-step process
     * is used to scroll the window which may produce temporary visual
     * artifacts and unnecessary invalidations.
     */
    scroll(dx: number, dy: number): void
    /**
     * Setting `accept_focus` to %FALSE hints the desktop environment that the
     * window doesn’t want to receive input focus.
     * 
     * On X, it is the responsibility of the window manager to interpret this
     * hint. ICCCM-compliant window manager usually respect it.
     */
    setAcceptFocus(acceptFocus: boolean): void
    /**
     * Sets the background color of `window`.
     * 
     * However, when using GTK+, influence the background of a widget
     * using a style class or CSS — if you’re an application — or with
     * gtk_style_context_set_background() — if you're implementing a
     * custom widget.
     */
    setBackground(color: Color): void
    /**
     * Sets the background of `window`.
     * 
     * A background of %NULL means that the window won't have any background. On the
     * X11 backend it's also possible to inherit the background from the parent
     * window using gdk_x11_get_parent_relative_pattern().
     * 
     * The windowing system will normally fill a window with its background
     * when the window is obscured then exposed.
     */
    setBackgroundPattern(pattern?: cairo.Pattern | null): void
    /**
     * Sets the background color of `window`.
     * 
     * See also gdk_window_set_background_pattern().
     */
    setBackgroundRgba(rgba: RGBA): void
    /**
     * Sets the input shape mask of `window` to the union of input shape masks
     * for all children of `window,` ignoring the input shape mask of `window`
     * itself. Contrast with gdk_window_merge_child_input_shapes() which includes
     * the input shape mask of `window` in the masks to be merged.
     */
    setChildInputShapes(): void
    /**
     * Sets the shape mask of `window` to the union of shape masks
     * for all children of `window,` ignoring the shape mask of `window`
     * itself. Contrast with gdk_window_merge_child_shapes() which includes
     * the shape mask of `window` in the masks to be merged.
     */
    setChildShapes(): void
    /**
     * Sets a #GdkWindow as composited, or unsets it. Composited
     * windows do not automatically have their contents drawn to
     * the screen. Drawing is redirected to an offscreen buffer
     * and an expose event is emitted on the parent of the composited
     * window. It is the responsibility of the parent’s expose handler
     * to manually merge the off-screen content onto the screen in
     * whatever way it sees fit.
     * 
     * It only makes sense for child windows to be composited; see
     * gdk_window_set_opacity() if you need translucent toplevel
     * windows.
     * 
     * An additional effect of this call is that the area of this
     * window is no longer clipped from regions marked for
     * invalidation on its parent. Draws done on the parent
     * window are also no longer clipped by the child.
     * 
     * This call is only supported on some systems (currently,
     * only X11 with new enough Xcomposite and Xdamage extensions).
     * You must call gdk_display_supports_composite() to check if
     * setting a window as composited is supported before
     * attempting to do so.
     */
    setComposited(composited: boolean): void
    /**
     * Sets the default mouse pointer for a #GdkWindow.
     * 
     * Note that `cursor` must be for the same display as `window`.
     * 
     * Use gdk_cursor_new_for_display() or gdk_cursor_new_from_pixbuf() to
     * create the cursor. To make the cursor invisible, use %GDK_BLANK_CURSOR.
     * Passing %NULL for the `cursor` argument to gdk_window_set_cursor() means
     * that `window` will use the cursor of its parent window. Most windows
     * should use this default.
     */
    setCursor(cursor?: Cursor | null): void
    /**
     * “Decorations” are the features the window manager adds to a toplevel #GdkWindow.
     * This function sets the traditional Motif window manager hints that tell the
     * window manager which decorations you would like your window to have.
     * Usually you should use gtk_window_set_decorated() on a #GtkWindow instead of
     * using the GDK function directly.
     * 
     * The `decorations` argument is the logical OR of the fields in
     * the #GdkWMDecoration enumeration. If #GDK_DECOR_ALL is included in the
     * mask, the other bits indicate which decorations should be turned off.
     * If #GDK_DECOR_ALL is not included, then the other bits indicate
     * which decorations should be turned on.
     * 
     * Most window managers honor a decorations hint of 0 to disable all decorations,
     * but very few honor all possible combinations of bits.
     */
    setDecorations(decorations: WMDecoration): void
    /**
     * Sets a specific #GdkCursor for a given device when it gets inside `window`.
     * Use gdk_cursor_new_for_display() or gdk_cursor_new_from_pixbuf() to create
     * the cursor. To make the cursor invisible, use %GDK_BLANK_CURSOR. Passing
     * %NULL for the `cursor` argument to gdk_window_set_cursor() means that
     * `window` will use the cursor of its parent window. Most windows should
     * use this default.
     */
    setDeviceCursor(device: Device, cursor: Cursor): void
    /**
     * Sets the event mask for a given device (Normally a floating device, not
     * attached to any visible pointer) to `window`. For example, an event mask
     * including #GDK_BUTTON_PRESS_MASK means the window should report button
     * press events. The event mask is the bitwise OR of values from the
     * #GdkEventMask enumeration.
     * 
     * See the [input handling overview][event-masks] for details.
     */
    setDeviceEvents(device: Device, eventMask: EventMask): void
    /**
     * Determines whether or not extra unprocessed motion events in
     * the event queue can be discarded. If %TRUE only the most recent
     * event will be delivered.
     * 
     * Some types of applications, e.g. paint programs, need to see all
     * motion events and will benefit from turning off event compression.
     * 
     * By default, event compression is enabled.
     */
    setEventCompression(eventCompression: boolean): void
    /**
     * The event mask for a window determines which events will be reported
     * for that window from all master input devices. For example, an event mask
     * including #GDK_BUTTON_PRESS_MASK means the window should report button
     * press events. The event mask is the bitwise OR of values from the
     * #GdkEventMask enumeration.
     * 
     * See the [input handling overview][event-masks] for details.
     */
    setEvents(eventMask: EventMask): void
    /**
     * Setting `focus_on_map` to %FALSE hints the desktop environment that the
     * window doesn’t want to receive input focus when it is mapped.
     * focus_on_map should be turned off for windows that aren’t triggered
     * interactively (such as popups from network activity).
     * 
     * On X, it is the responsibility of the window manager to interpret
     * this hint. Window managers following the freedesktop.org window
     * manager extension specification should respect it.
     */
    setFocusOnMap(focusOnMap: boolean): void
    /**
     * Specifies whether the `window` should span over all monitors (in a multi-head
     * setup) or only the current monitor when in fullscreen mode.
     * 
     * The `mode` argument is from the #GdkFullscreenMode enumeration.
     * If #GDK_FULLSCREEN_ON_ALL_MONITORS is specified, the fullscreen `window` will
     * span over all monitors from the #GdkScreen.
     * 
     * On X11, searches through the list of monitors from the #GdkScreen the ones
     * which delimit the 4 edges of the entire #GdkScreen and will ask the window
     * manager to span the `window` over these monitors.
     * 
     * If the XINERAMA extension is not available or not usable, this function
     * has no effect.
     * 
     * Not all window managers support this, so you can’t rely on the fullscreen
     * window to span over the multiple monitors when #GDK_FULLSCREEN_ON_ALL_MONITORS
     * is specified.
     */
    setFullscreenMode(mode: FullscreenMode): void
    /**
     * Sets hints about the window management functions to make available
     * via buttons on the window frame.
     * 
     * On the X backend, this function sets the traditional Motif window
     * manager hint for this purpose. However, few window managers do
     * anything reliable or interesting with this hint. Many ignore it
     * entirely.
     * 
     * The `functions` argument is the logical OR of values from the
     * #GdkWMFunction enumeration. If the bitmask includes #GDK_FUNC_ALL,
     * then the other bits indicate which functions to disable; if
     * it doesn’t include #GDK_FUNC_ALL, it indicates which functions to
     * enable.
     */
    setFunctions(functions: WMFunction): void
    /**
     * Sets the geometry hints for `window`. Hints flagged in `geom_mask`
     * are set, hints not flagged in `geom_mask` are unset.
     * To unset all hints, use a `geom_mask` of 0 and a `geometry` of %NULL.
     * 
     * This function provides hints to the windowing system about
     * acceptable sizes for a toplevel window. The purpose of
     * this is to constrain user resizing, but the windowing system
     * will typically  (but is not required to) also constrain the
     * current size of the window to the provided values and
     * constrain programatic resizing via gdk_window_resize() or
     * gdk_window_move_resize().
     * 
     * Note that on X11, this effect has no effect on windows
     * of type %GDK_WINDOW_TEMP or windows where override redirect
     * has been turned on via gdk_window_set_override_redirect()
     * since these windows are not resizable by the user.
     * 
     * Since you can’t count on the windowing system doing the
     * constraints for programmatic resizes, you should generally
     * call gdk_window_constrain_size() yourself to determine
     * appropriate sizes.
     */
    setGeometryHints(geometry: Geometry, geomMask: WindowHints): void
    /**
     * Sets the group leader window for `window`. By default,
     * GDK sets the group leader for all toplevel windows
     * to a global window implicitly created by GDK. With this function
     * you can override this default.
     * 
     * The group leader window allows the window manager to distinguish
     * all windows that belong to a single application. It may for example
     * allow users to minimize/unminimize all windows belonging to an
     * application at once. You should only set a non-default group window
     * if your application pretends to be multiple applications.
     */
    setGroup(leader?: Window | null): void
    /**
     * Sets a list of icons for the window. One of these will be used
     * to represent the window when it has been iconified. The icon is
     * usually shown in an icon box or some sort of task bar. Which icon
     * size is shown depends on the window manager. The window manager
     * can scale the icon  but setting several size icons can give better
     * image quality since the window manager may only need to scale the
     * icon by a small amount or not at all.
     * 
     * Note that some platforms don't support window icons.
     */
    setIconList(pixbufs: GdkPixbuf.Pixbuf[]): void
    /**
     * Windows may have a name used while minimized, distinct from the
     * name they display in their titlebar. Most of the time this is a bad
     * idea from a user interface standpoint. But you can set such a name
     * with this function, if you like.
     * 
     * After calling this with a non-%NULL `name,` calls to gdk_window_set_title()
     * will not update the icon title.
     * 
     * Using %NULL for `name` unsets the icon title; further calls to
     * gdk_window_set_title() will again update the icon title as well.
     * 
     * Note that some platforms don't support window icons.
     */
    setIconName(name?: string | null): void
    /**
     * Set if `window` must be kept above other windows. If the
     * window was already above, then this function does nothing.
     * 
     * On X11, asks the window manager to keep `window` above, if the window
     * manager supports this operation. Not all window managers support
     * this, and some deliberately ignore it or don’t have a concept of
     * “keep above”; so you can’t rely on the window being kept above.
     * But it will happen with most standard window managers,
     * and GDK makes a best effort to get it to happen.
     */
    setKeepAbove(setting: boolean): void
    /**
     * Set if `window` must be kept below other windows. If the
     * window was already below, then this function does nothing.
     * 
     * On X11, asks the window manager to keep `window` below, if the window
     * manager supports this operation. Not all window managers support
     * this, and some deliberately ignore it or don’t have a concept of
     * “keep below”; so you can’t rely on the window being kept below.
     * But it will happen with most standard window managers,
     * and GDK makes a best effort to get it to happen.
     */
    setKeepBelow(setting: boolean): void
    /**
     * The application can use this hint to tell the window manager
     * that a certain window has modal behaviour. The window manager
     * can use this information to handle modal windows in a special
     * way.
     * 
     * You should only use this on windows for which you have
     * previously called gdk_window_set_transient_for()
     */
    setModalHint(modal: boolean): void
    /**
     * Set `window` to render as partially transparent,
     * with opacity 0 being fully transparent and 1 fully opaque. (Values
     * of the opacity parameter are clamped to the [0,1] range.)
     * 
     * For toplevel windows this depends on support from the windowing system
     * that may not always be there. For instance, On X11, this works only on
     * X screens with a compositing manager running. On Wayland, there is no
     * per-window opacity value that the compositor would apply. Instead, use
     * `gdk_window_set_opaque_region (window, NULL)` to tell the compositor
     * that the entire window is (potentially) non-opaque, and draw your content
     * with alpha, or use gtk_widget_set_opacity() to set an overall opacity
     * for your widgets.
     * 
     * For child windows this function only works for non-native windows.
     * 
     * For setting up per-pixel alpha topelevels, see gdk_screen_get_rgba_visual(),
     * and for non-toplevels, see gdk_window_set_composited().
     * 
     * Support for non-toplevel windows was added in 3.8.
     */
    setOpacity(opacity: number): void
    /**
     * For optimisation purposes, compositing window managers may
     * like to not draw obscured regions of windows, or turn off blending
     * during for these regions. With RGB windows with no transparency,
     * this is just the shape of the window, but with ARGB32 windows, the
     * compositor does not know what regions of the window are transparent
     * or not.
     * 
     * This function only works for toplevel windows.
     * 
     * GTK+ will update this property automatically if
     * the `window` background is opaque, as we know where the opaque regions
     * are. If your window background is not opaque, please update this
     * property in your #GtkWidget::style-updated handler.
     */
    setOpaqueRegion(region?: cairo.Region | null): void
    /**
     * An override redirect window is not under the control of the window manager.
     * This means it won’t have a titlebar, won’t be minimizable, etc. - it will
     * be entirely under the control of the application. The window manager
     * can’t see the override redirect window at all.
     * 
     * Override redirect should only be used for short-lived temporary
     * windows, such as popup menus. #GtkMenu uses an override redirect
     * window in its implementation, for example.
     */
    setOverrideRedirect(overrideRedirect: boolean): void
    /**
     * Sets whether input to the window is passed through to the window
     * below.
     * 
     * The default value of this is %FALSE, which means that pointer
     * events that happen inside the window are send first to the window,
     * but if the event is not selected by the event mask then the event
     * is sent to the parent window, and so on up the hierarchy.
     * 
     * If `pass_through` is %TRUE then such pointer events happen as if the
     * window wasn't there at all, and thus will be sent first to any
     * windows below `window`. This is useful if the window is used in a
     * transparent fashion. In the terminology of the web this would be called
     * "pointer-events: none".
     * 
     * Note that a window with `pass_through` %TRUE can still have a subwindow
     * without pass through, so you can get events on a subset of a window. And in
     * that cases you would get the in-between related events such as the pointer
     * enter/leave events on its way to the destination window.
     */
    setPassThrough(passThrough: boolean): void
    /**
     * When using GTK+, typically you should use gtk_window_set_role() instead
     * of this low-level function.
     * 
     * The window manager and session manager use a window’s role to
     * distinguish it from other kinds of window in the same application.
     * When an application is restarted after being saved in a previous
     * session, all windows with the same title and role are treated as
     * interchangeable.  So if you have two windows with the same title
     * that should be distinguished for session management purposes, you
     * should set the role on those windows. It doesn’t matter what string
     * you use for the role, as long as you have a different role for each
     * non-interchangeable kind of window.
     */
    setRole(role: string): void
    /**
     * Newer GTK+ windows using client-side decorations use extra geometry
     * around their frames for effects like shadows and invisible borders.
     * Window managers that want to maximize windows or snap to edges need
     * to know where the extents of the actual frame lie, so that users
     * don’t feel like windows are snapping against random invisible edges.
     * 
     * Note that this property is automatically updated by GTK+, so this
     * function should only be used by applications which do not use GTK+
     * to create toplevel windows.
     */
    setShadowWidth(left: number, right: number, top: number, bottom: number): void
    /**
     * Toggles whether a window should appear in a pager (workspace
     * switcher, or other desktop utility program that displays a small
     * thumbnail representation of the windows on the desktop). If a
     * window’s semantic type as specified with gdk_window_set_type_hint()
     * already fully describes the window, this function should
     * not be called in addition, instead you should
     * allow the window to be treated according to standard policy for
     * its semantic type.
     */
    setSkipPagerHint(skipsPager: boolean): void
    /**
     * Toggles whether a window should appear in a task list or window
     * list. If a window’s semantic type as specified with
     * gdk_window_set_type_hint() already fully describes the window, this
     * function should not be called in addition,
     * instead you should allow the window to be treated according to
     * standard policy for its semantic type.
     */
    setSkipTaskbarHint(skipsTaskbar: boolean): void
    /**
     * Sets the event mask for any floating device (i.e. not attached to any
     * visible pointer) that has the source defined as `source`. This event
     * mask will be applied both to currently existing, newly added devices
     * after this call, and devices being attached/detached.
     */
    setSourceEvents(source: InputSource, eventMask: EventMask): void
    /**
     * When using GTK+, typically you should use gtk_window_set_startup_id()
     * instead of this low-level function.
     */
    setStartupId(startupId: string): void
    /**
     * Used to set the bit gravity of the given window to static, and flag
     * it so all children get static subwindow gravity. This is used if you
     * are implementing scary features that involve deep knowledge of the
     * windowing system. Don’t worry about it.
     */
    setStaticGravities(useStatic: boolean): boolean
    /**
     * This function will enable multidevice features in `window`.
     * 
     * Multidevice aware windows will need to handle properly multiple,
     * per device enter/leave events, device grabs and grab ownerships.
     */
    setSupportMultidevice(supportMultidevice: boolean): void
    /**
     * Sets the title of a toplevel window, to be displayed in the titlebar.
     * If you haven’t explicitly set the icon name for the window
     * (using gdk_window_set_icon_name()), the icon name will be set to
     * `title` as well. `title` must be in UTF-8 encoding (as with all
     * user-readable strings in GDK/GTK+). `title` may not be %NULL.
     */
    setTitle(title: string): void
    /**
     * Indicates to the window manager that `window` is a transient dialog
     * associated with the application window `parent`. This allows the
     * window manager to do things like center `window` on `parent` and
     * keep `window` above `parent`.
     * 
     * See gtk_window_set_transient_for() if you’re using #GtkWindow or
     * #GtkDialog.
     */
    setTransientFor(parent: Window): void
    /**
     * The application can use this call to provide a hint to the window
     * manager about the functionality of a window. The window manager
     * can use this information when determining the decoration and behaviour
     * of the window.
     * 
     * The hint must be set before the window is mapped.
     */
    setTypeHint(hint: WindowTypeHint): void
    /**
     * Toggles whether a window needs the user's
     * urgent attention.
     */
    setUrgencyHint(urgent: boolean): void
    /**
     * For most purposes this function is deprecated in favor of
     * g_object_set_data(). However, for historical reasons GTK+ stores
     * the #GtkWidget that owns a #GdkWindow as user data on the
     * #GdkWindow. So, custom widget implementations should use
     * this function for that. If GTK+ receives an event for a #GdkWindow,
     * and the user data for the window is non-%NULL, GTK+ will assume the
     * user data is a #GtkWidget, and forward the event to that widget.
     */
    setUserData(userData?: GObject.Object | null): void
    /**
     * Makes pixels in `window` outside `shape_region` be transparent,
     * so that the window may be nonrectangular.
     * 
     * If `shape_region` is %NULL, the shape will be unset, so the whole
     * window will be opaque again. `offset_x` and `offset_y` are ignored
     * if `shape_region` is %NULL.
     * 
     * On the X11 platform, this uses an X server extension which is
     * widely available on most common platforms, but not available on
     * very old X servers, and occasionally the implementation will be
     * buggy. On servers without the shape extension, this function
     * will do nothing.
     * 
     * This function works on both toplevel and child windows.
     */
    shapeCombineRegion(shapeRegion: cairo.Region | null, offsetX: number, offsetY: number): void
    /**
     * Like gdk_window_show_unraised(), but also raises the window to the
     * top of the window stack (moves the window to the front of the
     * Z-order).
     * 
     * This function maps a window so it’s visible onscreen. Its opposite
     * is gdk_window_hide().
     * 
     * When implementing a #GtkWidget, you should call this function on the widget's
     * #GdkWindow as part of the “map” method.
     */
    show(): void
    /**
     * Shows a #GdkWindow onscreen, but does not modify its stacking
     * order. In contrast, gdk_window_show() will raise the window
     * to the top of the window stack.
     * 
     * On the X11 platform, in Xlib terms, this function calls
     * XMapWindow() (it also updates some internal GDK state, which means
     * that you can’t really use XMapWindow() directly on a GDK window).
     */
    showUnraised(): void
    /**
     * Asks the windowing system to show the window menu. The window menu
     * is the menu shown when right-clicking the titlebar on traditional
     * windows managed by the window manager. This is useful for windows
     * using client-side decorations, activating it with a right-click
     * on the window decorations.
     */
    showWindowMenu(event: Event): boolean
    /**
     * “Pins” a window such that it’s on all workspaces and does not scroll
     * with viewports, for window managers that have scrollable viewports.
     * (When using #GtkWindow, gtk_window_stick() may be more useful.)
     * 
     * On the X11 platform, this function depends on window manager
     * support, so may have no effect with many window managers. However,
     * GDK will do the best it can to convince the window manager to stick
     * the window. For window managers that don’t support this operation,
     * there’s nothing you can do to force it to happen.
     */
    stick(): void
    /**
     * Thaws a window frozen with
     * gdk_window_freeze_toplevel_updates_libgtk_only().
     * 
     * This function is not part of the GDK public API and is only
     * for use by GTK+.
     */
    thawToplevelUpdatesLibgtkOnly(): void
    /**
     * Thaws a window frozen with gdk_window_freeze_updates().
     */
    thawUpdates(): void
    /**
     * Moves the window out of fullscreen mode. If the window was not
     * fullscreen, does nothing.
     * 
     * On X11, asks the window manager to move `window` out of the fullscreen
     * state, if the window manager supports this operation. Not all
     * window managers support this, and some deliberately ignore it or
     * don’t have a concept of “fullscreen”; so you can’t rely on the
     * unfullscreenification actually happening. But it will happen with
     * most standard window managers, and GDK makes a best effort to get
     * it to happen.
     */
    unfullscreen(): void
    /**
     * Unmaximizes the window. If the window wasn’t maximized, then this
     * function does nothing.
     * 
     * On X11, asks the window manager to unmaximize `window,` if the
     * window manager supports this operation. Not all window managers
     * support this, and some deliberately ignore it or don’t have a
     * concept of “maximized”; so you can’t rely on the unmaximization
     * actually happening. But it will happen with most standard window
     * managers, and GDK makes a best effort to get it to happen.
     * 
     * On Windows, reliably unmaximizes the window.
     */
    unmaximize(): void
    /**
     * Reverse operation for gdk_window_stick(); see gdk_window_stick(),
     * and gtk_window_unstick().
     */
    unstick(): void
    /**
     * Withdraws a window (unmaps it and asks the window manager to forget about it).
     * This function is not really useful as gdk_window_hide() automatically
     * withdraws toplevel windows before hiding them.
     */
    withdraw(): void
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
    /* Signals of Gdk-3.0.Gdk.Window */
    /**
     * The ::create-surface signal is emitted when an offscreen window
     * needs its surface (re)created, which happens either when the
     * window is first drawn to, or when the window is being
     * resized. The first signal handler that returns a non-%NULL
     * surface will stop any further signal emission, and its surface
     * will be used.
     * 
     * Note that it is not possible to access the window's previous
     * surface from within any callback of this signal. Calling
     * gdk_offscreen_window_get_surface() will lead to a crash.
     */
    connect(sigName: "create-surface", callback: ((width: number, height: number) => cairo.Surface)): number
    on(sigName: "create-surface", callback: (width: number, height: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "create-surface", callback: (width: number, height: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "create-surface", callback: (width: number, height: number) => void): NodeJS.EventEmitter
    emit(sigName: "create-surface", width: number, height: number): void
    /**
     * The ::from-embedder signal is emitted to translate coordinates
     * in the embedder of an offscreen window to the offscreen window.
     * 
     * See also #GdkWindow::to-embedder.
     */
    connect(sigName: "from-embedder", callback: ((embedderX: number, embedderY: number) => void)): number
    on(sigName: "from-embedder", callback: (embedderX: number, embedderY: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "from-embedder", callback: (embedderX: number, embedderY: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "from-embedder", callback: (embedderX: number, embedderY: number) => void): NodeJS.EventEmitter
    emit(sigName: "from-embedder", embedderX: number, embedderY: number): void
    /**
     * Emitted when the position of `window` is finalized after being moved to a
     * destination rectangle.
     * 
     * `window` might be flipped over the destination rectangle in order to keep
     * it on-screen, in which case `flipped_x` and `flipped_y` will be set to %TRUE
     * accordingly.
     * 
     * `flipped_rect` is the ideal position of `window` after any possible
     * flipping, but before any possible sliding. `final_rect` is `flipped_rect,`
     * but possibly translated in the case that flipping is still ineffective in
     * keeping `window` on-screen.
     */
    connect(sigName: "moved-to-rect", callback: ((flippedRect: object | null, finalRect: object | null, flippedX: boolean, flippedY: boolean) => void)): number
    on(sigName: "moved-to-rect", callback: (flippedRect: object | null, finalRect: object | null, flippedX: boolean, flippedY: boolean) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "moved-to-rect", callback: (flippedRect: object | null, finalRect: object | null, flippedX: boolean, flippedY: boolean) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "moved-to-rect", callback: (flippedRect: object | null, finalRect: object | null, flippedX: boolean, flippedY: boolean) => void): NodeJS.EventEmitter
    emit(sigName: "moved-to-rect", flippedRect: object | null, finalRect: object | null, flippedX: boolean, flippedY: boolean): void
    /**
     * The ::pick-embedded-child signal is emitted to find an embedded
     * child at the given position.
     */
    connect(sigName: "pick-embedded-child", callback: ((x: number, y: number) => Window | null)): number
    on(sigName: "pick-embedded-child", callback: (x: number, y: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pick-embedded-child", callback: (x: number, y: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pick-embedded-child", callback: (x: number, y: number) => void): NodeJS.EventEmitter
    emit(sigName: "pick-embedded-child", x: number, y: number): void
    /**
     * The ::to-embedder signal is emitted to translate coordinates
     * in an offscreen window to its embedder.
     * 
     * See also #GdkWindow::from-embedder.
     */
    connect(sigName: "to-embedder", callback: ((offscreenX: number, offscreenY: number) => void)): number
    on(sigName: "to-embedder", callback: (offscreenX: number, offscreenY: number) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "to-embedder", callback: (offscreenX: number, offscreenY: number) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "to-embedder", callback: (offscreenX: number, offscreenY: number) => void): NodeJS.EventEmitter
    emit(sigName: "to-embedder", offscreenX: number, offscreenY: number): void
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
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    on(sigName: string, callback: any): NodeJS.EventEmitter
    once(sigName: string, callback: any): NodeJS.EventEmitter
    off(sigName: string, callback: any): NodeJS.EventEmitter
    static name: string
    constructor (config?: Window_ConstructProps)
    _init (config?: Window_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(parent: Window | null, attributes: WindowAttr, attributesMask: WindowAttributesType): Window
    /**
     * Obtains the window underneath the mouse pointer, returning the
     * location of that window in `win_x,` `win_y`. Returns %NULL if the
     * window under the mouse pointer is not known to GDK (if the window
     * belongs to another application and a #GdkWindow hasn’t been created
     * for it with gdk_window_foreign_new())
     * 
     * NOTE: For multihead-aware widgets or applications use
     * gdk_display_get_window_at_pointer() instead.
     */
    static atPointer(): [ /* returnType */ Window, /* winX */ number | null, /* winY */ number | null ]
    /**
     * Constrains a desired width and height according to a
     * set of geometry hints (such as minimum and maximum size).
     */
    static constrainSize(geometry: Geometry, flags: WindowHints, width: number, height: number): [ /* newWidth */ number, /* newHeight */ number ]
    /**
     * Calls gdk_window_process_updates() for all windows (see #GdkWindow)
     * in the application.
     */
    static processAllUpdates(): void
    /**
     * With update debugging enabled, calls to
     * gdk_window_invalidate_region() clear the invalidated region of the
     * screen to a noticeable color, and GDK pauses for a short time
     * before sending exposes to windows during
     * gdk_window_process_updates().  The net effect is that you can see
     * the invalid region for each window and watch redraws as they
     * occur. This allows you to diagnose inefficiencies in your application.
     * 
     * In essence, because the GDK rendering model prevents all flicker,
     * if you are redrawing the same region 400 times you may never
     * notice, aside from noticing a speed problem. Enabling update
     * debugging causes GTK to flicker slowly and noticeably, so you can
     * see exactly what’s being redrawn when, in what order.
     * 
     * The --gtk-debug=updates command line option passed to GTK+ programs
     * enables this debug option at application startup time. That's
     * usually more useful than calling gdk_window_set_debug_updates()
     * yourself, though you might want to use this function to enable
     * updates sometime after application startup time.
     */
    static setDebugUpdates(setting: boolean): void
    static $gtype: GObject.Type
}
class Atom {
    /* Methods of Gdk-3.0.Gdk.Atom */
    /**
     * Determines the string corresponding to an atom.
     */
    name(): string
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Finds or creates an atom corresponding to a given string.
     */
    static intern(atomName: string, onlyIfExists: boolean): Atom
    /**
     * Finds or creates an atom corresponding to a given string.
     * 
     * Note that this function is identical to gdk_atom_intern() except
     * that if a new #GdkAtom is created the string itself is used rather
     * than a copy. This saves memory, but can only be used if the string
     * will always exist. It can be used with statically
     * allocated strings in the main program, but not with statically
     * allocated memory in dynamically loaded modules, if you expect to
     * ever unload the module again (e.g. do not use this function in
     * GTK+ theme engines).
     */
    static internStaticString(atomName: string): Atom
}
class Color {
    /* Fields of Gdk-3.0.Gdk.Color */
    /**
     * For allocated colors, the pixel value used to
     *     draw this color on the screen. Not used anymore.
     */
    readonly pixel: number
    /**
     * The red component of the color. This is
     *     a value between 0 and 65535, with 65535 indicating
     *     full intensity
     */
    readonly red: number
    /**
     * The green component of the color
     */
    readonly green: number
    /**
     * The blue component of the color
     */
    readonly blue: number
    /* Methods of Gdk-3.0.Gdk.Color */
    /**
     * Makes a copy of a #GdkColor.
     * 
     * The result must be freed using gdk_color_free().
     */
    copy(): Color
    /**
     * Compares two colors.
     */
    equal(colorb: Color): boolean
    /**
     * Frees a #GdkColor created with gdk_color_copy().
     */
    free(): void
    /**
     * A hash function suitable for using for a hash
     * table that stores #GdkColors.
     */
    hash(): number
    /**
     * Returns a textual specification of `color` in the hexadecimal
     * form “\#rrrrggggbbbb” where “r”, “g” and “b” are hex digits
     * representing the red, green and blue components respectively.
     * 
     * The returned string can be parsed by gdk_color_parse().
     */
    toString(): string
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Parses a textual specification of a color and fill in the
     * `red,` `green,` and `blue` fields of a #GdkColor.
     * 
     * The string can either one of a large set of standard names
     * (taken from the X11 `rgb.txt` file), or it can be a hexadecimal
     * value in the form “\#rgb” “\#rrggbb”, “\#rrrgggbbb” or
     * “\#rrrrggggbbbb” where “r”, “g” and “b” are hex digits of
     * the red, green, and blue components of the color, respectively.
     * (White in the four forms is “\#fff”, “\#ffffff”, “\#fffffffff”
     * and “\#ffffffffffff”).
     */
    static parse(spec: string): [ /* returnType */ boolean, /* color */ Color ]
}
abstract class DevicePadInterface {
    static name: string
}
abstract class DrawingContextClass {
    static name: string
}
class EventAny {
    /* Fields of Gdk-3.0.Gdk.EventAny */
    /**
     * the type of the event.
     */
    readonly type: EventType
    /**
     * the window which received the event.
     */
    readonly window: Window
    /**
     * %TRUE if the event was sent explicitly.
     */
    readonly sendEvent: number
    static name: string
}
class EventButton {
    /* Fields of Gdk-3.0.Gdk.EventButton */
    /**
     * the type of the event (%GDK_BUTTON_PRESS, %GDK_2BUTTON_PRESS,
     *   %GDK_3BUTTON_PRESS or %GDK_BUTTON_RELEASE).
     */
    readonly type: EventType
    /**
     * the window which received the event.
     */
    readonly window: Window
    /**
     * %TRUE if the event was sent explicitly.
     */
    readonly sendEvent: number
    /**
     * the time of the event in milliseconds.
     */
    readonly time: number
    /**
     * the x coordinate of the pointer relative to the window.
     */
    readonly x: number
    /**
     * the y coordinate of the pointer relative to the window.
     */
    readonly y: number
    /**
     * `x,` `y` translated to the axes of `device,` or %NULL if `device` is
     *   the mouse.
     */
    readonly axes: number
    /**
     * a bit-mask representing the state of
     *   the modifier keys (e.g. Control, Shift and Alt) and the pointer
     *   buttons. See #GdkModifierType.
     */
    readonly state: ModifierType
    /**
     * the button which was pressed or released, numbered from 1 to 5.
     *   Normally button 1 is the left mouse button, 2 is the middle button,
     *   and 3 is the right button. On 2-button mice, the middle button can
     *   often be simulated by pressing both mouse buttons together.
     */
    readonly button: number
    /**
     * the master device that the event originated from. Use
     * gdk_event_get_source_device() to get the slave device.
     */
    readonly device: Device
    /**
     * the x coordinate of the pointer relative to the root of the
     *   screen.
     */
    readonly xRoot: number
    /**
     * the y coordinate of the pointer relative to the root of the
     *   screen.
     */
    readonly yRoot: number
    static name: string
}
class EventConfigure {
    /* Fields of Gdk-3.0.Gdk.EventConfigure */
    /**
     * the type of the event (%GDK_CONFIGURE).
     */
    readonly type: EventType
    /**
     * the window which received the event.
     */
    readonly window: Window
    /**
     * %TRUE if the event was sent explicitly.
     */
    readonly sendEvent: number
    /**
     * the new x coordinate of the window, relative to its parent.
     */
    readonly x: number
    /**
     * the new y coordinate of the window, relative to its parent.
     */
    readonly y: number
    /**
     * the new width of the window.
     */
    readonly width: number
    /**
     * the new height of the window.
     */
    readonly height: number
    static name: string
}
class EventCrossing {
    /* Fields of Gdk-3.0.Gdk.EventCrossing */
    /**
     * the type of the event (%GDK_ENTER_NOTIFY or %GDK_LEAVE_NOTIFY).
     */
    readonly type: EventType
    /**
     * the window which received the event.
     */
    readonly window: Window
    /**
     * %TRUE if the event was sent explicitly.
     */
    readonly sendEvent: number
    /**
     * the window that was entered or left.
     */
    readonly subwindow: Window
    /**
     * the time of the event in milliseconds.
     */
    readonly time: number
    /**
     * the x coordinate of the pointer relative to the window.
     */
    readonly x: number
    /**
     * the y coordinate of the pointer relative to the window.
     */
    readonly y: number
    /**
     * the x coordinate of the pointer relative to the root of the screen.
     */
    readonly xRoot: number
    /**
     * the y coordinate of the pointer relative to the root of the screen.
     */
    readonly yRoot: number
    /**
     * the crossing mode (%GDK_CROSSING_NORMAL, %GDK_CROSSING_GRAB,
     *  %GDK_CROSSING_UNGRAB, %GDK_CROSSING_GTK_GRAB, %GDK_CROSSING_GTK_UNGRAB or
     *  %GDK_CROSSING_STATE_CHANGED).  %GDK_CROSSING_GTK_GRAB, %GDK_CROSSING_GTK_UNGRAB,
     *  and %GDK_CROSSING_STATE_CHANGED were added in 2.14 and are always synthesized,
     *  never native.
     */
    readonly mode: CrossingMode
    /**
     * the kind of crossing that happened (%GDK_NOTIFY_INFERIOR,
     *  %GDK_NOTIFY_ANCESTOR, %GDK_NOTIFY_VIRTUAL, %GDK_NOTIFY_NONLINEAR or
     *  %GDK_NOTIFY_NONLINEAR_VIRTUAL).
     */
    readonly detail: NotifyType
    /**
     * %TRUE if `window` is the focus window or an inferior.
     */
    readonly focus: boolean
    /**
     * a bit-mask representing the state of
     *   the modifier keys (e.g. Control, Shift and Alt) and the pointer
     *   buttons. See #GdkModifierType.
     */
    readonly state: ModifierType
    static name: string
}
class EventDND {
    /* Fields of Gdk-3.0.Gdk.EventDND */
    /**
     * the type of the event (%GDK_DRAG_ENTER, %GDK_DRAG_LEAVE,
     *   %GDK_DRAG_MOTION, %GDK_DRAG_STATUS, %GDK_DROP_START or
     *   %GDK_DROP_FINISHED).
     */
    readonly type: EventType
    /**
     * the window which received the event.
     */
    readonly window: Window
    /**
     * %TRUE if the event was sent explicitly.
     */
    readonly sendEvent: number
    /**
     * the #GdkDragContext for the current DND operation.
     */
    readonly context: DragContext
    /**
     * the time of the event in milliseconds.
     */
    readonly time: number
    /**
     * the x coordinate of the pointer relative to the root of the
     *   screen, only set for %GDK_DRAG_MOTION and %GDK_DROP_START.
     */
    readonly xRoot: number
    /**
     * the y coordinate of the pointer relative to the root of the
     *   screen, only set for %GDK_DRAG_MOTION and %GDK_DROP_START.
     */
    readonly yRoot: number
    static name: string
}
class EventExpose {
    /* Fields of Gdk-3.0.Gdk.EventExpose */
    /**
     * the type of the event (%GDK_EXPOSE or %GDK_DAMAGE).
     */
    readonly type: EventType
    /**
     * the window which received the event.
     */
    readonly window: Window
    /**
     * %TRUE if the event was sent explicitly.
     */
    readonly sendEvent: number
    /**
     * bounding box of `region`.
     */
    readonly area: Rectangle
    /**
     * the region that needs to be redrawn.
     */
    readonly region: cairo.Region
    /**
     * the number of contiguous %GDK_EXPOSE events following this one.
     *   The only use for this is “exposure compression”, i.e. handling all
     *   contiguous %GDK_EXPOSE events in one go, though GDK performs some
     *   exposure compression so this is not normally needed.
     */
    readonly count: number
    static name: string
}
class EventFocus {
    /* Fields of Gdk-3.0.Gdk.EventFocus */
    /**
     * the type of the event (%GDK_FOCUS_CHANGE).
     */
    readonly type: EventType
    /**
     * the window which received the event.
     */
    readonly window: Window
    /**
     * %TRUE if the event was sent explicitly.
     */
    readonly sendEvent: number
    /**
     * %TRUE if the window has gained the keyboard focus, %FALSE if
     *   it has lost the focus.
     */
    readonly in_: number
    static name: string
}
class EventGrabBroken {
    /* Fields of Gdk-3.0.Gdk.EventGrabBroken */
    /**
     * the type of the event (%GDK_GRAB_BROKEN)
     */
    readonly type: EventType
    /**
     * the window which received the event, i.e. the window
     *   that previously owned the grab
     */
    readonly window: Window
    /**
     * %TRUE if the event was sent explicitly.
     */
    readonly sendEvent: number
    /**
     * %TRUE if a keyboard grab was broken, %FALSE if a pointer
     *   grab was broken
     */
    readonly keyboard: boolean
    /**
     * %TRUE if the broken grab was implicit
     */
    readonly implicit: boolean
    /**
     * If this event is caused by another grab in the same
     *   application, `grab_window` contains the new grab window. Otherwise
     *   `grab_window` is %NULL.
     */
    readonly grabWindow: Window
    static name: string
}
class EventKey {
    /* Fields of Gdk-3.0.Gdk.EventKey */
    /**
     * the type of the event (%GDK_KEY_PRESS or %GDK_KEY_RELEASE).
     */
    readonly type: EventType
    /**
     * the window which received the event.
     */
    readonly window: Window
    /**
     * %TRUE if the event was sent explicitly.
     */
    readonly sendEvent: number
    /**
     * the time of the event in milliseconds.
     */
    readonly time: number
    /**
     * a bit-mask representing the state of
     *   the modifier keys (e.g. Control, Shift and Alt) and the pointer
     *   buttons. See #GdkModifierType.
     */
    readonly state: ModifierType
    /**
     * the key that was pressed or released. See the
     *   `gdk/gdkkeysyms.h` header file for a
     *   complete list of GDK key codes.
     */
    readonly keyval: number
    /**
     * the length of `string`.
     */
    readonly length: number
    /**
     * a string containing an approximation of the text that
     *   would result from this keypress. The only correct way to handle text
     *   input of text is using input methods (see #GtkIMContext), so this
     *   field is deprecated and should never be used.
     *   (gdk_unicode_to_keyval() provides a non-deprecated way of getting
     *   an approximate translation for a key.) The string is encoded in the
     *   encoding of the current locale (Note: this for backwards compatibility:
     *   strings in GTK+ and GDK are typically in UTF-8.) and NUL-terminated.
     *   In some cases, the translation of the key code will be a single
     *   NUL byte, in which case looking at `length` is necessary to distinguish
     *   it from the an empty translation.
     */
    readonly string: string
    /**
     * the raw code of the key that was pressed or released.
     */
    readonly hardwareKeycode: number
    /**
     * the keyboard group.
     */
    readonly group: number
    /**
     * a flag that indicates if `hardware_keycode` is mapped to a
     *   modifier. Since 2.10
     */
    readonly isModifier: number
    static name: string
}
class EventMotion {
    /* Fields of Gdk-3.0.Gdk.EventMotion */
    /**
     * the type of the event.
     */
    readonly type: EventType
    /**
     * the window which received the event.
     */
    readonly window: Window
    /**
     * %TRUE if the event was sent explicitly.
     */
    readonly sendEvent: number
    /**
     * the time of the event in milliseconds.
     */
    readonly time: number
    /**
     * the x coordinate of the pointer relative to the window.
     */
    readonly x: number
    /**
     * the y coordinate of the pointer relative to the window.
     */
    readonly y: number
    /**
     * `x,` `y` translated to the axes of `device,` or %NULL if `device` is
     *   the mouse.
     */
    readonly axes: number
    /**
     * a bit-mask representing the state of
     *   the modifier keys (e.g. Control, Shift and Alt) and the pointer
     *   buttons. See #GdkModifierType.
     */
    readonly state: ModifierType
    /**
     * set to 1 if this event is just a hint, see the
     *   %GDK_POINTER_MOTION_HINT_MASK value of #GdkEventMask.
     */
    readonly isHint: number
    /**
     * the master device that the event originated from. Use
     * gdk_event_get_source_device() to get the slave device.
     */
    readonly device: Device
    /**
     * the x coordinate of the pointer relative to the root of the
     *   screen.
     */
    readonly xRoot: number
    /**
     * the y coordinate of the pointer relative to the root of the
     *   screen.
     */
    readonly yRoot: number
    static name: string
}
class EventOwnerChange {
    /* Fields of Gdk-3.0.Gdk.EventOwnerChange */
    /**
     * the type of the event (%GDK_OWNER_CHANGE).
     */
    readonly type: EventType
    /**
     * the window which received the event
     */
    readonly window: Window
    /**
     * %TRUE if the event was sent explicitly.
     */
    readonly sendEvent: number
    /**
     * the new owner of the selection, or %NULL if there is none
     */
    readonly owner: Window
    /**
     * the reason for the ownership change as a #GdkOwnerChange value
     */
    readonly reason: OwnerChange
    /**
     * the atom identifying the selection
     */
    readonly selection: Atom
    /**
     * the timestamp of the event
     */
    readonly time: number
    /**
     * the time at which the selection ownership was taken
     *   over
     */
    readonly selectionTime: number
    static name: string
}
class EventPadAxis {
    /* Fields of Gdk-3.0.Gdk.EventPadAxis */
    /**
     * the type of the event (%GDK_PAD_RING or %GDK_PAD_STRIP).
     */
    readonly type: EventType
    /**
     * the window which received the event.
     */
    readonly window: Window
    /**
     * %TRUE if the event was sent explicitly.
     */
    readonly sendEvent: number
    /**
     * the time of the event in milliseconds.
     */
    readonly time: number
    /**
     * the pad group the ring/strip belongs to. A %GDK_SOURCE_TABLET_PAD
     *   device may have one or more groups containing a set of buttons/rings/strips
     *   each.
     */
    readonly group: number
    /**
     * number of strip/ring that was interacted. This number is 0-indexed.
     */
    readonly index: number
    /**
     * The current mode of `group`. Different groups in a %GDK_SOURCE_TABLET_PAD
     *   device may have different current modes.
     */
    readonly mode: number
    /**
     * The current value for the given axis.
     */
    readonly value: number
    static name: string
}
class EventPadButton {
    /* Fields of Gdk-3.0.Gdk.EventPadButton */
    /**
     * the type of the event (%GDK_PAD_BUTTON_PRESS or %GDK_PAD_BUTTON_RELEASE).
     */
    readonly type: EventType
    /**
     * the window which received the event.
     */
    readonly window: Window
    /**
     * %TRUE if the event was sent explicitly.
     */
    readonly sendEvent: number
    /**
     * the time of the event in milliseconds.
     */
    readonly time: number
    /**
     * the pad group the button belongs to. A %GDK_SOURCE_TABLET_PAD device
     *   may have one or more groups containing a set of buttons/rings/strips each.
     */
    readonly group: number
    /**
     * The pad button that was pressed.
     */
    readonly button: number
    /**
     * The current mode of `group`. Different groups in a %GDK_SOURCE_TABLET_PAD
     *   device may have different current modes.
     */
    readonly mode: number
    static name: string
}
class EventPadGroupMode {
    /* Fields of Gdk-3.0.Gdk.EventPadGroupMode */
    /**
     * the type of the event (%GDK_PAD_GROUP_MODE).
     */
    readonly type: EventType
    /**
     * the window which received the event.
     */
    readonly window: Window
    /**
     * %TRUE if the event was sent explicitly.
     */
    readonly sendEvent: number
    /**
     * the time of the event in milliseconds.
     */
    readonly time: number
    /**
     * the pad group that is switching mode. A %GDK_SOURCE_TABLET_PAD
     *   device may have one or more groups containing a set of buttons/rings/strips
     *   each.
     */
    readonly group: number
    /**
     * The new mode of `group`. Different groups in a %GDK_SOURCE_TABLET_PAD
     *   device may have different current modes.
     */
    readonly mode: number
    static name: string
}
class EventProperty {
    /* Fields of Gdk-3.0.Gdk.EventProperty */
    /**
     * the type of the event (%GDK_PROPERTY_NOTIFY).
     */
    readonly type: EventType
    /**
     * the window which received the event.
     */
    readonly window: Window
    /**
     * %TRUE if the event was sent explicitly.
     */
    readonly sendEvent: number
    /**
     * the property that was changed.
     */
    readonly atom: Atom
    /**
     * the time of the event in milliseconds.
     */
    readonly time: number
    /**
     * whether the property was changed
     *   (%GDK_PROPERTY_NEW_VALUE) or deleted (%GDK_PROPERTY_DELETE).
     */
    readonly state: PropertyState
    static name: string
}
class EventProximity {
    /* Fields of Gdk-3.0.Gdk.EventProximity */
    /**
     * the type of the event (%GDK_PROXIMITY_IN or %GDK_PROXIMITY_OUT).
     */
    readonly type: EventType
    /**
     * the window which received the event.
     */
    readonly window: Window
    /**
     * %TRUE if the event was sent explicitly.
     */
    readonly sendEvent: number
    /**
     * the time of the event in milliseconds.
     */
    readonly time: number
    /**
     * the master device that the event originated from. Use
     * gdk_event_get_source_device() to get the slave device.
     */
    readonly device: Device
    static name: string
}
class EventScroll {
    /* Fields of Gdk-3.0.Gdk.EventScroll */
    /**
     * the type of the event (%GDK_SCROLL).
     */
    readonly type: EventType
    /**
     * the window which received the event.
     */
    readonly window: Window
    /**
     * %TRUE if the event was sent explicitly.
     */
    readonly sendEvent: number
    /**
     * the time of the event in milliseconds.
     */
    readonly time: number
    /**
     * the x coordinate of the pointer relative to the window.
     */
    readonly x: number
    /**
     * the y coordinate of the pointer relative to the window.
     */
    readonly y: number
    /**
     * a bit-mask representing the state of
     *   the modifier keys (e.g. Control, Shift and Alt) and the pointer
     *   buttons. See #GdkModifierType.
     */
    readonly state: ModifierType
    /**
     * the direction to scroll to (one of %GDK_SCROLL_UP,
     *   %GDK_SCROLL_DOWN, %GDK_SCROLL_LEFT, %GDK_SCROLL_RIGHT or
     *   %GDK_SCROLL_SMOOTH).
     */
    readonly direction: ScrollDirection
    /**
     * the master device that the event originated from. Use
     * gdk_event_get_source_device() to get the slave device.
     */
    readonly device: Device
    /**
     * the x coordinate of the pointer relative to the root of the
     *   screen.
     */
    readonly xRoot: number
    /**
     * the y coordinate of the pointer relative to the root of the
     *   screen.
     */
    readonly yRoot: number
    /**
     * the x coordinate of the scroll delta
     */
    readonly deltaX: number
    /**
     * the y coordinate of the scroll delta
     */
    readonly deltaY: number
    readonly isStop: number
    static name: string
}
class EventSelection {
    /* Fields of Gdk-3.0.Gdk.EventSelection */
    /**
     * the type of the event (%GDK_SELECTION_CLEAR,
     *   %GDK_SELECTION_NOTIFY or %GDK_SELECTION_REQUEST).
     */
    readonly type: EventType
    /**
     * the window which received the event.
     */
    readonly window: Window
    /**
     * %TRUE if the event was sent explicitly.
     */
    readonly sendEvent: number
    /**
     * the selection.
     */
    readonly selection: Atom
    /**
     * the target to which the selection should be converted.
     */
    readonly target: Atom
    /**
     * the property in which to place the result of the conversion.
     */
    readonly property: Atom
    /**
     * the time of the event in milliseconds.
     */
    readonly time: number
    /**
     * the window on which to place `property` or %NULL if none.
     */
    readonly requestor: Window
    static name: string
}
class EventSequence {
    static name: string
}
class EventSetting {
    /* Fields of Gdk-3.0.Gdk.EventSetting */
    /**
     * the type of the event (%GDK_SETTING).
     */
    readonly type: EventType
    /**
     * the window which received the event.
     */
    readonly window: Window
    /**
     * %TRUE if the event was sent explicitly.
     */
    readonly sendEvent: number
    /**
     * what happened to the setting (%GDK_SETTING_ACTION_NEW,
     *   %GDK_SETTING_ACTION_CHANGED or %GDK_SETTING_ACTION_DELETED).
     */
    readonly action: SettingAction
    /**
     * the name of the setting.
     */
    readonly name: string
    static name: string
}
class EventTouch {
    /* Fields of Gdk-3.0.Gdk.EventTouch */
    /**
     * the type of the event (%GDK_TOUCH_BEGIN, %GDK_TOUCH_UPDATE,
     *   %GDK_TOUCH_END, %GDK_TOUCH_CANCEL)
     */
    readonly type: EventType
    /**
     * the window which received the event
     */
    readonly window: Window
    /**
     * %TRUE if the event was sent explicitly.
     */
    readonly sendEvent: number
    /**
     * the time of the event in milliseconds.
     */
    readonly time: number
    /**
     * the x coordinate of the pointer relative to the window
     */
    readonly x: number
    /**
     * the y coordinate of the pointer relative to the window
     */
    readonly y: number
    /**
     * `x,` `y` translated to the axes of `device,` or %NULL if `device` is
     *   the mouse
     */
    readonly axes: number
    /**
     * a bit-mask representing the state of
     *   the modifier keys (e.g. Control, Shift and Alt) and the pointer
     *   buttons. See #GdkModifierType
     */
    readonly state: ModifierType
    /**
     * the event sequence that the event belongs to
     */
    readonly sequence: EventSequence
    /**
     * whether the event should be used for emulating
     *   pointer event
     */
    readonly emulatingPointer: boolean
    /**
     * the master device that the event originated from. Use
     * gdk_event_get_source_device() to get the slave device.
     */
    readonly device: Device
    /**
     * the x coordinate of the pointer relative to the root of the
     *   screen
     */
    readonly xRoot: number
    /**
     * the y coordinate of the pointer relative to the root of the
     *   screen
     */
    readonly yRoot: number
    static name: string
}
class EventTouchpadPinch {
    /* Fields of Gdk-3.0.Gdk.EventTouchpadPinch */
    /**
     * the type of the event (%GDK_TOUCHPAD_PINCH)
     */
    readonly type: EventType
    /**
     * the window which received the event
     */
    readonly window: Window
    /**
     * %TRUE if the event was sent explicitly
     */
    readonly sendEvent: number
    /**
     * the current phase of the gesture
     */
    readonly phase: number
    /**
     * The number of fingers triggering the pinch
     */
    readonly nFingers: number
    /**
     * the time of the event in milliseconds
     */
    readonly time: number
    /**
     * The X coordinate of the pointer
     */
    readonly x: number
    /**
     * The Y coordinate of the pointer
     */
    readonly y: number
    /**
     * Movement delta in the X axis of the swipe focal point
     */
    readonly dx: number
    /**
     * Movement delta in the Y axis of the swipe focal point
     */
    readonly dy: number
    /**
     * The angle change in radians, negative angles
     *   denote counter-clockwise movements
     */
    readonly angleDelta: number
    /**
     * The current scale, relative to that at the time of
     *   the corresponding %GDK_TOUCHPAD_GESTURE_PHASE_BEGIN event
     */
    readonly scale: number
    /**
     * The X coordinate of the pointer, relative to the
     *   root of the screen.
     */
    readonly xRoot: number
    /**
     * The Y coordinate of the pointer, relative to the
     *   root of the screen.
     */
    readonly yRoot: number
    /**
     * a bit-mask representing the state of
     *   the modifier keys (e.g. Control, Shift and Alt) and the pointer
     *   buttons. See #GdkModifierType.
     */
    readonly state: ModifierType
    static name: string
}
class EventTouchpadSwipe {
    /* Fields of Gdk-3.0.Gdk.EventTouchpadSwipe */
    /**
     * the type of the event (%GDK_TOUCHPAD_SWIPE)
     */
    readonly type: EventType
    /**
     * the window which received the event
     */
    readonly window: Window
    /**
     * %TRUE if the event was sent explicitly
     */
    readonly sendEvent: number
    /**
     * the current phase of the gesture
     */
    readonly phase: number
    /**
     * The number of fingers triggering the swipe
     */
    readonly nFingers: number
    /**
     * the time of the event in milliseconds
     */
    readonly time: number
    /**
     * The X coordinate of the pointer
     */
    readonly x: number
    /**
     * The Y coordinate of the pointer
     */
    readonly y: number
    /**
     * Movement delta in the X axis of the swipe focal point
     */
    readonly dx: number
    /**
     * Movement delta in the Y axis of the swipe focal point
     */
    readonly dy: number
    /**
     * The X coordinate of the pointer, relative to the
     *   root of the screen.
     */
    readonly xRoot: number
    /**
     * The Y coordinate of the pointer, relative to the
     *   root of the screen.
     */
    readonly yRoot: number
    /**
     * a bit-mask representing the state of
     *   the modifier keys (e.g. Control, Shift and Alt) and the pointer
     *   buttons. See #GdkModifierType.
     */
    readonly state: ModifierType
    static name: string
}
class EventVisibility {
    /* Fields of Gdk-3.0.Gdk.EventVisibility */
    /**
     * the type of the event (%GDK_VISIBILITY_NOTIFY).
     */
    readonly type: EventType
    /**
     * the window which received the event.
     */
    readonly window: Window
    /**
     * %TRUE if the event was sent explicitly.
     */
    readonly sendEvent: number
    /**
     * the new visibility state (%GDK_VISIBILITY_FULLY_OBSCURED,
     *   %GDK_VISIBILITY_PARTIAL or %GDK_VISIBILITY_UNOBSCURED).
     */
    readonly state: VisibilityState
    static name: string
}
class EventWindowState {
    /* Fields of Gdk-3.0.Gdk.EventWindowState */
    /**
     * the type of the event (%GDK_WINDOW_STATE).
     */
    readonly type: EventType
    /**
     * the window which received the event.
     */
    readonly window: Window
    /**
     * %TRUE if the event was sent explicitly.
     */
    readonly sendEvent: number
    /**
     * mask specifying what flags have changed.
     */
    readonly changedMask: WindowState
    /**
     * the new window state, a combination of
     *   #GdkWindowState bits.
     */
    readonly newWindowState: WindowState
    static name: string
}
abstract class FrameClockClass {
    static name: string
}
class FrameClockPrivate {
    static name: string
}
class FrameTimings {
    /* Methods of Gdk-3.0.Gdk.FrameTimings */
    /**
     * The timing information in a #GdkFrameTimings is filled in
     * incrementally as the frame as drawn and passed off to the
     * window system for processing and display to the user. The
     * accessor functions for #GdkFrameTimings can return 0 to
     * indicate an unavailable value for two reasons: either because
     * the information is not yet available, or because it isn't
     * available at all. Once gdk_frame_timings_get_complete() returns
     * %TRUE for a frame, you can be certain that no further values
     * will become available and be stored in the #GdkFrameTimings.
     */
    getComplete(): boolean
    /**
     * Gets the frame counter value of the #GdkFrameClock when this
     * this frame was drawn.
     */
    getFrameCounter(): number
    /**
     * Returns the frame time for the frame. This is the time value
     * that is typically used to time animations for the frame. See
     * gdk_frame_clock_get_frame_time().
     */
    getFrameTime(): number
    /**
     * Gets the predicted time at which this frame will be displayed. Although
     * no predicted time may be available, if one is available, it will
     * be available while the frame is being generated, in contrast to
     * gdk_frame_timings_get_presentation_time(), which is only available
     * after the frame has been presented. In general, if you are simply
     * animating, you should use gdk_frame_clock_get_frame_time() rather
     * than this function, but this function is useful for applications
     * that want exact control over latency. For example, a movie player
     * may want this information for Audio/Video synchronization.
     */
    getPredictedPresentationTime(): number
    /**
     * Reurns the presentation time. This is the time at which the frame
     * became visible to the user.
     */
    getPresentationTime(): number
    /**
     * Gets the natural interval between presentation times for
     * the display that this frame was displayed on. Frame presentation
     * usually happens during the “vertical blanking interval”.
     */
    getRefreshInterval(): number
    /**
     * Increases the reference count of `timings`.
     */
    ref(): FrameTimings
    /**
     * Decreases the reference count of `timings`. If `timings`
     * is no longer referenced, it will be freed.
     */
    unref(): void
    static name: string
}
class Geometry {
    /* Fields of Gdk-3.0.Gdk.Geometry */
    /**
     * minimum width of window (or -1 to use requisition, with
     *  #GtkWindow only)
     */
    readonly minWidth: number
    /**
     * minimum height of window (or -1 to use requisition, with
     *  #GtkWindow only)
     */
    readonly minHeight: number
    /**
     * maximum width of window (or -1 to use requisition, with
     *  #GtkWindow only)
     */
    readonly maxWidth: number
    /**
     * maximum height of window (or -1 to use requisition, with
     *  #GtkWindow only)
     */
    readonly maxHeight: number
    /**
     * allowed window widths are `base_width` + `width_inc` * N where N
     *  is any integer (-1 allowed with #GtkWindow)
     */
    readonly baseWidth: number
    /**
     * allowed window widths are `base_height` + `height_inc` * N where
     *  N is any integer (-1 allowed with #GtkWindow)
     */
    readonly baseHeight: number
    /**
     * width resize increment
     */
    readonly widthInc: number
    /**
     * height resize increment
     */
    readonly heightInc: number
    /**
     * minimum width/height ratio
     */
    readonly minAspect: number
    /**
     * maximum width/height ratio
     */
    readonly maxAspect: number
    /**
     * window gravity, see gtk_window_set_gravity()
     */
    readonly winGravity: Gravity
    static name: string
}
class KeymapKey {
    /* Fields of Gdk-3.0.Gdk.KeymapKey */
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
abstract class MonitorClass {
    static name: string
}
class Point {
    /* Fields of Gdk-3.0.Gdk.Point */
    /**
     * the x coordinate of the point.
     */
    readonly x: number
    /**
     * the y coordinate of the point.
     */
    readonly y: number
    static name: string
}
class RGBA {
    /* Fields of Gdk-3.0.Gdk.RGBA */
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
    /* Methods of Gdk-3.0.Gdk.RGBA */
    /**
     * Makes a copy of a #GdkRGBA.
     * 
     * The result must be freed through gdk_rgba_free().
     */
    copy(): RGBA
    /**
     * Compares two RGBA colors.
     */
    equal(p2: RGBA): boolean
    /**
     * Frees a #GdkRGBA created with gdk_rgba_copy()
     */
    free(): void
    /**
     * A hash function suitable for using for a hash
     * table that stores #GdkRGBAs.
     */
    hash(): number
    /**
     * Parses a textual representation of a color, filling in
     * the `red,` `green,` `blue` and `alpha` fields of the `rgba` #GdkRGBA.
     * 
     * The string can be either one of:
     * - A standard name (Taken from the X11 rgb.txt file).
     * - A hexadecimal value in the form “\#rgb”, “\#rrggbb”,
     *   “\#rrrgggbbb” or ”\#rrrrggggbbbb”
     * - A RGB color in the form “rgb(r,g,b)” (In this case the color will
     *   have full opacity)
     * - A RGBA color in the form “rgba(r,g,b,a)”
     * 
     * Where “r”, “g”, “b” and “a” are respectively the red, green, blue and
     * alpha color values. In the last two cases, “r”, “g”, and “b” are either integers
     * in the range 0 to 255 or percentage values in the range 0% to 100%, and
     * a is a floating point value in the range 0 to 1.
     */
    parse(spec: string): boolean
    /**
     * Returns a textual specification of `rgba` in the form
     * `rgb(r,g,b)` or
     * `rgba(r g,b,a)`,
     * where “r”, “g”, “b” and “a” represent the red, green,
     * blue and alpha values respectively. “r”, “g”, and “b” are
     * represented as integers in the range 0 to 255, and “a”
     * is represented as a floating point value in the range 0 to 1.
     * 
     * These string forms are string forms that are supported by
     * the CSS3 colors module, and can be parsed by gdk_rgba_parse().
     * 
     * Note that this string representation may lose some
     * precision, since “r”, “g” and “b” are represented as 8-bit
     * integers. If this is a concern, you should use a
     * different representation.
     */
    toString(): string
    static name: string
}
class Rectangle {
    /* Fields of Gdk-3.0.Gdk.Rectangle */
    readonly x: number
    readonly y: number
    readonly width: number
    readonly height: number
    /* Methods of Gdk-3.0.Gdk.Rectangle */
    /**
     * Checks if the two given rectangles are equal.
     */
    equal(rect2: Rectangle): boolean
    /**
     * Calculates the intersection of two rectangles. It is allowed for
     * `dest` to be the same as either `src1` or `src2`. If the rectangles
     * do not intersect, `dest’`s width and height is set to 0 and its x
     * and y values are undefined. If you are only interested in whether
     * the rectangles intersect, but not in the intersecting area itself,
     * pass %NULL for `dest`.
     */
    intersect(src2: Rectangle): [ /* returnType */ boolean, /* dest */ Rectangle | null ]
    /**
     * Calculates the union of two rectangles.
     * The union of rectangles `src1` and `src2` is the smallest rectangle which
     * includes both `src1` and `src2` within it.
     * It is allowed for `dest` to be the same as either `src1` or `src2`.
     * 
     * Note that this function does not ignore 'empty' rectangles (ie. with
     * zero width or height).
     */
    union(src2: Rectangle): /* dest */ Rectangle
    static name: string
}
class TimeCoord {
    /* Fields of Gdk-3.0.Gdk.TimeCoord */
    /**
     * The timestamp for this event.
     */
    readonly time: number
    /**
     * the values of the device’s axes.
     */
    readonly axes: number[]
    static name: string
}
class WindowAttr {
    /* Fields of Gdk-3.0.Gdk.WindowAttr */
    /**
     * title of the window (for toplevel windows)
     */
    readonly title: string
    /**
     * event mask (see gdk_window_set_events())
     */
    readonly eventMask: number
    /**
     * X coordinate relative to parent window (see gdk_window_move())
     */
    readonly x: number
    /**
     * Y coordinate relative to parent window (see gdk_window_move())
     */
    readonly y: number
    /**
     * width of window
     */
    readonly width: number
    /**
     * height of window
     */
    readonly height: number
    /**
     * #GDK_INPUT_OUTPUT (normal window) or #GDK_INPUT_ONLY (invisible
     *  window that receives events)
     */
    readonly wclass: WindowWindowClass
    /**
     * #GdkVisual for window
     */
    readonly visual: Visual
    /**
     * type of window
     */
    readonly windowType: WindowType
    /**
     * cursor for the window (see gdk_window_set_cursor())
     */
    readonly cursor: Cursor
    /**
     * don’t use (see gtk_window_set_wmclass())
     */
    readonly wmclassName: string
    /**
     * don’t use (see gtk_window_set_wmclass())
     */
    readonly wmclassClass: string
    /**
     * %TRUE to bypass the window manager
     */
    readonly overrideRedirect: boolean
    /**
     * a hint of the function of the window
     */
    readonly typeHint: WindowTypeHint
    static name: string
}
abstract class WindowClass {
    /* Fields of Gdk-3.0.Gdk.WindowClass */
    readonly parentClass: GObject.ObjectClass
    readonly toEmbedder: (window: Window, offscreenX: number, offscreenY: number, embedderX: number, embedderY: number) => void
    readonly fromEmbedder: (window: Window, embedderX: number, embedderY: number, offscreenX: number, offscreenY: number) => void
    readonly createSurface: (window: Window, width: number, height: number) => cairo.Surface
    static name: string
}
class WindowRedirect {
    static name: string
}
class Event {
    /* Methods of Gdk-3.0.Gdk.Event */
    /**
     * If both events contain X/Y information, this function will return %TRUE
     * and return in `angle` the relative angle from `event1` to `event2`. The rotation
     * direction for positive angles is from the positive X axis towards the positive
     * Y axis.
     */
    getAngle(event2: Event): [ /* returnType */ boolean, /* angle */ number ]
    /**
     * If both events contain X/Y information, the center of both coordinates
     * will be returned in `x` and `y`.
     */
    getCenter(event2: Event): [ /* returnType */ boolean, /* x */ number, /* y */ number ]
    /**
     * If both events have X/Y information, the distance between both coordinates
     * (as in a straight line going from `event1` to `event2`) will be returned.
     */
    getDistance(event2: Event): [ /* returnType */ boolean, /* distance */ number ]
    /**
     * Copies a #GdkEvent, copying or incrementing the reference count of the
     * resources associated with it (e.g. #GdkWindow’s and strings).
     */
    copy(): Event
    /**
     * Frees a #GdkEvent, freeing or decrementing any resources associated with it.
     * Note that this function should only be called with events returned from
     * functions such as gdk_event_peek(), gdk_event_get(), gdk_event_copy()
     * and gdk_event_new().
     */
    free(): void
    /**
     * Extract the axis value for a particular axis use from
     * an event structure.
     */
    getAxis(axisUse: AxisUse): [ /* returnType */ boolean, /* value */ number ]
    /**
     * Extract the button number from an event.
     */
    getButton(): [ /* returnType */ boolean, /* button */ number ]
    /**
     * Extracts the click count from an event.
     */
    getClickCount(): [ /* returnType */ boolean, /* clickCount */ number ]
    /**
     * Extract the event window relative x/y coordinates from an event.
     */
    getCoords(): [ /* returnType */ boolean, /* xWin */ number | null, /* yWin */ number | null ]
    /**
     * If the event contains a “device” field, this function will return
     * it, else it will return %NULL.
     */
    getDevice(): Device | null
    /**
     * If the event was generated by a device that supports
     * different tools (eg. a tablet), this function will
     * return a #GdkDeviceTool representing the tool that
     * caused the event. Otherwise, %NULL will be returned.
     * 
     * Note: the #GdkDeviceTool<!-- -->s will be constant during
     * the application lifetime, if settings must be stored
     * persistently across runs, see gdk_device_tool_get_serial()
     */
    getDeviceTool(): DeviceTool
    /**
     * If `event` if of type %GDK_TOUCH_BEGIN, %GDK_TOUCH_UPDATE,
     * %GDK_TOUCH_END or %GDK_TOUCH_CANCEL, returns the #GdkEventSequence
     * to which the event belongs. Otherwise, return %NULL.
     */
    getEventSequence(): EventSequence
    /**
     * Retrieves the type of the event.
     */
    getEventType(): EventType
    /**
     * Extracts the hardware keycode from an event.
     * 
     * Also see gdk_event_get_scancode().
     */
    getKeycode(): [ /* returnType */ boolean, /* keycode */ number ]
    /**
     * Extracts the keyval from an event.
     */
    getKeyval(): [ /* returnType */ boolean, /* keyval */ number ]
    /**
     * #event: a #GdkEvent
     * Returns whether this event is an 'emulated' pointer event (typically
     * from a touch event), as opposed to a real one.
     */
    getPointerEmulated(): boolean
    /**
     * Extract the root window relative x/y coordinates from an event.
     */
    getRootCoords(): [ /* returnType */ boolean, /* xRoot */ number | null, /* yRoot */ number | null ]
    /**
     * Gets the keyboard low-level scancode of a key event.
     * 
     * This is usually hardware_keycode. On Windows this is the high
     * word of WM_KEY{DOWN,UP} lParam which contains the scancode and
     * some extended flags.
     */
    getScancode(): number
    /**
     * Returns the screen for the event. The screen is
     * typically the screen for `event->any.window`, but
     * for events such as mouse events, it is the screen
     * where the pointer was when the event occurs -
     * that is, the screen which has the root window
     * to which `event->motion.x_root` and
     * `event->motion.y_root` are relative.
     */
    getScreen(): Screen
    /**
     * Retrieves the scroll deltas from a #GdkEvent
     * 
     * See also: gdk_event_get_scroll_direction()
     */
    getScrollDeltas(): [ /* returnType */ boolean, /* deltaX */ number, /* deltaY */ number ]
    /**
     * Extracts the scroll direction from an event.
     * 
     * If `event` is not of type %GDK_SCROLL, the contents of `direction`
     * are undefined.
     * 
     * If you wish to handle both discrete and smooth scrolling, you
     * should check the return value of this function, or of
     * gdk_event_get_scroll_deltas(); for instance:
     * 
     * 
     * ```c
     *   GdkScrollDirection direction;
     *   double vscroll_factor = 0.0;
     *   double x_scroll, y_scroll;
     * 
     *   if (gdk_event_get_scroll_direction (event, &direction))
     *     {
     *       // Handle discrete scrolling with a known constant delta;
     *       const double delta = 12.0;
     * 
     *       switch (direction)
     *         {
     *         case GDK_SCROLL_UP:
     *           vscroll_factor = -delta;
     *           break;
     *         case GDK_SCROLL_DOWN:
     *           vscroll_factor = delta;
     *           break;
     *         default:
     *           // no scrolling
     *           break;
     *         }
     *     }
     *   else if (gdk_event_get_scroll_deltas (event, &x_scroll, &y_scroll))
     *     {
     *       // Handle smooth scrolling directly
     *       vscroll_factor = y_scroll;
     *     }
     * ```
     * 
     */
    getScrollDirection(): [ /* returnType */ boolean, /* direction */ ScrollDirection ]
    /**
     * Returns the #GdkSeat this event was generated for.
     */
    getSeat(): Seat
    /**
     * This function returns the hardware (slave) #GdkDevice that has
     * triggered the event, falling back to the virtual (master) device
     * (as in gdk_event_get_device()) if the event wasn’t caused by
     * interaction with a hardware device. This may happen for example
     * in synthesized crossing events after a #GdkWindow updates its
     * geometry or a grab is acquired/released.
     * 
     * If the event does not contain a device field, this function will
     * return %NULL.
     */
    getSourceDevice(): Device | null
    /**
     * If the event contains a “state” field, puts that field in `state`. Otherwise
     * stores an empty state (0). Returns %TRUE if there was a state field
     * in the event. `event` may be %NULL, in which case it’s treated
     * as if the event had no state field.
     */
    getState(): [ /* returnType */ boolean, /* state */ ModifierType ]
    /**
     * Returns the time stamp from `event,` if there is one; otherwise
     * returns #GDK_CURRENT_TIME. If `event` is %NULL, returns #GDK_CURRENT_TIME.
     */
    getTime(): number
    /**
     * Extracts the #GdkWindow associated with an event.
     */
    getWindow(): Window
    /**
     * Check whether a scroll event is a stop scroll event. Scroll sequences
     * with smooth scroll information may provide a stop scroll event once the
     * interaction with the device finishes, e.g. by lifting a finger. This
     * stop scroll event is the signal that a widget may trigger kinetic
     * scrolling based on the current velocity.
     * 
     * Stop scroll events always have a a delta of 0/0.
     */
    isScrollStopEvent(): boolean
    /**
     * Appends a copy of the given event onto the front of the event
     * queue for event->any.window’s display, or the default event
     * queue if event->any.window is %NULL. See gdk_display_put_event().
     */
    put(): void
    /**
     * Sets the device for `event` to `device`. The event must
     * have been allocated by GTK+, for instance, by
     * gdk_event_copy().
     */
    setDevice(device: Device): void
    /**
     * Sets the device tool for this event, should be rarely used.
     */
    setDeviceTool(tool?: DeviceTool | null): void
    /**
     * Sets the screen for `event` to `screen`. The event must
     * have been allocated by GTK+, for instance, by
     * gdk_event_copy().
     */
    setScreen(screen: Screen): void
    /**
     * Sets the slave device for `event` to `device`.
     * 
     * The event must have been allocated by GTK+,
     * for instance by gdk_event_copy().
     */
    setSourceDevice(device: Device): void
    /**
     * This function returns whether a #GdkEventButton should trigger a
     * context menu, according to platform conventions. The right mouse
     * button always triggers context menus. Additionally, if
     * gdk_keymap_get_modifier_mask() returns a non-0 mask for
     * %GDK_MODIFIER_INTENT_CONTEXT_MENU, then the left mouse button will
     * also trigger a context menu if this modifier is pressed.
     * 
     * This function should always be used instead of simply checking for
     * event->button == %GDK_BUTTON_SECONDARY.
     */
    triggersContextMenu(): boolean
    static name: string
    static new(type: EventType): Event
    constructor(type: EventType)
    /* Static methods and pseudo-constructors */
    static new(type: EventType): Event
    /**
     * Checks all open displays for a #GdkEvent to process,to be processed
     * on, fetching events from the windowing system if necessary.
     * See gdk_display_get_event().
     */
    static get(): Event | null
    /**
     * Sets the function to call to handle all events from GDK.
     * 
     * Note that GTK+ uses this to install its own event handler, so it is
     * usually not useful for GTK+ applications. (Although an application
     * can call this function then call gtk_main_do_event() to pass
     * events to GTK+.)
     */
    static handlerSet(func: EventFunc): void
    /**
     * If there is an event waiting in the event queue of some open
     * display, returns a copy of it. See gdk_display_peek_event().
     */
    static peek(): Event | null
    /**
     * Request more motion notifies if `event` is a motion notify hint event.
     * 
     * This function should be used instead of gdk_window_get_pointer() to
     * request further motion notifies, because it also works for extension
     * events where motion notifies are provided for devices other than the
     * core pointer. Coordinate extraction, processing and requesting more
     * motion events from a %GDK_MOTION_NOTIFY event usually works like this:
     * 
     * 
     * ```c
     * {
     *   // motion_event handler
     *   x = motion_event->x;
     *   y = motion_event->y;
     *   // handle (x,y) motion
     *   gdk_event_request_motions (motion_event); // handles is_hint events
     * }
     * ```
     * 
     */
    static requestMotions(event: EventMotion): void
}
    type XEvent = void
}
export default Gdk;