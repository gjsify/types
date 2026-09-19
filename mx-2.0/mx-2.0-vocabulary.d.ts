/**
 * The GIR-derived widget VOCABULARY for Mx-2.0.
 *
 * GENERATED — do not edit. Provenance: Mx-2.0 — library 1.99.4 — dropped empty base(s): Atk.ImplementorIface — inlined base(s) their owner's vocabulary does not emit: Clutter.ChildMeta
 *
 * 46 instantiable GTypes (of which 0 concrete widgets), 53 declarations (1 inlined from a namespace whose vocabulary does not emit them), 18 enum nick unions, 0 slot candidates.
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
import type GObject from '@girs/gobject-2.0';
import type Mx from './mx-2.0.js';
import type { ClutterActorConstructOnly, ClutterActorMetaConstructOnly, ClutterActorMetaProps, ClutterActorProps, ClutterAnimatableConstructOnly, ClutterAnimatableProps, ClutterContainerConstructOnly, ClutterContainerProps, ClutterEffectConstructOnly, ClutterEffectProps, ClutterOffscreenEffectConstructOnly, ClutterOffscreenEffectProps, ClutterScriptableConstructOnly, ClutterScriptableProps } from '@girs/clutter-1.0/vocabulary';
import type { GActionConstructOnly, GActionGroupConstructOnly, GActionGroupProps, GActionMapConstructOnly, GActionMapProps, GActionProps, GApplicationConstructOnly, GApplicationProps } from '@girs/gio-2.0/vocabulary';
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

export type MxActorManagerErrorNick = 'container-destroyed' | 'actor-destroyed' | 'creation-failed' | 'unknown-operation';
export type MxAlignNick = 'start' | 'middle' | 'end';
export type MxDisplayStyleNick = 'none' | 'inline';
export type MxDragAxisNick = 'none' | 'x' | 'y';
export type MxFocusDirectionNick = 'out' | 'up' | 'down' | 'left' | 'right' | 'next' | 'previous';
export type MxFocusHintNick = 'first' | 'last' | 'prior' | 'from-above' | 'from-below' | 'from-left' | 'from-right';
export type MxFontWeightNick = 'normal' | 'bold' | 'bolder' | 'lighter';
export type MxImageScaleModeNick = 'none' | 'fit' | 'crop';
export type MxKineticScrollViewStateNick = 'idle' | 'panning' | 'scrolling' | 'clamping';
export type MxLongPressActionNick = 'query' | 'action' | 'cancel';
export type MxOrientationNick = 'horizontal' | 'vertical';
export type MxPositionNick = 'top' | 'right' | 'bottom' | 'left';
export type MxScrollPolicyNick = 'none' | 'horizontal' | 'vertical' | 'both' | 'automatic';
export type MxStyleErrorNick = 'invalid-file' | 'parse-error';
export type MxTextAlignNick = 'left' | 'right' | 'center' | 'justify';
export type MxTooltipAnimationNick = 'bounce' | 'fade';
export type MxVisibilityStyleNick = 'visible' | 'hidden';
export type MxWindowRotationNick = '0' | '90' | '180' | '270';

// ---------------------------------------------------------------------------
// Property surfaces — one interface per GIR DECLARATION, mirroring GIR's own
// inheritance rather than flattening per widget.
//
// The interfaces are load-bearing, not tidiness: `GtkBox` declares four properties
// of its own and `orientation` is not among them — it lives on `Gtk.Orientable`,
// because GObject installs interface properties on the implementor at runtime while
// GIR keeps them once, on the interface.
// ---------------------------------------------------------------------------

/** Base interface for container specific state for child actors. */
export interface ClutterChildMetaProps extends GObjectProps {
    /**
     * The #ClutterActor being wrapped by this #ClutterChildMeta
     * @since 0.8
     */
    actor?: Clutter.Actor;
    /**
     * The #ClutterContainer that created this #ClutterChildMeta.
     * @since 0.8
     */
    container?: Clutter.Container;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type ClutterChildMetaConstructOnly = GObjectConstructOnly | 'actor' | 'container';

/** The contents of this structure are private and should only be accessed through the public API. */
export interface MxActionProps extends GInitiallyUnownedProps, GActionProps {
    active?: boolean;
    'display-name'?: string;
    icon?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MxActionConstructOnly = GInitiallyUnownedConstructOnly | GActionConstructOnly;

export interface MxActorManagerProps extends GObjectProps {
    stage?: Clutter.Stage;
    'time-slice'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MxActorManagerConstructOnly = GObjectConstructOnly | 'stage';

/** Class for handling an interval between to values. */
export interface MxAdjustmentProps extends GObjectProps {
    'clamp-value'?: boolean;
    elastic?: boolean;
    lower?: number;
    'page-increment'?: number;
    'page-size'?: number;
    'step-increment'?: number;
    upper?: number;
    value?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MxAdjustmentConstructOnly = GObjectConstructOnly;

/** The contents of this structure are private and should only be accessed through the public API. */
export interface MxApplicationProps extends GApplicationProps, GActionGroupProps, GActionMapProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MxApplicationConstructOnly = GApplicationConstructOnly | GActionGroupConstructOnly | GActionMapConstructOnly;

/** The #MxBin struct contains only private data */
export interface MxBinProps extends Omit<MxWidgetProps, 'x-align' | 'y-align'>, ClutterAnimatableProps, ClutterContainerProps, ClutterScriptableProps, MxFocusableProps, MxStylableProps {
    /** The child #ClutterActor of the #MxBin container. */
    child?: Clutter.Actor;
    /** The horizontal alignment of the #MxBin child. */
    'x-align'?: MxAlignNick | Mx.Align;
    /** Whether the child should fill the horizontal allocation */
    'x-fill'?: boolean;
    /** The vertical alignment of the #MxBin child. */
    'y-align'?: MxAlignNick | Mx.Align;
    /** Whether the child should fill the vertical allocation */
    'y-fill'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MxBinConstructOnly = MxWidgetConstructOnly | ClutterAnimatableConstructOnly | ClutterContainerConstructOnly | ClutterScriptableConstructOnly | MxFocusableConstructOnly | MxStylableConstructOnly;

/** The contents of this structure are private and should only be accessed through the public API. */
export interface MxBoxLayoutProps extends MxWidgetProps, ClutterAnimatableProps, ClutterContainerProps, ClutterScriptableProps, MxFocusableProps, MxScrollableProps, MxStylableProps {
    'enable-animations'?: boolean;
    orientation?: MxOrientationNick | Mx.Orientation;
    'scroll-to-focused'?: boolean;
    spacing?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MxBoxLayoutConstructOnly = MxWidgetConstructOnly | ClutterAnimatableConstructOnly | ClutterContainerConstructOnly | ClutterScriptableConstructOnly | MxFocusableConstructOnly | MxScrollableConstructOnly | MxStylableConstructOnly;

/** The contents of this structure are private and should only be accessed through the public API. */
export interface MxBoxLayoutChildProps extends ClutterChildMetaProps {
    expand?: boolean;
    'x-align'?: MxAlignNick | Mx.Align;
    'x-fill'?: boolean;
    'y-align'?: MxAlignNick | Mx.Align;
    'y-fill'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MxBoxLayoutChildConstructOnly = ClutterChildMetaConstructOnly;

/** The contents of this structure is private and should only be accessed using the provided API. */
export interface MxButtonProps extends MxWidgetProps, ClutterAnimatableProps, ClutterContainerProps, ClutterScriptableProps, MxFocusableProps, MxStylableProps {
    action?: Mx.Action;
    'icon-name'?: string;
    'icon-position'?: MxPositionNick | Mx.Position;
    'icon-size'?: number;
    'icon-visible'?: boolean;
    'is-toggle'?: boolean;
    label?: string;
    'label-visible'?: boolean;
    toggled?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MxButtonConstructOnly = MxWidgetConstructOnly | ClutterAnimatableConstructOnly | ClutterContainerConstructOnly | ClutterScriptableConstructOnly | MxFocusableConstructOnly | MxStylableConstructOnly;

/** The contents of this structure are private and should only be accessed through the public API. */
export interface MxButtonGroupProps extends GInitiallyUnownedProps {
    'active-button'?: Mx.Button;
    'allow-no-active'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MxButtonGroupConstructOnly = GInitiallyUnownedConstructOnly;

/** The contents of this structure is private and should only be accessed using the provided API. */
export interface MxClipboardProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MxClipboardConstructOnly = GObjectConstructOnly;

/** The contents of this structure are private and should only be accessed through the public API. */
export interface MxComboBoxProps extends MxWidgetProps, ClutterAnimatableProps, ClutterContainerProps, ClutterScriptableProps, MxFocusableProps, MxStylableProps {
    'active-icon-name'?: string;
    'active-text'?: string;
    index?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MxComboBoxConstructOnly = MxWidgetConstructOnly | ClutterAnimatableConstructOnly | ClutterContainerConstructOnly | ClutterScriptableConstructOnly | MxFocusableConstructOnly | MxStylableConstructOnly;

/** The contents of this structure is private and should only be accessed using the provided API. */
export interface MxDialogProps extends MxWidgetProps, ClutterAnimatableProps, ClutterContainerProps, ClutterScriptableProps, MxFocusableProps, MxStylableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MxDialogConstructOnly = MxWidgetConstructOnly | ClutterAnimatableConstructOnly | ClutterContainerConstructOnly | ClutterScriptableConstructOnly | MxFocusableConstructOnly | MxStylableConstructOnly;

/** The contents of this structure is private and should only be accessed using the provided API. */
export interface MxEntryProps extends MxWidgetProps, ClutterAnimatableProps, ClutterContainerProps, ClutterScriptableProps, MxFocusableProps, MxStylableProps {
    'icon-highlight-suffix'?: string;
    'password-char'?: number;
    placeholder?: string;
    'primary-icon-tooltip-text'?: string;
    'secondary-icon-tooltip-text'?: string;
    text?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MxEntryConstructOnly = MxWidgetConstructOnly | ClutterAnimatableConstructOnly | ClutterContainerConstructOnly | ClutterScriptableConstructOnly | MxFocusableConstructOnly | MxStylableConstructOnly;

/** The contents of the this structure are private and should only be accessed through the public API. */
export interface MxExpanderProps extends MxWidgetProps, ClutterAnimatableProps, ClutterContainerProps, ClutterScriptableProps, MxStylableProps {
    expanded?: boolean;
    label?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MxExpanderConstructOnly = MxWidgetConstructOnly | ClutterAnimatableConstructOnly | ClutterContainerConstructOnly | ClutterScriptableConstructOnly | MxStylableConstructOnly;

export interface MxFadeEffectProps extends ClutterOffscreenEffectProps {
    'border-bottom'?: number;
    'border-left'?: number;
    'border-right'?: number;
    'border-top'?: number;
    'bounds-height'?: number;
    'bounds-width'?: number;
    'bounds-x'?: number;
    'bounds-y'?: number;
    color?: Clutter.Color;
    'freeze-update'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MxFadeEffectConstructOnly = ClutterOffscreenEffectConstructOnly;

/** The contents of this structure are private and should only be accessed through the public API. */
export interface MxFloatingWidgetProps extends MxWidgetProps, ClutterAnimatableProps, ClutterContainerProps, ClutterScriptableProps, MxStylableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MxFloatingWidgetConstructOnly = MxWidgetConstructOnly | ClutterAnimatableConstructOnly | ClutterContainerConstructOnly | ClutterScriptableConstructOnly | MxStylableConstructOnly;

/** The contents of this structure are private and should only be accessed through the public API. */
export interface MxFocusManagerProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MxFocusManagerConstructOnly = GObjectConstructOnly;

/** This is an opaque structure whose members cannot be directly accessed. */
export interface MxFocusableProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MxFocusableConstructOnly = GObjectConstructOnly;

/** The contents of this structure are private and should only be accessed through the public API. */
export interface MxFrameProps extends MxWidgetProps, ClutterAnimatableProps, ClutterContainerProps, ClutterScriptableProps, MxStylableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MxFrameConstructOnly = MxWidgetConstructOnly | ClutterAnimatableConstructOnly | ClutterContainerConstructOnly | ClutterScriptableConstructOnly | MxStylableConstructOnly;

/** The contents of the this structure are private and should only be accessed through the public API. */
export interface MxGridProps extends MxWidgetProps, ClutterAnimatableProps, ClutterContainerProps, ClutterScriptableProps, MxFocusableProps, MxScrollableProps, MxStylableProps {
    'child-x-align'?: MxAlignNick | Mx.Align;
    'child-y-align'?: MxAlignNick | Mx.Align;
    'column-spacing'?: number;
    'homogenous-columns'?: boolean;
    'homogenous-rows'?: boolean;
    'line-alignment'?: MxAlignNick | Mx.Align;
    'max-stride'?: number;
    orientation?: MxOrientationNick | Mx.Orientation;
    'row-spacing'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MxGridConstructOnly = MxWidgetConstructOnly | ClutterAnimatableConstructOnly | ClutterContainerConstructOnly | ClutterScriptableConstructOnly | MxFocusableConstructOnly | MxScrollableConstructOnly | MxStylableConstructOnly;

/** The contents of this structure are private and should only be accessed through the public API. */
export interface MxIconProps extends MxWidgetProps, ClutterAnimatableProps, ClutterContainerProps, ClutterScriptableProps, MxStylableProps {
    'icon-name'?: string;
    'icon-size'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MxIconConstructOnly = MxWidgetConstructOnly | ClutterAnimatableConstructOnly | ClutterContainerConstructOnly | ClutterScriptableConstructOnly | MxStylableConstructOnly;

/** The contents of this structure are private and should only be accessed through the public API. */
export interface MxIconThemeProps extends GObjectProps {
    'theme-name'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MxIconThemeConstructOnly = GObjectConstructOnly;

/** The contents of this structure are private and should only be accessed through the public API. */
export interface MxImageProps extends MxWidgetProps, ClutterAnimatableProps, ClutterContainerProps, ClutterScriptableProps, MxStylableProps {
    'allow-upscale'?: boolean;
    filename?: string;
    'image-rotation'?: number;
    'load-async'?: boolean;
    'scale-height-threshold'?: number;
    'scale-mode'?: MxImageScaleModeNick | Mx.ImageScaleMode;
    'scale-width-threshold'?: number;
    'transition-duration'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MxImageConstructOnly = MxWidgetConstructOnly | ClutterAnimatableConstructOnly | ClutterContainerConstructOnly | ClutterScriptableConstructOnly | MxStylableConstructOnly;

/** The contents of the this structure are private and should only be accessed through the public API. */
export interface MxItemViewProps extends MxGridProps, ClutterAnimatableProps, ClutterContainerProps, ClutterScriptableProps, MxFocusableProps, MxScrollableProps, MxStylableProps {
    factory?: GObject.Object;
    'item-type'?: GObject.GType;
    model?: Clutter.Model;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MxItemViewConstructOnly = MxGridConstructOnly | ClutterAnimatableConstructOnly | ClutterContainerConstructOnly | ClutterScriptableConstructOnly | MxFocusableConstructOnly | MxScrollableConstructOnly | MxStylableConstructOnly;

/** The contents of this structure is private and should only be accessed using the provided API. */
export interface MxKineticScrollViewProps extends MxWidgetProps, ClutterAnimatableProps, ClutterContainerProps, ClutterScriptableProps, MxFocusableProps, MxScrollableProps, MxStylableProps {
    'acceleration-factor'?: number;
    'clamp-duration'?: number;
    'clamp-mode'?: bigint | number;
    'clamp-to-center'?: boolean;
    deceleration?: number;
    'mouse-button'?: number;
    overshoot?: number;
    'scroll-policy'?: MxScrollPolicyNick | Mx.ScrollPolicy;
    'snap-on-page'?: boolean;
    'use-captured'?: boolean;
    'use-grab'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MxKineticScrollViewConstructOnly = MxWidgetConstructOnly | ClutterAnimatableConstructOnly | ClutterContainerConstructOnly | ClutterScriptableConstructOnly | MxFocusableConstructOnly | MxScrollableConstructOnly | MxStylableConstructOnly;

/** The contents of this structure is private and should only be accessed using the provided API. */
export interface MxLabelProps extends Omit<MxWidgetProps, 'x-align' | 'y-align'>, ClutterAnimatableProps, ClutterContainerProps, ClutterScriptableProps, MxStylableProps {
    'fade-out'?: boolean;
    /**
     * Whether to wrap the lines of #MxLabel:text if the contents exceed the available allocation.
     * @since 1.2
     */
    'line-wrap'?: boolean;
    /**
     * Show a tooltip when there is not enough space to display the text.
     * @since 1.4
     */
    'show-tooltip'?: boolean;
    text?: string;
    'use-markup'?: boolean;
    'x-align'?: MxAlignNick | Mx.Align;
    'y-align'?: MxAlignNick | Mx.Align;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MxLabelConstructOnly = MxWidgetConstructOnly | ClutterAnimatableConstructOnly | ClutterContainerConstructOnly | ClutterScriptableConstructOnly | MxStylableConstructOnly;

/** The contents of the this structure are private and should only be accessed through the public API. */
export interface MxListViewProps extends MxBoxLayoutProps, ClutterAnimatableProps, ClutterContainerProps, ClutterScriptableProps, MxFocusableProps, MxScrollableProps, MxStylableProps {
    factory?: GObject.Object;
    'item-type'?: GObject.GType;
    model?: Clutter.Model;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MxListViewConstructOnly = MxBoxLayoutConstructOnly | ClutterAnimatableConstructOnly | ClutterContainerConstructOnly | ClutterScriptableConstructOnly | MxFocusableConstructOnly | MxScrollableConstructOnly | MxStylableConstructOnly;

/** The contents of this structure are private and should only be accessed through the public API. */
export interface MxMenuProps extends MxFloatingWidgetProps, ClutterAnimatableProps, ClutterContainerProps, ClutterScriptableProps, MxFocusableProps, MxStylableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MxMenuConstructOnly = MxFloatingWidgetConstructOnly | ClutterAnimatableConstructOnly | ClutterContainerConstructOnly | ClutterScriptableConstructOnly | MxFocusableConstructOnly | MxStylableConstructOnly;

/** The contents of this structure is private and should only be accessed using the provided API. */
export interface MxNotebookProps extends MxWidgetProps, ClutterAnimatableProps, ClutterContainerProps, ClutterScriptableProps, MxFocusableProps, MxStylableProps {
    'current-page'?: Clutter.Actor;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MxNotebookConstructOnly = MxWidgetConstructOnly | ClutterAnimatableConstructOnly | ClutterContainerConstructOnly | ClutterScriptableConstructOnly | MxFocusableConstructOnly | MxStylableConstructOnly;

export interface MxPagerProps extends MxStackProps, ClutterAnimatableProps, ClutterContainerProps, ClutterScriptableProps, MxFocusableProps, MxStylableProps {
    'edge-previews'?: boolean;
    'page-actor'?: Clutter.Actor;
    'page-num'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MxPagerConstructOnly = MxStackConstructOnly | ClutterAnimatableConstructOnly | ClutterContainerConstructOnly | ClutterScriptableConstructOnly | MxFocusableConstructOnly | MxStylableConstructOnly;

/** The contents of this structure is private and should only be accessed using the provided API. */
export interface MxPathBarProps extends MxWidgetProps, ClutterAnimatableProps, ClutterContainerProps, ClutterScriptableProps, MxFocusableProps, MxStylableProps {
    'clear-on-change'?: boolean;
    editable?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MxPathBarConstructOnly = MxWidgetConstructOnly | ClutterAnimatableConstructOnly | ClutterContainerConstructOnly | ClutterScriptableConstructOnly | MxFocusableConstructOnly | MxStylableConstructOnly;

/** The contents of this structure are private and should only be accessed through the public API. */
export interface MxProgressBarProps extends MxWidgetProps, ClutterAnimatableProps, ClutterContainerProps, ClutterScriptableProps, MxStylableProps {
    progress?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MxProgressBarConstructOnly = MxWidgetConstructOnly | ClutterAnimatableConstructOnly | ClutterContainerConstructOnly | ClutterScriptableConstructOnly | MxStylableConstructOnly;

/** The contents of this structure are private and should only be accessed through the public API. */
export interface MxScrollBarProps extends MxWidgetProps, ClutterAnimatableProps, ClutterContainerProps, ClutterScriptableProps, MxStylableProps {
    adjustment?: Mx.Adjustment;
    orientation?: MxOrientationNick | Mx.Orientation;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MxScrollBarConstructOnly = MxWidgetConstructOnly | ClutterAnimatableConstructOnly | ClutterContainerConstructOnly | ClutterScriptableConstructOnly | MxStylableConstructOnly;

/** The contents of this structure are private and should only be accessed through the public API. */
export interface MxScrollViewProps extends MxWidgetProps, ClutterAnimatableProps, ClutterContainerProps, ClutterScriptableProps, MxStylableProps {
    'enable-mouse-scrolling'?: boolean;
    'scroll-policy'?: MxScrollPolicyNick | Mx.ScrollPolicy;
    'scroll-visibility'?: MxScrollPolicyNick | Mx.ScrollPolicy;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MxScrollViewConstructOnly = MxWidgetConstructOnly | ClutterAnimatableConstructOnly | ClutterContainerConstructOnly | ClutterScriptableConstructOnly | MxStylableConstructOnly;

/** This is an opaque structure whose members cannot be directly accessed. */
export interface MxScrollableProps extends GObjectProps {
    'horizontal-adjustment'?: Mx.Adjustment;
    'vertical-adjustment'?: Mx.Adjustment;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MxScrollableConstructOnly = GObjectConstructOnly;

export interface MxSettingsProps extends GObjectProps {
    'drag-threshold'?: number;
    'font-name'?: string;
    'icon-theme'?: string;
    'long-press-timeout'?: number;
    'small-screen'?: boolean;
    'touch-mode'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MxSettingsConstructOnly = GObjectConstructOnly;

/** The contents of this structure are private and should only be accessed through the public API. */
export interface MxSliderProps extends MxWidgetProps, ClutterAnimatableProps, ClutterContainerProps, ClutterScriptableProps, MxFocusableProps, MxStylableProps {
    'buffer-value'?: number;
    value?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MxSliderConstructOnly = MxWidgetConstructOnly | ClutterAnimatableConstructOnly | ClutterContainerConstructOnly | ClutterScriptableConstructOnly | MxFocusableConstructOnly | MxStylableConstructOnly;

/** The contents of this structure are private and should only be accessed through the public API. */
export interface MxSpinnerProps extends MxWidgetProps, ClutterAnimatableProps, ClutterContainerProps, ClutterScriptableProps, MxStylableProps {
    animating?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MxSpinnerConstructOnly = MxWidgetConstructOnly | ClutterAnimatableConstructOnly | ClutterContainerConstructOnly | ClutterScriptableConstructOnly | MxStylableConstructOnly;

/** The contents of this structure are private and should only be accessed through the public API. */
export interface MxStackProps extends MxWidgetProps, ClutterAnimatableProps, ClutterContainerProps, ClutterScriptableProps, MxFocusableProps, MxStylableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MxStackConstructOnly = MxWidgetConstructOnly | ClutterAnimatableConstructOnly | ClutterContainerConstructOnly | ClutterScriptableConstructOnly | MxFocusableConstructOnly | MxStylableConstructOnly;

/** The contents of this structure are private and should only be accessed through the public API. */
export interface MxStackChildProps extends ClutterChildMetaProps {
    crop?: boolean;
    fit?: boolean;
    'x-align'?: MxAlignNick | Mx.Align;
    'x-fill'?: boolean;
    'y-align'?: MxAlignNick | Mx.Align;
    'y-fill'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MxStackChildConstructOnly = ClutterChildMetaConstructOnly;

/** This is an opaque structure whose members cannot be directly accessed. */
export interface MxStylableProps extends GObjectProps {
    style?: Mx.Style;
    'style-class'?: string;
    'style-pseudo-class'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MxStylableConstructOnly = GObjectConstructOnly;

/** The contents of this structure is private and should only be accessed using the provided API. */
export interface MxStyleProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MxStyleConstructOnly = GObjectConstructOnly;

/** The contents of this structure is private and should only be accessed using the provided API. */
export interface MxTableProps extends MxWidgetProps, ClutterAnimatableProps, ClutterContainerProps, ClutterScriptableProps, MxFocusableProps, MxStylableProps {
    'column-spacing'?: number;
    'row-spacing'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MxTableConstructOnly = MxWidgetConstructOnly | ClutterAnimatableConstructOnly | ClutterContainerConstructOnly | ClutterScriptableConstructOnly | MxFocusableConstructOnly | MxStylableConstructOnly;

/** The contents of this structure is private and should only be accessed using the provided API. */
export interface MxTableChildProps extends ClutterChildMetaProps {
    column?: number;
    'column-span'?: number;
    row?: number;
    'row-span'?: number;
    'x-align'?: MxAlignNick | Mx.Align;
    'x-expand'?: boolean;
    'x-fill'?: boolean;
    'y-align'?: MxAlignNick | Mx.Align;
    'y-expand'?: boolean;
    'y-fill'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MxTableChildConstructOnly = ClutterChildMetaConstructOnly;

/** The contents of this structure are private and should only be accessed through the public API. */
export interface MxTextureCacheProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MxTextureCacheConstructOnly = GObjectConstructOnly;

/** The contents of this structure are private and should only be accessed through the public API. */
export interface MxTextureFrameProps extends ClutterActorProps, ClutterAnimatableProps, ClutterContainerProps, ClutterScriptableProps {
    bottom?: number;
    left?: number;
    'parent-texture'?: Clutter.Texture;
    right?: number;
    top?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MxTextureFrameConstructOnly = ClutterActorConstructOnly | ClutterAnimatableConstructOnly | ClutterContainerConstructOnly | ClutterScriptableConstructOnly;

/** The contents of this structure is private and should only be accessed using the provided API. */
export interface MxToggleProps extends MxWidgetProps, ClutterAnimatableProps, ClutterContainerProps, ClutterScriptableProps, MxFocusableProps, MxStylableProps {
    active?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MxToggleConstructOnly = MxWidgetConstructOnly | ClutterAnimatableConstructOnly | ClutterContainerConstructOnly | ClutterScriptableConstructOnly | MxFocusableConstructOnly | MxStylableConstructOnly;

/** The contents of this structure are private and should only be accessed through the public API. */
export interface MxToolbarProps extends MxWidgetProps, ClutterAnimatableProps, ClutterContainerProps, ClutterScriptableProps, MxFocusableProps, MxStylableProps {
    'has-close-button'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MxToolbarConstructOnly = MxWidgetConstructOnly | ClutterAnimatableConstructOnly | ClutterContainerConstructOnly | ClutterScriptableConstructOnly | MxFocusableConstructOnly | MxStylableConstructOnly;

/** The contents of this structure is private and should only be accessed using the provided API. */
export interface MxTooltipProps extends MxFloatingWidgetProps, ClutterAnimatableProps, ClutterContainerProps, ClutterScriptableProps, MxStylableProps {
    text?: string;
    'tip-area'?: Clutter.Geometry;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MxTooltipConstructOnly = MxFloatingWidgetConstructOnly | ClutterAnimatableConstructOnly | ClutterContainerConstructOnly | ClutterScriptableConstructOnly | MxStylableConstructOnly;

/** The contents of this structure are private and should only be accessed through the public API. */
export interface MxViewportProps extends MxBinProps, ClutterAnimatableProps, ClutterContainerProps, ClutterScriptableProps, MxFocusableProps, MxScrollableProps, MxStylableProps {
    'sync-adjustments'?: boolean;
    'x-origin'?: number;
    'y-origin'?: number;
    'z-origin'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MxViewportConstructOnly = MxBinConstructOnly | ClutterAnimatableConstructOnly | ClutterContainerConstructOnly | ClutterScriptableConstructOnly | MxFocusableConstructOnly | MxScrollableConstructOnly | MxStylableConstructOnly;

/** Base class for stylable actors. */
export interface MxWidgetProps extends ClutterActorProps, ClutterAnimatableProps, ClutterContainerProps, ClutterScriptableProps, MxStylableProps {
    disabled?: boolean;
    /** #MxMenu associated with the widget. */
    menu?: Mx.Menu;
    'tooltip-delay'?: number;
    /** text displayed on the tooltip */
    'tooltip-text'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MxWidgetConstructOnly = ClutterActorConstructOnly | ClutterAnimatableConstructOnly | ClutterContainerConstructOnly | ClutterScriptableConstructOnly | MxStylableConstructOnly;

/** The contents of this structure is private and should only be accessed using the provided API. */
export interface MxWindowProps extends GObjectProps {
    child?: Clutter.Actor;
    'clutter-stage'?: Clutter.Stage;
    fullscreen?: boolean;
    'has-toolbar'?: boolean;
    'icon-cogl-texture'?: string;
    'icon-name'?: string;
    'small-screen'?: boolean;
    title?: string;
    toolbar?: Mx.Toolbar;
    'window-rotation'?: MxWindowRotationNick | Mx.WindowRotation;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type MxWindowConstructOnly = GObjectConstructOnly | 'clutter-stage';

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
