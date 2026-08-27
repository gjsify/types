// The widget vocabulary of Pluma-1.0 as runtime data.
//
// GENERATED — do not edit. Provenance: Pluma-1.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface Gio.ActionGroup Gio.ActionMap
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const SURFACE_PROVENANCE = 'Pluma-1.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface Gio.ActionGroup Gio.ActionMap';

export const OWN_PROPS = {
    PlumaEncodingsComboBox: ['save-mode'],
    PlumaPanel: ['panel-orientation'],
    PlumaProgressMessageArea: ['has-cancel-button'],
    PlumaStatusComboBox: ['label'],
    PlumaTab: ['autosave', 'autosave-interval'],
};

export const OWN_SIGNALS = {
    PlumaNotebook: ['tab-added', 'tab-close-request', 'tab-detached', 'tab-removed', 'tabs-reordered'],
    PlumaPanel: ['close', 'focus-document', 'item-added', 'item-removed'],
    PlumaStatusComboBox: ['changed'],
    PlumaView: ['drop-uris', 'reset-searched-text', 'start-interactive-goto-line', 'start-interactive-search'],
    PlumaWindow: ['active-tab-changed', 'active-tab-state-changed', 'tab-added', 'tab-removed', 'tabs-reordered'],
};

export const DECLS = {
    PlumaEncodingsComboBox: ['PlumaEncodingsComboBox', 'GtkComboBox', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkCellEditable', 'GtkCellLayout'],
    PlumaNotebook: ['PlumaNotebook', 'GtkNotebook', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    PlumaPanel: ['PlumaPanel', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    PlumaProgressMessageArea: ['PlumaProgressMessageArea', 'GtkInfoBar', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    PlumaStatusComboBox: ['PlumaStatusComboBox', 'GtkEventBox', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    PlumaStatusbar: ['PlumaStatusbar', 'GtkStatusbar', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    PlumaTab: ['PlumaTab', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    PlumaView: ['PlumaView', 'GtkSourceView', 'GtkTextView', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkScrollable'],
    PlumaWindow: ['PlumaWindow', 'GtkApplicationWindow', 'GtkWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
};

export const ENUM_NICKS = {
    PlumaDocumentNewlineType: ['lf', 'cr', 'cr-lf'],
    PlumaTabState: ['state-normal', 'state-loading', 'state-reverting', 'state-saving', 'state-printing', 'state-print-previewing', 'state-showing-print-preview', 'state-generic-not-editable', 'state-loading-error', 'state-reverting-error', 'state-saving-error', 'state-generic-error', 'state-closing', 'state-externally-modified-notification', 'num-of-states'],
};

export const SLOT_CANDIDATES = {
    PlumaStatusComboBox: {
        'item': 'set_item',
    },
    PlumaTab: {
        'info-bar': 'set_info_bar',
    },
    PlumaWindow: {
        'active-tab': 'set_active_tab',
    },
};

export const SINCE = {};
