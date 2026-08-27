/**
 * The GIR-derived widget VOCABULARY for GimpUi-3.0.
 *
 * GENERATED — do not edit. Provenance: GimpUi-3.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface — prop(s) no TypeScript value satisfies: GimpUi.Dialog.help-func
 *
 * 65 concrete widgets, 69 declarations, 13 enum nick unions, 2 slot candidates.
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
import type Gegl from '@girs/gegl-0.4';
import type Gimp from '@girs/gimp-3.0';
import type GimpUi from './gimpui-3.0.js';
import type Gio from '@girs/gio-2.0';
import type Gtk from '@girs/gtk-3.0';
import type Pango from '@girs/pango-1.0';
import type { GtkActionableConstructOnly, GtkActionableProps, GtkActivatableConstructOnly, GtkActivatableProps, GtkBinConstructOnly, GtkBinProps, GtkBoxConstructOnly, GtkBoxProps, GtkBuildableConstructOnly, GtkBuildableProps, GtkButtonConstructOnly, GtkButtonProps, GtkCellEditableConstructOnly, GtkCellEditableProps, GtkCellLayoutConstructOnly, GtkCellLayoutProps, GtkComboBoxConstructOnly, GtkComboBoxProps, GtkContainerConstructOnly, GtkContainerProps, GtkDialogConstructOnly, GtkDialogProps, GtkDrawingAreaConstructOnly, GtkDrawingAreaProps, GtkEditableConstructOnly, GtkEditableProps, GtkEntryConstructOnly, GtkEntryProps, GtkFileChooserConstructOnly, GtkFileChooserDialogConstructOnly, GtkFileChooserDialogProps, GtkFileChooserProps, GtkFrameConstructOnly, GtkFrameProps, GtkGridConstructOnly, GtkGridProps, GtkIconSizeNick, GtkLabelConstructOnly, GtkLabelProps, GtkMiscConstructOnly, GtkMiscProps, GtkOrientableConstructOnly, GtkOrientableProps, GtkOrientationNick, GtkPanedConstructOnly, GtkPanedProps, GtkProgressBarConstructOnly, GtkProgressBarProps, GtkRangeConstructOnly, GtkRangeProps, GtkScaleConstructOnly, GtkScaleProps, GtkScrollableConstructOnly, GtkScrollableProps, GtkSpinButtonConstructOnly, GtkSpinButtonProps, GtkTextViewConstructOnly, GtkTextViewProps, GtkWidgetConstructOnly, GtkWidgetProps, GtkWindowConstructOnly, GtkWindowProps } from '@girs/gtk-3.0/surface';

// ---------------------------------------------------------------------------
// Enum nicks — the string vocabulary GObject registered, from GIR's `glib:nick`.
//
// Not derived from the member name. Substituting underscores for dashes is not a law:
// some nicks keep an underscore the substitution would have replaced, and only the
// attribute knows which. Gtk-4.0 and Adw-1 contradict no derivation at all, which is
// how a derived nick passes review and breaks elsewhere.
// Re-measure with `scripts/check-nick-derivation.mjs` in ts-for-gir.
// ---------------------------------------------------------------------------

export type GimpAspectTypeNick = 'square' | 'portrait' | 'landscape';
export type GimpChainPositionNick = 'top' | 'left' | 'bottom' | 'right';
export type GimpCheckSizeNick = 'small-checks' | 'medium-checks' | 'large-checks';
export type GimpCheckTypeNick = 'light-checks' | 'gray-checks' | 'dark-checks' | 'white-only' | 'gray-only' | 'black-only' | 'custom-checks';
export type GimpColorAreaTypeNick = 'flat' | 'small-checks' | 'large-checks';
export type GimpColorSelectorChannelNick = 'hue' | 'saturation' | 'value' | 'red' | 'green' | 'blue' | 'alpha' | 'lch-lightness' | 'lch-chroma' | 'lch-hue';
export type GimpColorSelectorModelNick = 'rgb' | 'lch' | 'hsv';
export type GimpFileChooserActionNick = 'any' | 'open' | 'save' | 'select-folder' | 'create-folder';
export type GimpIntComboBoxLayoutNick = 'icon-only' | 'abbreviated' | 'full';
export type GimpPageSelectorTargetNick = 'layers' | 'images';
export type GimpSizeEntryUpdatePolicyNick = 'none' | 'size' | 'resolution';
export type GimpZoomTypeNick = 'in' | 'out';
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

/** A widget providing a preview with fixed aspect ratio. */
export interface GimpAspectPreviewProps extends GimpPreviewProps, GtkBuildableProps, GtkOrientableProps {
    drawable?: Gimp.Drawable;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GimpAspectPreviewConstructOnly = GimpPreviewConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly | 'drawable';

/** A base class for a documentation browser. */
export interface GimpBrowserProps extends GtkPanedProps, GtkBuildableProps, GtkOrientableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GimpBrowserConstructOnly = GtkPanedConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

/** A button which pops up a brush selection dialog. */
export interface GimpBrushChooserProps extends GimpResourceChooserProps, GtkBuildableProps, GtkOrientableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GimpBrushChooserConstructOnly = GimpResourceChooserConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

/** #GimpBusyBox displays a styled message, providing indication of an ongoing operation. */
export interface GimpBusyBoxProps extends GtkBoxProps, GtkBuildableProps, GtkOrientableProps {
    /**
     * Specifies the displayed message.
     * @since 2.10.4
     */
    message?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GimpBusyBoxConstructOnly = GtkBoxConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

/** #GimpButton adds an extra signal to the #GtkButton widget that allows the callback to distinguish a normal click from a click that was performed with modifier keys pressed. */
export interface GimpButtonProps extends GtkButtonProps, GtkActionableProps, GtkActivatableProps, GtkBuildableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GimpButtonConstructOnly = GtkButtonConstructOnly | GtkActionableConstructOnly | GtkActivatableConstructOnly | GtkBuildableConstructOnly;

/** This widget provides a button showing either a linked or a broken chain that can be used to link two entries, spinbuttons, colors or other GUI elements and show that they may be locked. */
export interface GimpChainButtonProps extends GtkGridProps, GtkBuildableProps, GtkOrientableProps {
    /**
     * The toggled state of the chain button.
     * @since 2.10.10
     */
    active?: boolean;
    /**
     * The chain button icon size.
     * @since 2.10.10
     */
    'icon-size'?: GtkIconSizeNick | Gtk.IconSize;
    /**
     * The position in which the chain button will be used.
     * @since 2.4
     */
    position?: GimpChainPositionNick | GimpUi.ChainPosition;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GimpChainButtonConstructOnly = GtkGridConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly | 'position';

export interface GimpChannelComboBoxProps extends GimpIntComboBoxProps, GtkBuildableProps, GtkCellEditableProps, GtkCellLayoutProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GimpChannelComboBoxConstructOnly = GimpIntComboBoxConstructOnly | GtkBuildableConstructOnly | GtkCellEditableConstructOnly | GtkCellLayoutConstructOnly;

/** Displays a [class@Gegl.Color], optionally with alpha-channel. */
export interface GimpColorAreaProps extends GtkDrawingAreaProps, GtkBuildableProps {
    /**
     * The color displayed in the color area.
     * @since 2.4
     */
    color?: Gegl.Color;
    'drag-mask'?: number;
    /**
     * Whether to draw a thin border in the foreground color around the area.
     * @since 2.4
     */
    'draw-border'?: boolean;
    /**
     * The type of the color area.
     * @since 2.4
     */
    type?: GimpColorAreaTypeNick | GimpUi.ColorAreaType;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GimpColorAreaConstructOnly = GtkDrawingAreaConstructOnly | GtkBuildableConstructOnly;

/** This widget provides a simple button with a preview showing the color. */
export interface GimpColorButtonProps extends GimpButtonProps, GtkActionableProps, GtkActivatableProps, GtkBuildableProps {
    /**
     * The minimum height of the button's #GimpColorArea.
     * @since 2.8
     */
    'area-height'?: number;
    /**
     * The minimum width of the button's #GimpColorArea.
     * @since 2.8
     */
    'area-width'?: number;
    /**
     * The color displayed in the button's color area.
     * @since 2.4
     */
    color?: Gegl.Color;
    /**
     * The #GimpColorConfig object used for the button's #GimpColorArea and #GimpColorSelection.
     * @since 2.10
     */
    'color-config'?: Gimp.ColorConfig;
    /**
     * The update policy of the color button.
     * @since 2.4
     */
    'continuous-update'?: boolean;
    /**
     * The title to be used for the color selection dialog.
     * @since 2.4
     */
    title?: string;
    /**
     * The type of the button's color area.
     * @since 2.4
     */
    type?: GimpColorAreaTypeNick | GimpUi.ColorAreaType;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GimpColorButtonConstructOnly = GimpButtonConstructOnly | GtkActionableConstructOnly | GtkActivatableConstructOnly | GtkBuildableConstructOnly;

/** Widget for entering a color's hex triplet. */
export interface GimpColorHexEntryProps extends GtkEntryProps, GtkBuildableProps, GtkCellEditableProps, GtkEditableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GimpColorHexEntryConstructOnly = GtkEntryConstructOnly | GtkBuildableConstructOnly | GtkCellEditableConstructOnly | GtkEditableConstructOnly;

/** The #GimpColorNotebook widget is an implementation of a #GimpColorSelector. */
export interface GimpColorNotebookProps extends GimpColorSelectorProps, GtkBuildableProps, GtkOrientableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GimpColorNotebookConstructOnly = GimpColorSelectorConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

/** A #GtkFileChooser subclass for selecting color profiles. */
export interface GimpColorProfileChooserDialogProps extends GtkFileChooserDialogProps, GtkBuildableProps, GtkFileChooserProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GimpColorProfileChooserDialogConstructOnly = GtkFileChooserDialogConstructOnly | GtkBuildableConstructOnly | GtkFileChooserConstructOnly;

/** A combo box for selecting color profiles. */
export interface GimpColorProfileComboBoxProps extends Omit<GtkComboBoxProps, 'model'>, GtkBuildableProps, GtkCellEditableProps, GtkCellLayoutProps {
    /**
     * #GtkDialog to present when the user selects the "Select color profile from disk..." item.
     * @since 2.4
     */
    dialog?: Gtk.Dialog;
    /**
     * Overrides the "model" property of the #GtkComboBox class.
     * @since 2.4
     */
    model?: GimpUi.ColorProfileStore;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GimpColorProfileComboBoxConstructOnly = GtkComboBoxConstructOnly | GtkBuildableConstructOnly | GtkCellEditableConstructOnly | GtkCellLayoutConstructOnly | 'dialog';

/** A widget for viewing the properties of a #GimpColorProfile. */
export interface GimpColorProfileViewProps extends GtkTextViewProps, GtkBuildableProps, GtkScrollableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GimpColorProfileViewConstructOnly = GtkTextViewConstructOnly | GtkBuildableConstructOnly | GtkScrollableConstructOnly;

/** Fancy colored sliders. */
export interface GimpColorScaleProps extends GtkScaleProps, GtkBuildableProps, GtkOrientableProps {
    /**
     * The channel which is edited by the color scale.
     * @since 2.8
     */
    channel?: GimpColorSelectorChannelNick | GimpUi.ColorSelectorChannel;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GimpColorScaleConstructOnly = GtkScaleConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

/** This widget is a subclass of #GimpScaleEntry showing a #GimpColorScale instead of a #GtkScale. */
export interface GimpColorScaleEntryProps extends GimpScaleEntryProps, GtkBuildableProps, GtkOrientableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GimpColorScaleEntryConstructOnly = GimpScaleEntryConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

/** The #GimpColorScales widget is an implementation of a #GimpColorSelector. */
export interface GimpColorScalesProps extends GimpColorSelectorProps, GtkBuildableProps, GtkOrientableProps {
    'show-hsv'?: boolean;
    'show-rgb-u8'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GimpColorScalesConstructOnly = GimpColorSelectorConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

/** The #GimpColorSelect widget is an implementation of a #GimpColorSelector. */
export interface GimpColorSelectProps extends GimpColorSelectorProps, GtkBuildableProps, GtkOrientableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GimpColorSelectConstructOnly = GimpColorSelectorConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

/** Widget for doing a color selection. */
export interface GimpColorSelectionProps extends GtkBoxProps, GtkBuildableProps, GtkOrientableProps {
    config?: Gimp.ColorConfig;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GimpColorSelectionConstructOnly = GtkBoxConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

/** Functions and definitions for creating pluggable GIMP color selector modules. */
export interface GimpColorSelectorProps extends GtkBoxProps, GtkBuildableProps, GtkOrientableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GimpColorSelectorConstructOnly = GtkBoxConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

/** Constructors for #GtkDialog's and action_areas as well as other dialog-related stuff. */
export interface GimpDialogProps extends Omit<GtkDialogProps, 'parent'>, GtkBuildableProps {
    /** @since 2.2 */
    'help-func'?: never;
    /** @since 2.2 */
    'help-id'?: string;
    /** @since 2.8 */
    parent?: Gtk.Widget;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GimpDialogConstructOnly = GtkDialogConstructOnly | GtkBuildableConstructOnly | 'help-func' | 'parent';

/** The chooser contains an optional label and a button which queries the core process to pop up a drawable selection dialog. */
export interface GimpDrawableChooserProps extends GtkBoxProps, GtkBuildableProps, GtkOrientableProps {
    /**
     * The currently selected drawable.
     * @since 3.0
     */
    drawable?: Gimp.Drawable;
    /**
     * Allowed drawable types, which must be either GIMP_TYPE_DRAWABLE or a subtype.
     * @since 3.0
     */
    'drawable-type'?: GObject.GType;
    /**
     * Label text with mnemonic.
     * @since 3.0
     */
    label?: string;
    /**
     * The title to be used for the drawable selection popup dialog.
     * @since 3.0
     */
    title?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GimpDrawableChooserConstructOnly = GtkBoxConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly | 'drawable-type' | 'label' | 'title';

export interface GimpDrawableComboBoxProps extends GimpIntComboBoxProps, GtkBuildableProps, GtkCellEditableProps, GtkCellLayoutProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GimpDrawableComboBoxConstructOnly = GimpIntComboBoxConstructOnly | GtkBuildableConstructOnly | GtkCellEditableConstructOnly | GtkCellLayoutConstructOnly;

/** A widget providing a preview of a #GimpDrawable. */
export interface GimpDrawablePreviewProps extends GimpScrolledPreviewProps, GtkBuildableProps, GtkOrientableProps {
    drawable?: Gimp.Drawable;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GimpDrawablePreviewConstructOnly = GimpScrolledPreviewConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly | 'drawable';

/** A #GtkComboBox subclass for selecting an enum value. */
export interface GimpEnumComboBoxProps extends Omit<GimpIntComboBoxProps, 'model'>, GtkBuildableProps, GtkCellEditableProps, GtkCellLayoutProps {
    model?: GimpUi.EnumStore;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GimpEnumComboBoxConstructOnly = GimpIntComboBoxConstructOnly | GtkBuildableConstructOnly | GtkCellEditableConstructOnly | GtkCellLayoutConstructOnly;

/** A #GtkLabel subclass that displays an enum value. */
export interface GimpEnumLabelProps extends GtkLabelProps, GtkBuildableProps {
    /**
     * The #GType of the enum.
     * @since 2.8
     */
    'enum-type'?: GObject.GType;
    /**
     * The value to display.
     * @since 2.8
     */
    'enum-value'?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GimpEnumLabelConstructOnly = GtkLabelConstructOnly | GtkBuildableConstructOnly | 'enum-type';

export interface GimpExportProcedureDialogProps extends GimpProcedureDialogProps, GtkBuildableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GimpExportProcedureDialogConstructOnly = GimpProcedureDialogConstructOnly | GtkBuildableConstructOnly;

/** The chooser contains an optional label and other interface allowing to select files for different use cases. */
export interface GimpFileChooserProps extends GtkBoxProps, GtkBuildableProps, GtkOrientableProps {
    /**
     * The action determining the chooser UI.
     * @since 3.0
     */
    action?: GimpFileChooserActionNick | Gimp.FileChooserAction;
    /**
     * The currently selected file.
     * @since 3.0
     */
    file?: Gio.File;
    /**
     * Label text with mnemonic.
     * @since 3.0
     */
    label?: string | null;
    /**
     * The title to be used for the file selection popup dialog.
     * @since 3.0
     */
    title?: string | null;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GimpFileChooserConstructOnly = GtkBoxConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

/** A button which pops up a font selection dialog. */
export interface GimpFontChooserProps extends GimpResourceChooserProps, GtkBuildableProps, GtkOrientableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GimpFontChooserConstructOnly = GimpResourceChooserConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

/** A widget providing a HIG-compliant subclass of #GtkFrame. */
export interface GimpFrameProps extends GtkFrameProps, GtkBuildableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GimpFrameConstructOnly = GtkFrameConstructOnly | GtkBuildableConstructOnly;

/** A button which pops up a gradient select dialog. */
export interface GimpGradientChooserProps extends GimpResourceChooserProps, GtkBuildableProps, GtkOrientableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GimpGradientChooserConstructOnly = GimpResourceChooserConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

/** Displays a wilber icon and a text. */
export interface GimpHintBoxProps extends GtkBoxProps, GtkBuildableProps, GtkOrientableProps {
    hint?: string;
    'icon-name'?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GimpHintBoxConstructOnly = GtkBoxConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly | 'hint' | 'icon-name';

/** The chooser contains an optional label and a button which queries the core process to pop up an image selection dialog. */
export interface GimpImageChooserProps extends GtkBoxProps, GtkBuildableProps, GtkOrientableProps {
    /**
     * The currently selected image.
     * @since 3.0
     */
    image?: Gimp.Image;
    /**
     * Label text with mnemonic.
     * @since 3.0
     */
    label?: string;
    /**
     * The title to be used for the image selection popup dialog.
     * @since 3.0
     */
    title?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GimpImageChooserConstructOnly = GtkBoxConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly | 'label' | 'title';

/** A widget providing a popup menu of images. */
export interface GimpImageComboBoxProps extends GimpIntComboBoxProps, GtkBuildableProps, GtkCellEditableProps, GtkCellLayoutProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GimpImageComboBoxConstructOnly = GimpIntComboBoxConstructOnly | GtkBuildableConstructOnly | GtkCellEditableConstructOnly | GtkCellLayoutConstructOnly;

/** A widget providing a popup menu of integer values (e.g. */
export interface GimpIntComboBoxProps extends GtkComboBoxProps, GtkBuildableProps, GtkCellEditableProps, GtkCellLayoutProps {
    /**
     * Specifies the preferred place to ellipsize text in the combo-box, if the cell renderer does not have enough room to display the entire string.
     * @since 2.4
     */
    ellipsize?: PangoEllipsizeModeNick | Pango.EllipsizeMode;
    /**
     * Sets a label on the combo-box, see gimp_int_combo_box_set_label().
     * @since 2.10
     */
    label?: string;
    /**
     * Specifies the combo box layout.
     * @since 2.10
     */
    layout?: GimpIntComboBoxLayoutNick | GimpUi.IntComboBoxLayout;
    /**
     * The active value (different from the "active" property of GtkComboBox which is the active index).
     * @since 3.0
     */
    value?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GimpIntComboBoxConstructOnly = GtkComboBoxConstructOnly | GtkBuildableConstructOnly | GtkCellEditableConstructOnly | GtkCellLayoutConstructOnly;

/** A widget providing a frame with title, containing grouped radio buttons, each associated with an integer value and random user data. */
export interface GimpIntRadioFrameProps extends GimpFrameProps, GtkBuildableProps {
    /**
     * The %GimpIntStore from which the radio frame takes the values shown in the list.
     * @since 3.0
     */
    store?: GimpUi.IntStore;
    /**
     * The active value
     * @since 3.0
     */
    value?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GimpIntRadioFrameConstructOnly = GimpFrameConstructOnly | GtkBuildableConstructOnly;

/** The chooser contains an optional label and a button which queries the core process to pop up a item selection dialog. */
export interface GimpItemChooserProps extends GtkBoxProps, GtkBuildableProps, GtkOrientableProps {
    /**
     * The currently selected item.
     * @since 3.0
     */
    item?: Gimp.Item;
    /**
     * Allowed item types, which must be either GIMP_TYPE_ITEM or a subtype.
     * @since 3.0
     */
    'item-type'?: GObject.GType;
    /**
     * Label text with mnemonic.
     * @since 3.0
     */
    label?: string;
    /**
     * The title to be used for the item selection popup dialog.
     * @since 3.0
     */
    title?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GimpItemChooserConstructOnly = GtkBoxConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly | 'item-type' | 'label' | 'title';

/** This widget is a subclass of #GimpLabeled with a #GtkColor. */
export interface GimpLabelColorProps extends GimpLabeledProps, GtkBuildableProps, GtkOrientableProps {
    /**
     * Whether the color can be edited.
     * @since 3.0
     */
    editable?: boolean;
    /**
     * The currently set value.
     * @since 3.0
     */
    value?: Gegl.Color;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GimpLabelColorConstructOnly = GimpLabeledConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

/** This widget is a subclass of #GimpLabeled with a #GtkEntry. */
export interface GimpLabelEntryProps extends GimpLabeledProps, GtkBuildableProps, GtkOrientableProps {
    /**
     * The currently set value.
     * @since 3.0
     */
    value?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GimpLabelEntryConstructOnly = GimpLabeledConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

/** This widget is a subclass of #GimpLabeled. */
export interface GimpLabelIntWidgetProps extends GimpLabeledProps, GtkBuildableProps, GtkOrientableProps {
    /**
     * The currently set value.
     * @since 3.0
     */
    value?: number;
    /**
     * The widget holding an integer value.
     * @since 3.0
     */
    widget?: Gtk.Widget;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GimpLabelIntWidgetConstructOnly = GimpLabeledConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly | 'widget';

/** This widget is a subclass of #GimpLabeled with a #GimpSpinButton. */
export interface GimpLabelSpinProps extends GimpLabeledProps, GtkBuildableProps, GtkOrientableProps {
    /**
     * The number of decimal places to display.
     * @since 3.0
     */
    digits?: number;
    /**
     * The lower bound of the spin button.
     * @since 3.0
     */
    lower?: number;
    /**
     * The upper bound of the spin button.
     * @since 3.0
     */
    upper?: number;
    /**
     * The currently set value.
     * @since 3.0
     */
    value?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GimpLabelSpinConstructOnly = GimpLabeledConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

/** This widget is a subclass of #GimpLabeled. */
export interface GimpLabelStringWidgetProps extends GimpLabeledProps, GtkBuildableProps, GtkOrientableProps {
    /**
     * The currently set value.
     * @since 3.0
     */
    value?: string;
    /**
     * The widget holding a string property named "value".
     * @since 3.0
     */
    widget?: Gtk.Widget;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GimpLabelStringWidgetConstructOnly = GimpLabeledConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly | 'widget';

/** This widget is a #GtkGrid showing a #GtkLabel used as mnemonic on another widget. */
export interface GimpLabeledProps extends GtkGridProps, GtkBuildableProps, GtkOrientableProps {
    /**
     * Label text with pango markup and mnemonic.
     * @since 3.0
     */
    label?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GimpLabeledConstructOnly = GtkGridConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

export interface GimpLayerComboBoxProps extends GimpIntComboBoxProps, GtkBuildableProps, GtkCellEditableProps, GtkCellLayoutProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GimpLayerComboBoxConstructOnly = GimpIntComboBoxConstructOnly | GtkBuildableConstructOnly | GtkCellEditableConstructOnly | GtkCellLayoutConstructOnly;

/** Similar to a #GimpSizeEntry but instead of lengths, this widget is used to let the user enter memory sizes. */
export interface GimpMemsizeEntryProps extends GtkBoxProps, GtkBuildableProps, GtkOrientableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GimpMemsizeEntryConstructOnly = GtkBoxConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

/** A #GtkEntry subclass to enter ratios. */
export interface GimpNumberPairEntryProps extends GtkEntryProps, GtkBuildableProps, GtkCellEditableProps, GtkEditableProps {
    'allow-simplification'?: boolean;
    aspect?: GimpAspectTypeNick | GimpUi.AspectType;
    'default-left-number'?: number;
    'default-right-number'?: number;
    'default-text'?: string | null;
    'left-number'?: number;
    'max-valid-value'?: number;
    'min-valid-value'?: number;
    ratio?: number;
    'right-number'?: number;
    separators?: string;
    'user-override'?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GimpNumberPairEntryConstructOnly = GtkEntryConstructOnly | GtkBuildableConstructOnly | GtkCellEditableConstructOnly | GtkEditableConstructOnly | 'separators';

/** Widget to control image offsets. */
export interface GimpOffsetAreaProps extends GtkDrawingAreaProps, GtkBuildableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GimpOffsetAreaConstructOnly = GtkDrawingAreaConstructOnly | GtkBuildableConstructOnly;

/** Use this for example for specifying what pages to import from a PDF or PS document. */
export interface GimpPageSelectorProps extends GtkBoxProps, GtkBuildableProps, GtkOrientableProps {
    /**
     * The number of pages of the document to open.
     * @since 2.4
     */
    'n-pages'?: number;
    /**
     * The target to open the document to.
     * @since 2.4
     */
    target?: GimpPageSelectorTargetNick | GimpUi.PageSelectorTarget;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GimpPageSelectorConstructOnly = GtkBoxConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

/** A button which pops up a palette selection dialog. */
export interface GimpPaletteChooserProps extends GimpResourceChooserProps, GtkBuildableProps, GtkOrientableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GimpPaletteChooserConstructOnly = GimpResourceChooserConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

export interface GimpPathComboBoxProps extends GimpIntComboBoxProps, GtkBuildableProps, GtkCellEditableProps, GtkCellLayoutProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GimpPathComboBoxConstructOnly = GimpIntComboBoxConstructOnly | GtkBuildableConstructOnly | GtkCellEditableConstructOnly | GtkCellLayoutConstructOnly;

/** This widget is used to edit file search paths. */
export interface GimpPathEditorProps extends GtkBoxProps, GtkBuildableProps, GtkOrientableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GimpPathEditorConstructOnly = GtkBoxConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

/** A button which pops up a pattern selection dialog. */
export interface GimpPatternChooserProps extends GimpResourceChooserProps, GtkBuildableProps, GtkOrientableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GimpPatternChooserConstructOnly = GimpResourceChooserConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

/** #GimpPickButton is a specialized button. */
export interface GimpPickButtonProps extends GtkButtonProps, GtkActionableProps, GtkActivatableProps, GtkBuildableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GimpPickButtonConstructOnly = GtkButtonConstructOnly | GtkActionableConstructOnly | GtkActivatableConstructOnly | GtkBuildableConstructOnly;

/** A widget providing a #GimpPreviewArea plus framework to update the preview. */
export interface GimpPreviewProps extends GtkBoxProps, GtkBuildableProps, GtkOrientableProps {
    update?: boolean;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GimpPreviewConstructOnly = GtkBoxConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

/** A general purpose preview widget which caches its pixel data. */
export interface GimpPreviewAreaProps extends GtkDrawingAreaProps, GtkBuildableProps {
    'check-custom-color1'?: Gegl.Color;
    'check-custom-color2'?: Gegl.Color;
    'check-size'?: GimpCheckSizeNick | Gimp.CheckSize;
    'check-type'?: GimpCheckTypeNick | Gimp.CheckType;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GimpPreviewAreaConstructOnly = GtkDrawingAreaConstructOnly | GtkBuildableConstructOnly;

/** The dialog for the procedure and plugin browsers. */
export interface GimpProcBrowserDialogProps extends GimpDialogProps, GtkBuildableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GimpProcBrowserDialogConstructOnly = GimpDialogConstructOnly | GtkBuildableConstructOnly;

export interface GimpProcedureDialogProps extends GimpDialogProps, GtkBuildableProps {
    config?: Gimp.ProcedureConfig;
    procedure?: Gimp.Procedure;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GimpProcedureDialogConstructOnly = GimpDialogConstructOnly | GtkBuildableConstructOnly | 'procedure';

/** A widget providing a progress bar that automatically redirects any progress calls to itself. */
export interface GimpProgressBarProps extends GtkProgressBarProps, GtkBuildableProps, GtkOrientableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GimpProgressBarConstructOnly = GtkProgressBarConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

/** A button which pops up a resource selection dialog. */
export interface GimpResourceChooserProps extends GtkBoxProps, GtkBuildableProps, GtkOrientableProps {
    /**
     * Label text with mnemonic.
     * @since 3.0
     */
    label?: string;
    /**
     * The currently selected resource.
     * @since 3.0
     */
    resource?: Gimp.Resource;
    /**
     * The title to be used for the resource selection popup dialog.
     * @since 3.0
     */
    title?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GimpResourceChooserConstructOnly = GtkBoxConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly | 'label' | 'title';

/** A ruler widget with configurable unit and orientation. */
export interface GimpRulerProps extends GtkWidgetProps, GtkBuildableProps {
    lower?: number;
    'max-size'?: number;
    orientation?: GtkOrientationNick | Gtk.Orientation;
    position?: number;
    unit?: Gimp.Unit;
    upper?: number;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GimpRulerConstructOnly = GtkWidgetConstructOnly | GtkBuildableConstructOnly;

/** This widget is a #GtkGrid showing a #GtkSpinButton and a #GtkScale bound together. */
export interface GimpScaleEntryProps extends GimpLabelSpinProps, GtkBuildableProps, GtkOrientableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GimpScaleEntryConstructOnly = GimpLabelSpinConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

/** A widget providing a #GimpPreview enhanced by scrolling capabilities. */
export interface GimpScrolledPreviewProps extends GimpPreviewProps, GtkBuildableProps, GtkOrientableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GimpScrolledPreviewConstructOnly = GimpPreviewConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

/** This widget is used to enter pixel distances/sizes and resolutions. */
export interface GimpSizeEntryProps extends GtkGridProps, GtkBuildableProps, GtkOrientableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GimpSizeEntryConstructOnly = GtkGridConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly;

/** #GimpSpinButton is a drop-in replacement for #GtkSpinButton, with the following changes: - When the spin-button loses focus, its adjustment value is only updated if the entry text has been changed. */
export interface GimpSpinButtonProps extends GtkSpinButtonProps, GtkBuildableProps, GtkCellEditableProps, GtkEditableProps, GtkOrientableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GimpSpinButtonConstructOnly = GtkSpinButtonConstructOnly | GtkBuildableConstructOnly | GtkCellEditableConstructOnly | GtkEditableConstructOnly | GtkOrientableConstructOnly;

export interface GimpSpinScaleProps extends GimpSpinButtonProps, GtkBuildableProps, GtkCellEditableProps, GtkEditableProps, GtkOrientableProps {
    label?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GimpSpinScaleConstructOnly = GimpSpinButtonConstructOnly | GtkBuildableConstructOnly | GtkCellEditableConstructOnly | GtkEditableConstructOnly | GtkOrientableConstructOnly;

/** A #GtkComboBox subclass to select strings. */
export interface GimpStringComboBoxProps extends GtkComboBoxProps, GtkBuildableProps, GtkCellEditableProps, GtkCellLayoutProps {
    /**
     * Specifies the preferred place to ellipsize text in the combo-box, if the cell renderer does not have enough room to display the entire string.
     * @since 2.4
     */
    ellipsize?: PangoEllipsizeModeNick | Pango.EllipsizeMode;
    /**
     * The column in the associated GtkTreeModel that holds unique string IDs.
     * @since 2.4
     */
    'id-column'?: number;
    /**
     * The column in the associated GtkTreeModel that holds strings to be used as labels in the combo-box.
     * @since 2.4
     */
    'label-column'?: number;
    /**
     * The active value (different from the "active" property of GtkComboBox which is the active index).
     * @since 3.0
     */
    value?: string;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GimpStringComboBoxConstructOnly = GtkComboBoxConstructOnly | GtkBuildableConstructOnly | GtkCellEditableConstructOnly | GtkCellLayoutConstructOnly | 'id-column' | 'label-column';

/** #GimpUnitComboBox selects units stored in a #GimpUnitStore. */
export interface GimpUnitComboBoxProps extends GtkComboBoxProps, GtkBuildableProps, GtkCellEditableProps, GtkCellLayoutProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GimpUnitComboBoxConstructOnly = GtkComboBoxConstructOnly | GtkBuildableConstructOnly | GtkCellEditableConstructOnly | GtkCellLayoutConstructOnly;

export interface GimpVectorLoadProcedureDialogProps extends GimpProcedureDialogProps, GtkBuildableProps {
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GimpVectorLoadProcedureDialogConstructOnly = GimpProcedureDialogConstructOnly | GtkBuildableConstructOnly;

/** A drawable preview with zooming capabilities. */
export interface GimpZoomPreviewProps extends GimpScrolledPreviewProps, GtkBuildableProps, GtkOrientableProps {
    drawable?: Gimp.Drawable;
    /**
     * The #GimpZoomModel used by this #GimpZoomPreview.
     * @since 2.4
     */
    model?: GimpUi.ZoomModel;
}
/** Settable only at construction — a renderer must REBUILD, not patch. */
export type GimpZoomPreviewConstructOnly = GimpScrolledPreviewConstructOnly | GtkBuildableConstructOnly | GtkOrientableConstructOnly | 'drawable' | 'model';

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
    GimpAspectPreview: {
        class: GimpUi.AspectPreview;
        props: GimpAspectPreviewProps;
        signals: GimpUi.AspectPreview.SignalSignatures;
        constructOnly: GimpAspectPreviewConstructOnly;
        slotCandidates: {};
    };
    GimpBrowser: {
        class: GimpUi.Browser;
        props: GimpBrowserProps;
        signals: GimpUi.Browser.SignalSignatures;
        constructOnly: GimpBrowserConstructOnly;
        slotCandidates: {
        'widget': 'set_widget';
        };
    };
    GimpBrushChooser: {
        class: GimpUi.BrushChooser;
        props: GimpBrushChooserProps;
        signals: GimpUi.BrushChooser.SignalSignatures;
        constructOnly: GimpBrushChooserConstructOnly;
        slotCandidates: {};
    };
    GimpBusyBox: {
        class: GimpUi.BusyBox;
        props: GimpBusyBoxProps;
        signals: GimpUi.BusyBox.SignalSignatures;
        constructOnly: GimpBusyBoxConstructOnly;
        slotCandidates: {};
    };
    GimpButton: {
        class: GimpUi.Button;
        props: GimpButtonProps;
        signals: GimpUi.Button.SignalSignatures;
        constructOnly: GimpButtonConstructOnly;
        slotCandidates: {};
    };
    GimpChainButton: {
        class: GimpUi.ChainButton;
        props: GimpChainButtonProps;
        signals: GimpUi.ChainButton.SignalSignatures;
        constructOnly: GimpChainButtonConstructOnly;
        slotCandidates: {};
    };
    GimpChannelComboBox: {
        class: GimpUi.ChannelComboBox;
        props: GimpChannelComboBoxProps;
        signals: GimpUi.ChannelComboBox.SignalSignatures;
        constructOnly: GimpChannelComboBoxConstructOnly;
        slotCandidates: {};
    };
    GimpColorArea: {
        class: GimpUi.ColorArea;
        props: GimpColorAreaProps;
        signals: GimpUi.ColorArea.SignalSignatures;
        constructOnly: GimpColorAreaConstructOnly;
        slotCandidates: {};
    };
    GimpColorButton: {
        class: GimpUi.ColorButton;
        props: GimpColorButtonProps;
        signals: GimpUi.ColorButton.SignalSignatures;
        constructOnly: GimpColorButtonConstructOnly;
        slotCandidates: {};
    };
    GimpColorHexEntry: {
        class: GimpUi.ColorHexEntry;
        props: GimpColorHexEntryProps;
        signals: GimpUi.ColorHexEntry.SignalSignatures;
        constructOnly: GimpColorHexEntryConstructOnly;
        slotCandidates: {};
    };
    GimpColorNotebook: {
        class: GimpUi.ColorNotebook;
        props: GimpColorNotebookProps;
        signals: GimpUi.ColorNotebook.SignalSignatures;
        constructOnly: GimpColorNotebookConstructOnly;
        slotCandidates: {};
    };
    GimpColorProfileChooserDialog: {
        class: GimpUi.ColorProfileChooserDialog;
        props: GimpColorProfileChooserDialogProps;
        signals: GimpUi.ColorProfileChooserDialog.SignalSignatures;
        constructOnly: GimpColorProfileChooserDialogConstructOnly;
        slotCandidates: {};
    };
    GimpColorProfileComboBox: {
        class: GimpUi.ColorProfileComboBox;
        props: GimpColorProfileComboBoxProps;
        signals: GimpUi.ColorProfileComboBox.SignalSignatures;
        constructOnly: GimpColorProfileComboBoxConstructOnly;
        slotCandidates: {};
    };
    GimpColorProfileView: {
        class: GimpUi.ColorProfileView;
        props: GimpColorProfileViewProps;
        signals: GimpUi.ColorProfileView.SignalSignatures;
        constructOnly: GimpColorProfileViewConstructOnly;
        slotCandidates: {};
    };
    GimpColorScale: {
        class: GimpUi.ColorScale;
        props: GimpColorScaleProps;
        signals: GimpUi.ColorScale.SignalSignatures;
        constructOnly: GimpColorScaleConstructOnly;
        slotCandidates: {};
    };
    GimpColorScaleEntry: {
        class: GimpUi.ColorScaleEntry;
        props: GimpColorScaleEntryProps;
        signals: GimpUi.ColorScaleEntry.SignalSignatures;
        constructOnly: GimpColorScaleEntryConstructOnly;
        slotCandidates: {};
    };
    GimpColorScales: {
        class: GimpUi.ColorScales;
        props: GimpColorScalesProps;
        signals: GimpUi.ColorScales.SignalSignatures;
        constructOnly: GimpColorScalesConstructOnly;
        slotCandidates: {};
    };
    GimpColorSelect: {
        class: GimpUi.ColorSelect;
        props: GimpColorSelectProps;
        signals: GimpUi.ColorSelect.SignalSignatures;
        constructOnly: GimpColorSelectConstructOnly;
        slotCandidates: {};
    };
    GimpColorSelection: {
        class: GimpUi.ColorSelection;
        props: GimpColorSelectionProps;
        signals: GimpUi.ColorSelection.SignalSignatures;
        constructOnly: GimpColorSelectionConstructOnly;
        slotCandidates: {};
    };
    GimpDialog: {
        class: GimpUi.Dialog;
        props: GimpDialogProps;
        signals: GimpUi.Dialog.SignalSignatures;
        constructOnly: GimpDialogConstructOnly;
        slotCandidates: {};
    };
    GimpDrawableChooser: {
        class: GimpUi.DrawableChooser;
        props: GimpDrawableChooserProps;
        signals: GimpUi.DrawableChooser.SignalSignatures;
        constructOnly: GimpDrawableChooserConstructOnly;
        slotCandidates: {};
    };
    GimpDrawableComboBox: {
        class: GimpUi.DrawableComboBox;
        props: GimpDrawableComboBoxProps;
        signals: GimpUi.DrawableComboBox.SignalSignatures;
        constructOnly: GimpDrawableComboBoxConstructOnly;
        slotCandidates: {};
    };
    GimpDrawablePreview: {
        class: GimpUi.DrawablePreview;
        props: GimpDrawablePreviewProps;
        signals: GimpUi.DrawablePreview.SignalSignatures;
        constructOnly: GimpDrawablePreviewConstructOnly;
        slotCandidates: {};
    };
    GimpEnumComboBox: {
        class: GimpUi.EnumComboBox;
        props: GimpEnumComboBoxProps;
        signals: GimpUi.EnumComboBox.SignalSignatures;
        constructOnly: GimpEnumComboBoxConstructOnly;
        slotCandidates: {};
    };
    GimpEnumLabel: {
        class: GimpUi.EnumLabel;
        props: GimpEnumLabelProps;
        signals: GimpUi.EnumLabel.SignalSignatures;
        constructOnly: GimpEnumLabelConstructOnly;
        slotCandidates: {};
    };
    GimpExportProcedureDialog: {
        class: GimpUi.ExportProcedureDialog;
        props: GimpExportProcedureDialogProps;
        signals: GimpUi.ExportProcedureDialog.SignalSignatures;
        constructOnly: GimpExportProcedureDialogConstructOnly;
        slotCandidates: {};
    };
    GimpFileChooser: {
        class: GimpUi.FileChooser;
        props: GimpFileChooserProps;
        signals: GimpUi.FileChooser.SignalSignatures;
        constructOnly: GimpFileChooserConstructOnly;
        slotCandidates: {};
    };
    GimpFontChooser: {
        class: GimpUi.FontChooser;
        props: GimpFontChooserProps;
        signals: GimpUi.FontChooser.SignalSignatures;
        constructOnly: GimpFontChooserConstructOnly;
        slotCandidates: {};
    };
    GimpFrame: {
        class: GimpUi.Frame;
        props: GimpFrameProps;
        signals: GimpUi.Frame.SignalSignatures;
        constructOnly: GimpFrameConstructOnly;
        slotCandidates: {};
    };
    GimpGradientChooser: {
        class: GimpUi.GradientChooser;
        props: GimpGradientChooserProps;
        signals: GimpUi.GradientChooser.SignalSignatures;
        constructOnly: GimpGradientChooserConstructOnly;
        slotCandidates: {};
    };
    GimpHintBox: {
        class: GimpUi.HintBox;
        props: GimpHintBoxProps;
        signals: GimpUi.HintBox.SignalSignatures;
        constructOnly: GimpHintBoxConstructOnly;
        slotCandidates: {};
    };
    GimpImageChooser: {
        class: GimpUi.ImageChooser;
        props: GimpImageChooserProps;
        signals: GimpUi.ImageChooser.SignalSignatures;
        constructOnly: GimpImageChooserConstructOnly;
        slotCandidates: {};
    };
    GimpImageComboBox: {
        class: GimpUi.ImageComboBox;
        props: GimpImageComboBoxProps;
        signals: GimpUi.ImageComboBox.SignalSignatures;
        constructOnly: GimpImageComboBoxConstructOnly;
        slotCandidates: {};
    };
    GimpIntComboBox: {
        class: GimpUi.IntComboBox;
        props: GimpIntComboBoxProps;
        signals: GimpUi.IntComboBox.SignalSignatures;
        constructOnly: GimpIntComboBoxConstructOnly;
        slotCandidates: {};
    };
    GimpIntRadioFrame: {
        class: GimpUi.IntRadioFrame;
        props: GimpIntRadioFrameProps;
        signals: GimpUi.IntRadioFrame.SignalSignatures;
        constructOnly: GimpIntRadioFrameConstructOnly;
        slotCandidates: {};
    };
    GimpItemChooser: {
        class: GimpUi.ItemChooser;
        props: GimpItemChooserProps;
        signals: GimpUi.ItemChooser.SignalSignatures;
        constructOnly: GimpItemChooserConstructOnly;
        slotCandidates: {};
    };
    GimpLabelColor: {
        class: GimpUi.LabelColor;
        props: GimpLabelColorProps;
        signals: GimpUi.LabelColor.SignalSignatures;
        constructOnly: GimpLabelColorConstructOnly;
        slotCandidates: {};
    };
    GimpLabelEntry: {
        class: GimpUi.LabelEntry;
        props: GimpLabelEntryProps;
        signals: GimpUi.LabelEntry.SignalSignatures;
        constructOnly: GimpLabelEntryConstructOnly;
        slotCandidates: {};
    };
    GimpLabelIntWidget: {
        class: GimpUi.LabelIntWidget;
        props: GimpLabelIntWidgetProps;
        signals: GimpUi.LabelIntWidget.SignalSignatures;
        constructOnly: GimpLabelIntWidgetConstructOnly;
        slotCandidates: {};
    };
    GimpLabelSpin: {
        class: GimpUi.LabelSpin;
        props: GimpLabelSpinProps;
        signals: GimpUi.LabelSpin.SignalSignatures;
        constructOnly: GimpLabelSpinConstructOnly;
        slotCandidates: {};
    };
    GimpLabelStringWidget: {
        class: GimpUi.LabelStringWidget;
        props: GimpLabelStringWidgetProps;
        signals: GimpUi.LabelStringWidget.SignalSignatures;
        constructOnly: GimpLabelStringWidgetConstructOnly;
        slotCandidates: {};
    };
    GimpLabeled: {
        class: GimpUi.Labeled;
        props: GimpLabeledProps;
        signals: GimpUi.Labeled.SignalSignatures;
        constructOnly: GimpLabeledConstructOnly;
        slotCandidates: {};
    };
    GimpLayerComboBox: {
        class: GimpUi.LayerComboBox;
        props: GimpLayerComboBoxProps;
        signals: GimpUi.LayerComboBox.SignalSignatures;
        constructOnly: GimpLayerComboBoxConstructOnly;
        slotCandidates: {};
    };
    GimpMemsizeEntry: {
        class: GimpUi.MemsizeEntry;
        props: GimpMemsizeEntryProps;
        signals: GimpUi.MemsizeEntry.SignalSignatures;
        constructOnly: GimpMemsizeEntryConstructOnly;
        slotCandidates: {};
    };
    GimpNumberPairEntry: {
        class: GimpUi.NumberPairEntry;
        props: GimpNumberPairEntryProps;
        signals: GimpUi.NumberPairEntry.SignalSignatures;
        constructOnly: GimpNumberPairEntryConstructOnly;
        slotCandidates: {};
    };
    GimpOffsetArea: {
        class: GimpUi.OffsetArea;
        props: GimpOffsetAreaProps;
        signals: GimpUi.OffsetArea.SignalSignatures;
        constructOnly: GimpOffsetAreaConstructOnly;
        slotCandidates: {};
    };
    GimpPageSelector: {
        class: GimpUi.PageSelector;
        props: GimpPageSelectorProps;
        signals: GimpUi.PageSelector.SignalSignatures;
        constructOnly: GimpPageSelectorConstructOnly;
        slotCandidates: {};
    };
    GimpPaletteChooser: {
        class: GimpUi.PaletteChooser;
        props: GimpPaletteChooserProps;
        signals: GimpUi.PaletteChooser.SignalSignatures;
        constructOnly: GimpPaletteChooserConstructOnly;
        slotCandidates: {};
    };
    GimpPathComboBox: {
        class: GimpUi.PathComboBox;
        props: GimpPathComboBoxProps;
        signals: GimpUi.PathComboBox.SignalSignatures;
        constructOnly: GimpPathComboBoxConstructOnly;
        slotCandidates: {};
    };
    GimpPathEditor: {
        class: GimpUi.PathEditor;
        props: GimpPathEditorProps;
        signals: GimpUi.PathEditor.SignalSignatures;
        constructOnly: GimpPathEditorConstructOnly;
        slotCandidates: {};
    };
    GimpPatternChooser: {
        class: GimpUi.PatternChooser;
        props: GimpPatternChooserProps;
        signals: GimpUi.PatternChooser.SignalSignatures;
        constructOnly: GimpPatternChooserConstructOnly;
        slotCandidates: {};
    };
    GimpPickButton: {
        class: GimpUi.PickButton;
        props: GimpPickButtonProps;
        signals: GimpUi.PickButton.SignalSignatures;
        constructOnly: GimpPickButtonConstructOnly;
        slotCandidates: {};
    };
    GimpPreviewArea: {
        class: GimpUi.PreviewArea;
        props: GimpPreviewAreaProps;
        signals: GimpUi.PreviewArea.SignalSignatures;
        constructOnly: GimpPreviewAreaConstructOnly;
        slotCandidates: {};
    };
    GimpProcBrowserDialog: {
        class: GimpUi.ProcBrowserDialog;
        props: GimpProcBrowserDialogProps;
        signals: GimpUi.ProcBrowserDialog.SignalSignatures;
        constructOnly: GimpProcBrowserDialogConstructOnly;
        slotCandidates: {};
    };
    GimpProcedureDialog: {
        class: GimpUi.ProcedureDialog;
        props: GimpProcedureDialogProps;
        signals: GimpUi.ProcedureDialog.SignalSignatures;
        constructOnly: GimpProcedureDialogConstructOnly;
        slotCandidates: {};
    };
    GimpProgressBar: {
        class: GimpUi.ProgressBar;
        props: GimpProgressBarProps;
        signals: GimpUi.ProgressBar.SignalSignatures;
        constructOnly: GimpProgressBarConstructOnly;
        slotCandidates: {};
    };
    GimpRuler: {
        class: GimpUi.Ruler;
        props: GimpRulerProps;
        signals: GimpUi.Ruler.SignalSignatures;
        constructOnly: GimpRulerConstructOnly;
        slotCandidates: {
        'track-widget': 'add_track_widget';
        };
    };
    GimpScaleEntry: {
        class: GimpUi.ScaleEntry;
        props: GimpScaleEntryProps;
        signals: GimpUi.ScaleEntry.SignalSignatures;
        constructOnly: GimpScaleEntryConstructOnly;
        slotCandidates: {};
    };
    GimpSizeEntry: {
        class: GimpUi.SizeEntry;
        props: GimpSizeEntryProps;
        signals: GimpUi.SizeEntry.SignalSignatures;
        constructOnly: GimpSizeEntryConstructOnly;
        slotCandidates: {};
    };
    GimpSpinButton: {
        class: GimpUi.SpinButton;
        props: GimpSpinButtonProps;
        signals: GimpUi.SpinButton.SignalSignatures;
        constructOnly: GimpSpinButtonConstructOnly;
        slotCandidates: {};
    };
    GimpSpinScale: {
        class: GimpUi.SpinScale;
        props: GimpSpinScaleProps;
        signals: GimpUi.SpinScale.SignalSignatures;
        constructOnly: GimpSpinScaleConstructOnly;
        slotCandidates: {};
    };
    GimpStringComboBox: {
        class: GimpUi.StringComboBox;
        props: GimpStringComboBoxProps;
        signals: GimpUi.StringComboBox.SignalSignatures;
        constructOnly: GimpStringComboBoxConstructOnly;
        slotCandidates: {};
    };
    GimpUnitComboBox: {
        class: GimpUi.UnitComboBox;
        props: GimpUnitComboBoxProps;
        signals: GimpUi.UnitComboBox.SignalSignatures;
        constructOnly: GimpUnitComboBoxConstructOnly;
        slotCandidates: {};
    };
    GimpVectorLoadProcedureDialog: {
        class: GimpUi.VectorLoadProcedureDialog;
        props: GimpVectorLoadProcedureDialogProps;
        signals: GimpUi.VectorLoadProcedureDialog.SignalSignatures;
        constructOnly: GimpVectorLoadProcedureDialogConstructOnly;
        slotCandidates: {};
    };
    GimpZoomPreview: {
        class: GimpUi.ZoomPreview;
        props: GimpZoomPreviewProps;
        signals: GimpUi.ZoomPreview.SignalSignatures;
        constructOnly: GimpZoomPreviewConstructOnly;
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
