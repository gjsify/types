/**
 * The GIR-derived widget VOCABULARY for Clutter-6.
 *
 * GENERATED — do not edit. Provenance: Clutter-6 — dropped empty base(s): Atk.ImplementorIface
 *
 * 64 instantiable GTypes (of which 0 concrete widgets), 77 declarations, 49 enum nick unions, 0 slot candidates.
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

import type Clutter from './clutter-6.js';
import type GObject from '@girs/gobject-2.0';
import type Graphene from '@girs/graphene-1.0';
import type Pango from '@girs/pango-1.0';
import type cairo from '@girs/cairo-1.0';
import type { GInitiallyUnownedConstructOnly, GInitiallyUnownedProps, GObjectConstructOnly, GObjectProps, GParamConstructOnly, GParamProps } from '@girs/gobject-2.0/vocabulary';
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
export type ClutterBinAlignmentNick = 'fixed' | 'fill' | 'start' | 'end' | 'center';
export type ClutterBindCoordinateNick = 'x' | 'y' | 'width' | 'height' | 'position' | 'size' | 'all';
export type ClutterBoxAlignmentNick = 'start' | 'end' | 'center';
export type ClutterButtonStateNick = 'released' | 'pressed';
export type ClutterContentGravityNick = 'top-left' | 'top' | 'top-right' | 'left' | 'center' | 'right' | 'bottom-left' | 'bottom' | 'bottom-right' | 'resize-fill' | 'resize-aspect';
export type ClutterDragAxisNick = 'axis-none' | 'x-axis' | 'y-axis';
export type ClutterEventTypeNick = 'nothing' | 'key-press' | 'key-release' | 'motion' | 'enter' | 'leave' | 'button-press' | 'button-release' | 'scroll' | 'stage-state' | 'destroy-notify' | 'client-message' | 'delete' | 'touch-begin' | 'touch-update' | 'touch-end' | 'touch-cancel' | 'touchpad-pinch' | 'touchpad-swipe' | 'proximity-in' | 'proximity-out' | 'pad-button-press' | 'pad-button-release' | 'pad-strip' | 'pad-ring' | 'im-commit' | 'im-delete' | 'im-preedit' | 'event-last';
export type ClutterFlowOrientationNick = 'horizontal' | 'vertical';
export type ClutterGestureTriggerEdgeNick = 'none' | 'after' | 'before';
export type ClutterGravityNick = 'none' | 'north' | 'north-east' | 'east' | 'south-east' | 'south' | 'south-west' | 'west' | 'north-west' | 'center';
export type ClutterGridPositionNick = 'left' | 'right' | 'top' | 'bottom';
export type ClutterInputAxisNick = 'ignore' | 'x' | 'y' | 'pressure' | 'xtilt' | 'ytilt' | 'wheel' | 'distance' | 'rotation' | 'slider' | 'last';
export type ClutterInputContentPurposeNick = 'normal' | 'alpha' | 'digits' | 'number' | 'phone' | 'url' | 'email' | 'name' | 'password' | 'date' | 'time' | 'datetime' | 'terminal';
export type ClutterInputDeviceMappingNick = 'absolute' | 'relative';
export type ClutterInputDevicePadSourceNick = 'unknown' | 'finger';
export type ClutterInputDeviceToolTypeNick = 'none' | 'pen' | 'eraser' | 'brush' | 'pencil' | 'airbrush' | 'mouse' | 'lens';
export type ClutterInputDeviceTypeNick = 'pointer-device' | 'keyboard-device' | 'extension-device' | 'joystick-device' | 'tablet-device' | 'touchpad-device' | 'touchscreen-device' | 'pen-device' | 'eraser-device' | 'cursor-device' | 'pad-device' | 'n-device-types';
export type ClutterInputModeNick = 'master' | 'slave' | 'floating';
export type ClutterInputPanelStateNick = 'off' | 'on' | 'toggle';
export type ClutterInterpolationNick = 'linear' | 'cubic';
export type ClutterKeyStateNick = 'released' | 'pressed';
export type ClutterLongPressStateNick = 'query' | 'activate' | 'cancel';
export type ClutterOrientationNick = 'horizontal' | 'vertical';
export type ClutterPanAxisNick = 'axis-none' | 'x-axis' | 'y-axis' | 'axis-auto';
export type ClutterPathNodeTypeNick = 'move-to' | 'line-to' | 'curve-to' | 'close' | 'rel-move-to' | 'rel-line-to' | 'rel-curve-to';
export type ClutterPickModeNick = 'none' | 'reactive' | 'all';
export type ClutterPointerA11yDwellClickTypeNick = 'none' | 'primary' | 'secondary' | 'middle' | 'double' | 'drag';
export type ClutterPointerA11yDwellDirectionNick = 'none' | 'left' | 'right' | 'up' | 'down';
export type ClutterPointerA11yDwellModeNick = 'window' | 'gesture';
export type ClutterPointerA11yTimeoutTypeNick = 'secondary-click' | 'dwell' | 'gesture';
export type ClutterRequestModeNick = 'height-for-width' | 'width-for-height' | 'content-size';
export type ClutterRotateAxisNick = 'x-axis' | 'y-axis' | 'z-axis';
export type ClutterRotateDirectionNick = 'cw' | 'ccw';
export type ClutterScalingFilterNick = 'linear' | 'nearest' | 'trilinear';
export type ClutterScrollDirectionNick = 'up' | 'down' | 'left' | 'right' | 'smooth';
export type ClutterScrollSourceNick = 'unknown' | 'wheel' | 'finger' | 'continuous';
export type ClutterShaderTypeNick = 'vertex-shader' | 'fragment-shader';
export type ClutterSnapEdgeNick = 'top' | 'right' | 'bottom' | 'left';
export type ClutterStaticColorNick = 'white' | 'black' | 'red' | 'dark-red' | 'green' | 'dark-green' | 'blue' | 'dark-blue' | 'cyan' | 'dark-cyan' | 'magenta' | 'dark-magenta' | 'yellow' | 'dark-yellow' | 'gray' | 'dark-gray' | 'light-gray' | 'butter' | 'butter-light' | 'butter-dark' | 'orange' | 'orange-light' | 'orange-dark' | 'chocolate' | 'chocolate-light' | 'chocolate-dark' | 'chameleon' | 'chameleon-light' | 'chameleon-dark' | 'sky-blue' | 'sky-blue-light' | 'sky-blue-dark' | 'plum' | 'plum-light' | 'plum-dark' | 'scarlet-red' | 'scarlet-red-light' | 'scarlet-red-dark' | 'aluminium-1' | 'aluminium-2' | 'aluminium-3' | 'aluminium-4' | 'aluminium-5' | 'aluminium-6' | 'transparent';
export type ClutterStepModeNick = 'start' | 'end';
export type ClutterTextDirectionNick = 'default' | 'ltr' | 'rtl';
export type ClutterTextureQualityNick = 'low' | 'medium' | 'high';
export type ClutterTimelineDirectionNick = 'forward' | 'backward';
export type ClutterTouchpadGesturePhaseNick = 'begin' | 'update' | 'end' | 'cancel';
export type ClutterUnitTypeNick = 'pixel' | 'em' | 'mm' | 'point' | 'cm';
export type ClutterZoomAxisNick = 'x-axis' | 'y-axis' | 'both';

// ---------------------------------------------------------------------------
// Property surfaces — one interface per GIR DECLARATION, mirroring GIR's own
// inheritance rather than flattening per widget.
//
// The interfaces are load-bearing, not tidiness: `GtkBox` declares four properties
// of its own and `orientation` is not among them — it lives on `Gtk.Orientable`,
// because GObject installs interface properties on the implementor at runtime while
// GIR keeps them once, on the interface.
// ---------------------------------------------------------------------------

/** The #ClutterAction structure contains only private data and should be accessed using the provided API. */
export interface ClutterActionProps extends ClutterActorMetaProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterActionConstructOnly = ClutterActorMetaConstructOnly;

/** Base class for actors. */
export interface ClutterActorProps extends GInitiallyUnownedProps, ClutterAnimatableProps, ClutterContainerProps, ClutterScriptableProps {
    /**
     * Adds a #ClutterAction to the actor
     * @since 1.4
     */
    actions?: Clutter.Action;
    /**
     * The anchor point expressed as a #ClutterGravity It is highly recommended not to use #ClutterActor:anchor-x, #ClutterActor:anchor-y, and #ClutterActor:anchor-gravity in newly written code; the anchor …
     * @since 1.0
     * @deprecated since 1.12: Use #ClutterActor:pivot-point instead
     */
    'anchor-gravity'?: ClutterGravityNick | Clutter.Gravity;
    /**
     * The X coordinate of an actor's anchor point, relative to the actor coordinate space, in pixels.
     * @since 0.8
     * @deprecated since 1.12: Use #ClutterActor:pivot-point instead
     */
    'anchor-x'?: number;
    /**
     * The Y coordinate of an actor's anchor point, relative to the actor coordinate space, in pixels It is highly recommended not to use #ClutterActor:anchor-x, #ClutterActor:anchor-y, and #ClutterActor:an…
     * @since 0.8
     * @deprecated since 1.12: Use #ClutterActor:pivot-point instead
     */
    'anchor-y'?: number;
    /**
     * Paints a solid fill of the actor's allocation using the specified color.
     * @since 1.10
     */
    'background-color'?: Clutter.Color;
    /**
     * The visible region of the actor, in actor-relative coordinates, expressed as a #graphene_rect_t.
     * @since 1.12
     */
    'clip-rect'?: Graphene.Rect;
    /**
     * Whether the clip region should track the allocated area of the actor.
     * @since 1.0
     */
    'clip-to-allocation'?: boolean;
    /**
     * Adds a #ClutterConstraint to the actor
     * @since 1.4
     */
    constraints?: Clutter.Constraint;
    /**
     * The #ClutterContent implementation that controls the content of the actor.
     * @since 1.10
     */
    content?: Clutter.Content;
    /**
     * The alignment that should be honoured by the #ClutterContent set with the #ClutterActor:content property.
     * @since 1.10
     */
    'content-gravity'?: ClutterContentGravityNick | Clutter.ContentGravity;
    /**
     * The repeat policy for the actor's #ClutterActor:content.
     * @since 1.12
     */
    'content-repeat'?: number;
    /**
     * The position of the actor on the Z axis.
     * @since 0.6
     * @deprecated since 1.12: Use #ClutterActor:z-position instead.
     */
    depth?: number;
    /**
     * Adds #ClutterEffect to the list of effects be applied on a #ClutterActor
     * @since 1.4
     */
    effect?: Clutter.Effect;
    /**
     * This flag controls whether the #ClutterActor:fixed-x and #ClutterActor:fixed-y properties are used
     * @since 0.8
     */
    'fixed-position-set'?: boolean;
    /**
     * The fixed X position of the actor in pixels.
     * @since 0.8
     */
    'fixed-x'?: number;
    /**
     * The fixed Y position of the actor in pixels.
     * @since 0.8
     */
    'fixed-y'?: number;
    /** Height of the actor (in pixels). */
    height?: number;
    /**
     * A delegate object for controlling the layout of the children of an actor.
     * @since 1.10
     */
    'layout-manager'?: Clutter.LayoutManager;
    'magnification-filter'?: ClutterScalingFilterNick | Clutter.ScalingFilter;
    /**
     * The margin (in pixels) from the bottom of the actor.
     * @since 1.10
     */
    'margin-bottom'?: number;
    /**
     * The margin (in pixels) from the left of the actor.
     * @since 1.10
     */
    'margin-left'?: number;
    /**
     * The margin (in pixels) from the right of the actor.
     * @since 1.10
     */
    'margin-right'?: number;
    /**
     * The margin (in pixels) from the top of the actor.
     * @since 1.10
     */
    'margin-top'?: number;
    /**
     * A forced minimum height request for the actor, in pixels Writing this property sets the #ClutterActor:min-height-set property as well, as a side effect.
     * @since 0.8
     */
    'min-height'?: number;
    /**
     * This flag controls whether the #ClutterActor:min-height property is used
     * @since 0.8
     */
    'min-height-set'?: boolean;
    /**
     * A forced minimum width request for the actor, in pixels Writing this property sets the #ClutterActor:min-width-set property as well, as a side effect.
     * @since 0.8
     */
    'min-width'?: number;
    /**
     * This flag controls whether the #ClutterActor:min-width property is used
     * @since 0.8
     */
    'min-width-set'?: boolean;
    'minification-filter'?: ClutterScalingFilterNick | Clutter.ScalingFilter;
    /**
     * The name of the actor
     * @since 0.2
     */
    name?: string;
    /**
     * A forced natural height request for the actor, in pixels Writing this property sets the #ClutterActor:natural-height-set property as well, as a side effect.
     * @since 0.8
     */
    'natural-height'?: number;
    /**
     * This flag controls whether the #ClutterActor:natural-height property is used
     * @since 0.8
     */
    'natural-height-set'?: boolean;
    /**
     * A forced natural width request for the actor, in pixels Writing this property sets the #ClutterActor:natural-width-set property as well, as a side effect.
     * @since 0.8
     */
    'natural-width'?: number;
    /**
     * This flag controls whether the #ClutterActor:natural-width property is used
     * @since 0.8
     */
    'natural-width-set'?: boolean;
    /**
     * Determines the conditions in which the actor will be redirected to an offscreen framebuffer while being painted.
     * @since 1.8
     */
    'offscreen-redirect'?: number;
    /** Opacity of an actor, between 0 (fully transparent) and 255 (fully opaque) The #ClutterActor:opacity property is animatable. */
    opacity?: number;
    /**
     * The point around which the scaling and rotation transformations occur.
     * @since 1.12
     */
    'pivot-point'?: Graphene.Point;
    /**
     * The Z component of the #ClutterActor:pivot-point, expressed as a value along the Z axis.
     * @since 1.12
     */
    'pivot-point-z'?: number;
    /**
     * The position of the origin of the actor.
     * @since 1.12
     */
    position?: Graphene.Point;
    /**
     * Whether the actor is reactive to events or not Only reactive actors will emit event-related signals
     * @since 0.6
     */
    reactive?: boolean;
    /**
     * Request mode for the #ClutterActor.
     * @since 0.8
     */
    'request-mode'?: ClutterRequestModeNick | Clutter.RequestMode;
    /**
     * The rotation angle on the X axis.
     * @since 0.6
     */
    'rotation-angle-x'?: number;
    /**
     * The rotation angle on the Y axis The #ClutterActor:rotation-angle-y property is animatable.
     * @since 0.6
     */
    'rotation-angle-y'?: number;
    /**
     * The rotation angle on the Z axis The #ClutterActor:rotation-angle-z property is animatable.
     * @since 0.6
     */
    'rotation-angle-z'?: number;
    /**
     * The rotation center on the X axis.
     * @since 0.6
     * @deprecated since 1.12: Use #ClutterActor:pivot-point instead
     */
    'rotation-center-x'?: Graphene.Point3D;
    /**
     * The rotation center on the Y axis.
     * @since 0.6
     * @deprecated since 1.12: Use #ClutterActor:pivot-point instead
     */
    'rotation-center-y'?: Graphene.Point3D;
    /**
     * The rotation center on the Z axis.
     * @since 0.6
     * @deprecated since 1.12: Use #ClutterActor:pivot-point instead
     */
    'rotation-center-z'?: Graphene.Point3D;
    /**
     * The rotation center on the Z axis expressed as a #ClutterGravity.
     * @since 1.0
     * @deprecated since 1.12: Use #ClutterActor:pivot-point instead
     */
    'rotation-center-z-gravity'?: ClutterGravityNick | Clutter.Gravity;
    /**
     * The horizontal center point for scaling
     * @since 1.0
     * @deprecated since 1.12: Use #ClutterActor:pivot-point instead
     */
    'scale-center-x'?: number;
    /**
     * The vertical center point for scaling
     * @since 1.0
     * @deprecated since 1.12: Use #ClutterActor:pivot-point instead
     */
    'scale-center-y'?: number;
    /**
     * The center point for scaling expressed as a #ClutterGravity
     * @since 1.0
     * @deprecated since 1.12: Use #ClutterActor:pivot-point instead
     */
    'scale-gravity'?: ClutterGravityNick | Clutter.Gravity;
    /**
     * The horizontal scale of the actor.
     * @since 0.6
     */
    'scale-x'?: number;
    /**
     * The vertical scale of the actor.
     * @since 0.6
     */
    'scale-y'?: number;
    /**
     * The scale factor of the actor along the Z axis.
     * @since 1.12
     */
    'scale-z'?: number;
    /**
     * If %TRUE, the actor is automatically shown when parented.
     * @since 0.8
     */
    'show-on-set-parent'?: boolean;
    /**
     * The size of the actor.
     * @since 1.12
     */
    size?: Graphene.Size;
    /**
     * The direction of the text inside a #ClutterActor.
     * @since 1.0
     */
    'text-direction'?: ClutterTextDirectionNick | Clutter.TextDirection;
    /**
     * An additional translation applied along the X axis, relative to the actor's #ClutterActor:pivot-point.
     * @since 1.12
     */
    'translation-x'?: number;
    /**
     * An additional translation applied along the Y axis, relative to the actor's #ClutterActor:pivot-point.
     * @since 1.12
     */
    'translation-y'?: number;
    /**
     * An additional translation applied along the Z axis, relative to the actor's #ClutterActor:pivot-point.
     * @since 1.12
     */
    'translation-z'?: number;
    /** Whether the actor is set to be visible or not See also #ClutterActor:mapped */
    visible?: boolean;
    /** Width of the actor (in pixels). */
    width?: number;
    /** X coordinate of the actor in pixels. */
    x?: number;
    /**
     * The alignment of an actor on the X axis, if the actor has been given extra space for its allocation.
     * @since 1.10
     */
    'x-align'?: ClutterActorAlignNick | Clutter.ActorAlign;
    /**
     * Whether a layout manager should assign more space to the actor on the X axis.
     * @since 1.12
     */
    'x-expand'?: boolean;
    /** Y coordinate of the actor in pixels. */
    y?: number;
    /**
     * The alignment of an actor on the Y axis, if the actor has been given extra space for its allocation.
     * @since 1.10
     */
    'y-align'?: ClutterActorAlignNick | Clutter.ActorAlign;
    /**
     * Whether a layout manager should assign more space to the actor on the Y axis.
     * @since 1.12
     */
    'y-expand'?: boolean;
    /**
     * The actor's position on the Z axis, relative to the parent's transformations.
     * @since 1.12
     */
    'z-position'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterActorConstructOnly = GInitiallyUnownedConstructOnly | ClutterAnimatableConstructOnly | ClutterContainerConstructOnly | ClutterScriptableConstructOnly;

/** The #ClutterActorMeta structure contains only private data and should be accessed using the provided API */
export interface ClutterActorMetaProps extends GInitiallyUnownedProps {
    /**
     * Whether or not the #ClutterActorMeta is enabled
     * @since 1.4
     */
    enabled?: boolean;
    /**
     * The unique name to access the #ClutterActorMeta
     * @since 1.4
     */
    name?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterActorMetaConstructOnly = GInitiallyUnownedConstructOnly;

/** The #ClutterActorNode structure is an opaque type whose members cannot be directly accessed. */
export interface ClutterActorNodeProps extends ClutterPaintNodeProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterActorNodeConstructOnly = ClutterPaintNodeConstructOnly;

/** #ClutterAlignConstraint is an opaque structure whose members cannot be directly accesses */
export interface ClutterAlignConstraintProps extends ClutterConstraintProps {
    /**
     * The axis to be used to compute the alignment
     * @since 1.4
     */
    'align-axis'?: ClutterAlignAxisNick | Clutter.AlignAxis;
    /**
     * The alignment factor, as a normalized value between 0.0 and 1.0 The factor depends on the #ClutterAlignConstraint:align-axis property: with an align-axis value of %CLUTTER_ALIGN_X_AXIS, 0.0 means lef…
     * @since 1.4
     */
    factor?: number;
    /**
     * The #ClutterActor used as the source for the alignment.
     * @since 1.4
     */
    source?: Clutter.Actor;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterAlignConstraintConstructOnly = ClutterConstraintConstructOnly;

/** #ClutterAlpha combines a #ClutterTimeline and a function. */
export interface ClutterAlphaProps extends GInitiallyUnownedProps, ClutterScriptableProps {
    /**
     * The progress function logical id - a value from the #ClutterAnimationMode enumeration.
     * @since 1.0
     * @deprecated since 1.12: Use #ClutterTimeline:progress-mode
     */
    mode?: bigint | number;
    /**
     * A #ClutterTimeline instance used to drive the alpha function.
     * @since 0.2
     * @deprecated since 1.12
     */
    timeline?: Clutter.Timeline;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterAlphaConstructOnly = GInitiallyUnownedConstructOnly | ClutterScriptableConstructOnly;

export interface ClutterAnimatableProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterAnimatableConstructOnly = GObjectConstructOnly;

/** The #ClutterAnimation structure contains only private data and should be accessed using the provided functions. */
export interface ClutterAnimationProps extends GObjectProps, ClutterScriptableProps {
    /**
     * The #ClutterAlpha used by the animation.
     * @since 1.0
     * @deprecated since 1.10: Use the #ClutterAnimation:timeline property and the #ClutterTimeline:progress-mode property instead.
     */
    alpha?: Clutter.Alpha;
    /**
     * The duration of the animation, expressed in milliseconds.
     * @since 1.0
     * @deprecated since 1.12: Use #ClutterPropertyTransition instead
     */
    duration?: number;
    /**
     * Whether the animation should loop.
     * @since 1.0
     * @deprecated since 1.12: Use #ClutterPropertyTransition instead
     */
    loop?: boolean;
    /**
     * The animation mode, either a value from #ClutterAnimationMode or a value returned by clutter_alpha_register_func().
     * @since 1.0
     * @deprecated since 1.12: Use #ClutterPropertyTransition instead
     */
    mode?: bigint | number;
    /**
     * The #GObject to which the animation applies.
     * @since 1.0
     * @deprecated since 1.12: Use #ClutterPropertyTransition instead
     */
    object?: GObject.Object;
    /**
     * The #ClutterTimeline used by the animation.
     * @since 1.0
     * @deprecated since 1.12: Use #ClutterPropertyTransition instead
     */
    timeline?: Clutter.Timeline;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterAnimationConstructOnly = GObjectConstructOnly | ClutterScriptableConstructOnly;

/** The #ClutterBinLayout structure contains only private data and should be accessed using the provided API */
export interface ClutterBinLayoutProps extends ClutterLayoutManagerProps {
    /**
     * The default horizontal alignment policy for actors managed by the #ClutterBinLayout
     * @since 1.2
     * @deprecated since 1.12: Use the #ClutterActor:x-expand and the #ClutterActor:x-align properties on #ClutterActor instead.
     */
    'x-align'?: ClutterBinAlignmentNick | Clutter.BinAlignment;
    /**
     * The default vertical alignment policy for actors managed by the #ClutterBinLayout
     * @since 1.2
     * @deprecated since 1.12: Use the #ClutterActor:y-expand and the #ClutterActor:y-align properties on #ClutterActor instead.
     */
    'y-align'?: ClutterBinAlignmentNick | Clutter.BinAlignment;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterBinLayoutConstructOnly = ClutterLayoutManagerConstructOnly;

/** #ClutterBindConstraint is an opaque structure whose members cannot be directly accessed */
export interface ClutterBindConstraintProps extends ClutterConstraintProps {
    /**
     * The coordinate to be bound
     * @since 1.4
     */
    coordinate?: ClutterBindCoordinateNick | Clutter.BindCoordinate;
    /**
     * The offset, in pixels, to be applied to the binding
     * @since 1.4
     */
    offset?: number;
    /**
     * The #ClutterActor used as the source for the binding.
     * @since 1.4
     */
    source?: Clutter.Actor;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterBindConstraintConstructOnly = ClutterConstraintConstructOnly;

/** Container of key bindings. */
export interface ClutterBindingPoolProps extends GObjectProps {
    /**
     * The unique name of the #ClutterBindingPool.
     * @since 1.0
     */
    name?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterBindingPoolConstructOnly = GObjectConstructOnly | 'name';

/** #ClutterBlurEffect is an opaque structure whose members cannot be accessed directly */
export interface ClutterBlurEffectProps extends ClutterOffscreenEffectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterBlurEffectConstructOnly = ClutterOffscreenEffectConstructOnly;

/** The #ClutterBox structure contains only private data and should be accessed using the provided API */
export interface ClutterBoxProps extends ClutterActorProps, ClutterAnimatableProps, ClutterContainerProps, ClutterScriptableProps {
    /**
     * The color to be used to paint the background of the #ClutterBox.
     * @since 1.2
     * @deprecated since 1.10: Use the #ClutterActor:background-color property
     */
    color?: Clutter.Color;
    /**
     * Whether the #ClutterBox:color property has been set.
     * @since 1.2
     * @deprecated since 1.10: Use the #ClutterActor:background-color-set property
     */
    'color-set'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterBoxConstructOnly = ClutterActorConstructOnly | ClutterAnimatableConstructOnly | ClutterContainerConstructOnly | ClutterScriptableConstructOnly;

/** The #ClutterBoxLayout structure contains only private data and should be accessed using the provided API */
export interface ClutterBoxLayoutProps extends ClutterLayoutManagerProps {
    /**
     * The duration of the animations, in case #ClutterBoxLayout:use-animations is set to %TRUE.
     * @since 1.2
     * @deprecated since 1.12: The #ClutterBoxLayout will honour the easing state of the children when allocating them.
     */
    'easing-duration'?: number;
    /**
     * The easing mode for the animations, in case #ClutterBoxLayout:use-animations is set to %TRUE.
     * @since 1.2
     * @deprecated since 1.12: The #ClutterBoxLayout will honour the easing state of the children when allocating them.
     */
    'easing-mode'?: bigint | number;
    /**
     * Whether the #ClutterBoxLayout should arrange its children homogeneously, i.e.
     * @since 1.4
     */
    homogeneous?: boolean;
    /**
     * The orientation of the #ClutterBoxLayout, either horizontal or vertical
     * @since 1.12
     */
    orientation?: ClutterOrientationNick | Clutter.Orientation;
    /**
     * Whether the #ClutterBoxLayout should pack items at the start or append them at the end
     * @since 1.2
     */
    'pack-start'?: boolean;
    /**
     * The spacing between children of the #ClutterBoxLayout, in pixels
     * @since 1.2
     */
    spacing?: number;
    /**
     * Whether the #ClutterBoxLayout should animate changes in the layout, overriding the easing state of the children.
     * @since 1.2
     * @deprecated since 1.12: #ClutterBoxLayout will honour the easing state of the children when allocating them.
     */
    'use-animations'?: boolean;
    /**
     * Whether the #ClutterBoxLayout should arrange its children alongside the Y axis, instead of alongside the X axis
     * @since 1.2
     * @deprecated since 1.12: Use #ClutterBoxLayout:orientation instead.
     */
    vertical?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterBoxLayoutConstructOnly = ClutterLayoutManagerConstructOnly;

/** #ClutterBrightnessContrastEffect is an opaque structure whose members cannot be directly accessed */
export interface ClutterBrightnessContrastEffectProps extends ClutterOffscreenEffectProps {
    /**
     * The brightness change to apply to the effect.
     * @since 1.10
     */
    brightness?: Clutter.Color;
    /**
     * The contrast change to apply to the effect.
     * @since 1.10
     */
    contrast?: Clutter.Color;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterBrightnessContrastEffectConstructOnly = ClutterOffscreenEffectConstructOnly;

/** The #ClutterCanvas structure contains private data and should only be accessed using the provided API. */
export interface ClutterCanvasProps extends GObjectProps, ClutterContentProps {
    /**
     * The height of the canvas.
     * @since 1.10
     */
    height?: number;
    /** The height of the canvas. */
    'scale-factor'?: number;
    /**
     * The width of the canvas.
     * @since 1.10
     */
    width?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterCanvasConstructOnly = GObjectConstructOnly | ClutterContentConstructOnly;

/** The #ClutterClickAction structure contains only private data and should be accessed using the provided API */
export interface ClutterClickActionProps extends ClutterActionProps {
    /**
     * The minimum duration of a press for it to be recognized as a long press gesture, in milliseconds.
     * @since 1.8
     */
    'long-press-duration'?: number;
    /**
     * The maximum allowed distance that can be covered (on both axes) before a long press gesture is cancelled, in pixels.
     * @since 1.8
     */
    'long-press-threshold'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterClickActionConstructOnly = ClutterActionConstructOnly;

/** The #ClutterTextNode structure is an opaque type whose members cannot be directly accessed. */
export interface ClutterClipNodeProps extends ClutterPaintNodeProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterClipNodeConstructOnly = ClutterPaintNodeConstructOnly;

/** The #ClutterClone structure contains only private data and should be accessed using the provided API */
export interface ClutterCloneProps extends ClutterActorProps, ClutterAnimatableProps, ClutterContainerProps, ClutterScriptableProps {
    /**
     * This property specifies the source actor being cloned.
     * @since 1.0
     */
    source?: Clutter.Actor;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterCloneConstructOnly = ClutterActorConstructOnly | ClutterAnimatableConstructOnly | ClutterContainerConstructOnly | ClutterScriptableConstructOnly;

/** The #ClutterTextNode structure is an opaque type whose members cannot be directly accessed. */
export interface ClutterColorNodeProps extends ClutterPipelineNodeProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterColorNodeConstructOnly = ClutterPipelineNodeConstructOnly;

/** #ClutterColorizeEffect is an opaque structure whose members cannot be directly accessed */
export interface ClutterColorizeEffectProps extends ClutterOffscreenEffectProps {
    /**
     * The tint to apply to the actor
     * @since 1.4
     */
    tint?: Clutter.Color;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterColorizeEffectConstructOnly = ClutterOffscreenEffectConstructOnly;

/** The #ClutterConstraint structure contains only private data and should be accessed using the provided API */
export interface ClutterConstraintProps extends ClutterActorMetaProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterConstraintConstructOnly = ClutterActorMetaConstructOnly;

/** #ClutterContainer is an opaque structure whose members cannot be directly accessed */
export interface ClutterContainerProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterContainerConstructOnly = GObjectConstructOnly;

export interface ClutterContentProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterContentConstructOnly = GObjectConstructOnly;

/** The #ClutterDeformEffect structure contains only private data and should be accessed using the provided API */
export interface ClutterDeformEffectProps extends ClutterOffscreenEffectProps {
    /**
     * The number of horizontal tiles.
     * @since 1.4
     */
    'x-tiles'?: number;
    /**
     * The number of vertical tiles.
     * @since 1.4
     */
    'y-tiles'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterDeformEffectConstructOnly = ClutterOffscreenEffectConstructOnly;

/** #ClutterDesaturateEffect is an opaque structure whose members cannot be directly accessed */
export interface ClutterDesaturateEffectProps extends ClutterOffscreenEffectProps {
    /**
     * The desaturation factor, between 0.0 (no desaturation) and 1.0 (full desaturation).
     * @since 1.4
     */
    factor?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterDesaturateEffectConstructOnly = ClutterOffscreenEffectConstructOnly;

/** The #ClutterDragAction structure contains only private data and should be accessed using the provided API */
export interface ClutterDragActionProps extends ClutterActionProps {
    /**
     * Constains the dragging action (or in particular, the resulting actor position) to the specified #ClutterRect, in parent's coordinates.
     * @since 1.12
     */
    'drag-area'?: Graphene.Rect;
    /**
     * Constraints the dragging action to the specified axis
     * @since 1.4
     */
    'drag-axis'?: ClutterDragAxisNick | Clutter.DragAxis;
    /**
     * The #ClutterActor that is effectively being dragged A #ClutterDragAction will, be default, use the #ClutterActor that has been attached to the action; it is possible to create a separate #ClutterActo…
     * @since 1.4
     */
    'drag-handle'?: Clutter.Actor;
    /**
     * The horizontal threshold, in pixels, that the cursor must travel in order to begin a drag action.
     * @since 1.4
     */
    'x-drag-threshold'?: number;
    /**
     * The vertical threshold, in pixels, that the cursor must travel in order to begin a drag action.
     * @since 1.4
     */
    'y-drag-threshold'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterDragActionConstructOnly = ClutterActionConstructOnly;

/** The #ClutterDropAction structure contains only private data and should be accessed using the provided API. */
export interface ClutterDropActionProps extends ClutterActionProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterDropActionConstructOnly = ClutterActionConstructOnly;

/** The #ClutterEffect structure contains only private data and should be accessed using the provided API */
export interface ClutterEffectProps extends ClutterActorMetaProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterEffectConstructOnly = ClutterActorMetaConstructOnly;

/** The #ClutterFixedLayout structure contains only private data and it should be accessed using the provided API */
export interface ClutterFixedLayoutProps extends ClutterLayoutManagerProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterFixedLayoutConstructOnly = ClutterLayoutManagerConstructOnly;

/** The #ClutterFlowLayout structure contains only private data and should be accessed using the provided API */
export interface ClutterFlowLayoutProps extends ClutterLayoutManagerProps {
    /**
     * The spacing between columns, in pixels; the value of this property is honoured by horizontal non-overflowing layouts and by vertical overflowing layouts
     * @since 1.2
     */
    'column-spacing'?: number;
    /**
     * Whether each child inside the #ClutterFlowLayout should receive the same allocation
     * @since 1.2
     */
    homogeneous?: boolean;
    /**
     * Maximum width for each column in the layout, in pixels.
     * @since 1.2
     */
    'max-column-width'?: number;
    /**
     * Maximum height for each row in the layout, in pixels.
     * @since 1.2
     */
    'max-row-height'?: number;
    /**
     * Minimum width for each column in the layout, in pixels
     * @since 1.2
     */
    'min-column-width'?: number;
    /**
     * Minimum height for each row in the layout, in pixels
     * @since 1.2
     */
    'min-row-height'?: number;
    /**
     * The orientation of the #ClutterFlowLayout.
     * @since 1.2
     */
    orientation?: ClutterFlowOrientationNick | Clutter.FlowOrientation;
    /**
     * The spacing between rows, in pixels; the value of this property is honoured by vertical non-overflowing layouts and by horizontal overflowing layouts
     * @since 1.2
     */
    'row-spacing'?: number;
    /**
     * Whether the #ClutterFlowLayout should arrange its children on a grid
     * @since 1.16
     */
    'snap-to-grid'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterFlowLayoutConstructOnly = ClutterLayoutManagerConstructOnly;

/** The #ClutterGestureAction structure contains only private data and should be accessed using the provided API */
export interface ClutterGestureActionProps extends ClutterActionProps {
    /**
     * Number of touch points to trigger a gesture action.
     * @since 1.16
     */
    'n-touch-points'?: number;
    /**
     * The horizontal trigger distance to be used by the action to either emit the #ClutterGestureAction::gesture-begin signal or to emit the #ClutterGestureAction::gesture-cancel signal.
     * @since 1.18
     */
    'threshold-trigger-distance-x'?: number;
    /**
     * The vertical trigger distance to be used by the action to either emit the #ClutterGestureAction::gesture-begin signal or to emit the #ClutterGestureAction::gesture-cancel signal.
     * @since 1.18
     */
    'threshold-trigger-distance-y'?: number;
    /**
     * The trigger edge to be used by the action to either emit the #ClutterGestureAction::gesture-begin signal or to emit the #ClutterGestureAction::gesture-cancel signal.
     * @since 1.18
     */
    'threshold-trigger-edge'?: ClutterGestureTriggerEdgeNick | Clutter.GestureTriggerEdge;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterGestureActionConstructOnly = ClutterActionConstructOnly | 'threshold-trigger-distance-x' | 'threshold-trigger-distance-y' | 'threshold-trigger-edge';

/** The #ClutterGridLayout structure contains only private data and should be accessed using the provided API */
export interface ClutterGridLayoutProps extends ClutterLayoutManagerProps {
    /**
     * Whether all columns of the layout should have the same width
     * @since 1.12
     */
    'column-homogeneous'?: boolean;
    /**
     * The amount of space in pixels between two consecutive columns
     * @since 1.12
     */
    'column-spacing'?: number;
    /**
     * The orientation of the layout, either horizontal or vertical
     * @since 1.12
     */
    orientation?: ClutterOrientationNick | Clutter.Orientation;
    /**
     * Whether all rows of the layout should have the same height
     * @since 1.12
     */
    'row-homogeneous'?: boolean;
    /**
     * The amount of space in pixels between two consecutive rows
     * @since 1.12
     */
    'row-spacing'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterGridLayoutConstructOnly = ClutterLayoutManagerConstructOnly;

/** The #ClutterGroup structure contains only private data and should be accessed using the provided API */
export interface ClutterGroupProps extends ClutterActorProps, ClutterAnimatableProps, ClutterContainerProps, ClutterScriptableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterGroupConstructOnly = ClutterActorConstructOnly | ClutterAnimatableConstructOnly | ClutterContainerConstructOnly | ClutterScriptableConstructOnly;

/** The #ClutterImage structure contains private data and should only be accessed using the provided API. */
export interface ClutterImageProps extends GObjectProps, ClutterContentProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterImageConstructOnly = GObjectConstructOnly | ClutterContentConstructOnly;

/** Generic representation of an input device. */
export interface ClutterInputDeviceProps extends GObjectProps {
    /**
     * The #ClutterBackend that created the device.
     * @since 1.6
     */
    backend?: Clutter.Backend;
    'device-mode'?: ClutterInputModeNick | Clutter.InputMode;
    'device-node'?: string;
    /**
     * The type of the device
     * @since 1.2
     */
    'device-type'?: ClutterInputDeviceTypeNick | Clutter.InputDeviceType;
    /**
     * Whether the device is enabled.
     * @since 1.6
     */
    enabled?: boolean;
    /**
     * Whether the device has an on screen cursor following its movement.
     * @since 1.6
     */
    'has-cursor'?: boolean;
    /**
     * The unique identifier of the device
     * @since 1.2
     */
    id?: number;
    'mapping-mode'?: ClutterInputDeviceMappingNick | Clutter.InputDeviceMapping;
    'n-mode-groups'?: number;
    'n-rings'?: number;
    'n-strips'?: number;
    /**
     * The name of the device
     * @since 1.2
     */
    name?: string;
    /**
     * Product ID of this device.
     * @since 1.22
     */
    'product-id'?: string;
    /** The #ClutterSeat instance which owns the device */
    seat?: Clutter.Seat;
    /**
     * Vendor ID of this device.
     * @since 1.22
     */
    'vendor-id'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterInputDeviceConstructOnly = GObjectConstructOnly | 'backend' | 'device-mode' | 'device-node' | 'device-type' | 'has-cursor' | 'id' | 'n-mode-groups' | 'n-rings' | 'n-strips' | 'name' | 'product-id' | 'seat' | 'vendor-id';

/** The #ClutterInterval structure contains only private data and should be accessed using the provided functions. */
export interface ClutterIntervalProps extends GInitiallyUnownedProps, ClutterScriptableProps {
    /**
     * The final value of the interval.
     * @since 1.12
     */
    final?: GObject.Value;
    /**
     * The initial value of the interval.
     * @since 1.12
     */
    initial?: GObject.Value;
    /**
     * The type of the values in the interval.
     * @since 1.0
     */
    'value-type'?: GObject.GType;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterIntervalConstructOnly = GInitiallyUnownedConstructOnly | ClutterScriptableConstructOnly | 'value-type';

/** The `ClutterKeyframeTransition` structure contains only private data and should be accessed using the provided API. */
export interface ClutterKeyframeTransitionProps extends ClutterPropertyTransitionProps, ClutterScriptableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterKeyframeTransitionConstructOnly = ClutterPropertyTransitionConstructOnly | ClutterScriptableConstructOnly;

export interface ClutterLayerNodeProps extends ClutterPaintNodeProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterLayerNodeConstructOnly = ClutterPaintNodeConstructOnly;

/** The #ClutterLayoutManager structure contains only private data and should be accessed using the provided API */
export interface ClutterLayoutManagerProps extends GInitiallyUnownedProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterLayoutManagerConstructOnly = GInitiallyUnownedConstructOnly;

/** The #ClutterOffscreenEffect structure contains only private data and should be accessed using the provided API */
export interface ClutterOffscreenEffectProps extends ClutterEffectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterOffscreenEffectConstructOnly = ClutterEffectConstructOnly;

/** #ClutterPageTurnEffect is an opaque structure whose members can only be accessed using the provided API */
export interface ClutterPageTurnEffectProps extends ClutterDeformEffectProps {
    /**
     * The angle of the page rotation, in degrees, between 0.0 and 360.0
     * @since 1.4
     */
    angle?: number;
    /**
     * The period of the page turn, between 0.0 (no curling) and 1.0 (fully curled)
     * @since 1.4
     */
    period?: number;
    /**
     * The radius of the page curl, in pixels
     * @since 1.4
     */
    radius?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterPageTurnEffectConstructOnly = ClutterDeformEffectConstructOnly;

/** The `ClutterPaintNode` structure contains only private data and it should be accessed using the provided API. */
export interface ClutterPaintNodeProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterPaintNodeConstructOnly = never;

/** The #ClutterPanAction structure contains only private data and should be accessed using the provided API */
export interface ClutterPanActionProps extends ClutterGestureActionProps {
    /**
     * The initial acceleration factor The kinetic momentum measured at the time of releasing the pointer will be multiplied by the factor specified by this property before being used to generate interpolat…
     * @since 1.12
     */
    'acceleration-factor'?: number;
    /**
     * The rate at which the interpolated panning will decelerate in #ClutterPanAction will emit interpolated ::pan events with decreasing scroll deltas, using the rate specified by this property.
     * @since 1.12
     */
    deceleration?: number;
    /**
     * Whether interpolated events emission is enabled.
     * @since 1.12
     */
    interpolate?: boolean;
    /**
     * Constraints the panning action to the specified axis
     * @since 1.12
     */
    'pan-axis'?: ClutterPanAxisNick | Clutter.PanAxis;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterPanActionConstructOnly = ClutterGestureActionConstructOnly;

export interface ClutterParamSpecUnitProps extends GParamProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterParamSpecUnitConstructOnly = GParamConstructOnly;

/** The #ClutterPath struct contains only private data and should be accessed with the functions below. */
export interface ClutterPathProps extends GInitiallyUnownedProps {
    description?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterPathConstructOnly = GInitiallyUnownedConstructOnly;

/** #ClutterPathConstraint is an opaque structure whose members cannot be directly accessed */
export interface ClutterPathConstraintProps extends ClutterConstraintProps {
    /**
     * The offset along the #ClutterPathConstraint:path, between -1.0 and 2.0.
     * @since 1.6
     */
    offset?: number;
    /**
     * The #ClutterPath used to constrain the position of an actor.
     * @since 1.6
     */
    path?: Clutter.Path;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterPathConstraintConstructOnly = ClutterConstraintConstructOnly;

/** The #ClutterTextNode structure is an opaque type whose members cannot be directly accessed. */
export interface ClutterPipelineNodeProps extends ClutterPaintNodeProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterPipelineNodeConstructOnly = ClutterPaintNodeConstructOnly;

/** The #ClutterPropertyTransition structure contains private data and should only be accessed using the provided API. */
export interface ClutterPropertyTransitionProps extends ClutterTransitionProps, ClutterScriptableProps {
    /**
     * The name of the property of a #ClutterAnimatable to animate.
     * @since 1.10
     */
    'property-name'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterPropertyTransitionConstructOnly = ClutterTransitionConstructOnly | ClutterScriptableConstructOnly;

/** The #ClutterRectangle structure contains only private data and should be accessed using the provided API */
export interface ClutterRectangleProps extends ClutterActorProps, ClutterAnimatableProps, ClutterContainerProps, ClutterScriptableProps {
    /**
     * The color of the border of the rectangle.
     * @since 0.2
     */
    'border-color'?: Clutter.Color;
    /**
     * The width of the border of the rectangle, in pixels.
     * @since 0.2
     */
    'border-width'?: number;
    /** The color of the rectangle. */
    color?: Clutter.Color;
    /**
     * Whether the #ClutterRectangle should be displayed with a border.
     * @since 0.2
     */
    'has-border'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterRectangleConstructOnly = ClutterActorConstructOnly | ClutterAnimatableConstructOnly | ClutterContainerConstructOnly | ClutterScriptableConstructOnly;

/** The #ClutterRootNode structure is an opaque type whose members cannot be directly accessed. */
export interface ClutterRootNodeProps extends ClutterPaintNodeProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterRootNodeConstructOnly = ClutterPaintNodeConstructOnly;

/** The #ClutterRotateAction structure contains only private data and should be accessed using the provided API */
export interface ClutterRotateActionProps extends ClutterGestureActionProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterRotateActionConstructOnly = ClutterGestureActionConstructOnly;

/** The #ClutterScript structure contains only private data and should be accessed using the provided API */
export interface ClutterScriptProps extends GObjectProps {
    /**
     * The translation domain, used to localize strings marked as translatable inside a UI definition.
     * @since 1.10
     */
    'translation-domain'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterScriptConstructOnly = GObjectConstructOnly;

/** #ClutterScriptable is an opaque structure whose members cannot be directly accessed */
export interface ClutterScriptableProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterScriptableConstructOnly = GObjectConstructOnly;

/** The #ClutterScrollActor structure contains only private data, and should be accessed using the provided API. */
export interface ClutterScrollActorProps extends ClutterActorProps, ClutterAnimatableProps, ClutterContainerProps, ClutterScriptableProps {
    /**
     * The scrollin direction.
     * @since 1.12
     */
    'scroll-mode'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterScrollActorConstructOnly = ClutterActorConstructOnly | ClutterAnimatableConstructOnly | ClutterContainerConstructOnly | ClutterScriptableConstructOnly;

/** `ClutterSettings` is an opaque structure whose members cannot be directly accessed. */
export interface ClutterSettingsProps extends GObjectProps {
    /**
     * A back pointer to the #ClutterBackend
     * @since 1.4
     * @deprecated since 1.10
     */
    backend?: Clutter.Backend;
    /**
     * The default distance that the cursor of a pointer device should travel before a drag operation should start.
     * @since 1.8
     */
    'dnd-drag-threshold'?: number;
    /**
     * The maximum distance, in pixels, between button-press events that determines whether or not to increase the click count by 1.
     * @since 1.4
     */
    'double-click-distance'?: number;
    /**
     * The time, in milliseconds, that should elapse between button-press events in order to increase the click count by 1.
     * @since 1.4
     */
    'double-click-time'?: number;
    /**
     * Whether or not to use antialiasing when rendering text; a value of 1 enables it unconditionally; a value of 0 disables it unconditionally; and -1 will use the system's default.
     * @since 1.4
     */
    'font-antialias'?: number;
    /**
     * The DPI used when rendering text, as a value of 1024 * dots/inch.
     * @since 1.4
     */
    'font-dpi'?: number;
    /**
     * The style of the hinting used when rendering text.
     * @since 1.4
     */
    'font-hint-style'?: string;
    /**
     * Whether or not to use hinting when rendering text; a value of 1 unconditionally enables it; a value of 0 unconditionally disables it; and a value of -1 will use the system's default.
     * @since 1.4
     */
    'font-hinting'?: number;
    /**
     * The default font name that should be used by text actors, as a string that can be passed to pango_font_description_from_string().
     * @since 1.4
     */
    'font-name'?: string;
    /**
     * The type of sub-pixel antialiasing used when rendering text.
     * @since 1.4
     */
    'font-subpixel-order'?: string;
    'fontconfig-timestamp'?: number;
    /**
     * Sets the minimum duration for a press to be recognized as a long press gesture.
     * @since 1.8
     */
    'long-press-duration'?: number;
    'password-hint-time'?: number;
    'unscaled-font-dpi'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterSettingsConstructOnly = GObjectConstructOnly | 'backend';

/** The #ClutterShaderEffect structure contains only private data and should be accessed using the provided API */
export interface ClutterShaderEffectProps extends ClutterOffscreenEffectProps {
    /**
     * The type of shader that is used by the effect.
     * @since 1.4
     */
    'shader-type'?: ClutterShaderTypeNick | Clutter.ShaderType;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterShaderEffectConstructOnly = ClutterOffscreenEffectConstructOnly | 'shader-type';

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

/** #ClutterSnapConstraint is an opaque structure whose members cannot be directly accesses */
export interface ClutterSnapConstraintProps extends ClutterConstraintProps {
    /**
     * The edge of the #ClutterActor that should be snapped
     * @since 1.6
     */
    'from-edge'?: ClutterSnapEdgeNick | Clutter.SnapEdge;
    /**
     * The offset, in pixels, between #ClutterSnapConstraint:from-edge and #ClutterSnapConstraint:to-edge
     * @since 1.6
     */
    offset?: number;
    /**
     * The #ClutterActor used as the source for the constraint
     * @since 1.6
     */
    source?: Clutter.Actor;
    /**
     * The edge of the #ClutterSnapConstraint:source that should be snapped
     * @since 1.6
     */
    'to-edge'?: ClutterSnapEdgeNick | Clutter.SnapEdge;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterSnapConstraintConstructOnly = ClutterConstraintConstructOnly;

/** The #ClutterStage structure contains only private data and should be accessed using the provided API */
export interface ClutterStageProps extends ClutterGroupProps, ClutterAnimatableProps, ClutterContainerProps, ClutterScriptableProps {
    /**
     * Whether the #ClutterStage should accept key focus when shown.
     * @since 1.6
     */
    'accept-focus'?: boolean;
    /**
     * The background color of the main stage.
     * @deprecated since 1.10: Use the #ClutterActor:background-color property of #ClutterActor instead.
     */
    color?: Clutter.Color;
    /** Whether the mouse pointer should be visible */
    'cursor-visible'?: boolean;
    /**
     * The #ClutterActor that will receive key events from the underlying windowing system.
     * @since 1.2
     */
    'key-focus'?: Clutter.Actor;
    /**
     * The parameters used for the perspective projection from 3D coordinates to 2D
     * @since 0.8
     */
    perspective?: Clutter.Perspective;
    /**
     * The stage's title - usually displayed in stage windows title decorations.
     * @since 0.4
     */
    title?: string;
    /**
     * Whether the #ClutterStage should honour the alpha component of the #ClutterStage:color property when painting.
     * @since 1.2
     */
    'use-alpha'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterStageConstructOnly = ClutterGroupConstructOnly | ClutterAnimatableConstructOnly | ClutterContainerConstructOnly | ClutterScriptableConstructOnly;

/** The #ClutterStageManager structure is private. */
export interface ClutterStageManagerProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterStageManagerConstructOnly = GObjectConstructOnly;

export interface ClutterStageViewProps extends GObjectProps {
    layout?: cairo.RectangleInt;
    scale?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterStageViewConstructOnly = GObjectConstructOnly;

/** The #ClutterState structure contains only private data and should be accessed using the provided API */
export interface ClutterStateProps extends GObjectProps, ClutterScriptableProps {
    /**
     * Default duration used if an duration has not been specified for a specific source/target state pair.
     * @since 1.4
     * @deprecated since 1.12: Use #ClutterKeyframeTransition and #ClutterTransitionGroup instead
     */
    duration?: number;
    /**
     * The currently set target state, setting it causes the state machine to transition to the new state, use clutter_state_warp_to_state() to change state without a transition.
     * @since 1.4
     * @deprecated since 1.12: Use #ClutterKeyframeTransition and #ClutterTransitionGroup instead
     */
    state?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterStateConstructOnly = GObjectConstructOnly | ClutterScriptableConstructOnly;

/** The #ClutterSwipeAction structure contains only private data and should be accessed using the provided API */
export interface ClutterSwipeActionProps extends ClutterGestureActionProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterSwipeActionConstructOnly = ClutterGestureActionConstructOnly;

/** The #ClutterTapAction structure contains only private data and should be accessed using the provided API */
export interface ClutterTapActionProps extends ClutterGestureActionProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterTapActionConstructOnly = ClutterGestureActionConstructOnly;

/** The #ClutterText struct contains only private data. */
export interface ClutterTextProps extends Omit<ClutterActorProps, 'position'>, ClutterAnimatableProps, ClutterContainerProps, ClutterScriptableProps {
    /**
     * Toggles whether return invokes the activate signal or not.
     * @since 1.0
     */
    activatable?: boolean;
    /**
     * A list of #PangoStyleAttribute<!-- -->s to be applied to the contents of the #ClutterText actor.
     * @since 1.0
     */
    attributes?: Pango.AttrList;
    /**
     * The buffer which stores the text for this #ClutterText.
     * @since 1.8
     */
    buffer?: Clutter.TextBuffer;
    /**
     * The color used to render the text.
     * @since 1.0
     */
    color?: Clutter.Color;
    /**
     * The color of the cursor.
     * @since 1.0
     */
    'cursor-color'?: Clutter.Color;
    /**
     * The current input cursor position.
     * @since 1.12
     */
    'cursor-position'?: number;
    /**
     * The size of the cursor, in pixels.
     * @since 1.0
     */
    'cursor-size'?: number;
    /**
     * Whether the input cursor is visible or not.
     * @since 1.0
     */
    'cursor-visible'?: boolean;
    /**
     * Whether key events delivered to the actor causes editing.
     * @since 1.0
     */
    editable?: boolean;
    /**
     * The preferred place to ellipsize the contents of the #ClutterText actor
     * @since 1.0
     */
    ellipsize?: PangoEllipsizeModeNick | Pango.EllipsizeMode;
    /**
     * The #PangoFontDescription that should be used by the #ClutterText If you have a string describing the font then you should look at #ClutterText:font-name instead
     * @since 1.2
     */
    'font-description'?: Pango.FontDescription;
    /**
     * The font to be used by the #ClutterText, as a string that can be parsed by pango_font_description_from_string().
     * @since 1.0
     */
    'font-name'?: string;
    'input-hints'?: number;
    'input-purpose'?: ClutterInputContentPurposeNick | Clutter.InputContentPurpose;
    /**
     * Whether the contents of the #ClutterText should be justified on both margins.
     * @since 1.0
     */
    justify?: boolean;
    /**
     * The preferred alignment for the text.
     * @since 1.0
     */
    'line-alignment'?: PangoAlignmentNick | Pango.Alignment;
    /**
     * Whether to wrap the lines of #ClutterText:text if the contents exceed the available allocation.
     * @since 1.0
     */
    'line-wrap'?: boolean;
    /**
     * If #ClutterText:line-wrap is set to %TRUE, this property will control how the text is wrapped.
     * @since 1.0
     */
    'line-wrap-mode'?: PangoWrapModeNick | Pango.WrapMode;
    /**
     * The maximum length of the contents of the #ClutterText actor.
     * @since 1.0
     */
    'max-length'?: number;
    /**
     * If non-zero, the character that should be used in place of the actual text in a password text actor.
     * @since 1.0
     */
    'password-char'?: number;
    /**
     * The current input cursor position.
     * @since 1.0
     * @deprecated since 1.12: Use ClutterText:cursor-position instead.
     */
    position?: number;
    /**
     * Whether it is possible to select text, either using the pointer or the keyboard.
     * @since 1.0
     */
    selectable?: boolean;
    /**
     * The color of selected text.
     * @since 1.8
     */
    'selected-text-color'?: Clutter.Color;
    /**
     * The current input cursor position.
     * @since 1.0
     */
    'selection-bound'?: number;
    /**
     * The color of the selection.
     * @since 1.0
     */
    'selection-color'?: Clutter.Color;
    /**
     * Whether the #ClutterText actor should be in single line mode or not.
     * @since 1.0
     */
    'single-line-mode'?: boolean;
    /**
     * The text to render inside the actor.
     * @since 1.0
     */
    text?: string;
    /**
     * Whether the text includes Pango markup.
     * @since 1.0
     */
    'use-markup'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterTextConstructOnly = ClutterActorConstructOnly | ClutterAnimatableConstructOnly | ClutterContainerConstructOnly | ClutterScriptableConstructOnly;

/** The #ClutterTextBuffer structure contains private data and it should only be accessed using the provided API. */
export interface ClutterTextBufferProps extends GObjectProps {
    /**
     * The maximum length (in characters) of the text in the buffer.
     * @since 1.10
     */
    'max-length'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterTextBufferConstructOnly = GObjectConstructOnly;

/** The #ClutterTextNode structure is an opaque type whose members cannot be directly accessed. */
export interface ClutterTextNodeProps extends ClutterPaintNodeProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterTextNodeConstructOnly = ClutterPaintNodeConstructOnly;

/** The #ClutterTextNode structure is an opaque type whose members cannot be directly accessed. */
export interface ClutterTextureNodeProps extends ClutterPipelineNodeProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterTextureNodeConstructOnly = ClutterPipelineNodeConstructOnly;

/** The #ClutterTimeline structure contains only private data and should be accessed using the provided API */
export interface ClutterTimelineProps extends GObjectProps, ClutterScriptableProps {
    /**
     * If the direction of the timeline should be automatically reversed when reaching the end.
     * @since 1.6
     */
    'auto-reverse'?: boolean;
    /**
     * A delay, in milliseconds, that should be observed by the timeline before actually starting.
     * @since 0.4
     */
    delay?: number;
    /**
     * The direction of the timeline, either %CLUTTER_TIMELINE_FORWARD or %CLUTTER_TIMELINE_BACKWARD.
     * @since 0.6
     */
    direction?: ClutterTimelineDirectionNick | Clutter.TimelineDirection;
    /**
     * Duration of the timeline in milliseconds, depending on the ClutterTimeline:fps value.
     * @since 0.6
     */
    duration?: number;
    /**
     * Whether the timeline should automatically rewind and restart.
     * @deprecated since 1.10: Use the #ClutterTimeline:repeat-count property instead.
     */
    loop?: boolean;
    /**
     * Controls the way a #ClutterTimeline computes the normalized progress.
     * @since 1.10
     */
    'progress-mode'?: ClutterAnimationModeNick | Clutter.AnimationMode;
    /**
     * Defines how many times the timeline should repeat.
     * @since 1.10
     */
    'repeat-count'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterTimelineConstructOnly = GObjectConstructOnly | ClutterScriptableConstructOnly;

export interface ClutterTransformNodeProps extends ClutterPaintNodeProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterTransformNodeConstructOnly = ClutterPaintNodeConstructOnly;

/** The #ClutterTransition structure contains private data and should only be accessed using the provided API. */
export interface ClutterTransitionProps extends ClutterTimelineProps, ClutterScriptableProps {
    /**
     * The #ClutterAnimatable instance currently being animated.
     * @since 1.10
     */
    animatable?: Clutter.Animatable;
    /**
     * The #ClutterInterval used to describe the initial and final states of the transition.
     * @since 1.10
     */
    interval?: Clutter.Interval;
    /**
     * Whether the #ClutterTransition should be automatically detached from the #ClutterTransition:animatable instance whenever the #ClutterTimeline::stopped signal is emitted.
     * @since 1.10
     */
    'remove-on-complete'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterTransitionConstructOnly = ClutterTimelineConstructOnly | ClutterScriptableConstructOnly;

/** The #ClutterTransitionGroup structure contains private data and should only be accessed using the provided API. */
export interface ClutterTransitionGroupProps extends ClutterTransitionProps, ClutterScriptableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterTransitionGroupConstructOnly = ClutterTransitionConstructOnly | ClutterScriptableConstructOnly;

export interface ClutterVirtualInputDeviceProps extends GObjectProps {
    'device-type'?: ClutterInputDeviceTypeNick | Clutter.InputDeviceType;
    seat?: Clutter.Seat;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterVirtualInputDeviceConstructOnly = GObjectConstructOnly | 'device-type' | 'seat';

/** The #ClutterZoomAction structure contains only private data and should be accessed using the provided API */
export interface ClutterZoomActionProps extends ClutterGestureActionProps {
    /**
     * Constraints the zooming action to the specified axis
     * @since 1.12
     */
    'zoom-axis'?: ClutterZoomAxisNick | Clutter.ZoomAxis;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterZoomActionConstructOnly = ClutterGestureActionConstructOnly;

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
