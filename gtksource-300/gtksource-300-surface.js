// The widget vocabulary of GtkSource-300 as runtime data.
//
// GENERATED — do not edit. Provenance: GtkSource-300 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const SURFACE_PROVENANCE = 'GtkSource-300 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface';

export const OWN_PROPS = {
    GtkSourceView: ['auto-indent', 'highlight-current-line', 'indent-on-tab', 'indent-width', 'insert-spaces-instead-of-tabs', 'right-margin-position', 'show-line-marks', 'show-line-numbers', 'show-right-margin', 'smart-backspace', 'smart-home-end', 'tab-width'],
};

export const OWN_SIGNALS = {
    GtkSourceView: ['change-case', 'change-number', 'join-lines', 'line-mark-activated', 'move-lines', 'move-to-matching-bracket', 'move-words', 'redo', 'show-completion', 'smart-home-end', 'undo'],
};

export const DECLS = {
    GtkSourceCompletionInfo: ['GtkSourceCompletionInfo', 'GtkWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    GtkSourceView: ['GtkSourceView', 'GtkTextView', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkScrollable'],
};

// The GTypes above that are NOT widgets: they hold one through `set_child`/`get_child`
// and descend from `GObject.Object`. A renderer places them like a container; a check
// asking "is this a widget" must not count them. Derived from the accessor pair, never
// from a list — the count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    GtkSourceBracketMatchType: ['none', 'out-of-range', 'not-found', 'found'],
    GtkSourceChangeCaseType: ['lower', 'upper', 'toggle', 'title'],
    GtkSourceCompressionType: ['none', 'gzip'],
    GtkSourceEncodingDuplicates: ['first', 'last'],
    GtkSourceGutterRendererAlignmentMode: ['cell', 'first', 'last'],
    GtkSourceNewlineType: ['lf', 'cr', 'cr-lf'],
    GtkSourceSmartHomeEndType: ['disabled', 'before', 'after', 'always'],
    GtkSourceStyleSchemeKind: ['light', 'dark', 'light-only', 'dark-only'],
    GtkSourceViewGutterPosition: ['lines', 'marks'],
};

export const SLOT_CANDIDATES = {};

export const SINCE = {
    'GtkSourceView.smart-backspace': '3.18',
    'GtkSourceView.smart-home-end': '2.0',
};
