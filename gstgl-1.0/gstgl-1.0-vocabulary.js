// The widget vocabulary of GstGL-1.0 as runtime data.
//
// GENERATED — do not edit. Provenance: GstGL-1.0 — dropped empty base(s): Gst.Allocator — inlined base(s) their owner's vocabulary does not emit: GstBase.BaseTransform
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'GstGL',
    version: '1.0',
    libraryVersion: null,
    childHolders: 0,
    droppedBases: ['Gst.Allocator'],
    inlinedBases: ['GstBase.BaseTransform'],
    unsettableProps: [],
    unresolvedProps: [],
    identifierPrefixes: ['Gst'],
    requiredVocabularies: ['@girs/gobject-2.0/vocabulary', '@girs/gst-1.0/vocabulary', '@girs/gstbase-1.0/vocabulary', '@girs/gstvideo-1.0/vocabulary'],
};

export const OWN_PROPS = {
    GstBaseTransform: ['qos'],
    GstGLOverlayCompositor: ['yinvert'],
    GstGLViewConvert: ['downmix-mode', 'input-flags-override', 'input-mode-override', 'output-flags-override', 'output-mode-override'],
};

export const OWN_SIGNALS = {
    GstGLDisplay: ['create-context'],
};

// Every GType this namespace can INSTANTIATE -> the declarations its members come from.
//
// The key set is what a UI description file can name: a registered, non-abstract class.
// Not "every widget" — GtkBuilder resolves a name through `g_type_from_name`, which knows
// nothing about widgets, and a `.ui` file is full of `GtkSizeGroup`, `GtkTextTag`,
// `GtkEventController*` and `GtkCellRenderer*`. Use `Widgets` and `CHILD_HOLDERS`
// below for the narrower questions; they did not move.
export const DECLS = {
    GstGLBaseFilter: ['GstGLBaseFilter', 'GstBaseTransform', 'GstElement', 'GstObject', 'GInitiallyUnowned', 'GObject'],
    GstGLBaseMixerPad: ['GstGLBaseMixerPad', 'GstVideoAggregatorPad', 'GstAggregatorPad', 'GstPad', 'GstObject', 'GInitiallyUnowned', 'GObject'],
    GstGLBufferAllocator: ['GstGLBufferAllocator', 'GstGLBaseMemoryAllocator', 'GstObject', 'GInitiallyUnowned', 'GObject'],
    GstGLBufferPool: ['GstGLBufferPool', 'GstBufferPool', 'GstObject', 'GInitiallyUnowned', 'GObject'],
    GstGLColorConvert: ['GstGLColorConvert', 'GstObject', 'GInitiallyUnowned', 'GObject'],
    GstGLDisplay: ['GstGLDisplay', 'GstObject', 'GInitiallyUnowned', 'GObject'],
    GstGLFilter: ['GstGLFilter', 'GstGLBaseFilter', 'GstBaseTransform', 'GstElement', 'GstObject', 'GInitiallyUnowned', 'GObject'],
    GstGLFramebuffer: ['GstGLFramebuffer', 'GstObject', 'GInitiallyUnowned', 'GObject'],
    GstGLMemoryAllocator: ['GstGLMemoryAllocator', 'GstGLBaseMemoryAllocator', 'GstObject', 'GInitiallyUnowned', 'GObject'],
    GstGLMemoryPBOAllocator: ['GstGLMemoryPBOAllocator', 'GstGLMemoryAllocator', 'GstGLBaseMemoryAllocator', 'GstObject', 'GInitiallyUnowned', 'GObject'],
    GstGLMixerPad: ['GstGLMixerPad', 'GstGLBaseMixerPad', 'GstVideoAggregatorPad', 'GstAggregatorPad', 'GstPad', 'GstObject', 'GInitiallyUnowned', 'GObject'],
    GstGLOverlayCompositor: ['GstGLOverlayCompositor', 'GstObject', 'GInitiallyUnowned', 'GObject'],
    GstGLRenderbufferAllocator: ['GstGLRenderbufferAllocator', 'GstGLBaseMemoryAllocator', 'GstObject', 'GInitiallyUnowned', 'GObject'],
    GstGLSLStage: ['GstGLSLStage', 'GstObject', 'GInitiallyUnowned', 'GObject'],
    GstGLShader: ['GstGLShader', 'GstObject', 'GInitiallyUnowned', 'GObject'],
    GstGLUpload: ['GstGLUpload', 'GstObject', 'GInitiallyUnowned', 'GObject'],
    GstGLViewConvert: ['GstGLViewConvert', 'GstObject', 'GInitiallyUnowned', 'GObject'],
};

// The GTypes above that ARE widgets are the `Widgets` map in the sibling `.d.ts`; these
// are the ones that merely HOLD one, through `set_child`/`get_child`, descending from
// `GObject.Object`. A renderer places them like a container; a check asking "is this a
// widget" must not count them. Derived from the accessor pair, never from a list — the
// count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    GstGLConfigCaveat: ['none', 'slow', 'non-conformant'],
    GstGLFormat: ['luminance', 'alpha', 'luminance-alpha', 'red', 'r8', 'rg', 'rg8', 'rgb', 'rgb8', 'rgb565', 'rgb16', 'rgba', 'rgba8', 'rgba16', 'depth-component16', 'depth24-stencil8', 'rgb10-a2', 'r16', 'rg16'],
    GstGLQueryType: ['none', 'time-elapsed', 'timestamp'],
    GstGLSLVersion: ['none', '100', '110', '120', '130', '140', '150', '300', '310', '320', '330', '400', '410', '420', '430', '440', '450'],
    GstGLStereoDownmix: ['green-magenta-dubois', 'red-cyan-dubois', 'amber-blue-dubois'],
    GstGLTextureTarget: ['none', '2d', 'rectangle', 'external-oes'],
    GstGLUploadReturn: ['done', 'error', 'unsupported', 'reconfigure', 'unshared-gl-context'],
    GstVideoMultiviewMode: ['none', 'mono', 'left', 'right', 'side-by-side', 'side-by-side-quincunx', 'column-interleaved', 'row-interleaved', 'top-bottom', 'checkerboard', 'frame-by-frame', 'multiview-frame-by-frame', 'separated'],
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
    'GstGLConfigCaveat.non-conformant': 2,
    'GstGLConfigCaveat.none': 0,
    'GstGLConfigCaveat.slow': 1,
    'GstGLFormat.alpha': 6406,
    'GstGLFormat.depth-component16': 33189,
    'GstGLFormat.depth24-stencil8': 35056,
    'GstGLFormat.luminance': 6409,
    'GstGLFormat.luminance-alpha': 6410,
    'GstGLFormat.r16': 33322,
    'GstGLFormat.r8': 33321,
    'GstGLFormat.red': 6403,
    'GstGLFormat.rg': 33319,
    'GstGLFormat.rg16': 33324,
    'GstGLFormat.rg8': 33323,
    'GstGLFormat.rgb': 6407,
    'GstGLFormat.rgb10-a2': 32857,
    'GstGLFormat.rgb16': 32852,
    'GstGLFormat.rgb565': 36194,
    'GstGLFormat.rgb8': 32849,
    'GstGLFormat.rgba': 6408,
    'GstGLFormat.rgba16': 32859,
    'GstGLFormat.rgba8': 32856,
    'GstGLQueryType.none': 0,
    'GstGLQueryType.time-elapsed': 1,
    'GstGLQueryType.timestamp': 2,
    'GstGLSLVersion.100': 100,
    'GstGLSLVersion.110': 110,
    'GstGLSLVersion.120': 120,
    'GstGLSLVersion.130': 130,
    'GstGLSLVersion.140': 140,
    'GstGLSLVersion.150': 150,
    'GstGLSLVersion.300': 300,
    'GstGLSLVersion.310': 310,
    'GstGLSLVersion.320': 320,
    'GstGLSLVersion.330': 330,
    'GstGLSLVersion.400': 400,
    'GstGLSLVersion.410': 410,
    'GstGLSLVersion.420': 420,
    'GstGLSLVersion.430': 430,
    'GstGLSLVersion.440': 440,
    'GstGLSLVersion.450': 450,
    'GstGLSLVersion.none': 0,
    'GstGLStereoDownmix.amber-blue-dubois': 2,
    'GstGLStereoDownmix.green-magenta-dubois': 0,
    'GstGLStereoDownmix.red-cyan-dubois': 1,
    'GstGLTextureTarget.2d': 1,
    'GstGLTextureTarget.external-oes': 3,
    'GstGLTextureTarget.none': 0,
    'GstGLTextureTarget.rectangle': 2,
    'GstGLUploadReturn.done': 1,
    'GstGLUploadReturn.error': -1,
    'GstGLUploadReturn.reconfigure': -3,
    'GstGLUploadReturn.unshared-gl-context': -100,
    'GstGLUploadReturn.unsupported': -2,
    'GstVideoMultiviewMode.checkerboard': 8,
    'GstVideoMultiviewMode.column-interleaved': 5,
    'GstVideoMultiviewMode.frame-by-frame': 32,
    'GstVideoMultiviewMode.left': 1,
    'GstVideoMultiviewMode.mono': 0,
    'GstVideoMultiviewMode.multiview-frame-by-frame': 33,
    'GstVideoMultiviewMode.none': -1,
    'GstVideoMultiviewMode.right': 2,
    'GstVideoMultiviewMode.row-interleaved': 6,
    'GstVideoMultiviewMode.separated': 34,
    'GstVideoMultiviewMode.side-by-side': 3,
    'GstVideoMultiviewMode.side-by-side-quincunx': 4,
    'GstVideoMultiviewMode.top-bottom': 7,
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
    'GstGLAPI.any': 4294967295,
    'GstGLAPI.gles1': 32768,
    'GstGLAPI.gles2': 65536,
    'GstGLAPI.none': 0,
    'GstGLAPI.opengl': 1,
    'GstGLAPI.opengl3': 2,
    'GstGLBaseMemoryTransfer.download': 1048576,
    'GstGLBaseMemoryTransfer.upload': 2097152,
    'GstGLConfigSurfaceType.none': 0,
    'GstGLConfigSurfaceType.pbuffer': 2,
    'GstGLConfigSurfaceType.pixmap': 4,
    'GstGLConfigSurfaceType.window': 1,
    'GstGLDisplayType.android': 2048,
    'GstGLDisplayType.any': 4294967295,
    'GstGLDisplayType.cocoa': 4,
    'GstGLDisplayType.dispmanx': 16,
    'GstGLDisplayType.eagl': 512,
    'GstGLDisplayType.egl': 32,
    'GstGLDisplayType.egl-device': 256,
    'GstGLDisplayType.egl-surfaceless': 4096,
    'GstGLDisplayType.gbm': 128,
    'GstGLDisplayType.none': 0,
    'GstGLDisplayType.viv-fb': 64,
    'GstGLDisplayType.wayland': 2,
    'GstGLDisplayType.win32': 8,
    'GstGLDisplayType.winrt': 1024,
    'GstGLDisplayType.x11': 1,
    'GstGLDrmFormatFlags.direct-import': 8,
    'GstGLDrmFormatFlags.include-emulated': 4,
    'GstGLDrmFormatFlags.include-external': 1,
    'GstGLDrmFormatFlags.linear-only': 2,
    'GstGLPlatform.any': 4294967295,
    'GstGLPlatform.cgl': 8,
    'GstGLPlatform.eagl': 16,
    'GstGLPlatform.egl': 1,
    'GstGLPlatform.glx': 2,
    'GstGLPlatform.none': 0,
    'GstGLPlatform.wgl': 4,
    'GstGLSLProfile.any': 4294967295,
    'GstGLSLProfile.compatibility': 4,
    'GstGLSLProfile.core': 2,
    'GstGLSLProfile.es': 1,
    'GstGLSLProfile.none': 0,
    'GstVideoMultiviewFlags.half-aspect': 16384,
    'GstVideoMultiviewFlags.left-flipped': 2,
    'GstVideoMultiviewFlags.left-flopped': 4,
    'GstVideoMultiviewFlags.mixed-mono': 32768,
    'GstVideoMultiviewFlags.none': 0,
    'GstVideoMultiviewFlags.right-flipped': 8,
    'GstVideoMultiviewFlags.right-flopped': 16,
    'GstVideoMultiviewFlags.right-view-first': 1,
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
    'GstGLViewConvert.downmix-mode': 'GstGLStereoDownmix',
    'GstGLViewConvert.input-flags-override': 'GstVideoMultiviewFlags',
    'GstGLViewConvert.input-mode-override': 'GstVideoMultiviewMode',
    'GstGLViewConvert.output-flags-override': 'GstVideoMultiviewFlags',
    'GstGLViewConvert.output-mode-override': 'GstVideoMultiviewMode',
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
    'GstGLBaseMemoryAllocator': '1.8',
    'GstGLBaseMixerPad': '1.24',
    'GstGLFramebuffer': '1.10',
    'GstGLMixerPad': '1.24',
};
