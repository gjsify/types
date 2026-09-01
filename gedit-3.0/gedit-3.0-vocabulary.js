// The widget vocabulary of Gedit-3.0 as runtime data.
//
// GENERATED — do not edit. Provenance: Gedit-3.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface Gio.ActionGroup Gio.ActionMap
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'Gedit',
    version: '3.0',
    libraryVersion: null,
    childHolders: 0,
    droppedBases: ['GObject.InitiallyUnowned', 'GObject.Object', 'Atk.ImplementorIface', 'Gio.ActionGroup', 'Gio.ActionMap'],
    inlinedBases: [],
    unsettableProps: [],
};

export const OWN_PROPS = {
    GeditEncodingsComboBox: ['save-mode'],
    GeditTab: ['autosave', 'autosave-interval'],
};

export const OWN_SIGNALS = {
    GeditView: ['drop-uris'],
    GeditWindow: ['active-tab-changed', 'tab-added', 'tab-removed'],
};

export const DECLS = {
    GeditEncodingsComboBox: ['GeditEncodingsComboBox', 'GtkComboBox', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkCellEditable', 'GtkCellLayout'],
    GeditTab: ['GeditTab', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    GeditView: ['GeditView', 'TeplView', 'GtkSourceView', 'GtkTextView', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkScrollable'],
    GeditWindow: ['GeditWindow', 'GtkApplicationWindow', 'GtkWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
};

// The GTypes above that are NOT widgets: they hold one through `set_child`/`get_child`
// and descend from `GObject.Object`. A renderer places them like a container; a check
// asking "is this a widget" must not count them. Derived from the accessor pair, never
// from a list — the count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    GeditTabState: ['normal', 'loading', 'reverting', 'saving', 'printing', 'showing-print-preview', 'loading-error', 'reverting-error', 'saving-error', 'generic-error', 'closing', 'externally-modified-notification'],
};

export const SLOT_CANDIDATES = {
    GeditTab: {
        'info-bar': 'set_info_bar',
    },
    GeditWindow: {
        'active-tab': 'set_active_tab',
    },
};

export const SINCE = {
    'GeditWindow::active-tab-changed': '47',
};
