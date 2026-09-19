// The widget vocabulary of Gly-2 as runtime data.
//
// GENERATED — do not edit. Provenance: Gly-2
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'Gly',
    version: '2',
    libraryVersion: null,
    childHolders: 0,
    droppedBases: [],
    inlinedBases: [],
    unsettableProps: [],
    unresolvedProps: [],
    identifierPrefixes: ['Gly'],
    requiredVocabularies: ['@girs/gobject-2.0/vocabulary'],
};

export const OWN_PROPS = {
    GlyCreator: ['mime-type', 'sandbox-selector'],
    GlyFrameRequest: ['loop-animation'],
    GlyLoader: ['accepted-memory-formats', 'apply-transformations', 'bytes', 'cancellable', 'color-convert-icc-srgb', 'file', 'sandbox-selector', 'stream'],
    GlyNewFrame: ['color-icc-profile', 'height', 'memory-format', 'stride', 'texture', 'width'],
    GlyPixelDensity: ['x-unit', 'x-value', 'y-unit', 'y-value'],
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
    GlyCreator: ['GlyCreator', 'GObject'],
    GlyEncodedImage: ['GlyEncodedImage', 'GObject'],
    GlyFrame: ['GlyFrame', 'GObject'],
    GlyFrameDetails: ['GlyFrameDetails', 'GObject'],
    GlyFrameRequest: ['GlyFrameRequest', 'GObject'],
    GlyImage: ['GlyImage', 'GObject'],
    GlyLoader: ['GlyLoader', 'GObject'],
    GlyNewFrame: ['GlyNewFrame', 'GObject'],
    GlyPixelDensity: ['GlyPixelDensity', 'GObject'],
};

// The GTypes above that ARE widgets are the `Widgets` map in the sibling `.d.ts`; these
// are the ones that merely HOLD one, through `set_child`/`get_child`, descending from
// `GObject.Object`. A renderer places them like a container; a check asking "is this a
// widget" must not count them. Derived from the accessor pair, never from a list — the
// count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    GlyColorMode: ['srgb', 'cicp', 'icc-profile'],
    GlyMemoryFormat: ['b8g8r8a8-premultiplied', 'a8r8g8b8-premultiplied', 'r8g8b8a8-premultiplied', 'b8g8r8a8', 'a8r8g8b8', 'r8g8b8a8', 'a8b8g8r8', 'r8g8b8', 'b8g8r8', 'r16g16b16', 'r16g16b16a16-premultiplied', 'r16g16b16a16', 'r16g16b16-float', 'r16g16b16a16-float', 'r32g32b32-float', 'r32g32b32a32-float-premultiplied', 'r32g32b32a32-float', 'g8a8-premultiplied', 'g8a8', 'g8', 'g16a16-premultiplied', 'g16a16', 'g16'],
    GlyPhysicalDimensionUnit: ['inch', 'pica', 'point', 'meter', 'centimeter', 'millimeter'],
    GlySandboxSelector: ['auto', 'bwrap', 'flatpak-spawn', 'not-sandboxed'],
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
    'GlyColorMode.cicp': 2,
    'GlyColorMode.icc-profile': 3,
    'GlyColorMode.srgb': 1,
    'GlyMemoryFormat.a8b8g8r8': 6,
    'GlyMemoryFormat.a8r8g8b8': 4,
    'GlyMemoryFormat.a8r8g8b8-premultiplied': 1,
    'GlyMemoryFormat.b8g8r8': 8,
    'GlyMemoryFormat.b8g8r8a8': 3,
    'GlyMemoryFormat.b8g8r8a8-premultiplied': 0,
    'GlyMemoryFormat.g16': 22,
    'GlyMemoryFormat.g16a16': 21,
    'GlyMemoryFormat.g16a16-premultiplied': 20,
    'GlyMemoryFormat.g8': 19,
    'GlyMemoryFormat.g8a8': 18,
    'GlyMemoryFormat.g8a8-premultiplied': 17,
    'GlyMemoryFormat.r16g16b16': 9,
    'GlyMemoryFormat.r16g16b16-float': 12,
    'GlyMemoryFormat.r16g16b16a16': 11,
    'GlyMemoryFormat.r16g16b16a16-float': 13,
    'GlyMemoryFormat.r16g16b16a16-premultiplied': 10,
    'GlyMemoryFormat.r32g32b32-float': 14,
    'GlyMemoryFormat.r32g32b32a32-float': 16,
    'GlyMemoryFormat.r32g32b32a32-float-premultiplied': 15,
    'GlyMemoryFormat.r8g8b8': 7,
    'GlyMemoryFormat.r8g8b8a8': 5,
    'GlyMemoryFormat.r8g8b8a8-premultiplied': 2,
    'GlyPhysicalDimensionUnit.centimeter': 5,
    'GlyPhysicalDimensionUnit.inch': 1,
    'GlyPhysicalDimensionUnit.meter': 4,
    'GlyPhysicalDimensionUnit.millimeter': 6,
    'GlyPhysicalDimensionUnit.pica': 2,
    'GlyPhysicalDimensionUnit.point': 3,
    'GlySandboxSelector.auto': 0,
    'GlySandboxSelector.bwrap': 1,
    'GlySandboxSelector.flatpak-spawn': 2,
    'GlySandboxSelector.not-sandboxed': 3,
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
    'GlyMemoryFormatSelection.a8b8g8r8': 64,
    'GlyMemoryFormatSelection.a8r8g8b8': 16,
    'GlyMemoryFormatSelection.a8r8g8b8-premultiplied': 2,
    'GlyMemoryFormatSelection.b8g8r8': 256,
    'GlyMemoryFormatSelection.b8g8r8a8': 8,
    'GlyMemoryFormatSelection.b8g8r8a8-premultiplied': 1,
    'GlyMemoryFormatSelection.g16': 4194304,
    'GlyMemoryFormatSelection.g16a16': 2097152,
    'GlyMemoryFormatSelection.g16a16-premultiplied': 1048576,
    'GlyMemoryFormatSelection.g8': 524288,
    'GlyMemoryFormatSelection.g8a8': 262144,
    'GlyMemoryFormatSelection.g8a8-premultiplied': 131072,
    'GlyMemoryFormatSelection.r16g16b16': 512,
    'GlyMemoryFormatSelection.r16g16b16-float': 4096,
    'GlyMemoryFormatSelection.r16g16b16a16': 2048,
    'GlyMemoryFormatSelection.r16g16b16a16-float': 8192,
    'GlyMemoryFormatSelection.r16g16b16a16-premultiplied': 1024,
    'GlyMemoryFormatSelection.r32g32b32-float': 16384,
    'GlyMemoryFormatSelection.r32g32b32a32-float': 65536,
    'GlyMemoryFormatSelection.r32g32b32a32-float-premultiplied': 32768,
    'GlyMemoryFormatSelection.r8g8b8': 128,
    'GlyMemoryFormatSelection.r8g8b8a8': 32,
    'GlyMemoryFormatSelection.r8g8b8a8-premultiplied': 4,
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
    'GlyCreator.sandbox-selector': 'GlySandboxSelector',
    'GlyLoader.accepted-memory-formats': 'GlyMemoryFormatSelection',
    'GlyLoader.sandbox-selector': 'GlySandboxSelector',
    'GlyNewFrame.memory-format': 'GlyMemoryFormat',
    'GlyPixelDensity.x-unit': 'GlyPhysicalDimensionUnit',
    'GlyPixelDensity.y-unit': 'GlyPhysicalDimensionUnit',
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

export const SLOT_CANDIDATES = {};

export const SINCE = {
    'GlyCreator': '2.0',
    'GlyEncodedImage': '2.0',
    'GlyFrame': '2.0',
    'GlyFrameDetails': '2.2',
    'GlyFrameRequest': '2.0',
    'GlyImage': '2.0',
    'GlyLoader': '2.0',
    'GlyNewFrame': '2.0',
    'GlyPixelDensity': '2.2',
};
