// The widget vocabulary of Hex-4 as runtime data.
//
// GENERATED — do not edit. Provenance: Hex-4 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'Hex',
    version: '4',
    libraryVersion: null,
    childHolders: 0,
    droppedBases: ['GObject.InitiallyUnowned', 'GObject.Object'],
    inlinedBases: [],
    unsettableProps: [],
};

export const OWN_PROPS = {
    HexWidget: ['display-control-characters', 'document', 'fade-zeroes', 'insert-mode'],
};

export const OWN_SIGNALS = {
    HexWidget: ['copy-clipboard', 'cursor-moved', 'cut-clipboard', 'data-changed', 'draw-complete', 'paste-clipboard'],
};

export const DECLS = {
    HexWidget: ['HexWidget', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget'],
};

// The GTypes above that are NOT widgets: they hold one through `set_child`/`get_child`
// and descend from `GObject.Object`. A renderer places them like a container; a check
// asking "is this a widget" must not count them. Derived from the accessor pair, never
// from a list — the count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {};

export const SLOT_CANDIDATES = {};

export const SINCE = {
    'HexWidget.display-control-characters': '4.10',
    'HexWidget.document': '4.2',
    'HexWidget.fade-zeroes': '4.8',
    'HexWidget.insert-mode': '4.10',
};
