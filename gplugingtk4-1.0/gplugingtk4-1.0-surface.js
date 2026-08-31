// The widget vocabulary of GPluginGtk4-1.0 as runtime data.
//
// GENERATED — do not edit. Provenance: GPluginGtk4-1.0 — library 0.44.2 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const SURFACE_PROVENANCE = 'GPluginGtk4-1.0 — library 0.44.2 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object';

export const OWN_PROPS = {
    GPluginGtkPluginPage: ['plugin', 'settings-backend'],
    GPluginGtkPluginRow: ['plugin'],
    GPluginGtkPluginSettingsList: ['settings'],
    GPluginGtkView: ['manager', 'settings-backend', 'show-internal'],
};

export const OWN_SIGNALS = {
    GPluginGtkPluginPage: ['plugin-state-set'],
    GPluginGtkPluginRow: ['plugin-state-set'],
};

export const DECLS = {
    GPluginGtkPluginPage: ['GPluginGtkPluginPage', 'GtkBox', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget', 'GtkOrientable'],
    GPluginGtkPluginRow: ['GPluginGtkPluginRow', 'GtkListBoxRow', 'GtkWidget', 'GtkAccessible', 'GtkActionable', 'GtkBuildable', 'GtkConstraintTarget'],
    GPluginGtkPluginSettingsList: ['GPluginGtkPluginSettingsList', 'GtkBox', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget', 'GtkOrientable'],
    GPluginGtkView: ['GPluginGtkView', 'GtkBox', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget', 'GtkOrientable'],
};

// The GTypes above that are NOT widgets: they hold one through `set_child`/`get_child`
// and descend from `GObject.Object`. A renderer places them like a container; a check
// asking "is this a widget" must not count them. Derived from the accessor pair, never
// from a list — the count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {};

export const SLOT_CANDIDATES = {};

export const SINCE = {
    'GPluginGtkPluginPage.plugin': '0.39',
    'GPluginGtkPluginPage.settings-backend': '0.40',
    'GPluginGtkPluginRow.plugin': '0.38',
};
