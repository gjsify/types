// The widget vocabulary of Ide-46 as runtime data.
//
// GENERATED — do not edit. Provenance: Ide-46 — library 46.0.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Gio.ActionGroup Gio.ActionMap
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'Ide',
    version: '46',
    libraryVersion: '46.0.0',
    childHolders: 0,
    droppedBases: ['GObject.InitiallyUnowned', 'GObject.Object', 'Gio.ActionGroup', 'Gio.ActionMap'],
    inlinedBases: [],
    unsettableProps: [],
};

export const OWN_PROPS = {
    IdeEditorPage: ['buffer', 'gutter'],
    IdeEntryPopover: ['button-text', 'message', 'ready', 'text', 'title'],
    IdeEnvironmentEditor: ['environment'],
    IdeFileChooserEntry: ['action', 'create-folders', 'do-overwrite-confirmation', 'file', 'filter', 'local-only', 'max-width-chars', 'show-hidden', 'title'],
    IdeFileSearchPreview: ['file'],
    IdeFrame: ['use-tabbar'],
    IdeGreeterRow: ['project-info', 'selected'],
    IdeGreeterWorkspace: ['selection-mode'],
    IdeHeaderBar: ['menu-id', 'show-end-title-buttons'],
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
    IdePage: ['create-split'],
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
    IdeFileChooserEntry: ['IdeFileChooserEntry', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget'],
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
    IdeProgressIcon: ['IdeProgressIcon', 'GtkDrawingArea', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget'],
    IdeRadioBox: ['IdeRadioBox', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget'],
    IdeRunButton: ['IdeRunButton', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget'],
    IdeScrubberRevealer: ['IdeScrubberRevealer', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget'],
    IdeSearchEntry: ['IdeSearchEntry', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget', 'GtkEditable'],
    IdeSearchPopover: ['IdeSearchPopover', 'GtkPopover', 'GtkWidget', 'GtkAccessible', 'GtkBuildable', 'GtkConstraintTarget', 'GtkNative', 'GtkShortcutManager'],
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
    IdeSearchCategory: ['everything', 'actions', 'commands', 'files', 'symbols', 'other'],
    IdeSymbolKind: ['none', 'alias', 'array', 'boolean', 'class', 'constant', 'constructor', 'enum', 'enum-value', 'field', 'file', 'function', 'header', 'interface', 'macro', 'method', 'module', 'namespace', 'number', 'package', 'property', 'scalar', 'string', 'struct', 'template', 'union', 'variable', 'keyword', 'ui-attributes', 'ui-child', 'ui-item', 'ui-menu', 'ui-menu-attribute', 'ui-object', 'ui-packing', 'ui-property', 'ui-section', 'ui-signal', 'ui-style', 'ui-style-class', 'ui-submenu', 'ui-template', 'xml-attribute', 'xml-declaration', 'xml-element', 'xml-comment', 'xml-cdata', 'object', 'event', 'operator', 'type-param', 'last'],
    IdeTestStatus: ['none', 'running', 'success', 'failed'],
    IdeTreeNodeVisit: ['break', 'continue', 'children'],
    IdeVcsConfigType: ['full-name', 'email'],
    IdeVcsFileStatus: ['ignored', 'unchanged', 'untracked', 'added', 'renamed', 'deleted', 'changed'],
};

// The number behind each of those nicks, read from GIR's own `value` attribute.
//
// It ships because position in `ENUM_NICKS` is not the value and a consumer with no
// typelib has no other way to learn it: a surface without GI still has to hand GObject an
// integer. The alternative a consumer reaches for first is counting, and counting is wrong
// on 6 of the 129 enums a GTK 4 vocabulary carries (104 in Gtk-4.0, 25 in Adw-1) --
// `GtkResponseType` runs -1 down to
// -11, `GtkTextWindowType` starts at 1, and `GtkConstraintStrength.required` is
// 1001001000 where counting answers 0.
//
// Same provenance as the nicks above, which is the point: a consumer that reads the numbers
// from an INSTALLED library instead gets two provenances for one table, and a member the
// vocabulary describes but the host predates then looks like a missing number rather than a
// version gap.
export const ENUM_VALUES = {
    'IdeAnimationMode.ease-in-cubic': 4,
    'IdeAnimationMode.ease-in-out-cubic': 6,
    'IdeAnimationMode.ease-in-out-quad': 3,
    'IdeAnimationMode.ease-in-quad': 1,
    'IdeAnimationMode.ease-out-cubic': 5,
    'IdeAnimationMode.ease-out-quad': 2,
    'IdeAnimationMode.last': 7,
    'IdeAnimationMode.linear': 0,
    'IdeBufferState.failed': 3,
    'IdeBufferState.loading': 1,
    'IdeBufferState.ready': 0,
    'IdeBufferState.saving': 2,
    'IdeBuildLogStream.stderr': 1,
    'IdeBuildLogStream.stdout': 0,
    'IdeDebuggerBreakMode.breakpoint': 1,
    'IdeDebuggerBreakMode.countpoint': 2,
    'IdeDebuggerBreakMode.none': 0,
    'IdeDebuggerBreakMode.watchpoint': 3,
    'IdeDebuggerBreakpointChange.enabled': 1,
    'IdeDebuggerDisposition.delete-next-hit': 2,
    'IdeDebuggerDisposition.delete-next-stop': 3,
    'IdeDebuggerDisposition.disable': 1,
    'IdeDebuggerDisposition.keep': 0,
    'IdeDebuggerMovement.continue': 1,
    'IdeDebuggerMovement.finish': 4,
    'IdeDebuggerMovement.start': 0,
    'IdeDebuggerMovement.step-in': 2,
    'IdeDebuggerMovement.step-out': 3,
    'IdeDebuggerStopReason.breakpoint-hit': 0,
    'IdeDebuggerStopReason.catch': 7,
    'IdeDebuggerStopReason.exited-normally': 2,
    'IdeDebuggerStopReason.exited-signaled': 3,
    'IdeDebuggerStopReason.function-finished': 4,
    'IdeDebuggerStopReason.location-reached': 5,
    'IdeDebuggerStopReason.signal-received': 6,
    'IdeDebuggerStopReason.stop-exited': 1,
    'IdeDebuggerStopReason.unknown': 8,
    'IdeDebuggerStream.console': 1,
    'IdeDebuggerStream.log': 2,
    'IdeDebuggerStream.target': 0,
    'IdeDeviceKind.computer': 0,
    'IdeDeviceKind.micro-controller': 3,
    'IdeDeviceKind.phone': 1,
    'IdeDeviceKind.tablet': 2,
    'IdeDiagnosticSeverity.deprecated': 3,
    'IdeDiagnosticSeverity.error': 5,
    'IdeDiagnosticSeverity.fatal': 6,
    'IdeDiagnosticSeverity.ignored': 0,
    'IdeDiagnosticSeverity.note': 1,
    'IdeDiagnosticSeverity.unused': 2,
    'IdeDiagnosticSeverity.warning': 4,
    'IdeIndentStyle.spaces': 1,
    'IdeIndentStyle.tabs': 2,
    'IdeRunCommandKind.application': 1,
    'IdeRunCommandKind.benchmark': 4,
    'IdeRunCommandKind.test': 3,
    'IdeRunCommandKind.unknown': 0,
    'IdeRunCommandKind.user-defined': 5,
    'IdeRunCommandKind.utility': 2,
    'IdeRunContextShell.default': 0,
    'IdeRunContextShell.interactive': 2,
    'IdeRunContextShell.login': 1,
    'IdeScrubberRevealPolicy.always': 2,
    'IdeScrubberRevealPolicy.auto': 1,
    'IdeScrubberRevealPolicy.never': 0,
    'IdeSearchCategory.actions': 1,
    'IdeSearchCategory.commands': 2,
    'IdeSearchCategory.everything': 0,
    'IdeSearchCategory.files': 3,
    'IdeSearchCategory.other': 5,
    'IdeSearchCategory.symbols': 4,
    'IdeSymbolKind.alias': 1,
    'IdeSymbolKind.array': 2,
    'IdeSymbolKind.boolean': 3,
    'IdeSymbolKind.class': 4,
    'IdeSymbolKind.constant': 5,
    'IdeSymbolKind.constructor': 6,
    'IdeSymbolKind.enum': 7,
    'IdeSymbolKind.enum-value': 8,
    'IdeSymbolKind.event': 48,
    'IdeSymbolKind.field': 9,
    'IdeSymbolKind.file': 10,
    'IdeSymbolKind.function': 11,
    'IdeSymbolKind.header': 12,
    'IdeSymbolKind.interface': 13,
    'IdeSymbolKind.keyword': 27,
    'IdeSymbolKind.last': 51,
    'IdeSymbolKind.macro': 14,
    'IdeSymbolKind.method': 15,
    'IdeSymbolKind.module': 16,
    'IdeSymbolKind.namespace': 17,
    'IdeSymbolKind.none': 0,
    'IdeSymbolKind.number': 18,
    'IdeSymbolKind.object': 47,
    'IdeSymbolKind.operator': 49,
    'IdeSymbolKind.package': 19,
    'IdeSymbolKind.property': 20,
    'IdeSymbolKind.scalar': 21,
    'IdeSymbolKind.string': 22,
    'IdeSymbolKind.struct': 23,
    'IdeSymbolKind.template': 24,
    'IdeSymbolKind.type-param': 50,
    'IdeSymbolKind.ui-attributes': 28,
    'IdeSymbolKind.ui-child': 29,
    'IdeSymbolKind.ui-item': 30,
    'IdeSymbolKind.ui-menu': 31,
    'IdeSymbolKind.ui-menu-attribute': 32,
    'IdeSymbolKind.ui-object': 33,
    'IdeSymbolKind.ui-packing': 34,
    'IdeSymbolKind.ui-property': 35,
    'IdeSymbolKind.ui-section': 36,
    'IdeSymbolKind.ui-signal': 37,
    'IdeSymbolKind.ui-style': 38,
    'IdeSymbolKind.ui-style-class': 39,
    'IdeSymbolKind.ui-submenu': 40,
    'IdeSymbolKind.ui-template': 41,
    'IdeSymbolKind.union': 25,
    'IdeSymbolKind.variable': 26,
    'IdeSymbolKind.xml-attribute': 42,
    'IdeSymbolKind.xml-cdata': 46,
    'IdeSymbolKind.xml-comment': 45,
    'IdeSymbolKind.xml-declaration': 43,
    'IdeSymbolKind.xml-element': 44,
    'IdeTestStatus.failed': 3,
    'IdeTestStatus.none': 0,
    'IdeTestStatus.running': 1,
    'IdeTestStatus.success': 2,
    'IdeTreeNodeVisit.break': 0,
    'IdeTreeNodeVisit.children': 3,
    'IdeTreeNodeVisit.continue': 1,
    'IdeVcsConfigType.email': 1,
    'IdeVcsConfigType.full-name': 0,
    'IdeVcsFileStatus.added': 4,
    'IdeVcsFileStatus.changed': 7,
    'IdeVcsFileStatus.deleted': 6,
    'IdeVcsFileStatus.ignored': 1,
    'IdeVcsFileStatus.renamed': 5,
    'IdeVcsFileStatus.unchanged': 2,
    'IdeVcsFileStatus.untracked': 3,
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
// reason says nothing about one member's number. 21 writable widget properties in Gtk-4.0
// and Adw-1 are bitfield-typed -- `GtkEntry:input-hints`, `GtkPopoverMenu:flags`,
// `AdwTabView:shortcuts`, ... -- and they are typed bare `number`, so a host without GI
// has nothing to compute one from. Counting is worst exactly here: 95 of 121 Gtk-4.0
// bitfield members disagree with their position, against 29 of 685 enumeration members.
//
// A table of its own rather than more rows in `ENUM_VALUES`, so that "every nick in
// `ENUM_NICKS` has a number or a declared reason" stays a claim about one set.
export const FLAG_VALUES = {
    'IdeBufferOpenFlags.disable-addins': 4,
    'IdeBufferOpenFlags.force-reload': 2,
    'IdeBufferOpenFlags.none': 0,
    'IdeBuildLocality.default': 3,
    'IdeBuildLocality.in-tree': 1,
    'IdeBuildLocality.out-of-tree': 2,
    'IdePipelinePhase.after': 536870912,
    'IdePipelinePhase.autogen': 8,
    'IdePipelinePhase.before': 268435456,
    'IdePipelinePhase.build': 64,
    'IdePipelinePhase.commit': 256,
    'IdePipelinePhase.configure': 16,
    'IdePipelinePhase.dependencies': 4,
    'IdePipelinePhase.downloads': 2,
    'IdePipelinePhase.export': 512,
    'IdePipelinePhase.failed': 2147483648,
    'IdePipelinePhase.final': 1024,
    'IdePipelinePhase.finished': 1073741824,
    'IdePipelinePhase.install': 128,
    'IdePipelinePhase.none': 0,
    'IdePipelinePhase.prepare': 1,
    'IdeSpacesStyle.before-colon': 16,
    'IdeSpacesStyle.before-comma': 32,
    'IdeSpacesStyle.before-left-angle': 8,
    'IdeSpacesStyle.before-left-brace': 4,
    'IdeSpacesStyle.before-left-bracket': 2,
    'IdeSpacesStyle.before-left-paren': 1,
    'IdeSpacesStyle.before-semicolon': 64,
    'IdeSpacesStyle.ignore': 0,
    'IdeSymbolFlags.is-definition': 8,
    'IdeSymbolFlags.is-deprecated': 4,
    'IdeSymbolFlags.is-member': 2,
    'IdeSymbolFlags.is-static': 1,
    'IdeSymbolFlags.none': 0,
    'IdeTreeNodeFlags.added': 2,
    'IdeTreeNodeFlags.changed': 4,
    'IdeTreeNodeFlags.descendant': 1,
    'IdeTreeNodeFlags.none': 0,
    'IdeTreeNodeFlags.removed': 8,
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
// that OWNS an enum publishes it, so 57 of the 438 entries a full run emits want the owner's
// vocabulary loaded too. Owners that emit none (Gdk, Pango) are inlined into the tables above.
export const PROP_ENUMS = {
    'IdeFileChooserEntry.action': 'GtkFileChooserAction',
    'IdeScrubberRevealer.policy': 'IdeScrubberRevealPolicy',
    'IdeWorkspace.toolbar-style': 'AdwToolbarStyle',
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
