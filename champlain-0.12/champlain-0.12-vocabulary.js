// The widget vocabulary of Champlain-0.12 as runtime data.
//
// GENERATED — do not edit. Provenance: Champlain-0.12 — library 0.12.22 — dropped empty base(s): Atk.ImplementorIface — prop(s) no TypeScript value satisfies: Champlain.MapSourceDesc.data
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'Champlain',
    version: '0.12',
    libraryVersion: '0.12.22',
    childHolders: 0,
    droppedBases: ['Atk.ImplementorIface'],
    inlinedBases: [],
    unsettableProps: ['Champlain.MapSourceDesc.data'],
    unresolvedProps: [],
    identifierPrefixes: ['Champlain'],
    requiredVocabularies: ['@girs/clutter-1.0/vocabulary', '@girs/gobject-2.0/vocabulary', '@girs/pango-1.0/vocabulary'],
};

export const OWN_PROPS = {
    ChamplainAdjustment: ['lower', 'step-increment', 'upper', 'value'],
    ChamplainErrorTileRenderer: ['tile-size'],
    ChamplainExportable: ['surface'],
    ChamplainFileCache: ['cache-dir', 'size-limit'],
    ChamplainKineticScrollView: ['decel-rate', 'mode', 'motion-buffer'],
    ChamplainLabel: ['alignment', 'color', 'draw-background', 'draw-shadow', 'ellipsize', 'font-name', 'image', 'single-line-mode', 'text', 'text-color', 'use-markup', 'wrap', 'wrap-mode'],
    ChamplainLicense: ['alignment', 'extra-text'],
    ChamplainLocation: ['latitude', 'longitude'],
    ChamplainMapSource: ['next-source', 'renderer'],
    ChamplainMapSourceDesc: ['data', 'id', 'license', 'license-uri', 'max-zoom-level', 'min-zoom-level', 'name', 'projection', 'tile-size', 'uri-format'],
    ChamplainMarker: ['draggable', 'selectable', 'selected'],
    ChamplainMarkerLayer: ['selection-mode'],
    ChamplainMemoryCache: ['size-limit'],
    ChamplainNetworkBboxTileSource: ['api-uri', 'proxy-uri', 'state', 'user-agent'],
    ChamplainNetworkTileSource: ['max-conns', 'offline', 'proxy-uri', 'uri-format', 'user-agent'],
    ChamplainPathLayer: ['closed', 'fill', 'fill-color', 'stroke', 'stroke-color', 'stroke-width', 'visible'],
    ChamplainPoint: ['color', 'size'],
    ChamplainScale: ['max-width', 'unit'],
    ChamplainTile: ['content', 'etag', 'fade-in', 'size', 'state', 'x', 'y', 'zoom-level'],
    ChamplainTileSource: ['cache', 'id', 'license', 'license-uri', 'max-zoom-level', 'min-zoom-level', 'name', 'projection', 'tile-size'],
    ChamplainView: ['animate-zoom', 'background-pattern', 'deceleration', 'goto-animation-duration', 'goto-animation-mode', 'horizontal-wrap', 'keep-center-on-resize', 'kinetic-mode', 'latitude', 'longitude', 'map-source', 'max-zoom-level', 'min-zoom-level', 'world', 'zoom-level', 'zoom-on-double-click'],
    ChamplainViewport: ['hadjustment', 'vadjustment', 'x-origin', 'y-origin'],
};

export const OWN_SIGNALS = {
    ChamplainAdjustment: ['changed'],
    ChamplainKineticScrollView: ['panning-completed'],
    ChamplainMarker: ['button-press', 'button-release', 'drag-finish', 'drag-motion'],
    ChamplainTile: ['render-complete'],
    ChamplainView: ['animation-completed', 'layer-relocated'],
    ChamplainViewport: ['relocated'],
};

// Every GType this namespace can INSTANTIATE -> the declarations its members come from.
//
// The key set is what a UI description file can name: a registered, non-abstract class.
// Not "every widget" — GtkBuilder resolves a name through `g_type_from_name`, which knows
// nothing about widgets, and a `.ui` file is full of `GtkSizeGroup`, `GtkTextTag`,
// `GtkEventController*` and `GtkCellRenderer*`. Use `Widgets` and `CHILD_HOLDERS`
// below for the narrower questions; they did not move.
export const DECLS = {
    ChamplainAdjustment: ['ChamplainAdjustment', 'GObject'],
    ChamplainCoordinate: ['ChamplainCoordinate', 'GInitiallyUnowned', 'GObject', 'ChamplainLocation'],
    ChamplainCustomMarker: ['ChamplainCustomMarker', 'ChamplainMarker', 'ClutterActor', 'GInitiallyUnowned', 'GObject', 'ChamplainLocation', 'ClutterAnimatable', 'ClutterContainer', 'ClutterScriptable'],
    ChamplainErrorTileRenderer: ['ChamplainErrorTileRenderer', 'ChamplainRenderer', 'GInitiallyUnowned', 'GObject'],
    ChamplainFileCache: ['ChamplainFileCache', 'ChamplainTileCache', 'ChamplainMapSource', 'GInitiallyUnowned', 'GObject'],
    ChamplainFileTileSource: ['ChamplainFileTileSource', 'ChamplainTileSource', 'ChamplainMapSource', 'GInitiallyUnowned', 'GObject'],
    ChamplainImageRenderer: ['ChamplainImageRenderer', 'ChamplainRenderer', 'GInitiallyUnowned', 'GObject'],
    ChamplainKineticScrollView: ['ChamplainKineticScrollView', 'ClutterActor', 'GInitiallyUnowned', 'GObject', 'ClutterAnimatable', 'ClutterContainer', 'ClutterScriptable'],
    ChamplainLabel: ['ChamplainLabel', 'ChamplainMarker', 'ClutterActor', 'GInitiallyUnowned', 'GObject', 'ChamplainLocation', 'ClutterAnimatable', 'ClutterContainer', 'ClutterScriptable'],
    ChamplainLicense: ['ChamplainLicense', 'ClutterActor', 'GInitiallyUnowned', 'GObject', 'ClutterAnimatable', 'ClutterContainer', 'ClutterScriptable'],
    ChamplainMapSourceChain: ['ChamplainMapSourceChain', 'ChamplainMapSource', 'GInitiallyUnowned', 'GObject'],
    ChamplainMapSourceDesc: ['ChamplainMapSourceDesc', 'GObject'],
    ChamplainMapSourceFactory: ['ChamplainMapSourceFactory', 'GObject'],
    ChamplainMarker: ['ChamplainMarker', 'ClutterActor', 'GInitiallyUnowned', 'GObject', 'ChamplainLocation', 'ClutterAnimatable', 'ClutterContainer', 'ClutterScriptable'],
    ChamplainMarkerLayer: ['ChamplainMarkerLayer', 'ChamplainLayer', 'ClutterActor', 'GInitiallyUnowned', 'GObject', 'ChamplainExportable', 'ClutterAnimatable', 'ClutterContainer', 'ClutterScriptable'],
    ChamplainMemoryCache: ['ChamplainMemoryCache', 'ChamplainTileCache', 'ChamplainMapSource', 'GInitiallyUnowned', 'GObject'],
    ChamplainNetworkBboxTileSource: ['ChamplainNetworkBboxTileSource', 'ChamplainTileSource', 'ChamplainMapSource', 'GInitiallyUnowned', 'GObject'],
    ChamplainNetworkTileSource: ['ChamplainNetworkTileSource', 'ChamplainTileSource', 'ChamplainMapSource', 'GInitiallyUnowned', 'GObject'],
    ChamplainNullTileSource: ['ChamplainNullTileSource', 'ChamplainTileSource', 'ChamplainMapSource', 'GInitiallyUnowned', 'GObject'],
    ChamplainPathLayer: ['ChamplainPathLayer', 'ChamplainLayer', 'ClutterActor', 'GInitiallyUnowned', 'GObject', 'ChamplainExportable', 'ClutterAnimatable', 'ClutterContainer', 'ClutterScriptable'],
    ChamplainPoint: ['ChamplainPoint', 'ChamplainMarker', 'ClutterActor', 'GInitiallyUnowned', 'GObject', 'ChamplainExportable', 'ChamplainLocation', 'ClutterAnimatable', 'ClutterContainer', 'ClutterScriptable'],
    ChamplainRenderer: ['ChamplainRenderer', 'GInitiallyUnowned', 'GObject'],
    ChamplainScale: ['ChamplainScale', 'ClutterActor', 'GInitiallyUnowned', 'GObject', 'ClutterAnimatable', 'ClutterContainer', 'ClutterScriptable'],
    ChamplainTile: ['ChamplainTile', 'ClutterActor', 'GInitiallyUnowned', 'GObject', 'ChamplainExportable', 'ClutterAnimatable', 'ClutterContainer', 'ClutterScriptable'],
    ChamplainView: ['ChamplainView', 'ClutterActor', 'GInitiallyUnowned', 'GObject', 'ClutterAnimatable', 'ClutterContainer', 'ClutterScriptable'],
    ChamplainViewport: ['ChamplainViewport', 'ClutterActor', 'GInitiallyUnowned', 'GObject', 'ClutterAnimatable', 'ClutterContainer', 'ClutterScriptable'],
};

// The GTypes above that ARE widgets are the `Widgets` map in the sibling `.d.ts`; these
// are the ones that merely HOLD one, through `set_child`/`get_child`, descending from
// `GObject.Object`. A renderer places them like a container; a check asking "is this a
// widget" must not count them. Derived from the accessor pair, never from a list — the
// count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    ChamplainMapProjection: ['mercator'],
    ChamplainSelectionMode: ['none', 'single', 'multiple'],
    ChamplainState: ['none', 'loading', 'loaded', 'done'],
    ChamplainUnit: ['km', 'miles'],
    ClutterAnimationMode: ['custom-mode', 'linear', 'ease-in-quad', 'ease-out-quad', 'ease-in-out-quad', 'ease-in-cubic', 'ease-out-cubic', 'ease-in-out-cubic', 'ease-in-quart', 'ease-out-quart', 'ease-in-out-quart', 'ease-in-quint', 'ease-out-quint', 'ease-in-out-quint', 'ease-in-sine', 'ease-out-sine', 'ease-in-out-sine', 'ease-in-expo', 'ease-out-expo', 'ease-in-out-expo', 'ease-in-circ', 'ease-out-circ', 'ease-in-out-circ', 'ease-in-elastic', 'ease-out-elastic', 'ease-in-out-elastic', 'ease-in-back', 'ease-out-back', 'ease-in-out-back', 'ease-in-bounce', 'ease-out-bounce', 'ease-in-out-bounce', 'steps', 'step-start', 'step-end', 'cubic-bezier', 'ease', 'ease-in', 'ease-out', 'ease-in-out', 'animation-last'],
    PangoAlignment: ['left', 'center', 'right'],
    PangoEllipsizeMode: ['none', 'start', 'middle', 'end'],
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
    'ChamplainMapProjection.mercator': 0,
    'ChamplainSelectionMode.multiple': 2,
    'ChamplainSelectionMode.none': 0,
    'ChamplainSelectionMode.single': 1,
    'ChamplainState.done': 3,
    'ChamplainState.loaded': 2,
    'ChamplainState.loading': 1,
    'ChamplainState.none': 0,
    'ChamplainUnit.km': 0,
    'ChamplainUnit.miles': 1,
    'ClutterAnimationMode.animation-last': 40,
    'ClutterAnimationMode.cubic-bezier': 35,
    'ClutterAnimationMode.custom-mode': 0,
    'ClutterAnimationMode.ease': 36,
    'ClutterAnimationMode.ease-in': 37,
    'ClutterAnimationMode.ease-in-back': 26,
    'ClutterAnimationMode.ease-in-bounce': 29,
    'ClutterAnimationMode.ease-in-circ': 20,
    'ClutterAnimationMode.ease-in-cubic': 5,
    'ClutterAnimationMode.ease-in-elastic': 23,
    'ClutterAnimationMode.ease-in-expo': 17,
    'ClutterAnimationMode.ease-in-out': 39,
    'ClutterAnimationMode.ease-in-out-back': 28,
    'ClutterAnimationMode.ease-in-out-bounce': 31,
    'ClutterAnimationMode.ease-in-out-circ': 22,
    'ClutterAnimationMode.ease-in-out-cubic': 7,
    'ClutterAnimationMode.ease-in-out-elastic': 25,
    'ClutterAnimationMode.ease-in-out-expo': 19,
    'ClutterAnimationMode.ease-in-out-quad': 4,
    'ClutterAnimationMode.ease-in-out-quart': 10,
    'ClutterAnimationMode.ease-in-out-quint': 13,
    'ClutterAnimationMode.ease-in-out-sine': 16,
    'ClutterAnimationMode.ease-in-quad': 2,
    'ClutterAnimationMode.ease-in-quart': 8,
    'ClutterAnimationMode.ease-in-quint': 11,
    'ClutterAnimationMode.ease-in-sine': 14,
    'ClutterAnimationMode.ease-out': 38,
    'ClutterAnimationMode.ease-out-back': 27,
    'ClutterAnimationMode.ease-out-bounce': 30,
    'ClutterAnimationMode.ease-out-circ': 21,
    'ClutterAnimationMode.ease-out-cubic': 6,
    'ClutterAnimationMode.ease-out-elastic': 24,
    'ClutterAnimationMode.ease-out-expo': 18,
    'ClutterAnimationMode.ease-out-quad': 3,
    'ClutterAnimationMode.ease-out-quart': 9,
    'ClutterAnimationMode.ease-out-quint': 12,
    'ClutterAnimationMode.ease-out-sine': 15,
    'ClutterAnimationMode.linear': 1,
    'ClutterAnimationMode.step-end': 34,
    'ClutterAnimationMode.step-start': 33,
    'ClutterAnimationMode.steps': 32,
    'PangoAlignment.center': 1,
    'PangoAlignment.left': 0,
    'PangoAlignment.right': 2,
    'PangoEllipsizeMode.end': 3,
    'PangoEllipsizeMode.middle': 2,
    'PangoEllipsizeMode.none': 0,
    'PangoEllipsizeMode.start': 1,
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
    'ChamplainLabel.alignment': 'PangoAlignment',
    'ChamplainLabel.ellipsize': 'PangoEllipsizeMode',
    'ChamplainLabel.wrap-mode': 'PangoWrapMode',
    'ChamplainLicense.alignment': 'PangoAlignment',
    'ChamplainMapSourceDesc.projection': 'ChamplainMapProjection',
    'ChamplainMarkerLayer.selection-mode': 'ChamplainSelectionMode',
    'ChamplainNetworkBboxTileSource.state': 'ChamplainState',
    'ChamplainScale.unit': 'ChamplainUnit',
    'ChamplainTile.state': 'ChamplainState',
    'ChamplainTileSource.projection': 'ChamplainMapProjection',
    'ChamplainView.goto-animation-mode': 'ClutterAnimationMode',
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
    'ChamplainAdjustment.lower': 'gdouble',
    'ChamplainAdjustment.step-increment': 'gdouble',
    'ChamplainAdjustment.upper': 'gdouble',
    'ChamplainAdjustment.value': 'gdouble',
    'ChamplainErrorTileRenderer.tile-size': 'guint',
    'ChamplainFileCache.cache-dir': 'gchararray',
    'ChamplainFileCache.size-limit': 'guint',
    'ChamplainKineticScrollView.decel-rate': 'gdouble',
    'ChamplainKineticScrollView.mode': 'gboolean',
    'ChamplainKineticScrollView.motion-buffer': 'guint',
    'ChamplainLabel.alignment': 'PangoAlignment',
    'ChamplainLabel.draw-background': 'gboolean',
    'ChamplainLabel.draw-shadow': 'gboolean',
    'ChamplainLabel.ellipsize': 'PangoEllipsizeMode',
    'ChamplainLabel.font-name': 'gchararray',
    'ChamplainLabel.image': 'ClutterActor',
    'ChamplainLabel.single-line-mode': 'gboolean',
    'ChamplainLabel.text': 'gchararray',
    'ChamplainLabel.use-markup': 'gboolean',
    'ChamplainLabel.wrap': 'gboolean',
    'ChamplainLabel.wrap-mode': 'PangoWrapMode',
    'ChamplainLicense.alignment': 'PangoAlignment',
    'ChamplainLicense.extra-text': 'gchararray',
    'ChamplainLocation.latitude': 'gdouble',
    'ChamplainLocation.longitude': 'gdouble',
    'ChamplainMapSource.next-source': 'ChamplainMapSource',
    'ChamplainMapSource.renderer': 'ChamplainRenderer',
    'ChamplainMapSourceDesc.data': 'gpointer',
    'ChamplainMapSourceDesc.id': 'gchararray',
    'ChamplainMapSourceDesc.license': 'gchararray',
    'ChamplainMapSourceDesc.license-uri': 'gchararray',
    'ChamplainMapSourceDesc.max-zoom-level': 'guint',
    'ChamplainMapSourceDesc.min-zoom-level': 'guint',
    'ChamplainMapSourceDesc.name': 'gchararray',
    'ChamplainMapSourceDesc.projection': 'ChamplainMapProjection',
    'ChamplainMapSourceDesc.tile-size': 'guint',
    'ChamplainMapSourceDesc.uri-format': 'gchararray',
    'ChamplainMarker.draggable': 'gboolean',
    'ChamplainMarker.selectable': 'gboolean',
    'ChamplainMarker.selected': 'gboolean',
    'ChamplainMarkerLayer.selection-mode': 'ChamplainSelectionMode',
    'ChamplainMemoryCache.size-limit': 'guint',
    'ChamplainNetworkBboxTileSource.api-uri': 'gchararray',
    'ChamplainNetworkBboxTileSource.proxy-uri': 'gchararray',
    'ChamplainNetworkBboxTileSource.state': 'ChamplainState',
    'ChamplainNetworkBboxTileSource.user-agent': 'gchararray',
    'ChamplainNetworkTileSource.max-conns': 'gint',
    'ChamplainNetworkTileSource.offline': 'gboolean',
    'ChamplainNetworkTileSource.proxy-uri': 'gchararray',
    'ChamplainNetworkTileSource.uri-format': 'gchararray',
    'ChamplainNetworkTileSource.user-agent': 'gchararray',
    'ChamplainPathLayer.closed': 'gboolean',
    'ChamplainPathLayer.fill': 'gboolean',
    'ChamplainPathLayer.stroke': 'gboolean',
    'ChamplainPathLayer.stroke-width': 'gdouble',
    'ChamplainPathLayer.visible': 'gboolean',
    'ChamplainPoint.size': 'gdouble',
    'ChamplainScale.max-width': 'guint',
    'ChamplainScale.unit': 'ChamplainUnit',
    'ChamplainTile.content': 'ClutterActor',
    'ChamplainTile.etag': 'gchararray',
    'ChamplainTile.fade-in': 'gboolean',
    'ChamplainTile.size': 'guint',
    'ChamplainTile.state': 'ChamplainState',
    'ChamplainTile.x': 'guint',
    'ChamplainTile.y': 'guint',
    'ChamplainTile.zoom-level': 'guint',
    'ChamplainTileSource.cache': 'ChamplainTileCache',
    'ChamplainTileSource.id': 'gchararray',
    'ChamplainTileSource.license': 'gchararray',
    'ChamplainTileSource.license-uri': 'gchararray',
    'ChamplainTileSource.max-zoom-level': 'guint',
    'ChamplainTileSource.min-zoom-level': 'guint',
    'ChamplainTileSource.name': 'gchararray',
    'ChamplainTileSource.projection': 'ChamplainMapProjection',
    'ChamplainTileSource.tile-size': 'guint',
    'ChamplainView.animate-zoom': 'gboolean',
    'ChamplainView.background-pattern': 'ClutterActor',
    'ChamplainView.deceleration': 'gdouble',
    'ChamplainView.goto-animation-duration': 'guint',
    'ChamplainView.goto-animation-mode': 'ClutterAnimationMode',
    'ChamplainView.horizontal-wrap': 'gboolean',
    'ChamplainView.keep-center-on-resize': 'gboolean',
    'ChamplainView.kinetic-mode': 'gboolean',
    'ChamplainView.latitude': 'gdouble',
    'ChamplainView.longitude': 'gdouble',
    'ChamplainView.map-source': 'ChamplainMapSource',
    'ChamplainView.max-zoom-level': 'guint',
    'ChamplainView.min-zoom-level': 'guint',
    'ChamplainView.zoom-level': 'guint',
    'ChamplainView.zoom-on-double-click': 'gboolean',
    'ChamplainViewport.hadjustment': 'ChamplainAdjustment',
    'ChamplainViewport.vadjustment': 'ChamplainAdjustment',
    'ChamplainViewport.x-origin': 'gint',
    'ChamplainViewport.y-origin': 'gint',
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
    'ChamplainCoordinate': '0.10',
    'ChamplainCustomMarker': '0.10',
    'ChamplainErrorTileRenderer': '0.8',
    'ChamplainErrorTileRenderer.tile-size': '0.8',
    'ChamplainExportable.surface': '0.12.12',
    'ChamplainFileCache': '0.6',
    'ChamplainFileCache.cache-dir': '0.6',
    'ChamplainFileCache.size-limit': '0.4',
    'ChamplainFileTileSource': '0.8',
    'ChamplainImageRenderer': '0.8',
    'ChamplainLabel': '0.10',
    'ChamplainLabel.alignment': '0.10',
    'ChamplainLabel.color': '0.10',
    'ChamplainLabel.draw-background': '0.10',
    'ChamplainLabel.draw-shadow': '0.12.10',
    'ChamplainLabel.ellipsize': '0.10',
    'ChamplainLabel.font-name': '0.10',
    'ChamplainLabel.image': '0.10',
    'ChamplainLabel.single-line-mode': '0.10',
    'ChamplainLabel.text': '0.10',
    'ChamplainLabel.text-color': '0.10',
    'ChamplainLabel.use-markup': '0.10',
    'ChamplainLabel.wrap': '0.10',
    'ChamplainLabel.wrap-mode': '0.10',
    'ChamplainLayer': '0.10',
    'ChamplainLicense': '0.10',
    'ChamplainLicense.alignment': '0.10',
    'ChamplainLicense.extra-text': '0.10',
    'ChamplainLocation.latitude': '0.10',
    'ChamplainLocation.longitude': '0.10',
    'ChamplainMapSource': '0.4',
    'ChamplainMapSource.next-source': '0.6',
    'ChamplainMapSource.renderer': '0.8',
    'ChamplainMapSourceChain': '0.6',
    'ChamplainMapSourceDesc': '0.10',
    'ChamplainMapSourceDesc.data': '0.10',
    'ChamplainMapSourceDesc.id': '0.10',
    'ChamplainMapSourceDesc.license': '0.10',
    'ChamplainMapSourceDesc.license-uri': '0.10',
    'ChamplainMapSourceDesc.max-zoom-level': '0.10',
    'ChamplainMapSourceDesc.min-zoom-level': '0.10',
    'ChamplainMapSourceDesc.name': '0.10',
    'ChamplainMapSourceDesc.projection': '0.10',
    'ChamplainMapSourceDesc.tile-size': '0.10',
    'ChamplainMapSourceDesc.uri-format': '0.10',
    'ChamplainMapSourceFactory': '0.4',
    'ChamplainMarker': '0.10',
    'ChamplainMarker.draggable': '0.10',
    'ChamplainMarker.selectable': '0.10',
    'ChamplainMarker.selected': '0.10',
    'ChamplainMarker::button-press': '0.10',
    'ChamplainMarker::button-release': '0.10',
    'ChamplainMarker::drag-finish': '0.10',
    'ChamplainMarker::drag-motion': '0.10',
    'ChamplainMarkerLayer': '0.10',
    'ChamplainMarkerLayer.selection-mode': '0.10',
    'ChamplainMemoryCache': '0.8',
    'ChamplainMemoryCache.size-limit': '0.8',
    'ChamplainNetworkBboxTileSource': '0.8',
    'ChamplainNetworkBboxTileSource.api-uri': '0.8',
    'ChamplainNetworkBboxTileSource.proxy-uri': '0.8',
    'ChamplainNetworkBboxTileSource.state': '0.8',
    'ChamplainNetworkBboxTileSource.user-agent': '0.12.16',
    'ChamplainNetworkTileSource': '0.6',
    'ChamplainNetworkTileSource.max-conns': '0.12.14',
    'ChamplainNetworkTileSource.offline': '0.4',
    'ChamplainNetworkTileSource.proxy-uri': '0.4',
    'ChamplainNetworkTileSource.uri-format': '0.4',
    'ChamplainNetworkTileSource.user-agent': '0.12.16',
    'ChamplainNullTileSource': '0.8',
    'ChamplainPathLayer': '0.10',
    'ChamplainPathLayer.closed': '0.10',
    'ChamplainPathLayer.fill': '0.10',
    'ChamplainPathLayer.fill-color': '0.10',
    'ChamplainPathLayer.stroke': '0.10',
    'ChamplainPathLayer.stroke-color': '0.10',
    'ChamplainPathLayer.stroke-width': '0.10',
    'ChamplainPathLayer.visible': '0.10',
    'ChamplainPoint': '0.10',
    'ChamplainRenderer': '0.8',
    'ChamplainScale': '0.10',
    'ChamplainScale.max-width': '0.10',
    'ChamplainScale.unit': '0.10',
    'ChamplainTile': '0.4',
    'ChamplainTile.content': '0.4',
    'ChamplainTile.etag': '0.4',
    'ChamplainTile.fade-in': '0.6',
    'ChamplainTile.size': '0.4',
    'ChamplainTile.state': '0.4',
    'ChamplainTile.x': '0.4',
    'ChamplainTile.y': '0.4',
    'ChamplainTile.zoom-level': '0.4',
    'ChamplainTile::render-complete': '0.10',
    'ChamplainTileCache': '0.6',
    'ChamplainTileSource': '0.6',
    'ChamplainTileSource.cache': '0.6',
    'ChamplainTileSource.id': '0.4',
    'ChamplainTileSource.license': '0.4',
    'ChamplainTileSource.license-uri': '0.4',
    'ChamplainTileSource.max-zoom-level': '0.4',
    'ChamplainTileSource.min-zoom-level': '0.4',
    'ChamplainTileSource.name': '0.4',
    'ChamplainTileSource.projection': '0.4',
    'ChamplainTileSource.tile-size': '0.4',
    'ChamplainView': '0.1',
    'ChamplainView.animate-zoom': '0.12',
    'ChamplainView.background-pattern': '0.12.4',
    'ChamplainView.deceleration': '0.10',
    'ChamplainView.keep-center-on-resize': '0.2.7',
    'ChamplainView.kinetic-mode': '0.10',
    'ChamplainView.latitude': '0.1',
    'ChamplainView.longitude': '0.1',
    'ChamplainView.map-source': '0.2',
    'ChamplainView.max-zoom-level': '0.4',
    'ChamplainView.min-zoom-level': '0.4',
    'ChamplainView.world': '0.12.11',
    'ChamplainView.zoom-level': '0.1',
    'ChamplainView.zoom-on-double-click': '0.4',
    'ChamplainView::animation-completed': '0.4',
    'ChamplainView::layer-relocated': '0.10',
};
