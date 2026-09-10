// The widget vocabulary of Retro-1 as runtime data.
//
// GENERATED — do not edit. Provenance: Retro-1 — dropped empty base(s): GObject.InitiallyUnowned GObject.Object Atk.ImplementorIface
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'Retro',
    version: '1',
    libraryVersion: null,
    childHolders: 0,
    droppedBases: ['GObject.InitiallyUnowned', 'GObject.Object', 'Atk.ImplementorIface'],
    inlinedBases: [],
    unsettableProps: [],
};

export const OWN_PROPS = {
    RetroCoreView: ['can-grab-pointer', 'snap-pointer-to-borders'],
};

export const OWN_SIGNALS = {
    RetroCoreView: ['controller-state-changed'],
};

export const DECLS = {
    RetroCoreView: ['RetroCoreView', 'GtkEventBox', 'GtkBin', 'GtkContainer', 'GtkWidget', 'GtkBuildable'],
};

// The GTypes above that are NOT widgets: they hold one through `set_child`/`get_child`
// and descend from `GObject.Object`. A renderer places them like a container; a check
// asking "is this a widget" must not count them. Derived from the accessor pair, never
// from a list — the count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    RetroAnalogId: ['x', 'y'],
    RetroAnalogIndex: ['left', 'right'],
    RetroControllerType: ['none', 'joypad', 'mouse', 'keyboard', 'lightgun', 'analog', 'pointer', 'type-mask'],
    RetroJoypadId: ['b', 'y', 'select', 'start', 'up', 'down', 'left', 'right', 'a', 'x', 'l', 'r', 'l2', 'r2', 'l3', 'r3'],
    RetroLightgunId: ['x', 'y', 'trigger', 'cursor', 'turbo', 'pause', 'start'],
    RetroMouseId: ['x', 'y', 'left', 'right', 'wheelup', 'wheeldown', 'middle', 'horiz-wheelup', 'horiz-wheeldown', 'button-4', 'button-5'],
    RetroPointerId: ['x', 'y', 'pressed'],
    RetroRumbleEffect: ['strong', 'weak'],
    RetroVideoFilter: ['smooth', 'sharp', 'crt'],
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
    'RetroAnalogId.x': 0,
    'RetroAnalogId.y': 1,
    'RetroAnalogIndex.left': 0,
    'RetroAnalogIndex.right': 1,
    'RetroControllerType.analog': 5,
    'RetroControllerType.joypad': 1,
    'RetroControllerType.keyboard': 3,
    'RetroControllerType.lightgun': 4,
    'RetroControllerType.mouse': 2,
    'RetroControllerType.none': 0,
    'RetroControllerType.pointer': 6,
    'RetroControllerType.type-mask': 255,
    'RetroJoypadId.a': 8,
    'RetroJoypadId.b': 0,
    'RetroJoypadId.down': 5,
    'RetroJoypadId.l': 10,
    'RetroJoypadId.l2': 12,
    'RetroJoypadId.l3': 14,
    'RetroJoypadId.left': 6,
    'RetroJoypadId.r': 11,
    'RetroJoypadId.r2': 13,
    'RetroJoypadId.r3': 15,
    'RetroJoypadId.right': 7,
    'RetroJoypadId.select': 2,
    'RetroJoypadId.start': 3,
    'RetroJoypadId.up': 4,
    'RetroJoypadId.x': 9,
    'RetroJoypadId.y': 1,
    'RetroLightgunId.cursor': 3,
    'RetroLightgunId.pause': 5,
    'RetroLightgunId.start': 6,
    'RetroLightgunId.trigger': 2,
    'RetroLightgunId.turbo': 4,
    'RetroLightgunId.x': 0,
    'RetroLightgunId.y': 1,
    'RetroMouseId.button-4': 9,
    'RetroMouseId.button-5': 10,
    'RetroMouseId.horiz-wheeldown': 8,
    'RetroMouseId.horiz-wheelup': 7,
    'RetroMouseId.left': 2,
    'RetroMouseId.middle': 6,
    'RetroMouseId.right': 3,
    'RetroMouseId.wheeldown': 5,
    'RetroMouseId.wheelup': 4,
    'RetroMouseId.x': 0,
    'RetroMouseId.y': 1,
    'RetroPointerId.pressed': 2,
    'RetroPointerId.x': 0,
    'RetroPointerId.y': 1,
    'RetroRumbleEffect.strong': 0,
    'RetroRumbleEffect.weak': 1,
    'RetroVideoFilter.crt': 2,
    'RetroVideoFilter.sharp': 1,
    'RetroVideoFilter.smooth': 0,
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

export const SLOT_CANDIDATES = {};

export const SINCE = {};
