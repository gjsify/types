
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
import type cairo from 'cairo';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';

export namespace Gdk {

    /**
     * Gdk-3.0
     */


    /**
     * @gir-type Enum
     */
    export namespace AxisUse {
        export const $gtype: GObject.GType<AxisUse>;
    }

    /**
     * An enumeration describing the way in which a device
     * axis (valuator) maps onto the predefined valuator
     * types that GTK+ understands.
     * 
     * Note that the X and Y axes are not really needed; pointer devices
     * report their location via the x/y members of events regardless. Whether
     * X and Y are present as axes depends on the GDK backend.
     * @gir-type Enum
     */
    enum AxisUse {
        /**
         * the axis is ignored.
         */
        IGNORE = 0,
        /**
         * the axis is used as the x axis.
         */
        X = 1,
        /**
         * the axis is used as the y axis.
         */
        Y = 2,
        /**
         * the axis is used for pressure information.
         */
        PRESSURE = 3,
        /**
         * the axis is used for x tilt information.
         */
        XTILT = 4,
        /**
         * the axis is used for y tilt information.
         */
        YTILT = 5,
        /**
         * the axis is used for wheel information.
         */
        WHEEL = 6,
        /**
         * the axis is used for pen/tablet distance information. (Since: 3.22)
         */
        DISTANCE = 7,
        /**
         * the axis is used for pen rotation information. (Since: 3.22)
         */
        ROTATION = 8,
        /**
         * the axis is used for pen slider information. (Since: 3.22)
         */
        SLIDER = 9,
        /**
         * a constant equal to the numerically highest axis value.
         */
        LAST = 10,
    }


    /**
     * @gir-type Enum
     */
    export namespace ByteOrder {
        export const $gtype: GObject.GType<ByteOrder>;
    }

    /**
     * A set of values describing the possible byte-orders
     * for storing pixel values in memory.
     * @gir-type Enum
     */
    enum ByteOrder {
        /**
         * The values are stored with the least-significant byte
         *   first. For instance, the 32-bit value 0xffeecc would be stored
         *   in memory as 0xcc, 0xee, 0xff, 0x00.
         */
        LSB_FIRST = 0,
        /**
         * The values are stored with the most-significant byte
         *   first. For instance, the 32-bit value 0xffeecc would be stored
         *   in memory as 0x00, 0xff, 0xee, 0xcc.
         */
        MSB_FIRST = 1,
    }


    /**
     * @gir-type Enum
     */
    export namespace CrossingMode {
        export const $gtype: GObject.GType<CrossingMode>;
    }

    /**
     * Specifies the crossing mode for {@link Gdk.EventCrossing}.
     * @gir-type Enum
     */
    enum CrossingMode {
        /**
         * crossing because of pointer motion.
         */
        NORMAL = 0,
        /**
         * crossing because a grab is activated.
         */
        GRAB = 1,
        /**
         * crossing because a grab is deactivated.
         */
        UNGRAB = 2,
        /**
         * crossing because a GTK+ grab is activated.
         */
        GTK_GRAB = 3,
        /**
         * crossing because a GTK+ grab is deactivated.
         */
        GTK_UNGRAB = 4,
        /**
         * crossing because a GTK+ widget changed
         *   state (e.g. sensitivity).
         */
        STATE_CHANGED = 5,
        /**
         * crossing because a touch sequence has begun,
         *   this event is synthetic as the pointer might have not left the window.
         */
        TOUCH_BEGIN = 6,
        /**
         * crossing because a touch sequence has ended,
         *   this event is synthetic as the pointer might have not left the window.
         */
        TOUCH_END = 7,
        /**
         * crossing because of a device switch (i.e.
         *   a mouse taking control of the pointer after a touch device), this event
         *   is synthetic as the pointer didn’t leave the window.
         */
        DEVICE_SWITCH = 8,
    }


    /**
     * @gir-type Enum
     */
    export namespace CursorType {
        export const $gtype: GObject.GType<CursorType>;
    }

    /**
     * Predefined cursors.
     * 
     * Note that these IDs are directly taken from the X cursor font, and many
     * of these cursors are either not useful, or are not available on other platforms.
     * 
     * The recommended way to create cursors is to use `gdk_cursor_new_from_name()`.
     * @gir-type Enum
     */
    enum CursorType {
        /**
         * ![](X_cursor.png)
         */
        X_CURSOR = 0,
        /**
         * ![](arrow.png)
         */
        ARROW = 2,
        /**
         * ![](based_arrow_down.png)
         */
        BASED_ARROW_DOWN = 4,
        /**
         * ![](based_arrow_up.png)
         */
        BASED_ARROW_UP = 6,
        /**
         * ![](boat.png)
         */
        BOAT = 8,
        /**
         * ![](bogosity.png)
         */
        BOGOSITY = 10,
        /**
         * ![](bottom_left_corner.png)
         */
        BOTTOM_LEFT_CORNER = 12,
        /**
         * ![](bottom_right_corner.png)
         */
        BOTTOM_RIGHT_CORNER = 14,
        /**
         * ![](bottom_side.png)
         */
        BOTTOM_SIDE = 16,
        /**
         * ![](bottom_tee.png)
         */
        BOTTOM_TEE = 18,
        /**
         * ![](box_spiral.png)
         */
        BOX_SPIRAL = 20,
        /**
         * ![](center_ptr.png)
         */
        CENTER_PTR = 22,
        /**
         * ![](circle.png)
         */
        CIRCLE = 24,
        /**
         * ![](clock.png)
         */
        CLOCK = 26,
        /**
         * ![](coffee_mug.png)
         */
        COFFEE_MUG = 28,
        /**
         * ![](cross.png)
         */
        CROSS = 30,
        /**
         * ![](cross_reverse.png)
         */
        CROSS_REVERSE = 32,
        /**
         * ![](crosshair.png)
         */
        CROSSHAIR = 34,
        /**
         * ![](diamond_cross.png)
         */
        DIAMOND_CROSS = 36,
        /**
         * ![](dot.png)
         */
        DOT = 38,
        /**
         * ![](dotbox.png)
         */
        DOTBOX = 40,
        /**
         * ![](double_arrow.png)
         */
        DOUBLE_ARROW = 42,
        /**
         * ![](draft_large.png)
         */
        DRAFT_LARGE = 44,
        /**
         * ![](draft_small.png)
         */
        DRAFT_SMALL = 46,
        /**
         * ![](draped_box.png)
         */
        DRAPED_BOX = 48,
        /**
         * ![](exchange.png)
         */
        EXCHANGE = 50,
        /**
         * ![](fleur.png)
         */
        FLEUR = 52,
        /**
         * ![](gobbler.png)
         */
        GOBBLER = 54,
        /**
         * ![](gumby.png)
         */
        GUMBY = 56,
        /**
         * ![](hand1.png)
         */
        HAND1 = 58,
        /**
         * ![](hand2.png)
         */
        HAND2 = 60,
        /**
         * ![](heart.png)
         */
        HEART = 62,
        /**
         * ![](icon.png)
         */
        ICON = 64,
        /**
         * ![](iron_cross.png)
         */
        IRON_CROSS = 66,
        /**
         * ![](left_ptr.png)
         */
        LEFT_PTR = 68,
        /**
         * ![](left_side.png)
         */
        LEFT_SIDE = 70,
        /**
         * ![](left_tee.png)
         */
        LEFT_TEE = 72,
        /**
         * ![](leftbutton.png)
         */
        LEFTBUTTON = 74,
        /**
         * ![](ll_angle.png)
         */
        LL_ANGLE = 76,
        /**
         * ![](lr_angle.png)
         */
        LR_ANGLE = 78,
        /**
         * ![](man.png)
         */
        MAN = 80,
        /**
         * ![](middlebutton.png)
         */
        MIDDLEBUTTON = 82,
        /**
         * ![](mouse.png)
         */
        MOUSE = 84,
        /**
         * ![](pencil.png)
         */
        PENCIL = 86,
        /**
         * ![](pirate.png)
         */
        PIRATE = 88,
        /**
         * ![](plus.png)
         */
        PLUS = 90,
        /**
         * ![](question_arrow.png)
         */
        QUESTION_ARROW = 92,
        /**
         * ![](right_ptr.png)
         */
        RIGHT_PTR = 94,
        /**
         * ![](right_side.png)
         */
        RIGHT_SIDE = 96,
        /**
         * ![](right_tee.png)
         */
        RIGHT_TEE = 98,
        /**
         * ![](rightbutton.png)
         */
        RIGHTBUTTON = 100,
        /**
         * ![](rtl_logo.png)
         */
        RTL_LOGO = 102,
        /**
         * ![](sailboat.png)
         */
        SAILBOAT = 104,
        /**
         * ![](sb_down_arrow.png)
         */
        SB_DOWN_ARROW = 106,
        /**
         * ![](sb_h_double_arrow.png)
         */
        SB_H_DOUBLE_ARROW = 108,
        /**
         * ![](sb_left_arrow.png)
         */
        SB_LEFT_ARROW = 110,
        /**
         * ![](sb_right_arrow.png)
         */
        SB_RIGHT_ARROW = 112,
        /**
         * ![](sb_up_arrow.png)
         */
        SB_UP_ARROW = 114,
        /**
         * ![](sb_v_double_arrow.png)
         */
        SB_V_DOUBLE_ARROW = 116,
        /**
         * ![](shuttle.png)
         */
        SHUTTLE = 118,
        /**
         * ![](sizing.png)
         */
        SIZING = 120,
        /**
         * ![](spider.png)
         */
        SPIDER = 122,
        /**
         * ![](spraycan.png)
         */
        SPRAYCAN = 124,
        /**
         * ![](star.png)
         */
        STAR = 126,
        /**
         * ![](target.png)
         */
        TARGET = 128,
        /**
         * ![](tcross.png)
         */
        TCROSS = 130,
        /**
         * ![](top_left_arrow.png)
         */
        TOP_LEFT_ARROW = 132,
        /**
         * ![](top_left_corner.png)
         */
        TOP_LEFT_CORNER = 134,
        /**
         * ![](top_right_corner.png)
         */
        TOP_RIGHT_CORNER = 136,
        /**
         * ![](top_side.png)
         */
        TOP_SIDE = 138,
        /**
         * ![](top_tee.png)
         */
        TOP_TEE = 140,
        /**
         * ![](trek.png)
         */
        TREK = 142,
        /**
         * ![](ul_angle.png)
         */
        UL_ANGLE = 144,
        /**
         * ![](umbrella.png)
         */
        UMBRELLA = 146,
        /**
         * ![](ur_angle.png)
         */
        UR_ANGLE = 148,
        /**
         * ![](watch.png)
         */
        WATCH = 150,
        /**
         * ![](xterm.png)
         */
        XTERM = 152,
        /**
         * last cursor type
         */
        LAST_CURSOR = 153,
        /**
         * Blank cursor. Since 2.16
         */
        BLANK_CURSOR = -2,
        /**
         * type of cursors constructed with
         *   `gdk_cursor_new_from_pixbuf()`
         */
        CURSOR_IS_PIXMAP = -1,
    }


    /**
     * @gir-type Enum
     */
    export namespace DevicePadFeature {
        export const $gtype: GObject.GType<DevicePadFeature>;
    }

    /**
     * A pad feature.
     * @gir-type Enum
     */
    enum DevicePadFeature {
        /**
         * a button
         */
        BUTTON = 0,
        /**
         * a ring-shaped interactive area
         */
        RING = 1,
        /**
         * a straight interactive area
         */
        STRIP = 2,
    }


    /**
     * @gir-type Enum
     */
    export namespace DeviceToolType {
        export const $gtype: GObject.GType<DeviceToolType>;
    }

    /**
     * Indicates the specific type of tool being used being a tablet. Such as an
     * airbrush, pencil, etc.
     * @gir-type Enum
     * @since 3.22
     */
    enum DeviceToolType {
        /**
         * Tool is of an unknown type.
         */
        UNKNOWN = 0,
        /**
         * Tool is a standard tablet stylus.
         */
        PEN = 1,
        /**
         * Tool is standard tablet eraser.
         */
        ERASER = 2,
        /**
         * Tool is a brush stylus.
         */
        BRUSH = 3,
        /**
         * Tool is a pencil stylus.
         */
        PENCIL = 4,
        /**
         * Tool is an airbrush stylus.
         */
        AIRBRUSH = 5,
        /**
         * Tool is a mouse.
         */
        MOUSE = 6,
        /**
         * Tool is a lens cursor.
         */
        LENS = 7,
    }


    /**
     * @gir-type Enum
     */
    export namespace DeviceType {
        export const $gtype: GObject.GType<DeviceType>;
    }

    /**
     * Indicates the device type. See [above][GdkDeviceManager.description]
     * for more information about the meaning of these device types.
     * @gir-type Enum
     */
    enum DeviceType {
        /**
         * Device is a master (or virtual) device. There will
         *                          be an associated focus indicator on the screen.
         */
        MASTER = 0,
        /**
         * Device is a slave (or physical) device.
         */
        SLAVE = 1,
        /**
         * Device is a physical device, currently not attached to
         *                            any virtual device.
         */
        FLOATING = 2,
    }


    /**
     * @gir-type Enum
     */
    export namespace DragCancelReason {
        export const $gtype: GObject.GType<DragCancelReason>;
    }

    /**
     * Used in {@link Gdk.DragContext} to the reason of a cancelled DND operation.
     * @gir-type Enum
     * @since 3.20
     */
    enum DragCancelReason {
        /**
         * There is no suitable drop target.
         */
        NO_TARGET = 0,
        /**
         * Drag cancelled by the user
         */
        USER_CANCELLED = 1,
        /**
         * Unspecified error.
         */
        ERROR = 2,
    }


    /**
     * @gir-type Enum
     */
    export namespace DragProtocol {
        export const $gtype: GObject.GType<DragProtocol>;
    }

    /**
     * Used in {@link Gdk.DragContext} to indicate the protocol according to
     * which DND is done.
     * @gir-type Enum
     */
    enum DragProtocol {
        /**
         * no protocol.
         */
        NONE = 0,
        /**
         * The Motif DND protocol. No longer supported
         */
        MOTIF = 1,
        /**
         * The Xdnd protocol.
         */
        XDND = 2,
        /**
         * An extension to the Xdnd protocol for
         *  unclaimed root window drops.
         */
        ROOTWIN = 3,
        /**
         * The simple WM_DROPFILES protocol.
         */
        WIN32_DROPFILES = 4,
        /**
         * The complex OLE2 DND protocol (not implemented).
         */
        OLE2 = 5,
        /**
         * Intra-application DND.
         */
        LOCAL = 6,
        /**
         * Wayland DND protocol.
         */
        WAYLAND = 7,
    }


    /**
     * @gir-type Enum
     */
    export namespace EventType {
        export const $gtype: GObject.GType<EventType>;
    }

    /**
     * Specifies the type of the event.
     * 
     * Do not confuse these events with the signals that GTK+ widgets emit.
     * Although many of these events result in corresponding signals being emitted,
     * the events are often transformed or filtered along the way.
     * 
     * In some language bindings, the values {@link Gdk.EventType.2BUTTON_PRESS} and
     * {@link Gdk.EventType.3BUTTON_PRESS} would translate into something syntactically
     * invalid (eg `Gdk.EventType.2ButtonPress`, where a
     * symbol is not allowed to start with a number). In that case, the
     * aliases {@link Gdk.EventType.DOUBLE_BUTTON_PRESS} and {@link Gdk.EventType.TRIPLE_BUTTON_PRESS} can
     * be used instead.
     * @gir-type Enum
     */
    enum EventType {
        /**
         * a special code to indicate a null event.
         */
        NOTHING = -1,
        /**
         * the window manager has requested that the toplevel window be
         *   hidden or destroyed, usually when the user clicks on a special icon in the
         *   title bar.
         */
        DELETE = 0,
        /**
         * the window has been destroyed.
         */
        DESTROY = 1,
        /**
         * all or part of the window has become visible and needs to be
         *   redrawn.
         */
        EXPOSE = 2,
        /**
         * the pointer (usually a mouse) has moved.
         */
        MOTION_NOTIFY = 3,
        /**
         * a mouse button has been pressed.
         */
        BUTTON_PRESS = 4,
        /**
         * a mouse button has been double-clicked (clicked twice
         *   within a short period of time). Note that each click also generates a
         *   {@link Gdk.EventType.BUTTON_PRESS} event.
         */
        "2BUTTON_PRESS" = 5,
        /**
         * alias for {@link Gdk.EventType.2BUTTON_PRESS}, added in 3.6.
         */
        DOUBLE_BUTTON_PRESS = 5,
        /**
         * a mouse button has been clicked 3 times in a short period
         *   of time. Note that each click also generates a {@link Gdk.EventType.BUTTON_PRESS} event.
         */
        "3BUTTON_PRESS" = 6,
        /**
         * alias for {@link Gdk.EventType.3BUTTON_PRESS}, added in 3.6.
         */
        TRIPLE_BUTTON_PRESS = 6,
        /**
         * a mouse button has been released.
         */
        BUTTON_RELEASE = 7,
        /**
         * a key has been pressed.
         */
        KEY_PRESS = 8,
        /**
         * a key has been released.
         */
        KEY_RELEASE = 9,
        /**
         * the pointer has entered the window.
         */
        ENTER_NOTIFY = 10,
        /**
         * the pointer has left the window.
         */
        LEAVE_NOTIFY = 11,
        /**
         * the keyboard focus has entered or left the window.
         */
        FOCUS_CHANGE = 12,
        /**
         * the size, position or stacking order of the window has changed.
         *   Note that GTK+ discards these events for {@link Gdk.WindowType.CHILD} windows.
         */
        CONFIGURE = 13,
        /**
         * the window has been mapped.
         */
        MAP = 14,
        /**
         * the window has been unmapped.
         */
        UNMAP = 15,
        /**
         * a property on the window has been changed or deleted.
         */
        PROPERTY_NOTIFY = 16,
        /**
         * the application has lost ownership of a selection.
         */
        SELECTION_CLEAR = 17,
        /**
         * another application has requested a selection.
         */
        SELECTION_REQUEST = 18,
        /**
         * a selection has been received.
         */
        SELECTION_NOTIFY = 19,
        /**
         * an input device has moved into contact with a sensing
         *   surface (e.g. a touchscreen or graphics tablet).
         */
        PROXIMITY_IN = 20,
        /**
         * an input device has moved out of contact with a sensing
         *   surface.
         */
        PROXIMITY_OUT = 21,
        /**
         * the mouse has entered the window while a drag is in progress.
         */
        DRAG_ENTER = 22,
        /**
         * the mouse has left the window while a drag is in progress.
         */
        DRAG_LEAVE = 23,
        /**
         * the mouse has moved in the window while a drag is in
         *   progress.
         */
        DRAG_MOTION = 24,
        /**
         * the status of the drag operation initiated by the window
         *   has changed.
         */
        DRAG_STATUS = 25,
        /**
         * a drop operation onto the window has started.
         */
        DROP_START = 26,
        /**
         * the drop operation initiated by the window has completed.
         */
        DROP_FINISHED = 27,
        /**
         * a message has been received from another application.
         */
        CLIENT_EVENT = 28,
        /**
         * the window visibility status has changed.
         */
        VISIBILITY_NOTIFY = 29,
        /**
         * the scroll wheel was turned
         */
        SCROLL = 31,
        /**
         * the state of a window has changed. See {@link Gdk.WindowState}
         *   for the possible window states
         */
        WINDOW_STATE = 32,
        /**
         * a setting has been modified.
         */
        SETTING = 33,
        /**
         * the owner of a selection has changed. This event type
         *   was added in 2.6
         */
        OWNER_CHANGE = 34,
        /**
         * a pointer or keyboard grab was broken. This event type
         *   was added in 2.8.
         */
        GRAB_BROKEN = 35,
        /**
         * the content of the window has been changed. This event type
         *   was added in 2.14.
         */
        DAMAGE = 36,
        /**
         * A new touch event sequence has just started. This event
         *   type was added in 3.4.
         */
        TOUCH_BEGIN = 37,
        /**
         * A touch event sequence has been updated. This event type
         *   was added in 3.4.
         */
        TOUCH_UPDATE = 38,
        /**
         * A touch event sequence has finished. This event type
         *   was added in 3.4.
         */
        TOUCH_END = 39,
        /**
         * A touch event sequence has been canceled. This event type
         *   was added in 3.4.
         */
        TOUCH_CANCEL = 40,
        /**
         * A touchpad swipe gesture event, the current state
         *   is determined by its phase field. This event type was added in 3.18.
         */
        TOUCHPAD_SWIPE = 41,
        /**
         * A touchpad pinch gesture event, the current state
         *   is determined by its phase field. This event type was added in 3.18.
         */
        TOUCHPAD_PINCH = 42,
        /**
         * A tablet pad button press event. This event type
         *   was added in 3.22.
         */
        PAD_BUTTON_PRESS = 43,
        /**
         * A tablet pad button release event. This event type
         *   was added in 3.22.
         */
        PAD_BUTTON_RELEASE = 44,
        /**
         * A tablet pad axis event from a "ring". This event type was
         *   added in 3.22.
         */
        PAD_RING = 45,
        /**
         * A tablet pad axis event from a "strip". This event type was
         *   added in 3.22.
         */
        PAD_STRIP = 46,
        /**
         * A tablet pad group mode change. This event type was
         *   added in 3.22.
         */
        PAD_GROUP_MODE = 47,
        /**
         * marks the end of the GdkEventType enumeration. Added in 2.18
         */
        EVENT_LAST = 48,
    }


    /**
     * @gir-type Enum
     */
    export namespace FilterReturn {
        export const $gtype: GObject.GType<FilterReturn>;
    }

    /**
     * Specifies the result of applying a {@link Gdk.FilterFunc} to a native event.
     * @gir-type Enum
     */
    enum FilterReturn {
        /**
         * event not handled, continue processing.
         */
        CONTINUE = 0,
        /**
         * native event translated into a GDK event and stored
         *  in the `event` structure that was passed in.
         */
        TRANSLATE = 1,
        /**
         * event handled, terminate processing.
         */
        REMOVE = 2,
    }


    /**
     * @gir-type Enum
     */
    export namespace FullscreenMode {
        export const $gtype: GObject.GType<FullscreenMode>;
    }

    /**
     * Indicates which monitor (in a multi-head setup) a window should span over
     * when in fullscreen mode.
     * @gir-type Enum
     * @since 3.8
     */
    enum FullscreenMode {
        /**
         * Fullscreen on current monitor only.
         */
        CURRENT_MONITOR = 0,
        /**
         * Span across all monitors when fullscreen.
         */
        ALL_MONITORS = 1,
    }


    /**
     * Error enumeration for {@link Gdk.GLContext}.
     * @gir-type Struct
     */
    class GLError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields
        /**
         * OpenGL support is not available
         */
        static NOT_AVAILABLE: number;

        /**
         * The requested visual format is not supported
         */
        static UNSUPPORTED_FORMAT: number;

        /**
         * The requested profile is not supported
         */
        static UNSUPPORTED_PROFILE: number;

        // Constructors
        constructor(options: { message: string; code: number });

        // Static methods
        static quark(): GLib.Quark;
    }


    /**
     * @gir-type Enum
     */
    export namespace GrabOwnership {
        export const $gtype: GObject.GType<GrabOwnership>;
    }

    /**
     * Defines how device grabs interact with other devices.
     * @gir-type Enum
     */
    enum GrabOwnership {
        /**
         * All other devices’ events are allowed.
         */
        NONE = 0,
        /**
         * Other devices’ events are blocked for the grab window.
         */
        WINDOW = 1,
        /**
         * Other devices’ events are blocked for the whole application.
         */
        APPLICATION = 2,
    }


    /**
     * @gir-type Enum
     */
    export namespace GrabStatus {
        export const $gtype: GObject.GType<GrabStatus>;
    }

    /**
     * Returned by `gdk_device_grab()`, `gdk_pointer_grab()` and `gdk_keyboard_grab()` to
     * indicate success or the reason for the failure of the grab attempt.
     * @gir-type Enum
     */
    enum GrabStatus {
        /**
         * the resource was successfully grabbed.
         */
        SUCCESS = 0,
        /**
         * the resource is actively grabbed by another client.
         */
        ALREADY_GRABBED = 1,
        /**
         * the resource was grabbed more recently than the
         *  specified time.
         */
        INVALID_TIME = 2,
        /**
         * the grab window or the `confine_to` window are not
         *  viewable.
         */
        NOT_VIEWABLE = 3,
        /**
         * the resource is frozen by an active grab of another client.
         */
        FROZEN = 4,
        /**
         * the grab failed for some other reason. Since 3.16
         */
        FAILED = 5,
    }


    /**
     * @gir-type Enum
     */
    export namespace Gravity {
        export const $gtype: GObject.GType<Gravity>;
    }

    /**
     * Defines the reference point of a window and the meaning of coordinates
     * passed to `gtk_window_move()`. See `gtk_window_move()` and the "implementation
     * notes" section of the
     * [Extended Window Manager Hints](https://specifications.freedesktop.org/wm/latest/)
     * specification for more details.
     * @gir-type Enum
     */
    enum Gravity {
        /**
         * the reference point is at the top left corner.
         */
        NORTH_WEST = 1,
        /**
         * the reference point is in the middle of the top edge.
         */
        NORTH = 2,
        /**
         * the reference point is at the top right corner.
         */
        NORTH_EAST = 3,
        /**
         * the reference point is at the middle of the left edge.
         */
        WEST = 4,
        /**
         * the reference point is at the center of the window.
         */
        CENTER = 5,
        /**
         * the reference point is at the middle of the right edge.
         */
        EAST = 6,
        /**
         * the reference point is at the lower left corner.
         */
        SOUTH_WEST = 7,
        /**
         * the reference point is at the middle of the lower edge.
         */
        SOUTH = 8,
        /**
         * the reference point is at the lower right corner.
         */
        SOUTH_EAST = 9,
        /**
         * the reference point is at the top left corner of the
         *  window itself, ignoring window manager decorations.
         */
        STATIC = 10,
    }


    /**
     * @gir-type Enum
     */
    export namespace InputMode {
        export const $gtype: GObject.GType<InputMode>;
    }

    /**
     * An enumeration that describes the mode of an input device.
     * @gir-type Enum
     */
    enum InputMode {
        /**
         * the device is disabled and will not report any events.
         */
        DISABLED = 0,
        /**
         * the device is enabled. The device’s coordinate space
         *                   maps to the entire screen.
         */
        SCREEN = 1,
        /**
         * the device is enabled. The device’s coordinate space
         *                   is mapped to a single window. The manner in which this window
         *                   is chosen is undefined, but it will typically be the same
         *                   way in which the focus window for key events is determined.
         */
        WINDOW = 2,
    }


    /**
     * @gir-type Enum
     */
    export namespace InputSource {
        export const $gtype: GObject.GType<InputSource>;
    }

    /**
     * An enumeration describing the type of an input device in general terms.
     * @gir-type Enum
     */
    enum InputSource {
        /**
         * the device is a mouse. (This will be reported for the core
         *                    pointer, even if it is something else, such as a trackball.)
         */
        MOUSE = 0,
        /**
         * the device is a stylus of a graphics tablet or similar device.
         */
        PEN = 1,
        /**
         * the device is an eraser. Typically, this would be the other end
         *                     of a stylus on a graphics tablet.
         */
        ERASER = 2,
        /**
         * the device is a graphics tablet “puck” or similar device.
         */
        CURSOR = 3,
        /**
         * the device is a keyboard.
         */
        KEYBOARD = 4,
        /**
         * the device is a direct-input touch device, such
         *     as a touchscreen or tablet. This device type has been added in 3.4.
         */
        TOUCHSCREEN = 5,
        /**
         * the device is an indirect touch device, such
         *     as a touchpad. This device type has been added in 3.4.
         */
        TOUCHPAD = 6,
        /**
         * the device is a trackpoint. This device type has been
         *     added in 3.22
         */
        TRACKPOINT = 7,
        /**
         * the device is a "pad", a collection of buttons,
         *     rings and strips found in drawing tablets. This device type has been
         *     added in 3.22.
         */
        TABLET_PAD = 8,
    }


    /**
     * @gir-type Enum
     */
    export namespace ModifierIntent {
        export const $gtype: GObject.GType<ModifierIntent>;
    }

    /**
     * This enum is used with `gdk_keymap_get_modifier_mask()`
     * in order to determine what modifiers the
     * currently used windowing system backend uses for particular
     * purposes. For example, on X11/Windows, the Control key is used for
     * invoking menu shortcuts (accelerators), whereas on Apple computers
     * it’s the Command key (which correspond to {@link Gdk.ModifierType.CONTROL_MASK} and
     * {@link Gdk.ModifierType.MOD2_MASK}, respectively).
     * @gir-type Enum
     * @since 3.4
     */
    enum ModifierIntent {
        /**
         * the primary modifier used to invoke
         *  menu accelerators.
         */
        PRIMARY_ACCELERATOR = 0,
        /**
         * the modifier used to invoke context menus.
         *  Note that mouse button 3 always triggers context menus. When this modifier
         *  is not 0, it additionally triggers context menus when used with mouse button 1.
         */
        CONTEXT_MENU = 1,
        /**
         * the modifier used to extend selections
         *  using `modifier`-click or `modifier`-cursor-key
         */
        EXTEND_SELECTION = 2,
        /**
         * the modifier used to modify selections,
         *  which in most cases means toggling the clicked item into or out of the selection.
         */
        MODIFY_SELECTION = 3,
        /**
         * when any of these modifiers is pressed, the
         *  key event cannot produce a symbol directly. This is meant to be used for
         *  input methods, and for use cases like typeahead search.
         */
        NO_TEXT_INPUT = 4,
        /**
         * the modifier that switches between keyboard
         *  groups (AltGr on X11/Windows and Option/Alt on OS X).
         */
        SHIFT_GROUP = 5,
        /**
         * The set of modifier masks accepted
         * as modifiers in accelerators. Needed because Command is mapped to MOD2 on
         * OSX, which is widely used, but on X11 MOD2 is NumLock and using that for a
         * mod key is problematic at best.
         * Ref: https://bugzilla.gnome.org/show_bug.cgi?id=736125.
         */
        DEFAULT_MOD_MASK = 6,
    }


    /**
     * @gir-type Enum
     */
    export namespace NotifyType {
        export const $gtype: GObject.GType<NotifyType>;
    }

    /**
     * Specifies the kind of crossing for {@link Gdk.EventCrossing}.
     * 
     * See the X11 protocol specification of LeaveNotify for
     * full details of crossing event generation.
     * @gir-type Enum
     */
    enum NotifyType {
        /**
         * the window is entered from an ancestor or
         *   left towards an ancestor.
         */
        ANCESTOR = 0,
        /**
         * the pointer moves between an ancestor and an
         *   inferior of the window.
         */
        VIRTUAL = 1,
        /**
         * the window is entered from an inferior or
         *   left towards an inferior.
         */
        INFERIOR = 2,
        /**
         * the window is entered from or left towards
         *   a window which is neither an ancestor nor an inferior.
         */
        NONLINEAR = 3,
        /**
         * the pointer moves between two windows
         *   which are not ancestors of each other and the window is part of
         *   the ancestor chain between one of these windows and their least
         *   common ancestor.
         */
        NONLINEAR_VIRTUAL = 4,
        /**
         * an unknown type of enter/leave event occurred.
         */
        UNKNOWN = 5,
    }


    /**
     * @gir-type Enum
     */
    export namespace OwnerChange {
        export const $gtype: GObject.GType<OwnerChange>;
    }

    /**
     * Specifies why a selection ownership was changed.
     * @gir-type Enum
     */
    enum OwnerChange {
        /**
         * some other app claimed the ownership
         */
        NEW_OWNER = 0,
        /**
         * the window was destroyed
         */
        DESTROY = 1,
        /**
         * the client was closed
         */
        CLOSE = 2,
    }


    /**
     * @gir-type Enum
     */
    export namespace PropMode {
        export const $gtype: GObject.GType<PropMode>;
    }

    /**
     * Describes how existing data is combined with new data when
     * using `gdk_property_change()`.
     * @gir-type Enum
     */
    enum PropMode {
        /**
         * the new data replaces the existing data.
         */
        REPLACE = 0,
        /**
         * the new data is prepended to the existing data.
         */
        PREPEND = 1,
        /**
         * the new data is appended to the existing data.
         */
        APPEND = 2,
    }


    /**
     * @gir-type Enum
     */
    export namespace PropertyState {
        export const $gtype: GObject.GType<PropertyState>;
    }

    /**
     * Specifies the type of a property change for a {@link Gdk.EventProperty}.
     * @gir-type Enum
     */
    enum PropertyState {
        /**
         * the property value was changed.
         */
        NEW_VALUE = 0,
        /**
         * the property was deleted.
         */
        DELETE = 1,
    }


    /**
     * @gir-type Enum
     */
    export namespace ScrollDirection {
        export const $gtype: GObject.GType<ScrollDirection>;
    }

    /**
     * Specifies the direction for {@link Gdk.EventScroll}.
     * @gir-type Enum
     */
    enum ScrollDirection {
        /**
         * the window is scrolled up.
         */
        UP = 0,
        /**
         * the window is scrolled down.
         */
        DOWN = 1,
        /**
         * the window is scrolled to the left.
         */
        LEFT = 2,
        /**
         * the window is scrolled to the right.
         */
        RIGHT = 3,
        /**
         * the scrolling is determined by the delta values
         *   in {@link Gdk.EventScroll}. See `gdk_event_get_scroll_deltas()`. Since: 3.4
         */
        SMOOTH = 4,
    }


    /**
     * @gir-type Enum
     */
    export namespace SettingAction {
        export const $gtype: GObject.GType<SettingAction>;
    }

    /**
     * Specifies the kind of modification applied to a setting in a
     * {@link Gdk.EventSetting}.
     * @gir-type Enum
     */
    enum SettingAction {
        /**
         * a setting was added.
         */
        NEW = 0,
        /**
         * a setting was changed.
         */
        CHANGED = 1,
        /**
         * a setting was deleted.
         */
        DELETED = 2,
    }


    /**
     * @gir-type Enum
     */
    export namespace Status {
        export const $gtype: GObject.GType<Status>;
    }

    /**
     * @gir-type Enum
     */
    enum Status {
        OK = 0,
        ERROR = -1,
        ERROR_PARAM = -2,
        ERROR_FILE = -3,
        ERROR_MEM = -4,
    }


    /**
     * @gir-type Enum
     */
    export namespace SubpixelLayout {
        export const $gtype: GObject.GType<SubpixelLayout>;
    }

    /**
     * This enumeration describes how the red, green and blue components
     * of physical pixels on an output device are laid out.
     * @gir-type Enum
     * @since 3.22
     */
    enum SubpixelLayout {
        /**
         * The layout is not known
         */
        UNKNOWN = 0,
        /**
         * Not organized in this way
         */
        NONE = 1,
        /**
         * The layout is horizontal, the order is RGB
         */
        HORIZONTAL_RGB = 2,
        /**
         * The layout is horizontal, the order is BGR
         */
        HORIZONTAL_BGR = 3,
        /**
         * The layout is vertical, the order is RGB
         */
        VERTICAL_RGB = 4,
        /**
         * The layout is vertical, the order is BGR
         */
        VERTICAL_BGR = 5,
    }


    /**
     * @gir-type Enum
     */
    export namespace TouchpadGesturePhase {
        export const $gtype: GObject.GType<TouchpadGesturePhase>;
    }

    /**
     * Specifies the current state of a touchpad gesture. All gestures are
     * guaranteed to begin with an event with phase {@link Gdk.TouchpadGesturePhase.BEGIN},
     * followed by 0 or several events with phase {@link Gdk.TouchpadGesturePhase.UPDATE}.
     * 
     * A finished gesture may have 2 possible outcomes, an event with phase
     * {@link Gdk.TouchpadGesturePhase.END} will be emitted when the gesture is
     * considered successful, this should be used as the hint to perform any
     * permanent changes.
     * 
     * Cancelled gestures may be so for a variety of reasons, due to hardware
     * or the compositor, or due to the gesture recognition layers hinting the
     * gesture did not finish resolutely (eg. a 3rd finger being added during
     * a pinch gesture). In these cases, the last event will report the phase
     * {@link Gdk.TouchpadGesturePhase.CANCEL}, this should be used as a hint
     * to undo any visible/permanent changes that were done throughout the
     * progress of the gesture.
     * 
     * See also {@link Gdk.EventTouchpadSwipe} and {@link Gdk.EventTouchpadPinch}.
     * @gir-type Enum
     */
    enum TouchpadGesturePhase {
        /**
         * The gesture has begun.
         */
        BEGIN = 0,
        /**
         * The gesture has been updated.
         */
        UPDATE = 1,
        /**
         * The gesture was finished, changes
         *   should be permanently applied.
         */
        END = 2,
        /**
         * The gesture was cancelled, all
         *   changes should be undone.
         */
        CANCEL = 3,
    }


    /**
     * @gir-type Enum
     */
    export namespace VisibilityState {
        export const $gtype: GObject.GType<VisibilityState>;
    }

    /**
     * Specifies the visiblity status of a window for a {@link Gdk.EventVisibility}.
     * @gir-type Enum
     */
    enum VisibilityState {
        /**
         * the window is completely visible.
         */
        UNOBSCURED = 0,
        /**
         * the window is partially visible.
         */
        PARTIAL = 1,
        /**
         * the window is not visible at all.
         */
        FULLY_OBSCURED = 2,
    }


    /**
     * @gir-type Enum
     */
    export namespace VisualType {
        export const $gtype: GObject.GType<VisualType>;
    }

    /**
     * A set of values that describe the manner in which the pixel values
     * for a visual are converted into RGB values for display.
     * @gir-type Enum
     */
    enum VisualType {
        /**
         * Each pixel value indexes a grayscale value
         *     directly.
         */
        STATIC_GRAY = 0,
        /**
         * Each pixel is an index into a color map that
         *     maps pixel values into grayscale values. The color map can be
         *     changed by an application.
         */
        GRAYSCALE = 1,
        /**
         * Each pixel value is an index into a predefined,
         *     unmodifiable color map that maps pixel values into RGB values.
         */
        STATIC_COLOR = 2,
        /**
         * Each pixel is an index into a color map that
         *     maps pixel values into rgb values. The color map can be changed by
         *     an application.
         */
        PSEUDO_COLOR = 3,
        /**
         * Each pixel value directly contains red, green,
         *     and blue components. Use `gdk_visual_get_red_pixel_details()`, etc,
         *     to obtain information about how the components are assembled into
         *     a pixel value.
         */
        TRUE_COLOR = 4,
        /**
         * Each pixel value contains red, green, and blue
         *     components as for {@link Gdk.VisualType.TRUE_COLOR}, but the components are
         *     mapped via a color table into the final output table instead of
         *     being converted directly.
         */
        DIRECT_COLOR = 5,
    }


    /**
     * @gir-type Enum
     */
    export namespace WindowEdge {
        export const $gtype: GObject.GType<WindowEdge>;
    }

    /**
     * Determines a window edge or corner.
     * @gir-type Enum
     */
    enum WindowEdge {
        /**
         * the top left corner.
         */
        NORTH_WEST = 0,
        /**
         * the top edge.
         */
        NORTH = 1,
        /**
         * the top right corner.
         */
        NORTH_EAST = 2,
        /**
         * the left edge.
         */
        WEST = 3,
        /**
         * the right edge.
         */
        EAST = 4,
        /**
         * the lower left corner.
         */
        SOUTH_WEST = 5,
        /**
         * the lower edge.
         */
        SOUTH = 6,
        /**
         * the lower right corner.
         */
        SOUTH_EAST = 7,
    }


    /**
     * @gir-type Enum
     */
    export namespace WindowType {
        export const $gtype: GObject.GType<WindowType>;
    }

    /**
     * Describes the kind of window.
     * @gir-type Enum
     */
    enum WindowType {
        /**
         * root window; this window has no parent, covers the entire
         *  screen, and is created by the window system
         */
        ROOT = 0,
        /**
         * toplevel window (used to implement `GtkWindow`)
         */
        TOPLEVEL = 1,
        /**
         * child window (used to implement e.g. `GtkEntry`)
         */
        CHILD = 2,
        /**
         * override redirect temporary window (used to implement
         *  `GtkMenu`)
         */
        TEMP = 3,
        /**
         * foreign window (see `gdk_window_foreign_new()`)
         */
        FOREIGN = 4,
        /**
         * offscreen window (see
         *  [Offscreen Windows][OFFSCREEN-WINDOWS]). Since 2.18
         */
        OFFSCREEN = 5,
        /**
         * subsurface-based window; This window is visually
         *  tied to a toplevel, and is moved/stacked with it. Currently this window
         *  type is only implemented in Wayland. Since 3.14
         */
        SUBSURFACE = 6,
    }


    /**
     * @gir-type Enum
     */
    export namespace WindowTypeHint {
        export const $gtype: GObject.GType<WindowTypeHint>;
    }

    /**
     * These are hints for the window manager that indicate what type of function
     * the window has. The window manager can use this when determining decoration
     * and behaviour of the window. The hint must be set before mapping the window.
     * 
     * See the [Extended Window Manager Hints](https://specifications.freedesktop.org/wm/latest/)
     * specification for more details about window types.
     * @gir-type Enum
     */
    enum WindowTypeHint {
        /**
         * Normal toplevel window.
         */
        NORMAL = 0,
        /**
         * Dialog window.
         */
        DIALOG = 1,
        /**
         * Window used to implement a menu; GTK+ uses
         *  this hint only for torn-off menus, see `GtkTearoffMenuItem`.
         */
        MENU = 2,
        /**
         * Window used to implement toolbars.
         */
        TOOLBAR = 3,
        /**
         * Window used to display a splash
         *  screen during application startup.
         */
        SPLASHSCREEN = 4,
        /**
         * Utility windows which are not detached
         *  toolbars or dialogs.
         */
        UTILITY = 5,
        /**
         * Used for creating dock or panel windows.
         */
        DOCK = 6,
        /**
         * Used for creating the desktop background
         *  window.
         */
        DESKTOP = 7,
        /**
         * A menu that belongs to a menubar.
         */
        DROPDOWN_MENU = 8,
        /**
         * A menu that does not belong to a menubar,
         *  e.g. a context menu.
         */
        POPUP_MENU = 9,
        /**
         * A tooltip.
         */
        TOOLTIP = 10,
        /**
         * A notification - typically a “bubble”
         *  that belongs to a status icon.
         */
        NOTIFICATION = 11,
        /**
         * A popup from a combo box.
         */
        COMBO = 12,
        /**
         * A window that is used to implement a DND cursor.
         */
        DND = 13,
    }


    /**
     * @gir-type Enum
     */
    export namespace WindowWindowClass {
        export const $gtype: GObject.GType<WindowWindowClass>;
    }

    /**
     * `GDK_INPUT_OUTPUT` windows are the standard kind of window you might expect.
     * Such windows receive events and are also displayed on screen.
     * `GDK_INPUT_ONLY` windows are invisible; they are usually placed above other
     * windows in order to trap or filter the events. You can’t draw on
     * `GDK_INPUT_ONLY` windows.
     * @gir-type Enum
     */
    enum WindowWindowClass {
        /**
         * window for graphics and events
         */
        INPUT_OUTPUT = 0,
        /**
         * window for events only
         */
        INPUT_ONLY = 1,
    }


    /**
     * The middle button.
     * @since 3.4
     * @default 2
     */
    const BUTTON_MIDDLE: number;

    /**
     * The primary button. This is typically the left mouse button, or the
     * right button in a left-handed setup.
     * @since 3.4
     * @default 1
     */
    const BUTTON_PRIMARY: number;

    /**
     * The secondary button. This is typically the right mouse button, or the
     * left button in a left-handed setup.
     * @since 3.4
     * @default 3
     */
    const BUTTON_SECONDARY: number;

    /**
     * Represents the current time, and can be used anywhere a time is expected.
     * @default 0
     */
    const CURRENT_TIME: number;

    /**
     * Use this macro as the return value for continuing the propagation of
     * an event handler.
     * @since 3.4
     * @default false
     */
    const EVENT_PROPAGATE: boolean;

    /**
     * Use this macro as the return value for stopping the propagation of
     * an event handler.
     * @since 3.4
     * @default true
     */
    const EVENT_STOP: boolean;

    /**
     * @default 48
     */
    const KEY_0: number;

    /**
     * @default 49
     */
    const KEY_1: number;

    /**
     * @default 50
     */
    const KEY_2: number;

    /**
     * @default 51
     */
    const KEY_3: number;

    /**
     * @default 64784
     */
    const KEY_3270_AltCursor: number;

    /**
     * @default 64782
     */
    const KEY_3270_Attn: number;

    /**
     * @default 64773
     */
    const KEY_3270_BackTab: number;

    /**
     * @default 64793
     */
    const KEY_3270_ChangeScreen: number;

    /**
     * @default 64789
     */
    const KEY_3270_Copy: number;

    /**
     * @default 64783
     */
    const KEY_3270_CursorBlink: number;

    /**
     * @default 64796
     */
    const KEY_3270_CursorSelect: number;

    /**
     * @default 64794
     */
    const KEY_3270_DeleteWord: number;

    /**
     * @default 64769
     */
    const KEY_3270_Duplicate: number;

    /**
     * @default 64798
     */
    const KEY_3270_Enter: number;

    /**
     * @default 64774
     */
    const KEY_3270_EraseEOF: number;

    /**
     * @default 64775
     */
    const KEY_3270_EraseInput: number;

    /**
     * @default 64795
     */
    const KEY_3270_ExSelect: number;

    /**
     * @default 64770
     */
    const KEY_3270_FieldMark: number;

    /**
     * @default 64787
     */
    const KEY_3270_Ident: number;

    /**
     * @default 64786
     */
    const KEY_3270_Jump: number;

    /**
     * @default 64785
     */
    const KEY_3270_KeyClick: number;

    /**
     * @default 64772
     */
    const KEY_3270_Left2: number;

    /**
     * @default 64778
     */
    const KEY_3270_PA1: number;

    /**
     * @default 64779
     */
    const KEY_3270_PA2: number;

    /**
     * @default 64780
     */
    const KEY_3270_PA3: number;

    /**
     * @default 64790
     */
    const KEY_3270_Play: number;

    /**
     * @default 64797
     */
    const KEY_3270_PrintScreen: number;

    /**
     * @default 64777
     */
    const KEY_3270_Quit: number;

    /**
     * @default 64792
     */
    const KEY_3270_Record: number;

    /**
     * @default 64776
     */
    const KEY_3270_Reset: number;

    /**
     * @default 64771
     */
    const KEY_3270_Right2: number;

    /**
     * @default 64788
     */
    const KEY_3270_Rule: number;

    /**
     * @default 64791
     */
    const KEY_3270_Setup: number;

    /**
     * @default 64781
     */
    const KEY_3270_Test: number;

    /**
     * @default 52
     */
    const KEY_4: number;

    /**
     * @default 53
     */
    const KEY_5: number;

    /**
     * @default 54
     */
    const KEY_6: number;

    /**
     * @default 55
     */
    const KEY_7: number;

    /**
     * @default 56
     */
    const KEY_8: number;

    /**
     * @default 57
     */
    const KEY_9: number;

    /**
     * @default 65
     */
    const KEY_A: number;

    /**
     * @default 198
     */
    const KEY_AE: number;

    /**
     * @default 193
     */
    const KEY_Aacute: number;

    /**
     * @default 16785056
     */
    const KEY_Abelowdot: number;

    /**
     * @default 451
     */
    const KEY_Abreve: number;

    /**
     * @default 16785070
     */
    const KEY_Abreveacute: number;

    /**
     * @default 16785078
     */
    const KEY_Abrevebelowdot: number;

    /**
     * @default 16785072
     */
    const KEY_Abrevegrave: number;

    /**
     * @default 16785074
     */
    const KEY_Abrevehook: number;

    /**
     * @default 16785076
     */
    const KEY_Abrevetilde: number;

    /**
     * @default 65136
     */
    const KEY_AccessX_Enable: number;

    /**
     * @default 65137
     */
    const KEY_AccessX_Feedback_Enable: number;

    /**
     * @default 194
     */
    const KEY_Acircumflex: number;

    /**
     * @default 16785060
     */
    const KEY_Acircumflexacute: number;

    /**
     * @default 16785068
     */
    const KEY_Acircumflexbelowdot: number;

    /**
     * @default 16785062
     */
    const KEY_Acircumflexgrave: number;

    /**
     * @default 16785064
     */
    const KEY_Acircumflexhook: number;

    /**
     * @default 16785066
     */
    const KEY_Acircumflextilde: number;

    /**
     * @default 269025081
     */
    const KEY_AddFavorite: number;

    /**
     * @default 196
     */
    const KEY_Adiaeresis: number;

    /**
     * @default 192
     */
    const KEY_Agrave: number;

    /**
     * @default 16785058
     */
    const KEY_Ahook: number;

    /**
     * @default 65513
     */
    const KEY_Alt_L: number;

    /**
     * @default 65514
     */
    const KEY_Alt_R: number;

    /**
     * @default 960
     */
    const KEY_Amacron: number;

    /**
     * @default 417
     */
    const KEY_Aogonek: number;

    /**
     * @default 269025104
     */
    const KEY_ApplicationLeft: number;

    /**
     * @default 269025105
     */
    const KEY_ApplicationRight: number;

    /**
     * @default 16778848
     */
    const KEY_Arabic_0: number;

    /**
     * @default 16778849
     */
    const KEY_Arabic_1: number;

    /**
     * @default 16778850
     */
    const KEY_Arabic_2: number;

    /**
     * @default 16778851
     */
    const KEY_Arabic_3: number;

    /**
     * @default 16778852
     */
    const KEY_Arabic_4: number;

    /**
     * @default 16778853
     */
    const KEY_Arabic_5: number;

    /**
     * @default 16778854
     */
    const KEY_Arabic_6: number;

    /**
     * @default 16778855
     */
    const KEY_Arabic_7: number;

    /**
     * @default 16778856
     */
    const KEY_Arabic_8: number;

    /**
     * @default 16778857
     */
    const KEY_Arabic_9: number;

    /**
     * @default 1497
     */
    const KEY_Arabic_ain: number;

    /**
     * @default 1479
     */
    const KEY_Arabic_alef: number;

    /**
     * @default 1513
     */
    const KEY_Arabic_alefmaksura: number;

    /**
     * @default 1480
     */
    const KEY_Arabic_beh: number;

    /**
     * @default 1452
     */
    const KEY_Arabic_comma: number;

    /**
     * @default 1494
     */
    const KEY_Arabic_dad: number;

    /**
     * @default 1487
     */
    const KEY_Arabic_dal: number;

    /**
     * @default 1519
     */
    const KEY_Arabic_damma: number;

    /**
     * @default 1516
     */
    const KEY_Arabic_dammatan: number;

    /**
     * @default 16778888
     */
    const KEY_Arabic_ddal: number;

    /**
     * @default 16778956
     */
    const KEY_Arabic_farsi_yeh: number;

    /**
     * @default 1518
     */
    const KEY_Arabic_fatha: number;

    /**
     * @default 1515
     */
    const KEY_Arabic_fathatan: number;

    /**
     * @default 1505
     */
    const KEY_Arabic_feh: number;

    /**
     * @default 16778964
     */
    const KEY_Arabic_fullstop: number;

    /**
     * @default 16778927
     */
    const KEY_Arabic_gaf: number;

    /**
     * @default 1498
     */
    const KEY_Arabic_ghain: number;

    /**
     * @default 1511
     */
    const KEY_Arabic_ha: number;

    /**
     * @default 1485
     */
    const KEY_Arabic_hah: number;

    /**
     * @default 1473
     */
    const KEY_Arabic_hamza: number;

    /**
     * @default 16778836
     */
    const KEY_Arabic_hamza_above: number;

    /**
     * @default 16778837
     */
    const KEY_Arabic_hamza_below: number;

    /**
     * @default 1475
     */
    const KEY_Arabic_hamzaonalef: number;

    /**
     * @default 1476
     */
    const KEY_Arabic_hamzaonwaw: number;

    /**
     * @default 1478
     */
    const KEY_Arabic_hamzaonyeh: number;

    /**
     * @default 1477
     */
    const KEY_Arabic_hamzaunderalef: number;

    /**
     * @default 1511
     */
    const KEY_Arabic_heh: number;

    /**
     * @default 16778942
     */
    const KEY_Arabic_heh_doachashmee: number;

    /**
     * @default 16778945
     */
    const KEY_Arabic_heh_goal: number;

    /**
     * @default 1484
     */
    const KEY_Arabic_jeem: number;

    /**
     * @default 16778904
     */
    const KEY_Arabic_jeh: number;

    /**
     * @default 1507
     */
    const KEY_Arabic_kaf: number;

    /**
     * @default 1520
     */
    const KEY_Arabic_kasra: number;

    /**
     * @default 1517
     */
    const KEY_Arabic_kasratan: number;

    /**
     * @default 16778921
     */
    const KEY_Arabic_keheh: number;

    /**
     * @default 1486
     */
    const KEY_Arabic_khah: number;

    /**
     * @default 1508
     */
    const KEY_Arabic_lam: number;

    /**
     * @default 16778835
     */
    const KEY_Arabic_madda_above: number;

    /**
     * @default 1474
     */
    const KEY_Arabic_maddaonalef: number;

    /**
     * @default 1509
     */
    const KEY_Arabic_meem: number;

    /**
     * @default 1510
     */
    const KEY_Arabic_noon: number;

    /**
     * @default 16778938
     */
    const KEY_Arabic_noon_ghunna: number;

    /**
     * @default 16778878
     */
    const KEY_Arabic_peh: number;

    /**
     * @default 16778858
     */
    const KEY_Arabic_percent: number;

    /**
     * @default 1506
     */
    const KEY_Arabic_qaf: number;

    /**
     * @default 1471
     */
    const KEY_Arabic_question_mark: number;

    /**
     * @default 1489
     */
    const KEY_Arabic_ra: number;

    /**
     * @default 16778897
     */
    const KEY_Arabic_rreh: number;

    /**
     * @default 1493
     */
    const KEY_Arabic_sad: number;

    /**
     * @default 1491
     */
    const KEY_Arabic_seen: number;

    /**
     * @default 1467
     */
    const KEY_Arabic_semicolon: number;

    /**
     * @default 1521
     */
    const KEY_Arabic_shadda: number;

    /**
     * @default 1492
     */
    const KEY_Arabic_sheen: number;

    /**
     * @default 1522
     */
    const KEY_Arabic_sukun: number;

    /**
     * @default 16778864
     */
    const KEY_Arabic_superscript_alef: number;

    /**
     * @default 65406
     */
    const KEY_Arabic_switch: number;

    /**
     * @default 1495
     */
    const KEY_Arabic_tah: number;

    /**
     * @default 1504
     */
    const KEY_Arabic_tatweel: number;

    /**
     * @default 16778886
     */
    const KEY_Arabic_tcheh: number;

    /**
     * @default 1482
     */
    const KEY_Arabic_teh: number;

    /**
     * @default 1481
     */
    const KEY_Arabic_tehmarbuta: number;

    /**
     * @default 1488
     */
    const KEY_Arabic_thal: number;

    /**
     * @default 1483
     */
    const KEY_Arabic_theh: number;

    /**
     * @default 16778873
     */
    const KEY_Arabic_tteh: number;

    /**
     * @default 16778916
     */
    const KEY_Arabic_veh: number;

    /**
     * @default 1512
     */
    const KEY_Arabic_waw: number;

    /**
     * @default 1514
     */
    const KEY_Arabic_yeh: number;

    /**
     * @default 16778962
     */
    const KEY_Arabic_yeh_baree: number;

    /**
     * @default 1496
     */
    const KEY_Arabic_zah: number;

    /**
     * @default 1490
     */
    const KEY_Arabic_zain: number;

    /**
     * @default 197
     */
    const KEY_Aring: number;

    /**
     * @default 16778552
     */
    const KEY_Armenian_AT: number;

    /**
     * @default 16778545
     */
    const KEY_Armenian_AYB: number;

    /**
     * @default 16778546
     */
    const KEY_Armenian_BEN: number;

    /**
     * @default 16778569
     */
    const KEY_Armenian_CHA: number;

    /**
     * @default 16778548
     */
    const KEY_Armenian_DA: number;

    /**
     * @default 16778561
     */
    const KEY_Armenian_DZA: number;

    /**
     * @default 16778551
     */
    const KEY_Armenian_E: number;

    /**
     * @default 16778582
     */
    const KEY_Armenian_FE: number;

    /**
     * @default 16778562
     */
    const KEY_Armenian_GHAT: number;

    /**
     * @default 16778547
     */
    const KEY_Armenian_GIM: number;

    /**
     * @default 16778565
     */
    const KEY_Armenian_HI: number;

    /**
     * @default 16778560
     */
    const KEY_Armenian_HO: number;

    /**
     * @default 16778555
     */
    const KEY_Armenian_INI: number;

    /**
     * @default 16778571
     */
    const KEY_Armenian_JE: number;

    /**
     * @default 16778580
     */
    const KEY_Armenian_KE: number;

    /**
     * @default 16778559
     */
    const KEY_Armenian_KEN: number;

    /**
     * @default 16778557
     */
    const KEY_Armenian_KHE: number;

    /**
     * @default 16778556
     */
    const KEY_Armenian_LYUN: number;

    /**
     * @default 16778564
     */
    const KEY_Armenian_MEN: number;

    /**
     * @default 16778566
     */
    const KEY_Armenian_NU: number;

    /**
     * @default 16778581
     */
    const KEY_Armenian_O: number;

    /**
     * @default 16778570
     */
    const KEY_Armenian_PE: number;

    /**
     * @default 16778579
     */
    const KEY_Armenian_PYUR: number;

    /**
     * @default 16778572
     */
    const KEY_Armenian_RA: number;

    /**
     * @default 16778576
     */
    const KEY_Armenian_RE: number;

    /**
     * @default 16778573
     */
    const KEY_Armenian_SE: number;

    /**
     * @default 16778567
     */
    const KEY_Armenian_SHA: number;

    /**
     * @default 16778563
     */
    const KEY_Armenian_TCHE: number;

    /**
     * @default 16778553
     */
    const KEY_Armenian_TO: number;

    /**
     * @default 16778558
     */
    const KEY_Armenian_TSA: number;

    /**
     * @default 16778577
     */
    const KEY_Armenian_TSO: number;

    /**
     * @default 16778575
     */
    const KEY_Armenian_TYUN: number;

    /**
     * @default 16778574
     */
    const KEY_Armenian_VEV: number;

    /**
     * @default 16778568
     */
    const KEY_Armenian_VO: number;

    /**
     * @default 16778578
     */
    const KEY_Armenian_VYUN: number;

    /**
     * @default 16778549
     */
    const KEY_Armenian_YECH: number;

    /**
     * @default 16778550
     */
    const KEY_Armenian_ZA: number;

    /**
     * @default 16778554
     */
    const KEY_Armenian_ZHE: number;

    /**
     * @default 16778587
     */
    const KEY_Armenian_accent: number;

    /**
     * @default 16778588
     */
    const KEY_Armenian_amanak: number;

    /**
     * @default 16778586
     */
    const KEY_Armenian_apostrophe: number;

    /**
     * @default 16778600
     */
    const KEY_Armenian_at: number;

    /**
     * @default 16778593
     */
    const KEY_Armenian_ayb: number;

    /**
     * @default 16778594
     */
    const KEY_Armenian_ben: number;

    /**
     * @default 16778589
     */
    const KEY_Armenian_but: number;

    /**
     * @default 16778617
     */
    const KEY_Armenian_cha: number;

    /**
     * @default 16778596
     */
    const KEY_Armenian_da: number;

    /**
     * @default 16778609
     */
    const KEY_Armenian_dza: number;

    /**
     * @default 16778599
     */
    const KEY_Armenian_e: number;

    /**
     * @default 16778588
     */
    const KEY_Armenian_exclam: number;

    /**
     * @default 16778630
     */
    const KEY_Armenian_fe: number;

    /**
     * @default 16778633
     */
    const KEY_Armenian_full_stop: number;

    /**
     * @default 16778610
     */
    const KEY_Armenian_ghat: number;

    /**
     * @default 16778595
     */
    const KEY_Armenian_gim: number;

    /**
     * @default 16778613
     */
    const KEY_Armenian_hi: number;

    /**
     * @default 16778608
     */
    const KEY_Armenian_ho: number;

    /**
     * @default 16778634
     */
    const KEY_Armenian_hyphen: number;

    /**
     * @default 16778603
     */
    const KEY_Armenian_ini: number;

    /**
     * @default 16778619
     */
    const KEY_Armenian_je: number;

    /**
     * @default 16778628
     */
    const KEY_Armenian_ke: number;

    /**
     * @default 16778607
     */
    const KEY_Armenian_ken: number;

    /**
     * @default 16778605
     */
    const KEY_Armenian_khe: number;

    /**
     * @default 16778631
     */
    const KEY_Armenian_ligature_ew: number;

    /**
     * @default 16778604
     */
    const KEY_Armenian_lyun: number;

    /**
     * @default 16778612
     */
    const KEY_Armenian_men: number;

    /**
     * @default 16778614
     */
    const KEY_Armenian_nu: number;

    /**
     * @default 16778629
     */
    const KEY_Armenian_o: number;

    /**
     * @default 16778590
     */
    const KEY_Armenian_paruyk: number;

    /**
     * @default 16778618
     */
    const KEY_Armenian_pe: number;

    /**
     * @default 16778627
     */
    const KEY_Armenian_pyur: number;

    /**
     * @default 16778590
     */
    const KEY_Armenian_question: number;

    /**
     * @default 16778620
     */
    const KEY_Armenian_ra: number;

    /**
     * @default 16778624
     */
    const KEY_Armenian_re: number;

    /**
     * @default 16778621
     */
    const KEY_Armenian_se: number;

    /**
     * @default 16778589
     */
    const KEY_Armenian_separation_mark: number;

    /**
     * @default 16778615
     */
    const KEY_Armenian_sha: number;

    /**
     * @default 16778587
     */
    const KEY_Armenian_shesht: number;

    /**
     * @default 16778611
     */
    const KEY_Armenian_tche: number;

    /**
     * @default 16778601
     */
    const KEY_Armenian_to: number;

    /**
     * @default 16778606
     */
    const KEY_Armenian_tsa: number;

    /**
     * @default 16778625
     */
    const KEY_Armenian_tso: number;

    /**
     * @default 16778623
     */
    const KEY_Armenian_tyun: number;

    /**
     * @default 16778633
     */
    const KEY_Armenian_verjaket: number;

    /**
     * @default 16778622
     */
    const KEY_Armenian_vev: number;

    /**
     * @default 16778616
     */
    const KEY_Armenian_vo: number;

    /**
     * @default 16778626
     */
    const KEY_Armenian_vyun: number;

    /**
     * @default 16778597
     */
    const KEY_Armenian_yech: number;

    /**
     * @default 16778634
     */
    const KEY_Armenian_yentamna: number;

    /**
     * @default 16778598
     */
    const KEY_Armenian_za: number;

    /**
     * @default 16778602
     */
    const KEY_Armenian_zhe: number;

    /**
     * @default 195
     */
    const KEY_Atilde: number;

    /**
     * @default 65146
     */
    const KEY_AudibleBell_Enable: number;

    /**
     * @default 269025179
     */
    const KEY_AudioCycleTrack: number;

    /**
     * @default 269025175
     */
    const KEY_AudioForward: number;

    /**
     * @default 269025041
     */
    const KEY_AudioLowerVolume: number;

    /**
     * @default 269025074
     */
    const KEY_AudioMedia: number;

    /**
     * @default 269025202
     */
    const KEY_AudioMicMute: number;

    /**
     * @default 269025042
     */
    const KEY_AudioMute: number;

    /**
     * @default 269025047
     */
    const KEY_AudioNext: number;

    /**
     * @default 269025073
     */
    const KEY_AudioPause: number;

    /**
     * @default 269025044
     */
    const KEY_AudioPlay: number;

    /**
     * @default 269025206
     */
    const KEY_AudioPreset: number;

    /**
     * @default 269025046
     */
    const KEY_AudioPrev: number;

    /**
     * @default 269025043
     */
    const KEY_AudioRaiseVolume: number;

    /**
     * @default 269025177
     */
    const KEY_AudioRandomPlay: number;

    /**
     * @default 269025052
     */
    const KEY_AudioRecord: number;

    /**
     * @default 269025176
     */
    const KEY_AudioRepeat: number;

    /**
     * @default 269025086
     */
    const KEY_AudioRewind: number;

    /**
     * @default 269025045
     */
    const KEY_AudioStop: number;

    /**
     * @default 269025165
     */
    const KEY_Away: number;

    /**
     * @default 66
     */
    const KEY_B: number;

    /**
     * @default 16784898
     */
    const KEY_Babovedot: number;

    /**
     * @default 269025062
     */
    const KEY_Back: number;

    /**
     * @default 269025087
     */
    const KEY_BackForward: number;

    /**
     * @default 65288
     */
    const KEY_BackSpace: number;

    /**
     * @default 269025171
     */
    const KEY_Battery: number;

    /**
     * @default 65368
     */
    const KEY_Begin: number;

    /**
     * @default 269025190
     */
    const KEY_Blue: number;

    /**
     * @default 269025172
     */
    const KEY_Bluetooth: number;

    /**
     * @default 269025106
     */
    const KEY_Book: number;

    /**
     * @default 65140
     */
    const KEY_BounceKeys_Enable: number;

    /**
     * @default 65387
     */
    const KEY_Break: number;

    /**
     * @default 269025083
     */
    const KEY_BrightnessAdjust: number;

    /**
     * @default 1726
     */
    const KEY_Byelorussian_SHORTU: number;

    /**
     * @default 1710
     */
    const KEY_Byelorussian_shortu: number;

    /**
     * @default 67
     */
    const KEY_C: number;

    /**
     * @default 269025107
     */
    const KEY_CD: number;

    /**
     * @default 65186
     */
    const KEY_CH: number;

    /**
     * @default 65189
     */
    const KEY_C_H: number;

    /**
     * @default 65188
     */
    const KEY_C_h: number;

    /**
     * @default 709
     */
    const KEY_Cabovedot: number;

    /**
     * @default 454
     */
    const KEY_Cacute: number;

    /**
     * @default 269025053
     */
    const KEY_Calculator: number;

    /**
     * @default 269025056
     */
    const KEY_Calendar: number;

    /**
     * @default 65385
     */
    const KEY_Cancel: number;

    /**
     * @default 65509
     */
    const KEY_Caps_Lock: number;

    /**
     * @default 456
     */
    const KEY_Ccaron: number;

    /**
     * @default 199
     */
    const KEY_Ccedilla: number;

    /**
     * @default 710
     */
    const KEY_Ccircumflex: number;

    /**
     * @default 65185
     */
    const KEY_Ch: number;

    /**
     * @default 65291
     */
    const KEY_Clear: number;

    /**
     * @default 269024801
     */
    const KEY_ClearGrab: number;

    /**
     * @default 269025110
     */
    const KEY_Close: number;

    /**
     * @default 65335
     */
    const KEY_Codeinput: number;

    /**
     * @default 16785569
     */
    const KEY_ColonSign: number;

    /**
     * @default 269025085
     */
    const KEY_Community: number;

    /**
     * @default 269025058
     */
    const KEY_ContrastAdjust: number;

    /**
     * @default 65507
     */
    const KEY_Control_L: number;

    /**
     * @default 65508
     */
    const KEY_Control_R: number;

    /**
     * @default 269025111
     */
    const KEY_Copy: number;

    /**
     * @default 16785570
     */
    const KEY_CruzeiroSign: number;

    /**
     * @default 269025112
     */
    const KEY_Cut: number;

    /**
     * @default 269025180
     */
    const KEY_CycleAngle: number;

    /**
     * @default 1761
     */
    const KEY_Cyrillic_A: number;

    /**
     * @default 1762
     */
    const KEY_Cyrillic_BE: number;

    /**
     * @default 1790
     */
    const KEY_Cyrillic_CHE: number;

    /**
     * @default 16778422
     */
    const KEY_Cyrillic_CHE_descender: number;

    /**
     * @default 16778424
     */
    const KEY_Cyrillic_CHE_vertstroke: number;

    /**
     * @default 1764
     */
    const KEY_Cyrillic_DE: number;

    /**
     * @default 1727
     */
    const KEY_Cyrillic_DZHE: number;

    /**
     * @default 1788
     */
    const KEY_Cyrillic_E: number;

    /**
     * @default 1766
     */
    const KEY_Cyrillic_EF: number;

    /**
     * @default 1772
     */
    const KEY_Cyrillic_EL: number;

    /**
     * @default 1773
     */
    const KEY_Cyrillic_EM: number;

    /**
     * @default 1774
     */
    const KEY_Cyrillic_EN: number;

    /**
     * @default 16778402
     */
    const KEY_Cyrillic_EN_descender: number;

    /**
     * @default 1778
     */
    const KEY_Cyrillic_ER: number;

    /**
     * @default 1779
     */
    const KEY_Cyrillic_ES: number;

    /**
     * @default 1767
     */
    const KEY_Cyrillic_GHE: number;

    /**
     * @default 16778386
     */
    const KEY_Cyrillic_GHE_bar: number;

    /**
     * @default 1768
     */
    const KEY_Cyrillic_HA: number;

    /**
     * @default 1791
     */
    const KEY_Cyrillic_HARDSIGN: number;

    /**
     * @default 16778418
     */
    const KEY_Cyrillic_HA_descender: number;

    /**
     * @default 1769
     */
    const KEY_Cyrillic_I: number;

    /**
     * @default 1765
     */
    const KEY_Cyrillic_IE: number;

    /**
     * @default 1715
     */
    const KEY_Cyrillic_IO: number;

    /**
     * @default 16778466
     */
    const KEY_Cyrillic_I_macron: number;

    /**
     * @default 1720
     */
    const KEY_Cyrillic_JE: number;

    /**
     * @default 1771
     */
    const KEY_Cyrillic_KA: number;

    /**
     * @default 16778394
     */
    const KEY_Cyrillic_KA_descender: number;

    /**
     * @default 16778396
     */
    const KEY_Cyrillic_KA_vertstroke: number;

    /**
     * @default 1721
     */
    const KEY_Cyrillic_LJE: number;

    /**
     * @default 1722
     */
    const KEY_Cyrillic_NJE: number;

    /**
     * @default 1775
     */
    const KEY_Cyrillic_O: number;

    /**
     * @default 16778472
     */
    const KEY_Cyrillic_O_bar: number;

    /**
     * @default 1776
     */
    const KEY_Cyrillic_PE: number;

    /**
     * @default 16778456
     */
    const KEY_Cyrillic_SCHWA: number;

    /**
     * @default 1787
     */
    const KEY_Cyrillic_SHA: number;

    /**
     * @default 1789
     */
    const KEY_Cyrillic_SHCHA: number;

    /**
     * @default 16778426
     */
    const KEY_Cyrillic_SHHA: number;

    /**
     * @default 1770
     */
    const KEY_Cyrillic_SHORTI: number;

    /**
     * @default 1784
     */
    const KEY_Cyrillic_SOFTSIGN: number;

    /**
     * @default 1780
     */
    const KEY_Cyrillic_TE: number;

    /**
     * @default 1763
     */
    const KEY_Cyrillic_TSE: number;

    /**
     * @default 1781
     */
    const KEY_Cyrillic_U: number;

    /**
     * @default 16778478
     */
    const KEY_Cyrillic_U_macron: number;

    /**
     * @default 16778414
     */
    const KEY_Cyrillic_U_straight: number;

    /**
     * @default 16778416
     */
    const KEY_Cyrillic_U_straight_bar: number;

    /**
     * @default 1783
     */
    const KEY_Cyrillic_VE: number;

    /**
     * @default 1777
     */
    const KEY_Cyrillic_YA: number;

    /**
     * @default 1785
     */
    const KEY_Cyrillic_YERU: number;

    /**
     * @default 1760
     */
    const KEY_Cyrillic_YU: number;

    /**
     * @default 1786
     */
    const KEY_Cyrillic_ZE: number;

    /**
     * @default 1782
     */
    const KEY_Cyrillic_ZHE: number;

    /**
     * @default 16778390
     */
    const KEY_Cyrillic_ZHE_descender: number;

    /**
     * @default 1729
     */
    const KEY_Cyrillic_a: number;

    /**
     * @default 1730
     */
    const KEY_Cyrillic_be: number;

    /**
     * @default 1758
     */
    const KEY_Cyrillic_che: number;

    /**
     * @default 16778423
     */
    const KEY_Cyrillic_che_descender: number;

    /**
     * @default 16778425
     */
    const KEY_Cyrillic_che_vertstroke: number;

    /**
     * @default 1732
     */
    const KEY_Cyrillic_de: number;

    /**
     * @default 1711
     */
    const KEY_Cyrillic_dzhe: number;

    /**
     * @default 1756
     */
    const KEY_Cyrillic_e: number;

    /**
     * @default 1734
     */
    const KEY_Cyrillic_ef: number;

    /**
     * @default 1740
     */
    const KEY_Cyrillic_el: number;

    /**
     * @default 1741
     */
    const KEY_Cyrillic_em: number;

    /**
     * @default 1742
     */
    const KEY_Cyrillic_en: number;

    /**
     * @default 16778403
     */
    const KEY_Cyrillic_en_descender: number;

    /**
     * @default 1746
     */
    const KEY_Cyrillic_er: number;

    /**
     * @default 1747
     */
    const KEY_Cyrillic_es: number;

    /**
     * @default 1735
     */
    const KEY_Cyrillic_ghe: number;

    /**
     * @default 16778387
     */
    const KEY_Cyrillic_ghe_bar: number;

    /**
     * @default 1736
     */
    const KEY_Cyrillic_ha: number;

    /**
     * @default 16778419
     */
    const KEY_Cyrillic_ha_descender: number;

    /**
     * @default 1759
     */
    const KEY_Cyrillic_hardsign: number;

    /**
     * @default 1737
     */
    const KEY_Cyrillic_i: number;

    /**
     * @default 16778467
     */
    const KEY_Cyrillic_i_macron: number;

    /**
     * @default 1733
     */
    const KEY_Cyrillic_ie: number;

    /**
     * @default 1699
     */
    const KEY_Cyrillic_io: number;

    /**
     * @default 1704
     */
    const KEY_Cyrillic_je: number;

    /**
     * @default 1739
     */
    const KEY_Cyrillic_ka: number;

    /**
     * @default 16778395
     */
    const KEY_Cyrillic_ka_descender: number;

    /**
     * @default 16778397
     */
    const KEY_Cyrillic_ka_vertstroke: number;

    /**
     * @default 1705
     */
    const KEY_Cyrillic_lje: number;

    /**
     * @default 1706
     */
    const KEY_Cyrillic_nje: number;

    /**
     * @default 1743
     */
    const KEY_Cyrillic_o: number;

    /**
     * @default 16778473
     */
    const KEY_Cyrillic_o_bar: number;

    /**
     * @default 1744
     */
    const KEY_Cyrillic_pe: number;

    /**
     * @default 16778457
     */
    const KEY_Cyrillic_schwa: number;

    /**
     * @default 1755
     */
    const KEY_Cyrillic_sha: number;

    /**
     * @default 1757
     */
    const KEY_Cyrillic_shcha: number;

    /**
     * @default 16778427
     */
    const KEY_Cyrillic_shha: number;

    /**
     * @default 1738
     */
    const KEY_Cyrillic_shorti: number;

    /**
     * @default 1752
     */
    const KEY_Cyrillic_softsign: number;

    /**
     * @default 1748
     */
    const KEY_Cyrillic_te: number;

    /**
     * @default 1731
     */
    const KEY_Cyrillic_tse: number;

    /**
     * @default 1749
     */
    const KEY_Cyrillic_u: number;

    /**
     * @default 16778479
     */
    const KEY_Cyrillic_u_macron: number;

    /**
     * @default 16778415
     */
    const KEY_Cyrillic_u_straight: number;

    /**
     * @default 16778417
     */
    const KEY_Cyrillic_u_straight_bar: number;

    /**
     * @default 1751
     */
    const KEY_Cyrillic_ve: number;

    /**
     * @default 1745
     */
    const KEY_Cyrillic_ya: number;

    /**
     * @default 1753
     */
    const KEY_Cyrillic_yeru: number;

    /**
     * @default 1728
     */
    const KEY_Cyrillic_yu: number;

    /**
     * @default 1754
     */
    const KEY_Cyrillic_ze: number;

    /**
     * @default 1750
     */
    const KEY_Cyrillic_zhe: number;

    /**
     * @default 16778391
     */
    const KEY_Cyrillic_zhe_descender: number;

    /**
     * @default 68
     */
    const KEY_D: number;

    /**
     * @default 269025114
     */
    const KEY_DOS: number;

    /**
     * @default 16784906
     */
    const KEY_Dabovedot: number;

    /**
     * @default 463
     */
    const KEY_Dcaron: number;

    /**
     * @default 65535
     */
    const KEY_Delete: number;

    /**
     * @default 269025113
     */
    const KEY_Display: number;

    /**
     * @default 269025115
     */
    const KEY_Documents: number;

    /**
     * @default 16785579
     */
    const KEY_DongSign: number;

    /**
     * @default 65364
     */
    const KEY_Down: number;

    /**
     * @default 464
     */
    const KEY_Dstroke: number;

    /**
     * @default 69
     */
    const KEY_E: number;

    /**
     * @default 957
     */
    const KEY_ENG: number;

    /**
     * @default 208
     */
    const KEY_ETH: number;

    /**
     * @default 16777655
     */
    const KEY_EZH: number;

    /**
     * @default 972
     */
    const KEY_Eabovedot: number;

    /**
     * @default 201
     */
    const KEY_Eacute: number;

    /**
     * @default 16785080
     */
    const KEY_Ebelowdot: number;

    /**
     * @default 460
     */
    const KEY_Ecaron: number;

    /**
     * @default 202
     */
    const KEY_Ecircumflex: number;

    /**
     * @default 16785086
     */
    const KEY_Ecircumflexacute: number;

    /**
     * @default 16785094
     */
    const KEY_Ecircumflexbelowdot: number;

    /**
     * @default 16785088
     */
    const KEY_Ecircumflexgrave: number;

    /**
     * @default 16785090
     */
    const KEY_Ecircumflexhook: number;

    /**
     * @default 16785092
     */
    const KEY_Ecircumflextilde: number;

    /**
     * @default 16785568
     */
    const KEY_EcuSign: number;

    /**
     * @default 203
     */
    const KEY_Ediaeresis: number;

    /**
     * @default 200
     */
    const KEY_Egrave: number;

    /**
     * @default 16785082
     */
    const KEY_Ehook: number;

    /**
     * @default 65327
     */
    const KEY_Eisu_Shift: number;

    /**
     * @default 65328
     */
    const KEY_Eisu_toggle: number;

    /**
     * @default 269025068
     */
    const KEY_Eject: number;

    /**
     * @default 938
     */
    const KEY_Emacron: number;

    /**
     * @default 65367
     */
    const KEY_End: number;

    /**
     * @default 458
     */
    const KEY_Eogonek: number;

    /**
     * @default 65307
     */
    const KEY_Escape: number;

    /**
     * @default 208
     */
    const KEY_Eth: number;

    /**
     * @default 16785084
     */
    const KEY_Etilde: number;

    /**
     * @default 8364
     */
    const KEY_EuroSign: number;

    /**
     * @default 269025116
     */
    const KEY_Excel: number;

    /**
     * @default 65378
     */
    const KEY_Execute: number;

    /**
     * @default 269025117
     */
    const KEY_Explorer: number;

    /**
     * @default 70
     */
    const KEY_F: number;

    /**
     * @default 65470
     */
    const KEY_F1: number;

    /**
     * @default 65479
     */
    const KEY_F10: number;

    /**
     * @default 65480
     */
    const KEY_F11: number;

    /**
     * @default 65481
     */
    const KEY_F12: number;

    /**
     * @default 65482
     */
    const KEY_F13: number;

    /**
     * @default 65483
     */
    const KEY_F14: number;

    /**
     * @default 65484
     */
    const KEY_F15: number;

    /**
     * @default 65485
     */
    const KEY_F16: number;

    /**
     * @default 65486
     */
    const KEY_F17: number;

    /**
     * @default 65487
     */
    const KEY_F18: number;

    /**
     * @default 65488
     */
    const KEY_F19: number;

    /**
     * @default 65471
     */
    const KEY_F2: number;

    /**
     * @default 65489
     */
    const KEY_F20: number;

    /**
     * @default 65490
     */
    const KEY_F21: number;

    /**
     * @default 65491
     */
    const KEY_F22: number;

    /**
     * @default 65492
     */
    const KEY_F23: number;

    /**
     * @default 65493
     */
    const KEY_F24: number;

    /**
     * @default 65494
     */
    const KEY_F25: number;

    /**
     * @default 65495
     */
    const KEY_F26: number;

    /**
     * @default 65496
     */
    const KEY_F27: number;

    /**
     * @default 65497
     */
    const KEY_F28: number;

    /**
     * @default 65498
     */
    const KEY_F29: number;

    /**
     * @default 65472
     */
    const KEY_F3: number;

    /**
     * @default 65499
     */
    const KEY_F30: number;

    /**
     * @default 65500
     */
    const KEY_F31: number;

    /**
     * @default 65501
     */
    const KEY_F32: number;

    /**
     * @default 65502
     */
    const KEY_F33: number;

    /**
     * @default 65503
     */
    const KEY_F34: number;

    /**
     * @default 65504
     */
    const KEY_F35: number;

    /**
     * @default 65473
     */
    const KEY_F4: number;

    /**
     * @default 65474
     */
    const KEY_F5: number;

    /**
     * @default 65475
     */
    const KEY_F6: number;

    /**
     * @default 65476
     */
    const KEY_F7: number;

    /**
     * @default 65477
     */
    const KEY_F8: number;

    /**
     * @default 65478
     */
    const KEY_F9: number;

    /**
     * @default 16785571
     */
    const KEY_FFrancSign: number;

    /**
     * @default 16784926
     */
    const KEY_Fabovedot: number;

    /**
     * @default 16778992
     */
    const KEY_Farsi_0: number;

    /**
     * @default 16778993
     */
    const KEY_Farsi_1: number;

    /**
     * @default 16778994
     */
    const KEY_Farsi_2: number;

    /**
     * @default 16778995
     */
    const KEY_Farsi_3: number;

    /**
     * @default 16778996
     */
    const KEY_Farsi_4: number;

    /**
     * @default 16778997
     */
    const KEY_Farsi_5: number;

    /**
     * @default 16778998
     */
    const KEY_Farsi_6: number;

    /**
     * @default 16778999
     */
    const KEY_Farsi_7: number;

    /**
     * @default 16779000
     */
    const KEY_Farsi_8: number;

    /**
     * @default 16779001
     */
    const KEY_Farsi_9: number;

    /**
     * @default 16778956
     */
    const KEY_Farsi_yeh: number;

    /**
     * @default 269025072
     */
    const KEY_Favorites: number;

    /**
     * @default 269025084
     */
    const KEY_Finance: number;

    /**
     * @default 65384
     */
    const KEY_Find: number;

    /**
     * @default 65232
     */
    const KEY_First_Virtual_Screen: number;

    /**
     * @default 269025063
     */
    const KEY_Forward: number;

    /**
     * @default 269025181
     */
    const KEY_FrameBack: number;

    /**
     * @default 269025182
     */
    const KEY_FrameForward: number;

    /**
     * @default 71
     */
    const KEY_G: number;

    /**
     * @default 725
     */
    const KEY_Gabovedot: number;

    /**
     * @default 269025118
     */
    const KEY_Game: number;

    /**
     * @default 683
     */
    const KEY_Gbreve: number;

    /**
     * @default 16777702
     */
    const KEY_Gcaron: number;

    /**
     * @default 939
     */
    const KEY_Gcedilla: number;

    /**
     * @default 728
     */
    const KEY_Gcircumflex: number;

    /**
     * @default 16781520
     */
    const KEY_Georgian_an: number;

    /**
     * @default 16781521
     */
    const KEY_Georgian_ban: number;

    /**
     * @default 16781546
     */
    const KEY_Georgian_can: number;

    /**
     * @default 16781549
     */
    const KEY_Georgian_char: number;

    /**
     * @default 16781545
     */
    const KEY_Georgian_chin: number;

    /**
     * @default 16781548
     */
    const KEY_Georgian_cil: number;

    /**
     * @default 16781523
     */
    const KEY_Georgian_don: number;

    /**
     * @default 16781524
     */
    const KEY_Georgian_en: number;

    /**
     * @default 16781558
     */
    const KEY_Georgian_fi: number;

    /**
     * @default 16781522
     */
    const KEY_Georgian_gan: number;

    /**
     * @default 16781542
     */
    const KEY_Georgian_ghan: number;

    /**
     * @default 16781552
     */
    const KEY_Georgian_hae: number;

    /**
     * @default 16781556
     */
    const KEY_Georgian_har: number;

    /**
     * @default 16781553
     */
    const KEY_Georgian_he: number;

    /**
     * @default 16781554
     */
    const KEY_Georgian_hie: number;

    /**
     * @default 16781557
     */
    const KEY_Georgian_hoe: number;

    /**
     * @default 16781528
     */
    const KEY_Georgian_in: number;

    /**
     * @default 16781551
     */
    const KEY_Georgian_jhan: number;

    /**
     * @default 16781547
     */
    const KEY_Georgian_jil: number;

    /**
     * @default 16781529
     */
    const KEY_Georgian_kan: number;

    /**
     * @default 16781541
     */
    const KEY_Georgian_khar: number;

    /**
     * @default 16781530
     */
    const KEY_Georgian_las: number;

    /**
     * @default 16781531
     */
    const KEY_Georgian_man: number;

    /**
     * @default 16781532
     */
    const KEY_Georgian_nar: number;

    /**
     * @default 16781533
     */
    const KEY_Georgian_on: number;

    /**
     * @default 16781534
     */
    const KEY_Georgian_par: number;

    /**
     * @default 16781540
     */
    const KEY_Georgian_phar: number;

    /**
     * @default 16781543
     */
    const KEY_Georgian_qar: number;

    /**
     * @default 16781536
     */
    const KEY_Georgian_rae: number;

    /**
     * @default 16781537
     */
    const KEY_Georgian_san: number;

    /**
     * @default 16781544
     */
    const KEY_Georgian_shin: number;

    /**
     * @default 16781527
     */
    const KEY_Georgian_tan: number;

    /**
     * @default 16781538
     */
    const KEY_Georgian_tar: number;

    /**
     * @default 16781539
     */
    const KEY_Georgian_un: number;

    /**
     * @default 16781525
     */
    const KEY_Georgian_vin: number;

    /**
     * @default 16781555
     */
    const KEY_Georgian_we: number;

    /**
     * @default 16781550
     */
    const KEY_Georgian_xan: number;

    /**
     * @default 16781526
     */
    const KEY_Georgian_zen: number;

    /**
     * @default 16781535
     */
    const KEY_Georgian_zhar: number;

    /**
     * @default 269025119
     */
    const KEY_Go: number;

    /**
     * @default 1985
     */
    const KEY_Greek_ALPHA: number;

    /**
     * @default 1953
     */
    const KEY_Greek_ALPHAaccent: number;

    /**
     * @default 1986
     */
    const KEY_Greek_BETA: number;

    /**
     * @default 2007
     */
    const KEY_Greek_CHI: number;

    /**
     * @default 1988
     */
    const KEY_Greek_DELTA: number;

    /**
     * @default 1989
     */
    const KEY_Greek_EPSILON: number;

    /**
     * @default 1954
     */
    const KEY_Greek_EPSILONaccent: number;

    /**
     * @default 1991
     */
    const KEY_Greek_ETA: number;

    /**
     * @default 1955
     */
    const KEY_Greek_ETAaccent: number;

    /**
     * @default 1987
     */
    const KEY_Greek_GAMMA: number;

    /**
     * @default 1993
     */
    const KEY_Greek_IOTA: number;

    /**
     * @default 1956
     */
    const KEY_Greek_IOTAaccent: number;

    /**
     * @default 1957
     */
    const KEY_Greek_IOTAdiaeresis: number;

    /**
     * @default 1957
     */
    const KEY_Greek_IOTAdieresis: number;

    /**
     * @default 1994
     */
    const KEY_Greek_KAPPA: number;

    /**
     * @default 1995
     */
    const KEY_Greek_LAMBDA: number;

    /**
     * @default 1995
     */
    const KEY_Greek_LAMDA: number;

    /**
     * @default 1996
     */
    const KEY_Greek_MU: number;

    /**
     * @default 1997
     */
    const KEY_Greek_NU: number;

    /**
     * @default 2009
     */
    const KEY_Greek_OMEGA: number;

    /**
     * @default 1963
     */
    const KEY_Greek_OMEGAaccent: number;

    /**
     * @default 1999
     */
    const KEY_Greek_OMICRON: number;

    /**
     * @default 1959
     */
    const KEY_Greek_OMICRONaccent: number;

    /**
     * @default 2006
     */
    const KEY_Greek_PHI: number;

    /**
     * @default 2000
     */
    const KEY_Greek_PI: number;

    /**
     * @default 2008
     */
    const KEY_Greek_PSI: number;

    /**
     * @default 2001
     */
    const KEY_Greek_RHO: number;

    /**
     * @default 2002
     */
    const KEY_Greek_SIGMA: number;

    /**
     * @default 2004
     */
    const KEY_Greek_TAU: number;

    /**
     * @default 1992
     */
    const KEY_Greek_THETA: number;

    /**
     * @default 2005
     */
    const KEY_Greek_UPSILON: number;

    /**
     * @default 1960
     */
    const KEY_Greek_UPSILONaccent: number;

    /**
     * @default 1961
     */
    const KEY_Greek_UPSILONdieresis: number;

    /**
     * @default 1998
     */
    const KEY_Greek_XI: number;

    /**
     * @default 1990
     */
    const KEY_Greek_ZETA: number;

    /**
     * @default 1966
     */
    const KEY_Greek_accentdieresis: number;

    /**
     * @default 2017
     */
    const KEY_Greek_alpha: number;

    /**
     * @default 1969
     */
    const KEY_Greek_alphaaccent: number;

    /**
     * @default 2018
     */
    const KEY_Greek_beta: number;

    /**
     * @default 2039
     */
    const KEY_Greek_chi: number;

    /**
     * @default 2020
     */
    const KEY_Greek_delta: number;

    /**
     * @default 2021
     */
    const KEY_Greek_epsilon: number;

    /**
     * @default 1970
     */
    const KEY_Greek_epsilonaccent: number;

    /**
     * @default 2023
     */
    const KEY_Greek_eta: number;

    /**
     * @default 1971
     */
    const KEY_Greek_etaaccent: number;

    /**
     * @default 2035
     */
    const KEY_Greek_finalsmallsigma: number;

    /**
     * @default 2019
     */
    const KEY_Greek_gamma: number;

    /**
     * @default 1967
     */
    const KEY_Greek_horizbar: number;

    /**
     * @default 2025
     */
    const KEY_Greek_iota: number;

    /**
     * @default 1972
     */
    const KEY_Greek_iotaaccent: number;

    /**
     * @default 1974
     */
    const KEY_Greek_iotaaccentdieresis: number;

    /**
     * @default 1973
     */
    const KEY_Greek_iotadieresis: number;

    /**
     * @default 2026
     */
    const KEY_Greek_kappa: number;

    /**
     * @default 2027
     */
    const KEY_Greek_lambda: number;

    /**
     * @default 2027
     */
    const KEY_Greek_lamda: number;

    /**
     * @default 2028
     */
    const KEY_Greek_mu: number;

    /**
     * @default 2029
     */
    const KEY_Greek_nu: number;

    /**
     * @default 2041
     */
    const KEY_Greek_omega: number;

    /**
     * @default 1979
     */
    const KEY_Greek_omegaaccent: number;

    /**
     * @default 2031
     */
    const KEY_Greek_omicron: number;

    /**
     * @default 1975
     */
    const KEY_Greek_omicronaccent: number;

    /**
     * @default 2038
     */
    const KEY_Greek_phi: number;

    /**
     * @default 2032
     */
    const KEY_Greek_pi: number;

    /**
     * @default 2040
     */
    const KEY_Greek_psi: number;

    /**
     * @default 2033
     */
    const KEY_Greek_rho: number;

    /**
     * @default 2034
     */
    const KEY_Greek_sigma: number;

    /**
     * @default 65406
     */
    const KEY_Greek_switch: number;

    /**
     * @default 2036
     */
    const KEY_Greek_tau: number;

    /**
     * @default 2024
     */
    const KEY_Greek_theta: number;

    /**
     * @default 2037
     */
    const KEY_Greek_upsilon: number;

    /**
     * @default 1976
     */
    const KEY_Greek_upsilonaccent: number;

    /**
     * @default 1978
     */
    const KEY_Greek_upsilonaccentdieresis: number;

    /**
     * @default 1977
     */
    const KEY_Greek_upsilondieresis: number;

    /**
     * @default 2030
     */
    const KEY_Greek_xi: number;

    /**
     * @default 2022
     */
    const KEY_Greek_zeta: number;

    /**
     * @default 269025188
     */
    const KEY_Green: number;

    /**
     * @default 72
     */
    const KEY_H: number;

    /**
     * @default 65329
     */
    const KEY_Hangul: number;

    /**
     * @default 3775
     */
    const KEY_Hangul_A: number;

    /**
     * @default 3776
     */
    const KEY_Hangul_AE: number;

    /**
     * @default 3830
     */
    const KEY_Hangul_AraeA: number;

    /**
     * @default 3831
     */
    const KEY_Hangul_AraeAE: number;

    /**
     * @default 65337
     */
    const KEY_Hangul_Banja: number;

    /**
     * @default 3770
     */
    const KEY_Hangul_Cieuc: number;

    /**
     * @default 65335
     */
    const KEY_Hangul_Codeinput: number;

    /**
     * @default 3751
     */
    const KEY_Hangul_Dikeud: number;

    /**
     * @default 3780
     */
    const KEY_Hangul_E: number;

    /**
     * @default 3779
     */
    const KEY_Hangul_EO: number;

    /**
     * @default 3793
     */
    const KEY_Hangul_EU: number;

    /**
     * @default 65331
     */
    const KEY_Hangul_End: number;

    /**
     * @default 65332
     */
    const KEY_Hangul_Hanja: number;

    /**
     * @default 3774
     */
    const KEY_Hangul_Hieuh: number;

    /**
     * @default 3795
     */
    const KEY_Hangul_I: number;

    /**
     * @default 3767
     */
    const KEY_Hangul_Ieung: number;

    /**
     * @default 3818
     */
    const KEY_Hangul_J_Cieuc: number;

    /**
     * @default 3802
     */
    const KEY_Hangul_J_Dikeud: number;

    /**
     * @default 3822
     */
    const KEY_Hangul_J_Hieuh: number;

    /**
     * @default 3816
     */
    const KEY_Hangul_J_Ieung: number;

    /**
     * @default 3817
     */
    const KEY_Hangul_J_Jieuj: number;

    /**
     * @default 3819
     */
    const KEY_Hangul_J_Khieuq: number;

    /**
     * @default 3796
     */
    const KEY_Hangul_J_Kiyeog: number;

    /**
     * @default 3798
     */
    const KEY_Hangul_J_KiyeogSios: number;

    /**
     * @default 3833
     */
    const KEY_Hangul_J_KkogjiDalrinIeung: number;

    /**
     * @default 3811
     */
    const KEY_Hangul_J_Mieum: number;

    /**
     * @default 3799
     */
    const KEY_Hangul_J_Nieun: number;

    /**
     * @default 3801
     */
    const KEY_Hangul_J_NieunHieuh: number;

    /**
     * @default 3800
     */
    const KEY_Hangul_J_NieunJieuj: number;

    /**
     * @default 3832
     */
    const KEY_Hangul_J_PanSios: number;

    /**
     * @default 3821
     */
    const KEY_Hangul_J_Phieuf: number;

    /**
     * @default 3812
     */
    const KEY_Hangul_J_Pieub: number;

    /**
     * @default 3813
     */
    const KEY_Hangul_J_PieubSios: number;

    /**
     * @default 3803
     */
    const KEY_Hangul_J_Rieul: number;

    /**
     * @default 3810
     */
    const KEY_Hangul_J_RieulHieuh: number;

    /**
     * @default 3804
     */
    const KEY_Hangul_J_RieulKiyeog: number;

    /**
     * @default 3805
     */
    const KEY_Hangul_J_RieulMieum: number;

    /**
     * @default 3809
     */
    const KEY_Hangul_J_RieulPhieuf: number;

    /**
     * @default 3806
     */
    const KEY_Hangul_J_RieulPieub: number;

    /**
     * @default 3807
     */
    const KEY_Hangul_J_RieulSios: number;

    /**
     * @default 3808
     */
    const KEY_Hangul_J_RieulTieut: number;

    /**
     * @default 3814
     */
    const KEY_Hangul_J_Sios: number;

    /**
     * @default 3797
     */
    const KEY_Hangul_J_SsangKiyeog: number;

    /**
     * @default 3815
     */
    const KEY_Hangul_J_SsangSios: number;

    /**
     * @default 3820
     */
    const KEY_Hangul_J_Tieut: number;

    /**
     * @default 3834
     */
    const KEY_Hangul_J_YeorinHieuh: number;

    /**
     * @default 65333
     */
    const KEY_Hangul_Jamo: number;

    /**
     * @default 65336
     */
    const KEY_Hangul_Jeonja: number;

    /**
     * @default 3768
     */
    const KEY_Hangul_Jieuj: number;

    /**
     * @default 3771
     */
    const KEY_Hangul_Khieuq: number;

    /**
     * @default 3745
     */
    const KEY_Hangul_Kiyeog: number;

    /**
     * @default 3747
     */
    const KEY_Hangul_KiyeogSios: number;

    /**
     * @default 3827
     */
    const KEY_Hangul_KkogjiDalrinIeung: number;

    /**
     * @default 3761
     */
    const KEY_Hangul_Mieum: number;

    /**
     * @default 65341
     */
    const KEY_Hangul_MultipleCandidate: number;

    /**
     * @default 3748
     */
    const KEY_Hangul_Nieun: number;

    /**
     * @default 3750
     */
    const KEY_Hangul_NieunHieuh: number;

    /**
     * @default 3749
     */
    const KEY_Hangul_NieunJieuj: number;

    /**
     * @default 3783
     */
    const KEY_Hangul_O: number;

    /**
     * @default 3786
     */
    const KEY_Hangul_OE: number;

    /**
     * @default 3826
     */
    const KEY_Hangul_PanSios: number;

    /**
     * @default 3773
     */
    const KEY_Hangul_Phieuf: number;

    /**
     * @default 3762
     */
    const KEY_Hangul_Pieub: number;

    /**
     * @default 3764
     */
    const KEY_Hangul_PieubSios: number;

    /**
     * @default 65339
     */
    const KEY_Hangul_PostHanja: number;

    /**
     * @default 65338
     */
    const KEY_Hangul_PreHanja: number;

    /**
     * @default 65342
     */
    const KEY_Hangul_PreviousCandidate: number;

    /**
     * @default 3753
     */
    const KEY_Hangul_Rieul: number;

    /**
     * @default 3760
     */
    const KEY_Hangul_RieulHieuh: number;

    /**
     * @default 3754
     */
    const KEY_Hangul_RieulKiyeog: number;

    /**
     * @default 3755
     */
    const KEY_Hangul_RieulMieum: number;

    /**
     * @default 3759
     */
    const KEY_Hangul_RieulPhieuf: number;

    /**
     * @default 3756
     */
    const KEY_Hangul_RieulPieub: number;

    /**
     * @default 3757
     */
    const KEY_Hangul_RieulSios: number;

    /**
     * @default 3758
     */
    const KEY_Hangul_RieulTieut: number;

    /**
     * @default 3823
     */
    const KEY_Hangul_RieulYeorinHieuh: number;

    /**
     * @default 65334
     */
    const KEY_Hangul_Romaja: number;

    /**
     * @default 65340
     */
    const KEY_Hangul_SingleCandidate: number;

    /**
     * @default 3765
     */
    const KEY_Hangul_Sios: number;

    /**
     * @default 65343
     */
    const KEY_Hangul_Special: number;

    /**
     * @default 3752
     */
    const KEY_Hangul_SsangDikeud: number;

    /**
     * @default 3769
     */
    const KEY_Hangul_SsangJieuj: number;

    /**
     * @default 3746
     */
    const KEY_Hangul_SsangKiyeog: number;

    /**
     * @default 3763
     */
    const KEY_Hangul_SsangPieub: number;

    /**
     * @default 3766
     */
    const KEY_Hangul_SsangSios: number;

    /**
     * @default 65330
     */
    const KEY_Hangul_Start: number;

    /**
     * @default 3824
     */
    const KEY_Hangul_SunkyeongeumMieum: number;

    /**
     * @default 3828
     */
    const KEY_Hangul_SunkyeongeumPhieuf: number;

    /**
     * @default 3825
     */
    const KEY_Hangul_SunkyeongeumPieub: number;

    /**
     * @default 3772
     */
    const KEY_Hangul_Tieut: number;

    /**
     * @default 3788
     */
    const KEY_Hangul_U: number;

    /**
     * @default 3784
     */
    const KEY_Hangul_WA: number;

    /**
     * @default 3785
     */
    const KEY_Hangul_WAE: number;

    /**
     * @default 3790
     */
    const KEY_Hangul_WE: number;

    /**
     * @default 3789
     */
    const KEY_Hangul_WEO: number;

    /**
     * @default 3791
     */
    const KEY_Hangul_WI: number;

    /**
     * @default 3777
     */
    const KEY_Hangul_YA: number;

    /**
     * @default 3778
     */
    const KEY_Hangul_YAE: number;

    /**
     * @default 3782
     */
    const KEY_Hangul_YE: number;

    /**
     * @default 3781
     */
    const KEY_Hangul_YEO: number;

    /**
     * @default 3794
     */
    const KEY_Hangul_YI: number;

    /**
     * @default 3787
     */
    const KEY_Hangul_YO: number;

    /**
     * @default 3792
     */
    const KEY_Hangul_YU: number;

    /**
     * @default 3829
     */
    const KEY_Hangul_YeorinHieuh: number;

    /**
     * @default 65406
     */
    const KEY_Hangul_switch: number;

    /**
     * @default 65321
     */
    const KEY_Hankaku: number;

    /**
     * @default 678
     */
    const KEY_Hcircumflex: number;

    /**
     * @default 65406
     */
    const KEY_Hebrew_switch: number;

    /**
     * @default 65386
     */
    const KEY_Help: number;

    /**
     * @default 65315
     */
    const KEY_Henkan: number;

    /**
     * @default 65315
     */
    const KEY_Henkan_Mode: number;

    /**
     * @default 269025192
     */
    const KEY_Hibernate: number;

    /**
     * @default 65317
     */
    const KEY_Hiragana: number;

    /**
     * @default 65319
     */
    const KEY_Hiragana_Katakana: number;

    /**
     * @default 269025079
     */
    const KEY_History: number;

    /**
     * @default 65360
     */
    const KEY_Home: number;

    /**
     * @default 269025048
     */
    const KEY_HomePage: number;

    /**
     * @default 269025082
     */
    const KEY_HotLinks: number;

    /**
     * @default 673
     */
    const KEY_Hstroke: number;

    /**
     * @default 65517
     */
    const KEY_Hyper_L: number;

    /**
     * @default 65518
     */
    const KEY_Hyper_R: number;

    /**
     * @default 73
     */
    const KEY_I: number;

    /**
     * @default 65075
     */
    const KEY_ISO_Center_Object: number;

    /**
     * @default 65072
     */
    const KEY_ISO_Continuous_Underline: number;

    /**
     * @default 65073
     */
    const KEY_ISO_Discontinuous_Underline: number;

    /**
     * @default 65074
     */
    const KEY_ISO_Emphasize: number;

    /**
     * @default 65076
     */
    const KEY_ISO_Enter: number;

    /**
     * @default 65071
     */
    const KEY_ISO_Fast_Cursor_Down: number;

    /**
     * @default 65068
     */
    const KEY_ISO_Fast_Cursor_Left: number;

    /**
     * @default 65069
     */
    const KEY_ISO_Fast_Cursor_Right: number;

    /**
     * @default 65070
     */
    const KEY_ISO_Fast_Cursor_Up: number;

    /**
     * @default 65036
     */
    const KEY_ISO_First_Group: number;

    /**
     * @default 65037
     */
    const KEY_ISO_First_Group_Lock: number;

    /**
     * @default 65030
     */
    const KEY_ISO_Group_Latch: number;

    /**
     * @default 65031
     */
    const KEY_ISO_Group_Lock: number;

    /**
     * @default 65406
     */
    const KEY_ISO_Group_Shift: number;

    /**
     * @default 65038
     */
    const KEY_ISO_Last_Group: number;

    /**
     * @default 65039
     */
    const KEY_ISO_Last_Group_Lock: number;

    /**
     * @default 65056
     */
    const KEY_ISO_Left_Tab: number;

    /**
     * @default 65026
     */
    const KEY_ISO_Level2_Latch: number;

    /**
     * @default 65028
     */
    const KEY_ISO_Level3_Latch: number;

    /**
     * @default 65029
     */
    const KEY_ISO_Level3_Lock: number;

    /**
     * @default 65027
     */
    const KEY_ISO_Level3_Shift: number;

    /**
     * @default 65042
     */
    const KEY_ISO_Level5_Latch: number;

    /**
     * @default 65043
     */
    const KEY_ISO_Level5_Lock: number;

    /**
     * @default 65041
     */
    const KEY_ISO_Level5_Shift: number;

    /**
     * @default 65025
     */
    const KEY_ISO_Lock: number;

    /**
     * @default 65058
     */
    const KEY_ISO_Move_Line_Down: number;

    /**
     * @default 65057
     */
    const KEY_ISO_Move_Line_Up: number;

    /**
     * @default 65032
     */
    const KEY_ISO_Next_Group: number;

    /**
     * @default 65033
     */
    const KEY_ISO_Next_Group_Lock: number;

    /**
     * @default 65060
     */
    const KEY_ISO_Partial_Line_Down: number;

    /**
     * @default 65059
     */
    const KEY_ISO_Partial_Line_Up: number;

    /**
     * @default 65061
     */
    const KEY_ISO_Partial_Space_Left: number;

    /**
     * @default 65062
     */
    const KEY_ISO_Partial_Space_Right: number;

    /**
     * @default 65034
     */
    const KEY_ISO_Prev_Group: number;

    /**
     * @default 65035
     */
    const KEY_ISO_Prev_Group_Lock: number;

    /**
     * @default 65067
     */
    const KEY_ISO_Release_Both_Margins: number;

    /**
     * @default 65065
     */
    const KEY_ISO_Release_Margin_Left: number;

    /**
     * @default 65066
     */
    const KEY_ISO_Release_Margin_Right: number;

    /**
     * @default 65063
     */
    const KEY_ISO_Set_Margin_Left: number;

    /**
     * @default 65064
     */
    const KEY_ISO_Set_Margin_Right: number;

    /**
     * @default 681
     */
    const KEY_Iabovedot: number;

    /**
     * @default 205
     */
    const KEY_Iacute: number;

    /**
     * @default 16785098
     */
    const KEY_Ibelowdot: number;

    /**
     * @default 16777516
     */
    const KEY_Ibreve: number;

    /**
     * @default 206
     */
    const KEY_Icircumflex: number;

    /**
     * @default 207
     */
    const KEY_Idiaeresis: number;

    /**
     * @default 204
     */
    const KEY_Igrave: number;

    /**
     * @default 16785096
     */
    const KEY_Ihook: number;

    /**
     * @default 975
     */
    const KEY_Imacron: number;

    /**
     * @default 65379
     */
    const KEY_Insert: number;

    /**
     * @default 967
     */
    const KEY_Iogonek: number;

    /**
     * @default 933
     */
    const KEY_Itilde: number;

    /**
     * @default 74
     */
    const KEY_J: number;

    /**
     * @default 684
     */
    const KEY_Jcircumflex: number;

    /**
     * @default 75
     */
    const KEY_K: number;

    /**
     * @default 65456
     */
    const KEY_KP_0: number;

    /**
     * @default 65457
     */
    const KEY_KP_1: number;

    /**
     * @default 65458
     */
    const KEY_KP_2: number;

    /**
     * @default 65459
     */
    const KEY_KP_3: number;

    /**
     * @default 65460
     */
    const KEY_KP_4: number;

    /**
     * @default 65461
     */
    const KEY_KP_5: number;

    /**
     * @default 65462
     */
    const KEY_KP_6: number;

    /**
     * @default 65463
     */
    const KEY_KP_7: number;

    /**
     * @default 65464
     */
    const KEY_KP_8: number;

    /**
     * @default 65465
     */
    const KEY_KP_9: number;

    /**
     * @default 65451
     */
    const KEY_KP_Add: number;

    /**
     * @default 65437
     */
    const KEY_KP_Begin: number;

    /**
     * @default 65454
     */
    const KEY_KP_Decimal: number;

    /**
     * @default 65439
     */
    const KEY_KP_Delete: number;

    /**
     * @default 65455
     */
    const KEY_KP_Divide: number;

    /**
     * @default 65433
     */
    const KEY_KP_Down: number;

    /**
     * @default 65436
     */
    const KEY_KP_End: number;

    /**
     * @default 65421
     */
    const KEY_KP_Enter: number;

    /**
     * @default 65469
     */
    const KEY_KP_Equal: number;

    /**
     * @default 65425
     */
    const KEY_KP_F1: number;

    /**
     * @default 65426
     */
    const KEY_KP_F2: number;

    /**
     * @default 65427
     */
    const KEY_KP_F3: number;

    /**
     * @default 65428
     */
    const KEY_KP_F4: number;

    /**
     * @default 65429
     */
    const KEY_KP_Home: number;

    /**
     * @default 65438
     */
    const KEY_KP_Insert: number;

    /**
     * @default 65430
     */
    const KEY_KP_Left: number;

    /**
     * @default 65450
     */
    const KEY_KP_Multiply: number;

    /**
     * @default 65435
     */
    const KEY_KP_Next: number;

    /**
     * @default 65435
     */
    const KEY_KP_Page_Down: number;

    /**
     * @default 65434
     */
    const KEY_KP_Page_Up: number;

    /**
     * @default 65434
     */
    const KEY_KP_Prior: number;

    /**
     * @default 65432
     */
    const KEY_KP_Right: number;

    /**
     * @default 65452
     */
    const KEY_KP_Separator: number;

    /**
     * @default 65408
     */
    const KEY_KP_Space: number;

    /**
     * @default 65453
     */
    const KEY_KP_Subtract: number;

    /**
     * @default 65417
     */
    const KEY_KP_Tab: number;

    /**
     * @default 65431
     */
    const KEY_KP_Up: number;

    /**
     * @default 65325
     */
    const KEY_Kana_Lock: number;

    /**
     * @default 65326
     */
    const KEY_Kana_Shift: number;

    /**
     * @default 65313
     */
    const KEY_Kanji: number;

    /**
     * @default 65335
     */
    const KEY_Kanji_Bangou: number;

    /**
     * @default 65318
     */
    const KEY_Katakana: number;

    /**
     * @default 269025030
     */
    const KEY_KbdBrightnessDown: number;

    /**
     * @default 269025029
     */
    const KEY_KbdBrightnessUp: number;

    /**
     * @default 269025028
     */
    const KEY_KbdLightOnOff: number;

    /**
     * @default 979
     */
    const KEY_Kcedilla: number;

    /**
     * @default 269025203
     */
    const KEY_Keyboard: number;

    /**
     * @default 3839
     */
    const KEY_Korean_Won: number;

    /**
     * @default 76
     */
    const KEY_L: number;

    /**
     * @default 65480
     */
    const KEY_L1: number;

    /**
     * @default 65489
     */
    const KEY_L10: number;

    /**
     * @default 65481
     */
    const KEY_L2: number;

    /**
     * @default 65482
     */
    const KEY_L3: number;

    /**
     * @default 65483
     */
    const KEY_L4: number;

    /**
     * @default 65484
     */
    const KEY_L5: number;

    /**
     * @default 65485
     */
    const KEY_L6: number;

    /**
     * @default 65486
     */
    const KEY_L7: number;

    /**
     * @default 65487
     */
    const KEY_L8: number;

    /**
     * @default 65488
     */
    const KEY_L9: number;

    /**
     * @default 453
     */
    const KEY_Lacute: number;

    /**
     * @default 65236
     */
    const KEY_Last_Virtual_Screen: number;

    /**
     * @default 269025088
     */
    const KEY_Launch0: number;

    /**
     * @default 269025089
     */
    const KEY_Launch1: number;

    /**
     * @default 269025090
     */
    const KEY_Launch2: number;

    /**
     * @default 269025091
     */
    const KEY_Launch3: number;

    /**
     * @default 269025092
     */
    const KEY_Launch4: number;

    /**
     * @default 269025093
     */
    const KEY_Launch5: number;

    /**
     * @default 269025094
     */
    const KEY_Launch6: number;

    /**
     * @default 269025095
     */
    const KEY_Launch7: number;

    /**
     * @default 269025096
     */
    const KEY_Launch8: number;

    /**
     * @default 269025097
     */
    const KEY_Launch9: number;

    /**
     * @default 269025098
     */
    const KEY_LaunchA: number;

    /**
     * @default 269025099
     */
    const KEY_LaunchB: number;

    /**
     * @default 269025100
     */
    const KEY_LaunchC: number;

    /**
     * @default 269025101
     */
    const KEY_LaunchD: number;

    /**
     * @default 269025102
     */
    const KEY_LaunchE: number;

    /**
     * @default 269025103
     */
    const KEY_LaunchF: number;

    /**
     * @default 16784950
     */
    const KEY_Lbelowdot: number;

    /**
     * @default 421
     */
    const KEY_Lcaron: number;

    /**
     * @default 934
     */
    const KEY_Lcedilla: number;

    /**
     * @default 65361
     */
    const KEY_Left: number;

    /**
     * @default 269025077
     */
    const KEY_LightBulb: number;

    /**
     * @default 65290
     */
    const KEY_Linefeed: number;

    /**
     * @default 16785572
     */
    const KEY_LiraSign: number;

    /**
     * @default 269024805
     */
    const KEY_LogGrabInfo: number;

    /**
     * @default 269025121
     */
    const KEY_LogOff: number;

    /**
     * @default 269024804
     */
    const KEY_LogWindowTree: number;

    /**
     * @default 419
     */
    const KEY_Lstroke: number;

    /**
     * @default 77
     */
    const KEY_M: number;

    /**
     * @default 16784960
     */
    const KEY_Mabovedot: number;

    /**
     * @default 1717
     */
    const KEY_Macedonia_DSE: number;

    /**
     * @default 1714
     */
    const KEY_Macedonia_GJE: number;

    /**
     * @default 1724
     */
    const KEY_Macedonia_KJE: number;

    /**
     * @default 1701
     */
    const KEY_Macedonia_dse: number;

    /**
     * @default 1698
     */
    const KEY_Macedonia_gje: number;

    /**
     * @default 1708
     */
    const KEY_Macedonia_kje: number;

    /**
     * @default 65342
     */
    const KEY_Mae_Koho: number;

    /**
     * @default 269025049
     */
    const KEY_Mail: number;

    /**
     * @default 269025168
     */
    const KEY_MailForward: number;

    /**
     * @default 269025122
     */
    const KEY_Market: number;

    /**
     * @default 65324
     */
    const KEY_Massyo: number;

    /**
     * @default 269025123
     */
    const KEY_Meeting: number;

    /**
     * @default 269025054
     */
    const KEY_Memo: number;

    /**
     * @default 65383
     */
    const KEY_Menu: number;

    /**
     * @default 269025125
     */
    const KEY_MenuKB: number;

    /**
     * @default 269025126
     */
    const KEY_MenuPB: number;

    /**
     * @default 269025166
     */
    const KEY_Messenger: number;

    /**
     * @default 65511
     */
    const KEY_Meta_L: number;

    /**
     * @default 65512
     */
    const KEY_Meta_R: number;

    /**
     * @default 16785573
     */
    const KEY_MillSign: number;

    /**
     * @default 269025025
     */
    const KEY_ModeLock: number;

    /**
     * @default 65406
     */
    const KEY_Mode_switch: number;

    /**
     * @default 269025027
     */
    const KEY_MonBrightnessDown: number;

    /**
     * @default 269025026
     */
    const KEY_MonBrightnessUp: number;

    /**
     * @default 65143
     */
    const KEY_MouseKeys_Accel_Enable: number;

    /**
     * @default 65142
     */
    const KEY_MouseKeys_Enable: number;

    /**
     * @default 65314
     */
    const KEY_Muhenkan: number;

    /**
     * @default 65312
     */
    const KEY_Multi_key: number;

    /**
     * @default 65341
     */
    const KEY_MultipleCandidate: number;

    /**
     * @default 269025170
     */
    const KEY_Music: number;

    /**
     * @default 269025075
     */
    const KEY_MyComputer: number;

    /**
     * @default 269025127
     */
    const KEY_MySites: number;

    /**
     * @default 78
     */
    const KEY_N: number;

    /**
     * @default 465
     */
    const KEY_Nacute: number;

    /**
     * @default 16785574
     */
    const KEY_NairaSign: number;

    /**
     * @default 466
     */
    const KEY_Ncaron: number;

    /**
     * @default 977
     */
    const KEY_Ncedilla: number;

    /**
     * @default 269025128
     */
    const KEY_New: number;

    /**
     * @default 16785578
     */
    const KEY_NewSheqelSign: number;

    /**
     * @default 269025129
     */
    const KEY_News: number;

    /**
     * @default 65366
     */
    const KEY_Next: number;

    /**
     * @default 269024802
     */
    const KEY_Next_VMode: number;

    /**
     * @default 65234
     */
    const KEY_Next_Virtual_Screen: number;

    /**
     * @default 209
     */
    const KEY_Ntilde: number;

    /**
     * @default 65407
     */
    const KEY_Num_Lock: number;

    /**
     * @default 79
     */
    const KEY_O: number;

    /**
     * @default 5052
     */
    const KEY_OE: number;

    /**
     * @default 211
     */
    const KEY_Oacute: number;

    /**
     * @default 16777631
     */
    const KEY_Obarred: number;

    /**
     * @default 16785100
     */
    const KEY_Obelowdot: number;

    /**
     * @default 16777681
     */
    const KEY_Ocaron: number;

    /**
     * @default 212
     */
    const KEY_Ocircumflex: number;

    /**
     * @default 16785104
     */
    const KEY_Ocircumflexacute: number;

    /**
     * @default 16785112
     */
    const KEY_Ocircumflexbelowdot: number;

    /**
     * @default 16785106
     */
    const KEY_Ocircumflexgrave: number;

    /**
     * @default 16785108
     */
    const KEY_Ocircumflexhook: number;

    /**
     * @default 16785110
     */
    const KEY_Ocircumflextilde: number;

    /**
     * @default 214
     */
    const KEY_Odiaeresis: number;

    /**
     * @default 469
     */
    const KEY_Odoubleacute: number;

    /**
     * @default 269025130
     */
    const KEY_OfficeHome: number;

    /**
     * @default 210
     */
    const KEY_Ograve: number;

    /**
     * @default 16785102
     */
    const KEY_Ohook: number;

    /**
     * @default 16777632
     */
    const KEY_Ohorn: number;

    /**
     * @default 16785114
     */
    const KEY_Ohornacute: number;

    /**
     * @default 16785122
     */
    const KEY_Ohornbelowdot: number;

    /**
     * @default 16785116
     */
    const KEY_Ohorngrave: number;

    /**
     * @default 16785118
     */
    const KEY_Ohornhook: number;

    /**
     * @default 16785120
     */
    const KEY_Ohorntilde: number;

    /**
     * @default 978
     */
    const KEY_Omacron: number;

    /**
     * @default 216
     */
    const KEY_Ooblique: number;

    /**
     * @default 269025131
     */
    const KEY_Open: number;

    /**
     * @default 269025080
     */
    const KEY_OpenURL: number;

    /**
     * @default 269025132
     */
    const KEY_Option: number;

    /**
     * @default 216
     */
    const KEY_Oslash: number;

    /**
     * @default 213
     */
    const KEY_Otilde: number;

    /**
     * @default 65144
     */
    const KEY_Overlay1_Enable: number;

    /**
     * @default 65145
     */
    const KEY_Overlay2_Enable: number;

    /**
     * @default 80
     */
    const KEY_P: number;

    /**
     * @default 16784982
     */
    const KEY_Pabovedot: number;

    /**
     * @default 65366
     */
    const KEY_Page_Down: number;

    /**
     * @default 65365
     */
    const KEY_Page_Up: number;

    /**
     * @default 269025133
     */
    const KEY_Paste: number;

    /**
     * @default 65299
     */
    const KEY_Pause: number;

    /**
     * @default 16785575
     */
    const KEY_PesetaSign: number;

    /**
     * @default 269025134
     */
    const KEY_Phone: number;

    /**
     * @default 269025169
     */
    const KEY_Pictures: number;

    /**
     * @default 65274
     */
    const KEY_Pointer_Accelerate: number;

    /**
     * @default 65257
     */
    const KEY_Pointer_Button1: number;

    /**
     * @default 65258
     */
    const KEY_Pointer_Button2: number;

    /**
     * @default 65259
     */
    const KEY_Pointer_Button3: number;

    /**
     * @default 65260
     */
    const KEY_Pointer_Button4: number;

    /**
     * @default 65261
     */
    const KEY_Pointer_Button5: number;

    /**
     * @default 65256
     */
    const KEY_Pointer_Button_Dflt: number;

    /**
     * @default 65263
     */
    const KEY_Pointer_DblClick1: number;

    /**
     * @default 65264
     */
    const KEY_Pointer_DblClick2: number;

    /**
     * @default 65265
     */
    const KEY_Pointer_DblClick3: number;

    /**
     * @default 65266
     */
    const KEY_Pointer_DblClick4: number;

    /**
     * @default 65267
     */
    const KEY_Pointer_DblClick5: number;

    /**
     * @default 65262
     */
    const KEY_Pointer_DblClick_Dflt: number;

    /**
     * @default 65275
     */
    const KEY_Pointer_DfltBtnNext: number;

    /**
     * @default 65276
     */
    const KEY_Pointer_DfltBtnPrev: number;

    /**
     * @default 65251
     */
    const KEY_Pointer_Down: number;

    /**
     * @default 65254
     */
    const KEY_Pointer_DownLeft: number;

    /**
     * @default 65255
     */
    const KEY_Pointer_DownRight: number;

    /**
     * @default 65269
     */
    const KEY_Pointer_Drag1: number;

    /**
     * @default 65270
     */
    const KEY_Pointer_Drag2: number;

    /**
     * @default 65271
     */
    const KEY_Pointer_Drag3: number;

    /**
     * @default 65272
     */
    const KEY_Pointer_Drag4: number;

    /**
     * @default 65277
     */
    const KEY_Pointer_Drag5: number;

    /**
     * @default 65268
     */
    const KEY_Pointer_Drag_Dflt: number;

    /**
     * @default 65273
     */
    const KEY_Pointer_EnableKeys: number;

    /**
     * @default 65248
     */
    const KEY_Pointer_Left: number;

    /**
     * @default 65249
     */
    const KEY_Pointer_Right: number;

    /**
     * @default 65250
     */
    const KEY_Pointer_Up: number;

    /**
     * @default 65252
     */
    const KEY_Pointer_UpLeft: number;

    /**
     * @default 65253
     */
    const KEY_Pointer_UpRight: number;

    /**
     * @default 269025057
     */
    const KEY_PowerDown: number;

    /**
     * @default 269025066
     */
    const KEY_PowerOff: number;

    /**
     * @default 269024803
     */
    const KEY_Prev_VMode: number;

    /**
     * @default 65233
     */
    const KEY_Prev_Virtual_Screen: number;

    /**
     * @default 65342
     */
    const KEY_PreviousCandidate: number;

    /**
     * @default 65377
     */
    const KEY_Print: number;

    /**
     * @default 65365
     */
    const KEY_Prior: number;

    /**
     * @default 81
     */
    const KEY_Q: number;

    /**
     * @default 82
     */
    const KEY_R: number;

    /**
     * @default 65490
     */
    const KEY_R1: number;

    /**
     * @default 65499
     */
    const KEY_R10: number;

    /**
     * @default 65500
     */
    const KEY_R11: number;

    /**
     * @default 65501
     */
    const KEY_R12: number;

    /**
     * @default 65502
     */
    const KEY_R13: number;

    /**
     * @default 65503
     */
    const KEY_R14: number;

    /**
     * @default 65504
     */
    const KEY_R15: number;

    /**
     * @default 65491
     */
    const KEY_R2: number;

    /**
     * @default 65492
     */
    const KEY_R3: number;

    /**
     * @default 65493
     */
    const KEY_R4: number;

    /**
     * @default 65494
     */
    const KEY_R5: number;

    /**
     * @default 65495
     */
    const KEY_R6: number;

    /**
     * @default 65496
     */
    const KEY_R7: number;

    /**
     * @default 65497
     */
    const KEY_R8: number;

    /**
     * @default 65498
     */
    const KEY_R9: number;

    /**
     * @default 269025205
     */
    const KEY_RFKill: number;

    /**
     * @default 448
     */
    const KEY_Racute: number;

    /**
     * @default 472
     */
    const KEY_Rcaron: number;

    /**
     * @default 931
     */
    const KEY_Rcedilla: number;

    /**
     * @default 269025187
     */
    const KEY_Red: number;

    /**
     * @default 65382
     */
    const KEY_Redo: number;

    /**
     * @default 269025065
     */
    const KEY_Refresh: number;

    /**
     * @default 269025139
     */
    const KEY_Reload: number;

    /**
     * @default 65138
     */
    const KEY_RepeatKeys_Enable: number;

    /**
     * @default 269025138
     */
    const KEY_Reply: number;

    /**
     * @default 65293
     */
    const KEY_Return: number;

    /**
     * @default 65363
     */
    const KEY_Right: number;

    /**
     * @default 269025060
     */
    const KEY_RockerDown: number;

    /**
     * @default 269025061
     */
    const KEY_RockerEnter: number;

    /**
     * @default 269025059
     */
    const KEY_RockerUp: number;

    /**
     * @default 65316
     */
    const KEY_Romaji: number;

    /**
     * @default 269025140
     */
    const KEY_RotateWindows: number;

    /**
     * @default 269025142
     */
    const KEY_RotationKB: number;

    /**
     * @default 269025141
     */
    const KEY_RotationPB: number;

    /**
     * @default 16785576
     */
    const KEY_RupeeSign: number;

    /**
     * @default 83
     */
    const KEY_S: number;

    /**
     * @default 16777615
     */
    const KEY_SCHWA: number;

    /**
     * @default 16784992
     */
    const KEY_Sabovedot: number;

    /**
     * @default 422
     */
    const KEY_Sacute: number;

    /**
     * @default 269025143
     */
    const KEY_Save: number;

    /**
     * @default 425
     */
    const KEY_Scaron: number;

    /**
     * @default 426
     */
    const KEY_Scedilla: number;

    /**
     * @default 734
     */
    const KEY_Scircumflex: number;

    /**
     * @default 269025069
     */
    const KEY_ScreenSaver: number;

    /**
     * @default 269025146
     */
    const KEY_ScrollClick: number;

    /**
     * @default 269025145
     */
    const KEY_ScrollDown: number;

    /**
     * @default 269025144
     */
    const KEY_ScrollUp: number;

    /**
     * @default 65300
     */
    const KEY_Scroll_Lock: number;

    /**
     * @default 269025051
     */
    const KEY_Search: number;

    /**
     * @default 65376
     */
    const KEY_Select: number;

    /**
     * @default 269025184
     */
    const KEY_SelectButton: number;

    /**
     * @default 269025147
     */
    const KEY_Send: number;

    /**
     * @default 1713
     */
    const KEY_Serbian_DJE: number;

    /**
     * @default 1727
     */
    const KEY_Serbian_DZE: number;

    /**
     * @default 1720
     */
    const KEY_Serbian_JE: number;

    /**
     * @default 1721
     */
    const KEY_Serbian_LJE: number;

    /**
     * @default 1722
     */
    const KEY_Serbian_NJE: number;

    /**
     * @default 1723
     */
    const KEY_Serbian_TSHE: number;

    /**
     * @default 1697
     */
    const KEY_Serbian_dje: number;

    /**
     * @default 1711
     */
    const KEY_Serbian_dze: number;

    /**
     * @default 1704
     */
    const KEY_Serbian_je: number;

    /**
     * @default 1705
     */
    const KEY_Serbian_lje: number;

    /**
     * @default 1706
     */
    const KEY_Serbian_nje: number;

    /**
     * @default 1707
     */
    const KEY_Serbian_tshe: number;

    /**
     * @default 65505
     */
    const KEY_Shift_L: number;

    /**
     * @default 65510
     */
    const KEY_Shift_Lock: number;

    /**
     * @default 65506
     */
    const KEY_Shift_R: number;

    /**
     * @default 269025078
     */
    const KEY_Shop: number;

    /**
     * @default 65340
     */
    const KEY_SingleCandidate: number;

    /**
     * @default 16780677
     */
    const KEY_Sinh_a: number;

    /**
     * @default 16780678
     */
    const KEY_Sinh_aa: number;

    /**
     * @default 16780751
     */
    const KEY_Sinh_aa2: number;

    /**
     * @default 16780679
     */
    const KEY_Sinh_ae: number;

    /**
     * @default 16780752
     */
    const KEY_Sinh_ae2: number;

    /**
     * @default 16780680
     */
    const KEY_Sinh_aee: number;

    /**
     * @default 16780753
     */
    const KEY_Sinh_aee2: number;

    /**
     * @default 16780691
     */
    const KEY_Sinh_ai: number;

    /**
     * @default 16780763
     */
    const KEY_Sinh_ai2: number;

    /**
     * @default 16780746
     */
    const KEY_Sinh_al: number;

    /**
     * @default 16780694
     */
    const KEY_Sinh_au: number;

    /**
     * @default 16780766
     */
    const KEY_Sinh_au2: number;

    /**
     * @default 16780726
     */
    const KEY_Sinh_ba: number;

    /**
     * @default 16780727
     */
    const KEY_Sinh_bha: number;

    /**
     * @default 16780704
     */
    const KEY_Sinh_ca: number;

    /**
     * @default 16780705
     */
    const KEY_Sinh_cha: number;

    /**
     * @default 16780713
     */
    const KEY_Sinh_dda: number;

    /**
     * @default 16780714
     */
    const KEY_Sinh_ddha: number;

    /**
     * @default 16780719
     */
    const KEY_Sinh_dha: number;

    /**
     * @default 16780720
     */
    const KEY_Sinh_dhha: number;

    /**
     * @default 16780689
     */
    const KEY_Sinh_e: number;

    /**
     * @default 16780761
     */
    const KEY_Sinh_e2: number;

    /**
     * @default 16780690
     */
    const KEY_Sinh_ee: number;

    /**
     * @default 16780762
     */
    const KEY_Sinh_ee2: number;

    /**
     * @default 16780742
     */
    const KEY_Sinh_fa: number;

    /**
     * @default 16780700
     */
    const KEY_Sinh_ga: number;

    /**
     * @default 16780701
     */
    const KEY_Sinh_gha: number;

    /**
     * @default 16780675
     */
    const KEY_Sinh_h2: number;

    /**
     * @default 16780740
     */
    const KEY_Sinh_ha: number;

    /**
     * @default 16780681
     */
    const KEY_Sinh_i: number;

    /**
     * @default 16780754
     */
    const KEY_Sinh_i2: number;

    /**
     * @default 16780682
     */
    const KEY_Sinh_ii: number;

    /**
     * @default 16780755
     */
    const KEY_Sinh_ii2: number;

    /**
     * @default 16780706
     */
    const KEY_Sinh_ja: number;

    /**
     * @default 16780707
     */
    const KEY_Sinh_jha: number;

    /**
     * @default 16780709
     */
    const KEY_Sinh_jnya: number;

    /**
     * @default 16780698
     */
    const KEY_Sinh_ka: number;

    /**
     * @default 16780699
     */
    const KEY_Sinh_kha: number;

    /**
     * @default 16780788
     */
    const KEY_Sinh_kunddaliya: number;

    /**
     * @default 16780733
     */
    const KEY_Sinh_la: number;

    /**
     * @default 16780741
     */
    const KEY_Sinh_lla: number;

    /**
     * @default 16780687
     */
    const KEY_Sinh_lu: number;

    /**
     * @default 16780767
     */
    const KEY_Sinh_lu2: number;

    /**
     * @default 16780688
     */
    const KEY_Sinh_luu: number;

    /**
     * @default 16780787
     */
    const KEY_Sinh_luu2: number;

    /**
     * @default 16780728
     */
    const KEY_Sinh_ma: number;

    /**
     * @default 16780729
     */
    const KEY_Sinh_mba: number;

    /**
     * @default 16780721
     */
    const KEY_Sinh_na: number;

    /**
     * @default 16780716
     */
    const KEY_Sinh_ndda: number;

    /**
     * @default 16780723
     */
    const KEY_Sinh_ndha: number;

    /**
     * @default 16780674
     */
    const KEY_Sinh_ng: number;

    /**
     * @default 16780702
     */
    const KEY_Sinh_ng2: number;

    /**
     * @default 16780703
     */
    const KEY_Sinh_nga: number;

    /**
     * @default 16780710
     */
    const KEY_Sinh_nja: number;

    /**
     * @default 16780715
     */
    const KEY_Sinh_nna: number;

    /**
     * @default 16780708
     */
    const KEY_Sinh_nya: number;

    /**
     * @default 16780692
     */
    const KEY_Sinh_o: number;

    /**
     * @default 16780764
     */
    const KEY_Sinh_o2: number;

    /**
     * @default 16780693
     */
    const KEY_Sinh_oo: number;

    /**
     * @default 16780765
     */
    const KEY_Sinh_oo2: number;

    /**
     * @default 16780724
     */
    const KEY_Sinh_pa: number;

    /**
     * @default 16780725
     */
    const KEY_Sinh_pha: number;

    /**
     * @default 16780731
     */
    const KEY_Sinh_ra: number;

    /**
     * @default 16780685
     */
    const KEY_Sinh_ri: number;

    /**
     * @default 16780686
     */
    const KEY_Sinh_rii: number;

    /**
     * @default 16780760
     */
    const KEY_Sinh_ru2: number;

    /**
     * @default 16780786
     */
    const KEY_Sinh_ruu2: number;

    /**
     * @default 16780739
     */
    const KEY_Sinh_sa: number;

    /**
     * @default 16780737
     */
    const KEY_Sinh_sha: number;

    /**
     * @default 16780738
     */
    const KEY_Sinh_ssha: number;

    /**
     * @default 16780717
     */
    const KEY_Sinh_tha: number;

    /**
     * @default 16780718
     */
    const KEY_Sinh_thha: number;

    /**
     * @default 16780711
     */
    const KEY_Sinh_tta: number;

    /**
     * @default 16780712
     */
    const KEY_Sinh_ttha: number;

    /**
     * @default 16780683
     */
    const KEY_Sinh_u: number;

    /**
     * @default 16780756
     */
    const KEY_Sinh_u2: number;

    /**
     * @default 16780684
     */
    const KEY_Sinh_uu: number;

    /**
     * @default 16780758
     */
    const KEY_Sinh_uu2: number;

    /**
     * @default 16780736
     */
    const KEY_Sinh_va: number;

    /**
     * @default 16780730
     */
    const KEY_Sinh_ya: number;

    /**
     * @default 269025071
     */
    const KEY_Sleep: number;

    /**
     * @default 65139
     */
    const KEY_SlowKeys_Enable: number;

    /**
     * @default 269025148
     */
    const KEY_Spell: number;

    /**
     * @default 269025149
     */
    const KEY_SplitScreen: number;

    /**
     * @default 269025040
     */
    const KEY_Standby: number;

    /**
     * @default 269025050
     */
    const KEY_Start: number;

    /**
     * @default 65141
     */
    const KEY_StickyKeys_Enable: number;

    /**
     * @default 269025064
     */
    const KEY_Stop: number;

    /**
     * @default 269025178
     */
    const KEY_Subtitle: number;

    /**
     * @default 65515
     */
    const KEY_Super_L: number;

    /**
     * @default 65516
     */
    const KEY_Super_R: number;

    /**
     * @default 269025150
     */
    const KEY_Support: number;

    /**
     * @default 269025191
     */
    const KEY_Suspend: number;

    /**
     * @default 269024769
     */
    const KEY_Switch_VT_1: number;

    /**
     * @default 269024778
     */
    const KEY_Switch_VT_10: number;

    /**
     * @default 269024779
     */
    const KEY_Switch_VT_11: number;

    /**
     * @default 269024780
     */
    const KEY_Switch_VT_12: number;

    /**
     * @default 269024770
     */
    const KEY_Switch_VT_2: number;

    /**
     * @default 269024771
     */
    const KEY_Switch_VT_3: number;

    /**
     * @default 269024772
     */
    const KEY_Switch_VT_4: number;

    /**
     * @default 269024773
     */
    const KEY_Switch_VT_5: number;

    /**
     * @default 269024774
     */
    const KEY_Switch_VT_6: number;

    /**
     * @default 269024775
     */
    const KEY_Switch_VT_7: number;

    /**
     * @default 269024776
     */
    const KEY_Switch_VT_8: number;

    /**
     * @default 269024777
     */
    const KEY_Switch_VT_9: number;

    /**
     * @default 65301
     */
    const KEY_Sys_Req: number;

    /**
     * @default 84
     */
    const KEY_T: number;

    /**
     * @default 222
     */
    const KEY_THORN: number;

    /**
     * @default 65289
     */
    const KEY_Tab: number;

    /**
     * @default 16785002
     */
    const KEY_Tabovedot: number;

    /**
     * @default 269025151
     */
    const KEY_TaskPane: number;

    /**
     * @default 427
     */
    const KEY_Tcaron: number;

    /**
     * @default 478
     */
    const KEY_Tcedilla: number;

    /**
     * @default 269025152
     */
    const KEY_Terminal: number;

    /**
     * @default 65237
     */
    const KEY_Terminate_Server: number;

    /**
     * @default 3551
     */
    const KEY_Thai_baht: number;

    /**
     * @default 3514
     */
    const KEY_Thai_bobaimai: number;

    /**
     * @default 3496
     */
    const KEY_Thai_chochan: number;

    /**
     * @default 3498
     */
    const KEY_Thai_chochang: number;

    /**
     * @default 3497
     */
    const KEY_Thai_choching: number;

    /**
     * @default 3500
     */
    const KEY_Thai_chochoe: number;

    /**
     * @default 3502
     */
    const KEY_Thai_dochada: number;

    /**
     * @default 3508
     */
    const KEY_Thai_dodek: number;

    /**
     * @default 3517
     */
    const KEY_Thai_fofa: number;

    /**
     * @default 3519
     */
    const KEY_Thai_fofan: number;

    /**
     * @default 3531
     */
    const KEY_Thai_hohip: number;

    /**
     * @default 3534
     */
    const KEY_Thai_honokhuk: number;

    /**
     * @default 3490
     */
    const KEY_Thai_khokhai: number;

    /**
     * @default 3493
     */
    const KEY_Thai_khokhon: number;

    /**
     * @default 3491
     */
    const KEY_Thai_khokhuat: number;

    /**
     * @default 3492
     */
    const KEY_Thai_khokhwai: number;

    /**
     * @default 3494
     */
    const KEY_Thai_khorakhang: number;

    /**
     * @default 3489
     */
    const KEY_Thai_kokai: number;

    /**
     * @default 3557
     */
    const KEY_Thai_lakkhangyao: number;

    /**
     * @default 3575
     */
    const KEY_Thai_lekchet: number;

    /**
     * @default 3573
     */
    const KEY_Thai_lekha: number;

    /**
     * @default 3574
     */
    const KEY_Thai_lekhok: number;

    /**
     * @default 3577
     */
    const KEY_Thai_lekkao: number;

    /**
     * @default 3569
     */
    const KEY_Thai_leknung: number;

    /**
     * @default 3576
     */
    const KEY_Thai_lekpaet: number;

    /**
     * @default 3571
     */
    const KEY_Thai_leksam: number;

    /**
     * @default 3572
     */
    const KEY_Thai_leksi: number;

    /**
     * @default 3570
     */
    const KEY_Thai_leksong: number;

    /**
     * @default 3568
     */
    const KEY_Thai_leksun: number;

    /**
     * @default 3532
     */
    const KEY_Thai_lochula: number;

    /**
     * @default 3525
     */
    const KEY_Thai_loling: number;

    /**
     * @default 3526
     */
    const KEY_Thai_lu: number;

    /**
     * @default 3563
     */
    const KEY_Thai_maichattawa: number;

    /**
     * @default 3560
     */
    const KEY_Thai_maiek: number;

    /**
     * @default 3537
     */
    const KEY_Thai_maihanakat: number;

    /**
     * @default 3550
     */
    const KEY_Thai_maihanakat_maitho: number;

    /**
     * @default 3559
     */
    const KEY_Thai_maitaikhu: number;

    /**
     * @default 3561
     */
    const KEY_Thai_maitho: number;

    /**
     * @default 3562
     */
    const KEY_Thai_maitri: number;

    /**
     * @default 3558
     */
    const KEY_Thai_maiyamok: number;

    /**
     * @default 3521
     */
    const KEY_Thai_moma: number;

    /**
     * @default 3495
     */
    const KEY_Thai_ngongu: number;

    /**
     * @default 3565
     */
    const KEY_Thai_nikhahit: number;

    /**
     * @default 3507
     */
    const KEY_Thai_nonen: number;

    /**
     * @default 3513
     */
    const KEY_Thai_nonu: number;

    /**
     * @default 3533
     */
    const KEY_Thai_oang: number;

    /**
     * @default 3535
     */
    const KEY_Thai_paiyannoi: number;

    /**
     * @default 3546
     */
    const KEY_Thai_phinthu: number;

    /**
     * @default 3518
     */
    const KEY_Thai_phophan: number;

    /**
     * @default 3516
     */
    const KEY_Thai_phophung: number;

    /**
     * @default 3520
     */
    const KEY_Thai_phosamphao: number;

    /**
     * @default 3515
     */
    const KEY_Thai_popla: number;

    /**
     * @default 3523
     */
    const KEY_Thai_rorua: number;

    /**
     * @default 3524
     */
    const KEY_Thai_ru: number;

    /**
     * @default 3536
     */
    const KEY_Thai_saraa: number;

    /**
     * @default 3538
     */
    const KEY_Thai_saraaa: number;

    /**
     * @default 3553
     */
    const KEY_Thai_saraae: number;

    /**
     * @default 3556
     */
    const KEY_Thai_saraaimaimalai: number;

    /**
     * @default 3555
     */
    const KEY_Thai_saraaimaimuan: number;

    /**
     * @default 3539
     */
    const KEY_Thai_saraam: number;

    /**
     * @default 3552
     */
    const KEY_Thai_sarae: number;

    /**
     * @default 3540
     */
    const KEY_Thai_sarai: number;

    /**
     * @default 3541
     */
    const KEY_Thai_saraii: number;

    /**
     * @default 3554
     */
    const KEY_Thai_sarao: number;

    /**
     * @default 3544
     */
    const KEY_Thai_sarau: number;

    /**
     * @default 3542
     */
    const KEY_Thai_saraue: number;

    /**
     * @default 3543
     */
    const KEY_Thai_sarauee: number;

    /**
     * @default 3545
     */
    const KEY_Thai_sarauu: number;

    /**
     * @default 3529
     */
    const KEY_Thai_sorusi: number;

    /**
     * @default 3528
     */
    const KEY_Thai_sosala: number;

    /**
     * @default 3499
     */
    const KEY_Thai_soso: number;

    /**
     * @default 3530
     */
    const KEY_Thai_sosua: number;

    /**
     * @default 3564
     */
    const KEY_Thai_thanthakhat: number;

    /**
     * @default 3505
     */
    const KEY_Thai_thonangmontho: number;

    /**
     * @default 3506
     */
    const KEY_Thai_thophuthao: number;

    /**
     * @default 3511
     */
    const KEY_Thai_thothahan: number;

    /**
     * @default 3504
     */
    const KEY_Thai_thothan: number;

    /**
     * @default 3512
     */
    const KEY_Thai_thothong: number;

    /**
     * @default 3510
     */
    const KEY_Thai_thothung: number;

    /**
     * @default 3503
     */
    const KEY_Thai_topatak: number;

    /**
     * @default 3509
     */
    const KEY_Thai_totao: number;

    /**
     * @default 3527
     */
    const KEY_Thai_wowaen: number;

    /**
     * @default 3522
     */
    const KEY_Thai_yoyak: number;

    /**
     * @default 3501
     */
    const KEY_Thai_yoying: number;

    /**
     * @default 222
     */
    const KEY_Thorn: number;

    /**
     * @default 269025183
     */
    const KEY_Time: number;

    /**
     * @default 269025055
     */
    const KEY_ToDoList: number;

    /**
     * @default 269025153
     */
    const KEY_Tools: number;

    /**
     * @default 269025186
     */
    const KEY_TopMenu: number;

    /**
     * @default 269025201
     */
    const KEY_TouchpadOff: number;

    /**
     * @default 269025200
     */
    const KEY_TouchpadOn: number;

    /**
     * @default 269025193
     */
    const KEY_TouchpadToggle: number;

    /**
     * @default 65323
     */
    const KEY_Touroku: number;

    /**
     * @default 269025154
     */
    const KEY_Travel: number;

    /**
     * @default 940
     */
    const KEY_Tslash: number;

    /**
     * @default 85
     */
    const KEY_U: number;

    /**
     * @default 269025174
     */
    const KEY_UWB: number;

    /**
     * @default 218
     */
    const KEY_Uacute: number;

    /**
     * @default 16785124
     */
    const KEY_Ubelowdot: number;

    /**
     * @default 733
     */
    const KEY_Ubreve: number;

    /**
     * @default 219
     */
    const KEY_Ucircumflex: number;

    /**
     * @default 220
     */
    const KEY_Udiaeresis: number;

    /**
     * @default 475
     */
    const KEY_Udoubleacute: number;

    /**
     * @default 217
     */
    const KEY_Ugrave: number;

    /**
     * @default 16785126
     */
    const KEY_Uhook: number;

    /**
     * @default 16777647
     */
    const KEY_Uhorn: number;

    /**
     * @default 16785128
     */
    const KEY_Uhornacute: number;

    /**
     * @default 16785136
     */
    const KEY_Uhornbelowdot: number;

    /**
     * @default 16785130
     */
    const KEY_Uhorngrave: number;

    /**
     * @default 16785132
     */
    const KEY_Uhornhook: number;

    /**
     * @default 16785134
     */
    const KEY_Uhorntilde: number;

    /**
     * @default 1725
     */
    const KEY_Ukrainian_GHE_WITH_UPTURN: number;

    /**
     * @default 1718
     */
    const KEY_Ukrainian_I: number;

    /**
     * @default 1716
     */
    const KEY_Ukrainian_IE: number;

    /**
     * @default 1719
     */
    const KEY_Ukrainian_YI: number;

    /**
     * @default 1709
     */
    const KEY_Ukrainian_ghe_with_upturn: number;

    /**
     * @default 1702
     */
    const KEY_Ukrainian_i: number;

    /**
     * @default 1700
     */
    const KEY_Ukrainian_ie: number;

    /**
     * @default 1703
     */
    const KEY_Ukrainian_yi: number;

    /**
     * @default 1718
     */
    const KEY_Ukranian_I: number;

    /**
     * @default 1716
     */
    const KEY_Ukranian_JE: number;

    /**
     * @default 1719
     */
    const KEY_Ukranian_YI: number;

    /**
     * @default 1702
     */
    const KEY_Ukranian_i: number;

    /**
     * @default 1700
     */
    const KEY_Ukranian_je: number;

    /**
     * @default 1703
     */
    const KEY_Ukranian_yi: number;

    /**
     * @default 990
     */
    const KEY_Umacron: number;

    /**
     * @default 65381
     */
    const KEY_Undo: number;

    /**
     * @default 269024800
     */
    const KEY_Ungrab: number;

    /**
     * @default 985
     */
    const KEY_Uogonek: number;

    /**
     * @default 65362
     */
    const KEY_Up: number;

    /**
     * @default 473
     */
    const KEY_Uring: number;

    /**
     * @default 269025157
     */
    const KEY_User1KB: number;

    /**
     * @default 269025158
     */
    const KEY_User2KB: number;

    /**
     * @default 269025156
     */
    const KEY_UserPB: number;

    /**
     * @default 989
     */
    const KEY_Utilde: number;

    /**
     * @default 86
     */
    const KEY_V: number;

    /**
     * @default 269025076
     */
    const KEY_VendorHome: number;

    /**
     * @default 269025159
     */
    const KEY_Video: number;

    /**
     * @default 269025185
     */
    const KEY_View: number;

    /**
     * @default 16777215
     */
    const KEY_VoidSymbol: number;

    /**
     * @default 87
     */
    const KEY_W: number;

    /**
     * @default 269025173
     */
    const KEY_WLAN: number;

    /**
     * @default 269025204
     */
    const KEY_WWAN: number;

    /**
     * @default 269025070
     */
    const KEY_WWW: number;

    /**
     * @default 16785026
     */
    const KEY_Wacute: number;

    /**
     * @default 269025067
     */
    const KEY_WakeUp: number;

    /**
     * @default 16777588
     */
    const KEY_Wcircumflex: number;

    /**
     * @default 16785028
     */
    const KEY_Wdiaeresis: number;

    /**
     * @default 269025167
     */
    const KEY_WebCam: number;

    /**
     * @default 16785024
     */
    const KEY_Wgrave: number;

    /**
     * @default 269025160
     */
    const KEY_WheelButton: number;

    /**
     * @default 269025109
     */
    const KEY_WindowClear: number;

    /**
     * @default 16785577
     */
    const KEY_WonSign: number;

    /**
     * @default 269025161
     */
    const KEY_Word: number;

    /**
     * @default 88
     */
    const KEY_X: number;

    /**
     * @default 16785034
     */
    const KEY_Xabovedot: number;

    /**
     * @default 269025162
     */
    const KEY_Xfer: number;

    /**
     * @default 89
     */
    const KEY_Y: number;

    /**
     * @default 221
     */
    const KEY_Yacute: number;

    /**
     * @default 16785140
     */
    const KEY_Ybelowdot: number;

    /**
     * @default 16777590
     */
    const KEY_Ycircumflex: number;

    /**
     * @default 5054
     */
    const KEY_Ydiaeresis: number;

    /**
     * @default 269025189
     */
    const KEY_Yellow: number;

    /**
     * @default 16785138
     */
    const KEY_Ygrave: number;

    /**
     * @default 16785142
     */
    const KEY_Yhook: number;

    /**
     * @default 16785144
     */
    const KEY_Ytilde: number;

    /**
     * @default 90
     */
    const KEY_Z: number;

    /**
     * @default 431
     */
    const KEY_Zabovedot: number;

    /**
     * @default 428
     */
    const KEY_Zacute: number;

    /**
     * @default 430
     */
    const KEY_Zcaron: number;

    /**
     * @default 65341
     */
    const KEY_Zen_Koho: number;

    /**
     * @default 65320
     */
    const KEY_Zenkaku: number;

    /**
     * @default 65322
     */
    const KEY_Zenkaku_Hankaku: number;

    /**
     * @default 269025163
     */
    const KEY_ZoomIn: number;

    /**
     * @default 269025164
     */
    const KEY_ZoomOut: number;

    /**
     * @default 16777653
     */
    const KEY_Zstroke: number;

    /**
     * @default 97
     */
    const KEY_a: number;

    /**
     * @default 225
     */
    const KEY_aacute: number;

    /**
     * @default 16785057
     */
    const KEY_abelowdot: number;

    /**
     * @default 511
     */
    const KEY_abovedot: number;

    /**
     * @default 483
     */
    const KEY_abreve: number;

    /**
     * @default 16785071
     */
    const KEY_abreveacute: number;

    /**
     * @default 16785079
     */
    const KEY_abrevebelowdot: number;

    /**
     * @default 16785073
     */
    const KEY_abrevegrave: number;

    /**
     * @default 16785075
     */
    const KEY_abrevehook: number;

    /**
     * @default 16785077
     */
    const KEY_abrevetilde: number;

    /**
     * @default 226
     */
    const KEY_acircumflex: number;

    /**
     * @default 16785061
     */
    const KEY_acircumflexacute: number;

    /**
     * @default 16785069
     */
    const KEY_acircumflexbelowdot: number;

    /**
     * @default 16785063
     */
    const KEY_acircumflexgrave: number;

    /**
     * @default 16785065
     */
    const KEY_acircumflexhook: number;

    /**
     * @default 16785067
     */
    const KEY_acircumflextilde: number;

    /**
     * @default 180
     */
    const KEY_acute: number;

    /**
     * @default 228
     */
    const KEY_adiaeresis: number;

    /**
     * @default 230
     */
    const KEY_ae: number;

    /**
     * @default 224
     */
    const KEY_agrave: number;

    /**
     * @default 16785059
     */
    const KEY_ahook: number;

    /**
     * @default 992
     */
    const KEY_amacron: number;

    /**
     * @default 38
     */
    const KEY_ampersand: number;

    /**
     * @default 433
     */
    const KEY_aogonek: number;

    /**
     * @default 39
     */
    const KEY_apostrophe: number;

    /**
     * @default 16785992
     */
    const KEY_approxeq: number;

    /**
     * @default 2248
     */
    const KEY_approximate: number;

    /**
     * @default 229
     */
    const KEY_aring: number;

    /**
     * @default 94
     */
    const KEY_asciicircum: number;

    /**
     * @default 126
     */
    const KEY_asciitilde: number;

    /**
     * @default 42
     */
    const KEY_asterisk: number;

    /**
     * @default 64
     */
    const KEY_at: number;

    /**
     * @default 227
     */
    const KEY_atilde: number;

    /**
     * @default 98
     */
    const KEY_b: number;

    /**
     * @default 16784899
     */
    const KEY_babovedot: number;

    /**
     * @default 92
     */
    const KEY_backslash: number;

    /**
     * @default 2804
     */
    const KEY_ballotcross: number;

    /**
     * @default 124
     */
    const KEY_bar: number;

    /**
     * @default 16785973
     */
    const KEY_because: number;

    /**
     * @default 2527
     */
    const KEY_blank: number;

    /**
     * @default 2213
     */
    const KEY_botintegral: number;

    /**
     * @default 2220
     */
    const KEY_botleftparens: number;

    /**
     * @default 2216
     */
    const KEY_botleftsqbracket: number;

    /**
     * @default 2226
     */
    const KEY_botleftsummation: number;

    /**
     * @default 2222
     */
    const KEY_botrightparens: number;

    /**
     * @default 2218
     */
    const KEY_botrightsqbracket: number;

    /**
     * @default 2230
     */
    const KEY_botrightsummation: number;

    /**
     * @default 2550
     */
    const KEY_bott: number;

    /**
     * @default 2228
     */
    const KEY_botvertsummationconnector: number;

    /**
     * @default 123
     */
    const KEY_braceleft: number;

    /**
     * @default 125
     */
    const KEY_braceright: number;

    /**
     * @default 91
     */
    const KEY_bracketleft: number;

    /**
     * @default 93
     */
    const KEY_bracketright: number;

    /**
     * @default 16787456
     */
    const KEY_braille_blank: number;

    /**
     * @default 65521
     */
    const KEY_braille_dot_1: number;

    /**
     * @default 65530
     */
    const KEY_braille_dot_10: number;

    /**
     * @default 65522
     */
    const KEY_braille_dot_2: number;

    /**
     * @default 65523
     */
    const KEY_braille_dot_3: number;

    /**
     * @default 65524
     */
    const KEY_braille_dot_4: number;

    /**
     * @default 65525
     */
    const KEY_braille_dot_5: number;

    /**
     * @default 65526
     */
    const KEY_braille_dot_6: number;

    /**
     * @default 65527
     */
    const KEY_braille_dot_7: number;

    /**
     * @default 65528
     */
    const KEY_braille_dot_8: number;

    /**
     * @default 65529
     */
    const KEY_braille_dot_9: number;

    /**
     * @default 16787457
     */
    const KEY_braille_dots_1: number;

    /**
     * @default 16787459
     */
    const KEY_braille_dots_12: number;

    /**
     * @default 16787463
     */
    const KEY_braille_dots_123: number;

    /**
     * @default 16787471
     */
    const KEY_braille_dots_1234: number;

    /**
     * @default 16787487
     */
    const KEY_braille_dots_12345: number;

    /**
     * @default 16787519
     */
    const KEY_braille_dots_123456: number;

    /**
     * @default 16787583
     */
    const KEY_braille_dots_1234567: number;

    /**
     * @default 16787711
     */
    const KEY_braille_dots_12345678: number;

    /**
     * @default 16787647
     */
    const KEY_braille_dots_1234568: number;

    /**
     * @default 16787551
     */
    const KEY_braille_dots_123457: number;

    /**
     * @default 16787679
     */
    const KEY_braille_dots_1234578: number;

    /**
     * @default 16787615
     */
    const KEY_braille_dots_123458: number;

    /**
     * @default 16787503
     */
    const KEY_braille_dots_12346: number;

    /**
     * @default 16787567
     */
    const KEY_braille_dots_123467: number;

    /**
     * @default 16787695
     */
    const KEY_braille_dots_1234678: number;

    /**
     * @default 16787631
     */
    const KEY_braille_dots_123468: number;

    /**
     * @default 16787535
     */
    const KEY_braille_dots_12347: number;

    /**
     * @default 16787663
     */
    const KEY_braille_dots_123478: number;

    /**
     * @default 16787599
     */
    const KEY_braille_dots_12348: number;

    /**
     * @default 16787479
     */
    const KEY_braille_dots_1235: number;

    /**
     * @default 16787511
     */
    const KEY_braille_dots_12356: number;

    /**
     * @default 16787575
     */
    const KEY_braille_dots_123567: number;

    /**
     * @default 16787703
     */
    const KEY_braille_dots_1235678: number;

    /**
     * @default 16787639
     */
    const KEY_braille_dots_123568: number;

    /**
     * @default 16787543
     */
    const KEY_braille_dots_12357: number;

    /**
     * @default 16787671
     */
    const KEY_braille_dots_123578: number;

    /**
     * @default 16787607
     */
    const KEY_braille_dots_12358: number;

    /**
     * @default 16787495
     */
    const KEY_braille_dots_1236: number;

    /**
     * @default 16787559
     */
    const KEY_braille_dots_12367: number;

    /**
     * @default 16787687
     */
    const KEY_braille_dots_123678: number;

    /**
     * @default 16787623
     */
    const KEY_braille_dots_12368: number;

    /**
     * @default 16787527
     */
    const KEY_braille_dots_1237: number;

    /**
     * @default 16787655
     */
    const KEY_braille_dots_12378: number;

    /**
     * @default 16787591
     */
    const KEY_braille_dots_1238: number;

    /**
     * @default 16787467
     */
    const KEY_braille_dots_124: number;

    /**
     * @default 16787483
     */
    const KEY_braille_dots_1245: number;

    /**
     * @default 16787515
     */
    const KEY_braille_dots_12456: number;

    /**
     * @default 16787579
     */
    const KEY_braille_dots_124567: number;

    /**
     * @default 16787707
     */
    const KEY_braille_dots_1245678: number;

    /**
     * @default 16787643
     */
    const KEY_braille_dots_124568: number;

    /**
     * @default 16787547
     */
    const KEY_braille_dots_12457: number;

    /**
     * @default 16787675
     */
    const KEY_braille_dots_124578: number;

    /**
     * @default 16787611
     */
    const KEY_braille_dots_12458: number;

    /**
     * @default 16787499
     */
    const KEY_braille_dots_1246: number;

    /**
     * @default 16787563
     */
    const KEY_braille_dots_12467: number;

    /**
     * @default 16787691
     */
    const KEY_braille_dots_124678: number;

    /**
     * @default 16787627
     */
    const KEY_braille_dots_12468: number;

    /**
     * @default 16787531
     */
    const KEY_braille_dots_1247: number;

    /**
     * @default 16787659
     */
    const KEY_braille_dots_12478: number;

    /**
     * @default 16787595
     */
    const KEY_braille_dots_1248: number;

    /**
     * @default 16787475
     */
    const KEY_braille_dots_125: number;

    /**
     * @default 16787507
     */
    const KEY_braille_dots_1256: number;

    /**
     * @default 16787571
     */
    const KEY_braille_dots_12567: number;

    /**
     * @default 16787699
     */
    const KEY_braille_dots_125678: number;

    /**
     * @default 16787635
     */
    const KEY_braille_dots_12568: number;

    /**
     * @default 16787539
     */
    const KEY_braille_dots_1257: number;

    /**
     * @default 16787667
     */
    const KEY_braille_dots_12578: number;

    /**
     * @default 16787603
     */
    const KEY_braille_dots_1258: number;

    /**
     * @default 16787491
     */
    const KEY_braille_dots_126: number;

    /**
     * @default 16787555
     */
    const KEY_braille_dots_1267: number;

    /**
     * @default 16787683
     */
    const KEY_braille_dots_12678: number;

    /**
     * @default 16787619
     */
    const KEY_braille_dots_1268: number;

    /**
     * @default 16787523
     */
    const KEY_braille_dots_127: number;

    /**
     * @default 16787651
     */
    const KEY_braille_dots_1278: number;

    /**
     * @default 16787587
     */
    const KEY_braille_dots_128: number;

    /**
     * @default 16787461
     */
    const KEY_braille_dots_13: number;

    /**
     * @default 16787469
     */
    const KEY_braille_dots_134: number;

    /**
     * @default 16787485
     */
    const KEY_braille_dots_1345: number;

    /**
     * @default 16787517
     */
    const KEY_braille_dots_13456: number;

    /**
     * @default 16787581
     */
    const KEY_braille_dots_134567: number;

    /**
     * @default 16787709
     */
    const KEY_braille_dots_1345678: number;

    /**
     * @default 16787645
     */
    const KEY_braille_dots_134568: number;

    /**
     * @default 16787549
     */
    const KEY_braille_dots_13457: number;

    /**
     * @default 16787677
     */
    const KEY_braille_dots_134578: number;

    /**
     * @default 16787613
     */
    const KEY_braille_dots_13458: number;

    /**
     * @default 16787501
     */
    const KEY_braille_dots_1346: number;

    /**
     * @default 16787565
     */
    const KEY_braille_dots_13467: number;

    /**
     * @default 16787693
     */
    const KEY_braille_dots_134678: number;

    /**
     * @default 16787629
     */
    const KEY_braille_dots_13468: number;

    /**
     * @default 16787533
     */
    const KEY_braille_dots_1347: number;

    /**
     * @default 16787661
     */
    const KEY_braille_dots_13478: number;

    /**
     * @default 16787597
     */
    const KEY_braille_dots_1348: number;

    /**
     * @default 16787477
     */
    const KEY_braille_dots_135: number;

    /**
     * @default 16787509
     */
    const KEY_braille_dots_1356: number;

    /**
     * @default 16787573
     */
    const KEY_braille_dots_13567: number;

    /**
     * @default 16787701
     */
    const KEY_braille_dots_135678: number;

    /**
     * @default 16787637
     */
    const KEY_braille_dots_13568: number;

    /**
     * @default 16787541
     */
    const KEY_braille_dots_1357: number;

    /**
     * @default 16787669
     */
    const KEY_braille_dots_13578: number;

    /**
     * @default 16787605
     */
    const KEY_braille_dots_1358: number;

    /**
     * @default 16787493
     */
    const KEY_braille_dots_136: number;

    /**
     * @default 16787557
     */
    const KEY_braille_dots_1367: number;

    /**
     * @default 16787685
     */
    const KEY_braille_dots_13678: number;

    /**
     * @default 16787621
     */
    const KEY_braille_dots_1368: number;

    /**
     * @default 16787525
     */
    const KEY_braille_dots_137: number;

    /**
     * @default 16787653
     */
    const KEY_braille_dots_1378: number;

    /**
     * @default 16787589
     */
    const KEY_braille_dots_138: number;

    /**
     * @default 16787465
     */
    const KEY_braille_dots_14: number;

    /**
     * @default 16787481
     */
    const KEY_braille_dots_145: number;

    /**
     * @default 16787513
     */
    const KEY_braille_dots_1456: number;

    /**
     * @default 16787577
     */
    const KEY_braille_dots_14567: number;

    /**
     * @default 16787705
     */
    const KEY_braille_dots_145678: number;

    /**
     * @default 16787641
     */
    const KEY_braille_dots_14568: number;

    /**
     * @default 16787545
     */
    const KEY_braille_dots_1457: number;

    /**
     * @default 16787673
     */
    const KEY_braille_dots_14578: number;

    /**
     * @default 16787609
     */
    const KEY_braille_dots_1458: number;

    /**
     * @default 16787497
     */
    const KEY_braille_dots_146: number;

    /**
     * @default 16787561
     */
    const KEY_braille_dots_1467: number;

    /**
     * @default 16787689
     */
    const KEY_braille_dots_14678: number;

    /**
     * @default 16787625
     */
    const KEY_braille_dots_1468: number;

    /**
     * @default 16787529
     */
    const KEY_braille_dots_147: number;

    /**
     * @default 16787657
     */
    const KEY_braille_dots_1478: number;

    /**
     * @default 16787593
     */
    const KEY_braille_dots_148: number;

    /**
     * @default 16787473
     */
    const KEY_braille_dots_15: number;

    /**
     * @default 16787505
     */
    const KEY_braille_dots_156: number;

    /**
     * @default 16787569
     */
    const KEY_braille_dots_1567: number;

    /**
     * @default 16787697
     */
    const KEY_braille_dots_15678: number;

    /**
     * @default 16787633
     */
    const KEY_braille_dots_1568: number;

    /**
     * @default 16787537
     */
    const KEY_braille_dots_157: number;

    /**
     * @default 16787665
     */
    const KEY_braille_dots_1578: number;

    /**
     * @default 16787601
     */
    const KEY_braille_dots_158: number;

    /**
     * @default 16787489
     */
    const KEY_braille_dots_16: number;

    /**
     * @default 16787553
     */
    const KEY_braille_dots_167: number;

    /**
     * @default 16787681
     */
    const KEY_braille_dots_1678: number;

    /**
     * @default 16787617
     */
    const KEY_braille_dots_168: number;

    /**
     * @default 16787521
     */
    const KEY_braille_dots_17: number;

    /**
     * @default 16787649
     */
    const KEY_braille_dots_178: number;

    /**
     * @default 16787585
     */
    const KEY_braille_dots_18: number;

    /**
     * @default 16787458
     */
    const KEY_braille_dots_2: number;

    /**
     * @default 16787462
     */
    const KEY_braille_dots_23: number;

    /**
     * @default 16787470
     */
    const KEY_braille_dots_234: number;

    /**
     * @default 16787486
     */
    const KEY_braille_dots_2345: number;

    /**
     * @default 16787518
     */
    const KEY_braille_dots_23456: number;

    /**
     * @default 16787582
     */
    const KEY_braille_dots_234567: number;

    /**
     * @default 16787710
     */
    const KEY_braille_dots_2345678: number;

    /**
     * @default 16787646
     */
    const KEY_braille_dots_234568: number;

    /**
     * @default 16787550
     */
    const KEY_braille_dots_23457: number;

    /**
     * @default 16787678
     */
    const KEY_braille_dots_234578: number;

    /**
     * @default 16787614
     */
    const KEY_braille_dots_23458: number;

    /**
     * @default 16787502
     */
    const KEY_braille_dots_2346: number;

    /**
     * @default 16787566
     */
    const KEY_braille_dots_23467: number;

    /**
     * @default 16787694
     */
    const KEY_braille_dots_234678: number;

    /**
     * @default 16787630
     */
    const KEY_braille_dots_23468: number;

    /**
     * @default 16787534
     */
    const KEY_braille_dots_2347: number;

    /**
     * @default 16787662
     */
    const KEY_braille_dots_23478: number;

    /**
     * @default 16787598
     */
    const KEY_braille_dots_2348: number;

    /**
     * @default 16787478
     */
    const KEY_braille_dots_235: number;

    /**
     * @default 16787510
     */
    const KEY_braille_dots_2356: number;

    /**
     * @default 16787574
     */
    const KEY_braille_dots_23567: number;

    /**
     * @default 16787702
     */
    const KEY_braille_dots_235678: number;

    /**
     * @default 16787638
     */
    const KEY_braille_dots_23568: number;

    /**
     * @default 16787542
     */
    const KEY_braille_dots_2357: number;

    /**
     * @default 16787670
     */
    const KEY_braille_dots_23578: number;

    /**
     * @default 16787606
     */
    const KEY_braille_dots_2358: number;

    /**
     * @default 16787494
     */
    const KEY_braille_dots_236: number;

    /**
     * @default 16787558
     */
    const KEY_braille_dots_2367: number;

    /**
     * @default 16787686
     */
    const KEY_braille_dots_23678: number;

    /**
     * @default 16787622
     */
    const KEY_braille_dots_2368: number;

    /**
     * @default 16787526
     */
    const KEY_braille_dots_237: number;

    /**
     * @default 16787654
     */
    const KEY_braille_dots_2378: number;

    /**
     * @default 16787590
     */
    const KEY_braille_dots_238: number;

    /**
     * @default 16787466
     */
    const KEY_braille_dots_24: number;

    /**
     * @default 16787482
     */
    const KEY_braille_dots_245: number;

    /**
     * @default 16787514
     */
    const KEY_braille_dots_2456: number;

    /**
     * @default 16787578
     */
    const KEY_braille_dots_24567: number;

    /**
     * @default 16787706
     */
    const KEY_braille_dots_245678: number;

    /**
     * @default 16787642
     */
    const KEY_braille_dots_24568: number;

    /**
     * @default 16787546
     */
    const KEY_braille_dots_2457: number;

    /**
     * @default 16787674
     */
    const KEY_braille_dots_24578: number;

    /**
     * @default 16787610
     */
    const KEY_braille_dots_2458: number;

    /**
     * @default 16787498
     */
    const KEY_braille_dots_246: number;

    /**
     * @default 16787562
     */
    const KEY_braille_dots_2467: number;

    /**
     * @default 16787690
     */
    const KEY_braille_dots_24678: number;

    /**
     * @default 16787626
     */
    const KEY_braille_dots_2468: number;

    /**
     * @default 16787530
     */
    const KEY_braille_dots_247: number;

    /**
     * @default 16787658
     */
    const KEY_braille_dots_2478: number;

    /**
     * @default 16787594
     */
    const KEY_braille_dots_248: number;

    /**
     * @default 16787474
     */
    const KEY_braille_dots_25: number;

    /**
     * @default 16787506
     */
    const KEY_braille_dots_256: number;

    /**
     * @default 16787570
     */
    const KEY_braille_dots_2567: number;

    /**
     * @default 16787698
     */
    const KEY_braille_dots_25678: number;

    /**
     * @default 16787634
     */
    const KEY_braille_dots_2568: number;

    /**
     * @default 16787538
     */
    const KEY_braille_dots_257: number;

    /**
     * @default 16787666
     */
    const KEY_braille_dots_2578: number;

    /**
     * @default 16787602
     */
    const KEY_braille_dots_258: number;

    /**
     * @default 16787490
     */
    const KEY_braille_dots_26: number;

    /**
     * @default 16787554
     */
    const KEY_braille_dots_267: number;

    /**
     * @default 16787682
     */
    const KEY_braille_dots_2678: number;

    /**
     * @default 16787618
     */
    const KEY_braille_dots_268: number;

    /**
     * @default 16787522
     */
    const KEY_braille_dots_27: number;

    /**
     * @default 16787650
     */
    const KEY_braille_dots_278: number;

    /**
     * @default 16787586
     */
    const KEY_braille_dots_28: number;

    /**
     * @default 16787460
     */
    const KEY_braille_dots_3: number;

    /**
     * @default 16787468
     */
    const KEY_braille_dots_34: number;

    /**
     * @default 16787484
     */
    const KEY_braille_dots_345: number;

    /**
     * @default 16787516
     */
    const KEY_braille_dots_3456: number;

    /**
     * @default 16787580
     */
    const KEY_braille_dots_34567: number;

    /**
     * @default 16787708
     */
    const KEY_braille_dots_345678: number;

    /**
     * @default 16787644
     */
    const KEY_braille_dots_34568: number;

    /**
     * @default 16787548
     */
    const KEY_braille_dots_3457: number;

    /**
     * @default 16787676
     */
    const KEY_braille_dots_34578: number;

    /**
     * @default 16787612
     */
    const KEY_braille_dots_3458: number;

    /**
     * @default 16787500
     */
    const KEY_braille_dots_346: number;

    /**
     * @default 16787564
     */
    const KEY_braille_dots_3467: number;

    /**
     * @default 16787692
     */
    const KEY_braille_dots_34678: number;

    /**
     * @default 16787628
     */
    const KEY_braille_dots_3468: number;

    /**
     * @default 16787532
     */
    const KEY_braille_dots_347: number;

    /**
     * @default 16787660
     */
    const KEY_braille_dots_3478: number;

    /**
     * @default 16787596
     */
    const KEY_braille_dots_348: number;

    /**
     * @default 16787476
     */
    const KEY_braille_dots_35: number;

    /**
     * @default 16787508
     */
    const KEY_braille_dots_356: number;

    /**
     * @default 16787572
     */
    const KEY_braille_dots_3567: number;

    /**
     * @default 16787700
     */
    const KEY_braille_dots_35678: number;

    /**
     * @default 16787636
     */
    const KEY_braille_dots_3568: number;

    /**
     * @default 16787540
     */
    const KEY_braille_dots_357: number;

    /**
     * @default 16787668
     */
    const KEY_braille_dots_3578: number;

    /**
     * @default 16787604
     */
    const KEY_braille_dots_358: number;

    /**
     * @default 16787492
     */
    const KEY_braille_dots_36: number;

    /**
     * @default 16787556
     */
    const KEY_braille_dots_367: number;

    /**
     * @default 16787684
     */
    const KEY_braille_dots_3678: number;

    /**
     * @default 16787620
     */
    const KEY_braille_dots_368: number;

    /**
     * @default 16787524
     */
    const KEY_braille_dots_37: number;

    /**
     * @default 16787652
     */
    const KEY_braille_dots_378: number;

    /**
     * @default 16787588
     */
    const KEY_braille_dots_38: number;

    /**
     * @default 16787464
     */
    const KEY_braille_dots_4: number;

    /**
     * @default 16787480
     */
    const KEY_braille_dots_45: number;

    /**
     * @default 16787512
     */
    const KEY_braille_dots_456: number;

    /**
     * @default 16787576
     */
    const KEY_braille_dots_4567: number;

    /**
     * @default 16787704
     */
    const KEY_braille_dots_45678: number;

    /**
     * @default 16787640
     */
    const KEY_braille_dots_4568: number;

    /**
     * @default 16787544
     */
    const KEY_braille_dots_457: number;

    /**
     * @default 16787672
     */
    const KEY_braille_dots_4578: number;

    /**
     * @default 16787608
     */
    const KEY_braille_dots_458: number;

    /**
     * @default 16787496
     */
    const KEY_braille_dots_46: number;

    /**
     * @default 16787560
     */
    const KEY_braille_dots_467: number;

    /**
     * @default 16787688
     */
    const KEY_braille_dots_4678: number;

    /**
     * @default 16787624
     */
    const KEY_braille_dots_468: number;

    /**
     * @default 16787528
     */
    const KEY_braille_dots_47: number;

    /**
     * @default 16787656
     */
    const KEY_braille_dots_478: number;

    /**
     * @default 16787592
     */
    const KEY_braille_dots_48: number;

    /**
     * @default 16787472
     */
    const KEY_braille_dots_5: number;

    /**
     * @default 16787504
     */
    const KEY_braille_dots_56: number;

    /**
     * @default 16787568
     */
    const KEY_braille_dots_567: number;

    /**
     * @default 16787696
     */
    const KEY_braille_dots_5678: number;

    /**
     * @default 16787632
     */
    const KEY_braille_dots_568: number;

    /**
     * @default 16787536
     */
    const KEY_braille_dots_57: number;

    /**
     * @default 16787664
     */
    const KEY_braille_dots_578: number;

    /**
     * @default 16787600
     */
    const KEY_braille_dots_58: number;

    /**
     * @default 16787488
     */
    const KEY_braille_dots_6: number;

    /**
     * @default 16787552
     */
    const KEY_braille_dots_67: number;

    /**
     * @default 16787680
     */
    const KEY_braille_dots_678: number;

    /**
     * @default 16787616
     */
    const KEY_braille_dots_68: number;

    /**
     * @default 16787520
     */
    const KEY_braille_dots_7: number;

    /**
     * @default 16787648
     */
    const KEY_braille_dots_78: number;

    /**
     * @default 16787584
     */
    const KEY_braille_dots_8: number;

    /**
     * @default 418
     */
    const KEY_breve: number;

    /**
     * @default 166
     */
    const KEY_brokenbar: number;

    /**
     * @default 99
     */
    const KEY_c: number;

    /**
     * @default 65187
     */
    const KEY_c_h: number;

    /**
     * @default 741
     */
    const KEY_cabovedot: number;

    /**
     * @default 486
     */
    const KEY_cacute: number;

    /**
     * @default 2744
     */
    const KEY_careof: number;

    /**
     * @default 2812
     */
    const KEY_caret: number;

    /**
     * @default 439
     */
    const KEY_caron: number;

    /**
     * @default 488
     */
    const KEY_ccaron: number;

    /**
     * @default 231
     */
    const KEY_ccedilla: number;

    /**
     * @default 742
     */
    const KEY_ccircumflex: number;

    /**
     * @default 184
     */
    const KEY_cedilla: number;

    /**
     * @default 162
     */
    const KEY_cent: number;

    /**
     * @default 65184
     */
    const KEY_ch: number;

    /**
     * @default 2529
     */
    const KEY_checkerboard: number;

    /**
     * @default 2803
     */
    const KEY_checkmark: number;

    /**
     * @default 3023
     */
    const KEY_circle: number;

    /**
     * @default 2796
     */
    const KEY_club: number;

    /**
     * @default 58
     */
    const KEY_colon: number;

    /**
     * @default 44
     */
    const KEY_comma: number;

    /**
     * @default 16785931
     */
    const KEY_containsas: number;

    /**
     * @default 169
     */
    const KEY_copyright: number;

    /**
     * @default 2532
     */
    const KEY_cr: number;

    /**
     * @default 2542
     */
    const KEY_crossinglines: number;

    /**
     * @default 16785947
     */
    const KEY_cuberoot: number;

    /**
     * @default 164
     */
    const KEY_currency: number;

    /**
     * @default 2815
     */
    const KEY_cursor: number;

    /**
     * @default 100
     */
    const KEY_d: number;

    /**
     * @default 16784907
     */
    const KEY_dabovedot: number;

    /**
     * @default 2801
     */
    const KEY_dagger: number;

    /**
     * @default 495
     */
    const KEY_dcaron: number;

    /**
     * @default 65153
     */
    const KEY_dead_A: number;

    /**
     * @default 65155
     */
    const KEY_dead_E: number;

    /**
     * @default 65157
     */
    const KEY_dead_I: number;

    /**
     * @default 65159
     */
    const KEY_dead_O: number;

    /**
     * @default 65161
     */
    const KEY_dead_U: number;

    /**
     * @default 65152
     */
    const KEY_dead_a: number;

    /**
     * @default 65124
     */
    const KEY_dead_abovecomma: number;

    /**
     * @default 65110
     */
    const KEY_dead_abovedot: number;

    /**
     * @default 65125
     */
    const KEY_dead_abovereversedcomma: number;

    /**
     * @default 65112
     */
    const KEY_dead_abovering: number;

    /**
     * @default 65169
     */
    const KEY_dead_aboveverticalline: number;

    /**
     * @default 65105
     */
    const KEY_dead_acute: number;

    /**
     * @default 65131
     */
    const KEY_dead_belowbreve: number;

    /**
     * @default 65129
     */
    const KEY_dead_belowcircumflex: number;

    /**
     * @default 65134
     */
    const KEY_dead_belowcomma: number;

    /**
     * @default 65132
     */
    const KEY_dead_belowdiaeresis: number;

    /**
     * @default 65120
     */
    const KEY_dead_belowdot: number;

    /**
     * @default 65128
     */
    const KEY_dead_belowmacron: number;

    /**
     * @default 65127
     */
    const KEY_dead_belowring: number;

    /**
     * @default 65130
     */
    const KEY_dead_belowtilde: number;

    /**
     * @default 65170
     */
    const KEY_dead_belowverticalline: number;

    /**
     * @default 65109
     */
    const KEY_dead_breve: number;

    /**
     * @default 65163
     */
    const KEY_dead_capital_schwa: number;

    /**
     * @default 65114
     */
    const KEY_dead_caron: number;

    /**
     * @default 65115
     */
    const KEY_dead_cedilla: number;

    /**
     * @default 65106
     */
    const KEY_dead_circumflex: number;

    /**
     * @default 65135
     */
    const KEY_dead_currency: number;

    /**
     * @default 65125
     */
    const KEY_dead_dasia: number;

    /**
     * @default 65111
     */
    const KEY_dead_diaeresis: number;

    /**
     * @default 65113
     */
    const KEY_dead_doubleacute: number;

    /**
     * @default 65126
     */
    const KEY_dead_doublegrave: number;

    /**
     * @default 65154
     */
    const KEY_dead_e: number;

    /**
     * @default 65104
     */
    const KEY_dead_grave: number;

    /**
     * @default 65164
     */
    const KEY_dead_greek: number;

    /**
     * @default 65121
     */
    const KEY_dead_hook: number;

    /**
     * @default 65122
     */
    const KEY_dead_horn: number;

    /**
     * @default 65156
     */
    const KEY_dead_i: number;

    /**
     * @default 65133
     */
    const KEY_dead_invertedbreve: number;

    /**
     * @default 65117
     */
    const KEY_dead_iota: number;

    /**
     * @default 65171
     */
    const KEY_dead_longsolidusoverlay: number;

    /**
     * @default 65168
     */
    const KEY_dead_lowline: number;

    /**
     * @default 65108
     */
    const KEY_dead_macron: number;

    /**
     * @default 65158
     */
    const KEY_dead_o: number;

    /**
     * @default 65116
     */
    const KEY_dead_ogonek: number;

    /**
     * @default 65107
     */
    const KEY_dead_perispomeni: number;

    /**
     * @default 65124
     */
    const KEY_dead_psili: number;

    /**
     * @default 65119
     */
    const KEY_dead_semivoiced_sound: number;

    /**
     * @default 65162
     */
    const KEY_dead_small_schwa: number;

    /**
     * @default 65123
     */
    const KEY_dead_stroke: number;

    /**
     * @default 65107
     */
    const KEY_dead_tilde: number;

    /**
     * @default 65160
     */
    const KEY_dead_u: number;

    /**
     * @default 65118
     */
    const KEY_dead_voiced_sound: number;

    /**
     * @default 2749
     */
    const KEY_decimalpoint: number;

    /**
     * @default 176
     */
    const KEY_degree: number;

    /**
     * @default 168
     */
    const KEY_diaeresis: number;

    /**
     * @default 2797
     */
    const KEY_diamond: number;

    /**
     * @default 2725
     */
    const KEY_digitspace: number;

    /**
     * @default 16785964
     */
    const KEY_dintegral: number;

    /**
     * @default 247
     */
    const KEY_division: number;

    /**
     * @default 36
     */
    const KEY_dollar: number;

    /**
     * @default 2735
     */
    const KEY_doubbaselinedot: number;

    /**
     * @default 445
     */
    const KEY_doubleacute: number;

    /**
     * @default 2802
     */
    const KEY_doubledagger: number;

    /**
     * @default 2814
     */
    const KEY_doublelowquotemark: number;

    /**
     * @default 2302
     */
    const KEY_downarrow: number;

    /**
     * @default 2984
     */
    const KEY_downcaret: number;

    /**
     * @default 3030
     */
    const KEY_downshoe: number;

    /**
     * @default 3012
     */
    const KEY_downstile: number;

    /**
     * @default 3010
     */
    const KEY_downtack: number;

    /**
     * @default 496
     */
    const KEY_dstroke: number;

    /**
     * @default 101
     */
    const KEY_e: number;

    /**
     * @default 1004
     */
    const KEY_eabovedot: number;

    /**
     * @default 233
     */
    const KEY_eacute: number;

    /**
     * @default 16785081
     */
    const KEY_ebelowdot: number;

    /**
     * @default 492
     */
    const KEY_ecaron: number;

    /**
     * @default 234
     */
    const KEY_ecircumflex: number;

    /**
     * @default 16785087
     */
    const KEY_ecircumflexacute: number;

    /**
     * @default 16785095
     */
    const KEY_ecircumflexbelowdot: number;

    /**
     * @default 16785089
     */
    const KEY_ecircumflexgrave: number;

    /**
     * @default 16785091
     */
    const KEY_ecircumflexhook: number;

    /**
     * @default 16785093
     */
    const KEY_ecircumflextilde: number;

    /**
     * @default 235
     */
    const KEY_ediaeresis: number;

    /**
     * @default 232
     */
    const KEY_egrave: number;

    /**
     * @default 16785083
     */
    const KEY_ehook: number;

    /**
     * @default 16785544
     */
    const KEY_eightsubscript: number;

    /**
     * @default 16785528
     */
    const KEY_eightsuperior: number;

    /**
     * @default 16785928
     */
    const KEY_elementof: number;

    /**
     * @default 2734
     */
    const KEY_ellipsis: number;

    /**
     * @default 2723
     */
    const KEY_em3space: number;

    /**
     * @default 2724
     */
    const KEY_em4space: number;

    /**
     * @default 954
     */
    const KEY_emacron: number;

    /**
     * @default 2729
     */
    const KEY_emdash: number;

    /**
     * @default 2782
     */
    const KEY_emfilledcircle: number;

    /**
     * @default 2783
     */
    const KEY_emfilledrect: number;

    /**
     * @default 2766
     */
    const KEY_emopencircle: number;

    /**
     * @default 2767
     */
    const KEY_emopenrectangle: number;

    /**
     * @default 16785925
     */
    const KEY_emptyset: number;

    /**
     * @default 2721
     */
    const KEY_emspace: number;

    /**
     * @default 2730
     */
    const KEY_endash: number;

    /**
     * @default 2790
     */
    const KEY_enfilledcircbullet: number;

    /**
     * @default 2791
     */
    const KEY_enfilledsqbullet: number;

    /**
     * @default 959
     */
    const KEY_eng: number;

    /**
     * @default 2784
     */
    const KEY_enopencircbullet: number;

    /**
     * @default 2785
     */
    const KEY_enopensquarebullet: number;

    /**
     * @default 2722
     */
    const KEY_enspace: number;

    /**
     * @default 490
     */
    const KEY_eogonek: number;

    /**
     * @default 61
     */
    const KEY_equal: number;

    /**
     * @default 240
     */
    const KEY_eth: number;

    /**
     * @default 16785085
     */
    const KEY_etilde: number;

    /**
     * @default 33
     */
    const KEY_exclam: number;

    /**
     * @default 161
     */
    const KEY_exclamdown: number;

    /**
     * @default 16777874
     */
    const KEY_ezh: number;

    /**
     * @default 102
     */
    const KEY_f: number;

    /**
     * @default 16784927
     */
    const KEY_fabovedot: number;

    /**
     * @default 2808
     */
    const KEY_femalesymbol: number;

    /**
     * @default 2531
     */
    const KEY_ff: number;

    /**
     * @default 2747
     */
    const KEY_figdash: number;

    /**
     * @default 2780
     */
    const KEY_filledlefttribullet: number;

    /**
     * @default 2779
     */
    const KEY_filledrectbullet: number;

    /**
     * @default 2781
     */
    const KEY_filledrighttribullet: number;

    /**
     * @default 2793
     */
    const KEY_filledtribulletdown: number;

    /**
     * @default 2792
     */
    const KEY_filledtribulletup: number;

    /**
     * @default 2757
     */
    const KEY_fiveeighths: number;

    /**
     * @default 2743
     */
    const KEY_fivesixths: number;

    /**
     * @default 16785541
     */
    const KEY_fivesubscript: number;

    /**
     * @default 16785525
     */
    const KEY_fivesuperior: number;

    /**
     * @default 2741
     */
    const KEY_fourfifths: number;

    /**
     * @default 16785540
     */
    const KEY_foursubscript: number;

    /**
     * @default 16785524
     */
    const KEY_foursuperior: number;

    /**
     * @default 16785948
     */
    const KEY_fourthroot: number;

    /**
     * @default 2294
     */
    const KEY_function: number;

    /**
     * @default 103
     */
    const KEY_g: number;

    /**
     * @default 757
     */
    const KEY_gabovedot: number;

    /**
     * @default 699
     */
    const KEY_gbreve: number;

    /**
     * @default 16777703
     */
    const KEY_gcaron: number;

    /**
     * @default 955
     */
    const KEY_gcedilla: number;

    /**
     * @default 760
     */
    const KEY_gcircumflex: number;

    /**
     * @default 96
     */
    const KEY_grave: number;

    /**
     * @default 62
     */
    const KEY_greater: number;

    /**
     * @default 2238
     */
    const KEY_greaterthanequal: number;

    /**
     * @default 171
     */
    const KEY_guillemotleft: number;

    /**
     * @default 187
     */
    const KEY_guillemotright: number;

    /**
     * @default 104
     */
    const KEY_h: number;

    /**
     * @default 2728
     */
    const KEY_hairspace: number;

    /**
     * @default 694
     */
    const KEY_hcircumflex: number;

    /**
     * @default 2798
     */
    const KEY_heart: number;

    /**
     * @default 3296
     */
    const KEY_hebrew_aleph: number;

    /**
     * @default 3314
     */
    const KEY_hebrew_ayin: number;

    /**
     * @default 3297
     */
    const KEY_hebrew_bet: number;

    /**
     * @default 3297
     */
    const KEY_hebrew_beth: number;

    /**
     * @default 3303
     */
    const KEY_hebrew_chet: number;

    /**
     * @default 3299
     */
    const KEY_hebrew_dalet: number;

    /**
     * @default 3299
     */
    const KEY_hebrew_daleth: number;

    /**
     * @default 3295
     */
    const KEY_hebrew_doublelowline: number;

    /**
     * @default 3306
     */
    const KEY_hebrew_finalkaph: number;

    /**
     * @default 3309
     */
    const KEY_hebrew_finalmem: number;

    /**
     * @default 3311
     */
    const KEY_hebrew_finalnun: number;

    /**
     * @default 3315
     */
    const KEY_hebrew_finalpe: number;

    /**
     * @default 3317
     */
    const KEY_hebrew_finalzade: number;

    /**
     * @default 3317
     */
    const KEY_hebrew_finalzadi: number;

    /**
     * @default 3298
     */
    const KEY_hebrew_gimel: number;

    /**
     * @default 3298
     */
    const KEY_hebrew_gimmel: number;

    /**
     * @default 3300
     */
    const KEY_hebrew_he: number;

    /**
     * @default 3303
     */
    const KEY_hebrew_het: number;

    /**
     * @default 3307
     */
    const KEY_hebrew_kaph: number;

    /**
     * @default 3319
     */
    const KEY_hebrew_kuf: number;

    /**
     * @default 3308
     */
    const KEY_hebrew_lamed: number;

    /**
     * @default 3310
     */
    const KEY_hebrew_mem: number;

    /**
     * @default 3312
     */
    const KEY_hebrew_nun: number;

    /**
     * @default 3316
     */
    const KEY_hebrew_pe: number;

    /**
     * @default 3319
     */
    const KEY_hebrew_qoph: number;

    /**
     * @default 3320
     */
    const KEY_hebrew_resh: number;

    /**
     * @default 3313
     */
    const KEY_hebrew_samech: number;

    /**
     * @default 3313
     */
    const KEY_hebrew_samekh: number;

    /**
     * @default 3321
     */
    const KEY_hebrew_shin: number;

    /**
     * @default 3322
     */
    const KEY_hebrew_taf: number;

    /**
     * @default 3322
     */
    const KEY_hebrew_taw: number;

    /**
     * @default 3304
     */
    const KEY_hebrew_tet: number;

    /**
     * @default 3304
     */
    const KEY_hebrew_teth: number;

    /**
     * @default 3301
     */
    const KEY_hebrew_waw: number;

    /**
     * @default 3305
     */
    const KEY_hebrew_yod: number;

    /**
     * @default 3318
     */
    const KEY_hebrew_zade: number;

    /**
     * @default 3318
     */
    const KEY_hebrew_zadi: number;

    /**
     * @default 3302
     */
    const KEY_hebrew_zain: number;

    /**
     * @default 3302
     */
    const KEY_hebrew_zayin: number;

    /**
     * @default 2778
     */
    const KEY_hexagram: number;

    /**
     * @default 2211
     */
    const KEY_horizconnector: number;

    /**
     * @default 2543
     */
    const KEY_horizlinescan1: number;

    /**
     * @default 2544
     */
    const KEY_horizlinescan3: number;

    /**
     * @default 2545
     */
    const KEY_horizlinescan5: number;

    /**
     * @default 2546
     */
    const KEY_horizlinescan7: number;

    /**
     * @default 2547
     */
    const KEY_horizlinescan9: number;

    /**
     * @default 689
     */
    const KEY_hstroke: number;

    /**
     * @default 2530
     */
    const KEY_ht: number;

    /**
     * @default 173
     */
    const KEY_hyphen: number;

    /**
     * @default 105
     */
    const KEY_i: number;

    /**
     * @default 269025120
     */
    const KEY_iTouch: number;

    /**
     * @default 237
     */
    const KEY_iacute: number;

    /**
     * @default 16785099
     */
    const KEY_ibelowdot: number;

    /**
     * @default 16777517
     */
    const KEY_ibreve: number;

    /**
     * @default 238
     */
    const KEY_icircumflex: number;

    /**
     * @default 2255
     */
    const KEY_identical: number;

    /**
     * @default 239
     */
    const KEY_idiaeresis: number;

    /**
     * @default 697
     */
    const KEY_idotless: number;

    /**
     * @default 2253
     */
    const KEY_ifonlyif: number;

    /**
     * @default 236
     */
    const KEY_igrave: number;

    /**
     * @default 16785097
     */
    const KEY_ihook: number;

    /**
     * @default 1007
     */
    const KEY_imacron: number;

    /**
     * @default 2254
     */
    const KEY_implies: number;

    /**
     * @default 2266
     */
    const KEY_includedin: number;

    /**
     * @default 2267
     */
    const KEY_includes: number;

    /**
     * @default 2242
     */
    const KEY_infinity: number;

    /**
     * @default 2239
     */
    const KEY_integral: number;

    /**
     * @default 2268
     */
    const KEY_intersection: number;

    /**
     * @default 999
     */
    const KEY_iogonek: number;

    /**
     * @default 949
     */
    const KEY_itilde: number;

    /**
     * @default 106
     */
    const KEY_j: number;

    /**
     * @default 700
     */
    const KEY_jcircumflex: number;

    /**
     * @default 3018
     */
    const KEY_jot: number;

    /**
     * @default 107
     */
    const KEY_k: number;

    /**
     * @default 1201
     */
    const KEY_kana_A: number;

    /**
     * @default 1217
     */
    const KEY_kana_CHI: number;

    /**
     * @default 1204
     */
    const KEY_kana_E: number;

    /**
     * @default 1228
     */
    const KEY_kana_FU: number;

    /**
     * @default 1226
     */
    const KEY_kana_HA: number;

    /**
     * @default 1229
     */
    const KEY_kana_HE: number;

    /**
     * @default 1227
     */
    const KEY_kana_HI: number;

    /**
     * @default 1230
     */
    const KEY_kana_HO: number;

    /**
     * @default 1228
     */
    const KEY_kana_HU: number;

    /**
     * @default 1202
     */
    const KEY_kana_I: number;

    /**
     * @default 1206
     */
    const KEY_kana_KA: number;

    /**
     * @default 1209
     */
    const KEY_kana_KE: number;

    /**
     * @default 1207
     */
    const KEY_kana_KI: number;

    /**
     * @default 1210
     */
    const KEY_kana_KO: number;

    /**
     * @default 1208
     */
    const KEY_kana_KU: number;

    /**
     * @default 1231
     */
    const KEY_kana_MA: number;

    /**
     * @default 1234
     */
    const KEY_kana_ME: number;

    /**
     * @default 1232
     */
    const KEY_kana_MI: number;

    /**
     * @default 1235
     */
    const KEY_kana_MO: number;

    /**
     * @default 1233
     */
    const KEY_kana_MU: number;

    /**
     * @default 1245
     */
    const KEY_kana_N: number;

    /**
     * @default 1221
     */
    const KEY_kana_NA: number;

    /**
     * @default 1224
     */
    const KEY_kana_NE: number;

    /**
     * @default 1222
     */
    const KEY_kana_NI: number;

    /**
     * @default 1225
     */
    const KEY_kana_NO: number;

    /**
     * @default 1223
     */
    const KEY_kana_NU: number;

    /**
     * @default 1205
     */
    const KEY_kana_O: number;

    /**
     * @default 1239
     */
    const KEY_kana_RA: number;

    /**
     * @default 1242
     */
    const KEY_kana_RE: number;

    /**
     * @default 1240
     */
    const KEY_kana_RI: number;

    /**
     * @default 1243
     */
    const KEY_kana_RO: number;

    /**
     * @default 1241
     */
    const KEY_kana_RU: number;

    /**
     * @default 1211
     */
    const KEY_kana_SA: number;

    /**
     * @default 1214
     */
    const KEY_kana_SE: number;

    /**
     * @default 1212
     */
    const KEY_kana_SHI: number;

    /**
     * @default 1215
     */
    const KEY_kana_SO: number;

    /**
     * @default 1213
     */
    const KEY_kana_SU: number;

    /**
     * @default 1216
     */
    const KEY_kana_TA: number;

    /**
     * @default 1219
     */
    const KEY_kana_TE: number;

    /**
     * @default 1217
     */
    const KEY_kana_TI: number;

    /**
     * @default 1220
     */
    const KEY_kana_TO: number;

    /**
     * @default 1218
     */
    const KEY_kana_TSU: number;

    /**
     * @default 1218
     */
    const KEY_kana_TU: number;

    /**
     * @default 1203
     */
    const KEY_kana_U: number;

    /**
     * @default 1244
     */
    const KEY_kana_WA: number;

    /**
     * @default 1190
     */
    const KEY_kana_WO: number;

    /**
     * @default 1236
     */
    const KEY_kana_YA: number;

    /**
     * @default 1238
     */
    const KEY_kana_YO: number;

    /**
     * @default 1237
     */
    const KEY_kana_YU: number;

    /**
     * @default 1191
     */
    const KEY_kana_a: number;

    /**
     * @default 1187
     */
    const KEY_kana_closingbracket: number;

    /**
     * @default 1188
     */
    const KEY_kana_comma: number;

    /**
     * @default 1189
     */
    const KEY_kana_conjunctive: number;

    /**
     * @default 1194
     */
    const KEY_kana_e: number;

    /**
     * @default 1185
     */
    const KEY_kana_fullstop: number;

    /**
     * @default 1192
     */
    const KEY_kana_i: number;

    /**
     * @default 1189
     */
    const KEY_kana_middledot: number;

    /**
     * @default 1195
     */
    const KEY_kana_o: number;

    /**
     * @default 1186
     */
    const KEY_kana_openingbracket: number;

    /**
     * @default 65406
     */
    const KEY_kana_switch: number;

    /**
     * @default 1199
     */
    const KEY_kana_tsu: number;

    /**
     * @default 1199
     */
    const KEY_kana_tu: number;

    /**
     * @default 1193
     */
    const KEY_kana_u: number;

    /**
     * @default 1196
     */
    const KEY_kana_ya: number;

    /**
     * @default 1198
     */
    const KEY_kana_yo: number;

    /**
     * @default 1197
     */
    const KEY_kana_yu: number;

    /**
     * @default 930
     */
    const KEY_kappa: number;

    /**
     * @default 1011
     */
    const KEY_kcedilla: number;

    /**
     * @default 930
     */
    const KEY_kra: number;

    /**
     * @default 108
     */
    const KEY_l: number;

    /**
     * @default 485
     */
    const KEY_lacute: number;

    /**
     * @default 2777
     */
    const KEY_latincross: number;

    /**
     * @default 16784951
     */
    const KEY_lbelowdot: number;

    /**
     * @default 437
     */
    const KEY_lcaron: number;

    /**
     * @default 950
     */
    const KEY_lcedilla: number;

    /**
     * @default 2748
     */
    const KEY_leftanglebracket: number;

    /**
     * @default 2299
     */
    const KEY_leftarrow: number;

    /**
     * @default 2979
     */
    const KEY_leftcaret: number;

    /**
     * @default 2770
     */
    const KEY_leftdoublequotemark: number;

    /**
     * @default 2223
     */
    const KEY_leftmiddlecurlybrace: number;

    /**
     * @default 2764
     */
    const KEY_leftopentriangle: number;

    /**
     * @default 2794
     */
    const KEY_leftpointer: number;

    /**
     * @default 2209
     */
    const KEY_leftradical: number;

    /**
     * @default 3034
     */
    const KEY_leftshoe: number;

    /**
     * @default 2768
     */
    const KEY_leftsinglequotemark: number;

    /**
     * @default 2548
     */
    const KEY_leftt: number;

    /**
     * @default 3036
     */
    const KEY_lefttack: number;

    /**
     * @default 60
     */
    const KEY_less: number;

    /**
     * @default 2236
     */
    const KEY_lessthanequal: number;

    /**
     * @default 2533
     */
    const KEY_lf: number;

    /**
     * @default 2270
     */
    const KEY_logicaland: number;

    /**
     * @default 2271
     */
    const KEY_logicalor: number;

    /**
     * @default 2541
     */
    const KEY_lowleftcorner: number;

    /**
     * @default 2538
     */
    const KEY_lowrightcorner: number;

    /**
     * @default 435
     */
    const KEY_lstroke: number;

    /**
     * @default 109
     */
    const KEY_m: number;

    /**
     * @default 16784961
     */
    const KEY_mabovedot: number;

    /**
     * @default 175
     */
    const KEY_macron: number;

    /**
     * @default 2807
     */
    const KEY_malesymbol: number;

    /**
     * @default 2800
     */
    const KEY_maltesecross: number;

    /**
     * @default 2751
     */
    const KEY_marker: number;

    /**
     * @default 186
     */
    const KEY_masculine: number;

    /**
     * @default 45
     */
    const KEY_minus: number;

    /**
     * @default 2774
     */
    const KEY_minutes: number;

    /**
     * @default 181
     */
    const KEY_mu: number;

    /**
     * @default 215
     */
    const KEY_multiply: number;

    /**
     * @default 2806
     */
    const KEY_musicalflat: number;

    /**
     * @default 2805
     */
    const KEY_musicalsharp: number;

    /**
     * @default 110
     */
    const KEY_n: number;

    /**
     * @default 2245
     */
    const KEY_nabla: number;

    /**
     * @default 497
     */
    const KEY_nacute: number;

    /**
     * @default 498
     */
    const KEY_ncaron: number;

    /**
     * @default 1009
     */
    const KEY_ncedilla: number;

    /**
     * @default 16785545
     */
    const KEY_ninesubscript: number;

    /**
     * @default 16785529
     */
    const KEY_ninesuperior: number;

    /**
     * @default 2536
     */
    const KEY_nl: number;

    /**
     * @default 160
     */
    const KEY_nobreakspace: number;

    /**
     * @default 16785991
     */
    const KEY_notapproxeq: number;

    /**
     * @default 16785929
     */
    const KEY_notelementof: number;

    /**
     * @default 2237
     */
    const KEY_notequal: number;

    /**
     * @default 16786018
     */
    const KEY_notidentical: number;

    /**
     * @default 172
     */
    const KEY_notsign: number;

    /**
     * @default 241
     */
    const KEY_ntilde: number;

    /**
     * @default 35
     */
    const KEY_numbersign: number;

    /**
     * @default 1712
     */
    const KEY_numerosign: number;

    /**
     * @default 111
     */
    const KEY_o: number;

    /**
     * @default 243
     */
    const KEY_oacute: number;

    /**
     * @default 16777845
     */
    const KEY_obarred: number;

    /**
     * @default 16785101
     */
    const KEY_obelowdot: number;

    /**
     * @default 16777682
     */
    const KEY_ocaron: number;

    /**
     * @default 244
     */
    const KEY_ocircumflex: number;

    /**
     * @default 16785105
     */
    const KEY_ocircumflexacute: number;

    /**
     * @default 16785113
     */
    const KEY_ocircumflexbelowdot: number;

    /**
     * @default 16785107
     */
    const KEY_ocircumflexgrave: number;

    /**
     * @default 16785109
     */
    const KEY_ocircumflexhook: number;

    /**
     * @default 16785111
     */
    const KEY_ocircumflextilde: number;

    /**
     * @default 246
     */
    const KEY_odiaeresis: number;

    /**
     * @default 501
     */
    const KEY_odoubleacute: number;

    /**
     * @default 5053
     */
    const KEY_oe: number;

    /**
     * @default 434
     */
    const KEY_ogonek: number;

    /**
     * @default 242
     */
    const KEY_ograve: number;

    /**
     * @default 16785103
     */
    const KEY_ohook: number;

    /**
     * @default 16777633
     */
    const KEY_ohorn: number;

    /**
     * @default 16785115
     */
    const KEY_ohornacute: number;

    /**
     * @default 16785123
     */
    const KEY_ohornbelowdot: number;

    /**
     * @default 16785117
     */
    const KEY_ohorngrave: number;

    /**
     * @default 16785119
     */
    const KEY_ohornhook: number;

    /**
     * @default 16785121
     */
    const KEY_ohorntilde: number;

    /**
     * @default 1010
     */
    const KEY_omacron: number;

    /**
     * @default 2755
     */
    const KEY_oneeighth: number;

    /**
     * @default 2738
     */
    const KEY_onefifth: number;

    /**
     * @default 189
     */
    const KEY_onehalf: number;

    /**
     * @default 188
     */
    const KEY_onequarter: number;

    /**
     * @default 2742
     */
    const KEY_onesixth: number;

    /**
     * @default 16785537
     */
    const KEY_onesubscript: number;

    /**
     * @default 185
     */
    const KEY_onesuperior: number;

    /**
     * @default 2736
     */
    const KEY_onethird: number;

    /**
     * @default 248
     */
    const KEY_ooblique: number;

    /**
     * @default 2786
     */
    const KEY_openrectbullet: number;

    /**
     * @default 2789
     */
    const KEY_openstar: number;

    /**
     * @default 2788
     */
    const KEY_opentribulletdown: number;

    /**
     * @default 2787
     */
    const KEY_opentribulletup: number;

    /**
     * @default 170
     */
    const KEY_ordfeminine: number;

    /**
     * @default 248
     */
    const KEY_oslash: number;

    /**
     * @default 245
     */
    const KEY_otilde: number;

    /**
     * @default 3008
     */
    const KEY_overbar: number;

    /**
     * @default 1150
     */
    const KEY_overline: number;

    /**
     * @default 112
     */
    const KEY_p: number;

    /**
     * @default 16784983
     */
    const KEY_pabovedot: number;

    /**
     * @default 182
     */
    const KEY_paragraph: number;

    /**
     * @default 40
     */
    const KEY_parenleft: number;

    /**
     * @default 41
     */
    const KEY_parenright: number;

    /**
     * @default 16785922
     */
    const KEY_partdifferential: number;

    /**
     * @default 2287
     */
    const KEY_partialderivative: number;

    /**
     * @default 37
     */
    const KEY_percent: number;

    /**
     * @default 46
     */
    const KEY_period: number;

    /**
     * @default 183
     */
    const KEY_periodcentered: number;

    /**
     * @default 2773
     */
    const KEY_permille: number;

    /**
     * @default 2811
     */
    const KEY_phonographcopyright: number;

    /**
     * @default 43
     */
    const KEY_plus: number;

    /**
     * @default 177
     */
    const KEY_plusminus: number;

    /**
     * @default 2772
     */
    const KEY_prescription: number;

    /**
     * @default 1200
     */
    const KEY_prolongedsound: number;

    /**
     * @default 2726
     */
    const KEY_punctspace: number;

    /**
     * @default 113
     */
    const KEY_q: number;

    /**
     * @default 3020
     */
    const KEY_quad: number;

    /**
     * @default 63
     */
    const KEY_question: number;

    /**
     * @default 191
     */
    const KEY_questiondown: number;

    /**
     * @default 34
     */
    const KEY_quotedbl: number;

    /**
     * @default 96
     */
    const KEY_quoteleft: number;

    /**
     * @default 39
     */
    const KEY_quoteright: number;

    /**
     * @default 114
     */
    const KEY_r: number;

    /**
     * @default 480
     */
    const KEY_racute: number;

    /**
     * @default 2262
     */
    const KEY_radical: number;

    /**
     * @default 504
     */
    const KEY_rcaron: number;

    /**
     * @default 947
     */
    const KEY_rcedilla: number;

    /**
     * @default 174
     */
    const KEY_registered: number;

    /**
     * @default 2750
     */
    const KEY_rightanglebracket: number;

    /**
     * @default 2301
     */
    const KEY_rightarrow: number;

    /**
     * @default 2982
     */
    const KEY_rightcaret: number;

    /**
     * @default 2771
     */
    const KEY_rightdoublequotemark: number;

    /**
     * @default 2224
     */
    const KEY_rightmiddlecurlybrace: number;

    /**
     * @default 2231
     */
    const KEY_rightmiddlesummation: number;

    /**
     * @default 2765
     */
    const KEY_rightopentriangle: number;

    /**
     * @default 2795
     */
    const KEY_rightpointer: number;

    /**
     * @default 3032
     */
    const KEY_rightshoe: number;

    /**
     * @default 2769
     */
    const KEY_rightsinglequotemark: number;

    /**
     * @default 2549
     */
    const KEY_rightt: number;

    /**
     * @default 3068
     */
    const KEY_righttack: number;

    /**
     * @default 115
     */
    const KEY_s: number;

    /**
     * @default 16784993
     */
    const KEY_sabovedot: number;

    /**
     * @default 438
     */
    const KEY_sacute: number;

    /**
     * @default 441
     */
    const KEY_scaron: number;

    /**
     * @default 442
     */
    const KEY_scedilla: number;

    /**
     * @default 16777817
     */
    const KEY_schwa: number;

    /**
     * @default 766
     */
    const KEY_scircumflex: number;

    /**
     * @default 65406
     */
    const KEY_script_switch: number;

    /**
     * @default 2775
     */
    const KEY_seconds: number;

    /**
     * @default 167
     */
    const KEY_section: number;

    /**
     * @default 59
     */
    const KEY_semicolon: number;

    /**
     * @default 1247
     */
    const KEY_semivoicedsound: number;

    /**
     * @default 2758
     */
    const KEY_seveneighths: number;

    /**
     * @default 16785543
     */
    const KEY_sevensubscript: number;

    /**
     * @default 16785527
     */
    const KEY_sevensuperior: number;

    /**
     * @default 2762
     */
    const KEY_signaturemark: number;

    /**
     * @default 2732
     */
    const KEY_signifblank: number;

    /**
     * @default 2249
     */
    const KEY_similarequal: number;

    /**
     * @default 2813
     */
    const KEY_singlelowquotemark: number;

    /**
     * @default 16785542
     */
    const KEY_sixsubscript: number;

    /**
     * @default 16785526
     */
    const KEY_sixsuperior: number;

    /**
     * @default 47
     */
    const KEY_slash: number;

    /**
     * @default 2528
     */
    const KEY_soliddiamond: number;

    /**
     * @default 32
     */
    const KEY_space: number;

    /**
     * @default 16785946
     */
    const KEY_squareroot: number;

    /**
     * @default 223
     */
    const KEY_ssharp: number;

    /**
     * @default 163
     */
    const KEY_sterling: number;

    /**
     * @default 16786019
     */
    const KEY_stricteq: number;

    /**
     * @default 116
     */
    const KEY_t: number;

    /**
     * @default 16785003
     */
    const KEY_tabovedot: number;

    /**
     * @default 443
     */
    const KEY_tcaron: number;

    /**
     * @default 510
     */
    const KEY_tcedilla: number;

    /**
     * @default 2809
     */
    const KEY_telephone: number;

    /**
     * @default 2810
     */
    const KEY_telephonerecorder: number;

    /**
     * @default 2240
     */
    const KEY_therefore: number;

    /**
     * @default 2727
     */
    const KEY_thinspace: number;

    /**
     * @default 254
     */
    const KEY_thorn: number;

    /**
     * @default 2756
     */
    const KEY_threeeighths: number;

    /**
     * @default 2740
     */
    const KEY_threefifths: number;

    /**
     * @default 190
     */
    const KEY_threequarters: number;

    /**
     * @default 16785539
     */
    const KEY_threesubscript: number;

    /**
     * @default 179
     */
    const KEY_threesuperior: number;

    /**
     * @default 16785965
     */
    const KEY_tintegral: number;

    /**
     * @default 2212
     */
    const KEY_topintegral: number;

    /**
     * @default 2219
     */
    const KEY_topleftparens: number;

    /**
     * @default 2210
     */
    const KEY_topleftradical: number;

    /**
     * @default 2215
     */
    const KEY_topleftsqbracket: number;

    /**
     * @default 2225
     */
    const KEY_topleftsummation: number;

    /**
     * @default 2221
     */
    const KEY_toprightparens: number;

    /**
     * @default 2217
     */
    const KEY_toprightsqbracket: number;

    /**
     * @default 2229
     */
    const KEY_toprightsummation: number;

    /**
     * @default 2551
     */
    const KEY_topt: number;

    /**
     * @default 2227
     */
    const KEY_topvertsummationconnector: number;

    /**
     * @default 2761
     */
    const KEY_trademark: number;

    /**
     * @default 2763
     */
    const KEY_trademarkincircle: number;

    /**
     * @default 956
     */
    const KEY_tslash: number;

    /**
     * @default 2739
     */
    const KEY_twofifths: number;

    /**
     * @default 16785538
     */
    const KEY_twosubscript: number;

    /**
     * @default 178
     */
    const KEY_twosuperior: number;

    /**
     * @default 2737
     */
    const KEY_twothirds: number;

    /**
     * @default 117
     */
    const KEY_u: number;

    /**
     * @default 250
     */
    const KEY_uacute: number;

    /**
     * @default 16785125
     */
    const KEY_ubelowdot: number;

    /**
     * @default 765
     */
    const KEY_ubreve: number;

    /**
     * @default 251
     */
    const KEY_ucircumflex: number;

    /**
     * @default 252
     */
    const KEY_udiaeresis: number;

    /**
     * @default 507
     */
    const KEY_udoubleacute: number;

    /**
     * @default 249
     */
    const KEY_ugrave: number;

    /**
     * @default 16785127
     */
    const KEY_uhook: number;

    /**
     * @default 16777648
     */
    const KEY_uhorn: number;

    /**
     * @default 16785129
     */
    const KEY_uhornacute: number;

    /**
     * @default 16785137
     */
    const KEY_uhornbelowdot: number;

    /**
     * @default 16785131
     */
    const KEY_uhorngrave: number;

    /**
     * @default 16785133
     */
    const KEY_uhornhook: number;

    /**
     * @default 16785135
     */
    const KEY_uhorntilde: number;

    /**
     * @default 1022
     */
    const KEY_umacron: number;

    /**
     * @default 3014
     */
    const KEY_underbar: number;

    /**
     * @default 95
     */
    const KEY_underscore: number;

    /**
     * @default 2269
     */
    const KEY_union: number;

    /**
     * @default 1017
     */
    const KEY_uogonek: number;

    /**
     * @default 2300
     */
    const KEY_uparrow: number;

    /**
     * @default 2985
     */
    const KEY_upcaret: number;

    /**
     * @default 2540
     */
    const KEY_upleftcorner: number;

    /**
     * @default 2539
     */
    const KEY_uprightcorner: number;

    /**
     * @default 3011
     */
    const KEY_upshoe: number;

    /**
     * @default 3027
     */
    const KEY_upstile: number;

    /**
     * @default 3022
     */
    const KEY_uptack: number;

    /**
     * @default 505
     */
    const KEY_uring: number;

    /**
     * @default 1021
     */
    const KEY_utilde: number;

    /**
     * @default 118
     */
    const KEY_v: number;

    /**
     * @default 2241
     */
    const KEY_variation: number;

    /**
     * @default 2552
     */
    const KEY_vertbar: number;

    /**
     * @default 2214
     */
    const KEY_vertconnector: number;

    /**
     * @default 1246
     */
    const KEY_voicedsound: number;

    /**
     * @default 2537
     */
    const KEY_vt: number;

    /**
     * @default 119
     */
    const KEY_w: number;

    /**
     * @default 16785027
     */
    const KEY_wacute: number;

    /**
     * @default 16777589
     */
    const KEY_wcircumflex: number;

    /**
     * @default 16785029
     */
    const KEY_wdiaeresis: number;

    /**
     * @default 16785025
     */
    const KEY_wgrave: number;

    /**
     * @default 120
     */
    const KEY_x: number;

    /**
     * @default 16785035
     */
    const KEY_xabovedot: number;

    /**
     * @default 121
     */
    const KEY_y: number;

    /**
     * @default 253
     */
    const KEY_yacute: number;

    /**
     * @default 16785141
     */
    const KEY_ybelowdot: number;

    /**
     * @default 16777591
     */
    const KEY_ycircumflex: number;

    /**
     * @default 255
     */
    const KEY_ydiaeresis: number;

    /**
     * @default 165
     */
    const KEY_yen: number;

    /**
     * @default 16785139
     */
    const KEY_ygrave: number;

    /**
     * @default 16785143
     */
    const KEY_yhook: number;

    /**
     * @default 16785145
     */
    const KEY_ytilde: number;

    /**
     * @default 122
     */
    const KEY_z: number;

    /**
     * @default 447
     */
    const KEY_zabovedot: number;

    /**
     * @default 444
     */
    const KEY_zacute: number;

    /**
     * @default 446
     */
    const KEY_zcaron: number;

    /**
     * @default 16785536
     */
    const KEY_zerosubscript: number;

    /**
     * @default 16785520
     */
    const KEY_zerosuperior: number;

    /**
     * @default 16777654
     */
    const KEY_zstroke: number;

    /**
     * @default 3
     */
    const MAJOR_VERSION: number;

    /**
     * @default 128
     */
    const MAX_TIMECOORD_AXES: number;

    /**
     * @default 53
     */
    const MICRO_VERSION: number;

    /**
     * @default 24
     */
    const MINOR_VERSION: number;

    /**
     * A special value, indicating that the background
     * for a window should be inherited from the parent window.
     * @default 1
     */
    const PARENT_RELATIVE: number;

    /**
     * This is the priority that the idle handler processing window updates
     * is given in the
     * [GLib Main Loop][glib-The-Main-Event-Loop].
     * @default 120
     */
    const PRIORITY_REDRAW: number;

    /**
     * Appends gdk option entries to the passed in option group. This is
     * not public API and must not be used by applications.
     * @param group An option group.
     * @deprecated since 3.16: This symbol was never meant to be used outside   of GTK+
     */
    function add_option_entries_libgtk_only(group: GLib.OptionGroup): void;

    /**
     * Finds or creates an atom corresponding to a given string.
     * @param atom_name a string.
     * @param only_if_exists if `true`, GDK is allowed to not create a new atom, but   just return `GDK_NONE` if the requested atom doesn’t already   exists. Currently, the flag is ignored, since checking the   existance of an atom is as expensive as creating it.
     * @returns the atom corresponding to `atom_name`.
     */
    function atom_intern(atom_name: string, only_if_exists: boolean): Atom;

    /**
     * Finds or creates an atom corresponding to a given string.
     * 
     * Note that this function is identical to `gdk_atom_intern()` except
     * that if a new {@link Gdk.Atom} is created the string itself is used rather
     * than a copy. This saves memory, but can only be used if the string
     * will always exist. It can be used with statically
     * allocated strings in the main program, but not with statically
     * allocated memory in dynamically loaded modules, if you expect to
     * ever unload the module again (e.g. do not use this function in
     * GTK+ theme engines).
     * @param atom_name a static string
     * @returns the atom corresponding to `atom_name`
     * @since 2.10
     */
    function atom_intern_static_string(atom_name: string): Atom;

    /**
     * Emits a short beep on the default display.
     */
    function beep(): void;

    /**
     * Creates a Cairo context for drawing to `window`.
     * 
     * Note that calling `cairo_reset_clip()` on the resulting {@link cairo.Context} will
     * produce undefined results, so avoid it at all costs.
     * 
     * Typically, this function is used to draw on a {@link Gdk.Window} out of the paint
     * cycle of the toolkit; this should be avoided, as it breaks various assumptions
     * and optimizations.
     * 
     * If you are drawing on a native {@link Gdk.Window} in response to a {@link Gdk.EventType.EXPOSE} event
     * you should use `gdk_window_begin_draw_frame()` and `gdk_drawing_context_get_cairo_context()`
     * instead. GTK will automatically do this for you when drawing a widget.
     * @param window a {@link Gdk.Window}
     * @returns A newly created Cairo context. Free with  `cairo_destroy()` when you are done drawing.
     * @since 2.8
     * @deprecated since 3.22: Use `gdk_window_begin_draw_frame()` and   `gdk_drawing_context_get_cairo_context()` instead
     */
    function cairo_create(window: Window): cairo.Context;

    /**
     * This is the main way to draw GL content in GTK+. It takes a render buffer ID
     * (`source_type` == #GL_RENDERBUFFER) or a texture id (`source_type` == #GL_TEXTURE)
     * and draws it onto `cr` with an OVER operation, respecting the current clip.
     * The top left corner of the rectangle specified by `x`, `y`, `width` and `height`
     * will be drawn at the current (0,0) position of the cairo_t.
     * 
     * This will work for *all* cairo_t, as long as `window` is realized, but the
     * fallback implementation that reads back the pixels from the buffer may be
     * used in the general case. In the case of direct drawing to a window with
     * no special effects applied to `cr` it will however use a more efficient
     * approach.
     * 
     * For #GL_RENDERBUFFER the code will always fall back to software for buffers
     * with alpha components, so make sure you use #GL_TEXTURE if using alpha.
     * 
     * Calling this may change the current GL context.
     * @param cr a cairo context
     * @param window The window we're rendering for (not necessarily into)
     * @param source The GL ID of the source buffer
     * @param source_type The type of the `source`
     * @param buffer_scale The scale-factor that the `source` buffer is allocated for
     * @param x The source x position in `source` to start copying from in GL coordinates
     * @param y The source y position in `source` to start copying from in GL coordinates
     * @param width The width of the region to draw
     * @param height The height of the region to draw
     * @since 3.16
     */
    function cairo_draw_from_gl(cr: cairo.Context, window: Window, source: number, source_type: number, buffer_scale: number, x: number, y: number, width: number, height: number): void;

    /**
     * This is a convenience function around `cairo_clip_extents()`.
     * It rounds the clip extents to integer coordinates and returns
     * a boolean indicating if a clip area exists.
     * @param cr a cairo context
     * @returns `true` if a clip rectangle exists, `false` if all of `cr` is     clipped and all drawing can be skipped
     */
    function cairo_get_clip_rectangle(cr: cairo.Context): [boolean, Rectangle | null];

    /**
     * Retrieves the {@link Gdk.DrawingContext} that created the Cairo
     * context `cr`.
     * @param cr a Cairo context
     * @returns a {@link Gdk.DrawingContext}, if any is set
     * @since 3.22
     */
    function cairo_get_drawing_context(cr: cairo.Context): DrawingContext | null;

    /**
     * Adds the given rectangle to the current path of `cr`.
     * @param cr a cairo context
     * @param rectangle a {@link Gdk.Rectangle}
     * @since 2.8
     */
    function cairo_rectangle(cr: cairo.Context, rectangle: Rectangle): void;

    /**
     * Adds the given region to the current path of `cr`.
     * @param cr a cairo context
     * @param region a {@link cairo.Region}
     * @since 2.8
     */
    function cairo_region(cr: cairo.Context, region: cairo.Region): void;

    /**
     * Creates region that describes covers the area where the given
     * `surface` is more than 50% opaque.
     * 
     * This function takes into account device offsets that might be
     * set with `cairo_surface_set_device_offset()`.
     * @param surface a cairo surface
     * @returns A {@link cairo.Region}; must be freed with `cairo_region_destroy()`
     */
    function cairo_region_create_from_surface(surface: cairo.Surface): cairo.Region;

    /**
     * Sets the specified {@link Gdk.Color} as the source color of `cr`.
     * @param cr a cairo context
     * @param color a {@link Gdk.Color}
     * @since 2.8
     * @deprecated since 3.4: Use `gdk_cairo_set_source_rgba()` instead
     */
    function cairo_set_source_color(cr: cairo.Context, color: Color): void;

    /**
     * Sets the given pixbuf as the source pattern for `cr`.
     * 
     * The pattern has an extend mode of {@link cairo.Extend.NONE} and is aligned
     * so that the origin of `pixbuf` is `pixbuf_x`, `pixbuf_y`.
     * @param cr a cairo context
     * @param pixbuf a {@link GdkPixbuf.Pixbuf}
     * @param pixbuf_x X coordinate of location to place upper left corner of `pixbuf`
     * @param pixbuf_y Y coordinate of location to place upper left corner of `pixbuf`
     * @since 2.8
     */
    function cairo_set_source_pixbuf(cr: cairo.Context, pixbuf: GdkPixbuf.Pixbuf, pixbuf_x: number, pixbuf_y: number): void;

    /**
     * Sets the specified {@link Gdk.RGBA} as the source color of `cr`.
     * @param cr a cairo context
     * @param rgba a {@link Gdk.RGBA}
     * @since 3.0
     */
    function cairo_set_source_rgba(cr: cairo.Context, rgba: RGBA): void;

    /**
     * Sets the given window as the source pattern for `cr`.
     * 
     * The pattern has an extend mode of {@link cairo.Extend.NONE} and is aligned
     * so that the origin of `window` is `x`, `y`. The window contains all its
     * subwindows when rendering.
     * 
     * Note that the contents of `window` are undefined outside of the
     * visible part of `window`, so use this function with care.
     * @param cr a cairo context
     * @param window a {@link Gdk.Window}
     * @param x X coordinate of location to place upper left corner of `window`
     * @param y Y coordinate of location to place upper left corner of `window`
     * @since 2.24
     */
    function cairo_set_source_window(cr: cairo.Context, window: Window, x: number, y: number): void;

    /**
     * Creates an image surface with the same contents as
     * the pixbuf.
     * @param pixbuf a {@link GdkPixbuf.Pixbuf}
     * @param scale the scale of the new surface, or 0 to use same as `window`
     * @param for_window The window this will be drawn to, or `null`
     * @returns a new cairo surface, must be freed with `cairo_surface_destroy()`
     * @since 3.10
     */
    function cairo_surface_create_from_pixbuf(pixbuf: GdkPixbuf.Pixbuf, scale: number, for_window: Window | null): cairo.Surface;

    /**
     * Parses a textual specification of a color and fill in the
     * `red`, `green`, and `blue` fields of a {@link Gdk.Color}.
     * 
     * The string can either one of a large set of standard names
     * (taken from the X11 `rgb.txt` file), or it can be a hexadecimal
     * value in the form “\#rgb” “\#rrggbb”, “\#rrrgggbbb” or
     * “\#rrrrggggbbbb” where “r”, “g” and “b” are hex digits of
     * the red, green, and blue components of the color, respectively.
     * (White in the four forms is “\#fff”, “\#ffffff”, “\#fffffffff”
     * and “\#ffffffffffff”).
     * @param spec the string specifying the color
     * @returns `true` if the parsing succeeded
     * @deprecated since 3.14: Use {@link Gdk.RGBA}
     */
    function color_parse(spec: string): [boolean, Color];

    /**
     * Disables multidevice support in GDK. This call must happen prior
     * to `gdk_display_open()`, `gtk_init()`, `gtk_init_with_args()` or
     * `gtk_init_check()` in order to take effect.
     * 
     * Most common GTK+ applications won’t ever need to call this. Only
     * applications that do mixed GDK/Xlib calls could want to disable
     * multidevice support if such Xlib code deals with input devices in
     * any way and doesn’t observe the presence of XInput 2.
     * @since 3.0
     */
    function disable_multidevice(): void;

    /**
     * Aborts a drag without dropping.
     * 
     * This function is called by the drag source.
     * 
     * This function does not need to be called in managed drag and drop
     * operations. See `gdk_drag_context_manage_dnd()` for more information.
     * @param context a {@link Gdk.DragContext}
     * @param time_ the timestamp for this operation
     */
    function drag_abort(context: DragContext, time_: number): void;

    /**
     * Starts a drag and creates a new drag context for it.
     * This function assumes that the drag is controlled by the
     * client pointer device, use `gdk_drag_begin_for_device()` to
     * begin a drag with a different device.
     * 
     * This function is called by the drag source.
     * @param window the source window for this drag.
     * @param targets the offered targets,     as list of `GdkAtoms`
     * @returns a newly created {@link Gdk.DragContext}
     */
    function drag_begin(window: Window, targets: Atom[]): DragContext;

    /**
     * Starts a drag and creates a new drag context for it.
     * 
     * This function is called by the drag source.
     * @param window the source window for this drag
     * @param device the device that controls this drag
     * @param targets the offered targets,     as list of `GdkAtoms`
     * @returns a newly created {@link Gdk.DragContext}
     */
    function drag_begin_for_device(window: Window, device: Device, targets: Atom[]): DragContext;

    /**
     * Starts a drag and creates a new drag context for it.
     * 
     * This function is called by the drag source.
     * @param window the source window for this drag
     * @param device the device that controls this drag
     * @param targets the offered targets,     as list of `GdkAtoms`
     * @param x_root the x coordinate where the drag nominally started
     * @param y_root the y coordinate where the drag nominally started
     * @returns a newly created {@link Gdk.DragContext}
     * @since 3.20
     */
    function drag_begin_from_point(window: Window, device: Device, targets: Atom[], x_root: number, y_root: number): DragContext;

    /**
     * Drops on the current destination.
     * 
     * This function is called by the drag source.
     * 
     * This function does not need to be called in managed drag and drop
     * operations. See `gdk_drag_context_manage_dnd()` for more information.
     * @param context a {@link Gdk.DragContext}
     * @param time_ the timestamp for this operation
     */
    function drag_drop(context: DragContext, time_: number): void;

    /**
     * Inform GDK if the drop ended successfully. Passing `false`
     * for `success` may trigger a drag cancellation animation.
     * 
     * This function is called by the drag source, and should
     * be the last call before dropping the reference to the
     * `context`.
     * 
     * The {@link Gdk.DragContext} will only take the first `gdk_drag_drop_done()`
     * call as effective, if this function is called multiple times,
     * all subsequent calls will be ignored.
     * @param context a {@link Gdk.DragContext}
     * @param success whether the drag was ultimatively successful
     * @since 3.20
     */
    function drag_drop_done(context: DragContext, success: boolean): void;

    /**
     * Returns whether the dropped data has been successfully
     * transferred. This function is intended to be used while
     * handling a {@link Gdk.EventType.DROP_FINISHED} event, its return value is
     * meaningless at other times.
     * @param context a {@link Gdk.DragContext}
     * @returns `true` if the drop was successful.
     * @since 2.6
     */
    function drag_drop_succeeded(context: DragContext): boolean;

    /**
     * Finds the destination window and DND protocol to use at the
     * given pointer position.
     * 
     * This function is called by the drag source to obtain the
     * `dest_window` and `protocol` parameters for `gdk_drag_motion()`.
     * @param context a {@link Gdk.DragContext}
     * @param drag_window a window which may be at the pointer position, but     should be ignored, since it is put up by the drag source as an icon
     * @param screen the screen where the destination window is sought
     * @param x_root the x position of the pointer in root coordinates
     * @param y_root the y position of the pointer in root coordinates
     * @since 2.2
     */
    function drag_find_window_for_screen(context: DragContext, drag_window: Window, screen: Screen, x_root: number, y_root: number): [Window, DragProtocol];

    /**
     * Returns the selection atom for the current source window.
     * @param context a {@link Gdk.DragContext}.
     * @returns the selection atom, or `GDK_NONE`
     */
    function drag_get_selection(context: DragContext): Atom;

    /**
     * Updates the drag context when the pointer moves or the
     * set of actions changes.
     * 
     * This function is called by the drag source.
     * 
     * This function does not need to be called in managed drag and drop
     * operations. See `gdk_drag_context_manage_dnd()` for more information.
     * @param context a {@link Gdk.DragContext}
     * @param dest_window the new destination window, obtained by     `gdk_drag_find_window()`
     * @param protocol the DND protocol in use, obtained by `gdk_drag_find_window()`
     * @param x_root the x position of the pointer in root coordinates
     * @param y_root the y position of the pointer in root coordinates
     * @param suggested_action the suggested action
     * @param possible_actions the possible actions
     * @param time_ the timestamp for this operation
     */
    function drag_motion(context: DragContext, dest_window: Window, protocol: DragProtocol, x_root: number, y_root: number, suggested_action: DragAction, possible_actions: DragAction, time_: number): boolean;

    /**
     * Selects one of the actions offered by the drag source.
     * 
     * This function is called by the drag destination in response to
     * `gdk_drag_motion()` called by the drag source.
     * @param context a {@link Gdk.DragContext}
     * @param action the selected action which will be taken when a drop happens,    or 0 to indicate that a drop will not be accepted
     * @param time_ the timestamp for this operation
     */
    function drag_status(context: DragContext, action: DragAction, time_: number): void;

    /**
     * Ends the drag operation after a drop.
     * 
     * This function is called by the drag destination.
     * @param context a {@link Gdk.DragContext}
     * @param success `true` if the data was successfully received
     * @param time_ the timestamp for this operation
     */
    function drop_finish(context: DragContext, success: boolean, time_: number): void;

    /**
     * Accepts or rejects a drop.
     * 
     * This function is called by the drag destination in response
     * to a drop initiated by the drag source.
     * @param context a {@link Gdk.DragContext}
     * @param accepted `true` if the drop is accepted
     * @param time_ the timestamp for this operation
     */
    function drop_reply(context: DragContext, accepted: boolean, time_: number): void;

    /**
     * Removes an error trap pushed with `gdk_error_trap_push()`.
     * May block until an error has been definitively received
     * or not received from the X server. `gdk_error_trap_pop_ignored()`
     * is preferred if you don’t need to know whether an error
     * occurred, because it never has to block. If you don't
     * need the return value of `gdk_error_trap_pop()`, use
     * `gdk_error_trap_pop_ignored()`.
     * 
     * Prior to GDK 3.0, this function would not automatically
     * sync for you, so you had to `gdk_flush()` if your last
     * call to Xlib was not a blocking round trip.
     * @returns X error code or 0 on success
     */
    function error_trap_pop(): number;

    /**
     * Removes an error trap pushed with `gdk_error_trap_push()`, but
     * without bothering to wait and see whether an error occurred.  If an
     * error arrives later asynchronously that was triggered while the
     * trap was pushed, that error will be ignored.
     * @since 3.0
     */
    function error_trap_pop_ignored(): void;

    /**
     * This function allows X errors to be trapped instead of the normal
     * behavior of exiting the application. It should only be used if it
     * is not possible to avoid the X error in any other way. Errors are
     * ignored on all {@link Gdk.Display} currently known to the
     * {@link Gdk.DisplayManager}. If you don’t care which error happens and just
     * want to ignore everything, pop with `gdk_error_trap_pop_ignored()`.
     * If you need the error code, use `gdk_error_trap_pop()` which may have
     * to block and wait for the error to arrive from the X server.
     * 
     * This API exists on all platforms but only does anything on X.
     * 
     * You can use `gdk_x11_display_error_trap_push()` to ignore errors
     * on only a single display.
     * 
     * ## Trapping an X error
     * 
     * 
     * ```c
     * gdk_error_trap_push ();
     * 
     *  // ... Call the X function which may cause an error here ...
     * 
     * 
     * if (gdk_error_trap_pop ())
     *  {
     *    // ... Handle the error here ...
     *  }
     * ```
     * 
     */
    function error_trap_push(): void;

    /**
     * Checks all open displays for a {@link Gdk.Event} to process,to be processed
     * on, fetching events from the windowing system if necessary.
     * See `gdk_display_get_event()`.
     * @returns the next {@link Gdk.Event} to be processed, or `null` if no events are pending. The returned {@link Gdk.Event} should be freed with `gdk_event_free()`.
     */
    function event_get(): Event | null;

    /**
     * Sets the function to call to handle all events from GDK.
     * 
     * Note that GTK+ uses this to install its own event handler, so it is
     * usually not useful for GTK+ applications. (Although an application
     * can call this function then call `gtk_main_do_event()` to pass
     * events to GTK+.)
     * @param func the function to call to handle events from GDK.
     */
    function event_handler_set(func: EventFunc): void;

    /**
     * If there is an event waiting in the event queue of some open
     * display, returns a copy of it. See `gdk_display_peek_event()`.
     * @returns a copy of the first {@link Gdk.Event} on some event queue, or `null` if no events are in any queues. The returned {@link Gdk.Event} should be freed with `gdk_event_free()`.
     */
    function event_peek(): Event | null;

    /**
     * Request more motion notifies if `event` is a motion notify hint event.
     * 
     * This function should be used instead of `gdk_window_get_pointer()` to
     * request further motion notifies, because it also works for extension
     * events where motion notifies are provided for devices other than the
     * core pointer. Coordinate extraction, processing and requesting more
     * motion events from a {@link Gdk.EventType.MOTION_NOTIFY} event usually works like this:
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
     * @param event a valid {@link Gdk.Event}
     * @since 2.12
     */
    function event_request_motions(event: EventMotion): void;

    /**
     * If both events contain X/Y information, this function will return `true`
     * and return in `angle` the relative angle from `event1` to `event2`. The rotation
     * direction for positive angles is from the positive X axis towards the positive
     * Y axis.
     * @param event1 first {@link Gdk.Event}
     * @param event2 second {@link Gdk.Event}
     * @returns `true` if the angle could be calculated.
     * @since 3.0
     */
    function events_get_angle(event1: Event, event2: Event): [boolean, number];

    /**
     * If both events contain X/Y information, the center of both coordinates
     * will be returned in `x` and `y`.
     * @param event1 first {@link Gdk.Event}
     * @param event2 second {@link Gdk.Event}
     * @returns `true` if the center could be calculated.
     * @since 3.0
     */
    function events_get_center(event1: Event, event2: Event): [boolean, number, number];

    /**
     * If both events have X/Y information, the distance between both coordinates
     * (as in a straight line going from `event1` to `event2`) will be returned.
     * @param event1 first {@link Gdk.Event}
     * @param event2 second {@link Gdk.Event}
     * @returns `true` if the distance could be calculated.
     * @since 3.0
     */
    function events_get_distance(event1: Event, event2: Event): [boolean, number];

    /**
     * Checks if any events are ready to be processed for any display.
     * @returns `true` if any events are pending.
     */
    function events_pending(): boolean;

    /**
     * Flushes the output buffers of all display connections and waits
     * until all requests have been processed.
     * This is rarely needed by applications.
     */
    function flush(): void;

    /**
     * Obtains the root window (parent all other windows are inside)
     * for the default display and screen.
     * @returns the default root window
     */
    function get_default_root_window(): Window;

    /**
     * Gets the name of the display, which usually comes from the
     * `DISPLAY` environment variable or the
     * `--display` command line option.
     * @returns the name of the display.
     * @deprecated since 3.8: Call gdk_display_get_name (gdk_display_get_default ()))    instead.
     */
    function get_display(): string;

    /**
     * Gets the display name specified in the command line arguments passed
     * to `gdk_init()` or `gdk_parse_args()`, if any.
     * @returns the display name, if specified explicitly,   otherwise `null` this string is owned by GTK+ and must not be   modified or freed.
     * @since 2.2
     */
    function get_display_arg_name(): string | null;

    /**
     * Gets the program class. Unless the program class has explicitly
     * been set with `gdk_set_program_class()` or with the `--class`
     * commandline option, the default value is the program name (determined
     * with `g_get_prgname()`) with the first character converted to uppercase.
     * @returns the program class.
     */
    function get_program_class(): string;

    /**
     * Gets whether event debugging output is enabled.
     * @returns `true` if event debugging output is enabled.
     */
    function get_show_events(): boolean;

    function gl_error_quark(): GLib.Quark;

    /**
     * Initializes the GDK library and connects to the windowing system.
     * If initialization fails, a warning message is output and the application
     * terminates with a call to `exit(1)`.
     * 
     * Any arguments used by GDK are removed from the array and `argc` and `argv`
     * are updated accordingly.
     * 
     * GTK+ initializes GDK in `gtk_init()` and so this function is not usually
     * needed by GTK+ applications.
     * @param argv the array of command line arguments.
     */
    function init(argv: string[]): string[];

    /**
     * Initializes the GDK library and connects to the windowing system,
     * returning `true` on success.
     * 
     * Any arguments used by GDK are removed from the array and `argc` and `argv`
     * are updated accordingly.
     * 
     * GTK+ initializes GDK in `gtk_init()` and so this function is not usually
     * needed by GTK+ applications.
     * @param argv the array of command line arguments.
     * @returns `true` if initialization succeeded.
     */
    function init_check(argv: string[]): [boolean, string[]];

    /**
     * Grabs the keyboard so that all events are passed to this
     * application until the keyboard is ungrabbed with `gdk_keyboard_ungrab()`.
     * This overrides any previous keyboard grab by this client.
     * 
     * If you set up anything at the time you take the grab that needs to be cleaned
     * up when the grab ends, you should handle the {@link Gdk.EventGrabBroken} events that
     * are emitted when the grab ends unvoluntarily.
     * @param window the {@link Gdk.Window} which will own the grab (the grab window).
     * @param owner_events if `false` then all keyboard events are reported with respect to   `window`. If `true` then keyboard events for this application are   reported as normal, but keyboard events outside this application   are reported with respect to `window`. Both key press and key   release events are always reported, independant of the event mask   set by the application.
     * @param time_ a timestamp from a {@link Gdk.Event}, or `GDK_CURRENT_TIME` if no timestamp is   available.
     * @returns {@link Gdk.GrabStatus.SUCCESS} if the grab was successful.
     * @deprecated since 3.0: Use `gdk_device_grab()` instead.
     */
    function keyboard_grab(window: Window, owner_events: boolean, time_: number): GrabStatus;

    /**
     * Ungrabs the keyboard on the default display, if it is grabbed by this
     * application.
     * @param time_ a timestamp from a {@link Gdk.Event}, or `GDK_CURRENT_TIME` if no        timestamp is available.
     * @deprecated since 3.0: Use `gdk_device_ungrab()`, together with `gdk_device_grab()`             instead.
     */
    function keyboard_ungrab(time_: number): void;

    /**
     * Obtains the upper- and lower-case versions of the keyval `symbol`.
     * Examples of keyvals are #GDK_KEY_a, #GDK_KEY_Enter, #GDK_KEY_F1, etc.
     * @param symbol a keyval
     */
    function keyval_convert_case(symbol: number): [number, number];

    /**
     * Converts a key name to a key value.
     * 
     * The names are the same as those in the
     * `gdk/gdkkeysyms.h` header file
     * but without the leading “GDK_KEY_”.
     * @param keyval_name a key name
     * @returns the corresponding key value, or %GDK_KEY_VoidSymbol     if the key name is not a valid key
     */
    function keyval_from_name(keyval_name: string): number;

    /**
     * Returns `true` if the given key value is in lower case.
     * @param keyval a key value.
     * @returns `true` if `keyval` is in lower case, or if `keyval` is not   subject to case conversion.
     */
    function keyval_is_lower(keyval: number): boolean;

    /**
     * Returns `true` if the given key value is in upper case.
     * @param keyval a key value.
     * @returns `true` if `keyval` is in upper case, or if `keyval` is not subject to  case conversion.
     */
    function keyval_is_upper(keyval: number): boolean;

    /**
     * Converts a key value into a symbolic name.
     * 
     * The names are the same as those in the
     * `gdk/gdkkeysyms.h` header file
     * but without the leading “GDK_KEY_”.
     * @param keyval a key value
     * @returns a string containing the name     of the key, or `null` if `keyval` is not a valid key. The string     should not be modified.
     */
    function keyval_name(keyval: number): string | null;

    /**
     * Converts a key value to lower case, if applicable.
     * @param keyval a key value.
     * @returns the lower case form of `keyval`, or `keyval` itself if it is already  in lower case or it is not subject to case conversion.
     */
    function keyval_to_lower(keyval: number): number;

    /**
     * Convert from a GDK key symbol to the corresponding ISO10646 (Unicode)
     * character.
     * @param keyval a GDK key symbol
     * @returns the corresponding unicode character, or 0 if there               is no corresponding character.
     */
    function keyval_to_unicode(keyval: number): number;

    /**
     * Converts a key value to upper case, if applicable.
     * @param keyval a key value.
     * @returns the upper case form of `keyval`, or `keyval` itself if it is already   in upper case or it is not subject to case conversion.
     */
    function keyval_to_upper(keyval: number): number;

    /**
     * Lists the available visuals for the default screen.
     * (See `gdk_screen_list_visuals()`)
     * A visual describes a hardware image data format.
     * For example, a visual might support 24-bit color, or 8-bit color,
     * and might expect pixels to be in a certain format.
     * 
     * Call `g_list_free()` on the return value when you’re finished with it.
     * @returns a list of visuals; the list must be freed, but not its contents
     * @deprecated since 3.22: Use gdk_screen_list_visuals (gdk_screen_get_default ()).
     */
    function list_visuals(): Visual[];

    /**
     * Indicates to the GUI environment that the application has finished
     * loading. If the applications opens windows, this function is
     * normally called after opening the application’s initial set of
     * windows.
     * 
     * GTK+ will call this function automatically after opening the first
     * `GtkWindow` unless `gtk_window_set_auto_startup_notification()` is called
     * to disable that feature.
     * @since 2.2
     */
    function notify_startup_complete(): void;

    /**
     * Indicates to the GUI environment that the application has
     * finished loading, using a given identifier.
     * 
     * GTK+ will call this function automatically for `GtkWindow`
     * with custom startup-notification identifier unless
     * `gtk_window_set_auto_startup_notification()` is called to
     * disable that feature.
     * @param startup_id a startup-notification identifier, for which     notification process should be completed
     * @since 2.12
     */
    function notify_startup_complete_with_id(startup_id: string): void;

    /**
     * Gets the window that `window` is embedded in.
     * @param window a {@link Gdk.Window}
     * @returns the embedding {@link Gdk.Window}, or     `null` if `window` is not an mbedded offscreen window
     * @since 2.18
     */
    function offscreen_window_get_embedder(window: Window): Window | null;

    /**
     * Gets the offscreen surface that an offscreen window renders into.
     * If you need to keep this around over window resizes, you need to
     * add a reference to it.
     * @param window a {@link Gdk.Window}
     * @returns The offscreen surface, or   `null` if not offscreen
     */
    function offscreen_window_get_surface(window: Window): cairo.Surface | null;

    /**
     * Sets `window` to be embedded in `embedder`.
     * 
     * To fully embed an offscreen window, in addition to calling this
     * function, it is also necessary to handle the {@link Gdk.Window.SignalSignatures.pick_embedded_child | Gdk.Window::pick-embedded-child}
     * signal on the `embedder` and the {@link Gdk.Window.SignalSignatures.to_embedder | Gdk.Window::to-embedder} and
     * {@link Gdk.Window.SignalSignatures.from_embedder | Gdk.Window::from-embedder} signals on `window`.
     * @param window a {@link Gdk.Window}
     * @param embedder the {@link Gdk.Window} that `window` gets embedded in
     * @since 2.18
     */
    function offscreen_window_set_embedder(window: Window, embedder: Window): void;

    /**
     * Creates a {@link Pango.Context} for the default GDK screen.
     * 
     * The context must be freed when you’re finished with it.
     * 
     * When using GTK+, normally you should use `gtk_widget_get_pango_context()`
     * instead of this function, to get the appropriate context for
     * the widget you intend to render text onto.
     * 
     * The newly created context will have the default font options (see
     * {@link cairo.FontOptions}) for the default screen; if these options
     * change it will not be updated. Using `gtk_widget_get_pango_context()`
     * is more convenient if you want to keep a context around and track
     * changes to the screen’s font rendering settings.
     * @returns a new {@link Pango.Context} for the default display
     */
    function pango_context_get(): Pango.Context;

    /**
     * Creates a {@link Pango.Context} for `display`.
     * 
     * The context must be freed when you’re finished with it.
     * 
     * When using GTK+, normally you should use `gtk_widget_get_pango_context()`
     * instead of this function, to get the appropriate context for
     * the widget you intend to render text onto.
     * 
     * The newly created context will have the default font options
     * (see {@link cairo.FontOptions}) for the display; if these options
     * change it will not be updated. Using `gtk_widget_get_pango_context()`
     * is more convenient if you want to keep a context around and track
     * changes to the font rendering settings.
     * @param display the {@link Gdk.Display} for which the context is to be created
     * @returns a new {@link Pango.Context} for `display`
     * @since 3.22
     */
    function pango_context_get_for_display(display: Display): Pango.Context;

    /**
     * Creates a {@link Pango.Context} for `screen`.
     * 
     * The context must be freed when you’re finished with it.
     * 
     * When using GTK+, normally you should use `gtk_widget_get_pango_context()`
     * instead of this function, to get the appropriate context for
     * the widget you intend to render text onto.
     * 
     * The newly created context will have the default font options
     * (see {@link cairo.FontOptions}) for the screen; if these options
     * change it will not be updated. Using `gtk_widget_get_pango_context()`
     * is more convenient if you want to keep a context around and track
     * changes to the screen’s font rendering settings.
     * @param screen the {@link Gdk.Screen} for which the context is to be created.
     * @returns a new {@link Pango.Context} for `screen`
     * @since 2.2
     */
    function pango_context_get_for_screen(screen: Screen): Pango.Context;

    /**
     * Parse command line arguments, and store for future
     * use by calls to `gdk_display_open()`.
     * 
     * Any arguments used by GDK are removed from the array and `argc` and `argv` are
     * updated accordingly.
     * 
     * You shouldn’t call this function explicitly if you are using
     * `gtk_init()`, `gtk_init_check()`, `gdk_init()`, or `gdk_init_check()`.
     * @param argv the array of command line arguments.
     * @since 2.2
     */
    function parse_args(argv: string[]): string[];

    /**
     * Transfers image data from a {@link cairo.Surface} and converts it to an RGB(A)
     * representation inside a {@link GdkPixbuf.Pixbuf}. This allows you to efficiently read
     * individual pixels from cairo surfaces. For `GdkWindows`, use
     * `gdk_pixbuf_get_from_window()` instead.
     * 
     * This function will create an RGB pixbuf with 8 bits per channel.
     * The pixbuf will contain an alpha channel if the `surface` contains one.
     * @param surface surface to copy from
     * @param src_x Source X coordinate within `surface`
     * @param src_y Source Y coordinate within `surface`
     * @param width Width in pixels of region to get
     * @param height Height in pixels of region to get
     * @returns A newly-created pixbuf with a     reference count of 1, or `null` on error
     */
    function pixbuf_get_from_surface(surface: cairo.Surface, src_x: number, src_y: number, width: number, height: number): GdkPixbuf.Pixbuf | null;

    /**
     * Transfers image data from a {@link Gdk.Window} and converts it to an RGB(A)
     * representation inside a {@link GdkPixbuf.Pixbuf}.
     * 
     * In other words, copies image data from a server-side drawable to a
     * client-side RGB(A) buffer. This allows you to efficiently read
     * individual pixels on the client side.
     * 
     * This function will create an RGB pixbuf with 8 bits per channel with
     * the size specified by the `width` and `height` arguments scaled by the
     * scale factor of `window`. The pixbuf will contain an alpha channel if
     * the `window` contains one.
     * 
     * If the window is off the screen, then there is no image data in the
     * obscured/offscreen regions to be placed in the pixbuf. The contents of
     * portions of the pixbuf corresponding to the offscreen region are
     * undefined.
     * 
     * If the window you’re obtaining data from is partially obscured by
     * other windows, then the contents of the pixbuf areas corresponding
     * to the obscured regions are undefined.
     * 
     * If the window is not mapped (typically because it’s iconified/minimized
     * or not on the current workspace), then `null` will be returned.
     * 
     * If memory can’t be allocated for the return value, `null` will be returned
     * instead.
     * 
     * In short, there are several ways this function can fail, and if it fails
     * it returns `null`; so check the return value.
     * 
     * You should rarely, if ever, need to call this function.
     * @param window Source window
     * @param src_x Source X coordinate within `window`
     * @param src_y Source Y coordinate within `window`
     * @param width Width in pixels of region to get
     * @param height Height in pixels of region to get
     * @returns A newly-created pixbuf with a   reference count of 1, or `null` on error
     */
    function pixbuf_get_from_window(window: Window, src_x: number, src_y: number, width: number, height: number): GdkPixbuf.Pixbuf | null;

    /**
     * Grabs the pointer (usually a mouse) so that all events are passed to this
     * application until the pointer is ungrabbed with `gdk_pointer_ungrab()`, or
     * the grab window becomes unviewable.
     * This overrides any previous pointer grab by this client.
     * 
     * Pointer grabs are used for operations which need complete control over mouse
     * events, even if the mouse leaves the application.
     * For example in GTK+ it is used for Drag and Drop, for dragging the handle in
     * the `GtkHPaned` and `GtkVPaned` widgets.
     * 
     * Note that if the event mask of an X window has selected both button press and
     * button release events, then a button press event will cause an automatic
     * pointer grab until the button is released.
     * X does this automatically since most applications expect to receive button
     * press and release events in pairs.
     * It is equivalent to a pointer grab on the window with `owner_events` set to
     * `true`.
     * 
     * If you set up anything at the time you take the grab that needs to be cleaned
     * up when the grab ends, you should handle the {@link Gdk.EventGrabBroken} events that
     * are emitted when the grab ends unvoluntarily.
     * @param window the {@link Gdk.Window} which will own the grab (the grab window).
     * @param owner_events if `false` then all pointer events are reported with respect to                `window` and are only reported if selected by `event_mask`. If `true` then pointer                events for this application are reported as normal, but pointer events outside                this application are reported with respect to `window` and only if selected by                `event_mask`. In either mode, unreported events are discarded.
     * @param event_mask specifies the event mask, which is used in accordance with              `owner_events`. Note that only pointer events (i.e. button and motion events)              may be selected.
     * @param confine_to If non-`null`, the pointer will be confined to this              window during the grab. If the pointer is outside `confine_to`, it will              automatically be moved to the closest edge of `confine_to` and enter              and leave events will be generated as necessary.
     * @param cursor the cursor to display while the grab is active. If this is `null` then          the normal cursors are used for `window` and its descendants, and the cursor          for `window` is used for all other windows.
     * @param time_ the timestamp of the event which led to this pointer grab. This usually         comes from a {@link Gdk.EventButton} struct, though `GDK_CURRENT_TIME` can be used if         the time isn’t known.
     * @returns {@link Gdk.GrabStatus.SUCCESS} if the grab was successful.
     * @deprecated since 3.0: Use `gdk_device_grab()` instead.
     */
    function pointer_grab(window: Window, owner_events: boolean, event_mask: EventMask, confine_to: Window | null, cursor: Cursor | null, time_: number): GrabStatus;

    /**
     * Returns `true` if the pointer on the default display is currently
     * grabbed by this application.
     * 
     * Note that this does not take the inmplicit pointer grab on button
     * presses into account.
     * @returns `true` if the pointer is currently grabbed by this application.
     * @deprecated since 3.0: Use `gdk_display_device_is_grabbed()` instead.
     */
    function pointer_is_grabbed(): boolean;

    /**
     * Ungrabs the pointer on the default display, if it is grabbed by this
     * application.
     * @param time_ a timestamp from a {@link Gdk.Event}, or `GDK_CURRENT_TIME` if no  timestamp is available.
     * @deprecated since 3.0: Use `gdk_device_ungrab()`, together with `gdk_device_grab()`             instead.
     */
    function pointer_ungrab(time_: number): void;

    /**
     * Prepare for parsing command line arguments for GDK. This is not
     * public API and should not be used in application code.
     * @deprecated since 3.16: This symbol was never meant to be used outside   of GTK+
     */
    function pre_parse_libgtk_only(): void;

    /**
     * Deletes a property from a window.
     * @param window a {@link Gdk.Window}
     * @param property the property to delete
     */
    function property_delete(window: Window, property: Atom): void;

    /**
     * Retrieves a portion of the contents of a property. If the
     * property does not exist, then the function returns `false`,
     * and `GDK_NONE` will be stored in `actual_property_type`.
     * 
     * The XGetWindowProperty() function that `gdk_property_get()`
     * uses has a very confusing and complicated set of semantics.
     * Unfortunately, `gdk_property_get()` makes the situation
     * worse instead of better (the semantics should be considered
     * undefined), and also prints warnings to stderr in cases where it
     * should return a useful error to the program. You are advised to use
     * XGetWindowProperty() directly until a replacement function for
     * `gdk_property_get()` is provided.
     * @param window a {@link Gdk.Window}
     * @param property the property to retrieve
     * @param type the desired property type, or `GDK_NONE`, if any type of data   is acceptable. If this does not match the actual   type, then `actual_format` and `actual_length` will   be filled in, a warning will be printed to stderr   and no data will be returned.
     * @param offset the offset into the property at which to begin   retrieving data, in 4 byte units.
     * @param length the length of the data to retrieve in bytes.  Data is   considered to be retrieved in 4 byte chunks, so `length`   will be rounded up to the next highest 4 byte boundary   (so be careful not to pass a value that might overflow   when rounded up).
     * @param pdelete if `true`, delete the property after retrieving the   data.
     * @returns `true` if data was successfully received and stored   in `data`, otherwise `false`.
     */
    function property_get(window: Window, property: Atom, type: Atom, offset: bigint | number, length: bigint | number, pdelete: number): [boolean, Atom, number, Uint8Array];

    /**
     * This function returns the available bit depths for the default
     * screen. It’s equivalent to listing the visuals
     * (gdk_list_visuals()) and then looking at the depth field in each
     * visual, removing duplicates.
     * 
     * The array returned by this function should not be freed.
     * @deprecated since 3.22: Visual selection should be done using     `gdk_screen_get_system_visual()` and `gdk_screen_get_rgba_visual()`
     */
    function query_depths(): number[];

    /**
     * This function returns the available visual types for the default
     * screen. It’s equivalent to listing the visuals
     * (gdk_list_visuals()) and then looking at the type field in each
     * visual, removing duplicates.
     * 
     * The array returned by this function should not be freed.
     * @deprecated since 3.22: Visual selection should be done using     `gdk_screen_get_system_visual()` and `gdk_screen_get_rgba_visual()`
     */
    function query_visual_types(): VisualType[];

    /**
     * Retrieves the contents of a selection in a given
     * form.
     * @param requestor a {@link Gdk.Window}.
     * @param selection an atom identifying the selection to get the   contents of.
     * @param target the form in which to retrieve the selection.
     * @param time_ the timestamp to use when retrieving the   selection. The selection owner may refuse the   request if it did not own the selection at   the time indicated by the timestamp.
     */
    function selection_convert(requestor: Window, selection: Atom, target: Atom, time_: number): void;

    /**
     * Determines the owner of the given selection.
     * @param selection an atom indentifying a selection.
     * @returns if there is a selection owner   for this window, and it is a window known to the current process,   the {@link Gdk.Window} that owns the selection, otherwise `null`. Note   that the return value may be owned by a different process if a   foreign window was previously created for that window, but a new   foreign window will never be created by this call.
     */
    function selection_owner_get(selection: Atom): Window | null;

    /**
     * Determine the owner of the given selection.
     * 
     * Note that the return value may be owned by a different
     * process if a foreign window was previously created for that
     * window, but a new foreign window will never be created by this call.
     * @param display a {@link Gdk.Display}
     * @param selection an atom indentifying a selection
     * @returns if there is a selection owner    for this window, and it is a window known to the current    process, the {@link Gdk.Window} that owns the selection, otherwise    `null`.
     * @since 2.2
     */
    function selection_owner_get_for_display(display: Display, selection: Atom): Window | null;

    /**
     * Sets the owner of the given selection.
     * @param owner a {@link Gdk.Window} or `null` to indicate that the   the owner for the given should be unset.
     * @param selection an atom identifying a selection.
     * @param time_ timestamp to use when setting the selection.   If this is older than the timestamp given last   time the owner was set for the given selection, the   request will be ignored.
     * @param send_event if `true`, and the new owner is different   from the current owner, the current owner   will be sent a SelectionClear event.
     * @returns `true` if the selection owner was successfully   changed to `owner`, otherwise `false`.
     */
    function selection_owner_set(owner: Window | null, selection: Atom, time_: number, send_event: boolean): boolean;

    /**
     * Sets the {@link Gdk.Window} `owner` as the current owner of the selection `selection`.
     * @param display the {@link Gdk.Display}
     * @param owner a {@link Gdk.Window} or `null` to indicate that the owner for         the given should be unset
     * @param selection an atom identifying a selection
     * @param time_ timestamp to use when setting the selection         If this is older than the timestamp given last time the owner was         set for the given selection, the request will be ignored
     * @param send_event if `true`, and the new owner is different from the current              owner, the current owner will be sent a SelectionClear event
     * @returns `true` if the selection owner was successfully changed to owner,    otherwise `false`.
     * @since 2.2
     */
    function selection_owner_set_for_display(display: Display, owner: Window | null, selection: Atom, time_: number, send_event: boolean): boolean;

    /**
     * Sends a response to SelectionRequest event.
     * @param requestor window to which to deliver response.
     * @param selection selection that was requested.
     * @param target target that was selected.
     * @param property property in which the selection owner stored the   data, or `GDK_NONE` to indicate that the request   was rejected.
     * @param time_ timestamp.
     */
    function selection_send_notify(requestor: Window, selection: Atom, target: Atom, property: Atom, time_: number): void;

    /**
     * Send a response to SelectionRequest event.
     * @param display the {@link Gdk.Display} where `requestor` is realized
     * @param requestor window to which to deliver response
     * @param selection selection that was requested
     * @param target target that was selected
     * @param property property in which the selection owner stored the data,            or `GDK_NONE` to indicate that the request was rejected
     * @param time_ timestamp
     * @since 2.2
     */
    function selection_send_notify_for_display(display: Display, requestor: Window, selection: Atom, target: Atom, property: Atom, time_: number): void;

    /**
     * Sets a list of backends that GDK should try to use.
     * 
     * This can be be useful if your application does not
     * work with certain GDK backends.
     * 
     * By default, GDK tries all included backends.
     * 
     * For example,
     * 
     * ```c
     * gdk_set_allowed_backends ("wayland,quartz,*");
     * ```
     * 
     * instructs GDK to try the Wayland backend first,
     * followed by the Quartz backend, and then all
     * others.
     * 
     * If the `GDK_BACKEND` environment variable
     * is set, it determines what backends are tried in what
     * order, while still respecting the set of allowed backends
     * that are specified by this function.
     * 
     * The possible backend names are x11, win32, quartz,
     * broadway, wayland. You can also include a * in the
     * list to try all remaining backends.
     * 
     * This call must happen prior to `gdk_display_open()`,
     * `gtk_init()`, `gtk_init_with_args()` or `gtk_init_check()`
     * in order to take effect.
     * @param backends a comma-separated list of backends
     * @since 3.10
     */
    function set_allowed_backends(backends: string): void;

    /**
     * Set the double click time for the default display. See
     * `gdk_display_set_double_click_time()`.
     * See also `gdk_display_set_double_click_distance()`.
     * Applications should not set this, it is a
     * global user-configured setting.
     * @param msec double click time in milliseconds (thousandths of a second)
     */
    function set_double_click_time(msec: number): void;

    /**
     * Sets the program class. The X11 backend uses the program class to set
     * the class name part of the `WM_CLASS` property on
     * toplevel windows; see the ICCCM.
     * 
     * The program class can still be overridden with the --class command
     * line option.
     * @param program_class a string.
     */
    function set_program_class(program_class: string): void;

    /**
     * Sets whether a trace of received events is output.
     * Note that GTK+ must be compiled with debugging (that is,
     * configured using the `--enable-debug` option)
     * to use this option.
     * @param show_events `true` to output event debugging information.
     */
    function set_show_events(show_events: boolean): void;

    /**
     * Obtains a desktop-wide setting, such as the double-click time,
     * for the default screen. See `gdk_screen_get_setting()`.
     * @param name the name of the setting.
     * @param value location to store the value of the setting.
     * @returns `true` if the setting existed and a value was stored   in `value`, `false` otherwise.
     */
    function setting_get(name: string, value: GObject.Value | any): boolean;

    /**
     * @param window 
     * @param unset_flags 
     * @param set_flags 
     */
    function synthesize_window_state(window: Window, unset_flags: WindowState, set_flags: WindowState): void;

    /**
     * Retrieves a pixel from `window` to force the windowing
     * system to carry out any pending rendering commands.
     * 
     * This function is intended to be used to synchronize with rendering
     * pipelines, to benchmark windowing system rendering operations.
     * @param window a mapped {@link Gdk.Window}
     * @since 2.14
     */
    function test_render_sync(window: Window): void;

    /**
     * This function is intended to be used in GTK+ test programs.
     * It will warp the mouse pointer to the given (`x`,`y`) coordinates
     * within `window` and simulate a button press or release event.
     * Because the mouse pointer needs to be warped to the target
     * location, use of this function outside of test programs that
     * run in their own virtual windowing system (e.g. Xvfb) is not
     * recommended.
     * 
     * Also, `gdk_test_simulate_button()` is a fairly low level function,
     * for most testing purposes, `gtk_test_widget_click()` is the right
     * function to call which will generate a button press event followed
     * by its accompanying button release event.
     * @param window a {@link Gdk.Window} to simulate a button event for
     * @param x x coordinate within `window` for the button event
     * @param y y coordinate within `window` for the button event
     * @param button Number of the pointer button for the event, usually 1, 2 or 3
     * @param modifiers Keyboard modifiers the event is setup with
     * @param button_pressrelease either {@link Gdk.EventType.BUTTON_PRESS} or {@link Gdk.EventType.BUTTON_RELEASE}
     * @returns whether all actions necessary for a button event simulation     were carried out successfully
     * @since 2.14
     */
    function test_simulate_button(window: Window, x: number, y: number, button: number, modifiers: ModifierType, button_pressrelease: EventType): boolean;

    /**
     * This function is intended to be used in GTK+ test programs.
     * If (`x`,`y`) are > (-1,-1), it will warp the mouse pointer to
     * the given (`x`,`y`) coordinates within `window` and simulate a
     * key press or release event.
     * 
     * When the mouse pointer is warped to the target location, use
     * of this function outside of test programs that run in their
     * own virtual windowing system (e.g. Xvfb) is not recommended.
     * If (`x`,`y`) are passed as (-1,-1), the mouse pointer will not
     * be warped and `window` origin will be used as mouse pointer
     * location for the event.
     * 
     * Also, `gdk_test_simulate_key()` is a fairly low level function,
     * for most testing purposes, `gtk_test_widget_send_key()` is the
     * right function to call which will generate a key press event
     * followed by its accompanying key release event.
     * @param window a {@link Gdk.Window} to simulate a key event for
     * @param x x coordinate within `window` for the key event
     * @param y y coordinate within `window` for the key event
     * @param keyval A GDK keyboard value
     * @param modifiers Keyboard modifiers the event is setup with
     * @param key_pressrelease either {@link Gdk.EventType.KEY_PRESS} or {@link Gdk.EventType.KEY_RELEASE}
     * @returns whether all actions necessary for a key event simulation     were carried out successfully
     * @since 2.14
     */
    function test_simulate_key(window: Window, x: number, y: number, keyval: number, modifiers: ModifierType, key_pressrelease: EventType): boolean;

    /**
     * Converts a text property in the given encoding to
     * a list of UTF-8 strings.
     * @param display a {@link Gdk.Display}
     * @param encoding an atom representing the encoding of the text
     * @param format the format of the property
     * @param text the text to convert
     * @returns the number of strings in the resulting list
     * @since 2.2
     */
    function text_property_to_utf8_list_for_display(display: Display, encoding: Atom, format: number, text: Uint8Array | string): [number, string[]];

    /**
     * Adds a function to be called whenever there are no higher priority
     * events pending.  If the function returns `false` it is automatically
     * removed from the list of event sources and will not be called again.
     * 
     * This variant of `g_idle_add_full()` calls `function` with the GDK lock
     * held. It can be thought of a MT-safe version for GTK+ widgets for the
     * following use case, where you have to worry about `idle_callback()`
     * running in thread A and accessing `self` after it has been finalized
     * in thread B:
     * 
     * 
     * ```c
     * static gboolean
     * idle_callback (gpointer data)
     * {
     *    // `gdk_threads_enter()`; would be needed for `g_idle_add()`
     * 
     *    SomeWidget *self = data;
     *    // do stuff with self
     * 
     *    self->idle_id = 0;
     * 
     *    // `gdk_threads_leave()`; would be needed for `g_idle_add()`
     *    return FALSE;
     * }
     * 
     * static void
     * some_widget_do_stuff_later (SomeWidget *self)
     * {
     *    self->idle_id = gdk_threads_add_idle (idle_callback, self)
     *    // using `g_idle_add()` here would require thread protection in the callback
     * }
     * 
     * static void
     * some_widget_finalize (GObject *object)
     * {
     *    SomeWidget *self = SOME_WIDGET (object);
     *    if (self->idle_id)
     *      g_source_remove (self->idle_id);
     *    G_OBJECT_CLASS (parent_class)->finalize (object);
     * }
     * ```
     * 
     * @param priority the priority of the idle source. Typically this will be in the            range between #G_PRIORITY_DEFAULT_IDLE and #G_PRIORITY_HIGH_IDLE
     * @param _function function to call
     * @returns the ID (greater than 0) of the event source.
     * @since 2.12
     */
    function threads_add_idle(priority: number, _function: GLib.SourceFunc): number;

    /**
     * Sets a function to be called at regular intervals holding the GDK lock,
     * with the given priority.  The function is called repeatedly until it
     * returns `false`, at which point the timeout is automatically destroyed
     * and the function will not be called again.  The `notify` function is
     * called when the timeout is destroyed.  The first call to the
     * function will be at the end of the first `interval`.
     * 
     * Note that timeout functions may be delayed, due to the processing of other
     * event sources. Thus they should not be relied on for precise timing.
     * After each call to the timeout function, the time of the next
     * timeout is recalculated based on the current time and the given interval
     * (it does not try to “catch up” time lost in delays).
     * 
     * This variant of `g_timeout_add_full()` can be thought of a MT-safe version
     * for GTK+ widgets for the following use case:
     * 
     * 
     * ```c
     * static gboolean timeout_callback (gpointer data)
     * {
     *    SomeWidget *self = data;
     *    
     *    // do stuff with self
     *    
     *    self->timeout_id = 0;
     *    
     *    return G_SOURCE_REMOVE;
     * }
     *  
     * static void some_widget_do_stuff_later (SomeWidget *self)
     * {
     *    self->timeout_id = g_timeout_add (timeout_callback, self)
     * }
     *  
     * static void some_widget_finalize (GObject *object)
     * {
     *    SomeWidget *self = SOME_WIDGET (object);
     *    
     *    if (self->timeout_id)
     *      g_source_remove (self->timeout_id);
     *    
     *    G_OBJECT_CLASS (parent_class)->finalize (object);
     * }
     * ```
     * 
     * @param priority the priority of the timeout source. Typically this will be in the            range between #G_PRIORITY_DEFAULT_IDLE and #G_PRIORITY_HIGH_IDLE.
     * @param interval the time between calls to the function, in milliseconds             (1/1000ths of a second)
     * @param _function function to call
     * @returns the ID (greater than 0) of the event source.
     * @since 2.12
     */
    function threads_add_timeout(priority: number, interval: number, _function: GLib.SourceFunc): number;

    /**
     * A variant of `gdk_threads_add_timeout_full()` with second-granularity.
     * See `g_timeout_add_seconds_full()` for a discussion of why it is
     * a good idea to use this function if you don’t need finer granularity.
     * @param priority the priority of the timeout source. Typically this will be in the            range between #G_PRIORITY_DEFAULT_IDLE and #G_PRIORITY_HIGH_IDLE.
     * @param interval the time between calls to the function, in seconds
     * @param _function function to call
     * @returns the ID (greater than 0) of the event source.
     * @since 2.14
     */
    function threads_add_timeout_seconds(priority: number, interval: number, _function: GLib.SourceFunc): number;

    /**
     * This function marks the beginning of a critical section in which
     * GDK and GTK+ functions can be called safely and without causing race
     * conditions. Only one thread at a time can be in such a critial
     * section.
     * @deprecated since 3.6: All GDK and GTK+ calls should be made from the main     thread
     */
    function threads_enter(): void;

    /**
     * Initializes GDK so that it can be used from multiple threads
     * in conjunction with `gdk_threads_enter()` and `gdk_threads_leave()`.
     * 
     * This call must be made before any use of the main loop from
     * GTK+; to be safe, call it before `gtk_init()`.
     * @deprecated since 3.6: All GDK and GTK+ calls should be made from the main     thread
     */
    function threads_init(): void;

    /**
     * Leaves a critical region begun with `gdk_threads_enter()`.
     * @deprecated since 3.6: All GDK and GTK+ calls should be made from the main     thread
     */
    function threads_leave(): void;

    /**
     * Convert from a ISO10646 character to a key symbol.
     * @param wc a ISO10646 encoded character
     * @returns the corresponding GDK key symbol, if one exists.               or, if there is no corresponding symbol,               wc | 0x01000000
     */
    function unicode_to_keyval(wc: number): number;

    /**
     * Converts an UTF-8 string into the best possible representation
     * as a STRING. The representation of characters not in STRING
     * is not specified; it may be as pseudo-escape sequences
     * \x{ABCD}, or it may be in some other form of approximation.
     * @param str a UTF-8 string
     * @returns the newly-allocated string, or `null` if the          conversion failed. (It should not fail for any properly          formed UTF-8 string unless system limits like memory or          file descriptors are exceeded.)
     */
    function utf8_to_string_target(str: string): string | null;

    /**
     * @gir-type Callback
     */
    interface EventFunc {
        (event: Event): void;
    }

    /**
     * @gir-type Callback
     */
    interface FilterFunc {
        (xevent: XEvent, event: Event): FilterReturn;
    }

    /**
     * @gir-type Callback
     */
    interface SeatGrabPrepareFunc {
        (seat: Seat, window: Window): void;
    }

    /**
     * @gir-type Callback
     */
    interface WindowChildFunc {
        (window: Window): boolean;
    }

    /**
     * @gir-type Callback
     */
    interface WindowInvalidateHandlerFunc {
        (window: Window, region: cairo.Region): void;
    }

    /**
     * @gir-type Flags
     */
    export namespace AnchorHints {
        export const $gtype: GObject.GType<AnchorHints>;
    }

    /**
     * Positioning hints for aligning a window relative to a rectangle.
     * 
     * These hints determine how the window should be positioned in the case that
     * the window would fall off-screen if placed in its ideal position.
     * 
     * For example, {@link Gdk.AnchorHints.FLIP_X} will replace {@link Gdk.Gravity.NORTH_WEST} with
     * {@link Gdk.Gravity.NORTH_EAST} and vice versa if the window extends beyond the left
     * or right edges of the monitor.
     * 
     * If {@link Gdk.AnchorHints.SLIDE_X} is set, the window can be shifted horizontally to fit
     * on-screen. If {@link Gdk.AnchorHints.RESIZE_X} is set, the window can be shrunken
     * horizontally to fit.
     * 
     * In general, when multiple flags are set, flipping should take precedence over
     * sliding, which should take precedence over resizing.
     * @gir-type Flags
     * @since 3.22
     */
    enum AnchorHints {
        /**
         * allow flipping anchors horizontally
         */
        FLIP_X = 1,
        /**
         * allow flipping anchors vertically
         */
        FLIP_Y = 2,
        /**
         * allow sliding window horizontally
         */
        SLIDE_X = 4,
        /**
         * allow sliding window vertically
         */
        SLIDE_Y = 8,
        /**
         * allow resizing window horizontally
         */
        RESIZE_X = 16,
        /**
         * allow resizing window vertically
         */
        RESIZE_Y = 32,
        /**
         * allow flipping anchors on both axes
         */
        FLIP = 3,
        /**
         * allow sliding window on both axes
         */
        SLIDE = 12,
        /**
         * allow resizing window on both axes
         */
        RESIZE = 48,
    }


    /**
     * @gir-type Flags
     */
    export namespace AxisFlags {
        export const $gtype: GObject.GType<AxisFlags>;
    }

    /**
     * Flags describing the current capabilities of a device/tool.
     * @gir-type Flags
     * @since 3.22
     */
    enum AxisFlags {
        /**
         * X axis is present
         */
        X = 2,
        /**
         * Y axis is present
         */
        Y = 4,
        /**
         * Pressure axis is present
         */
        PRESSURE = 8,
        /**
         * X tilt axis is present
         */
        XTILT = 16,
        /**
         * Y tilt axis is present
         */
        YTILT = 32,
        /**
         * Wheel axis is present
         */
        WHEEL = 64,
        /**
         * Distance axis is present
         */
        DISTANCE = 128,
        /**
         * Z-axis rotation is present
         */
        ROTATION = 256,
        /**
         * Slider axis is present
         */
        SLIDER = 512,
    }


    /**
     * @gir-type Flags
     */
    export namespace DragAction {
        export const $gtype: GObject.GType<DragAction>;
    }

    /**
     * Used in {@link Gdk.DragContext} to indicate what the destination
     * should do with the dropped data.
     * @gir-type Flags
     */
    enum DragAction {
        /**
         * Means nothing, and should not be used.
         */
        DEFAULT = 1,
        /**
         * Copy the data.
         */
        COPY = 2,
        /**
         * Move the data, i.e. first copy it, then delete
         *  it from the source using the DELETE target of the X selection protocol.
         */
        MOVE = 4,
        /**
         * Add a link to the data. Note that this is only
         *  useful if source and destination agree on what it means.
         */
        LINK = 8,
        /**
         * Special action which tells the source that the
         *  destination will do something that the source doesn’t understand.
         */
        PRIVATE = 16,
        /**
         * Ask the user what to do with the data.
         */
        ASK = 32,
    }


    /**
     * @gir-type Flags
     */
    export namespace EventMask {
        export const $gtype: GObject.GType<EventMask>;
    }

    /**
     * A set of bit-flags to indicate which events a window is to receive.
     * Most of these masks map onto one or more of the {@link Gdk.EventType} event types
     * above.
     * 
     * See the [input handling overview][chap-input-handling] for details of
     * [event masks][event-masks] and [event propagation][event-propagation].
     * 
     * {@link Gdk.EventMask.POINTER_MOTION_HINT_MASK} is deprecated. It is a special mask
     * to reduce the number of {@link Gdk.EventType.MOTION_NOTIFY} events received. When using
     * {@link Gdk.EventMask.POINTER_MOTION_HINT_MASK}, fewer {@link Gdk.EventType.MOTION_NOTIFY} events will
     * be sent, some of which are marked as a hint (the is_hint member is
     * `true`). To receive more motion events after a motion hint event,
     * the application needs to asks for more, by calling
     * `gdk_event_request_motions()`.
     * 
     * Since GTK 3.8, motion events are already compressed by default, independent
     * of this mechanism. This compression can be disabled with
     * `gdk_window_set_event_compression()`. See the documentation of that function
     * for details.
     * 
     * If {@link Gdk.EventMask.TOUCH_MASK} is enabled, the window will receive touch events
     * from touch-enabled devices. Those will come as sequences of {@link Gdk.EventTouch}
     * with type {@link Gdk.EventType.TOUCH_UPDATE}, enclosed by two events with
     * type {@link Gdk.EventType.TOUCH_BEGIN} and {@link Gdk.EventType.TOUCH_END} (or {@link Gdk.EventType.TOUCH_CANCEL}).
     * `gdk_event_get_event_sequence()` returns the event sequence for these
     * events, so different sequences may be distinguished.
     * @gir-type Flags
     */
    enum EventMask {
        /**
         * receive expose events
         */
        EXPOSURE_MASK = 2,
        /**
         * receive all pointer motion events
         */
        POINTER_MOTION_MASK = 4,
        /**
         * deprecated. see the explanation above
         */
        POINTER_MOTION_HINT_MASK = 8,
        /**
         * receive pointer motion events while any button is pressed
         */
        BUTTON_MOTION_MASK = 16,
        /**
         * receive pointer motion events while 1 button is pressed
         */
        BUTTON1_MOTION_MASK = 32,
        /**
         * receive pointer motion events while 2 button is pressed
         */
        BUTTON2_MOTION_MASK = 64,
        /**
         * receive pointer motion events while 3 button is pressed
         */
        BUTTON3_MOTION_MASK = 128,
        /**
         * receive button press events
         */
        BUTTON_PRESS_MASK = 256,
        /**
         * receive button release events
         */
        BUTTON_RELEASE_MASK = 512,
        /**
         * receive key press events
         */
        KEY_PRESS_MASK = 1024,
        /**
         * receive key release events
         */
        KEY_RELEASE_MASK = 2048,
        /**
         * receive window enter events
         */
        ENTER_NOTIFY_MASK = 4096,
        /**
         * receive window leave events
         */
        LEAVE_NOTIFY_MASK = 8192,
        /**
         * receive focus change events
         */
        FOCUS_CHANGE_MASK = 16384,
        /**
         * receive events about window configuration change
         */
        STRUCTURE_MASK = 32768,
        /**
         * receive property change events
         */
        PROPERTY_CHANGE_MASK = 65536,
        /**
         * receive visibility change events
         */
        VISIBILITY_NOTIFY_MASK = 131072,
        /**
         * receive proximity in events
         */
        PROXIMITY_IN_MASK = 262144,
        /**
         * receive proximity out events
         */
        PROXIMITY_OUT_MASK = 524288,
        /**
         * receive events about window configuration changes of
         *   child windows
         */
        SUBSTRUCTURE_MASK = 1048576,
        /**
         * receive scroll events
         */
        SCROLL_MASK = 2097152,
        /**
         * receive touch events. Since 3.4
         */
        TOUCH_MASK = 4194304,
        /**
         * receive smooth scrolling events. Since 3.4
         */
        SMOOTH_SCROLL_MASK = 8388608,
        /**
         * receive touchpad gesture events. Since 3.18
         */
        TOUCHPAD_GESTURE_MASK = 16777216,
        /**
         * receive tablet pad events. Since 3.22
         */
        TABLET_PAD_MASK = 33554432,
        /**
         * the combination of all the above event masks.
         */
        ALL_EVENTS_MASK = 67108862,
    }


    /**
     * @gir-type Flags
     */
    export namespace FrameClockPhase {
        export const $gtype: GObject.GType<FrameClockPhase>;
    }

    /**
     * {@link Gdk.FrameClockPhase} is used to represent the different paint clock
     * phases that can be requested. The elements of the enumeration
     * correspond to the signals of {@link Gdk.FrameClock}.
     * @gir-type Flags
     * @since 3.8
     */
    enum FrameClockPhase {
        /**
         * no phase
         */
        NONE = 0,
        /**
         * corresponds to GdkFrameClock::flush-events. Should not be handled by applications.
         */
        FLUSH_EVENTS = 1,
        /**
         * corresponds to GdkFrameClock::before-paint. Should not be handled by applications.
         */
        BEFORE_PAINT = 2,
        /**
         * corresponds to GdkFrameClock::update.
         */
        UPDATE = 4,
        /**
         * corresponds to GdkFrameClock::layout.
         */
        LAYOUT = 8,
        /**
         * corresponds to GdkFrameClock::paint.
         */
        PAINT = 16,
        /**
         * corresponds to GdkFrameClock::resume-events. Should not be handled by applications.
         */
        RESUME_EVENTS = 32,
        /**
         * corresponds to GdkFrameClock::after-paint. Should not be handled by applications.
         */
        AFTER_PAINT = 64,
    }


    /**
     * @gir-type Flags
     */
    export namespace ModifierType {
        export const $gtype: GObject.GType<ModifierType>;
    }

    /**
     * A set of bit-flags to indicate the state of modifier keys and mouse buttons
     * in various event types. Typical modifier keys are Shift, Control, Meta,
     * Super, Hyper, Alt, Compose, Apple, CapsLock or ShiftLock.
     * 
     * Like the X Window System, GDK supports 8 modifier keys and 5 mouse buttons.
     * 
     * Since 2.10, GDK recognizes which of the Meta, Super or Hyper keys are mapped
     * to Mod2 - Mod5, and indicates this by setting {@link Gdk.ModifierType.SUPER_MASK},
     * {@link Gdk.ModifierType.HYPER_MASK} or {@link Gdk.ModifierType.META_MASK} in the state field of key events.
     * 
     * Note that GDK may add internal values to events which include
     * reserved values such as {@link Gdk.ModifierType.MODIFIER_RESERVED_13_MASK}.  Your code
     * should preserve and ignore them.  You can use {@link Gdk.ModifierType.MODIFIER_MASK} to
     * remove all reserved values.
     * 
     * Also note that the GDK X backend interprets button press events for button
     * 4-7 as scroll events, so {@link Gdk.ModifierType.BUTTON4_MASK} and {@link Gdk.ModifierType.BUTTON5_MASK} will never
     * be set.
     * @gir-type Flags
     */
    enum ModifierType {
        /**
         * the Shift key.
         */
        SHIFT_MASK = 1,
        /**
         * a Lock key (depending on the modifier mapping of the
         *  X server this may either be CapsLock or ShiftLock).
         */
        LOCK_MASK = 2,
        /**
         * the Control key.
         */
        CONTROL_MASK = 4,
        /**
         * the fourth modifier key (it depends on the modifier
         *  mapping of the X server which key is interpreted as this modifier, but
         *  normally it is the Alt key).
         */
        MOD1_MASK = 8,
        /**
         * the fifth modifier key (it depends on the modifier
         *  mapping of the X server which key is interpreted as this modifier).
         */
        MOD2_MASK = 16,
        /**
         * the sixth modifier key (it depends on the modifier
         *  mapping of the X server which key is interpreted as this modifier).
         */
        MOD3_MASK = 32,
        /**
         * the seventh modifier key (it depends on the modifier
         *  mapping of the X server which key is interpreted as this modifier).
         */
        MOD4_MASK = 64,
        /**
         * the eighth modifier key (it depends on the modifier
         *  mapping of the X server which key is interpreted as this modifier).
         */
        MOD5_MASK = 128,
        /**
         * the first mouse button.
         */
        BUTTON1_MASK = 256,
        /**
         * the second mouse button.
         */
        BUTTON2_MASK = 512,
        /**
         * the third mouse button.
         */
        BUTTON3_MASK = 1024,
        /**
         * the fourth mouse button.
         */
        BUTTON4_MASK = 2048,
        /**
         * the fifth mouse button.
         */
        BUTTON5_MASK = 4096,
        /**
         * A reserved bit flag; do not use in your own code
         */
        MODIFIER_RESERVED_13_MASK = 8192,
        /**
         * A reserved bit flag; do not use in your own code
         */
        MODIFIER_RESERVED_14_MASK = 16384,
        /**
         * A reserved bit flag; do not use in your own code
         */
        MODIFIER_RESERVED_15_MASK = 32768,
        /**
         * A reserved bit flag; do not use in your own code
         */
        MODIFIER_RESERVED_16_MASK = 65536,
        /**
         * A reserved bit flag; do not use in your own code
         */
        MODIFIER_RESERVED_17_MASK = 131072,
        /**
         * A reserved bit flag; do not use in your own code
         */
        MODIFIER_RESERVED_18_MASK = 262144,
        /**
         * A reserved bit flag; do not use in your own code
         */
        MODIFIER_RESERVED_19_MASK = 524288,
        /**
         * A reserved bit flag; do not use in your own code
         */
        MODIFIER_RESERVED_20_MASK = 1048576,
        /**
         * A reserved bit flag; do not use in your own code
         */
        MODIFIER_RESERVED_21_MASK = 2097152,
        /**
         * A reserved bit flag; do not use in your own code
         */
        MODIFIER_RESERVED_22_MASK = 4194304,
        /**
         * A reserved bit flag; do not use in your own code
         */
        MODIFIER_RESERVED_23_MASK = 8388608,
        /**
         * A reserved bit flag; do not use in your own code
         */
        MODIFIER_RESERVED_24_MASK = 16777216,
        /**
         * A reserved bit flag; do not use in your own code
         */
        MODIFIER_RESERVED_25_MASK = 33554432,
        /**
         * the Super modifier. Since 2.10
         */
        SUPER_MASK = 67108864,
        /**
         * the Hyper modifier. Since 2.10
         */
        HYPER_MASK = 134217728,
        /**
         * the Meta modifier. Since 2.10
         */
        META_MASK = 268435456,
        /**
         * A reserved bit flag; do not use in your own code
         */
        MODIFIER_RESERVED_29_MASK = 536870912,
        /**
         * not used in GDK itself. GTK+ uses it to differentiate
         *  between (keyval, modifiers) pairs from key press and release events.
         */
        RELEASE_MASK = 1073741824,
        /**
         * a mask covering all modifier types.
         */
        MODIFIER_MASK = 1543512063,
    }


    /**
     * @gir-type Flags
     */
    export namespace SeatCapabilities {
        export const $gtype: GObject.GType<SeatCapabilities>;
    }

    /**
     * Flags describing the seat capabilities.
     * @gir-type Flags
     * @since 3.20
     */
    enum SeatCapabilities {
        /**
         * No input capabilities
         */
        NONE = 0,
        /**
         * The seat has a pointer (e.g. mouse)
         */
        POINTER = 1,
        /**
         * The seat has touchscreen(s) attached
         */
        TOUCH = 2,
        /**
         * The seat has drawing tablet(s) attached
         */
        TABLET_STYLUS = 4,
        /**
         * The seat has keyboard(s) attached
         */
        KEYBOARD = 8,
        /**
         * The union of all pointing capabilities
         */
        ALL_POINTING = 7,
        /**
         * The union of all capabilities
         */
        ALL = 15,
    }


    /**
     * @gir-type Flags
     */
    export namespace WMDecoration {
        export const $gtype: GObject.GType<WMDecoration>;
    }

    /**
     * These are hints originally defined by the Motif toolkit.
     * The window manager can use them when determining how to decorate
     * the window. The hint must be set before mapping the window.
     * @gir-type Flags
     */
    enum WMDecoration {
        /**
         * all decorations should be applied.
         */
        ALL = 1,
        /**
         * a frame should be drawn around the window.
         */
        BORDER = 2,
        /**
         * the frame should have resize handles.
         */
        RESIZEH = 4,
        /**
         * a titlebar should be placed above the window.
         */
        TITLE = 8,
        /**
         * a button for opening a menu should be included.
         */
        MENU = 16,
        /**
         * a minimize button should be included.
         */
        MINIMIZE = 32,
        /**
         * a maximize button should be included.
         */
        MAXIMIZE = 64,
    }


    /**
     * @gir-type Flags
     */
    export namespace WMFunction {
        export const $gtype: GObject.GType<WMFunction>;
    }

    /**
     * These are hints originally defined by the Motif toolkit. The window manager
     * can use them when determining the functions to offer for the window. The
     * hint must be set before mapping the window.
     * @gir-type Flags
     */
    enum WMFunction {
        /**
         * all functions should be offered.
         */
        ALL = 1,
        /**
         * the window should be resizable.
         */
        RESIZE = 2,
        /**
         * the window should be movable.
         */
        MOVE = 4,
        /**
         * the window should be minimizable.
         */
        MINIMIZE = 8,
        /**
         * the window should be maximizable.
         */
        MAXIMIZE = 16,
        /**
         * the window should be closable.
         */
        CLOSE = 32,
    }


    /**
     * @gir-type Flags
     */
    export namespace WindowAttributesType {
        export const $gtype: GObject.GType<WindowAttributesType>;
    }

    /**
     * Used to indicate which fields in the {@link Gdk.WindowAttr} struct should be honored.
     * For example, if you filled in the “cursor” and “x” fields of {@link Gdk.WindowAttr},
     * pass “`GDK_WA_X` | `GDK_WA_CURSOR`” to `gdk_window_new()`. Fields in
     * {@link Gdk.WindowAttr} not covered by a bit in this enum are required; for example,
     * the `width`/`height`, `wclass`, and `window_type` fields are required, they have
     * no corresponding flag in {@link Gdk.WindowAttributesType}.
     * @gir-type Flags
     */
    enum WindowAttributesType {
        /**
         * Honor the title field
         */
        TITLE = 2,
        /**
         * Honor the X coordinate field
         */
        X = 4,
        /**
         * Honor the Y coordinate field
         */
        Y = 8,
        /**
         * Honor the cursor field
         */
        CURSOR = 16,
        /**
         * Honor the visual field
         */
        VISUAL = 32,
        /**
         * Honor the wmclass_class and wmclass_name fields
         */
        WMCLASS = 64,
        /**
         * Honor the override_redirect field
         */
        NOREDIR = 128,
        /**
         * Honor the type_hint field
         */
        TYPE_HINT = 256,
    }


    /**
     * @gir-type Flags
     */
    export namespace WindowHints {
        export const $gtype: GObject.GType<WindowHints>;
    }

    /**
     * Used to indicate which fields of a {@link Gdk.Geometry} struct should be paid
     * attention to. Also, the presence/absence of `GDK_HINT_POS`,
     * `GDK_HINT_USER_POS`, and `GDK_HINT_USER_SIZE` is significant, though they don't
     * directly refer to {@link Gdk.Geometry} fields. `GDK_HINT_USER_POS` will be set
     * automatically by `GtkWindow` if you call `gtk_window_move()`.
     * `GDK_HINT_USER_POS` and `GDK_HINT_USER_SIZE` should be set if the user
     * specified a size/position using a --geometry command-line argument;
     * `gtk_window_parse_geometry()` automatically sets these flags.
     * @gir-type Flags
     */
    enum WindowHints {
        /**
         * indicates that the program has positioned the window
         */
        POS = 1,
        /**
         * min size fields are set
         */
        MIN_SIZE = 2,
        /**
         * max size fields are set
         */
        MAX_SIZE = 4,
        /**
         * base size fields are set
         */
        BASE_SIZE = 8,
        /**
         * aspect ratio fields are set
         */
        ASPECT = 16,
        /**
         * resize increment fields are set
         */
        RESIZE_INC = 32,
        /**
         * window gravity field is set
         */
        WIN_GRAVITY = 64,
        /**
         * indicates that the window’s position was explicitly set
         *  by the user
         */
        USER_POS = 128,
        /**
         * indicates that the window’s size was explicitly set by
         *  the user
         */
        USER_SIZE = 256,
    }


    /**
     * @gir-type Flags
     */
    export namespace WindowState {
        export const $gtype: GObject.GType<WindowState>;
    }

    /**
     * Specifies the state of a toplevel window.
     * @gir-type Flags
     */
    enum WindowState {
        /**
         * the window is not shown.
         */
        WITHDRAWN = 1,
        /**
         * the window is minimized.
         */
        ICONIFIED = 2,
        /**
         * the window is maximized.
         */
        MAXIMIZED = 4,
        /**
         * the window is sticky.
         */
        STICKY = 8,
        /**
         * the window is maximized without
         *   decorations.
         */
        FULLSCREEN = 16,
        /**
         * the window is kept above other windows.
         */
        ABOVE = 32,
        /**
         * the window is kept below other windows.
         */
        BELOW = 64,
        /**
         * the window is presented as focused (with active decorations).
         */
        FOCUSED = 128,
        /**
         * the window is in a tiled state, Since 3.10. Since 3.22.23, this
         *                          is deprecated in favor of per-edge information.
         */
        TILED = 256,
        /**
         * whether the top edge is tiled, Since 3.22.23
         */
        TOP_TILED = 512,
        /**
         * whether the top edge is resizable, Since 3.22.23
         */
        TOP_RESIZABLE = 1024,
        /**
         * whether the right edge is tiled, Since 3.22.23
         */
        RIGHT_TILED = 2048,
        /**
         * whether the right edge is resizable, Since 3.22.23
         */
        RIGHT_RESIZABLE = 4096,
        /**
         * whether the bottom edge is tiled, Since 3.22.23
         */
        BOTTOM_TILED = 8192,
        /**
         * whether the bottom edge is resizable, Since 3.22.23
         */
        BOTTOM_RESIZABLE = 16384,
        /**
         * whether the left edge is tiled, Since 3.22.23
         */
        LEFT_TILED = 32768,
        /**
         * whether the left edge is resizable, Since 3.22.23
         */
        LEFT_RESIZABLE = 65536,
    }


    namespace AppLaunchContext {
        // Signal signatures
        interface SignalSignatures extends Gio.AppLaunchContext.SignalSignatures {
            "notify::display": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gio.AppLaunchContext.ConstructorProps {
            display: Display;
        }
    }

    /**
     * GdkAppLaunchContext is an implementation of {@link Gio.AppLaunchContext} that
     * handles launching an application in a graphical context. It provides
     * startup notification and allows to launch applications on a specific
     * screen or workspace.
     * 
     * ## Launching an application
     * 
     * 
     * ```c
     * GdkAppLaunchContext *context;
     * 
     * context = gdk_display_get_app_launch_context (display);
     * 
     * gdk_app_launch_context_set_screen (screen);
     * gdk_app_launch_context_set_timestamp (event->time);
     * 
     * if (!g_app_info_launch_default_for_uri ("http://www.gtk.org", context, &error))
     *   g_warning ("Launching failed: %s\n", error->message);
     * 
     * g_object_unref (context);
     * ```
     * 
     * @gir-type Class
     */
    class AppLaunchContext extends Gio.AppLaunchContext {
        static $gtype: GObject.GType<AppLaunchContext>;

        // Properties
        /**
         * @construct-only
         */
        get display(): Display;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: AppLaunchContext.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<AppLaunchContext.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): AppLaunchContext;

        // Signals
        /** @signal */
        connect<K extends keyof AppLaunchContext.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AppLaunchContext.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof AppLaunchContext.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AppLaunchContext.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof AppLaunchContext.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AppLaunchContext.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Sets the workspace on which applications will be launched when
         * using this context when running under a window manager that
         * supports multiple workspaces, as described in the
         * [Extended Window Manager Hints](https://specifications.freedesktop.org/wm/latest/).
         * 
         * When the workspace is not specified or `desktop` is set to -1,
         * it is up to the window manager to pick one, typically it will
         * be the current workspace.
         * @param desktop the number of a workspace, or -1
         * @since 2.14
         */
        set_desktop(desktop: number): void;

        /**
         * Sets the display on which applications will be launched when
         * using this context. See also `gdk_app_launch_context_set_screen()`.
         * @param display a {@link Gdk.Display}
         * @since 2.14
         * @deprecated since 3.0: Use `gdk_display_get_app_launch_context()` instead
         */
        set_display(display: Display): void;

        /**
         * Sets the icon for applications that are launched with this
         * context.
         * 
         * Window Managers can use this information when displaying startup
         * notification.
         * 
         * See also `gdk_app_launch_context_set_icon_name()`.
         * @param icon a {@link Gio.Icon}, or `null`
         * @since 2.14
         */
        set_icon(icon: Gio.Icon | null): void;

        /**
         * Sets the icon for applications that are launched with this context.
         * The `icon_name` will be interpreted in the same way as the Icon field
         * in desktop files. See also `gdk_app_launch_context_set_icon()`.
         * 
         * If both `icon` and `icon_name` are set, the `icon_name` takes priority.
         * If neither `icon` or `icon_name` is set, the icon is taken from either
         * the file that is passed to launched application or from the {@link Gio.AppInfo}
         * for the launched application itself.
         * @param icon_name an icon name, or `null`
         * @since 2.14
         */
        set_icon_name(icon_name: string | null): void;

        /**
         * Sets the screen on which applications will be launched when
         * using this context. See also `gdk_app_launch_context_set_display()`.
         * 
         * Note that, typically, a {@link Gdk.Screen} represents a logical screen,
         * not a physical monitor.
         * 
         * If both `screen` and `display` are set, the `screen` takes priority.
         * If neither `screen` or `display` are set, the default screen and
         * display are used.
         * @param screen a {@link Gdk.Screen}
         * @since 2.14
         */
        set_screen(screen: Screen): void;

        /**
         * Sets the timestamp of `context`. The timestamp should ideally
         * be taken from the event that triggered the launch.
         * 
         * Window managers can use this information to avoid moving the
         * focus to the newly launched application when the user is busy
         * typing in another window. This is also known as 'focus stealing
         * prevention'.
         * @param timestamp a timestamp
         * @since 2.14
         */
        set_timestamp(timestamp: number): void;
    }


    namespace Cursor {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::cursor-type": (pspec: GObject.ParamSpec) => void;
            "notify::display": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            cursor_type: CursorType;
            cursorType: CursorType;
            display: Display;
        }
    }

    /**
     * A {@link Gdk.Cursor} represents a cursor. Its contents are private.
     * @gir-type Class
     */
    abstract class Cursor extends GObject.Object {
        static $gtype: GObject.GType<Cursor>;

        // Properties
        /**
         * @construct-only
         * @default Gdk.CursorType.X_CURSOR
         */
        get cursor_type(): CursorType;

        /**
         * @construct-only
         * @default Gdk.CursorType.X_CURSOR
         */
        get cursorType(): CursorType;

        /**
         * @construct-only
         */
        get display(): Display;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Cursor.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Cursor.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](cursor_type: CursorType): Cursor;

        static new_for_display(display: Display, cursor_type: CursorType): Cursor;

        static new_from_name(display: Display, name: string): Cursor;

        static new_from_pixbuf(display: Display, pixbuf: GdkPixbuf.Pixbuf, x: number, y: number): Cursor;

        static new_from_surface(display: Display, surface: cairo.Surface, x: number, y: number): Cursor;

        // Signals
        /** @signal */
        connect<K extends keyof Cursor.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Cursor.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Cursor.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Cursor.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Cursor.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Cursor.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Returns the cursor type for this cursor.
         * @returns a {@link Gdk.CursorType}
         * @since 2.22
         */
        get_cursor_type(): CursorType;

        /**
         * Returns the display on which the {@link Gdk.Cursor} is defined.
         * @returns the {@link Gdk.Display} associated to `cursor`
         * @since 2.2
         */
        get_display(): Display;

        /**
         * Returns a {@link GdkPixbuf.Pixbuf} with the image used to display the cursor.
         * 
         * Note that depending on the capabilities of the windowing system and
         * on the cursor, GDK may not be able to obtain the image data. In this
         * case, `null` is returned.
         * @returns a {@link GdkPixbuf.Pixbuf} representing   `cursor`, or `null`
         * @since 2.8
         */
        get_image(): GdkPixbuf.Pixbuf | null;

        /**
         * Returns a cairo image surface with the image used to display the cursor.
         * 
         * Note that depending on the capabilities of the windowing system and
         * on the cursor, GDK may not be able to obtain the image data. In this
         * case, `null` is returned.
         * @returns a {@link cairo.Surface}   representing `cursor`, or `null`
         * @since 3.10
         */
        get_surface(): [cairo.Surface | null, number, number];

        /**
         * Adds a reference to `cursor`.
         * @returns Same `cursor` that was passed in
         * @deprecated since 3.0: Use `g_object_ref()` instead
         */
        ref(): Cursor;

        /**
         * Removes a reference from `cursor`, deallocating the cursor
         * if no references remain.
         * @deprecated since 3.0: Use `g_object_unref()` instead
         */
        unref(): void;
    }


    namespace Device {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * The ::changed signal is emitted either when the {@link Gdk.Device}
             * has changed the number of either axes or keys. For example
             * In X this will normally happen when the slave device routing
             * events through the master device changes (for example, user
             * switches from the USB mouse to a tablet), in that case the
             * master device will change to reflect the new slave device
             * axes and keys.
             * @signal
             * @run-last
             */
            changed: () => void;
            /**
             * The ::tool-changed signal is emitted on pen/eraser
             * `GdkDevices` whenever tools enter or leave proximity.
             * @signal
             * @since 3.22
             * @run-last
             */
            "tool-changed": (tool: DeviceTool) => void;
            "notify::associated-device": (pspec: GObject.ParamSpec) => void;
            "notify::axes": (pspec: GObject.ParamSpec) => void;
            "notify::device-manager": (pspec: GObject.ParamSpec) => void;
            "notify::display": (pspec: GObject.ParamSpec) => void;
            "notify::has-cursor": (pspec: GObject.ParamSpec) => void;
            "notify::input-mode": (pspec: GObject.ParamSpec) => void;
            "notify::input-source": (pspec: GObject.ParamSpec) => void;
            "notify::n-axes": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::num-touches": (pspec: GObject.ParamSpec) => void;
            "notify::product-id": (pspec: GObject.ParamSpec) => void;
            "notify::seat": (pspec: GObject.ParamSpec) => void;
            "notify::tool": (pspec: GObject.ParamSpec) => void;
            "notify::type": (pspec: GObject.ParamSpec) => void;
            "notify::vendor-id": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            associated_device: Device | null;
            associatedDevice: Device | null;
            axes: AxisFlags;
            device_manager: DeviceManager;
            deviceManager: DeviceManager;
            display: Display;
            has_cursor: boolean;
            hasCursor: boolean;
            input_mode: InputMode;
            inputMode: InputMode;
            input_source: InputSource;
            inputSource: InputSource;
            n_axes: number;
            nAxes: number;
            name: string;
            num_touches: number;
            numTouches: number;
            product_id: string | null;
            productId: string | null;
            seat: Seat;
            tool: DeviceTool;
            type: DeviceType;
            vendor_id: string | null;
            vendorId: string | null;
        }
    }

    /**
     * The {@link Gdk.Device} object represents a single input device, such
     * as a keyboard, a mouse, a touchpad, etc.
     * 
     * See the {@link Gdk.DeviceManager} documentation for more information
     * about the various kinds of master and slave devices, and their
     * relationships.
     * @gir-type Class
     */
    abstract class Device extends GObject.Object {
        static $gtype: GObject.GType<Device>;

        // Properties
        /**
         * Associated pointer or keyboard with this device, if any. Devices of type #GDK_DEVICE_TYPE_MASTER
         * always come in keyboard/pointer pairs. Other device types will have a `null` associated device.
         * @since 3.0
         * @read-only
         */
        get associated_device(): Device | null;

        /**
         * Associated pointer or keyboard with this device, if any. Devices of type #GDK_DEVICE_TYPE_MASTER
         * always come in keyboard/pointer pairs. Other device types will have a `null` associated device.
         * @since 3.0
         * @read-only
         */
        get associatedDevice(): Device | null;

        /**
         * The axes currently available for this device.
         * @since 3.22
         * @read-only
         * @default 0
         */
        get axes(): AxisFlags;

        /**
         * The {@link Gdk.DeviceManager} the {@link Gdk.Device} pertains to.
         * @since 3.0
         * @construct-only
         */
        get device_manager(): DeviceManager;

        /**
         * The {@link Gdk.DeviceManager} the {@link Gdk.Device} pertains to.
         * @since 3.0
         * @construct-only
         */
        get deviceManager(): DeviceManager;

        /**
         * The {@link Gdk.Display} the {@link Gdk.Device} pertains to.
         * @since 3.0
         * @construct-only
         */
        get display(): Display;

        /**
         * Whether the device is represented by a cursor on the screen. Devices of type
         * {@link Gdk.DeviceType.MASTER} will have `true` here.
         * @since 3.0
         * @construct-only
         * @default false
         */
        get has_cursor(): boolean;

        /**
         * Whether the device is represented by a cursor on the screen. Devices of type
         * {@link Gdk.DeviceType.MASTER} will have `true` here.
         * @since 3.0
         * @construct-only
         * @default false
         */
        get hasCursor(): boolean;

        /**
         * @default Gdk.InputMode.DISABLED
         */
        get input_mode(): InputMode;
        set input_mode(val: InputMode);

        /**
         * @default Gdk.InputMode.DISABLED
         */
        get inputMode(): InputMode;
        set inputMode(val: InputMode);

        /**
         * Source type for the device.
         * @since 3.0
         * @construct-only
         * @default Gdk.InputSource.MOUSE
         */
        get input_source(): InputSource;

        /**
         * Source type for the device.
         * @since 3.0
         * @construct-only
         * @default Gdk.InputSource.MOUSE
         */
        get inputSource(): InputSource;

        /**
         * Number of axes in the device.
         * @since 3.0
         * @read-only
         * @default 0
         */
        get n_axes(): number;

        /**
         * Number of axes in the device.
         * @since 3.0
         * @read-only
         * @default 0
         */
        get nAxes(): number;

        /**
         * The device name.
         * @since 3.0
         * @construct-only
         * @default null
         */
        get name(): string;

        /**
         * The maximal number of concurrent touches on a touch device.
         * Will be 0 if the device is not a touch device or if the number
         * of touches is unknown.
         * @since 3.20
         * @construct-only
         * @default 0
         */
        get num_touches(): number;

        /**
         * The maximal number of concurrent touches on a touch device.
         * Will be 0 if the device is not a touch device or if the number
         * of touches is unknown.
         * @since 3.20
         * @construct-only
         * @default 0
         */
        get numTouches(): number;

        /**
         * Product ID of this device, see `gdk_device_get_product_id()`.
         * @since 3.16
         * @construct-only
         * @default null
         */
        get product_id(): string | null;

        /**
         * Product ID of this device, see `gdk_device_get_product_id()`.
         * @since 3.16
         * @construct-only
         * @default null
         */
        get productId(): string | null;

        /**
         * {@link Gdk.Seat} of this device.
         * @since 3.20
         */
        get seat(): Seat;
        set seat(val: Seat);

        /**
         * @read-only
         */
        get tool(): DeviceTool;

        /**
         * Device role in the device manager.
         * @since 3.0
         * @construct-only
         * @default Gdk.DeviceType.MASTER
         */
        get type(): DeviceType;

        /**
         * Vendor ID of this device, see `gdk_device_get_vendor_id()`.
         * @since 3.16
         * @construct-only
         * @default null
         */
        get vendor_id(): string | null;

        /**
         * Vendor ID of this device, see `gdk_device_get_vendor_id()`.
         * @since 3.16
         * @construct-only
         * @default null
         */
        get vendorId(): string | null;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Device.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Device.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof Device.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Device.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Device.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Device.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Device.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Device.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Determines information about the current keyboard grab.
         * This is not public API and must not be used by applications.
         * @param display the display for which to get the grab information
         * @param device device to get the grab information from
         * @deprecated since 3.16: The symbol was never meant to be used outside   of GTK+
         */
        static grab_info_libgtk_only(display: Display, device: Device): [boolean, Window, boolean];

        // Methods
        /**
         * Returns the associated device to `device`, if `device` is of type
         * {@link Gdk.DeviceType.MASTER}, it will return the paired pointer or
         * keyboard.
         * 
         * If `device` is of type {@link Gdk.DeviceType.SLAVE}, it will return
         * the master device to which `device` is attached to.
         * 
         * If `device` is of type {@link Gdk.DeviceType.FLOATING}, `null` will be
         * returned, as there is no associated device.
         * @returns The associated device, or   `null`
         * @since 3.0
         */
        get_associated_device(): Device | null;

        /**
         * Returns the axes currently available on the device.
         * @since 3.22
         */
        get_axes(): AxisFlags;

        /**
         * Returns the axis use for `index_`.
         * @param index_ the index of the axis.
         * @returns a {@link Gdk.AxisUse} specifying how the axis is used.
         * @since 2.20
         */
        get_axis_use(index_: number): AxisUse;

        /**
         * Returns the device type for `device`.
         * @returns the {@link Gdk.DeviceType} for `device`.
         * @since 3.0
         */
        get_device_type(): DeviceType;

        /**
         * Returns the {@link Gdk.Display} to which `device` pertains.
         * @returns a {@link Gdk.Display}. This memory is owned          by GTK+, and must not be freed or unreffed.
         * @since 3.0
         */
        get_display(): Display;

        /**
         * Determines whether the pointer follows device motion.
         * This is not meaningful for keyboard devices, which don't have a pointer.
         * @returns `true` if the pointer follows device motion
         * @since 2.20
         */
        get_has_cursor(): boolean;

        /**
         * If `index_` has a valid keyval, this function will return `true`
         * and fill in `keyval` and `modifiers` with the keyval settings.
         * @param index_ the index of the macro button to get.
         * @returns `true` if keyval is set for `index`.
         * @since 2.20
         */
        get_key(index_: number): [boolean, number, ModifierType];

        /**
         * Gets information about which window the given pointer device is in, based on events
         * that have been received so far from the display server. If another application
         * has a pointer grab, or this application has a grab with owner_events = `false`,
         * `null` may be returned even if the pointer is physically over one of this
         * application's windows.
         * @returns the last window the device
         * @since 3.12
         */
        get_last_event_window(): Window | null;

        /**
         * Determines the mode of the device.
         * @returns a {@link Gdk.InputSource}
         * @since 2.20
         */
        get_mode(): InputMode;

        /**
         * Returns the number of axes the device currently has.
         * @returns the number of axes.
         * @since 3.0
         */
        get_n_axes(): number;

        /**
         * Returns the number of keys the device currently has.
         * @returns the number of keys.
         * @since 2.24
         */
        get_n_keys(): number;

        /**
         * Determines the name of the device.
         * @returns a name
         * @since 2.20
         */
        get_name(): string;

        /**
         * Gets the current location of `device`. As a slave device
         * coordinates are those of its master pointer, This function
         * may not be called on devices of type {@link Gdk.DeviceType.SLAVE},
         * unless there is an ongoing grab on them, see `gdk_device_grab()`.
         * @since 3.0
         */
        get_position(): [Screen | null, number, number];

        /**
         * Gets the current location of `device` in double precision. As a slave device's
         * coordinates are those of its master pointer, this function
         * may not be called on devices of type {@link Gdk.DeviceType.SLAVE},
         * unless there is an ongoing grab on them. See `gdk_device_grab()`.
         * @since 3.10
         */
        get_position_double(): [Screen | null, number, number];

        /**
         * Returns the product ID of this device, or `null` if this information couldn't
         * be obtained. This ID is retrieved from the device, and is thus constant for
         * it. See `gdk_device_get_vendor_id()` for more information.
         * @returns the product ID, or `null`
         * @since 3.16
         */
        get_product_id(): string | null;

        /**
         * Returns the {@link Gdk.Seat} the device belongs to.
         * @returns A {@link Gdk.Seat}. This memory is owned by GTK+ and          must not be freed.
         * @since 3.20
         */
        get_seat(): Seat;

        /**
         * Determines the type of the device.
         * @returns a {@link Gdk.InputSource}
         * @since 2.20
         */
        get_source(): InputSource;

        /**
         * Returns the vendor ID of this device, or `null` if this information couldn't
         * be obtained. This ID is retrieved from the device, and is thus constant for
         * it.
         * 
         * This function, together with `gdk_device_get_product_id()`, can be used to eg.
         * compose {@link Gio.Settings} paths to store settings for this device.
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
         * @returns the vendor ID, or `null`
         * @since 3.16
         */
        get_vendor_id(): string | null;

        /**
         * Obtains the window underneath `device`, returning the location of the device in `win_x` and `win_y`. Returns
         * `null` if the window tree under `device` is not known to GDK (for example, belongs to another application).
         * 
         * As a slave device coordinates are those of its master pointer, This
         * function may not be called on devices of type {@link Gdk.DeviceType.SLAVE},
         * unless there is an ongoing grab on them, see `gdk_device_grab()`.
         * @returns the {@link Gdk.Window} under the device position, or `null`.
         * @since 3.0
         */
        get_window_at_position(): [Window | null, number, number];

        /**
         * Obtains the window underneath `device`, returning the location of the device in `win_x` and `win_y` in
         * double precision. Returns `null` if the window tree under `device` is not known to GDK (for example,
         * belongs to another application).
         * 
         * As a slave device coordinates are those of its master pointer, This
         * function may not be called on devices of type {@link Gdk.DeviceType.SLAVE},
         * unless there is an ongoing grab on them, see `gdk_device_grab()`.
         * @returns the {@link Gdk.Window} under the   device position, or `null`.
         * @since 3.0
         */
        get_window_at_position_double(): [Window | null, number, number];

        /**
         * Grabs the device so that all events coming from this device are passed to
         * this application until the device is ungrabbed with `gdk_device_ungrab()`,
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
         * `true`.
         * 
         * If you set up anything at the time you take the grab that needs to be
         * cleaned up when the grab ends, you should handle the {@link Gdk.EventGrabBroken}
         * events that are emitted when the grab ends unvoluntarily.
         * @param window the {@link Gdk.Window} which will own the grab (the grab window)
         * @param grab_ownership specifies the grab ownership.
         * @param owner_events if `false` then all device events are reported with respect to                `window` and are only reported if selected by `event_mask`. If                `true` then pointer events for this application are reported                as normal, but pointer events outside this application are                reported with respect to `window` and only if selected by                `event_mask`. In either mode, unreported events are discarded.
         * @param event_mask specifies the event mask, which is used in accordance with              `owner_events`.
         * @param cursor the cursor to display while the grab is active if the device is          a pointer. If this is `null` then the normal cursors are used for          `window` and its descendants, and the cursor for `window` is used          elsewhere.
         * @param time_ the timestamp of the event which led to this pointer grab. This         usually comes from the {@link Gdk.Event} struct, though `GDK_CURRENT_TIME`         can be used if the time isn’t known.
         * @returns {@link Gdk.GrabStatus.SUCCESS} if the grab was successful.
         * @since 3.0
         * @deprecated since 3.20.: Use `gdk_seat_grab()` instead.
         */
        grab(window: Window, grab_ownership: GrabOwnership, owner_events: boolean, event_mask: EventMask, cursor: Cursor | null, time_: number): GrabStatus;

        /**
         * Returns a {@link GLib.List} of `GdkAtoms`, containing the labels for
         * the axes that `device` currently has.
         * @returns A {@link GLib.List} of `GdkAtoms`, free with `g_list_free()`.
         * @since 3.0
         */
        list_axes(): Atom[];

        /**
         * If the device if of type {@link Gdk.DeviceType.MASTER}, it will return
         * the list of slave devices attached to it, otherwise it will return
         * `null`
         * @returns the list of slave devices, or `null`. The list must be          freed with `g_list_free()`, the contents of the list are          owned by GTK+ and should not be freed.
         */
        list_slave_devices(): Device[] | null;

        /**
         * Specifies how an axis of a device is used.
         * @param index_ the index of the axis
         * @param use specifies how the axis is used
         */
        set_axis_use(index_: number, use: AxisUse): void;

        /**
         * Specifies the X key event to generate when a macro button of a device
         * is pressed.
         * @param index_ the index of the macro button to set
         * @param keyval the keyval to generate
         * @param modifiers the modifiers to set
         */
        set_key(index_: number, keyval: number, modifiers: ModifierType): void;

        /**
         * Sets a the mode of an input device. The mode controls if the
         * device is active and whether the device’s range is mapped to the
         * entire screen or to a single window.
         * 
         * Note: This is only meaningful for floating devices, master devices (and
         * slaves connected to these) drive the pointer cursor, which is not limited
         * by the input mode.
         * @param mode the input mode.
         * @returns `true` if the mode was successfully changed.
         */
        set_mode(mode: InputMode): boolean;

        /**
         * Release any grab on `device`.
         * @param time_ a timestap (e.g. `GDK_CURRENT_TIME`).
         * @since 3.0
         * @deprecated since 3.20.: Use `gdk_seat_ungrab()` instead.
         */
        ungrab(time_: number): void;

        /**
         * Warps `device` in `display` to the point `x`,`y` on
         * the screen `screen`, unless the device is confined
         * to a window by a grab, in which case it will be moved
         * as far as allowed by the grab. Warping the pointer
         * creates events as if the user had moved the mouse
         * instantaneously to the destination.
         * 
         * Note that the pointer should normally be under the
         * control of the user. This function was added to cover
         * some rare use cases like keyboard navigation support
         * for the color picker in the `GtkColorSelectionDialog`.
         * @param screen the screen to warp `device` to.
         * @param x the X coordinate of the destination.
         * @param y the Y coordinate of the destination.
         * @since 3.0
         */
        warp(screen: Screen, x: number, y: number): void;
    }


    namespace DeviceManager {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * The ::device-added signal is emitted either when a new master
             * pointer is created, or when a slave (Hardware) input device
             * is plugged in.
             * @signal
             * @run-last
             */
            "device-added": (device: Device) => void;
            /**
             * The ::device-changed signal is emitted whenever a device
             * has changed in the hierarchy, either slave devices being
             * disconnected from their master device or connected to
             * another one, or master devices being added or removed
             * a slave device.
             * 
             * If a slave device is detached from all master devices
             * (gdk_device_get_associated_device() returns `null`), its
             * {@link Gdk.DeviceType} will change to {@link Gdk.DeviceType.FLOATING},
             * if it's attached, it will change to {@link Gdk.DeviceType.SLAVE}.
             * @signal
             * @run-last
             */
            "device-changed": (device: Device) => void;
            /**
             * The ::device-removed signal is emitted either when a master
             * pointer is removed, or when a slave (Hardware) input device
             * is unplugged.
             * @signal
             * @run-last
             */
            "device-removed": (device: Device) => void;
            "notify::display": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            display: Display | null;
        }
    }

    /**
     * In addition to a single pointer and keyboard for user interface input,
     * GDK contains support for a variety of input devices, including graphics
     * tablets, touchscreens and multiple pointers/keyboards interacting
     * simultaneously with the user interface. Such input devices often have
     * additional features, such as sub-pixel positioning information and
     * additional device-dependent information.
     * 
     * In order to query the device hierarchy and be aware of changes in the
     * device hierarchy (such as virtual devices being created or removed, or
     * physical devices being plugged or unplugged), GDK provides
     * {@link Gdk.DeviceManager}.
     * 
     * By default, and if the platform supports it, GDK is aware of multiple
     * keyboard/pointer pairs and multitouch devices. This behavior can be
     * changed by calling `gdk_disable_multidevice()` before `gdk_display_open()`.
     * There should rarely be a need to do that though, since GDK defaults
     * to a compatibility mode in which it will emit just one enter/leave
     * event pair for all devices on a window. To enable per-device
     * enter/leave events and other multi-pointer interaction features,
     * `gdk_window_set_support_multidevice()` must be called on
     * `GdkWindows` (or `gtk_widget_set_support_multidevice()` on widgets).
     * window. See the `gdk_window_set_support_multidevice()` documentation
     * for more information.
     * 
     * On X11, multi-device support is implemented through XInput 2.
     * Unless `gdk_disable_multidevice()` is called, the XInput 2
     * {@link Gdk.DeviceManager} implementation will be used as the input source.
     * Otherwise either the core or XInput 1 implementations will be used.
     * 
     * For simple applications that don’t have any special interest in
     * input devices, the so-called “client pointer”
     * provides a reasonable approximation to a simple setup with a single
     * pointer and keyboard. The device that has been set as the client
     * pointer can be accessed via `gdk_device_manager_get_client_pointer()`.
     * 
     * Conceptually, in multidevice mode there are 2 device types. Virtual
     * devices (or master devices) are represented by the pointer cursors
     * and keyboard foci that are seen on the screen. Physical devices (or
     * slave devices) represent the hardware that is controlling the virtual
     * devices, and thus have no visible cursor on the screen.
     * 
     * Virtual devices are always paired, so there is a keyboard device for every
     * pointer device. Associations between devices may be inspected through
     * `gdk_device_get_associated_device()`.
     * 
     * There may be several virtual devices, and several physical devices could
     * be controlling each of these virtual devices. Physical devices may also
     * be “floating”, which means they are not attached to any virtual device.
     * 
     * # Master and slave devices
     * 
     * 
     * ```
     * carlos@sacarino:~$ xinput list
     * ⎡ Virtual core pointer                          id=2    [master pointer  (3)]
     * ⎜   ↳ Virtual core XTEST pointer                id=4    [slave  pointer  (2)]
     * ⎜   ↳ Wacom ISDv4 E6 Pen stylus                 id=10   [slave  pointer  (2)]
     * ⎜   ↳ Wacom ISDv4 E6 Finger touch               id=11   [slave  pointer  (2)]
     * ⎜   ↳ SynPS/2 Synaptics TouchPad                id=13   [slave  pointer  (2)]
     * ⎜   ↳ TPPS/2 IBM TrackPoint                     id=14   [slave  pointer  (2)]
     * ⎜   ↳ Wacom ISDv4 E6 Pen eraser                 id=16   [slave  pointer  (2)]
     * ⎣ Virtual core keyboard                         id=3    [master keyboard (2)]
     *     ↳ Virtual core XTEST keyboard               id=5    [slave  keyboard (3)]
     *     ↳ Power Button                              id=6    [slave  keyboard (3)]
     *     ↳ Video Bus                                 id=7    [slave  keyboard (3)]
     *     ↳ Sleep Button                              id=8    [slave  keyboard (3)]
     *     ↳ Integrated Camera                         id=9    [slave  keyboard (3)]
     *     ↳ AT Translated Set 2 keyboard              id=12   [slave  keyboard (3)]
     *     ↳ ThinkPad Extra Buttons                    id=15   [slave  keyboard (3)]
     * ```
     * 
     * 
     * By default, GDK will automatically listen for events coming from all
     * master devices, setting the {@link Gdk.Device} for all events coming from input
     * devices. Events containing device information are #GDK_MOTION_NOTIFY,
     * #GDK_BUTTON_PRESS, #GDK_2BUTTON_PRESS, #GDK_3BUTTON_PRESS,
     * #GDK_BUTTON_RELEASE, #GDK_SCROLL, #GDK_KEY_PRESS, #GDK_KEY_RELEASE,
     * #GDK_ENTER_NOTIFY, #GDK_LEAVE_NOTIFY, #GDK_FOCUS_CHANGE,
     * #GDK_PROXIMITY_IN, #GDK_PROXIMITY_OUT, #GDK_DRAG_ENTER, #GDK_DRAG_LEAVE,
     * #GDK_DRAG_MOTION, #GDK_DRAG_STATUS, #GDK_DROP_START, #GDK_DROP_FINISHED
     * and #GDK_GRAB_BROKEN. When dealing with an event on a master device,
     * it is possible to get the source (slave) device that the event originated
     * from via `gdk_event_get_source_device()`.
     * 
     * On a standard session, all physical devices are connected by default to
     * the "Virtual Core Pointer/Keyboard" master devices, hence routing all events
     * through these. This behavior is only modified by device grabs, where the
     * slave device is temporarily detached for as long as the grab is held, and
     * more permanently by user modifications to the device hierarchy.
     * 
     * On certain application specific setups, it may make sense
     * to detach a physical device from its master pointer, and mapping it to
     * an specific window. This can be achieved by the combination of
     * `gdk_device_grab()` and `gdk_device_set_mode()`.
     * 
     * In order to listen for events coming from devices
     * other than a virtual device, `gdk_window_set_device_events()` must be
     * called. Generally, this function can be used to modify the event mask
     * for any given device.
     * 
     * Input devices may also provide additional information besides X/Y.
     * For example, graphics tablets may also provide pressure and X/Y tilt
     * information. This information is device-dependent, and may be
     * queried through `gdk_device_get_axis()`. In multidevice mode, virtual
     * devices will change axes in order to always represent the physical
     * device that is routing events through it. Whenever the physical device
     * changes, the {@link Gdk.Device.n_axes} property will be notified, and
     * `gdk_device_list_axes()` will return the new device axes.
     * 
     * Devices may also have associated “keys” or
     * macro buttons. Such keys can be globally set to map into normal X
     * keyboard events. The mapping is set using `gdk_device_set_key()`.
     * 
     * In GTK+ 3.20, a new {@link Gdk.Seat} object has been introduced that
     * supersedes {@link Gdk.DeviceManager} and should be preferred in newly
     * written code.
     * @gir-type Class
     */
    abstract class DeviceManager extends GObject.Object {
        static $gtype: GObject.GType<DeviceManager>;

        // Properties
        /**
         * @construct-only
         */
        get display(): Display | null;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DeviceManager.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<DeviceManager.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof DeviceManager.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DeviceManager.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof DeviceManager.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DeviceManager.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof DeviceManager.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DeviceManager.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Returns the client pointer, that is, the master pointer that acts as the core pointer
         * for this application. In X11, window managers may change this depending on the interaction
         * pattern under the presence of several pointers.
         * 
         * You should use this function seldomly, only in code that isn’t triggered by a {@link Gdk.Event}
         * and there aren’t other means to get a meaningful {@link Gdk.Device} to operate on.
         * @returns The client pointer. This memory is          owned by GDK and must not be freed or unreferenced.
         * @since 3.0
         * @deprecated since 3.20: Use `gdk_seat_get_pointer()` instead.
         */
        get_client_pointer(): Device;

        /**
         * Gets the {@link Gdk.Display} associated to `device_manager`.
         * @returns the {@link Gdk.Display} to which          `device_manager` is associated to, or `null`. This memory is          owned by GDK and must not be freed or unreferenced.
         * @since 3.0
         */
        get_display(): Display | null;

        /**
         * Returns the list of devices of type `type` currently attached to
         * `device_manager`.
         * @param type device type to get.
         * @returns a list of          `GdkDevices`. The returned list must be          freed with g_list_free (). The list elements are owned by          GTK+ and must not be freed or unreffed.
         * @since 3.0
         * @deprecated since 3.20: , use `gdk_seat_get_pointer()`, `gdk_seat_get_keyboard()`             and `gdk_seat_get_slaves()` instead.
         */
        list_devices(type: DeviceType): Device[];
    }


    namespace DeviceTool {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::axes": (pspec: GObject.ParamSpec) => void;
            "notify::hardware-id": (pspec: GObject.ParamSpec) => void;
            "notify::serial": (pspec: GObject.ParamSpec) => void;
            "notify::tool-type": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            axes: AxisFlags;
            hardware_id: bigint | number;
            hardwareId: bigint | number;
            serial: bigint | number;
            tool_type: DeviceToolType;
            toolType: DeviceToolType;
        }
    }

    /**
     * @gir-type Class
     */
    class DeviceTool extends GObject.Object {
        static $gtype: GObject.GType<DeviceTool>;

        // Properties
        /**
         * @construct-only
         * @default 0
         */
        get axes(): AxisFlags;

        /**
         * @construct-only
         * @default 0
         */
        get hardware_id(): number;

        /**
         * @construct-only
         * @default 0
         */
        get hardwareId(): number;

        /**
         * @construct-only
         * @default 0
         */
        get serial(): number;

        /**
         * @construct-only
         * @default Gdk.DeviceToolType.UNKNOWN
         */
        get tool_type(): DeviceToolType;

        /**
         * @construct-only
         * @default Gdk.DeviceToolType.UNKNOWN
         */
        get toolType(): DeviceToolType;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DeviceTool.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<DeviceTool.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof DeviceTool.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DeviceTool.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof DeviceTool.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DeviceTool.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof DeviceTool.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DeviceTool.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Gets the hardware ID of this tool, or 0 if it's not known. When
         * non-zero, the identificator is unique for the given tool model,
         * meaning that two identical tools will share the same `hardware_id`,
         * but will have different serial numbers (see `gdk_device_tool_get_serial()`).
         * 
         * This is a more concrete (and device specific) method to identify
         * a {@link Gdk.DeviceTool} than `gdk_device_tool_get_tool_type()`, as a tablet
         * may support multiple devices with the same {@link Gdk.DeviceToolType},
         * but having different hardware identificators.
         * @returns The hardware identificator of this tool.
         * @since 3.22
         */
        get_hardware_id(): number;

        /**
         * Gets the serial of this tool, this value can be used to identify a
         * physical tool (eg. a tablet pen) across program executions.
         * @returns The serial ID for this tool
         * @since 3.22
         */
        get_serial(): number;

        /**
         * Gets the {@link Gdk.DeviceToolType} of the tool.
         * @returns The physical type for this tool. This can be used to figure out what sort of pen is being used, such as an airbrush or a pencil.
         * @since 3.22
         */
        get_tool_type(): DeviceToolType;
    }


    namespace Display {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * The ::closed signal is emitted when the connection to the windowing
             * system for `display` is closed.
             * @signal
             * @since 2.2
             * @run-last
             */
            closed: (is_error: boolean) => void;
            /**
             * The ::monitor-added signal is emitted whenever a monitor is
             * added.
             * @signal
             * @since 3.22
             * @run-last
             */
            "monitor-added": (monitor: Monitor) => void;
            /**
             * The ::monitor-removed signal is emitted whenever a monitor is
             * removed.
             * @signal
             * @since 3.22
             * @run-last
             */
            "monitor-removed": (monitor: Monitor) => void;
            /**
             * The ::opened signal is emitted when the connection to the windowing
             * system for `display` is opened.
             * @signal
             * @run-last
             */
            opened: () => void;
            /**
             * The ::seat-added signal is emitted whenever a new seat is made
             * known to the windowing system.
             * @signal
             * @since 3.20
             * @run-last
             */
            "seat-added": (seat: Seat) => void;
            /**
             * The ::seat-removed signal is emitted whenever a seat is removed
             * by the windowing system.
             * @signal
             * @since 3.20
             * @run-last
             */
            "seat-removed": (seat: Seat) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * {@link Gdk.Display} objects purpose are two fold:
     * 
     * - To manage and provide information about input devices (pointers and keyboards)
     * 
     * - To manage and provide information about the available `GdkScreens`
     * 
     * GdkDisplay objects are the GDK representation of an X Display,
     * which can be described as a workstation consisting of
     * a keyboard, a pointing device (such as a mouse) and one or more
     * screens.
     * It is used to open and keep track of various GdkScreen objects
     * currently instantiated by the application. It is also used to
     * access the keyboard(s) and mouse pointer(s) of the display.
     * 
     * Most of the input device handling has been factored out into
     * the separate {@link Gdk.DeviceManager} object. Every display has a
     * device manager, which you can obtain using
     * `gdk_display_get_device_manager()`.
     * @gir-type Class
     */
    class Display extends GObject.Object {
        static $gtype: GObject.GType<Display>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Display.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Display.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof Display.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Display.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Display.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Display.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Display.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Display.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Gets the default {@link Gdk.Display}. This is a convenience
         * function for:
         * `gdk_display_manager_get_default_display (gdk_display_manager_get ())`.
         * @since 2.2
         */
        static get_default(): Display | null;

        /**
         * Opens a display.
         * @param display_name the name of the display to open
         * @since 2.2
         */
        static open(display_name: string): Display | null;

        /**
         * Opens the default display specified by command line arguments or
         * environment variables, sets it as the default display, and returns
         * it. `gdk_parse_args()` must have been called first. If the default
         * display has previously been set, simply returns that. An internal
         * function that should not be used by applications.
         * @deprecated since 3.16: This symbol was never meant to be used outside   of GTK+
         */
        static open_default_libgtk_only(): Display | null;

        // Methods
        /**
         * Emits a short beep on `display`
         * @since 2.2
         */
        beep(): void;

        /**
         * Closes the connection to the windowing system for the given display,
         * and cleans up associated resources.
         * @since 2.2
         */
        close(): void;

        /**
         * Returns `true` if there is an ongoing grab on `device` for `display`.
         * @param device a {@link Gdk.Device}
         * @returns `true` if there is a grab in effect for `device`.
         */
        device_is_grabbed(device: Device): boolean;

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
         * @since 2.4
         */
        flush(): void;

        /**
         * Returns a {@link Gdk.AppLaunchContext} suitable for launching
         * applications on the given display.
         * @returns a new {@link Gdk.AppLaunchContext} for `display`.     Free with `g_object_unref()` when done
         * @since 3.0
         */
        get_app_launch_context(): AppLaunchContext;

        /**
         * Returns the default size to use for cursors on `display`.
         * @returns the default cursor size.
         * @since 2.4
         */
        get_default_cursor_size(): number;

        /**
         * Returns the default group leader window for all toplevel windows
         * on `display`. This window is implicitly created by GDK.
         * See `gdk_window_set_group()`.
         * @returns The default group leader window for `display`
         * @since 2.4
         */
        get_default_group(): Window;

        /**
         * Get the default {@link Gdk.Screen} for `display`.
         * @returns the default {@link Gdk.Screen} object for `display`
         * @since 2.2
         */
        get_default_screen(): Screen;

        /**
         * Returns the default {@link Gdk.Seat} for this display.
         * @returns the default seat.
         * @since 3.20
         */
        get_default_seat(): Seat;

        /**
         * Returns the {@link Gdk.DeviceManager} associated to `display`.
         * @returns A {@link Gdk.DeviceManager}, or          `null`. This memory is owned by GDK and must not be freed          or unreferenced.
         * @since 3.0
         * @deprecated since 3.20.: Use `gdk_display_get_default_seat()` and {@link Gdk.Seat} operations.
         */
        get_device_manager(): DeviceManager | null;

        /**
         * Gets the next {@link Gdk.Event} to be processed for `display`, fetching events from the
         * windowing system if necessary.
         * @returns the next {@link Gdk.Event} to be processed, or `null` if no events are pending. The returned {@link Gdk.Event} should be freed with `gdk_event_free()`.
         * @since 2.2
         */
        get_event(): Event | null;

        /**
         * Gets the maximal size to use for cursors on `display`.
         * @since 2.4
         */
        get_maximal_cursor_size(): [number, number];

        /**
         * Gets a monitor associated with this display.
         * @param monitor_num number of the monitor
         * @returns the {@link Gdk.Monitor}, or `null` if    `monitor_num` is not a valid monitor number
         * @since 3.22
         */
        get_monitor(monitor_num: number): Monitor | null;

        /**
         * Gets the monitor in which the point (`x`, `y`) is located,
         * or a nearby monitor if the point is not in any monitor.
         * @param x the x coordinate of the point
         * @param y the y coordinate of the point
         * @returns the monitor containing the point
         * @since 3.22
         */
        get_monitor_at_point(x: number, y: number): Monitor;

        /**
         * Gets the monitor in which the largest area of `window`
         * resides, or a monitor close to `window` if it is outside
         * of all monitors.
         * @param window a {@link Gdk.Window}
         * @returns the monitor with the largest overlap with `window`
         * @since 3.22
         */
        get_monitor_at_window(window: Window): Monitor;

        /**
         * Gets the number of monitors that belong to `display`.
         * 
         * The returned number is valid until the next emission of the
         * {@link Gdk.Display.SignalSignatures.monitor_added | Gdk.Display::monitor-added} or {@link Gdk.Display.SignalSignatures.monitor_removed | Gdk.Display::monitor-removed} signal.
         * @returns the number of monitors
         * @since 3.22
         */
        get_n_monitors(): number;

        /**
         * Gets the number of screen managed by the `display`.
         * @returns number of screens.
         * @since 2.2
         * @deprecated since 3.10: The number of screens is always 1.
         */
        get_n_screens(): number;

        /**
         * Gets the name of the display.
         * @returns a string representing the display name. This string is owned by GDK and should not be modified or freed.
         * @since 2.2
         */
        get_name(): string;

        /**
         * Gets the current location of the pointer and the current modifier
         * mask for a given display.
         * @since 2.2
         * @deprecated since 3.0: Use `gdk_device_get_position()` instead.
         */
        get_pointer(): [Screen | null, number, number, ModifierType | null];

        /**
         * Gets the primary monitor for the display.
         * 
         * The primary monitor is considered the monitor where the “main desktop”
         * lives. While normal application windows typically allow the window
         * manager to place the windows, specialized desktop applications
         * such as panels should place themselves on the primary monitor.
         * @returns the primary monitor, or `null` if no primary     monitor is configured by the user
         * @since 3.22
         */
        get_primary_monitor(): Monitor | null;

        /**
         * Returns a screen object for one of the screens of the display.
         * @param screen_num the screen number
         * @returns the {@link Gdk.Screen} object
         * @since 2.2
         * @deprecated since 3.20: There is only one screen; use `gdk_display_get_default_screen()` to get it.
         */
        get_screen(screen_num: number): Screen;

        /**
         * Obtains the window underneath the mouse pointer, returning the location
         * of the pointer in that window in `win_x`, `win_y` for `screen`. Returns `null`
         * if the window under the mouse pointer is not known to GDK (for example,
         * belongs to another application).
         * @returns the window under the mouse   pointer, or `null`
         * @since 2.2
         * @deprecated since 3.0: Use `gdk_device_get_window_at_position()` instead.
         */
        get_window_at_pointer(): [Window | null, number, number];

        /**
         * Returns whether the display has events that are waiting
         * to be processed.
         * @returns `true` if there are events ready to be processed.
         * @since 3.0
         */
        has_pending(): boolean;

        /**
         * Finds out if the display has been closed.
         * @returns `true` if the display is closed.
         * @since 2.22
         */
        is_closed(): boolean;

        /**
         * Release any keyboard grab
         * @param time_ a timestap (e.g #GDK_CURRENT_TIME).
         * @since 2.2
         * @deprecated since 3.0: Use `gdk_device_ungrab()`, together with `gdk_device_grab()`             instead.
         */
        keyboard_ungrab(time_: number): void;

        /**
         * Returns the list of available input devices attached to `display`.
         * The list is statically allocated and should not be freed.
         * @returns a list of {@link Gdk.Device}
         * @since 2.2
         * @deprecated since 3.0: Use `gdk_device_manager_list_devices()` instead.
         */
        list_devices(): Device[];

        /**
         * Returns the list of seats known to `display`.
         * @returns the          list of seats known to the {@link Gdk.Display}
         * @since 3.20
         */
        list_seats(): Seat[];

        /**
         * Indicates to the GUI environment that the application has
         * finished loading, using a given identifier.
         * 
         * GTK+ will call this function automatically for `GtkWindow`
         * with custom startup-notification identifier unless
         * `gtk_window_set_auto_startup_notification()` is called to
         * disable that feature.
         * @param startup_id a startup-notification identifier, for which     notification process should be completed
         * @since 3.0
         */
        notify_startup_complete(startup_id: string): void;

        /**
         * Gets a copy of the first {@link Gdk.Event} in the `display`’s event queue, without
         * removing the event from the queue.  (Note that this function will
         * not get more events from the windowing system.  It only checks the events
         * that have already been moved to the GDK event queue.)
         * @returns a copy of the first {@link Gdk.Event} on the event queue, or `null` if no events are in the queue. The returned {@link Gdk.Event} should be freed with `gdk_event_free()`.
         * @since 2.2
         */
        peek_event(): Event | null;

        /**
         * Test if the pointer is grabbed.
         * @returns `true` if an active X pointer grab is in effect
         * @since 2.2
         * @deprecated since 3.0: Use `gdk_display_device_is_grabbed()` instead.
         */
        pointer_is_grabbed(): boolean;

        /**
         * Release any pointer grab.
         * @param time_ a timestap (e.g. `GDK_CURRENT_TIME`).
         * @since 2.2
         * @deprecated since 3.0: Use `gdk_device_ungrab()`, together with `gdk_device_grab()`             instead.
         */
        pointer_ungrab(time_: number): void;

        /**
         * Appends a copy of the given event onto the front of the event
         * queue for `display`.
         * @param event a {@link Gdk.Event}.
         * @since 2.2
         */
        put_event(event: Event): void;

        /**
         * Request {@link Gdk.EventOwnerChange} events for ownership changes
         * of the selection named by the given atom.
         * @param selection the {@link Gdk.Atom} naming the selection for which             ownership change notification is requested
         * @returns whether {@link Gdk.EventOwnerChange} events will               be sent.
         * @since 2.6
         */
        request_selection_notification(selection: Atom): boolean;

        /**
         * Sets the double click distance (two clicks within this distance
         * count as a double click and result in a #GDK_2BUTTON_PRESS event).
         * See also `gdk_display_set_double_click_time()`.
         * Applications should not set this, it is a global
         * user-configured setting.
         * @param distance distance in pixels
         * @since 2.4
         */
        set_double_click_distance(distance: number): void;

        /**
         * Sets the double click time (two clicks within this time interval
         * count as a double click and result in a #GDK_2BUTTON_PRESS event).
         * Applications should not set this, it is a global
         * user-configured setting.
         * @param msec double click time in milliseconds (thousandths of a second)
         * @since 2.2
         */
        set_double_click_time(msec: number): void;

        /**
         * Issues a request to the clipboard manager to store the
         * clipboard data. On X11, this is a special program that works
         * according to the
         * [FreeDesktop Clipboard Specification](http://www.freedesktop.org/Standards/clipboard-manager-spec).
         * @param clipboard_window a {@link Gdk.Window} belonging to the clipboard owner
         * @param time_ a timestamp
         * @param targets an array of targets                    that should be saved, or `null`                    if all available targets should be saved.
         * @since 2.6
         */
        store_clipboard(clipboard_window: Window, time_: number, targets: Atom[] | null): void;

        /**
         * Returns whether the speicifed display supports clipboard
         * persistance; i.e. if it’s possible to store the clipboard data after an
         * application has quit. On X11 this checks if a clipboard daemon is
         * running.
         * @returns `true` if the display supports clipboard persistance.
         * @since 2.6
         */
        supports_clipboard_persistence(): boolean;

        /**
         * Returns `true` if `gdk_window_set_composited()` can be used
         * to redirect drawing on the window using compositing.
         * 
         * Currently this only works on X11 with XComposite and
         * XDamage extensions available.
         * @returns `true` if windows may be composited.
         * @since 2.12
         * @deprecated since 3.16: Compositing is an outdated technology that   only ever worked on X11.
         */
        supports_composite(): boolean;

        /**
         * Returns `true` if cursors can use an 8bit alpha channel
         * on `display`. Otherwise, cursors are restricted to bilevel
         * alpha (i.e. a mask).
         * @returns whether cursors can have alpha channels.
         * @since 2.4
         */
        supports_cursor_alpha(): boolean;

        /**
         * Returns `true` if multicolored cursors are supported
         * on `display`. Otherwise, cursors have only a forground
         * and a background color.
         * @returns whether cursors can have multiple colors.
         * @since 2.4
         */
        supports_cursor_color(): boolean;

        /**
         * Returns `true` if `gdk_window_input_shape_combine_mask()` can
         * be used to modify the input shape of windows on `display`.
         * @returns `true` if windows with modified input shape are supported
         * @since 2.10
         */
        supports_input_shapes(): boolean;

        /**
         * Returns whether {@link Gdk.EventOwnerChange} events will be
         * sent when the owner of a selection changes.
         * @returns whether {@link Gdk.EventOwnerChange} events will               be sent.
         * @since 2.6
         */
        supports_selection_notification(): boolean;

        /**
         * Returns `true` if `gdk_window_shape_combine_mask()` can
         * be used to create shaped windows on `display`.
         * @returns `true` if shaped windows are supported
         * @since 2.10
         */
        supports_shapes(): boolean;

        /**
         * Flushes any requests queued for the windowing system and waits until all
         * requests have been handled. This is often used for making sure that the
         * display is synchronized with the current state of the program. Calling
         * `gdk_display_sync()` before `gdk_error_trap_pop()` makes sure that any errors
         * generated from earlier requests are handled before the error trap is
         * removed.
         * 
         * This is most useful for X11. On windowing systems where requests are
         * handled synchronously, this function will do nothing.
         * @since 2.2
         */
        sync(): void;

        /**
         * Warps the pointer of `display` to the point `x`,`y` on
         * the screen `screen`, unless the pointer is confined
         * to a window by a grab, in which case it will be moved
         * as far as allowed by the grab. Warping the pointer
         * creates events as if the user had moved the mouse
         * instantaneously to the destination.
         * 
         * Note that the pointer should normally be under the
         * control of the user. This function was added to cover
         * some rare use cases like keyboard navigation support
         * for the color picker in the `GtkColorSelectionDialog`.
         * @param screen the screen of `display` to warp the pointer to
         * @param x the x coordinate of the destination
         * @param y the y coordinate of the destination
         * @since 2.8
         * @deprecated since 3.0: Use `gdk_device_warp()` instead.
         */
        warp_pointer(screen: Screen, x: number, y: number): void;
    }


    namespace DisplayManager {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * The ::display-opened signal is emitted when a display is opened.
             * @signal
             * @since 2.2
             * @run-last
             */
            "display-opened": (display: Display) => void;
            "notify::default-display": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            default_display: Display | null;
            defaultDisplay: Display | null;
        }
    }

    /**
     * The purpose of the {@link Gdk.DisplayManager} singleton object is to offer
     * notification when displays appear or disappear or the default display
     * changes.
     * 
     * You can use `gdk_display_manager_get()` to obtain the {@link Gdk.DisplayManager}
     * singleton, but that should be rarely necessary. Typically, initializing
     * GTK+ opens a display that you can work with without ever accessing the
     * {@link Gdk.DisplayManager}.
     * 
     * The GDK library can be built with support for multiple backends.
     * The {@link Gdk.DisplayManager} object determines which backend is used
     * at runtime.
     * 
     * When writing backend-specific code that is supposed to work with
     * multiple GDK backends, you have to consider both compile time and
     * runtime. At compile time, use the #GDK_WINDOWING_X11, #GDK_WINDOWING_WIN32
     * macros, etc. to find out which backends are present in the GDK library
     * you are building your application against. At runtime, use type-check
     * macros like GDK_IS_X11_DISPLAY() to find out which backend is in use:
     * 
     * ## Backend-specific code ## {#backend-specific}
     * 
     * 
     * ```c
     * #ifdef GDK_WINDOWING_X11
     *   if (GDK_IS_X11_DISPLAY (display))
     *     {
     *       // make X11-specific calls here
     *     }
     *   else
     * #endif
     * #ifdef GDK_WINDOWING_QUARTZ
     *   if (GDK_IS_QUARTZ_DISPLAY (display))
     *     {
     *       // make Quartz-specific calls here
     *     }
     *   else
     * #endif
     *   g_error ("Unsupported GDK backend");
     * ```
     * 
     * @gir-type Class
     */
    class DisplayManager extends GObject.Object {
        static $gtype: GObject.GType<DisplayManager>;

        // Properties
        get default_display(): Display | null;
        set default_display(val: Display | null);

        get defaultDisplay(): Display | null;
        set defaultDisplay(val: Display | null);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DisplayManager.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<DisplayManager.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof DisplayManager.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DisplayManager.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof DisplayManager.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DisplayManager.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof DisplayManager.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DisplayManager.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Gets the singleton {@link Gdk.DisplayManager} object.
         * 
         * When called for the first time, this function consults the
         * `GDK_BACKEND` environment variable to find out which
         * of the supported GDK backends to use (in case GDK has been compiled
         * with multiple backends). Applications can use `gdk_set_allowed_backends()`
         * to limit what backends can be used.
         * @since 2.2
         */
        static get(): DisplayManager;

        // Methods
        /**
         * Gets the default {@link Gdk.Display}.
         * @returns a {@link Gdk.Display}, or `null` if     there is no default display.
         * @since 2.2
         */
        get_default_display(): Display | null;

        /**
         * List all currently open displays.
         * @returns a newly     allocated {@link GLib.SList} of {@link Gdk.Display} objects. Free with `g_slist_free()`     when you are done with it.
         * @since 2.2
         */
        list_displays(): Display[];

        /**
         * Opens a display.
         * @param name the name of the display to open
         * @returns a {@link Gdk.Display}, or `null` if the     display could not be opened
         * @since 3.0
         */
        open_display(name: string): Display | null;

        /**
         * Sets `display` as the default display.
         * @param display a {@link Gdk.Display}
         * @since 2.2
         */
        set_default_display(display: Display): void;
    }


    namespace DragContext {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * A new action is being chosen for the drag and drop operation.
             * 
             * This signal will only be emitted if the {@link Gdk.DragContext} manages
             * the drag and drop operation. See `gdk_drag_context_manage_dnd()`
             * for more information.
             * @signal
             * @since 3.20
             * @run-last
             */
            "action-changed": (action: DragAction) => void;
            /**
             * The drag and drop operation was cancelled.
             * 
             * This signal will only be emitted if the {@link Gdk.DragContext} manages
             * the drag and drop operation. See `gdk_drag_context_manage_dnd()`
             * for more information.
             * @signal
             * @since 3.20
             * @run-last
             */
            cancel: (reason: DragCancelReason) => void;
            /**
             * The drag and drop operation was finished, the drag destination
             * finished reading all data. The drag source can now free all
             * miscellaneous data.
             * 
             * This signal will only be emitted if the {@link Gdk.DragContext} manages
             * the drag and drop operation. See `gdk_drag_context_manage_dnd()`
             * for more information.
             * @signal
             * @since 3.20
             * @run-last
             */
            "dnd-finished": () => void;
            /**
             * The drag and drop operation was performed on an accepting client.
             * 
             * This signal will only be emitted if the {@link Gdk.DragContext} manages
             * the drag and drop operation. See `gdk_drag_context_manage_dnd()`
             * for more information.
             * @signal
             * @since 3.20
             * @run-last
             */
            "drop-performed": (time: number) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class DragContext extends GObject.Object {
        static $gtype: GObject.GType<DragContext>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DragContext.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<DragContext.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof DragContext.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DragContext.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof DragContext.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DragContext.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof DragContext.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DragContext.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Determines the bitmask of actions proposed by the source if
         * `gdk_drag_context_get_suggested_action()` returns {@link Gdk.DragAction.ASK}.
         * @returns the {@link Gdk.DragAction} flags
         * @since 2.22
         */
        get_actions(): DragAction;

        /**
         * Returns the destination window for the DND operation.
         * @returns a {@link Gdk.Window}
         * @since 3.0
         */
        get_dest_window(): Window;

        /**
         * Returns the {@link Gdk.Device} associated to the drag context.
         * @returns The {@link Gdk.Device} associated to `context`.
         */
        get_device(): Device;

        /**
         * Returns the window on which the drag icon should be rendered
         * during the drag operation. Note that the window may not be
         * available until the drag operation has begun. GDK will move
         * the window in accordance with the ongoing drag operation.
         * The window is owned by `context` and will be destroyed when
         * the drag operation is over.
         * @returns the drag window, or `null`
         * @since 3.20
         */
        get_drag_window(): Window | null;

        /**
         * Returns the drag protocol that is used by this context.
         * @returns the drag protocol
         * @since 3.0
         */
        get_protocol(): DragProtocol;

        /**
         * Determines the action chosen by the drag destination.
         * @returns a {@link Gdk.DragAction} value
         * @since 2.22
         */
        get_selected_action(): DragAction;

        /**
         * Returns the {@link Gdk.Window} where the DND operation started.
         * @returns a {@link Gdk.Window}
         * @since 2.22
         */
        get_source_window(): Window;

        /**
         * Determines the suggested drag action of the context.
         * @returns a {@link Gdk.DragAction} value
         * @since 2.22
         */
        get_suggested_action(): DragAction;

        /**
         * Retrieves the list of targets of the context.
         * @returns a {@link GLib.List} of targets
         * @since 2.22
         */
        list_targets(): Atom[];

        /**
         * Requests the drag and drop operation to be managed by `context`.
         * When a drag and drop operation becomes managed, the {@link Gdk.DragContext}
         * will internally handle all input and source-side {@link Gdk.EventDND} events
         * as required by the windowing system.
         * 
         * Once the drag and drop operation is managed, the drag context will
         * emit the following signals:
         * - The {@link Gdk.DragContext.SignalSignatures.action_changed | Gdk.DragContext::action-changed} signal whenever the final action
         *   to be performed by the drag and drop operation changes.
         * - The {@link Gdk.DragContext.SignalSignatures.drop_performed | Gdk.DragContext::drop-performed} signal after the user performs
         *   the drag and drop gesture (typically by releasing the mouse button).
         * - The {@link Gdk.DragContext.SignalSignatures.dnd_finished | Gdk.DragContext::dnd-finished} signal after the drag and drop
         *   operation concludes (after all `GdkSelection` transfers happen).
         * - The {@link Gdk.DragContext.SignalSignatures.cancel | Gdk.DragContext::cancel} signal if the drag and drop operation is
         *   finished but doesn't happen over an accepting destination, or is
         *   cancelled through other means.
         * @param ipc_window Window to use for IPC messaging/events
         * @param actions the actions supported by the drag source
         * @returns `TRUE` if the drag and drop operation is managed.
         * @since 3.20
         */
        manage_dnd(ipc_window: Window, actions: DragAction): boolean;

        /**
         * Associates a {@link Gdk.Device} to `context`, so all Drag and Drop events
         * for `context` are emitted as if they came from this device.
         * @param device a {@link Gdk.Device}
         */
        set_device(device: Device): void;

        /**
         * Sets the position of the drag window that will be kept
         * under the cursor hotspot. Initially, the hotspot is at the
         * top left corner of the drag window.
         * @param hot_x x coordinate of the drag window hotspot
         * @param hot_y y coordinate of the drag window hotspot
         * @since 3.20
         */
        set_hotspot(hot_x: number, hot_y: number): void;
    }


    namespace DrawingContext {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::clip": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            clip: cairo.Region | null;
            window: Window;
        }
    }

    /**
     * {@link Gdk.DrawingContext} is an object that represents the current drawing
     * state of a {@link Gdk.Window}.
     * 
     * It's possible to use a {@link Gdk.DrawingContext} to draw on a {@link Gdk.Window}
     * via rendering API like Cairo or OpenGL.
     * 
     * A {@link Gdk.DrawingContext} can only be created by calling `gdk_window_begin_draw_frame()`
     * and will be valid until a call to `gdk_window_end_draw_frame()`.
     * 
     * {@link Gdk.DrawingContext} is available since GDK 3.22
     * @gir-type Class
     */
    class DrawingContext extends GObject.Object {
        static $gtype: GObject.GType<DrawingContext>;

        // Properties
        /**
         * The clip region applied to the drawing context.
         * @since 3.22
         * @construct-only
         */
        get clip(): cairo.Region | null;

        /**
         * The {@link Gdk.Window} that created the drawing context.
         * @since 3.22
         * @construct-only
         */
        get window(): Window;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DrawingContext.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<DrawingContext.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof DrawingContext.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DrawingContext.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof DrawingContext.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DrawingContext.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof DrawingContext.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DrawingContext.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Retrieves a Cairo context to be used to draw on the {@link Gdk.Window}
         * that created the {@link Gdk.DrawingContext}.
         * 
         * The returned context is guaranteed to be valid as long as the
         * {@link Gdk.DrawingContext} is valid, that is between a call to
         * `gdk_window_begin_draw_frame()` and `gdk_window_end_draw_frame()`.
         * @returns a Cairo context to be used to draw   the contents of the {@link Gdk.Window}. The context is owned by the   {@link Gdk.DrawingContext} and should not be destroyed
         * @since 3.22
         */
        get_cairo_context(): cairo.Context;

        /**
         * Retrieves a copy of the clip region used when creating the `context`.
         * @returns a Cairo region
         * @since 3.22
         */
        get_clip(): cairo.Region | null;

        /**
         * Retrieves the window that created the drawing `context`.
         * @returns a {@link Gdk.Window}
         * @since 3.22
         */
        get_window(): Window;

        /**
         * Checks whether the given {@link Gdk.DrawingContext} is valid.
         * @returns `true` if the context is valid
         * @since 3.22
         */
        is_valid(): boolean;
    }


    namespace FrameClock {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * This signal ends processing of the frame. Applications
             * should generally not handle this signal.
             * @signal
             * @run-last
             */
            "after-paint": () => void;
            /**
             * This signal begins processing of the frame. Applications
             * should generally not handle this signal.
             * @signal
             * @run-last
             */
            "before-paint": () => void;
            /**
             * This signal is used to flush pending motion events that
             * are being batched up and compressed together. Applications
             * should not handle this signal.
             * @signal
             * @run-last
             */
            "flush-events": () => void;
            /**
             * This signal is emitted as the second step of toolkit and
             * application processing of the frame. Any work to update
             * sizes and positions of application elements should be
             * performed. GTK+ normally handles this internally.
             * @signal
             * @run-last
             */
            layout: () => void;
            /**
             * This signal is emitted as the third step of toolkit and
             * application processing of the frame. The frame is
             * repainted. GDK normally handles this internally and
             * produces expose events, which are turned into GTK+
             * `GtkWidget::draw` signals.
             * @signal
             * @run-last
             */
            paint: () => void;
            /**
             * This signal is emitted after processing of the frame is
             * finished, and is handled internally by GTK+ to resume normal
             * event processing. Applications should not handle this signal.
             * @signal
             * @run-last
             */
            "resume-events": () => void;
            /**
             * This signal is emitted as the first step of toolkit and
             * application processing of the frame. Animations should
             * be updated using `gdk_frame_clock_get_frame_time()`.
             * Applications can connect directly to this signal, or
             * use `gtk_widget_add_tick_callback()` as a more convenient
             * interface.
             * @signal
             * @run-last
             */
            update: () => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * A {@link Gdk.FrameClock} tells the application when to update and repaint a
     * window. This may be synced to the vertical refresh rate of the
     * monitor, for example. Even when the frame clock uses a simple timer
     * rather than a hardware-based vertical sync, the frame clock helps
     * because it ensures everything paints at the same time (reducing the
     * total number of frames). The frame clock can also automatically
     * stop painting when it knows the frames will not be visible, or
     * scale back animation framerates.
     * 
     * {@link Gdk.FrameClock} is designed to be compatible with an OpenGL-based
     * implementation or with mozRequestAnimationFrame in Firefox,
     * for example.
     * 
     * A frame clock is idle until someone requests a frame with
     * `gdk_frame_clock_request_phase()`. At some later point that makes
     * sense for the synchronization being implemented, the clock will
     * process a frame and emit signals for each phase that has been
     * requested. (See the signals of the {@link Gdk.FrameClock} class for
     * documentation of the phases. {@link Gdk.FrameClockPhase.UPDATE} and the
     * {@link Gdk.FrameClock.SignalSignatures.update | Gdk.FrameClock::update} signal are most interesting for application
     * writers, and are used to update the animations, using the frame time
     * given by `gdk_frame_clock_get_frame_time()`.
     * 
     * The frame time is reported in microseconds and generally in the same
     * timescale as `g_get_monotonic_time()`, however, it is not the same
     * as `g_get_monotonic_time()`. The frame time does not advance during
     * the time a frame is being painted, and outside of a frame, an attempt
     * is made so that all calls to `gdk_frame_clock_get_frame_time()` that
     * are called at a “similar” time get the same value. This means that
     * if different animations are timed by looking at the difference in
     * time between an initial value from `gdk_frame_clock_get_frame_time()`
     * and the value inside the {@link Gdk.FrameClock.SignalSignatures.update | Gdk.FrameClock::update} signal of the clock,
     * they will stay exactly synchronized.
     * @gir-type Class
     */
    abstract class FrameClock extends GObject.Object {
        static $gtype: GObject.GType<FrameClock>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FrameClock.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<FrameClock.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof FrameClock.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FrameClock.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof FrameClock.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FrameClock.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof FrameClock.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<FrameClock.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Starts updates for an animation. Until a matching call to
         * `gdk_frame_clock_end_updating()` is made, the frame clock will continually
         * request a new frame with the {@link Gdk.FrameClockPhase.UPDATE} phase.
         * This function may be called multiple times and frames will be
         * requested until `gdk_frame_clock_end_updating()` is called the same
         * number of times.
         * @since 3.8
         */
        begin_updating(): void;

        /**
         * Stops updates for an animation. See the documentation for
         * `gdk_frame_clock_begin_updating()`.
         * @since 3.8
         */
        end_updating(): void;

        /**
         * Gets the frame timings for the current frame.
         * @returns the {@link Gdk.FrameTimings} for the  frame currently being processed, or even no frame is being  processed, for the previous frame. Before any frames have been  processed, returns `null`.
         * @since 3.8
         */
        get_current_timings(): FrameTimings | null;

        /**
         * A {@link Gdk.FrameClock} maintains a 64-bit counter that increments for
         * each frame drawn.
         * @returns inside frame processing, the value of the frame counter  for the current frame. Outside of frame processing, the frame   counter for the last frame.
         * @since 3.8
         */
        get_frame_counter(): number;

        /**
         * Gets the time that should currently be used for animations.  Inside
         * the processing of a frame, it’s the time used to compute the
         * animation position of everything in a frame. Outside of a frame, it's
         * the time of the conceptual “previous frame,” which may be either
         * the actual previous frame time, or if that’s too old, an updated
         * time.
         * @returns a timestamp in microseconds, in the timescale of  of `g_get_monotonic_time()`.
         * @since 3.8
         */
        get_frame_time(): number;

        /**
         * {@link Gdk.FrameClock} internally keeps a history of {@link Gdk.FrameTimings}
         * objects for recent frames that can be retrieved with
         * `gdk_frame_clock_get_timings()`. The set of stored frames
         * is the set from the counter values given by
         * `gdk_frame_clock_get_history_start()` and
         * `gdk_frame_clock_get_frame_counter()`, inclusive.
         * @returns the frame counter value for the oldest frame  that is available in the internal frame history of the  {@link Gdk.FrameClock}.
         * @since 3.8
         */
        get_history_start(): number;

        /**
         * Using the frame history stored in the frame clock, finds the last
         * known presentation time and refresh interval, and assuming that
         * presentation times are separated by the refresh interval,
         * predicts a presentation time that is a multiple of the refresh
         * interval after the last presentation time, and later than `base_time`.
         * @param base_time base time for determining a presentaton time
         * @since 3.8
         */
        get_refresh_info(base_time: bigint | number): [number, number];

        /**
         * Retrieves a {@link Gdk.FrameTimings} object holding timing information
         * for the current frame or a recent frame. The {@link Gdk.FrameTimings}
         * object may not yet be complete: see `gdk_frame_timings_get_complete()`.
         * @param frame_counter the frame counter value identifying the frame to  be received.
         * @returns the {@link Gdk.FrameTimings} object for  the specified frame, or `null` if it is not available. See  `gdk_frame_clock_get_history_start()`.
         * @since 3.8
         */
        get_timings(frame_counter: bigint | number): FrameTimings | null;

        /**
         * Asks the frame clock to run a particular phase. The signal
         * corresponding the requested phase will be emitted the next
         * time the frame clock processes. Multiple calls to
         * `gdk_frame_clock_request_phase()` will be combined together
         * and only one frame processed. If you are displaying animated
         * content and want to continually request the
         * {@link Gdk.FrameClockPhase.UPDATE} phase for a period of time,
         * you should use `gdk_frame_clock_begin_updating()` instead, since
         * this allows GTK+ to adjust system parameters to get maximally
         * smooth animations.
         * @param phase the phase that is requested
         * @since 3.8
         */
        request_phase(phase: FrameClockPhase): void;
    }


    namespace GLContext {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::display": (pspec: GObject.ParamSpec) => void;
            "notify::shared-context": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            display: Display | null;
            shared_context: GLContext | null;
            sharedContext: GLContext | null;
            window: Window | null;
        }
    }

    /**
     * {@link Gdk.GLContext} is an object representing the platform-specific
     * OpenGL drawing context.
     * 
     * `GdkGLContexts` are created for a {@link Gdk.Window} using
     * `gdk_window_create_gl_context()`, and the context will match
     * the {@link Gdk.Visual} of the window.
     * 
     * A {@link Gdk.GLContext} is not tied to any particular normal framebuffer.
     * For instance, it cannot draw to the {@link Gdk.Window} back buffer. The GDK
     * repaint system is in full control of the painting to that. Instead,
     * you can create render buffers or textures and use `gdk_cairo_draw_from_gl()`
     * in the draw function of your widget to draw them. Then GDK will handle
     * the integration of your rendering with that of other widgets.
     * 
     * Support for {@link Gdk.GLContext} is platform-specific, context creation
     * can fail, returning `null` context.
     * 
     * A {@link Gdk.GLContext} has to be made "current" in order to start using
     * it, otherwise any OpenGL call will be ignored.
     * 
     * ## Creating a new OpenGL context ##
     * 
     * In order to create a new {@link Gdk.GLContext} instance you need a
     * {@link Gdk.Window}, which you typically get during the realize call
     * of a widget.
     * 
     * A {@link Gdk.GLContext} is not realized until either `gdk_gl_context_make_current()`,
     * or until it is realized using `gdk_gl_context_realize()`. It is possible to
     * specify details of the GL context like the OpenGL version to be used, or
     * whether the GL context should have extra state validation enabled after
     * calling `gdk_window_create_gl_context()` by calling `gdk_gl_context_realize()`.
     * If the realization fails you have the option to change the settings of the
     * {@link Gdk.GLContext} and try again.
     * 
     * ## Using a GdkGLContext ##
     * 
     * You will need to make the {@link Gdk.GLContext} the current context
     * before issuing OpenGL calls; the system sends OpenGL commands to
     * whichever context is current. It is possible to have multiple
     * contexts, so you always need to ensure that the one which you
     * want to draw with is the current one before issuing commands:
     * 
     * 
     * ```c
     *   gdk_gl_context_make_current (context);
     * ```
     * 
     * 
     * You can now perform your drawing using OpenGL commands.
     * 
     * You can check which {@link Gdk.GLContext} is the current one by using
     * `gdk_gl_context_get_current()`; you can also unset any {@link Gdk.GLContext}
     * that is currently set by calling `gdk_gl_context_clear_current()`.
     * @gir-type Class
     */
    abstract class GLContext extends GObject.Object {
        static $gtype: GObject.GType<GLContext>;

        // Properties
        /**
         * The {@link Gdk.Display} used to create the {@link Gdk.GLContext}.
         * @since 3.16
         * @construct-only
         */
        get display(): Display | null;

        /**
         * The {@link Gdk.GLContext} that this context is sharing data with, or `null`
         * @since 3.16
         * @construct-only
         */
        get shared_context(): GLContext | null;

        /**
         * The {@link Gdk.GLContext} that this context is sharing data with, or `null`
         * @since 3.16
         * @construct-only
         */
        get sharedContext(): GLContext | null;

        /**
         * The {@link Gdk.Window} the gl context is bound to.
         * @since 3.16
         * @construct-only
         */
        get window(): Window | null;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GLContext.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<GLContext.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof GLContext.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GLContext.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof GLContext.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GLContext.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof GLContext.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GLContext.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Clears the current {@link Gdk.GLContext}.
         * 
         * Any OpenGL call after this function returns will be ignored
         * until `gdk_gl_context_make_current()` is called.
         * @since 3.16
         */
        static clear_current(): void;

        /**
         * Retrieves the current {@link Gdk.GLContext}.
         * @since 3.16
         */
        static get_current(): GLContext | null;

        // Methods
        /**
         * Retrieves the value set using `gdk_gl_context_set_debug_enabled()`.
         * @returns `true` if debugging is enabled
         * @since 3.16
         */
        get_debug_enabled(): boolean;

        /**
         * Retrieves the {@link Gdk.Display} the `context` is created for
         * @returns a {@link Gdk.Display} or `null`
         * @since 3.16
         */
        get_display(): Display | null;

        /**
         * Retrieves the value set using `gdk_gl_context_set_forward_compatible()`.
         * @returns `true` if the context should be forward compatible
         * @since 3.16
         */
        get_forward_compatible(): boolean;

        /**
         * Retrieves the major and minor version requested by calling
         * `gdk_gl_context_set_required_version()`.
         * @since 3.16
         */
        get_required_version(): [number, number];

        /**
         * Retrieves the {@link Gdk.GLContext} that this `context` share data with.
         * @returns a {@link Gdk.GLContext} or `null`
         * @since 3.16
         */
        get_shared_context(): GLContext | null;

        /**
         * Checks whether the `context` is using an OpenGL or OpenGL ES profile.
         * @returns `true` if the {@link Gdk.GLContext} is using an OpenGL ES profile
         * @since 3.22
         */
        get_use_es(): boolean;

        /**
         * Retrieves the OpenGL version of the `context`.
         * 
         * The `context` must be realized prior to calling this function.
         * @since 3.16
         */
        get_version(): [number, number];

        /**
         * Retrieves the {@link Gdk.Window} used by the `context`.
         * @returns a {@link Gdk.Window} or `null`
         * @since 3.16
         */
        get_window(): Window | null;

        /**
         * Whether the {@link Gdk.GLContext} is in legacy mode or not.
         * 
         * The {@link Gdk.GLContext} must be realized before calling this function.
         * 
         * When realizing a GL context, GDK will try to use the OpenGL 3.2 core
         * profile; this profile removes all the OpenGL API that was deprecated
         * prior to the 3.2 version of the specification. If the realization is
         * successful, this function will return `false`.
         * 
         * If the underlying OpenGL implementation does not support core profiles,
         * GDK will fall back to a pre-3.2 compatibility profile, and this function
         * will return `true`.
         * 
         * You can use the value returned by this function to decide which kind
         * of OpenGL API to use, or whether to do extension discovery, or what
         * kind of shader programs to load.
         * @returns `true` if the GL context is in legacy mode
         * @since 3.20
         */
        is_legacy(): boolean;

        /**
         * Makes the `context` the current one.
         * @since 3.16
         */
        make_current(): void;

        /**
         * Realizes the given {@link Gdk.GLContext}.
         * 
         * It is safe to call this function on a realized {@link Gdk.GLContext}.
         * @returns `true` if the context is realized
         * @since 3.16
         * @throws GLib.Error
         */
        realize(): boolean;

        /**
         * Sets whether the {@link Gdk.GLContext} should perform extra validations and
         * run time checking. This is useful during development, but has
         * additional overhead.
         * 
         * The {@link Gdk.GLContext} must not be realized or made current prior to
         * calling this function.
         * @param enabled whether to enable debugging in the context
         * @since 3.16
         */
        set_debug_enabled(enabled: boolean): void;

        /**
         * Sets whether the {@link Gdk.GLContext} should be forward compatible.
         * 
         * Forward compatibile contexts must not support OpenGL functionality that
         * has been marked as deprecated in the requested version; non-forward
         * compatible contexts, on the other hand, must support both deprecated and
         * non deprecated functionality.
         * 
         * The {@link Gdk.GLContext} must not be realized or made current prior to calling
         * this function.
         * @param compatible whether the context should be forward compatible
         * @since 3.16
         */
        set_forward_compatible(compatible: boolean): void;

        /**
         * Sets the major and minor version of OpenGL to request.
         * 
         * Setting `major` and `minor` to zero will use the default values.
         * 
         * The {@link Gdk.GLContext} must not be realized or made current prior to calling
         * this function.
         * @param major the major version to request
         * @param minor the minor version to request
         * @since 3.16
         */
        set_required_version(major: number, minor: number): void;

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
         * You should check the return value of `gdk_gl_context_get_use_es()` after
         * calling `gdk_gl_context_realize()` to decide whether to use the OpenGL or
         * OpenGL ES API, extensions, or shaders.
         * @param use_es whether the context should use OpenGL ES instead of OpenGL,   or -1 to allow auto-detection
         * @since 3.22
         */
        set_use_es(use_es: number): void;
    }


    namespace Keymap {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * The ::direction-changed signal gets emitted when the direction of
             * the keymap changes.
             * @signal
             * @since 2.0
             * @run-last
             */
            "direction-changed": () => void;
            /**
             * The ::keys-changed signal is emitted when the mapping represented by
             * `keymap` changes.
             * @signal
             * @since 2.2
             * @run-last
             */
            "keys-changed": () => void;
            /**
             * The ::state-changed signal is emitted when the state of the
             * keyboard changes, e.g when Caps Lock is turned on or off.
             * See `gdk_keymap_get_caps_lock_state()`.
             * @signal
             * @since 2.16
             * @run-last
             */
            "state-changed": () => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * A {@link Gdk.Keymap} defines the translation from keyboard state
     * (including a hardware key, a modifier mask, and active keyboard group)
     * to a keyval. This translation has two phases. The first phase is
     * to determine the effective keyboard group and level for the keyboard
     * state; the second phase is to look up the keycode/group/level triplet
     * in the keymap and see what keyval it corresponds to.
     * @gir-type Class
     */
    class Keymap extends GObject.Object {
        static $gtype: GObject.GType<Keymap>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Keymap.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Keymap.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof Keymap.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Keymap.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Keymap.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Keymap.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Keymap.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Keymap.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Returns the {@link Gdk.Keymap} attached to the default display.
         * @deprecated since 3.22: Use `gdk_keymap_get_for_display()` instead
         */
        static get_default(): Keymap;

        /**
         * Returns the {@link Gdk.Keymap} attached to `display`.
         * @param display the {@link Gdk.Display}.
         * @since 2.2
         */
        static get_for_display(display: Display): Keymap;

        // Methods
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
         * @param state pointer to the modifier mask to change
         * @since 2.20
         */
        add_virtual_modifiers(state: ModifierType): ModifierType;

        /**
         * Returns whether the Caps Lock modifer is locked.
         * @returns `true` if Caps Lock is on
         * @since 2.16
         */
        get_caps_lock_state(): boolean;

        /**
         * Returns the direction of effective layout of the keymap.
         * @returns {@link Pango.Direction.LTR} or {@link Pango.Direction.RTL}   if it can determine the direction. {@link Pango.Direction.NEUTRAL}   otherwise.
         */
        get_direction(): Pango.Direction;

        /**
         * Returns the keyvals bound to `hardware_keycode`.
         * The Nth {@link Gdk.KeymapKey} in `keys` is bound to the Nth
         * keyval in `keyvals`. Free the returned arrays with `g_free()`.
         * When a keycode is pressed by the user, the keyval from
         * this list of entries is selected by considering the effective
         * keyboard group and level. See `gdk_keymap_translate_keyboard_state()`.
         * @param hardware_keycode a keycode
         * @returns `true` if there were any entries
         */
        get_entries_for_keycode(hardware_keycode: number): [boolean, KeymapKey[] | null, number[] | null];

        /**
         * Obtains a list of keycode/group/level combinations that will
         * generate `keyval`. Groups and levels are two kinds of keyboard mode;
         * in general, the level determines whether the top or bottom symbol
         * on a key is used, and the group determines whether the left or
         * right symbol is used. On US keyboards, the shift key changes the
         * keyboard level, and there are no groups. A group switch key might
         * convert a keyboard between Hebrew to English modes, for example.
         * {@link Gdk.EventKey} contains a %group field that indicates the active
         * keyboard group. The level is computed from the modifier mask.
         * The returned array should be freed
         * with `g_free()`.
         * @param keyval a keyval, such as %GDK_KEY_a, %GDK_KEY_Up, %GDK_KEY_Return, etc.
         * @returns `true` if keys were found and returned
         */
        get_entries_for_keyval(keyval: number): [boolean, KeymapKey[]];

        /**
         * Returns the modifier mask the `keymap`’s windowing system backend
         * uses for a particular purpose.
         * 
         * Note that this function always returns real hardware modifiers, not
         * virtual ones (e.g. it will return #GDK_MOD1_MASK rather than
         * #GDK_META_MASK if the backend maps MOD1 to META), so there are use
         * cases where the return value of this function has to be transformed
         * by `gdk_keymap_add_virtual_modifiers()` in order to contain the
         * expected result.
         * @param intent the use case for the modifier mask
         * @returns the modifier mask used for `intent`.
         * @since 3.4
         */
        get_modifier_mask(intent: ModifierIntent): ModifierType;

        /**
         * Returns the current modifier state.
         * @returns the current modifier state.
         * @since 3.4
         */
        get_modifier_state(): number;

        /**
         * Returns whether the Num Lock modifer is locked.
         * @returns `true` if Num Lock is on
         * @since 3.0
         */
        get_num_lock_state(): boolean;

        /**
         * Returns whether the Scroll Lock modifer is locked.
         * @returns `true` if Scroll Lock is on
         * @since 3.18
         */
        get_scroll_lock_state(): boolean;

        /**
         * Determines if keyboard layouts for both right-to-left and left-to-right
         * languages are in use.
         * @returns `true` if there are layouts in both directions, `false` otherwise
         * @since 2.12
         */
        have_bidi_layouts(): boolean;

        /**
         * Looks up the keyval mapped to a keycode/group/level triplet.
         * If no keyval is bound to `key`, returns 0. For normal user input,
         * you want to use `gdk_keymap_translate_keyboard_state()` instead of
         * this function, since the effective group/level may not be
         * the same as the current keyboard state.
         * @param key a {@link Gdk.KeymapKey} with keycode, group, and level initialized
         * @returns a keyval, or 0 if none was mapped to the given `key`
         */
        lookup_key(key: KeymapKey): number;

        /**
         * Maps the virtual modifiers (i.e. Super, Hyper and Meta) which
         * are set in `state` to their non-virtual counterparts (i.e. Mod2,
         * Mod3,...) and set the corresponding bits in `state`.
         * 
         * This function is useful when matching key events against
         * accelerators.
         * @param state pointer to the modifier state to map
         * @returns `false` if two virtual modifiers were mapped to the     same non-virtual modifier. Note that `false` is also returned     if a virtual modifier is mapped to a non-virtual modifier that     was already set in `state`.
         * @since 2.20
         */
        map_virtual_modifiers(state: ModifierType): [boolean, ModifierType];

        /**
         * Translates the contents of a {@link Gdk.EventKey} into a keyval, effective
         * group, and level. Modifiers that affected the translation and
         * are thus unavailable for application use are returned in
         * `consumed_modifiers`.
         * See [Groups][key-group-explanation] for an explanation of
         * groups and levels. The `effective_group` is the group that was
         * actually used for the translation; some keys such as Enter are not
         * affected by the active keyboard group. The `level` is derived from
         * `state`. For convenience, {@link Gdk.EventKey} already contains the translated
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
         * of modifiers will be returned in `consumed_modifiers`; multi-modifier
         * combinations are returned only when actually found in `state`. When
         * you store accelerators, you should always store them with consumed
         * modifiers removed. Store `<Control>plus`, not `<Control><Shift>plus`,
         * @param hardware_keycode a keycode
         * @param state a modifier state
         * @param group active keyboard group
         * @returns `true` if there was a keyval bound to the keycode/state/group
         */
        translate_keyboard_state(hardware_keycode: number, state: ModifierType, group: number): [boolean, number, number, number, ModifierType | null];
    }


    namespace Monitor {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             * @run-first
             */
            invalidate: () => void;
            "notify::display": (pspec: GObject.ParamSpec) => void;
            "notify::geometry": (pspec: GObject.ParamSpec) => void;
            "notify::height-mm": (pspec: GObject.ParamSpec) => void;
            "notify::manufacturer": (pspec: GObject.ParamSpec) => void;
            "notify::model": (pspec: GObject.ParamSpec) => void;
            "notify::refresh-rate": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::subpixel-layout": (pspec: GObject.ParamSpec) => void;
            "notify::width-mm": (pspec: GObject.ParamSpec) => void;
            "notify::workarea": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            display: Display;
            geometry: Rectangle;
            height_mm: number;
            heightMm: number;
            manufacturer: string | null;
            model: string | null;
            refresh_rate: number;
            refreshRate: number;
            scale_factor: number;
            scaleFactor: number;
            subpixel_layout: SubpixelLayout;
            subpixelLayout: SubpixelLayout;
            width_mm: number;
            widthMm: number;
            workarea: Rectangle;
        }
    }

    /**
     * GdkMonitor objects represent the individual outputs that are
     * associated with a {@link Gdk.Display}. GdkDisplay has APIs to enumerate
     * monitors with `gdk_display_get_n_monitors()` and `gdk_display_get_monitor()`, and
     * to find particular monitors with `gdk_display_get_primary_monitor()` or
     * `gdk_display_get_monitor_at_window()`.
     * 
     * GdkMonitor was introduced in GTK+ 3.22 and supersedes earlier
     * APIs in GdkScreen to obtain monitor-related information.
     * @gir-type Class
     */
    class Monitor extends GObject.Object {
        static $gtype: GObject.GType<Monitor>;

        // Properties
        /**
         * @construct-only
         */
        get display(): Display;

        /**
         * @read-only
         */
        get geometry(): Rectangle;

        /**
         * @read-only
         * @default 0
         */
        get height_mm(): number;

        /**
         * @read-only
         * @default 0
         */
        get heightMm(): number;

        /**
         * @read-only
         * @default null
         */
        get manufacturer(): string | null;

        /**
         * @read-only
         * @default null
         */
        get model(): string | null;

        /**
         * @read-only
         * @default 0
         */
        get refresh_rate(): number;

        /**
         * @read-only
         * @default 0
         */
        get refreshRate(): number;

        /**
         * @read-only
         * @default 1
         */
        get scale_factor(): number;

        /**
         * @read-only
         * @default 1
         */
        get scaleFactor(): number;

        /**
         * @read-only
         * @default Gdk.SubpixelLayout.UNKNOWN
         */
        get subpixel_layout(): SubpixelLayout;

        /**
         * @read-only
         * @default Gdk.SubpixelLayout.UNKNOWN
         */
        get subpixelLayout(): SubpixelLayout;

        /**
         * @read-only
         * @default 0
         */
        get width_mm(): number;

        /**
         * @read-only
         * @default 0
         */
        get widthMm(): number;

        /**
         * @read-only
         */
        get workarea(): Rectangle;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Monitor.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Monitor.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof Monitor.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Monitor.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Monitor.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Monitor.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Monitor.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Monitor.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Gets the display that this monitor belongs to.
         * @returns the display
         * @since 3.22
         */
        get_display(): Display;

        /**
         * Retrieves the size and position of an individual monitor within the
         * display coordinate space. The returned geometry is in  ”application pixels”,
         * not in ”device pixels” (see `gdk_monitor_get_scale_factor()`).
         * @since 3.22
         */
        get_geometry(): Rectangle;

        /**
         * Gets the height in millimeters of the monitor.
         * @returns the physical height of the monitor
         * @since 3.22
         */
        get_height_mm(): number;

        /**
         * Gets the name or PNP ID of the monitor's manufacturer, if available.
         * 
         * Note that this value might also vary depending on actual
         * display backend.
         * 
         * PNP ID registry is located at https://uefi.org/pnp_id_list
         * @returns the name of the manufacturer, or `null`
         */
        get_manufacturer(): string | null;

        /**
         * Gets the a string identifying the monitor model, if available.
         * @returns the monitor model, or `null`
         */
        get_model(): string | null;

        /**
         * Gets the refresh rate of the monitor, if available.
         * 
         * The value is in milli-Hertz, so a refresh rate of 60Hz
         * is returned as 60000.
         * @returns the refresh rate in milli-Hertz, or 0
         * @since 3.22
         */
        get_refresh_rate(): number;

        /**
         * Gets the internal scale factor that maps from monitor coordinates
         * to the actual device pixels. On traditional systems this is 1, but
         * on very high density outputs this can be a higher value (often 2).
         * 
         * This can be used if you want to create pixel based data for a
         * particular monitor, but most of the time you’re drawing to a window
         * where it is better to use `gdk_window_get_scale_factor()` instead.
         * @returns the scale factor
         * @since 3.22
         */
        get_scale_factor(): number;

        /**
         * Gets information about the layout of red, green and blue
         * primaries for each pixel in this monitor, if available.
         * @returns the subpixel layout
         * @since 3.22
         */
        get_subpixel_layout(): SubpixelLayout;

        /**
         * Gets the width in millimeters of the monitor.
         * @returns the physical width of the monitor
         * @since 3.22
         */
        get_width_mm(): number;

        /**
         * Retrieves the size and position of the “work area” on a monitor
         * within the display coordinate space. The returned geometry is in
         * ”application pixels”, not in ”device pixels” (see
         * `gdk_monitor_get_scale_factor()`).
         * 
         * The work area should be considered when positioning menus and
         * similar popups, to avoid placing them below panels, docks or other
         * desktop components.
         * 
         * Note that not all backends may have a concept of workarea. This
         * function will return the monitor geometry if a workarea is not
         * available, or does not apply.
         * @since 3.22
         */
        get_workarea(): Rectangle;

        /**
         * Gets whether this monitor should be considered primary
         * (see `gdk_display_get_primary_monitor()`).
         * @returns `true` if `monitor` is primary
         * @since 3.22
         */
        is_primary(): boolean;
    }


    namespace Screen {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * The ::composited-changed signal is emitted when the composited
             * status of the screen changes
             * @signal
             * @since 2.10
             * @run-last
             */
            "composited-changed": () => void;
            /**
             * The ::monitors-changed signal is emitted when the number, size
             * or position of the monitors attached to the screen change.
             * 
             * Only for X11 and OS X for now. A future implementation for Win32
             * may be a possibility.
             * @signal
             * @since 2.14
             * @run-last
             */
            "monitors-changed": () => void;
            /**
             * The ::size-changed signal is emitted when the pixel width or
             * height of a screen changes.
             * @signal
             * @since 2.2
             * @run-last
             */
            "size-changed": () => void;
            "notify::font-options": (pspec: GObject.ParamSpec) => void;
            "notify::resolution": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            font_options: null;
            fontOptions: null;
            resolution: number;
        }
    }

    /**
     * {@link Gdk.Screen} objects are the GDK representation of the screen on
     * which windows can be displayed and on which the pointer moves.
     * X originally identified screens with physical screens, but
     * nowadays it is more common to have a single {@link Gdk.Screen} which
     * combines several physical monitors (see `gdk_screen_get_n_monitors()`).
     * 
     * GdkScreen is used throughout GDK and GTK+ to specify which screen
     * the top level windows are to be displayed on. it is also used to
     * query the screen specification and default settings such as
     * the default visual (gdk_screen_get_system_visual()), the dimensions
     * of the physical monitors (gdk_screen_get_monitor_geometry()), etc.
     * @gir-type Class
     */
    class Screen extends GObject.Object {
        static $gtype: GObject.GType<Screen>;

        // Properties
        get font_options(): null;
        set font_options(val: null);

        get fontOptions(): null;
        set fontOptions(val: null);

        /**
         * @default -1
         */
        get resolution(): number;
        set resolution(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Screen.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Screen.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof Screen.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Screen.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Screen.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Screen.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Screen.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Screen.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Gets the default screen for the default display. (See
         * gdk_display_get_default ()).
         * @since 2.2
         */
        static get_default(): Screen | null;

        /**
         * Gets the height of the default screen in pixels. The returned
         * size is in ”application pixels”, not in ”device pixels” (see
         * `gdk_screen_get_monitor_scale_factor()`).
         * @deprecated since 3.22: Use per-monitor information
         */
        static height(): number;

        /**
         * Returns the height of the default screen in millimeters.
         * Note that on many X servers this value will not be correct.
         * @deprecated since 3.22: Use per-monitor information
         */
        static height_mm(): number;

        /**
         * Gets the width of the default screen in pixels. The returned
         * size is in ”application pixels”, not in ”device pixels” (see
         * `gdk_screen_get_monitor_scale_factor()`).
         * @deprecated since 3.22: Use per-monitor information
         */
        static width(): number;

        /**
         * Returns the width of the default screen in millimeters.
         * Note that on many X servers this value will not be correct.
         * @deprecated since 3.22: Use per-monitor information
         */
        static width_mm(): number;

        // Methods
        /**
         * Returns the screen’s currently active window.
         * 
         * On X11, this is done by inspecting the _NET_ACTIVE_WINDOW property
         * on the root window, as described in the
         * [Extended Window Manager Hints](https://specifications.freedesktop.org/wm/latest/).
         * If there is no currently currently active
         * window, or the window manager does not support the
         * _NET_ACTIVE_WINDOW hint, this function returns `null`.
         * 
         * On other platforms, this function may return `null`, depending on whether
         * it is implementable on that platform.
         * 
         * The returned window should be unrefed using `g_object_unref()` when
         * no longer needed.
         * @returns the currently active window,   or `null`.
         * @since 2.10
         * @deprecated since 3.22
         */
        get_active_window(): Window | null;

        /**
         * Gets the display to which the `screen` belongs.
         * @returns the display to which `screen` belongs
         * @since 2.2
         */
        get_display(): Display;

        /**
         * Gets any options previously set with `gdk_screen_set_font_options()`.
         * @returns the current font options, or `null` if no  default font options have been set.
         * @since 2.10
         */
        get_font_options(): cairo.FontOptions | null;

        /**
         * Gets the height of `screen` in pixels. The returned size is in
         * ”application pixels”, not in ”device pixels” (see
         * `gdk_screen_get_monitor_scale_factor()`).
         * @returns the height of `screen` in pixels.
         * @since 2.2
         * @deprecated since 3.22: Use per-monitor information instead
         */
        get_height(): number;

        /**
         * Returns the height of `screen` in millimeters.
         * 
         * Note that this value is somewhat ill-defined when the screen
         * has multiple monitors of different resolution. It is recommended
         * to use the monitor dimensions instead.
         * @returns the heigth of `screen` in millimeters.
         * @since 2.2
         * @deprecated since 3.22: Use per-monitor information instead
         */
        get_height_mm(): number;

        /**
         * Returns the monitor number in which the point (`x`,`y`) is located.
         * @param x the x coordinate in the virtual screen.
         * @param y the y coordinate in the virtual screen.
         * @returns the monitor number in which the point (`x`,`y`) lies, or   a monitor close to (`x`,`y`) if the point is not in any monitor.
         * @since 2.2
         * @deprecated since 3.22: Use `gdk_display_get_monitor_at_point()` instead
         */
        get_monitor_at_point(x: number, y: number): number;

        /**
         * Returns the number of the monitor in which the largest area of the
         * bounding rectangle of `window` resides.
         * @param window a {@link Gdk.Window}
         * @returns the monitor number in which most of `window` is located,     or if `window` does not intersect any monitors, a monitor,     close to `window`.
         * @since 2.2
         * @deprecated since 3.22: Use `gdk_display_get_monitor_at_window()` instead
         */
        get_monitor_at_window(window: Window): number;

        /**
         * Retrieves the {@link Gdk.Rectangle} representing the size and position of
         * the individual monitor within the entire screen area. The returned
         * geometry is in ”application pixels”, not in ”device pixels” (see
         * `gdk_screen_get_monitor_scale_factor()`).
         * 
         * Monitor numbers start at 0. To obtain the number of monitors of
         * `screen`, use `gdk_screen_get_n_monitors()`.
         * 
         * Note that the size of the entire screen area can be retrieved via
         * `gdk_screen_get_width()` and `gdk_screen_get_height()`.
         * @param monitor_num the monitor number
         * @since 2.2
         * @deprecated since 3.22: Use `gdk_monitor_get_geometry()` instead
         */
        get_monitor_geometry(monitor_num: number): Rectangle | null;

        /**
         * Gets the height in millimeters of the specified monitor.
         * @param monitor_num number of the monitor, between 0 and gdk_screen_get_n_monitors (screen)
         * @returns the height of the monitor, or -1 if not available
         * @since 2.14
         * @deprecated since 3.22: Use `gdk_monitor_get_height_mm()` instead
         */
        get_monitor_height_mm(monitor_num: number): number;

        /**
         * Returns the output name of the specified monitor.
         * Usually something like VGA, DVI, or TV, not the actual
         * product name of the display device.
         * @param monitor_num number of the monitor, between 0 and gdk_screen_get_n_monitors (screen)
         * @returns a newly-allocated string containing the name   of the monitor, or `null` if the name cannot be determined
         * @since 2.14
         * @deprecated since 3.22: Use `gdk_monitor_get_model()` instead
         */
        get_monitor_plug_name(monitor_num: number): string | null;

        /**
         * Returns the internal scale factor that maps from monitor coordinates
         * to the actual device pixels. On traditional systems this is 1, but
         * on very high density outputs this can be a higher value (often 2).
         * 
         * This can be used if you want to create pixel based data for a
         * particular monitor, but most of the time you’re drawing to a window
         * where it is better to use `gdk_window_get_scale_factor()` instead.
         * @param monitor_num number of the monitor, between 0 and gdk_screen_get_n_monitors (screen)
         * @returns the scale factor
         * @since 3.10
         * @deprecated since 3.22: Use `gdk_monitor_get_scale_factor()` instead
         */
        get_monitor_scale_factor(monitor_num: number): number;

        /**
         * Gets the width in millimeters of the specified monitor, if available.
         * @param monitor_num number of the monitor, between 0 and gdk_screen_get_n_monitors (screen)
         * @returns the width of the monitor, or -1 if not available
         * @since 2.14
         * @deprecated since 3.22: Use `gdk_monitor_get_width_mm()` instead
         */
        get_monitor_width_mm(monitor_num: number): number;

        /**
         * Retrieves the {@link Gdk.Rectangle} representing the size and position of
         * the “work area” on a monitor within the entire screen area. The returned
         * geometry is in ”application pixels”, not in ”device pixels” (see
         * `gdk_screen_get_monitor_scale_factor()`).
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
         * `screen`, use `gdk_screen_get_n_monitors()`.
         * @param monitor_num the monitor number
         * @since 3.4
         * @deprecated since 3.22: Use `gdk_monitor_get_workarea()` instead
         */
        get_monitor_workarea(monitor_num: number): Rectangle | null;

        /**
         * Returns the number of monitors which `screen` consists of.
         * @returns number of monitors which `screen` consists of
         * @since 2.2
         * @deprecated since 3.22: Use `gdk_display_get_n_monitors()` instead
         */
        get_n_monitors(): number;

        /**
         * Gets the index of `screen` among the screens in the display
         * to which it belongs. (See `gdk_screen_get_display()`)
         * @returns the index
         * @since 2.2
         * @deprecated since 3.22
         */
        get_number(): number;

        /**
         * Gets the primary monitor for `screen`.  The primary monitor
         * is considered the monitor where the “main desktop” lives.
         * While normal application windows typically allow the window
         * manager to place the windows, specialized desktop applications
         * such as panels should place themselves on the primary monitor.
         * 
         * If no primary monitor is configured by the user, the return value
         * will be 0, defaulting to the first monitor.
         * @returns An integer index for the primary monitor, or 0 if none is configured.
         * @since 2.20
         * @deprecated since 3.22: Use `gdk_display_get_primary_monitor()` instead
         */
        get_primary_monitor(): number;

        /**
         * Gets the resolution for font handling on the screen; see
         * `gdk_screen_set_resolution()` for full details.
         * @returns the current resolution, or -1 if no resolution has been set.
         * @since 2.10
         */
        get_resolution(): number;

        /**
         * Gets a visual to use for creating windows with an alpha channel.
         * The windowing system on which GTK+ is running
         * may not support this capability, in which case `null` will
         * be returned. Even if a non-`null` value is returned, its
         * possible that the window’s alpha channel won’t be honored
         * when displaying the window on the screen: in particular, for
         * X an appropriate windowing manager and compositing manager
         * must be running to provide appropriate display.
         * 
         * This functionality is not implemented in the Windows backend.
         * 
         * For setting an overall opacity for a top-level window, see
         * `gdk_window_set_opacity()`.
         * @returns a visual to use for windows     with an alpha channel or `null` if the capability is not     available.
         * @since 2.8
         */
        get_rgba_visual(): Visual | null;

        /**
         * Gets the root window of `screen`.
         * @returns the root window
         * @since 2.2
         */
        get_root_window(): Window;

        /**
         * Retrieves a desktop-wide setting such as double-click time
         * for the {@link Gdk.Screen} `screen`.
         * 
         * FIXME needs a list of valid settings here, or a link to
         * more information.
         * @param name the name of the setting
         * @param value location to store the value of the setting
         * @returns `true` if the setting existed and a value was stored   in `value`, `false` otherwise.
         * @since 2.2
         */
        get_setting(name: string, value: GObject.Value | any): boolean;

        /**
         * Get the system’s default visual for `screen`.
         * This is the visual for the root window of the display.
         * The return value should not be freed.
         * @returns the system visual
         * @since 2.2
         */
        get_system_visual(): Visual;

        /**
         * Obtains a list of all toplevel windows known to GDK on the screen `screen`.
         * A toplevel window is a child of the root window (see
         * `gdk_get_default_root_window()`).
         * 
         * The returned list should be freed with `g_list_free()`, but
         * its elements need not be freed.
         * @returns list of toplevel windows, free with `g_list_free()`
         * @since 2.2
         */
        get_toplevel_windows(): Window[];

        /**
         * Gets the width of `screen` in pixels. The returned size is in
         * ”application pixels”, not in ”device pixels” (see
         * `gdk_screen_get_monitor_scale_factor()`).
         * @returns the width of `screen` in pixels.
         * @since 2.2
         * @deprecated since 3.22: Use per-monitor information instead
         */
        get_width(): number;

        /**
         * Gets the width of `screen` in millimeters.
         * 
         * Note that this value is somewhat ill-defined when the screen
         * has multiple monitors of different resolution. It is recommended
         * to use the monitor dimensions instead.
         * @returns the width of `screen` in millimeters.
         * @since 2.2
         * @deprecated since 3.22: Use per-monitor information instead
         */
        get_width_mm(): number;

        /**
         * Returns a {@link GLib.List} of `GdkWindows` representing the current
         * window stack.
         * 
         * On X11, this is done by inspecting the _NET_CLIENT_LIST_STACKING
         * property on the root window, as described in the
         * [Extended Window Manager Hints](https://specifications.freedesktop.org/wm/latest/).
         * If the window manager does not support the
         * _NET_CLIENT_LIST_STACKING hint, this function returns `null`.
         * 
         * On other platforms, this function may return `null`, depending on whether
         * it is implementable on that platform.
         * 
         * The returned list is newly allocated and owns references to the
         * windows it contains, so it should be freed using `g_list_free()` and
         * its windows unrefed using `g_object_unref()` when no longer needed.
         * @returns a     list of `GdkWindows` for the current window stack, or `null`.
         * @since 2.10
         */
        get_window_stack(): Window[] | null;

        /**
         * Returns whether windows with an RGBA visual can reasonably
         * be expected to have their alpha channel drawn correctly on
         * the screen.
         * 
         * On X11 this function returns whether a compositing manager is
         * compositing `screen`.
         * @returns Whether windows with RGBA visuals can reasonably be expected to have their alpha channels drawn correctly on the screen.
         * @since 2.10
         */
        is_composited(): boolean;

        /**
         * Lists the available visuals for the specified `screen`.
         * A visual describes a hardware image data format.
         * For example, a visual might support 24-bit color, or 8-bit color,
         * and might expect pixels to be in a certain format.
         * 
         * Call `g_list_free()` on the return value when you’re finished with it.
         * @returns a list of visuals; the list must be freed, but not its contents
         * @since 2.2
         */
        list_visuals(): Visual[];

        /**
         * Determines the name to pass to `gdk_display_open()` to get
         * a {@link Gdk.Display} with this screen as the default screen.
         * @returns a newly allocated string, free with `g_free()`
         * @since 2.2
         * @deprecated since 3.22
         */
        make_display_name(): string;

        /**
         * Sets the default font options for the screen. These
         * options will be set on any {@link Pango.Context}’s newly created
         * with `gdk_pango_context_get_for_screen()`. Changing the
         * default set of font options does not affect contexts that
         * have already been created.
         * @param options a {@link cairo.FontOptions}, or `null` to unset any   previously set default font options.
         * @since 2.10
         */
        set_font_options(options: cairo.FontOptions | null): void;

        /**
         * Sets the resolution for font handling on the screen. This is a
         * scale factor between points specified in a {@link Pango.FontDescription}
         * and cairo units. The default value is 96, meaning that a 10 point
         * font will be 13 units high. (10 * 96. / 72. = 13.3).
         * @param dpi the resolution in “dots per inch”. (Physical inches aren’t actually   involved; the terminology is conventional.)
         * @since 2.10
         */
        set_resolution(dpi: number): void;
    }


    namespace Seat {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * The ::device-added signal is emitted when a new input
             * device is related to this seat.
             * @signal
             * @since 3.20
             * @run-last
             */
            "device-added": (device: Device) => void;
            /**
             * The ::device-removed signal is emitted when an
             * input device is removed (e.g. unplugged).
             * @signal
             * @since 3.20
             * @run-last
             */
            "device-removed": (device: Device) => void;
            /**
             * The ::tool-added signal is emitted whenever a new tool
             * is made known to the seat. The tool may later be assigned
             * to a device (i.e. on proximity with a tablet). The device
             * will emit the {@link Gdk.Device.SignalSignatures.tool_changed | Gdk.Device::tool-changed} signal accordingly.
             * 
             * A same tool may be used by several devices.
             * @signal
             * @since 3.22
             * @run-last
             */
            "tool-added": (tool: DeviceTool) => void;
            /**
             * This signal is emitted whenever a tool is no longer known
             * to this `seat`.
             * @signal
             * @since 3.22
             * @run-last
             */
            "tool-removed": (tool: DeviceTool) => void;
            "notify::display": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            display: Display;
        }
    }

    /**
     * The {@link Gdk.Seat} object represents a collection of input devices
     * that belong to a user.
     * @gir-type Class
     */
    abstract class Seat extends GObject.Object {
        static $gtype: GObject.GType<Seat>;

        // Properties
        /**
         * {@link Gdk.Display} of this seat.
         * @since 3.20
         * @construct-only
         */
        get display(): Display;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Seat.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Seat.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof Seat.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Seat.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Seat.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Seat.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Seat.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Seat.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Returns the capabilities this {@link Gdk.Seat} currently has.
         * @returns the seat capabilities
         * @since 3.20
         */
        get_capabilities(): SeatCapabilities;

        /**
         * Returns the {@link Gdk.Display} this seat belongs to.
         * @returns a {@link Gdk.Display}. This object is owned by GTK+          and must not be freed.
         */
        get_display(): Display;

        /**
         * Returns the master device that routes keyboard events.
         * @returns a master {@link Gdk.Device} with keyboard          capabilities. This object is owned by GTK+ and must not be freed.
         * @since 3.20
         */
        get_keyboard(): Device | null;

        /**
         * Returns the master device that routes pointer events.
         * @returns a master {@link Gdk.Device} with pointer          capabilities. This object is owned by GTK+ and must not be freed.
         * @since 3.20
         */
        get_pointer(): Device | null;

        /**
         * Returns the slave devices that match the given capabilities.
         * @param capabilities capabilities to get devices for
         * @returns A list of `GdkDevices`.          The list must be freed with `g_list_free()`, the elements are owned          by GDK and must not be freed.
         * @since 3.20
         */
        get_slaves(capabilities: SeatCapabilities): Device[];

        /**
         * Grabs the seat so that all events corresponding to the given `capabilities`
         * are passed to this application until the seat is ungrabbed with `gdk_seat_ungrab()`,
         * or the window becomes hidden. This overrides any previous grab on the
         * seat by this client.
         * 
         * As a rule of thumb, if a grab is desired over {@link Gdk.SeatCapabilities.POINTER},
         * all other "pointing" capabilities (eg. {@link Gdk.SeatCapabilities.TOUCH}) should
         * be grabbed too, so the user is able to interact with all of those while
         * the grab holds, you should thus use {@link Gdk.SeatCapabilities.ALL_POINTING} most
         * commonly.
         * 
         * Grabs are used for operations which need complete control over the
         * events corresponding to the given capabilities. For example in GTK+ this
         * is used for Drag and Drop operations, popup menus and such.
         * 
         * Note that if the event mask of a {@link Gdk.Window} has selected both button press
         * and button release events, or touch begin and touch end, then a press event
         * will cause an automatic grab until the button is released, equivalent to a
         * grab on the window with `owner_events` set to `true`. This is done because most
         * applications expect to receive paired press and release events.
         * 
         * If you set up anything at the time you take the grab that needs to be
         * cleaned up when the grab ends, you should handle the {@link Gdk.EventGrabBroken}
         * events that are emitted when the grab ends unvoluntarily.
         * @param window the {@link Gdk.Window} which will own the grab
         * @param capabilities capabilities that will be grabbed
         * @param owner_events if `false` then all device events are reported with respect to                `window` and are only reported if selected by `event_mask`. If                `true` then pointer events for this application are reported                as normal, but pointer events outside this application are                reported with respect to `window` and only if selected by                `event_mask`. In either mode, unreported events are discarded.
         * @param cursor the cursor to display while the grab is active. If          this is `null` then the normal cursors are used for          `window` and its descendants, and the cursor for `window` is used          elsewhere.
         * @param event the event that is triggering the grab, or `null` if none         is available.
         * @param prepare_func function to                prepare the window to be grabbed, it can be `null` if `window` is                visible before this call.
         * @returns {@link Gdk.GrabStatus.SUCCESS} if the grab was successful.
         * @since 3.20
         */
        grab(window: Window, capabilities: SeatCapabilities, owner_events: boolean, cursor: Cursor | null, event: Event | null, prepare_func: SeatGrabPrepareFunc | null): GrabStatus;

        /**
         * Releases a grab added through `gdk_seat_grab()`.
         * @since 3.20
         */
        ungrab(): void;
    }


    namespace Visual {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * A {@link Gdk.Visual} contains information about
     * a particular visual.
     * @gir-type Class
     */
    class Visual extends GObject.Object {
        static $gtype: GObject.GType<Visual>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Visual.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Visual.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof Visual.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Visual.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Visual.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Visual.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Visual.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Visual.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Get the visual with the most available colors for the default
         * GDK screen. The return value should not be freed.
         * @deprecated since 3.22: Visual selection should be done using     `gdk_screen_get_system_visual()` and `gdk_screen_get_rgba_visual()`
         */
        static get_best(): Visual;

        /**
         * Get the best available depth for the default GDK screen.  “Best”
         * means “largest,” i.e. 32 preferred over 24 preferred over 8 bits
         * per pixel.
         * @deprecated since 3.22: Visual selection should be done using     `gdk_screen_get_system_visual()` and `gdk_screen_get_rgba_visual()`
         */
        static get_best_depth(): number;

        /**
         * Return the best available visual type for the default GDK screen.
         * @deprecated since 3.22: Visual selection should be done using     `gdk_screen_get_system_visual()` and `gdk_screen_get_rgba_visual()`
         */
        static get_best_type(): VisualType;

        /**
         * Combines `gdk_visual_get_best_with_depth()` and
         * `gdk_visual_get_best_with_type()`.
         * @param depth a bit depth
         * @param visual_type a visual type
         * @deprecated since 3.22: Visual selection should be done using     `gdk_screen_get_system_visual()` and `gdk_screen_get_rgba_visual()`
         */
        static get_best_with_both(depth: number, visual_type: VisualType): Visual | null;

        /**
         * Get the best visual with depth `depth` for the default GDK screen.
         * Color visuals and visuals with mutable colormaps are preferred
         * over grayscale or fixed-colormap visuals. The return value should
         * not be freed. `null` may be returned if no visual supports `depth`.
         * @param depth a bit depth
         * @deprecated since 3.22: Visual selection should be done using     `gdk_screen_get_system_visual()` and `gdk_screen_get_rgba_visual()`
         */
        static get_best_with_depth(depth: number): Visual;

        /**
         * Get the best visual of the given `visual_type` for the default GDK screen.
         * Visuals with higher color depths are considered better. The return value
         * should not be freed. `null` may be returned if no visual has type
         * `visual_type`.
         * @param visual_type a visual type
         * @deprecated since 3.22: Visual selection should be done using     `gdk_screen_get_system_visual()` and `gdk_screen_get_rgba_visual()`
         */
        static get_best_with_type(visual_type: VisualType): Visual;

        /**
         * Get the system’s default visual for the default GDK screen.
         * This is the visual for the root window of the display.
         * The return value should not be freed.
         * @deprecated since 3.22: Use gdk_screen_get_system_visual (gdk_screen_get_default ()).
         */
        static get_system(): Visual;

        // Methods
        /**
         * Returns the number of significant bits per red, green and blue value.
         * 
         * Not all GDK backend provide a meaningful value for this function.
         * @returns The number of significant bits per color value for `visual`.
         * @since 2.22
         * @deprecated since 3.22.: Use `gdk_visual_get_red_pixel_details()` and its variants to     learn about the pixel layout of TrueColor and DirectColor visuals
         */
        get_bits_per_rgb(): number;

        /**
         * Obtains values that are needed to calculate blue pixel values in TrueColor
         * and DirectColor. The “mask” is the significant bits within the pixel.
         * The “shift” is the number of bits left we must shift a primary for it
         * to be in position (according to the "mask"). Finally, "precision" refers
         * to how much precision the pixel value contains for a particular primary.
         * @since 2.22
         */
        get_blue_pixel_details(): [number, number, number];

        /**
         * Returns the byte order of this visual.
         * 
         * The information returned by this function is only relevant
         * when working with XImages, and not all backends return
         * meaningful information for this.
         * @returns A {@link Gdk.ByteOrder} stating the byte order of `visual`.
         * @since 2.22
         * @deprecated since 3.22: This information is not useful
         */
        get_byte_order(): ByteOrder;

        /**
         * Returns the size of a colormap for this visual.
         * 
         * You have to use platform-specific APIs to manipulate colormaps.
         * @returns The size of a colormap that is suitable for `visual`.
         * @since 2.22
         * @deprecated since 3.22: This information is not useful, since GDK does not     provide APIs to operate on colormaps.
         */
        get_colormap_size(): number;

        /**
         * Returns the bit depth of this visual.
         * @returns The bit depth of this visual.
         * @since 2.22
         */
        get_depth(): number;

        /**
         * Obtains values that are needed to calculate green pixel values in TrueColor
         * and DirectColor. The “mask” is the significant bits within the pixel.
         * The “shift” is the number of bits left we must shift a primary for it
         * to be in position (according to the "mask"). Finally, "precision" refers
         * to how much precision the pixel value contains for a particular primary.
         * @since 2.22
         */
        get_green_pixel_details(): [number, number, number];

        /**
         * Obtains values that are needed to calculate red pixel values in TrueColor
         * and DirectColor. The “mask” is the significant bits within the pixel.
         * The “shift” is the number of bits left we must shift a primary for it
         * to be in position (according to the "mask"). Finally, "precision" refers
         * to how much precision the pixel value contains for a particular primary.
         * @since 2.22
         */
        get_red_pixel_details(): [number, number, number];

        /**
         * Gets the screen to which this visual belongs
         * @returns the screen to which this visual belongs.
         * @since 2.2
         */
        get_screen(): Screen;

        /**
         * Returns the type of visual this is (PseudoColor, TrueColor, etc).
         * @returns A {@link Gdk.VisualType} stating the type of `visual`.
         * @since 2.22
         */
        get_visual_type(): VisualType;
    }


    namespace Window {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * The ::create-surface signal is emitted when an offscreen window
             * needs its surface (re)created, which happens either when the
             * window is first drawn to, or when the window is being
             * resized. The first signal handler that returns a non-`null`
             * surface will stop any further signal emission, and its surface
             * will be used.
             * 
             * Note that it is not possible to access the window's previous
             * surface from within any callback of this signal. Calling
             * `gdk_offscreen_window_get_surface()` will lead to a crash.
             * @signal
             * @since 3.0
             * @run-last
             */
            "create-surface": (width: number, height: number) => cairo.Surface;
            /**
             * The ::from-embedder signal is emitted to translate coordinates
             * in the embedder of an offscreen window to the offscreen window.
             * 
             * See also {@link Gdk.Window.SignalSignatures.to_embedder | Gdk.Window::to-embedder}.
             * @signal
             * @since 2.18
             * @run-last
             */
            "from-embedder": (embedder_x: number, embedder_y: number, offscreen_x: number, offscreen_y: number) => void;
            /**
             * Emitted when the position of `window` is finalized after being moved to a
             * destination rectangle.
             * 
             * `window` might be flipped over the destination rectangle in order to keep
             * it on-screen, in which case `flipped_x` and `flipped_y` will be set to `true`
             * accordingly.
             * 
             * `flipped_rect` is the ideal position of `window` after any possible
             * flipping, but before any possible sliding. `final_rect` is `flipped_rect`,
             * but possibly translated in the case that flipping is still ineffective in
             * keeping `window` on-screen.
             * @signal
             * @since 3.22
             * @run-first
             */
            "moved-to-rect": (flipped_rect: null, final_rect: null, flipped_x: boolean, flipped_y: boolean) => void;
            /**
             * The ::pick-embedded-child signal is emitted to find an embedded
             * child at the given position.
             * @signal
             * @since 2.18
             * @run-last
             */
            "pick-embedded-child": (x: number, y: number) => Window | null;
            /**
             * The ::to-embedder signal is emitted to translate coordinates
             * in an offscreen window to its embedder.
             * 
             * See also {@link Gdk.Window.SignalSignatures.from_embedder | Gdk.Window::from-embedder}.
             * @signal
             * @since 2.18
             * @run-last
             */
            "to-embedder": (offscreen_x: number, offscreen_y: number, embedder_x: number, embedder_y: number) => void;
            "notify::cursor": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            cursor: Cursor | null;
        }
    }

    /**
     * @gir-type Class
     */
    abstract class Window extends GObject.Object {
        static $gtype: GObject.GType<Window>;

        // Properties
        /**
         * The mouse pointer for a {@link Gdk.Window}. See `gdk_window_set_cursor()` and
         * `gdk_window_get_cursor()` for details.
         * @since 2.18
         */
        get cursor(): Cursor | null;
        set cursor(val: Cursor | null);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Window.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Window.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](parent: Window | null, attributes: WindowAttr, attributes_mask: WindowAttributesType): Window;

        // Signals
        /** @signal */
        connect<K extends keyof Window.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Window.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Window.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Window.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Window.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Window.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Obtains the window underneath the mouse pointer, returning the
         * location of that window in `win_x`, `win_y`. Returns `null` if the
         * window under the mouse pointer is not known to GDK (if the window
         * belongs to another application and a {@link Gdk.Window} hasn’t been created
         * for it with `gdk_window_foreign_new()`)
         * 
         * NOTE: For multihead-aware widgets or applications use
         * `gdk_display_get_window_at_pointer()` instead.
         * @deprecated since 3.0: Use `gdk_device_get_window_at_position()` instead.
         */
        static at_pointer(): [Window, number, number];

        /**
         * Constrains a desired width and height according to a
         * set of geometry hints (such as minimum and maximum size).
         * @param geometry a {@link Gdk.Geometry} structure
         * @param flags a mask indicating what portions of `geometry` are set
         * @param width desired width of window
         * @param height desired height of the window
         */
        static constrain_size(geometry: Geometry, flags: WindowHints, width: number, height: number): [number, number];

        /**
         * Calls `gdk_window_process_updates()` for all windows (see {@link Gdk.Window})
         * in the application.
         * @deprecated since 3.22
         */
        static process_all_updates(): void;

        /**
         * With update debugging enabled, calls to
         * `gdk_window_invalidate_region()` clear the invalidated region of the
         * screen to a noticeable color, and GDK pauses for a short time
         * before sending exposes to windows during
         * `gdk_window_process_updates()`.  The net effect is that you can see
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
         * usually more useful than calling `gdk_window_set_debug_updates()`
         * yourself, though you might want to use this function to enable
         * updates sometime after application startup time.
         * @param setting `true` to turn on update debugging
         * @deprecated since 3.22
         */
        static set_debug_updates(setting: boolean): void;

        // Virtual methods
        /**
         * @param width 
         * @param height 
         * @virtual
         */
        vfunc_create_surface(width: number, height: number): cairo.Surface;

        /**
         * @param embedder_x 
         * @param embedder_y 
         * @param offscreen_x 
         * @param offscreen_y 
         * @virtual
         */
        vfunc_from_embedder(embedder_x: number, embedder_y: number, offscreen_x: number, offscreen_y: number): void;

        /**
         * @param offscreen_x 
         * @param offscreen_y 
         * @param embedder_x 
         * @param embedder_y 
         * @virtual
         */
        vfunc_to_embedder(offscreen_x: number, offscreen_y: number, embedder_x: number, embedder_y: number): void;

        // Methods
        /**
         * Emits a short beep associated to `window` in the appropriate
         * display, if supported. Otherwise, emits a short beep on
         * the display just as `gdk_display_beep()`.
         * @since 2.12
         */
        beep(): void;

        /**
         * Indicates that you are beginning the process of redrawing `region`
         * on `window`, and provides you with a {@link Gdk.DrawingContext}.
         * 
         * If `window` is a top level {@link Gdk.Window}, backed by a native window
         * implementation, a backing store (offscreen buffer) large enough to
         * contain `region` will be created. The backing store will be initialized
         * with the background color or background surface for `window`. Then, all
         * drawing operations performed on `window` will be diverted to the
         * backing store. When you call `gdk_window_end_frame()`, the contents of
         * the backing store will be copied to `window`, making it visible
         * on screen. Only the part of `window` contained in `region` will be
         * modified; that is, drawing operations are clipped to `region`.
         * 
         * The net result of all this is to remove flicker, because the user
         * sees the finished product appear all at once when you call
         * `gdk_window_end_draw_frame()`. If you draw to `window` directly without
         * calling `gdk_window_begin_draw_frame()`, the user may see flicker
         * as individual drawing operations are performed in sequence.
         * 
         * When using GTK+, the widget system automatically places calls to
         * `gdk_window_begin_draw_frame()` and `gdk_window_end_draw_frame()` around
         * emissions of the `GtkWidget::draw` signal. That is, if you’re
         * drawing the contents of the widget yourself, you can assume that the
         * widget has a cleared background, is already set as the clip region,
         * and already has a backing store. Therefore in most cases, application
         * code in GTK does not need to call `gdk_window_begin_draw_frame()`
         * explicitly.
         * @param region a Cairo region
         * @returns a {@link Gdk.DrawingContext} context that should be   used to draw the contents of the window; the returned context is owned   by GDK.
         * @since 3.22
         */
        begin_draw_frame(region: cairo.Region): DrawingContext;

        /**
         * Begins a window move operation (for a toplevel window).
         * 
         * This function assumes that the drag is controlled by the
         * client pointer device, use `gdk_window_begin_move_drag_for_device()`
         * to begin a drag with a different device.
         * @param button the button being used to drag, or 0 for a keyboard-initiated drag
         * @param root_x root window X coordinate of mouse click that began the drag
         * @param root_y root window Y coordinate of mouse click that began the drag
         * @param timestamp timestamp of mouse click that began the drag
         */
        begin_move_drag(button: number, root_x: number, root_y: number, timestamp: number): void;

        /**
         * Begins a window move operation (for a toplevel window).
         * You might use this function to implement a “window move grip,” for
         * example. The function works best with window managers that support the
         * [Extended Window Manager Hints](https://specifications.freedesktop.org/wm/latest/)
         * but has a fallback implementation for other window managers.
         * @param device the device used for the operation
         * @param button the button being used to drag, or 0 for a keyboard-initiated drag
         * @param root_x root window X coordinate of mouse click that began the drag
         * @param root_y root window Y coordinate of mouse click that began the drag
         * @param timestamp timestamp of mouse click that began the drag
         * @since 3.4
         */
        begin_move_drag_for_device(device: Device, button: number, root_x: number, root_y: number, timestamp: number): void;

        /**
         * A convenience wrapper around `gdk_window_begin_paint_region()` which
         * creates a rectangular region for you. See
         * `gdk_window_begin_paint_region()` for details.
         * @param rectangle rectangle you intend to draw to
         * @deprecated since 3.22: Use `gdk_window_begin_draw_frame()` instead
         */
        begin_paint_rect(rectangle: Rectangle): void;

        /**
         * Indicates that you are beginning the process of redrawing `region`.
         * A backing store (offscreen buffer) large enough to contain `region`
         * will be created. The backing store will be initialized with the
         * background color or background surface for `window`. Then, all
         * drawing operations performed on `window` will be diverted to the
         * backing store.  When you call `gdk_window_end_paint()`, the backing
         * store will be copied to `window`, making it visible onscreen. Only
         * the part of `window` contained in `region` will be modified; that is,
         * drawing operations are clipped to `region`.
         * 
         * The net result of all this is to remove flicker, because the user
         * sees the finished product appear all at once when you call
         * `gdk_window_end_paint()`. If you draw to `window` directly without
         * calling `gdk_window_begin_paint_region()`, the user may see flicker
         * as individual drawing operations are performed in sequence.  The
         * clipping and background-initializing features of
         * `gdk_window_begin_paint_region()` are conveniences for the
         * programmer, so you can avoid doing that work yourself.
         * 
         * When using GTK+, the widget system automatically places calls to
         * `gdk_window_begin_paint_region()` and `gdk_window_end_paint()` around
         * emissions of the expose_event signal. That is, if you’re writing an
         * expose event handler, you can assume that the exposed area in
         * {@link Gdk.EventExpose} has already been cleared to the window background,
         * is already set as the clip region, and already has a backing store.
         * Therefore in most cases, application code need not call
         * `gdk_window_begin_paint_region()`. (You can disable the automatic
         * calls around expose events on a widget-by-widget basis by calling
         * `gtk_widget_set_double_buffered()`.)
         * 
         * If you call this function multiple times before calling the
         * matching `gdk_window_end_paint()`, the backing stores are pushed onto
         * a stack. `gdk_window_end_paint()` copies the topmost backing store
         * onscreen, subtracts the topmost region from all other regions in
         * the stack, and pops the stack. All drawing operations affect only
         * the topmost backing store in the stack. One matching call to
         * `gdk_window_end_paint()` is required for each call to
         * `gdk_window_begin_paint_region()`.
         * @param region region you intend to draw to
         * @deprecated since 3.22: Use `gdk_window_begin_draw_frame()` instead
         */
        begin_paint_region(region: cairo.Region): void;

        /**
         * Begins a window resize operation (for a toplevel window).
         * 
         * This function assumes that the drag is controlled by the
         * client pointer device, use `gdk_window_begin_resize_drag_for_device()`
         * to begin a drag with a different device.
         * @param edge the edge or corner from which the drag is started
         * @param button the button being used to drag, or 0 for a keyboard-initiated drag
         * @param root_x root window X coordinate of mouse click that began the drag
         * @param root_y root window Y coordinate of mouse click that began the drag
         * @param timestamp timestamp of mouse click that began the drag (use `gdk_event_get_time()`)
         */
        begin_resize_drag(edge: WindowEdge, button: number, root_x: number, root_y: number, timestamp: number): void;

        /**
         * Begins a window resize operation (for a toplevel window).
         * You might use this function to implement a “window resize grip,” for
         * example; in fact `GtkStatusbar` uses it. The function works best
         * with window managers that support the
         * [Extended Window Manager Hints](https://specifications.freedesktop.org/wm/latest/)
         * but has a fallback implementation for other window managers.
         * @param edge the edge or corner from which the drag is started
         * @param device the device used for the operation
         * @param button the button being used to drag, or 0 for a keyboard-initiated drag
         * @param root_x root window X coordinate of mouse click that began the drag
         * @param root_y root window Y coordinate of mouse click that began the drag
         * @param timestamp timestamp of mouse click that began the drag (use `gdk_event_get_time()`)
         * @since 3.4
         */
        begin_resize_drag_for_device(edge: WindowEdge, device: Device, button: number, root_x: number, root_y: number, timestamp: number): void;

        /**
         * Does nothing, present only for compatiblity.
         * @since 2.6
         * @deprecated since 3.8: this function is no longer needed
         */
        configure_finished(): void;

        /**
         * Transforms window coordinates from a parent window to a child
         * window, where the parent window is the normal parent as returned by
         * `gdk_window_get_parent()` for normal windows, and the window's
         * embedder as returned by `gdk_offscreen_window_get_embedder()` for
         * offscreen windows.
         * 
         * For normal windows, calling this function is equivalent to subtracting
         * the return values of `gdk_window_get_position()` from the parent coordinates.
         * For offscreen windows however (which can be arbitrarily transformed),
         * this function calls the GdkWindow::from-embedder: signal to translate
         * the coordinates.
         * 
         * You should always use this function when writing generic code that
         * walks down a window hierarchy.
         * 
         * See also: `gdk_window_coords_to_parent()`
         * @param parent_x X coordinate in parent’s coordinate system
         * @param parent_y Y coordinate in parent’s coordinate system
         * @since 2.22
         */
        coords_from_parent(parent_x: number, parent_y: number): [number, number];

        /**
         * Transforms window coordinates from a child window to its parent
         * window, where the parent window is the normal parent as returned by
         * `gdk_window_get_parent()` for normal windows, and the window's
         * embedder as returned by `gdk_offscreen_window_get_embedder()` for
         * offscreen windows.
         * 
         * For normal windows, calling this function is equivalent to adding
         * the return values of `gdk_window_get_position()` to the child coordinates.
         * For offscreen windows however (which can be arbitrarily transformed),
         * this function calls the GdkWindow::to-embedder: signal to translate
         * the coordinates.
         * 
         * You should always use this function when writing generic code that
         * walks up a window hierarchy.
         * 
         * See also: `gdk_window_coords_from_parent()`
         * @param x X coordinate in child’s coordinate system
         * @param y Y coordinate in child’s coordinate system
         * @since 2.22
         */
        coords_to_parent(x: number, y: number): [number, number];

        /**
         * Creates a new {@link Gdk.GLContext} matching the
         * framebuffer format to the visual of the {@link Gdk.Window}. The context
         * is disconnected from any particular window or surface.
         * 
         * If the creation of the {@link Gdk.GLContext} failed, `error` will be set.
         * 
         * Before using the returned {@link Gdk.GLContext}, you will need to
         * call `gdk_gl_context_make_current()` or `gdk_gl_context_realize()`.
         * @returns the newly created {@link Gdk.GLContext}, or `null` on error
         * @since 3.16
         * @throws GLib.Error
         */
        create_gl_context(): GLContext;

        /**
         * Create a new image surface that is efficient to draw on the
         * given `window`.
         * 
         * Initially the surface contents are all 0 (transparent if contents
         * have transparency, black otherwise.)
         * 
         * The `width` and `height` of the new surface are not affected by
         * the scaling factor of the `window`, or by the `scale` argument; they
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
         * Note that unlike `cairo_surface_create_similar_image()`, the new
         * surface's device scale is set to `scale`, or to the scale factor of
         * `window` if `scale` is 0.
         * @param format the format for the new surface
         * @param width width of the new surface
         * @param height height of the new surface
         * @param scale the scale of the new surface, or 0 to use same as `window`
         * @returns a pointer to the newly allocated surface. The caller owns the surface and should call `cairo_surface_destroy()` when done with it. This function always returns a valid pointer, but it will return a pointer to a “nil” surface if `other` is already in an error state or any other error occurs.
         * @since 3.10
         */
        create_similar_image_surface(format: cairo.Format, width: number, height: number, scale: number): cairo.Surface;

        /**
         * Create a new surface that is as compatible as possible with the
         * given `window`. For example the new surface will have the same
         * fallback resolution and font options as `window`. Generally, the new
         * surface will also use the same backend as `window`, unless that is
         * not possible for some reason. The type of the returned surface may
         * be examined with `cairo_surface_get_type()`.
         * 
         * Initially the surface contents are all 0 (transparent if contents
         * have transparency, black otherwise.)
         * @param content the content for the new surface
         * @param width width of the new surface
         * @param height height of the new surface
         * @returns a pointer to the newly allocated surface. The caller owns the surface and should call `cairo_surface_destroy()` when done with it. This function always returns a valid pointer, but it will return a pointer to a “nil” surface if `other` is already in an error state or any other error occurs.
         * @since 2.22
         */
        create_similar_surface(content: cairo.Content, width: number, height: number): cairo.Surface;

        /**
         * Attempt to deiconify (unminimize) `window`. On X11 the window manager may
         * choose to ignore the request to deiconify. When using GTK+,
         * use `gtk_window_deiconify()` instead of the {@link Gdk.Window} variant. Or better yet,
         * you probably want to use `gtk_window_present_with_time()`, which raises the window, focuses it,
         * unminimizes it, and puts it on the current desktop.
         */
        deiconify(): void;

        /**
         * Destroys the window system resources associated with `window` and decrements `window`'s
         * reference count. The window system resources for all children of `window` are also
         * destroyed, but the children’s reference counts are not decremented.
         * 
         * Note that a window will not be destroyed automatically when its reference count
         * reaches zero. You must call this function yourself before that happens.
         */
        destroy(): void;

        destroy_notify(): void;

        /**
         * Does nothing, present only for compatiblity.
         * @since 2.6
         * @deprecated since 3.8: this function is no longer needed
         */
        enable_synchronized_configure(): void;

        /**
         * Indicates that the drawing of the contents of `window` started with
         * `gdk_window_begin_frame()` has been completed.
         * 
         * This function will take care of destroying the {@link Gdk.DrawingContext}.
         * 
         * It is an error to call this function without a matching
         * `gdk_window_begin_frame()` first.
         * @param context the {@link Gdk.DrawingContext} created by `gdk_window_begin_draw_frame()`
         * @since 3.22
         */
        end_draw_frame(context: DrawingContext): void;

        /**
         * Indicates that the backing store created by the most recent call
         * to `gdk_window_begin_paint_region()` should be copied onscreen and
         * deleted, leaving the next-most-recent backing store or no backing
         * store at all as the active paint region. See
         * `gdk_window_begin_paint_region()` for full details.
         * 
         * It is an error to call this function without a matching
         * `gdk_window_begin_paint_region()` first.
         */
        end_paint(): void;

        /**
         * Tries to ensure that there is a window-system native window for this
         * GdkWindow. This may fail in some situations, returning `false`.
         * 
         * Offscreen window and children of them can never have native windows.
         * 
         * Some backends may not support native child windows.
         * @returns `true` if the window has a native window, `false` otherwise
         * @since 2.18
         */
        ensure_native(): boolean;

        /**
         * This function does nothing.
         * @since 2.18
         * @deprecated since 3.14
         */
        flush(): void;

        /**
         * Sets keyboard focus to `window`. In most cases, `gtk_window_present_with_time()`
         * should be used on a `GtkWindow`, rather than calling this function.
         * @param timestamp timestamp of the event triggering the window focus
         */
        focus(timestamp: number): void;

        /**
         * Temporarily freezes a window and all its descendants such that it won't
         * receive expose events.  The window will begin receiving expose events
         * again when `gdk_window_thaw_toplevel_updates_libgtk_only()` is called. If
         * `gdk_window_freeze_toplevel_updates_libgtk_only()`
         * has been called more than once,
         * `gdk_window_thaw_toplevel_updates_libgtk_only()` must be called
         * an equal number of times to begin processing exposes.
         * 
         * This function is not part of the GDK public API and is only
         * for use by GTK+.
         * @deprecated since 3.16: This symbol was never meant to be used outside of GTK+
         */
        freeze_toplevel_updates_libgtk_only(): void;

        /**
         * Temporarily freezes a window such that it won’t receive expose
         * events.  The window will begin receiving expose events again when
         * `gdk_window_thaw_updates()` is called. If `gdk_window_freeze_updates()`
         * has been called more than once, `gdk_window_thaw_updates()` must be called
         * an equal number of times to begin processing exposes.
         */
        freeze_updates(): void;

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
         * @since 2.2
         */
        fullscreen(): void;

        /**
         * Moves the window into fullscreen mode on the given monitor. This means
         * the window covers the entire screen and is above any panels or task bars.
         * 
         * If the window was already fullscreen, then this function does nothing.
         * @param monitor Which monitor to display fullscreen on.
         */
        fullscreen_on_monitor(monitor: number): void;

        /**
         * This function informs GDK that the geometry of an embedded
         * offscreen window has changed. This is necessary for GDK to keep
         * track of which offscreen window the pointer is in.
         * @since 2.18
         */
        geometry_changed(): void;

        /**
         * Determines whether or not the desktop environment shuld be hinted that
         * the window does not want to receive input focus.
         * @returns whether or not the window should receive input focus.
         * @since 2.22
         */
        get_accept_focus(): boolean;

        /**
         * Gets the pattern used to clear the background on `window`.
         * @returns The pattern to use for the background or `null` if there is no background.
         * @since 2.22
         * @deprecated since 3.22: Don't use this function
         */
        get_background_pattern(): cairo.Pattern | null;

        /**
         * Gets the list of children of `window` known to GDK.
         * This function only returns children created via GDK,
         * so for example it’s useless when used with the root window;
         * it only returns windows an application created itself.
         * 
         * The returned list must be freed, but the elements in the
         * list need not be.
         * @returns list of child windows inside `window`
         */
        get_children(): Window[];

        /**
         * Gets the list of children of `window` known to GDK with a
         * particular `user_data` set on it.
         * 
         * The returned list must be freed, but the elements in the
         * list need not be.
         * 
         * The list is returned in (relative) stacking order, i.e. the
         * lowest window is first.
         * @param user_data user data to look for
         * @returns list of child windows inside `window`
         * @since 3.10
         */
        get_children_with_user_data(user_data: null): Window[];

        /**
         * Computes the region of a window that potentially can be written
         * to by drawing primitives. This region may not take into account
         * other factors such as if the window is obscured by other windows,
         * but no area outside of this region will be affected by drawing
         * primitives.
         * @returns a {@link cairo.Region}. This must be freed with `cairo_region_destroy()`          when you are done.
         */
        get_clip_region(): cairo.Region;

        /**
         * Determines whether `window` is composited.
         * 
         * See `gdk_window_set_composited()`.
         * @returns `true` if the window is composited.
         * @since 2.22
         * @deprecated since 3.16: Compositing is an outdated technology that   only ever worked on X11.
         */
        get_composited(): boolean;

        /**
         * Retrieves a {@link Gdk.Cursor} pointer for the cursor currently set on the
         * specified {@link Gdk.Window}, or `null`.  If the return value is `null` then
         * there is no custom cursor set on the specified window, and it is
         * using the cursor for its parent window.
         * @returns a {@link Gdk.Cursor}, or `null`. The   returned object is owned by the {@link Gdk.Window} and should not be   unreferenced directly. Use `gdk_window_set_cursor()` to unset the   cursor of the window
         * @since 2.18
         */
        get_cursor(): Cursor | null;

        /**
         * Returns the decorations set on the GdkWindow with
         * `gdk_window_set_decorations()`.
         * @returns `true` if the window has decorations set, `false` otherwise.
         */
        get_decorations(): [boolean, WMDecoration];

        /**
         * Retrieves a {@link Gdk.Cursor} pointer for the `device` currently set on the
         * specified {@link Gdk.Window}, or `null`.  If the return value is `null` then
         * there is no custom cursor set on the specified window, and it is
         * using the cursor for its parent window.
         * @param device a master, pointer {@link Gdk.Device}.
         * @returns a {@link Gdk.Cursor}, or `null`. The   returned object is owned by the {@link Gdk.Window} and should not be   unreferenced directly. Use `gdk_window_set_cursor()` to unset the   cursor of the window
         * @since 3.0
         */
        get_device_cursor(device: Device): Cursor | null;

        /**
         * Returns the event mask for `window` corresponding to an specific device.
         * @param device a {@link Gdk.Device}.
         * @returns device event mask for `window`
         * @since 3.0
         */
        get_device_events(device: Device): EventMask;

        /**
         * Obtains the current device position and modifier state.
         * The position is given in coordinates relative to the upper left
         * corner of `window`.
         * 
         * Use `gdk_window_get_device_position_double()` if you need subpixel precision.
         * @param device pointer {@link Gdk.Device} to query to.
         * @returns The window underneath `device` (as with `gdk_device_get_window_at_position()`), or `null` if the window is not known to GDK.
         * @since 3.0
         */
        get_device_position(device: Device): [Window | null, number, number, ModifierType | null];

        /**
         * Obtains the current device position in doubles and modifier state.
         * The position is given in coordinates relative to the upper left
         * corner of `window`.
         * @param device pointer {@link Gdk.Device} to query to.
         * @returns The window underneath `device` (as with `gdk_device_get_window_at_position()`), or `null` if the window is not known to GDK.
         * @since 3.10
         */
        get_device_position_double(device: Device): [Window | null, number, number, ModifierType | null];

        /**
         * Gets the {@link Gdk.Display} associated with a {@link Gdk.Window}.
         * @returns the {@link Gdk.Display} associated with `window`
         * @since 2.24
         */
        get_display(): Display;

        /**
         * Finds out the DND protocol supported by a window.
         * @returns the supported DND protocol.
         * @since 3.0
         */
        get_drag_protocol(): [DragProtocol, Window | null];

        /**
         * Obtains the parent of `window`, as known to GDK. Works like
         * `gdk_window_get_parent()` for normal windows, but returns the
         * window’s embedder for offscreen windows.
         * 
         * See also: `gdk_offscreen_window_get_embedder()`
         * @returns effective parent of `window`
         * @since 2.22
         */
        get_effective_parent(): Window;

        /**
         * Gets the toplevel window that’s an ancestor of `window`.
         * 
         * Works like `gdk_window_get_toplevel()`, but treats an offscreen window's
         * embedder as its parent, using `gdk_window_get_effective_parent()`.
         * 
         * See also: `gdk_offscreen_window_get_embedder()`
         * @returns the effective toplevel window containing `window`
         * @since 2.22
         */
        get_effective_toplevel(): Window;

        /**
         * Get the current event compression setting for this window.
         * @returns `true` if motion events will be compressed
         * @since 3.12
         */
        get_event_compression(): boolean;

        /**
         * Gets the event mask for `window` for all master input devices. See
         * `gdk_window_set_events()`.
         * @returns event mask for `window`
         */
        get_events(): EventMask;

        /**
         * Determines whether or not the desktop environment should be hinted that the
         * window does not want to receive input focus when it is mapped.
         * @returns whether or not the window wants to receive input focus when it is mapped.
         * @since 2.22
         */
        get_focus_on_map(): boolean;

        /**
         * Gets the frame clock for the window. The frame clock for a window
         * never changes unless the window is reparented to a new toplevel
         * window.
         * @returns the frame clock
         * @since 3.8
         */
        get_frame_clock(): FrameClock;

        /**
         * Obtains the bounding box of the window, including window manager
         * titlebar/borders if any. The frame position is given in root window
         * coordinates. To get the position of the window itself (rather than
         * the frame) in root window coordinates, use `gdk_window_get_origin()`.
         */
        get_frame_extents(): Rectangle;

        /**
         * Obtains the {@link Gdk.FullscreenMode} of the `window`.
         * @returns The {@link Gdk.FullscreenMode} applied to the window when fullscreen.
         * @since 3.8
         */
        get_fullscreen_mode(): FullscreenMode;

        /**
         * Any of the return location arguments to this function may be `null`,
         * if you aren’t interested in getting the value of that field.
         * 
         * The X and Y coordinates returned are relative to the parent window
         * of `window`, which for toplevels usually means relative to the
         * window decorations (titlebar, etc.) rather than relative to the
         * root window (screen-size background window).
         * 
         * On the X11 platform, the geometry is obtained from the X server,
         * so reflects the latest position of `window`; this may be out-of-sync
         * with the position of `window` delivered in the most-recently-processed
         * {@link Gdk.EventConfigure}. `gdk_window_get_position()` in contrast gets the
         * position from the most recent configure event.
         * 
         * Note: If `window` is not a toplevel, it is much better
         * to call `gdk_window_get_position()`, `gdk_window_get_width()` and
         * `gdk_window_get_height()` instead, because it avoids the roundtrip to
         * the X server and because these functions support the full 32-bit
         * coordinate space, whereas `gdk_window_get_geometry()` is restricted to
         * the 16-bit coordinates of X11.
         */
        get_geometry(): [number, number, number, number];

        /**
         * Returns the group leader window for `window`. See `gdk_window_set_group()`.
         * @returns the group leader window for `window`
         * @since 2.4
         */
        get_group(): Window;

        /**
         * Returns the height of the given `window`.
         * 
         * On the X11 platform the returned size is the size reported in the
         * most-recently-processed configure event, rather than the current
         * size on the X server.
         * @returns The height of `window`
         * @since 2.24
         */
        get_height(): number;

        /**
         * Determines whether or not the window manager is hinted that `window`
         * has modal behaviour.
         * @returns whether or not the window has the modal hint set.
         * @since 2.22
         */
        get_modal_hint(): boolean;

        /**
         * Obtains the position of a window in root window coordinates.
         * (Compare with `gdk_window_get_position()` and
         * `gdk_window_get_geometry()` which return the position of a window
         * relative to its parent window.)
         * @returns not meaningful, ignore
         */
        get_origin(): [number, number, number];

        /**
         * Obtains the parent of `window`, as known to GDK. Does not query the
         * X server; thus this returns the parent as passed to `gdk_window_new()`,
         * not the actual parent. This should never matter unless you’re using
         * Xlib calls mixed with GDK calls on the X11 platform. It may also
         * matter for toplevel windows, because the window manager may choose
         * to reparent them.
         * 
         * Note that you should use `gdk_window_get_effective_parent()` when
         * writing generic code that walks up a window hierarchy, because
         * `gdk_window_get_parent()` will most likely not do what you expect if
         * there are offscreen windows in the hierarchy.
         * @returns parent of `window`
         */
        get_parent(): Window;

        /**
         * Returns whether input to the window is passed through to the window
         * below.
         * 
         * See `gdk_window_set_pass_through()` for details
         * @since 3.18
         */
        get_pass_through(): boolean;

        /**
         * Obtains the current pointer position and modifier state.
         * The position is given in coordinates relative to the upper left
         * corner of `window`.
         * @returns the window containing the pointer (as with `gdk_window_at_pointer()`), or `null` if the window containing the pointer isn’t known to GDK
         * @deprecated since 3.0: Use `gdk_window_get_device_position()` instead.
         */
        get_pointer(): [Window | null, number, number, ModifierType | null];

        /**
         * Obtains the position of the window as reported in the
         * most-recently-processed {@link Gdk.EventConfigure}. Contrast with
         * `gdk_window_get_geometry()` which queries the X server for the
         * current window position, regardless of which events have been
         * received or processed.
         * 
         * The position coordinates are relative to the window’s parent window.
         */
        get_position(): [number, number];

        /**
         * Obtains the position of a window position in root
         * window coordinates. This is similar to
         * `gdk_window_get_origin()` but allows you to pass
         * in any position in the window, not just the origin.
         * @param x X coordinate in window
         * @param y Y coordinate in window
         * @since 2.18
         */
        get_root_coords(x: number, y: number): [number, number];

        /**
         * Obtains the top-left corner of the window manager frame in root
         * window coordinates.
         */
        get_root_origin(): [number, number];

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
         * @returns the scale factor
         * @since 3.10
         */
        get_scale_factor(): number;

        /**
         * Gets the {@link Gdk.Screen} associated with a {@link Gdk.Window}.
         * @returns the {@link Gdk.Screen} associated with `window`
         * @since 2.24
         */
        get_screen(): Screen;

        /**
         * Returns the event mask for `window` corresponding to the device class specified
         * by `source`.
         * @param source a {@link Gdk.InputSource} to define the source class.
         * @returns source event mask for `window`
         */
        get_source_events(source: InputSource): EventMask;

        /**
         * Gets the bitwise OR of the currently active window state flags,
         * from the {@link Gdk.WindowState} enumeration.
         * @returns window state bitfield
         */
        get_state(): WindowState;

        /**
         * Returns `true` if the window is aware of the existence of multiple
         * devices.
         * @returns `true` if the window handles multidevice features.
         * @since 3.0
         */
        get_support_multidevice(): boolean;

        /**
         * Gets the toplevel window that’s an ancestor of `window`.
         * 
         * Any window type but {@link Gdk.WindowType.CHILD} is considered a
         * toplevel window, as is a {@link Gdk.WindowType.CHILD} window that
         * has a root window as parent.
         * 
         * Note that you should use `gdk_window_get_effective_toplevel()` when
         * you want to get to a window’s toplevel as seen on screen, because
         * `gdk_window_get_toplevel()` will most likely not do what you expect
         * if there are offscreen windows in the hierarchy.
         * @returns the toplevel window containing `window`
         */
        get_toplevel(): Window;

        /**
         * This function returns the type hint set for a window.
         * @returns The type hint set for `window`
         * @since 2.10
         */
        get_type_hint(): WindowTypeHint;

        /**
         * Transfers ownership of the update area from `window` to the caller
         * of the function. That is, after calling this function, `window` will
         * no longer have an invalid/dirty region; the update area is removed
         * from `window` and handed to you. If a window has no update area,
         * `gdk_window_get_update_area()` returns `null`. You are responsible for
         * calling `cairo_region_destroy()` on the returned region if it’s non-`null`.
         * @returns the update area for `window`
         */
        get_update_area(): cairo.Region;

        /**
         * Retrieves the user data for `window`, which is normally the widget
         * that `window` belongs to. See `gdk_window_set_user_data()`.
         */
        get_user_data(): null;

        /**
         * Computes the region of the `window` that is potentially visible.
         * This does not necessarily take into account if the window is
         * obscured by other windows, but no area outside of this region
         * is visible.
         * @returns a {@link cairo.Region}. This must be freed with `cairo_region_destroy()`          when you are done.
         */
        get_visible_region(): cairo.Region;

        /**
         * Gets the {@link Gdk.Visual} describing the pixel format of `window`.
         * @returns a {@link Gdk.Visual}
         * @since 2.24
         */
        get_visual(): Visual;

        /**
         * Returns the width of the given `window`.
         * 
         * On the X11 platform the returned size is the size reported in the
         * most-recently-processed configure event, rather than the current
         * size on the X server.
         * @returns The width of `window`
         * @since 2.24
         */
        get_width(): number;

        /**
         * Gets the type of the window. See {@link Gdk.WindowType}.
         * @returns type of window
         */
        get_window_type(): WindowType;

        /**
         * Checks whether the window has a native window or not. Note that
         * you can use `gdk_window_ensure_native()` if a native window is needed.
         * @returns `true` if the `window` has a native window, `false` otherwise.
         * @since 2.22
         */
        has_native(): boolean;

        /**
         * For toplevel windows, withdraws them, so they will no longer be
         * known to the window manager; for all windows, unmaps them, so
         * they won’t be displayed. Normally done automatically as
         * part of `gtk_widget_hide()`.
         */
        hide(): void;

        /**
         * Asks to iconify (minimize) `window`. The window manager may choose
         * to ignore the request, but normally will honor it. Using
         * `gtk_window_iconify()` is preferred, if you have a `GtkWindow` widget.
         * 
         * This function only makes sense when `window` is a toplevel window.
         */
        iconify(): void;

        /**
         * Like `gdk_window_shape_combine_region()`, but the shape applies
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
         * @param shape_region region of window to be non-transparent
         * @param offset_x X position of `shape_region` in `window` coordinates
         * @param offset_y Y position of `shape_region` in `window` coordinates
         * @since 2.10
         */
        input_shape_combine_region(shape_region: cairo.Region, offset_x: number, offset_y: number): void;

        /**
         * Adds `region` to the update area for `window`. The update area is the
         * region that needs to be redrawn, or “dirty region.” The call
         * `gdk_window_process_updates()` sends one or more expose events to the
         * window, which together cover the entire update area. An
         * application would normally redraw the contents of `window` in
         * response to those expose events.
         * 
         * GDK will call `gdk_window_process_all_updates()` on your behalf
         * whenever your program returns to the main loop and becomes idle, so
         * normally there’s no need to do that manually, you just need to
         * invalidate regions that you know should be redrawn.
         * 
         * The `child_func` parameter controls whether the region of
         * each child window that intersects `region` will also be invalidated.
         * Only children for which `child_func` returns `TRUE` will have the area
         * invalidated.
         * @param region a {@link cairo.Region}
         * @param child_func function to use to decide if to     recurse to a child, `null` means never recurse.
         */
        invalidate_maybe_recurse(region: cairo.Region, child_func: WindowChildFunc | null): void;

        /**
         * A convenience wrapper around `gdk_window_invalidate_region()` which
         * invalidates a rectangular region. See
         * `gdk_window_invalidate_region()` for details.
         * @param rect rectangle to invalidate or `null` to invalidate the whole      window
         * @param invalidate_children whether to also invalidate child windows
         */
        invalidate_rect(rect: Rectangle | null, invalidate_children: boolean): void;

        /**
         * Adds `region` to the update area for `window`. The update area is the
         * region that needs to be redrawn, or “dirty region.” The call
         * `gdk_window_process_updates()` sends one or more expose events to the
         * window, which together cover the entire update area. An
         * application would normally redraw the contents of `window` in
         * response to those expose events.
         * 
         * GDK will call `gdk_window_process_all_updates()` on your behalf
         * whenever your program returns to the main loop and becomes idle, so
         * normally there’s no need to do that manually, you just need to
         * invalidate regions that you know should be redrawn.
         * 
         * The `invalidate_children` parameter controls whether the region of
         * each child window that intersects `region` will also be invalidated.
         * If `false`, then the update area for child windows will remain
         * unaffected. See gdk_window_invalidate_maybe_recurse if you need
         * fine grained control over which children are invalidated.
         * @param region a {@link cairo.Region}
         * @param invalidate_children `true` to also invalidate child windows
         */
        invalidate_region(region: cairo.Region, invalidate_children: boolean): void;

        /**
         * Check to see if a window is destroyed..
         * @returns `true` if the window is destroyed
         * @since 2.18
         */
        is_destroyed(): boolean;

        /**
         * Determines whether or not the window is an input only window.
         * @returns `true` if `window` is input only
         * @since 2.22
         */
        is_input_only(): boolean;

        /**
         * Determines whether or not the window is shaped.
         * @returns `true` if `window` is shaped
         * @since 2.22
         */
        is_shaped(): boolean;

        /**
         * Check if the window and all ancestors of the window are
         * mapped. (This is not necessarily "viewable" in the X sense, since
         * we only check as far as we have GDK window parents, not to the root
         * window.)
         * @returns `true` if the window is viewable
         */
        is_viewable(): boolean;

        /**
         * Checks whether the window has been mapped (with `gdk_window_show()` or
         * `gdk_window_show_unraised()`).
         * @returns `true` if the window is mapped
         */
        is_visible(): boolean;

        /**
         * Lowers `window` to the bottom of the Z-order (stacking order), so that
         * other windows with the same parent window appear above `window`.
         * This is true whether or not the other windows are visible.
         * 
         * If `window` is a toplevel, the window manager may choose to deny the
         * request to move the window in the Z-order, `gdk_window_lower()` only
         * requests the restack, does not guarantee it.
         * 
         * Note that `gdk_window_show()` raises the window again, so don’t call this
         * function before `gdk_window_show()`. (Try `gdk_window_show_unraised()`.)
         */
        lower(): void;

        /**
         * If you call this during a paint (e.g. between `gdk_window_begin_paint_region()`
         * and `gdk_window_end_paint()` then GDK will mark the current clip region of the
         * window as being drawn. This is required when mixing GL rendering via
         * `gdk_cairo_draw_from_gl()` and cairo rendering, as otherwise GDK has no way
         * of knowing when something paints over the GL-drawn regions.
         * 
         * This is typically called automatically by GTK+ and you don't need
         * to care about this.
         * @param cr a {@link cairo.Context}
         * @since 3.16
         */
        mark_paint_from_clip(cr: cairo.Context): void;

        /**
         * Maximizes the window. If the window was already maximized, then
         * this function does nothing.
         * 
         * On X11, asks the window manager to maximize `window`, if the window
         * manager supports this operation. Not all window managers support
         * this, and some deliberately ignore it or don’t have a concept of
         * “maximized”; so you can’t rely on the maximization actually
         * happening. But it will happen with most standard window managers,
         * and GDK makes a best effort to get it to happen.
         * 
         * On Windows, reliably maximizes the window.
         */
        maximize(): void;

        /**
         * Merges the input shape masks for any child windows into the
         * input shape mask for `window`. i.e. the union of all input masks
         * for `window` and its children will become the new input mask
         * for `window`. See `gdk_window_input_shape_combine_region()`.
         * 
         * This function is distinct from `gdk_window_set_child_input_shapes()`
         * because it includes `window`’s input shape mask in the set of
         * shapes to be merged.
         * @since 2.10
         */
        merge_child_input_shapes(): void;

        /**
         * Merges the shape masks for any child windows into the
         * shape mask for `window`. i.e. the union of all masks
         * for `window` and its children will become the new mask
         * for `window`. See `gdk_window_shape_combine_region()`.
         * 
         * This function is distinct from `gdk_window_set_child_shapes()`
         * because it includes `window`’s shape mask in the set of shapes to
         * be merged.
         */
        merge_child_shapes(): void;

        /**
         * Repositions a window relative to its parent window.
         * For toplevel windows, window managers may ignore or modify the move;
         * you should probably use `gtk_window_move()` on a `GtkWindow` widget
         * anyway, instead of using GDK functions. For child windows,
         * the move will reliably succeed.
         * 
         * If you’re also planning to resize the window, use `gdk_window_move_resize()`
         * to both move and resize simultaneously, for a nicer visual effect.
         * @param x X coordinate relative to window’s parent
         * @param y Y coordinate relative to window’s parent
         */
        move(x: number, y: number): void;

        /**
         * Move the part of `window` indicated by `region` by `dy` pixels in the Y
         * direction and `dx` pixels in the X direction. The portions of `region`
         * that not covered by the new position of `region` are invalidated.
         * 
         * Child windows are not moved.
         * @param region The {@link cairo.Region} to move
         * @param dx Amount to move in the X direction
         * @param dy Amount to move in the Y direction
         * @since 2.8
         */
        move_region(region: cairo.Region, dx: number, dy: number): void;

        /**
         * Equivalent to calling `gdk_window_move()` and `gdk_window_resize()`,
         * except that both operations are performed at once, avoiding strange
         * visual effects. (i.e. the user may be able to see the window first
         * move, then resize, if you don’t use `gdk_window_move_resize()`.)
         * @param x new X position relative to window’s parent
         * @param y new Y position relative to window’s parent
         * @param width new width
         * @param height new height
         */
        move_resize(x: number, y: number, width: number, height: number): void;

        /**
         * Moves `window` to `rect`, aligning their anchor points.
         * 
         * `rect` is relative to the top-left corner of the window that `window` is
         * transient for. `rect_anchor` and `window_anchor` determine anchor points on
         * `rect` and `window` to pin together. `rect`'s anchor point can optionally be
         * offset by `rect_anchor_dx` and `rect_anchor_dy`, which is equivalent to
         * offsetting the position of `window`.
         * 
         * `anchor_hints` determines how `window` will be moved if the anchor points cause
         * it to move off-screen. For example, {@link Gdk.AnchorHints.FLIP_X} will replace
         * {@link Gdk.Gravity.NORTH_WEST} with {@link Gdk.Gravity.NORTH_EAST} and vice versa if
         * `window` extends beyond the left or right edges of the monitor.
         * 
         * Connect to the {@link Gdk.Window.SignalSignatures.moved_to_rect | Gdk.Window::moved-to-rect} signal to find out how it was
         * actually positioned.
         * @param rect the destination {@link Gdk.Rectangle} to align `window` with
         * @param rect_anchor the point on `rect` to align with `window`'s anchor point
         * @param window_anchor the point on `window` to align with `rect`'s anchor point
         * @param anchor_hints positioning hints to use when limited on space
         * @param rect_anchor_dx horizontal offset to shift `window`, i.e. `rect`'s anchor                  point
         * @param rect_anchor_dy vertical offset to shift `window`, i.e. `rect`'s anchor point
         * @since 3.24
         */
        move_to_rect(rect: Rectangle, rect_anchor: Gravity, window_anchor: Gravity, anchor_hints: AnchorHints, rect_anchor_dx: number, rect_anchor_dy: number): void;

        /**
         * Like `gdk_window_get_children()`, but does not copy the list of
         * children, so the list does not need to be freed.
         * @returns a reference to the list of child windows in `window`
         */
        peek_children(): Window[];

        /**
         * Sends one or more expose events to `window`. The areas in each
         * expose event will cover the entire update area for the window (see
         * `gdk_window_invalidate_region()` for details). Normally GDK calls
         * `gdk_window_process_all_updates()` on your behalf, so there’s no
         * need to call this function unless you want to force expose events
         * to be delivered immediately and synchronously (vs. the usual
         * case, where GDK delivers them in an idle handler). Occasionally
         * this is useful to produce nicer scrolling behavior, for example.
         * @param update_children whether to also process updates for child windows
         * @deprecated since 3.22
         */
        process_updates(update_children: boolean): void;

        /**
         * Raises `window` to the top of the Z-order (stacking order), so that
         * other windows with the same parent window appear below `window`.
         * This is true whether or not the windows are visible.
         * 
         * If `window` is a toplevel, the window manager may choose to deny the
         * request to move the window in the Z-order, `gdk_window_raise()` only
         * requests the restack, does not guarantee it.
         */
        raise(): void;

        /**
         * Registers a window as a potential drop destination.
         */
        register_dnd(): void;

        /**
         * Reparents `window` into the given `new_parent`. The window being
         * reparented will be unmapped as a side effect.
         * @param new_parent new parent to move `window` into
         * @param x X location inside the new parent
         * @param y Y location inside the new parent
         */
        reparent(new_parent: Window, x: number, y: number): void;

        /**
         * Resizes `window`; for toplevel windows, asks the window manager to resize
         * the window. The window manager may not allow the resize. When using GTK+,
         * use `gtk_window_resize()` instead of this low-level GDK function.
         * 
         * Windows may not be resized below 1x1.
         * 
         * If you’re also planning to move the window, use `gdk_window_move_resize()`
         * to both move and resize simultaneously, for a nicer visual effect.
         * @param width new width of the window
         * @param height new height of the window
         */
        resize(width: number, height: number): void;

        /**
         * Changes the position of  `window` in the Z-order (stacking order), so that
         * it is above `sibling` (if `above` is `true`) or below `sibling` (if `above` is
         * `false`).
         * 
         * If `sibling` is `null`, then this either raises (if `above` is `true`) or
         * lowers the window.
         * 
         * If `window` is a toplevel, the window manager may choose to deny the
         * request to move the window in the Z-order, `gdk_window_restack()` only
         * requests the restack, does not guarantee it.
         * @param sibling a {@link Gdk.Window} that is a sibling of `window`, or `null`
         * @param above a boolean
         * @since 2.18
         */
        restack(sibling: Window | null, above: boolean): void;

        /**
         * Scroll the contents of `window`, both pixels and children, by the
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
         * @param dx Amount to scroll in the X direction
         * @param dy Amount to scroll in the Y direction
         */
        scroll(dx: number, dy: number): void;

        /**
         * Setting `accept_focus` to `false` hints the desktop environment that the
         * window doesn’t want to receive input focus.
         * 
         * On X, it is the responsibility of the window manager to interpret this
         * hint. ICCCM-compliant window manager usually respect it.
         * @param accept_focus `true` if the window should receive input focus
         * @since 2.4
         */
        set_accept_focus(accept_focus: boolean): void;

        /**
         * Sets the background color of `window`.
         * 
         * However, when using GTK+, influence the background of a widget
         * using a style class or CSS — if you’re an application — or with
         * `gtk_style_context_set_background()` — if you're implementing a
         * custom widget.
         * @param color a {@link Gdk.Color}
         * @deprecated since 3.4: Don't use this function
         */
        set_background(color: Color): void;

        /**
         * Sets the background of `window`.
         * 
         * A background of `null` means that the window won't have any background. On the
         * X11 backend it's also possible to inherit the background from the parent
         * window using `gdk_x11_get_parent_relative_pattern()`.
         * 
         * The windowing system will normally fill a window with its background
         * when the window is obscured then exposed.
         * @param pattern a pattern to use, or `null`
         * @deprecated since 3.22: Don't use this function
         */
        set_background_pattern(pattern: cairo.Pattern | null): void;

        /**
         * Sets the background color of `window`.
         * 
         * See also `gdk_window_set_background_pattern()`.
         * @param rgba a {@link Gdk.RGBA} color
         * @deprecated since 3.22: Don't use this function
         */
        set_background_rgba(rgba: RGBA): void;

        /**
         * Sets the input shape mask of `window` to the union of input shape masks
         * for all children of `window`, ignoring the input shape mask of `window`
         * itself. Contrast with `gdk_window_merge_child_input_shapes()` which includes
         * the input shape mask of `window` in the masks to be merged.
         * @since 2.10
         */
        set_child_input_shapes(): void;

        /**
         * Sets the shape mask of `window` to the union of shape masks
         * for all children of `window`, ignoring the shape mask of `window`
         * itself. Contrast with `gdk_window_merge_child_shapes()` which includes
         * the shape mask of `window` in the masks to be merged.
         */
        set_child_shapes(): void;

        /**
         * Sets a {@link Gdk.Window} as composited, or unsets it. Composited
         * windows do not automatically have their contents drawn to
         * the screen. Drawing is redirected to an offscreen buffer
         * and an expose event is emitted on the parent of the composited
         * window. It is the responsibility of the parent’s expose handler
         * to manually merge the off-screen content onto the screen in
         * whatever way it sees fit.
         * 
         * It only makes sense for child windows to be composited; see
         * `gdk_window_set_opacity()` if you need translucent toplevel
         * windows.
         * 
         * An additional effect of this call is that the area of this
         * window is no longer clipped from regions marked for
         * invalidation on its parent. Draws done on the parent
         * window are also no longer clipped by the child.
         * 
         * This call is only supported on some systems (currently,
         * only X11 with new enough Xcomposite and Xdamage extensions).
         * You must call `gdk_display_supports_composite()` to check if
         * setting a window as composited is supported before
         * attempting to do so.
         * @param composited `true` to set the window as composited
         * @since 2.12
         * @deprecated since 3.16: Compositing is an outdated technology that   only ever worked on X11.
         */
        set_composited(composited: boolean): void;

        /**
         * Sets the default mouse pointer for a {@link Gdk.Window}.
         * 
         * Note that `cursor` must be for the same display as `window`.
         * 
         * Use `gdk_cursor_new_for_display()` or `gdk_cursor_new_from_pixbuf()` to
         * create the cursor. To make the cursor invisible, use {@link Gdk.CursorType.BLANK_CURSOR}.
         * Passing `null` for the `cursor` argument to `gdk_window_set_cursor()` means
         * that `window` will use the cursor of its parent window. Most windows
         * should use this default.
         * @param cursor a cursor
         */
        set_cursor(cursor: Cursor | null): void;

        /**
         * “Decorations” are the features the window manager adds to a toplevel {@link Gdk.Window}.
         * This function sets the traditional Motif window manager hints that tell the
         * window manager which decorations you would like your window to have.
         * Usually you should use `gtk_window_set_decorated()` on a `GtkWindow` instead of
         * using the GDK function directly.
         * 
         * The `decorations` argument is the logical OR of the fields in
         * the {@link Gdk.WMDecoration} enumeration. If #GDK_DECOR_ALL is included in the
         * mask, the other bits indicate which decorations should be turned off.
         * If #GDK_DECOR_ALL is not included, then the other bits indicate
         * which decorations should be turned on.
         * 
         * Most window managers honor a decorations hint of 0 to disable all decorations,
         * but very few honor all possible combinations of bits.
         * @param decorations decoration hint mask
         */
        set_decorations(decorations: WMDecoration): void;

        /**
         * Sets a specific {@link Gdk.Cursor} for a given device when it gets inside `window`.
         * Use `gdk_cursor_new_for_display()` or `gdk_cursor_new_from_pixbuf()` to create
         * the cursor. To make the cursor invisible, use {@link Gdk.CursorType.BLANK_CURSOR}. Passing
         * `null` for the `cursor` argument to `gdk_window_set_cursor()` means that
         * `window` will use the cursor of its parent window. Most windows should
         * use this default.
         * @param device a master, pointer {@link Gdk.Device}
         * @param cursor a {@link Gdk.Cursor}
         * @since 3.0
         */
        set_device_cursor(device: Device, cursor: Cursor): void;

        /**
         * Sets the event mask for a given device (Normally a floating device, not
         * attached to any visible pointer) to `window`. For example, an event mask
         * including #GDK_BUTTON_PRESS_MASK means the window should report button
         * press events. The event mask is the bitwise OR of values from the
         * {@link Gdk.EventMask} enumeration.
         * 
         * See the [input handling overview][event-masks] for details.
         * @param device {@link Gdk.Device} to enable events for.
         * @param event_mask event mask for `window`
         * @since 3.0
         */
        set_device_events(device: Device, event_mask: EventMask): void;

        /**
         * Determines whether or not extra unprocessed motion events in
         * the event queue can be discarded. If `true` only the most recent
         * event will be delivered.
         * 
         * Some types of applications, e.g. paint programs, need to see all
         * motion events and will benefit from turning off event compression.
         * 
         * By default, event compression is enabled.
         * @param event_compression `true` if motion events should be compressed
         * @since 3.12
         */
        set_event_compression(event_compression: boolean): void;

        /**
         * The event mask for a window determines which events will be reported
         * for that window from all master input devices. For example, an event mask
         * including #GDK_BUTTON_PRESS_MASK means the window should report button
         * press events. The event mask is the bitwise OR of values from the
         * {@link Gdk.EventMask} enumeration.
         * 
         * See the [input handling overview][event-masks] for details.
         * @param event_mask event mask for `window`
         */
        set_events(event_mask: EventMask): void;

        /**
         * Setting `focus_on_map` to `false` hints the desktop environment that the
         * window doesn’t want to receive input focus when it is mapped.
         * focus_on_map should be turned off for windows that aren’t triggered
         * interactively (such as popups from network activity).
         * 
         * On X, it is the responsibility of the window manager to interpret
         * this hint. Window managers following the freedesktop.org window
         * manager extension specification should respect it.
         * @param focus_on_map `true` if the window should receive input focus when mapped
         * @since 2.6
         */
        set_focus_on_map(focus_on_map: boolean): void;

        /**
         * Specifies whether the `window` should span over all monitors (in a multi-head
         * setup) or only the current monitor when in fullscreen mode.
         * 
         * The `mode` argument is from the {@link Gdk.FullscreenMode} enumeration.
         * If #GDK_FULLSCREEN_ON_ALL_MONITORS is specified, the fullscreen `window` will
         * span over all monitors from the {@link Gdk.Screen}.
         * 
         * On X11, searches through the list of monitors from the {@link Gdk.Screen} the ones
         * which delimit the 4 edges of the entire {@link Gdk.Screen} and will ask the window
         * manager to span the `window` over these monitors.
         * 
         * If the XINERAMA extension is not available or not usable, this function
         * has no effect.
         * 
         * Not all window managers support this, so you can’t rely on the fullscreen
         * window to span over the multiple monitors when #GDK_FULLSCREEN_ON_ALL_MONITORS
         * is specified.
         * @param mode fullscreen mode
         * @since 3.8
         */
        set_fullscreen_mode(mode: FullscreenMode): void;

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
         * {@link Gdk.WMFunction} enumeration. If the bitmask includes #GDK_FUNC_ALL,
         * then the other bits indicate which functions to disable; if
         * it doesn’t include #GDK_FUNC_ALL, it indicates which functions to
         * enable.
         * @param functions bitmask of operations to allow on `window`
         */
        set_functions(functions: WMFunction): void;

        /**
         * Sets the geometry hints for `window`. Hints flagged in `geom_mask`
         * are set, hints not flagged in `geom_mask` are unset.
         * To unset all hints, use a `geom_mask` of 0 and a `geometry` of `null`.
         * 
         * This function provides hints to the windowing system about
         * acceptable sizes for a toplevel window. The purpose of
         * this is to constrain user resizing, but the windowing system
         * will typically  (but is not required to) also constrain the
         * current size of the window to the provided values and
         * constrain programatic resizing via `gdk_window_resize()` or
         * `gdk_window_move_resize()`.
         * 
         * Note that on X11, this effect has no effect on windows
         * of type {@link Gdk.WindowType.TEMP} or windows where override redirect
         * has been turned on via `gdk_window_set_override_redirect()`
         * since these windows are not resizable by the user.
         * 
         * Since you can’t count on the windowing system doing the
         * constraints for programmatic resizes, you should generally
         * call `gdk_window_constrain_size()` yourself to determine
         * appropriate sizes.
         * @param geometry geometry hints
         * @param geom_mask bitmask indicating fields of `geometry` to pay attention to
         */
        set_geometry_hints(geometry: Geometry, geom_mask: WindowHints): void;

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
         * @param leader group leader window, or `null` to restore the default group leader window
         */
        set_group(leader: Window | null): void;

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
         * @param pixbufs A list of pixbufs, of different sizes.
         */
        set_icon_list(pixbufs: GdkPixbuf.Pixbuf[]): void;

        /**
         * Windows may have a name used while minimized, distinct from the
         * name they display in their titlebar. Most of the time this is a bad
         * idea from a user interface standpoint. But you can set such a name
         * with this function, if you like.
         * 
         * After calling this with a non-`null` `name`, calls to `gdk_window_set_title()`
         * will not update the icon title.
         * 
         * Using `null` for `name` unsets the icon title; further calls to
         * `gdk_window_set_title()` will again update the icon title as well.
         * 
         * Note that some platforms don't support window icons.
         * @param name name of window while iconified (minimized)
         */
        set_icon_name(name: string | null): void;

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
         * @param setting whether to keep `window` above other windows
         * @since 2.4
         */
        set_keep_above(setting: boolean): void;

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
         * @param setting whether to keep `window` below other windows
         * @since 2.4
         */
        set_keep_below(setting: boolean): void;

        /**
         * The application can use this hint to tell the window manager
         * that a certain window has modal behaviour. The window manager
         * can use this information to handle modal windows in a special
         * way.
         * 
         * You should only use this on windows for which you have
         * previously called `gdk_window_set_transient_for()`
         * @param modal `true` if the window is modal, `false` otherwise.
         */
        set_modal_hint(modal: boolean): void;

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
         * with alpha, or use `gtk_widget_set_opacity()` to set an overall opacity
         * for your widgets.
         * 
         * For child windows this function only works for non-native windows.
         * 
         * For setting up per-pixel alpha topelevels, see `gdk_screen_get_rgba_visual()`,
         * and for non-toplevels, see `gdk_window_set_composited()`.
         * 
         * Support for non-toplevel windows was added in 3.8.
         * @param opacity opacity
         * @since 2.12
         */
        set_opacity(opacity: number): void;

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
         * property in your `GtkWidget::style-updated` handler.
         * @param region a region, or `null`
         * @since 3.10
         */
        set_opaque_region(region: cairo.Region | null): void;

        /**
         * An override redirect window is not under the control of the window manager.
         * This means it won’t have a titlebar, won’t be minimizable, etc. - it will
         * be entirely under the control of the application. The window manager
         * can’t see the override redirect window at all.
         * 
         * Override redirect should only be used for short-lived temporary
         * windows, such as popup menus. `GtkMenu` uses an override redirect
         * window in its implementation, for example.
         * @param override_redirect `true` if window should be override redirect
         */
        set_override_redirect(override_redirect: boolean): void;

        /**
         * Sets whether input to the window is passed through to the window
         * below.
         * 
         * The default value of this is `false`, which means that pointer
         * events that happen inside the window are send first to the window,
         * but if the event is not selected by the event mask then the event
         * is sent to the parent window, and so on up the hierarchy.
         * 
         * If `pass_through` is `true` then such pointer events happen as if the
         * window wasn't there at all, and thus will be sent first to any
         * windows below `window`. This is useful if the window is used in a
         * transparent fashion. In the terminology of the web this would be called
         * "pointer-events: none".
         * 
         * Note that a window with `pass_through` `true` can still have a subwindow
         * without pass through, so you can get events on a subset of a window. And in
         * that cases you would get the in-between related events such as the pointer
         * enter/leave events on its way to the destination window.
         * @param pass_through a boolean
         * @since 3.18
         */
        set_pass_through(pass_through: boolean): void;

        /**
         * When using GTK+, typically you should use `gtk_window_set_role()` instead
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
         * @param role a string indicating its role
         */
        set_role(role: string): void;

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
         * @param left The left extent
         * @param right The right extent
         * @param top The top extent
         * @param bottom The bottom extent
         * @since 3.12
         */
        set_shadow_width(left: number, right: number, top: number, bottom: number): void;

        /**
         * Toggles whether a window should appear in a pager (workspace
         * switcher, or other desktop utility program that displays a small
         * thumbnail representation of the windows on the desktop). If a
         * window’s semantic type as specified with `gdk_window_set_type_hint()`
         * already fully describes the window, this function should
         * not be called in addition, instead you should
         * allow the window to be treated according to standard policy for
         * its semantic type.
         * @param skips_pager `true` to skip the pager
         * @since 2.2
         */
        set_skip_pager_hint(skips_pager: boolean): void;

        /**
         * Toggles whether a window should appear in a task list or window
         * list. If a window’s semantic type as specified with
         * `gdk_window_set_type_hint()` already fully describes the window, this
         * function should not be called in addition,
         * instead you should allow the window to be treated according to
         * standard policy for its semantic type.
         * @param skips_taskbar `true` to skip the taskbar
         * @since 2.2
         */
        set_skip_taskbar_hint(skips_taskbar: boolean): void;

        /**
         * Sets the event mask for any floating device (i.e. not attached to any
         * visible pointer) that has the source defined as `source`. This event
         * mask will be applied both to currently existing, newly added devices
         * after this call, and devices being attached/detached.
         * @param source a {@link Gdk.InputSource} to define the source class.
         * @param event_mask event mask for `window`
         * @since 3.0
         */
        set_source_events(source: InputSource, event_mask: EventMask): void;

        /**
         * When using GTK+, typically you should use `gtk_window_set_startup_id()`
         * instead of this low-level function.
         * @param startup_id a string with startup-notification identifier
         * @since 2.12
         */
        set_startup_id(startup_id: string): void;

        /**
         * Used to set the bit gravity of the given window to static, and flag
         * it so all children get static subwindow gravity. This is used if you
         * are implementing scary features that involve deep knowledge of the
         * windowing system. Don’t worry about it.
         * @param use_static `true` to turn on static gravity
         * @returns `false`
         * @deprecated since 3.16: static gravities haven't worked on anything but X11   for a long time.
         */
        set_static_gravities(use_static: boolean): boolean;

        /**
         * This function will enable multidevice features in `window`.
         * 
         * Multidevice aware windows will need to handle properly multiple,
         * per device enter/leave events, device grabs and grab ownerships.
         * @param support_multidevice `true` to enable multidevice support in `window`.
         * @since 3.0
         */
        set_support_multidevice(support_multidevice: boolean): void;

        /**
         * Sets the title of a toplevel window, to be displayed in the titlebar.
         * If you haven’t explicitly set the icon name for the window
         * (using `gdk_window_set_icon_name()`), the icon name will be set to
         * `title` as well. `title` must be in UTF-8 encoding (as with all
         * user-readable strings in GDK/GTK+). `title` may not be `null`.
         * @param title title of `window`
         */
        set_title(title: string): void;

        /**
         * Indicates to the window manager that `window` is a transient dialog
         * associated with the application window `parent`. This allows the
         * window manager to do things like center `window` on `parent` and
         * keep `window` above `parent`.
         * 
         * See `gtk_window_set_transient_for()` if you’re using `GtkWindow` or
         * `GtkDialog`.
         * @param parent another toplevel {@link Gdk.Window}
         */
        set_transient_for(parent: Window): void;

        /**
         * The application can use this call to provide a hint to the window
         * manager about the functionality of a window. The window manager
         * can use this information when determining the decoration and behaviour
         * of the window.
         * 
         * The hint must be set before the window is mapped.
         * @param hint A hint of the function this window will have
         */
        set_type_hint(hint: WindowTypeHint): void;

        /**
         * Toggles whether a window needs the user's
         * urgent attention.
         * @param urgent `true` if the window is urgent
         * @since 2.8
         */
        set_urgency_hint(urgent: boolean): void;

        /**
         * For most purposes this function is deprecated in favor of
         * `g_object_set_data()`. However, for historical reasons GTK+ stores
         * the `GtkWidget` that owns a {@link Gdk.Window} as user data on the
         * {@link Gdk.Window}. So, custom widget implementations should use
         * this function for that. If GTK+ receives an event for a {@link Gdk.Window},
         * and the user data for the window is non-`null`, GTK+ will assume the
         * user data is a `GtkWidget`, and forward the event to that widget.
         * @param user_data user data
         */
        set_user_data(user_data: GObject.Object | null): void;

        /**
         * Makes pixels in `window` outside `shape_region` be transparent,
         * so that the window may be nonrectangular.
         * 
         * If `shape_region` is `null`, the shape will be unset, so the whole
         * window will be opaque again. `offset_x` and `offset_y` are ignored
         * if `shape_region` is `null`.
         * 
         * On the X11 platform, this uses an X server extension which is
         * widely available on most common platforms, but not available on
         * very old X servers, and occasionally the implementation will be
         * buggy. On servers without the shape extension, this function
         * will do nothing.
         * 
         * This function works on both toplevel and child windows.
         * @param shape_region region of window to be non-transparent
         * @param offset_x X position of `shape_region` in `window` coordinates
         * @param offset_y Y position of `shape_region` in `window` coordinates
         */
        shape_combine_region(shape_region: cairo.Region | null, offset_x: number, offset_y: number): void;

        /**
         * Like `gdk_window_show_unraised()`, but also raises the window to the
         * top of the window stack (moves the window to the front of the
         * Z-order).
         * 
         * This function maps a window so it’s visible onscreen. Its opposite
         * is `gdk_window_hide()`.
         * 
         * When implementing a `GtkWidget`, you should call this function on the widget's
         * {@link Gdk.Window} as part of the “map” method.
         */
        show(): void;

        /**
         * Shows a {@link Gdk.Window} onscreen, but does not modify its stacking
         * order. In contrast, `gdk_window_show()` will raise the window
         * to the top of the window stack.
         * 
         * On the X11 platform, in Xlib terms, this function calls
         * XMapWindow() (it also updates some internal GDK state, which means
         * that you can’t really use XMapWindow() directly on a GDK window).
         */
        show_unraised(): void;

        /**
         * Asks the windowing system to show the window menu. The window menu
         * is the menu shown when right-clicking the titlebar on traditional
         * windows managed by the window manager. This is useful for windows
         * using client-side decorations, activating it with a right-click
         * on the window decorations.
         * @param event a {@link Gdk.Event} to show the menu for
         * @returns `true` if the window menu was shown and `false` otherwise.
         * @since 3.14
         */
        show_window_menu(event: Event): boolean;

        /**
         * “Pins” a window such that it’s on all workspaces and does not scroll
         * with viewports, for window managers that have scrollable viewports.
         * (When using `GtkWindow`, `gtk_window_stick()` may be more useful.)
         * 
         * On the X11 platform, this function depends on window manager
         * support, so may have no effect with many window managers. However,
         * GDK will do the best it can to convince the window manager to stick
         * the window. For window managers that don’t support this operation,
         * there’s nothing you can do to force it to happen.
         */
        stick(): void;

        /**
         * Thaws a window frozen with
         * `gdk_window_freeze_toplevel_updates_libgtk_only()`.
         * 
         * This function is not part of the GDK public API and is only
         * for use by GTK+.
         * @deprecated since 3.16: This symbol was never meant to be used outside of GTK+
         */
        thaw_toplevel_updates_libgtk_only(): void;

        /**
         * Thaws a window frozen with `gdk_window_freeze_updates()`.
         */
        thaw_updates(): void;

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
         * @since 2.2
         */
        unfullscreen(): void;

        /**
         * Unmaximizes the window. If the window wasn’t maximized, then this
         * function does nothing.
         * 
         * On X11, asks the window manager to unmaximize `window`, if the
         * window manager supports this operation. Not all window managers
         * support this, and some deliberately ignore it or don’t have a
         * concept of “maximized”; so you can’t rely on the unmaximization
         * actually happening. But it will happen with most standard window
         * managers, and GDK makes a best effort to get it to happen.
         * 
         * On Windows, reliably unmaximizes the window.
         */
        unmaximize(): void;

        /**
         * Reverse operation for `gdk_window_stick()`; see `gdk_window_stick()`,
         * and `gtk_window_unstick()`.
         */
        unstick(): void;

        /**
         * Withdraws a window (unmaps it and asks the window manager to forget about it).
         * This function is not really useful as `gdk_window_hide()` automatically
         * withdraws toplevel windows before hiding them.
         */
        withdraw(): void;
    }


    /**
     * An opaque type representing a string as an index into a table
     * of strings on the X server.
     * @gir-type Struct
     */
    abstract class Atom {
        static $gtype: GObject.GType<Atom>;

        // Static methods
        /**
         * Finds or creates an atom corresponding to a given string.
         * @param atom_name a string.
         * @param only_if_exists if `true`, GDK is allowed to not create a new atom, but   just return `GDK_NONE` if the requested atom doesn’t already   exists. Currently, the flag is ignored, since checking the   existance of an atom is as expensive as creating it.
         */
        static intern(atom_name: string, only_if_exists: boolean): Atom;

        /**
         * Finds or creates an atom corresponding to a given string.
         * 
         * Note that this function is identical to `gdk_atom_intern()` except
         * that if a new {@link Gdk.Atom} is created the string itself is used rather
         * than a copy. This saves memory, but can only be used if the string
         * will always exist. It can be used with statically
         * allocated strings in the main program, but not with statically
         * allocated memory in dynamically loaded modules, if you expect to
         * ever unload the module again (e.g. do not use this function in
         * GTK+ theme engines).
         * @param atom_name a static string
         * @since 2.10
         */
        static intern_static_string(atom_name: string): Atom;

        // Methods
        /**
         * Determines the string corresponding to an atom.
         * @returns a newly-allocated string containing the string   corresponding to `atom`. When you are done with the   return value, you should free it using `g_free()`.
         */
        name(): string;
    }


    /**
     * A {@link Gdk.Color} is used to describe a color,
     * similar to the XColor struct used in the X11 drawing API.
     * @gir-type Struct
     * @deprecated since 3.14: Use {@link Gdk.RGBA}
     */
    class Color {
        static $gtype: GObject.GType<Color>;

        // Fields
        pixel: number;

        red: number;

        green: number;

        blue: number;

        // Constructors

        constructor(properties?: Partial<{
            pixel: number;
            red: number;
            green: number;
            blue: number;
        }>);

        // Static methods
        /**
         * Parses a textual specification of a color and fill in the
         * `red`, `green`, and `blue` fields of a {@link Gdk.Color}.
         * 
         * The string can either one of a large set of standard names
         * (taken from the X11 `rgb.txt` file), or it can be a hexadecimal
         * value in the form “\#rgb” “\#rrggbb”, “\#rrrgggbbb” or
         * “\#rrrrggggbbbb” where “r”, “g” and “b” are hex digits of
         * the red, green, and blue components of the color, respectively.
         * (White in the four forms is “\#fff”, “\#ffffff”, “\#fffffffff”
         * and “\#ffffffffffff”).
         * @param spec the string specifying the color
         * @deprecated since 3.14: Use {@link Gdk.RGBA}
         */
        static parse(spec: string): [boolean, Color];

        // Methods
        /**
         * Makes a copy of a {@link Gdk.Color}.
         * 
         * The result must be freed using `gdk_color_free()`.
         * @returns a copy of `color`
         * @deprecated since 3.14: Use {@link Gdk.RGBA}
         */
        copy(): Color;

        /**
         * Compares two colors.
         * @param colorb another {@link Gdk.Color}
         * @returns `true` if the two colors compare equal
         * @deprecated since 3.14: Use {@link Gdk.RGBA}
         */
        equal(colorb: Color): boolean;

        /**
         * Frees a {@link Gdk.Color} created with `gdk_color_copy()`.
         * @deprecated since 3.14: Use {@link Gdk.RGBA}
         */
        free(): void;

        /**
         * A hash function suitable for using for a hash
         * table that stores `GdkColors`.
         * @returns The hash function applied to `color`
         * @deprecated since 3.14: Use {@link Gdk.RGBA}
         */
        hash(): number;

        /**
         * Returns a textual specification of `color` in the hexadecimal
         * form “\#rrrrggggbbbb” where “r”, “g” and “b” are hex digits
         * representing the red, green and blue components respectively.
         * 
         * The returned string can be parsed by `gdk_color_parse()`.
         * @returns a newly-allocated text string
         * @since 2.12
         * @deprecated since 3.14: Use {@link Gdk.RGBA}
         */
        to_string(): string;
    }


    /**
     * @gir-type Alias
     */
    type DevicePadInterface = typeof DevicePad;

    /**
     * @gir-type Alias
     */
    type DrawingContextClass = typeof DrawingContext;

    /**
     * Contains the fields which are common to all event structs.
     * Any event pointer can safely be cast to a pointer to a {@link Gdk.EventAny} to
     * access these fields.
     * @gir-type Struct
     */
    class EventAny {
        static $gtype: GObject.GType<EventAny>;

        // Fields
        type: EventType;

        window: Window;

        send_event: number;
    }


    /**
     * Used for button press and button release events. The
     * `type` field will be one of {@link Gdk.EventType.BUTTON_PRESS},
     * {@link Gdk.EventType.2BUTTON_PRESS}, {@link Gdk.EventType.3BUTTON_PRESS} or {@link Gdk.EventType.BUTTON_RELEASE},
     * 
     * Double and triple-clicks result in a sequence of events being received.
     * For double-clicks the order of events will be:
     * 
     * - {@link Gdk.EventType.BUTTON_PRESS}
     * - {@link Gdk.EventType.BUTTON_RELEASE}
     * - {@link Gdk.EventType.BUTTON_PRESS}
     * - {@link Gdk.EventType.2BUTTON_PRESS}
     * - {@link Gdk.EventType.BUTTON_RELEASE}
     * 
     * Note that the first click is received just like a normal
     * button press, while the second click results in a {@link Gdk.EventType.2BUTTON_PRESS}
     * being received just after the {@link Gdk.EventType.BUTTON_PRESS}.
     * 
     * Triple-clicks are very similar to double-clicks, except that
     * {@link Gdk.EventType.3BUTTON_PRESS} is inserted after the third click. The order of the
     * events is:
     * 
     * - {@link Gdk.EventType.BUTTON_PRESS}
     * - {@link Gdk.EventType.BUTTON_RELEASE}
     * - {@link Gdk.EventType.BUTTON_PRESS}
     * - {@link Gdk.EventType.2BUTTON_PRESS}
     * - {@link Gdk.EventType.BUTTON_RELEASE}
     * - {@link Gdk.EventType.BUTTON_PRESS}
     * - {@link Gdk.EventType.3BUTTON_PRESS}
     * - {@link Gdk.EventType.BUTTON_RELEASE}
     * 
     * For a double click to occur, the second button press must occur within
     * 1/4 of a second of the first. For a triple click to occur, the third
     * button press must also occur within 1/2 second of the first button press.
     * @gir-type Struct
     */
    class EventButton {
        static $gtype: GObject.GType<EventButton>;

        // Fields
        type: EventType;

        window: Window;

        send_event: number;

        time: number;

        x: number;

        y: number;

        axes: number;

        state: ModifierType;

        button: number;

        device: Device;

        x_root: number;

        y_root: number;
    }


    /**
     * Generated when a window size or position has changed.
     * @gir-type Struct
     */
    class EventConfigure {
        static $gtype: GObject.GType<EventConfigure>;

        // Fields
        type: EventType;

        window: Window;

        send_event: number;

        x: number;

        y: number;

        width: number;

        height: number;
    }


    /**
     * Generated when the pointer enters or leaves a window.
     * @gir-type Struct
     */
    class EventCrossing {
        static $gtype: GObject.GType<EventCrossing>;

        // Fields
        type: EventType;

        window: Window;

        send_event: number;

        subwindow: Window;

        time: number;

        x: number;

        y: number;

        x_root: number;

        y_root: number;

        mode: CrossingMode;

        detail: NotifyType;

        focus: boolean;

        state: ModifierType;
    }


    /**
     * Generated during DND operations.
     * @gir-type Struct
     */
    class EventDND {
        static $gtype: GObject.GType<EventDND>;

        // Fields
        type: EventType;

        window: Window;

        send_event: number;

        context: DragContext;

        time: number;

        x_root: number;

        y_root: number;
    }


    /**
     * Generated when all or part of a window becomes visible and needs to be
     * redrawn.
     * @gir-type Struct
     */
    class EventExpose {
        static $gtype: GObject.GType<EventExpose>;

        // Fields
        type: EventType;

        window: Window;

        send_event: number;

        area: Rectangle;

        count: number;
    }


    /**
     * Describes a change of keyboard focus.
     * @gir-type Struct
     */
    class EventFocus {
        static $gtype: GObject.GType<EventFocus>;

        // Fields
        type: EventType;

        window: Window;

        send_event: number;

        "in": number;
    }


    /**
     * Generated when a pointer or keyboard grab is broken. On X11, this happens
     * when the grab window becomes unviewable (i.e. it or one of its ancestors
     * is unmapped), or if the same application grabs the pointer or keyboard
     * again. Note that implicit grabs (which are initiated by button presses)
     * can also cause {@link Gdk.EventGrabBroken} events.
     * @gir-type Struct
     * @since 2.8
     */
    class EventGrabBroken {
        static $gtype: GObject.GType<EventGrabBroken>;

        // Fields
        type: EventType;

        window: Window;

        send_event: number;

        keyboard: boolean;

        implicit: boolean;

        grab_window: Window;
    }


    /**
     * Describes a key press or key release event.
     * @gir-type Struct
     */
    class EventKey {
        static $gtype: GObject.GType<EventKey>;

        // Fields
        type: EventType;

        window: Window;

        send_event: number;

        time: number;

        state: ModifierType;

        keyval: number;

        length: number;

        string: string;

        hardware_keycode: number;

        group: number;

        is_modifier: number;
    }


    /**
     * Generated when the pointer moves.
     * @gir-type Struct
     */
    class EventMotion {
        static $gtype: GObject.GType<EventMotion>;

        // Fields
        type: EventType;

        window: Window;

        send_event: number;

        time: number;

        x: number;

        y: number;

        axes: number;

        state: ModifierType;

        is_hint: number;

        device: Device;

        x_root: number;

        y_root: number;
    }


    /**
     * Generated when the owner of a selection changes. On X11, this
     * information is only available if the X server supports the XFIXES
     * extension.
     * @gir-type Struct
     * @since 2.6
     */
    class EventOwnerChange {
        static $gtype: GObject.GType<EventOwnerChange>;

        // Fields
        type: EventType;

        window: Window;

        send_event: number;

        owner: Window;

        reason: OwnerChange;

        time: number;

        selection_time: number;
    }


    /**
     * Generated during {@link Gdk.InputSource.TABLET_PAD} interaction with tactile sensors.
     * @gir-type Struct
     * @since 3.22
     */
    class EventPadAxis {
        static $gtype: GObject.GType<EventPadAxis>;

        // Fields
        type: EventType;

        window: Window;

        send_event: number;

        time: number;

        group: number;

        index: number;

        mode: number;

        value: number;
    }


    /**
     * Generated during {@link Gdk.InputSource.TABLET_PAD} button presses and releases.
     * @gir-type Struct
     * @since 3.22
     */
    class EventPadButton {
        static $gtype: GObject.GType<EventPadButton>;

        // Fields
        type: EventType;

        window: Window;

        send_event: number;

        time: number;

        group: number;

        button: number;

        mode: number;
    }


    /**
     * Generated during {@link Gdk.InputSource.TABLET_PAD} mode switches in a group.
     * @gir-type Struct
     * @since 3.22
     */
    class EventPadGroupMode {
        static $gtype: GObject.GType<EventPadGroupMode>;

        // Fields
        type: EventType;

        window: Window;

        send_event: number;

        time: number;

        group: number;

        mode: number;
    }


    /**
     * Describes a property change on a window.
     * @gir-type Struct
     */
    class EventProperty {
        static $gtype: GObject.GType<EventProperty>;

        // Fields
        type: EventType;

        window: Window;

        send_event: number;

        time: number;

        state: PropertyState;
    }


    /**
     * Proximity events are generated when using GDK’s wrapper for the
     * XInput extension. The XInput extension is an add-on for standard X
     * that allows you to use nonstandard devices such as graphics tablets.
     * A proximity event indicates that the stylus has moved in or out of
     * contact with the tablet, or perhaps that the user’s finger has moved
     * in or out of contact with a touch screen.
     * 
     * This event type will be used pretty rarely. It only is important for
     * XInput aware programs that are drawing their own cursor.
     * @gir-type Struct
     */
    class EventProximity {
        static $gtype: GObject.GType<EventProximity>;

        // Fields
        type: EventType;

        window: Window;

        send_event: number;

        time: number;

        device: Device;
    }


    /**
     * Generated from button presses for the buttons 4 to 7. Wheel mice are
     * usually configured to generate button press events for buttons 4 and 5
     * when the wheel is turned.
     * 
     * Some GDK backends can also generate “smooth” scroll events, which
     * can be recognized by the {@link Gdk.ScrollDirection.SMOOTH} scroll direction. For
     * these, the scroll deltas can be obtained with
     * `gdk_event_get_scroll_deltas()`.
     * @gir-type Struct
     */
    class EventScroll {
        static $gtype: GObject.GType<EventScroll>;

        // Fields
        type: EventType;

        window: Window;

        send_event: number;

        time: number;

        x: number;

        y: number;

        state: ModifierType;

        direction: ScrollDirection;

        device: Device;

        x_root: number;

        y_root: number;

        delta_x: number;

        delta_y: number;

        is_stop: number;
    }


    /**
     * Generated when a selection is requested or ownership of a selection
     * is taken over by another client application.
     * @gir-type Struct
     */
    class EventSelection {
        static $gtype: GObject.GType<EventSelection>;

        // Fields
        type: EventType;

        window: Window;

        send_event: number;

        time: number;

        requestor: Window;
    }


    /**
     * @gir-type Struct
     */
    abstract class EventSequence {
        static $gtype: GObject.GType<EventSequence>;
    }


    /**
     * Generated when a setting is modified.
     * @gir-type Struct
     */
    class EventSetting {
        static $gtype: GObject.GType<EventSetting>;

        // Fields
        type: EventType;

        window: Window;

        send_event: number;

        action: SettingAction;

        name: string;
    }


    /**
     * Used for touch events.
     * `type` field will be one of {@link Gdk.EventType.TOUCH_BEGIN}, {@link Gdk.EventType.TOUCH_UPDATE},
     * {@link Gdk.EventType.TOUCH_END} or {@link Gdk.EventType.TOUCH_CANCEL}.
     * 
     * Touch events are grouped into sequences by means of the `sequence`
     * field, which can also be obtained with `gdk_event_get_event_sequence()`.
     * Each sequence begins with a {@link Gdk.EventType.TOUCH_BEGIN} event, followed by
     * any number of {@link Gdk.EventType.TOUCH_UPDATE} events, and ends with a {@link Gdk.EventType.TOUCH_END}
     * (or {@link Gdk.EventType.TOUCH_CANCEL}) event. With multitouch devices, there may be
     * several active sequences at the same time.
     * @gir-type Struct
     */
    class EventTouch {
        static $gtype: GObject.GType<EventTouch>;

        // Fields
        type: EventType;

        window: Window;

        send_event: number;

        time: number;

        x: number;

        y: number;

        axes: number;

        state: ModifierType;

        emulating_pointer: boolean;

        device: Device;

        x_root: number;

        y_root: number;
    }


    /**
     * Generated during touchpad swipe gestures.
     * @gir-type Struct
     */
    class EventTouchpadPinch {
        static $gtype: GObject.GType<EventTouchpadPinch>;

        // Fields
        type: EventType;

        window: Window;

        send_event: number;

        phase: number;

        n_fingers: number;

        time: number;

        x: number;

        y: number;

        dx: number;

        dy: number;

        angle_delta: number;

        scale: number;

        x_root: number;

        y_root: number;

        state: ModifierType;
    }


    /**
     * Generated during touchpad swipe gestures.
     * @gir-type Struct
     */
    class EventTouchpadSwipe {
        static $gtype: GObject.GType<EventTouchpadSwipe>;

        // Fields
        type: EventType;

        window: Window;

        send_event: number;

        phase: number;

        n_fingers: number;

        time: number;

        x: number;

        y: number;

        dx: number;

        dy: number;

        x_root: number;

        y_root: number;

        state: ModifierType;
    }


    /**
     * Generated when the window visibility status has changed.
     * @gir-type Struct
     * @deprecated since 3.12: Modern composited windowing systems with pervasive     transparency make it impossible to track the visibility of a window     reliably, so this event can not be guaranteed to provide useful     information.
     */
    class EventVisibility {
        static $gtype: GObject.GType<EventVisibility>;

        // Fields
        type: EventType;

        window: Window;

        send_event: number;

        state: VisibilityState;
    }


    /**
     * Generated when the state of a toplevel window changes.
     * @gir-type Struct
     */
    class EventWindowState {
        static $gtype: GObject.GType<EventWindowState>;

        // Fields
        type: EventType;

        window: Window;

        send_event: number;

        changed_mask: WindowState;

        new_window_state: WindowState;
    }


    /**
     * @gir-type Alias
     */
    type FrameClockClass = typeof FrameClock;

    /**
     * @gir-type Struct
     */
    abstract class FrameClockPrivate {
        static $gtype: GObject.GType<FrameClockPrivate>;
    }


    /**
     * A {@link Gdk.FrameTimings} object holds timing information for a single frame
     * of the application’s displays. To retrieve {@link Gdk.FrameTimings} objects,
     * use `gdk_frame_clock_get_timings()` or `gdk_frame_clock_get_current_timings()`.
     * The information in {@link Gdk.FrameTimings} is useful for precise synchronization
     * of video with the event or audio streams, and for measuring
     * quality metrics for the application’s display, such as latency and jitter.
     * @gir-type Struct
     */
    abstract class FrameTimings {
        static $gtype: GObject.GType<FrameTimings>;

        // Methods
        /**
         * The timing information in a {@link Gdk.FrameTimings} is filled in
         * incrementally as the frame as drawn and passed off to the
         * window system for processing and display to the user. The
         * accessor functions for {@link Gdk.FrameTimings} can return 0 to
         * indicate an unavailable value for two reasons: either because
         * the information is not yet available, or because it isn't
         * available at all. Once `gdk_frame_timings_get_complete()` returns
         * `true` for a frame, you can be certain that no further values
         * will become available and be stored in the {@link Gdk.FrameTimings}.
         * @returns `true` if all information that will be available  for the frame has been filled in.
         * @since 3.8
         */
        get_complete(): boolean;

        /**
         * Gets the frame counter value of the {@link Gdk.FrameClock} when this
         * this frame was drawn.
         * @returns the frame counter value for this frame
         * @since 3.8
         */
        get_frame_counter(): number;

        /**
         * Returns the frame time for the frame. This is the time value
         * that is typically used to time animations for the frame. See
         * `gdk_frame_clock_get_frame_time()`.
         * @returns the frame time for the frame, in the timescale  of `g_get_monotonic_time()`
         */
        get_frame_time(): number;

        /**
         * Gets the predicted time at which this frame will be displayed. Although
         * no predicted time may be available, if one is available, it will
         * be available while the frame is being generated, in contrast to
         * `gdk_frame_timings_get_presentation_time()`, which is only available
         * after the frame has been presented. In general, if you are simply
         * animating, you should use `gdk_frame_clock_get_frame_time()` rather
         * than this function, but this function is useful for applications
         * that want exact control over latency. For example, a movie player
         * may want this information for Audio/Video synchronization.
         * @returns The predicted time at which the frame will be presented,  in the timescale of `g_get_monotonic_time()`, or 0 if no predicted  presentation time is available.
         * @since 3.8
         */
        get_predicted_presentation_time(): number;

        /**
         * Reurns the presentation time. This is the time at which the frame
         * became visible to the user.
         * @returns the time the frame was displayed to the user, in the  timescale of `g_get_monotonic_time()`, or 0 if no presentation  time is available. See `gdk_frame_timings_get_complete()`
         * @since 3.8
         */
        get_presentation_time(): number;

        /**
         * Gets the natural interval between presentation times for
         * the display that this frame was displayed on. Frame presentation
         * usually happens during the “vertical blanking interval”.
         * @returns the refresh interval of the display, in microseconds,  or 0 if the refresh interval is not available.  See `gdk_frame_timings_get_complete()`.
         * @since 3.8
         */
        get_refresh_interval(): number;

        /**
         * Increases the reference count of `timings`.
         * @returns `timings`
         * @since 3.8
         */
        ref(): FrameTimings;

        /**
         * Decreases the reference count of `timings`. If `timings`
         * is no longer referenced, it will be freed.
         * @since 3.8
         */
        unref(): void;
    }


    /**
     * The {@link Gdk.Geometry} struct gives the window manager information about
     * a window’s geometry constraints. Normally you would set these on
     * the GTK+ level using `gtk_window_set_geometry_hints()`. `GtkWindow`
     * then sets the hints on the {@link Gdk.Window} it creates.
     * 
     * `gdk_window_set_geometry_hints()` expects the hints to be fully valid already
     * and simply passes them to the window manager; in contrast,
     * `gtk_window_set_geometry_hints()` performs some interpretation. For example,
     * `GtkWindow` will apply the hints to the geometry widget instead of the
     * toplevel window, if you set a geometry widget. Also, the
     * `min_width`/`min_height`/`max_width`/`max_height` fields may be set to -1, and
     * `GtkWindow` will substitute the size request of the window or geometry widget.
     * If the minimum size hint is not provided, `GtkWindow` will use its requisition
     * as the minimum size. If the minimum size is provided and a geometry widget is
     * set, `GtkWindow` will take the minimum size as the minimum size of the
     * geometry widget rather than the entire window. The base size is treated
     * similarly.
     * 
     * The canonical use-case for `gtk_window_set_geometry_hints()` is to get a
     * terminal widget to resize properly. Here, the terminal text area should be
     * the geometry widget; `GtkWindow` will then automatically set the base size to
     * the size of other widgets in the terminal window, such as the menubar and
     * scrollbar. Then, the `width_inc` and `height_inc` fields should be set to the
     * size of one character in the terminal. Finally, the base size should be set
     * to the size of one character. The net effect is that the minimum size of the
     * terminal will have a 1x1 character terminal area, and only terminal sizes on
     * the “character grid” will be allowed.
     * 
     * Here’s an example of how the terminal example would be implemented, assuming
     * a terminal area widget called “terminal” and a toplevel window “toplevel”:
     * 
     * 
     * ```c
     * 	GdkGeometry hints;
     * 
     * 	hints.base_width = terminal->char_width;
     *         hints.base_height = terminal->char_height;
     *         hints.min_width = terminal->char_width;
     *         hints.min_height = terminal->char_height;
     *         hints.width_inc = terminal->char_width;
     *         hints.height_inc = terminal->char_height;
     * 
     *  gtk_window_set_geometry_hints (GTK_WINDOW (toplevel),
     *                                 GTK_WIDGET (terminal),
     *                                 &hints,
     *                                 GDK_HINT_RESIZE_INC |
     *                                 GDK_HINT_MIN_SIZE |
     *                                 GDK_HINT_BASE_SIZE);
     * ```
     * 
     * 
     * The other useful fields are the `min_aspect` and `max_aspect` fields; these
     * contain a width/height ratio as a floating point number. If a geometry widget
     * is set, the aspect applies to the geometry widget rather than the entire
     * window. The most common use of these hints is probably to set `min_aspect` and
     * `max_aspect` to the same value, thus forcing the window to keep a constant
     * aspect ratio.
     * @gir-type Struct
     */
    class Geometry {
        static $gtype: GObject.GType<Geometry>;

        // Fields
        min_width: number;

        min_height: number;

        max_width: number;

        max_height: number;

        base_width: number;

        base_height: number;

        width_inc: number;

        height_inc: number;

        min_aspect: number;

        max_aspect: number;

        win_gravity: Gravity;
    }


    /**
     * A {@link Gdk.KeymapKey} is a hardware key that can be mapped to a keyval.
     * @gir-type Struct
     */
    class KeymapKey {
        static $gtype: GObject.GType<KeymapKey>;

        // Fields
        keycode: number;

        group: number;

        level: number;

        // Constructors

        constructor(properties?: Partial<{
            keycode: number;
            group: number;
            level: number;
        }>);
    }


    /**
     * @gir-type Alias
     */
    type MonitorClass = typeof Monitor;

    /**
     * Defines the x and y coordinates of a point.
     * @gir-type Struct
     */
    class Point {
        static $gtype: GObject.GType<Point>;

        // Fields
        x: number;

        y: number;

        // Constructors

        constructor(properties?: Partial<{
            x: number;
            y: number;
        }>);
    }


    /**
     * A {@link Gdk.RGBA} is used to represent a (possibly translucent)
     * color, in a way that is compatible with cairo’s notion of color.
     * @gir-type Struct
     */
    class RGBA {
        static $gtype: GObject.GType<RGBA>;

        // Fields
        red: number;

        green: number;

        blue: number;

        alpha: number;

        // Constructors

        constructor(properties?: Partial<{
            red: number;
            green: number;
            blue: number;
            alpha: number;
        }>);

        // Methods
        /**
         * Makes a copy of a {@link Gdk.RGBA}.
         * 
         * The result must be freed through `gdk_rgba_free()`.
         * @returns A newly allocated {@link Gdk.RGBA}, with the same contents as `rgba`
         * @since 3.0
         */
        copy(): RGBA;

        /**
         * Compares two RGBA colors.
         * @param p2 another {@link Gdk.RGBA} pointer
         * @returns `true` if the two colors compare equal
         * @since 3.0
         */
        equal(p2: RGBA): boolean;

        /**
         * Frees a {@link Gdk.RGBA} created with `gdk_rgba_copy()`
         * @since 3.0
         */
        free(): void;

        /**
         * A hash function suitable for using for a hash
         * table that stores `GdkRGBAs`.
         * @returns The hash value for `p`
         * @since 3.0
         */
        hash(): number;

        /**
         * Parses a textual representation of a color, filling in
         * the `red`, `green`, `blue` and `alpha` fields of the `rgba` {@link Gdk.RGBA}.
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
         * @param spec the string specifying the color
         * @returns `true` if the parsing succeeded
         * @since 3.0
         */
        parse(spec: string): boolean;

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
         * the CSS3 colors module, and can be parsed by `gdk_rgba_parse()`.
         * 
         * Note that this string representation may lose some
         * precision, since “r”, “g” and “b” are represented as 8-bit
         * integers. If this is a concern, you should use a
         * different representation.
         * @returns A newly allocated text string
         * @since 3.0
         */
        to_string(): string;
    }


    /**
     * Defines the position and size of a rectangle. It is identical to
     * {@link cairo.RectangleInt}.
     * @gir-type Struct
     */
    class Rectangle {
        static $gtype: GObject.GType<Rectangle>;

        // Fields
        x: number;

        y: number;

        width: number;

        height: number;

        // Constructors

        constructor(properties?: Partial<{
            x: number;
            y: number;
            width: number;
            height: number;
        }>);

        // Methods
        /**
         * Checks if the two given rectangles are equal.
         * @param rect2 a {@link Gdk.Rectangle}
         * @returns `true` if the rectangles are equal.
         * @since 3.20
         */
        equal(rect2: Rectangle): boolean;

        /**
         * Calculates the intersection of two rectangles. It is allowed for
         * `dest` to be the same as either `src1` or `src2`. If the rectangles
         * do not intersect, `dest`’s width and height is set to 0 and its x
         * and y values are undefined. If you are only interested in whether
         * the rectangles intersect, but not in the intersecting area itself,
         * pass `null` for `dest`.
         * @param src2 a {@link Gdk.Rectangle}
         * @returns `true` if the rectangles intersect.
         */
        intersect(src2: Rectangle): [boolean, Rectangle | null];

        /**
         * Calculates the union of two rectangles.
         * The union of rectangles `src1` and `src2` is the smallest rectangle which
         * includes both `src1` and `src2` within it.
         * It is allowed for `dest` to be the same as either `src1` or `src2`.
         * 
         * Note that this function does not ignore 'empty' rectangles (ie. with
         * zero width or height).
         * @param src2 a {@link Gdk.Rectangle}
         */
        union(src2: Rectangle): Rectangle;
    }


    /**
     * A {@link Gdk.TimeCoord} stores a single event in a motion history.
     * @gir-type Struct
     */
    class TimeCoord {
        static $gtype: GObject.GType<TimeCoord>;

        // Fields
        time: number;

        axes: number[];

        // Constructors

        constructor(properties?: Partial<{
            time: number;
            axes: number[];
        }>);
    }


    /**
     * Attributes to use for a newly-created window.
     * @gir-type Struct
     */
    class WindowAttr {
        static $gtype: GObject.GType<WindowAttr>;

        // Fields
        title: string;

        event_mask: number;

        x: number;

        y: number;

        width: number;

        height: number;

        wclass: WindowWindowClass;

        visual: Visual;

        window_type: WindowType;

        cursor: Cursor;

        wmclass_name: string;

        wmclass_class: string;

        override_redirect: boolean;

        type_hint: WindowTypeHint;
    }


    /**
     * @gir-type Alias
     */
    type WindowClass = typeof Window;

    /**
     * @gir-type Struct
     */
    abstract class WindowRedirect {
        static $gtype: GObject.GType<WindowRedirect>;
    }


    /**
     * A {@link Gdk.Event} contains a union of all of the event types,
     * and allows access to the data fields in a number of ways.
     * 
     * The event type is always the first field in all of the event types, and
     * can always be accessed with the following code, no matter what type of
     * event it is:
     * 
     * ```c
     *   GdkEvent *event;
     *   GdkEventType type;
     * 
     *   type = event->type;
     * ```
     * 
     * 
     * To access other fields of the event, the pointer to the event
     * can be cast to the appropriate event type, or the union member
     * name can be used. For example if the event type is {@link Gdk.EventType.BUTTON_PRESS}
     * then the x coordinate of the button press can be accessed with:
     * 
     * ```c
     *   GdkEvent *event;
     *   gdouble x;
     * 
     *   x = ((GdkEventButton*)event)->x;
     * ```
     * 
     * or:
     * 
     * ```c
     *   GdkEvent *event;
     *   gdouble x;
     * 
     *   x = event->button.x;
     * ```
     * 
     * @gir-type Struct
     */
    class Event {
        static $gtype: GObject.GType<Event>;

        // Fields
        type: EventType;

        // Constructors
        constructor(type: EventType);

        static ["new"](type: EventType): Event;

        // Static methods
        /**
         * Checks all open displays for a {@link Gdk.Event} to process,to be processed
         * on, fetching events from the windowing system if necessary.
         * See `gdk_display_get_event()`.
         */
        static get(): Event | null;

        /**
         * Sets the function to call to handle all events from GDK.
         * 
         * Note that GTK+ uses this to install its own event handler, so it is
         * usually not useful for GTK+ applications. (Although an application
         * can call this function then call `gtk_main_do_event()` to pass
         * events to GTK+.)
         * @param func the function to call to handle events from GDK.
         */
        static handler_set(func: EventFunc): void;

        /**
         * If there is an event waiting in the event queue of some open
         * display, returns a copy of it. See `gdk_display_peek_event()`.
         */
        static peek(): Event | null;

        /**
         * Request more motion notifies if `event` is a motion notify hint event.
         * 
         * This function should be used instead of `gdk_window_get_pointer()` to
         * request further motion notifies, because it also works for extension
         * events where motion notifies are provided for devices other than the
         * core pointer. Coordinate extraction, processing and requesting more
         * motion events from a {@link Gdk.EventType.MOTION_NOTIFY} event usually works like this:
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
         * @param event a valid {@link Gdk.Event}
         * @since 2.12
         */
        static request_motions(event: EventMotion): void;

        // Methods
        /**
         * If both events contain X/Y information, this function will return `true`
         * and return in `angle` the relative angle from `event1` to `event2`. The rotation
         * direction for positive angles is from the positive X axis towards the positive
         * Y axis.
         * @param event2 second {@link Gdk.Event}
         * @returns `true` if the angle could be calculated.
         * @since 3.0
         */
        _get_angle(event2: Event): [boolean, number];

        /**
         * If both events contain X/Y information, the center of both coordinates
         * will be returned in `x` and `y`.
         * @param event2 second {@link Gdk.Event}
         * @returns `true` if the center could be calculated.
         * @since 3.0
         */
        _get_center(event2: Event): [boolean, number, number];

        /**
         * If both events have X/Y information, the distance between both coordinates
         * (as in a straight line going from `event1` to `event2`) will be returned.
         * @param event2 second {@link Gdk.Event}
         * @returns `true` if the distance could be calculated.
         * @since 3.0
         */
        _get_distance(event2: Event): [boolean, number];

        /**
         * Copies a {@link Gdk.Event}, copying or incrementing the reference count of the
         * resources associated with it (e.g. {@link Gdk.Window}’s and strings).
         * @returns a copy of `event`. The returned {@link Gdk.Event} should be freed with `gdk_event_free()`.
         */
        copy(): Event;

        /**
         * Frees a {@link Gdk.Event}, freeing or decrementing any resources associated with it.
         * Note that this function should only be called with events returned from
         * functions such as `gdk_event_peek()`, `gdk_event_get()`, `gdk_event_copy()`
         * and `gdk_event_new()`.
         */
        free(): void;

        /**
         * Extract the axis value for a particular axis use from
         * an event structure.
         * @param axis_use the axis use to look for
         * @returns `true` if the specified axis was found, otherwise `false`
         */
        get_axis(axis_use: AxisUse): [boolean, number];

        /**
         * Extract the button number from an event.
         * @returns `true` if the event delivered a button number
         * @since 3.2
         */
        get_button(): [boolean, number];

        /**
         * Extracts the click count from an event.
         * @returns `true` if the event delivered a click count
         * @since 3.2
         */
        get_click_count(): [boolean, number];

        /**
         * Extract the event window relative x/y coordinates from an event.
         * @returns `true` if the event delivered event window coordinates
         */
        get_coords(): [boolean, number, number];

        /**
         * If the event contains a “device” field, this function will return
         * it, else it will return `null`.
         * @returns a {@link Gdk.Device}, or `null`.
         * @since 3.0
         */
        get_device(): Device | null;

        /**
         * If the event was generated by a device that supports
         * different tools (eg. a tablet), this function will
         * return a {@link Gdk.DeviceTool} representing the tool that
         * caused the event. Otherwise, `null` will be returned.
         * 
         * Note: the {@link Gdk.DeviceTool}<!-- -->s will be constant during
         * the application lifetime, if settings must be stored
         * persistently across runs, see `gdk_device_tool_get_serial()`
         * @returns The current device tool, or `null`
         * @since 3.22
         */
        get_device_tool(): DeviceTool;

        /**
         * If `event` if of type {@link Gdk.EventType.TOUCH_BEGIN}, {@link Gdk.EventType.TOUCH_UPDATE},
         * {@link Gdk.EventType.TOUCH_END} or {@link Gdk.EventType.TOUCH_CANCEL}, returns the {@link Gdk.EventSequence}
         * to which the event belongs. Otherwise, return `null`.
         * @returns the event sequence that the event belongs to
         * @since 3.4
         */
        get_event_sequence(): EventSequence;

        /**
         * Retrieves the type of the event.
         * @returns a {@link Gdk.EventType}
         * @since 3.10
         */
        get_event_type(): EventType;

        /**
         * Extracts the hardware keycode from an event.
         * 
         * Also see `gdk_event_get_scancode()`.
         * @returns `true` if the event delivered a hardware keycode
         * @since 3.2
         */
        get_keycode(): [boolean, number];

        /**
         * Extracts the keyval from an event.
         * @returns `true` if the event delivered a key symbol
         * @since 3.2
         */
        get_keyval(): [boolean, number];

        /**
         * #event: a {@link Gdk.Event}
         * Returns whether this event is an 'emulated' pointer event (typically
         * from a touch event), as opposed to a real one.
         * @returns `true` if this event is emulated
         * @since 3.22
         */
        get_pointer_emulated(): boolean;

        /**
         * Extract the root window relative x/y coordinates from an event.
         * @returns `true` if the event delivered root window coordinates
         */
        get_root_coords(): [boolean, number, number];

        /**
         * Gets the keyboard low-level scancode of a key event.
         * 
         * This is usually hardware_keycode. On Windows this is the high
         * word of WM_KEY{DOWN,UP} lParam which contains the scancode and
         * some extended flags.
         * @returns The associated keyboard scancode or 0
         * @since 3.22
         */
        get_scancode(): number;

        /**
         * Returns the screen for the event. The screen is
         * typically the screen for `event->any.window`, but
         * for events such as mouse events, it is the screen
         * where the pointer was when the event occurs -
         * that is, the screen which has the root window
         * to which `event->motion.x_root` and
         * `event->motion.y_root` are relative.
         * @returns the screen for the event
         * @since 2.2
         */
        get_screen(): Screen;

        /**
         * Retrieves the scroll deltas from a {@link Gdk.Event}
         * 
         * See also: `gdk_event_get_scroll_direction()`
         * @returns `true` if the event contains smooth scroll information   and `false` otherwise
         * @since 3.4
         */
        get_scroll_deltas(): [boolean, number, number];

        /**
         * Extracts the scroll direction from an event.
         * 
         * If `event` is not of type {@link Gdk.EventType.SCROLL}, the contents of `direction`
         * are undefined.
         * 
         * If you wish to handle both discrete and smooth scrolling, you
         * should check the return value of this function, or of
         * `gdk_event_get_scroll_deltas()`; for instance:
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
         * @returns `true` if the event delivered a scroll direction   and `false` otherwise
         * @since 3.2
         */
        get_scroll_direction(): [boolean, ScrollDirection];

        /**
         * Returns the {@link Gdk.Seat} this event was generated for.
         * @returns The {@link Gdk.Seat} of this event
         * @since 3.20
         */
        get_seat(): Seat;

        /**
         * This function returns the hardware (slave) {@link Gdk.Device} that has
         * triggered the event, falling back to the virtual (master) device
         * (as in `gdk_event_get_device()`) if the event wasn’t caused by
         * interaction with a hardware device. This may happen for example
         * in synthesized crossing events after a {@link Gdk.Window} updates its
         * geometry or a grab is acquired/released.
         * 
         * If the event does not contain a device field, this function will
         * return `null`.
         * @returns a {@link Gdk.Device}, or `null`.
         * @since 3.0
         */
        get_source_device(): Device | null;

        /**
         * If the event contains a “state” field, puts that field in `state`. Otherwise
         * stores an empty state (0). Returns `true` if there was a state field
         * in the event. `event` may be `null`, in which case it’s treated
         * as if the event had no state field.
         * @returns `true` if there was a state field in the event
         */
        get_state(): [boolean, ModifierType];

        /**
         * Returns the time stamp from `event`, if there is one; otherwise
         * returns #GDK_CURRENT_TIME. If `event` is `null`, returns #GDK_CURRENT_TIME.
         * @returns time stamp field from `event`
         */
        get_time(): number;

        /**
         * Extracts the {@link Gdk.Window} associated with an event.
         * @returns The {@link Gdk.Window} associated with the event
         * @since 3.10
         */
        get_window(): Window;

        /**
         * Check whether a scroll event is a stop scroll event. Scroll sequences
         * with smooth scroll information may provide a stop scroll event once the
         * interaction with the device finishes, e.g. by lifting a finger. This
         * stop scroll event is the signal that a widget may trigger kinetic
         * scrolling based on the current velocity.
         * 
         * Stop scroll events always have a a delta of 0/0.
         * @returns `true` if the event is a scroll stop event
         * @since 3.20
         */
        is_scroll_stop_event(): boolean;

        /**
         * Appends a copy of the given event onto the front of the event
         * queue for event->any.window’s display, or the default event
         * queue if event->any.window is `null`. See `gdk_display_put_event()`.
         */
        put(): void;

        /**
         * Sets the device for `event` to `device`. The event must
         * have been allocated by GTK+, for instance, by
         * `gdk_event_copy()`.
         * @param device a {@link Gdk.Device}
         * @since 3.0
         */
        set_device(device: Device): void;

        /**
         * Sets the device tool for this event, should be rarely used.
         * @param tool tool to set on the event, or `null`
         * @since 3.22
         */
        set_device_tool(tool: DeviceTool | null): void;

        /**
         * Sets the screen for `event` to `screen`. The event must
         * have been allocated by GTK+, for instance, by
         * `gdk_event_copy()`.
         * @param screen a {@link Gdk.Screen}
         * @since 2.2
         */
        set_screen(screen: Screen): void;

        /**
         * Sets the slave device for `event` to `device`.
         * 
         * The event must have been allocated by GTK+,
         * for instance by `gdk_event_copy()`.
         * @param device a {@link Gdk.Device}
         * @since 3.0
         */
        set_source_device(device: Device): void;

        /**
         * This function returns whether a {@link Gdk.EventButton} should trigger a
         * context menu, according to platform conventions. The right mouse
         * button always triggers context menus. Additionally, if
         * `gdk_keymap_get_modifier_mask()` returns a non-0 mask for
         * {@link Gdk.ModifierIntent.CONTEXT_MENU}, then the left mouse button will
         * also trigger a context menu if this modifier is pressed.
         * 
         * This function should always be used instead of simply checking for
         * event->button == `GDK_BUTTON_SECONDARY`.
         * @returns `true` if the event should trigger a context menu.
         * @since 3.4
         */
        triggers_context_menu(): boolean;
    }


    namespace DevicePad {

        // Constructor properties interface
        interface ConstructorProps extends Device.ConstructorProps {}
    }

    export interface DevicePadNamespace {
        $gtype: GObject.GType<DevicePad>;
        prototype: DevicePad;
    }
    /**
     * {@link Gdk.DevicePad} is an interface implemented by devices of type
     * {@link Gdk.InputSource.TABLET_PAD}, it allows querying the features provided
     * by the pad device.
     * 
     * Tablet pads may contain one or more groups, each containing a subset
     * of the buttons/rings/strips available. `gdk_device_pad_get_n_groups()`
     * can be used to obtain the number of groups, `gdk_device_pad_get_n_features()`
     * and `gdk_device_pad_get_feature_group()` can be combined to find out the
     * number of buttons/rings/strips the device has, and how are they grouped.
     * 
     * Each of those groups have different modes, which may be used to map
     * each individual pad feature to multiple actions. Only one mode is
     * effective (current) for each given group, different groups may have
     * different current modes. The number of available modes in a group can
     * be found out through `gdk_device_pad_get_group_n_modes()`, and the current
     * mode for a given group will be notified through the {@link Gdk.EventPadGroupMode}
     * event.
     * @gir-type Interface
     */
    interface DevicePad extends Device {

        // Methods
        /**
         * Returns the group the given `feature` and `idx` belong to,
         * or -1 if feature/index do not exist in `pad`.
         * @param feature the feature type to get the group from
         * @param feature_idx the index of the feature to get the group from
         * @returns The group number of the queried pad feature.
         * @since 3.22
         */
        get_feature_group(feature: DevicePadFeature, feature_idx: number): number;

        /**
         * Returns the number of modes that `group` may have.
         * @param group_idx group to get the number of available modes from
         * @returns The number of modes available in `group`.
         * @since 3.22
         */
        get_group_n_modes(group_idx: number): number;

        /**
         * Returns the number of features a tablet pad has.
         * @param feature a pad feature
         * @returns The amount of elements of type `feature` that this pad has.
         * @since 3.22
         */
        get_n_features(feature: DevicePadFeature): number;

        /**
         * Returns the number of groups this pad device has. Pads have
         * at least one group. A pad group is a subcollection of
         * buttons/strip/rings that is affected collectively by a same
         * current mode.
         * @returns The number of button/ring/strip groups in the pad.
         * @since 3.22
         */
        get_n_groups(): number;
    }


    export const DevicePad: DevicePadNamespace & {
        new (): DevicePad; // This allows `obj instanceof DevicePad`
    };

    /**
     * Used to represent native events (XEvents for the X11
     * backend, MSGs for Win32).
     * @gir-type Alias
     */
    type XEvent = void;

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

export default Gdk;

// END
