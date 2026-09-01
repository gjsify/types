
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
import type PangoCairo from '@girs/pangocairo-1.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';

export namespace Gdk {

    /**
     * Gdk-4.0
     */


    /**
     * @gir-type Enum
     */
    export namespace AxisUse {
        export const $gtype: GObject.GType<AxisUse>;
    }

    /**
     * Defines how device axes are interpreted by GTK.
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
         * the axis is used as the scroll x delta
         */
        DELTA_X = 3,
        /**
         * the axis is used as the scroll y delta
         */
        DELTA_Y = 4,
        /**
         * the axis is used for pressure information.
         */
        PRESSURE = 5,
        /**
         * the axis is used for x tilt information.
         */
        XTILT = 6,
        /**
         * the axis is used for y tilt information.
         */
        YTILT = 7,
        /**
         * the axis is used for wheel information.
         */
        WHEEL = 8,
        /**
         * the axis is used for pen/tablet distance information
         */
        DISTANCE = 9,
        /**
         * the axis is used for pen rotation information
         */
        ROTATION = 10,
        /**
         * the axis is used for pen slider information
         */
        SLIDER = 11,
        /**
         * a constant equal to the numerically highest axis value.
         */
        LAST = 12,
    }


    /**
     * @gir-type Enum
     */
    export namespace CicpRange {
        export const $gtype: GObject.GType<CicpRange>;
    }

    /**
     * The values of this enumeration describe whether image data uses
     * the full range of 8-bit values.
     * 
     * In digital broadcasting, it is common to reserve the lowest and
     * highest values. Typically the allowed values for the narrow range
     * are 16-235 for Y and 16-240 for u,v (when dealing with YUV data).
     * @gir-type Enum
     * @since 4.16
     */
    enum CicpRange {
        /**
         * The values use the range of 16-235 (for Y) and 16-240 for u and v.
         */
        NARROW = 0,
        /**
         * The values use the full range.
         */
        FULL = 1,
    }


    /**
     * @gir-type Enum
     */
    export namespace ColorChannel {
        export const $gtype: GObject.GType<ColorChannel>;
    }

    /**
     * Enumerates the color channels of RGBA values as used in
     * `GdkColor` and OpenGL/Vulkan shaders.
     * 
     * Note that this is not the order of pixel values in Cairo
     * and {@link Gdk.MemoryFormat} can have many different orders.
     * @gir-type Enum
     * @since 4.22
     */
    enum ColorChannel {
        /**
         * The red color channel, aka 0
         */
        RED = 0,
        /**
         * The green color channel, aka 1
         */
        GREEN = 1,
        /**
         * The blue color channel, aka 2
         */
        BLUE = 2,
        /**
         * The alpha color channel, aka 3
         */
        ALPHA = 3,
    }


    /**
     * @gir-type Enum
     */
    export namespace CrossingMode {
        export const $gtype: GObject.GType<CrossingMode>;
    }

    /**
     * Specifies the crossing mode for enter and leave events.
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
         * crossing because a GTK grab is activated.
         */
        GTK_GRAB = 3,
        /**
         * crossing because a GTK grab is deactivated.
         */
        GTK_UNGRAB = 4,
        /**
         * crossing because a GTK widget changed
         *   state (e.g. sensitivity).
         */
        STATE_CHANGED = 5,
        /**
         * crossing because a touch sequence has begun,
         *   this event is synthetic as the pointer might have not left the surface.
         */
        TOUCH_BEGIN = 6,
        /**
         * crossing because a touch sequence has ended,
         *   this event is synthetic as the pointer might have not left the surface.
         */
        TOUCH_END = 7,
        /**
         * crossing because of a device switch (i.e.
         *   a mouse taking control of the pointer after a touch device), this event
         *   is synthetic as the pointer didn’t leave the surface.
         */
        DEVICE_SWITCH = 8,
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
     * Error enumeration for {@link Gdk.DmabufTexture}.
     * @gir-type Struct
     */
    class DmabufError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields
        /**
         * Dmabuf support is not available, because the OS
         *   is not Linux, or it was explicitly disabled at compile- or runtime
         */
        static NOT_AVAILABLE: number;

        /**
         * The requested format is not supported
         */
        static UNSUPPORTED_FORMAT: number;

        /**
         * GTK failed to create the resource for other
         *   reasons
         */
        static CREATION_FAILED: number;

        // Constructors
        constructor(options: { message: string; code: number });

        // Static methods
        /**
         * Registers an error quark for {@link Gdk.DmabufTexture} errors.
         */
        static quark(): GLib.Quark;
    }


    /**
     * @gir-type Enum
     */
    export namespace DragCancelReason {
        export const $gtype: GObject.GType<DragCancelReason>;
    }

    /**
     * Used in {@link Gdk.Drag} to the reason of a cancelled DND operation.
     * @gir-type Enum
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
    export namespace EventType {
        export const $gtype: GObject.GType<EventType>;
    }

    /**
     * Specifies the type of the event.
     * @gir-type Enum
     */
    enum EventType {
        /**
         * the window manager has requested that the toplevel surface be
         *   hidden or destroyed, usually when the user clicks on a special icon in the
         *   title bar.
         */
        DELETE = 0,
        /**
         * the pointer (usually a mouse) has moved.
         */
        MOTION_NOTIFY = 1,
        /**
         * a mouse button has been pressed.
         */
        BUTTON_PRESS = 2,
        /**
         * a mouse button has been released.
         */
        BUTTON_RELEASE = 3,
        /**
         * a key has been pressed.
         */
        KEY_PRESS = 4,
        /**
         * a key has been released.
         */
        KEY_RELEASE = 5,
        /**
         * the pointer has entered the surface.
         */
        ENTER_NOTIFY = 6,
        /**
         * the pointer has left the surface.
         */
        LEAVE_NOTIFY = 7,
        /**
         * the keyboard focus has entered or left the surface.
         */
        FOCUS_CHANGE = 8,
        /**
         * an input device has moved into contact with a sensing
         *   surface (e.g. a touchscreen or graphics tablet).
         */
        PROXIMITY_IN = 9,
        /**
         * an input device has moved out of contact with a sensing
         *   surface.
         */
        PROXIMITY_OUT = 10,
        /**
         * the mouse has entered the surface while a drag is in progress.
         */
        DRAG_ENTER = 11,
        /**
         * the mouse has left the surface while a drag is in progress.
         */
        DRAG_LEAVE = 12,
        /**
         * the mouse has moved in the surface while a drag is in
         *   progress.
         */
        DRAG_MOTION = 13,
        /**
         * a drop operation onto the surface has started.
         */
        DROP_START = 14,
        /**
         * the scroll wheel was turned
         */
        SCROLL = 15,
        /**
         * a pointer or keyboard grab was broken.
         */
        GRAB_BROKEN = 16,
        /**
         * A new touch event sequence has just started.
         */
        TOUCH_BEGIN = 17,
        /**
         * A touch event sequence has been updated.
         */
        TOUCH_UPDATE = 18,
        /**
         * A touch event sequence has finished.
         */
        TOUCH_END = 19,
        /**
         * A touch event sequence has been canceled.
         */
        TOUCH_CANCEL = 20,
        /**
         * A touchpad swipe gesture event, the current state
         *   is determined by its phase field.
         */
        TOUCHPAD_SWIPE = 21,
        /**
         * A touchpad pinch gesture event, the current state
         *   is determined by its phase field.
         */
        TOUCHPAD_PINCH = 22,
        /**
         * A tablet pad button press event.
         */
        PAD_BUTTON_PRESS = 23,
        /**
         * A tablet pad button release event.
         */
        PAD_BUTTON_RELEASE = 24,
        /**
         * A tablet pad axis event from a "ring".
         */
        PAD_RING = 25,
        /**
         * A tablet pad axis event from a "strip".
         */
        PAD_STRIP = 26,
        /**
         * A tablet pad group mode change.
         */
        PAD_GROUP_MODE = 27,
        /**
         * A touchpad hold gesture event, the current state is determined by its phase
         * field.
         * @since 4.6
         */
        TOUCHPAD_HOLD = 28,
        /**
         * A tablet pad axis event from a "dial".
         */
        PAD_DIAL = 29,
        /**
         * marks the end of the GdkEventType enumeration.
         */
        EVENT_LAST = 30,
    }


    /**
     * @gir-type Enum
     */
    export namespace FrameResult {
        export const $gtype: GObject.GType<FrameResult>;
    }

    /**
     * An enumeration describing the process of rendering a frame.
     * Rendering a frame starts with the frame clock cycle and then follows
     * the rendered frame (if there was one) through the display server
     * until it appears on screen.
     * 
     * It is relevant in particular for {@link Gdk.FrameTimings} which
     * may still be waiting for values to be filled in.
     * @gir-type Enum
     * @since 4.24
     */
    enum FrameResult {
        /**
         * The frame is currently being prepared and rendered by GTK.
         * This is the initial state.
         * @since 4.24
         */
        PREPARING = 0,
        /**
         * GTK has determined that nothing needs to be rendered because
         * there are no visual changes. No rendering will be submitted to
         * the display server and because of that no information will
         * be forthcoming from the display server.
         * 
         * The frame is complete.
         * @since 4.24
         */
        SKIPPED = 1,
        /**
         * GTK has determined that nothing needs to be rendered because
         * there are no visual changes. This information has been submitted
         * to the display server. The presentation time has been updated to
         * reflect when this frame would have been displayed.
         * 
         * The frame is complete.
         * @since 4.24
         */
        EMPTY = 2,
        /**
         * A frame has been drawn and submitted to the display server, but
         * the display server will not provide any further feedback about when
         * or how the frame is going to be displayed.
         * 
         * The frame is complete.
         * @since 4.24
         */
        SUBMITTED = 3,
        /**
         * The frame has been drawn and submitted to the display server, but the
         * display server has not yet replied what is going to happen with the
         * rendered image.
         * @since 4.24
         */
        OUTSTANDING = 4,
        /**
         * The frame has been drawn and submitted to the display server, but the
         * display server has not displayed it. No presentation time will be available.
         * 
         * The frame is complete.
         * @since 4.24
         */
        DISCARDED = 5,
        /**
         * The frame has been drawn and submitted to the display server, and the
         * display server has rendered it and displayed the result. The presentation
         * time is accurately reflecting when that happened.
         * 
         * The frame is complete.
         * @since 4.24
         */
        PRESENTED = 6,
    }


    /**
     * @gir-type Enum
     */
    export namespace FullscreenMode {
        export const $gtype: GObject.GType<FullscreenMode>;
    }

    /**
     * Indicates which monitor a surface should span over when in fullscreen mode.
     * @gir-type Enum
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

        /**
         * The shader compilation failed
         */
        static COMPILATION_FAILED: number;

        /**
         * The shader linking failed
         */
        static LINK_FAILED: number;

        // Constructors
        constructor(options: { message: string; code: number });

        // Static methods
        /**
         * Registers an error quark for {@link Gdk.GLContext} errors.
         */
        static quark(): GLib.Quark;
    }


    /**
     * @gir-type Enum
     */
    export namespace Gravity {
        export const $gtype: GObject.GType<Gravity>;
    }

    /**
     * Defines the reference point of a surface and is used in {@link Gdk.PopupLayout}.
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
         * the reference point is at the center of the surface.
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
         *  surface itself, ignoring window manager decorations.
         */
        STATIC = 10,
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
         *   pointer, even if it is something else, such as a trackball.)
         */
        MOUSE = 0,
        /**
         * the device is a stylus of a graphics tablet or similar device.
         */
        PEN = 1,
        /**
         * the device is a keyboard.
         */
        KEYBOARD = 2,
        /**
         * the device is a direct-input touch device, such
         *   as a touchscreen or tablet
         */
        TOUCHSCREEN = 3,
        /**
         * the device is an indirect touch device, such
         *   as a touchpad
         */
        TOUCHPAD = 4,
        /**
         * the device is a trackpoint
         */
        TRACKPOINT = 5,
        /**
         * the device is a "pad", a collection of buttons,
         *   rings and strips found in drawing tablets
         */
        TABLET_PAD = 6,
    }


    /**
     * @gir-type Enum
     */
    export namespace KeyMatch {
        export const $gtype: GObject.GType<KeyMatch>;
    }

    /**
     * Describes how well an event matches a given keyval and modifiers.
     * 
     * {@link Gdk.KeyMatch} values are returned by {@link Gdk.KeyEvent.matches}.
     * @gir-type Enum
     */
    enum KeyMatch {
        /**
         * The key event does not match
         */
        NONE = 0,
        /**
         * The key event matches if keyboard state
         *   (specifically, the currently active group) is ignored
         */
        PARTIAL = 1,
        /**
         * The key event matches
         */
        EXACT = 2,
    }


    /**
     * @gir-type Enum
     */
    export namespace MemoryFormat {
        export const $gtype: GObject.GType<MemoryFormat>;
    }

    /**
     * Describes formats that image data can have in memory.
     * 
     * It describes formats by listing the contents of the memory passed to it.
     * So `GDK_MEMORY_A8R8G8B8` will be 1 byte (8 bits) of alpha, followed by a
     * byte each of red, green and blue. It is not endian-dependent, so
     * `CAIRO_FORMAT_ARGB32` is represented by different `GdkMemoryFormats`
     * on architectures with different endiannesses.
     * 
     * # A note on naming
     * 
     * The format names are roughly modelled after
     * [VkFormat](https://www.khronos.org/registry/vulkan/specs/1.0/html/vkspec.html#VkFormat).
     * A name follows `GDK_MEMORY_<CHANNELS>_<DATA_TYPE>_<SUBSAMPLING> <PREMULTIPLIED>`
     * where CHANNELS describe how the RGBA channels are layed out in memory, with an
     * X denoting padding. DATA_TYPE is unsigned normalized integer if not present, or
     * otherwise FLOAT. The optional SUBSAMPLING defines the subsampling method used.
     * The optional ENDIAN term describes the endianness if it is not
     * host-endian. Finally, an optional PREMULTIPLIED term indicates that the color
     * channels are premultiplied with the alpha value, if it is omitted, the data is
     * not premultiplied or there is no alpha channel.
     * 
     * The CHANNELS are given as a list of planes seperated by underscores where
     * each plane is split into multiple elements describing one or more bytes of memory.
     * Each element is given as the list of channels folowed by the amount of bits taken
     * up.
     * 
     * So the fictional format `RGB565_A8_PREMULTIPLIED` would describe a format with 2
     * planes where the first plane is an unsigned 16 bit integer containing the RGB
     * channels with 5, 6, and 5 bits respectively while the 2nd plane contains the
     * alpha channel as an unisnged 8bit integer.
     * @gir-type Enum
     */
    enum MemoryFormat {
        /**
         * 4 bytes; for blue, green, red, alpha.
         *   The color values are premultiplied with the alpha value.
         */
        B8G8R8A8_PREMULTIPLIED = 0,
        /**
         * 4 bytes; for alpha, red, green, blue.
         *   The color values are premultiplied with the alpha value.
         */
        A8R8G8B8_PREMULTIPLIED = 1,
        /**
         * 4 bytes; for red, green, blue, alpha
         *   The color values are premultiplied with the alpha value.
         */
        R8G8B8A8_PREMULTIPLIED = 2,
        /**
         * 4 bytes; for blue, green, red, alpha.
         */
        B8G8R8A8 = 3,
        /**
         * 4 bytes; for alpha, red, green, blue.
         */
        A8R8G8B8 = 4,
        /**
         * 4 bytes; for red, green, blue, alpha.
         */
        R8G8B8A8 = 5,
        /**
         * 4 bytes; for alpha, blue, green, red.
         */
        A8B8G8R8 = 6,
        /**
         * 3 bytes; for red, green, blue. The data is opaque.
         */
        R8G8B8 = 7,
        /**
         * 3 bytes; for blue, green, red. The data is opaque.
         */
        B8G8R8 = 8,
        /**
         * 3 guint16 values; for red, green, blue.
         * @since 4.6
         */
        R16G16B16 = 9,
        /**
         * 4 guint16 values; for red, green, blue, alpha. The color values are
         * premultiplied with the alpha value.
         * @since 4.6
         */
        R16G16B16A16_PREMULTIPLIED = 10,
        /**
         * 4 guint16 values; for red, green, blue, alpha.
         * @since 4.6
         */
        R16G16B16A16 = 11,
        /**
         * 3 half-float values; for red, green, blue. The data is opaque.
         * @since 4.6
         */
        R16G16B16_FLOAT = 12,
        /**
         * 4 half-float values; for red, green, blue and alpha. The color values are
         * premultiplied with the alpha value.
         * @since 4.6
         */
        R16G16B16A16_FLOAT_PREMULTIPLIED = 13,
        /**
         * 4 half-float values; for red, green, blue and alpha.
         * @since 4.6
         */
        R16G16B16A16_FLOAT = 14,
        /**
         * 3 float values; for red, green, blue.
         */
        R32G32B32_FLOAT = 15,
        /**
         * 4 float values; for red, green, blue and alpha. The color values are
         * premultiplied with the alpha value.
         * @since 4.6
         */
        R32G32B32A32_FLOAT_PREMULTIPLIED = 16,
        /**
         * 4 float values; for red, green, blue and alpha.
         * @since 4.6
         */
        R32G32B32A32_FLOAT = 17,
        /**
         * 2 bytes; for grayscale, alpha. The color values are premultiplied with the
         * alpha value.
         * @since 4.12
         */
        G8A8_PREMULTIPLIED = 18,
        /**
         * 2 bytes; for grayscale, alpha.
         * @since 4.12
         */
        G8A8 = 19,
        /**
         * One byte; for grayscale. The data is opaque.
         * @since 4.12
         */
        G8 = 20,
        /**
         * 2 guint16 values; for grayscale, alpha. The color values are premultiplied
         * with the alpha value.
         * @since 4.12
         */
        G16A16_PREMULTIPLIED = 21,
        /**
         * 2 guint16 values; for grayscale, alpha.
         * @since 4.12
         */
        G16A16 = 22,
        /**
         * One guint16 value; for grayscale. The data is opaque.
         * @since 4.12
         */
        G16 = 23,
        /**
         * One byte; for alpha.
         * @since 4.12
         */
        A8 = 24,
        /**
         * One guint16 value; for alpha.
         * @since 4.12
         */
        A16 = 25,
        /**
         * One half-float value; for alpha.
         * @since 4.12
         */
        A16_FLOAT = 26,
        /**
         * One float value; for alpha.
         * @since 4.12
         */
        A32_FLOAT = 27,
        /**
         * 4 bytes; for alpha, blue, green, red, The color values are premultiplied with
         * the alpha value.
         * @since 4.14
         */
        A8B8G8R8_PREMULTIPLIED = 28,
        /**
         * 4 bytes; for blue, green, red, unused.
         * @since 4.14
         */
        B8G8R8X8 = 29,
        /**
         * 4 bytes; for unused, red, green, blue.
         * @since 4.14
         */
        X8R8G8B8 = 30,
        /**
         * 4 bytes; for red, green, blue, unused.
         * @since 4.14
         */
        R8G8B8X8 = 31,
        /**
         * 4 bytes; for unused, blue, green, red.
         * @since 4.14
         */
        X8B8G8R8 = 32,
        /**
         * Multiplane format with 2 planes.
         * 
         * The first plane contains the first channel, usually containing
         * luma values.
         * The second plane with interleaved chroma values, Cb followed by Cr.
         * Subsampled in both the X and Y direction.
         * 
         * Commonly known by the fourcc "NV12".
         * @since 4.20
         */
        G8_B8R8_420 = 33,
        /**
         * Multiplane format with 2 planes.
         * 
         * The first plane contains the first channel, usually containing
         * luma values.
         * The second plane with interleaved chroma values, Cr followed by Cb.
         * Subsampled in both the X and Y direction.
         * 
         * Commonly known by the fourcc "NV21".
         * @since 4.20
         */
        G8_R8B8_420 = 34,
        /**
         * Multiplane format with 2 planes.
         * 
         * The first plane contains the first channel, usually containing
         * luma values.
         * The second plane with interleaved chroma values, Cb followed by Cr.
         * Subsampled in the X direction.
         * 
         * Commonly known by the fourcc "NV16".
         * @since 4.20
         */
        G8_B8R8_422 = 35,
        /**
         * Multiplane format with 2 planes.
         * 
         * The first plane contains the first channel, usually containing
         * luma values.
         * The second plane with interleaved chroma values, Cr followed by Cb.
         * Subsampled in the X direction.
         * 
         * Commonly known by the fourcc "NV61".
         * @since 4.20
         */
        G8_R8B8_422 = 36,
        /**
         * Multiplane format with 2 planes.
         * 
         * The first plane contains the first channel, usually containing
         * luma values.
         * The second plane with interleaved chroma values, Cb followed by Cr.
         * This format is not subsampled.
         * 
         * Commonly known by the fourcc "NV24".
         * @since 4.20
         */
        G8_B8R8_444 = 37,
        /**
         * Multiplane format with 2 planes.
         * 
         * The first plane contains the first channel, usually containing
         * luma values.
         * The second plane with interleaved chroma values, Cr followed by Cb.
         * This format is not subsampled.
         * 
         * Commonly known by the fourcc "NV42".
         * @since 4.20
         */
        G8_R8B8_444 = 38,
        /**
         * Multiplane format with 2 planes.
         * 
         * Each channel is a 16 bit integer, but only the highest 10 bits are used.
         * 
         * The first plane contains the first channel, usually containing
         * luma values.
         * The second plane with interleaved chroma values, Cr followed by Cb.
         * This format is not subsampled.
         * 
         * Commonly known by the fourcc "P010".
         * @since 4.20
         */
        G10X6_B10X6R10X6_420 = 39,
        /**
         * Multiplane format with 2 planes.
         * 
         * Each channel is a 16 bit integer, but only the highest 10 bits are used.
         * 
         * The first plane contains the first channel, usually containing
         * luma values.
         * The second plane with interleaved chroma values, Cr followed by Cb.
         * This format is not subsampled.
         * 
         * Commonly known by the fourcc "P012".
         * @since 4.20
         */
        G12X4_B12X4R12X4_420 = 40,
        /**
         * Multiplane format with 2 planes.
         * 
         * Each channel is a 16 bit integer.
         * 
         * The first plane contains the first channel, usually containing
         * luma values.
         * The second plane with interleaved chroma values, Cr followed by Cb.
         * This format is not subsampled.
         * 
         * Commonly known by the fourcc "P016".
         * @since 4.20
         */
        G16_B16R16_420 = 41,
        /**
         * Multiplane format with 3 planes.
         * 
         * Each channel is a 8 bit integer.
         * 
         * The first plane usually contains the luma channel. It is mapped
         * into the 2nd channel.
         * 
         * The second plane usually contains the first chroma chanel.
         * Subsampled in both the X and Y direction with 4:1 ratio. It is
         * mapped into the 3rd channel.
         * 
         * The third plane usually contains the second chroma channel.
         * Subsampled in both the X and Y direction with 4:1 ratio. It is
         * mapped into the 1st channel.
         * 
         * Commonly known by the fourcc "YUV410".
         * @since 4.20
         */
        G8_B8_R8_410 = 42,
        /**
         * Multiplane format with 3 planes.
         * 
         * Each channel is a 8 bit integer.
         * 
         * The first plane usually contains the luma channel. It is mapped
         * into the 2nd channel.
         * 
         * The second plane usually contains the second chroma chanel.
         * Subsampled in both the X and Y direction with 4:1 ratio. It is
         * mapped into the 1st channel.
         * 
         * The third plane usually contains the first chroma channel.
         * Subsampled in both the X and Y direction with 4:1 ratio. It is
         * mapped into the 3rd channel.
         * 
         * Commonly known by the fourcc "YVU410".
         * @since 4.20
         */
        G8_R8_B8_410 = 43,
        /**
         * Multiplane format with 3 planes.
         * 
         * Each channel is a 8 bit integer.
         * 
         * The first plane usually contains the luma channel. It is mapped
         * into the 2nd channel.
         * 
         * The second plane usually contains the first chroma chanel.
         * Subsampled in the X direction with 4:1 ratio. It is
         * mapped into the 3rd channel.
         * 
         * The third plane usually contains the second chroma channel.
         * Subsampled in the X direction with 4:1 ratio. It is
         * mapped into the 1st channel.
         * 
         * Commonly known by the fourcc "YUV411".
         * @since 4.20
         */
        G8_B8_R8_411 = 44,
        /**
         * Multiplane format with 3 planes.
         * 
         * Each channel is a 8 bit integer.
         * 
         * The first plane usually contains the luma channel. It is mapped
         * into the 2nd channel.
         * 
         * The second plane usually contains the second chroma chanel.
         * Subsampled in the X direction with 4:1 ratio. It is
         * mapped into the 1st channel.
         * 
         * The third plane usually contains the first chroma channel.
         * Subsampled in the X direction with 4:1 ratio. It is
         * mapped into the 3rd channel.
         * 
         * Commonly known by the fourcc "YVU411".
         * @since 4.20
         */
        G8_R8_B8_411 = 45,
        /**
         * Multiplane format with 3 planes.
         * 
         * Each channel is a 8 bit integer.
         * 
         * The first plane usually contains the luma channel. It is mapped
         * into the 2nd channel.
         * 
         * The second plane usually contains the first chroma chanel.
         * Subsampled in both the X and Y direction. It is mapped into the
         * 3rd channel.
         * 
         * The third plane usually contains the second chroma channel.
         * Subsampled in both the X and Y direction. It is mapped into the
         * 1st channel.
         * 
         * Commonly known by the fourcc "YUV420".
         * @since 4.20
         */
        G8_B8_R8_420 = 46,
        /**
         * Multiplane format with 3 planes.
         * 
         * Each channel is a 8 bit integer.
         * 
         * The first plane usually contains the luma channel. It is mapped
         * into the 2nd channel.
         * 
         * The second plane usually contains the second chroma chanel.
         * Subsampled in both the X and Y direction. It is mapped into the
         * 1st channel.
         * 
         * The third plane usually contains the first chroma channel.
         * Subsampled in both the X and Y direction. It is mapped into the
         * 3rd channel.
         * 
         * Commonly known by the fourcc "YVU420".
         * @since 4.20
         */
        G8_R8_B8_420 = 47,
        /**
         * Multiplane format with 3 planes.
         * 
         * Each channel is a 8 bit integer.
         * 
         * The first plane usually contains the luma channel. It is mapped
         * into the 2nd channel.
         * 
         * The second plane usually contains the first chroma chanel.
         * Subsampled in the X direction. It is mapped into the 3rd channel.
         * 
         * The third plane usually contains the second chroma channel.
         * Subsampled in the X direction. It is mapped into the 1st channel.
         * 
         * Commonly known by the fourcc "YUV422".
         * @since 4.20
         */
        G8_B8_R8_422 = 48,
        /**
         * Multiplane format with 3 planes.
         * 
         * Each channel is a 8 bit integer.
         * 
         * The first plane usually contains the luma channel. It is mapped
         * into the 2nd channel.
         * 
         * The second plane usually contains the second chroma chanel.
         * Subsampled in the X direction. It is mapped into the 1st channel.
         * 
         * The third plane usually contains the first chroma channel.
         * Subsampled in the X direction. It is mapped into the 3rd channel.
         * 
         * Commonly known by the fourcc "YVU422".
         * @since 4.20
         */
        G8_R8_B8_422 = 49,
        /**
         * Multiplane format with 3 planes.
         * 
         * Each channel is a 8 bit integer.
         * 
         * The first plane usually contains the luma channel. It is mapped
         * into the 2nd channel.
         * 
         * The second plane usually contains the first chroma chanel. It is
         * mapped into the 3rd channel.
         * 
         * The third plane usually contains the second chroma channel. It is
         * mapped into the 1st channel.
         * 
         * Commonly known by the fourcc "YUV444".
         * @since 4.20
         */
        G8_B8_R8_444 = 50,
        /**
         * Multiplane format with 3 planes.
         * 
         * Each channel is a 8 bit integer.
         * 
         * The first plane usually contains the luma channel. It is mapped
         * into the 2nd channel.
         * 
         * The second plane usually contains the second chroma chanel.
         * Subsampled in the X direction. It is mapped into the 1st channel.
         * 
         * The third plane usually contains the first chroma channel.
         * Subsampled in the X direction. It is mapped into the 3rd channel.
         * 
         * Commonly known by the fourcc "YVU444".
         * @since 4.20
         */
        G8_R8_B8_444 = 51,
        /**
         * Packed format with subsampled channels.
         * 
         * Each channel is a 8 bit integer. The red and blue/chroma channels
         * are subsampled and interleaved with the green/luma channel.
         * 
         * Each block contains 2 pixels, so the width must be a multiple of
         * 2.
         * 
         * Commonly known by the fourcc "YUYV".
         * @since 4.20
         */
        G8B8G8R8_422 = 52,
        /**
         * Packed format with subsampled channels.
         * 
         * Each channel is a 8 bit integer. The red and blue/chroma channels
         * are subsampled and interleaved with the green/luma channel.
         * 
         * Each block contains 2 pixels, so the width must be a multiple of
         * 2.
         * 
         * Commonly known by the fourcc "YVYU".
         * @since 4.20
         */
        G8R8G8B8_422 = 53,
        /**
         * Packed format with subsampled channels.
         * 
         * Each channel is a 8 bit integer. The red and blue/chroma channels
         * are subsampled and interleaved with the green/luma channel.
         * 
         * Each block contains 2 pixels, so the width must be a multiple of
         * 2.
         * 
         * Commonly known by the fourcc "VYUY".
         * @since 4.20
         */
        R8G8B8G8_422 = 54,
        /**
         * Packed format with subsampled channels.
         * 
         * Each channel is a 8 bit integer. The red and blue/chroma channels
         * are subsampled and interleaved with the green/luma channel.
         * 
         * Each block contains 2 pixels, so the width must be a multiple of
         * 2.
         * 
         * Commonly known by the fourcc "UYVY".
         * @since 4.20
         */
        B8G8R8G8_422 = 55,
        /**
         * Multiplane format with 3 planes.
         * 
         * Each channel is a 16 bit integer.
         * 
         * Only the 10 lower bits are used. The remaining ones must be set to 0 by the
         * producer.
         * 
         * The first plane usually contains the luma channel. It is mapped
         * into the 2nd channel.
         * 
         * The second plane usually contains the first chroma chanel.
         * Subsampled in both the X and Y direction. It is mapped into the
         * 3rd channel.
         * 
         * The third plane usually contains the second chroma channel.
         * Subsampled in both the X and Y direction. It is mapped into the
         * 1st channel.
         * 
         * Commonly known by the fourcc "S010".
         * @since 4.20
         */
        X6G10_X6B10_X6R10_420 = 56,
        /**
         * Multiplane format with 3 planes.
         * 
         * Each channel is a 16 bit integer.
         * 
         * Only the 10 lower bits are used. The remaining ones must be set to 0 by the
         * producer.
         * 
         * The first plane usually contains the luma channel. It is mapped
         * into the 2nd channel.
         * 
         * The second plane usually contains the first chroma chanel.
         * Subsampled in the X direction. It is mapped into the 3rd channel.
         * 
         * The third plane usually contains the second chroma channel.
         * Subsampled in the X direction. It is mapped into the 1st channel.
         * 
         * Commonly known by the fourcc "S210".
         * @since 4.20
         */
        X6G10_X6B10_X6R10_422 = 57,
        /**
         * Multiplane format with 3 planes.
         * 
         * Each channel is a 16 bit integer.
         * 
         * Only the 10 lower bits are used. The remaining ones must be set to 0 by the
         * producer.
         * 
         * The first plane usually contains the luma channel. It is mapped
         * into the 2nd channel.
         * 
         * The second plane usually contains the first chroma chanel. It is
         * mapped into the 3rd channel.
         * 
         * The third plane usually contains the second chroma channel. It is
         * mapped into the 1st channel.
         * 
         * Commonly known by the fourcc "S410".
         * @since 4.20
         */
        X6G10_X6B10_X6R10_444 = 58,
        /**
         * Multiplane format with 3 planes.
         * 
         * Each channel is a 16 bit integer.
         * 
         * Only the 12 lower bits are used. The remaining ones must be set to 0 by the
         * producer.
         * 
         * The first plane usually contains the luma channel. It is mapped
         * into the 2nd channel.
         * 
         * The second plane usually contains the first chroma chanel.
         * Subsampled in both the X and Y direction. It is mapped into the
         * 3rd channel.
         * 
         * The third plane usually contains the second chroma channel.
         * Subsampled in both the X and Y direction. It is mapped into the
         * 1st channel.
         * 
         * Commonly known by the fourcc "S012".
         * @since 4.20
         */
        X4G12_X4B12_X4R12_420 = 59,
        /**
         * Multiplane format with 3 planes.
         * 
         * Each channel is a 16 bit integer.
         * 
         * Only the 12 lower bits are used. The remaining ones must be set to 0 by the
         * producer.
         * 
         * The first plane usually contains the luma channel. It is mapped
         * into the 2nd channel.
         * 
         * The second plane usually contains the first chroma chanel.
         * Subsampled in the X direction. It is mapped into the 3rd channel.
         * 
         * The third plane usually contains the second chroma channel.
         * Subsampled in the X direction. It is mapped into the 1st channel.
         * 
         * Commonly known by the fourcc "S212".
         * @since 4.20
         */
        X4G12_X4B12_X4R12_422 = 60,
        /**
         * Multiplane format with 3 planes.
         * 
         * Each channel is a 16 bit integer.
         * 
         * Only the 12 lower bits are used. The remaining ones must be set to 0 by the
         * producer.
         * 
         * The first plane usually contains the luma channel. It is mapped
         * into the 2nd channel.
         * 
         * The second plane usually contains the first chroma chanel. It is
         * mapped into the 3rd channel.
         * 
         * The third plane usually contains the second chroma channel. It is
         * mapped into the 1st channel.
         * 
         * Commonly known by the fourcc "S412".
         * @since 4.20
         */
        X4G12_X4B12_X4R12_444 = 61,
        /**
         * Multiplane format with 3 planes.
         * 
         * Each channel is a 16 bit integer.
         * 
         * The first plane usually contains the luma channel. It is mapped
         * into the 2nd channel.
         * 
         * The second plane usually contains the first chroma chanel.
         * Subsampled in both the X and Y direction. It is mapped into the
         * 3rd channel.
         * 
         * The third plane usually contains the second chroma channel.
         * Subsampled in both the X and Y direction. It is mapped into the
         * 1st channel.
         * 
         * Commonly known by the fourcc "S016".
         * @since 4.20
         */
        G16_B16_R16_420 = 62,
        /**
         * Multiplane format with 3 planes.
         * 
         * Each channel is a 16 bit integer.
         * 
         * The first plane usually contains the luma channel. It is mapped
         * into the 2nd channel.
         * 
         * The second plane usually contains the first chroma chanel.
         * Subsampled in the X direction. It is mapped into the 3rd channel.
         * 
         * The third plane usually contains the second chroma channel.
         * Subsampled in the X direction. It is mapped into the 1st channel.
         * 
         * Commonly known by the fourcc "S216".
         * @since 4.20
         */
        G16_B16_R16_422 = 63,
        /**
         * Multiplane format with 3 planes.
         * 
         * Each channel is a 16 bit integer.
         * 
         * The first plane usually contains the luma channel. It is mapped
         * into the 2nd channel.
         * 
         * The second plane usually contains the first chroma chanel. It is
         * mapped into the 3rd channel.
         * 
         * The third plane usually contains the second chroma channel. It is
         * mapped into the 1st channel.
         * 
         * Commonly known by the fourcc "S416".
         * @since 4.20
         */
        G16_B16_R16_444 = 64,
        /**
         * 4 bytes per pixel
         * 
         * Bits 31..30 contain the alpha channel, 29..20 red, 19..10 green
         * and 9..0 blue.
         * 
         * The color values are premultiplied with the alpha value.
         * @since 4.24
         */
        ARGB2101010_PREMULTIPLIED = 65,
        /**
         * 4 bytes per pixel
         * 
         * Bits 31..30 contain the alpha channel, 29..20 red, 19..10 green
         * and 9..0 blue.
         * @since 4.24
         */
        ARGB2101010 = 66,
        /**
         * 4 bytes per pixel
         * 
         * Bits 31..30 are padding, bits 29..20 contain red, 19..10 green
         * and 9..0 blue.
         * 
         * The format is opaque.
         * @since 4.24
         */
        XRGB2101010 = 67,
        /**
         * 4 bytes per pixel
         * 
         * Bits 31..30 contain the alpha channel, 29..20 blue, 19..10 green
         * and 9..0 red.
         * 
         * The color values are premultiplied with the alpha value.
         * @since 4.24
         */
        ABGR2101010_PREMULTIPLIED = 68,
        /**
         * 4 bytes per pixel
         * 
         * Bits 31..30 contain the alpha channel, 29..20 blue, 19..10 green
         * and 9..0 red.
         * @since 4.24
         */
        ABGR2101010 = 69,
        /**
         * 4 bytes per pixel
         * 
         * Bits 31..30 are padding, bits 29..20 contain blue, 19..10 green
         * and 9..0 red.
         * 
         * The format is opaque.
         * @since 4.24
         */
        XBGR2101010 = 70,
        /**
         * The number of formats. This value will change as
         *   more formats get added, so do not rely on its concrete integer.
         */
        N_FORMATS = 71,
    }


    /**
     * @gir-type Enum
     */
    export namespace NotifyType {
        export const $gtype: GObject.GType<NotifyType>;
    }

    /**
     * Specifies the kind of crossing for enter and leave events.
     * 
     * See the X11 protocol specification of LeaveNotify for
     * full details of crossing event generation.
     * @gir-type Enum
     */
    enum NotifyType {
        /**
         * the surface is entered from an ancestor or
         *   left towards an ancestor.
         */
        ANCESTOR = 0,
        /**
         * the pointer moves between an ancestor and an
         *   inferior of the surface.
         */
        VIRTUAL = 1,
        /**
         * the surface is entered from an inferior or
         *   left towards an inferior.
         */
        INFERIOR = 2,
        /**
         * the surface is entered from or left towards
         *   a surface which is neither an ancestor nor an inferior.
         */
        NONLINEAR = 3,
        /**
         * the pointer moves between two surfaces
         *   which are not ancestors of each other and the surface is part of
         *   the ancestor chain between one of these surfaces and their least
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
    export namespace ScrollDirection {
        export const $gtype: GObject.GType<ScrollDirection>;
    }

    /**
     * Specifies the direction for scroll events.
     * @gir-type Enum
     */
    enum ScrollDirection {
        /**
         * the surface is scrolled up.
         */
        UP = 0,
        /**
         * the surface is scrolled down.
         */
        DOWN = 1,
        /**
         * the surface is scrolled to the left.
         */
        LEFT = 2,
        /**
         * the surface is scrolled to the right.
         */
        RIGHT = 3,
        /**
         * the scrolling is determined by the delta values
         *   in scroll events. See `gdk_scroll_event_get_deltas()`
         */
        SMOOTH = 4,
    }


    /**
     * @gir-type Enum
     */
    export namespace ScrollRelativeDirection {
        export const $gtype: GObject.GType<ScrollRelativeDirection>;
    }

    /**
     * Used in scroll events, to announce the direction relative
     * to physical motion.
     * @gir-type Enum
     * @since 4.20
     */
    enum ScrollRelativeDirection {
        /**
         * Physical motion and event motion are the same
         */
        IDENTICAL = 0,
        /**
         * Physical motion is inverted relative to event motion
         */
        INVERTED = 1,
        /**
         * Relative motion is unknown on this device or backend
         */
        UNKNOWN = 2,
    }


    /**
     * @gir-type Enum
     */
    export namespace ScrollUnit {
        export const $gtype: GObject.GType<ScrollUnit>;
    }

    /**
     * Specifies the unit of scroll deltas.
     * 
     * When you get {@link Gdk.ScrollUnit.WHEEL}, a delta of 1.0 means 1 wheel detent
     * click in the south direction, 2.0 means 2 wheel detent clicks in the south
     * direction... This is the same logic for negative values but in the north
     * direction.
     * 
     * If you get {@link Gdk.ScrollUnit.SURFACE}, are managing a scrollable view and get a
     * value of 123, you have to scroll 123 surface logical pixels right if it's
     * `delta_x` or down if it's `delta_y`. This is the same logic for negative values
     * but you have to scroll left instead of right if it's `delta_x` and up instead
     * of down if it's `delta_y`.
     * 
     * 1 surface logical pixel is equal to 1 real screen pixel multiplied by the
     * final scale factor of your graphical interface (the product of the desktop
     * scale factor and eventually a custom scale factor in your app).
     * @gir-type Enum
     * @since 4.8
     */
    enum ScrollUnit {
        /**
         * The delta is in number of wheel clicks.
         */
        WHEEL = 0,
        /**
         * The delta is in surface pixels to scroll directly
         *   on screen.
         */
        SURFACE = 1,
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
    export namespace SurfaceEdge {
        export const $gtype: GObject.GType<SurfaceEdge>;
    }

    /**
     * Determines a surface edge or corner.
     * @gir-type Enum
     */
    enum SurfaceEdge {
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
     * Possible errors that can be returned by {@link Gdk.Texture} constructors.
     * @gir-type Struct
     */
    class TextureError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields
        /**
         * Not enough memory to handle this image
         */
        static TOO_LARGE: number;

        /**
         * The image data appears corrupted
         */
        static CORRUPT_IMAGE: number;

        /**
         * The image contains features
         *   that cannot be loaded
         */
        static UNSUPPORTED_CONTENT: number;

        /**
         * The image format is not supported
         */
        static UNSUPPORTED_FORMAT: number;

        // Constructors
        constructor(options: { message: string; code: number });

        // Static methods
        /**
         * Registers an error quark for {@link Gdk.Texture} errors.
         */
        static quark(): GLib.Quark;
    }


    /**
     * @gir-type Enum
     */
    export namespace TitlebarGesture {
        export const $gtype: GObject.GType<TitlebarGesture>;
    }

    /**
     * The kind of title bar gesture to emit with
     * {@link Gdk.Toplevel.titlebar_gesture}.
     * @gir-type Enum
     * @since 4.4
     */
    enum TitlebarGesture {
        /**
         * double click gesture
         */
        DOUBLE_CLICK = 1,
        /**
         * right click gesture
         */
        RIGHT_CLICK = 2,
        /**
         * middle click gesture
         */
        MIDDLE_CLICK = 3,
    }


    /**
     * @gir-type Enum
     */
    export namespace TouchpadGesturePhase {
        export const $gtype: GObject.GType<TouchpadGesturePhase>;
    }

    /**
     * Specifies the current state of a touchpad gesture.
     * 
     * All gestures are guaranteed to begin with an event with phase
     * {@link Gdk.TouchpadGesturePhase.BEGIN}, followed by 0 or several events
     * with phase {@link Gdk.TouchpadGesturePhase.UPDATE}.
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
     * Error enumeration for {@link Gdk.VulkanContext}.
     * @gir-type Struct
     */
    class VulkanError extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields
        /**
         * Vulkan is not supported on this backend or has not been
         *   compiled in.
         */
        static UNSUPPORTED: number;

        /**
         * Vulkan support is not available on this Surface
         */
        static NOT_AVAILABLE: number;

        // Constructors
        constructor(options: { message: string; code: number });

        // Static methods
        /**
         * Registers an error quark for {@link Gdk.VulkanContext} errors.
         */
        static quark(): GLib.Quark;
    }


    /**
     * Defines all possible DND actions.
     * 
     * This can be used in {@link Gdk.Drop.status} messages when any drop
     * can be accepted or a more specific drop method is not yet known.
     * @default 7
     */
    const ACTION_ALL: number;

    /**
     * The middle button.
     * @default 2
     */
    const BUTTON_MIDDLE: number;

    /**
     * The primary button. This is typically the left mouse button, or the
     * right button in a left-handed setup.
     * @default 1
     */
    const BUTTON_PRIMARY: number;

    /**
     * The secondary button. This is typically the right mouse button, or the
     * left button in a left-handed setup.
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
     * @default false
     */
    const EVENT_PROPAGATE: boolean;

    /**
     * Use this macro as the return value for stopping the propagation of
     * an event handler.
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
     * @default 268964281
     */
    const KEY_10ChannelsDown: number;

    /**
     * @default 268964280
     */
    const KEY_10ChannelsUp: number;

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
     * @default 268964463
     */
    const KEY_3DMode: number;

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
     * @default 268964400
     */
    const KEY_ALSToggle: number;

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
     * @default 268964430
     */
    const KEY_Accessibility: number;

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
     * @default 268964269
     */
    const KEY_Addressbook: number;

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
     * @default 268964420
     */
    const KEY_AppSelect: number;

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
     * @default 268964215
     */
    const KEY_AspectRatio: number;

    /**
     * @default 268964423
     */
    const KEY_Assistant: number;

    /**
     * @default 195
     */
    const KEY_Atilde: number;

    /**
     * @default 268964380
     */
    const KEY_AttendantOff: number;

    /**
     * @default 268964379
     */
    const KEY_AttendantOn: number;

    /**
     * @default 268964381
     */
    const KEY_AttendantToggle: number;

    /**
     * @default 65146
     */
    const KEY_AudibleBell_Enable: number;

    /**
     * @default 268964232
     */
    const KEY_Audio: number;

    /**
     * @default 269025179
     */
    const KEY_AudioCycleTrack: number;

    /**
     * @default 268964462
     */
    const KEY_AudioDesc: number;

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
     * @default 268964477
     */
    const KEY_AutopilotEngageToggle: number;

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
     * @default 268964084
     */
    const KEY_BrightnessAuto: number;

    /**
     * @default 268964433
     */
    const KEY_BrightnessMax: number;

    /**
     * @default 268964432
     */
    const KEY_BrightnessMin: number;

    /**
     * @default 268964416
     */
    const KEY_Buttonconfig: number;

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
     * @default 268964428
     */
    const KEY_CameraAccessDisable: number;

    /**
     * @default 268964427
     */
    const KEY_CameraAccessEnable: number;

    /**
     * @default 268964429
     */
    const KEY_CameraAccessToggle: number;

    /**
     * @default 268964376
     */
    const KEY_CameraDown: number;

    /**
     * @default 268964368
     */
    const KEY_CameraFocus: number;

    /**
     * @default 268964377
     */
    const KEY_CameraLeft: number;

    /**
     * @default 268964378
     */
    const KEY_CameraRight: number;

    /**
     * @default 268964375
     */
    const KEY_CameraUp: number;

    /**
     * @default 268964373
     */
    const KEY_CameraZoomIn: number;

    /**
     * @default 268964374
     */
    const KEY_CameraZoomOut: number;

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
     * @default 268964243
     */
    const KEY_ChannelDown: number;

    /**
     * @default 268964242
     */
    const KEY_ChannelUp: number;

    /**
     * @default 65291
     */
    const KEY_Clear: number;

    /**
     * @default 269024801
     */
    const KEY_ClearGrab: number;

    /**
     * @default 268964486
     */
    const KEY_ClearvuSonar: number;

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
     * @default 268964278
     */
    const KEY_ContextMenu: number;

    /**
     * @default 269025058
     */
    const KEY_ContrastAdjust: number;

    /**
     * @default 268964419
     */
    const KEY_ControlPanel: number;

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
     * @default 268964229
     */
    const KEY_DVD: number;

    /**
     * @default 16784906
     */
    const KEY_Dabovedot: number;

    /**
     * @default 268964471
     */
    const KEY_Data: number;

    /**
     * @default 268964266
     */
    const KEY_Database: number;

    /**
     * @default 463
     */
    const KEY_Dcaron: number;

    /**
     * @default 65535
     */
    const KEY_Delete: number;

    /**
     * @default 268964426
     */
    const KEY_Dictate: number;

    /**
     * @default 269025113
     */
    const KEY_Display: number;

    /**
     * @default 268964085
     */
    const KEY_DisplayOff: number;

    /**
     * @default 268964271
     */
    const KEY_DisplayToggle: number;

    /**
     * @default 268964431
     */
    const KEY_DoNotDisturb: number;

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
     * @default 268964483
     */
    const KEY_DualRangeRadar: number;

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
     * @default 268964262
     */
    const KEY_Editor: number;

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
     * @default 268964425
     */
    const KEY_EmojiPicker: number;

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
     * @default 268964469
     */
    const KEY_FastReverse: number;

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
     * @default 268964481
     */
    const KEY_FishingChart: number;

    /**
     * @default 268964304
     */
    const KEY_Fn: number;

    /**
     * @default 268964325
     */
    const KEY_FnRightShift: number;

    /**
     * @default 268964305
     */
    const KEY_Fn_Esc: number;

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
     * @default 269025208
     */
    const KEY_FullScreen: number;

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
     * @default 268964264
     */
    const KEY_GraphicsEditor: number;

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
     * @default 268964286
     */
    const KEY_HangupPhone: number;

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
     * @default 268964282
     */
    const KEY_Images: number;

    /**
     * @default 268964198
     */
    const KEY_Info: number;

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
     * @default 268964418
     */
    const KEY_Journal: number;

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
     * @default 268964452
     */
    const KEY_KbdInputAssistAccept: number;

    /**
     * @default 268964453
     */
    const KEY_KbdInputAssistCancel: number;

    /**
     * @default 268964449
     */
    const KEY_KbdInputAssistNext: number;

    /**
     * @default 268964451
     */
    const KEY_KbdInputAssistNextgroup: number;

    /**
     * @default 268964448
     */
    const KEY_KbdInputAssistPrev: number;

    /**
     * @default 268964450
     */
    const KEY_KbdInputAssistPrevgroup: number;

    /**
     * @default 268964536
     */
    const KEY_KbdLcdMenu1: number;

    /**
     * @default 268964537
     */
    const KEY_KbdLcdMenu2: number;

    /**
     * @default 268964538
     */
    const KEY_KbdLcdMenu3: number;

    /**
     * @default 268964539
     */
    const KEY_KbdLcdMenu4: number;

    /**
     * @default 268964540
     */
    const KEY_KbdLcdMenu5: number;

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
     * @default 268964457
     */
    const KEY_LeftDown: number;

    /**
     * @default 268964456
     */
    const KEY_LeftUp: number;

    /**
     * @default 269025077
     */
    const KEY_LightBulb: number;

    /**
     * @default 268964382
     */
    const KEY_LightsToggle: number;

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
     * @default 268964496
     */
    const KEY_Macro1: number;

    /**
     * @default 268964505
     */
    const KEY_Macro10: number;

    /**
     * @default 268964506
     */
    const KEY_Macro11: number;

    /**
     * @default 268964507
     */
    const KEY_Macro12: number;

    /**
     * @default 268964508
     */
    const KEY_Macro13: number;

    /**
     * @default 268964509
     */
    const KEY_Macro14: number;

    /**
     * @default 268964510
     */
    const KEY_Macro15: number;

    /**
     * @default 268964511
     */
    const KEY_Macro16: number;

    /**
     * @default 268964512
     */
    const KEY_Macro17: number;

    /**
     * @default 268964513
     */
    const KEY_Macro18: number;

    /**
     * @default 268964514
     */
    const KEY_Macro19: number;

    /**
     * @default 268964497
     */
    const KEY_Macro2: number;

    /**
     * @default 268964515
     */
    const KEY_Macro20: number;

    /**
     * @default 268964516
     */
    const KEY_Macro21: number;

    /**
     * @default 268964517
     */
    const KEY_Macro22: number;

    /**
     * @default 268964518
     */
    const KEY_Macro23: number;

    /**
     * @default 268964519
     */
    const KEY_Macro24: number;

    /**
     * @default 268964520
     */
    const KEY_Macro25: number;

    /**
     * @default 268964521
     */
    const KEY_Macro26: number;

    /**
     * @default 268964522
     */
    const KEY_Macro27: number;

    /**
     * @default 268964523
     */
    const KEY_Macro28: number;

    /**
     * @default 268964524
     */
    const KEY_Macro29: number;

    /**
     * @default 268964498
     */
    const KEY_Macro3: number;

    /**
     * @default 268964525
     */
    const KEY_Macro30: number;

    /**
     * @default 268964499
     */
    const KEY_Macro4: number;

    /**
     * @default 268964500
     */
    const KEY_Macro5: number;

    /**
     * @default 268964501
     */
    const KEY_Macro6: number;

    /**
     * @default 268964502
     */
    const KEY_Macro7: number;

    /**
     * @default 268964503
     */
    const KEY_Macro8: number;

    /**
     * @default 268964504
     */
    const KEY_Macro9: number;

    /**
     * @default 268964531
     */
    const KEY_MacroPreset1: number;

    /**
     * @default 268964532
     */
    const KEY_MacroPreset2: number;

    /**
     * @default 268964533
     */
    const KEY_MacroPreset3: number;

    /**
     * @default 268964530
     */
    const KEY_MacroPresetCycle: number;

    /**
     * @default 268964528
     */
    const KEY_MacroRecordStart: number;

    /**
     * @default 268964529
     */
    const KEY_MacroRecordStop: number;

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
     * @default 268964478
     */
    const KEY_MarkWaypoint: number;

    /**
     * @default 269025122
     */
    const KEY_Market: number;

    /**
     * @default 65324
     */
    const KEY_Massyo: number;

    /**
     * @default 268964279
     */
    const KEY_MediaRepeat: number;

    /**
     * @default 268964459
     */
    const KEY_MediaTopMenu: number;

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
     * @default 269025031
     */
    const KEY_MonBrightnessCycle: number;

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
     * @default 268964480
     */
    const KEY_NavChart: number;

    /**
     * @default 268964488
     */
    const KEY_NavInfo: number;

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
     * @default 268964475
     */
    const KEY_NextElement: number;

    /**
     * @default 268964464
     */
    const KEY_NextFavorite: number;

    /**
     * @default 269024802
     */
    const KEY_Next_VMode: number;

    /**
     * @default 65234
     */
    const KEY_Next_Virtual_Screen: number;

    /**
     * @default 268964284
     */
    const KEY_NotificationCenter: number;

    /**
     * @default 209
     */
    const KEY_Ntilde: number;

    /**
     * @default 65407
     */
    const KEY_Num_Lock: number;

    /**
     * @default 268964352
     */
    const KEY_Numeric0: number;

    /**
     * @default 268964353
     */
    const KEY_Numeric1: number;

    /**
     * @default 268964460
     */
    const KEY_Numeric11: number;

    /**
     * @default 268964461
     */
    const KEY_Numeric12: number;

    /**
     * @default 268964354
     */
    const KEY_Numeric2: number;

    /**
     * @default 268964355
     */
    const KEY_Numeric3: number;

    /**
     * @default 268964356
     */
    const KEY_Numeric4: number;

    /**
     * @default 268964357
     */
    const KEY_Numeric5: number;

    /**
     * @default 268964358
     */
    const KEY_Numeric6: number;

    /**
     * @default 268964359
     */
    const KEY_Numeric7: number;

    /**
     * @default 268964360
     */
    const KEY_Numeric8: number;

    /**
     * @default 268964361
     */
    const KEY_Numeric9: number;

    /**
     * @default 268964364
     */
    const KEY_NumericA: number;

    /**
     * @default 268964365
     */
    const KEY_NumericB: number;

    /**
     * @default 268964366
     */
    const KEY_NumericC: number;

    /**
     * @default 268964367
     */
    const KEY_NumericD: number;

    /**
     * @default 268964363
     */
    const KEY_NumericPound: number;

    /**
     * @default 268964362
     */
    const KEY_NumericStar: number;

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
     * @default 268964472
     */
    const KEY_OnScreenKeyboard: number;

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
     * @default 268964466
     */
    const KEY_PauseRecord: number;

    /**
     * @default 16785575
     */
    const KEY_PesetaSign: number;

    /**
     * @default 269025134
     */
    const KEY_Phone: number;

    /**
     * @default 268964285
     */
    const KEY_PickupPhone: number;

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
     * @default 268964265
     */
    const KEY_Presentation: number;

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
     * @default 268964476
     */
    const KEY_PreviousElement: number;

    /**
     * @default 65377
     */
    const KEY_Print: number;

    /**
     * @default 65365
     */
    const KEY_Prior: number;

    /**
     * @default 268964473
     */
    const KEY_PrivacyScreenToggle: number;

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
     * @default 268964484
     */
    const KEY_RadarOverlay: number;

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
     * @default 268964402
     */
    const KEY_RefreshRateToggle: number;

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
     * @default 268964455
     */
    const KEY_RightDown: number;

    /**
     * @default 268964454
     */
    const KEY_RightUp: number;

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
     * @default 268964458
     */
    const KEY_RootMenu: number;

    /**
     * @default 269025140
     */
    const KEY_RotateWindows: number;

    /**
     * @default 269025142
     */
    const KEY_RotationKB: number;

    /**
     * @default 269025207
     */
    const KEY_RotationLockToggle: number;

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
     * @default 268964421
     */
    const KEY_Screensaver: number;

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
     * @default 268964474
     */
    const KEY_SelectiveScreenshot: number;

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
     * @default 268964487
     */
    const KEY_SidevuSonar: number;

    /**
     * @default 65340
     */
    const KEY_SingleCandidate: number;

    /**
     * @default 268964482
     */
    const KEY_SingleRangeRadar: number;

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
     * @default 268964470
     */
    const KEY_SlowReverse: number;

    /**
     * @default 268964479
     */
    const KEY_Sos: number;

    /**
     * @default 269025148
     */
    const KEY_Spell: number;

    /**
     * @default 268964272
     */
    const KEY_SpellCheck: number;

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
     * @default 268964465
     */
    const KEY_StopRecord: number;

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
     * @default 268964417
     */
    const KEY_Taskmanager: number;

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
     * @default 268964485
     */
    const KEY_TraditionalSonar: number;

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
     * @default 268964468
     */
    const KEY_Unmute: number;

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
     * @default 268964467
     */
    const KEY_VOD: number;

    /**
     * @default 269025076
     */
    const KEY_VendorHome: number;

    /**
     * @default 269025159
     */
    const KEY_Video: number;

    /**
     * @default 268964256
     */
    const KEY_VideoPhone: number;

    /**
     * @default 269025185
     */
    const KEY_View: number;

    /**
     * @default 268964422
     */
    const KEY_VoiceCommand: number;

    /**
     * @default 268964268
     */
    const KEY_Voicemail: number;

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
     * @default 268964369
     */
    const KEY_WPSButton: number;

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
     * @default 268964260
     */
    const KEY_ZoomReset: number;

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
     * @default 16777985
     */
    const KEY_combining_acute: number;

    /**
     * @default 16778019
     */
    const KEY_combining_belowdot: number;

    /**
     * @default 16777984
     */
    const KEY_combining_grave: number;

    /**
     * @default 16777993
     */
    const KEY_combining_hook: number;

    /**
     * @default 16777987
     */
    const KEY_combining_tilde: number;

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
     * @default 65163
     */
    const KEY_dead_SCHWA: number;

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
     * @default 65165
     */
    const KEY_dead_hamza: number;

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
     * @default 65162
     */
    const KEY_dead_schwa: number;

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
    const KEY_guillemetleft: number;

    /**
     * @default 187
     */
    const KEY_guillemetright: number;

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
     * @default 186
     */
    const KEY_ordmasculine: number;

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
     * A mask covering all entries in {@link Gdk.ModifierType}.
     * @default 469769999
     */
    const MODIFIER_MASK: number;

    /**
     * This is the priority that the idle handler processing surface updates
     * is given in the main loop.
     * @default 120
     */
    const PRIORITY_REDRAW: number;

    /**
     * Draws GL content onto a cairo context.
     * 
     * It takes a render buffer ID (`source_type` == GL_RENDERBUFFER) or a texture
     * id (`source_type` == GL_TEXTURE) and draws it onto `cr` with an OVER operation,
     * respecting the current clip. The top left corner of the rectangle specified
     * by `x`, `y`, `width` and `height` will be drawn at the current (0,0) position of
     * the `cairo_t`.
     * 
     * This will work for *all* `cairo_t`, as long as `surface` is realized, but the
     * fallback implementation that reads back the pixels from the buffer may be
     * used in the general case. In the case of direct drawing to a surface with
     * no special effects applied to `cr` it will however use a more efficient
     * approach.
     * 
     * For GL_RENDERBUFFER the code will always fall back to software for buffers
     * with alpha components, so make sure you use GL_TEXTURE if using alpha.
     * 
     * Calling this may change the current GL context.
     * @param cr a cairo context
     * @param surface The surface we're rendering for (not necessarily into)
     * @param source The GL ID of the source buffer
     * @param source_type The type of the `source`
     * @param buffer_scale The scale-factor that the `source` buffer is allocated for
     * @param x The source x position in `source` to start copying from in GL coordinates
     * @param y The source y position in `source` to start copying from in GL coordinates
     * @param width The width of the region to draw
     * @param height The height of the region to draw
     * @deprecated since 4.6: The function is overly complex and produces broken output   in various combinations of arguments. If you want to draw with GL textures   in GTK, use {@link Gdk.GLTexture.new}; if you want to use that texture in   Cairo, use {@link Gdk.Texture.download} to download the data into a Cairo   image surface.
     */
    function cairo_draw_from_gl(cr: cairo.Context, surface: Surface, source: number, source_type: number, buffer_scale: number, x: number, y: number, width: number, height: number): void;

    /**
     * Adds the given rectangle to the current path of `cr`.
     * @param cr a cairo context
     * @param rectangle a {@link Gdk.Rectangle}
     */
    function cairo_rectangle(cr: cairo.Context, rectangle: Rectangle): void;

    /**
     * Adds the given region to the current path of `cr`.
     * @param cr a cairo context
     * @param region a `cairo_region_t`
     */
    function cairo_region(cr: cairo.Context, region: cairo.Region): void;

    /**
     * Creates region that covers the area where the given
     * `surface` is more than 50% opaque.
     * 
     * This function takes into account device offsets that might be
     * set with `cairo_surface_set_device_offset()`.
     * @param surface a cairo surface
     * @returns A `cairo_region_t`
     */
    function cairo_region_create_from_surface(surface: cairo.Surface): cairo.Region;

    /**
     * Sets the given pixbuf as the source pattern for `cr`.
     * 
     * The pattern has an extend mode of {@link cairo.Extend.NONE} and is aligned
     * so that the origin of `pixbuf` is `pixbuf_x`, `pixbuf_y`.
     * @param cr a cairo context
     * @param pixbuf a {@link GdkPixbuf.Pixbuf}
     * @param pixbuf_x X coordinate of location to place upper left corner of `pixbuf`
     * @param pixbuf_y Y coordinate of location to place upper left corner of `pixbuf`
     * @deprecated since 4.20: Use `cairo_set_source_surface()` and `gdk_texture_download()`
     */
    function cairo_set_source_pixbuf(cr: cairo.Context, pixbuf: GdkPixbuf.Pixbuf, pixbuf_x: number, pixbuf_y: number): void;

    /**
     * Sets the specified {@link Gdk.RGBA} as the source color of `cr`.
     * @param cr a cairo context
     * @param rgba a {@link Gdk.RGBA}
     */
    function cairo_set_source_rgba(cr: cairo.Context, rgba: RGBA): void;

    /**
     * Returns the color state object representing the oklab color space.
     * 
     * This is a perceptually uniform color state.
     * @returns the color state object for oklab
     * @since 4.18
     */
    function color_state_get_oklab(): ColorState;

    /**
     * Returns the color state object representing the oklch color space.
     * 
     * This is the polar variant of oklab, in which the hue is encoded as
     * a polar coordinate.
     * @returns the color state object for oklch
     * @since 4.18
     */
    function color_state_get_oklch(): ColorState;

    /**
     * Returns the color state object representing the linear rec2100 color space.
     * 
     * This color state uses the primaries defined by BT.2020-2 and BT.2100-0 and a linear
     * transfer function.
     * 
     * It is equivalent to the [Cicp](https://docs.gtk.org/gdk4/class.CicpParams.html) tuple 9/8/0/1.
     * 
     * See e.g. [the CSS HDR Module](https://drafts.csswg.org/css-color-hdr/#valdef-color-rec2100-linear)
     * for details about this colorstate.
     * @returns the color state object for linearized rec2100
     * @since 4.16
     */
    function color_state_get_rec2100_linear(): ColorState;

    /**
     * Returns the color state object representing the rec2100-pq color space.
     * 
     * This color state uses the primaries defined by BT.2020-2 and BT.2100-0 and the transfer
     * function defined by SMPTE ST 2084 and BT.2100-2.
     * 
     * It is equivalent to the [Cicp](https://docs.gtk.org/gdk4/class.CicpParams.html) tuple 9/16/0/1.
     * 
     * See e.g. [the CSS HDR Module](https://drafts.csswg.org/css-color-hdr/#valdef-color-rec2100-pq)
     * for details about this colorstate.
     * @returns the color state object for rec2100-pq
     * @since 4.16
     */
    function color_state_get_rec2100_pq(): ColorState;

    /**
     * Returns the color state object representing the sRGB color space.
     * 
     * This color state uses the primaries defined by BT.709-6 and the transfer function
     * defined by IEC 61966-2-1.
     * 
     * It is equivalent to the [Cicp](https://docs.gtk.org/gdk4/class.CicpParams.html) tuple 1/13/0/1.
     * 
     * See e.g. [the CSS Color Module](https://www.w3.org/TR/css-color-4/#predefined-sRGB)
     * for details about this colorstate.
     * @returns the color state object for sRGB
     * @since 4.16
     */
    function color_state_get_srgb(): ColorState;

    /**
     * Returns the color state object representing the linearized sRGB color space.
     * 
     * This color state uses the primaries defined by BT.709-6 and a linear transfer function.
     * 
     * It is equivalent to the [Cicp](https://docs.gtk.org/gdk4/class.CicpParams.html) tuple 1/8/0/1.
     * 
     * See e.g. [the CSS Color Module](https://www.w3.org/TR/css-color-4/#predefined-sRGB-linear)
     * for details about this colorstate.
     * @returns the color state object for linearized sRGB
     * @since 4.16
     */
    function color_state_get_srgb_linear(): ColorState;

    /**
     * Reads content from the given input stream and deserialize it, asynchronously.
     * 
     * The default I/O priority is `G_PRIORITY_DEFAULT` (i.e. 0), and lower numbers
     * indicate a higher priority.
     * @param stream a {@link Gio.InputStream} to read the serialized content from
     * @param mime_type the mime type to deserialize from
     * @param type the GType to deserialize from
     * @param io_priority the I/O priority of the operation
     * @param cancellable optional {@link Gio.Cancellable} object
     */
    function content_deserialize_async(stream: Gio.InputStream, mime_type: string, type: GObject.GType, io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<[unknown]>;
    /**
     * Reads content from the given input stream and deserialize it, asynchronously.
     * 
     * The default I/O priority is `G_PRIORITY_DEFAULT` (i.e. 0), and lower numbers
     * indicate a higher priority.
     * @param stream a {@link Gio.InputStream} to read the serialized content from
     * @param mime_type the mime type to deserialize from
     * @param type the GType to deserialize from
     * @param io_priority the I/O priority of the operation
     * @param cancellable optional {@link Gio.Cancellable} object
     * @param callback callback to call when the operation is done
     */
    function content_deserialize_async(stream: Gio.InputStream, mime_type: string, type: GObject.GType, io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Gio.InputStream> | null): void;
    /**
     * Reads content from the given input stream and deserialize it, asynchronously.
     * 
     * The default I/O priority is `G_PRIORITY_DEFAULT` (i.e. 0), and lower numbers
     * indicate a higher priority.
     * @param stream a {@link Gio.InputStream} to read the serialized content from
     * @param mime_type the mime type to deserialize from
     * @param type the GType to deserialize from
     * @param io_priority the I/O priority of the operation
     * @param cancellable optional {@link Gio.Cancellable} object
     * @param callback callback to call when the operation is done
     */
    function content_deserialize_async(stream: Gio.InputStream, mime_type: string, type: GObject.GType, io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Gio.InputStream> | null): globalThis.Promise<[unknown]> | void;

    /**
     * Finishes a content deserialization operation.
     * @param result the {@link Gio.AsyncResult}
     * @returns `true` if the operation was successful. In this case,   `value` is set. `false` if an error occurred. In this case,   `error` is set
     * @throws GLib.Error
     */
    function content_deserialize_finish(result: Gio.AsyncResult): [boolean, unknown];

    /**
     * Parses the given `string` into {@link Gdk.ContentFormats} and
     * returns the formats.
     * 
     * Strings printed via {@link Gdk.ContentFormats.to_string}
     * can be read in again successfully using this function.
     * 
     * If `string` does not describe valid content formats, `null`
     * is returned.
     * @param string the string to parse
     * @returns the content formats if `string` is valid
     * @since 4.4
     */
    function content_formats_parse(string: string): ContentFormats | null;

    /**
     * Registers a function to deserialize object of a given type.
     * 
     * Since 4.20, when looking up a deserializer to use, GTK will
     * use the last registered deserializer for a given mime type,
     * so applications can override the built-in deserializers.
     * @param mime_type the mime type which the function can deserialize from
     * @param type the type of objects that the function creates
     * @param deserialize the callback
     */
    function content_register_deserializer(mime_type: string, type: GObject.GType, deserialize: ContentDeserializeFunc): void;

    /**
     * Registers a function to serialize objects of a given type.
     * 
     * Since 4.20, when looking up a serializer to use, GTK will
     * use the last registered serializer for a given mime type,
     * so applications can override the built-in serializers.
     * @param type the type of objects that the function can serialize
     * @param mime_type the mime type to serialize to
     * @param serialize the callback
     */
    function content_register_serializer(type: GObject.GType, mime_type: string, serialize: ContentSerializeFunc): void;

    /**
     * Serialize content and write it to the given output stream, asynchronously.
     * 
     * The default I/O priority is `G_PRIORITY_DEFAULT` (i.e. 0), and lower numbers
     * indicate a higher priority.
     * @param stream a {@link Gio.OutputStream} to write the serialized content to
     * @param mime_type the mime type to serialize to
     * @param value the content to serialize
     * @param io_priority the I/O priority of the operation
     * @param cancellable optional {@link Gio.Cancellable} object
     */
    function content_serialize_async(stream: Gio.OutputStream, mime_type: string, value: GObject.Value | any, io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;
    /**
     * Serialize content and write it to the given output stream, asynchronously.
     * 
     * The default I/O priority is `G_PRIORITY_DEFAULT` (i.e. 0), and lower numbers
     * indicate a higher priority.
     * @param stream a {@link Gio.OutputStream} to write the serialized content to
     * @param mime_type the mime type to serialize to
     * @param value the content to serialize
     * @param io_priority the I/O priority of the operation
     * @param cancellable optional {@link Gio.Cancellable} object
     * @param callback callback to call when the operation is done
     */
    function content_serialize_async(stream: Gio.OutputStream, mime_type: string, value: GObject.Value | any, io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Gio.OutputStream> | null): void;
    /**
     * Serialize content and write it to the given output stream, asynchronously.
     * 
     * The default I/O priority is `G_PRIORITY_DEFAULT` (i.e. 0), and lower numbers
     * indicate a higher priority.
     * @param stream a {@link Gio.OutputStream} to write the serialized content to
     * @param mime_type the mime type to serialize to
     * @param value the content to serialize
     * @param io_priority the I/O priority of the operation
     * @param cancellable optional {@link Gio.Cancellable} object
     * @param callback callback to call when the operation is done
     */
    function content_serialize_async(stream: Gio.OutputStream, mime_type: string, value: GObject.Value | any, io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<Gio.OutputStream> | null): globalThis.Promise<boolean> | void;

    /**
     * Finishes a content serialization operation.
     * @param result the {@link Gio.AsyncResult}
     * @returns `true` if the operation was successful, `false` if an   error occurred. In this case, `error` is set
     * @throws GLib.Error
     */
    function content_serialize_finish(result: Gio.AsyncResult): boolean;

    /**
     * Registers an error quark for {@link Gdk.DmabufTexture} errors.
     * @returns the error quark
     */
    function dmabuf_error_quark(): GLib.Quark;

    /**
     * Checks if `action` represents a single action or includes
     * multiple actions.
     * 
     * When `action` is `GDK_ACTION_NONE` - ie no action was given, `TRUE`
     * is returned.
     * @param action a {@link Gdk.DragAction}
     * @returns `true` if exactly one action was given
     */
    function drag_action_is_unique(action: DragAction): boolean;

    /**
     * Returns the relative angle from `event1` to `event2`.
     * 
     * The relative angle is the angle between the X axis and the line
     * through both events' positions. The rotation direction for positive
     * angles is from the positive X axis towards the positive Y axis.
     * 
     * This assumes that both events have X/Y information.
     * If not, this function returns `false`.
     * @param event1 first {@link Gdk.Event}
     * @param event2 second {@link Gdk.Event}
     * @returns `true` if the angle could be calculated.
     */
    function events_get_angle(event1: Event, event2: Event): [boolean, number];

    /**
     * Returns the point halfway between the events' positions.
     * 
     * This assumes that both events have X/Y information.
     * If not, this function returns `false`.
     * @param event1 first {@link Gdk.Event}
     * @param event2 second {@link Gdk.Event}
     * @returns `true` if the center could be calculated.
     */
    function events_get_center(event1: Event, event2: Event): [boolean, number, number];

    /**
     * Returns the distance between the event locations.
     * 
     * This assumes that both events have X/Y information.
     * If not, this function returns `false`.
     * @param event1 first {@link Gdk.Event}
     * @param event2 second {@link Gdk.Event}
     * @returns `true` if the distance could be calculated.
     */
    function events_get_distance(event1: Event, event2: Event): [boolean, number];

    /**
     * Registers an error quark for {@link Gdk.GLContext} errors.
     * @returns the error quark
     */
    function gl_error_quark(): GLib.Quark;

    /**
     * Canonicalizes the given mime type and interns the result.
     * 
     * If `string` is not a valid mime type, `null` is returned instead.
     * See RFC 2048 for the syntax if mime types.
     * @param string string of a potential mime type
     * @returns An interned string for the canonicalized   mime type or `null` if the string wasn't a valid mime type
     */
    function intern_mime_type(string: string): string | null;

    /**
     * Obtains the upper- and lower-case versions of the keyval `symbol`.
     * 
     * Examples of keyvals are `GDK_KEY_a`, `GDK_KEY_Enter`, `GDK_KEY_F1`, etc.
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
     * @returns the corresponding key value, or `GDK_KEY_VoidSymbol`   if the key name is not a valid key
     */
    function keyval_from_name(keyval_name: string): number;

    /**
     * Gets keyvals that are 'aliases' for `keyval`.
     * 
     * Aliases are meant to be functionally equivalent and
     * should be treated the same with respect to keyboard
     * shortcuts, etc. An example are keypad keys that are
     * aliases for their normal counterpart, such as
     * `GDK_KEY_KP_Left` and `GDK_KEY_Left`.
     * @param keyval the keyval to get aliases for
     * @returns an array of keyvals
     * @since 4.24
     */
    function keyval_get_aliases(keyval: number): number[] | null;

    /**
     * Returns true if the given key value is in lower case.
     * @param keyval a key value.
     * @returns true if `keyval` is in lower case, or if `keyval` is not   subject to case conversion.
     */
    function keyval_is_lower(keyval: number): boolean;

    /**
     * Returns true if the given key value is in upper case.
     * @param keyval a key value.
     * @returns true if `keyval` is in upper case, or if `keyval` is not subject to  case conversion.
     */
    function keyval_is_upper(keyval: number): boolean;

    /**
     * Converts a key value into a symbolic name.
     * 
     * The names are the same as those in the
     * `gdk/gdkkeysyms.h` header file
     * but without the leading “GDK_KEY_”.
     * @param keyval a key value
     * @returns a string containing the name   of the key
     */
    function keyval_name(keyval: number): string | null;

    /**
     * Converts a key value to lower case, if applicable.
     * @param keyval a key value.
     * @returns the lower case form of `keyval`, or `keyval` itself if it is already  in lower case or it is not subject to case conversion.
     */
    function keyval_to_lower(keyval: number): number;

    /**
     * Converts from a GDK key symbol to the corresponding Unicode
     * character.
     * 
     * Note that the conversion does not take the current locale
     * into consideration, which might be expected for particular
     * keyvals, such as `GDK_KEY_KP_Decimal`.
     * @param keyval a GDK key symbol
     * @returns the corresponding unicode character, or 0 if there   is no corresponding character.
     */
    function keyval_to_unicode(keyval: number): number;

    /**
     * Converts a key value to upper case, if applicable.
     * @param keyval a key value.
     * @returns the upper case form of `keyval`, or `keyval` itself if it is already   in upper case or it is not subject to case conversion.
     */
    function keyval_to_upper(keyval: number): number;

    /**
     * Returns a paintable that has the given intrinsic size and draws nothing.
     * 
     * This is often useful for implementing the
     * {@link Gdk.Paintable.get_current_image} virtual function
     * when the paintable is in an incomplete state (like a
     * [GtkMediaStream](../gtk4/class.MediaStream.html) before receiving
     * the first frame).
     * @param intrinsic_width The intrinsic width to report. Can be 0 for no width.
     * @param intrinsic_height The intrinsic height to report. Can be 0 for no height.
     * @returns a {@link Gdk.Paintable}
     */
    function paintable_new_empty(intrinsic_width: number, intrinsic_height: number): Paintable;

    /**
     * Transfers image data from a `cairo_surface_t` and converts it
     * to a {@link GdkPixbuf.Pixbuf}.
     * 
     * This allows you to efficiently read individual pixels from cairo surfaces.
     * 
     * This function will create an RGB pixbuf with 8 bits per channel.
     * The pixbuf will contain an alpha channel if the `surface` contains one.
     * @param surface surface to copy from
     * @param src_x Source X coordinate within `surface`
     * @param src_y Source Y coordinate within `surface`
     * @param width Width in pixels of region to get
     * @param height Height in pixels of region to get
     * @returns A newly-created pixbuf with a   reference count of 1
     * @deprecated since 4.12: Use {@link Gdk.Texture} and subclasses instead   cairo surfaces and pixbufs
     */
    function pixbuf_get_from_surface(surface: cairo.Surface, src_x: number, src_y: number, width: number, height: number): GdkPixbuf.Pixbuf | null;

    /**
     * Creates a new pixbuf from `texture`.
     * 
     * This should generally not be used in newly written code as later
     * stages will almost certainly convert the pixbuf back into a texture
     * to draw it on screen.
     * @param texture a {@link Gdk.Texture}
     * @returns a new {@link GdkPixbuf.Pixbuf}
     * @deprecated since 4.12: Use {@link Gdk.Texture} and subclasses instead   cairo surfaces and pixbufs
     */
    function pixbuf_get_from_texture(texture: Texture): GdkPixbuf.Pixbuf | null;

    /**
     * Sets a list of backends that GDK should try to use.
     * 
     * This can be useful if your application does not
     * work with certain GDK backends.
     * 
     * By default, GDK tries all included backends.
     * 
     * For example:
     * 
     * ```c
     * gdk_set_allowed_backends ("wayland,macos,*");
     * ```
     * 
     * instructs GDK to try the Wayland backend first, followed by the
     * MacOs backend, and then all others.
     * 
     * If the `GDK_BACKEND` environment variable is set, it determines
     * what backends are tried in what order, while still respecting the
     * set of allowed backends that are specified by this function.
     * 
     * The possible backend names are:
     * 
     *   - `broadway`
     *   - `macos`
     *   - `wayland`.
     *   - `win32`
     *   - `x11`
     * 
     * You can also include a `*` in the list to try all remaining backends.
     * 
     * This call must happen prior to functions that open a display, such
     * as {@link Gdk.Display.open}, `gtk_init()`, or `gtk_init_check()`
     * in order to take effect.
     * @param backends a comma-separated list of backends
     */
    function set_allowed_backends(backends: string): void;

    /**
     * Registers an error quark for {@link Gdk.Texture} errors.
     * @returns the error quark
     */
    function texture_error_quark(): GLib.Quark;

    /**
     * Converts from a Unicode character to a key symbol.
     * @param wc a Unicode character
     * @returns the corresponding GDK key symbol, if one exists,   or, if there is no corresponding symbol, `wc | 0x01000000`
     */
    function unicode_to_keyval(wc: number): number;

    /**
     * Registers an error quark for {@link Gdk.VulkanContext} errors.
     * @returns the error quark
     */
    function vulkan_error_quark(): GLib.Quark;

    /**
     * @gir-type Callback
     */
    interface ContentDeserializeFunc {
        (deserializer: ContentDeserializer): void;
    }

    /**
     * @gir-type Callback
     */
    interface ContentSerializeFunc {
        (serializer: ContentSerializer): void;
    }

    /**
     * @gir-type Callback
     */
    interface CursorGetTextureCallback {
        (cursor: Cursor, cursor_size: number, scale: number, data: null): Texture | null;
    }

    /**
     * @gir-type Flags
     */
    export namespace AnchorHints {
        export const $gtype: GObject.GType<AnchorHints>;
    }

    /**
     * Positioning hints for aligning a surface relative to a rectangle.
     * 
     * These hints determine how the surface should be positioned in the case that
     * the surface would fall off-screen if placed in its ideal position.
     * 
     * For example, {@link Gdk.AnchorHints.FLIP_X} will replace {@link Gdk.Gravity.NORTH_WEST} with
     * {@link Gdk.Gravity.NORTH_EAST} and vice versa if the surface extends beyond the left
     * or right edges of the monitor.
     * 
     * If {@link Gdk.AnchorHints.SLIDE_X} is set, the surface can be shifted horizontally to fit
     * on-screen. If {@link Gdk.AnchorHints.RESIZE_X} is set, the surface can be shrunken
     * horizontally to fit.
     * 
     * In general, when multiple flags are set, flipping should take precedence over
     * sliding, which should take precedence over resizing.
     * @gir-type Flags
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
         * allow sliding surface horizontally
         */
        SLIDE_X = 4,
        /**
         * allow sliding surface vertically
         */
        SLIDE_Y = 8,
        /**
         * allow resizing surface horizontally
         */
        RESIZE_X = 16,
        /**
         * allow resizing surface vertically
         */
        RESIZE_Y = 32,
        /**
         * allow flipping anchors on both axes
         */
        FLIP = 3,
        /**
         * allow sliding surface on both axes
         */
        SLIDE = 12,
        /**
         * allow resizing surface on both axes
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
         * Scroll X delta axis is present
         */
        DELTA_X = 8,
        /**
         * Scroll Y delta axis is present
         */
        DELTA_Y = 16,
        /**
         * Pressure axis is present
         */
        PRESSURE = 32,
        /**
         * X tilt axis is present
         */
        XTILT = 64,
        /**
         * Y tilt axis is present
         */
        YTILT = 128,
        /**
         * Wheel axis is present
         */
        WHEEL = 256,
        /**
         * Distance axis is present
         */
        DISTANCE = 512,
        /**
         * Z-axis rotation is present
         */
        ROTATION = 1024,
        /**
         * Slider axis is present
         */
        SLIDER = 2048,
    }


    /**
     * @gir-type Flags
     */
    export namespace DragAction {
        export const $gtype: GObject.GType<DragAction>;
    }

    /**
     * Used in {@link Gdk.Drop} and {@link Gdk.Drag} to indicate the actions that the
     * destination can and should do with the dropped data.
     * @gir-type Flags
     */
    enum DragAction {
        /**
         * No action.
         * @since 4.20
         */
        NONE = 0,
        /**
         * Copy the data.
         */
        COPY = 1,
        /**
         * Move the data, i.e. first copy it, then delete
         *   it from the source using the DELETE target of the X selection protocol.
         */
        MOVE = 2,
        /**
         * Add a link to the data. Note that this is only
         *   useful if source and destination agree on what it means, and is not
         *   supported on all platforms.
         */
        LINK = 4,
        /**
         * Ask the user what to do with the data.
         */
        ASK = 8,
    }


    /**
     * @gir-type Flags
     */
    export namespace FrameClockPhase {
        export const $gtype: GObject.GType<FrameClockPhase>;
    }

    /**
     * Used to represent the different paint clock phases that can be requested.
     * 
     * The elements of the enumeration correspond to the signals of {@link Gdk.FrameClock}.
     * @gir-type Flags
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
         * corresponds to GdkFrameClock::layout. Should not be handled by applications.
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
    export namespace GLAPI {
        export const $gtype: GObject.GType<GLAPI>;
    }

    /**
     * The list of the different APIs that GdkGLContext can potentially support.
     * @gir-type Flags
     * @since 4.6
     */
    enum GLAPI {
        /**
         * The OpenGL API
         */
        GL = 1,
        /**
         * The OpenGL ES API
         */
        GLES = 2,
    }


    /**
     * @gir-type Flags
     */
    export namespace ModifierType {
        export const $gtype: GObject.GType<ModifierType>;
    }

    /**
     * Flags to indicate the state of modifier keys and mouse buttons
     * in events.
     * 
     * Typical modifier keys are Shift, Control, Meta, Super, Hyper, Alt, Compose,
     * Apple, CapsLock or ShiftLock.
     * 
     * Note that GDK may add internal values to events which include values outside
     * of this enumeration. Your code should preserve and ignore them. You can use
     * `GDK_MODIFIER_MASK` to remove all private values.
     * @gir-type Flags
     */
    enum ModifierType {
        /**
         * No modifier.
         * @since 4.14
         */
        NO_MODIFIER_MASK = 0,
        /**
         * the Shift key.
         */
        SHIFT_MASK = 1,
        /**
         * a Lock key (depending on the Windowing System configuration,
         *    this may either be <kbd>CapsLock</kbd> or <kbd>ShiftLock</kbd>).
         */
        LOCK_MASK = 2,
        /**
         * the Control key.
         */
        CONTROL_MASK = 4,
        /**
         * the fourth modifier key (it depends on the Windowing System
         *    configuration which key is interpreted as this modifier, but normally it
         *    is the <kbd>Alt</kbd> key).
         */
        ALT_MASK = 8,
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
         * the Super modifier.
         */
        SUPER_MASK = 67108864,
        /**
         * the Hyper modifier.
         */
        HYPER_MASK = 134217728,
        /**
         * the Meta modifier. Maps to Command on macOS.
         */
        META_MASK = 268435456,
    }


    /**
     * @gir-type Flags
     */
    export namespace PaintableFlags {
        export const $gtype: GObject.GType<PaintableFlags>;
    }

    /**
     * Flags about a paintable object.
     * 
     * Implementations use these for optimizations such as caching.
     * @gir-type Flags
     */
    enum PaintableFlags {
        /**
         * The size is immutable.
         *   The `Gdk.Paintable::invalidate-size` signal will never be
         *   emitted.
         */
        STATIC_SIZE = 1,
        /**
         * The content is immutable.
         *   The `Gdk.Paintable::invalidate-contents` signal will never be
         *   emitted.
         */
        STATIC_CONTENTS = 2,
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
         * The seat has drawing tablet pad(s) attached
         */
        TABLET_PAD = 16,
        /**
         * The union of all pointing capabilities
         */
        ALL_POINTING = 7,
        /**
         * The union of all capabilities
         */
        ALL = 31,
    }


    /**
     * @gir-type Flags
     */
    export namespace ToplevelCapabilities {
        export const $gtype: GObject.GType<ToplevelCapabilities>;
    }

    /**
     * Reflects what features a {@link Gdk.Toplevel} supports.
     * @gir-type Flags
     * @since 4.20
     */
    enum ToplevelCapabilities {
        /**
         * Whether tiled window states are supported.
         * @since 4.20
         */
        EDGE_CONSTRAINTS = 1,
        /**
         * Whether inhibiting system shortcuts is supported.
         * See {@link Gdk.Toplevel.inhibit_system_shortcuts}.
         * @since 4.20
         */
        INHIBIT_SHORTCUTS = 2,
        /**
         * Whether titlebar gestures are supported.
         * See {@link Gdk.Toplevel.titlebar_gesture}.
         * @since 4.20
         */
        TITLEBAR_GESTURES = 4,
        /**
         * Whether showing the window menu is supported.
         * See {@link Gdk.Toplevel.show_window_menu}.
         * @since 4.20
         */
        WINDOW_MENU = 8,
        /**
         * Whether the toplevel can be maximized.
         * @since 4.20
         */
        MAXIMIZE = 16,
        /**
         * Whether the toplevel can be made fullscreen.
         * @since 4.20
         */
        FULLSCREEN = 32,
        /**
         * Whether the toplevel can be minimized.
         * See {@link Gdk.Toplevel.minimize}.
         * @since 4.20
         */
        MINIMIZE = 64,
        /**
         * Whether the toplevel can be lowered.
         * See {@link Gdk.Toplevel.lower}.
         * @since 4.20
         */
        LOWER = 128,
    }


    /**
     * @gir-type Flags
     */
    export namespace ToplevelState {
        export const $gtype: GObject.GType<ToplevelState>;
    }

    /**
     * Specifies the state of a toplevel surface.
     * 
     * On platforms that support information about individual edges, the
     * {@link Gdk.ToplevelState.TILED} state will be set whenever any of the individual
     * tiled states is set. On platforms that lack that support, the tiled state
     * will give an indication of tiledness without any of the per-edge states
     * being set.
     * @gir-type Flags
     */
    enum ToplevelState {
        /**
         * the surface is minimized
         */
        MINIMIZED = 1,
        /**
         * the surface is maximized
         */
        MAXIMIZED = 2,
        /**
         * the surface is sticky
         */
        STICKY = 4,
        /**
         * the surface is maximized without decorations
         */
        FULLSCREEN = 8,
        /**
         * the surface is kept above other surfaces
         */
        ABOVE = 16,
        /**
         * the surface is kept below other surfaces
         */
        BELOW = 32,
        /**
         * the surface is presented as focused (with active decorations)
         */
        FOCUSED = 64,
        /**
         * the surface is in a tiled state
         */
        TILED = 128,
        /**
         * whether the top edge is tiled
         */
        TOP_TILED = 256,
        /**
         * whether the top edge is resizable
         */
        TOP_RESIZABLE = 512,
        /**
         * whether the right edge is tiled
         */
        RIGHT_TILED = 1024,
        /**
         * whether the right edge is resizable
         */
        RIGHT_RESIZABLE = 2048,
        /**
         * whether the bottom edge is tiled
         */
        BOTTOM_TILED = 4096,
        /**
         * whether the bottom edge is resizable
         */
        BOTTOM_RESIZABLE = 8192,
        /**
         * whether the left edge is tiled
         */
        LEFT_TILED = 16384,
        /**
         * whether the left edge is resizable
         */
        LEFT_RESIZABLE = 32768,
        /**
         * The surface is not visible to the user.
         * @since 4.12
         */
        SUSPENDED = 65536,
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
     * Handles launching an application in a graphical context.
     * 
     * It is an implementation of {@link Gio.AppLaunchContext} that provides startup
     * notification and allows to launch applications on a specific workspace.
     * 
     * ## Launching an application
     * 
     * ```c
     * GdkAppLaunchContext *context;
     * 
     * context = gdk_display_get_app_launch_context (display);
     * 
     * gdk_app_launch_context_set_timestamp (gdk_event_get_time (event));
     * 
     * if (!g_app_info_launch_default_for_uri ("http://www.gtk.org", context, &error))
     *   g_warning ("Launching failed: %s\n", error->message);
     * 
     * g_object_unref (context);
     * ```
     * @gir-type Class
     */
    class AppLaunchContext extends Gio.AppLaunchContext {
        static $gtype: GObject.GType<AppLaunchContext>;

        // Properties
        /**
         * The display that the {@link Gdk.AppLaunchContext} is on.
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
         * Gets the {@link Gdk.Display} that `context` is for.
         * @returns the display of `context`
         */
        get_display(): Display;

        /**
         * @param args 
         */
    // Conflicted with Gio.AppLaunchContext.get_display
        get_display(...args: never[]): any;

        /**
         * Sets the workspace on which applications will be launched.
         * 
         * This only works when running under a window manager that
         * supports multiple workspaces, as described in the
         * [Extended Window Manager Hints](https://specifications.freedesktop.org/wm/latest/).
         * Specifically this sets the `_NET_WM_DESKTOP` property described
         * in that spec.
         * 
         * This only works when using the X11 backend.
         * 
         * When the workspace is not specified or `desktop` is set to -1,
         * it is up to the window manager to pick one, typically it will
         * be the current workspace.
         * @param desktop the number of a workspace, or -1
         */
        set_desktop(desktop: number): void;

        /**
         * Sets the icon for applications that are launched with this
         * context.
         * 
         * Window Managers can use this information when displaying startup
         * notification.
         * 
         * See also {@link Gdk.AppLaunchContext.set_icon_name}.
         * @param icon a {@link Gio.Icon}
         */
        set_icon(icon: Gio.Icon | null): void;

        /**
         * Sets the icon for applications that are launched with this context.
         * 
         * The `icon_name` will be interpreted in the same way as the Icon field
         * in desktop files. See also {@link Gdk.AppLaunchContext.set_icon}.
         * 
         * If both `icon` and `icon_name` are set, the `icon_name` takes priority.
         * If neither `icon` or `icon_name` is set, the icon is taken from either
         * the file that is passed to launched application or from the {@link Gio.AppInfo}
         * for the launched application itself.
         * @param icon_name an icon name
         */
        set_icon_name(icon_name: string | null): void;

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
         * @param timestamp a timestamp
         */
        set_timestamp(timestamp: number): void;
    }


    namespace ButtonEvent {
        // Signal signatures
        interface SignalSignatures extends Event.SignalSignatures {}
    }

    /**
     * An event related to a button on a pointer device.
     * @gir-type Class
     */
    class ButtonEvent extends Event {
        static $gtype: GObject.GType<ButtonEvent>;

        // Constructors
        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof ButtonEvent.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ButtonEvent.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ButtonEvent.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ButtonEvent.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ButtonEvent.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ButtonEvent.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Extract the button number from a button event.
         * @returns the button of `event`
         */
        get_button(): number;
    }


    namespace CairoContext {
        // Signal signatures
        interface SignalSignatures extends DrawContext.SignalSignatures {
            "notify::display": (pspec: GObject.ParamSpec) => void;
            "notify::surface": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends DrawContext.ConstructorProps {}
    }

    /**
     * Represents the platform-specific draw context.
     * 
     * {@link Gdk.CairoContext}s are created for a surface using
     * {@link Gdk.Surface.create_cairo_context}, and the context
     * can then be used to draw on that surface.
     * @gir-type Class
     */
    abstract class CairoContext extends DrawContext {
        static $gtype: GObject.GType<CairoContext>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CairoContext.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<CairoContext.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof CairoContext.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CairoContext.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof CairoContext.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CairoContext.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof CairoContext.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<CairoContext.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Retrieves a Cairo context to be used to draw on the {@link Gdk.Surface}
         * of `context`.
         * 
         * A call to {@link Gdk.DrawContext.begin_frame} with this
         * `context` must have been done or this function will return `null`.
         * 
         * The returned context is guaranteed to be valid until
         * {@link Gdk.DrawContext.end_frame} is called.
         * @returns a Cairo context   to draw on `GdkSurface
         * @deprecated since 4.18: Drawing content with Cairo should be done via   Cairo rendernodes, not by using renderers.
         */
        cairo_create(): cairo.Context | null;
    }


    namespace CicpParams {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::color-primaries": (pspec: GObject.ParamSpec) => void;
            "notify::matrix-coefficients": (pspec: GObject.ParamSpec) => void;
            "notify::range": (pspec: GObject.ParamSpec) => void;
            "notify::transfer-function": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            color_primaries: number;
            colorPrimaries: number;
            matrix_coefficients: number;
            matrixCoefficients: number;
            range: CicpRange;
            transfer_function: number;
            transferFunction: number;
        }
    }

    /**
     * Contains the parameters that define a colorstate with cicp parameters.
     * 
     * Cicp parameters are specified in the ITU-T H.273
     * [specification](https://www.itu.int/rec/T-REC-H.273/en).
     * 
     * See the documentation of individual properties for supported values.
     * 
     * The 'unspecified' value (2) is not treated in any special way, and
     * must be replaced by a different value before creating a color state.
     * 
     * {@link Gdk.CicpParams} can be used as a builder object to construct a color
     * state from Cicp data with {@link Gdk.CicpParams.build_color_state}.
     * The function will return an error if the given parameters are not
     * supported.
     * 
     * You can obtain a {@link Gdk.CicpParams} object from a color state with
     * {@link Gdk.ColorState.create_cicp_params}. This can be used to
     * create a variant of a color state, by changing just one of the cicp
     * parameters, or just to obtain information about the color state.
     * @gir-type Class
     * @since 4.16
     */
    class CicpParams extends GObject.Object {
        static $gtype: GObject.GType<CicpParams>;

        // Properties
        /**
         * The color primaries to use.
         * 
         * Supported values:
         * 
         * - 1: BT.709 / sRGB
         * - 2: unspecified
         * - 5: PAL
         * - 6,7: BT.601 / NTSC
         * - 9: BT.2020
         * - 12: Display P3
         * @since 4.16
         * @default 2
         */
        get color_primaries(): number;
        set color_primaries(val: number);

        /**
         * The color primaries to use.
         * 
         * Supported values:
         * 
         * - 1: BT.709 / sRGB
         * - 2: unspecified
         * - 5: PAL
         * - 6,7: BT.601 / NTSC
         * - 9: BT.2020
         * - 12: Display P3
         * @since 4.16
         * @default 2
         */
        get colorPrimaries(): number;
        set colorPrimaries(val: number);

        /**
         * The matrix coefficients (for YUV to RGB conversion).
         * 
         * Supported values:
         * 
         * - 0: RGB
         * - 1: BT.709
         * - 2: unspecified
         * - 5,6: BT.601
         * - 9: BT.2020
         * @since 4.16
         * @default 2
         */
        get matrix_coefficients(): number;
        set matrix_coefficients(val: number);

        /**
         * The matrix coefficients (for YUV to RGB conversion).
         * 
         * Supported values:
         * 
         * - 0: RGB
         * - 1: BT.709
         * - 2: unspecified
         * - 5,6: BT.601
         * - 9: BT.2020
         * @since 4.16
         * @default 2
         */
        get matrixCoefficients(): number;
        set matrixCoefficients(val: number);

        /**
         * Whether the data is using the full range of values.
         * 
         * The range of the data.
         * @since 4.16
         * @default Gdk.CicpRange.NARROW
         */
        get range(): CicpRange;
        set range(val: CicpRange);

        /**
         * The transfer function to use.
         * 
         * Supported values:
         * 
         * - 1,6,14,15: BT.709, BT.601, BT.2020
         * - 2: unspecified
         * - 4: gamma 2.2
         * - 5: gamma 2.8
         * - 8: linear
         * - 13: sRGB
         * - 16: BT.2100 PQ
         * - 18: BT.2100 HLG
         * @since 4.16
         * @default 2
         */
        get transfer_function(): number;
        set transfer_function(val: number);

        /**
         * The transfer function to use.
         * 
         * Supported values:
         * 
         * - 1,6,14,15: BT.709, BT.601, BT.2020
         * - 2: unspecified
         * - 4: gamma 2.2
         * - 5: gamma 2.8
         * - 8: linear
         * - 13: sRGB
         * - 16: BT.2100 PQ
         * - 18: BT.2100 HLG
         * @since 4.16
         * @default 2
         */
        get transferFunction(): number;
        set transferFunction(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CicpParams.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<CicpParams.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): CicpParams;

        // Signals
        /** @signal */
        connect<K extends keyof CicpParams.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CicpParams.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof CicpParams.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CicpParams.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof CicpParams.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<CicpParams.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Creates a new {@link Gdk.ColorState} object for the cicp parameters in `self`.
         * 
         * Note that this may fail if the cicp parameters in `self` are not
         * supported by GTK. In that case, `NULL` is returned, and `error` is set
         * with an error message that can be presented to the user.
         * @returns A newly allocated {@link Gdk.ColorState}
         * @since 4.16
         * @throws GLib.Error
         */
        build_color_state(): ColorState;

        /**
         * Returns the value of the color-primaries property
         * of `self`.
         * @returns the color-primaries value
         * @since 4.16
         */
        get_color_primaries(): number;

        /**
         * Gets the matrix-coefficients property of `self`.
         * @returns the matrix-coefficients value
         * @since 4.16
         */
        get_matrix_coefficients(): number;

        /**
         * Gets the range property of `self`.
         * @returns the range value
         * @since 4.16
         */
        get_range(): CicpRange;

        /**
         * Gets the transfer-function property of `self`.
         * @returns the transfer-function value
         * @since 4.16
         */
        get_transfer_function(): number;

        /**
         * Sets the color-primaries property of `self`.
         * @param color_primaries the new color primaries value
         * @since 4.16
         */
        set_color_primaries(color_primaries: number): void;

        /**
         * `self` a {@link Gdk.CicpParams}
         * Sets the matrix-coefficients property of `self`.
         * @param matrix_coefficients the new matrix-coefficients value
         * @since 4.16
         */
        set_matrix_coefficients(matrix_coefficients: number): void;

        /**
         * Sets the range property of `self`
         * @param range the range value
         * @since 4.16
         */
        set_range(range: CicpRange): void;

        /**
         * Sets the transfer-function property of `self`.
         * @param transfer_function the new transfer-function value
         * @since 4.16
         */
        set_transfer_function(transfer_function: number): void;
    }


    namespace Clipboard {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * Emitted when the clipboard changes ownership.
             * @signal
             * @run-last
             */
            changed: () => void;
            "notify::content": (pspec: GObject.ParamSpec) => void;
            "notify::display": (pspec: GObject.ParamSpec) => void;
            "notify::formats": (pspec: GObject.ParamSpec) => void;
            "notify::local": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            content: ContentProvider | null;
            display: Display;
            formats: ContentFormats;
            local: boolean;
        }
    }

    /**
     * Represents data shared between applications or inside an application.
     * 
     * To get a {@link Gdk.Clipboard} object, use {@link Gdk.Display.get_clipboard} or
     * {@link Gdk.Display.get_primary_clipboard}. You can find out about the data
     * that is currently available in a clipboard using
     * {@link Gdk.Clipboard.get_formats}.
     * 
     * To make text or image data available in a clipboard, use
     * {@link Gdk.Clipboard.set_text} or {@link Gdk.Clipboard.set_texture}.
     * For other data, you can use {@link Gdk.Clipboard.set_content}, which
     * takes a {@link Gdk.ContentProvider} object.
     * 
     * To read textual or image data from a clipboard, use
     * {@link Gdk.Clipboard.read_text_async} or
     * {@link Gdk.Clipboard.read_texture_async}. For other data, use
     * {@link Gdk.Clipboard.read_async}, which provides a {@link Gio.InputStream} object.
     * @gir-type Class
     */
    class Clipboard extends GObject.Object {
        static $gtype: GObject.GType<Clipboard>;

        // Properties
        /**
         * The {@link Gdk.ContentProvider} or `null` if the clipboard is empty or contents are
         * provided otherwise.
         * @read-only
         */
        get content(): ContentProvider | null;

        /**
         * The {@link Gdk.Display} that the clipboard belongs to.
         * @construct-only
         */
        get display(): Display;

        /**
         * The possible formats that the clipboard can provide its data in.
         * @read-only
         */
        get formats(): ContentFormats;

        /**
         * `true` if the contents of the clipboard are owned by this process.
         * @read-only
         * @default true
         */
        get local(): boolean;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Clipboard.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Clipboard.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof Clipboard.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Clipboard.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Clipboard.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Clipboard.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Clipboard.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Clipboard.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Returns the {@link Gdk.ContentProvider} currently set on `clipboard`.
         * 
         * If the `clipboard` is empty or its contents are not owned by the
         * current process, `null` will be returned.
         * @returns The content of a clipboard   if the clipboard does not maintain any content
         */
        get_content(): ContentProvider | null;

        /**
         * Gets the {@link Gdk.Display} that the clipboard was created for.
         * @returns a {@link Gdk.Display}
         */
        get_display(): Display;

        /**
         * Gets the formats that the clipboard can provide its current contents in.
         * @returns The formats of the clipboard
         */
        get_formats(): ContentFormats;

        /**
         * Returns if the clipboard is local.
         * 
         * A clipboard is considered local if it was last claimed
         * by the running application.
         * 
         * Note that {@link Gdk.Clipboard.get_content} may return `null`
         * even on a local clipboard. In this case the clipboard is empty.
         * @returns `true` if the clipboard is local
         */
        is_local(): boolean;

        /**
         * Asynchronously requests an input stream to read the `clipboard`'s
         * contents from.
         * 
         * The clipboard will choose the most suitable mime type from the given list
         * to fulfill the request, preferring the ones listed first.
         * @param mime_types a `null`-terminated array of mime types to choose from
         * @param io_priority the I/O priority of the request
         * @param cancellable optional {@link Gio.Cancellable} object
         */
        read_async(mime_types: string[], io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<[Gio.InputStream | null, string]>;

        /**
         * Asynchronously requests an input stream to read the `clipboard`'s
         * contents from.
         * 
         * The clipboard will choose the most suitable mime type from the given list
         * to fulfill the request, preferring the ones listed first.
         * @param mime_types a `null`-terminated array of mime types to choose from
         * @param io_priority the I/O priority of the request
         * @param cancellable optional {@link Gio.Cancellable} object
         * @param callback callback to call when the request is satisfied
         */
        read_async(mime_types: string[], io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Asynchronously requests an input stream to read the `clipboard`'s
         * contents from.
         * 
         * The clipboard will choose the most suitable mime type from the given list
         * to fulfill the request, preferring the ones listed first.
         * @param mime_types a `null`-terminated array of mime types to choose from
         * @param io_priority the I/O priority of the request
         * @param cancellable optional {@link Gio.Cancellable} object
         * @param callback callback to call when the request is satisfied
         */
        read_async(mime_types: string[], io_priority: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<[Gio.InputStream | null, string]> | void;

        /**
         * Finishes an asynchronous clipboard read.
         * 
         * See {@link Gdk.Clipboard.read_async}.
         * @param result a {@link Gio.AsyncResult}
         * @returns a {@link Gio.InputStream}
         * @throws GLib.Error
         */
        read_finish(result: Gio.AsyncResult): [Gio.InputStream | null, string];

        /**
         * Asynchronously request the `clipboard` contents converted to a string.
         * 
         * This is a simple wrapper around {@link Gdk.Clipboard.read_value_async}.
         * Use that function or {@link Gdk.Clipboard.read_async} directly if you
         * need more control over the operation.
         * @param cancellable optional {@link Gio.Cancellable} object
         */
        read_text_async(cancellable: Gio.Cancellable | null): globalThis.Promise<string | null>;

        /**
         * Asynchronously request the `clipboard` contents converted to a string.
         * 
         * This is a simple wrapper around {@link Gdk.Clipboard.read_value_async}.
         * Use that function or {@link Gdk.Clipboard.read_async} directly if you
         * need more control over the operation.
         * @param cancellable optional {@link Gio.Cancellable} object
         * @param callback callback to call when the request is satisfied
         */
        read_text_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Asynchronously request the `clipboard` contents converted to a string.
         * 
         * This is a simple wrapper around {@link Gdk.Clipboard.read_value_async}.
         * Use that function or {@link Gdk.Clipboard.read_async} directly if you
         * need more control over the operation.
         * @param cancellable optional {@link Gio.Cancellable} object
         * @param callback callback to call when the request is satisfied
         */
        read_text_async(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<string | null> | void;

        /**
         * Finishes an asynchronous clipboard read.
         * 
         * See {@link Gdk.Clipboard.read_text_async}.
         * @param result a {@link Gio.AsyncResult}
         * @returns a new string
         * @throws GLib.Error
         */
        read_text_finish(result: Gio.AsyncResult): string | null;

        /**
         * Asynchronously request the `clipboard` contents converted to a {@link GdkPixbuf.Pixbuf}.
         * 
         * This is a simple wrapper around {@link Gdk.Clipboard.read_value_async}.
         * Use that function or {@link Gdk.Clipboard.read_async} directly if you
         * need more control over the operation.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         */
        read_texture_async(cancellable: Gio.Cancellable | null): globalThis.Promise<Texture | null>;

        /**
         * Asynchronously request the `clipboard` contents converted to a {@link GdkPixbuf.Pixbuf}.
         * 
         * This is a simple wrapper around {@link Gdk.Clipboard.read_value_async}.
         * Use that function or {@link Gdk.Clipboard.read_async} directly if you
         * need more control over the operation.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback callback to call when the request is satisfied
         */
        read_texture_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Asynchronously request the `clipboard` contents converted to a {@link GdkPixbuf.Pixbuf}.
         * 
         * This is a simple wrapper around {@link Gdk.Clipboard.read_value_async}.
         * Use that function or {@link Gdk.Clipboard.read_async} directly if you
         * need more control over the operation.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback callback to call when the request is satisfied
         */
        read_texture_async(cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<Texture | null> | void;

        /**
         * Finishes an asynchronous clipboard read.
         * 
         * See {@link Gdk.Clipboard.read_texture_async}.
         * @param result a {@link Gio.AsyncResult}
         * @returns a new {@link Gdk.Texture}
         * @throws GLib.Error
         */
        read_texture_finish(result: Gio.AsyncResult): Texture | null;

        /**
         * Asynchronously request the `clipboard` contents converted to the given
         * `type`.
         * 
         * For local clipboard contents that are available in the given {@link GObject.GType},
         * the value will be copied directly. Otherwise, GDK will try to use
         * {@link content_deserialize_async} to convert the clipboard's data.
         * @param type a {@link GObject.GType} to read
         * @param io_priority the I/O priority of the request
         * @param cancellable optional {@link Gio.Cancellable} object
         */
        read_value_async(type: GObject.GType, io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<unknown>;

        /**
         * Asynchronously request the `clipboard` contents converted to the given
         * `type`.
         * 
         * For local clipboard contents that are available in the given {@link GObject.GType},
         * the value will be copied directly. Otherwise, GDK will try to use
         * {@link content_deserialize_async} to convert the clipboard's data.
         * @param type a {@link GObject.GType} to read
         * @param io_priority the I/O priority of the request
         * @param cancellable optional {@link Gio.Cancellable} object
         * @param callback callback to call when the request is satisfied
         */
        read_value_async(type: GObject.GType, io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Asynchronously request the `clipboard` contents converted to the given
         * `type`.
         * 
         * For local clipboard contents that are available in the given {@link GObject.GType},
         * the value will be copied directly. Otherwise, GDK will try to use
         * {@link content_deserialize_async} to convert the clipboard's data.
         * @param type a {@link GObject.GType} to read
         * @param io_priority the I/O priority of the request
         * @param cancellable optional {@link Gio.Cancellable} object
         * @param callback callback to call when the request is satisfied
         */
        read_value_async(type: GObject.GType, io_priority: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<unknown> | void;

        /**
         * Finishes an asynchronous clipboard read.
         * 
         * See {@link Gdk.Clipboard.read_value_async}.
         * @param result a {@link Gio.AsyncResult}
         * @returns a {@link GObject.Value} containing the result.
         * @throws GLib.Error
         */
        read_value_finish(result: Gio.AsyncResult): unknown;

        /**
         * Sets a new content provider on `clipboard`.
         * 
         * The clipboard will claim the {@link Gdk.Display}'s resources and advertise
         * these new contents to other applications.
         * 
         * In the rare case of a failure, this function will return `false`. The
         * clipboard will then continue reporting its old contents and ignore
         * `provider`.
         * 
         * If the contents are read by either an external application or the
         * `clipboard`'s read functions, `clipboard` will select the best format to
         * transfer the contents and then request that format from `provider`.
         * @param provider the new contents of `clipboard`   or `null` to clear the clipboard
         * @returns `true` if setting the clipboard succeeded
         */
        set_content(provider: ContentProvider | null): boolean;

        /**
         * Sets the `clipboard` to contain the given `value`.
         * @param value a {@link GObject.Value} to set
         */
        set(value: GObject.Value | any): void;

        /**
         * @param args 
         */
    // Conflicted with GObject.Object.set
        set(...args: never[]): any;

        /**
         * Asynchronously instructs the `clipboard` to store its contents remotely.
         * 
         * If the clipboard is not local, this function does nothing but report success.
         * 
         * The purpose of this call is to preserve clipboard contents beyond the
         * lifetime of an application, so this function is typically called on
         * exit. Depending on the platform, the functionality may not be available
         * unless a "clipboard manager" is running.
         * 
         * This function is called automatically when a
         * [GtkApplication](../gtk4/class.Application.html)
         * is shut down, so you likely don't need to call it.
         * @param io_priority the I/O priority of the request
         * @param cancellable optional {@link Gio.Cancellable} object
         */
        store_async(io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;

        /**
         * Asynchronously instructs the `clipboard` to store its contents remotely.
         * 
         * If the clipboard is not local, this function does nothing but report success.
         * 
         * The purpose of this call is to preserve clipboard contents beyond the
         * lifetime of an application, so this function is typically called on
         * exit. Depending on the platform, the functionality may not be available
         * unless a "clipboard manager" is running.
         * 
         * This function is called automatically when a
         * [GtkApplication](../gtk4/class.Application.html)
         * is shut down, so you likely don't need to call it.
         * @param io_priority the I/O priority of the request
         * @param cancellable optional {@link Gio.Cancellable} object
         * @param callback callback to call when the request is satisfied
         */
        store_async(io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Asynchronously instructs the `clipboard` to store its contents remotely.
         * 
         * If the clipboard is not local, this function does nothing but report success.
         * 
         * The purpose of this call is to preserve clipboard contents beyond the
         * lifetime of an application, so this function is typically called on
         * exit. Depending on the platform, the functionality may not be available
         * unless a "clipboard manager" is running.
         * 
         * This function is called automatically when a
         * [GtkApplication](../gtk4/class.Application.html)
         * is shut down, so you likely don't need to call it.
         * @param io_priority the I/O priority of the request
         * @param cancellable optional {@link Gio.Cancellable} object
         * @param callback callback to call when the request is satisfied
         */
        store_async(io_priority: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;

        /**
         * Finishes an asynchronous clipboard store.
         * 
         * See {@link Gdk.Clipboard.store_async}.
         * @param result a {@link Gio.AsyncResult}
         * @returns `true` if storing was successful.
         * @throws GLib.Error
         */
        store_finish(result: Gio.AsyncResult): boolean;
    }


    namespace ContentDeserializer {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.AsyncResult.ConstructorProps {}
    }

    /**
     * Deserializes content received via inter-application data transfers.
     * 
     * The {@link Gdk.ContentDeserializer} transforms serialized content that is
     * identified by a mime type into an object identified by a GType.
     * 
     * GTK provides serializers and deserializers for common data types
     * such as text, colors, images or file lists. To register your own
     * deserialization functions, use {@link content_register_deserializer}.
     * 
     * Also see {@link Gdk.ContentSerializer}.
     * @gir-type Class
     */
    class ContentDeserializer extends GObject.Object implements Gio.AsyncResult {
        static $gtype: GObject.GType<ContentDeserializer>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ContentDeserializer.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ContentDeserializer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof ContentDeserializer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ContentDeserializer.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ContentDeserializer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ContentDeserializer.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ContentDeserializer.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ContentDeserializer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Gets the cancellable for the current operation.
         * 
         * This is the {@link Gio.Cancellable} that was passed to {@link Gdk.content_deserialize_async}.
         * @returns the cancellable for the current operation
         */
        get_cancellable(): Gio.Cancellable | null;

        /**
         * Gets the {@link GObject.GType} to create an instance of.
         * @returns the {@link GObject.GType} for the current operation
         */
        get_gtype(): GObject.GType;

        /**
         * Gets the input stream for the current operation.
         * 
         * This is the stream that was passed to {@link Gdk.content_deserialize_async}.
         * @returns the input stream for the current operation
         */
        get_input_stream(): Gio.InputStream;

        /**
         * Gets the mime type to deserialize from.
         * @returns the mime type for the current operation
         */
        get_mime_type(): string;

        /**
         * Gets the I/O priority for the current operation.
         * 
         * This is the priority that was passed to {@link Gdk.content_deserialize_async}.
         * @returns the I/O priority for the current operation
         */
        get_priority(): number;

        /**
         * Gets the data that was associated with the current operation.
         * 
         * See {@link Gdk.ContentDeserializer.set_task_data}.
         * @returns the task data for `deserializer`
         */
        get_task_data(): null;

        /**
         * Gets the user data that was passed when the deserializer was registered.
         * @returns the user data for this deserializer
         */
        get_user_data(): null;

        /**
         * Gets the {@link GObject.Value} to store the deserialized object in.
         * @returns the {@link GObject.Value} for the current operation
         */
        get_value(): unknown;

        /**
         * Indicate that the deserialization has ended with an error.
         * 
         * This function consumes `error`.
         * @param error a {@link GLib.Error}
         */
        return_error(error: GLib.Error): void;

        /**
         * Indicate that the deserialization has been successfully completed.
         */
        return_success(): void;

        /**
         * Associate data with the current deserialization operation.
         * @param data data to associate with this operation
         */
        set_task_data(data: null): void;

        /**
         * Gets the source object from a {@link Gio.AsyncResult}.
         * @returns a new reference to the source    object for the `res`, or `NULL` if there is none.
         */
        get_source_object<T = GObject.Object>(): T;

        /**
         * Checks if `res` has the given `source_tag` (generally a function
         * pointer indicating the function `res` was created by).
         * @param source_tag an application-defined tag
         * @returns `TRUE` if `res` has the indicated `source_tag`, `FALSE` if   not.
         * @since 2.34
         */
        is_tagged(source_tag: null): boolean;

        /**
         * If `res` is a {@link Gio.SimpleAsyncResult}, this is equivalent to
         * {@link Gio.SimpleAsyncResult.propagate_error}. Otherwise it returns
         * `FALSE`.
         * 
         * This can be used for legacy error handling in async `*_finish()`
         * wrapper functions that traditionally handled {@link Gio.SimpleAsyncResult}
         * error returns themselves rather than calling into the virtual method.
         * This should not be used in new code; {@link Gio.AsyncResult} errors that are
         * set by virtual methods should also be extracted by virtual methods,
         * to enable subclasses to chain up correctly.
         * @returns `TRUE` if `error` is has been filled in with an error from   `res`, `FALSE` if not.
         * @since 2.34
         * @throws GLib.Error
         */
        legacy_propagate_error(): boolean;

        /**
         * Gets the source object from a {@link Gio.AsyncResult}.
         * @virtual
         */
        vfunc_get_source_object<T = GObject.Object>(): T;

        /**
         * Gets the user data from a {@link Gio.AsyncResult}.
         * @virtual
         */
        vfunc_get_user_data(): null;

        /**
         * Checks if `res` has the given `source_tag` (generally a function
         * pointer indicating the function `res` was created by).
         * @param source_tag an application-defined tag
         * @since 2.34
         * @virtual
         */
        vfunc_is_tagged(source_tag: null): boolean;
    }


    namespace ContentProvider {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * Emitted whenever the content provided by this provider has changed.
             * @signal
             * @run-last
             */
            "content-changed": () => void;
            "notify::formats": (pspec: GObject.ParamSpec) => void;
            "notify::storable-formats": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            formats: ContentFormats;
            storable_formats: ContentFormats;
            storableFormats: ContentFormats;
        }
    }

    /**
     * Provides content for the clipboard or for drag-and-drop operations
     * in a number of formats.
     * 
     * To create a {@link Gdk.ContentProvider}, use {@link Gdk.ContentProvider.new_for_value}
     * or {@link Gdk.ContentProvider.new_for_bytes}.
     * 
     * GDK knows how to handle common text and image formats out-of-the-box. See
     * {@link Gdk.ContentSerializer} and {@link Gdk.ContentDeserializer} if you want
     * to add support for application-specific data formats.
     * @gir-type Class
     */
    class ContentProvider extends GObject.Object {
        static $gtype: GObject.GType<ContentProvider>;

        // Properties
        /**
         * The possible formats that the provider can provide its data in.
         * @read-only
         */
        get formats(): ContentFormats;

        /**
         * The subset of formats that clipboard managers should store this provider's data in.
         * @read-only
         */
        get storable_formats(): ContentFormats;

        /**
         * The subset of formats that clipboard managers should store this provider's data in.
         * @read-only
         */
        get storableFormats(): ContentFormats;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ContentProvider.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ContentProvider.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_for_bytes(mime_type: string, bytes: GLib.Bytes | Uint8Array): ContentProvider;

        static new_for_value(value: GObject.Value | any): ContentProvider;

        static new_union(providers: ContentProvider[] | null): ContentProvider;

        // Signals
        /** @signal */
        connect<K extends keyof ContentProvider.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ContentProvider.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ContentProvider.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ContentProvider.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ContentProvider.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ContentProvider.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @param clipboard 
         * @virtual
         */
        vfunc_attach_clipboard(clipboard: Clipboard): void;

        /**
         * Emits the ::content-changed signal.
         * @virtual
         */
        vfunc_content_changed(): void;

        /**
         * @param clipboard 
         * @virtual
         */
        vfunc_detach_clipboard(clipboard: Clipboard): void;

        /**
         * Gets the contents of `provider` stored in `value`.
         * 
         * The `value` will have been initialized to the {@link GObject.GType} the value should be
         * provided in. This given {@link GObject.GType} does not need to be listed in the formats
         * returned by {@link Gdk.ContentProvider.ref_formats}. However, if the
         * given {@link GObject.GType} is not supported, this operation can fail and
         * `G_IO_ERROR_NOT_SUPPORTED` will be reported.
         * @virtual
         */
        vfunc_get_value(): [boolean, GObject.Value | any];

        /**
         * Gets the formats that the provider can provide its current contents in.
         * @virtual
         */
        vfunc_ref_formats(): ContentFormats;

        /**
         * Gets the formats that the provider suggests other applications to store
         * the data in.
         * 
         * An example of such an application would be a clipboard manager.
         * 
         * This can be assumed to be a subset of {@link Gdk.ContentProvider.ref_formats}.
         * @virtual
         */
        vfunc_ref_storable_formats(): ContentFormats;

        /**
         * Asynchronously writes the contents of `provider` to `stream` in the given
         * `mime_type`.
         * 
         * The given mime type does not need to be listed in the formats returned by
         * {@link Gdk.ContentProvider.ref_formats}. However, if the given {@link GObject.GType} is
         * not supported, `G_IO_ERROR_NOT_SUPPORTED` will be reported.
         * 
         * The given `stream` will not be closed.
         * @param mime_type the mime type to provide the data in
         * @param stream the {@link Gio.OutputStream} to write to
         * @param io_priority I/O priority of the request.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback callback to call when the request is satisfied
         * @virtual
         */
        vfunc_write_mime_type_async(mime_type: string, stream: Gio.OutputStream, io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Finishes an asynchronous write operation.
         * 
         * See {@link Gdk.ContentProvider.write_mime_type_async}.
         * @param result a {@link Gio.AsyncResult}
         * @virtual
         */
        vfunc_write_mime_type_finish(result: Gio.AsyncResult): boolean;

        // Methods
        /**
         * Emits the ::content-changed signal.
         */
        content_changed(): void;

        /**
         * Gets the contents of `provider` stored in `value`.
         * 
         * The `value` will have been initialized to the {@link GObject.GType} the value should be
         * provided in. This given {@link GObject.GType} does not need to be listed in the formats
         * returned by {@link Gdk.ContentProvider.ref_formats}. However, if the
         * given {@link GObject.GType} is not supported, this operation can fail and
         * `G_IO_ERROR_NOT_SUPPORTED` will be reported.
         * @returns `true` if the value was set successfully. Otherwise   `error` will be set to describe the failure.
         * @throws GLib.Error
         */
        get_value(): [boolean, unknown];

        /**
         * Gets the formats that the provider can provide its current contents in.
         * @returns The formats of the provider
         */
        ref_formats(): ContentFormats;

        /**
         * Gets the formats that the provider suggests other applications to store
         * the data in.
         * 
         * An example of such an application would be a clipboard manager.
         * 
         * This can be assumed to be a subset of {@link Gdk.ContentProvider.ref_formats}.
         * @returns The storable formats of the provider
         */
        ref_storable_formats(): ContentFormats;

        /**
         * Asynchronously writes the contents of `provider` to `stream` in the given
         * `mime_type`.
         * 
         * The given mime type does not need to be listed in the formats returned by
         * {@link Gdk.ContentProvider.ref_formats}. However, if the given {@link GObject.GType} is
         * not supported, `G_IO_ERROR_NOT_SUPPORTED` will be reported.
         * 
         * The given `stream` will not be closed.
         * @param mime_type the mime type to provide the data in
         * @param stream the {@link Gio.OutputStream} to write to
         * @param io_priority I/O priority of the request.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         */
        write_mime_type_async(mime_type: string, stream: Gio.OutputStream, io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>;

        /**
         * Asynchronously writes the contents of `provider` to `stream` in the given
         * `mime_type`.
         * 
         * The given mime type does not need to be listed in the formats returned by
         * {@link Gdk.ContentProvider.ref_formats}. However, if the given {@link GObject.GType} is
         * not supported, `G_IO_ERROR_NOT_SUPPORTED` will be reported.
         * 
         * The given `stream` will not be closed.
         * @param mime_type the mime type to provide the data in
         * @param stream the {@link Gio.OutputStream} to write to
         * @param io_priority I/O priority of the request.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback callback to call when the request is satisfied
         */
        write_mime_type_async(mime_type: string, stream: Gio.OutputStream, io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Asynchronously writes the contents of `provider` to `stream` in the given
         * `mime_type`.
         * 
         * The given mime type does not need to be listed in the formats returned by
         * {@link Gdk.ContentProvider.ref_formats}. However, if the given {@link GObject.GType} is
         * not supported, `G_IO_ERROR_NOT_SUPPORTED` will be reported.
         * 
         * The given `stream` will not be closed.
         * @param mime_type the mime type to provide the data in
         * @param stream the {@link Gio.OutputStream} to write to
         * @param io_priority I/O priority of the request.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback callback to call when the request is satisfied
         */
        write_mime_type_async(mime_type: string, stream: Gio.OutputStream, io_priority: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<boolean> | void;

        /**
         * Finishes an asynchronous write operation.
         * 
         * See {@link Gdk.ContentProvider.write_mime_type_async}.
         * @param result a {@link Gio.AsyncResult}
         * @returns `true` if the operation was completed successfully. Otherwise   `error` will be set to describe the failure.
         * @throws GLib.Error
         */
        write_mime_type_finish(result: Gio.AsyncResult): boolean;
    }


    namespace ContentSerializer {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.AsyncResult.ConstructorProps {}
    }

    /**
     * Serializes content for inter-application data transfers.
     * 
     * The {@link Gdk.ContentSerializer} transforms an object that is identified
     * by a GType into a serialized form (i.e. a byte stream) that is
     * identified by a mime type.
     * 
     * GTK provides serializers and deserializers for common data types
     * such as text, colors, images or file lists. To register your own
     * serialization functions, use {@link Gdk.content_register_serializer}.
     * 
     * Also see {@link Gdk.ContentDeserializer}.
     * @gir-type Class
     */
    class ContentSerializer extends GObject.Object implements Gio.AsyncResult {
        static $gtype: GObject.GType<ContentSerializer>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ContentSerializer.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ContentSerializer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof ContentSerializer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ContentSerializer.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ContentSerializer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ContentSerializer.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ContentSerializer.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ContentSerializer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Gets the cancellable for the current operation.
         * 
         * This is the {@link Gio.Cancellable} that was passed to {@link content_serialize_async}.
         * @returns the cancellable for the current operation
         */
        get_cancellable(): Gio.Cancellable | null;

        /**
         * Gets the {@link GObject.GType} to of the object to serialize.
         * @returns the {@link GObject.GType} for the current operation
         */
        get_gtype(): GObject.GType;

        /**
         * Gets the mime type to serialize to.
         * @returns the mime type for the current operation
         */
        get_mime_type(): string;

        /**
         * Gets the output stream for the current operation.
         * 
         * This is the stream that was passed to {@link content_serialize_async}.
         * @returns the output stream for the current operation
         */
        get_output_stream(): Gio.OutputStream;

        /**
         * Gets the I/O priority for the current operation.
         * 
         * This is the priority that was passed to {@link content_serialize_async}.
         * @returns the I/O priority for the current operation
         */
        get_priority(): number;

        /**
         * Gets the data that was associated with the current operation.
         * 
         * See {@link Gdk.ContentSerializer.set_task_data}.
         * @returns the task data for `serializer`
         */
        get_task_data(): null;

        /**
         * Gets the user data that was passed when the serializer was registered.
         * @returns the user data for this serializer
         */
        get_user_data(): null;

        /**
         * Gets the {@link GObject.Value} to read the object to serialize from.
         * @returns the {@link GObject.Value} for the current operation
         */
        get_value(): unknown;

        /**
         * Indicate that the serialization has ended with an error.
         * 
         * This function consumes `error`.
         * @param error a {@link GLib.Error}
         */
        return_error(error: GLib.Error): void;

        /**
         * Indicate that the serialization has been successfully completed.
         */
        return_success(): void;

        /**
         * Associate data with the current serialization operation.
         * @param data data to associate with this operation
         */
        set_task_data(data: null): void;

        /**
         * Gets the source object from a {@link Gio.AsyncResult}.
         * @returns a new reference to the source    object for the `res`, or `NULL` if there is none.
         */
        get_source_object<T = GObject.Object>(): T;

        /**
         * Checks if `res` has the given `source_tag` (generally a function
         * pointer indicating the function `res` was created by).
         * @param source_tag an application-defined tag
         * @returns `TRUE` if `res` has the indicated `source_tag`, `FALSE` if   not.
         * @since 2.34
         */
        is_tagged(source_tag: null): boolean;

        /**
         * If `res` is a {@link Gio.SimpleAsyncResult}, this is equivalent to
         * {@link Gio.SimpleAsyncResult.propagate_error}. Otherwise it returns
         * `FALSE`.
         * 
         * This can be used for legacy error handling in async `*_finish()`
         * wrapper functions that traditionally handled {@link Gio.SimpleAsyncResult}
         * error returns themselves rather than calling into the virtual method.
         * This should not be used in new code; {@link Gio.AsyncResult} errors that are
         * set by virtual methods should also be extracted by virtual methods,
         * to enable subclasses to chain up correctly.
         * @returns `TRUE` if `error` is has been filled in with an error from   `res`, `FALSE` if not.
         * @since 2.34
         * @throws GLib.Error
         */
        legacy_propagate_error(): boolean;

        /**
         * Gets the source object from a {@link Gio.AsyncResult}.
         * @virtual
         */
        vfunc_get_source_object<T = GObject.Object>(): T;

        /**
         * Gets the user data from a {@link Gio.AsyncResult}.
         * @virtual
         */
        vfunc_get_user_data(): null;

        /**
         * Checks if `res` has the given `source_tag` (generally a function
         * pointer indicating the function `res` was created by).
         * @param source_tag an application-defined tag
         * @since 2.34
         * @virtual
         */
        vfunc_is_tagged(source_tag: null): boolean;
    }


    namespace CrossingEvent {
        // Signal signatures
        interface SignalSignatures extends Event.SignalSignatures {}
    }

    /**
     * An event caused by a pointing device moving between surfaces.
     * @gir-type Class
     */
    class CrossingEvent extends Event {
        static $gtype: GObject.GType<CrossingEvent>;

        // Constructors
        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof CrossingEvent.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CrossingEvent.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof CrossingEvent.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, CrossingEvent.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof CrossingEvent.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<CrossingEvent.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Extracts the notify detail from a crossing event.
         * @returns the notify detail of `event`
         */
        get_detail(): NotifyType;

        /**
         * Checks if the `event` surface is the focus surface.
         * @returns `true` if the surface is the focus surface
         */
        get_focus(): boolean;

        /**
         * Extracts the crossing mode from a crossing event.
         * @returns the mode of `event`
         */
        get_mode(): CrossingMode;
    }


    namespace Cursor {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::fallback": (pspec: GObject.ParamSpec) => void;
            "notify::hotspot-x": (pspec: GObject.ParamSpec) => void;
            "notify::hotspot-y": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::texture": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            fallback: Cursor | null;
            hotspot_x: number;
            hotspotX: number;
            hotspot_y: number;
            hotspotY: number;
            name: string | null;
            texture: Texture | null;
        }
    }

    /**
     * Used to create and destroy cursors.
     * 
     * Cursors are immutable objects, so once you created them, there is no way
     * to modify them later. You should create a new cursor when you want to change
     * something about it.
     * 
     * Cursors by themselves are not very interesting: they must be bound to a
     * window for users to see them. This is done with {@link Gdk.Surface.set_cursor}
     * or {@link Gdk.Surface.set_device_cursor}. Applications will typically
     * use higher-level GTK functions such as [gtk_widget_set_cursor()](../gtk4/method.Widget.set_cursor.html)
     * instead.
     * 
     * Cursors are not bound to a given {@link Gdk.Display}, so they can be shared.
     * However, the appearance of cursors may vary when used on different
     * platforms.
     * 
     * ## Named and texture cursors
     * 
     * There are multiple ways to create cursors. The platform's own cursors
     * can be created with {@link Gdk.Cursor.new_from_name}. That function lists
     * the commonly available names that are shared with the CSS specification.
     * Other names may be available, depending on the platform in use. On some
     * platforms, what images are used for named cursors may be influenced by
     * the cursor theme.
     * 
     * Another option to create a cursor is to use {@link Gdk.Cursor.new_from_texture}
     * and provide an image to use for the cursor.
     * 
     * To ease work with unsupported cursors, a fallback cursor can be provided.
     * If a {@link Gdk.Surface} cannot use a cursor because of the reasons mentioned
     * above, it will try the fallback cursor. Fallback cursors can themselves have
     * fallback cursors again, so it is possible to provide a chain of progressively
     * easier to support cursors. If none of the provided cursors can be supported,
     * the default cursor will be the ultimate fallback.
     * @gir-type Class
     */
    class Cursor extends GObject.Object {
        static $gtype: GObject.GType<Cursor>;

        // Properties
        /**
         * Cursor to fall back to if this cursor cannot be displayed.
         * @construct-only
         */
        get fallback(): Cursor | null;

        /**
         * X position of the cursor hotspot in the cursor image.
         * @construct-only
         * @default 0
         */
        get hotspot_x(): number;

        /**
         * X position of the cursor hotspot in the cursor image.
         * @construct-only
         * @default 0
         */
        get hotspotX(): number;

        /**
         * Y position of the cursor hotspot in the cursor image.
         * @construct-only
         * @default 0
         */
        get hotspot_y(): number;

        /**
         * Y position of the cursor hotspot in the cursor image.
         * @construct-only
         * @default 0
         */
        get hotspotY(): number;

        /**
         * Name of this this cursor.
         * 
         * The name will be `null` if the cursor was created from a texture.
         * @construct-only
         * @default null
         */
        get name(): string | null;

        /**
         * The texture displayed by this cursor.
         * 
         * The texture will be `null` if the cursor was created from a name.
         * @construct-only
         */
        get texture(): Texture | null;

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

        static new_from_callback(callback: CursorGetTextureCallback, fallback: Cursor | null): Cursor;

        static new_from_name(name: string, fallback: Cursor | null): Cursor;

        static new_from_texture(texture: Texture, hotspot_x: number, hotspot_y: number, fallback: Cursor | null): Cursor;

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
         * Returns the fallback for this `cursor`.
         * 
         * The fallback will be used if this cursor is not available on a given
         * {@link Gdk.Display}. For named cursors, this can happen when using nonstandard
         * names or when using an incomplete cursor theme. For textured cursors,
         * this can happen when the texture is too large or when the {@link Gdk.Display}
         * it is used on does not support textured cursors.
         * @returns the fallback of the cursor or `null`   to use the default cursor as fallback
         */
        get_fallback(): Cursor | null;

        /**
         * Returns the horizontal offset of the hotspot.
         * 
         * The hotspot indicates the pixel that will be directly above the cursor.
         * 
         * Note that named cursors may have a nonzero hotspot, but this function
         * will only return the hotspot position for cursors created with
         * {@link Gdk.Cursor.new_from_texture}.
         * @returns the horizontal offset of the hotspot or 0 for named cursors
         */
        get_hotspot_x(): number;

        /**
         * Returns the vertical offset of the hotspot.
         * 
         * The hotspot indicates the pixel that will be directly above the cursor.
         * 
         * Note that named cursors may have a nonzero hotspot, but this function
         * will only return the hotspot position for cursors created with
         * {@link Gdk.Cursor.new_from_texture}.
         * @returns the vertical offset of the hotspot or 0 for named cursors
         */
        get_hotspot_y(): number;

        /**
         * Returns the name of the cursor.
         * 
         * If the cursor is not a named cursor, `null` will be returned.
         * @returns the name of the cursor or `null`   if it is not a named cursor
         */
        get_name(): string | null;

        /**
         * Returns the texture for the cursor.
         * 
         * If the cursor is a named cursor, `null` will be returned.
         * @returns the texture for cursor or `null`   if it is a named cursor
         */
        get_texture(): Texture | null;
    }


    namespace DNDEvent {
        // Signal signatures
        interface SignalSignatures extends Event.SignalSignatures {}
    }

    /**
     * An event related to drag and drop operations.
     * @gir-type Class
     */
    class DNDEvent extends Event {
        static $gtype: GObject.GType<DNDEvent>;

        // Constructors
        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof DNDEvent.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DNDEvent.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof DNDEvent.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DNDEvent.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof DNDEvent.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DNDEvent.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Gets the {@link Gdk.Drop} object from a DND event.
         * @returns the drop
         */
        get_drop(): Drop | null;
    }


    namespace DeleteEvent {
        // Signal signatures
        interface SignalSignatures extends Event.SignalSignatures {}
    }

    /**
     * An event related to closing a top-level surface.
     * @gir-type Class
     */
    class DeleteEvent extends Event {
        static $gtype: GObject.GType<DeleteEvent>;

        // Constructors
        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof DeleteEvent.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DeleteEvent.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof DeleteEvent.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DeleteEvent.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof DeleteEvent.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DeleteEvent.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace Device {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * Emitted either when the number of either axes or keys changes.
             * 
             * On X11 this will normally happen when the physical device
             * routing events through the logical device changes (for
             * example, user switches from the USB mouse to a tablet); in
             * that case the logical device will change to reflect the axes
             * and keys on the new physical device.
             * @signal
             * @run-last
             */
            changed: () => void;
            /**
             * Emitted on pen/eraser devices whenever tools enter or leave proximity.
             * @signal
             * @run-last
             */
            "tool-changed": (tool: DeviceTool) => void;
            "notify::active-layout-index": (pspec: GObject.ParamSpec) => void;
            "notify::caps-lock-state": (pspec: GObject.ParamSpec) => void;
            "notify::direction": (pspec: GObject.ParamSpec) => void;
            "notify::display": (pspec: GObject.ParamSpec) => void;
            "notify::has-bidi-layouts": (pspec: GObject.ParamSpec) => void;
            "notify::has-cursor": (pspec: GObject.ParamSpec) => void;
            "notify::layout-names": (pspec: GObject.ParamSpec) => void;
            "notify::modifier-state": (pspec: GObject.ParamSpec) => void;
            "notify::n-axes": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::num-lock-state": (pspec: GObject.ParamSpec) => void;
            "notify::num-touches": (pspec: GObject.ParamSpec) => void;
            "notify::product-id": (pspec: GObject.ParamSpec) => void;
            "notify::scroll-lock-state": (pspec: GObject.ParamSpec) => void;
            "notify::seat": (pspec: GObject.ParamSpec) => void;
            "notify::source": (pspec: GObject.ParamSpec) => void;
            "notify::tool": (pspec: GObject.ParamSpec) => void;
            "notify::vendor-id": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            active_layout_index: number;
            activeLayoutIndex: number;
            caps_lock_state: boolean;
            capsLockState: boolean;
            direction: Pango.Direction;
            display: Display;
            has_bidi_layouts: boolean;
            hasBidiLayouts: boolean;
            has_cursor: boolean;
            hasCursor: boolean;
            layout_names: string[] | null;
            layoutNames: string[] | null;
            modifier_state: ModifierType;
            modifierState: ModifierType;
            n_axes: number;
            nAxes: number;
            name: string;
            num_lock_state: boolean;
            numLockState: boolean;
            num_touches: number;
            numTouches: number;
            product_id: string | null;
            productId: string | null;
            scroll_lock_state: boolean;
            scrollLockState: boolean;
            seat: Seat;
            source: InputSource;
            tool: DeviceTool | null;
            vendor_id: string | null;
            vendorId: string | null;
        }
    }

    /**
     * Represents an input device, such as a keyboard, mouse or touchpad.
     * 
     * See the {@link Gdk.Seat} documentation for more information
     * about the various kinds of devices, and their relationships.
     * @gir-type Class
     */
    abstract class Device extends GObject.Object {
        static $gtype: GObject.GType<Device>;

        // Properties
        /**
         * The index of the keyboard active layout of a {@link Gdk.Device}.
         * 
         * Will be -1 if there is no valid active layout.
         * 
         * This is only relevant for keyboard devices.
         * 
         * Value changes from compositor events, connect to notify if needed.
         * @since 4.18
         * @read-only
         * @default 0
         */
        get active_layout_index(): number;

        /**
         * The index of the keyboard active layout of a {@link Gdk.Device}.
         * 
         * Will be -1 if there is no valid active layout.
         * 
         * This is only relevant for keyboard devices.
         * 
         * Value changes from compositor events, connect to notify if needed.
         * @since 4.18
         * @read-only
         * @default 0
         */
        get activeLayoutIndex(): number;

        /**
         * Whether Caps Lock is on.
         * 
         * This is only relevant for keyboard devices.
         * @read-only
         * @default false
         */
        get caps_lock_state(): boolean;

        /**
         * Whether Caps Lock is on.
         * 
         * This is only relevant for keyboard devices.
         * @read-only
         * @default false
         */
        get capsLockState(): boolean;

        /**
         * The direction of the current layout.
         * 
         * This is only relevant for keyboard devices.
         * @read-only
         * @default Pango.Direction.NEUTRAL
         */
        get direction(): Pango.Direction;

        /**
         * The {@link Gdk.Display} the {@link Gdk.Device} pertains to.
         * @construct-only
         */
        get display(): Display;

        /**
         * Whether the device has both right-to-left and left-to-right layouts.
         * 
         * This is only relevant for keyboard devices.
         * @read-only
         * @default false
         */
        get has_bidi_layouts(): boolean;

        /**
         * Whether the device has both right-to-left and left-to-right layouts.
         * 
         * This is only relevant for keyboard devices.
         * @read-only
         * @default false
         */
        get hasBidiLayouts(): boolean;

        /**
         * Whether the device is represented by a cursor on the screen.
         * @construct-only
         * @default false
         */
        get has_cursor(): boolean;

        /**
         * Whether the device is represented by a cursor on the screen.
         * @construct-only
         * @default false
         */
        get hasCursor(): boolean;

        /**
         * The names of the keyboard layouts of a {@link Gdk.Device}.
         * 
         * This is only relevant for keyboard devices.
         * 
         * Value changes from compositor events, connect to notify if needed.
         * @since 4.18
         * @read-only
         */
        get layout_names(): string[] | null;

        /**
         * The names of the keyboard layouts of a {@link Gdk.Device}.
         * 
         * This is only relevant for keyboard devices.
         * 
         * Value changes from compositor events, connect to notify if needed.
         * @since 4.18
         * @read-only
         */
        get layoutNames(): string[] | null;

        /**
         * The current modifier state of the device.
         * 
         * This is only relevant for keyboard devices.
         * @read-only
         * @default Gdk.ModifierType.NO_MODIFIER_MASK
         */
        get modifier_state(): ModifierType;

        /**
         * The current modifier state of the device.
         * 
         * This is only relevant for keyboard devices.
         * @read-only
         * @default Gdk.ModifierType.NO_MODIFIER_MASK
         */
        get modifierState(): ModifierType;

        /**
         * Number of axes in the device.
         * @read-only
         * @default 0
         */
        get n_axes(): number;

        /**
         * Number of axes in the device.
         * @read-only
         * @default 0
         */
        get nAxes(): number;

        /**
         * The device name.
         * @construct-only
         * @default null
         */
        get name(): string;

        /**
         * Whether Num Lock is on.
         * 
         * This is only relevant for keyboard devices.
         * @read-only
         * @default false
         */
        get num_lock_state(): boolean;

        /**
         * Whether Num Lock is on.
         * 
         * This is only relevant for keyboard devices.
         * @read-only
         * @default false
         */
        get numLockState(): boolean;

        /**
         * The maximal number of concurrent touches on a touch device.
         * 
         * Will be 0 if the device is not a touch device or if the number
         * of touches is unknown.
         * @construct-only
         * @default 0
         */
        get num_touches(): number;

        /**
         * The maximal number of concurrent touches on a touch device.
         * 
         * Will be 0 if the device is not a touch device or if the number
         * of touches is unknown.
         * @construct-only
         * @default 0
         */
        get numTouches(): number;

        /**
         * Product ID of this device.
         * 
         * See {@link Gdk.Device.get_product_id}.
         * @construct-only
         * @default null
         */
        get product_id(): string | null;

        /**
         * Product ID of this device.
         * 
         * See {@link Gdk.Device.get_product_id}.
         * @construct-only
         * @default null
         */
        get productId(): string | null;

        /**
         * Whether Scroll Lock is on.
         * 
         * This is only relevant for keyboard devices.
         * @read-only
         * @default false
         */
        get scroll_lock_state(): boolean;

        /**
         * Whether Scroll Lock is on.
         * 
         * This is only relevant for keyboard devices.
         * @read-only
         * @default false
         */
        get scrollLockState(): boolean;

        /**
         * {@link Gdk.Seat} of this device.
         */
        get seat(): Seat;
        set seat(val: Seat);

        /**
         * Source type for the device.
         * @construct-only
         * @default Gdk.InputSource.MOUSE
         */
        get source(): InputSource;

        /**
         * The {@link Gdk.DeviceTool} that is currently used with this device.
         * @read-only
         */
        get tool(): DeviceTool | null;

        /**
         * Vendor ID of this device.
         * 
         * See {@link Gdk.Device.get_vendor_id}.
         * @construct-only
         * @default null
         */
        get vendor_id(): string | null;

        /**
         * Vendor ID of this device.
         * 
         * See {@link Gdk.Device.get_vendor_id}.
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

        // Methods
        /**
         * Retrieves the index of the active layout of the keyboard.
         * 
         * If there is no valid active layout for the {@link Gdk.Device}, this function will
         * return -1;
         * 
         * This is only relevant for keyboard devices.
         * @returns The layout index of the active layout or -1.
         * @since 4.18
         */
        get_active_layout_index(): number;

        /**
         * Retrieves whether the Caps Lock modifier of the keyboard is locked.
         * 
         * This is only relevant for keyboard devices.
         * @returns `true` if Caps Lock is on for `device`
         */
        get_caps_lock_state(): boolean;

        /**
         * Retrieves the current tool for `device`.
         * @returns the {@link Gdk.DeviceTool}
         */
        get_device_tool(): DeviceTool | null;

        /**
         * Returns the direction of effective layout of the keyboard.
         * 
         * This is only relevant for keyboard devices.
         * 
         * The direction of a layout is the direction of the majority
         * of its symbols. See {@link Pango.unichar_direction}.
         * @returns {@link Pango.Direction.LTR} or {@link Pango.Direction.RTL}   if it can determine the direction. {@link Pango.Direction.NEUTRAL}   otherwise
         */
        get_direction(): Pango.Direction;

        /**
         * Returns the {@link Gdk.Display} to which `device` pertains.
         * @returns a {@link Gdk.Display}
         */
        get_display(): Display;

        /**
         * Determines whether the pointer follows device motion.
         * 
         * This is not meaningful for keyboard devices, which
         * don't have a pointer.
         * @returns `true` if the pointer follows device motion
         */
        get_has_cursor(): boolean;

        /**
         * Retrieves the names of the layouts of the keyboard.
         * 
         * This is only relevant for keyboard devices.
         * @returns `null`-terminated array of strings of layouts,
         * @since 4.18
         */
        get_layout_names(): string[] | null;

        /**
         * Retrieves the current modifier state of the keyboard.
         * 
         * This is only relevant for keyboard devices.
         * @returns the current modifier state
         */
        get_modifier_state(): ModifierType;

        /**
         * The name of the device, suitable for showing in a user interface.
         * @returns a name
         */
        get_name(): string;

        /**
         * Retrieves whether the Num Lock modifier of the keyboard is locked.
         * 
         * This is only relevant for keyboard devices.
         * @returns `true` if Num Lock is on for `device`
         */
        get_num_lock_state(): boolean;

        /**
         * Retrieves the number of touch points associated to `device`.
         * @returns the number of touch points
         */
        get_num_touches(): number;

        /**
         * Returns the product ID of this device.
         * 
         * This ID is retrieved from the device, and does not change.
         * See {@link Gdk.Device.get_vendor_id} for more information.
         * @returns the product ID
         */
        get_product_id(): string | null;

        /**
         * Retrieves whether the Scroll Lock modifier of the keyboard is locked.
         * 
         * This is only relevant for keyboard devices.
         * @returns `true` if Scroll Lock is on for `device`
         */
        get_scroll_lock_state(): boolean;

        /**
         * Returns the {@link Gdk.Seat} the device belongs to.
         * @returns a {@link Gdk.Seat}
         */
        get_seat(): Seat;

        /**
         * Determines the type of the device.
         * @returns a {@link Gdk.InputSource}
         */
        get_source(): InputSource;

        /**
         * Obtains the surface underneath `device`, returning the location of the
         * device in `win_x` and `win_y`.
         * 
         * Returns `null` if the surface tree under `device` is not known to GDK
         * (for example, belongs to another application).
         * @returns the {@link Gdk.Surface} under the   device position
         */
        get_surface_at_position(): [Surface | null, number, number];

        /**
         * Returns the timestamp of the last activity for this device.
         * 
         * In practice, this means the timestamp of the last event that was
         * received from the OS for this device. (GTK may occasionally produce
         * events for a device that are not received from the OS, and will not
         * update the timestamp).
         * @returns the timestamp of the last activity for this device
         * @since 4.2
         */
        get_timestamp(): number;

        /**
         * Returns the vendor ID of this device.
         * 
         * This ID is retrieved from the device, and does not change.
         * 
         * This function, together with {@link Gdk.Device.get_product_id},
         * can be used to eg. compose {@link Gio.Settings} paths to store settings
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
         * @returns the vendor ID
         */
        get_vendor_id(): string | null;
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
     * A physical tool associated to a {@link Gdk.Device}.
     * @gir-type Class
     */
    class DeviceTool extends GObject.Object {
        static $gtype: GObject.GType<DeviceTool>;

        // Properties
        /**
         * The axes of the tool.
         * @construct-only
         * @default 0
         */
        get axes(): AxisFlags;

        /**
         * The hardware ID of the tool.
         * @construct-only
         * @default 0
         */
        get hardware_id(): number;

        /**
         * The hardware ID of the tool.
         * @construct-only
         * @default 0
         */
        get hardwareId(): number;

        /**
         * The serial number of the tool.
         * @construct-only
         * @default 0
         */
        get serial(): number;

        /**
         * The type of the tool.
         * @construct-only
         * @default Gdk.DeviceToolType.UNKNOWN
         */
        get tool_type(): DeviceToolType;

        /**
         * The type of the tool.
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
         * Gets the axes of the tool.
         * @returns the axes of `tool`
         */
        get_axes(): AxisFlags;

        /**
         * Gets the hardware ID of this tool, or 0 if it's not known.
         * 
         * When non-zero, the identifier is unique for the given tool model,
         * meaning that two identical tools will share the same `hardware_id`,
         * but will have different serial numbers (see
         * {@link Gdk.DeviceTool.get_serial}).
         * 
         * This is a more concrete (and device specific) method to identify
         * a {@link Gdk.DeviceTool} than {@link Gdk.DeviceTool.get_tool_type},
         * as a tablet may support multiple devices with the same
         * {@link Gdk.DeviceToolType}, but different hardware identifiers.
         * @returns The hardware identifier of this tool.
         */
        get_hardware_id(): number;

        /**
         * Gets the serial number of this tool.
         * 
         * This value can be used to identify a physical tool
         * (eg. a tablet pen) across program executions.
         * @returns The serial ID for this tool
         */
        get_serial(): number;

        /**
         * Gets the {@link Gdk.DeviceToolType} of the tool.
         * @returns The physical type for this tool. This can be used to   figure out what sort of pen is being used, such as an airbrush   or a pencil.
         */
        get_tool_type(): DeviceToolType;
    }


    namespace Display {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * Emitted when the connection to the windowing system for `display` is closed.
             * @signal
             * @run-last
             */
            closed: (is_error: boolean) => void;
            /**
             * Emitted when the connection to the windowing system for `display` is opened.
             * @signal
             * @run-last
             */
            opened: () => void;
            /**
             * Emitted whenever a new seat is made known to the windowing system.
             * @signal
             * @run-last
             */
            "seat-added": (seat: Seat) => void;
            /**
             * Emitted whenever a seat is removed by the windowing system.
             * @signal
             * @run-last
             */
            "seat-removed": (seat: Seat) => void;
            /**
             * Emitted whenever a setting changes its value.
             * @signal
             * @run-last
             */
            "setting-changed": (setting: string) => void;
            "notify::composited": (pspec: GObject.ParamSpec) => void;
            "notify::dmabuf-formats": (pspec: GObject.ParamSpec) => void;
            "notify::input-shapes": (pspec: GObject.ParamSpec) => void;
            "notify::rgba": (pspec: GObject.ParamSpec) => void;
            "notify::shadow-width": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            composited: boolean;
            dmabuf_formats: DmabufFormats;
            dmabufFormats: DmabufFormats;
            input_shapes: boolean;
            inputShapes: boolean;
            rgba: boolean;
            shadow_width: boolean;
            shadowWidth: boolean;
        }
    }

    /**
     * A representation of a workstation.
     * 
     * Their purpose are two-fold:
     * 
     * - To manage and provide information about input devices (pointers, keyboards, etc)
     * - To manage and provide information about output devices (monitors, projectors, etc)
     * 
     * Most of the input device handling has been factored out into separate
     * {@link Gdk.Seat} objects. Every display has a one or more seats, which
     * can be accessed with {@link Gdk.Display.get_default_seat} and
     * {@link Gdk.Display.list_seats}.
     * 
     * Output devices are represented by {@link Gdk.Monitor} objects, which can
     * be accessed with {@link Gdk.Display.get_monitor_at_surface} and similar APIs.
     * @gir-type Class
     */
    class Display extends GObject.Object {
        static $gtype: GObject.GType<Display>;

        // Properties
        /**
         * `true` if the display properly composites the alpha channel.
         * @read-only
         * @default true
         */
        get composited(): boolean;

        /**
         * The dma-buf formats that are supported on this display
         * @since 4.14
         * @read-only
         */
        get dmabuf_formats(): DmabufFormats;

        /**
         * The dma-buf formats that are supported on this display
         * @since 4.14
         * @read-only
         */
        get dmabufFormats(): DmabufFormats;

        /**
         * `true` if the display supports input shapes.
         * @read-only
         * @default true
         */
        get input_shapes(): boolean;

        /**
         * `true` if the display supports input shapes.
         * @read-only
         * @default true
         */
        get inputShapes(): boolean;

        /**
         * `true` if the display supports an alpha channel.
         * @read-only
         * @default true
         */
        get rgba(): boolean;

        /**
         * `true` if the display supports extensible frames.
         * @since 4.14
         * @read-only
         * @default true
         */
        get shadow_width(): boolean;

        /**
         * `true` if the display supports extensible frames.
         * @since 4.14
         * @read-only
         * @default true
         */
        get shadowWidth(): boolean;

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
         * Gets the default {@link Gdk.Display}.
         * 
         * This is a convenience function for:
         * 
         *     gdk_display_manager_get_default_display (gdk_display_manager_get ())
         */
        static get_default(): Display | null;

        /**
         * Opens a display.
         * 
         * If opening the display fails, `NULL` is returned.
         * @param display_name the name of the display to open
         */
        static open(display_name: string | null): Display | null;

        // Methods
        /**
         * Emits a short beep on `display`
         */
        beep(): void;

        /**
         * Closes the connection to the windowing system for the given display.
         * 
         * This cleans up associated resources.
         */
        close(): void;

        /**
         * Creates a new {@link Gdk.GLContext} for the {@link Gdk.Display}.
         * 
         * The context is disconnected from any particular surface or surface
         * and cannot be used to draw to any surface. It can only be used to
         * draw to non-surface framebuffers like textures.
         * 
         * If the creation of the {@link Gdk.GLContext} failed, `error` will be set.
         * Before using the returned {@link Gdk.GLContext}, you will need to
         * call {@link Gdk.GLContext.make_current} or {@link Gdk.GLContext.realize}.
         * @returns the newly created {@link Gdk.GLContext}
         * @since 4.6
         * @throws GLib.Error
         */
        create_gl_context(): GLContext;

        /**
         * Returns `true` if there is an ongoing grab on `device` for `display`.
         * @param device a {@link Gdk.Device}
         * @returns `true` if there is a grab in effect for `device`.
         */
        device_is_grabbed(device: Device): boolean;

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
        flush(): void;

        /**
         * Returns a {@link Gdk.AppLaunchContext} suitable for launching
         * applications on the given display.
         * @returns a new {@link Gdk.AppLaunchContext} for `display`
         */
        get_app_launch_context(): AppLaunchContext;

        /**
         * Gets the clipboard used for copy/paste operations.
         * @returns the display's clipboard
         */
        get_clipboard(): Clipboard;

        /**
         * Returns the default {@link Gdk.Seat} for this display.
         * 
         * Note that a display may not have a seat. In this case,
         * this function will return `null`.
         * @returns the default seat.
         */
        get_default_seat(): Seat | null;

        /**
         * Returns the dma-buf formats that are supported on this display.
         * 
         * GTK may use OpenGL or Vulkan to support some formats.
         * Calling this function will then initialize them if they aren't yet.
         * 
         * The formats returned by this function can be used for negotiating
         * buffer formats with producers such as v4l, pipewire or GStreamer.
         * 
         * To learn more about dma-bufs, see {@link Gdk.DmabufTextureBuilder}.
         * 
         * This function is threadsafe. It can be called from any thread.
         * @returns a {@link Gdk.DmabufFormats} object
         * @since 4.14
         */
        get_dmabuf_formats(): DmabufFormats;

        /**
         * Gets the monitor in which the largest area of `surface`
         * resides.
         * @param surface a {@link Gdk.Surface}
         * @returns the monitor with the largest   overlap with `surface`
         */
        get_monitor_at_surface(surface: Surface): Monitor | null;

        /**
         * Gets the list of monitors associated with this display.
         * 
         * Subsequent calls to this function will always return the
         * same list for the same display.
         * 
         * You can listen to the GListModel::items-changed signal on
         * this list to monitor changes to the monitor of this display.
         * @returns a {@link Gio.ListModel} of {@link Gdk.Monitor}
         */
        get_monitors(): Gio.ListModel;

        /**
         * Gets the name of the display.
         * @returns a string representing the display name. This string is owned   by GDK and should not be modified or freed.
         */
        get_name(): string;

        /**
         * Gets the clipboard used for the primary selection.
         * 
         * On backends where the primary clipboard is not supported natively,
         * GDK emulates this clipboard locally.
         * @returns the primary clipboard
         */
        get_primary_clipboard(): Clipboard;

        /**
         * Retrieves a desktop-wide setting such as double-click time
         * for the `display`.
         * @param name the name of the setting
         * @param value location to store the value of the setting
         * @returns `true` if the setting existed and a value was stored   in `value`, `false` otherwise
         */
        get_setting(name: string, value: GObject.Value | any): boolean;

        /**
         * Gets the startup notification ID for a Wayland display, or `null`
         * if no ID has been defined.
         * @returns the startup notification ID for `display`
         * @deprecated since 4.10
         */
        get_startup_notification_id(): string | null;

        /**
         * Finds out if the display has been closed.
         * @returns `true` if the display is closed.
         */
        is_closed(): boolean;

        /**
         * Returns whether surfaces can reasonably be expected to have
         * their alpha channel drawn correctly on the screen.
         * 
         * Check {@link Gdk.Display.is_rgba} for whether the display
         * supports an alpha channel.
         * 
         * On X11 this function returns whether a compositing manager is
         * compositing on `display`.
         * 
         * On modern displays, this value is always `true`.
         * @returns Whether surfaces with RGBA visuals can reasonably   be expected to have their alpha channels drawn correctly   on the screen.
         */
        is_composited(): boolean;

        /**
         * Returns whether surfaces on this `display` are created with an
         * alpha channel.
         * 
         * Even if a `true` is returned, it is possible that the
         * surface’s alpha channel won’t be honored when displaying the
         * surface on the screen: in particular, for X an appropriate
         * windowing manager and compositing manager must be running to
         * provide appropriate display. Use {@link Gdk.Display.is_composited}
         * to check if that is the case.
         * 
         * On modern displays, this value is always `true`.
         * @returns `true` if surfaces are created with an alpha channel or   `false` if the display does not support this functionality.
         */
        is_rgba(): boolean;

        /**
         * Returns the list of seats known to `display`.
         * @returns the   list of seats known to the {@link Gdk.Display}
         */
        list_seats(): Seat[];

        /**
         * Returns the keyvals bound to `keycode`.
         * 
         * The Nth {@link Gdk.KeymapKey} in `keys` is bound to the Nth keyval in `keyvals`.
         * 
         * When a keycode is pressed by the user, the keyval from
         * this list of entries is selected by considering the effective
         * keyboard group and level.
         * 
         * Free the returned arrays with `g_free()`.
         * @param keycode a keycode
         * @returns `true` if there were any entries
         */
        map_keycode(keycode: number): [boolean, KeymapKey[] | null, number[] | null];

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
         * The returned array should be freed with `g_free()`.
         * @param keyval a keyval, such as %GDK_KEY_a, %GDK_KEY_Up, %GDK_KEY_Return, etc.
         * @returns `true` if keys were found and returned
         */
        map_keyval(keyval: number): [boolean, KeymapKey[]];

        /**
         * Indicates to the GUI environment that the application has
         * finished loading, using a given identifier.
         * 
         * GTK will call this function automatically for [GtkWindow](../gtk4/class.Window.html)
         * with custom startup-notification identifier unless
         * [gtk_window_set_auto_startup_notification()](../gtk4/method.Window.set_auto_startup_notification.html)
         * is called to disable that feature.
         * @param startup_id a startup-notification identifier, for which   notification process should be completed
         * @deprecated since 4.10: Using {@link Gdk.Toplevel.set_startup_id} is sufficient
         */
        notify_startup_complete(startup_id: string): void;

        /**
         * Checks that OpenGL is available for `self` and ensures that it is
         * properly initialized.
         * When this fails, an `error` will be set describing the error and this
         * function returns `false`.
         * 
         * Note that even if this function succeeds, creating a {@link Gdk.GLContext}
         * may still fail.
         * 
         * This function is idempotent. Calling it multiple times will just
         * return the same value or error.
         * 
         * You never need to call this function, GDK will call it automatically
         * as needed. But you can use it as a check when setting up code that
         * might make use of OpenGL.
         * @returns `true` if the display supports OpenGL
         * @since 4.4
         * @throws GLib.Error
         */
        prepare_gl(): boolean;

        /**
         * Adds the given event to the event queue for `display`.
         * @param event a {@link Gdk.Event}
         * @deprecated since 4.10: This function is only useful in very special situations and should not be used by applications.
         */
        put_event(event: Event): void;

        /**
         * Returns `true` if the display supports input shapes.
         * 
         * This means that {@link Gdk.Surface.set_input_region} can
         * be used to modify the input shape of surfaces on `display`.
         * 
         * On modern displays, this value is always `true`.
         * @returns `true` if surfaces with modified input shape are supported
         */
        supports_input_shapes(): boolean;

        /**
         * Returns whether it's possible for a surface to draw outside of the window area.
         * 
         * If `true` is returned the application decides if it wants to draw shadows.
         * If `false` is returned, the compositor decides if it wants to draw shadows.
         * @returns `true` if surfaces can draw shadows or   `false` if the display does not support this functionality.
         * @since 4.14
         */
        supports_shadow_width(): boolean;

        /**
         * Flushes any requests queued for the windowing system and waits until all
         * requests have been handled.
         * 
         * This is often used for making sure that the display is synchronized
         * with the current state of the program. Calling {@link Gdk.Display.sync}
         * before {@link GdkX11.Display.error_trap_pop} makes sure that any errors
         * generated from earlier requests are handled before the error trap is removed.
         * 
         * This is most useful for X11. On windowing systems where requests are
         * handled synchronously, this function will do nothing.
         */
        sync(): void;

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
         * @param keycode a keycode
         * @param state a modifier state
         * @param group active keyboard group
         * @returns `true` if there was a keyval bound to keycode/state/group.
         */
        translate_key(keycode: number, state: ModifierType, group: number): [boolean, number, number, number, ModifierType | null];
    }


    namespace DisplayManager {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * Emitted when a display is opened.
             * @signal
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
     * Offers notification when displays appear or disappear.
     * 
     * {@link Gdk.DisplayManager} is a singleton object.
     * 
     * You can use {@link Gdk.DisplayManager.get} to obtain the {@link Gdk.DisplayManager}
     * singleton, but that should be rarely necessary. Typically, initializing
     * GTK opens a display that you can work with without ever accessing the
     * {@link Gdk.DisplayManager}.
     * 
     * The GDK library can be built with support for multiple backends.
     * The {@link Gdk.DisplayManager} object determines which backend is used
     * at runtime.
     * 
     * In the rare case that you need to influence which of the backends
     * is being used, you can use {@link Gdk.set_allowed_backends}. Note
     * that you need to call this function before initializing GTK.
     * 
     * ## Backend-specific code
     * 
     * When writing backend-specific code that is supposed to work with
     * multiple GDK backends, you have to consider both compile time and
     * runtime. At compile time, use the `GDK_WINDOWING_X11`, `GDK_WINDOWING_WIN32`
     * macros, etc. to find out which backends are present in the GDK library
     * you are building your application against. At runtime, use type-check
     * macros like GDK_IS_X11_DISPLAY() to find out which backend is in use:
     * 
     * ```c
     * #ifdef GDK_WINDOWING_X11
     *   if (GDK_IS_X11_DISPLAY (display))
     *     {
     *       // make X11-specific calls here
     *     }
     *   else
     * #endif
     * #ifdef GDK_WINDOWING_MACOS
     *   if (GDK_IS_MACOS_DISPLAY (display))
     *     {
     *       // make Quartz-specific calls here
     *     }
     *   else
     * #endif
     *   g_error ("Unsupported GDK backend");
     * ```
     * @gir-type Class
     */
    class DisplayManager extends GObject.Object {
        static $gtype: GObject.GType<DisplayManager>;

        // Properties
        /**
         * The default display.
         */
        get default_display(): Display | null;
        set default_display(val: Display | null);

        /**
         * The default display.
         */
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
         * `GDK_BACKEND` environment variable to find out which of the
         * supported GDK backends to use (in case GDK has been compiled
         * with multiple backends).
         * 
         * Applications can use {@link set_allowed_backends} to limit what
         * backends will be used.
         */
        static get(): DisplayManager;

        // Methods
        /**
         * Gets the default {@link Gdk.Display}.
         * @returns a {@link Gdk.Display}
         */
        get_default_display(): Display | null;

        /**
         * List all currently open displays.
         * @returns a newly   allocated {@link GLib.SList} of {@link Gdk.Display} objects
         */
        list_displays(): Display[];

        /**
         * Opens a display.
         * @param name the name of the display to open
         * @returns a {@link Gdk.Display}, or `null`   if the display could not be opened
         */
        open_display(name: string | null): Display | null;

        /**
         * Sets `display` as the default display.
         * @param display a {@link Gdk.Display}
         */
        set_default_display(display: Display): void;
    }


    namespace DmabufTexture {
        // Signal signatures
        interface SignalSignatures extends Texture.SignalSignatures, Paintable.SignalSignatures {
            "notify::color-state": (pspec: GObject.ParamSpec) => void;
            "notify::height": (pspec: GObject.ParamSpec) => void;
            "notify::width": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Texture.ConstructorProps, Paintable.ConstructorProps, Gio.Icon.ConstructorProps, Gio.LoadableIcon.ConstructorProps {}
    }

    /**
     * A {@link Gdk.Texture} representing a DMA buffer.
     * 
     * To create a {@link Gdk.DmabufTexture}, use the auxiliary
     * {@link Gdk.DmabufTextureBuilder} object.
     * 
     * Dma-buf textures can only be created on Linux.
     * @gir-type Class
     * @since 4.14
     */
    class DmabufTexture extends Texture implements Paintable, Gio.Icon, Gio.LoadableIcon {
        static $gtype: GObject.GType<DmabufTexture>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DmabufTexture.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<DmabufTexture.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof DmabufTexture.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DmabufTexture.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof DmabufTexture.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DmabufTexture.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof DmabufTexture.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DmabufTexture.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        /**
         * Compute a concrete size for the {@link Gdk.Paintable}.
         * 
         * Applies the sizing algorithm outlined in the
         * [CSS Image spec](https://drafts.csswg.org/css-images-3/#default-sizing)
         * to the given `paintable`. See that link for more details.
         * 
         * It is not necessary to call this function when both `specified_width`
         * and `specified_height` are known, but it is useful to call this
         * function in GtkWidget:measure implementations to compute the
         * other dimension when only one dimension is given.
         * @param specified_width the width `paintable` could be drawn into or   0.0 if unknown
         * @param specified_height the height `paintable` could be drawn into or   0.0 if unknown
         * @param default_width the width `paintable` would be drawn into if   no other constraints were given
         * @param default_height the height `paintable` would be drawn into if   no other constraints were given
         */
        compute_concrete_size(specified_width: number, specified_height: number, default_width: number, default_height: number): [number, number];

        /**
         * Gets an immutable paintable for the current contents displayed by `paintable`.
         * 
         * This is useful when you want to retain the current state of an animation,
         * for example to take a screenshot of a running animation.
         * 
         * If the `paintable` is already immutable, it will return itself.
         * @returns An immutable paintable for the current   contents of `paintable`
         */
        get_current_image(): Paintable;

        /**
         * Get flags for the paintable.
         * 
         * This is oftentimes useful for optimizations.
         * 
         * See {@link Gdk.PaintableFlags} for the flags and what they mean.
         * @returns The {@link Gdk.PaintableFlags} for this paintable
         */
        get_flags(): PaintableFlags;

        /**
         * Gets the preferred aspect ratio the `paintable` would like to be displayed at.
         * 
         * The aspect ratio is the width divided by the height, so a value of 0.5
         * means that the `paintable` prefers to be displayed twice as high as it
         * is wide. Consumers of this interface can use this to preserve aspect
         * ratio when displaying the paintable.
         * 
         * This is a purely informational value and does not in any way limit the
         * values that may be passed to {@link Gdk.Paintable.snapshot}.
         * 
         * Usually when a `paintable` returns nonzero values from
         * {@link Gdk.Paintable.get_intrinsic_width} and
         * {@link Gdk.Paintable.get_intrinsic_height} the aspect ratio
         * should conform to those values, though that is not required.
         * 
         * If the `paintable` does not have a preferred aspect ratio,
         * it returns 0. Negative values are never returned.
         * @returns the intrinsic aspect ratio of `paintable` or 0 if none.
         */
        get_intrinsic_aspect_ratio(): number;

        /**
         * Gets the preferred height the `paintable` would like to be displayed at.
         * 
         * Consumers of this interface can use this to reserve enough space to draw
         * the paintable.
         * 
         * This is a purely informational value and does not in any way limit the
         * values that may be passed to {@link Gdk.Paintable.snapshot}.
         * 
         * If the `paintable` does not have a preferred height, it returns 0.
         * Negative values are never returned.
         * @returns the intrinsic height of `paintable` or 0 if none.
         */
        get_intrinsic_height(): number;

        /**
         * Gets the preferred width the `paintable` would like to be displayed at.
         * 
         * Consumers of this interface can use this to reserve enough space to draw
         * the paintable.
         * 
         * This is a purely informational value and does not in any way limit the
         * values that may be passed to {@link Gdk.Paintable.snapshot}.
         * 
         * If the `paintable` does not have a preferred width, it returns 0.
         * Negative values are never returned.
         * @returns the intrinsic width of `paintable` or 0 if none.
         */
        get_intrinsic_width(): number;

        /**
         * Called by implementations of {@link Gdk.Paintable} to invalidate their contents.
         * 
         * Unless the contents are invalidated, implementations must guarantee that
         * multiple calls of {@link Gdk.Paintable.snapshot} produce the same output.
         * 
         * This function will emit the `Gdk.Paintable::invalidate-contents`
         * signal.
         * 
         * If a `paintable` reports the {@link Gdk.PaintableFlags.STATIC_CONTENTS} flag,
         * it must not call this function.
         */
        invalidate_contents(): void;

        /**
         * Called by implementations of {@link Gdk.Paintable} to invalidate their size.
         * 
         * As long as the size is not invalidated, `paintable` must return the same
         * values for its intrinsic width, height and aspect ratio.
         * 
         * This function will emit the `Gdk.Paintable::invalidate-size`
         * signal.
         * 
         * If a `paintable` reports the {@link Gdk.PaintableFlags.STATIC_SIZE} flag,
         * it must not call this function.
         */
        invalidate_size(): void;

        /**
         * Snapshots the given paintable with the given `width` and `height`.
         * 
         * The paintable is drawn at the current (0,0) offset of the `snapshot`.
         * If `width` and `height` are not larger than zero, this function will
         * do nothing.
         * @param snapshot a {@link Gdk.Snapshot} to snapshot to
         * @param width width to snapshot in
         * @param height height to snapshot in
         */
        snapshot(snapshot: Snapshot, width: number, height: number): void;

        /**
         * Gets an immutable paintable for the current contents displayed by `paintable`.
         * 
         * This is useful when you want to retain the current state of an animation,
         * for example to take a screenshot of a running animation.
         * 
         * If the `paintable` is already immutable, it will return itself.
         * @virtual
         */
        vfunc_get_current_image(): Paintable;

        /**
         * Get flags for the paintable.
         * 
         * This is oftentimes useful for optimizations.
         * 
         * See {@link Gdk.PaintableFlags} for the flags and what they mean.
         * @virtual
         */
        vfunc_get_flags(): PaintableFlags;

        /**
         * Gets the preferred aspect ratio the `paintable` would like to be displayed at.
         * 
         * The aspect ratio is the width divided by the height, so a value of 0.5
         * means that the `paintable` prefers to be displayed twice as high as it
         * is wide. Consumers of this interface can use this to preserve aspect
         * ratio when displaying the paintable.
         * 
         * This is a purely informational value and does not in any way limit the
         * values that may be passed to {@link Gdk.Paintable.snapshot}.
         * 
         * Usually when a `paintable` returns nonzero values from
         * {@link Gdk.Paintable.get_intrinsic_width} and
         * {@link Gdk.Paintable.get_intrinsic_height} the aspect ratio
         * should conform to those values, though that is not required.
         * 
         * If the `paintable` does not have a preferred aspect ratio,
         * it returns 0. Negative values are never returned.
         * @virtual
         */
        vfunc_get_intrinsic_aspect_ratio(): number;

        /**
         * Gets the preferred height the `paintable` would like to be displayed at.
         * 
         * Consumers of this interface can use this to reserve enough space to draw
         * the paintable.
         * 
         * This is a purely informational value and does not in any way limit the
         * values that may be passed to {@link Gdk.Paintable.snapshot}.
         * 
         * If the `paintable` does not have a preferred height, it returns 0.
         * Negative values are never returned.
         * @virtual
         */
        vfunc_get_intrinsic_height(): number;

        /**
         * Gets the preferred width the `paintable` would like to be displayed at.
         * 
         * Consumers of this interface can use this to reserve enough space to draw
         * the paintable.
         * 
         * This is a purely informational value and does not in any way limit the
         * values that may be passed to {@link Gdk.Paintable.snapshot}.
         * 
         * If the `paintable` does not have a preferred width, it returns 0.
         * Negative values are never returned.
         * @virtual
         */
        vfunc_get_intrinsic_width(): number;

        /**
         * Snapshots the given paintable with the given `width` and `height`.
         * 
         * The paintable is drawn at the current (0,0) offset of the `snapshot`.
         * If `width` and `height` are not larger than zero, this function will
         * do nothing.
         * @param snapshot a {@link Gdk.Snapshot} to snapshot to
         * @param width width to snapshot in
         * @param height height to snapshot in
         * @virtual
         */
        vfunc_snapshot(snapshot: Snapshot, width: number, height: number): void;

        /**
         * Checks if two icons are equal.
         * @param icon2 pointer to the second {@link Gio.Icon}.
         * @returns `true` if `icon1` is equal to `icon2`. `false` otherwise.
         */
        equal(icon2: Gio.Icon | null): boolean;

        /**
         * Gets a hash for an icon.
         * @returns a `guint` containing a hash for the `icon`, suitable for   use in a {@link GLib.HashTable} or similar data structure.
         */
        hash(): number;

        /**
         * Serializes a {@link Gio.Icon} into a {@link GLib.Variant}. An equivalent {@link Gio.Icon} can be retrieved
         * back by calling `g_icon_deserialize()` on the returned value.
         * As serialization will avoid using raw icon data when possible, it only
         * makes sense to transfer the {@link GLib.Variant} between processes on the same machine,
         * (as opposed to over the network), and within the same file system namespace.
         * @returns a {@link GLib.Variant}, or `null` when serialization fails. The {@link GLib.Variant} will not be floating.
         * @since 2.38
         */
        serialize(): GLib.Variant | null;

        /**
         * Generates a textual representation of `icon` that can be used for
         * serialization such as when passing `icon` to a different process or
         * saving it to persistent storage. Use `g_icon_new_for_string()` to
         * get `icon` back from the returned string.
         * 
         * The encoding of the returned string is proprietary to {@link Gio.Icon} except
         * in the following two cases
         * 
         * - If `icon` is a {@link Gio.FileIcon}, the returned string is a native path
         *   (such as `/path/to/my icon.png`) without escaping
         *   if the {@link Gio.File} for `icon` is a native file.  If the file is not
         *   native, the returned string is the result of `g_file_get_uri()`
         *   (such as `sftp://path/to/my%20icon.png`).
         * 
         * - If `icon` is a {@link Gio.ThemedIcon} with exactly one name and no fallbacks,
         *   the encoding is simply the name (such as `network-server`).
         * @returns An allocated NUL-terminated UTF8 string or `null` if `icon` can't be serialized. Use `g_free()` to free.
         * @since 2.20
         */
        to_string(): string | null;

        /**
         * Checks if two icons are equal.
         * @param icon2 pointer to the second {@link Gio.Icon}.
         * @virtual
         */
        vfunc_equal(icon2: Gio.Icon | null): boolean;

        /**
         * Gets a hash for an icon.
         * @virtual
         */
        vfunc_hash(): number;

        /**
         * Serializes a {@link Gio.Icon} into a {@link GLib.Variant}. An equivalent {@link Gio.Icon} can be retrieved
         * back by calling `g_icon_deserialize()` on the returned value.
         * As serialization will avoid using raw icon data when possible, it only
         * makes sense to transfer the {@link GLib.Variant} between processes on the same machine,
         * (as opposed to over the network), and within the same file system namespace.
         * @since 2.38
         * @virtual
         */
        vfunc_serialize(): GLib.Variant | null;

        /**
         * Serializes the `icon` into string tokens.
         * This is can be invoked when `g_icon_new_for_string()` is called.
         * @since 2.20
         * @virtual
         */
        vfunc_to_tokens(): [boolean, string[], number];

        /**
         * Loads a loadable icon. For the asynchronous version of this function,
         * see `g_loadable_icon_load_async()`.
         * @param size an integer.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @returns a {@link Gio.InputStream} to read the icon from.
         * @throws GLib.Error
         */
        load(size: number, cancellable: Gio.Cancellable | null): [Gio.InputStream, string];

        /**
         * Loads an icon asynchronously. To finish this function, see
         * `g_loadable_icon_load_finish()`. For the synchronous, blocking
         * version of this function, see `g_loadable_icon_load()`.
         * @param size an integer.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         */
        load_async(size: number, cancellable: Gio.Cancellable | null): globalThis.Promise<[Gio.InputStream, string]>;

        /**
         * Loads an icon asynchronously. To finish this function, see
         * `g_loadable_icon_load_finish()`. For the synchronous, blocking
         * version of this function, see `g_loadable_icon_load()`.
         * @param size an integer.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback}   to call when the request is satisfied
         */
        load_async(size: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Loads an icon asynchronously. To finish this function, see
         * `g_loadable_icon_load_finish()`. For the synchronous, blocking
         * version of this function, see `g_loadable_icon_load()`.
         * @param size an integer.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback}   to call when the request is satisfied
         */
        load_async(size: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<[Gio.InputStream, string]> | void;

        /**
         * Finishes an asynchronous icon load started in `g_loadable_icon_load_async()`.
         * @param res a {@link Gio.AsyncResult}.
         * @returns a {@link Gio.InputStream} to read the icon from.
         * @throws GLib.Error
         */
        load_finish(res: Gio.AsyncResult): [Gio.InputStream, string];

        /**
         * Loads a loadable icon. For the asynchronous version of this function,
         * see `g_loadable_icon_load_async()`.
         * @param size an integer.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @virtual
         */
        vfunc_load(size: number, cancellable: Gio.Cancellable | null): [Gio.InputStream, string];

        /**
         * Loads an icon asynchronously. To finish this function, see
         * `g_loadable_icon_load_finish()`. For the synchronous, blocking
         * version of this function, see `g_loadable_icon_load()`.
         * @param size an integer.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback}   to call when the request is satisfied
         * @virtual
         */
        vfunc_load_async(size: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Finishes an asynchronous icon load started in `g_loadable_icon_load_async()`.
         * @param res a {@link Gio.AsyncResult}.
         * @virtual
         */
        vfunc_load_finish(res: Gio.AsyncResult): [Gio.InputStream, string];
    }


    namespace DmabufTextureBuilder {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::color-state": (pspec: GObject.ParamSpec) => void;
            "notify::display": (pspec: GObject.ParamSpec) => void;
            "notify::fourcc": (pspec: GObject.ParamSpec) => void;
            "notify::height": (pspec: GObject.ParamSpec) => void;
            "notify::modifier": (pspec: GObject.ParamSpec) => void;
            "notify::n-planes": (pspec: GObject.ParamSpec) => void;
            "notify::premultiplied": (pspec: GObject.ParamSpec) => void;
            "notify::update-region": (pspec: GObject.ParamSpec) => void;
            "notify::update-texture": (pspec: GObject.ParamSpec) => void;
            "notify::width": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            color_state: ColorState | null;
            colorState: ColorState | null;
            display: Display;
            fourcc: number;
            height: number;
            modifier: bigint | number;
            n_planes: number;
            nPlanes: number;
            premultiplied: boolean;
            update_region: cairo.Region | null;
            updateRegion: cairo.Region | null;
            update_texture: Texture | null;
            updateTexture: Texture | null;
            width: number;
        }
    }

    /**
     * Constructs {@link Gdk.Texture} objects from DMA buffers.
     * 
     * DMA buffers are commonly called **_dma-bufs_**.
     * 
     * DMA buffers are a feature of the Linux kernel to enable efficient buffer and
     * memory sharing between hardware such as codecs, GPUs, displays, cameras and the
     * kernel drivers controlling them. For example, a decoder may want its output to
     * be directly shared with the display server for rendering without a copy.
     * 
     * Any device driver which participates in DMA buffer sharing, can do so as either
     * the exporter or importer of buffers (or both).
     * 
     * The memory that is shared via DMA buffers is usually stored in non-system memory
     * (maybe in device's local memory or something else not directly accessible by the
     * CPU), and accessing this memory from the CPU may have higher-than-usual overhead.
     * 
     * In particular for graphics data, it is not uncommon that data consists of multiple
     * separate blocks of memory, for example one block for each of the red, green and
     * blue channels. These blocks are called **_planes_**. DMA buffers can have up to
     * four planes. Even if the memory is a single block, the data can be organized in
     * multiple planes, by specifying offsets from the beginning of the data.
     * 
     * DMA buffers are exposed to user-space as file descriptors allowing to pass them
     * between processes. If a DMA buffer has multiple planes, more than one file
     * descriptor may be present, up to the number of planes. If the number of file
     * descriptors is less than the number of planes, the remaining ones should be set to
     * -1.
     * 
     * The format of the data (for graphics data, essentially its colorspace) is described
     * by a 32-bit integer. These format identifiers are defined in the header file `drm_fourcc.h`
     * and commonly referred to as **_fourcc_** values, since they are identified by 4 ASCII
     * characters. Additionally, each DMA buffer has a **_modifier_**, which is a 64-bit integer
     * that describes driver-specific details of the memory layout, such as tiling or compression.
     * 
     * For historical reasons, some producers of dma-bufs don't provide an explicit modifier, but
     * instead return `DMA_FORMAT_MOD_INVALID` to indicate that their modifier is **_implicit_**.
     * GTK tries to accommodate this situation by accepting `DMA_FORMAT_MOD_INVALID` as modifier.
     * 
     * The operation of {@link Gdk.DmabufTextureBuilder} is quite simple: Create a texture builder,
     * set all the necessary properties, and then call {@link Gdk.DmabufTextureBuilder.build}
     * to create the new texture.
     * 
     * The required properties for a dma-buf texture are
     * 
     *  * The width and height in pixels
     * 
     *  * The `fourcc` code and `modifier` which identify the format and memory layout of the dma-buf
     * 
     *  * The file descriptor, offset and stride for each of the planes
     * 
     * {@link Gdk.DmabufTextureBuilder} can be used for quick one-shot construction of
     * textures as well as kept around and reused to construct multiple textures.
     * 
     * For further information, see
     * 
     * * The Linux kernel [documentation](https://docs.kernel.org/driver-api/dma-buf.html)
     * 
     * * The header file [drm_fourcc.h](https://gitlab.freedesktop.org/mesa/drm/-/blob/main/include/drm/drm_fourcc.h)
     * @gir-type Class
     * @since 4.14
     */
    class DmabufTextureBuilder extends GObject.Object {
        static $gtype: GObject.GType<DmabufTextureBuilder>;

        // Properties
        /**
         * The color state of the texture.
         * @since 4.16
         */
        get color_state(): ColorState | null;
        set color_state(val: ColorState | null);

        /**
         * The color state of the texture.
         * @since 4.16
         */
        get colorState(): ColorState | null;
        set colorState(val: ColorState | null);

        /**
         * The display that this texture will be used on.
         * @since 4.14
         */
        get display(): Display;
        set display(val: Display);

        /**
         * The format of the texture, as a fourcc value.
         * @since 4.14
         * @default 0
         */
        get fourcc(): number;
        set fourcc(val: number);

        /**
         * The height of the texture.
         * @since 4.14
         * @default 0
         */
        get height(): number;
        set height(val: number);

        /**
         * The modifier.
         * @since 4.14
         * @default 0
         */
        get modifier(): number;
        set modifier(val: bigint | number);

        /**
         * The number of planes of the texture.
         * 
         * Note that you can set properties for other planes,
         * but they will be ignored when constructing the texture.
         * @since 4.14
         * @default 1
         */
        get n_planes(): number;
        set n_planes(val: number);

        /**
         * The number of planes of the texture.
         * 
         * Note that you can set properties for other planes,
         * but they will be ignored when constructing the texture.
         * @since 4.14
         * @default 1
         */
        get nPlanes(): number;
        set nPlanes(val: number);

        /**
         * Whether the alpha channel is premultiplied into the others.
         * 
         * Only relevant if the format has alpha.
         * @since 4.14
         * @default true
         */
        get premultiplied(): boolean;
        set premultiplied(val: boolean);

        /**
         * The update region for {@link Gdk.DmabufTextureBuilder.update_texture}.
         * @since 4.14
         */
        get update_region(): cairo.Region | null;
        set update_region(val: cairo.Region | null);

        /**
         * The update region for {@link Gdk.DmabufTextureBuilder.update_texture}.
         * @since 4.14
         */
        get updateRegion(): cairo.Region | null;
        set updateRegion(val: cairo.Region | null);

        /**
         * The texture {@link Gdk.DmabufTextureBuilder.update_region} is an update for.
         * @since 4.14
         */
        get update_texture(): Texture | null;
        set update_texture(val: Texture | null);

        /**
         * The texture {@link Gdk.DmabufTextureBuilder.update_region} is an update for.
         * @since 4.14
         */
        get updateTexture(): Texture | null;
        set updateTexture(val: Texture | null);

        /**
         * The width of the texture.
         * @since 4.14
         * @default 0
         */
        get width(): number;
        set width(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DmabufTextureBuilder.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<DmabufTextureBuilder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): DmabufTextureBuilder;

        // Signals
        /** @signal */
        connect<K extends keyof DmabufTextureBuilder.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DmabufTextureBuilder.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof DmabufTextureBuilder.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DmabufTextureBuilder.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof DmabufTextureBuilder.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DmabufTextureBuilder.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Builds a new {@link Gdk.Texture} with the values set up in the builder.
         * 
         * It is a programming error to call this function if any mandatory property has not been set.
         * 
         * Not all formats defined in the `drm_fourcc.h` header are supported. You can use
         * {@link Gdk.Display.get_dmabuf_formats} to get a list of supported formats. If the
         * format is not supported by GTK, `null` will be returned and `error` will be set.
         * 
         * The `destroy` function gets called when the returned texture gets released.
         * 
         * It is the responsibility of the caller to keep the file descriptors for the planes
         * open until the created texture is no longer used, and close them afterwards (possibly
         * using the `destroy` notify).
         * 
         * It is possible to call this function multiple times to create multiple textures,
         * possibly with changing properties in between.
         * @param data user data to pass to the destroy function
         * @returns a newly built {@link Gdk.Texture} or `NULL`   if the format is not supported
         * @since 4.14
         * @throws GLib.Error
         */
        build(data: null): Texture | null;

        /**
         * Gets the color state previously set via `gdk_dmabuf_texture_builder_set_color_state()`.
         * @returns the color state
         * @since 4.16
         */
        get_color_state(): ColorState | null;

        /**
         * Returns the display that this texture builder is
         * associated with.
         * @returns the display
         * @since 4.14
         */
        get_display(): Display;

        /**
         * Gets the file descriptor for a plane or -1 if none.
         * @param plane the plane to get the fd for
         * @returns the file descriptor
         * @since 4.14
         */
        get_fd(plane: number): number;

        /**
         * Gets the format previously set via `gdk_dmabuf_texture_builder_set_fourcc()`
         * or 0 if the format wasn't set.
         * 
         * The format is specified as a fourcc code.
         * @returns The format
         * @since 4.14
         */
        get_fourcc(): number;

        /**
         * Gets the height previously set via `gdk_dmabuf_texture_builder_set_height()` or
         * 0 if the height wasn't set.
         * @returns The height
         * @since 4.14
         */
        get_height(): number;

        /**
         * Gets the modifier value.
         * @returns the modifier
         * @since 4.14
         */
        get_modifier(): number;

        /**
         * Gets the number of planes.
         * @returns The number of planes
         * @since 4.14
         */
        get_n_planes(): number;

        /**
         * Gets the offset value for a plane.
         * @param plane the plane to get the offset for
         * @returns the offset
         * @since 4.14
         */
        get_offset(plane: number): number;

        /**
         * Whether the data is premultiplied.
         * @returns whether the data is premultiplied
         * @since 4.14
         */
        get_premultiplied(): boolean;

        /**
         * Gets the stride value for a plane.
         * @param plane the plane to get the stride for
         * @returns the stride
         * @since 4.14
         */
        get_stride(plane: number): number;

        /**
         * Gets the region previously set via `gdk_dmabuf_texture_builder_set_update_region()` or
         * `null` if none was set.
         * @returns The region
         * @since 4.14
         */
        get_update_region(): cairo.Region | null;

        /**
         * Gets the texture previously set via `gdk_dmabuf_texture_builder_set_update_texture()` or
         * `null` if none was set.
         * @returns The texture
         * @since 4.14
         */
        get_update_texture(): Texture | null;

        /**
         * Gets the width previously set via `gdk_dmabuf_texture_builder_set_width()` or
         * 0 if the width wasn't set.
         * @returns The width
         * @since 4.14
         */
        get_width(): number;

        /**
         * Sets the color state for the texture.
         * 
         * By default, the colorstate is `NULL`. In that case, GTK will choose the
         * correct colorstate based on the format.
         * If you don't know what colorstates are, this is probably the right thing.
         * @param color_state a {@link Gdk.ColorState} or `NULL` to unset the colorstate.
         * @since 4.16
         */
        set_color_state(color_state: ColorState | null): void;

        /**
         * Sets the display that this texture builder is
         * associated with.
         * 
         * The display is used to determine the supported
         * dma-buf formats.
         * @param display the display
         * @since 4.14
         */
        set_display(display: Display): void;

        /**
         * Sets the file descriptor for a plane or to -1 to unset it.
         * @param plane the plane to set the fd for
         * @param fd the file descriptor
         * @since 4.14
         */
        set_fd(plane: number, fd: number): void;

        /**
         * Sets the format of the texture.
         * 
         * The format is specified as a fourcc code.
         * 
         * The format must be set before calling {@link Gdk.DmabufTextureBuilder.build}.
         * @param fourcc the texture's format or 0 to unset
         * @since 4.14
         */
        set_fourcc(fourcc: number): void;

        /**
         * Sets the height of the texture.
         * 
         * The height must be set before calling {@link Gdk.DmabufTextureBuilder.build}.
         * @param height the texture's height or 0 to unset
         * @since 4.14
         */
        set_height(height: number): void;

        /**
         * Sets the modifier.
         * @param modifier the modifier value
         * @since 4.14
         */
        set_modifier(modifier: bigint | number): void;

        /**
         * Sets the number of planes of the texture.
         * @param n_planes the number of planes
         * @since 4.14
         */
        set_n_planes(n_planes: number): void;

        /**
         * Sets the offset for a plane.
         * @param plane the plane to set the offset for
         * @param offset the offset value
         * @since 4.14
         */
        set_offset(plane: number, offset: number): void;

        /**
         * Sets whether the data is premultiplied.
         * 
         * Unless otherwise specified, all formats including alpha channels are assumed
         * to be premultiplied.
         * @param premultiplied whether the data is premultiplied
         * @since 4.14
         */
        set_premultiplied(premultiplied: boolean): void;

        /**
         * Sets the stride for a plane.
         * 
         * The stride must be set for all planes before calling {@link Gdk.DmabufTextureBuilder.build}.
         * @param plane the plane to set the stride for
         * @param stride the stride value
         * @since 4.14
         */
        set_stride(plane: number, stride: number): void;

        /**
         * Sets the region to be updated by this texture. Together with
         * {@link Gdk.DmabufTextureBuilder.update_texture} this describes an
         * update of a previous texture.
         * 
         * When rendering animations of large textures, it is possible that
         * consecutive textures are only updating contents in parts of the texture.
         * It is then possible to describe this update via these two properties,
         * so that GTK can avoid rerendering parts that did not change.
         * 
         * An example would be a screen recording where only the mouse pointer moves.
         * @param region the region to update
         * @since 4.14
         */
        set_update_region(region: cairo.Region | null): void;

        /**
         * Sets the texture to be updated by this texture. See
         * {@link Gdk.DmabufTextureBuilder.set_update_region} for an explanation.
         * @param texture the texture to update
         * @since 4.14
         */
        set_update_texture(texture: Texture | null): void;

        /**
         * Sets the width of the texture.
         * 
         * The width must be set before calling {@link Gdk.DmabufTextureBuilder.build}.
         * @param width The texture's width or 0 to unset
         * @since 4.14
         */
        set_width(width: number): void;
    }


    namespace Drag {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * Emitted when the drag operation is cancelled.
             * @signal
             * @run-last
             */
            cancel: (reason: DragCancelReason) => void;
            /**
             * Emitted when the destination side has finished reading all data.
             * 
             * The drag object can now free all miscellaneous data.
             * @signal
             * @run-last
             */
            "dnd-finished": () => void;
            /**
             * Emitted when the drop operation is performed on an accepting client.
             * @signal
             * @run-last
             */
            "drop-performed": () => void;
            "notify::actions": (pspec: GObject.ParamSpec) => void;
            "notify::content": (pspec: GObject.ParamSpec) => void;
            "notify::device": (pspec: GObject.ParamSpec) => void;
            "notify::display": (pspec: GObject.ParamSpec) => void;
            "notify::formats": (pspec: GObject.ParamSpec) => void;
            "notify::selected-action": (pspec: GObject.ParamSpec) => void;
            "notify::surface": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            actions: DragAction;
            content: ContentProvider;
            device: Device;
            display: Display;
            formats: ContentFormats;
            selected_action: DragAction;
            selectedAction: DragAction;
            surface: Surface;
        }
    }

    /**
     * Represents the source of an ongoing DND operation.
     * 
     * A {@link Gdk.Drag} is created when a drag is started, and stays alive for duration of
     * the DND operation. After a drag has been started with {@link Gdk.Drag.begin},
     * the caller gets informed about the status of the ongoing drag operation
     * with signals on the {@link Gdk.Drag} object.
     * 
     * GTK provides a higher level abstraction based on top of these functions,
     * and so they are not normally needed in GTK applications. See the
     * "Drag and Drop" section of the GTK documentation for more information.
     * @gir-type Class
     */
    abstract class Drag extends GObject.Object {
        static $gtype: GObject.GType<Drag>;

        // Properties
        /**
         * The possible actions of this drag.
         * @default Gdk.DragAction.NONE
         */
        get actions(): DragAction;
        set actions(val: DragAction);

        /**
         * The {@link Gdk.ContentProvider}.
         * @construct-only
         */
        get content(): ContentProvider;

        /**
         * The {@link Gdk.Device} that is performing the drag.
         * @construct-only
         */
        get device(): Device;

        /**
         * The {@link Gdk.Display} that the drag belongs to.
         * @read-only
         */
        get display(): Display;

        /**
         * The possible formats that the drag can provide its data in.
         * @construct-only
         */
        get formats(): ContentFormats;

        /**
         * The currently selected action of the drag.
         * @default Gdk.DragAction.NONE
         */
        get selected_action(): DragAction;
        set selected_action(val: DragAction);

        /**
         * The currently selected action of the drag.
         * @default Gdk.DragAction.NONE
         */
        get selectedAction(): DragAction;
        set selectedAction(val: DragAction);

        /**
         * The surface where the drag originates.
         * @construct-only
         */
        get surface(): Surface;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Drag.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Drag.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof Drag.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Drag.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Drag.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Drag.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Drag.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Drag.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Starts a drag and creates a new drag context for it.
         * 
         * This function is called by the drag source. After this call, you
         * probably want to set up the drag icon using the surface returned
         * by {@link Gdk.Drag.get_drag_surface}.
         * 
         * This function returns a reference to the {@link Gdk.Drag} object,
         * but GTK keeps its own reference as well, as long as the DND operation
         * is going on.
         * 
         * Note: if `actions` include {@link Gdk.DragAction.MOVE}, you need to listen for
         * the `Gdk.Drag::dnd-finished` signal and delete the data at
         * the source if {@link Gdk.Drag.get_selected_action} returns
         * {@link Gdk.DragAction.MOVE}.
         * @param surface the source surface for this drag
         * @param device the device that controls this drag
         * @param content the offered content
         * @param actions the actions supported by this drag
         * @param dx the x offset to `device`'s position where the drag nominally started
         * @param dy the y offset to `device`'s position where the drag nominally started
         */
        static begin(surface: Surface, device: Device, content: ContentProvider, actions: DragAction, dx: number, dy: number): Drag | null;

        // Methods
        /**
         * Informs GDK that the drop ended.
         * 
         * Passing `false` for `success` may trigger a drag cancellation
         * animation.
         * 
         * This function is called by the drag source, and should be the
         * last call before dropping the reference to the `drag`.
         * 
         * The {@link Gdk.Drag} will only take the first {@link Gdk.Drag.drop_done}
         * call as effective, if this function is called multiple times,
         * all subsequent calls will be ignored.
         * @param success whether the drag was ultimatively successful
         */
        drop_done(success: boolean): void;

        /**
         * Determines the bitmask of possible actions proposed by the source.
         * @returns the {@link Gdk.DragAction} flags
         */
        get_actions(): DragAction;

        /**
         * Returns the {@link Gdk.ContentProvider} associated to the {@link Gdk.Drag} object.
         * @returns The {@link Gdk.ContentProvider} associated to `drag`.
         */
        get_content(): ContentProvider;

        /**
         * Returns the {@link Gdk.Device} associated to the {@link Gdk.Drag} object.
         * @returns The {@link Gdk.Device} associated to `drag`.
         */
        get_device(): Device;

        /**
         * Gets the {@link Gdk.Display} that the drag object was created for.
         * @returns a {@link Gdk.Display}
         */
        get_display(): Display;

        /**
         * Returns the surface on which the drag icon should be rendered
         * during the drag operation.
         * 
         * Note that the surface may not be available until the drag operation
         * has begun. GDK will move the surface in accordance with the ongoing
         * drag operation. The surface is owned by `drag` and will be destroyed
         * when the drag operation is over.
         * @returns the drag surface
         */
        get_drag_surface(): Surface | null;

        /**
         * Retrieves the formats supported by this {@link Gdk.Drag} object.
         * @returns a {@link Gdk.ContentFormats}
         */
        get_formats(): ContentFormats;

        /**
         * Determines the action chosen by the drag destination.
         * @returns a {@link Gdk.DragAction} value
         */
        get_selected_action(): DragAction;

        /**
         * Returns the {@link Gdk.Surface} where the drag originates.
         * @returns The {@link Gdk.Surface} where the drag originates
         */
        get_surface(): Surface;

        /**
         * Sets the position of the drag surface that will be kept
         * under the cursor hotspot.
         * 
         * Initially, the hotspot is at the top left corner of the drag surface.
         * @param hot_x x coordinate of the drag surface hotspot
         * @param hot_y y coordinate of the drag surface hotspot
         */
        set_hotspot(hot_x: number, hot_y: number): void;
    }


    namespace DrawContext {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::display": (pspec: GObject.ParamSpec) => void;
            "notify::surface": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            display: Display | null;
            surface: Surface | null;
        }
    }

    /**
     * Base class for objects implementing different rendering methods.
     * 
     * {@link Gdk.DrawContext} is the base object used by contexts implementing different
     * rendering methods, such as {@link Gdk.CairoContext} or {@link Gdk.GLContext}.
     * It provides shared functionality between those contexts.
     * 
     * You will always interact with one of those subclasses.
     * 
     * A {@link Gdk.DrawContext} is always associated with a single toplevel surface.
     * @gir-type Class
     */
    abstract class DrawContext extends GObject.Object {
        static $gtype: GObject.GType<DrawContext>;

        // Properties
        /**
         * The {@link Gdk.Display} used to create the {@link Gdk.DrawContext}.
         * @construct-only
         */
        get display(): Display | null;

        /**
         * The {@link Gdk.Surface} the context is bound to.
         * @construct-only
         */
        get surface(): Surface | null;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DrawContext.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<DrawContext.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof DrawContext.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DrawContext.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof DrawContext.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, DrawContext.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof DrawContext.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<DrawContext.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Indicates that you are beginning the process of redrawing `region`
         * on the `context`'s surface.
         * 
         * Calling this function begins a drawing operation using `context` on the
         * surface that `context` was created from. The actual requirements and
         * guarantees for the drawing operation vary for different implementations
         * of drawing, so a {@link Gdk.CairoContext} and a {@link Gdk.GLContext}
         * need to be treated differently.
         * 
         * A call to this function is a requirement for drawing and must be
         * followed by a call to {@link Gdk.DrawContext.end_frame}, which will
         * complete the drawing operation and ensure the contents become visible
         * on screen.
         * 
         * Note that the `region` passed to this function is the minimum region that
         * needs to be drawn and depending on implementation, windowing system and
         * hardware in use, it might be necessary to draw a larger region. Drawing
         * implementation must use {@link Gdk.DrawContext.get_frame_region} to
         * query the region that must be drawn.
         * 
         * When using GTK, the widget system automatically places calls to
         * `gdk_draw_context_begin_frame()` and `gdk_draw_context_end_frame()` via the
         * use of [GskRenderer](../gsk4/class.Renderer.html)s, so application code
         * does not need to call these functions explicitly.
         * @param region minimum region that should be drawn
         * @deprecated since 4.16: Drawing directly to the surface is no longer recommended.   Use `GskRenderNode` and `GskRenderer`.
         */
        begin_frame(region: cairo.Region): void;

        /**
         * Ends a drawing operation started with `gdk_draw_context_begin_frame()`.
         * 
         * This makes the drawing available on screen.
         * See {@link Gdk.DrawContext.begin_frame} for more details about drawing.
         * 
         * When using a {@link Gdk.GLContext}, this function may call `glFlush()`
         * implicitly before returning; it is not recommended to call `glFlush()`
         * explicitly before calling this function.
         * @deprecated since 4.16: Drawing directly to the surface is no longer recommended.   Use `GskRenderNode` and `GskRenderer`.
         */
        end_frame(): void;

        /**
         * Retrieves the {@link Gdk.Display} the `context` is created for
         * @returns the {@link Gdk.Display}
         */
        get_display(): Display | null;

        /**
         * Retrieves the region that is currently being repainted.
         * 
         * After a call to {@link Gdk.DrawContext.begin_frame} this function will
         * return a union of the region passed to that function and the area of the
         * surface that the `context` determined needs to be repainted.
         * 
         * If `context` is not in between calls to {@link Gdk.DrawContext.begin_frame}
         * and {@link Gdk.DrawContext.end_frame}, `null` will be returned.
         * @returns a Cairo region
         * @deprecated since 4.16: Drawing directly to the surface is no longer recommended.   Use `GskRenderNode` and `GskRenderer`.
         */
        get_frame_region(): cairo.Region | null;

        /**
         * Retrieves the surface that `context` is bound to.
         * @returns a {@link Gdk.Surface}
         */
        get_surface(): Surface | null;

        /**
         * Returns `true` if `context` is in the process of drawing to its surface.
         * 
         * This is the case between calls to {@link Gdk.DrawContext.begin_frame}
         * and {@link Gdk.DrawContext.end_frame}. In this situation, drawing commands
         * may be effecting the contents of the `context`'s surface.
         * @returns `true` if the context is between {@link Gdk.DrawContext.begin_frame}   and {@link Gdk.DrawContext.end_frame} calls.
         * @deprecated since 4.16: Drawing directly to the surface is no longer recommended.   Use `GskRenderNode` and `GskRenderer`.
         */
        is_in_frame(): boolean;
    }


    namespace Drop {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::actions": (pspec: GObject.ParamSpec) => void;
            "notify::device": (pspec: GObject.ParamSpec) => void;
            "notify::display": (pspec: GObject.ParamSpec) => void;
            "notify::drag": (pspec: GObject.ParamSpec) => void;
            "notify::formats": (pspec: GObject.ParamSpec) => void;
            "notify::surface": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            actions: DragAction;
            device: Device;
            display: Display;
            drag: Drag | null;
            formats: ContentFormats;
            surface: Surface;
        }
    }

    /**
     * Represents the target of an ongoing DND operation.
     * 
     * Possible drop sites get informed about the status of the ongoing drag
     * operation with events of type `GDK_DRAG_ENTER`, `GDK_DRAG_LEAVE`,
     * `GDK_DRAG_MOTION` and `GDK_DROP_START`. The {@link Gdk.Drop} object can be obtained
     * from these {@link Gdk.Event} types using {@link Gdk.DNDEvent.get_drop}.
     * 
     * The actual data transfer is initiated from the target side via an async
     * read, using one of the {@link Gdk.Drop} methods for this purpose:
     * {@link Gdk.Drop.read_async} or {@link Gdk.Drop.read_value_async}.
     * 
     * GTK provides a higher level abstraction based on top of these functions,
     * and so they are not normally needed in GTK applications. See the
     * "Drag and Drop" section of the GTK documentation for more information.
     * @gir-type Class
     */
    abstract class Drop extends GObject.Object {
        static $gtype: GObject.GType<Drop>;

        // Properties
        /**
         * The possible actions for this drop
         * @construct-only
         * @default Gdk.DragAction.COPY | Gdk.DragAction.MOVE | Gdk.DragAction.LINK
         */
        get actions(): DragAction;

        /**
         * The {@link Gdk.Device} performing the drop
         * @construct-only
         */
        get device(): Device;

        /**
         * The {@link Gdk.Display} that the drop belongs to.
         * @read-only
         */
        get display(): Display;

        /**
         * The {@link Gdk.Drag} that initiated this drop
         * @construct-only
         */
        get drag(): Drag | null;

        /**
         * The possible formats that the drop can provide its data in.
         * @construct-only
         */
        get formats(): ContentFormats;

        /**
         * The {@link Gdk.Surface} the drop happens on
         * @construct-only
         */
        get surface(): Surface;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Drop.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Drop.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof Drop.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Drop.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Drop.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Drop.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Drop.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Drop.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Ends the drag operation after a drop.
         * 
         * The `action` must be a single action selected from the actions
         * available via {@link Gdk.Drop.get_actions}.
         * @param action the action performed by the destination or `GDK_ACTION_NONE` if the   drop failed
         */
        finish(action: DragAction): void;

        /**
         * Returns the possible actions for this {@link Gdk.Drop}.
         * 
         * If this value contains multiple actions - i.e.
         * {@link Gdk.DragAction.is_unique} returns false for the result -
         * {@link Gdk.Drop.finish} must choose the action to use when
         * accepting the drop. This will only happen if you passed
         * `GDK_ACTION_ASK` as one of the possible actions in
         * {@link Gdk.Drop.status}. `GDK_ACTION_ASK` itself will not
         * be included in the actions returned by this function.
         * 
         * This value may change over the lifetime of the {@link Gdk.Drop}
         * both as a response to source side actions as well as to calls to
         * {@link Gdk.Drop.status} or {@link Gdk.Drop.finish}. The source
         * side will not change this value anymore once a drop has started.
         * @returns The possible `GdkDragActions`
         */
        get_actions(): DragAction;

        /**
         * Returns the {@link Gdk.Device} performing the drop.
         * @returns The {@link Gdk.Device} performing the drop.
         */
        get_device(): Device;

        /**
         * Gets the {@link Gdk.Display} that `self` was created for.
         * @returns a {@link Gdk.Display}
         */
        get_display(): Display;

        /**
         * If this is an in-app drag-and-drop operation, returns the {@link Gdk.Drag}
         * that corresponds to this drop.
         * 
         * If it is not, `NULL` is returned.
         * @returns the corresponding {@link Gdk.Drag}
         */
        get_drag(): Drag | null;

        /**
         * Returns the {@link Gdk.ContentFormats} that the drop offers the data
         * to be read in.
         * @returns The possible {@link Gdk.ContentFormats}
         */
        get_formats(): ContentFormats;

        /**
         * Returns the {@link Gdk.Surface} performing the drop.
         * @returns The {@link Gdk.Surface} performing the drop.
         */
        get_surface(): Surface;

        /**
         * Asynchronously read the dropped data from a {@link Gdk.Drop}
         * in a format that complies with one of the mime types.
         * @param mime_types pointer to an array of mime types
         * @param io_priority the I/O priority for the read operation
         * @param cancellable optional {@link Gio.Cancellable} object
         */
        read_async(mime_types: string[], io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<[Gio.InputStream | null, string]>;

        /**
         * Asynchronously read the dropped data from a {@link Gdk.Drop}
         * in a format that complies with one of the mime types.
         * @param mime_types pointer to an array of mime types
         * @param io_priority the I/O priority for the read operation
         * @param cancellable optional {@link Gio.Cancellable} object
         * @param callback a {@link Gio.AsyncReadyCallback} to call when   the request is satisfied
         */
        read_async(mime_types: string[], io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Asynchronously read the dropped data from a {@link Gdk.Drop}
         * in a format that complies with one of the mime types.
         * @param mime_types pointer to an array of mime types
         * @param io_priority the I/O priority for the read operation
         * @param cancellable optional {@link Gio.Cancellable} object
         * @param callback a {@link Gio.AsyncReadyCallback} to call when   the request is satisfied
         */
        read_async(mime_types: string[], io_priority: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<[Gio.InputStream | null, string]> | void;

        /**
         * Finishes an async drop read operation.
         * 
         * Note that you must not use blocking read calls on the returned stream
         * in the GTK thread, since some platforms might require communication with
         * GTK to complete the data transfer. You can use async APIs such as
         * `g_input_stream_read_bytes_async()`.
         * 
         * See {@link Gdk.Drop.read_async}.
         * @param result a {@link Gio.AsyncResult}
         * @returns the {@link Gio.InputStream}
         * @throws GLib.Error
         */
        read_finish(result: Gio.AsyncResult): [Gio.InputStream | null, string];

        /**
         * Asynchronously request the drag operation's contents converted
         * to the given `type`.
         * 
         * For local drag-and-drop operations that are available in the given
         * {@link GObject.GType}, the value will be copied directly. Otherwise, GDK will
         * try to use {@link Gdk.content_deserialize_async} to convert the data.
         * @param type a {@link GObject.GType} to read
         * @param io_priority the I/O priority of the request.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         */
        read_value_async(type: GObject.GType, io_priority: number, cancellable: Gio.Cancellable | null): globalThis.Promise<unknown>;

        /**
         * Asynchronously request the drag operation's contents converted
         * to the given `type`.
         * 
         * For local drag-and-drop operations that are available in the given
         * {@link GObject.GType}, the value will be copied directly. Otherwise, GDK will
         * try to use {@link Gdk.content_deserialize_async} to convert the data.
         * @param type a {@link GObject.GType} to read
         * @param io_priority the I/O priority of the request.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback callback to call when the request is satisfied
         */
        read_value_async(type: GObject.GType, io_priority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Asynchronously request the drag operation's contents converted
         * to the given `type`.
         * 
         * For local drag-and-drop operations that are available in the given
         * {@link GObject.GType}, the value will be copied directly. Otherwise, GDK will
         * try to use {@link Gdk.content_deserialize_async} to convert the data.
         * @param type a {@link GObject.GType} to read
         * @param io_priority the I/O priority of the request.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback callback to call when the request is satisfied
         */
        read_value_async(type: GObject.GType, io_priority: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<unknown> | void;

        /**
         * Finishes an async drop read.
         * 
         * See {@link Gdk.Drop.read_value_async}.
         * @param result a {@link Gio.AsyncResult}
         * @returns a {@link GObject.Value} containing the result.
         * @throws GLib.Error
         */
        read_value_finish(result: Gio.AsyncResult): unknown;

        /**
         * Selects all actions that are potentially supported by the destination.
         * 
         * When calling this function, do not restrict the passed in actions to
         * the ones provided by {@link Gdk.Drop.get_actions}. Those actions may
         * change in the future, even depending on the actions you provide here.
         * 
         * The `preferred` action is a hint to the drag-and-drop mechanism about which
         * action to use when multiple actions are possible.
         * 
         * This function should be called by drag destinations in response to
         * `GDK_DRAG_ENTER` or `GDK_DRAG_MOTION` events. If the destination does
         * not yet know the exact actions it supports, it should set any possible
         * actions first and then later call this function again.
         * @param actions Supported actions of the destination, or `GDK_ACTION_NONE` to    indicate that a drop will not be accepted
         * @param preferred A unique action that's a member of `actions` indicating the    preferred action
         */
        status(actions: DragAction, preferred: DragAction): void;
    }


    namespace Event {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}
    }

    /**
     * Represents windowing system events.
     * 
     * In GTK applications the events are handled automatically by toplevel
     * widgets and passed on to the event controllers of appropriate widgets,
     * so using {@link Gdk.Event} and its related API is rarely needed.
     * 
     * {@link Gdk.Event} structs are immutable.
     * @gir-type Class
     */
    abstract class Event {
        static $gtype: GObject.GType<Event>;

        // Constructors
        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof Event.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Event.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Event.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Event.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Event.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Event.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Returns the relative angle from `event1` to `event2`.
         * 
         * The relative angle is the angle between the X axis and the line
         * through both events' positions. The rotation direction for positive
         * angles is from the positive X axis towards the positive Y axis.
         * 
         * This assumes that both events have X/Y information.
         * If not, this function returns `false`.
         * @param event2 second {@link Gdk.Event}
         * @returns `true` if the angle could be calculated.
         */
        _get_angle(event2: Event): [boolean, number];

        /**
         * Returns the point halfway between the events' positions.
         * 
         * This assumes that both events have X/Y information.
         * If not, this function returns `false`.
         * @param event2 second {@link Gdk.Event}
         * @returns `true` if the center could be calculated.
         */
        _get_center(event2: Event): [boolean, number, number];

        /**
         * Returns the distance between the event locations.
         * 
         * This assumes that both events have X/Y information.
         * If not, this function returns `false`.
         * @param event2 second {@link Gdk.Event}
         * @returns `true` if the distance could be calculated.
         */
        _get_distance(event2: Event): [boolean, number];

        /**
         * Extracts all axis values from an event.
         * 
         * To find out which axes are used, use {@link Gdk.DeviceTool.get_axes}
         * on the device tool returned by {@link Gdk.Event.get_device_tool}.
         * @returns `true` on success, otherwise `false`
         */
        get_axes(): [boolean, number[]];

        /**
         * Extract the axis value for a particular axis use from
         * an event structure.
         * 
         * To find out which axes are used, use {@link Gdk.DeviceTool.get_axes}
         * on the device tool returned by {@link Gdk.Event.get_device_tool}.
         * @param axis_use the axis use to look for
         * @returns `true` if the specified axis was found, otherwise `false`
         */
        get_axis(axis_use: AxisUse): [boolean, number];

        /**
         * Returns the device of an event.
         * @returns a {@link Gdk.Device}
         */
        get_device(): Device | null;

        /**
         * Returns a {@link Gdk.DeviceTool} representing the tool that
         * caused the event.
         * 
         * If the was not generated by a device that supports
         * different tools (such as a tablet), this function will
         * return `null`.
         * 
         * Note: the {@link Gdk.DeviceTool} will be constant during
         * the application lifetime, if settings must be stored
         * persistently across runs, see {@link Gdk.DeviceTool.get_serial}.
         * @returns The current device tool
         */
        get_device_tool(): DeviceTool | null;

        /**
         * Retrieves the display associated to the `event`.
         * @returns a {@link Gdk.Display}
         */
        get_display(): Display | null;

        /**
         * Returns the event sequence to which the event belongs.
         * 
         * Related touch events are connected in a sequence. Other
         * events typically don't have event sequence information.
         * @returns the event sequence that the event belongs to
         */
        get_event_sequence(): EventSequence;

        /**
         * Retrieves the type of the event.
         * @returns a {@link Gdk.Event}Type
         */
        get_event_type(): EventType;

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
         * @returns an   array of time and coordinates
         */
        get_history(): TimeCoord[] | null;

        /**
         * Returns the modifier state field of an event.
         * @returns the modifier state of `event`
         */
        get_modifier_state(): ModifierType;

        /**
         * Returns whether this event is an 'emulated' pointer event.
         * 
         * Emulated pointer events typically originate from a touch events.
         * @returns `true` if this event is emulated
         */
        get_pointer_emulated(): boolean;

        /**
         * Extract the event surface relative x/y coordinates from an event.
         * 
         * This position is in [surface coordinates](https://docs.gtk.org/gdk4/coordinates.html).
         * @returns whether the positions were set
         */
        get_position(): [boolean, number, number];

        /**
         * Returns the seat that originated the event.
         * @returns a {@link Gdk.Seat}.
         */
        get_seat(): Seat | null;

        /**
         * Extracts the surface associated with an event.
         * @returns The {@link Gdk.Surface} associated with the event
         */
        get_surface(): Surface | null;

        /**
         * Returns the timestamp of `event`.
         * 
         * Not all events have timestamps. In that case, this function
         * returns `GDK_CURRENT_TIME`.
         * @returns timestamp field from `event`
         */
        get_time(): number;

        /**
         * Increase the ref count of `event`.
         * @returns `event`
         */
        ref(): Event;

        /**
         * Returns whether a {@link Gdk.Event} should trigger a context menu,
         * according to platform conventions.
         * 
         * The right mouse button typically triggers context menus.
         * On macOS, Control+left mouse button also triggers.
         * 
         * This function should always be used instead of simply checking for
         * 
         * ```c
         * event->button == GDK_BUTTON_SECONDARY
         * ```
         * @returns `true` if the event should trigger a context menu.
         */
        triggers_context_menu(): boolean;

        /**
         * Decrease the ref count of `event`.
         * 
         * If the last reference is dropped, the structure is freed.
         */
        unref(): void;
    }


    namespace FocusEvent {
        // Signal signatures
        interface SignalSignatures extends Event.SignalSignatures {}
    }

    /**
     * An event related to a keyboard focus change.
     * @gir-type Class
     */
    class FocusEvent extends Event {
        static $gtype: GObject.GType<FocusEvent>;

        // Constructors
        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof FocusEvent.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FocusEvent.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof FocusEvent.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FocusEvent.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof FocusEvent.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<FocusEvent.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Extracts whether this event is about focus entering or
         * leaving the surface.
         * @returns `true` of the focus is entering
         */
        get_in(): boolean;
    }


    namespace FrameClock {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * This signal ends processing of the frame.
             * 
             * Applications should generally not handle this signal.
             * @signal
             * @run-last
             */
            "after-paint": () => void;
            /**
             * Begins processing of the frame.
             * 
             * Applications should generally not handle this signal.
             * @signal
             * @run-last
             */
            "before-paint": () => void;
            /**
             * Used to flush pending motion events that are being batched up and
             * compressed together.
             * 
             * Applications should not handle this signal.
             * @signal
             * @run-last
             */
            "flush-events": () => void;
            /**
             * Emitted as the second step of toolkit and application processing
             * of the frame.
             * 
             * Any work to update sizes and positions of application elements
             * should be performed. GTK normally handles this internally.
             * @signal
             * @run-last
             */
            layout: () => void;
            /**
             * Emitted as the third step of toolkit and application processing
             * of the frame.
             * 
             * The frame is repainted. GDK normally handles this internally and
             * emits `Gdk.Surface::render` signals which are turned into
             * [GtkWidget::snapshot](../gtk4/signal.Widget.snapshot.html) signals
             * by GTK.
             * @signal
             * @run-last
             */
            paint: () => void;
            /**
             * Emitted after processing of the frame is finished.
             * 
             * This signal is handled internally by GTK to resume normal
             * event processing. Applications should not handle this signal.
             * @signal
             * @run-last
             */
            "resume-events": () => void;
            /**
             * Emitted as the first step of toolkit and application processing
             * of the frame.
             * 
             * Animations should be updated using {@link Gdk.FrameClock.get_frame_time}.
             * Applications can connect directly to this signal, or use
             * [gtk_widget_add_tick_callback()](../gtk4/method.Widget.add_tick_callback.html)
             * as a more convenient interface.
             * @signal
             * @run-last
             */
            update: () => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * Tells the application when to update and repaint a surface.
     * 
     * This may be synced to the vertical refresh rate of the monitor, for example.
     * Even when the frame clock uses a simple timer rather than a hardware-based
     * vertical sync, the frame clock helps because it ensures everything paints at
     * the same time (reducing the total number of frames).
     * 
     * The frame clock can also automatically stop painting when it knows the frames
     * will not be visible, or scale back animation framerates.
     * 
     * {@link Gdk.FrameClock} is designed to be compatible with an OpenGL-based implementation
     * or with mozRequestAnimationFrame in Firefox, for example.
     * 
     * A frame clock is idle until someone requests a frame with
     * {@link Gdk.FrameClock.request_phase}. At some later point that makes sense
     * for the synchronization being implemented, the clock will process a frame and
     * emit signals for each phase that has been requested. (See the signals of the
     * {@link Gdk.FrameClock} class for documentation of the phases.
     * {@link Gdk.FrameClockPhase.UPDATE} and the `Gdk.FrameClock::update` signal
     * are most interesting for application writers, and are used to update the
     * animations, using the frame time given by {@link Gdk.FrameClock.get_frame_time}.
     * 
     * The frame time is reported in microseconds and generally in the same
     * timescale as `g_get_monotonic_time()`, however, it is not the same
     * as `g_get_monotonic_time()`. The frame time does not advance during
     * the time a frame is being painted, and outside of a frame, an attempt
     * is made so that all calls to {@link Gdk.FrameClock.get_frame_time} that
     * are called at a “similar” time get the same value. This means that
     * if different animations are timed by looking at the difference in
     * time between an initial value from {@link Gdk.FrameClock.get_frame_time}
     * and the value inside the `Gdk.FrameClock::update` signal of the clock,
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
         * Starts updates for an animation.
         * 
         * Until a matching call to {@link Gdk.FrameClock.end_updating} is made,
         * the frame clock will continually request a new frame with the
         * {@link Gdk.FrameClockPhase.UPDATE} phase. This function may be called multiple
         * times and frames will be requested until `gdk_frame_clock_end_updating()`
         * is called the same number of times.
         */
        begin_updating(): void;

        /**
         * Stops updates for an animation.
         * 
         * See the documentation for {@link Gdk.FrameClock.begin_updating}.
         */
        end_updating(): void;

        /**
         * Gets the frame timings for the current frame.
         * @returns the {@link Gdk.FrameTimings} for the   frame currently being processed, or even no frame is being   processed, for the previous frame. Before any frames have been   processed, returns `null`.
         */
        get_current_timings(): FrameTimings | null;

        /**
         * Calculates the current frames-per-second, based on the
         * frame timings of `frame_clock`.
         * @returns the current fps, as a `double`
         */
        get_fps(): number;

        /**
         * {@link Gdk.FrameClock} maintains a 64-bit counter that increments for
         * each frame drawn.
         * @returns inside frame processing, the value of the frame counter   for the current frame. Outside of frame processing, the frame   counter for the last frame.
         */
        get_frame_counter(): number;

        /**
         * Gets the time that should currently be used for animations.
         * 
         * Inside the processing of a frame, it’s the time used to compute the
         * animation position of everything in a frame. Outside of a frame, it's
         * the time of the conceptual “previous frame,” which may be either
         * the actual previous frame time, or if that’s too old, an updated
         * time.
         * @returns a timestamp in microseconds, in the timescale of  of `g_get_monotonic_time()`.
         */
        get_frame_time(): number;

        /**
         * Returns the frame counter for the oldest frame available in history.
         * 
         * {@link Gdk.FrameClock} internally keeps a history of {@link Gdk.FrameTimings}
         * objects for recent frames that can be retrieved with
         * {@link Gdk.FrameClock.get_timings}. The set of stored frames
         * is the set from the counter values given by
         * {@link Gdk.FrameClock.get_history_start} and
         * {@link Gdk.FrameClock.get_frame_counter}, inclusive.
         * @returns the frame counter value for the oldest frame  that is available in the internal frame history of the  {@link Gdk.FrameClock}
         */
        get_history_start(): number;

        /**
         * Predicts a presentation time, based on history.
         * 
         * Using the frame history stored in the frame clock, finds the last
         * known presentation time and refresh interval, and assuming that
         * presentation times are separated by the refresh interval,
         * predicts a presentation time that is a multiple of the refresh
         * interval after the last presentation time, and later than `base_time`.
         * @param base_time base time for determining a presentaton time
         */
        get_refresh_info(base_time: bigint | number): [number, number];

        /**
         * Retrieves a {@link Gdk.FrameTimings} object holding timing information
         * for the current frame or a recent frame.
         * 
         * The {@link Gdk.FrameTimings} object may not yet be complete: see
         * {@link Gdk.FrameTimings.get_complete} and
         * {@link Gdk.FrameClock.get_history_start}.
         * @param frame_counter the frame counter value identifying the frame to  be received
         * @returns the {@link Gdk.FrameTimings} object   for the specified frame, or `null` if it is not available
         */
        get_timings(frame_counter: bigint | number): FrameTimings | null;

        /**
         * Asks the frame clock to run a particular phase.
         * 
         * The signal corresponding the requested phase will be emitted the next
         * time the frame clock processes. Multiple calls to
         * `gdk_frame_clock_request_phase()` will be combined together
         * and only one frame processed. If you are displaying animated
         * content and want to continually request the
         * {@link Gdk.FrameClockPhase.UPDATE} phase for a period of time,
         * you should use {@link Gdk.FrameClock.begin_updating} instead,
         * since this allows GTK to adjust system parameters to get maximally
         * smooth animations.
         * @param phase the phase that is requested
         */
        request_phase(phase: FrameClockPhase): void;
    }


    namespace GLContext {
        // Signal signatures
        interface SignalSignatures extends DrawContext.SignalSignatures {
            "notify::allowed-apis": (pspec: GObject.ParamSpec) => void;
            "notify::api": (pspec: GObject.ParamSpec) => void;
            "notify::shared-context": (pspec: GObject.ParamSpec) => void;
            "notify::display": (pspec: GObject.ParamSpec) => void;
            "notify::surface": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends DrawContext.ConstructorProps {
            allowed_apis: GLAPI;
            allowedApis: GLAPI;
            api: GLAPI;
            shared_context: GLContext | null;
            sharedContext: GLContext | null;
        }
    }

    /**
     * Represents a platform-specific OpenGL draw context.
     * 
     * {@link Gdk.GLContext}s are created for a surface using
     * {@link Gdk.Surface.create_gl_context}, and the context will match
     * the characteristics of the surface.
     * 
     * A {@link Gdk.GLContext} is not tied to any particular normal framebuffer.
     * For instance, it cannot draw to the surface back buffer. The GDK
     * repaint system is in full control of the painting to that. Instead,
     * you can create render buffers or textures and use {@link cairo_draw_from_gl}
     * in the draw function of your widget to draw them. Then GDK will handle
     * the integration of your rendering with that of other widgets.
     * 
     * Support for {@link Gdk.GLContext} is platform-specific and context creation
     * can fail, returning `null` context.
     * 
     * A {@link Gdk.GLContext} has to be made "current" in order to start using
     * it, otherwise any OpenGL call will be ignored.
     * 
     * ## Creating a new OpenGL context
     * 
     * In order to create a new {@link Gdk.GLContext} instance you need a {@link Gdk.Surface},
     * which you typically get during the realize call of a widget.
     * 
     * A {@link Gdk.GLContext} is not realized until either {@link Gdk.GLContext.make_current}
     * or {@link Gdk.GLContext.realize} is called. It is possible to specify
     * details of the GL context like the OpenGL version to be used, or whether
     * the GL context should have extra state validation enabled after calling
     * {@link Gdk.Surface.create_gl_context} by calling {@link Gdk.GLContext.realize}.
     * If the realization fails you have the option to change the settings of
     * the {@link Gdk.GLContext} and try again.
     * 
     * ## Using a GdkGLContext
     * 
     * You will need to make the {@link Gdk.GLContext} the current context before issuing
     * OpenGL calls; the system sends OpenGL commands to whichever context is current.
     * It is possible to have multiple contexts, so you always need to ensure that
     * the one which you want to draw with is the current one before issuing commands:
     * 
     * ```c
     * gdk_gl_context_make_current (context);
     * ```
     * 
     * You can now perform your drawing using OpenGL commands.
     * 
     * You can check which {@link Gdk.GLContext} is the current one by using
     * {@link Gdk.GLContext.get_current}; you can also unset any {@link Gdk.GLContext}
     * that is currently set by calling {@link Gdk.GLContext.clear_current}.
     * @gir-type Class
     */
    abstract class GLContext extends DrawContext {
        static $gtype: GObject.GType<GLContext>;

        // Properties
        /**
         * The allowed APIs.
         * @since 4.6
         * @default Gdk.GLAPI.GL | Gdk.GLAPI.GLES
         */
        get allowed_apis(): GLAPI;
        set allowed_apis(val: GLAPI);

        /**
         * The allowed APIs.
         * @since 4.6
         * @default Gdk.GLAPI.GL | Gdk.GLAPI.GLES
         */
        get allowedApis(): GLAPI;
        set allowedApis(val: GLAPI);

        /**
         * The API currently in use.
         * @since 4.6
         * @read-only
         * @default 0
         */
        get api(): GLAPI;

        /**
         * Always `null`
         * 
         * As many contexts can share data now and no single shared context exists
         * anymore, this function has been deprecated and now always returns `null`.
         * @deprecated since 4.4: Use {@link Gdk.GLContext.is_shared} to check if contexts   can be shared.
         * @construct-only
         */
        get shared_context(): GLContext | null;

        /**
         * Always `null`
         * 
         * As many contexts can share data now and no single shared context exists
         * anymore, this function has been deprecated and now always returns `null`.
         * @deprecated since 4.4: Use {@link Gdk.GLContext.is_shared} to check if contexts   can be shared.
         * @construct-only
         */
        get sharedContext(): GLContext | null;

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
         * until {@link Gdk.GLContext.make_current} is called.
         */
        static clear_current(): void;

        /**
         * Retrieves the current {@link Gdk.GLContext}.
         */
        static get_current(): GLContext | null;

        // Methods
        /**
         * Gets the allowed APIs set via `gdk_gl_context_set_allowed_apis()`.
         * @returns the allowed APIs
         * @since 4.6
         */
        get_allowed_apis(): GLAPI;

        /**
         * Gets the API currently in use.
         * 
         * If the renderer has not been realized yet, 0 is returned.
         * @returns the currently used API
         * @since 4.6
         */
        get_api(): GLAPI;

        /**
         * Retrieves whether the context is doing extra validations and runtime checking.
         * 
         * See {@link Gdk.GLContext.set_debug_enabled}.
         * @returns `true` if debugging is enabled
         */
        get_debug_enabled(): boolean;

        /**
         * Retrieves the display the `context` is created for
         * @returns a {@link Gdk.Display}
         */
        get_display(): Display | null;

        /**
         * Retrieves whether the context is forward-compatible.
         * 
         * See {@link Gdk.GLContext.set_forward_compatible}.
         * @returns `true` if the context should be forward-compatible
         */
        get_forward_compatible(): boolean;

        /**
         * Retrieves required OpenGL version set as a requirement for the `context`
         * realization. It will not change even if a greater OpenGL version is supported
         * and used after the `context` is realized. See
         * {@link Gdk.GLContext.get_version} for the real version in use.
         * 
         * See {@link Gdk.GLContext.set_required_version}.
         */
        get_required_version(): [number, number];

        /**
         * Used to retrieves the {@link Gdk.GLContext} that this `context` share data with.
         * 
         * As many contexts can share data now and no single shared context exists
         * anymore, this function has been deprecated and now always returns `null`.
         * @returns `null`
         * @deprecated since 4.4: Use {@link Gdk.GLContext.is_shared} to check if contexts   can be shared.
         */
        get_shared_context(): GLContext | null;

        /**
         * Retrieves the surface used by the `context`.
         * @returns a {@link Gdk.Surface}
         */
        get_surface(): Surface | null;

        /**
         * Checks whether the `context` is using an OpenGL or OpenGL ES profile.
         * @returns `true` if the {@link Gdk.GLContext} is using an OpenGL ES profile; `false` if other profile is in use of if the `context` has not yet been realized.
         */
        get_use_es(): boolean;

        /**
         * Retrieves the OpenGL version of the `context`.
         * 
         * The `context` must be realized prior to calling this function.
         */
        get_version(): [number, number];

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
         */
        is_legacy(): boolean;

        /**
         * Checks if the two GL contexts can share resources.
         * 
         * When they can, the texture IDs from `other` can be used in `self`. This
         * is particularly useful when passing {@link Gdk.GLTexture} objects between
         * different contexts.
         * 
         * Contexts created for the same display with the same properties will
         * always be compatible, even if they are created for different surfaces.
         * For other contexts it depends on the GL backend.
         * 
         * Both contexts must be realized for this check to succeed. If either one
         * is not, this function will return `false`.
         * @param other the {@link Gdk.GLContext} that should be compatible with `self`
         * @returns `true` if the two GL contexts are compatible.
         * @since 4.4
         */
        is_shared(other: GLContext): boolean;

        /**
         * Makes the `context` the current one.
         */
        make_current(): void;

        /**
         * Realizes the given {@link Gdk.GLContext}.
         * 
         * It is safe to call this function on a realized {@link Gdk.GLContext}.
         * @returns `true` if the context is realized
         * @throws GLib.Error
         */
        realize(): boolean;

        /**
         * Sets the allowed APIs. When `gdk_gl_context_realize()` is called, only the
         * allowed APIs will be tried. If you set this to 0, realizing will always fail.
         * 
         * If you set it on a realized context, the property will not have any effect.
         * It is only relevant during `gdk_gl_context_realize()`.
         * 
         * By default, all APIs are allowed.
         * @param apis the allowed APIs
         * @since 4.6
         */
        set_allowed_apis(apis: GLAPI): void;

        /**
         * Sets whether the {@link Gdk.GLContext} should perform extra validations and
         * runtime checking.
         * 
         * This is useful during development, but has additional overhead.
         * 
         * The {@link Gdk.GLContext} must not be realized or made current prior to
         * calling this function.
         * @param enabled whether to enable debugging in the context
         */
        set_debug_enabled(enabled: boolean): void;

        /**
         * Sets whether the {@link Gdk.GLContext} should be forward-compatible.
         * 
         * Forward-compatible contexts must not support OpenGL functionality that
         * has been marked as deprecated in the requested version; non-forward
         * compatible contexts, on the other hand, must support both deprecated and
         * non deprecated functionality.
         * 
         * The {@link Gdk.GLContext} must not be realized or made current prior to calling
         * this function.
         * @param compatible whether the context should be forward-compatible
         */
        set_forward_compatible(compatible: boolean): void;

        /**
         * Sets the major and minor version of OpenGL to request.
         * 
         * Setting `major` and `minor` to zero will use the default values.
         * 
         * Setting `major` and `minor` lower than the minimum versions required
         * by GTK will result in the context choosing the minimum version.
         * 
         * The `context` must not be realized or made current prior to calling
         * this function.
         * @param major the major version to request
         * @param minor the minor version to request
         */
        set_required_version(major: number, minor: number): void;

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
         * You should check the return value of {@link Gdk.GLContext.get_use_es}
         * after calling {@link Gdk.GLContext.realize} to decide whether to use
         * the OpenGL or OpenGL ES API, extensions, or shaders.
         * @param use_es whether the context should use OpenGL ES instead of OpenGL,   or -1 to allow auto-detection
         * @deprecated since 4.6
         */
        set_use_es(use_es: number): void;
    }


    namespace GLTexture {
        // Signal signatures
        interface SignalSignatures extends Texture.SignalSignatures, Paintable.SignalSignatures {
            "notify::color-state": (pspec: GObject.ParamSpec) => void;
            "notify::height": (pspec: GObject.ParamSpec) => void;
            "notify::width": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Texture.ConstructorProps, Paintable.ConstructorProps, Gio.Icon.ConstructorProps, Gio.LoadableIcon.ConstructorProps {}
    }

    /**
     * A {@link Gdk.Texture} representing a GL texture object.
     * @gir-type Class
     */
    class GLTexture extends Texture implements Paintable, Gio.Icon, Gio.LoadableIcon {
        static $gtype: GObject.GType<GLTexture>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GLTexture.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<GLTexture.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](context: GLContext, id: number, width: number, height: number, data: null): GLTexture;

        // Signals
        /** @signal */
        connect<K extends keyof GLTexture.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GLTexture.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof GLTexture.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GLTexture.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof GLTexture.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GLTexture.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Releases the GL resources held by a {@link Gdk.GLTexture}.
         * 
         * The texture contents are still available via the
         * {@link Gdk.Texture.download} function, after this
         * function has been called.
         */
        release(): void;

        /**
         * Compute a concrete size for the {@link Gdk.Paintable}.
         * 
         * Applies the sizing algorithm outlined in the
         * [CSS Image spec](https://drafts.csswg.org/css-images-3/#default-sizing)
         * to the given `paintable`. See that link for more details.
         * 
         * It is not necessary to call this function when both `specified_width`
         * and `specified_height` are known, but it is useful to call this
         * function in GtkWidget:measure implementations to compute the
         * other dimension when only one dimension is given.
         * @param specified_width the width `paintable` could be drawn into or   0.0 if unknown
         * @param specified_height the height `paintable` could be drawn into or   0.0 if unknown
         * @param default_width the width `paintable` would be drawn into if   no other constraints were given
         * @param default_height the height `paintable` would be drawn into if   no other constraints were given
         */
        compute_concrete_size(specified_width: number, specified_height: number, default_width: number, default_height: number): [number, number];

        /**
         * Gets an immutable paintable for the current contents displayed by `paintable`.
         * 
         * This is useful when you want to retain the current state of an animation,
         * for example to take a screenshot of a running animation.
         * 
         * If the `paintable` is already immutable, it will return itself.
         * @returns An immutable paintable for the current   contents of `paintable`
         */
        get_current_image(): Paintable;

        /**
         * Get flags for the paintable.
         * 
         * This is oftentimes useful for optimizations.
         * 
         * See {@link Gdk.PaintableFlags} for the flags and what they mean.
         * @returns The {@link Gdk.PaintableFlags} for this paintable
         */
        get_flags(): PaintableFlags;

        /**
         * Gets the preferred aspect ratio the `paintable` would like to be displayed at.
         * 
         * The aspect ratio is the width divided by the height, so a value of 0.5
         * means that the `paintable` prefers to be displayed twice as high as it
         * is wide. Consumers of this interface can use this to preserve aspect
         * ratio when displaying the paintable.
         * 
         * This is a purely informational value and does not in any way limit the
         * values that may be passed to {@link Gdk.Paintable.snapshot}.
         * 
         * Usually when a `paintable` returns nonzero values from
         * {@link Gdk.Paintable.get_intrinsic_width} and
         * {@link Gdk.Paintable.get_intrinsic_height} the aspect ratio
         * should conform to those values, though that is not required.
         * 
         * If the `paintable` does not have a preferred aspect ratio,
         * it returns 0. Negative values are never returned.
         * @returns the intrinsic aspect ratio of `paintable` or 0 if none.
         */
        get_intrinsic_aspect_ratio(): number;

        /**
         * Gets the preferred height the `paintable` would like to be displayed at.
         * 
         * Consumers of this interface can use this to reserve enough space to draw
         * the paintable.
         * 
         * This is a purely informational value and does not in any way limit the
         * values that may be passed to {@link Gdk.Paintable.snapshot}.
         * 
         * If the `paintable` does not have a preferred height, it returns 0.
         * Negative values are never returned.
         * @returns the intrinsic height of `paintable` or 0 if none.
         */
        get_intrinsic_height(): number;

        /**
         * Gets the preferred width the `paintable` would like to be displayed at.
         * 
         * Consumers of this interface can use this to reserve enough space to draw
         * the paintable.
         * 
         * This is a purely informational value and does not in any way limit the
         * values that may be passed to {@link Gdk.Paintable.snapshot}.
         * 
         * If the `paintable` does not have a preferred width, it returns 0.
         * Negative values are never returned.
         * @returns the intrinsic width of `paintable` or 0 if none.
         */
        get_intrinsic_width(): number;

        /**
         * Called by implementations of {@link Gdk.Paintable} to invalidate their contents.
         * 
         * Unless the contents are invalidated, implementations must guarantee that
         * multiple calls of {@link Gdk.Paintable.snapshot} produce the same output.
         * 
         * This function will emit the `Gdk.Paintable::invalidate-contents`
         * signal.
         * 
         * If a `paintable` reports the {@link Gdk.PaintableFlags.STATIC_CONTENTS} flag,
         * it must not call this function.
         */
        invalidate_contents(): void;

        /**
         * Called by implementations of {@link Gdk.Paintable} to invalidate their size.
         * 
         * As long as the size is not invalidated, `paintable` must return the same
         * values for its intrinsic width, height and aspect ratio.
         * 
         * This function will emit the `Gdk.Paintable::invalidate-size`
         * signal.
         * 
         * If a `paintable` reports the {@link Gdk.PaintableFlags.STATIC_SIZE} flag,
         * it must not call this function.
         */
        invalidate_size(): void;

        /**
         * Snapshots the given paintable with the given `width` and `height`.
         * 
         * The paintable is drawn at the current (0,0) offset of the `snapshot`.
         * If `width` and `height` are not larger than zero, this function will
         * do nothing.
         * @param snapshot a {@link Gdk.Snapshot} to snapshot to
         * @param width width to snapshot in
         * @param height height to snapshot in
         */
        snapshot(snapshot: Snapshot, width: number, height: number): void;

        /**
         * Gets an immutable paintable for the current contents displayed by `paintable`.
         * 
         * This is useful when you want to retain the current state of an animation,
         * for example to take a screenshot of a running animation.
         * 
         * If the `paintable` is already immutable, it will return itself.
         * @virtual
         */
        vfunc_get_current_image(): Paintable;

        /**
         * Get flags for the paintable.
         * 
         * This is oftentimes useful for optimizations.
         * 
         * See {@link Gdk.PaintableFlags} for the flags and what they mean.
         * @virtual
         */
        vfunc_get_flags(): PaintableFlags;

        /**
         * Gets the preferred aspect ratio the `paintable` would like to be displayed at.
         * 
         * The aspect ratio is the width divided by the height, so a value of 0.5
         * means that the `paintable` prefers to be displayed twice as high as it
         * is wide. Consumers of this interface can use this to preserve aspect
         * ratio when displaying the paintable.
         * 
         * This is a purely informational value and does not in any way limit the
         * values that may be passed to {@link Gdk.Paintable.snapshot}.
         * 
         * Usually when a `paintable` returns nonzero values from
         * {@link Gdk.Paintable.get_intrinsic_width} and
         * {@link Gdk.Paintable.get_intrinsic_height} the aspect ratio
         * should conform to those values, though that is not required.
         * 
         * If the `paintable` does not have a preferred aspect ratio,
         * it returns 0. Negative values are never returned.
         * @virtual
         */
        vfunc_get_intrinsic_aspect_ratio(): number;

        /**
         * Gets the preferred height the `paintable` would like to be displayed at.
         * 
         * Consumers of this interface can use this to reserve enough space to draw
         * the paintable.
         * 
         * This is a purely informational value and does not in any way limit the
         * values that may be passed to {@link Gdk.Paintable.snapshot}.
         * 
         * If the `paintable` does not have a preferred height, it returns 0.
         * Negative values are never returned.
         * @virtual
         */
        vfunc_get_intrinsic_height(): number;

        /**
         * Gets the preferred width the `paintable` would like to be displayed at.
         * 
         * Consumers of this interface can use this to reserve enough space to draw
         * the paintable.
         * 
         * This is a purely informational value and does not in any way limit the
         * values that may be passed to {@link Gdk.Paintable.snapshot}.
         * 
         * If the `paintable` does not have a preferred width, it returns 0.
         * Negative values are never returned.
         * @virtual
         */
        vfunc_get_intrinsic_width(): number;

        /**
         * Snapshots the given paintable with the given `width` and `height`.
         * 
         * The paintable is drawn at the current (0,0) offset of the `snapshot`.
         * If `width` and `height` are not larger than zero, this function will
         * do nothing.
         * @param snapshot a {@link Gdk.Snapshot} to snapshot to
         * @param width width to snapshot in
         * @param height height to snapshot in
         * @virtual
         */
        vfunc_snapshot(snapshot: Snapshot, width: number, height: number): void;

        /**
         * Checks if two icons are equal.
         * @param icon2 pointer to the second {@link Gio.Icon}.
         * @returns `true` if `icon1` is equal to `icon2`. `false` otherwise.
         */
        equal(icon2: Gio.Icon | null): boolean;

        /**
         * Gets a hash for an icon.
         * @returns a `guint` containing a hash for the `icon`, suitable for   use in a {@link GLib.HashTable} or similar data structure.
         */
        hash(): number;

        /**
         * Serializes a {@link Gio.Icon} into a {@link GLib.Variant}. An equivalent {@link Gio.Icon} can be retrieved
         * back by calling `g_icon_deserialize()` on the returned value.
         * As serialization will avoid using raw icon data when possible, it only
         * makes sense to transfer the {@link GLib.Variant} between processes on the same machine,
         * (as opposed to over the network), and within the same file system namespace.
         * @returns a {@link GLib.Variant}, or `null` when serialization fails. The {@link GLib.Variant} will not be floating.
         * @since 2.38
         */
        serialize(): GLib.Variant | null;

        /**
         * Generates a textual representation of `icon` that can be used for
         * serialization such as when passing `icon` to a different process or
         * saving it to persistent storage. Use `g_icon_new_for_string()` to
         * get `icon` back from the returned string.
         * 
         * The encoding of the returned string is proprietary to {@link Gio.Icon} except
         * in the following two cases
         * 
         * - If `icon` is a {@link Gio.FileIcon}, the returned string is a native path
         *   (such as `/path/to/my icon.png`) without escaping
         *   if the {@link Gio.File} for `icon` is a native file.  If the file is not
         *   native, the returned string is the result of `g_file_get_uri()`
         *   (such as `sftp://path/to/my%20icon.png`).
         * 
         * - If `icon` is a {@link Gio.ThemedIcon} with exactly one name and no fallbacks,
         *   the encoding is simply the name (such as `network-server`).
         * @returns An allocated NUL-terminated UTF8 string or `null` if `icon` can't be serialized. Use `g_free()` to free.
         * @since 2.20
         */
        to_string(): string | null;

        /**
         * Checks if two icons are equal.
         * @param icon2 pointer to the second {@link Gio.Icon}.
         * @virtual
         */
        vfunc_equal(icon2: Gio.Icon | null): boolean;

        /**
         * Gets a hash for an icon.
         * @virtual
         */
        vfunc_hash(): number;

        /**
         * Serializes a {@link Gio.Icon} into a {@link GLib.Variant}. An equivalent {@link Gio.Icon} can be retrieved
         * back by calling `g_icon_deserialize()` on the returned value.
         * As serialization will avoid using raw icon data when possible, it only
         * makes sense to transfer the {@link GLib.Variant} between processes on the same machine,
         * (as opposed to over the network), and within the same file system namespace.
         * @since 2.38
         * @virtual
         */
        vfunc_serialize(): GLib.Variant | null;

        /**
         * Serializes the `icon` into string tokens.
         * This is can be invoked when `g_icon_new_for_string()` is called.
         * @since 2.20
         * @virtual
         */
        vfunc_to_tokens(): [boolean, string[], number];

        /**
         * Loads a loadable icon. For the asynchronous version of this function,
         * see `g_loadable_icon_load_async()`.
         * @param size an integer.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @returns a {@link Gio.InputStream} to read the icon from.
         * @throws GLib.Error
         */
        load(size: number, cancellable: Gio.Cancellable | null): [Gio.InputStream, string];

        /**
         * Loads an icon asynchronously. To finish this function, see
         * `g_loadable_icon_load_finish()`. For the synchronous, blocking
         * version of this function, see `g_loadable_icon_load()`.
         * @param size an integer.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         */
        load_async(size: number, cancellable: Gio.Cancellable | null): globalThis.Promise<[Gio.InputStream, string]>;

        /**
         * Loads an icon asynchronously. To finish this function, see
         * `g_loadable_icon_load_finish()`. For the synchronous, blocking
         * version of this function, see `g_loadable_icon_load()`.
         * @param size an integer.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback}   to call when the request is satisfied
         */
        load_async(size: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Loads an icon asynchronously. To finish this function, see
         * `g_loadable_icon_load_finish()`. For the synchronous, blocking
         * version of this function, see `g_loadable_icon_load()`.
         * @param size an integer.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback}   to call when the request is satisfied
         */
        load_async(size: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<[Gio.InputStream, string]> | void;

        /**
         * Finishes an asynchronous icon load started in `g_loadable_icon_load_async()`.
         * @param res a {@link Gio.AsyncResult}.
         * @returns a {@link Gio.InputStream} to read the icon from.
         * @throws GLib.Error
         */
        load_finish(res: Gio.AsyncResult): [Gio.InputStream, string];

        /**
         * Loads a loadable icon. For the asynchronous version of this function,
         * see `g_loadable_icon_load_async()`.
         * @param size an integer.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @virtual
         */
        vfunc_load(size: number, cancellable: Gio.Cancellable | null): [Gio.InputStream, string];

        /**
         * Loads an icon asynchronously. To finish this function, see
         * `g_loadable_icon_load_finish()`. For the synchronous, blocking
         * version of this function, see `g_loadable_icon_load()`.
         * @param size an integer.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback}   to call when the request is satisfied
         * @virtual
         */
        vfunc_load_async(size: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Finishes an asynchronous icon load started in `g_loadable_icon_load_async()`.
         * @param res a {@link Gio.AsyncResult}.
         * @virtual
         */
        vfunc_load_finish(res: Gio.AsyncResult): [Gio.InputStream, string];
    }


    namespace GLTextureBuilder {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::color-state": (pspec: GObject.ParamSpec) => void;
            "notify::context": (pspec: GObject.ParamSpec) => void;
            "notify::format": (pspec: GObject.ParamSpec) => void;
            "notify::has-mipmap": (pspec: GObject.ParamSpec) => void;
            "notify::height": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::sync": (pspec: GObject.ParamSpec) => void;
            "notify::update-region": (pspec: GObject.ParamSpec) => void;
            "notify::update-texture": (pspec: GObject.ParamSpec) => void;
            "notify::width": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            color_state: ColorState;
            colorState: ColorState;
            context: GLContext | null;
            format: MemoryFormat;
            has_mipmap: boolean;
            hasMipmap: boolean;
            height: number;
            id: number;
            sync: never;
            update_region: cairo.Region | null;
            updateRegion: cairo.Region | null;
            update_texture: Texture | null;
            updateTexture: Texture | null;
            width: number;
        }
    }

    /**
     * Constructs {@link Gdk.Texture} objects from GL textures.
     * 
     * The operation is quite simple: Create a texture builder, set all the necessary
     * properties - keep in mind that the properties {@link Gdk.GLTextureBuilder.context},
     * {@link Gdk.GLTextureBuilder.id}, {@link Gdk.GLTextureBuilder.width}, and
     * {@link Gdk.GLTextureBuilder.height} are mandatory - and then call
     * {@link Gdk.GLTextureBuilder.build} to create the new texture.
     * 
     * {@link Gdk.GLTextureBuilder} can be used for quick one-shot construction of
     * textures as well as kept around and reused to construct multiple textures.
     * @gir-type Class
     * @since 4.12
     */
    class GLTextureBuilder extends GObject.Object {
        static $gtype: GObject.GType<GLTextureBuilder>;

        // Properties
        /**
         * The color state of the texture.
         * @since 4.16
         */
        get color_state(): ColorState;
        set color_state(val: ColorState);

        /**
         * The color state of the texture.
         * @since 4.16
         */
        get colorState(): ColorState;
        set colorState(val: ColorState);

        /**
         * The context owning the texture.
         * @since 4.12
         */
        get context(): GLContext | null;
        set context(val: GLContext | null);

        /**
         * The format when downloading the texture.
         * @since 4.12
         * @default Gdk.MemoryFormat.R8G8B8A8_PREMULTIPLIED
         */
        get format(): MemoryFormat;
        set format(val: MemoryFormat);

        /**
         * If the texture has a mipmap.
         * @since 4.12
         * @default false
         */
        get has_mipmap(): boolean;
        set has_mipmap(val: boolean);

        /**
         * If the texture has a mipmap.
         * @since 4.12
         * @default false
         */
        get hasMipmap(): boolean;
        set hasMipmap(val: boolean);

        /**
         * The height of the texture.
         * @since 4.12
         * @default 0
         */
        get height(): number;
        set height(val: number);

        /**
         * The texture ID to use.
         * @since 4.12
         * @default 0
         */
        get id(): number;
        set id(val: number);

        /**
         * An optional `GLSync` object.
         * 
         * If this is set, GTK will wait on it before using the texture.
         * @since 4.12
         */
        get sync(): null;
        set sync(val: never);

        /**
         * The update region for {@link Gdk.GLTextureBuilder.update_texture}.
         * @since 4.12
         */
        get update_region(): cairo.Region | null;
        set update_region(val: cairo.Region | null);

        /**
         * The update region for {@link Gdk.GLTextureBuilder.update_texture}.
         * @since 4.12
         */
        get updateRegion(): cairo.Region | null;
        set updateRegion(val: cairo.Region | null);

        /**
         * The texture {@link Gdk.GLTextureBuilder.update_region} is an update for.
         * @since 4.12
         */
        get update_texture(): Texture | null;
        set update_texture(val: Texture | null);

        /**
         * The texture {@link Gdk.GLTextureBuilder.update_region} is an update for.
         * @since 4.12
         */
        get updateTexture(): Texture | null;
        set updateTexture(val: Texture | null);

        /**
         * The width of the texture.
         * @since 4.12
         * @default 0
         */
        get width(): number;
        set width(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: GLTextureBuilder.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<GLTextureBuilder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): GLTextureBuilder;

        // Signals
        /** @signal */
        connect<K extends keyof GLTextureBuilder.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GLTextureBuilder.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof GLTextureBuilder.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GLTextureBuilder.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof GLTextureBuilder.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GLTextureBuilder.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Builds a new {@link Gdk.Texture} with the values set up in the builder.
         * 
         * The `destroy` function gets called when the returned texture gets released;
         * either when the texture is finalized or by an explicit call to
         * {@link Gdk.GLTexture.release}. It should release all GL resources associated
         * with the texture, such as the {@link Gdk.GLTextureBuilder.id} and the
         * {@link Gdk.GLTextureBuilder.sync}.
         * 
         * Note that it is a programming error to call this function if any mandatory
         * property has not been set.
         * 
         * It is possible to call this function multiple times to create multiple textures,
         * possibly with changing properties in between.
         * @param data user data to pass to the destroy function
         * @returns a newly built {@link Gdk.Texture}
         * @since 4.12
         */
        build(data: null): Texture;

        /**
         * Gets the color state previously set via `gdk_gl_texture_builder_set_color_state()`.
         * @returns the color state
         * @since 4.16
         */
        get_color_state(): ColorState;

        /**
         * Gets the context previously set via `gdk_gl_texture_builder_set_context()` or
         * `null` if none was set.
         * @returns The context
         * @since 4.12
         */
        get_context(): GLContext | null;

        /**
         * Gets the format previously set via `gdk_gl_texture_builder_set_format()`.
         * @returns The format
         * @since 4.12
         */
        get_format(): MemoryFormat;

        /**
         * Gets whether the texture has a mipmap.
         * @returns Whether the texture has a mipmap
         * @since 4.12
         */
        get_has_mipmap(): boolean;

        /**
         * Gets the height previously set via `gdk_gl_texture_builder_set_height()` or
         * 0 if the height wasn't set.
         * @returns The height
         * @since 4.12
         */
        get_height(): number;

        /**
         * Gets the texture id previously set via `gdk_gl_texture_builder_set_id()` or
         * 0 if the id wasn't set.
         * @returns The id
         * @since 4.12
         */
        get_id(): number;

        /**
         * Gets the `GLsync` previously set via `gdk_gl_texture_builder_set_sync()`.
         * @returns the `GLSync`
         * @since 4.12
         */
        get_sync(): null;

        /**
         * Gets the region previously set via `gdk_gl_texture_builder_set_update_region()` or
         * `null` if none was set.
         * @returns The region
         * @since 4.12
         */
        get_update_region(): cairo.Region | null;

        /**
         * Gets the texture previously set via `gdk_gl_texture_builder_set_update_texture()` or
         * `null` if none was set.
         * @returns The texture
         * @since 4.12
         */
        get_update_texture(): Texture | null;

        /**
         * Gets the width previously set via `gdk_gl_texture_builder_set_width()` or
         * 0 if the width wasn't set.
         * @returns The width
         * @since 4.12
         */
        get_width(): number;

        /**
         * Sets the color state for the texture.
         * 
         * By default, the sRGB colorstate is used. If you don't know what
         * colorstates are, this is probably the right thing.
         * @param color_state a {@link Gdk.ColorState}
         * @since 4.16
         */
        set_color_state(color_state: ColorState): void;

        /**
         * Sets the context to be used for the texture. This is the context that owns
         * the texture.
         * 
         * The context must be set before calling {@link Gdk.GLTextureBuilder.build}.
         * @param context The context the texture belongs to or `null` to unset
         * @since 4.12
         */
        set_context(context: GLContext | null): void;

        /**
         * Sets the format of the texture. The default is `GDK_MEMORY_R8G8B8A8_PREMULTIPLIED`.
         * 
         * The format is the preferred format the texture data should be downloaded to. The
         * format must be supported by the GL version of {@link Gdk.GLTextureBuilder.context}.
         * 
         * GDK's texture download code assumes that the format corresponds to the storage
         * parameters of the GL texture in an obvious way. For example, a format of
         * `GDK_MEMORY_R16G16B16A16_PREMULTIPLIED` is expected to be stored as `GL_RGBA16`
         * texture, and `GDK_MEMORY_G8A8` is expected to be stored as `GL_RG8` texture.
         * 
         * Setting the right format is particularly useful when using high bit depth textures
         * to preserve the bit depth, to set the correct value for unpremultiplied textures
         * and to make sure opaque textures are treated as such.
         * 
         * Non-RGBA textures need to have swizzling parameters set up properly to be usable
         * in GSK's shaders.
         * @param format The texture's format
         * @since 4.12
         */
        set_format(format: MemoryFormat): void;

        /**
         * Sets whether the texture has a mipmap. This allows the renderer and other users of the
         * generated texture to use a higher quality downscaling.
         * 
         * Typically, the `glGenerateMipmap` function is used to generate a mimap.
         * @param has_mipmap Whether the texture has a mipmap
         * @since 4.12
         */
        set_has_mipmap(has_mipmap: boolean): void;

        /**
         * Sets the height of the texture.
         * 
         * The height must be set before calling {@link Gdk.GLTextureBuilder.build}.
         * @param height The texture's height or 0 to unset
         * @since 4.12
         */
        set_height(height: number): void;

        /**
         * Sets the texture id of the texture. The texture id must remain unmodified
         * until the texture was finalized. See {@link Gdk.GLTextureBuilder.build}
         * for a longer discussion.
         * 
         * The id must be set before calling {@link Gdk.GLTextureBuilder.build}.
         * @param id The texture id to be used for creating the texture
         * @since 4.12
         */
        set_id(id: number): void;

        /**
         * Sets the GLSync object to use for the texture.
         * 
         * GTK will wait on this object before using the created {@link Gdk.Texture}.
         * 
         * The `destroy` function that is passed to {@link Gdk.GLTextureBuilder.build}
         * is responsible for freeing the sync object when it is no longer needed.
         * The texture builder does not destroy it and it is the callers
         * responsibility to make sure it doesn't leak.
         * @param sync the GLSync object
         * @since 4.12
         */
        set_sync(sync: null): void;

        /**
         * Sets the region to be updated by this texture. Together with
         * {@link Gdk.GLTextureBuilder.update_texture} this describes an
         * update of a previous texture.
         * 
         * When rendering animations of large textures, it is possible that
         * consecutive textures are only updating contents in parts of the texture.
         * It is then possible to describe this update via these two properties,
         * so that GTK can avoid rerendering parts that did not change.
         * 
         * An example would be a screen recording where only the mouse pointer moves.
         * @param region the region to update
         * @since 4.12
         */
        set_update_region(region: cairo.Region | null): void;

        /**
         * Sets the texture to be updated by this texture. See
         * {@link Gdk.GLTextureBuilder.set_update_region} for an explanation.
         * @param texture the texture to update
         * @since 4.12
         */
        set_update_texture(texture: Texture | null): void;

        /**
         * Sets the width of the texture.
         * 
         * The width must be set before calling {@link Gdk.GLTextureBuilder.build}.
         * @param width The texture's width or 0 to unset
         * @since 4.12
         */
        set_width(width: number): void;
    }


    namespace GrabBrokenEvent {
        // Signal signatures
        interface SignalSignatures extends Event.SignalSignatures {}
    }

    /**
     * An event related to a broken windowing system grab.
     * @gir-type Class
     */
    class GrabBrokenEvent extends Event {
        static $gtype: GObject.GType<GrabBrokenEvent>;

        // Constructors
        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof GrabBrokenEvent.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GrabBrokenEvent.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof GrabBrokenEvent.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, GrabBrokenEvent.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof GrabBrokenEvent.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<GrabBrokenEvent.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Extracts the grab surface from a grab broken event.
         * @returns the grab surface of `event`
         */
        get_grab_surface(): Surface;

        /**
         * Checks whether the grab broken event is for an implicit grab.
         * @returns `true` if the an implicit grab was broken
         */
        get_implicit(): boolean;
    }


    namespace KeyEvent {
        // Signal signatures
        interface SignalSignatures extends Event.SignalSignatures {}
    }

    /**
     * An event related to a key-based device.
     * @gir-type Class
     */
    class KeyEvent extends Event {
        static $gtype: GObject.GType<KeyEvent>;

        // Constructors
        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof KeyEvent.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, KeyEvent.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof KeyEvent.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, KeyEvent.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof KeyEvent.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<KeyEvent.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Extracts the consumed modifiers from a key event.
         * @returns the consumed modifiers or `event`
         */
        get_consumed_modifiers(): ModifierType;

        /**
         * Extracts the keycode from a key event.
         * @returns the keycode of `event`
         */
        get_keycode(): number;

        /**
         * Extracts the keyval from a key event.
         * @returns the keyval of `event`
         */
        get_keyval(): number;

        /**
         * Extracts the layout from a key event.
         * @returns the layout of `event`
         */
        get_layout(): number;

        /**
         * Extracts the shift level from a key event.
         * @returns the shift level of `event`
         */
        get_level(): number;

        /**
         * Gets a keyval and modifier combination that will match
         * the event.
         * 
         * See {@link Gdk.KeyEvent.matches}.
         * @returns `true` on success
         */
        get_match(): [boolean, number, ModifierType];

        /**
         * Extracts whether the key event is for a modifier key.
         * @returns `true` if the `event` is for a modifier key
         */
        is_modifier(): boolean;

        /**
         * Matches a key event against a keyval and modifiers.
         * 
         * This is typically used to trigger keyboard shortcuts such as Ctrl-C.
         * 
         * Partial matches are possible where the combination matches
         * if the currently active group is ignored.
         * 
         * Note that we ignore Caps Lock for matching.
         * @param keyval the keyval to match
         * @param modifiers the modifiers to match
         * @returns a {@link Gdk.KeyMatch} value describing whether `event` matches
         */
        matches(keyval: number, modifiers: ModifierType): KeyMatch;
    }


    namespace MemoryTexture {
        // Signal signatures
        interface SignalSignatures extends Texture.SignalSignatures, Paintable.SignalSignatures {
            "notify::color-state": (pspec: GObject.ParamSpec) => void;
            "notify::height": (pspec: GObject.ParamSpec) => void;
            "notify::width": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Texture.ConstructorProps, Paintable.ConstructorProps, Gio.Icon.ConstructorProps, Gio.LoadableIcon.ConstructorProps {}
    }

    /**
     * A {@link Gdk.Texture} representing image data in memory.
     * @gir-type Class
     */
    class MemoryTexture extends Texture implements Paintable, Gio.Icon, Gio.LoadableIcon {
        static $gtype: GObject.GType<MemoryTexture>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MemoryTexture.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<MemoryTexture.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](width: number, height: number, format: MemoryFormat, bytes: GLib.Bytes | Uint8Array, stride: bigint | number): MemoryTexture;

        // Signals
        /** @signal */
        connect<K extends keyof MemoryTexture.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MemoryTexture.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof MemoryTexture.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MemoryTexture.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof MemoryTexture.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<MemoryTexture.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        /**
         * Compute a concrete size for the {@link Gdk.Paintable}.
         * 
         * Applies the sizing algorithm outlined in the
         * [CSS Image spec](https://drafts.csswg.org/css-images-3/#default-sizing)
         * to the given `paintable`. See that link for more details.
         * 
         * It is not necessary to call this function when both `specified_width`
         * and `specified_height` are known, but it is useful to call this
         * function in GtkWidget:measure implementations to compute the
         * other dimension when only one dimension is given.
         * @param specified_width the width `paintable` could be drawn into or   0.0 if unknown
         * @param specified_height the height `paintable` could be drawn into or   0.0 if unknown
         * @param default_width the width `paintable` would be drawn into if   no other constraints were given
         * @param default_height the height `paintable` would be drawn into if   no other constraints were given
         */
        compute_concrete_size(specified_width: number, specified_height: number, default_width: number, default_height: number): [number, number];

        /**
         * Gets an immutable paintable for the current contents displayed by `paintable`.
         * 
         * This is useful when you want to retain the current state of an animation,
         * for example to take a screenshot of a running animation.
         * 
         * If the `paintable` is already immutable, it will return itself.
         * @returns An immutable paintable for the current   contents of `paintable`
         */
        get_current_image(): Paintable;

        /**
         * Get flags for the paintable.
         * 
         * This is oftentimes useful for optimizations.
         * 
         * See {@link Gdk.PaintableFlags} for the flags and what they mean.
         * @returns The {@link Gdk.PaintableFlags} for this paintable
         */
        get_flags(): PaintableFlags;

        /**
         * Gets the preferred aspect ratio the `paintable` would like to be displayed at.
         * 
         * The aspect ratio is the width divided by the height, so a value of 0.5
         * means that the `paintable` prefers to be displayed twice as high as it
         * is wide. Consumers of this interface can use this to preserve aspect
         * ratio when displaying the paintable.
         * 
         * This is a purely informational value and does not in any way limit the
         * values that may be passed to {@link Gdk.Paintable.snapshot}.
         * 
         * Usually when a `paintable` returns nonzero values from
         * {@link Gdk.Paintable.get_intrinsic_width} and
         * {@link Gdk.Paintable.get_intrinsic_height} the aspect ratio
         * should conform to those values, though that is not required.
         * 
         * If the `paintable` does not have a preferred aspect ratio,
         * it returns 0. Negative values are never returned.
         * @returns the intrinsic aspect ratio of `paintable` or 0 if none.
         */
        get_intrinsic_aspect_ratio(): number;

        /**
         * Gets the preferred height the `paintable` would like to be displayed at.
         * 
         * Consumers of this interface can use this to reserve enough space to draw
         * the paintable.
         * 
         * This is a purely informational value and does not in any way limit the
         * values that may be passed to {@link Gdk.Paintable.snapshot}.
         * 
         * If the `paintable` does not have a preferred height, it returns 0.
         * Negative values are never returned.
         * @returns the intrinsic height of `paintable` or 0 if none.
         */
        get_intrinsic_height(): number;

        /**
         * Gets the preferred width the `paintable` would like to be displayed at.
         * 
         * Consumers of this interface can use this to reserve enough space to draw
         * the paintable.
         * 
         * This is a purely informational value and does not in any way limit the
         * values that may be passed to {@link Gdk.Paintable.snapshot}.
         * 
         * If the `paintable` does not have a preferred width, it returns 0.
         * Negative values are never returned.
         * @returns the intrinsic width of `paintable` or 0 if none.
         */
        get_intrinsic_width(): number;

        /**
         * Called by implementations of {@link Gdk.Paintable} to invalidate their contents.
         * 
         * Unless the contents are invalidated, implementations must guarantee that
         * multiple calls of {@link Gdk.Paintable.snapshot} produce the same output.
         * 
         * This function will emit the `Gdk.Paintable::invalidate-contents`
         * signal.
         * 
         * If a `paintable` reports the {@link Gdk.PaintableFlags.STATIC_CONTENTS} flag,
         * it must not call this function.
         */
        invalidate_contents(): void;

        /**
         * Called by implementations of {@link Gdk.Paintable} to invalidate their size.
         * 
         * As long as the size is not invalidated, `paintable` must return the same
         * values for its intrinsic width, height and aspect ratio.
         * 
         * This function will emit the `Gdk.Paintable::invalidate-size`
         * signal.
         * 
         * If a `paintable` reports the {@link Gdk.PaintableFlags.STATIC_SIZE} flag,
         * it must not call this function.
         */
        invalidate_size(): void;

        /**
         * Snapshots the given paintable with the given `width` and `height`.
         * 
         * The paintable is drawn at the current (0,0) offset of the `snapshot`.
         * If `width` and `height` are not larger than zero, this function will
         * do nothing.
         * @param snapshot a {@link Gdk.Snapshot} to snapshot to
         * @param width width to snapshot in
         * @param height height to snapshot in
         */
        snapshot(snapshot: Snapshot, width: number, height: number): void;

        /**
         * Gets an immutable paintable for the current contents displayed by `paintable`.
         * 
         * This is useful when you want to retain the current state of an animation,
         * for example to take a screenshot of a running animation.
         * 
         * If the `paintable` is already immutable, it will return itself.
         * @virtual
         */
        vfunc_get_current_image(): Paintable;

        /**
         * Get flags for the paintable.
         * 
         * This is oftentimes useful for optimizations.
         * 
         * See {@link Gdk.PaintableFlags} for the flags and what they mean.
         * @virtual
         */
        vfunc_get_flags(): PaintableFlags;

        /**
         * Gets the preferred aspect ratio the `paintable` would like to be displayed at.
         * 
         * The aspect ratio is the width divided by the height, so a value of 0.5
         * means that the `paintable` prefers to be displayed twice as high as it
         * is wide. Consumers of this interface can use this to preserve aspect
         * ratio when displaying the paintable.
         * 
         * This is a purely informational value and does not in any way limit the
         * values that may be passed to {@link Gdk.Paintable.snapshot}.
         * 
         * Usually when a `paintable` returns nonzero values from
         * {@link Gdk.Paintable.get_intrinsic_width} and
         * {@link Gdk.Paintable.get_intrinsic_height} the aspect ratio
         * should conform to those values, though that is not required.
         * 
         * If the `paintable` does not have a preferred aspect ratio,
         * it returns 0. Negative values are never returned.
         * @virtual
         */
        vfunc_get_intrinsic_aspect_ratio(): number;

        /**
         * Gets the preferred height the `paintable` would like to be displayed at.
         * 
         * Consumers of this interface can use this to reserve enough space to draw
         * the paintable.
         * 
         * This is a purely informational value and does not in any way limit the
         * values that may be passed to {@link Gdk.Paintable.snapshot}.
         * 
         * If the `paintable` does not have a preferred height, it returns 0.
         * Negative values are never returned.
         * @virtual
         */
        vfunc_get_intrinsic_height(): number;

        /**
         * Gets the preferred width the `paintable` would like to be displayed at.
         * 
         * Consumers of this interface can use this to reserve enough space to draw
         * the paintable.
         * 
         * This is a purely informational value and does not in any way limit the
         * values that may be passed to {@link Gdk.Paintable.snapshot}.
         * 
         * If the `paintable` does not have a preferred width, it returns 0.
         * Negative values are never returned.
         * @virtual
         */
        vfunc_get_intrinsic_width(): number;

        /**
         * Snapshots the given paintable with the given `width` and `height`.
         * 
         * The paintable is drawn at the current (0,0) offset of the `snapshot`.
         * If `width` and `height` are not larger than zero, this function will
         * do nothing.
         * @param snapshot a {@link Gdk.Snapshot} to snapshot to
         * @param width width to snapshot in
         * @param height height to snapshot in
         * @virtual
         */
        vfunc_snapshot(snapshot: Snapshot, width: number, height: number): void;

        /**
         * Checks if two icons are equal.
         * @param icon2 pointer to the second {@link Gio.Icon}.
         * @returns `true` if `icon1` is equal to `icon2`. `false` otherwise.
         */
        equal(icon2: Gio.Icon | null): boolean;

        /**
         * Gets a hash for an icon.
         * @returns a `guint` containing a hash for the `icon`, suitable for   use in a {@link GLib.HashTable} or similar data structure.
         */
        hash(): number;

        /**
         * Serializes a {@link Gio.Icon} into a {@link GLib.Variant}. An equivalent {@link Gio.Icon} can be retrieved
         * back by calling `g_icon_deserialize()` on the returned value.
         * As serialization will avoid using raw icon data when possible, it only
         * makes sense to transfer the {@link GLib.Variant} between processes on the same machine,
         * (as opposed to over the network), and within the same file system namespace.
         * @returns a {@link GLib.Variant}, or `null` when serialization fails. The {@link GLib.Variant} will not be floating.
         * @since 2.38
         */
        serialize(): GLib.Variant | null;

        /**
         * Generates a textual representation of `icon` that can be used for
         * serialization such as when passing `icon` to a different process or
         * saving it to persistent storage. Use `g_icon_new_for_string()` to
         * get `icon` back from the returned string.
         * 
         * The encoding of the returned string is proprietary to {@link Gio.Icon} except
         * in the following two cases
         * 
         * - If `icon` is a {@link Gio.FileIcon}, the returned string is a native path
         *   (such as `/path/to/my icon.png`) without escaping
         *   if the {@link Gio.File} for `icon` is a native file.  If the file is not
         *   native, the returned string is the result of `g_file_get_uri()`
         *   (such as `sftp://path/to/my%20icon.png`).
         * 
         * - If `icon` is a {@link Gio.ThemedIcon} with exactly one name and no fallbacks,
         *   the encoding is simply the name (such as `network-server`).
         * @returns An allocated NUL-terminated UTF8 string or `null` if `icon` can't be serialized. Use `g_free()` to free.
         * @since 2.20
         */
        to_string(): string | null;

        /**
         * Checks if two icons are equal.
         * @param icon2 pointer to the second {@link Gio.Icon}.
         * @virtual
         */
        vfunc_equal(icon2: Gio.Icon | null): boolean;

        /**
         * Gets a hash for an icon.
         * @virtual
         */
        vfunc_hash(): number;

        /**
         * Serializes a {@link Gio.Icon} into a {@link GLib.Variant}. An equivalent {@link Gio.Icon} can be retrieved
         * back by calling `g_icon_deserialize()` on the returned value.
         * As serialization will avoid using raw icon data when possible, it only
         * makes sense to transfer the {@link GLib.Variant} between processes on the same machine,
         * (as opposed to over the network), and within the same file system namespace.
         * @since 2.38
         * @virtual
         */
        vfunc_serialize(): GLib.Variant | null;

        /**
         * Serializes the `icon` into string tokens.
         * This is can be invoked when `g_icon_new_for_string()` is called.
         * @since 2.20
         * @virtual
         */
        vfunc_to_tokens(): [boolean, string[], number];

        /**
         * Loads a loadable icon. For the asynchronous version of this function,
         * see `g_loadable_icon_load_async()`.
         * @param size an integer.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @returns a {@link Gio.InputStream} to read the icon from.
         * @throws GLib.Error
         */
        load(size: number, cancellable: Gio.Cancellable | null): [Gio.InputStream, string];

        /**
         * Loads an icon asynchronously. To finish this function, see
         * `g_loadable_icon_load_finish()`. For the synchronous, blocking
         * version of this function, see `g_loadable_icon_load()`.
         * @param size an integer.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         */
        load_async(size: number, cancellable: Gio.Cancellable | null): globalThis.Promise<[Gio.InputStream, string]>;

        /**
         * Loads an icon asynchronously. To finish this function, see
         * `g_loadable_icon_load_finish()`. For the synchronous, blocking
         * version of this function, see `g_loadable_icon_load()`.
         * @param size an integer.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback}   to call when the request is satisfied
         */
        load_async(size: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Loads an icon asynchronously. To finish this function, see
         * `g_loadable_icon_load_finish()`. For the synchronous, blocking
         * version of this function, see `g_loadable_icon_load()`.
         * @param size an integer.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback}   to call when the request is satisfied
         */
        load_async(size: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<[Gio.InputStream, string]> | void;

        /**
         * Finishes an asynchronous icon load started in `g_loadable_icon_load_async()`.
         * @param res a {@link Gio.AsyncResult}.
         * @returns a {@link Gio.InputStream} to read the icon from.
         * @throws GLib.Error
         */
        load_finish(res: Gio.AsyncResult): [Gio.InputStream, string];

        /**
         * Loads a loadable icon. For the asynchronous version of this function,
         * see `g_loadable_icon_load_async()`.
         * @param size an integer.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @virtual
         */
        vfunc_load(size: number, cancellable: Gio.Cancellable | null): [Gio.InputStream, string];

        /**
         * Loads an icon asynchronously. To finish this function, see
         * `g_loadable_icon_load_finish()`. For the synchronous, blocking
         * version of this function, see `g_loadable_icon_load()`.
         * @param size an integer.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback}   to call when the request is satisfied
         * @virtual
         */
        vfunc_load_async(size: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Finishes an asynchronous icon load started in `g_loadable_icon_load_async()`.
         * @param res a {@link Gio.AsyncResult}.
         * @virtual
         */
        vfunc_load_finish(res: Gio.AsyncResult): [Gio.InputStream, string];
    }


    namespace MemoryTextureBuilder {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::bytes": (pspec: GObject.ParamSpec) => void;
            "notify::color-state": (pspec: GObject.ParamSpec) => void;
            "notify::format": (pspec: GObject.ParamSpec) => void;
            "notify::height": (pspec: GObject.ParamSpec) => void;
            "notify::stride": (pspec: GObject.ParamSpec) => void;
            "notify::update-region": (pspec: GObject.ParamSpec) => void;
            "notify::update-texture": (pspec: GObject.ParamSpec) => void;
            "notify::width": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            bytes: GLib.Bytes | Uint8Array | null;
            color_state: ColorState;
            colorState: ColorState;
            format: MemoryFormat;
            height: number;
            stride: bigint | number;
            update_region: cairo.Region | null;
            updateRegion: cairo.Region | null;
            update_texture: Texture | null;
            updateTexture: Texture | null;
            width: number;
        }
    }

    /**
     * Constructs {@link Gdk.Texture} objects from system memory provided
     * via {@link GLib.Bytes}.
     * 
     * The operation is quite simple: Create a texture builder, set all the necessary
     * properties - keep in mind that the properties {@link Gdk.MemoryTextureBuilder.bytes},
     * {@link Gdk.MemoryTextureBuilder.stride}, {@link Gdk.MemoryTextureBuilder.width},
     * and {@link Gdk.MemoryTextureBuilder.height} are mandatory - and then call
     * {@link Gdk.MemoryTextureBuilder.build} to create the new texture.
     * 
     * {@link Gdk.MemoryTextureBuilder} can be used for quick one-shot construction of
     * textures as well as kept around and reused to construct multiple textures.
     * @gir-type Class
     * @since 4.16
     */
    class MemoryTextureBuilder extends GObject.Object {
        static $gtype: GObject.GType<MemoryTextureBuilder>;

        // Properties
        /**
         * The bytes holding the data.
         * @since 4.16
         */
        get bytes(): GLib.Bytes | null;
        set bytes(val: GLib.Bytes | Uint8Array | null);

        /**
         * The colorstate describing the data.
         * @since 4.16
         */
        get color_state(): ColorState;
        set color_state(val: ColorState);

        /**
         * The colorstate describing the data.
         * @since 4.16
         */
        get colorState(): ColorState;
        set colorState(val: ColorState);

        /**
         * The format of the data.
         * @since 4.16
         * @default Gdk.MemoryFormat.R8G8B8A8_PREMULTIPLIED
         */
        get format(): MemoryFormat;
        set format(val: MemoryFormat);

        /**
         * The height of the texture.
         * @since 4.16
         * @default 0
         */
        get height(): number;
        set height(val: number);

        /**
         * The rowstride of the texture.
         * 
         * The rowstride is the number of bytes between the first pixel
         * in a row of image data, and the first pixel in the next row.
         * @since 4.16
         * @default 0
         */
        get stride(): number;
        set stride(val: bigint | number);

        /**
         * The update region for {@link Gdk.MemoryTextureBuilder.update_texture}.
         * @since 4.16
         */
        get update_region(): cairo.Region | null;
        set update_region(val: cairo.Region | null);

        /**
         * The update region for {@link Gdk.MemoryTextureBuilder.update_texture}.
         * @since 4.16
         */
        get updateRegion(): cairo.Region | null;
        set updateRegion(val: cairo.Region | null);

        /**
         * The texture {@link Gdk.MemoryTextureBuilder.update_region} is an update for.
         * @since 4.16
         */
        get update_texture(): Texture | null;
        set update_texture(val: Texture | null);

        /**
         * The texture {@link Gdk.MemoryTextureBuilder.update_region} is an update for.
         * @since 4.16
         */
        get updateTexture(): Texture | null;
        set updateTexture(val: Texture | null);

        /**
         * The width of the texture.
         * @since 4.16
         * @default 0
         */
        get width(): number;
        set width(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MemoryTextureBuilder.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<MemoryTextureBuilder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): MemoryTextureBuilder;

        // Signals
        /** @signal */
        connect<K extends keyof MemoryTextureBuilder.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MemoryTextureBuilder.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof MemoryTextureBuilder.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MemoryTextureBuilder.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof MemoryTextureBuilder.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<MemoryTextureBuilder.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Builds a new {@link Gdk.Texture} with the values set up in the builder.
         * 
         * Note that it is a programming error to call this function if any mandatory
         * property has not been set.
         * 
         * It is possible to call this function multiple times to create multiple textures,
         * possibly with changing properties in between.
         * @returns a newly built {@link Gdk.Texture}
         * @since 4.16
         */
        build(): Texture;

        /**
         * Gets the bytes previously set via `gdk_memory_texture_builder_set_bytes()`
         * or `null` if none was set.
         * @returns The bytes
         * @since 4.16
         */
        get_bytes(): GLib.Bytes | null;

        /**
         * Gets the colorstate previously set via `gdk_memory_texture_builder_set_color_state()`.
         * @returns The colorstate
         * @since 4.16
         */
        get_color_state(): ColorState;

        /**
         * Gets the format previously set via `gdk_memory_texture_builder_set_format()`.
         * @returns The format
         * @since 4.16
         */
        get_format(): MemoryFormat;

        /**
         * Gets the height previously set via `gdk_memory_texture_builder_set_height()`
         * or 0 if the height wasn't set.
         * @returns The height
         * @since 4.16
         */
        get_height(): number;

        /**
         * Gets the offset previously set via `gdk_memory_texture_builder_set_offset()`.
         * @param plane a plane
         * @returns The offset associated to a `plane`
         * @since 4.20
         */
        get_offset(plane: number): number;

        /**
         * Gets the stride previously set via `gdk_memory_texture_builder_set_stride()`.
         * @returns the stride
         * @since 4.16
         */
        get_stride(): number;

        /**
         * Gets the stride previously set via `gdk_memory_texture_builder_set_stride_for_plane()`.
         * @param plane a plane
         * @returns The stride associated to a `plane`
         * @since 4.20
         */
        get_stride_for_plane(plane: number): number;

        /**
         * Gets the region previously set via `gdk_memory_texture_builder_set_update_region()`
         * or `null` if none was set.
         * @returns The update region
         * @since 4.16
         */
        get_update_region(): cairo.Region | null;

        /**
         * Gets the texture previously set via `gdk_memory_texture_builder_set_update_texture()`
         * or `null` if none was set.
         * @returns The update texture
         * @since 4.16
         */
        get_update_texture(): Texture | null;

        /**
         * Gets the width previously set via `gdk_memory_texture_builder_set_width()`
         * or 0 if the width wasn't set.
         * @returns The width
         * @since 4.16
         */
        get_width(): number;

        /**
         * Sets the data to be shown but the texture.
         * 
         * The bytes must be set before calling {@link Gdk.MemoryTextureBuilder.build}.
         * @param bytes The bytes the texture shows or `null` to unset
         * @since 4.16
         */
        set_bytes(bytes: GLib.Bytes | Uint8Array | null): void;

        /**
         * Sets the colorstate describing the data.
         * 
         * By default, the sRGB colorstate is used. If you don't know
         * what colorstates are, this is probably the right thing.
         * @param color_state The colorstate describing the data
         * @since 4.16
         */
        set_color_state(color_state: ColorState): void;

        /**
         * Sets the format of the bytes.
         * 
         * The default is `GDK_MEMORY_R8G8B8A8_PREMULTIPLIED`.
         * @param format The texture's format
         * @since 4.16
         */
        set_format(format: MemoryFormat): void;

        /**
         * Sets the height of the texture.
         * 
         * The height must be set before calling {@link Gdk.MemoryTextureBuilder.build}
         * and conform to size requirements of the provided format.
         * @param height The texture's height or 0 to unset
         * @since 4.16
         */
        set_height(height: number): void;

        /**
         * Sets the offset of the texture for `plane`.
         * @param plane a plane
         * @param offset the texture's offset for `plane`
         * @since 4.20
         */
        set_offset(plane: number, offset: bigint | number): void;

        /**
         * Sets the rowstride of the bytes used.
         * 
         * The rowstride must be set before calling {@link Gdk.MemoryTextureBuilder.build}.
         * @param stride the stride or 0 to unset
         * @since 4.16
         */
        set_stride(stride: bigint | number): void;

        /**
         * Sets the stride of the texture for `plane`.
         * @param plane a plane
         * @param stride the texture's stride for `plane`
         * @since 4.20
         */
        set_stride_for_plane(plane: number, stride: bigint | number): void;

        /**
         * Sets the region to be updated by this texture.
         * 
         * Together with {@link Gdk.MemoryTextureBuilder.update_texture},
         * this describes an update of a previous texture.
         * 
         * When rendering animations of large textures, it is possible that
         * consecutive textures are only updating contents in parts of the texture.
         * It is then possible to describe this update via these two properties,
         * so that GTK can avoid rerendering parts that did not change.
         * 
         * An example would be a screen recording where only the mouse pointer moves.
         * @param region the region to update
         * @since 4.16
         */
        set_update_region(region: cairo.Region | null): void;

        /**
         * Sets the texture to be updated by this texture.
         * 
         * See {@link Gdk.MemoryTextureBuilder.set_update_region} for an explanation.
         * @param texture the texture to update
         * @since 4.16
         */
        set_update_texture(texture: Texture | null): void;

        /**
         * Sets the width of the texture.
         * 
         * The width must be set before calling {@link Gdk.MemoryTextureBuilder.build}
         * and conform to size requirements of the provided format.
         * @param width The texture's width or 0 to unset
         * @since 4.16
         */
        set_width(width: number): void;
    }


    namespace Monitor {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * Emitted when the output represented by `monitor` gets disconnected.
             * @signal
             * @run-first
             */
            invalidate: () => void;
            "notify::connector": (pspec: GObject.ParamSpec) => void;
            "notify::description": (pspec: GObject.ParamSpec) => void;
            "notify::display": (pspec: GObject.ParamSpec) => void;
            "notify::geometry": (pspec: GObject.ParamSpec) => void;
            "notify::height-mm": (pspec: GObject.ParamSpec) => void;
            "notify::manufacturer": (pspec: GObject.ParamSpec) => void;
            "notify::model": (pspec: GObject.ParamSpec) => void;
            "notify::refresh-rate": (pspec: GObject.ParamSpec) => void;
            "notify::scale": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::subpixel-layout": (pspec: GObject.ParamSpec) => void;
            "notify::valid": (pspec: GObject.ParamSpec) => void;
            "notify::width-mm": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            connector: string | null;
            description: string | null;
            display: Display;
            geometry: Rectangle;
            height_mm: number;
            heightMm: number;
            manufacturer: string | null;
            model: string | null;
            refresh_rate: number;
            refreshRate: number;
            scale: number;
            scale_factor: number;
            scaleFactor: number;
            subpixel_layout: SubpixelLayout;
            subpixelLayout: SubpixelLayout;
            valid: boolean;
            width_mm: number;
            widthMm: number;
        }
    }

    /**
     * Represents the individual outputs that are associated with a {@link Gdk.Display}.
     * 
     * {@link Gdk.Display} keeps a {@link Gio.ListModel} to enumerate and monitor
     * monitors with {@link Gdk.Display.get_monitors}. You can use
     * {@link Gdk.Display.get_monitor_at_surface} to find a particular
     * monitor.
     * @gir-type Class
     */
    class Monitor extends GObject.Object {
        static $gtype: GObject.GType<Monitor>;

        // Properties
        /**
         * The connector name.
         * @read-only
         * @default null
         */
        get connector(): string | null;

        /**
         * A short description of the monitor, meant for display to the user.
         * @since 4.10
         * @read-only
         * @default null
         */
        get description(): string | null;

        /**
         * The {@link Gdk.Display} of the monitor.
         * @construct-only
         */
        get display(): Display;

        /**
         * The geometry of the monitor.
         * @read-only
         */
        get geometry(): Rectangle;

        /**
         * The height of the monitor, in millimeters.
         * @read-only
         * @default 0
         */
        get height_mm(): number;

        /**
         * The height of the monitor, in millimeters.
         * @read-only
         * @default 0
         */
        get heightMm(): number;

        /**
         * The manufacturer name.
         * @read-only
         * @default null
         */
        get manufacturer(): string | null;

        /**
         * The model name.
         * @read-only
         * @default null
         */
        get model(): string | null;

        /**
         * The refresh rate, in milli-Hertz.
         * @read-only
         * @default 0
         */
        get refresh_rate(): number;

        /**
         * The refresh rate, in milli-Hertz.
         * @read-only
         * @default 0
         */
        get refreshRate(): number;

        /**
         * The scale of the monitor.
         * @since 4.14
         * @read-only
         * @default 1
         */
        get scale(): number;

        /**
         * The scale factor.
         * 
         * The scale factor is the next larger integer,
         * compared to {@link Gdk.Surface.scale}.
         * @read-only
         * @default 1
         */
        get scale_factor(): number;

        /**
         * The scale factor.
         * 
         * The scale factor is the next larger integer,
         * compared to {@link Gdk.Surface.scale}.
         * @read-only
         * @default 1
         */
        get scaleFactor(): number;

        /**
         * The subpixel layout.
         * @read-only
         * @default Gdk.SubpixelLayout.UNKNOWN
         */
        get subpixel_layout(): SubpixelLayout;

        /**
         * The subpixel layout.
         * @read-only
         * @default Gdk.SubpixelLayout.UNKNOWN
         */
        get subpixelLayout(): SubpixelLayout;

        /**
         * Whether the object is still valid.
         * @read-only
         * @default true
         */
        get valid(): boolean;

        /**
         * The width of the monitor, in millimeters.
         * @read-only
         * @default 0
         */
        get width_mm(): number;

        /**
         * The width of the monitor, in millimeters.
         * @read-only
         * @default 0
         */
        get widthMm(): number;

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
         * Gets the name of the monitor's connector, if available.
         * 
         * These are strings such as "eDP-1", or "HDMI-2". They depend
         * on software and hardware configuration, and should not be
         * relied on as stable identifiers of a specific monitor.
         * @returns the name of the connector
         */
        get_connector(): string | null;

        /**
         * Gets a string describing the monitor, if available.
         * 
         * This can be used to identify a monitor in the UI.
         * @returns the monitor description
         * @since 4.10
         */
        get_description(): string | null;

        /**
         * Gets the display that this monitor belongs to.
         * @returns the display
         */
        get_display(): Display;

        /**
         * Retrieves the size and position of the monitor within the
         * display coordinate space.
         * 
         * The returned geometry is in  ”application pixels”, not in
         * ”device pixels” (see {@link Gdk.Monitor.get_scale}).
         */
        get_geometry(): Rectangle;

        /**
         * Gets the height in millimeters of the monitor.
         * @returns the physical height of the monitor
         */
        get_height_mm(): number;

        /**
         * Gets the name or PNP ID of the monitor's manufacturer.
         * 
         * Note that this value might also vary depending on actual
         * display backend.
         * 
         * The PNP ID registry is located at
         * [https://uefi.org/pnp_id_list](https://uefi.org/pnp_id_list).
         * @returns the name of the manufacturer
         */
        get_manufacturer(): string | null;

        /**
         * Gets the string identifying the monitor model, if available.
         * @returns the monitor model
         */
        get_model(): string | null;

        /**
         * Gets the refresh rate of the monitor, if available.
         * 
         * The value is in milli-Hertz, so a refresh rate of 60Hz
         * is returned as 60000.
         * @returns the refresh rate in milli-Hertz, or 0
         */
        get_refresh_rate(): number;

        /**
         * Gets the internal scale factor that maps from monitor coordinates
         * to device pixels.
         * 
         * This can be used if you want to create pixel based data for a
         * particular monitor, but most of the time you’re drawing to a surface
         * where it is better to use {@link Gdk.Surface.get_scale} instead.
         * @returns the scale
         * @since 4.14
         */
        get_scale(): number;

        /**
         * Gets the internal scale factor that maps from monitor coordinates
         * to device pixels.
         * 
         * On traditional systems this is 1, but on very high density outputs
         * it can be a higher value (often 2).
         * 
         * This can be used if you want to create pixel based data for a
         * particular monitor, but most of the time you’re drawing to a surface
         * where it is better to use {@link Gdk.Surface.get_scale_factor} instead.
         * @returns the scale factor
         */
        get_scale_factor(): number;

        /**
         * Gets information about the layout of red, green and blue
         * primaries for pixels.
         * @returns the subpixel layout
         */
        get_subpixel_layout(): SubpixelLayout;

        /**
         * Gets the width in millimeters of the monitor.
         * @returns the physical width of the monitor
         */
        get_width_mm(): number;

        /**
         * Returns `true` if the `monitor` object corresponds to a
         * physical monitor.
         * 
         * The `monitor` becomes invalid when the physical monitor
         * is unplugged or removed.
         * @returns `true` if the object corresponds to a physical monitor
         */
        is_valid(): boolean;
    }


    namespace MotionEvent {
        // Signal signatures
        interface SignalSignatures extends Event.SignalSignatures {}
    }

    /**
     * An event related to a pointer or touch device motion.
     * @gir-type Class
     */
    class MotionEvent extends Event {
        static $gtype: GObject.GType<MotionEvent>;

        // Constructors
        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof MotionEvent.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MotionEvent.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof MotionEvent.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, MotionEvent.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof MotionEvent.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<MotionEvent.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace PadEvent {
        // Signal signatures
        interface SignalSignatures extends Event.SignalSignatures {}
    }

    /**
     * An event related to a pad-based device.
     * @gir-type Class
     */
    class PadEvent extends Event {
        static $gtype: GObject.GType<PadEvent>;

        // Constructors
        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof PadEvent.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PadEvent.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof PadEvent.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, PadEvent.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof PadEvent.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<PadEvent.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Extracts the information from a pad strip or ring event.
         */
        get_axis_value(): [number, number];

        /**
         * Extracts information about the pressed button from
         * a pad event.
         * @returns the button of `event`
         */
        get_button(): number;

        /**
         * Extracts group and mode information from a pad event.
         */
        get_group_mode(): [number, number];
    }


    namespace ProximityEvent {
        // Signal signatures
        interface SignalSignatures extends Event.SignalSignatures {}
    }

    /**
     * An event related to the proximity of a tool to a device.
     * @gir-type Class
     */
    class ProximityEvent extends Event {
        static $gtype: GObject.GType<ProximityEvent>;

        // Constructors
        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof ProximityEvent.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ProximityEvent.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ProximityEvent.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ProximityEvent.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ProximityEvent.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ProximityEvent.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace ScrollEvent {
        // Signal signatures
        interface SignalSignatures extends Event.SignalSignatures {}
    }

    /**
     * An event related to a scrolling motion.
     * @gir-type Class
     */
    class ScrollEvent extends Event {
        static $gtype: GObject.GType<ScrollEvent>;

        // Constructors
        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof ScrollEvent.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ScrollEvent.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ScrollEvent.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ScrollEvent.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ScrollEvent.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ScrollEvent.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Extracts the scroll deltas of a scroll event.
         * 
         * The deltas will be zero unless the scroll direction
         * is {@link Gdk.ScrollDirection.SMOOTH}.
         * 
         * For the representation unit of these deltas, see
         * {@link Gdk.ScrollEvent.get_unit}.
         */
        get_deltas(): [number, number];

        /**
         * Extracts the direction of a scroll event.
         * @returns the scroll direction of `event`
         */
        get_direction(): ScrollDirection;

        /**
         * Extracts the scroll direction relative to the physical motion.
         * @returns the relative scroll direction.
         * @since 4.20
         */
        get_relative_direction(): ScrollRelativeDirection;

        /**
         * Extracts the scroll delta unit of a scroll event.
         * 
         * The unit will always be {@link Gdk.ScrollUnit.WHEEL} if the scroll direction is not
         * {@link Gdk.ScrollDirection.SMOOTH}.
         * @returns the scroll unit.
         * @since 4.8
         */
        get_unit(): ScrollUnit;

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
         * @returns `true` if the event is a scroll stop event
         */
        is_stop(): boolean;
    }


    namespace Seat {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * Emitted when a new input device is related to this seat.
             * @signal
             * @run-last
             */
            "device-added": (device: Device) => void;
            /**
             * Emitted when an input device is removed (e.g. unplugged).
             * @signal
             * @run-last
             */
            "device-removed": (device: Device) => void;
            /**
             * Emitted whenever a new tool is made known to the seat.
             * 
             * The tool may later be assigned to a device (i.e. on
             * proximity with a tablet). The device will emit the
             * `Gdk.Device::tool-changed` signal accordingly.
             * 
             * A same tool may be used by several devices.
             * @signal
             * @run-last
             */
            "tool-added": (tool: DeviceTool) => void;
            /**
             * Emitted whenever a tool is no longer known to this `seat`.
             * @signal
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
     * Represents a collection of input devices that belong to a user.
     * @gir-type Class
     */
    abstract class Seat extends GObject.Object {
        static $gtype: GObject.GType<Seat>;

        // Properties
        /**
         * {@link Gdk.Display} of this seat.
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
         */
        get_capabilities(): SeatCapabilities;

        /**
         * Returns the devices that match the given capabilities.
         * @param capabilities capabilities to get devices for
         * @returns A list   of `GdkDevices`. The list must be freed with `g_list_free()`,   the elements are owned by GTK and must not be freed.
         */
        get_devices(capabilities: SeatCapabilities): Device[];

        /**
         * Returns the {@link Gdk.Display} this seat belongs to.
         * @returns a {@link Gdk.Display}. This object   is owned by GTK and must not be freed.
         */
        get_display(): Display;

        /**
         * Returns the device that routes keyboard events.
         * @returns a {@link Gdk.Device} with keyboard   capabilities. This object is owned by GTK and must not be freed.
         */
        get_keyboard(): Device | null;

        /**
         * Returns the device that routes pointer events.
         * @returns a {@link Gdk.Device} with pointer   capabilities. This object is owned by GTK and must not be freed.
         */
        get_pointer(): Device | null;

        /**
         * Returns all `GdkDeviceTools` that are known to the application.
         * @returns A list of tools. Free with `g_list_free()`.
         */
        get_tools(): DeviceTool[];
    }


    namespace Snapshot {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * Base type for snapshot operations.
     * 
     * The subclass of {@link Gdk.Snapshot} used by GTK is [GtkSnapshot](../gtk4/class.Snapshot.html).
     * @gir-type Class
     */
    abstract class Snapshot extends GObject.Object {
        static $gtype: GObject.GType<Snapshot>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Snapshot.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Snapshot.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof Snapshot.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Snapshot.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Snapshot.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Snapshot.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Snapshot.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Snapshot.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace Surface {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * Emitted when `surface` starts being present on the monitor.
             * @signal
             * @run-first
             */
            "enter-monitor": (monitor: Monitor) => void;
            /**
             * Emitted when GDK receives an input event for `surface`.
             * @signal
             * @run-last
             */
            event: (event: Event) => boolean | void;
            /**
             * Emitted when the size of `surface` is changed, or when relayout should
             * be performed.
             * 
             * Surface size is reported in ”application pixels”, not
             * ”device pixels” (see `gdk_surface_get_scale_factor()`).
             * @signal
             * @run-first
             */
            layout: (width: number, height: number) => void;
            /**
             * Emitted when `surface` stops being present on the monitor.
             * @signal
             * @run-first
             */
            "leave-monitor": (monitor: Monitor) => void;
            /**
             * Emitted when part of the surface needs to be redrawn.
             * @signal
             * @run-last
             */
            render: (region: cairo.Region) => boolean | void;
            "notify::cursor": (pspec: GObject.ParamSpec) => void;
            "notify::display": (pspec: GObject.ParamSpec) => void;
            "notify::frame-clock": (pspec: GObject.ParamSpec) => void;
            "notify::height": (pspec: GObject.ParamSpec) => void;
            "notify::mapped": (pspec: GObject.ParamSpec) => void;
            "notify::scale": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::width": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            cursor: Cursor | null;
            display: Display;
            frame_clock: FrameClock;
            frameClock: FrameClock;
            height: number;
            mapped: boolean;
            scale: number;
            scale_factor: number;
            scaleFactor: number;
            width: number;
        }
    }

    /**
     * Represents a rectangular region on the screen.
     * 
     * It’s a low-level object, used to implement high-level objects
     * such as [GtkWindow](../gtk4/class.Window.html).
     * 
     * The surfaces you see in practice are either {@link Gdk.Toplevel} or
     * {@link Gdk.Popup}, and those interfaces provide much of the required
     * API to interact with these surfaces. Other, more specialized surface
     * types exist, but you will rarely interact with them directly.
     * @gir-type Class
     */
    abstract class Surface extends GObject.Object {
        static $gtype: GObject.GType<Surface>;

        // Properties
        /**
         * The mouse pointer for the {@link Gdk.Surface}.
         */
        get cursor(): Cursor | null;
        set cursor(val: Cursor | null);

        /**
         * The {@link Gdk.Display} connection of the surface.
         * @construct-only
         */
        get display(): Display;

        /**
         * The {@link Gdk.FrameClock} of the surface.
         * @construct-only
         */
        get frame_clock(): FrameClock;

        /**
         * The {@link Gdk.FrameClock} of the surface.
         * @construct-only
         */
        get frameClock(): FrameClock;

        /**
         * The height of the surface, in pixels.
         * @read-only
         * @default 0
         */
        get height(): number;

        /**
         * Whether the surface is mapped.
         * @read-only
         * @default false
         */
        get mapped(): boolean;

        /**
         * The scale of the surface.
         * @since 4.12
         * @read-only
         * @default 1
         */
        get scale(): number;

        /**
         * The scale factor of the surface.
         * 
         * The scale factor is the next larger integer,
         * compared to {@link Gdk.Surface.scale}.
         * @read-only
         * @default 1
         */
        get scale_factor(): number;

        /**
         * The scale factor of the surface.
         * 
         * The scale factor is the next larger integer,
         * compared to {@link Gdk.Surface.scale}.
         * @read-only
         * @default 1
         */
        get scaleFactor(): number;

        /**
         * The width of the surface in pixels.
         * @read-only
         * @default 0
         */
        get width(): number;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Surface.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Surface.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_popup(parent: Surface, autohide: boolean): Surface;

        static new_toplevel(display: Display): Surface;

        // Signals
        /** @signal */
        connect<K extends keyof Surface.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Surface.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Surface.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Surface.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Surface.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Surface.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Emits a short beep associated to `surface`.
         * 
         * If the display of `surface` does not support per-surface beeps,
         * emits a short beep on the display just as {@link Gdk.Display.beep}.
         */
        beep(): void;

        /**
         * Creates a new {@link Gdk.CairoContext} for rendering on `surface`.
         * @returns the newly created {@link Gdk.CairoContext}
         * @deprecated since 4.18: Drawing content with Cairo should be done via   Cairo rendernodes, not by using the Cairo renderer.
         */
        create_cairo_context(): CairoContext;

        /**
         * Creates a new {@link Gdk.GLContext} for the {@link Gdk.Surface}.
         * 
         * The context is disconnected from any particular surface or surface.
         * If the creation of the {@link Gdk.GLContext} failed, `error` will be set.
         * Before using the returned {@link Gdk.GLContext}, you will need to
         * call {@link Gdk.GLContext.make_current} or {@link Gdk.GLContext.realize}.
         * @returns the newly created {@link Gdk.GLContext}
         * @throws GLib.Error
         */
        create_gl_context(): GLContext;

        /**
         * Create a new Cairo surface that is as compatible as possible with the
         * given `surface`.
         * 
         * For example the new surface will have the same fallback resolution
         * and font options as `surface`. Generally, the new surface will also
         * use the same backend as `surface`, unless that is not possible for
         * some reason. The type of the returned surface may be examined with
         * `cairo_surface_get_type()`.
         * 
         * Initially the surface contents are all 0 (transparent if contents
         * have transparency, black otherwise.)
         * 
         * This function always returns a valid pointer, but it will return a
         * pointer to a “nil” surface if `other` is already in an error state
         * or any other error occurs.
         * @param content the content for the new surface
         * @param width width of the new surface
         * @param height height of the new surface
         * @returns a pointer to the newly allocated surface. The caller   owns the surface and should call `cairo_surface_destroy()` when done   with it.
         * @deprecated since 4.12: Create a suitable cairo image surface yourself
         */
        create_similar_surface(content: cairo.Content, width: number, height: number): cairo.Surface;

        /**
         * Sets an error and returns `null`.
         * @returns `null`
         * @deprecated since 4.14: GTK does not expose any Vulkan internals. This   function is a leftover that was accidentally exposed.
         * @throws GLib.Error
         */
        create_vulkan_context(): VulkanContext;

        /**
         * Destroys the window system resources associated with `surface` and
         * decrements `surface`'s reference count.
         * 
         * The window system resources for all children of `surface` are also
         * destroyed, but the children’s reference counts are not decremented.
         * 
         * Note that a surface will not be destroyed automatically when its
         * reference count reaches zero. You must call this function yourself
         * before that happens.
         */
        destroy(): void;

        /**
         * Retrieves a {@link Gdk.Cursor} pointer for the cursor currently set on the
         * {@link Gdk.Surface}.
         * 
         * If the return value is `null` then there is no custom cursor set on
         * the surface, and it is using the cursor for its parent surface.
         * 
         * Use {@link Gdk.Surface.set_cursor} to unset the cursor of the surface.
         * @returns a {@link Gdk.Cursor}
         */
        get_cursor(): Cursor | null;

        /**
         * Retrieves a {@link Gdk.Cursor} pointer for the `device` currently set on the
         * specified {@link Gdk.Surface}.
         * 
         * If the return value is `null` then there is no custom cursor set on the
         * specified surface, and it is using the cursor for its parent surface.
         * 
         * Use {@link Gdk.Surface.set_cursor} to unset the cursor of the surface.
         * @param device a pointer {@link Gdk.Device}
         * @returns a {@link Gdk.Cursor}
         */
        get_device_cursor(device: Device): Cursor | null;

        /**
         * Obtains the current device position and modifier state.
         * 
         * The position is given in coordinates relative to the upper
         * left corner of `surface`.
         * @param device pointer {@link Gdk.Device} to query to
         * @returns `true` if the device is over the surface
         */
        get_device_position(device: Device): [boolean, number, number, ModifierType | null];

        /**
         * Gets the {@link Gdk.Display} associated with a {@link Gdk.Surface}.
         * @returns the {@link Gdk.Display} associated with `surface`
         */
        get_display(): Display;

        /**
         * Gets the frame clock for the surface.
         * 
         * The frame clock for a surface never changes unless the surface is
         * reparented to a new toplevel surface.
         * @returns the frame clock
         */
        get_frame_clock(): FrameClock;

        /**
         * Returns the height of the given `surface`.
         * 
         * Surface size is reported in ”application pixels”, not
         * ”device pixels” (see {@link Gdk.Surface.get_scale_factor}).
         * @returns The height of `surface`
         */
        get_height(): number;

        /**
         * Checks whether the surface has been mapped.
         * 
         * A surface is mapped with {@link Gdk.Toplevel.present}
         * or {@link Gdk.Popup.present}.
         * @returns `true` if the surface is mapped
         */
        get_mapped(): boolean;

        /**
         * Returns the internal scale that maps from surface coordinates
         * to the actual device pixels.
         * 
         * When the scale is bigger than 1, the windowing system prefers to get
         * buffers with a resolution that is bigger than the surface size (e.g.
         * to show the surface on a high-resolution display, or in a magnifier).
         * 
         * Compare with {@link Gdk.Surface.get_scale_factor}, which returns the
         * next larger integer.
         * 
         * The scale may change during the lifetime of the surface.
         * @returns the scale
         * @since 4.12
         */
        get_scale(): number;

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
         * The scale factor may change during the lifetime of the surface.
         * @returns the scale factor
         */
        get_scale_factor(): number;

        /**
         * Returns the width of the given `surface`.
         * 
         * Surface size is reported in ”application pixels”, not
         * ”device pixels” (see {@link Gdk.Surface.get_scale_factor}).
         * @returns The width of `surface`
         */
        get_width(): number;

        /**
         * Hide the surface.
         * 
         * For toplevel surfaces, withdraws them, so they will no longer be
         * known to the window manager; for all surfaces, unmaps them, so
         * they won’t be displayed. Normally done automatically as
         * part of [gtk_widget_hide()](../gtk4/method.Widget.hide.html).
         */
        hide(): void;

        /**
         * Check to see if a surface is destroyed.
         * @returns `true` if the surface is destroyed
         */
        is_destroyed(): boolean;

        /**
         * Forces a `Gdk.Surface::render` signal emission for `surface`
         * to be scheduled.
         * 
         * This function is useful for implementations that track invalid
         * regions on their own.
         */
        queue_render(): void;

        /**
         * Request a layout phase from the surface's frame clock.
         * 
         * See {@link Gdk.FrameClock.request_phase}.
         */
        request_layout(): void;

        /**
         * Sets the default mouse pointer for a {@link Gdk.Surface}.
         * 
         * Passing `null` for the `cursor` argument means that `surface` will use
         * the cursor of its parent surface. Most surfaces should use this default.
         * Note that `cursor` must be for the same display as `surface`.
         * 
         * Use {@link Gdk.Cursor.new_from_name} or {@link Gdk.Cursor.new_from_texture}
         * to create the cursor. To make the cursor invisible, use `GDK_BLANK_CURSOR`.
         * @param cursor a {@link Gdk.Cursor}
         */
        set_cursor(cursor: Cursor | null): void;

        /**
         * Sets a specific {@link Gdk.Cursor} for a given device when it gets inside `surface`.
         * 
         * Passing `null` for the `cursor` argument means that `surface` will use the
         * cursor of its parent surface. Most surfaces should use this default.
         * 
         * Use {@link Gdk.Cursor.new_from_name} or {@link Gdk.Cursor.new_from_texture}
         * to create the cursor. To make the cursor invisible, use `GDK_BLANK_CURSOR`.
         * @param device a pointer {@link Gdk.Device}
         * @param cursor a {@link Gdk.Cursor}
         */
        set_device_cursor(device: Device, cursor: Cursor): void;

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
         * Use {@link Gdk.Display.supports_input_shapes} to find out if
         * a particular backend supports input regions.
         * @param region region of surface to be reactive,   or `null` to make the entire surface reactive
         */
        set_input_region(region: cairo.Region | null): void;

        /**
         * Marks a region of the {@link Gdk.Surface} as opaque.
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
         * [GtkWidgetClass.css_changed](../gtk4/vfunc.Widget.css_changed.html) handler.
         * @param region a region, or `null` to make the entire   surface opaque
         * @deprecated since 4.16: GDK can figure out the opaque parts of a window itself   by inspecting the contents that are drawn.
         */
        set_opaque_region(region: cairo.Region | null): void;

        /**
         * Translates coordinates between two surfaces.
         * 
         * Note that this only works if `to` and `from` are popups or
         * transient-for to the same toplevel (directly or indirectly).
         * @param to the target surface
         * @param x coordinates to translate
         * @param y coordinates to translate
         * @returns `true` if the coordinates were successfully translated
         */
        translate_coordinates(to: Surface, x: number, y: number): [boolean, number, number];
    }


    namespace Texture {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures, Paintable.SignalSignatures {
            "notify::color-state": (pspec: GObject.ParamSpec) => void;
            "notify::height": (pspec: GObject.ParamSpec) => void;
            "notify::width": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps, Paintable.ConstructorProps, Gio.Icon.ConstructorProps, Gio.LoadableIcon.ConstructorProps {
            color_state: ColorState;
            colorState: ColorState;
            height: number;
            width: number;
        }
    }

    /**
     * Refers to pixel data in various forms.
     * 
     * It is primarily meant for pixel data that will not change over
     * multiple frames, and will be used for a long time.
     * 
     * There are various ways to create {@link Gdk.Texture} objects from a
     * {@link GdkPixbuf.Pixbuf}, or from bytes stored in memory, a file, or a
     * {@link Gio.Resource}.
     * 
     * The ownership of the pixel data is transferred to the {@link Gdk.Texture}
     * instance; you can only make a copy of it, via {@link Gdk.Texture.download}.
     * 
     * {@link Gdk.Texture} is an immutable object: That means you cannot change
     * anything about it other than increasing the reference count via
     * {@link GObject.Object.ref}, and consequently, it is a threadsafe object.
     * 
     * GDK provides a number of threadsafe texture loading functions:
     * {@link Gdk.Texture.new_from_resource},
     * {@link Gdk.Texture.new_from_bytes},
     * {@link Gdk.Texture.new_from_file},
     * {@link Gdk.Texture.new_from_filename},
     * {@link Gdk.Texture.new_for_pixbuf}. Note that these are meant for loading
     * icons and resources that are shipped with the toolkit or application. It
     * is recommended that you use a dedicated image loading framework such as
     * [glycin](https://lib.rs/crates/glycin), if you need to load untrusted image
     * data.
     * @gir-type Class
     */
    abstract class Texture extends GObject.Object implements Paintable, Gio.Icon, Gio.LoadableIcon {
        static $gtype: GObject.GType<Texture>;

        // Properties
        /**
         * The color state of the texture.
         * @since 4.16
         * @construct-only
         */
        get color_state(): ColorState;

        /**
         * The color state of the texture.
         * @since 4.16
         * @construct-only
         */
        get colorState(): ColorState;

        /**
         * The height of the texture, in pixels.
         * @construct-only
         * @default 1
         */
        get height(): number;

        /**
         * The width of the texture, in pixels.
         * @construct-only
         * @default 1
         */
        get width(): number;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Texture.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Texture.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_for_pixbuf(pixbuf: GdkPixbuf.Pixbuf): Texture;

        static new_from_bytes(bytes: GLib.Bytes | Uint8Array): Texture;

        static new_from_file(file: Gio.File): Texture;

        static new_from_filename(path: string): Texture;

        static new_from_resource(resource_path: string): Texture;

        // Signals
        /** @signal */
        connect<K extends keyof Texture.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Texture.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Texture.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Texture.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Texture.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Texture.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Downloads the `texture` into local memory.
         * 
         * This may be an expensive operation, as the actual texture data
         * may reside on a GPU or on a remote display server.
         * 
         * The data format of the downloaded data is equivalent to
         * {@link cairo.Format.ARGB32}, so every downloaded pixel requires
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
         * 
         * For more flexible download capabilities, see
         * {@link Gdk.TextureDownloader}.
         * @param data pointer to enough memory to be filled with the   downloaded data of `texture`
         * @param stride rowstride in bytes
         */
        download(data: Uint8Array | string, stride: bigint | number): void;

        /**
         * Returns the color state associated with the texture.
         * @returns the color state of the {@link Gdk.Texture}
         * @since 4.16
         */
        get_color_state(): ColorState;

        /**
         * Gets the memory format most closely associated with the data of
         * the texture.
         * 
         * Note that it may not be an exact match for texture data
         * stored on the GPU or with compression.
         * 
         * The format can give an indication about the bit depth and opacity
         * of the texture and is useful to determine the best format for
         * downloading the texture.
         * @returns the preferred format for the texture's data
         * @since 4.10
         */
        get_format(): MemoryFormat;

        /**
         * Returns the height of the `texture`, in pixels.
         * @returns the height of the {@link Gdk.Texture}
         */
        get_height(): number;

        /**
         * Returns the width of `texture`, in pixels.
         * @returns the width of the {@link Gdk.Texture}
         */
        get_width(): number;

        /**
         * Store the given `texture` to the `filename` as a PNG file.
         * 
         * This is a utility function intended for debugging and testing.
         * If you want more control over formats, proper error handling or
         * want to store to a {@link Gio.File} or other location, you might
         * want to use {@link Gdk.Texture.save_to_png_bytes} or look into
         * the libglycin library.
         * @param filename the filename to store to
         * @returns `true` if saving succeeded, `false` on failure.
         */
        save_to_png(filename: string): boolean;

        /**
         * Store the given `texture` in memory as a PNG file.
         * 
         * Use {@link Gdk.Texture.new_from_bytes} to read it back.
         * 
         * If you want to serialize a texture, this is a convenient and
         * portable way to do that.
         * 
         * If you need more control over the generated image, such as
         * attaching metadata, you should look into an image handling
         * library such as the libglycin library.
         * 
         * If you are dealing with high dynamic range float data, you
         * might also want to consider {@link Gdk.Texture.save_to_tiff_bytes}
         * instead.
         * @returns a newly allocated {@link GLib.Bytes} containing PNG data
         * @since 4.6
         */
        save_to_png_bytes(): GLib.Bytes;

        /**
         * Store the given `texture` to the `filename` as a TIFF file.
         * 
         * GTK will attempt to store data without loss.
         * @param filename the filename to store to
         * @returns `true` if saving succeeded, `false` on failure.
         * @since 4.6
         */
        save_to_tiff(filename: string): boolean;

        /**
         * Store the given `texture` in memory as a TIFF file.
         * 
         * Use {@link Gdk.Texture.new_from_bytes} to read it back.
         * 
         * This function is intended to store a representation of the
         * texture's data that is as accurate as possible. This is
         * particularly relevant when working with high dynamic range
         * images and floating-point texture data.
         * 
         * If that is not your concern and you are interested in a
         * smaller size and a more portable format, you might want to
         * use {@link Gdk.Texture.save_to_png_bytes}.
         * @returns a newly allocated {@link GLib.Bytes} containing TIFF data
         * @since 4.6
         */
        save_to_tiff_bytes(): GLib.Bytes;

        /**
         * Compute a concrete size for the {@link Gdk.Paintable}.
         * 
         * Applies the sizing algorithm outlined in the
         * [CSS Image spec](https://drafts.csswg.org/css-images-3/#default-sizing)
         * to the given `paintable`. See that link for more details.
         * 
         * It is not necessary to call this function when both `specified_width`
         * and `specified_height` are known, but it is useful to call this
         * function in GtkWidget:measure implementations to compute the
         * other dimension when only one dimension is given.
         * @param specified_width the width `paintable` could be drawn into or   0.0 if unknown
         * @param specified_height the height `paintable` could be drawn into or   0.0 if unknown
         * @param default_width the width `paintable` would be drawn into if   no other constraints were given
         * @param default_height the height `paintable` would be drawn into if   no other constraints were given
         */
        compute_concrete_size(specified_width: number, specified_height: number, default_width: number, default_height: number): [number, number];

        /**
         * Gets an immutable paintable for the current contents displayed by `paintable`.
         * 
         * This is useful when you want to retain the current state of an animation,
         * for example to take a screenshot of a running animation.
         * 
         * If the `paintable` is already immutable, it will return itself.
         * @returns An immutable paintable for the current   contents of `paintable`
         */
        get_current_image(): Paintable;

        /**
         * Get flags for the paintable.
         * 
         * This is oftentimes useful for optimizations.
         * 
         * See {@link Gdk.PaintableFlags} for the flags and what they mean.
         * @returns The {@link Gdk.PaintableFlags} for this paintable
         */
        get_flags(): PaintableFlags;

        /**
         * Gets the preferred aspect ratio the `paintable` would like to be displayed at.
         * 
         * The aspect ratio is the width divided by the height, so a value of 0.5
         * means that the `paintable` prefers to be displayed twice as high as it
         * is wide. Consumers of this interface can use this to preserve aspect
         * ratio when displaying the paintable.
         * 
         * This is a purely informational value and does not in any way limit the
         * values that may be passed to {@link Gdk.Paintable.snapshot}.
         * 
         * Usually when a `paintable` returns nonzero values from
         * {@link Gdk.Paintable.get_intrinsic_width} and
         * {@link Gdk.Paintable.get_intrinsic_height} the aspect ratio
         * should conform to those values, though that is not required.
         * 
         * If the `paintable` does not have a preferred aspect ratio,
         * it returns 0. Negative values are never returned.
         * @returns the intrinsic aspect ratio of `paintable` or 0 if none.
         */
        get_intrinsic_aspect_ratio(): number;

        /**
         * Gets the preferred height the `paintable` would like to be displayed at.
         * 
         * Consumers of this interface can use this to reserve enough space to draw
         * the paintable.
         * 
         * This is a purely informational value and does not in any way limit the
         * values that may be passed to {@link Gdk.Paintable.snapshot}.
         * 
         * If the `paintable` does not have a preferred height, it returns 0.
         * Negative values are never returned.
         * @returns the intrinsic height of `paintable` or 0 if none.
         */
        get_intrinsic_height(): number;

        /**
         * Gets the preferred width the `paintable` would like to be displayed at.
         * 
         * Consumers of this interface can use this to reserve enough space to draw
         * the paintable.
         * 
         * This is a purely informational value and does not in any way limit the
         * values that may be passed to {@link Gdk.Paintable.snapshot}.
         * 
         * If the `paintable` does not have a preferred width, it returns 0.
         * Negative values are never returned.
         * @returns the intrinsic width of `paintable` or 0 if none.
         */
        get_intrinsic_width(): number;

        /**
         * Called by implementations of {@link Gdk.Paintable} to invalidate their contents.
         * 
         * Unless the contents are invalidated, implementations must guarantee that
         * multiple calls of {@link Gdk.Paintable.snapshot} produce the same output.
         * 
         * This function will emit the `Gdk.Paintable::invalidate-contents`
         * signal.
         * 
         * If a `paintable` reports the {@link Gdk.PaintableFlags.STATIC_CONTENTS} flag,
         * it must not call this function.
         */
        invalidate_contents(): void;

        /**
         * Called by implementations of {@link Gdk.Paintable} to invalidate their size.
         * 
         * As long as the size is not invalidated, `paintable` must return the same
         * values for its intrinsic width, height and aspect ratio.
         * 
         * This function will emit the `Gdk.Paintable::invalidate-size`
         * signal.
         * 
         * If a `paintable` reports the {@link Gdk.PaintableFlags.STATIC_SIZE} flag,
         * it must not call this function.
         */
        invalidate_size(): void;

        /**
         * Snapshots the given paintable with the given `width` and `height`.
         * 
         * The paintable is drawn at the current (0,0) offset of the `snapshot`.
         * If `width` and `height` are not larger than zero, this function will
         * do nothing.
         * @param snapshot a {@link Gdk.Snapshot} to snapshot to
         * @param width width to snapshot in
         * @param height height to snapshot in
         */
        snapshot(snapshot: Snapshot, width: number, height: number): void;

        /**
         * Gets an immutable paintable for the current contents displayed by `paintable`.
         * 
         * This is useful when you want to retain the current state of an animation,
         * for example to take a screenshot of a running animation.
         * 
         * If the `paintable` is already immutable, it will return itself.
         * @virtual
         */
        vfunc_get_current_image(): Paintable;

        /**
         * Get flags for the paintable.
         * 
         * This is oftentimes useful for optimizations.
         * 
         * See {@link Gdk.PaintableFlags} for the flags and what they mean.
         * @virtual
         */
        vfunc_get_flags(): PaintableFlags;

        /**
         * Gets the preferred aspect ratio the `paintable` would like to be displayed at.
         * 
         * The aspect ratio is the width divided by the height, so a value of 0.5
         * means that the `paintable` prefers to be displayed twice as high as it
         * is wide. Consumers of this interface can use this to preserve aspect
         * ratio when displaying the paintable.
         * 
         * This is a purely informational value and does not in any way limit the
         * values that may be passed to {@link Gdk.Paintable.snapshot}.
         * 
         * Usually when a `paintable` returns nonzero values from
         * {@link Gdk.Paintable.get_intrinsic_width} and
         * {@link Gdk.Paintable.get_intrinsic_height} the aspect ratio
         * should conform to those values, though that is not required.
         * 
         * If the `paintable` does not have a preferred aspect ratio,
         * it returns 0. Negative values are never returned.
         * @virtual
         */
        vfunc_get_intrinsic_aspect_ratio(): number;

        /**
         * Gets the preferred height the `paintable` would like to be displayed at.
         * 
         * Consumers of this interface can use this to reserve enough space to draw
         * the paintable.
         * 
         * This is a purely informational value and does not in any way limit the
         * values that may be passed to {@link Gdk.Paintable.snapshot}.
         * 
         * If the `paintable` does not have a preferred height, it returns 0.
         * Negative values are never returned.
         * @virtual
         */
        vfunc_get_intrinsic_height(): number;

        /**
         * Gets the preferred width the `paintable` would like to be displayed at.
         * 
         * Consumers of this interface can use this to reserve enough space to draw
         * the paintable.
         * 
         * This is a purely informational value and does not in any way limit the
         * values that may be passed to {@link Gdk.Paintable.snapshot}.
         * 
         * If the `paintable` does not have a preferred width, it returns 0.
         * Negative values are never returned.
         * @virtual
         */
        vfunc_get_intrinsic_width(): number;

        /**
         * Snapshots the given paintable with the given `width` and `height`.
         * 
         * The paintable is drawn at the current (0,0) offset of the `snapshot`.
         * If `width` and `height` are not larger than zero, this function will
         * do nothing.
         * @param snapshot a {@link Gdk.Snapshot} to snapshot to
         * @param width width to snapshot in
         * @param height height to snapshot in
         * @virtual
         */
        vfunc_snapshot(snapshot: Snapshot, width: number, height: number): void;

        /**
         * Checks if two icons are equal.
         * @param icon2 pointer to the second {@link Gio.Icon}.
         * @returns `true` if `icon1` is equal to `icon2`. `false` otherwise.
         */
        equal(icon2: Gio.Icon | null): boolean;

        /**
         * Gets a hash for an icon.
         * @returns a `guint` containing a hash for the `icon`, suitable for   use in a {@link GLib.HashTable} or similar data structure.
         */
        hash(): number;

        /**
         * Serializes a {@link Gio.Icon} into a {@link GLib.Variant}. An equivalent {@link Gio.Icon} can be retrieved
         * back by calling `g_icon_deserialize()` on the returned value.
         * As serialization will avoid using raw icon data when possible, it only
         * makes sense to transfer the {@link GLib.Variant} between processes on the same machine,
         * (as opposed to over the network), and within the same file system namespace.
         * @returns a {@link GLib.Variant}, or `null` when serialization fails. The {@link GLib.Variant} will not be floating.
         * @since 2.38
         */
        serialize(): GLib.Variant | null;

        /**
         * Generates a textual representation of `icon` that can be used for
         * serialization such as when passing `icon` to a different process or
         * saving it to persistent storage. Use `g_icon_new_for_string()` to
         * get `icon` back from the returned string.
         * 
         * The encoding of the returned string is proprietary to {@link Gio.Icon} except
         * in the following two cases
         * 
         * - If `icon` is a {@link Gio.FileIcon}, the returned string is a native path
         *   (such as `/path/to/my icon.png`) without escaping
         *   if the {@link Gio.File} for `icon` is a native file.  If the file is not
         *   native, the returned string is the result of `g_file_get_uri()`
         *   (such as `sftp://path/to/my%20icon.png`).
         * 
         * - If `icon` is a {@link Gio.ThemedIcon} with exactly one name and no fallbacks,
         *   the encoding is simply the name (such as `network-server`).
         * @returns An allocated NUL-terminated UTF8 string or `null` if `icon` can't be serialized. Use `g_free()` to free.
         * @since 2.20
         */
        to_string(): string | null;

        /**
         * Checks if two icons are equal.
         * @param icon2 pointer to the second {@link Gio.Icon}.
         * @virtual
         */
        vfunc_equal(icon2: Gio.Icon | null): boolean;

        /**
         * Gets a hash for an icon.
         * @virtual
         */
        vfunc_hash(): number;

        /**
         * Serializes a {@link Gio.Icon} into a {@link GLib.Variant}. An equivalent {@link Gio.Icon} can be retrieved
         * back by calling `g_icon_deserialize()` on the returned value.
         * As serialization will avoid using raw icon data when possible, it only
         * makes sense to transfer the {@link GLib.Variant} between processes on the same machine,
         * (as opposed to over the network), and within the same file system namespace.
         * @since 2.38
         * @virtual
         */
        vfunc_serialize(): GLib.Variant | null;

        /**
         * Serializes the `icon` into string tokens.
         * This is can be invoked when `g_icon_new_for_string()` is called.
         * @since 2.20
         * @virtual
         */
        vfunc_to_tokens(): [boolean, string[], number];

        /**
         * Loads a loadable icon. For the asynchronous version of this function,
         * see `g_loadable_icon_load_async()`.
         * @param size an integer.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @returns a {@link Gio.InputStream} to read the icon from.
         * @throws GLib.Error
         */
        load(size: number, cancellable: Gio.Cancellable | null): [Gio.InputStream, string];

        /**
         * Loads an icon asynchronously. To finish this function, see
         * `g_loadable_icon_load_finish()`. For the synchronous, blocking
         * version of this function, see `g_loadable_icon_load()`.
         * @param size an integer.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         */
        load_async(size: number, cancellable: Gio.Cancellable | null): globalThis.Promise<[Gio.InputStream, string]>;

        /**
         * Loads an icon asynchronously. To finish this function, see
         * `g_loadable_icon_load_finish()`. For the synchronous, blocking
         * version of this function, see `g_loadable_icon_load()`.
         * @param size an integer.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback}   to call when the request is satisfied
         */
        load_async(size: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Loads an icon asynchronously. To finish this function, see
         * `g_loadable_icon_load_finish()`. For the synchronous, blocking
         * version of this function, see `g_loadable_icon_load()`.
         * @param size an integer.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback}   to call when the request is satisfied
         */
        load_async(size: number, cancellable: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): globalThis.Promise<[Gio.InputStream, string]> | void;

        /**
         * Finishes an asynchronous icon load started in `g_loadable_icon_load_async()`.
         * @param res a {@link Gio.AsyncResult}.
         * @returns a {@link Gio.InputStream} to read the icon from.
         * @throws GLib.Error
         */
        load_finish(res: Gio.AsyncResult): [Gio.InputStream, string];

        /**
         * Loads a loadable icon. For the asynchronous version of this function,
         * see `g_loadable_icon_load_async()`.
         * @param size an integer.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @virtual
         */
        vfunc_load(size: number, cancellable: Gio.Cancellable | null): [Gio.InputStream, string];

        /**
         * Loads an icon asynchronously. To finish this function, see
         * `g_loadable_icon_load_finish()`. For the synchronous, blocking
         * version of this function, see `g_loadable_icon_load()`.
         * @param size an integer.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback}   to call when the request is satisfied
         * @virtual
         */
        vfunc_load_async(size: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void;

        /**
         * Finishes an asynchronous icon load started in `g_loadable_icon_load_async()`.
         * @param res a {@link Gio.AsyncResult}.
         * @virtual
         */
        vfunc_load_finish(res: Gio.AsyncResult): [Gio.InputStream, string];
    }


    namespace TouchEvent {
        // Signal signatures
        interface SignalSignatures extends Event.SignalSignatures {}
    }

    /**
     * An event related to a touch-based device.
     * @gir-type Class
     */
    class TouchEvent extends Event {
        static $gtype: GObject.GType<TouchEvent>;

        // Constructors
        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof TouchEvent.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TouchEvent.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof TouchEvent.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TouchEvent.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof TouchEvent.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<TouchEvent.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Extracts whether a touch event is emulating a pointer event.
         * @returns `true` if `event` is emulating
         */
        get_emulating_pointer(): boolean;
    }


    namespace TouchpadEvent {
        // Signal signatures
        interface SignalSignatures extends Event.SignalSignatures {}
    }

    /**
     * An event related to a gesture on a touchpad device.
     * 
     * Unlike touchscreens, where the windowing system sends basic
     * sequences of begin, update, end events, and leaves gesture
     * recognition to the clients, touchpad gestures are typically
     * processed by the system, resulting in these events.
     * @gir-type Class
     */
    class TouchpadEvent extends Event {
        static $gtype: GObject.GType<TouchpadEvent>;

        // Constructors
        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof TouchpadEvent.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TouchpadEvent.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof TouchpadEvent.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TouchpadEvent.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof TouchpadEvent.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<TouchpadEvent.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Extracts delta information from a touchpad event.
         */
        get_deltas(): [number, number];

        /**
         * Extracts the touchpad gesture phase from a touchpad event.
         * @returns the gesture phase of `event`
         */
        get_gesture_phase(): TouchpadGesturePhase;

        /**
         * Extracts the number of fingers from a touchpad event.
         * @returns the number of fingers for `event`
         */
        get_n_fingers(): number;

        /**
         * Extracts the angle delta from a touchpad pinch event.
         * @returns the angle delta of `event`
         */
        get_pinch_angle_delta(): number;

        /**
         * Extracts the scale from a touchpad pinch event.
         * @returns the scale of `event`
         */
        get_pinch_scale(): number;
    }


    namespace VulkanContext {
        // Signal signatures
        interface SignalSignatures extends DrawContext.SignalSignatures {
            /**
             * Emitted when the images managed by this context have changed.
             * 
             * Usually this means that the swapchain had to be recreated,
             * for example in response to a change of the surface size.
             * @signal
             * @run-last
             */
            "images-updated": () => void;
            "notify::display": (pspec: GObject.ParamSpec) => void;
            "notify::surface": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends DrawContext.ConstructorProps {}
    }

    /**
     * Represents the platform-specific Vulkan draw context.
     * 
     * {@link Gdk.VulkanContext}s are created for a surface using
     * {@link Gdk.Surface.create_vulkan_context}, and the context will match
     * the characteristics of the surface.
     * 
     * Support for {@link Gdk.VulkanContext} is platform-specific and context creation
     * can fail, returning `null` context.
     * @gir-type Class
     * @deprecated since 4.14: GTK does not expose any Vulkan internals. This   struct is a leftover that was accidentally exposed.
     */
    abstract class VulkanContext extends DrawContext {
        static $gtype: GObject.GType<VulkanContext>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: VulkanContext.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<VulkanContext.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof VulkanContext.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VulkanContext.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof VulkanContext.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, VulkanContext.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof VulkanContext.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<VulkanContext.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    /**
     * @gir-type Alias
     */
    type AppLaunchContextClass = typeof AppLaunchContext;

    /**
     * @gir-type Alias
     */
    type CairoContextClass = typeof CairoContext;

    /**
     * @gir-type Alias
     */
    type CicpParamsClass = typeof CicpParams;

    /**
     * @gir-type Alias
     */
    type ClipboardClass = typeof Clipboard;

    /**
     * Provides information to interpret colors and pixels in a variety of ways.
     * 
     * They are also known as
     * [*color spaces*](https://en.wikipedia.org/wiki/Color_space).
     * 
     * Crucially, GTK knows how to convert colors from one color
     * state to another.
     * 
     * {@link Gdk.ColorState} objects are immutable and therefore threadsafe.
     * @gir-type Struct
     * @since 4.16
     */
    abstract class ColorState {
        static $gtype: GObject.GType<ColorState>;

        // Static methods
        /**
         * Returns the color state object representing the oklab color space.
         * 
         * This is a perceptually uniform color state.
         * @since 4.18
         */
        static get_oklab(): ColorState;

        /**
         * Returns the color state object representing the oklch color space.
         * 
         * This is the polar variant of oklab, in which the hue is encoded as
         * a polar coordinate.
         * @since 4.18
         */
        static get_oklch(): ColorState;

        /**
         * Returns the color state object representing the linear rec2100 color space.
         * 
         * This color state uses the primaries defined by BT.2020-2 and BT.2100-0 and a linear
         * transfer function.
         * 
         * It is equivalent to the [Cicp](https://docs.gtk.org/gdk4/class.CicpParams.html) tuple 9/8/0/1.
         * 
         * See e.g. [the CSS HDR Module](https://drafts.csswg.org/css-color-hdr/#valdef-color-rec2100-linear)
         * for details about this colorstate.
         * @since 4.16
         */
        static get_rec2100_linear(): ColorState;

        /**
         * Returns the color state object representing the rec2100-pq color space.
         * 
         * This color state uses the primaries defined by BT.2020-2 and BT.2100-0 and the transfer
         * function defined by SMPTE ST 2084 and BT.2100-2.
         * 
         * It is equivalent to the [Cicp](https://docs.gtk.org/gdk4/class.CicpParams.html) tuple 9/16/0/1.
         * 
         * See e.g. [the CSS HDR Module](https://drafts.csswg.org/css-color-hdr/#valdef-color-rec2100-pq)
         * for details about this colorstate.
         * @since 4.16
         */
        static get_rec2100_pq(): ColorState;

        /**
         * Returns the color state object representing the sRGB color space.
         * 
         * This color state uses the primaries defined by BT.709-6 and the transfer function
         * defined by IEC 61966-2-1.
         * 
         * It is equivalent to the [Cicp](https://docs.gtk.org/gdk4/class.CicpParams.html) tuple 1/13/0/1.
         * 
         * See e.g. [the CSS Color Module](https://www.w3.org/TR/css-color-4/#predefined-sRGB)
         * for details about this colorstate.
         * @since 4.16
         */
        static get_srgb(): ColorState;

        /**
         * Returns the color state object representing the linearized sRGB color space.
         * 
         * This color state uses the primaries defined by BT.709-6 and a linear transfer function.
         * 
         * It is equivalent to the [Cicp](https://docs.gtk.org/gdk4/class.CicpParams.html) tuple 1/8/0/1.
         * 
         * See e.g. [the CSS Color Module](https://www.w3.org/TR/css-color-4/#predefined-sRGB-linear)
         * for details about this colorstate.
         * @since 4.16
         */
        static get_srgb_linear(): ColorState;

        // Methods
        /**
         * Create a {@link Gdk.CicpParams} representing the colorstate.
         * 
         * It is not guaranteed that every {@link Gdk.ColorState} can be
         * represented with Cicp parameters. If that is the case,
         * this function returns `NULL`.
         * @returns A new {@link Gdk.CicpParams}
         * @since 4.16
         */
        create_cicp_params(): CicpParams | null;

        /**
         * Compares two `GdkColorStates` for equality.
         * 
         * Note that this function is not guaranteed to be perfect and two objects
         * describing the same color state may compare not equal. However, different
         * color states will never compare equal.
         * @param other another `GdkColorStatee`
         * @returns `true` if the two color states compare equal
         * @since 4.16
         */
        equal(other: ColorState): boolean;

        /**
         * Compares two `GdkColorStates` for equivalence.
         * 
         * Two objects that represent the same color state should be equivalent,
         * even though they may not be equal in the sense of {@link Gdk.ColorState.equal}.
         * @param other another `GdkColorStatee`
         * @returns `true` if the two color states are equivalent
         * @since 4.20
         */
        equivalent(other: ColorState): boolean;

        /**
         * Increase the reference count of `self`.
         * @returns the object that was passed in
         * @since 4.16
         */
        ref(): ColorState;

        /**
         * Decrease the reference count of `self`.
         * 
         * Unless `self` is static, it will be freed
         * when the reference count reaches zero.
         * @since 4.16
         */
        unref(): void;
    }


    /**
     * @gir-type Alias
     */
    type ContentDeserializerClass = typeof ContentDeserializer;

    /**
     * Used to advertise and negotiate the format of content.
     * 
     * You will encounter {@link Gdk.ContentFormats} when interacting with objects
     * controlling operations that pass data between different widgets, window
     * or application, like {@link Gdk.Drag}, {@link Gdk.Drop},
     * {@link Gdk.Clipboard} or {@link Gdk.ContentProvider}.
     * 
     * GDK supports content in 2 forms: {@link GObject.GType} and mime type.
     * Using `GTypes` is meant only for in-process content transfers. Mime types
     * are meant to be used for data passing both in-process and out-of-process.
     * The details of how data is passed is described in the documentation of
     * the actual implementations. To transform between the two forms,
     * {@link Gdk.ContentSerializer} and {@link Gdk.ContentDeserializer} are used.
     * 
     * A {@link Gdk.ContentFormats} describes a set of possible formats content can be
     * exchanged in. It is assumed that this set is ordered. `GTypes` are more
     * important than mime types. Order between different `GTypes` or mime types
     * is the order they were added in, most important first. Functions that
     * care about order, such as {@link Gdk.ContentFormats.union}, will describe
     * in their documentation how they interpret that order, though in general the
     * order of the first argument is considered the primary order of the result,
     * followed by the order of further arguments.
     * 
     * For debugging purposes, the function {@link Gdk.ContentFormats.to_string}
     * exists. It will print a comma-separated list of formats from most important
     * to least important.
     * 
     * {@link Gdk.ContentFormats} is an immutable struct. After creation, you cannot change
     * the types it represents. Instead, new {@link Gdk.ContentFormats} have to be created.
     * The {@link Gdk.ContentFormatsBuilder} structure is meant to help in this
     * endeavor.
     * @gir-type Struct
     */
    class ContentFormats {
        static $gtype: GObject.GType<ContentFormats>;

        // Constructors
        constructor(mime_types: string[] | null);

        static ["new"](mime_types: string[] | null): ContentFormats;

        static new_for_gtype(type: GObject.GType): ContentFormats;

        // Static methods
        /**
         * Parses the given `string` into {@link Gdk.ContentFormats} and
         * returns the formats.
         * 
         * Strings printed via {@link Gdk.ContentFormats.to_string}
         * can be read in again successfully using this function.
         * 
         * If `string` does not describe valid content formats, `null`
         * is returned.
         * @param string the string to parse
         * @since 4.4
         */
        static parse(string: string): ContentFormats | null;

        // Methods
        /**
         * Checks if a given {@link GObject.GType} is part of the given `formats`.
         * @param type the {@link GObject.GType} to search for
         * @returns `true` if the {@link GObject.GType} was found
         */
        contain_gtype(type: GObject.GType): boolean;

        /**
         * Checks if a given mime type is part of the given `formats`.
         * @param mime_type the mime type to search for
         * @returns `true` if the mime_type was found
         */
        contain_mime_type(mime_type: string): boolean;

        /**
         * Gets the {@link GObject.GType}s included in `formats`.
         * 
         * Note that `formats` may not contain any {@link GObject.GType}s, in particular when
         * they are empty. In that case `null` will be returned.
         * @returns `G_TYPE_INVALID`-terminated array of types included in `formats`
         */
        get_gtypes(): GObject.GType[] | null;

        /**
         * Gets the mime types included in `formats`.
         * 
         * Note that `formats` may not contain any mime types, in particular
         * when they are empty. In that case `null` will be returned.
         * @returns `null`-terminated array of interned strings of mime types included   in `formats`
         */
        get_mime_types(): string[] | null;

        /**
         * Returns whether the content formats contain any formats.
         * @returns true if `formats` contains no mime types and no GTypes
         * @since 4.18
         */
        is_empty(): boolean;

        /**
         * Checks if `first` and `second` have any matching formats.
         * @param second the {@link Gdk.ContentFormats} to intersect with
         * @returns `true` if a matching format was found.
         */
        match(second: ContentFormats): boolean;

        /**
         * Finds the first {@link GObject.GType} from `first` that is also contained
         * in `second`.
         * 
         * If no matching {@link GObject.GType} is found, `G_TYPE_INVALID` is returned.
         * @param second the {@link Gdk.ContentFormats} to intersect with
         * @returns The first common {@link GObject.GType} or `G_TYPE_INVALID` if none.
         */
        match_gtype(second: ContentFormats): GObject.GType;

        /**
         * Finds the first mime type from `first` that is also contained
         * in `second`.
         * 
         * If no matching mime type is found, `null` is returned.
         * @param second the {@link Gdk.ContentFormats} to intersect with
         * @returns The first common mime type or `null` if none
         */
        match_mime_type(second: ContentFormats): string | null;

        /**
         * Prints the given `formats` into a string for human consumption.
         * 
         * The result of this function can later be parsed with
         * {@link Gdk.ContentFormats.parse}.
         * @param string a {@link GLib.String} to print into
         */
        print(string: GLib.String): void;

        /**
         * Increases the reference count of a {@link Gdk.ContentFormats} by one.
         * @returns the passed in {@link Gdk.ContentFormats}.
         */
        ref(): ContentFormats;

        /**
         * Prints the given `formats` into a human-readable string.
         * 
         * The resulting string can be parsed with {@link Gdk.ContentFormats.parse}.
         * 
         * This is a small wrapper around {@link Gdk.ContentFormats.print}
         * to help when debugging.
         * @returns a new string
         */
        to_string(): string;

        /**
         * Append all missing types from `second` to `first`, in the order
         * they had in `second`.
         * @param second the {@link Gdk.ContentFormats} to merge from
         * @returns a new {@link Gdk.ContentFormats}
         */
        union(second: ContentFormats): ContentFormats;

        /**
         * Add GTypes for mime types in `formats` for which deserializers are
         * registered.
         * @returns a new {@link Gdk.ContentFormats}
         */
        union_deserialize_gtypes(): ContentFormats;

        /**
         * Add mime types for GTypes in `formats` for which deserializers are
         * registered.
         * @returns a new {@link Gdk.ContentFormats}
         */
        union_deserialize_mime_types(): ContentFormats;

        /**
         * Add GTypes for the mime types in `formats` for which serializers are
         * registered.
         * @returns a new {@link Gdk.ContentFormats}
         */
        union_serialize_gtypes(): ContentFormats;

        /**
         * Add mime types for GTypes in `formats` for which serializers are
         * registered.
         * @returns a new {@link Gdk.ContentFormats}
         */
        union_serialize_mime_types(): ContentFormats;

        /**
         * Decreases the reference count of a {@link Gdk.ContentFormats} by one.
         * 
         * If the resulting reference count is zero, frees the formats.
         */
        unref(): void;
    }


    /**
     * Creates {@link Gdk.ContentFormats} objects.
     * @gir-type Struct
     */
    class ContentFormatsBuilder {
        static $gtype: GObject.GType<ContentFormatsBuilder>;

        // Constructors
        constructor(properties?: Partial<{}>);

        static ["new"](): ContentFormatsBuilder;

        // Methods
        /**
         * Appends all formats from `formats` to `builder`, skipping those that
         * already exist.
         * @param formats the formats to add
         */
        add_formats(formats: ContentFormats): void;

        /**
         * Appends `type` to `builder` if it has not already been added.
         * @param type a {@link GObject.GType}
         */
        add_gtype(type: GObject.GType): void;

        /**
         * Appends `mime_type` to `builder` if it has not already been added.
         * @param mime_type a mime type
         */
        add_mime_type(mime_type: string): void;

        /**
         * Acquires a reference on the given `builder`.
         * 
         * This function is intended primarily for bindings.
         * {@link Gdk.ContentFormatsBuilder} objects should not be kept around.
         * @returns the given {@link Gdk.ContentFormatsBuilder}   with its reference count increased
         */
        ref(): ContentFormatsBuilder;

        /**
         * Creates a new {@link Gdk.ContentFormats} from the given `builder`.
         * 
         * The given {@link Gdk.ContentFormatsBuilder} is reset once this function returns;
         * you cannot call this function multiple times on the same `builder` instance.
         * 
         * This function is intended primarily for bindings. C code should use
         * {@link Gdk.ContentFormatsBuilder.free_to_formats}.
         * @returns the newly created {@link Gdk.ContentFormats}   with all the formats added to `builder`
         */
        to_formats(): ContentFormats;

        /**
         * Releases a reference on the given `builder`.
         */
        unref(): void;
    }


    /**
     * @gir-type Alias
     */
    type ContentProviderClass = typeof ContentProvider;

    /**
     * @gir-type Alias
     */
    type ContentSerializerClass = typeof ContentSerializer;

    /**
     * @gir-type Alias
     */
    type CursorClass = typeof Cursor;

    /**
     * @gir-type Alias
     */
    type DeviceClass = typeof Device;

    /**
     * @gir-type Struct
     */
    abstract class DevicePadClass {
        static $gtype: GObject.GType<DevicePadClass>;
    }


    /**
     * @gir-type Alias
     */
    type DevicePadInterface = typeof DevicePad;

    /**
     * @gir-type Alias
     */
    type DeviceToolClass = typeof DeviceTool;

    /**
     * @gir-type Alias
     */
    type DisplayClass = typeof Display;

    /**
     * @gir-type Alias
     */
    type DisplayManagerClass = typeof DisplayManager;

    /**
     * Provides information about supported DMA buffer formats.
     * 
     * You can query whether a given format is supported with
     * {@link Gdk.DmabufFormats.contains} and you can iterate
     * over the list of all supported formats with
     * {@link Gdk.DmabufFormats.get_n_formats} and
     * {@link Gdk.DmabufFormats.get_format}.
     * 
     * The list of supported formats is sorted by preference,
     * with the best formats coming first.
     * 
     * The list may contains (format, modifier) pairs where the modifier
     * is `DMA_FORMAT_MOD_INVALID`, indicating that **_implicit modifiers_**
     * may be used with this format.
     * 
     * See {@link Gdk.DmabufTextureBuilder} for more information
     * about DMA buffers.
     * 
     * Note that DMA buffers only exist on Linux.
     * @gir-type Struct
     * @since 4.14
     */
    abstract class DmabufFormats {
        static $gtype: GObject.GType<DmabufFormats>;

        // Methods
        /**
         * Returns whether a given format is contained in `formats`.
         * @param fourcc a format code
         * @param modifier a format modifier
         * @returns `TRUE` if the format specified by the arguments   is part of `formats`
         * @since 4.14
         */
        contains(fourcc: number, modifier: bigint | number): boolean;

        /**
         * Returns whether `formats1` and `formats2` contain the
         * same dmabuf formats, in the same order.
         * @param formats2 another {@link Gdk.DmabufFormats}
         * @returns `TRUE` if `formats1` and `formats2` are equal
         * @since 4.14
         */
        equal(formats2: DmabufFormats | null): boolean;

        /**
         * Gets the fourcc code and modifier for a format
         * that is contained in `formats`.
         * @param idx the index of the format to return
         * @since 4.14
         */
        get_format(idx: bigint | number): [number, number];

        /**
         * Returns the number of formats that the `formats` object
         * contains.
         * 
         * Note that DMA buffers are a Linux concept, so on other
         * platforms, {@link Gdk.DmabufFormats.get_n_formats} will
         * always return zero.
         * @returns the number of formats
         * @since 4.14
         */
        get_n_formats(): number;

        /**
         * Increases the reference count of `formats`.
         * @returns the passed-in object
         * @since 4.14
         */
        ref(): DmabufFormats;

        /**
         * Decreases the reference count of `formats`.
         * 
         * When the reference count reaches zero,
         * the object is freed.
         * @since 4.14
         */
        unref(): void;
    }


    /**
     * @gir-type Alias
     */
    type DmabufTextureBuilderClass = typeof DmabufTextureBuilder;

    /**
     * @gir-type Alias
     */
    type DmabufTextureClass = typeof DmabufTexture;

    /**
     * @gir-type Alias
     */
    type DragClass = typeof Drag;

    /**
     * @gir-type Alias
     */
    type DragSurfaceInterface = typeof DragSurface;

    /**
     * Contains information that is useful to compute the size of a drag surface.
     * @gir-type Struct
     * @since 4.12
     */
    abstract class DragSurfaceSize {
        static $gtype: GObject.GType<DragSurfaceSize>;

        // Methods
        /**
         * Sets the size the drag surface prefers to be resized to.
         * @param width the width
         * @param height the height
         * @since 4.12
         */
        set_size(width: number, height: number): void;
    }


    /**
     * @gir-type Alias
     */
    type DrawContextClass = typeof DrawContext;

    /**
     * @gir-type Alias
     */
    type DropClass = typeof Drop;

    /**
     * An opaque type representing a sequence of related events.
     * @gir-type Struct
     */
    abstract class EventSequence {
        static $gtype: GObject.GType<EventSequence>;
    }


    /**
     * An opaque type representing a list of files.
     * @gir-type Struct
     * @since 4.6
     */
    class FileList {
        static $gtype: GObject.GType<FileList>;

        // Constructors
        constructor(files: Gio.File[]);

        static new_from_array(files: Gio.File[]): FileList;

        static new_from_list(files: Gio.File[]): FileList;

        // Methods
        /**
         * Retrieves the list of files inside a {@link Gdk.FileList}.
         * 
         * This function is meant for language bindings.
         * @returns the files inside the list
         * @since 4.6
         */
        get_files(): Gio.File[];
    }


    /**
     * @gir-type Alias
     */
    type FrameClockClass = typeof FrameClock;

    /**
     * Holds timing information for a single frame of the application’s displays.
     * 
     * To retrieve {@link Gdk.FrameTimings} objects, use {@link Gdk.FrameClock.get_timings}
     * or {@link Gdk.FrameClock.get_current_timings}. The information in
     * {@link Gdk.FrameTimings} is useful for precise synchronization of video with
     * the event or audio streams, and for measuring quality metrics for the
     * application’s display, such as latency and jitter.
     * @gir-type Struct
     */
    abstract class FrameTimings {
        static $gtype: GObject.GType<FrameTimings>;

        // Methods
        /**
         * Returns whether `timings` are complete.
         * 
         * The timing information in a {@link Gdk.FrameTimings} is filled in
         * incrementally as the frame as drawn and passed off to the
         * window system for processing and display to the user. The
         * accessor functions for {@link Gdk.FrameTimings} can return 0 to
         * indicate an unavailable value for two reasons: either because
         * the information is not yet available, or because it isn't
         * available at all.
         * 
         * Once this function returns `true` for a frame, you can be
         * certain that no further values will become available and be
         * stored in the {@link Gdk.FrameTimings}.
         * @returns `true` if all information that will be available   for the frame has been filled in.
         */
        get_complete(): boolean;

        /**
         * Gets the frame counter value of the {@link Gdk.FrameClock} when
         * this frame was drawn.
         * @returns the frame counter value for this frame
         */
        get_frame_counter(): number;

        /**
         * Returns the frame time for the frame.
         * 
         * This is the time value that is typically used to time
         * animations for the frame. See {@link Gdk.FrameClock.get_frame_time}.
         * @returns the frame time for the frame, in the timescale  of `g_get_monotonic_time()`
         */
        get_frame_time(): number;

        /**
         * Gets the predicted time at which this frame will be displayed.
         * 
         * Although no predicted time may be available, if one is available,
         * it will be available while the frame is being generated, in contrast
         * to {@link Gdk.FrameTimings.get_presentation_time}, which is only
         * available after the frame has been presented.
         * 
         * In general, if you are simply animating, you should use
         * {@link Gdk.FrameClock.get_frame_time} rather than this function,
         * but this function is useful for applications that want exact control
         * over latency. For example, a movie player may want this information
         * for Audio/Video synchronization.
         * @returns The predicted time at which the frame will be presented,   in the timescale of `g_get_monotonic_time()`, or 0 if no predicted   presentation time is available.
         */
        get_predicted_presentation_time(): number;

        /**
         * Reurns the presentation time.
         * 
         * This is the time at which the frame became visible to the user.
         * @returns the time the frame was displayed to the user, in the   timescale of `g_get_monotonic_time()`, or 0 if no presentation   time is available. See {@link Gdk.FrameTimings.get_complete}
         */
        get_presentation_time(): number;

        /**
         * Gets the natural interval between presentation times for
         * the display that this frame was displayed on.
         * 
         * Frame presentation usually happens during the “vertical
         * blanking interval”.
         * @returns the refresh interval of the display, in microseconds,   or 0 if the refresh interval is not available.   See {@link Gdk.FrameTimings.get_complete}.
         */
        get_refresh_interval(): number;

        /**
         * Gets the result of the frame cycle that recorded these timings.
         * 
         * The timing information in a {@link Gdk.FrameTimings} is filled in
         * incrementally as the frame as drawn and passed off to the
         * window system for processing and display to the user. The
         * accessor functions for {@link Gdk.FrameTimings} can return 0 to
         * indicate an unavailable value for two reasons: either because
         * the information is not yet available, or because it isn't
         * available at all. Looking at the result of the timings gives
         * an explanation for why a value is not available.
         * @returns The result of the frame these timings have been recorded for.
         * @since 4.24
         */
        get_result(): FrameResult;

        /**
         * Increases the reference count of `timings`.
         * @returns `timings`
         */
        ref(): FrameTimings;

        /**
         * Decreases the reference count of `timings`.
         * 
         * If `timings` is no longer referenced, it will be freed.
         */
        unref(): void;
    }


    /**
     * @gir-type Alias
     */
    type GLContextClass = typeof GLContext;

    /**
     * @gir-type Alias
     */
    type GLTextureBuilderClass = typeof GLTextureBuilder;

    /**
     * @gir-type Alias
     */
    type GLTextureClass = typeof GLTexture;

    /**
     * Represents a hardware key that can be mapped to a keyval.
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
    type MemoryTextureBuilderClass = typeof MemoryTextureBuilder;

    /**
     * @gir-type Alias
     */
    type MemoryTextureClass = typeof MemoryTexture;

    /**
     * @gir-type Alias
     */
    type MonitorClass = typeof Monitor;

    /**
     * @gir-type Alias
     */
    type PaintableInterface = typeof Paintable;

    /**
     * @gir-type Alias
     */
    type PopupInterface = typeof Popup;

    /**
     * Contains information that is necessary position a {@link Gdk.Popup}
     * relative to its parent.
     * 
     * The positioning requires a negotiation with the windowing system,
     * since it depends on external constraints, such as the position of
     * the parent surface, and the screen dimensions.
     * 
     * The basic ingredients are a rectangle on the parent surface,
     * and the anchor on both that rectangle and the popup. The anchors
     * specify a side or corner to place next to each other.
     * 
     * ![Popup anchors](popup-anchors.png)
     * 
     * For cases where placing the anchors next to each other would make
     * the popup extend offscreen, the layout includes some hints for how
     * to resolve this problem. The hints may suggest to flip the anchor
     * position to the other side, or to 'slide' the popup along a side,
     * or to resize it.
     * 
     * ![Flipping popups](popup-flip.png)
     * 
     * ![Sliding popups](popup-slide.png)
     * 
     * These hints may be combined.
     * 
     * Ultimatively, it is up to the windowing system to determine the position
     * and size of the popup. You can learn about the result by calling
     * {@link Gdk.Popup.get_position_x}, {@link Gdk.Popup.get_position_y},
     * {@link Gdk.Popup.get_rect_anchor} and {@link Gdk.Popup.get_surface_anchor}
     * after the popup has been presented. This can be used to adjust the rendering.
     * For example, [GtkPopover](../gtk4/class.Popover.html) changes its arrow position
     * accordingly. But you have to be careful avoid changing the size of the popover,
     * or it has to be presented again.
     * @gir-type Struct
     */
    class PopupLayout {
        static $gtype: GObject.GType<PopupLayout>;

        // Constructors
        constructor(anchor_rect: Rectangle, rect_anchor: Gravity, surface_anchor: Gravity);

        static ["new"](anchor_rect: Rectangle, rect_anchor: Gravity, surface_anchor: Gravity): PopupLayout;

        // Methods
        /**
         * Makes a copy of `layout`.
         * @returns a copy of `layout`.
         */
        copy(): PopupLayout;

        /**
         * Check whether `layout` and `other` has identical layout properties.
         * @param other another popup layout
         * @returns true if `layout` and `other` have identical layout properties,   otherwise false.
         */
        equal(other: PopupLayout): boolean;

        /**
         * Get the anchor hints.
         * @returns the anchor hints
         */
        get_anchor_hints(): AnchorHints;

        /**
         * Get the anchor rectangle.
         * @returns The anchor rectangle
         */
        get_anchor_rect(): Rectangle;

        /**
         * Retrieves the offset for the anchor rectangle.
         */
        get_offset(): [number, number];

        /**
         * Returns the anchor position on the anchor rectangle.
         * @returns the anchor on the anchor rectangle.
         */
        get_rect_anchor(): Gravity;

        /**
         * Obtains the shadow widths of this layout.
         * @since 4.2
         */
        get_shadow_width(): [number, number, number, number];

        /**
         * Returns the anchor position on the popup surface.
         * @returns the anchor on the popup surface.
         */
        get_surface_anchor(): Gravity;

        /**
         * Increases the reference count of `value`.
         * @returns the same `layout`
         */
        ref(): PopupLayout;

        /**
         * Set new anchor hints.
         * 
         * The set `anchor_hints` determines how `surface` will be moved
         * if the anchor points cause it to move off-screen. For example,
         * `GDK_ANCHOR_FLIP_X` will replace `GDK_GRAVITY_NORTH_WEST` with
         * `GDK_GRAVITY_NORTH_EAST` and vice versa if `surface` extends
         * beyond the left or right edges of the monitor.
         * @param anchor_hints the new anchor hints
         */
        set_anchor_hints(anchor_hints: AnchorHints): void;

        /**
         * Set the anchor rectangle.
         * @param anchor_rect the new anchor rectangle
         */
        set_anchor_rect(anchor_rect: Rectangle): void;

        /**
         * Offset the position of the anchor rectangle with the given delta.
         * @param dx x delta to offset the anchor rectangle with
         * @param dy y delta to offset the anchor rectangle with
         */
        set_offset(dx: number, dy: number): void;

        /**
         * Set the anchor on the anchor rectangle.
         * @param anchor the new rect anchor
         */
        set_rect_anchor(anchor: Gravity): void;

        /**
         * Sets the shadow width of the popup.
         * 
         * The shadow width corresponds to the part of the computed
         * surface size that would consist of the shadow margin
         * surrounding the window, would there be any.
         * @param left width of the left part of the shadow
         * @param right width of the right part of the shadow
         * @param top height of the top part of the shadow
         * @param bottom height of the bottom part of the shadow
         * @since 4.2
         */
        set_shadow_width(left: number, right: number, top: number, bottom: number): void;

        /**
         * Set the anchor on the popup surface.
         * @param anchor the new popup surface anchor
         */
        set_surface_anchor(anchor: Gravity): void;

        /**
         * Decreases the reference count of `value`.
         */
        unref(): void;
    }


    /**
     * Represents a color, in a way that is compatible with cairo’s notion of color.
     * 
     * {@link Gdk.RGBA} is a convenient way to pass colors around. It’s based on
     * cairo’s way to deal with colors and mirrors its behavior. All values
     * are in the range from 0.0 to 1.0 inclusive. So the color
     * (0.0, 0.0, 0.0, 0.0) represents transparent black and
     * (1.0, 1.0, 1.0, 1.0) is opaque white. Other values will
     * be clamped to this range when drawing.
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
         * The result must be freed through {@link Gdk.RGBA.free}.
         * @returns A newly allocated {@link Gdk.RGBA}, with the same contents as `rgba`
         */
        copy(): RGBA;

        /**
         * Compares two {@link Gdk.RGBA} colors.
         * @param p2 another {@link Gdk.RGBA}
         * @returns `true` if the two colors compare equal
         */
        equal(p2: RGBA): boolean;

        /**
         * Frees a {@link Gdk.RGBA}.
         */
        free(): void;

        /**
         * A hash function suitable for using for a hash
         * table that stores {@link Gdk.RGBA}s.
         * @returns The hash value for `p`
         */
        hash(): number;

        /**
         * Checks if an `rgba` value is transparent.
         * 
         * That is, drawing with the value would not produce any change.
         * @returns `true` if the `rgba` is clear
         */
        is_clear(): boolean;

        /**
         * Checks if an `rgba` value is opaque.
         * 
         * That is, drawing with the value will not retain any results
         * from previous contents.
         * @returns `true` if the `rgba` is opaque
         */
        is_opaque(): boolean;

        /**
         * Parses a textual representation of a color.
         * 
         * The string can be either one of:
         * 
         * - A standard name (Taken from the CSS specification).
         * - A hexadecimal value in the form “\#rgb”, “\#rrggbb”,
         *   “\#rrrgggbbb” or ”\#rrrrggggbbbb”
         * - A hexadecimal value in the form “\#rgba”, “\#rrggbbaa”,
         *   or ”\#rrrrggggbbbbaaaa”
         * - A RGB color in the form “rgb(r,g,b)” (In this case the color
         *   will have full opacity)
         * - A RGBA color in the form “rgba(r,g,b,a)”
         * - A HSL color in the form “hsl(h,s,l)”
         * - A HSLA color in the form “hsla(h,s,l,a)”
         * 
         * Where “r”, “g”, “b” and “a” are respectively the red, green,
         * blue and alpha color values. In the last two cases, “r”, “g”,
         * and “b” are either integers in the range 0 to 255 or percentage
         * values in the range 0% to 100%, and a is a floating point value
         * in the range 0 to 1. The range for “h” is 0 to 360, and
         * “s”, “l” can be either numbers in the range 0 to 100 or
         * percentages.
         * @param spec the string specifying the color
         * @returns `true` if the parsing succeeded
         */
        parse(spec: string): boolean;

        /**
         * Appends a representation of `rgba` to `string`.
         * @param string the string to print to
         * @returns A newly allocated text string
         * @since 4.22
         */
        print(string: GLib.String): GLib.String;

        /**
         * Returns a textual specification of `rgba` in the form
         * `rgb(r,g,b)` or `rgba(r,g,b,a)`, where “r”, “g”, “b” and
         * “a” represent the red, green, blue and alpha values
         * respectively. “r”, “g”, and “b” are represented as integers
         * in the range 0 to 255, and “a” is represented as a floating
         * point value in the range 0 to 1.
         * 
         * These string forms are string forms that are supported by
         * the CSS3 colors module, and can be parsed by {@link Gdk.RGBA.parse}.
         * 
         * Note that this string representation may lose some precision,
         * since “r”, “g” and “b” are represented as 8-bit integers. If
         * this is a concern, you should use a different representation.
         * @returns A newly allocated text string
         */
        to_string(): string;
    }


    /**
     * Represents a rectangle.
     * 
     * {@link Gdk.Rectangle} is identical to `cairo_rectangle_t`. Together with Cairo’s
     * `cairo_region_t` data type, these are the central types for representing
     * sets of pixels.
     * 
     * The intersection of two rectangles can be computed with
     * {@link Gdk.Rectangle.intersect}; to find the union of two rectangles use
     * {@link Gdk.Rectangle.union}.
     * 
     * The `cairo_region_t` type provided by Cairo is usually used for managing
     * non-rectangular clipping of graphical operations.
     * 
     * The Graphene library has a number of other data types for regions and
     * volumes in 2D and 3D.
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
         * Returns `true` if `rect` contains the point described by `x` and `y`.
         * @param x X coordinate
         * @param y Y coordinate
         * @returns `true` if `rect` contains the point
         */
        contains_point(x: number, y: number): boolean;

        /**
         * Checks if the two given rectangles are equal.
         * @param rect2 a {@link Gdk.Rectangle}
         * @returns `true` if the rectangles are equal.
         */
        equal(rect2: Rectangle): boolean;

        /**
         * Calculates the intersection of two rectangles.
         * 
         * It is allowed for `dest` to be the same as either `src1` or `src2`.
         * If the rectangles do not intersect, `dest`’s width and height is set
         * to 0 and its x and y values are undefined. If you are only interested
         * in whether the rectangles intersect, but not in the intersecting area
         * itself, pass `null` for `dest`.
         * @param src2 a {@link Gdk.Rectangle}
         * @returns `true` if the rectangles intersect.
         */
        intersect(src2: Rectangle): [boolean, Rectangle | null];

        /**
         * Calculates the union of two rectangles.
         * 
         * The union of rectangles `src1` and `src2` is the smallest rectangle which
         * includes both `src1` and `src2` within it. It is allowed for `dest` to be
         * the same as either `src1` or `src2`.
         * 
         * Note that this function does not ignore 'empty' rectangles (ie. with
         * zero width or height).
         * @param src2 a {@link Gdk.Rectangle}
         */
        union(src2: Rectangle): Rectangle;
    }


    /**
     * @gir-type Alias
     */
    type SeatClass = typeof Seat;

    /**
     * @gir-type Alias
     */
    type SnapshotClass = typeof Snapshot;

    /**
     * @gir-type Alias
     */
    type SurfaceClass = typeof Surface;

    /**
     * @gir-type Alias
     */
    type TextureClass = typeof Texture;

    /**
     * Used to download the contents of a {@link Gdk.Texture}.
     * 
     * It is intended to be created as a short-term object for a single download,
     * but can be used for multiple downloads of different textures or with different
     * settings.
     * 
     * {@link Gdk.TextureDownloader} can be used to convert data between different formats.
     * Create a {@link Gdk.Texture} for the existing format and then download it in a
     * different format.
     * @gir-type Struct
     * @since 4.10
     */
    class TextureDownloader {
        static $gtype: GObject.GType<TextureDownloader>;

        // Constructors
        constructor(texture: Texture);

        static ["new"](texture: Texture): TextureDownloader;

        // Methods
        /**
         * Creates a copy of the downloader.
         * 
         * This function is meant for language bindings.
         * @returns A copy of the downloader
         * @since 4.10
         */
        copy(): TextureDownloader;

        /**
         * Downloads the given texture pixels into a {@link GLib.Bytes}. The rowstride will
         * be stored in the stride value.
         * 
         * This function will abort if it tries to download a large texture and
         * fails to allocate memory. If you think that may happen, you should handle
         * memory allocation yourself and use {@link Gdk.TextureDownloader.download_into}
         * once allocation succeeded.
         * 
         * This function cannot be used with a multiplanar format. Use
         * {@link Gdk.TextureDownloader.download_bytes_with_planes} for that purpose.
         * @returns The downloaded pixels
         * @since 4.10
         */
        download_bytes(): [GLib.Bytes, number];

        /**
         * Downloads the given texture pixels into a {@link GLib.Bytes}. The offsets and
         * strides of the resulting buffer will be stored in the respective values.
         * 
         * If the format does have less than 4 planes, the remaining offsets and strides will be
         * set to `0`.
         * @returns The downloaded pixels
         * @since 4.20
         */
        download_bytes_with_planes(): [GLib.Bytes, number[], number[]];

        /**
         * Downloads the `texture` into local memory.
         * 
         * This function cannot be used with a multiplanar format.
         * @param data pointer to enough memory to be filled with the   downloaded data of the texture
         * @param stride rowstride in bytes
         * @since 4.10
         */
        download_into(data: Uint8Array | string, stride: bigint | number): void;

        /**
         * Frees the given downloader and all its associated resources.
         * @since 4.10
         */
        free(): void;

        /**
         * Gets the color state that the data will be downloaded in.
         * @returns The color state of the download
         * @since 4.16
         */
        get_color_state(): ColorState;

        /**
         * Gets the format that the data will be downloaded in.
         * @returns The format of the download
         * @since 4.10
         */
        get_format(): MemoryFormat;

        /**
         * Gets the texture that the downloader will download.
         * @returns The texture to download
         * @since 4.10
         */
        get_texture(): Texture;

        /**
         * Sets the color state the downloader will convert the data to.
         * 
         * By default, the sRGB colorstate returned by {@link ColorState.get_srgb}
         * is used.
         * @param color_state the color state to use
         * @since 4.16
         */
        set_color_state(color_state: ColorState): void;

        /**
         * Sets the format the downloader will download.
         * 
         * By default, GDK_MEMORY_DEFAULT is set.
         * @param format the format to use
         * @since 4.10
         */
        set_format(format: MemoryFormat): void;

        /**
         * Changes the texture the downloader will download.
         * @param texture the new texture to download
         * @since 4.10
         */
        set_texture(texture: Texture): void;
    }


    /**
     * Stores a single event in a motion history.
     * 
     * To check whether an axis is present, check whether the corresponding
     * flag from the {@link Gdk.AxisFlags} enumeration is set in the `flags`
     * To access individual axis values, use the values of the values of
     * the {@link Gdk.AxisUse} enumerations as indices.
     * @gir-type Struct
     */
    class TimeCoord {
        static $gtype: GObject.GType<TimeCoord>;

        // Fields
        time: number;

        flags: AxisFlags;

        axes: number[];
    }


    /**
     * @gir-type Alias
     */
    type ToplevelInterface = typeof Toplevel;

    /**
     * Contains information that is necessary to present a sovereign
     * window on screen.
     * 
     * The {@link Gdk.ToplevelLayout} struct is necessary for using
     * {@link Gdk.Toplevel.present}.
     * 
     * Toplevel surfaces are sovereign windows that can be presented
     * to the user in various states (maximized, on all workspaces,
     * etc).
     * @gir-type Struct
     */
    class ToplevelLayout {
        static $gtype: GObject.GType<ToplevelLayout>;

        // Constructors
        constructor(properties?: Partial<{}>);

        static ["new"](): ToplevelLayout;

        // Methods
        /**
         * Create a new {@link Gdk.ToplevelLayout} and copy the contents of `layout` into it.
         * @returns a copy of `layout`.
         */
        copy(): ToplevelLayout;

        /**
         * Check whether `layout` and `other` has identical layout properties.
         * @param other another toplevel layout
         * @returns true if `layout` and `other` have identical layout properties,   otherwise false.
         */
        equal(other: ToplevelLayout): boolean;

        /**
         * If the layout specifies whether to the toplevel should go fullscreen,
         * the value pointed to by `fullscreen` is set to true if it should go
         * fullscreen, or false, if it should go unfullscreen.
         * @returns whether the `layout` specifies the fullscreen state for the toplevel
         */
        get_fullscreen(): [boolean, boolean];

        /**
         * Returns the monitor that the layout is fullscreening
         * the surface on.
         * @returns the monitor on which `layout` fullscreens
         */
        get_fullscreen_monitor(): Monitor | null;

        /**
         * If the layout specifies whether to the toplevel should go maximized,
         * the value pointed to by `maximized` is set to true if it should go
         * maximized, or false, if it should go unmaximized.
         * @returns whether the `layout` specifies the maximized state for the toplevel
         */
        get_maximized(): [boolean, boolean];

        /**
         * Returns whether the layout should allow the user
         * to resize the surface.
         * @returns true if the layout is resizable
         */
        get_resizable(): boolean;

        /**
         * Increases the reference count of `layout`.
         * @returns the same `layout`
         */
        ref(): ToplevelLayout;

        /**
         * Sets whether the layout should cause the surface
         * to be fullscreen when presented.
         * @param fullscreen true to fullscreen the surface
         * @param monitor the monitor to fullscreen on
         */
        set_fullscreen(fullscreen: boolean, monitor: Monitor | null): void;

        /**
         * Sets whether the layout should cause the surface
         * to be maximized when presented.
         * @param maximized true to maximize
         */
        set_maximized(maximized: boolean): void;

        /**
         * Sets whether the layout should allow the user
         * to resize the surface after it has been presented.
         * @param resizable true to allow resizing
         */
        set_resizable(resizable: boolean): void;

        /**
         * Decreases the reference count of `layout`.
         */
        unref(): void;
    }


    /**
     * Contains information that is useful to compute the size of a toplevel.
     * @gir-type Struct
     */
    abstract class ToplevelSize {
        static $gtype: GObject.GType<ToplevelSize>;

        // Methods
        /**
         * Retrieves the bounds the toplevel is placed within.
         * 
         * The bounds represent the largest size a toplevel may have while still being
         * able to fit within some type of boundary. Depending on the backend, this may
         * be equivalent to the dimensions of the work area or the monitor on which the
         * window is being presented on, or something else that limits the way a
         * toplevel can be presented.
         */
        get_bounds(): [number, number];

        /**
         * Sets the minimum size of the toplevel.
         * 
         * The minimum size corresponds to the limitations the toplevel can be shrunk
         * to, without resulting in incorrect painting. A user of a {@link Gdk.Toplevel} should
         * calculate these given both the existing size, and the bounds retrieved from
         * the {@link Gdk.ToplevelSize} object.
         * 
         * The minimum size should be within the bounds (see
         * {@link Gdk.ToplevelSize.get_bounds}).
         * @param min_width the minimum width
         * @param min_height the minimum height
         */
        set_min_size(min_width: number, min_height: number): void;

        /**
         * Sets the shadows size of the toplevel.
         * 
         * The shadow width corresponds to the part of the computed surface size
         * that would consist of the shadow margin surrounding the window, would
         * there be any.
         * 
         * Shadow width should only be set if
         * {@link Gtk.Display.supports_shadow_width} is `true`.
         * @param left width of the left part of the shadow
         * @param right width of the right part of the shadow
         * @param top height of the top part of the shadow
         * @param bottom height of the bottom part of the shadow
         */
        set_shadow_width(left: number, right: number, top: number, bottom: number): void;

        /**
         * Sets the size the toplevel prefers to be resized to.
         * 
         * The size should be within the bounds (see
         * {@link Gdk.ToplevelSize.get_bounds}). The set size should
         * be considered as a hint, and should not be assumed to be
         * respected by the windowing system, or backend.
         * @param width the width
         * @param height the height
         */
        set_size(width: number, height: number): void;
    }


    /**
     * @gir-type Alias
     */
    type VulkanContextClass = typeof VulkanContext;

    namespace DevicePad {

        // Constructor properties interface
        interface ConstructorProps extends Device.ConstructorProps {}
    }

    export interface DevicePadNamespace {
        $gtype: GObject.GType<DevicePad>;
        prototype: DevicePad;
    }
    /**
     * An interface for tablet pad devices.
     * 
     * It allows querying the features provided by the pad device.
     * 
     * Tablet pads may contain one or more groups, each containing a subset
     * of the buttons/rings/strips available. {@link Gdk.DevicePad.get_n_groups}
     * can be used to obtain the number of groups, {@link Gdk.DevicePad.get_n_features}
     * and {@link Gdk.DevicePad.get_feature_group} can be combined to find out
     * the number of buttons/rings/strips the device has, and how are they grouped.
     * 
     * Each of those groups have different modes, which may be used to map each
     * individual pad feature to multiple actions. Only one mode is effective
     * (current) for each given group, different groups may have different
     * current modes. The number of available modes in a group can be found
     * out through {@link Gdk.DevicePad.get_group_n_modes}, and the current mode
     * for a given group will be notified through events of type `GDK_PAD_GROUP_MODE`.
     * @gir-type Interface
     */
    interface DevicePad extends Device {

        // Methods
        /**
         * Returns the group the given `feature` and `idx` belong to.
         * 
         * f the feature or index do not exist in `pad`, -1 is returned.
         * @param feature the feature type to get the group from
         * @param feature_idx the index of the feature to get the group from
         * @returns The group number of the queried pad feature.
         */
        get_feature_group(feature: DevicePadFeature, feature_idx: number): number;

        /**
         * Returns the number of modes that `group` may have.
         * @param group_idx group to get the number of available modes from
         * @returns The number of modes available in `group`.
         */
        get_group_n_modes(group_idx: number): number;

        /**
         * Returns the number of features a tablet pad has.
         * @param feature a pad feature
         * @returns The amount of elements of type `feature` that this pad has.
         */
        get_n_features(feature: DevicePadFeature): number;

        /**
         * Returns the number of groups this pad device has.
         * 
         * Pads have at least one group. A pad group is a subcollection of
         * buttons/strip/rings that is affected collectively by a same
         * current mode.
         * @returns The number of button/ring/strip groups in the pad.
         */
        get_n_groups(): number;
    }


    export const DevicePad: DevicePadNamespace & {
        new (): DevicePad; // This allows `obj instanceof DevicePad`
    };

    namespace DragSurface {
        // Signal signatures
        interface SignalSignatures {
            /**
             * Emitted when the size for the surface needs to be computed, when it is
             * present.
             * 
             * This signal will normally be emitted during the native surface layout
             * cycle when the surface size needs to be recomputed.
             * 
             * It is the responsibility of the drag surface user to handle this signal
             * and compute the desired size of the surface, storing the computed size
             * in the {@link Gdk.DragSurfaceSize} object that is passed to the signal
             * handler, using {@link Gdk.DragSurfaceSize.set_size}.
             * 
             * Failing to set a size so will result in an arbitrary size being used as
             * a result.
             * @signal
             * @since 4.12
             * @run-last
             */
            "compute-size": (size: DragSurfaceSize) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Surface.ConstructorProps {}
    }

    export interface DragSurfaceNamespace {
        $gtype: GObject.GType<DragSurface>;
        prototype: DragSurface;
    }
    /**
     * A surface that is used during DND.
     * @gir-type Interface
     */
    interface DragSurface extends Surface {

        // Methods
        /**
         * Present `drag_surface`.
         * @param width the unconstrained drag_surface width to layout
         * @param height the unconstrained drag_surface height to layout
         * @returns `false` if it failed to be presented, otherwise `true`.
         */
        present(width: number, height: number): boolean;
    }


    export const DragSurface: DragSurfaceNamespace & {
        new (): DragSurface; // This allows `obj instanceof DragSurface`
    };

    namespace Paintable {
        // Signal signatures
        interface SignalSignatures {
            /**
             * Emitted when the contents of the `paintable` change.
             * 
             * Examples for such an event would be videos changing to the next frame or
             * the icon theme for an icon changing.
             * @signal
             * @run-last
             */
            "invalidate-contents": () => void;
            /**
             * Emitted when the intrinsic size of the `paintable` changes.
             * 
             * This means the values reported by at least one of
             * {@link Gdk.Paintable.get_intrinsic_width},
             * {@link Gdk.Paintable.get_intrinsic_height} or
             * {@link Gdk.Paintable.get_intrinsic_aspect_ratio}
             * has changed.
             * 
             * Examples for such an event would be a paintable displaying
             * the contents of a toplevel surface being resized.
             * @signal
             * @run-last
             */
            "invalidate-size": () => void;
        }
        /**
         * Interface for implementing Paintable.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {

            // Virtual methods
            /**
             * Gets an immutable paintable for the current contents displayed by `paintable`.
             * 
             * This is useful when you want to retain the current state of an animation,
             * for example to take a screenshot of a running animation.
             * 
             * If the `paintable` is already immutable, it will return itself.
             * @virtual
             */
            vfunc_get_current_image(): Paintable;

            /**
             * Get flags for the paintable.
             * 
             * This is oftentimes useful for optimizations.
             * 
             * See {@link Gdk.PaintableFlags} for the flags and what they mean.
             * @virtual
             */
            vfunc_get_flags(): PaintableFlags;

            /**
             * Gets the preferred aspect ratio the `paintable` would like to be displayed at.
             * 
             * The aspect ratio is the width divided by the height, so a value of 0.5
             * means that the `paintable` prefers to be displayed twice as high as it
             * is wide. Consumers of this interface can use this to preserve aspect
             * ratio when displaying the paintable.
             * 
             * This is a purely informational value and does not in any way limit the
             * values that may be passed to {@link Gdk.Paintable.snapshot}.
             * 
             * Usually when a `paintable` returns nonzero values from
             * {@link Gdk.Paintable.get_intrinsic_width} and
             * {@link Gdk.Paintable.get_intrinsic_height} the aspect ratio
             * should conform to those values, though that is not required.
             * 
             * If the `paintable` does not have a preferred aspect ratio,
             * it returns 0. Negative values are never returned.
             * @virtual
             */
            vfunc_get_intrinsic_aspect_ratio(): number;

            /**
             * Gets the preferred height the `paintable` would like to be displayed at.
             * 
             * Consumers of this interface can use this to reserve enough space to draw
             * the paintable.
             * 
             * This is a purely informational value and does not in any way limit the
             * values that may be passed to {@link Gdk.Paintable.snapshot}.
             * 
             * If the `paintable` does not have a preferred height, it returns 0.
             * Negative values are never returned.
             * @virtual
             */
            vfunc_get_intrinsic_height(): number;

            /**
             * Gets the preferred width the `paintable` would like to be displayed at.
             * 
             * Consumers of this interface can use this to reserve enough space to draw
             * the paintable.
             * 
             * This is a purely informational value and does not in any way limit the
             * values that may be passed to {@link Gdk.Paintable.snapshot}.
             * 
             * If the `paintable` does not have a preferred width, it returns 0.
             * Negative values are never returned.
             * @virtual
             */
            vfunc_get_intrinsic_width(): number;

            /**
             * Snapshots the given paintable with the given `width` and `height`.
             * 
             * The paintable is drawn at the current (0,0) offset of the `snapshot`.
             * If `width` and `height` are not larger than zero, this function will
             * do nothing.
             * @param snapshot a {@link Gdk.Snapshot} to snapshot to
             * @param width width to snapshot in
             * @param height height to snapshot in
             * @virtual
             */
            vfunc_snapshot(snapshot: Snapshot, width: number, height: number): void;
        }


        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface PaintableNamespace {
        $gtype: GObject.GType<Paintable>;
        prototype: Paintable;
        /**
        * Returns a paintable that has the given intrinsic size and draws nothing.
        * 
        * This is often useful for implementing the
        * {@link Gdk.Paintable.get_current_image} virtual function
        * when the paintable is in an incomplete state (like a
        * [GtkMediaStream](../gtk4/class.MediaStream.html) before receiving
        * the first frame).
        * @param intrinsic_width The intrinsic width to report. Can be 0 for no width.
        * @param intrinsic_height The intrinsic height to report. Can be 0 for no height.
        */
        new_empty(intrinsic_width: number, intrinsic_height: number): Paintable;
    }
    /**
     * An interface for content that can be painted.
     * 
     * The content of a {@link Gdk.Paintable} can be painted anywhere at any size
     * without requiring any sort of layout. The interface is inspired by
     * similar concepts elsewhere, such as
     * [ClutterContent](https://developer.gnome.org/clutter/stable/ClutterContent.html),
     * [HTML/CSS Paint Sources](https://www.w3.org/TR/css-images-4/#paint-source),
     * or [SVG Paint Servers](https://www.w3.org/TR/SVG2/pservers.html).
     * 
     * A {@link Gdk.Paintable} can be snapshot at any time and size using
     * {@link Gdk.Paintable.snapshot}. How the paintable interprets that size and
     * if it scales or centers itself into the given rectangle is implementation
     * defined, though if you are implementing a {@link Gdk.Paintable} and don't know what
     * to do, it is suggested that you scale your paintable ignoring any potential
     * aspect ratio.
     * 
     * The contents that a {@link Gdk.Paintable} produces may depend on the {@link Gdk.Snapshot}
     * passed to it. For example, paintables may decide to use more detailed images
     * on higher resolution screens or when OpenGL is available. A {@link Gdk.Paintable}
     * will however always produce the same output for the same snapshot.
     * 
     * A {@link Gdk.Paintable} may change its contents, meaning that it will now produce
     * a different output with the same snapshot. Once that happens, it will call
     * {@link Gdk.Paintable.invalidate_contents} which will emit the
     * `Gdk.Paintable::invalidate-contents` signal. If a paintable is known
     * to never change its contents, it will set the {@link Gdk.PaintableFlags.STATIC_CONTENTS}
     * flag. If a consumer cannot deal with changing contents, it may call
     * {@link Gdk.Paintable.get_current_image} which will return a static
     * paintable and use that.
     * 
     * A paintable can report an intrinsic (or preferred) size or aspect ratio it
     * wishes to be rendered at, though it doesn't have to. Consumers of the interface
     * can use this information to layout thepaintable appropriately. Just like the
     * contents, the size of a paintable can change. A paintable will indicate this
     * by calling {@link Gdk.Paintable.invalidate_size} which will emit the
     * `Gdk.Paintable::invalidate-size` signal. And just like for contents,
     * if a paintable is known to never change its size, it will set the
     * {@link Gdk.PaintableFlags.STATIC_SIZE} flag.
     * 
     * Besides API for applications, there are some functions that are only
     * useful for implementing subclasses and should not be used by applications:
     * {@link Gdk.Paintable.invalidate_contents},
     * {@link Gdk.Paintable.invalidate_size},
     * {@link Gdk.Paintable.new_empty}.
     * @gir-type Interface
     */
    interface Paintable extends GObject.Object, Paintable.Interface {

        // Methods
        /**
         * Compute a concrete size for the {@link Gdk.Paintable}.
         * 
         * Applies the sizing algorithm outlined in the
         * [CSS Image spec](https://drafts.csswg.org/css-images-3/#default-sizing)
         * to the given `paintable`. See that link for more details.
         * 
         * It is not necessary to call this function when both `specified_width`
         * and `specified_height` are known, but it is useful to call this
         * function in GtkWidget:measure implementations to compute the
         * other dimension when only one dimension is given.
         * @param specified_width the width `paintable` could be drawn into or   0.0 if unknown
         * @param specified_height the height `paintable` could be drawn into or   0.0 if unknown
         * @param default_width the width `paintable` would be drawn into if   no other constraints were given
         * @param default_height the height `paintable` would be drawn into if   no other constraints were given
         */
        compute_concrete_size(specified_width: number, specified_height: number, default_width: number, default_height: number): [number, number];

        /**
         * Gets an immutable paintable for the current contents displayed by `paintable`.
         * 
         * This is useful when you want to retain the current state of an animation,
         * for example to take a screenshot of a running animation.
         * 
         * If the `paintable` is already immutable, it will return itself.
         * @returns An immutable paintable for the current   contents of `paintable`
         */
        get_current_image(): Paintable;

        /**
         * Get flags for the paintable.
         * 
         * This is oftentimes useful for optimizations.
         * 
         * See {@link Gdk.PaintableFlags} for the flags and what they mean.
         * @returns The {@link Gdk.PaintableFlags} for this paintable
         */
        get_flags(): PaintableFlags;

        /**
         * Gets the preferred aspect ratio the `paintable` would like to be displayed at.
         * 
         * The aspect ratio is the width divided by the height, so a value of 0.5
         * means that the `paintable` prefers to be displayed twice as high as it
         * is wide. Consumers of this interface can use this to preserve aspect
         * ratio when displaying the paintable.
         * 
         * This is a purely informational value and does not in any way limit the
         * values that may be passed to {@link Gdk.Paintable.snapshot}.
         * 
         * Usually when a `paintable` returns nonzero values from
         * {@link Gdk.Paintable.get_intrinsic_width} and
         * {@link Gdk.Paintable.get_intrinsic_height} the aspect ratio
         * should conform to those values, though that is not required.
         * 
         * If the `paintable` does not have a preferred aspect ratio,
         * it returns 0. Negative values are never returned.
         * @returns the intrinsic aspect ratio of `paintable` or 0 if none.
         */
        get_intrinsic_aspect_ratio(): number;

        /**
         * Gets the preferred height the `paintable` would like to be displayed at.
         * 
         * Consumers of this interface can use this to reserve enough space to draw
         * the paintable.
         * 
         * This is a purely informational value and does not in any way limit the
         * values that may be passed to {@link Gdk.Paintable.snapshot}.
         * 
         * If the `paintable` does not have a preferred height, it returns 0.
         * Negative values are never returned.
         * @returns the intrinsic height of `paintable` or 0 if none.
         */
        get_intrinsic_height(): number;

        /**
         * Gets the preferred width the `paintable` would like to be displayed at.
         * 
         * Consumers of this interface can use this to reserve enough space to draw
         * the paintable.
         * 
         * This is a purely informational value and does not in any way limit the
         * values that may be passed to {@link Gdk.Paintable.snapshot}.
         * 
         * If the `paintable` does not have a preferred width, it returns 0.
         * Negative values are never returned.
         * @returns the intrinsic width of `paintable` or 0 if none.
         */
        get_intrinsic_width(): number;

        /**
         * Called by implementations of {@link Gdk.Paintable} to invalidate their contents.
         * 
         * Unless the contents are invalidated, implementations must guarantee that
         * multiple calls of {@link Gdk.Paintable.snapshot} produce the same output.
         * 
         * This function will emit the `Gdk.Paintable::invalidate-contents`
         * signal.
         * 
         * If a `paintable` reports the {@link Gdk.PaintableFlags.STATIC_CONTENTS} flag,
         * it must not call this function.
         */
        invalidate_contents(): void;

        /**
         * Called by implementations of {@link Gdk.Paintable} to invalidate their size.
         * 
         * As long as the size is not invalidated, `paintable` must return the same
         * values for its intrinsic width, height and aspect ratio.
         * 
         * This function will emit the `Gdk.Paintable::invalidate-size`
         * signal.
         * 
         * If a `paintable` reports the {@link Gdk.PaintableFlags.STATIC_SIZE} flag,
         * it must not call this function.
         */
        invalidate_size(): void;

        /**
         * Snapshots the given paintable with the given `width` and `height`.
         * 
         * The paintable is drawn at the current (0,0) offset of the `snapshot`.
         * If `width` and `height` are not larger than zero, this function will
         * do nothing.
         * @param snapshot a {@link Gdk.Snapshot} to snapshot to
         * @param width width to snapshot in
         * @param height height to snapshot in
         */
        snapshot(snapshot: Snapshot, width: number, height: number): void;
    }


    export const Paintable: PaintableNamespace & {
        new (): Paintable; // This allows `obj instanceof Paintable`
    };

    namespace Popup {

        // Constructor properties interface
        interface ConstructorProps extends Surface.ConstructorProps {
            autohide: boolean;
            parent: Surface | null;
        }
    }

    export interface PopupNamespace {
        $gtype: GObject.GType<Popup>;
        prototype: Popup;
    }
    /**
     * A surface that is attached to another surface.
     * 
     * The {@link Gdk.Popup} is positioned relative to its parent surface.
     * 
     * {@link Gdk.Popup}s are typically used to implement menus and similar popups.
     * They can be modal, which is indicated by the {@link Gdk.Popup.autohide}
     * property.
     * @gir-type Interface
     */
    interface Popup extends Surface {

        // Properties
        /**
         * Whether to hide on outside clicks.
         * @construct-only
         * @default false
         */
        get autohide(): boolean;

        /**
         * The parent surface.
         * @construct-only
         */
        get parent(): Surface | null;

        // Methods
        /**
         * Returns whether this popup is set to hide on outside clicks.
         * @returns `true` if `popup` will autohide
         */
        get_autohide(): boolean;

        /**
         * Returns the parent surface of a popup.
         * @returns the parent surface
         */
        get_parent(): Surface | null;

        /**
         * Obtains the position of the popup relative to its parent.
         * @returns the X coordinate of `popup` position
         */
        get_position_x(): number;

        /**
         * Obtains the position of the popup relative to its parent.
         * @returns the Y coordinate of `popup` position
         */
        get_position_y(): number;

        /**
         * Gets the current popup rectangle anchor.
         * 
         * The value returned may change after calling {@link Gdk.Popup.present},
         * or after the `Gdk.Surface::layout` signal is emitted.
         * @returns the current rectangle anchor value of `popup`
         */
        get_rect_anchor(): Gravity;

        /**
         * Gets the current popup surface anchor.
         * 
         * The value returned may change after calling {@link Gdk.Popup.present},
         * or after the `Gdk.Surface::layout` signal is emitted.
         * @returns the current surface anchor value of `popup`
         */
        get_surface_anchor(): Gravity;

        /**
         * Present `popup` after having processed the {@link Gdk.PopupLayout} rules.
         * 
         * If the popup was previously not showing, it will be shown,
         * otherwise it will change position according to `layout`.
         * 
         * After calling this function, the result should be handled in response
         * to the `Gdk.Surface::layout` signal being emitted. The resulting
         * popup position can be queried using {@link Gdk.Popup.get_position_x},
         * {@link Gdk.Popup.get_position_y}, and the resulting size will be sent as
         * parameters in the layout signal. Use {@link Gdk.Popup.get_rect_anchor}
         * and {@link Gdk.Popup.get_surface_anchor} to get the resulting anchors.
         * 
         * Presenting may fail, for example if the `popup` is set to autohide
         * and is immediately hidden upon being presented. If presenting failed,
         * the `Gdk.Surface::layout` signal will not me emitted.
         * @param width the unconstrained popup width to layout
         * @param height the unconstrained popup height to layout
         * @param layout the {@link Gdk.PopupLayout} object used to layout
         * @returns `false` if it failed to be presented, otherwise `true`.
         */
        present(width: number, height: number, layout: PopupLayout): boolean;
    }


    export const Popup: PopupNamespace & {
        new (): Popup; // This allows `obj instanceof Popup`
    };

    namespace Toplevel {
        // Signal signatures
        interface SignalSignatures {
            /**
             * Emitted when the size for the surface needs to be computed, when
             * it is present.
             * 
             * This signal will normally be emitted during or after a call to
             * {@link Gdk.Toplevel.present}, depending on the configuration
             * received by the windowing system. It may also be emitted at any
             * other point in time, in response to the windowing system
             * spontaneously changing the configuration of the toplevel surface.
             * 
             * It is the responsibility of the toplevel user to handle this signal
             * and compute the desired size of the toplevel, given the information
             * passed via the {@link Gdk.ToplevelSize} object. Failing to do so
             * will result in an arbitrary size being used as a result.
             * @signal
             * @run-last
             */
            "compute-size": (size: ToplevelSize) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Surface.ConstructorProps {
            capabilities: ToplevelCapabilities;
            decorated: boolean;
            deletable: boolean;
            fullscreen_mode: FullscreenMode;
            fullscreenMode: FullscreenMode;
            gravity: Gravity;
            icon_list: never;
            iconList: never;
            modal: boolean;
            shortcuts_inhibited: boolean;
            shortcutsInhibited: boolean;
            startup_id: string;
            startupId: string;
            state: ToplevelState;
            title: string;
            transient_for: Surface;
            transientFor: Surface;
        }
    }

    export interface ToplevelNamespace {
        $gtype: GObject.GType<Toplevel>;
        prototype: Toplevel;
    }
    /**
     * A freestanding toplevel surface.
     * 
     * The {@link Gdk.Toplevel} interface provides useful APIs for interacting with
     * the windowing system, such as controlling maximization and size of the
     * surface, setting icons and transient parents for dialogs.
     * @gir-type Interface
     */
    interface Toplevel extends Surface {

        // Properties
        /**
         * The capabilities that are available for this toplevel.
         * @since 4.20
         * @read-only
         * @default 0
         */
        get capabilities(): ToplevelCapabilities;

        /**
         * Whether the window manager should add decorations.
         * @default false
         */
        get decorated(): boolean;
        set decorated(val: boolean);

        /**
         * Whether the window manager should allow to close the surface.
         * @default false
         */
        get deletable(): boolean;
        set deletable(val: boolean);

        /**
         * The fullscreen mode of the surface.
         * @default Gdk.FullscreenMode.CURRENT_MONITOR
         */
        get fullscreen_mode(): FullscreenMode;
        set fullscreen_mode(val: FullscreenMode);

        /**
         * The fullscreen mode of the surface.
         * @default Gdk.FullscreenMode.CURRENT_MONITOR
         */
        get fullscreenMode(): FullscreenMode;
        set fullscreenMode(val: FullscreenMode);

        /**
         * The gravity to use when resizing a surface programmatically.
         * 
         * Gravity describes which point of the surface we want to keep
         * fixed (meaning that the surface will grow in the opposite direction).
         * For example, a gravity of `GDK_GRAVITY_NORTH_EAST` means that we
         * want to fix top right corner of the surface.
         * 
         * This property is just a hint that may affect the result when negotiating
         * toplevel sizes with the windowing system. It does not affect interactive
         * resizes started with {@link Gdk.Toplevel.begin_resize}.
         * @since 4.20
         * @default Gdk.Gravity.NORTH_EAST
         */
        get gravity(): Gravity;
        set gravity(val: Gravity);

        /**
         * A list of textures to use as icon.
         */
        get icon_list(): null;
        set icon_list(val: never);

        /**
         * A list of textures to use as icon.
         */
        get iconList(): null;
        set iconList(val: never);

        /**
         * Whether the surface is modal.
         * @default false
         */
        get modal(): boolean;
        set modal(val: boolean);

        /**
         * Whether the surface should inhibit keyboard shortcuts.
         * @read-only
         * @default false
         */
        get shortcuts_inhibited(): boolean;

        /**
         * Whether the surface should inhibit keyboard shortcuts.
         * @read-only
         * @default false
         */
        get shortcutsInhibited(): boolean;

        /**
         * The startup ID of the surface.
         * 
         * See {@link Gdk.AppLaunchContext} for more information about
         * startup feedback.
         * @default null
         */
        get startup_id(): string;
        set startup_id(val: string);

        /**
         * The startup ID of the surface.
         * 
         * See {@link Gdk.AppLaunchContext} for more information about
         * startup feedback.
         * @default null
         */
        get startupId(): string;
        set startupId(val: string);

        /**
         * The state of the toplevel.
         * @read-only
         * @default 0
         */
        get state(): ToplevelState;

        /**
         * The title of the surface.
         * @default null
         */
        get title(): string;
        set title(val: string);

        /**
         * The transient parent of the surface.
         */
        get transient_for(): Surface;
        set transient_for(val: Surface);

        /**
         * The transient parent of the surface.
         */
        get transientFor(): Surface;
        set transientFor(val: Surface);

        // Methods
        /**
         * Begins an interactive move operation.
         * 
         * You might use this function to implement draggable titlebars.
         * @param device the device used for the operation
         * @param button the button being used to drag, or 0 for a keyboard-initiated drag
         * @param x surface X coordinate of mouse click that began the drag
         * @param y surface Y coordinate of mouse click that began the drag
         * @param timestamp timestamp of mouse click that began the drag (use   {@link Gdk.Event.get_time})
         */
        begin_move(device: Device, button: number, x: number, y: number, timestamp: number): void;

        /**
         * Begins an interactive resize operation.
         * 
         * You might use this function to implement a “window resize grip.”
         * @param edge the edge or corner from which the drag is started
         * @param device the device used for the operation
         * @param button the button being used to drag, or 0 for a keyboard-initiated drag
         * @param x surface X coordinate of mouse click that began the drag
         * @param y surface Y coordinate of mouse click that began the drag
         * @param timestamp timestamp of mouse click that began the drag (use   {@link Gdk.Event.get_time})
         */
        begin_resize(edge: SurfaceEdge, device: Device | null, button: number, x: number, y: number, timestamp: number): void;

        /**
         * Sets keyboard focus to `surface`.
         * 
         * In most cases, [gtk_window_present_with_time()](../gtk4/method.Window.present_with_time.html)
         * should be used on a [GtkWindow](../gtk4/class.Window.html), rather than
         * calling this function.
         * @param timestamp timestamp of the event triggering the surface focus
         */
        focus(timestamp: number): void;

        /**
         * The capabilities that are available for this toplevel.
         * @returns the capabilities of the {@link Gdk.Toplevel}.
         * @since 4.20
         */
        get_capabilities(): ToplevelCapabilities;

        /**
         * Returns the gravity that is used when changing the toplevel
         * size programmatically.
         * @returns the gravity
         * @since 4.20
         */
        get_gravity(): Gravity;

        /**
         * Gets the bitwise or of the currently active surface state flags,
         * from the {@link Gdk.ToplevelState} enumeration.
         * @returns surface state bitfield
         */
        get_state(): ToplevelState;

        /**
         * Requests that the `toplevel` inhibit the system shortcuts.
         * 
         * This is asking the desktop environment/windowing system to let all
         * keyboard events reach the surface, as long as it is focused, instead
         * of triggering system actions.
         * 
         * If granted, the rerouting remains active until the default shortcuts
         * processing is restored with {@link Gdk.Toplevel.restore_system_shortcuts},
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
         * by listening to the {@link Gdk.Toplevel.shortcuts_inhibited} property.
         * @param event the {@link Gdk.Event} that is triggering the inhibit   request, or `null` if none is available
         */
        inhibit_system_shortcuts(event: Event | null): void;

        /**
         * Asks to lower the `toplevel` below other windows.
         * 
         * The windowing system may choose to ignore the request.
         * @returns `true` if the surface was lowered
         */
        lower(): boolean;

        /**
         * Asks to minimize the `toplevel`.
         * 
         * The windowing system may choose to ignore the request.
         * @returns `true` if the surface was minimized
         */
        minimize(): boolean;

        /**
         * Present `toplevel` after having processed the {@link Gdk.ToplevelLayout} rules.
         * 
         * If the toplevel was previously not showing, it will be showed,
         * otherwise it will change layout according to `layout`.
         * 
         * GDK may emit the `Gdk.Toplevel::compute-size` signal to let
         * the user of this toplevel compute the preferred size of the toplevel
         * surface.
         * 
         * Presenting is asynchronous and the specified layout parameters are not
         * guaranteed to be respected.
         * @param layout the {@link Gdk.ToplevelLayout} object used to layout
         */
        present(layout: ToplevelLayout): void;

        /**
         * Restore default system keyboard shortcuts which were previously
         * inhibited.
         * 
         * This undoes the effect of {@link Gdk.Toplevel.inhibit_system_shortcuts}.
         */
        restore_system_shortcuts(): void;

        /**
         * Sets the toplevel to be decorated.
         * 
         * Setting `decorated` to `false` hints the desktop environment
         * that the surface has its own, client-side decorations and
         * does not need to have window decorations added.
         * @param decorated `true` to request decorations
         */
        set_decorated(decorated: boolean): void;

        /**
         * Sets the toplevel to be deletable.
         * 
         * Setting `deletable` to `true` hints the desktop environment
         * that it should offer the user a way to close the surface.
         * @param deletable `true` to request a delete button
         */
        set_deletable(deletable: boolean): void;

        /**
         * Sets the gravity that is used when changing the toplevel
         * size programmatically.
         * @param gravity the new gravity
         * @since 4.20
         */
        set_gravity(gravity: Gravity): void;

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
         * @param surfaces A list of textures to use as icon, of different sizes
         */
        set_icon_list(surfaces: Texture[]): void;

        /**
         * Sets the toplevel to be modal.
         * 
         * The application can use this hint to tell the
         * window manager that a certain surface has modal
         * behaviour. The window manager can use this information
         * to handle modal surfaces in a special way.
         * 
         * You should only use this on surfaces for which you have
         * previously called {@link Gdk.Toplevel.set_transient_for}.
         * @param modal `true` if the surface is modal, `false` otherwise.
         */
        set_modal(modal: boolean): void;

        /**
         * Sets the startup notification ID.
         * 
         * When using GTK, typically you should use
         * [gtk_window_set_startup_id()](../gtk4/method.Window.set_startup_id.html)
         * instead of this low-level function.
         * @param startup_id a string with startup-notification identifier
         */
        set_startup_id(startup_id: string): void;

        /**
         * Sets the title of a toplevel surface.
         * 
         * The title maybe be displayed in the titlebar,
         * in lists of windows, etc.
         * @param title title of `surface`
         */
        set_title(title: string): void;

        /**
         * Sets a transient-for parent.
         * 
         * Indicates to the window manager that `surface` is a transient
         * dialog associated with the application surface `parent`. This
         * allows the window manager to do things like center `surface`
         * on `parent` and keep `surface` above `parent`.
         * 
         * See [gtk_window_set_transient_for()](../gtk4/method.Window.set_transient_for.html)
         * if you’re using [GtkWindow](../gtk4/class.Window.html).
         * @param parent another toplevel {@link Gdk.Surface}
         */
        set_transient_for(parent: Surface): void;

        /**
         * Asks the windowing system to show the window menu.
         * 
         * The window menu is the menu shown when right-clicking the titlebar
         * on traditional windows managed by the window manager. This is useful
         * for windows using client-side decorations, activating it with a
         * right-click on the window decorations.
         * @param event a {@link Gdk.Event} to show the menu for
         * @returns `true` if the window menu was shown and `false` otherwise.
         */
        show_window_menu(event: Event): boolean;

        /**
         * Returns whether the desktop environment supports
         * tiled window states.
         * @returns `true` if the desktop environment supports tiled window states
         */
        supports_edge_constraints(): boolean;

        /**
         * Performs a title bar gesture.
         * @param gesture a {@link Gdk.TitlebarGesture}
         * @returns whether the gesture was performed
         * @since 4.4
         */
        titlebar_gesture(gesture: TitlebarGesture): boolean;
    }


    export const Toplevel: ToplevelNamespace & {
        new (): Toplevel; // This allows `obj instanceof Toplevel`
    };

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
