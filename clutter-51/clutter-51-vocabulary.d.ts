/**
 * The GIR-derived widget VOCABULARY for Clutter-51.
 *
 * GENERATED — do not edit. Provenance: Clutter-51 — dropped empty base(s): Atk.ImplementorIface
 *
 * 75 instantiable GTypes (of which 0 concrete widgets), 89 declarations, 52 enum nick unions, 0 slot candidates.
 *
 * Module-scoped exports only. There is no `JSX` namespace here, no tag spelling and
 * no `on<Signal>` prop name: those are DIALECT, and every framework answers them
 * differently. The shape to avoid is the GLOBAL AUGMENT — a `declare global` on
 * `React.JSX` collides with every other library on a shared tag — while a
 * module-scoped `JSX` behind a `jsxImportSource` does not. This package is used by
 * projects that want nothing to do with JSX, so it emits neither; a consumer declaring
 * a module-scoped namespace over these names is doing it right.
 *
 * Three things this is and `ConstructorProps` is not: WRITABLE-only (measured on
 * Gtk-4.0, `ConstructorProps` offers 150 read-only properties across 68 classes as
 * settable, and GTK's failure mode for writing one is exit 0), OPTIONAL, and keyed
 * by the name GObject actually REGISTERED — the dashed spelling `g_object_set`,
 * GtkBuilder XML and Blueprint all use.
 *
 * Signal handler types are not re-derived: `X.SignalSignatures`, which this package
 * already emits for every class with the parent chain, every implemented interface
 * and the `notify::` keys folded in, is what `Widgets[G]['signals']` points at.
 */

import type Atk from '@girs/atk-1.0';
import type Clutter from './clutter-51.js';
import type Cogl from '@girs/cogl-51';
import type GObject from '@girs/gobject-2.0';
import type Graphene from '@girs/graphene-1.0';
import type Mtk from '@girs/mtk-51';
import type Pango from '@girs/pango-1.0';
import type { AtkComponentConstructOnly, AtkComponentProps, AtkGObjectAccessibleConstructOnly, AtkGObjectAccessibleProps, AtkObjectConstructOnly, AtkObjectProps, AtkRoleNick } from '@girs/atk-1.0/vocabulary';
import type { GInitiallyUnownedConstructOnly, GInitiallyUnownedProps, GObjectConstructOnly, GObjectProps } from '@girs/gobject-2.0/vocabulary';
import type { PangoAlignmentNick, PangoEllipsizeModeNick, PangoWrapModeNick } from '@girs/pango-1.0/vocabulary';

// ---------------------------------------------------------------------------
// Enum nicks — the string vocabulary GObject registered, from GIR's `glib:nick`.
//
// Not derived from the member name. Substituting underscores for dashes is not a law:
// some nicks keep an underscore the substitution would have replaced, and only the
// attribute knows which. Gtk-4.0 and Adw-1 contradict no derivation at all, which is
// how a derived nick passes review and breaks elsewhere.
// Re-measure with `scripts/check-nick-derivation.mjs` in ts-for-gir.
// ---------------------------------------------------------------------------

export type ClutterActorAlignNick = 'fill' | 'start' | 'center' | 'end';
export type ClutterAlignAxisNick = 'x-axis' | 'y-axis' | 'both';
export type ClutterAnimationModeNick = 'custom-mode' | 'linear' | 'ease-in-quad' | 'ease-out-quad' | 'ease-in-out-quad' | 'ease-in-cubic' | 'ease-out-cubic' | 'ease-in-out-cubic' | 'ease-in-quart' | 'ease-out-quart' | 'ease-in-out-quart' | 'ease-in-quint' | 'ease-out-quint' | 'ease-in-out-quint' | 'ease-in-sine' | 'ease-out-sine' | 'ease-in-out-sine' | 'ease-in-expo' | 'ease-out-expo' | 'ease-in-out-expo' | 'ease-in-circ' | 'ease-out-circ' | 'ease-in-out-circ' | 'ease-in-elastic' | 'ease-out-elastic' | 'ease-in-out-elastic' | 'ease-in-back' | 'ease-out-back' | 'ease-in-out-back' | 'ease-in-bounce' | 'ease-out-bounce' | 'ease-in-out-bounce' | 'steps' | 'step-start' | 'step-end' | 'cubic-bezier' | 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'animation-last';
export type ClutterBindCoordinateNick = 'x' | 'y' | 'width' | 'height' | 'position' | 'size' | 'all';
export type ClutterButtonStateNick = 'released' | 'pressed';
export type ClutterCicpPrimariesNick = 'srgb' | 'pal' | 'ntsc' | 'ntsc-2' | 'bt2020' | 'p3';
export type ClutterCicpTransferNick = 'bt709' | 'gamma22' | 'gamma28' | 'bt601' | 'linear' | 'srgb' | 'bt2020' | 'bt2020-2' | 'pq' | 'hlg';
export type ClutterColorimetryTypeNick = 'colorspace' | 'primaries';
export type ClutterColorspaceNick = 'srgb' | 'bt2020' | 'ntsc' | 'pal' | 'p3';
export type ClutterContentGravityNick = 'top-left' | 'top' | 'top-right' | 'left' | 'center' | 'right' | 'bottom-left' | 'bottom' | 'bottom-right' | 'resize-fill' | 'resize-aspect';
export type ClutterCursorTypeNick = 'inherit' | 'none' | 'default' | 'context-menu' | 'help' | 'pointer' | 'progress' | 'wait' | 'cell' | 'crosshair' | 'text' | 'vertical-text' | 'alias' | 'copy' | 'move' | 'no-drop' | 'not-allowed' | 'grab' | 'grabbing' | 'e-resize' | 'n-resize' | 'ne-resize' | 'nw-resize' | 's-resize' | 'se-resize' | 'sw-resize' | 'w-resize' | 'ew-resize' | 'ns-resize' | 'nesw-resize' | 'nwse-resize' | 'col-resize' | 'row-resize' | 'all-scroll' | 'zoom-in' | 'zoom-out' | 'dnd-ask' | 'all-resize';
export type ClutterEOTFTypeNick = 'named' | 'gamma';
export type ClutterEncodingRequiredFormatNick = 'uint8' | 'uint10' | 'fp16';
export type ClutterEventPhaseNick = 'capture' | 'target' | 'bubble';
export type ClutterEventTypeNick = 'nothing' | 'key-press' | 'key-release' | 'motion' | 'enter' | 'leave' | 'button-press' | 'button-release' | 'scroll' | 'touch-begin' | 'touch-update' | 'touch-end' | 'touch-cancel' | 'touchpad-pinch' | 'touchpad-swipe' | 'touchpad-hold' | 'proximity-in' | 'proximity-out' | 'pad-button-press' | 'pad-button-release' | 'pad-strip' | 'pad-ring' | 'pad-dial' | 'device-added' | 'device-removed' | 'im-commit' | 'im-delete' | 'im-preedit' | 'key-state' | 'event-last';
export type ClutterFrameClockModeNick = 'fixed' | 'variable' | 'passive';
export type ClutterFrameResultNick = 'pending-presented' | 'idle' | 'ignored';
export type ClutterGestureStateNick = 'waiting' | 'possible' | 'recognizing' | 'completed' | 'cancelled' | 'clutter-n-gesture-states';
export type ClutterGridPositionNick = 'left' | 'right' | 'top' | 'bottom';
export type ClutterInputActionNick = 'submit' | 'last';
export type ClutterInputAxisNick = 'ignore' | 'x' | 'y' | 'pressure' | 'xtilt' | 'ytilt' | 'wheel' | 'distance' | 'rotation' | 'slider' | 'last';
export type ClutterInputContentPurposeNick = 'normal' | 'alpha' | 'digits' | 'number' | 'phone' | 'url' | 'email' | 'name' | 'password' | 'date' | 'time' | 'datetime' | 'terminal';
export type ClutterInputDevicePadFeatureNick = 'button' | 'ring' | 'strip' | 'dial';
export type ClutterInputDevicePadSourceNick = 'unknown' | 'finger';
export type ClutterInputDeviceToolTypeNick = 'none' | 'pen' | 'eraser' | 'brush' | 'pencil' | 'airbrush' | 'mouse' | 'lens';
export type ClutterInputDeviceTypeNick = 'pointer-device' | 'keyboard-device' | 'extension-device' | 'joystick-device' | 'tablet-device' | 'touchpad-device' | 'touchscreen-device' | 'pen-device' | 'eraser-device' | 'cursor-device' | 'pad-device' | 'n-device-types';
export type ClutterInputPanelStateNick = 'off' | 'on' | 'toggle';
export type ClutterKeyStateNick = 'released' | 'pressed';
export type ClutterLuminanceTypeNick = 'derived' | 'explicit';
export type ClutterOrientationNick = 'horizontal' | 'vertical';
export type ClutterPanAxisNick = 'both' | 'x' | 'y';
export type ClutterPickModeNick = 'none' | 'reactive' | 'all';
export type ClutterPipelineCapabilityNick = 'color-state' | 'shader-effect';
export type ClutterPointerA11yDwellClickTypeNick = 'none' | 'primary' | 'secondary' | 'middle' | 'double' | 'drag';
export type ClutterPointerA11yDwellDirectionNick = 'none' | 'left' | 'right' | 'up' | 'down';
export type ClutterPointerA11yDwellModeNick = 'window' | 'gesture';
export type ClutterPointerA11yTimeoutTypeNick = 'secondary-click' | 'dwell' | 'gesture';
export type ClutterPreeditResetModeNick = 'clear' | 'commit';
export type ClutterPreeditStyleHintNick = 'none' | 'whole' | 'selection' | 'prediction' | 'prefix' | 'suffix' | 'spelling-error' | 'compose-error';
export type ClutterRequestModeNick = 'height-for-width' | 'width-for-height' | 'content-size';
export type ClutterRotateAxisNick = 'x-axis' | 'y-axis' | 'z-axis';
export type ClutterScalingFilterNick = 'linear' | 'nearest' | 'trilinear';
export type ClutterScrollDirectionNick = 'up' | 'down' | 'left' | 'right' | 'smooth';
export type ClutterScrollSourceNick = 'unknown' | 'wheel' | 'finger' | 'continuous';
export type ClutterSnapEdgeNick = 'top' | 'right' | 'bottom' | 'left';
export type ClutterSpriteRoleNick = 'pointer' | 'tablet' | 'touchpoint';
export type ClutterStepModeNick = 'start' | 'end';
export type ClutterTextDirectionNick = 'default' | 'ltr' | 'rtl';
export type ClutterTimelineDirectionNick = 'forward' | 'backward';
export type ClutterTouchpadGesturePhaseNick = 'begin' | 'update' | 'end' | 'cancel';
export type ClutterTransferFunctionNick = 'srgb-piecewise' | 'gamma22' | 'pq' | 'bt1886' | 'linear';
export type ClutterYcbcrCoefficientsNick = 'identity-limited' | 'bt601-full' | 'bt601-limited' | 'bt709-full' | 'bt709-limited' | 'bt2020-full' | 'bt2020-limited';

// ---------------------------------------------------------------------------
// Property surfaces — one interface per GIR DECLARATION, mirroring GIR's own
// inheritance rather than flattening per widget.
//
// The interfaces are load-bearing, not tidiness: `GtkBox` declares four properties
// of its own and `orientation` is not among them — it lives on `Gtk.Orientable`,
// because GObject installs interface properties on the implementor at runtime while
// GIR keeps them once, on the interface.
// ---------------------------------------------------------------------------

/** Abstract class for event-related logic #ClutterAction is an abstract base class for event-related actions that modify the user interaction of a [class@Actor], just like [class@Constraint] is an abstr… */
export interface ClutterActionProps extends ClutterActorMetaProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterActionConstructOnly = ClutterActorMetaConstructOnly;

/** The basic element of the scene graph The ClutterActor class is the basic element of the scene graph in Clutter, and it encapsulates the position, size, and transformations of a node in the graph. */
export interface ClutterActorProps extends GInitiallyUnownedProps, ClutterAnimatableProps {
    /**
     * Object instance's name for assistive technology access.
     * @default NULL
     */
    'accessible-name'?: string;
    /**
     * The accessible role of this object
     * @default ATK_ROLE_INVALID
     */
    'accessible-role'?: AtkRoleNick | Atk.Role;
    /** Adds a #ClutterAction to the actor */
    actions?: Clutter.Action;
    /**
     * Paints a solid fill of the actor's allocation using the specified color.
     * @default #00000000
     */
    'background-color'?: Cogl.Color;
    /** Applies a transformation matrix on each child of an actor. */
    'child-transform'?: Graphene.Matrix;
    /** The visible region of the actor, in actor-relative coordinates, expressed as a #graphene_rect_t. */
    'clip-rect'?: Graphene.Rect;
    /**
     * Whether the clip region should track the allocated area of the actor.
     * @default FALSE
     */
    'clip-to-allocation'?: boolean;
    /** The #ClutterColorState contains the properties like colorspace for each actors. */
    'color-state'?: Clutter.ColorState;
    /** Adds a #ClutterConstraint to the actor */
    constraints?: Clutter.Constraint;
    /** The #ClutterContent implementation that controls the content of the actor. */
    content?: Clutter.Content;
    /**
     * The alignment that should be honoured by the #ClutterContent set with the [property@Clutter.Actor:content] property.
     * @default CLUTTER_CONTENT_GRAVITY_RESIZE_FILL
     */
    'content-gravity'?: ClutterContentGravityNick | Clutter.ContentGravity;
    /**
     * The repeat policy for the actor's [property@Clutter.Actor:content].
     * @default CLUTTER_REPEAT_NONE
     */
    'content-repeat'?: number;
    /** The %ClutterContext of the actor */
    context?: Clutter.Context;
    /** @default CLUTTER_CURSOR_INHERIT */
    'cursor-type'?: ClutterCursorTypeNick | Clutter.CursorType;
    /** Adds #ClutterEffect to the list of effects be applied on a #ClutterActor */
    effect?: Clutter.Effect | null;
    /**
     * This flag controls whether the [property@Clutter.Actor:fixed-x] and [property@Clutter.Actor:fixed-y] properties are used
     * @default FALSE
     */
    'fixed-position-set'?: boolean;
    /**
     * The fixed X position of the actor in pixels.
     * @default 0.000000
     */
    'fixed-x'?: number;
    /**
     * The fixed Y position of the actor in pixels.
     * @default 0.000000
     */
    'fixed-y'?: number;
    /**
     * Height of the actor (in pixels).
     * @default 0.000000
     */
    height?: number;
    /** A delegate object for controlling the layout of the children of an actor. */
    'layout-manager'?: Clutter.LayoutManager;
    /** @default CLUTTER_SCALING_FILTER_LINEAR */
    'magnification-filter'?: ClutterScalingFilterNick | Clutter.ScalingFilter;
    /**
     * The margin (in pixels) from the bottom of the actor.
     * @default 0.000000
     */
    'margin-bottom'?: number;
    /**
     * The margin (in pixels) from the left of the actor.
     * @default 0.000000
     */
    'margin-left'?: number;
    /**
     * The margin (in pixels) from the right of the actor.
     * @default 0.000000
     */
    'margin-right'?: number;
    /**
     * The margin (in pixels) from the top of the actor.
     * @default 0.000000
     */
    'margin-top'?: number;
    /**
     * A forced minimum height request for the actor, in pixels Writing this property sets the [property@Clutter.Actor:min-height-set] property as well, as a side effect.
     * @default 0.000000
     */
    'min-height'?: number;
    /**
     * This flag controls whether the [property@Clutter.Actor:min-height] property is used
     * @default FALSE
     */
    'min-height-set'?: boolean;
    /**
     * A forced minimum width request for the actor, in pixels Writing this property sets the [property@Clutter.Actor:min-width-set] property as well, as a side effect.
     * @default 0.000000
     */
    'min-width'?: number;
    /**
     * This flag controls whether the [property@Clutter.Actor:min-width] property is used
     * @default FALSE
     */
    'min-width-set'?: boolean;
    /** @default CLUTTER_SCALING_FILTER_LINEAR */
    'minification-filter'?: ClutterScalingFilterNick | Clutter.ScalingFilter;
    /**
     * The name of the actor
     * @default NULL
     */
    name?: string | null;
    /**
     * A forced natural height request for the actor, in pixels Writing this property sets the [property@Clutter.Actor:natural-height-set] property as well, as a side effect.
     * @default 0.000000
     */
    'natural-height'?: number;
    /**
     * This flag controls whether the [property@Clutter.Actor:natural-height] property is used
     * @default FALSE
     */
    'natural-height-set'?: boolean;
    /**
     * A forced natural width request for the actor, in pixels Writing this property sets the [property@Clutter.Actor:natural-width-set] property as well, as a side effect.
     * @default 0.000000
     */
    'natural-width'?: number;
    /**
     * This flag controls whether the [property@Clutter.Actor:natural-width] property is used
     * @default FALSE
     */
    'natural-width-set'?: boolean;
    /**
     * Determines the conditions in which the actor will be redirected to an offscreen framebuffer while being painted.
     * @default 0
     */
    'offscreen-redirect'?: number;
    /**
     * Opacity of an actor, between 0 (fully transparent) and 255 (fully opaque) The [property@Clutter.Actor:opacity] property is animatable.
     * @default 255
     */
    opacity?: number;
    /** The point around which the scaling and rotation transformations occur. */
    'pivot-point'?: Graphene.Point;
    /**
     * The Z component of the [property@Clutter.Actor:pivot-point], expressed as a value along the Z axis.
     * @default 0.000000
     */
    'pivot-point-z'?: number;
    /** The position of the origin of the actor. */
    position?: Graphene.Point;
    /**
     * Whether the actor is reactive to events or not Only reactive actors will emit event-related signals
     * @default FALSE
     */
    reactive?: boolean;
    /**
     * Request mode for the #ClutterActor.
     * @default CLUTTER_REQUEST_HEIGHT_FOR_WIDTH
     */
    'request-mode'?: ClutterRequestModeNick | Clutter.RequestMode;
    /**
     * The rotation angle on the X axis.
     * @default 0.000000
     */
    'rotation-angle-x'?: number;
    /**
     * The rotation angle on the Y axis The [property@Clutter.Actor:rotation-angle-y] property is animatable.
     * @default 0.000000
     */
    'rotation-angle-y'?: number;
    /**
     * The rotation angle on the Z axis The [property@Clutter.Actor:rotation-angle-z] property is animatable.
     * @default 0.000000
     */
    'rotation-angle-z'?: number;
    /**
     * The horizontal scale of the actor.
     * @default 1.000000
     */
    'scale-x'?: number;
    /**
     * The vertical scale of the actor.
     * @default 1.000000
     */
    'scale-y'?: number;
    /**
     * The scale factor of the actor along the Z axis.
     * @default 1.000000
     */
    'scale-z'?: number;
    /**
     * If %TRUE, the actor is automatically shown when parented.
     * @default TRUE
     */
    'show-on-set-parent'?: boolean;
    /** The size of the actor. */
    size?: Graphene.Size;
    /**
     * The direction of the text inside a #ClutterActor.
     * @default CLUTTER_TEXT_DIRECTION_LTR
     */
    'text-direction'?: ClutterTextDirectionNick | Clutter.TextDirection;
    /** Overrides the transformations of a #ClutterActor with a custom matrix. */
    transform?: Graphene.Matrix;
    /**
     * An additional translation applied along the X axis, relative to the actor's [property@Clutter.Actor:pivot-point].
     * @default 0.000000
     */
    'translation-x'?: number;
    /**
     * An additional translation applied along the Y axis, relative to the actor's [property@Clutter.Actor:pivot-point].
     * @default 0.000000
     */
    'translation-y'?: number;
    /**
     * An additional translation applied along the Z axis, relative to the actor's [property@Clutter.Actor:pivot-point].
     * @default 0.000000
     */
    'translation-z'?: number;
    /**
     * Whether the actor is set to be visible or not See also [property@Clutter.Actor:mapped]
     * @default FALSE
     */
    visible?: boolean;
    /**
     * Width of the actor (in pixels).
     * @default 0.000000
     */
    width?: number;
    /**
     * X coordinate of the actor in pixels.
     * @default 0.000000
     */
    x?: number;
    /**
     * The alignment of an actor on the X axis, if the actor has been given extra space for its allocation.
     * @default CLUTTER_ACTOR_ALIGN_FILL
     */
    'x-align'?: ClutterActorAlignNick | Clutter.ActorAlign;
    /**
     * Whether a layout manager should assign more space to the actor on the X axis.
     * @default FALSE
     */
    'x-expand'?: boolean;
    /**
     * Y coordinate of the actor in pixels.
     * @default 0.000000
     */
    y?: number;
    /**
     * The alignment of an actor on the Y axis, if the actor has been given extra space for its allocation.
     * @default CLUTTER_ACTOR_ALIGN_FILL
     */
    'y-align'?: ClutterActorAlignNick | Clutter.ActorAlign;
    /**
     * Whether a layout manager should assign more space to the actor on the Y axis.
     * @default FALSE
     */
    'y-expand'?: boolean;
    /**
     * The actor's position on the Z axis, relative to the parent's transformations.
     * @default 0.000000
     */
    'z-position'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterActorConstructOnly = GInitiallyUnownedConstructOnly | ClutterAnimatableConstructOnly | 'context';

/** Implementation of the ATK interfaces for [class@Clutter.Actor] #ClutterActorAccessible implements the required ATK interfaces of [class@Clutter.Actor] exposing the common elements on each actor (posi… */
export interface ClutterActorAccessibleProps extends AtkGObjectAccessibleProps, AtkComponentProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterActorAccessibleConstructOnly = AtkGObjectAccessibleConstructOnly | AtkComponentConstructOnly;

/** Base class of actor modifiers #ClutterActorMeta is an abstract class providing a common API for modifiers of [class@Actor] behaviour, appearance or layout. */
export interface ClutterActorMetaProps extends GInitiallyUnownedProps {
    /**
     * Whether or not the #ClutterActorMeta is enabled
     * @default TRUE
     */
    enabled?: boolean;
    /**
     * The unique name to access the #ClutterActorMeta
     * @default NULL
     */
    name?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterActorMetaConstructOnly = GInitiallyUnownedConstructOnly;

export interface ClutterActorNodeProps extends ClutterPaintNodeProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterActorNodeConstructOnly = ClutterPaintNodeConstructOnly;

/** A constraint aligning the position of an actor #ClutterAlignConstraint is a [class@Constraint] that aligns the position of the [class@Actor] to which it is applied to the size of another [class@Actor… */
export interface ClutterAlignConstraintProps extends ClutterConstraintProps {
    /**
     * The axis to be used to compute the alignment
     * @default CLUTTER_ALIGN_X_AXIS
     */
    'align-axis'?: ClutterAlignAxisNick | Clutter.AlignAxis;
    /**
     * The alignment factor, as a normalized value between 0.0 and 1.0 The factor depends on the #ClutterAlignConstraint:align-axis property: with an align-axis value of %CLUTTER_ALIGN_X_AXIS, 0.0 means lef…
     * @default 0.000000
     */
    factor?: number;
    /** The pivot point used by the constraint. */
    'pivot-point'?: Graphene.Point;
    /** The #ClutterActor used as the source for the alignment. */
    source?: Clutter.Actor;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterAlignConstraintConstructOnly = ClutterConstraintConstructOnly;

/** Interface for animatable classes #ClutterAnimatable is an interface that allows a [class@GObject.Object] class to control how an actor will animate a property. */
export interface ClutterAnimatableProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterAnimatableConstructOnly = GObjectConstructOnly;

/** A simple layout manager #ClutterBinLayout is a layout manager which implements the following policy: - the preferred size is the maximum preferred size between all the children of the container using… */
export interface ClutterBinLayoutProps extends ClutterLayoutManagerProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterBinLayoutConstructOnly = ClutterLayoutManagerConstructOnly;

/** A constraint binding the position or size of an actor #ClutterBindConstraint is a [class@Constraint] that binds the position or the size of the [class@Actor] to which it is applied to the the positio… */
export interface ClutterBindConstraintProps extends ClutterConstraintProps {
    /**
     * The coordinate to be bound
     * @default CLUTTER_BIND_X
     */
    coordinate?: ClutterBindCoordinateNick | Clutter.BindCoordinate;
    /**
     * The offset, in pixels, to be applied to the binding
     * @default 0.000000
     */
    offset?: number;
    /** The #ClutterActor used as the source for the binding. */
    source?: Clutter.Actor;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterBindConstraintConstructOnly = ClutterConstraintConstructOnly;

/** Pool for key bindings #ClutterBindingPool is a data structure holding a set of key bindings. */
export interface ClutterBindingPoolProps extends GObjectProps {
    /**
     * The unique name of the #ClutterBindingPool.
     * @default NULL
     */
    name?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterBindingPoolConstructOnly = GObjectConstructOnly | 'name';

export interface ClutterBlitNodeProps extends ClutterPaintNodeProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterBlitNodeConstructOnly = ClutterPaintNodeConstructOnly;

/** A blur effect #ClutterBlurEffect is a sub-class of #ClutterEffect that allows blurring a actor and its contents. */
export interface ClutterBlurEffectProps extends ClutterOffscreenEffectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterBlurEffectConstructOnly = ClutterOffscreenEffectConstructOnly;

export interface ClutterBlurNodeProps extends ClutterLayerNodeProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterBlurNodeConstructOnly = ClutterLayerNodeConstructOnly;

/** A layout manager arranging children on a single line The #ClutterBoxLayout is a [class@Clutter.LayoutManager] implementing the following layout policy: - all children are arranged on a single line - … */
export interface ClutterBoxLayoutProps extends ClutterLayoutManagerProps {
    /**
     * Whether the #ClutterBoxLayout should arrange its children homogeneously, i.e.
     * @default FALSE
     */
    homogeneous?: boolean;
    /**
     * The orientation of the #ClutterBoxLayout, either horizontal or vertical
     * @default CLUTTER_ORIENTATION_HORIZONTAL
     */
    orientation?: ClutterOrientationNick | Clutter.Orientation;
    /**
     * The spacing between children of the #ClutterBoxLayout, in pixels
     * @default 0
     */
    spacing?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterBoxLayoutConstructOnly = ClutterLayoutManagerConstructOnly;

/** Increase/decrease brightness and/or contrast of actor. */
export interface ClutterBrightnessContrastEffectProps extends ClutterOffscreenEffectProps {
    /**
     * The brightness change to apply to the effect.
     * @default #7f7f7fff
     */
    brightness?: Cogl.Color;
    /**
     * The contrast change to apply to the effect.
     * @default #7f7f7fff
     */
    contrast?: Cogl.Color;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterBrightnessContrastEffectConstructOnly = ClutterOffscreenEffectConstructOnly;

/** A #ClutterPressGesture subclass for recognizing click gestures */
export interface ClutterClickGestureProps extends ClutterPressGestureProps {
    /**
     * The number of clicks required for the gesture to recognize, this can be used to implement double-click gestures.
     * @default 1
     */
    'n-clicks-required'?: number;
    /**
     * Set this to %TRUE to make the click gesture recognize on button-press/touch-begin rather than on button-release/touch-end events.
     * @default FALSE
     */
    'recognize-on-press'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterClickGestureConstructOnly = ClutterPressGestureConstructOnly;

export interface ClutterClipNodeProps extends ClutterPaintNodeProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterClipNodeConstructOnly = ClutterPaintNodeConstructOnly;

/** An actor that displays a clone of a source actor #ClutterClone is a [class@Clutter.Actor] which draws with the paint function of another actor, scaled to fit its own allocation. */
export interface ClutterCloneProps extends ClutterActorProps, ClutterAnimatableProps {
    /** This property specifies the source actor being cloned. */
    source?: Clutter.Actor;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterCloneConstructOnly = ClutterActorConstructOnly | ClutterAnimatableConstructOnly;

export interface ClutterColorNodeProps extends ClutterPipelineNodeProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterColorNodeConstructOnly = ClutterPipelineNodeConstructOnly;

export interface ClutterColorOpProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterColorOpConstructOnly = GObjectConstructOnly;

export interface ClutterColorOp3DLutProps extends ClutterColorOpProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterColorOp3DLutConstructOnly = ClutterColorOpConstructOnly;

export interface ClutterColorOpClampUnitProps extends ClutterColorOpProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterColorOpClampUnitConstructOnly = ClutterColorOpConstructOnly;

export interface ClutterColorOpCurve1DProps extends ClutterColorOpProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterColorOpCurve1DConstructOnly = ClutterColorOpConstructOnly;

export interface ClutterColorOpGammaPowerProps extends ClutterColorOpProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterColorOpGammaPowerConstructOnly = ClutterColorOpConstructOnly;

export interface ClutterColorOpMatrix4x4Props extends ClutterColorOpProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterColorOpMatrix4x4ConstructOnly = ClutterColorOpConstructOnly;

export interface ClutterColorOpMultiplyProps extends ClutterColorOpProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterColorOpMultiplyConstructOnly = ClutterColorOpConstructOnly;

export interface ClutterColorOpPqEotfProps extends ClutterColorOpProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterColorOpPqEotfConstructOnly = ClutterColorOpConstructOnly;

export interface ClutterColorOpPqInvEotfProps extends ClutterColorOpProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterColorOpPqInvEotfConstructOnly = ClutterColorOpConstructOnly;

export interface ClutterColorOpPremultiplyProps extends ClutterColorOpProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterColorOpPremultiplyConstructOnly = ClutterColorOpConstructOnly;

export interface ClutterColorOpSrgbPiecewiseEotfProps extends ClutterColorOpProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterColorOpSrgbPiecewiseEotfConstructOnly = ClutterColorOpConstructOnly;

export interface ClutterColorOpSrgbPiecewiseInvEotfProps extends ClutterColorOpProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterColorOpSrgbPiecewiseInvEotfConstructOnly = ClutterColorOpConstructOnly;

export interface ClutterColorOpUnpremultiplyProps extends ClutterColorOpProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterColorOpUnpremultiplyConstructOnly = ClutterColorOpConstructOnly;

export interface ClutterColorOpYcbcrMatrixProps extends ClutterColorOpProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterColorOpYcbcrMatrixConstructOnly = ClutterColorOpConstructOnly;

export interface ClutterColorPipelineProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterColorPipelineConstructOnly = GObjectConstructOnly;

/** Color state of each ClutterActor The #ClutterColorState class contains the colorspace of each color states (e.g. */
export interface ClutterColorStateProps extends GObjectProps {
    /** The associated ClutterContext. */
    context?: Clutter.Context;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterColorStateConstructOnly = GObjectConstructOnly | 'context';

export interface ClutterColorStateIccProps extends ClutterColorStateProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterColorStateIccConstructOnly = ClutterColorStateConstructOnly;

export interface ClutterColorStateParamsProps extends ClutterColorStateProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterColorStateParamsConstructOnly = ClutterColorStateConstructOnly;

export interface ClutterColorTransformProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterColorTransformConstructOnly = GObjectConstructOnly;

/** A colorization effect #ClutterColorizeEffect is a sub-class of #ClutterEffect that colorizes an actor with the given tint. */
export interface ClutterColorizeEffectProps extends ClutterOffscreenEffectProps {
    /**
     * The tint to apply to the actor
     * @default #ffcc99ff
     */
    tint?: Cogl.Color;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterColorizeEffectConstructOnly = ClutterOffscreenEffectConstructOnly;

/** Abstract class for constraints on position or size #ClutterConstraint is a base abstract class for modifiers of a #ClutterActor position or size. */
export interface ClutterConstraintProps extends ClutterActorMetaProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterConstraintConstructOnly = ClutterActorMetaConstructOnly;

/** Delegate for painting the content of an actor #ClutterContent is an interface to implement types responsible for painting the content of a [class@Actor]. */
export interface ClutterContentProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterContentConstructOnly = GObjectConstructOnly;

export interface ClutterContextProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterContextConstructOnly = GObjectConstructOnly;

/** A base class for effects deforming the geometry of an actor #ClutterDeformEffect is an abstract class providing all the plumbing for creating effects that result in the deformation of an actor's geom… */
export interface ClutterDeformEffectProps extends ClutterOffscreenEffectProps {
    /** A pipeline to be used when painting the back of the actor to which this effect has been applied By default, no pipeline will be used */
    'back-pipeline'?: Cogl.Pipeline | null;
    /**
     * The number of horizontal tiles.
     * @default 32
     */
    'x-tiles'?: number;
    /**
     * The number of vertical tiles.
     * @default 32
     */
    'y-tiles'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterDeformEffectConstructOnly = ClutterOffscreenEffectConstructOnly;

/** A desaturation effect #ClutterDesaturateEffect is a sub-class of #ClutterEffect that desaturates the color of an actor and its contents. */
export interface ClutterDesaturateEffectProps extends ClutterOffscreenEffectProps {
    /**
     * The desaturation factor, between 0.0 (no desaturation) and 1.0 (full desaturation).
     * @default 1.000000
     */
    factor?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterDesaturateEffectConstructOnly = ClutterOffscreenEffectConstructOnly;

/** Base class for actor effects The #ClutterEffect class provides a default type and API for creating effects for generic actors. */
export interface ClutterEffectProps extends ClutterActorMetaProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterEffectConstructOnly = ClutterActorMetaConstructOnly;

/** A fixed layout manager #ClutterFixedLayout is a layout manager implementing the same layout policies as #ClutterGroup. */
export interface ClutterFixedLayoutProps extends ClutterLayoutManagerProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterFixedLayoutConstructOnly = ClutterLayoutManagerConstructOnly;

/** A reflowing layout manager #ClutterFlowLayout is a layout manager which implements the following policy: - the preferred natural size depends on the value of the #ClutterFlowLayout:orientation proper… */
export interface ClutterFlowLayoutProps extends ClutterLayoutManagerProps {
    /**
     * The spacing between columns, in pixels; the value of this property is honoured by horizontal non-overflowing layouts and by vertical overflowing layouts
     * @default 0.000000
     */
    'column-spacing'?: number;
    /**
     * Whether each child inside the #ClutterFlowLayout should receive the same allocation
     * @default FALSE
     */
    homogeneous?: boolean;
    /**
     * Maximum width for each column in the layout, in pixels.
     * @default -1.000000
     */
    'max-column-width'?: number;
    /**
     * Maximum height for each row in the layout, in pixels.
     * @default -1.000000
     */
    'max-row-height'?: number;
    /**
     * Minimum width for each column in the layout, in pixels
     * @default 0.000000
     */
    'min-column-width'?: number;
    /**
     * Minimum height for each row in the layout, in pixels
     * @default 0.000000
     */
    'min-row-height'?: number;
    /**
     * The orientation of the #ClutterFlowLayout.
     * @default CLUTTER_ORIENTATION_HORIZONTAL
     */
    orientation?: ClutterOrientationNick | Clutter.Orientation;
    /**
     * The spacing between rows, in pixels; the value of this property is honoured by vertical non-overflowing layouts and by horizontal overflowing layouts
     * @default 0.000000
     */
    'row-spacing'?: number;
    /**
     * Whether the #ClutterFlowLayout should arrange its children on a grid
     * @default TRUE
     */
    'snap-to-grid'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterFlowLayoutConstructOnly = ClutterLayoutManagerConstructOnly;

export interface ClutterFocusProps extends GObjectProps {
    stage?: Clutter.Stage;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterFocusConstructOnly = GObjectConstructOnly | 'stage';

export interface ClutterFrameClockProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterFrameClockConstructOnly = GObjectConstructOnly;

/** A #ClutterAction for recognizing gestures #ClutterGesture is a sub-class of #ClutterAction and an abstract base class for implementing the logic to recognize various input gestures. */
export interface ClutterGestureProps extends ClutterActionProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterGestureConstructOnly = ClutterActionConstructOnly;

export interface ClutterGrabProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterGrabConstructOnly = GObjectConstructOnly;

/** A layout manager for a grid of actors #ClutterGridLayout is a layout manager which arranges its child widgets in rows and columns. */
export interface ClutterGridLayoutProps extends ClutterLayoutManagerProps {
    /**
     * Whether all columns of the layout should have the same width
     * @default FALSE
     */
    'column-homogeneous'?: boolean;
    /**
     * The amount of space in pixels between two consecutive columns
     * @default 0
     */
    'column-spacing'?: number;
    /**
     * The orientation of the layout, either horizontal or vertical
     * @default CLUTTER_ORIENTATION_HORIZONTAL
     */
    orientation?: ClutterOrientationNick | Clutter.Orientation;
    /**
     * Whether all rows of the layout should have the same height
     * @default FALSE
     */
    'row-homogeneous'?: boolean;
    /**
     * The amount of space in pixels between two consecutive rows
     * @default 0
     */
    'row-spacing'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterGridLayoutConstructOnly = ClutterLayoutManagerConstructOnly;

/** An input device managed by Clutter #ClutterInputDevice represents an input device known to Clutter. */
export interface ClutterInputDeviceProps extends GObjectProps {
    /**
     * Bus type of this device.
     * @default 0
     */
    'bus-type'?: number;
    /**
     * The capabilities of the device
     * @default CLUTTER_INPUT_CAPABILITY_NONE
     */
    capabilities?: number;
    /** @default NULL */
    'device-node'?: string;
    /**
     * The type of the device
     * @default CLUTTER_POINTER_DEVICE
     */
    'device-type'?: ClutterInputDeviceTypeNick | Clutter.InputDeviceType;
    /** @default 0 */
    'n-buttons'?: number;
    /** @default 0 */
    'n-dials'?: number;
    /** @default 0 */
    'n-mode-groups'?: number;
    /** @default 0 */
    'n-rings'?: number;
    /** @default 0 */
    'n-strips'?: number;
    /**
     * The name of the device
     * @default NULL
     */
    name?: string;
    /**
     * Product ID of this device.
     * @default 0
     */
    'product-id'?: number;
    /** The #ClutterSeat instance which owns the device */
    seat?: Clutter.Seat;
    /**
     * Vendor ID of this device.
     * @default 0
     */
    'vendor-id'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterInputDeviceConstructOnly = GObjectConstructOnly | 'bus-type' | 'capabilities' | 'device-node' | 'device-type' | 'n-buttons' | 'n-dials' | 'n-mode-groups' | 'n-rings' | 'n-strips' | 'name' | 'product-id' | 'seat' | 'vendor-id';

/** An object holding an interval of two values #ClutterInterval is a simple object that can hold two values defining an interval. */
export interface ClutterIntervalProps extends GInitiallyUnownedProps {
    /** The final value of the interval. */
    final?: GObject.Value;
    /** The initial value of the interval. */
    initial?: GObject.Value;
    /** The type of the values in the interval. */
    'value-type'?: GObject.GType;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterIntervalConstructOnly = GInitiallyUnownedConstructOnly | 'value-type';

export interface ClutterKeyControllerProps extends ClutterActionProps {
    /** The delegate for input method handling of the actor */
    'im-focus'?: Clutter.InputFocus;
    /**
     * Whether the controller handles keybindings set on the actor through [type@Clutter.BindingPool]
     * @default FALSE
     */
    'trigger-keybindings'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterKeyControllerConstructOnly = ClutterActionConstructOnly | 'im-focus';

export interface ClutterKeyFocusProps extends ClutterFocusProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterKeyFocusConstructOnly = ClutterFocusConstructOnly;

/** Keyframe property transition #ClutterKeyframeTransition allows animating a property by defining "key frames": values at a normalized position on the transition duration. */
export interface ClutterKeyframeTransitionProps extends ClutterPropertyTransitionProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterKeyframeTransitionConstructOnly = ClutterPropertyTransitionConstructOnly;

export interface ClutterLayerNodeProps extends ClutterPaintNodeProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterLayerNodeConstructOnly = ClutterPaintNodeConstructOnly;

/** Layout managers base class #ClutterLayoutManager is a base abstract class for layout managers. */
export interface ClutterLayoutManagerProps extends GInitiallyUnownedProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterLayoutManagerConstructOnly = GInitiallyUnownedConstructOnly;

/** A #ClutterPressGesture subclass for recognizing long-press gestures */
export interface ClutterLongPressGestureProps extends ClutterPressGestureProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterLongPressGestureConstructOnly = ClutterPressGestureConstructOnly;

export interface ClutterMotionControllerProps extends ClutterActionProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterMotionControllerConstructOnly = ClutterActionConstructOnly;

/** Base class for effects using offscreen buffers #ClutterOffscreenEffect is an abstract class that can be used by [class@Effect] sub-classes requiring access to an offscreen buffer. */
export interface ClutterOffscreenEffectProps extends ClutterEffectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterOffscreenEffectConstructOnly = ClutterEffectConstructOnly;

/** A page turning effect A simple page turning effect */
export interface ClutterPageTurnEffectProps extends ClutterDeformEffectProps {
    /**
     * The angle of the page rotation, in degrees, between 0.0 and 360.0
     * @default 0.000000
     */
    angle?: number;
    /**
     * The period of the page turn, between 0.0 (no curling) and 1.0 (fully curled)
     * @default 0.000000
     */
    period?: number;
    /**
     * The radius of the page curl, in pixels
     * @default 24.000000
     */
    radius?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterPageTurnEffectConstructOnly = ClutterDeformEffectConstructOnly;

/** Paint objects #ClutterPaintNode is an element in the render graph. */
export interface ClutterPaintNodeProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterPaintNodeConstructOnly = never;

/** A #ClutterGesture subclass for recognizing pan gestures */
export interface ClutterPanGestureProps extends ClutterGestureProps {
    /**
     * The threshold in pixels that has to be panned for the gesture to start.
     * @default 0
     */
    'begin-threshold'?: number;
    /**
     * The maximum number of points to use for the pan.
     * @default 1
     */
    'max-n-points'?: number;
    /**
     * The minimum number of points for the gesture to start, defaults to 1.
     * @default 1
     */
    'min-n-points'?: number;
    /**
     * Constraints the pan gesture to the specified axis.
     * @default CLUTTER_PAN_AXIS_BOTH
     */
    'pan-axis'?: ClutterPanAxisNick | Clutter.PanAxis;
    /**
     * The mouse button required for the pan gesture to recognize.
     * @default 1
     */
    'required-button'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterPanGestureConstructOnly = ClutterGestureConstructOnly;

export interface ClutterPipelineNodeProps extends ClutterPaintNodeProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterPipelineNodeConstructOnly = ClutterPaintNodeConstructOnly;

/** An abstract #ClutterGesture subclass building the base for recognizing press gestures */
export interface ClutterPressGestureProps extends ClutterGestureProps {
    /**
     * Threshold in pixels to cancel the gesture, use -1 to disable the threshold.
     * @default 0
     */
    'cancel-threshold'?: number;
    /**
     * The minimum duration of a press in milliseconds for it to be recognized as a long press gesture.
     * @default -1
     */
    'long-press-duration-ms'?: number;
    /**
     * Whether the clickable actor should be in "pressed" state
     * @default FALSE
     */
    pressed?: boolean;
    /**
     * The mouse button required for the press gesture to recognize.
     * @default 0
     */
    'required-button'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterPressGestureConstructOnly = ClutterGestureConstructOnly;

/** Property transitions #ClutterPropertyTransition is a specialized [class@Transition] that can be used to tween a property of a [iface@Animatable] instance. */
export interface ClutterPropertyTransitionProps extends ClutterTransitionProps {
    /**
     * The name of the property of a [iface@Animatable] to animate.
     * @default NULL
     */
    'property-name'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterPropertyTransitionConstructOnly = ClutterTransitionConstructOnly;

export interface ClutterRootNodeProps extends ClutterPaintNodeProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterRootNodeConstructOnly = ClutterPaintNodeConstructOnly;

export interface ClutterScrollControllerProps extends ClutterActionProps {
    /**
     * Flags specifying scroll controller behavior
     * @default CLUTTER_SCROLL_CONTROLLER_FLAG_NONE
     */
    flags?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterScrollControllerConstructOnly = ClutterActionConstructOnly | 'flags';

/** Settings configuration Clutter depends on some settings to perform operations like detecting multiple button press events, or font options to render text. */
export interface ClutterSettingsProps extends GObjectProps {
    /**
     * The default distance that the cursor of a pointer device should travel before a drag operation should start.
     * @default 8
     */
    'dnd-drag-threshold'?: number;
    /**
     * The maximum distance, in pixels, between button-press events that determines whether or not to increase the click count by 1.
     * @default 5
     */
    'double-click-distance'?: number;
    /**
     * The time, in milliseconds, that should elapse between button-press events in order to increase the click count by 1.
     * @default 250
     */
    'double-click-time'?: number;
    /**
     * The DPI used when rendering text, as a value of 1024 * dots/inch.
     * @default -1
     */
    'font-dpi'?: number;
    /**
     * The default font name that should be used by text actors, as a string that can be passed to [func@Pango.FontDescription.from_string].
     * @default NULL
     */
    'font-name'?: string;
    /**
     * Sets the minimum duration for a press to be recognized as a long press gesture.
     * @default 500
     */
    'long-press-duration'?: number;
    /** @default 0 */
    'password-hint-time'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterSettingsConstructOnly = GObjectConstructOnly;

/** Base class for shader effects #ClutterShaderEffect is a class that implements all the plumbing for creating [class@Effect]s using GLSL shaders. */
export interface ClutterShaderEffectProps extends ClutterOffscreenEffectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterShaderEffectConstructOnly = ClutterOffscreenEffectConstructOnly;

export interface ClutterShaderFloatProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterShaderFloatConstructOnly = never;

export interface ClutterShaderIntProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterShaderIntConstructOnly = never;

export interface ClutterShaderMatrixProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterShaderMatrixConstructOnly = never;

/** A constraint snapping two actors together #ClutterSnapConstraint is a constraint the snaps the edges of two actors together, expanding the actor's allocation if necessary. */
export interface ClutterSnapConstraintProps extends ClutterConstraintProps {
    /**
     * The edge of the [class@Actor] that should be snapped
     * @default CLUTTER_SNAP_EDGE_RIGHT
     */
    'from-edge'?: ClutterSnapEdgeNick | Clutter.SnapEdge;
    /**
     * The offset, in pixels, between [property@SnapConstraint:from-edge] and [property@SnapConstraint:to-edge]
     * @default 0.000000
     */
    offset?: number;
    /** The [class@Actor] used as the source for the constraint */
    source?: Clutter.Actor;
    /**
     * The edge of the [property@SnapConstraint:source] that should be snapped
     * @default CLUTTER_SNAP_EDGE_RIGHT
     */
    'to-edge'?: ClutterSnapEdgeNick | Clutter.SnapEdge;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterSnapConstraintConstructOnly = ClutterConstraintConstructOnly;

export interface ClutterSpriteProps extends ClutterFocusProps {
    /** @default CLUTTER_SPRITE_ROLE_POINTER */
    role?: ClutterSpriteRoleNick | Clutter.SpriteRole;
    sequence?: Clutter.EventSequence;
    'sprite-device'?: Clutter.InputDevice;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterSpriteConstructOnly = ClutterFocusConstructOnly | 'role' | 'sequence' | 'sprite-device';

/** Top level visual element to which actors are placed. */
export interface ClutterStageProps extends ClutterActorProps, ClutterAnimatableProps {
    /** The [class@Clutter.Actor] that will receive key events from the underlying windowing system. */
    'key-focus'?: Clutter.Actor | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterStageConstructOnly = ClutterActorConstructOnly | ClutterAnimatableConstructOnly;

export interface ClutterStageViewProps extends GObjectProps {
    'color-state'?: Clutter.ColorState;
    framebuffer?: Cogl.Framebuffer;
    layout?: Mtk.Rectangle;
    /** @default NULL */
    name?: string;
    'output-color-state'?: Clutter.ColorState;
    /** @default 60.000000 */
    'refresh-rate'?: number;
    /** @default 1.000000 */
    scale?: number;
    stage?: Clutter.Stage;
    /** @default 0 */
    transform?: number;
    /** @default FALSE */
    'use-shadowfb'?: boolean;
    /** @default 0 */
    'vblank-duration-us'?: bigint | number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterStageViewConstructOnly = GObjectConstructOnly | 'name' | 'stage' | 'transform' | 'use-shadowfb' | 'vblank-duration-us';

/** An actor for displaying and editing text #ClutterText is an actor that displays custom text using Pango as the text rendering engine. */
export interface ClutterTextProps extends ClutterActorProps, ClutterAnimatableProps {
    /**
     * Toggles whether return invokes the activate signal or not.
     * @default TRUE
     */
    activatable?: boolean;
    /** A list of `PangoStyleAttribute`s to be applied to the contents of the #ClutterText actor. */
    attributes?: Pango.AttrList;
    /** The buffer which stores the text for this #ClutterText. */
    buffer?: Clutter.TextBuffer;
    /**
     * The color used to render the text.
     * @default #000000ff
     */
    color?: Cogl.Color;
    /**
     * The color of the cursor.
     * @default #000000ff
     */
    'cursor-color'?: Cogl.Color;
    /**
     * The current input cursor position.
     * @default -1
     */
    'cursor-position'?: number;
    /**
     * The size of the cursor, in pixels.
     * @default 2
     */
    'cursor-size'?: number;
    /**
     * Whether the input cursor is visible or not.
     * @default TRUE
     */
    'cursor-visible'?: boolean;
    /**
     * Whether key events delivered to the actor causes editing.
     * @default FALSE
     */
    editable?: boolean;
    /**
     * The preferred place to ellipsize the contents of the #ClutterText actor
     * @default PANGO_ELLIPSIZE_NONE
     */
    ellipsize?: PangoEllipsizeModeNick | Pango.EllipsizeMode;
    /**
     * The color used to highlight errors.
     * @default #ff0000ff
     */
    'error-color'?: Cogl.Color;
    /** The [struct@Pango.FontDescription] that should be used by the #ClutterText If you have a string describing the font then you should look at [property@Text:font-name] instead */
    'font-description'?: Pango.FontDescription;
    /**
     * The font to be used by the #ClutterText, as a string that can be parsed by [func@Pango.FontDescription.from_string].
     * @default NULL
     */
    'font-name'?: string;
    /** @default 0 */
    'input-hints'?: number;
    'input-interceptor'?: Clutter.Actor;
    /** @default CLUTTER_INPUT_CONTENT_PURPOSE_NORMAL */
    'input-purpose'?: ClutterInputContentPurposeNick | Clutter.InputContentPurpose;
    /**
     * Whether the contents of the #ClutterText should be justified on both margins.
     * @default FALSE
     */
    justify?: boolean;
    /**
     * The preferred alignment for the text.
     * @default PANGO_ALIGN_LEFT
     */
    'line-alignment'?: PangoAlignmentNick | Pango.Alignment;
    /**
     * Whether to wrap the lines of [property@Text:text] if the contents exceed the available allocation.
     * @default FALSE
     */
    'line-wrap'?: boolean;
    /**
     * If [property@Text:line-wrap] is set to %TRUE, this property will control how the text is wrapped.
     * @default PANGO_WRAP_WORD
     */
    'line-wrap-mode'?: PangoWrapModeNick | Pango.WrapMode;
    /**
     * The maximum length of the contents of the #ClutterText actor.
     * @default 0
     */
    'max-length'?: number;
    /**
     * If non-zero, the character that should be used in place of the actual text in a password text actor.
     * @default 0
     */
    'password-char'?: number;
    /**
     * Whether it is possible to select text, either using the pointer or the keyboard.
     * @default TRUE
     */
    selectable?: boolean;
    /**
     * The color of selected text.
     * @default #000000ff
     */
    'selected-text-color'?: Cogl.Color;
    /**
     * The current input cursor position.
     * @default -1
     */
    'selection-bound'?: number;
    /**
     * The color of the selection.
     * @default #000000ff
     */
    'selection-color'?: Cogl.Color;
    /**
     * Whether the #ClutterText actor should be in single line mode or not.
     * @default FALSE
     */
    'single-line-mode'?: boolean;
    /** The text to render inside the actor. */
    text?: string;
    /**
     * Whether the text includes Pango markup.
     * @default FALSE
     */
    'use-markup'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterTextConstructOnly = ClutterActorConstructOnly | ClutterAnimatableConstructOnly;

/** Text buffer for [class@Text] The #ClutterTextBuffer class contains the actual text displayed in a [class@Text] widget. */
export interface ClutterTextBufferProps extends GObjectProps {
    /**
     * The maximum length (in characters) of the text in the buffer.
     * @default 0
     */
    'max-length'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterTextBufferConstructOnly = GObjectConstructOnly;

export interface ClutterTextNodeProps extends ClutterPaintNodeProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterTextNodeConstructOnly = ClutterPaintNodeConstructOnly;

export interface ClutterTextureContentProps extends GObjectProps, ClutterContentProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterTextureContentConstructOnly = GObjectConstructOnly | ClutterContentConstructOnly;

export interface ClutterTextureNodeProps extends ClutterPipelineNodeProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterTextureNodeConstructOnly = ClutterPipelineNodeConstructOnly;

/** A class for time-based events #ClutterTimeline is a base class for managing time-based event that cause Clutter to redraw a stage, such as animations. */
export interface ClutterTimelineProps extends GObjectProps {
    actor?: Clutter.Actor;
    /**
     * If the direction of the timeline should be automatically reversed when reaching the end.
     * @default FALSE
     */
    'auto-reverse'?: boolean;
    /**
     * A delay, in milliseconds, that should be observed by the timeline before actually starting.
     * @default 0
     */
    delay?: number;
    /**
     * The direction of the timeline, either %CLUTTER_TIMELINE_FORWARD or %CLUTTER_TIMELINE_BACKWARD.
     * @default CLUTTER_TIMELINE_FORWARD
     */
    direction?: ClutterTimelineDirectionNick | Clutter.TimelineDirection;
    /**
     * Duration of the timeline in milliseconds, depending on the [property@Timeline:frame-clock] value.
     * @default 1000
     */
    duration?: number;
    /** The frame clock driving the timeline. */
    'frame-clock'?: Clutter.FrameClock;
    /**
     * Controls the way a #ClutterTimeline computes the normalized progress.
     * @default CLUTTER_LINEAR
     */
    'progress-mode'?: ClutterAnimationModeNick | Clutter.AnimationMode;
    /**
     * Defines how many times the timeline should repeat.
     * @default 0
     */
    'repeat-count'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterTimelineConstructOnly = GObjectConstructOnly;

export interface ClutterTransformNodeProps extends ClutterPaintNodeProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterTransformNodeConstructOnly = ClutterPaintNodeConstructOnly;

/** Transition between two values #ClutterTransition is an abstract subclass of [class@Timeline] that computes the interpolation between two values, stored by a [class@Interval]. */
export interface ClutterTransitionProps extends ClutterTimelineProps {
    /** The [iface@Animatable] instance currently being animated. */
    animatable?: Clutter.Animatable;
    /** The [class@Interval] used to describe the initial and final states of the transition. */
    interval?: Clutter.Interval;
    /**
     * Whether the #ClutterTransition should be automatically detached from the [property@Transition:animatable] instance whenever the [signal@Timeline::stopped] signal is emitted.
     * @default FALSE
     */
    'remove-on-complete'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterTransitionConstructOnly = ClutterTimelineConstructOnly;

/** Group transitions together The #ClutterTransitionGroup allows running multiple [class@Transition] instances concurrently. */
export interface ClutterTransitionGroupProps extends ClutterTransitionProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterTransitionGroupConstructOnly = ClutterTransitionConstructOnly;

export interface ClutterVirtualInputDeviceProps extends GObjectProps {
    /** @default CLUTTER_POINTER_DEVICE */
    'device-type'?: ClutterInputDeviceTypeNick | Clutter.InputDeviceType;
    seat?: Clutter.Seat;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterVirtualInputDeviceConstructOnly = GObjectConstructOnly | 'device-type' | 'seat';

// ---------------------------------------------------------------------------
// The GType-keyed widget map.
//
// Keyed by GType because that is also the GtkBuilder XML key and the typelib key. A
// consumer maps GTypes to tags in ITS convention — kebab for JSX intrinsics, Pascal
// for a Vue `GlobalComponents`, the class itself for a renderer whose element type
// is the class. None of those is baked in here.
//
// `slotCandidates` is a candidate list and never an answer: derived from methods
// taking exactly one widget argument. The GIR cannot tell adoption from reference —
// `set_title_widget` parents its argument and `set_activatable_widget` does not, and
// both are `void f(GtkWidget*)` at `transfer-ownership="none"`. Curation decides;
// this is what notices when a release adds a candidate.
// ---------------------------------------------------------------------------

export interface Widgets {

}

/**
 * Every GType this namespace can create AND put on screen. A consumer derives its own
 * tag map. For everything a UI file can instantiate — layout managers, event
 * controllers, cell renderers, `GtkSizeGroup` — read `DECLS` below.
 */
export type WidgetGType = keyof Widgets;

// ---------------------------------------------------------------------------
// Child holders — the same shape, for objects that CARRY a widget without being one.
//
// `GtkListItem`, `GtkListHeader`, `GtkColumnViewCell` and `AdwToggle` descend from
// `GObject.Object` and hold a widget through `set_child`/`get_child`. A renderer places
// them exactly like a container, so they belong in the vocabulary; a check asking "is
// this a widget" must still be able to say no. Hence a sibling table rather than four
// more rows in `Widgets`: concatenate them when you mean both.
// ---------------------------------------------------------------------------

export interface ChildHolders {

}

/** Every GType this namespace holds a child in without it being a widget. */
export type ChildHolderGType = keyof ChildHolders;

/** The writable, optional, GObject-keyed property surface of one GType. */
export type PropsOf<G extends WidgetGType> = Widgets[G]['props'];

/** The signal table this package already emits, reached by GType. */
export type SignalsOf<G extends WidgetGType> = Widgets[G]['signals'];

/** The instance type — what a `ref`-shaped prop should infer. */
export type InstanceOf<G extends WidgetGType> = Widgets[G]['class'];

/** Property names that can only be set at construction. */
export type ConstructOnlyOf<G extends WidgetGType> = Widgets[G]['constructOnly'];

/** Candidate child slots — see the note above; curation decides. */
export type SlotCandidatesOf<G extends WidgetGType> = keyof Widgets[G]['slotCandidates'];

/**
 * The same facts as runtime data, for a consumer that CHECKS them.
 *
 * Types are erased, so a spec that asks the installed GTK whether every property
 * here is a writable ParamSpec, every signal resolvable by `GObject.signal_lookup`
 * and every nick resolvable through an enum lookup cannot read the interfaces
 * above. Emitted headlessly with no GTK present, which is exactly why the checking
 * belongs to the consumer and the DATA belongs here.
 */
export const PROVENANCE: {
    readonly namespace: string;
    readonly version: string;
    /** The version the LIBRARY states, or null where it states none. Never the namespace's. */
    readonly libraryVersion: string | null;
    readonly childHolders: number;
    readonly droppedBases: readonly string[];
    readonly inlinedBases: readonly string[];
    /** `<decl>.<prop>` for every property printed `never` because TypeScript has no value for it. */
    readonly unsettableProps: readonly string[];
    /**
     * `<decl>.<prop>: <Ns>.<Name>` for every property printed `never` because the model
     * could not resolve its type across a namespace boundary — two independently released
     * GIRs disagreeing, which is what the main emitter answers `never` for as well.
     */
    readonly unresolvedProps: readonly string[];
    /**
     * `c:identifier-prefixes` from the GIR, verbatim and in order — `['G']` for Gio.
     *
     * The C prefix a type REFERENCE needs: resolving `Gio.Icon` means producing `GIcon`,
     * and nothing else in this package states that `Gio` spells itself `G`. Carried rather
     * than derived because GIR carries it, and a derivation over the `DECLS` keys is wrong
     * wherever the C prefix is not a prefix of the type NAMES: gdkx11-4.0 and gdkwayland-4.0
     * both state `Gdk` while every key they declare begins `GdkX11`/`GdkWayland`.
     *
     * Empty where the GIR states none — 17 of the 627 emitting namespaces — because
     * inventing the namespace name there is a confident wrong answer in place of a missing
     * one. A LIST because 20 of them state more than one, which no single string expresses.
     */
    readonly identifierPrefixes: readonly string[];
    /**
     * Sibling vocabularies this one's DECLARATIONS come from, as import specifiers.
     *
     * A chain link with no `OWN_PROPS` row is ambiguous on its own — `GtkSeparator` has no
     * settable property, `GApplication` has its properties in another package — and this
     * list is what tells the two apart. Enum and bitfield NUMBERS are not here: those are
     * carried in this file, because a `PROP_ENUMS` row naming a foreign GType gives a
     * consumer nothing to load and a `.ui` file using the property never names its owner.
     */
    readonly requiredVocabularies: readonly string[];
};

/** Declaration GType -> its own settable properties, as GObject registered them. */
export const OWN_PROPS: Readonly<Record<string, readonly string[]>>;

/**
 * Declaration GType -> the signals it registers itself, never its parents'.
 *
 * Keyed like `OWN_PROPS`, so both are read at every link of a `DECLS` chain. An
 * abstract base has no `Widgets` row and still owns signals — `GtkWidget` owns 13.
 */
export const OWN_SIGNALS: Readonly<Record<string, readonly string[]>>;

/**
 * Instantiable GType -> every declaration its members come from, self first.
 *
 * The key set is what a UI description file can NAME: every registered, non-abstract
 * class this namespace declares. GtkBuilder resolves a `<object class="…">` through
 * `g_type_from_name`, which knows nothing about widgets, so this is wider than
 * `Widgets` by design — `GtkSizeGroup`, `GtkTextTag`, every `GtkEventController`
 * and every `GtkCellRenderer` are here and are not widgets.
 *
 * `Widgets` and `CHILD_HOLDERS` are the narrower questions and answer them unchanged.
 */
export const DECLS: Readonly<Record<string, readonly string[]>>;

/** The GTypes in `DECLS` that hold a widget without being one — see `ChildHolders`. */
export const CHILD_HOLDERS: readonly string[];

/** Enum GType -> the nicks this surface offers. */
export const ENUM_NICKS: Readonly<Record<string, readonly string[]>>;

/**
 * `<enum GType>.<nick>` -> the integer GObject registers for it, from GIR's `value`.
 *
 * Position in `ENUM_NICKS` is NOT this number. Counting is wrong on 6 of the 137 enums a
 * GTK 4 vocabulary carries -- 112 in Gtk-4.0 and 25 in Adw-1: `GtkResponseType` runs -1 to -11, `GtkTextWindowType` starts
 * at 1, `GtkOrdering` and `GtkConstraintRelation` are -1/0/1, `GtkAlign` has two names
 * on one value, and `GtkConstraintStrength.required` is 1001001000 where counting says 0.
 *
 * Read from the same GIR as the nicks, deliberately. A consumer reading the numbers off an
 * installed typelib instead has two provenances for one table, and then cannot tell a
 * missing number from a host older than the vocabulary.
 */
export const ENUM_VALUES: Readonly<Record<string, number>>;

/**
 * The `<enum GType>.<nick>` entries GIR marks `deprecated="1"`.
 *
 * Two names on one value is how GObject spells an alias -- `GTK_ALIGN_BASELINE` and
 * `GTK_ALIGN_BASELINE_FILL` are both 4, and both keep a `ENUM_VALUES` entry. The pairing
 * is visible in the numbers; which name is the old one is not, and this is that fact --
 * where GIR states it. It usually does not: 4 registered-enum members across the 718 GIRs
 * carry the attribute, and 179 of the 182 value-sharing pairs carry it on neither half, so
 * absence from this list means GIR is silent, not that the nick is the current one.
 */
export const ENUM_DEPRECATED: readonly string[];

/**
 * `<enum GType>.<nick>` -> the raw GIR `value` no number could be read from.
 *
 * The declared remainder, so that every nick in `ENUM_NICKS` is in `ENUM_VALUES` or in
 * here and a drop cannot be silent. Two shapes reach it: a symbolic or absent value (Vala
 * writes `(null)`, a char enum writes a letter) and an integer past
 * `Number.MAX_SAFE_INTEGER`, where a literal would lose precision and stop being the
 * GIR's number. Empty for Gtk, Adw, GLib and Gio.
 */
export const ENUM_VALUES_UNREADABLE: Readonly<Record<string, string>>;

/**
 * `<bitfield GType>.<nick>` -> the integer GObject registers for that one member.
 *
 * `ENUM_NICKS` carries no bitfield, because GObject cannot resolve a nick SET; that says
 * nothing about a single member's number, and the number is what a host without GI needs.
 * 23 settable properties in Gtk-4.0 and Adw-1 are bitfield-typed and are declared bare
 * `number` -- `GtkEntry:input-hints`, `GtkPopoverMenu:flags`, `AdwTabView:shortcuts`,
 * `GtkDropTarget:actions` among them. Counting is worst here: 119 of the 156 Gtk-4.0
 * bitfield members this vocabulary carries disagree with their declaration position,
 * against 29 of 672 enumeration members.
 *
 * Combine with `|` as GObject does. There is no nick table to pair this with, so a name
 * here is resolvable and a SET still is not.
 */
export const FLAG_VALUES: Readonly<Record<string, number>>;

/** `<bitfield GType>.<nick>` -> the raw GIR `value` no number could be read from. */
export const FLAG_VALUES_UNREADABLE: Readonly<Record<string, string>>;

/**
 * `<declaration GType>.<property>` -> the GType of that property's enum or bitfield.
 *
 * The join the value tables need and nothing else here carries. A host with no GI has a
 * property name and a nick and needs a number; `ENUM_VALUES` is keyed by ENUM GType, and
 * only this says which enum a property is. Keyed by DECLARATION like `OWN_PROPS`, so it is
 * read at every link of a `DECLS` chain — `orientation` belongs to `GtkOrientable`, not
 * to the `GtkBox` a caller starts from.
 *
 * Present only where the property's OWN type is the enum: an array of them, or a union that
 * merely mentions one, would be an entry a consumer resolves wrongly.
 *
 * The GType named here is not always one THIS module gives numbers for. A nick vocabulary is
 * emitted once, by the namespace that owns the enum, so `AdwComboRow.search-match-mode` names
 * `GtkStringFilterMatchMode` and its rows are in `@girs/gtk-4.0/vocabulary` — 83 of the 909
 * entries in a full run resolve only with the owner's vocabulary loaded beside this one. An
 * owner with no vocabulary of its own (Gdk, Pango) is inlined here instead, so every entry
 * resolves against SOME module.
 */
export const PROP_ENUMS: Readonly<Record<string, string>>;

/**
 * `<declaration GType>.<property>` -> the GType of that property's own type.
 *
 * `PROP_ENUMS` one case wider, and separate on purpose: that table promises the GType it names
 * has NUMBERS, and this one promises only that the GType is the property's. A host inferring a
 * type from a property — the middle of an uncast lookup chain, an uncast closure's return type —
 * reads this one; a host resolving a nick to a number reads that one.
 *
 * Absent means no GType can be stated, not that the property is scalar: `gchararray` is carried
 * like any other, so absence is readable as "unknown".
 */
export const PROP_TYPES: Readonly<Record<string, string>>;

/**
 * The kinds of value a GTK accessible property, relation or state takes.
 *
 * `enum` is the one that needs a second lookup: `ARIA_VALUE_ENUMS` names the enum GType,
 * and `ENUM_NICKS` and `ENUM_VALUES` answer from there.
 */
export type AriaValueType = 'string' | 'integer' | 'double' | 'boolean' | 'reference' | 'enum';

/**
 * `<enum GType>.<nick>` -> the kind of value that ARIA slot takes.
 *
 * The one table in this file that is not a fact about a ParamSpec. A GtkBuilder or
 * Blueprint `accessibility { … }` block is typed by GTK's ARIA table, not by the widget,
 * and the two disagree where it costs most: `orientation` is settable on a `GtkLabel`
 * that implements no `GtkOrientable`, and `checked` is a `GtkAccessibleTristate`, so
 * `checked: true` is the number 1 rather than a boolean. Typing those slots from the
 * widget's properties gets both wrong and raises nothing.
 *
 * Keyed like `ENUM_VALUES` because the ARIA names ARE enum members — of
 * `GtkAccessibleProperty`, `GtkAccessibleRelation` and `GtkAccessibleState` — so
 * `ENUM_NICKS` already lists them and one key parser reads both.
 *
 * Read from each member's own GIR documentation. `gtk_accessible_property_init_value()`
 * is the C half of this table and is not introspectable; the doc sentence is, and states
 * the type for 52 of the 53 members in gtk4 4.23.3. Complete or absent, never partial: a
 * member the generator cannot answer for fails the build and names itself.
 */
export const ARIA_VALUE_TYPES: Readonly<Record<string, AriaValueType>>;

/**
 * The same keys, for the `'enum'` rows only -> the GType of that enum.
 *
 * A table of its own for the reason `PROP_ENUMS` is one: folded in, the values of
 * `ARIA_VALUE_TYPES` would be six reserved words mixed with arbitrary GTypes and telling
 * them apart would be the consumer's problem. Apart, `ARIA_VALUE_TYPES[k] === 'enum'` is
 * the whole test and `ENUM_NICKS[ARIA_VALUE_ENUMS[k]]` is the nick list.
 */
export const ARIA_VALUE_ENUMS: Readonly<Record<string, string>>;

/** Widget GType -> slot name -> the method that may adopt a child there. */
export const SLOT_CANDIDATES: Readonly<Record<string, Readonly<Record<string, string>>>>;

/**
 * `Type`, `Type.property` and `Type::signal` -> the release that introduced it.
 *
 * What keeps a runtime cross-check honest across a version gap without an
 * allowlist: a name the installed library lacks is a defect UNLESS the version
 * here is newer than the one running.
 *
 * ALL THREE key shapes, because that test only works for the names it covers. A
 * property-only map leaves a consumer no way to explain a missing SIGNAL, which is
 * a correct vocabulary reported as 18 defects; a member-only map leaves it no way to
 * explain a missing CLASS, and that one fails as a bare
 * `TypeError: can't access property "$gtype", ctor() is undefined` that does not
 * even name the GType.
 *
 * A key is present only where the GIR states a version — sparse by nature (`version`
 * sits on 29 of the 301 classes and interfaces in Gtk-4.0), never inferred.
 */
export const SINCE: Readonly<Record<string, string>>;
