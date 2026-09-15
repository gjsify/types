// The widget vocabulary of Ide-1.0 as runtime data.
//
// GENERATED — do not edit. Provenance: Ide-1.0 — dropped empty base(s): GObject.Object Gio.ActionGroup Gio.ActionMap Gio.ListModel Gio.Initable Gio.AsyncInitable GObject.InitiallyUnowned Atk.ImplementorIface — inlined base(s) their owner's vocabulary does not emit: Gio.Application
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'Ide',
    version: '1.0',
    libraryVersion: null,
    childHolders: 0,
    droppedBases: ['GObject.Object', 'Gio.ActionGroup', 'Gio.ActionMap', 'Gio.ListModel', 'Gio.Initable', 'Gio.AsyncInitable', 'GObject.InitiallyUnowned', 'Atk.ImplementorIface'],
    inlinedBases: ['Gio.Application'],
    unsettableProps: [],
    unresolvedProps: [],
};

export const OWN_PROPS = {
    GApplication: ['action-group', 'application-id', 'flags', 'inactivity-timeout', 'resource-base-path', 'version'],
    IdeBackForwardItem: ['mark', 'uri'],
    IdeBuffer: ['context', 'file', 'highlight-diagnostics', 'style-scheme-name', 'title'],
    IdeBufferChangeMonitor: ['buffer'],
    IdeBufferManager: ['auto-save', 'auto-save-timeout', 'focus-buffer', 'minimum-word-size'],
    IdeBuildPipeline: ['busy', 'configuration'],
    IdeBuildStage: ['check-stdout', 'completed', 'disabled', 'name', 'stdout-path', 'transient'],
    IdeBuildStageLauncher: ['clean-launcher', 'ignore-exit-status', 'launcher'],
    IdeBuildStageTransfer: ['disable-when-metered', 'transfer'],
    IdeBuildSystem: ['context', 'project-file'],
    IdeBuildconfigConfiguration: ['postbuild', 'prebuild'],
    IdeCompletionResults: ['query'],
    IdeConfiguration: ['app-id', 'build-commands', 'config-opts', 'debug', 'device', 'device-id', 'dirty', 'display-name', 'id', 'parallelism', 'post-install-commands', 'prefix', 'runtime', 'runtime-id'],
    IdeConfigurationManager: ['current'],
    IdeContext: ['project-file', 'root-build-dir', 'snippets-manager'],
    IdeCursor: ['ide-source-view'],
    IdeDevice: ['display-name', 'id'],
    IdeDirectoryBuildSystem: ['project-file'],
    IdeDoap: ['bug-database', 'category', 'description', 'download-page', 'homepage', 'languages', 'name', 'shortdesc'],
    IdeDoapPerson: ['email', 'name'],
    IdeEditorView: ['document'],
    IdeEnvironmentVariable: ['key', 'value'],
    IdeExtensionAdapter: ['engine', 'interface-type', 'key', 'value'],
    IdeExtensionSetAdapter: ['engine', 'interface-type', 'key', 'value'],
    IdeFile: ['file', 'path', 'temporary-id'],
    IdeFileSettings: ['encoding', 'encoding-set', 'file', 'indent-style', 'indent-style-set', 'indent-width', 'indent-width-set', 'insert-trailing-newline', 'insert-trailing-newline-set', 'newline-type', 'newline-type-set', 'overwrite-braces', 'overwrite-braces-set', 'right-margin-position', 'right-margin-position-set', 'settled', 'show-right-margin', 'show-right-margin-set', 'tab-width', 'tab-width-set', 'trim-trailing-whitespace', 'trim-trailing-whitespace-set'],
    IdeFormatterOptions: ['insert-spaces', 'tab-width'],
    IdeHighlightEngine: ['buffer'],
    IdeHighlighter: ['context'],
    IdeLangservClient: ['io-stream'],
    IdeLangservFormatter: ['client'],
    IdeLangservHighlighter: ['client'],
    IdeLayoutStack: ['active-view'],
    IdeObject: ['context'],
    IdeOmniSearchDisplay: ['context'],
    IdeOmniSearchGroup: ['provider'],
    IdeOmniSearchRow: ['icon-name', 'result'],
    IdePkconTransfer: ['packages'],
    IdeProgress: ['fraction', 'message'],
    IdeProject: ['root'],
    IdeProjectEdit: ['range', 'replacement'],
    IdeProjectFile: ['file', 'file-info', 'path'],
    IdeProjectInfo: ['build-system-name', 'description', 'directory', 'doap', 'file', 'is-recent', 'languages', 'last-modified-at', 'name', 'priority'],
    IdeProjectItem: ['parent'],
    IdeRunManager: ['build-target'],
    IdeRunner: ['argv', 'clear-env', 'failed', 'run-on-host'],
    IdeRuntime: ['display-name', 'id'],
    IdeSearchResult: ['provider', 'score', 'subtitle', 'title'],
    IdeSettings: ['ignore-project-settings', 'relative-path', 'schema-id'],
    IdeSourceSnippet: ['description', 'language', 'snippet-text', 'trigger'],
    IdeSourceSnippetChunk: ['context', 'spec', 'tab-stop', 'text', 'text-set'],
    IdeSourceView: ['back-forward-list', 'count', 'enable-word-completion', 'font-desc', 'font-name', 'indent-style', 'insert-matching-brace', 'overscroll', 'overwrite-braces', 'rubberband-search', 'scroll-offset', 'search-direction', 'show-grid-lines', 'show-line-changes', 'show-line-diagnostics', 'show-search-bubbles', 'show-search-shadow', 'snippet-completion', 'spell-checking'],
    IdeSubprocessLauncher: ['clean-env', 'cwd', 'environ', 'flags', 'run-on-host'],
    IdeSymbolNode: ['flags', 'kind', 'name', 'use-markup'],
    IdeTransfer: ['icon-name', 'progress', 'status', 'title'],
    IdeTransferButton: ['transfer'],
    IdeTransferRow: ['transfer'],
    IdeTransfersProgressIcon: ['progress'],
    IdeVcs: ['context'],
    IdeWorkbench: ['disable-greeter', 'visible-perspective', 'visible-perspective-name'],
    IdeWorkbenchMessage: ['id', 'subtitle', 'title'],
};

export const OWN_SIGNALS = {
    GApplication: ['activate', 'command-line', 'handle-local-options', 'name-lost', 'open', 'shutdown', 'startup'],
    IdeBackForwardList: ['navigate-to'],
    IdeBuffer: ['cursor-moved', 'destroy', 'line-flags-changed', 'loaded', 'saved', 'symbol-resolver-loaded'],
    IdeBufferChangeMonitor: ['changed'],
    IdeBufferManager: ['buffer-focus-enter', 'buffer-focus-leave', 'buffer-loaded', 'buffer-saved', 'buffer-unloaded', 'create-buffer', 'load-buffer', 'save-buffer'],
    IdeBuildManager: ['build-failed', 'build-finished', 'build-started'],
    IdeBuildPipeline: ['diagnostic', 'finished', 'started'],
    IdeBuildStage: ['chain', 'query', 'reap'],
    IdeConfiguration: ['changed'],
    IdeConfigurationManager: ['invalidate'],
    IdeContext: ['loaded'],
    IdeDeviceManager: ['device-added', 'device-removed'],
    IdeDiagnosticsManager: ['changed'],
    IdeEditorPerspective: ['view-added', 'view-removed'],
    IdeEditorView: ['request-documentation'],
    IdeEnvironment: ['changed'],
    IdeExtensionSetAdapter: ['extension-added', 'extension-removed'],
    IdeLangservClient: ['notification', 'published-diagnostics', 'supports-language'],
    IdeLayoutGrid: ['empty'],
    IdeLayoutStack: ['empty', 'split'],
    IdeObject: ['destroy'],
    IdeOmniSearchDisplay: ['activate', 'result-activated'],
    IdeOmniSearchEntry: ['clear-search', 'move-next-result', 'move-previous-result'],
    IdeOmniSearchGroup: ['result-activated', 'result-selected'],
    IdeProject: ['file-renamed', 'file-trashed'],
    IdeRunManager: ['run', 'stopped'],
    IdeRunner: ['exited', 'spawned'],
    IdeSearchContext: ['completed', 'count-set', 'result-added', 'result-removed'],
    IdeSettings: ['changed'],
    IdeSourceMap: ['hide-map', 'show-map'],
    IdeSourceSnippetContext: ['changed'],
    IdeSourceView: ['action', 'add-cursor', 'append-to-count', 'begin-macro', 'begin-rename', 'begin-user-action', 'capture-modifier', 'clear-count', 'clear-modifier', 'clear-search', 'clear-selection', 'clear-snippets', 'cycle-completion', 'decrease-font-size', 'delete-selection', 'duplicate-entire-line', 'end-macro', 'end-user-action', 'find-references', 'focus-location', 'format-selection', 'goto-definition', 'hide-completion', 'increase-font-size', 'indent-selection', 'insert-modifier', 'jump', 'move-error', 'move-search', 'movement', 'paste-clipboard-extended', 'pop-selection', 'pop-snippet', 'push-selection', 'push-snippet', 'rebuild-highlight', 'reindent', 'remove-cursors', 'replay-macro', 'request-documentation', 'reset-font-size', 'restore-insert-mark', 'save-command', 'save-insert-mark', 'save-search-char', 'select-inner', 'select-tag', 'selection-theatric', 'set-mode', 'set-overwrite', 'set-search-text', 'sort', 'swap-selection-bounds'],
    IdeSourceViewMode: ['action', 'add-cursor', 'append-to-count', 'backspace', 'begin-macro', 'begin-rename', 'begin-user-action', 'capture-modifier', 'change-case', 'change-number', 'clear-count', 'clear-modifier', 'clear-search', 'clear-selection', 'clear-snippets', 'copy-clipboard', 'cut-clipboard', 'cycle-completion', 'decrease-font-size', 'delete-from-cursor', 'delete-selection', 'duplicate-entire-line', 'end-macro', 'end-user-action', 'find-references', 'format-selection', 'goto-definition', 'hide-completion', 'increase-font-size', 'indent-selection', 'insert-at-cursor', 'insert-modifier', 'join-lines', 'move-cursor', 'move-error', 'move-lines', 'move-search', 'move-to-matching-bracket', 'move-viewport', 'move-words', 'movement', 'paste-clipboard', 'paste-clipboard-extended', 'pop-selection', 'preedit-changed', 'push-selection', 'rebuild-highlight', 'redo', 'reindent', 'remove-cursors', 'replay-macro', 'request-documentation', 'reset-font-size', 'restore-insert-mark', 'save-command', 'save-insert-mark', 'save-search-char', 'select-all', 'select-inner', 'select-tag', 'selection-theatric', 'set-anchor', 'set-mode', 'set-overwrite', 'set-search-text', 'show-completion', 'sort', 'swap-selection-bounds', 'toggle-cursor-visible', 'toggle-overwrite', 'undo'],
    IdeSubprocessSupervisor: ['spawned', 'supervise', 'unsupervise'],
    IdeTransferManager: ['all-transfers-completed', 'transfer-completed', 'transfer-failed'],
    IdeTransferRow: ['cancelled'],
    IdeVcs: ['changed'],
    IdeWorkbench: ['action', 'set-perspective', 'unload'],
};

// Every GType this namespace can INSTANTIATE -> the declarations its members come from.
//
// The key set is what a UI description file can name: a registered, non-abstract class.
// Not "every widget" — GtkBuilder resolves a name through `g_type_from_name`, which knows
// nothing about widgets, and a `.ui` file is full of `GtkSizeGroup`, `GtkTextTag`,
// `GtkEventController*` and `GtkCellRenderer*`. Use `Widgets` and `CHILD_HOLDERS`
// below for the narrower questions; they did not move.
export const DECLS = {
    IdeApplication: ['IdeApplication', 'DzlApplication', 'GtkApplication', 'GApplication'],
    IdeBackForwardItem: ['IdeBackForwardItem', 'IdeObject'],
    IdeBackForwardList: ['IdeBackForwardList', 'IdeObject'],
    IdeBuffer: ['IdeBuffer', 'GtkSourceBuffer', 'GtkTextBuffer'],
    IdeBufferChangeMonitor: ['IdeBufferChangeMonitor', 'IdeObject'],
    IdeBufferManager: ['IdeBufferManager', 'IdeObject'],
    IdeBuildManager: ['IdeBuildManager', 'IdeObject'],
    IdeBuildPipeline: ['IdeBuildPipeline', 'IdeObject'],
    IdeBuildStage: ['IdeBuildStage', 'IdeObject'],
    IdeBuildStageLauncher: ['IdeBuildStageLauncher', 'IdeBuildStage', 'IdeObject'],
    IdeBuildStageMkdirs: ['IdeBuildStageMkdirs', 'IdeBuildStage', 'IdeObject'],
    IdeBuildStageTransfer: ['IdeBuildStageTransfer', 'IdeBuildStage', 'IdeObject'],
    IdeBuildconfigConfiguration: ['IdeBuildconfigConfiguration', 'IdeConfiguration', 'IdeObject'],
    IdeBuildconfigConfigurationProvider: ['IdeBuildconfigConfigurationProvider', 'IdeConfigurationProvider'],
    IdeCompletionResults: ['IdeCompletionResults'],
    IdeCompletionWords: ['IdeCompletionWords', 'GtkSourceCompletionWords', 'GtkSourceCompletionProvider'],
    IdeConfiguration: ['IdeConfiguration', 'IdeObject'],
    IdeConfigurationManager: ['IdeConfigurationManager', 'IdeObject'],
    IdeContext: ['IdeContext'],
    IdeCursor: ['IdeCursor'],
    IdeDeviceManager: ['IdeDeviceManager', 'IdeObject'],
    IdeDiagnosticsManager: ['IdeDiagnosticsManager', 'IdeObject'],
    IdeDirectoryBuildSystem: ['IdeDirectoryBuildSystem', 'IdeObject', 'IdeBuildSystem'],
    IdeDirectoryVcs: ['IdeDirectoryVcs', 'IdeObject', 'IdeVcs'],
    IdeDoap: ['IdeDoap'],
    IdeDoapPerson: ['IdeDoapPerson'],
    IdeEditorPerspective: ['IdeEditorPerspective', 'DzlDockOverlay', 'GtkEventBox', 'GtkBin', 'GtkContainer', 'GtkWidget', 'DzlDock', 'DzlDockItem', 'GtkBuildable', 'IdePerspective'],
    IdeEditorView: ['IdeEditorView', 'IdeLayoutView', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    IdeEnvironment: ['IdeEnvironment'],
    IdeEnvironmentVariable: ['IdeEnvironmentVariable'],
    IdeExtensionAdapter: ['IdeExtensionAdapter', 'IdeObject'],
    IdeExtensionSetAdapter: ['IdeExtensionSetAdapter', 'IdeObject'],
    IdeFile: ['IdeFile', 'IdeObject'],
    IdeFileSettings: ['IdeFileSettings', 'IdeObject'],
    IdeFormatterOptions: ['IdeFormatterOptions'],
    IdeHighlightEngine: ['IdeHighlightEngine', 'IdeObject'],
    IdeLangservClient: ['IdeLangservClient', 'IdeObject'],
    IdeLangservFormatter: ['IdeLangservFormatter', 'IdeObject', 'IdeFormatter'],
    IdeLangservHighlighter: ['IdeLangservHighlighter', 'IdeObject', 'IdeHighlighter'],
    IdeLangservSymbolNode: ['IdeLangservSymbolNode', 'IdeSymbolNode', 'IdeObject'],
    IdeLangservSymbolTree: ['IdeLangservSymbolTree', 'IdeSymbolTree'],
    IdeLayout: ['IdeLayout', 'DzlDockBin', 'GtkContainer', 'GtkWidget', 'DzlDock', 'DzlDockItem', 'GtkBuildable'],
    IdeLayoutGrid: ['IdeLayoutGrid', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    IdeLayoutPane: ['IdeLayoutPane', 'DzlDockBinEdge', 'DzlDockRevealer', 'DzlBin', 'GtkBin', 'GtkContainer', 'GtkWidget', 'DzlDockItem', 'GtkBuildable'],
    IdeLayoutStack: ['IdeLayoutStack', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    IdeLayoutView: ['IdeLayoutView', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    IdeLocalDevice: ['IdeLocalDevice', 'IdeDevice', 'IdeObject'],
    IdeObject: ['IdeObject'],
    IdeOmniBar: ['IdeOmniBar', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    IdeOmniSearchDisplay: ['IdeOmniSearchDisplay', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    IdeOmniSearchEntry: ['IdeOmniSearchEntry', 'GtkEntry', 'GtkWidget', 'GtkBuildable', 'GtkCellEditable', 'GtkEditable'],
    IdeOmniSearchGroup: ['IdeOmniSearchGroup', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    IdeOmniSearchRow: ['IdeOmniSearchRow', 'GtkListBoxRow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkActionable'],
    IdePkconTransfer: ['IdePkconTransfer', 'IdeTransfer'],
    IdePreferencesPerspective: ['IdePreferencesPerspective', 'DzlPreferencesView', 'GtkBin', 'GtkContainer', 'GtkWidget', 'DzlPreferences', 'GtkBuildable', 'IdePerspective'],
    IdeProgress: ['IdeProgress'],
    IdeProject: ['IdeProject', 'IdeObject'],
    IdeProjectEdit: ['IdeProjectEdit'],
    IdeProjectFile: ['IdeProjectFile', 'IdeProjectItem', 'IdeObject'],
    IdeProjectFiles: ['IdeProjectFiles', 'IdeProjectItem', 'IdeObject'],
    IdeProjectInfo: ['IdeProjectInfo'],
    IdeProjectItem: ['IdeProjectItem', 'IdeObject'],
    IdeRecentProjects: ['IdeRecentProjects'],
    IdeRunButton: ['IdeRunButton', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    IdeRunManager: ['IdeRunManager', 'IdeObject'],
    IdeRunner: ['IdeRunner', 'IdeObject'],
    IdeRuntime: ['IdeRuntime', 'IdeObject'],
    IdeRuntimeManager: ['IdeRuntimeManager', 'IdeObject'],
    IdeSearchContext: ['IdeSearchContext', 'IdeObject'],
    IdeSearchEngine: ['IdeSearchEngine', 'IdeObject'],
    IdeSearchResult: ['IdeSearchResult', 'IdeObject'],
    IdeSettings: ['IdeSettings', 'IdeObject'],
    IdeSourceMap: ['IdeSourceMap', 'GtkSourceMap', 'GtkSourceView', 'GtkTextView', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkScrollable'],
    IdeSourceSnippet: ['IdeSourceSnippet'],
    IdeSourceSnippetChunk: ['IdeSourceSnippetChunk'],
    IdeSourceSnippetContext: ['IdeSourceSnippetContext'],
    IdeSourceSnippets: ['IdeSourceSnippets'],
    IdeSourceSnippetsManager: ['IdeSourceSnippetsManager'],
    IdeSourceView: ['IdeSourceView', 'GtkSourceView', 'GtkTextView', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkScrollable'],
    IdeSourceViewMode: ['IdeSourceViewMode', 'GtkWidget', 'GtkBuildable'],
    IdeSubprocessLauncher: ['IdeSubprocessLauncher'],
    IdeSubprocessSupervisor: ['IdeSubprocessSupervisor'],
    IdeSymbolNode: ['IdeSymbolNode', 'IdeObject'],
    IdeTransfer: ['IdeTransfer'],
    IdeTransferButton: ['IdeTransferButton', 'DzlProgressButton', 'GtkButton', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkActionable', 'GtkActivatable', 'GtkBuildable'],
    IdeTransferManager: ['IdeTransferManager', 'IdeObject'],
    IdeTransferRow: ['IdeTransferRow', 'GtkListBoxRow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkActionable'],
    IdeTransfersButton: ['IdeTransfersButton', 'GtkMenuButton', 'GtkToggleButton', 'GtkButton', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkActionable', 'GtkActivatable', 'GtkBuildable'],
    IdeTransfersProgressIcon: ['IdeTransfersProgressIcon', 'GtkDrawingArea', 'GtkWidget', 'GtkBuildable'],
    IdeUnsavedFiles: ['IdeUnsavedFiles', 'IdeObject'],
    IdeWorkbench: ['IdeWorkbench', 'GtkApplicationWindow', 'GtkWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    IdeWorkbenchHeaderBar: ['IdeWorkbenchHeaderBar', 'GtkHeaderBar', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    IdeWorkbenchMessage: ['IdeWorkbenchMessage', 'GtkInfoBar', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
};

// The GTypes above that ARE widgets are the `Widgets` map in the sibling `.d.ts`; these
// are the ones that merely HOLD one, through `set_child`/`get_child`, descending from
// `GObject.Object`. A renderer places them like a container; a check asking "is this a
// widget" must not count them. Derived from the accessor pair, never from a list — the
// count is in the provenance line above.
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

// The number behind each of those nicks, read from GIR's own `value` attribute.
//
// It ships because position in `ENUM_NICKS` is not the value and a consumer with no
// typelib has no other way to learn it: a surface without GI still has to hand GObject an
// integer. The alternative a consumer reaches for first is counting, and counting is wrong
// on 6 of the 137 enums a GTK 4 vocabulary carries (112 in Gtk-4.0, 25 in Adw-1) --
// `GtkResponseType` runs -1 down to
// -11, `GtkTextWindowType` starts at 1, and `GtkConstraintStrength.required` is
// 1001001000 where counting answers 0.
//
// Same provenance as the nicks above, which is the point: a consumer that reads the numbers
// from an INSTALLED library instead gets two provenances for one table, and a member the
// vocabulary describes but the host predates then looks like a missing number rather than a
// version gap.
export const ENUM_VALUES = {
    'IdeBuildLogStream.stderr': 1,
    'IdeBuildLogStream.stdout': 0,
    'IdeCursorType.column': 0,
    'IdeCursorType.match': 2,
    'IdeCursorType.select': 1,
    'IdeDiagnosticSeverity.deprecated': 2,
    'IdeDiagnosticSeverity.error': 4,
    'IdeDiagnosticSeverity.fatal': 5,
    'IdeDiagnosticSeverity.ignored': 0,
    'IdeDiagnosticSeverity.note': 1,
    'IdeDiagnosticSeverity.warning': 3,
    'IdeHighlightResult.continue': 1,
    'IdeHighlightResult.stop': 0,
    'IdeIndentStyle.spaces': 1,
    'IdeIndentStyle.tabs': 2,
    'IdeLayoutGridSplit.left': 1,
    'IdeLayoutGridSplit.move-left': 3,
    'IdeLayoutGridSplit.move-right': 4,
    'IdeLayoutGridSplit.right': 2,
    'IdeSourceViewModeType.modal': 2,
    'IdeSourceViewModeType.permanent': 1,
    'IdeSourceViewModeType.transient': 0,
    'IdeSourceViewMovement.first-char': 5,
    'IdeSourceViewMovement.first-line': 25,
    'IdeSourceViewMovement.first-nonspace-char': 6,
    'IdeSourceViewMovement.half-page-down': 32,
    'IdeSourceViewMovement.half-page-left': 33,
    'IdeSourceViewMovement.half-page-right': 34,
    'IdeSourceViewMovement.half-page-up': 31,
    'IdeSourceViewMovement.last-char': 8,
    'IdeSourceViewMovement.last-line': 27,
    'IdeSourceViewMovement.line-chars': 29,
    'IdeSourceViewMovement.line-end': 30,
    'IdeSourceViewMovement.line-percentage': 28,
    'IdeSourceViewMovement.match-special': 46,
    'IdeSourceViewMovement.middle-char': 7,
    'IdeSourceViewMovement.next-char': 4,
    'IdeSourceViewMovement.next-full-word-end': 18,
    'IdeSourceViewMovement.next-full-word-start': 10,
    'IdeSourceViewMovement.next-line': 24,
    'IdeSourceViewMovement.next-match-modifier': 56,
    'IdeSourceViewMovement.next-match-search-char': 58,
    'IdeSourceViewMovement.next-offset': 1,
    'IdeSourceViewMovement.next-sub-word-start': 11,
    'IdeSourceViewMovement.next-unmatched-brace': 53,
    'IdeSourceViewMovement.next-unmatched-paren': 55,
    'IdeSourceViewMovement.next-word-end': 17,
    'IdeSourceViewMovement.next-word-start': 9,
    'IdeSourceViewMovement.nth-char': 2,
    'IdeSourceViewMovement.nth-line': 26,
    'IdeSourceViewMovement.page-down': 37,
    'IdeSourceViewMovement.page-down-lines': 38,
    'IdeSourceViewMovement.page-up': 35,
    'IdeSourceViewMovement.page-up-lines': 36,
    'IdeSourceViewMovement.paragraph-end': 22,
    'IdeSourceViewMovement.paragraph-start': 21,
    'IdeSourceViewMovement.previous-char': 3,
    'IdeSourceViewMovement.previous-full-word-end': 16,
    'IdeSourceViewMovement.previous-full-word-start': 14,
    'IdeSourceViewMovement.previous-line': 23,
    'IdeSourceViewMovement.previous-match-modifier': 57,
    'IdeSourceViewMovement.previous-match-search-char': 59,
    'IdeSourceViewMovement.previous-offset': 0,
    'IdeSourceViewMovement.previous-sub-word-start': 12,
    'IdeSourceViewMovement.previous-unmatched-brace': 52,
    'IdeSourceViewMovement.previous-unmatched-paren': 54,
    'IdeSourceViewMovement.previous-word-end': 15,
    'IdeSourceViewMovement.previous-word-start': 13,
    'IdeSourceViewMovement.screen-bottom': 45,
    'IdeSourceViewMovement.screen-down': 40,
    'IdeSourceViewMovement.screen-left': 41,
    'IdeSourceViewMovement.screen-middle': 44,
    'IdeSourceViewMovement.screen-right': 42,
    'IdeSourceViewMovement.screen-top': 43,
    'IdeSourceViewMovement.screen-up': 39,
    'IdeSourceViewMovement.scroll-screen-bottom': 49,
    'IdeSourceViewMovement.scroll-screen-center': 48,
    'IdeSourceViewMovement.scroll-screen-left': 50,
    'IdeSourceViewMovement.scroll-screen-right': 51,
    'IdeSourceViewMovement.scroll-screen-top': 47,
    'IdeSourceViewMovement.sentence-end': 20,
    'IdeSourceViewMovement.sentence-start': 19,
    'IdeSourceViewTheatric.expand': 0,
    'IdeSourceViewTheatric.shrink': 1,
    'IdeSymbolKind.array': 1,
    'IdeSymbolKind.boolean': 2,
    'IdeSymbolKind.class': 3,
    'IdeSymbolKind.constant': 4,
    'IdeSymbolKind.constructor': 5,
    'IdeSymbolKind.enum': 6,
    'IdeSymbolKind.enum-value': 7,
    'IdeSymbolKind.field': 8,
    'IdeSymbolKind.file': 9,
    'IdeSymbolKind.function': 10,
    'IdeSymbolKind.header': 11,
    'IdeSymbolKind.interface': 12,
    'IdeSymbolKind.keyword': 24,
    'IdeSymbolKind.method': 13,
    'IdeSymbolKind.module': 14,
    'IdeSymbolKind.namespace': 15,
    'IdeSymbolKind.none': 0,
    'IdeSymbolKind.number': 16,
    'IdeSymbolKind.package': 17,
    'IdeSymbolKind.property': 18,
    'IdeSymbolKind.scalar': 19,
    'IdeSymbolKind.string': 20,
    'IdeSymbolKind.struct': 21,
    'IdeSymbolKind.ui-attributes': 25,
    'IdeSymbolKind.ui-child': 26,
    'IdeSymbolKind.ui-item': 27,
    'IdeSymbolKind.ui-menu': 28,
    'IdeSymbolKind.ui-menu-attribute': 29,
    'IdeSymbolKind.ui-object': 30,
    'IdeSymbolKind.ui-packing': 31,
    'IdeSymbolKind.ui-property': 32,
    'IdeSymbolKind.ui-section': 33,
    'IdeSymbolKind.ui-signal': 34,
    'IdeSymbolKind.ui-style': 35,
    'IdeSymbolKind.ui-style-class': 36,
    'IdeSymbolKind.ui-submenu': 37,
    'IdeSymbolKind.ui-template': 38,
    'IdeSymbolKind.union': 22,
    'IdeSymbolKind.variable': 23,
    'IdeSymbolKind.xml-attribute': 39,
    'IdeSymbolKind.xml-cdata': 43,
    'IdeSymbolKind.xml-comment': 42,
    'IdeSymbolKind.xml-declaration': 40,
    'IdeSymbolKind.xml-element': 41,
    'IdeThreadPoolKind.compiler': 0,
    'IdeThreadPoolKind.indexer': 1,
    'IdeThreadPoolKind.last': 2,
    'IdeVcsConfigType.email': 1,
    'IdeVcsConfigType.full-name': 0,
};

// The nicks GIR marks `deprecated="1"`.
//
// Two members of one enum may share a value -- that is how GObject spells an alias, and
// `GTK_ALIGN_BASELINE` and `GTK_ALIGN_BASELINE_FILL` are both 4. `ENUM_VALUES` keeps
// both names, so nothing is lost, and this is what says which of the two a number should be
// spelled back as. Stated rather than derived: the pairing is visible in the values, the
// DIRECTION is not.
//
// Read it as evidence, not as a negative: 4 registered-enum members in the 718 GIRs carry
// the attribute at all, and 179 of the 182 value-sharing pairs carry it on neither half.
// A nick missing from here is a nick GIR says nothing about, not a nick GIR calls current.
export const ENUM_DEPRECATED = [];

// The declared remainder: nicks whose GIR `value` is not a number this can carry.
//
// Every nick in `ENUM_NICKS` is in `ENUM_VALUES` or here -- a nick in neither would be a
// silent drop. GIR carries two shapes no integer holds: a symbolic or absent value (Vala
// writes `(null)`, a char enum writes a letter) and an integer past
// `Number.MAX_SAFE_INTEGER`. The value kept here is the raw attribute, so the entry says
// WHAT was unreadable rather than only that something was. Measured over the 718 GIRs in
// ts-for-gir's `girs/`: 32 of 34096 registered-enum members, none in Gtk, Adw, GLib or Gio.
export const ENUM_VALUES_UNREADABLE = {};

// The number behind each member of a registered BITFIELD, keyed the same way.
//
// `ENUM_NICKS` refuses a bitfield because GObject cannot resolve a nick SET, and that
// reason says nothing about one member's number. 23 settable properties in Gtk-4.0 and
// Adw-1 are bitfield-typed -- `GtkEntry:input-hints`, `GtkPopoverMenu:flags`,
// `AdwTabView:shortcuts`, `GtkDropTarget:actions`, ... -- and they are typed bare
// `number`, so a host without GI has nothing to compute one from. Counting is worst
// exactly here: 119 of the 156 Gtk-4.0 bitfield members this vocabulary carries disagree
// with their declaration position, against 29 of 672 enumeration members.
//
// A table of its own rather than more rows in `ENUM_VALUES`, so that "every nick in
// `ENUM_NICKS` has a number or a declared reason" stays a claim about one set.
export const FLAG_VALUES = {
    'GApplicationFlags.allow-replacement': 128,
    'GApplicationFlags.can-override-app-id': 64,
    'GApplicationFlags.default-flags': 0,
    'GApplicationFlags.flags-none': 0,
    'GApplicationFlags.handles-command-line': 8,
    'GApplicationFlags.handles-open': 4,
    'GApplicationFlags.is-launcher': 2,
    'GApplicationFlags.is-service': 1,
    'GApplicationFlags.non-unique': 32,
    'GApplicationFlags.replace': 256,
    'GApplicationFlags.send-environment': 16,
    'GSubprocessFlags.inherit-fds': 128,
    'GSubprocessFlags.none': 0,
    'GSubprocessFlags.search-path-from-envp': 256,
    'GSubprocessFlags.stderr-merge': 64,
    'GSubprocessFlags.stderr-pipe': 16,
    'GSubprocessFlags.stderr-silence': 32,
    'GSubprocessFlags.stdin-inherit': 2,
    'GSubprocessFlags.stdin-pipe': 1,
    'GSubprocessFlags.stdout-pipe': 4,
    'GSubprocessFlags.stdout-silence': 8,
    'IdeBufferLineFlags.added': 1,
    'IdeBufferLineFlags.changed': 2,
    'IdeBufferLineFlags.deleted': 4,
    'IdeBufferLineFlags.error': 8,
    'IdeBufferLineFlags.none': 0,
    'IdeBufferLineFlags.note': 32,
    'IdeBufferLineFlags.warning': 16,
    'IdeBuildPhase.after': 536870912,
    'IdeBuildPhase.autogen': 8,
    'IdeBuildPhase.before': 268435456,
    'IdeBuildPhase.build': 64,
    'IdeBuildPhase.configure': 16,
    'IdeBuildPhase.dependencies': 4,
    'IdeBuildPhase.downloads': 2,
    'IdeBuildPhase.export': 256,
    'IdeBuildPhase.failed': 2147483648,
    'IdeBuildPhase.final': 512,
    'IdeBuildPhase.finished': 1073741824,
    'IdeBuildPhase.install': 128,
    'IdeBuildPhase.none': 0,
    'IdeBuildPhase.prepare': 1,
    'IdeSymbolFlags.is-deprecated': 4,
    'IdeSymbolFlags.is-member': 2,
    'IdeSymbolFlags.is-static': 1,
    'IdeSymbolFlags.none': 0,
};

// The same declared remainder for the bitfields. Every one of the 13 members in ts-for-gir's
// `girs/` whose value is past `Number.MAX_SAFE_INTEGER` is a bitfield member (Fwupd, Qmi),
// so this is the table that shape actually reaches.
export const FLAG_VALUES_UNREADABLE = {};

// Declaration GType + property name -> the GType of that property's enum or bitfield.
//
// Without it the value tables above are half an answer. A host with no GI knows it must set
// `orientation` to the number behind the nick `vertical`; `ENUM_VALUES` is keyed
// `GtkOrientation.vertical`, and nothing else says that `orientation` is a
// `GtkOrientation`. Deriving it is not available: `never` is a member of several Gtk enums,
// and choosing between them produces a wrong number rather than a missing one.
//
// Only where the property's OWN type is the enum. An array of them and a union that mentions
// one are both entries a consumer would resolve wrongly, so neither is written.
//
// A GType named here has numbers in SOME vocabulary, not necessarily this one: the namespace
// that OWNS an enum publishes it, so 83 of the 909 entries a full run emits want the owner's
// vocabulary loaded too. Owners that emit none (Gdk, Pango) are inlined into the tables above.
export const PROP_ENUMS = {
    'GApplication.flags': 'GApplicationFlags',
    'IdeFileSettings.indent-style': 'IdeIndentStyle',
    'IdeFileSettings.newline-type': 'GtkSourceNewlineType',
    'IdeSourceView.indent-style': 'IdeIndentStyle',
    'IdeSourceView.search-direction': 'GtkDirectionType',
    'IdeSubprocessLauncher.flags': 'GSubprocessFlags',
    'IdeSymbolNode.flags': 'IdeSymbolFlags',
    'IdeSymbolNode.kind': 'IdeSymbolKind',
};

// `<enum GType>.<nick>` -> the kind of value that ARIA slot takes.
//
// The one table here that is not about a ParamSpec. A GtkBuilder or Blueprint
// `accessibility { … }` block is typed by GTK's ARIA table instead, and the two disagree
// where it matters: `orientation` is settable on a `GtkLabel` that implements no
// `GtkOrientable` and has no such property, and `checked` is a `GtkAccessibleTristate`, so
// `checked: true` means the number 1 and not the boolean. A consumer typing those slots
// from the widget gets both wrong, silently.
//
// Read from each member's own documentation, which is where GTK keeps the table --
// `gtk_accessible_property_init_value()` is the C half and is not introspectable, the
// sentence is. Complete or absent, never partial: a member whose documentation states no
// value type fails generation and names itself, because a missing row is indistinguishable
// from "GTK has no such name" and the plausible fallback emits `true` where GTK means 1.
export const ARIA_VALUE_TYPES = {};

// The same keys, for the `'enum'` rows only -> the GType of the enum.
//
// The join on from a kind to a number, and a table of its own for the reason `PROP_ENUMS`
// is one: folding the GType into `ARIA_VALUE_TYPES` would make its values a mix of six
// reserved words and arbitrary GTypes, and telling them apart would be the consumer's
// problem. With this, `ARIA_VALUE_TYPES[k] === 'enum'` is the whole test, and
// `ENUM_NICKS[ARIA_VALUE_ENUMS[k]]` is the nick list.
export const ARIA_VALUE_ENUMS = {};

export const SLOT_CANDIDATES = {
    IdeLayoutGrid: {
        'stack-after': 'add_stack_after',
        'stack-before': 'add_stack_before',
    },
    IdeLayoutStack: {
        'active-view': 'set_active_view',
    },
};

export const SINCE = {
    'GApplication': '2.28',
    'GApplication.action-group': '2.28',
    'GApplication.application-id': '2.28',
    'GApplication.flags': '2.28',
    'GApplication.inactivity-timeout': '2.28',
    'GApplication.resource-base-path': '2.28',
    'GApplication.version': '2.80',
    'GApplication::handle-local-options': '2.40',
    'GApplication::name-lost': '2.60',
};
