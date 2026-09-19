// The widget vocabulary of GimpUi-3.0 as runtime data.
//
// GENERATED — do not edit. Provenance: GimpUi-3.0 — dropped empty base(s): Atk.ImplementorIface — prop(s) no TypeScript value satisfies: GimpUi.Dialog.help-func
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'GimpUi',
    version: '3.0',
    libraryVersion: null,
    childHolders: 0,
    droppedBases: ['Atk.ImplementorIface'],
    inlinedBases: [],
    unsettableProps: ['GimpUi.Dialog.help-func'],
    unresolvedProps: [],
    identifierPrefixes: ['Gimp'],
    requiredVocabularies: ['@girs/gimp-3.0/vocabulary', '@girs/gobject-2.0/vocabulary', '@girs/gtk-3.0/vocabulary', '@girs/pango-1.0/vocabulary'],
};

export const OWN_PROPS = {
    GimpAspectPreview: ['drawable'],
    GimpBusyBox: ['message'],
    GimpCellRendererColor: ['color', 'icon-size', 'opaque'],
    GimpCellRendererToggle: ['icon-name', 'icon-size', 'override-background'],
    GimpChainButton: ['active', 'icon-size', 'position'],
    GimpColorArea: ['color', 'drag-mask', 'draw-border', 'type'],
    GimpColorButton: ['area-height', 'area-width', 'color', 'color-config', 'continuous-update', 'title', 'type'],
    GimpColorProfileComboBox: ['dialog', 'model'],
    GimpColorProfileStore: ['history'],
    GimpColorScale: ['channel'],
    GimpColorScales: ['show-hsv', 'show-rgb-u8'],
    GimpColorSelection: ['config'],
    GimpDialog: ['help-func', 'help-id', 'parent'],
    GimpDrawableChooser: ['drawable', 'drawable-type', 'label', 'title'],
    GimpDrawablePreview: ['drawable'],
    GimpEnumComboBox: ['model'],
    GimpEnumLabel: ['enum-type', 'enum-value'],
    GimpEnumStore: ['enum-type'],
    GimpFileChooser: ['action', 'file', 'label', 'title'],
    GimpHintBox: ['hint', 'icon-name'],
    GimpImageChooser: ['image', 'label', 'title'],
    GimpIntComboBox: ['ellipsize', 'label', 'layout', 'value'],
    GimpIntRadioFrame: ['store', 'value'],
    GimpIntStore: ['user-data-type'],
    GimpItemChooser: ['item', 'item-type', 'label', 'title'],
    GimpLabelColor: ['editable', 'value'],
    GimpLabelEntry: ['value'],
    GimpLabelIntWidget: ['value', 'widget'],
    GimpLabelSpin: ['digits', 'lower', 'upper', 'value'],
    GimpLabelStringWidget: ['value', 'widget'],
    GimpLabeled: ['label'],
    GimpNumberPairEntry: ['allow-simplification', 'aspect', 'default-left-number', 'default-right-number', 'default-text', 'left-number', 'max-valid-value', 'min-valid-value', 'ratio', 'right-number', 'separators', 'user-override'],
    GimpPageSelector: ['n-pages', 'target'],
    GimpPreview: ['update'],
    GimpPreviewArea: ['check-custom-color1', 'check-custom-color2', 'check-size', 'check-type'],
    GimpProcedureDialog: ['config', 'procedure'],
    GimpResourceChooser: ['label', 'resource', 'title'],
    GimpRuler: ['lower', 'max-size', 'orientation', 'position', 'unit', 'upper'],
    GimpSpinScale: ['label'],
    GimpStringComboBox: ['ellipsize', 'id-column', 'label-column', 'value'],
    GimpUnitStore: ['has-percent', 'has-pixels', 'long-format', 'num-values', 'short-format'],
    GimpZoomModel: ['maximum', 'minimum', 'value'],
    GimpZoomPreview: ['drawable', 'model'],
};

export const OWN_SIGNALS = {
    GimpBrowser: ['search', 'stop-search'],
    GimpButton: ['extended-clicked'],
    GimpCellRendererToggle: ['clicked'],
    GimpChainButton: ['toggled'],
    GimpColorArea: ['color-changed'],
    GimpColorButton: ['color-changed'],
    GimpColorDisplayStack: ['added', 'changed', 'removed', 'reordered'],
    GimpColorHexEntry: ['color-changed'],
    GimpColorSelection: ['color-changed'],
    GimpColorSelector: ['channel-changed', 'color-changed', 'model-visible-changed', 'simulation'],
    GimpLabelColor: ['value-changed'],
    GimpLabelEntry: ['value-changed'],
    GimpLabelIntWidget: ['value-changed'],
    GimpLabelSpin: ['value-changed'],
    GimpLabelStringWidget: ['value-changed'],
    GimpLabeled: ['mnemonic-widget-changed'],
    GimpMemsizeEntry: ['value-changed'],
    GimpNumberPairEntry: ['numbers-changed', 'ratio-changed'],
    GimpOffsetArea: ['offsets-changed'],
    GimpPageSelector: ['activate', 'selection-changed'],
    GimpPathEditor: ['path-changed', 'writable-changed'],
    GimpPickButton: ['color-picked'],
    GimpPreview: ['invalidated'],
    GimpProcBrowserDialog: ['row-activated', 'selection-changed'],
    GimpResourceChooser: ['resource-set'],
    GimpSizeEntry: ['refval-changed', 'unit-changed', 'value-changed'],
    GimpZoomModel: ['zoomed'],
};

// Every GType this namespace can INSTANTIATE -> the declarations its members come from.
//
// The key set is what a UI description file can name: a registered, non-abstract class.
// Not "every widget" — GtkBuilder resolves a name through `g_type_from_name`, which knows
// nothing about widgets, and a `.ui` file is full of `GtkSizeGroup`, `GtkTextTag`,
// `GtkEventController*` and `GtkCellRenderer*`. Use `Widgets` and `CHILD_HOLDERS`
// below for the narrower questions; they did not move.
export const DECLS = {
    GimpAspectPreview: ['GimpAspectPreview', 'GimpPreview', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable', 'GtkOrientable'],
    GimpBrowser: ['GimpBrowser', 'GtkPaned', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable', 'GtkOrientable'],
    GimpBrushChooser: ['GimpBrushChooser', 'GimpResourceChooser', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable', 'GtkOrientable'],
    GimpBusyBox: ['GimpBusyBox', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable', 'GtkOrientable'],
    GimpButton: ['GimpButton', 'GtkButton', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkActionable', 'GtkActivatable', 'GtkBuildable'],
    GimpCellRendererColor: ['GimpCellRendererColor', 'GtkCellRenderer', 'GInitiallyUnowned', 'GObject'],
    GimpCellRendererToggle: ['GimpCellRendererToggle', 'GtkCellRendererToggle', 'GtkCellRenderer', 'GInitiallyUnowned', 'GObject'],
    GimpChainButton: ['GimpChainButton', 'GtkGrid', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable', 'GtkOrientable'],
    GimpChannelComboBox: ['GimpChannelComboBox', 'GimpIntComboBox', 'GtkComboBox', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable', 'GtkCellEditable', 'GtkCellLayout'],
    GimpColorArea: ['GimpColorArea', 'GtkDrawingArea', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable'],
    GimpColorButton: ['GimpColorButton', 'GimpButton', 'GtkButton', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkActionable', 'GtkActivatable', 'GtkBuildable'],
    GimpColorDisplayStack: ['GimpColorDisplayStack', 'GObject'],
    GimpColorHexEntry: ['GimpColorHexEntry', 'GtkEntry', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable', 'GtkCellEditable', 'GtkEditable'],
    GimpColorNotebook: ['GimpColorNotebook', 'GimpColorSelector', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable', 'GtkOrientable'],
    GimpColorProfileChooserDialog: ['GimpColorProfileChooserDialog', 'GtkFileChooserDialog', 'GtkDialog', 'GtkWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable', 'GtkFileChooser'],
    GimpColorProfileComboBox: ['GimpColorProfileComboBox', 'GtkComboBox', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable', 'GtkCellEditable', 'GtkCellLayout'],
    GimpColorProfileStore: ['GimpColorProfileStore', 'GtkListStore', 'GObject', 'GtkBuildable', 'GtkTreeDragDest', 'GtkTreeDragSource', 'GtkTreeModel', 'GtkTreeSortable'],
    GimpColorProfileView: ['GimpColorProfileView', 'GtkTextView', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable', 'GtkScrollable'],
    GimpColorScale: ['GimpColorScale', 'GtkScale', 'GtkRange', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable', 'GtkOrientable'],
    GimpColorScaleEntry: ['GimpColorScaleEntry', 'GimpScaleEntry', 'GimpLabelSpin', 'GimpLabeled', 'GtkGrid', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable', 'GtkOrientable'],
    GimpColorScales: ['GimpColorScales', 'GimpColorSelector', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable', 'GtkOrientable'],
    GimpColorSelect: ['GimpColorSelect', 'GimpColorSelector', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable', 'GtkOrientable'],
    GimpColorSelection: ['GimpColorSelection', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable', 'GtkOrientable'],
    GimpDialog: ['GimpDialog', 'GtkDialog', 'GtkWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable'],
    GimpDrawableChooser: ['GimpDrawableChooser', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable', 'GtkOrientable'],
    GimpDrawableComboBox: ['GimpDrawableComboBox', 'GimpIntComboBox', 'GtkComboBox', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable', 'GtkCellEditable', 'GtkCellLayout'],
    GimpDrawablePreview: ['GimpDrawablePreview', 'GimpScrolledPreview', 'GimpPreview', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable', 'GtkOrientable'],
    GimpEnumComboBox: ['GimpEnumComboBox', 'GimpIntComboBox', 'GtkComboBox', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable', 'GtkCellEditable', 'GtkCellLayout'],
    GimpEnumLabel: ['GimpEnumLabel', 'GtkLabel', 'GtkMisc', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable'],
    GimpEnumStore: ['GimpEnumStore', 'GimpIntStore', 'GtkListStore', 'GObject', 'GtkBuildable', 'GtkTreeDragDest', 'GtkTreeDragSource', 'GtkTreeModel', 'GtkTreeSortable'],
    GimpExportProcedureDialog: ['GimpExportProcedureDialog', 'GimpProcedureDialog', 'GimpDialog', 'GtkDialog', 'GtkWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable'],
    GimpFileChooser: ['GimpFileChooser', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable', 'GtkOrientable'],
    GimpFontChooser: ['GimpFontChooser', 'GimpResourceChooser', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable', 'GtkOrientable'],
    GimpFrame: ['GimpFrame', 'GtkFrame', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable'],
    GimpGradientChooser: ['GimpGradientChooser', 'GimpResourceChooser', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable', 'GtkOrientable'],
    GimpHintBox: ['GimpHintBox', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable', 'GtkOrientable'],
    GimpImageChooser: ['GimpImageChooser', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable', 'GtkOrientable'],
    GimpImageComboBox: ['GimpImageComboBox', 'GimpIntComboBox', 'GtkComboBox', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable', 'GtkCellEditable', 'GtkCellLayout'],
    GimpIntComboBox: ['GimpIntComboBox', 'GtkComboBox', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable', 'GtkCellEditable', 'GtkCellLayout'],
    GimpIntRadioFrame: ['GimpIntRadioFrame', 'GimpFrame', 'GtkFrame', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable'],
    GimpIntStore: ['GimpIntStore', 'GtkListStore', 'GObject', 'GtkBuildable', 'GtkTreeDragDest', 'GtkTreeDragSource', 'GtkTreeModel', 'GtkTreeSortable'],
    GimpItemChooser: ['GimpItemChooser', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable', 'GtkOrientable'],
    GimpLabelColor: ['GimpLabelColor', 'GimpLabeled', 'GtkGrid', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable', 'GtkOrientable'],
    GimpLabelEntry: ['GimpLabelEntry', 'GimpLabeled', 'GtkGrid', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable', 'GtkOrientable'],
    GimpLabelIntWidget: ['GimpLabelIntWidget', 'GimpLabeled', 'GtkGrid', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable', 'GtkOrientable'],
    GimpLabelSpin: ['GimpLabelSpin', 'GimpLabeled', 'GtkGrid', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable', 'GtkOrientable'],
    GimpLabelStringWidget: ['GimpLabelStringWidget', 'GimpLabeled', 'GtkGrid', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable', 'GtkOrientable'],
    GimpLabeled: ['GimpLabeled', 'GtkGrid', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable', 'GtkOrientable'],
    GimpLayerComboBox: ['GimpLayerComboBox', 'GimpIntComboBox', 'GtkComboBox', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable', 'GtkCellEditable', 'GtkCellLayout'],
    GimpMemsizeEntry: ['GimpMemsizeEntry', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable', 'GtkOrientable'],
    GimpNumberPairEntry: ['GimpNumberPairEntry', 'GtkEntry', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable', 'GtkCellEditable', 'GtkEditable'],
    GimpOffsetArea: ['GimpOffsetArea', 'GtkDrawingArea', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable'],
    GimpPageSelector: ['GimpPageSelector', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable', 'GtkOrientable'],
    GimpPaletteChooser: ['GimpPaletteChooser', 'GimpResourceChooser', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable', 'GtkOrientable'],
    GimpPathComboBox: ['GimpPathComboBox', 'GimpIntComboBox', 'GtkComboBox', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable', 'GtkCellEditable', 'GtkCellLayout'],
    GimpPathEditor: ['GimpPathEditor', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable', 'GtkOrientable'],
    GimpPatternChooser: ['GimpPatternChooser', 'GimpResourceChooser', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable', 'GtkOrientable'],
    GimpPickButton: ['GimpPickButton', 'GtkButton', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkActionable', 'GtkActivatable', 'GtkBuildable'],
    GimpPreviewArea: ['GimpPreviewArea', 'GtkDrawingArea', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable'],
    GimpProcBrowserDialog: ['GimpProcBrowserDialog', 'GimpDialog', 'GtkDialog', 'GtkWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable'],
    GimpProcedureDialog: ['GimpProcedureDialog', 'GimpDialog', 'GtkDialog', 'GtkWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable'],
    GimpProgressBar: ['GimpProgressBar', 'GtkProgressBar', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable', 'GtkOrientable'],
    GimpRuler: ['GimpRuler', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable'],
    GimpScaleEntry: ['GimpScaleEntry', 'GimpLabelSpin', 'GimpLabeled', 'GtkGrid', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable', 'GtkOrientable'],
    GimpSizeEntry: ['GimpSizeEntry', 'GtkGrid', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable', 'GtkOrientable'],
    GimpSpinButton: ['GimpSpinButton', 'GtkSpinButton', 'GtkEntry', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable', 'GtkCellEditable', 'GtkEditable', 'GtkOrientable'],
    GimpSpinScale: ['GimpSpinScale', 'GimpSpinButton', 'GtkSpinButton', 'GtkEntry', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable', 'GtkCellEditable', 'GtkEditable', 'GtkOrientable'],
    GimpStringComboBox: ['GimpStringComboBox', 'GtkComboBox', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable', 'GtkCellEditable', 'GtkCellLayout'],
    GimpUnitComboBox: ['GimpUnitComboBox', 'GtkComboBox', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable', 'GtkCellEditable', 'GtkCellLayout'],
    GimpUnitStore: ['GimpUnitStore', 'GObject', 'GtkTreeModel'],
    GimpVectorLoadProcedureDialog: ['GimpVectorLoadProcedureDialog', 'GimpProcedureDialog', 'GimpDialog', 'GtkDialog', 'GtkWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable'],
    GimpZoomModel: ['GimpZoomModel', 'GObject'],
    GimpZoomPreview: ['GimpZoomPreview', 'GimpScrolledPreview', 'GimpPreview', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable', 'GtkOrientable'],
};

// The GTypes above that ARE widgets are the `Widgets` map in the sibling `.d.ts`; these
// are the ones that merely HOLD one, through `set_child`/`get_child`, descending from
// `GObject.Object`. A renderer places them like a container; a check asking "is this a
// widget" must not count them. Derived from the accessor pair, never from a list — the
// count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    GimpAspectType: ['square', 'portrait', 'landscape'],
    GimpChainPosition: ['top', 'left', 'bottom', 'right'],
    GimpCheckSize: ['small-checks', 'medium-checks', 'large-checks'],
    GimpCheckType: ['light-checks', 'gray-checks', 'dark-checks', 'white-only', 'gray-only', 'black-only', 'custom-checks'],
    GimpColorAreaType: ['flat', 'small-checks', 'large-checks'],
    GimpColorSelectorChannel: ['hue', 'saturation', 'value', 'red', 'green', 'blue', 'alpha', 'lch-lightness', 'lch-chroma', 'lch-hue'],
    GimpColorSelectorModel: ['rgb', 'lch', 'hsv'],
    GimpFileChooserAction: ['any', 'open', 'save', 'select-folder', 'create-folder'],
    GimpIntComboBoxLayout: ['icon-only', 'abbreviated', 'full'],
    GimpPageSelectorTarget: ['layers', 'images'],
    GimpSizeEntryUpdatePolicy: ['none', 'size', 'resolution'],
    GimpZoomType: ['in', 'out'],
    GtkIconSize: ['invalid', 'menu', 'small-toolbar', 'large-toolbar', 'button', 'dnd', 'dialog'],
    GtkOrientation: ['horizontal', 'vertical'],
    PangoEllipsizeMode: ['none', 'start', 'middle', 'end'],
};

// The number behind each of those nicks, read from GIR's own `value` attribute.
//
// It ships because position in `ENUM_NICKS` is not the value and a consumer with no
// typelib has no other way to learn it: a surface without GI still has to hand GObject an
// integer. The alternative a consumer reaches for first is counting, and counting is wrong
// on 6 of the 137 enums a GTK 4 vocabulary carries (112 in Gtk-4.0, 25 in Adw-1) --
// `GtkResponseType` runs -1 down to
// -11, `GtkTextWindowType` starts at 1, and `GtkConstraintStrength.required` is
// 1001001000 where counting answers 0.
//
// Same provenance as the nicks above, which is the point: a consumer that reads the numbers
// from an INSTALLED library instead gets two provenances for one table, and a member the
// vocabulary describes but the host predates then looks like a missing number rather than a
// version gap.
export const ENUM_VALUES = {
    'GimpAspectType.landscape': 2,
    'GimpAspectType.portrait': 1,
    'GimpAspectType.square': 0,
    'GimpChainPosition.bottom': 2,
    'GimpChainPosition.left': 1,
    'GimpChainPosition.right': 3,
    'GimpChainPosition.top': 0,
    'GimpCheckSize.large-checks': 2,
    'GimpCheckSize.medium-checks': 1,
    'GimpCheckSize.small-checks': 0,
    'GimpCheckType.black-only': 5,
    'GimpCheckType.custom-checks': 6,
    'GimpCheckType.dark-checks': 2,
    'GimpCheckType.gray-checks': 1,
    'GimpCheckType.gray-only': 4,
    'GimpCheckType.light-checks': 0,
    'GimpCheckType.white-only': 3,
    'GimpColorAreaType.flat': 0,
    'GimpColorAreaType.large-checks': 2,
    'GimpColorAreaType.small-checks': 1,
    'GimpColorSelectorChannel.alpha': 6,
    'GimpColorSelectorChannel.blue': 5,
    'GimpColorSelectorChannel.green': 4,
    'GimpColorSelectorChannel.hue': 0,
    'GimpColorSelectorChannel.lch-chroma': 8,
    'GimpColorSelectorChannel.lch-hue': 9,
    'GimpColorSelectorChannel.lch-lightness': 7,
    'GimpColorSelectorChannel.red': 3,
    'GimpColorSelectorChannel.saturation': 1,
    'GimpColorSelectorChannel.value': 2,
    'GimpColorSelectorModel.hsv': 2,
    'GimpColorSelectorModel.lch': 1,
    'GimpColorSelectorModel.rgb': 0,
    'GimpFileChooserAction.any': -1,
    'GimpFileChooserAction.create-folder': 3,
    'GimpFileChooserAction.open': 0,
    'GimpFileChooserAction.save': 1,
    'GimpFileChooserAction.select-folder': 2,
    'GimpIntComboBoxLayout.abbreviated': 1,
    'GimpIntComboBoxLayout.full': 2,
    'GimpIntComboBoxLayout.icon-only': 0,
    'GimpPageSelectorTarget.images': 1,
    'GimpPageSelectorTarget.layers': 0,
    'GimpSizeEntryUpdatePolicy.none': 0,
    'GimpSizeEntryUpdatePolicy.resolution': 2,
    'GimpSizeEntryUpdatePolicy.size': 1,
    'GimpZoomType.in': 0,
    'GimpZoomType.out': 1,
    'GtkIconSize.button': 4,
    'GtkIconSize.dialog': 6,
    'GtkIconSize.dnd': 5,
    'GtkIconSize.invalid': 0,
    'GtkIconSize.large-toolbar': 3,
    'GtkIconSize.menu': 1,
    'GtkIconSize.small-toolbar': 2,
    'GtkOrientation.horizontal': 0,
    'GtkOrientation.vertical': 1,
    'PangoEllipsizeMode.end': 3,
    'PangoEllipsizeMode.middle': 2,
    'PangoEllipsizeMode.none': 0,
    'PangoEllipsizeMode.start': 1,
};

// The nicks GIR marks `deprecated="1"`.
//
// Two members of one enum may share a value -- that is how GObject spells an alias, and
// `GTK_ALIGN_BASELINE` and `GTK_ALIGN_BASELINE_FILL` are both 4. `ENUM_VALUES` keeps
// both names, so nothing is lost, and this is what says which of the two a number should be
// spelled back as. Stated rather than derived: the pairing is visible in the values, the
// DIRECTION is not.
//
// Read it as evidence, not as a negative: 4 registered-enum members in the 718 GIRs carry
// the attribute at all, and 179 of the 182 value-sharing pairs carry it on neither half.
// A nick missing from here is a nick GIR says nothing about, not a nick GIR calls current.
export const ENUM_DEPRECATED = [];

// The declared remainder: nicks whose GIR `value` is not a number this can carry.
//
// Every nick in `ENUM_NICKS` is in `ENUM_VALUES` or here -- a nick in neither would be a
// silent drop. GIR carries two shapes no integer holds: a symbolic or absent value (Vala
// writes `(null)`, a char enum writes a letter) and an integer past
// `Number.MAX_SAFE_INTEGER`. The value kept here is the raw attribute, so the entry says
// WHAT was unreadable rather than only that something was. Measured over the 718 GIRs in
// ts-for-gir's `girs/`: 32 of 34096 registered-enum members, none in Gtk, Adw, GLib or Gio.
export const ENUM_VALUES_UNREADABLE = {};

// The number behind each member of a registered BITFIELD, keyed the same way.
//
// `ENUM_NICKS` refuses a bitfield because GObject cannot resolve a nick SET, and that
// reason says nothing about one member's number. 23 settable properties in Gtk-4.0 and
// Adw-1 are bitfield-typed -- `GtkEntry:input-hints`, `GtkPopoverMenu:flags`,
// `AdwTabView:shortcuts`, `GtkDropTarget:actions`, ... -- and they are typed bare
// `number`, so a host without GI has nothing to compute one from. Counting is worst
// exactly here: 119 of the 156 Gtk-4.0 bitfield members this vocabulary carries disagree
// with their declaration position, against 29 of 672 enumeration members.
//
// A table of its own rather than more rows in `ENUM_VALUES`, so that "every nick in
// `ENUM_NICKS` has a number or a declared reason" stays a claim about one set.
export const FLAG_VALUES = {
    'GdkModifierType.button1-mask': 256,
    'GdkModifierType.button2-mask': 512,
    'GdkModifierType.button3-mask': 1024,
    'GdkModifierType.button4-mask': 2048,
    'GdkModifierType.button5-mask': 4096,
    'GdkModifierType.control-mask': 4,
    'GdkModifierType.hyper-mask': 134217728,
    'GdkModifierType.lock-mask': 2,
    'GdkModifierType.meta-mask': 268435456,
    'GdkModifierType.mod1-mask': 8,
    'GdkModifierType.mod2-mask': 16,
    'GdkModifierType.mod3-mask': 32,
    'GdkModifierType.mod4-mask': 64,
    'GdkModifierType.mod5-mask': 128,
    'GdkModifierType.modifier-mask': 1543512063,
    'GdkModifierType.modifier-reserved-13-mask': 8192,
    'GdkModifierType.modifier-reserved-14-mask': 16384,
    'GdkModifierType.modifier-reserved-15-mask': 32768,
    'GdkModifierType.modifier-reserved-16-mask': 65536,
    'GdkModifierType.modifier-reserved-17-mask': 131072,
    'GdkModifierType.modifier-reserved-18-mask': 262144,
    'GdkModifierType.modifier-reserved-19-mask': 524288,
    'GdkModifierType.modifier-reserved-20-mask': 1048576,
    'GdkModifierType.modifier-reserved-21-mask': 2097152,
    'GdkModifierType.modifier-reserved-22-mask': 4194304,
    'GdkModifierType.modifier-reserved-23-mask': 8388608,
    'GdkModifierType.modifier-reserved-24-mask': 16777216,
    'GdkModifierType.modifier-reserved-25-mask': 33554432,
    'GdkModifierType.modifier-reserved-29-mask': 536870912,
    'GdkModifierType.release-mask': 1073741824,
    'GdkModifierType.shift-mask': 1,
    'GdkModifierType.super-mask': 67108864,
};

// The same declared remainder for the bitfields. Every one of the 13 members in ts-for-gir's
// `girs/` whose value is past `Number.MAX_SAFE_INTEGER` is a bitfield member (Fwupd, Qmi),
// so this is the table that shape actually reaches.
export const FLAG_VALUES_UNREADABLE = {};

// Declaration GType + property name -> the GType of that property's enum or bitfield.
//
// Without it the value tables above are half an answer. A host with no GI knows it must set
// `orientation` to the number behind the nick `vertical`; `ENUM_VALUES` is keyed
// `GtkOrientation.vertical`, and nothing else says that `orientation` is a
// `GtkOrientation`. Deriving it is not available: `never` is a member of several Gtk enums,
// and choosing between them produces a wrong number rather than a missing one.
//
// Only where the property's OWN type is the enum. An array of them and a union that mentions
// one are both entries a consumer would resolve wrongly, so neither is written.
//
// A GType named here has numbers in SOME vocabulary, not necessarily this one: the namespace
// that OWNS an enum publishes it, so 83 of the 909 entries a full run emits want the owner's
// vocabulary loaded too. Owners that emit none (Gdk, Pango) are inlined into the tables above.
export const PROP_ENUMS = {
    'GimpChainButton.icon-size': 'GtkIconSize',
    'GimpChainButton.position': 'GimpChainPosition',
    'GimpColorArea.drag-mask': 'GdkModifierType',
    'GimpColorArea.type': 'GimpColorAreaType',
    'GimpColorButton.type': 'GimpColorAreaType',
    'GimpColorScale.channel': 'GimpColorSelectorChannel',
    'GimpFileChooser.action': 'GimpFileChooserAction',
    'GimpIntComboBox.ellipsize': 'PangoEllipsizeMode',
    'GimpIntComboBox.layout': 'GimpIntComboBoxLayout',
    'GimpNumberPairEntry.aspect': 'GimpAspectType',
    'GimpPageSelector.target': 'GimpPageSelectorTarget',
    'GimpPreviewArea.check-size': 'GimpCheckSize',
    'GimpPreviewArea.check-type': 'GimpCheckType',
    'GimpRuler.orientation': 'GtkOrientation',
    'GimpStringComboBox.ellipsize': 'PangoEllipsizeMode',
};

// `<enum GType>.<nick>` -> the kind of value that ARIA slot takes.
//
// The one table here that is not about a ParamSpec. A GtkBuilder or Blueprint
// `accessibility { … }` block is typed by GTK's ARIA table instead, and the two disagree
// where it matters: `orientation` is settable on a `GtkLabel` that implements no
// `GtkOrientable` and has no such property, and `checked` is a `GtkAccessibleTristate`, so
// `checked: true` means the number 1 and not the boolean. A consumer typing those slots
// from the widget gets both wrong, silently.
//
// Read from each member's own documentation, which is where GTK keeps the table --
// `gtk_accessible_property_init_value()` is the C half and is not introspectable, the
// sentence is. Complete or absent, never partial: a member whose documentation states no
// value type fails generation and names itself, because a missing row is indistinguishable
// from "GTK has no such name" and the plausible fallback emits `true` where GTK means 1.
export const ARIA_VALUE_TYPES = {};

// The same keys, for the `'enum'` rows only -> the GType of the enum.
//
// The join on from a kind to a number, and a table of its own for the reason `PROP_ENUMS`
// is one: folding the GType into `ARIA_VALUE_TYPES` would make its values a mix of six
// reserved words and arbitrary GTypes, and telling them apart would be the consumer's
// problem. With this, `ARIA_VALUE_TYPES[k] === 'enum'` is the whole test, and
// `ENUM_NICKS[ARIA_VALUE_ENUMS[k]]` is the nick list.
export const ARIA_VALUE_ENUMS = {};

export const SLOT_CANDIDATES = {
    GimpBrowser: {
        'widget': 'set_widget',
    },
    GimpRuler: {
        'track-widget': 'add_track_widget',
    },
};

export const SINCE = {
    'GimpBusyBox.message': '2.10.4',
    'GimpChainButton.active': '2.10.10',
    'GimpChainButton.icon-size': '2.10.10',
    'GimpChainButton.position': '2.4',
    'GimpColorArea.color': '2.4',
    'GimpColorArea.draw-border': '2.4',
    'GimpColorArea.type': '2.4',
    'GimpColorButton.area-height': '2.8',
    'GimpColorButton.area-width': '2.8',
    'GimpColorButton.color': '2.4',
    'GimpColorButton.color-config': '2.10',
    'GimpColorButton.continuous-update': '2.4',
    'GimpColorButton.title': '2.4',
    'GimpColorButton.type': '2.4',
    'GimpColorProfileComboBox.dialog': '2.4',
    'GimpColorProfileComboBox.model': '2.4',
    'GimpColorProfileStore.history': '2.4',
    'GimpColorScale.channel': '2.8',
    'GimpDialog.help-func': '2.2',
    'GimpDialog.help-id': '2.2',
    'GimpDialog.parent': '2.8',
    'GimpDrawableChooser': '3.0',
    'GimpDrawableChooser.drawable': '3.0',
    'GimpDrawableChooser.drawable-type': '3.0',
    'GimpDrawableChooser.label': '3.0',
    'GimpDrawableChooser.title': '3.0',
    'GimpEnumLabel.enum-type': '2.8',
    'GimpEnumLabel.enum-value': '2.8',
    'GimpEnumStore.enum-type': '2.4',
    'GimpFileChooser': '3.0',
    'GimpFileChooser.action': '3.0',
    'GimpFileChooser.file': '3.0',
    'GimpFileChooser.label': '3.0',
    'GimpFileChooser.title': '3.0',
    'GimpImageChooser': '3.0',
    'GimpImageChooser.image': '3.0',
    'GimpImageChooser.label': '3.0',
    'GimpImageChooser.title': '3.0',
    'GimpIntComboBox.ellipsize': '2.4',
    'GimpIntComboBox.label': '2.10',
    'GimpIntComboBox.layout': '2.10',
    'GimpIntComboBox.value': '3.0',
    'GimpIntRadioFrame.store': '3.0',
    'GimpIntRadioFrame.value': '3.0',
    'GimpIntStore.user-data-type': '2.4',
    'GimpItemChooser': '3.2',
    'GimpItemChooser.item': '3.0',
    'GimpItemChooser.item-type': '3.0',
    'GimpItemChooser.label': '3.0',
    'GimpItemChooser.title': '3.0',
    'GimpLabelColor.editable': '3.0',
    'GimpLabelColor.value': '3.0',
    'GimpLabelEntry.value': '3.0',
    'GimpLabelIntWidget.value': '3.0',
    'GimpLabelIntWidget.widget': '3.0',
    'GimpLabelSpin.digits': '3.0',
    'GimpLabelSpin.lower': '3.0',
    'GimpLabelSpin.upper': '3.0',
    'GimpLabelSpin.value': '3.0',
    'GimpLabelStringWidget.value': '3.0',
    'GimpLabelStringWidget.widget': '3.0',
    'GimpLabeled.label': '3.0',
    'GimpPageSelector.n-pages': '2.4',
    'GimpPageSelector.target': '2.4',
    'GimpPageSelector::activate': '2.4',
    'GimpPageSelector::selection-changed': '2.4',
    'GimpResourceChooser': '3.0',
    'GimpResourceChooser.label': '3.0',
    'GimpResourceChooser.resource': '3.0',
    'GimpResourceChooser.title': '3.0',
    'GimpResourceChooser::resource-set': '3.0',
    'GimpStringComboBox.ellipsize': '2.4',
    'GimpStringComboBox.id-column': '2.4',
    'GimpStringComboBox.label-column': '2.4',
    'GimpStringComboBox.value': '3.0',
    'GimpZoomPreview.model': '2.4',
};
