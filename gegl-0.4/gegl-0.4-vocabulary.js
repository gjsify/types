// The widget vocabulary of Gegl-0.4 as runtime data.
//
// GENERATED — do not edit. Provenance: Gegl-0.4 — library 0.4.70 — prop(s) no TypeScript value satisfies: Gegl.Buffer.format Gegl.Processor.rectangle Gegl.TileBackend.format
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'Gegl',
    version: '0.4',
    libraryVersion: '0.4.70',
    childHolders: 0,
    droppedBases: [],
    inlinedBases: [],
    unsettableProps: ['Gegl.Buffer.format', 'Gegl.Processor.rectangle', 'Gegl.TileBackend.format'],
    unresolvedProps: [],
    identifierPrefixes: ['Gegl'],
    requiredVocabularies: ['@girs/gobject-2.0/vocabulary'],
};

export const OWN_PROPS = {
    GeglAudioFragment: ['string'],
    GeglBuffer: ['abyss-height', 'abyss-width', 'abyss-x', 'abyss-y', 'backend', 'format', 'height', 'initialized', 'path', 'shift-x', 'shift-y', 'tile-height', 'tile-width', 'width', 'x', 'y'],
    GeglColor: ['string'],
    GeglConfig: ['application-license', 'chunk-size', 'mipmap-rendering', 'quality', 'queue-size', 'swap', 'swap-compression', 'threads', 'tile-cache-size', 'tile-height', 'tile-width', 'use-opencl'],
    GeglMetadataStore: ['artist', 'comment', 'copyright', 'description', 'disclaimer', 'resolution-unit', 'resolution-x', 'resolution-y', 'software', 'source', 'timestamp', 'title', 'warning'],
    GeglNode: ['cache-policy', 'dont-cache', 'gegl-operation', 'name', 'operation', 'passthrough', 'use-opencl'],
    GeglProcessor: ['chunksize', 'node', 'progress', 'rectangle'],
    GeglTileBackend: ['flush-on-destroy', 'format', 'tile-height', 'tile-width'],
    GeglTileHandler: ['source'],
};

export const OWN_SIGNALS = {
    GeglBuffer: ['changed'],
    GeglMetadataStore: ['changed', 'generate-value', 'mapped', 'parse-value', 'unmapped'],
    GeglNode: ['computed', 'invalidated', 'progress'],
    GeglPath: ['changed'],
};

// Every GType this namespace can INSTANTIATE -> the declarations its members come from.
//
// The key set is what a UI description file can name: a registered, non-abstract class.
// Not "every widget" — GtkBuilder resolves a name through `g_type_from_name`, which knows
// nothing about widgets, and a `.ui` file is full of `GtkSizeGroup`, `GtkTextTag`,
// `GtkEventController*` and `GtkCellRenderer*`. Use `Widgets` and `CHILD_HOLDERS`
// below for the narrower questions; they did not move.
export const DECLS = {
    GeglAudioFragment: ['GeglAudioFragment', 'GObject'],
    GeglBuffer: ['GeglBuffer', 'GeglTileHandler', 'GeglTileSource', 'GObject'],
    GeglColor: ['GeglColor', 'GObject'],
    GeglConfig: ['GeglConfig', 'GObject'],
    GeglCurve: ['GeglCurve', 'GObject'],
    GeglMetadataHash: ['GeglMetadataHash', 'GeglMetadataStore', 'GObject', 'GeglMetadata'],
    GeglNode: ['GeglNode', 'GObject'],
    GeglOperation: ['GeglOperation', 'GObject'],
    GeglParamAudioFragment: ['GeglParamAudioFragment', 'GParam'],
    GeglParamColor: ['GeglParamColor', 'GParam'],
    GeglParamCurve: ['GeglParamCurve', 'GParam'],
    GeglParamDouble: ['GeglParamDouble', 'GParam'],
    GeglParamEnum: ['GeglParamEnum', 'GParam'],
    GeglParamFilePath: ['GeglParamFilePath', 'GParam'],
    GeglParamFormat: ['GeglParamFormat', 'GParam'],
    GeglParamInt: ['GeglParamInt', 'GParam'],
    GeglParamPath: ['GeglParamPath', 'GParam'],
    GeglParamSeed: ['GeglParamSeed', 'GParam'],
    GeglParamString: ['GeglParamString', 'GParam'],
    GeglParamUri: ['GeglParamUri', 'GParam'],
    GeglPath: ['GeglPath', 'GObject'],
    GeglProcessor: ['GeglProcessor', 'GObject'],
    GeglStats: ['GeglStats', 'GObject'],
    GeglTileBackend: ['GeglTileBackend', 'GeglTileSource', 'GObject'],
    GeglTileHandler: ['GeglTileHandler', 'GeglTileSource', 'GObject'],
    GeglTileSource: ['GeglTileSource', 'GObject'],
};

// The GTypes above that ARE widgets are the `Widgets` map in the sibling `.d.ts`; these
// are the ones that merely HOLD one, through `set_child`/`get_child`, descending from
// `GObject.Object`. A renderer places them like a container; a check asking "is this a
// widget" must not count them. Derived from the accessor pair, never from a list — the
// count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    GeglAbyssPolicy: ['none', 'clamp', 'loop', 'black', 'white'],
    GeglBablVariant: ['float', 'linear', 'non-linear', 'perceptual', 'linear-premultiplied', 'perceptual-premultiplied', 'linear-premultiplied-if-alpha', 'perceptual-premultiplied-if-alpha', 'add-alpha'],
    GeglCachePolicy: ['auto', 'never', 'always'],
    GeglDistanceMetric: ['euclidean', 'manhattan', 'chebyshev'],
    GeglDitherMethod: ['none', 'floyd-steinberg', 'bayer', 'random', 'random-covariant', 'add', 'add-covariant', 'xor', 'xor-covariant', 'blue-noise', 'blue-noise-covariant'],
    GeglOrientation: ['horizontal', 'vertical'],
    GeglRectangleAlignment: ['subset', 'superset', 'nearest'],
    GeglResolutionUnit: ['none', 'dpi', 'dpm'],
    GeglSamplerType: ['nearest', 'linear', 'cubic', 'nohalo', 'lohalo'],
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
    'GeglAbyssPolicy.black': 3,
    'GeglAbyssPolicy.clamp': 1,
    'GeglAbyssPolicy.loop': 2,
    'GeglAbyssPolicy.none': 0,
    'GeglAbyssPolicy.white': 4,
    'GeglBablVariant.add-alpha': 8,
    'GeglBablVariant.float': 0,
    'GeglBablVariant.linear': 1,
    'GeglBablVariant.linear-premultiplied': 4,
    'GeglBablVariant.linear-premultiplied-if-alpha': 6,
    'GeglBablVariant.non-linear': 2,
    'GeglBablVariant.perceptual': 3,
    'GeglBablVariant.perceptual-premultiplied': 5,
    'GeglBablVariant.perceptual-premultiplied-if-alpha': 7,
    'GeglCachePolicy.always': 2,
    'GeglCachePolicy.auto': 0,
    'GeglCachePolicy.never': 1,
    'GeglDistanceMetric.chebyshev': 2,
    'GeglDistanceMetric.euclidean': 0,
    'GeglDistanceMetric.manhattan': 1,
    'GeglDitherMethod.add': 5,
    'GeglDitherMethod.add-covariant': 6,
    'GeglDitherMethod.bayer': 2,
    'GeglDitherMethod.blue-noise': 9,
    'GeglDitherMethod.blue-noise-covariant': 10,
    'GeglDitherMethod.floyd-steinberg': 1,
    'GeglDitherMethod.none': 0,
    'GeglDitherMethod.random': 3,
    'GeglDitherMethod.random-covariant': 4,
    'GeglDitherMethod.xor': 7,
    'GeglDitherMethod.xor-covariant': 8,
    'GeglOrientation.horizontal': 0,
    'GeglOrientation.vertical': 1,
    'GeglRectangleAlignment.nearest': 2,
    'GeglRectangleAlignment.subset': 0,
    'GeglRectangleAlignment.superset': 1,
    'GeglResolutionUnit.dpi': 1,
    'GeglResolutionUnit.dpm': 2,
    'GeglResolutionUnit.none': 0,
    'GeglSamplerType.cubic': 2,
    'GeglSamplerType.linear': 1,
    'GeglSamplerType.lohalo': 4,
    'GeglSamplerType.nearest': 0,
    'GeglSamplerType.nohalo': 3,
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
    'GeglAccessMode.read': 1,
    'GeglAccessMode.readwrite': 3,
    'GeglAccessMode.write': 2,
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
    'GeglMetadataStore.resolution-unit': 'GeglResolutionUnit',
    'GeglNode.cache-policy': 'GeglCachePolicy',
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
    'GeglAudioFragment.string': 'gchararray',
    'GeglBuffer.abyss-height': 'gint',
    'GeglBuffer.abyss-width': 'gint',
    'GeglBuffer.abyss-x': 'gint',
    'GeglBuffer.abyss-y': 'gint',
    'GeglBuffer.backend': 'GeglTileBackend',
    'GeglBuffer.format': 'gpointer',
    'GeglBuffer.height': 'gint',
    'GeglBuffer.initialized': 'gboolean',
    'GeglBuffer.path': 'gchararray',
    'GeglBuffer.shift-x': 'gint',
    'GeglBuffer.shift-y': 'gint',
    'GeglBuffer.tile-height': 'gint',
    'GeglBuffer.tile-width': 'gint',
    'GeglBuffer.width': 'gint',
    'GeglBuffer.x': 'gint',
    'GeglBuffer.y': 'gint',
    'GeglColor.string': 'gchararray',
    'GeglConfig.application-license': 'gchararray',
    'GeglConfig.chunk-size': 'gint',
    'GeglConfig.mipmap-rendering': 'gboolean',
    'GeglConfig.quality': 'gdouble',
    'GeglConfig.queue-size': 'gint',
    'GeglConfig.swap': 'gchararray',
    'GeglConfig.swap-compression': 'gchararray',
    'GeglConfig.threads': 'gint',
    'GeglConfig.tile-cache-size': 'guint64',
    'GeglConfig.tile-height': 'gint',
    'GeglConfig.tile-width': 'gint',
    'GeglConfig.use-opencl': 'gboolean',
    'GeglMetadataStore.artist': 'gchararray',
    'GeglMetadataStore.comment': 'gchararray',
    'GeglMetadataStore.copyright': 'gchararray',
    'GeglMetadataStore.description': 'gchararray',
    'GeglMetadataStore.disclaimer': 'gchararray',
    'GeglMetadataStore.resolution-unit': 'GeglResolutionUnit',
    'GeglMetadataStore.resolution-x': 'gdouble',
    'GeglMetadataStore.resolution-y': 'gdouble',
    'GeglMetadataStore.software': 'gchararray',
    'GeglMetadataStore.source': 'gchararray',
    'GeglMetadataStore.title': 'gchararray',
    'GeglMetadataStore.warning': 'gchararray',
    'GeglNode.cache-policy': 'GeglCachePolicy',
    'GeglNode.dont-cache': 'gboolean',
    'GeglNode.gegl-operation': 'GeglOperation',
    'GeglNode.name': 'gchararray',
    'GeglNode.operation': 'gchararray',
    'GeglNode.passthrough': 'gboolean',
    'GeglNode.use-opencl': 'gboolean',
    'GeglProcessor.chunksize': 'gint',
    'GeglProcessor.node': 'GeglNode',
    'GeglProcessor.progress': 'gdouble',
    'GeglProcessor.rectangle': 'gpointer',
    'GeglTileBackend.flush-on-destroy': 'gboolean',
    'GeglTileBackend.format': 'gpointer',
    'GeglTileBackend.tile-height': 'gint',
    'GeglTileBackend.tile-width': 'gint',
    'GeglTileHandler.source': 'GObject',
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
