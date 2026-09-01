// The widget vocabulary of Thunarx-3.0 as runtime data.
//
// GENERATED — do not edit. Provenance: Thunarx-3.0 — library 4.20.9 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'Thunarx',
    version: '3.0',
    libraryVersion: '4.20.9',
    childHolders: 0,
    droppedBases: ['GObject.InitiallyUnowned', 'GObject.Object', 'Atk.ImplementorIface'],
    inlinedBases: [],
    unsettableProps: [],
};

export const OWN_PROPS = {
    ThunarxPropertyPage: ['label', 'label-widget'],
};

export const OWN_SIGNALS = {};

export const DECLS = {
    ThunarxPropertyPage: ['ThunarxPropertyPage', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
};

// The GTypes above that are NOT widgets: they hold one through `set_child`/`get_child`
// and descend from `GObject.Object`. A renderer places them like a container; a check
// asking "is this a widget" must not count them. Derived from the accessor pair, never
// from a list — the count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {};

export const SLOT_CANDIDATES = {
    ThunarxPropertyPage: {
        'label': 'set_label_widget',
    },
};

export const SINCE = {};
