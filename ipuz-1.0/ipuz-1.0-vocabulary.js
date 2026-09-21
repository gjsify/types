// The widget vocabulary of Ipuz-1.0 as runtime data.
//
// GENERATED — do not edit. Provenance: Ipuz-1.0
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'Ipuz',
    version: '1.0',
    libraryVersion: null,
    childHolders: 0,
    droppedBases: [],
    inlinedBases: [],
    unsettableProps: [],
    unresolvedProps: [],
    identifierPrefixes: ['Ipuz'],
    requiredVocabularies: ['@girs/gobject-2.0/vocabulary'],
};

export const OWN_PROPS = {
    IpuzAcrostic: ['quote', 'source'],
    IpuzCrossword: ['clue-placement', 'show-enumerations'],
    IpuzGrid: ['guesses', 'height', 'width'],
    IpuzNonogram: ['space'],
    IpuzPuzzle: ['annotation', 'author', 'block', 'charset', 'charset-str', 'copyright', 'date', 'difficulty', 'editor', 'empty', 'explanation', 'intro', 'license', 'locale', 'notes', 'origin', 'publication', 'publisher', 'title', 'uniqueid', 'url', 'version'],
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
    IpuzAcrostic: ['IpuzAcrostic', 'IpuzCrossword', 'IpuzGrid', 'IpuzPuzzle', 'GObject', 'IpuzClues'],
    IpuzArrowword: ['IpuzArrowword', 'IpuzCrossword', 'IpuzGrid', 'IpuzPuzzle', 'GObject', 'IpuzClues'],
    IpuzBarred: ['IpuzBarred', 'IpuzCrossword', 'IpuzGrid', 'IpuzPuzzle', 'GObject', 'IpuzClues'],
    IpuzCrossword: ['IpuzCrossword', 'IpuzGrid', 'IpuzPuzzle', 'GObject', 'IpuzClues'],
    IpuzCryptic: ['IpuzCryptic', 'IpuzCrossword', 'IpuzGrid', 'IpuzPuzzle', 'GObject', 'IpuzClues'],
    IpuzFilippine: ['IpuzFilippine', 'IpuzCrossword', 'IpuzGrid', 'IpuzPuzzle', 'GObject', 'IpuzClues'],
    IpuzGrid: ['IpuzGrid', 'IpuzPuzzle', 'GObject'],
    IpuzNonogram: ['IpuzNonogram', 'IpuzGrid', 'IpuzPuzzle', 'GObject'],
    IpuzNonogramColor: ['IpuzNonogramColor', 'IpuzNonogram', 'IpuzGrid', 'IpuzPuzzle', 'GObject'],
    IpuzPuzzle: ['IpuzPuzzle', 'GObject'],
    IpuzPuzzleInfo: ['IpuzPuzzleInfo', 'GObject'],
};

// The GTypes above that ARE widgets are the `Widgets` map in the sibling `.d.ts`; these
// are the ones that merely HOLD one, through `set_child`/`get_child`, descending from
// `GObject.Object`. A renderer places them like a container; a check asking "is this a
// widget" must not count them. Derived from the accessor pair, never from a list — the
// count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    IpuzAcrosticLabelMode: ['numbers', 'numbers-clues'],
    IpuzAcrosticSyncDirection: ['string-to-puzzle', 'puzzle-to-string'],
    IpuzArrowwordArrow: ['none', 'right', 'right-down', 'down', 'down-right', 'left-down', 'up-right'],
    IpuzArrowwordPlacement: ['fill', 'top', 'bottom'],
    IpuzCellType: ['normal', 'block', 'null'],
    IpuzClueDirection: ['none', 'across', 'down', 'diagonal', 'diagonal-up', 'diagonal-down-left', 'diagonal-up-left', 'zones', 'clues', 'hidden', 'custom'],
    IpuzCluePlacement: ['null', 'before', 'after', 'blocks'],
    IpuzDeliminator: ['word-break', 'period', 'dash', 'apostrophe', 'allcaps', 'capitalized', 'foreign'],
    IpuzGridCheckType: ['initialize-guess', 'guessable', 'guesses-valid', 'guess-made', 'guess-correct'],
    IpuzPuzzleKind: ['acrostic', 'arrowword', 'barred', 'crossword', 'cryptic', 'filippine', 'nonogram', 'nonogram-color', 'unknown'],
    IpuzStyleDivided: ['none', 'horiz', 'vert', 'up-right', 'up-left', 'plus', 'cross'],
    IpuzStyleShape: ['none', 'circle', 'arrow-left', 'arrow-right', 'arrow-up', 'arrow-down', 'triangle-left', 'triangle-right', 'triangle-up', 'triangle-down', 'diamond', 'club', 'heart', 'spade', 'star', 'square', 'rhombus', 'slash', 'backslash', 'x'],
    IpuzSymmetry: ['none', 'rotational-half', 'rotational-quarter', 'horizontal', 'vertical', 'mirrored', 'mirrored-diagonal', 'mirrored-diagonal-up-right'],
    IpuzSymmetryOffset: ['opposite', 'cw-adjacent', 'ccw-adjacent'],
    IpuzVerbosity: ['standard', 'sparse'],
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
    'IpuzAcrosticLabelMode.numbers': 0,
    'IpuzAcrosticLabelMode.numbers-clues': 1,
    'IpuzAcrosticSyncDirection.puzzle-to-string': 1,
    'IpuzAcrosticSyncDirection.string-to-puzzle': 0,
    'IpuzArrowwordArrow.down': 3,
    'IpuzArrowwordArrow.down-right': 4,
    'IpuzArrowwordArrow.left-down': 5,
    'IpuzArrowwordArrow.none': 0,
    'IpuzArrowwordArrow.right': 1,
    'IpuzArrowwordArrow.right-down': 2,
    'IpuzArrowwordArrow.up-right': 6,
    'IpuzArrowwordPlacement.bottom': 2,
    'IpuzArrowwordPlacement.fill': 0,
    'IpuzArrowwordPlacement.top': 1,
    'IpuzCellType.block': 1,
    'IpuzCellType.normal': 0,
    'IpuzCellType.null': 2,
    'IpuzClueDirection.across': 1,
    'IpuzClueDirection.clues': 8,
    'IpuzClueDirection.custom': 10,
    'IpuzClueDirection.diagonal': 3,
    'IpuzClueDirection.diagonal-down-left': 5,
    'IpuzClueDirection.diagonal-up': 4,
    'IpuzClueDirection.diagonal-up-left': 6,
    'IpuzClueDirection.down': 2,
    'IpuzClueDirection.hidden': 9,
    'IpuzClueDirection.none': 0,
    'IpuzClueDirection.zones': 7,
    'IpuzCluePlacement.after': 2,
    'IpuzCluePlacement.before': 1,
    'IpuzCluePlacement.blocks': 3,
    'IpuzCluePlacement.null': 0,
    'IpuzDeliminator.allcaps': 4,
    'IpuzDeliminator.apostrophe': 3,
    'IpuzDeliminator.capitalized': 5,
    'IpuzDeliminator.dash': 2,
    'IpuzDeliminator.foreign': 6,
    'IpuzDeliminator.period': 1,
    'IpuzDeliminator.word-break': 0,
    'IpuzGridCheckType.guess-correct': 4,
    'IpuzGridCheckType.guess-made': 3,
    'IpuzGridCheckType.guessable': 1,
    'IpuzGridCheckType.guesses-valid': 2,
    'IpuzGridCheckType.initialize-guess': 0,
    'IpuzPuzzleKind.acrostic': 0,
    'IpuzPuzzleKind.arrowword': 1,
    'IpuzPuzzleKind.barred': 2,
    'IpuzPuzzleKind.crossword': 3,
    'IpuzPuzzleKind.cryptic': 4,
    'IpuzPuzzleKind.filippine': 5,
    'IpuzPuzzleKind.nonogram': 6,
    'IpuzPuzzleKind.nonogram-color': 7,
    'IpuzPuzzleKind.unknown': 8,
    'IpuzStyleDivided.cross': 6,
    'IpuzStyleDivided.horiz': 1,
    'IpuzStyleDivided.none': 0,
    'IpuzStyleDivided.plus': 5,
    'IpuzStyleDivided.up-left': 4,
    'IpuzStyleDivided.up-right': 3,
    'IpuzStyleDivided.vert': 2,
    'IpuzStyleShape.arrow-down': 5,
    'IpuzStyleShape.arrow-left': 2,
    'IpuzStyleShape.arrow-right': 3,
    'IpuzStyleShape.arrow-up': 4,
    'IpuzStyleShape.backslash': 18,
    'IpuzStyleShape.circle': 1,
    'IpuzStyleShape.club': 11,
    'IpuzStyleShape.diamond': 10,
    'IpuzStyleShape.heart': 12,
    'IpuzStyleShape.none': 0,
    'IpuzStyleShape.rhombus': 16,
    'IpuzStyleShape.slash': 17,
    'IpuzStyleShape.spade': 13,
    'IpuzStyleShape.square': 15,
    'IpuzStyleShape.star': 14,
    'IpuzStyleShape.triangle-down': 9,
    'IpuzStyleShape.triangle-left': 6,
    'IpuzStyleShape.triangle-right': 7,
    'IpuzStyleShape.triangle-up': 8,
    'IpuzStyleShape.x': 19,
    'IpuzSymmetry.horizontal': 3,
    'IpuzSymmetry.mirrored': 5,
    'IpuzSymmetry.mirrored-diagonal': 6,
    'IpuzSymmetry.mirrored-diagonal-up-right': 7,
    'IpuzSymmetry.none': 0,
    'IpuzSymmetry.rotational-half': 1,
    'IpuzSymmetry.rotational-quarter': 2,
    'IpuzSymmetry.vertical': 4,
    'IpuzSymmetryOffset.ccw-adjacent': 2,
    'IpuzSymmetryOffset.cw-adjacent': 1,
    'IpuzSymmetryOffset.opposite': 0,
    'IpuzVerbosity.sparse': 1,
    'IpuzVerbosity.standard': 0,
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
    'IpuzPuzzleFlags.has-checksum': 4,
    'IpuzPuzzleFlags.has-clues': 8,
    'IpuzPuzzleFlags.has-origin-bug': 64,
    'IpuzPuzzleFlags.has-saved': 16,
    'IpuzPuzzleFlags.has-solution': 2,
    'IpuzPuzzleFlags.invalid-chars': 32,
    'IpuzPuzzleFlags.uses-extensions': 1,
    'IpuzStyleMark.b': 128,
    'IpuzStyleMark.bl': 64,
    'IpuzStyleMark.br': 256,
    'IpuzStyleMark.c': 16,
    'IpuzStyleMark.l': 8,
    'IpuzStyleMark.r': 32,
    'IpuzStyleMark.t': 2,
    'IpuzStyleMark.tl': 1,
    'IpuzStyleMark.tr': 4,
    'IpuzStyleSides.bottom': 4,
    'IpuzStyleSides.bottom-right': 6,
    'IpuzStyleSides.left': 8,
    'IpuzStyleSides.right': 2,
    'IpuzStyleSides.top': 1,
    'IpuzStyleSides.top-left': 9,
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
    'IpuzCrossword.clue-placement': 'IpuzCluePlacement',
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
    'IpuzAcrostic.quote': 'gchararray',
    'IpuzAcrostic.source': 'gchararray',
    'IpuzCrossword.clue-placement': 'IpuzCluePlacement',
    'IpuzCrossword.show-enumerations': 'gboolean',
    'IpuzGrid.height': 'guint',
    'IpuzGrid.width': 'guint',
    'IpuzNonogram.space': 'gchararray',
    'IpuzPuzzle.annotation': 'gchararray',
    'IpuzPuzzle.author': 'gchararray',
    'IpuzPuzzle.block': 'gchararray',
    'IpuzPuzzle.charset-str': 'gchararray',
    'IpuzPuzzle.copyright': 'gchararray',
    'IpuzPuzzle.date': 'gchararray',
    'IpuzPuzzle.difficulty': 'gchararray',
    'IpuzPuzzle.editor': 'gchararray',
    'IpuzPuzzle.empty': 'gchararray',
    'IpuzPuzzle.explanation': 'gchararray',
    'IpuzPuzzle.intro': 'gchararray',
    'IpuzPuzzle.license': 'gchararray',
    'IpuzPuzzle.locale': 'gchararray',
    'IpuzPuzzle.notes': 'gchararray',
    'IpuzPuzzle.origin': 'gchararray',
    'IpuzPuzzle.publication': 'gchararray',
    'IpuzPuzzle.publisher': 'gchararray',
    'IpuzPuzzle.title': 'gchararray',
    'IpuzPuzzle.uniqueid': 'gchararray',
    'IpuzPuzzle.url': 'gchararray',
    'IpuzPuzzle.version': 'gchararray',
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

export const SINCE = {};
