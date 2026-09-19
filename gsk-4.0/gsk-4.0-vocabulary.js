// The widget vocabulary of Gsk-4.0 as runtime data.
//
// GENERATED — do not edit. Provenance: Gsk-4.0
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'Gsk',
    version: '4.0',
    libraryVersion: null,
    childHolders: 0,
    droppedBases: [],
    inlinedBases: [],
    unsettableProps: [],
    unresolvedProps: [],
    identifierPrefixes: ['Gsk'],
    requiredVocabularies: ['@girs/gobject-2.0/vocabulary'],
};

export const OWN_PROPS = {
    GskGLShader: ['resource', 'source'],
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
    GskBlendNode: ['GskBlendNode', 'GskRenderNode'],
    GskBlurNode: ['GskBlurNode', 'GskRenderNode'],
    GskBorderNode: ['GskBorderNode', 'GskRenderNode'],
    GskBroadwayRenderer: ['GskBroadwayRenderer', 'GskRenderer', 'GObject'],
    GskCairoNode: ['GskCairoNode', 'GskRenderNode'],
    GskCairoRenderer: ['GskCairoRenderer', 'GskRenderer', 'GObject'],
    GskClipNode: ['GskClipNode', 'GskRenderNode'],
    GskColorMatrixNode: ['GskColorMatrixNode', 'GskRenderNode'],
    GskColorNode: ['GskColorNode', 'GskRenderNode'],
    GskComponentTransferNode: ['GskComponentTransferNode', 'GskRenderNode'],
    GskCompositeNode: ['GskCompositeNode', 'GskRenderNode'],
    GskConicGradientNode: ['GskConicGradientNode', 'GskRenderNode'],
    GskContainerNode: ['GskContainerNode', 'GskRenderNode'],
    GskCopyNode: ['GskCopyNode', 'GskRenderNode'],
    GskCrossFadeNode: ['GskCrossFadeNode', 'GskRenderNode'],
    GskDebugNode: ['GskDebugNode', 'GskRenderNode'],
    GskFillNode: ['GskFillNode', 'GskRenderNode'],
    GskGLRenderer: ['GskGLRenderer', 'GskRenderer', 'GObject'],
    GskGLShader: ['GskGLShader', 'GObject'],
    GskGLShaderNode: ['GskGLShaderNode', 'GskRenderNode'],
    GskInsetShadowNode: ['GskInsetShadowNode', 'GskRenderNode'],
    GskIsolationNode: ['GskIsolationNode', 'GskRenderNode'],
    GskLinearGradientNode: ['GskLinearGradientNode', 'GskRenderNode'],
    GskMaskNode: ['GskMaskNode', 'GskRenderNode'],
    GskNglRenderer: ['GskNglRenderer', 'GskRenderer', 'GObject'],
    GskOpacityNode: ['GskOpacityNode', 'GskRenderNode'],
    GskOutsetShadowNode: ['GskOutsetShadowNode', 'GskRenderNode'],
    GskPasteNode: ['GskPasteNode', 'GskRenderNode'],
    GskRadialGradientNode: ['GskRadialGradientNode', 'GskRenderNode'],
    GskRepeatNode: ['GskRepeatNode', 'GskRenderNode'],
    GskRepeatingLinearGradientNode: ['GskRepeatingLinearGradientNode', 'GskRenderNode'],
    GskRepeatingRadialGradientNode: ['GskRepeatingRadialGradientNode', 'GskRenderNode'],
    GskRoundedClipNode: ['GskRoundedClipNode', 'GskRenderNode'],
    GskShadowNode: ['GskShadowNode', 'GskRenderNode'],
    GskStrokeNode: ['GskStrokeNode', 'GskRenderNode'],
    GskSubsurfaceNode: ['GskSubsurfaceNode', 'GskRenderNode'],
    GskTextNode: ['GskTextNode', 'GskRenderNode'],
    GskTextureNode: ['GskTextureNode', 'GskRenderNode'],
    GskTextureScaleNode: ['GskTextureScaleNode', 'GskRenderNode'],
    GskTransformNode: ['GskTransformNode', 'GskRenderNode'],
    GskVulkanRenderer: ['GskVulkanRenderer', 'GskRenderer', 'GObject'],
};

// The GTypes above that ARE widgets are the `Widgets` map in the sibling `.d.ts`; these
// are the ones that merely HOLD one, through `set_child`/`get_child`, descending from
// `GObject.Object`. A renderer places them like a container; a check asking "is this a
// widget" must not count them. Derived from the accessor pair, never from a list — the
// count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    GskBlendMode: ['default', 'multiply', 'screen', 'overlay', 'darken', 'lighten', 'color-dodge', 'color-burn', 'hard-light', 'soft-light', 'difference', 'exclusion', 'color', 'hue', 'saturation', 'luminosity'],
    GskCorner: ['top-left', 'top-right', 'bottom-right', 'bottom-left'],
    GskFillRule: ['winding', 'even-odd'],
    GskGLUniformType: ['none', 'float', 'int', 'uint', 'bool', 'vec2', 'vec3', 'vec4'],
    GskLineCap: ['butt', 'round', 'square'],
    GskLineJoin: ['miter', 'round', 'bevel'],
    GskMaskMode: ['alpha', 'inverted-alpha', 'luminance', 'inverted-luminance'],
    GskPathDirection: ['from-start', 'to-start', 'to-end', 'from-end'],
    GskPathIntersection: ['none', 'normal', 'start', 'end'],
    GskPathOperation: ['move', 'close', 'line', 'quad', 'cubic', 'conic'],
    GskPorterDuff: ['source', 'dest', 'source-over-dest', 'dest-over-source', 'source-in-dest', 'dest-in-source', 'source-out-dest', 'dest-out-source', 'source-atop-dest', 'dest-atop-source', 'xor', 'clear'],
    GskRenderNodeType: ['not-a-render-node', 'container-node', 'cairo-node', 'color-node', 'linear-gradient-node', 'repeating-linear-gradient-node', 'radial-gradient-node', 'repeating-radial-gradient-node', 'conic-gradient-node', 'border-node', 'texture-node', 'inset-shadow-node', 'outset-shadow-node', 'transform-node', 'opacity-node', 'color-matrix-node', 'repeat-node', 'clip-node', 'rounded-clip-node', 'shadow-node', 'blend-node', 'cross-fade-node', 'text-node', 'blur-node', 'debug-node', 'gl-shader-node', 'texture-scale-node', 'mask-node', 'fill-node', 'stroke-node', 'subsurface-node', 'component-transfer-node', 'copy-node', 'paste-node', 'composite-node', 'isolation-node', 'displacement-node', 'arithmetic-node', 'turbulence-node'],
    GskScalingFilter: ['linear', 'nearest', 'trilinear'],
    GskSide: ['top', 'right', 'bottom', 'left'],
    GskSnapDirection: ['none', 'floor', 'ceil', 'round'],
    GskTransformCategory: ['unknown', 'any', '3d', '2d', '2d-affine', '2d-translate', 'identity'],
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
    'GskBlendMode.color': 12,
    'GskBlendMode.color-burn': 7,
    'GskBlendMode.color-dodge': 6,
    'GskBlendMode.darken': 4,
    'GskBlendMode.default': 0,
    'GskBlendMode.difference': 10,
    'GskBlendMode.exclusion': 11,
    'GskBlendMode.hard-light': 8,
    'GskBlendMode.hue': 13,
    'GskBlendMode.lighten': 5,
    'GskBlendMode.luminosity': 15,
    'GskBlendMode.multiply': 1,
    'GskBlendMode.overlay': 3,
    'GskBlendMode.saturation': 14,
    'GskBlendMode.screen': 2,
    'GskBlendMode.soft-light': 9,
    'GskCorner.bottom-left': 3,
    'GskCorner.bottom-right': 2,
    'GskCorner.top-left': 0,
    'GskCorner.top-right': 1,
    'GskFillRule.even-odd': 1,
    'GskFillRule.winding': 0,
    'GskGLUniformType.bool': 4,
    'GskGLUniformType.float': 1,
    'GskGLUniformType.int': 2,
    'GskGLUniformType.none': 0,
    'GskGLUniformType.uint': 3,
    'GskGLUniformType.vec2': 5,
    'GskGLUniformType.vec3': 6,
    'GskGLUniformType.vec4': 7,
    'GskLineCap.butt': 0,
    'GskLineCap.round': 1,
    'GskLineCap.square': 2,
    'GskLineJoin.bevel': 2,
    'GskLineJoin.miter': 0,
    'GskLineJoin.round': 1,
    'GskMaskMode.alpha': 0,
    'GskMaskMode.inverted-alpha': 1,
    'GskMaskMode.inverted-luminance': 3,
    'GskMaskMode.luminance': 2,
    'GskPathDirection.from-end': 3,
    'GskPathDirection.from-start': 0,
    'GskPathDirection.to-end': 2,
    'GskPathDirection.to-start': 1,
    'GskPathIntersection.end': 3,
    'GskPathIntersection.none': 0,
    'GskPathIntersection.normal': 1,
    'GskPathIntersection.start': 2,
    'GskPathOperation.close': 1,
    'GskPathOperation.conic': 5,
    'GskPathOperation.cubic': 4,
    'GskPathOperation.line': 2,
    'GskPathOperation.move': 0,
    'GskPathOperation.quad': 3,
    'GskPorterDuff.clear': 11,
    'GskPorterDuff.dest': 1,
    'GskPorterDuff.dest-atop-source': 9,
    'GskPorterDuff.dest-in-source': 5,
    'GskPorterDuff.dest-out-source': 7,
    'GskPorterDuff.dest-over-source': 3,
    'GskPorterDuff.source': 0,
    'GskPorterDuff.source-atop-dest': 8,
    'GskPorterDuff.source-in-dest': 4,
    'GskPorterDuff.source-out-dest': 6,
    'GskPorterDuff.source-over-dest': 2,
    'GskPorterDuff.xor': 10,
    'GskRenderNodeType.arithmetic-node': 37,
    'GskRenderNodeType.blend-node': 20,
    'GskRenderNodeType.blur-node': 23,
    'GskRenderNodeType.border-node': 9,
    'GskRenderNodeType.cairo-node': 2,
    'GskRenderNodeType.clip-node': 17,
    'GskRenderNodeType.color-matrix-node': 15,
    'GskRenderNodeType.color-node': 3,
    'GskRenderNodeType.component-transfer-node': 31,
    'GskRenderNodeType.composite-node': 34,
    'GskRenderNodeType.conic-gradient-node': 8,
    'GskRenderNodeType.container-node': 1,
    'GskRenderNodeType.copy-node': 32,
    'GskRenderNodeType.cross-fade-node': 21,
    'GskRenderNodeType.debug-node': 24,
    'GskRenderNodeType.displacement-node': 36,
    'GskRenderNodeType.fill-node': 28,
    'GskRenderNodeType.gl-shader-node': 25,
    'GskRenderNodeType.inset-shadow-node': 11,
    'GskRenderNodeType.isolation-node': 35,
    'GskRenderNodeType.linear-gradient-node': 4,
    'GskRenderNodeType.mask-node': 27,
    'GskRenderNodeType.not-a-render-node': 0,
    'GskRenderNodeType.opacity-node': 14,
    'GskRenderNodeType.outset-shadow-node': 12,
    'GskRenderNodeType.paste-node': 33,
    'GskRenderNodeType.radial-gradient-node': 6,
    'GskRenderNodeType.repeat-node': 16,
    'GskRenderNodeType.repeating-linear-gradient-node': 5,
    'GskRenderNodeType.repeating-radial-gradient-node': 7,
    'GskRenderNodeType.rounded-clip-node': 18,
    'GskRenderNodeType.shadow-node': 19,
    'GskRenderNodeType.stroke-node': 29,
    'GskRenderNodeType.subsurface-node': 30,
    'GskRenderNodeType.text-node': 22,
    'GskRenderNodeType.texture-node': 10,
    'GskRenderNodeType.texture-scale-node': 26,
    'GskRenderNodeType.transform-node': 13,
    'GskRenderNodeType.turbulence-node': 38,
    'GskScalingFilter.linear': 0,
    'GskScalingFilter.nearest': 1,
    'GskScalingFilter.trilinear': 2,
    'GskSide.bottom': 2,
    'GskSide.left': 3,
    'GskSide.right': 1,
    'GskSide.top': 0,
    'GskSnapDirection.ceil': 2,
    'GskSnapDirection.floor': 1,
    'GskSnapDirection.none': 0,
    'GskSnapDirection.round': 3,
    'GskTransformCategory.2d': 3,
    'GskTransformCategory.2d-affine': 4,
    'GskTransformCategory.2d-translate': 5,
    'GskTransformCategory.3d': 2,
    'GskTransformCategory.any': 1,
    'GskTransformCategory.identity': 6,
    'GskTransformCategory.unknown': 0,
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
    'GskIsolation.all': -1,
    'GskIsolation.background': 1,
    'GskIsolation.copy-paste': 2,
    'GskIsolation.none': 0,
    'GskPathForeachFlags.conic': 4,
    'GskPathForeachFlags.cubic': 2,
    'GskPathForeachFlags.only-lines': 0,
    'GskPathForeachFlags.quad': 1,
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
    'GskComponentTransferNode': '4.20',
    'GskCompositeNode': '4.22',
    'GskCopyNode': '4.22',
    'GskFillNode': '4.14',
    'GskGLRenderer': '4.2',
    'GskIsolationNode': '4.22',
    'GskMaskNode': '4.10',
    'GskPasteNode': '4.22',
    'GskStrokeNode': '4.14',
    'GskSubsurfaceNode': '4.14',
    'GskTextureScaleNode': '4.10',
};
