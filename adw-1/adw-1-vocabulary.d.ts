/**
 * The GIR-derived widget VOCABULARY for Adw-1.
 *
 * GENERATED — do not edit. Provenance: Adw-1 — library 1.10.0 — 1 child holder(s) — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Gio.ActionGroup Gio.ActionMap
 *
 * 62 concrete widgets, 1 child holders, 64 declarations, 25 enum nick unions, 67 slot candidates.
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
import type { GtkAccessibleConstructOnly, GtkAccessibleProps, GtkActionableConstructOnly, GtkActionableProps, GtkApplicationWindowConstructOnly, GtkApplicationWindowProps, GtkArrowTypeNick, GtkBuildableConstructOnly, GtkBuildableProps, GtkConstraintTargetConstructOnly, GtkConstraintTargetProps, GtkEditableConstructOnly, GtkEditableProps, GtkInputPurposeNick, GtkLicenseNick, GtkListBoxRowConstructOnly, GtkListBoxRowProps, GtkNativeConstructOnly, GtkNativeProps, GtkOrientableConstructOnly, GtkOrientableProps, GtkPackTypeNick, GtkRootConstructOnly, GtkRootProps, GtkScrollableConstructOnly, GtkScrollableProps, GtkShortcutManagerConstructOnly, GtkShortcutManagerProps, GtkSpinButtonUpdatePolicyNick, GtkStringFilterMatchModeNick, GtkWidgetConstructOnly, GtkWidgetProps, GtkWindowConstructOnly, GtkWindowProps } from '@girs/gtk-4.0/vocabulary';

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
     * @default NULL
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
     * @default GTK_LICENSE_UNKNOWN
     */
    'license-type'?: GtkLicenseNick | Gtk.License;
    /**
     * The "Other apps" section title.
     * @since 1.10
     */
    'other-apps-title'?: string;
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
     * @deprecated since 1.6: Use [class@AboutDialog].
     */
    'application-icon'?: string;
    /**
     * The name of the application.
     * @since 1.2
     * @deprecated since 1.6: Use [class@AboutDialog].
     */
    'application-name'?: string;
    /**
     * The list of artists of the application.
     * @since 1.2
     * @deprecated since 1.6: Use [class@AboutDialog].
     */
    artists?: string[] | null;
    /**
     * The comments about the application.
     * @since 1.2
     * @deprecated since 1.6: Use [class@AboutDialog].
     */
    comments?: string;
    /**
     * The copyright information.
     * @since 1.2
     * @deprecated since 1.6: Use [class@AboutDialog].
     */
    copyright?: string;
    /**
     * The debug information.
     * @since 1.2
     * @deprecated since 1.6: Use [class@AboutDialog].
     */
    'debug-info'?: string;
    /**
     * The debug information filename.
     * @since 1.2
     * @deprecated since 1.6: Use [class@AboutDialog].
     */
    'debug-info-filename'?: string;
    /**
     * The list of designers of the application.
     * @since 1.2
     * @deprecated since 1.6: Use [class@AboutDialog].
     */
    designers?: string[] | null;
    /**
     * The developer name.
     * @since 1.2
     * @deprecated since 1.6: Use [class@AboutDialog].
     */
    'developer-name'?: string;
    /**
     * The list of developers of the application.
     * @since 1.2
     * @deprecated since 1.6: Use [class@AboutDialog].
     */
    developers?: string[] | null;
    /**
     * The list of documenters of the application.
     * @since 1.2
     * @deprecated since 1.6: Use [class@AboutDialog].
     */
    documenters?: string[] | null;
    /**
     * The URL for the application's issue tracker.
     * @since 1.2
     * @deprecated since 1.6: Use [class@AboutDialog].
     */
    'issue-url'?: string;
    /**
     * The license text.
     * @since 1.2
     * @deprecated since 1.6: Use [class@AboutDialog].
     */
    license?: string;
    /**
     * The license type.
     * @since 1.2
     * @default GTK_LICENSE_UNKNOWN
     * @deprecated since 1.6: Use [class@AboutDialog].
     */
    'license-type'?: GtkLicenseNick | Gtk.License;
    /**
     * The release notes of the application.
     * @since 1.2
     * @deprecated since 1.6: Use [class@AboutDialog].
     */
    'release-notes'?: string;
    /**
     * The version described by the application's release notes.
     * @since 1.2
     * @deprecated since 1.6: Use [class@AboutDialog].
     */
    'release-notes-version'?: string;
    /**
     * The URL of the application's support page.
     * @since 1.2
     * @deprecated since 1.6: Use [class@AboutDialog].
     */
    'support-url'?: string;
    /**
     * The translator credits string.
     * @since 1.2
     * @deprecated since 1.6: Use [class@AboutDialog].
     */
    'translator-credits'?: string;
    /**
     * The version of the application.
     * @since 1.2
     * @deprecated since 1.6: Use [class@AboutDialog].
     */
    version?: string;
    /**
     * The URL of the application's website.
     * @since 1.2
     * @deprecated since 1.6: Use [class@AboutDialog].
     */
    website?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AdwAboutWindowConstructOnly = AdwWindowConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkNativeConstructOnly | GtkRootConstructOnly | GtkShortcutManagerConstructOnly;

/** A [class@Gtk.ListBoxRow] used to present actions. */
export interface AdwActionRowProps extends AdwPreferencesRowProps, GtkAccessibleProps, GtkActionableProps, GtkBuildableProps, GtkConstraintTargetProps {
    /** The widget to activate when the row is activated. */
    'activatable-widget'?: Gtk.Widget | null;
    /**
     * The icon name for this row.
     * @deprecated since 1.3: Use [method@ActionRow.add_prefix] to add an icon.
     */
    'icon-name'?: string | null;
    /** The subtitle for this row. */
    subtitle?: string | null;
    /**
     * The number of lines at the end of which the subtitle label will be ellipsized.
     * @default 0
     */
    'subtitle-lines'?: number;
    /**
     * Whether the user can copy the subtitle from the label.
     * @since 1.3
     * @default FALSE
     */
    'subtitle-selectable'?: boolean;
    /**
     * The number of lines at the end of which the title label will be ellipsized.
     * @default 0
     */
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
     * @default FALSE
     */
    'body-use-markup'?: boolean;
    /**
     * The ID of the close response.
     * @since 1.5
     * @default close
     */
    'close-response'?: string;
    /**
     * The response ID of the default response.
     * @since 1.5
     * @default NULL
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
     * @default FALSE
     */
    'heading-use-markup'?: boolean;
    /**
     * Whether to prefer horizontal button layout.
     * @since 1.6
     * @default FALSE
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
     * @default FALSE
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
    /**
     * The name of an icon to use as a fallback.
     * @default NULL
     */
    'icon-name'?: string | null;
    /**
     * Whether initials are used instead of an icon on the fallback avatar.
     * @default FALSE
     */
    'show-initials'?: boolean;
    /**
     * The size of the avatar.
     * @default -1
     */
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
     * @default ADW_BANNER_BUTTON_DEFAULT
     */
    'button-style'?: AdwBannerButtonStyleNick | Adw.BannerButtonStyle;
    /**
     * Whether the banner is currently revealed.
     * @since 1.3
     * @default FALSE
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
     * @default TRUE
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
     * @default 0.500000
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
     * @default TRUE
     */
    'can-close'?: boolean;
    /**
     * Whether the bottom sheet can be opened by user.
     * @since 1.6
     * @default TRUE
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
     * @default TRUE
     */
    'full-width'?: boolean;
    /**
     * Whether the bottom sheet is modal.
     * @since 1.6
     * @default TRUE
     */
    modal?: boolean;
    /**
     * Whether the bottom sheet is open.
     * @since 1.6
     * @default FALSE
     */
    open?: boolean;
    /**
     * Whether to reveal the bottom bar.
     * @since 1.7
     * @default TRUE
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
     * @default TRUE
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
     * @default FALSE
     */
    'can-shrink'?: boolean;
    /** The name of the displayed icon. */
    'icon-name'?: string;
    /** The displayed label. */
    label?: string;
    /**
     * Whether an underline in the text indicates a mnemonic.
     * @default FALSE
     */
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
    /**
     * Whether to allow swiping for more than one page at a time.
     * @default FALSE
     */
    'allow-long-swipes'?: boolean;
    /**
     * Sets whether the `AdwCarousel` can be dragged with mouse pointer.
     * @default TRUE
     */
    'allow-mouse-drag'?: boolean;
    /**
     * Whether the widget will respond to scroll wheel events.
     * @default TRUE
     */
    'allow-scroll-wheel'?: boolean;
    /**
     * Whether the carousel can be navigated.
     * @default TRUE
     */
    interactive?: boolean;
    /**
     * Page reveal duration, in milliseconds.
     * @default 0
     */
    'reveal-duration'?: number;
    /** Scroll animation spring parameters. */
    'scroll-params'?: Adw.SpringParams;
    /**
     * Spacing between pages in pixels.
     * @default 0
     */
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
    /**
     * The maximum size allocated to the child.
     * @default 600
     */
    'maximum-size'?: number;
    /**
     * The size above which the child is clamped.
     * @default 400
     */
    'tightening-threshold'?: number;
    /**
     * The length unit for maximum size and tightening threshold.
     * @since 1.4
     * @default ADW_LENGTH_UNIT_SP
     */
    unit?: AdwLengthUnitNick | Adw.LengthUnit;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AdwClampConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkOrientableConstructOnly;

/** A scrollable [class@Clamp]. */
export interface AdwClampScrollableProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkOrientableProps, GtkScrollableProps {
    /** The child widget of the `AdwClampScrollable`. */
    child?: Gtk.Widget | null;
    /**
     * The maximum size allocated to the child.
     * @default 600
     */
    'maximum-size'?: number;
    /**
     * The size above which the child is clamped.
     * @default 400
     */
    'tightening-threshold'?: number;
    /**
     * The length unit for maximum size and tightening threshold.
     * @since 1.4
     * @default ADW_LENGTH_UNIT_SP
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
     * @default FALSE
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
     * @default GTK_STRING_FILTER_MATCH_MODE_PREFIX
     */
    'search-match-mode'?: GtkStringFilterMatchModeNick | Gtk.StringFilterMatchMode;
    /**
     * The position of the selected item.
     * @default 4294967295
     */
    selected?: number;
    /**
     * Whether to use the current value as the subtitle.
     * @default FALSE
     */
    'use-subtitle'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AdwComboRowConstructOnly = AdwActionRowConstructOnly | GtkAccessibleConstructOnly | GtkActionableConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** An adaptive dialog container. */
export interface AdwDialogProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkShortcutManagerProps {
    /**
     * Whether the dialog can be closed.
     * @since 1.5
     * @default TRUE
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
     * @default -1
     */
    'content-height'?: number;
    /**
     * The width of the dialog's contents.
     * @since 1.5
     * @default -1
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
     * @default FALSE
     */
    'follows-content-size'?: boolean;
    /**
     * The dialog's presentation mode.
     * @since 1.5
     * @default ADW_DIALOG_AUTO
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
     * @default FALSE
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
     * @default FALSE
     */
    'enable-emoji-completion'?: boolean;
    /**
     * Additional input hints for the entry row.
     * @since 1.2
     * @default GTK_INPUT_HINT_NONE
     */
    'input-hints'?: number;
    /**
     * The input purpose of the entry row.
     * @since 1.2
     * @default GTK_INPUT_PURPOSE_FREE_FORM
     */
    'input-purpose'?: GtkInputPurposeNick | Gtk.InputPurpose;
    /**
     * Maximum number of characters for the entry.
     * @since 1.6
     * @default 0
     */
    'max-length'?: number;
    /**
     * Whether to show the apply button.
     * @since 1.2
     * @default FALSE
     */
    'show-apply-button'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AdwEntryRowConstructOnly = AdwPreferencesRowConstructOnly | GtkAccessibleConstructOnly | GtkActionableConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkEditableConstructOnly;

/** A [class@Gtk.ListBoxRow] used to reveal widgets. */
export interface AdwExpanderRowProps extends AdwPreferencesRowProps, GtkAccessibleProps, GtkActionableProps, GtkBuildableProps, GtkConstraintTargetProps {
    /**
     * Whether expansion is enabled.
     * @default TRUE
     */
    'enable-expansion'?: boolean;
    /**
     * Whether the row is expanded.
     * @default FALSE
     */
    expanded?: boolean;
    /**
     * The icon name for this row.
     * @deprecated since 1.3: Use [method@ExpanderRow.add_prefix] to add an icon.
     */
    'icon-name'?: string | null;
    /**
     * Whether the switch enabling the expansion is visible.
     * @default FALSE
     */
    'show-enable-switch'?: boolean;
    /** The subtitle for this row. */
    subtitle?: string;
    /**
     * The number of lines at the end of which the subtitle label will be ellipsized.
     * @since 1.3
     * @default 0
     */
    'subtitle-lines'?: number;
    /**
     * The number of lines at the end of which the title label will be ellipsized.
     * @since 1.3
     * @default 0
     */
    'title-lines'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AdwExpanderRowConstructOnly = AdwPreferencesRowConstructOnly | GtkAccessibleConstructOnly | GtkActionableConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** An adaptive container acting like a box or an overlay. */
export interface AdwFlapProps extends GtkWidgetProps, AdwSwipeableProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkOrientableProps {
    /**
     * The content widget.
     * @deprecated since 1.4: See [the migration guide](migrating-to-breakpoints.html#replace-adwflap)
     */
    content?: Gtk.Widget | null;
    /**
     * The flap widget.
     * @deprecated since 1.4: See [the migration guide](migrating-to-breakpoints.html#replace-adwflap)
     */
    flap?: Gtk.Widget | null;
    /**
     * The flap position.
     * @default GTK_PACK_START
     * @deprecated since 1.4: See [the migration guide](migrating-to-breakpoints.html#replace-adwflap)
     */
    'flap-position'?: GtkPackTypeNick | Gtk.PackType;
    /**
     * The fold transition animation duration, in milliseconds.
     * @default 250
     * @deprecated since 1.4: See [the migration guide](migrating-to-breakpoints.html#replace-adwflap)
     */
    'fold-duration'?: number;
    /**
     * The fold policy for the flap.
     * @default ADW_FLAP_FOLD_POLICY_AUTO
     * @deprecated since 1.4: See [the migration guide](migrating-to-breakpoints.html#replace-adwflap)
     */
    'fold-policy'?: AdwFlapFoldPolicyNick | Adw.FlapFoldPolicy;
    /**
     * Determines when the flap will fold.
     * @default ADW_FOLD_THRESHOLD_POLICY_MINIMUM
     * @deprecated since 1.4: See [the migration guide](migrating-to-breakpoints.html#replace-adwflap)
     */
    'fold-threshold-policy'?: AdwFoldThresholdPolicyNick | Adw.FoldThresholdPolicy;
    /**
     * Whether the flap is locked.
     * @default FALSE
     * @deprecated since 1.4: See [the migration guide](migrating-to-breakpoints.html#replace-adwflap)
     */
    locked?: boolean;
    /**
     * Whether the flap is modal.
     * @default TRUE
     * @deprecated since 1.4: See [the migration guide](migrating-to-breakpoints.html#replace-adwflap)
     */
    modal?: boolean;
    /**
     * Whether the flap widget is revealed.
     * @default TRUE
     * @deprecated since 1.4: See [the migration guide](migrating-to-breakpoints.html#replace-adwflap)
     */
    'reveal-flap'?: boolean;
    /**
     * The reveal animation spring parameters.
     * @deprecated since 1.4: See [the migration guide](migrating-to-breakpoints.html#replace-adwflap)
     */
    'reveal-params'?: Adw.SpringParams;
    /**
     * The separator widget.
     * @deprecated since 1.4: See [the migration guide](migrating-to-breakpoints.html#replace-adwflap)
     */
    separator?: Gtk.Widget | null;
    /**
     * Whether the flap can be closed with a swipe gesture.
     * @default TRUE
     * @deprecated since 1.4: See [the migration guide](migrating-to-breakpoints.html#replace-adwflap)
     */
    'swipe-to-close'?: boolean;
    /**
     * Whether the flap can be opened with a swipe gesture.
     * @default TRUE
     * @deprecated since 1.4: See [the migration guide](migrating-to-breakpoints.html#replace-adwflap)
     */
    'swipe-to-open'?: boolean;
    /**
     * the type of animation used for reveal and fold transitions.
     * @default ADW_FLAP_TRANSITION_TYPE_OVER
     * @deprecated since 1.4: See [the migration guide](migrating-to-breakpoints.html#replace-adwflap)
     */
    'transition-type'?: AdwFlapTransitionTypeNick | Adw.FlapTransitionType;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AdwFlapConstructOnly = GtkWidgetConstructOnly | AdwSwipeableConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkOrientableConstructOnly;

/** A title bar widget. */
export interface AdwHeaderBarProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /**
     * The policy for aligning the center widget.
     * @default ADW_CENTERING_POLICY_LOOSE
     */
    'centering-policy'?: AdwCenteringPolicyNick | Adw.CenteringPolicy;
    /**
     * The decoration layout for buttons.
     * @default NULL
     */
    'decoration-layout'?: string | null;
    /**
     * Whether the header bar can show the back button.
     * @since 1.4
     * @default TRUE
     */
    'show-back-button'?: boolean;
    /**
     * Whether to show title buttons at the end of the header bar.
     * @default TRUE
     */
    'show-end-title-buttons'?: boolean;
    /**
     * Whether to show title buttons at the start of the header bar.
     * @default TRUE
     */
    'show-start-title-buttons'?: boolean;
    /**
     * Whether the title widget should be shown.
     * @since 1.4
     * @default TRUE
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
     * @default FALSE
     */
    'can-shrink'?: boolean;
    /**
     * The display mode.
     * @since 1.7
     * @default ADW_INLINE_VIEW_SWITCHER_LABELS
     */
    'display-mode'?: AdwInlineViewSwitcherDisplayModeNick | Adw.InlineViewSwitcherDisplayMode;
    /**
     * Whether all toggles take the same size.
     * @since 1.7
     * @default FALSE
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
     * @default NULL
     */
    id?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AdwLayoutSlotConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | 'id';

/** An adaptive container acting like a box or a stack. */
export interface AdwLeafletProps extends GtkWidgetProps, AdwSwipeableProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkOrientableProps {
    /**
     * Whether gestures and shortcuts for navigating backward are enabled.
     * @default FALSE
     * @deprecated since 1.4: See [the migration guide](migrating-to-breakpoints.html#replace-adwleaflet)
     */
    'can-navigate-back'?: boolean;
    /**
     * Whether gestures and shortcuts for navigating forward are enabled.
     * @default FALSE
     * @deprecated since 1.4: See [the migration guide](migrating-to-breakpoints.html#replace-adwleaflet)
     */
    'can-navigate-forward'?: boolean;
    /**
     * Whether or not the leaflet can unfold.
     * @default TRUE
     * @deprecated since 1.4: See [the migration guide](migrating-to-breakpoints.html#replace-adwleaflet)
     */
    'can-unfold'?: boolean;
    /**
     * The child transition spring parameters.
     * @deprecated since 1.4: See [the migration guide](migrating-to-breakpoints.html#replace-adwleaflet)
     */
    'child-transition-params'?: Adw.SpringParams;
    /**
     * Determines when the leaflet will fold.
     * @default ADW_FOLD_THRESHOLD_POLICY_MINIMUM
     * @deprecated since 1.4: See [the migration guide](migrating-to-breakpoints.html#replace-adwleaflet)
     */
    'fold-threshold-policy'?: AdwFoldThresholdPolicyNick | Adw.FoldThresholdPolicy;
    /**
     * Whether the leaflet allocates the same size for all children when folded.
     * @default TRUE
     * @deprecated since 1.4: See [the migration guide](migrating-to-breakpoints.html#replace-adwleaflet)
     */
    homogeneous?: boolean;
    /**
     * The mode transition animation duration, in milliseconds.
     * @default 250
     * @deprecated since 1.4: See [the migration guide](migrating-to-breakpoints.html#replace-adwleaflet)
     */
    'mode-transition-duration'?: number;
    /**
     * The type of animation used for transitions between modes and children.
     * @default ADW_LEAFLET_TRANSITION_TYPE_OVER
     * @deprecated since 1.4: See [the migration guide](migrating-to-breakpoints.html#replace-adwleaflet)
     */
    'transition-type'?: AdwLeafletTransitionTypeNick | Adw.LeafletTransitionType;
    /**
     * The widget currently visible when the leaflet is folded.
     * @deprecated since 1.4: See [the migration guide](migrating-to-breakpoints.html#replace-adwleaflet)
     */
    'visible-child'?: Gtk.Widget | null;
    /**
     * The name of the widget currently visible when the leaflet is folded.
     * @default NULL
     * @deprecated since 1.4: See [the migration guide](migrating-to-breakpoints.html#replace-adwleaflet)
     */
    'visible-child-name'?: string | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AdwLeafletConstructOnly = GtkWidgetConstructOnly | AdwSwipeableConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkOrientableConstructOnly;

/** A dialog presenting a message or a question. */
export interface AdwMessageDialogProps extends GtkWindowProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkNativeProps, GtkRootProps, GtkShortcutManagerProps {
    /**
     * The body text of the dialog.
     * @since 1.2
     * @deprecated since 1.6: Use [class@AlertDialog].
     */
    body?: string;
    /**
     * Whether the body text includes Pango markup.
     * @since 1.2
     * @default FALSE
     * @deprecated since 1.6: Use [class@AlertDialog].
     */
    'body-use-markup'?: boolean;
    /**
     * The ID of the close response.
     * @since 1.2
     * @default close
     * @deprecated since 1.6: Use [class@AlertDialog].
     */
    'close-response'?: string;
    /**
     * The response ID of the default response.
     * @since 1.2
     * @default NULL
     * @deprecated since 1.6: Use [class@AlertDialog].
     */
    'default-response'?: string | null;
    /**
     * The child widget.
     * @since 1.2
     * @deprecated since 1.6: Use [class@AlertDialog].
     */
    'extra-child'?: Gtk.Widget | null;
    /**
     * The heading of the dialog.
     * @since 1.2
     * @deprecated since 1.6: Use [class@AlertDialog].
     */
    heading?: string | null;
    /**
     * Whether the heading includes Pango markup.
     * @since 1.2
     * @default FALSE
     * @deprecated since 1.6: Use [class@AlertDialog].
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
     * @default NULL
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
     * @default TRUE
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
     * @default NULL
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
     * @default FALSE
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
     * @default 280.000000
     */
    'max-sidebar-width'?: number;
    /**
     * The minimum sidebar width.
     * @since 1.4
     * @default 180.000000
     */
    'min-sidebar-width'?: number;
    /**
     * Determines the visible page when collapsed.
     * @since 1.4
     * @default FALSE
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
     * @default GTK_PACK_START
     */
    'sidebar-position'?: GtkPackTypeNick | Gtk.PackType;
    /**
     * The preferred sidebar width as a fraction of the total width.
     * @since 1.4
     * @default 0.250000
     */
    'sidebar-width-fraction'?: number;
    /**
     * The length unit for minimum and maximum sidebar widths.
     * @since 1.4
     * @default ADW_LENGTH_UNIT_SP
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
     * @default TRUE
     */
    'animate-transitions'?: boolean;
    /**
     * Whether the view is horizontally homogeneous.
     * @since 1.7
     * @default FALSE
     */
    hhomogeneous?: boolean;
    /**
     * Whether pressing Escape pops the current page.
     * @since 1.4
     * @default TRUE
     */
    'pop-on-escape'?: boolean;
    /**
     * Whether the view is vertically homogeneous.
     * @since 1.7
     * @default FALSE
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
     * @default FALSE
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
     * @default TRUE
     */
    'enable-hide-gesture'?: boolean;
    /**
     * Whether the sidebar can be opened with an edge swipe gesture.
     * @since 1.4
     * @default TRUE
     */
    'enable-show-gesture'?: boolean;
    /**
     * The maximum sidebar width.
     * @since 1.4
     * @default 280.000000
     */
    'max-sidebar-width'?: number;
    /**
     * The minimum sidebar width.
     * @since 1.4
     * @default 180.000000
     */
    'min-sidebar-width'?: number;
    /**
     * Whether the sidebar widget is pinned.
     * @since 1.4
     * @default FALSE
     */
    'pin-sidebar'?: boolean;
    /**
     * Whether the sidebar widget is shown.
     * @since 1.4
     * @default TRUE
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
     * @default GTK_PACK_START
     */
    'sidebar-position'?: GtkPackTypeNick | Gtk.PackType;
    /**
     * The preferred sidebar width as a fraction of the total width.
     * @since 1.4
     * @default 0.250000
     */
    'sidebar-width-fraction'?: number;
    /**
     * The length unit for minimum and maximum sidebar widths.
     * @since 1.4
     * @default ADW_LENGTH_UNIT_SP
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
     * @default FALSE
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
     * @default NULL
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
     * @default FALSE
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
     * @default FALSE
     */
    'description-centered'?: boolean;
    /** The icon name for this page. */
    'icon-name'?: string | null;
    /**
     * The name of this page.
     * @default NULL
     */
    name?: string | null;
    /** The title for this page. */
    title?: string;
    /**
     * Whether an embedded underline in the title indicates a mnemonic.
     * @default FALSE
     */
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
     * @default FALSE
     */
    'title-selectable'?: boolean;
    /**
     * Whether to use Pango markup for the title label.
     * @since 1.2
     * @default TRUE
     */
    'use-markup'?: boolean;
    /**
     * Whether an embedded underline in the title indicates a mnemonic.
     * @default FALSE
     */
    'use-underline'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AdwPreferencesRowConstructOnly = GtkListBoxRowConstructOnly | GtkAccessibleConstructOnly | GtkActionableConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** A window to present an application's preferences. */
export interface AdwPreferencesWindowProps extends AdwWindowProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkNativeProps, GtkRootProps, GtkShortcutManagerProps {
    /**
     * Whether gestures and shortcuts for closing subpages are enabled.
     * @default FALSE
     * @deprecated since 1.4: Use [property@NavigationPage:can-pop] instead.
     */
    'can-navigate-back'?: boolean;
    /**
     * Whether search is enabled.
     * @default TRUE
     * @deprecated since 1.6: Use [class@PreferencesDialog].
     */
    'search-enabled'?: boolean;
    /**
     * The currently visible page.
     * @deprecated since 1.6: Use [class@PreferencesDialog].
     */
    'visible-page'?: Gtk.Widget | null;
    /**
     * The name of the currently visible page.
     * @default NULL
     * @deprecated since 1.6: Use [class@PreferencesDialog].
     */
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
     * @default FALSE
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
     * @default ADW_SIDEBAR_MODE_SIDEBAR
     */
    mode?: AdwSidebarModeNick | Adw.SidebarMode;
    /**
     * The placeholder widget.
     * @since 1.9
     */
    placeholder?: Gtk.Widget | null;
    /**
     * A widget to be displayed before the sidebar items.
     * @since 1.10
     */
    prefix?: Gtk.Widget | null;
    /**
     * The index of the currently selected item.
     * @since 1.9
     * @default 4294967295
     */
    selected?: number;
    /**
     * A widget to be displayed after the sidebar items.
     * @since 1.10
     */
    suffix?: Gtk.Widget | null;
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
     * @default 0.000000
     */
    'climb-rate'?: number;
    /**
     * The number of decimal places to display.
     * @since 1.4
     * @default 0
     */
    digits?: number;
    /**
     * Whether non-numeric characters should be ignored.
     * @since 1.4
     * @default FALSE
     */
    numeric?: boolean;
    /**
     * Whether invalid values are snapped to the nearest step increment.
     * @since 1.4
     * @default FALSE
     */
    'snap-to-ticks'?: boolean;
    /**
     * The policy for updating the spin row.
     * @since 1.4
     * @default GTK_UPDATE_ALWAYS
     */
    'update-policy'?: GtkSpinButtonUpdatePolicyNick | Gtk.SpinButtonUpdatePolicy;
    /**
     * The current value.
     * @since 1.4
     * @default 0.000000
     */
    value?: number;
    /**
     * Whether the spin row should wrap upon reaching its limits.
     * @since 1.4
     * @default FALSE
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
     * @default FALSE
     */
    'can-shrink'?: boolean;
    /** The child widget. */
    child?: Gtk.Widget | null;
    /**
     * The direction in which the popup will be popped up.
     * @default GTK_ARROW_DOWN
     */
    direction?: GtkArrowTypeNick | Gtk.ArrowType;
    /**
     * The tooltip of the dropdown button.
     * @since 1.2
     */
    'dropdown-tooltip'?: string;
    /**
     * The name of the icon used to automatically populate the button.
     * @default NULL
     */
    'icon-name'?: string | null;
    /**
     * The label for the button.
     * @default NULL
     */
    label?: string | null;
    /** The `GMenuModel` from which the popup will be created. */
    'menu-model'?: Gio.MenuModel | null;
    /** The `GtkPopover` that will be popped up when the dropdown is clicked. */
    popover?: Gtk.Popover | null;
    /**
     * Whether an underline in the text indicates a mnemonic.
     * @default FALSE
     */
    'use-underline'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AdwSplitButtonConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkActionableConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** A best fit container. */
export interface AdwSqueezerProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkOrientableProps {
    /**
     * Whether to allow squeezing beyond the last child's minimum size.
     * @default FALSE
     * @deprecated since 1.4: See [the migration guide](migrating-to-breakpoints.html#replace-adwsqueezer)
     */
    'allow-none'?: boolean;
    /**
     * Whether all children have the same size for the opposite orientation.
     * @default FALSE
     * @deprecated since 1.4: See [the migration guide](migrating-to-breakpoints.html#replace-adwsqueezer)
     */
    homogeneous?: boolean;
    /**
     * Whether the squeezer interpolates its size when changing the visible child.
     * @default FALSE
     * @deprecated since 1.4: See [the migration guide](migrating-to-breakpoints.html#replace-adwsqueezer)
     */
    'interpolate-size'?: boolean;
    /**
     * The switch threshold policy.
     * @default ADW_FOLD_THRESHOLD_POLICY_NATURAL
     * @deprecated since 1.4: See [the migration guide](migrating-to-breakpoints.html#replace-adwsqueezer)
     */
    'switch-threshold-policy'?: AdwFoldThresholdPolicyNick | Adw.FoldThresholdPolicy;
    /**
     * The transition animation duration, in milliseconds.
     * @default 200
     * @deprecated since 1.4: See [the migration guide](migrating-to-breakpoints.html#replace-adwsqueezer)
     */
    'transition-duration'?: number;
    /**
     * The type of animation used for transitions between children.
     * @default ADW_SQUEEZER_TRANSITION_TYPE_NONE
     * @deprecated since 1.4: See [the migration guide](migrating-to-breakpoints.html#replace-adwsqueezer)
     */
    'transition-type'?: AdwSqueezerTransitionTypeNick | Adw.SqueezerTransitionType;
    /**
     * The horizontal alignment, from 0 (start) to 1 (end).
     * @default 0.500000
     * @deprecated since 1.4: See [the migration guide](migrating-to-breakpoints.html#replace-adwsqueezer)
     */
    xalign?: number;
    /**
     * The vertical alignment, from 0 (top) to 1 (bottom).
     * @default 0.500000
     * @deprecated since 1.4: See [the migration guide](migrating-to-breakpoints.html#replace-adwsqueezer)
     */
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
    /**
     * The name of the icon to be used.
     * @default NULL
     */
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
     * @default FALSE
     */
    active?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AdwSwitchRowConstructOnly = AdwActionRowConstructOnly | GtkAccessibleConstructOnly | GtkActionableConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** A tab bar for [class@TabView]. */
export interface AdwTabBarProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /**
     * Whether the tabs automatically hide.
     * @default TRUE
     */
    autohide?: boolean;
    /** The widget shown after the tabs. */
    'end-action-widget'?: Gtk.Widget | null;
    /**
     * Whether tabs expand to full width.
     * @default TRUE
     */
    'expand-tabs'?: boolean;
    /**
     * Whether the drop data should be preloaded on hover.
     * @since 1.3
     * @default FALSE
     */
    'extra-drag-preload'?: boolean;
    /**
     * Whether tabs use inverted layout.
     * @default FALSE
     */
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
     * @default FALSE
     */
    'enable-new-tab'?: boolean;
    /**
     * Whether to enable search in tabs.
     * @since 1.3
     * @default TRUE
     */
    'enable-search'?: boolean;
    /**
     * Whether the drop data should be preloaded on hover.
     * @since 1.3
     * @default FALSE
     */
    'extra-drag-preload'?: boolean;
    /**
     * Whether thumbnails use inverted layout.
     * @since 1.3
     * @default FALSE
     */
    inverted?: boolean;
    /**
     * Whether the overview is open.
     * @since 1.3
     * @default FALSE
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
     * @default TRUE
     */
    'show-end-title-buttons'?: boolean;
    /**
     * Whether to show start title buttons in the overview's header bar.
     * @since 1.3
     * @default TRUE
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
     * @default ADW_TAB_VIEW_SHORTCUT_CONTROL_TAB | ADW_TAB_VIEW_SHORTCUT_CONTROL_SHIFT_TAB | ADW_TAB_VIEW_SHORTCUT_CONTROL_PAGE_UP | ADW_TAB_VIEW_SHORTCUT_CONTROL_PAGE_DOWN | ADW_TAB_VIEW_SHORTCUT_CONTROL_HOME | ADW_TAB_VIEW_SHORTCUT_CONTROL_END | ADW_TAB_VIEW_SHORTCUT_CONTROL_SHIFT_PAGE_UP | ADW_TAB_VIEW_SHORTCUT_CONTROL_SHIFT_PAGE_DOWN | ADW_TAB_VIEW_SHORTCUT_CONTROL_SHIFT_HOME | ADW_TAB_VIEW_SHORTCUT_CONTROL_SHIFT_END | ADW_TAB_VIEW_SHORTCUT_ALT_DIGITS | ADW_TAB_VIEW_SHORTCUT_ALT_ZERO
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

/** A toggle within [class@ToggleGroup]. */
export interface AdwToggleProps {
    /**
     * The toggle child.
     * @since 1.7
     */
    child?: Gtk.Widget | null;
    /**
     * The description of the toggle.
     * @since 1.9
     */
    description?: string;
    /**
     * Whether this toggle is enabled.
     * @since 1.7
     * @default TRUE
     */
    enabled?: boolean;
    /**
     * The toggle icon name.
     * @since 1.7
     * @default NULL
     */
    'icon-name'?: string | null;
    /**
     * The toggle label.
     * @since 1.7
     * @default NULL
     */
    label?: string | null;
    /**
     * The toggle name.
     * @since 1.7
     * @default NULL
     */
    name?: string;
    /**
     * The tooltip of the toggle.
     * @since 1.7
     */
    tooltip?: string;
    /**
     * Whether an embedded underline in the label indicates a mnemonic.
     * @since 1.7
     * @default FALSE
     */
    'use-underline'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AdwToggleConstructOnly = never;

/** A group of exclusive toggles. */
export interface AdwToggleGroupProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkOrientableProps {
    /**
     * The index of the active toggle.
     * @since 1.7
     * @default 4294967295
     */
    active?: number;
    /**
     * The name of the active toggle.
     * @since 1.7
     * @default NULL
     */
    'active-name'?: string | null;
    /**
     * Whether the toggles can be smaller than the natural size of their contents.
     * @since 1.7
     * @default TRUE
     */
    'can-shrink'?: boolean;
    /**
     * Whether all toggles take the same size.
     * @since 1.7
     * @default FALSE
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
     * @default ADW_TOOLBAR_FLAT
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
     * @default FALSE
     */
    'extend-content-to-bottom-edge'?: boolean;
    /**
     * Whether the content widget can extend behind top bars.
     * @since 1.4
     * @default FALSE
     */
    'extend-content-to-top-edge'?: boolean;
    /**
     * Whether bottom bars are visible.
     * @since 1.4
     * @default TRUE
     */
    'reveal-bottom-bars'?: boolean;
    /**
     * Whether top bars are revealed.
     * @since 1.4
     * @default TRUE
     */
    'reveal-top-bars'?: boolean;
    /**
     * Appearance of the top bars.
     * @since 1.4
     * @default ADW_TOOLBAR_FLAT
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
     * @default FALSE
     */
    'enable-transitions'?: boolean;
    /**
     * Whether the stack is horizontally homogeneous.
     * @default TRUE
     */
    hhomogeneous?: boolean;
    /**
     * The transition animation duration, in milliseconds.
     * @since 1.7
     * @default 200
     */
    'transition-duration'?: number;
    /**
     * Whether the stack is vertically homogeneous.
     * @default TRUE
     */
    vhomogeneous?: boolean;
    /** The widget currently visible in the stack. */
    'visible-child'?: Gtk.Widget | null;
    /**
     * The name of the widget currently visible in the stack.
     * @default NULL
     */
    'visible-child-name'?: string | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AdwViewStackConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** An adaptive view switcher. */
export interface AdwViewSwitcherProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /**
     * The policy to determine which mode to use.
     * @default ADW_VIEW_SWITCHER_POLICY_NARROW
     */
    policy?: AdwViewSwitcherPolicyNick | Adw.ViewSwitcherPolicy;
    /** The stack the view switcher controls. */
    stack?: Adw.ViewStack | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AdwViewSwitcherConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** A view switcher action bar. */
export interface AdwViewSwitcherBarProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /**
     * Whether the bar should be revealed or hidden.
     * @default FALSE
     */
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
     * @default ADW_SIDEBAR_MODE_SIDEBAR
     */
    mode?: AdwSidebarModeNick | Adw.SidebarMode;
    /**
     * The placeholder widget.
     * @since 1.9
     */
    placeholder?: Gtk.Widget | null;
    /**
     * A widget to be displayed before the sidebar items.
     * @since 1.10
     */
    prefix?: Gtk.Widget | null;
    /**
     * The stack the sidebar controls.
     * @since 1.9
     */
    stack?: Adw.ViewStack | null;
    /**
     * A widget to be displayed after the sidebar items.
     * @since 1.10
     */
    suffix?: Gtk.Widget | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AdwViewSwitcherSidebarConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** A view switcher title. */
export interface AdwViewSwitcherTitleProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /**
     * The stack the view switcher controls.
     * @deprecated since 1.4: See [the migration guide](migrating-to-breakpoints.html#replace-adwviewswitchertitle)
     */
    stack?: Adw.ViewStack | null;
    /**
     * The subtitle to display.
     * @deprecated since 1.4: See [the migration guide](migrating-to-breakpoints.html#replace-adwviewswitchertitle)
     */
    subtitle?: string;
    /**
     * The title to display.
     * @deprecated since 1.4: See [the migration guide](migrating-to-breakpoints.html#replace-adwviewswitchertitle)
     */
    title?: string;
    /**
     * Whether the view switcher is enabled.
     * @default TRUE
     * @deprecated since 1.4: See [the migration guide](migrating-to-breakpoints.html#replace-adwviewswitchertitle)
     */
    'view-switcher-enabled'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type AdwViewSwitcherTitleConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** A freeform window. */
export interface AdwWindowProps extends GtkWindowProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkNativeProps, GtkRootProps, GtkShortcutManagerProps {
    /**
     * Whether adaptive preview is currently open.
     * @since 1.7
     * @default FALSE
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
     * @default 0.000000
     */
    align?: number;
    /**
     * The spacing between widgets on the same line.
     * @since 1.7
     * @default 0
     */
    'child-spacing'?: number;
    /**
     * The length unit for child spacing.
     * @since 1.7
     * @default ADW_LENGTH_UNIT_PX
     */
    'child-spacing-unit'?: AdwLengthUnitNick | Adw.LengthUnit;
    /**
     * Determines whether and how each complete line should be stretched to fill the entire widget.
     * @since 1.7
     * @default ADW_JUSTIFY_NONE
     */
    justify?: AdwJustifyModeNick | Adw.JustifyMode;
    /**
     * Whether the last line should be stretched to fill the entire widget.
     * @since 1.7
     * @default FALSE
     */
    'justify-last-line'?: boolean;
    /**
     * Whether all lines should take the same amount of space.
     * @since 1.7
     * @default FALSE
     */
    'line-homogeneous'?: boolean;
    /**
     * The spacing between lines.
     * @since 1.7
     * @default 0
     */
    'line-spacing'?: number;
    /**
     * The length unit for line spacing.
     * @since 1.7
     * @default ADW_LENGTH_UNIT_PX
     */
    'line-spacing-unit'?: AdwLengthUnitNick | Adw.LengthUnit;
    /**
     * Determines the natural size for each line.
     * @since 1.7
     * @default -1
     */
    'natural-line-length'?: number;
    /**
     * The length unit for natural line length.
     * @since 1.7
     * @default ADW_LENGTH_UNIT_PX
     */
    'natural-line-length-unit'?: AdwLengthUnitNick | Adw.LengthUnit;
    /**
     * The direction children are packed in each line.
     * @since 1.7
     * @default ADW_PACK_START_TO_END
     */
    'pack-direction'?: AdwPackDirectionNick | Adw.PackDirection;
    /**
     * The policy for line wrapping.
     * @since 1.7
     * @default ADW_WRAP_NATURAL
     */
    'wrap-policy'?: AdwWrapPolicyNick | Adw.WrapPolicy;
    /**
     * Whether wrap direction should be reversed.
     * @since 1.7
     * @default FALSE
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
        'prefix': 'set_prefix';
        'suffix': 'set_suffix';
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
        'prefix': 'set_prefix';
        'stack': 'set_stack';
        'suffix': 'set_suffix';
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
    AdwToggle: {
        class: Adw.Toggle;
        props: AdwToggleProps;
        signals: Adw.Toggle.SignalSignatures;
        constructOnly: AdwToggleConstructOnly;
        slotCandidates: {
        'child': 'set_child';
        };
    };
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
    readonly unsettableProps: readonly string[];
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

/** Widget GType -> every declaration its members come from, self first. */
export const DECLS: Readonly<Record<string, readonly string[]>>;

/** The GTypes in `DECLS` that hold a widget without being one — see `ChildHolders`. */
export const CHILD_HOLDERS: readonly string[];

/** Enum GType -> the nicks this surface offers. */
export const ENUM_NICKS: Readonly<Record<string, readonly string[]>>;

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
