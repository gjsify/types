/**
 * The GIR-derived widget VOCABULARY for Gtk-4.0.
 *
 * GENERATED — do not edit. Provenance: Gtk-4.0 — library 4.23.3 — 3 child holder(s) — dropped empty base(s): Gdk.Snapshot
 *
 * 255 instantiable GTypes (of which 103 concrete widgets and 3 child holders), 298 declarations, 102 enum nick unions, 63 slot candidates.
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

import type GLib from '@girs/glib-2.0';
import type GObject from '@girs/gobject-2.0';
import type Gdk from '@girs/gdk-4.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type Gio from '@girs/gio-2.0';
import type Gsk from '@girs/gsk-4.0';
import type Gtk from './gtk-4.0.js';
import type Pango from '@girs/pango-1.0';
import type { GdkPaintableConstructOnly, GdkPaintableProps } from '@girs/gdk-4.0/vocabulary';
import type { GActionGroupConstructOnly, GActionGroupProps, GActionMapConstructOnly, GActionMapProps, GApplicationConstructOnly, GApplicationProps, GListModelConstructOnly, GListModelProps, GMountOperationConstructOnly, GMountOperationProps } from '@girs/gio-2.0/vocabulary';
import type { GInitiallyUnownedConstructOnly, GInitiallyUnownedProps, GObjectConstructOnly, GObjectProps, GParamConstructOnly, GParamProps } from '@girs/gobject-2.0/vocabulary';
import type { PangoAlignmentNick, PangoEllipsizeModeNick, PangoOverlineNick, PangoStretchNick, PangoStyleNick, PangoTextTransformNick, PangoUnderlineNick, PangoVariantNick, PangoWrapModeNick } from '@girs/pango-1.0/vocabulary';

// ---------------------------------------------------------------------------
// Enum nicks — the string vocabulary GObject registered, from GIR's `glib:nick`.
//
// Not derived from the member name. Substituting underscores for dashes is not a law:
// some nicks keep an underscore the substitution would have replaced, and only the
// attribute knows which. Gtk-4.0 and Adw-1 contradict no derivation at all, which is
// how a derived nick passes review and breaks elsewhere.
// Re-measure with `scripts/check-nick-derivation.mjs` in ts-for-gir.
// ---------------------------------------------------------------------------

export type GtkAccessibleAnnouncementPriorityNick = 'low' | 'medium' | 'high';
export type GtkAccessibleAutocompleteNick = 'none' | 'inline' | 'list' | 'both';
export type GtkAccessibleInvalidStateNick = 'false' | 'true' | 'grammar' | 'spelling';
export type GtkAccessiblePlatformStateNick = 'focusable' | 'focused' | 'active';
export type GtkAccessiblePropertyNick = 'autocomplete' | 'description' | 'has-popup' | 'key-shortcuts' | 'label' | 'level' | 'modal' | 'multi-line' | 'multi-selectable' | 'orientation' | 'placeholder' | 'read-only' | 'required' | 'role-description' | 'sort' | 'value-max' | 'value-min' | 'value-now' | 'value-text' | 'help-text';
export type GtkAccessibleRelationNick = 'active-descendant' | 'col-count' | 'col-index' | 'col-index-text' | 'col-span' | 'controls' | 'described-by' | 'details' | 'error-message' | 'flow-to' | 'labelled-by' | 'owns' | 'pos-in-set' | 'row-count' | 'row-index' | 'row-index-text' | 'row-span' | 'set-size' | 'label-for' | 'description-for' | 'controlled-by' | 'details-for' | 'error-message-for' | 'flow-from';
export type GtkAccessibleRoleNick = 'alert' | 'alert-dialog' | 'banner' | 'button' | 'caption' | 'cell' | 'checkbox' | 'column-header' | 'combo-box' | 'command' | 'composite' | 'dialog' | 'document' | 'feed' | 'form' | 'generic' | 'grid' | 'grid-cell' | 'group' | 'heading' | 'img' | 'input' | 'label' | 'landmark' | 'legend' | 'link' | 'list' | 'list-box' | 'list-item' | 'log' | 'main' | 'marquee' | 'math' | 'meter' | 'menu' | 'menu-bar' | 'menu-item' | 'menu-item-checkbox' | 'menu-item-radio' | 'navigation' | 'none' | 'note' | 'option' | 'presentation' | 'progress-bar' | 'radio' | 'radio-group' | 'range' | 'region' | 'row' | 'row-group' | 'row-header' | 'scrollbar' | 'search' | 'search-box' | 'section' | 'section-head' | 'select' | 'separator' | 'slider' | 'spin-button' | 'status' | 'structure' | 'switch' | 'tab' | 'table' | 'tab-list' | 'tab-panel' | 'text-box' | 'time' | 'timer' | 'toolbar' | 'tooltip' | 'tree' | 'tree-grid' | 'tree-item' | 'widget' | 'window' | 'toggle-button' | 'application' | 'paragraph' | 'block-quote' | 'article' | 'comment' | 'terminal';
export type GtkAccessibleSortNick = 'none' | 'ascending' | 'descending' | 'other';
export type GtkAccessibleStateNick = 'busy' | 'checked' | 'disabled' | 'expanded' | 'hidden' | 'invalid' | 'pressed' | 'selected' | 'visited';
export type GtkAccessibleTextContentChangeNick = 'insert' | 'remove';
export type GtkAccessibleTextGranularityNick = 'character' | 'word' | 'sentence' | 'line' | 'paragraph';
export type GtkAccessibleTristateNick = 'false' | 'true' | 'mixed';
export type GtkAlignNick = 'fill' | 'start' | 'end' | 'center' | 'baseline-fill' | 'baseline' | 'baseline-center';
export type GtkArrowTypeNick = 'up' | 'down' | 'left' | 'right' | 'none';
export type GtkAssistantPageTypeNick = 'content' | 'intro' | 'confirm' | 'summary' | 'progress' | 'custom';
export type GtkBaselinePositionNick = 'top' | 'center' | 'bottom';
export type GtkBorderStyleNick = 'none' | 'hidden' | 'solid' | 'inset' | 'outset' | 'dotted' | 'dashed' | 'double' | 'groove' | 'ridge';
export type GtkButtonsTypeNick = 'none' | 'ok' | 'close' | 'cancel' | 'yes-no' | 'ok-cancel';
export type GtkCellRendererAccelModeNick = 'gtk' | 'other';
export type GtkCellRendererModeNick = 'inert' | 'activatable' | 'editable';
export type GtkCollationNick = 'none' | 'unicode' | 'filename';
export type GtkConstraintAttributeNick = 'none' | 'left' | 'right' | 'top' | 'bottom' | 'start' | 'end' | 'width' | 'height' | 'center-x' | 'center-y' | 'baseline';
export type GtkConstraintRelationNick = 'le' | 'eq' | 'ge';
export type GtkConstraintStrengthNick = 'required' | 'strong' | 'medium' | 'weak';
export type GtkContentFitNick = 'fill' | 'contain' | 'cover' | 'scale-down';
export type GtkCornerTypeNick = 'top-left' | 'bottom-left' | 'top-right' | 'bottom-right';
export type GtkDeleteTypeNick = 'chars' | 'word-ends' | 'words' | 'display-lines' | 'display-line-ends' | 'paragraph-ends' | 'paragraphs' | 'whitespace';
export type GtkDirectionTypeNick = 'tab-forward' | 'tab-backward' | 'up' | 'down' | 'left' | 'right';
export type GtkEditablePropertiesNick = 'prop-text' | 'prop-cursor-position' | 'prop-selection-bound' | 'prop-editable' | 'prop-width-chars' | 'prop-max-width-chars' | 'prop-xalign' | 'prop-enable-undo' | 'prop-complete-text' | 'prop-input-interceptor' | 'num-properties';
export type GtkEntryIconPositionNick = 'primary' | 'secondary';
export type GtkEventSequenceStateNick = 'none' | 'claimed' | 'denied';
export type GtkFileChooserActionNick = 'open' | 'save' | 'select-folder';
export type GtkFilterChangeNick = 'different' | 'less-strict' | 'more-strict' | 'different-rewatch' | 'less-strict-rewatch' | 'more-strict-rewatch';
export type GtkFilterMatchNick = 'some' | 'none' | 'all';
export type GtkFontLevelNick = 'family' | 'face' | 'font' | 'features';
export type GtkFontRenderingNick = 'automatic' | 'manual';
export type GtkGraphicsOffloadEnabledNick = 'enabled' | 'disabled';
export type GtkIconSizeNick = 'inherit' | 'normal' | 'large';
export type GtkIconViewDropPositionNick = 'no-drop' | 'drop-into' | 'drop-left' | 'drop-right' | 'drop-above' | 'drop-below';
export type GtkImageTypeNick = 'empty' | 'icon-name' | 'gicon' | 'paintable';
export type GtkInputPurposeNick = 'free-form' | 'alpha' | 'digits' | 'number' | 'phone' | 'url' | 'email' | 'name' | 'password' | 'pin' | 'terminal';
export type GtkInscriptionOverflowNick = 'clip' | 'ellipsize-start' | 'ellipsize-middle' | 'ellipsize-end';
export type GtkInterfaceColorSchemeNick = 'unsupported' | 'default' | 'dark' | 'light';
export type GtkInterfaceContrastNick = 'unsupported' | 'no-preference' | 'more' | 'less';
export type GtkJustificationNick = 'left' | 'right' | 'center' | 'fill';
export type GtkLevelBarModeNick = 'continuous' | 'discrete';
export type GtkLicenseNick = 'unknown' | 'custom' | 'gpl-2-0' | 'gpl-3-0' | 'lgpl-2-1' | 'lgpl-3-0' | 'bsd' | 'mit-x11' | 'artistic' | 'gpl-2-0-only' | 'gpl-3-0-only' | 'lgpl-2-1-only' | 'lgpl-3-0-only' | 'agpl-3-0' | 'agpl-3-0-only' | 'bsd-3' | 'apache-2-0' | 'mpl-2-0' | '0bsd';
export type GtkListTabBehaviorNick = 'all' | 'item' | 'cell';
export type GtkMessageTypeNick = 'info' | 'warning' | 'question' | 'error' | 'other';
export type GtkMovementStepNick = 'logical-positions' | 'visual-positions' | 'words' | 'display-lines' | 'display-line-ends' | 'paragraphs' | 'paragraph-ends' | 'pages' | 'buffer-ends' | 'horizontal-pages';
export type GtkNaturalWrapModeNick = 'inherit' | 'none' | 'word';
export type GtkNotebookTabNick = 'first' | 'last';
export type GtkNumberUpLayoutNick = 'lrtb' | 'lrbt' | 'rltb' | 'rlbt' | 'tblr' | 'tbrl' | 'btlr' | 'btrl';
export type GtkOrderingNick = 'smaller' | 'equal' | 'larger';
export type GtkOrientationNick = 'horizontal' | 'vertical';
export type GtkOverflowNick = 'visible' | 'hidden';
export type GtkPackTypeNick = 'start' | 'end';
export type GtkPadActionTypeNick = 'button' | 'ring' | 'strip' | 'dial';
export type GtkPageOrientationNick = 'portrait' | 'landscape' | 'reverse-portrait' | 'reverse-landscape';
export type GtkPageSetNick = 'all' | 'even' | 'odd';
export type GtkPanDirectionNick = 'left' | 'right' | 'up' | 'down';
export type GtkPolicyTypeNick = 'always' | 'automatic' | 'never' | 'external';
export type GtkPositionTypeNick = 'left' | 'right' | 'top' | 'bottom';
export type GtkPrintDuplexNick = 'simplex' | 'horizontal' | 'vertical';
export type GtkPrintOperationActionNick = 'print-dialog' | 'print' | 'preview' | 'export';
export type GtkPrintOperationResultNick = 'error' | 'apply' | 'cancel' | 'in-progress';
export type GtkPrintPagesNick = 'all' | 'current' | 'ranges' | 'selection';
export type GtkPrintQualityNick = 'low' | 'normal' | 'high' | 'draft';
export type GtkPrintStatusNick = 'initial' | 'preparing' | 'generating-data' | 'sending-data' | 'pending' | 'pending-issue' | 'printing' | 'finished' | 'finished-aborted';
export type GtkPropagationLimitNick = 'none' | 'same-native';
export type GtkPropagationPhaseNick = 'none' | 'capture' | 'bubble' | 'target';
export type GtkReducedMotionNick = 'no-preference' | 'reduce';
export type GtkResponseTypeNick = 'none' | 'reject' | 'accept' | 'delete-event' | 'ok' | 'cancel' | 'close' | 'yes' | 'no' | 'apply' | 'help';
export type GtkRevealerTransitionTypeNick = 'none' | 'crossfade' | 'slide-right' | 'slide-left' | 'slide-up' | 'slide-down' | 'swing-right' | 'swing-left' | 'swing-up' | 'swing-down' | 'fade-slide-right' | 'fade-slide-left' | 'fade-slide-up' | 'fade-slide-down';
export type GtkScrollStepNick = 'steps' | 'pages' | 'ends' | 'horizontal-steps' | 'horizontal-pages' | 'horizontal-ends';
export type GtkScrollTypeNick = 'none' | 'jump' | 'step-backward' | 'step-forward' | 'page-backward' | 'page-forward' | 'step-up' | 'step-down' | 'page-up' | 'page-down' | 'step-left' | 'step-right' | 'page-left' | 'page-right' | 'start' | 'end';
export type GtkScrollablePolicyNick = 'minimum' | 'natural';
export type GtkSelectionModeNick = 'none' | 'single' | 'browse' | 'multiple';
export type GtkSensitivityTypeNick = 'auto' | 'on' | 'off';
export type GtkShortcutScopeNick = 'local' | 'managed' | 'global';
export type GtkShortcutTypeNick = 'accelerator' | 'gesture-pinch' | 'gesture-stretch' | 'gesture-rotate-clockwise' | 'gesture-rotate-counterclockwise' | 'gesture-two-finger-swipe-left' | 'gesture-two-finger-swipe-right' | 'gesture' | 'gesture-swipe-left' | 'gesture-swipe-right';
export type GtkSizeGroupModeNick = 'none' | 'horizontal' | 'vertical' | 'both';
export type GtkSizeRequestModeNick = 'height-for-width' | 'width-for-height' | 'constant-size';
export type GtkSortTypeNick = 'ascending' | 'descending';
export type GtkSorterChangeNick = 'different' | 'inverted' | 'less-strict' | 'more-strict';
export type GtkSorterOrderNick = 'partial' | 'none' | 'total';
export type GtkSpinButtonUpdatePolicyNick = 'always' | 'if-valid';
export type GtkSpinTypeNick = 'step-forward' | 'step-backward' | 'page-forward' | 'page-backward' | 'home' | 'end' | 'user-defined';
export type GtkStackTransitionTypeNick = 'none' | 'crossfade' | 'slide-right' | 'slide-left' | 'slide-up' | 'slide-down' | 'slide-left-right' | 'slide-up-down' | 'over-up' | 'over-down' | 'over-left' | 'over-right' | 'under-up' | 'under-down' | 'under-left' | 'under-right' | 'over-up-down' | 'over-down-up' | 'over-left-right' | 'over-right-left' | 'rotate-left' | 'rotate-right' | 'rotate-left-right';
export type GtkStringFilterMatchModeNick = 'exact' | 'substring' | 'prefix';
export type GtkSymbolicColorNick = 'foreground' | 'error' | 'warning' | 'success' | 'accent';
export type GtkSystemSettingNick = 'dpi' | 'font-name' | 'font-config' | 'display' | 'icon-theme';
export type GtkTextDirectionNick = 'none' | 'ltr' | 'rtl';
export type GtkTextExtendSelectionNick = 'word' | 'line';
export type GtkTextViewLayerNick = 'below-text' | 'above-text';
export type GtkTextWindowTypeNick = 'widget' | 'text' | 'left' | 'right' | 'top' | 'bottom';
export type GtkTreeViewColumnSizingNick = 'grow-only' | 'autosize' | 'fixed';
export type GtkTreeViewDropPositionNick = 'before' | 'after' | 'into-or-before' | 'into-or-after';
export type GtkTreeViewGridLinesNick = 'none' | 'horizontal' | 'vertical' | 'both';
export type GtkUnitNick = 'none' | 'points' | 'inch' | 'mm';
export type GtkWindowGravityNick = 'top-left' | 'top' | 'top-right' | 'left' | 'center' | 'right' | 'bottom-left' | 'bottom' | 'bottom-right' | 'top-start' | 'top-end' | 'start' | 'end' | 'bottom-start' | 'bottom-end';
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

/** Displays information about a program. */
export interface GtkAboutDialogProps extends GtkWindowProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkNativeProps, GtkRootProps, GtkShortcutManagerProps {
    /** The people who contributed artwork to the program. */
    artists?: string[];
    /** The authors of the program. */
    authors?: string[];
    /**
     * Comments about the program.
     * @default NULL
     */
    comments?: string | null;
    /**
     * Copyright information for the program.
     * @default NULL
     */
    copyright?: string | null;
    /** The people documenting the program. */
    documenters?: string[];
    /**
     * The license of the program, as free-form text.
     * @default NULL
     */
    license?: string | null;
    /**
     * The license of the program.
     * @default GTK_LICENSE_UNKNOWN
     */
    'license-type'?: GtkLicenseNick | Gtk.License;
    /** A logo for the about box. */
    logo?: Gdk.Paintable | null;
    /**
     * A named icon to use as the logo for the about box.
     * @default NULL
     */
    'logo-icon-name'?: string | null;
    /**
     * The name of the program.
     * @default NULL
     */
    'program-name'?: string | null;
    /**
     * Information about the system on which the program is running.
     * @default NULL
     */
    'system-information'?: string | null;
    /**
     * Credits to the translators.
     * @default NULL
     */
    'translator-credits'?: string | null;
    /**
     * The version of the program.
     * @default NULL
     */
    version?: string | null;
    /**
     * The URL for the link to the website of the program.
     * @default NULL
     */
    website?: string | null;
    /**
     * The label for the link to the website of the program.
     * @default NULL
     */
    'website-label'?: string | null;
    /**
     * Whether to wrap the text in the license dialog.
     * @default FALSE
     */
    'wrap-license'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkAboutDialogConstructOnly = GtkWindowConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkNativeConstructOnly | GtkRootConstructOnly | GtkShortcutManagerConstructOnly;

/** An interface for describing UI elements for Assistive Technologies. */
export interface GtkAccessibleProps extends GObjectProps {
    /**
     * The accessible role of the given `GtkAccessible` implementation.
     * @default GTK_ACCESSIBLE_ROLE_NONE
     */
    'accessible-role'?: GtkAccessibleRoleNick | Gtk.AccessibleRole;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkAccessibleConstructOnly = GObjectConstructOnly;

/** Represents a link (i.e. */
export interface GtkAccessibleHyperlinkProps extends GObjectProps, GtkAccessibleProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkAccessibleHyperlinkConstructOnly = GObjectConstructOnly | GtkAccessibleConstructOnly;

/** An interface for accessible objects containing links. */
export interface GtkAccessibleHypertextProps extends GtkAccessibleProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkAccessibleHypertextConstructOnly = GtkAccessibleConstructOnly;

/** An interface for accessible objects containing a numeric value. */
export interface GtkAccessibleRangeProps extends GtkAccessibleProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkAccessibleRangeConstructOnly = GtkAccessibleConstructOnly;

/** An interface for accessible objects containing formatted text. */
export interface GtkAccessibleTextProps extends GtkAccessibleProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkAccessibleTextConstructOnly = GtkAccessibleConstructOnly;

/** Presents contextual actions. */
export interface GtkActionBarProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /**
     * Controls whether the action bar shows its contents.
     * @default TRUE
     */
    revealed?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkActionBarConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** Provides a way to associate widgets with actions. */
export interface GtkActionableProps extends GtkWidgetProps {
    /**
     * The name of the action with which this widget should be associated.
     * @default NULL
     */
    'action-name'?: string | null;
    /** The target value of the actionable widget's action. */
    'action-target'?: GLib.Variant;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkActionableConstructOnly = GtkWidgetConstructOnly;

/** Activates a widget. */
export interface GtkActivateActionProps extends GtkShortcutActionProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkActivateActionConstructOnly = GtkShortcutActionConstructOnly;

/** A model for a numeric value. */
export interface GtkAdjustmentProps extends GInitiallyUnownedProps {
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
export type GtkAdjustmentConstructOnly = GInitiallyUnownedConstructOnly;

/** Collects the arguments that are needed to present a message to the user. */
export interface GtkAlertDialogProps extends GObjectProps {
    /**
     * Labels for buttons to show in the alert.
     * @since 4.10
     */
    buttons?: string[] | null;
    /**
     * Determines what happens when the <kbd>Escape</kbd> key is pressed while the alert is shown.
     * @since 4.10
     * @default -1
     */
    'cancel-button'?: number;
    /**
     * Determines what happens when the <kbd>Return</kbd> key is pressed while the alert is shown.
     * @since 4.10
     * @default -1
     */
    'default-button'?: number;
    /**
     * The detail text for the alert.
     * @since 4.10
     * @default NULL
     */
    detail?: string;
    /**
     * The message for the alert.
     * @since 4.10
     * @default NULL
     */
    message?: string;
    /**
     * Whether the alert is modal.
     * @since 4.10
     * @default TRUE
     */
    modal?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkAlertDialogConstructOnly = GObjectConstructOnly;

/** Combines two shortcut triggers. */
export interface GtkAlternativeTriggerProps extends GtkShortcutTriggerProps, GListModelProps {
    /** The first `GtkShortcutTrigger` to check. */
    first?: Gtk.ShortcutTrigger;
    /** The second `GtkShortcutTrigger` to check. */
    second?: Gtk.ShortcutTrigger;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkAlternativeTriggerConstructOnly = GtkShortcutTriggerConstructOnly | GListModelConstructOnly | 'first' | 'second';

/** Matches an item when at least one of its filters matches. */
export interface GtkAnyFilterProps extends GtkMultiFilterProps, GListModelProps, GtkBuildableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkAnyFilterConstructOnly = GtkMultiFilterConstructOnly | GListModelConstructOnly | GtkBuildableConstructOnly;

/** `GtkAppChooser` is an interface for widgets which allow the user to choose an application. */
export interface GtkAppChooserProps extends GtkWidgetProps {
    /**
     * The content type of the `GtkAppChooser` object.
     * @default NULL
     */
    'content-type'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkAppChooserConstructOnly = GtkWidgetConstructOnly | 'content-type';

/** The `GtkAppChooserButton` lets the user select an application. */
export interface GtkAppChooserButtonProps extends GtkWidgetProps, GtkAccessibleProps, GtkAppChooserProps, GtkBuildableProps, GtkConstraintTargetProps {
    /**
     * The text to show at the top of the dialog that can be opened from the button.
     * @default NULL
     */
    heading?: string | null;
    /**
     * Whether the app chooser dialog should be modal.
     * @default TRUE
     */
    modal?: boolean;
    /**
     * Determines whether the dropdown menu shows the default application on top for the provided content type.
     * @default FALSE
     */
    'show-default-item'?: boolean;
    /**
     * Determines whether the dropdown menu shows an item to open a `GtkAppChooserDialog`.
     * @default FALSE
     */
    'show-dialog-item'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkAppChooserButtonConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkAppChooserConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** `GtkAppChooserDialog` shows a `GtkAppChooserWidget` inside a `GtkDialog`. */
export interface GtkAppChooserDialogProps extends GtkDialogProps, GtkAccessibleProps, GtkAppChooserProps, GtkBuildableProps, GtkConstraintTargetProps, GtkNativeProps, GtkRootProps, GtkShortcutManagerProps {
    /** The GFile used by the `GtkAppChooserDialog`. */
    gfile?: Gio.File;
    /**
     * The text to show at the top of the dialog.
     * @default NULL
     */
    heading?: string | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkAppChooserDialogConstructOnly = GtkDialogConstructOnly | GtkAccessibleConstructOnly | GtkAppChooserConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkNativeConstructOnly | GtkRootConstructOnly | GtkShortcutManagerConstructOnly | 'gfile';

/** `GtkAppChooserWidget` is a widget for selecting applications. */
export interface GtkAppChooserWidgetProps extends GtkWidgetProps, GtkAccessibleProps, GtkAppChooserProps, GtkBuildableProps, GtkConstraintTargetProps {
    /**
     * The text that appears in the widget when there are no applications for the given content type.
     * @default NULL
     */
    'default-text'?: string | null;
    /**
     * If %TRUE, the app chooser presents all applications in a single list, without subsections for default, recommended or related applications.
     * @default FALSE
     */
    'show-all'?: boolean;
    /**
     * Determines whether the app chooser should show the default handler for the content type in a separate section.
     * @default FALSE
     */
    'show-default'?: boolean;
    /**
     * Determines whether the app chooser should show a section for fallback applications.
     * @default FALSE
     */
    'show-fallback'?: boolean;
    /**
     * Determines whether the app chooser should show a section for other applications.
     * @default FALSE
     */
    'show-other'?: boolean;
    /**
     * Determines whether the app chooser should show a section for recommended applications.
     * @default TRUE
     */
    'show-recommended'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkAppChooserWidgetConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkAppChooserConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** A high-level API for writing applications. */
export interface GtkApplicationProps extends GApplicationProps, GActionGroupProps, GActionMapProps {
    /** The menu model to be used for the application's menu bar. */
    menubar?: Gio.MenuModel | null;
    /**
     * Set this property to true to register with the session manager.
     * @default FALSE
     * @deprecated since 4.22: This property is ignored.
     */
    'register-session'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkApplicationConstructOnly = GApplicationConstructOnly | GActionGroupConstructOnly | GActionMapConstructOnly;

/** A `GtkWindow` subclass that integrates with `GtkApplication`. */
export interface GtkApplicationWindowProps extends GtkWindowProps, GActionGroupProps, GActionMapProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkNativeProps, GtkRootProps, GtkShortcutManagerProps {
    /**
     * If this property is true, the window will display a menubar unless it is shown by the desktop shell.
     * @default FALSE
     */
    'show-menubar'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkApplicationWindowConstructOnly = GtkWindowConstructOnly | GActionGroupConstructOnly | GActionMapConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkNativeConstructOnly | GtkRootConstructOnly | GtkShortcutManagerConstructOnly;

/** Preserves the aspect ratio of its child. */
export interface GtkAspectFrameProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /** The child widget. */
    child?: Gtk.Widget | null;
    /**
     * Whether the `GtkAspectFrame` should use the aspect ratio of its child.
     * @default TRUE
     */
    'obey-child'?: boolean;
    /**
     * The aspect ratio to be used by the `GtkAspectFrame`.
     * @default 1.000000
     */
    ratio?: number;
    /**
     * The horizontal alignment of the child.
     * @default 0.500000
     */
    xalign?: number;
    /**
     * The vertical alignment of the child.
     * @default 0.500000
     */
    yalign?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkAspectFrameConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** `GtkAssistant` is used to represent a complex as a series of steps. */
export interface GtkAssistantProps extends GtkWindowProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkNativeProps, GtkRootProps, GtkShortcutManagerProps {
    /**
     * %TRUE if the assistant uses a `GtkHeaderBar` for action buttons instead of the action-area.
     * @default -1
     * @deprecated since 4.10: This widget will be removed in GTK 5
     */
    'use-header-bar'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkAssistantConstructOnly = GtkWindowConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkNativeConstructOnly | GtkRootConstructOnly | GtkShortcutManagerConstructOnly | 'use-header-bar';

/** `GtkAssistantPage` is an auxiliary object used by `GtkAssistant`. */
export interface GtkAssistantPageProps extends GObjectProps {
    /**
     * The child widget.
     * @deprecated since 4.10: This object will be removed in GTK 5
     */
    child?: Gtk.Widget;
    /**
     * Whether all required fields are filled in.
     * @default FALSE
     * @deprecated since 4.10: This object will be removed in GTK 5
     */
    complete?: boolean;
    /**
     * The type of the assistant page.
     * @default GTK_ASSISTANT_PAGE_CONTENT
     * @deprecated since 4.10: This object will be removed in GTK 5
     */
    'page-type'?: GtkAssistantPageTypeNick | Gtk.AssistantPageType;
    /**
     * The title of the page.
     * @default NULL
     * @deprecated since 4.10: This object will be removed in GTK 5
     */
    title?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkAssistantPageConstructOnly = GObjectConstructOnly | 'child';

/** A layout manager for widgets with a single child. */
export interface GtkBinLayoutProps extends GtkLayoutManagerProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkBinLayoutConstructOnly = GtkLayoutManagerConstructOnly;

/** A list model that wraps `GBookmarkFile`. */
export interface GtkBookmarkListProps extends GObjectProps, GListModelProps {
    /**
     * The attributes to query.
     * @default NULL
     */
    attributes?: string | null;
    /**
     * The bookmark file to load.
     * @default NULL
     */
    filename?: string;
    /**
     * Priority used when loading.
     * @default 0
     */
    'io-priority'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkBookmarkListConstructOnly = GObjectConstructOnly | GListModelConstructOnly | 'filename';

/** Evaluates a boolean expression to determine whether to include items. */
export interface GtkBoolFilterProps extends GtkFilterProps {
    /** The boolean expression to evaluate on each item. */
    expression?: Gtk.Expression | null;
    /**
     * If the expression result should be inverted.
     * @default FALSE
     */
    invert?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkBoolFilterConstructOnly = GtkFilterConstructOnly;

/** Arranges child widgets into a single row or column. */
export interface GtkBoxProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkOrientableProps {
    /**
     * The position of the child that determines the baseline.
     * @since 4.12
     * @default -1
     */
    'baseline-child'?: number;
    /**
     * How to position baseline-aligned widgets if extra space is available.
     * @default GTK_BASELINE_POSITION_CENTER
     */
    'baseline-position'?: GtkBaselinePositionNick | Gtk.BaselinePosition;
    /**
     * Whether the children should all be the same size.
     * @default FALSE
     */
    homogeneous?: boolean;
    /**
     * The amount of space between children.
     * @default 0
     */
    spacing?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkBoxConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkOrientableConstructOnly;

/** Arranges children in a single row or column. */
export interface GtkBoxLayoutProps extends GtkLayoutManagerProps, GtkOrientableProps {
    /**
     * The child that determines the baseline of the box in vertical layout.
     * @since 4.12
     * @default -1
     */
    'baseline-child'?: number;
    /**
     * The position of the allocated baseline within the extra space allocated to each child.
     * @default GTK_BASELINE_POSITION_CENTER
     */
    'baseline-position'?: GtkBaselinePositionNick | Gtk.BaselinePosition;
    /**
     * Whether the box layout should distribute the available space equally among the children.
     * @default FALSE
     */
    homogeneous?: boolean;
    /**
     * The space to put between the children.
     * @default 0
     */
    spacing?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkBoxLayoutConstructOnly = GtkLayoutManagerConstructOnly | GtkOrientableConstructOnly;

/** Allows objects to extend and customize deserialization from ui files. */
export interface GtkBuildableProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkBuildableConstructOnly = GObjectConstructOnly;

/** Reads XML descriptions of a user interface and instantiates the described objects. */
export interface GtkBuilderProps extends GObjectProps {
    /** The object the builder is evaluating for. */
    'current-object'?: GObject.Object | null;
    /** The scope the builder is operating in */
    scope?: Gtk.BuilderScope;
    /**
     * The translation domain used when translating property values that have been marked as translatable.
     * @default NULL
     */
    'translation-domain'?: string | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkBuilderConstructOnly = GObjectConstructOnly;

/** A `GtkBuilderScope` implementation for the C language. */
export interface GtkBuilderCScopeProps extends GObjectProps, GtkBuilderScopeProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkBuilderCScopeConstructOnly = GObjectConstructOnly | GtkBuilderScopeConstructOnly;

/** Creates widgets by instantiating `GtkBuilder` UI templates. */
export interface GtkBuilderListItemFactoryProps extends GtkListItemFactoryProps {
    /** `GBytes` containing the UI definition. */
    bytes?: GLib.Bytes;
    /**
     * Path of the resource containing the UI definition.
     * @default NULL
     */
    resource?: string | null;
    /** `GtkBuilderScope` to use when instantiating listitems */
    scope?: Gtk.BuilderScope | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkBuilderListItemFactoryConstructOnly = GtkListItemFactoryConstructOnly | 'bytes' | 'resource' | 'scope';

/** Provides language binding support to `GtkBuilder`. */
export interface GtkBuilderScopeProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkBuilderScopeConstructOnly = GObjectConstructOnly;

/** Calls a callback function when the button is clicked. */
export interface GtkButtonProps extends GtkWidgetProps, GtkAccessibleProps, GtkActionableProps, GtkBuildableProps, GtkConstraintTargetProps {
    /**
     * Whether the size of the button can be made smaller than the natural size of its contents.
     * @since 4.12
     * @default FALSE
     */
    'can-shrink'?: boolean;
    /** The child widget. */
    child?: Gtk.Widget | null;
    /**
     * Whether the button has a frame.
     * @default TRUE
     */
    'has-frame'?: boolean;
    /**
     * The name of the icon used to automatically populate the button.
     * @default NULL
     */
    'icon-name'?: string | null;
    /**
     * Text of the label inside the button, if the button contains a label widget.
     * @default NULL
     */
    label?: string | null;
    /**
     * If set, an underline in the text indicates that the following character is to be used as mnemonic.
     * @default FALSE
     */
    'use-underline'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkButtonConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkActionableConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** A variant of `GtkClosureExpression` using a C closure. */
export interface GtkCClosureExpressionProps extends GtkExpressionProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkCClosureExpressionConstructOnly = GtkExpressionConstructOnly;

/** Displays a Gregorian calendar, one month at a time. */
export interface GtkCalendarProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /** The selected date. */
    date?: GLib.DateTime;
    /**
     * The selected day (as a number between 1 and 31).
     * @default 1
     * @deprecated since 4.20: This property will be removed in GTK 5.
     */
    day?: number;
    /**
     * The selected month (as a number between 0 and 11).
     * @default 0
     * @deprecated since 4.20: This property will be removed in GTK 5.
     */
    month?: number;
    /**
     * Determines whether day names are displayed.
     * @default TRUE
     */
    'show-day-names'?: boolean;
    /**
     * Determines whether a heading is displayed.
     * @default TRUE
     */
    'show-heading'?: boolean;
    /**
     * Determines whether week numbers are displayed.
     * @default FALSE
     */
    'show-week-numbers'?: boolean;
    /**
     * The selected year.
     * @default 1
     * @deprecated since 4.20: This property will be removed in GTK 5.
     */
    year?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkCalendarConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** Invokes a callback. */
export interface GtkCallbackActionProps extends GtkShortcutActionProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkCallbackActionConstructOnly = GtkShortcutActionConstructOnly;

/** An abstract class for laying out `GtkCellRenderer`s The `GtkCellArea` is an abstract class for [iface@Gtk.CellLayout] widgets (also referred to as "layouting widgets") to interface with an arbitrary … */
export interface GtkCellAreaProps extends GInitiallyUnownedProps, GtkBuildableProps, GtkCellLayoutProps {
    /** The cell in the area that currently has focus */
    'focus-cell'?: Gtk.CellRenderer | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkCellAreaConstructOnly = GInitiallyUnownedConstructOnly | GtkBuildableConstructOnly | GtkCellLayoutConstructOnly;

/** A cell area that renders GtkCellRenderers into a row or a column The `GtkCellAreaBox` renders cell renderers into a row or a column depending on its `GtkOrientation`. */
export interface GtkCellAreaBoxProps extends GtkCellAreaProps, GtkBuildableProps, GtkCellLayoutProps, GtkOrientableProps {
    /**
     * The amount of space to reserve between cells.
     * @default 0
     */
    spacing?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkCellAreaBoxConstructOnly = GtkCellAreaConstructOnly | GtkBuildableConstructOnly | GtkCellLayoutConstructOnly | GtkOrientableConstructOnly;

/** Stores geometrical information for a series of rows in a GtkCellArea The `GtkCellAreaContext` object is created by a given `GtkCellArea` implementation via its `GtkCellAreaClass.create_context()` vir… */
export interface GtkCellAreaContextProps extends GObjectProps {
    /**
     * The `GtkCellArea` this context was created by
     * @deprecated since 4.10: This object will be removed in GTK 5
     */
    area?: Gtk.CellArea;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkCellAreaContextConstructOnly = GObjectConstructOnly | 'area';

/** Interface for widgets that can be used for editing cells The `GtkCellEditable` interface must be implemented for widgets to be usable to edit the contents of a `GtkTreeView` cell. */
export interface GtkCellEditableProps extends GtkWidgetProps {
    /**
     * Indicates whether editing on the cell has been canceled.
     * @default FALSE
     */
    'editing-canceled'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkCellEditableConstructOnly = GtkWidgetConstructOnly;

/** An interface for packing cells `GtkCellLayout` is an interface to be implemented by all objects which want to provide a `GtkTreeViewColumn` like API for packing cells, setting attributes and data fun… */
export interface GtkCellLayoutProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkCellLayoutConstructOnly = GObjectConstructOnly;

/** An object for rendering a single cell The `GtkCellRenderer` is a base class of a set of objects used for rendering a cell to a `cairo_t`. */
export interface GtkCellRendererProps extends GInitiallyUnownedProps {
    /** @default NULL */
    'cell-background'?: string;
    /** Cell background as a `GdkRGBA` */
    'cell-background-rgba'?: Gdk.RGBA;
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
export type GtkCellRendererConstructOnly = GInitiallyUnownedConstructOnly;

/** Renders a keyboard accelerator in a cell `GtkCellRendererAccel` displays a keyboard accelerator (i.e. */
export interface GtkCellRendererAccelProps extends GtkCellRendererTextProps {
    /**
     * The keyval of the accelerator.
     * @default 0
     */
    'accel-key'?: number;
    /**
     * Determines if the edited accelerators are GTK accelerators.
     * @default GTK_CELL_RENDERER_ACCEL_MODE_GTK
     */
    'accel-mode'?: GtkCellRendererAccelModeNick | Gtk.CellRendererAccelMode;
    /**
     * The modifier mask of the accelerator.
     * @default GDK_NO_MODIFIER_MASK
     */
    'accel-mods'?: number;
    /**
     * The hardware keycode of the accelerator.
     * @default 0
     */
    keycode?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkCellRendererAccelConstructOnly = GtkCellRendererTextConstructOnly;

/** Renders a combobox in a cell `GtkCellRendererCombo` renders text in a cell like `GtkCellRendererText` from which it is derived. */
export interface GtkCellRendererComboProps extends GtkCellRendererTextProps {
    /**
     * If %TRUE, the cell renderer will include an entry and allow to enter values other than the ones in the popup list.
     * @default TRUE
     */
    'has-entry'?: boolean;
    /** Holds a tree model containing the possible values for the combo box. */
    model?: Gtk.TreeModel;
    /**
     * Specifies the model column which holds the possible values for the combo box.
     * @default -1
     */
    'text-column'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkCellRendererComboConstructOnly = GtkCellRendererTextConstructOnly;

/** Renders a pixbuf in a cell A `GtkCellRendererPixbuf` can be used to render an image in a cell. */
export interface GtkCellRendererPixbufProps extends GtkCellRendererProps {
    /** The GIcon representing the icon to display. */
    gicon?: Gio.Icon;
    /**
     * The name of the themed icon to display.
     * @default NULL
     */
    'icon-name'?: string;
    /**
     * The `GtkIconSize` value that specifies the size of the rendered icon.
     * @default GTK_ICON_SIZE_INHERIT
     */
    'icon-size'?: GtkIconSizeNick | Gtk.IconSize;
    pixbuf?: GdkPixbuf.Pixbuf;
    'pixbuf-expander-closed'?: GdkPixbuf.Pixbuf;
    'pixbuf-expander-open'?: GdkPixbuf.Pixbuf;
    texture?: Gdk.Texture;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkCellRendererPixbufConstructOnly = GtkCellRendererConstructOnly;

/** Renders numbers as progress bars `GtkCellRendererProgress` renders a numeric value as a progress par in a cell. */
export interface GtkCellRendererProgressProps extends GtkCellRendererProps, GtkOrientableProps {
    /**
     * Whether progess is inverted.
     * @default FALSE
     */
    inverted?: boolean;
    /**
     * Setting this to a non-negative value causes the cell renderer to enter "activity mode", where a block bounces back and forth to indicate that some progress is made, without specifying exactly how muc…
     * @default -1
     */
    pulse?: number;
    /**
     * The "text" property determines the label which will be drawn over the progress bar.
     * @default NULL
     */
    text?: string;
    /**
     * The "text-xalign" property controls the horizontal alignment of the text in the progress bar.
     * @default 0.500000
     */
    'text-xalign'?: number;
    /**
     * The "text-yalign" property controls the vertical alignment of the text in the progress bar.
     * @default 0.500000
     */
    'text-yalign'?: number;
    /**
     * The "value" property determines the percentage to which the progress bar will be "filled in".
     * @default 0
     */
    value?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkCellRendererProgressConstructOnly = GtkCellRendererConstructOnly | GtkOrientableConstructOnly;

/** Renders a spin button in a cell `GtkCellRendererSpin` renders text in a cell like `GtkCellRendererText` from which it is derived. */
export interface GtkCellRendererSpinProps extends GtkCellRendererTextProps {
    /** The adjustment that holds the value of the spinbutton. */
    adjustment?: Gtk.Adjustment;
    /**
     * The acceleration rate when you hold down a button.
     * @default 0.000000
     */
    'climb-rate'?: number;
    /**
     * The number of decimal places to display.
     * @default 0
     */
    digits?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkCellRendererSpinConstructOnly = GtkCellRendererTextConstructOnly;

/** Renders a spinning animation in a cell `GtkCellRendererSpinner` renders a spinning animation in a cell, very similar to `GtkSpinner`. */
export interface GtkCellRendererSpinnerProps extends GtkCellRendererProps {
    /**
     * Whether the spinner is active (ie.
     * @default FALSE
     */
    active?: boolean;
    /**
     * Pulse of the spinner.
     * @default 0
     */
    pulse?: number;
    /**
     * The `GtkIconSize` value that specifies the size of the rendered spinner.
     * @default GTK_ICON_SIZE_INHERIT
     */
    size?: GtkIconSizeNick | Gtk.IconSize;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkCellRendererSpinnerConstructOnly = GtkCellRendererConstructOnly;

/** Renders text in a cell A `GtkCellRendererText` renders a given text in its cell, using the font, color and style information provided by its properties. */
export interface GtkCellRendererTextProps extends GtkCellRendererProps {
    /** @default FALSE */
    'align-set'?: boolean;
    /**
     * Specifies how to align the lines of text with respect to each other.
     * @default PANGO_ALIGN_LEFT
     */
    alignment?: PangoAlignmentNick | Pango.Alignment;
    attributes?: Pango.AttrList;
    /** @default NULL */
    background?: string;
    /** Background color as a `GdkRGBA` */
    'background-rgba'?: Gdk.RGBA;
    /** @default FALSE */
    'background-set'?: boolean;
    /** @default FALSE */
    editable?: boolean;
    /** @default FALSE */
    'editable-set'?: boolean;
    /**
     * Specifies the preferred place to ellipsize the string, if the cell renderer does not have enough room to display the entire string.
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
    /** Foreground color as a `GdkRGBA` */
    'foreground-rgba'?: Gdk.RGBA;
    /** @default FALSE */
    'foreground-set'?: boolean;
    /** @default NULL */
    language?: string;
    /** @default FALSE */
    'language-set'?: boolean;
    /** @default NULL */
    markup?: string;
    /**
     * The desired maximum width of the cell, in characters.
     * @default -1
     */
    'max-width-chars'?: number;
    /**
     * The text that will be displayed in the `GtkCellRenderer` if `GtkCellRendererText:editable` is %TRUE and the cell is empty.
     * @default NULL
     */
    'placeholder-text'?: string;
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
     * @default -1
     */
    'width-chars'?: number;
    /**
     * Specifies how to break the string into multiple lines, if the cell renderer does not have enough room to display the entire string.
     * @default PANGO_WRAP_CHAR
     */
    'wrap-mode'?: PangoWrapModeNick | Pango.WrapMode;
    /**
     * Specifies the minimum width at which the text is wrapped.
     * @default -1
     */
    'wrap-width'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkCellRendererTextConstructOnly = GtkCellRendererConstructOnly;

/** Renders a toggle button in a cell `GtkCellRendererToggle` renders a toggle button in a cell. */
export interface GtkCellRendererToggleProps extends GtkCellRendererProps {
    /** @default TRUE */
    activatable?: boolean;
    /** @default FALSE */
    active?: boolean;
    /** @default FALSE */
    inconsistent?: boolean;
    /** @default FALSE */
    radio?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkCellRendererToggleConstructOnly = GtkCellRendererConstructOnly;

/** A widget displaying a single row of a GtkTreeModel A `GtkCellView` displays a single row of a `GtkTreeModel` using a `GtkCellArea` and `GtkCellAreaContext`. */
export interface GtkCellViewProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkCellLayoutProps, GtkConstraintTargetProps, GtkOrientableProps {
    /** The `GtkCellArea` rendering cells If no area is specified when creating the cell view with gtk_cell_view_new_with_context() a horizontally oriented `GtkCellArea`Box will be used. */
    'cell-area'?: Gtk.CellArea;
    /** The `GtkCellAreaContext` used to compute the geometry of the cell view. */
    'cell-area-context'?: Gtk.CellAreaContext;
    /**
     * Whether all cells should be draw as sensitive for this view regardless of the actual cell properties (used to make menus with submenus appear sensitive when the items in submenus might be insensitive…
     * @default FALSE
     */
    'draw-sensitive'?: boolean;
    /**
     * Whether the view should request enough space to always fit the size of every row in the model (used by the combo box to ensure the combo box size doesn't change when different items are selected).
     * @default FALSE
     */
    'fit-model'?: boolean;
    /** The model for cell view since 2.10 */
    model?: Gtk.TreeModel | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkCellViewConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkCellLayoutConstructOnly | GtkConstraintTargetConstructOnly | GtkOrientableConstructOnly | 'cell-area' | 'cell-area-context';

/** Arranges three children in a row, keeping the middle child centered as well as possible. */
export interface GtkCenterBoxProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkOrientableProps {
    /**
     * The position of the baseline aligned widget if extra space is available.
     * @default GTK_BASELINE_POSITION_CENTER
     */
    'baseline-position'?: GtkBaselinePositionNick | Gtk.BaselinePosition;
    /**
     * The widget that is placed at the center position.
     * @since 4.10
     */
    'center-widget'?: Gtk.Widget | null;
    /**
     * The widget that is placed at the end position.
     * @since 4.10
     */
    'end-widget'?: Gtk.Widget | null;
    /**
     * Whether to shrink the center widget after other children.
     * @since 4.12
     * @default TRUE
     */
    'shrink-center-last'?: boolean;
    /**
     * The widget that is placed at the start position.
     * @since 4.10
     */
    'start-widget'?: Gtk.Widget | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkCenterBoxConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkOrientableConstructOnly;

/** Manages up to three children. */
export interface GtkCenterLayoutProps extends GtkLayoutManagerProps {
    /**
     * Whether to shrink the center widget after other children.
     * @since 4.12
     * @default TRUE
     */
    'shrink-center-last'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkCenterLayoutConstructOnly = GtkLayoutManagerConstructOnly;

/** Places a label next to an indicator. */
export interface GtkCheckButtonProps extends GtkWidgetProps, GtkAccessibleProps, GtkActionableProps, GtkBuildableProps, GtkConstraintTargetProps {
    /**
     * If the check button is active.
     * @default FALSE
     */
    active?: boolean;
    /**
     * The child widget.
     * @since 4.8
     */
    child?: Gtk.Widget | null;
    /** The check button whose group this widget belongs to. */
    group?: Gtk.CheckButton;
    /**
     * If the check button is in an “in between” state.
     * @default FALSE
     */
    inconsistent?: boolean;
    /**
     * Text of the label inside the check button, if it contains a label widget.
     * @default NULL
     */
    label?: string | null;
    /**
     * If set, an underline in the text indicates that the following character is to be used as mnemonic.
     * @default FALSE
     */
    'use-underline'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkCheckButtonConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkActionableConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** An expression using a custom `GClosure` to compute the value from its parameters. */
export interface GtkClosureExpressionProps extends GtkExpressionProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkClosureExpressionConstructOnly = GtkExpressionConstructOnly;

/** The `GtkColorButton` allows to open a color chooser dialog to change the color. */
export interface GtkColorButtonProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkColorChooserProps, GtkConstraintTargetProps {
    /**
     * Whether the color chooser dialog should be modal.
     * @default TRUE
     */
    modal?: boolean;
    /**
     * Whether the color chooser should open in editor mode.
     * @default FALSE
     */
    'show-editor'?: boolean;
    /**
     * The title of the color chooser dialog
     * @default Pick a Color
     */
    title?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkColorButtonConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkColorChooserConstructOnly | GtkConstraintTargetConstructOnly;

/** `GtkColorChooser` is an interface that is implemented by widgets for choosing colors. */
export interface GtkColorChooserProps extends GObjectProps {
    /**
     * The currently selected color, as a `GdkRGBA` struct.
     * @deprecated since 4.10: Use [class@Gtk.ColorDialog] and [class@Gtk.ColorDialogButton] instead of widgets implementing `GtkColorChooser`
     */
    rgba?: Gdk.RGBA;
    /**
     * Whether colors may have alpha (translucency).
     * @default TRUE
     * @deprecated since 4.10: Use [class@Gtk.ColorDialog] and [class@Gtk.ColorDialogButton] instead of widgets implementing `GtkColorChooser`
     */
    'use-alpha'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkColorChooserConstructOnly = GObjectConstructOnly;

/** A dialog for choosing a color. */
export interface GtkColorChooserDialogProps extends GtkDialogProps, GtkAccessibleProps, GtkBuildableProps, GtkColorChooserProps, GtkConstraintTargetProps, GtkNativeProps, GtkRootProps, GtkShortcutManagerProps {
    /**
     * Whether the color chooser dialog is showing the single-color editor.
     * @default FALSE
     */
    'show-editor'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkColorChooserDialogConstructOnly = GtkDialogConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkColorChooserConstructOnly | GtkConstraintTargetConstructOnly | GtkNativeConstructOnly | GtkRootConstructOnly | GtkShortcutManagerConstructOnly;

/** The `GtkColorChooserWidget` widget lets the user select a color. */
export interface GtkColorChooserWidgetProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkColorChooserProps, GtkConstraintTargetProps {
    /**
     * %TRUE when the color chooser is showing the single-color editor.
     * @default FALSE
     */
    'show-editor'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkColorChooserWidgetConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkColorChooserConstructOnly | GtkConstraintTargetConstructOnly;

/** Asynchronous API to present a color chooser dialog. */
export interface GtkColorDialogProps extends GObjectProps {
    /**
     * Whether the color chooser dialog is modal.
     * @since 4.10
     * @default TRUE
     */
    modal?: boolean;
    /**
     * A title that may be shown on the color chooser dialog.
     * @since 4.10
     * @default NULL
     */
    title?: string;
    /**
     * Whether colors may have alpha (translucency).
     * @since 4.10
     * @default TRUE
     */
    'with-alpha'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkColorDialogConstructOnly = GObjectConstructOnly;

/** Opens a color chooser dialog to select a color. */
export interface GtkColorDialogButtonProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /**
     * The `GtkColorDialog` that contains parameters for the color chooser dialog.
     * @since 4.10
     */
    dialog?: Gtk.ColorDialog | null;
    /**
     * The selected color.
     * @since 4.10
     */
    rgba?: Gdk.RGBA;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkColorDialogButtonConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** Presents a large dynamic list of items using multiple columns with headers. */
export interface GtkColumnViewProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkScrollableProps {
    /**
     * Allow rubberband selection.
     * @default FALSE
     */
    'enable-rubberband'?: boolean;
    /**
     * Factory for creating header widgets.
     * @since 4.12
     */
    'header-factory'?: Gtk.ListItemFactory | null;
    /** Model for the items displayed. */
    model?: Gtk.SelectionModel | null;
    /**
     * Whether columns are reorderable.
     * @default TRUE
     */
    reorderable?: boolean;
    /**
     * The factory used for configuring rows.
     * @since 4.12
     */
    'row-factory'?: Gtk.ListItemFactory | null;
    /**
     * Show separators between columns.
     * @default FALSE
     */
    'show-column-separators'?: boolean;
    /**
     * Show separators between rows.
     * @default FALSE
     */
    'show-row-separators'?: boolean;
    /**
     * Activate rows on single click and select them on hover.
     * @default FALSE
     */
    'single-click-activate'?: boolean;
    /**
     * Behavior of the <kbd>Tab</kbd> key
     * @since 4.12
     * @default GTK_LIST_TAB_ALL
     */
    'tab-behavior'?: GtkListTabBehaviorNick | Gtk.ListTabBehavior;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkColumnViewConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkScrollableConstructOnly;

/** Represents items in a cell in [class@Gtk.ColumnView]. */
export interface GtkColumnViewCellProps extends GtkListItemProps {
    /**
     * Widget used for display.
     * @since 4.12
     */
    child?: Gtk.Widget | null;
    /**
     * If the item can be focused with the keyboard.
     * @since 4.12
     * @default FALSE
     */
    focusable?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkColumnViewCellConstructOnly = GtkListItemConstructOnly;

/** Represents the columns in a `GtkColumnView`. */
export interface GtkColumnViewColumnProps extends GObjectProps {
    /**
     * Column gets share of extra width allocated to the view.
     * @default FALSE
     */
    expand?: boolean;
    /** Factory for populating list items. */
    factory?: Gtk.ListItemFactory | null;
    /**
     * If not -1, this is the width that the column is allocated, regardless of the size of its content.
     * @default -1
     */
    'fixed-width'?: number;
    /** Menu model used to create the context menu for the column header. */
    'header-menu'?: Gio.MenuModel | null;
    /**
     * An ID for the column.
     * @since 4.10
     * @default NULL
     */
    id?: string | null;
    /**
     * Whether this column is resizable.
     * @default FALSE
     */
    resizable?: boolean;
    /** Sorter for sorting items according to this column. */
    sorter?: Gtk.Sorter | null;
    /**
     * Title displayed in the header.
     * @default NULL
     */
    title?: string | null;
    /**
     * Whether this column is visible.
     * @default TRUE
     */
    visible?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkColumnViewColumnConstructOnly = GObjectConstructOnly;

/** Configures how rows are displayed in a [class@Gtk.ColumnView]. */
export interface GtkColumnViewRowProps extends GObjectProps {
    /**
     * The accessible description to set on the row.
     * @since 4.12
     * @default NULL
     */
    'accessible-description'?: string;
    /**
     * The accessible label to set on the row.
     * @since 4.12
     * @default NULL
     */
    'accessible-label'?: string;
    /**
     * If the row can be activated by the user.
     * @since 4.12
     * @default TRUE
     */
    activatable?: boolean;
    /**
     * If the row can be focused with the keyboard.
     * @since 4.12
     * @default TRUE
     */
    focusable?: boolean;
    /**
     * If the row can be selected by the user.
     * @since 4.12
     * @default TRUE
     */
    selectable?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkColumnViewRowConstructOnly = GObjectConstructOnly;

/** Sorts [class@Gtk.ColumnView] columns. */
export interface GtkColumnViewSorterProps extends GtkSorterProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkColumnViewSorterConstructOnly = GtkSorterConstructOnly;

/** A `GtkComboBox` is a widget that allows the user to choose from a list of valid choices. */
export interface GtkComboBoxProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkCellEditableProps, GtkCellLayoutProps, GtkConstraintTargetProps {
    /**
     * The item which is currently active.
     * @default -1
     */
    active?: number;
    /**
     * The value of the ID column of the active row.
     * @default NULL
     */
    'active-id'?: string | null;
    /**
     * Whether the dropdown button is sensitive when the model is empty.
     * @default GTK_SENSITIVITY_AUTO
     */
    'button-sensitivity'?: GtkSensitivityTypeNick | Gtk.SensitivityType;
    /** The child widget. */
    child?: Gtk.Widget | null;
    /**
     * The model column to associate with strings from the entry.
     * @default -1
     */
    'entry-text-column'?: number;
    /**
     * Whether the combo box has an entry.
     * @default FALSE
     */
    'has-entry'?: boolean;
    /**
     * The `has-frame` property controls whether a frame is drawn around the entry.
     * @default TRUE
     */
    'has-frame'?: boolean;
    /**
     * The model column that provides string IDs for the values in the model, if != -1.
     * @default -1
     */
    'id-column'?: number;
    /** The model from which the combo box takes its values. */
    model?: Gtk.TreeModel | null;
    /**
     * Whether the popup's width should be a fixed width matching the allocated width of the combo box.
     * @default TRUE
     */
    'popup-fixed-width'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkComboBoxConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkCellEditableConstructOnly | GtkCellLayoutConstructOnly | GtkConstraintTargetConstructOnly | 'has-entry';

/** A `GtkComboBoxText` is a simple variant of `GtkComboBox` for text-only use cases. */
export interface GtkComboBoxTextProps extends GtkComboBoxProps, GtkAccessibleProps, GtkBuildableProps, GtkCellEditableProps, GtkCellLayoutProps, GtkConstraintTargetProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkComboBoxTextConstructOnly = GtkComboBoxConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkCellEditableConstructOnly | GtkCellLayoutConstructOnly | GtkConstraintTargetConstructOnly;

/** A constant value in a `GtkExpression`. */
export interface GtkConstantExpressionProps extends GtkExpressionProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkConstantExpressionConstructOnly = GtkExpressionConstructOnly;

/** Describes a constraint between attributes of two widgets, expressed as a linear equation. */
export interface GtkConstraintProps extends GObjectProps {
    /**
     * The constant value to be added to the [property@Gtk.Constraint:source-attribute].
     * @default 0.000000
     */
    constant?: number;
    /**
     * The multiplication factor to be applied to the [property@Gtk.Constraint:source-attribute].
     * @default 1.000000
     */
    multiplier?: number;
    /**
     * The order relation between the terms of the constraint.
     * @default GTK_CONSTRAINT_RELATION_EQ
     */
    relation?: GtkConstraintRelationNick | Gtk.ConstraintRelation;
    /** The source of the constraint. */
    source?: Gtk.ConstraintTarget | null;
    /**
     * The attribute of the [property@Gtk.Constraint:source] read by the constraint.
     * @default GTK_CONSTRAINT_ATTRIBUTE_NONE
     */
    'source-attribute'?: GtkConstraintAttributeNick | Gtk.ConstraintAttribute;
    /**
     * The strength of the constraint.
     * @default 1001001000
     */
    strength?: number;
    /** The target of the constraint. */
    target?: Gtk.ConstraintTarget | null;
    /**
     * The attribute of the [property@Gtk.Constraint:target] set by the constraint.
     * @default GTK_CONSTRAINT_ATTRIBUTE_NONE
     */
    'target-attribute'?: GtkConstraintAttributeNick | Gtk.ConstraintAttribute;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkConstraintConstructOnly = GObjectConstructOnly | 'constant' | 'multiplier' | 'relation' | 'source' | 'source-attribute' | 'strength' | 'target' | 'target-attribute';

/** An invisible layout element in a `GtkConstraintLayout`. */
export interface GtkConstraintGuideProps extends GObjectProps, GtkConstraintTargetProps {
    /**
     * The maximum height of the guide.
     * @default 2147483647
     */
    'max-height'?: number;
    /**
     * The maximum width of the guide.
     * @default 2147483647
     */
    'max-width'?: number;
    /**
     * The minimum height of the guide.
     * @default 0
     */
    'min-height'?: number;
    /**
     * The minimum width of the guide.
     * @default 0
     */
    'min-width'?: number;
    /**
     * A name that identifies the `GtkConstraintGuide`, for debugging.
     * @default NULL
     */
    name?: string | null;
    /**
     * The preferred, or natural, height of the guide.
     * @default 0
     */
    'nat-height'?: number;
    /**
     * The preferred, or natural, width of the guide.
     * @default 0
     */
    'nat-width'?: number;
    /**
     * The `GtkConstraintStrength` to be used for the constraint on the natural size of the guide.
     * @default GTK_CONSTRAINT_STRENGTH_MEDIUM
     */
    strength?: GtkConstraintStrengthNick | Gtk.ConstraintStrength;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkConstraintGuideConstructOnly = GObjectConstructOnly | GtkConstraintTargetConstructOnly;

/** Uses constraints to describe relations between widgets. */
export interface GtkConstraintLayoutProps extends GtkLayoutManagerProps, GtkBuildableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkConstraintLayoutConstructOnly = GtkLayoutManagerConstructOnly | GtkBuildableConstructOnly;

/** `GtkLayoutChild` subclass for children in a `GtkConstraintLayout`. */
export interface GtkConstraintLayoutChildProps extends GtkLayoutChildProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkConstraintLayoutChildConstructOnly = GtkLayoutChildConstructOnly;

/** Makes it possible to use an object as source or target in a [class@Gtk.Constraint]. */
export interface GtkConstraintTargetProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkConstraintTargetConstructOnly = GObjectConstructOnly;

/** A style provider for CSS. */
export interface GtkCssProviderProps extends GObjectProps, GtkStyleProviderProps {
    /**
     * Define the color scheme used for rendering the user interface.
     * @since 4.20
     * @default GTK_INTERFACE_COLOR_SCHEME_DEFAULT
     */
    'prefers-color-scheme'?: GtkInterfaceColorSchemeNick | Gtk.InterfaceColorScheme;
    /**
     * Define the contrast mode to use for the user interface.
     * @since 4.20
     * @default GTK_INTERFACE_CONTRAST_NO_PREFERENCE
     */
    'prefers-contrast'?: GtkInterfaceContrastNick | Gtk.InterfaceContrast;
    /**
     * Define the type of reduced motion to use for the user interface.
     * @since 4.22
     * @default GTK_REDUCED_MOTION_NO_PREFERENCE
     */
    'prefers-reduced-motion'?: GtkReducedMotionNick | Gtk.ReducedMotion;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkCssProviderConstructOnly = GObjectConstructOnly | GtkStyleProviderConstructOnly;

/** Determines whether to include items with a callback. */
export interface GtkCustomFilterProps extends GtkFilterProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkCustomFilterConstructOnly = GtkFilterConstructOnly;

/** Uses closures for size negotiation. */
export interface GtkCustomLayoutProps extends GtkLayoutManagerProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkCustomLayoutConstructOnly = GtkLayoutManagerConstructOnly;

/** Sorts items via a callback function. */
export interface GtkCustomSorterProps extends GtkSorterProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkCustomSorterConstructOnly = GtkSorterConstructOnly;

/** Dialogs are a convenient way to prompt the user for a small amount of input. */
export interface GtkDialogProps extends GtkWindowProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkNativeProps, GtkRootProps, GtkShortcutManagerProps {
    /**
     * %TRUE if the dialog uses a headerbar for action buttons instead of the action-area.
     * @default -1
     * @deprecated since 4.10: Use [class@Gtk.Window] instead
     */
    'use-header-bar'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkDialogConstructOnly = GtkWindowConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkNativeConstructOnly | GtkRootConstructOnly | GtkShortcutManagerConstructOnly | 'use-header-bar';

/** A list model that wraps [method@Gio.File.enumerate_children_async]. */
export interface GtkDirectoryListProps extends GObjectProps, GListModelProps {
    /**
     * The attributes to query.
     * @default NULL
     */
    attributes?: string | null;
    /** File to query. */
    file?: Gio.File | null;
    /**
     * Priority used when loading.
     * @default 0
     */
    'io-priority'?: number;
    /**
     * %TRUE if the directory is monitored for changed.
     * @default TRUE
     */
    monitored?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkDirectoryListConstructOnly = GObjectConstructOnly | GListModelConstructOnly;

/** A `GtkRoot` implementation for drag icons. */
export interface GtkDragIconProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkNativeProps, GtkRootProps {
    /** The widget to display as drag icon. */
    child?: Gtk.Widget | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkDragIconConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkNativeConstructOnly | GtkRootConstructOnly;

/** An event controller to initiate Drag-And-Drop operations. */
export interface GtkDragSourceProps extends GtkGestureSingleProps {
    /**
     * The actions that are supported by drag operations from the source.
     * @default GDK_ACTION_COPY
     */
    actions?: number;
    /** The data that is offered by drag operations from this source. */
    content?: Gdk.ContentProvider | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkDragSourceConstructOnly = GtkGestureSingleConstructOnly;

/** Allows drawing with cairo. */
export interface GtkDrawingAreaProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /**
     * The content height.
     * @default 0
     */
    'content-height'?: number;
    /**
     * The content width.
     * @default 0
     */
    'content-width'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkDrawingAreaConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** An event controller tracking the pointer during Drag-and-Drop operations. */
export interface GtkDropControllerMotionProps extends GtkEventControllerProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkDropControllerMotionConstructOnly = GtkEventControllerConstructOnly;

/** Allows the user to choose an item from a list of options. */
export interface GtkDropDownProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /**
     * Whether to show a search entry in the popup.
     * @default FALSE
     */
    'enable-search'?: boolean;
    /** An expression to evaluate to obtain strings to match against the search term. */
    expression?: Gtk.Expression | null;
    /** Factory for populating list items. */
    factory?: Gtk.ListItemFactory | null;
    /**
     * The factory for creating header widgets for the popup.
     * @since 4.12
     */
    'header-factory'?: Gtk.ListItemFactory | null;
    /** The factory for populating list items in the popup. */
    'list-factory'?: Gtk.ListItemFactory | null;
    /** Model for the displayed items. */
    model?: Gio.ListModel | null;
    /**
     * The match mode for the search filter.
     * @since 4.12
     * @default GTK_STRING_FILTER_MATCH_MODE_PREFIX
     */
    'search-match-mode'?: GtkStringFilterMatchModeNick | Gtk.StringFilterMatchMode;
    /**
     * The position of the selected item.
     * @default 4294967295
     */
    selected?: number;
    /**
     * Whether to show an arrow within the GtkDropDown widget.
     * @since 4.6
     * @default TRUE
     */
    'show-arrow'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkDropDownConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** An event controller to receive Drag-and-Drop operations. */
export interface GtkDropTargetProps extends GtkEventControllerProps {
    /**
     * The `GdkDragActions` that this drop target supports.
     * @default GDK_ACTION_NONE
     */
    actions?: number;
    /** The `GdkContentFormats` that determine the supported data formats. */
    formats?: Gdk.ContentFormats | null;
    /**
     * Whether the drop data should be preloaded when the pointer is only hovering over the widget but has not been released.
     * @default FALSE
     */
    preload?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkDropTargetConstructOnly = GtkEventControllerConstructOnly | 'formats';

/** An event controller to receive Drag-and-Drop operations, asynchronously. */
export interface GtkDropTargetAsyncProps extends GtkEventControllerProps {
    /**
     * The `GdkDragActions` that this drop target supports.
     * @default GDK_ACTION_NONE
     */
    actions?: number;
    /** The `GdkContentFormats` that determines the supported data formats. */
    formats?: Gdk.ContentFormats | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkDropTargetAsyncConstructOnly = GtkEventControllerConstructOnly;

/** Interface for single-line text editing widgets. */
export interface GtkEditableProps extends GtkWidgetProps {
    /**
     * Whether the entry contents can be edited.
     * @default TRUE
     */
    editable?: boolean;
    /**
     * If undo/redo should be enabled for the editable.
     * @default TRUE
     */
    'enable-undo'?: boolean;
    /**
     * The widget used to intercept input for this editable
     * @since 4.24
     */
    'input-interceptor'?: Gtk.Widget | null;
    /**
     * The desired maximum width of the entry, in characters.
     * @default -1
     */
    'max-width-chars'?: number;
    /** The contents of the entry. */
    text?: string;
    /**
     * Number of characters to leave space for in the entry.
     * @default -1
     */
    'width-chars'?: number;
    /**
     * The horizontal alignment, from 0 (left) to 1 (right).
     * @default 0.000000
     */
    xalign?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkEditableConstructOnly = GtkWidgetConstructOnly;

/** Allows users to edit the displayed text by switching to an “edit mode”. */
export interface GtkEditableLabelProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkEditableProps {
    /**
     * This property is %TRUE while the widget is in edit mode.
     * @default FALSE
     */
    editing?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkEditableLabelConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkEditableConstructOnly;

/** Used by text widgets to let users insert Emoji characters. */
export interface GtkEmojiChooserProps extends GtkPopoverProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkNativeProps, GtkShortcutManagerProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkEmojiChooserConstructOnly = GtkPopoverConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkNativeConstructOnly | GtkShortcutManagerConstructOnly;

/** A single-line text entry widget. */
export interface GtkEntryProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkCellEditableProps, GtkConstraintTargetProps, GtkEditableProps {
    /**
     * Whether to activate the default widget when Enter is pressed.
     * @default FALSE
     */
    'activates-default'?: boolean;
    /** A list of Pango attributes to apply to the text of the entry. */
    attributes?: Pango.AttrList | null;
    /** The buffer object which actually stores the text. */
    buffer?: Gtk.EntryBuffer;
    /**
     * The auxiliary completion object to use with the entry.
     * @deprecated since 4.10: GtkEntryCompletion will be removed in GTK 5.
     */
    completion?: Gtk.EntryCompletion | null;
    /**
     * Whether to suggest Emoji replacements for :-delimited names like `:heart:`.
     * @default FALSE
     */
    'enable-emoji-completion'?: boolean;
    /** A menu model whose contents will be appended to the context menu. */
    'extra-menu'?: Gio.MenuModel | null;
    /**
     * Whether the entry should draw a frame.
     * @default TRUE
     */
    'has-frame'?: boolean;
    /**
     * Which IM (input method) module should be used for this entry.
     * @default NULL
     */
    'im-module'?: string;
    /**
     * Additional hints that allow input methods to fine-tune their behavior.
     * @default GTK_INPUT_HINT_NONE
     */
    'input-hints'?: number;
    /**
     * The purpose of this text field.
     * @default GTK_INPUT_PURPOSE_FREE_FORM
     */
    'input-purpose'?: GtkInputPurposeNick | Gtk.InputPurpose;
    /**
     * The character to use when masking entry contents (“password mode”).
     * @default 42
     */
    'invisible-char'?: number;
    /**
     * Whether the invisible char has been set for the `GtkEntry`.
     * @default FALSE
     */
    'invisible-char-set'?: boolean;
    /**
     * Maximum number of characters for this entry.
     * @default 0
     */
    'max-length'?: number;
    /**
     * Text for an item in the context menu to activate the primary icon action.
     * @since 4.20
     * @default NULL
     */
    'menu-entry-icon-primary-text'?: string;
    /**
     * Text for an item in the context menu to activate the secondary icon action.
     * @since 4.20
     * @default NULL
     */
    'menu-entry-icon-secondary-text'?: string;
    /**
     * If text is overwritten when typing in the `GtkEntry`.
     * @default FALSE
     */
    'overwrite-mode'?: boolean;
    /**
     * The text that will be displayed in the `GtkEntry` when it is empty and unfocused.
     * @default NULL
     */
    'placeholder-text'?: string | null;
    /**
     * Whether the primary icon is activatable.
     * @default TRUE
     */
    'primary-icon-activatable'?: boolean;
    /** The `GIcon` to use for the primary icon for the entry. */
    'primary-icon-gicon'?: Gio.Icon;
    /**
     * The icon name to use for the primary icon for the entry.
     * @default NULL
     */
    'primary-icon-name'?: string;
    /** A `GdkPaintable` to use as the primary icon for the entry. */
    'primary-icon-paintable'?: Gdk.Paintable;
    /**
     * Whether the primary icon is sensitive.
     * @default TRUE
     */
    'primary-icon-sensitive'?: boolean;
    /**
     * The contents of the tooltip on the primary icon, with markup.
     * @default NULL
     */
    'primary-icon-tooltip-markup'?: string;
    /**
     * The contents of the tooltip on the primary icon.
     * @default NULL
     */
    'primary-icon-tooltip-text'?: string;
    /**
     * The current fraction of the task that's been completed.
     * @default 0.000000
     */
    'progress-fraction'?: number;
    /**
     * The fraction of total entry width to move the progress bouncing block for each pulse.
     * @default 0.000000
     */
    'progress-pulse-step'?: number;
    /**
     * Whether the secondary icon is activatable.
     * @default TRUE
     */
    'secondary-icon-activatable'?: boolean;
    /** The `GIcon` to use for the secondary icon for the entry. */
    'secondary-icon-gicon'?: Gio.Icon;
    /**
     * The icon name to use for the secondary icon for the entry.
     * @default NULL
     */
    'secondary-icon-name'?: string;
    /** A `GdkPaintable` to use as the secondary icon for the entry. */
    'secondary-icon-paintable'?: Gdk.Paintable;
    /**
     * Whether the secondary icon is sensitive.
     * @default TRUE
     */
    'secondary-icon-sensitive'?: boolean;
    /**
     * The contents of the tooltip on the secondary icon, with markup.
     * @default NULL
     */
    'secondary-icon-tooltip-markup'?: string;
    /**
     * The contents of the tooltip on the secondary icon.
     * @default NULL
     */
    'secondary-icon-tooltip-text'?: string;
    /**
     * Whether the entry will show an Emoji icon in the secondary icon position to open the Emoji chooser.
     * @default FALSE
     */
    'show-emoji-icon'?: boolean;
    /** A list of tabstops to apply to the text of the entry. */
    tabs?: Pango.TabArray | null;
    /**
     * When %TRUE, pasted multi-line text is truncated to the first line.
     * @default FALSE
     */
    'truncate-multiline'?: boolean;
    /**
     * Whether the entry should show the “invisible char” instead of the actual text (“password mode”).
     * @default TRUE
     */
    visibility?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkEntryConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkCellEditableConstructOnly | GtkConstraintTargetConstructOnly | GtkEditableConstructOnly;

/** Holds the text that is displayed in a single-line text entry widget. */
export interface GtkEntryBufferProps extends GObjectProps {
    /**
     * The maximum length (in characters) of the text in the buffer.
     * @default 0
     */
    'max-length'?: number;
    /** The contents of the buffer. */
    text?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkEntryBufferConstructOnly = GObjectConstructOnly;

/** `GtkEntryCompletion` is an auxiliary object to provide completion functionality for `GtkEntry`. */
export interface GtkEntryCompletionProps extends GObjectProps, GtkBuildableProps, GtkCellLayoutProps {
    /** The `GtkCellArea` used to layout cell renderers in the treeview column. */
    'cell-area'?: Gtk.CellArea;
    /**
     * Determines whether the common prefix of the possible completions should be inserted automatically in the entry.
     * @default FALSE
     */
    'inline-completion'?: boolean;
    /**
     * Determines whether the possible completions on the popup will appear in the entry as you navigate through them.
     * @default FALSE
     */
    'inline-selection'?: boolean;
    /**
     * The minimum key length as set for completion.
     * @default 1
     */
    'minimum-key-length'?: number;
    /** The model used as data source. */
    model?: Gtk.TreeModel | null;
    /**
     * Determines whether the possible completions should be shown in a popup window.
     * @default TRUE
     */
    'popup-completion'?: boolean;
    /**
     * Determines whether the completions popup window will be resized to the width of the entry.
     * @default TRUE
     */
    'popup-set-width'?: boolean;
    /**
     * Determines whether the completions popup window will shown for a single possible completion.
     * @default TRUE
     */
    'popup-single-match'?: boolean;
    /**
     * The column of the model containing the strings.
     * @default -1
     */
    'text-column'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkEntryCompletionConstructOnly = GObjectConstructOnly | GtkBuildableConstructOnly | GtkCellLayoutConstructOnly | 'cell-area';

/** A [iface@Gio.ListModel] representing values of a given enum. */
export interface GtkEnumListProps extends GObjectProps, GListModelProps {
    /**
     * The type of the enum represented by the model.
     * @since 4.24
     */
    'enum-type'?: GObject.GType;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkEnumListConstructOnly = GObjectConstructOnly | GListModelConstructOnly | 'enum-type';

/** `GtkEnumListItem` is the type of items in a [class@Gtk.EnumList]. */
export interface GtkEnumListItemProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkEnumListItemConstructOnly = GObjectConstructOnly;

/** The base class for event controllers. */
export interface GtkEventControllerProps extends GObjectProps {
    /**
     * The name for this controller, typically used for debugging purposes.
     * @default NULL
     */
    name?: string | null;
    /**
     * The limit for which events this controller will handle.
     * @default GTK_LIMIT_SAME_NATIVE
     */
    'propagation-limit'?: GtkPropagationLimitNick | Gtk.PropagationLimit;
    /**
     * The propagation phase at which this controller will handle events.
     * @default GTK_PHASE_BUBBLE
     */
    'propagation-phase'?: GtkPropagationPhaseNick | Gtk.PropagationPhase;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkEventControllerConstructOnly = GObjectConstructOnly;

/** Tracks keyboard focus. */
export interface GtkEventControllerFocusProps extends GtkEventControllerProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkEventControllerFocusConstructOnly = GtkEventControllerConstructOnly;

/** Provides access to key events. */
export interface GtkEventControllerKeyProps extends GtkEventControllerProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkEventControllerKeyConstructOnly = GtkEventControllerConstructOnly;

/** Provides raw access to the event stream. */
export interface GtkEventControllerLegacyProps extends GtkEventControllerProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkEventControllerLegacyConstructOnly = GtkEventControllerConstructOnly;

/** Tracks the pointer position. */
export interface GtkEventControllerMotionProps extends GtkEventControllerProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkEventControllerMotionConstructOnly = GtkEventControllerConstructOnly;

/** Handles scroll events. */
export interface GtkEventControllerScrollProps extends GtkEventControllerProps {
    /**
     * The flags affecting event controller behavior.
     * @default GTK_EVENT_CONTROLLER_SCROLL_NONE
     */
    flags?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkEventControllerScrollConstructOnly = GtkEventControllerConstructOnly;

/** Matches an item when each of its filters matches. */
export interface GtkEveryFilterProps extends GtkMultiFilterProps, GListModelProps, GtkBuildableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkEveryFilterConstructOnly = GtkMultiFilterConstructOnly | GListModelConstructOnly | GtkBuildableConstructOnly;

/** Allows the user to reveal or conceal a child widget. */
export interface GtkExpanderProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /** The child widget. */
    child?: Gtk.Widget | null;
    /**
     * Whether the expander has been opened to reveal the child.
     * @default FALSE
     */
    expanded?: boolean;
    /**
     * The text of the expanders label.
     * @default NULL
     */
    label?: string | null;
    /** A widget to display instead of the usual expander label. */
    'label-widget'?: Gtk.Widget | null;
    /**
     * When this property is %TRUE, the expander will resize the toplevel widget containing the expander upon expanding and collapsing.
     * @default FALSE
     */
    'resize-toplevel'?: boolean;
    /**
     * Whether the text in the label is Pango markup.
     * @default FALSE
     */
    'use-markup'?: boolean;
    /**
     * Whether an underline in the text indicates a mnemonic.
     * @default FALSE
     */
    'use-underline'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkExpanderConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** Provides a way to describe references to values. */
export interface GtkExpressionProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkExpressionConstructOnly = never;

/** `GtkFileChooser` is an interface that can be implemented by file selection widgets. */
export interface GtkFileChooserProps extends GObjectProps {
    /**
     * The type of operation that the file chooser is performing.
     * @default GTK_FILE_CHOOSER_ACTION_OPEN
     * @deprecated since 4.10: Use [class@Gtk.FileDialog] instead
     */
    action?: GtkFileChooserActionNick | Gtk.FileChooserAction;
    /**
     * Whether a file chooser not in %GTK_FILE_CHOOSER_ACTION_OPEN mode will offer the user to create new folders.
     * @default TRUE
     * @deprecated since 4.10: Use [class@Gtk.FileDialog] instead
     */
    'create-folders'?: boolean;
    /**
     * The current filter for selecting files that are displayed.
     * @deprecated since 4.10: Use [class@Gtk.FileDialog] instead
     */
    filter?: Gtk.FileFilter | null;
    /**
     * Whether to allow multiple files to be selected.
     * @default FALSE
     * @deprecated since 4.10: Use [class@Gtk.FileDialog] instead
     */
    'select-multiple'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkFileChooserConstructOnly = GObjectConstructOnly;

/** `GtkFileChooserDialog` is a dialog suitable for use with “File Open” or “File Save” commands. */
export interface GtkFileChooserDialogProps extends GtkDialogProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkFileChooserProps, GtkNativeProps, GtkRootProps, GtkShortcutManagerProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkFileChooserDialogConstructOnly = GtkDialogConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkFileChooserConstructOnly | GtkNativeConstructOnly | GtkRootConstructOnly | GtkShortcutManagerConstructOnly;

/** `GtkFileChooserNative` is an abstraction of a dialog suitable for use with “File Open” or “File Save as” commands. */
export interface GtkFileChooserNativeProps extends GtkNativeDialogProps, GtkFileChooserProps {
    /**
     * The text used for the label on the accept button in the dialog, or %NULL to use the default text.
     * @default NULL
     */
    'accept-label'?: string | null;
    /**
     * The text used for the label on the cancel button in the dialog, or %NULL to use the default text.
     * @default NULL
     */
    'cancel-label'?: string | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkFileChooserNativeConstructOnly = GtkNativeDialogConstructOnly | GtkFileChooserConstructOnly;

/** `GtkFileChooserWidget` is a widget for choosing files. */
export interface GtkFileChooserWidgetProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkFileChooserProps {
    /**
     * Whether search mode is enabled.
     * @default FALSE
     */
    'search-mode'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkFileChooserWidgetConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkFileChooserConstructOnly;

/** Asynchronous API to present a file chooser dialog. */
export interface GtkFileDialogProps extends GObjectProps {
    /**
     * Label for the file chooser's accept button.
     * @since 4.10
     * @default NULL
     */
    'accept-label'?: string | null;
    /**
     * The default filter.
     * @since 4.10
     */
    'default-filter'?: Gtk.FileFilter | null;
    /**
     * The list of filters.
     * @since 4.10
     */
    filters?: Gio.ListModel | null;
    /**
     * The initial file.
     * @since 4.10
     */
    'initial-file'?: Gio.File | null;
    /**
     * The initial folder.
     * @since 4.10
     */
    'initial-folder'?: Gio.File | null;
    /**
     * The initial name.
     * @since 4.10
     * @default NULL
     */
    'initial-name'?: string | null;
    /**
     * Whether the file chooser dialog is modal.
     * @since 4.10
     * @default TRUE
     */
    modal?: boolean;
    /**
     * A title that may be shown on the file chooser dialog.
     * @since 4.10
     * @default NULL
     */
    title?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkFileDialogConstructOnly = GObjectConstructOnly;

/** Filters files by name or mime type. */
export interface GtkFileFilterProps extends GtkFilterProps, GtkBuildableProps {
    /**
     * The MIME types that this filter matches.
     * @since 4.10
     */
    'mime-types'?: string[];
    /**
     * The human-readable name of the filter.
     * @default NULL
     */
    name?: string | null;
    /**
     * The patterns that this filter matches.
     * @since 4.10
     */
    patterns?: string[];
    /**
     * The suffixes that this filter matches.
     * @since 4.10
     */
    suffixes?: string[];
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkFileFilterConstructOnly = GtkFilterConstructOnly | GtkBuildableConstructOnly | 'mime-types' | 'patterns' | 'suffixes';

/** Asynchronous API to open a file with an application. */
export interface GtkFileLauncherProps extends GObjectProps {
    /**
     * Whether to ask the user to choose an app for opening the file.
     * @since 4.12
     * @default FALSE
     */
    'always-ask'?: boolean;
    /**
     * The file to launch.
     * @since 4.10
     */
    file?: Gio.File | null;
    /**
     * Whether to make the file writable for the handler.
     * @since 4.14
     * @default FALSE
     */
    writable?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkFileLauncherConstructOnly = GObjectConstructOnly;

/** Describes the filtering to be performed by a [class@Gtk.FilterListModel]. */
export interface GtkFilterProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkFilterConstructOnly = GObjectConstructOnly;

/** A list model that filters the elements of another model. */
export interface GtkFilterListModelProps extends GObjectProps, GListModelProps, GtkSectionModelProps {
    /** The filter for this model. */
    filter?: Gtk.Filter | null;
    /**
     * If the model should filter items incrementally.
     * @default FALSE
     */
    incremental?: boolean;
    /** The model being filtered. */
    model?: Gio.ListModel | null;
    /**
     * Monitor the list items for changes.
     * @since 4.20
     * @default FALSE
     */
    'watch-items'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkFilterListModelConstructOnly = GObjectConstructOnly | GListModelConstructOnly | GtkSectionModelConstructOnly;

/** Places its child widgets at fixed positions and with fixed sizes. */
export interface GtkFixedProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkFixedConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** Places child widgets at fixed positions. */
export interface GtkFixedLayoutProps extends GtkLayoutManagerProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkFixedLayoutConstructOnly = GtkLayoutManagerConstructOnly;

/** `GtkLayoutChild` subclass for children in a `GtkFixedLayout`. */
export interface GtkFixedLayoutChildProps extends GtkLayoutChildProps {
    /** The transform of the child. */
    transform?: Gsk.Transform | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkFixedLayoutChildConstructOnly = GtkLayoutChildConstructOnly;

/** A list model that concatenates other list models. */
export interface GtkFlattenListModelProps extends GObjectProps, GListModelProps, GtkSectionModelProps {
    /** The model being flattened. */
    model?: Gio.ListModel | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkFlattenListModelConstructOnly = GObjectConstructOnly | GListModelConstructOnly | GtkSectionModelConstructOnly;

/** Puts child widgets in a reflowing grid. */
export interface GtkFlowBoxProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkOrientableProps {
    /**
     * Whether to accept unpaired release events.
     * @default FALSE
     */
    'accept-unpaired-release'?: boolean;
    /**
     * Determines whether children can be activated with a single click, or require a double-click.
     * @default TRUE
     */
    'activate-on-single-click'?: boolean;
    /**
     * The amount of horizontal space between two children.
     * @default 0
     */
    'column-spacing'?: number;
    /**
     * Determines whether all children should be allocated the same size.
     * @default FALSE
     */
    homogeneous?: boolean;
    /**
     * The maximum amount of children to request space for consecutively in the given orientation.
     * @default 7
     */
    'max-children-per-line'?: number;
    /**
     * The minimum number of children to allocate consecutively in the given orientation.
     * @default 0
     */
    'min-children-per-line'?: number;
    /**
     * The amount of vertical space between two children.
     * @default 0
     */
    'row-spacing'?: number;
    /**
     * The selection mode used by the flow box.
     * @default GTK_SELECTION_SINGLE
     */
    'selection-mode'?: GtkSelectionModeNick | Gtk.SelectionMode;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkFlowBoxConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkOrientableConstructOnly;

/** The kind of widget that can be added to a `GtkFlowBox`. */
export interface GtkFlowBoxChildProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /** The child widget. */
    child?: Gtk.Widget | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkFlowBoxChildConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** The `GtkFontButton` allows to open a font chooser dialog to change the font. */
export interface GtkFontButtonProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkFontChooserProps {
    /**
     * Whether the font chooser dialog should be modal.
     * @default TRUE
     */
    modal?: boolean;
    /**
     * The title of the font chooser dialog.
     * @default Pick a Font
     */
    title?: string;
    /**
     * Whether the buttons label will be drawn in the selected font.
     * @default FALSE
     */
    'use-font'?: boolean;
    /**
     * Whether the buttons label will use the selected font size.
     * @default FALSE
     */
    'use-size'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkFontButtonConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkFontChooserConstructOnly;

/** `GtkFontChooser` is an interface that can be implemented by widgets for choosing fonts. */
export interface GtkFontChooserProps extends GObjectProps {
    /**
     * The font description as a string, e.g.
     * @default Sans 10
     * @deprecated since 4.10: Use [class@Gtk.FontDialog] and [class@Gtk.FontDialogButton] instead
     */
    font?: string | null;
    /**
     * The font description as a `PangoFontDescription`.
     * @deprecated since 4.10: Use [class@Gtk.FontDialog] and [class@Gtk.FontDialogButton] instead
     */
    'font-desc'?: Pango.FontDescription | null;
    /**
     * The language for which the font features were selected.
     * @deprecated since 4.10: Use [class@Gtk.FontDialog] and [class@Gtk.FontDialogButton] instead
     */
    language?: string;
    /**
     * The level of granularity to offer for selecting fonts.
     * @default GTK_FONT_CHOOSER_LEVEL_STYLE | GTK_FONT_CHOOSER_LEVEL_SIZE
     * @deprecated since 4.10: Use [class@Gtk.FontDialog] and [class@Gtk.FontDialogButton] instead
     */
    level?: number;
    /**
     * The string with which to preview the font.
     * @default The quick brown fox jumps over the lazy dog.
     * @deprecated since 4.10: Use [class@Gtk.FontDialog] and [class@Gtk.FontDialogButton] instead
     */
    'preview-text'?: string;
    /**
     * Whether to show an entry to change the preview text.
     * @default TRUE
     * @deprecated since 4.10: Use [class@Gtk.FontDialog] and [class@Gtk.FontDialogButton] instead
     */
    'show-preview-entry'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkFontChooserConstructOnly = GObjectConstructOnly;

/** The `GtkFontChooserDialog` widget is a dialog for selecting a font. */
export interface GtkFontChooserDialogProps extends GtkDialogProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkFontChooserProps, GtkNativeProps, GtkRootProps, GtkShortcutManagerProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkFontChooserDialogConstructOnly = GtkDialogConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkFontChooserConstructOnly | GtkNativeConstructOnly | GtkRootConstructOnly | GtkShortcutManagerConstructOnly;

/** The `GtkFontChooserWidget` widget lets the user select a font. */
export interface GtkFontChooserWidgetProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkFontChooserProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkFontChooserWidgetConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkFontChooserConstructOnly;

/** Asynchronous API to present a font chooser dialog. */
export interface GtkFontDialogProps extends GObjectProps {
    /**
     * A filter to restrict what fonts are shown in the font chooser dialog.
     * @since 4.10
     */
    filter?: Gtk.Filter | null;
    /**
     * A custom font map to select fonts from.
     * @since 4.10
     */
    'font-map'?: Pango.FontMap | null;
    /**
     * The language for which the font features are selected.
     * @since 4.10
     */
    language?: Pango.Language | null;
    /**
     * Whether the font chooser dialog is modal.
     * @since 4.10
     * @default TRUE
     */
    modal?: boolean;
    /**
     * A title that may be shown on the font chooser dialog that is presented by [method@Gtk.FontDialog.choose_font].
     * @since 4.10
     * @default NULL
     */
    title?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkFontDialogConstructOnly = GObjectConstructOnly;

/** Opens a font chooser dialog to select a font. */
export interface GtkFontDialogButtonProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /**
     * The `GtkFontDialog` that contains parameters for the font chooser dialog.
     * @since 4.10
     */
    dialog?: Gtk.FontDialog | null;
    /**
     * The selected font.
     * @since 4.10
     */
    'font-desc'?: Pango.FontDescription | null;
    /**
     * The selected font features.
     * @since 4.10
     * @default NULL
     */
    'font-features'?: string | null;
    /**
     * The selected language for font features.
     * @since 4.10
     */
    language?: Pango.Language | null;
    /**
     * The level of detail for the font chooser dialog.
     * @default GTK_FONT_LEVEL_FONT
     */
    level?: GtkFontLevelNick | Gtk.FontLevel;
    /**
     * Whether the buttons label will be drawn in the selected font.
     * @default FALSE
     */
    'use-font'?: boolean;
    /**
     * Whether the buttons label will use the selected font size.
     * @default FALSE
     */
    'use-size'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkFontDialogButtonConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** Surrounds its child with a decorative frame and an optional label. */
export interface GtkFrameProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /** The child widget. */
    child?: Gtk.Widget | null;
    /**
     * Text of the frame's label.
     * @default NULL
     */
    label?: string | null;
    /** Widget to display in place of the usual frame label. */
    'label-widget'?: Gtk.Widget | null;
    /**
     * The horizontal alignment of the label.
     * @default 0.000000
     */
    'label-xalign'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkFrameConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** Allows drawing with OpenGL. */
export interface GtkGLAreaProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /**
     * The allowed APIs.
     * @since 4.12
     * @default GDK_GL_API_GL | GDK_GL_API_GLES
     */
    'allowed-apis'?: number;
    /**
     * If set to %TRUE the ::render signal will be emitted every time the widget draws.
     * @default TRUE
     */
    'auto-render'?: boolean;
    /**
     * If set to %TRUE the widget will allocate and enable a depth buffer for the target framebuffer.
     * @default FALSE
     */
    'has-depth-buffer'?: boolean;
    /**
     * If set to %TRUE the widget will allocate and enable a stencil buffer for the target framebuffer.
     * @default FALSE
     */
    'has-stencil-buffer'?: boolean;
    /**
     * If set to %TRUE the widget will try to create a `GdkGLContext` using OpenGL ES instead of OpenGL.
     * @default FALSE
     * @deprecated since 4.12: Use [property@Gtk.GLArea:allowed-apis]
     */
    'use-es'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkGLAreaConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** The base class for gesture recognition. */
export interface GtkGestureProps extends GtkEventControllerProps {
    /**
     * The number of touch points that trigger recognition on this gesture.
     * @default 1
     */
    'n-points'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkGestureConstructOnly = GtkEventControllerConstructOnly | 'n-points';

/** Recognizes click gestures. */
export interface GtkGestureClickProps extends GtkGestureSingleProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkGestureClickConstructOnly = GtkGestureSingleConstructOnly;

/** Recognizes drag gestures. */
export interface GtkGestureDragProps extends GtkGestureSingleProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkGestureDragConstructOnly = GtkGestureSingleConstructOnly;

/** Recognizes long press gestures. */
export interface GtkGestureLongPressProps extends GtkGestureSingleProps {
    /**
     * Factor by which to modify the default timeout.
     * @default 1.000000
     */
    'delay-factor'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkGestureLongPressConstructOnly = GtkGestureSingleConstructOnly;

/** Recognizes pan gestures. */
export interface GtkGesturePanProps extends GtkGestureDragProps {
    /**
     * The expected orientation of pan gestures.
     * @default GTK_ORIENTATION_HORIZONTAL
     */
    orientation?: GtkOrientationNick | Gtk.Orientation;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkGesturePanConstructOnly = GtkGestureDragConstructOnly;

/** Recognizes 2-finger rotation gestures. */
export interface GtkGestureRotateProps extends GtkGestureProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkGestureRotateConstructOnly = GtkGestureConstructOnly;

/** A `GtkGesture` subclass optimized for singe-touch and mouse gestures. */
export interface GtkGestureSingleProps extends GtkGestureProps {
    /**
     * Mouse button number to listen to, or 0 to listen for any button.
     * @default 1
     */
    button?: number;
    /**
     * Whether the gesture is exclusive.
     * @default FALSE
     */
    exclusive?: boolean;
    /**
     * Whether the gesture handles only touch events.
     * @default FALSE
     */
    'touch-only'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkGestureSingleConstructOnly = GtkGestureConstructOnly;

/** Recognizes tablet stylus input. */
export interface GtkGestureStylusProps extends GtkGestureSingleProps {
    /**
     * If this gesture should exclusively react to stylus input devices.
     * @since 4.10
     * @default TRUE
     */
    'stylus-only'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkGestureStylusConstructOnly = GtkGestureSingleConstructOnly;

/** Recognizes swipe gestures. */
export interface GtkGestureSwipeProps extends GtkGestureSingleProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkGestureSwipeConstructOnly = GtkGestureSingleConstructOnly;

/** Recognizes 2-finger pinch/zoom gestures. */
export interface GtkGestureZoomProps extends GtkGestureProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkGestureZoomConstructOnly = GtkGestureConstructOnly;

/** Bypasses gsk rendering by passing the content of its child directly to the compositor. */
export interface GtkGraphicsOffloadProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /**
     * Whether to draw a black background.
     * @since 4.16
     * @default FALSE
     */
    'black-background'?: boolean;
    /**
     * The child widget.
     * @since 4.14
     */
    child?: Gtk.Widget | null;
    /**
     * Whether graphics offload is enabled.
     * @since 4.14
     * @default GTK_GRAPHICS_OFFLOAD_ENABLED
     */
    enabled?: GtkGraphicsOffloadEnabledNick | Gtk.GraphicsOffloadEnabled;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkGraphicsOffloadConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** Arranges its child widgets in rows and columns. */
export interface GtkGridProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkOrientableProps {
    /**
     * The row to align to the baseline when valign is using baseline alignment.
     * @default 0
     */
    'baseline-row'?: number;
    /**
     * If %TRUE, the columns are all the same width.
     * @default FALSE
     */
    'column-homogeneous'?: boolean;
    /**
     * The amount of space between two consecutive columns.
     * @default 0
     */
    'column-spacing'?: number;
    /**
     * If %TRUE, the rows are all the same height.
     * @default FALSE
     */
    'row-homogeneous'?: boolean;
    /**
     * The amount of space between two consecutive rows.
     * @default 0
     */
    'row-spacing'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkGridConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkOrientableConstructOnly;

/** Arranges child widgets in rows and columns. */
export interface GtkGridLayoutProps extends GtkLayoutManagerProps {
    /**
     * The row to align to the baseline, when `GtkWidget:valign` is set to %GTK_ALIGN_BASELINE.
     * @default 0
     */
    'baseline-row'?: number;
    /**
     * Whether all the columns in the grid have the same width.
     * @default FALSE
     */
    'column-homogeneous'?: boolean;
    /**
     * The amount of space between to consecutive columns.
     * @default 0
     */
    'column-spacing'?: number;
    /**
     * Whether all the rows in the grid have the same height.
     * @default FALSE
     */
    'row-homogeneous'?: boolean;
    /**
     * The amount of space between to consecutive rows.
     * @default 0
     */
    'row-spacing'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkGridLayoutConstructOnly = GtkLayoutManagerConstructOnly;

/** `GtkLayoutChild` subclass for children in a `GtkGridLayout`. */
export interface GtkGridLayoutChildProps extends GtkLayoutChildProps {
    /**
     * The column to place the child in.
     * @default 0
     */
    column?: number;
    /**
     * The number of columns the child spans to.
     * @default 1
     */
    'column-span'?: number;
    /**
     * The row to place the child in.
     * @default 0
     */
    row?: number;
    /**
     * The number of rows the child spans to.
     * @default 1
     */
    'row-span'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkGridLayoutChildConstructOnly = GtkLayoutChildConstructOnly;

/** Presents a large dynamic grid of items. */
export interface GtkGridViewProps extends GtkListBaseProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkOrientableProps, GtkScrollableProps {
    /**
     * Allow rubberband selection.
     * @default FALSE
     */
    'enable-rubberband'?: boolean;
    /** Factory for populating list items. */
    factory?: Gtk.ListItemFactory | null;
    /**
     * Maximum number of columns per row.
     * @default 7
     */
    'max-columns'?: number;
    /**
     * Minimum number of columns per row.
     * @default 1
     */
    'min-columns'?: number;
    /** Model for the items displayed. */
    model?: Gtk.SelectionModel | null;
    /**
     * Activate rows on single click and select them on hover.
     * @default FALSE
     */
    'single-click-activate'?: boolean;
    /**
     * Behavior of the <kbd>Tab</kbd> key
     * @since 4.12
     * @default GTK_LIST_TAB_ALL
     */
    'tab-behavior'?: GtkListTabBehaviorNick | Gtk.ListTabBehavior;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkGridViewConstructOnly = GtkListBaseConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkOrientableConstructOnly | GtkScrollableConstructOnly;

/** Creates a custom titlebar for a window. */
export interface GtkHeaderBarProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /**
     * The decoration layout for buttons.
     * @default NULL
     */
    'decoration-layout'?: string | null;
    /**
     * Whether to show title buttons like close, minimize, maximize.
     * @default TRUE
     */
    'show-title-buttons'?: boolean;
    /** The title widget to display. */
    'title-widget'?: Gtk.Widget | null;
    /**
     * Whether to show platform native close/minimize/maximize buttons.
     * @since 4.18
     * @default FALSE
     */
    'use-native-controls'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkHeaderBarConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** The interface for GTK input methods. */
export interface GtkIMContextProps extends GObjectProps {
    /**
     * Additional hints that allow input methods to fine-tune their behaviour.
     * @default GTK_INPUT_HINT_NONE
     */
    'input-hints'?: number;
    /**
     * The purpose of the text field that the `GtkIMContext is connected to.
     * @default GTK_INPUT_PURPOSE_FREE_FORM
     */
    'input-purpose'?: GtkInputPurposeNick | Gtk.InputPurpose;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkIMContextConstructOnly = GObjectConstructOnly;

/** Supports compose sequences, dead keys and numeric Unicode input. */
export interface GtkIMContextSimpleProps extends GtkIMContextProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkIMContextSimpleConstructOnly = GtkIMContextConstructOnly;

/** Supports switching between multiple input methods. */
export interface GtkIMMulticontextProps extends GtkIMContextProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkIMMulticontextConstructOnly = GtkIMContextConstructOnly;

/** Contains information found when looking up an icon in `GtkIconTheme` or loading it from a file. */
export interface GtkIconPaintableProps extends GObjectProps, GdkPaintableProps, GtkSymbolicPaintableProps {
    /** The file representing the icon, if any. */
    file?: Gio.File | null;
    /**
     * The icon name that was chosen during lookup.
     * @default NULL
     * @deprecated since 4.20
     */
    'icon-name'?: string | null;
    /**
     * Whether the icon is symbolic or not.
     * @default FALSE
     * @deprecated since 4.20
     */
    'is-symbolic'?: boolean;
    /** @default 1 */
    scale?: number;
    /** @default 16 */
    size?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkIconPaintableConstructOnly = GObjectConstructOnly | GdkPaintableConstructOnly | GtkSymbolicPaintableConstructOnly | 'file' | 'icon-name';

/** Loads themed icons. */
export interface GtkIconThemeProps extends GObjectProps {
    /** The display that this icon theme object is attached to. */
    display?: Gdk.Display | null;
    /** Resource paths that will be looked at when looking for icons, similar to search paths. */
    'resource-path'?: string[] | null;
    /** The search path for this icon theme. */
    'search-path'?: string[] | null;
    /**
     * The name of the icon theme that is being used.
     * @default NULL
     */
    'theme-name'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkIconThemeConstructOnly = GObjectConstructOnly;

/** `GtkIconView` is a widget which displays data in a grid of icons. */
export interface GtkIconViewProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkCellLayoutProps, GtkConstraintTargetProps, GtkScrollableProps {
    /**
     * The activate-on-single-click property specifies whether the "item-activated" signal will be emitted after a single click.
     * @default FALSE
     */
    'activate-on-single-click'?: boolean;
    /** The `GtkCellArea` used to layout cell renderers for this view. */
    'cell-area'?: Gtk.CellArea;
    /**
     * The column-spacing property specifies the space which is inserted between the columns of the icon view.
     * @default 6
     */
    'column-spacing'?: number;
    /**
     * The columns property contains the number of the columns in which the items should be displayed.
     * @default -1
     */
    columns?: number;
    /**
     * The item-orientation property specifies how the cells (i.e.
     * @default GTK_ORIENTATION_VERTICAL
     */
    'item-orientation'?: GtkOrientationNick | Gtk.Orientation;
    /**
     * The item-padding property specifies the padding around each of the icon view's item.
     * @default 6
     */
    'item-padding'?: number;
    /**
     * The item-width property specifies the width to use for each item.
     * @default -1
     */
    'item-width'?: number;
    /**
     * The margin property specifies the space which is inserted at the edges of the icon view.
     * @default 6
     */
    margin?: number;
    /**
     * The ::markup-column property contains the number of the model column containing markup information to be displayed.
     * @default -1
     */
    'markup-column'?: number;
    /** The model of the icon view. */
    model?: Gtk.TreeModel | null;
    /**
     * The ::pixbuf-column property contains the number of the model column containing the pixbufs which are displayed.
     * @default -1
     */
    'pixbuf-column'?: number;
    /**
     * The reorderable property specifies if the items can be reordered by DND.
     * @default FALSE
     */
    reorderable?: boolean;
    /**
     * The row-spacing property specifies the space which is inserted between the rows of the icon view.
     * @default 6
     */
    'row-spacing'?: number;
    /**
     * The ::selection-mode property specifies the selection mode of icon view.
     * @default GTK_SELECTION_SINGLE
     */
    'selection-mode'?: GtkSelectionModeNick | Gtk.SelectionMode;
    /**
     * The spacing property specifies the space which is inserted between the cells (i.e.
     * @default 0
     */
    spacing?: number;
    /**
     * The ::text-column property contains the number of the model column containing the texts which are displayed.
     * @default -1
     */
    'text-column'?: number;
    /**
     * The column of the icon view model which is being used for displaying tooltips on it's rows.
     * @default -1
     */
    'tooltip-column'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkIconViewConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkCellLayoutConstructOnly | GtkConstraintTargetConstructOnly | GtkScrollableConstructOnly | 'cell-area';

/** Displays an image. */
export interface GtkImageProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /**
     * A path to the file to display.
     * @default NULL
     */
    file?: string;
    /** The `GIcon` displayed in the GtkImage. */
    gicon?: Gio.Icon | null;
    /**
     * The name of the icon in the icon theme.
     * @default NULL
     */
    'icon-name'?: string | null;
    /**
     * The symbolic size to display icons at.
     * @default GTK_ICON_SIZE_INHERIT
     */
    'icon-size'?: GtkIconSizeNick | Gtk.IconSize;
    /** The `GdkPaintable` to display. */
    paintable?: Gdk.Paintable | null;
    /**
     * The size in pixels to display icons at.
     * @default -1
     */
    'pixel-size'?: number;
    /**
     * A path to a resource file to display.
     * @default NULL
     */
    resource?: string;
    /**
     * Whether the icon displayed in the `GtkImage` will use standard icon names fallback.
     * @default FALSE
     */
    'use-fallback'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkImageConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** `GtkInfoBar` can be used to show messages to the user without a dialog. */
export interface GtkInfoBarProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /**
     * The type of the message.
     * @default GTK_MESSAGE_INFO
     */
    'message-type'?: GtkMessageTypeNick | Gtk.MessageType;
    /**
     * Whether the info bar shows its contents.
     * @default TRUE
     */
    revealed?: boolean;
    /**
     * Whether to include a standard close button.
     * @default FALSE
     */
    'show-close-button'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkInfoBarConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** Shows text in a predefined area. */
export interface GtkInscriptionProps extends GtkWidgetProps, GtkAccessibleProps, GtkAccessibleTextProps, GtkBuildableProps, GtkConstraintTargetProps {
    /**
     * A list of style attributes to apply to the text of the inscription.
     * @since 4.8
     */
    attributes?: Pango.AttrList | null;
    /**
     * Utility property that sets both the [property@Gtk.Inscription:text] and [property@Gtk.Inscription:attributes] properties, mainly intended for use in GtkBuilder ui files to ease translation support an…
     * @since 4.8
     * @default NULL
     */
    markup?: string;
    /**
     * The number of characters that should fit into the inscription at minimum.
     * @since 4.8
     * @default 3
     */
    'min-chars'?: number;
    /**
     * The number of lines that should fit into the inscription at minimum.
     * @since 4.8
     * @default 1
     */
    'min-lines'?: number;
    /**
     * The number of characters that should ideally fit into the inscription.
     * @since 4.8
     * @default 0
     */
    'nat-chars'?: number;
    /**
     * The number of lines that should ideally fit into the inscription.
     * @since 4.8
     * @default 0
     */
    'nat-lines'?: number;
    /**
     * The displayed text.
     * @since 4.8
     * @default NULL
     */
    text?: string | null;
    /**
     * The overflow method to use for the text.
     * @since 4.8
     * @default GTK_INSCRIPTION_OVERFLOW_CLIP
     */
    'text-overflow'?: GtkInscriptionOverflowNick | Gtk.InscriptionOverflow;
    /**
     * Controls how the line wrapping is done.
     * @since 4.8
     * @default PANGO_WRAP_WORD_CHAR
     */
    'wrap-mode'?: PangoWrapModeNick | Pango.WrapMode;
    /**
     * The horizontal alignment of the text inside the allocated size.
     * @since 4.8
     * @default 0.000000
     */
    xalign?: number;
    /**
     * The vertical alignment of the text inside the allocated size.
     * @since 4.8
     * @default 0.500000
     */
    yalign?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkInscriptionConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkAccessibleTextConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** Triggers when a specific keyval and modifiers are pressed. */
export interface GtkKeyvalTriggerProps extends GtkShortcutTriggerProps {
    /**
     * The key value for the trigger.
     * @default 0
     */
    keyval?: number;
    /**
     * The key modifiers for the trigger.
     * @default GDK_NO_MODIFIER_MASK
     */
    modifiers?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkKeyvalTriggerConstructOnly = GtkShortcutTriggerConstructOnly | 'keyval' | 'modifiers';

/** Displays a small amount of text. */
export interface GtkLabelProps extends GtkWidgetProps, GtkAccessibleProps, GtkAccessibleHypertextProps, GtkAccessibleTextProps, GtkBuildableProps, GtkConstraintTargetProps {
    /** A list of style attributes to apply to the text of the label. */
    attributes?: Pango.AttrList | null;
    /**
     * The preferred place to ellipsize the string, if the label does not have enough room to display the entire string.
     * @default PANGO_ELLIPSIZE_NONE
     */
    ellipsize?: PangoEllipsizeModeNick | Pango.EllipsizeMode;
    /** A menu model whose contents will be appended to the context menu. */
    'extra-menu'?: Gio.MenuModel | null;
    /**
     * The alignment of the lines in the text of the label, relative to each other.
     * @default GTK_JUSTIFY_LEFT
     */
    justify?: GtkJustificationNick | Gtk.Justification;
    /** The contents of the label. */
    label?: string;
    /**
     * The number of lines to which an ellipsized, wrapping label should display before it gets ellipsized.
     * @default -1
     */
    lines?: number;
    /**
     * The desired maximum width of the label, in characters.
     * @default -1
     */
    'max-width-chars'?: number;
    /** The widget to be activated when the labels mnemonic key is pressed. */
    'mnemonic-widget'?: Gtk.Widget | null;
    /**
     * Select the line wrapping for the natural size request.
     * @since 4.6
     * @default GTK_NATURAL_WRAP_INHERIT
     */
    'natural-wrap-mode'?: GtkNaturalWrapModeNick | Gtk.NaturalWrapMode;
    /**
     * Whether the label text can be selected with the mouse.
     * @default FALSE
     */
    selectable?: boolean;
    /**
     * Whether the label is in single line mode.
     * @default FALSE
     */
    'single-line-mode'?: boolean;
    /**
     * Custom tabs for this label.
     * @since 4.8
     */
    tabs?: Pango.TabArray | null;
    /**
     * True if the text of the label includes Pango markup.
     * @default FALSE
     */
    'use-markup'?: boolean;
    /**
     * True if the text of the label indicates a mnemonic with an `_` before the mnemonic character.
     * @default FALSE
     */
    'use-underline'?: boolean;
    /**
     * The desired width of the label, in characters.
     * @default -1
     */
    'width-chars'?: number;
    /**
     * True if the label text will wrap if it gets too wide.
     * @default FALSE
     */
    wrap?: boolean;
    /**
     * Controls how the line wrapping is done.
     * @default PANGO_WRAP_WORD
     */
    'wrap-mode'?: PangoWrapModeNick | Pango.WrapMode;
    /**
     * The horizontal alignment of the label text inside its size allocation.
     * @default 0.500000
     */
    xalign?: number;
    /**
     * The vertical alignment of the label text inside its size allocation.
     * @default 0.500000
     */
    yalign?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkLabelConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkAccessibleHypertextConstructOnly | GtkAccessibleTextConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** The base class for objects that are meant to hold layout properties. */
export interface GtkLayoutChildProps extends GObjectProps {
    /** The widget that is associated to the `GtkLayoutChild` instance. */
    'child-widget'?: Gtk.Widget;
    /** The layout manager that created the `GtkLayoutChild` instance. */
    'layout-manager'?: Gtk.LayoutManager;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkLayoutChildConstructOnly = GObjectConstructOnly | 'child-widget' | 'layout-manager';

/** Handles the preferred size and allocation for children of a widget. */
export interface GtkLayoutManagerProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkLayoutManagerConstructOnly = GObjectConstructOnly;

/** Shows a level indicator. */
export interface GtkLevelBarProps extends GtkWidgetProps, GtkAccessibleProps, GtkAccessibleRangeProps, GtkBuildableProps, GtkConstraintTargetProps, GtkOrientableProps {
    /**
     * Whether the `GtkLeveBar` is inverted.
     * @default FALSE
     */
    inverted?: boolean;
    /**
     * Determines the maximum value of the interval that can be displayed by the bar.
     * @default 1.000000
     */
    'max-value'?: number;
    /**
     * Determines the minimum value of the interval that can be displayed by the bar.
     * @default 0.000000
     */
    'min-value'?: number;
    /**
     * Determines the way `GtkLevelBar` interprets the value properties to draw the level fill area.
     * @default GTK_LEVEL_BAR_MODE_CONTINUOUS
     */
    mode?: GtkLevelBarModeNick | Gtk.LevelBarMode;
    /**
     * Determines the currently filled value of the level bar.
     * @default 0.000000
     */
    value?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkLevelBarConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkAccessibleRangeConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkOrientableConstructOnly;

/** A button with a hyperlink. */
export interface GtkLinkButtonProps extends GtkButtonProps, GtkAccessibleProps, GtkActionableProps, GtkBuildableProps, GtkConstraintTargetProps {
    /**
     * The URI bound to this button.
     * @default NULL
     */
    uri?: string;
    /**
     * The 'visited' state of this button.
     * @default FALSE
     */
    visited?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkLinkButtonConstructOnly = GtkButtonConstructOnly | GtkAccessibleConstructOnly | GtkActionableConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** The abstract base class for GTK's list widgets. */
export interface GtkListBaseProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkOrientableProps, GtkScrollableProps {
    /**
     * The orientation of the list.
     * @default GTK_ORIENTATION_VERTICAL
     */
    orientation?: GtkOrientationNick | Gtk.Orientation;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkListBaseConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkOrientableConstructOnly | GtkScrollableConstructOnly;

/** Shows a vertical list. */
export interface GtkListBoxProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /**
     * Whether to accept unpaired release events.
     * @default FALSE
     */
    'accept-unpaired-release'?: boolean;
    /**
     * Determines whether children can be activated with a single click, or require a double-click.
     * @default TRUE
     */
    'activate-on-single-click'?: boolean;
    /**
     * The selection mode used by the list box.
     * @default GTK_SELECTION_SINGLE
     */
    'selection-mode'?: GtkSelectionModeNick | Gtk.SelectionMode;
    /**
     * Whether to show separators between rows.
     * @default FALSE
     */
    'show-separators'?: boolean;
    /**
     * Behavior of the <kbd>Tab</kbd> key
     * @since 4.18
     * @default GTK_LIST_TAB_ALL
     */
    'tab-behavior'?: GtkListTabBehaviorNick | Gtk.ListTabBehavior;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkListBoxConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** The kind of widget that can be added to a `GtkListBox`. */
export interface GtkListBoxRowProps extends GtkWidgetProps, GtkAccessibleProps, GtkActionableProps, GtkBuildableProps, GtkConstraintTargetProps {
    /**
     * Determines whether the ::row-activated signal will be emitted for this row.
     * @default TRUE
     */
    activatable?: boolean;
    /** The child widget. */
    child?: Gtk.Widget | null;
    /**
     * Determines whether this row can be selected.
     * @default TRUE
     */
    selectable?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkListBoxRowConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkActionableConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** Used by list widgets to represent the headers they display. */
export interface GtkListHeaderProps extends GObjectProps {
    /**
     * Widget used for display.
     * @since 4.12
     */
    child?: Gtk.Widget | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkListHeaderConstructOnly = GObjectConstructOnly;

/** Used by list widgets to represent items in a [iface@Gio.ListModel]. */
export interface GtkListItemProps extends GObjectProps {
    /**
     * The accessible description to set on the listitem.
     * @since 4.12
     * @default NULL
     */
    'accessible-description'?: string;
    /**
     * The accessible label to set on the listitem.
     * @since 4.12
     * @default NULL
     */
    'accessible-label'?: string;
    /**
     * If the item can be activated by the user.
     * @default TRUE
     */
    activatable?: boolean;
    /** Widget used for display. */
    child?: Gtk.Widget | null;
    /**
     * If the item can be focused with the keyboard.
     * @since 4.12
     * @default TRUE
     */
    focusable?: boolean;
    /**
     * If the item can be selected by the user.
     * @default TRUE
     */
    selectable?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkListItemConstructOnly = GObjectConstructOnly;

/** Creates widgets for the items taken from a `GListModel`. */
export interface GtkListItemFactoryProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkListItemFactoryConstructOnly = GObjectConstructOnly;

/** A list-like data structure that can be used with the [class@Gtk.TreeView]. */
export interface GtkListStoreProps extends GObjectProps, GtkBuildableProps, GtkTreeDragDestProps, GtkTreeDragSourceProps, GtkTreeModelProps, GtkTreeSortableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkListStoreConstructOnly = GObjectConstructOnly | GtkBuildableConstructOnly | GtkTreeDragDestConstructOnly | GtkTreeDragSourceConstructOnly | GtkTreeModelConstructOnly | GtkTreeSortableConstructOnly;

/** Presents a large dynamic list of items. */
export interface GtkListViewProps extends GtkListBaseProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkOrientableProps, GtkScrollableProps {
    /**
     * Allow rubberband selection.
     * @default FALSE
     */
    'enable-rubberband'?: boolean;
    /** Factory for populating list items. */
    factory?: Gtk.ListItemFactory | null;
    /**
     * Factory for creating header widgets.
     * @since 4.12
     */
    'header-factory'?: Gtk.ListItemFactory | null;
    /** Model for the items displayed. */
    model?: Gtk.SelectionModel | null;
    /**
     * Show separators between rows.
     * @default FALSE
     */
    'show-separators'?: boolean;
    /**
     * Activate rows on single click and select them on hover.
     * @default FALSE
     */
    'single-click-activate'?: boolean;
    /**
     * Behavior of the <kbd>Tab</kbd> key
     * @since 4.12
     * @default GTK_LIST_TAB_ALL
     */
    'tab-behavior'?: GtkListTabBehaviorNick | Gtk.ListTabBehavior;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkListViewConstructOnly = GtkListBaseConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkOrientableConstructOnly | GtkScrollableConstructOnly;

/** `GtkLockButton` is a widget to obtain and revoke authorizations needed to operate the controls. */
export interface GtkLockButtonProps extends GtkButtonProps, GtkAccessibleProps, GtkActionableProps, GtkBuildableProps, GtkConstraintTargetProps {
    /**
     * The `GPermission object controlling this button.
     * @deprecated since 4.10: This widget will be removed in GTK 5
     */
    permission?: Gio.Permission | null;
    /**
     * The text to display when prompting the user to lock.
     * @default Lock
     * @deprecated since 4.10: This widget will be removed in GTK 5
     */
    'text-lock'?: string;
    /**
     * The text to display when prompting the user to unlock.
     * @default Unlock
     * @deprecated since 4.10: This widget will be removed in GTK 5
     */
    'text-unlock'?: string;
    /**
     * The tooltip to display when prompting the user to lock.
     * @default Dialog is unlocked.\nClick to prevent further changes
     * @deprecated since 4.10: This widget will be removed in GTK 5
     */
    'tooltip-lock'?: string;
    /**
     * The tooltip to display when the user cannot obtain authorization.
     * @default System policy prevents changes.\nContact your system administrator
     * @deprecated since 4.10: This widget will be removed in GTK 5
     */
    'tooltip-not-authorized'?: string;
    /**
     * The tooltip to display when prompting the user to unlock.
     * @default Dialog is locked.\nClick to make changes
     * @deprecated since 4.10: This widget will be removed in GTK 5
     */
    'tooltip-unlock'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkLockButtonConstructOnly = GtkButtonConstructOnly | GtkAccessibleConstructOnly | GtkActionableConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** A list model that maps the items in another model to different items. */
export interface GtkMapListModelProps extends GObjectProps, GListModelProps, GtkSectionModelProps {
    /** The model being mapped. */
    model?: Gio.ListModel | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkMapListModelConstructOnly = GObjectConstructOnly | GListModelConstructOnly | GtkSectionModelConstructOnly;

/** Shows controls for video playback. */
export interface GtkMediaControlsProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /** The media-stream managed by this object or %NULL if none. */
    'media-stream'?: Gtk.MediaStream | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkMediaControlsConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** Displays a popup when clicked. */
export interface GtkMenuButtonProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /**
     * Whether the menu button is active.
     * @since 4.10
     * @default FALSE
     */
    active?: boolean;
    /**
     * Whether to show a dropdown arrow even when using an icon or a custom child.
     * @since 4.4
     * @default FALSE
     */
    'always-show-arrow'?: boolean;
    /**
     * Whether the size of the button can be made smaller than the natural size of its contents.
     * @since 4.12
     * @default FALSE
     */
    'can-shrink'?: boolean;
    /**
     * The child widget.
     * @since 4.6
     */
    child?: Gtk.Widget | null;
    /**
     * The `GtkArrowType` representing the direction in which the menu or popover will be popped out.
     * @default GTK_ARROW_DOWN
     */
    direction?: GtkArrowTypeNick | Gtk.ArrowType;
    /**
     * Whether the button has a frame.
     * @default TRUE
     */
    'has-frame'?: boolean;
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
    /** The `GtkPopover` that will be popped up when the button is clicked. */
    popover?: Gtk.Popover | null;
    /**
     * Whether the menu button acts as a primary menu.
     * @since 4.4
     * @default FALSE
     */
    primary?: boolean;
    /**
     * If set an underscore in the text indicates a mnemonic.
     * @default FALSE
     */
    'use-underline'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkMenuButtonConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** `GtkMessageDialog` presents a dialog with some message text. */
export interface GtkMessageDialogProps extends GtkDialogProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkNativeProps, GtkRootProps, GtkShortcutManagerProps {
    /**
     * Set of buttons to display on the dialog.
     * @default GTK_BUTTONS_NONE
     */
    buttons?: GtkButtonsTypeNick | Gtk.ButtonsType;
    /**
     * The type of the message.
     * @default GTK_MESSAGE_INFO
     */
    'message-type'?: GtkMessageTypeNick | Gtk.MessageType;
    /**
     * The secondary text of the message dialog.
     * @default NULL
     */
    'secondary-text'?: string;
    /**
     * %TRUE if the secondary text of the dialog includes Pango markup.
     * @default FALSE
     */
    'secondary-use-markup'?: boolean;
    /** The primary text of the message dialog. */
    text?: string;
    /**
     * %TRUE if the primary text of the dialog includes Pango markup.
     * @default FALSE
     */
    'use-markup'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkMessageDialogConstructOnly = GtkDialogConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkNativeConstructOnly | GtkRootConstructOnly | GtkShortcutManagerConstructOnly | 'buttons';

/** Activates a widget with a mnemonic. */
export interface GtkMnemonicActionProps extends GtkShortcutActionProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkMnemonicActionConstructOnly = GtkShortcutActionConstructOnly;

/** Triggers when a specific mnemonic is pressed. */
export interface GtkMnemonicTriggerProps extends GtkShortcutTriggerProps {
    /**
     * The key value for the trigger.
     * @default 0
     */
    keyval?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkMnemonicTriggerConstructOnly = GtkShortcutTriggerConstructOnly | 'keyval';

/** Asks the user for passwords and other information required to mount a volume. */
export interface GtkMountOperationProps extends GMountOperationProps {
    /** The display where dialogs will be shown. */
    display?: Gdk.Display;
    /** The parent window. */
    parent?: Gtk.Window | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkMountOperationConstructOnly = GMountOperationConstructOnly;

/** Base class for filters that combine multiple filters. */
export interface GtkMultiFilterProps extends GtkFilterProps, GListModelProps, GtkBuildableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkMultiFilterConstructOnly = GtkFilterConstructOnly | GListModelConstructOnly | GtkBuildableConstructOnly;

/** A selection model that allows selecting multiple elements. */
export interface GtkMultiSelectionProps extends GObjectProps, GListModelProps, GtkSectionModelProps, GtkSelectionModelProps {
    /** The list managed by this selection. */
    model?: Gio.ListModel | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkMultiSelectionConstructOnly = GObjectConstructOnly | GListModelConstructOnly | GtkSectionModelConstructOnly | GtkSelectionModelConstructOnly;

/** Combines multiple sorters by trying them in turn. */
export interface GtkMultiSorterProps extends GtkSorterProps, GListModelProps, GtkBuildableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkMultiSorterConstructOnly = GtkSorterConstructOnly | GListModelConstructOnly | GtkBuildableConstructOnly;

/** Activates a named action. */
export interface GtkNamedActionProps extends GtkShortcutActionProps {
    /**
     * The name of the action to activate.
     * @default NULL
     */
    'action-name'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkNamedActionConstructOnly = GtkShortcutActionConstructOnly | 'action-name';

/** An interface for widgets that have their own [class@Gdk.Surface]. */
export interface GtkNativeProps extends GtkWidgetProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkNativeConstructOnly = GtkWidgetConstructOnly;

/** Base class for platform dialogs that don't use `GtkDialog`. */
export interface GtkNativeDialogProps extends GObjectProps {
    /**
     * Whether the window should be modal with respect to its transient parent.
     * @default FALSE
     */
    modal?: boolean;
    /**
     * The title of the dialog window
     * @default NULL
     */
    title?: string | null;
    /** The transient parent of the dialog, or %NULL for none. */
    'transient-for'?: Gtk.Window | null;
    /**
     * Whether the window is currently visible.
     * @default FALSE
     */
    visible?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkNativeDialogConstructOnly = GObjectConstructOnly;

/** A `GtkShortcutTrigger` that never triggers. */
export interface GtkNeverTriggerProps extends GtkShortcutTriggerProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkNeverTriggerConstructOnly = GtkShortcutTriggerConstructOnly;

/** A selection model that does not allow selecting anything. */
export interface GtkNoSelectionProps extends GObjectProps, GListModelProps, GtkSectionModelProps, GtkSelectionModelProps {
    /** The model being managed. */
    model?: Gio.ListModel | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkNoSelectionConstructOnly = GObjectConstructOnly | GListModelConstructOnly | GtkSectionModelConstructOnly | GtkSelectionModelConstructOnly;

/** Switches between children using tabs. */
export interface GtkNotebookProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /**
     * If %TRUE, pressing the right mouse button on the notebook shows a page switching menu.
     * @default FALSE
     */
    'enable-popup'?: boolean;
    /**
     * Group name for tab drag and drop.
     * @default NULL
     */
    'group-name'?: string | null;
    /**
     * The index of the current page.
     * @default -1
     */
    page?: number;
    /**
     * If %TRUE, scroll arrows are added if there are too many pages to fit.
     * @default FALSE
     */
    scrollable?: boolean;
    /**
     * Whether the border should be shown.
     * @default TRUE
     */
    'show-border'?: boolean;
    /**
     * Whether tabs should be shown.
     * @default TRUE
     */
    'show-tabs'?: boolean;
    /**
     * Which side of the notebook holds the tabs.
     * @default GTK_POS_TOP
     */
    'tab-pos'?: GtkPositionTypeNick | Gtk.PositionType;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkNotebookConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** An auxiliary object used by `GtkNotebook`. */
export interface GtkNotebookPageProps extends GObjectProps {
    /** The child for this page. */
    child?: Gtk.Widget;
    /**
     * Whether the tab is detachable.
     * @default FALSE
     */
    detachable?: boolean;
    /** The label widget displayed in the child's menu entry. */
    menu?: Gtk.Widget;
    /**
     * The text of the menu widget.
     * @default NULL
     */
    'menu-label'?: string;
    /**
     * The index of the child in the parent.
     * @default 0
     */
    position?: number;
    /**
     * Whether the tab is reorderable by user action.
     * @default FALSE
     */
    reorderable?: boolean;
    /** The tab widget for this page. */
    tab?: Gtk.Widget;
    /**
     * Whether to expand the child's tab.
     * @default FALSE
     */
    'tab-expand'?: boolean;
    /**
     * Whether the child's tab should fill the allocated area.
     * @default TRUE
     */
    'tab-fill'?: boolean;
    /**
     * The text of the tab widget.
     * @default NULL
     */
    'tab-label'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkNotebookPageConstructOnly = GObjectConstructOnly | 'child' | 'menu' | 'tab';

/** Does nothing. */
export interface GtkNothingActionProps extends GtkShortcutActionProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkNothingActionConstructOnly = GtkShortcutActionConstructOnly;

/** Sorts items numerically. */
export interface GtkNumericSorterProps extends GtkSorterProps {
    /** The expression to evaluate on items to get a number to compare with. */
    expression?: Gtk.Expression | null;
    /**
     * Whether the sorter will sort smaller numbers first.
     * @default GTK_SORT_ASCENDING
     */
    'sort-order'?: GtkSortTypeNick | Gtk.SortType;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkNumericSorterConstructOnly = GtkSorterConstructOnly;

/** A `GObject` value in a `GtkExpression`. */
export interface GtkObjectExpressionProps extends GtkExpressionProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkObjectExpressionConstructOnly = GtkExpressionConstructOnly;

/** An interface for widgets that can be oriented horizontally or vertically. */
export interface GtkOrientableProps extends GObjectProps {
    /**
     * The orientation of the orientable.
     * @default GTK_ORIENTATION_HORIZONTAL
     */
    orientation?: GtkOrientationNick | Gtk.Orientation;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkOrientableConstructOnly = GObjectConstructOnly;

/** Places “overlay” widgets on top of a single main child. */
export interface GtkOverlayProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /** The main child widget. */
    child?: Gtk.Widget | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkOverlayConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** The layout manager used by [class@Gtk.Overlay]. */
export interface GtkOverlayLayoutProps extends GtkLayoutManagerProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkOverlayLayoutConstructOnly = GtkLayoutManagerConstructOnly;

/** `GtkLayoutChild` subclass for children in a `GtkOverlayLayout`. */
export interface GtkOverlayLayoutChildProps extends GtkLayoutChildProps {
    /**
     * Whether the child should be clipped to fit the parent's size.
     * @default FALSE
     */
    'clip-overlay'?: boolean;
    /**
     * Whether the child size should contribute to the `GtkOverlayLayout`'s measurement.
     * @default FALSE
     */
    measure?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkOverlayLayoutChildConstructOnly = GtkLayoutChildConstructOnly;

/** Handles input from the pads found in drawing tablets. */
export interface GtkPadControllerProps extends GtkEventControllerProps {
    /** The action group of the controller. */
    'action-group'?: Gio.ActionGroup;
    /** The pad of the controller. */
    pad?: Gdk.Device;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkPadControllerConstructOnly = GtkEventControllerConstructOnly | 'action-group' | 'pad';

/** Stores page size, orientation and margins for printing. */
export interface GtkPageSetupProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkPageSetupConstructOnly = GObjectConstructOnly;

/** Presents a page setup dialog for platforms which don’t provide a native page setup dialog, like Unix. */
export interface GtkPageSetupUnixDialogProps extends GtkDialogProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkNativeProps, GtkRootProps, GtkShortcutManagerProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkPageSetupUnixDialogConstructOnly = GtkDialogConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkNativeConstructOnly | GtkRootConstructOnly | GtkShortcutManagerConstructOnly;

/** Arranges its children in two panes, horizontally or vertically. */
export interface GtkPanedProps extends GtkWidgetProps, GtkAccessibleProps, GtkAccessibleRangeProps, GtkBuildableProps, GtkConstraintTargetProps, GtkOrientableProps {
    /** The second child. */
    'end-child'?: Gtk.Widget | null;
    /**
     * Position of the separator in pixels, from the left/top.
     * @default 0
     */
    position?: number;
    /**
     * Whether the [property@Gtk.Paned:position] property has been set.
     * @default FALSE
     */
    'position-set'?: boolean;
    /**
     * Determines whether the second child expands and shrinks along with the paned widget.
     * @default TRUE
     */
    'resize-end-child'?: boolean;
    /**
     * Determines whether the first child expands and shrinks along with the paned widget.
     * @default TRUE
     */
    'resize-start-child'?: boolean;
    /**
     * Determines whether the second child can be made smaller than its requisition.
     * @default TRUE
     */
    'shrink-end-child'?: boolean;
    /**
     * Determines whether the first child can be made smaller than its requisition.
     * @default TRUE
     */
    'shrink-start-child'?: boolean;
    /** The first child. */
    'start-child'?: Gtk.Widget | null;
    /**
     * Whether the `GtkPaned` should provide a stronger visual separation.
     * @default FALSE
     */
    'wide-handle'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkPanedConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkAccessibleRangeConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkOrientableConstructOnly;

/** A `GParamSpec` for properties holding a `GtkExpression`. */
export interface GtkParamSpecExpressionProps extends GParamProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkParamSpecExpressionConstructOnly = GParamConstructOnly;

/** A single-line text entry widget for entering passwords and other secrets. */
export interface GtkPasswordEntryProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkEditableProps {
    /**
     * Whether to activate the default widget when Enter is pressed.
     * @default FALSE
     */
    'activates-default'?: boolean;
    /** A menu model whose contents will be appended to the context menu. */
    'extra-menu'?: Gio.MenuModel | null;
    /**
     * The text that will be displayed in the `GtkPasswordEntry` when it is empty and unfocused.
     * @default NULL
     */
    'placeholder-text'?: string;
    /**
     * Whether to show an icon for revealing the content.
     * @default FALSE
     */
    'show-peek-icon'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkPasswordEntryConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkEditableConstructOnly;

/** A `GtkEntryBuffer` that locks the underlying memory to prevent it from being swapped to disk. */
export interface GtkPasswordEntryBufferProps extends GtkEntryBufferProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkPasswordEntryBufferConstructOnly = GtkEntryBufferConstructOnly;

/** Displays a `GdkPaintable`. */
export interface GtkPictureProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /**
     * The alternative textual description for the picture.
     * @default NULL
     */
    'alternative-text'?: string | null;
    /**
     * If the `GtkPicture` can be made smaller than the natural size of its contents.
     * @default TRUE
     */
    'can-shrink'?: boolean;
    /**
     * How the content should be resized to fit inside the `GtkPicture`.
     * @since 4.8
     * @default GTK_CONTENT_FIT_CONTAIN
     */
    'content-fit'?: GtkContentFitNick | Gtk.ContentFit;
    /** The `GFile` that is displayed or %NULL if none. */
    file?: Gio.File | null;
    /**
     * If the rendering of the contents is isolated from the rest of the widget tree.
     * @since 4.22
     * @default TRUE
     */
    'isolate-contents'?: boolean;
    /**
     * Whether the GtkPicture will render its contents trying to preserve the aspect ratio.
     * @default TRUE
     * @deprecated since 4.8: Use [property@Gtk.Picture:content-fit] instead.
     */
    'keep-aspect-ratio'?: boolean;
    /** The `GdkPaintable` to be displayed by this `GtkPicture`. */
    paintable?: Gdk.Paintable | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkPictureConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** Presents a bubble-like popup. */
export interface GtkPopoverProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkNativeProps, GtkShortcutManagerProps {
    /**
     * Whether to dismiss the popover on outside clicks.
     * @default TRUE
     */
    autohide?: boolean;
    /**
     * Whether the popover pops down after a child popover.
     * @default FALSE
     */
    'cascade-popdown'?: boolean;
    /** The child widget. */
    child?: Gtk.Widget | null;
    /** The default widget inside the popover. */
    'default-widget'?: Gtk.Widget;
    /**
     * Whether to draw an arrow.
     * @default TRUE
     */
    'has-arrow'?: boolean;
    /**
     * Whether mnemonics are currently visible in this popover.
     * @default FALSE
     */
    'mnemonics-visible'?: boolean;
    /** Rectangle in the parent widget that the popover points to. */
    'pointing-to'?: Gdk.Rectangle;
    /**
     * How to place the popover, relative to its parent.
     * @default GTK_POS_BOTTOM
     */
    position?: GtkPositionTypeNick | Gtk.PositionType;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkPopoverConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkNativeConstructOnly | GtkShortcutManagerConstructOnly;

/** A single child container with a popover. */
export interface GtkPopoverBinProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /**
     * The child widget of the popover bin.
     * @since 4.22
     */
    child?: Gtk.Widget | null;
    /**
     * Whether the popover bin will handle input to trigger the popup.
     * @since 4.22
     * @default FALSE
     */
    'handle-input'?: boolean;
    /**
     * The `GMenuModel` from which the popup will be created.
     * @since 4.22
     */
    'menu-model'?: Gio.MenuModel | null;
    /**
     * The `GtkPopover` that will be popped up when calling [method@Gtk.PopoverBin.popup].
     * @since 4.22
     */
    popover?: Gtk.Popover | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkPopoverBinConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** A subclass of `GtkPopover` that implements menu behavior. */
export interface GtkPopoverMenuProps extends GtkPopoverProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkNativeProps, GtkShortcutManagerProps {
    /**
     * The flags that @popover uses to create/display a menu from its model.
     * @since 4.14
     * @default GTK_POPOVER_MENU_SLIDING
     */
    flags?: number;
    /** The model from which the menu is made. */
    'menu-model'?: Gio.MenuModel | null;
    /**
     * The name of the visible submenu.
     * @default NULL
     */
    'visible-submenu'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkPopoverMenuConstructOnly = GtkPopoverConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkNativeConstructOnly | GtkShortcutManagerConstructOnly;

/** Presents a horizontal bar of items that pop up menus when clicked. */
export interface GtkPopoverMenuBarProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /** The `GMenuModel` from which the menu bar is created. */
    'menu-model'?: Gio.MenuModel | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkPopoverMenuBarConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** Encapsulates context information that is required when drawing pages for printing. */
export interface GtkPrintContextProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkPrintContextConstructOnly = GObjectConstructOnly;

/** Asynchronous API to present a print dialog to the user. */
export interface GtkPrintDialogProps extends GObjectProps {
    /**
     * A label that may be shown on the accept button of a print dialog that is presented by [method@Gtk.PrintDialog.setup].
     * @since 4.14
     * @default NULL
     */
    'accept-label'?: string;
    /**
     * Whether the print dialog is modal.
     * @since 4.14
     * @default TRUE
     */
    modal?: boolean;
    /**
     * The page setup to use.
     * @since 4.14
     */
    'page-setup'?: Gtk.PageSetup | null;
    /**
     * The print settings to use.
     * @since 4.14
     */
    'print-settings'?: Gtk.PrintSettings | null;
    /**
     * A title that may be shown on the print dialog that is presented by [method@Gtk.PrintDialog.setup].
     * @since 4.14
     * @default NULL
     */
    title?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkPrintDialogConstructOnly = GObjectConstructOnly;

/** Represents a job that is sent to a printer. */
export interface GtkPrintJobProps extends GObjectProps {
    /** Page setup. */
    'page-setup'?: Gtk.PageSetup;
    /** The printer to send the job to. */
    printer?: Gtk.Printer;
    /** Printer settings. */
    settings?: Gtk.PrintSettings;
    /**
     * The title of the print job.
     * @default NULL
     */
    title?: string;
    /**
     * %TRUE if the print job will continue to emit status-changed signals after the print data has been setn to the printer.
     * @default FALSE
     */
    'track-print-status'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkPrintJobConstructOnly = GObjectConstructOnly | 'page-setup' | 'printer' | 'settings' | 'title';

/** High-level, portable printing API. */
export interface GtkPrintOperationProps extends GObjectProps, GtkPrintOperationPreviewProps {
    /**
     * Determines whether the print operation may run asynchronously or not.
     * @default FALSE
     */
    'allow-async'?: boolean;
    /**
     * The current page in the document.
     * @default -1
     */
    'current-page'?: number;
    /**
     * Used as the label of the tab containing custom widgets.
     * @default NULL
     */
    'custom-tab-label'?: string;
    /** The `GtkPageSetup` used by default. */
    'default-page-setup'?: Gtk.PageSetup;
    /**
     * If %TRUE, page size combo box and orientation combo box are embedded into page setup page.
     * @default FALSE
     */
    'embed-page-setup'?: boolean;
    /**
     * The name of a file to generate instead of showing the print dialog.
     * @default NULL
     */
    'export-filename'?: string;
    /**
     * Determines whether there is a selection in your application.
     * @default FALSE
     */
    'has-selection'?: boolean;
    /** A string used to identify the job (e.g. */
    'job-name'?: string;
    /**
     * The number of pages in the document.
     * @default -1
     */
    'n-pages'?: number;
    /** The `GtkPrintSettings` used for initializing the dialog. */
    'print-settings'?: Gtk.PrintSettings | null;
    /**
     * Determines whether to show a progress dialog during the print operation.
     * @default FALSE
     */
    'show-progress'?: boolean;
    /**
     * If %TRUE, the print operation will support print of selection.
     * @default FALSE
     */
    'support-selection'?: boolean;
    /**
     * If %TRUE, the print operation will try to continue report on the status of the print job in the printer queues and printer.
     * @default FALSE
     */
    'track-print-status'?: boolean;
    /**
     * The transformation for the cairo context obtained from `GtkPrintContext` is set up in such a way that distances are measured in units of @unit.
     * @default GTK_UNIT_NONE
     */
    unit?: GtkUnitNick | Gtk.Unit;
    /**
     * If %TRUE, the transformation for the cairo context obtained from `GtkPrintContext` puts the origin at the top left corner of the page.
     * @default FALSE
     */
    'use-full-page'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkPrintOperationConstructOnly = GObjectConstructOnly | GtkPrintOperationPreviewConstructOnly;

/** The interface that is used to implement print preview. */
export interface GtkPrintOperationPreviewProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkPrintOperationPreviewConstructOnly = GObjectConstructOnly;

/** Collects the settings of a print dialog in a system-independent way. */
export interface GtkPrintSettingsProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkPrintSettingsConstructOnly = GObjectConstructOnly;

/** A print dialog for platforms which don’t provide a native print dialog, like Unix. */
export interface GtkPrintUnixDialogProps extends GtkDialogProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkNativeProps, GtkRootProps, GtkShortcutManagerProps {
    /**
     * The current page in the document.
     * @default -1
     */
    'current-page'?: number;
    /**
     * %TRUE if the page setup controls are embedded.
     * @default FALSE
     */
    'embed-page-setup'?: boolean;
    /**
     * Whether the application has a selection.
     * @default FALSE
     */
    'has-selection'?: boolean;
    /**
     * Capabilities the application can handle.
     * @default 0
     */
    'manual-capabilities'?: number;
    /** The `GtkPageSetup` object to use. */
    'page-setup'?: Gtk.PageSetup;
    /** The `GtkPrintSettings` object used for this dialog. */
    'print-settings'?: Gtk.PrintSettings;
    /**
     * Whether the dialog supports selection.
     * @default FALSE
     */
    'support-selection'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkPrintUnixDialogConstructOnly = GtkDialogConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkNativeConstructOnly | GtkRootConstructOnly | GtkShortcutManagerConstructOnly;

/** Represents a printer. */
export interface GtkPrinterProps extends GObjectProps {
    /**
     * %TRUE if this printer can accept PDF.
     * @default FALSE
     */
    'accepts-pdf'?: boolean;
    /**
     * %TRUE if this printer can accept PostScript.
     * @default TRUE
     */
    'accepts-ps'?: boolean;
    /**
     * %FALSE if this represents a real hardware device.
     * @default FALSE
     */
    'is-virtual'?: boolean;
    /** The name of the printer. */
    name?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkPrinterConstructOnly = GObjectConstructOnly | 'accepts-pdf' | 'accepts-ps' | 'is-virtual' | 'name';

/** Displays the progress of a long-running operation. */
export interface GtkProgressBarProps extends GtkWidgetProps, GtkAccessibleProps, GtkAccessibleRangeProps, GtkBuildableProps, GtkConstraintTargetProps, GtkOrientableProps {
    /**
     * The preferred place to ellipsize the string.
     * @default PANGO_ELLIPSIZE_NONE
     */
    ellipsize?: PangoEllipsizeModeNick | Pango.EllipsizeMode;
    /**
     * The fraction of total work that has been completed.
     * @default 0.000000
     */
    fraction?: number;
    /**
     * Invert the direction in which the progress bar grows.
     * @default FALSE
     */
    inverted?: boolean;
    /**
     * The fraction of total progress to move the bounding block when pulsed.
     * @default 0.100000
     */
    'pulse-step'?: number;
    /**
     * Sets whether the progress bar will show a text in addition to the bar itself.
     * @default FALSE
     */
    'show-text'?: boolean;
    /**
     * Text to be displayed in the progress bar.
     * @default NULL
     */
    text?: string | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkProgressBarConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkAccessibleRangeConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkOrientableConstructOnly;

/** A `GObject` property value in a `GtkExpression`. */
export interface GtkPropertyExpressionProps extends GtkExpressionProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkPropertyExpressionConstructOnly = GtkExpressionConstructOnly;

/** Base class for widgets which visualize an adjustment. */
export interface GtkRangeProps extends GtkWidgetProps, GtkAccessibleProps, GtkAccessibleRangeProps, GtkBuildableProps, GtkConstraintTargetProps, GtkOrientableProps {
    /** The adjustment that is controlled by the range. */
    adjustment?: Gtk.Adjustment;
    /**
     * The fill level (e.g.
     * @default 179769313486231570814527423731704356798070567525844996598917476803157260780028538760589558632766878171540458953514382464234321326889464182768467546703537516986049910576551282076245490090389328944075868508455133942304583236903222948165808559332123348274797826204144723168738177180919299881250404026184124858368.000000
     */
    'fill-level'?: number;
    /**
     * If %TRUE, the direction in which the slider moves is inverted.
     * @default FALSE
     */
    inverted?: boolean;
    /**
     * Controls whether slider movement is restricted to an upper boundary set by the fill level.
     * @default TRUE
     */
    'restrict-to-fill-level'?: boolean;
    /**
     * The number of digits to round the value to when it changes.
     * @default -1
     */
    'round-digits'?: number;
    /**
     * Controls whether fill level indicator graphics are displayed on the trough.
     * @default FALSE
     */
    'show-fill-level'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkRangeConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkAccessibleRangeConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkOrientableConstructOnly;

/** Manages and looks up recently used files. */
export interface GtkRecentManagerProps extends GObjectProps {
    /**
     * The full path to the file to be used to store and read the recently used resources list
     * @default NULL
     */
    filename?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkRecentManagerConstructOnly = GObjectConstructOnly | 'filename';

/** Animates the transition of its child from invisible to visible. */
export interface GtkRevealerProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /** The child widget. */
    child?: Gtk.Widget | null;
    /**
     * Whether the revealer should reveal the child.
     * @default FALSE
     */
    'reveal-child'?: boolean;
    /**
     * The animation duration, in milliseconds.
     * @default 250
     */
    'transition-duration'?: number;
    /**
     * The type of animation used to transition.
     * @default GTK_REVEALER_TRANSITION_TYPE_SLIDE_DOWN
     */
    'transition-type'?: GtkRevealerTransitionTypeNick | Gtk.RevealerTransitionType;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkRevealerConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** An interface for widgets that can act as the root of a widget hierarchy. */
export interface GtkRootProps extends GtkNativeProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkRootConstructOnly = GtkNativeConstructOnly;

/** Allows to select a numeric value with a slider control. */
export interface GtkScaleProps extends GtkRangeProps, GtkAccessibleProps, GtkAccessibleRangeProps, GtkBuildableProps, GtkConstraintTargetProps, GtkOrientableProps {
    /**
     * The number of decimal places that are displayed in the value.
     * @default 1
     */
    digits?: number;
    /**
     * Whether the current value is displayed as a string next to the slider.
     * @default FALSE
     */
    'draw-value'?: boolean;
    /**
     * Whether the scale has an origin.
     * @default TRUE
     */
    'has-origin'?: boolean;
    /**
     * The position in which the current value is displayed.
     * @default GTK_POS_TOP
     */
    'value-pos'?: GtkPositionTypeNick | Gtk.PositionType;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkScaleConstructOnly = GtkRangeConstructOnly | GtkAccessibleConstructOnly | GtkAccessibleRangeConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkOrientableConstructOnly;

/** Provides a button which pops up a scale widget. */
export interface GtkScaleButtonProps extends GtkWidgetProps, GtkAccessibleProps, GtkAccessibleRangeProps, GtkBuildableProps, GtkConstraintTargetProps, GtkOrientableProps {
    /** The `GtkAdjustment` that is used as the model. */
    adjustment?: Gtk.Adjustment;
    /**
     * If the scale button has a frame.
     * @since 4.14
     * @default FALSE
     */
    'has-frame'?: boolean;
    /** The names of the icons to be used by the scale button. */
    icons?: string[];
    /**
     * The value of the scale.
     * @default 0.000000
     */
    value?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkScaleButtonConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkAccessibleRangeConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkOrientableConstructOnly;

/** An interface for widgets with native scrolling ability. */
export interface GtkScrollableProps extends GObjectProps {
    /** Horizontal `GtkAdjustment` of the scrollable widget. */
    hadjustment?: Gtk.Adjustment | null;
    /**
     * Determines when horizontal scrolling should start.
     * @default GTK_SCROLL_MINIMUM
     */
    'hscroll-policy'?: GtkScrollablePolicyNick | Gtk.ScrollablePolicy;
    /** Vertical `GtkAdjustment` of the scrollable widget. */
    vadjustment?: Gtk.Adjustment | null;
    /**
     * Determines when vertical scrolling should start.
     * @default GTK_SCROLL_MINIMUM
     */
    'vscroll-policy'?: GtkScrollablePolicyNick | Gtk.ScrollablePolicy;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkScrollableConstructOnly = GObjectConstructOnly;

/** Shows a horizontal or vertical scrollbar. */
export interface GtkScrollbarProps extends GtkWidgetProps, GtkAccessibleProps, GtkAccessibleRangeProps, GtkBuildableProps, GtkConstraintTargetProps, GtkOrientableProps {
    /** The `GtkAdjustment` controlled by this scrollbar. */
    adjustment?: Gtk.Adjustment;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkScrollbarConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkAccessibleRangeConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkOrientableConstructOnly;

/** Makes its child scrollable. */
export interface GtkScrolledWindowProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /** The child widget. */
    child?: Gtk.Widget | null;
    /** The `GtkAdjustment` for the horizontal position. */
    hadjustment?: Gtk.Adjustment;
    /**
     * Whether to draw a frame around the contents.
     * @default FALSE
     */
    'has-frame'?: boolean;
    /**
     * When the horizontal scrollbar is displayed.
     * @default GTK_POLICY_AUTOMATIC
     */
    'hscrollbar-policy'?: GtkPolicyTypeNick | Gtk.PolicyType;
    /**
     * Whether kinetic scrolling is enabled or not.
     * @default TRUE
     */
    'kinetic-scrolling'?: boolean;
    /**
     * The maximum content height of @scrolled_window.
     * @default -1
     */
    'max-content-height'?: number;
    /**
     * The maximum content width of @scrolled_window.
     * @default -1
     */
    'max-content-width'?: number;
    /**
     * The minimum content height of @scrolled_window.
     * @default -1
     */
    'min-content-height'?: number;
    /**
     * The minimum content width of @scrolled_window.
     * @default -1
     */
    'min-content-width'?: number;
    /**
     * Whether overlay scrolling is enabled or not.
     * @default TRUE
     */
    'overlay-scrolling'?: boolean;
    /**
     * Whether the natural height of the child should be calculated and propagated through the scrolled window’s requested natural height.
     * @default FALSE
     */
    'propagate-natural-height'?: boolean;
    /**
     * Whether the natural width of the child should be calculated and propagated through the scrolled window’s requested natural width.
     * @default FALSE
     */
    'propagate-natural-width'?: boolean;
    /** The `GtkAdjustment` for the vertical position. */
    vadjustment?: Gtk.Adjustment;
    /**
     * When the vertical scrollbar is displayed.
     * @default GTK_POLICY_AUTOMATIC
     */
    'vscrollbar-policy'?: GtkPolicyTypeNick | Gtk.PolicyType;
    /**
     * Where the contents are located with respect to the scrollbars.
     * @default GTK_CORNER_TOP_LEFT
     */
    'window-placement'?: GtkCornerTypeNick | Gtk.CornerType;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkScrolledWindowConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** Reveals a search entry when search is started. */
export interface GtkSearchBarProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /** The child widget. */
    child?: Gtk.Widget | null;
    /** The key capture widget. */
    'key-capture-widget'?: Gtk.Widget | null;
    /**
     * Whether the search mode is on and the search bar shown.
     * @default FALSE
     */
    'search-mode-enabled'?: boolean;
    /**
     * Whether to show the close button in the search bar.
     * @default FALSE
     */
    'show-close-button'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSearchBarConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** A single-line text entry widget for use as a search entry. */
export interface GtkSearchEntryProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkEditableProps {
    /**
     * Whether to activate the default widget when Enter is pressed.
     * @default FALSE
     */
    'activates-default'?: boolean;
    /**
     * The hints about input for the `GtkSearchEntry` used to alter the behaviour of input methods.
     * @since 4.14
     * @default GTK_INPUT_HINT_NONE
     */
    'input-hints'?: number;
    /**
     * The purpose for the `GtkSearchEntry` input used to alter the behaviour of input methods.
     * @since 4.14
     * @default GTK_INPUT_PURPOSE_FREE_FORM
     */
    'input-purpose'?: GtkInputPurposeNick | Gtk.InputPurpose;
    /**
     * The widget that the entry will use to capture key events.
     * @since 4.22
     */
    'key-capture-widget'?: Gtk.Widget | null;
    /**
     * The text that will be displayed in the `GtkSearchEntry` when it is empty and unfocused.
     * @default NULL
     */
    'placeholder-text'?: string | null;
    /**
     * The delay in milliseconds from last keypress to the search changed signal.
     * @since 4.8
     * @default 150
     */
    'search-delay'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSearchEntryConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkEditableConstructOnly;

/** An interface that adds support for sections to list models. */
export interface GtkSectionModelProps extends GListModelProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSectionModelConstructOnly = GListModelConstructOnly;

/** A list model that presents the selection from a `GtkSelectionModel`. */
export interface GtkSelectionFilterModelProps extends GObjectProps, GListModelProps {
    /** The model being filtered. */
    model?: Gtk.SelectionModel | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSelectionFilterModelConstructOnly = GObjectConstructOnly | GListModelConstructOnly;

/** An interface that adds support for selection to list models. */
export interface GtkSelectionModelProps extends GListModelProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSelectionModelConstructOnly = GListModelConstructOnly;

/** Draws a horizontal or vertical line to separate other widgets. */
export interface GtkSeparatorProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkOrientableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSeparatorConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkOrientableConstructOnly;

/** Provides a mechanism to share global settings between applications. */
export interface GtkSettingsProps extends GObjectProps, GtkStyleProviderProps {
    /**
     * Whether buttons in dialogs should use the alternative button order.
     * @default FALSE
     */
    'gtk-alternative-button-order'?: boolean;
    /**
     * Controls the direction of the sort indicators in sorted list and tree views.
     * @default FALSE
     */
    'gtk-alternative-sort-arrows'?: boolean;
    /**
     * Whether the application prefers to use a dark theme.
     * @default FALSE
     * @deprecated since 4.20: Use `GtkCssProvider` properties instead
     */
    'gtk-application-prefer-dark-theme'?: boolean;
    /**
     * The aspect ratio of the text caret.
     * @default 0.040000
     */
    'gtk-cursor-aspect-ratio'?: number;
    /**
     * Whether the cursor should blink.
     * @default TRUE
     */
    'gtk-cursor-blink'?: boolean;
    /**
     * Length of the cursor blink cycle, in milliseconds.
     * @default 1200
     */
    'gtk-cursor-blink-time'?: number;
    /**
     * Time after which the cursor stops blinking, in seconds.
     * @default 10
     */
    'gtk-cursor-blink-timeout'?: number;
    /**
     * Name of the cursor theme to use.
     * @default NULL
     */
    'gtk-cursor-theme-name'?: string;
    /**
     * The size to use for cursors.
     * @default 0
     */
    'gtk-cursor-theme-size'?: number;
    /**
     * Determines which buttons should be put in the titlebar of client-side decorated windows, and whether they should be placed on the left or right.
     * @default menu:minimize,maximize,close
     */
    'gtk-decoration-layout'?: string;
    /**
     * Whether builtin GTK dialogs such as the file chooser, the color chooser or the font chooser will use a header bar at the top to show action widgets, or an action area at the bottom.
     * @default FALSE
     */
    'gtk-dialogs-use-header'?: boolean;
    /**
     * The number of pixels the cursor can move before dragging.
     * @default 8
     */
    'gtk-dnd-drag-threshold'?: number;
    /**
     * The maximum distance allowed between two clicks for them to be considered a double click, in pixels.
     * @default 5
     */
    'gtk-double-click-distance'?: number;
    /**
     * The maximum time to allow between two clicks for them to be considered a double click, in milliseconds.
     * @default 400
     */
    'gtk-double-click-time'?: number;
    /**
     * Whether menu items should have visible accelerators which can be activated.
     * @default TRUE
     */
    'gtk-enable-accels'?: boolean;
    /**
     * Whether to enable toolkit-wide animations.
     * @default TRUE
     */
    'gtk-enable-animations'?: boolean;
    /**
     * Whether to play any event sounds at all.
     * @default TRUE
     */
    'gtk-enable-event-sounds'?: boolean;
    /**
     * Whether to play event sounds as feedback to user input.
     * @default TRUE
     */
    'gtk-enable-input-feedback-sounds'?: boolean;
    /**
     * Whether a middle click on a mouse should paste the 'PRIMARY' clipboard content at the cursor location.
     * @default TRUE
     */
    'gtk-enable-primary-paste'?: boolean;
    /**
     * How long to show the last input character in hidden entries.
     * @default 0
     */
    'gtk-entry-password-hint-timeout'?: number;
    /**
     * Whether to select the contents of an entry when it is focused.
     * @default TRUE
     */
    'gtk-entry-select-on-focus'?: boolean;
    /**
     * When %TRUE, keyboard navigation and other input-related errors will cause a beep.
     * @default TRUE
     */
    'gtk-error-bell'?: boolean;
    /**
     * The default font to use.
     * @default Sans 10
     */
    'gtk-font-name'?: string;
    /**
     * How GTK font rendering is set up.
     * @since 4.16
     * @default GTK_FONT_RENDERING_AUTOMATIC
     */
    'gtk-font-rendering'?: GtkFontRenderingNick | Gtk.FontRendering;
    /**
     * Timestamp of the current fontconfig configuration.
     * @default 0
     */
    'gtk-fontconfig-timestamp'?: number;
    /**
     * Whether hinting should be applied to font metrics.
     * @since 4.6
     * @default TRUE
     */
    'gtk-hint-font-metrics'?: boolean;
    /**
     * Name of the icon theme to use.
     * @default Adwaita
     */
    'gtk-icon-theme-name'?: string;
    /**
     * Which IM (input method) module should be used by default.
     * @default NULL
     */
    'gtk-im-module'?: string;
    /**
     * The color scheme used for rendering the user interface.
     * @since 4.20
     * @default GTK_INTERFACE_COLOR_SCHEME_UNSUPPORTED
     */
    'gtk-interface-color-scheme'?: GtkInterfaceColorSchemeNick | Gtk.InterfaceColorScheme;
    /**
     * The level of contrast to use for the user interface.
     * @since 4.20
     * @default GTK_INTERFACE_CONTRAST_UNSUPPORTED
     */
    'gtk-interface-contrast'?: GtkInterfaceContrastNick | Gtk.InterfaceContrast;
    /**
     * Whether animations should be reduced to essential motions.
     * @since 4.22
     * @default GTK_REDUCED_MOTION_NO_PREFERENCE
     */
    'gtk-interface-reduced-motion'?: GtkReducedMotionNick | Gtk.ReducedMotion;
    /**
     * Time in seconds that the focus is visible when using keyboard navigation.
     * @default -1
     */
    'gtk-keyboard-focus-visible-timeout'?: number;
    /**
     * Whether GTK should make sure that text can be navigated with a caret, even if it is not editable.
     * @default FALSE
     */
    'gtk-keynav-use-caret'?: boolean;
    /**
     * Whether to select the contents of a selectable label when it is focused.
     * @default TRUE
     */
    'gtk-label-select-on-focus'?: boolean;
    /**
     * The time for a button or touch press to be considered a “long press”.
     * @default 500
     */
    'gtk-long-press-time'?: number;
    /**
     * Whether scrolled windows may use overlaid scrolling indicators.
     * @default TRUE
     */
    'gtk-overlay-scrolling'?: boolean;
    /**
     * If the value of this setting is %TRUE, clicking the primary button in a `GtkRange` trough will move the slider, and hence set the range’s value, to the point that you clicked.
     * @default TRUE
     */
    'gtk-primary-button-warps-slider'?: boolean;
    /**
     * A comma-separated list of print backends to use in the print dialog.
     * @default cups,file
     */
    'gtk-print-backends'?: string;
    /**
     * A command to run for displaying the print preview.
     * @default evince --unlink-tempfile --preview --print-settings %s %f
     */
    'gtk-print-preview-command'?: string;
    /**
     * Whether GTK should keep track of items inside the recently used resources list.
     * @default TRUE
     */
    'gtk-recent-files-enabled'?: boolean;
    /**
     * The maximum age, in days, of the items inside the recently used resources list.
     * @default 30
     */
    'gtk-recent-files-max-age'?: number;
    /**
     * Set to %TRUE if the desktop environment is displaying the app menu, %FALSE if the app should display it itself.
     * @default FALSE
     * @deprecated since 4.20: This setting is not relevant anymore
     */
    'gtk-shell-shows-app-menu'?: boolean;
    /**
     * Set to %TRUE if the desktop environment is displaying the desktop folder, %FALSE if not.
     * @default TRUE
     * @deprecated since 4.20: This setting is not relevant anymore
     */
    'gtk-shell-shows-desktop'?: boolean;
    /**
     * Set to %TRUE if the desktop environment is displaying the menubar, %FALSE if the app should display it itself.
     * @default FALSE
     * @deprecated since 4.20: This setting is not relevant anymore
     */
    'gtk-shell-shows-menubar'?: boolean;
    /**
     * When %TRUE, widgets like switches include shapes to indicate their on/off state.
     * @since 4.14
     * @default FALSE
     */
    'gtk-show-status-shapes'?: boolean;
    /**
     * The XDG sound theme to use for event sounds.
     * @default freedesktop
     */
    'gtk-sound-theme-name'?: string;
    /**
     * Whether two cursors should be displayed for mixed left-to-right and right-to-left text.
     * @default FALSE
     */
    'gtk-split-cursor'?: boolean;
    /**
     * Name of the theme to load.
     * @default Default
     */
    'gtk-theme-name'?: string;
    /**
     * Determines the action to take when a double-click occurs on the titlebar of client-side decorated windows.
     * @default toggle-maximize
     */
    'gtk-titlebar-double-click'?: string;
    /**
     * Determines the action to take when a middle-click occurs on the titlebar of client-side decorated windows.
     * @default none
     */
    'gtk-titlebar-middle-click'?: string;
    /**
     * Determines the action to take when a right-click occurs on the titlebar of client-side decorated windows.
     * @default menu
     */
    'gtk-titlebar-right-click'?: string;
    /**
     * Whether to antialias fonts.
     * @default -1
     */
    'gtk-xft-antialias'?: number;
    /**
     * The font resolution, in 1024 * dots/inch.
     * @default -1
     */
    'gtk-xft-dpi'?: number;
    /**
     * Whether to enable font hinting.
     * @default -1
     */
    'gtk-xft-hinting'?: number;
    /**
     * What degree of font hinting to use.
     * @default NULL
     */
    'gtk-xft-hintstyle'?: string;
    /**
     * The type of subpixel antialiasing to use.
     * @default NULL
     */
    'gtk-xft-rgba'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSettingsConstructOnly = GObjectConstructOnly | GtkStyleProviderConstructOnly;

/** Describes a keyboard shortcut. */
export interface GtkShortcutProps extends GObjectProps {
    /** The action that gets activated by this shortcut. */
    action?: Gtk.ShortcutAction | null;
    /** Arguments passed to activation. */
    arguments?: GLib.Variant | null;
    /** The trigger that triggers this shortcut. */
    trigger?: Gtk.ShortcutTrigger | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkShortcutConstructOnly = GObjectConstructOnly;

/** Encodes an action that can be triggered by a keyboard shortcut. */
export interface GtkShortcutActionProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkShortcutActionConstructOnly = GObjectConstructOnly;

/** Manages keyboard shortcuts and their activation. */
export interface GtkShortcutControllerProps extends GtkEventControllerProps, GListModelProps, GtkBuildableProps {
    /**
     * The modifiers that need to be pressed to allow mnemonics activation.
     * @default GDK_ALT_MASK
     */
    'mnemonic-modifiers'?: number;
    /** A list model to take shortcuts from. */
    model?: Gio.ListModel;
    /**
     * What scope the shortcuts will be handled in.
     * @default GTK_SHORTCUT_SCOPE_LOCAL
     */
    scope?: GtkShortcutScopeNick | Gtk.ShortcutScope;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkShortcutControllerConstructOnly = GtkEventControllerConstructOnly | GListModelConstructOnly | GtkBuildableConstructOnly | 'model';

/** `GtkShortcutLabel` displays a single keyboard shortcut or gesture. */
export interface GtkShortcutLabelProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /**
     * The accelerator that @self displays.
     * @default NULL
     * @deprecated since 4.18: This widget will be removed in GTK 5
     */
    accelerator?: string | null;
    /**
     * The text that is displayed when no accelerator is set.
     * @default NULL
     * @deprecated since 4.18: This widget will be removed in GTK 5
     */
    'disabled-text'?: string | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkShortcutLabelConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** An interface that is used to implement shortcut scopes. */
export interface GtkShortcutManagerProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkShortcutManagerConstructOnly = GObjectConstructOnly;

/** Tracks how a `GtkShortcut` can be activated. */
export interface GtkShortcutTriggerProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkShortcutTriggerConstructOnly = GObjectConstructOnly;

/** A `GtkShortcutsGroup` represents a group of related keyboard shortcuts or gestures. */
export interface GtkShortcutsGroupProps extends GtkBoxProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkOrientableProps {
    /**
     * The size group for the accelerator portion of shortcuts in this group.
     * @deprecated since 4.18: This widget will be removed in GTK 5
     */
    'accel-size-group'?: Gtk.SizeGroup;
    /**
     * The title for this group of shortcuts.
     * @deprecated since 4.18: This widget will be removed in GTK 5
     */
    title?: string;
    /**
     * The size group for the textual portion of shortcuts in this group.
     * @deprecated since 4.18: This widget will be removed in GTK 5
     */
    'title-size-group'?: Gtk.SizeGroup;
    /**
     * An optional view that the shortcuts in this group are relevant for.
     * @default NULL
     * @deprecated since 4.18: This widget will be removed in GTK 5
     */
    view?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkShortcutsGroupConstructOnly = GtkBoxConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkOrientableConstructOnly;

/** A `GtkShortcutsSection` collects all the keyboard shortcuts and gestures for a major application mode. */
export interface GtkShortcutsSectionProps extends GtkBoxProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkOrientableProps {
    /**
     * The maximum number of lines to allow per column.
     * @default 15
     * @deprecated since 4.18: This widget will be removed in GTK 5
     */
    'max-height'?: number;
    /**
     * A unique name to identify this section among the sections added to the `GtkShortcutsWindow`.
     * @default NULL
     * @deprecated since 4.18: This widget will be removed in GTK 5
     */
    'section-name'?: string;
    /**
     * The string to show in the section selector of the `GtkShortcutsWindow` for this section.
     * @default NULL
     * @deprecated since 4.18: This widget will be removed in GTK 5
     */
    title?: string;
    /**
     * A view name to filter the groups in this section by.
     * @default NULL
     * @deprecated since 4.18: This widget will be removed in GTK 5
     */
    'view-name'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkShortcutsSectionConstructOnly = GtkBoxConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkOrientableConstructOnly;

/** A `GtkShortcutsShortcut` represents a single keyboard shortcut or gesture with a short text. */
export interface GtkShortcutsShortcutProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /**
     * The size group for the accelerator portion of this shortcut.
     * @deprecated since 4.18: This widget will be removed in GTK 5
     */
    'accel-size-group'?: Gtk.SizeGroup;
    /**
     * The accelerator(s) represented by this object.
     * @default NULL
     * @deprecated since 4.18: This widget will be removed in GTK 5
     */
    accelerator?: string;
    /**
     * A detailed action name.
     * @default NULL
     * @deprecated since 4.18: This widget will be removed in GTK 5
     */
    'action-name'?: string;
    /**
     * The text direction for which this shortcut is active.
     * @default GTK_TEXT_DIR_NONE
     * @deprecated since 4.18: This widget will be removed in GTK 5
     */
    direction?: GtkTextDirectionNick | Gtk.TextDirection;
    /**
     * An icon to represent the shortcut or gesture.
     * @deprecated since 4.18: This widget will be removed in GTK 5
     */
    icon?: Gio.Icon;
    /**
     * %TRUE if an icon has been set.
     * @default FALSE
     * @deprecated since 4.18: This widget will be removed in GTK 5
     */
    'icon-set'?: boolean;
    /**
     * The type of shortcut that is represented.
     * @default GTK_SHORTCUT_ACCELERATOR
     * @deprecated since 4.18: This widget will be removed in GTK 5
     */
    'shortcut-type'?: GtkShortcutTypeNick | Gtk.ShortcutType;
    /**
     * The subtitle for the shortcut or gesture.
     * @deprecated since 4.18: This widget will be removed in GTK 5
     */
    subtitle?: string;
    /**
     * %TRUE if a subtitle has been set.
     * @default FALSE
     * @deprecated since 4.18: This widget will be removed in GTK 5
     */
    'subtitle-set'?: boolean;
    /**
     * The textual description for the shortcut or gesture represented by this object.
     * @deprecated since 4.18: This widget will be removed in GTK 5
     */
    title?: string;
    /**
     * The size group for the textual portion of this shortcut.
     * @deprecated since 4.18: This widget will be removed in GTK 5
     */
    'title-size-group'?: Gtk.SizeGroup;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkShortcutsShortcutConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** A `GtkShortcutsWindow` shows information about the keyboard shortcuts and gestures of an application. */
export interface GtkShortcutsWindowProps extends GtkWindowProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkNativeProps, GtkRootProps, GtkShortcutManagerProps {
    /**
     * The name of the section to show.
     * @default internal-search
     * @deprecated since 4.18: This widget will be removed in GTK 5
     */
    'section-name'?: string;
    /**
     * The view name by which to filter the contents.
     * @default NULL
     * @deprecated since 4.18: This widget will be removed in GTK 5
     */
    'view-name'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkShortcutsWindowConstructOnly = GtkWindowConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkNativeConstructOnly | GtkRootConstructOnly | GtkShortcutManagerConstructOnly;

/** Emits a signal on a widget. */
export interface GtkSignalActionProps extends GtkShortcutActionProps {
    /**
     * The name of the signal to emit.
     * @default NULL
     */
    'signal-name'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSignalActionConstructOnly = GtkShortcutActionConstructOnly | 'signal-name';

/** Emits signals to manage listitems. */
export interface GtkSignalListItemFactoryProps extends GtkListItemFactoryProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSignalListItemFactoryConstructOnly = GtkListItemFactoryConstructOnly;

/** A selection model that allows selecting a single item. */
export interface GtkSingleSelectionProps extends GObjectProps, GListModelProps, GtkSectionModelProps, GtkSelectionModelProps {
    /**
     * If the selection will always select an item.
     * @default TRUE
     */
    autoselect?: boolean;
    /**
     * If unselecting the selected item is allowed.
     * @default FALSE
     */
    'can-unselect'?: boolean;
    /** The model being managed. */
    model?: Gio.ListModel | null;
    /**
     * Position of the selected item.
     * @default 4294967295
     */
    selected?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSingleSelectionConstructOnly = GObjectConstructOnly | GListModelConstructOnly | GtkSectionModelConstructOnly | GtkSelectionModelConstructOnly;

/** Groups widgets together so they all request the same size. */
export interface GtkSizeGroupProps extends GObjectProps, GtkBuildableProps {
    /**
     * The direction in which the size group affects requested sizes.
     * @default GTK_SIZE_GROUP_HORIZONTAL
     */
    mode?: GtkSizeGroupModeNick | Gtk.SizeGroupMode;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSizeGroupConstructOnly = GObjectConstructOnly | GtkBuildableConstructOnly;

/** A list model that presents a slice of another model. */
export interface GtkSliceListModelProps extends GObjectProps, GListModelProps, GtkSectionModelProps {
    /** Child model to take slice from. */
    model?: Gio.ListModel | null;
    /**
     * Offset of slice.
     * @default 0
     */
    offset?: number;
    /**
     * Maximum size of slice.
     * @default 10
     */
    size?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSliceListModelConstructOnly = GObjectConstructOnly | GListModelConstructOnly | GtkSectionModelConstructOnly;

/** Assists in creating [class@Gsk.RenderNode]s for widgets. */
export interface GtkSnapshotProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSnapshotConstructOnly = never;

/** A list model that sorts the elements of another model. */
export interface GtkSortListModelProps extends GObjectProps, GListModelProps, GtkSectionModelProps {
    /**
     * If the model should sort items incrementally.
     * @default FALSE
     */
    incremental?: boolean;
    /** The model being sorted. */
    model?: Gio.ListModel | null;
    /**
     * The section sorter for this model, if one is set.
     * @since 4.12
     */
    'section-sorter'?: Gtk.Sorter | null;
    /** The sorter for this model. */
    sorter?: Gtk.Sorter | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSortListModelConstructOnly = GObjectConstructOnly | GListModelConstructOnly | GtkSectionModelConstructOnly;

/** Describes sorting criteria for a [class@Gtk.SortListModel]. */
export interface GtkSorterProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSorterConstructOnly = GObjectConstructOnly;

/** Allows to enter or change numeric values. */
export interface GtkSpinButtonProps extends GtkWidgetProps, GtkAccessibleProps, GtkAccessibleRangeProps, GtkBuildableProps, GtkCellEditableProps, GtkConstraintTargetProps, GtkEditableProps, GtkOrientableProps {
    /**
     * Whether to activate the default widget when the spin button is activated.
     * @since 4.14
     * @default FALSE
     */
    'activates-default'?: boolean;
    /** The adjustment that holds the value of the spin button. */
    adjustment?: Gtk.Adjustment;
    /**
     * The acceleration rate when you hold down a button or key.
     * @default 0.000000
     */
    'climb-rate'?: number;
    /**
     * The number of decimal places to display.
     * @default 0
     */
    digits?: number;
    /**
     * Whether non-numeric characters should be ignored.
     * @default FALSE
     */
    numeric?: boolean;
    /**
     * Whether erroneous values are automatically changed to the spin buttons nearest step increment.
     * @default FALSE
     */
    'snap-to-ticks'?: boolean;
    /**
     * Whether the spin button should update always, or only when the value is acceptable.
     * @default GTK_UPDATE_ALWAYS
     */
    'update-policy'?: GtkSpinButtonUpdatePolicyNick | Gtk.SpinButtonUpdatePolicy;
    /**
     * The current value.
     * @default 0.000000
     */
    value?: number;
    /**
     * Whether a spin button should wrap upon reaching its limits.
     * @default FALSE
     */
    wrap?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSpinButtonConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkAccessibleRangeConstructOnly | GtkBuildableConstructOnly | GtkCellEditableConstructOnly | GtkConstraintTargetConstructOnly | GtkEditableConstructOnly | GtkOrientableConstructOnly;

/** Displays an icon-size spinning animation. */
export interface GtkSpinnerProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /**
     * Whether the spinner is spinning
     * @default FALSE
     */
    spinning?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSpinnerConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** Shows one of its children at a time. */
export interface GtkStackProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /**
     * %TRUE if the stack allocates the same width for all children.
     * @default TRUE
     */
    hhomogeneous?: boolean;
    /**
     * Whether or not the size should smoothly change during the transition.
     * @default FALSE
     */
    'interpolate-size'?: boolean;
    /**
     * The animation duration, in milliseconds.
     * @default 200
     */
    'transition-duration'?: number;
    /**
     * The type of animation used to transition.
     * @default GTK_STACK_TRANSITION_TYPE_NONE
     */
    'transition-type'?: GtkStackTransitionTypeNick | Gtk.StackTransitionType;
    /**
     * %TRUE if the stack allocates the same height for all children.
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
export type GtkStackConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** An auxiliary class used by `GtkStack`. */
export interface GtkStackPageProps extends GObjectProps, GtkAccessibleProps {
    /** The child that this page is for. */
    child?: Gtk.Widget;
    /**
     * The icon name of the child page.
     * @default NULL
     */
    'icon-name'?: string | null;
    /**
     * The name of the child page.
     * @default NULL
     */
    name?: string | null;
    /**
     * Whether the page requires the user attention.
     * @default FALSE
     */
    'needs-attention'?: boolean;
    /**
     * The title of the child page.
     * @default NULL
     */
    title?: string | null;
    /**
     * If set, an underline in the title indicates a mnemonic.
     * @default FALSE
     */
    'use-underline'?: boolean;
    /**
     * Whether this page is visible.
     * @default TRUE
     */
    visible?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkStackPageConstructOnly = GObjectConstructOnly | GtkAccessibleConstructOnly | 'child';

/** Uses a sidebar to switch between `GtkStack` pages. */
export interface GtkStackSidebarProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /** The stack. */
    stack?: Gtk.Stack | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkStackSidebarConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** Shows a row of buttons to switch between `GtkStack` pages. */
export interface GtkStackSwitcherProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkOrientableProps {
    /** The stack. */
    stack?: Gtk.Stack | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkStackSwitcherConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkOrientableConstructOnly;

/** A `GtkStatusbar` widget is usually placed along the bottom of an application's main [class@Gtk.Window]. */
export interface GtkStatusbarProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkStatusbarConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** Determines whether to include items by comparing strings to a fixed search term. */
export interface GtkStringFilterProps extends GtkFilterProps {
    /** The expression to evaluate on each item to get a string to compare with. */
    expression?: Gtk.Expression | null;
    /**
     * If matching is case sensitive.
     * @default TRUE
     */
    'ignore-case'?: boolean;
    /**
     * If exact matches are necessary or if substrings are allowed.
     * @default GTK_STRING_FILTER_MATCH_MODE_SUBSTRING
     */
    'match-mode'?: GtkStringFilterMatchModeNick | Gtk.StringFilterMatchMode;
    /**
     * The search term.
     * @default NULL
     */
    search?: string | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkStringFilterConstructOnly = GtkFilterConstructOnly;

/** A list model that wraps an array of strings. */
export interface GtkStringListProps extends GObjectProps, GListModelProps, GtkBuildableProps {
    /**
     * The strings in the model.
     * @since 4.10
     */
    strings?: string[];
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkStringListConstructOnly = GObjectConstructOnly | GListModelConstructOnly | GtkBuildableConstructOnly | 'strings';

/** The type of items in a `GtkStringList`. */
export interface GtkStringObjectProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkStringObjectConstructOnly = GObjectConstructOnly;

/** Sorts items by comparing strings. */
export interface GtkStringSorterProps extends GtkSorterProps {
    /**
     * The collation method to use for sorting.
     * @since 4.10
     * @default GTK_COLLATION_UNICODE
     */
    collation?: GtkCollationNick | Gtk.Collation;
    /** The expression to evaluate on item to get a string to compare with. */
    expression?: Gtk.Expression | null;
    /**
     * If sorting is case sensitive.
     * @default TRUE
     */
    'ignore-case'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkStringSorterConstructOnly = GtkSorterConstructOnly;

/** `GtkStyleContext` stores styling information affecting a widget. */
export interface GtkStyleContextProps extends GObjectProps {
    /** The display of the style context. */
    display?: Gdk.Display;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkStyleContextConstructOnly = GObjectConstructOnly;

/** An interface for style information used by [class@Gtk.StyleContext]. */
export interface GtkStyleProviderProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkStyleProviderConstructOnly = GObjectConstructOnly;

/** A paintable implementation that renders SVG, with animations. */
export interface GtkSvgProps extends GObjectProps, GdkPaintableProps, GtkSymbolicPaintableProps {
    /**
     * Enabled features for this paintable.
     * @since 4.22
     * @default GTK_SVG_ANIMATIONS | GTK_SVG_SYSTEM_RESOURCES | GTK_SVG_EXTERNAL_RESOURCES | GTK_SVG_EXTENSIONS
     */
    features?: number;
    /**
     * Whether the rendering will be clipped to the bounds.
     * @since 4.24
     * @default GTK_OVERFLOW_HIDDEN
     */
    overflow?: GtkOverflowNick | Gtk.Overflow;
    /**
     * Whether the paintable is currently animating its content.
     * @since 4.22
     * @default FALSE
     */
    playing?: boolean;
    /**
     * Resource to load SVG data from.
     * @since 4.22
     * @default NULL
     */
    resource?: string;
    /**
     * The current state of the renderer.
     * @since 4.22
     * @default 0
     */
    state?: number;
    /**
     * A CSS stylesheet to apply to the SVG.
     * @since 4.24
     */
    stylesheet?: GLib.Bytes | null;
    /**
     * If not set to -1, this value overrides the weight used when rendering the paintable.
     * @since 4.22
     * @default -1.000000
     */
    weight?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSvgConstructOnly = GObjectConstructOnly | GdkPaintableConstructOnly | GtkSymbolicPaintableConstructOnly;

/** A widget that renders SVG, with animations and event handling. */
export interface GtkSvgWidgetProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /**
     * Resource to load SVG data from.
     * @since 4.24
     * @default NULL
     */
    resource?: string;
    /**
     * The current state of the renderer.
     * @since 4.24
     * @default 0
     */
    state?: number;
    /**
     * A CSS stylesheet to apply to the SVG.
     * @since 4.24
     */
    stylesheet?: GLib.Bytes | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSvgWidgetConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** Shows a "light switch" that has two states: on or off. */
export interface GtkSwitchProps extends GtkWidgetProps, GtkAccessibleProps, GtkActionableProps, GtkBuildableProps, GtkConstraintTargetProps {
    /**
     * Whether the `GtkSwitch` widget is in its on or off state.
     * @default FALSE
     */
    active?: boolean;
    /**
     * The backend state that is controlled by the switch.
     * @default FALSE
     */
    state?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSwitchConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkActionableConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** An interface that supports symbolic colors in paintables. */
export interface GtkSymbolicPaintableProps extends GdkPaintableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSymbolicPaintableConstructOnly = GdkPaintableConstructOnly;

/** A single-line text entry. */
export interface GtkTextProps extends GtkWidgetProps, GtkAccessibleProps, GtkAccessibleTextProps, GtkBuildableProps, GtkConstraintTargetProps, GtkEditableProps {
    /**
     * Whether to activate the default widget when <kbd>Enter</kbd> is pressed.
     * @default FALSE
     */
    'activates-default'?: boolean;
    /** A list of Pango attributes to apply to the text. */
    attributes?: Pango.AttrList | null;
    /** The `GtkEntryBuffer` object which stores the text. */
    buffer?: Gtk.EntryBuffer;
    /**
     * Whether to suggest Emoji replacements.
     * @default FALSE
     */
    'enable-emoji-completion'?: boolean;
    /** A menu model whose contents will be appended to the context menu. */
    'extra-menu'?: Gio.MenuModel | null;
    /**
     * Which input method module should be used.
     * @default NULL
     */
    'im-module'?: string;
    /**
     * Additional hints that allow input methods to fine-tune their behaviour.
     * @default GTK_INPUT_HINT_NONE
     */
    'input-hints'?: number;
    /**
     * The purpose of this text field.
     * @default GTK_INPUT_PURPOSE_FREE_FORM
     */
    'input-purpose'?: GtkInputPurposeNick | Gtk.InputPurpose;
    /**
     * The character to used when masking contents (in “password mode”).
     * @default 42
     */
    'invisible-char'?: number;
    /**
     * Whether the invisible char has been set.
     * @default FALSE
     */
    'invisible-char-set'?: boolean;
    /**
     * Maximum number of characters that are allowed.
     * @default 0
     */
    'max-length'?: number;
    /**
     * If text is overwritten when typing.
     * @default FALSE
     */
    'overwrite-mode'?: boolean;
    /**
     * The text that will be displayed in the `GtkText` when it is empty and unfocused.
     * @default NULL
     */
    'placeholder-text'?: string | null;
    /**
     * Whether the widget should grow and shrink with the content.
     * @default FALSE
     */
    'propagate-text-width'?: boolean;
    /** Custom tabs for this text widget. */
    tabs?: Pango.TabArray | null;
    /**
     * When true, pasted multi-line text is truncated to the first line.
     * @default FALSE
     */
    'truncate-multiline'?: boolean;
    /**
     * If false, the text is masked with the “invisible char”.
     * @default TRUE
     */
    visibility?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkTextConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkAccessibleTextConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkEditableConstructOnly;

/** Stores text and attributes for display in a `GtkTextView`. */
export interface GtkTextBufferProps extends GObjectProps {
    /**
     * Denotes if support for undoing and redoing changes to the buffer is allowed.
     * @default TRUE
     */
    'enable-undo'?: boolean;
    /** The GtkTextTagTable for the buffer. */
    'tag-table'?: Gtk.TextTagTable;
    /** The text content of the buffer. */
    text?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkTextBufferConstructOnly = GObjectConstructOnly | 'tag-table';

/** Marks a spot in a `GtkTextBuffer` where child widgets can be “anchored”. */
export interface GtkTextChildAnchorProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkTextChildAnchorConstructOnly = GObjectConstructOnly;

/** Marks a position in a `GtkTextbuffer` that is preserved across modifications. */
export interface GtkTextMarkProps extends GObjectProps {
    /**
     * Whether the mark has left gravity.
     * @default FALSE
     */
    'left-gravity'?: boolean;
    /**
     * The name of the mark or %NULL if the mark is anonymous.
     * @default NULL
     */
    name?: string | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkTextMarkConstructOnly = GObjectConstructOnly | 'left-gravity' | 'name';

/** Can be applied to text contained in a `GtkTextBuffer`. */
export interface GtkTextTagProps extends GObjectProps {
    /**
     * Whether the margins accumulate or override each other.
     * @default FALSE
     */
    'accumulative-margin'?: boolean;
    /**
     * Whether breaks are allowed.
     * @default TRUE
     */
    'allow-breaks'?: boolean;
    /**
     * Whether the `allow-breaks` property is set.
     * @default FALSE
     */
    'allow-breaks-set'?: boolean;
    /**
     * Background color as a string.
     * @default NULL
     */
    background?: string;
    /**
     * Whether the background color fills the entire line height or only the height of the tagged characters.
     * @default FALSE
     */
    'background-full-height'?: boolean;
    /**
     * Whether the `background-full-height` property is set.
     * @default FALSE
     */
    'background-full-height-set'?: boolean;
    /** Background color as a `GdkRGBA`. */
    'background-rgba'?: Gdk.RGBA;
    /**
     * Whether the `background` property is set.
     * @default FALSE
     */
    'background-set'?: boolean;
    /**
     * Text direction, e.g.
     * @default GTK_TEXT_DIR_NONE
     */
    direction?: GtkTextDirectionNick | Gtk.TextDirection;
    /**
     * Whether the text can be modified by the user.
     * @default TRUE
     */
    editable?: boolean;
    /**
     * Whether the `editable` property is set.
     * @default FALSE
     */
    'editable-set'?: boolean;
    /**
     * Whether font fallback is enabled.
     * @default TRUE
     */
    fallback?: boolean;
    /**
     * Whether the `fallback` property is set.
     * @default FALSE
     */
    'fallback-set'?: boolean;
    /**
     * Name of the font family, e.g.
     * @default NULL
     */
    family?: string;
    /**
     * Whether the `family` property is set.
     * @default FALSE
     */
    'family-set'?: boolean;
    /**
     * Font description as string, e.g.
     * @default NULL
     */
    font?: string;
    /** Font description as a `PangoFontDescription`. */
    'font-desc'?: Pango.FontDescription;
    /**
     * OpenType font features, as a string.
     * @default NULL
     */
    'font-features'?: string;
    /**
     * Whether the `font-features` property is set.
     * @default FALSE
     */
    'font-features-set'?: boolean;
    /**
     * Foreground color as a string.
     * @default NULL
     */
    foreground?: string;
    /** Foreground color as a `GdkRGBA`. */
    'foreground-rgba'?: Gdk.RGBA;
    /**
     * Whether the `foreground` property is set.
     * @default FALSE
     */
    'foreground-set'?: boolean;
    /**
     * Amount to indent the paragraph, in pixels.
     * @default 0
     */
    indent?: number;
    /**
     * Whether the `indent` property is set.
     * @default FALSE
     */
    'indent-set'?: boolean;
    /**
     * Whether to insert hyphens at breaks.
     * @default TRUE
     */
    'insert-hyphens'?: boolean;
    /**
     * Whether the `insert-hyphens` property is set.
     * @default FALSE
     */
    'insert-hyphens-set'?: boolean;
    /**
     * Whether this text is hidden.
     * @default FALSE
     */
    invisible?: boolean;
    /**
     * Whether the `invisible` property is set.
     * @default FALSE
     */
    'invisible-set'?: boolean;
    /**
     * Left, right, or center justification.
     * @default GTK_JUSTIFY_LEFT
     */
    justification?: GtkJustificationNick | Gtk.Justification;
    /**
     * Whether the `justification` property is set.
     * @default FALSE
     */
    'justification-set'?: boolean;
    /**
     * The language this text is in, as an ISO code.
     * @default NULL
     */
    language?: string;
    /**
     * Whether the `language` property is set.
     * @default FALSE
     */
    'language-set'?: boolean;
    /**
     * Width of the left margin in pixels.
     * @default 0
     */
    'left-margin'?: number;
    /**
     * Whether the `left-margin` property is set.
     * @default FALSE
     */
    'left-margin-set'?: boolean;
    /**
     * Extra spacing between graphemes, in Pango units.
     * @default 0
     */
    'letter-spacing'?: number;
    /**
     * Whether the `letter-spacing` property is set.
     * @default FALSE
     */
    'letter-spacing-set'?: boolean;
    /**
     * Factor to scale line height by.
     * @since 4.6
     * @default 0.000000
     */
    'line-height'?: number;
    /**
     * Whether the `line-height` property is set.
     * @default FALSE
     */
    'line-height-set'?: boolean;
    /**
     * The name used to refer to the tag.
     * @default NULL
     */
    name?: string;
    /**
     * Style of overline for this text.
     * @default PANGO_OVERLINE_NONE
     */
    overline?: PangoOverlineNick | Pango.Overline;
    /** This property modifies the color of overlines. */
    'overline-rgba'?: Gdk.RGBA;
    /**
     * Whether the `overline-rgba` property is set.
     * @default FALSE
     */
    'overline-rgba-set'?: boolean;
    /**
     * Whether the `overline` property is set.
     * @default FALSE
     */
    'overline-set'?: boolean;
    /**
     * The paragraph background color as a string.
     * @default NULL
     */
    'paragraph-background'?: string;
    /** The paragraph background color as a `GdkRGBA`. */
    'paragraph-background-rgba'?: Gdk.RGBA;
    /**
     * Whether the `paragraph-background` property is set.
     * @default FALSE
     */
    'paragraph-background-set'?: boolean;
    /**
     * Pixels of blank space above paragraphs.
     * @default 0
     */
    'pixels-above-lines'?: number;
    /**
     * Whether the `pixels-above-lines` property is set.
     * @default FALSE
     */
    'pixels-above-lines-set'?: boolean;
    /**
     * Pixels of blank space below paragraphs.
     * @default 0
     */
    'pixels-below-lines'?: number;
    /**
     * Whether the `pixels-below-lines` property is set.
     * @default FALSE
     */
    'pixels-below-lines-set'?: boolean;
    /**
     * Pixels of blank space between wrapped lines in a paragraph.
     * @default 0
     */
    'pixels-inside-wrap'?: number;
    /**
     * Whether the `pixels-inside-wrap` property is set.
     * @default FALSE
     */
    'pixels-inside-wrap-set'?: boolean;
    /**
     * Width of the right margin, in pixels.
     * @default 0
     */
    'right-margin'?: number;
    /**
     * Whether the `right-margin` property is set.
     * @default FALSE
     */
    'right-margin-set'?: boolean;
    /**
     * Offset of text above the baseline, in Pango units.
     * @default 0
     */
    rise?: number;
    /**
     * Whether the `rise` property is set.
     * @default FALSE
     */
    'rise-set'?: boolean;
    /**
     * Font size as a scale factor relative to the default font size.
     * @default 1.000000
     */
    scale?: number;
    /**
     * Whether the `scale` property is set.
     * @default FALSE
     */
    'scale-set'?: boolean;
    /**
     * Whether this tag represents a single sentence.
     * @since 4.6
     * @default FALSE
     */
    sentence?: boolean;
    /**
     * Whether the `sentence` property is set.
     * @default FALSE
     */
    'sentence-set'?: boolean;
    /**
     * How to render invisible characters.
     * @default PANGO_SHOW_NONE
     */
    'show-spaces'?: number;
    /**
     * Whether the `show-spaces` property is set.
     * @default FALSE
     */
    'show-spaces-set'?: boolean;
    /**
     * Font size in Pango units.
     * @default 0
     */
    size?: number;
    /**
     * Font size in points.
     * @default 0.000000
     */
    'size-points'?: number;
    /**
     * Whether the `size` property is set.
     * @default FALSE
     */
    'size-set'?: boolean;
    /**
     * Font stretch as a `PangoStretch`, e.g.
     * @default PANGO_STRETCH_NORMAL
     */
    stretch?: PangoStretchNick | Pango.Stretch;
    /**
     * Whether the `stretch` property is set.
     * @default FALSE
     */
    'stretch-set'?: boolean;
    /**
     * Whether to strike through the text.
     * @default FALSE
     */
    strikethrough?: boolean;
    /** This property modifies the color of strikeouts. */
    'strikethrough-rgba'?: Gdk.RGBA;
    /**
     * If the `strikethrough-rgba` property has been set.
     * @default FALSE
     */
    'strikethrough-rgba-set'?: boolean;
    /**
     * Whether the `strikethrough` property is set.
     * @default FALSE
     */
    'strikethrough-set'?: boolean;
    /**
     * Font style as a `PangoStyle`, e.g.
     * @default PANGO_STYLE_NORMAL
     */
    style?: PangoStyleNick | Pango.Style;
    /**
     * Whether the `style` property is set.
     * @default FALSE
     */
    'style-set'?: boolean;
    /** Custom tabs for this text. */
    tabs?: Pango.TabArray;
    /**
     * Whether the `tabs` property is set.
     * @default FALSE
     */
    'tabs-set'?: boolean;
    /**
     * How to transform the text for display.
     * @since 4.6
     * @default PANGO_TEXT_TRANSFORM_NONE
     */
    'text-transform'?: PangoTextTransformNick | Pango.TextTransform;
    /**
     * Whether the `text-transform` property is set.
     * @default FALSE
     */
    'text-transform-set'?: boolean;
    /**
     * Style of underline for this text.
     * @default PANGO_UNDERLINE_NONE
     */
    underline?: PangoUnderlineNick | Pango.Underline;
    /** This property modifies the color of underlines. */
    'underline-rgba'?: Gdk.RGBA;
    /**
     * If the `underline-rgba` property has been set.
     * @default FALSE
     */
    'underline-rgba-set'?: boolean;
    /**
     * Whether the `underline` property is set.
     * @default FALSE
     */
    'underline-set'?: boolean;
    /**
     * Font variant as a `PangoVariant`, e.g.
     * @default PANGO_VARIANT_NORMAL
     */
    variant?: PangoVariantNick | Pango.Variant;
    /**
     * Whether the `variant` property is set.
     * @default FALSE
     */
    'variant-set'?: boolean;
    /**
     * Font weight as an integer.
     * @default 400
     */
    weight?: number;
    /**
     * Whether the `weight` property is set.
     * @default FALSE
     */
    'weight-set'?: boolean;
    /**
     * Whether this tag represents a single word.
     * @since 4.6
     * @default FALSE
     */
    word?: boolean;
    /**
     * Whether the `word` property is set.
     * @default FALSE
     */
    'word-set'?: boolean;
    /**
     * Whether to wrap lines never, at word boundaries, or at character boundaries.
     * @default GTK_WRAP_NONE
     */
    'wrap-mode'?: GtkWrapModeNick | Gtk.WrapMode;
    /**
     * Whether the `wrap-mode` property is set.
     * @default FALSE
     */
    'wrap-mode-set'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkTextTagConstructOnly = GObjectConstructOnly | 'name';

/** Collects the tags in a `GtkTextBuffer`. */
export interface GtkTextTagTableProps extends GObjectProps, GtkBuildableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkTextTagTableConstructOnly = GObjectConstructOnly | GtkBuildableConstructOnly;

/** Displays the contents of a [class@Gtk.TextBuffer]. */
export interface GtkTextViewProps extends GtkWidgetProps, GtkAccessibleProps, GtkAccessibleTextProps, GtkBuildableProps, GtkConstraintTargetProps, GtkScrollableProps {
    /**
     * Whether Tab will result in a tab character being entered.
     * @default TRUE
     */
    'accepts-tab'?: boolean;
    /**
     * The bottom margin for text in the text view.
     * @default 0
     */
    'bottom-margin'?: number;
    /** The buffer which is displayed. */
    buffer?: Gtk.TextBuffer;
    /**
     * If the insertion cursor is shown.
     * @default TRUE
     */
    'cursor-visible'?: boolean;
    /**
     * Whether the text can be modified by the user.
     * @default TRUE
     */
    editable?: boolean;
    /** A menu model whose contents will be appended to the context menu. */
    'extra-menu'?: Gio.MenuModel | null;
    /**
     * Which IM (input method) module should be used for this text_view.
     * @default NULL
     */
    'im-module'?: string;
    /**
     * Amount to indent the paragraph, in pixels.
     * @default 0
     */
    indent?: number;
    /**
     * Additional hints (beyond [property@Gtk.TextView:input-purpose]) that allow input methods to fine-tune their behaviour.
     * @default GTK_INPUT_HINT_NONE
     */
    'input-hints'?: number;
    /**
     * The purpose of this text field.
     * @default GTK_INPUT_PURPOSE_FREE_FORM
     */
    'input-purpose'?: GtkInputPurposeNick | Gtk.InputPurpose;
    /**
     * Left, right, or center justification.
     * @default GTK_JUSTIFY_LEFT
     */
    justification?: GtkJustificationNick | Gtk.Justification;
    /**
     * The default left margin for text in the text view.
     * @default 0
     */
    'left-margin'?: number;
    /**
     * Whether text should be displayed in a monospace font.
     * @default FALSE
     */
    monospace?: boolean;
    /**
     * Whether entered text overwrites existing contents.
     * @default FALSE
     */
    overwrite?: boolean;
    /**
     * Pixels of blank space above paragraphs.
     * @default 0
     */
    'pixels-above-lines'?: number;
    /**
     * Pixels of blank space below paragraphs.
     * @default 0
     */
    'pixels-below-lines'?: number;
    /**
     * Pixels of blank space between wrapped lines in a paragraph.
     * @default 0
     */
    'pixels-inside-wrap'?: number;
    /**
     * The default right margin for text in the text view.
     * @default 0
     */
    'right-margin'?: number;
    /** Custom tabs for this text. */
    tabs?: Pango.TabArray | null;
    /**
     * The top margin for text in the text view.
     * @default 0
     */
    'top-margin'?: number;
    /**
     * Whether to wrap lines never, at word boundaries, or at character boundaries.
     * @default GTK_WRAP_NONE
     */
    'wrap-mode'?: GtkWrapModeNick | Gtk.WrapMode;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkTextViewConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkAccessibleTextConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkScrollableConstructOnly;

/** Shows a button which remains “pressed-in” when clicked. */
export interface GtkToggleButtonProps extends GtkButtonProps, GtkAccessibleProps, GtkActionableProps, GtkBuildableProps, GtkConstraintTargetProps {
    /**
     * If the toggle button should be pressed in.
     * @default FALSE
     */
    active?: boolean;
    /** The toggle button whose group this widget belongs to. */
    group?: Gtk.ToggleButton;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkToggleButtonConstructOnly = GtkButtonConstructOnly | GtkAccessibleConstructOnly | GtkActionableConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** Represents a widget tooltip. */
export interface GtkTooltipProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkTooltipConstructOnly = GObjectConstructOnly;

/** Interface for Drag-and-Drop destinations in `GtkTreeView`. */
export interface GtkTreeDragDestProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkTreeDragDestConstructOnly = GObjectConstructOnly;

/** Interface for Drag-and-Drop destinations in `GtkTreeView`. */
export interface GtkTreeDragSourceProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkTreeDragSourceConstructOnly = GObjectConstructOnly;

/** Provides an expander for a tree-like list. */
export interface GtkTreeExpanderProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /** The child widget with the actual contents. */
    child?: Gtk.Widget | null;
    /**
     * Whether the expander icon should be hidden in a GtkTreeListRow.
     * @since 4.10
     * @default FALSE
     */
    'hide-expander'?: boolean;
    /**
     * TreeExpander indents the child according to its depth.
     * @since 4.10
     * @default TRUE
     */
    'indent-for-depth'?: boolean;
    /**
     * TreeExpander indents the child by the width of an expander-icon if it is not expandable.
     * @since 4.6
     * @default TRUE
     */
    'indent-for-icon'?: boolean;
    /** The list row to track for expander state. */
    'list-row'?: Gtk.TreeListRow | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkTreeExpanderConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** A list model that can create child models on demand. */
export interface GtkTreeListModelProps extends GObjectProps, GListModelProps {
    /**
     * If all rows should be expanded by default.
     * @default FALSE
     */
    autoexpand?: boolean;
    /**
     * Gets whether the model is in passthrough mode.
     * @default FALSE
     */
    passthrough?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkTreeListModelConstructOnly = GObjectConstructOnly | GListModelConstructOnly | 'passthrough';

/** The type of item used by `GtkTreeListModel`. */
export interface GtkTreeListRowProps extends GObjectProps {
    /**
     * If this row is currently expanded.
     * @default FALSE
     */
    expanded?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkTreeListRowConstructOnly = GObjectConstructOnly;

/** Applies a gives sorter to the levels in a tree. */
export interface GtkTreeListRowSorterProps extends GtkSorterProps {
    /** The underlying sorter */
    sorter?: Gtk.Sorter | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkTreeListRowSorterConstructOnly = GtkSorterConstructOnly;

/** The tree interface used by GtkTreeView The `GtkTreeModel` interface defines a generic tree interface for use by the `GtkTreeView` widget. */
export interface GtkTreeModelProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkTreeModelConstructOnly = GObjectConstructOnly;

/** A `GtkTreeModel` which hides parts of an underlying tree model A `GtkTreeModelFilter` is a tree model which wraps another tree model, and can do the following things: - Filter specific rows, based on… */
export interface GtkTreeModelFilterProps extends GObjectProps, GtkTreeDragSourceProps, GtkTreeModelProps {
    /** The child model of the tree model filter. */
    'child-model'?: Gtk.TreeModel;
    /** The virtual root of the tree model filter. */
    'virtual-root'?: Gtk.TreePath;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkTreeModelFilterConstructOnly = GObjectConstructOnly | GtkTreeDragSourceConstructOnly | GtkTreeModelConstructOnly | 'child-model' | 'virtual-root';

/** A GtkTreeModel which makes an underlying tree model sortable The `GtkTreeModelSort` is a model which implements the `GtkTreeSortable` interface. */
export interface GtkTreeModelSortProps extends GObjectProps, GtkTreeDragSourceProps, GtkTreeModelProps, GtkTreeSortableProps {
    /** The model of the tree model sort. */
    model?: Gtk.TreeModel;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkTreeModelSortConstructOnly = GObjectConstructOnly | GtkTreeDragSourceConstructOnly | GtkTreeModelConstructOnly | GtkTreeSortableConstructOnly | 'model';

/** The selection object for GtkTreeView The `GtkTreeSelection` object is a helper object to manage the selection for a `GtkTreeView` widget. */
export interface GtkTreeSelectionProps extends GObjectProps {
    /**
     * Selection mode.
     * @default GTK_SELECTION_SINGLE
     */
    mode?: GtkSelectionModeNick | Gtk.SelectionMode;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkTreeSelectionConstructOnly = GObjectConstructOnly;

/** The interface for sortable models used by GtkTreeView `GtkTreeSortable` is an interface to be implemented by tree models which support sorting. */
export interface GtkTreeSortableProps extends GtkTreeModelProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkTreeSortableConstructOnly = GtkTreeModelConstructOnly;

/** A tree-like data structure that can be used with the [class@Gtk.TreeView]. */
export interface GtkTreeStoreProps extends GObjectProps, GtkBuildableProps, GtkTreeDragDestProps, GtkTreeDragSourceProps, GtkTreeModelProps, GtkTreeSortableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkTreeStoreConstructOnly = GObjectConstructOnly | GtkBuildableConstructOnly | GtkTreeDragDestConstructOnly | GtkTreeDragSourceConstructOnly | GtkTreeModelConstructOnly | GtkTreeSortableConstructOnly;

/** A widget for displaying both trees and lists <picture> <source srcset="list-and-tree-dark.png" media="(prefers-color-scheme: dark)"> <img alt="An example GtkTreeView" src="list-and-tree.png"> </pictu… */
export interface GtkTreeViewProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkScrollableProps {
    /**
     * The activate-on-single-click property specifies whether the "row-activated" signal will be emitted after a single click.
     * @default FALSE
     */
    'activate-on-single-click'?: boolean;
    /** @default GTK_TREE_VIEW_GRID_LINES_NONE */
    'enable-grid-lines'?: GtkTreeViewGridLinesNick | Gtk.TreeViewGridLines;
    /** @default TRUE */
    'enable-search'?: boolean;
    /** @default FALSE */
    'enable-tree-lines'?: boolean;
    'expander-column'?: Gtk.TreeViewColumn | null;
    /**
     * Setting the ::fixed-height-mode property to %TRUE speeds up `GtkTreeView` by assuming that all rows have the same height.
     * @default FALSE
     */
    'fixed-height-mode'?: boolean;
    /** @default TRUE */
    'headers-clickable'?: boolean;
    /** @default TRUE */
    'headers-visible'?: boolean;
    /**
     * Enables or disables the hover expansion mode of @tree_view.
     * @default FALSE
     */
    'hover-expand'?: boolean;
    /**
     * Enables or disables the hover selection mode of @tree_view.
     * @default FALSE
     */
    'hover-selection'?: boolean;
    /**
     * Extra indentation for each level.
     * @default 0
     */
    'level-indentation'?: number;
    model?: Gtk.TreeModel | null;
    /** @default FALSE */
    reorderable?: boolean;
    /** @default FALSE */
    'rubber-banding'?: boolean;
    /** @default -1 */
    'search-column'?: number;
    /**
     * %TRUE if the view has expanders.
     * @default TRUE
     */
    'show-expanders'?: boolean;
    /** @default -1 */
    'tooltip-column'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkTreeViewConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkScrollableConstructOnly;

/** A visible column in a [class@Gtk.TreeView] widget The `GtkTreeViewColumn` object represents a visible column in a `GtkTreeView` widget. */
export interface GtkTreeViewColumnProps extends GInitiallyUnownedProps, GtkBuildableProps, GtkCellLayoutProps {
    /** @default 0.000000 */
    alignment?: number;
    /** The `GtkCellArea` used to layout cell renderers for this column. */
    'cell-area'?: Gtk.CellArea;
    /** @default FALSE */
    clickable?: boolean;
    /** @default FALSE */
    expand?: boolean;
    /** @default -1 */
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
    widget?: Gtk.Widget | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkTreeViewColumnConstructOnly = GInitiallyUnownedConstructOnly | GtkBuildableConstructOnly | GtkCellLayoutConstructOnly | 'cell-area';

/** A `GtkExpression` that tries to evaluate each of its expressions until it succeeds. */
export interface GtkTryExpressionProps extends GtkExpressionProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkTryExpressionConstructOnly = GtkExpressionConstructOnly;

/** Asynchronous API to open a uri with an application. */
export interface GtkUriLauncherProps extends GObjectProps {
    /**
     * The uri to launch.
     * @since 4.10
     * @default NULL
     */
    uri?: string | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkUriLauncherConstructOnly = GObjectConstructOnly;

/** Shows a `GtkMediaStream` with media controls. */
export interface GtkVideoProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /**
     * If the video should automatically begin playing.
     * @default FALSE
     */
    autoplay?: boolean;
    /** The file played by this video if the video is playing a file. */
    file?: Gio.File | null;
    /**
     * Whether to enable graphics offload.
     * @since 4.14
     * @default GTK_GRAPHICS_OFFLOAD_DISABLED
     */
    'graphics-offload'?: GtkGraphicsOffloadEnabledNick | Gtk.GraphicsOffloadEnabled;
    /**
     * If new media files should be set to loop.
     * @default FALSE
     */
    loop?: boolean;
    /** The media-stream played */
    'media-stream'?: Gtk.MediaStream | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkVideoConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** Implements scrollability for widgets that don't support scrolling on their own. */
export interface GtkViewportProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkScrollableProps {
    /** The child widget. */
    child?: Gtk.Widget | null;
    /**
     * Whether to scroll when the focus changes.
     * @default TRUE
     */
    'scroll-to-focus'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkViewportConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkScrollableConstructOnly;

/** `GtkVolumeButton` is a `GtkScaleButton` subclass tailored for volume control. */
export interface GtkVolumeButtonProps extends GtkScaleButtonProps, GtkAccessibleProps, GtkAccessibleRangeProps, GtkBuildableProps, GtkConstraintTargetProps, GtkOrientableProps {
    /**
     * Whether to use symbolic icons as the icons.
     * @default TRUE
     * @deprecated since 4.10: This widget will be removed in GTK 5
     */
    'use-symbolic'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkVolumeButtonConstructOnly = GtkScaleButtonConstructOnly | GtkAccessibleConstructOnly | GtkAccessibleRangeConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkOrientableConstructOnly;

/** The base class for all widgets. */
export interface GtkWidgetProps extends GInitiallyUnownedProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /**
     * Whether the widget or any of its descendents can accept the input focus.
     * @default TRUE
     */
    'can-focus'?: boolean;
    /**
     * Whether the widget can receive pointer events.
     * @default TRUE
     */
    'can-target'?: boolean;
    /** A list of css classes applied to this widget. */
    'css-classes'?: string[];
    /**
     * The name of this widget in the CSS tree.
     * @default NULL
     */
    'css-name'?: string;
    /** The cursor used by @widget. */
    cursor?: Gdk.Cursor | null;
    /**
     * Whether the widget should grab focus when it is clicked with the mouse.
     * @default TRUE
     */
    'focus-on-click'?: boolean;
    /**
     * Whether this widget itself will accept the input focus.
     * @default FALSE
     */
    focusable?: boolean;
    /**
     * How to distribute horizontal space if widget gets extra space.
     * @default GTK_ALIGN_FILL
     */
    halign?: GtkAlignNick | Gtk.Align;
    /**
     * Enables or disables the emission of the [signal@Gtk.Widget::query-tooltip] signal on @widget.
     * @default FALSE
     */
    'has-tooltip'?: boolean;
    /**
     * Overrides for height request of the widget.
     * @default -1
     */
    'height-request'?: number;
    /**
     * Whether to expand horizontally.
     * @default FALSE
     */
    hexpand?: boolean;
    /**
     * Whether to use the `hexpand` property.
     * @default FALSE
     */
    'hexpand-set'?: boolean;
    /** The [class@Gtk.LayoutManager] instance to use to compute the preferred size of the widget, and allocate its children. */
    'layout-manager'?: Gtk.LayoutManager | null;
    /**
     * Makes this widget act like a modal dialog, with respect to event delivery.
     * @since 4.18
     * @default FALSE
     */
    'limit-events'?: boolean;
    /**
     * Margin on bottom side of widget.
     * @default 0
     */
    'margin-bottom'?: number;
    /**
     * Margin on end of widget, horizontally.
     * @default 0
     */
    'margin-end'?: number;
    /**
     * Margin on start of widget, horizontally.
     * @default 0
     */
    'margin-start'?: number;
    /**
     * Margin on top side of widget.
     * @default 0
     */
    'margin-top'?: number;
    /**
     * The name of the widget.
     * @default NULL
     */
    name?: string;
    /**
     * The requested opacity of the widget.
     * @default 1.000000
     */
    opacity?: number;
    /**
     * How content outside the widget's content area is treated.
     * @default GTK_OVERFLOW_VISIBLE
     */
    overflow?: GtkOverflowNick | Gtk.Overflow;
    /**
     * Whether the widget will receive the default action when it is focused.
     * @default FALSE
     */
    'receives-default'?: boolean;
    /**
     * Whether the widget responds to input.
     * @default TRUE
     */
    sensitive?: boolean;
    /**
     * Sets the text of tooltip to be the given string, which is marked up with Pango markup.
     * @default NULL
     */
    'tooltip-markup'?: string | null;
    /**
     * Sets the text of tooltip to be the given string.
     * @default NULL
     */
    'tooltip-text'?: string | null;
    /**
     * How to distribute vertical space if widget gets extra space.
     * @default GTK_ALIGN_FILL
     */
    valign?: GtkAlignNick | Gtk.Align;
    /**
     * Whether to expand vertically.
     * @default FALSE
     */
    vexpand?: boolean;
    /**
     * Whether to use the `vexpand` property.
     * @default FALSE
     */
    'vexpand-set'?: boolean;
    /**
     * Whether the widget is visible.
     * @default TRUE
     */
    visible?: boolean;
    /**
     * Overrides for width request of the widget.
     * @default -1
     */
    'width-request'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkWidgetConstructOnly = GInitiallyUnownedConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | 'css-name';

/** A `GdkPaintable` that displays the contents of a widget. */
export interface GtkWidgetPaintableProps extends GObjectProps, GdkPaintableProps {
    /** The observed widget or %NULL if none. */
    widget?: Gtk.Widget | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkWidgetPaintableConstructOnly = GObjectConstructOnly | GdkPaintableConstructOnly;

/** A toplevel window which can contain other widgets. */
export interface GtkWindowProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkNativeProps, GtkRootProps, GtkShortcutManagerProps {
    /** The `GtkApplication` associated with the window. */
    application?: Gtk.Application | null;
    /** The child widget. */
    child?: Gtk.Widget | null;
    /**
     * Whether the window should have a frame (also known as *decorations*).
     * @default TRUE
     */
    decorated?: boolean;
    /**
     * The default height of the window.
     * @default 0
     */
    'default-height'?: number;
    /** The default widget. */
    'default-widget'?: Gtk.Widget | null;
    /**
     * The default width of the window.
     * @default 0
     */
    'default-width'?: number;
    /**
     * Whether the window frame should have a close button.
     * @default TRUE
     */
    deletable?: boolean;
    /**
     * If this window should be destroyed when the parent is destroyed.
     * @default FALSE
     */
    'destroy-with-parent'?: boolean;
    /** The display that will display this window. */
    display?: Gdk.Display;
    /**
     * Whether 'focus rectangles' are currently visible in this window.
     * @default TRUE
     */
    'focus-visible'?: boolean;
    /** The focus widget. */
    'focus-widget'?: Gtk.Widget | null;
    /**
     * Whether the window is fullscreen.
     * @default FALSE
     */
    fullscreened?: boolean;
    /**
     * The gravity to use when resizing the window programmatically.
     * @since 4.20
     * @default GTK_WINDOW_GRAVITY_TOP_START
     */
    gravity?: GtkWindowGravityNick | Gtk.WindowGravity;
    /**
     * Whether the window frame should handle <kbd>F10</kbd> for activating menubars.
     * @since 4.2
     * @default TRUE
     */
    'handle-menubar-accel'?: boolean;
    /**
     * If this window should be hidden instead of destroyed when the user clicks the close button.
     * @default FALSE
     */
    'hide-on-close'?: boolean;
    /**
     * Specifies the name of the themed icon to use as the window icon.
     * @default NULL
     */
    'icon-name'?: string | null;
    /**
     * Whether the window is maximized.
     * @default FALSE
     */
    maximized?: boolean;
    /**
     * Whether mnemonics are currently visible in this window.
     * @default FALSE
     */
    'mnemonics-visible'?: boolean;
    /**
     * If true, the window is modal.
     * @default FALSE
     */
    modal?: boolean;
    /**
     * If true, users can resize the window.
     * @default TRUE
     */
    resizable?: boolean;
    /**
     * A write-only property for setting window's startup notification identifier.
     * @default NULL
     */
    'startup-id'?: string;
    /**
     * The title of the window.
     * @default NULL
     */
    title?: string | null;
    /**
     * The titlebar widget.
     * @since 4.6
     */
    titlebar?: Gtk.Widget | null;
    /** The transient parent of the window. */
    'transient-for'?: Gtk.Window | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkWindowConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkNativeConstructOnly | GtkRootConstructOnly | GtkShortcutManagerConstructOnly;

/** Shows window frame controls. */
export interface GtkWindowControlsProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /**
     * The decoration layout for window buttons.
     * @default NULL
     */
    'decoration-layout'?: string | null;
    /**
     * Whether the widget shows start or end side of the decoration layout.
     * @default GTK_PACK_START
     */
    side?: GtkPackTypeNick | Gtk.PackType;
    /**
     * Whether to show platform native close/minimize/maximize buttons.
     * @since 4.18
     * @default FALSE
     */
    'use-native-controls'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkWindowControlsConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** Creates groups of windows that behave like separate applications. */
export interface GtkWindowGroupProps extends GObjectProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkWindowGroupConstructOnly = GObjectConstructOnly;

/** Implements titlebar functionality for a window. */
export interface GtkWindowHandleProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /** The child widget. */
    child?: Gtk.Widget | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkWindowHandleConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

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
    GtkActionBar: {
        class: Gtk.ActionBar;
        props: GtkActionBarProps;
        signals: Gtk.ActionBar.SignalSignatures;
        constructOnly: GtkActionBarConstructOnly;
        slotCandidates: {
        'center': 'set_center_widget';
        'end': 'pack_end';
        'start': 'pack_start';
        };
    };
    GtkAppChooserButton: {
        class: Gtk.AppChooserButton;
        props: GtkAppChooserButtonProps;
        signals: Gtk.AppChooserButton.SignalSignatures;
        constructOnly: GtkAppChooserButtonConstructOnly;
        slotCandidates: {};
    };
    GtkAppChooserDialog: {
        class: Gtk.AppChooserDialog;
        props: GtkAppChooserDialogProps;
        signals: Gtk.AppChooserDialog.SignalSignatures;
        constructOnly: GtkAppChooserDialogConstructOnly;
        slotCandidates: {};
    };
    GtkAppChooserWidget: {
        class: Gtk.AppChooserWidget;
        props: GtkAppChooserWidgetProps;
        signals: Gtk.AppChooserWidget.SignalSignatures;
        constructOnly: GtkAppChooserWidgetConstructOnly;
        slotCandidates: {};
    };
    GtkApplicationWindow: {
        class: Gtk.ApplicationWindow;
        props: GtkApplicationWindowProps;
        signals: Gtk.ApplicationWindow.SignalSignatures;
        constructOnly: GtkApplicationWindowConstructOnly;
        slotCandidates: {
        'help-overlay': 'set_help_overlay';
        };
    };
    GtkAspectFrame: {
        class: Gtk.AspectFrame;
        props: GtkAspectFrameProps;
        signals: Gtk.AspectFrame.SignalSignatures;
        constructOnly: GtkAspectFrameConstructOnly;
        slotCandidates: {
        'child': 'set_child';
        };
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
    GtkBox: {
        class: Gtk.Box;
        props: GtkBoxProps;
        signals: Gtk.Box.SignalSignatures;
        constructOnly: GtkBoxConstructOnly;
        slotCandidates: {};
    };
    GtkButton: {
        class: Gtk.Button;
        props: GtkButtonProps;
        signals: Gtk.Button.SignalSignatures;
        constructOnly: GtkButtonConstructOnly;
        slotCandidates: {
        'child': 'set_child';
        };
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
    GtkCenterBox: {
        class: Gtk.CenterBox;
        props: GtkCenterBoxProps;
        signals: Gtk.CenterBox.SignalSignatures;
        constructOnly: GtkCenterBoxConstructOnly;
        slotCandidates: {
        'center': 'set_center_widget';
        'end': 'set_end_widget';
        'start': 'set_start_widget';
        };
    };
    GtkCheckButton: {
        class: Gtk.CheckButton;
        props: GtkCheckButtonProps;
        signals: Gtk.CheckButton.SignalSignatures;
        constructOnly: GtkCheckButtonConstructOnly;
        slotCandidates: {
        'child': 'set_child';
        'group': 'set_group';
        };
    };
    GtkColorButton: {
        class: Gtk.ColorButton;
        props: GtkColorButtonProps;
        signals: Gtk.ColorButton.SignalSignatures;
        constructOnly: GtkColorButtonConstructOnly;
        slotCandidates: {};
    };
    GtkColorChooserDialog: {
        class: Gtk.ColorChooserDialog;
        props: GtkColorChooserDialogProps;
        signals: Gtk.ColorChooserDialog.SignalSignatures;
        constructOnly: GtkColorChooserDialogConstructOnly;
        slotCandidates: {};
    };
    GtkColorChooserWidget: {
        class: Gtk.ColorChooserWidget;
        props: GtkColorChooserWidgetProps;
        signals: Gtk.ColorChooserWidget.SignalSignatures;
        constructOnly: GtkColorChooserWidgetConstructOnly;
        slotCandidates: {};
    };
    GtkColorDialogButton: {
        class: Gtk.ColorDialogButton;
        props: GtkColorDialogButtonProps;
        signals: Gtk.ColorDialogButton.SignalSignatures;
        constructOnly: GtkColorDialogButtonConstructOnly;
        slotCandidates: {};
    };
    GtkColumnView: {
        class: Gtk.ColumnView;
        props: GtkColumnViewProps;
        signals: Gtk.ColumnView.SignalSignatures;
        constructOnly: GtkColumnViewConstructOnly;
        slotCandidates: {};
    };
    GtkComboBox: {
        class: Gtk.ComboBox;
        props: GtkComboBoxProps;
        signals: Gtk.ComboBox.SignalSignatures;
        constructOnly: GtkComboBoxConstructOnly;
        slotCandidates: {
        'child': 'set_child';
        };
    };
    GtkComboBoxText: {
        class: Gtk.ComboBoxText;
        props: GtkComboBoxTextProps;
        signals: Gtk.ComboBoxText.SignalSignatures;
        constructOnly: GtkComboBoxTextConstructOnly;
        slotCandidates: {};
    };
    GtkDialog: {
        class: Gtk.Dialog;
        props: GtkDialogProps;
        signals: Gtk.Dialog.SignalSignatures;
        constructOnly: GtkDialogConstructOnly;
        slotCandidates: {};
    };
    GtkDragIcon: {
        class: Gtk.DragIcon;
        props: GtkDragIconProps;
        signals: Gtk.DragIcon.SignalSignatures;
        constructOnly: GtkDragIconConstructOnly;
        slotCandidates: {
        'child': 'set_child';
        };
    };
    GtkDrawingArea: {
        class: Gtk.DrawingArea;
        props: GtkDrawingAreaProps;
        signals: Gtk.DrawingArea.SignalSignatures;
        constructOnly: GtkDrawingAreaConstructOnly;
        slotCandidates: {};
    };
    GtkDropDown: {
        class: Gtk.DropDown;
        props: GtkDropDownProps;
        signals: Gtk.DropDown.SignalSignatures;
        constructOnly: GtkDropDownConstructOnly;
        slotCandidates: {};
    };
    GtkEditableLabel: {
        class: Gtk.EditableLabel;
        props: GtkEditableLabelProps;
        signals: Gtk.EditableLabel.SignalSignatures;
        constructOnly: GtkEditableLabelConstructOnly;
        slotCandidates: {};
    };
    GtkEmojiChooser: {
        class: Gtk.EmojiChooser;
        props: GtkEmojiChooserProps;
        signals: Gtk.EmojiChooser.SignalSignatures;
        constructOnly: GtkEmojiChooserConstructOnly;
        slotCandidates: {};
    };
    GtkEntry: {
        class: Gtk.Entry;
        props: GtkEntryProps;
        signals: Gtk.Entry.SignalSignatures;
        constructOnly: GtkEntryConstructOnly;
        slotCandidates: {};
    };
    GtkExpander: {
        class: Gtk.Expander;
        props: GtkExpanderProps;
        signals: Gtk.Expander.SignalSignatures;
        constructOnly: GtkExpanderConstructOnly;
        slotCandidates: {
        'child': 'set_child';
        'label': 'set_label_widget';
        };
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
    GtkFixed: {
        class: Gtk.Fixed;
        props: GtkFixedProps;
        signals: Gtk.Fixed.SignalSignatures;
        constructOnly: GtkFixedConstructOnly;
        slotCandidates: {};
    };
    GtkFlowBox: {
        class: Gtk.FlowBox;
        props: GtkFlowBoxProps;
        signals: Gtk.FlowBox.SignalSignatures;
        constructOnly: GtkFlowBoxConstructOnly;
        slotCandidates: {};
    };
    GtkFlowBoxChild: {
        class: Gtk.FlowBoxChild;
        props: GtkFlowBoxChildProps;
        signals: Gtk.FlowBoxChild.SignalSignatures;
        constructOnly: GtkFlowBoxChildConstructOnly;
        slotCandidates: {
        'child': 'set_child';
        };
    };
    GtkFontButton: {
        class: Gtk.FontButton;
        props: GtkFontButtonProps;
        signals: Gtk.FontButton.SignalSignatures;
        constructOnly: GtkFontButtonConstructOnly;
        slotCandidates: {};
    };
    GtkFontChooserDialog: {
        class: Gtk.FontChooserDialog;
        props: GtkFontChooserDialogProps;
        signals: Gtk.FontChooserDialog.SignalSignatures;
        constructOnly: GtkFontChooserDialogConstructOnly;
        slotCandidates: {};
    };
    GtkFontChooserWidget: {
        class: Gtk.FontChooserWidget;
        props: GtkFontChooserWidgetProps;
        signals: Gtk.FontChooserWidget.SignalSignatures;
        constructOnly: GtkFontChooserWidgetConstructOnly;
        slotCandidates: {};
    };
    GtkFontDialogButton: {
        class: Gtk.FontDialogButton;
        props: GtkFontDialogButtonProps;
        signals: Gtk.FontDialogButton.SignalSignatures;
        constructOnly: GtkFontDialogButtonConstructOnly;
        slotCandidates: {};
    };
    GtkFrame: {
        class: Gtk.Frame;
        props: GtkFrameProps;
        signals: Gtk.Frame.SignalSignatures;
        constructOnly: GtkFrameConstructOnly;
        slotCandidates: {
        'child': 'set_child';
        'label': 'set_label_widget';
        };
    };
    GtkGLArea: {
        class: Gtk.GLArea;
        props: GtkGLAreaProps;
        signals: Gtk.GLArea.SignalSignatures;
        constructOnly: GtkGLAreaConstructOnly;
        slotCandidates: {};
    };
    GtkGraphicsOffload: {
        class: Gtk.GraphicsOffload;
        props: GtkGraphicsOffloadProps;
        signals: Gtk.GraphicsOffload.SignalSignatures;
        constructOnly: GtkGraphicsOffloadConstructOnly;
        slotCandidates: {
        'child': 'set_child';
        };
    };
    GtkGrid: {
        class: Gtk.Grid;
        props: GtkGridProps;
        signals: Gtk.Grid.SignalSignatures;
        constructOnly: GtkGridConstructOnly;
        slotCandidates: {};
    };
    GtkGridView: {
        class: Gtk.GridView;
        props: GtkGridViewProps;
        signals: Gtk.GridView.SignalSignatures;
        constructOnly: GtkGridViewConstructOnly;
        slotCandidates: {};
    };
    GtkHeaderBar: {
        class: Gtk.HeaderBar;
        props: GtkHeaderBarProps;
        signals: Gtk.HeaderBar.SignalSignatures;
        constructOnly: GtkHeaderBarConstructOnly;
        slotCandidates: {
        'end': 'pack_end';
        'start': 'pack_start';
        'title': 'set_title_widget';
        };
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
    GtkInfoBar: {
        class: Gtk.InfoBar;
        props: GtkInfoBarProps;
        signals: Gtk.InfoBar.SignalSignatures;
        constructOnly: GtkInfoBarConstructOnly;
        slotCandidates: {
        'child': 'add_child';
        };
    };
    GtkInscription: {
        class: Gtk.Inscription;
        props: GtkInscriptionProps;
        signals: Gtk.Inscription.SignalSignatures;
        constructOnly: GtkInscriptionConstructOnly;
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
    GtkLevelBar: {
        class: Gtk.LevelBar;
        props: GtkLevelBarProps;
        signals: Gtk.LevelBar.SignalSignatures;
        constructOnly: GtkLevelBarConstructOnly;
        slotCandidates: {};
    };
    GtkLinkButton: {
        class: Gtk.LinkButton;
        props: GtkLinkButtonProps;
        signals: Gtk.LinkButton.SignalSignatures;
        constructOnly: GtkLinkButtonConstructOnly;
        slotCandidates: {};
    };
    GtkListBox: {
        class: Gtk.ListBox;
        props: GtkListBoxProps;
        signals: Gtk.ListBox.SignalSignatures;
        constructOnly: GtkListBoxConstructOnly;
        slotCandidates: {
        'placeholder': 'set_placeholder';
        };
    };
    GtkListBoxRow: {
        class: Gtk.ListBoxRow;
        props: GtkListBoxRowProps;
        signals: Gtk.ListBoxRow.SignalSignatures;
        constructOnly: GtkListBoxRowConstructOnly;
        slotCandidates: {
        'child': 'set_child';
        'header': 'set_header';
        };
    };
    GtkListView: {
        class: Gtk.ListView;
        props: GtkListViewProps;
        signals: Gtk.ListView.SignalSignatures;
        constructOnly: GtkListViewConstructOnly;
        slotCandidates: {};
    };
    GtkLockButton: {
        class: Gtk.LockButton;
        props: GtkLockButtonProps;
        signals: Gtk.LockButton.SignalSignatures;
        constructOnly: GtkLockButtonConstructOnly;
        slotCandidates: {};
    };
    GtkMediaControls: {
        class: Gtk.MediaControls;
        props: GtkMediaControlsProps;
        signals: Gtk.MediaControls.SignalSignatures;
        constructOnly: GtkMediaControlsConstructOnly;
        slotCandidates: {};
    };
    GtkMenuButton: {
        class: Gtk.MenuButton;
        props: GtkMenuButtonProps;
        signals: Gtk.MenuButton.SignalSignatures;
        constructOnly: GtkMenuButtonConstructOnly;
        slotCandidates: {
        'child': 'set_child';
        'popover': 'set_popover';
        };
    };
    GtkMessageDialog: {
        class: Gtk.MessageDialog;
        props: GtkMessageDialogProps;
        signals: Gtk.MessageDialog.SignalSignatures;
        constructOnly: GtkMessageDialogConstructOnly;
        slotCandidates: {};
    };
    GtkNotebook: {
        class: Gtk.Notebook;
        props: GtkNotebookProps;
        signals: Gtk.Notebook.SignalSignatures;
        constructOnly: GtkNotebookConstructOnly;
        slotCandidates: {};
    };
    GtkOverlay: {
        class: Gtk.Overlay;
        props: GtkOverlayProps;
        signals: Gtk.Overlay.SignalSignatures;
        constructOnly: GtkOverlayConstructOnly;
        slotCandidates: {
        'child': 'set_child';
        'overlay': 'add_overlay';
        };
    };
    GtkPageSetupUnixDialog: {
        class: Gtk.PageSetupUnixDialog;
        props: GtkPageSetupUnixDialogProps;
        signals: Gtk.PageSetupUnixDialog.SignalSignatures;
        constructOnly: GtkPageSetupUnixDialogConstructOnly;
        slotCandidates: {};
    };
    GtkPaned: {
        class: Gtk.Paned;
        props: GtkPanedProps;
        signals: Gtk.Paned.SignalSignatures;
        constructOnly: GtkPanedConstructOnly;
        slotCandidates: {
        'end-child': 'set_end_child';
        'start-child': 'set_start_child';
        };
    };
    GtkPasswordEntry: {
        class: Gtk.PasswordEntry;
        props: GtkPasswordEntryProps;
        signals: Gtk.PasswordEntry.SignalSignatures;
        constructOnly: GtkPasswordEntryConstructOnly;
        slotCandidates: {};
    };
    GtkPicture: {
        class: Gtk.Picture;
        props: GtkPictureProps;
        signals: Gtk.Picture.SignalSignatures;
        constructOnly: GtkPictureConstructOnly;
        slotCandidates: {};
    };
    GtkPopover: {
        class: Gtk.Popover;
        props: GtkPopoverProps;
        signals: Gtk.Popover.SignalSignatures;
        constructOnly: GtkPopoverConstructOnly;
        slotCandidates: {
        'child': 'set_child';
        'default': 'set_default_widget';
        };
    };
    GtkPopoverBin: {
        class: Gtk.PopoverBin;
        props: GtkPopoverBinProps;
        signals: Gtk.PopoverBin.SignalSignatures;
        constructOnly: GtkPopoverBinConstructOnly;
        slotCandidates: {
        'child': 'set_child';
        'popover': 'set_popover';
        };
    };
    GtkPopoverMenu: {
        class: Gtk.PopoverMenu;
        props: GtkPopoverMenuProps;
        signals: Gtk.PopoverMenu.SignalSignatures;
        constructOnly: GtkPopoverMenuConstructOnly;
        slotCandidates: {};
    };
    GtkPopoverMenuBar: {
        class: Gtk.PopoverMenuBar;
        props: GtkPopoverMenuBarProps;
        signals: Gtk.PopoverMenuBar.SignalSignatures;
        constructOnly: GtkPopoverMenuBarConstructOnly;
        slotCandidates: {};
    };
    GtkPrintUnixDialog: {
        class: Gtk.PrintUnixDialog;
        props: GtkPrintUnixDialogProps;
        signals: Gtk.PrintUnixDialog.SignalSignatures;
        constructOnly: GtkPrintUnixDialogConstructOnly;
        slotCandidates: {};
    };
    GtkProgressBar: {
        class: Gtk.ProgressBar;
        props: GtkProgressBarProps;
        signals: Gtk.ProgressBar.SignalSignatures;
        constructOnly: GtkProgressBarConstructOnly;
        slotCandidates: {};
    };
    GtkRange: {
        class: Gtk.Range;
        props: GtkRangeProps;
        signals: Gtk.Range.SignalSignatures;
        constructOnly: GtkRangeConstructOnly;
        slotCandidates: {};
    };
    GtkRevealer: {
        class: Gtk.Revealer;
        props: GtkRevealerProps;
        signals: Gtk.Revealer.SignalSignatures;
        constructOnly: GtkRevealerConstructOnly;
        slotCandidates: {
        'child': 'set_child';
        };
    };
    GtkScale: {
        class: Gtk.Scale;
        props: GtkScaleProps;
        signals: Gtk.Scale.SignalSignatures;
        constructOnly: GtkScaleConstructOnly;
        slotCandidates: {};
    };
    GtkScaleButton: {
        class: Gtk.ScaleButton;
        props: GtkScaleButtonProps;
        signals: Gtk.ScaleButton.SignalSignatures;
        constructOnly: GtkScaleButtonConstructOnly;
        slotCandidates: {};
    };
    GtkScrollbar: {
        class: Gtk.Scrollbar;
        props: GtkScrollbarProps;
        signals: Gtk.Scrollbar.SignalSignatures;
        constructOnly: GtkScrollbarConstructOnly;
        slotCandidates: {};
    };
    GtkScrolledWindow: {
        class: Gtk.ScrolledWindow;
        props: GtkScrolledWindowProps;
        signals: Gtk.ScrolledWindow.SignalSignatures;
        constructOnly: GtkScrolledWindowConstructOnly;
        slotCandidates: {
        'child': 'set_child';
        };
    };
    GtkSearchBar: {
        class: Gtk.SearchBar;
        props: GtkSearchBarProps;
        signals: Gtk.SearchBar.SignalSignatures;
        constructOnly: GtkSearchBarConstructOnly;
        slotCandidates: {
        'child': 'set_child';
        'key-capture': 'set_key_capture_widget';
        };
    };
    GtkSearchEntry: {
        class: Gtk.SearchEntry;
        props: GtkSearchEntryProps;
        signals: Gtk.SearchEntry.SignalSignatures;
        constructOnly: GtkSearchEntryConstructOnly;
        slotCandidates: {
        'key-capture': 'set_key_capture_widget';
        };
    };
    GtkSeparator: {
        class: Gtk.Separator;
        props: GtkSeparatorProps;
        signals: Gtk.Separator.SignalSignatures;
        constructOnly: GtkSeparatorConstructOnly;
        slotCandidates: {};
    };
    GtkShortcutLabel: {
        class: Gtk.ShortcutLabel;
        props: GtkShortcutLabelProps;
        signals: Gtk.ShortcutLabel.SignalSignatures;
        constructOnly: GtkShortcutLabelConstructOnly;
        slotCandidates: {};
    };
    GtkShortcutsGroup: {
        class: Gtk.ShortcutsGroup;
        props: GtkShortcutsGroupProps;
        signals: Gtk.ShortcutsGroup.SignalSignatures;
        constructOnly: GtkShortcutsGroupConstructOnly;
        slotCandidates: {
        'shortcut': 'add_shortcut';
        };
    };
    GtkShortcutsSection: {
        class: Gtk.ShortcutsSection;
        props: GtkShortcutsSectionProps;
        signals: Gtk.ShortcutsSection.SignalSignatures;
        constructOnly: GtkShortcutsSectionConstructOnly;
        slotCandidates: {
        'group': 'add_group';
        };
    };
    GtkShortcutsShortcut: {
        class: Gtk.ShortcutsShortcut;
        props: GtkShortcutsShortcutProps;
        signals: Gtk.ShortcutsShortcut.SignalSignatures;
        constructOnly: GtkShortcutsShortcutConstructOnly;
        slotCandidates: {};
    };
    GtkShortcutsWindow: {
        class: Gtk.ShortcutsWindow;
        props: GtkShortcutsWindowProps;
        signals: Gtk.ShortcutsWindow.SignalSignatures;
        constructOnly: GtkShortcutsWindowConstructOnly;
        slotCandidates: {
        'section': 'add_section';
        };
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
    GtkStack: {
        class: Gtk.Stack;
        props: GtkStackProps;
        signals: Gtk.Stack.SignalSignatures;
        constructOnly: GtkStackConstructOnly;
        slotCandidates: {
        'child': 'add_child';
        'visible-child': 'set_visible_child';
        };
    };
    GtkStackSidebar: {
        class: Gtk.StackSidebar;
        props: GtkStackSidebarProps;
        signals: Gtk.StackSidebar.SignalSignatures;
        constructOnly: GtkStackSidebarConstructOnly;
        slotCandidates: {
        'stack': 'set_stack';
        };
    };
    GtkStackSwitcher: {
        class: Gtk.StackSwitcher;
        props: GtkStackSwitcherProps;
        signals: Gtk.StackSwitcher.SignalSignatures;
        constructOnly: GtkStackSwitcherConstructOnly;
        slotCandidates: {
        'stack': 'set_stack';
        };
    };
    GtkStatusbar: {
        class: Gtk.Statusbar;
        props: GtkStatusbarProps;
        signals: Gtk.Statusbar.SignalSignatures;
        constructOnly: GtkStatusbarConstructOnly;
        slotCandidates: {};
    };
    GtkSvgWidget: {
        class: Gtk.SvgWidget;
        props: GtkSvgWidgetProps;
        signals: Gtk.SvgWidget.SignalSignatures;
        constructOnly: GtkSvgWidgetConstructOnly;
        slotCandidates: {};
    };
    GtkSwitch: {
        class: Gtk.Switch;
        props: GtkSwitchProps;
        signals: Gtk.Switch.SignalSignatures;
        constructOnly: GtkSwitchConstructOnly;
        slotCandidates: {};
    };
    GtkText: {
        class: Gtk.Text;
        props: GtkTextProps;
        signals: Gtk.Text.SignalSignatures;
        constructOnly: GtkTextConstructOnly;
        slotCandidates: {};
    };
    GtkTextView: {
        class: Gtk.TextView;
        props: GtkTextViewProps;
        signals: Gtk.TextView.SignalSignatures;
        constructOnly: GtkTextViewConstructOnly;
        slotCandidates: {};
    };
    GtkToggleButton: {
        class: Gtk.ToggleButton;
        props: GtkToggleButtonProps;
        signals: Gtk.ToggleButton.SignalSignatures;
        constructOnly: GtkToggleButtonConstructOnly;
        slotCandidates: {
        'group': 'set_group';
        };
    };
    GtkTreeExpander: {
        class: Gtk.TreeExpander;
        props: GtkTreeExpanderProps;
        signals: Gtk.TreeExpander.SignalSignatures;
        constructOnly: GtkTreeExpanderConstructOnly;
        slotCandidates: {
        'child': 'set_child';
        };
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
    GtkVideo: {
        class: Gtk.Video;
        props: GtkVideoProps;
        signals: Gtk.Video.SignalSignatures;
        constructOnly: GtkVideoConstructOnly;
        slotCandidates: {};
    };
    GtkViewport: {
        class: Gtk.Viewport;
        props: GtkViewportProps;
        signals: Gtk.Viewport.SignalSignatures;
        constructOnly: GtkViewportConstructOnly;
        slotCandidates: {
        'child': 'set_child';
        };
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
        'child': 'set_child';
        'default': 'set_default_widget';
        'focus': 'set_focus';
        'titlebar': 'set_titlebar';
        'transient-for': 'set_transient_for';
        };
    };
    GtkWindowControls: {
        class: Gtk.WindowControls;
        props: GtkWindowControlsProps;
        signals: Gtk.WindowControls.SignalSignatures;
        constructOnly: GtkWindowControlsConstructOnly;
        slotCandidates: {};
    };
    GtkWindowHandle: {
        class: Gtk.WindowHandle;
        props: GtkWindowHandleProps;
        signals: Gtk.WindowHandle.SignalSignatures;
        constructOnly: GtkWindowHandleConstructOnly;
        slotCandidates: {
        'child': 'set_child';
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
    GtkColumnViewCell: {
        class: Gtk.ColumnViewCell;
        props: GtkColumnViewCellProps;
        signals: Gtk.ColumnViewCell.SignalSignatures;
        constructOnly: GtkColumnViewCellConstructOnly;
        slotCandidates: {
        'child': 'set_child';
        };
    };
    GtkListHeader: {
        class: Gtk.ListHeader;
        props: GtkListHeaderProps;
        signals: Gtk.ListHeader.SignalSignatures;
        constructOnly: GtkListHeaderConstructOnly;
        slotCandidates: {
        'child': 'set_child';
        };
    };
    GtkListItem: {
        class: Gtk.ListItem;
        props: GtkListItemProps;
        signals: Gtk.ListItem.SignalSignatures;
        constructOnly: GtkListItemConstructOnly;
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
