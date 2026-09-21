// The widget vocabulary of GCalc-2 as runtime data.
//
// GENERATED — do not edit. Provenance: GCalc-2
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'GCalc',
    version: '2',
    libraryVersion: null,
    childHolders: 0,
    droppedBases: [],
    inlinedBases: [],
    unsettableProps: [],
    unresolvedProps: [],
    identifierPrefixes: ['GCalc'],
    requiredVocabularies: ['@girs/gee-0.8/vocabulary', '@girs/gio-2.0/vocabulary', '@girs/gobject-2.0/vocabulary'],
};

export const OWN_PROPS = {
    GCalcExpressionContainer: ['parent'],
    GCalcExpressionHashMap: ['parent'],
    GCalcMathExpression: ['parent'],
    GCalcMathFunction: ['closed', 'n-params', 'name'],
    GCalcMathGroup: ['closed', 'level'],
    GCalcMathVariable: ['bind', 'name', 'value'],
    GCalcSolver: ['equation-manager'],
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
    GCalcAssign: ['GCalcAssign', 'GCalcExpression', 'GObject', 'GCalcMathOperator', 'GCalcMathBinaryOperator', 'GCalcMathAssign', 'GCalcMathExpression'],
    GCalcCalculator: ['GCalcCalculator', 'GObject'],
    GCalcConstant: ['GCalcConstant', 'GCalcExpression', 'GObject', 'GCalcMathConstant', 'GCalcMathConstantNumber', 'GCalcMathConstantComplex', 'GCalcMathConstantVector', 'GCalcMathExpression'],
    GCalcDivision: ['GCalcDivision', 'GCalcExpression', 'GObject', 'GCalcMathOperator', 'GCalcMathBinaryOperator', 'GCalcMathDivision', 'GCalcMathExpression'],
    GCalcEquation: ['GCalcEquation', 'GCalcExpression', 'GObject', 'GCalcMathEquation', 'GCalcMathExpression'],
    GCalcEquationManager: ['GCalcEquationManager', 'GObject', 'GCalcMathEquationManager'],
    GCalcErrorExpression: ['GCalcErrorExpression', 'GCalcExpression', 'GObject', 'GCalcMathExpression'],
    GCalcErrorResult: ['GCalcErrorResult', 'GObject', 'GCalcMathResult', 'GCalcMathErrorResult'],
    GCalcExpression: ['GCalcExpression', 'GObject', 'GCalcMathExpression'],
    GCalcExpressionContainer: ['GCalcExpressionContainer', 'GeeArrayList', 'GeeAbstractBidirList', 'GeeAbstractList', 'GeeAbstractCollection', 'GObject', 'GListModel', 'GeeBidirList', 'GeeList', 'GeeTraversable', 'GeeIterable', 'GeeCollection'],
    GCalcExpressionHashMap: ['GCalcExpressionHashMap', 'GeeHashMap', 'GeeAbstractMap', 'GObject', 'GeeTraversable', 'GeeIterable', 'GeeMap'],
    GCalcFunction: ['GCalcFunction', 'GCalcExpression', 'GObject', 'GCalcMathFunction', 'GCalcHashable', 'GCalcMathExpression'],
    GCalcFunctionAcos: ['GCalcFunctionAcos', 'GCalcFunction', 'GCalcExpression', 'GObject', 'GCalcMathFunction', 'GCalcHashable', 'GCalcMathExpression'],
    GCalcFunctionAcosh: ['GCalcFunctionAcosh', 'GCalcFunction', 'GCalcExpression', 'GObject', 'GCalcMathFunction', 'GCalcHashable', 'GCalcMathExpression'],
    GCalcFunctionAsin: ['GCalcFunctionAsin', 'GCalcFunction', 'GCalcExpression', 'GObject', 'GCalcMathFunction', 'GCalcHashable', 'GCalcMathExpression'],
    GCalcFunctionAsinh: ['GCalcFunctionAsinh', 'GCalcFunction', 'GCalcExpression', 'GObject', 'GCalcMathFunction', 'GCalcHashable', 'GCalcMathExpression'],
    GCalcFunctionAtan: ['GCalcFunctionAtan', 'GCalcFunction', 'GCalcExpression', 'GObject', 'GCalcMathFunction', 'GCalcHashable', 'GCalcMathExpression'],
    GCalcFunctionAtanh: ['GCalcFunctionAtanh', 'GCalcFunction', 'GCalcExpression', 'GObject', 'GCalcMathFunction', 'GCalcHashable', 'GCalcMathExpression'],
    GCalcFunctionCos: ['GCalcFunctionCos', 'GCalcFunction', 'GCalcExpression', 'GObject', 'GCalcMathFunction', 'GCalcHashable', 'GCalcMathExpression'],
    GCalcFunctionCosh: ['GCalcFunctionCosh', 'GCalcFunction', 'GCalcExpression', 'GObject', 'GCalcMathFunction', 'GCalcHashable', 'GCalcMathExpression'],
    GCalcFunctionExp: ['GCalcFunctionExp', 'GCalcFunction', 'GCalcExpression', 'GObject', 'GCalcMathFunction', 'GCalcHashable', 'GCalcMathExpression'],
    GCalcFunctionLog: ['GCalcFunctionLog', 'GCalcFunction', 'GCalcExpression', 'GObject', 'GCalcMathFunction', 'GCalcHashable', 'GCalcMathExpression'],
    GCalcFunctionSin: ['GCalcFunctionSin', 'GCalcFunction', 'GCalcExpression', 'GObject', 'GCalcMathFunction', 'GCalcHashable', 'GCalcMathExpression'],
    GCalcFunctionSinh: ['GCalcFunctionSinh', 'GCalcFunction', 'GCalcExpression', 'GObject', 'GCalcMathFunction', 'GCalcHashable', 'GCalcMathExpression'],
    GCalcFunctionSqrt: ['GCalcFunctionSqrt', 'GCalcFunction', 'GCalcExpression', 'GObject', 'GCalcMathFunction', 'GCalcHashable', 'GCalcMathExpression'],
    GCalcFunctionTan: ['GCalcFunctionTan', 'GCalcFunction', 'GCalcExpression', 'GObject', 'GCalcMathFunction', 'GCalcHashable', 'GCalcMathExpression'],
    GCalcFunctionTanh: ['GCalcFunctionTanh', 'GCalcFunction', 'GCalcExpression', 'GObject', 'GCalcMathFunction', 'GCalcHashable', 'GCalcMathExpression'],
    GCalcGroup: ['GCalcGroup', 'GCalcExpression', 'GObject', 'GCalcMathGroup', 'GCalcMathExpression'],
    GCalcMinus: ['GCalcMinus', 'GCalcExpression', 'GObject', 'GCalcMathOperator', 'GCalcMathBinaryOperator', 'GCalcMathMinus', 'GCalcMathExpression'],
    GCalcMultiply: ['GCalcMultiply', 'GCalcExpression', 'GObject', 'GCalcMathOperator', 'GCalcMathBinaryOperator', 'GCalcMathMultiply', 'GCalcMathExpression'],
    GCalcParameter: ['GCalcParameter', 'GCalcVariable', 'GCalcExpression', 'GObject', 'GCalcMathParameter', 'GCalcMathVariable', 'GCalcHashable', 'GCalcMathExpression'],
    GCalcParser: ['GCalcParser', 'GObject'],
    GCalcPlus: ['GCalcPlus', 'GCalcExpression', 'GObject', 'GCalcMathOperator', 'GCalcMathBinaryOperator', 'GCalcMathPlus', 'GCalcMathExpression'],
    GCalcPolynomial: ['GCalcPolynomial', 'GCalcExpression', 'GObject', 'GCalcMathPolynomial', 'GCalcMathExpression'],
    GCalcPow: ['GCalcPow', 'GCalcExpression', 'GObject', 'GCalcMathOperator', 'GCalcMathPow', 'GCalcMathExpression'],
    GCalcResult: ['GCalcResult', 'GObject', 'GCalcMathResult'],
    GCalcSolver: ['GCalcSolver', 'GObject'],
    GCalcTerm: ['GCalcTerm', 'GCalcExpression', 'GObject', 'GCalcMathTerm', 'GCalcMathExpression'],
    GCalcUnitConverter: ['GCalcUnitConverter', 'GObject'],
    GCalcVariable: ['GCalcVariable', 'GCalcExpression', 'GObject', 'GCalcMathVariable', 'GCalcHashable', 'GCalcMathExpression'],
};

// The GTypes above that ARE widgets are the `Widgets` map in the sibling `.d.ts`; these
// are the ones that merely HOLD one, through `set_child`/`get_child`, descending from
// `GObject.Object`. A renderer places them like a container; a check asking "is this a
// widget" must not count them. Derived from the accessor pair, never from a list — the
// count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    GCalcAngleUnit: ['radians', 'degrees', 'gradians'],
    GCalcMathGroupLevel: ['one', 'two', 'three'],
    GCalcParserTokenType: ['none', 'eof', 'identifier', 'integer-literal', 'real-literal', 'star', 'plus', 'div', 'minus', 'assign', 'open-parens', 'close-parens', 'carret', 'close-brace', 'close-bracket', 'open-brace', 'open-bracket', 'string-literal', 'op-and', 'op-coalescing', 'op-dec', 'op-eq', 'op-ge', 'op-gt', 'op-inc', 'op-le', 'op-lt', 'op-ne', 'op-neg', 'op-or', 'op-ptr', 'op-shift-left', 'semicolon', 'tilde', 'colon', 'comma', 'double-colon', 'dot', 'ellipsis', 'interr', 'hash', 'currency-symbol'],
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
    'GCalcAngleUnit.degrees': 1,
    'GCalcAngleUnit.gradians': 2,
    'GCalcAngleUnit.radians': 0,
    'GCalcMathGroupLevel.one': 0,
    'GCalcMathGroupLevel.three': 2,
    'GCalcMathGroupLevel.two': 1,
    'GCalcParserTokenType.assign': 9,
    'GCalcParserTokenType.carret': 12,
    'GCalcParserTokenType.close-brace': 13,
    'GCalcParserTokenType.close-bracket': 14,
    'GCalcParserTokenType.close-parens': 11,
    'GCalcParserTokenType.colon': 34,
    'GCalcParserTokenType.comma': 35,
    'GCalcParserTokenType.currency-symbol': 41,
    'GCalcParserTokenType.div': 7,
    'GCalcParserTokenType.dot': 37,
    'GCalcParserTokenType.double-colon': 36,
    'GCalcParserTokenType.ellipsis': 38,
    'GCalcParserTokenType.eof': 1,
    'GCalcParserTokenType.hash': 40,
    'GCalcParserTokenType.identifier': 2,
    'GCalcParserTokenType.integer-literal': 3,
    'GCalcParserTokenType.interr': 39,
    'GCalcParserTokenType.minus': 8,
    'GCalcParserTokenType.none': 0,
    'GCalcParserTokenType.op-and': 18,
    'GCalcParserTokenType.op-coalescing': 19,
    'GCalcParserTokenType.op-dec': 20,
    'GCalcParserTokenType.op-eq': 21,
    'GCalcParserTokenType.op-ge': 22,
    'GCalcParserTokenType.op-gt': 23,
    'GCalcParserTokenType.op-inc': 24,
    'GCalcParserTokenType.op-le': 25,
    'GCalcParserTokenType.op-lt': 26,
    'GCalcParserTokenType.op-ne': 27,
    'GCalcParserTokenType.op-neg': 28,
    'GCalcParserTokenType.op-or': 29,
    'GCalcParserTokenType.op-ptr': 30,
    'GCalcParserTokenType.op-shift-left': 31,
    'GCalcParserTokenType.open-brace': 15,
    'GCalcParserTokenType.open-bracket': 16,
    'GCalcParserTokenType.open-parens': 10,
    'GCalcParserTokenType.plus': 6,
    'GCalcParserTokenType.real-literal': 4,
    'GCalcParserTokenType.semicolon': 32,
    'GCalcParserTokenType.star': 5,
    'GCalcParserTokenType.string-literal': 17,
    'GCalcParserTokenType.tilde': 33,
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
// that OWNS an enum publishes it, so 83 of the 909 entries a full run emits want the owner's
// vocabulary loaded too. Owners that emit none (Gdk, Pango) are inlined into the tables above.
export const PROP_ENUMS = {
    'GCalcMathGroup.level': 'GCalcMathGroupLevel',
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
    'GCalcExpressionContainer.parent': 'GCalcMathExpression',
    'GCalcExpressionHashMap.parent': 'GCalcMathExpression',
    'GCalcMathExpression.parent': 'GCalcMathExpression',
    'GCalcMathFunction.closed': 'gboolean',
    'GCalcMathFunction.n-params': 'guint',
    'GCalcMathFunction.name': 'gchararray',
    'GCalcMathGroup.closed': 'gboolean',
    'GCalcMathGroup.level': 'GCalcMathGroupLevel',
    'GCalcMathVariable.bind': 'GCalcMathVariable',
    'GCalcMathVariable.name': 'gchararray',
    'GCalcMathVariable.value': 'GCalcMathConstant',
    'GCalcSolver.equation-manager': 'GCalcMathEquationManager',
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
