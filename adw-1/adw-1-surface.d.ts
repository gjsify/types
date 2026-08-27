/**
 * The GIR-derived widget VOCABULARY for Adw-1.
 *
 * GENERATED — do not edit. Provenance: Adw-1 — library 1.10.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Gio.ActionGroup Gio.ActionMap
 *
 * 62 concrete widgets, 63 declarations, 25 enum nick unions, 62 slot candidates.
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

import type Adw from './adw-1.js';
import type Gdk from '@girs/gdk-4.0';
import type Gio from '@girs/gio-2.0';
import type Gtk from '@girs/gtk-4.0';
import type Pango from '@girs/pango-1.0';
import type { GtkAccessibleConstructOnly, GtkAccessibleProps, GtkActionableConstructOnly, GtkActionableProps, GtkApplicationWindowConstructOnly, GtkApplicationWindowProps, GtkArrowTypeNick, GtkBuildableConstructOnly, GtkBuildableProps, GtkConstraintTargetConstructOnly, GtkConstraintTargetProps, GtkEditableConstructOnly, GtkEditableProps, GtkInputPurposeNick, GtkLicenseNick, GtkListBoxRowConstructOnly, GtkListBoxRowProps, GtkNativeConstructOnly, GtkNativeProps, GtkOrientableConstructOnly, GtkOrientableProps, GtkPackTypeNick, GtkRootConstructOnly, GtkRootProps, GtkScrollableConstructOnly, GtkScrollableProps, GtkShortcutManagerConstructOnly, GtkShortcutManagerProps, GtkSpinButtonUpdatePolicyNick, GtkStringFilterMatchModeNick, GtkWidgetConstructOnly, GtkWidgetProps, GtkWindowConstructOnly, GtkWindowProps } from '@girs/gtk-4.0/surface';

// ---------------------------------------------------------------------------
// Enum nicks — the string vocabulary GObject registered, from GIR's `glib:nick`.
//
// Not derived from the member name. Substituting underscores for dashes is not a law:
// some nicks keep an underscore the substitution would have replaced, and only the
// attribute knows which. Gtk-4.0 and Adw-1 contradict no derivation at all, which is
// how a derived nick passes review and breaks elsewhere.
// Re-measure with `scripts/check-nick-derivation.mjs` in ts-for-gir.
// ---------------------------------------------------------------------------

export type AdwAccentColorNick = 'blue' | 'teal' | 'green' | 'yellow' | 'orange' | 'red' | 'pink' | 'purple' | 'slate';
export type AdwAnimationStateNick = 'idle' | 'paused' | 'playing' | 'finished';
export type AdwBannerButtonStyleNick = 'default' | 'suggested';
export type AdwBreakpointConditionLengthTypeNick = 'min-width' | 'max-width' | 'min-height' | 'max-height';
export type AdwBreakpointConditionRatioTypeNick = 'min-aspect-ratio' | 'max-aspect-ratio';
export type AdwCenteringPolicyNick = 'loose' | 'strict';
export type AdwColorSchemeNick = 'default' | 'force-light' | 'prefer-light' | 'prefer-dark' | 'force-dark';
export type AdwDialogPresentationModeNick = 'auto' | 'floating' | 'bottom-sheet';
export type AdwEasingNick = 'linear' | 'ease-in-quad' | 'ease-out-quad' | 'ease-in-out-quad' | 'ease-in-cubic' | 'ease-out-cubic' | 'ease-in-out-cubic' | 'ease-in-quart' | 'ease-out-quart' | 'ease-in-out-quart' | 'ease-in-quint' | 'ease-out-quint' | 'ease-in-out-quint' | 'ease-in-sine' | 'ease-out-sine' | 'ease-in-out-sine' | 'ease-in-expo' | 'ease-out-expo' | 'ease-in-out-expo' | 'ease-in-circ' | 'ease-out-circ' | 'ease-in-out-circ' | 'ease-in-elastic' | 'ease-out-elastic' | 'ease-in-out-elastic' | 'ease-in-back' | 'ease-out-back' | 'ease-in-out-back' | 'ease-in-bounce' | 'ease-out-bounce' | 'ease-in-out-bounce' | 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out';
export type AdwFlapFoldPolicyNick = 'never' | 'always' | 'auto';
export type AdwFlapTransitionTypeNick = 'over' | 'under' | 'slide';
export type AdwFoldThresholdPolicyNick = 'minimum' | 'natural';
export type AdwInlineViewSwitcherDisplayModeNick = 'labels' | 'icons' | 'both';
export type AdwJustifyModeNick = 'none' | 'fill' | 'spread';
export type AdwLeafletTransitionTypeNick = 'over' | 'under' | 'slide';
export type AdwLengthUnitNick = 'px' | 'pt' | 'sp';
export type AdwNavigationDirectionNick = 'back' | 'forward';
export type AdwPackDirectionNick = 'start-to-end' | 'end-to-start';
export type AdwResponseAppearanceNick = 'default' | 'suggested' | 'destructive';
export type AdwSidebarModeNick = 'sidebar' | 'page';
export type AdwSqueezerTransitionTypeNick = 'none' | 'crossfade';
export type AdwToastPriorityNick = 'normal' | 'high';
export type AdwToolbarStyleNick = 'flat' | 'raised' | 'raised-border';
export type AdwViewSwitcherPolicyNick = 'narrow' | 'wide';
export type AdwWrapPolicyNick = 'minimum' | 'natural';

// ---------------------------------------------------------------------------
// Property surfaces — one interface per GIR DECLARATION, mirroring GIR's own
// inheritance rather than flattening per widget.
//
// The interfaces are load-bearing, not tidiness: `GtkBox` declares four properties
// of its own and `orientation` is not among them — it lives on `Gtk.Orientable`,
// because GObject installs interface properties on the implementor at runtime while
// GIR keeps them once, on the interface.
// ---------------------------------------------------------------------------

/** A dialog showing information about the application. */
export interface AdwAboutDialogProps extends AdwDialogProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkShortcutManagerProps {
    /**
     * The path to the Appstream metadata resource.
     * @since 1.9
     */
    'appdata-resource-path'?: string | null;
    /**
     * The name of the application icon.
     * @since 1.5
     */
    'application-icon'?: string;
    /**
     * The name of the application.
     * @since 1.5
     */
    'application-name'?: string;
    /**
     * The list of artists of the application.
     * @since 1.5
     */
    artists?: string[] | null;
    /**
     * The comments about the application.
     * @since 1.5
     */
    comments?: string;
    /**
     * The copyright information.
     * @since 1.5
     */
    copyright?: string;
    /**
     * The debug information.
     * @since 1.5
     */
    'debug-info'?: string;
    /**
     * The debug information filename.
     * @since 1.5
     */
    'debug-info-filename'?: string;
    /**
     * The list of designers of the application.
     * @since 1.5
     */
    designers?: string[] | null;
    /**
     * The developer name.
     * @since 1.5
     */
    'developer-name'?: string;
    /**
     * The list of developers of the application.
     * @since 1.5
     */
    developers?: string[] | null;
    /**
     * The list of documenters of the application.
     * @since 1.5
     */
    documenters?: string[] | null;
    /**
     * The URL for the application's issue tracker.
     * @since 1.5
     */
    'issue-url'?: string;
    /**
     * The license text.
     * @since 1.5
     */
    license?: string;
    /**
     * The license type.
     * @since 1.5
     */
    'license-type'?: GtkLicenseNick | Gtk.License;
    /**
     * The release notes of the application.
     * @since 1.5
     */
    'release-notes'?: string;
    /**
     * The version described by the application's release notes.
     * @since 1.5
     */
    'release-notes-version'?: string;
    /**
     * The URL of the application's support page.
     * @since 1.5
     */
    'support-url'?: string;
    /**
     * The translator credits string.
     * @since 1.5
     */
    'translator-credits'?: string;
    /**
     * The version of the application.
     * @since 1.5
     */
    version?: string;
    /**
     * The URL of the application's website.
     * @since 1.5
     */
    website?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AdwAboutDialogConstructOnly = AdwDialogConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkShortcutManagerConstructOnly | 'appdata-resource-path';

/** A window showing information about the application. */
export interface AdwAboutWindowProps extends AdwWindowProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkNativeProps, GtkRootProps, GtkShortcutManagerProps {
    /**
     * The name of the application icon.
     * @since 1.2
     */
    'application-icon'?: string;
    /**
     * The name of the application.
     * @since 1.2
     */
    'application-name'?: string;
    /**
     * The list of artists of the application.
     * @since 1.2
     */
    artists?: string[] | null;
    /**
     * The comments about the application.
     * @since 1.2
     */
    comments?: string;
    /**
     * The copyright information.
     * @since 1.2
     */
    copyright?: string;
    /**
     * The debug information.
     * @since 1.2
     */
    'debug-info'?: string;
    /**
     * The debug information filename.
     * @since 1.2
     */
    'debug-info-filename'?: string;
    /**
     * The list of designers of the application.
     * @since 1.2
     */
    designers?: string[] | null;
    /**
     * The developer name.
     * @since 1.2
     */
    'developer-name'?: string;
    /**
     * The list of developers of the application.
     * @since 1.2
     */
    developers?: string[] | null;
    /**
     * The list of documenters of the application.
     * @since 1.2
     */
    documenters?: string[] | null;
    /**
     * The URL for the application's issue tracker.
     * @since 1.2
     */
    'issue-url'?: string;
    /**
     * The license text.
     * @since 1.2
     */
    license?: string;
    /**
     * The license type.
     * @since 1.2
     */
    'license-type'?: GtkLicenseNick | Gtk.License;
    /**
     * The release notes of the application.
     * @since 1.2
     */
    'release-notes'?: string;
    /**
     * The version described by the application's release notes.
     * @since 1.2
     */
    'release-notes-version'?: string;
    /**
     * The URL of the application's support page.
     * @since 1.2
     */
    'support-url'?: string;
    /**
     * The translator credits string.
     * @since 1.2
     */
    'translator-credits'?: string;
    /**
     * The version of the application.
     * @since 1.2
     */
    version?: string;
    /**
     * The URL of the application's website.
     * @since 1.2
     */
    website?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AdwAboutWindowConstructOnly = AdwWindowConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkNativeConstructOnly | GtkRootConstructOnly | GtkShortcutManagerConstructOnly;

/** A [class@Gtk.ListBoxRow] used to present actions. */
export interface AdwActionRowProps extends AdwPreferencesRowProps, GtkAccessibleProps, GtkActionableProps, GtkBuildableProps, GtkConstraintTargetProps {
    /** The widget to activate when the row is activated. */
    'activatable-widget'?: Gtk.Widget | null;
    /** The icon name for this row. */
    'icon-name'?: string | null;
    /** The subtitle for this row. */
    subtitle?: string | null;
    /** The number of lines at the end of which the subtitle label will be ellipsized. */
    'subtitle-lines'?: number;
    /**
     * Whether the user can copy the subtitle from the label.
     * @since 1.3
     */
    'subtitle-selectable'?: boolean;
    /** The number of lines at the end of which the title label will be ellipsized. */
    'title-lines'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AdwActionRowConstructOnly = AdwPreferencesRowConstructOnly | GtkAccessibleConstructOnly | GtkActionableConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** A dialog presenting a message or a question. */
export interface AdwAlertDialogProps extends AdwDialogProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkShortcutManagerProps {
    /**
     * The body text of the dialog.
     * @since 1.5
     */
    body?: string;
    /**
     * Whether the body text includes Pango markup.
     * @since 1.5
     */
    'body-use-markup'?: boolean;
    /**
     * The ID of the close response.
     * @since 1.5
     */
    'close-response'?: string;
    /**
     * The response ID of the default response.
     * @since 1.5
     */
    'default-response'?: string | null;
    /**
     * The child widget.
     * @since 1.5
     */
    'extra-child'?: Gtk.Widget | null;
    /**
     * The heading of the dialog.
     * @since 1.5
     */
    heading?: string | null;
    /**
     * Whether the heading includes Pango markup.
     * @since 1.5
     */
    'heading-use-markup'?: boolean;
    /**
     * Whether to prefer horizontal button layout.
     * @since 1.6
     */
    'prefer-wide-layout'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AdwAlertDialogConstructOnly = AdwDialogConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkShortcutManagerConstructOnly;

/** A freeform application window. */
export interface AdwApplicationWindowProps extends GtkApplicationWindowProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkNativeProps, GtkRootProps, GtkShortcutManagerProps {
    /**
     * Whether adaptive preview is currently open.
     * @since 1.7
     */
    'adaptive-preview'?: boolean;
    /** The content widget. */
    content?: Gtk.Widget | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AdwApplicationWindowConstructOnly = GtkApplicationWindowConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkNativeConstructOnly | GtkRootConstructOnly | GtkShortcutManagerConstructOnly;

/** A widget displaying an image, with a generated fallback. */
export interface AdwAvatarProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /** A custom image paintable. */
    'custom-image'?: Gdk.Paintable | null;
    /** The name of an icon to use as a fallback. */
    'icon-name'?: string | null;
    /** Whether initials are used instead of an icon on the fallback avatar. */
    'show-initials'?: boolean;
    /** The size of the avatar. */
    size?: number;
    /** Sets the text used to generate the fallback initials and color. */
    text?: string | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AdwAvatarConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** A bar with contextual information. */
export interface AdwBannerProps extends GtkWidgetProps, GtkAccessibleProps, GtkActionableProps, GtkBuildableProps, GtkConstraintTargetProps {
    /**
     * The label to show on the button.
     * @since 1.3
     */
    'button-label'?: string | null;
    /**
     * The style class to use for the banner button.
     * @since 1.7
     */
    'button-style'?: AdwBannerButtonStyleNick | Adw.BannerButtonStyle;
    /**
     * Whether the banner is currently revealed.
     * @since 1.3
     */
    revealed?: boolean;
    /**
     * The title for this banner.
     * @since 1.3
     */
    title?: string;
    /**
     * Whether to use Pango markup for the banner title.
     * @since 1.3
     */
    'use-markup'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AdwBannerConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkActionableConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** A widget with one child. */
export interface AdwBinProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /** The child widget of the `AdwBin`. */
    child?: Gtk.Widget | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AdwBinConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** A bottom sheet with an optional bottom bar. */
export interface AdwBottomSheetProps extends GtkWidgetProps, AdwSwipeableProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /**
     * Horizontal alignment of the bottom sheet.
     * @since 1.6
     */
    align?: number;
    /**
     * The bottom bar widget.
     * @since 1.6
     */
    'bottom-bar'?: Gtk.Widget | null;
    /**
     * Whether the bottom sheet can be closed by user.
     * @since 1.6
     */
    'can-close'?: boolean;
    /**
     * Whether the bottom sheet can be opened by user.
     * @since 1.6
     */
    'can-open'?: boolean;
    /**
     * The content widget.
     * @since 1.6
     */
    content?: Gtk.Widget | null;
    /**
     * Whether the bottom sheet takes the full width.
     * @since 1.6
     */
    'full-width'?: boolean;
    /**
     * Whether the bottom sheet is modal.
     * @since 1.6
     */
    modal?: boolean;
    /**
     * Whether the bottom sheet is open.
     * @since 1.6
     */
    open?: boolean;
    /**
     * Whether to reveal the bottom bar.
     * @since 1.7
     */
    'reveal-bottom-bar'?: boolean;
    /**
     * The bottom sheet widget.
     * @since 1.6
     */
    sheet?: Gtk.Widget | null;
    /**
     * Whether to overlay a drag handle in the bottom sheet.
     * @since 1.6
     */
    'show-drag-handle'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AdwBottomSheetConstructOnly = GtkWidgetConstructOnly | AdwSwipeableConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** A widget that changes layout based on available size. */
export interface AdwBreakpointBinProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /**
     * The child widget.
     * @since 1.4
     */
    child?: Gtk.Widget | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AdwBreakpointBinConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** A helper widget for creating buttons. */
export interface AdwButtonContentProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /**
     * Whether the button can be smaller than the natural size of its contents.
     * @since 1.4
     */
    'can-shrink'?: boolean;
    /** The name of the displayed icon. */
    'icon-name'?: string;
    /** The displayed label. */
    label?: string;
    /** Whether an underline in the text indicates a mnemonic. */
    'use-underline'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AdwButtonContentConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** A [class@Gtk.ListBoxRow] that looks like a button. */
export interface AdwButtonRowProps extends AdwPreferencesRowProps, GtkAccessibleProps, GtkActionableProps, GtkBuildableProps, GtkConstraintTargetProps {
    /**
     * The icon name to show after the title.
     * @since 1.6
     */
    'end-icon-name'?: string | null;
    /**
     * The icon name to show before the title.
     * @since 1.6
     */
    'start-icon-name'?: string | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AdwButtonRowConstructOnly = AdwPreferencesRowConstructOnly | GtkAccessibleConstructOnly | GtkActionableConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** A paginated scrolling widget. */
export interface AdwCarouselProps extends GtkWidgetProps, AdwSwipeableProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkOrientableProps {
    /** Whether to allow swiping for more than one page at a time. */
    'allow-long-swipes'?: boolean;
    /** Sets whether the `AdwCarousel` can be dragged with mouse pointer. */
    'allow-mouse-drag'?: boolean;
    /** Whether the widget will respond to scroll wheel events. */
    'allow-scroll-wheel'?: boolean;
    /** Whether the carousel can be navigated. */
    interactive?: boolean;
    /** Page reveal duration, in milliseconds. */
    'reveal-duration'?: number;
    /** Scroll animation spring parameters. */
    'scroll-params'?: Adw.SpringParams;
    /** Spacing between pages in pixels. */
    spacing?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AdwCarouselConstructOnly = GtkWidgetConstructOnly | AdwSwipeableConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkOrientableConstructOnly;

/** A dots indicator for [class@Carousel]. */
export interface AdwCarouselIndicatorDotsProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkOrientableProps {
    /** The displayed carousel. */
    carousel?: Adw.Carousel | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AdwCarouselIndicatorDotsConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkOrientableConstructOnly;

/** A lines indicator for [class@Carousel]. */
export interface AdwCarouselIndicatorLinesProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkOrientableProps {
    /** The displayed carousel. */
    carousel?: Adw.Carousel | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AdwCarouselIndicatorLinesConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkOrientableConstructOnly;

/** A widget constraining its child to a given size. */
export interface AdwClampProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkOrientableProps {
    /** The child widget of the `AdwClamp`. */
    child?: Gtk.Widget | null;
    /** The maximum size allocated to the child. */
    'maximum-size'?: number;
    /** The size above which the child is clamped. */
    'tightening-threshold'?: number;
    /**
     * The length unit for maximum size and tightening threshold.
     * @since 1.4
     */
    unit?: AdwLengthUnitNick | Adw.LengthUnit;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AdwClampConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkOrientableConstructOnly;

/** A scrollable [class@Clamp]. */
export interface AdwClampScrollableProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkOrientableProps, GtkScrollableProps {
    /** The child widget of the `AdwClampScrollable`. */
    child?: Gtk.Widget | null;
    /** The maximum size allocated to the child. */
    'maximum-size'?: number;
    /** The size above which the child is clamped. */
    'tightening-threshold'?: number;
    /**
     * The length unit for maximum size and tightening threshold.
     * @since 1.4
     */
    unit?: AdwLengthUnitNick | Adw.LengthUnit;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AdwClampScrollableConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkOrientableConstructOnly | GtkScrollableConstructOnly;

/** A [class@Gtk.ListBoxRow] used to choose from a list of items. */
export interface AdwComboRowProps extends AdwActionRowProps, GtkAccessibleProps, GtkActionableProps, GtkBuildableProps, GtkConstraintTargetProps {
    /**
     * Whether to show a search entry in the popup.
     * @since 1.4
     */
    'enable-search'?: boolean;
    /** An expression used to obtain strings from items. */
    expression?: Gtk.Expression | null;
    /** Factory for populating list items. */
    factory?: Gtk.ListItemFactory | null;
    /**
     * The factory for creating header widgets for the popup.
     * @since 1.6
     */
    'header-factory'?: Gtk.ListItemFactory | null;
    /** The factory for populating list items in the popup. */
    'list-factory'?: Gtk.ListItemFactory | null;
    /** The model that provides the displayed items. */
    model?: Gio.ListModel | null;
    /**
     * The match mode for the search filter.
     * @since 1.6
     */
    'search-match-mode'?: GtkStringFilterMatchModeNick | Gtk.StringFilterMatchMode;
    /** The position of the selected item. */
    selected?: number;
    /** Whether to use the current value as the subtitle. */
    'use-subtitle'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AdwComboRowConstructOnly = AdwActionRowConstructOnly | GtkAccessibleConstructOnly | GtkActionableConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** An adaptive dialog container. */
export interface AdwDialogProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkShortcutManagerProps {
    /**
     * Whether the dialog can be closed.
     * @since 1.5
     */
    'can-close'?: boolean;
    /**
     * The child widget of the `AdwDialog`.
     * @since 1.5
     */
    child?: Gtk.Widget | null;
    /**
     * The height of the dialog's contents.
     * @since 1.5
     */
    'content-height'?: number;
    /**
     * The width of the dialog's contents.
     * @since 1.5
     */
    'content-width'?: number;
    /**
     * The default widget.
     * @since 1.5
     */
    'default-widget'?: Gtk.Widget | null;
    /**
     * The focus widget.
     * @since 1.5
     */
    'focus-widget'?: Gtk.Widget | null;
    /**
     * Whether to size content automatically.
     * @since 1.5
     */
    'follows-content-size'?: boolean;
    /**
     * The dialog's presentation mode.
     * @since 1.5
     */
    'presentation-mode'?: AdwDialogPresentationModeNick | Adw.DialogPresentationMode;
    /**
     * The title of the dialog.
     * @since 1.5
     */
    title?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AdwDialogConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkShortcutManagerConstructOnly;

/** A [class@Gtk.ListBoxRow] with an embedded text entry. */
export interface AdwEntryRowProps extends AdwPreferencesRowProps, GtkAccessibleProps, GtkActionableProps, GtkBuildableProps, GtkConstraintTargetProps, GtkEditableProps {
    /**
     * Whether activating the embedded entry can activate the default widget.
     * @since 1.2
     */
    'activates-default'?: boolean;
    /**
     * A list of Pango attributes to apply to the text of the embedded entry.
     * @since 1.2
     */
    attributes?: Pango.AttrList | null;
    /**
     * Whether to suggest emoji replacements on the entry row.
     * @since 1.2
     */
    'enable-emoji-completion'?: boolean;
    /**
     * Additional input hints for the entry row.
     * @since 1.2
     */
    'input-hints'?: number;
    /**
     * The input purpose of the entry row.
     * @since 1.2
     */
    'input-purpose'?: GtkInputPurposeNick | Gtk.InputPurpose;
    /**
     * Maximum number of characters for the entry.
     * @since 1.6
     */
    'max-length'?: number;
    /**
     * Whether to show the apply button.
     * @since 1.2
     */
    'show-apply-button'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AdwEntryRowConstructOnly = AdwPreferencesRowConstructOnly | GtkAccessibleConstructOnly | GtkActionableConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkEditableConstructOnly;

/** A [class@Gtk.ListBoxRow] used to reveal widgets. */
export interface AdwExpanderRowProps extends AdwPreferencesRowProps, GtkAccessibleProps, GtkActionableProps, GtkBuildableProps, GtkConstraintTargetProps {
    /** Whether expansion is enabled. */
    'enable-expansion'?: boolean;
    /** Whether the row is expanded. */
    expanded?: boolean;
    /** The icon name for this row. */
    'icon-name'?: string | null;
    /** Whether the switch enabling the expansion is visible. */
    'show-enable-switch'?: boolean;
    /** The subtitle for this row. */
    subtitle?: string;
    /**
     * The number of lines at the end of which the subtitle label will be ellipsized.
     * @since 1.3
     */
    'subtitle-lines'?: number;
    /**
     * The number of lines at the end of which the title label will be ellipsized.
     * @since 1.3
     */
    'title-lines'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AdwExpanderRowConstructOnly = AdwPreferencesRowConstructOnly | GtkAccessibleConstructOnly | GtkActionableConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** An adaptive container acting like a box or an overlay. */
export interface AdwFlapProps extends GtkWidgetProps, AdwSwipeableProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkOrientableProps {
    /** The content widget. */
    content?: Gtk.Widget | null;
    /** The flap widget. */
    flap?: Gtk.Widget | null;
    /** The flap position. */
    'flap-position'?: GtkPackTypeNick | Gtk.PackType;
    /** The fold transition animation duration, in milliseconds. */
    'fold-duration'?: number;
    /** The fold policy for the flap. */
    'fold-policy'?: AdwFlapFoldPolicyNick | Adw.FlapFoldPolicy;
    /** Determines when the flap will fold. */
    'fold-threshold-policy'?: AdwFoldThresholdPolicyNick | Adw.FoldThresholdPolicy;
    /** Whether the flap is locked. */
    locked?: boolean;
    /** Whether the flap is modal. */
    modal?: boolean;
    /** Whether the flap widget is revealed. */
    'reveal-flap'?: boolean;
    /** The reveal animation spring parameters. */
    'reveal-params'?: Adw.SpringParams;
    /** The separator widget. */
    separator?: Gtk.Widget | null;
    /** Whether the flap can be closed with a swipe gesture. */
    'swipe-to-close'?: boolean;
    /** Whether the flap can be opened with a swipe gesture. */
    'swipe-to-open'?: boolean;
    /** the type of animation used for reveal and fold transitions. */
    'transition-type'?: AdwFlapTransitionTypeNick | Adw.FlapTransitionType;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AdwFlapConstructOnly = GtkWidgetConstructOnly | AdwSwipeableConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkOrientableConstructOnly;

/** A title bar widget. */
export interface AdwHeaderBarProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /** The policy for aligning the center widget. */
    'centering-policy'?: AdwCenteringPolicyNick | Adw.CenteringPolicy;
    /** The decoration layout for buttons. */
    'decoration-layout'?: string | null;
    /**
     * Whether the header bar can show the back button.
     * @since 1.4
     */
    'show-back-button'?: boolean;
    /** Whether to show title buttons at the end of the header bar. */
    'show-end-title-buttons'?: boolean;
    /** Whether to show title buttons at the start of the header bar. */
    'show-start-title-buttons'?: boolean;
    /**
     * Whether the title widget should be shown.
     * @since 1.4
     */
    'show-title'?: boolean;
    /** The title widget to display. */
    'title-widget'?: Gtk.Widget | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AdwHeaderBarConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** A view switcher that uses a toggle group. */
export interface AdwInlineViewSwitcherProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkOrientableProps {
    /**
     * Whether the toggles can be smaller than the natural size of their contents.
     * @since 1.7
     */
    'can-shrink'?: boolean;
    /**
     * The display mode.
     * @since 1.7
     */
    'display-mode'?: AdwInlineViewSwitcherDisplayModeNick | Adw.InlineViewSwitcherDisplayMode;
    /**
     * Whether all toggles take the same size.
     * @since 1.7
     */
    homogeneous?: boolean;
    /**
     * The stack the view switcher controls.
     * @since 1.7
     */
    stack?: Adw.ViewStack | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AdwInlineViewSwitcherConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkOrientableConstructOnly;

/** A child slot within [class@Layout]. */
export interface AdwLayoutSlotProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /**
     * The slot ID.
     * @since 1.6
     */
    id?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AdwLayoutSlotConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | 'id';

/** An adaptive container acting like a box or a stack. */
export interface AdwLeafletProps extends GtkWidgetProps, AdwSwipeableProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkOrientableProps {
    /** Whether gestures and shortcuts for navigating backward are enabled. */
    'can-navigate-back'?: boolean;
    /** Whether gestures and shortcuts for navigating forward are enabled. */
    'can-navigate-forward'?: boolean;
    /** Whether or not the leaflet can unfold. */
    'can-unfold'?: boolean;
    /** The child transition spring parameters. */
    'child-transition-params'?: Adw.SpringParams;
    /** Determines when the leaflet will fold. */
    'fold-threshold-policy'?: AdwFoldThresholdPolicyNick | Adw.FoldThresholdPolicy;
    /** Whether the leaflet allocates the same size for all children when folded. */
    homogeneous?: boolean;
    /** The mode transition animation duration, in milliseconds. */
    'mode-transition-duration'?: number;
    /** The type of animation used for transitions between modes and children. */
    'transition-type'?: AdwLeafletTransitionTypeNick | Adw.LeafletTransitionType;
    /** The widget currently visible when the leaflet is folded. */
    'visible-child'?: Gtk.Widget | null;
    /** The name of the widget currently visible when the leaflet is folded. */
    'visible-child-name'?: string | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AdwLeafletConstructOnly = GtkWidgetConstructOnly | AdwSwipeableConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkOrientableConstructOnly;

/** A dialog presenting a message or a question. */
export interface AdwMessageDialogProps extends GtkWindowProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkNativeProps, GtkRootProps, GtkShortcutManagerProps {
    /**
     * The body text of the dialog.
     * @since 1.2
     */
    body?: string;
    /**
     * Whether the body text includes Pango markup.
     * @since 1.2
     */
    'body-use-markup'?: boolean;
    /**
     * The ID of the close response.
     * @since 1.2
     */
    'close-response'?: string;
    /**
     * The response ID of the default response.
     * @since 1.2
     */
    'default-response'?: string | null;
    /**
     * The child widget.
     * @since 1.2
     */
    'extra-child'?: Gtk.Widget | null;
    /**
     * The heading of the dialog.
     * @since 1.2
     */
    heading?: string | null;
    /**
     * Whether the heading includes Pango markup.
     * @since 1.2
     */
    'heading-use-markup'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AdwMessageDialogConstructOnly = GtkWindowConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkNativeConstructOnly | GtkRootConstructOnly | GtkShortcutManagerConstructOnly;

/** A widget for switching between different layouts. */
export interface AdwMultiLayoutViewProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /**
     * The currently used layout.
     * @since 1.6
     */
    layout?: Adw.Layout | null;
    /**
     * The name of the currently used layout.
     * @since 1.6
     */
    'layout-name'?: string | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AdwMultiLayoutViewConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** A page within [class@NavigationView] or [class@NavigationSplitView]. */
export interface AdwNavigationPageProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /**
     * Whether the page can be popped from navigation stack.
     * @since 1.4
     */
    'can-pop'?: boolean;
    /**
     * The child widget.
     * @since 1.4
     */
    child?: Gtk.Widget | null;
    /**
     * The page tag.
     * @since 1.4
     */
    tag?: string | null;
    /**
     * The page title.
     * @since 1.4
     */
    title?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AdwNavigationPageConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** A widget presenting sidebar and content side by side or as a navigation view. */
export interface AdwNavigationSplitViewProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /**
     * Whether the split view is collapsed.
     * @since 1.4
     */
    collapsed?: boolean;
    /**
     * The content widget.
     * @since 1.4
     */
    content?: Adw.NavigationPage | null;
    /**
     * The maximum sidebar width.
     * @since 1.4
     */
    'max-sidebar-width'?: number;
    /**
     * The minimum sidebar width.
     * @since 1.4
     */
    'min-sidebar-width'?: number;
    /**
     * Determines the visible page when collapsed.
     * @since 1.4
     */
    'show-content'?: boolean;
    /**
     * The sidebar widget.
     * @since 1.4
     */
    sidebar?: Adw.NavigationPage | null;
    /**
     * The sidebar position.
     * @since 1.7
     */
    'sidebar-position'?: GtkPackTypeNick | Gtk.PackType;
    /**
     * The preferred sidebar width as a fraction of the total width.
     * @since 1.4
     */
    'sidebar-width-fraction'?: number;
    /**
     * The length unit for minimum and maximum sidebar widths.
     * @since 1.4
     */
    'sidebar-width-unit'?: AdwLengthUnitNick | Adw.LengthUnit;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AdwNavigationSplitViewConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** A page-based navigation container. */
export interface AdwNavigationViewProps extends GtkWidgetProps, AdwSwipeableProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /**
     * Whether to animate page transitions.
     * @since 1.4
     */
    'animate-transitions'?: boolean;
    /**
     * Whether the view is horizontally homogeneous.
     * @since 1.7
     */
    hhomogeneous?: boolean;
    /**
     * Whether pressing Escape pops the current page.
     * @since 1.4
     */
    'pop-on-escape'?: boolean;
    /**
     * Whether the view is vertically homogeneous.
     * @since 1.7
     */
    vhomogeneous?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AdwNavigationViewConstructOnly = GtkWidgetConstructOnly | AdwSwipeableConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** A widget presenting sidebar and content side by side or as an overlay. */
export interface AdwOverlaySplitViewProps extends GtkWidgetProps, AdwSwipeableProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /**
     * Whether the split view is collapsed.
     * @since 1.4
     */
    collapsed?: boolean;
    /**
     * The content widget.
     * @since 1.4
     */
    content?: Gtk.Widget | null;
    /**
     * Whether the sidebar can be closed with a swipe gesture.
     * @since 1.4
     */
    'enable-hide-gesture'?: boolean;
    /**
     * Whether the sidebar can be opened with an edge swipe gesture.
     * @since 1.4
     */
    'enable-show-gesture'?: boolean;
    /**
     * The maximum sidebar width.
     * @since 1.4
     */
    'max-sidebar-width'?: number;
    /**
     * The minimum sidebar width.
     * @since 1.4
     */
    'min-sidebar-width'?: number;
    /**
     * Whether the sidebar widget is pinned.
     * @since 1.4
     */
    'pin-sidebar'?: boolean;
    /**
     * Whether the sidebar widget is shown.
     * @since 1.4
     */
    'show-sidebar'?: boolean;
    /**
     * The sidebar widget.
     * @since 1.4
     */
    sidebar?: Gtk.Widget | null;
    /**
     * The sidebar position.
     * @since 1.4
     */
    'sidebar-position'?: GtkPackTypeNick | Gtk.PackType;
    /**
     * The preferred sidebar width as a fraction of the total width.
     * @since 1.4
     */
    'sidebar-width-fraction'?: number;
    /**
     * The length unit for minimum and maximum sidebar widths.
     * @since 1.4
     */
    'sidebar-width-unit'?: AdwLengthUnitNick | Adw.LengthUnit;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AdwOverlaySplitViewConstructOnly = GtkWidgetConstructOnly | AdwSwipeableConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** A [class@EntryRow] tailored for entering secrets. */
export interface AdwPasswordEntryRowProps extends AdwEntryRowProps, GtkAccessibleProps, GtkActionableProps, GtkBuildableProps, GtkConstraintTargetProps, GtkEditableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AdwPasswordEntryRowConstructOnly = AdwEntryRowConstructOnly | GtkAccessibleConstructOnly | GtkActionableConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkEditableConstructOnly;

/** A dialog showing application's preferences. */
export interface AdwPreferencesDialogProps extends AdwDialogProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkShortcutManagerProps {
    /**
     * Whether search is enabled.
     * @since 1.5
     */
    'search-enabled'?: boolean;
    /**
     * The currently visible page.
     * @since 1.5
     */
    'visible-page'?: Gtk.Widget | null;
    /**
     * The name of the currently visible page.
     * @since 1.5
     */
    'visible-page-name'?: string | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AdwPreferencesDialogConstructOnly = AdwDialogConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkShortcutManagerConstructOnly;

/** A group of preference rows. */
export interface AdwPreferencesGroupProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /** The description for this group of preferences. */
    description?: string | null;
    /**
     * The header suffix widget.
     * @since 1.1
     */
    'header-suffix'?: Gtk.Widget | null;
    /**
     * Whether to separate rows.
     * @since 1.6
     */
    'separate-rows'?: boolean;
    /** The title for this group of preferences. */
    title?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AdwPreferencesGroupConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** A page from [class@PreferencesDialog]. */
export interface AdwPreferencesPageProps extends Omit<GtkWidgetProps, 'name'>, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /**
     * A [class@Banner] displayed at the top of the page.
     * @since 1.7
     */
    banner?: Adw.Banner | null;
    /**
     * The description to be displayed at the top of the page.
     * @since 1.4
     */
    description?: string;
    /**
     * Whether the description should be centered.
     * @since 1.6
     */
    'description-centered'?: boolean;
    /** The icon name for this page. */
    'icon-name'?: string | null;
    /** The name of this page. */
    name?: string | null;
    /** The title for this page. */
    title?: string;
    /** Whether an embedded underline in the title indicates a mnemonic. */
    'use-underline'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AdwPreferencesPageConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** A [class@Gtk.ListBoxRow] used to present preferences. */
export interface AdwPreferencesRowProps extends GtkListBoxRowProps, GtkAccessibleProps, GtkActionableProps, GtkBuildableProps, GtkConstraintTargetProps {
    /** The title of the preference represented by this row. */
    title?: string;
    /**
     * Whether the user can copy the title from the label.
     * @since 1.1
     */
    'title-selectable'?: boolean;
    /**
     * Whether to use Pango markup for the title label.
     * @since 1.2
     */
    'use-markup'?: boolean;
    /** Whether an embedded underline in the title indicates a mnemonic. */
    'use-underline'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AdwPreferencesRowConstructOnly = GtkListBoxRowConstructOnly | GtkAccessibleConstructOnly | GtkActionableConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** A window to present an application's preferences. */
export interface AdwPreferencesWindowProps extends AdwWindowProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkNativeProps, GtkRootProps, GtkShortcutManagerProps {
    /** Whether gestures and shortcuts for closing subpages are enabled. */
    'can-navigate-back'?: boolean;
    /** Whether search is enabled. */
    'search-enabled'?: boolean;
    /** The currently visible page. */
    'visible-page'?: Gtk.Widget | null;
    /** The name of the currently visible page. */
    'visible-page-name'?: string | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AdwPreferencesWindowConstructOnly = AdwWindowConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkNativeConstructOnly | GtkRootConstructOnly | GtkShortcutManagerConstructOnly;

/** A widget that displays a keyboard shortcut. */
export interface AdwShortcutLabelProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /**
     * The displayed accelerator.
     * @since 1.8
     */
    accelerator?: string;
    /**
     * The text displayed when no accelerator is set.
     * @since 1.8
     */
    'disabled-text'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AdwShortcutLabelConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** A dialog that displays application's keyboard shortcuts. */
export interface AdwShortcutsDialogProps extends AdwDialogProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkShortcutManagerProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AdwShortcutsDialogConstructOnly = AdwDialogConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkShortcutManagerConstructOnly;

/** Adaptive sidebar widget. */
export interface AdwSidebarProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /**
     * Whether the drop data should be preloaded on hover.
     * @since 1.9
     */
    'drop-preload'?: boolean;
    /**
     * The item filter.
     * @since 1.9
     */
    filter?: Gtk.Filter | null;
    /**
     * Context menu model for the items.
     * @since 1.9
     */
    'menu-model'?: Gio.MenuModel | null;
    /**
     * Determines the sidebar's look and behavior.
     * @since 1.9
     */
    mode?: AdwSidebarModeNick | Adw.SidebarMode;
    /**
     * The placeholder widget.
     * @since 1.9
     */
    placeholder?: Gtk.Widget | null;
    /**
     * The index of the currently selected item.
     * @since 1.9
     */
    selected?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AdwSidebarConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** An [class@ActionRow] with an embedded spin button. */
export interface AdwSpinRowProps extends AdwActionRowProps, GtkAccessibleProps, GtkActionableProps, GtkBuildableProps, GtkConstraintTargetProps, GtkEditableProps {
    /**
     * The adjustment that holds the value of the spin row.
     * @since 1.4
     */
    adjustment?: Gtk.Adjustment;
    /**
     * The acceleration rate when you hold down a button or key.
     * @since 1.4
     */
    'climb-rate'?: number;
    /**
     * The number of decimal places to display.
     * @since 1.4
     */
    digits?: number;
    /**
     * Whether non-numeric characters should be ignored.
     * @since 1.4
     */
    numeric?: boolean;
    /**
     * Whether invalid values are snapped to the nearest step increment.
     * @since 1.4
     */
    'snap-to-ticks'?: boolean;
    /**
     * The policy for updating the spin row.
     * @since 1.4
     */
    'update-policy'?: GtkSpinButtonUpdatePolicyNick | Gtk.SpinButtonUpdatePolicy;
    /**
     * The current value.
     * @since 1.4
     */
    value?: number;
    /**
     * Whether the spin row should wrap upon reaching its limits.
     * @since 1.4
     */
    wrap?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AdwSpinRowConstructOnly = AdwActionRowConstructOnly | GtkAccessibleConstructOnly | GtkActionableConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkEditableConstructOnly;

/** A widget showing a loading spinner. */
export interface AdwSpinnerProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AdwSpinnerConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** A combined button and dropdown widget. */
export interface AdwSplitButtonProps extends GtkWidgetProps, GtkAccessibleProps, GtkActionableProps, GtkBuildableProps, GtkConstraintTargetProps {
    /**
     * Whether the button can be smaller than the natural size of its contents.
     * @since 1.4
     */
    'can-shrink'?: boolean;
    /** The child widget. */
    child?: Gtk.Widget | null;
    /** The direction in which the popup will be popped up. */
    direction?: GtkArrowTypeNick | Gtk.ArrowType;
    /**
     * The tooltip of the dropdown button.
     * @since 1.2
     */
    'dropdown-tooltip'?: string;
    /** The name of the icon used to automatically populate the button. */
    'icon-name'?: string | null;
    /** The label for the button. */
    label?: string | null;
    /** The `GMenuModel` from which the popup will be created. */
    'menu-model'?: Gio.MenuModel | null;
    /** The `GtkPopover` that will be popped up when the dropdown is clicked. */
    popover?: Gtk.Popover | null;
    /** Whether an underline in the text indicates a mnemonic. */
    'use-underline'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AdwSplitButtonConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkActionableConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** A best fit container. */
export interface AdwSqueezerProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkOrientableProps {
    /** Whether to allow squeezing beyond the last child's minimum size. */
    'allow-none'?: boolean;
    /** Whether all children have the same size for the opposite orientation. */
    homogeneous?: boolean;
    /** Whether the squeezer interpolates its size when changing the visible child. */
    'interpolate-size'?: boolean;
    /** The switch threshold policy. */
    'switch-threshold-policy'?: AdwFoldThresholdPolicyNick | Adw.FoldThresholdPolicy;
    /** The transition animation duration, in milliseconds. */
    'transition-duration'?: number;
    /** The type of animation used for transitions between children. */
    'transition-type'?: AdwSqueezerTransitionTypeNick | Adw.SqueezerTransitionType;
    /** The horizontal alignment, from 0 (start) to 1 (end). */
    xalign?: number;
    /** The vertical alignment, from 0 (top) to 1 (bottom). */
    yalign?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AdwSqueezerConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkOrientableConstructOnly;

/** A page used for empty/error states and similar use-cases. */
export interface AdwStatusPageProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /** The child widget. */
    child?: Gtk.Widget | null;
    /** The description markup to be displayed below the title. */
    description?: string | null;
    /** The name of the icon to be used. */
    'icon-name'?: string | null;
    /** The paintable to be used. */
    paintable?: Gdk.Paintable | null;
    /** The title to be displayed below the icon. */
    title?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AdwStatusPageConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** An interface for swipeable widgets. */
export interface AdwSwipeableProps extends GtkWidgetProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AdwSwipeableConstructOnly = GtkWidgetConstructOnly;

/** A [class@Gtk.ListBoxRow] used to represent two states. */
export interface AdwSwitchRowProps extends AdwActionRowProps, GtkAccessibleProps, GtkActionableProps, GtkBuildableProps, GtkConstraintTargetProps {
    /**
     * Whether the switch row is in the "on" or "off" position.
     * @since 1.4
     */
    active?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AdwSwitchRowConstructOnly = AdwActionRowConstructOnly | GtkAccessibleConstructOnly | GtkActionableConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** A tab bar for [class@TabView]. */
export interface AdwTabBarProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /** Whether the tabs automatically hide. */
    autohide?: boolean;
    /** The widget shown after the tabs. */
    'end-action-widget'?: Gtk.Widget | null;
    /** Whether tabs expand to full width. */
    'expand-tabs'?: boolean;
    /**
     * Whether the drop data should be preloaded on hover.
     * @since 1.3
     */
    'extra-drag-preload'?: boolean;
    /** Whether tabs use inverted layout. */
    inverted?: boolean;
    /** The widget shown before the tabs. */
    'start-action-widget'?: Gtk.Widget | null;
    /** The tab view the tab bar controls. */
    view?: Adw.TabView | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AdwTabBarConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** A button that displays the number of [class@TabView] pages. */
export interface AdwTabButtonProps extends GtkWidgetProps, GtkAccessibleProps, GtkActionableProps, GtkBuildableProps, GtkConstraintTargetProps {
    /**
     * The view the tab button displays.
     * @since 1.3
     */
    view?: Adw.TabView | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AdwTabButtonConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkActionableConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** A tab overview for [class@TabView]. */
export interface AdwTabOverviewProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /**
     * The child widget.
     * @since 1.3
     */
    child?: Gtk.Widget | null;
    /**
     * Whether to enable new tab button.
     * @since 1.3
     */
    'enable-new-tab'?: boolean;
    /**
     * Whether to enable search in tabs.
     * @since 1.3
     */
    'enable-search'?: boolean;
    /**
     * Whether the drop data should be preloaded on hover.
     * @since 1.3
     */
    'extra-drag-preload'?: boolean;
    /**
     * Whether thumbnails use inverted layout.
     * @since 1.3
     */
    inverted?: boolean;
    /**
     * Whether the overview is open.
     * @since 1.3
     */
    open?: boolean;
    /**
     * The secondary menu model.
     * @since 1.3
     */
    'secondary-menu'?: Gio.MenuModel | null;
    /**
     * Whether to show end title buttons in the overview's header bar.
     * @since 1.3
     */
    'show-end-title-buttons'?: boolean;
    /**
     * Whether to show start title buttons in the overview's header bar.
     * @since 1.3
     */
    'show-start-title-buttons'?: boolean;
    /**
     * The tab view the overview controls.
     * @since 1.3
     */
    view?: Adw.TabView | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AdwTabOverviewConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** A dynamic tabbed container. */
export interface AdwTabViewProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /** Default page icon. */
    'default-icon'?: Gio.Icon;
    /** Tab context menu model. */
    'menu-model'?: Gio.MenuModel | null;
    /** The currently selected page. */
    'selected-page'?: Adw.TabPage | null;
    /**
     * The enabled shortcuts.
     * @since 1.2
     */
    shortcuts?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AdwTabViewConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** A widget showing toasts above its content. */
export interface AdwToastOverlayProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /** The child widget. */
    child?: Gtk.Widget | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AdwToastOverlayConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** A group of exclusive toggles. */
export interface AdwToggleGroupProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkOrientableProps {
    /**
     * The index of the active toggle.
     * @since 1.7
     */
    active?: number;
    /**
     * The name of the active toggle.
     * @since 1.7
     */
    'active-name'?: string | null;
    /**
     * Whether the toggles can be smaller than the natural size of their contents.
     * @since 1.7
     */
    'can-shrink'?: boolean;
    /**
     * Whether all toggles take the same size.
     * @since 1.7
     */
    homogeneous?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AdwToggleGroupConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkOrientableConstructOnly;

/** A widget containing a page, as well as top and/or bottom bars. */
export interface AdwToolbarViewProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /**
     * Appearance of the bottom bars.
     * @since 1.4
     */
    'bottom-bar-style'?: AdwToolbarStyleNick | Adw.ToolbarStyle;
    /**
     * The content widget.
     * @since 1.4
     */
    content?: Gtk.Widget | null;
    /**
     * Whether the content widget can extend behind bottom bars.
     * @since 1.4
     */
    'extend-content-to-bottom-edge'?: boolean;
    /**
     * Whether the content widget can extend behind top bars.
     * @since 1.4
     */
    'extend-content-to-top-edge'?: boolean;
    /**
     * Whether bottom bars are visible.
     * @since 1.4
     */
    'reveal-bottom-bars'?: boolean;
    /**
     * Whether top bars are revealed.
     * @since 1.4
     */
    'reveal-top-bars'?: boolean;
    /**
     * Appearance of the top bars.
     * @since 1.4
     */
    'top-bar-style'?: AdwToolbarStyleNick | Adw.ToolbarStyle;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AdwToolbarViewConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** A view container for [class@ViewSwitcher]. */
export interface AdwViewStackProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /**
     * Whether the stack uses a crossfade transition between pages.
     * @since 1.7
     */
    'enable-transitions'?: boolean;
    /** Whether the stack is horizontally homogeneous. */
    hhomogeneous?: boolean;
    /**
     * The transition animation duration, in milliseconds.
     * @since 1.7
     */
    'transition-duration'?: number;
    /** Whether the stack is vertically homogeneous. */
    vhomogeneous?: boolean;
    /** The widget currently visible in the stack. */
    'visible-child'?: Gtk.Widget | null;
    /** The name of the widget currently visible in the stack. */
    'visible-child-name'?: string | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AdwViewStackConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** An adaptive view switcher. */
export interface AdwViewSwitcherProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /** The policy to determine which mode to use. */
    policy?: AdwViewSwitcherPolicyNick | Adw.ViewSwitcherPolicy;
    /** The stack the view switcher controls. */
    stack?: Adw.ViewStack | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AdwViewSwitcherConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** A view switcher action bar. */
export interface AdwViewSwitcherBarProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /** Whether the bar should be revealed or hidden. */
    reveal?: boolean;
    /** The stack the view switcher controls. */
    stack?: Adw.ViewStack | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AdwViewSwitcherBarConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** An adaptive sidebar that controls an [class@ViewStack]. */
export interface AdwViewSwitcherSidebarProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /**
     * The item filter.
     * @since 1.9
     */
    filter?: Gtk.Filter | null;
    /**
     * Determines the sidebar's look and behavior.
     * @since 1.9
     */
    mode?: AdwSidebarModeNick | Adw.SidebarMode;
    /**
     * The placeholder widget.
     * @since 1.9
     */
    placeholder?: Gtk.Widget | null;
    /**
     * The stack the sidebar controls.
     * @since 1.9
     */
    stack?: Adw.ViewStack | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AdwViewSwitcherSidebarConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** A view switcher title. */
export interface AdwViewSwitcherTitleProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /** The stack the view switcher controls. */
    stack?: Adw.ViewStack | null;
    /** The subtitle to display. */
    subtitle?: string;
    /** The title to display. */
    title?: string;
    /** Whether the view switcher is enabled. */
    'view-switcher-enabled'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AdwViewSwitcherTitleConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** A freeform window. */
export interface AdwWindowProps extends GtkWindowProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkNativeProps, GtkRootProps, GtkShortcutManagerProps {
    /**
     * Whether adaptive preview is currently open.
     * @since 1.7
     */
    'adaptive-preview'?: boolean;
    /** The content widget. */
    content?: Gtk.Widget | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AdwWindowConstructOnly = GtkWindowConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkNativeConstructOnly | GtkRootConstructOnly | GtkShortcutManagerConstructOnly;

/** A helper widget for setting a window's title and subtitle. */
export interface AdwWindowTitleProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /** The subtitle to display. */
    subtitle?: string;
    /** The title to display. */
    title?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AdwWindowTitleConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** A box-like widget that can wrap into multiple lines. */
export interface AdwWrapBoxProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkOrientableProps {
    /**
     * The alignment of the children within each line.
     * @since 1.7
     */
    align?: number;
    /**
     * The spacing between widgets on the same line.
     * @since 1.7
     */
    'child-spacing'?: number;
    /**
     * The length unit for child spacing.
     * @since 1.7
     */
    'child-spacing-unit'?: AdwLengthUnitNick | Adw.LengthUnit;
    /**
     * Determines whether and how each complete line should be stretched to fill the entire widget.
     * @since 1.7
     */
    justify?: AdwJustifyModeNick | Adw.JustifyMode;
    /**
     * Whether the last line should be stretched to fill the entire widget.
     * @since 1.7
     */
    'justify-last-line'?: boolean;
    /**
     * Whether all lines should take the same amount of space.
     * @since 1.7
     */
    'line-homogeneous'?: boolean;
    /**
     * The spacing between lines.
     * @since 1.7
     */
    'line-spacing'?: number;
    /**
     * The length unit for line spacing.
     * @since 1.7
     */
    'line-spacing-unit'?: AdwLengthUnitNick | Adw.LengthUnit;
    /**
     * Determines the natural size for each line.
     * @since 1.7
     */
    'natural-line-length'?: number;
    /**
     * The length unit for natural line length.
     * @since 1.7
     */
    'natural-line-length-unit'?: AdwLengthUnitNick | Adw.LengthUnit;
    /**
     * The direction children are packed in each line.
     * @since 1.7
     */
    'pack-direction'?: AdwPackDirectionNick | Adw.PackDirection;
    /**
     * The policy for line wrapping.
     * @since 1.7
     */
    'wrap-policy'?: AdwWrapPolicyNick | Adw.WrapPolicy;
    /**
     * Whether wrap direction should be reversed.
     * @since 1.7
     */
    'wrap-reverse'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AdwWrapBoxConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkOrientableConstructOnly;

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
    AdwAboutDialog: {
        class: Adw.AboutDialog;
        props: AdwAboutDialogProps;
        signals: Adw.AboutDialog.SignalSignatures;
        constructOnly: AdwAboutDialogConstructOnly;
        slotCandidates: {};
    };
    AdwAboutWindow: {
        class: Adw.AboutWindow;
        props: AdwAboutWindowProps;
        signals: Adw.AboutWindow.SignalSignatures;
        constructOnly: AdwAboutWindowConstructOnly;
        slotCandidates: {};
    };
    AdwActionRow: {
        class: Adw.ActionRow;
        props: AdwActionRowProps;
        signals: Adw.ActionRow.SignalSignatures;
        constructOnly: AdwActionRowConstructOnly;
        slotCandidates: {
        'activatable': 'set_activatable_widget';
        'prefix': 'add_prefix';
        'suffix': 'add_suffix';
        };
    };
    AdwAlertDialog: {
        class: Adw.AlertDialog;
        props: AdwAlertDialogProps;
        signals: Adw.AlertDialog.SignalSignatures;
        constructOnly: AdwAlertDialogConstructOnly;
        slotCandidates: {
        'extra-child': 'set_extra_child';
        };
    };
    AdwApplicationWindow: {
        class: Adw.ApplicationWindow;
        props: AdwApplicationWindowProps;
        signals: Adw.ApplicationWindow.SignalSignatures;
        constructOnly: AdwApplicationWindowConstructOnly;
        slotCandidates: {
        'content': 'set_content';
        };
    };
    AdwAvatar: {
        class: Adw.Avatar;
        props: AdwAvatarProps;
        signals: Adw.Avatar.SignalSignatures;
        constructOnly: AdwAvatarConstructOnly;
        slotCandidates: {};
    };
    AdwBanner: {
        class: Adw.Banner;
        props: AdwBannerProps;
        signals: Adw.Banner.SignalSignatures;
        constructOnly: AdwBannerConstructOnly;
        slotCandidates: {};
    };
    AdwBin: {
        class: Adw.Bin;
        props: AdwBinProps;
        signals: Adw.Bin.SignalSignatures;
        constructOnly: AdwBinConstructOnly;
        slotCandidates: {
        'child': 'set_child';
        };
    };
    AdwBottomSheet: {
        class: Adw.BottomSheet;
        props: AdwBottomSheetProps;
        signals: Adw.BottomSheet.SignalSignatures;
        constructOnly: AdwBottomSheetConstructOnly;
        slotCandidates: {
        'bottom-bar': 'set_bottom_bar';
        'content': 'set_content';
        'sheet': 'set_sheet';
        };
    };
    AdwBreakpointBin: {
        class: Adw.BreakpointBin;
        props: AdwBreakpointBinProps;
        signals: Adw.BreakpointBin.SignalSignatures;
        constructOnly: AdwBreakpointBinConstructOnly;
        slotCandidates: {
        'child': 'set_child';
        };
    };
    AdwButtonContent: {
        class: Adw.ButtonContent;
        props: AdwButtonContentProps;
        signals: Adw.ButtonContent.SignalSignatures;
        constructOnly: AdwButtonContentConstructOnly;
        slotCandidates: {};
    };
    AdwButtonRow: {
        class: Adw.ButtonRow;
        props: AdwButtonRowProps;
        signals: Adw.ButtonRow.SignalSignatures;
        constructOnly: AdwButtonRowConstructOnly;
        slotCandidates: {};
    };
    AdwCarousel: {
        class: Adw.Carousel;
        props: AdwCarouselProps;
        signals: Adw.Carousel.SignalSignatures;
        constructOnly: AdwCarouselConstructOnly;
        slotCandidates: {};
    };
    AdwCarouselIndicatorDots: {
        class: Adw.CarouselIndicatorDots;
        props: AdwCarouselIndicatorDotsProps;
        signals: Adw.CarouselIndicatorDots.SignalSignatures;
        constructOnly: AdwCarouselIndicatorDotsConstructOnly;
        slotCandidates: {
        'carousel': 'set_carousel';
        };
    };
    AdwCarouselIndicatorLines: {
        class: Adw.CarouselIndicatorLines;
        props: AdwCarouselIndicatorLinesProps;
        signals: Adw.CarouselIndicatorLines.SignalSignatures;
        constructOnly: AdwCarouselIndicatorLinesConstructOnly;
        slotCandidates: {
        'carousel': 'set_carousel';
        };
    };
    AdwClamp: {
        class: Adw.Clamp;
        props: AdwClampProps;
        signals: Adw.Clamp.SignalSignatures;
        constructOnly: AdwClampConstructOnly;
        slotCandidates: {
        'child': 'set_child';
        };
    };
    AdwClampScrollable: {
        class: Adw.ClampScrollable;
        props: AdwClampScrollableProps;
        signals: Adw.ClampScrollable.SignalSignatures;
        constructOnly: AdwClampScrollableConstructOnly;
        slotCandidates: {
        'child': 'set_child';
        };
    };
    AdwComboRow: {
        class: Adw.ComboRow;
        props: AdwComboRowProps;
        signals: Adw.ComboRow.SignalSignatures;
        constructOnly: AdwComboRowConstructOnly;
        slotCandidates: {};
    };
    AdwDialog: {
        class: Adw.Dialog;
        props: AdwDialogProps;
        signals: Adw.Dialog.SignalSignatures;
        constructOnly: AdwDialogConstructOnly;
        slotCandidates: {
        'child': 'set_child';
        'default': 'set_default_widget';
        'focus': 'set_focus';
        };
    };
    AdwEntryRow: {
        class: Adw.EntryRow;
        props: AdwEntryRowProps;
        signals: Adw.EntryRow.SignalSignatures;
        constructOnly: AdwEntryRowConstructOnly;
        slotCandidates: {
        'prefix': 'add_prefix';
        'suffix': 'add_suffix';
        };
    };
    AdwExpanderRow: {
        class: Adw.ExpanderRow;
        props: AdwExpanderRowProps;
        signals: Adw.ExpanderRow.SignalSignatures;
        constructOnly: AdwExpanderRowConstructOnly;
        slotCandidates: {
        'action': 'add_action';
        'prefix': 'add_prefix';
        'row': 'add_row';
        'suffix': 'add_suffix';
        };
    };
    AdwFlap: {
        class: Adw.Flap;
        props: AdwFlapProps;
        signals: Adw.Flap.SignalSignatures;
        constructOnly: AdwFlapConstructOnly;
        slotCandidates: {
        'content': 'set_content';
        'flap': 'set_flap';
        'separator': 'set_separator';
        };
    };
    AdwHeaderBar: {
        class: Adw.HeaderBar;
        props: AdwHeaderBarProps;
        signals: Adw.HeaderBar.SignalSignatures;
        constructOnly: AdwHeaderBarConstructOnly;
        slotCandidates: {
        'end': 'pack_end';
        'start': 'pack_start';
        'title': 'set_title_widget';
        };
    };
    AdwInlineViewSwitcher: {
        class: Adw.InlineViewSwitcher;
        props: AdwInlineViewSwitcherProps;
        signals: Adw.InlineViewSwitcher.SignalSignatures;
        constructOnly: AdwInlineViewSwitcherConstructOnly;
        slotCandidates: {
        'stack': 'set_stack';
        };
    };
    AdwLayoutSlot: {
        class: Adw.LayoutSlot;
        props: AdwLayoutSlotProps;
        signals: Adw.LayoutSlot.SignalSignatures;
        constructOnly: AdwLayoutSlotConstructOnly;
        slotCandidates: {};
    };
    AdwLeaflet: {
        class: Adw.Leaflet;
        props: AdwLeafletProps;
        signals: Adw.Leaflet.SignalSignatures;
        constructOnly: AdwLeafletConstructOnly;
        slotCandidates: {
        'visible-child': 'set_visible_child';
        };
    };
    AdwMessageDialog: {
        class: Adw.MessageDialog;
        props: AdwMessageDialogProps;
        signals: Adw.MessageDialog.SignalSignatures;
        constructOnly: AdwMessageDialogConstructOnly;
        slotCandidates: {
        'extra-child': 'set_extra_child';
        };
    };
    AdwMultiLayoutView: {
        class: Adw.MultiLayoutView;
        props: AdwMultiLayoutViewProps;
        signals: Adw.MultiLayoutView.SignalSignatures;
        constructOnly: AdwMultiLayoutViewConstructOnly;
        slotCandidates: {};
    };
    AdwNavigationPage: {
        class: Adw.NavigationPage;
        props: AdwNavigationPageProps;
        signals: Adw.NavigationPage.SignalSignatures;
        constructOnly: AdwNavigationPageConstructOnly;
        slotCandidates: {
        'child': 'set_child';
        };
    };
    AdwNavigationSplitView: {
        class: Adw.NavigationSplitView;
        props: AdwNavigationSplitViewProps;
        signals: Adw.NavigationSplitView.SignalSignatures;
        constructOnly: AdwNavigationSplitViewConstructOnly;
        slotCandidates: {
        'content': 'set_content';
        'sidebar': 'set_sidebar';
        };
    };
    AdwNavigationView: {
        class: Adw.NavigationView;
        props: AdwNavigationViewProps;
        signals: Adw.NavigationView.SignalSignatures;
        constructOnly: AdwNavigationViewConstructOnly;
        slotCandidates: {};
    };
    AdwOverlaySplitView: {
        class: Adw.OverlaySplitView;
        props: AdwOverlaySplitViewProps;
        signals: Adw.OverlaySplitView.SignalSignatures;
        constructOnly: AdwOverlaySplitViewConstructOnly;
        slotCandidates: {
        'content': 'set_content';
        'sidebar': 'set_sidebar';
        };
    };
    AdwPasswordEntryRow: {
        class: Adw.PasswordEntryRow;
        props: AdwPasswordEntryRowProps;
        signals: Adw.PasswordEntryRow.SignalSignatures;
        constructOnly: AdwPasswordEntryRowConstructOnly;
        slotCandidates: {};
    };
    AdwPreferencesDialog: {
        class: Adw.PreferencesDialog;
        props: AdwPreferencesDialogProps;
        signals: Adw.PreferencesDialog.SignalSignatures;
        constructOnly: AdwPreferencesDialogConstructOnly;
        slotCandidates: {
        'visible-page': 'set_visible_page';
        };
    };
    AdwPreferencesGroup: {
        class: Adw.PreferencesGroup;
        props: AdwPreferencesGroupProps;
        signals: Adw.PreferencesGroup.SignalSignatures;
        constructOnly: AdwPreferencesGroupConstructOnly;
        slotCandidates: {
        'header-suffix': 'set_header_suffix';
        };
    };
    AdwPreferencesPage: {
        class: Adw.PreferencesPage;
        props: AdwPreferencesPageProps;
        signals: Adw.PreferencesPage.SignalSignatures;
        constructOnly: AdwPreferencesPageConstructOnly;
        slotCandidates: {
        'banner': 'set_banner';
        };
    };
    AdwPreferencesRow: {
        class: Adw.PreferencesRow;
        props: AdwPreferencesRowProps;
        signals: Adw.PreferencesRow.SignalSignatures;
        constructOnly: AdwPreferencesRowConstructOnly;
        slotCandidates: {};
    };
    AdwPreferencesWindow: {
        class: Adw.PreferencesWindow;
        props: AdwPreferencesWindowProps;
        signals: Adw.PreferencesWindow.SignalSignatures;
        constructOnly: AdwPreferencesWindowConstructOnly;
        slotCandidates: {
        'visible-page': 'set_visible_page';
        };
    };
    AdwShortcutLabel: {
        class: Adw.ShortcutLabel;
        props: AdwShortcutLabelProps;
        signals: Adw.ShortcutLabel.SignalSignatures;
        constructOnly: AdwShortcutLabelConstructOnly;
        slotCandidates: {};
    };
    AdwShortcutsDialog: {
        class: Adw.ShortcutsDialog;
        props: AdwShortcutsDialogProps;
        signals: Adw.ShortcutsDialog.SignalSignatures;
        constructOnly: AdwShortcutsDialogConstructOnly;
        slotCandidates: {};
    };
    AdwSidebar: {
        class: Adw.Sidebar;
        props: AdwSidebarProps;
        signals: Adw.Sidebar.SignalSignatures;
        constructOnly: AdwSidebarConstructOnly;
        slotCandidates: {
        'placeholder': 'set_placeholder';
        };
    };
    AdwSpinRow: {
        class: Adw.SpinRow;
        props: AdwSpinRowProps;
        signals: Adw.SpinRow.SignalSignatures;
        constructOnly: AdwSpinRowConstructOnly;
        slotCandidates: {};
    };
    AdwSpinner: {
        class: Adw.Spinner;
        props: AdwSpinnerProps;
        signals: Adw.Spinner.SignalSignatures;
        constructOnly: AdwSpinnerConstructOnly;
        slotCandidates: {};
    };
    AdwSplitButton: {
        class: Adw.SplitButton;
        props: AdwSplitButtonProps;
        signals: Adw.SplitButton.SignalSignatures;
        constructOnly: AdwSplitButtonConstructOnly;
        slotCandidates: {
        'child': 'set_child';
        'popover': 'set_popover';
        };
    };
    AdwSqueezer: {
        class: Adw.Squeezer;
        props: AdwSqueezerProps;
        signals: Adw.Squeezer.SignalSignatures;
        constructOnly: AdwSqueezerConstructOnly;
        slotCandidates: {};
    };
    AdwStatusPage: {
        class: Adw.StatusPage;
        props: AdwStatusPageProps;
        signals: Adw.StatusPage.SignalSignatures;
        constructOnly: AdwStatusPageConstructOnly;
        slotCandidates: {
        'child': 'set_child';
        };
    };
    AdwSwitchRow: {
        class: Adw.SwitchRow;
        props: AdwSwitchRowProps;
        signals: Adw.SwitchRow.SignalSignatures;
        constructOnly: AdwSwitchRowConstructOnly;
        slotCandidates: {};
    };
    AdwTabBar: {
        class: Adw.TabBar;
        props: AdwTabBarProps;
        signals: Adw.TabBar.SignalSignatures;
        constructOnly: AdwTabBarConstructOnly;
        slotCandidates: {
        'end-action': 'set_end_action_widget';
        'start-action': 'set_start_action_widget';
        'view': 'set_view';
        };
    };
    AdwTabButton: {
        class: Adw.TabButton;
        props: AdwTabButtonProps;
        signals: Adw.TabButton.SignalSignatures;
        constructOnly: AdwTabButtonConstructOnly;
        slotCandidates: {
        'view': 'set_view';
        };
    };
    AdwTabOverview: {
        class: Adw.TabOverview;
        props: AdwTabOverviewProps;
        signals: Adw.TabOverview.SignalSignatures;
        constructOnly: AdwTabOverviewConstructOnly;
        slotCandidates: {
        'child': 'set_child';
        'view': 'set_view';
        };
    };
    AdwTabView: {
        class: Adw.TabView;
        props: AdwTabViewProps;
        signals: Adw.TabView.SignalSignatures;
        constructOnly: AdwTabViewConstructOnly;
        slotCandidates: {};
    };
    AdwToastOverlay: {
        class: Adw.ToastOverlay;
        props: AdwToastOverlayProps;
        signals: Adw.ToastOverlay.SignalSignatures;
        constructOnly: AdwToastOverlayConstructOnly;
        slotCandidates: {
        'child': 'set_child';
        };
    };
    AdwToggleGroup: {
        class: Adw.ToggleGroup;
        props: AdwToggleGroupProps;
        signals: Adw.ToggleGroup.SignalSignatures;
        constructOnly: AdwToggleGroupConstructOnly;
        slotCandidates: {};
    };
    AdwToolbarView: {
        class: Adw.ToolbarView;
        props: AdwToolbarViewProps;
        signals: Adw.ToolbarView.SignalSignatures;
        constructOnly: AdwToolbarViewConstructOnly;
        slotCandidates: {
        'bottom': 'add_bottom_bar';
        'content': 'set_content';
        'top': 'add_top_bar';
        };
    };
    AdwViewStack: {
        class: Adw.ViewStack;
        props: AdwViewStackProps;
        signals: Adw.ViewStack.SignalSignatures;
        constructOnly: AdwViewStackConstructOnly;
        slotCandidates: {
        'visible-child': 'set_visible_child';
        };
    };
    AdwViewSwitcher: {
        class: Adw.ViewSwitcher;
        props: AdwViewSwitcherProps;
        signals: Adw.ViewSwitcher.SignalSignatures;
        constructOnly: AdwViewSwitcherConstructOnly;
        slotCandidates: {
        'stack': 'set_stack';
        };
    };
    AdwViewSwitcherBar: {
        class: Adw.ViewSwitcherBar;
        props: AdwViewSwitcherBarProps;
        signals: Adw.ViewSwitcherBar.SignalSignatures;
        constructOnly: AdwViewSwitcherBarConstructOnly;
        slotCandidates: {
        'stack': 'set_stack';
        };
    };
    AdwViewSwitcherSidebar: {
        class: Adw.ViewSwitcherSidebar;
        props: AdwViewSwitcherSidebarProps;
        signals: Adw.ViewSwitcherSidebar.SignalSignatures;
        constructOnly: AdwViewSwitcherSidebarConstructOnly;
        slotCandidates: {
        'placeholder': 'set_placeholder';
        'stack': 'set_stack';
        };
    };
    AdwViewSwitcherTitle: {
        class: Adw.ViewSwitcherTitle;
        props: AdwViewSwitcherTitleProps;
        signals: Adw.ViewSwitcherTitle.SignalSignatures;
        constructOnly: AdwViewSwitcherTitleConstructOnly;
        slotCandidates: {
        'stack': 'set_stack';
        };
    };
    AdwWindow: {
        class: Adw.Window;
        props: AdwWindowProps;
        signals: Adw.Window.SignalSignatures;
        constructOnly: AdwWindowConstructOnly;
        slotCandidates: {
        'content': 'set_content';
        };
    };
    AdwWindowTitle: {
        class: Adw.WindowTitle;
        props: AdwWindowTitleProps;
        signals: Adw.WindowTitle.SignalSignatures;
        constructOnly: AdwWindowTitleConstructOnly;
        slotCandidates: {};
    };
    AdwWrapBox: {
        class: Adw.WrapBox;
        props: AdwWrapBoxProps;
        signals: Adw.WrapBox.SignalSignatures;
        constructOnly: AdwWrapBoxConstructOnly;
        slotCandidates: {};
    };
}

/** Every GType this namespace can create. A consumer derives its own tag map. */
export type WidgetGType = keyof Widgets;

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
