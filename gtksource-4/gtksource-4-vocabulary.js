// The widget vocabulary of GtkSource-4 as runtime data.
//
// GENERATED — do not edit. Provenance: GtkSource-4 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'GtkSource',
    version: '4',
    libraryVersion: null,
    childHolders: 0,
    droppedBases: ['GObject.InitiallyUnowned', 'GObject.Object', 'Atk.ImplementorIface'],
    inlinedBases: [],
    unsettableProps: [],
};

export const OWN_PROPS = {
    GtkSourceMap: ['font-desc', 'view'],
    GtkSourceStyleSchemeChooser: ['style-scheme'],
    GtkSourceView: ['auto-indent', 'background-pattern', 'highlight-current-line', 'indent-on-tab', 'indent-width', 'insert-spaces-instead-of-tabs', 'right-margin-position', 'show-line-marks', 'show-line-numbers', 'show-right-margin', 'smart-backspace', 'smart-home-end', 'tab-width'],
};

export const OWN_SIGNALS = {
    GtkSourceView: ['change-case', 'change-number', 'join-lines', 'line-mark-activated', 'move-lines', 'move-to-matching-bracket', 'move-words', 'redo', 'show-completion', 'smart-home-end', 'undo'],
};

export const DECLS = {
    GtkSourceCompletionInfo: ['GtkSourceCompletionInfo', 'GtkWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    GtkSourceMap: ['GtkSourceMap', 'GtkSourceView', 'GtkTextView', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkScrollable'],
    GtkSourceStyleSchemeChooserButton: ['GtkSourceStyleSchemeChooserButton', 'GtkButton', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkActionable', 'GtkActivatable', 'GtkBuildable', 'GtkSourceStyleSchemeChooser'],
    GtkSourceStyleSchemeChooserWidget: ['GtkSourceStyleSchemeChooserWidget', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkSourceStyleSchemeChooser'],
    GtkSourceView: ['GtkSourceView', 'GtkTextView', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkScrollable'],
};

// The GTypes above that are NOT widgets: they hold one through `set_child`/`get_child`
// and descend from `GObject.Object`. A renderer places them like a container; a check
// asking "is this a widget" must not count them. Derived from the accessor pair, never
// from a list — the count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    GtkSourceBackgroundPatternType: ['none', 'grid'],
    GtkSourceBracketMatchType: ['none', 'out-of-range', 'not-found', 'found'],
    GtkSourceChangeCaseType: ['lower', 'upper', 'toggle', 'title'],
    GtkSourceCompressionType: ['none', 'gzip'],
    GtkSourceGutterRendererAlignmentMode: ['cell', 'first', 'last'],
    GtkSourceNewlineType: ['lf', 'cr', 'cr-lf'],
    GtkSourceSmartHomeEndType: ['disabled', 'before', 'after', 'always'],
    GtkSourceViewGutterPosition: ['lines', 'marks'],
};

export const SLOT_CANDIDATES = {
    GtkSourceMap: {
        'view': 'set_view',
    },
};

export const SINCE = {
    'GtkSourceStyleSchemeChooser.style-scheme': '3.16',
    'GtkSourceView.background-pattern': '3.16',
    'GtkSourceView.smart-backspace': '3.18',
    'GtkSourceView.smart-home-end': '2.0',
    'GtkSourceView::change-case': '3.16',
    'GtkSourceView::change-number': '3.16',
    'GtkSourceView::join-lines': '3.16',
    'GtkSourceView::move-to-matching-bracket': '3.16',
    'GtkSourceView::move-words': '3.0',
    'GtkSourceView::smart-home-end': '3.0',
};
