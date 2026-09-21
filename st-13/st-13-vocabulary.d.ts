/**
 * The GIR-derived widget VOCABULARY for St-13.
 *
 * GENERATED — do not edit. Provenance: St-13 — dropped empty base(s): Atk.ImplementorIface
 *
 * 27 instantiable GTypes (of which 0 concrete widgets), 28 declarations, 11 enum nick unions, 0 slot candidates.
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
import type Clutter from '@girs/clutter-13';
import type Gio from '@girs/gio-2.0';
import type St from './st-13.js';
import type { AtkActionConstructOnly, AtkActionProps, AtkComponentConstructOnly, AtkComponentProps, AtkGObjectAccessibleConstructOnly, AtkGObjectAccessibleProps, AtkObjectConstructOnly, AtkObjectProps, AtkRoleNick, AtkValueConstructOnly, AtkValueProps } from '@girs/atk-1.0/vocabulary';
import type { CallyActorConstructOnly, CallyActorProps } from '@girs/cally-13/vocabulary';
import type { ClutterActorConstructOnly, ClutterActorMetaConstructOnly, ClutterActorMetaProps, ClutterActorProps, ClutterAnimatableConstructOnly, ClutterAnimatableProps, ClutterContainerConstructOnly, ClutterContainerProps, ClutterContentConstructOnly, ClutterContentProps, ClutterEffectConstructOnly, ClutterEffectProps, ClutterImageConstructOnly, ClutterImageProps, ClutterInputContentPurposeNick, ClutterOffscreenEffectConstructOnly, ClutterOffscreenEffectProps, ClutterScriptableConstructOnly, ClutterScriptableProps, ClutterShaderEffectConstructOnly, ClutterShaderEffectProps } from '@girs/clutter-13/vocabulary';
import type { GIconConstructOnly, GIconProps, GLoadableIconConstructOnly, GLoadableIconProps } from '@girs/gio-2.0/vocabulary';
import type { GInitiallyUnownedConstructOnly, GInitiallyUnownedProps, GObjectConstructOnly, GObjectProps } from '@girs/gobject-2.0/vocabulary';

// ---------------------------------------------------------------------------
// Enum nicks — the string vocabulary GObject registered, from GIR's `glib:nick`.
//
// Not derived from the member name. Substituting underscores for dashes is not a law:
// some nicks keep an underscore the substitution would have replaced, and only the
// attribute knows which. Gtk-4.0 and Adw-1 contradict no derivation at all, which is
// how a derived nick passes review and breaks elsewhere.
// Re-measure with `scripts/check-nick-derivation.mjs` in ts-for-gir.
// ---------------------------------------------------------------------------

export type StBackgroundSizeNick = 'auto' | 'contain' | 'cover' | 'fixed';
export type StClipboardTypeNick = 'primary' | 'clipboard';
export type StCornerNick = 'topleft' | 'topright' | 'bottomright' | 'bottomleft';
export type StDirectionTypeNick = 'tab-forward' | 'tab-backward' | 'up' | 'down' | 'left' | 'right';
export type StGradientTypeNick = 'none' | 'vertical' | 'horizontal' | 'radial';
export type StIconStyleNick = 'requested' | 'regular' | 'symbolic';
export type StPolicyTypeNick = 'always' | 'automatic' | 'never' | 'external';
export type StSideNick = 'top' | 'right' | 'bottom' | 'left';
export type StSystemColorSchemeNick = 'default' | 'prefer-dark' | 'prefer-light';
export type StTextAlignNick = 'left' | 'center' | 'right' | 'justify';
export type StTextureCachePolicyNick = 'none' | 'forever';

// ---------------------------------------------------------------------------
// Property surfaces — one interface per GIR DECLARATION, mirroring GIR's own
// inheritance rather than flattening per widget.
//
// The interfaces are load-bearing, not tidiness: `GtkBox` declares four properties
// of its own and `orientation` is not among them — it lives on `Gtk.Orientable`,
// because GObject installs interface properties on the implementor at runtime while
// GIR keeps them once, on the interface.
// ---------------------------------------------------------------------------

export interface StAdjustmentProps extends GObjectProps, ClutterAnimatableProps {
    /** If the adjustment is used as #ClutterAnimatable for a #ClutterPropertyTransition, this property is used to determine which monitor should drive the animation. */
    actor?: Clutter.Actor;
    /**
     * The minimum value of the adjustment.
     * @default 0.000000
     */
    lower?: number;
    /**
     * The page increment of the adjustment.
     * @default 0.000000
     */
    'page-increment'?: number;
    /**
     * The page size of the adjustment.
     * @default 0.000000
     */
    'page-size'?: number;
    /**
     * The step increment of the adjustment.
     * @default 0.000000
     */
    'step-increment'?: number;
    /**
     * The maximum value of the adjustment.
     * @default 0.000000
     */
    upper?: number;
    /**
     * The value of the adjustment.
     * @default 0.000000
     */
    value?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type StAdjustmentConstructOnly = GObjectConstructOnly | ClutterAnimatableConstructOnly;

export interface StBinProps extends StWidgetProps, ClutterAnimatableProps, ClutterContainerProps, ClutterScriptableProps {
    /** The child #ClutterActor of the #StBin container. */
    child?: Clutter.Actor;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type StBinConstructOnly = StWidgetConstructOnly | ClutterAnimatableConstructOnly | ClutterContainerConstructOnly | ClutterScriptableConstructOnly;

export interface StBorderImageProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type StBorderImageConstructOnly = GObjectConstructOnly;

/** The contents of this structure are private and should only be accessed through the public API. */
export interface StBoxLayoutProps extends StViewportProps, ClutterAnimatableProps, ClutterContainerProps, ClutterScriptableProps, StScrollableProps {
    /**
     * A convenience property for the #ClutterBoxLayout:pack-start property of the internal layout for #StBoxLayout.
     * @default FALSE
     */
    'pack-start'?: boolean;
    /**
     * A convenience property for the #ClutterBoxLayout:vertical property of the internal layout for #StBoxLayout.
     * @default FALSE
     */
    vertical?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type StBoxLayoutConstructOnly = StViewportConstructOnly | ClutterAnimatableConstructOnly | ClutterContainerConstructOnly | ClutterScriptableConstructOnly | StScrollableConstructOnly;

export interface StButtonProps extends StBinProps, ClutterAnimatableProps, ClutterContainerProps, ClutterScriptableProps {
    /**
     * Which buttons will trigger the #StButton::clicked signal.
     * @default ST_BUTTON_ONE
     */
    'button-mask'?: number;
    /**
     * If #StButton:toggle-mode is %TRUE, indicates if the #StButton is toggled "on" or "off".
     * @default FALSE
     */
    checked?: boolean;
    /**
     * The icon name of the #StButton.
     * @default NULL
     */
    'icon-name'?: string | null;
    /**
     * The label of the #StButton.
     * @default NULL
     */
    label?: string;
    /**
     * Whether the #StButton is operating in toggle mode (on/off).
     * @default FALSE
     */
    'toggle-mode'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type StButtonConstructOnly = StBinConstructOnly | ClutterAnimatableConstructOnly | ClutterContainerConstructOnly | ClutterScriptableConstructOnly;

/** The contents of this structure is private and should only be accessed using the provided API. */
export interface StClipboardProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type StClipboardConstructOnly = GObjectConstructOnly;

export interface StDrawingAreaProps extends StWidgetProps, ClutterAnimatableProps, ClutterContainerProps, ClutterScriptableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type StDrawingAreaConstructOnly = StWidgetConstructOnly | ClutterAnimatableConstructOnly | ClutterContainerConstructOnly | ClutterScriptableConstructOnly;

export interface StEntryProps extends StWidgetProps, ClutterAnimatableProps, ClutterContainerProps, ClutterScriptableProps {
    /** A #ClutterActor to display when the entry is empty and unfocused. */
    'hint-actor'?: Clutter.Actor | null;
    /**
     * The text to display when the entry is empty and unfocused.
     * @default NULL
     */
    'hint-text'?: string | null;
    /**
     * The #ClutterInputContentHintFlags providing additional hints (beyond #StEntry:input-purpose) that allow input methods to fine-tune their behaviour.
     * @default 0
     */
    'input-hints'?: number;
    /**
     * The #ClutterInputContentPurpose that helps on-screen keyboards and similar input methods to decide which keys should be presented to the user.
     * @default CLUTTER_INPUT_CONTENT_PURPOSE_NORMAL
     */
    'input-purpose'?: ClutterInputContentPurposeNick | Clutter.InputContentPurpose;
    /** The #ClutterActor acting as the primary icon at the start of the #StEntry. */
    'primary-icon'?: Clutter.Actor | null;
    /** The #ClutterActor acting as the secondary icon at the end of the #StEntry. */
    'secondary-icon'?: Clutter.Actor | null;
    /**
     * The current text value of the #StEntry.
     * @default NULL
     */
    text?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type StEntryConstructOnly = StWidgetConstructOnly | ClutterAnimatableConstructOnly | ClutterContainerConstructOnly | ClutterScriptableConstructOnly;

/** The #StFocusManager struct contains only private data */
export interface StFocusManagerProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type StFocusManagerConstructOnly = GObjectConstructOnly;

export interface StGenericAccessibleProps extends StWidgetAccessibleProps, AtkActionProps, AtkComponentProps, AtkValueProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type StGenericAccessibleConstructOnly = StWidgetAccessibleConstructOnly | AtkActionConstructOnly | AtkComponentConstructOnly | AtkValueConstructOnly;

/** The contents of this structure are private and should only be accessed through the public API. */
export interface StIconProps extends StWidgetProps, ClutterAnimatableProps, ClutterContainerProps, ClutterScriptableProps {
    /** The fallback #GIcon to display if #StIcon:gicon fails to load. */
    'fallback-gicon'?: Gio.Icon;
    /**
     * The fallback icon name of the #StIcon.
     * @default NULL
     */
    'fallback-icon-name'?: string;
    /** The #GIcon being displayed by this #StIcon. */
    gicon?: Gio.Icon | null;
    /**
     * The name of the icon if the icon being displayed is a #GThemedIcon.
     * @default NULL
     */
    'icon-name'?: string | null;
    /**
     * The size of the icon, if greater than `0`.
     * @default -1
     */
    'icon-size'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type StIconConstructOnly = StWidgetConstructOnly | ClutterAnimatableConstructOnly | ClutterContainerConstructOnly | ClutterScriptableConstructOnly;

export interface StIconInfoProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type StIconInfoConstructOnly = GObjectConstructOnly;

/** #StIconTheme provides a facility for looking up icons by name and size. */
export interface StIconThemeProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type StIconThemeConstructOnly = GObjectConstructOnly;

export interface StImageContentProps extends ClutterImageProps, ClutterContentProps, GIconProps, GLoadableIconProps {
    /** @default -1 */
    'preferred-height'?: number;
    /** @default -1 */
    'preferred-width'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type StImageContentConstructOnly = ClutterImageConstructOnly | ClutterContentConstructOnly | GIconConstructOnly | GLoadableIconConstructOnly | 'preferred-height' | 'preferred-width';

/** The contents of this structure is private and should only be accessed using the provided API. */
export interface StLabelProps extends StWidgetProps, ClutterAnimatableProps, ClutterContainerProps, ClutterScriptableProps {
    /**
     * The current text being display in the #StLabel.
     * @default NULL
     */
    text?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type StLabelConstructOnly = StWidgetConstructOnly | ClutterAnimatableConstructOnly | ClutterContainerConstructOnly | ClutterScriptableConstructOnly;

export interface StPasswordEntryProps extends StEntryProps, ClutterAnimatableProps, ClutterContainerProps, ClutterScriptableProps {
    /**
     * Whether the text in the entry is masked for privacy.
     * @default FALSE
     */
    'password-visible'?: boolean;
    /**
     * Whether to display an icon button to toggle the masking enabled by the #StPasswordEntry:password-visible property.
     * @default TRUE
     */
    'show-peek-icon'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type StPasswordEntryConstructOnly = StEntryConstructOnly | ClutterAnimatableConstructOnly | ClutterContainerConstructOnly | ClutterScriptableConstructOnly;

export interface StScrollBarProps extends StWidgetProps, ClutterAnimatableProps, ClutterContainerProps, ClutterScriptableProps {
    /** The #StAdjustment controlling the #StScrollBar. */
    adjustment?: St.Adjustment;
    /**
     * Whether the #StScrollBar is vertical.
     * @default FALSE
     */
    vertical?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type StScrollBarConstructOnly = StWidgetConstructOnly | ClutterAnimatableConstructOnly | ClutterContainerConstructOnly | ClutterScriptableConstructOnly;

/** The contents of this structure are private and should only be accessed through the public API. */
export interface StScrollViewProps extends StBinProps, ClutterAnimatableProps, ClutterContainerProps, ClutterScriptableProps {
    /**
     * Whether to enable automatic mouse wheel scrolling.
     * @default TRUE
     */
    'enable-mouse-scrolling'?: boolean;
    /**
     * The #StPolicyType for when to show the horizontal #StScrollBar.
     * @default ST_POLICY_AUTOMATIC
     */
    'hscrollbar-policy'?: StPolicyTypeNick | St.PolicyType;
    /**
     * Whether scrollbars are painted on top of the content.
     * @default FALSE
     */
    'overlay-scrollbars'?: boolean;
    /**
     * The #StPolicyType for when to show the vertical #StScrollBar.
     * @default ST_POLICY_AUTOMATIC
     */
    'vscrollbar-policy'?: StPolicyTypeNick | St.PolicyType;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type StScrollViewConstructOnly = StBinConstructOnly | ClutterAnimatableConstructOnly | ClutterContainerConstructOnly | ClutterScriptableConstructOnly;

export interface StScrollViewFadeProps extends ClutterShaderEffectProps {
    /**
     * Whether faded edges should extend beyond the faded area of the #StScrollViewFade.
     * @default FALSE
     */
    'extend-fade-area'?: boolean;
    /**
     * Whether the faded area should extend to the edges of the #StScrollViewFade.
     * @default FALSE
     */
    'fade-edges'?: boolean;
    /** The margins widths that are faded. */
    'fade-margins'?: Clutter.Margin;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type StScrollViewFadeConstructOnly = ClutterShaderEffectConstructOnly;

export interface StScrollableProps extends GObjectProps {
    /** The horizontal #StAdjustment used by the #StScrollable. */
    hadjustment?: St.Adjustment;
    /** The vertical #StAdjustment used by the #StScrollable. */
    vadjustment?: St.Adjustment;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type StScrollableConstructOnly = GObjectConstructOnly;

export interface StSettingsProps extends GObjectProps {
    /**
     * The slow-down factor applied to all animation durations.
     * @default 1.000000
     */
    'slow-down-factor'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type StSettingsConstructOnly = GObjectConstructOnly;

export interface StTextureCacheProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type StTextureCacheConstructOnly = GObjectConstructOnly;

export interface StThemeProps extends GObjectProps {
    /** The highest priority stylesheet, representing application-specific styling; this is associated with the CSS "author" stylesheet. */
    'application-stylesheet'?: Gio.File;
    /** The lowest priority stylesheet, representing global default styling; this is associated with the CSS "user agent" stylesheet. */
    'default-stylesheet'?: Gio.File;
    /** The second priority stylesheet, representing theme-specific styling; this is associated with the CSS "user" stylesheet. */
    'theme-stylesheet'?: Gio.File;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type StThemeConstructOnly = GObjectConstructOnly | 'application-stylesheet' | 'default-stylesheet' | 'theme-stylesheet';

export interface StThemeContextProps extends GObjectProps {
    /**
     * The scaling factor used for HiDPI scaling.
     * @default 1
     */
    'scale-factor'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type StThemeContextConstructOnly = GObjectConstructOnly;

export interface StThemeNodeProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type StThemeNodeConstructOnly = GObjectConstructOnly;

export interface StViewportProps extends StWidgetProps, ClutterAnimatableProps, ClutterContainerProps, ClutterScriptableProps, StScrollableProps {
    /** @default TRUE */
    'clip-to-view'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type StViewportConstructOnly = StWidgetConstructOnly | ClutterAnimatableConstructOnly | ClutterContainerConstructOnly | ClutterScriptableConstructOnly | StScrollableConstructOnly;

export interface StWidgetProps extends ClutterActorProps, ClutterAnimatableProps, ClutterContainerProps, ClutterScriptableProps {
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
    /**
     * Whether or not the widget can be focused via keyboard navigation.
     * @default FALSE
     */
    'can-focus'?: boolean;
    /**
     * Whether or not the pointer is currently hovering over the widget.
     * @default FALSE
     */
    hover?: boolean;
    /** An actor that labels this widget. */
    'label-actor'?: Clutter.Actor;
    /** The pseudo-class of the actor. */
    'pseudo-class'?: string;
    /** Inline style information for the actor as a ';'-separated list of CSS properties. */
    style?: string | null;
    /** The style-class of the actor for use in styling. */
    'style-class'?: string;
    /**
     * Determines whether the widget tracks pointer hover state.
     * @default FALSE
     */
    'track-hover'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type StWidgetConstructOnly = ClutterActorConstructOnly | ClutterAnimatableConstructOnly | ClutterContainerConstructOnly | ClutterScriptableConstructOnly;

export interface StWidgetAccessibleProps extends CallyActorProps, AtkActionProps, AtkComponentProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type StWidgetAccessibleConstructOnly = CallyActorConstructOnly | AtkActionConstructOnly | AtkComponentConstructOnly;

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
