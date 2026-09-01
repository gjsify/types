/**
 * The GIR-derived widget VOCABULARY for Gtk-3.0.
 *
 * GENERATED — do not edit. Provenance: Gtk-3.0 — library 3.24.53 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface Gio.ActionGroup Gio.ActionMap
 *
 * 130 concrete widgets, 150 declarations, 93 enum nick unions, 39 slot candidates.
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
import type Gdk from '@girs/gdk-3.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type Gio from '@girs/gio-2.0';
import type Gtk from './gtk-3.0.js';
import type Pango from '@girs/pango-1.0';
import type cairo from '@girs/cairo-1.0';

// ---------------------------------------------------------------------------
// Enum nicks — the string vocabulary GObject registered, from GIR's `glib:nick`.
//
// Not derived from the member name. Substituting underscores for dashes is not a law:
// some nicks keep an underscore the substitution would have replaced, and only the
// attribute knows which. Gtk-4.0 and Adw-1 contradict no derivation at all, which is
// how a derived nick passes review and breaks elsewhere.
// Re-measure with `scripts/check-nick-derivation.mjs` in ts-for-gir.
// ---------------------------------------------------------------------------

export type GdkGravityNick = 'north-west' | 'north' | 'north-east' | 'west' | 'center' | 'east' | 'south-west' | 'south' | 'south-east' | 'static';
export type GdkWindowTypeHintNick = 'normal' | 'dialog' | 'menu' | 'toolbar' | 'splashscreen' | 'utility' | 'dock' | 'desktop' | 'dropdown-menu' | 'popup-menu' | 'tooltip' | 'notification' | 'combo' | 'dnd';
export type GtkAlignNick = 'fill' | 'start' | 'end' | 'center' | 'baseline';
export type GtkArrowPlacementNick = 'both' | 'start' | 'end';
export type GtkArrowTypeNick = 'up' | 'down' | 'left' | 'right' | 'none';
export type GtkAssistantPageTypeNick = 'content' | 'intro' | 'confirm' | 'summary' | 'progress' | 'custom';
export type GtkBaselinePositionNick = 'top' | 'center' | 'bottom';
export type GtkBorderStyleNick = 'none' | 'solid' | 'inset' | 'outset' | 'hidden' | 'dotted' | 'dashed' | 'double' | 'groove' | 'ridge';
export type GtkButtonBoxStyleNick = 'spread' | 'edge' | 'start' | 'end' | 'center' | 'expand';
export type GtkButtonRoleNick = 'normal' | 'check' | 'radio';
export type GtkButtonsTypeNick = 'none' | 'ok' | 'close' | 'cancel' | 'yes-no' | 'ok-cancel';
export type GtkCellRendererAccelModeNick = 'gtk' | 'other';
export type GtkCellRendererModeNick = 'inert' | 'activatable' | 'editable';
export type GtkCornerTypeNick = 'top-left' | 'bottom-left' | 'top-right' | 'bottom-right';
export type GtkCssSectionTypeNick = 'document' | 'import' | 'color-definition' | 'binding-set' | 'ruleset' | 'selector' | 'declaration' | 'value' | 'keyframes';
export type GtkDeleteTypeNick = 'chars' | 'word-ends' | 'words' | 'display-lines' | 'display-line-ends' | 'paragraph-ends' | 'paragraphs' | 'whitespace';
export type GtkDirectionTypeNick = 'tab-forward' | 'tab-backward' | 'up' | 'down' | 'left' | 'right';
export type GtkDragResultNick = 'success' | 'no-target' | 'user-cancelled' | 'timeout-expired' | 'grab-broken' | 'error';
export type GtkEntryIconPositionNick = 'primary' | 'secondary';
export type GtkEventSequenceStateNick = 'none' | 'claimed' | 'denied';
export type GtkExpanderStyleNick = 'collapsed' | 'semi-collapsed' | 'semi-expanded' | 'expanded';
export type GtkFileChooserActionNick = 'open' | 'save' | 'select-folder' | 'create-folder';
export type GtkFileChooserConfirmationNick = 'confirm' | 'accept-filename' | 'select-again';
export type GtkIMPreeditStyleNick = 'nothing' | 'callback' | 'none';
export type GtkIMStatusStyleNick = 'nothing' | 'callback' | 'none';
export type GtkIconSizeNick = 'invalid' | 'menu' | 'small-toolbar' | 'large-toolbar' | 'button' | 'dnd' | 'dialog';
export type GtkIconViewDropPositionNick = 'no-drop' | 'drop-into' | 'drop-left' | 'drop-right' | 'drop-above' | 'drop-below';
export type GtkImageTypeNick = 'empty' | 'pixbuf' | 'stock' | 'icon-set' | 'animation' | 'icon-name' | 'gicon' | 'surface';
export type GtkInputPurposeNick = 'free-form' | 'alpha' | 'digits' | 'number' | 'phone' | 'url' | 'email' | 'name' | 'password' | 'pin' | 'terminal';
export type GtkJustificationNick = 'left' | 'right' | 'center' | 'fill';
export type GtkLevelBarModeNick = 'continuous' | 'discrete';
export type GtkLicenseNick = 'unknown' | 'custom' | 'gpl-2-0' | 'gpl-3-0' | 'lgpl-2-1' | 'lgpl-3-0' | 'bsd' | 'mit-x11' | 'artistic' | 'gpl-2-0-only' | 'gpl-3-0-only' | 'lgpl-2-1-only' | 'lgpl-3-0-only' | 'agpl-3-0' | 'agpl-3-0-only' | 'bsd-3' | 'apache-2-0' | 'mpl-2-0';
export type GtkMenuDirectionTypeNick = 'parent' | 'child' | 'next' | 'prev';
export type GtkMessageTypeNick = 'info' | 'warning' | 'question' | 'error' | 'other';
export type GtkMovementStepNick = 'logical-positions' | 'visual-positions' | 'words' | 'display-lines' | 'display-line-ends' | 'paragraphs' | 'paragraph-ends' | 'pages' | 'buffer-ends' | 'horizontal-pages';
export type GtkNotebookTabNick = 'first' | 'last';
export type GtkNumberUpLayoutNick = 'lrtb' | 'lrbt' | 'rltb' | 'rlbt' | 'tblr' | 'tbrl' | 'btlr' | 'btrl';
export type GtkOrientationNick = 'horizontal' | 'vertical';
export type GtkPackDirectionNick = 'ltr' | 'rtl' | 'ttb' | 'btt';
export type GtkPackTypeNick = 'start' | 'end';
export type GtkPadActionTypeNick = 'button' | 'ring' | 'strip';
export type GtkPageOrientationNick = 'portrait' | 'landscape' | 'reverse-portrait' | 'reverse-landscape';
export type GtkPageSetNick = 'all' | 'even' | 'odd';
export type GtkPanDirectionNick = 'left' | 'right' | 'up' | 'down';
export type GtkPathPriorityTypeNick = 'lowest' | 'gtk' | 'application' | 'theme' | 'rc' | 'highest';
export type GtkPathTypeNick = 'widget' | 'widget-class' | 'class';
export type GtkPolicyTypeNick = 'always' | 'automatic' | 'never' | 'external';
export type GtkPopoverConstraintNick = 'none' | 'window';
export type GtkPositionTypeNick = 'left' | 'right' | 'top' | 'bottom';
export type GtkPrintDuplexNick = 'simplex' | 'horizontal' | 'vertical';
export type GtkPrintOperationActionNick = 'print-dialog' | 'print' | 'preview' | 'export';
export type GtkPrintOperationResultNick = 'error' | 'apply' | 'cancel' | 'in-progress';
export type GtkPrintPagesNick = 'all' | 'current' | 'ranges' | 'selection';
export type GtkPrintQualityNick = 'low' | 'normal' | 'high' | 'draft';
export type GtkPrintStatusNick = 'initial' | 'preparing' | 'generating-data' | 'sending-data' | 'pending' | 'pending-issue' | 'printing' | 'finished' | 'finished-aborted';
export type GtkPropagationPhaseNick = 'none' | 'capture' | 'bubble' | 'target';
export type GtkRcTokenTypeNick = 'invalid' | 'include' | 'normal' | 'active' | 'prelight' | 'selected' | 'insensitive' | 'fg' | 'bg' | 'text' | 'base' | 'xthickness' | 'ythickness' | 'font' | 'fontset' | 'font-name' | 'bg-pixmap' | 'pixmap-path' | 'style' | 'binding' | 'bind' | 'widget' | 'widget-class' | 'class' | 'lowest' | 'gtk' | 'application' | 'theme' | 'rc' | 'highest' | 'engine' | 'module-path' | 'im-module-path' | 'im-module-file' | 'stock' | 'ltr' | 'rtl' | 'color' | 'unbind' | 'last';
export type GtkRecentSortTypeNick = 'none' | 'mru' | 'lru' | 'custom';
export type GtkReliefStyleNick = 'normal' | 'half' | 'none';
export type GtkResizeModeNick = 'parent' | 'queue' | 'immediate';
export type GtkResponseTypeNick = 'none' | 'reject' | 'accept' | 'delete-event' | 'ok' | 'cancel' | 'close' | 'yes' | 'no' | 'apply' | 'help';
export type GtkRevealerTransitionTypeNick = 'none' | 'crossfade' | 'slide-right' | 'slide-left' | 'slide-up' | 'slide-down';
export type GtkScrollStepNick = 'steps' | 'pages' | 'ends' | 'horizontal-steps' | 'horizontal-pages' | 'horizontal-ends';
export type GtkScrollTypeNick = 'none' | 'jump' | 'step-backward' | 'step-forward' | 'page-backward' | 'page-forward' | 'step-up' | 'step-down' | 'page-up' | 'page-down' | 'step-left' | 'step-right' | 'page-left' | 'page-right' | 'start' | 'end';
export type GtkScrollablePolicyNick = 'minimum' | 'natural';
export type GtkSelectionModeNick = 'none' | 'single' | 'browse' | 'multiple';
export type GtkSensitivityTypeNick = 'auto' | 'on' | 'off';
export type GtkShadowTypeNick = 'none' | 'in' | 'out' | 'etched-in' | 'etched-out';
export type GtkShortcutTypeNick = 'accelerator' | 'gesture-pinch' | 'gesture-stretch' | 'gesture-rotate-clockwise' | 'gesture-rotate-counterclockwise' | 'gesture-two-finger-swipe-left' | 'gesture-two-finger-swipe-right' | 'gesture';
export type GtkSizeGroupModeNick = 'none' | 'horizontal' | 'vertical' | 'both';
export type GtkSizeRequestModeNick = 'height-for-width' | 'width-for-height' | 'constant-size';
export type GtkSortTypeNick = 'ascending' | 'descending';
export type GtkSpinButtonUpdatePolicyNick = 'always' | 'if-valid';
export type GtkSpinTypeNick = 'step-forward' | 'step-backward' | 'page-forward' | 'page-backward' | 'home' | 'end' | 'user-defined';
export type GtkStackTransitionTypeNick = 'none' | 'crossfade' | 'slide-right' | 'slide-left' | 'slide-up' | 'slide-down' | 'slide-left-right' | 'slide-up-down' | 'over-up' | 'over-down' | 'over-left' | 'over-right' | 'under-up' | 'under-down' | 'under-left' | 'under-right' | 'over-up-down' | 'over-down-up' | 'over-left-right' | 'over-right-left';
export type GtkStateTypeNick = 'normal' | 'active' | 'prelight' | 'selected' | 'insensitive' | 'inconsistent' | 'focused';
export type GtkTextBufferTargetInfoNick = 'buffer-contents' | 'rich-text' | 'text';
export type GtkTextDirectionNick = 'none' | 'ltr' | 'rtl';
export type GtkTextExtendSelectionNick = 'word' | 'line';
export type GtkTextViewLayerNick = 'below' | 'above' | 'below-text' | 'above-text';
export type GtkTextWindowTypeNick = 'private' | 'widget' | 'text' | 'left' | 'right' | 'top' | 'bottom';
export type GtkToolbarSpaceStyleNick = 'empty' | 'line';
export type GtkToolbarStyleNick = 'icons' | 'text' | 'both' | 'both-horiz';
export type GtkTreeViewColumnSizingNick = 'grow-only' | 'autosize' | 'fixed';
export type GtkTreeViewDropPositionNick = 'before' | 'after' | 'into-or-before' | 'into-or-after';
export type GtkTreeViewGridLinesNick = 'none' | 'horizontal' | 'vertical' | 'both';
export type GtkUnitNick = 'none' | 'points' | 'inch' | 'mm';
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

/** The GtkAboutDialog offers a simple way to display information about a program like its logo, name, copyright, website and license. */
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
     * The license of the program, as a value of the %GtkLicense enumeration.
     * @since 3.0
     * @default GTK_LICENSE_UNKNOWN
     */
    'license-type'?: GtkLicenseNick | Gtk.License;
    /**
     * A logo for the about box.
     * @since 2.6
     */
    logo?: GdkPixbuf.Pixbuf;
    /**
     * A named icon to use as the logo for the about box.
     * @since 2.6
     * @default image-missing
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

/** The #GtkAccelLabel widget is a subclass of #GtkLabel that also displays an accelerator key on the right of the label text, e.g. */
export interface GtkAccelLabelProps extends GtkLabelProps, GtkBuildableProps {
    'accel-closure'?: GObject.Closure;
    'accel-widget'?: Gtk.Widget | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkAccelLabelConstructOnly = GtkLabelConstructOnly | GtkBuildableConstructOnly;

/** GtkActionBar is designed to present contextual actions. */
export interface GtkActionBarProps extends GtkBinProps, GtkBuildableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkActionBarConstructOnly = GtkBinConstructOnly | GtkBuildableConstructOnly;

/** This interface provides a convenient way of associating widgets with actions on a #GtkApplicationWindow or #GtkApplication. */
export interface GtkActionableProps extends GtkWidgetProps {
    /** @default NULL */
    'action-name'?: string | null;
    'action-target'?: GLib.Variant;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkActionableConstructOnly = GtkWidgetConstructOnly;

/** Activatable widgets can be connected to a #GtkAction and reflects the state of its action. */
export interface GtkActivatableProps {
    /**
     * The action that this activatable will activate and receive updates from for various states and possibly appearance.
     * @since 2.16
     * @deprecated since 3.10
     */
    'related-action'?: Gtk.Action;
    /**
     * Whether this activatable should reset its layout and appearance when setting the related action or when the action changes appearance.
     * @since 2.16
     * @default TRUE
     * @deprecated since 3.10
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
     * @default 0
     * @deprecated since 3.14: Use gtk_widget_set_margin_bottom() instead
     */
    'bottom-padding'?: number;
    /**
     * The padding to insert at the left of the widget.
     * @since 2.4
     * @default 0
     * @deprecated since 3.14: Use gtk_widget_set_margin_start() instead
     */
    'left-padding'?: number;
    /**
     * The padding to insert at the right of the widget.
     * @since 2.4
     * @default 0
     * @deprecated since 3.14: Use gtk_widget_set_margin_end() instead
     */
    'right-padding'?: number;
    /**
     * The padding to insert at the top of the widget.
     * @since 2.4
     * @default 0
     * @deprecated since 3.14: Use gtk_widget_set_margin_top() instead
     */
    'top-padding'?: number;
    /**
     * Horizontal position of child in available space.
     * @default 0.500000
     * @deprecated since 3.14: Use gtk_widget_set_halign() on the child instead
     */
    xalign?: number;
    /**
     * If available horizontal space is bigger than needed, how much of it to use for the child.
     * @default 1.000000
     * @deprecated since 3.14: Use gtk_widget_set_hexpand() on the child instead
     */
    xscale?: number;
    /**
     * Vertical position of child in available space.
     * @default 0.500000
     * @deprecated since 3.14: Use gtk_widget_set_valign() on the child instead
     */
    yalign?: number;
    /**
     * If available vertical space is bigger than needed, how much of it to use for the child.
     * @default 1.000000
     * @deprecated since 3.14: Use gtk_widget_set_vexpand() on the child instead
     */
    yscale?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkAlignmentConstructOnly = GtkBinConstructOnly | GtkBuildableConstructOnly;

/** #GtkAppChooser is an interface that can be implemented by widgets which allow the user to choose an application (typically for the purpose of opening a file). */
export interface GtkAppChooserProps extends GtkWidgetProps {
    /**
     * The content type of the #GtkAppChooser object.
     * @default NULL
     */
    'content-type'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkAppChooserConstructOnly = GtkWidgetConstructOnly | 'content-type';

/** The #GtkAppChooserButton is a widget that lets the user select an application. */
export interface GtkAppChooserButtonProps extends GtkComboBoxProps, GtkAppChooserProps, GtkBuildableProps, GtkCellEditableProps, GtkCellLayoutProps {
    /**
     * The text to show at the top of the dialog that can be opened from the button.
     * @default NULL
     */
    heading?: string | null;
    /**
     * The #GtkAppChooserButton:show-default-item property determines whether the dropdown menu should show the default application on top for the provided content type.
     * @since 3.2
     * @default FALSE
     */
    'show-default-item'?: boolean;
    /**
     * The #GtkAppChooserButton:show-dialog-item property determines whether the dropdown menu should show an item that triggers a #GtkAppChooserDialog when clicked.
     * @default FALSE
     */
    'show-dialog-item'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkAppChooserButtonConstructOnly = GtkComboBoxConstructOnly | GtkAppChooserConstructOnly | GtkBuildableConstructOnly | GtkCellEditableConstructOnly | GtkCellLayoutConstructOnly;

/** #GtkAppChooserDialog shows a #GtkAppChooserWidget inside a #GtkDialog. */
export interface GtkAppChooserDialogProps extends GtkDialogProps, GtkAppChooserProps, GtkBuildableProps {
    /** The GFile used by the #GtkAppChooserDialog. */
    gfile?: Gio.File;
    /**
     * The text to show at the top of the dialog.
     * @default NULL
     */
    heading?: string | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkAppChooserDialogConstructOnly = GtkDialogConstructOnly | GtkAppChooserConstructOnly | GtkBuildableConstructOnly | 'gfile';

/** #GtkAppChooserWidget is a widget for selecting applications. */
export interface GtkAppChooserWidgetProps extends GtkBoxProps, GtkAppChooserProps, GtkBuildableProps, GtkOrientableProps {
    /**
     * The #GtkAppChooserWidget:default-text property determines the text that appears in the widget when there are no applications for the given content type.
     * @default NULL
     */
    'default-text'?: string;
    /**
     * If the #GtkAppChooserWidget:show-all property is %TRUE, the app chooser presents all applications in a single list, without subsections for default, recommended or related applications.
     * @default FALSE
     */
    'show-all'?: boolean;
    /**
     * The ::show-default property determines whether the app chooser should show the default handler for the content type in a separate section.
     * @default FALSE
     */
    'show-default'?: boolean;
    /**
     * The #GtkAppChooserWidget:show-fallback property determines whether the app chooser should show a section for fallback applications.
     * @default FALSE
     */
    'show-fallback'?: boolean;
    /**
     * The #GtkAppChooserWidget:show-other property determines whether the app chooser should show a section for other applications.
     * @default FALSE
     */
    'show-other'?: boolean;
    /**
     * The #GtkAppChooserWidget:show-recommended property determines whether the app chooser should show a section for recommended applications.
     * @default TRUE
     */
    'show-recommended'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkAppChooserWidgetConstructOnly = GtkBoxConstructOnly | GtkAppChooserConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

/** #GtkApplicationWindow is a #GtkWindow subclass that offers some extra functionality for better integration with #GtkApplication features. */
export interface GtkApplicationWindowProps extends GtkWindowProps, GtkBuildableProps {
    /**
     * If this property is %TRUE, the window will display a menubar that includes the app menu and menubar, unless these are shown by the desktop shell.
     * @default TRUE
     */
    'show-menubar'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkApplicationWindowConstructOnly = GtkWindowConstructOnly | GtkBuildableConstructOnly;

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
    /**
     * %TRUE if the assistant uses a #GtkHeaderBar for action buttons instead of the action-area.
     * @since 3.12
     * @default -1
     */
    'use-header-bar'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkAssistantConstructOnly = GtkWindowConstructOnly | GtkBuildableConstructOnly | 'use-header-bar';

/** The #GtkBin widget is a container with just one child. */
export interface GtkBinProps extends GtkContainerProps, GtkBuildableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkBinConstructOnly = GtkContainerConstructOnly | GtkBuildableConstructOnly;

/** The GtkBox widget arranges child widgets into a single row or column, depending upon the value of its #GtkOrientable:orientation property. */
export interface GtkBoxProps extends GtkContainerProps, GtkBuildableProps, GtkOrientableProps {
    /** @default GTK_BASELINE_POSITION_CENTER */
    'baseline-position'?: GtkBaselinePositionNick | Gtk.BaselinePosition;
    /** @default FALSE */
    homogeneous?: boolean;
    /** @default 0 */
    spacing?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkBoxConstructOnly = GtkContainerConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

/** GtkBuildable allows objects to extend and customize their deserialization from [GtkBuilder UI descriptions][BUILDER-UI]. */
export interface GtkBuildableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkBuildableConstructOnly = never;

/** The #GtkButton widget is generally used to trigger a callback function that is called when the button is pressed. */
export interface GtkButtonProps extends GtkBinProps, GtkActionableProps, GtkActivatableProps, GtkBuildableProps {
    /**
     * If %TRUE, the button will ignore the #GtkSettings:gtk-button-images setting and always show the image, if available.
     * @since 3.6
     * @default FALSE
     */
    'always-show-image'?: boolean;
    /**
     * The child widget to appear next to the button text.
     * @since 2.6
     */
    image?: Gtk.Widget | null;
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
    /**
     * @default FALSE
     * @deprecated since 3.10
     */
    'use-stock'?: boolean;
    /** @default FALSE */
    'use-underline'?: boolean;
    /**
     * If the child of the button is a #GtkMisc or #GtkAlignment, this property can be used to control its horizontal alignment.
     * @since 2.4
     * @default 0.500000
     * @deprecated since 3.14: Access the child widget directly if you need to control its alignment.
     */
    xalign?: number;
    /**
     * If the child of the button is a #GtkMisc or #GtkAlignment, this property can be used to control its vertical alignment.
     * @since 2.4
     * @default 0.500000
     * @deprecated since 3.14: Access the child widget directly if you need to control its alignment.
     */
    yalign?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkButtonConstructOnly = GtkBinConstructOnly | GtkActionableConstructOnly | GtkActivatableConstructOnly | GtkBuildableConstructOnly;

export interface GtkButtonBoxProps extends GtkBoxProps, GtkBuildableProps, GtkOrientableProps {
    /** @default GTK_BUTTONBOX_EDGE */
    'layout-style'?: GtkButtonBoxStyleNick | Gtk.ButtonBoxStyle;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkButtonBoxConstructOnly = GtkBoxConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

/** #GtkCalendar is a widget that displays a Gregorian calendar, one month at a time. */
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

/** The #GtkCellEditable interface must be implemented for widgets to be usable to edit the contents of a #GtkTreeView cell. */
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

/** #GtkCellLayout is an interface to be implemented by all objects which want to provide a #GtkTreeViewColumn like API for packing cells, setting attributes and data funcs. */
export interface GtkCellLayoutProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkCellLayoutConstructOnly = never;

/** A #GtkCellView displays a single row of a #GtkTreeModel using a #GtkCellArea and #GtkCellAreaContext. */
export interface GtkCellViewProps extends GtkWidgetProps, GtkBuildableProps, GtkCellLayoutProps, GtkOrientableProps {
    /** @default NULL */
    background?: string;
    /**
     * The background color as a #GdkColor
     * @deprecated since 3.4: Use #GtkCellView:background-rgba instead.
     */
    'background-gdk'?: Gdk.Color;
    /**
     * The background color as a #GdkRGBA
     * @since 3.0
     */
    'background-rgba'?: Gdk.RGBA;
    /** @default FALSE */
    'background-set'?: boolean;
    /** The #GtkCellArea rendering cells If no area is specified when creating the cell view with gtk_cell_view_new_with_context() a horizontally oriented #GtkCellAreaBox will be used. */
    'cell-area'?: Gtk.CellArea;
    /** The #GtkCellAreaContext used to compute the geometry of the cell view. */
    'cell-area-context'?: Gtk.CellAreaContext;
    /**
     * Whether all cells should be draw as sensitive for this view regardless of the actual cell properties (used to make menus with submenus appear sensitive when the items in submenus might be insensitive…
     * @default FALSE
     */
    'draw-sensitive'?: boolean;
    /**
     * Whether the view should request enough space to always fit the size of every row in the model (used by the combo box to ensure the combo box size doesnt change when different items are selected).
     * @default FALSE
     */
    'fit-model'?: boolean;
    /** The model for cell view since 2.10 */
    model?: Gtk.TreeModel | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkCellViewConstructOnly = GtkWidgetConstructOnly | GtkBuildableConstructOnly | GtkCellLayoutConstructOnly | GtkOrientableConstructOnly | 'cell-area' | 'cell-area-context';

/** A #GtkCheckButton places a discrete #GtkToggleButton next to a widget, (usually a #GtkLabel). */
export interface GtkCheckButtonProps extends GtkToggleButtonProps, GtkActionableProps, GtkActivatableProps, GtkBuildableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkCheckButtonConstructOnly = GtkToggleButtonConstructOnly | GtkActionableConstructOnly | GtkActivatableConstructOnly | GtkBuildableConstructOnly;

/** A #GtkCheckMenuItem is a menu item that maintains the state of a boolean value in addition to a #GtkMenuItem usual role in activating application code. */
export interface GtkCheckMenuItemProps extends GtkMenuItemProps, GtkActionableProps, GtkActivatableProps, GtkBuildableProps {
    /** @default FALSE */
    active?: boolean;
    /** @default FALSE */
    'draw-as-radio'?: boolean;
    /** @default FALSE */
    inconsistent?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkCheckMenuItemConstructOnly = GtkMenuItemConstructOnly | GtkActionableConstructOnly | GtkActivatableConstructOnly | GtkBuildableConstructOnly;

/** The #GtkColorButton is a button which displays the currently selected color and allows to open a color selection dialog to change the color. */
export interface GtkColorButtonProps extends GtkButtonProps, GtkActionableProps, GtkActivatableProps, GtkBuildableProps, GtkColorChooserProps {
    /**
     * The selected opacity value (0 fully transparent, 65535 fully opaque).
     * @since 2.4
     * @default 65535
     */
    alpha?: number;
    /**
     * The selected color.
     * @since 2.4
     * @deprecated since 3.4: Use #GtkColorButton:rgba instead.
     */
    color?: Gdk.Color;
    /**
     * The RGBA color.
     * @since 3.0
     */
    rgba?: Gdk.RGBA;
    /**
     * Set this property to %TRUE to skip the palette in the dialog and go directly to the color editor.
     * @since 3.20
     * @default FALSE
     */
    'show-editor'?: boolean;
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
export type GtkColorButtonConstructOnly = GtkButtonConstructOnly | GtkActionableConstructOnly | GtkActivatableConstructOnly | GtkBuildableConstructOnly | GtkColorChooserConstructOnly;

/** #GtkColorChooser is an interface that is implemented by widgets for choosing colors. */
export interface GtkColorChooserProps {
    /**
     * The ::rgba property contains the currently selected color, as a #GdkRGBA struct.
     * @since 3.4
     */
    rgba?: Gdk.RGBA;
    /**
     * When ::use-alpha is %TRUE, colors may have alpha (translucency) information.
     * @since 3.4
     * @default TRUE
     */
    'use-alpha'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkColorChooserConstructOnly = never;

/** The #GtkColorChooserDialog widget is a dialog for choosing a color. */
export interface GtkColorChooserDialogProps extends GtkDialogProps, GtkBuildableProps, GtkColorChooserProps {
    /** @default FALSE */
    'show-editor'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkColorChooserDialogConstructOnly = GtkDialogConstructOnly | GtkBuildableConstructOnly | GtkColorChooserConstructOnly;

/** The #GtkColorChooserWidget widget lets the user select a color. */
export interface GtkColorChooserWidgetProps extends GtkBoxProps, GtkBuildableProps, GtkColorChooserProps, GtkOrientableProps {
    /**
     * The ::show-editor property is %TRUE when the color chooser is showing the single-color editor.
     * @since 3.4
     * @default FALSE
     */
    'show-editor'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkColorChooserWidgetConstructOnly = GtkBoxConstructOnly | GtkBuildableConstructOnly | GtkColorChooserConstructOnly | GtkOrientableConstructOnly;

export interface GtkColorSelectionProps extends GtkBoxProps, GtkBuildableProps, GtkOrientableProps {
    /** @default 65535 */
    'current-alpha'?: number;
    /**
     * The current GdkColor color.
     * @deprecated since 3.4: Use #GtkColorSelection:current-rgba instead.
     */
    'current-color'?: Gdk.Color;
    /**
     * The current RGBA color.
     * @since 3.0
     */
    'current-rgba'?: Gdk.RGBA;
    /** @default FALSE */
    'has-opacity-control'?: boolean;
    /** @default FALSE */
    'has-palette'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkColorSelectionConstructOnly = GtkBoxConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

export interface GtkColorSelectionDialogProps extends GtkDialogProps, GtkBuildableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkColorSelectionDialogConstructOnly = GtkDialogConstructOnly | GtkBuildableConstructOnly;

/** A GtkComboBox is a widget that allows the user to choose from a list of valid choices. */
export interface GtkComboBoxProps extends GtkBinProps, GtkBuildableProps, GtkCellEditableProps, GtkCellLayoutProps {
    /**
     * The item which is currently active.
     * @since 2.4
     * @default -1
     */
    active?: number;
    /**
     * The value of the ID column of the active row.
     * @since 3.0
     * @default NULL
     */
    'active-id'?: string | null;
    /**
     * The add-tearoffs property controls whether generated menus have tearoff menu items.
     * @since 2.6
     * @default FALSE
     * @deprecated since 3.10
     */
    'add-tearoffs'?: boolean;
    /**
     * Whether the dropdown button is sensitive when the model is empty.
     * @since 2.14
     * @default GTK_SENSITIVITY_AUTO
     */
    'button-sensitivity'?: GtkSensitivityTypeNick | Gtk.SensitivityType;
    /**
     * The #GtkCellArea used to layout cell renderers for this combo box.
     * @since 3.0
     */
    'cell-area'?: Gtk.CellArea;
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
     * The column in the combo box's model that provides string IDs for the values in the model, if != -1.
     * @since 3.0
     * @default -1
     */
    'id-column'?: number;
    /**
     * The model from which the combo box takes the values shown in the list.
     * @since 2.4
     */
    model?: Gtk.TreeModel;
    /**
     * Whether the popup's width should be a fixed width matching the allocated width of the combo box.
     * @since 3.0
     * @default TRUE
     */
    'popup-fixed-width'?: boolean;
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
     * @deprecated since 3.10
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
export type GtkComboBoxConstructOnly = GtkBinConstructOnly | GtkBuildableConstructOnly | GtkCellEditableConstructOnly | GtkCellLayoutConstructOnly | 'cell-area' | 'has-entry';

/** A GtkComboBoxText is a simple variant of #GtkComboBox that hides the model-view complexity for simple text-only use cases. */
export interface GtkComboBoxTextProps extends GtkComboBoxProps, GtkBuildableProps, GtkCellEditableProps, GtkCellLayoutProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkComboBoxTextConstructOnly = GtkComboBoxConstructOnly | GtkBuildableConstructOnly | GtkCellEditableConstructOnly | GtkCellLayoutConstructOnly;

/** A GTK+ user interface is constructed by nesting widgets inside widgets. */
export interface GtkContainerProps extends GtkWidgetProps, GtkBuildableProps {
    /** @default 0 */
    'border-width'?: number;
    child?: Gtk.Widget;
    /** @default GTK_RESIZE_PARENT */
    'resize-mode'?: GtkResizeModeNick | Gtk.ResizeMode;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkContainerConstructOnly = GtkWidgetConstructOnly | GtkBuildableConstructOnly;

/** Dialog boxes are a convenient way to prompt the user for a small amount of input, e.g. */
export interface GtkDialogProps extends GtkWindowProps, GtkBuildableProps {
    /**
     * %TRUE if the dialog uses a #GtkHeaderBar for action buttons instead of the action-area.
     * @since 3.12
     * @default -1
     */
    'use-header-bar'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkDialogConstructOnly = GtkWindowConstructOnly | GtkBuildableConstructOnly | 'use-header-bar';

/** The #GtkDrawingArea widget is used for creating custom user interface elements. */
export interface GtkDrawingAreaProps extends GtkWidgetProps, GtkBuildableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkDrawingAreaConstructOnly = GtkWidgetConstructOnly | GtkBuildableConstructOnly;

/** The #GtkEditable interface is an interface which should be implemented by text editing widgets, such as #GtkEntry and #GtkSpinButton. */
export interface GtkEditableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkEditableConstructOnly = never;

/** The #GtkEntry widget is a single line text entry widget. */
export interface GtkEntryProps extends GtkWidgetProps, GtkBuildableProps, GtkCellEditableProps, GtkEditableProps {
    /** @default FALSE */
    'activates-default'?: boolean;
    /**
     * A list of Pango attributes to apply to the text of the entry.
     * @since 3.6
     */
    attributes?: Pango.AttrList | null;
    buffer?: Gtk.EntryBuffer;
    /**
     * Whether password entries will show a warning when Caps Lock is on.
     * @since 2.16
     * @default TRUE
     */
    'caps-lock-warning'?: boolean;
    /**
     * The auxiliary completion object to use with the entry.
     * @since 3.2
     */
    completion?: Gtk.EntryCompletion;
    /** @default TRUE */
    editable?: boolean;
    /** @default FALSE */
    'enable-emoji-completion'?: boolean;
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
     * @deprecated since 3.4: Use the standard border and padding CSS properties (through objects like #GtkStyleContext and #GtkCssProvider); the value of this style property is ignored.
     */
    'inner-border'?: Gtk.Border | null;
    /**
     * Additional hints (beyond #GtkEntry:input-purpose) that allow input methods to fine-tune their behaviour.
     * @since 3.6
     * @default GTK_INPUT_HINT_NONE
     */
    'input-hints'?: number;
    /**
     * The purpose of this text field.
     * @since 3.6
     * @default GTK_INPUT_PURPOSE_FREE_FORM
     */
    'input-purpose'?: GtkInputPurposeNick | Gtk.InputPurpose;
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
     * The desired maximum width of the entry, in characters.
     * @since 3.12
     * @default -1
     */
    'max-width-chars'?: number;
    /**
     * If text is overwritten when typing in the #GtkEntry.
     * @since 2.14
     * @default FALSE
     */
    'overwrite-mode'?: boolean;
    /**
     * The text that will be displayed in the #GtkEntry when it is empty and unfocused.
     * @since 3.2
     * @default NULL
     */
    'placeholder-text'?: string;
    /**
     * If :populate-all is %TRUE, the #GtkEntry::populate-popup signal is also emitted for touch popups.
     * @since 3.8
     * @default FALSE
     */
    'populate-all'?: boolean;
    /**
     * Whether the primary icon is activatable.
     * @since 2.16
     * @default TRUE
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
     * @deprecated since 3.10: Use #GtkEntry:primary-icon-name instead.
     */
    'primary-icon-stock'?: string;
    /**
     * The contents of the tooltip on the primary icon, which is marked up with the [Pango text markup language][PangoMarkupFormat].
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
     * @default TRUE
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
     * @deprecated since 3.10: Use #GtkEntry:secondary-icon-name instead.
     */
    'secondary-icon-stock'?: string;
    /**
     * The contents of the tooltip on the secondary icon, which is marked up with the [Pango text markup language][PangoMarkupFormat].
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
     * @deprecated since 3.20: Use CSS to determine the style of the border; the value of this style property is ignored.
     */
    'shadow-type'?: GtkShadowTypeNick | Gtk.ShadowType;
    /** @default FALSE */
    'show-emoji-icon'?: boolean;
    tabs?: Pango.TabArray | null;
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

/** The #GtkEventBox widget is a subclass of #GtkBin which also has its own window. */
export interface GtkEventBoxProps extends GtkBinProps, GtkBuildableProps {
    /** @default FALSE */
    'above-child'?: boolean;
    /** @default TRUE */
    'visible-window'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkEventBoxConstructOnly = GtkBinConstructOnly | GtkBuildableConstructOnly;

/** A #GtkExpander allows the user to hide or show its child by clicking on an expander triangle similar to the triangles used in a #GtkTreeView. */
export interface GtkExpanderProps extends GtkBinProps, GtkBuildableProps {
    /** @default FALSE */
    expanded?: boolean;
    /** @default NULL */
    label?: string | null;
    /**
     * Whether the label widget should fill all available horizontal space.
     * @default FALSE
     */
    'label-fill'?: boolean;
    'label-widget'?: Gtk.Widget | null;
    /**
     * When this property is %TRUE, the expander will resize the toplevel widget containing the expander upon expanding and collapsing.
     * @since 3.2
     * @default FALSE
     */
    'resize-toplevel'?: boolean;
    /**
     * Space to put between the label and the child when the expander is expanded.
     * @default 0
     * @deprecated since 3.20: This property is deprecated and ignored.
     */
    spacing?: number;
    /** @default FALSE */
    'use-markup'?: boolean;
    /** @default FALSE */
    'use-underline'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkExpanderConstructOnly = GtkBinConstructOnly | GtkBuildableConstructOnly;

/** #GtkFileChooser is an interface that can be implemented by file selection widgets. */
export interface GtkFileChooserProps {
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
    'extra-widget'?: Gtk.Widget | null;
    filter?: Gtk.FileFilter | null;
    /** @default TRUE */
    'local-only'?: boolean;
    'preview-widget'?: Gtk.Widget | null;
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
export type GtkFileChooserConstructOnly = never;

/** The #GtkFileChooserButton is a widget that lets the user select a file. */
export interface GtkFileChooserButtonProps extends GtkBoxProps, GtkBuildableProps, GtkFileChooserProps, GtkOrientableProps {
    /**
     * Instance of the #GtkFileChooserDialog associated with the button.
     * @since 2.6
     */
    dialog?: Gtk.FileChooser;
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
export type GtkFileChooserButtonConstructOnly = GtkBoxConstructOnly | GtkBuildableConstructOnly | GtkFileChooserConstructOnly | GtkOrientableConstructOnly | 'dialog';

/** #GtkFileChooserDialog is a dialog box suitable for use with “File/Open” or “File/Save as” commands. */
export interface GtkFileChooserDialogProps extends GtkDialogProps, GtkBuildableProps, GtkFileChooserProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkFileChooserDialogConstructOnly = GtkDialogConstructOnly | GtkBuildableConstructOnly | GtkFileChooserConstructOnly;

/** #GtkFileChooserWidget is a widget for choosing files. */
export interface GtkFileChooserWidgetProps extends GtkBoxProps, GtkBuildableProps, GtkFileChooserProps, GtkOrientableProps {
    /** @default FALSE */
    'search-mode'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkFileChooserWidgetConstructOnly = GtkBoxConstructOnly | GtkBuildableConstructOnly | GtkFileChooserConstructOnly | GtkOrientableConstructOnly;

/** The #GtkFixed widget is a container which can place child widgets at fixed positions and with fixed sizes, given in pixels. */
export interface GtkFixedProps extends GtkContainerProps, GtkBuildableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkFixedConstructOnly = GtkContainerConstructOnly | GtkBuildableConstructOnly;

/** A GtkFlowBox positions child widgets in sequence according to its orientation. */
export interface GtkFlowBoxProps extends GtkContainerProps, GtkBuildableProps, GtkOrientableProps {
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
export type GtkFlowBoxConstructOnly = GtkContainerConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

export interface GtkFlowBoxChildProps extends GtkBinProps, GtkBuildableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkFlowBoxChildConstructOnly = GtkBinConstructOnly | GtkBuildableConstructOnly;

/** The #GtkFontButton is a button which displays the currently selected font an allows to open a font chooser dialog to change the font. */
export interface GtkFontButtonProps extends GtkButtonProps, GtkActionableProps, GtkActivatableProps, GtkBuildableProps, GtkFontChooserProps {
    /**
     * The name of the currently selected font.
     * @since 2.4
     * @default Sans 12
     * @deprecated since 3.22: Use the #GtkFontChooser::font property instead
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
     * The title of the font chooser dialog.
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
export type GtkFontButtonConstructOnly = GtkButtonConstructOnly | GtkActionableConstructOnly | GtkActivatableConstructOnly | GtkBuildableConstructOnly | GtkFontChooserConstructOnly;

/** #GtkFontChooser is an interface that can be implemented by widgets displaying the list of fonts. */
export interface GtkFontChooserProps {
    /**
     * The font description as a string, e.g.
     * @default Sans 10
     */
    font?: string | null;
    /** The font description as a #PangoFontDescription. */
    'font-desc'?: Pango.FontDescription | null;
    /**
     * The language for which the #GtkFontChooser:font-features were selected, in a format that is compatible with CSS and with Pango attributes.
     * @since 3.24.1
     */
    language?: string;
    /**
     * The level of granularity to offer for selecting fonts.
     * @since 3.24.1
     * @default GTK_FONT_CHOOSER_LEVEL_STYLE | GTK_FONT_CHOOSER_LEVEL_SIZE
     */
    level?: number;
    /**
     * The string with which to preview the font.
     * @default The quick brown fox jumps over the lazy dog.
     */
    'preview-text'?: string;
    /**
     * Whether to show an entry to change the preview text.
     * @default TRUE
     */
    'show-preview-entry'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkFontChooserConstructOnly = never;

/** The #GtkFontChooserDialog widget is a dialog for selecting a font. */
export interface GtkFontChooserDialogProps extends GtkDialogProps, GtkBuildableProps, GtkFontChooserProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkFontChooserDialogConstructOnly = GtkDialogConstructOnly | GtkBuildableConstructOnly | GtkFontChooserConstructOnly;

/** The #GtkFontChooserWidget widget lists the available fonts, styles and sizes, allowing the user to select a font. */
export interface GtkFontChooserWidgetProps extends GtkBoxProps, GtkBuildableProps, GtkFontChooserProps, GtkOrientableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkFontChooserWidgetConstructOnly = GtkBoxConstructOnly | GtkBuildableConstructOnly | GtkFontChooserConstructOnly | GtkOrientableConstructOnly;

export interface GtkFontSelectionProps extends GtkBoxProps, GtkBuildableProps, GtkOrientableProps {
    /** @default Sans 10 */
    'font-name'?: string;
    /** @default abcdefghijk ABCDEFGHIJK */
    'preview-text'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkFontSelectionConstructOnly = GtkBoxConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

export interface GtkFontSelectionDialogProps extends GtkDialogProps, GtkBuildableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkFontSelectionDialogConstructOnly = GtkDialogConstructOnly | GtkBuildableConstructOnly;

/** The frame widget is a bin that surrounds its child with a decorative frame and an optional label. */
export interface GtkFrameProps extends GtkBinProps, GtkBuildableProps {
    /** @default NULL */
    label?: string | null;
    'label-widget'?: Gtk.Widget | null;
    /** @default 0.000000 */
    'label-xalign'?: number;
    /** @default 0.500000 */
    'label-yalign'?: number;
    /** @default GTK_SHADOW_ETCHED_IN */
    'shadow-type'?: GtkShadowTypeNick | Gtk.ShadowType;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkFrameConstructOnly = GtkBinConstructOnly | GtkBuildableConstructOnly;

/** #GtkGLArea is a widget that allows drawing with OpenGL. */
export interface GtkGLAreaProps extends GtkWidgetProps, GtkBuildableProps {
    /**
     * If set to %TRUE the #GtkGLArea::render signal will be emitted every time the widget draws.
     * @since 3.16
     * @default TRUE
     */
    'auto-render'?: boolean;
    /**
     * If set to %TRUE the buffer allocated by the widget will have an alpha channel component, and when rendering to the window the result will be composited over whatever is below the widget.
     * @since 3.16
     * @default FALSE
     */
    'has-alpha'?: boolean;
    /**
     * If set to %TRUE the widget will allocate and enable a depth buffer for the target framebuffer.
     * @since 3.16
     * @default FALSE
     */
    'has-depth-buffer'?: boolean;
    /**
     * If set to %TRUE the widget will allocate and enable a stencil buffer for the target framebuffer.
     * @since 3.16
     * @default FALSE
     */
    'has-stencil-buffer'?: boolean;
    /**
     * If set to %TRUE the widget will try to create a #GdkGLContext using OpenGL ES instead of OpenGL.
     * @since 3.22
     * @default FALSE
     */
    'use-es'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkGLAreaConstructOnly = GtkWidgetConstructOnly | GtkBuildableConstructOnly;

/** GtkGrid is a container which arranges its child widgets in rows and columns, with arbitrary positions and horizontal/vertical spans. */
export interface GtkGridProps extends GtkContainerProps, GtkBuildableProps, GtkOrientableProps {
    /** @default 0 */
    'baseline-row'?: number;
    /** @default FALSE */
    'column-homogeneous'?: boolean;
    /** @default 0 */
    'column-spacing'?: number;
    /** @default FALSE */
    'row-homogeneous'?: boolean;
    /** @default 0 */
    'row-spacing'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkGridConstructOnly = GtkContainerConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

/** #GtkHBox is a container that organizes child widgets into a single row. */
export interface GtkHBoxProps extends GtkBoxProps, GtkBuildableProps, GtkOrientableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkHBoxConstructOnly = GtkBoxConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

export interface GtkHButtonBoxProps extends GtkButtonBoxProps, GtkBuildableProps, GtkOrientableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkHButtonBoxConstructOnly = GtkButtonBoxConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

/** The HPaned widget is a container widget with two children arranged horizontally. */
export interface GtkHPanedProps extends GtkPanedProps, GtkBuildableProps, GtkOrientableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkHPanedConstructOnly = GtkPanedConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

/** #GtkHSV is the “color wheel” part of a complete color selector widget. */
export interface GtkHSVProps extends GtkWidgetProps, GtkBuildableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkHSVConstructOnly = GtkWidgetConstructOnly | GtkBuildableConstructOnly;

/** The #GtkHScale widget is used to allow the user to select a value using a horizontal slider. */
export interface GtkHScaleProps extends GtkScaleProps, GtkBuildableProps, GtkOrientableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkHScaleConstructOnly = GtkScaleConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

/** The #GtkHScrollbar widget is a widget arranged horizontally creating a scrollbar. */
export interface GtkHScrollbarProps extends GtkScrollbarProps, GtkBuildableProps, GtkOrientableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkHScrollbarConstructOnly = GtkScrollbarConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

/** The #GtkHSeparator widget is a horizontal separator, used to group the widgets within a window. */
export interface GtkHSeparatorProps extends GtkSeparatorProps, GtkBuildableProps, GtkOrientableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkHSeparatorConstructOnly = GtkSeparatorConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

/** The #GtkHandleBox widget allows a portion of a window to be "torn off". */
export interface GtkHandleBoxProps extends GtkBinProps, GtkBuildableProps {
    /** @default GTK_POS_LEFT */
    'handle-position'?: GtkPositionTypeNick | Gtk.PositionType;
    /** @default GTK_SHADOW_OUT */
    'shadow-type'?: GtkShadowTypeNick | Gtk.ShadowType;
    /** @default GTK_POS_TOP */
    'snap-edge'?: GtkPositionTypeNick | Gtk.PositionType;
    /** @default FALSE */
    'snap-edge-set'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkHandleBoxConstructOnly = GtkBinConstructOnly | GtkBuildableConstructOnly;

/** GtkHeaderBar is similar to a horizontal #GtkBox. */
export interface GtkHeaderBarProps extends GtkContainerProps, GtkBuildableProps {
    'custom-title'?: Gtk.Widget | null;
    /**
     * The decoration layout for buttons.
     * @since 3.12
     * @default NULL
     */
    'decoration-layout'?: string;
    /**
     * Set to %TRUE if #GtkHeaderBar:decoration-layout is set.
     * @since 3.12
     * @default FALSE
     */
    'decoration-layout-set'?: boolean;
    /**
     * If %TRUE, reserve space for a subtitle, even if none is currently set.
     * @since 3.12
     * @default TRUE
     */
    'has-subtitle'?: boolean;
    /**
     * Whether to show window decorations.
     * @default FALSE
     */
    'show-close-button'?: boolean;
    /** @default 6 */
    spacing?: number;
    /** @default NULL */
    subtitle?: string | null;
    /** @default NULL */
    title?: string | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkHeaderBarConstructOnly = GtkContainerConstructOnly | GtkBuildableConstructOnly;

/** #GtkIconView provides an alternative view on a #GtkTreeModel. */
export interface GtkIconViewProps extends GtkContainerProps, GtkBuildableProps, GtkCellLayoutProps, GtkScrollableProps {
    /**
     * The activate-on-single-click property specifies whether the "item-activated" signal will be emitted after a single click.
     * @since 3.8
     * @default FALSE
     */
    'activate-on-single-click'?: boolean;
    /**
     * The #GtkCellArea used to layout cell renderers for this view.
     * @since 3.0
     */
    'cell-area'?: Gtk.CellArea;
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
     * @since 2.6
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
    model?: Gtk.TreeModel | null;
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
export type GtkIconViewConstructOnly = GtkContainerConstructOnly | GtkBuildableConstructOnly | GtkCellLayoutConstructOnly | GtkScrollableConstructOnly | 'cell-area';

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
    /** @deprecated since 3.10: Use #GtkImage:icon-name instead. */
    'icon-set'?: Gtk.IconSet;
    /** @default 4 */
    'icon-size'?: number;
    pixbuf?: GdkPixbuf.Pixbuf | null;
    'pixbuf-animation'?: GdkPixbuf.PixbufAnimation;
    /**
     * The "pixel-size" property can be used to specify a fixed size overriding the #GtkImage:icon-size property for images of type %GTK_IMAGE_ICON_NAME.
     * @since 2.6
     * @default -1
     */
    'pixel-size'?: number;
    /**
     * A path to a resource file to display.
     * @since 3.8
     * @default NULL
     */
    resource?: string;
    /**
     * @default NULL
     * @deprecated since 3.10: Use #GtkImage:icon-name instead.
     */
    stock?: string;
    surface?: cairo.Surface;
    /**
     * Whether the icon displayed in the GtkImage will use standard icon names fallback.
     * @since 3.0
     * @default FALSE
     */
    'use-fallback'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkImageConstructOnly = GtkMiscConstructOnly | GtkBuildableConstructOnly;

/** A GtkImageMenuItem is a menu item which has an icon next to the text label. */
export interface GtkImageMenuItemProps extends GtkMenuItemProps, GtkActionableProps, GtkActivatableProps, GtkBuildableProps {
    /**
     * The Accel Group to use for stock accelerator keys
     * @since 2.16
     * @deprecated since 3.10: Use gtk_widget_add_accelerator() instead
     */
    'accel-group'?: Gtk.AccelGroup;
    /**
     * If %TRUE, the menu item will always show the image, if available.
     * @since 2.16
     * @default FALSE
     * @deprecated since 3.10: Use a #GtkMenuItem containing a #GtkBox with a #GtkAccelLabel and a #GtkImage instead
     */
    'always-show-image'?: boolean;
    /**
     * Child widget to appear next to the menu text.
     * @deprecated since 3.10: Use a #GtkMenuItem containing a #GtkBox with a #GtkAccelLabel and a #GtkImage instead
     */
    image?: Gtk.Widget;
    /**
     * If %TRUE, the label set in the menuitem is used as a stock id to select the stock item for the item.
     * @since 2.16
     * @default FALSE
     * @deprecated since 3.10: Use a named icon from the #GtkIconTheme instead
     */
    'use-stock'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkImageMenuItemConstructOnly = GtkMenuItemConstructOnly | GtkActionableConstructOnly | GtkActivatableConstructOnly | GtkBuildableConstructOnly;

/** #GtkInfoBar is a widget that can be used to show messages to the user without showing a dialog. */
export interface GtkInfoBarProps extends GtkBoxProps, GtkBuildableProps, GtkOrientableProps {
    /**
     * The type of the message.
     * @since 2.18
     * @default GTK_MESSAGE_INFO
     */
    'message-type'?: GtkMessageTypeNick | Gtk.MessageType;
    /** @default TRUE */
    revealed?: boolean;
    /**
     * Whether to include a standard close button.
     * @since 3.10
     * @default FALSE
     */
    'show-close-button'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkInfoBarConstructOnly = GtkBoxConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

/** The #GtkInvisible widget is used internally in GTK+, and is probably not very useful for application developers. */
export interface GtkInvisibleProps extends GtkWidgetProps, GtkBuildableProps {
    screen?: Gdk.Screen;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkInvisibleConstructOnly = GtkWidgetConstructOnly | GtkBuildableConstructOnly;

/** The #GtkLabel widget displays a small amount of text. */
export interface GtkLabelProps extends GtkMiscProps, GtkBuildableProps {
    /**
     * The angle that the baseline of the label makes with the horizontal, in degrees, measured counterclockwise.
     * @since 2.6
     * @default 0.000000
     */
    angle?: number;
    attributes?: Pango.AttrList | null;
    /**
     * The preferred place to ellipsize the string, if the label does not have enough room to display the entire string, specified as a #PangoEllipsizeMode.
     * @since 2.6
     * @default PANGO_ELLIPSIZE_NONE
     */
    ellipsize?: PangoEllipsizeModeNick | Pango.EllipsizeMode;
    /** @default GTK_JUSTIFY_LEFT */
    justify?: GtkJustificationNick | Gtk.Justification;
    /** The contents of the label. */
    label?: string;
    /**
     * The number of lines to which an ellipsized, wrapping label should be limited.
     * @since 3.10
     * @default -1
     */
    lines?: number;
    /**
     * The desired maximum width of the label, in characters.
     * @since 2.6
     * @default -1
     */
    'max-width-chars'?: number;
    'mnemonic-widget'?: Gtk.Widget | null;
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
     * Set this property to %TRUE to make the label track which links have been visited.
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
    /**
     * The xalign property determines the horizontal aligment of the label text inside the labels size allocation.
     * @since 3.16
     * @default 0.500000
     */
    xalign?: number;
    /**
     * The yalign property determines the vertical aligment of the label text inside the labels size allocation.
     * @since 3.16
     * @default 0.500000
     */
    yalign?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkLabelConstructOnly = GtkMiscConstructOnly | GtkBuildableConstructOnly;

/** #GtkLayout is similar to #GtkDrawingArea in that it’s a “blank slate” and doesn’t do anything except paint a blank background by default. */
export interface GtkLayoutProps extends GtkContainerProps, GtkBuildableProps, GtkScrollableProps {
    /** @default 100 */
    height?: number;
    /** @default 100 */
    width?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkLayoutConstructOnly = GtkContainerConstructOnly | GtkBuildableConstructOnly | GtkScrollableConstructOnly;

/** The #GtkLevelBar is a bar widget that can be used as a level indicator. */
export interface GtkLevelBarProps extends GtkWidgetProps, GtkBuildableProps, GtkOrientableProps {
    /**
     * Level bars normally grow from top to bottom or left to right.
     * @since 3.8
     * @default FALSE
     */
    inverted?: boolean;
    /**
     * The #GtkLevelBar:max-value property determaxes the maximum value of the interval that can be displayed by the bar.
     * @since 3.6
     * @default 1.000000
     */
    'max-value'?: number;
    /**
     * The #GtkLevelBar:min-value property determines the minimum value of the interval that can be displayed by the bar.
     * @since 3.6
     * @default 0.000000
     */
    'min-value'?: number;
    /**
     * The #GtkLevelBar:mode property determines the way #GtkLevelBar interprets the value properties to draw the level fill area.
     * @since 3.6
     * @default GTK_LEVEL_BAR_MODE_CONTINUOUS
     */
    mode?: GtkLevelBarModeNick | Gtk.LevelBarMode;
    /**
     * The #GtkLevelBar:value property determines the currently filled value of the level bar.
     * @since 3.6
     * @default 0.000000
     */
    value?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkLevelBarConstructOnly = GtkWidgetConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

/** A GtkLinkButton is a #GtkButton with a hyperlink, similar to the one used by web browsers, which triggers an action when clicked. */
export interface GtkLinkButtonProps extends GtkButtonProps, GtkActionableProps, GtkActivatableProps, GtkBuildableProps {
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
export type GtkLinkButtonConstructOnly = GtkButtonConstructOnly | GtkActionableConstructOnly | GtkActivatableConstructOnly | GtkBuildableConstructOnly;

/** A GtkListBox is a vertical container that contains GtkListBoxRow children. */
export interface GtkListBoxProps extends GtkContainerProps, GtkBuildableProps {
    /** @default TRUE */
    'activate-on-single-click'?: boolean;
    /** @default GTK_SELECTION_SINGLE */
    'selection-mode'?: GtkSelectionModeNick | Gtk.SelectionMode;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkListBoxConstructOnly = GtkContainerConstructOnly | GtkBuildableConstructOnly;

export interface GtkListBoxRowProps extends GtkBinProps, GtkActionableProps, GtkBuildableProps {
    /**
     * The property determines whether the #GtkListBox::row-activated signal will be emitted for this row.
     * @since 3.14
     * @default TRUE
     */
    activatable?: boolean;
    /**
     * The property determines whether this row can be selected.
     * @since 3.14
     * @default TRUE
     */
    selectable?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkListBoxRowConstructOnly = GtkBinConstructOnly | GtkActionableConstructOnly | GtkBuildableConstructOnly;

/** GtkLockButton is a widget that can be used in control panels or preference dialogs to allow users to obtain and revoke authorizations needed to operate the controls. */
export interface GtkLockButtonProps extends GtkButtonProps, GtkActionableProps, GtkActivatableProps, GtkBuildableProps {
    permission?: Gio.Permission;
    /** @default Lock */
    'text-lock'?: string;
    /** @default Unlock */
    'text-unlock'?: string;
    /** @default Dialog is unlocked.\nClick to prevent further changes */
    'tooltip-lock'?: string;
    /** @default System policy prevents changes.\nContact your system administrator */
    'tooltip-not-authorized'?: string;
    /** @default Dialog is locked.\nClick to make changes */
    'tooltip-unlock'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkLockButtonConstructOnly = GtkButtonConstructOnly | GtkActionableConstructOnly | GtkActivatableConstructOnly | GtkBuildableConstructOnly;

/** A #GtkMenu is a #GtkMenuShell that implements a drop down menu consisting of a list of #GtkMenuItem objects which can be navigated and activated by the user to perform application functions. */
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
     * Positioning hints for aligning the menu relative to a rectangle.
     * @since 3.22
     * @default GDK_ANCHOR_FLIP_X | GDK_ANCHOR_FLIP_Y | GDK_ANCHOR_SLIDE_X | GDK_ANCHOR_SLIDE_Y | GDK_ANCHOR_RESIZE_X | GDK_ANCHOR_RESIZE_Y
     */
    'anchor-hints'?: number;
    /**
     * The widget the menu is attached to.
     * @since 2.14
     */
    'attach-widget'?: Gtk.Widget;
    /**
     * The #GdkWindowTypeHint to use for the menu's #GdkWindow.
     * @since 3.22
     * @default GDK_WINDOW_TYPE_HINT_POPUP_MENU
     */
    'menu-type-hint'?: GdkWindowTypeHintNick | Gdk.WindowTypeHint;
    /**
     * The monitor the menu will be popped up on.
     * @since 2.14
     * @default -1
     */
    monitor?: number;
    /**
     * Horizontal offset to apply to the menu, i.e.
     * @since 3.22
     * @default 0
     */
    'rect-anchor-dx'?: number;
    /**
     * Vertical offset to apply to the menu, i.e.
     * @since 3.22
     * @default 0
     */
    'rect-anchor-dy'?: number;
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
     * @deprecated since 3.10
     */
    'tearoff-state'?: boolean;
    /**
     * A title that may be displayed by the window manager when this menu is torn-off.
     * @default NULL
     * @deprecated since 3.10
     */
    'tearoff-title'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkMenuConstructOnly = GtkMenuShellConstructOnly | GtkBuildableConstructOnly;

/** The #GtkMenuBar is a subclass of #GtkMenuShell which contains one or more #GtkMenuItems. */
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

/** The #GtkMenuButton widget is used to display a popup when clicked on. */
export interface GtkMenuButtonProps extends GtkToggleButtonProps, GtkActionableProps, GtkActivatableProps, GtkBuildableProps {
    /**
     * The #GtkWidget to use to align the menu with.
     * @since 3.6
     */
    'align-widget'?: Gtk.Container | null;
    /**
     * The #GtkArrowType representing the direction in which the menu or popover will be popped out.
     * @since 3.6
     * @default GTK_ARROW_DOWN
     */
    direction?: GtkArrowTypeNick | Gtk.ArrowType;
    /**
     * The #GMenuModel from which the popup will be created.
     * @since 3.6
     */
    'menu-model'?: Gio.MenuModel | null;
    /**
     * The #GtkPopover that will be popped up when the button is clicked.
     * @since 3.12
     */
    popover?: Gtk.Popover | null;
    /**
     * The #GtkMenu that will be popped up when the button is clicked.
     * @since 3.6
     */
    popup?: Gtk.Menu | null;
    /**
     * Whether to construct a #GtkPopover from the menu model, or a #GtkMenu.
     * @since 3.12
     * @default TRUE
     */
    'use-popover'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkMenuButtonConstructOnly = GtkToggleButtonConstructOnly | GtkActionableConstructOnly | GtkActivatableConstructOnly | GtkBuildableConstructOnly;

/** The #GtkMenuItem widget and the derived widgets are the only valid children for menus. */
export interface GtkMenuItemProps extends GtkBinProps, GtkActionableProps, GtkActivatableProps, GtkBuildableProps {
    /**
     * Sets the accelerator path of the menu item, through which runtime changes of the menu item's accelerator caused by the user can be identified and saved to persistant storage.
     * @since 2.14
     * @default NULL
     */
    'accel-path'?: string | null;
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
     * The submenu attached to the menu item, or %NULL if it has none.
     * @since 2.12
     */
    submenu?: Gtk.Menu | null;
    /**
     * %TRUE if underlines in the text indicate mnemonics.
     * @since 2.16
     * @default FALSE
     */
    'use-underline'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkMenuItemConstructOnly = GtkBinConstructOnly | GtkActionableConstructOnly | GtkActivatableConstructOnly | GtkBuildableConstructOnly;

/** A #GtkMenuShell is the abstract base class used to derive the #GtkMenu and #GtkMenuBar subclasses. */
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

/** A #GtkMenuToolButton is a #GtkToolItem that contains a button and a small additional button with an arrow. */
export interface GtkMenuToolButtonProps extends GtkToolButtonProps, GtkActionableProps, GtkActivatableProps, GtkBuildableProps {
    menu?: Gtk.Menu;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkMenuToolButtonConstructOnly = GtkToolButtonConstructOnly | GtkActionableConstructOnly | GtkActivatableConstructOnly | GtkBuildableConstructOnly;

/** #GtkMessageDialog presents a dialog with some message text. */
export interface GtkMessageDialogProps extends GtkDialogProps, GtkBuildableProps {
    /** @default GTK_BUTTONS_NONE */
    buttons?: GtkButtonsTypeNick | Gtk.ButtonsType;
    /**
     * The image for this dialog.
     * @since 2.10
     * @deprecated since 3.12: Use #GtkDialog to create dialogs with images
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

/** The #GtkMisc widget is an abstract widget which is not useful itself, but is used to derive subclasses which have alignment and padding attributes. */
export interface GtkMiscProps extends GtkWidgetProps, GtkBuildableProps {
    /**
     * The horizontal alignment.
     * @default 0.500000
     * @deprecated since 3.14: Use gtk_widget_set_halign() instead.
     */
    xalign?: number;
    /**
     * The amount of space to add on the left and right of the widget, in pixels.
     * @default 0
     * @deprecated since 3.14: Use gtk_widget_set_margin_start() and gtk_widget_set_margin_end() instead
     */
    xpad?: number;
    /**
     * The vertical alignment.
     * @default 0.500000
     * @deprecated since 3.14: Use gtk_widget_set_valign() instead.
     */
    yalign?: number;
    /**
     * The amount of space to add on the top and bottom of the widget, in pixels.
     * @default 0
     * @deprecated since 3.14: Use gtk_widget_set_margin_top() and gtk_widget_set_margin_bottom() instead
     */
    ypad?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkMiscConstructOnly = GtkWidgetConstructOnly | GtkBuildableConstructOnly;

/** GtkModelButton is a button class that can use a #GAction as its model. */
export interface GtkModelButtonProps extends GtkButtonProps, GtkActionableProps, GtkActivatableProps, GtkBuildableProps {
    /**
     * The state of the button.
     * @since 3.16
     * @default FALSE
     */
    active?: boolean;
    /**
     * Whether to render the button contents centered instead of left-aligned.
     * @since 3.16
     * @default FALSE
     */
    centered?: boolean;
    /**
     * A #GIcon that will be used if iconic appearance for the button is desired.
     * @since 3.16
     */
    icon?: Gio.Icon;
    /**
     * If this property is set, the button will show an icon if one is set.
     * @since 3.16
     * @default FALSE
     */
    iconic?: boolean;
    /**
     * Whether to show the submenu indicator at the opposite side than normal.
     * @since 3.16
     * @default FALSE
     */
    inverted?: boolean;
    /**
     * The name of a submenu to open when the button is activated.
     * @since 3.16
     * @default NULL
     */
    'menu-name'?: string;
    /**
     * Specifies whether the button is a plain, check or radio button.
     * @since 3.16
     * @default GTK_BUTTON_ROLE_NORMAL
     */
    role?: GtkButtonRoleNick | Gtk.ButtonRole;
    /**
     * The label for the button.
     * @since 3.16
     */
    text?: string;
    /**
     * If %TRUE, XML tags in the text of the button are interpreted as by pango_parse_markup() to format the enclosed spans of text.
     * @since 3.24
     * @default FALSE
     */
    'use-markup'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkModelButtonConstructOnly = GtkButtonConstructOnly | GtkActionableConstructOnly | GtkActivatableConstructOnly | GtkBuildableConstructOnly;

/** The #GtkNotebook widget is a #GtkContainer whose children are pages that can be switched between using tab labels along one edge. */
export interface GtkNotebookProps extends GtkContainerProps, GtkBuildableProps {
    /** @default FALSE */
    'enable-popup'?: boolean;
    /**
     * Group name for tab drag and drop.
     * @since 2.24
     * @default NULL
     */
    'group-name'?: string | null;
    /** @default -1 */
    page?: number;
    /** @default FALSE */
    scrollable?: boolean;
    /** @default TRUE */
    'show-border'?: boolean;
    /** @default TRUE */
    'show-tabs'?: boolean;
    /** @default GTK_POS_TOP */
    'tab-pos'?: GtkPositionTypeNick | Gtk.PositionType;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkNotebookConstructOnly = GtkContainerConstructOnly | GtkBuildableConstructOnly;

/** GtkOffscreenWindow is strictly intended to be used for obtaining snapshots of widgets that are not part of a normal widget hierarchy. */
export interface GtkOffscreenWindowProps extends GtkWindowProps, GtkBuildableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkOffscreenWindowConstructOnly = GtkWindowConstructOnly | GtkBuildableConstructOnly;

/** The #GtkOrientable interface is implemented by all widgets that can be oriented horizontally or vertically. */
export interface GtkOrientableProps {
    /**
     * The orientation of the orientable.
     * @since 2.16
     * @default GTK_ORIENTATION_HORIZONTAL
     */
    orientation?: GtkOrientationNick | Gtk.Orientation;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkOrientableConstructOnly = never;

/** GtkOverlay is a container which contains a single main child, on top of which it can place “overlay” widgets. */
export interface GtkOverlayProps extends GtkBinProps, GtkBuildableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkOverlayConstructOnly = GtkBinConstructOnly | GtkBuildableConstructOnly;

/** #GtkPaned has two panes, arranged either horizontally or vertically. */
export interface GtkPanedProps extends GtkContainerProps, GtkBuildableProps, GtkOrientableProps {
    /** @default 0 */
    position?: number;
    /** @default FALSE */
    'position-set'?: boolean;
    /**
     * Setting this property to %TRUE indicates that the paned needs to provide stronger visual separation (e.g.
     * @since 3.16
     * @default FALSE
     */
    'wide-handle'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkPanedConstructOnly = GtkContainerConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

/** #GtkPlacesSidebar is a widget that displays a list of frequently-used places in the file system: the user’s home directory, the user’s bookmarks, and volumes and drives. */
export interface GtkPlacesSidebarProps extends GtkScrolledWindowProps, GtkBuildableProps {
    /** @default FALSE */
    'local-only'?: boolean;
    location?: Gio.File | null;
    /** @default GTK_PLACES_OPEN_NORMAL */
    'open-flags'?: number;
    /**
     * If :populate-all is %TRUE, the #GtkPlacesSidebar::populate-popup signal is also emitted for popovers.
     * @since 3.18
     * @default FALSE
     */
    'populate-all'?: boolean;
    /** @default FALSE */
    'show-connect-to-server'?: boolean;
    /** @default TRUE */
    'show-desktop'?: boolean;
    /** @default FALSE */
    'show-enter-location'?: boolean;
    /** @default FALSE */
    'show-other-locations'?: boolean;
    /** @default TRUE */
    'show-recent'?: boolean;
    /** @default FALSE */
    'show-starred-location'?: boolean;
    /** @default TRUE */
    'show-trash'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkPlacesSidebarConstructOnly = GtkScrolledWindowConstructOnly | GtkBuildableConstructOnly;

/** Together with #GtkSocket, #GtkPlug provides the ability to embed widgets from one process into another process in a fashion that is transparent to the user. */
export interface GtkPlugProps extends GtkWindowProps, GtkBuildableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkPlugConstructOnly = GtkWindowConstructOnly | GtkBuildableConstructOnly;

/** GtkPopover is a bubble-like context window, primarily meant to provide context-dependent information or options. */
export interface GtkPopoverProps extends GtkBinProps, GtkBuildableProps {
    /**
     * Sets a constraint for the popover position.
     * @since 3.20
     * @default GTK_POPOVER_CONSTRAINT_WINDOW
     */
    'constrain-to'?: GtkPopoverConstraintNick | Gtk.PopoverConstraint;
    /**
     * Sets whether the popover is modal (so other elements in the window do not receive input while the popover is visible).
     * @since 3.12
     * @default TRUE
     */
    modal?: boolean;
    /**
     * Marks a specific rectangle to be pointed.
     * @since 3.12
     */
    'pointing-to'?: Gdk.Rectangle;
    /**
     * Sets the preferred position of the popover.
     * @since 3.12
     * @default GTK_POS_TOP
     */
    position?: GtkPositionTypeNick | Gtk.PositionType;
    /**
     * Sets the attached widget.
     * @since 3.12
     */
    'relative-to'?: Gtk.Widget;
    /**
     * Whether show/hide transitions are enabled for this popover.
     * @since 3.16
     * @default TRUE
     * @deprecated since 3.22: You can show or hide the popover without transitions using gtk_widget_show() and gtk_widget_hide() while gtk_popover_popup() and gtk_popover_popdown() will use transitions.
     */
    'transitions-enabled'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkPopoverConstructOnly = GtkBinConstructOnly | GtkBuildableConstructOnly;

/** GtkPopoverMenu is a subclass of #GtkPopover that treats its children like menus and allows switching between them. */
export interface GtkPopoverMenuProps extends GtkPopoverProps, GtkBuildableProps {
    /** @default NULL */
    'visible-submenu'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkPopoverMenuConstructOnly = GtkPopoverConstructOnly | GtkBuildableConstructOnly;

/** The #GtkProgressBar is typically used to display the progress of a long running operation. */
export interface GtkProgressBarProps extends GtkWidgetProps, GtkBuildableProps, GtkOrientableProps {
    /**
     * The preferred place to ellipsize the string, if the progress bar does not have enough room to display the entire string, specified as a #PangoEllipsizeMode.
     * @since 2.6
     * @default PANGO_ELLIPSIZE_NONE
     */
    ellipsize?: PangoEllipsizeModeNick | Pango.EllipsizeMode;
    /** @default 0.000000 */
    fraction?: number;
    /** @default FALSE */
    inverted?: boolean;
    /** @default 0.100000 */
    'pulse-step'?: number;
    /**
     * Sets whether the progress bar will show a text in addition to the bar itself.
     * @since 3.0
     * @default FALSE
     */
    'show-text'?: boolean;
    /** @default NULL */
    text?: string | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkProgressBarConstructOnly = GtkWidgetConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

/** A single radio button performs the same basic function as a #GtkCheckButton, as its position in the object hierarchy reflects. */
export interface GtkRadioButtonProps extends GtkCheckButtonProps, GtkActionableProps, GtkActivatableProps, GtkBuildableProps {
    /** Sets a new group for a radio button. */
    group?: Gtk.RadioButton;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkRadioButtonConstructOnly = GtkCheckButtonConstructOnly | GtkActionableConstructOnly | GtkActivatableConstructOnly | GtkBuildableConstructOnly;

/** A radio menu item is a check menu item that belongs to a group. */
export interface GtkRadioMenuItemProps extends GtkCheckMenuItemProps, GtkActionableProps, GtkActivatableProps, GtkBuildableProps {
    /**
     * The radio menu item whose group this widget belongs to.
     * @since 2.8
     */
    group?: Gtk.RadioMenuItem;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkRadioMenuItemConstructOnly = GtkCheckMenuItemConstructOnly | GtkActionableConstructOnly | GtkActivatableConstructOnly | GtkBuildableConstructOnly;

/** A #GtkRadioToolButton is a #GtkToolItem that contains a radio button, that is, a button that is part of a group of toggle buttons where only one button can be active at a time. */
export interface GtkRadioToolButtonProps extends GtkToggleToolButtonProps, GtkActionableProps, GtkActivatableProps, GtkBuildableProps {
    /**
     * Sets a new group for a radio tool button.
     * @since 2.4
     */
    group?: Gtk.RadioToolButton;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkRadioToolButtonConstructOnly = GtkToggleToolButtonConstructOnly | GtkActionableConstructOnly | GtkActivatableConstructOnly | GtkBuildableConstructOnly;

/** #GtkRange is the common base class for widgets which visualize an adjustment, e.g #GtkScale or #GtkScrollbar. */
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
    /** @default GTK_SENSITIVITY_AUTO */
    'upper-stepper-sensitivity'?: GtkSensitivityTypeNick | Gtk.SensitivityType;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkRangeConstructOnly = GtkWidgetConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

/** #GtkRecentChooser is an interface that can be implemented by widgets displaying the list of recently used files. */
export interface GtkRecentChooserProps {
    /**
     * The #GtkRecentFilter object to be used when displaying the recently used resources.
     * @since 2.10
     */
    filter?: Gtk.RecentFilter;
    /**
     * The maximum number of recently used resources to be displayed, or -1 to display all items.
     * @since 2.10
     * @default 50
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
export type GtkRecentChooserConstructOnly = 'recent-manager';

/** #GtkRecentChooserDialog is a dialog box suitable for displaying the recently used documents. */
export interface GtkRecentChooserDialogProps extends GtkDialogProps, GtkBuildableProps, GtkRecentChooserProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkRecentChooserDialogConstructOnly = GtkDialogConstructOnly | GtkBuildableConstructOnly | GtkRecentChooserConstructOnly;

/** #GtkRecentChooserMenu is a widget suitable for displaying recently used files inside a menu. */
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

/** #GtkRecentChooserWidget is a widget suitable for selecting recently used files. */
export interface GtkRecentChooserWidgetProps extends GtkBoxProps, GtkBuildableProps, GtkOrientableProps, GtkRecentChooserProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkRecentChooserWidgetConstructOnly = GtkBoxConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly | GtkRecentChooserConstructOnly;

/** The GtkRevealer widget is a container which animates the transition of its child from invisible to visible. */
export interface GtkRevealerProps extends GtkBinProps, GtkBuildableProps {
    /** @default FALSE */
    'reveal-child'?: boolean;
    /** @default 250 */
    'transition-duration'?: number;
    /** @default GTK_REVEALER_TRANSITION_TYPE_SLIDE_DOWN */
    'transition-type'?: GtkRevealerTransitionTypeNick | Gtk.RevealerTransitionType;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkRevealerConstructOnly = GtkBinConstructOnly | GtkBuildableConstructOnly;

/** A GtkScale is a slider control used to select a numeric value. */
export interface GtkScaleProps extends GtkRangeProps, GtkBuildableProps, GtkOrientableProps {
    /** @default 1 */
    digits?: number;
    /** @default TRUE */
    'draw-value'?: boolean;
    /** @default TRUE */
    'has-origin'?: boolean;
    /** @default GTK_POS_TOP */
    'value-pos'?: GtkPositionTypeNick | Gtk.PositionType;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkScaleConstructOnly = GtkRangeConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

/** #GtkScaleButton provides a button which pops up a scale widget. */
export interface GtkScaleButtonProps extends GtkButtonProps, GtkActionableProps, GtkActivatableProps, GtkBuildableProps, GtkOrientableProps {
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
export type GtkScaleButtonConstructOnly = GtkButtonConstructOnly | GtkActionableConstructOnly | GtkActivatableConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

/** #GtkScrollable is an interface that is implemented by widgets with native scrolling ability. */
export interface GtkScrollableProps {
    /**
     * Horizontal #GtkAdjustment of the scrollable widget.
     * @since 3.0
     */
    hadjustment?: Gtk.Adjustment;
    /**
     * Determines whether horizontal scrolling should start once the scrollable widget is allocated less than its minimum width or less than its natural width.
     * @since 3.0
     * @default GTK_SCROLL_MINIMUM
     */
    'hscroll-policy'?: GtkScrollablePolicyNick | Gtk.ScrollablePolicy;
    /**
     * Verical #GtkAdjustment of the scrollable widget.
     * @since 3.0
     */
    vadjustment?: Gtk.Adjustment;
    /**
     * Determines whether vertical scrolling should start once the scrollable widget is allocated less than its minimum height or less than its natural height.
     * @since 3.0
     * @default GTK_SCROLL_MINIMUM
     */
    'vscroll-policy'?: GtkScrollablePolicyNick | Gtk.ScrollablePolicy;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkScrollableConstructOnly = never;

/** The #GtkScrollbar widget is a horizontal or vertical scrollbar, depending on the value of the #GtkOrientable:orientation property. */
export interface GtkScrollbarProps extends GtkRangeProps, GtkBuildableProps, GtkOrientableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkScrollbarConstructOnly = GtkRangeConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

/** GtkScrolledWindow is a container that accepts a single child widget and makes that child scrollable using either internally added scrollbars or externally associated adjustments. */
export interface GtkScrolledWindowProps extends GtkBinProps, GtkBuildableProps {
    hadjustment?: Gtk.Adjustment;
    /** @default GTK_POLICY_AUTOMATIC */
    'hscrollbar-policy'?: GtkPolicyTypeNick | Gtk.PolicyType;
    /**
     * Whether kinetic scrolling is enabled or not.
     * @since 3.4
     * @default TRUE
     */
    'kinetic-scrolling'?: boolean;
    /**
     * The maximum content height of @scrolled_window, or -1 if not set.
     * @since 3.22
     * @default -1
     */
    'max-content-height'?: number;
    /**
     * The maximum content width of @scrolled_window, or -1 if not set.
     * @since 3.22
     * @default -1
     */
    'max-content-width'?: number;
    /**
     * The minimum content height of @scrolled_window, or -1 if not set.
     * @since 3.0
     * @default -1
     */
    'min-content-height'?: number;
    /**
     * The minimum content width of @scrolled_window, or -1 if not set.
     * @since 3.0
     * @default -1
     */
    'min-content-width'?: number;
    /**
     * Whether overlay scrolling is enabled or not.
     * @since 3.16
     * @default TRUE
     */
    'overlay-scrolling'?: boolean;
    /**
     * Whether the natural height of the child should be calculated and propagated through the scrolled window’s requested natural height.
     * @since 3.22
     * @default FALSE
     */
    'propagate-natural-height'?: boolean;
    /**
     * Whether the natural width of the child should be calculated and propagated through the scrolled window’s requested natural width.
     * @since 3.22
     * @default FALSE
     */
    'propagate-natural-width'?: boolean;
    /** @default GTK_SHADOW_NONE */
    'shadow-type'?: GtkShadowTypeNick | Gtk.ShadowType;
    vadjustment?: Gtk.Adjustment;
    /** @default GTK_POLICY_AUTOMATIC */
    'vscrollbar-policy'?: GtkPolicyTypeNick | Gtk.PolicyType;
    /** @default GTK_CORNER_TOP_LEFT */
    'window-placement'?: GtkCornerTypeNick | Gtk.CornerType;
    /**
     * Whether "window-placement" should be used to determine the location of the contents with respect to the scrollbars.
     * @since 2.10
     * @default TRUE
     * @deprecated since 3.10: This value is ignored and #GtkScrolledWindow:window-placement value is always honored.
     */
    'window-placement-set'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkScrolledWindowConstructOnly = GtkBinConstructOnly | GtkBuildableConstructOnly;

/** #GtkSearchBar is a container made to have a search entry (possibly with additional connex widgets, such as drop-down menus, or buttons) built-in. */
export interface GtkSearchBarProps extends GtkBinProps, GtkBuildableProps {
    /** @default FALSE */
    'search-mode-enabled'?: boolean;
    /** @default FALSE */
    'show-close-button'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSearchBarConstructOnly = GtkBinConstructOnly | GtkBuildableConstructOnly;

/** #GtkSearchEntry is a subclass of #GtkEntry that has been tailored for use as a search entry. */
export interface GtkSearchEntryProps extends GtkEntryProps, GtkBuildableProps, GtkCellEditableProps, GtkEditableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSearchEntryConstructOnly = GtkEntryConstructOnly | GtkBuildableConstructOnly | GtkCellEditableConstructOnly | GtkEditableConstructOnly;

/** GtkSeparator is a horizontal or vertical separator widget, depending on the value of the #GtkOrientable:orientation property, used to group the widgets within a window. */
export interface GtkSeparatorProps extends GtkWidgetProps, GtkBuildableProps, GtkOrientableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSeparatorConstructOnly = GtkWidgetConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

/** The #GtkSeparatorMenuItem is a separator used to group items within a menu. */
export interface GtkSeparatorMenuItemProps extends GtkMenuItemProps, GtkActionableProps, GtkActivatableProps, GtkBuildableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSeparatorMenuItemConstructOnly = GtkMenuItemConstructOnly | GtkActionableConstructOnly | GtkActivatableConstructOnly | GtkBuildableConstructOnly;

/** A #GtkSeparatorToolItem is a #GtkToolItem that separates groups of other #GtkToolItems. */
export interface GtkSeparatorToolItemProps extends GtkToolItemProps, GtkActivatableProps, GtkBuildableProps {
    /** @default TRUE */
    draw?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSeparatorToolItemConstructOnly = GtkToolItemConstructOnly | GtkActivatableConstructOnly | GtkBuildableConstructOnly;

/** #GtkShortcutLabel is a widget that represents a single keyboard shortcut or gesture in the user interface. */
export interface GtkShortcutLabelProps extends GtkBoxProps, GtkBuildableProps, GtkOrientableProps {
    /**
     * The accelerator that @self displays.
     * @since 3.22
     * @default NULL
     */
    accelerator?: string | null;
    /**
     * The text that is displayed when no accelerator is set.
     * @since 3.22
     * @default NULL
     */
    'disabled-text'?: string | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkShortcutLabelConstructOnly = GtkBoxConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

/** A GtkShortcutsGroup represents a group of related keyboard shortcuts or gestures. */
export interface GtkShortcutsGroupProps extends GtkBoxProps, GtkBuildableProps, GtkOrientableProps {
    /** The size group for the accelerator portion of shortcuts in this group. */
    'accel-size-group'?: Gtk.SizeGroup;
    /** The title for this group of shortcuts. */
    title?: string;
    /** The size group for the textual portion of shortcuts in this group. */
    'title-size-group'?: Gtk.SizeGroup;
    /**
     * An optional view that the shortcuts in this group are relevant for.
     * @default NULL
     */
    view?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkShortcutsGroupConstructOnly = GtkBoxConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

/** A GtkShortcutsSection collects all the keyboard shortcuts and gestures for a major application mode. */
export interface GtkShortcutsSectionProps extends GtkBoxProps, GtkBuildableProps, GtkOrientableProps {
    /**
     * The maximum number of lines to allow per column.
     * @default 15
     */
    'max-height'?: number;
    /**
     * A unique name to identify this section among the sections added to the GtkShortcutsWindow.
     * @default NULL
     */
    'section-name'?: string;
    /**
     * The string to show in the section selector of the GtkShortcutsWindow for this section.
     * @default NULL
     */
    title?: string;
    /**
     * A view name to filter the groups in this section by.
     * @default NULL
     */
    'view-name'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkShortcutsSectionConstructOnly = GtkBoxConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

/** A GtkShortcutsShortcut represents a single keyboard shortcut or gesture with a short text. */
export interface GtkShortcutsShortcutProps extends GtkBoxProps, GtkBuildableProps, GtkOrientableProps {
    /** The size group for the accelerator portion of this shortcut. */
    'accel-size-group'?: Gtk.SizeGroup;
    /**
     * The accelerator(s) represented by this object.
     * @default NULL
     */
    accelerator?: string;
    /**
     * A detailed action name.
     * @since 3.22
     * @default NULL
     */
    'action-name'?: string;
    /**
     * The text direction for which this shortcut is active.
     * @default GTK_TEXT_DIR_NONE
     */
    direction?: GtkTextDirectionNick | Gtk.TextDirection;
    /** An icon to represent the shortcut or gesture. */
    icon?: Gio.Icon;
    /**
     * %TRUE if an icon has been set.
     * @default FALSE
     */
    'icon-set'?: boolean;
    /**
     * The type of shortcut that is represented.
     * @default GTK_SHORTCUT_ACCELERATOR
     */
    'shortcut-type'?: GtkShortcutTypeNick | Gtk.ShortcutType;
    /** The subtitle for the shortcut or gesture. */
    subtitle?: string;
    /**
     * %TRUE if a subtitle has been set.
     * @default FALSE
     */
    'subtitle-set'?: boolean;
    /** The textual description for the shortcut or gesture represented by this object. */
    title?: string;
    /** The size group for the textual portion of this shortcut. */
    'title-size-group'?: Gtk.SizeGroup;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkShortcutsShortcutConstructOnly = GtkBoxConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

/** A GtkShortcutsWindow shows brief information about the keyboard shortcuts and gestures of an application. */
export interface GtkShortcutsWindowProps extends GtkWindowProps, GtkBuildableProps {
    /**
     * The name of the section to show.
     * @default internal-search
     */
    'section-name'?: string;
    /**
     * The view name by which to filter the contents.
     * @default NULL
     */
    'view-name'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkShortcutsWindowConstructOnly = GtkWindowConstructOnly | GtkBuildableConstructOnly;

/** Together with #GtkPlug, #GtkSocket provides the ability to embed widgets from one process into another process in a fashion that is transparent to the user. */
export interface GtkSocketProps extends GtkContainerProps, GtkBuildableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSocketConstructOnly = GtkContainerConstructOnly | GtkBuildableConstructOnly;

/** A #GtkSpinButton is an ideal way to allow the user to set the value of some attribute. */
export interface GtkSpinButtonProps extends GtkEntryProps, GtkBuildableProps, GtkCellEditableProps, GtkEditableProps, GtkOrientableProps {
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
export type GtkSpinButtonConstructOnly = GtkEntryConstructOnly | GtkBuildableConstructOnly | GtkCellEditableConstructOnly | GtkEditableConstructOnly | GtkOrientableConstructOnly;

/** A GtkSpinner widget displays an icon-size spinning animation. */
export interface GtkSpinnerProps extends GtkWidgetProps, GtkBuildableProps {
    /** @default FALSE */
    active?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSpinnerConstructOnly = GtkWidgetConstructOnly | GtkBuildableConstructOnly;

/** The GtkStack widget is a container which only shows one of its children at a time. */
export interface GtkStackProps extends GtkContainerProps, GtkBuildableProps {
    /**
     * %TRUE if the stack allocates the same width for all children.
     * @since 3.16
     * @default TRUE
     */
    hhomogeneous?: boolean;
    /** @default TRUE */
    homogeneous?: boolean;
    /** @default FALSE */
    'interpolate-size'?: boolean;
    /** @default 200 */
    'transition-duration'?: number;
    /** @default GTK_STACK_TRANSITION_TYPE_NONE */
    'transition-type'?: GtkStackTransitionTypeNick | Gtk.StackTransitionType;
    /**
     * %TRUE if the stack allocates the same height for all children.
     * @since 3.16
     * @default TRUE
     */
    vhomogeneous?: boolean;
    'visible-child'?: Gtk.Widget | null;
    /** @default NULL */
    'visible-child-name'?: string | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkStackConstructOnly = GtkContainerConstructOnly | GtkBuildableConstructOnly;

/** A GtkStackSidebar enables you to quickly and easily provide a consistent "sidebar" object for your user interface. */
export interface GtkStackSidebarProps extends GtkBinProps, GtkBuildableProps {
    stack?: Gtk.Stack | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkStackSidebarConstructOnly = GtkBinConstructOnly | GtkBuildableConstructOnly;

/** The GtkStackSwitcher widget acts as a controller for a #GtkStack; it shows a row of buttons to switch between the various pages of the associated stack widget. */
export interface GtkStackSwitcherProps extends GtkBoxProps, GtkBuildableProps, GtkOrientableProps {
    /**
     * Use the "icon-size" property to change the size of the image displayed when a #GtkStackSwitcher is displaying icons.
     * @since 3.20
     * @default 1
     */
    'icon-size'?: number;
    stack?: Gtk.Stack | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkStackSwitcherConstructOnly = GtkBoxConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

/** A #GtkStatusbar is usually placed along the bottom of an application's main #GtkWindow. */
export interface GtkStatusbarProps extends GtkBoxProps, GtkBuildableProps, GtkOrientableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkStatusbarConstructOnly = GtkBoxConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

/** #GtkSwitch is a widget that has two states: on or off. */
export interface GtkSwitchProps extends GtkWidgetProps, GtkActionableProps, GtkActivatableProps, GtkBuildableProps {
    /**
     * Whether the #GtkSwitch widget is in its on or off state.
     * @default FALSE
     */
    active?: boolean;
    /**
     * The backend state that is controlled by the switch.
     * @since 3.14
     * @default FALSE
     */
    state?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkSwitchConstructOnly = GtkWidgetConstructOnly | GtkActionableConstructOnly | GtkActivatableConstructOnly | GtkBuildableConstructOnly;

/** The #GtkTable functions allow the programmer to arrange widgets in rows and columns, making it easy to align many widgets next to each other, horizontally and vertically. */
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

/** A #GtkTearoffMenuItem is a special #GtkMenuItem which is used to tear off and reattach its menu. */
export interface GtkTearoffMenuItemProps extends GtkMenuItemProps, GtkActionableProps, GtkActivatableProps, GtkBuildableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkTearoffMenuItemConstructOnly = GtkMenuItemConstructOnly | GtkActionableConstructOnly | GtkActivatableConstructOnly | GtkBuildableConstructOnly;

/** You may wish to begin by reading the [text widget conceptual overview](TextWidget.html) which gives an overview of all the objects and data types related to the text widget and how they work together. */
export interface GtkTextViewProps extends GtkContainerProps, GtkBuildableProps, GtkScrollableProps {
    /** @default TRUE */
    'accepts-tab'?: boolean;
    /**
     * The bottom margin for text in the text view.
     * @since 3.18
     * @default 0
     */
    'bottom-margin'?: number;
    buffer?: Gtk.TextBuffer;
    /** @default TRUE */
    'cursor-visible'?: boolean;
    /** @default TRUE */
    editable?: boolean;
    /**
     * Which IM (input method) module should be used for this text_view.
     * @since 2.16
     * @default NULL
     */
    'im-module'?: string;
    /** @default 0 */
    indent?: number;
    /**
     * Additional hints (beyond #GtkTextView:input-purpose) that allow input methods to fine-tune their behaviour.
     * @since 3.6
     * @default GTK_INPUT_HINT_NONE
     */
    'input-hints'?: number;
    /**
     * The purpose of this text field.
     * @since 3.6
     * @default GTK_INPUT_PURPOSE_FREE_FORM
     */
    'input-purpose'?: GtkInputPurposeNick | Gtk.InputPurpose;
    /** @default GTK_JUSTIFY_LEFT */
    justification?: GtkJustificationNick | Gtk.Justification;
    /**
     * The default left margin for text in the text view.
     * @default 0
     */
    'left-margin'?: number;
    /** @default FALSE */
    monospace?: boolean;
    /** @default FALSE */
    overwrite?: boolean;
    /** @default 0 */
    'pixels-above-lines'?: number;
    /** @default 0 */
    'pixels-below-lines'?: number;
    /** @default 0 */
    'pixels-inside-wrap'?: number;
    /**
     * If :populate-all is %TRUE, the #GtkTextView::populate-popup signal is also emitted for touch popups.
     * @since 3.8
     * @default FALSE
     */
    'populate-all'?: boolean;
    /**
     * The default right margin for text in the text view.
     * @default 0
     */
    'right-margin'?: number;
    tabs?: Pango.TabArray | null;
    /**
     * The top margin for text in the text view.
     * @since 3.18
     * @default 0
     */
    'top-margin'?: number;
    /** @default GTK_WRAP_NONE */
    'wrap-mode'?: GtkWrapModeNick | Gtk.WrapMode;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkTextViewConstructOnly = GtkContainerConstructOnly | GtkBuildableConstructOnly | GtkScrollableConstructOnly;

/** A #GtkToggleButton is a #GtkButton which will remain “pressed-in” when clicked. */
export interface GtkToggleButtonProps extends GtkButtonProps, GtkActionableProps, GtkActivatableProps, GtkBuildableProps {
    /** @default FALSE */
    active?: boolean;
    /** @default FALSE */
    'draw-indicator'?: boolean;
    /** @default FALSE */
    inconsistent?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkToggleButtonConstructOnly = GtkButtonConstructOnly | GtkActionableConstructOnly | GtkActivatableConstructOnly | GtkBuildableConstructOnly;

/** A #GtkToggleToolButton is a #GtkToolItem that contains a toggle button. */
export interface GtkToggleToolButtonProps extends GtkToolButtonProps, GtkActionableProps, GtkActivatableProps, GtkBuildableProps {
    /**
     * If the toggle tool button should be pressed in.
     * @since 2.8
     * @default FALSE
     */
    active?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkToggleToolButtonConstructOnly = GtkToolButtonConstructOnly | GtkActionableConstructOnly | GtkActivatableConstructOnly | GtkBuildableConstructOnly;

/** #GtkToolButtons are #GtkToolItems containing buttons. */
export interface GtkToolButtonProps extends GtkToolItemProps, GtkActionableProps, GtkActivatableProps, GtkBuildableProps {
    /**
     * The name of the themed icon displayed on the item.
     * @since 2.8
     * @default NULL
     */
    'icon-name'?: string | null;
    'icon-widget'?: Gtk.Widget | null;
    /** @default NULL */
    label?: string | null;
    'label-widget'?: Gtk.Widget | null;
    /**
     * @default NULL
     * @deprecated since 3.10: Use #GtkToolButton:icon-name instead.
     */
    'stock-id'?: string;
    /** @default FALSE */
    'use-underline'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkToolButtonConstructOnly = GtkToolItemConstructOnly | GtkActionableConstructOnly | GtkActivatableConstructOnly | GtkBuildableConstructOnly;

/** #GtkToolItems are widgets that can appear on a toolbar. */
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

/** A #GtkToolItemGroup is used together with #GtkToolPalette to add #GtkToolItems to a palette like container with different categories and drag and drop support. */
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

/** A #GtkToolPalette allows you to add #GtkToolItems to a palette-like container with different categories and drag and drop support. */
export interface GtkToolPaletteProps extends GtkContainerProps, GtkBuildableProps, GtkOrientableProps, GtkScrollableProps {
    /**
     * The size of the icons in a tool palette.
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
export type GtkToolPaletteConstructOnly = GtkContainerConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly | GtkScrollableConstructOnly;

/** The #GtkToolShell interface allows container widgets to provide additional information when embedding #GtkToolItem widgets. */
export interface GtkToolShellProps extends GtkWidgetProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkToolShellConstructOnly = GtkWidgetConstructOnly;

/** A toolbar is created with a call to gtk_toolbar_new(). */
export interface GtkToolbarProps extends GtkContainerProps, GtkBuildableProps, GtkOrientableProps, GtkToolShellProps {
    /**
     * The size of the icons in a toolbar is normally determined by the toolbar-icon-size setting.
     * @since 2.10
     * @default GTK_ICON_SIZE_LARGE_TOOLBAR
     */
    'icon-size'?: GtkIconSizeNick | Gtk.IconSize;
    /**
     * Is %TRUE if the icon-size property has been set.
     * @since 2.10
     * @default FALSE
     */
    'icon-size-set'?: boolean;
    /** @default TRUE */
    'show-arrow'?: boolean;
    /** @default GTK_TOOLBAR_BOTH_HORIZ */
    'toolbar-style'?: GtkToolbarStyleNick | Gtk.ToolbarStyle;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkToolbarConstructOnly = GtkContainerConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly | GtkToolShellConstructOnly;

/** Widget that displays any object that implements the #GtkTreeModel interface. */
export interface GtkTreeViewProps extends GtkContainerProps, GtkBuildableProps, GtkScrollableProps {
    /**
     * The activate-on-single-click property specifies whether the "row-activated" signal will be emitted after a single click.
     * @since 3.8
     * @default FALSE
     */
    'activate-on-single-click'?: boolean;
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
    /** @default TRUE */
    'headers-clickable'?: boolean;
    /** @default TRUE */
    'headers-visible'?: boolean;
    /**
     * Enables or disables the hover expansion mode of @tree_view.
     * @since 2.6
     * @default FALSE
     */
    'hover-expand'?: boolean;
    /**
     * Enables or disables the hover selection mode of @tree_view.
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
    model?: Gtk.TreeModel | null;
    /** @default FALSE */
    reorderable?: boolean;
    /** @default FALSE */
    'rubber-banding'?: boolean;
    /**
     * Sets a hint to the theme to draw rows in alternating colors.
     * @default FALSE
     * @deprecated since 3.14: The theme is responsible for drawing rows using zebra striping
     */
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
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkTreeViewConstructOnly = GtkContainerConstructOnly | GtkBuildableConstructOnly | GtkScrollableConstructOnly;

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
export interface GtkViewportProps extends GtkBinProps, GtkBuildableProps, GtkScrollableProps {
    /** @default GTK_SHADOW_IN */
    'shadow-type'?: GtkShadowTypeNick | Gtk.ShadowType;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkViewportConstructOnly = GtkBinConstructOnly | GtkBuildableConstructOnly | GtkScrollableConstructOnly;

/** #GtkVolumeButton is a subclass of #GtkScaleButton that has been tailored for use as a volume control widget with suitable icons, tooltips and accessible labels. */
export interface GtkVolumeButtonProps extends GtkScaleButtonProps, GtkActionableProps, GtkActivatableProps, GtkBuildableProps, GtkOrientableProps {
    /**
     * Whether to use symbolic icons as the icons.
     * @since 3.0
     * @default TRUE
     */
    'use-symbolic'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkVolumeButtonConstructOnly = GtkScaleButtonConstructOnly | GtkActionableConstructOnly | GtkActivatableConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

/** GtkWidget is the base class all widgets in GTK+ derive from. */
export interface GtkWidgetProps extends GtkBuildableProps {
    /** @default FALSE */
    'app-paintable'?: boolean;
    /** @default FALSE */
    'can-default'?: boolean;
    /** @default FALSE */
    'can-focus'?: boolean;
    /**
     * Whether the widget is double buffered.
     * @since 2.18
     * @default TRUE
     * @deprecated since 3.14: Widgets should not use this property.
     */
    'double-buffered'?: boolean;
    /** @default GDK_STRUCTURE_MASK */
    events?: number;
    /**
     * Whether to expand in both directions.
     * @since 3.0
     * @default FALSE
     */
    expand?: boolean;
    /**
     * Whether the widget should grab focus when it is clicked with the mouse.
     * @since 3.20
     * @default TRUE
     */
    'focus-on-click'?: boolean;
    /**
     * How to distribute horizontal space if widget gets extra space, see #GtkAlign
     * @since 3.0
     * @default GTK_ALIGN_FILL
     */
    halign?: GtkAlignNick | Gtk.Align;
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
    /**
     * Whether to expand horizontally.
     * @since 3.0
     * @default FALSE
     */
    hexpand?: boolean;
    /**
     * Whether to use the #GtkWidget:hexpand property.
     * @since 3.0
     * @default FALSE
     */
    'hexpand-set'?: boolean;
    /** @default FALSE */
    'is-focus'?: boolean;
    /**
     * Sets all four sides' margin at once.
     * @since 3.0
     * @default 0
     */
    margin?: number;
    /**
     * Margin on bottom side of widget.
     * @since 3.0
     * @default 0
     */
    'margin-bottom'?: number;
    /**
     * Margin on end of widget, horizontally.
     * @since 3.12
     * @default 0
     */
    'margin-end'?: number;
    /**
     * Margin on left side of widget.
     * @since 3.0
     * @default 0
     * @deprecated since 3.12: Use #GtkWidget:margin-start instead.
     */
    'margin-left'?: number;
    /**
     * Margin on right side of widget.
     * @since 3.0
     * @default 0
     * @deprecated since 3.12: Use #GtkWidget:margin-end instead.
     */
    'margin-right'?: number;
    /**
     * Margin on start of widget, horizontally.
     * @since 3.12
     * @default 0
     */
    'margin-start'?: number;
    /**
     * Margin on top side of widget.
     * @since 3.0
     * @default 0
     */
    'margin-top'?: number;
    /** @default NULL */
    name?: string;
    /** @default FALSE */
    'no-show-all'?: boolean;
    /**
     * The requested opacity of the widget.
     * @since 3.8
     * @default 1.000000
     */
    opacity?: number;
    parent?: Gtk.Container | null;
    /** @default FALSE */
    'receives-default'?: boolean;
    /** @default TRUE */
    sensitive?: boolean;
    /**
     * The style of the widget, which contains information about how it will look (colors, etc).
     * @deprecated Use #GtkStyleContext instead
     */
    style?: Gtk.Style;
    /**
     * Sets the text of tooltip to be the given string, which is marked up with the [Pango text markup language][PangoMarkupFormat].
     * @since 2.12
     * @default NULL
     */
    'tooltip-markup'?: string | null;
    /**
     * Sets the text of tooltip to be the given string.
     * @since 2.12
     * @default NULL
     */
    'tooltip-text'?: string | null;
    /**
     * How to distribute vertical space if widget gets extra space, see #GtkAlign
     * @since 3.0
     * @default GTK_ALIGN_FILL
     */
    valign?: GtkAlignNick | Gtk.Align;
    /**
     * Whether to expand vertically.
     * @since 3.0
     * @default FALSE
     */
    vexpand?: boolean;
    /**
     * Whether to use the #GtkWidget:vexpand property.
     * @since 3.0
     * @default FALSE
     */
    'vexpand-set'?: boolean;
    /** @default FALSE */
    visible?: boolean;
    /** @default -1 */
    'width-request'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GtkWidgetConstructOnly = GtkBuildableConstructOnly;

/** A GtkWindow is a toplevel window which can contain other widgets. */
export interface GtkWindowProps extends GtkBinProps, GtkBuildableProps {
    /**
     * Whether the window should receive the input focus.
     * @since 2.4
     * @default TRUE
     */
    'accept-focus'?: boolean;
    /**
     * The #GtkApplication associated with the window.
     * @since 3.0
     */
    application?: Gtk.Application | null;
    /**
     * The widget to which this window is attached.
     * @since 3.4
     */
    'attached-to'?: Gtk.Widget | null;
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
     * Whether 'focus rectangles' are currently visible in this window.
     * @since 2.20
     * @default TRUE
     */
    'focus-visible'?: boolean;
    /**
     * The window gravity of the window.
     * @since 2.4
     * @default GDK_GRAVITY_NORTH_WEST
     */
    gravity?: GdkGravityNick | Gdk.Gravity;
    /**
     * Whether the window has a corner resize grip.
     * @since 3.0
     * @default FALSE
     * @deprecated since 3.14: Resize grips have been removed.
     */
    'has-resize-grip'?: boolean;
    /**
     * Whether the titlebar should be hidden during maximization.
     * @since 3.4
     * @default FALSE
     */
    'hide-titlebar-when-maximized'?: boolean;
    icon?: GdkPixbuf.Pixbuf | null;
    /**
     * The :icon-name property specifies the name of the themed icon to use as the window icon.
     * @since 2.6
     * @default NULL
     */
    'icon-name'?: string | null;
    /**
     * Whether mnemonics are currently visible in this window.
     * @since 2.20
     * @default TRUE
     */
    'mnemonics-visible'?: boolean;
    /** @default FALSE */
    modal?: boolean;
    /** @default TRUE */
    resizable?: boolean;
    /** @default NULL */
    role?: string | null;
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
    title?: string | null;
    /**
     * The transient parent of the window.
     * @since 2.10
     */
    'transient-for'?: Gtk.Window | null;
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
    GtkAlignment: {
        class: Gtk.Alignment;
        props: GtkAlignmentProps;
        signals: Gtk.Alignment.SignalSignatures;
        constructOnly: GtkAlignmentConstructOnly;
        slotCandidates: {};
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
    GtkBox: {
        class: Gtk.Box;
        props: GtkBoxProps;
        signals: Gtk.Box.SignalSignatures;
        constructOnly: GtkBoxConstructOnly;
        slotCandidates: {
        'center': 'set_center_widget';
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
    GtkButtonBox: {
        class: Gtk.ButtonBox;
        props: GtkButtonBoxProps;
        signals: Gtk.ButtonBox.SignalSignatures;
        constructOnly: GtkButtonBoxConstructOnly;
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
    GtkComboBox: {
        class: Gtk.ComboBox;
        props: GtkComboBoxProps;
        signals: Gtk.ComboBox.SignalSignatures;
        constructOnly: GtkComboBoxConstructOnly;
        slotCandidates: {};
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
        slotCandidates: {};
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
    GtkGLArea: {
        class: Gtk.GLArea;
        props: GtkGLAreaProps;
        signals: Gtk.GLArea.SignalSignatures;
        constructOnly: GtkGLAreaConstructOnly;
        slotCandidates: {};
    };
    GtkGrid: {
        class: Gtk.Grid;
        props: GtkGridProps;
        signals: Gtk.Grid.SignalSignatures;
        constructOnly: GtkGridConstructOnly;
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
    GtkHeaderBar: {
        class: Gtk.HeaderBar;
        props: GtkHeaderBarProps;
        signals: Gtk.HeaderBar.SignalSignatures;
        constructOnly: GtkHeaderBarConstructOnly;
        slotCandidates: {
        'custom-title': 'set_custom_title';
        'end': 'pack_end';
        'start': 'pack_start';
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
        'header': 'set_header';
        };
    };
    GtkLockButton: {
        class: Gtk.LockButton;
        props: GtkLockButtonProps;
        signals: Gtk.LockButton.SignalSignatures;
        constructOnly: GtkLockButtonConstructOnly;
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
    GtkMenuButton: {
        class: Gtk.MenuButton;
        props: GtkMenuButtonProps;
        signals: Gtk.MenuButton.SignalSignatures;
        constructOnly: GtkMenuButtonConstructOnly;
        slotCandidates: {
        'align': 'set_align_widget';
        'popover': 'set_popover';
        'popup': 'set_popup';
        };
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
    GtkModelButton: {
        class: Gtk.ModelButton;
        props: GtkModelButtonProps;
        signals: Gtk.ModelButton.SignalSignatures;
        constructOnly: GtkModelButtonConstructOnly;
        slotCandidates: {};
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
    GtkOverlay: {
        class: Gtk.Overlay;
        props: GtkOverlayProps;
        signals: Gtk.Overlay.SignalSignatures;
        constructOnly: GtkOverlayConstructOnly;
        slotCandidates: {
        'overlay': 'add_overlay';
        };
    };
    GtkPaned: {
        class: Gtk.Paned;
        props: GtkPanedProps;
        signals: Gtk.Paned.SignalSignatures;
        constructOnly: GtkPanedConstructOnly;
        slotCandidates: {};
    };
    GtkPlacesSidebar: {
        class: Gtk.PlacesSidebar;
        props: GtkPlacesSidebarProps;
        signals: Gtk.PlacesSidebar.SignalSignatures;
        constructOnly: GtkPlacesSidebarConstructOnly;
        slotCandidates: {};
    };
    GtkPlug: {
        class: Gtk.Plug;
        props: GtkPlugProps;
        signals: Gtk.Plug.SignalSignatures;
        constructOnly: GtkPlugConstructOnly;
        slotCandidates: {};
    };
    GtkPopover: {
        class: Gtk.Popover;
        props: GtkPopoverProps;
        signals: Gtk.Popover.SignalSignatures;
        constructOnly: GtkPopoverConstructOnly;
        slotCandidates: {
        'default': 'set_default_widget';
        'relative-to': 'set_relative_to';
        };
    };
    GtkPopoverMenu: {
        class: Gtk.PopoverMenu;
        props: GtkPopoverMenuProps;
        signals: Gtk.PopoverMenu.SignalSignatures;
        constructOnly: GtkPopoverMenuConstructOnly;
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
    GtkRevealer: {
        class: Gtk.Revealer;
        props: GtkRevealerProps;
        signals: Gtk.Revealer.SignalSignatures;
        constructOnly: GtkRevealerConstructOnly;
        slotCandidates: {};
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
        'with-viewport': 'add_with_viewport';
        };
    };
    GtkSearchBar: {
        class: Gtk.SearchBar;
        props: GtkSearchBarProps;
        signals: Gtk.SearchBar.SignalSignatures;
        constructOnly: GtkSearchBarConstructOnly;
        slotCandidates: {};
    };
    GtkSearchEntry: {
        class: Gtk.SearchEntry;
        props: GtkSearchEntryProps;
        signals: Gtk.SearchEntry.SignalSignatures;
        constructOnly: GtkSearchEntryConstructOnly;
        slotCandidates: {};
    };
    GtkSeparator: {
        class: Gtk.Separator;
        props: GtkSeparatorProps;
        signals: Gtk.Separator.SignalSignatures;
        constructOnly: GtkSeparatorConstructOnly;
        slotCandidates: {};
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
        slotCandidates: {};
    };
    GtkShortcutsSection: {
        class: Gtk.ShortcutsSection;
        props: GtkShortcutsSectionProps;
        signals: Gtk.ShortcutsSection.SignalSignatures;
        constructOnly: GtkShortcutsSectionConstructOnly;
        slotCandidates: {};
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
    GtkStack: {
        class: Gtk.Stack;
        props: GtkStackProps;
        signals: Gtk.Stack.SignalSignatures;
        constructOnly: GtkStackConstructOnly;
        slotCandidates: {
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
    GtkSwitch: {
        class: Gtk.Switch;
        props: GtkSwitchProps;
        signals: Gtk.Switch.SignalSignatures;
        constructOnly: GtkSwitchConstructOnly;
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
        'attached-to': 'set_attached_to';
        'default': 'set_default';
        'focus': 'set_focus';
        'titlebar': 'set_titlebar';
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
