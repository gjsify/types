// The widget vocabulary of Libxfce4windowing-0.0 as runtime data.
//
// GENERATED — do not edit. Provenance: Libxfce4windowing-0.0 — library 4.20.7
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'Libxfce4windowing',
    version: '0.0',
    libraryVersion: '4.20.7',
    childHolders: 0,
    droppedBases: [],
    inlinedBases: [],
    unsettableProps: [],
    unresolvedProps: [],
    identifierPrefixes: ['Xfw'],
    requiredVocabularies: ['@girs/gobject-2.0/vocabulary'],
};

export const OWN_PROPS = {
    XfwSeat: ['name'],
};

export const OWN_SIGNALS = {};

// Every GType this namespace can INSTANTIATE -> the declarations its members come from.
//
// The key set is what a UI description file can name: a registered, non-abstract class.
// Not "every widget" — GtkBuilder resolves a name through `g_type_from_name`, which knows
// nothing about widgets, and a `.ui` file is full of `GtkSizeGroup`, `GtkTextTag`,
// `GtkEventController*` and `GtkCellRenderer*`. Use `Widgets` and `CHILD_HOLDERS`
// below for the narrower questions; they did not move.
export const DECLS = {
    XfwSeat: ['XfwSeat', 'GObject'],
};

// The GTypes above that ARE widgets are the `Widgets` map in the sibling `.d.ts`; these
// are the ones that merely HOLD one, through `set_child`/`get_child`, descending from
// `GObject.Object`. A renderer places them like a container; a check asking "is this a
// widget" must not count them. Derived from the accessor pair, never from a list — the
// count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    XfwDirection: ['up', 'down', 'left', 'right'],
    XfwMonitorSubpixel: ['unknown', 'none', 'hrgb', 'hbgr', 'vrgb', 'vbgr'],
    XfwMonitorTransform: ['normal', '90', '180', '270', 'flipped', 'flipped-90', 'flipped-180', 'flipped-270'],
    XfwWindowType: ['normal', 'desktop', 'dock', 'dialog', 'toolbar', 'menu', 'utility', 'splashscreen'],
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
    'XfwDirection.down': 1,
    'XfwDirection.left': 2,
    'XfwDirection.right': 3,
    'XfwDirection.up': 0,
    'XfwMonitorSubpixel.hbgr': 3,
    'XfwMonitorSubpixel.hrgb': 2,
    'XfwMonitorSubpixel.none': 1,
    'XfwMonitorSubpixel.unknown': 0,
    'XfwMonitorSubpixel.vbgr': 5,
    'XfwMonitorSubpixel.vrgb': 4,
    'XfwMonitorTransform.180': 2,
    'XfwMonitorTransform.270': 3,
    'XfwMonitorTransform.90': 1,
    'XfwMonitorTransform.flipped': 4,
    'XfwMonitorTransform.flipped-180': 6,
    'XfwMonitorTransform.flipped-270': 7,
    'XfwMonitorTransform.flipped-90': 5,
    'XfwMonitorTransform.normal': 0,
    'XfwWindowType.desktop': 1,
    'XfwWindowType.dialog': 3,
    'XfwWindowType.dock': 2,
    'XfwWindowType.menu': 5,
    'XfwWindowType.normal': 0,
    'XfwWindowType.splashscreen': 7,
    'XfwWindowType.toolbar': 4,
    'XfwWindowType.utility': 6,
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
    'XfwWindowCapabilities.can-change-workspace': 16384,
    'XfwWindowCapabilities.can-fullscreen': 16,
    'XfwWindowCapabilities.can-maximize': 4,
    'XfwWindowCapabilities.can-minimize': 1,
    'XfwWindowCapabilities.can-move': 256,
    'XfwWindowCapabilities.can-place-above': 1024,
    'XfwWindowCapabilities.can-place-below': 4096,
    'XfwWindowCapabilities.can-resize': 512,
    'XfwWindowCapabilities.can-shade': 64,
    'XfwWindowCapabilities.can-unfullscreen': 32,
    'XfwWindowCapabilities.can-unmaximize': 8,
    'XfwWindowCapabilities.can-unminimize': 2,
    'XfwWindowCapabilities.can-unplace-above': 2048,
    'XfwWindowCapabilities.can-unplace-below': 8192,
    'XfwWindowCapabilities.can-unshade': 128,
    'XfwWindowCapabilities.none': 0,
    'XfwWindowState.above': 256,
    'XfwWindowState.active': 1,
    'XfwWindowState.below': 512,
    'XfwWindowState.fullscreen': 8,
    'XfwWindowState.maximized': 4,
    'XfwWindowState.minimized': 2,
    'XfwWindowState.none': 0,
    'XfwWindowState.pinned': 64,
    'XfwWindowState.shaded': 128,
    'XfwWindowState.skip-pager': 16,
    'XfwWindowState.skip-tasklist': 32,
    'XfwWindowState.urgent': 1024,
    'XfwWorkspaceCapabilities.activate': 1,
    'XfwWorkspaceCapabilities.none': 0,
    'XfwWorkspaceCapabilities.remove': 4,
    'XfwWorkspaceGroupCapabilities.create-workspace': 1,
    'XfwWorkspaceGroupCapabilities.move-viewport': 2,
    'XfwWorkspaceGroupCapabilities.none': 0,
    'XfwWorkspaceGroupCapabilities.set-layout': 4,
    'XfwWorkspaceState.active': 1,
    'XfwWorkspaceState.hidden': 4,
    'XfwWorkspaceState.none': 0,
    'XfwWorkspaceState.urgent': 2,
    'XfwWorkspaceState.virtual': 8,
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

export const SINCE = {};
