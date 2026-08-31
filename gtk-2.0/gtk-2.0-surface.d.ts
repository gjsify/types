/**
 * The GIR-derived widget VOCABULARY for Gtk-2.0.
 *
 * GENERATED — do not edit. Provenance: Gtk-2.0 — library 2.24.33 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface — prop(s) no TypeScript value satisfies: Gtk.Notebook.group Gtk.Object.user-data
 *
 * 105 concrete widgets, 129 declarations, 94 enum nick unions, 20 slot candidates.
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

// ---------------------------------------------------------------------------
// Enum nicks — the string vocabulary GObject registered, from GIR's `glib:nick`.
//
// Not derived from the member name. Substituting underscores for dashes is not a law:
// some nicks keep an underscore the substitution would have replaced, and only the
// attribute knows which. Gtk-4.0 and Adw-1 contradict no derivation at all, which is
// how a derived nick passes review and breaks elsewhere.
// Re-measure with `scripts/check-nick-derivation.mjs` in ts-for-gir.
// ---------------------------------------------------------------------------

export type GdkExtensionModeNick = 'none' | 'all' | 'cursor';
export type GdkGravityNick = 'north-west' | 'north' | 'north-east' | 'west' | 'center' | 'east' | 'south-west' | 'south' | 'south-east' | 'static';
export type GdkWindowTypeHintNick = 'normal' | 'dialog' | 'menu' | 'toolbar' | 'splashscreen' | 'utility' | 'dock' | 'desktop' | 'dropdown-menu' | 'popup-menu' | 'tooltip' | 'notification' | 'combo' | 'dnd';
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
export type PangoEllipsizeModeNick = 'none' | 'start' | 'middle' | 'end';
export type PangoWrapModeNick = 'word' | 'char' | 'word-char' | 'none';

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
     */
    comments?: string;
    /**
     * Copyright information for the program.
     * @since 2.6
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
     */
    'logo-icon-name'?: string;
    /**
     * The name of the program.
     * @since 2.12
     */
    'program-name'?: string;
    /**
     * Credits to the translators.
     * @since 2.6
     */
    'translator-credits'?: string;
    /**
     * The version of the program.
     * @since 2.6
     */
    version?: string;
    /**
     * The URL for the link to the website of the program.
     * @since 2.6
     */
    website?: string;
    /**
     * The label for the link to the website of the program.
     * @since 2.6
     */
    'website-label'?: string;
    /**
     * Whether to wrap the text in the license dialog.
     * @since 2.8
     */
    'wrap-license'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkAboutDialogConstructOnly = GtkDialogConstructOnly | GtkBuildableConstructOnly;

/** The #GtkAccelLabel widget is a subclass of #GtkLabel that also displays an accelerator key on the right of the label text, e.g. */
export interface GtkAccelLabelProps extends GtkLabelProps, GtkBuildableProps {
    'accel-closure'?: GObject.Closure;
    'accel-widget'?: Gtk.Widget;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkAccelLabelConstructOnly = GtkLabelConstructOnly | GtkBuildableConstructOnly;

/** Activatable widgets can be connected to a #GtkAction and reflects the state of its action. */
export interface GtkActivatableProps {
    /**
     * The action that this activatable will activate and receive updates from for various states and possibly appearance.
     * @since 2.16
     */
    'related-action'?: Gtk.Action;
    /**
     * Whether this activatable should reset its layout and appearance when setting the related action or when the action changes appearance.
     * @since 2.16
     */
    'use-action-appearance'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkActivatableConstructOnly = never;

/** The #GtkAlignment widget controls the alignment and size of its child widget. */
export interface GtkAlignmentProps extends GtkBinProps, GtkBuildableProps {
    /**
     * The padding to insert at the bottom of the widget.
     * @since 2.4
     */
    'bottom-padding'?: number;
    /**
     * The padding to insert at the left of the widget.
     * @since 2.4
     */
    'left-padding'?: number;
    /**
     * The padding to insert at the right of the widget.
     * @since 2.4
     */
    'right-padding'?: number;
    /**
     * The padding to insert at the top of the widget.
     * @since 2.4
     */
    'top-padding'?: number;
    xalign?: number;
    xscale?: number;
    yalign?: number;
    yscale?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkAlignmentConstructOnly = GtkBinConstructOnly | GtkBuildableConstructOnly;

/** GtkArrow should be used to draw simple arrows that need to point in one of the four cardinal directions (up, down, left, or right). */
export interface GtkArrowProps extends GtkMiscProps, GtkBuildableProps {
    'arrow-type'?: GtkArrowTypeNick | Gtk.ArrowType;
    'shadow-type'?: GtkShadowTypeNick | Gtk.ShadowType;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkArrowConstructOnly = GtkMiscConstructOnly | GtkBuildableConstructOnly;

/** The #GtkAspectFrame is useful when you want pack a widget so that it can resize but always retains the same aspect ratio. */
export interface GtkAspectFrameProps extends GtkFrameProps, GtkBuildableProps {
    'obey-child'?: boolean;
    ratio?: number;
    xalign?: number;
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
    homogeneous?: boolean;
    spacing?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkBoxConstructOnly = GtkContainerConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

/** In order to allow construction from a <link linkend="BUILDER-UI">GtkBuilder UI description</link>, an object class must implement the GtkBuildable interface. */
export interface GtkBuildableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkBuildableConstructOnly = never;

export interface GtkButtonProps extends GtkBinProps, GtkActivatableProps, GtkBuildableProps {
    'focus-on-click'?: boolean;
    image?: Gtk.Widget;
    /**
     * The position of the image relative to the text inside the button.
     * @since 2.10
     */
    'image-position'?: GtkPositionTypeNick | Gtk.PositionType;
    label?: string;
    relief?: GtkReliefStyleNick | Gtk.ReliefStyle;
    'use-stock'?: boolean;
    'use-underline'?: boolean;
    /**
     * If the child of the button is a #GtkMisc or #GtkAlignment, this property can be used to control it's horizontal alignment.
     * @since 2.4
     */
    xalign?: number;
    /**
     * If the child of the button is a #GtkMisc or #GtkAlignment, this property can be used to control it's vertical alignment.
     * @since 2.4
     */
    yalign?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkButtonConstructOnly = GtkBinConstructOnly | GtkActivatableConstructOnly | GtkBuildableConstructOnly;

export interface GtkButtonBoxProps extends GtkBoxProps, GtkBuildableProps, GtkOrientableProps {
    'layout-style'?: GtkButtonBoxStyleNick | Gtk.ButtonBoxStyle;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkButtonBoxConstructOnly = GtkBoxConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

export interface GtkCListProps extends GtkContainerProps, GtkBuildableProps {
    'n-columns'?: number;
    reorderable?: boolean;
    'row-height'?: number;
    'selection-mode'?: GtkSelectionModeNick | Gtk.SelectionMode;
    'shadow-type'?: GtkShadowTypeNick | Gtk.ShadowType;
    'sort-type'?: GtkSortTypeNick | Gtk.SortType;
    'titles-active'?: boolean;
    'use-drag-icons'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkCListConstructOnly = GtkContainerConstructOnly | GtkBuildableConstructOnly | 'n-columns';

export interface GtkCTreeProps extends GtkCListProps, GtkBuildableProps {
    'expander-style'?: GtkCTreeExpanderStyleNick | Gtk.CTreeExpanderStyle;
    indent?: number;
    'line-style'?: GtkCTreeLineStyleNick | Gtk.CTreeLineStyle;
    'n-columns'?: number;
    'show-stub'?: boolean;
    spacing?: number;
    'tree-column'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkCTreeConstructOnly = GtkCListConstructOnly | GtkBuildableConstructOnly | 'n-columns' | 'tree-column';

export interface GtkCalendarProps extends GtkWidgetProps, GtkBuildableProps {
    /** The selected day (as a number between 1 and 31, or 0 to unselect the currently selected day). */
    day?: number;
    /**
     * Height of a detail cell, in rows.
     * @since 2.14
     */
    'detail-height-rows'?: number;
    /**
     * Width of a detail cell, in characters.
     * @since 2.14
     */
    'detail-width-chars'?: number;
    /** The selected month (as a number between 0 and 11). */
    month?: number;
    /**
     * Determines whether the selected month can be changed.
     * @since 2.4
     */
    'no-month-change'?: boolean;
    /**
     * Determines whether day names are displayed.
     * @since 2.4
     */
    'show-day-names'?: boolean;
    /**
     * Determines whether details are shown directly in the widget, or if they are available only as tooltip.
     * @since 2.14
     */
    'show-details'?: boolean;
    /**
     * Determines whether a heading is displayed.
     * @since 2.4
     */
    'show-heading'?: boolean;
    /**
     * Determines whether week numbers are displayed.
     * @since 2.4
     */
    'show-week-numbers'?: boolean;
    /** The selected year. */
    year?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkCalendarConstructOnly = GtkWidgetConstructOnly | GtkBuildableConstructOnly;

export interface GtkCellEditableProps extends GtkWidgetProps {
    /**
     * Indicates whether editing on the cell has been canceled.
     * @since 2.20
     */
    'editing-canceled'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkCellEditableConstructOnly = GtkWidgetConstructOnly;

export interface GtkCellLayoutProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkCellLayoutConstructOnly = never;

export interface GtkCellViewProps extends GtkWidgetProps, GtkBuildableProps, GtkCellLayoutProps {
    background?: string;
    'background-gdk'?: Gdk.Color;
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
    active?: boolean;
    'draw-as-radio'?: boolean;
    inconsistent?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkCheckMenuItemConstructOnly = GtkMenuItemConstructOnly | GtkActivatableConstructOnly | GtkBuildableConstructOnly;

export interface GtkColorButtonProps extends GtkButtonProps, GtkActivatableProps, GtkBuildableProps {
    /**
     * The selected opacity value (0 fully transparent, 65535 fully opaque).
     * @since 2.4
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
     */
    title?: string;
    /**
     * If this property is set to %TRUE, the color swatch on the button is rendered against a checkerboard background to show its opacity and the opacity slider is displayed in the color selection dialog.
     * @since 2.4
     */
    'use-alpha'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkColorButtonConstructOnly = GtkButtonConstructOnly | GtkActivatableConstructOnly | GtkBuildableConstructOnly;

export interface GtkColorSelectionProps extends GtkVBoxProps, GtkBuildableProps, GtkOrientableProps {
    'current-alpha'?: number;
    'current-color'?: Gdk.Color;
    'has-opacity-control'?: boolean;
    'has-palette'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkColorSelectionConstructOnly = GtkVBoxConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

export interface GtkColorSelectionDialogProps extends GtkDialogProps, GtkBuildableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkColorSelectionDialogConstructOnly = GtkDialogConstructOnly | GtkBuildableConstructOnly;

export interface GtkComboProps extends GtkHBoxProps, GtkBuildableProps, GtkOrientableProps {
    'allow-empty'?: boolean;
    'case-sensitive'?: boolean;
    'enable-arrow-keys'?: boolean;
    'enable-arrows-always'?: boolean;
    'value-in-list'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkComboConstructOnly = GtkHBoxConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

/** A GtkComboBox is a widget that allows the user to choose from a list of valid choices. */
export interface GtkComboBoxProps extends GtkBinProps, GtkBuildableProps, GtkCellEditableProps, GtkCellLayoutProps {
    /**
     * The item which is currently active.
     * @since 2.4
     */
    active?: number;
    /**
     * The add-tearoffs property controls whether generated menus have tearoff menu items.
     * @since 2.6
     */
    'add-tearoffs'?: boolean;
    /**
     * Whether the dropdown button is sensitive when the model is empty.
     * @since 2.14
     */
    'button-sensitivity'?: GtkSensitivityTypeNick | Gtk.SensitivityType;
    /**
     * If this is set to a non-negative value, it must be the index of a column of type %G_TYPE_INT in the model.
     * @since 2.4
     */
    'column-span-column'?: number;
    /**
     * The column in the combo box's model to associate with strings from the entry if the combo was created with #GtkComboBox:has-entry = %TRUE.
     * @since 2.24
     */
    'entry-text-column'?: number;
    'focus-on-click'?: boolean;
    /**
     * Whether the combo box has an entry.
     * @since 2.24
     */
    'has-entry'?: boolean;
    /**
     * The has-frame property controls whether a frame is drawn around the entry.
     * @since 2.6
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
     */
    'row-span-column'?: number;
    /**
     * A title that may be displayed by the window manager when the popup is torn-off.
     * @since 2.10
     */
    'tearoff-title'?: string;
    /**
     * If wrap-width is set to a positive value, items in the popup will be laid out along multiple columns, starting a new row on reaching the wrap width.
     * @since 2.4
     */
    'wrap-width'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkComboBoxConstructOnly = GtkBinConstructOnly | GtkBuildableConstructOnly | GtkCellEditableConstructOnly | GtkCellLayoutConstructOnly | 'has-entry';

export interface GtkComboBoxEntryProps extends GtkComboBoxProps, GtkBuildableProps, GtkCellEditableProps, GtkCellLayoutProps {
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
    'border-width'?: number;
    child?: Gtk.Widget;
    'resize-mode'?: GtkResizeModeNick | Gtk.ResizeMode;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkContainerConstructOnly = GtkWidgetConstructOnly | GtkBuildableConstructOnly;

export interface GtkCurveProps extends GtkDrawingAreaProps, GtkBuildableProps {
    'curve-type'?: GtkCurveTypeNick | Gtk.CurveType;
    'max-x'?: number;
    'max-y'?: number;
    'min-x'?: number;
    'min-y'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkCurveConstructOnly = GtkDrawingAreaConstructOnly | GtkBuildableConstructOnly;

export interface GtkDialogProps extends GtkWindowProps, GtkBuildableProps {
    /** When %TRUE, the dialog has a separator bar above its buttons. */
    'has-separator'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkDialogConstructOnly = GtkWindowConstructOnly | GtkBuildableConstructOnly;

export interface GtkDrawingAreaProps extends GtkWidgetProps, GtkBuildableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkDrawingAreaConstructOnly = GtkWidgetConstructOnly | GtkBuildableConstructOnly;

export interface GtkEditableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkEditableConstructOnly = never;

export interface GtkEntryProps extends GtkWidgetProps, GtkBuildableProps, GtkCellEditableProps, GtkEditableProps {
    'activates-default'?: boolean;
    buffer?: Gtk.EntryBuffer;
    /**
     * Whether password entries will show a warning when Caps Lock is on.
     * @since 2.16
     */
    'caps-lock-warning'?: boolean;
    editable?: boolean;
    'has-frame'?: boolean;
    /**
     * Which IM (input method) module should be used for this entry.
     * @since 2.16
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
     */
    'invisible-char'?: number;
    /**
     * Whether the invisible char has been set for the #GtkEntry.
     * @since 2.16
     */
    'invisible-char-set'?: boolean;
    'max-length'?: number;
    /**
     * If text is overwritten when typing in the #GtkEntry.
     * @since 2.14
     */
    'overwrite-mode'?: boolean;
    /**
     * Whether the primary icon is activatable.
     * @since 2.16
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
     */
    'primary-icon-sensitive'?: boolean;
    /**
     * The stock id to use for the primary icon for the entry.
     * @since 2.16
     */
    'primary-icon-stock'?: string;
    /**
     * The contents of the tooltip on the primary icon, which is marked up with the <link linkend="PangoMarkupFormat">Pango text markup language</link>.
     * @since 2.16
     */
    'primary-icon-tooltip-markup'?: string;
    /**
     * The contents of the tooltip on the primary icon.
     * @since 2.16
     */
    'primary-icon-tooltip-text'?: string;
    /**
     * The current fraction of the task that's been completed.
     * @since 2.16
     */
    'progress-fraction'?: number;
    /**
     * The fraction of total entry width to move the progress bouncing block for each call to gtk_entry_progress_pulse().
     * @since 2.16
     */
    'progress-pulse-step'?: number;
    /**
     * Whether the secondary icon is activatable.
     * @since 2.16
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
     */
    'secondary-icon-sensitive'?: boolean;
    /**
     * The stock id to use for the secondary icon for the entry.
     * @since 2.16
     */
    'secondary-icon-stock'?: string;
    /**
     * The contents of the tooltip on the secondary icon, which is marked up with the <link linkend="PangoMarkupFormat">Pango text markup language</link>.
     * @since 2.16
     */
    'secondary-icon-tooltip-markup'?: string;
    /**
     * The contents of the tooltip on the secondary icon.
     * @since 2.16
     */
    'secondary-icon-tooltip-text'?: string;
    /**
     * Which kind of shadow to draw around the entry when #GtkEntry:has-frame is set to %TRUE.
     * @since 2.12
     */
    'shadow-type'?: GtkShadowTypeNick | Gtk.ShadowType;
    text?: string;
    /**
     * When %TRUE, pasted multi-line text is truncated to the first line.
     * @since 2.10
     */
    'truncate-multiline'?: boolean;
    visibility?: boolean;
    'width-chars'?: number;
    /**
     * The horizontal alignment, from 0 (left) to 1 (right).
     * @since 2.4
     */
    xalign?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkEntryConstructOnly = GtkWidgetConstructOnly | GtkBuildableConstructOnly | GtkCellEditableConstructOnly | GtkEditableConstructOnly;

export interface GtkEventBoxProps extends GtkBinProps, GtkBuildableProps {
    'above-child'?: boolean;
    'visible-window'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkEventBoxConstructOnly = GtkBinConstructOnly | GtkBuildableConstructOnly;

export interface GtkExpanderProps extends GtkBinProps, GtkBuildableProps {
    expanded?: boolean;
    label?: string;
    'label-fill'?: boolean;
    'label-widget'?: Gtk.Widget;
    spacing?: number;
    'use-markup'?: boolean;
    'use-underline'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkExpanderConstructOnly = GtkBinConstructOnly | GtkBuildableConstructOnly;

/** #GtkFileChooser is an interface that can be implemented by file selection widgets. */
export interface GtkFileChooserProps extends GtkWidgetProps {
    action?: GtkFileChooserActionNick | Gtk.FileChooserAction;
    /**
     * Whether a file chooser not in %GTK_FILE_CHOOSER_ACTION_OPEN mode will offer the user to create new folders.
     * @since 2.18
     */
    'create-folders'?: boolean;
    /**
     * Whether a file chooser in %GTK_FILE_CHOOSER_ACTION_SAVE mode will present an overwrite confirmation dialog if the user selects a file name that already exists.
     * @since 2.8
     */
    'do-overwrite-confirmation'?: boolean;
    'extra-widget'?: Gtk.Widget;
    'file-system-backend'?: string;
    filter?: Gtk.FileFilter;
    'local-only'?: boolean;
    'preview-widget'?: Gtk.Widget;
    'preview-widget-active'?: boolean;
    'select-multiple'?: boolean;
    'show-hidden'?: boolean;
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
     */
    'focus-on-click'?: boolean;
    /**
     * Title to put on the #GtkFileChooserDialog associated with the button.
     * @since 2.6
     */
    title?: string;
    /**
     * The width of the entry and label inside the button, in characters.
     * @since 2.6
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

export interface GtkFileSelectionProps extends GtkDialogProps, GtkBuildableProps {
    filename?: string;
    'select-multiple'?: boolean;
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
     */
    'font-name'?: string;
    /**
     * If this property is set to %TRUE, the selected font size will be shown in the label.
     * @since 2.4
     */
    'show-size'?: boolean;
    /**
     * If this property is set to %TRUE, the name of the selected font style will be shown in the label.
     * @since 2.4
     */
    'show-style'?: boolean;
    /**
     * The title of the font selection dialog.
     * @since 2.4
     */
    title?: string;
    /**
     * If this property is set to %TRUE, the label will be drawn in the selected font.
     * @since 2.4
     */
    'use-font'?: boolean;
    /**
     * If this property is set to %TRUE, the label will be drawn with the selected font size.
     * @since 2.4
     */
    'use-size'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkFontButtonConstructOnly = GtkButtonConstructOnly | GtkActivatableConstructOnly | GtkBuildableConstructOnly;

export interface GtkFontSelectionProps extends GtkVBoxProps, GtkBuildableProps, GtkOrientableProps {
    'font-name'?: string;
    'preview-text'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkFontSelectionConstructOnly = GtkVBoxConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

export interface GtkFontSelectionDialogProps extends GtkDialogProps, GtkBuildableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkFontSelectionDialogConstructOnly = GtkDialogConstructOnly | GtkBuildableConstructOnly;

export interface GtkFrameProps extends GtkBinProps, GtkBuildableProps {
    label?: string;
    'label-widget'?: Gtk.Widget;
    'label-xalign'?: number;
    'label-yalign'?: number;
    shadow?: GtkShadowTypeNick | Gtk.ShadowType;
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
    'handle-position'?: GtkPositionTypeNick | Gtk.PositionType;
    shadow?: GtkShadowTypeNick | Gtk.ShadowType;
    'shadow-type'?: GtkShadowTypeNick | Gtk.ShadowType;
    'snap-edge'?: GtkPositionTypeNick | Gtk.PositionType;
    'snap-edge-set'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkHandleBoxConstructOnly = GtkBinConstructOnly | GtkBuildableConstructOnly;

export interface GtkIconViewProps extends GtkContainerProps, GtkBuildableProps, GtkCellLayoutProps {
    /**
     * The column-spacing property specifies the space which is inserted between the columns of the icon view.
     * @since 2.6
     */
    'column-spacing'?: number;
    /**
     * The columns property contains the number of the columns in which the items should be displayed.
     * @since 2.6
     */
    columns?: number;
    /**
     * The item-orientation property specifies how the cells (i.e.
     * @since 2.22
     */
    'item-orientation'?: GtkOrientationNick | Gtk.Orientation;
    /**
     * The item-padding property specifies the padding around each of the icon view's item.
     * @since 2.18
     */
    'item-padding'?: number;
    /**
     * The item-width property specifies the width to use for each item.
     * @since 2.6
     */
    'item-width'?: number;
    /**
     * The margin property specifies the space which is inserted at the edges of the icon view.
     * @since 2.6
     */
    margin?: number;
    /**
     * The ::markup-column property contains the number of the model column containing markup information to be displayed.
     * @since 2.6
     */
    'markup-column'?: number;
    model?: Gtk.TreeModel;
    /**
     * The orientation property specifies how the cells (i.e.
     * @since 2.6
     */
    orientation?: GtkOrientationNick | Gtk.Orientation;
    /**
     * The ::pixbuf-column property contains the number of the model column containing the pixbufs which are displayed.
     * @since 2.6
     */
    'pixbuf-column'?: number;
    /**
     * The reorderable property specifies if the items can be reordered by DND.
     * @since 2.8
     */
    reorderable?: boolean;
    /**
     * The row-spacing property specifies the space which is inserted between the rows of the icon view.
     * @since 2.6
     */
    'row-spacing'?: number;
    /**
     * The ::selection-mode property specifies the selection mode of icon view.
     * @since 2.6
     */
    'selection-mode'?: GtkSelectionModeNick | Gtk.SelectionMode;
    /**
     * The spacing property specifies the space which is inserted between the cells (i.e.
     * @since 2.6
     */
    spacing?: number;
    /**
     * The ::text-column property contains the number of the model column containing the texts which are displayed.
     * @since 2.6
     */
    'text-column'?: number;
    'tooltip-column'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkIconViewConstructOnly = GtkContainerConstructOnly | GtkBuildableConstructOnly | GtkCellLayoutConstructOnly;

/** The #GtkImage widget displays an image. */
export interface GtkImageProps extends GtkMiscProps, GtkBuildableProps {
    file?: string;
    /**
     * The GIcon displayed in the GtkImage.
     * @since 2.14
     */
    gicon?: Gio.Icon;
    /**
     * The name of the icon in the icon theme.
     * @since 2.6
     */
    'icon-name'?: string;
    'icon-set'?: Gtk.IconSet;
    'icon-size'?: number;
    image?: Gdk.Image;
    mask?: Gdk.Pixmap;
    pixbuf?: GdkPixbuf.Pixbuf;
    'pixbuf-animation'?: GdkPixbuf.PixbufAnimation;
    /**
     * The "pixel-size" property can be used to specify a fixed size overriding the #GtkImage:icon-size property for images of type %GTK_IMAGE_ICON_NAME.
     * @since 2.6
     */
    'pixel-size'?: number;
    pixmap?: Gdk.Pixmap;
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
     */
    'always-show-image'?: boolean;
    image?: Gtk.Widget;
    /**
     * If %TRUE, the label set in the menuitem is used as a stock id to select the stock item for the item.
     * @since 2.16
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

export interface GtkLabelProps extends GtkMiscProps, GtkBuildableProps {
    /**
     * The angle that the baseline of the label makes with the horizontal, in degrees, measured counterclockwise.
     * @since 2.6
     */
    angle?: number;
    attributes?: Pango.AttrList;
    /**
     * The preferred place to ellipsize the string, if the label does not have enough room to display the entire string, specified as a #PangoEllisizeMode.
     * @since 2.6
     */
    ellipsize?: PangoEllipsizeModeNick | Pango.EllipsizeMode;
    justify?: GtkJustificationNick | Gtk.Justification;
    label?: string;
    /**
     * The desired maximum width of the label, in characters.
     * @since 2.6
     */
    'max-width-chars'?: number;
    'mnemonic-widget'?: Gtk.Widget;
    pattern?: string;
    selectable?: boolean;
    /**
     * Whether the label is in single line mode.
     * @since 2.6
     */
    'single-line-mode'?: boolean;
    /**
     * Set this property to %TRUE to make the label track which links have been clicked.
     * @since 2.18
     */
    'track-visited-links'?: boolean;
    'use-markup'?: boolean;
    'use-underline'?: boolean;
    /**
     * The desired width of the label, in characters.
     * @since 2.6
     */
    'width-chars'?: number;
    wrap?: boolean;
    /**
     * If line wrapping is on (see the #GtkLabel:wrap property) this controls how the line wrapping is done.
     * @since 2.10
     */
    'wrap-mode'?: PangoWrapModeNick | Pango.WrapMode;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkLabelConstructOnly = GtkMiscConstructOnly | GtkBuildableConstructOnly;

export interface GtkLayoutProps extends GtkContainerProps, GtkBuildableProps {
    hadjustment?: Gtk.Adjustment;
    height?: number;
    vadjustment?: Gtk.Adjustment;
    width?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkLayoutConstructOnly = GtkContainerConstructOnly | GtkBuildableConstructOnly;

export interface GtkLinkButtonProps extends GtkButtonProps, GtkActivatableProps, GtkBuildableProps {
    /**
     * The URI bound to this button.
     * @since 2.10
     */
    uri?: string;
    /**
     * The 'visited' state of this button.
     * @since 2.14
     */
    visited?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkLinkButtonConstructOnly = GtkButtonConstructOnly | GtkActivatableConstructOnly | GtkBuildableConstructOnly;

export interface GtkListProps extends GtkContainerProps, GtkBuildableProps {
    'selection-mode'?: GtkSelectionModeNick | Gtk.SelectionMode;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkListConstructOnly = GtkContainerConstructOnly | GtkBuildableConstructOnly;

export interface GtkListItemProps extends GtkItemProps, GtkBuildableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkListItemConstructOnly = GtkItemConstructOnly | GtkBuildableConstructOnly;

export interface GtkMenuProps extends GtkMenuShellProps, GtkBuildableProps {
    /**
     * The accel group holding accelerators for the menu.
     * @since 2.14
     */
    'accel-group'?: Gtk.AccelGroup;
    /**
     * An accel path used to conveniently construct accel paths of child items.
     * @since 2.14
     */
    'accel-path'?: string;
    /**
     * The index of the currently selected menu item, or -1 if no menu item is selected.
     * @since 2.14
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
     */
    monitor?: number;
    /**
     * A boolean that indicates whether the menu reserves space for toggles and icons, regardless of their actual presence.
     * @since 2.18
     */
    'reserve-toggle-size'?: boolean;
    /**
     * A boolean that indicates whether the menu is torn-off.
     * @since 2.6
     */
    'tearoff-state'?: boolean;
    'tearoff-title'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkMenuConstructOnly = GtkMenuShellConstructOnly | GtkBuildableConstructOnly;

export interface GtkMenuBarProps extends GtkMenuShellProps, GtkBuildableProps {
    /**
     * The child pack direction of the menubar.
     * @since 2.8
     */
    'child-pack-direction'?: GtkPackDirectionNick | Gtk.PackDirection;
    /**
     * The pack direction of the menubar.
     * @since 2.8
     */
    'pack-direction'?: GtkPackDirectionNick | Gtk.PackDirection;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkMenuBarConstructOnly = GtkMenuShellConstructOnly | GtkBuildableConstructOnly;

export interface GtkMenuItemProps extends GtkItemProps, GtkActivatableProps, GtkBuildableProps {
    /**
     * Sets the accelerator path of the menu item, through which runtime changes of the menu item's accelerator caused by the user can be identified and saved to persistant storage.
     * @since 2.14
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
     */
    'use-underline'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkMenuItemConstructOnly = GtkItemConstructOnly | GtkActivatableConstructOnly | GtkBuildableConstructOnly;

export interface GtkMenuShellProps extends GtkContainerProps, GtkBuildableProps {
    /**
     * A boolean that determines whether the menu and its submenus grab the keyboard focus.
     * @since 2.8
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
    buttons?: GtkButtonsTypeNick | Gtk.ButtonsType;
    /**
     * The image for this dialog.
     * @since 2.10
     */
    image?: Gtk.Widget;
    /** The type of the message. */
    'message-type'?: GtkMessageTypeNick | Gtk.MessageType;
    /**
     * The secondary text of the message dialog.
     * @since 2.10
     */
    'secondary-text'?: string;
    /**
     * %TRUE if the secondary text of the dialog includes Pango markup.
     * @since 2.10
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
     */
    'use-markup'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkMessageDialogConstructOnly = GtkDialogConstructOnly | GtkBuildableConstructOnly | 'buttons';

export interface GtkMiscProps extends GtkWidgetProps, GtkBuildableProps {
    xalign?: number;
    xpad?: number;
    yalign?: number;
    ypad?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkMiscConstructOnly = GtkWidgetConstructOnly | GtkBuildableConstructOnly;

export interface GtkNotebookProps extends GtkContainerProps, GtkBuildableProps {
    'enable-popup'?: boolean;
    /**
     * Group for tabs drag and drop.
     * @since 2.12
     */
    group?: never;
    'group-id'?: number;
    /**
     * Group name for tabs drag and drop.
     * @since 2.24
     */
    'group-name'?: string;
    homogeneous?: boolean;
    page?: number;
    scrollable?: boolean;
    'show-border'?: boolean;
    'show-tabs'?: boolean;
    'tab-border'?: number;
    'tab-hborder'?: number;
    'tab-pos'?: GtkPositionTypeNick | Gtk.PositionType;
    'tab-vborder'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkNotebookConstructOnly = GtkContainerConstructOnly | GtkBuildableConstructOnly;

export interface GtkObjectProps {
    'user-data'?: never;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkObjectConstructOnly = never;

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

export interface GtkOrientableProps {
    /**
     * The orientation of the orientable.
     * @since 2.16
     */
    orientation?: GtkOrientationNick | Gtk.Orientation;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkOrientableConstructOnly = never;

export interface GtkPanedProps extends GtkContainerProps, GtkBuildableProps, GtkOrientableProps {
    position?: number;
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
    expand?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkPreviewConstructOnly = GtkWidgetConstructOnly | GtkBuildableConstructOnly;

export interface GtkProgressProps extends GtkWidgetProps, GtkBuildableProps {
    'activity-mode'?: boolean;
    'show-text'?: boolean;
    'text-xalign'?: number;
    'text-yalign'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkProgressConstructOnly = GtkWidgetConstructOnly | GtkBuildableConstructOnly;

export interface GtkProgressBarProps extends GtkProgressProps, GtkBuildableProps {
    'activity-blocks'?: number;
    'activity-step'?: number;
    adjustment?: Gtk.Adjustment;
    'bar-style'?: GtkProgressBarStyleNick | Gtk.ProgressBarStyle;
    'discrete-blocks'?: number;
    /**
     * The preferred place to ellipsize the string, if the progressbar does not have enough room to display the entire string, specified as a #PangoEllisizeMode.
     * @since 2.6
     */
    ellipsize?: PangoEllipsizeModeNick | Pango.EllipsizeMode;
    fraction?: number;
    orientation?: GtkProgressBarOrientationNick | Gtk.ProgressBarOrientation;
    'pulse-step'?: number;
    text?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkProgressBarConstructOnly = GtkProgressConstructOnly | GtkBuildableConstructOnly;

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
     */
    'fill-level'?: number;
    inverted?: boolean;
    'lower-stepper-sensitivity'?: GtkSensitivityTypeNick | Gtk.SensitivityType;
    /**
     * The restrict-to-fill-level property controls whether slider movement is restricted to an upper boundary set by the fill level.
     * @since 2.12
     */
    'restrict-to-fill-level'?: boolean;
    /**
     * The number of digits to round the value to when it changes, or -1.
     * @since 2.24
     */
    'round-digits'?: number;
    /**
     * The show-fill-level property controls whether fill level indicator graphics are displayed on the trough.
     * @since 2.12
     */
    'show-fill-level'?: boolean;
    'update-policy'?: GtkUpdateTypeNick | Gtk.UpdateType;
    'upper-stepper-sensitivity'?: GtkSensitivityTypeNick | Gtk.SensitivityType;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkRangeConstructOnly = GtkWidgetConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

export interface GtkRecentChooserProps {
    /**
     * The #GtkRecentFilter object to be used when displaying the recently used resources.
     * @since 2.10
     */
    filter?: Gtk.RecentFilter;
    /**
     * The maximum number of recently used resources to be displayed, or -1 to display all items.
     * @since 2.10
     */
    limit?: number;
    /**
     * Whether this #GtkRecentChooser should display only local (file:) resources.
     * @since 2.10
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
     */
    'select-multiple'?: boolean;
    /**
     * Whether this #GtkRecentChooser should display an icon near the item.
     * @since 2.10
     */
    'show-icons'?: boolean;
    /**
     * Whether this #GtkRecentChooser should display the recently used resources even if not present anymore.
     * @since 2.10
     */
    'show-not-found'?: boolean;
    'show-private'?: boolean;
    /**
     * Whether this #GtkRecentChooser should display a tooltip containing the full path of the recently used resources.
     * @since 2.10
     */
    'show-tips'?: boolean;
    /**
     * Sorting order to be used when displaying the recently used resources.
     * @since 2.10
     */
    'sort-type'?: GtkRecentSortTypeNick | Gtk.RecentSortType;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkRecentChooserConstructOnly = 'recent-manager';

export interface GtkRecentChooserDialogProps extends GtkDialogProps, GtkBuildableProps, GtkRecentChooserProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkRecentChooserDialogConstructOnly = GtkDialogConstructOnly | GtkBuildableConstructOnly | GtkRecentChooserConstructOnly;

export interface GtkRecentChooserMenuProps extends GtkMenuProps, GtkActivatableProps, GtkBuildableProps, GtkRecentChooserProps {
    /**
     * Whether the first ten items in the menu should be prepended by a number acting as a unique mnemonic.
     * @since 2.10
     */
    'show-numbers'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkRecentChooserMenuConstructOnly = GtkMenuConstructOnly | GtkActivatableConstructOnly | GtkBuildableConstructOnly | GtkRecentChooserConstructOnly;

export interface GtkRecentChooserWidgetProps extends GtkVBoxProps, GtkBuildableProps, GtkOrientableProps, GtkRecentChooserProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkRecentChooserWidgetConstructOnly = GtkVBoxConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly | GtkRecentChooserConstructOnly;

export interface GtkRulerProps extends GtkWidgetProps, GtkBuildableProps, GtkOrientableProps {
    lower?: number;
    'max-size'?: number;
    /**
     * The metric used for the ruler.
     * @since 2.8
     */
    metric?: GtkMetricTypeNick | Gtk.MetricType;
    position?: number;
    upper?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkRulerConstructOnly = GtkWidgetConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

export interface GtkScaleProps extends GtkRangeProps, GtkBuildableProps, GtkOrientableProps {
    digits?: number;
    'draw-value'?: boolean;
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
    size?: GtkIconSizeNick | Gtk.IconSize;
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
    'hscrollbar-policy'?: GtkPolicyTypeNick | Gtk.PolicyType;
    'shadow-type'?: GtkShadowTypeNick | Gtk.ShadowType;
    vadjustment?: Gtk.Adjustment;
    'vscrollbar-policy'?: GtkPolicyTypeNick | Gtk.PolicyType;
    'window-placement'?: GtkCornerTypeNick | Gtk.CornerType;
    /**
     * Whether "window-placement" should be used to determine the location of the contents with respect to the scrollbars.
     * @since 2.10
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
    draw?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSeparatorToolItemConstructOnly = GtkToolItemConstructOnly | GtkActivatableConstructOnly | GtkBuildableConstructOnly;

/** Together with #GtkPlug, #GtkSocket provides the ability to embed widgets from one process into another process in a fashion that is transparent to the user. */
export interface GtkSocketProps extends GtkContainerProps, GtkBuildableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSocketConstructOnly = GtkContainerConstructOnly | GtkBuildableConstructOnly;

export interface GtkSpinButtonProps extends GtkEntryProps, GtkBuildableProps, GtkCellEditableProps, GtkEditableProps {
    adjustment?: Gtk.Adjustment;
    'climb-rate'?: number;
    digits?: number;
    numeric?: boolean;
    'snap-to-ticks'?: boolean;
    'update-policy'?: GtkSpinButtonUpdatePolicyNick | Gtk.SpinButtonUpdatePolicy;
    value?: number;
    wrap?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSpinButtonConstructOnly = GtkEntryConstructOnly | GtkBuildableConstructOnly | GtkCellEditableConstructOnly | GtkEditableConstructOnly;

/** A GtkSpinner widget displays an icon-size spinning animation. */
export interface GtkSpinnerProps extends GtkDrawingAreaProps, GtkBuildableProps {
    active?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSpinnerConstructOnly = GtkDrawingAreaConstructOnly | GtkBuildableConstructOnly;

export interface GtkStatusbarProps extends GtkHBoxProps, GtkBuildableProps, GtkOrientableProps {
    /**
     * Whether the statusbar has a grip for resizing the toplevel window.
     * @since 2.4
     */
    'has-resize-grip'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkStatusbarConstructOnly = GtkHBoxConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

export interface GtkTableProps extends GtkContainerProps, GtkBuildableProps {
    'column-spacing'?: number;
    homogeneous?: boolean;
    'n-columns'?: number;
    'n-rows'?: number;
    'row-spacing'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkTableConstructOnly = GtkContainerConstructOnly | GtkBuildableConstructOnly;

export interface GtkTearoffMenuItemProps extends GtkMenuItemProps, GtkActivatableProps, GtkBuildableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkTearoffMenuItemConstructOnly = GtkMenuItemConstructOnly | GtkActivatableConstructOnly | GtkBuildableConstructOnly;

export interface GtkTextViewProps extends GtkContainerProps, GtkBuildableProps {
    'accepts-tab'?: boolean;
    buffer?: Gtk.TextBuffer;
    'cursor-visible'?: boolean;
    editable?: boolean;
    /**
     * Which IM (input method) module should be used for this entry.
     * @since 2.16
     */
    'im-module'?: string;
    indent?: number;
    justification?: GtkJustificationNick | Gtk.Justification;
    'left-margin'?: number;
    overwrite?: boolean;
    'pixels-above-lines'?: number;
    'pixels-below-lines'?: number;
    'pixels-inside-wrap'?: number;
    'right-margin'?: number;
    tabs?: Pango.TabArray;
    'wrap-mode'?: GtkWrapModeNick | Gtk.WrapMode;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkTextViewConstructOnly = GtkContainerConstructOnly | GtkBuildableConstructOnly;

export interface GtkTipsQueryProps extends GtkLabelProps, GtkBuildableProps {
    caller?: Gtk.Widget;
    'emit-always'?: boolean;
    'label-inactive'?: string;
    'label-no-tip'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkTipsQueryConstructOnly = GtkLabelConstructOnly | GtkBuildableConstructOnly;

export interface GtkToggleButtonProps extends GtkButtonProps, GtkActivatableProps, GtkBuildableProps {
    active?: boolean;
    'draw-indicator'?: boolean;
    inconsistent?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkToggleButtonConstructOnly = GtkButtonConstructOnly | GtkActivatableConstructOnly | GtkBuildableConstructOnly;

export interface GtkToggleToolButtonProps extends GtkToolButtonProps, GtkActivatableProps, GtkBuildableProps {
    /**
     * If the toggle tool button should be pressed in or not.
     * @since 2.8
     */
    active?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkToggleToolButtonConstructOnly = GtkToolButtonConstructOnly | GtkActivatableConstructOnly | GtkBuildableConstructOnly;

export interface GtkToolButtonProps extends GtkToolItemProps, GtkActivatableProps, GtkBuildableProps {
    /**
     * The name of the themed icon displayed on the item.
     * @since 2.8
     */
    'icon-name'?: string;
    'icon-widget'?: Gtk.Widget;
    label?: string;
    'label-widget'?: Gtk.Widget;
    'stock-id'?: string;
    'use-underline'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkToolButtonConstructOnly = GtkToolItemConstructOnly | GtkActivatableConstructOnly | GtkBuildableConstructOnly;

/** #GtkToolItem<!-- -->s are widgets that can appear on a toolbar. */
export interface GtkToolItemProps extends GtkBinProps, GtkActivatableProps, GtkBuildableProps {
    'is-important'?: boolean;
    'visible-horizontal'?: boolean;
    'visible-vertical'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkToolItemConstructOnly = GtkBinConstructOnly | GtkActivatableConstructOnly | GtkBuildableConstructOnly;

/** A #GtkToolItemGroup is used together with #GtkToolPalette to add #GtkToolItem<!-- -->s to a palette like container with different categories and drag and drop support. */
export interface GtkToolItemGroupProps extends GtkContainerProps, GtkBuildableProps, GtkToolShellProps {
    collapsed?: boolean;
    ellipsize?: PangoEllipsizeModeNick | Pango.EllipsizeMode;
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
     */
    'icon-size'?: GtkIconSizeNick | Gtk.IconSize;
    /**
     * Is %TRUE if the #GtkToolPalette:icon-size property has been set.
     * @since 2.20
     */
    'icon-size-set'?: boolean;
    /**
     * The style of items in the tool palette.
     * @since 2.20
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
     */
    'icon-size'?: number;
    /**
     * Is %TRUE if the icon-size property has been set.
     * @since 2.10
     */
    'icon-size-set'?: boolean;
    'show-arrow'?: boolean;
    'toolbar-style'?: GtkToolbarStyleNick | Gtk.ToolbarStyle;
    /**
     * If the tooltips of the toolbar should be active or not.
     * @since 2.8
     */
    tooltips?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkToolbarConstructOnly = GtkContainerConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly | GtkToolShellConstructOnly;

export interface GtkTreeViewProps extends GtkContainerProps, GtkBuildableProps {
    'enable-grid-lines'?: GtkTreeViewGridLinesNick | Gtk.TreeViewGridLines;
    'enable-search'?: boolean;
    'enable-tree-lines'?: boolean;
    'expander-column'?: Gtk.TreeViewColumn;
    /**
     * Setting the ::fixed-height-mode property to %TRUE speeds up #GtkTreeView by assuming that all rows have the same height.
     * @since 2.4
     */
    'fixed-height-mode'?: boolean;
    hadjustment?: Gtk.Adjustment;
    'headers-clickable'?: boolean;
    'headers-visible'?: boolean;
    /**
     * Enables of disables the hover expansion mode of @tree_view.
     * @since 2.6
     */
    'hover-expand'?: boolean;
    /**
     * Enables of disables the hover selection mode of @tree_view.
     * @since 2.6
     */
    'hover-selection'?: boolean;
    /**
     * Extra indentation for each level.
     * @since 2.12
     */
    'level-indentation'?: number;
    model?: Gtk.TreeModel;
    reorderable?: boolean;
    'rubber-banding'?: boolean;
    'rules-hint'?: boolean;
    'search-column'?: number;
    /**
     * %TRUE if the view has expanders.
     * @since 2.12
     */
    'show-expanders'?: boolean;
    'tooltip-column'?: number;
    vadjustment?: Gtk.Adjustment;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkTreeViewConstructOnly = GtkContainerConstructOnly | GtkBuildableConstructOnly;

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
    'app-paintable'?: boolean;
    'can-default'?: boolean;
    'can-focus'?: boolean;
    /**
     * Whether or not the widget is double buffered.
     * @since 2.18
     */
    'double-buffered'?: boolean;
    events?: number;
    'extension-events'?: GdkExtensionModeNick | Gdk.ExtensionMode;
    'has-default'?: boolean;
    'has-focus'?: boolean;
    /**
     * Enables or disables the emission of #GtkWidget::query-tooltip on @widget.
     * @since 2.12
     */
    'has-tooltip'?: boolean;
    'height-request'?: number;
    'is-focus'?: boolean;
    name?: string;
    'no-show-all'?: boolean;
    parent?: Gtk.Container;
    'receives-default'?: boolean;
    sensitive?: boolean;
    style?: Gtk.Style;
    /**
     * Sets the text of tooltip to be the given string, which is marked up with the <link linkend="PangoMarkupFormat">Pango text markup language</link>.
     * @since 2.12
     */
    'tooltip-markup'?: string;
    /**
     * Sets the text of tooltip to be the given string.
     * @since 2.12
     */
    'tooltip-text'?: string;
    visible?: boolean;
    'width-request'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkWidgetConstructOnly = GtkObjectConstructOnly | GtkBuildableConstructOnly;

export interface GtkWindowProps extends GtkBinProps, GtkBuildableProps {
    /**
     * Whether the window should receive the input focus.
     * @since 2.4
     */
    'accept-focus'?: boolean;
    /** If %TRUE, users can expand the window beyond its minimum size. */
    'allow-grow'?: boolean;
    /** If %TRUE, the window has no mimimum size. */
    'allow-shrink'?: boolean;
    /**
     * Whether the window should be decorated by the window manager.
     * @since 2.4
     */
    decorated?: boolean;
    'default-height'?: number;
    'default-width'?: number;
    /**
     * Whether the window frame should have a close button.
     * @since 2.10
     */
    deletable?: boolean;
    'destroy-with-parent'?: boolean;
    /**
     * Whether the window should receive the input focus when mapped.
     * @since 2.6
     */
    'focus-on-map'?: boolean;
    /**
     * The window gravity of the window.
     * @since 2.4
     */
    gravity?: GdkGravityNick | Gdk.Gravity;
    icon?: GdkPixbuf.Pixbuf;
    /**
     * The :icon-name property specifies the name of the themed icon to use as the window icon.
     * @since 2.6
     */
    'icon-name'?: string;
    'mnemonics-visible'?: boolean;
    modal?: boolean;
    /**
     * The requested opacity of the window.
     * @since 2.12
     */
    opacity?: number;
    resizable?: boolean;
    role?: string;
    screen?: Gdk.Screen;
    'skip-pager-hint'?: boolean;
    'skip-taskbar-hint'?: boolean;
    /**
     * The :startup-id is a write-only property for setting window's startup notification identifier.
     * @since 2.12
     */
    'startup-id'?: string;
    title?: string;
    /**
     * The transient parent of the window.
     * @since 2.10
     */
    'transient-for'?: Gtk.Window;
    type?: GtkWindowTypeNick | Gtk.WindowType;
    'type-hint'?: GdkWindowTypeHintNick | Gdk.WindowTypeHint;
    'urgency-hint'?: boolean;
    'window-position'?: GtkWindowPositionNick | Gtk.WindowPosition;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkWindowConstructOnly = GtkBinConstructOnly | GtkBuildableConstructOnly | 'type';

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
