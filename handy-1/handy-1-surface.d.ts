/**
 * The GIR-derived widget VOCABULARY for Handy-1.
 *
 * GENERATED — do not edit. Provenance: Handy-1 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface Gio.ActionGroup Gio.ActionMap
 *
 * 29 concrete widgets, 30 declarations, 11 enum nick unions, 24 slot candidates.
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

import type Gio from '@girs/gio-2.0';
import type Gtk from '@girs/gtk-3.0';
import type Handy from './handy-1.js';
import type Pango from '@girs/pango-1.0';
import type { GtkActionableConstructOnly, GtkActionableProps, GtkApplicationWindowConstructOnly, GtkApplicationWindowProps, GtkBinConstructOnly, GtkBinProps, GtkBuildableConstructOnly, GtkBuildableProps, GtkContainerConstructOnly, GtkContainerProps, GtkDrawingAreaConstructOnly, GtkDrawingAreaProps, GtkEventBoxConstructOnly, GtkEventBoxProps, GtkListBoxRowConstructOnly, GtkListBoxRowProps, GtkOrientableConstructOnly, GtkOrientableProps, GtkPackTypeNick, GtkWidgetConstructOnly, GtkWidgetProps, GtkWindowConstructOnly, GtkWindowProps } from '@girs/gtk-3.0/surface';

// ---------------------------------------------------------------------------
// Enum nicks — the string vocabulary GObject registered, from GIR's `glib:nick`.
//
// Not derived from the member name. Substituting underscores for dashes is not a law:
// some nicks keep an underscore the substitution would have replaced, and only the
// attribute knows which. Gtk-4.0 and Adw-1 contradict no derivation at all, which is
// how a derived nick passes review and breaks elsewhere.
// Re-measure with `scripts/check-nick-derivation.mjs` in ts-for-gir.
// ---------------------------------------------------------------------------

export type HdyCenteringPolicyNick = 'loose' | 'strict';
export type HdyColorSchemeNick = 'default' | 'force-light' | 'prefer-light' | 'prefer-dark' | 'force-dark';
export type HdyDeckTransitionTypeNick = 'over' | 'under' | 'slide';
export type HdyFlapFoldPolicyNick = 'never' | 'always' | 'auto';
export type HdyFlapTransitionTypeNick = 'over' | 'under' | 'slide';
export type HdyHeaderGroupChildTypeNick = 'header-bar' | 'gtk-header-bar' | 'header-group';
export type HdyLeafletTransitionTypeNick = 'over' | 'under' | 'slide';
export type HdyNavigationDirectionNick = 'back' | 'forward';
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

/** A [class@Gtk.ListBoxRow] used to present actions. */
export interface HdyActionRowProps extends HdyPreferencesRowProps, GtkActionableProps, GtkBuildableProps {
    /**
     * The activatable widget for this row.
     * @since 1.0
     */
    'activatable-widget'?: Gtk.Widget | null;
    /**
     * The icon name for this row.
     * @since 1.0
     */
    'icon-name'?: string;
    /**
     * The subtitle for this row.
     * @since 1.0
     */
    subtitle?: string | null;
    /**
     * The number of lines at the end of which the subtitle label will be ellipsized.
     * @since 1.2
     */
    'subtitle-lines'?: number;
    /**
     * The number of lines at the end of which the title label will be ellipsized.
     * @since 1.2
     */
    'title-lines'?: number;
    /**
     * Whether embedded underlines in the title or subtitle indicates a mnemonic.
     * @since 1.0
     */
    'use-underline'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type HdyActionRowConstructOnly = HdyPreferencesRowConstructOnly | GtkActionableConstructOnly | GtkBuildableConstructOnly;

/** A freeform application window. */
export interface HdyApplicationWindowProps extends GtkApplicationWindowProps, GtkBuildableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type HdyApplicationWindowConstructOnly = GtkApplicationWindowConstructOnly | GtkBuildableConstructOnly;

/** A widget displaying an image, with a generated fallback. */
export interface HdyAvatarProps extends GtkDrawingAreaProps, GtkBuildableProps {
    /**
     * The name of an icon to use as a fallback.
     * @since 1.0
     */
    'icon-name'?: string | null;
    /**
     * A [iface@Gio.LoadableIcon] used to load the avatar.
     * @since 1.2
     */
    'loadable-icon'?: Gio.LoadableIcon | null;
    /**
     * Whether to show the initials or the fallback icon on the generated avatar.
     * @since 1.0
     */
    'show-initials'?: boolean;
    /**
     * The avatar size of the avatar.
     * @since 1.0
     */
    size?: number;
    /**
     * Sets the text used to generate the fallback initials and color.
     * @since 1.0
     */
    text?: string | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type HdyAvatarConstructOnly = GtkDrawingAreaConstructOnly | GtkBuildableConstructOnly;

/** A paginated scrolling widget. */
export interface HdyCarouselProps extends GtkEventBoxProps, GtkBuildableProps, GtkOrientableProps, HdySwipeableProps {
    /**
     * Whether to allow swiping for more than one page at a time.
     * @since 1.2
     */
    'allow-long-swipes'?: boolean;
    /**
     * Sets whether the [class@Carousel] can be dragged with mouse pointer.
     * @since 1.0
     */
    'allow-mouse-drag'?: boolean;
    /**
     * Whether the widget will respond to scroll wheel events.
     * @since 1.4
     */
    'allow-scroll-wheel'?: boolean;
    /**
     * Animation duration used by [method@Carousel.scroll_to], in milliseconds.
     * @since 1.0
     */
    'animation-duration'?: number;
    /**
     * Whether the carousel can be navigated.
     * @since 1.0
     */
    interactive?: boolean;
    /**
     * Page reveal duration, in milliseconds.
     * @since 1.0
     */
    'reveal-duration'?: number;
    /**
     * Spacing between pages in pixels.
     * @since 1.0
     */
    spacing?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type HdyCarouselConstructOnly = GtkEventBoxConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly | HdySwipeableConstructOnly;

/** A dots indicator for [class@Carousel]. */
export interface HdyCarouselIndicatorDotsProps extends GtkDrawingAreaProps, GtkBuildableProps, GtkOrientableProps {
    /**
     * The [class@Carousel] the indicator uses.
     * @since 1.0
     */
    carousel?: Handy.Carousel | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type HdyCarouselIndicatorDotsConstructOnly = GtkDrawingAreaConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

/** A lines indicator for [class@Carousel]. */
export interface HdyCarouselIndicatorLinesProps extends GtkDrawingAreaProps, GtkBuildableProps, GtkOrientableProps {
    /**
     * The displayed carousel.
     * @since 1.0
     */
    carousel?: Handy.Carousel | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type HdyCarouselIndicatorLinesConstructOnly = GtkDrawingAreaConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

/** A widget constraining its child to a given size. */
export interface HdyClampProps extends GtkBinProps, GtkBuildableProps, GtkOrientableProps {
    /**
     * The maximum size to allocate the children.
     * @since 1.0
     */
    'maximum-size'?: number;
    /**
     * The size above which the child is clamped.
     * @since 1.0
     */
    'tightening-threshold'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type HdyClampConstructOnly = GtkBinConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

/** A [class@Gtk.ListBoxRow] used to choose from a list of items. */
export interface HdyComboRowProps extends HdyActionRowProps, GtkActionableProps, GtkBuildableProps {
    /**
     * The index of the selected item in its [iface@Gio.ListModel].
     * @since 1.0
     */
    'selected-index'?: number;
    /**
     * Whether to use the current value as the subtitle.
     * @since 1.0
     */
    'use-subtitle'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type HdyComboRowConstructOnly = HdyActionRowConstructOnly | GtkActionableConstructOnly | GtkBuildableConstructOnly;

/** A swipeable widget showing one of the visible children at a time. */
export interface HdyDeckProps extends GtkContainerProps, GtkBuildableProps, GtkOrientableProps, HdySwipeableProps {
    /**
     * Whether swipe gestures allow switching to the previous child.
     * @since 1.0
     */
    'can-swipe-back'?: boolean;
    /**
     * Whether swipe gestures allow switching to the next child.
     * @since 1.0
     */
    'can-swipe-forward'?: boolean;
    /**
     * Horizontally homogeneous sizing.
     * @since 1.0
     */
    hhomogeneous?: boolean;
    /**
     * Whether or not the size should smoothly change when changing between differently sized children.
     * @since 1.0
     */
    'interpolate-size'?: boolean;
    /**
     * The transition animation duration, in milliseconds.
     * @since 1.0
     */
    'transition-duration'?: number;
    /**
     * The type of animation that will be used for transitions between children.
     * @since 1.0
     */
    'transition-type'?: HdyDeckTransitionTypeNick | Handy.DeckTransitionType;
    /**
     * Vertically homogeneous sizing.
     * @since 1.0
     */
    vhomogeneous?: boolean;
    /**
     * The widget currently visible.
     * @since 1.0
     */
    'visible-child'?: Gtk.Widget;
    /**
     * The name of the widget currently visible.
     * @since 1.0
     */
    'visible-child-name'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type HdyDeckConstructOnly = GtkContainerConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly | HdySwipeableConstructOnly;

/** A [class@Gtk.ListBoxRow] used to reveal widgets. */
export interface HdyExpanderRowProps extends HdyPreferencesRowProps, GtkActionableProps, GtkBuildableProps {
    /**
     * Whether expansion is enabled.
     * @since 1.0
     */
    'enable-expansion'?: boolean;
    /**
     * Whether the row is expanded.
     * @since 1.0
     */
    expanded?: boolean;
    /**
     * The icon name for this row.
     * @since 1.0
     */
    'icon-name'?: string;
    /**
     * Whether the switch enabling the expansion is visible.
     * @since 1.0
     */
    'show-enable-switch'?: boolean;
    /**
     * The subtitle for this row.
     * @since 1.0
     */
    subtitle?: string | null;
    /**
     * Whether an embedded underline in the title or subtitle labels indicates a mnemonic.
     * @since 1.0
     */
    'use-underline'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type HdyExpanderRowConstructOnly = HdyPreferencesRowConstructOnly | GtkActionableConstructOnly | GtkBuildableConstructOnly;

/** An adaptive container acting like a box or an overlay. */
export interface HdyFlapProps extends GtkContainerProps, GtkBuildableProps, GtkOrientableProps, HdySwipeableProps {
    /**
     * The content widget.
     * @since 1.2
     */
    content?: Gtk.Widget | null;
    /**
     * The flap widget.
     * @since 1.2
     */
    flap?: Gtk.Widget | null;
    /**
     * The flap position.
     * @since 1.2
     */
    'flap-position'?: GtkPackTypeNick | Gtk.PackType;
    /**
     * The fold transition animation duration, in milliseconds.
     * @since 1.2
     */
    'fold-duration'?: number;
    /**
     * The current fold policy.
     * @since 1.2
     */
    'fold-policy'?: HdyFlapFoldPolicyNick | Handy.FlapFoldPolicy;
    /**
     * Whether the flap is locked.
     * @since 1.2
     */
    locked?: boolean;
    /**
     * Whether the flap is modal.
     * @since 1.2
     */
    modal?: boolean;
    /**
     * The reveal transition animation duration, in milliseconds.
     * @since 1.2
     */
    'reveal-duration'?: number;
    /**
     * Whether the flap widget is revealed.
     * @since 1.2
     */
    'reveal-flap'?: boolean;
    /**
     * The separator widget.
     * @since 1.2
     */
    separator?: Gtk.Widget | null;
    /**
     * Whether the flap can be closed with a swipe gesture.
     * @since 1.2
     */
    'swipe-to-close'?: boolean;
    /**
     * Whether the flap can be opened with a swipe gesture.
     * @since 1.2
     */
    'swipe-to-open'?: boolean;
    /**
     * the type of animation used for reveal and fold transitions.
     * @since 1.2
     */
    'transition-type'?: HdyFlapTransitionTypeNick | Handy.FlapTransitionType;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type HdyFlapConstructOnly = GtkContainerConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly | HdySwipeableConstructOnly;

/** A title bar widget. */
export interface HdyHeaderBarProps extends GtkContainerProps, GtkBuildableProps {
    /**
     * The policy for aligning the center widget.
     * @since 1.0
     */
    'centering-policy'?: HdyCenteringPolicyNick | Handy.CenteringPolicy;
    /**
     * Custom title widget to display.
     * @since 1.0
     */
    'custom-title'?: Gtk.Widget | null;
    /**
     * The decoration layout for buttons.
     * @since 1.0
     */
    'decoration-layout'?: string;
    /**
     * Whether [property@HeaderBar:decoration-layout] is set.
     * @since 1.0
     */
    'decoration-layout-set'?: boolean;
    /**
     * Whether to reserve space for a subtitle, even if none is currently set.
     * @since 1.0
     */
    'has-subtitle'?: boolean;
    /**
     * Whether the size should smoothly change when changing between children.
     * @since 1.0
     */
    'interpolate-size'?: boolean;
    /**
     * Whether to show window decorations.
     * @since 1.0
     */
    'show-close-button'?: boolean;
    /**
     * The amount of space between children.
     * @since 1.0
     */
    spacing?: number;
    /**
     * The subtitle to display.
     * @since 1.0
     */
    subtitle?: string | null;
    /**
     * The title to display.
     * @since 1.0
     */
    title?: string | null;
    /**
     * The transition duration, in milliseconds.
     * @since 1.0
     */
    'transition-duration'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type HdyHeaderBarConstructOnly = GtkContainerConstructOnly | GtkBuildableConstructOnly;

/** A keypad for dialing numbers The `HdyKeypad` widget is a keypad for entering numbers such as phone numbers or PIN codes. */
export interface HdyKeypadProps extends GtkBinProps, GtkBuildableProps {
    /**
     * The amount of space between two consecutive columns.
     * @since 1.0
     */
    'column-spacing'?: number;
    /**
     * The widget for the lower end corner of @self.
     * @since 1.0
     */
    'end-action'?: Gtk.Widget | null;
    /**
     * The entry widget connected to the keypad.
     * @since 1.0
     */
    entry?: Gtk.Entry;
    /**
     * Whether standard letters should be displayed below the digits on the buttons.
     * @since 1.0
     */
    'letters-visible'?: boolean;
    /**
     * The amount of space between two consecutive rows.
     * @since 1.0
     */
    'row-spacing'?: number;
    /**
     * The widget for the lower start corner of @self.
     * @since 1.0
     */
    'start-action'?: Gtk.Widget | null;
    /**
     * Whether to display symbols.
     * @since 1.0
     */
    'symbols-visible'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type HdyKeypadConstructOnly = GtkBinConstructOnly | GtkBuildableConstructOnly;

/** An adaptive container acting like a box or a stack. */
export interface HdyLeafletProps extends GtkContainerProps, GtkBuildableProps, GtkOrientableProps, HdySwipeableProps {
    /**
     * Whether swipe gestures allow switching to the previous navigatable child.
     * @since 1.0
     */
    'can-swipe-back'?: boolean;
    /**
     * Whether swipe gestures allow switching to the next navigatable child.
     * @since 1.0
     */
    'can-swipe-forward'?: boolean;
    /**
     * The child transition animation duration, in milliseconds.
     * @since 1.0
     */
    'child-transition-duration'?: number;
    /**
     * Whether to allocate the same width for all children when folded.
     * @since 1.0
     */
    'hhomogeneous-folded'?: boolean;
    /**
     * Whether to allocate the same width for all children when unfolded.
     * @since 1.0
     */
    'hhomogeneous-unfolded'?: boolean;
    /**
     * Whether the size should smoothly change when changing between children.
     * @since 1.0
     */
    'interpolate-size'?: boolean;
    /**
     * The mode transition animation duration, in milliseconds.
     * @since 1.0
     */
    'mode-transition-duration'?: number;
    /**
     * The animation type used for transitions between modes and children.
     * @since 1.0
     */
    'transition-type'?: HdyLeafletTransitionTypeNick | Handy.LeafletTransitionType;
    /**
     * Whether to allocates the same height for all children when folded.
     * @since 1.0
     */
    'vhomogeneous-folded'?: boolean;
    /**
     * Whether to allocate the same height for all children when unfolded.
     * @since 1.0
     */
    'vhomogeneous-unfolded'?: boolean;
    /**
     * The widget currently visible when the leaflet is folded.
     * @since 1.0
     */
    'visible-child'?: Gtk.Widget;
    /**
     * The name of the widget currently visible when the leaflet is folded.
     * @since 1.0
     */
    'visible-child-name'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type HdyLeafletConstructOnly = GtkContainerConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly | HdySwipeableConstructOnly;

/** A group of preference rows. */
export interface HdyPreferencesGroupProps extends GtkBinProps, GtkBuildableProps {
    /**
     * The description for this group of preferences.
     * @since 1.0
     */
    description?: string;
    /**
     * The title for this group of preferences.
     * @since 1.0
     */
    title?: string;
    /**
     * Whether to use markup for the title and description.
     * @since 1.4
     */
    'use-markup'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type HdyPreferencesGroupConstructOnly = GtkBinConstructOnly | GtkBuildableConstructOnly;

/** A page from [class@PreferencesWindow]. */
export interface HdyPreferencesPageProps extends GtkBinProps, GtkBuildableProps {
    /**
     * The icon name for this page of preferences.
     * @since 1.0
     */
    'icon-name'?: string | null;
    /**
     * The title for this page of preferences.
     * @since 1.0
     */
    title?: string | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type HdyPreferencesPageConstructOnly = GtkBinConstructOnly | GtkBuildableConstructOnly;

/** A [class@Gtk.ListBoxRow] used to present preferences. */
export interface HdyPreferencesRowProps extends GtkListBoxRowProps, GtkActionableProps, GtkBuildableProps {
    /**
     * The title of the preference represented by this row.
     * @since 1.0
     */
    title?: string | null;
    /**
     * Whether an embedded underline in the title indicates a mnemonic.
     * @since 1.0
     */
    'use-underline'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type HdyPreferencesRowConstructOnly = GtkListBoxRowConstructOnly | GtkActionableConstructOnly | GtkBuildableConstructOnly;

/** A window to present an application's preferences. */
export interface HdyPreferencesWindowProps extends HdyWindowProps, GtkBuildableProps {
    /**
     * Whether the window allows closing the subpage via a swipe gesture.
     * @since 1.0
     */
    'can-swipe-back'?: boolean;
    /**
     * Whether search is enabled.
     * @since 1.0
     */
    'search-enabled'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type HdyPreferencesWindowConstructOnly = HdyWindowConstructOnly | GtkBuildableConstructOnly;

/** A toolbar to integrate a search entry with. */
export interface HdySearchBarProps extends GtkBinProps, GtkBuildableProps {
    /**
     * Whether the search mode is on and the search bar shown.
     * @since 1.0
     */
    'search-mode-enabled'?: boolean;
    /**
     * Whether to show the close button in the toolbar.
     * @since 1.0
     */
    'show-close-button'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type HdySearchBarConstructOnly = GtkBinConstructOnly | GtkBuildableConstructOnly;

/** A best fit container. */
export interface HdySqueezerProps extends GtkContainerProps, GtkBuildableProps, GtkOrientableProps {
    /**
     * Whether all children have the same size for the opposite orientation.
     * @since 1.0
     */
    homogeneous?: boolean;
    /**
     * Whether the squeezer interpolates its size when changing the visible child.
     * @since 1.0
     */
    'interpolate-size'?: boolean;
    /**
     * The animation duration, in milliseconds.
     * @since 1.0
     */
    'transition-duration'?: number;
    /**
     * The type of animation used for transitions between children.
     * @since 1.0
     */
    'transition-type'?: HdySqueezerTransitionTypeNick | Handy.SqueezerTransitionType;
    /**
     * The horizontal alignment, from 0 (start) to 1 (end).
     * @since 1.0
     */
    xalign?: number;
    /**
     * The vertical alignment, from 0 (start) to 1 (end).
     * @since 1.0
     */
    yalign?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type HdySqueezerConstructOnly = GtkContainerConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

/** A page used for empty/error states and similar use-cases. */
export interface HdyStatusPageProps extends GtkBinProps, GtkBuildableProps {
    /**
     * The description to be displayed below the title.
     * @since 1.2
     */
    description?: string | null;
    /**
     * The name of the icon to be used.
     * @since 1.2
     */
    'icon-name'?: string | null;
    /**
     * The title to be displayed below the icon.
     * @since 1.2
     */
    title?: string | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type HdyStatusPageConstructOnly = GtkBinConstructOnly | GtkBuildableConstructOnly;

/** An interface for swipeable widgets. */
export interface HdySwipeableProps extends GtkWidgetProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type HdySwipeableConstructOnly = GtkWidgetConstructOnly;

/** A tab bar for [class@TabView]. */
export interface HdyTabBarProps extends GtkBinProps, GtkBuildableProps {
    /**
     * Whether tabs automatically hide.
     * @since 1.2
     */
    autohide?: boolean;
    /**
     * The widget shown after the tabs.
     * @since 1.2
     */
    'end-action-widget'?: Gtk.Widget | null;
    /**
     * Whether tabs should expand.
     * @since 1.2
     */
    'expand-tabs'?: boolean;
    /**
     * Extra drag destination targets.
     * @since 1.2
     */
    'extra-drag-dest-targets'?: Gtk.TargetList | null;
    /**
     * Whether tabs use inverted layout.
     * @since 1.2
     */
    inverted?: boolean;
    /**
     * The widget shown before the tabs.
     * @since 1.2
     */
    'start-action-widget'?: Gtk.Widget | null;
    /**
     * The [class@TabView] the tab bar controls.
     * @since 1.2
     */
    view?: Handy.TabView | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type HdyTabBarConstructOnly = GtkBinConstructOnly | GtkBuildableConstructOnly;

/** A dynamic tabbed container. */
export interface HdyTabViewProps extends GtkBinProps, GtkBuildableProps {
    /**
     * Default page icon.
     * @since 1.2
     */
    'default-icon'?: Gio.Icon;
    /**
     * Tab context menu model.
     * @since 1.2
     */
    'menu-model'?: Gio.MenuModel | null;
    /**
     * The currently selected page.
     * @since 1.2
     */
    'selected-page'?: Handy.TabPage | null;
    /**
     * Tab shortcut widget.
     * @since 1.2
     */
    'shortcut-widget'?: Gtk.Widget | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type HdyTabViewConstructOnly = GtkBinConstructOnly | GtkBuildableConstructOnly;

/** A simple title bar container. */
export interface HdyTitleBarProps extends GtkBinProps, GtkBuildableProps {
    /**
     * Whether or not the title bar is in selection mode.
     * @since 1.0
     */
    'selection-mode'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type HdyTitleBarConstructOnly = GtkBinConstructOnly | GtkBuildableConstructOnly;

/** An adaptive view switcher. */
export interface HdyViewSwitcherProps extends GtkBinProps, GtkBuildableProps {
    /**
     * The preferred place to ellipsize the string.
     * @since 1.0
     */
    'narrow-ellipsize'?: PangoEllipsizeModeNick | Pango.EllipsizeMode;
    /**
     * The policy to determine which mode to use.
     * @since 1.0
     */
    policy?: HdyViewSwitcherPolicyNick | Handy.ViewSwitcherPolicy;
    /**
     * The [class@Gtk.Stack] the view switcher controls.
     * @since 1.0
     */
    stack?: Gtk.Stack | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type HdyViewSwitcherConstructOnly = GtkBinConstructOnly | GtkBuildableConstructOnly;

/** A view switcher action bar. */
export interface HdyViewSwitcherBarProps extends GtkBinProps, GtkBuildableProps {
    /**
     * The policy used to determine which mode to use.
     * @since 1.0
     */
    policy?: HdyViewSwitcherPolicyNick | Handy.ViewSwitcherPolicy;
    /**
     * Whether the bar should be revealed or hidden.
     * @since 1.0
     */
    reveal?: boolean;
    /**
     * The [class@Gtk.Stack] the [class@ViewSwitcher] controls.
     * @since 1.0
     */
    stack?: Gtk.Stack | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type HdyViewSwitcherBarConstructOnly = GtkBinConstructOnly | GtkBuildableConstructOnly;

/** A view switcher title. */
export interface HdyViewSwitcherTitleProps extends GtkBinProps, GtkBuildableProps {
    /**
     * The policy used to determine which mode to use.
     * @since 1.0
     */
    policy?: HdyViewSwitcherPolicyNick | Handy.ViewSwitcherPolicy;
    /**
     * The [class@Gtk.Stack] the [class@ViewSwitcher] controls.
     * @since 1.0
     */
    stack?: Gtk.Stack | null;
    /**
     * The subtitle of the [class@ViewSwitcher].
     * @since 1.0
     */
    subtitle?: string | null;
    /**
     * The title of the [class@ViewSwitcher].
     * @since 1.0
     */
    title?: string | null;
    /**
     * Whether the bar should be revealed or hidden.
     * @since 1.0
     */
    'view-switcher-enabled'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type HdyViewSwitcherTitleConstructOnly = GtkBinConstructOnly | GtkBuildableConstructOnly;

/** A freeform window. */
export interface HdyWindowProps extends GtkWindowProps, GtkBuildableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type HdyWindowConstructOnly = GtkWindowConstructOnly | GtkBuildableConstructOnly;

/** A bin that acts like a titlebar. */
export interface HdyWindowHandleProps extends GtkEventBoxProps, GtkBuildableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type HdyWindowHandleConstructOnly = GtkEventBoxConstructOnly | GtkBuildableConstructOnly;

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
        'activatable': 'set_activatable_widget';
        'prefix': 'add_prefix';
        };
    };
    HdyApplicationWindow: {
        class: Handy.ApplicationWindow;
        props: HdyApplicationWindowProps;
        signals: Handy.ApplicationWindow.SignalSignatures;
        constructOnly: HdyApplicationWindowConstructOnly;
        slotCandidates: {};
    };
    HdyAvatar: {
        class: Handy.Avatar;
        props: HdyAvatarProps;
        signals: Handy.Avatar.SignalSignatures;
        constructOnly: HdyAvatarConstructOnly;
        slotCandidates: {};
    };
    HdyCarousel: {
        class: Handy.Carousel;
        props: HdyCarouselProps;
        signals: Handy.Carousel.SignalSignatures;
        constructOnly: HdyCarouselConstructOnly;
        slotCandidates: {};
    };
    HdyCarouselIndicatorDots: {
        class: Handy.CarouselIndicatorDots;
        props: HdyCarouselIndicatorDotsProps;
        signals: Handy.CarouselIndicatorDots.SignalSignatures;
        constructOnly: HdyCarouselIndicatorDotsConstructOnly;
        slotCandidates: {
        'carousel': 'set_carousel';
        };
    };
    HdyCarouselIndicatorLines: {
        class: Handy.CarouselIndicatorLines;
        props: HdyCarouselIndicatorLinesProps;
        signals: Handy.CarouselIndicatorLines.SignalSignatures;
        constructOnly: HdyCarouselIndicatorLinesConstructOnly;
        slotCandidates: {
        'carousel': 'set_carousel';
        };
    };
    HdyClamp: {
        class: Handy.Clamp;
        props: HdyClampProps;
        signals: Handy.Clamp.SignalSignatures;
        constructOnly: HdyClampConstructOnly;
        slotCandidates: {};
    };
    HdyComboRow: {
        class: Handy.ComboRow;
        props: HdyComboRowProps;
        signals: Handy.ComboRow.SignalSignatures;
        constructOnly: HdyComboRowConstructOnly;
        slotCandidates: {};
    };
    HdyDeck: {
        class: Handy.Deck;
        props: HdyDeckProps;
        signals: Handy.Deck.SignalSignatures;
        constructOnly: HdyDeckConstructOnly;
        slotCandidates: {
        'visible-child': 'set_visible_child';
        };
    };
    HdyExpanderRow: {
        class: Handy.ExpanderRow;
        props: HdyExpanderRowProps;
        signals: Handy.ExpanderRow.SignalSignatures;
        constructOnly: HdyExpanderRowConstructOnly;
        slotCandidates: {
        'action': 'add_action';
        'prefix': 'add_prefix';
        };
    };
    HdyFlap: {
        class: Handy.Flap;
        props: HdyFlapProps;
        signals: Handy.Flap.SignalSignatures;
        constructOnly: HdyFlapConstructOnly;
        slotCandidates: {
        'content': 'set_content';
        'flap': 'set_flap';
        'separator': 'set_separator';
        };
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
        'end-action': 'set_end_action';
        'entry': 'set_entry';
        'start-action': 'set_start_action';
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
    HdyStatusPage: {
        class: Handy.StatusPage;
        props: HdyStatusPageProps;
        signals: Handy.StatusPage.SignalSignatures;
        constructOnly: HdyStatusPageConstructOnly;
        slotCandidates: {};
    };
    HdyTabBar: {
        class: Handy.TabBar;
        props: HdyTabBarProps;
        signals: Handy.TabBar.SignalSignatures;
        constructOnly: HdyTabBarConstructOnly;
        slotCandidates: {
        'end-action': 'set_end_action_widget';
        'start-action': 'set_start_action_widget';
        'view': 'set_view';
        };
    };
    HdyTabView: {
        class: Handy.TabView;
        props: HdyTabViewProps;
        signals: Handy.TabView.SignalSignatures;
        constructOnly: HdyTabViewConstructOnly;
        slotCandidates: {
        'shortcut': 'set_shortcut_widget';
        };
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
    HdyViewSwitcherTitle: {
        class: Handy.ViewSwitcherTitle;
        props: HdyViewSwitcherTitleProps;
        signals: Handy.ViewSwitcherTitle.SignalSignatures;
        constructOnly: HdyViewSwitcherTitleConstructOnly;
        slotCandidates: {
        'stack': 'set_stack';
        };
    };
    HdyWindow: {
        class: Handy.Window;
        props: HdyWindowProps;
        signals: Handy.Window.SignalSignatures;
        constructOnly: HdyWindowConstructOnly;
        slotCandidates: {};
    };
    HdyWindowHandle: {
        class: Handy.WindowHandle;
        props: HdyWindowHandleProps;
        signals: Handy.WindowHandle.SignalSignatures;
        constructOnly: HdyWindowHandleConstructOnly;
        slotCandidates: {};
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
