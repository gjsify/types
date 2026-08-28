/**
 * The GIR-derived widget VOCABULARY for Gtk-4.0.
 *
 * GENERATED — do not edit. Provenance: Gtk-4.0 — library 4.23.3 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Gio.ActionGroup Gio.ActionMap
 *
 * 103 concrete widgets, 124 declarations, 104 enum nick unions, 60 slot candidates.
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
import type Gdk from '@girs/gdk-4.0';
import type Gio from '@girs/gio-2.0';
import type Gtk from './gtk-4.0.js';
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

/** Displays information about a program. */
export interface GtkAboutDialogProps extends GtkWindowProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkNativeProps, GtkRootProps, GtkShortcutManagerProps {
    /** The people who contributed artwork to the program. */
    artists?: string[];
    /** The authors of the program. */
    authors?: string[];
    /** Comments about the program. */
    comments?: string | null;
    /** Copyright information for the program. */
    copyright?: string | null;
    /** The people documenting the program. */
    documenters?: string[];
    /** The license of the program, as free-form text. */
    license?: string | null;
    /** The license of the program. */
    'license-type'?: GtkLicenseNick | Gtk.License;
    /** A logo for the about box. */
    logo?: Gdk.Paintable | null;
    /** A named icon to use as the logo for the about box. */
    'logo-icon-name'?: string | null;
    /** The name of the program. */
    'program-name'?: string | null;
    /** Information about the system on which the program is running. */
    'system-information'?: string | null;
    /** Credits to the translators. */
    'translator-credits'?: string | null;
    /** The version of the program. */
    version?: string | null;
    /** The URL for the link to the website of the program. */
    website?: string | null;
    /** The label for the link to the website of the program. */
    'website-label'?: string | null;
    /** Whether to wrap the text in the license dialog. */
    'wrap-license'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkAboutDialogConstructOnly = GtkWindowConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkNativeConstructOnly | GtkRootConstructOnly | GtkShortcutManagerConstructOnly;

/** An interface for describing UI elements for Assistive Technologies. */
export interface GtkAccessibleProps {
    /** The accessible role of the given `GtkAccessible` implementation. */
    'accessible-role'?: GtkAccessibleRoleNick | Gtk.AccessibleRole;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkAccessibleConstructOnly = never;

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
    /** Controls whether the action bar shows its contents. */
    revealed?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkActionBarConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** Provides a way to associate widgets with actions. */
export interface GtkActionableProps extends GtkWidgetProps {
    /** The name of the action with which this widget should be associated. */
    'action-name'?: string | null;
    /** The target value of the actionable widget's action. */
    'action-target'?: GLib.Variant;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkActionableConstructOnly = GtkWidgetConstructOnly;

/** `GtkAppChooser` is an interface for widgets which allow the user to choose an application. */
export interface GtkAppChooserProps extends GtkWidgetProps {
    /** The content type of the `GtkAppChooser` object. */
    'content-type'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkAppChooserConstructOnly = GtkWidgetConstructOnly | 'content-type';

/** The `GtkAppChooserButton` lets the user select an application. */
export interface GtkAppChooserButtonProps extends GtkWidgetProps, GtkAccessibleProps, GtkAppChooserProps, GtkBuildableProps, GtkConstraintTargetProps {
    /** The text to show at the top of the dialog that can be opened from the button. */
    heading?: string | null;
    /** Whether the app chooser dialog should be modal. */
    modal?: boolean;
    /** Determines whether the dropdown menu shows the default application on top for the provided content type. */
    'show-default-item'?: boolean;
    /** Determines whether the dropdown menu shows an item to open a `GtkAppChooserDialog`. */
    'show-dialog-item'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkAppChooserButtonConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkAppChooserConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** `GtkAppChooserDialog` shows a `GtkAppChooserWidget` inside a `GtkDialog`. */
export interface GtkAppChooserDialogProps extends GtkDialogProps, GtkAccessibleProps, GtkAppChooserProps, GtkBuildableProps, GtkConstraintTargetProps, GtkNativeProps, GtkRootProps, GtkShortcutManagerProps {
    /** The GFile used by the `GtkAppChooserDialog`. */
    gfile?: Gio.File;
    /** The text to show at the top of the dialog. */
    heading?: string | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkAppChooserDialogConstructOnly = GtkDialogConstructOnly | GtkAccessibleConstructOnly | GtkAppChooserConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkNativeConstructOnly | GtkRootConstructOnly | GtkShortcutManagerConstructOnly | 'gfile';

/** `GtkAppChooserWidget` is a widget for selecting applications. */
export interface GtkAppChooserWidgetProps extends GtkWidgetProps, GtkAccessibleProps, GtkAppChooserProps, GtkBuildableProps, GtkConstraintTargetProps {
    /** The text that appears in the widget when there are no applications for the given content type. */
    'default-text'?: string | null;
    /** If %TRUE, the app chooser presents all applications in a single list, without subsections for default, recommended or related applications. */
    'show-all'?: boolean;
    /** Determines whether the app chooser should show the default handler for the content type in a separate section. */
    'show-default'?: boolean;
    /** Determines whether the app chooser should show a section for fallback applications. */
    'show-fallback'?: boolean;
    /** Determines whether the app chooser should show a section for other applications. */
    'show-other'?: boolean;
    /** Determines whether the app chooser should show a section for recommended applications. */
    'show-recommended'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkAppChooserWidgetConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkAppChooserConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** A `GtkWindow` subclass that integrates with `GtkApplication`. */
export interface GtkApplicationWindowProps extends GtkWindowProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkNativeProps, GtkRootProps, GtkShortcutManagerProps {
    /** If this property is true, the window will display a menubar unless it is shown by the desktop shell. */
    'show-menubar'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkApplicationWindowConstructOnly = GtkWindowConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkNativeConstructOnly | GtkRootConstructOnly | GtkShortcutManagerConstructOnly;

/** Preserves the aspect ratio of its child. */
export interface GtkAspectFrameProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /** The child widget. */
    child?: Gtk.Widget | null;
    /** Whether the `GtkAspectFrame` should use the aspect ratio of its child. */
    'obey-child'?: boolean;
    /** The aspect ratio to be used by the `GtkAspectFrame`. */
    ratio?: number;
    /** The horizontal alignment of the child. */
    xalign?: number;
    /** The vertical alignment of the child. */
    yalign?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkAspectFrameConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** `GtkAssistant` is used to represent a complex as a series of steps. */
export interface GtkAssistantProps extends GtkWindowProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkNativeProps, GtkRootProps, GtkShortcutManagerProps {
    /** %TRUE if the assistant uses a `GtkHeaderBar` for action buttons instead of the action-area. */
    'use-header-bar'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkAssistantConstructOnly = GtkWindowConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkNativeConstructOnly | GtkRootConstructOnly | GtkShortcutManagerConstructOnly | 'use-header-bar';

/** Arranges child widgets into a single row or column. */
export interface GtkBoxProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkOrientableProps {
    /**
     * The position of the child that determines the baseline.
     * @since 4.12
     */
    'baseline-child'?: number;
    /** How to position baseline-aligned widgets if extra space is available. */
    'baseline-position'?: GtkBaselinePositionNick | Gtk.BaselinePosition;
    /** Whether the children should all be the same size. */
    homogeneous?: boolean;
    /** The amount of space between children. */
    spacing?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkBoxConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkOrientableConstructOnly;

/** Allows objects to extend and customize deserialization from ui files. */
export interface GtkBuildableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkBuildableConstructOnly = never;

/** Calls a callback function when the button is clicked. */
export interface GtkButtonProps extends GtkWidgetProps, GtkAccessibleProps, GtkActionableProps, GtkBuildableProps, GtkConstraintTargetProps {
    /**
     * Whether the size of the button can be made smaller than the natural size of its contents.
     * @since 4.12
     */
    'can-shrink'?: boolean;
    /** The child widget. */
    child?: Gtk.Widget | null;
    /** Whether the button has a frame. */
    'has-frame'?: boolean;
    /** The name of the icon used to automatically populate the button. */
    'icon-name'?: string | null;
    /** Text of the label inside the button, if the button contains a label widget. */
    label?: string | null;
    /** If set, an underline in the text indicates that the following character is to be used as mnemonic. */
    'use-underline'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkButtonConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkActionableConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** Displays a Gregorian calendar, one month at a time. */
export interface GtkCalendarProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /** The selected date. */
    date?: GLib.DateTime;
    /** The selected day (as a number between 1 and 31). */
    day?: number;
    /** The selected month (as a number between 0 and 11). */
    month?: number;
    /** Determines whether day names are displayed. */
    'show-day-names'?: boolean;
    /** Determines whether a heading is displayed. */
    'show-heading'?: boolean;
    /** Determines whether week numbers are displayed. */
    'show-week-numbers'?: boolean;
    /** The selected year. */
    year?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkCalendarConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** Interface for widgets that can be used for editing cells The `GtkCellEditable` interface must be implemented for widgets to be usable to edit the contents of a `GtkTreeView` cell. */
export interface GtkCellEditableProps extends GtkWidgetProps {
    /** Indicates whether editing on the cell has been canceled. */
    'editing-canceled'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkCellEditableConstructOnly = GtkWidgetConstructOnly;

/** An interface for packing cells `GtkCellLayout` is an interface to be implemented by all objects which want to provide a `GtkTreeViewColumn` like API for packing cells, setting attributes and data fun… */
export interface GtkCellLayoutProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkCellLayoutConstructOnly = never;

/** A widget displaying a single row of a GtkTreeModel A `GtkCellView` displays a single row of a `GtkTreeModel` using a `GtkCellArea` and `GtkCellAreaContext`. */
export interface GtkCellViewProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkCellLayoutProps, GtkConstraintTargetProps, GtkOrientableProps {
    /** The `GtkCellArea` rendering cells If no area is specified when creating the cell view with gtk_cell_view_new_with_context() a horizontally oriented `GtkCellArea`Box will be used. */
    'cell-area'?: Gtk.CellArea;
    /** The `GtkCellAreaContext` used to compute the geometry of the cell view. */
    'cell-area-context'?: Gtk.CellAreaContext;
    /** Whether all cells should be draw as sensitive for this view regardless of the actual cell properties (used to make menus with submenus appear sensitive when the items in submenus might be insensitive… */
    'draw-sensitive'?: boolean;
    /** Whether the view should request enough space to always fit the size of every row in the model (used by the combo box to ensure the combo box size doesn't change when different items are selected). */
    'fit-model'?: boolean;
    /** The model for cell view since 2.10 */
    model?: Gtk.TreeModel | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkCellViewConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkCellLayoutConstructOnly | GtkConstraintTargetConstructOnly | GtkOrientableConstructOnly | 'cell-area' | 'cell-area-context';

/** Arranges three children in a row, keeping the middle child centered as well as possible. */
export interface GtkCenterBoxProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkOrientableProps {
    /** The position of the baseline aligned widget if extra space is available. */
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

/** Places a label next to an indicator. */
export interface GtkCheckButtonProps extends GtkWidgetProps, GtkAccessibleProps, GtkActionableProps, GtkBuildableProps, GtkConstraintTargetProps {
    /** If the check button is active. */
    active?: boolean;
    /**
     * The child widget.
     * @since 4.8
     */
    child?: Gtk.Widget | null;
    /** The check button whose group this widget belongs to. */
    group?: Gtk.CheckButton;
    /** If the check button is in an “in between” state. */
    inconsistent?: boolean;
    /** Text of the label inside the check button, if it contains a label widget. */
    label?: string | null;
    /** If set, an underline in the text indicates that the following character is to be used as mnemonic. */
    'use-underline'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkCheckButtonConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkActionableConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** The `GtkColorButton` allows to open a color chooser dialog to change the color. */
export interface GtkColorButtonProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkColorChooserProps, GtkConstraintTargetProps {
    /** Whether the color chooser dialog should be modal. */
    modal?: boolean;
    /** Whether the color chooser should open in editor mode. */
    'show-editor'?: boolean;
    /** The title of the color chooser dialog */
    title?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkColorButtonConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkColorChooserConstructOnly | GtkConstraintTargetConstructOnly;

/** `GtkColorChooser` is an interface that is implemented by widgets for choosing colors. */
export interface GtkColorChooserProps {
    /** The currently selected color, as a `GdkRGBA` struct. */
    rgba?: Gdk.RGBA;
    /** Whether colors may have alpha (translucency). */
    'use-alpha'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkColorChooserConstructOnly = never;

/** A dialog for choosing a color. */
export interface GtkColorChooserDialogProps extends GtkDialogProps, GtkAccessibleProps, GtkBuildableProps, GtkColorChooserProps, GtkConstraintTargetProps, GtkNativeProps, GtkRootProps, GtkShortcutManagerProps {
    /** Whether the color chooser dialog is showing the single-color editor. */
    'show-editor'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkColorChooserDialogConstructOnly = GtkDialogConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkColorChooserConstructOnly | GtkConstraintTargetConstructOnly | GtkNativeConstructOnly | GtkRootConstructOnly | GtkShortcutManagerConstructOnly;

/** The `GtkColorChooserWidget` widget lets the user select a color. */
export interface GtkColorChooserWidgetProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkColorChooserProps, GtkConstraintTargetProps {
    /** %TRUE when the color chooser is showing the single-color editor. */
    'show-editor'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkColorChooserWidgetConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkColorChooserConstructOnly | GtkConstraintTargetConstructOnly;

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
    /** Allow rubberband selection. */
    'enable-rubberband'?: boolean;
    /**
     * Factory for creating header widgets.
     * @since 4.12
     */
    'header-factory'?: Gtk.ListItemFactory | null;
    /** Model for the items displayed. */
    model?: Gtk.SelectionModel | null;
    /** Whether columns are reorderable. */
    reorderable?: boolean;
    /**
     * The factory used for configuring rows.
     * @since 4.12
     */
    'row-factory'?: Gtk.ListItemFactory | null;
    /** Show separators between columns. */
    'show-column-separators'?: boolean;
    /** Show separators between rows. */
    'show-row-separators'?: boolean;
    /** Activate rows on single click and select them on hover. */
    'single-click-activate'?: boolean;
    /**
     * Behavior of the <kbd>Tab</kbd> key
     * @since 4.12
     */
    'tab-behavior'?: GtkListTabBehaviorNick | Gtk.ListTabBehavior;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkColumnViewConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkScrollableConstructOnly;

/** A `GtkComboBox` is a widget that allows the user to choose from a list of valid choices. */
export interface GtkComboBoxProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkCellEditableProps, GtkCellLayoutProps, GtkConstraintTargetProps {
    /** The item which is currently active. */
    active?: number;
    /** The value of the ID column of the active row. */
    'active-id'?: string | null;
    /** Whether the dropdown button is sensitive when the model is empty. */
    'button-sensitivity'?: GtkSensitivityTypeNick | Gtk.SensitivityType;
    /** The child widget. */
    child?: Gtk.Widget | null;
    /** The model column to associate with strings from the entry. */
    'entry-text-column'?: number;
    /** Whether the combo box has an entry. */
    'has-entry'?: boolean;
    /** The `has-frame` property controls whether a frame is drawn around the entry. */
    'has-frame'?: boolean;
    /** The model column that provides string IDs for the values in the model, if != -1. */
    'id-column'?: number;
    /** The model from which the combo box takes its values. */
    model?: Gtk.TreeModel | null;
    /** Whether the popup's width should be a fixed width matching the allocated width of the combo box. */
    'popup-fixed-width'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkComboBoxConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkCellEditableConstructOnly | GtkCellLayoutConstructOnly | GtkConstraintTargetConstructOnly | 'has-entry';

/** A `GtkComboBoxText` is a simple variant of `GtkComboBox` for text-only use cases. */
export interface GtkComboBoxTextProps extends GtkComboBoxProps, GtkAccessibleProps, GtkBuildableProps, GtkCellEditableProps, GtkCellLayoutProps, GtkConstraintTargetProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkComboBoxTextConstructOnly = GtkComboBoxConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkCellEditableConstructOnly | GtkCellLayoutConstructOnly | GtkConstraintTargetConstructOnly;

/** Makes it possible to use an object as source or target in a [class@Gtk.Constraint]. */
export interface GtkConstraintTargetProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkConstraintTargetConstructOnly = never;

/** Dialogs are a convenient way to prompt the user for a small amount of input. */
export interface GtkDialogProps extends GtkWindowProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkNativeProps, GtkRootProps, GtkShortcutManagerProps {
    /** %TRUE if the dialog uses a headerbar for action buttons instead of the action-area. */
    'use-header-bar'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkDialogConstructOnly = GtkWindowConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkNativeConstructOnly | GtkRootConstructOnly | GtkShortcutManagerConstructOnly | 'use-header-bar';

/** A `GtkRoot` implementation for drag icons. */
export interface GtkDragIconProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkNativeProps, GtkRootProps {
    /** The widget to display as drag icon. */
    child?: Gtk.Widget | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkDragIconConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkNativeConstructOnly | GtkRootConstructOnly;

/** Allows drawing with cairo. */
export interface GtkDrawingAreaProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /** The content height. */
    'content-height'?: number;
    /** The content width. */
    'content-width'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkDrawingAreaConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** Allows the user to choose an item from a list of options. */
export interface GtkDropDownProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /** Whether to show a search entry in the popup. */
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
     */
    'search-match-mode'?: GtkStringFilterMatchModeNick | Gtk.StringFilterMatchMode;
    /** The position of the selected item. */
    selected?: number;
    /**
     * Whether to show an arrow within the GtkDropDown widget.
     * @since 4.6
     */
    'show-arrow'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkDropDownConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** Interface for single-line text editing widgets. */
export interface GtkEditableProps extends GtkWidgetProps {
    /** Whether the entry contents can be edited. */
    editable?: boolean;
    /** If undo/redo should be enabled for the editable. */
    'enable-undo'?: boolean;
    /**
     * The widget used to intercept input for this editable
     * @since 4.24
     */
    'input-interceptor'?: Gtk.Widget | null;
    /** The desired maximum width of the entry, in characters. */
    'max-width-chars'?: number;
    /** The contents of the entry. */
    text?: string;
    /** Number of characters to leave space for in the entry. */
    'width-chars'?: number;
    /** The horizontal alignment, from 0 (left) to 1 (right). */
    xalign?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkEditableConstructOnly = GtkWidgetConstructOnly;

/** Allows users to edit the displayed text by switching to an “edit mode”. */
export interface GtkEditableLabelProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkEditableProps {
    /** This property is %TRUE while the widget is in edit mode. */
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
    /** Whether to activate the default widget when Enter is pressed. */
    'activates-default'?: boolean;
    /** A list of Pango attributes to apply to the text of the entry. */
    attributes?: Pango.AttrList | null;
    /** The buffer object which actually stores the text. */
    buffer?: Gtk.EntryBuffer;
    /** The auxiliary completion object to use with the entry. */
    completion?: Gtk.EntryCompletion | null;
    /** Whether to suggest Emoji replacements for :-delimited names like `:heart:`. */
    'enable-emoji-completion'?: boolean;
    /** A menu model whose contents will be appended to the context menu. */
    'extra-menu'?: Gio.MenuModel | null;
    /** Whether the entry should draw a frame. */
    'has-frame'?: boolean;
    /** Which IM (input method) module should be used for this entry. */
    'im-module'?: string;
    /** Additional hints that allow input methods to fine-tune their behavior. */
    'input-hints'?: number;
    /** The purpose of this text field. */
    'input-purpose'?: GtkInputPurposeNick | Gtk.InputPurpose;
    /** The character to use when masking entry contents (“password mode”). */
    'invisible-char'?: number;
    /** Whether the invisible char has been set for the `GtkEntry`. */
    'invisible-char-set'?: boolean;
    /** Maximum number of characters for this entry. */
    'max-length'?: number;
    /**
     * Text for an item in the context menu to activate the primary icon action.
     * @since 4.20
     */
    'menu-entry-icon-primary-text'?: string;
    /**
     * Text for an item in the context menu to activate the secondary icon action.
     * @since 4.20
     */
    'menu-entry-icon-secondary-text'?: string;
    /** If text is overwritten when typing in the `GtkEntry`. */
    'overwrite-mode'?: boolean;
    /** The text that will be displayed in the `GtkEntry` when it is empty and unfocused. */
    'placeholder-text'?: string | null;
    /** Whether the primary icon is activatable. */
    'primary-icon-activatable'?: boolean;
    /** The `GIcon` to use for the primary icon for the entry. */
    'primary-icon-gicon'?: Gio.Icon;
    /** The icon name to use for the primary icon for the entry. */
    'primary-icon-name'?: string;
    /** A `GdkPaintable` to use as the primary icon for the entry. */
    'primary-icon-paintable'?: Gdk.Paintable;
    /** Whether the primary icon is sensitive. */
    'primary-icon-sensitive'?: boolean;
    /** The contents of the tooltip on the primary icon, with markup. */
    'primary-icon-tooltip-markup'?: string;
    /** The contents of the tooltip on the primary icon. */
    'primary-icon-tooltip-text'?: string;
    /** The current fraction of the task that's been completed. */
    'progress-fraction'?: number;
    /** The fraction of total entry width to move the progress bouncing block for each pulse. */
    'progress-pulse-step'?: number;
    /** Whether the secondary icon is activatable. */
    'secondary-icon-activatable'?: boolean;
    /** The `GIcon` to use for the secondary icon for the entry. */
    'secondary-icon-gicon'?: Gio.Icon;
    /** The icon name to use for the secondary icon for the entry. */
    'secondary-icon-name'?: string;
    /** A `GdkPaintable` to use as the secondary icon for the entry. */
    'secondary-icon-paintable'?: Gdk.Paintable;
    /** Whether the secondary icon is sensitive. */
    'secondary-icon-sensitive'?: boolean;
    /** The contents of the tooltip on the secondary icon, with markup. */
    'secondary-icon-tooltip-markup'?: string;
    /** The contents of the tooltip on the secondary icon. */
    'secondary-icon-tooltip-text'?: string;
    /** Whether the entry will show an Emoji icon in the secondary icon position to open the Emoji chooser. */
    'show-emoji-icon'?: boolean;
    /** A list of tabstops to apply to the text of the entry. */
    tabs?: Pango.TabArray | null;
    /** When %TRUE, pasted multi-line text is truncated to the first line. */
    'truncate-multiline'?: boolean;
    /** Whether the entry should show the “invisible char” instead of the actual text (“password mode”). */
    visibility?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkEntryConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkCellEditableConstructOnly | GtkConstraintTargetConstructOnly | GtkEditableConstructOnly;

/** Allows the user to reveal or conceal a child widget. */
export interface GtkExpanderProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /** The child widget. */
    child?: Gtk.Widget | null;
    /** Whether the expander has been opened to reveal the child. */
    expanded?: boolean;
    /** The text of the expanders label. */
    label?: string | null;
    /** A widget to display instead of the usual expander label. */
    'label-widget'?: Gtk.Widget | null;
    /** When this property is %TRUE, the expander will resize the toplevel widget containing the expander upon expanding and collapsing. */
    'resize-toplevel'?: boolean;
    /** Whether the text in the label is Pango markup. */
    'use-markup'?: boolean;
    /** Whether an underline in the text indicates a mnemonic. */
    'use-underline'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkExpanderConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** `GtkFileChooser` is an interface that can be implemented by file selection widgets. */
export interface GtkFileChooserProps {
    /** The type of operation that the file chooser is performing. */
    action?: GtkFileChooserActionNick | Gtk.FileChooserAction;
    /** Whether a file chooser not in %GTK_FILE_CHOOSER_ACTION_OPEN mode will offer the user to create new folders. */
    'create-folders'?: boolean;
    /** The current filter for selecting files that are displayed. */
    filter?: Gtk.FileFilter | null;
    /** Whether to allow multiple files to be selected. */
    'select-multiple'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkFileChooserConstructOnly = never;

/** `GtkFileChooserDialog` is a dialog suitable for use with “File Open” or “File Save” commands. */
export interface GtkFileChooserDialogProps extends GtkDialogProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkFileChooserProps, GtkNativeProps, GtkRootProps, GtkShortcutManagerProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkFileChooserDialogConstructOnly = GtkDialogConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkFileChooserConstructOnly | GtkNativeConstructOnly | GtkRootConstructOnly | GtkShortcutManagerConstructOnly;

/** `GtkFileChooserWidget` is a widget for choosing files. */
export interface GtkFileChooserWidgetProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkFileChooserProps {
    /** Whether search mode is enabled. */
    'search-mode'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkFileChooserWidgetConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkFileChooserConstructOnly;

/** Places its child widgets at fixed positions and with fixed sizes. */
export interface GtkFixedProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkFixedConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** Puts child widgets in a reflowing grid. */
export interface GtkFlowBoxProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkOrientableProps {
    /** Whether to accept unpaired release events. */
    'accept-unpaired-release'?: boolean;
    /** Determines whether children can be activated with a single click, or require a double-click. */
    'activate-on-single-click'?: boolean;
    /** The amount of horizontal space between two children. */
    'column-spacing'?: number;
    /** Determines whether all children should be allocated the same size. */
    homogeneous?: boolean;
    /** The maximum amount of children to request space for consecutively in the given orientation. */
    'max-children-per-line'?: number;
    /** The minimum number of children to allocate consecutively in the given orientation. */
    'min-children-per-line'?: number;
    /** The amount of vertical space between two children. */
    'row-spacing'?: number;
    /** The selection mode used by the flow box. */
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
    /** Whether the font chooser dialog should be modal. */
    modal?: boolean;
    /** The title of the font chooser dialog. */
    title?: string;
    /** Whether the buttons label will be drawn in the selected font. */
    'use-font'?: boolean;
    /** Whether the buttons label will use the selected font size. */
    'use-size'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkFontButtonConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkFontChooserConstructOnly;

/** `GtkFontChooser` is an interface that can be implemented by widgets for choosing fonts. */
export interface GtkFontChooserProps {
    /** The font description as a string, e.g. */
    font?: string | null;
    /** The font description as a `PangoFontDescription`. */
    'font-desc'?: Pango.FontDescription | null;
    /** The language for which the font features were selected. */
    language?: string;
    /** The level of granularity to offer for selecting fonts. */
    level?: number;
    /** The string with which to preview the font. */
    'preview-text'?: string;
    /** Whether to show an entry to change the preview text. */
    'show-preview-entry'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkFontChooserConstructOnly = never;

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
     */
    'font-features'?: string | null;
    /**
     * The selected language for font features.
     * @since 4.10
     */
    language?: Pango.Language | null;
    /** The level of detail for the font chooser dialog. */
    level?: GtkFontLevelNick | Gtk.FontLevel;
    /** Whether the buttons label will be drawn in the selected font. */
    'use-font'?: boolean;
    /** Whether the buttons label will use the selected font size. */
    'use-size'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkFontDialogButtonConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** Surrounds its child with a decorative frame and an optional label. */
export interface GtkFrameProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /** The child widget. */
    child?: Gtk.Widget | null;
    /** Text of the frame's label. */
    label?: string | null;
    /** Widget to display in place of the usual frame label. */
    'label-widget'?: Gtk.Widget | null;
    /** The horizontal alignment of the label. */
    'label-xalign'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkFrameConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** Allows drawing with OpenGL. */
export interface GtkGLAreaProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /**
     * The allowed APIs.
     * @since 4.12
     */
    'allowed-apis'?: number;
    /** If set to %TRUE the ::render signal will be emitted every time the widget draws. */
    'auto-render'?: boolean;
    /** If set to %TRUE the widget will allocate and enable a depth buffer for the target framebuffer. */
    'has-depth-buffer'?: boolean;
    /** If set to %TRUE the widget will allocate and enable a stencil buffer for the target framebuffer. */
    'has-stencil-buffer'?: boolean;
    /** If set to %TRUE the widget will try to create a `GdkGLContext` using OpenGL ES instead of OpenGL. */
    'use-es'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkGLAreaConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** Bypasses gsk rendering by passing the content of its child directly to the compositor. */
export interface GtkGraphicsOffloadProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /**
     * Whether to draw a black background.
     * @since 4.16
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
     */
    enabled?: GtkGraphicsOffloadEnabledNick | Gtk.GraphicsOffloadEnabled;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkGraphicsOffloadConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** Arranges its child widgets in rows and columns. */
export interface GtkGridProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkOrientableProps {
    /** The row to align to the baseline when valign is using baseline alignment. */
    'baseline-row'?: number;
    /** If %TRUE, the columns are all the same width. */
    'column-homogeneous'?: boolean;
    /** The amount of space between two consecutive columns. */
    'column-spacing'?: number;
    /** If %TRUE, the rows are all the same height. */
    'row-homogeneous'?: boolean;
    /** The amount of space between two consecutive rows. */
    'row-spacing'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkGridConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkOrientableConstructOnly;

/** Presents a large dynamic grid of items. */
export interface GtkGridViewProps extends GtkListBaseProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkOrientableProps, GtkScrollableProps {
    /** Allow rubberband selection. */
    'enable-rubberband'?: boolean;
    /** Factory for populating list items. */
    factory?: Gtk.ListItemFactory | null;
    /** Maximum number of columns per row. */
    'max-columns'?: number;
    /** Minimum number of columns per row. */
    'min-columns'?: number;
    /** Model for the items displayed. */
    model?: Gtk.SelectionModel | null;
    /** Activate rows on single click and select them on hover. */
    'single-click-activate'?: boolean;
    /**
     * Behavior of the <kbd>Tab</kbd> key
     * @since 4.12
     */
    'tab-behavior'?: GtkListTabBehaviorNick | Gtk.ListTabBehavior;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkGridViewConstructOnly = GtkListBaseConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkOrientableConstructOnly | GtkScrollableConstructOnly;

/** Creates a custom titlebar for a window. */
export interface GtkHeaderBarProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /** The decoration layout for buttons. */
    'decoration-layout'?: string | null;
    /** Whether to show title buttons like close, minimize, maximize. */
    'show-title-buttons'?: boolean;
    /** The title widget to display. */
    'title-widget'?: Gtk.Widget | null;
    /**
     * Whether to show platform native close/minimize/maximize buttons.
     * @since 4.18
     */
    'use-native-controls'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkHeaderBarConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** `GtkIconView` is a widget which displays data in a grid of icons. */
export interface GtkIconViewProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkCellLayoutProps, GtkConstraintTargetProps, GtkScrollableProps {
    /** The activate-on-single-click property specifies whether the "item-activated" signal will be emitted after a single click. */
    'activate-on-single-click'?: boolean;
    /** The `GtkCellArea` used to layout cell renderers for this view. */
    'cell-area'?: Gtk.CellArea;
    /** The column-spacing property specifies the space which is inserted between the columns of the icon view. */
    'column-spacing'?: number;
    /** The columns property contains the number of the columns in which the items should be displayed. */
    columns?: number;
    /** The item-orientation property specifies how the cells (i.e. */
    'item-orientation'?: GtkOrientationNick | Gtk.Orientation;
    /** The item-padding property specifies the padding around each of the icon view's item. */
    'item-padding'?: number;
    /** The item-width property specifies the width to use for each item. */
    'item-width'?: number;
    /** The margin property specifies the space which is inserted at the edges of the icon view. */
    margin?: number;
    /** The ::markup-column property contains the number of the model column containing markup information to be displayed. */
    'markup-column'?: number;
    /** The model of the icon view. */
    model?: Gtk.TreeModel | null;
    /** The ::pixbuf-column property contains the number of the model column containing the pixbufs which are displayed. */
    'pixbuf-column'?: number;
    /** The reorderable property specifies if the items can be reordered by DND. */
    reorderable?: boolean;
    /** The row-spacing property specifies the space which is inserted between the rows of the icon view. */
    'row-spacing'?: number;
    /** The ::selection-mode property specifies the selection mode of icon view. */
    'selection-mode'?: GtkSelectionModeNick | Gtk.SelectionMode;
    /** The spacing property specifies the space which is inserted between the cells (i.e. */
    spacing?: number;
    /** The ::text-column property contains the number of the model column containing the texts which are displayed. */
    'text-column'?: number;
    /** The column of the icon view model which is being used for displaying tooltips on it's rows. */
    'tooltip-column'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkIconViewConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkCellLayoutConstructOnly | GtkConstraintTargetConstructOnly | GtkScrollableConstructOnly | 'cell-area';

/** Displays an image. */
export interface GtkImageProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /** A path to the file to display. */
    file?: string;
    /** The `GIcon` displayed in the GtkImage. */
    gicon?: Gio.Icon | null;
    /** The name of the icon in the icon theme. */
    'icon-name'?: string | null;
    /** The symbolic size to display icons at. */
    'icon-size'?: GtkIconSizeNick | Gtk.IconSize;
    /** The `GdkPaintable` to display. */
    paintable?: Gdk.Paintable | null;
    /** The size in pixels to display icons at. */
    'pixel-size'?: number;
    /** A path to a resource file to display. */
    resource?: string;
    /** Whether the icon displayed in the `GtkImage` will use standard icon names fallback. */
    'use-fallback'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkImageConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** `GtkInfoBar` can be used to show messages to the user without a dialog. */
export interface GtkInfoBarProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /** The type of the message. */
    'message-type'?: GtkMessageTypeNick | Gtk.MessageType;
    /** Whether the info bar shows its contents. */
    revealed?: boolean;
    /** Whether to include a standard close button. */
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
     */
    markup?: string;
    /**
     * The number of characters that should fit into the inscription at minimum.
     * @since 4.8
     */
    'min-chars'?: number;
    /**
     * The number of lines that should fit into the inscription at minimum.
     * @since 4.8
     */
    'min-lines'?: number;
    /**
     * The number of characters that should ideally fit into the inscription.
     * @since 4.8
     */
    'nat-chars'?: number;
    /**
     * The number of lines that should ideally fit into the inscription.
     * @since 4.8
     */
    'nat-lines'?: number;
    /**
     * The displayed text.
     * @since 4.8
     */
    text?: string | null;
    /**
     * The overflow method to use for the text.
     * @since 4.8
     */
    'text-overflow'?: GtkInscriptionOverflowNick | Gtk.InscriptionOverflow;
    /**
     * Controls how the line wrapping is done.
     * @since 4.8
     */
    'wrap-mode'?: PangoWrapModeNick | Pango.WrapMode;
    /**
     * The horizontal alignment of the text inside the allocated size.
     * @since 4.8
     */
    xalign?: number;
    /**
     * The vertical alignment of the text inside the allocated size.
     * @since 4.8
     */
    yalign?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkInscriptionConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkAccessibleTextConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** Displays a small amount of text. */
export interface GtkLabelProps extends GtkWidgetProps, GtkAccessibleProps, GtkAccessibleHypertextProps, GtkAccessibleTextProps, GtkBuildableProps, GtkConstraintTargetProps {
    /** A list of style attributes to apply to the text of the label. */
    attributes?: Pango.AttrList | null;
    /** The preferred place to ellipsize the string, if the label does not have enough room to display the entire string. */
    ellipsize?: PangoEllipsizeModeNick | Pango.EllipsizeMode;
    /** A menu model whose contents will be appended to the context menu. */
    'extra-menu'?: Gio.MenuModel | null;
    /** The alignment of the lines in the text of the label, relative to each other. */
    justify?: GtkJustificationNick | Gtk.Justification;
    /** The contents of the label. */
    label?: string;
    /** The number of lines to which an ellipsized, wrapping label should display before it gets ellipsized. */
    lines?: number;
    /** The desired maximum width of the label, in characters. */
    'max-width-chars'?: number;
    /** The widget to be activated when the labels mnemonic key is pressed. */
    'mnemonic-widget'?: Gtk.Widget | null;
    /**
     * Select the line wrapping for the natural size request.
     * @since 4.6
     */
    'natural-wrap-mode'?: GtkNaturalWrapModeNick | Gtk.NaturalWrapMode;
    /** Whether the label text can be selected with the mouse. */
    selectable?: boolean;
    /** Whether the label is in single line mode. */
    'single-line-mode'?: boolean;
    /**
     * Custom tabs for this label.
     * @since 4.8
     */
    tabs?: Pango.TabArray | null;
    /** True if the text of the label includes Pango markup. */
    'use-markup'?: boolean;
    /** True if the text of the label indicates a mnemonic with an `_` before the mnemonic character. */
    'use-underline'?: boolean;
    /** The desired width of the label, in characters. */
    'width-chars'?: number;
    /** True if the label text will wrap if it gets too wide. */
    wrap?: boolean;
    /** Controls how the line wrapping is done. */
    'wrap-mode'?: PangoWrapModeNick | Pango.WrapMode;
    /** The horizontal alignment of the label text inside its size allocation. */
    xalign?: number;
    /** The vertical alignment of the label text inside its size allocation. */
    yalign?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkLabelConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkAccessibleHypertextConstructOnly | GtkAccessibleTextConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** Shows a level indicator. */
export interface GtkLevelBarProps extends GtkWidgetProps, GtkAccessibleProps, GtkAccessibleRangeProps, GtkBuildableProps, GtkConstraintTargetProps, GtkOrientableProps {
    /** Whether the `GtkLeveBar` is inverted. */
    inverted?: boolean;
    /** Determines the maximum value of the interval that can be displayed by the bar. */
    'max-value'?: number;
    /** Determines the minimum value of the interval that can be displayed by the bar. */
    'min-value'?: number;
    /** Determines the way `GtkLevelBar` interprets the value properties to draw the level fill area. */
    mode?: GtkLevelBarModeNick | Gtk.LevelBarMode;
    /** Determines the currently filled value of the level bar. */
    value?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkLevelBarConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkAccessibleRangeConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkOrientableConstructOnly;

/** A button with a hyperlink. */
export interface GtkLinkButtonProps extends GtkButtonProps, GtkAccessibleProps, GtkActionableProps, GtkBuildableProps, GtkConstraintTargetProps {
    /** The URI bound to this button. */
    uri?: string;
    /** The 'visited' state of this button. */
    visited?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkLinkButtonConstructOnly = GtkButtonConstructOnly | GtkAccessibleConstructOnly | GtkActionableConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** The abstract base class for GTK's list widgets. */
export interface GtkListBaseProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkOrientableProps, GtkScrollableProps {
    /** The orientation of the list. */
    orientation?: GtkOrientationNick | Gtk.Orientation;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkListBaseConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkOrientableConstructOnly | GtkScrollableConstructOnly;

/** Shows a vertical list. */
export interface GtkListBoxProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /** Whether to accept unpaired release events. */
    'accept-unpaired-release'?: boolean;
    /** Determines whether children can be activated with a single click, or require a double-click. */
    'activate-on-single-click'?: boolean;
    /** The selection mode used by the list box. */
    'selection-mode'?: GtkSelectionModeNick | Gtk.SelectionMode;
    /** Whether to show separators between rows. */
    'show-separators'?: boolean;
    /**
     * Behavior of the <kbd>Tab</kbd> key
     * @since 4.18
     */
    'tab-behavior'?: GtkListTabBehaviorNick | Gtk.ListTabBehavior;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkListBoxConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** The kind of widget that can be added to a `GtkListBox`. */
export interface GtkListBoxRowProps extends GtkWidgetProps, GtkAccessibleProps, GtkActionableProps, GtkBuildableProps, GtkConstraintTargetProps {
    /** Determines whether the ::row-activated signal will be emitted for this row. */
    activatable?: boolean;
    /** The child widget. */
    child?: Gtk.Widget | null;
    /** Determines whether this row can be selected. */
    selectable?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkListBoxRowConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkActionableConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** Presents a large dynamic list of items. */
export interface GtkListViewProps extends GtkListBaseProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkOrientableProps, GtkScrollableProps {
    /** Allow rubberband selection. */
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
    /** Show separators between rows. */
    'show-separators'?: boolean;
    /** Activate rows on single click and select them on hover. */
    'single-click-activate'?: boolean;
    /**
     * Behavior of the <kbd>Tab</kbd> key
     * @since 4.12
     */
    'tab-behavior'?: GtkListTabBehaviorNick | Gtk.ListTabBehavior;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkListViewConstructOnly = GtkListBaseConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkOrientableConstructOnly | GtkScrollableConstructOnly;

/** `GtkLockButton` is a widget to obtain and revoke authorizations needed to operate the controls. */
export interface GtkLockButtonProps extends GtkButtonProps, GtkAccessibleProps, GtkActionableProps, GtkBuildableProps, GtkConstraintTargetProps {
    /** The `GPermission object controlling this button. */
    permission?: Gio.Permission | null;
    /** The text to display when prompting the user to lock. */
    'text-lock'?: string;
    /** The text to display when prompting the user to unlock. */
    'text-unlock'?: string;
    /** The tooltip to display when prompting the user to lock. */
    'tooltip-lock'?: string;
    /** The tooltip to display when the user cannot obtain authorization. */
    'tooltip-not-authorized'?: string;
    /** The tooltip to display when prompting the user to unlock. */
    'tooltip-unlock'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkLockButtonConstructOnly = GtkButtonConstructOnly | GtkAccessibleConstructOnly | GtkActionableConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

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
     */
    active?: boolean;
    /**
     * Whether to show a dropdown arrow even when using an icon or a custom child.
     * @since 4.4
     */
    'always-show-arrow'?: boolean;
    /**
     * Whether the size of the button can be made smaller than the natural size of its contents.
     * @since 4.12
     */
    'can-shrink'?: boolean;
    /**
     * The child widget.
     * @since 4.6
     */
    child?: Gtk.Widget | null;
    /** The `GtkArrowType` representing the direction in which the menu or popover will be popped out. */
    direction?: GtkArrowTypeNick | Gtk.ArrowType;
    /** Whether the button has a frame. */
    'has-frame'?: boolean;
    /** The name of the icon used to automatically populate the button. */
    'icon-name'?: string | null;
    /** The label for the button. */
    label?: string | null;
    /** The `GMenuModel` from which the popup will be created. */
    'menu-model'?: Gio.MenuModel | null;
    /** The `GtkPopover` that will be popped up when the button is clicked. */
    popover?: Gtk.Popover | null;
    /**
     * Whether the menu button acts as a primary menu.
     * @since 4.4
     */
    primary?: boolean;
    /** If set an underscore in the text indicates a mnemonic. */
    'use-underline'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkMenuButtonConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** `GtkMessageDialog` presents a dialog with some message text. */
export interface GtkMessageDialogProps extends GtkDialogProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkNativeProps, GtkRootProps, GtkShortcutManagerProps {
    /** Set of buttons to display on the dialog. */
    buttons?: GtkButtonsTypeNick | Gtk.ButtonsType;
    /** The type of the message. */
    'message-type'?: GtkMessageTypeNick | Gtk.MessageType;
    /** The secondary text of the message dialog. */
    'secondary-text'?: string;
    /** %TRUE if the secondary text of the dialog includes Pango markup. */
    'secondary-use-markup'?: boolean;
    /** The primary text of the message dialog. */
    text?: string;
    /** %TRUE if the primary text of the dialog includes Pango markup. */
    'use-markup'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkMessageDialogConstructOnly = GtkDialogConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkNativeConstructOnly | GtkRootConstructOnly | GtkShortcutManagerConstructOnly | 'buttons';

/** An interface for widgets that have their own [class@Gdk.Surface]. */
export interface GtkNativeProps extends GtkWidgetProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkNativeConstructOnly = GtkWidgetConstructOnly;

/** Switches between children using tabs. */
export interface GtkNotebookProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /** If %TRUE, pressing the right mouse button on the notebook shows a page switching menu. */
    'enable-popup'?: boolean;
    /** Group name for tab drag and drop. */
    'group-name'?: string | null;
    /** The index of the current page. */
    page?: number;
    /** If %TRUE, scroll arrows are added if there are too many pages to fit. */
    scrollable?: boolean;
    /** Whether the border should be shown. */
    'show-border'?: boolean;
    /** Whether tabs should be shown. */
    'show-tabs'?: boolean;
    /** Which side of the notebook holds the tabs. */
    'tab-pos'?: GtkPositionTypeNick | Gtk.PositionType;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkNotebookConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** An interface for widgets that can be oriented horizontally or vertically. */
export interface GtkOrientableProps {
    /** The orientation of the orientable. */
    orientation?: GtkOrientationNick | Gtk.Orientation;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkOrientableConstructOnly = never;

/** Places “overlay” widgets on top of a single main child. */
export interface GtkOverlayProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /** The main child widget. */
    child?: Gtk.Widget | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkOverlayConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** Presents a page setup dialog for platforms which don’t provide a native page setup dialog, like Unix. */
export interface GtkPageSetupUnixDialogProps extends GtkDialogProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkNativeProps, GtkRootProps, GtkShortcutManagerProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkPageSetupUnixDialogConstructOnly = GtkDialogConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkNativeConstructOnly | GtkRootConstructOnly | GtkShortcutManagerConstructOnly;

/** Arranges its children in two panes, horizontally or vertically. */
export interface GtkPanedProps extends GtkWidgetProps, GtkAccessibleProps, GtkAccessibleRangeProps, GtkBuildableProps, GtkConstraintTargetProps, GtkOrientableProps {
    /** The second child. */
    'end-child'?: Gtk.Widget | null;
    /** Position of the separator in pixels, from the left/top. */
    position?: number;
    /** Whether the [property@Gtk.Paned:position] property has been set. */
    'position-set'?: boolean;
    /** Determines whether the second child expands and shrinks along with the paned widget. */
    'resize-end-child'?: boolean;
    /** Determines whether the first child expands and shrinks along with the paned widget. */
    'resize-start-child'?: boolean;
    /** Determines whether the second child can be made smaller than its requisition. */
    'shrink-end-child'?: boolean;
    /** Determines whether the first child can be made smaller than its requisition. */
    'shrink-start-child'?: boolean;
    /** The first child. */
    'start-child'?: Gtk.Widget | null;
    /** Whether the `GtkPaned` should provide a stronger visual separation. */
    'wide-handle'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkPanedConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkAccessibleRangeConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkOrientableConstructOnly;

/** A single-line text entry widget for entering passwords and other secrets. */
export interface GtkPasswordEntryProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkEditableProps {
    /** Whether to activate the default widget when Enter is pressed. */
    'activates-default'?: boolean;
    /** A menu model whose contents will be appended to the context menu. */
    'extra-menu'?: Gio.MenuModel | null;
    /** The text that will be displayed in the `GtkPasswordEntry` when it is empty and unfocused. */
    'placeholder-text'?: string;
    /** Whether to show an icon for revealing the content. */
    'show-peek-icon'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkPasswordEntryConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkEditableConstructOnly;

/** Displays a `GdkPaintable`. */
export interface GtkPictureProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /** The alternative textual description for the picture. */
    'alternative-text'?: string | null;
    /** If the `GtkPicture` can be made smaller than the natural size of its contents. */
    'can-shrink'?: boolean;
    /**
     * How the content should be resized to fit inside the `GtkPicture`.
     * @since 4.8
     */
    'content-fit'?: GtkContentFitNick | Gtk.ContentFit;
    /** The `GFile` that is displayed or %NULL if none. */
    file?: Gio.File | null;
    /**
     * If the rendering of the contents is isolated from the rest of the widget tree.
     * @since 4.22
     */
    'isolate-contents'?: boolean;
    /** Whether the GtkPicture will render its contents trying to preserve the aspect ratio. */
    'keep-aspect-ratio'?: boolean;
    /** The `GdkPaintable` to be displayed by this `GtkPicture`. */
    paintable?: Gdk.Paintable | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkPictureConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** Presents a bubble-like popup. */
export interface GtkPopoverProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkNativeProps, GtkShortcutManagerProps {
    /** Whether to dismiss the popover on outside clicks. */
    autohide?: boolean;
    /** Whether the popover pops down after a child popover. */
    'cascade-popdown'?: boolean;
    /** The child widget. */
    child?: Gtk.Widget | null;
    /** The default widget inside the popover. */
    'default-widget'?: Gtk.Widget;
    /** Whether to draw an arrow. */
    'has-arrow'?: boolean;
    /** Whether mnemonics are currently visible in this popover. */
    'mnemonics-visible'?: boolean;
    /** Rectangle in the parent widget that the popover points to. */
    'pointing-to'?: Gdk.Rectangle;
    /** How to place the popover, relative to its parent. */
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
     */
    flags?: number;
    /** The model from which the menu is made. */
    'menu-model'?: Gio.MenuModel | null;
    /** The name of the visible submenu. */
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

/** A print dialog for platforms which don’t provide a native print dialog, like Unix. */
export interface GtkPrintUnixDialogProps extends GtkDialogProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkNativeProps, GtkRootProps, GtkShortcutManagerProps {
    /** The current page in the document. */
    'current-page'?: number;
    /** %TRUE if the page setup controls are embedded. */
    'embed-page-setup'?: boolean;
    /** Whether the application has a selection. */
    'has-selection'?: boolean;
    /** Capabilities the application can handle. */
    'manual-capabilities'?: number;
    /** The `GtkPageSetup` object to use. */
    'page-setup'?: Gtk.PageSetup;
    /** The `GtkPrintSettings` object used for this dialog. */
    'print-settings'?: Gtk.PrintSettings;
    /** Whether the dialog supports selection. */
    'support-selection'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkPrintUnixDialogConstructOnly = GtkDialogConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkNativeConstructOnly | GtkRootConstructOnly | GtkShortcutManagerConstructOnly;

/** Displays the progress of a long-running operation. */
export interface GtkProgressBarProps extends GtkWidgetProps, GtkAccessibleProps, GtkAccessibleRangeProps, GtkBuildableProps, GtkConstraintTargetProps, GtkOrientableProps {
    /** The preferred place to ellipsize the string. */
    ellipsize?: PangoEllipsizeModeNick | Pango.EllipsizeMode;
    /** The fraction of total work that has been completed. */
    fraction?: number;
    /** Invert the direction in which the progress bar grows. */
    inverted?: boolean;
    /** The fraction of total progress to move the bounding block when pulsed. */
    'pulse-step'?: number;
    /** Sets whether the progress bar will show a text in addition to the bar itself. */
    'show-text'?: boolean;
    /** Text to be displayed in the progress bar. */
    text?: string | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkProgressBarConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkAccessibleRangeConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkOrientableConstructOnly;

/** Base class for widgets which visualize an adjustment. */
export interface GtkRangeProps extends GtkWidgetProps, GtkAccessibleProps, GtkAccessibleRangeProps, GtkBuildableProps, GtkConstraintTargetProps, GtkOrientableProps {
    /** The adjustment that is controlled by the range. */
    adjustment?: Gtk.Adjustment;
    /** The fill level (e.g. */
    'fill-level'?: number;
    /** If %TRUE, the direction in which the slider moves is inverted. */
    inverted?: boolean;
    /** Controls whether slider movement is restricted to an upper boundary set by the fill level. */
    'restrict-to-fill-level'?: boolean;
    /** The number of digits to round the value to when it changes. */
    'round-digits'?: number;
    /** Controls whether fill level indicator graphics are displayed on the trough. */
    'show-fill-level'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkRangeConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkAccessibleRangeConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkOrientableConstructOnly;

/** Animates the transition of its child from invisible to visible. */
export interface GtkRevealerProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /** The child widget. */
    child?: Gtk.Widget | null;
    /** Whether the revealer should reveal the child. */
    'reveal-child'?: boolean;
    /** The animation duration, in milliseconds. */
    'transition-duration'?: number;
    /** The type of animation used to transition. */
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
    /** The number of decimal places that are displayed in the value. */
    digits?: number;
    /** Whether the current value is displayed as a string next to the slider. */
    'draw-value'?: boolean;
    /** Whether the scale has an origin. */
    'has-origin'?: boolean;
    /** The position in which the current value is displayed. */
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
     */
    'has-frame'?: boolean;
    /** The names of the icons to be used by the scale button. */
    icons?: string[];
    /** The value of the scale. */
    value?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkScaleButtonConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkAccessibleRangeConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkOrientableConstructOnly;

/** An interface for widgets with native scrolling ability. */
export interface GtkScrollableProps {
    /** Horizontal `GtkAdjustment` of the scrollable widget. */
    hadjustment?: Gtk.Adjustment | null;
    /** Determines when horizontal scrolling should start. */
    'hscroll-policy'?: GtkScrollablePolicyNick | Gtk.ScrollablePolicy;
    /** Vertical `GtkAdjustment` of the scrollable widget. */
    vadjustment?: Gtk.Adjustment | null;
    /** Determines when vertical scrolling should start. */
    'vscroll-policy'?: GtkScrollablePolicyNick | Gtk.ScrollablePolicy;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkScrollableConstructOnly = never;

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
    /** Whether to draw a frame around the contents. */
    'has-frame'?: boolean;
    /** When the horizontal scrollbar is displayed. */
    'hscrollbar-policy'?: GtkPolicyTypeNick | Gtk.PolicyType;
    /** Whether kinetic scrolling is enabled or not. */
    'kinetic-scrolling'?: boolean;
    /** The maximum content height of @scrolled_window. */
    'max-content-height'?: number;
    /** The maximum content width of @scrolled_window. */
    'max-content-width'?: number;
    /** The minimum content height of @scrolled_window. */
    'min-content-height'?: number;
    /** The minimum content width of @scrolled_window. */
    'min-content-width'?: number;
    /** Whether overlay scrolling is enabled or not. */
    'overlay-scrolling'?: boolean;
    /** Whether the natural height of the child should be calculated and propagated through the scrolled window’s requested natural height. */
    'propagate-natural-height'?: boolean;
    /** Whether the natural width of the child should be calculated and propagated through the scrolled window’s requested natural width. */
    'propagate-natural-width'?: boolean;
    /** The `GtkAdjustment` for the vertical position. */
    vadjustment?: Gtk.Adjustment;
    /** When the vertical scrollbar is displayed. */
    'vscrollbar-policy'?: GtkPolicyTypeNick | Gtk.PolicyType;
    /** Where the contents are located with respect to the scrollbars. */
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
    /** Whether the search mode is on and the search bar shown. */
    'search-mode-enabled'?: boolean;
    /** Whether to show the close button in the search bar. */
    'show-close-button'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSearchBarConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** A single-line text entry widget for use as a search entry. */
export interface GtkSearchEntryProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkEditableProps {
    /** Whether to activate the default widget when Enter is pressed. */
    'activates-default'?: boolean;
    /**
     * The hints about input for the `GtkSearchEntry` used to alter the behaviour of input methods.
     * @since 4.14
     */
    'input-hints'?: number;
    /**
     * The purpose for the `GtkSearchEntry` input used to alter the behaviour of input methods.
     * @since 4.14
     */
    'input-purpose'?: GtkInputPurposeNick | Gtk.InputPurpose;
    /**
     * The widget that the entry will use to capture key events.
     * @since 4.22
     */
    'key-capture-widget'?: Gtk.Widget | null;
    /** The text that will be displayed in the `GtkSearchEntry` when it is empty and unfocused. */
    'placeholder-text'?: string | null;
    /**
     * The delay in milliseconds from last keypress to the search changed signal.
     * @since 4.8
     */
    'search-delay'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSearchEntryConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkEditableConstructOnly;

/** Draws a horizontal or vertical line to separate other widgets. */
export interface GtkSeparatorProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkOrientableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSeparatorConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkOrientableConstructOnly;

/** `GtkShortcutLabel` displays a single keyboard shortcut or gesture. */
export interface GtkShortcutLabelProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /** The accelerator that @self displays. */
    accelerator?: string | null;
    /** The text that is displayed when no accelerator is set. */
    'disabled-text'?: string | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkShortcutLabelConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** An interface that is used to implement shortcut scopes. */
export interface GtkShortcutManagerProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkShortcutManagerConstructOnly = never;

/** A `GtkShortcutsGroup` represents a group of related keyboard shortcuts or gestures. */
export interface GtkShortcutsGroupProps extends GtkBoxProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkOrientableProps {
    /** The size group for the accelerator portion of shortcuts in this group. */
    'accel-size-group'?: Gtk.SizeGroup;
    /** The title for this group of shortcuts. */
    title?: string;
    /** The size group for the textual portion of shortcuts in this group. */
    'title-size-group'?: Gtk.SizeGroup;
    /** An optional view that the shortcuts in this group are relevant for. */
    view?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkShortcutsGroupConstructOnly = GtkBoxConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkOrientableConstructOnly;

/** A `GtkShortcutsSection` collects all the keyboard shortcuts and gestures for a major application mode. */
export interface GtkShortcutsSectionProps extends GtkBoxProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkOrientableProps {
    /** The maximum number of lines to allow per column. */
    'max-height'?: number;
    /** A unique name to identify this section among the sections added to the `GtkShortcutsWindow`. */
    'section-name'?: string;
    /** The string to show in the section selector of the `GtkShortcutsWindow` for this section. */
    title?: string;
    /** A view name to filter the groups in this section by. */
    'view-name'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkShortcutsSectionConstructOnly = GtkBoxConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkOrientableConstructOnly;

/** A `GtkShortcutsShortcut` represents a single keyboard shortcut or gesture with a short text. */
export interface GtkShortcutsShortcutProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /** The size group for the accelerator portion of this shortcut. */
    'accel-size-group'?: Gtk.SizeGroup;
    /** The accelerator(s) represented by this object. */
    accelerator?: string;
    /** A detailed action name. */
    'action-name'?: string;
    /** The text direction for which this shortcut is active. */
    direction?: GtkTextDirectionNick | Gtk.TextDirection;
    /** An icon to represent the shortcut or gesture. */
    icon?: Gio.Icon;
    /** %TRUE if an icon has been set. */
    'icon-set'?: boolean;
    /** The type of shortcut that is represented. */
    'shortcut-type'?: GtkShortcutTypeNick | Gtk.ShortcutType;
    /** The subtitle for the shortcut or gesture. */
    subtitle?: string;
    /** %TRUE if a subtitle has been set. */
    'subtitle-set'?: boolean;
    /** The textual description for the shortcut or gesture represented by this object. */
    title?: string;
    /** The size group for the textual portion of this shortcut. */
    'title-size-group'?: Gtk.SizeGroup;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkShortcutsShortcutConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** A `GtkShortcutsWindow` shows information about the keyboard shortcuts and gestures of an application. */
export interface GtkShortcutsWindowProps extends GtkWindowProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkNativeProps, GtkRootProps, GtkShortcutManagerProps {
    /** The name of the section to show. */
    'section-name'?: string;
    /** The view name by which to filter the contents. */
    'view-name'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkShortcutsWindowConstructOnly = GtkWindowConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkNativeConstructOnly | GtkRootConstructOnly | GtkShortcutManagerConstructOnly;

/** Allows to enter or change numeric values. */
export interface GtkSpinButtonProps extends GtkWidgetProps, GtkAccessibleProps, GtkAccessibleRangeProps, GtkBuildableProps, GtkCellEditableProps, GtkConstraintTargetProps, GtkEditableProps, GtkOrientableProps {
    /**
     * Whether to activate the default widget when the spin button is activated.
     * @since 4.14
     */
    'activates-default'?: boolean;
    /** The adjustment that holds the value of the spin button. */
    adjustment?: Gtk.Adjustment;
    /** The acceleration rate when you hold down a button or key. */
    'climb-rate'?: number;
    /** The number of decimal places to display. */
    digits?: number;
    /** Whether non-numeric characters should be ignored. */
    numeric?: boolean;
    /** Whether erroneous values are automatically changed to the spin buttons nearest step increment. */
    'snap-to-ticks'?: boolean;
    /** Whether the spin button should update always, or only when the value is acceptable. */
    'update-policy'?: GtkSpinButtonUpdatePolicyNick | Gtk.SpinButtonUpdatePolicy;
    /** The current value. */
    value?: number;
    /** Whether a spin button should wrap upon reaching its limits. */
    wrap?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSpinButtonConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkAccessibleRangeConstructOnly | GtkBuildableConstructOnly | GtkCellEditableConstructOnly | GtkConstraintTargetConstructOnly | GtkEditableConstructOnly | GtkOrientableConstructOnly;

/** Displays an icon-size spinning animation. */
export interface GtkSpinnerProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /** Whether the spinner is spinning */
    spinning?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSpinnerConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** Shows one of its children at a time. */
export interface GtkStackProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /** %TRUE if the stack allocates the same width for all children. */
    hhomogeneous?: boolean;
    /** Whether or not the size should smoothly change during the transition. */
    'interpolate-size'?: boolean;
    /** The animation duration, in milliseconds. */
    'transition-duration'?: number;
    /** The type of animation used to transition. */
    'transition-type'?: GtkStackTransitionTypeNick | Gtk.StackTransitionType;
    /** %TRUE if the stack allocates the same height for all children. */
    vhomogeneous?: boolean;
    /** The widget currently visible in the stack. */
    'visible-child'?: Gtk.Widget | null;
    /** The name of the widget currently visible in the stack. */
    'visible-child-name'?: string | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkStackConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

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

/** A widget that renders SVG, with animations and event handling. */
export interface GtkSvgWidgetProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /**
     * Resource to load SVG data from.
     * @since 4.24
     */
    resource?: string;
    /**
     * The current state of the renderer.
     * @since 4.24
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
    /** Whether the `GtkSwitch` widget is in its on or off state. */
    active?: boolean;
    /** The backend state that is controlled by the switch. */
    state?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSwitchConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkActionableConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** A single-line text entry. */
export interface GtkTextProps extends GtkWidgetProps, GtkAccessibleProps, GtkAccessibleTextProps, GtkBuildableProps, GtkConstraintTargetProps, GtkEditableProps {
    /** Whether to activate the default widget when <kbd>Enter</kbd> is pressed. */
    'activates-default'?: boolean;
    /** A list of Pango attributes to apply to the text. */
    attributes?: Pango.AttrList | null;
    /** The `GtkEntryBuffer` object which stores the text. */
    buffer?: Gtk.EntryBuffer;
    /** Whether to suggest Emoji replacements. */
    'enable-emoji-completion'?: boolean;
    /** A menu model whose contents will be appended to the context menu. */
    'extra-menu'?: Gio.MenuModel | null;
    /** Which input method module should be used. */
    'im-module'?: string;
    /** Additional hints that allow input methods to fine-tune their behaviour. */
    'input-hints'?: number;
    /** The purpose of this text field. */
    'input-purpose'?: GtkInputPurposeNick | Gtk.InputPurpose;
    /** The character to used when masking contents (in “password mode”). */
    'invisible-char'?: number;
    /** Whether the invisible char has been set. */
    'invisible-char-set'?: boolean;
    /** Maximum number of characters that are allowed. */
    'max-length'?: number;
    /** If text is overwritten when typing. */
    'overwrite-mode'?: boolean;
    /** The text that will be displayed in the `GtkText` when it is empty and unfocused. */
    'placeholder-text'?: string | null;
    /** Whether the widget should grow and shrink with the content. */
    'propagate-text-width'?: boolean;
    /** Custom tabs for this text widget. */
    tabs?: Pango.TabArray | null;
    /** When true, pasted multi-line text is truncated to the first line. */
    'truncate-multiline'?: boolean;
    /** If false, the text is masked with the “invisible char”. */
    visibility?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkTextConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkAccessibleTextConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkEditableConstructOnly;

/** Displays the contents of a [class@Gtk.TextBuffer]. */
export interface GtkTextViewProps extends GtkWidgetProps, GtkAccessibleProps, GtkAccessibleTextProps, GtkBuildableProps, GtkConstraintTargetProps, GtkScrollableProps {
    /** Whether Tab will result in a tab character being entered. */
    'accepts-tab'?: boolean;
    /** The bottom margin for text in the text view. */
    'bottom-margin'?: number;
    /** The buffer which is displayed. */
    buffer?: Gtk.TextBuffer;
    /** If the insertion cursor is shown. */
    'cursor-visible'?: boolean;
    /** Whether the text can be modified by the user. */
    editable?: boolean;
    /** A menu model whose contents will be appended to the context menu. */
    'extra-menu'?: Gio.MenuModel | null;
    /** Which IM (input method) module should be used for this text_view. */
    'im-module'?: string;
    /** Amount to indent the paragraph, in pixels. */
    indent?: number;
    /** Additional hints (beyond [property@Gtk.TextView:input-purpose]) that allow input methods to fine-tune their behaviour. */
    'input-hints'?: number;
    /** The purpose of this text field. */
    'input-purpose'?: GtkInputPurposeNick | Gtk.InputPurpose;
    /** Left, right, or center justification. */
    justification?: GtkJustificationNick | Gtk.Justification;
    /** The default left margin for text in the text view. */
    'left-margin'?: number;
    /** Whether text should be displayed in a monospace font. */
    monospace?: boolean;
    /** Whether entered text overwrites existing contents. */
    overwrite?: boolean;
    /** Pixels of blank space above paragraphs. */
    'pixels-above-lines'?: number;
    /** Pixels of blank space below paragraphs. */
    'pixels-below-lines'?: number;
    /** Pixels of blank space between wrapped lines in a paragraph. */
    'pixels-inside-wrap'?: number;
    /** The default right margin for text in the text view. */
    'right-margin'?: number;
    /** Custom tabs for this text. */
    tabs?: Pango.TabArray | null;
    /** The top margin for text in the text view. */
    'top-margin'?: number;
    /** Whether to wrap lines never, at word boundaries, or at character boundaries. */
    'wrap-mode'?: GtkWrapModeNick | Gtk.WrapMode;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkTextViewConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkAccessibleTextConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkScrollableConstructOnly;

/** Shows a button which remains “pressed-in” when clicked. */
export interface GtkToggleButtonProps extends GtkButtonProps, GtkAccessibleProps, GtkActionableProps, GtkBuildableProps, GtkConstraintTargetProps {
    /** If the toggle button should be pressed in. */
    active?: boolean;
    /** The toggle button whose group this widget belongs to. */
    group?: Gtk.ToggleButton;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkToggleButtonConstructOnly = GtkButtonConstructOnly | GtkAccessibleConstructOnly | GtkActionableConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** Provides an expander for a tree-like list. */
export interface GtkTreeExpanderProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /** The child widget with the actual contents. */
    child?: Gtk.Widget | null;
    /**
     * Whether the expander icon should be hidden in a GtkTreeListRow.
     * @since 4.10
     */
    'hide-expander'?: boolean;
    /**
     * TreeExpander indents the child according to its depth.
     * @since 4.10
     */
    'indent-for-depth'?: boolean;
    /**
     * TreeExpander indents the child by the width of an expander-icon if it is not expandable.
     * @since 4.6
     */
    'indent-for-icon'?: boolean;
    /** The list row to track for expander state. */
    'list-row'?: Gtk.TreeListRow | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkTreeExpanderConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

/** A widget for displaying both trees and lists <picture> <source srcset="list-and-tree-dark.png" media="(prefers-color-scheme: dark)"> <img alt="An example GtkTreeView" src="list-and-tree.png"> </pictu… */
export interface GtkTreeViewProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkScrollableProps {
    /** The activate-on-single-click property specifies whether the "row-activated" signal will be emitted after a single click. */
    'activate-on-single-click'?: boolean;
    'enable-grid-lines'?: GtkTreeViewGridLinesNick | Gtk.TreeViewGridLines;
    'enable-search'?: boolean;
    'enable-tree-lines'?: boolean;
    'expander-column'?: Gtk.TreeViewColumn | null;
    /** Setting the ::fixed-height-mode property to %TRUE speeds up `GtkTreeView` by assuming that all rows have the same height. */
    'fixed-height-mode'?: boolean;
    'headers-clickable'?: boolean;
    'headers-visible'?: boolean;
    /** Enables or disables the hover expansion mode of @tree_view. */
    'hover-expand'?: boolean;
    /** Enables or disables the hover selection mode of @tree_view. */
    'hover-selection'?: boolean;
    /** Extra indentation for each level. */
    'level-indentation'?: number;
    model?: Gtk.TreeModel | null;
    reorderable?: boolean;
    'rubber-banding'?: boolean;
    'search-column'?: number;
    /** %TRUE if the view has expanders. */
    'show-expanders'?: boolean;
    'tooltip-column'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkTreeViewConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkScrollableConstructOnly;

/** Shows a `GtkMediaStream` with media controls. */
export interface GtkVideoProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /** If the video should automatically begin playing. */
    autoplay?: boolean;
    /** The file played by this video if the video is playing a file. */
    file?: Gio.File | null;
    /**
     * Whether to enable graphics offload.
     * @since 4.14
     */
    'graphics-offload'?: GtkGraphicsOffloadEnabledNick | Gtk.GraphicsOffloadEnabled;
    /** If new media files should be set to loop. */
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
    /** Whether to scroll when the focus changes. */
    'scroll-to-focus'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkViewportConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkScrollableConstructOnly;

/** `GtkVolumeButton` is a `GtkScaleButton` subclass tailored for volume control. */
export interface GtkVolumeButtonProps extends GtkScaleButtonProps, GtkAccessibleProps, GtkAccessibleRangeProps, GtkBuildableProps, GtkConstraintTargetProps, GtkOrientableProps {
    /** Whether to use symbolic icons as the icons. */
    'use-symbolic'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkVolumeButtonConstructOnly = GtkScaleButtonConstructOnly | GtkAccessibleConstructOnly | GtkAccessibleRangeConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | GtkOrientableConstructOnly;

/** The base class for all widgets. */
export interface GtkWidgetProps extends GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps {
    /** Whether the widget or any of its descendents can accept the input focus. */
    'can-focus'?: boolean;
    /** Whether the widget can receive pointer events. */
    'can-target'?: boolean;
    /** A list of css classes applied to this widget. */
    'css-classes'?: string[];
    /** The name of this widget in the CSS tree. */
    'css-name'?: string;
    /** The cursor used by @widget. */
    cursor?: Gdk.Cursor | null;
    /** Whether the widget should grab focus when it is clicked with the mouse. */
    'focus-on-click'?: boolean;
    /** Whether this widget itself will accept the input focus. */
    focusable?: boolean;
    /** How to distribute horizontal space if widget gets extra space. */
    halign?: GtkAlignNick | Gtk.Align;
    /** Enables or disables the emission of the [signal@Gtk.Widget::query-tooltip] signal on @widget. */
    'has-tooltip'?: boolean;
    /** Overrides for height request of the widget. */
    'height-request'?: number;
    /** Whether to expand horizontally. */
    hexpand?: boolean;
    /** Whether to use the `hexpand` property. */
    'hexpand-set'?: boolean;
    /** The [class@Gtk.LayoutManager] instance to use to compute the preferred size of the widget, and allocate its children. */
    'layout-manager'?: Gtk.LayoutManager | null;
    /**
     * Makes this widget act like a modal dialog, with respect to event delivery.
     * @since 4.18
     */
    'limit-events'?: boolean;
    /** Margin on bottom side of widget. */
    'margin-bottom'?: number;
    /** Margin on end of widget, horizontally. */
    'margin-end'?: number;
    /** Margin on start of widget, horizontally. */
    'margin-start'?: number;
    /** Margin on top side of widget. */
    'margin-top'?: number;
    /** The name of the widget. */
    name?: string;
    /** The requested opacity of the widget. */
    opacity?: number;
    /** How content outside the widget's content area is treated. */
    overflow?: GtkOverflowNick | Gtk.Overflow;
    /** Whether the widget will receive the default action when it is focused. */
    'receives-default'?: boolean;
    /** Whether the widget responds to input. */
    sensitive?: boolean;
    /** Sets the text of tooltip to be the given string, which is marked up with Pango markup. */
    'tooltip-markup'?: string | null;
    /** Sets the text of tooltip to be the given string. */
    'tooltip-text'?: string | null;
    /** How to distribute vertical space if widget gets extra space. */
    valign?: GtkAlignNick | Gtk.Align;
    /** Whether to expand vertically. */
    vexpand?: boolean;
    /** Whether to use the `vexpand` property. */
    'vexpand-set'?: boolean;
    /** Whether the widget is visible. */
    visible?: boolean;
    /** Overrides for width request of the widget. */
    'width-request'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkWidgetConstructOnly = GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly | 'css-name';

/** A toplevel window which can contain other widgets. */
export interface GtkWindowProps extends GtkWidgetProps, GtkAccessibleProps, GtkBuildableProps, GtkConstraintTargetProps, GtkNativeProps, GtkRootProps, GtkShortcutManagerProps {
    /** The `GtkApplication` associated with the window. */
    application?: Gtk.Application | null;
    /** The child widget. */
    child?: Gtk.Widget | null;
    /** Whether the window should have a frame (also known as *decorations*). */
    decorated?: boolean;
    /** The default height of the window. */
    'default-height'?: number;
    /** The default widget. */
    'default-widget'?: Gtk.Widget | null;
    /** The default width of the window. */
    'default-width'?: number;
    /** Whether the window frame should have a close button. */
    deletable?: boolean;
    /** If this window should be destroyed when the parent is destroyed. */
    'destroy-with-parent'?: boolean;
    /** The display that will display this window. */
    display?: Gdk.Display;
    /** Whether 'focus rectangles' are currently visible in this window. */
    'focus-visible'?: boolean;
    /** The focus widget. */
    'focus-widget'?: Gtk.Widget | null;
    /** Whether the window is fullscreen. */
    fullscreened?: boolean;
    /**
     * The gravity to use when resizing the window programmatically.
     * @since 4.20
     */
    gravity?: GtkWindowGravityNick | Gtk.WindowGravity;
    /**
     * Whether the window frame should handle <kbd>F10</kbd> for activating menubars.
     * @since 4.2
     */
    'handle-menubar-accel'?: boolean;
    /** If this window should be hidden instead of destroyed when the user clicks the close button. */
    'hide-on-close'?: boolean;
    /** Specifies the name of the themed icon to use as the window icon. */
    'icon-name'?: string | null;
    /** Whether the window is maximized. */
    maximized?: boolean;
    /** Whether mnemonics are currently visible in this window. */
    'mnemonics-visible'?: boolean;
    /** If true, the window is modal. */
    modal?: boolean;
    /** If true, users can resize the window. */
    resizable?: boolean;
    /** A write-only property for setting window's startup notification identifier. */
    'startup-id'?: string;
    /** The title of the window. */
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
    /** The decoration layout for window buttons. */
    'decoration-layout'?: string | null;
    /** Whether the widget shows start or end side of the decoration layout. */
    side?: GtkPackTypeNick | Gtk.PackType;
    /**
     * Whether to show platform native close/minimize/maximize buttons.
     * @since 4.18
     */
    'use-native-controls'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkWindowControlsConstructOnly = GtkWidgetConstructOnly | GtkAccessibleConstructOnly | GtkBuildableConstructOnly | GtkConstraintTargetConstructOnly;

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
