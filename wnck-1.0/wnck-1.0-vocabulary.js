// The widget vocabulary of Wnck-1.0 as runtime data.
//
// GENERATED — do not edit. Provenance: Wnck-1.0 — library 2.31.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface — prop(s) no TypeScript value satisfies: Wnck.ActionMenu.window
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'Wnck',
    version: '1.0',
    libraryVersion: '2.31.0',
    childHolders: 0,
    droppedBases: ['GObject.InitiallyUnowned', 'GObject.Object', 'Atk.ImplementorIface'],
    inlinedBases: [],
    unsettableProps: ['Wnck.ActionMenu.window'],
};

export const OWN_PROPS = {
    WnckActionMenu: ['window'],
};

export const OWN_SIGNALS = {};

export const DECLS = {
    WnckActionMenu: ['WnckActionMenu', 'GtkMenu', 'GtkMenuShell', 'GtkContainer', 'GtkWidget', 'GtkObject', 'GtkBuildable'],
    WnckPager: ['WnckPager', 'GtkWidget', 'GtkObject', 'GtkBuildable'],
    WnckSelector: ['WnckSelector', 'GtkMenuBar', 'GtkMenuShell', 'GtkContainer', 'GtkWidget', 'GtkObject', 'GtkBuildable'],
    WnckTasklist: ['WnckTasklist', 'GtkContainer', 'GtkWidget', 'GtkObject', 'GtkBuildable'],
};

// The GTypes above that are NOT widgets: they hold one through `set_child`/`get_child`
// and descend from `GObject.Object`. A renderer places them like a container; a check
// asking "is this a widget" must not count them. Derived from the accessor pair, never
// from a list — the count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    WnckClientType: ['application', 'pager'],
    WnckMotionDirection: ['up', 'down', 'left', 'right'],
    WnckPagerDisplayMode: ['name', 'content'],
    WnckPagerLayoutPolicy: ['automatic', 'width-for-height', 'height-for-width'],
    WnckTasklistGroupingType: ['never-group', 'auto-group', 'always-group'],
    WnckWindowGravity: ['current', 'northwest', 'north', 'northeast', 'west', 'center', 'east', 'southwest', 'south', 'southeast', 'static'],
    WnckWindowType: ['normal', 'desktop', 'dock', 'dialog', 'toolbar', 'menu', 'utility', 'splashscreen'],
};

export const SLOT_CANDIDATES = {};

export const SINCE = {};
