// The widget vocabulary of Vips-8.0 as runtime data.
//
// GENERATED — do not edit. Provenance: Vips-8.0 — library 8.18.3 — prop(s) no TypeScript value satisfies: Vips.Image.foreign-buffer
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'Vips',
    version: '8.0',
    libraryVersion: '8.18.3',
    childHolders: 0,
    droppedBases: [],
    inlinedBases: [],
    unsettableProps: ['Vips.Image.foreign-buffer'],
    unresolvedProps: [],
    identifierPrefixes: ['Vips'],
    requiredVocabularies: ['@girs/gio-2.0/vocabulary', '@girs/gobject-2.0/vocabulary'],
};

export const OWN_PROPS = {
    VipsConnection: ['descriptor', 'filename'],
    VipsGInputStream: ['input'],
    VipsImage: ['bands', 'coding', 'demand', 'filename', 'foreign-buffer', 'format', 'height', 'interpretation', 'kill', 'mode', 'sizeof-header', 'width', 'xoffset', 'xres', 'yoffset', 'yres'],
    VipsObject: ['description', 'nickname'],
    VipsSbuf: ['input'],
    VipsSource: ['blob'],
    VipsSourceGInputStream: ['stream'],
    VipsTarget: ['blob', 'memory'],
};

export const OWN_SIGNALS = {
    VipsImage: ['eval', 'invalidate', 'minimise', 'posteval', 'preeval', 'written'],
    VipsObject: ['close', 'postbuild', 'postclose', 'preclose'],
    VipsSourceCustom: ['read', 'seek'],
    VipsTargetCustom: ['end', 'finish', 'read', 'seek', 'write'],
};

// Every GType this namespace can INSTANTIATE -> the declarations its members come from.
//
// The key set is what a UI description file can name: a registered, non-abstract class.
// Not "every widget" — GtkBuilder resolves a name through `g_type_from_name`, which knows
// nothing about widgets, and a `.ui` file is full of `GtkSizeGroup`, `GtkTextTag`,
// `GtkEventController*` and `GtkCellRenderer*`. Use `Widgets` and `CHILD_HOLDERS`
// below for the narrower questions; they did not move.
export const DECLS = {
    VipsGInputStream: ['VipsGInputStream', 'GInputStream', 'GObject', 'GSeekable'],
    VipsImage: ['VipsImage', 'VipsObject', 'GObject'],
    VipsRegion: ['VipsRegion', 'VipsObject', 'GObject'],
    VipsSbuf: ['VipsSbuf', 'VipsObject', 'GObject'],
    VipsSource: ['VipsSource', 'VipsConnection', 'VipsObject', 'GObject'],
    VipsSourceCustom: ['VipsSourceCustom', 'VipsSource', 'VipsConnection', 'VipsObject', 'GObject'],
    VipsSourceGInputStream: ['VipsSourceGInputStream', 'VipsSource', 'VipsConnection', 'VipsObject', 'GObject'],
    VipsTarget: ['VipsTarget', 'VipsConnection', 'VipsObject', 'GObject'],
    VipsTargetCustom: ['VipsTargetCustom', 'VipsTarget', 'VipsConnection', 'VipsObject', 'GObject'],
    VipsThreadState: ['VipsThreadState', 'VipsObject', 'GObject'],
};

// The GTypes above that ARE widgets are the `Widgets` map in the sibling `.d.ts`; these
// are the ones that merely HOLD one, through `set_child`/`get_child`, descending from
// `GObject.Object`. A renderer places them like a container; a check asking "is this a
// widget" must not count them. Derived from the accessor pair, never from a list — the
// count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    VipsAccess: ['random', 'sequential', 'sequential-unbuffered'],
    VipsAlign: ['low', 'centre', 'high'],
    VipsAngle: ['d0', 'd90', 'd180', 'd270'],
    VipsAngle45: ['d0', 'd45', 'd90', 'd135', 'd180', 'd225', 'd270', 'd315'],
    VipsBandFormat: ['notset', 'uchar', 'char', 'ushort', 'short', 'uint', 'int', 'float', 'complex', 'double', 'dpcomplex'],
    VipsBlendMode: ['clear', 'source', 'over', 'in', 'out', 'atop', 'dest', 'dest-over', 'dest-in', 'dest-out', 'dest-atop', 'xor', 'add', 'saturate', 'multiply', 'screen', 'overlay', 'darken', 'lighten', 'colour-dodge', 'colour-burn', 'hard-light', 'soft-light', 'difference', 'exclusion'],
    VipsCoding: ['error', 'none', 'labq', 'rad'],
    VipsCombine: ['max', 'sum', 'min'],
    VipsCombineMode: ['set', 'add'],
    VipsCompassDirection: ['centre', 'north', 'east', 'south', 'west', 'north-east', 'south-east', 'south-west', 'north-west'],
    VipsDemandStyle: ['error', 'smalltile', 'fatstrip', 'thinstrip', 'any'],
    VipsDirection: ['horizontal', 'vertical'],
    VipsExtend: ['black', 'copy', 'repeat', 'mirror', 'white', 'background'],
    VipsFailOn: ['none', 'truncated', 'error', 'warning'],
    VipsForeignDzContainer: ['fs', 'zip', 'szi'],
    VipsForeignDzDepth: ['onepixel', 'onetile', 'one'],
    VipsForeignDzLayout: ['dz', 'zoomify', 'google', 'iiif', 'iiif3'],
    VipsForeignHeifCompression: ['hevc', 'avc', 'jpeg', 'av1'],
    VipsForeignHeifEncoder: ['auto', 'aom', 'rav1e', 'svt', 'x265'],
    VipsForeignJpegSubsample: ['auto', 'on', 'off'],
    VipsForeignPdfPageBox: ['media', 'crop', 'trim', 'bleed', 'art'],
    VipsForeignPpmFormat: ['pbm', 'pgm', 'ppm', 'pfm', 'pnm'],
    VipsForeignSubsample: ['auto', 'on', 'off'],
    VipsForeignTiffCompression: ['none', 'jpeg', 'deflate', 'packbits', 'ccittfax4', 'lzw', 'webp', 'zstd', 'jp2k'],
    VipsForeignTiffPredictor: ['none', 'horizontal', 'float'],
    VipsForeignTiffResunit: ['cm', 'inch'],
    VipsForeignWebpPreset: ['default', 'picture', 'photo', 'drawing', 'icon', 'text'],
    VipsImageType: ['error', 'none', 'setbuf', 'setbuf-foreign', 'openin', 'mmapin', 'mmapinrw', 'openout', 'partial'],
    VipsIntent: ['perceptual', 'relative', 'saturation', 'absolute', 'auto'],
    VipsInteresting: ['none', 'centre', 'entropy', 'attention', 'low', 'high', 'all'],
    VipsInterpretation: ['error', 'multiband', 'b-w', 'histogram', 'xyz', 'lab', 'cmyk', 'labq', 'rgb', 'cmc', 'lch', 'labs', 'srgb', 'yxy', 'fourier', 'rgb16', 'grey16', 'matrix', 'scrgb', 'hsv', 'oklab', 'oklch'],
    VipsKernel: ['nearest', 'linear', 'cubic', 'mitchell', 'lanczos2', 'lanczos3', 'mks2013', 'mks2021'],
    VipsOperationBoolean: ['and', 'or', 'eor', 'lshift', 'rshift'],
    VipsOperationComplex: ['polar', 'rect', 'conj'],
    VipsOperationComplex2: ['cross-phase'],
    VipsOperationComplexget: ['real', 'imag'],
    VipsOperationMath: ['sin', 'cos', 'tan', 'asin', 'acos', 'atan', 'log', 'log10', 'exp', 'exp10', 'sinh', 'cosh', 'tanh', 'asinh', 'acosh', 'atanh'],
    VipsOperationMath2: ['pow', 'wop', 'atan2'],
    VipsOperationMorphology: ['erode', 'dilate'],
    VipsOperationRelational: ['equal', 'noteq', 'less', 'lesseq', 'more', 'moreeq'],
    VipsOperationRound: ['rint', 'ceil', 'floor'],
    VipsPCS: ['lab', 'xyz'],
    VipsPrecision: ['integer', 'float', 'approximate'],
    VipsRegionShrink: ['mean', 'median', 'mode', 'max', 'min', 'nearest'],
    VipsSdfShape: ['circle', 'box', 'rounded-box', 'line'],
    VipsSize: ['both', 'up', 'down', 'force'],
    VipsTextWrap: ['word', 'char', 'word-char', 'none'],
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
    'VipsAccess.random': 0,
    'VipsAccess.sequential': 1,
    'VipsAccess.sequential-unbuffered': 2,
    'VipsAlign.centre': 1,
    'VipsAlign.high': 2,
    'VipsAlign.low': 0,
    'VipsAngle.d0': 0,
    'VipsAngle.d180': 2,
    'VipsAngle.d270': 3,
    'VipsAngle.d90': 1,
    'VipsAngle45.d0': 0,
    'VipsAngle45.d135': 3,
    'VipsAngle45.d180': 4,
    'VipsAngle45.d225': 5,
    'VipsAngle45.d270': 6,
    'VipsAngle45.d315': 7,
    'VipsAngle45.d45': 1,
    'VipsAngle45.d90': 2,
    'VipsBandFormat.char': 1,
    'VipsBandFormat.complex': 7,
    'VipsBandFormat.double': 8,
    'VipsBandFormat.dpcomplex': 9,
    'VipsBandFormat.float': 6,
    'VipsBandFormat.int': 5,
    'VipsBandFormat.notset': -1,
    'VipsBandFormat.short': 3,
    'VipsBandFormat.uchar': 0,
    'VipsBandFormat.uint': 4,
    'VipsBandFormat.ushort': 2,
    'VipsBlendMode.add': 12,
    'VipsBlendMode.atop': 5,
    'VipsBlendMode.clear': 0,
    'VipsBlendMode.colour-burn': 20,
    'VipsBlendMode.colour-dodge': 19,
    'VipsBlendMode.darken': 17,
    'VipsBlendMode.dest': 6,
    'VipsBlendMode.dest-atop': 10,
    'VipsBlendMode.dest-in': 8,
    'VipsBlendMode.dest-out': 9,
    'VipsBlendMode.dest-over': 7,
    'VipsBlendMode.difference': 23,
    'VipsBlendMode.exclusion': 24,
    'VipsBlendMode.hard-light': 21,
    'VipsBlendMode.in': 3,
    'VipsBlendMode.lighten': 18,
    'VipsBlendMode.multiply': 14,
    'VipsBlendMode.out': 4,
    'VipsBlendMode.over': 2,
    'VipsBlendMode.overlay': 16,
    'VipsBlendMode.saturate': 13,
    'VipsBlendMode.screen': 15,
    'VipsBlendMode.soft-light': 22,
    'VipsBlendMode.source': 1,
    'VipsBlendMode.xor': 11,
    'VipsCoding.error': -1,
    'VipsCoding.labq': 2,
    'VipsCoding.none': 0,
    'VipsCoding.rad': 6,
    'VipsCombine.max': 0,
    'VipsCombine.min': 2,
    'VipsCombine.sum': 1,
    'VipsCombineMode.add': 1,
    'VipsCombineMode.set': 0,
    'VipsCompassDirection.centre': 0,
    'VipsCompassDirection.east': 2,
    'VipsCompassDirection.north': 1,
    'VipsCompassDirection.north-east': 5,
    'VipsCompassDirection.north-west': 8,
    'VipsCompassDirection.south': 3,
    'VipsCompassDirection.south-east': 6,
    'VipsCompassDirection.south-west': 7,
    'VipsCompassDirection.west': 4,
    'VipsDemandStyle.any': 3,
    'VipsDemandStyle.error': -1,
    'VipsDemandStyle.fatstrip': 1,
    'VipsDemandStyle.smalltile': 0,
    'VipsDemandStyle.thinstrip': 2,
    'VipsDirection.horizontal': 0,
    'VipsDirection.vertical': 1,
    'VipsExtend.background': 5,
    'VipsExtend.black': 0,
    'VipsExtend.copy': 1,
    'VipsExtend.mirror': 3,
    'VipsExtend.repeat': 2,
    'VipsExtend.white': 4,
    'VipsFailOn.error': 2,
    'VipsFailOn.none': 0,
    'VipsFailOn.truncated': 1,
    'VipsFailOn.warning': 3,
    'VipsForeignDzContainer.fs': 0,
    'VipsForeignDzContainer.szi': 2,
    'VipsForeignDzContainer.zip': 1,
    'VipsForeignDzDepth.one': 2,
    'VipsForeignDzDepth.onepixel': 0,
    'VipsForeignDzDepth.onetile': 1,
    'VipsForeignDzLayout.dz': 0,
    'VipsForeignDzLayout.google': 2,
    'VipsForeignDzLayout.iiif': 3,
    'VipsForeignDzLayout.iiif3': 4,
    'VipsForeignDzLayout.zoomify': 1,
    'VipsForeignHeifCompression.av1': 4,
    'VipsForeignHeifCompression.avc': 2,
    'VipsForeignHeifCompression.hevc': 1,
    'VipsForeignHeifCompression.jpeg': 3,
    'VipsForeignHeifEncoder.aom': 1,
    'VipsForeignHeifEncoder.auto': 0,
    'VipsForeignHeifEncoder.rav1e': 2,
    'VipsForeignHeifEncoder.svt': 3,
    'VipsForeignHeifEncoder.x265': 4,
    'VipsForeignJpegSubsample.auto': 0,
    'VipsForeignJpegSubsample.off': 2,
    'VipsForeignJpegSubsample.on': 1,
    'VipsForeignPdfPageBox.art': 4,
    'VipsForeignPdfPageBox.bleed': 3,
    'VipsForeignPdfPageBox.crop': 1,
    'VipsForeignPdfPageBox.media': 0,
    'VipsForeignPdfPageBox.trim': 2,
    'VipsForeignPpmFormat.pbm': 0,
    'VipsForeignPpmFormat.pfm': 3,
    'VipsForeignPpmFormat.pgm': 1,
    'VipsForeignPpmFormat.pnm': 4,
    'VipsForeignPpmFormat.ppm': 2,
    'VipsForeignSubsample.auto': 0,
    'VipsForeignSubsample.off': 2,
    'VipsForeignSubsample.on': 1,
    'VipsForeignTiffCompression.ccittfax4': 4,
    'VipsForeignTiffCompression.deflate': 2,
    'VipsForeignTiffCompression.jp2k': 8,
    'VipsForeignTiffCompression.jpeg': 1,
    'VipsForeignTiffCompression.lzw': 5,
    'VipsForeignTiffCompression.none': 0,
    'VipsForeignTiffCompression.packbits': 3,
    'VipsForeignTiffCompression.webp': 6,
    'VipsForeignTiffCompression.zstd': 7,
    'VipsForeignTiffPredictor.float': 3,
    'VipsForeignTiffPredictor.horizontal': 2,
    'VipsForeignTiffPredictor.none': 1,
    'VipsForeignTiffResunit.cm': 0,
    'VipsForeignTiffResunit.inch': 1,
    'VipsForeignWebpPreset.default': 0,
    'VipsForeignWebpPreset.drawing': 3,
    'VipsForeignWebpPreset.icon': 4,
    'VipsForeignWebpPreset.photo': 2,
    'VipsForeignWebpPreset.picture': 1,
    'VipsForeignWebpPreset.text': 5,
    'VipsImageType.error': -1,
    'VipsImageType.mmapin': 4,
    'VipsImageType.mmapinrw': 5,
    'VipsImageType.none': 0,
    'VipsImageType.openin': 3,
    'VipsImageType.openout': 6,
    'VipsImageType.partial': 7,
    'VipsImageType.setbuf': 1,
    'VipsImageType.setbuf-foreign': 2,
    'VipsIntent.absolute': 3,
    'VipsIntent.auto': 32,
    'VipsIntent.perceptual': 0,
    'VipsIntent.relative': 1,
    'VipsIntent.saturation': 2,
    'VipsInteresting.all': 6,
    'VipsInteresting.attention': 3,
    'VipsInteresting.centre': 1,
    'VipsInteresting.entropy': 2,
    'VipsInteresting.high': 5,
    'VipsInteresting.low': 4,
    'VipsInteresting.none': 0,
    'VipsInterpretation.b-w': 1,
    'VipsInterpretation.cmc': 18,
    'VipsInterpretation.cmyk': 15,
    'VipsInterpretation.error': -1,
    'VipsInterpretation.fourier': 24,
    'VipsInterpretation.grey16': 26,
    'VipsInterpretation.histogram': 10,
    'VipsInterpretation.hsv': 29,
    'VipsInterpretation.lab': 13,
    'VipsInterpretation.labq': 16,
    'VipsInterpretation.labs': 21,
    'VipsInterpretation.lch': 19,
    'VipsInterpretation.matrix': 27,
    'VipsInterpretation.multiband': 0,
    'VipsInterpretation.oklab': 30,
    'VipsInterpretation.oklch': 31,
    'VipsInterpretation.rgb': 17,
    'VipsInterpretation.rgb16': 25,
    'VipsInterpretation.scrgb': 28,
    'VipsInterpretation.srgb': 22,
    'VipsInterpretation.xyz': 12,
    'VipsInterpretation.yxy': 23,
    'VipsKernel.cubic': 2,
    'VipsKernel.lanczos2': 4,
    'VipsKernel.lanczos3': 5,
    'VipsKernel.linear': 1,
    'VipsKernel.mitchell': 3,
    'VipsKernel.mks2013': 6,
    'VipsKernel.mks2021': 7,
    'VipsKernel.nearest': 0,
    'VipsOperationBoolean.and': 0,
    'VipsOperationBoolean.eor': 2,
    'VipsOperationBoolean.lshift': 3,
    'VipsOperationBoolean.or': 1,
    'VipsOperationBoolean.rshift': 4,
    'VipsOperationComplex.conj': 2,
    'VipsOperationComplex.polar': 0,
    'VipsOperationComplex.rect': 1,
    'VipsOperationComplex2.cross-phase': 0,
    'VipsOperationComplexget.imag': 1,
    'VipsOperationComplexget.real': 0,
    'VipsOperationMath.acos': 4,
    'VipsOperationMath.acosh': 14,
    'VipsOperationMath.asin': 3,
    'VipsOperationMath.asinh': 13,
    'VipsOperationMath.atan': 5,
    'VipsOperationMath.atanh': 15,
    'VipsOperationMath.cos': 1,
    'VipsOperationMath.cosh': 11,
    'VipsOperationMath.exp': 8,
    'VipsOperationMath.exp10': 9,
    'VipsOperationMath.log': 6,
    'VipsOperationMath.log10': 7,
    'VipsOperationMath.sin': 0,
    'VipsOperationMath.sinh': 10,
    'VipsOperationMath.tan': 2,
    'VipsOperationMath.tanh': 12,
    'VipsOperationMath2.atan2': 2,
    'VipsOperationMath2.pow': 0,
    'VipsOperationMath2.wop': 1,
    'VipsOperationMorphology.dilate': 1,
    'VipsOperationMorphology.erode': 0,
    'VipsOperationRelational.equal': 0,
    'VipsOperationRelational.less': 2,
    'VipsOperationRelational.lesseq': 3,
    'VipsOperationRelational.more': 4,
    'VipsOperationRelational.moreeq': 5,
    'VipsOperationRelational.noteq': 1,
    'VipsOperationRound.ceil': 1,
    'VipsOperationRound.floor': 2,
    'VipsOperationRound.rint': 0,
    'VipsPCS.lab': 0,
    'VipsPCS.xyz': 1,
    'VipsPrecision.approximate': 2,
    'VipsPrecision.float': 1,
    'VipsPrecision.integer': 0,
    'VipsRegionShrink.max': 3,
    'VipsRegionShrink.mean': 0,
    'VipsRegionShrink.median': 1,
    'VipsRegionShrink.min': 4,
    'VipsRegionShrink.mode': 2,
    'VipsRegionShrink.nearest': 5,
    'VipsSdfShape.box': 1,
    'VipsSdfShape.circle': 0,
    'VipsSdfShape.line': 3,
    'VipsSdfShape.rounded-box': 2,
    'VipsSize.both': 0,
    'VipsSize.down': 2,
    'VipsSize.force': 3,
    'VipsSize.up': 1,
    'VipsTextWrap.char': 1,
    'VipsTextWrap.none': 3,
    'VipsTextWrap.word': 0,
    'VipsTextWrap.word-char': 2,
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
    'VipsArgumentFlags.construct': 2,
    'VipsArgumentFlags.deprecated': 64,
    'VipsArgumentFlags.input': 16,
    'VipsArgumentFlags.modify': 128,
    'VipsArgumentFlags.non-hashable': 256,
    'VipsArgumentFlags.none': 0,
    'VipsArgumentFlags.output': 32,
    'VipsArgumentFlags.required': 1,
    'VipsArgumentFlags.set-always': 8,
    'VipsArgumentFlags.set-once': 4,
    'VipsForeignCoding.all': 7,
    'VipsForeignCoding.labq': 2,
    'VipsForeignCoding.none': 1,
    'VipsForeignCoding.rad': 4,
    'VipsForeignFlags.all': 7,
    'VipsForeignFlags.bigendian': 2,
    'VipsForeignFlags.none': 0,
    'VipsForeignFlags.partial': 1,
    'VipsForeignFlags.sequential': 4,
    'VipsForeignKeep.all': 63,
    'VipsForeignKeep.exif': 1,
    'VipsForeignKeep.gainmap': 32,
    'VipsForeignKeep.icc': 8,
    'VipsForeignKeep.iptc': 4,
    'VipsForeignKeep.none': 0,
    'VipsForeignKeep.other': 16,
    'VipsForeignKeep.xmp': 2,
    'VipsForeignPngFilter.all': 248,
    'VipsForeignPngFilter.avg': 64,
    'VipsForeignPngFilter.none': 8,
    'VipsForeignPngFilter.paeth': 128,
    'VipsForeignPngFilter.sub': 16,
    'VipsForeignPngFilter.up': 32,
    'VipsForeignSaveable.all': 15,
    'VipsForeignSaveable.alpha': 8,
    'VipsForeignSaveable.any': 0,
    'VipsForeignSaveable.cmyk': 4,
    'VipsForeignSaveable.mono': 1,
    'VipsForeignSaveable.rgb': 2,
    'VipsOperationFlags.blocked': 32,
    'VipsOperationFlags.deprecated': 8,
    'VipsOperationFlags.nocache': 4,
    'VipsOperationFlags.none': 0,
    'VipsOperationFlags.revalidate': 64,
    'VipsOperationFlags.sequential': 1,
    'VipsOperationFlags.sequential-unbuffered': 2,
    'VipsOperationFlags.untrusted': 16,
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
    'VipsImage.coding': 'VipsCoding',
    'VipsImage.demand': 'VipsDemandStyle',
    'VipsImage.format': 'VipsBandFormat',
    'VipsImage.interpretation': 'VipsInterpretation',
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
    'VipsConnection.descriptor': 'gint',
    'VipsConnection.filename': 'gchararray',
    'VipsGInputStream.input': 'VipsSource',
    'VipsImage.bands': 'gint',
    'VipsImage.coding': 'VipsCoding',
    'VipsImage.demand': 'VipsDemandStyle',
    'VipsImage.filename': 'gchararray',
    'VipsImage.foreign-buffer': 'gpointer',
    'VipsImage.format': 'VipsBandFormat',
    'VipsImage.height': 'gint',
    'VipsImage.interpretation': 'VipsInterpretation',
    'VipsImage.kill': 'gboolean',
    'VipsImage.mode': 'gchararray',
    'VipsImage.sizeof-header': 'guint64',
    'VipsImage.width': 'gint',
    'VipsImage.xoffset': 'gint',
    'VipsImage.xres': 'gdouble',
    'VipsImage.yoffset': 'gint',
    'VipsImage.yres': 'gdouble',
    'VipsObject.description': 'gchararray',
    'VipsObject.nickname': 'gchararray',
    'VipsSbuf.input': 'VipsSource',
    'VipsSourceGInputStream.stream': 'GInputStream',
    'VipsTarget.memory': 'gboolean',
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
