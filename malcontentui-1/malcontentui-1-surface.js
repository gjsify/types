// The widget vocabulary of MalcontentUi-1 as runtime data.
//
// GENERATED — do not edit. Provenance: MalcontentUi-1 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const SURFACE_PROVENANCE = 'MalcontentUi-1 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object';

export const OWN_PROPS = {
    MctRestrictApplicationsDialog: ['app-filter', 'user-display-name'],
    MctRestrictApplicationsSelector: ['app-filter', 'search'],
    MctUserControls: ['app-filter', 'dbus-connection', 'description', 'permission', 'user', 'user-account-type', 'user-display-name', 'user-locale'],
};

export const OWN_SIGNALS = {
    MctRestrictApplicationsSelector: ['changed'],
};

export const DECLS = {
    MctRestrictApplicationsDialog: ['MctRestrictApplicationsDialog', 'AdwPreferencesDialog', 'AdwDialog', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget', 'GtkShortcutManager'],
    MctRestrictApplicationsSelector: ['MctRestrictApplicationsSelector', 'GtkBox', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget', 'GtkOrientable'],
    MctUserControls: ['MctUserControls', 'AdwBin', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget'],
};

// The GTypes above that are NOT widgets: they hold one through `set_child`/`get_child`
// and descend from `GObject.Object`. A renderer places them like a container; a check
// asking "is this a widget" must not count them. Derived from the accessor pair, never
// from a list — the count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    MctUserType: ['unknown', 'system', 'child', 'parent'],
};

export const SLOT_CANDIDATES = {};

export const SINCE = {
    'MctRestrictApplicationsDialog.app-filter': '0.5.0',
    'MctRestrictApplicationsDialog.user-display-name': '0.5.0',
    'MctRestrictApplicationsSelector.app-filter': '0.5.0',
    'MctRestrictApplicationsSelector.search': '0.12.0',
    'MctUserControls.app-filter': '0.5.0',
    'MctUserControls.dbus-connection': '0.7.0',
    'MctUserControls.description': '0.11.0',
    'MctUserControls.permission': '0.5.0',
    'MctUserControls.user': '0.14.0',
    'MctUserControls.user-account-type': '0.5.0',
    'MctUserControls.user-display-name': '0.5.0',
    'MctUserControls.user-locale': '0.5.0',
};
