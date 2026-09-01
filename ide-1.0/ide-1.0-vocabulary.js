// The widget vocabulary of Ide-1.0 as runtime data.
//
// GENERATED — do not edit. Provenance: Ide-1.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface Gio.ActionGroup Gio.ActionMap
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'Ide',
    version: '1.0',
    libraryVersion: null,
    childHolders: 0,
    droppedBases: ['GObject.InitiallyUnowned', 'GObject.Object', 'Atk.ImplementorIface', 'Gio.ActionGroup', 'Gio.ActionMap'],
    inlinedBases: [],
    unsettableProps: [],
};

export const OWN_PROPS = {
    IdeEditorView: ['document'],
    IdeLayoutStack: ['active-view'],
    IdeOmniSearchDisplay: ['context'],
    IdeOmniSearchGroup: ['provider'],
    IdeOmniSearchRow: ['icon-name', 'result'],
    IdeSourceView: ['back-forward-list', 'count', 'enable-word-completion', 'font-desc', 'font-name', 'indent-style', 'insert-matching-brace', 'overscroll', 'overwrite-braces', 'rubberband-search', 'scroll-offset', 'search-direction', 'show-grid-lines', 'show-line-changes', 'show-line-diagnostics', 'show-search-bubbles', 'show-search-shadow', 'snippet-completion', 'spell-checking'],
    IdeTransferButton: ['transfer'],
    IdeTransferRow: ['transfer'],
    IdeTransfersProgressIcon: ['progress'],
    IdeWorkbench: ['disable-greeter', 'visible-perspective', 'visible-perspective-name'],
    IdeWorkbenchMessage: ['id', 'subtitle', 'title'],
};

export const OWN_SIGNALS = {
    IdeEditorPerspective: ['view-added', 'view-removed'],
    IdeEditorView: ['request-documentation'],
    IdeLayoutGrid: ['empty'],
    IdeLayoutStack: ['empty', 'split'],
    IdeOmniSearchDisplay: ['activate', 'result-activated'],
    IdeOmniSearchEntry: ['clear-search', 'move-next-result', 'move-previous-result'],
    IdeOmniSearchGroup: ['result-activated', 'result-selected'],
    IdeSourceMap: ['hide-map', 'show-map'],
    IdeSourceView: ['action', 'add-cursor', 'append-to-count', 'begin-macro', 'begin-rename', 'begin-user-action', 'capture-modifier', 'clear-count', 'clear-modifier', 'clear-search', 'clear-selection', 'clear-snippets', 'cycle-completion', 'decrease-font-size', 'delete-selection', 'duplicate-entire-line', 'end-macro', 'end-user-action', 'find-references', 'focus-location', 'format-selection', 'goto-definition', 'hide-completion', 'increase-font-size', 'indent-selection', 'insert-modifier', 'jump', 'move-error', 'move-search', 'movement', 'paste-clipboard-extended', 'pop-selection', 'pop-snippet', 'push-selection', 'push-snippet', 'rebuild-highlight', 'reindent', 'remove-cursors', 'replay-macro', 'request-documentation', 'reset-font-size', 'restore-insert-mark', 'save-command', 'save-insert-mark', 'save-search-char', 'select-inner', 'select-tag', 'selection-theatric', 'set-mode', 'set-overwrite', 'set-search-text', 'sort', 'swap-selection-bounds'],
    IdeSourceViewMode: ['action', 'add-cursor', 'append-to-count', 'backspace', 'begin-macro', 'begin-rename', 'begin-user-action', 'capture-modifier', 'change-case', 'change-number', 'clear-count', 'clear-modifier', 'clear-search', 'clear-selection', 'clear-snippets', 'copy-clipboard', 'cut-clipboard', 'cycle-completion', 'decrease-font-size', 'delete-from-cursor', 'delete-selection', 'duplicate-entire-line', 'end-macro', 'end-user-action', 'find-references', 'format-selection', 'goto-definition', 'hide-completion', 'increase-font-size', 'indent-selection', 'insert-at-cursor', 'insert-modifier', 'join-lines', 'move-cursor', 'move-error', 'move-lines', 'move-search', 'move-to-matching-bracket', 'move-viewport', 'move-words', 'movement', 'paste-clipboard', 'paste-clipboard-extended', 'pop-selection', 'preedit-changed', 'push-selection', 'rebuild-highlight', 'redo', 'reindent', 'remove-cursors', 'replay-macro', 'request-documentation', 'reset-font-size', 'restore-insert-mark', 'save-command', 'save-insert-mark', 'save-search-char', 'select-all', 'select-inner', 'select-tag', 'selection-theatric', 'set-anchor', 'set-mode', 'set-overwrite', 'set-search-text', 'show-completion', 'sort', 'swap-selection-bounds', 'toggle-cursor-visible', 'toggle-overwrite', 'undo'],
    IdeTransferRow: ['cancelled'],
    IdeWorkbench: ['action', 'set-perspective', 'unload'],
};

export const DECLS = {
    IdeEditorPerspective: ['IdeEditorPerspective', 'DzlDockOverlay', 'GtkEventBox', 'GtkBin', 'GtkContainer', 'GtkWidget', 'DzlDock', 'DzlDockItem', 'GtkBuildable', 'IdePerspective'],
    IdeEditorView: ['IdeEditorView', 'IdeLayoutView', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    IdeLayout: ['IdeLayout', 'DzlDockBin', 'GtkContainer', 'GtkWidget', 'DzlDock', 'DzlDockItem', 'GtkBuildable'],
    IdeLayoutGrid: ['IdeLayoutGrid', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    IdeLayoutPane: ['IdeLayoutPane', 'DzlDockBinEdge', 'DzlDockRevealer', 'DzlBin', 'GtkBin', 'GtkContainer', 'GtkWidget', 'DzlDockItem', 'GtkBuildable'],
    IdeLayoutStack: ['IdeLayoutStack', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    IdeLayoutView: ['IdeLayoutView', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    IdeOmniBar: ['IdeOmniBar', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    IdeOmniSearchDisplay: ['IdeOmniSearchDisplay', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    IdeOmniSearchEntry: ['IdeOmniSearchEntry', 'GtkEntry', 'GtkWidget', 'GtkBuildable', 'GtkCellEditable', 'GtkEditable'],
    IdeOmniSearchGroup: ['IdeOmniSearchGroup', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    IdeOmniSearchRow: ['IdeOmniSearchRow', 'GtkListBoxRow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkActionable'],
    IdePreferencesPerspective: ['IdePreferencesPerspective', 'DzlPreferencesView', 'GtkBin', 'GtkContainer', 'GtkWidget', 'DzlPreferences', 'GtkBuildable', 'IdePerspective'],
    IdeRunButton: ['IdeRunButton', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    IdeSourceMap: ['IdeSourceMap', 'GtkSourceMap', 'GtkSourceView', 'GtkTextView', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkScrollable'],
    IdeSourceView: ['IdeSourceView', 'GtkSourceView', 'GtkTextView', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkScrollable'],
    IdeSourceViewMode: ['IdeSourceViewMode', 'GtkWidget', 'GtkBuildable'],
    IdeTransferButton: ['IdeTransferButton', 'DzlProgressButton', 'GtkButton', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkActionable', 'GtkActivatable', 'GtkBuildable'],
    IdeTransferRow: ['IdeTransferRow', 'GtkListBoxRow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkActionable'],
    IdeTransfersButton: ['IdeTransfersButton', 'GtkMenuButton', 'GtkToggleButton', 'GtkButton', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkActionable', 'GtkActivatable', 'GtkBuildable'],
    IdeTransfersProgressIcon: ['IdeTransfersProgressIcon', 'GtkDrawingArea', 'GtkWidget', 'GtkBuildable'],
    IdeWorkbench: ['IdeWorkbench', 'GtkApplicationWindow', 'GtkWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    IdeWorkbenchHeaderBar: ['IdeWorkbenchHeaderBar', 'GtkHeaderBar', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    IdeWorkbenchMessage: ['IdeWorkbenchMessage', 'GtkInfoBar', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
};

// The GTypes above that are NOT widgets: they hold one through `set_child`/`get_child`
// and descend from `GObject.Object`. A renderer places them like a container; a check
// asking "is this a widget" must not count them. Derived from the accessor pair, never
// from a list — the count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    IdeBuildLogStream: ['stdout', 'stderr'],
    IdeCursorType: ['column', 'select', 'match'],
    IdeDiagnosticSeverity: ['ignored', 'note', 'deprecated', 'warning', 'error', 'fatal'],
    IdeHighlightResult: ['stop', 'continue'],
    IdeIndentStyle: ['spaces', 'tabs'],
    IdeLayoutGridSplit: ['left', 'right', 'move-left', 'move-right'],
    IdeSourceViewModeType: ['transient', 'permanent', 'modal'],
    IdeSourceViewMovement: ['previous-offset', 'next-offset', 'nth-char', 'previous-char', 'next-char', 'first-char', 'first-nonspace-char', 'middle-char', 'last-char', 'next-word-start', 'next-full-word-start', 'next-sub-word-start', 'previous-sub-word-start', 'previous-word-start', 'previous-full-word-start', 'previous-word-end', 'previous-full-word-end', 'next-word-end', 'next-full-word-end', 'sentence-start', 'sentence-end', 'paragraph-start', 'paragraph-end', 'previous-line', 'next-line', 'first-line', 'nth-line', 'last-line', 'line-percentage', 'line-chars', 'line-end', 'half-page-up', 'half-page-down', 'half-page-left', 'half-page-right', 'page-up', 'page-up-lines', 'page-down', 'page-down-lines', 'screen-up', 'screen-down', 'screen-left', 'screen-right', 'screen-top', 'screen-middle', 'screen-bottom', 'match-special', 'scroll-screen-top', 'scroll-screen-center', 'scroll-screen-bottom', 'scroll-screen-left', 'scroll-screen-right', 'previous-unmatched-brace', 'next-unmatched-brace', 'previous-unmatched-paren', 'next-unmatched-paren', 'next-match-modifier', 'previous-match-modifier', 'next-match-search-char', 'previous-match-search-char'],
    IdeSourceViewTheatric: ['expand', 'shrink'],
    IdeSymbolKind: ['none', 'array', 'boolean', 'class', 'constant', 'constructor', 'enum', 'enum-value', 'field', 'file', 'function', 'header', 'interface', 'method', 'module', 'namespace', 'number', 'package', 'property', 'scalar', 'string', 'struct', 'union', 'variable', 'keyword', 'ui-attributes', 'ui-child', 'ui-item', 'ui-menu', 'ui-menu-attribute', 'ui-object', 'ui-packing', 'ui-property', 'ui-section', 'ui-signal', 'ui-style', 'ui-style-class', 'ui-submenu', 'ui-template', 'xml-attribute', 'xml-declaration', 'xml-element', 'xml-comment', 'xml-cdata'],
    IdeThreadPoolKind: ['compiler', 'indexer', 'last'],
    IdeVcsConfigType: ['full-name', 'email'],
};

export const SLOT_CANDIDATES = {
    IdeLayoutGrid: {
        'stack-after': 'add_stack_after',
        'stack-before': 'add_stack_before',
    },
    IdeLayoutStack: {
        'active-view': 'set_active_view',
    },
};

export const SINCE = {};
