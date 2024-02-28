/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './mx-1.0-ambient.d.ts';
import './mx-1.0-import.d.ts';
/**
 * Mx-1.0
 */

import type freetype2 from '@girs/freetype2-2.0';
import type fontconfig from '@girs/fontconfig-2.0';
import type cairo from '@girs/cairo-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type PangoFT2 from '@girs/pangoft2-1.0';
import type PangoFc from '@girs/pangofc-1.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type Gio from '@girs/gio-2.0';
import type PangoCairo from '@girs/pangocairo-1.0';
import type Json from '@girs/json-1.0';
import type GL from '@girs/gl-1.0';
import type CoglPango from '@girs/coglpango-1.0';
import type Cogl from '@girs/cogl-1.0';
import type Clutter from '@girs/clutter-1.0';
import type Atk from '@girs/atk-1.0';

export namespace Mx {
    enum ActorManagerError {
        CONTAINER_DESTROYED,
        ACTOR_DESTROYED,
        CREATION_FAILED,
        UNKNOWN_OPERATION,
    }
    /**
     * Set the alignment of the item
     */
    enum Align {
        /**
         * Align at the beginning of the axis
         */
        START,
        /**
         * Align in the middle of the axis
         */
        MIDDLE,
        /**
         * Align at the end of the axis
         */
        END,
    }
    enum DragAxis {
        NONE,
        X,
        Y,
    }
    enum FocusDirection {
        OUT,
        UP,
        DOWN,
        LEFT,
        RIGHT,
        NEXT,
        PREVIOUS,
    }
    enum FocusHint {
        FIRST,
        LAST,
        PRIOR,
        FROM_ABOVE,
        FROM_BELOW,
        FROM_LEFT,
        FROM_RIGHT,
    }
    /**
     * Support values of font weight
     */
    enum FontWeight {
        /**
         * Normal font weight
         */
        NORMAL,
        /**
         * Bold font weight
         */
        BOLD,
        /**
         * Bolder font weight
         */
        BOLDER,
        /**
         * Lighter font weight
         */
        LIGHTER,
    }
    class ImageError extends GLib.Error {
        // Own fields of Mx-1.0.ImageError

        BAD_FORMAT: number;
        NO_ASYNC: number;
        INTERNAL: number;
        INVALID_PARAMETER: number;

        // Constructors of Mx-1.0.ImageError

        constructor(options: { message: string; code: number });

        // Owm methods of Mx-1.0.ImageError

        static quark(): GLib.Quark;
    }

    /**
     * Defines the scaling mode of an image.
     */
    enum ImageScaleMode {
        /**
         * Do not apply any scaling and center the image within the allocation
         */
        NONE,
        /**
         * Scale the image, but maintain the aspect ratio so that it fits exactly within the allocation
         */
        FIT,
        /**
         * Scale and crop the image so that it covers the entire allocation while retaining the correct aspect ratio
         */
        CROP,
    }
    enum KineticScrollViewState {
        IDLE,
        PANNING,
        SCROLLING,
        CLAMPING,
    }
    enum LongPressAction {
        QUERY,
        ACTION,
        CANCEL,
    }
    /**
     * Defines the orientation of various layout widgets.
     */
    enum Orientation {
        /**
         * horizontal orientation
         */
        HORIZONTAL,
        /**
         * vertical orientation
         */
        VERTICAL,
    }
    /**
     * Defines the position of an interface element.
     */
    enum Position {
        /**
         * The top position
         */
        TOP,
        /**
         * The right position
         */
        RIGHT,
        /**
         * The bottom position
         */
        BOTTOM,
        /**
         * The left position
         */
        LEFT,
    }
    /**
     * Defines the scrolling policy of scrollable widgets.
     */
    enum ScrollPolicy {
        /**
         * Never scroll
         */
        NONE,
        /**
         * Only allow horizontal scrolling
         */
        HORIZONTAL,
        /**
         * Only allow vertical scrolling
         */
        VERTICAL,
        /**
         * Allow scrolling both horizontally and vertically
         */
        BOTH,
    }
    enum StyleError {
        INVALID_FILE,
    }
    /**
     * Defines the animation when tooltips are shown and hidden.
     */
    enum TooltipAnimation {
        /**
         * Bounce the tooltips when they appear
         */
        BOUNCE,
        /**
         * Fade the tooltips on show and hide
         */
        FADE,
    }
    /**
     * Defines the clock-wise rotation angle of a window.
     */
    enum WindowRotation {
        /**
         * Zero degrees of rotation
         */
        '0',
        /**
         * 90 degrees of rotation
         */
        '90',
        /**
         * 180 degrees of rotation
         */
        '180',
        /**
         * 270 degrees of rotation
         */
        '270',
    }
    /**
     * The major version of the Mx clibrary (1 if version is 1.2.3)
     */
    const MAJOR_VERSION: number;
    /**
     * The micro version of the Mx library (3, if version is 1.2.3)
     */
    const MICRO_VERSION: number;
    /**
     * The minor version of the Mx library (2, if version is 1.2.3)
     */
    const MINOR_VERSION: number;
    const PARAM_TRANSLATEABLE: number;
    /**
     * Numerically encoded version of the Mx library, like 0x010203
     */
    const VERSION_HEX: number;
    /**
     * The full version of the Mx library, in string form (suited for
     * string concatenation)
     */
    const VERSION_S: string;
    function actor_box_clamp_to_pixels(box: Clutter.ActorBox): void;
    function allocate_align_fill(
        child: Clutter.Actor,
        childbox: Clutter.ActorBox,
        x_alignment: Align,
        y_alignment: Align,
        x_fill: boolean,
        y_fill: boolean,
    ): void;
    function border_image_set_from_string(value: GObject.Value, str: string, filename: string): void;
    /**
     * Transforms a focus direction to a focus hint. This is a convenience
     * function for actors that implement the #MxFocusable interface, to
     * pass the correct #MxFocusHint to their children when calling
     * mx_focusable_accept_focus().
     *
     * %MX_FOCUS_DIRECTION_UP maps to %MX_FOCUS_HINT_FROM_BELOW,
     * %MX_FOCUS_DIRECTION_DOWN maps to %MX_FOCUS_HINT_FROM_ABOVE,
     * %MX_FOCUS_DIRECTION_LEFT maps to %MX_FOCUS_HINT_FROM_RIGHT,
     * %MX_FOCUS_DIRECTION_RIGHT maps to %MX_FOCUS_HINT_FROM_LEFT,
     * %MX_FOCUS_DIRECTION_NEXT maps to %MX_FOCUS_HINT_FIRST,
     * %MX_FOCUS_DIRECTION_PREVIOUS maps to %MX_FOCUS_HINT_LAST and
     * anything else maps to %MX_FOCUS_HINT_PRIOR.
     * @param direction A #MxFocusDirection
     * @returns A #MxFocusHint
     */
    function focus_hint_from_direction(direction: FocusDirection): FocusHint;
    function font_weight_set_from_string(value: GObject.Value, str: string): void;
    function image_error_quark(): GLib.Quark;
    /**
     * Initializes internationalization support for Mx. If MxApplication is
     * used, this is called automatically. Otherwise it has to be called
     * together with clutter_init() before using Mx.
     */
    function set_locale(): void;
    /**
     * Generates a string describing the time given in `time_` using
     * colloquial language suitable for display to the user. Examples of
     * what might be returned are "A few minutes ago" or "Yesterday".
     * @param time_ a time value
     * @returns a string. Free with g_free().
     */
    function utils_format_time(time_: GLib.TimeVal): string;
    interface ActionCallbackFunc {
        (action: Action): void;
    }
    interface ClipboardCallbackFunc {
        (clipboard: Clipboard, text: string): void;
    }
    enum ApplicationFlags {
        SINGLE_INSTANCE,
        KEEP_ALIVE,
    }
    enum StyleChangedFlags {
        /**
         * No flag set
         */
        NONE,
        /**
         * Whether to force propogation of the style-changed signal, regardless of the state of the stylable object.
         */
        FORCE,
        /**
         * Internal flag used to track style caching state.
         */
        INVALIDATE_CACHE,
    }
    module Action {
        // Signal callback interfaces

        interface Activate {
            (parameter: GLib.Variant): void;
        }

        interface Activated {
            (): void;
        }

        // Constructor properties interface
    }

    /**
     * The contents of this structure are private and should only be accessed
     * through the public API.
     */
    class Action extends GObject.InitiallyUnowned {
        // Own properties of Mx-1.0.Action

        active: boolean;
        display_name: string;
        displayName: string;
        icon: string;

        // Constructors of Mx-1.0.Action

        static ['new'](): Action;

        static new_full(name: string, display_name: string, activated_cb: ActionCallbackFunc): Action;

        static new_stateful(name: string, parameter_type: GLib.VariantType, state: GLib.Variant): Action;

        static new_with_parameter(name: string, parameter_type: GLib.VariantType): Action;

        // Owm methods of Mx-1.0.Action

        /**
         * Get the value of the active property
         * @returns #TRUE if the action is active
         */
        get_active(): boolean;
        /**
         * Get the display name of the action
         * @returns display-name of the action, owned by MxAction
         */
        get_display_name(): string;
        /**
         * Get the icon of the action
         * @returns icon of the action, owned by MxAction
         */
        get_icon(): string;
        /**
         * Get the name of the action
         * @returns name of the action, owned by MxAction
         */
        get_name(): string;
        /**
         * Set the value of the active property
         * @param active the value to set
         */
        set_active(active: boolean): void;
        /**
         * Set the name of the action to display to the user
         * @param name new display name to set
         */
        set_display_name(name: string): void;
        /**
         * The icon to be used in a visual representation of an action.
         * @param name new icon to set
         */
        set_icon(name: string): void;
        /**
         * Set the name of the action
         * @param name new name to set
         */
        set_name(name: string): void;
    }

    module ActorManager {
        // Signal callback interfaces

        interface ActorAdded {
            (id: number, container: Clutter.Actor, actor: Clutter.Actor): void;
        }

        interface ActorCreated {
            (id: number, actor: Clutter.Actor): void;
        }

        interface ActorFinished {
            (actor: Clutter.Actor): void;
        }

        interface ActorRemoved {
            (id: number, container: Clutter.Actor, actor: Clutter.Actor): void;
        }

        interface OperationCancelled {
            (id: number): void;
        }

        interface OperationCompleted {
            (id: number): void;
        }

        interface OperationFailed {
            (id: number, error: GLib.Error): void;
        }

        // Constructor properties interface
    }

    class ActorManager extends GObject.Object {
        // Own properties of Mx-1.0.ActorManager

        readonly n_operations: number;
        readonly nOperations: number;
        stage: Clutter.Stage;
        time_slice: number;
        timeSlice: number;

        // Constructors of Mx-1.0.ActorManager

        static ['new'](stage: Clutter.Stage): ActorManager;

        // Owm methods of Mx-1.0.ActorManager

        /**
         * Get the MxActorManager associated with a stage, or creates one if this is the
         * first call to the function with the given #ClutterStage.
         *
         * This is a convenience function that allows for easy association of one
         * #MxActorManager to a #ClutterStage.
         * @param stage A #ClutterStage
         */
        static get_for_stage(stage: Clutter.Stage): ActorManager;

        // Owm methods of Mx-1.0.ActorManager

        /**
         * Adds `actor` to `container`. The actor may not be parented immediately,
         * or at all, if the operation is cancelled.
         *
         * On successful completion, the #MxActorManager::actor_added signal will
         * be fired.
         * @param container A #ClutterContainer
         * @param actor A #ClutterActor
         * @returns The ID for this operation.
         */
        add_actor(container: Clutter.Container, actor: Clutter.Actor): number;
        /**
         * Cancels the given operation, if it exists. The
         * #MxActorManager::operation_cancelled signal is fired whenever an operation
         * is cancelled.
         * @param id An operation ID
         */
        cancel_operation(id: number): void;
        /**
         * Cancels all operations associated with the given actor.
         * @param actor A #ClutterActor
         */
        cancel_operations(actor: Clutter.Actor): void;
        /**
         * Retrieves the amount of operations left in the queue.
         * @returns Number of operations left to perform
         */
        get_n_operations(): number;
        /**
         * Gets the #ClutterStage the actor manager is associated with.
         * @returns The #ClutterStage the actor is associated with.
         */
        get_stage(): Clutter.Stage;
        /**
         * Retrieves the current time slice being used for operations.
         * @returns The time-slice being used, in milliseconds
         */
        get_time_slice(): number;
        /**
         * Removes `actor` from `container`.
         *
         * On successful completion, the #MxActorManager::actor_removed signal will
         * be fired.
         *
         * <note><para>
         * The actor may not be removed immediately, and thus you may want to set
         * the actor's opacity to 0 before calling this function.
         * </para></note>
         * @param container A #ClutterContainer
         * @param actor A #ClutterActor
         * @returns The ID for this operation.
         */
        remove_actor(container: Clutter.Container, actor: Clutter.Actor): number;
        /**
         * Removes the container. This is a utility function that works by first
         * removing all the children of the container, then the children itself. This
         * effectively spreads the load of removing a large container. All prior
         * operations associated with this container will be cancelled.
         *
         * <note><para>
         * The container may not be removed immediately, and thus you may want to set
         * the container's opacity to 0 before calling this function.
         * </para></note>
         * @param container A #ClutterContainer
         */
        remove_container(container: Clutter.Container): void;
        /**
         * Sets the amount of time the actor manager will spend performing operations,
         * before yielding to allow any necessary redrawing to occur.
         *
         * Lower times will lead to smoother performance, but will increase the amount
         * of time it takes for operations to complete.
         * @param msecs A time, in milliseconds
         */
        set_time_slice(msecs: number): void;
    }

    module Adjustment {
        // Signal callback interfaces

        interface Changed {
            (): void;
        }

        interface InterpolationCompleted {
            (): void;
        }

        // Constructor properties interface
    }

    /**
     * Class for handling an interval between to values. The contents of
     * the #MxAdjustment are private and should be accessed using the
     * public API.
     */
    class Adjustment extends GObject.Object {
        // Own properties of Mx-1.0.Adjustment

        clamp_value: boolean;
        clampValue: boolean;
        elastic: boolean;
        lower: number;
        page_increment: number;
        pageIncrement: number;
        page_size: number;
        pageSize: number;
        step_increment: number;
        stepIncrement: number;
        upper: number;
        value: number;

        // Constructors of Mx-1.0.Adjustment

        static ['new'](): Adjustment;

        static new_with_values(
            value: number,
            lower: number,
            upper: number,
            step_increment: number,
            page_increment: number,
            page_size: number,
        ): Adjustment;

        // Owm methods of Mx-1.0.Adjustment

        /**
         * Get the value of the #MxAdjustment:clamp-value property.
         * @returns the current value of the "clamp-value" property.
         */
        get_clamp_value(): boolean;
        /**
         * Get the value of the #MxAdjustment:elastic property.
         * @returns the current value of the "elastic" property.
         */
        get_elastic(): boolean;
        /**
         * Get the value of the #MxAdjustment:lower property.
         * @returns the current value of the "lower" property.
         */
        get_lower(): number;
        /**
         * Get the value of the MxAdjustment:page-increment property.
         * @returns the current value of the "page-increment" property.
         */
        get_page_increment(): number;
        /**
         * Get the value of the #MxAdjustment:page-size property.
         * @returns the current value of the "page-size" property.
         */
        get_page_size(): number;
        /**
         * Get the value of the MxAdjustment:step-increment property.
         * @returns the current value of the "step-increment" property.
         */
        get_step_increment(): number;
        /**
         * Get the value of the #MxAdjustment:upper property.
         * @returns the current value of the "upper" property.
         */
        get_upper(): number;
        /**
         * Get the current value of the #MxAdjustment:value property
         * @returns the current value of the "value" property
         */
        get_value(): number;
        /**
         * Get the various properties of MxAdjustment.
         * @param value A #gdouble
         * @param lower A #gdouble
         * @param upper A #gdouble
         * @param step_increment A #gdouble
         * @param page_increment A #gdouble
         * @param page_size A #gdouble
         */
        get_values(
            value: number,
            lower: number,
            upper: number,
            step_increment: number,
            page_increment: number,
            page_size: number,
        ): void;
        /**
         * Interpolate #MxAdjustment:value to the new value specified by `value,` using
         * the mode and duration given.
         * @param value A #gdouble
         * @param duration duration in milliseconds
         * @param mode A #ClutterAnimationMode
         */
        interpolate(value: number, duration: number, mode: number): void;
        /**
         * Interpolate the value of #MxAdjustment:value to a new value calculated from
         * `offset`.
         * @param offset A #gdouble
         * @param duration duration in milliseconds
         * @param mode A #ClutterAnimationMode
         */
        interpolate_relative(offset: number, duration: number, mode: number): void;
        /**
         * Set the value of the #MxAdjustment:clamp-value property.
         * @param clamp a #gboolean
         */
        set_clamp_value(clamp: boolean): void;
        /**
         * Set the value of the #MxAdjustment:elastic property.
         * @param elastic A #gboolean
         */
        set_elastic(elastic: boolean): void;
        /**
         * Set the value of the #MxAdjustment:lower property.
         * @param lower A #gdouble
         */
        set_lower(lower: number): void;
        /**
         * Set the value of the #MxAdjustment:page-increment property.
         * @param increment A #gdouble
         */
        set_page_increment(increment: number): void;
        /**
         * Set the #MxAdjustment:page-size property.
         * @param page_size A #gdouble
         */
        set_page_size(page_size: number): void;
        /**
         * Set the value of the #MxAdjustment:step-increment property.
         * @param increment A #gdouble
         */
        set_step_increment(increment: number): void;
        /**
         * Set the value of the #MxAdjustment:upper property.
         * @param upper A #gdouble
         */
        set_upper(upper: number): void;
        /**
         * Set the value of the #MxAdjustment:value property.
         * @param value A #gdouble
         */
        set_value(value: number): void;
        /**
         * Set the various properties of MxAdjustment.
         * @param value A #gdouble
         * @param lower A #gdouble
         * @param upper A #gdouble
         * @param step_increment A #gdouble
         * @param page_increment A #gdouble
         * @param page_size A #gdouble
         */
        set_values(
            value: number,
            lower: number,
            upper: number,
            step_increment: number,
            page_increment: number,
            page_size: number,
        ): void;
    }

    module Application {
        // Signal callback interfaces

        interface ActionsChanged {
            (): void;
        }

        // Constructor properties interface
    }

    /**
     * The contents of this structure are private and should only be accessed
     * through the public API.
     */
    class Application extends GObject.Object {
        // Own properties of Mx-1.0.Application

        application_name: string;
        applicationName: string;
        flags: number;

        // Constructors of Mx-1.0.Application

        static ['new'](argv: string[] | null, name: string, flags: ApplicationFlags): Application;

        // Owm methods of Mx-1.0.Application

        /**
         * Add an action to the application.
         * @param action an #MxAction
         */
        add_action(action: Action): void;
        /**
         * Adds a window to the list of windows associated with `application`. If this
         * is the first window, it will be treated as the primary window and used for
         * startup notification.
         *
         * This function does not take a reference on `window`.
         * @param window The #MxWindow to add to the application
         */
        add_window(window: Window): void;
        /**
         * Creates a window and associates it with the application.
         * @returns An #MxWindow.
         */
        create_window(): Window;
        /**
         * Retrieves all actions registered on `application`.
         * @returns a list of #MxAction<!-- -->s. Use g_list_free() on the returned list when done.
         */
        get_actions(): Action[];
        /**
         * Get the application flags that where set on `application` when created.
         * @returns the application flags
         */
        get_flags(): ApplicationFlags;
        /**
         * Retrieves all windows added to `application`.
         * @returns a list of #MxWindow<!-- -->s. The returned list is owned by @application and must not be altered.
         */
        get_windows(): Window[];
        /**
         * Run the named action for the application.
         * @param name name of the action to invoke
         */
        invoke_action(name: string): void;
        /**
         * Run the named action for the application, passing `variant` as the parameter
         * for the action.
         * @param name name of the action to invoke
         * @param variant parameter for the action
         */
        invoke_action_with_parameter(name: string, variant: GLib.Variant): void;
        /**
         * Query whether #MxApplication is running. This will also return #TRUE if the
         * given #MxApplication is single instance and there is an instance already
         * running.
         * @returns #TRUE if the application is running
         */
        is_running(): boolean;
        /**
         * Stop the application from running and quit the main loop. This will cause
         * the call to mx_application_run() to complete.
         */
        quit(): void;
        /**
         * Remove the action with the specified name from the application.
         * @param name name of the action to remove
         */
        remove_action(name: string): void;
        /**
         * Remove the specified window from the application. This will cause the window
         * to be unreferenced and destroyed unless another reference is held on it.
         * @param window an #MxWindow
         */
        remove_window(window: Window): void;
        /**
         * Run the main loop of the application and start processing events. This
         * function will not return until the application is quit. If the application
         * is single instance and an existing instance is already running, this will
         * cause the existing instance to be raised and the function will complete
         * immediately.
         */
        run(): void;
    }

    module Bin {
        // Constructor properties interface
    }

    /**
     * The #MxBin struct contains only private data
     */
    abstract class Bin extends Widget {
        // Own properties of Mx-1.0.Bin

        /**
         * The child #ClutterActor of the #MxBin container.
         */
        child: Clutter.Actor;
        /**
         * The horizontal alignment of the #MxBin child.
         */
        x_align: Align;
        /**
         * The horizontal alignment of the #MxBin child.
         */
        xAlign: Align;
        /**
         * Whether the child should fill the horizontal allocation
         */
        x_fill: boolean;
        /**
         * Whether the child should fill the horizontal allocation
         */
        xFill: boolean;
        /**
         * The vertical alignment of the #MxBin child.
         */
        y_align: Align;
        /**
         * The vertical alignment of the #MxBin child.
         */
        yAlign: Align;
        /**
         * Whether the child should fill the vertical allocation
         */
        y_fill: boolean;
        /**
         * Whether the child should fill the vertical allocation
         */
        yFill: boolean;

        // Owm methods of Mx-1.0.Bin

        /**
         * Allocates the child of an #MxBin using the width and height from `box`.
         * This function should usually only be called by subclasses of #MxBin.
         *
         * This function can be used to allocate the child of an #MxBin if no special
         * allocation requirements are needed. It is similar to
         * #mx_allocate_align_fill, except that it reads the alignment, padding and
         * fill values from the #MxBin, and will call #clutter_actor_allocate on the
         * child.
         * @param box The allocation box of the parent actor.
         * @param flags #ClutterAllocationFlags, usually provided by the. clutter_actor_allocate function.
         */
        allocate_child(box: Clutter.ActorBox, flags: Clutter.AllocationFlags): void;
        /**
         * Retrieves the horizontal and vertical alignment of the child
         * inside a #MxBin, as set by mx_bin_set_alignment().
         */
        get_alignment(): void;
        /**
         * Retrieves a pointer to the child of `bin`.
         * @returns a #ClutterActor, or %NULL
         */
        get_child(): Clutter.Actor;
        /**
         * Retrieves the horizontal and vertical fill settings
         */
        get_fill(): void;
        /**
         * Sets the horizontal and vertical alignment of the child
         * inside a #MxBin.
         * @param x_align horizontal alignment
         * @param y_align vertical alignment
         */
        set_alignment(x_align: Align, y_align: Align): void;
        /**
         * Sets `child` as the child of `bin`.
         *
         * If `bin` already has a child, the previous child is removed.
         * @param child a #ClutterActor, or %NULL
         */
        set_child(child: Clutter.Actor): void;
        /**
         * Sets whether the child of `bin` should fill out the horizontal
         * and/or vertical allocation of the parent
         * @param x_fill %TRUE if the child should fill horizontally the @bin
         * @param y_fill %TRUE if the child should fill vertically the @bin
         */
        set_fill(x_fill: boolean, y_fill: boolean): void;
    }

    module BoxLayout {
        // Constructor properties interface
    }

    /**
     * The contents of this structure are private and should only be accessed
     * through the public API.
     */
    class BoxLayout extends Widget {
        // Own properties of Mx-1.0.BoxLayout

        enable_animations: boolean;
        enableAnimations: boolean;
        orientation: Orientation;
        scroll_to_focused: boolean;
        scrollToFocused: boolean;
        spacing: number;

        // Constructors of Mx-1.0.BoxLayout

        static ['new'](): BoxLayout;

        // Owm methods of Mx-1.0.BoxLayout

        /**
         * Inserts `actor` at `position` in `box`.
         * @param actor the #ClutterActor actor to add to the box layout
         * @param position the position where to insert the actor
         */
        add_actor(actor: Clutter.Actor, position: number): void;
        /**
         * Get the value of the #MxBoxLayoutChild:expand property
         * @param child A #ClutterActor
         * @returns the current value of the "expand" property
         */
        child_get_expand(child: Clutter.Actor): boolean;
        /**
         * Get the value of the #MxBoxLayoutChild:x-align property
         * @param child A #ClutterActor
         * @returns the current value of the "x-align" property
         */
        child_get_x_align(child: Clutter.Actor): Align;
        /**
         * Get the value of the #MxBoxLayoutChild:x-fill property.
         * @param child A #ClutterActor
         * @returns the current value of the "x-fill" property.
         */
        child_get_x_fill(child: Clutter.Actor): boolean;
        /**
         * Get the value of the #MxBoxLayoutChild:y-align property.
         * @param child A #ClutterActor
         * @returns the current value of the "y-align" property.
         */
        child_get_y_align(child: Clutter.Actor): Align;
        /**
         * Get the value of the #MxBoxLayoutChild:y-fill property
         * @param child A #ClutterActor
         * @returns the current value of the "y-fill" property
         */
        child_get_y_fill(child: Clutter.Actor): boolean;
        /**
         * Set the value of the #MxBoxLayoutChild:expand property.
         * @param child A #ClutterActor
         * @param expand A #gboolean
         */
        child_set_expand(child: Clutter.Actor, expand: boolean): void;
        /**
         * Set the value of the #MxBoxLayoutChild:x-align property.
         * @param child A #ClutterActor
         * @param x_align An #MxAlign
         */
        child_set_x_align(child: Clutter.Actor, x_align: Align): void;
        /**
         * Set the value of the #MxBoxLayoutChild:x-fill property.
         * @param child A #ClutterActor
         * @param x_fill A #gboolean
         */
        child_set_x_fill(child: Clutter.Actor, x_fill: boolean): void;
        /**
         * Set the value of the #MxBoxLayoutChild:y-align property.
         * @param child A #ClutterActor
         * @param y_align An #MxAlign
         */
        child_set_y_align(child: Clutter.Actor, y_align: Align): void;
        /**
         * Set the value of the #MxBoxLayoutChild:y-fill property.
         * @param child A #ClutterActor
         * @param y_fill A #gboolean
         */
        child_set_y_fill(child: Clutter.Actor, y_fill: boolean): void;
        /**
         * Get the value of the #MxBoxLayout:enable-animations property.
         * @returns #TRUE if animations enabled
         */
        get_enable_animations(): boolean;
        /**
         * Get the value of the #MxBoxLayout:orientation property.
         * @returns the orientation of the layout
         */
        get_orientation(): Orientation;
        /**
         * Get the value of the #MxBoxLayout:scroll-to-focused property.
         * @returns #TRUE if automatically scrolling to the focused actor is enabled
         */
        get_scroll_to_focused(): boolean;
        /**
         * Get the spacing between children in pixels
         * @returns the spacing value
         */
        get_spacing(): number;
        /**
         * Enable animations when certain properties change.
         * @param enable_animations #TRUE to enable animations
         */
        set_enable_animations(enable_animations: boolean): void;
        /**
         * Set the orientation of the box layout.
         * @param orientation orientation value for the layout
         */
        set_orientation(orientation: Orientation): void;
        /**
         * Enables or disables automatic scrolling to the focused actor.
         * @param scroll_to_focused #TRUE to enable automatically scrolling to the focused actor
         */
        set_scroll_to_focused(scroll_to_focused: boolean): void;
        /**
         * Set the amount of spacing between children in pixels
         * @param spacing the spacing value
         */
        set_spacing(spacing: number): void;
    }

    module BoxLayoutChild {
        // Constructor properties interface
    }

    /**
     * The contents of this structure are private and should only be accessed
     * through the public API.
     */
    class BoxLayoutChild extends Clutter.ChildMeta {
        // Own properties of Mx-1.0.BoxLayoutChild

        expand: boolean;
        x_align: Align;
        xAlign: Align;
        x_fill: boolean;
        xFill: boolean;
        y_align: Align;
        yAlign: Align;
        y_fill: boolean;
        yFill: boolean;
    }

    module Button {
        // Signal callback interfaces

        interface Clicked {
            (): void;
        }

        // Constructor properties interface
    }

    /**
     * The contents of this structure is private and should only be accessed using
     * the provided API.
     */
    class Button extends Bin {
        // Own properties of Mx-1.0.Button

        action: Action;
        icon_name: string;
        iconName: string;
        icon_position: Position;
        iconPosition: Position;
        icon_size: number;
        iconSize: number;
        icon_visible: boolean;
        iconVisible: boolean;
        is_toggle: boolean;
        isToggle: boolean;
        label: string;
        label_visible: boolean;
        labelVisible: boolean;
        toggled: boolean;

        // Constructors of Mx-1.0.Button

        static ['new'](): Button;

        static new_with_label(text: string): Button;

        // Owm methods of Mx-1.0.Button

        /**
         * Retrieves the #MxAction associated with `button`.
         * @returns A #MxAction
         */
        get_action(): Action;
        /**
         * Get the icon-name being used on the button.
         * @returns the icon-name. This must not be freed by the application. %NULL if no icon has been set
         */
        get_icon_name(): string;
        /**
         * Retrieves the icon's relative position to the text.
         * @returns A #MxPosition
         */
        get_icon_position(): Position;
        /**
         * Retrieves the icon-size being used for the displayed icon inside the button.
         * @returns The icon-size being used for the button icon, in pixels
         */
        get_icon_size(): number;
        /**
         * Retrieves the visibility of the icon associated with the button's action.
         * @returns %TRUE if the icon is visible, %FALSE otherwise
         */
        get_icon_visible(): boolean;
        /**
         * Get the toggle mode status of the button.
         * @returns #TRUE if toggle mode is set, otherwise #FALSE
         */
        get_is_toggle(): boolean;
        /**
         * Get the text displayed on the button
         * @returns the text for the button. This must not be freed by the application
         */
        get_label(): string;
        /**
         * Retrieves the visibility of the text associated with the button's action.
         * @returns %TRUE if the text is visible, %FALSE otherwise
         */
        get_label_visible(): boolean;
        /**
         * Get the state of the button that is in toggle mode.
         * @returns #TRUE if the button is toggled, or #FALSE if not
         */
        get_toggled(): boolean;
        /**
         * Sets `action` as the action for `button`. `Button` will take its label and
         * icon from `action`.
         * @param action A #MxAction
         */
        set_action(action: Action): void;
        /**
         * Sets the icon-name used to display an icon on the button. Setting %NULL
         * will remove the icon name, or resort to the icon-name set in the current
         * style. Setting an icon name overrides any icon set in the style.
         * @param icon_name icon-name to use on the button
         */
        set_icon_name(icon_name: string): void;
        /**
         * Sets the icon position, relative to the text on the button.
         * @param position A #MxPosition
         */
        set_icon_position(position: Position): void;
        /**
         * Sets the icon-size to use for the icon displayed inside the button. This will
         * override the icon-size set in the style. Setting a value of %0 resets to the
         * size from the style.
         * @param icon_size
         */
        set_icon_size(icon_size: number): void;
        /**
         * Sets the visibility of the icon associated with the button's action.
         * @param visible %TRUE if the icon should be visible
         */
        set_icon_visible(visible: boolean): void;
        /**
         * Enables or disables toggle mode for the button. In toggle mode, the active
         * state will be "toggled" when the user clicks the button.
         * @param toggle #TRUE or #FALSE
         */
        set_is_toggle(toggle: boolean): void;
        /**
         * Sets the text displayed on the button
         * @param text text to set the label to
         */
        set_label(text: string): void;
        /**
         * Sets the visibility of the text associated with the button's action.
         * @param visible %TRUE if the text should be visible
         */
        set_label_visible(visible: boolean): void;
        /**
         * Sets the toggled state of the button. This is only really useful if the
         * button has #toggle-mode mode set to #TRUE.
         * @param toggled #TRUE or #FALSE
         */
        set_toggled(toggled: boolean): void;
    }

    module ButtonGroup {
        // Constructor properties interface
    }

    /**
     * The contents of this structure are private and should only be accessed
     * through the public API.
     */
    class ButtonGroup extends GObject.InitiallyUnowned {
        // Own properties of Mx-1.0.ButtonGroup

        active_button: Button;
        activeButton: Button;
        allow_no_active: boolean;
        allowNoActive: boolean;

        // Constructors of Mx-1.0.ButtonGroup

        static ['new'](): ButtonGroup;

        // Owm methods of Mx-1.0.ButtonGroup

        /**
         * Add `button` to the #MxButtonGroup.
         * @param button A #MxButton
         */
        add(button: Button): void;
        /**
         * Calls `callback` for each button in the group.
         * @param callback A #ClutterCallback
         */
        foreach(callback: Clutter.Callback): void;
        /**
         * Get the current active button
         * @returns the currently active button
         */
        get_active_button(): Button;
        /**
         * Get the value of the #MxButtonGroup:allow-no-active property.
         * @returns the value of the "allow-no-active" property.
         */
        get_allow_no_active(): boolean;
        /**
         * Get a list of the buttons in the button group.
         * @returns a list of buttons. The list is owned by the #MxButtonGroup and should not be modified by the application.
         */
        get_buttons(): Button[];
        /**
         * Remove `button` from the #MxButtonGroup
         * @param button A #MxButton
         */
        remove(button: Button): void;
        /**
         * Set the current active button in the group. The previous active button will
         * have #MxButton:toggled set to #FALSE.
         * @param button A #MxButton
         */
        set_active_button(button: Button): void;
        /**
         * Set the value of the #MxButtonGroup:allow-no-active property.
         * @param allow_no_active A #gboolean
         */
        set_allow_no_active(allow_no_active: boolean): void;
    }

    module Clipboard {
        // Constructor properties interface
    }

    /**
     * The contents of this structure is private and should only be accessed using
     * the provided API.
     */
    class Clipboard extends GObject.Object {
        // Owm methods of Mx-1.0.Clipboard

        /**
         * Get the global #MxClipboard object that represents the clipboard.
         */
        static get_default(): Clipboard;

        // Owm methods of Mx-1.0.Clipboard

        /**
         * Request the data from the clipboard in text form. `callback` is executed
         * when the data is retreived.
         * @param callback function to be called when the text is retreived
         */
        get_text(callback: ClipboardCallbackFunc): void;
        /**
         * Sets text as the current contents of the clipboard.
         * @param text text to copy to the clipboard
         */
        set_text(text: string): void;
    }

    module ComboBox {
        // Constructor properties interface
    }

    /**
     * The contents of this structure are private and should only be accessed
     * through the public API.
     */
    class ComboBox extends Widget {
        // Own properties of Mx-1.0.ComboBox

        active_icon_name: string;
        activeIconName: string;
        active_text: string;
        activeText: string;
        index: number;

        // Constructors of Mx-1.0.ComboBox

        static ['new'](): ComboBox;

        // Owm methods of Mx-1.0.ComboBox

        /**
         * Append an item to the combo box list
         * @param text name of the item
         */
        append_text(text: string): void;
        /**
         * Get the name of the icon displayed in the combo box
         * @returns the text string of the name of the displayed icon, owned by the combo box, or %NULL if there is no active icon.
         */
        get_active_icon_name(): string;
        /**
         * Get the text displayed in the combo box
         * @returns the text string, owned by the combo box
         */
        get_active_text(): string;
        /**
         * Get the index of the last item selected
         * @returns gint
         */
        get_index(): number;
        /**
         * Insert an item into the combo box list.
         * @param position zero indexed position to insert the item at
         * @param text name of the item
         */
        insert_text(position: number, text: string): void;
        /**
         * Insert an item with text and an icon into the combo box list.
         * @param position zero indexed position to insert the item at
         * @param text name of the item
         * @param icon name of an icon from the icon theme
         */
        insert_text_with_icon(position: number, text: string, icon: string): void;
        /**
         * Prepend an item to the combo box list
         * @param text name of the item
         */
        prepend_text(text: string): void;
        /**
         * Remove all the items of `box`
         */
        remove_all(): void;
        /**
         * Remove the item at `position`
         * @param position position of the item to remove
         */
        remove_text(position: number): void;
        /**
         * Set the icon displayed in the combo box.
         * @param icon_name Icon name to use for displayed icon
         */
        set_active_icon_name(icon_name: string): void;
        /**
         * Set the text displayed in the combo box
         * @param text text to display
         */
        set_active_text(text: string): void;
        /**
         * Set the current combo box text from the item at `index` in the list.
         * @param index the index of the list item to set
         */
        set_index(index: number): void;
    }

    module DeformBowTie {
        // Constructor properties interface
    }

    /**
     * The contents of this structure is private and should only be accessed using
     * the provided API.
     */
    class DeformBowTie extends DeformTexture {
        // Own properties of Mx-1.0.DeformBowTie

        flip_back: boolean;
        flipBack: boolean;
        period: number;

        // Constructors of Mx-1.0.DeformBowTie

        static ['new'](): DeformBowTie;

        // Owm methods of Mx-1.0.DeformBowTie

        get_flip_back(): boolean;
        get_period(): number;
        set_flip_back(flip_back: boolean): void;
        set_period(period: number): void;
    }

    module DeformPageTurn {
        // Constructor properties interface
    }

    /**
     * The contents of this structure is private and should only be accessed using
     * the provided API.
     */
    class DeformPageTurn extends DeformTexture {
        // Own properties of Mx-1.0.DeformPageTurn

        angle: number;
        period: number;
        radius: number;

        // Constructors of Mx-1.0.DeformPageTurn

        static ['new'](): DeformPageTurn;

        // Owm methods of Mx-1.0.DeformPageTurn

        get_angle(): number;
        get_period(): number;
        get_radius(): number;
        set_angle(angle: number): void;
        set_period(period: number): void;
        set_radius(radius: number): void;
    }

    module DeformTexture {
        // Constructor properties interface
    }

    /**
     * The contents of this structure is private and should only be accessed using
     * the provided API.
     */
    abstract class DeformTexture extends Widget {
        // Own properties of Mx-1.0.DeformTexture

        back: Clutter.Texture;
        front: Clutter.Texture;
        tiles_x: number;
        tilesX: number;
        tiles_y: number;
        tilesY: number;

        // Owm methods of Mx-1.0.DeformTexture

        /**
         * Retrieve the mesh resolution of the texture.
         * See mx_deform_texture_set_resolution().
         */
        get_resolution(): void;
        /**
         * Retrieves the textures used by `texture`.
         */
        get_textures(): void;
        /**
         * Make `texture` re-calculate its vertices and redraw itself.
         */
        invalidate(): void;
        /**
         * Sets the amount of sub-divisions used on each axis when generating
         * the mesh, where a value of 1 for each axis will produce a single quad.
         * @param tiles_x The horizontal resolution
         * @param tiles_y The vertical resolution
         */
        set_resolution(tiles_x: number, tiles_y: number): void;
        /**
         * Set textures to use as the sources of a deformation effect. Textures
         * must not be parented.
         * @param front #ClutterTexture to use for the front-face.
         * @param back #ClutterTexture to use for the back-face.
         */
        set_textures(front: Clutter.Texture, back: Clutter.Texture): void;
    }

    module DeformWaves {
        // Constructor properties interface
    }

    /**
     * The contents of this structure is private and should only be accessed using
     * the provided API.
     */
    class DeformWaves extends DeformTexture {
        // Own properties of Mx-1.0.DeformWaves

        amplitude: number;
        angle: number;
        period: number;
        radius: number;

        // Constructors of Mx-1.0.DeformWaves

        static ['new'](): DeformWaves;

        // Owm methods of Mx-1.0.DeformWaves

        get_amplitude(): number;
        get_angle(): number;
        get_period(): number;
        get_radius(): number;
        set_amplitude(amplitude: number): void;
        set_angle(angle: number): void;
        set_period(period: number): void;
        set_radius(radius: number): void;
    }

    module Dialog {
        // Constructor properties interface
    }

    /**
     * The contents of this structure is private and should only be accessed using
     * the provided API.
     */
    class Dialog extends Bin {
        // Constructors of Mx-1.0.Dialog

        static ['new'](): Dialog;

        // Owm methods of Mx-1.0.Dialog

        /**
         * Adds an #MxButton that represents `action` to the button area of `dialog`
         * @param action A #MxAction
         */
        add_action(action: Action): void;
        /**
         * Retrieves a list of actions added to `dialog`.
         * @returns A newly allocated #GList of #MxAction objects. The actions in the list are owned by the dialog.
         */
        get_actions(): Action[];
        /**
         * Removes the button associated with `action` from the button area of `dialog`
         * @param action A #MxAction
         */
        remove_action(action: Action): void;
        /**
         * Sets the parent of the #MxDialog. This is the actor over which the
         * modal frame will appear when clutter_actor_show() is called.
         * @param actor A #ClutterActor
         */
        set_transient_parent(actor: Clutter.Actor): void;
    }

    module Entry {
        // Signal callback interfaces

        interface PrimaryIconClicked {
            (): void;
        }

        interface SecondaryIconClicked {
            (): void;
        }

        // Constructor properties interface
    }

    /**
     * The contents of this structure is private and should only be accessed using
     * the provided API.
     */
    class Entry extends Widget {
        // Own properties of Mx-1.0.Entry

        readonly clutter_text: Clutter.Text;
        readonly clutterText: Clutter.Text;
        hint_text: string;
        hintText: string;
        icon_highlight_suffix: string;
        iconHighlightSuffix: string;
        password_char: number;
        passwordChar: number;
        primary_icon_tooltip_text: string;
        primaryIconTooltipText: string;
        secondary_icon_tooltip_text: string;
        secondaryIconTooltipText: string;
        text: string;

        // Constructors of Mx-1.0.Entry

        static ['new'](): Entry;

        static new_with_text(text: string): Entry;

        // Owm methods of Mx-1.0.Entry

        /**
         * Retrieve the internal #ClutterText so that extra parameters can be set
         * @returns the #ClutterText used by #MxEntry. The entry is owned by the #MxEntry and should not be unref'ed by the application.
         */
        get_clutter_text(): Clutter.Actor;
        /**
         * Gets the text that is displayed when the entry is empty and unfocused
         * @returns the current value of the hint property. This string is owned by the #MxEntry and should not be freed or modified.
         */
        get_hint_text(): string;
        /**
         * Get the suffix appended to the filename to use for the highlighted version
         * of the icon.
         * @returns the highlight filename suffix. This string is owned by the #MxEntry and should not be freed or modified.
         */
        get_icon_highlight_suffix(): string;
        /**
         * Gets the character to display instead of the text.
         * @returns a character, or 0 if input should not be hidden.
         */
        get_password_char(): number;
        /**
         * Get the text displayed on the entry
         * @returns the text for the entry. This must not be freed by the application
         */
        get_text(): string;
        /**
         * Sets the text to display when the entry is empty and unfocused. When the
         * entry is displaying the hint, it has a pseudo class of "indeterminate".
         * A value of NULL unsets the hint.
         * @param text text to set as the entry hint
         */
        set_hint_text(text: string): void;
        /**
         * Sets the suffix appended to the filename to use for the highlighted version
         * of the icon. e.g. if you have set your primay icon to "primary-icon.png"
         * and the suffix to "-highlight" #MxEntry will look for
         * "primary-icon-highlight.png"
         * @param suffix the suffix to append to the filename for the highlight version
         */
        set_icon_highlight_suffix(suffix: string): void;
        /**
         * Sets the character to display instead of the text. Use 0 to display
         * the actual text.
         * @param password_char text to set as the entry hint
         */
        set_password_char(password_char: number): void;
        /**
         * Set the primary icon of the entry to the given filename
         * @param filename filename of an icon
         */
        set_primary_icon_from_file(filename: string): void;
        set_primary_icon_tooltip_text(text: string): void;
        /**
         * Set the primary icon of the entry to the given filename
         * @param filename filename of an icon
         */
        set_secondary_icon_from_file(filename: string): void;
        set_secondary_icon_tooltip_text(text: string): void;
        /**
         * Sets the text displayed on the entry
         * @param text text to set the entry to
         */
        set_text(text: string): void;
    }

    module Expander {
        // Signal callback interfaces

        interface ExpandComplete {
            (): void;
        }

        // Constructor properties interface
    }

    /**
     * The contents of the this structure are private and should only be accessed
     * through the public API.
     */
    class Expander extends Bin {
        // Own properties of Mx-1.0.Expander

        expanded: boolean;
        label: string;

        // Constructors of Mx-1.0.Expander

        static ['new'](): Expander;

        // Owm methods of Mx-1.0.Expander

        /**
         * Get the current state of the expander (the value of #MxExpander:expanded)
         * @returns #TRUE if the expander is open, #FALSE if it is closed
         */
        get_expanded(): boolean;
        /**
         * Set the state (the #MxExpander:expanded property) of the expander.
         * This will cause the expander to open or close.
         * @param expanded the state of the expander to set
         */
        set_expanded(expanded: boolean): void;
        /**
         * Sets the text displayed as the title of the expander
         * @param label string to set as the expander label
         */
        set_label(label: string): void;
    }

    module FadeEffect {
        // Constructor properties interface
    }

    class FadeEffect extends Clutter.OffscreenEffect {
        // Own properties of Mx-1.0.FadeEffect

        border_bottom: number;
        borderBottom: number;
        border_left: number;
        borderLeft: number;
        border_right: number;
        borderRight: number;
        border_top: number;
        borderTop: number;
        bounds_height: number;
        boundsHeight: number;
        bounds_width: number;
        boundsWidth: number;
        bounds_x: number;
        boundsX: number;
        bounds_y: number;
        boundsY: number;
        color: Clutter.Color;
        freeze_update: boolean;
        freezeUpdate: boolean;

        // Constructors of Mx-1.0.FadeEffect

        static ['new'](): FadeEffect;

        // Owm methods of Mx-1.0.FadeEffect

        /**
         * Retrieves the border values for `effect`.
         */
        get_border(): void;
        /**
         * Retrieves the bounding box of the effect.
         */
        get_bounds(): void;
        /**
         * Retrieves the color used for the fade effect.
         */
        get_color(): void;
        /**
         * Sets the border to be used for the fading effect. This is the number of
         * pixels on each side of the effect that should be used to fade.
         * @param top The upper border, in pixels
         * @param right The right border, in pixels
         * @param bottom The lower border, in pixels
         * @param left The left border, in pixels
         */
        set_border(top: number, right: number, bottom: number, left: number): void;
        /**
         * Sets the bounding box of the effect. The effect will essentially treat
         * this box as a clipping rectangle. Setting width or height to %0 will
         * use the width or height of the #ClutterActor the effect is attached to.
         *
         * <note><para>
         * The effect border will apply to the bounds, and not to the un-altered
         * rectangle, so an effect with an %x of %5 and a %left-border of %5 will
         * have a gap of 5 blank pixels to the left, with a fade length of 5 pixels.
         * </para></note>
         * @param x The x value of the effect bounds, in pixels
         * @param y The y value of the effect bounds, in pixels
         * @param width The width of the effect bounds, in pixels, or %0
         * @param height The height of the effect bounds, in pixels, or %0
         */
        set_bounds(x: number, y: number, width: number, height: number): void;
        /**
         * Sets the color of the fade effect. The effect will fade out towards
         * the set border to this color.
         * @param color A #ClutterColor
         */
        set_color(color: Clutter.Color): void;
    }

    module FloatingWidget {
        // Constructor properties interface
    }

    /**
     * The contents of this structure are private and should only be accessed
     * through the public API.
     */
    abstract class FloatingWidget extends Widget {}

    module FocusManager {
        // Constructor properties interface
    }

    /**
     * The contents of this structure are private and should only be accessed
     * through the public API.
     */
    class FocusManager extends GObject.Object {
        // Own properties of Mx-1.0.FocusManager

        readonly focused: Clutter.Actor;
        readonly stage: Clutter.Stage;

        // Owm methods of Mx-1.0.FocusManager

        /**
         * Get the MxFocusManager associated with a stage, or create one if none exist
         * for the specified stage.
         * @param stage A #ClutterStage
         */
        static get_for_stage(stage: Clutter.Stage): FocusManager;

        // Owm methods of Mx-1.0.FocusManager

        /**
         * Get the currently focused #MxFocusable
         * @returns MxFocusable
         */
        get_focused(): Focusable;
        /**
         * Get the stage the MxFocusManager is associated with
         * @returns A #ClutterStage
         */
        get_stage(): Clutter.Stage;
        /**
         * Moves the current focus in the given direction.
         * @param direction The direction to move focus in
         */
        move_focus(direction: FocusDirection): void;
        /**
         * Sets the currently focused actor, with an #MxFocusHint of
         * %MX_FOCUS_HINT_PRIOR.
         *
         * Note: the final focused object may not be the same as `focusable` if
         * `focusable` does not accept focus directly.
         * @param focusable the object to set focus on
         */
        push_focus(focusable: Focusable): void;
        /**
         * Similar to #mx_focus_manager_push_focus, but allows the hint to be specified.
         *
         * Note: the final focused object may not be the same as `focusable` if
         * `focusable` does not accept focus directly.
         * @param focusable the object to set focus on
         * @param hint an #MxFocusHint
         */
        push_focus_with_hint(focusable: Focusable, hint: FocusHint): void;
    }

    module Frame {
        // Constructor properties interface
    }

    /**
     * The contents of this structure are private and should only be accessed
     * through the public API.
     */
    class Frame extends Bin {
        // Constructors of Mx-1.0.Frame

        static ['new'](): Frame;
    }

    module Grid {
        // Constructor properties interface
    }

    /**
     * The contents of the this structure are private and should only be accessed
     * through the public API.
     */
    class Grid extends Widget {
        // Own properties of Mx-1.0.Grid

        child_x_align: Align;
        childXAlign: Align;
        child_y_align: Align;
        childYAlign: Align;
        column_spacing: number;
        columnSpacing: number;
        homogenous_columns: boolean;
        homogenousColumns: boolean;
        homogenous_rows: boolean;
        homogenousRows: boolean;
        line_alignment: Align;
        lineAlignment: Align;
        max_stride: number;
        maxStride: number;
        orientation: Orientation;
        row_spacing: number;
        rowSpacing: number;

        // Constructors of Mx-1.0.Grid

        static ['new'](): Grid;

        // Owm methods of Mx-1.0.Grid

        get_child_x_align(): Align;
        get_child_y_align(): Align;
        get_column_spacing(): number;
        get_homogenous_columns(): boolean;
        get_homogenous_rows(): boolean;
        get_line_alignment(): boolean;
        get_max_stride(): number;
        get_orientation(): Orientation;
        get_row_spacing(): number;
        set_child_x_align(value: Align): void;
        set_child_y_align(value: Align): void;
        set_column_spacing(value: number): void;
        set_homogenous_columns(value: boolean): void;
        set_homogenous_rows(value: boolean): void;
        set_line_alignment(value: Align): void;
        set_max_stride(value: number): void;
        set_orientation(orientation: Orientation): void;
        set_row_spacing(value: number): void;
    }

    module Icon {
        // Constructor properties interface
    }

    /**
     * The contents of this structure are private and should only be accessed
     * through the public API.
     */
    class Icon extends Widget {
        // Own properties of Mx-1.0.Icon

        icon_name: string;
        iconName: string;
        icon_size: number;
        iconSize: number;

        // Constructors of Mx-1.0.Icon

        static ['new'](): Icon;

        // Owm methods of Mx-1.0.Icon

        get_icon_name(): string;
        get_icon_size(): number;
        set_icon_name(icon_name: string): void;
        set_icon_size(size: number): void;
    }

    module IconTheme {
        // Constructor properties interface
    }

    /**
     * The contents of this structure are private and should only be accessed
     * through the public API.
     */
    class IconTheme extends GObject.Object {
        // Own properties of Mx-1.0.IconTheme

        theme_name: string;
        themeName: string;

        // Constructors of Mx-1.0.IconTheme

        static ['new'](): IconTheme;

        // Owm methods of Mx-1.0.IconTheme

        /**
         * Return the default #MxIconTheme object used by the toolkit.
         */
        static get_default(): IconTheme;

        // Owm methods of Mx-1.0.IconTheme

        /**
         * Gets the directories the #MxIconTheme will search in to find icons.
         * @returns the search paths
         */
        get_search_paths(): string[];
        /**
         * Get the value of the #MxIconTheme:theme-name property.
         * @returns the current value of the "theme-name" property.
         */
        get_theme_name(): string;
        has_icon(icon_name: string): boolean;
        /**
         * If the icon is available, returns a #CoglHandle of the icon.
         * @param icon_name The name of the icon
         * @param size The desired size of the icon
         * @returns a #CoglHandle of the icon, or %NULL.
         */
        lookup(icon_name: string, size: number): Cogl.Handle;
        /**
         * If the icon is available, returns a #ClutterTexture of the icon.
         * @param icon_name The name of the icon
         * @param size The desired size of the icon
         * @returns a #ClutterTexture of the icon, or %NULL.
         */
        lookup_texture(icon_name: string, size: number): Clutter.Texture;
        /**
         * Sets the directories the #MxIconTheme will search in to find icons.
         * By default, it will look in the default system and local icon
         * directories.
         * @param paths a list of search paths
         */
        set_search_paths(paths: string[]): void;
        /**
         * Set the value of the #MxIconTheme:theme-name property. This will cause the
         * icon theme to be loaded if it differs from the existing theme name. If the
         * theme could not be loaded, it will fall back to using the default icon theme
         * (hicolor).
         *
         * This will override the system's theme setting. To revert to the system
         * icon theme, this function can be called with a %NULL `theme_name` argument.
         * @param theme_name the name of an icon theme to load, or %NULL
         */
        set_theme_name(theme_name: string): void;
    }

    module Image {
        // Signal callback interfaces

        interface ImageLoadError {
            (object: GLib.Error): void;
        }

        interface ImageLoaded {
            (): void;
        }

        // Constructor properties interface
    }

    /**
     * The contents of this structure are private and should only be accessed
     * through the public API.
     */
    class Image extends Widget {
        // Own properties of Mx-1.0.Image

        allow_upscale: boolean;
        allowUpscale: boolean;
        image_rotation: number;
        imageRotation: number;
        load_async: boolean;
        loadAsync: boolean;
        scale_height_threshold: number;
        scaleHeightThreshold: number;
        scale_mode: ImageScaleMode;
        scaleMode: ImageScaleMode;
        scale_width_threshold: number;
        scaleWidthThreshold: number;
        transition_duration: number;
        transitionDuration: number;

        // Constructors of Mx-1.0.Image

        static ['new'](): Image;

        // Owm methods of Mx-1.0.Image

        /**
         * Sets the value of #MxImage:scale-mode to `scale_mode` and animates the
         * scale factor of the image between the previous value and the new value.
         * @param mode a #ClutterAnimationMode
         * @param duration duration of the animation in milliseconds
         * @param scale_mode The #MxImageScaleMode to set
         */
        animate_scale_mode(mode: number, duration: number, scale_mode: ImageScaleMode): void;
        /**
         * Clear the current image and set a blank, transparent image.
         * @returns static void
         */
        clear(): void;
        /**
         * Determines whether image up-scaling is allowed.
         * @returns %TRUE if upscaling is allowed, %FALSE otherwise
         */
        get_allow_upscale(): boolean;
        /**
         * Get the value of the MxImage:image-rotation property.
         * @returns The value of the image-rotation property.
         */
        get_image_rotation(): number;
        /**
         * Determines whether asynchronous image loading is in use.
         * @returns %TRUE if images are set to load asynchronously, %FALSE otherwise
         */
        get_load_async(): boolean;
        /**
         * Retrieves the height scaling threshold.
         * @returns The height scaling threshold, in pixels
         */
        get_scale_height_threshold(): number;
        /**
         * Get the current scale mode of `MxImage`.
         * @returns The current MxImageScaleMode
         */
        get_scale_mode(): ImageScaleMode;
        /**
         * Retrieves the width scaling threshold.
         * @returns The width scaling threshold, in pixels
         */
        get_scale_width_threshold(): number;
        /**
         * Get the value of the MxImage:transition-duration property.
         * @returns The value of the transition-duration property.
         */
        get_transition_duration(): number;
        /**
         * Sets whether up-scaling of images is allowed. If set to %TRUE and a size
         * larger than the image is requested, the image will be up-scaled in
         * software.
         *
         * The advantage of this is that software up-scaling is potentially higher
         * quality, but it comes at the expense of video memory.
         * @param allow %TRUE to allow upscaling, %FALSE otherwise
         */
        set_allow_upscale(allow: boolean): void;
        /**
         * Set the image data from unencoded image data, stored in memory. In case of
         * failure, #FALSE is returned and `error` is set. It is expected that `buffer`
         * will remain accessible for the duration of the load. Once it is finished
         * with, `buffer_free_func` will be called.
         * @param buffer A buffer pointing to encoded image data
         * @returns #TRUE if the image was successfully updated
         */
        set_from_buffer(buffer: Uint8Array): boolean;
        /**
         * Set the image data from unencoded image data, stored in memory, and scales
         * it while loading. In case of failure, #FALSE is returned and `error` is set.
         * It is expected that `buffer` will remain accessible for the duration of the
         * load. Once it is finished with, `buffer_free_func` will be called. The aspect
         * ratio will always be maintained.
         * @param buffer A buffer pointing to encoded image data
         * @param width Width to scale the image to, or -1
         * @param height Height to scale the image to, or -1
         * @returns #TRUE if the image was successfully updated
         */
        set_from_buffer_at_size(buffer: Uint8Array, width: number, height: number): boolean;
        /**
         * Sets the contents of the image from the given Cogl texture.
         * @param texture A #CoglHandle to a texture
         * @returns %TRUE on success, %FALSE on failure
         */
        set_from_cogl_texture(texture: Cogl.Handle): boolean;
        /**
         * Set the image data from a buffer. In case of failure, #FALSE is returned
         * and `error` is set.
         * @param data Image data
         * @param pixel_format The #CoglPixelFormat of the buffer
         * @param width Width in pixels of image data.
         * @param height Height in pixels of image data
         * @param rowstride Distance in bytes between row starts.
         * @returns #TRUE if the image was successfully updated
         */
        set_from_data(
            data: Uint8Array,
            pixel_format: Cogl.PixelFormat,
            width: number,
            height: number,
            rowstride: number,
        ): boolean;
        /**
         * Set the image data from an image file. In case of failure, #FALSE is returned
         * and `error` is set.
         * @param filename Filename to read the file from
         * @returns #TRUE if the image was successfully updated
         */
        set_from_file(filename: string): boolean;
        /**
         * Set the image data from an image file, and scale the image during loading.
         * In case of failure, #FALSE is returned and `error` is set. The aspect ratio
         * will always be maintained.
         * @param filename Filename to read the file from
         * @param width Width to scale the image to, or -1
         * @param height Height to scale the image to, or -1
         * @returns #TRUE if the image was successfully updated
         */
        set_from_file_at_size(filename: string, width: number, height: number): boolean;
        /**
         * Set the MxImage:image-rotation property.
         * @param rotation Rotation angle in degrees
         */
        set_image_rotation(rotation: number): void;
        /**
         * Sets whether to load images asynchronously. Asynchronous image loading
         * requires thread support (see g_thread_init()).
         *
         * When using asynchronous image loading, all image-loading functions will
         * return immediately as successful. The #MxImage::image-loaded and
         * #MxImage::image-load-error signals are used to signal success or failure
         * of asynchronous image loading.
         * @param load_async %TRUE to load images asynchronously
         */
        set_load_async(load_async: boolean): void;
        /**
         * Sets the threshold used to determine whether to scale the height of the
         * image. If a specific height is requested, the image height is allowed to
         * differ by this amount before scaling is employed.
         *
         * This can be useful to avoid excessive CPU usage when the image differs
         * only slightly to the desired size.
         * @param pixels Number of pixels
         */
        set_scale_height_threshold(pixels: number): void;
        /**
         * Set the scale mode on `MxImage`
         * @param mode The #MxImageScaleMode to set
         */
        set_scale_mode(mode: ImageScaleMode): void;
        /**
         * Sets the threshold used to determine whether to scale the width of the
         * image. If a specific width is requested, the image width is allowed to
         * differ by this amount before scaling is employed.
         *
         * This can be useful to avoid excessive CPU usage when the image differs
         * only slightly to the desired size.
         * @param pixels Number of pixels
         */
        set_scale_width_threshold(pixels: number): void;
        /**
         * Set the MxImage:transition-duration property.
         * @param duration Transition duration in milliseconds
         */
        set_transition_duration(duration: number): void;
    }

    module ItemView {
        // Constructor properties interface
    }

    /**
     * The contents of the this structure are private and should only be accessed
     * through the public API.
     */
    class ItemView extends Grid {
        // Own properties of Mx-1.0.ItemView

        factory: GObject.Object;
        item_type: GObject.GType;
        itemType: GObject.GType;
        model: Clutter.Model;

        // Constructors of Mx-1.0.ItemView

        static ['new'](): ItemView;

        // Owm methods of Mx-1.0.ItemView

        /**
         * Adds an attribute mapping between the current model and the objects from the
         * cell renderer.
         * @param attribute Name of the attribute
         * @param column Column number
         */
        add_attribute(attribute: string, column: number): void;
        /**
         * Freeze the view. This means that the view will not act on changes to the
         * model until it is thawed. Call #mx_item_view_thaw to thaw the view
         */
        freeze(): void;
        /**
         * Gets the #MxItemFactory used for creating new items.
         * @returns A #MxItemFactory.
         */
        get_factory(): ItemFactory;
        /**
         * Get the item type currently being used to create items
         * @returns a #GType
         */
        get_item_type(): GObject.GType;
        /**
         * Get the model currently used by the #MxItemView
         * @returns the current #ClutterModel
         */
        get_model(): Clutter.Model;
        /**
         * Sets `factory` to be the factory used for creating new items
         * @param factory A #MxItemFactory
         */
        set_factory(factory: ItemFactory): void;
        /**
         * Set the item type used to create items representing each row in the
         * model
         * @param item_type A #GType
         */
        set_item_type(item_type: GObject.GType): void;
        /**
         * Set the model used by the #MxItemView
         * @param model A #ClutterModel
         */
        set_model(model: Clutter.Model): void;
        /**
         * Thaw the view. This means that the view will now act on changes to the
         * model.
         */
        thaw(): void;
    }

    module KineticScrollView {
        // Constructor properties interface
    }

    /**
     * The contents of this structure is private and should only be accessed using
     * the provided API.
     */
    class KineticScrollView extends Bin {
        // Own properties of Mx-1.0.KineticScrollView

        acceleration_factor: number;
        accelerationFactor: number;
        clamp_duration: number;
        clampDuration: number;
        clamp_mode: number;
        clampMode: number;
        clamp_to_center: boolean;
        clampToCenter: boolean;
        deceleration: number;
        mouse_button: number;
        mouseButton: number;
        overshoot: number;
        scroll_policy: ScrollPolicy;
        scrollPolicy: ScrollPolicy;
        readonly state: KineticScrollViewState;
        use_captured: boolean;
        useCaptured: boolean;

        // Constructors of Mx-1.0.KineticScrollView

        static ['new'](): KineticScrollView;

        // Owm methods of Mx-1.0.KineticScrollView

        /**
         * Retrieves the initial acceleration factor of the kinetic scroll-view.
         * @returns The initial acceleration factor of the kinetic scroll-view
         */
        get_acceleration_factor(): number;
        /**
         * Retrieves the duration of the adjustment clamp animation.
         * @returns Clamp duration
         */
        get_clamp_duration(): number;
        /**
         * Retrieves the animation mode to use for the adjustment clamp animation.
         * @returns Clamp mode
         */
        get_clamp_mode(): number;
        /**
         * Retrieves whether to clamp to step increments based on the center of the page.
         * @returns Clamp to center
         */
        get_clamp_to_center(): boolean;
        /**
         * Retrieves the deceleration rate of the kinetic scroll-view.
         * @returns The deceleration rate of the kinetic scroll-view
         */
        get_deceleration(): number;
        /**
         * Gets the #MxKineticScrollView:mouse-button property
         * @returns The mouse button number used to initiate drag events on the kinetic scroll-view
         */
        get_mouse_button(): number;
        /**
         * Retrieves the deceleration rate multiplier used when the scroll-view is
         * scrolling beyond its boundaries.
         */
        get_overshoot(): number;
        /**
         * Retrieves the scrolling policy of the kinetic scroll-view.
         * @returns A #MxScrollPolicy
         */
        get_scroll_policy(): ScrollPolicy;
        /**
         * Gets the #MxKineticScrollView:use-captured property.
         * @returns %TRUE if captured-events should be used to initiate scrolling
         */
        get_use_captured(): boolean;
        /**
         * Factor applied to the initial momentum.
         * @param acceleration_factor The acceleration factor
         */
        set_acceleration_factor(acceleration_factor: number): void;
        /**
         * Duration of the adjustment clamp animation.
         * @param clamp_duration Clamp duration
         */
        set_clamp_duration(clamp_duration: number): void;
        /**
         * Animation mode to use for the adjustment clamp animation.
         * @param clamp_mode Clamp mode
         */
        set_clamp_mode(clamp_mode: number): void;
        /**
         * Set whether to clamp to step increments based on the center of the page.
         * @param clamp_to_center Clamp to center
         */
        set_clamp_to_center(clamp_to_center: boolean): void;
        /**
         * Sets the deceleration rate when a drag is finished on the kinetic
         * scroll-view. This is the value that the momentum is divided by
         * every 60th of a second.
         * @param rate The deceleration rate
         */
        set_deceleration(rate: number): void;
        /**
         * Sets the mouse button number used to initiate drag events on the kinetic
         * scroll-view.
         * @param button A mouse button number
         */
        set_mouse_button(button: number): void;
        /**
         * Sets the rate at which the view will decelerate when scrolling beyond its
         * boundaries. The deceleration rate will be multiplied by this value every
         * 60th of a second when the view is scrolling outside of the range set by its
         * adjustments.
         *
         * See mx_kinetic_scroll_view_set_deceleration()
         * @param overshoot The rate at which the view will decelerate when scrolling beyond its boundaries.
         */
        set_overshoot(overshoot: number): void;
        /**
         * Sets the scrolling policy for the kinetic scroll-view. This controls the
         * possible axes of movement, and can affect the minimum size of the widget.
         * @param policy A #MxScrollPolicy
         */
        set_scroll_policy(policy: ScrollPolicy): void;
        /**
         * Sets whether to use captured events to initiate drag events. This can be
         * used to block events that would initiate scrolling from reaching the child
         * actor.
         * @param use_captured %TRUE to use captured events
         */
        set_use_captured(use_captured: boolean): void;
        /**
         * Stops any current movement due to kinetic scrolling.
         */
        stop(): void;
    }

    module Label {
        // Constructor properties interface
    }

    /**
     * The contents of this structure is private and should only be accessed using
     * the provided API.
     */
    class Label extends Widget {
        // Own properties of Mx-1.0.Label

        readonly clutter_text: Clutter.Text;
        readonly clutterText: Clutter.Text;
        fade_out: boolean;
        fadeOut: boolean;
        /**
         * Whether to wrap the lines of #MxLabel:text if the contents
         * exceed the available allocation.
         */
        line_wrap: boolean;
        /**
         * Whether to wrap the lines of #MxLabel:text if the contents
         * exceed the available allocation.
         */
        lineWrap: boolean;
        /**
         * Show a tooltip when there is not enough space to display the text. If set
         * to %TRUE, this will also cause the #ClutterActor:reactive property to be
         * enabled.
         */
        show_tooltip: boolean;
        /**
         * Show a tooltip when there is not enough space to display the text. If set
         * to %TRUE, this will also cause the #ClutterActor:reactive property to be
         * enabled.
         */
        showTooltip: boolean;
        text: string;
        use_markup: boolean;
        useMarkup: boolean;
        x_align: Align;
        xAlign: Align;
        y_align: Align;
        yAlign: Align;

        // Constructors of Mx-1.0.Label

        static ['new'](): Label;

        static new_with_text(text: string): Label;

        // Owm methods of Mx-1.0.Label

        /**
         * Retrieve the internal #ClutterText so that extra parameters can be set
         * @returns the #ClutterText used by #MxLabel. The label is owned by the #MxLabel and should not be unref'ed by the application.
         */
        get_clutter_text(): Clutter.Actor;
        /**
         * Determines whether the label has been set to fade out when there isn't
         * enough space allocated to display the entire label.
         * @returns %TRUE if the label is set to fade out, %FALSE otherwise
         */
        get_fade_out(): boolean;
        /**
         * Get the value of the #MxLabel:line-wrap property.
         * @returns %TRUE if the "line-wrap" property is set.
         */
        get_line_wrap(): boolean;
        /**
         * Returns the current value of the #MxLabel:show-tooltip property.
         * @returns %TRUE if the #MxLabel:show-tooltip property is enabled
         */
        get_show_tooltip(): boolean;
        /**
         * Get the text displayed on the label
         * @returns the text for the label. This must not be freed by the application
         */
        get_text(): string;
        /**
         * Determines whether the text of the label is being treated as Pango markup.
         * @returns %TRUE if the text of the label is treated as Pango markup, %FALSE otherwise.
         */
        get_use_markup(): boolean;
        get_x_align(): Align;
        get_y_align(): Align;
        /**
         * Set whether to fade out the end of the label, instead of ellipsizing.
         * Enabling this mode will also set the #ClutterText:single-line-mode and
         * #ClutterText:ellipsize properties.
         * @param fade %TRUE to fade out, %FALSE otherwise
         */
        set_fade_out(fade: boolean): void;
        /**
         * Set the value of the #MxLabel:line-wrap property.
         * @param line_wrap new value of the line-wrap property.
         */
        set_line_wrap(line_wrap: boolean): void;
        /**
         * Set the value of the #MxLabel:show-tooltip property
         * @param show_tooltip %TRUE if the tooltip should be shown
         */
        set_show_tooltip(show_tooltip: boolean): void;
        /**
         * Sets the text displayed on the label
         * @param text text to set the label to
         */
        set_text(text: string): void;
        /**
         * Sets whether the text of the label should be treated as Pango markup.
         * @param use_markup %TRUE to use Pango markup, %FALSE otherwise
         */
        set_use_markup(use_markup: boolean): void;
        set_x_align(align: Align): void;
        set_y_align(align: Align): void;
    }

    module ListView {
        // Constructor properties interface
    }

    /**
     * The contents of the this structure are private and should only be accessed
     * through the public API.
     */
    class ListView extends BoxLayout {
        // Own properties of Mx-1.0.ListView

        factory: GObject.Object;
        item_type: GObject.GType;
        itemType: GObject.GType;
        model: Clutter.Model;

        // Constructors of Mx-1.0.ListView

        static ['new'](): ListView;

        // Owm methods of Mx-1.0.ListView

        /**
         * Adds an attribute mapping between the current model and the objects from the
         * cell renderer.
         * @param attribute Name of the attribute
         * @param column Column number
         */
        add_attribute(attribute: string, column: number): void;
        /**
         * Freeze the view. This means that the view will not act on changes to the
         * model until it is thawed. Call #mx_list_view_thaw to thaw the view.
         */
        freeze(): void;
        /**
         * Gets the #MxItemFactory used for creating new list items.
         * @returns A #MxItemFactory.
         */
        get_factory(): ItemFactory;
        /**
         * Get the item type currently being used to create items
         * @returns a #GType
         */
        get_item_type(): GObject.GType;
        /**
         * Get the model currently used by the #MxListView
         * @returns the current #ClutterModel
         */
        get_model(): Clutter.Model;
        /**
         * Sets `factory` to be the factory used for creating new list items
         * @param factory A #MxItemFactory
         */
        set_factory(factory: ItemFactory): void;
        /**
         * Set the item type used to create items representing each row in the
         * model
         * @param item_type A #GType
         */
        set_item_type(item_type: GObject.GType): void;
        /**
         * Set the model used by the #MxListView
         * @param model A #ClutterModel
         */
        set_model(model: Clutter.Model): void;
        /**
         * Thaw the view. This means that the view will now act on changes to the
         * model.
         */
        thaw(): void;
    }

    module Menu {
        // Signal callback interfaces

        interface ActionActivated {
            (object: Action): void;
        }

        // Constructor properties interface
    }

    /**
     * The contents of this structure are private and should only be accessed
     * through the public API.
     */
    class Menu extends FloatingWidget {
        // Constructors of Mx-1.0.Menu

        static ['new'](): Menu;

        // Owm methods of Mx-1.0.Menu

        /**
         * Append `action` to `menu`.
         * @param action A #MxAction
         */
        add_action(action: Action): void;
        /**
         * Remove `action` from `menu`.
         * @param action A #MxAction
         */
        remove_action(action: Action): void;
        /**
         * Remove all the actions from `menu`.
         */
        remove_all(): void;
        /**
         * Moves the menu to the specified position and shows it.
         * @param x X position
         * @param y Y position
         */
        show_with_position(x: number, y: number): void;
    }

    module Notebook {
        // Constructor properties interface
    }

    /**
     * The contents of this structure is private and should only be accessed using
     * the provided API.
     */
    class Notebook extends Widget {
        // Own properties of Mx-1.0.Notebook

        current_page: Clutter.Actor;
        currentPage: Clutter.Actor;
        enable_gestures: boolean;
        enableGestures: boolean;

        // Constructors of Mx-1.0.Notebook

        static ['new'](): Notebook;

        // Owm methods of Mx-1.0.Notebook

        /**
         * Get the current page
         * @returns the current page
         */
        get_current_page(): Clutter.Actor;
        get_enable_gestures(): boolean;
        set_current_page(page: Clutter.Actor): void;
        set_enable_gestures(enabled: boolean): void;
    }

    module Offscreen {
        // Constructor properties interface
    }

    /**
     * The contents of this structure is private and should only be accessed using
     * the provided API.
     */
    class Offscreen extends Clutter.Texture {
        // Own properties of Mx-1.0.Offscreen

        accumulation_enabled: boolean;
        accumulationEnabled: boolean;
        readonly accumulation_material: any;
        readonly accumulationMaterial: any;
        auto_update: boolean;
        autoUpdate: boolean;
        /**
         * The off-screen buffer used to draw the child.
         */
        readonly buffer: any;
        child: Clutter.Actor;
        pick_child: boolean;
        pickChild: boolean;
        redirect_enabled: boolean;
        redirectEnabled: boolean;

        // Constructors of Mx-1.0.Offscreen

        static ['new'](): Offscreen;

        // Owm methods of Mx-1.0.Offscreen

        /**
         * Gets the value of the #MxOffscreen:accumulation-enabled property.
         * @returns #TRUE if the accumulation buffer is enabled
         */
        get_accumulation_enabled(): boolean;
        /**
         * Gets the #MxOffscreen:accumulation-material property.
         * @returns The #CoglHandle for the material used for the accumulation buffer
         */
        get_accumulation_material(): Cogl.Handle;
        /**
         * Gets the value of the #MxOffscreen:auto-update property.
         * @returns #TRUE if automatic updating of the offscreen surface is enabled
         */
        get_auto_update(): boolean;
        /**
         * Gets the value of the #MxOffscreen:buffer property.
         * @returns the #CoglHandle for the offscreen buffer object
         */
        get_buffer(): Cogl.Handle;
        /**
         * Gets the value of the #MxOffscreen:child property.
         * @returns The child of the offscreen widget
         */
        get_child(): Clutter.Actor;
        /**
         * Gets the value of the #MxOffscreen:pick-child property.
         * @returns #TRUE if picking of the child is enabled.
         */
        get_pick_child(): boolean;
        /**
         * Gets the value of the #MxOffscreen:redirect-enabled property.
         * @returns #TRUE if offscreen redirection is enabled
         */
        get_redirect_enabled(): boolean;
        /**
         * Sets whether the accumulation buffer is enabled. When enabled, an extra
         * offscreen buffer is allocated, and the contents of the offscreen texture
         * are blended with this accumulation buffer. By default, the blend function
         * is set to blend the contents of the offscreen texture with the accumulation
         * buffer at the opacity specified in the alpha component of the blend
         * constant. This opacity is 50% by default.
         * @param enable #TRUE to enable an accumulation buffer
         */
        set_accumulation_enabled(enable: boolean): void;
        /**
         * Enable automatic updating of the offscreen surface when the child is
         * updated.
         * @param auto_update #TRUE if the offscreen surface should be automatically updated
         */
        set_auto_update(auto_update: boolean): void;
        /**
         * Redirects the painting of `actor` to the offscreen surface owned by
         * `offscreen`. In the event that `actor` is unparented, it will be parented
         * to `offscreen`. Note that when you redirect the painting of `actor,` it
         * will no longer be painted in its original position in the scenegraph.
         * @param actor A #ClutterActor
         */
        set_child(actor: Clutter.Actor): void;
        /**
         * Enable picking of the child actor.
         * @param pick #TRUE to enable picking of the child actor
         */
        set_pick_child(pick: boolean): void;
        /**
         * Sets the value of the #MxOffscreen:redirect-enabled property. When
         * redirection is enabled, the painting of the child of `offscreen` will be
         * redirected to the texture of `offscreen`.
         * @param enabled #TRUE if redirection to the offscreen surface should be enabled
         */
        set_redirect_enabled(enabled: boolean): void;
        /**
         * Updates the offscreen surface. This causes the child of `offscreen` to be
         * drawn into the texture of `offscreen`.
         */
        update(): void;
    }

    module PathBar {
        // Constructor properties interface
    }

    /**
     * The contents of this structure is private and should only be accessed using
     * the provided API.
     */
    class PathBar extends Widget {
        // Own properties of Mx-1.0.PathBar

        clear_on_change: boolean;
        clearOnChange: boolean;
        editable: boolean;
        readonly entry: Entry;
        readonly level: number;

        // Constructors of Mx-1.0.PathBar

        static ['new'](): PathBar;

        // Owm methods of Mx-1.0.PathBar

        /**
         * Remove all the current buttons
         */
        clear(): void;
        /**
         * Get the value of the #MxPathBar:clear-on-change property
         * @returns the value of the "clear-on-change" property
         */
        get_clear_on_change(): boolean;
        /**
         * Get the value of the #MxPathBar:editable property.
         * @returns the current value of the "editable" property.
         */
        get_editable(): boolean;
        /**
         * Get the MxEntry used as the editable area in the MxPathBar.
         * @returns MxEntry *
         */
        get_entry(): Entry;
        get_label(level: number): string;
        get_level(): number;
        get_text(): string;
        pop(): number;
        push(name: string): number;
        /**
         * Set theh value of the #MxPathBar:clear-on-change property
         * @param clear_on_change the new value of the property
         */
        set_clear_on_change(clear_on_change: boolean): void;
        /**
         * Set the value of the #MxPathBar:editable property.
         * @param editable #TRUE if the path bar should be editable
         */
        set_editable(editable: boolean): void;
        /**
         * Set the text on the button specified by `level`
         * @param level A #gint
         * @param label A #gchar
         */
        set_label(level: number, label: string): void;
        /**
         * Set the text in the editable area of the #MxPathBar
         * @param text string to set the editable text to.
         */
        set_text(text: string): void;
    }

    module ProgressBar {
        // Constructor properties interface
    }

    /**
     * The contents of this structure are private and should only be
     * accessed through the public API.
     */
    class ProgressBar extends Widget {
        // Own properties of Mx-1.0.ProgressBar

        progress: number;

        // Constructors of Mx-1.0.ProgressBar

        static ['new'](): ProgressBar;

        // Owm methods of Mx-1.0.ProgressBar

        /**
         * Get the progress of the progress bar
         * @returns A value between 0.0 and 1.0
         */
        get_progress(): number;
        /**
         * Set the progress of the progress bar
         * @param progress A value between 0.0 and 1.0
         */
        set_progress(progress: number): void;
    }

    module ScrollBar {
        // Signal callback interfaces

        interface ScrollStart {
            (): void;
        }

        interface ScrollStop {
            (): void;
        }

        // Constructor properties interface
    }

    /**
     * The contents of this structure are private and should only be accessed
     * through the public API.
     */
    class ScrollBar extends Bin {
        // Own properties of Mx-1.0.ScrollBar

        adjustment: Adjustment;
        orientation: Orientation;

        // Constructors of Mx-1.0.ScrollBar

        static ['new'](): ScrollBar;

        static new_with_adjustment(adjustment: Adjustment): ScrollBar;

        // Owm methods of Mx-1.0.ScrollBar

        /**
         * Gets the adjustment object that stores the current position
         * of the scrollbar.
         * @returns the adjustment
         */
        get_adjustment(): Adjustment;
        get_orientation(): Orientation;
        set_adjustment(adjustment: Adjustment): void;
        set_orientation(orientation: Orientation): void;
    }

    module ScrollView {
        // Constructor properties interface
    }

    /**
     * The contents of this structure are private and should only be accessed
     * through the public API.
     */
    class ScrollView extends Bin {
        // Own properties of Mx-1.0.ScrollView

        enable_gestures: boolean;
        enableGestures: boolean;
        enable_mouse_scrolling: boolean;
        enableMouseScrolling: boolean;
        scroll_policy: ScrollPolicy;
        scrollPolicy: ScrollPolicy;

        // Constructors of Mx-1.0.ScrollView

        static ['new'](): ScrollView;

        // Owm methods of Mx-1.0.ScrollView

        /**
         * Ensures that a given region is visible in the ScrollView, with the top-left
         * taking precedence.
         * @param geometry The region to make visible
         */
        ensure_visible(geometry: Clutter.Geometry): void;
        get_enable_gestures(): boolean;
        get_enable_mouse_scrolling(): boolean;
        get_scroll_policy(): ScrollPolicy;
        set_enable_gestures(enabled: boolean): void;
        set_enable_mouse_scrolling(enabled: boolean): void;
        set_scroll_policy(policy: ScrollPolicy): void;
    }

    module Settings {
        // Constructor properties interface
    }

    class Settings extends GObject.Object {
        // Own properties of Mx-1.0.Settings

        drag_threshold: number;
        dragThreshold: number;
        font_name: string;
        fontName: string;
        icon_theme: string;
        iconTheme: string;
        long_press_timeout: number;
        longPressTimeout: number;
        small_screen: boolean;
        smallScreen: boolean;

        // Owm methods of Mx-1.0.Settings

        /**
         * Get the global MxSettings object.
         */
        static get_default(): Settings;
    }

    module Slider {
        // Constructor properties interface
    }

    /**
     * The contents of this structure are private and should only be accessed
     * through the public API.
     */
    class Slider extends Widget {
        // Own properties of Mx-1.0.Slider

        buffer_value: number;
        bufferValue: number;
        value: number;

        // Constructors of Mx-1.0.Slider

        static ['new'](): Slider;

        // Owm methods of Mx-1.0.Slider

        /**
         * Get the value of the #MxSlider:buffer-value property.
         * @returns The current value of the "buffer-value" property.
         */
        get_buffer_value(): number;
        /**
         * Retrieve the current value of the media bar
         * @returns gdouble
         */
        get_value(): number;
        /**
         * Set the value of the #MxSlider:buffer-value property.
         * @param value the new buffer value of the slider
         */
        set_buffer_value(value: number): void;
        /**
         * Set the value of the slider
         * @param value A value between 0.0 and 1.0
         */
        set_value(value: number): void;
    }

    module Spinner {
        // Signal callback interfaces

        interface Looped {
            (): void;
        }

        // Constructor properties interface
    }

    /**
     * The contents of this structure are private and should only be accessed
     * through the public API.
     */
    class Spinner extends Widget {
        // Own properties of Mx-1.0.Spinner

        animating: boolean;

        // Constructors of Mx-1.0.Spinner

        static ['new'](): Spinner;

        // Owm methods of Mx-1.0.Spinner

        /**
         * Determines whether the spinner is animating.
         * @returns %TRUE if the spinner is animating, %FALSE otherwise
         */
        get_animating(): boolean;
        /**
         * Sets whether the spinner is animating. A spinner can be stopped if
         * the task it represents has finished, or to save energy.
         * @param animating %TRUE to enable animation, %FALSE to disable
         */
        set_animating(animating: boolean): void;
    }

    module Stack {
        // Constructor properties interface
    }

    /**
     * The contents of this structure are private and should only be accessed
     * through the public API.
     */
    class Stack extends Widget {
        // Constructors of Mx-1.0.Stack

        static ['new'](): Stack;

        // Owm methods of Mx-1.0.Stack

        /**
         * Get the value of the #MxStackChild:fit property.
         * @param child A #ClutterActor
         * @returns the current value of the #MxStackChild:crop property
         */
        child_get_crop(child: Clutter.Actor): boolean;
        /**
         * Get the value of the #MxStackChild:fit property.
         * @param child A #ClutterActor
         * @returns the current value of the #MxStackChild:fit property
         */
        child_get_fit(child: Clutter.Actor): boolean;
        /**
         * Get the value of the #MxStackChild:x-align property
         * @param child A #ClutterActor
         * @returns the current value of the "x-align" property
         */
        child_get_x_align(child: Clutter.Actor): Align;
        /**
         * Get the value of the #MxStackChild:x-fill property.
         * @param child A #ClutterActor
         * @returns the current value of the "x-fill" property.
         */
        child_get_x_fill(child: Clutter.Actor): boolean;
        /**
         * Get the value of the #MxStackChild:y-align property.
         * @param child A #ClutterActor
         * @returns the current value of the "y-align" property.
         */
        child_get_y_align(child: Clutter.Actor): Align;
        /**
         * Get the value of the #MxStackChild:y-fill property
         * @param child A #ClutterActor
         * @returns the current value of the "y-fill" property
         */
        child_get_y_fill(child: Clutter.Actor): boolean;
        /**
         * Set the value of the #MxStackChild:crop property.
         * @param child A #ClutterActor
         * @param crop A #gboolean
         */
        child_set_crop(child: Clutter.Actor, crop: boolean): void;
        /**
         * Set the value of the #MxStackChild:fit property.
         * @param child A #ClutterActor
         * @param fit A #gboolean
         */
        child_set_fit(child: Clutter.Actor, fit: boolean): void;
        /**
         * Set the value of the #MxStackChild:x-align property.
         * @param child A #ClutterActor
         * @param x_align An #MxAlign
         */
        child_set_x_align(child: Clutter.Actor, x_align: Align): void;
        /**
         * Set the value of the #MxStackChild:x-fill property.
         * @param child A #ClutterActor
         * @param x_fill A #gboolean
         */
        child_set_x_fill(child: Clutter.Actor, x_fill: boolean): void;
        /**
         * Set the value of the #MxStackChild:y-align property.
         * @param child A #ClutterActor
         * @param y_align An #MxAlign
         */
        child_set_y_align(child: Clutter.Actor, y_align: Align): void;
        /**
         * Set the value of the #MxStackChild:y-fill property.
         * @param child A #ClutterActor
         * @param y_fill A #gboolean
         */
        child_set_y_fill(child: Clutter.Actor, y_fill: boolean): void;
    }

    module StackChild {
        // Constructor properties interface
    }

    /**
     * The contents of this structure are private and should only be accessed
     * through the public API.
     */
    class StackChild extends Clutter.ChildMeta {
        // Own properties of Mx-1.0.StackChild

        crop: boolean;
        fit: boolean;
        x_align: Align;
        xAlign: Align;
        x_fill: boolean;
        xFill: boolean;
        y_align: Align;
        yAlign: Align;
        y_fill: boolean;
        yFill: boolean;
    }

    module Style {
        // Signal callback interfaces

        interface Changed {
            (): void;
        }

        // Constructor properties interface
    }

    /**
     * The contents of this structure is private and should only be accessed using
     * the provided API.
     */
    class Style extends GObject.Object {
        // Constructors of Mx-1.0.Style

        static ['new'](): Style;

        // Owm methods of Mx-1.0.Style

        /**
         * Return the default MxStyle object. This includes the current theme (if
         * any).
         */
        static get_default(): Style;

        // Owm methods of Mx-1.0.Style

        /**
         * Requests the property described in `pspec` for the specified stylable
         * @param stylable a stylable to retreive the data for
         * @param pspec a #GParamSpec describing the property required
         */
        get_property(stylable: Stylable, pspec: GObject.ParamSpec): void;
        /**
         * Load style information from the specified file.
         * @param filename filename of the style sheet to load
         * @returns TRUE if the style information was loaded successfully. Returns FALSE on error.
         */
        load_from_file(filename: string): boolean;
    }

    module Table {
        // Constructor properties interface
    }

    /**
     * The contents of this structure is private and should only be accessed using
     * the provided API.
     */
    class Table extends Widget {
        // Own properties of Mx-1.0.Table

        readonly column_count: number;
        readonly columnCount: number;
        column_spacing: number;
        columnSpacing: number;
        readonly row_count: number;
        readonly rowCount: number;
        row_spacing: number;
        rowSpacing: number;

        // Constructors of Mx-1.0.Table

        static ['new'](): Table;

        // Owm methods of Mx-1.0.Table

        /**
         * Add an actor at the specified row and column
         *
         * Note, column and rows numbers start from zero
         * @param actor the child to insert
         * @param row the row to place the child into
         * @param column the column to place the child into
         */
        add_actor(actor: Clutter.Actor, row: number, column: number): void;
        /**
         * Get the column of the child.
         * @param child a #ClutterActor
         * @returns the column of the child
         */
        child_get_column(child: Clutter.Actor): number;
        /**
         * Get the column span of the child. Defaults to 1.
         * @param child a #ClutterActor
         * @returns the column span of the child
         */
        child_get_column_span(child: Clutter.Actor): number;
        /**
         * Get the row of the child.
         * @param child a #ClutterActor
         * @returns the row of the child
         */
        child_get_row(child: Clutter.Actor): number;
        /**
         * Get the row span of the child. Defaults to 1.
         * @param child A #ClutterActor
         * @returns the row span of the child
         */
        child_get_row_span(child: Clutter.Actor): number;
        /**
         * Get the x-align value of the child
         * @param child A #ClutterActor
         * @returns An #MxAlign value
         */
        child_get_x_align(child: Clutter.Actor): Align;
        /**
         * Get the x-expand property of the child
         * @param child A #ClutterActor
         * @returns #TRUE if the child is set to x-expand
         */
        child_get_x_expand(child: Clutter.Actor): boolean;
        /**
         * Get the x-fill state of the child
         * @param child A #ClutterActor
         * @returns #TRUE if the child is set to x-fill
         */
        child_get_x_fill(child: Clutter.Actor): boolean;
        /**
         * Get the y-align value of the child
         * @param child A #ClutterActor
         * @returns An #MxAlign value
         */
        child_get_y_align(child: Clutter.Actor): Align;
        /**
         * Get the y-expand property of the child.
         * @param child A #ClutterActor
         * @returns #TRUE if the child is set to y-expand
         */
        child_get_y_expand(child: Clutter.Actor): boolean;
        /**
         * Get the y-fill state of the child
         * @param child A #ClutterActor
         * @returns #TRUE if the child is set to y-fill
         */
        child_get_y_fill(child: Clutter.Actor): boolean;
        /**
         * Set the column of the child
         * @param child a #ClutterActor
         * @param col the column of the child
         */
        child_set_column(child: Clutter.Actor, col: number): void;
        /**
         * Set the column span of the child.
         * @param child An #ClutterActor
         * @param span The number of columns to span
         */
        child_set_column_span(child: Clutter.Actor, span: number): void;
        /**
         * Set the row of the child
         * @param child a #ClutterActor
         * @param row the row of the child
         */
        child_set_row(child: Clutter.Actor, row: number): void;
        /**
         * Set the row span of the child.
         * @param child A #ClutterActor
         * @param span the number of rows to span
         */
        child_set_row_span(child: Clutter.Actor, span: number): void;
        /**
         * Set the alignment of the child within its cell. This will only have an effect
         * if the the x-fill property is FALSE.
         * @param child A #ClutterActor
         * @param align A #MxAlign value
         */
        child_set_x_align(child: Clutter.Actor, align: Align): void;
        /**
         * Set x-expand on the child. This causes the column which the child
         * resides in to be allocated any extra space if the allocation of the table is
         * larger than the preferred size.
         * @param child A #ClutterActor
         * @param expand the new value of the x expand child property
         */
        child_set_x_expand(child: Clutter.Actor, expand: boolean): void;
        /**
         * Set the fill state of the child on the x-axis. This will cause the child to
         * be allocated the maximum available space.
         * @param child A #ClutterActor
         * @param fill the fill state
         */
        child_set_x_fill(child: Clutter.Actor, fill: boolean): void;
        /**
         * Set the value of the y-align property. This will only have an effect if
         * y-fill value is set to FALSE.
         * @param child A #ClutterActor
         * @param align A #MxAlign value
         */
        child_set_y_align(child: Clutter.Actor, align: Align): void;
        /**
         * Set y-expand on the child. This causes the row which the child
         * resides in to be allocated any extra space if the allocation of the table is
         * larger than the preferred size.
         * @param child A #ClutterActor
         * @param expand the new value of the y-expand child property
         */
        child_set_y_expand(child: Clutter.Actor, expand: boolean): void;
        /**
         * Set the fill state of the child on the y-axis. This will cause the child to
         * be allocated the maximum available space.
         * @param child A #ClutterActor
         * @param fill the fill state
         */
        child_set_y_fill(child: Clutter.Actor, fill: boolean): void;
        /**
         * Retrieve the current number of columns in `table`
         * @returns the number of columns
         */
        get_column_count(): number;
        /**
         * Gets the amount of spacing between columns.
         * @returns the spacing between columns in device units
         */
        get_column_spacing(): number;
        /**
         * Retrieve the current number rows in the `table`
         * @returns the number of rows
         */
        get_row_count(): number;
        /**
         * Gets the amount of spacing between rows.
         * @returns the spacing between rows in device units
         */
        get_row_spacing(): number;
        /**
         * Sets the amount of spacing between columns.
         * @param spacing spacing in pixels
         */
        set_column_spacing(spacing: number): void;
        /**
         * Sets the amount of spacing between rows.
         * @param spacing spacing in pixels
         */
        set_row_spacing(spacing: number): void;
    }

    module TableChild {
        // Constructor properties interface
    }

    /**
     * The contents of this structure is private and should only be accessed using
     * the provided API.
     */
    class TableChild extends Clutter.ChildMeta {
        // Own properties of Mx-1.0.TableChild

        column: number;
        column_span: number;
        columnSpan: number;
        row: number;
        row_span: number;
        rowSpan: number;
        x_align: Align;
        xAlign: Align;
        x_expand: boolean;
        xExpand: boolean;
        x_fill: boolean;
        xFill: boolean;
        y_align: Align;
        yAlign: Align;
        y_expand: boolean;
        yExpand: boolean;
        y_fill: boolean;
        yFill: boolean;
    }

    module TextureCache {
        // Constructor properties interface
    }

    /**
     * The contents of this structure are private and should only be accessed
     * through the public API.
     */
    class TextureCache extends GObject.Object {
        // Owm methods of Mx-1.0.TextureCache

        /**
         * Returns the default texture cache. This is owned by Mx and should not be
         * unreferenced or freed.
         */
        static get_default(): TextureCache;

        // Owm methods of Mx-1.0.TextureCache

        /**
         * Checks whether the given URI/path is contained within the texture
         * cache.
         * @param uri A URI or path to an image file
         * @returns %TRUE if the image exists, %FALSE otherwise
         */
        contains(uri: string): boolean;
        /**
         * Checks whether there are any textures associated with the given URI by
         * the given identifier.
         * @param uri A URI or path to an image file
         * @param ident A unique identifier
         * @returns %TRUE if the data exists, %FALSE otherwise
         */
        contains_meta(uri: string, ident: any): boolean;
        /**
         * This is a wrapper around mx_texture_cache_get_texture() which returns
         * a ClutterActor.
         * @param uri A URI or path to a image file
         * @returns a newly created ClutterTexture
         */
        get_actor(uri: string): Clutter.Actor;
        /**
         * Create a #CoglHandle representing a texture of the specified image. Adds
         * the image to the cache if the image had not been previously loaded.
         * Subsequent calls with the same image URI/path will return the #CoglHandle of
         * the previously loaded image with an increased reference count.
         * @param uri A URI or path to an image file
         * @returns a #CoglHandle to the cached texture
         */
        get_cogl_texture(uri: string): Cogl.Handle;
        /**
         * Retrieves the #CoglHandle of the previously added image associated
         * with the given unique identifier.
         *
         * See mx_texture_cache_insert_meta()
         * @param uri A URI or path to an image file
         * @param ident A unique identifier
         * @returns A #CoglHandle to a texture, with an added reference. %NULL if no image was found.
         */
        get_meta_cogl_texture(uri: string, ident: any): Cogl.Handle;
        /**
         * Create a new ClutterTexture using the previously added image associated
         * with the given unique identifier.
         *
         * See mx_texture_cache_insert_meta()
         * @param uri A URI or path to an image file
         * @param ident A unique identifier
         * @returns A newly allocated #ClutterTexture, or %NULL if no image was found
         */
        get_meta_texture(uri: string, ident: any): Clutter.Texture;
        /**
         * Returns the number of items in the texture cache
         * @returns the current size of the cache
         */
        get_size(): number;
        /**
         * Create a new ClutterTexture with the specified image. Adds the image to the
         * cache if the image had not been previously loaded. Subsequent calls with
         * the same image URI/path will return a new ClutterTexture with the previously
         * loaded image.
         * @param uri A URI or path to a image file
         * @returns a newly created ClutterTexture
         */
        get_texture(uri: string): Clutter.Texture;
        /**
         * Inserts a texture into the texture cache. This can be useful if you
         * want to cache a texture from a custom or unhandled URI type, or you
         * want to override a particular texture.
         *
         * If the image is already in the cache, this texture will replace it. A
         * reference will be taken on the given texture.
         * @param uri A URI or local file path
         * @param texture A #CoglHandle to a texture
         */
        insert(uri: string, texture: Cogl.Handle): void;
        /**
         * Inserts a texture that's associated with a URI into the cache.
         * If the metadata already exists for this URI, it will be replaced.
         *
         * This is useful if you have a widely used modification of an image,
         * for example, an image with a border composited around it.
         * @param uri A URI or local file path
         * @param ident A unique identifier
         * @param texture A #CoglHandle to a texture
         */
        insert_meta(uri: string, ident: any, texture: Cogl.Handle): void;
        load_cache(filename: string): void;
    }

    module TextureFrame {
        // Constructor properties interface
    }

    /**
     * The contents of this structure are private and should only be accessed
     * through the public API.
     */
    class TextureFrame extends Clutter.Actor {
        // Own properties of Mx-1.0.TextureFrame

        bottom: number;
        left: number;
        parent_texture: Clutter.Texture;
        parentTexture: Clutter.Texture;
        right: number;
        top: number;

        // Constructors of Mx-1.0.TextureFrame

        static ['new'](
            texture: Clutter.Texture,
            top: number,
            right: number,
            bottom: number,
            left: number,
        ): TextureFrame;

        // Owm methods of Mx-1.0.TextureFrame

        /**
         * Retrieve the current slice lines from the specified frame.
         * @param top width of the top slice
         * @param right width of the right slice
         * @param bottom width of the bottom slice
         * @param left width of the left slice
         */
        get_border_values(top: number, right: number, bottom: number, left: number): void;
        /**
         * Return the texture used by the #MxTextureFrame
         * @returns a #ClutterTexture owned by the #MxTextureFrame
         */
        get_parent_texture(): Clutter.Texture;
        /**
         * Set the slice lines of the specified frame. The slices are calculated as
         * widths from the edge of the frame.
         * @param top width of the top slice
         * @param right width of the right slice
         * @param bottom width of the bottom slice
         * @param left width of the left slice
         */
        set_border_values(top: number, right: number, bottom: number, left: number): void;
        /**
         * Set the #ClutterTexture used by this #MxTextureFrame
         * @param texture A #ClutterTexture
         */
        set_parent_texture(texture: Clutter.Texture): void;
    }

    module Toggle {
        // Constructor properties interface
    }

    /**
     * The contents of this structure is private and should only be accessed using
     * the provided API.
     */
    class Toggle extends Widget {
        // Own properties of Mx-1.0.Toggle

        active: boolean;

        // Constructors of Mx-1.0.Toggle

        static ['new'](): Toggle;

        // Owm methods of Mx-1.0.Toggle

        get_active(): boolean;
        set_active(active: boolean): void;
    }

    module Toolbar {
        // Signal callback interfaces

        interface CloseButtonClicked {
            (): boolean;
        }

        // Constructor properties interface
    }

    /**
     * The contents of this structure are private and should only be accessed
     * through the public API.
     */
    class Toolbar extends Bin {
        // Own properties of Mx-1.0.Toolbar

        has_close_button: boolean;
        hasCloseButton: boolean;

        // Constructors of Mx-1.0.Toolbar

        static ['new'](): Toolbar;

        // Owm methods of Mx-1.0.Toolbar

        /**
         * Get the value of the #MxToolbar:has-close-button property.
         * @returns the current value of the "hast-close-button" property.
         */
        get_has_close_button(): boolean;
        /**
         * Set the #MxToolbar:has-close-button property
         * @param has_close_button #TRUE if a close button should be displayed
         */
        set_has_close_button(has_close_button: boolean): void;
    }

    module Tooltip {
        // Constructor properties interface
    }

    /**
     * The contents of this structure is private and should only be accessed using
     * the provided API.
     */
    class Tooltip extends FloatingWidget {
        // Own properties of Mx-1.0.Tooltip

        text: string;
        tip_area: Clutter.Geometry;
        tipArea: Clutter.Geometry;

        // Owm methods of Mx-1.0.Tooltip

        /**
         * Browse mode is entered whenever a tooltip is displayed and it is
         * left after a short delay when a tooltip is hidden. This is used to
         * make tooltips display quicker when a previous tooltip is already
         * displayed.
         */
        static is_in_browse_mode(): boolean;

        // Owm methods of Mx-1.0.Tooltip

        /**
         * Get the text displayed on the tooltip
         * @returns the text for the tooltip. This must not be freed by the application
         */
        get_text(): string;
        /**
         * Retrieve the area on the stage that the tooltip currently applies to
         * @returns the #ClutterGeometry, owned by the tooltip which must not be freed by the application.
         */
        get_tip_area(): Clutter.Geometry;
        /**
         * Hide the tooltip
         */
        hide(): void;
        /**
         * Sets the text displayed on the tooltip
         * @param text text to set the label to
         */
        set_text(text: string): void;
        /**
         * Set the area on the stage that the tooltip applies to.
         * @param area A #ClutterGeometry
         */
        set_tip_area(area: Clutter.Geometry): void;
        /**
         * Utility function to set the geometry of the tooltip area
         * from an existing actor.
         * See also mx_tooltip_set_tip_area
         * @param actor A #ClutterActor
         */
        set_tip_area_from_actor(actor: Clutter.Actor): void;
        /**
         * Show the tooltip relative to the associated widget.
         */
        show(): void;
    }

    module Viewport {
        // Constructor properties interface
    }

    /**
     * The contents of this structure are private and should only be accessed
     * through the public API.
     */
    class Viewport extends Bin {
        // Own properties of Mx-1.0.Viewport

        sync_adjustments: boolean;
        syncAdjustments: boolean;
        x_origin: number;
        xOrigin: number;
        y_origin: number;
        yOrigin: number;
        z_origin: number;
        zOrigin: number;

        // Constructors of Mx-1.0.Viewport

        static ['new'](): Viewport;

        // Owm methods of Mx-1.0.Viewport

        get_origin(x: number, y: number, z: number): void;
        get_sync_adjustments(): boolean;
        set_origin(x: number, y: number, z: number): void;
        set_sync_adjustments(sync: boolean): void;
    }

    module Widget {
        // Signal callback interfaces

        interface LongPress {
            (object: number, p0: number, p1: LongPressAction): boolean;
        }

        // Constructor properties interface
    }

    /**
     * Base class for stylable actors. The contents of the #MxWidget
     * structure are private and should only be accessed through the
     * public API.
     */
    abstract class Widget extends Clutter.Actor {
        // Own properties of Mx-1.0.Widget

        disabled: boolean;
        /**
         * #MxMenu associated with the widget.
         */
        menu: Menu;
        tooltip_delay: number;
        tooltipDelay: number;
        /**
         * text displayed on the tooltip
         */
        tooltip_text: string;
        /**
         * text displayed on the tooltip
         */
        tooltipText: string;

        // Owm methods of Mx-1.0.Widget

        /**
         * Used to implement how a new style instance should be applied in the widget.
         * For instance, setting style instance on stylable internal children.
         * @param style A #MxStyle
         */
        apply_style(style: Style): void;
        /**
         * Copies `allocation` into `area` and accounts for the padding values. This
         * gives the area that is available in which to allocate children with respect
         * to padding.
         * @param allocation A #ClutterActorBox
         * @param area A #ClutterActorBox
         */
        get_available_area(allocation: Clutter.ActorBox, area: Clutter.ActorBox): void;
        /**
         * Get the texture used as the background image. This is set using the
         * "background-image" CSS property. This function should normally only be used
         * by subclasses.
         * @returns a #ClutterActor
         */
        get_background_image(): Clutter.Actor;
        /**
         * Get the texture used as the border image. This is set using the
         * "border-image" CSS property. This function should normally only be used
         * by subclasses.
         * @returns #ClutterActor
         */
        get_border_image(): Clutter.Actor;
        /**
         * Get the value of the "disabled" property.
         */
        get_disabled(): boolean;
        /**
         * Get the object in the #MxWidget:menu property.
         * @returns The current object in the "menu" property.
         */
        get_menu(): Menu;
        /**
         * Gets the padding of the widget, set using the "padding" CSS property. This
         * function should normally only be used by subclasses.
         */
        get_padding(): void;
        /**
         * Get the value of the "tooltip-delay" property.
         * @returns the current delay value in milliseconds
         */
        get_tooltip_delay(): number;
        /**
         * Get the current tooltip string
         * @returns The current tooltip string, owned by the #MxWidget
         */
        get_tooltip_text(): string;
        /**
         * Hide the tooltip for `widget`
         */
        hide_tooltip(): void;
        /**
         * Cancel a long-press timeout if one is running and emit the signal to notify
         * that the long-press has been cancelled.
         */
        long_press_cancel(): void;
        /**
         * Emit the long-press query signal and start a long-press timeout if required.
         * @param event the event used to determine whether to run a long-press
         */
        long_press_query(event: Clutter.ButtonEvent): void;
        /**
         * Invokes #MxWidget::paint_background() using the default background
         * image and/or color from the `widget` style
         *
         * This function should be used by subclasses of #MxWidget that override
         * the paint() virtual function and cannot chain up
         */
        paint_background(): void;
        /**
         * Set the disabled property. Disabled widgets have a "disabled" pseudo-class
         * until disabled is set to #FALSE.
         * @param disabled value to set
         */
        set_disabled(disabled: boolean): void;
        /**
         * Set the value of the #MxWidget:menu property.
         * @param menu A #MxMenu
         */
        set_menu(menu: Menu): void;
        /**
         * Set the value, in milliseconds, of the "tooltip-delay" property.
         * This is initially set to MX_WIDGET_TOOLTIP_TIMEOUT.
         * @param delay
         */
        set_tooltip_delay(delay: number): void;
        /**
         * Set the tooltip text of the widget. Note that setting tooltip text will cause
         * the widget to be set reactive. If you no longer need tooltips and you do not
         * need the widget to be reactive, you must set ClutterActor::reactive to
         * %FALSE.
         * @param text text to set as the tooltip
         */
        set_tooltip_text(text: string): void;
        /**
         * Show the tooltip for `widget`
         */
        show_tooltip(): void;
    }

    module Window {
        // Signal callback interfaces

        interface Destroy {
            (): void;
        }

        // Constructor properties interface
    }

    /**
     * The contents of this structure is private and should only be accessed using
     * the provided API.
     */
    class Window extends GObject.Object {
        // Own properties of Mx-1.0.Window

        child: Clutter.Actor;
        clutter_stage: Clutter.Stage;
        clutterStage: Clutter.Stage;
        fullscreen: boolean;
        has_toolbar: boolean;
        hasToolbar: boolean;
        icon_cogl_texture: string;
        iconCoglTexture: string;
        icon_name: string;
        iconName: string;
        small_screen: boolean;
        smallScreen: boolean;
        title: string;
        toolbar: Toolbar;
        window_rotation: WindowRotation;
        windowRotation: WindowRotation;
        readonly window_rotation_angle: number;
        readonly windowRotationAngle: number;
        readonly window_rotation_timeline: Clutter.Timeline;
        readonly windowRotationTimeline: Clutter.Timeline;

        // Constructors of Mx-1.0.Window

        static ['new'](): Window;

        static new_with_clutter_stage(stage: Clutter.Stage): Window;

        // Owm methods of Mx-1.0.Window

        /**
         * Gets the #MxWindow parent of the #ClutterStage, if it exists.
         * @param stage A #ClutterStage
         */
        static get_for_stage(stage: Clutter.Stage): Window;

        // Owm methods of Mx-1.0.Window

        /**
         * Get the primary child of the window. See mx_window_set_child().
         * @returns A #ClutterActor, or %NULL
         */
        get_child(): Clutter.Actor;
        /**
         * Gets the #ClutterStage managed by the window.
         * @returns A #ClutterStage
         */
        get_clutter_stage(): Clutter.Stage;
        /**
         * Determines if the window has been set to be in fullscreen mode.
         * @returns %TRUE if the window has been set to be in fullscreen mode, otherwise %FALSE
         */
        get_fullscreen(): boolean;
        /**
         * Determines whether the window has a toolbar or not.
         * See mx_window_set_has_toolbar().
         * @returns %TRUE if the window has a toolbar, otherwise %FALSE
         */
        get_has_toolbar(): boolean;
        /**
         * Gets the currently set window icon name. This will be %NULL if there is none
         * set, or the icon was set with mx_window_set_icon_from_cogl_texture().
         * @returns The window icon name, or %NULL
         */
        get_icon_name(): string;
        /**
         * Determines if the window is in small-screen mode.
         * See mx_window_set_small_screen().
         * @returns %TRUE if the window is in small-screen mode, otherwise %FALSE
         */
        get_small_screen(): boolean;
        /**
         * Retrieves the title used for the window.
         * @returns The title used for the window
         */
        get_title(): string;
        /**
         * Retrieves the toolbar associated with the window.
         * @returns A #MxToolbar
         */
        get_toolbar(): Toolbar;
        /**
         * Retrieves the absolute position of the window on the screen.
         */
        get_window_position(): void;
        /**
         * Retrieve the rotation of the window.
         * @returns An #MxWindowRotation
         */
        get_window_rotation(): WindowRotation;
        /**
         * Retrieves the size of the display area of the window, taking into
         * account any window border. This includes the area occupied by the
         * window's toolbar, if it's enabled.
         */
        get_window_size(): void;
        /**
         * Hide the window
         */
        hide(): void;
        /**
         * Present the window. The actual behaviour is specific to the window system.
         */
        present(): void;
        /**
         * Adds `actor` to the window and sets it as the primary child. When the
         * stage managed in the window changes size, the child will be resized
         * to match it.
         * @param actor A #ClutterActor
         */
        set_child(actor: Clutter.Actor): void;
        /**
         * Set the window to be in fullscreen mode or windowed mode.
         *
         * <note><para>
         * Setting fullscreen mode doesn't necessarily mean the window is actually
         * fullscreen. Setting this property is only a request to the underlying
         * window system.
         * </para></note>
         * @param fullscreen %TRUE to request fullscreen mode, %FALSE to disable
         */
        set_fullscreen(fullscreen: boolean): void;
        /**
         * Sets whether the window has a toolbar or not. If the window has a toolbar,
         * client-side window decorations will be enabled.
         * @param toolbar %TRUE if the toolbar should be displayed
         */
        set_has_toolbar(toolbar: boolean): void;
        /**
         * Sets the window icon from a texture. This will take precedence over
         * any currently set icon-name.
         * @param texture A #CoglHandle for a texture
         */
        set_icon_from_cogl_texture(texture: Cogl.Handle): void;
        /**
         * Set an icon-name to use for the window icon. The icon will be looked up
         * from the default theme.
         * @param icon_name An icon name, or %NULL
         */
        set_icon_name(icon_name: string): void;
        /**
         * Enables or disables small-screen mode. This mode is meant primarily
         * for platforms with limited screen-space, such as netbooks. When enabled,
         * the window will take up all available room and will disable moving and
         * resizing.
         * @param small_screen %TRUE if small-screen mode should be enabled
         */
        set_small_screen(small_screen: boolean): void;
        /**
         * Sets the title used for the window, the results of which are
         * window-system specific.
         * @param title A string to use for the window title name
         */
        set_title(title: string): void;
        /**
         * Sets the toolbar associated with the window.
         * @param toolbar
         */
        set_toolbar(toolbar: Toolbar): void;
        /**
         * Sets the absolute position of the window on the screen.
         * @param x An x-coordinate
         * @param y A y-coordinate
         */
        set_window_position(x: number, y: number): void;
        /**
         * Set the rotation of the window.
         * @param rotation The #MxWindowRotation
         */
        set_window_rotation(rotation: WindowRotation): void;
        /**
         * Sets the size of the window, taking into account any window border. This
         * corresponds to the window's available area for its child, minus the area
         * occupied by the window's toolbar, if it's enabled.
         *
         * <note><para>
         * Setting the window size may involve a request to the underlying windowing
         * system, and may not immediately be reflected.
         * </para></note>
         * @param width A width, in pixels
         * @param height A height, in pixels
         */
        set_window_size(width: number, height: number): void;
        /**
         * Show the window
         */
        show(): void;
    }

    class ActionClass {}

    class ActionPrivate {}

    class ActorManagerClass {}

    class ActorManagerPrivate {}

    /**
     * Base class for #MxAdjustment.
     */
    class AdjustmentClass {}

    class AdjustmentPrivate {}

    class ApplicationClass {}

    class ApplicationPrivate {}

    /**
     * The #MxBinClass struct contains only private data
     */
    class BinClass {}

    class BinPrivate {}

    class BorderImage {
        // Own fields of Mx-1.0.BorderImage

        uri: string;
        top: number;
        right: number;
        bottom: number;
        left: number;

        // Constructors of Mx-1.0.BorderImage

        constructor(
            properties?: Partial<{
                uri: string;
                top: number;
                right: number;
                bottom: number;
                left: number;
            }>,
        );

        // Owm methods of Mx-1.0.BorderImage

        static set_from_string(value: GObject.Value, str: string, filename: string): void;
    }

    class BoxLayoutChildClass {}

    class BoxLayoutChildPrivate {}

    class BoxLayoutClass {}

    class BoxLayoutPrivate {}

    class ButtonClass {}

    class ButtonGroupClass {}

    class ButtonGroupPrivate {}

    class ButtonPrivate {}

    class ClipboardClass {}

    class ClipboardPrivate {}

    class ComboBoxClass {}

    class ComboBoxPrivate {}

    class DeformBowTieClass {}

    class DeformBowTiePrivate {}

    class DeformPageTurnClass {}

    class DeformPageTurnPrivate {}

    class DeformTextureClass {}

    class DeformTexturePrivate {}

    class DeformWavesClass {}

    class DeformWavesPrivate {}

    class DialogClass {}

    class DialogPrivate {}

    /**
     * Interface for draggable #ClutterActor<!-- -->s.
     */
    class DraggableIface {}

    class DroppableIface {}

    class EntryClass {}

    class EntryPrivate {}

    class ExpanderClass {}

    class ExpanderPrivate {}

    class FadeEffectClass {}

    class FadeEffectPrivate {}

    class FloatingWidgetClass {}

    class FloatingWidgetPrivate {}

    class FocusManagerClass {}

    class FocusManagerPrivate {}

    class FocusableIface {}

    class FrameClass {}

    class FramePrivate {}

    class GridClass {}

    class GridPrivate {}

    class IconClass {}

    class IconPrivate {}

    class IconThemeClass {}

    class IconThemePrivate {}

    class ImageClass {}

    class ImagePrivate {}

    /**
     * Interface for creating custom items
     */
    class ItemFactoryIface {}

    class ItemViewClass {}

    class ItemViewPrivate {}

    class KineticScrollViewClass {}

    class KineticScrollViewPrivate {}

    class LabelClass {}

    class LabelPrivate {}

    class ListViewClass {}

    class ListViewPrivate {}

    class MenuClass {}

    class MenuPrivate {}

    class NotebookClass {}

    class NotebookPrivate {}

    class OffscreenClass {}

    class OffscreenPrivate {}

    /**
     * The padding from the internal border of the parent container.
     */
    class Padding {
        // Own fields of Mx-1.0.Padding

        top: number;
        right: number;
        bottom: number;
        left: number;

        // Constructors of Mx-1.0.Padding

        constructor(
            properties?: Partial<{
                top: number;
                right: number;
                bottom: number;
                left: number;
            }>,
        );
    }

    class PathBarClass {}

    class PathBarPrivate {}

    class ProgressBarClass {}

    class ProgressBarPrivate {}

    class ScrollBarClass {}

    class ScrollBarPrivate {}

    class ScrollViewClass {}

    class ScrollViewPrivate {}

    class ScrollableIface {}

    class SettingsClass {}

    class SettingsPrivate {}

    class SettingsProvider {}

    class SettingsProviderIface {}

    class SliderClass {}

    class SliderPrivate {}

    class SpinnerClass {}

    class SpinnerPrivate {}

    class StackChildClass {}

    class StackChildPrivate {}

    class StackClass {}

    class StackPrivate {}

    class StylableIface {
        // Owm methods of Mx-1.0.StylableIface

        /**
         * Installs a property for `owner_type` using `pspec` as the property
         * description.
         *
         * This function should be used inside the #MxStylableIface initialization
         * function of a class, for instance:
         *
         * <informalexample><programlisting>
         * G_DEFINE_TYPE_WITH_CODE (FooActor, foo_actor, CLUTTER_TYPE_ACTOR,
         *                          G_IMPLEMENT_INTERFACE (MX_TYPE_STYLABLE,
         *                                                 mx_stylable_init));
         * ...
         * static void
         * mx_stylable_init (MxStylableIface *iface)
         * {
         *   static gboolean is_initialized = FALSE;
         *
         *   if (!is_initialized)
         *     {
         *       ...
         *       mx_stylable_iface_install_property (stylable,
         *                                             FOO_TYPE_ACTOR,
         *                                             g_param_spec_int ("x-spacing",
         *                                                               "X Spacing",
         *                                                               "Horizontal spacing",
         *                                                               -1, G_MAXINT,
         *                                                               2,
         *                                                               G_PARAM_READWRITE));
         *       ...
         *     }
         * }
         * </programlisting></informalexample>
         * @param owner_type #GType of the style property owner
         * @param pspec a #GParamSpec
         */
        install_property(owner_type: GObject.GType, pspec: GObject.ParamSpec): void;
    }

    class StyleClass {}

    class StylePrivate {}

    class TableChildClass {}

    class TableClass {}

    class TablePrivate {}

    class TextureCacheClass {}

    class TextureFrameClass {}

    class TextureFramePrivate {}

    class ToggleClass {}

    class TogglePrivate {}

    class ToolbarClass {}

    class ToolbarPrivate {}

    class TooltipClass {}

    class TooltipPrivate {}

    class ViewportClass {}

    class ViewportPrivate {}

    /**
     * Base class for stylable actors.
     */
    class WidgetClass {}

    class WidgetPrivate {}

    class WindowClass {}

    class WindowPrivate {}

    interface Draggable {
        // Own properties of Mx-1.0.Draggable

        axis: DragAxis;
        drag_actor: Clutter.Actor;
        dragActor: Clutter.Actor;
        drag_enabled: boolean;
        dragEnabled: boolean;
        drag_threshold: number;
        dragThreshold: number;

        // Owm methods of Mx-1.0.Draggable

        disable(): void;
        enable(): void;
        get_axis(): DragAxis;
        /**
         * FIXME
         * @returns a #ClutterActor, or %NULL
         */
        get_drag_actor(): Clutter.Actor;
        get_drag_threshold(): number;
        is_enabled(): boolean;
        set_axis(axis: DragAxis): void;
        set_drag_actor(actor: Clutter.Actor): void;
        set_drag_threshold(threshold: number): void;

        // Own virtual methods of Mx-1.0.Draggable

        vfunc_disable(): void;
        vfunc_drag_begin(event_x: number, event_y: number, event_button: number, modifiers: Clutter.ModifierType): void;
        vfunc_drag_end(event_x: number, event_y: number): void;
        vfunc_drag_motion(delta_x: number, delta_y: number): void;
        vfunc_enable(): void;
    }

    interface Droppable {
        // Own properties of Mx-1.0.Droppable

        drop_enabled: boolean;
        dropEnabled: boolean;

        // Owm methods of Mx-1.0.Droppable

        accept_drop(draggable: Draggable): boolean;
        disable(): void;
        enable(): void;
        is_enabled(): boolean;

        // Own virtual methods of Mx-1.0.Droppable

        vfunc_accept_drop(draggable: Draggable): boolean;
        vfunc_disable(): void;
        vfunc_drop(
            draggable: Draggable,
            event_x: number,
            event_y: number,
            button: number,
            modifiers: Clutter.ModifierType,
        ): void;
        vfunc_enable(): void;
        vfunc_over_in(draggable: Draggable): void;
        vfunc_over_out(draggable: Draggable): void;
    }

    interface Focusable {
        // Owm methods of Mx-1.0.Focusable

        /**
         * Accept the focus
         * @param hint A #MxFocusHint
         * @returns the focusable
         */
        accept_focus(hint: FocusHint): Focusable;
        /**
         * Move the focus
         * @param direction A #MxFocusDirection
         * @param from focusable to move the focus from
         * @returns the newly focused focusable
         */
        move_focus(direction: FocusDirection, from: Focusable): Focusable;

        // Own virtual methods of Mx-1.0.Focusable

        /**
         * Accept the focus
         * @param hint A #MxFocusHint
         */
        vfunc_accept_focus(hint: FocusHint): Focusable;
        /**
         * Move the focus
         * @param direction A #MxFocusDirection
         * @param from focusable to move the focus from
         */
        vfunc_move_focus(direction: FocusDirection, from: Focusable): Focusable;
    }

    interface ItemFactory {
        // Owm methods of Mx-1.0.ItemFactory

        /**
         * Create an item
         * @returns the new item
         */
        create(): Clutter.Actor;

        // Own virtual methods of Mx-1.0.ItemFactory

        /**
         * Create an item
         */
        vfunc_create(): Clutter.Actor;
    }

    interface Scrollable {
        // Own properties of Mx-1.0.Scrollable

        horizontal_adjustment: Adjustment;
        horizontalAdjustment: Adjustment;
        vertical_adjustment: Adjustment;
        verticalAdjustment: Adjustment;

        // Owm methods of Mx-1.0.Scrollable

        /**
         * Gets the adjustment objects that store the offsets of the scrollable widget
         * into its possible scrolling area.
         */
        get_adjustments(): void;
        set_adjustments(hadjustment: Adjustment, vadjustment: Adjustment): void;

        // Own virtual methods of Mx-1.0.Scrollable

        /**
         * Gets the adjustment objects that store the offsets of the scrollable widget
         * into its possible scrolling area.
         */
        vfunc_get_adjustments(): void;
        vfunc_set_adjustments(hadjustment: Adjustment, vadjustment: Adjustment): void;
    }

    interface Stylable {
        // Own properties of Mx-1.0.Stylable

        style: Style;
        style_class: string;
        styleClass: string;
        style_pseudo_class: string;
        stylePseudoClass: string;

        // Owm methods of Mx-1.0.Stylable

        apply_clutter_text_attributes(text: Clutter.Text): void;
        connect_change_notifiers(): void;
        /**
         * Finds the #GParamSpec installed by `stylable` for the property
         * with `property_name`.
         * @param property_name the name of the property to find
         * @returns a #GParamSpec for the given property, or %NULL if no property with that name was found
         */
        find_property(property_name: string): GObject.ParamSpec;
        /**
         * Query `stylable` for the default value of property `property_name` and
         * fill `value_out` with the result.
         * @param property_name name of the property to query
         * @returns %TRUE if property @property_name exists and the default value has been returned.
         */
        get_default_value(property_name: string): boolean;
        /**
         * Retrieves the value of `property_name` for `stylable,` and puts it
         * into `value`.
         * @param property_name the name of the property
         */
        get_property(property_name: string): void;
        /**
         * Retrieves the #MxStyle used by `stylable`. This function does not
         * alter the reference count of the returned object.
         * @returns a #MxStyle
         */
        get_style(): Style;
        /**
         * Get the current style class name
         * @returns the class name string. The string is owned by the #MxWidget and should not be modified or freed.
         */
        get_style_class(): string;
        /**
         * Get the current style pseudo class. This can contain multiple pseudo class
         * names, separated by ':'.
         * @returns the pseudo class string. The string is owned by the #MxWidget and should not be modified or freed.
         */
        get_style_pseudo_class(): string;
        /**
         * Retrieves all the #GParamSpec<!-- -->s installed by `stylable`.
         * @returns an array of #GParamSpec<!-- -->s. Free it with  g_free() when done.
         */
        list_properties(): GObject.ParamSpec[];
        /**
         * Sets `style` as the new #MxStyle to be used by `stylable`.
         *
         * The #MxStylable will take ownership of the passed #MxStyle.
         *
         * After the #MxStyle has been set, the MxStylable::style-set signal
         * will be emitted.
         * @param style a #MxStyle
         */
        set_style(style: Style): void;
        /**
         * Set the style class name
         * @param style_class a new style class string
         */
        set_style_class(style_class: string): void;
        /**
         * Set the style pseudo class. The string can contain multiple pseudo class
         * names, separated by ':'.
         * @param pseudo_class a new pseudo class string
         */
        set_style_pseudo_class(pseudo_class: string): void;
        /**
         * Emit the "style-changed" signal on `stylable` to notify it that one or more
         * of the style properties has changed.
         *
         * If `stylable` is a #ClutterContainer then the "style-changed" notification is
         * propagated to it's children, since their style may depend on one or more
         * properties of the parent.
         * @param flags flags that control the style changing
         */
        style_changed(flags: StyleChangedFlags): void;
        /**
         * Add a pseudo-class name to the list of pseudo classes, contained in the
         * #MxStylable:style-pseudo-class property.
         * @param new_class A pseudo-class name to add
         */
        style_pseudo_class_add(new_class: string): void;
        /**
         * Check if the given pseudo-class name is contained in the list of
         * set pseudo classes on this #MxStylable object.
         * @param pseudo_class A pseudo-class name
         * @returns %TRUE if the given pseudo-class is set, %FALSE otherwise
         */
        style_pseudo_class_contains(pseudo_class: string): boolean;
        /**
         * Remove the specified pseudo class name from the list of pseudo classes
         * contained in the #MxStylable:style-pseudo-class property.
         * @param remove_class A pseudo class name to remove
         */
        style_pseudo_class_remove(remove_class: string): void;

        // Own virtual methods of Mx-1.0.Stylable

        /**
         * Retrieves the #MxStyle used by `stylable`. This function does not
         * alter the reference count of the returned object.
         */
        vfunc_get_style(): Style;
        /**
         * Get the current style class name
         */
        vfunc_get_style_class(): string;
        /**
         * Get the current style pseudo class. This can contain multiple pseudo class
         * names, separated by ':'.
         */
        vfunc_get_style_pseudo_class(): string;
        /**
         * Sets `style` as the new #MxStyle to be used by `stylable`.
         *
         * The #MxStylable will take ownership of the passed #MxStyle.
         *
         * After the #MxStyle has been set, the MxStylable::style-set signal
         * will be emitted.
         * @param style a #MxStyle
         */
        vfunc_set_style(style: Style): void;
        /**
         * Set the style class name
         * @param style_class a new style class string
         */
        vfunc_set_style_class(style_class: string): void;
        /**
         * Set the style pseudo class. The string can contain multiple pseudo class
         * names, separated by ':'.
         * @param pseudo_class a new pseudo class string
         */
        vfunc_set_style_pseudo_class(pseudo_class: string): void;
        /**
         * Emit the "style-changed" signal on `stylable` to notify it that one or more
         * of the style properties has changed.
         *
         * If `stylable` is a #ClutterContainer then the "style-changed" notification is
         * propagated to it's children, since their style may depend on one or more
         * properties of the parent.
         * @param flags flags that control the style changing
         */
        vfunc_style_changed(flags: StyleChangedFlags): void;
    }

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

export default Mx;
// END
