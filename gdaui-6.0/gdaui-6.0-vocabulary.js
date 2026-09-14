// The widget vocabulary of Gdaui-6.0 as runtime data.
//
// GENERATED — do not edit. Provenance: Gdaui-6.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface — prop(s) no TypeScript value satisfies: Gdaui.BasicForm.paramlist Gdaui.BasicForm.xml-layout Gdaui.RawGrid.xml-layout
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'Gdaui',
    version: '6.0',
    libraryVersion: null,
    childHolders: 0,
    droppedBases: ['GObject.InitiallyUnowned', 'GObject.Object', 'Atk.ImplementorIface'],
    inlinedBases: [],
    unsettableProps: ['Gdaui.BasicForm.paramlist', 'Gdaui.BasicForm.xml-layout', 'Gdaui.RawGrid.xml-layout'],
};

export const OWN_PROPS = {
    GdauiBasicForm: ['entries-auto-default', 'paramlist', 'xml-layout'],
    GdauiCloud: ['label-column', 'max-scale', 'min-scale', 'model', 'weight-column'],
    GdauiCombo: ['as-list', 'model'],
    GdauiDataFilter: ['data-widget'],
    GdauiDataProxyInfo: ['data-proxy'],
    GdauiEntry: ['prefix', 'suffix'],
    GdauiEntryCombo: ['set-default-if-invalid'],
    GdauiEntryCommonTime: ['editing-canceled', 'type'],
    GdauiEntryNumber: ['editing-canceled', 'options'],
    GdauiEntryString: ['editing-canceled', 'multiline', 'options'],
    GdauiForm: ['model'],
    GdauiFormattedEntry: ['format', 'mask'],
    GdauiGrid: ['model'],
    GdauiLogin: ['dsn'],
    GdauiNumericEntry: ['decimal-sep', 'n-decimals', 'thousands-sep', 'type'],
    GdauiRawForm: ['model'],
    GdauiRawGrid: ['info-cell-visible', 'model', 'xml-layout'],
    GdauiRtEditor: ['in-scrolled-window', 'no-background', 'show-markup'],
    GdauiServerOperation: ['hide-single-header', 'server-operation'],
};

export const OWN_SIGNALS = {
    GdauiBasicForm: ['activated', 'holder-changed', 'layout-changed', 'populate-popup'],
    GdauiCloud: ['activate'],
    GdauiDataEntry: ['contents-activated', 'contents-modified', 'expand-changed', 'status-changed'],
    GdauiDataProxy: ['proxy-changed'],
    GdauiDataSelector: ['selection-changed'],
    GdauiLogin: ['changed'],
    GdauiRawGrid: ['double-clicked', 'populate-popup'],
    GdauiRtEditor: ['changed'],
};

export const DECLS = {
    GdauiBasicForm: ['GdauiBasicForm', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    GdauiCloud: ['GdauiCloud', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GdauiDataSelector', 'GtkBuildable', 'GtkOrientable'],
    GdauiCombo: ['GdauiCombo', 'GtkComboBox', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GdauiDataSelector', 'GtkBuildable', 'GtkCellEditable', 'GtkCellLayout'],
    GdauiDataFilter: ['GdauiDataFilter', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    GdauiDataProxyInfo: ['GdauiDataProxyInfo', 'GtkToolbar', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable', 'GtkToolShell'],
    GdauiEntry: ['GdauiEntry', 'GtkEntry', 'GtkWidget', 'GtkBuildable', 'GtkCellEditable', 'GtkEditable'],
    GdauiEntryBin: ['GdauiEntryBin', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GdauiDataEntry', 'GtkBuildable', 'GtkOrientable'],
    GdauiEntryBoolean: ['GdauiEntryBoolean', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GdauiDataEntry', 'GtkBuildable', 'GtkOrientable'],
    GdauiEntryCombo: ['GdauiEntryCombo', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GdauiDataEntry', 'GtkBuildable', 'GtkOrientable'],
    GdauiEntryCommonTime: ['GdauiEntryCommonTime', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GdauiDataEntry', 'GtkBuildable', 'GtkCellEditable', 'GtkOrientable'],
    GdauiEntryDate: ['GdauiEntryDate', 'GdauiEntryCommonTime', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GdauiDataEntry', 'GtkBuildable', 'GtkCellEditable', 'GtkOrientable'],
    GdauiEntryNone: ['GdauiEntryNone', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GdauiDataEntry', 'GtkBuildable', 'GtkOrientable'],
    GdauiEntryNumber: ['GdauiEntryNumber', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GdauiDataEntry', 'GtkBuildable', 'GtkCellEditable', 'GtkOrientable'],
    GdauiEntryString: ['GdauiEntryString', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GdauiDataEntry', 'GtkBuildable', 'GtkCellEditable', 'GtkOrientable'],
    GdauiEntryTime: ['GdauiEntryTime', 'GdauiEntryCommonTime', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GdauiDataEntry', 'GtkBuildable', 'GtkCellEditable', 'GtkOrientable'],
    GdauiEntryTimestamp: ['GdauiEntryTimestamp', 'GdauiEntryCommonTime', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GdauiDataEntry', 'GtkBuildable', 'GtkCellEditable', 'GtkOrientable'],
    GdauiForm: ['GdauiForm', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GdauiDataProxy', 'GdauiDataSelector', 'GtkBuildable', 'GtkOrientable'],
    GdauiFormattedEntry: ['GdauiFormattedEntry', 'GdauiEntry', 'GtkEntry', 'GtkWidget', 'GtkBuildable', 'GtkCellEditable', 'GtkEditable'],
    GdauiGrid: ['GdauiGrid', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GdauiDataProxy', 'GdauiDataSelector', 'GtkBuildable', 'GtkOrientable'],
    GdauiLogin: ['GdauiLogin', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    GdauiNumericEntry: ['GdauiNumericEntry', 'GdauiEntry', 'GtkEntry', 'GtkWidget', 'GtkBuildable', 'GtkCellEditable', 'GtkEditable'],
    GdauiProviderSelector: ['GdauiProviderSelector', 'GdauiCombo', 'GtkComboBox', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GdauiDataSelector', 'GtkBuildable', 'GtkCellEditable', 'GtkCellLayout'],
    GdauiRawForm: ['GdauiRawForm', 'GdauiBasicForm', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GdauiDataProxy', 'GdauiDataSelector', 'GtkBuildable', 'GtkOrientable'],
    GdauiRawGrid: ['GdauiRawGrid', 'GtkTreeView', 'GtkContainer', 'GtkWidget', 'GdauiDataProxy', 'GdauiDataSelector', 'GtkBuildable', 'GtkScrollable'],
    GdauiRtEditor: ['GdauiRtEditor', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    GdauiServerOperation: ['GdauiServerOperation', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
};

// The GTypes above that are NOT widgets: they hold one through `set_child`/`get_child`
// and descend from `GObject.Object`. A renderer places them like a container; a check
// asking "is this a widget" must not count them. Derived from the accessor pair, never
// from a list — the count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {};

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
export const ENUM_VALUES = {};

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
export const FLAG_VALUES = {};

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

export const SLOT_CANDIDATES = {};

export const SINCE = {
    'GdauiBasicForm::populate-popup': '4.2.4',
};
