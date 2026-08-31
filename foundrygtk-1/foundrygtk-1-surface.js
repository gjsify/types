// The widget vocabulary of FoundryGtk-1 as runtime data.
//
// GENERATED — do not edit. Provenance: FoundryGtk-1 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const SURFACE_PROVENANCE = 'FoundryGtk-1 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object';

export const OWN_PROPS = {
    FoundryChangesGutterRenderer: ['show-overview'],
    FoundryDiagnosticsGutterRenderer: ['diagnostics'],
    FoundryGitLanes: ['entry'],
    FoundrySourceView: ['document', 'enable-completion', 'enable-vim', 'font', 'line-height', 'show-diagnostics', 'show-line-changes', 'show-line-changes-overview'],
    FoundryTerminal: ['palette'],
};

export const OWN_SIGNALS = {};

export const DECLS = {
    FoundryChangesGutterRenderer: ['FoundryChangesGutterRenderer', 'GtkSourceGutterRenderer', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget'],
    FoundryDiagnosticsGutterRenderer: ['FoundryDiagnosticsGutterRenderer', 'GtkSourceGutterRenderer', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget'],
    FoundryGitLanes: ['FoundryGitLanes', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget'],
    FoundryMarkupView: ['FoundryMarkupView', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget'],
    FoundrySourceView: ['FoundrySourceView', 'GtkSourceView', 'GtkTextView', 'GtkWidget', 'GtkAccessible', 'GtkAccessibleText', 'GtkBuildable', 'GtkConstraintTarget', 'GtkScrollable'],
    FoundryTerminal: ['FoundryTerminal', 'GtkWidget', 'GtkAccessible', 'GtkAccessibleText', 'GtkBuildable', 'GtkConstraintTarget', 'GtkScrollable'],
};

// The GTypes above that are NOT widgets: they hold one through `set_child`/`get_child`
// and descend from `GObject.Object`. A renderer places them like a container; a check
// asking "is this a widget" must not count them. Derived from the accessor pair, never
// from a list — the count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {};

export const SLOT_CANDIDATES = {};

export const SINCE = {
    'FoundryGitLanes.entry': '1.2',
};
