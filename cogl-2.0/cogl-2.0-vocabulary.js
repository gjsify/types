// The widget vocabulary of Cogl-2.0 as runtime data.
//
// GENERATED — do not edit. Provenance: Cogl-2.0
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'Cogl',
    version: '2.0',
    libraryVersion: null,
    childHolders: 0,
    droppedBases: [],
    inlinedBases: [],
    unsettableProps: [],
    unresolvedProps: [],
    identifierPrefixes: ['Cogl'],
    requiredVocabularies: [],
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
    CoglAtlasTexture: ['CoglAtlasTexture', 'CoglObject'],
    CoglAttribute: ['CoglAttribute', 'CoglObject'],
    CoglAttributeBuffer: ['CoglAttributeBuffer', 'CoglObject'],
    CoglBitmap: ['CoglBitmap', 'CoglObject'],
    CoglContext: ['CoglContext', 'CoglObject'],
    CoglDisplay: ['CoglDisplay', 'CoglObject'],
    CoglFixed: ['CoglFixed'],
    CoglFrameInfo: ['CoglFrameInfo', 'CoglObject'],
    CoglGLES2Context: ['CoglGLES2Context', 'CoglObject'],
    CoglIndexBuffer: ['CoglIndexBuffer', 'CoglObject'],
    CoglIndices: ['CoglIndices', 'CoglObject'],
    CoglMatrixStack: ['CoglMatrixStack', 'CoglObject'],
    CoglOnscreen: ['CoglOnscreen', 'CoglObject', 'CoglFramebuffer'],
    CoglOnscreenTemplate: ['CoglOnscreenTemplate', 'CoglObject'],
    CoglOutput: ['CoglOutput', 'CoglObject'],
    CoglPipeline: ['CoglPipeline', 'CoglObject'],
    CoglPixelBuffer: ['CoglPixelBuffer', 'CoglObject'],
    CoglPrimitive: ['CoglPrimitive', 'CoglObject'],
    CoglRenderer: ['CoglRenderer', 'CoglObject'],
    CoglSnippet: ['CoglSnippet', 'CoglObject'],
    CoglSubTexture: ['CoglSubTexture', 'CoglObject'],
    CoglSwapChain: ['CoglSwapChain', 'CoglObject'],
    CoglTexture2D: ['CoglTexture2D', 'CoglObject', 'CoglTexture'],
    CoglTexture2DSliced: ['CoglTexture2DSliced', 'CoglObject', 'CoglTexture'],
    CoglTexture3D: ['CoglTexture3D', 'CoglObject', 'CoglTexture'],
    CoglTexturePixmapX11: ['CoglTexturePixmapX11', 'CoglObject'],
    CoglTextureRectangle: ['CoglTextureRectangle', 'CoglObject', 'CoglTexture'],
};

// The GTypes above that ARE widgets are the `Widgets` map in the sibling `.d.ts`; these
// are the ones that merely HOLD one, through `set_child`/`get_child`, descending from
// `GObject.Object`. A renderer places them like a container; a check asking "is this a
// widget" must not count them. Derived from the accessor pair, never from a list — the
// count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    CoglAttributeType: ['byte', 'unsigned-byte', 'short', 'unsigned-short', 'float'],
    CoglBitmapError: ['failed', 'unknown-type', 'corrupt-image'],
    CoglBlendStringError: ['parse-error', 'argument-parse-error', 'invalid-error', 'gpu-unsupported-error'],
    CoglDepthTestFunction: ['never', 'less', 'equal', 'lequal', 'greater', 'notequal', 'gequal', 'always'],
    CoglFilterReturn: ['continue', 'remove'],
    CoglFogMode: ['linear', 'exponential', 'exponential-squared'],
    CoglIndicesType: ['byte', 'short', 'int'],
    CoglMaterialAlphaFunc: ['never', 'less', 'equal', 'lequal', 'greater', 'notequal', 'gequal', 'always'],
    CoglMaterialFilter: ['nearest', 'linear', 'nearest-mipmap-nearest', 'linear-mipmap-nearest', 'nearest-mipmap-linear', 'linear-mipmap-linear'],
    CoglMaterialLayerType: ['texture'],
    CoglMaterialWrapMode: ['repeat', 'clamp-to-edge', 'automatic'],
    CoglPixelFormat: ['any', 'a-8', 'rgb-565', 'rgba-4444', 'rgba-5551', 'yuv', 'g-8', 'rg-88', 'rgb-888', 'bgr-888', 'rgba-8888', 'bgra-8888', 'argb-8888', 'abgr-8888', 'rgba-1010102', 'bgra-1010102', 'argb-2101010', 'abgr-2101010', 'rgba-8888-pre', 'bgra-8888-pre', 'argb-8888-pre', 'abgr-8888-pre', 'rgba-4444-pre', 'rgba-5551-pre', 'rgba-1010102-pre', 'bgra-1010102-pre', 'argb-2101010-pre', 'abgr-2101010-pre', 'depth-16', 'depth-32', 'depth-24-stencil-8'],
    CoglRendererError: ['xlib-display-open', 'bad-constraint'],
    CoglShaderType: ['vertex', 'fragment'],
    CoglStereoMode: ['both', 'left', 'right'],
    CoglSystemError: ['cogl-system-error-unsupported', 'cogl-system-error-no-memory'],
    CoglTextureComponents: ['a', 'rg', 'rgb', 'rgba', 'depth'],
    CoglTextureError: ['size', 'format', 'bad-parameter', 'type'],
    CoglTextureType: ['2d', '3d', 'rectangle'],
    CoglVerticesMode: ['points', 'lines', 'line-loop', 'line-strip', 'triangles', 'triangle-strip', 'triangle-fan'],
    CoglWinding: ['clockwise', 'counter-clockwise'],
    CoglWinsysFeature: ['multiple-onscreen', 'swap-throttle', 'vblank-counter', 'vblank-wait', 'texture-from-pixmap', 'swap-buffers-event', 'swap-region', 'swap-region-throttle', 'swap-region-synchronized', 'buffer-age', 'sync-and-complete-event', 'n-features'],
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
    'CoglAttributeType.byte': 5120,
    'CoglAttributeType.float': 5126,
    'CoglAttributeType.short': 5122,
    'CoglAttributeType.unsigned-byte': 5121,
    'CoglAttributeType.unsigned-short': 5123,
    'CoglBitmapError.corrupt-image': 2,
    'CoglBitmapError.failed': 0,
    'CoglBitmapError.unknown-type': 1,
    'CoglBlendStringError.argument-parse-error': 1,
    'CoglBlendStringError.gpu-unsupported-error': 3,
    'CoglBlendStringError.invalid-error': 2,
    'CoglBlendStringError.parse-error': 0,
    'CoglDepthTestFunction.always': 519,
    'CoglDepthTestFunction.equal': 514,
    'CoglDepthTestFunction.gequal': 518,
    'CoglDepthTestFunction.greater': 516,
    'CoglDepthTestFunction.lequal': 515,
    'CoglDepthTestFunction.less': 513,
    'CoglDepthTestFunction.never': 512,
    'CoglDepthTestFunction.notequal': 517,
    'CoglFilterReturn.continue': 0,
    'CoglFilterReturn.remove': 1,
    'CoglFogMode.exponential': 1,
    'CoglFogMode.exponential-squared': 2,
    'CoglFogMode.linear': 0,
    'CoglIndicesType.byte': 0,
    'CoglIndicesType.int': 2,
    'CoglIndicesType.short': 1,
    'CoglMaterialAlphaFunc.always': 519,
    'CoglMaterialAlphaFunc.equal': 514,
    'CoglMaterialAlphaFunc.gequal': 518,
    'CoglMaterialAlphaFunc.greater': 516,
    'CoglMaterialAlphaFunc.lequal': 515,
    'CoglMaterialAlphaFunc.less': 513,
    'CoglMaterialAlphaFunc.never': 512,
    'CoglMaterialAlphaFunc.notequal': 517,
    'CoglMaterialFilter.linear': 9729,
    'CoglMaterialFilter.linear-mipmap-linear': 9987,
    'CoglMaterialFilter.linear-mipmap-nearest': 9985,
    'CoglMaterialFilter.nearest': 9728,
    'CoglMaterialFilter.nearest-mipmap-linear': 9986,
    'CoglMaterialFilter.nearest-mipmap-nearest': 9984,
    'CoglMaterialLayerType.texture': 0,
    'CoglMaterialWrapMode.automatic': 519,
    'CoglMaterialWrapMode.clamp-to-edge': 33071,
    'CoglMaterialWrapMode.repeat': 10497,
    'CoglPixelFormat.a-8': 17,
    'CoglPixelFormat.abgr-2101010': 125,
    'CoglPixelFormat.abgr-2101010-pre': 253,
    'CoglPixelFormat.abgr-8888': 115,
    'CoglPixelFormat.abgr-8888-pre': 243,
    'CoglPixelFormat.any': 0,
    'CoglPixelFormat.argb-2101010': 93,
    'CoglPixelFormat.argb-2101010-pre': 221,
    'CoglPixelFormat.argb-8888': 83,
    'CoglPixelFormat.argb-8888-pre': 211,
    'CoglPixelFormat.bgr-888': 34,
    'CoglPixelFormat.bgra-1010102': 61,
    'CoglPixelFormat.bgra-1010102-pre': 189,
    'CoglPixelFormat.bgra-8888': 51,
    'CoglPixelFormat.bgra-8888-pre': 179,
    'CoglPixelFormat.depth-16': 265,
    'CoglPixelFormat.depth-24-stencil-8': 771,
    'CoglPixelFormat.depth-32': 259,
    'CoglPixelFormat.g-8': 8,
    'CoglPixelFormat.rg-88': 9,
    'CoglPixelFormat.rgb-565': 4,
    'CoglPixelFormat.rgb-888': 2,
    'CoglPixelFormat.rgba-1010102': 29,
    'CoglPixelFormat.rgba-1010102-pre': 157,
    'CoglPixelFormat.rgba-4444': 21,
    'CoglPixelFormat.rgba-4444-pre': 149,
    'CoglPixelFormat.rgba-5551': 22,
    'CoglPixelFormat.rgba-5551-pre': 150,
    'CoglPixelFormat.rgba-8888': 19,
    'CoglPixelFormat.rgba-8888-pre': 147,
    'CoglPixelFormat.yuv': 7,
    'CoglRendererError.bad-constraint': 1,
    'CoglRendererError.xlib-display-open': 0,
    'CoglShaderType.fragment': 1,
    'CoglShaderType.vertex': 0,
    'CoglStereoMode.both': 0,
    'CoglStereoMode.left': 1,
    'CoglStereoMode.right': 2,
    'CoglSystemError.cogl-system-error-no-memory': 1,
    'CoglSystemError.cogl-system-error-unsupported': 0,
    'CoglTextureComponents.a': 1,
    'CoglTextureComponents.depth': 5,
    'CoglTextureComponents.rg': 2,
    'CoglTextureComponents.rgb': 3,
    'CoglTextureComponents.rgba': 4,
    'CoglTextureError.bad-parameter': 2,
    'CoglTextureError.format': 1,
    'CoglTextureError.size': 0,
    'CoglTextureError.type': 3,
    'CoglTextureType.2d': 0,
    'CoglTextureType.3d': 1,
    'CoglTextureType.rectangle': 2,
    'CoglVerticesMode.line-loop': 2,
    'CoglVerticesMode.line-strip': 3,
    'CoglVerticesMode.lines': 1,
    'CoglVerticesMode.points': 0,
    'CoglVerticesMode.triangle-fan': 6,
    'CoglVerticesMode.triangle-strip': 5,
    'CoglVerticesMode.triangles': 4,
    'CoglWinding.clockwise': 0,
    'CoglWinding.counter-clockwise': 1,
    'CoglWinsysFeature.buffer-age': 9,
    'CoglWinsysFeature.multiple-onscreen': 0,
    'CoglWinsysFeature.n-features': 11,
    'CoglWinsysFeature.swap-buffers-event': 5,
    'CoglWinsysFeature.swap-region': 6,
    'CoglWinsysFeature.swap-region-synchronized': 8,
    'CoglWinsysFeature.swap-region-throttle': 7,
    'CoglWinsysFeature.swap-throttle': 1,
    'CoglWinsysFeature.sync-and-complete-event': 10,
    'CoglWinsysFeature.texture-from-pixmap': 4,
    'CoglWinsysFeature.vblank-counter': 2,
    'CoglWinsysFeature.vblank-wait': 3,
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
    'CoglBufferBit.color': 1,
    'CoglBufferBit.depth': 2,
    'CoglBufferBit.stencil': 4,
    'CoglBufferTarget.offscreen-buffer': 4,
    'CoglBufferTarget.window-buffer': 2,
    'CoglColorMask.all': 15,
    'CoglColorMask.alpha': 8,
    'CoglColorMask.blue': 4,
    'CoglColorMask.green': 2,
    'CoglColorMask.none': 0,
    'CoglColorMask.red': 1,
    'CoglFeatureFlags.depth-range': 16384,
    'CoglFeatureFlags.depth-texture': 16777216,
    'CoglFeatureFlags.four-clip-planes': 512,
    'CoglFeatureFlags.map-buffer-for-read': 2097152,
    'CoglFeatureFlags.map-buffer-for-write': 4194304,
    'CoglFeatureFlags.offscreen': 64,
    'CoglFeatureFlags.offscreen-blit': 256,
    'CoglFeatureFlags.offscreen-multisample': 128,
    'CoglFeatureFlags.onscreen-multiple': 8388608,
    'CoglFeatureFlags.pbos': 4096,
    'CoglFeatureFlags.point-sprite': 262144,
    'CoglFeatureFlags.shader-texture-lod': 33554432,
    'CoglFeatureFlags.shaders-arbfp': 1048576,
    'CoglFeatureFlags.shaders-glsl': 32,
    'CoglFeatureFlags.stencil-buffer': 1024,
    'CoglFeatureFlags.texture-3d': 524288,
    'CoglFeatureFlags.texture-npot': 4,
    'CoglFeatureFlags.texture-npot-basic': 32768,
    'CoglFeatureFlags.texture-npot-mipmap': 65536,
    'CoglFeatureFlags.texture-npot-repeat': 131072,
    'CoglFeatureFlags.texture-read-pixels': 16,
    'CoglFeatureFlags.texture-rectangle': 2,
    'CoglFeatureFlags.texture-yuv': 8,
    'CoglFeatureFlags.unsigned-int-indices': 8192,
    'CoglFeatureFlags.vbos': 2048,
    'CoglReadPixelsFlags.color-buffer': 1,
    'CoglTextureFlags.no-atlas': 4,
    'CoglTextureFlags.no-auto-mipmap': 1,
    'CoglTextureFlags.no-slicing': 2,
    'CoglTextureFlags.none': 0,
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

export const SINCE = {
    'CoglGLES2Context': '1.12',
};
