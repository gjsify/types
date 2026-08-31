/**
 * The GIR-derived widget VOCABULARY for Handy-0.0.
 *
 * GENERATED — do not edit. Provenance: Handy-0.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface
 *
 * 22 concrete widgets, 23 declarations, 10 enum nick unions, 12 slot candidates.
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

import type Gtk from '@girs/gtk-3.0';
import type Handy from './handy-0.0.js';
import type Pango from '@girs/pango-1.0';
import type { GtkActionableConstructOnly, GtkActionableProps, GtkActivatableConstructOnly, GtkActivatableProps, GtkBinConstructOnly, GtkBinProps, GtkBoxConstructOnly, GtkBoxProps, GtkBuildableConstructOnly, GtkBuildableProps, GtkButtonConstructOnly, GtkButtonProps, GtkContainerConstructOnly, GtkContainerProps, GtkDialogConstructOnly, GtkDialogProps, GtkDrawingAreaConstructOnly, GtkDrawingAreaProps, GtkEventBoxConstructOnly, GtkEventBoxProps, GtkGridConstructOnly, GtkGridProps, GtkListBoxRowConstructOnly, GtkListBoxRowProps, GtkOrientableConstructOnly, GtkOrientableProps, GtkReliefStyleNick, GtkScrolledWindowConstructOnly, GtkScrolledWindowProps, GtkWidgetConstructOnly, GtkWidgetProps, GtkWindowConstructOnly, GtkWindowProps } from '@girs/gtk-3.0/surface';

// ---------------------------------------------------------------------------
// Enum nicks — the string vocabulary GObject registered, from GIR's `glib:nick`.
//
// Not derived from the member name. Substituting underscores for dashes is not a law:
// some nicks keep an underscore the substitution would have replaced, and only the
// attribute knows which. Gtk-4.0 and Adw-1 contradict no derivation at all, which is
// how a derived nick passes review and breaks elsewhere.
// Re-measure with `scripts/check-nick-derivation.mjs` in ts-for-gir.
// ---------------------------------------------------------------------------

export type HdyArrowsDirectionNick = 'up' | 'down' | 'left' | 'right';
export type HdyCenteringPolicyNick = 'loose' | 'strict';
export type HdyFoldNick = 'unfolded' | 'folded';
export type HdyLeafletChildTransitionTypeNick = 'none' | 'crossfade' | 'slide' | 'over' | 'under';
export type HdyLeafletModeTransitionTypeNick = 'none' | 'slide';
export type HdyLeafletTransitionTypeNick = 'none' | 'slide' | 'over' | 'under';
export type HdyPaginatorIndicatorStyleNick = 'none' | 'dots' | 'lines';
export type HdySqueezerTransitionTypeNick = 'none' | 'crossfade';
export type HdyViewSwitcherPolicyNick = 'auto' | 'narrow' | 'wide';
export type PangoEllipsizeModeNick = 'none' | 'start' | 'middle' | 'end';

// ---------------------------------------------------------------------------
// Property surfaces — one interface per GIR DECLARATION, mirroring GIR's own
// inheritance rather than flattening per widget.
//
// The interfaces are load-bearing, not tidiness: `GtkBox` declares four properties
// of its own and `orientation` is not among them — it lives on `Gtk.Orientable`,
// because GObject installs interface properties on the implementor at runtime while
// GIR keeps them once, on the interface.
// ---------------------------------------------------------------------------

export interface HdyActionRowProps extends Omit<HdyPreferencesRowProps, 'title'>, GtkActionableProps, GtkBuildableProps {
    /**
     * The activatable widget for this row.
     * @since 0.0.7
     */
    'activatable-widget'?: Gtk.Widget | null;
    /**
     * The icon name for this row.
     * @since 0.0.6
     */
    'icon-name'?: string;
    /**
     * The subtitle for this row.
     * @since 0.0.6
     */
    subtitle?: string;
    /**
     * The title for this row.
     * @since 0.0.6
     */
    title?: string;
    /**
     * Whether an embedded underline in the text of the title and subtitle labels indicates a mnemonic.
     * @since 0.0.6
     */
    'use-underline'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type HdyActionRowConstructOnly = HdyPreferencesRowConstructOnly | GtkActionableConstructOnly | GtkBuildableConstructOnly;

export interface HdyArrowsProps extends GtkDrawingAreaProps, GtkBuildableProps {
    count?: number;
    direction?: HdyArrowsDirectionNick | Handy.ArrowsDirection;
    duration?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type HdyArrowsConstructOnly = GtkDrawingAreaConstructOnly | GtkBuildableConstructOnly;

export interface HdyColumnProps extends GtkBinProps, GtkBuildableProps {
    'linear-growth-width'?: number;
    'maximum-width'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type HdyColumnConstructOnly = GtkBinConstructOnly | GtkBuildableConstructOnly;

export interface HdyComboRowProps extends HdyActionRowProps, GtkActionableProps, GtkBuildableProps {
    /**
     * The index of the selected item in its #GListModel.
     * @since 0.0.7
     */
    'selected-index'?: number;
    /**
     * %TRUE to set the current value as the subtitle.
     * @since 0.0.10
     */
    'use-subtitle'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type HdyComboRowConstructOnly = HdyActionRowConstructOnly | GtkActionableConstructOnly | GtkBuildableConstructOnly;

export interface HdyDialerProps extends GtkBinProps, GtkBuildableProps {
    'column-spacing'?: number;
    number?: string;
    /** The relief style of the edges of the main buttons. */
    relief?: GtkReliefStyleNick | Gtk.ReliefStyle;
    'row-spacing'?: number;
    'show-action-buttons'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type HdyDialerConstructOnly = GtkBinConstructOnly | GtkBuildableConstructOnly;

export interface HdyDialerButtonProps extends GtkButtonProps, GtkActionableProps, GtkActivatableProps, GtkBuildableProps {
    symbols?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type HdyDialerButtonConstructOnly = GtkButtonConstructOnly | GtkActionableConstructOnly | GtkActivatableConstructOnly | GtkBuildableConstructOnly;

export interface HdyDialerCycleButtonProps extends HdyDialerButtonProps, GtkActionableProps, GtkActivatableProps, GtkBuildableProps {
    'cycle-timeout'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type HdyDialerCycleButtonConstructOnly = HdyDialerButtonConstructOnly | GtkActionableConstructOnly | GtkActivatableConstructOnly | GtkBuildableConstructOnly;

export interface HdyDialogProps extends GtkDialogProps, GtkBuildableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type HdyDialogConstructOnly = GtkDialogConstructOnly | GtkBuildableConstructOnly;

export interface HdyExpanderRowProps extends HdyActionRowProps, GtkActionableProps, GtkBuildableProps {
    /** %TRUE if the expansion is enabled. */
    'enable-expansion'?: boolean;
    /** %TRUE if the row is expanded. */
    expanded?: boolean;
    /** %TRUE if the switch enabling the expansion is visible. */
    'show-enable-switch'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type HdyExpanderRowConstructOnly = HdyActionRowConstructOnly | GtkActionableConstructOnly | GtkBuildableConstructOnly;

export interface HdyHeaderBarProps extends GtkContainerProps, GtkBuildableProps {
    'centering-policy'?: HdyCenteringPolicyNick | Handy.CenteringPolicy;
    'custom-title'?: Gtk.Widget | null;
    /**
     * The decoration layout for buttons.
     * @since 0.0.10
     */
    'decoration-layout'?: string;
    /**
     * Set to %TRUE if #HdyHeaderBar:decoration-layout is set.
     * @since 0.0.10
     */
    'decoration-layout-set'?: boolean;
    /**
     * If %TRUE, reserve space for a subtitle, even if none is currently set.
     * @since 0.0.10
     */
    'has-subtitle'?: boolean;
    'interpolate-size'?: boolean;
    /**
     * Whether to show window decorations.
     * @since 0.0.10
     */
    'show-close-button'?: boolean;
    spacing?: number;
    subtitle?: string | null;
    title?: string | null;
    'transition-duration'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type HdyHeaderBarConstructOnly = GtkContainerConstructOnly | GtkBuildableConstructOnly;

export interface HdyKeypadProps extends GtkGridProps, GtkBuildableProps, GtkOrientableProps {
    entry?: Gtk.Widget;
    'left-action'?: Gtk.Widget;
    'only-digits'?: boolean;
    'right-action'?: Gtk.Widget;
    'show-symbols'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type HdyKeypadConstructOnly = GtkGridConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

export interface HdyLeafletProps extends GtkContainerProps, GtkBuildableProps, GtkOrientableProps, HdySwipeableProps {
    /**
     * Whether or not @self allows switching to the previous child that has 'allow-visible' child property set to %TRUE via a swipe gesture.
     * @since 0.0.12
     */
    'can-swipe-back'?: boolean;
    /**
     * Whether or not @self allows switching to the next child that has 'allow-visible' child property set to %TRUE via a swipe gesture.
     * @since 0.0.12
     */
    'can-swipe-forward'?: boolean;
    'child-transition-duration'?: number;
    /** The type of animation used to transition between children */
    'child-transition-type'?: HdyLeafletChildTransitionTypeNick | Handy.LeafletChildTransitionType;
    'hhomogeneous-folded'?: boolean;
    'hhomogeneous-unfolded'?: boolean;
    'interpolate-size'?: boolean;
    'mode-transition-duration'?: number;
    /** The type of animation used to transition between mode */
    'mode-transition-type'?: HdyLeafletModeTransitionTypeNick | Handy.LeafletModeTransitionType;
    /**
     * The type of animation that will be used for transitions between modes and children.
     * @since 0.0.12
     */
    'transition-type'?: HdyLeafletTransitionTypeNick | Handy.LeafletTransitionType;
    'vhomogeneous-folded'?: boolean;
    'vhomogeneous-unfolded'?: boolean;
    'visible-child'?: Gtk.Widget;
    'visible-child-name'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type HdyLeafletConstructOnly = GtkContainerConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly | HdySwipeableConstructOnly;

export interface HdyPaginatorProps extends GtkEventBoxProps, GtkBuildableProps, GtkOrientableProps, HdySwipeableProps {
    /**
     * Sets whether the #HdyPaginator can be dragged with mouse pointer.
     * @since 0.0.12
     */
    'allow-mouse-drag'?: boolean;
    /**
     * Animation duration in milliseconds, used by hdy_paginator_scroll_to().
     * @since 0.0.11
     */
    'animation-duration'?: number;
    /**
     * Whether the #HdyPaginator is centering pages.
     * @since 0.0.11
     */
    'center-content'?: boolean;
    /**
     * Spacing between content and page indicators.
     * @since 0.0.11
     */
    'indicator-spacing'?: number;
    /**
     * The style of page indicators.
     * @since 0.0.11
     */
    'indicator-style'?: HdyPaginatorIndicatorStyleNick | Handy.PaginatorIndicatorStyle;
    /**
     * Whether @self can be navigated.
     * @since 0.0.11
     */
    interactive?: boolean;
    /**
     * Spacing between pages in pixels.
     * @since 0.0.11
     */
    spacing?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type HdyPaginatorConstructOnly = GtkEventBoxConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly | HdySwipeableConstructOnly;

export interface HdyPreferencesGroupProps extends GtkBoxProps, GtkBuildableProps, GtkOrientableProps {
    /**
     * The description for this group of preferences.
     * @since 0.0.10
     */
    description?: string;
    /**
     * The title for this group of preferences.
     * @since 0.0.10
     */
    title?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type HdyPreferencesGroupConstructOnly = GtkBoxConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

export interface HdyPreferencesPageProps extends GtkScrolledWindowProps, GtkBuildableProps {
    /**
     * The icon name for this page of preferences.
     * @since 0.0.10
     */
    'icon-name'?: string | null;
    /**
     * The title for this page of preferences.
     * @since 0.0.10
     */
    title?: string | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type HdyPreferencesPageConstructOnly = GtkScrolledWindowConstructOnly | GtkBuildableConstructOnly;

export interface HdyPreferencesRowProps extends GtkListBoxRowProps, GtkActionableProps, GtkBuildableProps {
    /**
     * The title of the preference represented by this row.
     * @since 0.0.10
     */
    title?: string | null;
    /**
     * Whether an embedded underline in the text of the title indicates a mnemonic.
     * @since 0.0.10
     */
    'use-underline'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type HdyPreferencesRowConstructOnly = GtkListBoxRowConstructOnly | GtkActionableConstructOnly | GtkBuildableConstructOnly;

export interface HdyPreferencesWindowProps extends GtkWindowProps, GtkBuildableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type HdyPreferencesWindowConstructOnly = GtkWindowConstructOnly | GtkBuildableConstructOnly;

export interface HdySearchBarProps extends GtkBinProps, GtkBuildableProps {
    /** Whether the search mode is on and the search bar shown. */
    'search-mode-enabled'?: boolean;
    /** Whether to show the close button in the toolbar. */
    'show-close-button'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type HdySearchBarConstructOnly = GtkBinConstructOnly | GtkBuildableConstructOnly;

export interface HdySqueezerProps extends GtkContainerProps, GtkBuildableProps, GtkOrientableProps {
    homogeneous?: boolean;
    'interpolate-size'?: boolean;
    'transition-duration'?: number;
    'transition-type'?: HdySqueezerTransitionTypeNick | Handy.SqueezerTransitionType;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type HdySqueezerConstructOnly = GtkContainerConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

export interface HdySwipeableProps extends GtkWidgetProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type HdySwipeableConstructOnly = GtkWidgetConstructOnly;

export interface HdyTitleBarProps extends GtkBinProps, GtkBuildableProps {
    'selection-mode'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type HdyTitleBarConstructOnly = GtkBinConstructOnly | GtkBuildableConstructOnly;

export interface HdyViewSwitcherProps extends GtkBoxProps, GtkBuildableProps, GtkOrientableProps {
    /**
     * Use the "icon-size" property to hint the icons to use, you almost certainly want to leave this as %GTK_ICON_SIZE_BUTTON.
     * @since 0.0.10
     */
    'icon-size'?: number;
    /**
     * The preferred place to ellipsize the string, if the narrow mode label does not have enough room to display the entire string, specified as a #PangoEllipsizeMode.
     * @since 0.0.10
     */
    'narrow-ellipsize'?: PangoEllipsizeModeNick | Pango.EllipsizeMode;
    /**
     * The #HdyViewSwitcherPolicy the view switcher should use to determine which mode to use.
     * @since 0.0.10
     */
    policy?: HdyViewSwitcherPolicyNick | Handy.ViewSwitcherPolicy;
    /**
     * The #GtkStack the view switcher controls.
     * @since 0.0.10
     */
    stack?: Gtk.Stack | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type HdyViewSwitcherConstructOnly = GtkBoxConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

export interface HdyViewSwitcherBarProps extends GtkBinProps, GtkBuildableProps {
    /**
     * Use the "icon-size" property to hint the icons to use, you almost certainly want to leave this as %GTK_ICON_SIZE_BUTTON.
     * @since 0.0.10
     */
    'icon-size'?: number;
    /**
     * The #HdyViewSwitcherPolicy the #HdyViewSwitcher should use to determine which mode to use.
     * @since 0.0.10
     */
    policy?: HdyViewSwitcherPolicyNick | Handy.ViewSwitcherPolicy;
    /**
     * Whether the bar should be revealed or hidden.
     * @since 0.0.10
     */
    reveal?: boolean;
    /**
     * The #GtkStack the #HdyViewSwitcher controls.
     * @since 0.0.10
     */
    stack?: Gtk.Stack | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type HdyViewSwitcherBarConstructOnly = GtkBinConstructOnly | GtkBuildableConstructOnly;

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
    HdyActionRow: {
        class: Handy.ActionRow;
        props: HdyActionRowProps;
        signals: Handy.ActionRow.SignalSignatures;
        constructOnly: HdyActionRowConstructOnly;
        slotCandidates: {
        'action': 'add_action';
        'activatable': 'set_activatable_widget';
        'prefix': 'add_prefix';
        };
    };
    HdyArrows: {
        class: Handy.Arrows;
        props: HdyArrowsProps;
        signals: Handy.Arrows.SignalSignatures;
        constructOnly: HdyArrowsConstructOnly;
        slotCandidates: {};
    };
    HdyColumn: {
        class: Handy.Column;
        props: HdyColumnProps;
        signals: Handy.Column.SignalSignatures;
        constructOnly: HdyColumnConstructOnly;
        slotCandidates: {};
    };
    HdyComboRow: {
        class: Handy.ComboRow;
        props: HdyComboRowProps;
        signals: Handy.ComboRow.SignalSignatures;
        constructOnly: HdyComboRowConstructOnly;
        slotCandidates: {};
    };
    HdyDialer: {
        class: Handy.Dialer;
        props: HdyDialerProps;
        signals: Handy.Dialer.SignalSignatures;
        constructOnly: HdyDialerConstructOnly;
        slotCandidates: {};
    };
    HdyDialerButton: {
        class: Handy.DialerButton;
        props: HdyDialerButtonProps;
        signals: Handy.DialerButton.SignalSignatures;
        constructOnly: HdyDialerButtonConstructOnly;
        slotCandidates: {};
    };
    HdyDialerCycleButton: {
        class: Handy.DialerCycleButton;
        props: HdyDialerCycleButtonProps;
        signals: Handy.DialerCycleButton.SignalSignatures;
        constructOnly: HdyDialerCycleButtonConstructOnly;
        slotCandidates: {};
    };
    HdyDialog: {
        class: Handy.Dialog;
        props: HdyDialogProps;
        signals: Handy.Dialog.SignalSignatures;
        constructOnly: HdyDialogConstructOnly;
        slotCandidates: {};
    };
    HdyExpanderRow: {
        class: Handy.ExpanderRow;
        props: HdyExpanderRowProps;
        signals: Handy.ExpanderRow.SignalSignatures;
        constructOnly: HdyExpanderRowConstructOnly;
        slotCandidates: {};
    };
    HdyHeaderBar: {
        class: Handy.HeaderBar;
        props: HdyHeaderBarProps;
        signals: Handy.HeaderBar.SignalSignatures;
        constructOnly: HdyHeaderBarConstructOnly;
        slotCandidates: {
        'custom-title': 'set_custom_title';
        'end': 'pack_end';
        'start': 'pack_start';
        };
    };
    HdyKeypad: {
        class: Handy.Keypad;
        props: HdyKeypadProps;
        signals: Handy.Keypad.SignalSignatures;
        constructOnly: HdyKeypadConstructOnly;
        slotCandidates: {
        'entry': 'set_entry';
        'left-action': 'set_left_action';
        'right-action': 'set_right_action';
        };
    };
    HdyLeaflet: {
        class: Handy.Leaflet;
        props: HdyLeafletProps;
        signals: Handy.Leaflet.SignalSignatures;
        constructOnly: HdyLeafletConstructOnly;
        slotCandidates: {
        'visible-child': 'set_visible_child';
        };
    };
    HdyPaginator: {
        class: Handy.Paginator;
        props: HdyPaginatorProps;
        signals: Handy.Paginator.SignalSignatures;
        constructOnly: HdyPaginatorConstructOnly;
        slotCandidates: {};
    };
    HdyPreferencesGroup: {
        class: Handy.PreferencesGroup;
        props: HdyPreferencesGroupProps;
        signals: Handy.PreferencesGroup.SignalSignatures;
        constructOnly: HdyPreferencesGroupConstructOnly;
        slotCandidates: {};
    };
    HdyPreferencesPage: {
        class: Handy.PreferencesPage;
        props: HdyPreferencesPageProps;
        signals: Handy.PreferencesPage.SignalSignatures;
        constructOnly: HdyPreferencesPageConstructOnly;
        slotCandidates: {};
    };
    HdyPreferencesRow: {
        class: Handy.PreferencesRow;
        props: HdyPreferencesRowProps;
        signals: Handy.PreferencesRow.SignalSignatures;
        constructOnly: HdyPreferencesRowConstructOnly;
        slotCandidates: {};
    };
    HdyPreferencesWindow: {
        class: Handy.PreferencesWindow;
        props: HdyPreferencesWindowProps;
        signals: Handy.PreferencesWindow.SignalSignatures;
        constructOnly: HdyPreferencesWindowConstructOnly;
        slotCandidates: {};
    };
    HdySearchBar: {
        class: Handy.SearchBar;
        props: HdySearchBarProps;
        signals: Handy.SearchBar.SignalSignatures;
        constructOnly: HdySearchBarConstructOnly;
        slotCandidates: {};
    };
    HdySqueezer: {
        class: Handy.Squeezer;
        props: HdySqueezerProps;
        signals: Handy.Squeezer.SignalSignatures;
        constructOnly: HdySqueezerConstructOnly;
        slotCandidates: {};
    };
    HdyTitleBar: {
        class: Handy.TitleBar;
        props: HdyTitleBarProps;
        signals: Handy.TitleBar.SignalSignatures;
        constructOnly: HdyTitleBarConstructOnly;
        slotCandidates: {};
    };
    HdyViewSwitcher: {
        class: Handy.ViewSwitcher;
        props: HdyViewSwitcherProps;
        signals: Handy.ViewSwitcher.SignalSignatures;
        constructOnly: HdyViewSwitcherConstructOnly;
        slotCandidates: {
        'stack': 'set_stack';
        };
    };
    HdyViewSwitcherBar: {
        class: Handy.ViewSwitcherBar;
        props: HdyViewSwitcherBarProps;
        signals: Handy.ViewSwitcherBar.SignalSignatures;
        constructOnly: HdyViewSwitcherBarConstructOnly;
        slotCandidates: {
        'stack': 'set_stack';
        };
    };
}

/** Every GType this namespace can create. A consumer derives its own tag map. */
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
export const SURFACE_PROVENANCE: string;

/** Declaration GType -> its own settable properties, as GObject registered them. */
export const OWN_PROPS: Readonly<Record<string, readonly string[]>>;

/** Widget GType -> its own signals. */
export const OWN_SIGNALS: Readonly<Record<string, readonly string[]>>;

/** Widget GType -> every declaration its members come from, self first. */
export const DECLS: Readonly<Record<string, readonly string[]>>;

/** The GTypes in `DECLS` that hold a widget without being one — see `ChildHolders`. */
export const CHILD_HOLDERS: readonly string[];

/** Enum GType -> the nicks this surface offers. */
export const ENUM_NICKS: Readonly<Record<string, readonly string[]>>;

/** Widget GType -> slot name -> the method that may adopt a child there. */
export const SLOT_CANDIDATES: Readonly<Record<string, Readonly<Record<string, string>>>>;

/**
 * `Type.property` -> the release that introduced it.
 *
 * What keeps a runtime cross-check honest across a version gap without an
 * allowlist: a member the installed library lacks is a defect UNLESS the version
 * here is newer than the one running.
 */
export const SINCE: Readonly<Record<string, string>>;
