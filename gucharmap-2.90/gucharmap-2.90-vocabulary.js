// The widget vocabulary of Gucharmap-2.90 as runtime data.
//
// GENERATED — do not edit. Provenance: Gucharmap-2.90 — library 17.0.2 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'Gucharmap',
    version: '2.90',
    libraryVersion: '17.0.2',
    childHolders: 0,
    droppedBases: ['GObject.InitiallyUnowned', 'GObject.Object', 'Atk.ImplementorIface'],
    inlinedBases: [],
    unsettableProps: [],
};

export const OWN_PROPS = {
    GucharmapCharmap: ['active-chapter', 'active-character', 'active-page', 'chapters-model', 'font-desc', 'font-fallback', 'snap-power-2'],
    GucharmapChartable: ['active-character', 'codepoint-list', 'font-desc', 'font-fallback', 'snap-power-2', 'zoom-enabled'],
};

export const OWN_SIGNALS = {
    GucharmapCharmap: ['link-clicked', 'status-message'],
    GucharmapChartable: ['activate', 'copy-clipboard', 'move-cursor', 'paste-clipboard', 'status-message'],
};

export const DECLS = {
    GucharmapChaptersView: ['GucharmapChaptersView', 'GtkTreeView', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkScrollable'],
    GucharmapCharmap: ['GucharmapCharmap', 'GtkPaned', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    GucharmapChartable: ['GucharmapChartable', 'GtkDrawingArea', 'GtkWidget', 'GtkBuildable', 'GtkScrollable'],
};

// The GTypes above that are NOT widgets: they hold one through `set_child`/`get_child`
// and descend from `GObject.Object`. A renderer places them like a container; a check
// asking "is this a widget" must not count them. Derived from the accessor pair, never
// from a list — the count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    GucharmapCharmapPageType: ['chartable', 'details'],
    GucharmapUnicodeVersion: ['unassigned', '1-1', '2-0', '2-1', '3-0', '3-1', '3-2', '4-0', '4-1', '5-0', '5-1', '5-2', '6-0', '6-1', '6-2', '6-3', '7-0', '8-0', '9-0', '10-0', '11-0', '12-0', '12-1', '13-0', '14-0', '15-0', '15-1', '16-0', '17-0', 'latest'],
};

export const SLOT_CANDIDATES = {};

export const SINCE = {};
