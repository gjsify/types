// The widget vocabulary of Wnck-3.0 as runtime data.
//
// GENERATED — do not edit. Provenance: Wnck-3.0 — library 43.3.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface — prop(s) no TypeScript value satisfies: Wnck.ActionMenu.window
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const SURFACE_PROVENANCE = 'Wnck-3.0 — library 43.3.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface — prop(s) no TypeScript value satisfies: Wnck.ActionMenu.window';

export const OWN_PROPS = {
    WnckActionMenu: ['window'],
    WnckPager: ['handle'],
    WnckSelector: ['handle'],
    WnckTasklist: ['handle', 'tooltips-enabled'],
};

export const OWN_SIGNALS = {
    WnckTasklist: ['task-enter-notify', 'task-leave-notify'],
};

export const DECLS = {
    WnckActionMenu: ['WnckActionMenu', 'GtkMenu', 'GtkMenuShell', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    WnckImageMenuItem: ['WnckImageMenuItem', 'GtkMenuItem', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkActionable', 'GtkActivatable', 'GtkBuildable'],
    WnckPager: ['WnckPager', 'GtkWidget', 'GtkBuildable'],
    WnckSelector: ['WnckSelector', 'GtkMenuBar', 'GtkMenuShell', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    WnckTasklist: ['WnckTasklist', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
};

export const ENUM_NICKS = {
    WnckClientType: ['application', 'pager'],
    WnckMotionDirection: ['up', 'down', 'left', 'right'],
    WnckPagerDisplayMode: ['name', 'content'],
    WnckPagerScrollMode: ['2d', '1d', 'none'],
    WnckTasklistGroupingType: ['never-group', 'auto-group', 'always-group'],
    WnckWindowGravity: ['current', 'northwest', 'north', 'northeast', 'west', 'center', 'east', 'southwest', 'south', 'southeast', 'static'],
    WnckWindowType: ['normal', 'desktop', 'dock', 'dialog', 'toolbar', 'menu', 'utility', 'splashscreen'],
};

export const SLOT_CANDIDATES = {};

export const SINCE = {};
