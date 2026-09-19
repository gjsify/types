// The widget vocabulary of Cogl-15 as runtime data.
//
// GENERATED — do not edit. Provenance: Cogl-15 — prop(s) no TypeScript value satisfies: Cogl.Framebuffer.driver-config Cogl.Texture.loader
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'Cogl',
    version: '15',
    libraryVersion: null,
    childHolders: 0,
    droppedBases: [],
    inlinedBases: [],
    unsettableProps: ['Cogl.Framebuffer.driver-config', 'Cogl.Texture.loader'],
    unresolvedProps: [],
    identifierPrefixes: ['Cogl'],
    requiredVocabularies: ['@girs/gobject-2.0/vocabulary'],
};

export const OWN_PROPS = {
    CoglBuffer: ['context', 'default-target', 'size', 'update-hint'],
    CoglFramebuffer: ['context', 'driver-config', 'height', 'width'],
    CoglTexture: ['context', 'format', 'height', 'loader', 'width'],
};

export const OWN_SIGNALS = {
    CoglFramebuffer: ['destroy'],
    CoglScanout: ['scanout-failed'],
};

// Every GType this namespace can INSTANTIATE -> the declarations its members come from.
//
// The key set is what a UI description file can name: a registered, non-abstract class.
// Not "every widget" — GtkBuilder resolves a name through `g_type_from_name`, which knows
// nothing about widgets, and a `.ui` file is full of `GtkSizeGroup`, `GtkTextTag`,
// `GtkEventController*` and `GtkCellRenderer*`. Use `Widgets` and `CHILD_HOLDERS`
// below for the narrower questions; they did not move.
export const DECLS = {
    CoglAtlas: ['CoglAtlas', 'GObject'],
    CoglAtlasTexture: ['CoglAtlasTexture', 'CoglTexture', 'GObject'],
    CoglAttribute: ['CoglAttribute', 'GObject'],
    CoglAttributeBuffer: ['CoglAttributeBuffer', 'CoglBuffer', 'GObject'],
    CoglBitmap: ['CoglBitmap', 'GObject'],
    CoglContext: ['CoglContext', 'GObject'],
    CoglDisplay: ['CoglDisplay', 'GObject'],
    CoglFrameInfo: ['CoglFrameInfo', 'GObject'],
    CoglIndexBuffer: ['CoglIndexBuffer', 'CoglBuffer', 'GObject'],
    CoglIndices: ['CoglIndices', 'GObject'],
    CoglMatrixStack: ['CoglMatrixStack', 'GObject'],
    CoglOffscreen: ['CoglOffscreen', 'CoglFramebuffer', 'GObject'],
    CoglOnscreen: ['CoglOnscreen', 'CoglFramebuffer', 'GObject'],
    CoglPipeline: ['CoglPipeline', 'GObject'],
    CoglPixelBuffer: ['CoglPixelBuffer', 'CoglBuffer', 'GObject'],
    CoglPrimitive: ['CoglPrimitive', 'GObject'],
    CoglProgram: ['CoglProgram', 'GObject'],
    CoglRenderer: ['CoglRenderer', 'GObject'],
    CoglScanout: ['CoglScanout', 'GObject'],
    CoglShader: ['CoglShader', 'GObject'],
    CoglSnippet: ['CoglSnippet', 'GObject'],
    CoglSubTexture: ['CoglSubTexture', 'CoglTexture', 'GObject'],
    CoglTexture2D: ['CoglTexture2D', 'CoglTexture', 'GObject'],
    CoglTexture2DSliced: ['CoglTexture2DSliced', 'CoglTexture', 'GObject'],
};

// The GTypes above that ARE widgets are the `Widgets` map in the sibling `.d.ts`; these
// are the ones that merely HOLD one, through `set_child`/`get_child`, descending from
// `GObject.Object`. A renderer places them like a container; a check asking "is this a
// widget" must not count them. Derived from the accessor pair, never from a list — the
// count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    CoglBufferBindTarget: ['pixel-pack', 'pixel-unpack', 'attribute-buffer', 'index-buffer', 'count'],
    CoglBufferUpdateHint: ['static', 'dynamic', 'stream'],
    CoglPixelFormat: ['any', 'a-8', 'rgb-565', 'rgba-4444', 'rgba-5551', 'yuv', 'r-8', 'rg-88', 'rgb-888', 'bgr-888', 'rgbx-8888', 'rgba-8888', 'bgrx-8888', 'bgra-8888', 'xrgb-8888', 'argb-8888', 'xbgr-8888', 'abgr-8888', 'rgba-8888-pre', 'bgra-8888-pre', 'argb-8888-pre', 'abgr-8888-pre', 'rgba-4444-pre', 'rgba-5551-pre', 'rgba-1010102', 'bgra-1010102', 'xrgb-2101010', 'argb-2101010', 'xbgr-2101010', 'abgr-2101010', 'rgba-1010102-pre', 'bgra-1010102-pre', 'argb-2101010-pre', 'abgr-2101010-pre', 'rgbx-fp-16161616', 'rgba-fp-16161616', 'bgrx-fp-16161616', 'bgra-fp-16161616', 'xrgb-fp-16161616', 'argb-fp-16161616', 'xbgr-fp-16161616', 'abgr-fp-16161616', 'rgba-fp-16161616-pre', 'bgra-fp-16161616-pre', 'argb-fp-16161616-pre', 'abgr-fp-16161616-pre', 'rgba-fp-32323232', 'rgba-fp-32323232-pre', 'r-16', 'rg-1616', 'rgba-16161616', 'rgba-16161616-pre', 'depth-16', 'depth-24-stencil-8'],
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
    'CoglBufferBindTarget.attribute-buffer': 2,
    'CoglBufferBindTarget.count': 4,
    'CoglBufferBindTarget.index-buffer': 3,
    'CoglBufferBindTarget.pixel-pack': 0,
    'CoglBufferBindTarget.pixel-unpack': 1,
    'CoglBufferUpdateHint.dynamic': 1,
    'CoglBufferUpdateHint.static': 0,
    'CoglBufferUpdateHint.stream': 2,
    'CoglPixelFormat.a-8': 17,
    'CoglPixelFormat.abgr-2101010': 125,
    'CoglPixelFormat.abgr-2101010-pre': 253,
    'CoglPixelFormat.abgr-8888': 115,
    'CoglPixelFormat.abgr-8888-pre': 243,
    'CoglPixelFormat.abgr-fp-16161616': 123,
    'CoglPixelFormat.abgr-fp-16161616-pre': 251,
    'CoglPixelFormat.any': 0,
    'CoglPixelFormat.argb-2101010': 93,
    'CoglPixelFormat.argb-2101010-pre': 221,
    'CoglPixelFormat.argb-8888': 83,
    'CoglPixelFormat.argb-8888-pre': 211,
    'CoglPixelFormat.argb-fp-16161616': 91,
    'CoglPixelFormat.argb-fp-16161616-pre': 219,
    'CoglPixelFormat.bgr-888': 34,
    'CoglPixelFormat.bgra-1010102': 61,
    'CoglPixelFormat.bgra-1010102-pre': 189,
    'CoglPixelFormat.bgra-8888': 51,
    'CoglPixelFormat.bgra-8888-pre': 179,
    'CoglPixelFormat.bgra-fp-16161616': 59,
    'CoglPixelFormat.bgra-fp-16161616-pre': 187,
    'CoglPixelFormat.bgrx-8888': 35,
    'CoglPixelFormat.bgrx-fp-16161616': 43,
    'CoglPixelFormat.depth-16': 265,
    'CoglPixelFormat.depth-24-stencil-8': 771,
    'CoglPixelFormat.r-16': 14,
    'CoglPixelFormat.r-8': 8,
    'CoglPixelFormat.rg-1616': 15,
    'CoglPixelFormat.rg-88': 9,
    'CoglPixelFormat.rgb-565': 4,
    'CoglPixelFormat.rgb-888': 2,
    'CoglPixelFormat.rgba-1010102': 29,
    'CoglPixelFormat.rgba-1010102-pre': 157,
    'CoglPixelFormat.rgba-16161616': 26,
    'CoglPixelFormat.rgba-16161616-pre': 154,
    'CoglPixelFormat.rgba-4444': 21,
    'CoglPixelFormat.rgba-4444-pre': 149,
    'CoglPixelFormat.rgba-5551': 22,
    'CoglPixelFormat.rgba-5551-pre': 150,
    'CoglPixelFormat.rgba-8888': 19,
    'CoglPixelFormat.rgba-8888-pre': 147,
    'CoglPixelFormat.rgba-fp-16161616': 27,
    'CoglPixelFormat.rgba-fp-16161616-pre': 155,
    'CoglPixelFormat.rgba-fp-32323232': 28,
    'CoglPixelFormat.rgba-fp-32323232-pre': 156,
    'CoglPixelFormat.rgbx-8888': 3,
    'CoglPixelFormat.rgbx-fp-16161616': 11,
    'CoglPixelFormat.xbgr-2101010': 109,
    'CoglPixelFormat.xbgr-8888': 99,
    'CoglPixelFormat.xbgr-fp-16161616': 107,
    'CoglPixelFormat.xrgb-2101010': 77,
    'CoglPixelFormat.xrgb-8888': 67,
    'CoglPixelFormat.xrgb-fp-16161616': 75,
    'CoglPixelFormat.yuv': 7,
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
    'CoglBufferAccess.read': 1,
    'CoglBufferAccess.read-write': 3,
    'CoglBufferAccess.write': 2,
    'CoglBufferMapHint.discard': 1,
    'CoglBufferMapHint.discard-range': 2,
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
    'CoglBuffer.default-target': 'CoglBufferBindTarget',
    'CoglBuffer.update-hint': 'CoglBufferUpdateHint',
    'CoglTexture.format': 'CoglPixelFormat',
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
