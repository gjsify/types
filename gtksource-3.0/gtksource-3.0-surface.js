// The widget vocabulary of GtkSource-3.0 as runtime data.
//
// GENERATED — do not edit. Provenance: GtkSource-3.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const SURFACE_PROVENANCE = 'GtkSource-3.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface';

export const OWN_PROPS = {
    GtkSourceMap: ['font-desc', 'view'],
    GtkSourceStyleSchemeChooser: ['style-scheme'],
    GtkSourceView: ['auto-indent', 'background-pattern', 'draw-spaces', 'highlight-current-line', 'indent-on-tab', 'indent-width', 'insert-spaces-instead-of-tabs', 'right-margin-position', 'show-line-marks', 'show-line-numbers', 'show-right-margin', 'smart-backspace', 'smart-home-end', 'tab-width'],
};

export const OWN_SIGNALS = {
    GtkSourceCompletionInfo: ['before-show'],
    GtkSourceView: ['change-case', 'change-number', 'join-lines', 'line-mark-activated', 'move-lines', 'move-to-matching-bracket', 'move-words', 'redo', 'show-completion', 'smart-home-end', 'undo'],
};

export const DECLS = {
    GtkSourceCompletionInfo: ['GtkSourceCompletionInfo', 'GtkWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    GtkSourceMap: ['GtkSourceMap', 'GtkSourceView', 'GtkTextView', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkScrollable'],
    GtkSourceStyleSchemeChooserButton: ['GtkSourceStyleSchemeChooserButton', 'GtkButton', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkActionable', 'GtkActivatable', 'GtkBuildable', 'GtkSourceStyleSchemeChooser'],
    GtkSourceStyleSchemeChooserWidget: ['GtkSourceStyleSchemeChooserWidget', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkSourceStyleSchemeChooser'],
    GtkSourceView: ['GtkSourceView', 'GtkTextView', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkScrollable'],
};

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
    GtkSourceCompletionInfo: {
        'widget': 'set_widget',
    },
    GtkSourceMap: {
        'view': 'set_view',
    },
};

export const SINCE = {
    'GtkSourceStyleSchemeChooser.style-scheme': '3.16',
    'GtkSourceView.background-pattern': '3.16',
    'GtkSourceView.draw-spaces': '2.4',
    'GtkSourceView.smart-backspace': '3.18',
    'GtkSourceView.smart-home-end': '2.0',
};
