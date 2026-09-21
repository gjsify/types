// The widget vocabulary of Anjuta-3.0 as runtime data.
//
// GENERATED — do not edit. Provenance: Anjuta-3.0 — dropped empty base(s): GObject.TypeModule GObject.TypePlugin Atk.ImplementorIface
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'Anjuta',
    version: '3.0',
    libraryVersion: null,
    childHolders: 0,
    droppedBases: ['GObject.TypeModule', 'GObject.TypePlugin', 'Atk.ImplementorIface'],
    inlinedBases: [],
    unsettableProps: [],
    unresolvedProps: [],
    identifierPrefixes: ['Anjuta'],
    requiredVocabularies: ['@girs/gdl-3/vocabulary', '@girs/gobject-2.0/vocabulary', '@girs/gtk-3.0/vocabulary'],
};

export const OWN_PROPS = {
    AnjutaCellRendererCaptionedImage: ['pixbuf', 'text'],
    AnjutaCellRendererDiff: ['diff'],
    AnjutaCommandBar: ['max-text-width'],
    AnjutaCompletion: ['case-sensitive'],
    AnjutaEntry: ['help-text'],
    AnjutaFileDropEntry: ['relative-path'],
    AnjutaFileList: ['relative-path', 'show-add-button'],
    AnjutaPkgScanner: ['package', 'version'],
    AnjutaPlugin: ['shell'],
    AnjutaPluginManager: ['shell', 'status'],
    AnjutaProfile: ['plugin-manager', 'profile-name', 'sync-file'],
    AnjutaProfileManager: ['plugin-manager'],
    AnjutaProjectNode: ['file', 'name', 'state', 'type'],
    AnjutaSerializer: ['filepath', 'mode'],
    AnjutaTabber: ['notebook'],
    AnjutaTreeComboBox: ['model'],
    AnjutaVcsStatusTreeView: ['conflicted-selectable', 'show-status', 'status-codes'],
};

export const OWN_SIGNALS = {
    AnjutaAsyncNotify: ['finished'],
    AnjutaCommand: ['command-finished', 'command-started', 'data-arrived', 'progress'],
    AnjutaCommandQueue: ['finished'],
    AnjutaEnvironmentEditor: ['changed'],
    AnjutaLauncher: ['busy', 'child-exited'],
    AnjutaPkgConfigChooser: ['package-activated', 'package-deactivated'],
    AnjutaPlugin: ['activated', 'deactivated'],
    AnjutaPluginManager: ['plugin-activated', 'plugin-deactivated'],
    AnjutaProfile: ['changed', 'descoped', 'plugin-added', 'plugin-removed', 'scoped'],
    AnjutaProfileManager: ['profile-popped', 'profile-pushed'],
    AnjutaProjectNode: ['loaded', 'updated'],
    AnjutaStatus: ['busy'],
    AnjutaTreeComboBox: ['changed', 'popdown', 'popup'],
};

// Every GType this namespace can INSTANTIATE -> the declarations its members come from.
//
// The key set is what a UI description file can name: a registered, non-abstract class.
// Not "every widget" — GtkBuilder resolves a name through `g_type_from_name`, which knows
// nothing about widgets, and a `.ui` file is full of `GtkSizeGroup`, `GtkTextTag`,
// `GtkEventController*` and `GtkCellRenderer*`. Use `Widgets` and `CHILD_HOLDERS`
// below for the narrower questions; they did not move.
export const DECLS = {
    AnjutaAsyncCommand: ['AnjutaAsyncCommand', 'AnjutaCommand', 'GObject'],
    AnjutaAsyncNotify: ['AnjutaAsyncNotify', 'GObject'],
    AnjutaAutogen: ['AnjutaAutogen', 'GObject'],
    AnjutaCModule: ['AnjutaCModule', 'GObject'],
    AnjutaCPluginFactory: ['AnjutaCPluginFactory', 'GObject'],
    AnjutaCellRendererCaptionedImage: ['AnjutaCellRendererCaptionedImage', 'GtkCellRenderer', 'GInitiallyUnowned', 'GObject'],
    AnjutaCellRendererDiff: ['AnjutaCellRendererDiff', 'GtkCellRenderer', 'GInitiallyUnowned', 'GObject'],
    AnjutaCloseButton: ['AnjutaCloseButton', 'GtkButton', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkActionable', 'GtkActivatable', 'GtkBuildable'],
    AnjutaColumnTextView: ['AnjutaColumnTextView', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable', 'GtkOrientable'],
    AnjutaCommand: ['AnjutaCommand', 'GObject'],
    AnjutaCommandBar: ['AnjutaCommandBar', 'GtkNotebook', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable'],
    AnjutaCommandQueue: ['AnjutaCommandQueue', 'GObject'],
    AnjutaCompletion: ['AnjutaCompletion', 'GObject'],
    AnjutaDock: ['AnjutaDock', 'GdlDock', 'GdlDockObject', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable'],
    AnjutaDropEntry: ['AnjutaDropEntry', 'AnjutaEntry', 'GtkEntry', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable', 'GtkCellEditable', 'GtkEditable'],
    AnjutaEntry: ['AnjutaEntry', 'GtkEntry', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable', 'GtkCellEditable', 'GtkEditable'],
    AnjutaEnvironmentEditor: ['AnjutaEnvironmentEditor', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable'],
    AnjutaFileDropEntry: ['AnjutaFileDropEntry', 'AnjutaDropEntry', 'AnjutaEntry', 'GtkEntry', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable', 'GtkCellEditable', 'GtkEditable'],
    AnjutaFileList: ['AnjutaFileList', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable', 'GtkOrientable'],
    AnjutaLanguageProvider: ['AnjutaLanguageProvider', 'GObject'],
    AnjutaLauncher: ['AnjutaLauncher', 'GObject'],
    AnjutaPkgConfigChooser: ['AnjutaPkgConfigChooser', 'GtkTreeView', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable', 'GtkScrollable'],
    AnjutaPkgScanner: ['AnjutaPkgScanner', 'AnjutaAsyncCommand', 'AnjutaCommand', 'GObject'],
    AnjutaPlugin: ['AnjutaPlugin', 'GObject'],
    AnjutaPluginHandle: ['AnjutaPluginHandle', 'GObject'],
    AnjutaPluginManager: ['AnjutaPluginManager', 'GObject'],
    AnjutaPreferences: ['AnjutaPreferences', 'GObject'],
    AnjutaPreferencesDialog: ['AnjutaPreferencesDialog', 'GtkDialog', 'GtkWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable'],
    AnjutaProfile: ['AnjutaProfile', 'GObject'],
    AnjutaProfileManager: ['AnjutaProfileManager', 'GObject'],
    AnjutaProjectNode: ['AnjutaProjectNode', 'GInitiallyUnowned', 'GObject'],
    AnjutaSavePrompt: ['AnjutaSavePrompt', 'GtkMessageDialog', 'GtkDialog', 'GtkWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable'],
    AnjutaSerializer: ['AnjutaSerializer', 'GObject'],
    AnjutaSession: ['AnjutaSession', 'GObject'],
    AnjutaStatus: ['AnjutaStatus', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable', 'GtkOrientable'],
    AnjutaSyncCommand: ['AnjutaSyncCommand', 'AnjutaCommand', 'GObject'],
    AnjutaTabber: ['AnjutaTabber', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable'],
    AnjutaTokenFile: ['AnjutaTokenFile', 'GObject'],
    AnjutaTreeComboBox: ['AnjutaTreeComboBox', 'GtkToggleButton', 'GtkButton', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkActionable', 'GtkActivatable', 'GtkBuildable', 'GtkCellLayout'],
    AnjutaUI: ['AnjutaUI', 'GtkUIManager', 'GObject', 'GtkBuildable'],
    AnjutaVcsStatusTreeView: ['AnjutaVcsStatusTreeView', 'GtkTreeView', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable', 'GtkScrollable'],
};

// The GTypes above that ARE widgets are the `Widgets` map in the sibling `.d.ts`; these
// are the ones that merely HOLD one, through `set_child`/`get_child`, descending from
// `GObject.Object`. A renderer places them like a container; a check asking "is this a
// widget" must not count them. Derived from the accessor pair, never from a list — the
// count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    AnjutaCommandBarEntryType: ['frame', 'button'],
    AnjutaCommandQueueExecuteMode: ['automatic', 'manual'],
    AnjutaLauncherOutputType: ['stdout', 'stderr', 'pty'],
    AnjutaProjectValueType: ['string', 'list', 'boolean', 'map'],
    AnjutaSerializerMode: ['read', 'write'],
    AnjutaSessionPhase: ['start', 'first', 'normal', 'last', 'end'],
    AnjutaShellPlacement: ['none', 'top', 'bottom', 'right', 'left', 'center', 'floating'],
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
    'AnjutaCommandBarEntryType.button': 1,
    'AnjutaCommandBarEntryType.frame': 0,
    'AnjutaCommandQueueExecuteMode.automatic': 0,
    'AnjutaCommandQueueExecuteMode.manual': 1,
    'AnjutaLauncherOutputType.pty': 2,
    'AnjutaLauncherOutputType.stderr': 1,
    'AnjutaLauncherOutputType.stdout': 0,
    'AnjutaProjectValueType.boolean': 3,
    'AnjutaProjectValueType.list': 2,
    'AnjutaProjectValueType.map': 4,
    'AnjutaProjectValueType.string': 1,
    'AnjutaSerializerMode.read': 0,
    'AnjutaSerializerMode.write': 1,
    'AnjutaSessionPhase.end': 4,
    'AnjutaSessionPhase.first': 1,
    'AnjutaSessionPhase.last': 3,
    'AnjutaSessionPhase.normal': 2,
    'AnjutaSessionPhase.start': 0,
    'AnjutaShellPlacement.bottom': 2,
    'AnjutaShellPlacement.center': 5,
    'AnjutaShellPlacement.floating': 6,
    'AnjutaShellPlacement.left': 4,
    'AnjutaShellPlacement.none': 0,
    'AnjutaShellPlacement.right': 3,
    'AnjutaShellPlacement.top': 1,
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
    'AnjutaProjectNodeState.can-add-group': 256,
    'AnjutaProjectNodeState.can-add-module': 2048,
    'AnjutaProjectNodeState.can-add-package': 4096,
    'AnjutaProjectNodeState.can-add-source': 1024,
    'AnjutaProjectNodeState.can-add-target': 512,
    'AnjutaProjectNodeState.can-remove': 65536,
    'AnjutaProjectNodeState.can-save': 131072,
    'AnjutaProjectNodeState.incomplete': 2,
    'AnjutaProjectNodeState.loading': 4,
    'AnjutaProjectNodeState.modified': 1,
    'AnjutaProjectNodeState.ok': 0,
    'AnjutaProjectNodeState.remove-file': 262144,
    'AnjutaProjectNodeState.removed': 8,
    'AnjutaProjectNodeType.configure': 14,
    'AnjutaProjectNodeType.data': 11,
    'AnjutaProjectNodeType.executable': 524288,
    'AnjutaProjectNodeType.extra': 12,
    'AnjutaProjectNodeType.flag-mask': 16711680,
    'AnjutaProjectNodeType.frame': 2097152,
    'AnjutaProjectNodeType.generic': 10,
    'AnjutaProjectNodeType.genmarshal': 17,
    'AnjutaProjectNodeType.group': 33554432,
    'AnjutaProjectNodeType.header': 7,
    'AnjutaProjectNodeType.id-mask': 65535,
    'AnjutaProjectNodeType.idl': 15,
    'AnjutaProjectNodeType.info': 9,
    'AnjutaProjectNodeType.intltool': 13,
    'AnjutaProjectNodeType.java': 5,
    'AnjutaProjectNodeType.lisp': 6,
    'AnjutaProjectNodeType.lt-module': 20,
    'AnjutaProjectNodeType.man': 8,
    'AnjutaProjectNodeType.mkenums': 16,
    'AnjutaProjectNodeType.module': 83886080,
    'AnjutaProjectNodeType.object': 134217728,
    'AnjutaProjectNodeType.package': 100663296,
    'AnjutaProjectNodeType.primary': 262144,
    'AnjutaProjectNodeType.program': 3,
    'AnjutaProjectNodeType.project': 131072,
    'AnjutaProjectNodeType.proxy': 65536,
    'AnjutaProjectNodeType.python': 4,
    'AnjutaProjectNodeType.read-only': 1048576,
    'AnjutaProjectNodeType.root': 16777216,
    'AnjutaProjectNodeType.root-group': 19,
    'AnjutaProjectNodeType.script': 18,
    'AnjutaProjectNodeType.sharedlib': 1,
    'AnjutaProjectNodeType.source': 67108864,
    'AnjutaProjectNodeType.staticlib': 2,
    'AnjutaProjectNodeType.target': 50331648,
    'AnjutaProjectNodeType.type-mask': 4278190080,
    'AnjutaProjectNodeType.unknown': 0,
    'AnjutaProjectNodeType.variable': 117440512,
    'AnjutaProjectPropertyFlags.hidden': 4,
    'AnjutaProjectPropertyFlags.read-only': 1,
    'AnjutaProjectPropertyFlags.read-write': 2,
    'AnjutaProjectPropertyFlags.static': 8,
    'AnjutaTokenType.added': 134217728,
    'AnjutaTokenType.any': 16414,
    'AnjutaTokenType.argument': 16388,
    'AnjutaTokenType.case-insensitive': 16777216,
    'AnjutaTokenType.close': 262144,
    'AnjutaTokenType.close-quote': 16402,
    'AnjutaTokenType.comma': 44,
    'AnjutaTokenType.comment': 16400,
    'AnjutaTokenType.content': 16387,
    'AnjutaTokenType.definition': 16396,
    'AnjutaTokenType.eol': 92,
    'AnjutaTokenType.eov': 16390,
    'AnjutaTokenType.error': 16411,
    'AnjutaTokenType.escape': 16403,
    'AnjutaTokenType.file': 16385,
    'AnjutaTokenType.first': 16384,
    'AnjutaTokenType.flags': 4294901760,
    'AnjutaTokenType.function': 16404,
    'AnjutaTokenType.irrelevant': 65536,
    'AnjutaTokenType.item': 16409,
    'AnjutaTokenType.junk': 16399,
    'AnjutaTokenType.keyword': 16392,
    'AnjutaTokenType.last': 16408,
    'AnjutaTokenType.list': 16413,
    'AnjutaTokenType.macro': 16386,
    'AnjutaTokenType.name': 16394,
    'AnjutaTokenType.next': 16407,
    'AnjutaTokenType.none': 0,
    'AnjutaTokenType.number': 16398,
    'AnjutaTokenType.open': 131072,
    'AnjutaTokenType.open-quote': 16401,
    'AnjutaTokenType.operator': 16393,
    'AnjutaTokenType.parsed': 16391,
    'AnjutaTokenType.private-flags': 4278190080,
    'AnjutaTokenType.public-flags': 16711680,
    'AnjutaTokenType.removed': 67108864,
    'AnjutaTokenType.significant': 1048576,
    'AnjutaTokenType.space': 16405,
    'AnjutaTokenType.start': 16406,
    'AnjutaTokenType.statement': 16397,
    'AnjutaTokenType.static': 33554432,
    'AnjutaTokenType.string': 16410,
    'AnjutaTokenType.type': 65535,
    'AnjutaTokenType.user': 16415,
    'AnjutaTokenType.value': 16389,
    'AnjutaTokenType.variable': 16395,
    'AnjutaTokenType.word': 16412,
    'AnjutaVcsStatus.added': 2,
    'AnjutaVcsStatus.all': -1,
    'AnjutaVcsStatus.conflicted': 8,
    'AnjutaVcsStatus.deleted': 4,
    'AnjutaVcsStatus.ignored': 256,
    'AnjutaVcsStatus.locked': 32,
    'AnjutaVcsStatus.missing': 64,
    'AnjutaVcsStatus.modified': 1,
    'AnjutaVcsStatus.unversioned': 128,
    'AnjutaVcsStatus.uptodate': 16,
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
    'AnjutaProjectNode.state': 'AnjutaProjectNodeState',
    'AnjutaProjectNode.type': 'AnjutaProjectNodeType',
    'AnjutaSerializer.mode': 'AnjutaSerializerMode',
    'AnjutaVcsStatusTreeView.status-codes': 'AnjutaVcsStatus',
};

// `<declaration GType>.<property>` -> the GType of that property's own type.
//
// `PROP_ENUMS` one case wider, and a SEPARATE table on purpose. That one is a join with a
// contract — the GType it names has numbers, in this vocabulary or the owner's — and folding a
// plain type table in would mix "resolvable to numbers" with "not" and hand the distinction to
// the consumer. `ARIA_VALUE_ENUMS` beside `ARIA_VALUE_TYPES` is the same split.
//
// A row is ABSENT where no GType can be stated: a fundamental spelling outside the generator's
// closed map, a registered type with no `glib:type-name`, or a property with no `<type>`
// child. Absence therefore reads as "unknown" and never as "scalar".
export const PROP_TYPES = {
    'AnjutaCellRendererCaptionedImage.pixbuf': 'GdkPixbuf',
    'AnjutaCellRendererCaptionedImage.text': 'gchararray',
    'AnjutaCellRendererDiff.diff': 'gchararray',
    'AnjutaCommandBar.max-text-width': 'gint',
    'AnjutaCompletion.case-sensitive': 'gboolean',
    'AnjutaEntry.help-text': 'gchararray',
    'AnjutaFileDropEntry.relative-path': 'gchararray',
    'AnjutaFileList.relative-path': 'gchararray',
    'AnjutaFileList.show-add-button': 'gboolean',
    'AnjutaPkgScanner.package': 'gchararray',
    'AnjutaPkgScanner.version': 'gchararray',
    'AnjutaPlugin.shell': 'AnjutaShell',
    'AnjutaPluginManager.shell': 'GObject',
    'AnjutaPluginManager.status': 'AnjutaStatus',
    'AnjutaProfile.plugin-manager': 'AnjutaPluginManager',
    'AnjutaProfile.profile-name': 'gchararray',
    'AnjutaProfile.sync-file': 'GFile',
    'AnjutaProfileManager.plugin-manager': 'AnjutaPluginManager',
    'AnjutaProjectNode.file': 'GFile',
    'AnjutaProjectNode.name': 'gchararray',
    'AnjutaProjectNode.state': 'AnjutaProjectNodeState',
    'AnjutaProjectNode.type': 'AnjutaProjectNodeType',
    'AnjutaSerializer.filepath': 'gchararray',
    'AnjutaSerializer.mode': 'AnjutaSerializerMode',
    'AnjutaTabber.notebook': 'GObject',
    'AnjutaTreeComboBox.model': 'GtkTreeModel',
    'AnjutaVcsStatusTreeView.conflicted-selectable': 'gboolean',
    'AnjutaVcsStatusTreeView.show-status': 'gboolean',
    'AnjutaVcsStatusTreeView.status-codes': 'AnjutaVcsStatus',
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
    AnjutaDock: {
        'command-bar': 'set_command_bar',
    },
    AnjutaStatus: {
        'title-window': 'set_title_window',
        'widget': 'add_widget',
    },
    AnjutaTabber: {
        'tab': 'add_tab',
    },
};

export const SINCE = {};
