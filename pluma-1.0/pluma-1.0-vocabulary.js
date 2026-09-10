// The widget vocabulary of Pluma-1.0 as runtime data.
//
// GENERATED — do not edit. Provenance: Pluma-1.0 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface Gio.ActionGroup Gio.ActionMap
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'Pluma',
    version: '1.0',
    libraryVersion: null,
    childHolders: 0,
    droppedBases: ['GObject.InitiallyUnowned', 'GObject.Object', 'Atk.ImplementorIface', 'Gio.ActionGroup', 'Gio.ActionMap'],
    inlinedBases: [],
    unsettableProps: [],
};

export const OWN_PROPS = {
    PlumaEncodingsComboBox: ['save-mode'],
    PlumaPanel: ['panel-orientation'],
    PlumaProgressMessageArea: ['has-cancel-button'],
    PlumaStatusComboBox: ['label'],
    PlumaTab: ['autosave', 'autosave-interval'],
};

export const OWN_SIGNALS = {
    PlumaNotebook: ['tab-added', 'tab-close-request', 'tab-detached', 'tab-removed', 'tabs-reordered'],
    PlumaPanel: ['close', 'focus-document', 'item-added', 'item-removed'],
    PlumaStatusComboBox: ['changed'],
    PlumaView: ['drop-uris', 'reset-searched-text', 'start-interactive-goto-line', 'start-interactive-search'],
    PlumaWindow: ['active-tab-changed', 'active-tab-state-changed', 'tab-added', 'tab-removed', 'tabs-reordered'],
};

export const DECLS = {
    PlumaEncodingsComboBox: ['PlumaEncodingsComboBox', 'GtkComboBox', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkCellEditable', 'GtkCellLayout'],
    PlumaNotebook: ['PlumaNotebook', 'GtkNotebook', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    PlumaPanel: ['PlumaPanel', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    PlumaProgressMessageArea: ['PlumaProgressMessageArea', 'GtkInfoBar', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    PlumaStatusComboBox: ['PlumaStatusComboBox', 'GtkEventBox', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
    PlumaStatusbar: ['PlumaStatusbar', 'GtkStatusbar', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    PlumaTab: ['PlumaTab', 'GtkBox', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkOrientable'],
    PlumaView: ['PlumaView', 'GtkSourceView', 'GtkTextView', 'GtkContainer', 'GtkWidget', 'GtkBuildable', 'GtkScrollable'],
    PlumaWindow: ['PlumaWindow', 'GtkApplicationWindow', 'GtkWindow', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
};

// The GTypes above that are NOT widgets: they hold one through `set_child`/`get_child`
// and descend from `GObject.Object`. A renderer places them like a container; a check
// asking "is this a widget" must not count them. Derived from the accessor pair, never
// from a list — the count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    PlumaDocumentNewlineType: ['lf', 'cr', 'cr-lf'],
    PlumaTabState: ['state-normal', 'state-loading', 'state-reverting', 'state-saving', 'state-printing', 'state-print-previewing', 'state-showing-print-preview', 'state-generic-not-editable', 'state-loading-error', 'state-reverting-error', 'state-saving-error', 'state-generic-error', 'state-closing', 'state-externally-modified-notification', 'num-of-states'],
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
    'PlumaDocumentNewlineType.cr': 1,
    'PlumaDocumentNewlineType.cr-lf': 2,
    'PlumaDocumentNewlineType.lf': 0,
    'PlumaTabState.num-of-states': 14,
    'PlumaTabState.state-closing': 12,
    'PlumaTabState.state-externally-modified-notification': 13,
    'PlumaTabState.state-generic-error': 11,
    'PlumaTabState.state-generic-not-editable': 7,
    'PlumaTabState.state-loading': 1,
    'PlumaTabState.state-loading-error': 8,
    'PlumaTabState.state-normal': 0,
    'PlumaTabState.state-print-previewing': 5,
    'PlumaTabState.state-printing': 4,
    'PlumaTabState.state-reverting': 2,
    'PlumaTabState.state-reverting-error': 9,
    'PlumaTabState.state-saving': 3,
    'PlumaTabState.state-saving-error': 10,
    'PlumaTabState.state-showing-print-preview': 6,
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
    'PlumaDebugSection.debug-app': 256,
    'PlumaDebugSection.debug-commands': 128,
    'PlumaDebugSection.debug-document': 64,
    'PlumaDebugSection.debug-loader': 8192,
    'PlumaDebugSection.debug-metadata': 2048,
    'PlumaDebugSection.debug-plugins': 16,
    'PlumaDebugSection.debug-prefs': 8,
    'PlumaDebugSection.debug-print': 4,
    'PlumaDebugSection.debug-saver': 16384,
    'PlumaDebugSection.debug-search': 2,
    'PlumaDebugSection.debug-session': 512,
    'PlumaDebugSection.debug-tab': 32,
    'PlumaDebugSection.debug-utils': 1024,
    'PlumaDebugSection.debug-view': 1,
    'PlumaDebugSection.debug-window': 4096,
    'PlumaDebugSection.no-debug': 0,
    'PlumaDocumentSaveFlags.ignore-backup': 2,
    'PlumaDocumentSaveFlags.ignore-mtime': 1,
    'PlumaDocumentSaveFlags.preserve-backup': 4,
    'PlumaLockdownMask.all': 15,
    'PlumaLockdownMask.command-line': 1,
    'PlumaLockdownMask.print-setup': 4,
    'PlumaLockdownMask.printing': 2,
    'PlumaLockdownMask.save-to-disk': 8,
    'PlumaSearchFlags.case-sensitive': 4,
    'PlumaSearchFlags.dont-set-flags': 1,
    'PlumaSearchFlags.entire-word': 2,
    'PlumaSearchFlags.match-regex': 16,
    'PlumaSearchFlags.parse-escapes': 8,
    'PlumaWindowState.error': 16,
    'PlumaWindowState.loading': 8,
    'PlumaWindowState.normal': 0,
    'PlumaWindowState.printing': 4,
    'PlumaWindowState.saving': 2,
    'PlumaWindowState.saving-session': 32,
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
    'PlumaPanel.panel-orientation': 'GtkOrientation',
};

export const SLOT_CANDIDATES = {
    PlumaStatusComboBox: {
        'item': 'set_item',
    },
    PlumaTab: {
        'info-bar': 'set_info_bar',
    },
    PlumaWindow: {
        'active-tab': 'set_active_tab',
    },
};

export const SINCE = {};
