// The widget vocabulary of Gdaui-5.0 as runtime data.
//
// GENERATED — do not edit. Provenance: Gdaui-5.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface — prop(s) no TypeScript value satisfies: Gdaui.BasicForm.paramlist Gdaui.BasicForm.xml-layout Gdaui.RawGrid.xml-layout
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const SURFACE_PROVENANCE = 'Gdaui-5.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface — prop(s) no TypeScript value satisfies: Gdaui.BasicForm.paramlist Gdaui.BasicForm.xml-layout Gdaui.RawGrid.xml-layout';

export const OWN_PROPS = {
    GdauiBasicForm: ['entries-auto-default', 'headers-sensitive', 'paramlist', 'show-actions', 'xml-layout'],
    GdauiCloud: ['label-column', 'max-scale', 'min-scale', 'model', 'weight-column'],
    GdauiCombo: ['as-list', 'model'],
    GdauiDataFilter: ['data-widget'],
    GdauiDataProxyInfo: ['data-proxy'],
    GdauiEntry: ['prefix', 'suffix'],
    GdauiEntryCombo: ['set-default-if-invalid'],
    GdauiEntryCommonTime: ['editing-canceled', 'type'],
    GdauiEntryNumber: ['editing-canceled', 'options'],
    GdauiEntryShell: ['actions', 'handler', 'is-cell-renderer'],
    GdauiEntryString: ['editing-canceled', 'multiline', 'options'],
    GdauiEntryWrapper: ['set-default-if-invalid'],
    GdauiForm: ['model'],
    GdauiFormattedEntry: ['format', 'mask'],
    GdauiGrid: ['model'],
    GdauiLogin: ['dsn'],
    GdauiNumericEntry: ['decimal-sep', 'n-decimals', 'thousands-sep', 'type'],
    GdauiRawForm: ['model'],
    GdauiRawGrid: ['global-actions-visible', 'info-cell-visible', 'model', 'xml-layout'],
    GdauiRtEditor: ['in-scrolled-window', 'no-background', 'show-markup'],
    GdauiServerOperation: ['hide-single-header', 'server-operation'],
};

export const OWN_SIGNALS = {
    GdauiBasicForm: ['activated', 'holder-changed', 'layout-changed', 'populate-popup'],
    GdauiCloud: ['activate'],
    GdauiLogin: ['changed'],
    GdauiRawGrid: ['double-clicked', 'populate-popup'],
    GdauiRtEditor: ['changed'],
};

export const DECLS = {
    GdauiBasicForm: ['GdauiBasicForm', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    GdauiCloud: ['GdauiCloud', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GdauiDataSelector', 'GtkBuildable', 'GtkOrientable'],
    GdauiCombo: ['GdauiCombo', 'GtkComboBox', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GdauiDataSelector', 'GtkBuildable', 'GtkCellEditable', 'GtkCellLayout'],
    GdauiDataFilter: ['GdauiDataFilter', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    GdauiDataProxyInfo: ['GdauiDataProxyInfo', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    GdauiEntry: ['GdauiEntry', 'GtkEntry', 'GtkWidget', 'GtkBuildable', 'GtkCellEditable', 'GtkEditable'],
    GdauiEntryBin: ['GdauiEntryBin', 'GdauiEntryWrapper', 'GdauiEntryShell', 'GtkViewport', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GdauiDataEntry', 'GtkBuildable', 'GtkScrollable'],
    GdauiEntryBoolean: ['GdauiEntryBoolean', 'GdauiEntryWrapper', 'GdauiEntryShell', 'GtkViewport', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GdauiDataEntry', 'GtkBuildable', 'GtkScrollable'],
    GdauiEntryCombo: ['GdauiEntryCombo', 'GdauiEntryShell', 'GtkViewport', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GdauiDataEntry', 'GtkBuildable', 'GtkScrollable'],
    GdauiEntryCommonTime: ['GdauiEntryCommonTime', 'GdauiEntryWrapper', 'GdauiEntryShell', 'GtkViewport', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GdauiDataEntry', 'GtkBuildable', 'GtkCellEditable', 'GtkScrollable'],
    GdauiEntryDate: ['GdauiEntryDate', 'GdauiEntryCommonTime', 'GdauiEntryWrapper', 'GdauiEntryShell', 'GtkViewport', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GdauiDataEntry', 'GtkBuildable', 'GtkCellEditable', 'GtkScrollable'],
    GdauiEntryNone: ['GdauiEntryNone', 'GdauiEntryWrapper', 'GdauiEntryShell', 'GtkViewport', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GdauiDataEntry', 'GtkBuildable', 'GtkScrollable'],
    GdauiEntryNumber: ['GdauiEntryNumber', 'GdauiEntryWrapper', 'GdauiEntryShell', 'GtkViewport', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GdauiDataEntry', 'GtkBuildable', 'GtkCellEditable', 'GtkScrollable'],
    GdauiEntryShell: ['GdauiEntryShell', 'GtkViewport', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkScrollable'],
    GdauiEntryString: ['GdauiEntryString', 'GdauiEntryWrapper', 'GdauiEntryShell', 'GtkViewport', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GdauiDataEntry', 'GtkBuildable', 'GtkCellEditable', 'GtkScrollable'],
    GdauiEntryTime: ['GdauiEntryTime', 'GdauiEntryCommonTime', 'GdauiEntryWrapper', 'GdauiEntryShell', 'GtkViewport', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GdauiDataEntry', 'GtkBuildable', 'GtkCellEditable', 'GtkScrollable'],
    GdauiEntryTimestamp: ['GdauiEntryTimestamp', 'GdauiEntryCommonTime', 'GdauiEntryWrapper', 'GdauiEntryShell', 'GtkViewport', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GdauiDataEntry', 'GtkBuildable', 'GtkCellEditable', 'GtkScrollable'],
    GdauiEntryWrapper: ['GdauiEntryWrapper', 'GdauiEntryShell', 'GtkViewport', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GdauiDataEntry', 'GtkBuildable', 'GtkScrollable'],
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

export const ENUM_NICKS = {};

export const SLOT_CANDIDATES = {
    GdauiEntryShell: {
        'entry': 'pack_entry',
    },
};

export const SINCE = {};
