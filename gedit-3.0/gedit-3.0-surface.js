// The widget vocabulary of Gedit-3.0 as runtime data.
//
// GENERATED — do not edit. Provenance: Gedit-3.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface Gio.ActionGroup Gio.ActionMap
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const SURFACE_PROVENANCE = 'Gedit-3.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface Gio.ActionGroup Gio.ActionMap';

export const OWN_PROPS = {
    GeditEncodingsComboBox: ['save-mode'],
    GeditTab: ['autosave', 'autosave-interval'],
};

export const OWN_SIGNALS = {
    GeditTab: ['drop-uris'],
    GeditView: ['drop-uris'],
    GeditWindow: ['active-tab-changed', 'active-tab-state-changed', 'tab-added', 'tab-removed', 'tabs-reordered'],
};

export const DECLS = {
    GeditEncodingsComboBox: ['GeditEncodingsComboBox', 'GtkComboBox', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkCellEditable', 'GtkCellLayout'],
    GeditStatusbar: ['GeditStatusbar', 'GtkStatusbar', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    GeditTab: ['GeditTab', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    GeditView: ['GeditView', 'GtkSourceView', 'GtkTextView', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkScrollable'],
    GeditWindow: ['GeditWindow', 'GtkApplicationWindow', 'GtkWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
};

export const ENUM_NICKS = {
    GeditTabState: ['state-normal', 'state-loading', 'state-reverting', 'state-saving', 'state-printing', 'state-showing-print-preview', 'state-loading-error', 'state-reverting-error', 'state-saving-error', 'state-generic-error', 'state-closing', 'state-externally-modified-notification', 'num-of-states'],
};

export const SLOT_CANDIDATES = {
    GeditTab: {
        'info-bar': 'set_info_bar',
    },
    GeditWindow: {
        'active-tab': 'set_active_tab',
    },
};

export const SINCE = {};
