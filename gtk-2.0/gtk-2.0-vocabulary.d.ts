/**
 * The GIR-derived widget VOCABULARY for Gtk-2.0.
 *
 * GENERATED — do not edit. Provenance: Gtk-2.0 — library 2.24.33 — dropped empty base(s): Atk.ImplementorIface — prop(s) no TypeScript value satisfies: Gtk.Notebook.group Gtk.Object.user-data
 *
 * 161 instantiable GTypes (of which 105 concrete widgets), 192 declarations, 89 enum nick unions, 20 slot candidates.
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

import type GObject from '@girs/gobject-2.0';
import type Gdk from '@girs/gdk-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type Gio from '@girs/gio-2.0';
import type Gtk from './gtk-2.0.js';
import type Pango from '@girs/pango-1.0';
import type { AtkObjectConstructOnly, AtkObjectProps } from '@girs/atk-1.0/vocabulary';
import type { GdkExtensionModeNick, GdkGravityNick, GdkWindowTypeHintNick } from '@girs/gdk-2.0/vocabulary';
import type { GMountOperationConstructOnly, GMountOperationProps } from '@girs/gio-2.0/vocabulary';
import type { GInitiallyUnownedConstructOnly, GInitiallyUnownedProps, GObjectConstructOnly, GObjectProps } from '@girs/gobject-2.0/vocabulary';
import type { PangoAlignmentNick, PangoEllipsizeModeNick, PangoStretchNick, PangoStyleNick, PangoUnderlineNick, PangoVariantNick, PangoWrapModeNick } from '@girs/pango-1.0/vocabulary';

// ---------------------------------------------------------------------------
// Enum nicks — the string vocabulary GObject registered, from GIR's `glib:nick`.
//
// Not derived from the member name. Substituting underscores for dashes is not a law:
// some nicks keep an underscore the substitution would have replaced, and only the
// attribute knows which. Gtk-4.0 and Adw-1 contradict no derivation at all, which is
// how a derived nick passes review and breaks elsewhere.
// Re-measure with `scripts/check-nick-derivation.mjs` in ts-for-gir.
// ---------------------------------------------------------------------------

export type GtkAnchorTypeNick = 'center' | 'north' | 'north-west' | 'north-east' | 'south' | 'south-west' | 'south-east' | 'west' | 'east' | 'n' | 'nw' | 'ne' | 's' | 'sw' | 'se' | 'w' | 'e';
export type GtkArrowPlacementNick = 'both' | 'start' | 'end';
export type GtkArrowTypeNick = 'up' | 'down' | 'left' | 'right' | 'none';
export type GtkAssistantPageTypeNick = 'content' | 'intro' | 'confirm' | 'summary' | 'progress';
export type GtkButtonBoxStyleNick = 'default-style' | 'spread' | 'edge' | 'start' | 'end' | 'center';
export type GtkButtonsTypeNick = 'none' | 'ok' | 'close' | 'cancel' | 'yes-no' | 'ok-cancel';
export type GtkCListDragPosNick = 'none' | 'before' | 'into' | 'after';
export type GtkCTreeExpanderStyleNick = 'none' | 'square' | 'triangle' | 'circular';
export type GtkCTreeExpansionTypeNick = 'expand' | 'expand-recursive' | 'collapse' | 'collapse-recursive' | 'toggle' | 'toggle-recursive';
export type GtkCTreeLineStyleNick = 'none' | 'solid' | 'dotted' | 'tabbed';
export type GtkCTreePosNick = 'before' | 'as-child' | 'after';
export type GtkCellRendererAccelModeNick = 'gtk' | 'other';
export type GtkCellRendererModeNick = 'inert' | 'activatable' | 'editable';
export type GtkCellTypeNick = 'empty' | 'text' | 'pixmap' | 'pixtext' | 'widget';
export type GtkCornerTypeNick = 'top-left' | 'bottom-left' | 'top-right' | 'bottom-right';
export type GtkCurveTypeNick = 'linear' | 'spline' | 'free';
export type GtkDeleteTypeNick = 'chars' | 'word-ends' | 'words' | 'display-lines' | 'display-line-ends' | 'paragraph-ends' | 'paragraphs' | 'whitespace';
export type GtkDirectionTypeNick = 'tab-forward' | 'tab-backward' | 'up' | 'down' | 'left' | 'right';
export type GtkDragResultNick = 'success' | 'no-target' | 'user-cancelled' | 'timeout-expired' | 'grab-broken' | 'error';
export type GtkEntryIconPositionNick = 'primary' | 'secondary';
export type GtkExpanderStyleNick = 'collapsed' | 'semi-collapsed' | 'semi-expanded' | 'expanded';
export type GtkFileChooserActionNick = 'open' | 'save' | 'select-folder' | 'create-folder';
export type GtkFileChooserConfirmationNick = 'confirm' | 'accept-filename' | 'select-again';
export type GtkIMPreeditStyleNick = 'nothing' | 'callback' | 'none';
export type GtkIMStatusStyleNick = 'nothing' | 'callback' | 'none';
export type GtkIconSizeNick = 'invalid' | 'menu' | 'small-toolbar' | 'large-toolbar' | 'button' | 'dnd' | 'dialog';
export type GtkIconViewDropPositionNick = 'no-drop' | 'drop-into' | 'drop-left' | 'drop-right' | 'drop-above' | 'drop-below';
export type GtkImageTypeNick = 'empty' | 'pixmap' | 'image' | 'pixbuf' | 'stock' | 'icon-set' | 'animation' | 'icon-name' | 'gicon';
export type GtkJustificationNick = 'left' | 'right' | 'center' | 'fill';
export type GtkMatchTypeNick = 'all' | 'all-tail' | 'head' | 'tail' | 'exact' | 'last';
export type GtkMenuDirectionTypeNick = 'parent' | 'child' | 'next' | 'prev';
export type GtkMessageTypeNick = 'info' | 'warning' | 'question' | 'error' | 'other';
export type GtkMetricTypeNick = 'pixels' | 'inches' | 'centimeters';
export type GtkMovementStepNick = 'logical-positions' | 'visual-positions' | 'words' | 'display-lines' | 'display-line-ends' | 'paragraphs' | 'paragraph-ends' | 'pages' | 'buffer-ends' | 'horizontal-pages';
export type GtkNotebookTabNick = 'first' | 'last';
export type GtkNumberUpLayoutNick = 'lrtb' | 'lrbt' | 'rltb' | 'rlbt' | 'tblr' | 'tbrl' | 'btlr' | 'btrl';
export type GtkOrientationNick = 'horizontal' | 'vertical';
export type GtkPackDirectionNick = 'ltr' | 'rtl' | 'ttb' | 'btt';
export type GtkPackTypeNick = 'start' | 'end';
export type GtkPageOrientationNick = 'portrait' | 'landscape' | 'reverse-portrait' | 'reverse-landscape';
export type GtkPageSetNick = 'all' | 'even' | 'odd';
export type GtkPathPriorityTypeNick = 'lowest' | 'gtk' | 'application' | 'theme' | 'rc' | 'highest';
export type GtkPathTypeNick = 'widget' | 'widget-class' | 'class';
export type GtkPolicyTypeNick = 'always' | 'automatic' | 'never';
export type GtkPositionTypeNick = 'left' | 'right' | 'top' | 'bottom';
export type GtkPreviewTypeNick = 'color' | 'grayscale';
export type GtkPrintDuplexNick = 'simplex' | 'horizontal' | 'vertical';
export type GtkPrintOperationActionNick = 'print-dialog' | 'print' | 'preview' | 'export';
export type GtkPrintOperationResultNick = 'error' | 'apply' | 'cancel' | 'in-progress';
export type GtkPrintPagesNick = 'all' | 'current' | 'ranges' | 'selection';
export type GtkPrintQualityNick = 'low' | 'normal' | 'high' | 'draft';
export type GtkPrintStatusNick = 'initial' | 'preparing' | 'generating-data' | 'sending-data' | 'pending' | 'pending-issue' | 'printing' | 'finished' | 'finished-aborted';
export type GtkProgressBarOrientationNick = 'left-to-right' | 'right-to-left' | 'bottom-to-top' | 'top-to-bottom';
export type GtkProgressBarStyleNick = 'continuous' | 'discrete';
export type GtkRcTokenTypeNick = 'invalid' | 'include' | 'normal' | 'active' | 'prelight' | 'selected' | 'insensitive' | 'fg' | 'bg' | 'text' | 'base' | 'xthickness' | 'ythickness' | 'font' | 'fontset' | 'font-name' | 'bg-pixmap' | 'pixmap-path' | 'style' | 'binding' | 'bind' | 'widget' | 'widget-class' | 'class' | 'lowest' | 'gtk' | 'application' | 'theme' | 'rc' | 'highest' | 'engine' | 'module-path' | 'im-module-path' | 'im-module-file' | 'stock' | 'ltr' | 'rtl' | 'color' | 'unbind' | 'last';
export type GtkRecentSortTypeNick = 'none' | 'mru' | 'lru' | 'custom';
export type GtkReliefStyleNick = 'normal' | 'half' | 'none';
export type GtkResizeModeNick = 'parent' | 'queue' | 'immediate';
export type GtkResponseTypeNick = 'none' | 'reject' | 'accept' | 'delete-event' | 'ok' | 'cancel' | 'close' | 'yes' | 'no' | 'apply' | 'help';
export type GtkScrollStepNick = 'steps' | 'pages' | 'ends' | 'horizontal-steps' | 'horizontal-pages' | 'horizontal-ends';
export type GtkScrollTypeNick = 'none' | 'jump' | 'step-backward' | 'step-forward' | 'page-backward' | 'page-forward' | 'step-up' | 'step-down' | 'page-up' | 'page-down' | 'step-left' | 'step-right' | 'page-left' | 'page-right' | 'start' | 'end';
export type GtkSelectionModeNick = 'none' | 'single' | 'browse' | 'multiple' | 'extended';
export type GtkSensitivityTypeNick = 'auto' | 'on' | 'off';
export type GtkShadowTypeNick = 'none' | 'in' | 'out' | 'etched-in' | 'etched-out';
export type GtkSideTypeNick = 'top' | 'bottom' | 'left' | 'right';
export type GtkSizeGroupModeNick = 'none' | 'horizontal' | 'vertical' | 'both';
export type GtkSortTypeNick = 'ascending' | 'descending';
export type GtkSpinButtonUpdatePolicyNick = 'always' | 'if-valid';
export type GtkSpinTypeNick = 'step-forward' | 'step-backward' | 'page-forward' | 'page-backward' | 'home' | 'end' | 'user-defined';
export type GtkStateTypeNick = 'normal' | 'active' | 'prelight' | 'selected' | 'insensitive';
export type GtkSubmenuDirectionNick = 'left' | 'right';
export type GtkSubmenuPlacementNick = 'top-bottom' | 'left-right';
export type GtkTextBufferTargetInfoNick = 'buffer-contents' | 'rich-text' | 'text';
export type GtkTextDirectionNick = 'none' | 'ltr' | 'rtl';
export type GtkTextWindowTypeNick = 'private' | 'widget' | 'text' | 'left' | 'right' | 'top' | 'bottom';
export type GtkToolbarChildTypeNick = 'space' | 'button' | 'togglebutton' | 'radiobutton' | 'widget';
export type GtkToolbarSpaceStyleNick = 'empty' | 'line';
export type GtkToolbarStyleNick = 'icons' | 'text' | 'both' | 'both-horiz';
export type GtkTreeViewColumnSizingNick = 'grow-only' | 'autosize' | 'fixed';
export type GtkTreeViewDropPositionNick = 'before' | 'after' | 'into-or-before' | 'into-or-after';
export type GtkTreeViewGridLinesNick = 'none' | 'horizontal' | 'vertical' | 'both';
export type GtkTreeViewModeNick = 'line' | 'item';
export type GtkUnitNick = 'pixel' | 'points' | 'inch' | 'mm';
export type GtkUpdateTypeNick = 'continuous' | 'discontinuous' | 'delayed';
export type GtkVisibilityNick = 'none' | 'partial' | 'full';
export type GtkWidgetHelpTypeNick = 'tooltip' | 'whats-this';
export type GtkWindowPositionNick = 'none' | 'center' | 'mouse' | 'center-always' | 'center-on-parent';
export type GtkWindowTypeNick = 'toplevel' | 'popup';
export type GtkWrapModeNick = 'none' | 'char' | 'word' | 'word-char';

// ---------------------------------------------------------------------------
// Property surfaces — one interface per GIR DECLARATION, mirroring GIR's own
// inheritance rather than flattening per widget.
//
// The interfaces are load-bearing, not tidiness: `GtkBox` declares four properties
// of its own and `orientation` is not among them — it lives on `Gtk.Orientable`,
// because GObject installs interface properties on the implementor at runtime while
// GIR keeps them once, on the interface.
// ---------------------------------------------------------------------------

/** The #GtkAboutDialog offers a simple way to display information about a program like its logo, name, copyright, website and license. */
export interface GtkAboutDialogProps extends GtkDialogProps, GtkBuildableProps {
    /**
     * The people who contributed artwork to the program, as a %NULL-terminated array of strings.
     * @since 2.6
     */
    artists?: string[];
    /**
     * The authors of the program, as a %NULL-terminated array of strings.
     * @since 2.6
     */
    authors?: string[];
    /**
     * Comments about the program.
     * @since 2.6
     * @default NULL
     */
    comments?: string;
    /**
     * Copyright information for the program.
     * @since 2.6
     * @default NULL
     */
    copyright?: string;
    /**
     * The people documenting the program, as a %NULL-terminated array of strings.
     * @since 2.6
     */
    documenters?: string[];
    /**
     * The license of the program.
     * @since 2.6
     * @default NULL
     */
    license?: string;
    /**
     * A logo for the about box.
     * @since 2.6
     */
    logo?: GdkPixbuf.Pixbuf;
    /**
     * A named icon to use as the logo for the about box.
     * @since 2.6
     * @default NULL
     */
    'logo-icon-name'?: string;
    /**
     * The name of the program.
     * @since 2.12
     * @default NULL
     */
    'program-name'?: string;
    /**
     * Credits to the translators.
     * @since 2.6
     * @default NULL
     */
    'translator-credits'?: string;
    /**
     * The version of the program.
     * @since 2.6
     * @default NULL
     */
    version?: string;
    /**
     * The URL for the link to the website of the program.
     * @since 2.6
     * @default NULL
     */
    website?: string;
    /**
     * The label for the link to the website of the program.
     * @since 2.6
     * @default NULL
     */
    'website-label'?: string;
    /**
     * Whether to wrap the text in the license dialog.
     * @since 2.8
     * @default FALSE
     */
    'wrap-license'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkAboutDialogConstructOnly = GtkDialogConstructOnly | GtkBuildableConstructOnly;

/** A #GtkAccelGroup represents a group of keyboard accelerators, typically attached to a toplevel #GtkWindow (with gtk_window_add_accel_group()). */
export interface GtkAccelGroupProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkAccelGroupConstructOnly = GObjectConstructOnly;

/** The #GtkAccelLabel widget is a subclass of #GtkLabel that also displays an accelerator key on the right of the label text, e.g. */
export interface GtkAccelLabelProps extends GtkLabelProps, GtkBuildableProps {
    'accel-closure'?: GObject.Closure;
    'accel-widget'?: Gtk.Widget;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkAccelLabelConstructOnly = GtkLabelConstructOnly | GtkBuildableConstructOnly;

export interface GtkAccelMapProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkAccelMapConstructOnly = GObjectConstructOnly;

export interface GtkAccessibleProps extends AtkObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkAccessibleConstructOnly = AtkObjectConstructOnly;

/** Actions represent operations that the user can be perform, along with some information how it should be presented in the interface. */
export interface GtkActionProps extends GObjectProps, GtkBuildableProps {
    'action-group'?: Gtk.ActionGroup;
    /**
     * If %TRUE, the action's menu item proxies will ignore the #GtkSettings:gtk-menu-images setting and always show their image, if available.
     * @since 2.20
     * @default FALSE
     */
    'always-show-image'?: boolean;
    /**
     * The #GIcon displayed in the #GtkAction.
     * @since 2.16
     */
    gicon?: Gio.Icon;
    /** @default TRUE */
    'hide-if-empty'?: boolean;
    /**
     * The name of the icon from the icon theme.
     * @since 2.10
     * @default NULL
     */
    'icon-name'?: string;
    /** @default FALSE */
    'is-important'?: boolean;
    /**
     * The label used for menu items and buttons that activate this action.
     * @default NULL
     */
    label?: string;
    /** @default NULL */
    name?: string;
    /** @default TRUE */
    sensitive?: boolean;
    /**
     * A shorter label that may be used on toolbar buttons.
     * @default NULL
     */
    'short-label'?: string;
    /**
     * The stock icon displayed in widgets representing this action.
     * @default NULL
     */
    'stock-id'?: string;
    /** @default NULL */
    tooltip?: string;
    /** @default TRUE */
    visible?: boolean;
    /** @default TRUE */
    'visible-horizontal'?: boolean;
    /**
     * When %TRUE, toolitem proxies for this action are represented in the toolbar overflow menu.
     * @since 2.6
     * @default TRUE
     */
    'visible-overflown'?: boolean;
    /** @default TRUE */
    'visible-vertical'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkActionConstructOnly = GObjectConstructOnly | GtkBuildableConstructOnly | 'name';

export interface GtkActionGroupProps extends GObjectProps, GtkBuildableProps {
    /** @default NULL */
    name?: string;
    /** @default TRUE */
    sensitive?: boolean;
    /** @default TRUE */
    visible?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkActionGroupConstructOnly = GObjectConstructOnly | GtkBuildableConstructOnly | 'name';

/** Activatable widgets can be connected to a #GtkAction and reflects the state of its action. */
export interface GtkActivatableProps extends GObjectProps {
    /**
     * The action that this activatable will activate and receive updates from for various states and possibly appearance.
     * @since 2.16
     */
    'related-action'?: Gtk.Action;
    /**
     * Whether this activatable should reset its layout and appearance when setting the related action or when the action changes appearance.
     * @since 2.16
     * @default TRUE
     */
    'use-action-appearance'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkActivatableConstructOnly = GObjectConstructOnly;

export interface GtkAdjustmentProps extends GtkObjectProps {
    /**
     * The minimum value of the adjustment.
     * @since 2.4
     * @default 0.000000
     */
    lower?: number;
    /**
     * The page increment of the adjustment.
     * @since 2.4
     * @default 0.000000
     */
    'page-increment'?: number;
    /**
     * The page size of the adjustment.
     * @since 2.4
     * @default 0.000000
     */
    'page-size'?: number;
    /**
     * The step increment of the adjustment.
     * @since 2.4
     * @default 0.000000
     */
    'step-increment'?: number;
    /**
     * The maximum value of the adjustment.
     * @since 2.4
     * @default 0.000000
     */
    upper?: number;
    /**
     * The value of the adjustment.
     * @since 2.4
     * @default 0.000000
     */
    value?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkAdjustmentConstructOnly = GtkObjectConstructOnly;

/** The #GtkAlignment widget controls the alignment and size of its child widget. */
export interface GtkAlignmentProps extends GtkBinProps, GtkBuildableProps {
    /**
     * The padding to insert at the bottom of the widget.
     * @since 2.4
     * @default 0
     */
    'bottom-padding'?: number;
    /**
     * The padding to insert at the left of the widget.
     * @since 2.4
     * @default 0
     */
    'left-padding'?: number;
    /**
     * The padding to insert at the right of the widget.
     * @since 2.4
     * @default 0
     */
    'right-padding'?: number;
    /**
     * The padding to insert at the top of the widget.
     * @since 2.4
     * @default 0
     */
    'top-padding'?: number;
    /** @default 0.500000 */
    xalign?: number;
    /** @default 1.000000 */
    xscale?: number;
    /** @default 0.500000 */
    yalign?: number;
    /** @default 1.000000 */
    yscale?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkAlignmentConstructOnly = GtkBinConstructOnly | GtkBuildableConstructOnly;

/** GtkArrow should be used to draw simple arrows that need to point in one of the four cardinal directions (up, down, left, or right). */
export interface GtkArrowProps extends GtkMiscProps, GtkBuildableProps {
    /** @default GTK_ARROW_RIGHT */
    'arrow-type'?: GtkArrowTypeNick | Gtk.ArrowType;
    /** @default GTK_SHADOW_OUT */
    'shadow-type'?: GtkShadowTypeNick | Gtk.ShadowType;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkArrowConstructOnly = GtkMiscConstructOnly | GtkBuildableConstructOnly;

/** The #GtkAspectFrame is useful when you want pack a widget so that it can resize but always retains the same aspect ratio. */
export interface GtkAspectFrameProps extends GtkFrameProps, GtkBuildableProps {
    /** @default TRUE */
    'obey-child'?: boolean;
    /** @default 1.000000 */
    ratio?: number;
    /** @default 0.500000 */
    xalign?: number;
    /** @default 0.500000 */
    yalign?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkAspectFrameConstructOnly = GtkFrameConstructOnly | GtkBuildableConstructOnly;

/** A #GtkAssistant is a widget used to represent a generally complex operation splitted in several steps, guiding the user through its pages and controlling the page flow to collect the necessary data. */
export interface GtkAssistantProps extends GtkWindowProps, GtkBuildableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkAssistantConstructOnly = GtkWindowConstructOnly | GtkBuildableConstructOnly;

/** The #GtkBin widget is a container with just one child. */
export interface GtkBinProps extends GtkContainerProps, GtkBuildableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkBinConstructOnly = GtkContainerConstructOnly | GtkBuildableConstructOnly;

export interface GtkBoxProps extends GtkContainerProps, GtkBuildableProps, GtkOrientableProps {
    /** @default FALSE */
    homogeneous?: boolean;
    /** @default 0 */
    spacing?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkBoxConstructOnly = GtkContainerConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

/** In order to allow construction from a <link linkend="BUILDER-UI">GtkBuilder UI description</link>, an object class must implement the GtkBuildable interface. */
export interface GtkBuildableProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkBuildableConstructOnly = GObjectConstructOnly;

export interface GtkBuilderProps extends GObjectProps {
    /**
     * The translation domain used when translating property values that have been marked as translatable in interface descriptions.
     * @since 2.12
     * @default NULL
     */
    'translation-domain'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkBuilderConstructOnly = GObjectConstructOnly;

export interface GtkButtonProps extends GtkBinProps, GtkActivatableProps, GtkBuildableProps {
    /** @default TRUE */
    'focus-on-click'?: boolean;
    image?: Gtk.Widget;
    /**
     * The position of the image relative to the text inside the button.
     * @since 2.10
     * @default GTK_POS_LEFT
     */
    'image-position'?: GtkPositionTypeNick | Gtk.PositionType;
    /** @default NULL */
    label?: string;
    /** @default GTK_RELIEF_NORMAL */
    relief?: GtkReliefStyleNick | Gtk.ReliefStyle;
    /** @default FALSE */
    'use-stock'?: boolean;
    /** @default FALSE */
    'use-underline'?: boolean;
    /**
     * If the child of the button is a #GtkMisc or #GtkAlignment, this property can be used to control it's horizontal alignment.
     * @since 2.4
     * @default 0.500000
     */
    xalign?: number;
    /**
     * If the child of the button is a #GtkMisc or #GtkAlignment, this property can be used to control it's vertical alignment.
     * @since 2.4
     * @default 0.500000
     */
    yalign?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkButtonConstructOnly = GtkBinConstructOnly | GtkActivatableConstructOnly | GtkBuildableConstructOnly;

export interface GtkButtonBoxProps extends GtkBoxProps, GtkBuildableProps, GtkOrientableProps {
    /** @default GTK_BUTTONBOX_DEFAULT_STYLE */
    'layout-style'?: GtkButtonBoxStyleNick | Gtk.ButtonBoxStyle;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkButtonBoxConstructOnly = GtkBoxConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

export interface GtkCListProps extends GtkContainerProps, GtkBuildableProps {
    /** @default 0 */
    'n-columns'?: number;
    /** @default FALSE */
    reorderable?: boolean;
    /** @default 0 */
    'row-height'?: number;
    /** @default GTK_SELECTION_NONE */
    'selection-mode'?: GtkSelectionModeNick | Gtk.SelectionMode;
    /** @default GTK_SHADOW_NONE */
    'shadow-type'?: GtkShadowTypeNick | Gtk.ShadowType;
    /** @default GTK_SORT_ASCENDING */
    'sort-type'?: GtkSortTypeNick | Gtk.SortType;
    /** @default FALSE */
    'titles-active'?: boolean;
    /** @default FALSE */
    'use-drag-icons'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkCListConstructOnly = GtkContainerConstructOnly | GtkBuildableConstructOnly | 'n-columns';

export interface GtkCTreeProps extends GtkCListProps, GtkBuildableProps {
    /** @default GTK_CTREE_EXPANDER_NONE */
    'expander-style'?: GtkCTreeExpanderStyleNick | Gtk.CTreeExpanderStyle;
    /** @default 0 */
    indent?: number;
    /** @default GTK_CTREE_LINES_NONE */
    'line-style'?: GtkCTreeLineStyleNick | Gtk.CTreeLineStyle;
    /** @default 0 */
    'n-columns'?: number;
    /** @default FALSE */
    'show-stub'?: boolean;
    /** @default 0 */
    spacing?: number;
    /** @default 0 */
    'tree-column'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkCTreeConstructOnly = GtkCListConstructOnly | GtkBuildableConstructOnly | 'n-columns' | 'tree-column';

export interface GtkCalendarProps extends GtkWidgetProps, GtkBuildableProps {
    /**
     * The selected day (as a number between 1 and 31, or 0 to unselect the currently selected day).
     * @default 0
     */
    day?: number;
    /**
     * Height of a detail cell, in rows.
     * @since 2.14
     * @default 0
     */
    'detail-height-rows'?: number;
    /**
     * Width of a detail cell, in characters.
     * @since 2.14
     * @default 0
     */
    'detail-width-chars'?: number;
    /**
     * The selected month (as a number between 0 and 11).
     * @default 0
     */
    month?: number;
    /**
     * Determines whether the selected month can be changed.
     * @since 2.4
     * @default FALSE
     */
    'no-month-change'?: boolean;
    /**
     * Determines whether day names are displayed.
     * @since 2.4
     * @default TRUE
     */
    'show-day-names'?: boolean;
    /**
     * Determines whether details are shown directly in the widget, or if they are available only as tooltip.
     * @since 2.14
     * @default TRUE
     */
    'show-details'?: boolean;
    /**
     * Determines whether a heading is displayed.
     * @since 2.4
     * @default TRUE
     */
    'show-heading'?: boolean;
    /**
     * Determines whether week numbers are displayed.
     * @since 2.4
     * @default FALSE
     */
    'show-week-numbers'?: boolean;
    /**
     * The selected year.
     * @default 0
     */
    year?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkCalendarConstructOnly = GtkWidgetConstructOnly | GtkBuildableConstructOnly;

export interface GtkCellEditableProps extends GtkWidgetProps {
    /**
     * Indicates whether editing on the cell has been canceled.
     * @since 2.20
     * @default FALSE
     */
    'editing-canceled'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkCellEditableConstructOnly = GtkWidgetConstructOnly;

export interface GtkCellLayoutProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkCellLayoutConstructOnly = GObjectConstructOnly;

export interface GtkCellRendererProps extends GtkObjectProps {
    /** @default NULL */
    'cell-background'?: string;
    'cell-background-gdk'?: Gdk.Color;
    /** @default FALSE */
    'cell-background-set'?: boolean;
    /** @default -1 */
    height?: number;
    /** @default FALSE */
    'is-expanded'?: boolean;
    /** @default FALSE */
    'is-expander'?: boolean;
    /** @default GTK_CELL_RENDERER_MODE_INERT */
    mode?: GtkCellRendererModeNick | Gtk.CellRendererMode;
    /** @default TRUE */
    sensitive?: boolean;
    /** @default TRUE */
    visible?: boolean;
    /** @default -1 */
    width?: number;
    /** @default 0.500000 */
    xalign?: number;
    /** @default 0 */
    xpad?: number;
    /** @default 0.500000 */
    yalign?: number;
    /** @default 0 */
    ypad?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkCellRendererConstructOnly = GtkObjectConstructOnly;

export interface GtkCellRendererAccelProps extends GtkCellRendererTextProps {
    /**
     * The keyval of the accelerator.
     * @since 2.10
     * @default 0
     */
    'accel-key'?: number;
    /**
     * Determines if the edited accelerators are GTK+ accelerators.
     * @since 2.10
     * @default GTK_CELL_RENDERER_ACCEL_MODE_GTK
     */
    'accel-mode'?: GtkCellRendererAccelModeNick | Gtk.CellRendererAccelMode;
    /**
     * The modifier mask of the accelerator.
     * @since 2.10
     * @default 0
     */
    'accel-mods'?: number;
    /**
     * The hardware keycode of the accelerator.
     * @since 2.10
     * @default 0
     */
    keycode?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkCellRendererAccelConstructOnly = GtkCellRendererTextConstructOnly;

export interface GtkCellRendererComboProps extends GtkCellRendererTextProps {
    /**
     * If %TRUE, the cell renderer will include an entry and allow to enter values other than the ones in the popup list.
     * @since 2.6
     * @default TRUE
     */
    'has-entry'?: boolean;
    /**
     * Holds a tree model containing the possible values for the combo box.
     * @since 2.6
     */
    model?: Gtk.TreeModel;
    /**
     * Specifies the model column which holds the possible values for the combo box.
     * @since 2.6
     * @default -1
     */
    'text-column'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkCellRendererComboConstructOnly = GtkCellRendererTextConstructOnly;

export interface GtkCellRendererPixbufProps extends GtkCellRendererProps {
    /**
     * Specifies whether the rendered pixbuf should be colorized according to the #GtkCellRendererState.
     * @since 2.8
     * @default FALSE
     */
    'follow-state'?: boolean;
    /**
     * The GIcon representing the icon to display.
     * @since 2.14
     */
    gicon?: Gio.Icon;
    /**
     * The name of the themed icon to display.
     * @since 2.8
     * @default NULL
     */
    'icon-name'?: string;
    pixbuf?: GdkPixbuf.Pixbuf;
    'pixbuf-expander-closed'?: GdkPixbuf.Pixbuf;
    'pixbuf-expander-open'?: GdkPixbuf.Pixbuf;
    /** @default NULL */
    'stock-detail'?: string;
    /** @default NULL */
    'stock-id'?: string;
    /** @default 1 */
    'stock-size'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkCellRendererPixbufConstructOnly = GtkCellRendererConstructOnly;

export interface GtkCellRendererProgressProps extends GtkCellRendererProps {
    /**
     * The "orientation" property controls the direction and growth direction of the progress bar (left-to-right, right-to-left, top-to-bottom or bottom-to-top).
     * @since 2.12
     * @default GTK_PROGRESS_LEFT_TO_RIGHT
     */
    orientation?: GtkProgressBarOrientationNick | Gtk.ProgressBarOrientation;
    /**
     * Setting this to a non-negative value causes the cell renderer to enter "activity mode", where a block bounces back and forth to indicate that some progress is made, without specifying exactly how muc…
     * @since 2.12
     * @default -1
     */
    pulse?: number;
    /**
     * The "text" property determines the label which will be drawn over the progress bar.
     * @since 2.6
     * @default NULL
     */
    text?: string;
    /**
     * The "text-xalign" property controls the horizontal alignment of the text in the progress bar.
     * @since 2.12
     * @default 0.500000
     */
    'text-xalign'?: number;
    /**
     * The "text-yalign" property controls the vertical alignment of the text in the progress bar.
     * @since 2.12
     * @default 0.500000
     */
    'text-yalign'?: number;
    /**
     * The "value" property determines the percentage to which the progress bar will be "filled in".
     * @since 2.6
     * @default 0
     */
    value?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkCellRendererProgressConstructOnly = GtkCellRendererConstructOnly;

export interface GtkCellRendererSpinProps extends GtkCellRendererTextProps {
    /**
     * The adjustment that holds the value of the spinbutton.
     * @since 2.10
     */
    adjustment?: Gtk.Adjustment;
    /**
     * The acceleration rate when you hold down a button.
     * @since 2.10
     * @default 0.000000
     */
    'climb-rate'?: number;
    /**
     * The number of decimal places to display.
     * @since 2.10
     * @default 0
     */
    digits?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkCellRendererSpinConstructOnly = GtkCellRendererTextConstructOnly;

/** GtkCellRendererSpinner renders a spinning animation in a cell, very similar to #GtkSpinner. */
export interface GtkCellRendererSpinnerProps extends GtkCellRendererProps {
    /** @default FALSE */
    active?: boolean;
    /**
     * Pulse of the spinner.
     * @since 2.20
     * @default 0
     */
    pulse?: number;
    /**
     * The #GtkIconSize value that specifies the size of the rendered spinner.
     * @since 2.20
     * @default GTK_ICON_SIZE_MENU
     */
    size?: GtkIconSizeNick | Gtk.IconSize;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkCellRendererSpinnerConstructOnly = GtkCellRendererConstructOnly;

export interface GtkCellRendererTextProps extends GtkCellRendererProps {
    /** @default FALSE */
    'align-set'?: boolean;
    /**
     * Specifies how to align the lines of text with respect to each other.
     * @since 2.10
     * @default PANGO_ALIGN_LEFT
     */
    alignment?: PangoAlignmentNick | Pango.Alignment;
    attributes?: Pango.AttrList;
    /** @default NULL */
    background?: string;
    'background-gdk'?: Gdk.Color;
    /** @default FALSE */
    'background-set'?: boolean;
    /** @default FALSE */
    editable?: boolean;
    /** @default FALSE */
    'editable-set'?: boolean;
    /**
     * Specifies the preferred place to ellipsize the string, if the cell renderer does not have enough room to display the entire string.
     * @since 2.6
     * @default PANGO_ELLIPSIZE_NONE
     */
    ellipsize?: PangoEllipsizeModeNick | Pango.EllipsizeMode;
    /** @default FALSE */
    'ellipsize-set'?: boolean;
    /** @default NULL */
    family?: string;
    /** @default FALSE */
    'family-set'?: boolean;
    /** @default NULL */
    font?: string;
    'font-desc'?: Pango.FontDescription;
    /** @default NULL */
    foreground?: string;
    'foreground-gdk'?: Gdk.Color;
    /** @default FALSE */
    'foreground-set'?: boolean;
    /** @default NULL */
    language?: string;
    /** @default FALSE */
    'language-set'?: boolean;
    /** @default NULL */
    markup?: string;
    /** @default 0 */
    rise?: number;
    /** @default FALSE */
    'rise-set'?: boolean;
    /** @default 1.000000 */
    scale?: number;
    /** @default FALSE */
    'scale-set'?: boolean;
    /** @default FALSE */
    'single-paragraph-mode'?: boolean;
    /** @default 0 */
    size?: number;
    /** @default 0.000000 */
    'size-points'?: number;
    /** @default FALSE */
    'size-set'?: boolean;
    /** @default PANGO_STRETCH_NORMAL */
    stretch?: PangoStretchNick | Pango.Stretch;
    /** @default FALSE */
    'stretch-set'?: boolean;
    /** @default FALSE */
    strikethrough?: boolean;
    /** @default FALSE */
    'strikethrough-set'?: boolean;
    /** @default PANGO_STYLE_NORMAL */
    style?: PangoStyleNick | Pango.Style;
    /** @default FALSE */
    'style-set'?: boolean;
    /** @default NULL */
    text?: string;
    /** @default PANGO_UNDERLINE_NONE */
    underline?: PangoUnderlineNick | Pango.Underline;
    /** @default FALSE */
    'underline-set'?: boolean;
    /** @default PANGO_VARIANT_NORMAL */
    variant?: PangoVariantNick | Pango.Variant;
    /** @default FALSE */
    'variant-set'?: boolean;
    /** @default 400 */
    weight?: number;
    /** @default FALSE */
    'weight-set'?: boolean;
    /**
     * The desired width of the cell, in characters.
     * @since 2.6
     * @default -1
     */
    'width-chars'?: number;
    /**
     * Specifies how to break the string into multiple lines, if the cell renderer does not have enough room to display the entire string.
     * @since 2.8
     * @default PANGO_WRAP_CHAR
     */
    'wrap-mode'?: PangoWrapModeNick | Pango.WrapMode;
    /**
     * Specifies the width at which the text is wrapped.
     * @since 2.8
     * @default -1
     */
    'wrap-width'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkCellRendererTextConstructOnly = GtkCellRendererConstructOnly;

export interface GtkCellRendererToggleProps extends GtkCellRendererProps {
    /** @default TRUE */
    activatable?: boolean;
    /** @default FALSE */
    active?: boolean;
    /** @default FALSE */
    inconsistent?: boolean;
    /** @default 13 */
    'indicator-size'?: number;
    /** @default FALSE */
    radio?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkCellRendererToggleConstructOnly = GtkCellRendererConstructOnly;

export interface GtkCellViewProps extends GtkWidgetProps, GtkBuildableProps, GtkCellLayoutProps {
    /** @default NULL */
    background?: string;
    'background-gdk'?: Gdk.Color;
    /** @default FALSE */
    'background-set'?: boolean;
    /** The model for cell view since 2.10 */
    model?: Gtk.TreeModel;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkCellViewConstructOnly = GtkWidgetConstructOnly | GtkBuildableConstructOnly | GtkCellLayoutConstructOnly;

export interface GtkCheckButtonProps extends GtkToggleButtonProps, GtkActivatableProps, GtkBuildableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkCheckButtonConstructOnly = GtkToggleButtonConstructOnly | GtkActivatableConstructOnly | GtkBuildableConstructOnly;

export interface GtkCheckMenuItemProps extends GtkMenuItemProps, GtkActivatableProps, GtkBuildableProps {
    /** @default FALSE */
    active?: boolean;
    /** @default FALSE */
    'draw-as-radio'?: boolean;
    /** @default FALSE */
    inconsistent?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkCheckMenuItemConstructOnly = GtkMenuItemConstructOnly | GtkActivatableConstructOnly | GtkBuildableConstructOnly;

export interface GtkClipboardProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkClipboardConstructOnly = GObjectConstructOnly;

export interface GtkColorButtonProps extends GtkButtonProps, GtkActivatableProps, GtkBuildableProps {
    /**
     * The selected opacity value (0 fully transparent, 65535 fully opaque).
     * @since 2.4
     * @default 65535
     */
    alpha?: number;
    /**
     * The selected color.
     * @since 2.4
     */
    color?: Gdk.Color;
    /**
     * The title of the color selection dialog
     * @since 2.4
     * @default Pick a Color
     */
    title?: string;
    /**
     * If this property is set to %TRUE, the color swatch on the button is rendered against a checkerboard background to show its opacity and the opacity slider is displayed in the color selection dialog.
     * @since 2.4
     * @default FALSE
     */
    'use-alpha'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkColorButtonConstructOnly = GtkButtonConstructOnly | GtkActivatableConstructOnly | GtkBuildableConstructOnly;

export interface GtkColorSelectionProps extends GtkVBoxProps, GtkBuildableProps, GtkOrientableProps {
    /** @default 65535 */
    'current-alpha'?: number;
    'current-color'?: Gdk.Color;
    /** @default FALSE */
    'has-opacity-control'?: boolean;
    /** @default FALSE */
    'has-palette'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkColorSelectionConstructOnly = GtkVBoxConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

export interface GtkColorSelectionDialogProps extends GtkDialogProps, GtkBuildableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkColorSelectionDialogConstructOnly = GtkDialogConstructOnly | GtkBuildableConstructOnly;

export interface GtkComboProps extends GtkHBoxProps, GtkBuildableProps, GtkOrientableProps {
    /** @default TRUE */
    'allow-empty'?: boolean;
    /** @default FALSE */
    'case-sensitive'?: boolean;
    /** @default TRUE */
    'enable-arrow-keys'?: boolean;
    /** @default TRUE */
    'enable-arrows-always'?: boolean;
    /** @default FALSE */
    'value-in-list'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkComboConstructOnly = GtkHBoxConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

/** A GtkComboBox is a widget that allows the user to choose from a list of valid choices. */
export interface GtkComboBoxProps extends GtkBinProps, GtkBuildableProps, GtkCellEditableProps, GtkCellLayoutProps {
    /**
     * The item which is currently active.
     * @since 2.4
     * @default -1
     */
    active?: number;
    /**
     * The add-tearoffs property controls whether generated menus have tearoff menu items.
     * @since 2.6
     * @default FALSE
     */
    'add-tearoffs'?: boolean;
    /**
     * Whether the dropdown button is sensitive when the model is empty.
     * @since 2.14
     * @default GTK_SENSITIVITY_AUTO
     */
    'button-sensitivity'?: GtkSensitivityTypeNick | Gtk.SensitivityType;
    /**
     * If this is set to a non-negative value, it must be the index of a column of type %G_TYPE_INT in the model.
     * @since 2.4
     * @default -1
     */
    'column-span-column'?: number;
    /**
     * The column in the combo box's model to associate with strings from the entry if the combo was created with #GtkComboBox:has-entry = %TRUE.
     * @since 2.24
     * @default -1
     */
    'entry-text-column'?: number;
    /** @default TRUE */
    'focus-on-click'?: boolean;
    /**
     * Whether the combo box has an entry.
     * @since 2.24
     * @default FALSE
     */
    'has-entry'?: boolean;
    /**
     * The has-frame property controls whether a frame is drawn around the entry.
     * @since 2.6
     * @default TRUE
     */
    'has-frame'?: boolean;
    /**
     * The model from which the combo box takes the values shown in the list.
     * @since 2.4
     */
    model?: Gtk.TreeModel;
    /**
     * If this is set to a non-negative value, it must be the index of a column of type %G_TYPE_INT in the model.
     * @since 2.4
     * @default -1
     */
    'row-span-column'?: number;
    /**
     * A title that may be displayed by the window manager when the popup is torn-off.
     * @since 2.10
     * @default NULL
     */
    'tearoff-title'?: string;
    /**
     * If wrap-width is set to a positive value, items in the popup will be laid out along multiple columns, starting a new row on reaching the wrap width.
     * @since 2.4
     * @default 0
     */
    'wrap-width'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkComboBoxConstructOnly = GtkBinConstructOnly | GtkBuildableConstructOnly | GtkCellEditableConstructOnly | GtkCellLayoutConstructOnly | 'has-entry';

export interface GtkComboBoxEntryProps extends GtkComboBoxProps, GtkBuildableProps, GtkCellEditableProps, GtkCellLayoutProps {
    /** @default -1 */
    'text-column'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkComboBoxEntryConstructOnly = GtkComboBoxConstructOnly | GtkBuildableConstructOnly | GtkCellEditableConstructOnly | GtkCellLayoutConstructOnly;

/** A GtkComboBoxText is a simple variant of #GtkComboBox that hides the model-view complexity for simple text-only use cases. */
export interface GtkComboBoxTextProps extends GtkComboBoxProps, GtkBuildableProps, GtkCellEditableProps, GtkCellLayoutProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkComboBoxTextConstructOnly = GtkComboBoxConstructOnly | GtkBuildableConstructOnly | GtkCellEditableConstructOnly | GtkCellLayoutConstructOnly;

export interface GtkContainerProps extends GtkWidgetProps, GtkBuildableProps {
    /** @default 0 */
    'border-width'?: number;
    child?: Gtk.Widget;
    /** @default GTK_RESIZE_PARENT */
    'resize-mode'?: GtkResizeModeNick | Gtk.ResizeMode;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkContainerConstructOnly = GtkWidgetConstructOnly | GtkBuildableConstructOnly;

export interface GtkCurveProps extends GtkDrawingAreaProps, GtkBuildableProps {
    /** @default GTK_CURVE_TYPE_SPLINE */
    'curve-type'?: GtkCurveTypeNick | Gtk.CurveType;
    /** @default 1.000000 */
    'max-x'?: number;
    /** @default 1.000000 */
    'max-y'?: number;
    /** @default 0.000000 */
    'min-x'?: number;
    /** @default 0.000000 */
    'min-y'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkCurveConstructOnly = GtkDrawingAreaConstructOnly | GtkBuildableConstructOnly;

export interface GtkDialogProps extends GtkWindowProps, GtkBuildableProps {
    /**
     * When %TRUE, the dialog has a separator bar above its buttons.
     * @default FALSE
     * @deprecated since 2.22: This property will be removed in GTK+ 3.
     */
    'has-separator'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkDialogConstructOnly = GtkWindowConstructOnly | GtkBuildableConstructOnly;

export interface GtkDrawingAreaProps extends GtkWidgetProps, GtkBuildableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkDrawingAreaConstructOnly = GtkWidgetConstructOnly | GtkBuildableConstructOnly;

export interface GtkEditableProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkEditableConstructOnly = GObjectConstructOnly;

export interface GtkEntryProps extends GtkWidgetProps, GtkBuildableProps, GtkCellEditableProps, GtkEditableProps {
    /** @default FALSE */
    'activates-default'?: boolean;
    buffer?: Gtk.EntryBuffer;
    /**
     * Whether password entries will show a warning when Caps Lock is on.
     * @since 2.16
     * @default TRUE
     */
    'caps-lock-warning'?: boolean;
    /** @default TRUE */
    editable?: boolean;
    /** @default TRUE */
    'has-frame'?: boolean;
    /**
     * Which IM (input method) module should be used for this entry.
     * @since 2.16
     * @default NULL
     */
    'im-module'?: string;
    /**
     * Sets the text area's border between the text and the frame.
     * @since 2.10
     */
    'inner-border'?: Gtk.Border;
    /**
     * The invisible character is used when masking entry contents (in \"password mode\")").
     * @since 2.18
     * @default 42
     */
    'invisible-char'?: number;
    /**
     * Whether the invisible char has been set for the #GtkEntry.
     * @since 2.16
     * @default FALSE
     */
    'invisible-char-set'?: boolean;
    /** @default 0 */
    'max-length'?: number;
    /**
     * If text is overwritten when typing in the #GtkEntry.
     * @since 2.14
     * @default FALSE
     */
    'overwrite-mode'?: boolean;
    /**
     * Whether the primary icon is activatable.
     * @since 2.16
     * @default FALSE
     */
    'primary-icon-activatable'?: boolean;
    /**
     * The #GIcon to use for the primary icon for the entry.
     * @since 2.16
     */
    'primary-icon-gicon'?: Gio.Icon;
    /**
     * The icon name to use for the primary icon for the entry.
     * @since 2.16
     * @default NULL
     */
    'primary-icon-name'?: string;
    /**
     * A pixbuf to use as the primary icon for the entry.
     * @since 2.16
     */
    'primary-icon-pixbuf'?: GdkPixbuf.Pixbuf;
    /**
     * Whether the primary icon is sensitive.
     * @since 2.16
     * @default TRUE
     */
    'primary-icon-sensitive'?: boolean;
    /**
     * The stock id to use for the primary icon for the entry.
     * @since 2.16
     * @default NULL
     */
    'primary-icon-stock'?: string;
    /**
     * The contents of the tooltip on the primary icon, which is marked up with the <link linkend="PangoMarkupFormat">Pango text markup language</link>.
     * @since 2.16
     * @default NULL
     */
    'primary-icon-tooltip-markup'?: string;
    /**
     * The contents of the tooltip on the primary icon.
     * @since 2.16
     * @default NULL
     */
    'primary-icon-tooltip-text'?: string;
    /**
     * The current fraction of the task that's been completed.
     * @since 2.16
     * @default 0.000000
     */
    'progress-fraction'?: number;
    /**
     * The fraction of total entry width to move the progress bouncing block for each call to gtk_entry_progress_pulse().
     * @since 2.16
     * @default 0.100000
     */
    'progress-pulse-step'?: number;
    /**
     * Whether the secondary icon is activatable.
     * @since 2.16
     * @default FALSE
     */
    'secondary-icon-activatable'?: boolean;
    /**
     * The #GIcon to use for the secondary icon for the entry.
     * @since 2.16
     */
    'secondary-icon-gicon'?: Gio.Icon;
    /**
     * The icon name to use for the secondary icon for the entry.
     * @since 2.16
     * @default NULL
     */
    'secondary-icon-name'?: string;
    /**
     * An pixbuf to use as the secondary icon for the entry.
     * @since 2.16
     */
    'secondary-icon-pixbuf'?: GdkPixbuf.Pixbuf;
    /**
     * Whether the secondary icon is sensitive.
     * @since 2.16
     * @default TRUE
     */
    'secondary-icon-sensitive'?: boolean;
    /**
     * The stock id to use for the secondary icon for the entry.
     * @since 2.16
     * @default NULL
     */
    'secondary-icon-stock'?: string;
    /**
     * The contents of the tooltip on the secondary icon, which is marked up with the <link linkend="PangoMarkupFormat">Pango text markup language</link>.
     * @since 2.16
     * @default NULL
     */
    'secondary-icon-tooltip-markup'?: string;
    /**
     * The contents of the tooltip on the secondary icon.
     * @since 2.16
     * @default NULL
     */
    'secondary-icon-tooltip-text'?: string;
    /**
     * Which kind of shadow to draw around the entry when #GtkEntry:has-frame is set to %TRUE.
     * @since 2.12
     * @default GTK_SHADOW_IN
     */
    'shadow-type'?: GtkShadowTypeNick | Gtk.ShadowType;
    text?: string;
    /**
     * When %TRUE, pasted multi-line text is truncated to the first line.
     * @since 2.10
     * @default FALSE
     */
    'truncate-multiline'?: boolean;
    /** @default TRUE */
    visibility?: boolean;
    /** @default -1 */
    'width-chars'?: number;
    /**
     * The horizontal alignment, from 0 (left) to 1 (right).
     * @since 2.4
     * @default 0.000000
     */
    xalign?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkEntryConstructOnly = GtkWidgetConstructOnly | GtkBuildableConstructOnly | GtkCellEditableConstructOnly | GtkEditableConstructOnly;

/** The #GtkEntryBuffer class contains the actual text displayed in a #GtkEntry widget. */
export interface GtkEntryBufferProps extends GObjectProps {
    /**
     * The maximum length (in characters) of the text in the buffer.
     * @since 2.18
     * @default 0
     */
    'max-length'?: number;
    /**
     * The contents of the buffer.
     * @since 2.18
     */
    text?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkEntryBufferConstructOnly = GObjectConstructOnly;

export interface GtkEntryCompletionProps extends GObjectProps, GtkBuildableProps, GtkCellLayoutProps {
    /**
     * Determines whether the common prefix of the possible completions should be inserted automatically in the entry.
     * @since 2.6
     * @default FALSE
     */
    'inline-completion'?: boolean;
    /**
     * Determines whether the possible completions on the popup will appear in the entry as you navigate through them.
     * @since 2.12
     * @default FALSE
     */
    'inline-selection'?: boolean;
    /** @default 1 */
    'minimum-key-length'?: number;
    model?: Gtk.TreeModel;
    /**
     * Determines whether the possible completions should be shown in a popup window.
     * @since 2.6
     * @default TRUE
     */
    'popup-completion'?: boolean;
    /**
     * Determines whether the completions popup window will be resized to the width of the entry.
     * @since 2.8
     * @default TRUE
     */
    'popup-set-width'?: boolean;
    /**
     * Determines whether the completions popup window will shown for a single possible completion.
     * @since 2.8
     * @default TRUE
     */
    'popup-single-match'?: boolean;
    /**
     * The column of the model containing the strings.
     * @since 2.6
     * @default -1
     */
    'text-column'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkEntryCompletionConstructOnly = GObjectConstructOnly | GtkBuildableConstructOnly | GtkCellLayoutConstructOnly;

export interface GtkEventBoxProps extends GtkBinProps, GtkBuildableProps {
    /** @default FALSE */
    'above-child'?: boolean;
    /** @default TRUE */
    'visible-window'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkEventBoxConstructOnly = GtkBinConstructOnly | GtkBuildableConstructOnly;

export interface GtkExpanderProps extends GtkBinProps, GtkBuildableProps {
    /** @default FALSE */
    expanded?: boolean;
    /** @default NULL */
    label?: string;
    /** @default FALSE */
    'label-fill'?: boolean;
    'label-widget'?: Gtk.Widget;
    /** @default 0 */
    spacing?: number;
    /** @default FALSE */
    'use-markup'?: boolean;
    /** @default FALSE */
    'use-underline'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkExpanderConstructOnly = GtkBinConstructOnly | GtkBuildableConstructOnly;

/** #GtkFileChooser is an interface that can be implemented by file selection widgets. */
export interface GtkFileChooserProps extends GtkWidgetProps {
    /** @default GTK_FILE_CHOOSER_ACTION_OPEN */
    action?: GtkFileChooserActionNick | Gtk.FileChooserAction;
    /**
     * Whether a file chooser not in %GTK_FILE_CHOOSER_ACTION_OPEN mode will offer the user to create new folders.
     * @since 2.18
     * @default TRUE
     */
    'create-folders'?: boolean;
    /**
     * Whether a file chooser in %GTK_FILE_CHOOSER_ACTION_SAVE mode will present an overwrite confirmation dialog if the user selects a file name that already exists.
     * @since 2.8
     * @default FALSE
     */
    'do-overwrite-confirmation'?: boolean;
    'extra-widget'?: Gtk.Widget;
    /** @default NULL */
    'file-system-backend'?: string;
    filter?: Gtk.FileFilter;
    /** @default TRUE */
    'local-only'?: boolean;
    'preview-widget'?: Gtk.Widget;
    /** @default TRUE */
    'preview-widget-active'?: boolean;
    /** @default FALSE */
    'select-multiple'?: boolean;
    /** @default FALSE */
    'show-hidden'?: boolean;
    /** @default TRUE */
    'use-preview-label'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkFileChooserConstructOnly = GtkWidgetConstructOnly | 'file-system-backend';

export interface GtkFileChooserButtonProps extends GtkHBoxProps, GtkBuildableProps, GtkFileChooserProps, GtkOrientableProps {
    /**
     * Instance of the #GtkFileChooserDialog associated with the button.
     * @since 2.6
     */
    dialog?: Gtk.FileChooser;
    /**
     * Whether the #GtkFileChooserButton button grabs focus when it is clicked with the mouse.
     * @since 2.10
     * @default TRUE
     */
    'focus-on-click'?: boolean;
    /**
     * Title to put on the #GtkFileChooserDialog associated with the button.
     * @since 2.6
     * @default Select a File
     */
    title?: string;
    /**
     * The width of the entry and label inside the button, in characters.
     * @since 2.6
     * @default -1
     */
    'width-chars'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkFileChooserButtonConstructOnly = GtkHBoxConstructOnly | GtkBuildableConstructOnly | GtkFileChooserConstructOnly | GtkOrientableConstructOnly | 'dialog';

export interface GtkFileChooserDialogProps extends GtkDialogProps, GtkBuildableProps, GtkFileChooserProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkFileChooserDialogConstructOnly = GtkDialogConstructOnly | GtkBuildableConstructOnly | GtkFileChooserConstructOnly;

export interface GtkFileChooserWidgetProps extends GtkVBoxProps, GtkBuildableProps, GtkFileChooserProps, GtkOrientableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkFileChooserWidgetConstructOnly = GtkVBoxConstructOnly | GtkBuildableConstructOnly | GtkFileChooserConstructOnly | GtkOrientableConstructOnly;

export interface GtkFileFilterProps extends GtkObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkFileFilterConstructOnly = GtkObjectConstructOnly;

export interface GtkFileSelectionProps extends GtkDialogProps, GtkBuildableProps {
    /** @default NULL */
    filename?: string;
    /** @default FALSE */
    'select-multiple'?: boolean;
    /** @default TRUE */
    'show-fileops'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkFileSelectionConstructOnly = GtkDialogConstructOnly | GtkBuildableConstructOnly;

export interface GtkFixedProps extends GtkContainerProps, GtkBuildableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkFixedConstructOnly = GtkContainerConstructOnly | GtkBuildableConstructOnly;

export interface GtkFontButtonProps extends GtkButtonProps, GtkActivatableProps, GtkBuildableProps {
    /**
     * The name of the currently selected font.
     * @since 2.4
     * @default Sans 12
     */
    'font-name'?: string;
    /**
     * If this property is set to %TRUE, the selected font size will be shown in the label.
     * @since 2.4
     * @default TRUE
     */
    'show-size'?: boolean;
    /**
     * If this property is set to %TRUE, the name of the selected font style will be shown in the label.
     * @since 2.4
     * @default TRUE
     */
    'show-style'?: boolean;
    /**
     * The title of the font selection dialog.
     * @since 2.4
     * @default Pick a Font
     */
    title?: string;
    /**
     * If this property is set to %TRUE, the label will be drawn in the selected font.
     * @since 2.4
     * @default FALSE
     */
    'use-font'?: boolean;
    /**
     * If this property is set to %TRUE, the label will be drawn with the selected font size.
     * @since 2.4
     * @default FALSE
     */
    'use-size'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkFontButtonConstructOnly = GtkButtonConstructOnly | GtkActivatableConstructOnly | GtkBuildableConstructOnly;

export interface GtkFontSelectionProps extends GtkVBoxProps, GtkBuildableProps, GtkOrientableProps {
    /** @default Sans 10 */
    'font-name'?: string;
    /** @default abcdefghijk ABCDEFGHIJK */
    'preview-text'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkFontSelectionConstructOnly = GtkVBoxConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

export interface GtkFontSelectionDialogProps extends GtkDialogProps, GtkBuildableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkFontSelectionDialogConstructOnly = GtkDialogConstructOnly | GtkBuildableConstructOnly;

export interface GtkFrameProps extends GtkBinProps, GtkBuildableProps {
    /** @default NULL */
    label?: string;
    'label-widget'?: Gtk.Widget;
    /** @default 0.000000 */
    'label-xalign'?: number;
    /** @default 0.500000 */
    'label-yalign'?: number;
    /** @default GTK_SHADOW_ETCHED_IN */
    shadow?: GtkShadowTypeNick | Gtk.ShadowType;
    /** @default GTK_SHADOW_ETCHED_IN */
    'shadow-type'?: GtkShadowTypeNick | Gtk.ShadowType;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkFrameConstructOnly = GtkBinConstructOnly | GtkBuildableConstructOnly;

export interface GtkGammaCurveProps extends GtkVBoxProps, GtkBuildableProps, GtkOrientableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkGammaCurveConstructOnly = GtkVBoxConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

/** #GtkHBox is a container that organizes child widgets into a single row. */
export interface GtkHBoxProps extends GtkBoxProps, GtkBuildableProps, GtkOrientableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkHBoxConstructOnly = GtkBoxConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

export interface GtkHButtonBoxProps extends GtkButtonBoxProps, GtkBuildableProps, GtkOrientableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkHButtonBoxConstructOnly = GtkButtonBoxConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

export interface GtkHPanedProps extends GtkPanedProps, GtkBuildableProps, GtkOrientableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkHPanedConstructOnly = GtkPanedConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

export interface GtkHRulerProps extends GtkRulerProps, GtkBuildableProps, GtkOrientableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkHRulerConstructOnly = GtkRulerConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

export interface GtkHSVProps extends GtkWidgetProps, GtkBuildableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkHSVConstructOnly = GtkWidgetConstructOnly | GtkBuildableConstructOnly;

export interface GtkHScaleProps extends GtkScaleProps, GtkBuildableProps, GtkOrientableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkHScaleConstructOnly = GtkScaleConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

export interface GtkHScrollbarProps extends GtkScrollbarProps, GtkBuildableProps, GtkOrientableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkHScrollbarConstructOnly = GtkScrollbarConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

export interface GtkHSeparatorProps extends GtkSeparatorProps, GtkBuildableProps, GtkOrientableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkHSeparatorConstructOnly = GtkSeparatorConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

export interface GtkHandleBoxProps extends GtkBinProps, GtkBuildableProps {
    /** @default GTK_POS_LEFT */
    'handle-position'?: GtkPositionTypeNick | Gtk.PositionType;
    /** @default GTK_SHADOW_OUT */
    shadow?: GtkShadowTypeNick | Gtk.ShadowType;
    /** @default GTK_SHADOW_OUT */
    'shadow-type'?: GtkShadowTypeNick | Gtk.ShadowType;
    /** @default GTK_POS_TOP */
    'snap-edge'?: GtkPositionTypeNick | Gtk.PositionType;
    /** @default FALSE */
    'snap-edge-set'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkHandleBoxConstructOnly = GtkBinConstructOnly | GtkBuildableConstructOnly;

/** #GtkIMContext defines the interface for GTK+ input methods. */
export interface GtkIMContextProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkIMContextConstructOnly = GObjectConstructOnly;

export interface GtkIMContextSimpleProps extends GtkIMContextProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkIMContextSimpleConstructOnly = GtkIMContextConstructOnly;

export interface GtkIMMulticontextProps extends GtkIMContextProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkIMMulticontextConstructOnly = GtkIMContextConstructOnly;

export interface GtkIconFactoryProps extends GObjectProps, GtkBuildableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkIconFactoryConstructOnly = GObjectConstructOnly | GtkBuildableConstructOnly;

export interface GtkIconThemeProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkIconThemeConstructOnly = GObjectConstructOnly;

export interface GtkIconViewProps extends GtkContainerProps, GtkBuildableProps, GtkCellLayoutProps {
    /**
     * The column-spacing property specifies the space which is inserted between the columns of the icon view.
     * @since 2.6
     * @default 6
     */
    'column-spacing'?: number;
    /**
     * The columns property contains the number of the columns in which the items should be displayed.
     * @since 2.6
     * @default -1
     */
    columns?: number;
    /**
     * The item-orientation property specifies how the cells (i.e.
     * @since 2.22
     * @default GTK_ORIENTATION_VERTICAL
     */
    'item-orientation'?: GtkOrientationNick | Gtk.Orientation;
    /**
     * The item-padding property specifies the padding around each of the icon view's item.
     * @since 2.18
     * @default 6
     */
    'item-padding'?: number;
    /**
     * The item-width property specifies the width to use for each item.
     * @since 2.6
     * @default -1
     */
    'item-width'?: number;
    /**
     * The margin property specifies the space which is inserted at the edges of the icon view.
     * @since 2.6
     * @default 6
     */
    margin?: number;
    /**
     * The ::markup-column property contains the number of the model column containing markup information to be displayed.
     * @since 2.6
     * @default -1
     */
    'markup-column'?: number;
    model?: Gtk.TreeModel;
    /**
     * The orientation property specifies how the cells (i.e.
     * @since 2.6
     * @default GTK_ORIENTATION_VERTICAL
     * @deprecated since 2.22: Use the #GtkIconView::item-orientation property
     */
    orientation?: GtkOrientationNick | Gtk.Orientation;
    /**
     * The ::pixbuf-column property contains the number of the model column containing the pixbufs which are displayed.
     * @since 2.6
     * @default -1
     */
    'pixbuf-column'?: number;
    /**
     * The reorderable property specifies if the items can be reordered by DND.
     * @since 2.8
     * @default FALSE
     */
    reorderable?: boolean;
    /**
     * The row-spacing property specifies the space which is inserted between the rows of the icon view.
     * @since 2.6
     * @default 6
     */
    'row-spacing'?: number;
    /**
     * The ::selection-mode property specifies the selection mode of icon view.
     * @since 2.6
     * @default GTK_SELECTION_SINGLE
     */
    'selection-mode'?: GtkSelectionModeNick | Gtk.SelectionMode;
    /**
     * The spacing property specifies the space which is inserted between the cells (i.e.
     * @since 2.6
     * @default 0
     */
    spacing?: number;
    /**
     * The ::text-column property contains the number of the model column containing the texts which are displayed.
     * @since 2.6
     * @default -1
     */
    'text-column'?: number;
    /** @default -1 */
    'tooltip-column'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkIconViewConstructOnly = GtkContainerConstructOnly | GtkBuildableConstructOnly | GtkCellLayoutConstructOnly;

export interface GtkIdentifierProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkIdentifierConstructOnly = never;

/** The #GtkImage widget displays an image. */
export interface GtkImageProps extends GtkMiscProps, GtkBuildableProps {
    /** @default NULL */
    file?: string;
    /**
     * The GIcon displayed in the GtkImage.
     * @since 2.14
     */
    gicon?: Gio.Icon;
    /**
     * The name of the icon in the icon theme.
     * @since 2.6
     * @default NULL
     */
    'icon-name'?: string;
    'icon-set'?: Gtk.IconSet;
    /** @default 4 */
    'icon-size'?: number;
    image?: Gdk.Image;
    mask?: Gdk.Pixmap;
    pixbuf?: GdkPixbuf.Pixbuf;
    'pixbuf-animation'?: GdkPixbuf.PixbufAnimation;
    /**
     * The "pixel-size" property can be used to specify a fixed size overriding the #GtkImage:icon-size property for images of type %GTK_IMAGE_ICON_NAME.
     * @since 2.6
     * @default -1
     */
    'pixel-size'?: number;
    pixmap?: Gdk.Pixmap;
    /** @default NULL */
    stock?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkImageConstructOnly = GtkMiscConstructOnly | GtkBuildableConstructOnly;

export interface GtkImageMenuItemProps extends GtkMenuItemProps, GtkActivatableProps, GtkBuildableProps {
    /**
     * The Accel Group to use for stock accelerator keys
     * @since 2.16
     */
    'accel-group'?: Gtk.AccelGroup;
    /**
     * If %TRUE, the menu item will ignore the #GtkSettings:gtk-menu-images setting and always show the image, if available.
     * @since 2.16
     * @default FALSE
     */
    'always-show-image'?: boolean;
    image?: Gtk.Widget;
    /**
     * If %TRUE, the label set in the menuitem is used as a stock id to select the stock item for the item.
     * @since 2.16
     * @default FALSE
     */
    'use-stock'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkImageMenuItemConstructOnly = GtkMenuItemConstructOnly | GtkActivatableConstructOnly | GtkBuildableConstructOnly;

/** #GtkInfoBar is a widget that can be used to show messages to the user without showing a dialog. */
export interface GtkInfoBarProps extends GtkHBoxProps, GtkBuildableProps, GtkOrientableProps {
    /**
     * The type of the message.
     * @since 2.18
     * @default GTK_MESSAGE_INFO
     */
    'message-type'?: GtkMessageTypeNick | Gtk.MessageType;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkInfoBarConstructOnly = GtkHBoxConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

export interface GtkInputDialogProps extends GtkDialogProps, GtkBuildableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkInputDialogConstructOnly = GtkDialogConstructOnly | GtkBuildableConstructOnly;

export interface GtkInvisibleProps extends GtkWidgetProps, GtkBuildableProps {
    screen?: Gdk.Screen;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkInvisibleConstructOnly = GtkWidgetConstructOnly | GtkBuildableConstructOnly;

export interface GtkItemProps extends GtkBinProps, GtkBuildableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkItemConstructOnly = GtkBinConstructOnly | GtkBuildableConstructOnly;

export interface GtkItemFactoryProps extends GtkObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkItemFactoryConstructOnly = GtkObjectConstructOnly;

export interface GtkLabelProps extends GtkMiscProps, GtkBuildableProps {
    /**
     * The angle that the baseline of the label makes with the horizontal, in degrees, measured counterclockwise.
     * @since 2.6
     * @default 0.000000
     */
    angle?: number;
    attributes?: Pango.AttrList;
    /**
     * The preferred place to ellipsize the string, if the label does not have enough room to display the entire string, specified as a #PangoEllisizeMode.
     * @since 2.6
     * @default PANGO_ELLIPSIZE_NONE
     */
    ellipsize?: PangoEllipsizeModeNick | Pango.EllipsizeMode;
    /** @default GTK_JUSTIFY_LEFT */
    justify?: GtkJustificationNick | Gtk.Justification;
    label?: string;
    /**
     * The desired maximum width of the label, in characters.
     * @since 2.6
     * @default -1
     */
    'max-width-chars'?: number;
    'mnemonic-widget'?: Gtk.Widget;
    /** @default NULL */
    pattern?: string;
    /** @default FALSE */
    selectable?: boolean;
    /**
     * Whether the label is in single line mode.
     * @since 2.6
     * @default FALSE
     */
    'single-line-mode'?: boolean;
    /**
     * Set this property to %TRUE to make the label track which links have been clicked.
     * @since 2.18
     * @default TRUE
     */
    'track-visited-links'?: boolean;
    /** @default FALSE */
    'use-markup'?: boolean;
    /** @default FALSE */
    'use-underline'?: boolean;
    /**
     * The desired width of the label, in characters.
     * @since 2.6
     * @default -1
     */
    'width-chars'?: number;
    /** @default FALSE */
    wrap?: boolean;
    /**
     * If line wrapping is on (see the #GtkLabel:wrap property) this controls how the line wrapping is done.
     * @since 2.10
     * @default PANGO_WRAP_WORD
     */
    'wrap-mode'?: PangoWrapModeNick | Pango.WrapMode;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkLabelConstructOnly = GtkMiscConstructOnly | GtkBuildableConstructOnly;

export interface GtkLayoutProps extends GtkContainerProps, GtkBuildableProps {
    hadjustment?: Gtk.Adjustment;
    /** @default 100 */
    height?: number;
    vadjustment?: Gtk.Adjustment;
    /** @default 100 */
    width?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkLayoutConstructOnly = GtkContainerConstructOnly | GtkBuildableConstructOnly;

export interface GtkLinkButtonProps extends GtkButtonProps, GtkActivatableProps, GtkBuildableProps {
    /**
     * The URI bound to this button.
     * @since 2.10
     * @default NULL
     */
    uri?: string;
    /**
     * The 'visited' state of this button.
     * @since 2.14
     * @default FALSE
     */
    visited?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkLinkButtonConstructOnly = GtkButtonConstructOnly | GtkActivatableConstructOnly | GtkBuildableConstructOnly;

export interface GtkListProps extends GtkContainerProps, GtkBuildableProps {
    /** @default GTK_SELECTION_NONE */
    'selection-mode'?: GtkSelectionModeNick | Gtk.SelectionMode;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkListConstructOnly = GtkContainerConstructOnly | GtkBuildableConstructOnly;

export interface GtkListItemProps extends GtkItemProps, GtkBuildableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkListItemConstructOnly = GtkItemConstructOnly | GtkBuildableConstructOnly;

export interface GtkListStoreProps extends GObjectProps, GtkBuildableProps, GtkTreeDragDestProps, GtkTreeDragSourceProps, GtkTreeModelProps, GtkTreeSortableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkListStoreConstructOnly = GObjectConstructOnly | GtkBuildableConstructOnly | GtkTreeDragDestConstructOnly | GtkTreeDragSourceConstructOnly | GtkTreeModelConstructOnly | GtkTreeSortableConstructOnly;

export interface GtkMenuProps extends GtkMenuShellProps, GtkBuildableProps {
    /**
     * The accel group holding accelerators for the menu.
     * @since 2.14
     */
    'accel-group'?: Gtk.AccelGroup;
    /**
     * An accel path used to conveniently construct accel paths of child items.
     * @since 2.14
     * @default NULL
     */
    'accel-path'?: string;
    /**
     * The index of the currently selected menu item, or -1 if no menu item is selected.
     * @since 2.14
     * @default -1
     */
    active?: number;
    /**
     * The widget the menu is attached to.
     * @since 2.14
     */
    'attach-widget'?: Gtk.Widget;
    /**
     * The monitor the menu will be popped up on.
     * @since 2.14
     * @default -1
     */
    monitor?: number;
    /**
     * A boolean that indicates whether the menu reserves space for toggles and icons, regardless of their actual presence.
     * @since 2.18
     * @default TRUE
     */
    'reserve-toggle-size'?: boolean;
    /**
     * A boolean that indicates whether the menu is torn-off.
     * @since 2.6
     * @default FALSE
     */
    'tearoff-state'?: boolean;
    /** @default NULL */
    'tearoff-title'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkMenuConstructOnly = GtkMenuShellConstructOnly | GtkBuildableConstructOnly;

export interface GtkMenuBarProps extends GtkMenuShellProps, GtkBuildableProps {
    /**
     * The child pack direction of the menubar.
     * @since 2.8
     * @default GTK_PACK_DIRECTION_LTR
     */
    'child-pack-direction'?: GtkPackDirectionNick | Gtk.PackDirection;
    /**
     * The pack direction of the menubar.
     * @since 2.8
     * @default GTK_PACK_DIRECTION_LTR
     */
    'pack-direction'?: GtkPackDirectionNick | Gtk.PackDirection;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkMenuBarConstructOnly = GtkMenuShellConstructOnly | GtkBuildableConstructOnly;

export interface GtkMenuItemProps extends GtkItemProps, GtkActivatableProps, GtkBuildableProps {
    /**
     * Sets the accelerator path of the menu item, through which runtime changes of the menu item's accelerator caused by the user can be identified and saved to persistant storage.
     * @since 2.14
     * @default NULL
     */
    'accel-path'?: string;
    /**
     * The text for the child label.
     * @since 2.16
     */
    label?: string;
    /**
     * Sets whether the menu item appears justified at the right side of a menu bar.
     * @since 2.14
     * @default FALSE
     */
    'right-justified'?: boolean;
    /**
     * The submenu attached to the menu item, or NULL if it has none.
     * @since 2.12
     */
    submenu?: Gtk.Menu;
    /**
     * %TRUE if underlines in the text indicate mnemonics
     * @since 2.16
     * @default FALSE
     */
    'use-underline'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkMenuItemConstructOnly = GtkItemConstructOnly | GtkActivatableConstructOnly | GtkBuildableConstructOnly;

export interface GtkMenuShellProps extends GtkContainerProps, GtkBuildableProps {
    /**
     * A boolean that determines whether the menu and its submenus grab the keyboard focus.
     * @since 2.8
     * @default TRUE
     */
    'take-focus'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkMenuShellConstructOnly = GtkContainerConstructOnly | GtkBuildableConstructOnly;

export interface GtkMenuToolButtonProps extends GtkToolButtonProps, GtkActivatableProps, GtkBuildableProps {
    menu?: Gtk.Menu;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkMenuToolButtonConstructOnly = GtkToolButtonConstructOnly | GtkActivatableConstructOnly | GtkBuildableConstructOnly;

/** #GtkMessageDialog presents a dialog with an image representing the type of message (Error, Question, etc.) alongside some message text. */
export interface GtkMessageDialogProps extends GtkDialogProps, GtkBuildableProps {
    /** @default GTK_BUTTONS_NONE */
    buttons?: GtkButtonsTypeNick | Gtk.ButtonsType;
    /**
     * The image for this dialog.
     * @since 2.10
     */
    image?: Gtk.Widget;
    /**
     * The type of the message.
     * @default GTK_MESSAGE_INFO
     */
    'message-type'?: GtkMessageTypeNick | Gtk.MessageType;
    /**
     * The secondary text of the message dialog.
     * @since 2.10
     * @default NULL
     */
    'secondary-text'?: string;
    /**
     * %TRUE if the secondary text of the dialog includes Pango markup.
     * @since 2.10
     * @default FALSE
     */
    'secondary-use-markup'?: boolean;
    /**
     * The primary text of the message dialog.
     * @since 2.10
     */
    text?: string;
    /**
     * %TRUE if the primary text of the dialog includes Pango markup.
     * @since 2.10
     * @default FALSE
     */
    'use-markup'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkMessageDialogConstructOnly = GtkDialogConstructOnly | GtkBuildableConstructOnly | 'buttons';

export interface GtkMiscProps extends GtkWidgetProps, GtkBuildableProps {
    /** @default 0.500000 */
    xalign?: number;
    /** @default 0 */
    xpad?: number;
    /** @default 0.500000 */
    yalign?: number;
    /** @default 0 */
    ypad?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkMiscConstructOnly = GtkWidgetConstructOnly | GtkBuildableConstructOnly;

/** This should not be accessed directly. */
export interface GtkMountOperationProps extends GMountOperationProps {
    parent?: Gtk.Window;
    screen?: Gdk.Screen;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkMountOperationConstructOnly = GMountOperationConstructOnly;

export interface GtkNotebookProps extends GtkContainerProps, GtkBuildableProps {
    /** @default FALSE */
    'enable-popup'?: boolean;
    /**
     * Group for tabs drag and drop.
     * @since 2.12
     * @deprecated since 2.24: Use #GtkNotebook:group-name instead
     */
    group?: never;
    /** @default -1 */
    'group-id'?: number;
    /**
     * Group name for tabs drag and drop.
     * @since 2.24
     * @default NULL
     */
    'group-name'?: string;
    /** @default FALSE */
    homogeneous?: boolean;
    /** @default -1 */
    page?: number;
    /** @default FALSE */
    scrollable?: boolean;
    /** @default TRUE */
    'show-border'?: boolean;
    /** @default TRUE */
    'show-tabs'?: boolean;
    /** @default 2 */
    'tab-border'?: number;
    /** @default 2 */
    'tab-hborder'?: number;
    /** @default GTK_POS_TOP */
    'tab-pos'?: GtkPositionTypeNick | Gtk.PositionType;
    /** @default 2 */
    'tab-vborder'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkNotebookConstructOnly = GtkContainerConstructOnly | GtkBuildableConstructOnly;

export interface GtkObjectProps extends GInitiallyUnownedProps {
    'user-data'?: never;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkObjectConstructOnly = GInitiallyUnownedConstructOnly;

/** #GtkOffscreenWindow is strictly intended to be used for obtaining snapshots of widgets that are not part of a normal widget hierarchy. */
export interface GtkOffscreenWindowProps extends GtkWindowProps, GtkBuildableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkOffscreenWindowConstructOnly = GtkWindowConstructOnly | GtkBuildableConstructOnly;

export interface GtkOptionMenuProps extends GtkButtonProps, GtkActivatableProps, GtkBuildableProps {
    menu?: Gtk.Menu;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkOptionMenuConstructOnly = GtkButtonConstructOnly | GtkActivatableConstructOnly | GtkBuildableConstructOnly;

export interface GtkOrientableProps extends GObjectProps {
    /**
     * The orientation of the orientable.
     * @since 2.16
     * @default GTK_ORIENTATION_HORIZONTAL
     */
    orientation?: GtkOrientationNick | Gtk.Orientation;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkOrientableConstructOnly = GObjectConstructOnly;

export interface GtkPageSetupProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkPageSetupConstructOnly = GObjectConstructOnly;

export interface GtkPanedProps extends GtkContainerProps, GtkBuildableProps, GtkOrientableProps {
    /** @default 0 */
    position?: number;
    /** @default FALSE */
    'position-set'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkPanedConstructOnly = GtkContainerConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

export interface GtkPixmapProps extends GtkMiscProps, GtkBuildableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkPixmapConstructOnly = GtkMiscConstructOnly | GtkBuildableConstructOnly;

/** Together with #GtkSocket, #GtkPlug provides the ability to embed widgets from one process into another process in a fashion that is transparent to the user. */
export interface GtkPlugProps extends GtkWindowProps, GtkBuildableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkPlugConstructOnly = GtkWindowConstructOnly | GtkBuildableConstructOnly;

export interface GtkPreviewProps extends GtkWidgetProps, GtkBuildableProps {
    /** @default FALSE */
    expand?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkPreviewConstructOnly = GtkWidgetConstructOnly | GtkBuildableConstructOnly;

export interface GtkPrintContextProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkPrintContextConstructOnly = GObjectConstructOnly;

export interface GtkPrintOperationProps extends GObjectProps, GtkPrintOperationPreviewProps {
    /**
     * Determines whether the print operation may run asynchronously or not.
     * @since 2.10
     * @default FALSE
     */
    'allow-async'?: boolean;
    /**
     * The current page in the document.
     * @since 2.10
     * @default -1
     */
    'current-page'?: number;
    /**
     * Used as the label of the tab containing custom widgets.
     * @since 2.10
     * @default NULL
     */
    'custom-tab-label'?: string;
    /**
     * The #GtkPageSetup used by default.
     * @since 2.10
     */
    'default-page-setup'?: Gtk.PageSetup;
    /**
     * If %TRUE, page size combo box and orientation combo box are embedded into page setup page.
     * @since 2.18
     * @default FALSE
     */
    'embed-page-setup'?: boolean;
    /**
     * The name of a file to generate instead of showing the print dialog.
     * @since 2.10
     * @default NULL
     */
    'export-filename'?: string;
    /**
     * Determines whether there is a selection in your application.
     * @since 2.18
     * @default FALSE
     */
    'has-selection'?: boolean;
    /**
     * A string used to identify the job (e.g.
     * @since 2.10
     */
    'job-name'?: string;
    /**
     * The number of pages in the document.
     * @since 2.10
     * @default -1
     */
    'n-pages'?: number;
    /**
     * The #GtkPrintSettings used for initializing the dialog.
     * @since 2.10
     */
    'print-settings'?: Gtk.PrintSettings;
    /**
     * Determines whether to show a progress dialog during the print operation.
     * @since 2.10
     * @default FALSE
     */
    'show-progress'?: boolean;
    /**
     * If %TRUE, the print operation will support print of selection.
     * @since 2.18
     * @default FALSE
     */
    'support-selection'?: boolean;
    /**
     * If %TRUE, the print operation will try to continue report on the status of the print job in the printer queues and printer.
     * @since 2.10
     * @default FALSE
     */
    'track-print-status'?: boolean;
    /**
     * The transformation for the cairo context obtained from #GtkPrintContext is set up in such a way that distances are measured in units of @unit.
     * @since 2.10
     * @default GTK_UNIT_PIXEL
     */
    unit?: GtkUnitNick | Gtk.Unit;
    /**
     * If %TRUE, the transformation for the cairo context obtained from #GtkPrintContext puts the origin at the top left corner of the page (which may not be the top left corner of the sheet, depending on p…
     * @since 2.10
     * @default FALSE
     */
    'use-full-page'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkPrintOperationConstructOnly = GObjectConstructOnly | GtkPrintOperationPreviewConstructOnly;

export interface GtkPrintOperationPreviewProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkPrintOperationPreviewConstructOnly = GObjectConstructOnly;

export interface GtkPrintSettingsProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkPrintSettingsConstructOnly = GObjectConstructOnly;

export interface GtkProgressProps extends GtkWidgetProps, GtkBuildableProps {
    /** @default FALSE */
    'activity-mode'?: boolean;
    /** @default FALSE */
    'show-text'?: boolean;
    /** @default 0.500000 */
    'text-xalign'?: number;
    /** @default 0.500000 */
    'text-yalign'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkProgressConstructOnly = GtkWidgetConstructOnly | GtkBuildableConstructOnly;

export interface GtkProgressBarProps extends GtkProgressProps, GtkBuildableProps {
    /** @default 5 */
    'activity-blocks'?: number;
    /** @default 3 */
    'activity-step'?: number;
    adjustment?: Gtk.Adjustment;
    /** @default GTK_PROGRESS_CONTINUOUS */
    'bar-style'?: GtkProgressBarStyleNick | Gtk.ProgressBarStyle;
    /** @default 10 */
    'discrete-blocks'?: number;
    /**
     * The preferred place to ellipsize the string, if the progressbar does not have enough room to display the entire string, specified as a #PangoEllisizeMode.
     * @since 2.6
     * @default PANGO_ELLIPSIZE_NONE
     */
    ellipsize?: PangoEllipsizeModeNick | Pango.EllipsizeMode;
    /** @default 0.000000 */
    fraction?: number;
    /** @default GTK_PROGRESS_LEFT_TO_RIGHT */
    orientation?: GtkProgressBarOrientationNick | Gtk.ProgressBarOrientation;
    /** @default 0.100000 */
    'pulse-step'?: number;
    /** @default NULL */
    text?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkProgressBarConstructOnly = GtkProgressConstructOnly | GtkBuildableConstructOnly;

export interface GtkRadioActionProps extends GtkToggleActionProps, GtkBuildableProps {
    /**
     * The value property of the currently active member of the group to which this action belongs.
     * @since 2.10
     * @default 0
     */
    'current-value'?: number;
    /**
     * Sets a new group for a radio action.
     * @since 2.4
     */
    group?: Gtk.RadioAction;
    /**
     * The value is an arbitrary integer which can be used as a convenient way to determine which action in the group is currently active in an ::activate or ::changed signal handler.
     * @since 2.4
     * @default 0
     */
    value?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkRadioActionConstructOnly = GtkToggleActionConstructOnly | GtkBuildableConstructOnly;

export interface GtkRadioButtonProps extends GtkCheckButtonProps, GtkActivatableProps, GtkBuildableProps {
    group?: Gtk.RadioButton;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkRadioButtonConstructOnly = GtkCheckButtonConstructOnly | GtkActivatableConstructOnly | GtkBuildableConstructOnly;

export interface GtkRadioMenuItemProps extends GtkCheckMenuItemProps, GtkActivatableProps, GtkBuildableProps {
    /**
     * The radio menu item whose group this widget belongs to.
     * @since 2.8
     */
    group?: Gtk.RadioMenuItem;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkRadioMenuItemConstructOnly = GtkCheckMenuItemConstructOnly | GtkActivatableConstructOnly | GtkBuildableConstructOnly;

export interface GtkRadioToolButtonProps extends GtkToggleToolButtonProps, GtkActivatableProps, GtkBuildableProps {
    /**
     * Sets a new group for a radio tool button.
     * @since 2.4
     */
    group?: Gtk.RadioToolButton;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkRadioToolButtonConstructOnly = GtkToggleToolButtonConstructOnly | GtkActivatableConstructOnly | GtkBuildableConstructOnly;

export interface GtkRangeProps extends GtkWidgetProps, GtkBuildableProps, GtkOrientableProps {
    adjustment?: Gtk.Adjustment;
    /**
     * The fill level (e.g.
     * @since 2.12
     * @default 179769313486231570814527423731704356798070567525844996598917476803157260780028538760589558632766878171540458953514382464234321326889464182768467546703537516986049910576551282076245490090389328944075868508455133942304583236903222948165808559332123348274797826204144723168738177180919299881250404026184124858368.000000
     */
    'fill-level'?: number;
    /** @default FALSE */
    inverted?: boolean;
    /** @default GTK_SENSITIVITY_AUTO */
    'lower-stepper-sensitivity'?: GtkSensitivityTypeNick | Gtk.SensitivityType;
    /**
     * The restrict-to-fill-level property controls whether slider movement is restricted to an upper boundary set by the fill level.
     * @since 2.12
     * @default TRUE
     */
    'restrict-to-fill-level'?: boolean;
    /**
     * The number of digits to round the value to when it changes, or -1.
     * @since 2.24
     * @default -1
     */
    'round-digits'?: number;
    /**
     * The show-fill-level property controls whether fill level indicator graphics are displayed on the trough.
     * @since 2.12
     * @default FALSE
     */
    'show-fill-level'?: boolean;
    /** @default GTK_UPDATE_CONTINUOUS */
    'update-policy'?: GtkUpdateTypeNick | Gtk.UpdateType;
    /** @default GTK_SENSITIVITY_AUTO */
    'upper-stepper-sensitivity'?: GtkSensitivityTypeNick | Gtk.SensitivityType;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkRangeConstructOnly = GtkWidgetConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

export interface GtkRcStyleProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkRcStyleConstructOnly = GObjectConstructOnly;

export interface GtkRecentActionProps extends GtkActionProps, GtkBuildableProps, GtkRecentChooserProps {
    /** @default FALSE */
    'show-numbers'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkRecentActionConstructOnly = GtkActionConstructOnly | GtkBuildableConstructOnly | GtkRecentChooserConstructOnly;

export interface GtkRecentChooserProps extends GObjectProps {
    /**
     * The #GtkRecentFilter object to be used when displaying the recently used resources.
     * @since 2.10
     */
    filter?: Gtk.RecentFilter;
    /**
     * The maximum number of recently used resources to be displayed, or -1 to display all items.
     * @since 2.10
     * @default -1
     */
    limit?: number;
    /**
     * Whether this #GtkRecentChooser should display only local (file:) resources.
     * @since 2.10
     * @default TRUE
     */
    'local-only'?: boolean;
    /**
     * The #GtkRecentManager instance used by the #GtkRecentChooser to display the list of recently used resources.
     * @since 2.10
     */
    'recent-manager'?: Gtk.RecentManager;
    /**
     * Allow the user to select multiple resources.
     * @since 2.10
     * @default FALSE
     */
    'select-multiple'?: boolean;
    /**
     * Whether this #GtkRecentChooser should display an icon near the item.
     * @since 2.10
     * @default TRUE
     */
    'show-icons'?: boolean;
    /**
     * Whether this #GtkRecentChooser should display the recently used resources even if not present anymore.
     * @since 2.10
     * @default TRUE
     */
    'show-not-found'?: boolean;
    /** @default FALSE */
    'show-private'?: boolean;
    /**
     * Whether this #GtkRecentChooser should display a tooltip containing the full path of the recently used resources.
     * @since 2.10
     * @default FALSE
     */
    'show-tips'?: boolean;
    /**
     * Sorting order to be used when displaying the recently used resources.
     * @since 2.10
     * @default GTK_RECENT_SORT_NONE
     */
    'sort-type'?: GtkRecentSortTypeNick | Gtk.RecentSortType;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkRecentChooserConstructOnly = GObjectConstructOnly | 'recent-manager';

export interface GtkRecentChooserDialogProps extends GtkDialogProps, GtkBuildableProps, GtkRecentChooserProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkRecentChooserDialogConstructOnly = GtkDialogConstructOnly | GtkBuildableConstructOnly | GtkRecentChooserConstructOnly;

export interface GtkRecentChooserMenuProps extends GtkMenuProps, GtkActivatableProps, GtkBuildableProps, GtkRecentChooserProps {
    /**
     * Whether the first ten items in the menu should be prepended by a number acting as a unique mnemonic.
     * @since 2.10
     * @default FALSE
     */
    'show-numbers'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkRecentChooserMenuConstructOnly = GtkMenuConstructOnly | GtkActivatableConstructOnly | GtkBuildableConstructOnly | GtkRecentChooserConstructOnly;

export interface GtkRecentChooserWidgetProps extends GtkVBoxProps, GtkBuildableProps, GtkOrientableProps, GtkRecentChooserProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkRecentChooserWidgetConstructOnly = GtkVBoxConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly | GtkRecentChooserConstructOnly;

export interface GtkRecentFilterProps extends GtkObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkRecentFilterConstructOnly = GtkObjectConstructOnly;

export interface GtkRecentManagerProps extends GObjectProps {
    /**
     * The full path to the file to be used to store and read the recently used resources list
     * @since 2.10
     * @default NULL
     */
    filename?: string;
    /**
     * The maximum number of items to be returned by the gtk_recent_manager_get_items() function.
     * @since 2.10
     * @default -1
     * @deprecated since 2.22: Setting this property does not have any effect.
     */
    limit?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkRecentManagerConstructOnly = GObjectConstructOnly | 'filename';

export interface GtkRulerProps extends GtkWidgetProps, GtkBuildableProps, GtkOrientableProps {
    /** @default 0.000000 */
    lower?: number;
    /** @default 0.000000 */
    'max-size'?: number;
    /**
     * The metric used for the ruler.
     * @since 2.8
     * @default GTK_PIXELS
     */
    metric?: GtkMetricTypeNick | Gtk.MetricType;
    /** @default 0.000000 */
    position?: number;
    /** @default 0.000000 */
    upper?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkRulerConstructOnly = GtkWidgetConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

export interface GtkScaleProps extends GtkRangeProps, GtkBuildableProps, GtkOrientableProps {
    /** @default 1 */
    digits?: number;
    /** @default TRUE */
    'draw-value'?: boolean;
    /** @default GTK_POS_TOP */
    'value-pos'?: GtkPositionTypeNick | Gtk.PositionType;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkScaleConstructOnly = GtkRangeConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

export interface GtkScaleButtonProps extends GtkButtonProps, GtkActivatableProps, GtkBuildableProps, GtkOrientableProps {
    adjustment?: Gtk.Adjustment;
    /**
     * The names of the icons to be used by the scale button.
     * @since 2.12
     */
    icons?: string[];
    /** @default GTK_ICON_SIZE_SMALL_TOOLBAR */
    size?: GtkIconSizeNick | Gtk.IconSize;
    /** @default 0.000000 */
    value?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkScaleButtonConstructOnly = GtkButtonConstructOnly | GtkActivatableConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

export interface GtkScrollbarProps extends GtkRangeProps, GtkBuildableProps, GtkOrientableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkScrollbarConstructOnly = GtkRangeConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

export interface GtkScrolledWindowProps extends GtkBinProps, GtkBuildableProps {
    hadjustment?: Gtk.Adjustment;
    /** @default GTK_POLICY_ALWAYS */
    'hscrollbar-policy'?: GtkPolicyTypeNick | Gtk.PolicyType;
    /** @default GTK_SHADOW_NONE */
    'shadow-type'?: GtkShadowTypeNick | Gtk.ShadowType;
    vadjustment?: Gtk.Adjustment;
    /** @default GTK_POLICY_ALWAYS */
    'vscrollbar-policy'?: GtkPolicyTypeNick | Gtk.PolicyType;
    /** @default GTK_CORNER_TOP_LEFT */
    'window-placement'?: GtkCornerTypeNick | Gtk.CornerType;
    /**
     * Whether "window-placement" should be used to determine the location of the contents with respect to the scrollbars.
     * @since 2.10
     * @default FALSE
     */
    'window-placement-set'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkScrolledWindowConstructOnly = GtkBinConstructOnly | GtkBuildableConstructOnly;

export interface GtkSeparatorProps extends GtkWidgetProps, GtkBuildableProps, GtkOrientableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSeparatorConstructOnly = GtkWidgetConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

export interface GtkSeparatorMenuItemProps extends GtkMenuItemProps, GtkActivatableProps, GtkBuildableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSeparatorMenuItemConstructOnly = GtkMenuItemConstructOnly | GtkActivatableConstructOnly | GtkBuildableConstructOnly;

export interface GtkSeparatorToolItemProps extends GtkToolItemProps, GtkActivatableProps, GtkBuildableProps {
    /** @default TRUE */
    draw?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSeparatorToolItemConstructOnly = GtkToolItemConstructOnly | GtkActivatableConstructOnly | GtkBuildableConstructOnly;

export interface GtkSettingsProps extends GObjectProps {
    /** @default FALSE */
    'gtk-alternative-button-order'?: boolean;
    /**
     * Controls the direction of the sort indicators in sorted list and tree views.
     * @since 2.12
     * @default FALSE
     */
    'gtk-alternative-sort-arrows'?: boolean;
    /**
     * Whether mnemonics should be automatically shown and hidden when the user presses the mnemonic activator.
     * @since 2.20
     * @default FALSE
     */
    'gtk-auto-mnemonics'?: boolean;
    /** @default TRUE */
    'gtk-button-images'?: boolean;
    /** @default FALSE */
    'gtk-can-change-accels'?: boolean;
    /** @default black:white:gray50:red:purple:blue:light blue:green:yellow:orange:lavender:brown:goldenrod4:dodger blue:pink:light green:gray10:gray30:gray75:gray90 */
    'gtk-color-palette'?: string;
    /**
     * A palette of named colors for use in themes.
     * @since 2.10
     */
    'gtk-color-scheme'?: string;
    /**
     * Whether the cursor should blink.
     * @default TRUE
     */
    'gtk-cursor-blink'?: boolean;
    /** @default 1200 */
    'gtk-cursor-blink-time'?: number;
    /**
     * Time after which the cursor stops blinking, in seconds.
     * @since 2.12
     * @default 2147483647
     */
    'gtk-cursor-blink-timeout'?: number;
    /** @default NULL */
    'gtk-cursor-theme-name'?: string;
    /** @default 0 */
    'gtk-cursor-theme-size'?: number;
    /** @default 8 */
    'gtk-dnd-drag-threshold'?: number;
    /** @default 5 */
    'gtk-double-click-distance'?: number;
    /** @default 250 */
    'gtk-double-click-time'?: number;
    /**
     * Whether menu items should have visible accelerators which can be activated.
     * @since 2.12
     * @default TRUE
     */
    'gtk-enable-accels'?: boolean;
    /** @default TRUE */
    'gtk-enable-animations'?: boolean;
    /**
     * Whether to play any event sounds at all.
     * @since 2.14
     * @default TRUE
     */
    'gtk-enable-event-sounds'?: boolean;
    /**
     * Whether to play event sounds as feedback to user input.
     * @since 2.14
     * @default TRUE
     */
    'gtk-enable-input-feedback-sounds'?: boolean;
    /**
     * Whether labels and menu items should have visible mnemonics which can be activated.
     * @since 2.12
     * @default TRUE
     */
    'gtk-enable-mnemonics'?: boolean;
    /**
     * Whether tooltips should be shown on widgets.
     * @since 2.14
     * @default TRUE
     */
    'gtk-enable-tooltips'?: boolean;
    /**
     * How long to show the last input character in hidden entries.
     * @since 2.10
     * @default 0
     */
    'gtk-entry-password-hint-timeout'?: number;
    /** @default TRUE */
    'gtk-entry-select-on-focus'?: boolean;
    /**
     * When %TRUE, keyboard navigation and other input-related errors will cause a beep.
     * @since 2.12
     * @default TRUE
     */
    'gtk-error-bell'?: boolean;
    /** @default NULL */
    'gtk-fallback-icon-theme'?: string;
    /** @default NULL */
    'gtk-file-chooser-backend'?: string;
    /** @default Sans 10 */
    'gtk-font-name'?: string;
    /** @default 0 */
    'gtk-fontconfig-timestamp'?: number;
    /**
     * A list of icon sizes.
     * @default NULL
     */
    'gtk-icon-sizes'?: string;
    /** @default hicolor */
    'gtk-icon-theme-name'?: string;
    /**
     * Which IM (input method) module should be used by default.
     * @default NULL
     */
    'gtk-im-module'?: string;
    /** @default GTK_IM_PREEDIT_CALLBACK */
    'gtk-im-preedit-style'?: GtkIMPreeditStyleNick | Gtk.IMPreeditStyle;
    /** @default GTK_IM_STATUS_CALLBACK */
    'gtk-im-status-style'?: GtkIMStatusStyleNick | Gtk.IMStatusStyle;
    /** @default NULL */
    'gtk-key-theme-name'?: string;
    /**
     * When %TRUE, keyboard navigation should be able to reach all widgets by using the cursor keys only.
     * @since 2.12
     * @default FALSE
     */
    'gtk-keynav-cursor-only'?: boolean;
    /**
     * When %TRUE, some widgets will wrap around when doing keyboard navigation, such as menus, menubars and notebooks.
     * @since 2.12
     * @default TRUE
     */
    'gtk-keynav-wrap-around'?: boolean;
    /** @default TRUE */
    'gtk-label-select-on-focus'?: boolean;
    /** @default F10 */
    'gtk-menu-bar-accel'?: string;
    /** @default 0 */
    'gtk-menu-bar-popup-delay'?: number;
    /** @default TRUE */
    'gtk-menu-images'?: boolean;
    /** @default 1000 */
    'gtk-menu-popdown-delay'?: number;
    /** @default 225 */
    'gtk-menu-popup-delay'?: number;
    /** @default NULL */
    'gtk-modules'?: string;
    /**
     * Whether a click in a #GtkRange trough should scroll to the click position or scroll by a single page in the respective direction.
     * @since 2.24
     * @default FALSE
     */
    'gtk-primary-button-warps-slider'?: boolean;
    /**
     * A comma-separated list of print backends to use in the print dialog.
     * @since 2.10
     * @default file,cups
     */
    'gtk-print-backends'?: string;
    /**
     * A command to run for displaying the print preview.
     * @since 2.10
     * @default evince --unlink-tempfile --preview --print-settings %s %f
     */
    'gtk-print-preview-command'?: string;
    /**
     * The number of recently used files that should be displayed by default by #GtkRecentChooser implementations and by the #GtkFileChooser.
     * @since 2.12
     * @default 50
     */
    'gtk-recent-files-limit'?: number;
    /**
     * The maximum age, in days, of the items inside the recently used resources list.
     * @since 2.14
     * @default 30
     */
    'gtk-recent-files-max-age'?: number;
    /**
     * Where the contents of scrolled windows are located with respect to the scrollbars, if not overridden by the scrolled window's own placement.
     * @since 2.10
     * @default GTK_CORNER_TOP_LEFT
     */
    'gtk-scrolled-window-placement'?: GtkCornerTypeNick | Gtk.CornerType;
    /** @default TRUE */
    'gtk-show-input-method-menu'?: boolean;
    /** @default TRUE */
    'gtk-show-unicode-menu'?: boolean;
    /**
     * The XDG sound theme to use for event sounds.
     * @since 2.14
     * @default freedesktop
     */
    'gtk-sound-theme-name'?: string;
    /** @default TRUE */
    'gtk-split-cursor'?: boolean;
    /** @default Raleigh */
    'gtk-theme-name'?: string;
    /** @default 500 */
    'gtk-timeout-expand'?: number;
    /** @default 200 */
    'gtk-timeout-initial'?: number;
    /** @default 20 */
    'gtk-timeout-repeat'?: number;
    /** @default GTK_ICON_SIZE_LARGE_TOOLBAR */
    'gtk-toolbar-icon-size'?: GtkIconSizeNick | Gtk.IconSize;
    /** @default GTK_TOOLBAR_BOTH */
    'gtk-toolbar-style'?: GtkToolbarStyleNick | Gtk.ToolbarStyle;
    /**
     * Amount of time, in milliseconds, after which the browse mode will be disabled.
     * @since 2.12
     * @default 500
     */
    'gtk-tooltip-browse-mode-timeout'?: number;
    /**
     * Controls the time after which tooltips will appear when browse mode is enabled, in milliseconds.
     * @since 2.12
     * @default 60
     */
    'gtk-tooltip-browse-timeout'?: number;
    /**
     * Time, in milliseconds, after which a tooltip could appear if the cursor is hovering on top of a widget.
     * @since 2.12
     * @default 500
     */
    'gtk-tooltip-timeout'?: number;
    /**
     * When %TRUE, there are no motion notify events delivered on this screen, and widgets can't use the pointer hovering them for any essential functionality.
     * @since 2.10
     * @default FALSE
     */
    'gtk-touchscreen-mode'?: boolean;
    /** @default -1 */
    'gtk-xft-antialias'?: number;
    /** @default -1 */
    'gtk-xft-dpi'?: number;
    /** @default -1 */
    'gtk-xft-hinting'?: number;
    /** @default NULL */
    'gtk-xft-hintstyle'?: string;
    /** @default NULL */
    'gtk-xft-rgba'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSettingsConstructOnly = GObjectConstructOnly;

export interface GtkSizeGroupProps extends GObjectProps, GtkBuildableProps {
    /**
     * If %TRUE, unmapped widgets are ignored when determining the size of the group.
     * @since 2.8
     * @default FALSE
     */
    'ignore-hidden'?: boolean;
    /** @default GTK_SIZE_GROUP_HORIZONTAL */
    mode?: GtkSizeGroupModeNick | Gtk.SizeGroupMode;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSizeGroupConstructOnly = GObjectConstructOnly | GtkBuildableConstructOnly;

/** Together with #GtkPlug, #GtkSocket provides the ability to embed widgets from one process into another process in a fashion that is transparent to the user. */
export interface GtkSocketProps extends GtkContainerProps, GtkBuildableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSocketConstructOnly = GtkContainerConstructOnly | GtkBuildableConstructOnly;

export interface GtkSpinButtonProps extends GtkEntryProps, GtkBuildableProps, GtkCellEditableProps, GtkEditableProps {
    adjustment?: Gtk.Adjustment;
    /** @default 0.000000 */
    'climb-rate'?: number;
    /** @default 0 */
    digits?: number;
    /** @default FALSE */
    numeric?: boolean;
    /** @default FALSE */
    'snap-to-ticks'?: boolean;
    /** @default GTK_UPDATE_ALWAYS */
    'update-policy'?: GtkSpinButtonUpdatePolicyNick | Gtk.SpinButtonUpdatePolicy;
    /** @default 0.000000 */
    value?: number;
    /** @default FALSE */
    wrap?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSpinButtonConstructOnly = GtkEntryConstructOnly | GtkBuildableConstructOnly | GtkCellEditableConstructOnly | GtkEditableConstructOnly;

/** A GtkSpinner widget displays an icon-size spinning animation. */
export interface GtkSpinnerProps extends GtkDrawingAreaProps, GtkBuildableProps {
    /** @default FALSE */
    active?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSpinnerConstructOnly = GtkDrawingAreaConstructOnly | GtkBuildableConstructOnly;

export interface GtkStatusIconProps extends GObjectProps {
    /**
     * Whether or not the status icon is blinking.
     * @default FALSE
     * @deprecated since 2.22: This property will be removed in GTK+ 3
     */
    blinking?: boolean;
    /** @default NULL */
    file?: string;
    /**
     * The #GIcon displayed in the #GtkStatusIcon.
     * @since 2.14
     */
    gicon?: Gio.Icon;
    /**
     * Enables or disables the emission of #GtkStatusIcon::query-tooltip on @status_icon.
     * @since 2.16
     * @default FALSE
     */
    'has-tooltip'?: boolean;
    /** @default NULL */
    'icon-name'?: string;
    pixbuf?: GdkPixbuf.Pixbuf;
    screen?: Gdk.Screen;
    /** @default NULL */
    stock?: string;
    /**
     * The title of this tray icon.
     * @since 2.18
     * @default NULL
     */
    title?: string;
    /**
     * Sets the text of tooltip to be the given string, which is marked up with the <link linkend="PangoMarkupFormat">Pango text markup language</link>.
     * @since 2.16
     * @default NULL
     */
    'tooltip-markup'?: string;
    /**
     * Sets the text of tooltip to be the given string.
     * @since 2.16
     * @default NULL
     */
    'tooltip-text'?: string;
    /** @default TRUE */
    visible?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkStatusIconConstructOnly = GObjectConstructOnly;

export interface GtkStatusbarProps extends GtkHBoxProps, GtkBuildableProps, GtkOrientableProps {
    /**
     * Whether the statusbar has a grip for resizing the toplevel window.
     * @since 2.4
     * @default TRUE
     */
    'has-resize-grip'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkStatusbarConstructOnly = GtkHBoxConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

export interface GtkStyleProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkStyleConstructOnly = GObjectConstructOnly;

export interface GtkTableProps extends GtkContainerProps, GtkBuildableProps {
    /** @default 0 */
    'column-spacing'?: number;
    /** @default FALSE */
    homogeneous?: boolean;
    /** @default 1 */
    'n-columns'?: number;
    /** @default 1 */
    'n-rows'?: number;
    /** @default 0 */
    'row-spacing'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkTableConstructOnly = GtkContainerConstructOnly | GtkBuildableConstructOnly;

export interface GtkTearoffMenuItemProps extends GtkMenuItemProps, GtkActivatableProps, GtkBuildableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkTearoffMenuItemConstructOnly = GtkMenuItemConstructOnly | GtkActivatableConstructOnly | GtkBuildableConstructOnly;

export interface GtkTextBufferProps extends GObjectProps {
    'tag-table'?: Gtk.TextTagTable;
    /**
     * The text content of the buffer.
     * @since 2.8
     */
    text?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkTextBufferConstructOnly = GObjectConstructOnly | 'tag-table';

export interface GtkTextChildAnchorProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkTextChildAnchorConstructOnly = GObjectConstructOnly;

export interface GtkTextLayoutProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkTextLayoutConstructOnly = GObjectConstructOnly;

export interface GtkTextMarkProps extends GObjectProps {
    /** @default FALSE */
    'left-gravity'?: boolean;
    /** @default NULL */
    name?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkTextMarkConstructOnly = GObjectConstructOnly | 'left-gravity' | 'name';

export interface GtkTextTagProps extends GObjectProps {
    /**
     * Whether the margins accumulate or override each other.
     * @since 2.12
     * @default FALSE
     */
    'accumulative-margin'?: boolean;
    /** @default NULL */
    background?: string;
    /** @default FALSE */
    'background-full-height'?: boolean;
    /** @default FALSE */
    'background-full-height-set'?: boolean;
    'background-gdk'?: Gdk.Color;
    /** @default FALSE */
    'background-set'?: boolean;
    'background-stipple'?: Gdk.Pixmap;
    /** @default FALSE */
    'background-stipple-set'?: boolean;
    /** @default GTK_TEXT_DIR_NONE */
    direction?: GtkTextDirectionNick | Gtk.TextDirection;
    /** @default TRUE */
    editable?: boolean;
    /** @default FALSE */
    'editable-set'?: boolean;
    /** @default NULL */
    family?: string;
    /** @default FALSE */
    'family-set'?: boolean;
    /**
     * Font description as string, e.g.
     * @default NULL
     */
    font?: string;
    'font-desc'?: Pango.FontDescription;
    /** @default NULL */
    foreground?: string;
    'foreground-gdk'?: Gdk.Color;
    /** @default FALSE */
    'foreground-set'?: boolean;
    'foreground-stipple'?: Gdk.Pixmap;
    /** @default FALSE */
    'foreground-stipple-set'?: boolean;
    /** @default 0 */
    indent?: number;
    /** @default FALSE */
    'indent-set'?: boolean;
    /**
     * Whether this text is hidden.
     * @since 2.8
     * @default FALSE
     */
    invisible?: boolean;
    /** @default FALSE */
    'invisible-set'?: boolean;
    /** @default GTK_JUSTIFY_LEFT */
    justification?: GtkJustificationNick | Gtk.Justification;
    /** @default FALSE */
    'justification-set'?: boolean;
    /**
     * The language this text is in, as an ISO code.
     * @default NULL
     */
    language?: string;
    /** @default FALSE */
    'language-set'?: boolean;
    /** @default 0 */
    'left-margin'?: number;
    /** @default FALSE */
    'left-margin-set'?: boolean;
    /** @default NULL */
    name?: string;
    /**
     * The paragraph background color as a string.
     * @since 2.8
     * @default NULL
     */
    'paragraph-background'?: string;
    /**
     * The paragraph background color as a as a (possibly unallocated) #GdkColor.
     * @since 2.8
     */
    'paragraph-background-gdk'?: Gdk.Color;
    /** @default FALSE */
    'paragraph-background-set'?: boolean;
    /** @default 0 */
    'pixels-above-lines'?: number;
    /** @default FALSE */
    'pixels-above-lines-set'?: boolean;
    /** @default 0 */
    'pixels-below-lines'?: number;
    /** @default FALSE */
    'pixels-below-lines-set'?: boolean;
    /** @default 0 */
    'pixels-inside-wrap'?: number;
    /** @default FALSE */
    'pixels-inside-wrap-set'?: boolean;
    /** @default 0 */
    'right-margin'?: number;
    /** @default FALSE */
    'right-margin-set'?: boolean;
    /** @default 0 */
    rise?: number;
    /** @default FALSE */
    'rise-set'?: boolean;
    /** @default 1.000000 */
    scale?: number;
    /** @default FALSE */
    'scale-set'?: boolean;
    /** @default 0 */
    size?: number;
    /** @default 0.000000 */
    'size-points'?: number;
    /** @default FALSE */
    'size-set'?: boolean;
    /** @default PANGO_STRETCH_NORMAL */
    stretch?: PangoStretchNick | Pango.Stretch;
    /** @default FALSE */
    'stretch-set'?: boolean;
    /** @default FALSE */
    strikethrough?: boolean;
    /** @default FALSE */
    'strikethrough-set'?: boolean;
    /** @default PANGO_STYLE_NORMAL */
    style?: PangoStyleNick | Pango.Style;
    /** @default FALSE */
    'style-set'?: boolean;
    tabs?: Pango.TabArray;
    /** @default FALSE */
    'tabs-set'?: boolean;
    /** @default PANGO_UNDERLINE_NONE */
    underline?: PangoUnderlineNick | Pango.Underline;
    /** @default FALSE */
    'underline-set'?: boolean;
    /** @default PANGO_VARIANT_NORMAL */
    variant?: PangoVariantNick | Pango.Variant;
    /** @default FALSE */
    'variant-set'?: boolean;
    /** @default 400 */
    weight?: number;
    /** @default FALSE */
    'weight-set'?: boolean;
    /** @default GTK_WRAP_NONE */
    'wrap-mode'?: GtkWrapModeNick | Gtk.WrapMode;
    /** @default FALSE */
    'wrap-mode-set'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkTextTagConstructOnly = GObjectConstructOnly | 'name';

/** You may wish to begin by reading the <link linkend="TextWidget">text widget conceptual overview</link> which gives an overview of all the objects and data types related to the text widget and how the… */
export interface GtkTextTagTableProps extends GObjectProps, GtkBuildableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkTextTagTableConstructOnly = GObjectConstructOnly | GtkBuildableConstructOnly;

export interface GtkTextViewProps extends GtkContainerProps, GtkBuildableProps {
    /** @default TRUE */
    'accepts-tab'?: boolean;
    buffer?: Gtk.TextBuffer;
    /** @default TRUE */
    'cursor-visible'?: boolean;
    /** @default TRUE */
    editable?: boolean;
    /**
     * Which IM (input method) module should be used for this entry.
     * @since 2.16
     * @default NULL
     */
    'im-module'?: string;
    /** @default 0 */
    indent?: number;
    /** @default GTK_JUSTIFY_LEFT */
    justification?: GtkJustificationNick | Gtk.Justification;
    /** @default 0 */
    'left-margin'?: number;
    /** @default FALSE */
    overwrite?: boolean;
    /** @default 0 */
    'pixels-above-lines'?: number;
    /** @default 0 */
    'pixels-below-lines'?: number;
    /** @default 0 */
    'pixels-inside-wrap'?: number;
    /** @default 0 */
    'right-margin'?: number;
    tabs?: Pango.TabArray;
    /** @default GTK_WRAP_NONE */
    'wrap-mode'?: GtkWrapModeNick | Gtk.WrapMode;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkTextViewConstructOnly = GtkContainerConstructOnly | GtkBuildableConstructOnly;

export interface GtkTipsQueryProps extends GtkLabelProps, GtkBuildableProps {
    caller?: Gtk.Widget;
    /** @default FALSE */
    'emit-always'?: boolean;
    /** @default NULL */
    'label-inactive'?: string;
    /** @default NULL */
    'label-no-tip'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkTipsQueryConstructOnly = GtkLabelConstructOnly | GtkBuildableConstructOnly;

export interface GtkToggleActionProps extends GtkActionProps, GtkBuildableProps {
    /**
     * If the toggle action should be active in or not.
     * @since 2.10
     * @default FALSE
     */
    active?: boolean;
    /**
     * Whether the proxies for this action look like radio action proxies.
     * @default FALSE
     */
    'draw-as-radio'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkToggleActionConstructOnly = GtkActionConstructOnly | GtkBuildableConstructOnly;

export interface GtkToggleButtonProps extends GtkButtonProps, GtkActivatableProps, GtkBuildableProps {
    /** @default FALSE */
    active?: boolean;
    /** @default FALSE */
    'draw-indicator'?: boolean;
    /** @default FALSE */
    inconsistent?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkToggleButtonConstructOnly = GtkButtonConstructOnly | GtkActivatableConstructOnly | GtkBuildableConstructOnly;

export interface GtkToggleToolButtonProps extends GtkToolButtonProps, GtkActivatableProps, GtkBuildableProps {
    /**
     * If the toggle tool button should be pressed in or not.
     * @since 2.8
     * @default FALSE
     */
    active?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkToggleToolButtonConstructOnly = GtkToolButtonConstructOnly | GtkActivatableConstructOnly | GtkBuildableConstructOnly;

export interface GtkToolButtonProps extends GtkToolItemProps, GtkActivatableProps, GtkBuildableProps {
    /**
     * The name of the themed icon displayed on the item.
     * @since 2.8
     * @default NULL
     */
    'icon-name'?: string;
    'icon-widget'?: Gtk.Widget;
    /** @default NULL */
    label?: string;
    'label-widget'?: Gtk.Widget;
    /** @default NULL */
    'stock-id'?: string;
    /** @default FALSE */
    'use-underline'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkToolButtonConstructOnly = GtkToolItemConstructOnly | GtkActivatableConstructOnly | GtkBuildableConstructOnly;

/** #GtkToolItem<!-- -->s are widgets that can appear on a toolbar. */
export interface GtkToolItemProps extends GtkBinProps, GtkActivatableProps, GtkBuildableProps {
    /** @default FALSE */
    'is-important'?: boolean;
    /** @default TRUE */
    'visible-horizontal'?: boolean;
    /** @default TRUE */
    'visible-vertical'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkToolItemConstructOnly = GtkBinConstructOnly | GtkActivatableConstructOnly | GtkBuildableConstructOnly;

/** A #GtkToolItemGroup is used together with #GtkToolPalette to add #GtkToolItem<!-- -->s to a palette like container with different categories and drag and drop support. */
export interface GtkToolItemGroupProps extends GtkContainerProps, GtkBuildableProps, GtkToolShellProps {
    /** @default FALSE */
    collapsed?: boolean;
    /** @default PANGO_ELLIPSIZE_NONE */
    ellipsize?: PangoEllipsizeModeNick | Pango.EllipsizeMode;
    /** @default GTK_RELIEF_NORMAL */
    'header-relief'?: GtkReliefStyleNick | Gtk.ReliefStyle;
    label?: string;
    'label-widget'?: Gtk.Widget;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkToolItemGroupConstructOnly = GtkContainerConstructOnly | GtkBuildableConstructOnly | GtkToolShellConstructOnly;

/** A #GtkToolPalette allows you to add #GtkToolItem<!-- -->s to a palette-like container with different categories and drag and drop support. */
export interface GtkToolPaletteProps extends GtkContainerProps, GtkBuildableProps, GtkOrientableProps {
    /**
     * The size of the icons in a tool palette is normally determined by the #GtkSettings:toolbar-icon-size setting.
     * @since 2.20
     * @default GTK_ICON_SIZE_SMALL_TOOLBAR
     */
    'icon-size'?: GtkIconSizeNick | Gtk.IconSize;
    /**
     * Is %TRUE if the #GtkToolPalette:icon-size property has been set.
     * @since 2.20
     * @default FALSE
     */
    'icon-size-set'?: boolean;
    /**
     * The style of items in the tool palette.
     * @since 2.20
     * @default GTK_TOOLBAR_ICONS
     */
    'toolbar-style'?: GtkToolbarStyleNick | Gtk.ToolbarStyle;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkToolPaletteConstructOnly = GtkContainerConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

/** The #GtkToolShell interface allows container widgets to provide additional information when embedding #GtkToolItem widgets. */
export interface GtkToolShellProps extends GtkWidgetProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkToolShellConstructOnly = GtkWidgetConstructOnly;

export interface GtkToolbarProps extends GtkContainerProps, GtkBuildableProps, GtkOrientableProps, GtkToolShellProps {
    /**
     * The size of the icons in a toolbar is normally determined by the toolbar-icon-size setting.
     * @since 2.10
     * @default 3
     */
    'icon-size'?: number;
    /**
     * Is %TRUE if the icon-size property has been set.
     * @since 2.10
     * @default FALSE
     */
    'icon-size-set'?: boolean;
    /** @default TRUE */
    'show-arrow'?: boolean;
    /** @default GTK_TOOLBAR_BOTH */
    'toolbar-style'?: GtkToolbarStyleNick | Gtk.ToolbarStyle;
    /**
     * If the tooltips of the toolbar should be active or not.
     * @since 2.8
     * @default TRUE
     */
    tooltips?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkToolbarConstructOnly = GtkContainerConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly | GtkToolShellConstructOnly;

export interface GtkTooltipProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkTooltipConstructOnly = GObjectConstructOnly;

export interface GtkTooltipsProps extends GtkObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkTooltipsConstructOnly = GtkObjectConstructOnly;

export interface GtkTreeDragDestProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkTreeDragDestConstructOnly = GObjectConstructOnly;

export interface GtkTreeDragSourceProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkTreeDragSourceConstructOnly = GObjectConstructOnly;

export interface GtkTreeModelProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkTreeModelConstructOnly = GObjectConstructOnly;

export interface GtkTreeModelFilterProps extends GObjectProps, GtkTreeDragSourceProps, GtkTreeModelProps {
    'child-model'?: Gtk.TreeModel;
    'virtual-root'?: Gtk.TreePath;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkTreeModelFilterConstructOnly = GObjectConstructOnly | GtkTreeDragSourceConstructOnly | GtkTreeModelConstructOnly | 'child-model' | 'virtual-root';

export interface GtkTreeModelSortProps extends GObjectProps, GtkTreeDragSourceProps, GtkTreeModelProps, GtkTreeSortableProps {
    model?: Gtk.TreeModel;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkTreeModelSortConstructOnly = GObjectConstructOnly | GtkTreeDragSourceConstructOnly | GtkTreeModelConstructOnly | GtkTreeSortableConstructOnly | 'model';

export interface GtkTreeSelectionProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkTreeSelectionConstructOnly = GObjectConstructOnly;

export interface GtkTreeSortableProps extends GtkTreeModelProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkTreeSortableConstructOnly = GtkTreeModelConstructOnly;

export interface GtkTreeStoreProps extends GObjectProps, GtkBuildableProps, GtkTreeDragDestProps, GtkTreeDragSourceProps, GtkTreeModelProps, GtkTreeSortableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkTreeStoreConstructOnly = GObjectConstructOnly | GtkBuildableConstructOnly | GtkTreeDragDestConstructOnly | GtkTreeDragSourceConstructOnly | GtkTreeModelConstructOnly | GtkTreeSortableConstructOnly;

export interface GtkTreeViewProps extends GtkContainerProps, GtkBuildableProps {
    /** @default GTK_TREE_VIEW_GRID_LINES_NONE */
    'enable-grid-lines'?: GtkTreeViewGridLinesNick | Gtk.TreeViewGridLines;
    /** @default TRUE */
    'enable-search'?: boolean;
    /** @default FALSE */
    'enable-tree-lines'?: boolean;
    'expander-column'?: Gtk.TreeViewColumn;
    /**
     * Setting the ::fixed-height-mode property to %TRUE speeds up #GtkTreeView by assuming that all rows have the same height.
     * @since 2.4
     * @default FALSE
     */
    'fixed-height-mode'?: boolean;
    hadjustment?: Gtk.Adjustment;
    /** @default TRUE */
    'headers-clickable'?: boolean;
    /** @default TRUE */
    'headers-visible'?: boolean;
    /**
     * Enables of disables the hover expansion mode of @tree_view.
     * @since 2.6
     * @default FALSE
     */
    'hover-expand'?: boolean;
    /**
     * Enables of disables the hover selection mode of @tree_view.
     * @since 2.6
     * @default FALSE
     */
    'hover-selection'?: boolean;
    /**
     * Extra indentation for each level.
     * @since 2.12
     * @default 0
     */
    'level-indentation'?: number;
    model?: Gtk.TreeModel;
    /** @default FALSE */
    reorderable?: boolean;
    /** @default FALSE */
    'rubber-banding'?: boolean;
    /** @default FALSE */
    'rules-hint'?: boolean;
    /** @default -1 */
    'search-column'?: number;
    /**
     * %TRUE if the view has expanders.
     * @since 2.12
     * @default TRUE
     */
    'show-expanders'?: boolean;
    /** @default -1 */
    'tooltip-column'?: number;
    vadjustment?: Gtk.Adjustment;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkTreeViewConstructOnly = GtkContainerConstructOnly | GtkBuildableConstructOnly;

export interface GtkTreeViewColumnProps extends GtkObjectProps, GtkBuildableProps, GtkCellLayoutProps {
    /** @default 0.000000 */
    alignment?: number;
    /** @default FALSE */
    clickable?: boolean;
    /** @default FALSE */
    expand?: boolean;
    /** @default 1 */
    'fixed-width'?: number;
    /** @default -1 */
    'max-width'?: number;
    /** @default -1 */
    'min-width'?: number;
    /** @default FALSE */
    reorderable?: boolean;
    /** @default FALSE */
    resizable?: boolean;
    /** @default GTK_TREE_VIEW_COLUMN_GROW_ONLY */
    sizing?: GtkTreeViewColumnSizingNick | Gtk.TreeViewColumnSizing;
    /**
     * Logical sort column ID this column sorts on when selected for sorting.
     * @since 2.18
     * @default -1
     */
    'sort-column-id'?: number;
    /** @default FALSE */
    'sort-indicator'?: boolean;
    /** @default GTK_SORT_ASCENDING */
    'sort-order'?: GtkSortTypeNick | Gtk.SortType;
    /** @default 0 */
    spacing?: number;
    title?: string;
    /** @default TRUE */
    visible?: boolean;
    widget?: Gtk.Widget;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkTreeViewColumnConstructOnly = GtkObjectConstructOnly | GtkBuildableConstructOnly | GtkCellLayoutConstructOnly;

export interface GtkUIManagerProps extends GObjectProps, GtkBuildableProps {
    /**
     * The "add-tearoffs" property controls whether generated menus have tearoff menu items.
     * @since 2.4
     * @default FALSE
     */
    'add-tearoffs'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkUIManagerConstructOnly = GObjectConstructOnly | GtkBuildableConstructOnly;

/** A #GtkVBox is a container that organizes child widgets into a single column. */
export interface GtkVBoxProps extends GtkBoxProps, GtkBuildableProps, GtkOrientableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkVBoxConstructOnly = GtkBoxConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

export interface GtkVButtonBoxProps extends GtkButtonBoxProps, GtkBuildableProps, GtkOrientableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkVButtonBoxConstructOnly = GtkButtonBoxConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

/** The VPaned widget is a container widget with two children arranged vertically. */
export interface GtkVPanedProps extends GtkPanedProps, GtkBuildableProps, GtkOrientableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkVPanedConstructOnly = GtkPanedConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

/** <note> This widget is considered too specialized/little-used for GTK+, and will be removed in GTK 3. */
export interface GtkVRulerProps extends GtkRulerProps, GtkBuildableProps, GtkOrientableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkVRulerConstructOnly = GtkRulerConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

/** The #GtkVScale widget is used to allow the user to select a value using a vertical slider. */
export interface GtkVScaleProps extends GtkScaleProps, GtkBuildableProps, GtkOrientableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkVScaleConstructOnly = GtkScaleConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

/** The #GtkVScrollbar widget is a widget arranged vertically creating a scrollbar. */
export interface GtkVScrollbarProps extends GtkScrollbarProps, GtkBuildableProps, GtkOrientableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkVScrollbarConstructOnly = GtkScrollbarConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

/** The #GtkVSeparator widget is a vertical separator, used to group the widgets within a window. */
export interface GtkVSeparatorProps extends GtkSeparatorProps, GtkBuildableProps, GtkOrientableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkVSeparatorConstructOnly = GtkSeparatorConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

/** The #GtkViewport widget acts as an adaptor class, implementing scrollability for child widgets that lack their own scrolling capabilities. */
export interface GtkViewportProps extends GtkBinProps, GtkBuildableProps {
    hadjustment?: Gtk.Adjustment;
    /** @default GTK_SHADOW_IN */
    'shadow-type'?: GtkShadowTypeNick | Gtk.ShadowType;
    vadjustment?: Gtk.Adjustment;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkViewportConstructOnly = GtkBinConstructOnly | GtkBuildableConstructOnly;

/** #GtkVolumeButton is a subclass of #GtkScaleButton that has been tailored for use as a volume control widget with suitable icons, tooltips and accessible labels. */
export interface GtkVolumeButtonProps extends GtkScaleButtonProps, GtkActivatableProps, GtkBuildableProps, GtkOrientableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkVolumeButtonConstructOnly = GtkScaleButtonConstructOnly | GtkActivatableConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

/** GtkWidget is the base class all widgets in GTK+ derive from. */
export interface GtkWidgetProps extends GtkObjectProps, GtkBuildableProps {
    /** @default FALSE */
    'app-paintable'?: boolean;
    /** @default FALSE */
    'can-default'?: boolean;
    /** @default FALSE */
    'can-focus'?: boolean;
    /**
     * Whether or not the widget is double buffered.
     * @since 2.18
     * @default TRUE
     */
    'double-buffered'?: boolean;
    /** @default GDK_STRUCTURE_MASK */
    events?: number;
    /** @default GDK_EXTENSION_EVENTS_NONE */
    'extension-events'?: GdkExtensionModeNick | Gdk.ExtensionMode;
    /** @default FALSE */
    'has-default'?: boolean;
    /** @default FALSE */
    'has-focus'?: boolean;
    /**
     * Enables or disables the emission of #GtkWidget::query-tooltip on @widget.
     * @since 2.12
     * @default FALSE
     */
    'has-tooltip'?: boolean;
    /** @default -1 */
    'height-request'?: number;
    /** @default FALSE */
    'is-focus'?: boolean;
    /** @default NULL */
    name?: string;
    /** @default FALSE */
    'no-show-all'?: boolean;
    parent?: Gtk.Container;
    /** @default FALSE */
    'receives-default'?: boolean;
    /** @default TRUE */
    sensitive?: boolean;
    style?: Gtk.Style;
    /**
     * Sets the text of tooltip to be the given string, which is marked up with the <link linkend="PangoMarkupFormat">Pango text markup language</link>.
     * @since 2.12
     * @default NULL
     */
    'tooltip-markup'?: string;
    /**
     * Sets the text of tooltip to be the given string.
     * @since 2.12
     * @default NULL
     */
    'tooltip-text'?: string;
    /** @default FALSE */
    visible?: boolean;
    /** @default -1 */
    'width-request'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkWidgetConstructOnly = GtkObjectConstructOnly | GtkBuildableConstructOnly;

export interface GtkWindowProps extends GtkBinProps, GtkBuildableProps {
    /**
     * Whether the window should receive the input focus.
     * @since 2.4
     * @default TRUE
     */
    'accept-focus'?: boolean;
    /**
     * If %TRUE, users can expand the window beyond its minimum size.
     * @default TRUE
     * @deprecated since 2.22: Use GtkWindow:resizable property instead.
     */
    'allow-grow'?: boolean;
    /**
     * If %TRUE, the window has no mimimum size.
     * @default FALSE
     * @deprecated since 2.22: Use GtkWindow:resizable property instead.
     */
    'allow-shrink'?: boolean;
    /**
     * Whether the window should be decorated by the window manager.
     * @since 2.4
     * @default TRUE
     */
    decorated?: boolean;
    /** @default -1 */
    'default-height'?: number;
    /** @default -1 */
    'default-width'?: number;
    /**
     * Whether the window frame should have a close button.
     * @since 2.10
     * @default TRUE
     */
    deletable?: boolean;
    /** @default FALSE */
    'destroy-with-parent'?: boolean;
    /**
     * Whether the window should receive the input focus when mapped.
     * @since 2.6
     * @default TRUE
     */
    'focus-on-map'?: boolean;
    /**
     * The window gravity of the window.
     * @since 2.4
     * @default GDK_GRAVITY_NORTH_WEST
     */
    gravity?: GdkGravityNick | Gdk.Gravity;
    icon?: GdkPixbuf.Pixbuf;
    /**
     * The :icon-name property specifies the name of the themed icon to use as the window icon.
     * @since 2.6
     * @default NULL
     */
    'icon-name'?: string;
    /** @default TRUE */
    'mnemonics-visible'?: boolean;
    /** @default FALSE */
    modal?: boolean;
    /**
     * The requested opacity of the window.
     * @since 2.12
     * @default 1.000000
     */
    opacity?: number;
    /** @default TRUE */
    resizable?: boolean;
    /** @default NULL */
    role?: string;
    screen?: Gdk.Screen;
    /** @default FALSE */
    'skip-pager-hint'?: boolean;
    /** @default FALSE */
    'skip-taskbar-hint'?: boolean;
    /**
     * The :startup-id is a write-only property for setting window's startup notification identifier.
     * @since 2.12
     * @default NULL
     */
    'startup-id'?: string;
    /** @default NULL */
    title?: string;
    /**
     * The transient parent of the window.
     * @since 2.10
     */
    'transient-for'?: Gtk.Window;
    /** @default GTK_WINDOW_TOPLEVEL */
    type?: GtkWindowTypeNick | Gtk.WindowType;
    /** @default GDK_WINDOW_TYPE_HINT_NORMAL */
    'type-hint'?: GdkWindowTypeHintNick | Gdk.WindowTypeHint;
    /** @default FALSE */
    'urgency-hint'?: boolean;
    /** @default GTK_WIN_POS_NONE */
    'window-position'?: GtkWindowPositionNick | Gtk.WindowPosition;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkWindowConstructOnly = GtkBinConstructOnly | GtkBuildableConstructOnly | 'type';

export interface GtkWindowGroupProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkWindowGroupConstructOnly = GObjectConstructOnly;

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
    GtkAboutDialog: {
        class: Gtk.AboutDialog;
        props: GtkAboutDialogProps;
        signals: Gtk.AboutDialog.SignalSignatures;
        constructOnly: GtkAboutDialogConstructOnly;
        slotCandidates: {};
    };
    GtkAccelLabel: {
        class: Gtk.AccelLabel;
        props: GtkAccelLabelProps;
        signals: Gtk.AccelLabel.SignalSignatures;
        constructOnly: GtkAccelLabelConstructOnly;
        slotCandidates: {
        'accel': 'set_accel_widget';
        };
    };
    GtkAlignment: {
        class: Gtk.Alignment;
        props: GtkAlignmentProps;
        signals: Gtk.Alignment.SignalSignatures;
        constructOnly: GtkAlignmentConstructOnly;
        slotCandidates: {};
    };
    GtkArrow: {
        class: Gtk.Arrow;
        props: GtkArrowProps;
        signals: Gtk.Arrow.SignalSignatures;
        constructOnly: GtkArrowConstructOnly;
        slotCandidates: {};
    };
    GtkAspectFrame: {
        class: Gtk.AspectFrame;
        props: GtkAspectFrameProps;
        signals: Gtk.AspectFrame.SignalSignatures;
        constructOnly: GtkAspectFrameConstructOnly;
        slotCandidates: {};
    };
    GtkAssistant: {
        class: Gtk.Assistant;
        props: GtkAssistantProps;
        signals: Gtk.Assistant.SignalSignatures;
        constructOnly: GtkAssistantConstructOnly;
        slotCandidates: {
        'action-widget': 'add_action_widget';
        };
    };
    GtkButton: {
        class: Gtk.Button;
        props: GtkButtonProps;
        signals: Gtk.Button.SignalSignatures;
        constructOnly: GtkButtonConstructOnly;
        slotCandidates: {
        'image': 'set_image';
        };
    };
    GtkCList: {
        class: Gtk.CList;
        props: GtkCListProps;
        signals: Gtk.CList.SignalSignatures;
        constructOnly: GtkCListConstructOnly;
        slotCandidates: {};
    };
    GtkCTree: {
        class: Gtk.CTree;
        props: GtkCTreeProps;
        signals: Gtk.CTree.SignalSignatures;
        constructOnly: GtkCTreeConstructOnly;
        slotCandidates: {};
    };
    GtkCalendar: {
        class: Gtk.Calendar;
        props: GtkCalendarProps;
        signals: Gtk.Calendar.SignalSignatures;
        constructOnly: GtkCalendarConstructOnly;
        slotCandidates: {};
    };
    GtkCellView: {
        class: Gtk.CellView;
        props: GtkCellViewProps;
        signals: Gtk.CellView.SignalSignatures;
        constructOnly: GtkCellViewConstructOnly;
        slotCandidates: {};
    };
    GtkCheckButton: {
        class: Gtk.CheckButton;
        props: GtkCheckButtonProps;
        signals: Gtk.CheckButton.SignalSignatures;
        constructOnly: GtkCheckButtonConstructOnly;
        slotCandidates: {};
    };
    GtkCheckMenuItem: {
        class: Gtk.CheckMenuItem;
        props: GtkCheckMenuItemProps;
        signals: Gtk.CheckMenuItem.SignalSignatures;
        constructOnly: GtkCheckMenuItemConstructOnly;
        slotCandidates: {};
    };
    GtkColorButton: {
        class: Gtk.ColorButton;
        props: GtkColorButtonProps;
        signals: Gtk.ColorButton.SignalSignatures;
        constructOnly: GtkColorButtonConstructOnly;
        slotCandidates: {};
    };
    GtkColorSelection: {
        class: Gtk.ColorSelection;
        props: GtkColorSelectionProps;
        signals: Gtk.ColorSelection.SignalSignatures;
        constructOnly: GtkColorSelectionConstructOnly;
        slotCandidates: {};
    };
    GtkColorSelectionDialog: {
        class: Gtk.ColorSelectionDialog;
        props: GtkColorSelectionDialogProps;
        signals: Gtk.ColorSelectionDialog.SignalSignatures;
        constructOnly: GtkColorSelectionDialogConstructOnly;
        slotCandidates: {};
    };
    GtkCombo: {
        class: Gtk.Combo;
        props: GtkComboProps;
        signals: Gtk.Combo.SignalSignatures;
        constructOnly: GtkComboConstructOnly;
        slotCandidates: {};
    };
    GtkComboBox: {
        class: Gtk.ComboBox;
        props: GtkComboBoxProps;
        signals: Gtk.ComboBox.SignalSignatures;
        constructOnly: GtkComboBoxConstructOnly;
        slotCandidates: {};
    };
    GtkComboBoxEntry: {
        class: Gtk.ComboBoxEntry;
        props: GtkComboBoxEntryProps;
        signals: Gtk.ComboBoxEntry.SignalSignatures;
        constructOnly: GtkComboBoxEntryConstructOnly;
        slotCandidates: {};
    };
    GtkComboBoxText: {
        class: Gtk.ComboBoxText;
        props: GtkComboBoxTextProps;
        signals: Gtk.ComboBoxText.SignalSignatures;
        constructOnly: GtkComboBoxTextConstructOnly;
        slotCandidates: {};
    };
    GtkCurve: {
        class: Gtk.Curve;
        props: GtkCurveProps;
        signals: Gtk.Curve.SignalSignatures;
        constructOnly: GtkCurveConstructOnly;
        slotCandidates: {};
    };
    GtkDialog: {
        class: Gtk.Dialog;
        props: GtkDialogProps;
        signals: Gtk.Dialog.SignalSignatures;
        constructOnly: GtkDialogConstructOnly;
        slotCandidates: {};
    };
    GtkDrawingArea: {
        class: Gtk.DrawingArea;
        props: GtkDrawingAreaProps;
        signals: Gtk.DrawingArea.SignalSignatures;
        constructOnly: GtkDrawingAreaConstructOnly;
        slotCandidates: {};
    };
    GtkEntry: {
        class: Gtk.Entry;
        props: GtkEntryProps;
        signals: Gtk.Entry.SignalSignatures;
        constructOnly: GtkEntryConstructOnly;
        slotCandidates: {};
    };
    GtkEventBox: {
        class: Gtk.EventBox;
        props: GtkEventBoxProps;
        signals: Gtk.EventBox.SignalSignatures;
        constructOnly: GtkEventBoxConstructOnly;
        slotCandidates: {};
    };
    GtkExpander: {
        class: Gtk.Expander;
        props: GtkExpanderProps;
        signals: Gtk.Expander.SignalSignatures;
        constructOnly: GtkExpanderConstructOnly;
        slotCandidates: {
        'label': 'set_label_widget';
        };
    };
    GtkFileChooserButton: {
        class: Gtk.FileChooserButton;
        props: GtkFileChooserButtonProps;
        signals: Gtk.FileChooserButton.SignalSignatures;
        constructOnly: GtkFileChooserButtonConstructOnly;
        slotCandidates: {};
    };
    GtkFileChooserDialog: {
        class: Gtk.FileChooserDialog;
        props: GtkFileChooserDialogProps;
        signals: Gtk.FileChooserDialog.SignalSignatures;
        constructOnly: GtkFileChooserDialogConstructOnly;
        slotCandidates: {};
    };
    GtkFileChooserWidget: {
        class: Gtk.FileChooserWidget;
        props: GtkFileChooserWidgetProps;
        signals: Gtk.FileChooserWidget.SignalSignatures;
        constructOnly: GtkFileChooserWidgetConstructOnly;
        slotCandidates: {};
    };
    GtkFileSelection: {
        class: Gtk.FileSelection;
        props: GtkFileSelectionProps;
        signals: Gtk.FileSelection.SignalSignatures;
        constructOnly: GtkFileSelectionConstructOnly;
        slotCandidates: {};
    };
    GtkFixed: {
        class: Gtk.Fixed;
        props: GtkFixedProps;
        signals: Gtk.Fixed.SignalSignatures;
        constructOnly: GtkFixedConstructOnly;
        slotCandidates: {};
    };
    GtkFontButton: {
        class: Gtk.FontButton;
        props: GtkFontButtonProps;
        signals: Gtk.FontButton.SignalSignatures;
        constructOnly: GtkFontButtonConstructOnly;
        slotCandidates: {};
    };
    GtkFontSelection: {
        class: Gtk.FontSelection;
        props: GtkFontSelectionProps;
        signals: Gtk.FontSelection.SignalSignatures;
        constructOnly: GtkFontSelectionConstructOnly;
        slotCandidates: {};
    };
    GtkFontSelectionDialog: {
        class: Gtk.FontSelectionDialog;
        props: GtkFontSelectionDialogProps;
        signals: Gtk.FontSelectionDialog.SignalSignatures;
        constructOnly: GtkFontSelectionDialogConstructOnly;
        slotCandidates: {};
    };
    GtkFrame: {
        class: Gtk.Frame;
        props: GtkFrameProps;
        signals: Gtk.Frame.SignalSignatures;
        constructOnly: GtkFrameConstructOnly;
        slotCandidates: {
        'label': 'set_label_widget';
        };
    };
    GtkGammaCurve: {
        class: Gtk.GammaCurve;
        props: GtkGammaCurveProps;
        signals: Gtk.GammaCurve.SignalSignatures;
        constructOnly: GtkGammaCurveConstructOnly;
        slotCandidates: {};
    };
    GtkHBox: {
        class: Gtk.HBox;
        props: GtkHBoxProps;
        signals: Gtk.HBox.SignalSignatures;
        constructOnly: GtkHBoxConstructOnly;
        slotCandidates: {};
    };
    GtkHButtonBox: {
        class: Gtk.HButtonBox;
        props: GtkHButtonBoxProps;
        signals: Gtk.HButtonBox.SignalSignatures;
        constructOnly: GtkHButtonBoxConstructOnly;
        slotCandidates: {};
    };
    GtkHPaned: {
        class: Gtk.HPaned;
        props: GtkHPanedProps;
        signals: Gtk.HPaned.SignalSignatures;
        constructOnly: GtkHPanedConstructOnly;
        slotCandidates: {};
    };
    GtkHRuler: {
        class: Gtk.HRuler;
        props: GtkHRulerProps;
        signals: Gtk.HRuler.SignalSignatures;
        constructOnly: GtkHRulerConstructOnly;
        slotCandidates: {};
    };
    GtkHSV: {
        class: Gtk.HSV;
        props: GtkHSVProps;
        signals: Gtk.HSV.SignalSignatures;
        constructOnly: GtkHSVConstructOnly;
        slotCandidates: {};
    };
    GtkHScale: {
        class: Gtk.HScale;
        props: GtkHScaleProps;
        signals: Gtk.HScale.SignalSignatures;
        constructOnly: GtkHScaleConstructOnly;
        slotCandidates: {};
    };
    GtkHScrollbar: {
        class: Gtk.HScrollbar;
        props: GtkHScrollbarProps;
        signals: Gtk.HScrollbar.SignalSignatures;
        constructOnly: GtkHScrollbarConstructOnly;
        slotCandidates: {};
    };
    GtkHSeparator: {
        class: Gtk.HSeparator;
        props: GtkHSeparatorProps;
        signals: Gtk.HSeparator.SignalSignatures;
        constructOnly: GtkHSeparatorConstructOnly;
        slotCandidates: {};
    };
    GtkHandleBox: {
        class: Gtk.HandleBox;
        props: GtkHandleBoxProps;
        signals: Gtk.HandleBox.SignalSignatures;
        constructOnly: GtkHandleBoxConstructOnly;
        slotCandidates: {};
    };
    GtkIconView: {
        class: Gtk.IconView;
        props: GtkIconViewProps;
        signals: Gtk.IconView.SignalSignatures;
        constructOnly: GtkIconViewConstructOnly;
        slotCandidates: {};
    };
    GtkImage: {
        class: Gtk.Image;
        props: GtkImageProps;
        signals: Gtk.Image.SignalSignatures;
        constructOnly: GtkImageConstructOnly;
        slotCandidates: {};
    };
    GtkImageMenuItem: {
        class: Gtk.ImageMenuItem;
        props: GtkImageMenuItemProps;
        signals: Gtk.ImageMenuItem.SignalSignatures;
        constructOnly: GtkImageMenuItemConstructOnly;
        slotCandidates: {
        'image': 'set_image';
        };
    };
    GtkInfoBar: {
        class: Gtk.InfoBar;
        props: GtkInfoBarProps;
        signals: Gtk.InfoBar.SignalSignatures;
        constructOnly: GtkInfoBarConstructOnly;
        slotCandidates: {};
    };
    GtkInputDialog: {
        class: Gtk.InputDialog;
        props: GtkInputDialogProps;
        signals: Gtk.InputDialog.SignalSignatures;
        constructOnly: GtkInputDialogConstructOnly;
        slotCandidates: {};
    };
    GtkInvisible: {
        class: Gtk.Invisible;
        props: GtkInvisibleProps;
        signals: Gtk.Invisible.SignalSignatures;
        constructOnly: GtkInvisibleConstructOnly;
        slotCandidates: {};
    };
    GtkLabel: {
        class: Gtk.Label;
        props: GtkLabelProps;
        signals: Gtk.Label.SignalSignatures;
        constructOnly: GtkLabelConstructOnly;
        slotCandidates: {
        'mnemonic': 'set_mnemonic_widget';
        };
    };
    GtkLayout: {
        class: Gtk.Layout;
        props: GtkLayoutProps;
        signals: Gtk.Layout.SignalSignatures;
        constructOnly: GtkLayoutConstructOnly;
        slotCandidates: {};
    };
    GtkLinkButton: {
        class: Gtk.LinkButton;
        props: GtkLinkButtonProps;
        signals: Gtk.LinkButton.SignalSignatures;
        constructOnly: GtkLinkButtonConstructOnly;
        slotCandidates: {};
    };
    GtkList: {
        class: Gtk.List;
        props: GtkListProps;
        signals: Gtk.List.SignalSignatures;
        constructOnly: GtkListConstructOnly;
        slotCandidates: {};
    };
    GtkListItem: {
        class: Gtk.ListItem;
        props: GtkListItemProps;
        signals: Gtk.ListItem.SignalSignatures;
        constructOnly: GtkListItemConstructOnly;
        slotCandidates: {};
    };
    GtkMenu: {
        class: Gtk.Menu;
        props: GtkMenuProps;
        signals: Gtk.Menu.SignalSignatures;
        constructOnly: GtkMenuConstructOnly;
        slotCandidates: {};
    };
    GtkMenuBar: {
        class: Gtk.MenuBar;
        props: GtkMenuBarProps;
        signals: Gtk.MenuBar.SignalSignatures;
        constructOnly: GtkMenuBarConstructOnly;
        slotCandidates: {};
    };
    GtkMenuItem: {
        class: Gtk.MenuItem;
        props: GtkMenuItemProps;
        signals: Gtk.MenuItem.SignalSignatures;
        constructOnly: GtkMenuItemConstructOnly;
        slotCandidates: {
        'submenu': 'set_submenu';
        };
    };
    GtkMenuToolButton: {
        class: Gtk.MenuToolButton;
        props: GtkMenuToolButtonProps;
        signals: Gtk.MenuToolButton.SignalSignatures;
        constructOnly: GtkMenuToolButtonConstructOnly;
        slotCandidates: {
        'menu': 'set_menu';
        };
    };
    GtkMessageDialog: {
        class: Gtk.MessageDialog;
        props: GtkMessageDialogProps;
        signals: Gtk.MessageDialog.SignalSignatures;
        constructOnly: GtkMessageDialogConstructOnly;
        slotCandidates: {
        'image': 'set_image';
        };
    };
    GtkNotebook: {
        class: Gtk.Notebook;
        props: GtkNotebookProps;
        signals: Gtk.Notebook.SignalSignatures;
        constructOnly: GtkNotebookConstructOnly;
        slotCandidates: {};
    };
    GtkOffscreenWindow: {
        class: Gtk.OffscreenWindow;
        props: GtkOffscreenWindowProps;
        signals: Gtk.OffscreenWindow.SignalSignatures;
        constructOnly: GtkOffscreenWindowConstructOnly;
        slotCandidates: {};
    };
    GtkOptionMenu: {
        class: Gtk.OptionMenu;
        props: GtkOptionMenuProps;
        signals: Gtk.OptionMenu.SignalSignatures;
        constructOnly: GtkOptionMenuConstructOnly;
        slotCandidates: {
        'menu': 'set_menu';
        };
    };
    GtkPixmap: {
        class: Gtk.Pixmap;
        props: GtkPixmapProps;
        signals: Gtk.Pixmap.SignalSignatures;
        constructOnly: GtkPixmapConstructOnly;
        slotCandidates: {};
    };
    GtkPlug: {
        class: Gtk.Plug;
        props: GtkPlugProps;
        signals: Gtk.Plug.SignalSignatures;
        constructOnly: GtkPlugConstructOnly;
        slotCandidates: {};
    };
    GtkPreview: {
        class: Gtk.Preview;
        props: GtkPreviewProps;
        signals: Gtk.Preview.SignalSignatures;
        constructOnly: GtkPreviewConstructOnly;
        slotCandidates: {};
    };
    GtkProgressBar: {
        class: Gtk.ProgressBar;
        props: GtkProgressBarProps;
        signals: Gtk.ProgressBar.SignalSignatures;
        constructOnly: GtkProgressBarConstructOnly;
        slotCandidates: {};
    };
    GtkRadioButton: {
        class: Gtk.RadioButton;
        props: GtkRadioButtonProps;
        signals: Gtk.RadioButton.SignalSignatures;
        constructOnly: GtkRadioButtonConstructOnly;
        slotCandidates: {};
    };
    GtkRadioMenuItem: {
        class: Gtk.RadioMenuItem;
        props: GtkRadioMenuItemProps;
        signals: Gtk.RadioMenuItem.SignalSignatures;
        constructOnly: GtkRadioMenuItemConstructOnly;
        slotCandidates: {};
    };
    GtkRadioToolButton: {
        class: Gtk.RadioToolButton;
        props: GtkRadioToolButtonProps;
        signals: Gtk.RadioToolButton.SignalSignatures;
        constructOnly: GtkRadioToolButtonConstructOnly;
        slotCandidates: {};
    };
    GtkRecentChooserDialog: {
        class: Gtk.RecentChooserDialog;
        props: GtkRecentChooserDialogProps;
        signals: Gtk.RecentChooserDialog.SignalSignatures;
        constructOnly: GtkRecentChooserDialogConstructOnly;
        slotCandidates: {};
    };
    GtkRecentChooserMenu: {
        class: Gtk.RecentChooserMenu;
        props: GtkRecentChooserMenuProps;
        signals: Gtk.RecentChooserMenu.SignalSignatures;
        constructOnly: GtkRecentChooserMenuConstructOnly;
        slotCandidates: {};
    };
    GtkRecentChooserWidget: {
        class: Gtk.RecentChooserWidget;
        props: GtkRecentChooserWidgetProps;
        signals: Gtk.RecentChooserWidget.SignalSignatures;
        constructOnly: GtkRecentChooserWidgetConstructOnly;
        slotCandidates: {};
    };
    GtkRuler: {
        class: Gtk.Ruler;
        props: GtkRulerProps;
        signals: Gtk.Ruler.SignalSignatures;
        constructOnly: GtkRulerConstructOnly;
        slotCandidates: {};
    };
    GtkScaleButton: {
        class: Gtk.ScaleButton;
        props: GtkScaleButtonProps;
        signals: Gtk.ScaleButton.SignalSignatures;
        constructOnly: GtkScaleButtonConstructOnly;
        slotCandidates: {};
    };
    GtkScrolledWindow: {
        class: Gtk.ScrolledWindow;
        props: GtkScrolledWindowProps;
        signals: Gtk.ScrolledWindow.SignalSignatures;
        constructOnly: GtkScrolledWindowConstructOnly;
        slotCandidates: {
        'with-viewport': 'add_with_viewport';
        };
    };
    GtkSeparatorMenuItem: {
        class: Gtk.SeparatorMenuItem;
        props: GtkSeparatorMenuItemProps;
        signals: Gtk.SeparatorMenuItem.SignalSignatures;
        constructOnly: GtkSeparatorMenuItemConstructOnly;
        slotCandidates: {};
    };
    GtkSeparatorToolItem: {
        class: Gtk.SeparatorToolItem;
        props: GtkSeparatorToolItemProps;
        signals: Gtk.SeparatorToolItem.SignalSignatures;
        constructOnly: GtkSeparatorToolItemConstructOnly;
        slotCandidates: {};
    };
    GtkSocket: {
        class: Gtk.Socket;
        props: GtkSocketProps;
        signals: Gtk.Socket.SignalSignatures;
        constructOnly: GtkSocketConstructOnly;
        slotCandidates: {};
    };
    GtkSpinButton: {
        class: Gtk.SpinButton;
        props: GtkSpinButtonProps;
        signals: Gtk.SpinButton.SignalSignatures;
        constructOnly: GtkSpinButtonConstructOnly;
        slotCandidates: {};
    };
    GtkSpinner: {
        class: Gtk.Spinner;
        props: GtkSpinnerProps;
        signals: Gtk.Spinner.SignalSignatures;
        constructOnly: GtkSpinnerConstructOnly;
        slotCandidates: {};
    };
    GtkStatusbar: {
        class: Gtk.Statusbar;
        props: GtkStatusbarProps;
        signals: Gtk.Statusbar.SignalSignatures;
        constructOnly: GtkStatusbarConstructOnly;
        slotCandidates: {};
    };
    GtkTable: {
        class: Gtk.Table;
        props: GtkTableProps;
        signals: Gtk.Table.SignalSignatures;
        constructOnly: GtkTableConstructOnly;
        slotCandidates: {};
    };
    GtkTearoffMenuItem: {
        class: Gtk.TearoffMenuItem;
        props: GtkTearoffMenuItemProps;
        signals: Gtk.TearoffMenuItem.SignalSignatures;
        constructOnly: GtkTearoffMenuItemConstructOnly;
        slotCandidates: {};
    };
    GtkTextView: {
        class: Gtk.TextView;
        props: GtkTextViewProps;
        signals: Gtk.TextView.SignalSignatures;
        constructOnly: GtkTextViewConstructOnly;
        slotCandidates: {};
    };
    GtkTipsQuery: {
        class: Gtk.TipsQuery;
        props: GtkTipsQueryProps;
        signals: Gtk.TipsQuery.SignalSignatures;
        constructOnly: GtkTipsQueryConstructOnly;
        slotCandidates: {
        'caller': 'set_caller';
        };
    };
    GtkToggleButton: {
        class: Gtk.ToggleButton;
        props: GtkToggleButtonProps;
        signals: Gtk.ToggleButton.SignalSignatures;
        constructOnly: GtkToggleButtonConstructOnly;
        slotCandidates: {};
    };
    GtkToggleToolButton: {
        class: Gtk.ToggleToolButton;
        props: GtkToggleToolButtonProps;
        signals: Gtk.ToggleToolButton.SignalSignatures;
        constructOnly: GtkToggleToolButtonConstructOnly;
        slotCandidates: {};
    };
    GtkToolButton: {
        class: Gtk.ToolButton;
        props: GtkToolButtonProps;
        signals: Gtk.ToolButton.SignalSignatures;
        constructOnly: GtkToolButtonConstructOnly;
        slotCandidates: {
        'icon': 'set_icon_widget';
        'label': 'set_label_widget';
        };
    };
    GtkToolItem: {
        class: Gtk.ToolItem;
        props: GtkToolItemProps;
        signals: Gtk.ToolItem.SignalSignatures;
        constructOnly: GtkToolItemConstructOnly;
        slotCandidates: {};
    };
    GtkToolItemGroup: {
        class: Gtk.ToolItemGroup;
        props: GtkToolItemGroupProps;
        signals: Gtk.ToolItemGroup.SignalSignatures;
        constructOnly: GtkToolItemGroupConstructOnly;
        slotCandidates: {
        'label': 'set_label_widget';
        };
    };
    GtkToolPalette: {
        class: Gtk.ToolPalette;
        props: GtkToolPaletteProps;
        signals: Gtk.ToolPalette.SignalSignatures;
        constructOnly: GtkToolPaletteConstructOnly;
        slotCandidates: {};
    };
    GtkToolbar: {
        class: Gtk.Toolbar;
        props: GtkToolbarProps;
        signals: Gtk.Toolbar.SignalSignatures;
        constructOnly: GtkToolbarConstructOnly;
        slotCandidates: {};
    };
    GtkTreeView: {
        class: Gtk.TreeView;
        props: GtkTreeViewProps;
        signals: Gtk.TreeView.SignalSignatures;
        constructOnly: GtkTreeViewConstructOnly;
        slotCandidates: {
        'search-entry': 'set_search_entry';
        };
    };
    GtkVBox: {
        class: Gtk.VBox;
        props: GtkVBoxProps;
        signals: Gtk.VBox.SignalSignatures;
        constructOnly: GtkVBoxConstructOnly;
        slotCandidates: {};
    };
    GtkVButtonBox: {
        class: Gtk.VButtonBox;
        props: GtkVButtonBoxProps;
        signals: Gtk.VButtonBox.SignalSignatures;
        constructOnly: GtkVButtonBoxConstructOnly;
        slotCandidates: {};
    };
    GtkVPaned: {
        class: Gtk.VPaned;
        props: GtkVPanedProps;
        signals: Gtk.VPaned.SignalSignatures;
        constructOnly: GtkVPanedConstructOnly;
        slotCandidates: {};
    };
    GtkVRuler: {
        class: Gtk.VRuler;
        props: GtkVRulerProps;
        signals: Gtk.VRuler.SignalSignatures;
        constructOnly: GtkVRulerConstructOnly;
        slotCandidates: {};
    };
    GtkVScale: {
        class: Gtk.VScale;
        props: GtkVScaleProps;
        signals: Gtk.VScale.SignalSignatures;
        constructOnly: GtkVScaleConstructOnly;
        slotCandidates: {};
    };
    GtkVScrollbar: {
        class: Gtk.VScrollbar;
        props: GtkVScrollbarProps;
        signals: Gtk.VScrollbar.SignalSignatures;
        constructOnly: GtkVScrollbarConstructOnly;
        slotCandidates: {};
    };
    GtkVSeparator: {
        class: Gtk.VSeparator;
        props: GtkVSeparatorProps;
        signals: Gtk.VSeparator.SignalSignatures;
        constructOnly: GtkVSeparatorConstructOnly;
        slotCandidates: {};
    };
    GtkViewport: {
        class: Gtk.Viewport;
        props: GtkViewportProps;
        signals: Gtk.Viewport.SignalSignatures;
        constructOnly: GtkViewportConstructOnly;
        slotCandidates: {};
    };
    GtkVolumeButton: {
        class: Gtk.VolumeButton;
        props: GtkVolumeButtonProps;
        signals: Gtk.VolumeButton.SignalSignatures;
        constructOnly: GtkVolumeButtonConstructOnly;
        slotCandidates: {};
    };
    GtkWindow: {
        class: Gtk.Window;
        props: GtkWindowProps;
        signals: Gtk.Window.SignalSignatures;
        constructOnly: GtkWindowConstructOnly;
        slotCandidates: {
        'default': 'set_default';
        'focus': 'set_focus';
        'transient-for': 'set_transient_for';
        };
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
