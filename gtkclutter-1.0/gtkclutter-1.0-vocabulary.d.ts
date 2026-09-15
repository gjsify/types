/**
 * The GIR-derived widget VOCABULARY for GtkClutter-1.0.
 *
 * GENERATED — do not edit. Provenance: GtkClutter-1.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface Clutter.Animatable Clutter.Container Clutter.Scriptable — inlined base(s) their owner's vocabulary does not emit: Clutter.Actor Clutter.Texture
 *
 * 4 instantiable GTypes (of which 2 concrete widgets), 6 declarations (2 inlined from a namespace whose vocabulary does not emit them), 7 enum nick unions, 0 slot candidates.
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

import type Clutter from '@girs/clutter-1.0';
import type Gtk from '@girs/gtk-3.0';
import type GtkClutter from './gtkclutter-1.0.js';
import type { GtkBinConstructOnly, GtkBinProps, GtkBuildableConstructOnly, GtkBuildableProps, GtkContainerConstructOnly, GtkContainerProps, GtkWidgetConstructOnly, GtkWidgetProps, GtkWindowConstructOnly, GtkWindowProps } from '@girs/gtk-3.0/vocabulary';

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
export type ClutterContentGravityNick = 'top-left' | 'top' | 'top-right' | 'left' | 'center' | 'right' | 'bottom-left' | 'bottom' | 'bottom-right' | 'resize-fill' | 'resize-aspect';
export type ClutterGravityNick = 'none' | 'north' | 'north-east' | 'east' | 'south-east' | 'south' | 'south-west' | 'west' | 'north-west' | 'center';
export type ClutterRequestModeNick = 'height-for-width' | 'width-for-height' | 'content-size';
export type ClutterScalingFilterNick = 'linear' | 'nearest' | 'trilinear';
export type ClutterTextDirectionNick = 'default' | 'ltr' | 'rtl';
export type ClutterTextureQualityNick = 'low' | 'medium' | 'high';

// ---------------------------------------------------------------------------
// Property surfaces — one interface per GIR DECLARATION, mirroring GIR's own
// inheritance rather than flattening per widget.
//
// The interfaces are load-bearing, not tidiness: `GtkBox` declares four properties
// of its own and `orientation` is not among them — it lives on `Gtk.Orientable`,
// because GObject installs interface properties on the implementor at runtime while
// GIR keeps them once, on the interface.
// ---------------------------------------------------------------------------

/** Base class for actors. */
export interface ClutterActorProps {
    /**
     * Adds a #ClutterAction to the actor
     * @since 1.4
     */
    actions?: Clutter.Action;
    /**
     * The anchor point expressed as a #ClutterGravity It is highly recommended not to use #ClutterActor:anchor-x, #ClutterActor:anchor-y, and #ClutterActor:anchor-gravity in newly written code; the anchor …
     * @since 1.0
     * @default CLUTTER_GRAVITY_NONE
     * @deprecated since 1.12: Use #ClutterActor:pivot-point instead
     */
    'anchor-gravity'?: ClutterGravityNick | Clutter.Gravity;
    /**
     * The X coordinate of an actor's anchor point, relative to the actor coordinate space, in pixels.
     * @since 0.8
     * @default 0.000000
     * @deprecated since 1.12: Use #ClutterActor:pivot-point instead
     */
    'anchor-x'?: number;
    /**
     * The Y coordinate of an actor's anchor point, relative to the actor coordinate space, in pixels It is highly recommended not to use #ClutterActor:anchor-x, #ClutterActor:anchor-y, and #ClutterActor:an…
     * @since 0.8
     * @default 0.000000
     * @deprecated since 1.12: Use #ClutterActor:pivot-point instead
     */
    'anchor-y'?: number;
    /**
     * Paints a solid fill of the actor's allocation using the specified color.
     * @since 1.10
     * @default #00000000
     */
    'background-color'?: Clutter.Color;
    /**
     * Applies a transformation matrix on each child of an actor.
     * @since 1.12
     */
    'child-transform'?: Clutter.Matrix;
    /**
     * The visible region of the actor, in actor-relative coordinates
     * @deprecated since 1.12: Use #ClutterActor:clip-rect instead.
     */
    clip?: Clutter.Geometry;
    /**
     * The visible region of the actor, in actor-relative coordinates, expressed as a #ClutterRect.
     * @since 1.12
     */
    'clip-rect'?: Clutter.Rect;
    /**
     * Whether the clip region should track the allocated area of the actor.
     * @since 1.0
     * @default FALSE
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
     * @default CLUTTER_CONTENT_GRAVITY_RESIZE_FILL
     */
    'content-gravity'?: ClutterContentGravityNick | Clutter.ContentGravity;
    /**
     * The repeat policy for the actor's #ClutterActor:content.
     * @since 1.12
     * @default CLUTTER_REPEAT_NONE
     */
    'content-repeat'?: number;
    /**
     * The position of the actor on the Z axis.
     * @since 0.6
     * @default 0.000000
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
     * @default FALSE
     */
    'fixed-position-set'?: boolean;
    /**
     * The fixed X position of the actor in pixels.
     * @since 0.8
     * @default 0.000000
     */
    'fixed-x'?: number;
    /**
     * The fixed Y position of the actor in pixels.
     * @since 0.8
     * @default 0.000000
     */
    'fixed-y'?: number;
    /**
     * Height of the actor (in pixels).
     * @default 0.000000
     */
    height?: number;
    /**
     * A delegate object for controlling the layout of the children of an actor.
     * @since 1.10
     */
    'layout-manager'?: Clutter.LayoutManager;
    /** @default CLUTTER_SCALING_FILTER_LINEAR */
    'magnification-filter'?: ClutterScalingFilterNick | Clutter.ScalingFilter;
    /**
     * The margin (in pixels) from the bottom of the actor.
     * @since 1.10
     * @default 0.000000
     */
    'margin-bottom'?: number;
    /**
     * The margin (in pixels) from the left of the actor.
     * @since 1.10
     * @default 0.000000
     */
    'margin-left'?: number;
    /**
     * The margin (in pixels) from the right of the actor.
     * @since 1.10
     * @default 0.000000
     */
    'margin-right'?: number;
    /**
     * The margin (in pixels) from the top of the actor.
     * @since 1.10
     * @default 0.000000
     */
    'margin-top'?: number;
    /**
     * A forced minimum height request for the actor, in pixels Writing this property sets the #ClutterActor:min-height-set property as well, as a side effect.
     * @since 0.8
     * @default 0.000000
     */
    'min-height'?: number;
    /**
     * This flag controls whether the #ClutterActor:min-height property is used
     * @since 0.8
     * @default FALSE
     */
    'min-height-set'?: boolean;
    /**
     * A forced minimum width request for the actor, in pixels Writing this property sets the #ClutterActor:min-width-set property as well, as a side effect.
     * @since 0.8
     * @default 0.000000
     */
    'min-width'?: number;
    /**
     * This flag controls whether the #ClutterActor:min-width property is used
     * @since 0.8
     * @default FALSE
     */
    'min-width-set'?: boolean;
    /** @default CLUTTER_SCALING_FILTER_LINEAR */
    'minification-filter'?: ClutterScalingFilterNick | Clutter.ScalingFilter;
    /**
     * The name of the actor
     * @since 0.2
     * @default NULL
     */
    name?: string;
    /**
     * A forced natural height request for the actor, in pixels Writing this property sets the #ClutterActor:natural-height-set property as well, as a side effect.
     * @since 0.8
     * @default 0.000000
     */
    'natural-height'?: number;
    /**
     * This flag controls whether the #ClutterActor:natural-height property is used
     * @since 0.8
     * @default FALSE
     */
    'natural-height-set'?: boolean;
    /**
     * A forced natural width request for the actor, in pixels Writing this property sets the #ClutterActor:natural-width-set property as well, as a side effect.
     * @since 0.8
     * @default 0.000000
     */
    'natural-width'?: number;
    /**
     * This flag controls whether the #ClutterActor:natural-width property is used
     * @since 0.8
     * @default FALSE
     */
    'natural-width-set'?: boolean;
    /**
     * Determines the conditions in which the actor will be redirected to an offscreen framebuffer while being painted.
     * @since 1.8
     * @default 0
     */
    'offscreen-redirect'?: number;
    /**
     * Opacity of an actor, between 0 (fully transparent) and 255 (fully opaque) The #ClutterActor:opacity property is animatable.
     * @default 255
     */
    opacity?: number;
    /**
     * The point around which the scaling and rotation transformations occur.
     * @since 1.12
     */
    'pivot-point'?: Clutter.Point;
    /**
     * The Z component of the #ClutterActor:pivot-point, expressed as a value along the Z axis.
     * @since 1.12
     * @default 0.000000
     */
    'pivot-point-z'?: number;
    /**
     * The position of the origin of the actor.
     * @since 1.12
     */
    position?: Clutter.Point;
    /**
     * Whether the actor is reactive to events or not Only reactive actors will emit event-related signals
     * @since 0.6
     * @default FALSE
     */
    reactive?: boolean;
    /**
     * Request mode for the #ClutterActor.
     * @since 0.8
     * @default CLUTTER_REQUEST_HEIGHT_FOR_WIDTH
     */
    'request-mode'?: ClutterRequestModeNick | Clutter.RequestMode;
    /**
     * The rotation angle on the X axis.
     * @since 0.6
     * @default 0.000000
     */
    'rotation-angle-x'?: number;
    /**
     * The rotation angle on the Y axis The #ClutterActor:rotation-angle-y property is animatable.
     * @since 0.6
     * @default 0.000000
     */
    'rotation-angle-y'?: number;
    /**
     * The rotation angle on the Z axis The #ClutterActor:rotation-angle-z property is animatable.
     * @since 0.6
     * @default 0.000000
     */
    'rotation-angle-z'?: number;
    /**
     * The rotation center on the X axis.
     * @since 0.6
     * @deprecated since 1.12: Use #ClutterActor:pivot-point instead
     */
    'rotation-center-x'?: Clutter.Vertex;
    /**
     * The rotation center on the Y axis.
     * @since 0.6
     * @deprecated since 1.12: Use #ClutterActor:pivot-point instead
     */
    'rotation-center-y'?: Clutter.Vertex;
    /**
     * The rotation center on the Z axis.
     * @since 0.6
     * @deprecated since 1.12: Use #ClutterActor:pivot-point instead
     */
    'rotation-center-z'?: Clutter.Vertex;
    /**
     * The rotation center on the Z axis expressed as a #ClutterGravity.
     * @since 1.0
     * @default CLUTTER_GRAVITY_NONE
     * @deprecated since 1.12: Use #ClutterActor:pivot-point instead
     */
    'rotation-center-z-gravity'?: ClutterGravityNick | Clutter.Gravity;
    /**
     * The horizontal center point for scaling
     * @since 1.0
     * @default 0.000000
     * @deprecated since 1.12: Use #ClutterActor:pivot-point instead
     */
    'scale-center-x'?: number;
    /**
     * The vertical center point for scaling
     * @since 1.0
     * @default 0.000000
     * @deprecated since 1.12: Use #ClutterActor:pivot-point instead
     */
    'scale-center-y'?: number;
    /**
     * The center point for scaling expressed as a #ClutterGravity
     * @since 1.0
     * @default CLUTTER_GRAVITY_NONE
     * @deprecated since 1.12: Use #ClutterActor:pivot-point instead
     */
    'scale-gravity'?: ClutterGravityNick | Clutter.Gravity;
    /**
     * The horizontal scale of the actor.
     * @since 0.6
     * @default 1.000000
     */
    'scale-x'?: number;
    /**
     * The vertical scale of the actor.
     * @since 0.6
     * @default 1.000000
     */
    'scale-y'?: number;
    /**
     * The scale factor of the actor along the Z axis.
     * @since 1.12
     * @default 1.000000
     */
    'scale-z'?: number;
    /**
     * If %TRUE, the actor is automatically shown when parented.
     * @since 0.8
     * @default TRUE
     */
    'show-on-set-parent'?: boolean;
    /**
     * The size of the actor.
     * @since 1.12
     */
    size?: Clutter.Size;
    /**
     * The direction of the text inside a #ClutterActor.
     * @since 1.0
     * @default CLUTTER_TEXT_DIRECTION_LTR
     */
    'text-direction'?: ClutterTextDirectionNick | Clutter.TextDirection;
    /**
     * Overrides the transformations of a #ClutterActor with a custom matrix.
     * @since 1.12
     */
    transform?: Clutter.Matrix;
    /**
     * An additional translation applied along the X axis, relative to the actor's #ClutterActor:pivot-point.
     * @since 1.12
     * @default 0.000000
     */
    'translation-x'?: number;
    /**
     * An additional translation applied along the Y axis, relative to the actor's #ClutterActor:pivot-point.
     * @since 1.12
     * @default 0.000000
     */
    'translation-y'?: number;
    /**
     * An additional translation applied along the Z axis, relative to the actor's #ClutterActor:pivot-point.
     * @since 1.12
     * @default 0.000000
     */
    'translation-z'?: number;
    /**
     * Whether the actor is set to be visible or not See also #ClutterActor:mapped
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
     * @since 1.10
     * @default CLUTTER_ACTOR_ALIGN_FILL
     */
    'x-align'?: ClutterActorAlignNick | Clutter.ActorAlign;
    /**
     * Whether a layout manager should assign more space to the actor on the X axis.
     * @since 1.12
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
     * @since 1.10
     * @default CLUTTER_ACTOR_ALIGN_FILL
     */
    'y-align'?: ClutterActorAlignNick | Clutter.ActorAlign;
    /**
     * Whether a layout manager should assign more space to the actor on the Y axis.
     * @since 1.12
     * @default FALSE
     */
    'y-expand'?: boolean;
    /**
     * The actor's position on the Z axis, relative to the parent's transformations.
     * @since 1.12
     * @default 0.000000
     */
    'z-position'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterActorConstructOnly = never;

/** The #ClutterTexture structure contains only private data and should be accessed using the provided API */
export interface ClutterTextureProps extends ClutterActorProps {
    /** @default FALSE */
    'disable-slicing'?: boolean;
    /**
     * The path of the file containing the image data to be displayed by the texture.
     * @default NULL
     * @deprecated since 1.12: Use #ClutterImage and platform-specific image loading API, like GdkPixbuf
     */
    filename?: string;
    /** @default CLUTTER_TEXTURE_QUALITY_MEDIUM */
    'filter-quality'?: ClutterTextureQualityNick | Clutter.TextureQuality;
    /** @default FALSE */
    'keep-aspect-ratio'?: boolean;
    /**
     * Tries to load a texture from a filename by using a local thread to perform the read operations.
     * @since 1.0
     * @default FALSE
     * @deprecated since 1.12: Use platform-specific image loading API, like GdkPixbuf
     */
    'load-async'?: boolean;
    /**
     * Like #ClutterTexture:load-async but loads the width and height synchronously causing some blocking.
     * @since 1.0
     * @default FALSE
     * @deprecated since 1.12: Use platform-specific image loading API, like GdkPixbuf
     */
    'load-data-async'?: boolean;
    /** @default FALSE */
    'pick-with-alpha'?: boolean;
    /** @default FALSE */
    'repeat-x'?: boolean;
    /** @default FALSE */
    'repeat-y'?: boolean;
    /** @default TRUE */
    'sync-size'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterTextureConstructOnly = ClutterActorConstructOnly | 'disable-slicing';

/** A ClutterActor containing a #GtkWidget. */
export interface GtkClutterActorProps extends ClutterActorProps {
    /** The #GtkWidget to be embedded into the #GtkClutterActor */
    contents?: Gtk.Widget;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkClutterActorConstructOnly = ClutterActorConstructOnly;

/** A #GtkWidget containing the default Clutter stage. */
export interface GtkClutterEmbedProps extends GtkContainerProps, GtkBuildableProps {
    /**
     * The #GtkWidget to be embedded into the #GtkClutterActor
     * @since 1.4
     * @default FALSE
     */
    'use-layout-size'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkClutterEmbedConstructOnly = GtkContainerConstructOnly | GtkBuildableConstructOnly;

/** The <structname>GtkClutterTexture</structname> structure contains only private data and should be accessed using the provided API. */
export interface GtkClutterTextureProps extends ClutterTextureProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkClutterTextureConstructOnly = ClutterTextureConstructOnly;

/** A #GtkWindow containing a #ClutterStage. */
export interface GtkClutterWindowProps extends GtkWindowProps, GtkBuildableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkClutterWindowConstructOnly = GtkWindowConstructOnly | GtkBuildableConstructOnly;

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
    GtkClutterEmbed: {
        class: GtkClutter.Embed;
        props: GtkClutterEmbedProps;
        signals: GtkClutter.Embed.SignalSignatures;
        constructOnly: GtkClutterEmbedConstructOnly;
        slotCandidates: {};
    };
    GtkClutterWindow: {
        class: GtkClutter.Window;
        props: GtkClutterWindowProps;
        signals: GtkClutter.Window.SignalSignatures;
        constructOnly: GtkClutterWindowConstructOnly;
        slotCandidates: {};
    };
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
