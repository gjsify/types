// The widget vocabulary of Ide-50 as runtime data.
//
// GENERATED — do not edit. Provenance: Ide-50 — library 50.0.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Gio.ActionGroup Gio.ActionMap
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const SURFACE_PROVENANCE = 'Ide-50 — library 50.0.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Gio.ActionGroup Gio.ActionMap';

export const OWN_PROPS = {
    IdeEditorPage: ['buffer', 'gutter'],
    IdeEntryPopover: ['button-text', 'message', 'ready', 'text', 'title'],
    IdeEnvironmentEditor: ['environment'],
    IdeFileSearchPreview: ['file'],
    IdeFrame: ['use-tabbar'],
    IdeGreeterRow: ['project-info', 'selected'],
    IdeGreeterWorkspace: ['selection-mode'],
    IdeHeaderBar: ['menu-id', 'show-end-title-buttons', 'show-menu', 'show-start-title-buttons'],
    IdeInstallButton: ['label'],
    IdeOmniBar: ['menu-id'],
    IdePage: ['can-split', 'failed', 'menu-id'],
    IdeProgressIcon: ['progress'],
    IdeRadioBox: ['active-id', 'show-more'],
    IdeScrubberRevealer: ['content', 'policy', 'scrubber'],
    IdeSearchPopover: ['search-engine', 'show-preview'],
    IdeSearchPreview: ['child', 'progress', 'subtitle', 'title'],
    IdeShortcutAccelDialog: ['accelerator', 'shortcut-title'],
    IdeSourceView: ['font-desc', 'font-scale', 'insert-matching-brace', 'line-height', 'overwrite-braces'],
    IdeTerminal: ['palette'],
    IdeTerminalPage: ['close-on-exit', 'launcher', 'manage-spawn', 'pty', 'respawn-on-exit'],
    IdeTerminalSearch: ['case-sensitive', 'use-regex', 'whole-words', 'wrap-around'],
    IdeTree: ['kind', 'menu-model', 'root', 'selected-node'],
    IdeTreeExpander: ['expanded-icon', 'expanded-icon-name', 'icon', 'icon-name', 'ignored', 'list-row', 'menu-model', 'suffix', 'title', 'use-markup'],
    IdeTweaksComboRow: ['binding'],
    IdeTweaksWindow: ['folded', 'tweaks'],
    IdeWebkitPage: ['enable-javascript', 'show-toolbar'],
    IdeWorkspace: ['id', 'toolbar-style'],
};

export const OWN_SIGNALS = {
    IdeEntryPopover: ['activate', 'changed', 'insert-text'],
    IdeGreeterWorkspace: ['open-project'],
    IdeInstallButton: ['cancel', 'install'],
    IdeRadioBox: ['changed'],
    IdeShortcutAccelDialog: ['shortcut-set'],
    IdeSourceView: ['populate-menu'],
    IdeTerminal: ['match-clicked'],
    IdeTerminalSearch: ['search'],
};

export const DECLS = {
    IdeEditorPage: ['IdeEditorPage', 'IdePage', 'PanelWidget', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget'],
    IdeEditorWorkspace: ['IdeEditorWorkspace', 'IdeWorkspace', 'AdwApplicationWindow', 'GtkApplicationWindow', 'GtkWindow', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget', 'GtkNative', 'GtkRoot', 'GtkShortcutManager'],
    IdeEntryPopover: ['IdeEntryPopover', 'GtkPopover', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget', 'GtkNative', 'GtkShortcutManager'],
    IdeEnvironmentEditor: ['IdeEnvironmentEditor', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget'],
    IdeFileSearchPreview: ['IdeFileSearchPreview', 'IdeSearchPreview', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget'],
    IdeFrame: ['IdeFrame', 'PanelFrame', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget', 'GtkOrientable'],
    IdeGreeterRow: ['IdeGreeterRow', 'GtkListBoxRow', 'GtkWidget', 'GtkAccessible', 'GtkActionable', 'GtkBuildable', 'GtkConstraintTarget'],
    IdeGreeterWorkspace: ['IdeGreeterWorkspace', 'IdeWorkspace', 'AdwApplicationWindow', 'GtkApplicationWindow', 'GtkWindow', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget', 'GtkNative', 'GtkRoot', 'GtkShortcutManager'],
    IdeGrid: ['IdeGrid', 'PanelGrid', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget'],
    IdeHeaderBar: ['IdeHeaderBar', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget'],
    IdeInstallButton: ['IdeInstallButton', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget'],
    IdeLineChangeGutterRenderer: ['IdeLineChangeGutterRenderer', 'GtkSourceGutterRenderer', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget'],
    IdeMarkedView: ['IdeMarkedView', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget'],
    IdeNotificationsButton: ['IdeNotificationsButton', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget'],
    IdeOmniBar: ['IdeOmniBar', 'PanelOmniBar', 'GtkWidget', 'GtkAccessible', 'GtkActionable', 'GtkBuildable', 'GtkConstraintTarget'],
    IdePane: ['IdePane', 'PanelWidget', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget'],
    IdePrimaryWorkspace: ['IdePrimaryWorkspace', 'IdeWorkspace', 'AdwApplicationWindow', 'GtkApplicationWindow', 'GtkWindow', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget', 'GtkNative', 'GtkRoot', 'GtkShortcutManager'],
    IdeProgressIcon: ['IdeProgressIcon', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget'],
    IdeRadioBox: ['IdeRadioBox', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget'],
    IdeRunButton: ['IdeRunButton', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget'],
    IdeScrubberRevealer: ['IdeScrubberRevealer', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget'],
    IdeSearchEntry: ['IdeSearchEntry', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget', 'GtkEditable'],
    IdeSearchPopover: ['IdeSearchPopover', 'AdwDialog', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget', 'GtkShortcutManager'],
    IdeSearchPreview: ['IdeSearchPreview', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget'],
    IdeShortcutAccelDialog: ['IdeShortcutAccelDialog', 'AdwWindow', 'GtkWindow', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget', 'GtkNative', 'GtkRoot', 'GtkShortcutManager'],
    IdeSourceView: ['IdeSourceView', 'GtkSourceView', 'GtkTextView', 'GtkWidget', 'GtkAccessible', 'GtkAccessibleText', 'GtkBuildable', 'GtkConstraintTarget', 'GtkScrollable'],
    IdeTerminal: ['IdeTerminal', 'VteTerminal', 'GtkWidget', 'GtkAccessible', 'GtkAccessibleText', 'GtkBuildable', 'GtkConstraintTarget', 'GtkScrollable'],
    IdeTerminalPage: ['IdeTerminalPage', 'IdePage', 'PanelWidget', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget'],
    IdeTerminalPopover: ['IdeTerminalPopover', 'GtkPopover', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget', 'GtkNative', 'GtkShortcutManager'],
    IdeTerminalSearch: ['IdeTerminalSearch', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget'],
    IdeTree: ['IdeTree', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget'],
    IdeTreeExpander: ['IdeTreeExpander', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget'],
    IdeTweaksComboRow: ['IdeTweaksComboRow', 'AdwComboRow', 'AdwActionRow', 'AdwPreferencesRow', 'GtkListBoxRow', 'GtkWidget', 'GtkAccessible', 'GtkActionable', 'GtkBuildable', 'GtkConstraintTarget'],
    IdeTweaksWindow: ['IdeTweaksWindow', 'AdwWindow', 'GtkWindow', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget', 'GtkNative', 'GtkRoot', 'GtkShortcutManager'],
    IdeWebkitPage: ['IdeWebkitPage', 'IdePage', 'PanelWidget', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget'],
};

// The GTypes above that are NOT widgets: they hold one through `set_child`/`get_child`
// and descend from `GObject.Object`. A renderer places them like a container; a check
// asking "is this a widget" must not count them. Derived from the accessor pair, never
// from a list — the count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    IdeAnimationMode: ['linear', 'ease-in-quad', 'ease-out-quad', 'ease-in-out-quad', 'ease-in-cubic', 'ease-out-cubic', 'ease-in-out-cubic', 'last'],
    IdeBufferState: ['ready', 'loading', 'saving', 'failed'],
    IdeBuildLogStream: ['stdout', 'stderr'],
    IdeDebuggerBreakMode: ['none', 'breakpoint', 'countpoint', 'watchpoint'],
    IdeDebuggerBreakpointChange: ['enabled'],
    IdeDebuggerDisposition: ['keep', 'disable', 'delete-next-hit', 'delete-next-stop'],
    IdeDebuggerMovement: ['start', 'continue', 'step-in', 'step-out', 'finish'],
    IdeDebuggerStopReason: ['breakpoint-hit', 'catch', 'stop-exited', 'exited-normally', 'exited-signaled', 'function-finished', 'location-reached', 'signal-received', 'unknown'],
    IdeDebuggerStream: ['console', 'log', 'target'],
    IdeDeviceKind: ['computer', 'phone', 'tablet', 'micro-controller'],
    IdeDiagnosticSeverity: ['ignored', 'note', 'unused', 'deprecated', 'warning', 'error', 'fatal'],
    IdeIndentStyle: ['spaces', 'tabs'],
    IdeRunCommandKind: ['unknown', 'application', 'utility', 'test', 'benchmark', 'user-defined'],
    IdeRunContextShell: ['default', 'login', 'interactive'],
    IdeScrubberRevealPolicy: ['never', 'auto', 'always'],
    IdeSearchCategory: ['everything', 'actions', 'commands', 'files', 'symbols', 'other', 'documentation'],
    IdeSymbolKind: ['none', 'alias', 'array', 'boolean', 'class', 'constant', 'constructor', 'enum', 'enum-value', 'field', 'file', 'function', 'header', 'interface', 'macro', 'method', 'module', 'namespace', 'number', 'package', 'property', 'scalar', 'string', 'struct', 'template', 'union', 'variable', 'keyword', 'ui-attributes', 'ui-child', 'ui-item', 'ui-menu', 'ui-menu-attribute', 'ui-object', 'ui-packing', 'ui-property', 'ui-section', 'ui-signal', 'ui-style', 'ui-style-class', 'ui-submenu', 'ui-template', 'xml-attribute', 'xml-declaration', 'xml-element', 'xml-comment', 'xml-cdata', 'object', 'event', 'operator', 'type-param', 'last'],
    IdeTestStatus: ['none', 'running', 'success', 'failed'],
    IdeTreeNodeVisit: ['break', 'continue', 'children'],
    IdeVcsConfigType: ['full-name', 'email'],
    IdeVcsFileStatus: ['ignored', 'unchanged', 'untracked', 'added', 'renamed', 'deleted', 'changed'],
};

export const SLOT_CANDIDATES = {
    IdeEditorPage: {
        'gutter': 'set_gutter',
    },
    IdeGreeterWorkspace: {
        'page': 'add_page',
        'section': 'add_section',
    },
    IdeOmniBar: {
        'placeholder': 'set_placeholder',
    },
    IdeScrubberRevealer: {
        'content': 'set_content',
        'scrubber': 'set_scrubber',
    },
    IdeSearchPreview: {
        'child': 'set_child',
    },
    IdeTerminalSearch: {
        'terminal': 'set_terminal',
    },
    IdeTreeExpander: {
        'suffix': 'set_suffix',
    },
};

export const SINCE = {
    'IdeWebkitPage.enable-javascript': '44',
};
