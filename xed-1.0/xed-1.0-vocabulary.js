// The widget vocabulary of Xed-1.0 as runtime data.
//
// GENERATED — do not edit. Provenance: Xed-1.0 — dropped empty base(s): Atk.ImplementorIface
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'Xed',
    version: '1.0',
    libraryVersion: null,
    childHolders: 0,
    droppedBases: ['Atk.ImplementorIface'],
    inlinedBases: [],
    unsettableProps: [],
    unresolvedProps: [],
    identifierPrefixes: ['Xed'],
    requiredVocabularies: ['@girs/gio-2.0/vocabulary', '@girs/gobject-2.0/vocabulary', '@girs/gtk-3.0/vocabulary', '@girs/gtksource-4/vocabulary'],
};

export const OWN_PROPS = {
    XedDocument: ['content-type', 'shortname', 'use-gvfs-metadata'],
    XedEncodingsComboBox: ['save-mode'],
    XedMessage: ['type'],
    XedPanel: ['orientation'],
    XedProgressInfoBar: ['has-cancel-button'],
    XedTab: ['autosave', 'autosave-interval'],
};

export const OWN_SIGNALS = {
    XedDocument: ['cursor-moved', 'load', 'loaded', 'save', 'saved'],
    XedMessageBus: ['dispatch', 'registered', 'unregistered'],
    XedNotebook: ['tab-added', 'tab-close-request', 'tab-detached', 'tab-removed', 'tabs-reordered'],
    XedPanel: ['close', 'focus-document', 'item-added', 'item-removed'],
    XedView: ['drop-uris'],
    XedWindow: ['active-tab-changed', 'active-tab-state-changed', 'tab-added', 'tab-removed', 'tabs-reordered'],
};

// Every GType this namespace can INSTANTIATE -> the declarations its members come from.
//
// The key set is what a UI description file can name: a registered, non-abstract class.
// Not "every widget" — GtkBuilder resolves a name through `g_type_from_name`, which knows
// nothing about widgets, and a `.ui` file is full of `GtkSizeGroup`, `GtkTextTag`,
// `GtkEventController*` and `GtkCellRenderer*`. Use `Widgets` and `CHILD_HOLDERS`
// below for the narrower questions; they did not move.
export const DECLS = {
    XedApp: ['XedApp', 'GtkApplication', 'GApplication', 'GObject', 'GActionGroup', 'GActionMap'],
    XedDocument: ['XedDocument', 'GtkSourceBuffer', 'GtkTextBuffer', 'GObject'],
    XedEncodingsComboBox: ['XedEncodingsComboBox', 'GtkComboBox', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable', 'GtkCellEditable', 'GtkCellLayout'],
    XedFileChooserDialog: ['XedFileChooserDialog', 'GtkFileChooserDialog', 'GtkDialog', 'GtkWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable', 'GtkFileChooser'],
    XedMessage: ['XedMessage', 'GObject'],
    XedMessageBus: ['XedMessageBus', 'GObject'],
    XedNotebook: ['XedNotebook', 'GtkNotebook', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable'],
    XedPanel: ['XedPanel', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable'],
    XedProgressInfoBar: ['XedProgressInfoBar', 'GtkInfoBar', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable', 'GtkOrientable'],
    XedSearchbar: ['XedSearchbar', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable', 'GtkOrientable'],
    XedStatusbar: ['XedStatusbar', 'GtkStatusbar', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable', 'GtkOrientable'],
    XedTab: ['XedTab', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable', 'GtkOrientable'],
    XedView: ['XedView', 'GtkSourceView', 'GtkTextView', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GtkBuildable', 'GtkScrollable'],
    XedWindow: ['XedWindow', 'GtkApplicationWindow', 'GtkWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GInitiallyUnowned', 'GObject', 'GActionGroup', 'GActionMap', 'GtkBuildable'],
};

// The GTypes above that ARE widgets are the `Widgets` map in the sibling `.d.ts`; these
// are the ones that merely HOLD one, through `set_child`/`get_child`, descending from
// `GObject.Object`. A renderer places them like a container; a check asking "is this a
// widget" must not count them. Derived from the accessor pair, never from a list — the
// count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    GtkOrientation: ['horizontal', 'vertical'],
    XedSearchMode: ['search', 'replace'],
    XedTabState: ['state-normal', 'state-loading', 'state-reverting', 'state-saving', 'state-printing', 'state-print-previewing', 'state-showing-print-preview', 'state-generic-not-editable', 'state-loading-error', 'state-reverting-error', 'state-saving-error', 'state-generic-error', 'state-closing', 'state-externally-modified-notification', 'num-of-states'],
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
    'GtkOrientation.horizontal': 0,
    'GtkOrientation.vertical': 1,
    'XedSearchMode.replace': 1,
    'XedSearchMode.search': 0,
    'XedTabState.num-of-states': 14,
    'XedTabState.state-closing': 12,
    'XedTabState.state-externally-modified-notification': 13,
    'XedTabState.state-generic-error': 11,
    'XedTabState.state-generic-not-editable': 7,
    'XedTabState.state-loading': 1,
    'XedTabState.state-loading-error': 8,
    'XedTabState.state-normal': 0,
    'XedTabState.state-print-previewing': 5,
    'XedTabState.state-printing': 4,
    'XedTabState.state-reverting': 2,
    'XedTabState.state-reverting-error': 9,
    'XedTabState.state-saving': 3,
    'XedTabState.state-saving-error': 10,
    'XedTabState.state-showing-print-preview': 6,
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
    'XedDebugSection.debug-app': 256,
    'XedDebugSection.debug-commands': 128,
    'XedDebugSection.debug-document': 64,
    'XedDebugSection.debug-loader': 8192,
    'XedDebugSection.debug-metadata': 2048,
    'XedDebugSection.debug-plugins': 16,
    'XedDebugSection.debug-prefs': 8,
    'XedDebugSection.debug-print': 4,
    'XedDebugSection.debug-saver': 16384,
    'XedDebugSection.debug-search': 2,
    'XedDebugSection.debug-session': 512,
    'XedDebugSection.debug-tab': 32,
    'XedDebugSection.debug-utils': 1024,
    'XedDebugSection.debug-view': 1,
    'XedDebugSection.debug-window': 4096,
    'XedDebugSection.no-debug': 0,
    'XedWindowState.error': 16,
    'XedWindowState.loading': 8,
    'XedWindowState.normal': 0,
    'XedWindowState.printing': 4,
    'XedWindowState.saving': 2,
    'XedWindowState.saving-session': 32,
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
    'XedPanel.orientation': 'GtkOrientation',
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
    XedTab: {
        'info-bar': 'set_info_bar',
    },
    XedWindow: {
        'active-tab': 'set_active_tab',
    },
};

export const SINCE = {};
