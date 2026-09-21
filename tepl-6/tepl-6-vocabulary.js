// The widget vocabulary of Tepl-6 as runtime data.
//
// GENERATED — do not edit. Provenance: Tepl-6 — dropped empty base(s): Atk.ImplementorIface
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'Tepl',
    version: '6',
    libraryVersion: null,
    childHolders: 0,
    droppedBases: ['Atk.ImplementorIface'],
    inlinedBases: [],
    unsettableProps: [],
    unresolvedProps: [],
    identifierPrefixes: ['Tepl'],
    requiredVocabularies: ['@girs/gobject-2.0/vocabulary', '@girs/gtk-3.0/vocabulary', '@girs/gtksource-300/vocabulary'],
};

export const OWN_PROPS = {
    TeplApplication: ['application'],
    TeplApplicationWindow: ['application-window', 'handle-title'],
    TeplCodeCommentView: ['source-view'],
    TeplFile: ['location'],
    TeplFileLoader: ['buffer', 'file', 'location'],
    TeplFileSaver: ['buffer', 'file', 'flags', 'location', 'newline-type'],
    TeplFoldRegion: ['buffer', 'folded'],
    TeplInfoBar: ['handle-close-response', 'icon-from-message-type', 'icon-name'],
    TeplOverwriteIndicator: ['overwrite'],
    TeplPanelItem: ['icon-name', 'name', 'position', 'title', 'widget'],
    TeplPanelSimple: ['active-item', 'active-item-name'],
    TeplProgressInfoBar: ['has-cancel-button'],
    TeplStyleSchemeChooserSimple: ['style-scheme-id'],
    TeplTab: ['view'],
    TeplTabGroup: ['active-tab'],
    TeplTabLabel: ['tab'],
};

export const OWN_SIGNALS = {
    TeplBuffer: ['tepl-cursor-moved'],
    TeplLanguageChooser: ['language-activated'],
    TeplPanelSimple: ['add-item', 'changed', 'remove-item'],
    TeplPrefsDialog: ['reset-all'],
    TeplSettings: ['font-changed'],
    TeplTab: ['close-request'],
};

// Every GType this namespace can INSTANTIATE -> the declarations its members come from.
//
// The key set is what a UI description file can name: a registered, non-abstract class.
// Not "every widget" — GtkBuilder resolves a name through `g_type_from_name`, which knows
// nothing about widgets, and a `.ui` file is full of `GtkSizeGroup`, `GtkTextTag`,
// `GtkEventController*` and `GtkCellRenderer*`. Use `Widgets` and `CHILD_HOLDERS`
// below for the narrower questions; they did not move.
export const DECLS = {
    TeplAbstractFactory: ['TeplAbstractFactory', 'GObject'],
    TeplApplication: ['TeplApplication', 'GObject'],
    TeplApplicationWindow: ['TeplApplicationWindow', 'GObject', 'TeplTabGroup'],
    TeplBuffer: ['TeplBuffer', 'GtkSourceBuffer', 'GtkTextBuffer', 'GObject'],
    TeplCodeCommentView: ['TeplCodeCommentView', 'GObject'],
    TeplFile: ['TeplFile', 'GObject'],
    TeplFileLoader: ['TeplFileLoader', 'GObject'],
    TeplFileSaver: ['TeplFileSaver', 'GObject'],
    TeplFoldRegion: ['TeplFoldRegion', 'GObject'],
    TeplGotoLineBar: ['TeplGotoLineBar', 'GtkGrid', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable', 'GtkOrientable'],
    TeplGutterRendererFolds: ['TeplGutterRendererFolds', 'GtkSourceGutterRenderer', 'GInitiallyUnowned', 'GObject'],
    TeplInfoBar: ['TeplInfoBar', 'GtkInfoBar', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable', 'GtkOrientable'],
    TeplLanguageChooserDialog: ['TeplLanguageChooserDialog', 'GtkDialog', 'GtkWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable', 'TeplLanguageChooser'],
    TeplLanguageChooserWidget: ['TeplLanguageChooserWidget', 'GtkGrid', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable', 'GtkOrientable', 'TeplLanguageChooser'],
    TeplLineColumnIndicator: ['TeplLineColumnIndicator', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable'],
    TeplMetadata: ['TeplMetadata', 'GObject'],
    TeplMetadataManager: ['TeplMetadataManager', 'GObject'],
    TeplNotebook: ['TeplNotebook', 'GtkNotebook', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable', 'TeplTabGroup'],
    TeplOverwriteIndicator: ['TeplOverwriteIndicator', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable'],
    TeplPanel1: ['TeplPanel1', 'GtkGrid', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable', 'GtkOrientable'],
    TeplPanelItem: ['TeplPanelItem', 'GObject'],
    TeplPanelNotebook: ['TeplPanelNotebook', 'GObject'],
    TeplPanelSimple: ['TeplPanelSimple', 'GObject', 'TeplPanel'],
    TeplPanelStack: ['TeplPanelStack', 'GObject'],
    TeplPanelSwitcherMenu: ['TeplPanelSwitcherMenu', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable'],
    TeplPrefsDialog: ['TeplPrefsDialog', 'GtkDialog', 'GtkWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable'],
    TeplProgressInfoBar: ['TeplProgressInfoBar', 'TeplInfoBar', 'GtkInfoBar', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable', 'GtkOrientable'],
    TeplSettings: ['TeplSettings', 'GObject'],
    TeplSpaceDrawerPrefs: ['TeplSpaceDrawerPrefs', 'GtkGrid', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable', 'GtkOrientable'],
    TeplStatusMenuButton: ['TeplStatusMenuButton', 'GtkMenuButton', 'GtkToggleButton', 'GtkButton', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkActionable', 'GtkActivatable', 'GtkBuildable'],
    TeplStatusbar: ['TeplStatusbar', 'GtkStatusbar', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable', 'GtkOrientable'],
    TeplStyleSchemeChooserFull: ['TeplStyleSchemeChooserFull', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable'],
    TeplStyleSchemeChooserSimple: ['TeplStyleSchemeChooserSimple', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable'],
    TeplTab: ['TeplTab', 'GtkGrid', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable', 'GtkOrientable', 'TeplTabGroup'],
    TeplTabLabel: ['TeplTabLabel', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable', 'GtkOrientable'],
    TeplView: ['TeplView', 'GtkSourceView', 'GtkTextView', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable', 'GtkScrollable'],
};

// The GTypes above that ARE widgets are the `Widgets` map in the sibling `.d.ts`; these
// are the ones that merely HOLD one, through `set_child`/`get_child`, descending from
// `GObject.Object`. A renderer places them like a container; a check asking "is this a
// widget" must not count them. Derived from the accessor pair, never from a list — the
// count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    TeplInfoBarLocation: ['alongside-icon', 'below-icon'],
    TeplNewlineType: ['lf', 'cr', 'cr-lf'],
    TeplSelectionType: ['no-selection', 'on-same-line', 'multiple-lines'],
    TeplSettingsThemeVariant: ['system', 'light', 'dark'],
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
    'TeplInfoBarLocation.alongside-icon': 0,
    'TeplInfoBarLocation.below-icon': 1,
    'TeplNewlineType.cr': 1,
    'TeplNewlineType.cr-lf': 2,
    'TeplNewlineType.lf': 0,
    'TeplSelectionType.multiple-lines': 2,
    'TeplSelectionType.no-selection': 0,
    'TeplSelectionType.on-same-line': 1,
    'TeplSettingsThemeVariant.dark': 2,
    'TeplSettingsThemeVariant.light': 1,
    'TeplSettingsThemeVariant.system': 0,
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
    'TeplFileSaverFlags.create-backup': 1,
    'TeplFileSaverFlags.none': 0,
    'TeplGutterRendererFoldsState.continue': 4,
    'TeplGutterRendererFoldsState.end': 8,
    'TeplGutterRendererFoldsState.none': 0,
    'TeplGutterRendererFoldsState.start-folded': 1,
    'TeplGutterRendererFoldsState.start-opened': 2,
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
    'TeplFileSaver.flags': 'TeplFileSaverFlags',
    'TeplFileSaver.newline-type': 'TeplNewlineType',
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
    'TeplApplication.application': 'GtkApplication',
    'TeplApplicationWindow.application-window': 'GtkApplicationWindow',
    'TeplApplicationWindow.handle-title': 'gboolean',
    'TeplCodeCommentView.source-view': 'GtkSourceView',
    'TeplFile.location': 'GFile',
    'TeplFileLoader.buffer': 'TeplBuffer',
    'TeplFileLoader.file': 'TeplFile',
    'TeplFileLoader.location': 'GFile',
    'TeplFileSaver.buffer': 'TeplBuffer',
    'TeplFileSaver.file': 'TeplFile',
    'TeplFileSaver.flags': 'TeplFileSaverFlags',
    'TeplFileSaver.location': 'GFile',
    'TeplFileSaver.newline-type': 'TeplNewlineType',
    'TeplFoldRegion.buffer': 'GtkTextBuffer',
    'TeplFoldRegion.folded': 'gboolean',
    'TeplInfoBar.handle-close-response': 'gboolean',
    'TeplInfoBar.icon-from-message-type': 'gboolean',
    'TeplInfoBar.icon-name': 'gchararray',
    'TeplOverwriteIndicator.overwrite': 'gboolean',
    'TeplPanelItem.icon-name': 'gchararray',
    'TeplPanelItem.name': 'gchararray',
    'TeplPanelItem.position': 'gint',
    'TeplPanelItem.title': 'gchararray',
    'TeplPanelItem.widget': 'GtkWidget',
    'TeplPanelSimple.active-item': 'TeplPanelItem',
    'TeplPanelSimple.active-item-name': 'gchararray',
    'TeplProgressInfoBar.has-cancel-button': 'gboolean',
    'TeplStyleSchemeChooserSimple.style-scheme-id': 'gchararray',
    'TeplTab.view': 'TeplView',
    'TeplTabGroup.active-tab': 'TeplTab',
    'TeplTabLabel.tab': 'TeplTab',
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
    TeplGotoLineBar: {
        'view': 'set_view',
    },
    TeplLineColumnIndicator: {
        'view': 'set_view',
    },
    TeplOverwriteIndicator: {
        'view': 'set_view',
    },
    TeplTab: {
        'info': 'add_info_bar',
    },
};

export const SINCE = {
    'TeplApplication.application': '2.0',
    'TeplApplicationWindow.application-window': '2.0',
    'TeplApplicationWindow.handle-title': '4.0',
    'TeplBuffer::tepl-cursor-moved': '2.0',
    'TeplCodeCommentView.source-view': '6.14',
    'TeplFile.location': '1.0',
    'TeplFileLoader.buffer': '1.0',
    'TeplFileLoader.file': '1.0',
    'TeplFileLoader.location': '1.0',
    'TeplFileSaver.buffer': '1.0',
    'TeplFileSaver.file': '1.0',
    'TeplFileSaver.flags': '1.0',
    'TeplFileSaver.location': '1.0',
    'TeplFileSaver.newline-type': '1.0',
    'TeplFoldRegion.buffer': '1.0',
    'TeplFoldRegion.folded': '1.0',
    'TeplInfoBar.handle-close-response': '6.0',
    'TeplInfoBar.icon-from-message-type': '6.0',
    'TeplInfoBar.icon-name': '6.0',
    'TeplLanguageChooser::language-activated': '6.0',
    'TeplOverwriteIndicator.overwrite': '6.4',
    'TeplPanelItem.icon-name': '6.11',
    'TeplPanelItem.name': '6.11',
    'TeplPanelItem.position': '6.11',
    'TeplPanelItem.title': '6.11',
    'TeplPanelItem.widget': '6.11',
    'TeplPanelSimple.active-item': '6.11',
    'TeplPanelSimple.active-item-name': '6.11',
    'TeplPanelSimple::add-item': '6.11',
    'TeplPanelSimple::changed': '6.11',
    'TeplPanelSimple::remove-item': '6.11',
    'TeplPrefsDialog::reset-all': '6.13',
    'TeplProgressInfoBar.has-cancel-button': '6.0',
    'TeplSettings::font-changed': '6.2',
    'TeplStyleSchemeChooserSimple.style-scheme-id': '6.11',
    'TeplTab.view': '3.0',
    'TeplTab::close-request': '3.0',
    'TeplTabGroup.active-tab': '3.0',
    'TeplTabLabel.tab': '3.0',
};
