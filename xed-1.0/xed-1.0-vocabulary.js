// The widget vocabulary of Xed-1.0 as runtime data.
//
// GENERATED — do not edit. Provenance: Xed-1.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface Gio.ActionGroup Gio.ActionMap
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'Xed',
    version: '1.0',
    libraryVersion: null,
    childHolders: 0,
    droppedBases: ['GObject.InitiallyUnowned', 'GObject.Object', 'Atk.ImplementorIface', 'Gio.ActionGroup', 'Gio.ActionMap'],
    inlinedBases: [],
    unsettableProps: [],
};

export const OWN_PROPS = {
    XedEncodingsComboBox: ['save-mode'],
    XedPanel: ['orientation'],
    XedProgressInfoBar: ['has-cancel-button'],
    XedTab: ['autosave', 'autosave-interval'],
};

export const OWN_SIGNALS = {
    XedNotebook: ['tab-added', 'tab-close-request', 'tab-detached', 'tab-removed', 'tabs-reordered'],
    XedPanel: ['close', 'focus-document', 'item-added', 'item-removed'],
    XedView: ['drop-uris'],
    XedWindow: ['active-tab-changed', 'active-tab-state-changed', 'tab-added', 'tab-removed', 'tabs-reordered'],
};

export const DECLS = {
    XedEncodingsComboBox: ['XedEncodingsComboBox', 'GtkComboBox', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkCellEditable', 'GtkCellLayout'],
    XedFileChooserDialog: ['XedFileChooserDialog', 'GtkFileChooserDialog', 'GtkDialog', 'GtkWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkFileChooser'],
    XedNotebook: ['XedNotebook', 'GtkNotebook', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    XedPanel: ['XedPanel', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    XedProgressInfoBar: ['XedProgressInfoBar', 'GtkInfoBar', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    XedSearchbar: ['XedSearchbar', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    XedStatusbar: ['XedStatusbar', 'GtkStatusbar', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    XedTab: ['XedTab', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    XedView: ['XedView', 'GtkSourceView', 'GtkTextView', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkScrollable'],
    XedWindow: ['XedWindow', 'GtkApplicationWindow', 'GtkWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
};

// The GTypes above that are NOT widgets: they hold one through `set_child`/`get_child`
// and descend from `GObject.Object`. A renderer places them like a container; a check
// asking "is this a widget" must not count them. Derived from the accessor pair, never
// from a list — the count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    XedSearchMode: ['search', 'replace'],
    XedTabState: ['state-normal', 'state-loading', 'state-reverting', 'state-saving', 'state-printing', 'state-print-previewing', 'state-showing-print-preview', 'state-generic-not-editable', 'state-loading-error', 'state-reverting-error', 'state-saving-error', 'state-generic-error', 'state-closing', 'state-externally-modified-notification', 'num-of-states'],
};

export const SLOT_CANDIDATES = {
    XedTab: {
        'info-bar': 'set_info_bar',
    },
    XedWindow: {
        'active-tab': 'set_active_tab',
    },
};

export const SINCE = {};
