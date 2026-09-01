// The widget vocabulary of AyatanaIdo3-0.4 as runtime data.
//
// GENERATED — do not edit. Provenance: AyatanaIdo3-0.4 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'AyatanaIdo3',
    version: '0.4',
    libraryVersion: null,
    childHolders: 0,
    droppedBases: ['GObject.InitiallyUnowned', 'GObject.Object', 'Atk.ImplementorIface'],
    inlinedBases: [],
    unsettableProps: [],
};

export const OWN_PROPS = {
    IdoScaleMenuItem: ['adjustment', 'reverse-scroll-events'],
};

export const OWN_SIGNALS = {
    IdoCalendarMenuItem: ['day-selected', 'day-selected-double-click', 'month-changed'],
    IdoScaleMenuItem: ['primary-clicked', 'secondary-clicked', 'slider-grabbed', 'slider-released', 'value-changed'],
};

export const DECLS = {
    IdoCalendarMenuItem: ['IdoCalendarMenuItem', 'GtkMenuItem', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkActionable', 'GtkActivatable', 'GtkBuildable'],
    IdoEntryMenuItem: ['IdoEntryMenuItem', 'GtkMenuItem', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkActionable', 'GtkActivatable', 'GtkBuildable'],
    IdoRange: ['IdoRange', 'GtkScale', 'GtkRange', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    IdoScaleMenuItem: ['IdoScaleMenuItem', 'GtkMenuItem', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkActionable', 'GtkActivatable', 'GtkBuildable'],
    IdoSwitchMenuItem: ['IdoSwitchMenuItem', 'GtkCheckMenuItem', 'GtkMenuItem', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkActionable', 'GtkActivatable', 'GtkBuildable'],
};

// The GTypes above that are NOT widgets: they hold one through `set_child`/`get_child`
// and descend from `GObject.Object`. A renderer places them like a container; a check
// asking "is this a widget" must not count them. Derived from the accessor pair, never
// from a list — the count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {};

export const SLOT_CANDIDATES = {};

export const SINCE = {};
