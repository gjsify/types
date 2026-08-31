// The widget vocabulary of PapersView-4.0 as runtime data.
//
// GENERATED — do not edit. Provenance: PapersView-4.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const SURFACE_PROVENANCE = 'PapersView-4.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object';

export const OWN_PROPS = {
    PpsView: ['annotations-context', 'model', 'search-context'],
    PpsViewPresentation: ['current-page', 'document', 'inverted-colors', 'rotation'],
};

export const OWN_SIGNALS = {
    PpsView: ['activate', 'cursor-moved', 'external-link', 'handle-link', 'layers-changed', 'move-cursor', 'popup', 'scroll', 'selection-changed', 'signature-rect'],
    PpsViewPresentation: ['change-page', 'external-link', 'finished'],
};

export const DECLS = {
    PpsView: ['PpsView', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget', 'GtkScrollable'],
    PpsViewPresentation: ['PpsViewPresentation', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget'],
};

// The GTypes above that are NOT widgets: they hold one through `set_child`/`get_child`
// and descend from `GObject.Object`. A renderer places them like a container; a check
// asking "is this a widget" must not count them. Derived from the accessor pair, never
// from a list — the count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    PpsAnnotationTool: ['pencil', 'highlight', 'eraser', 'text', 'max'],
    PpsJobPriority: ['priority-urgent', 'priority-high', 'priority-low', 'priority-none', 'n-priorities'],
    PpsPageLayout: ['single', 'dual', 'automatic'],
    PpsSizingMode: ['fit-page', 'fit-width', 'free', 'automatic'],
};

export const SLOT_CANDIDATES = {};

export const SINCE = {};
