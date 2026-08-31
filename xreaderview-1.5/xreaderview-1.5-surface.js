// The widget vocabulary of XreaderView-1.5 as runtime data.
//
// GENERATED — do not edit. Provenance: XreaderView-1.5 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const SURFACE_PROVENANCE = 'XreaderView-1.5 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface';

export const OWN_PROPS = {
    EvViewPresentation: ['current-page', 'document', 'inverted-colors', 'rotation'],
};

export const OWN_SIGNALS = {
    EvView: ['activate', 'annot-added', 'annot-removed', 'binding-activated', 'external-link', 'handle-link', 'layers-changed', 'popup', 'selection-changed', 'sync-source'],
    EvViewPresentation: ['change-page', 'external-link', 'finished'],
};

export const DECLS = {
    EvView: ['EvView', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkScrollable'],
    EvViewPresentation: ['EvViewPresentation', 'GtkWidget', 'GtkBuildable'],
};

// The GTypes above that are NOT widgets: they hold one through `set_child`/`get_child`
// and descend from `GObject.Object`. A renderer places them like a container; a check
// asking "is this a widget" must not count them. Derived from the accessor pair, never
// from a list — the count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    EvJobPriority: ['priority-urgent', 'priority-high', 'priority-low', 'priority-none', 'n-priorities'],
    EvJobRunMode: ['thread', 'main-loop'],
    EvSizingMode: ['best-fit', 'fit-width', 'free'],
    EvViewSelectionMode: ['text', 'rectangle'],
};

export const SLOT_CANDIDATES = {};

export const SINCE = {};
