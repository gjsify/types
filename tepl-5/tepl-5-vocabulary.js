// The widget vocabulary of Tepl-5 as runtime data.
//
// GENERATED — do not edit. Provenance: Tepl-5 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'Tepl',
    version: '5',
    libraryVersion: null,
    childHolders: 0,
    droppedBases: ['GObject.InitiallyUnowned', 'GObject.Object', 'Atk.ImplementorIface'],
    inlinedBases: [],
    unsettableProps: [],
};

export const OWN_PROPS = {
    TeplStyleSchemeChooserWidget: ['tepl-style-scheme-id'],
    TeplTab: ['view'],
    TeplTabGroup: ['active-tab'],
    TeplTabLabel: ['tab'],
};

export const OWN_SIGNALS = {
    TeplLanguageChooser: ['language-activated'],
    TeplTab: ['close-request'],
};

export const DECLS = {
    TeplGotoLineBar: ['TeplGotoLineBar', 'GtkGrid', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    TeplInfoBar: ['TeplInfoBar', 'GtkInfoBar', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    TeplLanguageChooserDialog: ['TeplLanguageChooserDialog', 'GtkDialog', 'GtkWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'TeplLanguageChooser'],
    TeplLanguageChooserWidget: ['TeplLanguageChooserWidget', 'GtkGrid', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable', 'TeplLanguageChooser'],
    TeplNotebook: ['TeplNotebook', 'GtkNotebook', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'TeplTabGroup'],
    TeplPanel: ['TeplPanel', 'GtkGrid', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    TeplSpaceDrawerPrefs: ['TeplSpaceDrawerPrefs', 'GtkGrid', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    TeplStatusbar: ['TeplStatusbar', 'GtkStatusbar', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    TeplStyleSchemeChooserWidget: ['TeplStyleSchemeChooserWidget', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkSourceStyleSchemeChooser'],
    TeplTab: ['TeplTab', 'GtkGrid', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable', 'TeplTabGroup'],
    TeplTabLabel: ['TeplTabLabel', 'GtkGrid', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    TeplView: ['TeplView', 'GtkSourceView', 'GtkTextView', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkScrollable'],
};

// The GTypes above that are NOT widgets: they hold one through `set_child`/`get_child`
// and descend from `GObject.Object`. A renderer places them like a container; a check
// asking "is this a widget" must not count them. Derived from the accessor pair, never
// from a list — the count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    TeplNewlineType: ['lf', 'cr', 'cr-lf'],
    TeplSelectionType: ['no-selection', 'on-same-line', 'multiple-lines'],
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
    'TeplNewlineType.cr': 1,
    'TeplNewlineType.cr-lf': 2,
    'TeplNewlineType.lf': 0,
    'TeplSelectionType.multiple-lines': 2,
    'TeplSelectionType.no-selection': 0,
    'TeplSelectionType.on-same-line': 1,
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
// that OWNS an enum publishes it, so 57 of the 438 entries a full run emits want the owner's
// vocabulary loaded too. Owners that emit none (Gdk, Pango) are inlined into the tables above.
export const PROP_ENUMS = {};

export const SLOT_CANDIDATES = {
    TeplGotoLineBar: {
        'view': 'set_view',
    },
    TeplInfoBar: {
        'content-widget': 'add_content_widget',
    },
    TeplTab: {
        'info': 'add_info_bar',
    },
};

export const SINCE = {
    'TeplLanguageChooser::language-activated': '5.2',
    'TeplStyleSchemeChooserWidget.tepl-style-scheme-id': '5.0',
    'TeplTab.view': '3.0',
    'TeplTab::close-request': '3.0',
    'TeplTabGroup.active-tab': '3.0',
    'TeplTabLabel.tab': '3.0',
};
