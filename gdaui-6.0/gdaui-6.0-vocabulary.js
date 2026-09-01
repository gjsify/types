// The widget vocabulary of Gdaui-6.0 as runtime data.
//
// GENERATED — do not edit. Provenance: Gdaui-6.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface — prop(s) no TypeScript value satisfies: Gdaui.BasicForm.paramlist Gdaui.BasicForm.xml-layout Gdaui.RawGrid.xml-layout
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'Gdaui',
    version: '6.0',
    libraryVersion: null,
    childHolders: 0,
    droppedBases: ['GObject.InitiallyUnowned', 'GObject.Object', 'Atk.ImplementorIface'],
    inlinedBases: [],
    unsettableProps: ['Gdaui.BasicForm.paramlist', 'Gdaui.BasicForm.xml-layout', 'Gdaui.RawGrid.xml-layout'],
};

export const OWN_PROPS = {
    GdauiBasicForm: ['entries-auto-default', 'paramlist', 'xml-layout'],
    GdauiCloud: ['label-column', 'max-scale', 'min-scale', 'model', 'weight-column'],
    GdauiCombo: ['as-list', 'model'],
    GdauiDataFilter: ['data-widget'],
    GdauiDataProxyInfo: ['data-proxy'],
    GdauiEntry: ['prefix', 'suffix'],
    GdauiEntryCombo: ['set-default-if-invalid'],
    GdauiEntryCommonTime: ['editing-canceled', 'type'],
    GdauiEntryNumber: ['editing-canceled', 'options'],
    GdauiEntryString: ['editing-canceled', 'multiline', 'options'],
    GdauiForm: ['model'],
    GdauiFormattedEntry: ['format', 'mask'],
    GdauiGrid: ['model'],
    GdauiLogin: ['dsn'],
    GdauiNumericEntry: ['decimal-sep', 'n-decimals', 'thousands-sep', 'type'],
    GdauiRawForm: ['model'],
    GdauiRawGrid: ['info-cell-visible', 'model', 'xml-layout'],
    GdauiRtEditor: ['in-scrolled-window', 'no-background', 'show-markup'],
    GdauiServerOperation: ['hide-single-header', 'server-operation'],
};

export const OWN_SIGNALS = {
    GdauiBasicForm: ['activated', 'holder-changed', 'layout-changed', 'populate-popup'],
    GdauiCloud: ['activate'],
    GdauiDataEntry: ['contents-activated', 'contents-modified', 'expand-changed', 'status-changed'],
    GdauiDataProxy: ['proxy-changed'],
    GdauiDataSelector: ['selection-changed'],
    GdauiLogin: ['changed'],
    GdauiRawGrid: ['double-clicked', 'populate-popup'],
    GdauiRtEditor: ['changed'],
};

export const DECLS = {
    GdauiBasicForm: ['GdauiBasicForm', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    GdauiCloud: ['GdauiCloud', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GdauiDataSelector', 'GtkBuildable', 'GtkOrientable'],
    GdauiCombo: ['GdauiCombo', 'GtkComboBox', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GdauiDataSelector', 'GtkBuildable', 'GtkCellEditable', 'GtkCellLayout'],
    GdauiDataFilter: ['GdauiDataFilter', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    GdauiDataProxyInfo: ['GdauiDataProxyInfo', 'GtkToolbar', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable', 'GtkToolShell'],
    GdauiEntry: ['GdauiEntry', 'GtkEntry', 'GtkWidget', 'GtkBuildable', 'GtkCellEditable', 'GtkEditable'],
    GdauiEntryBin: ['GdauiEntryBin', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GdauiDataEntry', 'GtkBuildable', 'GtkOrientable'],
    GdauiEntryBoolean: ['GdauiEntryBoolean', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GdauiDataEntry', 'GtkBuildable', 'GtkOrientable'],
    GdauiEntryCombo: ['GdauiEntryCombo', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GdauiDataEntry', 'GtkBuildable', 'GtkOrientable'],
    GdauiEntryCommonTime: ['GdauiEntryCommonTime', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GdauiDataEntry', 'GtkBuildable', 'GtkCellEditable', 'GtkOrientable'],
    GdauiEntryDate: ['GdauiEntryDate', 'GdauiEntryCommonTime', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GdauiDataEntry', 'GtkBuildable', 'GtkCellEditable', 'GtkOrientable'],
    GdauiEntryNone: ['GdauiEntryNone', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GdauiDataEntry', 'GtkBuildable', 'GtkOrientable'],
    GdauiEntryNumber: ['GdauiEntryNumber', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GdauiDataEntry', 'GtkBuildable', 'GtkCellEditable', 'GtkOrientable'],
    GdauiEntryString: ['GdauiEntryString', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GdauiDataEntry', 'GtkBuildable', 'GtkCellEditable', 'GtkOrientable'],
    GdauiEntryTime: ['GdauiEntryTime', 'GdauiEntryCommonTime', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GdauiDataEntry', 'GtkBuildable', 'GtkCellEditable', 'GtkOrientable'],
    GdauiEntryTimestamp: ['GdauiEntryTimestamp', 'GdauiEntryCommonTime', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GdauiDataEntry', 'GtkBuildable', 'GtkCellEditable', 'GtkOrientable'],
    GdauiForm: ['GdauiForm', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GdauiDataProxy', 'GdauiDataSelector', 'GtkBuildable', 'GtkOrientable'],
    GdauiFormattedEntry: ['GdauiFormattedEntry', 'GdauiEntry', 'GtkEntry', 'GtkWidget', 'GtkBuildable', 'GtkCellEditable', 'GtkEditable'],
    GdauiGrid: ['GdauiGrid', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GdauiDataProxy', 'GdauiDataSelector', 'GtkBuildable', 'GtkOrientable'],
    GdauiLogin: ['GdauiLogin', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    GdauiNumericEntry: ['GdauiNumericEntry', 'GdauiEntry', 'GtkEntry', 'GtkWidget', 'GtkBuildable', 'GtkCellEditable', 'GtkEditable'],
    GdauiProviderSelector: ['GdauiProviderSelector', 'GdauiCombo', 'GtkComboBox', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GdauiDataSelector', 'GtkBuildable', 'GtkCellEditable', 'GtkCellLayout'],
    GdauiRawForm: ['GdauiRawForm', 'GdauiBasicForm', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GdauiDataProxy', 'GdauiDataSelector', 'GtkBuildable', 'GtkOrientable'],
    GdauiRawGrid: ['GdauiRawGrid', 'GtkTreeView', 'GtkContainer', 'GtkWidget', 'GdauiDataProxy', 'GdauiDataSelector', 'GtkBuildable', 'GtkScrollable'],
    GdauiRtEditor: ['GdauiRtEditor', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    GdauiServerOperation: ['GdauiServerOperation', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
};

// The GTypes above that are NOT widgets: they hold one through `set_child`/`get_child`
// and descend from `GObject.Object`. A renderer places them like a container; a check
// asking "is this a widget" must not count them. Derived from the accessor pair, never
// from a list — the count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {};

export const SLOT_CANDIDATES = {};

export const SINCE = {
    'GdauiBasicForm::populate-popup': '4.2.4',
};
