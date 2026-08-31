// The widget vocabulary of GtkSource-5 as runtime data.
//
// GENERATED — do not edit. Provenance: GtkSource-5 — library 5.21.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const SURFACE_PROVENANCE = 'GtkSource-5 — library 5.21.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object';

export const OWN_PROPS = {
    GtkSourceCompletionCell: ['column', 'markup', 'paintable', 'text', 'widget'],
    GtkSourceGutter: ['view', 'window-type'],
    GtkSourceGutterRenderer: ['alignment-mode', 'xalign', 'xpad', 'yalign', 'ypad'],
    GtkSourceGutterRendererPixbuf: ['gicon', 'icon-name', 'paintable', 'pixbuf'],
    GtkSourceGutterRendererText: ['markup', 'text'],
    GtkSourceMap: ['font-desc', 'view'],
    GtkSourceStyleSchemeChooser: ['style-scheme'],
    GtkSourceStyleSchemePreview: ['scheme', 'selected'],
    GtkSourceView: ['auto-indent', 'background-pattern', 'enable-snippets', 'highlight-current-line', 'indent-on-tab', 'indent-width', 'indenter', 'insert-spaces-instead-of-tabs', 'right-margin-position', 'show-line-marks', 'show-line-numbers', 'show-right-margin', 'smart-backspace', 'smart-home-end', 'tab-width'],
};

export const OWN_SIGNALS = {
    GtkSourceStyleSchemePreview: ['activate'],
    GtkSourceView: ['change-case', 'change-number', 'join-lines', 'line-mark-activated', 'move-lines', 'move-to-matching-bracket', 'move-words', 'push-snippet', 'show-completion', 'smart-home-end'],
};

export const DECLS = {
    GtkSourceCompletionCell: ['GtkSourceCompletionCell', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget'],
    GtkSourceGutter: ['GtkSourceGutter', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget'],
    GtkSourceGutterRendererPixbuf: ['GtkSourceGutterRendererPixbuf', 'GtkSourceGutterRenderer', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget'],
    GtkSourceGutterRendererText: ['GtkSourceGutterRendererText', 'GtkSourceGutterRenderer', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget'],
    GtkSourceHoverDisplay: ['GtkSourceHoverDisplay', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget'],
    GtkSourceMap: ['GtkSourceMap', 'GtkSourceView', 'GtkTextView', 'GtkWidget', 'GtkAccessible', 'GtkAccessibleText', 'GtkBuildable', 'GtkConstraintTarget', 'GtkScrollable'],
    GtkSourceStyleSchemeChooserButton: ['GtkSourceStyleSchemeChooserButton', 'GtkButton', 'GtkWidget', 'GtkAccessible', 'GtkActionable', 'GtkBuildable', 'GtkConstraintTarget', 'GtkSourceStyleSchemeChooser'],
    GtkSourceStyleSchemeChooserWidget: ['GtkSourceStyleSchemeChooserWidget', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget', 'GtkSourceStyleSchemeChooser'],
    GtkSourceStyleSchemePreview: ['GtkSourceStyleSchemePreview', 'GtkWidget', 'GtkAccessible', 'GtkActionable', 'GtkBuildable', 'GtkConstraintTarget'],
    GtkSourceView: ['GtkSourceView', 'GtkTextView', 'GtkWidget', 'GtkAccessible', 'GtkAccessibleText', 'GtkBuildable', 'GtkConstraintTarget', 'GtkScrollable'],
};

// The GTypes above that are NOT widgets: they hold one through `set_child`/`get_child`
// and descend from `GObject.Object`. A renderer places them like a container; a check
// asking "is this a widget" must not count them. Derived from the accessor pair, never
// from a list — the count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    GtkSourceAnnotationStyle: ['none', 'warning', 'error', 'accent'],
    GtkSourceBackgroundPatternType: ['none', 'grid'],
    GtkSourceBracketMatchType: ['none', 'out-of-range', 'not-found', 'found'],
    GtkSourceChangeCaseType: ['lower', 'upper', 'toggle', 'title'],
    GtkSourceCompletionActivation: ['none', 'interactive', 'user-requested'],
    GtkSourceCompletionColumn: ['icon', 'before', 'typed-text', 'after', 'comment', 'details'],
    GtkSourceCompressionType: ['none', 'gzip'],
    GtkSourceGutterRendererAlignmentMode: ['cell', 'first', 'last'],
    GtkSourceNewlineType: ['lf', 'cr', 'cr-lf'],
    GtkSourceSmartHomeEndType: ['disabled', 'before', 'after', 'always'],
    GtkSourceViewGutterPosition: ['lines', 'marks'],
};

export const SLOT_CANDIDATES = {
    GtkSourceCompletionCell: {
        'widget': 'set_widget',
    },
    GtkSourceMap: {
        'view': 'set_view',
    },
};

export const SINCE = {};
