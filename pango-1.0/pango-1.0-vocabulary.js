// The widget vocabulary of Pango-1.0 as runtime data.
//
// GENERATED — do not edit. Provenance: Pango-1.0 — library 1.58.2
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'Pango',
    version: '1.0',
    libraryVersion: '1.58.2',
    childHolders: 0,
    droppedBases: [],
    inlinedBases: [],
    unsettableProps: [],
    unresolvedProps: [],
    identifierPrefixes: ['Pango'],
    requiredVocabularies: ['@girs/gobject-2.0/vocabulary'],
};

export const OWN_PROPS = {};

export const OWN_SIGNALS = {};

// Every GType this namespace can INSTANTIATE -> the declarations its members come from.
//
// The key set is what a UI description file can name: a registered, non-abstract class.
// Not "every widget" — GtkBuilder resolves a name through `g_type_from_name`, which knows
// nothing about widgets, and a `.ui` file is full of `GtkSizeGroup`, `GtkTextTag`,
// `GtkEventController*` and `GtkCellRenderer*`. Use `Widgets` and `CHILD_HOLDERS`
// below for the narrower questions; they did not move.
export const DECLS = {
    PangoContext: ['PangoContext', 'GObject'],
    PangoCoverage: ['PangoCoverage', 'GObject'],
    PangoFontsetSimple: ['PangoFontsetSimple', 'PangoFontset', 'GObject'],
    PangoLayout: ['PangoLayout', 'GObject'],
};

// The GTypes above that ARE widgets are the `Widgets` map in the sibling `.d.ts`; these
// are the ones that merely HOLD one, through `set_child`/`get_child`, descending from
// `GObject.Object`. A renderer places them like a container; a check asking "is this a
// widget" must not count them. Derived from the accessor pair, never from a list — the
// count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    PangoAlignment: ['left', 'center', 'right'],
    PangoAttrType: ['invalid', 'language', 'family', 'style', 'weight', 'variant', 'stretch', 'size', 'font-desc', 'foreground', 'background', 'underline', 'strikethrough', 'rise', 'shape', 'scale', 'fallback', 'letter-spacing', 'underline-color', 'strikethrough-color', 'absolute-size', 'gravity', 'gravity-hint', 'font-features', 'foreground-alpha', 'background-alpha', 'allow-breaks', 'show', 'insert-hyphens', 'overline', 'overline-color', 'line-height', 'absolute-line-height', 'text-transform', 'word', 'sentence', 'baseline-shift', 'font-scale', 'width'],
    PangoBaselineShift: ['none', 'superscript', 'subscript'],
    PangoBidiType: ['l', 'lre', 'lro', 'r', 'al', 'rle', 'rlo', 'pdf', 'en', 'es', 'et', 'an', 'cs', 'nsm', 'bn', 'b', 's', 'ws', 'on', 'lri', 'rli', 'fsi', 'pdi'],
    PangoCoverageLevel: ['none', 'fallback', 'approximate', 'exact'],
    PangoDirection: ['ltr', 'rtl', 'ttb-ltr', 'ttb-rtl', 'weak-ltr', 'weak-rtl', 'neutral'],
    PangoEllipsizeMode: ['none', 'start', 'middle', 'end'],
    PangoFontColor: ['forbidden', 'required', 'dont-care'],
    PangoFontScale: ['none', 'superscript', 'subscript', 'small-caps'],
    PangoGravity: ['south', 'east', 'north', 'west', 'auto'],
    PangoGravityHint: ['natural', 'strong', 'line'],
    PangoOverline: ['none', 'single'],
    PangoRenderPart: ['foreground', 'background', 'underline', 'strikethrough', 'overline'],
    PangoScript: ['invalid-code', 'common', 'inherited', 'arabic', 'armenian', 'bengali', 'bopomofo', 'cherokee', 'coptic', 'cyrillic', 'deseret', 'devanagari', 'ethiopic', 'georgian', 'gothic', 'greek', 'gujarati', 'gurmukhi', 'han', 'hangul', 'hebrew', 'hiragana', 'kannada', 'katakana', 'khmer', 'lao', 'latin', 'malayalam', 'mongolian', 'myanmar', 'ogham', 'old-italic', 'oriya', 'runic', 'sinhala', 'syriac', 'tamil', 'telugu', 'thaana', 'thai', 'tibetan', 'canadian-aboriginal', 'yi', 'tagalog', 'hanunoo', 'buhid', 'tagbanwa', 'braille', 'cypriot', 'limbu', 'osmanya', 'shavian', 'linear-b', 'tai-le', 'ugaritic', 'new-tai-lue', 'buginese', 'glagolitic', 'tifinagh', 'syloti-nagri', 'old-persian', 'kharoshthi', 'unknown', 'balinese', 'cuneiform', 'phoenician', 'phags-pa', 'nko', 'kayah-li', 'lepcha', 'rejang', 'sundanese', 'saurashtra', 'cham', 'ol-chiki', 'vai', 'carian', 'lycian', 'lydian', 'batak', 'brahmi', 'mandaic', 'chakma', 'meroitic-cursive', 'meroitic-hieroglyphs', 'miao', 'sharada', 'sora-sompeng', 'takri', 'bassa-vah', 'caucasian-albanian', 'duployan', 'elbasan', 'grantha', 'khojki', 'khudawadi', 'linear-a', 'mahajani', 'manichaean', 'mende-kikakui', 'modi', 'mro', 'nabataean', 'old-north-arabian', 'old-permic', 'pahawh-hmong', 'palmyrene', 'pau-cin-hau', 'psalter-pahlavi', 'siddham', 'tirhuta', 'warang-citi', 'ahom', 'anatolian-hieroglyphs', 'hatran', 'multani', 'old-hungarian', 'signwriting'],
    PangoStretch: ['ultra-condensed', 'extra-condensed', 'condensed', 'semi-condensed', 'normal', 'semi-expanded', 'expanded', 'extra-expanded', 'ultra-expanded'],
    PangoStyle: ['normal', 'oblique', 'italic'],
    PangoTabAlign: ['left', 'right', 'center', 'decimal'],
    PangoTextTransform: ['none', 'lowercase', 'uppercase', 'capitalize'],
    PangoUnderline: ['none', 'single', 'double', 'low', 'error', 'single-line', 'double-line', 'error-line'],
    PangoVariant: ['normal', 'small-caps', 'all-small-caps', 'petite-caps', 'all-petite-caps', 'unicase', 'title-caps'],
    PangoWeight: ['thin', 'ultralight', 'light', 'semilight', 'book', 'normal', 'medium', 'semibold', 'bold', 'ultrabold', 'heavy', 'ultraheavy'],
    PangoWidth: ['ultra-condensed', 'extra-condensed', 'condensed', 'semi-condensed', 'normal', 'semi-expanded', 'expanded', 'extra-expanded', 'ultra-expanded'],
    PangoWrapMode: ['word', 'char', 'word-char', 'none'],
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
    'PangoAlignment.center': 1,
    'PangoAlignment.left': 0,
    'PangoAlignment.right': 2,
    'PangoAttrType.absolute-line-height': 32,
    'PangoAttrType.absolute-size': 20,
    'PangoAttrType.allow-breaks': 26,
    'PangoAttrType.background': 10,
    'PangoAttrType.background-alpha': 25,
    'PangoAttrType.baseline-shift': 36,
    'PangoAttrType.fallback': 16,
    'PangoAttrType.family': 2,
    'PangoAttrType.font-desc': 8,
    'PangoAttrType.font-features': 23,
    'PangoAttrType.font-scale': 37,
    'PangoAttrType.foreground': 9,
    'PangoAttrType.foreground-alpha': 24,
    'PangoAttrType.gravity': 21,
    'PangoAttrType.gravity-hint': 22,
    'PangoAttrType.insert-hyphens': 28,
    'PangoAttrType.invalid': 0,
    'PangoAttrType.language': 1,
    'PangoAttrType.letter-spacing': 17,
    'PangoAttrType.line-height': 31,
    'PangoAttrType.overline': 29,
    'PangoAttrType.overline-color': 30,
    'PangoAttrType.rise': 13,
    'PangoAttrType.scale': 15,
    'PangoAttrType.sentence': 35,
    'PangoAttrType.shape': 14,
    'PangoAttrType.show': 27,
    'PangoAttrType.size': 7,
    'PangoAttrType.stretch': 6,
    'PangoAttrType.strikethrough': 12,
    'PangoAttrType.strikethrough-color': 19,
    'PangoAttrType.style': 3,
    'PangoAttrType.text-transform': 33,
    'PangoAttrType.underline': 11,
    'PangoAttrType.underline-color': 18,
    'PangoAttrType.variant': 5,
    'PangoAttrType.weight': 4,
    'PangoAttrType.width': 38,
    'PangoAttrType.word': 34,
    'PangoBaselineShift.none': 0,
    'PangoBaselineShift.subscript': 2,
    'PangoBaselineShift.superscript': 1,
    'PangoBidiType.al': 4,
    'PangoBidiType.an': 11,
    'PangoBidiType.b': 15,
    'PangoBidiType.bn': 14,
    'PangoBidiType.cs': 12,
    'PangoBidiType.en': 8,
    'PangoBidiType.es': 9,
    'PangoBidiType.et': 10,
    'PangoBidiType.fsi': 21,
    'PangoBidiType.l': 0,
    'PangoBidiType.lre': 1,
    'PangoBidiType.lri': 19,
    'PangoBidiType.lro': 2,
    'PangoBidiType.nsm': 13,
    'PangoBidiType.on': 18,
    'PangoBidiType.pdf': 7,
    'PangoBidiType.pdi': 22,
    'PangoBidiType.r': 3,
    'PangoBidiType.rle': 5,
    'PangoBidiType.rli': 20,
    'PangoBidiType.rlo': 6,
    'PangoBidiType.s': 16,
    'PangoBidiType.ws': 17,
    'PangoCoverageLevel.approximate': 2,
    'PangoCoverageLevel.exact': 3,
    'PangoCoverageLevel.fallback': 1,
    'PangoCoverageLevel.none': 0,
    'PangoDirection.ltr': 0,
    'PangoDirection.neutral': 6,
    'PangoDirection.rtl': 1,
    'PangoDirection.ttb-ltr': 2,
    'PangoDirection.ttb-rtl': 3,
    'PangoDirection.weak-ltr': 4,
    'PangoDirection.weak-rtl': 5,
    'PangoEllipsizeMode.end': 3,
    'PangoEllipsizeMode.middle': 2,
    'PangoEllipsizeMode.none': 0,
    'PangoEllipsizeMode.start': 1,
    'PangoFontColor.dont-care': 2,
    'PangoFontColor.forbidden': 0,
    'PangoFontColor.required': 1,
    'PangoFontScale.none': 0,
    'PangoFontScale.small-caps': 3,
    'PangoFontScale.subscript': 2,
    'PangoFontScale.superscript': 1,
    'PangoGravity.auto': 4,
    'PangoGravity.east': 1,
    'PangoGravity.north': 2,
    'PangoGravity.south': 0,
    'PangoGravity.west': 3,
    'PangoGravityHint.line': 2,
    'PangoGravityHint.natural': 0,
    'PangoGravityHint.strong': 1,
    'PangoOverline.none': 0,
    'PangoOverline.single': 1,
    'PangoRenderPart.background': 1,
    'PangoRenderPart.foreground': 0,
    'PangoRenderPart.overline': 4,
    'PangoRenderPart.strikethrough': 3,
    'PangoRenderPart.underline': 2,
    'PangoScript.ahom': 111,
    'PangoScript.anatolian-hieroglyphs': 112,
    'PangoScript.arabic': 2,
    'PangoScript.armenian': 3,
    'PangoScript.balinese': 62,
    'PangoScript.bassa-vah': 88,
    'PangoScript.batak': 78,
    'PangoScript.bengali': 4,
    'PangoScript.bopomofo': 5,
    'PangoScript.brahmi': 79,
    'PangoScript.braille': 46,
    'PangoScript.buginese': 55,
    'PangoScript.buhid': 44,
    'PangoScript.canadian-aboriginal': 40,
    'PangoScript.carian': 75,
    'PangoScript.caucasian-albanian': 89,
    'PangoScript.chakma': 81,
    'PangoScript.cham': 72,
    'PangoScript.cherokee': 6,
    'PangoScript.common': 0,
    'PangoScript.coptic': 7,
    'PangoScript.cuneiform': 63,
    'PangoScript.cypriot': 47,
    'PangoScript.cyrillic': 8,
    'PangoScript.deseret': 9,
    'PangoScript.devanagari': 10,
    'PangoScript.duployan': 90,
    'PangoScript.elbasan': 91,
    'PangoScript.ethiopic': 11,
    'PangoScript.georgian': 12,
    'PangoScript.glagolitic': 56,
    'PangoScript.gothic': 13,
    'PangoScript.grantha': 92,
    'PangoScript.greek': 14,
    'PangoScript.gujarati': 15,
    'PangoScript.gurmukhi': 16,
    'PangoScript.han': 17,
    'PangoScript.hangul': 18,
    'PangoScript.hanunoo': 43,
    'PangoScript.hatran': 113,
    'PangoScript.hebrew': 19,
    'PangoScript.hiragana': 20,
    'PangoScript.inherited': 1,
    'PangoScript.invalid-code': -1,
    'PangoScript.kannada': 21,
    'PangoScript.katakana': 22,
    'PangoScript.kayah-li': 67,
    'PangoScript.kharoshthi': 60,
    'PangoScript.khmer': 23,
    'PangoScript.khojki': 93,
    'PangoScript.khudawadi': 94,
    'PangoScript.lao': 24,
    'PangoScript.latin': 25,
    'PangoScript.lepcha': 68,
    'PangoScript.limbu': 48,
    'PangoScript.linear-a': 95,
    'PangoScript.linear-b': 51,
    'PangoScript.lycian': 76,
    'PangoScript.lydian': 77,
    'PangoScript.mahajani': 96,
    'PangoScript.malayalam': 26,
    'PangoScript.mandaic': 80,
    'PangoScript.manichaean': 97,
    'PangoScript.mende-kikakui': 98,
    'PangoScript.meroitic-cursive': 82,
    'PangoScript.meroitic-hieroglyphs': 83,
    'PangoScript.miao': 84,
    'PangoScript.modi': 99,
    'PangoScript.mongolian': 27,
    'PangoScript.mro': 100,
    'PangoScript.multani': 114,
    'PangoScript.myanmar': 28,
    'PangoScript.nabataean': 101,
    'PangoScript.new-tai-lue': 54,
    'PangoScript.nko': 66,
    'PangoScript.ogham': 29,
    'PangoScript.ol-chiki': 73,
    'PangoScript.old-hungarian': 115,
    'PangoScript.old-italic': 30,
    'PangoScript.old-north-arabian': 102,
    'PangoScript.old-permic': 103,
    'PangoScript.old-persian': 59,
    'PangoScript.oriya': 31,
    'PangoScript.osmanya': 49,
    'PangoScript.pahawh-hmong': 104,
    'PangoScript.palmyrene': 105,
    'PangoScript.pau-cin-hau': 106,
    'PangoScript.phags-pa': 65,
    'PangoScript.phoenician': 64,
    'PangoScript.psalter-pahlavi': 107,
    'PangoScript.rejang': 69,
    'PangoScript.runic': 32,
    'PangoScript.saurashtra': 71,
    'PangoScript.sharada': 85,
    'PangoScript.shavian': 50,
    'PangoScript.siddham': 108,
    'PangoScript.signwriting': 116,
    'PangoScript.sinhala': 33,
    'PangoScript.sora-sompeng': 86,
    'PangoScript.sundanese': 70,
    'PangoScript.syloti-nagri': 58,
    'PangoScript.syriac': 34,
    'PangoScript.tagalog': 42,
    'PangoScript.tagbanwa': 45,
    'PangoScript.tai-le': 52,
    'PangoScript.takri': 87,
    'PangoScript.tamil': 35,
    'PangoScript.telugu': 36,
    'PangoScript.thaana': 37,
    'PangoScript.thai': 38,
    'PangoScript.tibetan': 39,
    'PangoScript.tifinagh': 57,
    'PangoScript.tirhuta': 109,
    'PangoScript.ugaritic': 53,
    'PangoScript.unknown': 61,
    'PangoScript.vai': 74,
    'PangoScript.warang-citi': 110,
    'PangoScript.yi': 41,
    'PangoStretch.condensed': 2,
    'PangoStretch.expanded': 6,
    'PangoStretch.extra-condensed': 1,
    'PangoStretch.extra-expanded': 7,
    'PangoStretch.normal': 4,
    'PangoStretch.semi-condensed': 3,
    'PangoStretch.semi-expanded': 5,
    'PangoStretch.ultra-condensed': 0,
    'PangoStretch.ultra-expanded': 8,
    'PangoStyle.italic': 2,
    'PangoStyle.normal': 0,
    'PangoStyle.oblique': 1,
    'PangoTabAlign.center': 2,
    'PangoTabAlign.decimal': 3,
    'PangoTabAlign.left': 0,
    'PangoTabAlign.right': 1,
    'PangoTextTransform.capitalize': 3,
    'PangoTextTransform.lowercase': 1,
    'PangoTextTransform.none': 0,
    'PangoTextTransform.uppercase': 2,
    'PangoUnderline.double': 2,
    'PangoUnderline.double-line': 6,
    'PangoUnderline.error': 4,
    'PangoUnderline.error-line': 7,
    'PangoUnderline.low': 3,
    'PangoUnderline.none': 0,
    'PangoUnderline.single': 1,
    'PangoUnderline.single-line': 5,
    'PangoVariant.all-petite-caps': 4,
    'PangoVariant.all-small-caps': 2,
    'PangoVariant.normal': 0,
    'PangoVariant.petite-caps': 3,
    'PangoVariant.small-caps': 1,
    'PangoVariant.title-caps': 6,
    'PangoVariant.unicase': 5,
    'PangoWeight.bold': 700,
    'PangoWeight.book': 380,
    'PangoWeight.heavy': 900,
    'PangoWeight.light': 300,
    'PangoWeight.medium': 500,
    'PangoWeight.normal': 400,
    'PangoWeight.semibold': 600,
    'PangoWeight.semilight': 350,
    'PangoWeight.thin': 100,
    'PangoWeight.ultrabold': 800,
    'PangoWeight.ultraheavy': 1000,
    'PangoWeight.ultralight': 200,
    'PangoWidth.condensed': 750,
    'PangoWidth.expanded': 1250,
    'PangoWidth.extra-condensed': 625,
    'PangoWidth.extra-expanded': 1500,
    'PangoWidth.normal': 1000,
    'PangoWidth.semi-condensed': 875,
    'PangoWidth.semi-expanded': 1125,
    'PangoWidth.ultra-condensed': 500,
    'PangoWidth.ultra-expanded': 2000,
    'PangoWrapMode.char': 1,
    'PangoWrapMode.none': 3,
    'PangoWrapMode.word': 0,
    'PangoWrapMode.word-char': 2,
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
    'PangoFontMask.color': 512,
    'PangoFontMask.family': 1,
    'PangoFontMask.features': 256,
    'PangoFontMask.gravity': 64,
    'PangoFontMask.size': 32,
    'PangoFontMask.stretch': 16,
    'PangoFontMask.style': 2,
    'PangoFontMask.variant': 4,
    'PangoFontMask.variations': 128,
    'PangoFontMask.weight': 8,
    'PangoFontMask.width': 16,
    'PangoLayoutDeserializeFlags.context': 1,
    'PangoLayoutDeserializeFlags.default': 0,
    'PangoLayoutSerializeFlags.context': 1,
    'PangoLayoutSerializeFlags.default': 0,
    'PangoLayoutSerializeFlags.output': 2,
    'PangoRenderComponent.background': 8,
    'PangoRenderComponent.color-glyph': 4,
    'PangoRenderComponent.none': 0,
    'PangoRenderComponent.overline': 32,
    'PangoRenderComponent.plain-glyph': 2,
    'PangoRenderComponent.strikethrough': 16,
    'PangoRenderComponent.underline': 8,
    'PangoShapeFlags.none': 0,
    'PangoShapeFlags.round-positions': 1,
    'PangoShowFlags.ignorables': 4,
    'PangoShowFlags.line-breaks': 2,
    'PangoShowFlags.none': 0,
    'PangoShowFlags.spaces': 1,
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
