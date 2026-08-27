// The widget vocabulary of Gd-1.0 as runtime data.
//
// GENERATED — do not edit. Provenance: Gd-1.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const SURFACE_PROVENANCE = 'Gd-1.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface';

export const OWN_PROPS = {
    GdHeaderBar: ['custom-title', 'hpadding', 'spacing', 'subtitle', 'title', 'vpadding'],
    GdHeaderButton: ['label', 'symbolic-icon-name', 'use-markup'],
    GdMainToolbar: ['show-modes'],
    GdMainView: ['model', 'selection-mode', 'view-type'],
    GdRevealer: ['orientation', 'reveal-child', 'transition-duration'],
    GdStack: ['homogeneous', 'transition-duration', 'transition-type', 'visible-child', 'visible-child-name'],
    GdStackSwitcher: ['stack'],
    GdTaggedEntry: ['tag-close-visible'],
};

export const OWN_SIGNALS = {
    GdMainView: ['item-activated', 'selection-mode-request', 'view-selection-changed'],
    GdTaggedEntry: ['tag-button-clicked', 'tag-clicked'],
};

export const DECLS = {
    GdHeaderBar: ['GdHeaderBar', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    GdHeaderMenuButton: ['GdHeaderMenuButton', 'GtkMenuButton', 'GtkToggleButton', 'GtkButton', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GdHeaderButton', 'GtkActionable', 'GtkActivatable', 'GtkBuildable'],
    GdHeaderRadioButton: ['GdHeaderRadioButton', 'GtkRadioButton', 'GtkCheckButton', 'GtkToggleButton', 'GtkButton', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GdHeaderButton', 'GtkActionable', 'GtkActivatable', 'GtkBuildable'],
    GdHeaderSimpleButton: ['GdHeaderSimpleButton', 'GtkButton', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GdHeaderButton', 'GtkActionable', 'GtkActivatable', 'GtkBuildable'],
    GdHeaderToggleButton: ['GdHeaderToggleButton', 'GtkToggleButton', 'GtkButton', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GdHeaderButton', 'GtkActionable', 'GtkActivatable', 'GtkBuildable'],
    GdMainIconView: ['GdMainIconView', 'GtkIconView', 'GtkContainer', 'GtkWidget', 'GdMainViewGeneric', 'GtkBuildable', 'GtkCellLayout', 'GtkScrollable'],
    GdMainListView: ['GdMainListView', 'GtkTreeView', 'GtkContainer', 'GtkWidget', 'GdMainViewGeneric', 'GtkBuildable', 'GtkScrollable'],
    GdMainToolbar: ['GdMainToolbar', 'GtkToolbar', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable', 'GtkToolShell'],
    GdMainView: ['GdMainView', 'GtkScrolledWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    GdRevealer: ['GdRevealer', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    GdStack: ['GdStack', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    GdStackSwitcher: ['GdStackSwitcher', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    GdTaggedEntry: ['GdTaggedEntry', 'GtkSearchEntry', 'GtkEntry', 'GtkWidget', 'GtkBuildable', 'GtkCellEditable', 'GtkEditable'],
};

export const ENUM_NICKS = {};

export const SLOT_CANDIDATES = {
    GdHeaderBar: {
        'custom-title': 'set_custom_title',
        'end': 'pack_end',
        'start': 'pack_start',
    },
    GdStack: {
        'visible-child': 'set_visible_child',
    },
    GdStackSwitcher: {
        'stack': 'set_stack',
    },
};

export const SINCE = {};
