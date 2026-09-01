// The widget vocabulary of AtrilView-1.5.0 as runtime data.
//
// GENERATED — do not edit. Provenance: AtrilView-1.5.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'AtrilView',
    version: '1.5.0',
    libraryVersion: null,
    childHolders: 0,
    droppedBases: ['GObject.InitiallyUnowned', 'GObject.Object', 'Atk.ImplementorIface'],
    inlinedBases: [],
    unsettableProps: [],
};

export const OWN_PROPS = {
    EvViewPresentation: ['current-page', 'document', 'inverted-colors', 'rotation'],
};

export const OWN_SIGNALS = {
    EvView: ['annot-added', 'annot-removed', 'cursor-moved', 'external-link', 'handle-link', 'layers-changed', 'move-cursor', 'popup', 'scroll', 'selection-changed', 'sync-source'],
    EvViewPresentation: ['change-page', 'external-link', 'finished'],
};

export const DECLS = {
    EvView: ['EvView', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkScrollable'],
    EvViewPresentation: ['EvViewPresentation', 'GtkWidget', 'GtkBuildable'],
    EvWebView: ['EvWebView', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
};

// The GTypes above that are NOT widgets: they hold one through `set_child`/`get_child`
// and descend from `GObject.Object`. A renderer places them like a container; a check
// asking "is this a widget" must not count them. Derived from the accessor pair, never
// from a list — the count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    EvJobPriority: ['priority-urgent', 'priority-high', 'priority-low', 'priority-none', 'n-priorities'],
    EvJobRunMode: ['thread', 'main-loop'],
    EvPageLayout: ['single', 'dual', 'automatic'],
    EvSizingMode: ['fit-page', 'best-fit', 'fit-width', 'free', 'automatic'],
};

export const SLOT_CANDIDATES = {};

export const SINCE = {};
