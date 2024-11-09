/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

// Module dependencies
import type cairo from '@girs/cairo-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Mtk from '@girs/mtk-15';
import type Graphene from '@girs/graphene-1.0';
import type Gio from '@girs/gio-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GL from '@girs/gl-1.0';
import type CoglPango from '@girs/coglpango-15';
import type PangoCairo from '@girs/pangocairo-1.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Cogl from '@girs/cogl-15';
import type xlib from '@girs/xlib-2.0';
import type Atk from '@girs/atk-1.0';

export namespace Clutter {
    /**
     * Clutter-15
     */

    /**
     * Controls how a #ClutterActor should align itself inside the extra space
     * assigned to it during the allocation.
     *
     * Alignment only matters if the allocated space given to an actor is
     * bigger than its natural size; for example, when
     * the [property`Clutter`.Actor:x-expand] or the [property`Clutter`.Actor:y-expand]
     * properties of #ClutterActor are set to %TRUE.
     */

    /**
     * Controls how a #ClutterActor should align itself inside the extra space
     * assigned to it during the allocation.
     *
     * Alignment only matters if the allocated space given to an actor is
     * bigger than its natural size; for example, when
     * the [property`Clutter`.Actor:x-expand] or the [property`Clutter`.Actor:y-expand]
     * properties of #ClutterActor are set to %TRUE.
     */
    export namespace ActorAlign {
        export const $gtype: GObject.GType<ActorAlign>;
    }

    enum ActorAlign {
        /**
         * Stretch to cover the whole allocated space
         */
        FILL,
        /**
         * Snap to left or top side, leaving space
         *   to the right or bottom. For horizontal layouts, in right-to-left
         *   locales this should be reversed.
         */
        START,
        /**
         * Center the actor inside the allocation
         */
        CENTER,
        /**
         * Snap to right or bottom side, leaving space
         *   to the left or top. For horizontal layouts, in right-to-left locales
         *   this should be reversed.
         */
        END,
    }
    /**
     * Specifies the axis on which #ClutterAlignConstraint should maintain
     * the alignment.
     */

    /**
     * Specifies the axis on which #ClutterAlignConstraint should maintain
     * the alignment.
     */
    export namespace AlignAxis {
        export const $gtype: GObject.GType<AlignAxis>;
    }

    enum AlignAxis {
        /**
         * Maintain the alignment on the X axis
         */
        X_AXIS,
        /**
         * Maintain the alignment on the Y axis
         */
        Y_AXIS,
        /**
         * Maintain the alignment on both the X and Y axis
         */
        BOTH,
    }
    /**
     * The animation modes used by [iface`Animatable]`.
     *
     * This enumeration can be expanded in later versions of Clutter.
     *
     * <figure id="easing-modes">
     *   <title>Easing modes provided by Clutter</title>
     *   <graphic fileref="easing-modes.png" format="PNG"/>
     * </figure>
     *
     * Every global alpha function registered using clutter_alpha_register_func()
     * or clutter_alpha_register_closure() will have a logical id greater than
     * %CLUTTER_ANIMATION_LAST.
     */

    /**
     * The animation modes used by [iface`Animatable]`.
     *
     * This enumeration can be expanded in later versions of Clutter.
     *
     * <figure id="easing-modes">
     *   <title>Easing modes provided by Clutter</title>
     *   <graphic fileref="easing-modes.png" format="PNG"/>
     * </figure>
     *
     * Every global alpha function registered using clutter_alpha_register_func()
     * or clutter_alpha_register_closure() will have a logical id greater than
     * %CLUTTER_ANIMATION_LAST.
     */
    export namespace AnimationMode {
        export const $gtype: GObject.GType<AnimationMode>;
    }

    enum AnimationMode {
        /**
         * custom progress function
         */
        CUSTOM_MODE,
        /**
         * linear tweening
         */
        LINEAR,
        /**
         * quadratic tweening
         */
        EASE_IN_QUAD,
        /**
         * quadratic tweening, inverse of
         *    %CLUTTER_EASE_IN_QUAD
         */
        EASE_OUT_QUAD,
        /**
         * quadratic tweening, combininig
         *    %CLUTTER_EASE_IN_QUAD and %CLUTTER_EASE_OUT_QUAD
         */
        EASE_IN_OUT_QUAD,
        /**
         * cubic tweening
         */
        EASE_IN_CUBIC,
        /**
         * cubic tweening, inverse of
         *    %CLUTTER_EASE_IN_CUBIC
         */
        EASE_OUT_CUBIC,
        /**
         * cubic tweening, combining
         *    %CLUTTER_EASE_IN_CUBIC and %CLUTTER_EASE_OUT_CUBIC
         */
        EASE_IN_OUT_CUBIC,
        /**
         * quartic tweening
         */
        EASE_IN_QUART,
        /**
         * quartic tweening, inverse of
         *    %CLUTTER_EASE_IN_QUART
         */
        EASE_OUT_QUART,
        /**
         * quartic tweening, combining
         *    %CLUTTER_EASE_IN_QUART and %CLUTTER_EASE_OUT_QUART
         */
        EASE_IN_OUT_QUART,
        /**
         * quintic tweening
         */
        EASE_IN_QUINT,
        /**
         * quintic tweening, inverse of
         *    %CLUTTER_EASE_IN_QUINT
         */
        EASE_OUT_QUINT,
        /**
         * fifth power tweening, combining
         *    %CLUTTER_EASE_IN_QUINT and %CLUTTER_EASE_OUT_QUINT
         */
        EASE_IN_OUT_QUINT,
        /**
         * sinusoidal tweening
         */
        EASE_IN_SINE,
        /**
         * sinusoidal tweening, inverse of
         *    %CLUTTER_EASE_IN_SINE
         */
        EASE_OUT_SINE,
        /**
         * sine wave tweening, combining
         *    %CLUTTER_EASE_IN_SINE and %CLUTTER_EASE_OUT_SINE
         */
        EASE_IN_OUT_SINE,
        /**
         * exponential tweening
         */
        EASE_IN_EXPO,
        /**
         * exponential tweening, inverse of
         *    %CLUTTER_EASE_IN_EXPO
         */
        EASE_OUT_EXPO,
        /**
         * exponential tweening, combining
         *    %CLUTTER_EASE_IN_EXPO and %CLUTTER_EASE_OUT_EXPO
         */
        EASE_IN_OUT_EXPO,
        /**
         * circular tweening
         */
        EASE_IN_CIRC,
        /**
         * circular tweening, inverse of
         *    %CLUTTER_EASE_IN_CIRC
         */
        EASE_OUT_CIRC,
        /**
         * circular tweening, combining
         *    %CLUTTER_EASE_IN_CIRC and %CLUTTER_EASE_OUT_CIRC
         */
        EASE_IN_OUT_CIRC,
        /**
         * elastic tweening, with offshoot on start
         */
        EASE_IN_ELASTIC,
        /**
         * elastic tweening, with offshoot on end
         */
        EASE_OUT_ELASTIC,
        /**
         * elastic tweening with offshoot on both ends
         */
        EASE_IN_OUT_ELASTIC,
        /**
         * overshooting cubic tweening, with
         *   backtracking on start
         */
        EASE_IN_BACK,
        /**
         * overshooting cubic tweening, with
         *   backtracking on end
         */
        EASE_OUT_BACK,
        /**
         * overshooting cubic tweening, with
         *   backtracking on both ends
         */
        EASE_IN_OUT_BACK,
        /**
         * exponentially decaying parabolic (bounce)
         *   tweening, with bounce on start
         */
        EASE_IN_BOUNCE,
        /**
         * exponentially decaying parabolic (bounce)
         *   tweening, with bounce on end
         */
        EASE_OUT_BOUNCE,
        /**
         * exponentially decaying parabolic (bounce)
         *   tweening, with bounce on both ends
         */
        EASE_IN_OUT_BOUNCE,
        /**
         * parametrized step function; see clutter_timeline_set_step_progress()
         *   for further details. (Since 1.12)
         */
        STEPS,
        /**
         * equivalent to %CLUTTER_STEPS with a number of steps
         *   equal to 1, and a step mode of %CLUTTER_STEP_MODE_START. (Since 1.12)
         */
        STEP_START,
        /**
         * equivalent to %CLUTTER_STEPS with a number of steps
         *   equal to 1, and a step mode of %CLUTTER_STEP_MODE_END. (Since 1.12)
         */
        STEP_END,
        /**
         * cubic bezier between (0, 0) and (1, 1) with two
         *   control points; see clutter_timeline_set_cubic_bezier_progress(). (Since 1.12)
         */
        CUBIC_BEZIER,
        /**
         * equivalent to %CLUTTER_CUBIC_BEZIER with control points
         *   in (0.25, 0.1) and (0.25, 1.0). (Since 1.12)
         */
        EASE,
        /**
         * equivalent to %CLUTTER_CUBIC_BEZIER with control points
         *   in (0.42, 0) and (1.0, 1.0). (Since 1.12)
         */
        EASE_IN,
        /**
         * equivalent to %CLUTTER_CUBIC_BEZIER with control points
         *   in (0, 0) and (0.58, 1.0). (Since 1.12)
         */
        EASE_OUT,
        /**
         * equivalent to %CLUTTER_CUBIC_BEZIER with control points
         *   in (0.42, 0) and (0.58, 1.0). (Since 1.12)
         */
        EASE_IN_OUT,
        /**
         * last animation mode, used as a guard for
         *   registered global alpha functions
         */
        ANIMATION_LAST,
    }
    /**
     * Specifies which property should be used in a binding
     */

    /**
     * Specifies which property should be used in a binding
     */
    export namespace BindCoordinate {
        export const $gtype: GObject.GType<BindCoordinate>;
    }

    enum BindCoordinate {
        /**
         * Bind the X coordinate
         */
        X,
        /**
         * Bind the Y coordinate
         */
        Y,
        /**
         * Bind the width
         */
        WIDTH,
        /**
         * Bind the height
         */
        HEIGHT,
        /**
         * Equivalent to to %CLUTTER_BIND_X and
         *   %CLUTTER_BIND_Y
         */
        POSITION,
        /**
         * Equivalent to %CLUTTER_BIND_WIDTH and
         *   %CLUTTER_BIND_HEIGHT
         */
        SIZE,
        /**
         * Equivalent to %CLUTTER_BIND_POSITION and
         *   %CLUTTER_BIND_SIZE
         */
        ALL,
    }

    export namespace ButtonState {
        export const $gtype: GObject.GType<ButtonState>;
    }

    enum ButtonState {
        RELEASED,
        PRESSED,
    }
    /**
     * Colorspace information.
     */

    /**
     * Colorspace information.
     */
    export namespace Colorspace {
        export const $gtype: GObject.GType<Colorspace>;
    }

    enum Colorspace {
        /**
         * Unknown colorspace
         */
        DEFAULT,
        /**
         * Default sRGB colorspace
         */
        SRGB,
        /**
         * BT2020 colorspace
         */
        BT2020,
    }
    /**
     * Controls the alignment of the #ClutterContent inside a #ClutterActor.
     */

    /**
     * Controls the alignment of the #ClutterContent inside a #ClutterActor.
     */
    export namespace ContentGravity {
        export const $gtype: GObject.GType<ContentGravity>;
    }

    enum ContentGravity {
        /**
         * Align the content to the top left corner
         */
        TOP_LEFT,
        /**
         * Align the content to the top edge
         */
        TOP,
        /**
         * Align the content to the top right corner
         */
        TOP_RIGHT,
        /**
         * Align the content to the left edge
         */
        LEFT,
        /**
         * Align the content to the center
         */
        CENTER,
        /**
         * Align the content to the right edge
         */
        RIGHT,
        /**
         * Align the content to the bottom left corner
         */
        BOTTOM_LEFT,
        /**
         * Align the content to the bottom edge
         */
        BOTTOM,
        /**
         * Align the content to the bottom right corner
         */
        BOTTOM_RIGHT,
        /**
         * Resize the content to fill the allocation
         */
        RESIZE_FILL,
        /**
         * Resize the content to remain within the
         *   allocation, while maintaining the aspect ratio
         */
        RESIZE_ASPECT,
    }
    /**
     * The texture format required to store a specific encoding.
     */

    /**
     * The texture format required to store a specific encoding.
     */
    export namespace EncodingRequiredFormat {
        export const $gtype: GObject.GType<EncodingRequiredFormat>;
    }

    enum EncodingRequiredFormat {
        /**
         * 8bpc uint
         */
        UINT8,
        /**
         * 10bpc uint
         */
        UINT10,
        /**
         * 16bpc floating point
         */
        FP16,
    }

    export namespace EventPhase {
        export const $gtype: GObject.GType<EventPhase>;
    }

    enum EventPhase {
        CAPTURE,
        BUBBLE,
    }
    /**
     * Types of events.
     */

    /**
     * Types of events.
     */
    export namespace EventType {
        export const $gtype: GObject.GType<EventType>;
    }

    enum EventType {
        /**
         * Empty event
         */
        NOTHING,
        /**
         * Key press event
         */
        KEY_PRESS,
        /**
         * Key release event
         */
        KEY_RELEASE,
        /**
         * Pointer motion event
         */
        MOTION,
        /**
         * Actor enter event
         */
        ENTER,
        /**
         * Actor leave event
         */
        LEAVE,
        /**
         * Pointer button press event
         */
        BUTTON_PRESS,
        /**
         * Pointer button release event
         */
        BUTTON_RELEASE,
        /**
         * Pointer scroll event
         */
        SCROLL,
        /**
         * A new touch event sequence has started;
         */
        TOUCH_BEGIN,
        /**
         * A touch event sequence has been updated;
         */
        TOUCH_UPDATE,
        /**
         * A touch event sequence has finished;
         */
        TOUCH_END,
        /**
         * A touch event sequence has been canceled;
         */
        TOUCH_CANCEL,
        /**
         * A pinch gesture event, the current state is
         *   determined by its phase field;
         */
        TOUCHPAD_PINCH,
        /**
         * A swipe gesture event, the current state is
         *   determined by its phase field;
         */
        TOUCHPAD_SWIPE,
        /**
         * A hold gesture event, the current state is
         *   determined by its phase field. A hold gesture starts when the user places a
         *   finger on the touchpad and ends when all fingers are lifted. It is
         *   cancelled when the finger(s) move past a certain threshold.
         */
        TOUCHPAD_HOLD,
        /**
         * A tool entered in proximity to a tablet;
         */
        PROXIMITY_IN,
        /**
         * A tool left from the proximity area of a tablet;
         */
        PROXIMITY_OUT,
        PAD_BUTTON_PRESS,
        PAD_BUTTON_RELEASE,
        PAD_STRIP,
        PAD_RING,
        DEVICE_ADDED,
        DEVICE_REMOVED,
        IM_COMMIT,
        IM_DELETE,
        IM_PREEDIT,
        /**
         * Marks the end of the #ClutterEventType enumeration;
         */
        EVENT_LAST,
    }

    export namespace FrameClockMode {
        export const $gtype: GObject.GType<FrameClockMode>;
    }

    enum FrameClockMode {
        FIXED,
        VARIABLE,
    }

    export namespace FrameResult {
        export const $gtype: GObject.GType<FrameResult>;
    }

    enum FrameResult {
        PENDING_PRESENTED,
        IDLE,
    }

    export namespace GestureState {
        export const $gtype: GObject.GType<GestureState>;
    }

    enum GestureState {
        WAITING,
        POSSIBLE,
        RECOGNIZING,
        COMPLETED,
        CANCELLED,
        CLUTTER_N_GESTURE_STATES,
    }
    /**
     * Enum passed to the [method`GestureAction`.set_threshold_trigger_edge]
     * function.
     */

    /**
     * Enum passed to the [method`GestureAction`.set_threshold_trigger_edge]
     * function.
     */
    export namespace GestureTriggerEdge {
        export const $gtype: GObject.GType<GestureTriggerEdge>;
    }

    enum GestureTriggerEdge {
        /**
         * Tell #ClutterGestureAction that
         * the gesture must begin immediately and there's no drag limit that
         * will cause its cancellation;
         */
        NONE,
        /**
         * Tell #ClutterGestureAction that
         * it needs to wait until the drag threshold has been exceeded before
         * considering that the gesture has begun;
         */
        AFTER,
        /**
         * Tell #ClutterGestureAction that
         * the gesture must begin immediately and that it must be cancelled
         * once the drag exceed the configured threshold.
         */
        BEFORE,
    }
    /**
     * Grid position modes.
     */

    /**
     * Grid position modes.
     */
    export namespace GridPosition {
        export const $gtype: GObject.GType<GridPosition>;
    }

    enum GridPosition {
        /**
         * left position
         */
        LEFT,
        /**
         * right position
         */
        RIGHT,
        /**
         * top position
         */
        TOP,
        /**
         * bottom position
         */
        BOTTOM,
    }
    /**
     * The type of axes Clutter recognizes on a #ClutterInputDevice
     */

    /**
     * The type of axes Clutter recognizes on a #ClutterInputDevice
     */
    export namespace InputAxis {
        export const $gtype: GObject.GType<InputAxis>;
    }

    enum InputAxis {
        /**
         * Unused axis
         */
        IGNORE,
        /**
         * The position on the X axis
         */
        X,
        /**
         * The position of the Y axis
         */
        Y,
        /**
         * The pressure information
         */
        PRESSURE,
        /**
         * The tilt on the X axis
         */
        XTILT,
        /**
         * The tile on the Y axis
         */
        YTILT,
        /**
         * A wheel
         */
        WHEEL,
        /**
         * Distance (Since 1.12)
         */
        DISTANCE,
        /**
         * Rotation along the z-axis (Since 1.28)
         */
        ROTATION,
        /**
         * A slider (Since 1.28)
         */
        SLIDER,
        /**
         * Last value of the enumeration; this value is
         *   useful when iterating over the enumeration values (Since 1.12)
         */
        LAST,
    }

    export namespace InputContentPurpose {
        export const $gtype: GObject.GType<InputContentPurpose>;
    }

    enum InputContentPurpose {
        NORMAL,
        ALPHA,
        DIGITS,
        NUMBER,
        PHONE,
        URL,
        EMAIL,
        NAME,
        PASSWORD,
        DATE,
        TIME,
        DATETIME,
        TERMINAL,
    }

    export namespace InputDevicePadFeature {
        export const $gtype: GObject.GType<InputDevicePadFeature>;
    }

    enum InputDevicePadFeature {
        BUTTON,
        RING,
        STRIP,
    }

    export namespace InputDevicePadSource {
        export const $gtype: GObject.GType<InputDevicePadSource>;
    }

    enum InputDevicePadSource {
        UNKNOWN,
        FINGER,
    }
    /**
     * Defines the type of tool that a #ClutterInputDeviceTool represents.8
     */

    /**
     * Defines the type of tool that a #ClutterInputDeviceTool represents.8
     */
    export namespace InputDeviceToolType {
        export const $gtype: GObject.GType<InputDeviceToolType>;
    }

    enum InputDeviceToolType {
        /**
         * No tool
         */
        NONE,
        /**
         * The tool is a pen
         */
        PEN,
        /**
         * The tool is an eraser
         */
        ERASER,
        /**
         * The tool is a brush
         */
        BRUSH,
        /**
         * The tool is a pencil
         */
        PENCIL,
        /**
         * The tool is an airbrush
         */
        AIRBRUSH,
        /**
         * The tool is a mouse
         */
        MOUSE,
        /**
         * The tool is a lens
         */
        LENS,
    }
    /**
     * The types of input devices available.
     *
     * The #ClutterInputDeviceType enumeration can be extended at later
     * date; not every platform supports every input device type.
     */

    /**
     * The types of input devices available.
     *
     * The #ClutterInputDeviceType enumeration can be extended at later
     * date; not every platform supports every input device type.
     */
    export namespace InputDeviceType {
        export const $gtype: GObject.GType<InputDeviceType>;
    }

    enum InputDeviceType {
        /**
         * A pointer device
         */
        POINTER_DEVICE,
        /**
         * A keyboard device
         */
        KEYBOARD_DEVICE,
        /**
         * A generic extension device
         */
        EXTENSION_DEVICE,
        /**
         * A joystick device
         */
        JOYSTICK_DEVICE,
        /**
         * A tablet device
         */
        TABLET_DEVICE,
        /**
         * A touchpad device
         */
        TOUCHPAD_DEVICE,
        /**
         * A touch screen device
         */
        TOUCHSCREEN_DEVICE,
        /**
         * A pen device
         */
        PEN_DEVICE,
        /**
         * An eraser device
         */
        ERASER_DEVICE,
        /**
         * A cursor device
         */
        CURSOR_DEVICE,
        /**
         * A tablet pad
         */
        PAD_DEVICE,
        /**
         * The number of device types
         */
        N_DEVICE_TYPES,
    }
    /**
     * The mode for input devices available.
     */

    /**
     * The mode for input devices available.
     */
    export namespace InputMode {
        export const $gtype: GObject.GType<InputMode>;
    }

    enum InputMode {
        /**
         * A logical, virtual device
         */
        LOGICAL,
        /**
         * A physical device, attached to
         *   a logical device
         */
        PHYSICAL,
        /**
         * A physical device, not attached
         *   to a logical device
         */
        FLOATING,
    }

    export namespace InputPanelState {
        export const $gtype: GObject.GType<InputPanelState>;
    }

    enum InputPanelState {
        OFF,
        ON,
        TOGGLE,
    }

    export namespace KeyState {
        export const $gtype: GObject.GType<KeyState>;
    }

    enum KeyState {
        RELEASED,
        PRESSED,
    }
    /**
     * The states for the #ClutterClickAction::long-press signal.
     */

    /**
     * The states for the #ClutterClickAction::long-press signal.
     */
    export namespace LongPressState {
        export const $gtype: GObject.GType<LongPressState>;
    }

    enum LongPressState {
        /**
         * Queries the action whether it supports
         *   long presses
         */
        QUERY,
        /**
         * Activates the action on a long press
         */
        ACTIVATE,
        /**
         * The long press was cancelled
         */
        CANCEL,
    }
    /**
     * Represents the orientation of actors or layout managers.
     */

    /**
     * Represents the orientation of actors or layout managers.
     */
    export namespace Orientation {
        export const $gtype: GObject.GType<Orientation>;
    }

    enum Orientation {
        /**
         * An horizontal orientation
         */
        HORIZONTAL,
        /**
         * A vertical orientation
         */
        VERTICAL,
    }
    /**
     * The axis of the constraint that should be applied on the
     * panning action
     */

    /**
     * The axis of the constraint that should be applied on the
     * panning action
     */
    export namespace PanAxis {
        export const $gtype: GObject.GType<PanAxis>;
    }

    enum PanAxis {
        /**
         * No constraint
         */
        AXIS_NONE,
        /**
         * Set a constraint on the X axis
         */
        X_AXIS,
        /**
         * Set a constraint on the Y axis
         */
        Y_AXIS,
        /**
         * Constrain panning automatically based on initial
         *   movement (available since 1.24)
         */
        AXIS_AUTO,
    }
    /**
     * Controls the paint cycle of the scene graph when in pick mode
     */

    /**
     * Controls the paint cycle of the scene graph when in pick mode
     */
    export namespace PickMode {
        export const $gtype: GObject.GType<PickMode>;
    }

    enum PickMode {
        /**
         * Do not paint any actor
         */
        NONE,
        /**
         * Paint only the reactive actors
         */
        REACTIVE,
        /**
         * Paint all actors
         */
        ALL,
    }

    export namespace PipelineCapability {
        export const $gtype: GObject.GType<PipelineCapability>;
    }

    enum PipelineCapability {
        STATE,
    }
    /**
     * Dwell click types.
     */

    /**
     * Dwell click types.
     */
    export namespace PointerA11yDwellClickType {
        export const $gtype: GObject.GType<PointerA11yDwellClickType>;
    }

    enum PointerA11yDwellClickType {
        /**
         * Internal use only
         */
        NONE,
        PRIMARY,
        SECONDARY,
        MIDDLE,
        DOUBLE,
        DRAG,
    }
    /**
     * Dwell gesture directions.
     */

    /**
     * Dwell gesture directions.
     */
    export namespace PointerA11yDwellDirection {
        export const $gtype: GObject.GType<PointerA11yDwellDirection>;
    }

    enum PointerA11yDwellDirection {
        NONE,
        LEFT,
        RIGHT,
        UP,
        DOWN,
    }
    /**
     * Dwell mode.
     */

    /**
     * Dwell mode.
     */
    export namespace PointerA11yDwellMode {
        export const $gtype: GObject.GType<PointerA11yDwellMode>;
    }

    enum PointerA11yDwellMode {
        WINDOW,
        GESTURE,
    }
    /**
     * Pointer accessibility timeout type.
     */

    /**
     * Pointer accessibility timeout type.
     */
    export namespace PointerA11yTimeoutType {
        export const $gtype: GObject.GType<PointerA11yTimeoutType>;
    }

    enum PointerA11yTimeoutType {
        SECONDARY_CLICK,
        DWELL,
        GESTURE,
    }

    export namespace PreeditResetMode {
        export const $gtype: GObject.GType<PreeditResetMode>;
    }

    enum PreeditResetMode {
        CLEAR,
        COMMIT,
    }
    /**
     * Specifies the type of requests for a #ClutterActor.
     */

    /**
     * Specifies the type of requests for a #ClutterActor.
     */
    export namespace RequestMode {
        export const $gtype: GObject.GType<RequestMode>;
    }

    enum RequestMode {
        /**
         * Height for width requests
         */
        HEIGHT_FOR_WIDTH,
        /**
         * Width for height requests
         */
        WIDTH_FOR_HEIGHT,
        /**
         * Use the preferred size of the
         *   #ClutterContent, if it has any (available since 1.22)
         */
        CONTENT_SIZE,
    }
    /**
     * Axis of a rotation.
     */

    /**
     * Axis of a rotation.
     */
    export namespace RotateAxis {
        export const $gtype: GObject.GType<RotateAxis>;
    }

    enum RotateAxis {
        /**
         * Rotate around the X axis
         */
        X_AXIS,
        /**
         * Rotate around the Y axis
         */
        Y_AXIS,
        /**
         * Rotate around the Z axis
         */
        Z_AXIS,
    }
    /**
     * The scaling filters to be used with the [property`Actor:`minification-filter]
     * and [property`Actor:`magnification-filter] properties.
     */

    /**
     * The scaling filters to be used with the [property`Actor:`minification-filter]
     * and [property`Actor:`magnification-filter] properties.
     */
    export namespace ScalingFilter {
        export const $gtype: GObject.GType<ScalingFilter>;
    }

    enum ScalingFilter {
        /**
         * Linear interpolation filter
         */
        LINEAR,
        /**
         * Nearest neighbor interpolation filter
         */
        NEAREST,
        /**
         * Trilinear minification filter, with
         *   mipmap generation; this filter linearly interpolates on every axis,
         *   as well as between mipmap levels.
         */
        TRILINEAR,
    }
    /**
     * Direction of a pointer scroll event.
     *
     * The %CLUTTER_SCROLL_SMOOTH value implies that the #ClutterScrollEvent
     * has precise scrolling delta information.
     */

    /**
     * Direction of a pointer scroll event.
     *
     * The %CLUTTER_SCROLL_SMOOTH value implies that the #ClutterScrollEvent
     * has precise scrolling delta information.
     */
    export namespace ScrollDirection {
        export const $gtype: GObject.GType<ScrollDirection>;
    }

    enum ScrollDirection {
        /**
         * Scroll up
         */
        UP,
        /**
         * Scroll down
         */
        DOWN,
        /**
         * Scroll left
         */
        LEFT,
        /**
         * Scroll right
         */
        RIGHT,
        /**
         * Precise scrolling delta (available in 1.10)
         */
        SMOOTH,
    }
    /**
     * The scroll source determines the source of the scroll event.
     *
     * Keep in mind that the source device #ClutterInputDeviceType is not enough
     * to infer the scroll source.6
     */

    /**
     * The scroll source determines the source of the scroll event.
     *
     * Keep in mind that the source device #ClutterInputDeviceType is not enough
     * to infer the scroll source.6
     */
    export namespace ScrollSource {
        export const $gtype: GObject.GType<ScrollSource>;
    }

    enum ScrollSource {
        /**
         * Source of scroll events is unknown.
         */
        UNKNOWN,
        /**
         * The scroll event is originated by a mouse wheel.
         */
        WHEEL,
        /**
         * The scroll event is originated by one or more
         *   fingers on the device (eg. touchpads).
         */
        FINGER,
        /**
         * The scroll event is originated by the
         *   motion of some device (eg. a scroll button is set).
         */
        CONTINUOUS,
    }
    /**
     * The type of GLSL shader program
     */

    /**
     * The type of GLSL shader program
     */
    export namespace ShaderType {
        export const $gtype: GObject.GType<ShaderType>;
    }

    enum ShaderType {
        /**
         * a vertex shader
         */
        VERTEX_SHADER,
        /**
         * a fragment shader
         */
        FRAGMENT_SHADER,
    }
    /**
     * The edge to snap
     */

    /**
     * The edge to snap
     */
    export namespace SnapEdge {
        export const $gtype: GObject.GType<SnapEdge>;
    }

    enum SnapEdge {
        /**
         * the top edge
         */
        TOP,
        /**
         * the right edge
         */
        RIGHT,
        /**
         * the bottom edge
         */
        BOTTOM,
        /**
         * the left edge
         */
        LEFT,
    }
    /**
     * Change the value transition of a step function.
     *
     * See clutter_timeline_set_step_progress().
     */

    /**
     * Change the value transition of a step function.
     *
     * See clutter_timeline_set_step_progress().
     */
    export namespace StepMode {
        export const $gtype: GObject.GType<StepMode>;
    }

    enum StepMode {
        /**
         * The change in the value of a
         *   %CLUTTER_STEP progress mode should occur at the start of
         *   the transition
         */
        START,
        /**
         * The change in the value of a
         *   %CLUTTER_STEP progress mode should occur at the end of
         *   the transition
         */
        END,
    }
    /**
     * The text direction to be used by [class`Actor]`s
     */

    /**
     * The text direction to be used by [class`Actor]`s
     */
    export namespace TextDirection {
        export const $gtype: GObject.GType<TextDirection>;
    }

    enum TextDirection {
        /**
         * Use the default setting, as returned
         *   by clutter_get_default_text_direction()
         */
        DEFAULT,
        /**
         * Use left-to-right text direction
         */
        LTR,
        /**
         * Use right-to-left text direction
         */
        RTL,
    }
    /**
     * The direction of a #ClutterTimeline
     */

    /**
     * The direction of a #ClutterTimeline
     */
    export namespace TimelineDirection {
        export const $gtype: GObject.GType<TimelineDirection>;
    }

    enum TimelineDirection {
        /**
         * forward direction for a timeline
         */
        FORWARD,
        /**
         * backward direction for a timeline
         */
        BACKWARD,
    }
    /**
     * The phase of a touchpad gesture event.
     *
     * All gestures are guaranteed to begin with an event of type
     * %CLUTTER_TOUCHPAD_GESTURE_PHASE_BEGIN, followed by a number
     * of %CLUTTER_TOUCHPAD_GESTURE_PHASE_UPDATE (possibly 0).
     *
     * A finished gesture may have 2 possible outcomes, an event with phase
     * %CLUTTER_TOUCHPAD_GESTURE_PHASE_END will be emitted when the gesture is
     * considered successful, this should be used as the hint to perform any
     * permanent changes.
     *
     * Cancelled gestures may be so for a variety of reasons, due to hardware,
     * or due to the gesture recognition layers hinting the gesture did not
     * finish resolutely (eg. a 3rd finger being added during a pinch gesture).
     * In these cases, the last event with report the phase
     * %CLUTTER_TOUCHPAD_GESTURE_PHASE_CANCEL, this should be used as a hint
     * to undo any visible/permanent changes that were done throughout the
     * progress of the gesture.
     *
     * See also #ClutterTouchpadPinchEvent and #ClutterTouchpadPinchEvent.4
     */

    /**
     * The phase of a touchpad gesture event.
     *
     * All gestures are guaranteed to begin with an event of type
     * %CLUTTER_TOUCHPAD_GESTURE_PHASE_BEGIN, followed by a number
     * of %CLUTTER_TOUCHPAD_GESTURE_PHASE_UPDATE (possibly 0).
     *
     * A finished gesture may have 2 possible outcomes, an event with phase
     * %CLUTTER_TOUCHPAD_GESTURE_PHASE_END will be emitted when the gesture is
     * considered successful, this should be used as the hint to perform any
     * permanent changes.
     *
     * Cancelled gestures may be so for a variety of reasons, due to hardware,
     * or due to the gesture recognition layers hinting the gesture did not
     * finish resolutely (eg. a 3rd finger being added during a pinch gesture).
     * In these cases, the last event with report the phase
     * %CLUTTER_TOUCHPAD_GESTURE_PHASE_CANCEL, this should be used as a hint
     * to undo any visible/permanent changes that were done throughout the
     * progress of the gesture.
     *
     * See also #ClutterTouchpadPinchEvent and #ClutterTouchpadPinchEvent.4
     */
    export namespace TouchpadGesturePhase {
        export const $gtype: GObject.GType<TouchpadGesturePhase>;
    }

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
     * Colorspace information.
     */

    /**
     * Colorspace information.
     */
    export namespace TransferFunction {
        export const $gtype: GObject.GType<TransferFunction>;
    }

    enum TransferFunction {
        /**
         * Unknown transfer function
         */
        DEFAULT,
        /**
         * The sRGB gamma transfer function
         */
        SRGB,
        /**
         * Perceptual quantizer (PQ)
         */
        PQ,
        /**
         * Linear transfer function
         */
        LINEAR,
    }
    /**
     * The middle button of a pointer device.
     */
    const BUTTON_MIDDLE: number;
    /**
     * The primary button of a pointer device.
     *
     * This is typically the left mouse button in a right-handed
     * mouse configuration.
     */
    const BUTTON_PRIMARY: number;
    /**
     * The secondary button of a pointer device.
     *
     * This is typically the right mouse button in a right-handed
     * mouse configuration.
     */
    const BUTTON_SECONDARY: number;
    const COORDINATE_EPSILON: number;
    /**
     * Default value for "now".
     */
    const CURRENT_TIME: number;
    /**
     * Continues the propagation of an event; this macro should be
     * used in event-related signals.
     */
    const EVENT_PROPAGATE: boolean;
    /**
     * Stops the propagation of an event; this macro should be used
     * in event-related signals.
     */
    const EVENT_STOP: boolean;
    const KEY_0: number;
    const KEY_1: number;
    const KEY_2: number;
    const KEY_3: number;
    const KEY_3270_AltCursor: number;
    const KEY_3270_Attn: number;
    const KEY_3270_BackTab: number;
    const KEY_3270_ChangeScreen: number;
    const KEY_3270_Copy: number;
    const KEY_3270_CursorBlink: number;
    const KEY_3270_CursorSelect: number;
    const KEY_3270_DeleteWord: number;
    const KEY_3270_Duplicate: number;
    const KEY_3270_Enter: number;
    const KEY_3270_EraseEOF: number;
    const KEY_3270_EraseInput: number;
    const KEY_3270_ExSelect: number;
    const KEY_3270_FieldMark: number;
    const KEY_3270_Ident: number;
    const KEY_3270_Jump: number;
    const KEY_3270_KeyClick: number;
    const KEY_3270_Left2: number;
    const KEY_3270_PA1: number;
    const KEY_3270_PA2: number;
    const KEY_3270_PA3: number;
    const KEY_3270_Play: number;
    const KEY_3270_PrintScreen: number;
    const KEY_3270_Quit: number;
    const KEY_3270_Record: number;
    const KEY_3270_Reset: number;
    const KEY_3270_Right2: number;
    const KEY_3270_Rule: number;
    const KEY_3270_Setup: number;
    const KEY_3270_Test: number;
    const KEY_4: number;
    const KEY_5: number;
    const KEY_6: number;
    const KEY_7: number;
    const KEY_8: number;
    const KEY_9: number;
    const KEY_A: number;
    const KEY_AE: number;
    const KEY_Aacute: number;
    const KEY_Abelowdot: number;
    const KEY_Abreve: number;
    const KEY_Abreveacute: number;
    const KEY_Abrevebelowdot: number;
    const KEY_Abrevegrave: number;
    const KEY_Abrevehook: number;
    const KEY_Abrevetilde: number;
    const KEY_AccessX_Enable: number;
    const KEY_AccessX_Feedback_Enable: number;
    const KEY_Acircumflex: number;
    const KEY_Acircumflexacute: number;
    const KEY_Acircumflexbelowdot: number;
    const KEY_Acircumflexgrave: number;
    const KEY_Acircumflexhook: number;
    const KEY_Acircumflextilde: number;
    const KEY_AddFavorite: number;
    const KEY_Adiaeresis: number;
    const KEY_Agrave: number;
    const KEY_Ahook: number;
    const KEY_Alt_L: number;
    const KEY_Alt_R: number;
    const KEY_Amacron: number;
    const KEY_Aogonek: number;
    const KEY_ApplicationLeft: number;
    const KEY_ApplicationRight: number;
    const KEY_Arabic_0: number;
    const KEY_Arabic_1: number;
    const KEY_Arabic_2: number;
    const KEY_Arabic_3: number;
    const KEY_Arabic_4: number;
    const KEY_Arabic_5: number;
    const KEY_Arabic_6: number;
    const KEY_Arabic_7: number;
    const KEY_Arabic_8: number;
    const KEY_Arabic_9: number;
    const KEY_Arabic_ain: number;
    const KEY_Arabic_alef: number;
    const KEY_Arabic_alefmaksura: number;
    const KEY_Arabic_beh: number;
    const KEY_Arabic_comma: number;
    const KEY_Arabic_dad: number;
    const KEY_Arabic_dal: number;
    const KEY_Arabic_damma: number;
    const KEY_Arabic_dammatan: number;
    const KEY_Arabic_ddal: number;
    const KEY_Arabic_farsi_yeh: number;
    const KEY_Arabic_fatha: number;
    const KEY_Arabic_fathatan: number;
    const KEY_Arabic_feh: number;
    const KEY_Arabic_fullstop: number;
    const KEY_Arabic_gaf: number;
    const KEY_Arabic_ghain: number;
    const KEY_Arabic_ha: number;
    const KEY_Arabic_hah: number;
    const KEY_Arabic_hamza: number;
    const KEY_Arabic_hamza_above: number;
    const KEY_Arabic_hamza_below: number;
    const KEY_Arabic_hamzaonalef: number;
    const KEY_Arabic_hamzaonwaw: number;
    const KEY_Arabic_hamzaonyeh: number;
    const KEY_Arabic_hamzaunderalef: number;
    const KEY_Arabic_heh: number;
    const KEY_Arabic_heh_doachashmee: number;
    const KEY_Arabic_heh_goal: number;
    const KEY_Arabic_jeem: number;
    const KEY_Arabic_jeh: number;
    const KEY_Arabic_kaf: number;
    const KEY_Arabic_kasra: number;
    const KEY_Arabic_kasratan: number;
    const KEY_Arabic_keheh: number;
    const KEY_Arabic_khah: number;
    const KEY_Arabic_lam: number;
    const KEY_Arabic_madda_above: number;
    const KEY_Arabic_maddaonalef: number;
    const KEY_Arabic_meem: number;
    const KEY_Arabic_noon: number;
    const KEY_Arabic_noon_ghunna: number;
    const KEY_Arabic_peh: number;
    const KEY_Arabic_percent: number;
    const KEY_Arabic_qaf: number;
    const KEY_Arabic_question_mark: number;
    const KEY_Arabic_ra: number;
    const KEY_Arabic_rreh: number;
    const KEY_Arabic_sad: number;
    const KEY_Arabic_seen: number;
    const KEY_Arabic_semicolon: number;
    const KEY_Arabic_shadda: number;
    const KEY_Arabic_sheen: number;
    const KEY_Arabic_sukun: number;
    const KEY_Arabic_superscript_alef: number;
    const KEY_Arabic_switch: number;
    const KEY_Arabic_tah: number;
    const KEY_Arabic_tatweel: number;
    const KEY_Arabic_tcheh: number;
    const KEY_Arabic_teh: number;
    const KEY_Arabic_tehmarbuta: number;
    const KEY_Arabic_thal: number;
    const KEY_Arabic_theh: number;
    const KEY_Arabic_tteh: number;
    const KEY_Arabic_veh: number;
    const KEY_Arabic_waw: number;
    const KEY_Arabic_yeh: number;
    const KEY_Arabic_yeh_baree: number;
    const KEY_Arabic_zah: number;
    const KEY_Arabic_zain: number;
    const KEY_Aring: number;
    const KEY_Armenian_AT: number;
    const KEY_Armenian_AYB: number;
    const KEY_Armenian_BEN: number;
    const KEY_Armenian_CHA: number;
    const KEY_Armenian_DA: number;
    const KEY_Armenian_DZA: number;
    const KEY_Armenian_E: number;
    const KEY_Armenian_FE: number;
    const KEY_Armenian_GHAT: number;
    const KEY_Armenian_GIM: number;
    const KEY_Armenian_HI: number;
    const KEY_Armenian_HO: number;
    const KEY_Armenian_INI: number;
    const KEY_Armenian_JE: number;
    const KEY_Armenian_KE: number;
    const KEY_Armenian_KEN: number;
    const KEY_Armenian_KHE: number;
    const KEY_Armenian_LYUN: number;
    const KEY_Armenian_MEN: number;
    const KEY_Armenian_NU: number;
    const KEY_Armenian_O: number;
    const KEY_Armenian_PE: number;
    const KEY_Armenian_PYUR: number;
    const KEY_Armenian_RA: number;
    const KEY_Armenian_RE: number;
    const KEY_Armenian_SE: number;
    const KEY_Armenian_SHA: number;
    const KEY_Armenian_TCHE: number;
    const KEY_Armenian_TO: number;
    const KEY_Armenian_TSA: number;
    const KEY_Armenian_TSO: number;
    const KEY_Armenian_TYUN: number;
    const KEY_Armenian_VEV: number;
    const KEY_Armenian_VO: number;
    const KEY_Armenian_VYUN: number;
    const KEY_Armenian_YECH: number;
    const KEY_Armenian_ZA: number;
    const KEY_Armenian_ZHE: number;
    const KEY_Armenian_accent: number;
    const KEY_Armenian_amanak: number;
    const KEY_Armenian_apostrophe: number;
    const KEY_Armenian_at: number;
    const KEY_Armenian_ayb: number;
    const KEY_Armenian_ben: number;
    const KEY_Armenian_but: number;
    const KEY_Armenian_cha: number;
    const KEY_Armenian_da: number;
    const KEY_Armenian_dza: number;
    const KEY_Armenian_e: number;
    const KEY_Armenian_exclam: number;
    const KEY_Armenian_fe: number;
    const KEY_Armenian_full_stop: number;
    const KEY_Armenian_ghat: number;
    const KEY_Armenian_gim: number;
    const KEY_Armenian_hi: number;
    const KEY_Armenian_ho: number;
    const KEY_Armenian_hyphen: number;
    const KEY_Armenian_ini: number;
    const KEY_Armenian_je: number;
    const KEY_Armenian_ke: number;
    const KEY_Armenian_ken: number;
    const KEY_Armenian_khe: number;
    const KEY_Armenian_ligature_ew: number;
    const KEY_Armenian_lyun: number;
    const KEY_Armenian_men: number;
    const KEY_Armenian_nu: number;
    const KEY_Armenian_o: number;
    const KEY_Armenian_paruyk: number;
    const KEY_Armenian_pe: number;
    const KEY_Armenian_pyur: number;
    const KEY_Armenian_question: number;
    const KEY_Armenian_ra: number;
    const KEY_Armenian_re: number;
    const KEY_Armenian_se: number;
    const KEY_Armenian_separation_mark: number;
    const KEY_Armenian_sha: number;
    const KEY_Armenian_shesht: number;
    const KEY_Armenian_tche: number;
    const KEY_Armenian_to: number;
    const KEY_Armenian_tsa: number;
    const KEY_Armenian_tso: number;
    const KEY_Armenian_tyun: number;
    const KEY_Armenian_verjaket: number;
    const KEY_Armenian_vev: number;
    const KEY_Armenian_vo: number;
    const KEY_Armenian_vyun: number;
    const KEY_Armenian_yech: number;
    const KEY_Armenian_yentamna: number;
    const KEY_Armenian_za: number;
    const KEY_Armenian_zhe: number;
    const KEY_Atilde: number;
    const KEY_AudibleBell_Enable: number;
    const KEY_AudioCycleTrack: number;
    const KEY_AudioForward: number;
    const KEY_AudioLowerVolume: number;
    const KEY_AudioMedia: number;
    const KEY_AudioMicMute: number;
    const KEY_AudioMute: number;
    const KEY_AudioNext: number;
    const KEY_AudioPause: number;
    const KEY_AudioPlay: number;
    const KEY_AudioPrev: number;
    const KEY_AudioRaiseVolume: number;
    const KEY_AudioRandomPlay: number;
    const KEY_AudioRecord: number;
    const KEY_AudioRepeat: number;
    const KEY_AudioRewind: number;
    const KEY_AudioStop: number;
    const KEY_Away: number;
    const KEY_B: number;
    const KEY_Babovedot: number;
    const KEY_Back: number;
    const KEY_BackForward: number;
    const KEY_BackSpace: number;
    const KEY_Battery: number;
    const KEY_Begin: number;
    const KEY_Blue: number;
    const KEY_Bluetooth: number;
    const KEY_Book: number;
    const KEY_BounceKeys_Enable: number;
    const KEY_Break: number;
    const KEY_BrightnessAdjust: number;
    const KEY_Byelorussian_SHORTU: number;
    const KEY_Byelorussian_shortu: number;
    const KEY_C: number;
    const KEY_CD: number;
    const KEY_CH: number;
    const KEY_C_H: number;
    const KEY_C_h: number;
    const KEY_Cabovedot: number;
    const KEY_Cacute: number;
    const KEY_Calculator: number;
    const KEY_Calendar: number;
    const KEY_Cancel: number;
    const KEY_Caps_Lock: number;
    const KEY_Ccaron: number;
    const KEY_Ccedilla: number;
    const KEY_Ccircumflex: number;
    const KEY_Ch: number;
    const KEY_Clear: number;
    const KEY_ClearGrab: number;
    const KEY_Close: number;
    const KEY_Codeinput: number;
    const KEY_ColonSign: number;
    const KEY_Community: number;
    const KEY_ContrastAdjust: number;
    const KEY_Control_L: number;
    const KEY_Control_R: number;
    const KEY_Copy: number;
    const KEY_CruzeiroSign: number;
    const KEY_Cut: number;
    const KEY_CycleAngle: number;
    const KEY_Cyrillic_A: number;
    const KEY_Cyrillic_BE: number;
    const KEY_Cyrillic_CHE: number;
    const KEY_Cyrillic_CHE_descender: number;
    const KEY_Cyrillic_CHE_vertstroke: number;
    const KEY_Cyrillic_DE: number;
    const KEY_Cyrillic_DZHE: number;
    const KEY_Cyrillic_E: number;
    const KEY_Cyrillic_EF: number;
    const KEY_Cyrillic_EL: number;
    const KEY_Cyrillic_EM: number;
    const KEY_Cyrillic_EN: number;
    const KEY_Cyrillic_EN_descender: number;
    const KEY_Cyrillic_ER: number;
    const KEY_Cyrillic_ES: number;
    const KEY_Cyrillic_GHE: number;
    const KEY_Cyrillic_GHE_bar: number;
    const KEY_Cyrillic_HA: number;
    const KEY_Cyrillic_HARDSIGN: number;
    const KEY_Cyrillic_HA_descender: number;
    const KEY_Cyrillic_I: number;
    const KEY_Cyrillic_IE: number;
    const KEY_Cyrillic_IO: number;
    const KEY_Cyrillic_I_macron: number;
    const KEY_Cyrillic_JE: number;
    const KEY_Cyrillic_KA: number;
    const KEY_Cyrillic_KA_descender: number;
    const KEY_Cyrillic_KA_vertstroke: number;
    const KEY_Cyrillic_LJE: number;
    const KEY_Cyrillic_NJE: number;
    const KEY_Cyrillic_O: number;
    const KEY_Cyrillic_O_bar: number;
    const KEY_Cyrillic_PE: number;
    const KEY_Cyrillic_SCHWA: number;
    const KEY_Cyrillic_SHA: number;
    const KEY_Cyrillic_SHCHA: number;
    const KEY_Cyrillic_SHHA: number;
    const KEY_Cyrillic_SHORTI: number;
    const KEY_Cyrillic_SOFTSIGN: number;
    const KEY_Cyrillic_TE: number;
    const KEY_Cyrillic_TSE: number;
    const KEY_Cyrillic_U: number;
    const KEY_Cyrillic_U_macron: number;
    const KEY_Cyrillic_U_straight: number;
    const KEY_Cyrillic_U_straight_bar: number;
    const KEY_Cyrillic_VE: number;
    const KEY_Cyrillic_YA: number;
    const KEY_Cyrillic_YERU: number;
    const KEY_Cyrillic_YU: number;
    const KEY_Cyrillic_ZE: number;
    const KEY_Cyrillic_ZHE: number;
    const KEY_Cyrillic_ZHE_descender: number;
    const KEY_Cyrillic_a: number;
    const KEY_Cyrillic_be: number;
    const KEY_Cyrillic_che: number;
    const KEY_Cyrillic_che_descender: number;
    const KEY_Cyrillic_che_vertstroke: number;
    const KEY_Cyrillic_de: number;
    const KEY_Cyrillic_dzhe: number;
    const KEY_Cyrillic_e: number;
    const KEY_Cyrillic_ef: number;
    const KEY_Cyrillic_el: number;
    const KEY_Cyrillic_em: number;
    const KEY_Cyrillic_en: number;
    const KEY_Cyrillic_en_descender: number;
    const KEY_Cyrillic_er: number;
    const KEY_Cyrillic_es: number;
    const KEY_Cyrillic_ghe: number;
    const KEY_Cyrillic_ghe_bar: number;
    const KEY_Cyrillic_ha: number;
    const KEY_Cyrillic_ha_descender: number;
    const KEY_Cyrillic_hardsign: number;
    const KEY_Cyrillic_i: number;
    const KEY_Cyrillic_i_macron: number;
    const KEY_Cyrillic_ie: number;
    const KEY_Cyrillic_io: number;
    const KEY_Cyrillic_je: number;
    const KEY_Cyrillic_ka: number;
    const KEY_Cyrillic_ka_descender: number;
    const KEY_Cyrillic_ka_vertstroke: number;
    const KEY_Cyrillic_lje: number;
    const KEY_Cyrillic_nje: number;
    const KEY_Cyrillic_o: number;
    const KEY_Cyrillic_o_bar: number;
    const KEY_Cyrillic_pe: number;
    const KEY_Cyrillic_schwa: number;
    const KEY_Cyrillic_sha: number;
    const KEY_Cyrillic_shcha: number;
    const KEY_Cyrillic_shha: number;
    const KEY_Cyrillic_shorti: number;
    const KEY_Cyrillic_softsign: number;
    const KEY_Cyrillic_te: number;
    const KEY_Cyrillic_tse: number;
    const KEY_Cyrillic_u: number;
    const KEY_Cyrillic_u_macron: number;
    const KEY_Cyrillic_u_straight: number;
    const KEY_Cyrillic_u_straight_bar: number;
    const KEY_Cyrillic_ve: number;
    const KEY_Cyrillic_ya: number;
    const KEY_Cyrillic_yeru: number;
    const KEY_Cyrillic_yu: number;
    const KEY_Cyrillic_ze: number;
    const KEY_Cyrillic_zhe: number;
    const KEY_Cyrillic_zhe_descender: number;
    const KEY_D: number;
    const KEY_DOS: number;
    const KEY_Dabovedot: number;
    const KEY_Dcaron: number;
    const KEY_Delete: number;
    const KEY_Display: number;
    const KEY_Documents: number;
    const KEY_DongSign: number;
    const KEY_Down: number;
    const KEY_Dstroke: number;
    const KEY_E: number;
    const KEY_ENG: number;
    const KEY_ETH: number;
    const KEY_EZH: number;
    const KEY_Eabovedot: number;
    const KEY_Eacute: number;
    const KEY_Ebelowdot: number;
    const KEY_Ecaron: number;
    const KEY_Ecircumflex: number;
    const KEY_Ecircumflexacute: number;
    const KEY_Ecircumflexbelowdot: number;
    const KEY_Ecircumflexgrave: number;
    const KEY_Ecircumflexhook: number;
    const KEY_Ecircumflextilde: number;
    const KEY_EcuSign: number;
    const KEY_Ediaeresis: number;
    const KEY_Egrave: number;
    const KEY_Ehook: number;
    const KEY_Eisu_Shift: number;
    const KEY_Eisu_toggle: number;
    const KEY_Eject: number;
    const KEY_Emacron: number;
    const KEY_End: number;
    const KEY_Eogonek: number;
    const KEY_Escape: number;
    const KEY_Eth: number;
    const KEY_Etilde: number;
    const KEY_EuroSign: number;
    const KEY_Excel: number;
    const KEY_Execute: number;
    const KEY_Explorer: number;
    const KEY_F: number;
    const KEY_F1: number;
    const KEY_F10: number;
    const KEY_F11: number;
    const KEY_F12: number;
    const KEY_F13: number;
    const KEY_F14: number;
    const KEY_F15: number;
    const KEY_F16: number;
    const KEY_F17: number;
    const KEY_F18: number;
    const KEY_F19: number;
    const KEY_F2: number;
    const KEY_F20: number;
    const KEY_F21: number;
    const KEY_F22: number;
    const KEY_F23: number;
    const KEY_F24: number;
    const KEY_F25: number;
    const KEY_F26: number;
    const KEY_F27: number;
    const KEY_F28: number;
    const KEY_F29: number;
    const KEY_F3: number;
    const KEY_F30: number;
    const KEY_F31: number;
    const KEY_F32: number;
    const KEY_F33: number;
    const KEY_F34: number;
    const KEY_F35: number;
    const KEY_F4: number;
    const KEY_F5: number;
    const KEY_F6: number;
    const KEY_F7: number;
    const KEY_F8: number;
    const KEY_F9: number;
    const KEY_FFrancSign: number;
    const KEY_Fabovedot: number;
    const KEY_Farsi_0: number;
    const KEY_Farsi_1: number;
    const KEY_Farsi_2: number;
    const KEY_Farsi_3: number;
    const KEY_Farsi_4: number;
    const KEY_Farsi_5: number;
    const KEY_Farsi_6: number;
    const KEY_Farsi_7: number;
    const KEY_Farsi_8: number;
    const KEY_Farsi_9: number;
    const KEY_Farsi_yeh: number;
    const KEY_Favorites: number;
    const KEY_Finance: number;
    const KEY_Find: number;
    const KEY_First_Virtual_Screen: number;
    const KEY_Forward: number;
    const KEY_FrameBack: number;
    const KEY_FrameForward: number;
    const KEY_G: number;
    const KEY_Gabovedot: number;
    const KEY_Game: number;
    const KEY_Gbreve: number;
    const KEY_Gcaron: number;
    const KEY_Gcedilla: number;
    const KEY_Gcircumflex: number;
    const KEY_Georgian_an: number;
    const KEY_Georgian_ban: number;
    const KEY_Georgian_can: number;
    const KEY_Georgian_char: number;
    const KEY_Georgian_chin: number;
    const KEY_Georgian_cil: number;
    const KEY_Georgian_don: number;
    const KEY_Georgian_en: number;
    const KEY_Georgian_fi: number;
    const KEY_Georgian_gan: number;
    const KEY_Georgian_ghan: number;
    const KEY_Georgian_hae: number;
    const KEY_Georgian_har: number;
    const KEY_Georgian_he: number;
    const KEY_Georgian_hie: number;
    const KEY_Georgian_hoe: number;
    const KEY_Georgian_in: number;
    const KEY_Georgian_jhan: number;
    const KEY_Georgian_jil: number;
    const KEY_Georgian_kan: number;
    const KEY_Georgian_khar: number;
    const KEY_Georgian_las: number;
    const KEY_Georgian_man: number;
    const KEY_Georgian_nar: number;
    const KEY_Georgian_on: number;
    const KEY_Georgian_par: number;
    const KEY_Georgian_phar: number;
    const KEY_Georgian_qar: number;
    const KEY_Georgian_rae: number;
    const KEY_Georgian_san: number;
    const KEY_Georgian_shin: number;
    const KEY_Georgian_tan: number;
    const KEY_Georgian_tar: number;
    const KEY_Georgian_un: number;
    const KEY_Georgian_vin: number;
    const KEY_Georgian_we: number;
    const KEY_Georgian_xan: number;
    const KEY_Georgian_zen: number;
    const KEY_Georgian_zhar: number;
    const KEY_Go: number;
    const KEY_Greek_ALPHA: number;
    const KEY_Greek_ALPHAaccent: number;
    const KEY_Greek_BETA: number;
    const KEY_Greek_CHI: number;
    const KEY_Greek_DELTA: number;
    const KEY_Greek_EPSILON: number;
    const KEY_Greek_EPSILONaccent: number;
    const KEY_Greek_ETA: number;
    const KEY_Greek_ETAaccent: number;
    const KEY_Greek_GAMMA: number;
    const KEY_Greek_IOTA: number;
    const KEY_Greek_IOTAaccent: number;
    const KEY_Greek_IOTAdiaeresis: number;
    const KEY_Greek_IOTAdieresis: number;
    const KEY_Greek_KAPPA: number;
    const KEY_Greek_LAMBDA: number;
    const KEY_Greek_LAMDA: number;
    const KEY_Greek_MU: number;
    const KEY_Greek_NU: number;
    const KEY_Greek_OMEGA: number;
    const KEY_Greek_OMEGAaccent: number;
    const KEY_Greek_OMICRON: number;
    const KEY_Greek_OMICRONaccent: number;
    const KEY_Greek_PHI: number;
    const KEY_Greek_PI: number;
    const KEY_Greek_PSI: number;
    const KEY_Greek_RHO: number;
    const KEY_Greek_SIGMA: number;
    const KEY_Greek_TAU: number;
    const KEY_Greek_THETA: number;
    const KEY_Greek_UPSILON: number;
    const KEY_Greek_UPSILONaccent: number;
    const KEY_Greek_UPSILONdieresis: number;
    const KEY_Greek_XI: number;
    const KEY_Greek_ZETA: number;
    const KEY_Greek_accentdieresis: number;
    const KEY_Greek_alpha: number;
    const KEY_Greek_alphaaccent: number;
    const KEY_Greek_beta: number;
    const KEY_Greek_chi: number;
    const KEY_Greek_delta: number;
    const KEY_Greek_epsilon: number;
    const KEY_Greek_epsilonaccent: number;
    const KEY_Greek_eta: number;
    const KEY_Greek_etaaccent: number;
    const KEY_Greek_finalsmallsigma: number;
    const KEY_Greek_gamma: number;
    const KEY_Greek_horizbar: number;
    const KEY_Greek_iota: number;
    const KEY_Greek_iotaaccent: number;
    const KEY_Greek_iotaaccentdieresis: number;
    const KEY_Greek_iotadieresis: number;
    const KEY_Greek_kappa: number;
    const KEY_Greek_lambda: number;
    const KEY_Greek_lamda: number;
    const KEY_Greek_mu: number;
    const KEY_Greek_nu: number;
    const KEY_Greek_omega: number;
    const KEY_Greek_omegaaccent: number;
    const KEY_Greek_omicron: number;
    const KEY_Greek_omicronaccent: number;
    const KEY_Greek_phi: number;
    const KEY_Greek_pi: number;
    const KEY_Greek_psi: number;
    const KEY_Greek_rho: number;
    const KEY_Greek_sigma: number;
    const KEY_Greek_switch: number;
    const KEY_Greek_tau: number;
    const KEY_Greek_theta: number;
    const KEY_Greek_upsilon: number;
    const KEY_Greek_upsilonaccent: number;
    const KEY_Greek_upsilonaccentdieresis: number;
    const KEY_Greek_upsilondieresis: number;
    const KEY_Greek_xi: number;
    const KEY_Greek_zeta: number;
    const KEY_Green: number;
    const KEY_H: number;
    const KEY_Hangul: number;
    const KEY_Hangul_A: number;
    const KEY_Hangul_AE: number;
    const KEY_Hangul_AraeA: number;
    const KEY_Hangul_AraeAE: number;
    const KEY_Hangul_Banja: number;
    const KEY_Hangul_Cieuc: number;
    const KEY_Hangul_Codeinput: number;
    const KEY_Hangul_Dikeud: number;
    const KEY_Hangul_E: number;
    const KEY_Hangul_EO: number;
    const KEY_Hangul_EU: number;
    const KEY_Hangul_End: number;
    const KEY_Hangul_Hanja: number;
    const KEY_Hangul_Hieuh: number;
    const KEY_Hangul_I: number;
    const KEY_Hangul_Ieung: number;
    const KEY_Hangul_J_Cieuc: number;
    const KEY_Hangul_J_Dikeud: number;
    const KEY_Hangul_J_Hieuh: number;
    const KEY_Hangul_J_Ieung: number;
    const KEY_Hangul_J_Jieuj: number;
    const KEY_Hangul_J_Khieuq: number;
    const KEY_Hangul_J_Kiyeog: number;
    const KEY_Hangul_J_KiyeogSios: number;
    const KEY_Hangul_J_KkogjiDalrinIeung: number;
    const KEY_Hangul_J_Mieum: number;
    const KEY_Hangul_J_Nieun: number;
    const KEY_Hangul_J_NieunHieuh: number;
    const KEY_Hangul_J_NieunJieuj: number;
    const KEY_Hangul_J_PanSios: number;
    const KEY_Hangul_J_Phieuf: number;
    const KEY_Hangul_J_Pieub: number;
    const KEY_Hangul_J_PieubSios: number;
    const KEY_Hangul_J_Rieul: number;
    const KEY_Hangul_J_RieulHieuh: number;
    const KEY_Hangul_J_RieulKiyeog: number;
    const KEY_Hangul_J_RieulMieum: number;
    const KEY_Hangul_J_RieulPhieuf: number;
    const KEY_Hangul_J_RieulPieub: number;
    const KEY_Hangul_J_RieulSios: number;
    const KEY_Hangul_J_RieulTieut: number;
    const KEY_Hangul_J_Sios: number;
    const KEY_Hangul_J_SsangKiyeog: number;
    const KEY_Hangul_J_SsangSios: number;
    const KEY_Hangul_J_Tieut: number;
    const KEY_Hangul_J_YeorinHieuh: number;
    const KEY_Hangul_Jamo: number;
    const KEY_Hangul_Jeonja: number;
    const KEY_Hangul_Jieuj: number;
    const KEY_Hangul_Khieuq: number;
    const KEY_Hangul_Kiyeog: number;
    const KEY_Hangul_KiyeogSios: number;
    const KEY_Hangul_KkogjiDalrinIeung: number;
    const KEY_Hangul_Mieum: number;
    const KEY_Hangul_MultipleCandidate: number;
    const KEY_Hangul_Nieun: number;
    const KEY_Hangul_NieunHieuh: number;
    const KEY_Hangul_NieunJieuj: number;
    const KEY_Hangul_O: number;
    const KEY_Hangul_OE: number;
    const KEY_Hangul_PanSios: number;
    const KEY_Hangul_Phieuf: number;
    const KEY_Hangul_Pieub: number;
    const KEY_Hangul_PieubSios: number;
    const KEY_Hangul_PostHanja: number;
    const KEY_Hangul_PreHanja: number;
    const KEY_Hangul_PreviousCandidate: number;
    const KEY_Hangul_Rieul: number;
    const KEY_Hangul_RieulHieuh: number;
    const KEY_Hangul_RieulKiyeog: number;
    const KEY_Hangul_RieulMieum: number;
    const KEY_Hangul_RieulPhieuf: number;
    const KEY_Hangul_RieulPieub: number;
    const KEY_Hangul_RieulSios: number;
    const KEY_Hangul_RieulTieut: number;
    const KEY_Hangul_RieulYeorinHieuh: number;
    const KEY_Hangul_Romaja: number;
    const KEY_Hangul_SingleCandidate: number;
    const KEY_Hangul_Sios: number;
    const KEY_Hangul_Special: number;
    const KEY_Hangul_SsangDikeud: number;
    const KEY_Hangul_SsangJieuj: number;
    const KEY_Hangul_SsangKiyeog: number;
    const KEY_Hangul_SsangPieub: number;
    const KEY_Hangul_SsangSios: number;
    const KEY_Hangul_Start: number;
    const KEY_Hangul_SunkyeongeumMieum: number;
    const KEY_Hangul_SunkyeongeumPhieuf: number;
    const KEY_Hangul_SunkyeongeumPieub: number;
    const KEY_Hangul_Tieut: number;
    const KEY_Hangul_U: number;
    const KEY_Hangul_WA: number;
    const KEY_Hangul_WAE: number;
    const KEY_Hangul_WE: number;
    const KEY_Hangul_WEO: number;
    const KEY_Hangul_WI: number;
    const KEY_Hangul_YA: number;
    const KEY_Hangul_YAE: number;
    const KEY_Hangul_YE: number;
    const KEY_Hangul_YEO: number;
    const KEY_Hangul_YI: number;
    const KEY_Hangul_YO: number;
    const KEY_Hangul_YU: number;
    const KEY_Hangul_YeorinHieuh: number;
    const KEY_Hangul_switch: number;
    const KEY_Hankaku: number;
    const KEY_Hcircumflex: number;
    const KEY_Hebrew_switch: number;
    const KEY_Help: number;
    const KEY_Henkan: number;
    const KEY_Henkan_Mode: number;
    const KEY_Hibernate: number;
    const KEY_Hiragana: number;
    const KEY_Hiragana_Katakana: number;
    const KEY_History: number;
    const KEY_Home: number;
    const KEY_HomePage: number;
    const KEY_HotLinks: number;
    const KEY_Hstroke: number;
    const KEY_Hyper_L: number;
    const KEY_Hyper_R: number;
    const KEY_I: number;
    const KEY_ISO_Center_Object: number;
    const KEY_ISO_Continuous_Underline: number;
    const KEY_ISO_Discontinuous_Underline: number;
    const KEY_ISO_Emphasize: number;
    const KEY_ISO_Enter: number;
    const KEY_ISO_Fast_Cursor_Down: number;
    const KEY_ISO_Fast_Cursor_Left: number;
    const KEY_ISO_Fast_Cursor_Right: number;
    const KEY_ISO_Fast_Cursor_Up: number;
    const KEY_ISO_First_Group: number;
    const KEY_ISO_First_Group_Lock: number;
    const KEY_ISO_Group_Latch: number;
    const KEY_ISO_Group_Lock: number;
    const KEY_ISO_Group_Shift: number;
    const KEY_ISO_Last_Group: number;
    const KEY_ISO_Last_Group_Lock: number;
    const KEY_ISO_Left_Tab: number;
    const KEY_ISO_Level2_Latch: number;
    const KEY_ISO_Level3_Latch: number;
    const KEY_ISO_Level3_Lock: number;
    const KEY_ISO_Level3_Shift: number;
    const KEY_ISO_Level5_Latch: number;
    const KEY_ISO_Level5_Lock: number;
    const KEY_ISO_Level5_Shift: number;
    const KEY_ISO_Lock: number;
    const KEY_ISO_Move_Line_Down: number;
    const KEY_ISO_Move_Line_Up: number;
    const KEY_ISO_Next_Group: number;
    const KEY_ISO_Next_Group_Lock: number;
    const KEY_ISO_Partial_Line_Down: number;
    const KEY_ISO_Partial_Line_Up: number;
    const KEY_ISO_Partial_Space_Left: number;
    const KEY_ISO_Partial_Space_Right: number;
    const KEY_ISO_Prev_Group: number;
    const KEY_ISO_Prev_Group_Lock: number;
    const KEY_ISO_Release_Both_Margins: number;
    const KEY_ISO_Release_Margin_Left: number;
    const KEY_ISO_Release_Margin_Right: number;
    const KEY_ISO_Set_Margin_Left: number;
    const KEY_ISO_Set_Margin_Right: number;
    const KEY_Iabovedot: number;
    const KEY_Iacute: number;
    const KEY_Ibelowdot: number;
    const KEY_Ibreve: number;
    const KEY_Icircumflex: number;
    const KEY_Idiaeresis: number;
    const KEY_Igrave: number;
    const KEY_Ihook: number;
    const KEY_Imacron: number;
    const KEY_Insert: number;
    const KEY_Iogonek: number;
    const KEY_Itilde: number;
    const KEY_J: number;
    const KEY_Jcircumflex: number;
    const KEY_K: number;
    const KEY_KP_0: number;
    const KEY_KP_1: number;
    const KEY_KP_2: number;
    const KEY_KP_3: number;
    const KEY_KP_4: number;
    const KEY_KP_5: number;
    const KEY_KP_6: number;
    const KEY_KP_7: number;
    const KEY_KP_8: number;
    const KEY_KP_9: number;
    const KEY_KP_Add: number;
    const KEY_KP_Begin: number;
    const KEY_KP_Decimal: number;
    const KEY_KP_Delete: number;
    const KEY_KP_Divide: number;
    const KEY_KP_Down: number;
    const KEY_KP_End: number;
    const KEY_KP_Enter: number;
    const KEY_KP_Equal: number;
    const KEY_KP_F1: number;
    const KEY_KP_F2: number;
    const KEY_KP_F3: number;
    const KEY_KP_F4: number;
    const KEY_KP_Home: number;
    const KEY_KP_Insert: number;
    const KEY_KP_Left: number;
    const KEY_KP_Multiply: number;
    const KEY_KP_Next: number;
    const KEY_KP_Page_Down: number;
    const KEY_KP_Page_Up: number;
    const KEY_KP_Prior: number;
    const KEY_KP_Right: number;
    const KEY_KP_Separator: number;
    const KEY_KP_Space: number;
    const KEY_KP_Subtract: number;
    const KEY_KP_Tab: number;
    const KEY_KP_Up: number;
    const KEY_Kana_Lock: number;
    const KEY_Kana_Shift: number;
    const KEY_Kanji: number;
    const KEY_Kanji_Bangou: number;
    const KEY_Katakana: number;
    const KEY_KbdBrightnessDown: number;
    const KEY_KbdBrightnessUp: number;
    const KEY_KbdLightOnOff: number;
    const KEY_Kcedilla: number;
    const KEY_Korean_Won: number;
    const KEY_L: number;
    const KEY_L1: number;
    const KEY_L10: number;
    const KEY_L2: number;
    const KEY_L3: number;
    const KEY_L4: number;
    const KEY_L5: number;
    const KEY_L6: number;
    const KEY_L7: number;
    const KEY_L8: number;
    const KEY_L9: number;
    const KEY_Lacute: number;
    const KEY_Last_Virtual_Screen: number;
    const KEY_Launch0: number;
    const KEY_Launch1: number;
    const KEY_Launch2: number;
    const KEY_Launch3: number;
    const KEY_Launch4: number;
    const KEY_Launch5: number;
    const KEY_Launch6: number;
    const KEY_Launch7: number;
    const KEY_Launch8: number;
    const KEY_Launch9: number;
    const KEY_LaunchA: number;
    const KEY_LaunchB: number;
    const KEY_LaunchC: number;
    const KEY_LaunchD: number;
    const KEY_LaunchE: number;
    const KEY_LaunchF: number;
    const KEY_Lbelowdot: number;
    const KEY_Lcaron: number;
    const KEY_Lcedilla: number;
    const KEY_Left: number;
    const KEY_LightBulb: number;
    const KEY_Linefeed: number;
    const KEY_LiraSign: number;
    const KEY_LogGrabInfo: number;
    const KEY_LogOff: number;
    const KEY_LogWindowTree: number;
    const KEY_Lstroke: number;
    const KEY_M: number;
    const KEY_Mabovedot: number;
    const KEY_Macedonia_DSE: number;
    const KEY_Macedonia_GJE: number;
    const KEY_Macedonia_KJE: number;
    const KEY_Macedonia_dse: number;
    const KEY_Macedonia_gje: number;
    const KEY_Macedonia_kje: number;
    const KEY_Mae_Koho: number;
    const KEY_Mail: number;
    const KEY_MailForward: number;
    const KEY_Market: number;
    const KEY_Massyo: number;
    const KEY_Meeting: number;
    const KEY_Memo: number;
    const KEY_Menu: number;
    const KEY_MenuKB: number;
    const KEY_MenuPB: number;
    const KEY_Messenger: number;
    const KEY_Meta_L: number;
    const KEY_Meta_R: number;
    const KEY_MillSign: number;
    const KEY_ModeLock: number;
    const KEY_Mode_switch: number;
    const KEY_MonBrightnessDown: number;
    const KEY_MonBrightnessUp: number;
    const KEY_MouseKeys_Accel_Enable: number;
    const KEY_MouseKeys_Enable: number;
    const KEY_Muhenkan: number;
    const KEY_Multi_key: number;
    const KEY_MultipleCandidate: number;
    const KEY_Music: number;
    const KEY_MyComputer: number;
    const KEY_MySites: number;
    const KEY_N: number;
    const KEY_Nacute: number;
    const KEY_NairaSign: number;
    const KEY_Ncaron: number;
    const KEY_Ncedilla: number;
    const KEY_New: number;
    const KEY_NewSheqelSign: number;
    const KEY_News: number;
    const KEY_Next: number;
    const KEY_Next_VMode: number;
    const KEY_Next_Virtual_Screen: number;
    const KEY_Ntilde: number;
    const KEY_Num_Lock: number;
    const KEY_O: number;
    const KEY_OE: number;
    const KEY_Oacute: number;
    const KEY_Obarred: number;
    const KEY_Obelowdot: number;
    const KEY_Ocaron: number;
    const KEY_Ocircumflex: number;
    const KEY_Ocircumflexacute: number;
    const KEY_Ocircumflexbelowdot: number;
    const KEY_Ocircumflexgrave: number;
    const KEY_Ocircumflexhook: number;
    const KEY_Ocircumflextilde: number;
    const KEY_Odiaeresis: number;
    const KEY_Odoubleacute: number;
    const KEY_OfficeHome: number;
    const KEY_Ograve: number;
    const KEY_Ohook: number;
    const KEY_Ohorn: number;
    const KEY_Ohornacute: number;
    const KEY_Ohornbelowdot: number;
    const KEY_Ohorngrave: number;
    const KEY_Ohornhook: number;
    const KEY_Ohorntilde: number;
    const KEY_Omacron: number;
    const KEY_Ooblique: number;
    const KEY_Open: number;
    const KEY_OpenURL: number;
    const KEY_Option: number;
    const KEY_Oslash: number;
    const KEY_Otilde: number;
    const KEY_Overlay1_Enable: number;
    const KEY_Overlay2_Enable: number;
    const KEY_P: number;
    const KEY_Pabovedot: number;
    const KEY_Page_Down: number;
    const KEY_Page_Up: number;
    const KEY_Paste: number;
    const KEY_Pause: number;
    const KEY_PesetaSign: number;
    const KEY_Phone: number;
    const KEY_Pictures: number;
    const KEY_Pointer_Accelerate: number;
    const KEY_Pointer_Button1: number;
    const KEY_Pointer_Button2: number;
    const KEY_Pointer_Button3: number;
    const KEY_Pointer_Button4: number;
    const KEY_Pointer_Button5: number;
    const KEY_Pointer_Button_Dflt: number;
    const KEY_Pointer_DblClick1: number;
    const KEY_Pointer_DblClick2: number;
    const KEY_Pointer_DblClick3: number;
    const KEY_Pointer_DblClick4: number;
    const KEY_Pointer_DblClick5: number;
    const KEY_Pointer_DblClick_Dflt: number;
    const KEY_Pointer_DfltBtnNext: number;
    const KEY_Pointer_DfltBtnPrev: number;
    const KEY_Pointer_Down: number;
    const KEY_Pointer_DownLeft: number;
    const KEY_Pointer_DownRight: number;
    const KEY_Pointer_Drag1: number;
    const KEY_Pointer_Drag2: number;
    const KEY_Pointer_Drag3: number;
    const KEY_Pointer_Drag4: number;
    const KEY_Pointer_Drag5: number;
    const KEY_Pointer_Drag_Dflt: number;
    const KEY_Pointer_EnableKeys: number;
    const KEY_Pointer_Left: number;
    const KEY_Pointer_Right: number;
    const KEY_Pointer_Up: number;
    const KEY_Pointer_UpLeft: number;
    const KEY_Pointer_UpRight: number;
    const KEY_PowerDown: number;
    const KEY_PowerOff: number;
    const KEY_Prev_VMode: number;
    const KEY_Prev_Virtual_Screen: number;
    const KEY_PreviousCandidate: number;
    const KEY_Print: number;
    const KEY_Prior: number;
    const KEY_Q: number;
    const KEY_R: number;
    const KEY_R1: number;
    const KEY_R10: number;
    const KEY_R11: number;
    const KEY_R12: number;
    const KEY_R13: number;
    const KEY_R14: number;
    const KEY_R15: number;
    const KEY_R2: number;
    const KEY_R3: number;
    const KEY_R4: number;
    const KEY_R5: number;
    const KEY_R6: number;
    const KEY_R7: number;
    const KEY_R8: number;
    const KEY_R9: number;
    const KEY_Racute: number;
    const KEY_Rcaron: number;
    const KEY_Rcedilla: number;
    const KEY_Red: number;
    const KEY_Redo: number;
    const KEY_Refresh: number;
    const KEY_Reload: number;
    const KEY_RepeatKeys_Enable: number;
    const KEY_Reply: number;
    const KEY_Return: number;
    const KEY_Right: number;
    const KEY_RockerDown: number;
    const KEY_RockerEnter: number;
    const KEY_RockerUp: number;
    const KEY_Romaji: number;
    const KEY_RotateWindows: number;
    const KEY_RotationKB: number;
    const KEY_RotationPB: number;
    const KEY_RupeeSign: number;
    const KEY_S: number;
    const KEY_SCHWA: number;
    const KEY_Sabovedot: number;
    const KEY_Sacute: number;
    const KEY_Save: number;
    const KEY_Scaron: number;
    const KEY_Scedilla: number;
    const KEY_Scircumflex: number;
    const KEY_ScreenSaver: number;
    const KEY_ScrollClick: number;
    const KEY_ScrollDown: number;
    const KEY_ScrollUp: number;
    const KEY_Scroll_Lock: number;
    const KEY_Search: number;
    const KEY_Select: number;
    const KEY_SelectButton: number;
    const KEY_Send: number;
    const KEY_Serbian_DJE: number;
    const KEY_Serbian_DZE: number;
    const KEY_Serbian_JE: number;
    const KEY_Serbian_LJE: number;
    const KEY_Serbian_NJE: number;
    const KEY_Serbian_TSHE: number;
    const KEY_Serbian_dje: number;
    const KEY_Serbian_dze: number;
    const KEY_Serbian_je: number;
    const KEY_Serbian_lje: number;
    const KEY_Serbian_nje: number;
    const KEY_Serbian_tshe: number;
    const KEY_Shift_L: number;
    const KEY_Shift_Lock: number;
    const KEY_Shift_R: number;
    const KEY_Shop: number;
    const KEY_SingleCandidate: number;
    const KEY_Sinh_a: number;
    const KEY_Sinh_aa: number;
    const KEY_Sinh_aa2: number;
    const KEY_Sinh_ae: number;
    const KEY_Sinh_ae2: number;
    const KEY_Sinh_aee: number;
    const KEY_Sinh_aee2: number;
    const KEY_Sinh_ai: number;
    const KEY_Sinh_ai2: number;
    const KEY_Sinh_al: number;
    const KEY_Sinh_au: number;
    const KEY_Sinh_au2: number;
    const KEY_Sinh_ba: number;
    const KEY_Sinh_bha: number;
    const KEY_Sinh_ca: number;
    const KEY_Sinh_cha: number;
    const KEY_Sinh_dda: number;
    const KEY_Sinh_ddha: number;
    const KEY_Sinh_dha: number;
    const KEY_Sinh_dhha: number;
    const KEY_Sinh_e: number;
    const KEY_Sinh_e2: number;
    const KEY_Sinh_ee: number;
    const KEY_Sinh_ee2: number;
    const KEY_Sinh_fa: number;
    const KEY_Sinh_ga: number;
    const KEY_Sinh_gha: number;
    const KEY_Sinh_h2: number;
    const KEY_Sinh_ha: number;
    const KEY_Sinh_i: number;
    const KEY_Sinh_i2: number;
    const KEY_Sinh_ii: number;
    const KEY_Sinh_ii2: number;
    const KEY_Sinh_ja: number;
    const KEY_Sinh_jha: number;
    const KEY_Sinh_jnya: number;
    const KEY_Sinh_ka: number;
    const KEY_Sinh_kha: number;
    const KEY_Sinh_kunddaliya: number;
    const KEY_Sinh_la: number;
    const KEY_Sinh_lla: number;
    const KEY_Sinh_lu: number;
    const KEY_Sinh_lu2: number;
    const KEY_Sinh_luu: number;
    const KEY_Sinh_luu2: number;
    const KEY_Sinh_ma: number;
    const KEY_Sinh_mba: number;
    const KEY_Sinh_na: number;
    const KEY_Sinh_ndda: number;
    const KEY_Sinh_ndha: number;
    const KEY_Sinh_ng: number;
    const KEY_Sinh_ng2: number;
    const KEY_Sinh_nga: number;
    const KEY_Sinh_nja: number;
    const KEY_Sinh_nna: number;
    const KEY_Sinh_nya: number;
    const KEY_Sinh_o: number;
    const KEY_Sinh_o2: number;
    const KEY_Sinh_oo: number;
    const KEY_Sinh_oo2: number;
    const KEY_Sinh_pa: number;
    const KEY_Sinh_pha: number;
    const KEY_Sinh_ra: number;
    const KEY_Sinh_ri: number;
    const KEY_Sinh_rii: number;
    const KEY_Sinh_ru2: number;
    const KEY_Sinh_ruu2: number;
    const KEY_Sinh_sa: number;
    const KEY_Sinh_sha: number;
    const KEY_Sinh_ssha: number;
    const KEY_Sinh_tha: number;
    const KEY_Sinh_thha: number;
    const KEY_Sinh_tta: number;
    const KEY_Sinh_ttha: number;
    const KEY_Sinh_u: number;
    const KEY_Sinh_u2: number;
    const KEY_Sinh_uu: number;
    const KEY_Sinh_uu2: number;
    const KEY_Sinh_va: number;
    const KEY_Sinh_ya: number;
    const KEY_Sleep: number;
    const KEY_SlowKeys_Enable: number;
    const KEY_Spell: number;
    const KEY_SplitScreen: number;
    const KEY_Standby: number;
    const KEY_Start: number;
    const KEY_StickyKeys_Enable: number;
    const KEY_Stop: number;
    const KEY_Subtitle: number;
    const KEY_Super_L: number;
    const KEY_Super_R: number;
    const KEY_Support: number;
    const KEY_Suspend: number;
    const KEY_Switch_VT_1: number;
    const KEY_Switch_VT_10: number;
    const KEY_Switch_VT_11: number;
    const KEY_Switch_VT_12: number;
    const KEY_Switch_VT_2: number;
    const KEY_Switch_VT_3: number;
    const KEY_Switch_VT_4: number;
    const KEY_Switch_VT_5: number;
    const KEY_Switch_VT_6: number;
    const KEY_Switch_VT_7: number;
    const KEY_Switch_VT_8: number;
    const KEY_Switch_VT_9: number;
    const KEY_Sys_Req: number;
    const KEY_T: number;
    const KEY_THORN: number;
    const KEY_Tab: number;
    const KEY_Tabovedot: number;
    const KEY_TaskPane: number;
    const KEY_Tcaron: number;
    const KEY_Tcedilla: number;
    const KEY_Terminal: number;
    const KEY_Terminate_Server: number;
    const KEY_Thai_baht: number;
    const KEY_Thai_bobaimai: number;
    const KEY_Thai_chochan: number;
    const KEY_Thai_chochang: number;
    const KEY_Thai_choching: number;
    const KEY_Thai_chochoe: number;
    const KEY_Thai_dochada: number;
    const KEY_Thai_dodek: number;
    const KEY_Thai_fofa: number;
    const KEY_Thai_fofan: number;
    const KEY_Thai_hohip: number;
    const KEY_Thai_honokhuk: number;
    const KEY_Thai_khokhai: number;
    const KEY_Thai_khokhon: number;
    const KEY_Thai_khokhuat: number;
    const KEY_Thai_khokhwai: number;
    const KEY_Thai_khorakhang: number;
    const KEY_Thai_kokai: number;
    const KEY_Thai_lakkhangyao: number;
    const KEY_Thai_lekchet: number;
    const KEY_Thai_lekha: number;
    const KEY_Thai_lekhok: number;
    const KEY_Thai_lekkao: number;
    const KEY_Thai_leknung: number;
    const KEY_Thai_lekpaet: number;
    const KEY_Thai_leksam: number;
    const KEY_Thai_leksi: number;
    const KEY_Thai_leksong: number;
    const KEY_Thai_leksun: number;
    const KEY_Thai_lochula: number;
    const KEY_Thai_loling: number;
    const KEY_Thai_lu: number;
    const KEY_Thai_maichattawa: number;
    const KEY_Thai_maiek: number;
    const KEY_Thai_maihanakat: number;
    const KEY_Thai_maihanakat_maitho: number;
    const KEY_Thai_maitaikhu: number;
    const KEY_Thai_maitho: number;
    const KEY_Thai_maitri: number;
    const KEY_Thai_maiyamok: number;
    const KEY_Thai_moma: number;
    const KEY_Thai_ngongu: number;
    const KEY_Thai_nikhahit: number;
    const KEY_Thai_nonen: number;
    const KEY_Thai_nonu: number;
    const KEY_Thai_oang: number;
    const KEY_Thai_paiyannoi: number;
    const KEY_Thai_phinthu: number;
    const KEY_Thai_phophan: number;
    const KEY_Thai_phophung: number;
    const KEY_Thai_phosamphao: number;
    const KEY_Thai_popla: number;
    const KEY_Thai_rorua: number;
    const KEY_Thai_ru: number;
    const KEY_Thai_saraa: number;
    const KEY_Thai_saraaa: number;
    const KEY_Thai_saraae: number;
    const KEY_Thai_saraaimaimalai: number;
    const KEY_Thai_saraaimaimuan: number;
    const KEY_Thai_saraam: number;
    const KEY_Thai_sarae: number;
    const KEY_Thai_sarai: number;
    const KEY_Thai_saraii: number;
    const KEY_Thai_sarao: number;
    const KEY_Thai_sarau: number;
    const KEY_Thai_saraue: number;
    const KEY_Thai_sarauee: number;
    const KEY_Thai_sarauu: number;
    const KEY_Thai_sorusi: number;
    const KEY_Thai_sosala: number;
    const KEY_Thai_soso: number;
    const KEY_Thai_sosua: number;
    const KEY_Thai_thanthakhat: number;
    const KEY_Thai_thonangmontho: number;
    const KEY_Thai_thophuthao: number;
    const KEY_Thai_thothahan: number;
    const KEY_Thai_thothan: number;
    const KEY_Thai_thothong: number;
    const KEY_Thai_thothung: number;
    const KEY_Thai_topatak: number;
    const KEY_Thai_totao: number;
    const KEY_Thai_wowaen: number;
    const KEY_Thai_yoyak: number;
    const KEY_Thai_yoying: number;
    const KEY_Thorn: number;
    const KEY_Time: number;
    const KEY_ToDoList: number;
    const KEY_Tools: number;
    const KEY_TopMenu: number;
    const KEY_TouchpadOff: number;
    const KEY_TouchpadOn: number;
    const KEY_TouchpadToggle: number;
    const KEY_Touroku: number;
    const KEY_Travel: number;
    const KEY_Tslash: number;
    const KEY_U: number;
    const KEY_UWB: number;
    const KEY_Uacute: number;
    const KEY_Ubelowdot: number;
    const KEY_Ubreve: number;
    const KEY_Ucircumflex: number;
    const KEY_Udiaeresis: number;
    const KEY_Udoubleacute: number;
    const KEY_Ugrave: number;
    const KEY_Uhook: number;
    const KEY_Uhorn: number;
    const KEY_Uhornacute: number;
    const KEY_Uhornbelowdot: number;
    const KEY_Uhorngrave: number;
    const KEY_Uhornhook: number;
    const KEY_Uhorntilde: number;
    const KEY_Ukrainian_GHE_WITH_UPTURN: number;
    const KEY_Ukrainian_I: number;
    const KEY_Ukrainian_IE: number;
    const KEY_Ukrainian_YI: number;
    const KEY_Ukrainian_ghe_with_upturn: number;
    const KEY_Ukrainian_i: number;
    const KEY_Ukrainian_ie: number;
    const KEY_Ukrainian_yi: number;
    const KEY_Ukranian_I: number;
    const KEY_Ukranian_JE: number;
    const KEY_Ukranian_YI: number;
    const KEY_Ukranian_i: number;
    const KEY_Ukranian_je: number;
    const KEY_Ukranian_yi: number;
    const KEY_Umacron: number;
    const KEY_Undo: number;
    const KEY_Ungrab: number;
    const KEY_Uogonek: number;
    const KEY_Up: number;
    const KEY_Uring: number;
    const KEY_User1KB: number;
    const KEY_User2KB: number;
    const KEY_UserPB: number;
    const KEY_Utilde: number;
    const KEY_V: number;
    const KEY_VendorHome: number;
    const KEY_Video: number;
    const KEY_View: number;
    const KEY_VoidSymbol: number;
    const KEY_W: number;
    const KEY_WLAN: number;
    const KEY_WWW: number;
    const KEY_Wacute: number;
    const KEY_WakeUp: number;
    const KEY_Wcircumflex: number;
    const KEY_Wdiaeresis: number;
    const KEY_WebCam: number;
    const KEY_Wgrave: number;
    const KEY_WheelButton: number;
    const KEY_WindowClear: number;
    const KEY_WonSign: number;
    const KEY_Word: number;
    const KEY_X: number;
    const KEY_Xabovedot: number;
    const KEY_Xfer: number;
    const KEY_Y: number;
    const KEY_Yacute: number;
    const KEY_Ybelowdot: number;
    const KEY_Ycircumflex: number;
    const KEY_Ydiaeresis: number;
    const KEY_Yellow: number;
    const KEY_Ygrave: number;
    const KEY_Yhook: number;
    const KEY_Ytilde: number;
    const KEY_Z: number;
    const KEY_Zabovedot: number;
    const KEY_Zacute: number;
    const KEY_Zcaron: number;
    const KEY_Zen_Koho: number;
    const KEY_Zenkaku: number;
    const KEY_Zenkaku_Hankaku: number;
    const KEY_ZoomIn: number;
    const KEY_ZoomOut: number;
    const KEY_Zstroke: number;
    const KEY_a: number;
    const KEY_aacute: number;
    const KEY_abelowdot: number;
    const KEY_abovedot: number;
    const KEY_abreve: number;
    const KEY_abreveacute: number;
    const KEY_abrevebelowdot: number;
    const KEY_abrevegrave: number;
    const KEY_abrevehook: number;
    const KEY_abrevetilde: number;
    const KEY_acircumflex: number;
    const KEY_acircumflexacute: number;
    const KEY_acircumflexbelowdot: number;
    const KEY_acircumflexgrave: number;
    const KEY_acircumflexhook: number;
    const KEY_acircumflextilde: number;
    const KEY_acute: number;
    const KEY_adiaeresis: number;
    const KEY_ae: number;
    const KEY_agrave: number;
    const KEY_ahook: number;
    const KEY_amacron: number;
    const KEY_ampersand: number;
    const KEY_aogonek: number;
    const KEY_apostrophe: number;
    const KEY_approxeq: number;
    const KEY_approximate: number;
    const KEY_aring: number;
    const KEY_asciicircum: number;
    const KEY_asciitilde: number;
    const KEY_asterisk: number;
    const KEY_at: number;
    const KEY_atilde: number;
    const KEY_b: number;
    const KEY_babovedot: number;
    const KEY_backslash: number;
    const KEY_ballotcross: number;
    const KEY_bar: number;
    const KEY_because: number;
    const KEY_blank: number;
    const KEY_botintegral: number;
    const KEY_botleftparens: number;
    const KEY_botleftsqbracket: number;
    const KEY_botleftsummation: number;
    const KEY_botrightparens: number;
    const KEY_botrightsqbracket: number;
    const KEY_botrightsummation: number;
    const KEY_bott: number;
    const KEY_botvertsummationconnector: number;
    const KEY_braceleft: number;
    const KEY_braceright: number;
    const KEY_bracketleft: number;
    const KEY_bracketright: number;
    const KEY_braille_blank: number;
    const KEY_braille_dot_1: number;
    const KEY_braille_dot_10: number;
    const KEY_braille_dot_2: number;
    const KEY_braille_dot_3: number;
    const KEY_braille_dot_4: number;
    const KEY_braille_dot_5: number;
    const KEY_braille_dot_6: number;
    const KEY_braille_dot_7: number;
    const KEY_braille_dot_8: number;
    const KEY_braille_dot_9: number;
    const KEY_braille_dots_1: number;
    const KEY_braille_dots_12: number;
    const KEY_braille_dots_123: number;
    const KEY_braille_dots_1234: number;
    const KEY_braille_dots_12345: number;
    const KEY_braille_dots_123456: number;
    const KEY_braille_dots_1234567: number;
    const KEY_braille_dots_12345678: number;
    const KEY_braille_dots_1234568: number;
    const KEY_braille_dots_123457: number;
    const KEY_braille_dots_1234578: number;
    const KEY_braille_dots_123458: number;
    const KEY_braille_dots_12346: number;
    const KEY_braille_dots_123467: number;
    const KEY_braille_dots_1234678: number;
    const KEY_braille_dots_123468: number;
    const KEY_braille_dots_12347: number;
    const KEY_braille_dots_123478: number;
    const KEY_braille_dots_12348: number;
    const KEY_braille_dots_1235: number;
    const KEY_braille_dots_12356: number;
    const KEY_braille_dots_123567: number;
    const KEY_braille_dots_1235678: number;
    const KEY_braille_dots_123568: number;
    const KEY_braille_dots_12357: number;
    const KEY_braille_dots_123578: number;
    const KEY_braille_dots_12358: number;
    const KEY_braille_dots_1236: number;
    const KEY_braille_dots_12367: number;
    const KEY_braille_dots_123678: number;
    const KEY_braille_dots_12368: number;
    const KEY_braille_dots_1237: number;
    const KEY_braille_dots_12378: number;
    const KEY_braille_dots_1238: number;
    const KEY_braille_dots_124: number;
    const KEY_braille_dots_1245: number;
    const KEY_braille_dots_12456: number;
    const KEY_braille_dots_124567: number;
    const KEY_braille_dots_1245678: number;
    const KEY_braille_dots_124568: number;
    const KEY_braille_dots_12457: number;
    const KEY_braille_dots_124578: number;
    const KEY_braille_dots_12458: number;
    const KEY_braille_dots_1246: number;
    const KEY_braille_dots_12467: number;
    const KEY_braille_dots_124678: number;
    const KEY_braille_dots_12468: number;
    const KEY_braille_dots_1247: number;
    const KEY_braille_dots_12478: number;
    const KEY_braille_dots_1248: number;
    const KEY_braille_dots_125: number;
    const KEY_braille_dots_1256: number;
    const KEY_braille_dots_12567: number;
    const KEY_braille_dots_125678: number;
    const KEY_braille_dots_12568: number;
    const KEY_braille_dots_1257: number;
    const KEY_braille_dots_12578: number;
    const KEY_braille_dots_1258: number;
    const KEY_braille_dots_126: number;
    const KEY_braille_dots_1267: number;
    const KEY_braille_dots_12678: number;
    const KEY_braille_dots_1268: number;
    const KEY_braille_dots_127: number;
    const KEY_braille_dots_1278: number;
    const KEY_braille_dots_128: number;
    const KEY_braille_dots_13: number;
    const KEY_braille_dots_134: number;
    const KEY_braille_dots_1345: number;
    const KEY_braille_dots_13456: number;
    const KEY_braille_dots_134567: number;
    const KEY_braille_dots_1345678: number;
    const KEY_braille_dots_134568: number;
    const KEY_braille_dots_13457: number;
    const KEY_braille_dots_134578: number;
    const KEY_braille_dots_13458: number;
    const KEY_braille_dots_1346: number;
    const KEY_braille_dots_13467: number;
    const KEY_braille_dots_134678: number;
    const KEY_braille_dots_13468: number;
    const KEY_braille_dots_1347: number;
    const KEY_braille_dots_13478: number;
    const KEY_braille_dots_1348: number;
    const KEY_braille_dots_135: number;
    const KEY_braille_dots_1356: number;
    const KEY_braille_dots_13567: number;
    const KEY_braille_dots_135678: number;
    const KEY_braille_dots_13568: number;
    const KEY_braille_dots_1357: number;
    const KEY_braille_dots_13578: number;
    const KEY_braille_dots_1358: number;
    const KEY_braille_dots_136: number;
    const KEY_braille_dots_1367: number;
    const KEY_braille_dots_13678: number;
    const KEY_braille_dots_1368: number;
    const KEY_braille_dots_137: number;
    const KEY_braille_dots_1378: number;
    const KEY_braille_dots_138: number;
    const KEY_braille_dots_14: number;
    const KEY_braille_dots_145: number;
    const KEY_braille_dots_1456: number;
    const KEY_braille_dots_14567: number;
    const KEY_braille_dots_145678: number;
    const KEY_braille_dots_14568: number;
    const KEY_braille_dots_1457: number;
    const KEY_braille_dots_14578: number;
    const KEY_braille_dots_1458: number;
    const KEY_braille_dots_146: number;
    const KEY_braille_dots_1467: number;
    const KEY_braille_dots_14678: number;
    const KEY_braille_dots_1468: number;
    const KEY_braille_dots_147: number;
    const KEY_braille_dots_1478: number;
    const KEY_braille_dots_148: number;
    const KEY_braille_dots_15: number;
    const KEY_braille_dots_156: number;
    const KEY_braille_dots_1567: number;
    const KEY_braille_dots_15678: number;
    const KEY_braille_dots_1568: number;
    const KEY_braille_dots_157: number;
    const KEY_braille_dots_1578: number;
    const KEY_braille_dots_158: number;
    const KEY_braille_dots_16: number;
    const KEY_braille_dots_167: number;
    const KEY_braille_dots_1678: number;
    const KEY_braille_dots_168: number;
    const KEY_braille_dots_17: number;
    const KEY_braille_dots_178: number;
    const KEY_braille_dots_18: number;
    const KEY_braille_dots_2: number;
    const KEY_braille_dots_23: number;
    const KEY_braille_dots_234: number;
    const KEY_braille_dots_2345: number;
    const KEY_braille_dots_23456: number;
    const KEY_braille_dots_234567: number;
    const KEY_braille_dots_2345678: number;
    const KEY_braille_dots_234568: number;
    const KEY_braille_dots_23457: number;
    const KEY_braille_dots_234578: number;
    const KEY_braille_dots_23458: number;
    const KEY_braille_dots_2346: number;
    const KEY_braille_dots_23467: number;
    const KEY_braille_dots_234678: number;
    const KEY_braille_dots_23468: number;
    const KEY_braille_dots_2347: number;
    const KEY_braille_dots_23478: number;
    const KEY_braille_dots_2348: number;
    const KEY_braille_dots_235: number;
    const KEY_braille_dots_2356: number;
    const KEY_braille_dots_23567: number;
    const KEY_braille_dots_235678: number;
    const KEY_braille_dots_23568: number;
    const KEY_braille_dots_2357: number;
    const KEY_braille_dots_23578: number;
    const KEY_braille_dots_2358: number;
    const KEY_braille_dots_236: number;
    const KEY_braille_dots_2367: number;
    const KEY_braille_dots_23678: number;
    const KEY_braille_dots_2368: number;
    const KEY_braille_dots_237: number;
    const KEY_braille_dots_2378: number;
    const KEY_braille_dots_238: number;
    const KEY_braille_dots_24: number;
    const KEY_braille_dots_245: number;
    const KEY_braille_dots_2456: number;
    const KEY_braille_dots_24567: number;
    const KEY_braille_dots_245678: number;
    const KEY_braille_dots_24568: number;
    const KEY_braille_dots_2457: number;
    const KEY_braille_dots_24578: number;
    const KEY_braille_dots_2458: number;
    const KEY_braille_dots_246: number;
    const KEY_braille_dots_2467: number;
    const KEY_braille_dots_24678: number;
    const KEY_braille_dots_2468: number;
    const KEY_braille_dots_247: number;
    const KEY_braille_dots_2478: number;
    const KEY_braille_dots_248: number;
    const KEY_braille_dots_25: number;
    const KEY_braille_dots_256: number;
    const KEY_braille_dots_2567: number;
    const KEY_braille_dots_25678: number;
    const KEY_braille_dots_2568: number;
    const KEY_braille_dots_257: number;
    const KEY_braille_dots_2578: number;
    const KEY_braille_dots_258: number;
    const KEY_braille_dots_26: number;
    const KEY_braille_dots_267: number;
    const KEY_braille_dots_2678: number;
    const KEY_braille_dots_268: number;
    const KEY_braille_dots_27: number;
    const KEY_braille_dots_278: number;
    const KEY_braille_dots_28: number;
    const KEY_braille_dots_3: number;
    const KEY_braille_dots_34: number;
    const KEY_braille_dots_345: number;
    const KEY_braille_dots_3456: number;
    const KEY_braille_dots_34567: number;
    const KEY_braille_dots_345678: number;
    const KEY_braille_dots_34568: number;
    const KEY_braille_dots_3457: number;
    const KEY_braille_dots_34578: number;
    const KEY_braille_dots_3458: number;
    const KEY_braille_dots_346: number;
    const KEY_braille_dots_3467: number;
    const KEY_braille_dots_34678: number;
    const KEY_braille_dots_3468: number;
    const KEY_braille_dots_347: number;
    const KEY_braille_dots_3478: number;
    const KEY_braille_dots_348: number;
    const KEY_braille_dots_35: number;
    const KEY_braille_dots_356: number;
    const KEY_braille_dots_3567: number;
    const KEY_braille_dots_35678: number;
    const KEY_braille_dots_3568: number;
    const KEY_braille_dots_357: number;
    const KEY_braille_dots_3578: number;
    const KEY_braille_dots_358: number;
    const KEY_braille_dots_36: number;
    const KEY_braille_dots_367: number;
    const KEY_braille_dots_3678: number;
    const KEY_braille_dots_368: number;
    const KEY_braille_dots_37: number;
    const KEY_braille_dots_378: number;
    const KEY_braille_dots_38: number;
    const KEY_braille_dots_4: number;
    const KEY_braille_dots_45: number;
    const KEY_braille_dots_456: number;
    const KEY_braille_dots_4567: number;
    const KEY_braille_dots_45678: number;
    const KEY_braille_dots_4568: number;
    const KEY_braille_dots_457: number;
    const KEY_braille_dots_4578: number;
    const KEY_braille_dots_458: number;
    const KEY_braille_dots_46: number;
    const KEY_braille_dots_467: number;
    const KEY_braille_dots_4678: number;
    const KEY_braille_dots_468: number;
    const KEY_braille_dots_47: number;
    const KEY_braille_dots_478: number;
    const KEY_braille_dots_48: number;
    const KEY_braille_dots_5: number;
    const KEY_braille_dots_56: number;
    const KEY_braille_dots_567: number;
    const KEY_braille_dots_5678: number;
    const KEY_braille_dots_568: number;
    const KEY_braille_dots_57: number;
    const KEY_braille_dots_578: number;
    const KEY_braille_dots_58: number;
    const KEY_braille_dots_6: number;
    const KEY_braille_dots_67: number;
    const KEY_braille_dots_678: number;
    const KEY_braille_dots_68: number;
    const KEY_braille_dots_7: number;
    const KEY_braille_dots_78: number;
    const KEY_braille_dots_8: number;
    const KEY_breve: number;
    const KEY_brokenbar: number;
    const KEY_c: number;
    const KEY_c_h: number;
    const KEY_cabovedot: number;
    const KEY_cacute: number;
    const KEY_careof: number;
    const KEY_caret: number;
    const KEY_caron: number;
    const KEY_ccaron: number;
    const KEY_ccedilla: number;
    const KEY_ccircumflex: number;
    const KEY_cedilla: number;
    const KEY_cent: number;
    const KEY_ch: number;
    const KEY_checkerboard: number;
    const KEY_checkmark: number;
    const KEY_circle: number;
    const KEY_club: number;
    const KEY_colon: number;
    const KEY_comma: number;
    const KEY_containsas: number;
    const KEY_copyright: number;
    const KEY_cr: number;
    const KEY_crossinglines: number;
    const KEY_cuberoot: number;
    const KEY_currency: number;
    const KEY_cursor: number;
    const KEY_d: number;
    const KEY_dabovedot: number;
    const KEY_dagger: number;
    const KEY_dcaron: number;
    const KEY_dead_A: number;
    const KEY_dead_E: number;
    const KEY_dead_I: number;
    const KEY_dead_O: number;
    const KEY_dead_U: number;
    const KEY_dead_a: number;
    const KEY_dead_abovecomma: number;
    const KEY_dead_abovedot: number;
    const KEY_dead_abovereversedcomma: number;
    const KEY_dead_abovering: number;
    const KEY_dead_aboveverticalline: number;
    const KEY_dead_acute: number;
    const KEY_dead_belowbreve: number;
    const KEY_dead_belowcircumflex: number;
    const KEY_dead_belowcomma: number;
    const KEY_dead_belowdiaeresis: number;
    const KEY_dead_belowdot: number;
    const KEY_dead_belowmacron: number;
    const KEY_dead_belowring: number;
    const KEY_dead_belowtilde: number;
    const KEY_dead_belowverticalline: number;
    const KEY_dead_breve: number;
    const KEY_dead_capital_schwa: number;
    const KEY_dead_caron: number;
    const KEY_dead_cedilla: number;
    const KEY_dead_circumflex: number;
    const KEY_dead_currency: number;
    const KEY_dead_dasia: number;
    const KEY_dead_diaeresis: number;
    const KEY_dead_doubleacute: number;
    const KEY_dead_doublegrave: number;
    const KEY_dead_e: number;
    const KEY_dead_grave: number;
    const KEY_dead_greek: number;
    const KEY_dead_hook: number;
    const KEY_dead_horn: number;
    const KEY_dead_i: number;
    const KEY_dead_invertedbreve: number;
    const KEY_dead_iota: number;
    const KEY_dead_longsolidusoverlay: number;
    const KEY_dead_lowline: number;
    const KEY_dead_macron: number;
    const KEY_dead_o: number;
    const KEY_dead_ogonek: number;
    const KEY_dead_perispomeni: number;
    const KEY_dead_psili: number;
    const KEY_dead_semivoiced_sound: number;
    const KEY_dead_small_schwa: number;
    const KEY_dead_stroke: number;
    const KEY_dead_tilde: number;
    const KEY_dead_u: number;
    const KEY_dead_voiced_sound: number;
    const KEY_decimalpoint: number;
    const KEY_degree: number;
    const KEY_diaeresis: number;
    const KEY_diamond: number;
    const KEY_digitspace: number;
    const KEY_dintegral: number;
    const KEY_division: number;
    const KEY_dollar: number;
    const KEY_doubbaselinedot: number;
    const KEY_doubleacute: number;
    const KEY_doubledagger: number;
    const KEY_doublelowquotemark: number;
    const KEY_downarrow: number;
    const KEY_downcaret: number;
    const KEY_downshoe: number;
    const KEY_downstile: number;
    const KEY_downtack: number;
    const KEY_dstroke: number;
    const KEY_e: number;
    const KEY_eabovedot: number;
    const KEY_eacute: number;
    const KEY_ebelowdot: number;
    const KEY_ecaron: number;
    const KEY_ecircumflex: number;
    const KEY_ecircumflexacute: number;
    const KEY_ecircumflexbelowdot: number;
    const KEY_ecircumflexgrave: number;
    const KEY_ecircumflexhook: number;
    const KEY_ecircumflextilde: number;
    const KEY_ediaeresis: number;
    const KEY_egrave: number;
    const KEY_ehook: number;
    const KEY_eightsubscript: number;
    const KEY_eightsuperior: number;
    const KEY_elementof: number;
    const KEY_ellipsis: number;
    const KEY_em3space: number;
    const KEY_em4space: number;
    const KEY_emacron: number;
    const KEY_emdash: number;
    const KEY_emfilledcircle: number;
    const KEY_emfilledrect: number;
    const KEY_emopencircle: number;
    const KEY_emopenrectangle: number;
    const KEY_emptyset: number;
    const KEY_emspace: number;
    const KEY_endash: number;
    const KEY_enfilledcircbullet: number;
    const KEY_enfilledsqbullet: number;
    const KEY_eng: number;
    const KEY_enopencircbullet: number;
    const KEY_enopensquarebullet: number;
    const KEY_enspace: number;
    const KEY_eogonek: number;
    const KEY_equal: number;
    const KEY_eth: number;
    const KEY_etilde: number;
    const KEY_exclam: number;
    const KEY_exclamdown: number;
    const KEY_ezh: number;
    const KEY_f: number;
    const KEY_fabovedot: number;
    const KEY_femalesymbol: number;
    const KEY_ff: number;
    const KEY_figdash: number;
    const KEY_filledlefttribullet: number;
    const KEY_filledrectbullet: number;
    const KEY_filledrighttribullet: number;
    const KEY_filledtribulletdown: number;
    const KEY_filledtribulletup: number;
    const KEY_fiveeighths: number;
    const KEY_fivesixths: number;
    const KEY_fivesubscript: number;
    const KEY_fivesuperior: number;
    const KEY_fourfifths: number;
    const KEY_foursubscript: number;
    const KEY_foursuperior: number;
    const KEY_fourthroot: number;
    const KEY_function: number;
    const KEY_g: number;
    const KEY_gabovedot: number;
    const KEY_gbreve: number;
    const KEY_gcaron: number;
    const KEY_gcedilla: number;
    const KEY_gcircumflex: number;
    const KEY_grave: number;
    const KEY_greater: number;
    const KEY_greaterthanequal: number;
    const KEY_guillemotleft: number;
    const KEY_guillemotright: number;
    const KEY_h: number;
    const KEY_hairspace: number;
    const KEY_hcircumflex: number;
    const KEY_heart: number;
    const KEY_hebrew_aleph: number;
    const KEY_hebrew_ayin: number;
    const KEY_hebrew_bet: number;
    const KEY_hebrew_beth: number;
    const KEY_hebrew_chet: number;
    const KEY_hebrew_dalet: number;
    const KEY_hebrew_daleth: number;
    const KEY_hebrew_doublelowline: number;
    const KEY_hebrew_finalkaph: number;
    const KEY_hebrew_finalmem: number;
    const KEY_hebrew_finalnun: number;
    const KEY_hebrew_finalpe: number;
    const KEY_hebrew_finalzade: number;
    const KEY_hebrew_finalzadi: number;
    const KEY_hebrew_gimel: number;
    const KEY_hebrew_gimmel: number;
    const KEY_hebrew_he: number;
    const KEY_hebrew_het: number;
    const KEY_hebrew_kaph: number;
    const KEY_hebrew_kuf: number;
    const KEY_hebrew_lamed: number;
    const KEY_hebrew_mem: number;
    const KEY_hebrew_nun: number;
    const KEY_hebrew_pe: number;
    const KEY_hebrew_qoph: number;
    const KEY_hebrew_resh: number;
    const KEY_hebrew_samech: number;
    const KEY_hebrew_samekh: number;
    const KEY_hebrew_shin: number;
    const KEY_hebrew_taf: number;
    const KEY_hebrew_taw: number;
    const KEY_hebrew_tet: number;
    const KEY_hebrew_teth: number;
    const KEY_hebrew_waw: number;
    const KEY_hebrew_yod: number;
    const KEY_hebrew_zade: number;
    const KEY_hebrew_zadi: number;
    const KEY_hebrew_zain: number;
    const KEY_hebrew_zayin: number;
    const KEY_hexagram: number;
    const KEY_horizconnector: number;
    const KEY_horizlinescan1: number;
    const KEY_horizlinescan3: number;
    const KEY_horizlinescan5: number;
    const KEY_horizlinescan7: number;
    const KEY_horizlinescan9: number;
    const KEY_hstroke: number;
    const KEY_ht: number;
    const KEY_hyphen: number;
    const KEY_i: number;
    const KEY_iTouch: number;
    const KEY_iacute: number;
    const KEY_ibelowdot: number;
    const KEY_ibreve: number;
    const KEY_icircumflex: number;
    const KEY_identical: number;
    const KEY_idiaeresis: number;
    const KEY_idotless: number;
    const KEY_ifonlyif: number;
    const KEY_igrave: number;
    const KEY_ihook: number;
    const KEY_imacron: number;
    const KEY_implies: number;
    const KEY_includedin: number;
    const KEY_includes: number;
    const KEY_infinity: number;
    const KEY_integral: number;
    const KEY_intersection: number;
    const KEY_iogonek: number;
    const KEY_itilde: number;
    const KEY_j: number;
    const KEY_jcircumflex: number;
    const KEY_jot: number;
    const KEY_k: number;
    const KEY_kana_A: number;
    const KEY_kana_CHI: number;
    const KEY_kana_E: number;
    const KEY_kana_FU: number;
    const KEY_kana_HA: number;
    const KEY_kana_HE: number;
    const KEY_kana_HI: number;
    const KEY_kana_HO: number;
    const KEY_kana_HU: number;
    const KEY_kana_I: number;
    const KEY_kana_KA: number;
    const KEY_kana_KE: number;
    const KEY_kana_KI: number;
    const KEY_kana_KO: number;
    const KEY_kana_KU: number;
    const KEY_kana_MA: number;
    const KEY_kana_ME: number;
    const KEY_kana_MI: number;
    const KEY_kana_MO: number;
    const KEY_kana_MU: number;
    const KEY_kana_N: number;
    const KEY_kana_NA: number;
    const KEY_kana_NE: number;
    const KEY_kana_NI: number;
    const KEY_kana_NO: number;
    const KEY_kana_NU: number;
    const KEY_kana_O: number;
    const KEY_kana_RA: number;
    const KEY_kana_RE: number;
    const KEY_kana_RI: number;
    const KEY_kana_RO: number;
    const KEY_kana_RU: number;
    const KEY_kana_SA: number;
    const KEY_kana_SE: number;
    const KEY_kana_SHI: number;
    const KEY_kana_SO: number;
    const KEY_kana_SU: number;
    const KEY_kana_TA: number;
    const KEY_kana_TE: number;
    const KEY_kana_TI: number;
    const KEY_kana_TO: number;
    const KEY_kana_TSU: number;
    const KEY_kana_TU: number;
    const KEY_kana_U: number;
    const KEY_kana_WA: number;
    const KEY_kana_WO: number;
    const KEY_kana_YA: number;
    const KEY_kana_YO: number;
    const KEY_kana_YU: number;
    const KEY_kana_a: number;
    const KEY_kana_closingbracket: number;
    const KEY_kana_comma: number;
    const KEY_kana_conjunctive: number;
    const KEY_kana_e: number;
    const KEY_kana_fullstop: number;
    const KEY_kana_i: number;
    const KEY_kana_middledot: number;
    const KEY_kana_o: number;
    const KEY_kana_openingbracket: number;
    const KEY_kana_switch: number;
    const KEY_kana_tsu: number;
    const KEY_kana_tu: number;
    const KEY_kana_u: number;
    const KEY_kana_ya: number;
    const KEY_kana_yo: number;
    const KEY_kana_yu: number;
    const KEY_kappa: number;
    const KEY_kcedilla: number;
    const KEY_kra: number;
    const KEY_l: number;
    const KEY_lacute: number;
    const KEY_latincross: number;
    const KEY_lbelowdot: number;
    const KEY_lcaron: number;
    const KEY_lcedilla: number;
    const KEY_leftanglebracket: number;
    const KEY_leftarrow: number;
    const KEY_leftcaret: number;
    const KEY_leftdoublequotemark: number;
    const KEY_leftmiddlecurlybrace: number;
    const KEY_leftopentriangle: number;
    const KEY_leftpointer: number;
    const KEY_leftradical: number;
    const KEY_leftshoe: number;
    const KEY_leftsinglequotemark: number;
    const KEY_leftt: number;
    const KEY_lefttack: number;
    const KEY_less: number;
    const KEY_lessthanequal: number;
    const KEY_lf: number;
    const KEY_logicaland: number;
    const KEY_logicalor: number;
    const KEY_lowleftcorner: number;
    const KEY_lowrightcorner: number;
    const KEY_lstroke: number;
    const KEY_m: number;
    const KEY_mabovedot: number;
    const KEY_macron: number;
    const KEY_malesymbol: number;
    const KEY_maltesecross: number;
    const KEY_marker: number;
    const KEY_masculine: number;
    const KEY_minus: number;
    const KEY_minutes: number;
    const KEY_mu: number;
    const KEY_multiply: number;
    const KEY_musicalflat: number;
    const KEY_musicalsharp: number;
    const KEY_n: number;
    const KEY_nabla: number;
    const KEY_nacute: number;
    const KEY_ncaron: number;
    const KEY_ncedilla: number;
    const KEY_ninesubscript: number;
    const KEY_ninesuperior: number;
    const KEY_nl: number;
    const KEY_nobreakspace: number;
    const KEY_notapproxeq: number;
    const KEY_notelementof: number;
    const KEY_notequal: number;
    const KEY_notidentical: number;
    const KEY_notsign: number;
    const KEY_ntilde: number;
    const KEY_numbersign: number;
    const KEY_numerosign: number;
    const KEY_o: number;
    const KEY_oacute: number;
    const KEY_obarred: number;
    const KEY_obelowdot: number;
    const KEY_ocaron: number;
    const KEY_ocircumflex: number;
    const KEY_ocircumflexacute: number;
    const KEY_ocircumflexbelowdot: number;
    const KEY_ocircumflexgrave: number;
    const KEY_ocircumflexhook: number;
    const KEY_ocircumflextilde: number;
    const KEY_odiaeresis: number;
    const KEY_odoubleacute: number;
    const KEY_oe: number;
    const KEY_ogonek: number;
    const KEY_ograve: number;
    const KEY_ohook: number;
    const KEY_ohorn: number;
    const KEY_ohornacute: number;
    const KEY_ohornbelowdot: number;
    const KEY_ohorngrave: number;
    const KEY_ohornhook: number;
    const KEY_ohorntilde: number;
    const KEY_omacron: number;
    const KEY_oneeighth: number;
    const KEY_onefifth: number;
    const KEY_onehalf: number;
    const KEY_onequarter: number;
    const KEY_onesixth: number;
    const KEY_onesubscript: number;
    const KEY_onesuperior: number;
    const KEY_onethird: number;
    const KEY_ooblique: number;
    const KEY_openrectbullet: number;
    const KEY_openstar: number;
    const KEY_opentribulletdown: number;
    const KEY_opentribulletup: number;
    const KEY_ordfeminine: number;
    const KEY_oslash: number;
    const KEY_otilde: number;
    const KEY_overbar: number;
    const KEY_overline: number;
    const KEY_p: number;
    const KEY_pabovedot: number;
    const KEY_paragraph: number;
    const KEY_parenleft: number;
    const KEY_parenright: number;
    const KEY_partdifferential: number;
    const KEY_partialderivative: number;
    const KEY_percent: number;
    const KEY_period: number;
    const KEY_periodcentered: number;
    const KEY_permille: number;
    const KEY_phonographcopyright: number;
    const KEY_plus: number;
    const KEY_plusminus: number;
    const KEY_prescription: number;
    const KEY_prolongedsound: number;
    const KEY_punctspace: number;
    const KEY_q: number;
    const KEY_quad: number;
    const KEY_question: number;
    const KEY_questiondown: number;
    const KEY_quotedbl: number;
    const KEY_quoteleft: number;
    const KEY_quoteright: number;
    const KEY_r: number;
    const KEY_racute: number;
    const KEY_radical: number;
    const KEY_rcaron: number;
    const KEY_rcedilla: number;
    const KEY_registered: number;
    const KEY_rightanglebracket: number;
    const KEY_rightarrow: number;
    const KEY_rightcaret: number;
    const KEY_rightdoublequotemark: number;
    const KEY_rightmiddlecurlybrace: number;
    const KEY_rightmiddlesummation: number;
    const KEY_rightopentriangle: number;
    const KEY_rightpointer: number;
    const KEY_rightshoe: number;
    const KEY_rightsinglequotemark: number;
    const KEY_rightt: number;
    const KEY_righttack: number;
    const KEY_s: number;
    const KEY_sabovedot: number;
    const KEY_sacute: number;
    const KEY_scaron: number;
    const KEY_scedilla: number;
    const KEY_schwa: number;
    const KEY_scircumflex: number;
    const KEY_script_switch: number;
    const KEY_seconds: number;
    const KEY_section: number;
    const KEY_semicolon: number;
    const KEY_semivoicedsound: number;
    const KEY_seveneighths: number;
    const KEY_sevensubscript: number;
    const KEY_sevensuperior: number;
    const KEY_signaturemark: number;
    const KEY_signifblank: number;
    const KEY_similarequal: number;
    const KEY_singlelowquotemark: number;
    const KEY_sixsubscript: number;
    const KEY_sixsuperior: number;
    const KEY_slash: number;
    const KEY_soliddiamond: number;
    const KEY_space: number;
    const KEY_squareroot: number;
    const KEY_ssharp: number;
    const KEY_sterling: number;
    const KEY_stricteq: number;
    const KEY_t: number;
    const KEY_tabovedot: number;
    const KEY_tcaron: number;
    const KEY_tcedilla: number;
    const KEY_telephone: number;
    const KEY_telephonerecorder: number;
    const KEY_therefore: number;
    const KEY_thinspace: number;
    const KEY_thorn: number;
    const KEY_threeeighths: number;
    const KEY_threefifths: number;
    const KEY_threequarters: number;
    const KEY_threesubscript: number;
    const KEY_threesuperior: number;
    const KEY_tintegral: number;
    const KEY_topintegral: number;
    const KEY_topleftparens: number;
    const KEY_topleftradical: number;
    const KEY_topleftsqbracket: number;
    const KEY_topleftsummation: number;
    const KEY_toprightparens: number;
    const KEY_toprightsqbracket: number;
    const KEY_toprightsummation: number;
    const KEY_topt: number;
    const KEY_topvertsummationconnector: number;
    const KEY_trademark: number;
    const KEY_trademarkincircle: number;
    const KEY_tslash: number;
    const KEY_twofifths: number;
    const KEY_twosubscript: number;
    const KEY_twosuperior: number;
    const KEY_twothirds: number;
    const KEY_u: number;
    const KEY_uacute: number;
    const KEY_ubelowdot: number;
    const KEY_ubreve: number;
    const KEY_ucircumflex: number;
    const KEY_udiaeresis: number;
    const KEY_udoubleacute: number;
    const KEY_ugrave: number;
    const KEY_uhook: number;
    const KEY_uhorn: number;
    const KEY_uhornacute: number;
    const KEY_uhornbelowdot: number;
    const KEY_uhorngrave: number;
    const KEY_uhornhook: number;
    const KEY_uhorntilde: number;
    const KEY_umacron: number;
    const KEY_underbar: number;
    const KEY_underscore: number;
    const KEY_union: number;
    const KEY_uogonek: number;
    const KEY_uparrow: number;
    const KEY_upcaret: number;
    const KEY_upleftcorner: number;
    const KEY_uprightcorner: number;
    const KEY_upshoe: number;
    const KEY_upstile: number;
    const KEY_uptack: number;
    const KEY_uring: number;
    const KEY_utilde: number;
    const KEY_v: number;
    const KEY_variation: number;
    const KEY_vertbar: number;
    const KEY_vertconnector: number;
    const KEY_voicedsound: number;
    const KEY_vt: number;
    const KEY_w: number;
    const KEY_wacute: number;
    const KEY_wcircumflex: number;
    const KEY_wdiaeresis: number;
    const KEY_wgrave: number;
    const KEY_x: number;
    const KEY_xabovedot: number;
    const KEY_y: number;
    const KEY_yacute: number;
    const KEY_ybelowdot: number;
    const KEY_ycircumflex: number;
    const KEY_ydiaeresis: number;
    const KEY_yen: number;
    const KEY_ygrave: number;
    const KEY_yhook: number;
    const KEY_ytilde: number;
    const KEY_z: number;
    const KEY_zabovedot: number;
    const KEY_zacute: number;
    const KEY_zcaron: number;
    const KEY_zerosubscript: number;
    const KEY_zerosuperior: number;
    const KEY_zstroke: number;
    /**
     * Priority of the redraws. This is chosen to be lower than the GTK+
     * redraw and resize priorities, because in application with both
     * GTK+ and Clutter it's more likely that the Clutter part will be
     * continually animating (and thus able to starve GTK+) than
     * vice-versa.
     */
    const PRIORITY_REDRAW: number;
    const VIRTUAL_INPUT_DEVICE_MAX_TOUCH_SLOTS: number;
    /**
     * Allocates a new [struct`ActorBox]`.
     * @returns the newly allocated #ClutterActorBox.   Use [method@ActorBox.free] to free its resources
     */
    function actor_box_alloc(): ActorBox;
    function debug_set_max_render_time_constant(max_render_time_constant_us: number): void;
    /**
     * Adds a function which will be called for all events that Clutter
     * processes. The function will be called before any signals are
     * emitted for the event and it will take precedence over any grabs.
     * @param stage The #ClutterStage to capture events for
     * @param func The callback function which will be passed all events.
     * @returns an identifier for the event filter, to be used   with [func@Clutter.Event.remove_filter].
     */
    function event_add_filter(stage: Stage | null, func: EventFilterFunc): number;
    /**
     * Pops an event off the event queue. Applications should not need to call
     * this.
     * @returns A #ClutterEvent or NULL if queue empty
     */
    function event_get(): Event;
    /**
     * Removes an event filter that was previously added with
     * [func`Clutter`.Event.add_filter].
     * @param id The ID of the event filter, as returned from [func@Clutter.Event.add_filter]
     */
    function event_remove_filter(id: number): void;
    /**
     * Checks if events are pending in the event queue.
     * @returns TRUE if there are pending events, FALSE otherwise.
     */
    function events_pending(): boolean;
    /**
     * Returns whether Clutter has accessibility support enabled.
     * @returns %TRUE if Clutter has accessibility support enabled
     */
    function get_accessibility_enabled(): boolean;
    /**
     * If an event is currently being processed, return that event.
     * This function is intended to be used to access event state
     * that might not be exposed by higher-level widgets.  For
     * example, to get the key modifier state from a Button 'clicked'
     * event.
     * @returns The current ClutterEvent, or %NULL if none
     */
    function get_current_event(): Event;
    /**
     * Retrieves the timestamp of the last event, if there is an
     * event or if the event has a timestamp.
     * @returns the event timestamp, or %CLUTTER_CURRENT_TIME
     */
    function get_current_event_time(): number;
    function get_debug_flags(
        debug_flags: DebugFlag | null,
        draw_flags: DrawDebugFlag | null,
        pick_flags: PickDebugFlag | null,
    ): void;
    /**
     * Retrieves the default #ClutterBackend used by Clutter. The
     * #ClutterBackend holds backend-specific configuration options.
     * @returns the default backend. You should   not ref or unref the returned object. Applications should rarely   need to use this.
     */
    function get_default_backend(): Backend;
    /**
     * Retrieves the default direction for the text. The text direction is
     * determined by the locale and/or by the `CLUTTER_TEXT_DIRECTION`
     * environment variable.
     *
     * The default text direction can be overridden on a per-actor basis by using
     * [method`Actor`.set_text_direction].
     * @returns the default text direction
     */
    function get_default_text_direction(): TextDirection;
    function get_text_direction(): TextDirection;
    /**
     * Converts `keyval` from a Clutter key symbol to the corresponding
     * ISO10646 (Unicode) character.
     * @param keyval a key symbol
     * @returns a Unicode character, or 0 if there  is no corresponding   character.
     */
    function keysym_to_unicode(keyval: number): number;
    function keyval_convert_case(symbol: number): [number, number];
    function keyval_name(keyval: number): string | null;
    function pipeline_capability_quark(): GLib.Quark;
    /**
     * Adds a function to be called whenever there are no higher priority
     * events pending. If the function returns %FALSE it is automatically
     * removed from the list of event sources and will not be called again.
     *
     * This function can be considered a thread-safe variant of g_idle_add_full():
     * it will call `function` while holding the Clutter lock. It is logically
     * equivalent to the following implementation:
     *
     * ```c
     * static gboolean
     * idle_safe_callback (gpointer data)
     * {
     *    SafeClosure *closure = data;
     *    gboolean res = FALSE;
     *
     *    // the callback does not need to acquire the Clutter
     *     / lock itself, as it is held by the this proxy handler
     *     //
     *    res = closure->callback (closure->data);
     *
     *    return res;
     * }
     * static gulong
     * add_safe_idle (GSourceFunc callback,
     *                gpointer    data)
     * {
     *   SafeClosure *closure = g_new0 (SafeClosure, 1);
     *
     *   closure->callback = callback;
     *   closure->data = data;
     *
     *   return g_idle_add_full (G_PRIORITY_DEFAULT_IDLE,
     *                           idle_safe_callback,
     *                           closure,
     *                           g_free)
     * }
     * ```
     *
     * This function should be used by threaded applications to make sure
     * that `func` is emitted under the Clutter threads lock and invoked
     * from the same thread that started the Clutter main loop. For instance,
     * it can be used to update the UI using the results from a worker
     * thread:
     *
     * ```c
     * static gboolean
     * update_ui (gpointer data)
     * {
     *   SomeClosure *closure = data;
     *
     *   // it is safe to call Clutter API from this function because
     *    / it is invoked from the same thread that started the main
     *    / loop and under the Clutter thread lock
     *    //
     *   clutter_label_set_text (CLUTTER_LABEL (closure->label),
     *                           closure->text);
     *
     *   g_object_unref (closure->label);
     *   g_free (closure);
     *
     *   return FALSE;
     * }
     *
     *   // within another thread //
     *   closure = g_new0 (SomeClosure, 1);
     *   // always take a reference on GObject instances //
     *   closure->label = g_object_ref (my_application->label);
     *   closure->text = g_strdup (processed_text_to_update_the_label);
     *
     *   clutter_threads_add_idle_full (G_PRIORITY_HIGH_IDLE,
     *                                  update_ui,
     *                                  closure,
     *                                  NULL);
     * ```
     * @param priority the priority of the timeout source. Typically this will be in the    range between #G_PRIORITY_DEFAULT_IDLE and #G_PRIORITY_HIGH_IDLE
     * @param func function to call
     * @returns the ID (greater than 0) of the event source.
     */
    function threads_add_idle(priority: number, func: GLib.SourceFunc): number;
    /**
     * Adds a function to be called whenever Clutter is processing a new
     * frame.
     *
     * If the function returns %FALSE it is automatically removed from the
     * list of repaint functions and will not be called again.
     *
     * This function is guaranteed to be called from within the same thread
     * that called clutter_main(), and while the Clutter lock is being held;
     * the function will be called within the main loop, so it is imperative
     * that it does not block, otherwise the frame time budget may be lost.
     *
     * A repaint function is useful to ensure that an update of the scenegraph
     * is performed before the scenegraph is repainted. By default, a repaint
     * function added using this function will be invoked prior to the frame
     * being processed.
     *
     * Adding a repaint function does not automatically ensure that a new
     * frame will be queued.
     *
     * When the repaint function is removed (either because it returned %FALSE
     * or because clutter_threads_remove_repaint_func() has been called) the
     * `notify` function will be called, if any is set.
     *
     * See also: clutter_threads_add_repaint_func_full()
     * @param func the function to be called within the paint cycle
     * @returns the ID (greater than 0) of the repaint function. You   can use the returned integer to remove the repaint function by   calling clutter_threads_remove_repaint_func().
     */
    function threads_add_repaint_func(func: GLib.SourceFunc): number;
    /**
     * Adds a function to be called whenever Clutter is processing a new
     * frame.
     *
     * If the function returns %FALSE it is automatically removed from the
     * list of repaint functions and will not be called again.
     *
     * This function is guaranteed to be called from within the same thread
     * that called clutter_main(), and while the Clutter lock is being held;
     * the function will be called within the main loop, so it is imperative
     * that it does not block, otherwise the frame time budget may be lost.
     *
     * A repaint function is useful to ensure that an update of the scenegraph
     * is performed before the scenegraph is repainted. The `flags` passed to this
     * function will determine the section of the frame processing that will
     * result in `func` being called.
     *
     * Adding a repaint function does not automatically ensure that a new
     * frame will be queued.
     *
     * When the repaint function is removed (either because it returned %FALSE
     * or because clutter_threads_remove_repaint_func() has been called) the
     * `notify` function will be called, if any is set.
     * @param flags flags for the repaint function
     * @param func the function to be called within the paint cycle
     * @returns the ID (greater than 0) of the repaint function. You   can use the returned integer to remove the repaint function by   calling clutter_threads_remove_repaint_func().
     */
    function threads_add_repaint_func_full(flags: RepaintFlags | null, func: GLib.SourceFunc): number;
    /**
     * Sets a function to be called at regular intervals holding the Clutter
     * threads lock, with the given priority. The function is called repeatedly
     * until it returns %FALSE, at which point the timeout is automatically
     * removed and the function will not be called again. The `notify` function
     * is called when the timeout is removed.
     *
     * The first call to the function will be at the end of the first `interval`.
     *
     * It is important to note that, due to how the Clutter main loop is
     * implemented, the timing will not be accurate and it will not try to
     * "keep up" with the interval.
     *
     * See also clutter_threads_add_idle_full().
     * @param priority the priority of the timeout source. Typically this will be in the            range between #G_PRIORITY_DEFAULT and #G_PRIORITY_HIGH.
     * @param interval the time between calls to the function, in milliseconds
     * @param func function to call
     * @returns the ID (greater than 0) of the event source.
     */
    function threads_add_timeout(priority: number, interval: number, func: GLib.SourceFunc): number;
    /**
     * Removes the repaint function with `handle_id` as its id
     * @param handle_id an unsigned integer greater than zero
     */
    function threads_remove_repaint_func(handle_id: number): void;
    function transfer_function_get_default_luminances(
        transfer_function: TransferFunction | null,
        min_lum_out: number,
        max_lum_out: number,
        ref_lum_out: number,
    ): void;
    /**
     * Convert from a ISO10646 character to a key symbol.
     * @param wc a ISO10646 encoded character
     * @returns the corresponding Clutter key symbol, if one exists.   or, if there is no corresponding symbol, wc | 0x01000000
     */
    function unicode_to_keysym(wc: number): number;
    /**
     * Retrieves a pointer to the #ClutterPaintNode contained inside
     * the passed #GValue, and if not %NULL it will increase the
     * reference count.
     * @param value a #GValue initialized with %CLUTTER_TYPE_PAINT_NODE
     * @returns a pointer   to the #ClutterPaintNode, with its reference count increased,   or %NULL
     */
    function value_dup_paint_node(value: GObject.Value | any): PaintNode;
    /**
     * Retrieves a pointer to the #ClutterPaintNode contained inside
     * the passed #GValue.
     * @param value a #GValue initialized with %CLUTTER_TYPE_PAINT_NODE
     * @returns a pointer to   a #ClutterPaintNode, or %NULL
     */
    function value_get_paint_node(value: GObject.Value | any): PaintNode;
    /**
     * Retrieves the list of floating point values stored inside
     * the passed [struct`GObject`.Value]. `value` must have been initialized with
     * %CLUTTER_TYPE_SHADER_FLOAT.
     * @param value a #GValue
     * @returns the pointer to a list of   floating point values.  The returned value is owned by the   #GValue and should never be modified or freed.
     */
    function value_get_shader_float(value: GObject.Value | any): number[];
    /**
     * Retrieves the list of integer values stored inside the passed
     * [struct`GObject`.Value]. `value` must have been initialized with
     * %CLUTTER_TYPE_SHADER_INT.
     * @param value a #GValue
     * @returns the pointer to a list of   integer values.  The returned value is owned by the #GValue and   should never be modified or freed.
     */
    function value_get_shader_int(value: GObject.Value | any): number[];
    /**
     * Retrieves a matrix of floating point values stored inside
     * the passed [struct`GObject`.Value]. `value` must have been initialized with
     * %CLUTTER_TYPE_SHADER_MATRIX.
     * @param value a #GValue
     * @returns the pointer to a matrix   of floating point values. The returned value is owned by the #GValue and   should never be modified or freed.
     */
    function value_get_shader_matrix(value: GObject.Value | any): number[];
    /**
     * Sets the contents of a #GValue initialized with %CLUTTER_TYPE_PAINT_NODE.
     *
     * This function increased the reference count of `node;` if you do not wish
     * to increase the reference count, use clutter_value_take_paint_node()
     * instead. The reference count will be released by g_value_unset().
     * @param value a #GValue initialized with %CLUTTER_TYPE_PAINT_NODE
     * @param node a #ClutterPaintNode, or %NULL
     */
    function value_set_paint_node(value: GObject.Value | any, node?: PaintNode | null): void;
    /**
     * Sets `floats` as the contents of `value`. The passed [struct`GObject`.Value]
     * must have been initialized using %CLUTTER_TYPE_SHADER_FLOAT.
     * @param value a #GValue
     * @param floats an array of floating point values
     */
    function value_set_shader_float(value: GObject.Value | any, floats: number[]): void;
    /**
     * Sets `ints` as the contents of `value`. The passed [struct`GObject`.Value]
     * must have been initialized using %CLUTTER_TYPE_SHADER_INT.
     * @param value a #GValue
     * @param ints an array of integer values
     */
    function value_set_shader_int(value: GObject.Value | any, ints: number[]): void;
    /**
     * Sets `matrix` as the contents of `value`. The passed [struct`GObject`.Value]
     * must have been initialized using %CLUTTER_TYPE_SHADER_MATRIX.
     * @param value a #GValue
     * @param matrix a matrix of floating point values
     */
    function value_set_shader_matrix(value: GObject.Value | any, matrix: number[]): void;
    /**
     * Sets the contents of a #GValue initialized with %CLUTTER_TYPE_PAINT_NODE.
     *
     * Unlike clutter_value_set_paint_node(), this function will not take a
     * reference on the passed `node:` instead, it will take ownership of the
     * current reference count.
     * @param value a #GValue, initialized with %CLUTTER_TYPE_PAINT_NODE
     * @param node a #ClutterPaintNode, or %NULL
     */
    function value_take_paint_node(value: GObject.Value | any, node?: PaintNode | null): void;
    interface ActorCreateChildFunc<A = GObject.Object> {
        (item: A): Actor;
    }
    interface EventFilterFunc {
        (event: Event, event_actor: Actor): boolean;
    }
    interface ProgressFunc {
        (a: GObject.Value | any, b: GObject.Value | any, progress: number, retval: GObject.Value | any): boolean;
    }
    interface StageInputForeachFunc {
        (stage: Stage, device: InputDevice, sequence: EventSequence): boolean;
    }
    interface TimelineProgressFunc {
        (timeline: Timeline, elapsed: number, total: number): number;
    }
    /**
     * Content repeat modes.
     */

    /**
     * Content repeat modes.
     */
    export namespace ContentRepeat {
        export const $gtype: GObject.GType<ContentRepeat>;
    }

    enum ContentRepeat {
        /**
         * No repeat
         */
        NONE,
        /**
         * Repeat the content on the X axis
         */
        X_AXIS,
        /**
         * Repeat the content on the Y axis
         */
        Y_AXIS,
        /**
         * Repeat the content on both axis
         */
        BOTH,
    }

    export namespace DebugFlag {
        export const $gtype: GObject.GType<DebugFlag>;
    }

    enum DebugFlag {
        MISC,
        ACTOR,
        TEXTURE,
        EVENT,
        PAINT,
        PANGO,
        BACKEND,
        SCHEDULER,
        SCRIPT,
        SHADER,
        MULTISTAGE,
        ANIMATION,
        LAYOUT,
        PICK,
        EVENTLOOP,
        CLIPPING,
        OOB_TRANSFORMS,
        FRAME_TIMINGS,
        DETAILED_TRACE,
        GRABS,
        FRAME_CLOCK,
        GESTURES,
    }

    export namespace DrawDebugFlag {
        export const $gtype: GObject.GType<DrawDebugFlag>;
    }

    enum DrawDebugFlag {
        DISABLE_SWAP_EVENTS,
        DISABLE_CLIPPED_REDRAWS,
        REDRAWS,
        PAINT_VOLUMES,
        DISABLE_CULLING,
        DISABLE_OFFSCREEN_REDIRECT,
        CONTINUOUS_REDRAW,
        PAINT_DEFORM_TILES,
        PAINT_DAMAGE_REGION,
        DISABLE_DYNAMIC_MAX_RENDER_TIME,
        PAINT_MAX_RENDER_TIME,
    }
    /**
     * Flags passed to the ‘paint’ or ‘pick’ method of #ClutterEffect.
     */

    /**
     * Flags passed to the ‘paint’ or ‘pick’ method of #ClutterEffect.
     */
    export namespace EffectPaintFlags {
        export const $gtype: GObject.GType<EffectPaintFlags>;
    }

    enum EffectPaintFlags {
        /**
         * The actor or one of its children
         *   has queued a redraw before this paint. This implies that the effect
         *   should call clutter_actor_continue_paint() to chain to the next
         *   effect and can not cache any results from a previous paint.
         */
        ACTOR_DIRTY,
        /**
         * The effect should not be used
         *   on this frame, but it will be asked to paint the actor still.
         */
        BYPASS_EFFECT,
    }
    /**
     * Flags for the #ClutterEvent
     */

    /**
     * Flags for the #ClutterEvent
     */
    export namespace EventFlags {
        export const $gtype: GObject.GType<EventFlags>;
    }

    enum EventFlags {
        /**
         * No flag set
         */
        NONE,
        /**
         * Synthetic event
         */
        FLAG_SYNTHETIC,
        FLAG_INPUT_METHOD,
        /**
         * Auto-repeated event
         */
        FLAG_REPEATED,
        FLAG_RELATIVE_MOTION,
        FLAG_GRAB_NOTIFY,
        FLAG_POINTER_EMULATED,
    }

    export namespace FrameInfoFlag {
        export const $gtype: GObject.GType<FrameInfoFlag>;
    }

    enum FrameInfoFlag {
        NONE,
        HW_CLOCK,
        ZERO_COPY,
        VSYNC,
    }

    export namespace GrabState {
        export const $gtype: GObject.GType<GrabState>;
    }

    enum GrabState {
        NONE,
        POINTER,
        KEYBOARD,
        ALL,
    }

    export namespace InputAxisFlags {
        export const $gtype: GObject.GType<InputAxisFlags>;
    }

    enum InputAxisFlags {
        NONE,
        X,
        Y,
        PRESSURE,
        XTILT,
        YTILT,
        WHEEL,
        DISTANCE,
        ROTATION,
        SLIDER,
    }

    export namespace InputCapabilities {
        export const $gtype: GObject.GType<InputCapabilities>;
    }

    enum InputCapabilities {
        NONE,
        POINTER,
        KEYBOARD,
        TOUCHPAD,
        TOUCH,
        TABLET_TOOL,
        TABLET_PAD,
        TRACKBALL,
        TRACKPOINT,
    }

    export namespace InputContentHintFlags {
        export const $gtype: GObject.GType<InputContentHintFlags>;
    }

    enum InputContentHintFlags {
        COMPLETION,
        SPELLCHECK,
        AUTO_CAPITALIZATION,
        LOWERCASE,
        UPPERCASE,
        TITLECASE,
        HIDDEN_TEXT,
        SENSITIVE_DATA,
        LATIN,
        MULTILINE,
    }
    /**
     * Masks applied to a #ClutterEvent by modifiers.
     *
     * Note that Clutter may add internal values to events which include
     * reserved values such as %CLUTTER_MODIFIER_RESERVED_13_MASK.  Your code
     * should preserve and ignore them.  You can use %CLUTTER_MODIFIER_MASK to
     * remove all reserved values.
     */

    /**
     * Masks applied to a #ClutterEvent by modifiers.
     *
     * Note that Clutter may add internal values to events which include
     * reserved values such as %CLUTTER_MODIFIER_RESERVED_13_MASK.  Your code
     * should preserve and ignore them.  You can use %CLUTTER_MODIFIER_MASK to
     * remove all reserved values.
     */
    export namespace ModifierType {
        export const $gtype: GObject.GType<ModifierType>;
    }

    enum ModifierType {
        /**
         * Mask applied by the Shift key
         */
        SHIFT_MASK,
        /**
         * Mask applied by the Caps Lock key
         */
        LOCK_MASK,
        /**
         * Mask applied by the Control key
         */
        CONTROL_MASK,
        /**
         * Mask applied by the first Mod key
         */
        MOD1_MASK,
        /**
         * Mask applied by the second Mod key
         */
        MOD2_MASK,
        /**
         * Mask applied by the third Mod key
         */
        MOD3_MASK,
        /**
         * Mask applied by the fourth Mod key
         */
        MOD4_MASK,
        /**
         * Mask applied by the fifth Mod key
         */
        MOD5_MASK,
        /**
         * Mask applied by the first pointer button
         */
        BUTTON1_MASK,
        /**
         * Mask applied by the second pointer button
         */
        BUTTON2_MASK,
        /**
         * Mask applied by the third pointer button
         */
        BUTTON3_MASK,
        /**
         * Mask applied by the fourth pointer button
         */
        BUTTON4_MASK,
        /**
         * Mask applied by the fifth pointer button
         */
        BUTTON5_MASK,
        MODIFIER_RESERVED_13_MASK,
        MODIFIER_RESERVED_14_MASK,
        MODIFIER_RESERVED_15_MASK,
        MODIFIER_RESERVED_16_MASK,
        MODIFIER_RESERVED_17_MASK,
        MODIFIER_RESERVED_18_MASK,
        MODIFIER_RESERVED_19_MASK,
        MODIFIER_RESERVED_20_MASK,
        MODIFIER_RESERVED_21_MASK,
        MODIFIER_RESERVED_22_MASK,
        MODIFIER_RESERVED_23_MASK,
        MODIFIER_RESERVED_24_MASK,
        MODIFIER_RESERVED_25_MASK,
        /**
         * Mask applied by the Super key
         */
        SUPER_MASK,
        /**
         * Mask applied by the Hyper key
         */
        HYPER_MASK,
        /**
         * Mask applied by the Meta key
         */
        META_MASK,
        MODIFIER_RESERVED_29_MASK,
        /**
         * Mask applied during release
         */
        RELEASE_MASK,
        /**
         * A mask covering all modifier types
         */
        MODIFIER_MASK,
    }
    /**
     * Possible flags to pass to clutter_actor_set_offscreen_redirect().
     */

    /**
     * Possible flags to pass to clutter_actor_set_offscreen_redirect().
     */
    export namespace OffscreenRedirect {
        export const $gtype: GObject.GType<OffscreenRedirect>;
    }

    enum OffscreenRedirect {
        /**
         * Only redirect
         *   the actor if it is semi-transparent and its has_overlaps()
         *   virtual returns %TRUE.
         */
        AUTOMATIC_FOR_OPACITY,
        /**
         * Always redirect the actor to an
         *   offscreen buffer even if it is fully opaque.
         */
        ALWAYS,
        /**
         * Only redirect the actor if it is the
         *   most efficient thing to do based on its recent repaint behaviour. That
         *   means when its contents are changing less frequently than it's being used
         *   on stage.
         */
        ON_IDLE,
    }

    export namespace PaintFlag {
        export const $gtype: GObject.GType<PaintFlag>;
    }

    enum PaintFlag {
        NONE,
        NO_CURSORS,
        FORCE_CURSORS,
        CLEAR,
    }

    export namespace PickDebugFlag {
        export const $gtype: GObject.GType<PickDebugFlag>;
    }

    enum PickDebugFlag {
        PICKING,
    }
    /**
     * Pointer accessibility features applied to a ClutterInputDevice pointer.
     */

    /**
     * Pointer accessibility features applied to a ClutterInputDevice pointer.
     */
    export namespace PointerA11yFlags {
        export const $gtype: GObject.GType<PointerA11yFlags>;
    }

    enum PointerA11yFlags {
        SECONDARY_CLICK_ENABLED,
        DWELL_ENABLED,
    }
    /**
     * Flags to pass to clutter_threads_add_repaint_func_full().
     */

    /**
     * Flags to pass to clutter_threads_add_repaint_func_full().
     */
    export namespace RepaintFlags {
        export const $gtype: GObject.GType<RepaintFlags>;
    }

    enum RepaintFlags {
        /**
         * Run the repaint function prior to
         *   painting the stages
         */
        PRE_PAINT,
        /**
         * Run the repaint function after
         *   painting the stages
         */
        POST_PAINT,
    }
    /**
     * Flags used to notify the axes that were stopped in a #ClutterScrollEvent.
     *
     * These can be used to trigger post-scroll effects like kinetic scrolling.6
     */

    /**
     * Flags used to notify the axes that were stopped in a #ClutterScrollEvent.
     *
     * These can be used to trigger post-scroll effects like kinetic scrolling.6
     */
    export namespace ScrollFinishFlags {
        export const $gtype: GObject.GType<ScrollFinishFlags>;
    }

    enum ScrollFinishFlags {
        /**
         * no axis was stopped.
         */
        NONE,
        /**
         * The horizontal axis stopped.
         */
        HORIZONTAL,
        /**
         * The vertical axis stopped.
         */
        VERTICAL,
    }
    /**
     * The main direction of the swipe gesture
     */

    /**
     * The main direction of the swipe gesture
     */
    export namespace SwipeDirection {
        export const $gtype: GObject.GType<SwipeDirection>;
    }

    enum SwipeDirection {
        /**
         * Upwards swipe gesture
         */
        UP,
        /**
         * Downwards swipe gesture
         */
        DOWN,
        /**
         * Leftwards swipe gesture
         */
        LEFT,
        /**
         * Rightwards swipe gesture
         */
        RIGHT,
    }

    export namespace VirtualDeviceType {
        export const $gtype: GObject.GType<VirtualDeviceType>;
    }

    enum VirtualDeviceType {
        NONE,
        KEYBOARD,
        POINTER,
        TOUCHSCREEN,
    }
    module Action {
        // Constructor properties interface

        interface ConstructorProps extends ActorMeta.ConstructorProps {}
    }

    /**
     * Abstract class for event-related logic
     *
     * #ClutterAction is an abstract base class for event-related actions that
     * modify the user interaction of a [class`Actor]`, just like
     * [class`Constraint]` is an abstract class for modifiers of an actor's
     * position or size.
     *
     * Implementations of #ClutterAction are associated to an actor and can
     * provide behavioral changes when dealing with user input - for instance
     * drag and drop capabilities, or scrolling, or panning - by using the
     * various event-related signals provided by [class`Actor]` itself.
     */
    abstract class Action extends ActorMeta {
        static $gtype: GObject.GType<Action>;

        // Constructors

        constructor(properties?: Partial<Action.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Virtual methods

        vfunc_handle_event(event: Event): boolean;
        vfunc_register_sequence(event: Event): boolean;
        vfunc_sequence_cancelled(device: InputDevice, sequence: EventSequence): void;
        vfunc_setup_sequence_relationship(action_2: Action, device: InputDevice, sequence: EventSequence): number;

        // Methods

        get_phase(): EventPhase;
    }

    module Actor {
        // Signal callback interfaces

        interface ButtonPressEvent {
            (event: Event): boolean;
        }

        interface ButtonReleaseEvent {
            (event: Event): boolean;
        }

        interface CapturedEvent {
            (event: Event): boolean;
        }

        interface ChildAdded {
            (child: Actor): void;
        }

        interface ChildRemoved {
            (child: Actor): void;
        }

        interface Cloned {
            (object: Clone): void;
        }

        interface Decloned {
            (object: Clone): void;
        }

        interface Destroy {
            (): void;
        }

        interface EnterEvent {
            (event: Event): boolean;
        }

        interface Event {
            (event: Event): boolean;
        }

        interface Hide {
            (): void;
        }

        interface KeyFocusIn {
            (): void;
        }

        interface KeyFocusOut {
            (): void;
        }

        interface KeyPressEvent {
            (event: Event): boolean;
        }

        interface KeyReleaseEvent {
            (event: Event): boolean;
        }

        interface LeaveEvent {
            (event: Event): boolean;
        }

        interface MotionEvent {
            (event: Event): boolean;
        }

        interface ParentSet {
            (old_parent?: Actor | null): void;
        }

        interface Pick {
            (pick_context: PickContext): void;
        }

        interface QueueRelayout {
            (): void;
        }

        interface Realize {
            (): void;
        }

        interface ResourceScaleChanged {
            (): void;
        }

        interface ScrollEvent {
            (event: Event): boolean;
        }

        interface Show {
            (): void;
        }

        interface StageViewsChanged {
            (): void;
        }

        interface TouchEvent {
            (event: Event): boolean;
        }

        interface TransitionStopped {
            (name: string, is_finished: boolean): void;
        }

        interface TransitionsCompleted {
            (): void;
        }

        interface Unrealize {
            (): void;
        }

        // Constructor properties interface

        interface ConstructorProps<A extends LayoutManager = LayoutManager, B extends Content = Content>
            extends GObject.InitiallyUnowned.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Animatable.ConstructorProps {
            accessible_name: string;
            accessibleName: string;
            accessible_role: Atk.Role;
            accessibleRole: Atk.Role;
            actions: Action;
            allocation: ActorBox;
            background_color: Cogl.Color;
            backgroundColor: Cogl.Color;
            background_color_set: boolean;
            backgroundColorSet: boolean;
            child_transform: Graphene.Matrix;
            childTransform: Graphene.Matrix;
            child_transform_set: boolean;
            childTransformSet: boolean;
            clip_rect: Graphene.Rect;
            clipRect: Graphene.Rect;
            clip_to_allocation: boolean;
            clipToAllocation: boolean;
            color_state: ColorState;
            colorState: ColorState;
            constraints: Constraint;
            content: B;
            content_box: ActorBox;
            contentBox: ActorBox;
            content_gravity: ContentGravity;
            contentGravity: ContentGravity;
            content_repeat: ContentRepeat;
            contentRepeat: ContentRepeat;
            context: Context;
            effect: Effect;
            first_child: Actor;
            firstChild: Actor;
            fixed_position_set: boolean;
            fixedPositionSet: boolean;
            fixed_x: number;
            fixedX: number;
            fixed_y: number;
            fixedY: number;
            has_clip: boolean;
            hasClip: boolean;
            has_pointer: boolean;
            hasPointer: boolean;
            height: number;
            last_child: Actor;
            lastChild: Actor;
            layout_manager: A;
            layoutManager: A;
            magnification_filter: ScalingFilter;
            magnificationFilter: ScalingFilter;
            mapped: boolean;
            margin_bottom: number;
            marginBottom: number;
            margin_left: number;
            marginLeft: number;
            margin_right: number;
            marginRight: number;
            margin_top: number;
            marginTop: number;
            min_height: number;
            minHeight: number;
            min_height_set: boolean;
            minHeightSet: boolean;
            min_width: number;
            minWidth: number;
            min_width_set: boolean;
            minWidthSet: boolean;
            minification_filter: ScalingFilter;
            minificationFilter: ScalingFilter;
            name: string;
            natural_height: number;
            naturalHeight: number;
            natural_height_set: boolean;
            naturalHeightSet: boolean;
            natural_width: number;
            naturalWidth: number;
            natural_width_set: boolean;
            naturalWidthSet: boolean;
            offscreen_redirect: OffscreenRedirect;
            offscreenRedirect: OffscreenRedirect;
            opacity: number;
            pivot_point: Graphene.Point;
            pivotPoint: Graphene.Point;
            pivot_point_z: number;
            pivotPointZ: number;
            position: Graphene.Point;
            reactive: boolean;
            realized: boolean;
            request_mode: RequestMode;
            requestMode: RequestMode;
            rotation_angle_x: number;
            rotationAngleX: number;
            rotation_angle_y: number;
            rotationAngleY: number;
            rotation_angle_z: number;
            rotationAngleZ: number;
            scale_x: number;
            scaleX: number;
            scale_y: number;
            scaleY: number;
            scale_z: number;
            scaleZ: number;
            show_on_set_parent: boolean;
            showOnSetParent: boolean;
            size: Graphene.Size;
            text_direction: TextDirection;
            textDirection: TextDirection;
            transform: Graphene.Matrix;
            transform_set: boolean;
            transformSet: boolean;
            translation_x: number;
            translationX: number;
            translation_y: number;
            translationY: number;
            translation_z: number;
            translationZ: number;
            visible: boolean;
            width: number;
            x: number;
            x_align: ActorAlign;
            xAlign: ActorAlign;
            x_expand: boolean;
            xExpand: boolean;
            y: number;
            y_align: ActorAlign;
            yAlign: ActorAlign;
            y_expand: boolean;
            yExpand: boolean;
            z_position: number;
            zPosition: number;
        }
    }

    /**
     * The basic element of the scene graph
     *
     * The ClutterActor class is the basic element of the scene graph in Clutter,
     * and it encapsulates the position, size, and transformations of a node in
     * the graph.
     *
     * ## Actor transformations
     *
     * Each actor can be transformed using methods like [method`Actor`.set_scale]
     * or [method`Actor`.set_rotation_angle]. The order in which the transformations are
     * applied is decided by Clutter and it is the following:
     *
     *  1. translation by the origin of the [property`Actor:`allocation] property
     *  2. translation by the actor's [property`Actor:`z-position] property
     *  3. translation by the actor's [property`Actor:`pivot-point] property
     *  4. scaling by the [property`Actor:`scale-x] and [property`Actor:`scale-y] factors
     *  5. rotation around the [property`Actor:`rotation-angle-x]
     *  6. rotation around the [property`Actor:`rotation-angle-y]
     *  7. rotation around the [property`Actor:`rotation-angle-z]
     *  8. negative translation by the actor's [property`Actor:`pivot-point]
     *
     * ## Modifying an actor's geometry
     *
     * Each actor has a bounding box, called [property`Actor:`allocation]
     * which is either set by its parent or explicitly through the
     * [method`Actor`.set_position] and [method`Actor`.set_size] methods.
     * Each actor also has an implicit preferred size.
     *
     * An actor’s preferred size can be defined by any subclass by
     * overriding the [vfunc`Actor`.get_preferred_width] and the
     * [vfunc`Actor`.get_preferred_height] virtual functions, or it can
     * be explicitly set by using [method`Actor`.set_width] and
     * [method`Actor`.set_height].
     *
     * An actor’s position can be set explicitly by using
     * [method`Actor`.set_x] and [method`Actor`.set_y]; the coordinates are
     * relative to the origin of the actor’s parent.
     *
     * ## Managing actor children
     *
     * Each actor can have multiple children, by calling
     * [method`Clutter`.Actor.add_child] to add a new child actor, and
     * [method`Clutter`.Actor.remove_child] to remove an existing child. #ClutterActor
     * will hold a reference on each child actor, which will be released when
     * the child is removed from its parent, or destroyed using
     * [method`Clutter`.Actor.destroy].
     *
     * ```c
     *  ClutterActor *actor = clutter_actor_new ();
     *
     *  // set the bounding box of the actor
     *  clutter_actor_set_position (actor, 0, 0);
     *  clutter_actor_set_size (actor, 480, 640);
     *
     *  // set the background color of the actor
     *  clutter_actor_set_background_color (actor, &COGL_COLOR_INIT (0xf5, 0x79, 0x00, 0xff));
     *
     *  // set the bounding box of the child, relative to the parent
     *  ClutterActor *child = clutter_actor_new ();
     *  clutter_actor_set_position (child, 20, 20);
     *  clutter_actor_set_size (child, 80, 240);
     *
     *  // set the background color of the child
     *  clutter_actor_set_background_color (child, &COGL_COLOR_INIT (0x00, 0x00, 0xff, 0xff));
     *
     *  // add the child to the actor
     *  clutter_actor_add_child (actor, child);
     * ```
     *
     * Children can be inserted at a given index, or above and below
     * another child actor. The order of insertion determines the order of the
     * children when iterating over them. Iterating over children is performed
     * by using [method`Clutter`.Actor.get_first_child], [method`Clutter`.Actor.get_previous_sibling],
     * [method`Clutter`.Actor.get_next_sibling], and [method`Clutter`.Actor.get_last_child]. It is
     * also possible to retrieve a list of children by using
     * [method`Clutter`.Actor.get_children], as well as retrieving a specific child at a
     * given index by using [method`Clutter`.Actor.get_child_at_index].
     *
     * If you need to track additions of children to a [type`Clutter`.Actor], use
     * the [signal`Clutter`.Actor::child-added] signal; similarly, to track
     * removals of children from a ClutterActor, use the
     * [signal`Clutter`.Actor::child-removed] signal.
     *
     * ## Painting an actor
     *
     * There are three ways to paint an actor:
     *
     *  - set a delegate #ClutterContent as the value for the [property`Clutter`.Actor:content] property of the actor
     *  - subclass #ClutterActor and override the [vfunc`Clutter`.Actor.paint_node] virtual function
     *  - subclass #ClutterActor and override the [vfunc`Clutter`.Actor.paint] virtual function.
     *
     * A #ClutterContent is a delegate object that takes over the painting
     * operations of one, or more actors. The #ClutterContent painting will
     * be performed on top of the [property`Clutter`.Actor:background-color] of the actor,
     * and before calling the actor's own implementation of the
     * [vfunc`Clutter`.Actor.paint_node] virtual function.
     *
     * ```c
     * ClutterActor *actor = clutter_actor_new ();
     *
     * // set the bounding box
     * clutter_actor_set_position (actor, 50, 50);
     * clutter_actor_set_size (actor, 100, 100);
     *
     * // set the content; the image_content variable is set elsewhere
     * clutter_actor_set_content (actor, image_content);
     * ```
     *
     * The [vfunc`Clutter`.Actor.paint_node] virtual function is invoked whenever
     * an actor needs to be painted. The implementation of the virtual function
     * must only paint the contents of the actor itself, and not the contents of
     * its children, if the actor has any.
     *
     * The #ClutterPaintNode passed to the virtual function is the local root of
     * the render tree; any node added to it will be rendered at the correct
     * position, as defined by the actor's [property`Clutter`.Actor:allocation].
     *
     * ```c
     * static void
     * my_actor_paint_node (ClutterActor     *actor,
     *                      ClutterPaintNode *root)
     * {
     *   ClutterPaintNode *node;
     *   ClutterActorBox box;
     *
     *   // where the content of the actor should be painted
     *   clutter_actor_get_allocation_box (actor, &box);
     *
     *   // the cogl_texture variable is set elsewhere
     *   node = clutter_texture_node_new (cogl_texture, &COGL_COLOR_INIT (255, 255, 255, 255),
     *                                    CLUTTER_SCALING_FILTER_TRILINEAR,
     *                                    CLUTTER_SCALING_FILTER_LINEAR);
     *
     *   // paint the content of the node using the allocation
     *   clutter_paint_node_add_rectangle (node, &box);
     *
     *   // add the node, and transfer ownership
     *   clutter_paint_node_add_child (root, node);
     *   clutter_paint_node_unref (node);
     * }
     * ```
     *
     * The [vfunc`Clutter`.Actor.paint] virtual function function gives total
     * control to the paint sequence of the actor itself, including the
     * children of the actor, if any. It is strongly discouraged to override
     * the [vfunc`Clutter`.Actor.paint] virtual function and it will be removed
     * when the Clutter API changes.
     *
     * ## Handling events on an actor
     *
     * A #ClutterActor can receive and handle input device events, for
     * instance pointer events and key events, as long as its
     * [property`Clutter`.Actor:reactive] property is set to %TRUE.
     *
     * Once an actor has been determined to be the source of an event,
     * Clutter will traverse the scene graph from the top-level actor towards the
     * event source, emitting the [signal`Clutter`.Actor::captured-event] signal on each
     * ancestor until it reaches the source; this phase is also called
     * the "capture" phase. If the event propagation was not stopped, the graph
     * is walked backwards, from the source actor to the top-level, and the
     * [signal`Clutter`.Actor::event signal] is emitted, alongside eventual event-specific
     * signals like [signal`Clutter`.Actor::button-press-event] or [signal`Clutter`.Actor::motion-event];
     * this phase is also called the "bubble" phase.
     *
     * At any point of the signal emission, signal handlers can stop the propagation
     * through the scene graph by returning %CLUTTER_EVENT_STOP; otherwise, they can
     * continue the propagation by returning %CLUTTER_EVENT_PROPAGATE.
     *
     * ## Animation
     *
     * Animation is a core concept of modern user interfaces; Clutter provides a
     * complete and powerful animation framework that automatically tweens the
     * actor's state without requiring direct, frame by frame manipulation from
     * your application code. You have two models at your disposal:
     *
     *  - an implicit animation model
     *  - an explicit animation model
     *
     * The implicit animation model of Clutter assumes that all the
     * changes in an actor state should be gradual and asynchronous; Clutter
     * will automatically transition an actor's property change between the
     * current state and the desired one without manual intervention, if the
     * property is defined to be animatable in its documentation.
     *
     * By default, in the 1.0 API series, the transition happens with a duration
     * of zero milliseconds, and the implicit animation is an opt in feature to
     * retain backwards compatibility.
     *
     * Implicit animations depend on the current easing state; in order to use
     * the default easing state for an actor you should call the
     * [method`Clutter`.Actor.save_easing_state] function:
     *
     * ```c
     * // assume that the actor is currently positioned at (100, 100)
     *
     * // store the current easing state and reset the new easing state to
     * // its default values
     * clutter_actor_save_easing_state (actor);
     *
     * // change the actor's position
     * clutter_actor_set_position (actor, 500, 500);
     *
     * // restore the previously saved easing state
     * clutter_actor_restore_easing_state (actor);
     * ```
     *
     * The example above will trigger an implicit animation of the
     * actor between its current position to a new position.
     *
     * Implicit animations use a default duration of 250 milliseconds,
     * and a default easing mode of %CLUTTER_EASE_OUT_CUBIC, unless you call
     * [method`Clutter`.Actor.set_easing_mode] and [method`Clutter`.Actor.set_easing_duration]
     * after changing the easing state of the actor.
     *
     * It is possible to animate multiple properties of an actor
     * at the same time, and you can animate multiple actors at the same
     * time as well, for instance:
     *
     * ```c
     * clutter_actor_save_easing_state (actor);
     *
     * // animate the actor's opacity and depth
     * clutter_actor_set_opacity (actor, 0);
     * clutter_actor_set_z_position (actor, -100);
     *
     * clutter_actor_restore_easing_state (actor);
     *
     * clutter_actor_save_easing_state (another_actor);
     *
     * // animate another actor's opacity
     * clutter_actor_set_opacity (another_actor, 255);
     * clutter_actor_set_z_position (another_actor, 100);
     *
     * clutter_actor_restore_easing_state (another_actor);
     * ```
     *
     * Changing the easing state will affect all the following property
     * transitions, but will not affect existing transitions.
     *
     * It is important to note that if you modify the state on an
     * animatable property while a transition is in flight, the transition's
     * final value will be updated, as well as its duration and progress
     * mode by using the current easing state; for instance, in the following
     * example:
     *
     * ```c
     * clutter_actor_save_easing_state (actor);
     * clutter_actor_set_easing_duration (actor, 1000);
     * clutter_actor_set_x (actor, 200);
     * clutter_actor_restore_easing_state (actor);
     *
     * clutter_actor_save_easing_state (actor);
     * clutter_actor_set_easing_duration (actor, 500);
     * clutter_actor_set_x (actor, 100);
     * clutter_actor_restore_easing_state (actor);
     * ```
     *
     * the first call to [method`Clutter`.Actor.set_x] will begin a transition
     * of the [property`Clutter`.Actor:x] property from the current value to the value of
     * 200 over a duration of one second; the second call to [method`Clutter`.Actor.set_x]
     * will change the transition's final value to 100 and the duration to 500
     * milliseconds.
     *
     * It is possible to receive a notification of the completion of an
     * implicit transition by using the [signal`Clutter`.Actor::transition-stopped]
     * signal, decorated with the name of the property. In case you want to
     * know when all the currently in flight transitions are complete, use
     * the [signal`Clutter`.Actor::transitions-completed] signal instead.
     *
     * It is possible to retrieve the [class`Clutter`.Transition] used by the
     * animatable properties by using [method`Clutter`.Actor.get_transition] and using
     * the property name as the transition name.
     *
     * The explicit animation model supported by Clutter requires that
     * you create a #ClutterTransition object, and optionally set the initial
     * and final values. The transition will not start unless you add it to the
     * #ClutterActor.
     *
     * ```c
     * ClutterTransition *transition;
     *
     * transition = clutter_property_transition_new_for_actor (actor, "opacity");
     * clutter_timeline_set_duration (CLUTTER_TIMELINE (transition), 3000);
     * clutter_timeline_set_repeat_count (CLUTTER_TIMELINE (transition), 2);
     * clutter_timeline_set_auto_reverse (CLUTTER_TIMELINE (transition), TRUE);
     * clutter_transition_set_from (transition, G_TYPE_UINT, 255);
     * clutter_transition_set_to (transition, G_TYPE_UINT, 0);
     *
     * clutter_actor_add_transition (actor, "animate-opacity", transition);
     * ```
     *
     * The example above will animate the [property`Clutter`.Actor:opacity] property
     * of an actor between fully opaque and fully transparent, and back, over
     * a span of 3 seconds. The animation does not begin until it is added to
     * the actor.
     *
     * The explicit animation API applies to all #GObject properties,
     * as well as the custom properties defined through the [iface`Clutter`.Animatable]
     * interface, regardless of whether they are defined as implicitly
     * animatable or not.
     *
     * The explicit animation API should also be used when using custom
     * animatable properties for [class`Clutter`.Action], [class`Clutter`.Constraint], and
     * [class`Clutter`.Effect] instances associated to an actor; see the section on
     * custom animatable properties below for an example.
     *
     * Finally, explicit animations are useful for creating animations
     * that run continuously, for instance:
     *
     * ```c
     * // this animation will pulse the actor's opacity continuously
     * ClutterTransition *transition;
     * ClutterInterval *interval;
     *
     * transition = clutter_property_transition_new_for_actor (actor, "opacity");
     *
     * // we want to animate the opacity between 0 and 255
     * clutter_transition_set_from (transition, G_TYPE_UINT, 0);
     * clutter_transition_set_to (transition, G_TYPE_UINT, 255);
     *
     * // over a one second duration, running an infinite amount of times
     * clutter_timeline_set_duration (CLUTTER_TIMELINE (transition), 1000);
     * clutter_timeline_set_repeat_count (CLUTTER_TIMELINE (transition), -1);
     *
     * // we want to fade in and out, so we need to auto-reverse the transition
     * clutter_timeline_set_auto_reverse (CLUTTER_TIMELINE (transition), TRUE);
     *
     * // and we want to use an easing function that eases both in and out
     * clutter_timeline_set_progress_mode (CLUTTER_TIMELINE (transition),
     *                                     CLUTTER_EASE_IN_OUT_CUBIC);
     *
     * // add the transition to the desired actor to start it
     * clutter_actor_add_transition (actor, "opacityAnimation", transition);
     * ```
     *
     * ## Implementing an actor
     *
     * Careful consideration should be given when deciding to implement
     * a #ClutterActor sub-class. It is generally recommended to implement a
     * sub-class of #ClutterActor only for actors that should be used as leaf
     * nodes of a scene graph.
     *
     * By overriding the [vfunc`Clutter`.Actor.get_preferred_width] and
     * [vfunc`Clutter`.Actor.get_preferred_height] virtual functions it is
     * possible to change or provide the preferred size of an actor; similarly,
     * by overriding the [vfunc`Clutter`.Actor.allocate] virtual function it is
     * possible to control the layout of the children of an actor. Make sure to
     * always chain up to the parent implementation of the
     * [vfunc`Clutter`.Actor.allocate] virtual function.
     *
     * In general, it is strongly encouraged to use delegation and composition
     * instead of direct subclassing.
     *
     * ## Custom animatable properties
     *
     * #ClutterActor allows accessing properties of [class`Clutter`.Action],
     * [class`Clutter`.Effect], and [class`Clutter`.Constraint] instances associated to an actor
     * instance for animation purposes, as well as its [class`Clutter`.LayoutManager].
     *
     * In order to access a specific [class`Clutter`.Action] or a [class`Clutter`.Constraint]
     * property it is necessary to set the [property`Clutter`.ActorMeta:name] property on the
     * given action or constraint.
     *
     * The property can be accessed using the following syntax:
     *
     * ```
     *   `<`section>.<meta-name>.<property-name>
     * ```
     *
     *  - the initial ```` is mandatory
     *  - the `section` fragment can be one between "actions", "constraints", "content",
     *    and "effects"
     *  - the `meta-name` fragment is the name of the action, effect, or constraint, as
     *    specified by the #ClutterActorMeta:name property of #ClutterActorMeta
     *  - the `property-name` fragment is the name of the action, effect, or constraint
     *    property to be animated.
     *
     * The example below animates a [class`Clutter`.BindConstraint] applied to an actor
     * using an explicit transition. The `rect` actor has a binding constraint
     * on the `origin` actor, and in its initial state is overlapping the actor
     * to which is bound to.
     *
     * As the actor has only one [class`Clutter`.LayoutManager], the syntax for accessing its
     * properties is simpler:
     *
     * ```
     *   `layout`.<property-name>
     * ```
     *
     * ```c
     * constraint = clutter_bind_constraint_new (origin, CLUTTER_BIND_X, 0.0);
     * clutter_actor_meta_set_name (CLUTTER_ACTOR_META (constraint), "bind-x");
     * clutter_actor_add_constraint (rect, constraint);
     *
     * constraint = clutter_bind_constraint_new (origin, CLUTTER_BIND_Y, 0.0);
     * clutter_actor_meta_set_name (CLUTTER_ACTOR_META (constraint), "bind-y");
     * clutter_actor_add_constraint (rect, constraint);
     *
     * clutter_actor_set_reactive (origin, TRUE);
     *
     * g_signal_connect (origin, "button-press-event",
     *                   G_CALLBACK (on_button_press),
     *                   rect);
     * ```
     *
     * On button press, the rectangle "slides" from behind the actor to
     * which is bound to, using the #ClutterBindConstraint:offset property to
     * achieve the effect:
     *
     * ```c
     * gboolean
     * on_button_press (ClutterActor *origin,
     *                  ClutterEvent *event,
     *                  ClutterActor *rect)
     * {
     *   ClutterTransition *transition;
     *
     *   // the offset that we want to apply; this will make the actor
     *   // slide in from behind the origin and rest at the right of
     *   // the origin, plus a padding value
     *   float new_offset = clutter_actor_get_width (origin) + h_padding;
     *
     *   // the property we wish to animate; the "`constraints"` section
     *   // tells Clutter to check inside the constraints associated
     *   // with the actor; the "bind-x" section is the name of the
     *   // constraint; and the "offset" is the name of the property
     *   // on the constraint
     *   const char *prop = "`constraints`.bind-x.offset";
     *
     *   // create a new transition for the given property
     *   transition = clutter_property_transition_new_for_actor (rect, prop);
     *
     *   // set the easing mode and duration
     *   clutter_timeline_set_progress_mode (CLUTTER_TIMELINE (transition),
     *                                       CLUTTER_EASE_OUT_CUBIC);
     *   clutter_timeline_set_duration (CLUTTER_TIMELINE (transition), 500);
     *
     *   // create the interval with the initial and final values
     *   clutter_transition_set_from (transition, G_TYPE_FLOAT, 0.f);
     *   clutter_transition_set_to (transition, G_TYPE_FLOAT, new_offset);
     *
     *   // add the transition to the actor; this causes the animation
     *   // to start. the name "offsetAnimation" can be used to retrieve
     *   // the transition later
     *   clutter_actor_add_transition (rect, "offsetAnimation", transition);
     *
     *   // we handled the event
     *   return CLUTTER_EVENT_STOP;
     * }
     * ```
     */
    class Actor<A extends LayoutManager = LayoutManager, B extends Content = Content>
        extends GObject.InitiallyUnowned
        implements Atk.ImplementorIface, Animatable
    {
        static $gtype: GObject.GType<Actor>;

        // Properties

        /**
         * Object instance's name for assistive technology access.
         */
        get accessible_name(): string;
        set accessible_name(val: string);
        /**
         * Object instance's name for assistive technology access.
         */
        get accessibleName(): string;
        set accessibleName(val: string);
        /**
         * The accessible role of this object
         */
        get accessible_role(): Atk.Role;
        set accessible_role(val: Atk.Role);
        /**
         * The accessible role of this object
         */
        get accessibleRole(): Atk.Role;
        set accessibleRole(val: Atk.Role);
        /**
         * Adds a #ClutterAction to the actor
         */
        set actions(val: Action);
        /**
         * The allocation for the actor, in pixels
         *
         * This is property is read-only, but you might monitor it to know when an
         * actor moves or resizes
         */
        get allocation(): ActorBox;
        /**
         * Paints a solid fill of the actor's allocation using the specified
         * color.
         *
         * The [property`Clutter`.Actor:background-color] property is animatable.
         */
        get background_color(): Cogl.Color;
        set background_color(val: Cogl.Color);
        /**
         * Paints a solid fill of the actor's allocation using the specified
         * color.
         *
         * The [property`Clutter`.Actor:background-color] property is animatable.
         */
        get backgroundColor(): Cogl.Color;
        set backgroundColor(val: Cogl.Color);
        /**
         * Whether the [property`Clutter`.Actor:background-color] property has been set.
         */
        get background_color_set(): boolean;
        /**
         * Whether the [property`Clutter`.Actor:background-color] property has been set.
         */
        get backgroundColorSet(): boolean;
        /**
         * Applies a transformation matrix on each child of an actor.
         *
         * Setting this property with a #graphene_matrix_t will set the
         * [property`Clutter`.Actor:child-transform-set] property to %TRUE as a side effect;
         * setting this property with %NULL will set the
         * [property`Clutter`.Actor:child-transform-set] property to %FALSE.
         *
         * The [property`Clutter`.Actor:child-transform] property is animatable.
         */
        get child_transform(): Graphene.Matrix;
        set child_transform(val: Graphene.Matrix);
        /**
         * Applies a transformation matrix on each child of an actor.
         *
         * Setting this property with a #graphene_matrix_t will set the
         * [property`Clutter`.Actor:child-transform-set] property to %TRUE as a side effect;
         * setting this property with %NULL will set the
         * [property`Clutter`.Actor:child-transform-set] property to %FALSE.
         *
         * The [property`Clutter`.Actor:child-transform] property is animatable.
         */
        get childTransform(): Graphene.Matrix;
        set childTransform(val: Graphene.Matrix);
        /**
         * Whether the [property`Clutter`.Actor:child-transform] property is set.
         */
        get child_transform_set(): boolean;
        /**
         * Whether the [property`Clutter`.Actor:child-transform] property is set.
         */
        get childTransformSet(): boolean;
        /**
         * The visible region of the actor, in actor-relative coordinates,
         * expressed as a #graphene_rect_t.
         *
         * Setting this property to %NULL will unset the existing clip.
         *
         * Setting this property will change the [property`Clutter`.Actor:has-clip]
         * property as a side effect.
         */
        get clip_rect(): Graphene.Rect;
        set clip_rect(val: Graphene.Rect);
        /**
         * The visible region of the actor, in actor-relative coordinates,
         * expressed as a #graphene_rect_t.
         *
         * Setting this property to %NULL will unset the existing clip.
         *
         * Setting this property will change the [property`Clutter`.Actor:has-clip]
         * property as a side effect.
         */
        get clipRect(): Graphene.Rect;
        set clipRect(val: Graphene.Rect);
        /**
         * Whether the clip region should track the allocated area
         * of the actor.
         *
         * This property is ignored if a clip area has been explicitly
         * set using clutter_actor_set_clip().
         */
        get clip_to_allocation(): boolean;
        set clip_to_allocation(val: boolean);
        /**
         * Whether the clip region should track the allocated area
         * of the actor.
         *
         * This property is ignored if a clip area has been explicitly
         * set using clutter_actor_set_clip().
         */
        get clipToAllocation(): boolean;
        set clipToAllocation(val: boolean);
        /**
         * The #ClutterColorState contains the properties like colorspace for each
         * actors.
         */
        get color_state(): ColorState;
        set color_state(val: ColorState);
        /**
         * The #ClutterColorState contains the properties like colorspace for each
         * actors.
         */
        get colorState(): ColorState;
        set colorState(val: ColorState);
        /**
         * Adds a #ClutterConstraint to the actor
         */
        set constraints(val: Constraint);
        /**
         * The #ClutterContent implementation that controls the content
         * of the actor.
         */
        get content(): B;
        set content(val: B);
        /**
         * The bounding box for the #ClutterContent used by the actor.
         *
         * The value of this property is controlled by the [property`Clutter`.Actor:allocation]
         * and [property`Clutter`.Actor:content-gravity] properties of #ClutterActor.
         *
         * The bounding box for the content is guaranteed to never exceed the
         * allocation's of the actor.
         */
        get content_box(): ActorBox;
        /**
         * The bounding box for the #ClutterContent used by the actor.
         *
         * The value of this property is controlled by the [property`Clutter`.Actor:allocation]
         * and [property`Clutter`.Actor:content-gravity] properties of #ClutterActor.
         *
         * The bounding box for the content is guaranteed to never exceed the
         * allocation's of the actor.
         */
        get contentBox(): ActorBox;
        /**
         * The alignment that should be honoured by the #ClutterContent
         * set with the [property`Clutter`.Actor:content] property.
         *
         * Changing the value of this property will change the bounding box of
         * the content; you can use the [property`Clutter`.Actor:content-box] property to
         * get the position and size of the content within the actor's
         * allocation.
         *
         * This property is meaningful only for #ClutterContent implementations
         * that have a preferred size, and if the preferred size is smaller than
         * the actor's allocation.
         *
         * The [property`Clutter`.Actor:content-gravity] property is animatable.
         */
        get content_gravity(): ContentGravity;
        set content_gravity(val: ContentGravity);
        /**
         * The alignment that should be honoured by the #ClutterContent
         * set with the [property`Clutter`.Actor:content] property.
         *
         * Changing the value of this property will change the bounding box of
         * the content; you can use the [property`Clutter`.Actor:content-box] property to
         * get the position and size of the content within the actor's
         * allocation.
         *
         * This property is meaningful only for #ClutterContent implementations
         * that have a preferred size, and if the preferred size is smaller than
         * the actor's allocation.
         *
         * The [property`Clutter`.Actor:content-gravity] property is animatable.
         */
        get contentGravity(): ContentGravity;
        set contentGravity(val: ContentGravity);
        /**
         * The repeat policy for the actor's [property`Clutter`.Actor:content].
         */
        get content_repeat(): ContentRepeat;
        set content_repeat(val: ContentRepeat);
        /**
         * The repeat policy for the actor's [property`Clutter`.Actor:content].
         */
        get contentRepeat(): ContentRepeat;
        set contentRepeat(val: ContentRepeat);
        /**
         * The %ClutterContext of the actor
         */
        get context(): Context;
        /**
         * Adds #ClutterEffect to the list of effects be applied on a #ClutterActor
         */
        set effect(val: Effect);
        /**
         * The actor's first child.
         */
        get first_child(): Actor;
        /**
         * The actor's first child.
         */
        get firstChild(): Actor;
        /**
         * This flag controls whether the [property`Clutter`.Actor:fixed-x] and
         * [property`Clutter`.Actor:fixed-y] properties are used
         */
        get fixed_position_set(): boolean;
        set fixed_position_set(val: boolean);
        /**
         * This flag controls whether the [property`Clutter`.Actor:fixed-x] and
         * [property`Clutter`.Actor:fixed-y] properties are used
         */
        get fixedPositionSet(): boolean;
        set fixedPositionSet(val: boolean);
        /**
         * The fixed X position of the actor in pixels.
         *
         * Writing this property sets [property`Clutter`.Actor:fixed-position-set]
         * property as well, as a side effect
         */
        get fixed_x(): number;
        set fixed_x(val: number);
        /**
         * The fixed X position of the actor in pixels.
         *
         * Writing this property sets [property`Clutter`.Actor:fixed-position-set]
         * property as well, as a side effect
         */
        get fixedX(): number;
        set fixedX(val: number);
        /**
         * The fixed Y position of the actor in pixels.
         *
         * Writing this property sets the [property`Clutter`.Actor:fixed-position-set]
         * property as well, as a side effect
         */
        get fixed_y(): number;
        set fixed_y(val: number);
        /**
         * The fixed Y position of the actor in pixels.
         *
         * Writing this property sets the [property`Clutter`.Actor:fixed-position-set]
         * property as well, as a side effect
         */
        get fixedY(): number;
        set fixedY(val: number);
        /**
         * Whether the actor has the [property`Clutter`.Actor:clip-rect] property set or not
         */
        get has_clip(): boolean;
        /**
         * Whether the actor has the [property`Clutter`.Actor:clip-rect] property set or not
         */
        get hasClip(): boolean;
        /**
         * Whether the actor contains the pointer of a #ClutterInputDevice
         * or not.
         */
        get has_pointer(): boolean;
        /**
         * Whether the actor contains the pointer of a #ClutterInputDevice
         * or not.
         */
        get hasPointer(): boolean;
        /**
         * Height of the actor (in pixels).  If written, forces the minimum and
         * natural size request of the actor to the given height. If read, returns
         * the allocated height if available, otherwise the height request.
         *
         * The [property`Clutter`.Actor:height] property is animatable.
         */
        get height(): number;
        set height(val: number);
        /**
         * The actor's last child.
         */
        get last_child(): Actor;
        /**
         * The actor's last child.
         */
        get lastChild(): Actor;
        /**
         * A delegate object for controlling the layout of the children of
         * an actor.
         */
        get layout_manager(): A;
        set layout_manager(val: A);
        /**
         * A delegate object for controlling the layout of the children of
         * an actor.
         */
        get layoutManager(): A;
        set layoutManager(val: A);
        get magnification_filter(): ScalingFilter;
        set magnification_filter(val: ScalingFilter);
        get magnificationFilter(): ScalingFilter;
        set magnificationFilter(val: ScalingFilter);
        /**
         * Whether the actor is mapped (will be painted when the stage
         * to which it belongs is mapped)
         */
        get mapped(): boolean;
        /**
         * The margin (in pixels) from the bottom of the actor.
         *
         * This property adds a margin to the actor's preferred size; the margin
         * will be automatically taken into account when allocating the actor.
         *
         * The [property`Clutter`.Actor:margin-bottom] property is animatable.
         */
        get margin_bottom(): number;
        set margin_bottom(val: number);
        /**
         * The margin (in pixels) from the bottom of the actor.
         *
         * This property adds a margin to the actor's preferred size; the margin
         * will be automatically taken into account when allocating the actor.
         *
         * The [property`Clutter`.Actor:margin-bottom] property is animatable.
         */
        get marginBottom(): number;
        set marginBottom(val: number);
        /**
         * The margin (in pixels) from the left of the actor.
         *
         * This property adds a margin to the actor's preferred size; the margin
         * will be automatically taken into account when allocating the actor.
         *
         * The [property`Clutter`.Actor:margin-left] property is animatable.
         */
        get margin_left(): number;
        set margin_left(val: number);
        /**
         * The margin (in pixels) from the left of the actor.
         *
         * This property adds a margin to the actor's preferred size; the margin
         * will be automatically taken into account when allocating the actor.
         *
         * The [property`Clutter`.Actor:margin-left] property is animatable.
         */
        get marginLeft(): number;
        set marginLeft(val: number);
        /**
         * The margin (in pixels) from the right of the actor.
         *
         * This property adds a margin to the actor's preferred size; the margin
         * will be automatically taken into account when allocating the actor.
         *
         * The [property`Clutter`.Actor:margin-right] property is animatable.
         */
        get margin_right(): number;
        set margin_right(val: number);
        /**
         * The margin (in pixels) from the right of the actor.
         *
         * This property adds a margin to the actor's preferred size; the margin
         * will be automatically taken into account when allocating the actor.
         *
         * The [property`Clutter`.Actor:margin-right] property is animatable.
         */
        get marginRight(): number;
        set marginRight(val: number);
        /**
         * The margin (in pixels) from the top of the actor.
         *
         * This property adds a margin to the actor's preferred size; the margin
         * will be automatically taken into account when allocating the actor.
         *
         * The [property`Clutter`.Actor:margin-top] property is animatable.
         */
        get margin_top(): number;
        set margin_top(val: number);
        /**
         * The margin (in pixels) from the top of the actor.
         *
         * This property adds a margin to the actor's preferred size; the margin
         * will be automatically taken into account when allocating the actor.
         *
         * The [property`Clutter`.Actor:margin-top] property is animatable.
         */
        get marginTop(): number;
        set marginTop(val: number);
        /**
         * A forced minimum height request for the actor, in pixels
         *
         * Writing this property sets the [property`Clutter`.Actor:min-height-set] property
         * as well, as a side effect. This property overrides the usual height
         * request of the actor.
         */
        get min_height(): number;
        set min_height(val: number);
        /**
         * A forced minimum height request for the actor, in pixels
         *
         * Writing this property sets the [property`Clutter`.Actor:min-height-set] property
         * as well, as a side effect. This property overrides the usual height
         * request of the actor.
         */
        get minHeight(): number;
        set minHeight(val: number);
        /**
         * This flag controls whether the [property`Clutter`.Actor:min-height] property
         * is used
         */
        get min_height_set(): boolean;
        set min_height_set(val: boolean);
        /**
         * This flag controls whether the [property`Clutter`.Actor:min-height] property
         * is used
         */
        get minHeightSet(): boolean;
        set minHeightSet(val: boolean);
        /**
         * A forced minimum width request for the actor, in pixels
         *
         * Writing this property sets the [property`Clutter`.Actor:min-width-set] property
         * as well, as a side effect.
         *
         * This property overrides the usual width request of the actor.
         */
        get min_width(): number;
        set min_width(val: number);
        /**
         * A forced minimum width request for the actor, in pixels
         *
         * Writing this property sets the [property`Clutter`.Actor:min-width-set] property
         * as well, as a side effect.
         *
         * This property overrides the usual width request of the actor.
         */
        get minWidth(): number;
        set minWidth(val: number);
        /**
         * This flag controls whether the [property`Clutter`.Actor:min-width] property
         * is used
         */
        get min_width_set(): boolean;
        set min_width_set(val: boolean);
        /**
         * This flag controls whether the [property`Clutter`.Actor:min-width] property
         * is used
         */
        get minWidthSet(): boolean;
        set minWidthSet(val: boolean);
        get minification_filter(): ScalingFilter;
        set minification_filter(val: ScalingFilter);
        get minificationFilter(): ScalingFilter;
        set minificationFilter(val: ScalingFilter);
        /**
         * The name of the actor
         */
        get name(): string;
        set name(val: string);
        /**
         * A forced natural height request for the actor, in pixels
         *
         * Writing this property sets the [property`Clutter`.Actor:natural-height-set]
         * property as well, as a side effect. This property overrides the
         * usual height request of the actor
         */
        get natural_height(): number;
        set natural_height(val: number);
        /**
         * A forced natural height request for the actor, in pixels
         *
         * Writing this property sets the [property`Clutter`.Actor:natural-height-set]
         * property as well, as a side effect. This property overrides the
         * usual height request of the actor
         */
        get naturalHeight(): number;
        set naturalHeight(val: number);
        /**
         * This flag controls whether the [property`Clutter`.Actor:natural-height] property
         * is used
         */
        get natural_height_set(): boolean;
        set natural_height_set(val: boolean);
        /**
         * This flag controls whether the [property`Clutter`.Actor:natural-height] property
         * is used
         */
        get naturalHeightSet(): boolean;
        set naturalHeightSet(val: boolean);
        /**
         * A forced natural width request for the actor, in pixels
         *
         * Writing this property sets the [property`Clutter`.Actor:natural-width-set]
         * property as well, as a side effect. This property overrides the
         * usual width request of the actor
         */
        get natural_width(): number;
        set natural_width(val: number);
        /**
         * A forced natural width request for the actor, in pixels
         *
         * Writing this property sets the [property`Clutter`.Actor:natural-width-set]
         * property as well, as a side effect. This property overrides the
         * usual width request of the actor
         */
        get naturalWidth(): number;
        set naturalWidth(val: number);
        /**
         * This flag controls whether the [property`Clutter`.Actor:natural-width] property
         * is used
         */
        get natural_width_set(): boolean;
        set natural_width_set(val: boolean);
        /**
         * This flag controls whether the [property`Clutter`.Actor:natural-width] property
         * is used
         */
        get naturalWidthSet(): boolean;
        set naturalWidthSet(val: boolean);
        /**
         * Determines the conditions in which the actor will be redirected
         * to an offscreen framebuffer while being painted. For example this
         * can be used to cache an actor in a framebuffer or for improved
         * handling of transparent actors. See
         * clutter_actor_set_offscreen_redirect() for details.
         */
        get offscreen_redirect(): OffscreenRedirect;
        set offscreen_redirect(val: OffscreenRedirect);
        /**
         * Determines the conditions in which the actor will be redirected
         * to an offscreen framebuffer while being painted. For example this
         * can be used to cache an actor in a framebuffer or for improved
         * handling of transparent actors. See
         * clutter_actor_set_offscreen_redirect() for details.
         */
        get offscreenRedirect(): OffscreenRedirect;
        set offscreenRedirect(val: OffscreenRedirect);
        /**
         * Opacity of an actor, between 0 (fully transparent) and
         * 255 (fully opaque)
         *
         * The [property`Clutter`.Actor:opacity] property is animatable.
         */
        get opacity(): number;
        set opacity(val: number);
        /**
         * The point around which the scaling and rotation transformations occur.
         *
         * The pivot point is expressed in normalized coordinates space, with (0, 0)
         * being the top left corner of the actor and (1, 1) the bottom right corner
         * of the actor.
         *
         * The default pivot point is located at (0, 0).
         *
         * The [property`Clutter`.Actor:pivot-point] property is animatable.
         */
        get pivot_point(): Graphene.Point;
        set pivot_point(val: Graphene.Point);
        /**
         * The point around which the scaling and rotation transformations occur.
         *
         * The pivot point is expressed in normalized coordinates space, with (0, 0)
         * being the top left corner of the actor and (1, 1) the bottom right corner
         * of the actor.
         *
         * The default pivot point is located at (0, 0).
         *
         * The [property`Clutter`.Actor:pivot-point] property is animatable.
         */
        get pivotPoint(): Graphene.Point;
        set pivotPoint(val: Graphene.Point);
        /**
         * The Z component of the [property`Clutter`.Actor:pivot-point], expressed as a value
         * along the Z axis.
         *
         * The [property`Clutter`.Actor:pivot-point-z] property is animatable.
         */
        get pivot_point_z(): number;
        set pivot_point_z(val: number);
        /**
         * The Z component of the [property`Clutter`.Actor:pivot-point], expressed as a value
         * along the Z axis.
         *
         * The [property`Clutter`.Actor:pivot-point-z] property is animatable.
         */
        get pivotPointZ(): number;
        set pivotPointZ(val: number);
        /**
         * The position of the origin of the actor.
         *
         * This property is a shorthand for setting and getting the
         * [property`Clutter`.Actor:x] and [property`Clutter`.Actor:y] properties at the same
         * time.
         *
         * The [property`Clutter`.Actor:position] property is animatable.
         */
        get position(): Graphene.Point;
        set position(val: Graphene.Point);
        /**
         * Whether the actor is reactive to events or not
         *
         * Only reactive actors will emit event-related signals
         */
        get reactive(): boolean;
        set reactive(val: boolean);
        /**
         * Whether the actor has been realized
         */
        get realized(): boolean;
        /**
         * Request mode for the #ClutterActor. The request mode determines the
         * type of geometry management used by the actor, either height for width
         * (the default) or width for height.
         *
         * For actors implementing height for width, the parent container should get
         * the preferred width first, and then the preferred height for that width.
         *
         * For actors implementing width for height, the parent container should get
         * the preferred height first, and then the preferred width for that height.
         *
         * For instance:
         *
         * ```c
         *   ClutterRequestMode mode;
         *   gfloat natural_width, min_width;
         *   gfloat natural_height, min_height;
         *
         *   mode = clutter_actor_get_request_mode (child);
         *   if (mode == CLUTTER_REQUEST_HEIGHT_FOR_WIDTH)
         *     {
         *       clutter_actor_get_preferred_width (child, -1,
         *                                          &min_width,
         *                                          &natural_width);
         *       clutter_actor_get_preferred_height (child, natural_width,
         *                                           &min_height,
         *                                           &natural_height);
         *     }
         *   else if (mode == CLUTTER_REQUEST_WIDTH_FOR_HEIGHT)
         *     {
         *       clutter_actor_get_preferred_height (child, -1,
         *                                           &min_height,
         *                                           &natural_height);
         *       clutter_actor_get_preferred_width (child, natural_height,
         *                                          &min_width,
         *                                          &natural_width);
         *     }
         *   else if (mode == CLUTTER_REQUEST_CONTENT_SIZE)
         *     {
         *       ClutterContent *content = clutter_actor_get_content (child);
         *
         *       min_width, min_height = 0;
         *       natural_width = natural_height = 0;
         *
         *       if (content != NULL)
         *         clutter_content_get_preferred_size (content, &natural_width, &natural_height);
         *     }
         * ```
         *
         * will retrieve the minimum and natural width and height depending on the
         * preferred request mode of the #ClutterActor "child".
         *
         * The [method`Clutter`.Actor.get_preferred_size] function will implement this
         * check for you.
         */
        get request_mode(): RequestMode;
        set request_mode(val: RequestMode);
        /**
         * Request mode for the #ClutterActor. The request mode determines the
         * type of geometry management used by the actor, either height for width
         * (the default) or width for height.
         *
         * For actors implementing height for width, the parent container should get
         * the preferred width first, and then the preferred height for that width.
         *
         * For actors implementing width for height, the parent container should get
         * the preferred height first, and then the preferred width for that height.
         *
         * For instance:
         *
         * ```c
         *   ClutterRequestMode mode;
         *   gfloat natural_width, min_width;
         *   gfloat natural_height, min_height;
         *
         *   mode = clutter_actor_get_request_mode (child);
         *   if (mode == CLUTTER_REQUEST_HEIGHT_FOR_WIDTH)
         *     {
         *       clutter_actor_get_preferred_width (child, -1,
         *                                          &min_width,
         *                                          &natural_width);
         *       clutter_actor_get_preferred_height (child, natural_width,
         *                                           &min_height,
         *                                           &natural_height);
         *     }
         *   else if (mode == CLUTTER_REQUEST_WIDTH_FOR_HEIGHT)
         *     {
         *       clutter_actor_get_preferred_height (child, -1,
         *                                           &min_height,
         *                                           &natural_height);
         *       clutter_actor_get_preferred_width (child, natural_height,
         *                                          &min_width,
         *                                          &natural_width);
         *     }
         *   else if (mode == CLUTTER_REQUEST_CONTENT_SIZE)
         *     {
         *       ClutterContent *content = clutter_actor_get_content (child);
         *
         *       min_width, min_height = 0;
         *       natural_width = natural_height = 0;
         *
         *       if (content != NULL)
         *         clutter_content_get_preferred_size (content, &natural_width, &natural_height);
         *     }
         * ```
         *
         * will retrieve the minimum and natural width and height depending on the
         * preferred request mode of the #ClutterActor "child".
         *
         * The [method`Clutter`.Actor.get_preferred_size] function will implement this
         * check for you.
         */
        get requestMode(): RequestMode;
        set requestMode(val: RequestMode);
        /**
         * The rotation angle on the X axis.
         *
         * The [property`Clutter`.Actor:rotation-angle-x] property is animatable.
         */
        get rotation_angle_x(): number;
        set rotation_angle_x(val: number);
        /**
         * The rotation angle on the X axis.
         *
         * The [property`Clutter`.Actor:rotation-angle-x] property is animatable.
         */
        get rotationAngleX(): number;
        set rotationAngleX(val: number);
        /**
         * The rotation angle on the Y axis
         *
         * The [property`Clutter`.Actor:rotation-angle-y] property is animatable.
         */
        get rotation_angle_y(): number;
        set rotation_angle_y(val: number);
        /**
         * The rotation angle on the Y axis
         *
         * The [property`Clutter`.Actor:rotation-angle-y] property is animatable.
         */
        get rotationAngleY(): number;
        set rotationAngleY(val: number);
        /**
         * The rotation angle on the Z axis
         *
         * The [property`Clutter`.Actor:rotation-angle-z] property is animatable.
         */
        get rotation_angle_z(): number;
        set rotation_angle_z(val: number);
        /**
         * The rotation angle on the Z axis
         *
         * The [property`Clutter`.Actor:rotation-angle-z] property is animatable.
         */
        get rotationAngleZ(): number;
        set rotationAngleZ(val: number);
        /**
         * The horizontal scale of the actor.
         *
         * The [property`Clutter`.Actor:scale-x] property is animatable.
         */
        get scale_x(): number;
        set scale_x(val: number);
        /**
         * The horizontal scale of the actor.
         *
         * The [property`Clutter`.Actor:scale-x] property is animatable.
         */
        get scaleX(): number;
        set scaleX(val: number);
        /**
         * The vertical scale of the actor.
         *
         * The [property`Clutter`.Actor:scale-y] property is animatable.
         */
        get scale_y(): number;
        set scale_y(val: number);
        /**
         * The vertical scale of the actor.
         *
         * The [property`Clutter`.Actor:scale-y] property is animatable.
         */
        get scaleY(): number;
        set scaleY(val: number);
        /**
         * The scale factor of the actor along the Z axis.
         *
         * The [property`Clutter`.Actor:scale-y] property is animatable.
         */
        get scale_z(): number;
        set scale_z(val: number);
        /**
         * The scale factor of the actor along the Z axis.
         *
         * The [property`Clutter`.Actor:scale-y] property is animatable.
         */
        get scaleZ(): number;
        set scaleZ(val: number);
        /**
         * If %TRUE, the actor is automatically shown when parented.
         *
         * Calling clutter_actor_hide() on an actor which has not been
         * parented will set this property to %FALSE as a side effect.
         */
        get show_on_set_parent(): boolean;
        set show_on_set_parent(val: boolean);
        /**
         * If %TRUE, the actor is automatically shown when parented.
         *
         * Calling clutter_actor_hide() on an actor which has not been
         * parented will set this property to %FALSE as a side effect.
         */
        get showOnSetParent(): boolean;
        set showOnSetParent(val: boolean);
        /**
         * The size of the actor.
         *
         * This property is a shorthand for setting and getting the
         * [property`Clutter`.Actor:width] and [property`Clutter`.Actor:height]
         * at the same time.
         *
         * The [property`Clutter`.Actor:size] property is animatable.
         */
        get size(): Graphene.Size;
        set size(val: Graphene.Size);
        /**
         * The direction of the text inside a #ClutterActor.
         */
        get text_direction(): TextDirection;
        set text_direction(val: TextDirection);
        /**
         * The direction of the text inside a #ClutterActor.
         */
        get textDirection(): TextDirection;
        set textDirection(val: TextDirection);
        /**
         * Overrides the transformations of a #ClutterActor with a custom
         * matrix.
         *
         * The matrix specified by the [property`Clutter`.Actor:transform] property is
         * applied to the actor and its children relative to the actor's
         * [property`Clutter`.Actor:allocation] and
         * [property`Clutter`.Actor:pivot-point].
         *
         * Application code should rarely need to use this function directly.
         *
         * Setting this property with a #graphene_matrix_t will set the
         * [property`Clutter`.Actor:transform-set] property to %TRUE as a side effect;
         * setting this property with %NULL will set the
         * [property`Clutter`.Actor:transform-set] property to %FALSE.
         *
         * The [property`Clutter`.Actor:transform] property is animatable.
         */
        get transform(): Graphene.Matrix;
        set transform(val: Graphene.Matrix);
        /**
         * Whether the [property`Clutter`.Actor:transform] property is set.
         */
        get transform_set(): boolean;
        /**
         * Whether the [property`Clutter`.Actor:transform] property is set.
         */
        get transformSet(): boolean;
        /**
         * An additional translation applied along the X axis, relative
         * to the actor's [property`Clutter`.Actor:pivot-point].
         *
         * The [property`Clutter`.Actor:translation-x] property is animatable.
         */
        get translation_x(): number;
        set translation_x(val: number);
        /**
         * An additional translation applied along the X axis, relative
         * to the actor's [property`Clutter`.Actor:pivot-point].
         *
         * The [property`Clutter`.Actor:translation-x] property is animatable.
         */
        get translationX(): number;
        set translationX(val: number);
        /**
         * An additional translation applied along the Y axis, relative
         * to the actor's [property`Clutter`.Actor:pivot-point].
         *
         * The [property`Clutter`.Actor:translation-y] property is animatable.
         */
        get translation_y(): number;
        set translation_y(val: number);
        /**
         * An additional translation applied along the Y axis, relative
         * to the actor's [property`Clutter`.Actor:pivot-point].
         *
         * The [property`Clutter`.Actor:translation-y] property is animatable.
         */
        get translationY(): number;
        set translationY(val: number);
        /**
         * An additional translation applied along the Z axis, relative
         * to the actor's [property`Clutter`.Actor:pivot-point].
         *
         * The [property`Clutter`.Actor:translation-z] property is animatable.
         */
        get translation_z(): number;
        set translation_z(val: number);
        /**
         * An additional translation applied along the Z axis, relative
         * to the actor's [property`Clutter`.Actor:pivot-point].
         *
         * The [property`Clutter`.Actor:translation-z] property is animatable.
         */
        get translationZ(): number;
        set translationZ(val: number);
        /**
         * Whether the actor is set to be visible or not
         *
         * See also [property`Clutter`.Actor:mapped]
         */
        get visible(): boolean;
        set visible(val: boolean);
        /**
         * Width of the actor (in pixels). If written, forces the minimum and
         * natural size request of the actor to the given width. If read, returns
         * the allocated width if available, otherwise the width request.
         *
         * The [property`Clutter`.Actor:width] property is animatable.
         */
        get width(): number;
        set width(val: number);
        /**
         * X coordinate of the actor in pixels. If written, forces a fixed
         * position for the actor. If read, returns the fixed position if any,
         * otherwise the allocation if available, otherwise 0.
         *
         * The [property`Clutter`.Actor:x] property is animatable.
         */
        get x(): number;
        set x(val: number);
        /**
         * The alignment of an actor on the X axis, if the actor has been given
         * extra space for its allocation. See also the [property`Clutter`.Actor:x-expand]
         * property.
         */
        get x_align(): ActorAlign;
        set x_align(val: ActorAlign);
        /**
         * The alignment of an actor on the X axis, if the actor has been given
         * extra space for its allocation. See also the [property`Clutter`.Actor:x-expand]
         * property.
         */
        get xAlign(): ActorAlign;
        set xAlign(val: ActorAlign);
        /**
         * Whether a layout manager should assign more space to the actor on
         * the X axis.
         */
        get x_expand(): boolean;
        set x_expand(val: boolean);
        /**
         * Whether a layout manager should assign more space to the actor on
         * the X axis.
         */
        get xExpand(): boolean;
        set xExpand(val: boolean);
        /**
         * Y coordinate of the actor in pixels. If written, forces a fixed
         * position for the actor.  If read, returns the fixed position if
         * any, otherwise the allocation if available, otherwise 0.
         *
         * The [property`Clutter`.Actor:y] property is animatable.
         */
        get y(): number;
        set y(val: number);
        /**
         * The alignment of an actor on the Y axis, if the actor has been given
         * extra space for its allocation.
         */
        get y_align(): ActorAlign;
        set y_align(val: ActorAlign);
        /**
         * The alignment of an actor on the Y axis, if the actor has been given
         * extra space for its allocation.
         */
        get yAlign(): ActorAlign;
        set yAlign(val: ActorAlign);
        /**
         * Whether a layout manager should assign more space to the actor on
         * the Y axis.
         */
        get y_expand(): boolean;
        set y_expand(val: boolean);
        /**
         * Whether a layout manager should assign more space to the actor on
         * the Y axis.
         */
        get yExpand(): boolean;
        set yExpand(val: boolean);
        /**
         * The actor's position on the Z axis, relative to the parent's
         * transformations.
         *
         * Positive values will bring the actor's position nearer to the user,
         * whereas negative values will bring the actor's position farther from
         * the user.
         *
         * The [property`Clutter`.Actor:z-position] does not affect the paint or allocation
         * order.
         *
         * The [property`Clutter`.Actor:z-position] property is animatable.
         */
        get z_position(): number;
        set z_position(val: number);
        /**
         * The actor's position on the Z axis, relative to the parent's
         * transformations.
         *
         * Positive values will bring the actor's position nearer to the user,
         * whereas negative values will bring the actor's position farther from
         * the user.
         *
         * The [property`Clutter`.Actor:z-position] does not affect the paint or allocation
         * order.
         *
         * The [property`Clutter`.Actor:z-position] property is animatable.
         */
        get zPosition(): number;
        set zPosition(val: number);

        // Fields

        flags: number;

        // Constructors

        constructor(properties?: Partial<Actor.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Actor;

        // Signals

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'button-press-event', callback: (_source: this, event: Event) => boolean): number;
        connect_after(signal: 'button-press-event', callback: (_source: this, event: Event) => boolean): number;
        emit(signal: 'button-press-event', event: Event): void;
        connect(signal: 'button-release-event', callback: (_source: this, event: Event) => boolean): number;
        connect_after(signal: 'button-release-event', callback: (_source: this, event: Event) => boolean): number;
        emit(signal: 'button-release-event', event: Event): void;
        connect(signal: 'captured-event', callback: (_source: this, event: Event) => boolean): number;
        connect_after(signal: 'captured-event', callback: (_source: this, event: Event) => boolean): number;
        emit(signal: 'captured-event', event: Event): void;
        connect(signal: 'child-added', callback: (_source: this, child: Actor) => void): number;
        connect_after(signal: 'child-added', callback: (_source: this, child: Actor) => void): number;
        emit(signal: 'child-added', child: Actor): void;
        connect(signal: 'child-removed', callback: (_source: this, child: Actor) => void): number;
        connect_after(signal: 'child-removed', callback: (_source: this, child: Actor) => void): number;
        emit(signal: 'child-removed', child: Actor): void;
        connect(signal: 'cloned', callback: (_source: this, object: Clone) => void): number;
        connect_after(signal: 'cloned', callback: (_source: this, object: Clone) => void): number;
        emit(signal: 'cloned', object: Clone): void;
        connect(signal: 'decloned', callback: (_source: this, object: Clone) => void): number;
        connect_after(signal: 'decloned', callback: (_source: this, object: Clone) => void): number;
        emit(signal: 'decloned', object: Clone): void;
        connect(signal: 'destroy', callback: (_source: this) => void): number;
        connect_after(signal: 'destroy', callback: (_source: this) => void): number;
        emit(signal: 'destroy'): void;
        connect(signal: 'enter-event', callback: (_source: this, event: Event) => boolean): number;
        connect_after(signal: 'enter-event', callback: (_source: this, event: Event) => boolean): number;
        emit(signal: 'enter-event', event: Event): void;
        connect(signal: 'event', callback: (_source: this, event: Event) => boolean): number;
        connect_after(signal: 'event', callback: (_source: this, event: Event) => boolean): number;
        emit(signal: 'event', event: Event): void;
        connect(signal: 'hide', callback: (_source: this) => void): number;
        connect_after(signal: 'hide', callback: (_source: this) => void): number;
        emit(signal: 'hide'): void;
        connect(signal: 'key-focus-in', callback: (_source: this) => void): number;
        connect_after(signal: 'key-focus-in', callback: (_source: this) => void): number;
        emit(signal: 'key-focus-in'): void;
        connect(signal: 'key-focus-out', callback: (_source: this) => void): number;
        connect_after(signal: 'key-focus-out', callback: (_source: this) => void): number;
        emit(signal: 'key-focus-out'): void;
        connect(signal: 'key-press-event', callback: (_source: this, event: Event) => boolean): number;
        connect_after(signal: 'key-press-event', callback: (_source: this, event: Event) => boolean): number;
        emit(signal: 'key-press-event', event: Event): void;
        connect(signal: 'key-release-event', callback: (_source: this, event: Event) => boolean): number;
        connect_after(signal: 'key-release-event', callback: (_source: this, event: Event) => boolean): number;
        emit(signal: 'key-release-event', event: Event): void;
        connect(signal: 'leave-event', callback: (_source: this, event: Event) => boolean): number;
        connect_after(signal: 'leave-event', callback: (_source: this, event: Event) => boolean): number;
        emit(signal: 'leave-event', event: Event): void;
        connect(signal: 'motion-event', callback: (_source: this, event: Event) => boolean): number;
        connect_after(signal: 'motion-event', callback: (_source: this, event: Event) => boolean): number;
        emit(signal: 'motion-event', event: Event): void;
        connect(signal: 'parent-set', callback: (_source: this, old_parent: Actor | null) => void): number;
        connect_after(signal: 'parent-set', callback: (_source: this, old_parent: Actor | null) => void): number;
        emit(signal: 'parent-set', old_parent?: Actor | null): void;
        connect(signal: 'pick', callback: (_source: this, pick_context: PickContext) => void): number;
        connect_after(signal: 'pick', callback: (_source: this, pick_context: PickContext) => void): number;
        emit(signal: 'pick', pick_context: PickContext): void;
        connect(signal: 'queue-relayout', callback: (_source: this) => void): number;
        connect_after(signal: 'queue-relayout', callback: (_source: this) => void): number;
        emit(signal: 'queue-relayout'): void;
        connect(signal: 'realize', callback: (_source: this) => void): number;
        connect_after(signal: 'realize', callback: (_source: this) => void): number;
        emit(signal: 'realize'): void;
        connect(signal: 'resource-scale-changed', callback: (_source: this) => void): number;
        connect_after(signal: 'resource-scale-changed', callback: (_source: this) => void): number;
        emit(signal: 'resource-scale-changed'): void;
        connect(signal: 'scroll-event', callback: (_source: this, event: Event) => boolean): number;
        connect_after(signal: 'scroll-event', callback: (_source: this, event: Event) => boolean): number;
        emit(signal: 'scroll-event', event: Event): void;
        connect(signal: 'show', callback: (_source: this) => void): number;
        connect_after(signal: 'show', callback: (_source: this) => void): number;
        emit(signal: 'show'): void;
        connect(signal: 'stage-views-changed', callback: (_source: this) => void): number;
        connect_after(signal: 'stage-views-changed', callback: (_source: this) => void): number;
        emit(signal: 'stage-views-changed'): void;
        connect(signal: 'touch-event', callback: (_source: this, event: Event) => boolean): number;
        connect_after(signal: 'touch-event', callback: (_source: this, event: Event) => boolean): number;
        emit(signal: 'touch-event', event: Event): void;
        connect(
            signal: 'transition-stopped',
            callback: (_source: this, name: string, is_finished: boolean) => void,
        ): number;
        connect_after(
            signal: 'transition-stopped',
            callback: (_source: this, name: string, is_finished: boolean) => void,
        ): number;
        emit(signal: 'transition-stopped', name: string, is_finished: boolean): void;
        connect(signal: 'transitions-completed', callback: (_source: this) => void): number;
        connect_after(signal: 'transitions-completed', callback: (_source: this) => void): number;
        emit(signal: 'transitions-completed'): void;
        connect(signal: 'unrealize', callback: (_source: this) => void): number;
        connect_after(signal: 'unrealize', callback: (_source: this) => void): number;
        emit(signal: 'unrealize'): void;

        // Static methods

        static get_layout_manager_type(): GObject.GType;
        static set_layout_manager_type(type: GObject.GType): void;

        // Virtual methods

        /**
         * Assigns the size of a #ClutterActor from the given `box`.
         *
         * This function should only be called on the children of an actor when
         * overriding the [vfunc`Clutter`.Actor.allocate] virtual function.
         *
         * This function will adjust the stored allocation to take into account
         * the alignment flags set in the [property`Clutter`.Actor:x-align] and
         * [property`Clutter`.Actor:y-align] properties, as well as the margin values set in
         * the[property`Clutter`.Actor:margin-top], [property`Clutter`.Actor:margin-right],
         * [property`Clutter`.Actor:margin-bottom], and
         * [property`Clutter`.Actor:margin-left] properties.
         *
         * This function will respect the easing state of the #ClutterActor and
         * interpolate between the current allocation and the new one if the
         * easing state duration is a positive value.
         *
         * Actors can know from their allocation box whether they have moved
         * with respect to their parent actor. The `flags` parameter describes
         * additional information about the allocation, for instance whether
         * the parent has moved with respect to the stage, for example because
         * a grandparent's origin has moved.
         * @param box new allocation of the actor, in parent-relative coordinates
         */
        vfunc_allocate(box: ActorBox): void;
        /**
         * virtual function, used when applying the transformations
         *   to an actor before painting it or when transforming coordinates or
         *   the allocation; if the transformation calculated by this function may
         *   have changed, the cached transformation must be invalidated by calling
         *   clutter_actor_invalidate_transform(); it must chain up to the parent's
         *   implementation
         * @param matrix
         */
        vfunc_apply_transform(matrix: Graphene.Matrix): void;
        /**
         * class handler for [signal`Clutter`.Actor::button-press-event]
         * @param event
         */
        vfunc_button_press_event(event: Event): boolean;
        /**
         * class handler for
         *   [signal`Clutter`.Actor::button-release-event]
         * @param event
         */
        vfunc_button_release_event(event: Event): boolean;
        vfunc_calculate_resource_scale(phase: number): number;
        /**
         * signal class closure for [signal`Clutter`.Actor::captured-event]
         * @param event
         */
        vfunc_captured_event(event: Event): boolean;
        vfunc_child_added(child: Actor): void;
        vfunc_child_removed(child: Actor): void;
        /**
         * Destroys an actor.  When an actor is destroyed, it will break any
         * references it holds to other objects.  If the actor is inside a
         * container, the actor will be removed.
         *
         * When you destroy a container, its children will be destroyed as well.
         */
        vfunc_destroy(): void;
        /**
         * signal class closure for [signal`Clutter`.Actor::enter-event]
         * @param event
         */
        vfunc_enter_event(event: Event): boolean;
        /**
         * class handler for [signal`Clutter`.Actor::event]
         * @param event
         */
        vfunc_event(event: Event): boolean;
        /**
         * Returns the accessible object that describes the actor to an
         * assistive technology.
         *
         * If no class-specific #AtkObject implementation is available for the
         * actor instance in question, it will inherit an #AtkObject
         * implementation from the first ancestor class for which such an
         * implementation is defined.
         *
         * The documentation of the [https://gnome.pages.gitlab.gnome.org/at-spi2-core/atk/](ATK)
         * library contains more information about accessible objects and
         * their uses.
         */
        vfunc_get_accessible(): Atk.Object;
        /**
         * virtual function, for sub-classes to define their
         *   #ClutterPaintVolume
         * @param volume
         */
        vfunc_get_paint_volume(volume: PaintVolume): boolean;
        /**
         * Computes the requested minimum and natural heights for an actor,
         * or if they are already computed, returns the cached values.
         *
         * An actor may not get its request - depending on the layout
         * manager that's in effect.
         *
         * A request should not incorporate the actor's scale or translation;
         * those transformations do not affect layout, only rendering.
         * @param for_width available width to assume in computing desired height,   or a negative value to indicate that no width is defined
         */
        vfunc_get_preferred_height(for_width: number): [number, number];
        /**
         * Computes the requested minimum and natural widths for an actor,
         * optionally depending on the specified height, or if they are
         * already computed, returns the cached values.
         *
         * An actor may not get its request - depending on the layout
         * manager that's in effect.
         *
         * A request should not incorporate the actor's scaleor translation;
         * those transformations do not affect layout, only rendering.
         * @param for_height available height when computing the preferred width,   or a negative value to indicate that no height is defined
         */
        vfunc_get_preferred_width(for_height: number): [number, number];
        /**
         * Asks the actor's implementation whether it may contain overlapping
         * primitives.
         *
         * For example; Clutter may use this to determine whether the painting
         * should be redirected to an offscreen buffer to correctly implement
         * the opacity property.
         *
         * Custom actors can override the default response by implementing the
         * [vfunc`Clutter`.Actor.has_overlaps]. See
         * [method`Clutter`.Actor.set_offscreen_redirect] for more information.
         */
        vfunc_has_overlaps(): boolean;
        /**
         * Flags an actor to be hidden. A hidden actor will not be
         * rendered on the stage.
         *
         * Actors are visible by default.
         *
         * If this function is called on an actor without a parent, the
         * [property`Clutter`.Actor:show-on-set-parent] property will be set to %FALSE
         * as a side-effect.
         */
        vfunc_hide(): void;
        /**
         * virtual function for containers and composite actors, to
         *   determine which children should be shown when calling
         *   clutter_actor_hide_all() on the actor. Defaults to calling
         *   clutter_actor_hide(). This virtual function is deprecated and it
         *   should not be overridden.
         */
        vfunc_hide_all(): void;
        /**
         * signal class closure for [signal`Clutter`.Actor::key-focus-in]
         */
        vfunc_key_focus_in(): void;
        /**
         * signal class closure for [signal`Clutter`.Actor::key-focus-out]
         */
        vfunc_key_focus_out(): void;
        /**
         * signal class closure for [signal`Clutter`.Actor::key-press-event]
         * @param event
         */
        vfunc_key_press_event(event: Event): boolean;
        /**
         * signal class closure for
         *   [signal`Clutter`.Actor::key-release-event]
         * @param event
         */
        vfunc_key_release_event(event: Event): boolean;
        /**
         * signal class closure for [signal`Clutter`.Actor::leave-event]
         * @param event
         */
        vfunc_leave_event(event: Event): boolean;
        /**
         * Sets the %CLUTTER_ACTOR_MAPPED flag on the actor and possibly maps
         * and realizes its children if they are visible. Does nothing if the
         * actor is not visible.
         *
         * Calling this function is strongly discouraged: the default
         * implementation of [vfunc`Clutter`.Actor.map] will map all the children
         * of an actor when mapping its parent.
         *
         * When overriding map, it is mandatory to chain up to the parent
         * implementation.
         */
        vfunc_map(): void;
        /**
         * signal class closure for [signal`Clutter`.Actor::motion-event]
         * @param event
         */
        vfunc_motion_event(event: Event): boolean;
        /**
         * Renders the actor to display.
         *
         * This function should not be called directly by applications.
         * Call clutter_actor_queue_redraw() to queue paints, instead.
         *
         * This function is context-aware, and will either cause a
         * regular paint or a pick paint.
         *
         * This function will call the [vfunc`Clutter`.Actor.paint] virtual
         * function.
         *
         * This function does not paint the actor if the actor is set to 0,
         * unless it is performing a pick paint.
         * @param paint_context
         */
        vfunc_paint(paint_context: PaintContext): void;
        /**
         * virtual function for creating paint nodes and attaching
         *   them to the render tree
         * @param root
         * @param paint_context
         */
        vfunc_paint_node(root: PaintNode, paint_context: PaintContext): void;
        /**
         * signal class handler for the [signal`Clutter`.Actor::parent-set]
         * @param old_parent
         */
        vfunc_parent_set(old_parent: Actor): void;
        /**
         * Asks `actor` to perform a pick.
         * @param pick_context
         */
        vfunc_pick(pick_context: PickContext): void;
        /**
         * Indicates that the actor's size request or other layout-affecting
         * properties may have changed. This function is used inside #ClutterActor
         * subclass implementations, not by applications directly.
         *
         * Queueing a new layout automatically queues a redraw as well.
         */
        vfunc_queue_relayout(): void;
        /**
         * Realization informs the actor that it is attached to a stage. It
         * can use this to allocate resources if it wanted to delay allocation
         * until it would be rendered. However it is perfectly acceptable for
         * an actor to create resources before being realized because Clutter
         * only ever has a single rendering context so that actor is free to
         * be moved from one stage to another.
         *
         * This function does nothing if the actor is already realized.
         *
         * Because a realized actor must have realized parent actors, calling
         * clutter_actor_realize() will also realize all parents of the actor.
         *
         * This function does not realize child actors, except in the special
         * case that realizing the stage, when the stage is visible, will
         * suddenly map (and thus realize) the children of the stage.
         */
        vfunc_realize(): void;
        vfunc_resource_scale_changed(): void;
        /**
         * signal class closure for [signal`Clutter`.Actor::scroll-event]
         * @param event
         */
        vfunc_scroll_event(event: Event): boolean;
        /**
         * Flags an actor to be displayed. An actor that isn't shown will not
         * be rendered on the stage.
         *
         * Actors are visible by default.
         *
         * If this function is called on an actor without a parent, the
         * [property`Clutter`.Actor:show-on-set-parent] will be set to %TRUE as a side
         * effect.
         */
        vfunc_show(): void;
        /**
         * signal class closure for [signal`Clutter`.Actor::touch-event]
         * @param event
         */
        vfunc_touch_event(event: Event): boolean;
        /**
         * Unsets the %CLUTTER_ACTOR_MAPPED flag on the actor and possibly
         * unmaps its children if they were mapped.
         *
         * Calling this function is not encouraged: the default #ClutterActor
         * implementation of [vfunc`Clutter`.Actor.unmap] will also unmap any
         * eventual children by default when their parent is unmapped.
         *
         * When overriding [vfunc`Clutter`.Actor.unmap], it is mandatory to
         * chain up to the parent implementation.
         *
         * It is important to note that the implementation of the
         * [vfunc`Clutter`.Actor.unmap] virtual function may be called after
         * the [vfunc`Clutter`.Actor.destroy] or the [vfunc`GObject`.Object.dispose]
         * implementation, but it is guaranteed to be called before the
         * [vfunc`GObject`.Object.finalize] implementation.
         */
        vfunc_unmap(): void;
        /**
         * Unrealization informs the actor that it may be being destroyed or
         * moved to another stage. The actor may want to destroy any
         * underlying graphics resources at this point. However it is
         * perfectly acceptable for it to retain the resources until the actor
         * is destroyed because Clutter only ever uses a single rendering
         * context and all of the graphics resources are valid on any stage.
         *
         * Because mapped actors must be realized, actors may not be
         * unrealized if they are mapped. This function hides the actor to be
         * sure it isn't mapped, an application-visible side effect that you
         * may not be expecting.
         *
         * This function should not be called by application code.
         *
         * This function should not really be in the public API, because
         * there isn't a good reason to call it. ClutterActor will already
         * unrealize things for you when it's important to do so.
         *
         * If you were using clutter_actor_unrealize() in a dispose
         * implementation, then don't, just chain up to ClutterActor's
         * dispose.
         *
         * If you were using clutter_actor_unrealize() to implement
         * unrealizing children of your container, then don't, ClutterActor
         * will already take care of that.
         */
        vfunc_unrealize(): void;

        // Methods

        /**
         * Adds `action` to the list of actions applied to `self`
         *
         * A #ClutterAction can only belong to one actor at a time
         *
         * The #ClutterActor will hold a reference on `action` until either
         * [method`Clutter`.Actor.remove_action] or [method`Clutter`.Actor.clear_actions]
         * is called
         * @param action a #ClutterAction
         */
        add_action(action: Action): void;
        add_action_full(name: string, phase: EventPhase | null, action: Action): void;
        /**
         * A convenience function for setting the name of a #ClutterAction
         * while adding it to the list of actions applied to `self`
         *
         * This function is the logical equivalent of:
         *
         * ```c
         *   clutter_actor_meta_set_name (CLUTTER_ACTOR_META (action), name);
         *   clutter_actor_add_action (self, action);
         * ```
         * @param name the name to set on the action
         * @param action a #ClutterAction
         */
        add_action_with_name(name: string, action: Action): void;
        /**
         * Adds `child` to the children of `self`.
         *
         * This function will acquire a reference on `child` that will only
         * be released when calling [method`Clutter`.Actor.remove_child].
         *
         * This function will take into consideration the depth
         * of `child,` and will keep the list of children sorted.
         *
         * This function will emit the [signal`Clutter`.Actor::child-added] signal
         * on `self`.
         * @param child a #ClutterActor
         */
        add_child(child: Actor): void;
        /**
         * Adds `constraint` to the list`of `ClutterConstraint`s applied
         * to `self`
         *
         * The #ClutterActor will hold a reference on the `constraint` until
         * either [method`Clutter`.Actor.remove_constraint] or
         * [method`Clutter`.Actor.clear_constraints] is called.
         * @param constraint a #ClutterConstraint
         */
        add_constraint(constraint: Constraint): void;
        /**
         * A convenience function for setting the name of a #ClutterConstraint
         * while adding it to the list of constraints applied to `self`
         *
         * This function is the logical equivalent of:
         *
         * ```c
         *   clutter_actor_meta_set_name (CLUTTER_ACTOR_META (constraint), name);
         *   clutter_actor_add_constraint (self, constraint);
         * ```
         * @param name the name to set on the constraint
         * @param constraint a #ClutterConstraint
         */
        add_constraint_with_name(name: string, constraint: Constraint): void;
        /**
         * Adds `effect` to the list of [class`Clutter`.Effect]s applied to `self`
         *
         * The #ClutterActor will hold a reference on the `effect` until either
         * [method`Clutter`.Actor.remove_effect] or [method`Clutter`.Actor.clear_effects] is
         * called.
         * @param effect a #ClutterEffect
         */
        add_effect(effect: Effect): void;
        /**
         * A convenience function for setting the name of a #ClutterEffect
         * while adding it to the list of effectss applied to `self`
         *
         * This function is the logical equivalent of:
         *
         * ```c
         *   clutter_actor_meta_set_name (CLUTTER_ACTOR_META (effect), name);
         *   clutter_actor_add_effect (self, effect);
         * ```
         * @param name the name to set on the effect
         * @param effect a #ClutterEffect
         */
        add_effect_with_name(name: string, effect: Effect): void;
        /**
         * Adds a `transition` to the #ClutterActor's list of animations.
         *
         * The `name` string is a per-actor unique identifier of the `transition:` only
         * one #ClutterTransition can be associated to the specified `name`.
         *
         * The `transition` will be started once added.
         *
         * This function will take a reference on the `transition`.
         *
         * This function is usually called implicitly when modifying an animatable
         * property.
         * @param name the name of the transition to add
         * @param transition the #ClutterTransition to add
         */
        add_transition(name: string, transition: Transition): void;
        /**
         * Assigns the size of a #ClutterActor from the given `box`.
         *
         * This function should only be called on the children of an actor when
         * overriding the [vfunc`Clutter`.Actor.allocate] virtual function.
         *
         * This function will adjust the stored allocation to take into account
         * the alignment flags set in the [property`Clutter`.Actor:x-align] and
         * [property`Clutter`.Actor:y-align] properties, as well as the margin values set in
         * the[property`Clutter`.Actor:margin-top], [property`Clutter`.Actor:margin-right],
         * [property`Clutter`.Actor:margin-bottom], and
         * [property`Clutter`.Actor:margin-left] properties.
         *
         * This function will respect the easing state of the #ClutterActor and
         * interpolate between the current allocation and the new one if the
         * easing state duration is a positive value.
         *
         * Actors can know from their allocation box whether they have moved
         * with respect to their parent actor. The `flags` parameter describes
         * additional information about the allocation, for instance whether
         * the parent has moved with respect to the stage, for example because
         * a grandparent's origin has moved.
         * @param box new allocation of the actor, in parent-relative coordinates
         */
        allocate(box: ActorBox): void;
        /**
         * Allocates `self` by taking into consideration the available allocation
         * area; an alignment factor on either axis; and whether the actor should
         * fill the allocation on either axis.
         *
         * The `box` should contain the available allocation width and height;
         * if the x1 and y1 members of #ClutterActorBox are not set to 0, the
         * allocation will be offset by their value.
         *
         * This function takes into consideration the geometry request specified by
         * the [property`Clutter`.Actor:request-mode] property, and the text direction.
         *
         * This function is useful for fluid layout managers using legacy alignment
         * flags. Newly written layout managers should use the
         * [property`Clutter`.Actor:x-align] and [property`Clutter`.Actor:y-align]
         * properties, instead, and just call [method`Clutter`.Actor.allocate]
         * inside their [vfunc`Clutter`.Actor.allocate] implementation.
         * @param box a #ClutterActorBox, containing the available width and height
         * @param x_align the horizontal alignment, between 0 and 1
         * @param y_align the vertical alignment, between 0 and 1
         * @param x_fill whether the actor should fill horizontally
         * @param y_fill whether the actor should fill vertically
         */
        allocate_align_fill(box: ActorBox, x_align: number, y_align: number, x_fill: boolean, y_fill: boolean): void;
        /**
         * Allocates `self` taking into account the #ClutterActor's
         * preferred size, but limiting it to the maximum available width
         * and height provided.
         *
         * This function will do the right thing when dealing with the
         * actor's request mode.
         *
         * The implementation of this function is equivalent to:
         *
         * ```c
         *   if (request_mode == CLUTTER_REQUEST_HEIGHT_FOR_WIDTH)
         *     {
         *       clutter_actor_get_preferred_width (self, available_height,
         *                                          &min_width,
         *                                          &natural_width);
         *       width = CLAMP (natural_width, min_width, available_width);
         *
         *       clutter_actor_get_preferred_height (self, width,
         *                                           &min_height,
         *                                           &natural_height);
         *       height = CLAMP (natural_height, min_height, available_height);
         *     }
         *   else if (request_mode == CLUTTER_REQUEST_WIDTH_FOR_HEIGHT)
         *     {
         *       clutter_actor_get_preferred_height (self, available_width,
         *                                           &min_height,
         *                                           &natural_height);
         *       height = CLAMP (natural_height, min_height, available_height);
         *
         *       clutter_actor_get_preferred_width (self, height,
         *                                          &min_width,
         *                                          &natural_width);
         *       width = CLAMP (natural_width, min_width, available_width);
         *     }
         *   else if (request_mode == CLUTTER_REQUEST_CONTENT_SIZE)
         *     {
         *       clutter_content_get_preferred_size (content, &natural_width, &natural_height);
         *
         *       width = CLAMP (natural_width, 0, available_width);
         *       height = CLAMP (natural_height, 0, available_height);
         *     }
         *
         *   box.x1 = x; box.y1 = y;
         *   box.x2 = box.x1 + available_width;
         *   box.y2 = box.y1 + available_height;
         *   clutter_actor_allocate (self, &box);
         * ```
         *
         * This function can be used by fluid layout managers to allocate
         * an actor's preferred size without making it bigger than the area
         * available for the container.
         * @param x the actor's X coordinate
         * @param y the actor's Y coordinate
         * @param available_width the maximum available width, or -1 to use the   actor's natural width
         * @param available_height the maximum available height, or -1 to use the   actor's natural height
         */
        allocate_available_size(x: number, y: number, available_width: number, available_height: number): void;
        /**
         * Allocates the natural size of `self`.
         *
         * This function is a utility call for #ClutterActor implementations
         * that allocates the actor's preferred natural size. It can be used
         * by fixed layout managers (like #ClutterGroup or so called
         * 'composite actors') inside the [vfunc`Clutter`.Actor.allocate]
         * implementation to give each child exactly how much space it
         * requires, regardless of the size of the parent.
         *
         * This function is not meant to be used by applications. It is also
         * not meant to be used outside the implementation of the
         * #ClutterActorClass.allocate virtual function.
         * @param x the actor's X coordinate
         * @param y the actor's Y coordinate
         */
        allocate_preferred_size(x: number, y: number): void;
        /**
         * Transforms `point` in coordinates relative to the actor into
         * ancestor-relative coordinates using the relevant transform
         * stack (i.e. scale, rotation, etc).
         *
         * If `ancestor` is %NULL the ancestor will be the #ClutterStage. In
         * this case, the coordinates returned will be the coordinates on
         * the stage before the projection is applied. This is different from
         * the behaviour of clutter_actor_apply_transform_to_point().
         * @param ancestor A #ClutterActor ancestor, or %NULL to use the   default #ClutterStage
         * @param point A point as #graphene_point3d_t
         */
        apply_relative_transform_to_point(ancestor: Actor | null, point: Graphene.Point3D): Graphene.Point3D;
        /**
         * Transforms `point` in coordinates relative to the actor
         * into screen-relative coordinates with the current actor
         * transformation (i.e. scale, rotation, etc)
         * @param point A point as #graphene_point3d_t
         */
        apply_transform_to_point(point: Graphene.Point3D): Graphene.Point3D;
        /**
         * Binds a #GListModel to a #ClutterActor.
         *
         * If the #ClutterActor was already bound to a #GListModel, the previous
         * binding is destroyed.
         *
         * The existing children of #ClutterActor are destroyed when setting a
         * model, and new children are created and added, representing the contents
         * of the `model`. The #ClutterActor is updated whenever the `model` changes.
         * If `model` is %NULL, the #ClutterActor is left empty.
         *
         * When a #ClutterActor is bound to a model, adding and removing children
         * directly is undefined behaviour.4
         * @param model a #GListModel
         * @param create_child_func a function that creates #ClutterActor instances   from the contents of the @model
         */
        bind_model(model: Gio.ListModel | null, create_child_func: ActorCreateChildFunc): void;
        /**
         * Clears the list of actions applied to `self`
         */
        clear_actions(): void;
        /**
         * Clears the list of constraints applied to `self`
         */
        clear_constraints(): void;
        /**
         * Clears the list of effects applied to `self`
         */
        clear_effects(): void;
        /**
         * Determines if `descendant` is contained inside `self` (either as an
         * immediate child, or as a deeper descendant). If `self` and
         * `descendant` point to the same actor then it will also return %TRUE.
         * @param descendant A #ClutterActor, possibly contained in @self
         * @returns whether @descendent is contained within @self
         */
        contains(descendant: Actor): boolean;
        /**
         * Run the next stage of the paint sequence. This function should only
         * be called within the implementation of the ‘run’ virtual of a
         * #ClutterEffect. It will cause the run method of the next effect to
         * be applied, or it will paint the actual actor if the current effect
         * is the last effect in the chain.
         * @param paint_context
         */
        continue_paint(paint_context: PaintContext): void;
        /**
         * Run the next stage of the pick sequence. This function should only
         * be called within the implementation of the ‘pick’ virtual of a
         * #ClutterEffect. It will cause the run method of the next effect to
         * be applied, or it will pick the actual actor if the current effect
         * is the last effect in the chain.
         * @param pick_context
         */
        continue_pick(pick_context: PickContext): void;
        /**
         * Creates a #PangoContext for the given actor. The #PangoContext
         * is already configured using the appropriate font map, resolution
         * and font options.
         *
         * See also [method`Clutter`.Actor.get_pango_context].
         * @returns the newly created #PangoContext.   Use g_object_unref() on the returned value to deallocate its   resources
         */
        create_pango_context(): Pango.Context;
        /**
         * Creates a new #PangoLayout from the same #PangoContext used
         * by the #ClutterActor. The #PangoLayout is already configured
         * with the font map, resolution and font options, and the
         * given `text`.
         *
         * If you want to keep around a #PangoLayout created by this
         * function you will have to connect to the #ClutterBackend::font-changed
         * and #ClutterBackend::resolution-changed signals, and call
         * pango_layout_context_changed() in response to them.
         * @param text the text to set on the #PangoLayout, or %NULL
         * @returns the newly created #PangoLayout.   Use g_object_unref() when done
         */
        create_pango_layout(text?: string | null): Pango.Layout;
        /**
         * Creates a #ClutterPaintNode initialized using the state of the
         * given #ClutterActor, ready to be used inside the implementation
         * of the #ClutterActorClass.paint_node virtual function.
         *
         * The returned paint node has the geometry set to the size of the
         * [property`Clutter`.Actor:content-box] property; it uses the filters specified
         * in the [property`Clutter`.Actor:minification-filter]
         * and [property`Clutter`.Actor:magnification-filter]
         * properties; and respects the [property`Clutter`.Actor:content-repeat] property.
         * @param texture a #CoglTexture
         * @returns The newly created #ClutterPaintNode4
         */
        create_texture_paint_node(texture: Cogl.Texture): PaintNode;
        /**
         * Destroys an actor.  When an actor is destroyed, it will break any
         * references it holds to other objects.  If the actor is inside a
         * container, the actor will be removed.
         *
         * When you destroy a container, its children will be destroyed as well.
         */
        destroy(): void;
        /**
         * Destroys all children of `self`.
         *
         * This function releases the reference added by inserting a child
         * actor in the list of children of `self,` and ensures that the
         * [signal`Clutter`.Actor::destroy] signal is emitted on each child of the
         * actor.
         *
         * By default, #ClutterActor will emit the [signal`Clutter`.Actor::destroy] signal
         * when its reference count drops to 0; the default handler of the
         * [signal`Clutter`.Actor::destroy] signal will destroy all the children of an
         * actor. This function ensures that all children are destroyed, instead
         * of just removed from `self,` unlike [method`Clutter`.Actor.remove_all_children]
         * which will merely release the reference and remove each child.
         *
         * Unless you acquired an additional reference on each child of `self`
         * prior to calling [method`Clutter`.Actor.remove_all_children] and want to reuse
         * the actors, you should use [method`Clutter`.Actor.destroy_all_children] in
         * order to make sure that children are destroyed and signal handlers
         * are disconnected even in cases where circular references prevent this
         * from automatically happening through reference counting alone.
         */
        destroy_all_children(): void;
        /**
         * This function is used to emit an event on the main stage.
         * You should rarely need to use this function, except for
         * synthetising events.
         * @param event a #ClutterEvent
         * @param capture %TRUE if event in in capture phase, %FALSE otherwise.
         * @returns the return value from the signal emission: %TRUE   if the actor handled the event, or %FALSE if the event was   not handled
         */
        event(event: Event, capture: boolean): boolean;
        /**
         * Calculates the transformed screen coordinates of the four corners of
         * the actor; the returned vertices relate to the #ClutterActorBox
         * coordinates  as follows:
         *
         *  - v[0] contains (x1, y1)
         *  - v[1] contains (x2, y1)
         *  - v[2] contains (x1, y2)
         *  - v[3] contains (x2, y2)
         */
        get_abs_allocation_vertices(): Graphene.Point3D[];
        /**
         * Returns the accessible object that describes the actor to an
         * assistive technology.
         *
         * If no class-specific #AtkObject implementation is available for the
         * actor instance in question, it will inherit an #AtkObject
         * implementation from the first ancestor class for which such an
         * implementation is defined.
         *
         * The documentation of the [https://gnome.pages.gitlab.gnome.org/at-spi2-core/atk/](ATK)
         * library contains more information about accessible objects and
         * their uses.
         * @returns the #AtkObject associated with @actor
         */
        get_accessible(): Atk.Object;
        /**
         * Gets the accessible name for this widget. See
         * clutter_actor_set_accessible_name() for more information.
         * @returns a character string representing the accessible name of the widget.
         */
        get_accessible_name(): string;
        /**
         * Gets the #AtkRole for this widget. See
         * clutter_actor_set_accessible_role() for more information.
         * @returns accessible #AtkRole for this widget
         */
        get_accessible_role(): Atk.Role;
        /**
         * Retrieves the #ClutterAction with the given name in the list
         * of actions applied to `self`
         * @param name the name of the action to retrieve
         * @returns a #ClutterAction for the given   name, or %NULL. The returned #ClutterAction is owned by the   actor and it should not be unreferenced directly
         */
        get_action(name: string): Action | null;
        /**
         * Retrieves the list of actions applied to `self`
         * @returns a copy   of the list of `ClutterAction`s. The contents of the list are   owned by the #ClutterActor. Use g_list_free() to free the resources   allocated by the returned #GList
         */
        get_actions(): Action[];
        /**
         * Gets the layout box an actor has been assigned. The allocation can
         * only be assumed valid inside a paint() method; anywhere else, it
         * may be out-of-date.
         *
         * An allocation does not incorporate the actor's scale or translation;
         * those transformations do not affect layout, only rendering.
         *
         * Do not call any of the clutter_actor_get_allocation_*() family
         * of functions inside the implementation of the get_preferred_width()
         * or get_preferred_height() virtual functions.
         */
        get_allocation_box(): ActorBox;
        /**
         * Retrieves the color set using [method`Clutter`.Actor.set_background_color].
         */
        get_background_color(): Cogl.Color;
        /**
         * Retrieves the actor at the given `index_` inside the list of
         * children of `self`.
         * @param index_ the position in the list of children
         * @returns a pointer to a #ClutterActor,   or %NULL
         */
        get_child_at_index(index_: number): Actor | null;
        /**
         * Retrieves the child transformation matrix set using
         * [method`Clutter`.Actor.set_child_transform]; if none is currently set,
         * the `transform` matrix will be initialized to the identity matrix.
         */
        get_child_transform(): Graphene.Matrix;
        /**
         * Retrieves the list of children of `self`.
         * @returns A newly   allocated #GList of `ClutterActor`s. Use g_list_free() when   done.
         */
        get_children(): Actor[];
        /**
         * Gets the clip area for `self,` if any is set.
         */
        get_clip(): [number, number, number, number];
        /**
         * Retrieves the value set using clutter_actor_set_clip_to_allocation()
         * @returns %TRUE if the #ClutterActor is clipped to its allocation
         */
        get_clip_to_allocation(): boolean;
        /**
         * Retrieves the color_state of a [class`Actor]` set by
         * [method`Actor`.set_color_state].
         * @returns the #ClutterColorState
         */
        get_color_state(): ColorState;
        /**
         * Retrieves the #ClutterConstraint with the given name in the list
         * of constraints applied to `self`
         * @param name the name of the constraint to retrieve
         * @returns a #ClutterConstraint for the given   name, or %NULL. The returned #ClutterConstraint is owned by the   actor and it should not be unreferenced directly
         */
        get_constraint(name: string): Constraint | null;
        /**
         * Retrieves the list of constraints applied to `self`
         * @returns a copy   of the list of `ClutterConstraint`s. The contents of the list are   owned by the #ClutterActor. Use g_list_free() to free the resources   allocated by the returned #GList
         */
        get_constraints(): Constraint[];
        /**
         * Retrieves the contents of `self`.
         * @returns a pointer to the #ClutterContent   instance, or %NULL if none was set
         */
        get_content(): B | null;
        /**
         * Retrieves the bounding box for the #ClutterContent of `self`.
         *
         * The bounding box is relative to the actor's allocation.
         *
         * If no #ClutterContent is set for `self,` or if `self` has not been
         * allocated yet, then the result is undefined.
         *
         * The content box is guaranteed to be, at most, as big as the allocation
         * of the #ClutterActor.
         *
         * If the #ClutterContent used by the actor has a preferred size, then
         * it is possible to modify the content box by using the
         * [property`Clutter`.Actor:content-gravity] property.
         */
        get_content_box(): ActorBox;
        /**
         * Retrieves the content gravity as set using
         * [method`Clutter`.Actor.set_content_gravity].
         * @returns the content gravity
         */
        get_content_gravity(): ContentGravity;
        /**
         * Retrieves the repeat policy for a #ClutterActor set by
         * [method`Clutter`.Actor.set_content_repeat].
         * @returns the content repeat policy
         */
        get_content_repeat(): ContentRepeat;
        /**
         * Retrieves the values set using [method`Clutter`.Actor.set_content_scaling_filters].
         */
        get_content_scaling_filters(): [ScalingFilter | null, ScalingFilter | null];
        get_context(): Context;
        /**
         * Retrieves the delay that should be applied when tweening animatable
         * properties.
         * @returns a delay, in milliseconds
         */
        get_easing_delay(): number;
        /**
         * Retrieves the duration of the tweening for animatable
         * properties of `self` for the current easing state.
         * @returns the duration of the tweening, in milliseconds
         */
        get_easing_duration(): number;
        /**
         * Retrieves the easing mode for the tweening of animatable properties
         * of `self` for the current easing state.
         * @returns an easing mode
         */
        get_easing_mode(): AnimationMode;
        /**
         * Retrieves the #ClutterEffect with the given name in the list
         * of effects applied to `self`
         * @param name the name of the effect to retrieve
         * @returns a #ClutterEffect for the given   name, or %NULL. The returned #ClutterEffect is owned by the   actor and it should not be unreferenced directly
         */
        get_effect(name: string): Effect | null;
        /**
         * Retrieves the `ClutterEffect`s applied on `self,` if any
         * @returns a list   of `ClutterEffect`s, or %NULL. The elements of the returned   list are owned by Clutter and they should not be freed. You should   free the returned list using g_list_free() when done
         */
        get_effects(): Effect[];
        /**
         * Retrieves the first child of `self`.
         *
         * The returned pointer is only valid until the scene graph changes; it
         * is not safe to modify the list of children of `self` while iterating
         * it.
         * @returns a pointer to a #ClutterActor,   or %NULL
         */
        get_first_child(): Actor | null;
        /**
         * This function gets the fixed position of the actor, if set. If there
         * is no fixed position set, this function returns %FALSE and doesn't set
         * the x and y coordinates.
         * @returns %TRUE if the fixed position is set, %FALSE if it isn't
         */
        get_fixed_position(): [boolean, number, number];
        /**
         * Checks whether an actor has a fixed position set (and will thus be
         * unaffected by any layout manager).
         * @returns %TRUE if the fixed position is set on the actor
         */
        get_fixed_position_set(): boolean;
        /**
         * Retrieves the height of a #ClutterActor.
         *
         * If the actor has a valid allocation, this function will return the
         * height of the allocated area given to the actor.
         *
         * If the actor does not have a valid allocation, this function will
         * return the actor's natural height, that is the preferred height of
         * the actor.
         *
         * If you care whether you get the preferred height or the height that
         * has been assigned to the actor, you should probably call a different
         * function like [method`Clutter`.Actor.get_allocation_box] to retrieve the
         * allocated size [method`Clutter`.Actor.get_preferred_height] to retrieve the
         * preferred height.
         *
         * If an actor has a fixed height, for instance a height that has been
         * assigned using [method`Clutter`.Actor.set_height], the height returned will
         * be the same value.
         * @returns the height of the actor, in pixels
         */
        get_height(): number;
        /**
         * Retrieves the last child of `self`.
         *
         * The returned pointer is only valid until the scene graph changes; it
         * is not safe to modify the list of children of `self` while iterating
         * it.
         * @returns a pointer to a #ClutterActor,   or %NULL
         */
        get_last_child(): Actor | null;
        /**
         * Retrieves the #ClutterLayoutManager used by `self`.
         * @returns a pointer to the   #ClutterLayoutManager, or %NULL
         */
        get_layout_manager(): A | null;
        /**
         * Retrieves all the components of the margin of a #ClutterActor.
         */
        get_margin(): Margin;
        /**
         * Retrieves the bottom margin of a #ClutterActor.
         * @returns the bottom margin
         */
        get_margin_bottom(): number;
        /**
         * Retrieves the left margin of a #ClutterActor.
         * @returns the left margin
         */
        get_margin_left(): number;
        /**
         * Retrieves the right margin of a #ClutterActor.
         * @returns the right margin
         */
        get_margin_right(): number;
        /**
         * Retrieves the top margin of a #ClutterActor.
         * @returns the top margin
         */
        get_margin_top(): number;
        /**
         * Retrieves the number of children of `self`.
         * @returns the number of children of an actor
         */
        get_n_children(): number;
        /**
         * Retrieves the name of `self`.
         * @returns the name of the actor, or %NULL. The returned   string is owned by the actor and should not be modified or freed.
         */
        get_name(): string | null;
        /**
         * Retrieves the sibling of `self` that comes after it in the list
         * of children of `self'`s parent.
         *
         * The returned pointer is only valid until the scene graph changes; it
         * is not safe to modify the list of children of `self` while iterating
         * it.
         * @returns a pointer to a #ClutterActor,   or %NULL
         */
        get_next_sibling(): Actor | null;
        /**
         * Retrieves whether to redirect the actor to an offscreen buffer, as
         * set by clutter_actor_set_offscreen_redirect().
         * @returns the value of the offscreen-redirect property of the actor
         */
        get_offscreen_redirect(): OffscreenRedirect;
        /**
         * Retrieves the opacity value of an actor, as set by
         * clutter_actor_set_opacity().
         *
         * For retrieving the absolute opacity of the actor inside a paint
         * virtual function, see clutter_actor_get_paint_opacity().
         * @returns the opacity of the actor
         */
        get_opacity(): number;
        /**
         * See clutter_actor_set_opacity_override()
         * @returns the override value for the actor's opacity, or -1 if no override   is set.2
         */
        get_opacity_override(): number;
        /**
         * Retrieves the paint volume of the passed #ClutterActor, and
         * transforms it into a 2D bounding box in stage coordinates.
         *
         * This function is useful to determine the on screen area occupied by
         * the actor. The box is only an approximation and may often be
         * considerably larger due to the optimizations used to calculate the
         * box. The box is never smaller though, so it can reliably be used
         * for culling.
         *
         * There are times when a 2D paint box can't be determined, e.g.
         * because the actor isn't yet parented under a stage or because
         * the actor is unable to determine a paint volume.
         * @returns %TRUE if a 2D paint box could be determined, else %FALSE.
         */
        get_paint_box(): [boolean, ActorBox];
        /**
         * Retrieves the absolute opacity of the actor, as it appears on the stage.
         *
         * This function traverses the hierarchy chain and composites the opacity of
         * the actor with that of its parents.
         *
         * This function is intended for subclasses to use in the paint virtual
         * function, to paint themselves with the correct opacity.
         * @returns The actor opacity value.
         */
        get_paint_opacity(): number;
        /**
         * Retrieves the 'paint' visibility of an actor recursively checking for non
         * visible parents.
         *
         * This is by definition the same as clutter_actor_is_mapped.
         * @returns %TRUE if the actor is visible and will be painted.
         */
        get_paint_visibility(): boolean;
        /**
         * Retrieves the paint volume of the passed #ClutterActor, or %NULL
         * when a paint volume can't be determined.
         *
         * The paint volume is defined as the 3D space occupied by an actor
         * when being painted.
         *
         * This function will call the [vfunc`Clutter`.Actor.get_paint_volume]
         * virtual function of the #ClutterActor class. Sub-classes of #ClutterActor
         * should not usually care about overriding the default implementation,
         * unless they are, for instance: painting outside their allocation, or
         * actors with a depth factor (not in terms of depth but real
         * 3D depth).
         *
         * Note: 2D actors overriding [vfunc`Clutter`.Actor.get_paint_volume]
         * should ensure that their volume has a depth of 0. (This will be true
         * as long as you don't call [method`Clutter`.PaintVolume.set_depth].)
         * @returns a pointer to a #ClutterPaintVolume,   or %NULL if no volume could be determined. The returned pointer   is not guaranteed to be valid across multiple frames; if you want   to keep it, you will need to copy it using [method@Clutter.PaintVolume.copy].
         */
        get_paint_volume(): PaintVolume | null;
        /**
         * Retrieves the #PangoContext for `self`. The actor's #PangoContext
         * is already configured using the appropriate font map, resolution
         * and font options.
         *
         * Unlike clutter_actor_create_pango_context(), this context is owend
         * by the #ClutterActor and it will be updated each time the options
         * stored by the #ClutterBackend change.
         *
         * You can use the returned #PangoContext to create a #PangoLayout
         * and render text using cogl_pango_show_layout() to reuse the
         * glyphs cache also used by Clutter.
         * @returns the #PangoContext for a #ClutterActor.   The returned #PangoContext is owned by the actor and should not be   unreferenced by the application code
         */
        get_pango_context(): Pango.Context;
        /**
         * Retrieves the parent of `self`.
         * @returns The #ClutterActor parent, or %NULL  if no parent is set
         */
        get_parent(): Actor | null;
        /**
         * Retrieves the coordinates of the [property`Clutter`.Actor:pivot-point].
         */
        get_pivot_point(): [number, number];
        /**
         * Retrieves the Z component of the [property`Clutter`.Actor:pivot-point].
         */
        get_pivot_point_z(): number;
        /**
         * This function tries to "do what you mean" and tell you where the
         * actor is, prior to any transformations. Retrieves the fixed
         * position of an actor in pixels, if one has been set; otherwise, if
         * the allocation is valid, returns the actor's allocated position;
         * otherwise, returns 0,0.
         *
         * The returned position is in pixels.
         */
        get_position(): [number, number];
        /**
         * Computes the requested minimum and natural heights for an actor,
         * or if they are already computed, returns the cached values.
         *
         * An actor may not get its request - depending on the layout
         * manager that's in effect.
         *
         * A request should not incorporate the actor's scale or translation;
         * those transformations do not affect layout, only rendering.
         * @param for_width available width to assume in computing desired height,   or a negative value to indicate that no width is defined
         */
        get_preferred_height(for_width: number): [number, number];
        /**
         * Computes the preferred minimum and natural size of an actor, taking into
         * account the actor's geometry management (either height-for-width
         * or width-for-height).
         *
         * The width and height used to compute the preferred height and preferred
         * width are the actor's natural ones.
         *
         * If you need to control the height for the preferred width, or the width for
         * the preferred height, you should [method`Clutter`.Actor.get_preferred_width]
         * and [method`Clutter`.Actor.get_preferred_height], and check the actor's preferred
         * geometry management using the [property`Clutter`.Actor:request-mode] property.
         */
        get_preferred_size(): [number, number, number, number];
        /**
         * Computes the requested minimum and natural widths for an actor,
         * optionally depending on the specified height, or if they are
         * already computed, returns the cached values.
         *
         * An actor may not get its request - depending on the layout
         * manager that's in effect.
         *
         * A request should not incorporate the actor's scaleor translation;
         * those transformations do not affect layout, only rendering.
         * @param for_height available height when computing the preferred width,   or a negative value to indicate that no height is defined
         */
        get_preferred_width(for_height: number): [number, number];
        /**
         * Retrieves the sibling of `self` that comes before it in the list
         * of children of `self'`s parent.
         *
         * The returned pointer is only valid until the scene graph changes; it
         * is not safe to modify the list of children of `self` while iterating
         * it.
         * @returns a pointer to a #ClutterActor,   or %NULL
         */
        get_previous_sibling(): Actor | null;
        /**
         * Checks whether `actor` is marked as reactive.
         * @returns %TRUE if the actor is reactive
         */
        get_reactive(): boolean;
        /**
         * This gets a transformation `matrix` that will transform coordinates from the
         * coordinate space of `self` into the coordinate space of `ancestor`.
         *
         * For example if you need a matrix that can transform the local actor
         * coordinates of `self` into stage coordinates you would pass the actor's stage
         * pointer as the `ancestor`.
         *
         * If you pass %NULL then the transformation will take you all the way through
         * to eye coordinates. This can be useful if you want to extract the entire
         * modelview transform that Clutter applies before applying the projection
         * transformation. If you want to explicitly set a modelview on a CoglFramebuffer
         * using cogl_set_modelview_matrix() for example then you would want a matrix
         * that transforms into eye coordinates.
         *
         * Note: This function explicitly initializes the given `matrix`. If you just
         * want clutter to multiply a relative transformation with an existing matrix
         * you can use clutter_actor_apply_relative_transformation_matrix()
         * instead.
         * @param ancestor The ancestor actor whose coordinate space you want to transform to            or %NULL if you want to transform all the way to eye coordinates.
         */
        get_relative_transformation_matrix(ancestor: Actor | null): Graphene.Matrix;
        /**
         * Retrieves the geometry request mode of `self`
         * @returns the request mode for the actor
         */
        get_request_mode(): RequestMode;
        /**
         * Retrieves the resource scale for this actor.
         *
         * The resource scale refers to the scale the actor should use for its resources.
         * For example if an actor draws a a picture of size 100 x 100 in the stage
         * coordinate space, it should use a texture of twice the size (i.e. 200 x 200)
         * if the resource scale is 2.
         *
         * The resource scale is determined by calculating the highest #ClutterStageView
         * scale the actor will get painted on.
         *
         * Note that the scale returned by this function is only guaranteed to be
         * correct when queried during the paint cycle, in all other cases this
         * function will only return a best guess. If your implementation really
         * needs to get a resource scale outside of the paint cycle, make sure to
         * subscribe to the "resource-scale-changed" signal to get notified about
         * the new, correct resource scale before painting.
         *
         * Also avoid getting the resource scale for actors that are not attached
         * to a stage. There's no sane way for Clutter to guess which #ClutterStageView
         * the actor is going to be painted on, so you'll probably end up receiving
         * the "resource-scale-changed" signal and having to rebuild your resources.
         *
         * The best guess this function may return is usually just the last resource
         * scale the actor got painted with. If this resource scale couldn't be found
         * because the actor was never painted so far or Clutter was unable to
         * determine its position and size, this function will return the resource
         * scale of a parent.
         * @returns The resource scale the actor should use for its textures
         */
        get_resource_scale(): number;
        /**
         * Retrieves the angle of rotation set by clutter_actor_set_rotation_angle().
         * @param axis the axis of the rotation
         * @returns the angle of rotation, in degrees
         */
        get_rotation_angle(axis: RotateAxis | null): number;
        /**
         * Retrieves an actors scale factors.
         */
        get_scale(): [number, number];
        /**
         * Retrieves the scaling factor along the Z axis, as set using
         * [method`Clutter`.Actor.set_scale_z].
         * @returns the scaling factor along the Z axis
         */
        get_scale_z(): number;
        /**
         * This function tries to "do what you mean" and return
         * the size an actor will have. If the actor has a valid
         * allocation, the allocation will be returned; otherwise,
         * the actors natural size request will be returned.
         *
         * If you care whether you get the request vs. the allocation, you
         * should probably call a different function like
         * [method`Clutter`.Actor.get_allocation_box] or
         * [method`Clutter`.Actor.get_preferred_width].
         */
        get_size(): [number, number];
        /**
         * Retrieves the #ClutterStage where `actor` is contained.
         * @returns the stage   containing the actor, or %NULL
         */
        get_stage(): Stage;
        /**
         * Retrieves the value set using clutter_actor_set_text_direction()
         *
         * If no text direction has been previously set, the default text
         * direction, as returned by clutter_get_default_text_direction(), will
         * be returned instead
         * @returns the #ClutterTextDirection for the actor
         */
        get_text_direction(): TextDirection;
        /**
         * Retrieves the current transformation matrix of a #ClutterActor.
         */
        get_transform(): Graphene.Matrix;
        /**
         * Gets the transformed bounding rect of an actor, in pixels relative to the stage.
         */
        get_transformed_extents(): Graphene.Rect;
        /**
         * Retrieves the 3D paint volume of an actor like
         * [method`Clutter`.Actor.get_paint_volume] does and it additionally
         * transforms the paint volume into the coordinate
         * space of `relative_to_ancestor`. (Or the stage if %NULL
         * is passed for `relative_to_ancestor)`
         *
         * This can be used by containers that base their paint volume on
         * the volume of their children. Such containers can query the
         * transformed paint volume of all of its children and union them
         * together using [method`Clutter`.PaintVolume.union].
         * @param relative_to_ancestor A #ClutterActor that is an ancestor of @self    (or %NULL for the stage)
         * @returns a pointer to a #ClutterPaintVolume,   or %NULL if no volume could be determined.
         */
        get_transformed_paint_volume(relative_to_ancestor: Actor): PaintVolume | null;
        /**
         * Gets the absolute position of an actor, in pixels relative to the stage.
         */
        get_transformed_position(): [number, number];
        /**
         * Gets the absolute size of an actor in pixels, taking into account the
         * scaling factors.
         *
         * If the actor has a valid allocation, the allocated size will be used.
         * If the actor has not a valid allocation then the preferred size will
         * be transformed and returned.
         *
         * If you want the transformed allocation, see
         * [method`Clutter`.Actor.get_abs_allocation_vertices] instead.
         *
         * When the actor (or one of its ancestors) is rotated around the
         * X or Y axis, it no longer appears as on the stage as a rectangle, but
         * as a generic quadrangle; in that case this function returns the size
         * of the smallest rectangle that encapsulates the entire quad. Please
         * note that in this case no assumptions can be made about the relative
         * position of this envelope to the absolute position of the actor, as
         * returned by [method`Clutter`.Actor.get_transformed_position]; if you need this
         * information, you need to use [method`Clutter`.Actor.get_abs_allocation_vertices]
         * to get the coords of the actual quadrangle.
         */
        get_transformed_size(): [number, number];
        /**
         * Retrieves the #ClutterTransition of a #ClutterActor by using the
         * transition `name`.
         *
         * Transitions created for animatable properties use the name of the
         * property itself, for instance the code below:
         *
         * ```c
         *   clutter_actor_set_easing_duration (actor, 1000);
         *   clutter_actor_set_rotation_angle (actor, CLUTTER_Y_AXIS, 360.0);
         *
         *   transition = clutter_actor_get_transition (actor, "rotation-angle-y");
         *   g_signal_connect (transition, "stopped",
         *                     G_CALLBACK (on_transition_stopped),
         *                     actor);
         * ```
         *
         * will call the `on_transition_stopped` callback when the transition
         * is finished.
         *
         * If you just want to get notifications of the completion of a transition,
         * you should use the [signal`Clutter`.Actor::transition-stopped] signal, using the
         * transition name as the signal detail.
         * @param name the name of the transition
         * @returns a #ClutterTransition, or %NULL if   none was found to match the passed name; the returned instance is owned   by Clutter and it should not be freed
         */
        get_transition(name: string): Transition | null;
        /**
         * Retrieves the translation set using clutter_actor_set_translation().
         */
        get_translation(): [number, number, number];
        /**
         * Retrieves the width of a #ClutterActor.
         *
         * If the actor has a valid allocation, this function will return the
         * width of the allocated area given to the actor.
         *
         * If the actor does not have a valid allocation, this function will
         * return the actor's natural width, that is the preferred width of
         * the actor.
         *
         * If you care whether you get the preferred width or the width that
         * has been assigned to the actor, you should probably call a different
         * function like [method`Clutter`.Actor.get_allocation_box] to retrieve the
         * allocated size [method`Clutter`.Actor.get_preferred_width] to retrieve the
         * preferred width.
         *
         * If an actor has a fixed width, for instance a width that has been
         * assigned using [method`Clutter`.Actor.set_width], the width returned will
         * be the same value.
         * @returns the width of the actor, in pixels
         */
        get_width(): number;
        /**
         * Retrieves the X coordinate of a #ClutterActor.
         *
         * This function tries to "do what you mean", by returning the
         * correct value depending on the actor's state.
         *
         * If the actor has a valid allocation, this function will return
         * the X coordinate of the origin of the allocation box.
         *
         * If the actor has any fixed coordinate set using [method`Clutter`.Actor.set_x],
         * [method`Clutter`.Actor.set_position], this function will return that coordinate.
         *
         * If both the allocation and a fixed position are missing, this function
         * will return 0.
         * @returns the X coordinate, in pixels, ignoring any   transformation (i.e. scaling, rotation)
         */
        get_x(): number;
        /**
         * Retrieves the horizontal alignment policy set using
         * [method`Clutter`.Actor.set_x_align].
         * @returns the horizontal alignment policy.
         */
        get_x_align(): ActorAlign;
        /**
         * Retrieves the value set with [method`Clutter`.Actor.set_x_expand].
         *
         * See also: [method`Clutter`.Actor.needs_expand]
         * @returns %TRUE if the actor has been set to expand
         */
        get_x_expand(): boolean;
        /**
         * Retrieves the Y coordinate of a #ClutterActor.
         *
         * This function tries to "do what you mean", by returning the
         * correct value depending on the actor's state.
         *
         * If the actor has a valid allocation, this function will return
         * the Y coordinate of the origin of the allocation box.
         *
         * If the actor has any fixed coordinate set using [method`Clutter`.Actor.set_y],
         * [method`Clutter`.Actor.set_position], this function will return that coordinate.
         *
         * If both the allocation and a fixed position are missing, this function
         * will return 0.
         * @returns the Y coordinate, in pixels, ignoring any   transformation (i.e. scaling, rotation)
         */
        get_y(): number;
        /**
         * Retrieves the vertical alignment policy set using
         * [method`Clutter`.Actor.set_y_align].
         * @returns the vertical alignment policy.
         */
        get_y_align(): ActorAlign;
        /**
         * Retrieves the value set with [method`Clutter`.Actor.set_y_expand].
         *
         * See also: [method`Clutter`.Actor.needs_expand]
         * @returns %TRUE if the actor has been set to expand
         */
        get_y_expand(): boolean;
        /**
         * Retrieves the actor's position on the Z axis.
         * @returns the position on the Z axis.
         */
        get_z_position(): number;
        /**
         * Sets the key focus of the #ClutterStage including `self`
         * to this #ClutterActor.
         */
        grab_key_focus(): void;
        /**
         * Returns whether the actor has any actions applied.
         * @returns %TRUE if the actor has any actions,   %FALSE otherwise
         */
        has_actions(): boolean;
        /**
         * Checks if the actor has an up-to-date allocation assigned to
         * it. This means that the actor should have an allocation: it's
         * visible and has a parent. It also means that there is no
         * outstanding relayout request in progress for the actor or its
         * children (There might be other outstanding layout requests in
         * progress that will cause the actor to get a new allocation
         * when the stage is laid out, however).
         *
         * If this function returns %FALSE, then the actor will normally
         * be allocated before it is next drawn on the screen.
         * @returns %TRUE if the actor has an up-to-date allocation
         */
        has_allocation(): boolean;
        /**
         * Returns whether the actor has any constraints applied.
         * @returns %TRUE if the actor has any constraints,   %FALSE otherwise
         */
        has_constraints(): boolean;
        has_damage(): boolean;
        /**
         * Returns whether the actor has any effects applied.
         * @returns %TRUE if the actor has any effects,   %FALSE otherwise
         */
        has_effects(): boolean;
        /**
         * Checks whether `self` is the #ClutterActor that has key focus
         * @returns %TRUE if the actor has key focus, and %FALSE otherwise
         */
        has_key_focus(): boolean;
        /**
         * Returns whether a #ClutterActor or any parent actors have mapped clones
         * that are clone-painting `self`.
         * @returns %TRUE if the actor has mapped clones, %FALSE otherwise
         */
        has_mapped_clones(): boolean;
        /**
         * Asks the actor's implementation whether it may contain overlapping
         * primitives.
         *
         * For example; Clutter may use this to determine whether the painting
         * should be redirected to an offscreen buffer to correctly implement
         * the opacity property.
         *
         * Custom actors can override the default response by implementing the
         * [vfunc`Clutter`.Actor.has_overlaps]. See
         * [method`Clutter`.Actor.set_offscreen_redirect] for more information.
         * @returns %TRUE if the actor may have overlapping primitives, and   %FALSE otherwise
         */
        has_overlaps(): boolean;
        /**
         * Flags an actor to be hidden. A hidden actor will not be
         * rendered on the stage.
         *
         * Actors are visible by default.
         *
         * If this function is called on an actor without a parent, the
         * [property`Clutter`.Actor:show-on-set-parent] property will be set to %FALSE
         * as a side-effect.
         */
        hide(): void;
        /**
         * Increases the culling inhibitor counter. Inhibiting culling
         * forces the actor to be painted even when outside the visible
         * bounds of the stage view.
         *
         * This is usually necessary when an actor is being painted on
         * another paint context.
         *
         * Pair with clutter_actor_uninhibit_culling() when the actor doesn't
         * need to be painted anymore.
         */
        inhibit_culling(): void;
        /**
         * Inserts `child` into the list of children of `self,` above another
         * child of `self` or, if `sibling` is %NULL, above all the children
         * of `self`.
         *
         * This function will acquire a reference on `child` that will only
         * be released when calling [method`Clutter`.Actor.remove_child].
         *
         * This function will not take into consideration the depth
         * of `child`.
         *
         * This function will emit the [signal`Clutter`.Actor::child-added] signal
         * on `self`.
         * @param child a #ClutterActor
         * @param sibling a child of @self, or %NULL
         */
        insert_child_above(child: Actor, sibling?: Actor | null): void;
        /**
         * Inserts `child` into the list of children of `self,` using the
         * given `index_`. If `index_` is greater than the number of children
         * in `self,` or is less than 0, then the new child is added at the end.
         *
         * This function will acquire a reference on `child` that will only
         * be released when calling [method`Clutter`.Actor.remove_child].
         *
         * This function will not take into consideration the depth
         * of `child`.
         *
         * This function will emit the [signal`Clutter`.Actor::child-added] signal
         * on `self`.
         * @param child a #ClutterActor
         * @param index_ the index
         */
        insert_child_at_index(child: Actor, index_: number): void;
        /**
         * Inserts `child` into the list of children of `self,` below another
         * child of `self` or, if `sibling` is %NULL, below all the children
         * of `self`.
         *
         * This function will acquire a reference on `child` that will only
         * be released when calling [method`Clutter`.Actor.remove_child].
         *
         * This function will not take into consideration the depth
         * of `child`.
         *
         * This function will emit the [signal`Clutter`.Actor::child-added] signal
         * on `self`.
         * @param child a #ClutterActor
         * @param sibling a child of @self, or %NULL
         */
        insert_child_below(child: Actor, sibling?: Actor | null): void;
        /**
         * Invalidates the cached paint volume of `self`. This is needed for
         * implementations overriding the [vfunc`Clutter`.Actor.get_paint_volume]
         * virtual function and has to be called every time the paint volume
         * returned by that function would change.
         */
        invalidate_paint_volume(): void;
        /**
         * Invalidate the cached transformation matrix of `self`.
         * This is needed for implementations overriding the apply_transform()
         * vfunc and has to be called if the matrix returned by apply_transform()
         * would change.
         */
        invalidate_transform(): void;
        is_effectively_on_stage_view(view: StageView): boolean;
        /**
         * Checks whether `self` is being currently painted by a #ClutterClone
         *
         * This function is useful only inside implementations of the
         * [vfunc`Clutter`.Actor.paint] virtual function.
         *
         * This function should not be used by applications
         * @returns %TRUE if the #ClutterActor is currently being painted   by a #ClutterClone, and %FALSE otherwise
         */
        is_in_clone_paint(): boolean;
        /**
         * Checks whether a #ClutterActor has been set as mapped.
         *
         * See also [property`Clutter`.Actor:mapped]
         * @returns %TRUE if the actor is mapped4
         */
        is_mapped(): boolean;
        /**
         * Checks whether `actor` is marked as no layout.
         *
         * That means the `actor` provides an explicit layout management
         * policy for its children; this will prevent Clutter from automatic
         * queueing of relayout and will defer all layouting to the actor itself
         * @returns %TRUE if the actor is marked as no layout
         */
        is_no_layout(): boolean;
        /**
         * Checks whether a #ClutterActor is realized.
         * @returns %TRUE if the actor is realized4
         */
        is_realized(): boolean;
        /**
         * Checks whether any rotation is applied to the actor.
         * @returns %TRUE if the actor is rotated.
         */
        is_rotated(): boolean;
        /**
         * Checks whether the actor is scaled in either dimension.
         * @returns %TRUE if the actor is scaled.
         */
        is_scaled(): boolean;
        /**
         * Checks whether an actor is marked as visible.
         * @returns %TRUE if the actor visible4
         */
        is_visible(): boolean;
        /**
         * Sets the %CLUTTER_ACTOR_MAPPED flag on the actor and possibly maps
         * and realizes its children if they are visible. Does nothing if the
         * actor is not visible.
         *
         * Calling this function is strongly discouraged: the default
         * implementation of [vfunc`Clutter`.Actor.map] will map all the children
         * of an actor when mapping its parent.
         *
         * When overriding map, it is mandatory to chain up to the parent
         * implementation.
         */
        map(): void;
        /**
         * Moves an actor by the specified distance relative to its current
         * position in pixels.
         *
         * This function modifies the fixed position of an actor and thus removes
         * it from any layout management. Another way to move an actor is with an
         * additional translation, using clutter_actor_set_translation().
         * @param dx Distance to move Actor on X axis.
         * @param dy Distance to move Actor on Y axis.
         */
        move_by(dx: number, dy: number): void;
        /**
         * Checks whether an actor, or any of its children, is set to expand
         * horizontally or vertically.
         *
         * This function should only be called by layout managers that can
         * assign extra space to their children.
         *
         * If you want to know whether the actor was explicitly set to expand,
         * use [method`Clutter`.Actor.get_x_expand] or [method`Clutter`.Actor.get_y_expand].
         * @param orientation the direction of expansion
         * @returns %TRUE if the actor should expand
         */
        needs_expand(orientation: Orientation | null): boolean;
        /**
         * Invalidate the cached transformation matrix of `self` and queue a redraw
         * if the transformation matrix has changed.
         * This is needed for implementations overriding the apply_transform()
         * vfunc and has to be called if the matrix returned by apply_transform()
         * would change due to state outside of the object itself.
         */
        notify_transform_invalid(): void;
        /**
         * Renders the actor to display.
         *
         * This function should not be called directly by applications.
         * Call clutter_actor_queue_redraw() to queue paints, instead.
         *
         * This function is context-aware, and will either cause a
         * regular paint or a pick paint.
         *
         * This function will call the [vfunc`Clutter`.Actor.paint] virtual
         * function.
         *
         * This function does not paint the actor if the actor is set to 0,
         * unless it is performing a pick paint.
         * @param paint_context
         */
        paint(paint_context: PaintContext): void;
        /**
         * Retrieves the list of `ClutterStageView`s the actor is being
         * painted on.
         *
         * If this function is called during the paint cycle, the list is guaranteed
         * to be up-to-date, if called outside the paint cycle, the list will
         * contain the views the actor was painted on last.
         *
         * The list returned by this function is not updated when the actors
         * visibility changes: If an actor gets hidden and is not being painted
         * anymore, this function will return the list of views the actor was
         * painted on last.
         *
         * If an actor is not attached to a stage (realized), this function will
         * always return an empty list.
         * @returns The list of   `ClutterStageView`s the actor is being painted on. The list and   its contents are owned by the #ClutterActor and the list may not be   freed or modified.
         */
        peek_stage_views(): StageView[];
        /**
         * Asks `actor` to perform a pick.
         * @param pick_context
         */
        pick(pick_context: PickContext): void;
        /**
         * Logs (does a virtual paint of) a rectangle for picking. Note that `box` is
         * in the actor's own local coordinates, so is usually {0,0,width,height}
         * to include the whole actor. That is unless the actor has a shaped input
         * region in which case you may wish to log the (multiple) smaller rectangles
         * that make up the input region.
         * @param pick_context The #ClutterPickContext
         * @param box A rectangle in the actor's own local coordinates.
         */
        pick_box(pick_context: PickContext, box: ActorBox): void;
        /**
         * Queues up a redraw of an actor and any children. The redraw occurs
         * once the main loop becomes idle (after the current batch of events
         * has been processed, roughly).
         *
         * Applications rarely need to call this, as redraws are handled
         * automatically by modification functions.
         *
         * This function will not do anything if `self` is not visible, or
         * if the actor is inside an invisible part of the scenegraph.
         *
         * Also be aware that painting is a NOP for actors with an opacity of
         * 0
         *
         * When you are implementing a custom actor you must queue a redraw
         * whenever some private state changes that will affect painting or
         * picking of your actor.
         */
        queue_redraw(): void;
        /**
         * Queues a redraw on `self` limited to a specific, actor-relative
         * rectangular area.
         *
         * If `clip` is %NULL this function is equivalent to
         * clutter_actor_queue_redraw().
         * @param clip a rectangular clip region, or %NULL
         */
        queue_redraw_with_clip(clip?: Mtk.Rectangle | null): void;
        /**
         * Indicates that the actor's size request or other layout-affecting
         * properties may have changed. This function is used inside #ClutterActor
         * subclass implementations, not by applications directly.
         *
         * Queueing a new layout automatically queues a redraw as well.
         */
        queue_relayout(): void;
        /**
         * Realization informs the actor that it is attached to a stage. It
         * can use this to allocate resources if it wanted to delay allocation
         * until it would be rendered. However it is perfectly acceptable for
         * an actor to create resources before being realized because Clutter
         * only ever has a single rendering context so that actor is free to
         * be moved from one stage to another.
         *
         * This function does nothing if the actor is already realized.
         *
         * Because a realized actor must have realized parent actors, calling
         * clutter_actor_realize() will also realize all parents of the actor.
         *
         * This function does not realize child actors, except in the special
         * case that realizing the stage, when the stage is visible, will
         * suddenly map (and thus realize) the children of the stage.
         */
        realize(): void;
        /**
         * Removes `action` from the list of actions applied to `self`
         *
         * The reference held by `self` on the #ClutterAction will be released
         * @param action a #ClutterAction
         */
        remove_action(action: Action): void;
        /**
         * Removes the #ClutterAction with the given name from the list
         * of actions applied to `self`
         * @param name the name of the action to remove
         */
        remove_action_by_name(name: string): void;
        /**
         * Removes all children of `self`.
         *
         * This function releases the reference added by inserting a child actor
         * in the list of children of `self`.
         *
         * If the reference count of a child drops to zero, the child will be
         * destroyed. If you want to ensure the destruction of all the children
         * of `self,` use clutter_actor_destroy_all_children().
         */
        remove_all_children(): void;
        /**
         * Removes all transitions associated to `self`.
         */
        remove_all_transitions(): void;
        /**
         * Removes `child` from the children of `self`.
         *
         * This function will release the reference added by
         * [method`Clutter`.Actor.add_child], so if you want to keep using `child`
         * you will have to acquire a referenced on it before calling this
         * function.
         *
         * This function will emit the [signal`Clutter`.Actor::child-removed]
         * signal on `self`.
         * @param child a #ClutterActor
         */
        remove_child(child: Actor): void;
        /**
         * Removes clip area from `self`.
         */
        remove_clip(): void;
        /**
         * Removes `constraint` from the list of constraints applied to `self`
         *
         * The reference held by `self` on the #ClutterConstraint will be released
         * @param constraint a #ClutterConstraint
         */
        remove_constraint(constraint: Constraint): void;
        /**
         * Removes the #ClutterConstraint with the given name from the list
         * of constraints applied to `self`
         * @param name the name of the constraint to remove
         */
        remove_constraint_by_name(name: string): void;
        /**
         * Removes `effect` from the list of effects applied to `self`
         *
         * The reference held by `self` on the #ClutterEffect will be released
         * @param effect a #ClutterEffect
         */
        remove_effect(effect: Effect): void;
        /**
         * Removes the #ClutterEffect with the given name from the list
         * of effects applied to `self`
         * @param name the name of the effect to remove
         */
        remove_effect_by_name(name: string): void;
        /**
         * Removes the transition stored inside a #ClutterActor using `name`
         * identifier.
         *
         * If the transition is currently in progress, it will be stopped.
         *
         * This function releases the reference acquired when the transition
         * was added to the #ClutterActor.
         * @param name the name of the transition to remove
         */
        remove_transition(name: string): void;
        /**
         * Replaces `old_child` with `new_child` in the list of children of `self`.
         * @param old_child the child of @self to replace
         * @param new_child the #ClutterActor to replace @old_child
         */
        replace_child(old_child: Actor, new_child: Actor): void;
        /**
         * Restores the easing state as it was prior to a call to
         * [method`Clutter`.Actor.save_easing_state].
         */
        restore_easing_state(): void;
        /**
         * Saves the current easing state for animatable properties, and creates
         * a new state with the default values for easing mode and duration.
         *
         * New transitions created after calling this function will inherit the
         * duration, easing mode, and delay of the new easing state; this also
         * applies to transitions modified in flight.
         */
        save_easing_state(): void;
        /**
         * This method allows to set a customly created accessible object to
         * this widget
         *
         * NULL is a valid value for `accessible`. That contemplates the
         * hypothetical case of not needing anymore a custom accessible object
         * for the widget. Next call of [method`Clutter`.Actor.get_accessible] would
         * create and return a default accessible.
         *
         * It assumes that the call to atk_object_initialize that bound the
         * gobject with the custom accessible object was already called, so
         * not a responsibility of this method.
         * @param accessible an accessible
         */
        set_accessible(accessible: Atk.Object): void;
        /**
         * This method sets `name` as the accessible name for `self`.
         *
         * Usually you will have no need to set the accessible name for an
         * object, as usually there is a label for most of the interface
         * elements.
         * @param name a character string to be set as the accessible name
         */
        set_accessible_name(name?: string | null): void;
        /**
         * This method sets `role` as the accessible role for `self`. This
         * role describes what kind of user interface element `self` is and
         * is provided so that assistive technologies know how to present
         * `self` to the user.
         *
         * Usually you will have no need to set the accessible role for an
         * object, as this information is extracted from the context of the
         * object (ie: a #StButton has by default a push button role). This
         * method is only required when you need to redefine the role
         * currently associated with the widget, for instance if it is being
         * used in an unusual way (ie: a #StButton used as a togglebutton), or
         * if a generic object is used directly (ie: a container as a menu
         * item).
         *
         * If `role` is #ATK_ROLE_INVALID, the role will not be changed
         * and the accessible's default role will be used instead.
         * @param role The role to use
         */
        set_accessible_role(role: Atk.Role | null): void;
        /**
         * Stores the allocation of `self` as defined by `box`.
         *
         * This function can only be called from within the implementation of
         * the [vfunc`Clutter`.Actor.allocate] virtual function.
         *
         * The allocation `box` should have been adjusted to take into account
         * constraints, alignment, and margin properties.
         *
         * This function should only be used by subclasses of #ClutterActor
         * that wish to store their allocation but cannot chain up to the
         * parent's implementation; the default implementation of the
         * [vfunc`Clutter`.Actor.allocate] virtual function will call this
         * function.
         * @param box a #ClutterActorBox
         */
        set_allocation(box: ActorBox): void;
        /**
         * Sets the background color of a #ClutterActor.
         *
         * The background color will be used to cover the whole allocation of the
         * actor. The default background color of an actor is transparent.
         *
         * To check whether an actor has a background color, you can use the
         * [property`Clutter`.Actor:background-color-set] actor property.
         *
         * The [property`Clutter`.Actor:background-color] property is animatable.
         * @param color a #CoglColor, or %NULL to unset a previously  set color
         */
        set_background_color(color?: Cogl.Color | null): void;
        /**
         * Sets `child` to be above `sibling` in the list of children of `self`.
         *
         * If `sibling` is %NULL, `child` will be the new last child of `self`.
         *
         * This function is logically equivalent to removing `child` and using
         * clutter_actor_insert_child_above(), but it will not emit signals
         * or change state on `child`.
         * @param child a #ClutterActor child of @self
         * @param sibling a #ClutterActor child of @self, or %NULL
         */
        set_child_above_sibling(child: Actor, sibling?: Actor | null): void;
        /**
         * Changes the index of `child` in the list of children of `self`.
         *
         * This function is logically equivalent to removing `child` and
         * calling clutter_actor_insert_child_at_index(), but it will not
         * emit signals or change state on `child`.
         * @param child a #ClutterActor child of @self
         * @param index_ the new index for @child
         */
        set_child_at_index(child: Actor, index_: number): void;
        /**
         * Sets `child` to be below `sibling` in the list of children of `self`.
         *
         * If `sibling` is %NULL, `child` will be the new first child of `self`.
         *
         * This function is logically equivalent to removing `self` and using
         * clutter_actor_insert_child_below(), but it will not emit signals
         * or change state on `child`.
         * @param child a #ClutterActor child of @self
         * @param sibling a #ClutterActor child of @self, or %NULL
         */
        set_child_below_sibling(child: Actor, sibling?: Actor | null): void;
        /**
         * Sets the transformation matrix to be applied to all the children
         * of `self` prior to their own transformations. The default child
         * transformation is the identity matrix.
         *
         * If `transform` is %NULL, the child transform will be unset.
         *
         * The [property`Clutter`.Actor:child-transform] property is animatable.
         * @param transform a #graphene_matrix_t, or %NULL
         */
        set_child_transform(transform?: Graphene.Matrix | null): void;
        /**
         * Sets clip area for `self`. The clip area is always computed from the
         * upper left corner of the actor.
         * @param xoff X offset of the clip rectangle
         * @param yoff Y offset of the clip rectangle
         * @param width Width of the clip rectangle
         * @param height Height of the clip rectangle
         */
        set_clip(xoff: number, yoff: number, width: number, height: number): void;
        /**
         * Sets whether `self` should be clipped to the same size as its
         * allocation
         * @param clip_set %TRUE to apply a clip tracking the allocation
         */
        set_clip_to_allocation(clip_set: boolean): void;
        /**
         * Set `self'`s color state to `color_state`.
         * @param color_state a #ClutterColorState
         */
        set_color_state(color_state: ColorState): void;
        /**
         * Sets the contents of a #ClutterActor.
         * @param content a #ClutterContent, or %NULL
         */
        set_content(content?: B | null): void;
        /**
         * Sets the gravity of the #ClutterContent used by `self`.
         *
         * See the description of the [property`Clutter`.Actor:content-gravity] property for
         * more information.
         *
         * The [property`Clutter`.Actor:content-gravity] property is animatable.
         * @param gravity the #ClutterContentGravity
         */
        set_content_gravity(gravity: ContentGravity | null): void;
        /**
         * Sets the policy for repeating the [property`Clutter`.Actor:content] of a
         * #ClutterActor. The behaviour is deferred to the #ClutterContent
         * implementation.
         * @param repeat the repeat policy
         */
        set_content_repeat(repeat: ContentRepeat | null): void;
        /**
         * Sets the minification and magnification filter to be applied when
         * scaling the [property`Clutter`.Actor:content] of a #ClutterActor.
         *
         * The [property`Clutter`.Actor:minification-filter] will be used when reducing
         * the size of the content; the [property`Clutter`.Actor:magnification-filter]
         * will be used when increasing the size of the content.
         * @param min_filter the minification filter for the content
         * @param mag_filter the magnification filter for the content
         */
        set_content_scaling_filters(min_filter: ScalingFilter | null, mag_filter: ScalingFilter | null): void;
        /**
         * Sets the delay that should be applied before tweening animatable
         * properties.
         * @param msecs the delay before the start of the tweening, in milliseconds
         */
        set_easing_delay(msecs: number): void;
        /**
         * Sets the duration of the tweening for animatable properties
         * of `self` for the current easing state.
         * @param msecs the duration of the easing, or %NULL
         */
        set_easing_duration(msecs: number): void;
        /**
         * Sets the easing mode for the tweening of animatable properties
         * of `self`.
         * @param mode an easing mode, excluding %CLUTTER_CUSTOM_MODE
         */
        set_easing_mode(mode: AnimationMode | null): void;
        /**
         * Sets whether an actor has a fixed position set (and will thus be
         * unaffected by any layout manager).
         * @param is_set whether to use fixed position
         */
        set_fixed_position_set(is_set: boolean): void;
        /**
         * Forces a height on an actor, causing the actor's preferred width
         * and height (if any) to be ignored.
         *
         * If `height` is -1 the actor will use its preferred height instead of
         * overriding it, i.e. you can "unset" the height with -1.
         *
         * This function sets both the minimum and natural size of the actor.
         * @param height Requested new height for the actor, in pixels, or -1
         */
        set_height(height: number): void;
        /**
         * Sets the #ClutterLayoutManager delegate object that will be used to
         * lay out the children of `self`.
         *
         * The #ClutterActor will take a reference on the passed `manager` which
         * will be released either when the layout manager is removed, or when
         * the actor is destroyed.
         * @param manager a #ClutterLayoutManager, or %NULL to unset it
         */
        set_layout_manager(manager?: A | null): void;
        /**
         * Sets all the components of the margin of a #ClutterActor.
         * @param margin a #ClutterMargin
         */
        set_margin(margin: Margin): void;
        /**
         * Sets the margin from the bottom of a #ClutterActor.
         *
         * The [property`Clutter`.Actor:margin-bottom] property is animatable.
         * @param margin the bottom margin
         */
        set_margin_bottom(margin: number): void;
        /**
         * Sets the margin from the left of a #ClutterActor.
         *
         * The [property`Clutter`.Actor:margin-left] property is animatable.
         * @param margin the left margin
         */
        set_margin_left(margin: number): void;
        /**
         * Sets the margin from the right of a #ClutterActor.
         *
         * The [property`Clutter`.Actor:margin-right] property is animatable.
         * @param margin the right margin
         */
        set_margin_right(margin: number): void;
        /**
         * Sets the margin from the top of a #ClutterActor.
         *
         * The [property`Clutter`.Actor:margin-top] property is animatable.
         * @param margin the top margin
         */
        set_margin_top(margin: number): void;
        /**
         * Sets the given name to `self`. The name can be used to identify
         * a #ClutterActor.
         * @param name Textual tag to apply to actor
         */
        set_name(name?: string | null): void;
        set_no_layout(no_layout: boolean): void;
        /**
         * Defines the circumstances where the actor should be redirected into
         * an offscreen image. The offscreen image is used to flatten the
         * actor into a single image while painting for two main reasons.
         * Firstly, when the actor is painted a second time without any of its
         * contents changing it can simply repaint the cached image without
         * descending further down the actor hierarchy. Secondly, it will make
         * the opacity look correct even if there are overlapping primitives
         * in the actor.
         *
         * Caching the actor could in some cases be a performance win and in
         * some cases be a performance lose so it is important to determine
         * which value is right for an actor before modifying this value. For
         * example, there is never any reason to flatten an actor that is just
         * a single texture (such as a #ClutterTexture) because it is
         * effectively already cached in an image so the offscreen would be
         * redundant. Also if the actor contains primitives that are far apart
         * with a large transparent area in the middle (such as a large
         * CluterGroup with a small actor in the top left and a small actor in
         * the bottom right) then the cached image will contain the entire
         * image of the large area and the paint will waste time blending all
         * of the transparent pixels in the middle.
         *
         * The default method of implementing opacity on a container simply
         * forwards on the opacity to all of the children. If the children are
         * overlapping then it will appear as if they are two separate glassy
         * objects and there will be a break in the color where they
         * overlap. By redirecting to an offscreen buffer it will be as if the
         * two opaque objects are combined into one and then made transparent
         * which is usually what is expected.
         *
         * The image below demonstrates the difference between redirecting and
         * not. The image shows two Clutter groups, each containing a red and
         * a green rectangle which overlap. The opacity on the group is set to
         * 128 (which is 50%). When the offscreen redirect is not used, the
         * red rectangle can be seen through the blue rectangle as if the two
         * rectangles were separately transparent. When the redirect is used
         * the group as a whole is transparent instead so the red rectangle is
         * not visible where they overlap.
         *
         * <figure id="offscreen-redirect">
         *   <title>Sample of using an offscreen redirect for transparency</title>
         *   <graphic fileref="offscreen-redirect.png" format="PNG"/>
         * </figure>
         *
         * The default value for this property is 0, so we effectively will
         * never redirect an actor offscreen by default. This means that there
         * are times that transparent actors may look glassy as described
         * above. The reason this is the default is because there is a
         * performance trade off between quality and performance here. In many
         * cases the default form of glassy opacity looks good enough, but if
         * it's not you will need to set the
         * %CLUTTER_OFFSCREEN_REDIRECT_AUTOMATIC_FOR_OPACITY flag to enable
         * redirection for opacity.
         *
         * Custom actors that don't contain any overlapping primitives are
         * recommended to override the has_overlaps() virtual to return %FALSE
         * for maximum efficiency.
         * @param redirect New offscreen redirect flags for the actor.
         */
        set_offscreen_redirect(redirect: OffscreenRedirect | null): void;
        /**
         * Sets the actor's opacity, with zero being completely transparent and
         * 255 (0xff) being fully opaque.
         *
         * The [property`Clutter`.Actor:opacity] property is animatable.
         * @param opacity New opacity value for the actor.
         */
        set_opacity(opacity: number): void;
        /**
         * Allows overriding the calculated paint opacity (as returned by
         * clutter_actor_get_paint_opacity()). This is used internally by
         * ClutterClone and ClutterOffscreenEffect, and should be used by
         * actors that need to mimic those.
         *
         * In almost all cases this should not used by applications.
         * @param opacity the override opacity value, or -1 to reset
         */
        set_opacity_override(opacity: number): void;
        /**
         * Sets the position of the [property`Clutter`.Actor:pivot-point] around which the
         * scaling and rotation transformations occur.
         *
         * The pivot point's coordinates are in normalized space, with the (0, 0)
         * point being the top left corner of the actor, and the (1, 1) point being
         * the bottom right corner.
         * @param pivot_x the normalized X coordinate of the pivot point
         * @param pivot_y the normalized Y coordinate of the pivot point
         */
        set_pivot_point(pivot_x: number, pivot_y: number): void;
        /**
         * Sets the component on the Z axis of the [property`Clutter`.Actor:pivot-point] around
         * which the scaling and rotation transformations occur.
         *
         * The `pivot_z` value is expressed as a distance along the Z axis.
         * @param pivot_z the Z coordinate of the actor's pivot point
         */
        set_pivot_point_z(pivot_z: number): void;
        /**
         * Sets the actor's fixed position in pixels relative to any parent
         * actor.
         *
         * If a layout manager is in use, this position will override the
         * layout manager and force a fixed position.
         * @param x New left position of actor in pixels.
         * @param y New top position of actor in pixels.
         */
        set_position(x: number, y: number): void;
        /**
         * Sets `actor` as reactive. Reactive actors will receive events.
         * @param reactive whether the actor should be reactive to events
         */
        set_reactive(reactive: boolean): void;
        /**
         * Sets the geometry request mode of `self`.
         *
         * The `mode` determines the order for invoking
         *  [method`Clutter`.Actor.get_preferred_width] and
         *  [method`Clutter`.Actor.get_preferred_height]
         * @param mode the request mode
         */
        set_request_mode(mode: RequestMode | null): void;
        /**
         * Sets the `angle` of rotation of a #ClutterActor on the given `axis`.
         *
         * This function is a convenience for setting the rotation properties
         * [property`Clutter`.Actor:rotation-angle-x], [property`Clutter`.Actor:rotation-angle-y],
         * and [property`Clutter`.Actor:rotation-angle-z].
         *
         * The center of rotation is established by the [property`Clutter`.Actor:pivot-point]
         * property.
         * @param axis the axis to set the angle one
         * @param angle the angle of rotation, in degrees
         */
        set_rotation_angle(axis: RotateAxis | null, angle: number): void;
        /**
         * Scales an actor with the given factors.
         *
         * The scale transformation is relative the [property`Clutter`.Actor:pivot-point].
         *
         * The [property`Clutter`.Actor:scale-x] and [property`Clutter`.Actor:scale-y]
         * properties are animatable.
         * @param scale_x double factor to scale actor by horizontally.
         * @param scale_y double factor to scale actor by vertically.
         */
        set_scale(scale_x: number, scale_y: number): void;
        /**
         * Scales an actor on the Z axis by the given `scale_z` factor.
         *
         * The scale transformation is relative the the [property`Clutter`.Actor:pivot-point].
         *
         * The [property`Clutter`.Actor:scale-z] property is animatable.
         * @param scale_z the scaling factor along the Z axis
         */
        set_scale_z(scale_z: number): void;
        /**
         * Sets the actor's size request in pixels. This overrides any
         * "normal" size request the actor would have. For example
         * a text actor might normally request the size of the text;
         * this function would force a specific size instead.
         *
         * If `width` and/or `height` are -1 the actor will use its
         * "normal" size request instead of overriding it, i.e.
         * you can "unset" the size with -1.
         *
         * This function sets or unsets both the minimum and natural size.
         * @param width New width of actor in pixels, or -1
         * @param height New height of actor in pixels, or -1
         */
        set_size(width: number, height: number): void;
        /**
         * Sets the #ClutterTextDirection for an actor
         *
         * The passed text direction must not be %CLUTTER_TEXT_DIRECTION_DEFAULT
         *
         * This function will recurse inside all the children of `self`
         * @param text_dir the text direction for @self
         */
        set_text_direction(text_dir: TextDirection | null): void;
        /**
         * Overrides the transformations of a #ClutterActor with a custom
         * matrix, which will be applied relative to the origin of the
         * actor's allocation and to the actor's pivot point.
         *
         * The [property`Clutter`.Actor:transform] property is animatable.
         * @param transform a #graphene_matrix_t, or %NULL to   unset a custom transformation
         */
        set_transform(transform?: Graphene.Matrix | null): void;
        /**
         * Sets an additional translation transformation on a #ClutterActor,
         * relative to the [property`Clutter`.Actor:pivot-point].
         * @param translate_x the translation along the X axis
         * @param translate_y the translation along the Y axis
         * @param translate_z the translation along the Z axis
         */
        set_translation(translate_x: number, translate_y: number, translate_z: number): void;
        /**
         * Forces a width on an actor, causing the actor's preferred width
         * and height (if any) to be ignored.
         *
         * If `width` is -1 the actor will use its preferred width request
         * instead of overriding it, i.e. you can "unset" the width with -1.
         *
         * This function sets both the minimum and natural size of the actor.
         * @param width Requested new width for the actor, in pixels, or -1
         */
        set_width(width: number): void;
        /**
         * Sets the actor's X coordinate, relative to its parent, in pixels.
         *
         * Overrides any layout manager and forces a fixed position for
         * the actor.
         *
         * The [property`Clutter`.Actor:x] property is animatable.
         * @param x the actor's position on the X axis
         */
        set_x(x: number): void;
        /**
         * Sets the horizontal alignment policy of a #ClutterActor, in case the
         * actor received extra horizontal space.
         *
         * See also the [property`Clutter`.Actor:x-align] property.
         * @param x_align the horizontal alignment policy
         */
        set_x_align(x_align: ActorAlign | null): void;
        /**
         * Sets whether a #ClutterActor should expand horizontally; this means
         * that layout manager should allocate extra space for the actor, if
         * possible.
         *
         * Setting an actor to expand will also make all its parent expand, so
         * that it's possible to build an actor tree and only set this flag on
         * its leaves and not on every single actor.
         * @param expand whether the actor should expand horizontally
         */
        set_x_expand(expand: boolean): void;
        /**
         * Sets the actor's Y coordinate, relative to its parent, in pixels.#
         *
         * Overrides any layout manager and forces a fixed position for
         * the actor.
         *
         * The [property`Clutter`.Actor:y] property is animatable.
         * @param y the actor's position on the Y axis
         */
        set_y(y: number): void;
        /**
         * Sets the vertical alignment policy of a #ClutterActor, in case the
         * actor received extra vertical space.
         *
         * See also the [property`Clutter`.Actor:y-align] property.
         * @param y_align the vertical alignment policy
         */
        set_y_align(y_align: ActorAlign | null): void;
        /**
         * Sets whether a #ClutterActor should expand horizontally; this means
         * that layout manager should allocate extra space for the actor, if
         * possible.
         *
         * Setting an actor to expand will also make all its parent expand, so
         * that it's possible to build an actor tree and only set this flag on
         * its leaves and not on every single actor.
         * @param expand whether the actor should expand vertically
         */
        set_y_expand(expand: boolean): void;
        /**
         * Sets the actor's position on the Z axis.
         *
         * See [property`Clutter`.Actor:z-position].
         * @param z_position the position on the Z axis
         */
        set_z_position(z_position: number): void;
        /**
         * Should be called inside the implementation of the
         * [vfunc`Clutter`.Actor.pick] virtual function in order to check whether
         * the actor should be picked or not.
         *
         * This function should never be called directly by applications.
         * @param pick_context a #ClutterPickContext
         * @returns %TRUE if the actor should be picked, %FALSE otherwise
         */
        should_pick(pick_context: PickContext): boolean;
        /**
         * Flags an actor to be displayed. An actor that isn't shown will not
         * be rendered on the stage.
         *
         * Actors are visible by default.
         *
         * If this function is called on an actor without a parent, the
         * [property`Clutter`.Actor:show-on-set-parent] will be set to %TRUE as a side
         * effect.
         */
        show(): void;
        /**
         * This function translates screen coordinates (`x,` `y)` to
         * coordinates relative to the actor. For example, it can be used to translate
         * screen events from global screen coordinates into actor-local coordinates.
         *
         * The conversion can fail, notably if the transform stack results in the
         * actor being projected on the screen as a mere line.
         *
         * The conversion should not be expected to be pixel-perfect due to the
         * nature of the operation. In general the error grows when the skewing
         * of the actor rectangle on screen increases.
         *
         * This function can be computationally intensive.
         *
         * This function only works when the allocation is up-to-date, i.e. inside of
         * the [vfunc`Clutter`.Actor.paint] implementation
         * @param x x screen coordinate of the point to unproject
         * @param y y screen coordinate of the point to unproject
         * @returns %TRUE if conversion was successful.
         */
        transform_stage_point(x: number, y: number): [boolean, number, number];
        /**
         * Decreases the culling inhibitor counter. See clutter_actor_inhibit_culling()
         * for when inhibit culling is necessary.
         *
         * Calling this function without a matching call to
         * clutter_actor_inhibit_culling() is a programming error.
         */
        uninhibit_culling(): void;
        /**
         * Unsets the %CLUTTER_ACTOR_MAPPED flag on the actor and possibly
         * unmaps its children if they were mapped.
         *
         * Calling this function is not encouraged: the default #ClutterActor
         * implementation of [vfunc`Clutter`.Actor.unmap] will also unmap any
         * eventual children by default when their parent is unmapped.
         *
         * When overriding [vfunc`Clutter`.Actor.unmap], it is mandatory to
         * chain up to the parent implementation.
         *
         * It is important to note that the implementation of the
         * [vfunc`Clutter`.Actor.unmap] virtual function may be called after
         * the [vfunc`Clutter`.Actor.destroy] or the [vfunc`GObject`.Object.dispose]
         * implementation, but it is guaranteed to be called before the
         * [vfunc`GObject`.Object.finalize] implementation.
         */
        unmap(): void;
        /**
         * Unrealization informs the actor that it may be being destroyed or
         * moved to another stage. The actor may want to destroy any
         * underlying graphics resources at this point. However it is
         * perfectly acceptable for it to retain the resources until the actor
         * is destroyed because Clutter only ever uses a single rendering
         * context and all of the graphics resources are valid on any stage.
         *
         * Because mapped actors must be realized, actors may not be
         * unrealized if they are mapped. This function hides the actor to be
         * sure it isn't mapped, an application-visible side effect that you
         * may not be expecting.
         *
         * This function should not be called by application code.
         *
         * This function should not really be in the public API, because
         * there isn't a good reason to call it. ClutterActor will already
         * unrealize things for you when it's important to do so.
         *
         * If you were using clutter_actor_unrealize() in a dispose
         * implementation, then don't, just chain up to ClutterActor's
         * dispose.
         *
         * If you were using clutter_actor_unrealize() to implement
         * unrealizing children of your container, then don't, ClutterActor
         * will already take care of that.
         */
        unrealize(): void;
        /**
         * Set `self'`s color state to the default.
         */
        unset_color_state(): void;

        // Inherited methods
        /**
         * Finds the [class`GObject`.ParamSpec] for `property_name`
         * @param property_name the name of the animatable property to find
         * @returns The #GParamSpec for the given property   or %NULL
         */
        find_property(property_name: string): GObject.ParamSpec;
        /**
         * Get animated actor.
         * @returns a #ClutterActor
         */
        get_actor(): Actor;
        /**
         * Retrieves the current state of `property_name` and sets `value` with it
         * @param property_name the name of the animatable property to retrieve
         * @param value a #GValue initialized to the type of the property to retrieve
         */
        get_initial_state(property_name: string, value: GObject.Value | any): void;
        /**
         * Asks a #ClutterAnimatable implementation to interpolate a
         * a named property between the initial and final values of
         * a #ClutterInterval, using `progress` as the interpolation
         * value, and store the result inside `value`.
         *
         * This function should be used for every property animation
         * involving `ClutterAnimatable`s.
         * @param property_name the name of the property to interpolate
         * @param interval a #ClutterInterval with the animation range
         * @param progress the progress to use to interpolate between the   initial and final values of the @interval
         * @returns %TRUE if the interpolation was successful,   and %FALSE otherwise
         */
        interpolate_value(property_name: string, interval: Interval, progress: number): [boolean, unknown];
        /**
         * Sets the current state of `property_name` to `value`
         * @param property_name the name of the animatable property to set
         * @param value the value of the animatable property to set
         */
        set_final_state(property_name: string, value: GObject.Value | any): void;
        /**
         * Finds the [class`GObject`.ParamSpec] for `property_name`
         * @param property_name the name of the animatable property to find
         */
        vfunc_find_property(property_name: string): GObject.ParamSpec;
        /**
         * Get animated actor.
         */
        vfunc_get_actor(): Actor;
        /**
         * Retrieves the current state of `property_name` and sets `value` with it
         * @param property_name the name of the animatable property to retrieve
         * @param value a #GValue initialized to the type of the property to retrieve
         */
        vfunc_get_initial_state(property_name: string, value: GObject.Value | any): void;
        /**
         * Asks a #ClutterAnimatable implementation to interpolate a
         * a named property between the initial and final values of
         * a #ClutterInterval, using `progress` as the interpolation
         * value, and store the result inside `value`.
         *
         * This function should be used for every property animation
         * involving `ClutterAnimatable`s.
         * @param property_name the name of the property to interpolate
         * @param interval a #ClutterInterval with the animation range
         * @param progress the progress to use to interpolate between the   initial and final values of the @interval
         */
        vfunc_interpolate_value(property_name: string, interval: Interval, progress: number): [boolean, unknown];
        /**
         * Sets the current state of `property_name` to `value`
         * @param property_name the name of the animatable property to set
         * @param value the value of the animatable property to set
         */
        vfunc_set_final_state(property_name: string, value: GObject.Value | any): void;
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
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
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
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        get_property(property_name: string): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
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
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
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
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
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
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
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
         * @returns @object
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
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
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        set_property(property_name: string, value: any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
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
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
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
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
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
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
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
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module ActorAccessible {
        // Constructor properties interface

        interface ConstructorProps extends Atk.GObjectAccessible.ConstructorProps, Atk.Component.ConstructorProps {}
    }

    /**
     * Implementation of the ATK interfaces for [class`Clutter`.Actor]
     *
     * #ClutterActorAccessible implements the required ATK interfaces of [class`Clutter`.Actor]
     * exposing the common elements on each actor (position, extents, etc).
     */
    class ActorAccessible extends Atk.GObjectAccessible implements Atk.Component {
        static $gtype: GObject.GType<ActorAccessible>;

        // Constructors

        constructor(properties?: Partial<ActorAccessible.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Inherited methods
        /**
         * Checks whether the specified point is within the extent of the `component`.
         *
         * Toolkit implementor note: ATK provides a default implementation for
         * this virtual method. In general there are little reason to
         * re-implement it.
         * @param x x coordinate
         * @param y y coordinate
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         * @returns %TRUE or %FALSE indicating whether the specified point is within the extent of the @component or not
         */
        contains(x: number, y: number, coord_type: Atk.CoordType | null): boolean;
        /**
         * Returns the alpha value (i.e. the opacity) for this
         * `component,` on a scale from 0 (fully transparent) to 1.0
         * (fully opaque).
         * @returns An alpha value from 0 to 1.0, inclusive.
         */
        get_alpha(): number;
        /**
         * Gets the rectangle which gives the extent of the `component`.
         *
         * If the extent can not be obtained (e.g. a non-embedded plug or missing
         * support), all of x, y, width, height are set to -1.
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         */
        get_extents(coord_type: Atk.CoordType | null): [number, number, number, number];
        /**
         * Gets the layer of the component.
         * @returns an #AtkLayer which is the layer of the component
         */
        get_layer(): Atk.Layer;
        /**
         * Gets the zorder of the component. The value G_MININT will be returned
         * if the layer of the component is not ATK_LAYER_MDI or ATK_LAYER_WINDOW.
         * @returns a gint which is the zorder of the component, i.e. the depth at which the component is shown in relation to other components in the same container.
         */
        get_mdi_zorder(): number;
        /**
         * Gets the position of `component` in the form of
         * a point specifying `component'`s top-left corner.
         *
         * If the position can not be obtained (e.g. a non-embedded plug or missing
         * support), x and y are set to -1.
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         */
        get_position(coord_type: Atk.CoordType | null): [number, number];
        /**
         * Gets the size of the `component` in terms of width and height.
         *
         * If the size can not be obtained (e.g. a non-embedded plug or missing
         * support), width and height are set to -1.
         */
        get_size(): [number, number];
        /**
         * Grabs focus for this `component`.
         * @returns %TRUE if successful, %FALSE otherwise.
         */
        grab_focus(): boolean;
        /**
         * Gets a reference to the accessible child, if one exists, at the
         * coordinate point specified by `x` and `y`.
         * @param x x coordinate
         * @param y y coordinate
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         * @returns a reference to the accessible child, if one exists
         */
        ref_accessible_at_point(x: number, y: number, coord_type: Atk.CoordType | null): Atk.Object | null;
        /**
         * Remove the handler specified by `handler_id` from the list of
         * functions to be executed when this object receives focus events
         * (in or out).
         * @param handler_id the handler id of the focus handler to be removed from @component
         */
        remove_focus_handler(handler_id: number): void;
        /**
         * Makes `component` visible on the screen by scrolling all necessary parents.
         *
         * Contrary to atk_component_set_position, this does not actually move
         * `component` in its parent, this only makes the parents scroll so that the
         * object shows up on the screen, given its current position within the parents.
         * @param type specify where the object should be made visible.
         * @returns whether scrolling was successful.
         */
        scroll_to(type: Atk.ScrollType | null): boolean;
        /**
         * Move the top-left of `component` to a given position of the screen by
         * scrolling all necessary parents.
         * @param coords specify whether coordinates are relative to the screen or to the parent object.
         * @param x x-position where to scroll to
         * @param y y-position where to scroll to
         * @returns whether scrolling was successful.
         */
        scroll_to_point(coords: Atk.CoordType | null, x: number, y: number): boolean;
        /**
         * Sets the extents of `component`.
         * @param x x coordinate
         * @param y y coordinate
         * @param width width to set for @component
         * @param height height to set for @component
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         * @returns %TRUE or %FALSE whether the extents were set or not
         */
        set_extents(x: number, y: number, width: number, height: number, coord_type: Atk.CoordType | null): boolean;
        /**
         * Sets the position of `component`.
         *
         * Contrary to atk_component_scroll_to, this does not trigger any scrolling,
         * this just moves `component` in its parent.
         * @param x x coordinate
         * @param y y coordinate
         * @param coord_type specifies whether the coordinates are relative to the screen or to the component's top level window
         * @returns %TRUE or %FALSE whether or not the position was set or not
         */
        set_position(x: number, y: number, coord_type: Atk.CoordType | null): boolean;
        /**
         * Set the size of the `component` in terms of width and height.
         * @param width width to set for @component
         * @param height height to set for @component
         * @returns %TRUE or %FALSE whether the size was set or not
         */
        set_size(width: number, height: number): boolean;
        vfunc_bounds_changed(bounds: Atk.Rectangle): void;
        /**
         * Checks whether the specified point is within the extent of the `component`.
         *
         * Toolkit implementor note: ATK provides a default implementation for
         * this virtual method. In general there are little reason to
         * re-implement it.
         * @param x x coordinate
         * @param y y coordinate
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         */
        vfunc_contains(x: number, y: number, coord_type: Atk.CoordType): boolean;
        /**
         * Returns the alpha value (i.e. the opacity) for this
         * `component,` on a scale from 0 (fully transparent) to 1.0
         * (fully opaque).
         */
        vfunc_get_alpha(): number;
        /**
         * Gets the rectangle which gives the extent of the `component`.
         *
         * If the extent can not be obtained (e.g. a non-embedded plug or missing
         * support), all of x, y, width, height are set to -1.
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         */
        vfunc_get_extents(coord_type: Atk.CoordType): [number, number, number, number];
        /**
         * Gets the layer of the component.
         */
        vfunc_get_layer(): Atk.Layer;
        /**
         * Gets the zorder of the component. The value G_MININT will be returned
         * if the layer of the component is not ATK_LAYER_MDI or ATK_LAYER_WINDOW.
         */
        vfunc_get_mdi_zorder(): number;
        /**
         * Gets the position of `component` in the form of
         * a point specifying `component'`s top-left corner.
         *
         * If the position can not be obtained (e.g. a non-embedded plug or missing
         * support), x and y are set to -1.
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         */
        vfunc_get_position(coord_type: Atk.CoordType): [number, number];
        /**
         * Gets the size of the `component` in terms of width and height.
         *
         * If the size can not be obtained (e.g. a non-embedded plug or missing
         * support), width and height are set to -1.
         */
        vfunc_get_size(): [number, number];
        /**
         * Grabs focus for this `component`.
         */
        vfunc_grab_focus(): boolean;
        /**
         * Gets a reference to the accessible child, if one exists, at the
         * coordinate point specified by `x` and `y`.
         * @param x x coordinate
         * @param y y coordinate
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         */
        vfunc_ref_accessible_at_point(x: number, y: number, coord_type: Atk.CoordType): Atk.Object | null;
        /**
         * Remove the handler specified by `handler_id` from the list of
         * functions to be executed when this object receives focus events
         * (in or out).
         * @param handler_id the handler id of the focus handler to be removed from @component
         */
        vfunc_remove_focus_handler(handler_id: number): void;
        /**
         * Makes `component` visible on the screen by scrolling all necessary parents.
         *
         * Contrary to atk_component_set_position, this does not actually move
         * `component` in its parent, this only makes the parents scroll so that the
         * object shows up on the screen, given its current position within the parents.
         * @param type specify where the object should be made visible.
         */
        vfunc_scroll_to(type: Atk.ScrollType): boolean;
        /**
         * Move the top-left of `component` to a given position of the screen by
         * scrolling all necessary parents.
         * @param coords specify whether coordinates are relative to the screen or to the parent object.
         * @param x x-position where to scroll to
         * @param y y-position where to scroll to
         */
        vfunc_scroll_to_point(coords: Atk.CoordType, x: number, y: number): boolean;
        /**
         * Sets the extents of `component`.
         * @param x x coordinate
         * @param y y coordinate
         * @param width width to set for @component
         * @param height height to set for @component
         * @param coord_type specifies whether the coordinates are relative to the screen or to the components top level window
         */
        vfunc_set_extents(x: number, y: number, width: number, height: number, coord_type: Atk.CoordType): boolean;
        /**
         * Sets the position of `component`.
         *
         * Contrary to atk_component_scroll_to, this does not trigger any scrolling,
         * this just moves `component` in its parent.
         * @param x x coordinate
         * @param y y coordinate
         * @param coord_type specifies whether the coordinates are relative to the screen or to the component's top level window
         */
        vfunc_set_position(x: number, y: number, coord_type: Atk.CoordType): boolean;
        /**
         * Set the size of the `component` in terms of width and height.
         * @param width width to set for @component
         * @param height height to set for @component
         */
        vfunc_set_size(width: number, height: number): boolean;
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
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
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
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        get_property(property_name: string): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
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
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
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
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
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
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
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
         * @returns @object
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
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
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        set_property(property_name: string, value: any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
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
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
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
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
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
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
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
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module ActorMeta {
        // Constructor properties interface

        interface ConstructorProps extends GObject.InitiallyUnowned.ConstructorProps {
            actor: Actor;
            enabled: boolean;
            name: string;
        }
    }

    /**
     * Base class of actor modifiers
     *
     * #ClutterActorMeta is an abstract class providing a common API for
     * modifiers of [class`Actor]` behaviour, appearance or layout.
     *
     * A #ClutterActorMeta can only be owned by a single [class`Actor]` at
     * any time.
     *
     * Every sub-class of #ClutterActorMeta should check if the
     * [property`ActorMeta:`enabled] property is set to %TRUE before applying
     * any kind of modification.
     */
    abstract class ActorMeta extends GObject.InitiallyUnowned {
        static $gtype: GObject.GType<ActorMeta>;

        // Properties

        /**
         * The #ClutterActor attached to the #ClutterActorMeta instance
         */
        get actor(): Actor;
        /**
         * Whether or not the #ClutterActorMeta is enabled
         */
        get enabled(): boolean;
        set enabled(val: boolean);
        /**
         * The unique name to access the #ClutterActorMeta
         */
        get name(): string;
        set name(val: string);

        // Constructors

        constructor(properties?: Partial<ActorMeta.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Virtual methods

        /**
         * Virtual function, called when `meta` is attached or detached
         * from a #ClutterActor.
         * @param actor the actor attached to @meta, or %NULL
         */
        vfunc_set_actor(actor?: Actor | null): void;
        /**
         * Sets whether `meta` should be enabled or not
         * @param is_enabled whether @meta is enabled
         */
        vfunc_set_enabled(is_enabled: boolean): void;

        // Methods

        /**
         * Retrieves a pointer to the [class`Actor]` that owns `meta`
         * @returns a pointer to a #ClutterActor or %NULL
         */
        get_actor(): Actor;
        /**
         * Retrieves whether `meta` is enabled
         * @returns %TRUE if the #ClutterActorMeta instance is enabled
         */
        get_enabled(): boolean;
        /**
         * Retrieves the name set using [method`ActorMeta`.set_name]
         * @returns the name of the #ClutterActorMeta   instance, or %NULL if none was set. The returned string is owned   by the #ClutterActorMeta instance and it should not be modified   or freed
         */
        get_name(): string;
        /**
         * Sets whether `meta` should be enabled or not
         * @param is_enabled whether @meta is enabled
         */
        set_enabled(is_enabled: boolean): void;
        /**
         * Sets the name of `meta`
         *
         * The name can be used to identify the #ClutterActorMeta instance
         * @param name the name of @meta
         */
        set_name(name: string): void;
    }

    class ActorNode extends PaintNode {
        static $gtype: GObject.GType<ActorNode>;

        // Constructors

        _init(...args: any[]): void;

        static ['new'](actor: Actor, opacity: number): ActorNode;
    }

    module AlignConstraint {
        // Constructor properties interface

        interface ConstructorProps extends Constraint.ConstructorProps {
            align_axis: AlignAxis;
            alignAxis: AlignAxis;
            factor: number;
            pivot_point: Graphene.Point;
            pivotPoint: Graphene.Point;
            source: Actor;
        }
    }

    /**
     * A constraint aligning the position of an actor
     *
     * #ClutterAlignConstraint is a [class`Constraint]` that aligns the position
     * of the [class`Actor]` to which it is applied to the size of another
     * [class`Actor]` using an alignment factor
     */
    class AlignConstraint extends Constraint {
        static $gtype: GObject.GType<AlignConstraint>;

        // Properties

        /**
         * The axis to be used to compute the alignment
         */
        get align_axis(): AlignAxis;
        set align_axis(val: AlignAxis);
        /**
         * The axis to be used to compute the alignment
         */
        get alignAxis(): AlignAxis;
        set alignAxis(val: AlignAxis);
        /**
         * The alignment factor, as a normalized value between 0.0 and 1.0
         *
         * The factor depends on the #ClutterAlignConstraint:align-axis property:
         * with an align-axis value of %CLUTTER_ALIGN_X_AXIS, 0.0 means left and
         * 1.0 means right; with a value of %CLUTTER_ALIGN_Y_AXIS, 0.0 means top
         * and 1.0 means bottom.
         */
        get factor(): number;
        set factor(val: number);
        /**
         * The pivot point used by the constraint. The pivot point is the
         * point in the constraint actor around which the aligning is applied,
         * with (0, 0) being the top left corner of the actor and (1, 1) the
         * bottom right corner of the actor.
         *
         * For example, setting the pivot point to (0.5, 0.5) and using a factor
         * of 1 for both axes will align the actors horizontal and vertical
         * center point with the bottom right corner of the source actor.
         *
         * By default, the pivot point is set to (-1, -1), which means it's not
         * used and the constrained actor will be aligned to always stay inside
         * the source actor.
         */
        get pivot_point(): Graphene.Point;
        set pivot_point(val: Graphene.Point);
        /**
         * The pivot point used by the constraint. The pivot point is the
         * point in the constraint actor around which the aligning is applied,
         * with (0, 0) being the top left corner of the actor and (1, 1) the
         * bottom right corner of the actor.
         *
         * For example, setting the pivot point to (0.5, 0.5) and using a factor
         * of 1 for both axes will align the actors horizontal and vertical
         * center point with the bottom right corner of the source actor.
         *
         * By default, the pivot point is set to (-1, -1), which means it's not
         * used and the constrained actor will be aligned to always stay inside
         * the source actor.
         */
        get pivotPoint(): Graphene.Point;
        set pivotPoint(val: Graphene.Point);
        /**
         * The #ClutterActor used as the source for the alignment.
         *
         * The #ClutterActor must not be a child or a grandchild of the actor
         * using the constraint.
         */
        get source(): Actor;
        set source(val: Actor);

        // Constructors

        constructor(properties?: Partial<AlignConstraint.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](source: Actor | null, axis: AlignAxis, factor: number): AlignConstraint;

        // Methods

        /**
         * Retrieves the value set using [method`Clutter`.AlignConstraint.set_align_axis]
         * @returns the alignment axis
         */
        get_align_axis(): AlignAxis;
        /**
         * Retrieves the factor set using [method`Clutter`.AlignConstraint.set_factor]
         * @returns the alignment factor
         */
        get_factor(): number;
        /**
         * Gets the pivot point used by the constraint set with
         * [method`Clutter`.AlignConstraint.set_pivot_point]. If no custom pivot
         * point is set, -1 is set.
         */
        get_pivot_point(): Graphene.Point;
        /**
         * Retrieves the source of the alignment
         * @returns the #ClutterActor used as the source   of the alignment
         */
        get_source(): Actor;
        /**
         * Sets the axis to which the alignment refers to
         * @param axis the axis to which the alignment refers to
         */
        set_align_axis(axis: AlignAxis | null): void;
        /**
         * Sets the alignment factor of the constraint
         *
         * The factor depends on the #ClutterAlignConstraint:align-axis property
         * and it is a value between 0.0 (meaning left, when
         * #ClutterAlignConstraint:align-axis is set to %CLUTTER_ALIGN_X_AXIS; or
         * meaning top, when #ClutterAlignConstraint:align-axis is set to
         * %CLUTTER_ALIGN_Y_AXIS) and 1.0 (meaning right, when
         * #ClutterAlignConstraint:align-axis is set to %CLUTTER_ALIGN_X_AXIS; or
         * meaning bottom, when #ClutterAlignConstraint:align-axis is set to
         * %CLUTTER_ALIGN_Y_AXIS). A value of 0.5 aligns in the middle in either
         * cases
         * @param factor the alignment factor, between 0.0 and 1.0
         */
        set_factor(factor: number): void;
        /**
         * Sets the pivot point used by the constraint, the pivot point is the
         * point in the constraint actor around which the aligning is applied,
         * with (0, 0) being the top left corner of the actor and (1, 1) the
         * bottom right corner of the actor.
         *
         * If -1 is used, the pivot point is unset and the constrained actor
         * will be aligned to always stay inside the source actor.
         * @param pivot_point A #GraphenePoint
         */
        set_pivot_point(pivot_point: Graphene.Point): void;
        /**
         * Sets the source of the alignment constraint
         * @param source a #ClutterActor, or %NULL to unset the source
         */
        set_source(source?: Actor | null): void;
    }

    module Backend {
        // Signal callback interfaces

        interface FontChanged {
            (): void;
        }

        interface ResolutionChanged {
            (): void;
        }

        interface SettingsChanged {
            (): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            context: Context;
        }
    }

    /**
     * Backend abstraction
     *
     * Clutter can be compiled against different backends. Each backend
     * has to implement a set of functions, in order to be used by Clutter.
     *
     * #ClutterBackend is the base class abstracting the various implementation;
     * it provides a basic API to query the backend for generic information
     * and settings.
     */
    abstract class Backend extends GObject.Object {
        static $gtype: GObject.GType<Backend>;

        // Properties

        get context(): Context;

        // Constructors

        constructor(properties?: Partial<Backend.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'font-changed', callback: (_source: this) => void): number;
        connect_after(signal: 'font-changed', callback: (_source: this) => void): number;
        emit(signal: 'font-changed'): void;
        connect(signal: 'resolution-changed', callback: (_source: this) => void): number;
        connect_after(signal: 'resolution-changed', callback: (_source: this) => void): number;
        emit(signal: 'resolution-changed'): void;
        connect(signal: 'settings-changed', callback: (_source: this) => void): number;
        connect_after(signal: 'settings-changed', callback: (_source: this) => void): number;
        emit(signal: 'settings-changed'): void;

        // Methods

        /**
         * Retrieves the #CoglContext associated with the given clutter
         * `backend`. A #CoglContext is required when using some of the
         * experimental 2.0 Cogl API.
         *
         * Since CoglContext is itself experimental API this API should
         * be considered experimental too.
         *
         * This API is not yet supported on OSX because OSX still
         * uses the stub Cogl winsys and the Clutter backend doesn't
         * explicitly create a CoglContext.
         * @returns The #CoglContext associated with @backend.
         */
        get_cogl_context(): Cogl.Context;
        /**
         * Returns the default seat
         * @returns the default seat
         */
        get_default_seat(): Seat;
        /**
         * Retrieves the font options for `backend`.
         * @returns the font options of the #ClutterBackend.   The returned #cairo_font_options_t is owned by the backend and should   not be modified or freed
         */
        get_font_options(): cairo.FontOptions;
        /**
         * Returns the input method used by Clutter
         * @returns the input method
         */
        get_input_method(): InputMethod;
        /**
         * Gets the resolution for font handling on the screen.
         *
         * The resolution is a scale factor between points specified in a
         * #PangoFontDescription and cairo units. The default value is 96.0,
         * meaning that a 10 point font will be 13 units
         * high (10 * 96. / 72. = 13.3).
         *
         * Clutter will set the resolution using the current backend when
         * initializing; the resolution is also stored in the
         * #ClutterSettings:font-dpi property.
         * @returns the current resolution, or -1 if no resolution   has been set.
         */
        get_resolution(): number;
        /**
         * Sets the new font options for `backend`. The #ClutterBackend will
         * copy the #cairo_font_options_t.
         *
         * If `options` is %NULL, the first following call to
         * [method`Clutter`.Backend.get_font_options] will return the default font
         * options for `backend`.
         *
         * This function is intended for actors creating a Pango layout
         * using the PangoCairo API.
         * @param options Cairo font options for the backend, or %NULL
         */
        set_font_options(options: cairo.FontOptions): void;
        /**
         * Sets the input method to be used by Clutter
         * @param method the input method
         */
        set_input_method(method?: InputMethod | null): void;
    }

    module BinLayout {
        // Constructor properties interface

        interface ConstructorProps extends LayoutManager.ConstructorProps {}
    }

    /**
     * A simple layout manager
     *
     * #ClutterBinLayout is a layout manager which implements the following
     * policy:
     *
     *   - the preferred size is the maximum preferred size
     *   between all the children of the container using the
     *   layout;
     *   - each child is allocated in "layers", on on top
     *   of the other;
     *   - for each layer there are horizontal and vertical
     *   alignment policies.
     */
    class BinLayout extends LayoutManager {
        static $gtype: GObject.GType<BinLayout>;

        // Constructors

        constructor(properties?: Partial<BinLayout.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): BinLayout;
    }

    module BindConstraint {
        // Constructor properties interface

        interface ConstructorProps extends Constraint.ConstructorProps {
            coordinate: BindCoordinate;
            offset: number;
            source: Actor;
        }
    }

    /**
     * A constraint binding the position or size of an actor
     *
     * #ClutterBindConstraint is a [class`Constraint]` that binds the
     * position or the size of the [class`Actor]` to which it is applied
     * to the the position or the size of another [class`Actor]`, or
     * "source".
     *
     * An offset can be applied to the constraint, to avoid overlapping. The offset
     * can also be animated. For instance, the following code will set up three
     * actors to be bound to the same origin:
     *
     * ```c
     * // source
     * rect[0] = clutter_actor_new ();
     * clutter_actor_set_background_color (rect[0], &red_color);
     * clutter_actor_set_position (rect[0], x_pos, y_pos);
     * clutter_actor_set_size (rect[0], 100, 100);
     *
     * // second rectangle
     * rect[1] = clutter_actor_new ();
     * clutter_actor_set_background_color (rect[1], &green_color);
     * clutter_actor_set_size (rect[1], 100, 100);
     * clutter_actor_set_opacity (rect[1], 0);
     *
     * constraint = clutter_bind_constraint_new (rect[0], CLUTTER_BIND_X, 0.0);
     * clutter_actor_add_constraint_with_name (rect[1], "green-x", constraint);
     * constraint = clutter_bind_constraint_new (rect[0], CLUTTER_BIND_Y, 0.0);
     * clutter_actor_add_constraint_with_name (rect[1], "green-y", constraint);
     *
     * // third rectangle
     * rect[2] = clutter_actor_new ();
     * clutter_actor_set_background_color (rect[2], &blue_color);
     * clutter_actor_set_size (rect[2], 100, 100);
     * clutter_actor_set_opacity (rect[2], 0);
     *
     * constraint = clutter_bind_constraint_new (rect[0], CLUTTER_BIND_X, 0.0);
     * clutter_actor_add_constraint_with_name (rect[2], "blue-x", constraint);
     * constraint = clutter_bind_constraint_new (rect[0], CLUTTER_BIND_Y, 0.0);
     * clutter_actor_add_constraint_with_name (rect[2], "blue-y", constraint);
     * ```
     *
     * The following code animates the second and third rectangles to "expand"
     * them horizontally from underneath the first rectangle:
     *
     * ```c
     * clutter_actor_animate (rect[1], CLUTTER_EASE_OUT_CUBIC, 250,
     *                        "`constraints`.green-x.offset", 100.0,
     *                        "opacity", 255,
     *                        NULL);
     * clutter_actor_animate (rect[2], CLUTTER_EASE_OUT_CUBIC, 250,
     *                        "`constraints`.blue-x.offset", 200.0,
     *                        "opacity", 255,
     *                        NULL);
     * ```
     */
    class BindConstraint extends Constraint {
        static $gtype: GObject.GType<BindConstraint>;

        // Properties

        /**
         * The coordinate to be bound
         */
        get coordinate(): BindCoordinate;
        set coordinate(val: BindCoordinate);
        /**
         * The offset, in pixels, to be applied to the binding
         */
        get offset(): number;
        set offset(val: number);
        /**
         * The #ClutterActor used as the source for the binding.
         *
         * The #ClutterActor must not be contained inside the actor associated
         * to the constraint.
         */
        get source(): Actor;
        set source(val: Actor);

        // Constructors

        constructor(properties?: Partial<BindConstraint.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](source: Actor | null, coordinate: BindCoordinate, offset: number): BindConstraint;

        // Methods

        /**
         * Retrieves the bound coordinate of the constraint
         * @returns the bound coordinate
         */
        get_coordinate(): BindCoordinate;
        /**
         * Retrieves the offset set using [method`Clutter`.BindConstraint.set_offset]
         * @returns the offset, in pixels
         */
        get_offset(): number;
        /**
         * Retrieves the #ClutterActor set using [method`Clutter`.BindConstraint.set_source]
         * @returns a pointer to the source actor
         */
        get_source(): Actor;
        /**
         * Sets the coordinate to bind in the constraint
         * @param coordinate the coordinate to bind
         */
        set_coordinate(coordinate: BindCoordinate | null): void;
        /**
         * Sets the offset to be applied to the constraint
         * @param offset the offset to apply, in pixels
         */
        set_offset(offset: number): void;
        /**
         * Sets the source #ClutterActor for the constraint
         * @param source a #ClutterActor, or %NULL to unset the source
         */
        set_source(source?: Actor | null): void;
    }

    module BindingPool {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            name: string;
        }
    }

    /**
     * Pool for key bindings
     *
     * #ClutterBindingPool is a data structure holding a set of key bindings.
     * Each key binding associates a key symbol (eventually with modifiers)
     * to an action. A callback function is associated to each action.
     *
     * For a given key symbol and modifier mask combination there can be only one
     * action; for each action there can be only one callback. There can be
     * multiple actions with the same name, and the same callback can be used
     * to handle multiple key bindings.
     *
     * Actors requiring key bindings should create a new #ClutterBindingPool
     * inside their class initialization function and then install actions
     * like this:
     *
     * ```c
     * static void
     * foo_class_init (FooClass *klass)
     * {
     *   ClutterBindingPool *binding_pool;
     *
     *   binding_pool = clutter_binding_pool_get_for_class (klass);
     *
     *   clutter_binding_pool_install_action (binding_pool, "move-up",
     *                                        CLUTTER_Up, 0,
     *                                        G_CALLBACK (foo_action_move_up),
     *                                        NULL, NULL);
     *   clutter_binding_pool_install_action (binding_pool, "move-up",
     *                                        CLUTTER_KP_Up, 0,
     *                                        G_CALLBACK (foo_action_move_up),
     *                                        NULL, NULL);
     * }
     * ```
     *
     * The callback has a signature of:
     *
     * ```c
     *    gboolean (* callback) (GObject             *instance,
     *                           const gchar         *action_name,
     *                           guint                key_val,
     *                           ClutterModifierType  modifiers,
     *                           gpointer             user_data);
     * ```
     *
     * The actor should then override the [signal`Actor:`:key-press-event] and
     * use [method`BindingPool`.activate] to match a [struct`Event]` key event
     * structure to one of the actions:
     *
     * ```c
     *   ClutterBindingPool *pool;
     *
     *   // retrieve the binding pool for the type of the actor
     *   pool = clutter_binding_pool_find (G_OBJECT_TYPE_NAME (actor));
     *
     *   // activate any callback matching the key symbol and modifiers
     *   // mask of the key event. the returned value can be directly
     *   // used to signal that the actor has handled the event.
     *   return clutter_binding_pool_activate (pool,
     *                                         key_event->keyval,
     *                                         key_event->modifier_state,
     *                                         G_OBJECT (actor));
     * ```
     *
     * The [method`BindingPool`.activate] function will return %FALSE if
     * no action for the given key binding was found, if the action was
     * blocked (using [method`BindingPool`.block_action]) or if the
     * key binding handler returned %FALSE.
     */
    class BindingPool extends GObject.Object {
        static $gtype: GObject.GType<BindingPool>;

        // Properties

        /**
         * The unique name of the #ClutterBindingPool.
         */
        get name(): string;

        // Constructors

        constructor(properties?: Partial<BindingPool.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](name: string): BindingPool;

        // Static methods

        /**
         * Finds the #ClutterBindingPool with `name`.
         * @param name the name of the binding pool to find
         */
        static find(name: string): BindingPool;
        /**
         * Retrieves the #ClutterBindingPool for the given #GObject class
         * and, eventually, creates it. This function is a wrapper around
         * [ctor`Clutter`.BindingPool.new] and uses the class type name as the
         * unique name for the binding pool.
         *
         * Calling this function multiple times will return the same
         * #ClutterBindingPool.
         *
         * A binding pool for a class can also be retrieved using
         * [func`Clutter`.BindingPool.find] with the class type name:
         *
         * ```
         *   pool = clutter_binding_pool_find (G_OBJECT_TYPE_NAME (instance));
         * ```
         * @param klass a #GObjectClass pointer
         */
        static get_for_class(klass?: any | null): BindingPool;

        // Methods

        /**
         * Activates the callback associated to the action that is
         * bound to the `key_val` and `modifiers` pair.
         *
         * The callback has the following signature:
         *
         * ```
         *   void (* callback) (GObject             *gobject,
         *                      const gchar         *action_name,
         *                      guint                key_val,
         *                      ClutterModifierType  modifiers,
         *                      gpointer             user_data);
         * ```
         *
         * Where the #GObject instance is `gobject` and the user data
         * is the one passed when installing the action with
         * [method`Clutter`.BindingPool.install_action].
         *
         * If the action bound to the `key_val,` `modifiers` pair has been
         * blocked using [method`Clutter`.BindingPool.block_action], the callback
         * will not be invoked, and this function will return %FALSE.
         * @param key_val the key symbol
         * @param modifiers bitmask for the modifiers
         * @param gobject a #GObject
         * @returns %TRUE if an action was found and was activated
         */
        activate(key_val: number, modifiers: ModifierType | null, gobject: GObject.Object): boolean;
        /**
         * Blocks all the actions with name `action_name` inside `pool`.
         * @param action_name an action name
         */
        block_action(action_name: string): void;
        /**
         * Retrieves the name of the action matching the given key symbol
         * and modifiers bitmask.
         * @param key_val a key symbol
         * @param modifiers a bitmask for the modifiers
         * @returns the name of the action, if found, or %NULL. The   returned string is owned by the binding pool and should never   be modified or freed
         */
        find_action(key_val: number, modifiers: ModifierType | null): string;
        /**
         * Installs a new action inside a #ClutterBindingPool. The action
         * is bound to `key_val` and `modifiers`.
         *
         * The same action name can be used for multiple `key_val,` `modifiers`
         * pairs.
         *
         * When an action has been activated using [method`Clutter`.BindingPool.activate]
         * the passed `callback` will be invoked (with `data)`.
         *
         * Actions can be blocked with [method`Clutter`.BindingPool.block_action]
         * and then unblocked using [method`Clutter`.BindingPool.unblock_action].
         * @param action_name the name of the action
         * @param key_val key symbol
         * @param modifiers bitmask of modifiers
         * @param callback function to be called   when the action is activated
         */
        install_action(
            action_name: string,
            key_val: number,
            modifiers: ModifierType | null,
            callback: GObject.Callback,
        ): void;
        /**
         * A #GClosure variant of [method`Clutter`.BindingPool.install_action].
         *
         * Installs a new action inside a #ClutterBindingPool. The action
         * is bound to `key_val` and `modifiers`.
         *
         * The same action name can be used for multiple `key_val,` `modifiers`
         * pairs.
         *
         * When an action has been activated using [method`Clutter`.BindingPool.activate]
         * the passed `closure` will be invoked.
         *
         * Actions can be blocked with [method`Clutter`.BindingPool.block_action]
         * and then unblocked using [method`Clutter`.BindingPool.unblock_action].
         * @param action_name the name of the action
         * @param key_val key symbol
         * @param modifiers bitmask of modifiers
         * @param closure a #GClosure
         */
        install_closure(
            action_name: string,
            key_val: number,
            modifiers: ModifierType | null,
            closure: GObject.Closure,
        ): void;
        /**
         * Allows overriding the action for `key_val` and `modifiers` inside a
         * #ClutterBindingPool. See [method`Clutter`.BindingPool.install_action].
         *
         * When an action has been activated using [method`Clutter`.BindingPool.activate]
         * the passed `callback` will be invoked (with `data)`.
         *
         * Actions can be blocked with [method`Clutter`.BindingPool.block_action]
         * and then unblocked using [method`Clutter`.BindingPool.unblock_action].
         * @param key_val key symbol
         * @param modifiers bitmask of modifiers
         * @param callback function to be called when the action is activated
         */
        override_action(key_val: number, modifiers: ModifierType | null, callback: GObject.Callback): void;
        /**
         * A #GClosure variant of [method`Clutter`.BindingPool.override_action].
         *
         * Allows overriding the action for `key_val` and `modifiers` inside a
         * #ClutterBindingPool. See [method`Clutter`.BindingPool.install_closure].
         *
         * When an action has been activated using [method`Clutter`.BindingPool.activate]
         * the passed `callback` will be invoked (with `data)`.
         *
         * Actions can be blocked with [method`Clutter`.BindingPool.block_action]
         * and then unblocked using [method`Clutter`.BindingPool.unblock_action].
         * @param key_val key symbol
         * @param modifiers bitmask of modifiers
         * @param closure a #GClosure
         */
        override_closure(key_val: number, modifiers: ModifierType | null, closure: GObject.Closure): void;
        /**
         * Removes the action matching the given `key_val,` `modifiers` pair,
         * if any exists.
         * @param key_val a key symbol
         * @param modifiers a bitmask for the modifiers
         */
        remove_action(key_val: number, modifiers: ModifierType | null): void;
        /**
         * Unblockes all the actions with name `action_name` inside `pool`.
         *
         * Unblocking an action does not cause the callback bound to it to
         * be invoked in case [method`Clutter`.BindingPool.activate] was called on
         * an action previously blocked with [method`Clutter`.BindingPool.block_action].
         * @param action_name an action name
         */
        unblock_action(action_name: string): void;
    }

    class BlitNode extends PaintNode {
        static $gtype: GObject.GType<BlitNode>;

        // Constructors

        _init(...args: any[]): void;

        static ['new'](src: Cogl.Framebuffer): BlitNode;

        // Methods

        /**
         * Adds a new blit rectangle to the stack of rectangles. All the
         * constraints of [func`Cogl`.blit_framebuffer] apply here.
         * @param src_x Source x position
         * @param src_y Source y position
         * @param dst_x Destination x position
         * @param dst_y Destination y position
         * @param width Width of region to copy
         * @param height Height of region to copy
         */
        add_blit_rectangle(
            src_x: number,
            src_y: number,
            dst_x: number,
            dst_y: number,
            width: number,
            height: number,
        ): void;
    }

    module BlurEffect {
        // Constructor properties interface

        interface ConstructorProps extends OffscreenEffect.ConstructorProps {}
    }

    /**
     * A blur effect
     *
     * #ClutterBlurEffect is a sub-class of #ClutterEffect that allows blurring a
     * actor and its contents.
     */
    class BlurEffect extends OffscreenEffect {
        static $gtype: GObject.GType<BlurEffect>;

        // Constructors

        constructor(properties?: Partial<BlurEffect.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): BlurEffect;
    }

    class BlurNode extends LayerNode {
        static $gtype: GObject.GType<BlurNode>;

        // Constructors

        _init(...args: any[]): void;

        static ['new'](width: number, height: number, radius: number): BlurNode;
    }

    module BoxLayout {
        // Constructor properties interface

        interface ConstructorProps extends LayoutManager.ConstructorProps {
            homogeneous: boolean;
            orientation: Orientation;
            spacing: number;
        }
    }

    /**
     * A layout manager arranging children on a single line
     *
     * The #ClutterBoxLayout is a [class`Clutter`.LayoutManager] implementing the
     * following layout policy:
     *
     *  - all children are arranged on a single line
     *  - the axis used is controlled by the [property`Clutter`.BoxLayout:orientation] property
     *  - each child will be allocated to its natural size or, if [property`Clutter`.Actor:x-expand] or
     *  [property`Clutter`.Actor:y-expand] are set, the available size
     *  - honours the #ClutterActor's [property`Clutter`.Actor:x-align] and [property`Clutter`.Actor:y-align] properties
     *  to fill the available size
     *  - if the [property`Clutter`.BoxLayout:homogeneous] boolean property is set, then all widgets will
     *  get the same size, ignoring expand settings and the preferred sizes
     *
     * It is possible to control the spacing between children of a
     * #ClutterBoxLayout by using [method`Clutter`.BoxLayout.set_spacing].
     */
    class BoxLayout extends LayoutManager {
        static $gtype: GObject.GType<BoxLayout>;

        // Properties

        /**
         * Whether the #ClutterBoxLayout should arrange its children
         * homogeneously, i.e. all children get the same size
         */
        get homogeneous(): boolean;
        set homogeneous(val: boolean);
        /**
         * The orientation of the #ClutterBoxLayout, either horizontal
         * or vertical
         */
        get orientation(): Orientation;
        set orientation(val: Orientation);
        /**
         * The spacing between children of the #ClutterBoxLayout, in pixels
         */
        get spacing(): number;
        set spacing(val: number);

        // Constructors

        constructor(properties?: Partial<BoxLayout.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): BoxLayout;

        // Methods

        /**
         * Retrieves if the children sizes are allocated homogeneously.
         * @returns %TRUE if the #ClutterBoxLayout is arranging its children   homogeneously, and %FALSE otherwise
         */
        get_homogeneous(): boolean;
        /**
         * Retrieves the orientation of the `layout`.
         * @returns the orientation of the layout
         */
        get_orientation(): Orientation;
        /**
         * Retrieves the spacing set using [method`Clutter`.BoxLayout.set_spacing]
         * @returns the spacing between children of the #ClutterBoxLayout
         */
        get_spacing(): number;
        /**
         * Sets whether the size of `layout` children should be
         * homogeneous
         * @param homogeneous %TRUE if the layout should be homogeneous
         */
        set_homogeneous(homogeneous: boolean): void;
        /**
         * Sets the orientation of the #ClutterBoxLayout layout manager.
         * @param orientation the orientation of the #ClutterBoxLayout
         */
        set_orientation(orientation: Orientation | null): void;
        /**
         * Sets the spacing between children of `layout`
         * @param spacing the spacing between children of the layout, in pixels
         */
        set_spacing(spacing: number): void;
    }

    module BrightnessContrastEffect {
        // Constructor properties interface

        interface ConstructorProps extends OffscreenEffect.ConstructorProps {
            brightness: Cogl.Color;
            contrast: Cogl.Color;
        }
    }

    /**
     * Increase/decrease brightness and/or contrast of actor.
     *
     * #ClutterBrightnessContrastEffect is a sub-class of #ClutterEffect that
     * changes the overall brightness of a #ClutterActor.
     */
    class BrightnessContrastEffect extends OffscreenEffect {
        static $gtype: GObject.GType<BrightnessContrastEffect>;

        // Properties

        /**
         * The brightness change to apply to the effect.
         *
         * This property uses a #CoglColor to represent the changes to each
         * color channel. The range is [ 0, 255 ], with 127 as the value used
         * to indicate no change; values smaller than 127 indicate a decrease
         * in brightness, and values larger than 127 indicate an increase in
         * brightness.
         */
        get brightness(): Cogl.Color;
        set brightness(val: Cogl.Color);
        /**
         * The contrast change to apply to the effect.
         *
         * This property uses a #CoglColor to represent the changes to each
         * color channel. The range is [ 0, 255 ], with 127 as the value used
         * to indicate no change; values smaller than 127 indicate a decrease
         * in contrast, and values larger than 127 indicate an increase in
         * contrast.
         */
        get contrast(): Cogl.Color;
        set contrast(val: Cogl.Color);

        // Constructors

        constructor(properties?: Partial<BrightnessContrastEffect.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): BrightnessContrastEffect;

        // Methods

        /**
         * Retrieves the change in brightness used by `effect`.
         */
        get_brightness(): [number, number, number];
        /**
         * Retrieves the contrast value used by `effect`.
         */
        get_contrast(): [number, number, number];
        /**
         * The range of `brightness` is [-1.0, 1.0], where 0.0 designates no change;
         * a value below 0.0 indicates a decrease in brightness; and a value
         * above 0.0 indicates an increase of brightness.
         * @param brightness the brightness change for all three components (r, g, b)
         */
        set_brightness(brightness: number): void;
        /**
         * The range for each component is [-1.0, 1.0] where 0.0 designates no change,
         * values below 0.0 mean a decrease in brightness, and values above indicate
         * an increase.
         * @param red red component of the change in brightness
         * @param green green component of the change in brightness
         * @param blue blue component of the change in brightness
         */
        set_brightness_full(red: number, green: number, blue: number): void;
        /**
         * The range for `contrast` is [-1.0, 1.0], where 0.0 designates no change;
         * a value below 0.0 indicates a decrease in contrast; and a value above
         * 0.0 indicates an increase.
         * @param contrast contrast change for all three channels
         */
        set_contrast(contrast: number): void;
        /**
         * The range for each component is [-1.0, 1.0] where 0.0 designates no change,
         * values below 0.0 mean a decrease in contrast, and values above indicate
         * an increase.
         * @param red red component of the change in contrast
         * @param green green component of the change in contrast
         * @param blue blue component of the change in contrast
         */
        set_contrast_full(red: number, green: number, blue: number): void;
    }

    module ClickAction {
        // Signal callback interfaces

        interface Clicked {
            (actor: Actor): void;
        }

        interface LongPress {
            (actor: Actor, state: LongPressState): boolean;
        }

        // Constructor properties interface

        interface ConstructorProps extends Action.ConstructorProps {
            held: boolean;
            long_press_duration: number;
            longPressDuration: number;
            long_press_threshold: number;
            longPressThreshold: number;
            pressed: boolean;
        }
    }

    /**
     * Action for clickable actors
     *
     * #ClutterClickAction is a sub-class of [class`Action]` that implements
     * the logic for clickable actors, by using the low level events of
     * [class`Actor]`, such as [signal`Actor:`:button-press-event] and
     * [signal`Actor:`:button-release-event], to synthesize the high level
     * [signal`ClickAction:`:clicked] signal.
     *
     * To use #ClutterClickAction you just need to apply it to a [class`Actor]`
     * using [method`Actor`.add_action] and connect to the
     * [signal`ClickAction:`:clicked] signal:
     *
     * ```c
     *   ClutterAction *action = clutter_click_action_new ();
     *
     *   clutter_actor_add_action (actor, action);
     *
     *   g_signal_connect (action, "clicked", G_CALLBACK (on_clicked), NULL);
     * ```
     *
     * #ClutterClickAction also supports long press gestures: a long press is
     * activated if the pointer remains pressed within a certain threshold (as
     * defined by the [property`ClickAction:`long-press-threshold] property) for a
     * minimum amount of time (as the defined by the
     * [property`ClickAction:`long-press-duration] property).
     * The [signal`ClickAction:`:long-press] signal is emitted multiple times,
     * using different [enum`LongPressState]` values; to handle long presses
     * you should connect to the [signal`ClickAction:`:long-press] signal and
     * handle the different states:
     *
     * ```c
     *   static gboolean
     *   on_long_press (ClutterClickAction    *action,
     *                  ClutterActor          *actor,
     *                  ClutterLongPressState  state)
     *   {
     *     switch (state)
     *       {
     *       case CLUTTER_LONG_PRESS_QUERY:
     *         // return TRUE if the actor should support long press
     *         // gestures, and FALSE otherwise; this state will be
     *         // emitted on button presses
     *         return TRUE;
     *
     *       case CLUTTER_LONG_PRESS_ACTIVATE:
     *         // this state is emitted if the minimum duration has
     *         // been reached without the gesture being cancelled.
     *         // the return value is not used
     *         return TRUE;
     *
     *       case CLUTTER_LONG_PRESS_CANCEL:
     *         // this state is emitted if the long press was cancelled;
     *         // for instance, the pointer went outside the actor or the
     *         // allowed threshold, or the button was released before
     *         // the minimum duration was reached. the return value is
     *         // not used
     *         return FALSE;
     *       }
     *   }
     * ```
     */
    class ClickAction extends Action {
        static $gtype: GObject.GType<ClickAction>;

        // Properties

        /**
         * Whether the clickable actor has the pointer grabbed
         */
        get held(): boolean;
        /**
         * The minimum duration of a press for it to be recognized as a long
         * press gesture, in milliseconds.
         *
         * A value of -1 will make the #ClutterClickAction use the value of
         * the [property`Settings:`long-press-duration] property.
         */
        get long_press_duration(): number;
        set long_press_duration(val: number);
        /**
         * The minimum duration of a press for it to be recognized as a long
         * press gesture, in milliseconds.
         *
         * A value of -1 will make the #ClutterClickAction use the value of
         * the [property`Settings:`long-press-duration] property.
         */
        get longPressDuration(): number;
        set longPressDuration(val: number);
        /**
         * The maximum allowed distance that can be covered (on both axes) before
         * a long press gesture is cancelled, in pixels.
         *
         * A value of -1 will make the #ClutterClickAction use the value of
         * the [property`Settings:`dnd-drag-threshold] property.
         */
        get long_press_threshold(): number;
        set long_press_threshold(val: number);
        /**
         * The maximum allowed distance that can be covered (on both axes) before
         * a long press gesture is cancelled, in pixels.
         *
         * A value of -1 will make the #ClutterClickAction use the value of
         * the [property`Settings:`dnd-drag-threshold] property.
         */
        get longPressThreshold(): number;
        set longPressThreshold(val: number);
        /**
         * Whether the clickable actor should be in "pressed" state
         */
        get pressed(): boolean;

        // Constructors

        constructor(properties?: Partial<ClickAction.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): ClickAction;

        // Signals

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'clicked', callback: (_source: this, actor: Actor) => void): number;
        connect_after(signal: 'clicked', callback: (_source: this, actor: Actor) => void): number;
        emit(signal: 'clicked', actor: Actor): void;
        connect(
            signal: 'long-press',
            callback: (_source: this, actor: Actor, state: LongPressState) => boolean,
        ): number;
        connect_after(
            signal: 'long-press',
            callback: (_source: this, actor: Actor, state: LongPressState) => boolean,
        ): number;
        emit(signal: 'long-press', actor: Actor, state: LongPressState): void;

        // Virtual methods

        /**
         * class handler for the #ClutterClickAction::clicked signal
         * @param actor
         */
        vfunc_clicked(actor: Actor): void;
        /**
         * class handler for the #ClutterClickAction::long-press signal
         * @param actor
         * @param state
         */
        vfunc_long_press(actor: Actor, state: LongPressState): boolean;

        // Methods

        /**
         * Retrieves the button that was pressed.
         * @returns the button value
         */
        get_button(): number;
        /**
         * Retrieves the screen coordinates of the button press.
         */
        get_coords(): [number, number];
        /**
         * Retrieves the modifier state of the click action.
         * @returns the modifier state parameter, or 0
         */
        get_state(): ModifierType;
        /**
         * Emulates a release of the pointer button, which ungrabs the pointer
         * and unsets the [property`ClickAction:`pressed] state.
         *
         * This function will also cancel the long press gesture if one was
         * initiated.
         *
         * This function is useful to break a grab, for instance after a certain
         * amount of time has passed.
         */
        release(): void;
    }

    class ClipNode extends PaintNode {
        static $gtype: GObject.GType<ClipNode>;

        // Constructors

        _init(...args: any[]): void;

        static ['new'](): ClipNode;
    }

    module Clone {
        // Constructor properties interface

        interface ConstructorProps<A extends Actor = Actor>
            extends Actor.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Animatable.ConstructorProps {
            source: A;
        }
    }

    /**
     * An actor that displays a clone of a source actor
     *
     * #ClutterClone is a [class`Clutter`.Actor] which draws with the paint
     * function of another actor, scaled to fit its own allocation.
     *
     * #ClutterClone can be used to efficiently clone any other actor.
     *
     * #ClutterClone does not require the presence of support for FBOs
     * in the underlying GL or GLES implementation.
     */
    class Clone<A extends Actor = Actor> extends Actor implements Atk.ImplementorIface, Animatable {
        static $gtype: GObject.GType<Clone>;

        // Properties

        /**
         * This property specifies the source actor being cloned.
         */
        get source(): A;
        set source(val: A);

        // Constructors

        constructor(properties?: Partial<Clone.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](source: Actor): Clone;
        // Conflicted with Clutter.Actor.new

        static ['new'](...args: never[]): any;

        // Methods

        /**
         * Retrieves the source #ClutterActor being cloned by `self`.
         * @returns the actor source for the clone
         */
        get_source(): A;
        /**
         * Sets `source` as the source actor to be cloned by `self`.
         * @param source a #ClutterActor, or %NULL
         */
        set_source(source?: A | null): void;

        // Inherited methods
        /**
         * Finds the [class`GObject`.ParamSpec] for `property_name`
         * @param property_name the name of the animatable property to find
         * @returns The #GParamSpec for the given property   or %NULL
         */
        find_property(property_name: string): GObject.ParamSpec;
        /**
         * Get animated actor.
         * @returns a #ClutterActor
         */
        get_actor(): Actor;
        /**
         * Retrieves the current state of `property_name` and sets `value` with it
         * @param property_name the name of the animatable property to retrieve
         * @param value a #GValue initialized to the type of the property to retrieve
         */
        get_initial_state(property_name: string, value: GObject.Value | any): void;
        /**
         * Asks a #ClutterAnimatable implementation to interpolate a
         * a named property between the initial and final values of
         * a #ClutterInterval, using `progress` as the interpolation
         * value, and store the result inside `value`.
         *
         * This function should be used for every property animation
         * involving `ClutterAnimatable`s.
         * @param property_name the name of the property to interpolate
         * @param interval a #ClutterInterval with the animation range
         * @param progress the progress to use to interpolate between the   initial and final values of the @interval
         * @returns %TRUE if the interpolation was successful,   and %FALSE otherwise
         */
        interpolate_value(property_name: string, interval: Interval, progress: number): [boolean, unknown];
        /**
         * Sets the current state of `property_name` to `value`
         * @param property_name the name of the animatable property to set
         * @param value the value of the animatable property to set
         */
        set_final_state(property_name: string, value: GObject.Value | any): void;
        /**
         * Finds the [class`GObject`.ParamSpec] for `property_name`
         * @param property_name the name of the animatable property to find
         */
        vfunc_find_property(property_name: string): GObject.ParamSpec;
        /**
         * Get animated actor.
         */
        vfunc_get_actor(): Actor;
        /**
         * Retrieves the current state of `property_name` and sets `value` with it
         * @param property_name the name of the animatable property to retrieve
         * @param value a #GValue initialized to the type of the property to retrieve
         */
        vfunc_get_initial_state(property_name: string, value: GObject.Value | any): void;
        /**
         * Asks a #ClutterAnimatable implementation to interpolate a
         * a named property between the initial and final values of
         * a #ClutterInterval, using `progress` as the interpolation
         * value, and store the result inside `value`.
         *
         * This function should be used for every property animation
         * involving `ClutterAnimatable`s.
         * @param property_name the name of the property to interpolate
         * @param interval a #ClutterInterval with the animation range
         * @param progress the progress to use to interpolate between the   initial and final values of the @interval
         */
        vfunc_interpolate_value(property_name: string, interval: Interval, progress: number): [boolean, unknown];
        /**
         * Sets the current state of `property_name` to `value`
         * @param property_name the name of the animatable property to set
         * @param value the value of the animatable property to set
         */
        vfunc_set_final_state(property_name: string, value: GObject.Value | any): void;
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
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
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
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        get_property(property_name: string): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
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
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
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
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
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
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
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
         * @returns @object
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
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
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        set_property(property_name: string, value: any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
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
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
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
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
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
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
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
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module ColorManager {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            context: Context;
        }
    }

    class ColorManager extends GObject.Object {
        static $gtype: GObject.GType<ColorManager>;

        // Properties

        /**
         * The associated ClutterContext.
         */
        get context(): Context;

        // Constructors

        constructor(properties?: Partial<ColorManager.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;
    }

    class ColorNode extends PipelineNode {
        static $gtype: GObject.GType<ColorNode>;

        // Constructors

        _init(...args: any[]): void;

        static ['new'](color?: Cogl.Color | null): ColorNode;
        // Conflicted with Clutter.PipelineNode.new

        static ['new'](...args: never[]): any;
    }

    module ColorState {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            colorspace: Colorspace;
            context: Context;
            max_luminance: number;
            maxLuminance: number;
            min_luminance: number;
            minLuminance: number;
            ref_luminance: number;
            refLuminance: number;
            transfer_function: TransferFunction;
            transferFunction: TransferFunction;
        }
    }

    /**
     * Color state of each ClutterActor
     *
     * The #ClutterColorState class contains the colorspace of each color
     * states (e.g. sRGB colorspace).
     *
     * Each [class`Actor]` would own such an object.
     *
     * A single #ClutterColorState object can be shared by multiple [class`Actor]`
     * or maybe a separate color state for each [class`Actor]` (depending on whether
     * #ClutterColorState would be statefull or stateless).
     *
     * #ClutterColorState, if not set during construction, it will default to sRGB
     * color state
     *
     * The #ClutterColorState would have API to get the colorspace, whether the
     * actor content is in pq or not, and things like that
     */
    class ColorState extends GObject.Object {
        static $gtype: GObject.GType<ColorState>;

        // Properties

        /**
         * Colorspace information of the each color state,
         * defaults to sRGB colorspace
         */
        get colorspace(): Colorspace;
        /**
         * The associated ClutterContext.
         */
        get context(): Context;
        /**
         * Maximum luminance.
         */
        get max_luminance(): number;
        /**
         * Maximum luminance.
         */
        get maxLuminance(): number;
        /**
         * Minimum luminance.
         */
        get min_luminance(): number;
        /**
         * Minimum luminance.
         */
        get minLuminance(): number;
        /**
         * Reference luminance.
         */
        get ref_luminance(): number;
        /**
         * Reference luminance.
         */
        get refLuminance(): number;
        /**
         * Transfer function.
         */
        get transfer_function(): TransferFunction;
        /**
         * Transfer function.
         */
        get transferFunction(): TransferFunction;

        // Constructors

        constructor(properties?: Partial<ColorState.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](context: Context, colorspace: Colorspace, transfer_function: TransferFunction): ColorState;

        static new_full(
            context: Context,
            colorspace: Colorspace,
            transfer_function: TransferFunction,
            min_lum: number,
            max_lum: number,
            ref_lum: number,
        ): ColorState;

        // Methods

        add_pipeline_transform(target_color_state: ColorState, pipeline: Cogl.Pipeline): void;
        equals(other_color_state: ColorState): boolean;
        /**
         * Retrieves a variant of `color_state` that is suitable for blending. This
         * usually is a variant with linear transfer characteristics. If `color_state`
         * already is a #ClutterColorState suitable for blending, then `color_state` is
         * returned.
         *
         * Currently sRGB content is blended with sRGB and not with linear transfer
         * characteristics.
         *
         * If `force` is TRUE then linear transfer characteristics are used always.
         * @param force if a linear variant should be forced
         * @returns the #ClutterColorState suitable for blending
         */
        get_blending(force: boolean): ColorState;
        get_colorspace(): Colorspace;
        get_id(): number;
        get_luminances(min_lum_out: number, max_lum_out: number, ref_lum_out: number): void;
        get_transfer_function(): TransferFunction;
        required_format(): EncodingRequiredFormat;
        to_string(): string;
        update_uniforms(target_color_state: ColorState, pipeline: Cogl.Pipeline): void;
    }

    module ColorizeEffect {
        // Constructor properties interface

        interface ConstructorProps extends OffscreenEffect.ConstructorProps {
            tint: Cogl.Color;
        }
    }

    /**
     * A colorization effect
     *
     * #ClutterColorizeEffect is a sub-class of #ClutterEffect that
     * colorizes an actor with the given tint.
     */
    class ColorizeEffect extends OffscreenEffect {
        static $gtype: GObject.GType<ColorizeEffect>;

        // Properties

        /**
         * The tint to apply to the actor
         */
        get tint(): Cogl.Color;
        set tint(val: Cogl.Color);

        // Constructors

        constructor(properties?: Partial<ColorizeEffect.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](tint: Cogl.Color): ColorizeEffect;

        // Methods

        /**
         * Retrieves the tint used by `effect`
         */
        get_tint(): Cogl.Color;
        /**
         * Sets the tint to be used when colorizing
         * @param tint the color to be used
         */
        set_tint(tint: Cogl.Color): void;
    }

    module Constraint {
        // Constructor properties interface

        interface ConstructorProps extends ActorMeta.ConstructorProps {}
    }

    /**
     * Abstract class for constraints on position or size
     *
     * #ClutterConstraint is a base abstract class for modifiers of a #ClutterActor
     * position or size.
     *
     * A #ClutterConstraint sub-class should contain the logic for modifying
     * the position or size of the #ClutterActor to which it is applied, by
     * updating the actor's allocation. Each #ClutterConstraint can change the
     * allocation of the actor to which they are applied by overriding the
     * [vfunc`Clutter`.Constraint.update_allocation] virtual function.
     *
     * ## Using Constraints
     *
     * Constraints can be used with fixed layout managers, like
     * #ClutterFixedLayout, or with actors implicitly using a fixed layout
     * manager, like #ClutterGroup and #ClutterStage.
     *
     * Constraints provide a way to build user interfaces by using
     * relations between #ClutterActors, without explicit fixed
     * positioning and sizing, similarly to how fluid layout managers like
     * #ClutterBoxLayout lay out their children.
     *
     * Constraints are attached to a #ClutterActor, and are available
     * for inspection using [method`Clutter`.Actor.get_constraints].
     *
     * Clutter provides different implementation of the #ClutterConstraint
     * abstract class, for instance:
     *
     *  - #ClutterAlignConstraint, a constraint that can be used to align
     *  an actor to another one on either the horizontal or the vertical
     *  axis, using a normalized value between 0 and 1.
     *  - #ClutterBindConstraint, a constraint binds the X, Y, width or height
     *  of an actor to the corresponding position or size of a source actor,
     *  with or without an offset.
     *  - #ClutterSnapConstraint, a constraint that "snaps" together the edges
     *  of two #ClutterActors; if an actor uses two constraints on both its
     *  horizontal or vertical edges then it can also expand to fit the empty
     *  space.
     *
     * It is important to note that Clutter does not avoid loops or
     * competing constraints; if two or more #ClutterConstraints
     * are operating on the same positional or dimensional attributes of an
     * actor, or if the constraints on two different actors depend on each
     * other, then the behavior is undefined.
     *
     * ## Implementing a ClutterConstraint
     *
     * Creating a sub-class of #ClutterConstraint requires the
     * implementation of the [vfunc`Clutter`.Constraint.update_allocation]
     * virtual function.
     *
     * The `update_allocation()` virtual function is called during the
     * allocation sequence of a #ClutterActor, and allows any #ClutterConstraint
     * attached to that actor to modify the allocation before it is passed to
     * the actor's #ClutterActorClass.allocate() implementation.
     *
     * The #ClutterActorBox passed to the `update_allocation()` implementation
     * contains the original allocation of the #ClutterActor, plus the eventual
     * modifications applied by the other #ClutterConstraints, in the same order
     * the constraints have been applied to the actor.
     *
     * It is not necessary for a #ClutterConstraint sub-class to chain
     * up to the parent's implementation.
     *
     * If a #ClutterConstraint is parametrized - i.e. if it contains
     * properties that affect the way the constraint is implemented - it should
     * call clutter_actor_queue_relayout() on the actor to which it is attached
     * to whenever any parameter is changed. The actor to which it is attached
     * can be recovered at any point using clutter_actor_meta_get_actor().
     */
    abstract class Constraint extends ActorMeta {
        static $gtype: GObject.GType<Constraint>;

        // Constructors

        constructor(properties?: Partial<Constraint.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Virtual methods

        /**
         * virtual function used to update the allocation
         *   of the #ClutterActor using the #ClutterConstraint
         * @param actor
         * @param allocation
         */
        vfunc_update_allocation(actor: Actor, allocation: ActorBox): void;
        /**
         * Asks the `constraint` to update the size request of a #ClutterActor.
         * @param actor a #ClutterActor
         * @param direction a #ClutterOrientation
         * @param for_size the size in the opposite direction
         * @param minimum_size the minimum size to modify
         * @param natural_size the natural size to modify
         */
        vfunc_update_preferred_size(
            actor: Actor,
            direction: Orientation,
            for_size: number,
            minimum_size: number,
            natural_size: number,
        ): [number, number];

        // Methods

        /**
         * Asks the `constraint` to update the size request of a #ClutterActor.
         * @param actor a #ClutterActor
         * @param direction a #ClutterOrientation
         * @param for_size the size in the opposite direction
         * @param minimum_size the minimum size to modify
         * @param natural_size the natural size to modify
         */
        update_preferred_size(
            actor: Actor,
            direction: Orientation | null,
            for_size: number,
            minimum_size: number,
            natural_size: number,
        ): [number, number];
    }

    module Context {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class Context extends GObject.Object {
        static $gtype: GObject.GType<Context>;

        // Constructors

        constructor(properties?: Partial<Context.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Methods

        get_backend(): Backend;
        get_color_manager(): ColorManager;
        get_settings(): Settings;
        get_text_direction(): TextDirection;
    }

    module DeformEffect {
        // Constructor properties interface

        interface ConstructorProps extends OffscreenEffect.ConstructorProps {
            back_pipeline: Cogl.Pipeline;
            backPipeline: Cogl.Pipeline;
            x_tiles: number;
            xTiles: number;
            y_tiles: number;
            yTiles: number;
        }
    }

    /**
     * A base class for effects deforming the geometry of an actor
     *
     * #ClutterDeformEffect is an abstract class providing all the plumbing
     * for creating effects that result in the deformation of an actor's
     * geometry.
     *
     * #ClutterDeformEffect uses offscreen buffers to render the contents of
     * a #ClutterActor and then the Cogl vertex buffers API to submit the
     * geometry to the GPU.
     *
     * ## Implementing ClutterDeformEffect
     *
     * Sub-classes of #ClutterDeformEffect should override the
     * [vfunc`Clutter`.DeformEffect.deform_vertex] virtual function; this function
     * is called on every vertex that needs to be deformed by the effect.
     * Each passed vertex is an in-out parameter that initially contains the
     * position of the vertex and should be modified according to a specific
     * deformation algorithm.
     */
    abstract class DeformEffect extends OffscreenEffect {
        static $gtype: GObject.GType<DeformEffect>;

        // Properties

        /**
         * A pipeline to be used when painting the back of the actor
         * to which this effect has been applied
         *
         * By default, no pipeline will be used
         */
        get back_pipeline(): Cogl.Pipeline;
        set back_pipeline(val: Cogl.Pipeline);
        /**
         * A pipeline to be used when painting the back of the actor
         * to which this effect has been applied
         *
         * By default, no pipeline will be used
         */
        get backPipeline(): Cogl.Pipeline;
        set backPipeline(val: Cogl.Pipeline);
        /**
         * The number of horizontal tiles. The bigger the number, the
         * smaller the tiles
         */
        get x_tiles(): number;
        set x_tiles(val: number);
        /**
         * The number of horizontal tiles. The bigger the number, the
         * smaller the tiles
         */
        get xTiles(): number;
        set xTiles(val: number);
        /**
         * The number of vertical tiles. The bigger the number, the
         * smaller the tiles
         */
        get y_tiles(): number;
        set y_tiles(val: number);
        /**
         * The number of vertical tiles. The bigger the number, the
         * smaller the tiles
         */
        get yTiles(): number;
        set yTiles(val: number);

        // Constructors

        constructor(properties?: Partial<DeformEffect.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Virtual methods

        /**
         * virtual function; sub-classes should override this
         *   function to compute the deformation of each vertex
         * @param width
         * @param height
         * @param vertex
         */
        vfunc_deform_vertex(width: number, height: number, vertex: TextureVertex): void;

        // Methods

        /**
         * Retrieves the back pipeline used by `effect`
         * @returns A #CoglPipeline.
         */
        get_back_pipeline(): Cogl.Pipeline | null;
        /**
         * Retrieves the number of horizontal and vertical tiles used to sub-divide
         * the actor's geometry during the effect
         */
        get_n_tiles(): [number, number];
        /**
         * Invalidates the `effect`'s vertices and, if it is associated
         * to an actor, it will queue a redraw
         */
        invalidate(): void;
        /**
         * Sets the pipeline that should be used when drawing the back face
         * of the actor during a deformation
         *
         * The #ClutterDeformEffect will take a reference on the pipeline's
         * handle
         * @param pipeline A #CoglPipeline
         */
        set_back_pipeline(pipeline?: Cogl.Pipeline | null): void;
        /**
         * Sets the number of horizontal and vertical tiles to be used
         * when applying the effect
         *
         * More tiles allow a finer grained deformation at the expenses
         * of computation
         * @param x_tiles number of horizontal tiles
         * @param y_tiles number of vertical tiles
         */
        set_n_tiles(x_tiles: number, y_tiles: number): void;
    }

    module DesaturateEffect {
        // Constructor properties interface

        interface ConstructorProps extends OffscreenEffect.ConstructorProps {
            factor: number;
        }
    }

    /**
     * A desaturation effect
     *
     * #ClutterDesaturateEffect is a sub-class of #ClutterEffect that
     * desaturates the color of an actor and its contents. The strength
     * of the desaturation effect is controllable and animatable through
     * the #ClutterDesaturateEffect:factor property.
     */
    class DesaturateEffect extends OffscreenEffect {
        static $gtype: GObject.GType<DesaturateEffect>;

        // Properties

        /**
         * The desaturation factor, between 0.0 (no desaturation) and 1.0 (full
         * desaturation).
         */
        get factor(): number;
        set factor(val: number);

        // Constructors

        constructor(properties?: Partial<DesaturateEffect.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](factor: number): DesaturateEffect;

        // Methods

        /**
         * Retrieves the desaturation factor of `effect`
         * @returns the desaturation factor
         */
        get_factor(): number;
        /**
         * Sets the desaturation factor for `effect,` with 0.0 being "do not desaturate"
         * and 1.0 being "fully desaturate"
         * @param factor the desaturation factor, between 0.0 and 1.0
         */
        set_factor(factor: number): void;
    }

    module Effect {
        // Constructor properties interface

        interface ConstructorProps extends ActorMeta.ConstructorProps {}
    }

    /**
     * Base class for actor effects
     *
     * The #ClutterEffect class provides a default type and API for creating
     * effects for generic actors.
     *
     * Effects are a #ClutterActorMeta sub-class that modify the way an actor
     * is painted in a way that is not part of the actor's implementation.
     *
     * Effects should be the preferred way to affect the paint sequence of an
     * actor without sub-classing the actor itself and overriding the
     * [vfunc`Clutter`.Actor.paint] virtual function.
     *
     * ## Implementing a ClutterEffect
     *
     * Creating a sub-class of #ClutterEffect requires overriding the
     * [vfunc`Clutter`.Effect.paint] method. The implementation of the function should look
     * something like this:
     *
     * ```c
     * void effect_paint (ClutterEffect *effect, ClutterEffectPaintFlags flags)
     * {
     *   // Set up initialisation of the paint such as binding a
     *   // CoglOffscreen or other operations
     *
     *   // Chain to the next item in the paint sequence. This will either call
     *   // ‘paint’ on the next effect or just paint the actor if this is
     *   // the last effect.
     *   ClutterActor *actor =
     *     clutter_actor_meta_get_actor (CLUTTER_ACTOR_META (effect));
     *
     *   clutter_actor_continue_paint (actor);
     *
     *   // perform any cleanup of state, such as popping the CoglOffscreen
     * }
     * ```
     *
     * The effect can optionally avoid calling clutter_actor_continue_paint() to skip any
     * further stages of the paint sequence. This is useful for example if the effect
     * contains a cached image of the actor. In that case it can optimise painting by
     * avoiding the actor paint and instead painting the cached image.
     *
     * The %CLUTTER_EFFECT_PAINT_ACTOR_DIRTY flag is useful in this case. Clutter will set
     * this flag when a redraw has been queued on the actor since it was last painted. The
     * effect can use this information to decide if the cached image is still valid.
     *
     * ## A simple ClutterEffect implementation
     *
     * The example below creates two rectangles: one will be painted "behind" the actor,
     * while another will be painted "on top" of the actor.
     *
     * The #ClutterActorMetaClass.set_actor() implementation will create the two pipelines
     * used for the two different rectangles; the #ClutterEffectClass.paint() implementation
     * will paint the first pipeline using cogl_rectangle(), before continuing and then it
     * will paint paint the second pipeline after.
     *
     * ```c
     *  typedef struct {
     *    ClutterEffect parent_instance;
     *
     *    CoglPipeline *rect_1;
     *    CoglPipeline *rect_2;
     *  } MyEffect;
     *
     *  typedef struct _ClutterEffectClass MyEffectClass;
     *
     *  G_DEFINE_TYPE (MyEffect, my_effect, CLUTTER_TYPE_EFFECT);
     *
     *  static void
     *  my_effect_set_actor (ClutterActorMeta *meta,
     *                       ClutterActor     *actor)
     *  {
     *    MyEffect *self = MY_EFFECT (meta);
     *    CoglColor color;
     *
     *    // Clear the previous state //
     *    if (self->rect_1)
     *      {
     *        g_object_unref (self->rect_1);
     *        self->rect_1 = NULL;
     *      }
     *
     *    if (self->rect_2)
     *      {
     *        g_object_unref (self->rect_2);
     *        self->rect_2 = NULL;
     *      }
     *
     *    // Maintain a pointer to the actor
     *    self->actor = actor;
     *
     *    // If we've been detached by the actor then we should just bail out here
     *    if (self->actor == NULL)
     *      return;
     *
     *    // Create a red pipeline
     *    self->rect_1 = cogl_pipeline_new ();
     *    cogl_color_init_from_4f (&color, 1.0, 1.0, 1.0, 1.0);
     *    cogl_pipeline_set_color (self->rect_1, &color);
     *
     *    // Create a green pipeline
     *    self->rect_2 = cogl_pipeline_new ();
     *    cogl_color_init_from_4f (&color, 0.0, 1.0, 0.0, 1.0);
     *    cogl_pipeline_set_color (self->rect_2, &color);
     *  }
     *
     *  static gboolean
     *  my_effect_paint (ClutterEffect *effect)
     *  {
     *    MyEffect *self = MY_EFFECT (effect);
     *    gfloat width, height;
     *
     *    clutter_actor_get_size (self->actor, &width, &height);
     *
     *    // Paint the first rectangle in the upper left quadrant
     *    cogl_set_source (self->rect_1);
     *    cogl_rectangle (0, 0, width / 2, height / 2);
     *
     *    // Continue to the rest of the paint sequence
     *    clutter_actor_continue_paint (self->actor);
     *
     *    // Paint the second rectangle in the lower right quadrant
     *    cogl_set_source (self->rect_2);
     *    cogl_rectangle (width / 2, height / 2, width, height);
     *  }
     *
     *  static void
     *  my_effect_class_init (MyEffectClass *klass)
     *  {
     *    ClutterActorMetaClass *meta_class = CLUTTER_ACTOR_META_CLASS (klass);
     *
     *    meta_class->set_actor = my_effect_set_actor;
     *
     *    klass->paint = my_effect_paint;
     *  }
     * ```
     */
    abstract class Effect extends ActorMeta {
        static $gtype: GObject.GType<Effect>;

        // Constructors

        constructor(properties?: Partial<Effect.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Virtual methods

        /**
         * virtual function
         * @param volume
         */
        vfunc_modify_paint_volume(volume: PaintVolume): boolean;
        /**
         * virtual function
         * @param node
         * @param paint_context
         * @param flags
         */
        vfunc_paint(node: PaintNode, paint_context: PaintContext, flags: EffectPaintFlags): void;
        vfunc_paint_node(node: PaintNode, paint_context: PaintContext, flags: EffectPaintFlags): void;
        /**
         * virtual function
         * @param pick_context
         */
        vfunc_pick(pick_context: PickContext): void;
        /**
         * virtual function
         * @param node
         * @param paint_context
         */
        vfunc_post_paint(node: PaintNode, paint_context: PaintContext): void;
        /**
         * virtual function
         * @param node
         * @param paint_context
         */
        vfunc_pre_paint(node: PaintNode, paint_context: PaintContext): boolean;

        // Methods

        /**
         * Queues a repaint of the effect. The effect can detect when the ‘paint’
         * method is called as a result of this function because it will not
         * have the %CLUTTER_EFFECT_PAINT_ACTOR_DIRTY flag set. In that case the
         * effect is free to assume that the actor has not changed its
         * appearance since the last time it was painted so it doesn't need to
         * call clutter_actor_continue_paint() if it can draw a cached
         * image. This is mostly intended for effects that are using a
         * %CoglOffscreen to redirect the actor (such as
         * %ClutterOffscreenEffect). In that case the effect can save a bit of
         * rendering time by painting the cached texture without causing the
         * entire actor to be painted.
         *
         * This function can be used by effects that have their own animatable
         * parameters. For example, an effect which adds a varying degree of a
         * red tint to an actor by redirecting it through a CoglOffscreen
         * might have a property to specify the level of tint. When this value
         * changes, the underlying actor doesn't need to be redrawn so the
         * effect can call clutter_effect_queue_repaint() to make sure the
         * effect is repainted.
         *
         * Note however that modifying the position of the parent of an actor
         * may change the appearance of the actor because its transformation
         * matrix would change. In this case a redraw wouldn't be queued on
         * the actor itself so the %CLUTTER_EFFECT_PAINT_ACTOR_DIRTY would still
         * not be set. The effect can detect this case by keeping track of the
         * last modelview matrix that was used to render the actor and
         * verifying that it remains the same in the next paint.
         *
         * Any other effects that are layered on top of the passed in effect
         * will still be passed the %CLUTTER_EFFECT_PAINT_ACTOR_DIRTY flag. If
         * anything queues a redraw on the actor without specifying an effect
         * or with an effect that is lower in the chain of effects than this
         * one then that will override this call. In that case this effect
         * will instead be called with the %CLUTTER_EFFECT_PAINT_ACTOR_DIRTY
         * flag set.
         */
        queue_repaint(): void;
    }

    module FixedLayout {
        // Constructor properties interface

        interface ConstructorProps extends LayoutManager.ConstructorProps {}
    }

    /**
     * A fixed layout manager
     *
     * #ClutterFixedLayout is a layout manager implementing the same
     * layout policies as #ClutterGroup.
     */
    class FixedLayout extends LayoutManager {
        static $gtype: GObject.GType<FixedLayout>;

        // Constructors

        constructor(properties?: Partial<FixedLayout.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): FixedLayout;
    }

    module FlowLayout {
        // Constructor properties interface

        interface ConstructorProps extends LayoutManager.ConstructorProps {
            column_spacing: number;
            columnSpacing: number;
            homogeneous: boolean;
            max_column_width: number;
            maxColumnWidth: number;
            max_row_height: number;
            maxRowHeight: number;
            min_column_width: number;
            minColumnWidth: number;
            min_row_height: number;
            minRowHeight: number;
            orientation: Orientation;
            row_spacing: number;
            rowSpacing: number;
            snap_to_grid: boolean;
            snapToGrid: boolean;
        }
    }

    /**
     * A reflowing layout manager
     *
     * #ClutterFlowLayout is a layout manager which implements the following
     * policy:
     *
     *   - the preferred natural size depends on the value
     *   of the #ClutterFlowLayout:orientation property; the layout will try
     *   to maintain all its children on a single row or
     *   column;
     *   - if either the width or the height allocated are
     *   smaller than the preferred ones, the layout will wrap; in this case,
     *   the preferred height or width, respectively, will take into account
     *   the amount of columns and rows;
     *   - each line (either column or row) in reflowing will
     *   have the size of the biggest cell on that line; if the
     *   #ClutterFlowLayout:homogeneous property is set to %FALSE the actor
     *   will be allocated within that area, and if set to %TRUE instead the
     *   actor will be given exactly that area;
     *   - the size of the columns or rows can be controlled
     *   for both minimum and maximum; the spacing can also be controlled
     *   in both columns and rows.
     */
    class FlowLayout extends LayoutManager {
        static $gtype: GObject.GType<FlowLayout>;

        // Properties

        /**
         * The spacing between columns, in pixels; the value of this
         * property is honoured by horizontal non-overflowing layouts
         * and by vertical overflowing layouts
         */
        get column_spacing(): number;
        set column_spacing(val: number);
        /**
         * The spacing between columns, in pixels; the value of this
         * property is honoured by horizontal non-overflowing layouts
         * and by vertical overflowing layouts
         */
        get columnSpacing(): number;
        set columnSpacing(val: number);
        /**
         * Whether each child inside the #ClutterFlowLayout should receive
         * the same allocation
         */
        get homogeneous(): boolean;
        set homogeneous(val: boolean);
        /**
         * Maximum width for each column in the layout, in pixels. If
         * set to -1 the width will be the maximum child width
         */
        get max_column_width(): number;
        set max_column_width(val: number);
        /**
         * Maximum width for each column in the layout, in pixels. If
         * set to -1 the width will be the maximum child width
         */
        get maxColumnWidth(): number;
        set maxColumnWidth(val: number);
        /**
         * Maximum height for each row in the layout, in pixels. If
         * set to -1 the width will be the maximum child height
         */
        get max_row_height(): number;
        set max_row_height(val: number);
        /**
         * Maximum height for each row in the layout, in pixels. If
         * set to -1 the width will be the maximum child height
         */
        get maxRowHeight(): number;
        set maxRowHeight(val: number);
        /**
         * Minimum width for each column in the layout, in pixels
         */
        get min_column_width(): number;
        set min_column_width(val: number);
        /**
         * Minimum width for each column in the layout, in pixels
         */
        get minColumnWidth(): number;
        set minColumnWidth(val: number);
        /**
         * Minimum height for each row in the layout, in pixels
         */
        get min_row_height(): number;
        set min_row_height(val: number);
        /**
         * Minimum height for each row in the layout, in pixels
         */
        get minRowHeight(): number;
        set minRowHeight(val: number);
        /**
         * The orientation of the #ClutterFlowLayout. The children
         * of the layout will be laid out following the orientation.
         *
         * This property also controls the overflowing directions
         */
        get orientation(): Orientation;
        set orientation(val: Orientation);
        /**
         * The spacing between rows, in pixels; the value of this
         * property is honoured by vertical non-overflowing layouts and
         * by horizontal overflowing layouts
         */
        get row_spacing(): number;
        set row_spacing(val: number);
        /**
         * The spacing between rows, in pixels; the value of this
         * property is honoured by vertical non-overflowing layouts and
         * by horizontal overflowing layouts
         */
        get rowSpacing(): number;
        set rowSpacing(val: number);
        /**
         * Whether the #ClutterFlowLayout should arrange its children
         * on a grid
         */
        get snap_to_grid(): boolean;
        set snap_to_grid(val: boolean);
        /**
         * Whether the #ClutterFlowLayout should arrange its children
         * on a grid
         */
        get snapToGrid(): boolean;
        set snapToGrid(val: boolean);

        // Constructors

        constructor(properties?: Partial<FlowLayout.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](orientation: Orientation): FlowLayout;

        // Methods

        /**
         * Retrieves the spacing between columns
         * @returns the spacing between columns of the #ClutterFlowLayout,   in pixels
         */
        get_column_spacing(): number;
        /**
         * Retrieves the minimum and maximum column widths
         */
        get_column_width(): [number, number];
        /**
         * Retrieves whether the `layout` is homogeneous
         * @returns %TRUE if the #ClutterFlowLayout is homogeneous
         */
        get_homogeneous(): boolean;
        /**
         * Retrieves the orientation of the `layout`
         * @returns the orientation of the #ClutterFlowLayout
         */
        get_orientation(): Orientation;
        /**
         * Retrieves the minimum and maximum row heights
         */
        get_row_height(): [number, number];
        /**
         * Retrieves the spacing between rows
         * @returns the spacing between rows of the #ClutterFlowLayout,   in pixels
         */
        get_row_spacing(): number;
        /**
         * Retrieves the value of #ClutterFlowLayout:snap-to-grid property
         * @returns %TRUE if the @layout is placing its children on a grid
         */
        get_snap_to_grid(): boolean;
        /**
         * Sets the space between columns, in pixels
         * @param spacing the space between columns
         */
        set_column_spacing(spacing: number): void;
        /**
         * Sets the minimum and maximum widths that a column can have
         * @param min_width minimum width of a column
         * @param max_width maximum width of a column
         */
        set_column_width(min_width: number, max_width: number): void;
        /**
         * Sets whether the `layout` should allocate the same space for
         * each child
         * @param homogeneous whether the layout should be homogeneous or not
         */
        set_homogeneous(homogeneous: boolean): void;
        /**
         * Sets the orientation of the flow layout
         *
         * The orientation controls the direction used to allocate
         * the children: either horizontally or vertically. The
         * orientation also controls the direction of the overflowing
         * @param orientation the orientation of the layout
         */
        set_orientation(orientation: Orientation | null): void;
        /**
         * Sets the minimum and maximum heights that a row can have
         * @param min_height the minimum height of a row
         * @param max_height the maximum height of a row
         */
        set_row_height(min_height: number, max_height: number): void;
        /**
         * Sets the spacing between rows, in pixels
         * @param spacing the space between rows
         */
        set_row_spacing(spacing: number): void;
        /**
         * Whether the `layout` should place its children on a grid.
         * @param snap_to_grid %TRUE if @layout should place its children on a grid
         */
        set_snap_to_grid(snap_to_grid: boolean): void;
    }

    module FrameClock {
        // Signal callback interfaces

        interface Destroy {
            (): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class FrameClock extends GObject.Object {
        static $gtype: GObject.GType<FrameClock>;

        // Constructors

        constructor(properties?: Partial<FrameClock.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'destroy', callback: (_source: this) => void): number;
        connect_after(signal: 'destroy', callback: (_source: this) => void): number;
        emit(signal: 'destroy'): void;

        // Methods

        add_timeline(timeline: Timeline): void;
        destroy(): void;
        get_max_render_time_debug_info(): GLib.String;
        get_refresh_rate(): number;
        inhibit(): void;
        notify_ready(): void;
        record_flip_time(flip_time_us: number): void;
        remove_timeline(timeline: Timeline): void;
        schedule_update(): void;
        schedule_update_now(): void;
        set_deadline_evasion(deadline_evasion_us: number): void;
        set_mode(mode: FrameClockMode | null): void;
        uninhibit(): void;
    }

    module Gesture {
        // Signal callback interfaces

        interface Cancel {
            (): void;
        }

        interface End {
            (): void;
        }

        interface MayRecognize {
            (): boolean;
        }

        interface Recognize {
            (): void;
        }

        interface ShouldHandleSequence {
            (sequence_begin_event: Event): boolean;
        }

        // Constructor properties interface

        interface ConstructorProps extends Action.ConstructorProps {
            state: GestureState;
        }
    }

    /**
     * A #ClutterAction for recognizing gestures
     *
     * #ClutterGesture is a sub-class of #ClutterAction and an abstract base class
     * for implementing the logic to recognize various input gestures.
     *
     * Implementing a #ClutterGesture is done by subclassing #ClutterGesture,
     * connecting to the should_handle_sequence(), point_began()/moved()/ended()
     * and sequences_cancelled() vfuncs, and then moving the gesture through the
     * #ClutterGestureState state machine using clutter_gesture_set_state().
     *
     * ## Recognizing new gestures
     *
     * #ClutterGesture uses five separate states to differentiate between the
     * phases of gesture recognition. Those states also define whether to block or
     * allow event delivery:
     *
     * - WAITING: The gesture will be starting out in this state if no points
     *   are available. When points are added, the state automatically moves
     *   to POSSIBLE before the point_began() vfunc gets called.
     *
     * - POSSIBLE: This is the state the gesture will be in when point_began()
     *   gets called the first time. As soon as the implementation is reasonably
     *   sure that the sequence of events is the gesture, it should set the state
     *   to RECOGNIZING.
     *
     * - RECOGNIZING: A continuous gesture is being recognized. In this state
     *   the implementation usually triggers UI changes as feedback to the user.
     *
     * - COMPLETED: The gesture was sucessfully recognized and has been completed.
     *   The gesture will automatically move to state WAITING after all the
     *   remaining points have ended.
     *
     * - CANCELLED: The gesture was either not started at all because preconditions
     *   were not fulfilled or it was cancelled by the implementation.
     *   The gesture will automatically move to state WAITING after all the
     *   remaining points have ended.
     *
     * Each #ClutterGesture starts out in the WAITING state and automatically
     * moves to POSSIBLE when #ClutterGestureClass.should_handle_sequence() returns
     * true for the first event of an event sequence. Events of this sequence must
     * then be handled using the point_began(), point_moved(), point_ended() and
     * sequences_cancelled() vfuncs. From these events, the implementation moves
     * the gesture through the #ClutterGestureState state-machine.
     *
     * Note that point_ended() and sequences_cancelled() both have a default
     * implementation which automatically moves the state of the gesture to
     * CANCELLED.
     *
     * Note that it's not guaranteed that clutter_gesture_set_state() will always
     * (and immediately) enter the requested state. To deal with this, never
     * assume the state has changed after calling clutter_gesture_set_state(),
     * and react to state changes by implementing the state_changed() vfunc.
     *
     * ## Relationships of gestures
     *
     * By default, when multiple gestures try to recognize while sharing one or
     * more points, the first gesture to move to RECOGNIZING wins, and implicitly
     * moves all conflicting gestures to state CANCELLED. This behavior can be
     * prohibited by using the clutter_gesture_can_not_cancel() API or by
     * implementing the should_influence() or should_be_influenced_by() vfuncs
     * in your #ClutterGesture subclass.
     */
    abstract class Gesture extends Action {
        static $gtype: GObject.GType<Gesture>;

        // Properties

        /**
         * The current state of the gesture.
         */
        get state(): GestureState;

        // Constructors

        constructor(properties?: Partial<Gesture.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'cancel', callback: (_source: this) => void): number;
        connect_after(signal: 'cancel', callback: (_source: this) => void): number;
        emit(signal: 'cancel'): void;
        connect(signal: 'end', callback: (_source: this) => void): number;
        connect_after(signal: 'end', callback: (_source: this) => void): number;
        emit(signal: 'end'): void;
        connect(signal: 'may-recognize', callback: (_source: this) => boolean): number;
        connect_after(signal: 'may-recognize', callback: (_source: this) => boolean): number;
        emit(signal: 'may-recognize'): void;
        connect(signal: 'recognize', callback: (_source: this) => void): number;
        connect_after(signal: 'recognize', callback: (_source: this) => void): number;
        emit(signal: 'recognize'): void;
        connect(
            signal: 'should-handle-sequence',
            callback: (_source: this, sequence_begin_event: Event) => boolean,
        ): number;
        connect_after(
            signal: 'should-handle-sequence',
            callback: (_source: this, sequence_begin_event: Event) => boolean,
        ): number;
        emit(signal: 'should-handle-sequence', sequence_begin_event: Event): void;

        // Methods

        /**
         * In case `self` and `other_gesture` are operating on the same points, calling
         * this function will make sure that `self` does not cancel `other_gesture`
         * when `self` moves to state RECOGNIZING.
         *
         * To allow two gestures to recognize simultaneously using the same set of
         * points (for example a zoom and a rotate gesture on the same actor), call
         * clutter_gesture_can_not_cancel() twice, so that both gestures can not
         * cancel each other.
         * @param other_gesture the other #ClutterGesture
         */
        can_not_cancel(other_gesture: Gesture): void;
        /**
         * Cancels the gesture by setting its state to CANCELLED.
         */
        cancel(): void;
        /**
         * Retrieves the number of active points the gesture currently has.
         * @returns the number of active points
         */
        get_n_points(): number;
        /**
         * Retrieves the begin coordinates of the point with index `point_index`.
         * @param point_index index of the point
         */
        get_point_begin_coords(point_index: number): Graphene.Point;
        /**
         * Retrieves the latest coordinates of the point with index `point_index`.
         * @param point_index index of the point
         */
        get_point_coords(point_index: number): Graphene.Point;
        /**
         * Retrieves the the latest event of the point with index `point_index`.
         * @param point_index index of the point
         * @returns The #ClutterEvent
         */
        get_point_event(point_index: number): Event;
        /**
         * Retrieves the previous coordinates of the point with index `point_index`.
         * @param point_index index of the point
         */
        get_point_previous_coords(point_index: number): Graphene.Point;
        /**
         * Retrieves an array of the currently active points of the gesture, the array is
         * ordered in the order the points were added in (newest to oldest).
         * @returns array with active points of the gesture
         */
        get_points(): number[];
        /**
         * Gets the current state of the gesture.
         * @returns the #ClutterGestureState
         */
        get_state(): GestureState;
    }

    module GestureAction {
        // Signal callback interfaces

        interface GestureBegin {
            (actor: Actor): boolean;
        }

        interface GestureCancel {
            (actor: Actor): void;
        }

        interface GestureEnd {
            (actor: Actor): void;
        }

        interface GestureProgress {
            (actor: Actor): boolean;
        }

        // Constructor properties interface

        interface ConstructorProps extends Action.ConstructorProps {
            n_touch_points: number;
            nTouchPoints: number;
            threshold_trigger_distance_x: number;
            thresholdTriggerDistanceX: number;
            threshold_trigger_distance_y: number;
            thresholdTriggerDistanceY: number;
            threshold_trigger_edge: GestureTriggerEdge;
            thresholdTriggerEdge: GestureTriggerEdge;
        }
    }

    /**
     * Action for gesture gestures
     *
     * #ClutterGestureAction is a sub-class of [class`Action]` that implements
     * the logic for recognizing gesture gestures. It listens for low level
     * [struct`Event]` events on the stage to raise
     * the [signal`GestureAction:`:gesture-begin], [signal`GestureAction:`:gesture-progress],
     * and [signal`GestureAction:`:gesture-end] signals.
     *
     * To use #ClutterGestureAction you just need to apply it to a [class`Actor]`
     * using [method`Actor`.add_action] and connect to the signals:
     *
     * ```c
     *   ClutterAction *action = clutter_gesture_action_new ();
     *
     *   clutter_actor_add_action (actor, action);
     *
     *   g_signal_connect (action, "gesture-begin", G_CALLBACK (on_gesture_begin), NULL);
     *   g_signal_connect (action, "gesture-progress", G_CALLBACK (on_gesture_progress), NULL);
     *   g_signal_connect (action, "gesture-end", G_CALLBACK (on_gesture_end), NULL);
     * ```
     *
     * ## Creating Gesture actions
     *
     * A #ClutterGestureAction provides four separate states that can be
     * used to recognize or ignore gestures when writing a new action class:
     *
     *  - Prepare -> Cancel
     *  - Prepare -> Begin -> Cancel
     *  - Prepare -> Begin -> End
     *  - Prepare -> Begin -> Progress -> Cancel
     *  - Prepare -> Begin -> Progress -> End
     *
     * Each #ClutterGestureAction starts in the "prepare" state, and calls
     * the [vfunc`GestureAction`.gesture_prepare] virtual function; this
     * state can be used to reset the internal state of a #ClutterGestureAction
     * subclass, but it can also immediately cancel a gesture without going
     * through the rest of the states.
     *
     * The "begin" state follows the "prepare" state, and calls the
     * [vfunc`GestureAction`.gesture_begin] virtual function. This state
     * signals the start of a gesture recognizing process. From the "begin" state
     * the gesture recognition process can successfully end, by going to the
     * "end" state; it can continue in the "progress" state, in case of a
     * continuous gesture; or it can be terminated, by moving to the "cancel"
     * state.
     *
     * In case of continuous gestures, the #ClutterGestureAction will use
     * the "progress" state, calling the [vfunc`GestureAction`.gesture_progress]
     * virtual function; the "progress" state will continue until the end of the
     * gesture, in which case the "end" state will be reached, or until the
     * gesture is cancelled, in which case the "cancel" gesture will be used
     * instead.
     */
    class GestureAction extends Action {
        static $gtype: GObject.GType<GestureAction>;

        // Properties

        /**
         * Number of touch points to trigger a gesture action.
         */
        get n_touch_points(): number;
        set n_touch_points(val: number);
        /**
         * Number of touch points to trigger a gesture action.
         */
        get nTouchPoints(): number;
        set nTouchPoints(val: number);
        /**
         * The horizontal trigger distance to be used by the action to either
         * emit the [signal`GestureAction:`:gesture-begin] signal or to emit
         * the [signal`GestureAction:`:gesture-cancel] signal.
         *
         * A negative value will be interpreted as the default drag threshold.
         */
        get threshold_trigger_distance_x(): number;
        /**
         * The horizontal trigger distance to be used by the action to either
         * emit the [signal`GestureAction:`:gesture-begin] signal or to emit
         * the [signal`GestureAction:`:gesture-cancel] signal.
         *
         * A negative value will be interpreted as the default drag threshold.
         */
        get thresholdTriggerDistanceX(): number;
        /**
         * The vertical trigger distance to be used by the action to either
         * emit the [signal`GestureAction:`:gesture-begin] signal or to emit
         * the [signal`GestureAction:`:gesture-cancel] signal.
         *
         * A negative value will be interpreted as the default drag threshold.
         */
        get threshold_trigger_distance_y(): number;
        /**
         * The vertical trigger distance to be used by the action to either
         * emit the [signal`GestureAction:`:gesture-begin] signal or to emit
         * the [signal`GestureAction:`:gesture-cancel] signal.
         *
         * A negative value will be interpreted as the default drag threshold.
         */
        get thresholdTriggerDistanceY(): number;
        /**
         * The trigger edge to be used by the action to either emit the
         * [signal`GestureAction:`:gesture-begin] signal or to emit the
         * [signal`GestureAction:`:gesture-cancel] signal.
         */
        get threshold_trigger_edge(): GestureTriggerEdge;
        /**
         * The trigger edge to be used by the action to either emit the
         * [signal`GestureAction:`:gesture-begin] signal or to emit the
         * [signal`GestureAction:`:gesture-cancel] signal.
         */
        get thresholdTriggerEdge(): GestureTriggerEdge;

        // Constructors

        constructor(properties?: Partial<GestureAction.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): GestureAction;

        // Signals

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'gesture-begin', callback: (_source: this, actor: Actor) => boolean): number;
        connect_after(signal: 'gesture-begin', callback: (_source: this, actor: Actor) => boolean): number;
        emit(signal: 'gesture-begin', actor: Actor): void;
        connect(signal: 'gesture-cancel', callback: (_source: this, actor: Actor) => void): number;
        connect_after(signal: 'gesture-cancel', callback: (_source: this, actor: Actor) => void): number;
        emit(signal: 'gesture-cancel', actor: Actor): void;
        connect(signal: 'gesture-end', callback: (_source: this, actor: Actor) => void): number;
        connect_after(signal: 'gesture-end', callback: (_source: this, actor: Actor) => void): number;
        emit(signal: 'gesture-end', actor: Actor): void;
        connect(signal: 'gesture-progress', callback: (_source: this, actor: Actor) => boolean): number;
        connect_after(signal: 'gesture-progress', callback: (_source: this, actor: Actor) => boolean): number;
        emit(signal: 'gesture-progress', actor: Actor): void;

        // Virtual methods

        /**
         * class handler for the #ClutterGestureAction::gesture-begin signal
         * @param actor
         */
        vfunc_gesture_begin(actor: Actor): boolean;
        /**
         * class handler for the #ClutterGestureAction::gesture-cancel signal
         * @param actor
         */
        vfunc_gesture_cancel(actor: Actor): void;
        /**
         * class handler for the #ClutterGestureAction::gesture-end signal
         * @param actor
         */
        vfunc_gesture_end(actor: Actor): void;
        /**
         * virtual function called before emitting the
         *   #ClutterGestureAction::gesture-cancel signal
         * @param actor
         */
        vfunc_gesture_prepare(actor: Actor): boolean;
        /**
         * class handler for the #ClutterGestureAction::gesture-progress signal
         * @param actor
         */
        vfunc_gesture_progress(actor: Actor): boolean;

        // Methods

        /**
         * Cancel a #ClutterGestureAction before it begins
         */
        cancel(): void;
        /**
         * Retrieves the #ClutterInputDevice of a touch point.
         * @param point the touch point index, with 0 being the first touch   point received by the action
         * @returns the #ClutterInputDevice of a touch point.
         */
        get_device(point: number): InputDevice;
        /**
         * Retrieves a reference to the last #ClutterEvent for a touch point. Call
         * [method`Event`.copy] if you need to store the reference somewhere.
         * @param point index of a point currently active
         * @returns the last #ClutterEvent for a touch point.
         */
        get_last_event(point: number): Event;
        /**
         * Retrieves the coordinates, in stage space, of the latest motion
         * event during the dragging.
         * @param point the touch point index, with 0 being the first touch   point received by the action
         */
        get_motion_coords(point: number): [number, number];
        /**
         * Retrieves the incremental delta since the last motion event
         * during the dragging.
         * @param point the touch point index, with 0 being the first touch   point received by the action
         * @returns the distance since last motion event
         */
        get_motion_delta(point: number): [number, number, number];
        /**
         * Retrieves the number of points currently active.
         * @returns the number of points currently active.
         */
        get_n_current_points(): number;
        /**
         * Retrieves the number of requested points to trigger the gesture.
         * @returns the number of points to trigger the gesture.
         */
        get_n_touch_points(): number;
        /**
         * Retrieves the coordinates, in stage space, of the press event
         * that started the dragging for a specific touch point.
         * @param point the touch point index, with 0 being the first touch   point received by the action
         */
        get_press_coords(point: number): [number, number];
        /**
         * Retrieves the coordinates, in stage space, where the touch point was
         * last released.
         * @param point the touch point index, with 0 being the first touch   point received by the action
         */
        get_release_coords(point: number): [number, number];
        /**
         * Retrieves the #ClutterEventSequence of a touch point.
         * @param point index of a point currently active
         * @returns the #ClutterEventSequence of a touch point.
         */
        get_sequence(point: number): EventSequence;
        /**
         * Retrieves the threshold trigger distance of the gesture `action,`
         * as set using [method`GestureAction`.set_threshold_trigger_distance].
         */
        get_threshold_trigger_distance(): [number, number];
        /**
         * Retrieves the edge trigger of the gesture `action,` as set using
         * [method`GestureAction`.set_threshold_trigger_edge].
         * @returns the edge trigger0
         */
        get_threshold_trigger_edge(): GestureTriggerEdge;
        /**
         * Retrieves the velocity, in stage pixels per millisecond, of the
         * latest motion event during the dragging.
         * @param point the touch point index, with 0 being the first touch   point received by the action
         */
        get_velocity(point: number): [number, number, number];
        /**
         * Sets the number of points needed to trigger the gesture.
         * @param nb_points a number of points
         */
        set_n_touch_points(nb_points: number): void;
        /**
         * Sets the threshold trigger distance for the gesture drag threshold, if any.
         *
         * This function should only be called by sub-classes of
         * #ClutterGestureAction during their construction phase.
         * @param x the distance on the horizontal axis
         * @param y the distance on the vertical axis
         */
        set_threshold_trigger_distance(x: number, y: number): void;
        /**
         * Sets the edge trigger for the gesture drag threshold, if any.
         *
         * This function should only be called by sub-classes of
         * #ClutterGestureAction during their construction phase.
         * @param edge the %ClutterGestureTriggerEdge
         */
        set_threshold_trigger_edge(edge: GestureTriggerEdge | null): void;
    }

    module Grab {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            revoked: boolean;
        }
    }

    class Grab extends GObject.Object {
        static $gtype: GObject.GType<Grab>;

        // Properties

        get revoked(): boolean;

        // Constructors

        constructor(properties?: Partial<Grab.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Methods

        /**
         * Activates a grab onto its assigned actor. Events will be propagated as
         * usual inside its hierarchy. Activating an already active grab will have
         * no side effects.
         *
         * This method is necessary for grabs obtained through
         * [method`Stage`.grab_inactive]. Grabs obtained through [method`Stage`.grab]
         * will be activated implicitly.
         *
         * to undo the effects of this function, call [method`Grab`.dismiss].
         */
        activate(): void;
        /**
         * Removes a grab. If this grab is effective, crossing events
         * will be generated to indicate the change in event redirection.
         */
        dismiss(): void;
        /**
         * Returns the windowing-level state of the
         * grab, the devices that are guaranteed to be
         * grabbed.
         * @returns The state of the grab.
         */
        get_seat_state(): GrabState;
        is_revoked(): boolean;
    }

    module GridLayout {
        // Constructor properties interface

        interface ConstructorProps extends LayoutManager.ConstructorProps {
            column_homogeneous: boolean;
            columnHomogeneous: boolean;
            column_spacing: number;
            columnSpacing: number;
            orientation: Orientation;
            row_homogeneous: boolean;
            rowHomogeneous: boolean;
            row_spacing: number;
            rowSpacing: number;
        }
    }

    /**
     * A layout manager for a grid of actors
     *
     * #ClutterGridLayout is a layout manager which arranges its child widgets in
     * rows and columns. It is a very similar to [class`Clutter`.BoxLayout], but it
     * consistently uses [class`Clutter`.Actor]'s alignment and expansion flags instead of
     * custom child properties.
     *
     * Children are added using [method`Clutter`.GridLayout.attach]. They can span
     * multiple rows or columns. It is also possible to add a child next to an
     * existing child, using [method`Clutter`.GridLayout.attach_next_to]. The behaviour of
     * #ClutterGridLayout when several children occupy the same grid cell is undefined.
     *
     * #ClutterGridLayout can be used like a #ClutterBoxLayout by just using
     * [method`Clutter`.Actor.add_child], which will place children next to each other in
     * the direction determined by the [property`Clutter`.GridLayout:orientation] property.
     */
    class GridLayout extends LayoutManager {
        static $gtype: GObject.GType<GridLayout>;

        // Properties

        /**
         * Whether all columns of the layout should have the same width
         */
        get column_homogeneous(): boolean;
        set column_homogeneous(val: boolean);
        /**
         * Whether all columns of the layout should have the same width
         */
        get columnHomogeneous(): boolean;
        set columnHomogeneous(val: boolean);
        /**
         * The amount of space in pixels between two consecutive columns
         */
        get column_spacing(): number;
        set column_spacing(val: number);
        /**
         * The amount of space in pixels between two consecutive columns
         */
        get columnSpacing(): number;
        set columnSpacing(val: number);
        /**
         * The orientation of the layout, either horizontal or vertical
         */
        get orientation(): Orientation;
        set orientation(val: Orientation);
        /**
         * Whether all rows of the layout should have the same height
         */
        get row_homogeneous(): boolean;
        set row_homogeneous(val: boolean);
        /**
         * Whether all rows of the layout should have the same height
         */
        get rowHomogeneous(): boolean;
        set rowHomogeneous(val: boolean);
        /**
         * The amount of space in pixels between two consecutive rows
         */
        get row_spacing(): number;
        set row_spacing(val: number);
        /**
         * The amount of space in pixels between two consecutive rows
         */
        get rowSpacing(): number;
        set rowSpacing(val: number);

        // Constructors

        constructor(properties?: Partial<GridLayout.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): GridLayout;

        // Methods

        /**
         * Adds a widget to the grid.
         *
         * The position of `child` is determined by `left` and `top`. The
         * number of 'cells' that `child` will occupy is determined by
         * `width` and `height`.
         * @param child the #ClutterActor to add
         * @param left the column number to attach the left side of @child to
         * @param top the row number to attach the top side of @child to
         * @param width the number of columns that @child will span
         * @param height the number of rows that @child will span
         */
        attach(child: Actor, left: number, top: number, width: number, height: number): void;
        /**
         * Adds a actor to the grid.
         *
         * The actor is placed next to `sibling,` on the side determined by
         * `side`. When `sibling` is %NULL, the actor is placed in row (for
         * left or right placement) or column 0 (for top or bottom placement),
         * at the end indicated by `side`.
         *
         * Attaching widgets labeled [1], [2], [3] with `sibling` == %NULL and
         * `side` == %CLUTTER_GRID_POSITION_LEFT yields a layout of [3][2][1].
         * @param child the actor to add
         * @param sibling the child of @layout that @child will be placed     next to, or %NULL to place @child at the beginning or end
         * @param side the side of @sibling that @child is positioned next to
         * @param width the number of columns that @child will span
         * @param height the number of rows that @child will span
         */
        attach_next_to(
            child: Actor,
            sibling: Actor | null,
            side: GridPosition | null,
            width: number,
            height: number,
        ): void;
        /**
         * Gets the child of `layout` whose area covers the grid
         * cell whose upper left corner is at `left,` `top`.
         * @param left the left edge of the cell
         * @param top the top edge of the cell
         * @returns the child at the given position, or %NULL
         */
        get_child_at(left: number, top: number): Actor;
        /**
         * Returns whether all columns of `layout` have the same width.
         * @returns whether all columns of @layout have the same width.
         */
        get_column_homogeneous(): boolean;
        /**
         * Retrieves the spacing set using [method`Clutter`.GridLayout.set_column_spacing]
         * @returns the spacing between coluns of @layout
         */
        get_column_spacing(): number;
        /**
         * Retrieves the orientation of the `layout`.
         * @returns the orientation of the layout
         */
        get_orientation(): Orientation;
        /**
         * Returns whether all rows of `layout` have the same height.
         * @returns whether all rows of @layout have the same height.
         */
        get_row_homogeneous(): boolean;
        /**
         * Retrieves the spacing set using [method`Clutter`.GridLayout.set_row_spacing]
         * @returns the spacing between rows of @layout
         */
        get_row_spacing(): number;
        /**
         * Inserts a column at the specified position.
         *
         * Children which are attached at or to the right of this position
         * are moved one column to the right. Children which span across this
         * position are grown to span the new column.
         * @param position the position to insert the column at
         */
        insert_column(position: number): void;
        /**
         * Inserts a row or column at the specified position.
         *
         * The new row or column is placed next to `sibling,` on the side
         * determined by `side`. If `side` is %CLUTTER_GRID_POSITION_LEFT or
         * %CLUTTER_GRID_POSITION_BOTTOM, a row is inserted. If `side` is
         * %CLUTTER_GRID_POSITION_LEFT of %CLUTTER_GRID_POSITION_RIGHT,
         * a column is inserted.
         * @param sibling the child of @layout that the new row or column will be     placed next to
         * @param side the side of @sibling that @child is positioned next to
         */
        insert_next_to(sibling: Actor, side: GridPosition | null): void;
        /**
         * Inserts a row at the specified position.
         *
         * Children which are attached at or below this position
         * are moved one row down. Children which span across this
         * position are grown to span the new row.
         * @param position the position to insert the row at
         */
        insert_row(position: number): void;
        /**
         * Sets whether all columns of `layout` will have the same width.
         * @param homogeneous %TRUE to make columns homogeneous
         */
        set_column_homogeneous(homogeneous: boolean): void;
        /**
         * Sets the spacing between columns of `layout`
         * @param spacing the spacing between columns of the layout, in pixels
         */
        set_column_spacing(spacing: number): void;
        /**
         * Sets the orientation of the `layout`.
         *
         * #ClutterGridLayout uses the orientation as a hint when adding
         * children to the #ClutterActor using it as a layout manager via
         * [method`Clutter`.Actor.add_child]; changing this value will not have
         * any effect on children that are already part of the layout.
         * @param orientation the orientation of the #ClutterGridLayout
         */
        set_orientation(orientation: Orientation | null): void;
        /**
         * Sets whether all rows of `layout` will have the same height.
         * @param homogeneous %TRUE to make rows homogeneous
         */
        set_row_homogeneous(homogeneous: boolean): void;
        /**
         * Sets the spacing between rows of `layout`
         * @param spacing the spacing between rows of the layout, in pixels
         */
        set_row_spacing(spacing: number): void;
    }

    module Image {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, Content.ConstructorProps {}
    }

    /**
     * Image data content
     *
     * #ClutterImage is a #ClutterContent implementation that displays
     * image data inside a [class`Actor]`.
     */
    class Image extends GObject.Object implements Content {
        static $gtype: GObject.GType<Image>;

        // Constructors

        constructor(properties?: Partial<Image.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Static methods

        /**
         * Creates a new #ClutterImage instance.
         */
        static ['new'](): Content;

        // Methods

        /**
         * Retrieves a pointer to the Cogl texture used by `image`.
         *
         * If you change the contents of the returned Cogl texture you will need
         * to manually invalidate the `image` with [method`Clutter`.Content.invalidate]
         * in order to update the actors using `image` as their content.
         * @returns a pointer to the Cogl texture, or %NULL
         */
        get_texture(): Cogl.Texture;
        /**
         * Sets the image data to be display by `image,` using `rect` to indicate
         * the position and size of the image data to be set.
         *
         * If the `image` does not have any image data set when this function is
         * called, a new texture will be created with the size of the width and
         * height of the rectangle, i.e. calling this function on a newly created
         * #ClutterImage will be the equivalent of calling [method`Clutter`.Image.set_data].
         *
         * If the image data was successfully loaded, the `image` will be invalidated.
         *
         * In case of error, the `error` value will be set, and this function will
         * return %FALSE.
         *
         * The image data is copied in texture memory.
         * @param data the image data, as an array of bytes
         * @param pixel_format the Cogl pixel format of the image data
         * @param rect a rectangle indicating the area that should be set
         * @param row_stride the length of each row inside @data
         * @returns %TRUE if the image data was successfully loaded,   and %FALSE otherwise.
         */
        set_area(
            data: Uint8Array | string,
            pixel_format: Cogl.PixelFormat | null,
            rect: Mtk.Rectangle,
            row_stride: number,
        ): boolean;
        /**
         * Sets the image data stored inside a #GBytes to be displayed by `image`.
         *
         * If the image data was successfully loaded, the `image` will be invalidated.
         *
         * In case of error, the `error` value will be set, and this function will
         * return %FALSE.
         *
         * The image data contained inside the #GBytes is copied in texture memory,
         * and no additional reference is acquired on the `data`.
         * @param data the image data, as a #GBytes
         * @param pixel_format the Cogl pixel format of the image data
         * @param width the width of the image data
         * @param height the height of the image data
         * @param row_stride the length of each row inside @data
         * @returns %TRUE if the image data was successfully loaded,   and %FALSE otherwise.
         */
        set_bytes(
            data: GLib.Bytes | Uint8Array,
            pixel_format: Cogl.PixelFormat | null,
            width: number,
            height: number,
            row_stride: number,
        ): boolean;
        /**
         * Sets the image data to be displayed by `image`.
         *
         * If the image data was successfully loaded, the `image` will be invalidated.
         *
         * In case of error, the `error` value will be set, and this function will
         * return %FALSE.
         *
         * The image data is copied in texture memory.
         *
         * The image data is expected to be a linear array of RGBA or RGB pixel data;
         * how to retrieve that data is left to platform specific image loaders. For
         * instance, if you use the GdkPixbuf library:
         *
         * ```c
         *   ClutterContent *image = clutter_image_new ();
         *
         *   GdkPixbuf *pixbuf = gdk_pixbuf_new_from_file (filename, NULL);
         *
         *   clutter_image_set_data (CLUTTER_IMAGE (image),
         *                           gdk_pixbuf_get_pixels (pixbuf),
         *                           gdk_pixbuf_get_has_alpha (pixbuf)
         *                             ? COGL_PIXEL_FORMAT_RGBA_8888
         *                             : COGL_PIXEL_FORMAT_RGB_888,
         *                           gdk_pixbuf_get_width (pixbuf),
         *                           gdk_pixbuf_get_height (pixbuf),
         *                           gdk_pixbuf_get_rowstride (pixbuf),
         *                           &error);
         *
         *   g_object_unref (pixbuf);
         * ```
         * @param data the image data, as an array of bytes
         * @param pixel_format the Cogl pixel format of the image data
         * @param width the width of the image data
         * @param height the height of the image data
         * @param row_stride the length of each row inside @data
         * @returns %TRUE if the image data was successfully loaded,   and %FALSE otherwise.
         */
        set_data(
            data: Uint8Array | string,
            pixel_format: Cogl.PixelFormat | null,
            width: number,
            height: number,
            row_stride: number,
        ): boolean;
        // Conflicted with GObject.Object.set_data
        set_data(...args: never[]): any;

        // Inherited methods
        /**
         * Retrieves the natural size of the `content,` if any.
         *
         * The natural size of a #ClutterContent is defined as the size the content
         * would have regardless of the allocation of the actor that is painting it,
         * for instance the size of an image data.
         * @returns %TRUE if the content has a preferred size, and %FALSE   otherwise
         */
        get_preferred_size(): [boolean, number, number];
        /**
         * Invalidates a #ClutterContent.
         *
         * This function should be called by #ClutterContent implementations when
         * they change the way a the content should be painted regardless of the
         * actor state.
         */
        invalidate(): void;
        /**
         * Signals that `content'`s size changed. Attached actors with request mode
         * set to %CLUTTER_REQUEST_CONTENT_SIZE will have a relayout queued.
         *
         * Attached actors with other request modes are not redrawn. To redraw them
         * too, use [method`Clutter`.Content.invalidate].
         */
        invalidate_size(): void;
        /**
         * virtual function; called each time a #ClutterContent is attached
         *   to a #ClutterActor.
         * @param actor
         */
        vfunc_attached(actor: Actor): void;
        /**
         * virtual function; called each time a #ClutterContent is detached
         *   from a #ClutterActor.
         * @param actor
         */
        vfunc_detached(actor: Actor): void;
        /**
         * Retrieves the natural size of the `content,` if any.
         *
         * The natural size of a #ClutterContent is defined as the size the content
         * would have regardless of the allocation of the actor that is painting it,
         * for instance the size of an image data.
         */
        vfunc_get_preferred_size(): [boolean, number, number];
        /**
         * Invalidates a #ClutterContent.
         *
         * This function should be called by #ClutterContent implementations when
         * they change the way a the content should be painted regardless of the
         * actor state.
         */
        vfunc_invalidate(): void;
        /**
         * Signals that `content'`s size changed. Attached actors with request mode
         * set to %CLUTTER_REQUEST_CONTENT_SIZE will have a relayout queued.
         *
         * Attached actors with other request modes are not redrawn. To redraw them
         * too, use [method`Clutter`.Content.invalidate].
         */
        vfunc_invalidate_size(): void;
        /**
         * virtual function; called each time the content needs to
         *   paint itself
         * @param actor
         * @param node
         * @param paint_context
         */
        vfunc_paint_content(actor: Actor, node: PaintNode, paint_context: PaintContext): void;
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
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
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
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        get_property(property_name: string): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
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
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
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
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
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
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
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
         * @returns @object
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        set_property(property_name: string, value: any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
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
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
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
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
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
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
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
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module InputDevice {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            capabilities: InputCapabilities;
            device_mode: InputMode;
            deviceMode: InputMode;
            device_node: string;
            deviceNode: string;
            device_type: InputDeviceType;
            deviceType: InputDeviceType;
            has_cursor: boolean;
            hasCursor: boolean;
            n_buttons: number;
            nButtons: number;
            n_mode_groups: number;
            nModeGroups: number;
            n_rings: number;
            nRings: number;
            n_strips: number;
            nStrips: number;
            name: string;
            product_id: string;
            productId: string;
            seat: Seat;
            vendor_id: string;
            vendorId: string;
        }
    }

    /**
     * An input device managed by Clutter
     *
     * #ClutterInputDevice represents an input device known to Clutter.
     *
     * The #ClutterInputDevice class holds the state of the device, but
     * its contents are usually defined by the Clutter backend in use.
     */
    class InputDevice extends GObject.Object {
        static $gtype: GObject.GType<InputDevice>;

        // Properties

        /**
         * The capabilities of the device
         */
        get capabilities(): InputCapabilities;
        get device_mode(): InputMode;
        get deviceMode(): InputMode;
        get device_node(): string;
        get deviceNode(): string;
        /**
         * The type of the device
         */
        get device_type(): InputDeviceType;
        /**
         * The type of the device
         */
        get deviceType(): InputDeviceType;
        /**
         * Whether the device has an on screen cursor following its movement.
         */
        get has_cursor(): boolean;
        /**
         * Whether the device has an on screen cursor following its movement.
         */
        get hasCursor(): boolean;
        get n_buttons(): number;
        get nButtons(): number;
        get n_mode_groups(): number;
        get nModeGroups(): number;
        get n_rings(): number;
        get nRings(): number;
        get n_strips(): number;
        get nStrips(): number;
        /**
         * The name of the device
         */
        get name(): string;
        /**
         * Product ID of this device.2
         */
        get product_id(): string;
        /**
         * Product ID of this device.2
         */
        get productId(): string;
        /**
         * The #ClutterSeat instance which owns the device
         */
        get seat(): Seat;
        /**
         * Vendor ID of this device.2
         */
        get vendor_id(): string;
        /**
         * Vendor ID of this device.2
         */
        get vendorId(): string;

        // Constructors

        constructor(properties?: Partial<InputDevice.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Virtual methods

        vfunc_get_dimensions(): [boolean, number, number];
        vfunc_get_group_n_modes(group: number): number;
        vfunc_get_pad_feature_group(feature: InputDevicePadFeature, n_feature: number): number;
        vfunc_is_grouped(other_device: InputDevice): boolean;
        vfunc_is_mode_switch_button(group: number, button: number): boolean;

        // Methods

        /**
         * Retrieves the capabilities of `device`
         * @returns the capabilities of the device
         */
        get_capabilities(): InputCapabilities;
        /**
         * Retrieves the #ClutterInputMode of `device`.
         * @returns the device mode
         */
        get_device_mode(): InputMode;
        /**
         * Retrieves the name of the `device`
         * @returns the name of the device, or %NULL. The returned string   is owned by the #ClutterInputDevice and should never be modified   or freed
         */
        get_device_name(): string;
        get_device_node(): string;
        /**
         * Retrieves the type of `device`
         * @returns the type of the device
         */
        get_device_type(): InputDeviceType;
        get_dimensions(): [boolean, number, number];
        get_group_n_modes(group: number): number;
        /**
         * Retrieves whether `device` has a pointer that follows the
         * device motion.
         * @returns %TRUE if the device has a cursor
         */
        get_has_cursor(): boolean;
        get_mode_switch_button_group(button: number): number;
        get_n_buttons(): number;
        get_n_mode_groups(): number;
        get_n_rings(): number;
        get_n_strips(): number;
        get_pad_feature_group(feature: InputDevicePadFeature | null, n_feature: number): number;
        /**
         * Gets the product ID of this device.
         * @returns the product ID2
         */
        get_product_id(): string;
        /**
         * Returns the seat the device belongs to
         * @returns the device seat
         */
        get_seat(): Seat;
        /**
         * Gets the vendor ID of this device.
         * @returns the vendor ID2
         */
        get_vendor_id(): string;
        is_grouped(other_device: InputDevice): boolean;
        is_mode_switch_button(group: number, button: number): boolean;
    }

    module InputDeviceTool {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            axes: InputAxisFlags;
            id: number;
            serial: number;
            type: InputDeviceToolType;
        }
    }

    abstract class InputDeviceTool extends GObject.Object {
        static $gtype: GObject.GType<InputDeviceTool>;

        // Properties

        get axes(): InputAxisFlags;
        get id(): number;
        get serial(): number;
        get type(): InputDeviceToolType;

        // Constructors

        constructor(properties?: Partial<InputDeviceTool.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Methods

        get_axes(): InputAxisFlags;
        /**
         * Gets the ID of this tool, this value can be used to identify a
         * physical tool (eg. a tablet pen) across program executions.
         * @returns The tool ID for this tool
         */
        get_id(): number;
        /**
         * Gets the serial of this tool, this value can be used to identify a
         * physical tool (eg. a tablet pen) across program executions.
         * @returns The serial ID for this tool8
         */
        get_serial(): number;
        /**
         * Gets the tool type of this tool.
         * @returns The tool type of this tool8
         */
        get_tool_type(): InputDeviceToolType;
    }

    module InputFocus {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    abstract class InputFocus extends GObject.Object {
        static $gtype: GObject.GType<InputFocus>;

        // Constructors

        constructor(properties?: Partial<InputFocus.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Virtual methods

        vfunc_commit_text(text: string): void;
        vfunc_delete_surrounding(offset: number, len: number): void;
        vfunc_focus_in(input_method: InputMethod): void;
        vfunc_focus_out(): void;
        vfunc_request_surrounding(): void;
        vfunc_set_preedit_text(preedit: string, cursor: number, anchor: number): void;

        // Methods

        filter_event(event: Event): boolean;
        is_focused(): boolean;
        process_event(event: Event): boolean;
        reset(): void;
        set_can_show_preedit(can_show_preedit: boolean): void;
        set_content_hints(hint: InputContentHintFlags | null): void;
        set_content_purpose(purpose: InputContentPurpose | null): void;
        set_cursor_location(rect: Graphene.Rect): void;
        set_input_panel_state(state: InputPanelState | null): void;
        set_surrounding(text: string, cursor: number, anchor: number): void;
    }

    module InputMethod {
        // Signal callback interfaces

        interface Commit {
            (object: string): void;
        }

        interface CursorLocationChanged {
            (object: Graphene.Rect): void;
        }

        interface DeleteSurrounding {
            (object: number, p0: number): void;
        }

        interface InputPanelState {
            (object: InputPanelState): void;
        }

        interface RequestSurrounding {
            (): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            can_show_preedit: boolean;
            canShowPreedit: boolean;
            content_hints: InputContentHintFlags;
            contentHints: InputContentHintFlags;
            content_purpose: InputContentPurpose;
            contentPurpose: InputContentPurpose;
        }
    }

    abstract class InputMethod extends GObject.Object {
        static $gtype: GObject.GType<InputMethod>;

        // Properties

        get can_show_preedit(): boolean;
        set can_show_preedit(val: boolean);
        get canShowPreedit(): boolean;
        set canShowPreedit(val: boolean);
        get content_hints(): InputContentHintFlags;
        set content_hints(val: InputContentHintFlags);
        get contentHints(): InputContentHintFlags;
        set contentHints(val: InputContentHintFlags);
        get content_purpose(): InputContentPurpose;
        set content_purpose(val: InputContentPurpose);
        get contentPurpose(): InputContentPurpose;
        set contentPurpose(val: InputContentPurpose);

        // Constructors

        constructor(properties?: Partial<InputMethod.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'commit', callback: (_source: this, object: string) => void): number;
        connect_after(signal: 'commit', callback: (_source: this, object: string) => void): number;
        emit(signal: 'commit', object: string): void;
        connect(signal: 'cursor-location-changed', callback: (_source: this, object: Graphene.Rect) => void): number;
        connect_after(
            signal: 'cursor-location-changed',
            callback: (_source: this, object: Graphene.Rect) => void,
        ): number;
        emit(signal: 'cursor-location-changed', object: Graphene.Rect): void;
        connect(signal: 'delete-surrounding', callback: (_source: this, object: number, p0: number) => void): number;
        connect_after(
            signal: 'delete-surrounding',
            callback: (_source: this, object: number, p0: number) => void,
        ): number;
        emit(signal: 'delete-surrounding', object: number, p0: number): void;
        connect(signal: 'input-panel-state', callback: (_source: this, object: InputPanelState) => void): number;
        connect_after(signal: 'input-panel-state', callback: (_source: this, object: InputPanelState) => void): number;
        emit(signal: 'input-panel-state', object: InputPanelState): void;
        connect(signal: 'request-surrounding', callback: (_source: this) => void): number;
        connect_after(signal: 'request-surrounding', callback: (_source: this) => void): number;
        emit(signal: 'request-surrounding'): void;

        // Virtual methods

        vfunc_filter_key_event(key: Event): boolean;
        vfunc_focus_in(actor: InputFocus): void;
        vfunc_focus_out(): void;
        vfunc_reset(): void;
        vfunc_set_cursor_location(rect: Graphene.Rect): void;
        vfunc_set_surrounding(text: string, cursor: number, anchor: number): void;
        vfunc_update_content_hints(hint: InputContentHintFlags): void;
        vfunc_update_content_purpose(purpose: InputContentPurpose): void;

        // Methods

        commit(text: string): void;
        delete_surrounding(offset: number, len: number): void;
        focus_in(focus: InputFocus): void;
        focus_out(): void;
        forward_key(keyval: number, keycode: number, state: number, time_: number, press: boolean): void;
        notify_key_event(event: Event, filtered: boolean): void;
        request_surrounding(): void;
        set_input_panel_state(state: InputPanelState | null): void;
        /**
         * Sets the preedit text on the current input focus.
         * @param preedit the preedit text, or %NULL
         * @param cursor the cursor
         * @param anchor
         * @param mode
         */
        set_preedit_text(preedit: string | null, cursor: number, anchor: number, mode: PreeditResetMode | null): void;
    }

    module Interval {
        // Constructor properties interface

        interface ConstructorProps extends GObject.InitiallyUnowned.ConstructorProps {
            final: GObject.Value;
            initial: GObject.Value;
            value_type: GObject.GType;
            valueType: GObject.GType;
        }
    }

    /**
     * An object holding an interval of two values
     *
     * #ClutterInterval is a simple object that can hold two values
     * defining an interval. #ClutterInterval can hold any value that
     * can be enclosed inside a #GValue.
     *
     * Once a #ClutterInterval for a specific #GType has been instantiated
     * the #ClutterInterval:value-type property cannot be changed anymore.
     *
     * #ClutterInterval starts with a floating reference; this means that
     * any object taking a reference on a #ClutterInterval instance should
     * also take ownership of the interval by using g_object_ref_sink().
     *
     * #ClutterInterval can be subclassed to override the validation
     * and value computation.
     */
    class Interval extends GObject.InitiallyUnowned {
        static $gtype: GObject.GType<Interval>;

        // Properties

        /**
         * The final value of the interval.
         */
        get final(): GObject.Value;
        set final(val: GObject.Value);
        /**
         * The initial value of the interval.
         */
        get initial(): GObject.Value;
        set initial(val: GObject.Value);
        /**
         * The type of the values in the interval.
         */
        get value_type(): GObject.GType;
        /**
         * The type of the values in the interval.
         */
        get valueType(): GObject.GType;

        // Constructors

        constructor(properties?: Partial<Interval.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_with_values(
            gtype: GObject.GType,
            initial?: GObject.Value | null,
            _final?: GObject.Value | null,
        ): Interval;

        // Virtual methods

        /**
         * Computes the value between the `interval` boundaries given the
         * progress `factor` and copies it into `value`.
         * @param factor the progress factor, between 0 and 1
         */
        vfunc_compute_value(factor: number): [boolean, unknown];
        /**
         * Validates the initial and final values of `interval` against
         * a #GParamSpec.
         * @param pspec a #GParamSpec
         */
        vfunc_validate(pspec: GObject.ParamSpec): boolean;

        // Methods

        /**
         * Creates a copy of `interval`.
         * @returns the newly created #ClutterInterval
         */
        clone(): Interval;
        /**
         * Computes the value between the `interval` boundaries given the
         * progress `factor`
         *
         * Unlike [method`Clutter`.Interval.compute_value], this function will
         * return a const pointer to the computed value
         *
         * You should use this function if you immediately pass the computed
         * value to another function that makes a copy of it, like
         * g_object_set_property()
         * @param factor the progress factor, between 0 and 1
         * @returns a pointer to the computed value,   or %NULL if the computation was not successful
         */
        compute(factor: number): unknown;
        /**
         * Computes the value between the `interval` boundaries given the
         * progress `factor` and copies it into `value`.
         * @param factor the progress factor, between 0 and 1
         * @returns %TRUE if the operation was successful
         */
        compute_value(factor: number): [boolean, unknown];
        /**
         * Retrieves the final value of `interval` and copies
         * it into `value`.
         *
         * The passed #GValue must be initialized to the value held by
         * the #ClutterInterval.
         */
        get_final_value(): unknown;
        /**
         * Retrieves the initial value of `interval` and copies
         * it into `value`.
         *
         * The passed #GValue must be initialized to the value held by
         * the #ClutterInterval.
         */
        get_initial_value(): unknown;
        /**
         * Retrieves the #GType of the values inside `interval`.
         * @returns the type of the value, or G_TYPE_INVALID
         */
        get_value_type(): GObject.GType;
        /**
         * Checks if the `interval` has a valid initial and final values.
         * @returns %TRUE if the #ClutterInterval has an initial and   final values, and %FALSE otherwise
         */
        is_valid(): boolean;
        /**
         * Gets the pointer to the final value of `interval`
         * @returns the final value of the interval.   The value is owned by the #ClutterInterval and it should not be   modified or freed
         */
        peek_final_value(): unknown;
        /**
         * Gets the pointer to the initial value of `interval`
         * @returns the initial value of the interval.   The value is owned by the #ClutterInterval and it should not be   modified or freed
         */
        peek_initial_value(): unknown;
        /**
         * Sets the final value of `interval` to `value`. The value is
         * copied inside the #ClutterInterval.
         * @param value a #GValue
         */
        set_final(value: GObject.Value | any): void;
        /**
         * Sets the initial value of `interval` to `value`. The value is copied
         * inside the #ClutterInterval.
         * @param value a #GValue
         */
        set_initial(value: GObject.Value | any): void;
        /**
         * Validates the initial and final values of `interval` against
         * a #GParamSpec.
         * @param pspec a #GParamSpec
         * @returns %TRUE if the #ClutterInterval is valid, %FALSE otherwise
         */
        validate(pspec: GObject.ParamSpec): boolean;
    }

    module KeyframeTransition {
        // Constructor properties interface

        interface ConstructorProps extends PropertyTransition.ConstructorProps {}
    }

    /**
     * Keyframe property transition
     *
     * #ClutterKeyframeTransition allows animating a property by defining
     * "key frames": values at a normalized position on the transition
     * duration.
     *
     * The #ClutterKeyframeTransition interpolates the value of the property
     * to which it's bound across these key values.
     *
     * Setting up a #ClutterKeyframeTransition means providing the times,
     * values, and easing modes between these key frames, for instance:
     *
     * ```c
     *   ClutterTransition *keyframe;
     *
     *   keyframe = clutter_keyframe_transition_new ("opacity");
     *   clutter_transition_set_from (keyframe, G_TYPE_UINT, 255);
     *   clutter_transition_set_to (keyframe, G_TYPE_UINT, 0);
     *   clutter_keyframe_transition_set (CLUTTER_KEYFRAME_TRANSITION (keyframe),
     *                                    G_TYPE_UINT,
     *                                    1, /&ast; number of key frames &ast;/
     *                                    0.5, 128, CLUTTER_EASE_IN_OUT_CUBIC);
     * ```
     *
     * The example above sets up a keyframe transition for the [property`Clutter`.Actor:opacity]
     * property of a #ClutterActor; the transition starts and sets the value of the
     * property to fully transparent; between the start of the transition and its mid
     * point, it will animate the property to half opacity, using an easy in/easy out
     * progress. Once the transition reaches the mid point, it will linearly fade the
     * actor out until it reaches the end of the transition.
     *
     * The #ClutterKeyframeTransition will add an implicit key frame between the last
     * and the 1.0 value, to interpolate to the final value of the transition's
     * interval..
     */
    class KeyframeTransition extends PropertyTransition {
        static $gtype: GObject.GType<KeyframeTransition>;

        // Constructors

        constructor(properties?: Partial<KeyframeTransition.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](property_name: string): KeyframeTransition;
        // Conflicted with Clutter.PropertyTransition.new

        static ['new'](...args: never[]): any;

        // Methods

        /**
         * Removes all key frames from `transition`.
         */
        clear(): void;
        /**
         * Retrieves the details of the key frame at `index_` inside `transition`.
         *
         * The `transition` must already have key frames set, and `index_` must be
         * smaller than the number of key frames.
         * @param index_ the index of the key frame
         */
        get_key_frame(index_: number): [number, AnimationMode | null, unknown];
        /**
         * Retrieves the number of key frames inside `transition`.
         * @returns the number of key frames
         */
        get_n_key_frames(): number;
        /**
         * Sets the details of the key frame at `index_` inside `transition`.
         *
         * The `transition` must already have a key frame at `index_,` and `index_`
         * must be smaller than the number of key frames inside `transition`.
         * @param index_ the index of the key frame
         * @param key the key of the key frame
         * @param mode the easing mode of the key frame
         * @param value a #GValue containing the value of the key frame
         */
        set_key_frame(index_: number, key: number, mode: AnimationMode | null, value: GObject.Value | any): void;
        /**
         * Sets the keys for each key frame inside `transition`.
         *
         * If `transition` does not hold any key frame, `n_key_frames` key frames
         * will be created; if `transition` already has key frames, `key_frames` must
         * have at least as many elements as the number of key frames.
         * @param key_frames an array of keys between 0.0   and 1.0, one for each key frame
         */
        set_key_frames(key_frames: number[]): void;
        /**
         * Sets the easing modes for each key frame inside `transition`.
         *
         * If `transition` does not hold any key frame, `n_modes` key frames will
         * be created; if `transition` already has key frames, `modes` must have
         * at least as many elements as the number of key frames.
         * @param modes an array of easing modes, one for   each key frame
         */
        set_modes(modes: AnimationMode[] | null): void;
        /**
         * Sets the values for each key frame inside `transition`.
         *
         * If `transition` does not hold any key frame, `n_values` key frames will
         * be created; if `transition` already has key frames, `values` must have
         * at least as many elements as the number of key frames.
         * @param values an array of values, one for each   key frame
         */
        set_values(values: (GObject.Value | any)[]): void;
    }

    module Keymap {
        // Signal callback interfaces

        interface StateChanged {
            (): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            caps_lock_state: boolean;
            capsLockState: boolean;
            num_lock_state: boolean;
            numLockState: boolean;
        }
    }

    abstract class Keymap extends GObject.Object {
        static $gtype: GObject.GType<Keymap>;

        // Properties

        get caps_lock_state(): boolean;
        get capsLockState(): boolean;
        get num_lock_state(): boolean;
        get numLockState(): boolean;

        // Constructors

        constructor(properties?: Partial<Keymap.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'state-changed', callback: (_source: this) => void): number;
        connect_after(signal: 'state-changed', callback: (_source: this) => void): number;
        emit(signal: 'state-changed'): void;

        // Virtual methods

        vfunc_get_direction(): TextDirection;

        // Methods

        get_caps_lock_state(): boolean;
        get_direction(): TextDirection;
        get_num_lock_state(): boolean;
    }

    class LayerNode extends PaintNode {
        static $gtype: GObject.GType<LayerNode>;

        // Constructors

        _init(...args: any[]): void;

        static new_to_framebuffer(framebuffer: Cogl.Framebuffer, pipeline: Cogl.Pipeline): LayerNode;
    }

    module LayoutManager {
        // Signal callback interfaces

        interface LayoutChanged {
            (): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.InitiallyUnowned.ConstructorProps {}
    }

    /**
     * Layout managers base class
     *
     * #ClutterLayoutManager is a base abstract class for layout managers. A
     * layout manager implements the layouting policy for a composite or a
     * container actor: it controls the preferred size of the actor to which
     * it has been paired, and it controls the allocation of its children.
     *
     * Any composite or container [class`Clutter`.Actor] subclass can delegate the
     * layouting of its children to a #ClutterLayoutManager.
     *
     * Clutter provides some simple #ClutterLayoutManager sub-classes, like
     * [class`Clutter`.FlowLayout] and [class`Clutter`.BinLayout].
     *
     * ## Implementing a ClutterLayoutManager
     * The implementation of a layout manager does not differ from  the
     * implementation of the size requisition and allocation bits of
     * [class`Clutter`.Actor], so you should read the relative documentation
     * for subclassing [class`Clutter`.Actor].
     *
     * The layout manager implementation can hold a back pointer to the container
     * [type`Clutter`.Actor] by implementing the
     * [vfunc`Clutter`.LayoutManager.set_container] virtual function. The layout
     * manager should not hold a real reference (i.e. call
     * [method`GObject`.Object.ref]) on the container actor, to avoid reference
     * cycles.
     *
     * If a layout manager has properties affecting the layout policies then it should
     * emit the [signal`Clutter`.LayoutManager::layout-changed] signal on itself by using the
     * [method`Clutter`.LayoutManager.layout_changed] function whenever one of these properties
     * changes.
     *
     * ## Layout Properties
     *
     * If a layout manager has layout properties, that is properties that
     * should exist only as the result of the presence of a specific (layout
     * manager, container actor, child actor) combination, and it wishes to store
     * those properties inside a [class`Clutter`.LayoutMeta], then it should override the
     * [vfunc`Clutter`.LayoutManager.get_child_meta_type] virtual function to return
     * the #GType of the [class`Clutter`.LayoutMeta] sub-class used to store the layout
     * properties; optionally, the #ClutterLayoutManager sub-class might also
     * override the [vfunc`Clutter`.LayoutManager.create_child_meta] virtual function
     * to control how the [class`Clutter`.LayoutMeta] instance is created, otherwise the
     * default implementation will be equivalent to:
     *
     * ```c
     *  ClutterLayoutManagerClass *klass;
     *  GType meta_type;
     *
     *  klass = CLUTTER_LAYOUT_MANAGER_GET_CLASS (manager);
     *  meta_type = klass->get_child_meta_type (manager);
     *
     *  return g_object_new (meta_type,
     *                       "manager", manager,
     *                       "container", container,
     *                       "actor", actor,
     *                       NULL);
     * ```
     *
     * Where `manager` is the  #ClutterLayoutManager, `container` is the
     * [class`Clutter`.Actor] using the #ClutterLayoutManager, and `actor` is
     * the [class`Clutter`.Actor] child of the [class`Clutter`.Actor].
     */
    abstract class LayoutManager extends GObject.InitiallyUnowned {
        static $gtype: GObject.GType<LayoutManager>;

        // Constructors

        constructor(properties?: Partial<LayoutManager.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'layout-changed', callback: (_source: this) => void): number;
        connect_after(signal: 'layout-changed', callback: (_source: this) => void): number;
        emit(signal: 'layout-changed'): void;

        // Virtual methods

        /**
         * Allocates the children of `container` given an area
         *
         * See also [method`Clutter`.Actor.allocate]
         * @param container the #ClutterActor using @manager
         * @param allocation the #ClutterActorBox containing the allocated area   of @container
         */
        vfunc_allocate(container: Actor, allocation: ActorBox): void;
        /**
         * virtual function; override to return the #GType
         *   of the #ClutterLayoutMeta sub-class used by the #ClutterLayoutManager
         */
        vfunc_get_child_meta_type(): GObject.GType;
        /**
         * Computes the minimum and natural heights of the `container` according
         * to `manager`.
         *
         * See also [method`Clutter`.Actor.get_preferred_height]
         * @param container the #ClutterActor using @manager
         * @param for_width the width for which the height should be computed, or -1
         */
        vfunc_get_preferred_height(container: Actor, for_width: number): [number, number];
        /**
         * Computes the minimum and natural widths of the `container` according
         * to `manager`.
         *
         * See also [method`Clutter`.Actor.get_preferred_width]
         * @param container the #ClutterActor using @manager
         * @param for_height the height for which the width should be computed, or -1
         */
        vfunc_get_preferred_width(container: Actor, for_height: number): [number, number];
        /**
         * Emits the [signal`Clutter`.LayoutManager::layout-changed] signal on `manager`
         *
         * This function should only be called by implementations of the
         * #ClutterLayoutManager class
         */
        vfunc_layout_changed(): void;
        /**
         * If the #ClutterLayoutManager sub-class allows it, allow
         * adding a weak reference of the `container` using `manager`
         * from within the layout manager
         *
         * The layout manager should not increase the reference
         * count of the `container`
         * @param container a [type@Clutter.Actor] using @manager
         */
        vfunc_set_container(container?: Actor | null): void;

        // Methods

        /**
         * Allocates the children of `container` given an area
         *
         * See also [method`Clutter`.Actor.allocate]
         * @param container the #ClutterActor using @manager
         * @param allocation the #ClutterActorBox containing the allocated area   of @container
         */
        allocate(container: Actor, allocation: ActorBox): void;
        /**
         * Gets a property on the #ClutterLayoutMeta created by `manager` and
         * attached to a child of `container`
         *
         * The #GValue must already be initialized to the type of the property
         * and has to be unset with g_value_unset() after extracting the real
         * value out of it
         * @param container a [type@Clutter.Actor] using @manager
         * @param actor a [type@Clutter.Actor] child of @container
         * @param property_name the name of the property to get
         * @param value a #GValue with the value of the property to get
         */
        child_get_property(container: Actor, actor: Actor, property_name: string, value: GObject.Value | any): void;
        /**
         * Sets a property on the #ClutterLayoutMeta created by `manager` and
         * attached to a child of `container`
         * @param container a [type@Clutter.Actor] using @manager
         * @param actor a [type@Clutter.Actor] child of @container
         * @param property_name the name of the property to set
         * @param value a #GValue with the value of the property to set
         */
        child_set_property(container: Actor, actor: Actor, property_name: string, value: GObject.Value | any): void;
        /**
         * Retrieves the #GParamSpec for the layout property `name` inside
         * the #ClutterLayoutMeta sub-class used by `manager`
         * @param name the name of the property
         * @returns a #GParamSpec describing the property,   or %NULL if no property with that name exists. The returned   #GParamSpec is owned by the layout manager and should not be   modified or freed
         */
        find_child_property(name: string): GObject.ParamSpec;
        /**
         * Retrieves the #ClutterLayoutMeta that the layout `manager` associated
         * to the `actor` child of `container,` eventually by creating one if the
         * #ClutterLayoutManager supports layout properties
         * @param container a [type@Clutter.Actor] using @manager
         * @param actor a [type@Clutter.Actor] child of @container
         * @returns a #ClutterLayoutMeta, or %NULL if the   #ClutterLayoutManager does not have layout properties. The returned   layout meta instance is owned by the #ClutterLayoutManager and it   should not be unreferenced
         */
        get_child_meta(container: Actor, actor: Actor): LayoutMeta;
        /**
         * Computes the minimum and natural heights of the `container` according
         * to `manager`.
         *
         * See also [method`Clutter`.Actor.get_preferred_height]
         * @param container the #ClutterActor using @manager
         * @param for_width the width for which the height should be computed, or -1
         */
        get_preferred_height(container: Actor, for_width: number): [number, number];
        /**
         * Computes the minimum and natural widths of the `container` according
         * to `manager`.
         *
         * See also [method`Clutter`.Actor.get_preferred_width]
         * @param container the #ClutterActor using @manager
         * @param for_height the height for which the width should be computed, or -1
         */
        get_preferred_width(container: Actor, for_height: number): [number, number];
        /**
         * Emits the [signal`Clutter`.LayoutManager::layout-changed] signal on `manager`
         *
         * This function should only be called by implementations of the
         * #ClutterLayoutManager class
         */
        layout_changed(): void;
        /**
         * Retrieves all the `GParamSpec`s for the layout properties
         * stored inside the #ClutterLayoutMeta sub-class used by `manager`
         * @returns the newly-allocated,   %NULL-terminated array of `GParamSpec`s. Use g_free() to free the   resources allocated for the array
         */
        list_child_properties(): GObject.ParamSpec[];
        /**
         * If the #ClutterLayoutManager sub-class allows it, allow
         * adding a weak reference of the `container` using `manager`
         * from within the layout manager
         *
         * The layout manager should not increase the reference
         * count of the `container`
         * @param container a [type@Clutter.Actor] using @manager
         */
        set_container(container?: Actor | null): void;
    }

    module LayoutMeta {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            actor: Actor;
            container: Actor;
            manager: LayoutManager;
        }
    }

    /**
     * Wrapper for actors inside a layout manager
     *
     * [type`Clutter`.LayoutMeta] is a wrapper object created by
     * [class`LayoutManager]` implementations in order to store child-specific data
     * and properties.
     *
     * A [type`Clutter`.LayoutMeta] wraps a [class`Actor]` inside a container
     * [class`Actor]` using a [class`LayoutManager]`.
     */
    abstract class LayoutMeta extends GObject.Object {
        static $gtype: GObject.GType<LayoutMeta>;

        // Properties

        /**
         * The [type`Clutter`.Actor] being wrapped by this [type`Clutter`.LayoutMeta]
         */
        get actor(): Actor;
        /**
         * The [type`Clutter`.Actor] containing [property`Clutter`.LayoutMeta:actor]
         */
        get container(): Actor;
        /**
         * The [class`LayoutManager]` that created this [type`Clutter`.LayoutMeta].
         */
        get manager(): LayoutManager;

        // Constructors

        constructor(properties?: Partial<LayoutMeta.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Methods

        /**
         * Retrieves the actor wrapped by `data`
         * @returns a [type@Clutter.Actor]
         */
        get_actor(): Actor;
        /**
         * Retrieves the container using `data`
         * @returns a [type@Clutter.Actor]
         */
        get_container(): Actor;
        /**
         * Retrieves the actor wrapped by `data`
         * @returns a [type@Clutter.LayoutManager]
         */
        get_manager(): LayoutManager;
        is_for(manager: LayoutManager, container: Actor, actor: Actor): boolean;
    }

    module OffscreenEffect {
        // Constructor properties interface

        interface ConstructorProps extends Effect.ConstructorProps {}
    }

    /**
     * Base class for effects using offscreen buffers
     *
     * #ClutterOffscreenEffect is an abstract class that can be used by
     * [class`Effect]` sub-classes requiring access to an offscreen buffer.
     *
     * Some effects, like the fragment shader based effects, can only use GL
     * textures, and in order to apply those effects to any kind of actor they
     * require that all drawing operations are applied to an offscreen framebuffer
     * that gets redirected to a texture.
     *
     * #ClutterOffscreenEffect provides all the heavy-lifting for creating the
     * offscreen framebuffer, the redirection and the final paint of the texture on
     * the desired stage.
     *
     *
     * ## Implementing a ClutterOffscreenEffect
     *
     * Creating a sub-class of #ClutterOffscreenEffect requires, in case
     * of overriding the [class`Effect]` virtual functions, to chain up to the
     * #ClutterOffscreenEffect's implementation.
     *
     * On top of the [class`Effect]`'s virtual functions,
     * #ClutterOffscreenEffect also provides a [vfunc`OffscreenEffect`.paint_target]
     * function, which encapsulates the effective painting of the texture that
     * contains the result of the offscreen redirection.
     *
     * The size of the target pipeline is defined to be as big as the
     * transformed size of the [class`Actor]` using the offscreen effect.
     * Sub-classes of #ClutterOffscreenEffect can change the texture creation
     * code to provide bigger textures by overriding the
     * [vfunc`OffscreenEffect`.create_texture] virtual function; no chain up
     * to the #ClutterOffscreenEffect implementation is required in this
     * case.
     *
     * ## Paint nodes
     *
     * #ClutterOffscreenEffect generates the following paint node tree:
     *
     * ```
     * Effect
     *  ├─────────┐
     * Layer   Pipeline
     *  │
     * Actor
     * ```
     *
     * When the actor contents are cached, the generated paint node tree
     * looks like this:
     *
     * ```
     * Effect
     *  │
     * Pipeline
     * ```
     *
     * In both cases, the "Pipeline" node is created with the return value
     * of [vfunc`OffscreenEffect`.create_pipeline].
     */
    abstract class OffscreenEffect extends Effect {
        static $gtype: GObject.GType<OffscreenEffect>;

        // Constructors

        constructor(properties?: Partial<OffscreenEffect.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Virtual methods

        /**
         * Calls the [vfunc`OffscreenEffect`.create_texture] virtual function of the `effect`
         * @param cogl_context
         * @param width the minimum width of the target texture
         * @param height the minimum height of the target texture
         */
        vfunc_create_texture(cogl_context: Cogl.Context, width: number, height: number): Cogl.Texture;
        /**
         * Calls the [vfunc`OffscreenEffect`.paint_target] virtual function of the `effect`
         * @param node a #ClutterPaintNode
         * @param paint_context a #ClutterPaintContext
         */
        vfunc_paint_target(node: PaintNode, paint_context: PaintContext): void;

        // Methods

        /**
         * Calls the [vfunc`OffscreenEffect`.create_texture] virtual function of the `effect`
         * @param context
         * @param width the minimum width of the target texture
         * @param height the minimum height of the target texture
         * @returns a handle to a Cogl texture, or   %NULL. The returned handle has its reference   count increased.
         */
        create_texture(context: Cogl.Context, width: number, height: number): Cogl.Texture;
        /**
         * Retrieves the pipeline used as a render target for the offscreen
         * buffer created by `effect`
         *
         * You should only use the returned [class`Cogl`.Pipeline] when painting. The
         * returned pipeline might change between different frames.
         * @returns a #CoglPipeline. The   pipeline is owned by Clutter and it should not be modified   or freed
         */
        get_pipeline(): Cogl.Pipeline | null;
        /**
         * Retrieves the size of the offscreen buffer used by `effect` to
         * paint the actor to which it has been applied.
         *
         * This function should only be called by #ClutterOffscreenEffect
         * implementations, from within the [vfunc`OffscreenEffect`.paint_target]
         * virtual function.
         * @returns %TRUE if the offscreen buffer has a valid size,   and %FALSE otherwise
         */
        get_target_size(): [boolean, number, number];
        /**
         * Retrieves the texture used as a render target for the offscreen
         * buffer created by `effect`
         *
         * You should only use the returned texture when painting. The texture
         * may change after [vfunc`Effect`.pre_paint] is called so the effect
         * implementation should update any references to the texture after
         * chaining-up to the parent's pre_paint implementation. This can be
         * used instead of [method`OffscreenEffect`.get_texture] when the
         * effect subclass wants to paint using its own pipeline.
         * @returns a #CoglTexture or %NULL. The   returned texture is owned by Clutter and it should not be   modified or freed
         */
        get_texture(): Cogl.Texture;
        /**
         * Calls the [vfunc`OffscreenEffect`.paint_target] virtual function of the `effect`
         * @param node a #ClutterPaintNode
         * @param paint_context a #ClutterPaintContext
         */
        paint_target(node: PaintNode, paint_context: PaintContext): void;
    }

    module PageTurnEffect {
        // Constructor properties interface

        interface ConstructorProps extends DeformEffect.ConstructorProps {
            angle: number;
            period: number;
            radius: number;
        }
    }

    /**
     * A page turning effect
     *
     * A simple page turning effect
     */
    class PageTurnEffect extends DeformEffect {
        static $gtype: GObject.GType<PageTurnEffect>;

        // Properties

        /**
         * The angle of the page rotation, in degrees, between 0.0 and 360.0
         */
        get angle(): number;
        set angle(val: number);
        /**
         * The period of the page turn, between 0.0 (no curling) and
         * 1.0 (fully curled)
         */
        get period(): number;
        set period(val: number);
        /**
         * The radius of the page curl, in pixels
         */
        get radius(): number;
        set radius(val: number);

        // Constructors

        constructor(properties?: Partial<PageTurnEffect.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](period: number, angle: number, radius: number): PageTurnEffect;

        // Methods

        /**
         * Retrieves the value set using [method`PageTurnEffect`.get_angle]
         * @returns the angle of the page curling
         */
        get_angle(): number;
        /**
         * Retrieves the value set using [method`PageTurnEffect`.get_period]
         * @returns the period of the page curling
         */
        get_period(): number;
        /**
         * Retrieves the value set using [method`PageTurnEffect`.set_radius]
         * @returns the radius of the page curling
         */
        get_radius(): number;
        /**
         * Sets the angle of the page curling, in degrees
         * @param angle the angle of the page curl, in degrees
         */
        set_angle(angle: number): void;
        /**
         * Sets the period of the page curling, between 0.0 (no curling)
         * and 1.0 (fully curled)
         * @param period the period of the page curl, between 0.0 and 1.0
         */
        set_period(period: number): void;
        /**
         * Sets the radius of the page curling
         * @param radius the radius of the page curling, in pixels
         */
        set_radius(radius: number): void;
    }

    /**
     * Paint objects
     *
     * #ClutterPaintNode is an element in the render graph.
     *
     * The render graph contains all the elements that need to be painted by
     * Clutter when submitting a frame to the graphics system.
     *
     * The render graph is distinct from the scene graph: the scene graph is
     * composed by actors, which can be visible or invisible; the scene graph
     * elements also respond to events. The render graph, instead, is only
     * composed by nodes that will be painted.
     *
     * Each #ClutterActor can submit multiple `ClutterPaintNode`s to
     * the render graph.
     */
    abstract class PaintNode {
        static $gtype: GObject.GType<PaintNode>;

        // Constructors

        _init(...args: any[]): void;

        // Methods

        /**
         * Adds `child` to the list of children of `node`.
         *
         * This function will acquire a reference on `child`.
         * @param child the child #ClutterPaintNode to add
         */
        add_child(child: PaintNode): void;
        /**
         * Adds a rectangle region to the `node,` with multitexture coordinates.
         * @param rect a #ClutterActorBox
         * @param text_coords array of multitexture values
         * @param text_coords_len number of items of @text_coords
         */
        add_multitexture_rectangle(rect: ActorBox, text_coords: number, text_coords_len: number): void;
        /**
         * Adds a rectangle region to the `node,` as described by the
         * passed `rect`.
         * @param rect a #ClutterActorBox
         */
        add_rectangle(rect: ActorBox): void;
        /**
         * Adds a series of rectangles to `node`.
         *
         * As a general rule for better performance its recommended to use this API
         * instead of calling clutter_paint_node_add_rectangle() separately for
         * multiple rectangles if all of the rectangles will be drawn together.
         *
         * See cogl_framebuffer_draw_rectangles().
         * @param coords array of   coordinates containing groups of 4 float values: [x_1, y_1, x_2, y_2] that   are interpreted as two position coordinates; one for the top left of the   rectangle (x1, y1), and one for the bottom right of the rectangle   (x2, y2).
         */
        add_rectangles(coords: number[]): void;
        /**
         * Adds a rectangle region to the `node,` with texture coordinates.
         * @param rect a #ClutterActorBox
         * @param x_1 the left X coordinate of the texture
         * @param y_1 the top Y coordinate of the texture
         * @param x_2 the right X coordinate of the texture
         * @param y_2 the bottom Y coordinate of the texture
         */
        add_texture_rectangle(rect: ActorBox, x_1: number, y_1: number, x_2: number, y_2: number): void;
        /**
         * Adds a series of rectangles to `node`.
         *
         * The given texture coordinates should always be normalized such that
         * (0, 0) corresponds to the top left and (1, 1) corresponds to the
         * bottom right. To map an entire texture across the rectangle pass
         * in s_1=0, t_1=0, s_2=1, t_2=1.
         *
         * See cogl_framebuffer_draw_textured_rectangles().
         * @param coords array containing   groups of 8 float values: [x_1, y_1, x_2, y_2, s_1, t_1, s_2, t_2]   that have the same meaning as the arguments for   cogl_framebuffer_draw_textured_rectangle().
         */
        add_texture_rectangles(coords: number[]): void;
        /**
         * Retrieves the #CoglFramebuffer that `node` will draw
         * into. If `node` doesn't specify a custom framebuffer,
         * the first ancestor with a custom framebuffer will be
         * used.
         * @returns a #CoglFramebuffer or %NULL if no custom one is set.
         */
        get_framebuffer(): Cogl.Framebuffer;
        /**
         * Paints the `node` using the class implementation, traversing
         * its children, if any.
         * @param paint_context
         */
        paint(paint_context: PaintContext): void;
        /**
         * Acquires a reference on `node`.
         * @returns the #ClutterPaintNode
         */
        ref(): PaintNode;
        /**
         * Sets a user-readable `name` for `node`.
         *
         * The `name` will be used for debugging purposes.
         *
         * The `node` will intern `name` using g_intern_string(). If you have access to a
         * static string, use clutter_paint_node_set_static_name() instead.
         * @param name a string annotating the @node
         */
        set_name(name: string): void;
        /**
         * Releases a reference on `node`.
         */
        unref(): void;
    }

    module PanAction {
        // Signal callback interfaces

        interface Pan {
            (actor: Actor, is_interpolated: boolean): boolean;
        }

        interface PanStopped {
            (actor: Actor): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GestureAction.ConstructorProps {
            acceleration_factor: number;
            accelerationFactor: number;
            deceleration: number;
            interpolate: boolean;
            pan_axis: PanAxis;
            panAxis: PanAxis;
        }
    }

    /**
     * Action for pan gestures
     *
     * #ClutterPanAction is a sub-class of [class`GestureAction]` that implements
     * the logic for recognizing pan gestures.
     *
     * The simplest usage of #ClutterPanAction consists in adding it to
     * a [class`Actor]` with a child and setting it as reactive; for instance,
     * the following code:
     *
     * ```c
     *   clutter_actor_add_action (actor, clutter_pan_action_new ());
     *   clutter_actor_set_reactive (actor, TRUE);
     * ```
     *
     * will automatically result in the actor children to be moved
     * when dragging.
     */
    class PanAction extends GestureAction {
        static $gtype: GObject.GType<PanAction>;

        // Properties

        /**
         * The initial acceleration factor
         *
         * The kinetic momentum measured at the time of releasing the pointer will
         * be multiplied by the factor specified by this property before being used
         * to generate interpolated ::pan events.
         */
        get acceleration_factor(): number;
        set acceleration_factor(val: number);
        /**
         * The initial acceleration factor
         *
         * The kinetic momentum measured at the time of releasing the pointer will
         * be multiplied by the factor specified by this property before being used
         * to generate interpolated ::pan events.
         */
        get accelerationFactor(): number;
        set accelerationFactor(val: number);
        /**
         * The rate at which the interpolated panning will decelerate in
         *
         * #ClutterPanAction will emit interpolated ::pan events with decreasing
         * scroll deltas, using the rate specified by this property.
         */
        get deceleration(): number;
        set deceleration(val: number);
        /**
         * Whether interpolated events emission is enabled.
         */
        get interpolate(): boolean;
        set interpolate(val: boolean);
        /**
         * Constraints the panning action to the specified axis
         */
        get pan_axis(): PanAxis;
        set pan_axis(val: PanAxis);
        /**
         * Constraints the panning action to the specified axis
         */
        get panAxis(): PanAxis;
        set panAxis(val: PanAxis);

        // Constructors

        constructor(properties?: Partial<PanAction.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): PanAction;

        // Signals

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'pan', callback: (_source: this, actor: Actor, is_interpolated: boolean) => boolean): number;
        connect_after(
            signal: 'pan',
            callback: (_source: this, actor: Actor, is_interpolated: boolean) => boolean,
        ): number;
        emit(signal: 'pan', actor: Actor, is_interpolated: boolean): void;
        connect(signal: 'pan-stopped', callback: (_source: this, actor: Actor) => void): number;
        connect_after(signal: 'pan-stopped', callback: (_source: this, actor: Actor) => void): number;
        emit(signal: 'pan-stopped', actor: Actor): void;

        // Virtual methods

        /**
         * class handler for the #ClutterPanAction::pan-stopped signal
         * @param actor
         */
        vfunc_pan_stopped(actor: Actor): void;

        // Methods

        /**
         * Retrieves the initial acceleration factor for interpolated ::pan events.
         * @returns The initial acceleration factor for interpolated events.
         */
        get_acceleration_factor(): number;
        /**
         * Retrieves the delta, in stage space, dependent on the current state
         * of the #ClutterPanAction, and respecting the constraint specified by the
         * [property`PanAction:`pan-axis] property.
         * @param point the touch point index, with 0 being the first touch   point received by the action
         * @returns the distance since last motion event4
         */
        get_constrained_motion_delta(point: number): [number, number, number];
        /**
         * Retrieves the deceleration rate of interpolated ::pan events.
         * @returns The deceleration rate of the interpolated events.
         */
        get_deceleration(): number;
        /**
         * Checks if the action should emit ::pan events even after releasing
         * the pointer during a panning gesture, to emulate some kind of
         * kinetic inertia.
         * @returns %TRUE if interpolated events emission is active.
         */
        get_interpolate(): boolean;
        /**
         * Retrieves the coordinates, in stage space, of the latest interpolated
         * event, analogous to [method`GestureAction`.get_motion_coords].
         */
        get_interpolated_coords(): [number, number];
        /**
         * Retrieves the delta, in stage space, since the latest interpolated
         * event, analogous to [method`GestureAction`.get_motion_delta].
         * @returns the distance since the latest interpolated event
         */
        get_interpolated_delta(): [number, number, number];
        /**
         * Retrieves the coordinates, in stage space, dependent on the current state
         * of the #ClutterPanAction. If it is inactive, both fields will be
         * set to 0. If it is panning by user action, the values will be equivalent
         * to those returned by [method`GestureAction`.get_motion_coords].
         * If it is interpolating with some form of kinetic scrolling, the values
         * will be equivalent to those returned by
         * [method`PanAction`.get_interpolated_coords]. This is a convenience
         * method designed to be used in replacement "pan" signal handlers.
         * @param point the touch point index, with 0 being the first touch   point received by the action
         */
        get_motion_coords(point: number): [number, number];
        /**
         * Retrieves the delta, in stage space, dependent on the current state
         * of the #ClutterPanAction. If it is inactive, both fields will be
         * set to 0. If it is panning by user action, the values will be equivalent
         * to those returned by [method`GestureAction`.get_motion_delta].
         * If it is interpolating with some form of kinetic scrolling, the values
         * will be equivalent to those returned by
         * [method`PanAction`.get_interpolated_delta]. This is a convenience
         * method designed to be used in replacement "pan" signal handlers.
         * @param point the touch point index, with 0 being the first touch   point received by the action
         */
        get_motion_delta(point: number): [number, number, number];
        /**
         * Retrieves the axis constraint set by [method`PanAction`.set_pan_axis]
         * @returns the axis constraint
         */
        get_pan_axis(): PanAxis;
        /**
         * Factor applied to the momentum velocity at the time of releasing the
         * pointer when generating interpolated ::pan events.
         * @param factor The acceleration factor
         */
        set_acceleration_factor(factor: number): void;
        /**
         * Sets the deceleration rate of the interpolated ::pan events generated
         * after a pan gesture. This is approximately the value that the momentum
         * at the time of releasing the pointer is divided by every 60th of a second.
         * @param rate The deceleration rate
         */
        set_deceleration(rate: number): void;
        /**
         * Sets whether the action should emit interpolated ::pan events
         * after the drag has ended, to emulate the gesture kinetic inertia.
         * @param should_interpolate whether to enable interpolated pan events
         */
        set_interpolate(should_interpolate: boolean): void;
        /**
         * Restricts the panning action to a specific axis
         * @param axis the axis to constraint the panning to
         */
        set_pan_axis(axis: PanAxis | null): void;
    }

    module PipelineCache {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    class PipelineCache extends GObject.Object {
        static $gtype: GObject.GType<PipelineCache>;

        // Constructors

        constructor(properties?: Partial<PipelineCache.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Methods

        set_pipeline(
            group: PipelineGroup,
            slot: number,
            source_color_state: ColorState,
            target_color_state: ColorState,
            pipeline: Cogl.Pipeline,
        ): void;
        unset_all_pipelines(group: PipelineGroup): void;
    }

    class PipelineNode extends PaintNode {
        static $gtype: GObject.GType<PipelineNode>;

        // Constructors

        _init(...args: any[]): void;

        static ['new'](pipeline?: Cogl.Pipeline | null): PipelineNode;
    }

    module PropertyTransition {
        // Constructor properties interface

        interface ConstructorProps extends Transition.ConstructorProps {
            property_name: string;
            propertyName: string;
        }
    }

    /**
     * Property transitions
     *
     * #ClutterPropertyTransition is a specialized [class`Transition]` that
     * can be used to tween a property of a [iface`Animatable]` instance.
     */
    class PropertyTransition extends Transition {
        static $gtype: GObject.GType<PropertyTransition>;

        // Properties

        /**
         * The name of the property of a [iface`Animatable]` to animate.
         */
        get property_name(): string;
        set property_name(val: string);
        /**
         * The name of the property of a [iface`Animatable]` to animate.
         */
        get propertyName(): string;
        set propertyName(val: string);

        // Constructors

        constructor(properties?: Partial<PropertyTransition.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](property_name?: string | null): PropertyTransition;

        static new_for_actor(actor: Actor, property_name?: string | null): PropertyTransition;
        // Conflicted with Clutter.Timeline.new_for_actor

        static new_for_actor(...args: never[]): any;

        // Methods

        /**
         * Retrieves the value of the [property`PropertyTransition:`property-name]
         * property.
         * @returns the name of the property being animated, or %NULL if   none is set. The returned string is owned by the @transition and   it should not be freed.
         */
        get_property_name(): string;
        /**
         * Sets the [property`PropertyTransition:`property-name] property of `transition`.
         * @param property_name a property name
         */
        set_property_name(property_name?: string | null): void;
    }

    class RootNode extends PaintNode {
        static $gtype: GObject.GType<RootNode>;

        // Constructors

        _init(...args: any[]): void;

        static ['new'](framebuffer: Cogl.Framebuffer, clear_color: Cogl.Color, clear_flags: Cogl.BufferBit): RootNode;
    }

    module RotateAction {
        // Signal callback interfaces

        interface Rotate {
            (actor: Actor, angle: number): boolean;
        }

        // Constructor properties interface

        interface ConstructorProps extends GestureAction.ConstructorProps {}
    }

    /**
     * Action to rotate an actor
     *
     * #ClutterRotateAction is a sub-class of [class`GestureAction]` that implements
     * the logic for recognizing rotate gestures using two touch points.
     */
    class RotateAction extends GestureAction {
        static $gtype: GObject.GType<RotateAction>;

        // Constructors

        constructor(properties?: Partial<RotateAction.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): RotateAction;

        // Signals

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'rotate', callback: (_source: this, actor: Actor, angle: number) => boolean): number;
        connect_after(signal: 'rotate', callback: (_source: this, actor: Actor, angle: number) => boolean): number;
        emit(signal: 'rotate', actor: Actor, angle: number): void;
    }

    module Seat {
        // Signal callback interfaces

        interface DeviceAdded {
            (object: InputDevice): void;
        }

        interface DeviceRemoved {
            (object: InputDevice): void;
        }

        interface IsUnfocusInhibitedChanged {
            (): void;
        }

        interface KbdA11yFlagsChanged {
            (settings_flags: number, changed_mask: number): void;
        }

        interface KbdA11yModsStateChanged {
            (latched_mask: number, locked_mask: number): void;
        }

        interface PtrA11yDwellClickTypeChanged {
            (click_type: PointerA11yDwellClickType): void;
        }

        interface PtrA11yTimeoutStarted {
            (device: InputDevice, timeout_type: PointerA11yTimeoutType, delay: number): void;
        }

        interface PtrA11yTimeoutStopped {
            (device: InputDevice, timeout_type: PointerA11yTimeoutType, clicked: boolean): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            context: Context;
            name: string;
            touch_mode: boolean;
            touchMode: boolean;
        }
    }

    abstract class Seat extends GObject.Object {
        static $gtype: GObject.GType<Seat>;

        // Properties

        get context(): Context;
        get name(): string;
        /**
         * The current touch-mode of the #ClutterSeat, it is set to %TRUE if the
         * requirements documented in [method`Seat`.get_touch_mode] are fulfilled.
         */
        get touch_mode(): boolean;
        /**
         * The current touch-mode of the #ClutterSeat, it is set to %TRUE if the
         * requirements documented in [method`Seat`.get_touch_mode] are fulfilled.
         */
        get touchMode(): boolean;

        // Constructors

        constructor(properties?: Partial<Seat.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'device-added', callback: (_source: this, object: InputDevice) => void): number;
        connect_after(signal: 'device-added', callback: (_source: this, object: InputDevice) => void): number;
        emit(signal: 'device-added', object: InputDevice): void;
        connect(signal: 'device-removed', callback: (_source: this, object: InputDevice) => void): number;
        connect_after(signal: 'device-removed', callback: (_source: this, object: InputDevice) => void): number;
        emit(signal: 'device-removed', object: InputDevice): void;
        connect(signal: 'is-unfocus-inhibited-changed', callback: (_source: this) => void): number;
        connect_after(signal: 'is-unfocus-inhibited-changed', callback: (_source: this) => void): number;
        emit(signal: 'is-unfocus-inhibited-changed'): void;
        connect(
            signal: 'kbd-a11y-flags-changed',
            callback: (_source: this, settings_flags: number, changed_mask: number) => void,
        ): number;
        connect_after(
            signal: 'kbd-a11y-flags-changed',
            callback: (_source: this, settings_flags: number, changed_mask: number) => void,
        ): number;
        emit(signal: 'kbd-a11y-flags-changed', settings_flags: number, changed_mask: number): void;
        connect(
            signal: 'kbd-a11y-mods-state-changed',
            callback: (_source: this, latched_mask: number, locked_mask: number) => void,
        ): number;
        connect_after(
            signal: 'kbd-a11y-mods-state-changed',
            callback: (_source: this, latched_mask: number, locked_mask: number) => void,
        ): number;
        emit(signal: 'kbd-a11y-mods-state-changed', latched_mask: number, locked_mask: number): void;
        connect(
            signal: 'ptr-a11y-dwell-click-type-changed',
            callback: (_source: this, click_type: PointerA11yDwellClickType) => void,
        ): number;
        connect_after(
            signal: 'ptr-a11y-dwell-click-type-changed',
            callback: (_source: this, click_type: PointerA11yDwellClickType) => void,
        ): number;
        emit(signal: 'ptr-a11y-dwell-click-type-changed', click_type: PointerA11yDwellClickType): void;
        connect(
            signal: 'ptr-a11y-timeout-started',
            callback: (_source: this, device: InputDevice, timeout_type: PointerA11yTimeoutType, delay: number) => void,
        ): number;
        connect_after(
            signal: 'ptr-a11y-timeout-started',
            callback: (_source: this, device: InputDevice, timeout_type: PointerA11yTimeoutType, delay: number) => void,
        ): number;
        emit(
            signal: 'ptr-a11y-timeout-started',
            device: InputDevice,
            timeout_type: PointerA11yTimeoutType,
            delay: number,
        ): void;
        connect(
            signal: 'ptr-a11y-timeout-stopped',
            callback: (
                _source: this,
                device: InputDevice,
                timeout_type: PointerA11yTimeoutType,
                clicked: boolean,
            ) => void,
        ): number;
        connect_after(
            signal: 'ptr-a11y-timeout-stopped',
            callback: (
                _source: this,
                device: InputDevice,
                timeout_type: PointerA11yTimeoutType,
                clicked: boolean,
            ) => void,
        ): number;
        emit(
            signal: 'ptr-a11y-timeout-stopped',
            device: InputDevice,
            timeout_type: PointerA11yTimeoutType,
            clicked: boolean,
        ): void;

        // Virtual methods

        vfunc_bell_notify(): void;
        /**
         * Creates a virtual input device.
         * @param device_type the type of the virtual device
         */
        vfunc_create_virtual_device(device_type: InputDeviceType): VirtualInputDevice;
        /**
         * Returns the logical keyboard
         */
        vfunc_get_keyboard(): InputDevice;
        /**
         * Returns the seat keymap
         */
        vfunc_get_keymap(): Keymap;
        /**
         * Returns the logical pointer
         */
        vfunc_get_pointer(): InputDevice;
        vfunc_grab(time: number): GrabState;
        vfunc_handle_event_post(event: Event): boolean;
        vfunc_init_pointer_position(x: number, y: number): void;
        vfunc_query_state(
            device: InputDevice,
            sequence?: EventSequence | null,
        ): [boolean, Graphene.Point | null, ModifierType | null];
        vfunc_ungrab(time: number): void;
        vfunc_warp_pointer(x: number, y: number): void;

        // Methods

        bell_notify(): void;
        /**
         * Creates a virtual input device.
         * @param device_type the type of the virtual device
         * @returns a newly created virtual device
         */
        create_virtual_device(device_type: InputDeviceType | null): VirtualInputDevice;
        ensure_a11y_state(): void;
        get_context(): Context;
        /**
         * Returns the logical keyboard
         * @returns the logical keyboard
         */
        get_keyboard(): InputDevice;
        /**
         * Returns the seat keymap
         * @returns the seat keymap
         */
        get_keymap(): Keymap;
        get_name(): string;
        /**
         * Returns the logical pointer
         * @returns the logical pointer
         */
        get_pointer(): InputDevice;
        /**
         * Gets the current pointer accessibility settings
         * @param settings a pointer to a #ClutterPointerA11ySettings
         */
        get_pointer_a11y_settings(settings: PointerA11ySettings): void;
        /**
         * Gets the current touch-mode state of the #ClutterSeat `seat`.
         * The [property`Seat:`touch-mode] property is set to %TRUE if the following
         * requirements are fulfilled:
         *
         *  - A touchscreen is available
         *  - A tablet mode switch, if present, is enabled
         * @returns %TRUE if the device is a tablet that doesn't have an external   keyboard attached, %FALSE otherwise.
         */
        get_touch_mode(): boolean;
        handle_event_post(event: Event): boolean;
        /**
         * Inhibits unsetting of the pointer focus-surface for the #ClutterSeat `seat,`
         * this allows to keep using the pointer even when it's hidden.
         *
         * This property is refcounted, so [method`Seat`.uninhibit_unfocus] must be
         * called the exact same number of times as [method`Seat`.inhibit_unfocus]
         * was called before.
         */
        inhibit_unfocus(): void;
        /**
         * Gets whether unsetting of the pointer focus-surface is inhibited
         * for the #ClutterSeat `seat`.
         * @returns %TRUE if unsetting is inhibited, %FALSE otherwise
         */
        is_unfocus_inhibited(): boolean;
        /**
         * Returns the list of HW devices
         * @returns A list   of #ClutterInputDevice. The elements of the returned list are owned by   Clutter and may not be freed, the returned list should be freed using   g_list_free() when done.
         */
        list_devices(): InputDevice[];
        query_state(
            device: InputDevice,
            sequence?: EventSequence | null,
        ): [boolean, Graphene.Point | null, ModifierType | null];
        /**
         * Sets the dwell click type
         * @param click_type type of click as #ClutterPointerA11yDwellClickType
         */
        set_pointer_a11y_dwell_click_type(click_type: PointerA11yDwellClickType | null): void;
        /**
         * Sets the pointer accessibility settings
         * @param settings a pointer to a #ClutterPointerA11ySettings
         */
        set_pointer_a11y_settings(settings: PointerA11ySettings): void;
        /**
         * Disables the inhibiting of unsetting of the pointer focus-surface
         * previously enabled by calling [method`Seat`.inhibit_unfocus].
         *
         * This property is refcounted, so [method`Seat`.uninhibit_unfocus] must be
         * called the exact same number of times as [method`Seat`.inhibit_unfocus]
         * was called before.
         */
        uninhibit_unfocus(): void;
        warp_pointer(x: number, y: number): void;
    }

    module Settings {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            dnd_drag_threshold: number;
            dndDragThreshold: number;
            double_click_distance: number;
            doubleClickDistance: number;
            double_click_time: number;
            doubleClickTime: number;
            font_antialias: number;
            fontAntialias: number;
            font_dpi: number;
            fontDpi: number;
            font_hint_style: string;
            fontHintStyle: string;
            font_hinting: number;
            fontHinting: number;
            font_name: string;
            fontName: string;
            font_subpixel_order: string;
            fontSubpixelOrder: string;
            long_press_duration: number;
            longPressDuration: number;
            password_hint_time: number;
            passwordHintTime: number;
            unscaled_font_dpi: number;
            unscaledFontDpi: number;
        }
    }

    /**
     * Settings configuration
     *
     * Clutter depends on some settings to perform operations like detecting
     * multiple button press events, or font options to render text.
     *
     * Usually, Clutter will strive to use the platform's settings in order
     * to be as much integrated as possible. It is, however, possible to
     * change these settings on a per-application basis, by using the
     * #ClutterSettings singleton object and setting its properties. It is
     * also possible, for toolkit developers, to retrieve the settings from
     * the #ClutterSettings properties when implementing new UI elements,
     * for instance the default font name.
     */
    class Settings extends GObject.Object {
        static $gtype: GObject.GType<Settings>;

        // Properties

        /**
         * The default distance that the cursor of a pointer device
         * should travel before a drag operation should start.
         */
        get dnd_drag_threshold(): number;
        set dnd_drag_threshold(val: number);
        /**
         * The default distance that the cursor of a pointer device
         * should travel before a drag operation should start.
         */
        get dndDragThreshold(): number;
        set dndDragThreshold(val: number);
        /**
         * The maximum distance, in pixels, between button-press events that
         * determines whether or not to increase the click count by 1.
         */
        get double_click_distance(): number;
        set double_click_distance(val: number);
        /**
         * The maximum distance, in pixels, between button-press events that
         * determines whether or not to increase the click count by 1.
         */
        get doubleClickDistance(): number;
        set doubleClickDistance(val: number);
        /**
         * The time, in milliseconds, that should elapse between button-press
         * events in order to increase the click count by 1.
         */
        get double_click_time(): number;
        set double_click_time(val: number);
        /**
         * The time, in milliseconds, that should elapse between button-press
         * events in order to increase the click count by 1.
         */
        get doubleClickTime(): number;
        set doubleClickTime(val: number);
        /**
         * Whether or not to use antialiasing when rendering text; a value
         * of 1 enables it unconditionally; a value of 0 disables it
         * unconditionally; and -1 will use the system's default.
         */
        get font_antialias(): number;
        set font_antialias(val: number);
        /**
         * Whether or not to use antialiasing when rendering text; a value
         * of 1 enables it unconditionally; a value of 0 disables it
         * unconditionally; and -1 will use the system's default.
         */
        get fontAntialias(): number;
        set fontAntialias(val: number);
        /**
         * The DPI used when rendering text, as a value of 1024 * dots/inch.
         *
         * If set to -1, the system's default will be used instead
         */
        get font_dpi(): number;
        set font_dpi(val: number);
        /**
         * The DPI used when rendering text, as a value of 1024 * dots/inch.
         *
         * If set to -1, the system's default will be used instead
         */
        get fontDpi(): number;
        set fontDpi(val: number);
        /**
         * The style of the hinting used when rendering text. Valid values
         * are:
         *
         *   - hintnone
         *   - hintslight
         *   - hintmedium
         *   - hintfull
         */
        get font_hint_style(): string;
        set font_hint_style(val: string);
        /**
         * The style of the hinting used when rendering text. Valid values
         * are:
         *
         *   - hintnone
         *   - hintslight
         *   - hintmedium
         *   - hintfull
         */
        get fontHintStyle(): string;
        set fontHintStyle(val: string);
        /**
         * Whether or not to use hinting when rendering text; a value of 1
         * unconditionally enables it; a value of 0 unconditionally disables
         * it; and a value of -1 will use the system's default.
         */
        get font_hinting(): number;
        set font_hinting(val: number);
        /**
         * Whether or not to use hinting when rendering text; a value of 1
         * unconditionally enables it; a value of 0 unconditionally disables
         * it; and a value of -1 will use the system's default.
         */
        get fontHinting(): number;
        set fontHinting(val: number);
        /**
         * The default font name that should be used by text actors, as
         * a string that can be passed to [func`Pango`.FontDescription.from_string].
         */
        get font_name(): string;
        set font_name(val: string);
        /**
         * The default font name that should be used by text actors, as
         * a string that can be passed to [func`Pango`.FontDescription.from_string].
         */
        get fontName(): string;
        set fontName(val: string);
        /**
         * The type of sub-pixel antialiasing used when rendering text. Valid
         * values are:
         *
         *   - none
         *   - rgb
         *   - bgr
         *   - vrgb
         *   - vbgr
         */
        get font_subpixel_order(): string;
        set font_subpixel_order(val: string);
        /**
         * The type of sub-pixel antialiasing used when rendering text. Valid
         * values are:
         *
         *   - none
         *   - rgb
         *   - bgr
         *   - vrgb
         *   - vbgr
         */
        get fontSubpixelOrder(): string;
        set fontSubpixelOrder(val: string);
        /**
         * Sets the minimum duration for a press to be recognized as a long press
         * gesture. The duration is expressed in milliseconds.
         *
         * See also [property`ClickAction:`long-press-duration].
         */
        get long_press_duration(): number;
        set long_press_duration(val: number);
        /**
         * Sets the minimum duration for a press to be recognized as a long press
         * gesture. The duration is expressed in milliseconds.
         *
         * See also [property`ClickAction:`long-press-duration].
         */
        get longPressDuration(): number;
        set longPressDuration(val: number);
        get password_hint_time(): number;
        set password_hint_time(val: number);
        get passwordHintTime(): number;
        set passwordHintTime(val: number);
        set unscaled_font_dpi(val: number);
        set unscaledFontDpi(val: number);

        // Constructors

        constructor(properties?: Partial<Settings.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Static methods

        /**
         * Retrieves the singleton instance of #ClutterSettings
         */
        static get_default(): Settings;
    }

    module ShaderEffect {
        // Constructor properties interface

        interface ConstructorProps extends OffscreenEffect.ConstructorProps {
            shader_type: ShaderType;
            shaderType: ShaderType;
        }
    }

    /**
     * Base class for shader effects
     *
     * #ClutterShaderEffect is a class that implements all the plumbing for
     * creating [class`Effect]`s using GLSL shaders.
     *
     * #ClutterShaderEffect creates an offscreen buffer and then applies the
     * GLSL shader (after checking whether the compilation and linking were
     * successful) to the buffer before painting it on screen.
     *
     *
     * ## Implementing a ClutterShaderEffect
     *
     * Creating a sub-class of #ClutterShaderEffect requires the
     * overriding of the [vfunc`OffscreenEffect`.paint_target] virtual
     * function from the [class`OffscreenEffect]` class. It is also convenient
     * to implement the [vfunc`ShaderEffect`.get_static_shader_source]
     * virtual function in case you are planning to create more than one
     * instance of the effect.
     *
     * The [vfunc`ShaderEffect`.get_static_shader_source]
     * function should return a copy of the shader source to use. This
     * function is only called once per subclass of #ClutterShaderEffect
     * regardless of how many instances of the effect are created. The
     * source for the shader is typically stored in a static const
     * string which is returned from this function via
     * g_strdup().
     *
     * The [vfunc`OffscreenEffect`.paint_target] should set the
     * shader's uniforms if any. This is done by calling
     * [method`ShaderEffect`.set_uniform_value] or
     * [method`ShaderEffect`.set_uniform]. The sub-class should then
     * chain up to the #ClutterShaderEffect implementation.
     *
     * ## Setting uniforms on a ClutterShaderEffect
     *
     * The example below shows a typical implementation of the
     * [vfunc`ShaderEffect`.get_static_shader_source] and
     * [vfunc`OffscreenEffect`.paint_target] virtual functions
     * for a #ClutterShaderEffect subclass.
     *
     * ```c
     *  static gchar *
     *  my_effect_get_static_shader_source (ClutterShaderEffect *effect)
     *  {
     *    // shader_source is set elsewhere
     *    return g_strdup (shader_source);
     *  }
     *
     *  static gboolean
     *  my_effect_paint_target (ClutterOffscreenEffect *effect)
     *  {
     *    MyEffect *self = MY_EFFECT (effect);
     *    ClutterShaderEffect *shader = CLUTTER_SHADER_EFFECT (effect);
     *    ClutterEffectClass *parent_class;
     *    gfloat component_r, component_g, component_b;
     *
     *    // the "tex" uniform is declared in the shader as:
     *    //
     *    //   uniform int tex;
     *    //
     *    // and it is passed a constant value of 0
     *    clutter_shader_effect_set_uniform (shader, "tex", G_TYPE_INT, 1, 0);
     *
     *    // the "component" uniform is declared in the shader as:
     *    //
     *    //   uniform vec3 component;
     *    //
     *    // and it's defined to contain the normalized components
     *    // of a #CoglColor
     *    component_r = self->color.red   / 255.0f;
     *    component_g = self->color.green / 255.0f;
     *    component_b = self->color.blue  / 255.0f;
     *    clutter_shader_effect_set_uniform (shader, "component",
     *                                       G_TYPE_FLOAT, 3,
     *                                       component_r,
     *                                       component_g,
     *                                       component_b);
     *
     *    // chain up to the parent's implementation
     *    parent_class = CLUTTER_OFFSCREEN_EFFECT_CLASS (my_effect_parent_class);
     *    return parent_class->paint_target (effect);
     *  }
     * ```
     */
    class ShaderEffect extends OffscreenEffect {
        static $gtype: GObject.GType<ShaderEffect>;

        // Properties

        /**
         * The type of shader that is used by the effect. This property
         * should be set by the constructor of #ClutterShaderEffect
         * sub-classes.
         */
        set shader_type(val: ShaderType);
        /**
         * The type of shader that is used by the effect. This property
         * should be set by the constructor of #ClutterShaderEffect
         * sub-classes.
         */
        set shaderType(val: ShaderType);

        // Constructors

        constructor(properties?: Partial<ShaderEffect.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](shader_type: ShaderType): ShaderEffect;

        // Virtual methods

        /**
         * Returns the GLSL source code to use for
         *  instances of this shader effect. Note that this function is only
         *  called once per subclass of #ClutterShaderEffect regardless of how
         *  many instances are used. It is expected that subclasses will return
         *  a copy of a static string from this function.
         */
        vfunc_get_static_shader_source(): string;

        // Methods

        /**
         * Retrieves a pointer to the program's handle
         * @returns a pointer to the program's handle,   or %NULL
         */
        get_program(): Cogl.Program;
        /**
         * Retrieves a pointer to the shader's handle
         * @returns a pointer to the shader's handle,   or %NULL
         */
        get_shader(): Cogl.Shader;
        /**
         * Sets the source of the GLSL shader used by `effect`
         *
         * This function should only be called by implementations of
         * the #ClutterShaderEffect class, and not by application code.
         *
         * This function can only be called once; subsequent calls will
         * yield no result.
         * @param source the source of a GLSL shader
         * @returns %TRUE if the source was set
         */
        set_shader_source(source: string): boolean;
        /**
         * Sets `value` as the payload for the uniform `name` inside the shader
         * effect
         *
         * The #GType of the `value` must be one of: %G_TYPE_INT, for a single
         * integer value; %G_TYPE_FLOAT, for a single floating point value;
         * %CLUTTER_TYPE_SHADER_INT, for an array of integer values;
         * %CLUTTER_TYPE_SHADER_FLOAT, for an array of floating point values;
         * and %CLUTTER_TYPE_SHADER_MATRIX, for a matrix of floating point
         * values. It also accepts %G_TYPE_DOUBLE for compatibility with other
         * languages than C.
         * @param name the name of the uniform to set
         * @param value a #GValue with the value of the uniform to set
         */
        set_uniform_value(name: string, value: GObject.Value | any): void;
    }

    class ShaderFloat {
        static $gtype: GObject.GType<ShaderFloat>;

        // Constructors

        _init(...args: any[]): void;
    }

    class ShaderInt {
        static $gtype: GObject.GType<ShaderInt>;

        // Constructors

        _init(...args: any[]): void;
    }

    class ShaderMatrix {
        static $gtype: GObject.GType<ShaderMatrix>;

        // Constructors

        _init(...args: any[]): void;
    }

    module SnapConstraint {
        // Constructor properties interface

        interface ConstructorProps extends Constraint.ConstructorProps {
            from_edge: SnapEdge;
            fromEdge: SnapEdge;
            offset: number;
            source: Actor;
            to_edge: SnapEdge;
            toEdge: SnapEdge;
        }
    }

    /**
     * A constraint snapping two actors together
     *
     * #ClutterSnapConstraint is a constraint the snaps the edges of two
     * actors together, expanding the actor's allocation if necessary.
     *
     * An offset can be applied to the constraint, to provide spacing.
     */
    class SnapConstraint extends Constraint {
        static $gtype: GObject.GType<SnapConstraint>;

        // Properties

        /**
         * The edge of the [class`Actor]` that should be snapped
         */
        get from_edge(): SnapEdge;
        set from_edge(val: SnapEdge);
        /**
         * The edge of the [class`Actor]` that should be snapped
         */
        get fromEdge(): SnapEdge;
        set fromEdge(val: SnapEdge);
        /**
         * The offset, in pixels, between [property`SnapConstraint:`from-edge]
         * and [property`SnapConstraint:`to-edge]
         */
        get offset(): number;
        set offset(val: number);
        /**
         * The [class`Actor]` used as the source for the constraint
         */
        get source(): Actor;
        set source(val: Actor);
        /**
         * The edge of the [property`SnapConstraint:`source] that should be snapped
         */
        get to_edge(): SnapEdge;
        set to_edge(val: SnapEdge);
        /**
         * The edge of the [property`SnapConstraint:`source] that should be snapped
         */
        get toEdge(): SnapEdge;
        set toEdge(val: SnapEdge);

        // Constructors

        constructor(properties?: Partial<SnapConstraint.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](source: Actor | null, from_edge: SnapEdge, to_edge: SnapEdge, offset: number): SnapConstraint;

        // Methods

        /**
         * Retrieves the edges used by the `constraint`
         */
        get_edges(): [SnapEdge, SnapEdge];
        /**
         * Retrieves the offset set using [method`SnapConstraint`.set_offset]
         * @returns the offset, in pixels
         */
        get_offset(): number;
        /**
         * Retrieves the [class`Actor]` set using [method`SnapConstraint`.set_source]
         * @returns a pointer to the source actor
         */
        get_source(): Actor;
        /**
         * Sets the edges to be used by the `constraint`
         *
         * The `from_edge` is the edge on the [class`Actor]` to which `constraint`
         * has been added. The `to_edge` is the edge of the [class`Actor]` inside
         * the [property`SnapConstraint:`source] property.
         * @param from_edge the edge on the actor
         * @param to_edge the edge on the source
         */
        set_edges(from_edge: SnapEdge | null, to_edge: SnapEdge | null): void;
        /**
         * Sets the offset to be applied to the constraint
         * @param offset the offset to apply, in pixels
         */
        set_offset(offset: number): void;
        /**
         * Sets the source [class`Actor]` for the constraint
         * @param source a #ClutterActor, or %NULL to unset the source
         */
        set_source(source?: Actor | null): void;
    }

    module Stage {
        // Signal callback interfaces

        interface AfterPaint {
            (view: StageView, frame: Frame): void;
        }

        interface AfterUpdate {
            (view: StageView, frame: Frame): void;
        }

        interface BeforePaint {
            (view: StageView, frame: Frame): void;
        }

        interface BeforeUpdate {
            (view: StageView, frame: Frame): void;
        }

        interface GlVideoMemoryPurged {
            (): void;
        }

        interface PaintView {
            (view: StageView, redraw_clip: Mtk.Region, frame: Frame): void;
        }

        interface PrepareFrame {
            (view: StageView, frame: Frame): void;
        }

        interface Presented {
            (view: StageView, frame_info?: any | null): void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends Actor.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Animatable.ConstructorProps {
            is_grabbed: boolean;
            isGrabbed: boolean;
            key_focus: Actor;
            keyFocus: Actor;
            perspective: Perspective;
        }
    }

    /**
     * Top level visual element to which actors are placed.
     *
     * #ClutterStage is a top level 'window' on which child actors are placed
     * and manipulated.
     *
     * #ClutterStage is a proxy actor, wrapping the backend-specific implementation
     * (a #StageWindow) of the windowing system. It is possible to subclass
     * #ClutterStage, as long as every overridden virtual function chains up to the
     * parent class corresponding function.
     */
    class Stage extends Actor implements Atk.ImplementorIface, Animatable {
        static $gtype: GObject.GType<Stage>;

        // Properties

        /**
         * %TRUE if there is currently an active grab on the stage.
         */
        get is_grabbed(): boolean;
        /**
         * %TRUE if there is currently an active grab on the stage.
         */
        get isGrabbed(): boolean;
        /**
         * The [class`Clutter`.Actor] that will receive key events from the underlying
         * windowing system.
         *
         * If %NULL, the #ClutterStage will receive the events.
         */
        get key_focus(): Actor;
        set key_focus(val: Actor);
        /**
         * The [class`Clutter`.Actor] that will receive key events from the underlying
         * windowing system.
         *
         * If %NULL, the #ClutterStage will receive the events.
         */
        get keyFocus(): Actor;
        set keyFocus(val: Actor);
        /**
         * The parameters used for the perspective projection from 3D
         * coordinates to 2D
         */
        get perspective(): Perspective;

        // Constructors

        constructor(properties?: Partial<Stage.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'after-paint', callback: (_source: this, view: StageView, frame: Frame) => void): number;
        connect_after(signal: 'after-paint', callback: (_source: this, view: StageView, frame: Frame) => void): number;
        emit(signal: 'after-paint', view: StageView, frame: Frame): void;
        connect(signal: 'after-update', callback: (_source: this, view: StageView, frame: Frame) => void): number;
        connect_after(signal: 'after-update', callback: (_source: this, view: StageView, frame: Frame) => void): number;
        emit(signal: 'after-update', view: StageView, frame: Frame): void;
        connect(signal: 'before-paint', callback: (_source: this, view: StageView, frame: Frame) => void): number;
        connect_after(signal: 'before-paint', callback: (_source: this, view: StageView, frame: Frame) => void): number;
        emit(signal: 'before-paint', view: StageView, frame: Frame): void;
        connect(signal: 'before-update', callback: (_source: this, view: StageView, frame: Frame) => void): number;
        connect_after(
            signal: 'before-update',
            callback: (_source: this, view: StageView, frame: Frame) => void,
        ): number;
        emit(signal: 'before-update', view: StageView, frame: Frame): void;
        connect(signal: 'gl-video-memory-purged', callback: (_source: this) => void): number;
        connect_after(signal: 'gl-video-memory-purged', callback: (_source: this) => void): number;
        emit(signal: 'gl-video-memory-purged'): void;
        connect(
            signal: 'paint-view',
            callback: (_source: this, view: StageView, redraw_clip: Mtk.Region, frame: Frame) => void,
        ): number;
        connect_after(
            signal: 'paint-view',
            callback: (_source: this, view: StageView, redraw_clip: Mtk.Region, frame: Frame) => void,
        ): number;
        emit(signal: 'paint-view', view: StageView, redraw_clip: Mtk.Region, frame: Frame): void;
        connect(signal: 'prepare-frame', callback: (_source: this, view: StageView, frame: Frame) => void): number;
        connect_after(
            signal: 'prepare-frame',
            callback: (_source: this, view: StageView, frame: Frame) => void,
        ): number;
        emit(signal: 'prepare-frame', view: StageView, frame: Frame): void;
        connect(
            signal: 'presented',
            callback: (_source: this, view: StageView, frame_info: any | null) => void,
        ): number;
        connect_after(
            signal: 'presented',
            callback: (_source: this, view: StageView, frame_info: any | null) => void,
        ): number;
        emit(signal: 'presented', view: StageView, frame_info?: any | null): void;

        // Virtual methods

        vfunc_before_paint(view: StageView, frame: Frame): void;
        vfunc_paint_view(view: StageView, redraw_clip: Mtk.Region, frame: Frame): void;

        // Methods

        capture_view_into(view: StageView, rect: Mtk.Rectangle, data: number, stride: number): void;
        clear_stage_views(): void;
        /**
         * Ensures that the GL viewport is updated with the current
         * stage window size.
         *
         * This function will queue a redraw of `stage`.
         *
         * This function should not be called by applications; it is used
         * when embedding a #ClutterStage into a toolkit with another
         * windowing system, like GTK+.
         */
        ensure_viewport(): void;
        /**
         * Checks the scene at the coordinates `x` and `y` and returns a pointer
         * to the [class`Clutter`.Actor] at those coordinates. The result is the actor which
         * would be at the specified location on the next redraw, and is not
         * necessarily that which was there on the previous redraw. This allows the
         * function to perform chronologically correctly after any queued changes to
         * the scene, and even if nothing has been drawn.
         *
         * By using `pick_mode` it is possible to control which actors will be
         * painted and thus available.
         * @param pick_mode how the scene graph should be painted
         * @param x X coordinate to check
         * @param y Y coordinate to check
         * @returns the actor at the specified coordinates,   if any
         */
        get_actor_at_pos(pick_mode: PickMode | null, x: number, y: number): Actor;
        /**
         * Get the size of the framebuffer one must pass to
         * [method`Stage`.paint_to_buffer] or [method`Stage`.paint_to_framebuffer]
         * would be used with the same `rect`.
         * @param rect a rectangle
         * @returns %TRUE if the size has been retrieved, %FALSE otherwise.
         */
        get_capture_final_size(rect: Mtk.Rectangle): [boolean, number, number, number];
        /**
         * Retrieves the [class`Clutter`.Actor] underneath the pointer or touch point
         * of `device` and `sequence`.
         * @param device a #ClutterInputDevice
         * @param sequence an optional #ClutterEventSequence
         * @returns a pointer to the #ClutterActor or %NULL
         */
        get_device_actor(device: InputDevice, sequence?: EventSequence | null): Actor | null;
        /**
         * Retrieves the current focus actor for an event. This is
         * the key focus for key events and other events directed
         * to the key focus, or the actor directly under the
         * coordinates of a device or touch sequence.
         *
         * The actor is looked up at the time of calling this function,
         * and may differ from the actor that the stage originally
         * delivered the event to.
         * @param event an event received on the stage
         * @returns a pointer to the #ClutterActor or %NULL
         */
        get_event_actor(event: Event): Actor | null;
        get_frame_counter(): number;
        /**
         * Gets the actor that currently holds a grab.
         * @returns The grabbing actor
         */
        get_grab_actor(): Actor | null;
        /**
         * Retrieves the actor that is currently under key focus.
         * @returns the actor with key focus, or the stage
         */
        get_key_focus(): Actor;
        /**
         * Retrieves the stage perspective.
         */
        get_perspective(): Perspective | null;
        /**
         * Grabs input onto a certain actor. Events will be propagated as
         * usual inside its hierarchy.
         * @param actor The actor grabbing input
         * @returns an opaque #ClutterGrab handle, drop   with [method@Grab.dismiss]
         */
        grab(actor: Actor): Grab;
        /**
         * Creates an inactive grab. The grab will become effective
         * after [method`Grab`.activate].
         * @param actor The actor that will grab input
         * @returns an opaque #ClutterGrab handle
         */
        grab_inactive(actor: Actor): Grab;
        /**
         * Processes an event.
         *
         * The `event` must be a valid #ClutterEvent and have a #ClutterStage
         * associated to it.
         *
         * This function is only useful when embedding Clutter inside another
         * toolkit, and it should never be called by applications.
         * @param event a #ClutterEvent.
         */
        handle_event(event: Event): void;
        is_active(): boolean;
        /**
         * Take a snapshot of the stage to a provided buffer.
         * @param rect a rectangle
         * @param scale the scale
         * @param data a pointer to the data
         * @param stride stride of the image surface
         * @param format the pixel format
         * @param paint_flags the #ClutterPaintFlag
         * @returns %TRUE is the buffer has been paint successfully, %FALSE otherwise.
         */
        paint_to_buffer(
            rect: Mtk.Rectangle,
            scale: number,
            data: Uint8Array | string,
            stride: number,
            format: Cogl.PixelFormat | null,
            paint_flags: PaintFlag | null,
        ): boolean;
        /**
         * Take a snapshot of the stage to a #ClutterContent.
         * @param rect a rectangle
         * @param scale the scale
         * @param paint_flags the #ClutterPaintFlag
         * @returns the #ClutterContent or %NULL on error.
         */
        paint_to_content(rect: Mtk.Rectangle, scale: number, paint_flags: PaintFlag | null): Content;
        paint_to_framebuffer(
            framebuffer: Cogl.Framebuffer,
            rect: Mtk.Rectangle,
            scale: number,
            paint_flags: PaintFlag | null,
        ): void;
        /**
         * Iterates over active input.
         * @param func Iterator function
         * @returns %TRUE if the foreach function did not stop.
         */
        pointing_input_foreach(func: StageInputForeachFunc): boolean;
        /**
         * Makes a screenshot of the stage in RGBA 8bit data, returns a
         * linear buffer with `width` * 4 as rowstride.
         *
         * The alpha data contained in the returned buffer is driver-dependent,
         * and not guaranteed to hold any sensible value.
         * @param x x coordinate of the first pixel that is read from stage
         * @param y y coordinate of the first pixel that is read from stage
         * @param width Width dimension of pixels to be read, or -1 for the   entire stage width
         * @param height Height dimension of pixels to be read, or -1 for the   entire stage height
         * @returns a pointer to newly allocated memory with the buffer   or %NULL if the read failed. Use g_free() on the returned data   to release the resources it has allocated.
         */
        read_pixels(x: number, y: number, width: number, height: number): Uint8Array;
        /**
         * Schedules a redraw of the #ClutterStage at the next optimal timestamp.
         */
        schedule_update(): void;
        set_active(is_active: boolean): void;
        /**
         * Sets the key focus on `actor`. An actor with key focus will receive
         * all the key events. If `actor` is %NULL, the stage will receive
         * focus.
         * @param actor the actor to set key focus to, or %NULL
         */
        set_key_focus(actor?: Actor | null): void;
        set_minimum_size(width: number, height: number): void;
        update_device(
            device: InputDevice,
            sequence: EventSequence,
            source_device: InputDevice,
            point: Graphene.Point,
            time: number,
            new_actor: Actor,
            region: Mtk.Region,
            emit_crossing: boolean,
        ): void;

        // Inherited methods
        /**
         * Finds the [class`GObject`.ParamSpec] for `property_name`
         * @param property_name the name of the animatable property to find
         * @returns The #GParamSpec for the given property   or %NULL
         */
        find_property(property_name: string): GObject.ParamSpec;
        /**
         * Get animated actor.
         * @returns a #ClutterActor
         */
        get_actor(): Actor;
        /**
         * Retrieves the current state of `property_name` and sets `value` with it
         * @param property_name the name of the animatable property to retrieve
         * @param value a #GValue initialized to the type of the property to retrieve
         */
        get_initial_state(property_name: string, value: GObject.Value | any): void;
        /**
         * Asks a #ClutterAnimatable implementation to interpolate a
         * a named property between the initial and final values of
         * a #ClutterInterval, using `progress` as the interpolation
         * value, and store the result inside `value`.
         *
         * This function should be used for every property animation
         * involving `ClutterAnimatable`s.
         * @param property_name the name of the property to interpolate
         * @param interval a #ClutterInterval with the animation range
         * @param progress the progress to use to interpolate between the   initial and final values of the @interval
         * @returns %TRUE if the interpolation was successful,   and %FALSE otherwise
         */
        interpolate_value(property_name: string, interval: Interval, progress: number): [boolean, unknown];
        /**
         * Sets the current state of `property_name` to `value`
         * @param property_name the name of the animatable property to set
         * @param value the value of the animatable property to set
         */
        set_final_state(property_name: string, value: GObject.Value | any): void;
        /**
         * Finds the [class`GObject`.ParamSpec] for `property_name`
         * @param property_name the name of the animatable property to find
         */
        vfunc_find_property(property_name: string): GObject.ParamSpec;
        /**
         * Get animated actor.
         */
        vfunc_get_actor(): Actor;
        /**
         * Retrieves the current state of `property_name` and sets `value` with it
         * @param property_name the name of the animatable property to retrieve
         * @param value a #GValue initialized to the type of the property to retrieve
         */
        vfunc_get_initial_state(property_name: string, value: GObject.Value | any): void;
        /**
         * Asks a #ClutterAnimatable implementation to interpolate a
         * a named property between the initial and final values of
         * a #ClutterInterval, using `progress` as the interpolation
         * value, and store the result inside `value`.
         *
         * This function should be used for every property animation
         * involving `ClutterAnimatable`s.
         * @param property_name the name of the property to interpolate
         * @param interval a #ClutterInterval with the animation range
         * @param progress the progress to use to interpolate between the   initial and final values of the @interval
         */
        vfunc_interpolate_value(property_name: string, interval: Interval, progress: number): [boolean, unknown];
        /**
         * Sets the current state of `property_name` to `value`
         * @param property_name the name of the animatable property to set
         * @param value the value of the animatable property to set
         */
        vfunc_set_final_state(property_name: string, value: GObject.Value | any): void;
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
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
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
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        get_property(property_name: string): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
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
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
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
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
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
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
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
         * @returns @object
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
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
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        set_property(property_name: string, value: any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
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
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
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
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
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
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
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
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module StageView {
        // Signal callback interfaces

        interface Destroy {
            (): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            color_state: ColorState;
            colorState: ColorState;
            framebuffer: Cogl.Framebuffer;
            layout: Mtk.Rectangle;
            name: string;
            output_color_state: ColorState;
            outputColorState: ColorState;
            refresh_rate: number;
            refreshRate: number;
            scale: number;
            stage: Stage;
            transform: number;
            use_shadowfb: boolean;
            useShadowfb: boolean;
            vblank_duration_us: number;
            vblankDurationUs: number;
        }
    }

    class StageView extends GObject.Object {
        static $gtype: GObject.GType<StageView>;

        // Properties

        get color_state(): ColorState;
        set color_state(val: ColorState);
        get colorState(): ColorState;
        set colorState(val: ColorState);
        get framebuffer(): Cogl.Framebuffer;
        set framebuffer(val: Cogl.Framebuffer);
        get layout(): Mtk.Rectangle;
        set layout(val: Mtk.Rectangle);
        get name(): string;
        get output_color_state(): ColorState;
        set output_color_state(val: ColorState);
        get outputColorState(): ColorState;
        set outputColorState(val: ColorState);
        get refresh_rate(): number;
        set refresh_rate(val: number);
        get refreshRate(): number;
        set refreshRate(val: number);
        get scale(): number;
        set scale(val: number);
        get stage(): Stage;
        get transform(): number;
        get use_shadowfb(): boolean;
        get useShadowfb(): boolean;
        get vblank_duration_us(): number;
        get vblankDurationUs(): number;

        // Constructors

        constructor(properties?: Partial<StageView.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'destroy', callback: (_source: this) => void): number;
        connect_after(signal: 'destroy', callback: (_source: this) => void): number;
        emit(signal: 'destroy'): void;

        // Virtual methods

        vfunc_get_default_paint_flags(): PaintFlag;
        vfunc_new_frame(): Frame;
        vfunc_schedule_update(): void;

        // Methods

        assign_next_scanout(scanout: Cogl.Scanout): void;
        destroy(): void;
        get_default_paint_flags(): PaintFlag;
        /**
         * Retrieves the framebuffer of `view` to draw to.
         * @returns a #CoglFramebuffer
         */
        get_framebuffer(): Cogl.Framebuffer;
        get_layout(rect: Mtk.Rectangle): void;
        get_offscreen_transformation_matrix(matrix: Graphene.Matrix): void;
        /**
         * Retrieves the onscreen framebuffer of `view` if available.
         * @returns a #CoglFramebuffer
         */
        get_onscreen(): Cogl.Framebuffer;
        get_refresh_rate(): number;
        get_scale(): number;
        get_transform(): Mtk.MonitorTransform;
        has_shadowfb(): boolean;
        schedule_update_now(): void;
    }

    module SwipeAction {
        // Signal callback interfaces

        interface Swipe {
            (actor: Actor, direction: SwipeDirection): boolean;
        }

        // Constructor properties interface

        interface ConstructorProps extends GestureAction.ConstructorProps {}
    }

    /**
     * Action for swipe gestures
     *
     * #ClutterSwipeAction is a sub-class of [class`GestureAction]` that implements
     * the logic for recognizing swipe gestures.
     */
    class SwipeAction extends GestureAction {
        static $gtype: GObject.GType<SwipeAction>;

        // Constructors

        constructor(properties?: Partial<SwipeAction.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): SwipeAction;

        // Signals

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'swipe', callback: (_source: this, actor: Actor, direction: SwipeDirection) => boolean): number;
        connect_after(
            signal: 'swipe',
            callback: (_source: this, actor: Actor, direction: SwipeDirection) => boolean,
        ): number;
        emit(signal: 'swipe', actor: Actor, direction: SwipeDirection): void;

        // Virtual methods

        /**
         * class handler for the #ClutterSwipeAction::swipe signal
         * @param actor
         * @param direction
         */
        vfunc_swipe(actor: Actor, direction: SwipeDirection): void;
    }

    module TapAction {
        // Signal callback interfaces

        interface Tap {
            (actor: Actor): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GestureAction.ConstructorProps {}
    }

    /**
     * Action for tap gestures
     *
     * #ClutterTapAction is a sub-class of [class`GestureAction]` that implements
     * the logic for recognizing mouse clicks and touch tap gestures.
     *
     * The simplest usage of #ClutterTapAction consists in adding it to
     * a [class`Actor]`, setting it as reactive and connecting a
     * callback for the [signal`TapAction:`:tap] signal, along the lines of the
     * following code:
     *
     * ```c
     *   clutter_actor_add_action (actor, clutter_tap_action_new ());
     *   clutter_actor_set_reactive (actor, TRUE);
     *   g_signal_connect (action, "tap", G_CALLBACK (on_tap_callback), NULL);
     * ```
     */
    class TapAction extends GestureAction {
        static $gtype: GObject.GType<TapAction>;

        // Constructors

        constructor(properties?: Partial<TapAction.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): TapAction;

        // Signals

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'tap', callback: (_source: this, actor: Actor) => void): number;
        connect_after(signal: 'tap', callback: (_source: this, actor: Actor) => void): number;
        emit(signal: 'tap', actor: Actor): void;

        // Virtual methods

        /**
         * class handler for the #ClutterTapAction::tap signal
         * @param actor
         */
        vfunc_tap(actor: Actor): boolean;
    }

    module Text {
        // Signal callback interfaces

        interface Activate {
            (): void;
        }

        interface CursorChanged {
            (): void;
        }

        interface DeleteText {
            (start_pos: number, end_pos: number): void;
        }

        interface InsertText {
            (new_text: string, new_text_length: number, position?: any | null): void;
        }

        interface TextChanged {
            (): void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends Actor.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Animatable.ConstructorProps {
            activatable: boolean;
            attributes: Pango.AttrList;
            buffer: TextBuffer;
            color: Cogl.Color;
            cursor_color: Cogl.Color;
            cursorColor: Cogl.Color;
            cursor_color_set: boolean;
            cursorColorSet: boolean;
            cursor_position: number;
            cursorPosition: number;
            cursor_size: number;
            cursorSize: number;
            cursor_visible: boolean;
            cursorVisible: boolean;
            editable: boolean;
            ellipsize: Pango.EllipsizeMode;
            font_description: Pango.FontDescription;
            fontDescription: Pango.FontDescription;
            font_name: string;
            fontName: string;
            input_hints: InputContentHintFlags;
            inputHints: InputContentHintFlags;
            input_purpose: InputContentPurpose;
            inputPurpose: InputContentPurpose;
            justify: boolean;
            line_alignment: Pango.Alignment;
            lineAlignment: Pango.Alignment;
            line_wrap: boolean;
            lineWrap: boolean;
            line_wrap_mode: Pango.WrapMode;
            lineWrapMode: Pango.WrapMode;
            max_length: number;
            maxLength: number;
            password_char: number;
            passwordChar: number;
            selectable: boolean;
            selected_text_color: Cogl.Color;
            selectedTextColor: Cogl.Color;
            selected_text_color_set: boolean;
            selectedTextColorSet: boolean;
            selection_bound: number;
            selectionBound: number;
            selection_color: Cogl.Color;
            selectionColor: Cogl.Color;
            selection_color_set: boolean;
            selectionColorSet: boolean;
            single_line_mode: boolean;
            singleLineMode: boolean;
            text: string;
            use_markup: boolean;
            useMarkup: boolean;
        }
    }

    /**
     * An actor for displaying and editing text
     *
     * #ClutterText is an actor that displays custom text using Pango
     * as the text rendering engine.
     *
     * #ClutterText also allows inline editing of the text if the
     * actor is set editable using [method`Text`.set_editable].
     *
     * Selection using keyboard or pointers can be enabled using
     * [method`Text`.set_selectable].
     */
    class Text extends Actor implements Atk.ImplementorIface, Animatable {
        static $gtype: GObject.GType<Text>;

        // Properties

        /**
         * Toggles whether return invokes the activate signal or not.
         */
        get activatable(): boolean;
        set activatable(val: boolean);
        /**
         * A list of `PangoStyleAttribute`s to be applied to the
         * contents of the #ClutterText actor.
         */
        get attributes(): Pango.AttrList;
        set attributes(val: Pango.AttrList);
        /**
         * The buffer which stores the text for this #ClutterText.
         *
         * If set to %NULL, a default buffer will be created.
         */
        get buffer(): TextBuffer;
        set buffer(val: TextBuffer);
        /**
         * The color used to render the text.
         */
        get color(): Cogl.Color;
        set color(val: Cogl.Color);
        /**
         * The color of the cursor.
         */
        get cursor_color(): Cogl.Color;
        set cursor_color(val: Cogl.Color);
        /**
         * The color of the cursor.
         */
        get cursorColor(): Cogl.Color;
        set cursorColor(val: Cogl.Color);
        /**
         * Will be set to %TRUE if [property`Text:`cursor-color] has been set.
         */
        get cursor_color_set(): boolean;
        /**
         * Will be set to %TRUE if [property`Text:`cursor-color] has been set.
         */
        get cursorColorSet(): boolean;
        /**
         * The current input cursor position. -1 is taken to be the end of the text
         */
        get cursor_position(): number;
        set cursor_position(val: number);
        /**
         * The current input cursor position. -1 is taken to be the end of the text
         */
        get cursorPosition(): number;
        set cursorPosition(val: number);
        /**
         * The size of the cursor, in pixels. If set to -1 the size used will
         * be the default cursor size of 2 pixels.
         */
        get cursor_size(): number;
        set cursor_size(val: number);
        /**
         * The size of the cursor, in pixels. If set to -1 the size used will
         * be the default cursor size of 2 pixels.
         */
        get cursorSize(): number;
        set cursorSize(val: number);
        /**
         * Whether the input cursor is visible or not.
         *
         * The cursor will only be visible if this property and either
         * the [property`Text:`editable] or the [property`Text:`selectable] properties
         * are set to %TRUE.
         */
        get cursor_visible(): boolean;
        set cursor_visible(val: boolean);
        /**
         * Whether the input cursor is visible or not.
         *
         * The cursor will only be visible if this property and either
         * the [property`Text:`editable] or the [property`Text:`selectable] properties
         * are set to %TRUE.
         */
        get cursorVisible(): boolean;
        set cursorVisible(val: boolean);
        /**
         * Whether key events delivered to the actor causes editing.
         */
        get editable(): boolean;
        set editable(val: boolean);
        /**
         * The preferred place to ellipsize the contents of the #ClutterText actor
         */
        get ellipsize(): Pango.EllipsizeMode;
        set ellipsize(val: Pango.EllipsizeMode);
        /**
         * The [struct`Pango`.FontDescription] that should be used by the #ClutterText
         *
         * If you have a string describing the font then you should look at
         * [property`Text:`font-name] instead
         */
        get font_description(): Pango.FontDescription;
        set font_description(val: Pango.FontDescription);
        /**
         * The [struct`Pango`.FontDescription] that should be used by the #ClutterText
         *
         * If you have a string describing the font then you should look at
         * [property`Text:`font-name] instead
         */
        get fontDescription(): Pango.FontDescription;
        set fontDescription(val: Pango.FontDescription);
        /**
         * The font to be used by the #ClutterText, as a string
         * that can be parsed by [func`Pango`.FontDescription.from_string].
         *
         * If set to %NULL, the default system font will be used instead.
         */
        get font_name(): string;
        set font_name(val: string);
        /**
         * The font to be used by the #ClutterText, as a string
         * that can be parsed by [func`Pango`.FontDescription.from_string].
         *
         * If set to %NULL, the default system font will be used instead.
         */
        get fontName(): string;
        set fontName(val: string);
        get input_hints(): InputContentHintFlags;
        set input_hints(val: InputContentHintFlags);
        get inputHints(): InputContentHintFlags;
        set inputHints(val: InputContentHintFlags);
        get input_purpose(): InputContentPurpose;
        set input_purpose(val: InputContentPurpose);
        get inputPurpose(): InputContentPurpose;
        set inputPurpose(val: InputContentPurpose);
        /**
         * Whether the contents of the #ClutterText should be justified
         * on both margins.
         */
        get justify(): boolean;
        set justify(val: boolean);
        /**
         * The preferred alignment for the text. This property controls
         * the alignment of multi-line paragraphs.
         */
        get line_alignment(): Pango.Alignment;
        set line_alignment(val: Pango.Alignment);
        /**
         * The preferred alignment for the text. This property controls
         * the alignment of multi-line paragraphs.
         */
        get lineAlignment(): Pango.Alignment;
        set lineAlignment(val: Pango.Alignment);
        /**
         * Whether to wrap the lines of [property`Text:`text] if the contents
         * exceed the available allocation. The wrapping strategy is
         * controlled by the [property`Text:`line-wrap-mode] property.
         */
        get line_wrap(): boolean;
        set line_wrap(val: boolean);
        /**
         * Whether to wrap the lines of [property`Text:`text] if the contents
         * exceed the available allocation. The wrapping strategy is
         * controlled by the [property`Text:`line-wrap-mode] property.
         */
        get lineWrap(): boolean;
        set lineWrap(val: boolean);
        /**
         * If [property`Text:`line-wrap] is set to %TRUE, this property will
         * control how the text is wrapped.
         */
        get line_wrap_mode(): Pango.WrapMode;
        set line_wrap_mode(val: Pango.WrapMode);
        /**
         * If [property`Text:`line-wrap] is set to %TRUE, this property will
         * control how the text is wrapped.
         */
        get lineWrapMode(): Pango.WrapMode;
        set lineWrapMode(val: Pango.WrapMode);
        /**
         * The maximum length of the contents of the #ClutterText actor.
         */
        get max_length(): number;
        set max_length(val: number);
        /**
         * The maximum length of the contents of the #ClutterText actor.
         */
        get maxLength(): number;
        set maxLength(val: number);
        /**
         * If non-zero, the character that should be used in place of
         * the actual text in a password text actor.
         */
        get password_char(): number;
        set password_char(val: number);
        /**
         * If non-zero, the character that should be used in place of
         * the actual text in a password text actor.
         */
        get passwordChar(): number;
        set passwordChar(val: number);
        /**
         * Whether it is possible to select text, either using the pointer
         * or the keyboard.
         *
         * This property depends on the [property`Actor:`reactive] property being
         * set to %TRUE.
         */
        get selectable(): boolean;
        set selectable(val: boolean);
        /**
         * The color of selected text.
         */
        get selected_text_color(): Cogl.Color;
        set selected_text_color(val: Cogl.Color);
        /**
         * The color of selected text.
         */
        get selectedTextColor(): Cogl.Color;
        set selectedTextColor(val: Cogl.Color);
        /**
         * Will be set to %TRUE if [property`Text:`selected-text-color] has been set.
         */
        get selected_text_color_set(): boolean;
        /**
         * Will be set to %TRUE if [property`Text:`selected-text-color] has been set.
         */
        get selectedTextColorSet(): boolean;
        /**
         * The current input cursor position. -1 is taken to be the end of the text
         */
        get selection_bound(): number;
        set selection_bound(val: number);
        /**
         * The current input cursor position. -1 is taken to be the end of the text
         */
        get selectionBound(): number;
        set selectionBound(val: number);
        /**
         * The color of the selection.
         */
        get selection_color(): Cogl.Color;
        set selection_color(val: Cogl.Color);
        /**
         * The color of the selection.
         */
        get selectionColor(): Cogl.Color;
        set selectionColor(val: Cogl.Color);
        /**
         * Will be set to %TRUE if [property`Text:`selection-color] has been set.
         */
        get selection_color_set(): boolean;
        /**
         * Will be set to %TRUE if [property`Text:`selection-color] has been set.
         */
        get selectionColorSet(): boolean;
        /**
         * Whether the #ClutterText actor should be in single line mode
         * or not. A single line #ClutterText actor will only contain a
         * single line of text, scrolling it in case its length is bigger
         * than the allocated size.
         *
         * Setting this property will also set the [property`Text:`activatable]
         * property as a side-effect.
         *
         * The [property`Text:`single-line-mode] property is used only if the
         * [property`Text:`editable] property is set to %TRUE.
         */
        get single_line_mode(): boolean;
        set single_line_mode(val: boolean);
        /**
         * Whether the #ClutterText actor should be in single line mode
         * or not. A single line #ClutterText actor will only contain a
         * single line of text, scrolling it in case its length is bigger
         * than the allocated size.
         *
         * Setting this property will also set the [property`Text:`activatable]
         * property as a side-effect.
         *
         * The [property`Text:`single-line-mode] property is used only if the
         * [property`Text:`editable] property is set to %TRUE.
         */
        get singleLineMode(): boolean;
        set singleLineMode(val: boolean);
        /**
         * The text to render inside the actor.
         */
        get text(): string;
        set text(val: string);
        /**
         * Whether the text includes Pango markup.
         *
         * For more information about the Pango markup format, see
         * [method`Pango`.Layout.set_markup] in the Pango documentation.
         *
         * It is not possible to round-trip this property between
         * %TRUE and %FALSE. Once a string with markup has been set on
         * a #ClutterText actor with [property`Text:`use-markup] set to %TRUE, the markup
         * is stripped from the string.
         */
        get use_markup(): boolean;
        set use_markup(val: boolean);
        /**
         * Whether the text includes Pango markup.
         *
         * For more information about the Pango markup format, see
         * [method`Pango`.Layout.set_markup] in the Pango documentation.
         *
         * It is not possible to round-trip this property between
         * %TRUE and %FALSE. Once a string with markup has been set on
         * a #ClutterText actor with [property`Text:`use-markup] set to %TRUE, the markup
         * is stripped from the string.
         */
        get useMarkup(): boolean;
        set useMarkup(val: boolean);

        // Constructors

        constructor(properties?: Partial<Text.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): Text;

        static new_full(font_name: string, text: string, color: Cogl.Color): Text;

        static new_with_buffer(buffer: TextBuffer): Text;

        static new_with_text(font_name: string | null, text: string): Text;

        // Signals

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'activate', callback: (_source: this) => void): number;
        connect_after(signal: 'activate', callback: (_source: this) => void): number;
        emit(signal: 'activate'): void;
        connect(signal: 'cursor-changed', callback: (_source: this) => void): number;
        connect_after(signal: 'cursor-changed', callback: (_source: this) => void): number;
        emit(signal: 'cursor-changed'): void;
        connect(signal: 'delete-text', callback: (_source: this, start_pos: number, end_pos: number) => void): number;
        connect_after(
            signal: 'delete-text',
            callback: (_source: this, start_pos: number, end_pos: number) => void,
        ): number;
        emit(signal: 'delete-text', start_pos: number, end_pos: number): void;
        connect(
            signal: 'insert-text',
            callback: (_source: this, new_text: string, new_text_length: number, position: any | null) => void,
        ): number;
        connect_after(
            signal: 'insert-text',
            callback: (_source: this, new_text: string, new_text_length: number, position: any | null) => void,
        ): number;
        emit(signal: 'insert-text', new_text: string, new_text_length: number, position?: any | null): void;
        connect(signal: 'text-changed', callback: (_source: this) => void): number;
        connect_after(signal: 'text-changed', callback: (_source: this) => void): number;
        emit(signal: 'text-changed'): void;

        // Virtual methods

        /**
         * class handler for the #ClutterText::activate signal
         */
        vfunc_activate(): void;
        /**
         * class handler for the #ClutterText::cursor-changed signal
         */
        vfunc_cursor_changed(): void;
        /**
         * class handler for the #ClutterText::text-changed signal
         */
        vfunc_text_changed(): void;

        // Methods

        /**
         * Emits the [signal`Text:`:activate] signal, if `self` has been set
         * as activatable using [method`Text`.set_activatable].
         *
         * This function can be used to emit the [signal`Text:`:activate] signal inside
         * a [signal`Actor:`:captured-event] or [signal`Actor:`:key-press-event]
         * signal handlers before the default signal handler for the
         * #ClutterText is invoked.
         * @returns %TRUE if the [signal@Text::activate] signal has been emitted,   and %FALSE otherwise
         */
        activate(): boolean;
        /**
         * Retrieves the position of the character at the given coordinates.
         * @param x the X coordinate, relative to the actor
         * @param y the Y coordinate, relative to the actor
         * @returns the position of the character
         */
        coords_to_position(x: number, y: number): number;
        /**
         * Deletes `n_chars` inside a #ClutterText actor, starting from the
         * current cursor position.
         *
         * Somewhat awkwardly, the cursor position is decremented by the same
         * number of characters you've deleted.
         * @param n_chars the number of characters to delete
         */
        delete_chars(n_chars: number): void;
        /**
         * Deletes the currently selected text
         *
         * This function is only useful in subclasses of #ClutterText
         * @returns %TRUE if text was deleted or if the text actor   is empty, and %FALSE otherwise
         */
        delete_selection(): boolean;
        /**
         * Deletes the text inside a #ClutterText actor between `start_pos`
         * and `end_pos`.
         *
         * The starting and ending positions are expressed in characters,
         * not in bytes.
         * @param start_pos starting position
         * @param end_pos ending position
         */
        delete_text(start_pos: number, end_pos: number): void;
        /**
         * Retrieves whether a #ClutterText is activatable or not.
         * @returns %TRUE if the actor is activatable
         */
        get_activatable(): boolean;
        /**
         * Gets the attribute list that was set on the #ClutterText actor
         * [method`Text`.set_attributes], if any.
         * @returns the attribute list, or %NULL if none was set. The  returned value is owned by the #ClutterText and should not be unreferenced.
         */
        get_attributes(): Pango.AttrList;
        /**
         * Get the #ClutterTextBuffer object which holds the text for
         * this widget.
         * @returns A #GtkEntryBuffer object.
         */
        get_buffer(): TextBuffer;
        /**
         * Retrieves the contents of the #ClutterText actor between
         * `start_pos` and `end_pos,` but not including `end_pos`.
         *
         * The positions are specified in characters, not in bytes.
         * @param start_pos start of text, in characters
         * @param end_pos end of text, in characters
         * @returns a newly allocated string with the contents of   the text actor between the specified positions. Use [func@GLib.free]   to free the resources when done
         */
        get_chars(start_pos: number, end_pos: number): string;
        /**
         * Retrieves the text color as set by [method`Text`.set_color].
         */
        get_color(): Cogl.Color;
        /**
         * Retrieves the color of the cursor of a #ClutterText actor.
         */
        get_cursor_color(): Cogl.Color;
        /**
         * Retrieves the cursor position.
         * @returns the cursor position, in characters
         */
        get_cursor_position(): number;
        /**
         * Retrieves the rectangle that contains the cursor.
         *
         * The coordinates of the rectangle's origin are in actor-relative
         * coordinates.
         */
        get_cursor_rect(): Graphene.Rect;
        /**
         * Retrieves the size of the cursor of a #ClutterText actor.
         * @returns the size of the cursor, in pixels
         */
        get_cursor_size(): number;
        /**
         * Retrieves whether the cursor of a #ClutterText actor is visible.
         * @returns %TRUE if the cursor is visible
         */
        get_cursor_visible(): boolean;
        /**
         * Retrieves whether a #ClutterText is editable or not.
         * @returns %TRUE if the actor is editable
         */
        get_editable(): boolean;
        /**
         * Returns the ellipsizing position of a #ClutterText actor, as
         * set by [method`Text`.set_ellipsize].
         * @returns #PangoEllipsizeMode
         */
        get_ellipsize(): Pango.EllipsizeMode;
        /**
         * Retrieves the [struct`Pango`.FontDescription] used by `self`
         * @returns a #PangoFontDescription. The returned value is owned   by the #ClutterText actor and it should not be modified or freed
         */
        get_font_description(): Pango.FontDescription;
        /**
         * Retrieves the font name as set by [method`Text`.set_font_name].
         * @returns a string containing the font name. The returned   string is owned by the #ClutterText actor and should not be   modified or freed
         */
        get_font_name(): string;
        get_input_hints(): InputContentHintFlags;
        get_input_purpose(): InputContentPurpose;
        /**
         * Retrieves whether the #ClutterText actor should justify its contents
         * on both margins.
         * @returns %TRUE if the text should be justified
         */
        get_justify(): boolean;
        /**
         * Retrieves the current #PangoLayout used by a #ClutterText actor.
         * @returns a #PangoLayout. The returned object is owned by   the #ClutterText actor and should not be modified or freed
         */
        get_layout(): Pango.Layout;
        /**
         * Obtains the coordinates where the #ClutterText will draw the [class`Pango`.Layout]
         * representing the text.
         */
        get_layout_offsets(): [number, number];
        /**
         * Retrieves the alignment of a #ClutterText, as set by
         * [method`Text`.set_line_alignment].
         * @returns a [enum@Pango.Alignment]
         */
        get_line_alignment(): Pango.Alignment;
        /**
         * Retrieves the value set using [method`Text`.set_line_wrap].
         * @returns %TRUE if the #ClutterText actor should wrap   its contents
         */
        get_line_wrap(): boolean;
        /**
         * Retrieves the line wrap mode used by the #ClutterText actor.
         *
         * See [method`Text`.set_line_wrap_mode].
         * @returns the wrap mode used by the #ClutterText
         */
        get_line_wrap_mode(): Pango.WrapMode;
        /**
         * Gets the maximum length of text that can be set into a text actor.
         *
         * See [method`Text`.set_max_length].
         * @returns the maximum number of characters.
         */
        get_max_length(): number;
        /**
         * Retrieves the character to use in place of the actual text
         * as set by [method`Text`.set_password_char].
         * @returns a Unicode character or 0 if the password   character is not set
         */
        get_password_char(): number;
        /**
         * Retrieves whether a #ClutterText is selectable or not.
         * @returns %TRUE if the actor is selectable
         */
        get_selectable(): boolean;
        /**
         * Retrieves the color of selected text of a #ClutterText actor.
         */
        get_selected_text_color(): Cogl.Color;
        /**
         * Retrieves the currently selected text.
         * @returns a newly allocated string containing the currently   selected text, or %NULL. Use [func@GLib.free] to free the returned   string.
         */
        get_selection(): string;
        /**
         * Retrieves the other end of the selection of a #ClutterText actor,
         * in characters from the current cursor position.
         * @returns the position of the other end of the selection
         */
        get_selection_bound(): number;
        /**
         * Retrieves the color of the selection of a #ClutterText actor.
         */
        get_selection_color(): Cogl.Color;
        /**
         * Retrieves whether the #ClutterText actor is in single line mode.
         * @returns %TRUE if the #ClutterText actor is in single line mode
         */
        get_single_line_mode(): boolean;
        /**
         * Retrieves a pointer to the current contents of a #ClutterText
         * actor.
         *
         * If you need a copy of the contents for manipulating, either
         * use [func`GLib`.strdup] on the returned string, or use:
         *
         * ```c
         *    copy = clutter_text_get_chars (text, 0, -1);
         * ```
         *
         * Which will return a newly allocated string.
         *
         * If the #ClutterText actor is empty, this function will return
         * an empty string, and not %NULL.
         * @returns the contents of the actor. The returned   string is owned by the #ClutterText actor and should never be modified   or freed
         */
        get_text(): string;
        /**
         * Retrieves whether the contents of the #ClutterText actor should be
         * parsed for the Pango text markup.
         * @returns %TRUE if the contents will be parsed for markup
         */
        get_use_markup(): boolean;
        has_preedit(): boolean;
        /**
         * Inserts `text` into a [class`Actor]` at the given position.
         *
         * If `position` is a negative number, the text will be appended
         * at the end of the current contents of the #ClutterText.
         *
         * The position is expressed in characters, not in bytes.
         * @param text the text to be inserted
         * @param position the position of the insertion, or -1
         */
        insert_text(text: string, position: number): void;
        /**
         * Inserts `wc` at the current cursor position of a
         * #ClutterText actor.
         * @param wc a Unicode character
         */
        insert_unichar(wc: number): void;
        /**
         * Retrieves the coordinates of the given `position`.
         * @param position position in characters
         * @returns %TRUE if the conversion was successful
         */
        position_to_coords(position: number): [boolean, number, number, number];
        /**
         * Sets whether a #ClutterText actor should be activatable.
         *
         * An activatable #ClutterText actor will emit the [signal`Text:`:activate]
         * signal whenever the 'Enter' (or 'Return') key is pressed; if it is not
         * activatable, a new line will be appended to the current content.
         *
         * An activatable #ClutterText must also be set as editable using
         * [method`Text`.set_editable].
         * @param activatable whether the #ClutterText actor should be activatable
         */
        set_activatable(activatable: boolean): void;
        /**
         * Sets the attributes list that are going to be applied to the
         * #ClutterText contents.
         *
         * The #ClutterText actor will take a reference on the [struct`Pango`.AttrList]
         * passed to this function.
         * @param attrs a #PangoAttrList or %NULL to unset the attributes
         */
        set_attributes(attrs?: Pango.AttrList | null): void;
        /**
         * Set the [class`TextBuffer]` object which holds the text for
         * this widget.
         * @param buffer a #ClutterTextBuffer
         */
        set_buffer(buffer: TextBuffer): void;
        /**
         * Sets the color of the contents of a #ClutterText actor.
         *
         * The overall opacity of the #ClutterText actor will be the
         * result of the alpha value of `color` and the composited
         * opacity of the actor itself on the scenegraph, as returned
         * by [method`Actor`.get_paint_opacity].
         * @param color a #CoglColor
         */
        set_color(color: Cogl.Color): void;
        /**
         * Sets the color of the cursor of a #ClutterText actor.
         *
         * If `color` is %NULL, the cursor color will be the same as the
         * text color.
         * @param color the color of the cursor, or %NULL to unset it
         */
        set_cursor_color(color?: Cogl.Color | null): void;
        /**
         * Sets the cursor of a #ClutterText actor at `position`.
         *
         * The position is expressed in characters, not in bytes.
         * @param position the new cursor position, in characters
         */
        set_cursor_position(position: number): void;
        /**
         * Sets the size of the cursor of a #ClutterText. The cursor
         * will only be visible if the [property`Text:`cursor-visible] property
         * is set to %TRUE.
         * @param size the size of the cursor, in pixels, or -1 to use the   default value
         */
        set_cursor_size(size: number): void;
        /**
         * Sets whether the cursor of a #ClutterText actor should be
         * visible or not.
         *
         * The color of the cursor will be the same as the text color
         * unless [method`Text`.set_cursor_color] has been called.
         *
         * The size of the cursor can be set using [method`Text`.set_cursor_size].
         *
         * The position of the cursor can be changed programmatically using
         * [method`Text`.set_cursor_position].
         * @param cursor_visible whether the cursor should be visible
         */
        set_cursor_visible(cursor_visible: boolean): void;
        /**
         * Sets whether the #ClutterText actor should be editable.
         *
         * An editable #ClutterText with key focus set using
         * [method`Actor`.grab_key_focus] or [method`Stage`.set_key_focus]
         * will receive key events and will update its contents accordingly.
         * @param editable whether the #ClutterText should be editable
         */
        set_editable(editable: boolean): void;
        /**
         * Sets the mode used to ellipsize (add an ellipsis: "...") to the
         * text if there is not enough space to render the entire contents
         * of a #ClutterText actor
         * @param mode a #PangoEllipsizeMode
         */
        set_ellipsize(mode: Pango.EllipsizeMode | null): void;
        /**
         * Sets `font_desc` as the font description for a #ClutterText
         *
         * The #PangoFontDescription is copied by the #ClutterText actor
         * so you can safely call [method`Pango`.FontDescription.free] on it after
         * calling this function.
         * @param font_desc a #PangoFontDescription
         */
        set_font_description(font_desc: Pango.FontDescription): void;
        /**
         * Sets the font used by a #ClutterText. The `font_name` string
         * must either be %NULL, which means that the font name from the
         * default [class`Backend]` will be used; or be something that can
         * be parsed by the [func`Pango`.FontDescription.from_string] function,
         * like:
         *
         * ```c
         *   // Set the font to the system's Sans, 10 points
         *   clutter_text_set_font_name (text, "Sans 10");
         *
         *   // Set the font to the system's Serif, 16 pixels
         *   clutter_text_set_font_name (text, "Serif 16px");
         *
         *   // Set the font to Helvetica, 10 points
         *   clutter_text_set_font_name (text, "Helvetica 10");
         * ```
         * @param font_name a font name, or %NULL to set the default font name
         */
        set_font_name(font_name?: string | null): void;
        set_input_hints(hints: InputContentHintFlags | null): void;
        set_input_purpose(purpose: InputContentPurpose | null): void;
        /**
         * Sets whether the text of the #ClutterText actor should be justified
         * on both margins. This setting is ignored if Clutter is compiled
         * against Pango &lt; 1.18.
         * @param justify whether the text should be justified
         */
        set_justify(justify: boolean): void;
        /**
         * Sets the way that the lines of a wrapped label are aligned with
         * respect to each other. This does not affect the overall alignment
         * of the label within its allocated or specified width.
         *
         * To align a #ClutterText actor you should add it to a container
         * that supports alignment, or use the anchor point.
         * @param alignment A #PangoAlignment
         */
        set_line_alignment(alignment: Pango.Alignment | null): void;
        /**
         * Sets whether the contents of a #ClutterText actor should wrap,
         * if they don't fit the size assigned to the actor.
         * @param line_wrap whether the contents should wrap
         */
        set_line_wrap(line_wrap: boolean): void;
        /**
         * If line wrapping is enabled (see [method`Text`.set_line_wrap]) this
         * function controls how the line wrapping is performed. The default is
         * %PANGO_WRAP_WORD which means wrap on word boundaries.
         * @param wrap_mode the line wrapping mode
         */
        set_line_wrap_mode(wrap_mode: Pango.WrapMode | null): void;
        /**
         * Sets `markup` as the contents of a #ClutterText.
         *
         * This is a convenience function for setting a string containing
         * Pango markup, and it is logically equivalent to:
         *
         * ```c
         *   /&ast; the order is important &ast;/
         *   clutter_text_set_text (CLUTTER_TEXT (actor), markup);
         *   clutter_text_set_use_markup (CLUTTER_TEXT (actor), TRUE);
         * ```
         * @param markup a string containing Pango markup.   Passing %NULL is the same as passing "" (the empty string)
         */
        set_markup(markup?: string | null): void;
        /**
         * Sets the maximum allowed length of the contents of the actor. If the
         * current contents are longer than the given length, then they will be
         * truncated to fit.
         * @param max the maximum number of characters allowed in the text actor; 0   to disable or -1 to set the length of the current string
         */
        set_max_length(max: number): void;
        /**
         * Sets the character to use in place of the actual text in a
         * password text actor.
         *
         * If `wc` is 0 the text will be displayed as it is entered in the
         * #ClutterText actor.
         * @param wc a Unicode character, or 0 to unset the password character
         */
        set_password_char(wc: number): void;
        /**
         * Sets, or unsets, the pre-edit string. This function is useful
         * for input methods to display a string (with eventual specific
         * Pango attributes) before it is entered inside the #ClutterText
         * buffer.
         *
         * The preedit string and attributes are ignored if the #ClutterText
         * actor is not editable.
         *
         * This function should not be used by applications
         * @param preedit_str the pre-edit string, or %NULL to unset it
         * @param preedit_attrs the pre-edit string attributes
         * @param cursor_pos the cursor position for the pre-edit string
         */
        set_preedit_string(preedit_str: string | null, preedit_attrs: Pango.AttrList | null, cursor_pos: number): void;
        /**
         * Sets whether a #ClutterText actor should be selectable.
         *
         * A selectable #ClutterText will allow selecting its contents using
         * the pointer or the keyboard.
         * @param selectable whether the #ClutterText actor should be selectable
         */
        set_selectable(selectable: boolean): void;
        /**
         * Sets the selected text color of a #ClutterText actor.
         *
         * If `color` is %NULL, the selected text color will be the same as the
         * selection color, which then falls back to cursor, and then text color.
         * @param color the selected text color, or %NULL to unset it
         */
        set_selected_text_color(color?: Cogl.Color | null): void;
        /**
         * Selects the region of text between `start_pos` and `end_pos`.
         *
         * This function changes the position of the cursor to match
         * `start_pos` and the selection bound to match `end_pos`.
         * @param start_pos start of the selection, in characters
         * @param end_pos end of the selection, in characters
         */
        set_selection(start_pos: number, end_pos: number): void;
        /**
         * Sets the other end of the selection, starting from the current
         * cursor position.
         *
         * If `selection_bound` is -1, the selection unset.
         * @param selection_bound the position of the end of the selection, in characters
         */
        set_selection_bound(selection_bound: number): void;
        /**
         * Sets the color of the selection of a #ClutterText actor.
         *
         * If `color` is %NULL, the selection color will be the same as the
         * cursor color, or if no cursor color is set either then it will be
         * the same as the text color.
         * @param color the color of the selection, or %NULL to unset it
         */
        set_selection_color(color?: Cogl.Color | null): void;
        /**
         * Sets whether a #ClutterText actor should be in single line mode
         * or not. Only editable `ClutterText`s can be in single line
         * mode.
         *
         * A text actor in single line mode will not wrap text and will clip
         * the visible area to the predefined size. The contents of the
         * text actor will scroll to display the end of the text if its length
         * is bigger than the allocated width.
         *
         * When setting the single line mode the [property`Text:`activatable]
         * property is also set as a side effect. Instead of entering a new
         * line character, the text actor will emit the [signal`Text:`:activate]
         * signal.
         * @param single_line whether to enable single line mode
         */
        set_single_line_mode(single_line: boolean): void;
        /**
         * Sets the contents of a #ClutterText actor.
         *
         * If the [property`Text:`use-markup] property was set to %TRUE it
         * will be reset to %FALSE as a side effect. If you want to
         * maintain the [property`Text:`use-markup] you should use the
         * [method`Text`.set_markup] function instead
         * @param text the text to set. Passing %NULL is the same   as passing "" (the empty string)
         */
        set_text(text?: string | null): void;
        /**
         * Sets whether the contents of the #ClutterText actor contains markup
         * in [Pango's text markup language](https://docs.gtk.org/Pango/pango_markup.html#pango-markup).
         *
         * Setting [property`Text:`use-markup] on an editable #ClutterText will
         * not have any effect except hiding the markup.
         *
         * See also [property`Text:`use-markup].
         * @param setting %TRUE if the text should be parsed for markup.
         */
        set_use_markup(setting: boolean): void;

        // Inherited methods
        /**
         * Finds the [class`GObject`.ParamSpec] for `property_name`
         * @param property_name the name of the animatable property to find
         * @returns The #GParamSpec for the given property   or %NULL
         */
        find_property(property_name: string): GObject.ParamSpec;
        /**
         * Get animated actor.
         * @returns a #ClutterActor
         */
        get_actor(): Actor;
        /**
         * Retrieves the current state of `property_name` and sets `value` with it
         * @param property_name the name of the animatable property to retrieve
         * @param value a #GValue initialized to the type of the property to retrieve
         */
        get_initial_state(property_name: string, value: GObject.Value | any): void;
        /**
         * Asks a #ClutterAnimatable implementation to interpolate a
         * a named property between the initial and final values of
         * a #ClutterInterval, using `progress` as the interpolation
         * value, and store the result inside `value`.
         *
         * This function should be used for every property animation
         * involving `ClutterAnimatable`s.
         * @param property_name the name of the property to interpolate
         * @param interval a #ClutterInterval with the animation range
         * @param progress the progress to use to interpolate between the   initial and final values of the @interval
         * @returns %TRUE if the interpolation was successful,   and %FALSE otherwise
         */
        interpolate_value(property_name: string, interval: Interval, progress: number): [boolean, unknown];
        /**
         * Sets the current state of `property_name` to `value`
         * @param property_name the name of the animatable property to set
         * @param value the value of the animatable property to set
         */
        set_final_state(property_name: string, value: GObject.Value | any): void;
        /**
         * Finds the [class`GObject`.ParamSpec] for `property_name`
         * @param property_name the name of the animatable property to find
         */
        vfunc_find_property(property_name: string): GObject.ParamSpec;
        /**
         * Get animated actor.
         */
        vfunc_get_actor(): Actor;
        /**
         * Retrieves the current state of `property_name` and sets `value` with it
         * @param property_name the name of the animatable property to retrieve
         * @param value a #GValue initialized to the type of the property to retrieve
         */
        vfunc_get_initial_state(property_name: string, value: GObject.Value | any): void;
        /**
         * Asks a #ClutterAnimatable implementation to interpolate a
         * a named property between the initial and final values of
         * a #ClutterInterval, using `progress` as the interpolation
         * value, and store the result inside `value`.
         *
         * This function should be used for every property animation
         * involving `ClutterAnimatable`s.
         * @param property_name the name of the property to interpolate
         * @param interval a #ClutterInterval with the animation range
         * @param progress the progress to use to interpolate between the   initial and final values of the @interval
         */
        vfunc_interpolate_value(property_name: string, interval: Interval, progress: number): [boolean, unknown];
        /**
         * Sets the current state of `property_name` to `value`
         * @param property_name the name of the animatable property to set
         * @param value the value of the animatable property to set
         */
        vfunc_set_final_state(property_name: string, value: GObject.Value | any): void;
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
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
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
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        get_property(property_name: string): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
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
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
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
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
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
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
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
         * @returns @object
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
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
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        set_property(property_name: string, value: any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
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
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
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
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
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
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
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
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    module TextBuffer {
        // Signal callback interfaces

        interface DeletedText {
            (position: number, n_chars: number): void;
        }

        interface InsertedText {
            (position: number, chars: string, n_chars: number): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            length: number;
            max_length: number;
            maxLength: number;
            text: string;
        }
    }

    /**
     * Text buffer for [class`Text]`
     *
     * The #ClutterTextBuffer class contains the actual text displayed in a
     * [class`Text]` widget.
     *
     * A single #ClutterTextBuffer object can be shared by multiple [class`Text]`
     * widgets which will then share the same text content, but not the cursor
     * position, visibility attributes, icon etc.
     *
     * #ClutterTextBuffer may be derived from. Such a derived class might allow
     * text to be stored in an alternate location, such as non-pageable memory,
     * useful in the case of important passwords. Or a derived class could
     * integrate with an application's concept of undo/redo.
     */
    class TextBuffer extends GObject.Object {
        static $gtype: GObject.GType<TextBuffer>;

        // Properties

        /**
         * The length (in characters) of the text in buffer.
         */
        get length(): number;
        /**
         * The maximum length (in characters) of the text in the buffer.
         */
        get max_length(): number;
        set max_length(val: number);
        /**
         * The maximum length (in characters) of the text in the buffer.
         */
        get maxLength(): number;
        set maxLength(val: number);
        /**
         * The contents of the buffer.
         */
        get text(): string;

        // Constructors

        constructor(properties?: Partial<TextBuffer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): TextBuffer;

        static new_with_text(text: string | null, text_len: number): TextBuffer;

        // Signals

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'deleted-text', callback: (_source: this, position: number, n_chars: number) => void): number;
        connect_after(
            signal: 'deleted-text',
            callback: (_source: this, position: number, n_chars: number) => void,
        ): number;
        emit(signal: 'deleted-text', position: number, n_chars: number): void;
        connect(
            signal: 'inserted-text',
            callback: (_source: this, position: number, chars: string, n_chars: number) => void,
        ): number;
        connect_after(
            signal: 'inserted-text',
            callback: (_source: this, position: number, chars: string, n_chars: number) => void,
        ): number;
        emit(signal: 'inserted-text', position: number, chars: string, n_chars: number): void;

        // Virtual methods

        /**
         * Deletes a sequence of characters from the buffer. `n_chars` characters are
         * deleted starting at `position`. If `n_chars` is negative, then all characters
         * until the end of the text are deleted.
         *
         * If `position` or `n_chars` are out of bounds, then they are coerced to sane
         * values.
         *
         * Note that the positions are specified in characters, not bytes.
         * @param position position at which to delete text
         * @param n_chars number of characters to delete
         */
        vfunc_delete_text(position: number, n_chars: number): number;
        /**
         * default handler for the #ClutterTextBuffer::deleted-text signal
         * @param position
         * @param n_chars
         */
        vfunc_deleted_text(position: number, n_chars: number): void;
        /**
         * Retrieves the length in characters of the buffer.
         */
        vfunc_get_length(): number;
        /**
         * virtual function
         * @param n_bytes
         */
        vfunc_get_text(n_bytes: number): string;
        /**
         * Inserts `n_chars` characters of `chars` into the contents of the
         * buffer, at position `position`.
         *
         * If `n_chars` is negative, then characters from chars will be inserted
         * until a null-terminator is found. If `position` or `n_chars` are out of
         * bounds, or the maximum buffer text length is exceeded, then they are
         * coerced to sane values.
         *
         * Note that the position and length are in characters, not in bytes.
         * @param position the position at which to insert text.
         * @param chars the text to insert into the buffer.
         * @param n_chars the length of the text in characters, or -1
         */
        vfunc_insert_text(position: number, chars: string, n_chars: number): number;
        /**
         * default handler for the #ClutterTextBuffer::inserted-text signal
         * @param position
         * @param chars
         * @param n_chars
         */
        vfunc_inserted_text(position: number, chars: string, n_chars: number): void;

        // Methods

        /**
         * Deletes a sequence of characters from the buffer. `n_chars` characters are
         * deleted starting at `position`. If `n_chars` is negative, then all characters
         * until the end of the text are deleted.
         *
         * If `position` or `n_chars` are out of bounds, then they are coerced to sane
         * values.
         *
         * Note that the positions are specified in characters, not bytes.
         * @param position position at which to delete text
         * @param n_chars number of characters to delete
         * @returns The number of characters deleted.
         */
        delete_text(position: number, n_chars: number): number;
        /**
         * Emits the [signal`TextBuffer:`:deleted-text] signal on `buffer`.
         *
         * Used when subclassing #ClutterTextBuffer
         * @param position position at which text was deleted
         * @param n_chars number of characters deleted
         */
        emit_deleted_text(position: number, n_chars: number): void;
        /**
         * Emits the [signal`TextBuffer:`:inserted-text] signal on `buffer`.
         *
         * Used when subclassing #ClutterTextBuffer
         * @param position position at which text was inserted
         * @param chars text that was inserted
         * @param n_chars number of characters inserted
         */
        emit_inserted_text(position: number, chars: string, n_chars: number): void;
        /**
         * Retrieves the length in bytes of the buffer.
         * See [method`TextBuffer`.get_length].
         * @returns The byte length of the buffer.
         */
        get_bytes(): number;
        /**
         * Retrieves the length in characters of the buffer.
         * @returns The number of characters in the buffer.
         */
        get_length(): number;
        /**
         * Retrieves the maximum allowed length of the text in
         * `buffer`. See [method`TextBuffer`.set_max_length].
         * @returns the maximum allowed number of characters               in #ClutterTextBuffer, or 0 if there is no maximum.
         */
        get_max_length(): number;
        /**
         * Retrieves the contents of the buffer.
         *
         * The memory pointer returned by this call will not change
         * unless this object emits a signal, or is finalized.
         * @returns a pointer to the contents of the widget as a      string. This string points to internally allocated      storage in the buffer and must not be freed, modified or      stored.
         */
        get_text(): string;
        /**
         * Inserts `n_chars` characters of `chars` into the contents of the
         * buffer, at position `position`.
         *
         * If `n_chars` is negative, then characters from chars will be inserted
         * until a null-terminator is found. If `position` or `n_chars` are out of
         * bounds, or the maximum buffer text length is exceeded, then they are
         * coerced to sane values.
         *
         * Note that the position and length are in characters, not in bytes.
         * @param position the position at which to insert text.
         * @param chars the text to insert into the buffer.
         * @param n_chars the length of the text in characters, or -1
         * @returns The number of characters actually inserted.
         */
        insert_text(position: number, chars: string, n_chars: number): number;
        /**
         * Sets the maximum allowed length of the contents of the buffer.
         *
         * If the current contents are longer than the given length,
         * then they will be truncated to fit.
         * @param max_length the maximum length of the entry buffer, or 0 for no maximum.   (other than the maximum length of entries.) The value passed in will   be clamped to the range [ 0, %CLUTTER_TEXT_BUFFER_MAX_SIZE ].
         */
        set_max_length(max_length: number): void;
        /**
         * Sets the text in the buffer.
         *
         * This is roughly equivalent to calling [method`TextBuffer`.delete_text]
         * and [method`TextBuffer`.insert_text].
         *
         * Note that `n_chars` is in characters, not in bytes.
         * @param chars the new text
         * @param n_chars the number of characters in @text, or -1
         */
        set_text(chars: string, n_chars: number): void;
    }

    class TextNode extends PaintNode {
        static $gtype: GObject.GType<TextNode>;

        // Constructors

        _init(...args: any[]): void;

        static ['new'](layout?: Pango.Layout | null, color?: Cogl.Color | null): TextNode;
    }

    module TextureContent {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, Content.ConstructorProps {}
    }

    class TextureContent extends GObject.Object implements Content {
        static $gtype: GObject.GType<TextureContent>;

        // Constructors

        constructor(properties?: Partial<TextureContent.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Static methods

        /**
         * Creates a new [class`TextureContent]` instance for `texture,` taking an
         * internal reference to `texture`.
         *
         * If you change the contents of the [class`Cogl`.Texture] you will need
         * to manually invalidate the `texture_content` with [method`Content`.invalidate]
         * in order to update the actors using `texture_content` as their content.
         * @param texture a #CoglTexture
         * @param clip A clipping rectangle
         */
        static new_from_texture(texture: Cogl.Texture, clip?: Mtk.Rectangle | null): Content;

        // Methods

        /**
         * Retrieves a pointer to the [class`Cogl`.Texture] used by `texture_content`.
         *
         * If you change the contents of the returned [class`Cogl`.Texture] you will need
         * to manually invalidate the `texture_content` with [method`Content`.invalidate]
         * in order to update the actors using `texture_content` as their content.
         * @returns a pointer to the [class@Cogl.Texture]
         */
        get_texture(): Cogl.Texture;

        // Inherited methods
        /**
         * Retrieves the natural size of the `content,` if any.
         *
         * The natural size of a #ClutterContent is defined as the size the content
         * would have regardless of the allocation of the actor that is painting it,
         * for instance the size of an image data.
         * @returns %TRUE if the content has a preferred size, and %FALSE   otherwise
         */
        get_preferred_size(): [boolean, number, number];
        /**
         * Invalidates a #ClutterContent.
         *
         * This function should be called by #ClutterContent implementations when
         * they change the way a the content should be painted regardless of the
         * actor state.
         */
        invalidate(): void;
        /**
         * Signals that `content'`s size changed. Attached actors with request mode
         * set to %CLUTTER_REQUEST_CONTENT_SIZE will have a relayout queued.
         *
         * Attached actors with other request modes are not redrawn. To redraw them
         * too, use [method`Clutter`.Content.invalidate].
         */
        invalidate_size(): void;
        /**
         * virtual function; called each time a #ClutterContent is attached
         *   to a #ClutterActor.
         * @param actor
         */
        vfunc_attached(actor: Actor): void;
        /**
         * virtual function; called each time a #ClutterContent is detached
         *   from a #ClutterActor.
         * @param actor
         */
        vfunc_detached(actor: Actor): void;
        /**
         * Retrieves the natural size of the `content,` if any.
         *
         * The natural size of a #ClutterContent is defined as the size the content
         * would have regardless of the allocation of the actor that is painting it,
         * for instance the size of an image data.
         */
        vfunc_get_preferred_size(): [boolean, number, number];
        /**
         * Invalidates a #ClutterContent.
         *
         * This function should be called by #ClutterContent implementations when
         * they change the way a the content should be painted regardless of the
         * actor state.
         */
        vfunc_invalidate(): void;
        /**
         * Signals that `content'`s size changed. Attached actors with request mode
         * set to %CLUTTER_REQUEST_CONTENT_SIZE will have a relayout queued.
         *
         * Attached actors with other request modes are not redrawn. To redraw them
         * too, use [method`Clutter`.Content.invalidate].
         */
        vfunc_invalidate_size(): void;
        /**
         * virtual function; called each time the content needs to
         *   paint itself
         * @param actor
         * @param node
         * @param paint_context
         */
        vfunc_paint_content(actor: Actor, node: PaintNode, paint_context: PaintContext): void;
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
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
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
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
         */
        get_data(key: string): any | null;
        get_property(property_name: string): any;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
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
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
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
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
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
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
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
         * @returns @object
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
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
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        set_property(property_name: string, value: any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
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
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
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
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
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
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
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
         * @param pspec
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        disconnect(id: number): void;
        set(properties: { [key: string]: any }): void;
        block_signal_handler(id: number): any;
        unblock_signal_handler(id: number): any;
        stop_emission_by_name(detailedName: string): any;
    }

    class TextureNode extends PipelineNode {
        static $gtype: GObject.GType<TextureNode>;

        // Constructors

        _init(...args: any[]): void;

        static ['new'](
            texture: Cogl.Texture,
            color: Cogl.Color | null,
            min_filter: ScalingFilter,
            mag_filter: ScalingFilter,
        ): TextureNode;
        // Conflicted with Clutter.PipelineNode.new

        static ['new'](...args: never[]): any;
    }

    module Timeline {
        // Signal callback interfaces

        interface Completed {
            (): void;
        }

        interface MarkerReached {
            (marker_name: string, msecs: number): void;
        }

        interface NewFrame {
            (msecs: number): void;
        }

        interface Paused {
            (): void;
        }

        interface Started {
            (): void;
        }

        interface Stopped {
            (is_finished: boolean): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            actor: Actor;
            auto_reverse: boolean;
            autoReverse: boolean;
            delay: number;
            direction: TimelineDirection;
            duration: number;
            frame_clock: FrameClock;
            frameClock: FrameClock;
            progress_mode: AnimationMode;
            progressMode: AnimationMode;
            repeat_count: number;
            repeatCount: number;
        }
    }

    /**
     * A class for time-based events
     *
     * #ClutterTimeline is a base class for managing time-based event that cause
     * Clutter to redraw a stage, such as animations.
     *
     * Each #ClutterTimeline instance has a duration: once a timeline has been
     * started, using [method`Timeline`.start], it will emit a signal that can
     * be used to update the state of the actors.
     *
     * It is important to note that #ClutterTimeline is not a generic API for
     * calling closures after an interval; each Timeline is tied into a frame
     * clock used to drive the frame cycle. If you need to schedule a closure
     * after an interval, see [func`threads_add_timeout]` instead.
     *
     * Users of #ClutterTimeline should connect to the [signal`Timeline:`:new-frame]
     * signal, which is emitted each time a timeline is advanced during the maste
     * clock iteration. The [signal`Timeline:`:new-frame] signal provides the time
     * elapsed since the beginning of the timeline, in milliseconds. A normalized
     * progress value can be obtained by calling [method`Timeline`.get_progress].
     * By using [method`Timeline`.get_delta] it is possible to obtain the wallclock
     * time elapsed since the last emission of the [signal`Timeline:`:new-frame]
     * signal.
     *
     * Initial state can be set up by using the [signal`Timeline:`:started] signal,
     * while final state can be set up by using the [signal`Timeline:`:stopped]
     * signal. The #ClutterTimeline guarantees the emission of at least a single
     * [signal`Timeline:`:new-frame] signal, as well as the emission of the
     * [signal`Timeline:`:completed] signal every time the #ClutterTimeline reaches
     * its [property`Timeline:`duration].
     *
     * It is possible to connect to specific points in the timeline progress by
     * adding markers using [method`Timeline`.add_marker_at_time] and connecting
     * to the [signal`Timeline:`:marker-reached] signal.
     *
     * Timelines can be made to loop once they reach the end of their duration, by
     * using clutter_timeline_set_repeat_count(); a looping timeline will still
     * emit the [signal`Timeline:`:completed] signal once it reaches the end of its
     * duration at each repeat. If you want to be notified of the end of the last
     * repeat, use the [signal`Timeline:`:stopped] signal.
     *
     * Timelines have a [property`Timeline:`direction]: the default direction is
     * %CLUTTER_TIMELINE_FORWARD, and goes from 0 to the duration; it is possible
     * to change the direction to %CLUTTER_TIMELINE_BACKWARD, and have the timeline
     * go from the duration to 0. The direction can be automatically reversed
     * when reaching completion by using the [property`Timeline:`auto-reverse] property.
     *
     * Timelines are used in the Clutter animation framework by classes like
     * [class`Transition]`.
     */
    class Timeline extends GObject.Object {
        static $gtype: GObject.GType<Timeline>;

        // Properties

        get actor(): Actor;
        set actor(val: Actor);
        /**
         * If the direction of the timeline should be automatically reversed
         * when reaching the end.
         */
        get auto_reverse(): boolean;
        set auto_reverse(val: boolean);
        /**
         * If the direction of the timeline should be automatically reversed
         * when reaching the end.
         */
        get autoReverse(): boolean;
        set autoReverse(val: boolean);
        /**
         * A delay, in milliseconds, that should be observed by the
         * timeline before actually starting.
         */
        get delay(): number;
        set delay(val: number);
        /**
         * The direction of the timeline, either %CLUTTER_TIMELINE_FORWARD or
         * %CLUTTER_TIMELINE_BACKWARD.
         */
        get direction(): TimelineDirection;
        set direction(val: TimelineDirection);
        /**
         * Duration of the timeline in milliseconds, depending on the
         * [property`Timeline:`frame-clock] value.
         */
        get duration(): number;
        set duration(val: number);
        /**
         * The frame clock driving the timeline.
         */
        get frame_clock(): FrameClock;
        set frame_clock(val: FrameClock);
        /**
         * The frame clock driving the timeline.
         */
        get frameClock(): FrameClock;
        set frameClock(val: FrameClock);
        /**
         * Controls the way a #ClutterTimeline computes the normalized progress.
         */
        get progress_mode(): AnimationMode;
        set progress_mode(val: AnimationMode);
        /**
         * Controls the way a #ClutterTimeline computes the normalized progress.
         */
        get progressMode(): AnimationMode;
        set progressMode(val: AnimationMode);
        /**
         * Defines how many times the timeline should repeat.
         *
         * If the repeat count is 0, the timeline does not repeat.
         *
         * If the repeat count is set to -1, the timeline will repeat until it is
         * stopped.
         */
        get repeat_count(): number;
        set repeat_count(val: number);
        /**
         * Defines how many times the timeline should repeat.
         *
         * If the repeat count is 0, the timeline does not repeat.
         *
         * If the repeat count is set to -1, the timeline will repeat until it is
         * stopped.
         */
        get repeatCount(): number;
        set repeatCount(val: number);

        // Constructors

        constructor(properties?: Partial<Timeline.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static new_for_actor(actor: Actor, duration_ms: number): Timeline;

        static new_for_frame_clock(frame_clock: FrameClock, duration_ms: number): Timeline;

        // Signals

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(signal: 'completed', callback: (_source: this) => void): number;
        connect_after(signal: 'completed', callback: (_source: this) => void): number;
        emit(signal: 'completed'): void;
        connect(
            signal: 'marker-reached',
            callback: (_source: this, marker_name: string, msecs: number) => void,
        ): number;
        connect_after(
            signal: 'marker-reached',
            callback: (_source: this, marker_name: string, msecs: number) => void,
        ): number;
        emit(signal: 'marker-reached', marker_name: string, msecs: number): void;
        connect(signal: 'new-frame', callback: (_source: this, msecs: number) => void): number;
        connect_after(signal: 'new-frame', callback: (_source: this, msecs: number) => void): number;
        emit(signal: 'new-frame', msecs: number): void;
        connect(signal: 'paused', callback: (_source: this) => void): number;
        connect_after(signal: 'paused', callback: (_source: this) => void): number;
        emit(signal: 'paused'): void;
        connect(signal: 'started', callback: (_source: this) => void): number;
        connect_after(signal: 'started', callback: (_source: this) => void): number;
        emit(signal: 'started'): void;
        connect(signal: 'stopped', callback: (_source: this, is_finished: boolean) => void): number;
        connect_after(signal: 'stopped', callback: (_source: this, is_finished: boolean) => void): number;
        emit(signal: 'stopped', is_finished: boolean): void;

        // Virtual methods

        /**
         * class handler for the #ClutterTimeline::completed signal
         */
        vfunc_completed(): void;
        /**
         * class handler for the #ClutterTimeline::marker-reached signal
         * @param marker_name
         * @param msecs
         */
        vfunc_marker_reached(marker_name: string, msecs: number): void;
        /**
         * class handler for the #ClutterTimeline::new-frame signal
         * @param msecs
         */
        vfunc_new_frame(msecs: number): void;
        /**
         * class handler for the #ClutterTimeline::paused signal
         */
        vfunc_paused(): void;
        /**
         * class handler for the #ClutterTimeline::started signal
         */
        vfunc_started(): void;
        /**
         * class handler for the #ClutterTimeline::stopped signal
         * @param is_finished
         */
        vfunc_stopped(is_finished: boolean): void;

        // Methods

        /**
         * Adds a named marker that will be hit when the timeline has reached
         * the specified `progress`.
         *
         * Markers are unique string identifiers for a given position on the
         * timeline. Once `timeline` reaches the given `progress` of its duration,
         * if will emit a [signal`Timeline:`:marker-reached] signal for each marker
         * attached to that particular point.
         *
         * A marker can be removed with [method`Timeline`.remove_marker]. The
         * timeline can be advanced to a marker using
         * [method`Timeline`.advance_to_marker].
         *
         * See also: [method`Timeline`.add_marker_at_time]
         * @param marker_name the unique name for this marker
         * @param progress the normalized value of the position of the martke
         */
        add_marker(marker_name: string, progress: number): void;
        /**
         * Adds a named marker that will be hit when the timeline has been
         * running for `msecs` milliseconds.
         *
         * Markers are unique string identifiers for a given position on the
         * timeline. Once `timeline` reaches the given `msecs,` it will emit
         * a [signal`Timeline:`:marker-reached] signal for each marker attached to that position.
         *
         * A marker can be removed with [method`Timeline`.remove_marker]. The
         * timeline can be advanced to a marker using
         * [method`Timeline`.advance_to_marker].
         *
         * See also: [method`Timeline`.add_marker]
         * @param marker_name the unique name for this marker
         * @param msecs position of the marker in milliseconds
         */
        add_marker_at_time(marker_name: string, msecs: number): void;
        /**
         * Advance timeline to the requested point. The point is given as a
         * time in milliseconds since the timeline started.
         *
         * The `timeline` will not emit the [signal`Timeline:`:new-frame]
         * signal for the given time. The first [signal`Timeline:`:new-frame] signal
         * after the call to [method`Timeline`.advance] will be emit the skipped markers.
         * @param msecs Time to advance to
         */
        advance(msecs: number): void;
        /**
         * Advances `timeline` to the time of the given `marker_name`.
         *
         * Like [method`Timeline`.advance], this function will not
         * emit the [signal`Timeline:`:new-frame] for the time where `marker_name`
         * is set, nor it will emit [signal`Timeline:`:marker-reached] for
         * `marker_name`.
         * @param marker_name the name of the marker
         */
        advance_to_marker(marker_name: string): void;
        /**
         * Get the actor the timeline is associated with.
         * @returns the associated #ClutterActor
         */
        get_actor(): Actor;
        /**
         * Retrieves the value set by [method`Timeline`.set_auto_reverse].
         * @returns %TRUE if the timeline should automatically reverse, and   %FALSE otherwise
         */
        get_auto_reverse(): boolean;
        /**
         * Retrieves the control points for the cubic bezier progress mode.
         * @returns %TRUE if the @timeline is using a cubic bezier progress   more, and %FALSE otherwise
         */
        get_cubic_bezier_progress(): [boolean, Graphene.Point, Graphene.Point];
        /**
         * Retrieves the current repeat for a timeline.
         *
         * Repeats start at 0.
         * @returns the current repeat
         */
        get_current_repeat(): number;
        /**
         * Retrieves the delay set using [method`Timeline`.set_delay].
         * @returns the delay in milliseconds.
         */
        get_delay(): number;
        /**
         * Retrieves the amount of time elapsed since the last
         * [signal`Timeline:`:new-frame] signal.
         *
         * This function is only useful inside handlers for the ::new-frame
         * signal, and its behaviour is undefined if the timeline is not
         * playing.
         * @returns the amount of time in milliseconds elapsed since the last frame
         */
        get_delta(): number;
        /**
         * Retrieves the direction of the timeline set with
         * [method`Timeline`.set_direction].
         * @returns the direction of the timeline
         */
        get_direction(): TimelineDirection;
        /**
         * Retrieves the duration of a #ClutterTimeline in milliseconds.
         * See [method`Timeline`.set_duration].
         * @returns the duration of the timeline, in milliseconds.
         */
        get_duration(): number;
        /**
         * Retrieves the full duration of the `timeline,` taking into account the
         * current value of the [property`Timeline:`repeat-count] property.
         *
         * If the [property`Timeline:`repeat-count] property is set to -1, this function
         * will return %G_MAXINT64.
         *
         * The returned value is to be considered a hint, and it's only valid
         * as long as the `timeline` hasn't been changed.
         * @returns the full duration of the #ClutterTimeline
         */
        get_duration_hint(): number;
        /**
         * Request the current time position of the timeline.
         * @returns current elapsed time in milliseconds.
         */
        get_elapsed_time(): number;
        /**
         * The position of the timeline in a normalized [-1, 2] interval.
         *
         * The return value of this function is determined by the progress
         * mode set using [method`Timeline`.set_progress_mode], or by the
         * progress function set using [method`Timeline`.set_progress_func].
         * @returns the normalized current position in the timeline.
         */
        get_progress(): number;
        /**
         * Retrieves the progress mode set using [method`Timeline`.set_progress_mode]
         * or [method`Timeline`.set_progress_func].
         * @returns a #ClutterAnimationMode
         */
        get_progress_mode(): AnimationMode;
        /**
         * Retrieves the number set using [method`Timeline`.set_repeat_count].
         * @returns the number of repeats
         */
        get_repeat_count(): number;
        /**
         * Retrieves the parameters of the step progress mode used by `timeline`.
         * @returns %TRUE if the @timeline is using a step progress   mode, and %FALSE otherwise
         */
        get_step_progress(): [boolean, number, StepMode];
        /**
         * Checks whether `timeline` has a marker set with the given name.
         * @param marker_name the name of the marker
         * @returns %TRUE if the marker was found
         */
        has_marker(marker_name: string): boolean;
        /**
         * Queries state of a #ClutterTimeline.
         * @returns %TRUE if timeline is currently playing
         */
        is_playing(): boolean;
        /**
         * Retrieves the list of markers at time `msecs`. If `msecs` is a
         * negative integer, all the markers attached to `timeline` will be
         * returned.
         * @param msecs the time to check, or -1
         * @returns a newly allocated, %NULL terminated string array containing the names   of the markers. Use [func@GLib.strfreev] when done.
         */
        list_markers(msecs: number): string[];
        /**
         * Pauses the #ClutterTimeline on current frame
         */
        pause(): void;
        /**
         * Removes `marker_name,` if found, from `timeline`.
         * @param marker_name the name of the marker to remove
         */
        remove_marker(marker_name: string): void;
        /**
         * Rewinds #ClutterTimeline to the first frame if its direction is
         * %CLUTTER_TIMELINE_FORWARD and the last frame if it is
         * %CLUTTER_TIMELINE_BACKWARD.
         */
        rewind(): void;
        /**
         * Set the actor the timeline is associated with.
         * @param actor a #ClutterActor
         */
        set_actor(actor?: Actor | null): void;
        /**
         * Sets whether `timeline` should reverse the direction after the
         * emission of the [signal`Timeline:`:completed] signal.
         *
         * Setting the [property`Timeline:`auto-reverse] property to %TRUE is the
         * equivalent of connecting a callback to the [signal`Timeline:`:completed]
         * signal and changing the direction of the timeline from that callback;
         * for instance, this code:
         *
         * ```c
         * static void
         * reverse_timeline (ClutterTimeline *timeline)
         * {
         *   ClutterTimelineDirection dir = clutter_timeline_get_direction (timeline);
         *
         *   if (dir == CLUTTER_TIMELINE_FORWARD)
         *     dir = CLUTTER_TIMELINE_BACKWARD;
         *   else
         *     dir = CLUTTER_TIMELINE_FORWARD;
         *
         *   clutter_timeline_set_direction (timeline, dir);
         * }
         * ...
         *   timeline = clutter_timeline_new_for_actor (some_actor, 1000);
         *   clutter_timeline_set_repeat_count (timeline, -1);
         *   g_signal_connect (timeline, "completed",
         *                     G_CALLBACK (reverse_timeline),
         *                     NULL);
         * ```
         *
         * can be effectively replaced by:
         *
         * ```c
         *   timeline = clutter_timeline_new_for_actor (some_actor, 1000);
         *   clutter_timeline_set_repeat_count (timeline, -1);
         *   clutter_timeline_set_auto_reverse (timeline);
         * ```
         * @param reverse %TRUE if the @timeline should reverse the direction
         */
        set_auto_reverse(reverse: boolean): void;
        /**
         * Sets the [property`Timeline:`progress-mode] of `timeline`
         * to %CLUTTER_CUBIC_BEZIER, and sets the two control
         * points for the cubic bezier.
         *
         * The cubic bezier curve is between (0, 0) and (1, 1). The X coordinate
         * of the two control points must be in the [ 0, 1 ] range, while the
         * Y coordinate of the two control points can exceed this range.
         * @param c_1 the first control point for the cubic bezier
         * @param c_2 the second control point for the cubic bezier
         */
        set_cubic_bezier_progress(c_1: Graphene.Point, c_2: Graphene.Point): void;
        /**
         * Sets the delay, in milliseconds, before `timeline` should start.
         * @param msecs delay in milliseconds
         */
        set_delay(msecs: number): void;
        /**
         * Sets the direction of `timeline,` either %CLUTTER_TIMELINE_FORWARD or
         * %CLUTTER_TIMELINE_BACKWARD.
         * @param direction the direction of the timeline
         */
        set_direction(direction: TimelineDirection | null): void;
        /**
         * Sets the duration of the timeline, in milliseconds. The speed
         * of the timeline depends on the [property`Timeline:`frame-clock] setting.
         * @param msecs duration of the timeline in milliseconds
         */
        set_duration(msecs: number): void;
        set_frame_clock(frame_clock: FrameClock): void;
        /**
         * Sets a custom progress function for `timeline`. The progress function will
         * be called by [method`Timeline`.get_progress] and will be used to compute
         * the progress value based on the elapsed time and the total duration of the
         * timeline.
         *
         * If `func` is not %NULL, the [property`Timeline:`progress-mode] property will
         * be set to %CLUTTER_CUSTOM_MODE.
         *
         * If `func` is %NULL, any previously set progress function will be unset, and
         * the [property`Timeline:`progress-mode] property will be set to %CLUTTER_LINEAR.
         * @param func a progress function, or %NULL
         */
        set_progress_func(func?: TimelineProgressFunc | null): void;
        /**
         * Sets the progress function using a value from the [enum`AnimationMode]`
         * enumeration. The `mode` cannot be %CLUTTER_CUSTOM_MODE or bigger than
         * %CLUTTER_ANIMATION_LAST.
         * @param mode the progress mode, as a #ClutterAnimationMode
         */
        set_progress_mode(mode: AnimationMode | null): void;
        /**
         * Sets the number of times the `timeline` should repeat.
         *
         * If `count` is 0, the timeline never repeats.
         *
         * If `count` is -1, the timeline will always repeat until
         * it's stopped.
         * @param count the number of times the timeline should repeat
         */
        set_repeat_count(count: number): void;
        /**
         * Sets the [property`Timeline:`progress-mode] of the `timeline` to %CLUTTER_STEPS
         * and provides the parameters of the step function.
         * @param n_steps the number of steps
         * @param step_mode whether the change should happen at the start   or at the end of the step
         */
        set_step_progress(n_steps: number, step_mode: StepMode | null): void;
        /**
         * Advance timeline by the requested time in milliseconds
         * @param msecs Amount of time to skip
         */
        skip(msecs: number): void;
        /**
         * Starts the #ClutterTimeline playing.
         */
        start(): void;
        /**
         * Stops the #ClutterTimeline and moves to frame 0
         */
        stop(): void;
    }

    class TransformNode extends PaintNode {
        static $gtype: GObject.GType<TransformNode>;

        // Constructors

        _init(...args: any[]): void;

        static ['new'](projection: Graphene.Matrix): TransformNode;
    }

    module Transition {
        // Constructor properties interface

        interface ConstructorProps extends Timeline.ConstructorProps {
            animatable: Animatable;
            interval: Interval;
            remove_on_complete: boolean;
            removeOnComplete: boolean;
        }
    }

    /**
     * Transition between two values
     *
     * #ClutterTransition is an abstract subclass of [class`Timeline]` that
     * computes the interpolation between two values, stored by a [class`Interval]`.
     */
    abstract class Transition extends Timeline {
        static $gtype: GObject.GType<Transition>;

        // Properties

        /**
         * The [iface`Animatable]` instance currently being animated.
         */
        get animatable(): Animatable;
        set animatable(val: Animatable);
        /**
         * The [class`Interval]` used to describe the initial and final states
         * of the transition.
         */
        get interval(): Interval;
        set interval(val: Interval);
        /**
         * Whether the #ClutterTransition should be automatically detached
         * from the [property`Transition:`animatable] instance whenever the
         * [signal`Timeline:`:stopped] signal is emitted.
         *
         * The [property`Transition:`remove-on-complete] property takes into
         * account the value of the [property`Timeline:`repeat-count] property,
         * and it only detaches the transition if the transition is not
         * repeating.
         */
        get remove_on_complete(): boolean;
        set remove_on_complete(val: boolean);
        /**
         * Whether the #ClutterTransition should be automatically detached
         * from the [property`Transition:`animatable] instance whenever the
         * [signal`Timeline:`:stopped] signal is emitted.
         *
         * The [property`Transition:`remove-on-complete] property takes into
         * account the value of the [property`Timeline:`repeat-count] property,
         * and it only detaches the transition if the transition is not
         * repeating.
         */
        get removeOnComplete(): boolean;
        set removeOnComplete(val: boolean);

        // Constructors

        constructor(properties?: Partial<Transition.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Virtual methods

        /**
         * virtual function; called when a transition is attached to
         *   a #ClutterAnimatable instance
         * @param animatable
         */
        vfunc_attached(animatable: Animatable): void;
        /**
         * virtual function; called each frame to compute and apply
         *   the interpolation of the interval
         * @param animatable
         * @param interval
         * @param progress
         */
        vfunc_compute_value(animatable: Animatable, interval: Interval, progress: number): void;
        /**
         * virtual function; called when a transition is detached from
         *   a #ClutterAnimatable instance
         * @param animatable
         */
        vfunc_detached(animatable: Animatable): void;

        // Methods

        /**
         * Retrieves the [iface`Animatable]` set using [method`Transition`.set_animatable].
         * @returns a [iface@Animatable], or %NULL; the returned   animatable is owned by the #ClutterTransition, and it should not be freed   directly.
         */
        get_animatable(): Animatable;
        /**
         * Retrieves the interval set using [method`Transition`.set_interval]
         * @returns a [class@Interval], or %NULL; the returned   interval is owned by the #ClutterTransition and it should not be freed   directly
         */
        get_interval(): Interval;
        /**
         * Retrieves the value of the [property`Transition:`remove-on-complete] property.
         * @returns %TRUE if the @transition should be detached when complete,   and %FALSE otherwise
         */
        get_remove_on_complete(): boolean;
        /**
         * Sets the [property`Transition:`animatable] property.
         *
         * The `transition` will acquire a reference to the `animatable` instance,
         * and will call the [vfunc`Transition`.attached] virtual function.
         *
         * If an existing [iface`Animatable]` is attached to `transition,` the
         * reference will be released, and the [vfunc`Transition`.detached]
         * virtual function will be called.
         * @param animatable a #ClutterAnimatable, or %NULL
         */
        set_animatable(animatable?: Animatable | null): void;
        /**
         * Sets the initial value of the transition.
         *
         * This is a convenience function that will either create the
         * [class`Interval]` used by `transition,` or will update it if
         * the [property`Transition:`interval] is already set.
         *
         * This function will copy the contents of `value,` so it is
         * safe to call [method`GObject`.Value.unset] after it returns.
         *
         * If `transition` already has a [property`Transition:`interval] set,
         * then `value` must hold the same type, or a transformable type,
         * as the interval's [property`Interval:`value-type] property.
         *
         * This function is meant to be used by language bindings.
         * @param value a #GValue with the initial value of the transition
         */
        set_from(value: GObject.Value | any): void;
        /**
         * Sets the [property`Transition:`interval] property using `interval`.
         *
         * The `transition` will acquire a reference on the `interval,` sinking
         * the floating flag on it if necessary.
         * @param interval a #ClutterInterval, or %NULL
         */
        set_interval(interval?: Interval | null): void;
        /**
         * Sets whether `transition` should be detached from the [iface`Animatable]`
         * set using [method`Transition`.set_animatable] when the
         * [signal`Timeline:`:completed] signal is emitted.
         * @param remove_complete whether to detach @transition when complete
         */
        set_remove_on_complete(remove_complete: boolean): void;
        /**
         * Sets the final value of the transition.
         *
         * This is a convenience function that will either create the
         * #ClutterInterval used by `transition,` or will update it if
         * the [property`Transition:`interval] is already set.
         *
         * This function will copy the contents of `value,` so it is
         * safe to call [method`GObject`.Value.unset] after it returns.
         *
         * If `transition` already has a [property`Transition:`interval] set,
         * then `value` must hold the same type, or a transformable type,
         * as the interval's [property`Interval:`value-type] property.
         *
         * This function is meant to be used by language bindings.
         * @param value a #GValue with the final value of the transition
         */
        set_to(value: GObject.Value | any): void;
    }

    module TransitionGroup {
        // Constructor properties interface

        interface ConstructorProps extends Transition.ConstructorProps {}
    }

    /**
     * Group transitions together
     *
     * The #ClutterTransitionGroup allows running multiple [class`Transition]`
     * instances concurrently.
     *
     * The transitions inside a group will run within the boundaries of the
     * group; for instance, if a transition has a duration of 10 seconds, and
     * the group that contains it has a duration of 5 seconds, only the first
     * 5 seconds of the transition will be played.
     */
    class TransitionGroup extends Transition {
        static $gtype: GObject.GType<TransitionGroup>;

        // Constructors

        constructor(properties?: Partial<TransitionGroup.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): TransitionGroup;

        // Methods

        /**
         * Adds `transition` to `group`.
         *
         * This function acquires a reference on `transition` that will be released
         * when calling [method`TransitionGroup`.remove_transition].
         * @param transition a #ClutterTransition
         */
        add_transition(transition: Transition): void;
        /**
         * Removes all transitions from `group`.
         *
         * This function releases the reference acquired when calling
         * [method`TransitionGroup`.add_transition].
         */
        remove_all(): void;
        /**
         * Removes `transition` from `group`.
         *
         * This function releases the reference acquired on `transition` when
         * calling [method`TransitionGroup`.add_transition].
         * @param transition a #ClutterTransition
         */
        remove_transition(transition: Transition): void;
    }

    module VirtualInputDevice {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            device_type: InputDeviceType;
            deviceType: InputDeviceType;
            seat: Seat;
        }
    }

    class VirtualInputDevice extends GObject.Object {
        static $gtype: GObject.GType<VirtualInputDevice>;

        // Properties

        get device_type(): InputDeviceType;
        get deviceType(): InputDeviceType;
        get seat(): Seat;

        // Constructors

        constructor(properties?: Partial<VirtualInputDevice.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Virtual methods

        vfunc_notify_absolute_motion(time_us: number, x: number, y: number): void;
        vfunc_notify_button(time_us: number, button: number, button_state: ButtonState): void;
        vfunc_notify_discrete_scroll(time_us: number, direction: ScrollDirection, scroll_source: ScrollSource): void;
        vfunc_notify_key(time_us: number, key: number, key_state: KeyState): void;
        vfunc_notify_keyval(time_us: number, keyval: number, key_state: KeyState): void;
        vfunc_notify_relative_motion(time_us: number, dx: number, dy: number): void;
        vfunc_notify_scroll_continuous(
            time_us: number,
            dx: number,
            dy: number,
            scroll_source: ScrollSource,
            finish_flags: ScrollFinishFlags,
        ): void;
        vfunc_notify_touch_down(time_us: number, slot: number, x: number, y: number): void;
        vfunc_notify_touch_motion(time_us: number, slot: number, x: number, y: number): void;
        vfunc_notify_touch_up(time_us: number, slot: number): void;

        // Methods

        get_device_type(): number;
        get_seat(): Seat;
        notify_absolute_motion(time_us: number, x: number, y: number): void;
        notify_button(time_us: number, button: number, button_state: ButtonState | null): void;
        notify_discrete_scroll(
            time_us: number,
            direction: ScrollDirection | null,
            scroll_source: ScrollSource | null,
        ): void;
        notify_key(time_us: number, key: number, key_state: KeyState | null): void;
        notify_keyval(time_us: number, keyval: number, key_state: KeyState | null): void;
        notify_relative_motion(time_us: number, dx: number, dy: number): void;
        notify_scroll_continuous(
            time_us: number,
            dx: number,
            dy: number,
            scroll_source: ScrollSource | null,
            finish_flags: ScrollFinishFlags | null,
        ): void;
        notify_touch_down(time_us: number, slot: number, x: number, y: number): void;
        notify_touch_motion(time_us: number, slot: number, x: number, y: number): void;
        notify_touch_up(time_us: number, slot: number): void;
    }

    module ZoomAction {
        // Signal callback interfaces

        interface Zoom {
            (actor: Actor, focal_point: Graphene.Point, factor: number): boolean;
        }

        // Constructor properties interface

        interface ConstructorProps extends GestureAction.ConstructorProps {}
    }

    /**
     * Action enabling zooming on actors
     *
     * #ClutterZoomAction is a sub-class of [class`GestureAction]` that
     * implements all the necessary logic for zooming actors using a "pinch"
     * gesture between two touch points.
     *
     * The simplest usage of [class`ZoomAction]` consists in adding it to
     * a [class`Actor]` and setting it as reactive; for instance, the following
     * code:
     *
     * ```c
     *   clutter_actor_add_action (actor, clutter_zoom_action_new ());
     *   clutter_actor_set_reactive (actor, TRUE);
     * ```
     *
     * will automatically result in the actor to be scale according to the
     * distance between two touch points.
     */
    class ZoomAction extends GestureAction {
        static $gtype: GObject.GType<ZoomAction>;

        // Constructors

        constructor(properties?: Partial<ZoomAction.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): ZoomAction;

        // Signals

        connect(id: string, callback: (...args: any[]) => any): number;
        connect_after(id: string, callback: (...args: any[]) => any): number;
        emit(id: string, ...args: any[]): void;
        connect(
            signal: 'zoom',
            callback: (_source: this, actor: Actor, focal_point: Graphene.Point, factor: number) => boolean,
        ): number;
        connect_after(
            signal: 'zoom',
            callback: (_source: this, actor: Actor, focal_point: Graphene.Point, factor: number) => boolean,
        ): number;
        emit(signal: 'zoom', actor: Actor, focal_point: Graphene.Point, factor: number): void;

        // Methods

        /**
         * Retrieves the focal point of the current zoom
         */
        get_focal_point(): Graphene.Point;
        /**
         * Retrieves the focal point relative to the actor's coordinates of
         * the current zoom
         */
        get_transformed_focal_point(): Graphene.Point;
    }

    type ActionClass = typeof Action;
    type ActorAccessibleClass = typeof ActorAccessible;
    abstract class ActorAccessiblePrivate {
        static $gtype: GObject.GType<ActorAccessiblePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    /**
     * Bounding box of an actor.
     *
     * The coordinates of the top left and right bottom corners
     * of an actor. The coordinates of the two points are expressed in
     * pixels with sub-pixel precision
     */
    class ActorBox {
        static $gtype: GObject.GType<ActorBox>;

        // Fields

        x1: number;
        y1: number;
        x2: number;
        y2: number;

        // Constructors

        constructor(
            properties?: Partial<{
                x1: number;
                y1: number;
                x2: number;
                y2: number;
            }>,
        );
        _init(...args: any[]): void;

        static ['new'](x_1: number, y_1: number, x_2: number, y_2: number): ActorBox;

        // Static methods

        /**
         * Allocates a new [struct`ActorBox]`.
         */
        static alloc(): ActorBox;

        // Methods

        /**
         * Clamps the components of `box` to the nearest integer
         */
        clamp_to_pixel(): void;
        /**
         * Checks whether a point with `x,` `y` coordinates is contained
         * within `box`
         * @param x X coordinate of the point
         * @param y Y coordinate of the point
         * @returns %TRUE if the point is contained by the #ClutterActorBox
         */
        contains(x: number, y: number): boolean;
        /**
         * Copies `box`
         * @returns a newly allocated copy of #ClutterActorBox. Use   [method@ActorBox.free] to free the allocated resources
         */
        copy(): ActorBox;
        /**
         * Checks `box_a` and `box_b` for equality
         * @param box_b a #ClutterActorBox
         * @returns %TRUE if the passed #ClutterActorBox are equal
         */
        equal(box_b: ActorBox): boolean;
        /**
         * Frees a #ClutterActorBox allocated using [ctor`ActorBox`.new]
         * or [method`ActorBox`.copy].
         */
        free(): void;
        /**
         * Calculates the bounding box represented by the four vertices; for details
         * of the vertex array see [method`Actor`.get_abs_allocation_vertices].
         * @param verts array of four #graphene_point3d_t
         */
        from_vertices(verts: Graphene.Point3D[]): void;
        /**
         * Retrieves the area of `box`
         * @returns the area of a #ClutterActorBox, in pixels
         */
        get_area(): number;
        /**
         * Retrieves the height of the `box`
         * @returns the height of the box
         */
        get_height(): number;
        /**
         * Retrieves the origin of `box`
         */
        get_origin(): [number, number];
        /**
         * Retrieves the size of `box`
         */
        get_size(): [number, number];
        /**
         * Retrieves the width of the `box`
         * @returns the width of the box
         */
        get_width(): number;
        /**
         * Retrieves the X coordinate of the origin of `box`
         * @returns the X coordinate of the origin
         */
        get_x(): number;
        /**
         * Retrieves the Y coordinate of the origin of `box`
         * @returns the Y coordinate of the origin
         */
        get_y(): number;
        /**
         * Initializes `box` with the given coordinates.
         * @param x_1 X coordinate of the top left point
         * @param y_1 Y coordinate of the top left point
         * @param x_2 X coordinate of the bottom right point
         * @param y_2 Y coordinate of the bottom right point
         * @returns the initialized #ClutterActorBox
         */
        init(x_1: number, y_1: number, x_2: number, y_2: number): ActorBox;
        /**
         * Initializes `box` with the given origin and size.
         * @param x X coordinate of the origin
         * @param y Y coordinate of the origin
         * @param width width of the box
         * @param height height of the box
         */
        init_rect(x: number, y: number, width: number, height: number): void;
        /**
         * Interpolates between `initial` and `final` `ClutterActorBox`es
         * using `progress`
         * @param _final the final #ClutterActorBox
         * @param progress the interpolation progress
         */
        interpolate(_final: ActorBox, progress: number): ActorBox;
        /**
         * Checks if `box` has been initialized, a #ClutterActorBox is uninitialized
         * if it has a size of -1 at an origin of 0, 0.
         * @returns %TRUE if the box is uninitialized, %FALSE if it isn't
         */
        is_initialized(): boolean;
        /**
         * Rescale the `box` by provided `scale` factor.
         * @param scale scale factor for resizing this box
         */
        scale(scale: number): void;
        /**
         * Changes the origin of `box,` maintaining the size of the #ClutterActorBox.
         * @param x the X coordinate of the new origin
         * @param y the Y coordinate of the new origin
         */
        set_origin(x: number, y: number): void;
        /**
         * Sets the size of `box,` maintaining the origin of the #ClutterActorBox.
         * @param width the new width
         * @param height the new height
         */
        set_size(width: number, height: number): void;
        /**
         * Unions the two boxes `a` and `b` and stores the result in `result`.
         * @param b the second #ClutterActorBox
         */
        union(b: ActorBox): ActorBox;
    }

    type ActorClass = typeof Actor;
    /**
     * An iterator structure that allows to efficiently iterate over a
     * section of the scene graph.
     *
     * The contents of the #ClutterActorIter structure
     * are private and should only be accessed using the provided API.
     */
    class ActorIter {
        static $gtype: GObject.GType<ActorIter>;

        // Constructors

        constructor(properties?: Partial<{}>);
        _init(...args: any[]): void;

        // Methods

        /**
         * Safely destroys the #ClutterActor currently pointer to by the iterator
         * from its parent.
         *
         * This function can only be called after [method`Clutter`.ActorIter.next] or
         * [method`Clutter`.ActorIter.prev] returned %TRUE, and cannot be called more
         * than once for the same actor.
         *
         * This function will call [method`Clutter`.Actor.destroy] internally.
         */
        destroy(): void;
        /**
         * Initializes a #ClutterActorIter, which can then be used to iterate
         * efficiently over a section of the scene graph, and associates it
         * with `root`.
         *
         * Modifying the scene graph section that contains `root` will invalidate
         * the iterator.
         *
         * ```c
         *   ClutterActorIter iter;
         *   ClutterActor *child;
         *
         *   clutter_actor_iter_init (&iter, container);
         *   while (clutter_actor_iter_next (&iter, &child))
         *     {
         *       // do something with child
         *     }
         * ```
         * @param root a #ClutterActor
         */
        init(root: Actor): void;
        /**
         * Checks whether a #ClutterActorIter is still valid.
         *
         * An iterator is considered valid if it has been initialized, and
         * if the #ClutterActor that it refers to hasn't been modified after
         * the initialization.
         * @returns %TRUE if the iterator is valid, and %FALSE otherwise
         */
        is_valid(): boolean;
        /**
         * Advances the `iter` and retrieves the next child of the root #ClutterActor
         * that was used to initialize the #ClutterActorIterator.
         *
         * If the iterator can advance, this function returns %TRUE and sets the
         * `child` argument.
         *
         * If the iterator cannot advance, this function returns %FALSE, and
         * the contents of `child` are undefined.
         * @returns %TRUE if the iterator could advance, and %FALSE otherwise.
         */
        next(): [boolean, Actor | null];
        /**
         * Advances the `iter` and retrieves the previous child of the root
         * #ClutterActor that was used to initialize the #ClutterActorIterator.
         *
         * If the iterator can advance, this function returns %TRUE and sets the
         * `child` argument.
         *
         * If the iterator cannot advance, this function returns %FALSE, and
         * the contents of `child` are undefined.
         * @returns %TRUE if the iterator could advance, and %FALSE otherwise.
         */
        prev(): [boolean, Actor | null];
        /**
         * Safely removes the #ClutterActor currently pointer to by the iterator
         * from its parent.
         *
         * This function can only be called after [method`Clutter`.ActorIter.next] or
         *   [method`Clutter`.ActorIter.prev] returned %TRUE, and cannot be called more
         * than once for the same actor.
         *
         * This function will call [method`Clutter`.Actor.remove_child] internally.
         */
        remove(): void;
    }

    type ActorMetaClass = typeof ActorMeta;
    abstract class ActorMetaPrivate {
        static $gtype: GObject.GType<ActorMetaPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type ActorNodeClass = typeof ActorNode;
    abstract class ActorPrivate {
        static $gtype: GObject.GType<ActorPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type AlignConstraintClass = typeof AlignConstraint;
    type AnimatableInterface = typeof Animatable;
    abstract class AnyEvent {
        static $gtype: GObject.GType<AnyEvent>;

        // Constructors

        _init(...args: any[]): void;
    }

    type BackendClass = typeof Backend;
    type BinLayoutClass = typeof BinLayout;
    type BindConstraintClass = typeof BindConstraint;
    type BindingPoolClass = typeof BindingPool;
    type BlitNodeClass = typeof BlitNode;
    type BlurEffectClass = typeof BlurEffect;
    type BlurNodeClass = typeof BlurNode;
    type BoxLayoutClass = typeof BoxLayout;
    type BrightnessContrastEffectClass = typeof BrightnessContrastEffect;
    abstract class ButtonEvent {
        static $gtype: GObject.GType<ButtonEvent>;

        // Constructors

        _init(...args: any[]): void;
    }

    type ClickActionClass = typeof ClickAction;
    abstract class ClickActionPrivate {
        static $gtype: GObject.GType<ClickActionPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type ClipNodeClass = typeof ClipNode;
    type CloneClass = typeof Clone;
    type ColorManagerClass = typeof ColorManager;
    type ColorNodeClass = typeof ColorNode;
    type ColorStateClass = typeof ColorState;
    type ColorizeEffectClass = typeof ColorizeEffect;
    type ConstraintClass = typeof Constraint;
    type ContentInterface = typeof Content;
    type ContextClass = typeof Context;
    abstract class CrossingEvent {
        static $gtype: GObject.GType<CrossingEvent>;

        // Constructors

        _init(...args: any[]): void;
    }

    type DeformEffectClass = typeof DeformEffect;
    type DesaturateEffectClass = typeof DesaturateEffect;
    abstract class DeviceEvent {
        static $gtype: GObject.GType<DeviceEvent>;

        // Constructors

        _init(...args: any[]): void;
    }

    type EffectClass = typeof Effect;
    /**
     * The #ClutterEventSequence structure is an opaque
     * type used to denote the event sequence of a touch event.
     */
    abstract class EventSequence {
        static $gtype: GObject.GType<EventSequence>;

        // Constructors

        _init(...args: any[]): void;

        // Methods

        get_slot(): number;
    }

    type FixedLayoutClass = typeof FixedLayout;
    type FlowLayoutClass = typeof FlowLayout;
    abstract class Frame {
        static $gtype: GObject.GType<Frame>;

        // Constructors

        _init(...args: any[]): void;

        // Methods

        get_count(): number;
        get_frame_deadline(frame_deadline_us: number): boolean;
        get_target_presentation_time(target_presentation_time_us: number): boolean;
        has_result(): boolean;
        ref(): Frame;
        set_result(result: FrameResult | null): void;
        unref(): void;
    }

    type FrameClockClass = typeof FrameClock;
    type GestureActionClass = typeof GestureAction;
    abstract class GestureActionPrivate {
        static $gtype: GObject.GType<GestureActionPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    type GestureClass = typeof Gesture;
    type GrabClass = typeof Grab;
    type GridLayoutClass = typeof GridLayout;
    abstract class IMEvent {
        static $gtype: GObject.GType<IMEvent>;

        // Constructors

        _init(...args: any[]): void;
    }

    type ImageClass = typeof Image;
    type InputDeviceClass = typeof InputDevice;
    type InputDeviceToolClass = typeof InputDeviceTool;
    type InputFocusClass = typeof InputFocus;
    type InputMethodClass = typeof InputMethod;
    type IntervalClass = typeof Interval;
    abstract class KeyEvent {
        static $gtype: GObject.GType<KeyEvent>;

        // Constructors

        _init(...args: any[]): void;
    }

    type KeyframeTransitionClass = typeof KeyframeTransition;
    type KeymapClass = typeof Keymap;
    type LayerNodeClass = typeof LayerNode;
    type LayoutManagerClass = typeof LayoutManager;
    type LayoutMetaClass = typeof LayoutMeta;
    /**
     * A representation of the components of a margin.
     */
    class Margin {
        static $gtype: GObject.GType<Margin>;

        // Fields

        left: number;
        right: number;
        top: number;
        bottom: number;

        // Constructors

        constructor(
            properties?: Partial<{
                left: number;
                right: number;
                top: number;
                bottom: number;
            }>,
        );
        _init(...args: any[]): void;

        static ['new'](): Margin;

        // Methods

        /**
         * Creates a new #ClutterMargin and copies the contents of `margin_` into
         * the newly created structure.
         * @returns a copy of the #ClutterMargin.
         */
        copy(): Margin;
        /**
         * Frees the resources allocated by [ctor`Clutter`.Margin.new] and
         * [method`Clutter`.Margin.copy].
         */
        free(): void;
    }

    abstract class MotionEvent {
        static $gtype: GObject.GType<MotionEvent>;

        // Constructors

        _init(...args: any[]): void;
    }

    type OffscreenEffectClass = typeof OffscreenEffect;
    abstract class PadButtonEvent {
        static $gtype: GObject.GType<PadButtonEvent>;

        // Constructors

        _init(...args: any[]): void;
    }

    abstract class PadRingEvent {
        static $gtype: GObject.GType<PadRingEvent>;

        // Constructors

        _init(...args: any[]): void;
    }

    abstract class PadStripEvent {
        static $gtype: GObject.GType<PadStripEvent>;

        // Constructors

        _init(...args: any[]): void;
    }

    type PageTurnEffectClass = typeof PageTurnEffect;
    class PaintContext {
        static $gtype: GObject.GType<PaintContext>;

        // Constructors

        constructor(
            framebuffer: Cogl.Framebuffer,
            redraw_clip: Mtk.Region,
            paint_flags: PaintFlag,
            color_state: ColorState,
        );
        _init(...args: any[]): void;

        // Methods

        destroy(): void;
        get_framebuffer(): Cogl.Framebuffer;
        get_redraw_clip(): Mtk.Region;
        pop_color_state(): void;
        pop_framebuffer(): void;
        push_color_state(color_state: ColorState): void;
        push_framebuffer(framebuffer: Cogl.Framebuffer): void;
        ref(): PaintContext;
        unref(): void;
    }

    type PaintNodeClass = typeof PaintNode;
    abstract class PaintNodePrivate {
        static $gtype: GObject.GType<PaintNodePrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    /**
     * A #ClutterPaintVolume represents a bounding volume whose internal
     * representation isn't defined but can be set and queried in terms
     * of an axis aligned bounding box.
     *
     * A #ClutterPaintVolume for a [class`Actor]`
     * is defined to be relative from the current actor modelview matrix.
     *
     * Other internal representation and methods for describing the
     * bounding volume may be added in the future.
     */
    abstract class PaintVolume {
        static $gtype: GObject.GType<PaintVolume>;

        // Constructors

        _init(...args: any[]): void;

        // Methods

        /**
         * Copies `pv` into a new #ClutterPaintVolume
         * @returns a newly allocated copy of a #ClutterPaintVolume
         */
        copy(): PaintVolume;
        /**
         * Frees the resources allocated by `pv`
         */
        free(): void;
        /**
         * Retrieves the depth of the volume's, axis aligned, bounding box.
         *
         * In other words; this takes into account what actor's coordinate
         * space `pv` belongs too and conceptually fits an axis aligned box
         * around the volume. It returns the size of that bounding box as
         * measured along the z-axis.
         *
         * If, for example, [method`Actor`.get_transformed_paint_volume]
         * is used to transform a 2D child actor that is 100px wide, 100px
         * high and 0px deep into container coordinates then the depth might
         * not simply be 0px if the child actor has a 3D rotation applied to
         * it.
         *
         * Remember: if [method`Actor`.get_transformed_paint_volume] is
         * used then the transformed volume will be defined relative to the
         * container actor and in container coordinates a 2D child actor
         * can have a 3D bounding volume.
         *
         * There are no accuracy guarantees for the reported depth,
         * except that it must always be greater than, or equal to, the actor's
         * depth. This is because actors may report simple, loose fitting paint
         * volumes for efficiency.
         * @returns the depth, in units of @pv's local coordinate system.
         */
        get_depth(): number;
        /**
         * Retrieves the height of the volume's, axis aligned, bounding box.
         *
         * In other words; this takes into account what actor's coordinate
         * space `pv` belongs too and conceptually fits an axis aligned box
         * around the volume. It returns the size of that bounding box as
         * measured along the y-axis.
         *
         * If, for example, [method`Actor`.get_transformed_paint_volume]
         * is used to transform a 2D child actor that is 100px wide, 100px
         * high and 0px deep into container coordinates then the height might
         * not simply be 100px if the child actor has a 3D rotation applied to
         * it.
         *
         * Remember: if [method`Actor`.get_transformed_paint_volume] is
         * used then a transformed child volume will be defined relative to the
         * ancestor container actor and so a 2D child actor
         * can have a 3D bounding volume.
         *
         * There are no accuracy guarantees for the reported height,
         * except that it must always be greater than, or equal to, the actor's
         * height. This is because actors may report simple, loose fitting paint
         * volumes for efficiency.
         * @returns the height, in units of @pv's local coordinate system.
         */
        get_height(): number;
        /**
         * Retrieves the origin of the #ClutterPaintVolume.
         */
        get_origin(): Graphene.Point3D;
        /**
         * Retrieves the width of the volume's, axis aligned, bounding box.
         *
         * In other words; this takes into account what actor's coordinate
         * space `pv` belongs too and conceptually fits an axis aligned box
         * around the volume. It returns the size of that bounding box as
         * measured along the x-axis.
         *
         * If, for example, [method`Actor`.get_transformed_paint_volume]
         * is used to transform a 2D child actor that is 100px wide, 100px
         * high and 0px deep into container coordinates then the width might
         * not simply be 100px if the child actor has a 3D rotation applied to
         * it.
         *
         * Remember: if [method`Actor`.get_transformed_paint_volume] is
         * used then a transformed child volume will be defined relative to the
         * ancestor container actor and so a 2D child actor can have a 3D
         * bounding volume.
         *
         * There are no accuracy guarantees for the reported width,
         * except that it must always be greater than, or equal to, the
         * actor's width. This is because actors may report simple, loose
         * fitting paint volumes for efficiency.
         * @returns the width, in units of @pv's local coordinate system.
         */
        get_width(): number;
        /**
         * Sets the depth of the paint volume. The depth is measured along
         * the z axis in the actor coordinates that `pv` is associated with.
         * @param depth the depth of the paint volume, in pixels
         */
        set_depth(depth: number): void;
        /**
         * Sets the #ClutterPaintVolume from the allocation of `actor`.
         *
         * This function should be used when overriding the
         * [vfunc`Actor`.get_paint_volume] by [class`Actor]` sub-classes
         * that do not paint outside their allocation.
         *
         * A typical example is:
         *
         * ```c
         * static gboolean
         * my_actor_get_paint_volume (ClutterActor       *self,
         *                            ClutterPaintVolume *volume)
         * {
         *   return clutter_paint_volume_set_from_allocation (volume, self);
         * }
         * ```
         * @param actor a #ClutterActor
         * @returns %TRUE if the paint volume was successfully set, and %FALSE   otherwise
         */
        set_from_allocation(actor: Actor): boolean;
        /**
         * Sets the height of the paint volume. The height is measured along
         * the y axis in the actor coordinates that `pv` is associated with.
         * @param height the height of the paint volume, in pixels
         */
        set_height(height: number): void;
        /**
         * Sets the origin of the paint volume.
         *
         * The origin is defined as the X, Y and Z coordinates of the top-left
         * corner of an actor's paint volume, in actor coordinates.
         *
         * The default is origin is assumed at: (0, 0, 0)
         * @param origin a #graphene_point3d_t
         */
        set_origin(origin: Graphene.Point3D): void;
        /**
         * Sets the width of the paint volume. The width is measured along
         * the x axis in the actor coordinates that `pv` is associated with.
         * @param width the width of the paint volume, in pixels
         */
        set_width(width: number): void;
        /**
         * Updates the geometry of `pv` to encompass `pv` and `another_pv`.
         *
         * There are no guarantees about how precisely the two volumes
         * will be unioned.
         * @param another_pv A second #ClutterPaintVolume to union with @pv
         */
        union(another_pv: PaintVolume): void;
        /**
         * Unions the 2D region represented by `box` to a #ClutterPaintVolume.
         *
         * This function is similar to [method`PaintVolume`.union], but it is
         * specific for 2D regions.
         * @param box a #ClutterActorBox to union to @pv
         */
        union_box(box: ActorBox): void;
    }

    type PanActionClass = typeof PanAction;
    /**
     * Stage perspective definition.
     */
    class Perspective {
        static $gtype: GObject.GType<Perspective>;

        // Fields

        fovy: number;
        aspect: number;
        z_near: number;
        z_far: number;

        // Constructors

        constructor(
            properties?: Partial<{
                fovy: number;
                aspect: number;
                z_near: number;
                z_far: number;
            }>,
        );
        _init(...args: any[]): void;
    }

    abstract class PickContext {
        static $gtype: GObject.GType<PickContext>;

        // Constructors

        _init(...args: any[]): void;

        // Methods

        destroy(): void;
        /**
         * Retrieves the current transform of the pick stack.
         */
        get_transform(): Graphene.Matrix;
        /**
         * Logs an overlapping actor into the pick stack.
         * @param actor a #ClutterActor
         */
        log_overlap(actor: Actor): void;
        /**
         * Logs a pick rectangle into the pick stack.
         * @param box a #ClutterActorBox
         * @param actor a #ClutterActor
         */
        log_pick(box: ActorBox, actor: Actor): void;
        /**
         * Pops the current clip rectangle from the clip stack. It is a programming
         * error to call this without a corresponding [method`PickContext`.push_clip]
         * call first.
         */
        pop_clip(): void;
        /**
         * Pops the current transform from the clip stack. It is a programming error
         * to call this without a corresponding [method`PickContext`.push_transform]
         * call first.
         */
        pop_transform(): void;
        /**
         * Pushes a clip rectangle defined by `box` into the pick stack. Pop with
         * [method`PickContext`.pop_clip] when done.
         * @param box a #ClutterActorBox
         */
        push_clip(box: ActorBox): void;
        /**
         * Pushes `transform` into the pick stack. Pop with
         * [method`PickContext`.pop_transform] when done.
         * @param transform a #graphene_matrix_t
         */
        push_transform(transform: Graphene.Matrix): void;
        ref(): PickContext;
        unref(): void;
    }

    type PipelineCacheClass = typeof PipelineCache;
    type PipelineNodeClass = typeof PipelineNode;
    /**
     * The #ClutterPointerA11ySettings structure contains pointer accessibility
     * settings
     */
    class PointerA11ySettings {
        static $gtype: GObject.GType<PointerA11ySettings>;

        // Fields

        controls: PointerA11yFlags;
        dwell_click_type: PointerA11yDwellClickType;
        dwell_mode: PointerA11yDwellMode;
        dwell_gesture_single: PointerA11yDwellDirection;
        dwell_gesture_double: PointerA11yDwellDirection;
        dwell_gesture_drag: PointerA11yDwellDirection;
        dwell_gesture_secondary: PointerA11yDwellDirection;
        secondary_click_delay: number;
        dwell_delay: number;
        dwell_threshold: number;

        // Constructors

        _init(...args: any[]): void;
    }

    type PropertyTransitionClass = typeof PropertyTransition;
    abstract class ProximityEvent {
        static $gtype: GObject.GType<ProximityEvent>;

        // Constructors

        _init(...args: any[]): void;
    }

    type RootNodeClass = typeof RootNode;
    type RotateActionClass = typeof RotateAction;
    abstract class ScrollActor {
        static $gtype: GObject.GType<ScrollActor>;

        // Constructors

        _init(...args: any[]): void;
    }

    abstract class ScrollEvent {
        static $gtype: GObject.GType<ScrollEvent>;

        // Constructors

        _init(...args: any[]): void;
    }

    type SeatClass = typeof Seat;
    type SettingsClass = typeof Settings;
    type ShaderEffectClass = typeof ShaderEffect;
    type SnapConstraintClass = typeof SnapConstraint;
    type StageClass = typeof Stage;
    type StageViewClass = typeof StageView;
    type SwipeActionClass = typeof SwipeAction;
    type TapActionClass = typeof TapAction;
    type TextBufferClass = typeof TextBuffer;
    type TextClass = typeof Text;
    type TextNodeClass = typeof TextNode;
    type TextureContentClass = typeof TextureContent;
    type TextureNodeClass = typeof TextureNode;
    /**
     * Used to specify vertex information when calling cogl_polygon()
     */
    class TextureVertex {
        static $gtype: GObject.GType<TextureVertex>;

        // Fields

        x: number;
        y: number;
        z: number;
        tx: number;
        ty: number;
        color: Cogl.Color;

        // Constructors

        constructor(
            properties?: Partial<{
                x: number;
                y: number;
                z: number;
                tx: number;
                ty: number;
                color: Cogl.Color;
            }>,
        );
        _init(...args: any[]): void;
    }

    type TimelineClass = typeof Timeline;
    abstract class TouchEvent {
        static $gtype: GObject.GType<TouchEvent>;

        // Constructors

        _init(...args: any[]): void;
    }

    abstract class TouchpadHoldEvent {
        static $gtype: GObject.GType<TouchpadHoldEvent>;

        // Constructors

        _init(...args: any[]): void;
    }

    abstract class TouchpadPinchEvent {
        static $gtype: GObject.GType<TouchpadPinchEvent>;

        // Constructors

        _init(...args: any[]): void;
    }

    abstract class TouchpadSwipeEvent {
        static $gtype: GObject.GType<TouchpadSwipeEvent>;

        // Constructors

        _init(...args: any[]): void;
    }

    type TransformNodeClass = typeof TransformNode;
    type TransitionClass = typeof Transition;
    type TransitionGroupClass = typeof TransitionGroup;
    type VirtualInputDeviceClass = typeof VirtualInputDevice;
    type ZoomActionClass = typeof ZoomAction;
    class Event {
        static $gtype: GObject.GType<Event>;

        // Constructors

        _init(...args: any[]): void;

        // Static methods

        /**
         * Adds a function which will be called for all events that Clutter
         * processes. The function will be called before any signals are
         * emitted for the event and it will take precedence over any grabs.
         * @param stage The #ClutterStage to capture events for
         * @param func The callback function which will be passed all events.
         */
        static add_filter(stage: Stage | null, func: EventFilterFunc): number;
        /**
         * Pops an event off the event queue. Applications should not need to call
         * this.
         */
        static get(): Event;
        /**
         * Removes an event filter that was previously added with
         * [func`Clutter`.Event.add_filter].
         * @param id The ID of the event filter, as returned from [func@Clutter.Event.add_filter]
         */
        static remove_filter(id: number): void;

        // Methods

        /**
         * Copies `event`.
         * @returns A newly allocated #ClutterEvent
         */
        copy(): Event;
        /**
         * Frees all resources used by `event`.
         */
        free(): void;
        /**
         * Retrieves the angle relative from `source` to `target`.
         *
         * The direction of the angle is from the position X axis towards
         * the positive Y axis.
         * @param target a #ClutterEvent
         * @returns the angle between two #ClutterEvent
         */
        get_angle(target: Event): number;
        /**
         * Retrieves the array of axes values attached to the event.
         * @returns an array of axis values
         */
        get_axes(): [number, number];
        /**
         * Retrieves the button number of `event`
         * @returns the button number
         */
        get_button(): number;
        /**
         * Retrieves the coordinates of `event` and puts them into `x` and `y`.
         */
        get_coords(): [number, number];
        /**
         * Retrieves the #ClutterInputDevice for the event.
         * If you want the physical device the event originated from, use
         * [method`Clutter`.Event.get_source_device].
         *
         * The #ClutterInputDevice structure is completely opaque and should
         * be cast to the platform-specific implementation.
         * @returns the #ClutterInputDevice or %NULL. The   returned device is owned by the #ClutterEvent and it should not   be unreferenced
         */
        get_device(): InputDevice;
        /**
         * Returns the device tool that originated this event
         * @returns The tool of this event8
         */
        get_device_tool(): InputDeviceTool;
        /**
         * Retrieves the type of the device for `event`
         * @returns the #ClutterInputDeviceType for the device, if   any is set
         */
        get_device_type(): InputDeviceType;
        /**
         * Retrieves the distance between two events, a `source` and a `target`.
         * @param target a #ClutterEvent
         * @returns the distance between two #ClutterEvent
         */
        get_distance(target: Event): number;
        get_event_code(): number;
        /**
         * Retrieves the #ClutterEventSequence of `event`.
         * @returns the event sequence, or %NULL
         */
        get_event_sequence(): EventSequence;
        /**
         * Retrieves the #ClutterEventFlags of `event`
         * @returns the event flags
         */
        get_flags(): EventFlags;
        /**
         * Returns the gesture motion deltas relative to the current pointer
         * position.4
         */
        get_gesture_motion_delta(): [number, number];
        /**
         * Returns the unaccelerated gesture motion deltas relative to the current
         * pointer position. Unlike [method`Clutter`.Event.get_gesture_motion_delta],
         * pointer acceleration is ignored.
         */
        get_gesture_motion_delta_unaccelerated(): [number, number];
        /**
         * Returns the phase of the event, See #ClutterTouchpadGesturePhase.
         * @returns the phase of the gesture event.
         */
        get_gesture_phase(): TouchpadGesturePhase;
        /**
         * Returns the angle delta reported by this specific event.
         * @returns The angle delta relative to the previous event.4
         */
        get_gesture_pinch_angle_delta(): number;
        /**
         * Returns the current scale as reported by `event,` 1.0 being the original
         * distance at the time the corresponding event with phase
         * %CLUTTER_TOUCHPAD_GESTURE_PHASE_BEGIN is received.
         * is received.
         * @returns the current pinch gesture scale4
         */
        get_gesture_pinch_scale(): number;
        get_im_delete_length(): number;
        get_im_location(offset: number, anchor: number): boolean;
        get_im_preedit_reset_mode(): PreeditResetMode;
        get_im_text(): string;
        /**
         * Retrieves the keycode of the key that caused `event`
         * @returns The keycode representing the key
         */
        get_key_code(): number;
        /**
         * Returns the modifier state decomposed into independent
         * pressed/latched/locked states. The effective state is a
         * composition of these 3 states, see [method`Clutter`.Event.get_state].
         */
        get_key_state(): [ModifierType, ModifierType, ModifierType];
        /**
         * Retrieves the key symbol of `event`
         * @returns the key symbol representing the key
         */
        get_key_symbol(): number;
        /**
         * Retrieves the unicode value for the key that caused `keyev`.
         * @returns The unicode value representing the key
         */
        get_key_unicode(): number;
        get_mode_group(): number;
        /**
         * Returns the details of a pad event.
         * @returns #TRUE if event details could be obtained
         */
        get_pad_details(): [boolean, number, number, InputDevicePadSource | null, number];
        /**
         * Retrieves the event coordinates as a #graphene_point_t.
         * @param position a #graphene_point_t
         */
        get_position(position: Graphene.Point): void;
        /**
         * Retrieves the related actor of a crossing event.
         * @returns the related #ClutterActor, or %NULL
         */
        get_related(): Actor;
        get_relative_motion(
            dx: number,
            dy: number,
            dx_unaccel: number,
            dy_unaccel: number,
            dx_constrained: number,
            dy_constrained: number,
        ): boolean;
        /**
         * Retrieves the precise scrolling information of `event`.
         *
         * The `event` has to have a #ClutterScrollEvent.direction value
         * of %CLUTTER_SCROLL_SMOOTH.
         */
        get_scroll_delta(): [number, number];
        /**
         * Retrieves the direction of the scrolling of `event`
         * @returns the scrolling direction
         */
        get_scroll_direction(): ScrollDirection;
        /**
         * Returns the #ClutterScrollFinishFlags of an scroll event. Those
         * can be used to determine whether post-scroll effects like kinetic
         * scrolling should be applied.
         * @returns The scroll finish flags6
         */
        get_scroll_finish_flags(): ScrollFinishFlags;
        /**
         * Returns the #ClutterScrollSource that applies to an scroll event.
         * @returns The source of scroll events6
         */
        get_scroll_source(): ScrollSource;
        /**
         * Retrieves the source #ClutterActor the event originated from, or
         * NULL if the event has no source.
         * @returns a #ClutterActor
         */
        get_source(): Actor;
        /**
         * Retrieves the hardware device that originated the event.
         *
         * If you need the virtual device, use [method`Clutter`.Event.get_device].
         *
         * If no hardware device originated this event, this function will
         * return the same device as [method`Clutter`.Event.get_device].
         * @returns a pointer to a #ClutterInputDevice   or %NULL
         */
        get_source_device(): InputDevice;
        /**
         * Retrieves the modifier state of the event. In case the window system
         * supports reporting latched and locked modifiers, this function returns
         * the effective state.
         * @returns the modifier state parameter, or 0
         */
        get_state(): ModifierType;
        /**
         * Retrieves the time of the event.
         * @returns the time of the event, or %CLUTTER_CURRENT_TIME
         */
        get_time(): number;
        get_time_us(): number;
        /**
         * Returns the number of fingers that is triggering the touchpad gesture.
         * @returns the number of fingers in the gesture.4
         */
        get_touchpad_gesture_finger_count(): number;
        /**
         * Checks whether `event` has the Control modifier mask set.
         * @returns %TRUE if the event has the Control modifier mask set
         */
        has_control_modifier(): boolean;
        /**
         * Checks whether `event` has the Shift modifier mask set.
         * @returns %TRUE if the event has the Shift modifier mask set
         */
        has_shift_modifier(): boolean;
        /**
         * Checks whether a pointer `event` has been generated by the windowing
         * system. The returned value can be used to distinguish between events
         * synthesized by the windowing system itself (as opposed by Clutter).
         * @returns %TRUE if the event is pointer emulated
         */
        is_pointer_emulated(): boolean;
        /**
         * Puts a copy of the event on the back of the event queue. The event will
         * have the %CLUTTER_EVENT_FLAG_SYNTHETIC flag set. If the source is set
         * event signals will be emitted for this source and capture/bubbling for
         * its ancestors. If the source is not set it will be generated by picking
         * or use the actor that currently has keyboard focus
         */
        put(): void;
        /**
         * Retrieves the type of the event.
         * @returns a #ClutterEventType
         */
        type(): EventType;
    }

    module Animatable {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface AnimatableNamespace {
        $gtype: GObject.GType<Animatable>;
        prototype: Animatable;
    }
    interface Animatable extends GObject.Object {
        // Methods

        /**
         * Finds the [class`GObject`.ParamSpec] for `property_name`
         * @param property_name the name of the animatable property to find
         * @returns The #GParamSpec for the given property   or %NULL
         */
        find_property(property_name: string): GObject.ParamSpec;
        /**
         * Get animated actor.
         * @returns a #ClutterActor
         */
        get_actor(): Actor;
        /**
         * Retrieves the current state of `property_name` and sets `value` with it
         * @param property_name the name of the animatable property to retrieve
         * @param value a #GValue initialized to the type of the property to retrieve
         */
        get_initial_state(property_name: string, value: GObject.Value | any): void;
        /**
         * Asks a #ClutterAnimatable implementation to interpolate a
         * a named property between the initial and final values of
         * a #ClutterInterval, using `progress` as the interpolation
         * value, and store the result inside `value`.
         *
         * This function should be used for every property animation
         * involving `ClutterAnimatable`s.
         * @param property_name the name of the property to interpolate
         * @param interval a #ClutterInterval with the animation range
         * @param progress the progress to use to interpolate between the   initial and final values of the @interval
         * @returns %TRUE if the interpolation was successful,   and %FALSE otherwise
         */
        interpolate_value(property_name: string, interval: Interval, progress: number): [boolean, unknown];
        /**
         * Sets the current state of `property_name` to `value`
         * @param property_name the name of the animatable property to set
         * @param value the value of the animatable property to set
         */
        set_final_state(property_name: string, value: GObject.Value | any): void;

        // Virtual methods

        /**
         * Finds the [class`GObject`.ParamSpec] for `property_name`
         * @param property_name the name of the animatable property to find
         */
        vfunc_find_property(property_name: string): GObject.ParamSpec;
        /**
         * Get animated actor.
         */
        vfunc_get_actor(): Actor;
        /**
         * Retrieves the current state of `property_name` and sets `value` with it
         * @param property_name the name of the animatable property to retrieve
         * @param value a #GValue initialized to the type of the property to retrieve
         */
        vfunc_get_initial_state(property_name: string, value: GObject.Value | any): void;
        /**
         * Asks a #ClutterAnimatable implementation to interpolate a
         * a named property between the initial and final values of
         * a #ClutterInterval, using `progress` as the interpolation
         * value, and store the result inside `value`.
         *
         * This function should be used for every property animation
         * involving `ClutterAnimatable`s.
         * @param property_name the name of the property to interpolate
         * @param interval a #ClutterInterval with the animation range
         * @param progress the progress to use to interpolate between the   initial and final values of the @interval
         */
        vfunc_interpolate_value(property_name: string, interval: Interval, progress: number): [boolean, unknown];
        /**
         * Sets the current state of `property_name` to `value`
         * @param property_name the name of the animatable property to set
         * @param value the value of the animatable property to set
         */
        vfunc_set_final_state(property_name: string, value: GObject.Value | any): void;
    }

    export const Animatable: AnimatableNamespace & {
        new (): Animatable; // This allows `obj instanceof Animatable`
    };

    module Content {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    export interface ContentNamespace {
        $gtype: GObject.GType<Content>;
        prototype: Content;
    }
    interface Content extends GObject.Object {
        // Methods

        /**
         * Retrieves the natural size of the `content,` if any.
         *
         * The natural size of a #ClutterContent is defined as the size the content
         * would have regardless of the allocation of the actor that is painting it,
         * for instance the size of an image data.
         * @returns %TRUE if the content has a preferred size, and %FALSE   otherwise
         */
        get_preferred_size(): [boolean, number, number];
        /**
         * Invalidates a #ClutterContent.
         *
         * This function should be called by #ClutterContent implementations when
         * they change the way a the content should be painted regardless of the
         * actor state.
         */
        invalidate(): void;
        /**
         * Signals that `content'`s size changed. Attached actors with request mode
         * set to %CLUTTER_REQUEST_CONTENT_SIZE will have a relayout queued.
         *
         * Attached actors with other request modes are not redrawn. To redraw them
         * too, use [method`Clutter`.Content.invalidate].
         */
        invalidate_size(): void;

        // Virtual methods

        /**
         * virtual function; called each time a #ClutterContent is attached
         *   to a #ClutterActor.
         * @param actor
         */
        vfunc_attached(actor: Actor): void;
        /**
         * virtual function; called each time a #ClutterContent is detached
         *   from a #ClutterActor.
         * @param actor
         */
        vfunc_detached(actor: Actor): void;
        /**
         * Retrieves the natural size of the `content,` if any.
         *
         * The natural size of a #ClutterContent is defined as the size the content
         * would have regardless of the allocation of the actor that is painting it,
         * for instance the size of an image data.
         */
        vfunc_get_preferred_size(): [boolean, number, number];
        /**
         * Invalidates a #ClutterContent.
         *
         * This function should be called by #ClutterContent implementations when
         * they change the way a the content should be painted regardless of the
         * actor state.
         */
        vfunc_invalidate(): void;
        /**
         * Signals that `content'`s size changed. Attached actors with request mode
         * set to %CLUTTER_REQUEST_CONTENT_SIZE will have a relayout queued.
         *
         * Attached actors with other request modes are not redrawn. To redraw them
         * too, use [method`Clutter`.Content.invalidate].
         */
        vfunc_invalidate_size(): void;
        /**
         * virtual function; called each time the content needs to
         *   paint itself
         * @param actor
         * @param node
         * @param paint_context
         */
        vfunc_paint_content(actor: Actor, node: PaintNode, paint_context: PaintContext): void;
    }

    export const Content: ContentNamespace & {
        new (): Content; // This allows `obj instanceof Content`
    };

    type PipelineGroup = any;
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

export default Clutter;

// END
