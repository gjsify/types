// The widget vocabulary of GES-1.0 as runtime data.
//
// GENERATED — do not edit. Provenance: GES-1.0 — library 1.28.6 — dropped empty base(s): GstVideo.VideoOverlay
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'GES',
    version: '1.0',
    libraryVersion: '1.28.6',
    childHolders: 0,
    droppedBases: ['GstVideo.VideoOverlay'],
    inlinedBases: [],
    unsettableProps: [],
    unresolvedProps: [],
    identifierPrefixes: ['GES'],
    requiredVocabularies: ['@girs/gio-2.0/vocabulary', '@girs/gobject-2.0/vocabulary', '@girs/gst-1.0/vocabulary'],
};

export const OWN_PROPS = {
    GESAsset: ['extractable-type', 'id', 'proxy'],
    GESAudioUriSource: ['uri'],
    GESClip: ['supported-formats'],
    GESClipAsset: ['supported-formats'],
    GESDiscovererManager: ['timeout', 'use-cache'],
    GESEffect: ['bin-description'],
    GESEffectClip: ['audio-bin-description', 'video-bin-description'],
    GESGroup: ['duration', 'in-point', 'max-duration', 'priority', 'start'],
    GESImageSource: ['uri'],
    GESLayer: ['auto-transition', 'priority'],
    GESMarkerList: ['flags'],
    GESMultiFileSource: ['uri'],
    GESPipeline: ['audio-filter', 'audio-sink', 'mode', 'timeline', 'video-filter', 'video-sink'],
    GESProject: ['uri'],
    GESTestClip: ['freq', 'mute', 'volume', 'vpattern'],
    GESTextOverlayClip: ['color', 'font-desc', 'halignment', 'text', 'valignment', 'xpos', 'ypos'],
    GESTimeline: ['auto-transition', 'snapping-distance'],
    GESTimelineElement: ['duration', 'in-point', 'max-duration', 'name', 'parent', 'priority', 'serialize', 'start', 'timeline'],
    GESTitleClip: ['background', 'color', 'font-desc', 'halignment', 'text', 'valignment', 'xpos', 'ypos'],
    GESTrack: ['caps', 'id', 'mixing', 'restriction-caps', 'track-type'],
    GESTrackElement: ['active', 'auto-clamp-control-sources', 'has-internal-source', 'track-type'],
    GESTrackElementAsset: ['track-type'],
    GESTransitionClip: ['vtype'],
    GESUriClip: ['is-image', 'mute', 'supported-formats', 'uri'],
    GESUriClipAsset: ['duration'],
    GESVideoTransition: ['border', 'invert', 'transition-type'],
    GESVideoUriSource: ['uri'],
};

export const OWN_SIGNALS = {
    GESContainer: ['child-added', 'child-removed'],
    GESDiscovererManager: ['discovered', 'load-serialized-info', 'source-setup'],
    GESLayer: ['active-changed', 'clip-added', 'clip-removed'],
    GESMarkerList: ['marker-added', 'marker-moved', 'marker-removed'],
    GESMetaContainer: ['notify-meta'],
    GESProject: ['asset-added', 'asset-loading', 'asset-removed', 'error-loading', 'error-loading-asset', 'loaded', 'loading', 'missing-uri'],
    GESTimeline: ['commited', 'group-added', 'group-removed', 'layer-added', 'layer-removed', 'select-element-track', 'select-tracks-for-object', 'snapping-ended', 'snapping-started', 'track-added', 'track-removed'],
    GESTimelineElement: ['child-property-added', 'child-property-removed', 'deep-notify'],
    GESTrack: ['commited', 'track-element-added', 'track-element-removed'],
    GESTrackElement: ['control-binding-added', 'control-binding-removed'],
};

// Every GType this namespace can INSTANTIATE -> the declarations its members come from.
//
// The key set is what a UI description file can name: a registered, non-abstract class.
// Not "every widget" — GtkBuilder resolves a name through `g_type_from_name`, which knows
// nothing about widgets, and a `.ui` file is full of `GtkSizeGroup`, `GtkTextTag`,
// `GtkEventController*` and `GtkCellRenderer*`. Use `Widgets` and `CHILD_HOLDERS`
// below for the narrower questions; they did not move.
export const DECLS = {
    GESAsset: ['GESAsset', 'GObject', 'GESMetaContainer', 'GAsyncInitable', 'GInitable'],
    GESAudioTestSource: ['GESAudioTestSource', 'GESAudioSource', 'GESSource', 'GESTrackElement', 'GESTimelineElement', 'GInitiallyUnowned', 'GObject', 'GESExtractable', 'GESMetaContainer'],
    GESAudioTrack: ['GESAudioTrack', 'GESTrack', 'GstBin', 'GstElement', 'GstObject', 'GInitiallyUnowned', 'GObject', 'GESMetaContainer', 'GstChildProxy'],
    GESAudioTransition: ['GESAudioTransition', 'GESTransition', 'GESOperation', 'GESTrackElement', 'GESTimelineElement', 'GInitiallyUnowned', 'GObject', 'GESExtractable', 'GESMetaContainer'],
    GESAudioUriSource: ['GESAudioUriSource', 'GESAudioSource', 'GESSource', 'GESTrackElement', 'GESTimelineElement', 'GInitiallyUnowned', 'GObject', 'GESExtractable', 'GESMetaContainer'],
    GESClipAsset: ['GESClipAsset', 'GESAsset', 'GObject', 'GESMetaContainer', 'GAsyncInitable', 'GInitable'],
    GESCommandLineFormatter: ['GESCommandLineFormatter', 'GESFormatter', 'GInitiallyUnowned', 'GObject', 'GESExtractable'],
    GESDiscovererManager: ['GESDiscovererManager', 'GObject'],
    GESEffect: ['GESEffect', 'GESBaseEffect', 'GESOperation', 'GESTrackElement', 'GESTimelineElement', 'GInitiallyUnowned', 'GObject', 'GESExtractable', 'GESMetaContainer'],
    GESEffectAsset: ['GESEffectAsset', 'GESTrackElementAsset', 'GESAsset', 'GObject', 'GESMetaContainer', 'GAsyncInitable', 'GInitable'],
    GESEffectClip: ['GESEffectClip', 'GESBaseEffectClip', 'GESOperationClip', 'GESClip', 'GESContainer', 'GESTimelineElement', 'GInitiallyUnowned', 'GObject', 'GESExtractable', 'GESMetaContainer'],
    GESGroup: ['GESGroup', 'GESContainer', 'GESTimelineElement', 'GInitiallyUnowned', 'GObject', 'GESExtractable', 'GESMetaContainer'],
    GESImageSource: ['GESImageSource', 'GESVideoSource', 'GESSource', 'GESTrackElement', 'GESTimelineElement', 'GInitiallyUnowned', 'GObject', 'GESExtractable', 'GESMetaContainer'],
    GESLayer: ['GESLayer', 'GInitiallyUnowned', 'GObject', 'GESExtractable', 'GESMetaContainer'],
    GESMarker: ['GESMarker', 'GObject', 'GESMetaContainer'],
    GESMarkerList: ['GESMarkerList', 'GObject'],
    GESMultiFileSource: ['GESMultiFileSource', 'GESVideoSource', 'GESSource', 'GESTrackElement', 'GESTimelineElement', 'GInitiallyUnowned', 'GObject', 'GESExtractable', 'GESMetaContainer'],
    GESPipeline: ['GESPipeline', 'GstPipeline', 'GstBin', 'GstElement', 'GstObject', 'GInitiallyUnowned', 'GObject', 'GstChildProxy'],
    GESPitiviFormatter: ['GESPitiviFormatter', 'GESFormatter', 'GInitiallyUnowned', 'GObject', 'GESExtractable'],
    GESProject: ['GESProject', 'GESAsset', 'GObject', 'GESMetaContainer', 'GAsyncInitable', 'GInitable'],
    GESSource: ['GESSource', 'GESTrackElement', 'GESTimelineElement', 'GInitiallyUnowned', 'GObject', 'GESExtractable', 'GESMetaContainer'],
    GESSourceClip: ['GESSourceClip', 'GESClip', 'GESContainer', 'GESTimelineElement', 'GInitiallyUnowned', 'GObject', 'GESExtractable', 'GESMetaContainer'],
    GESSourceClipAsset: ['GESSourceClipAsset', 'GESClipAsset', 'GESAsset', 'GObject', 'GESMetaContainer', 'GAsyncInitable', 'GInitable'],
    GESTestClip: ['GESTestClip', 'GESSourceClip', 'GESClip', 'GESContainer', 'GESTimelineElement', 'GInitiallyUnowned', 'GObject', 'GESExtractable', 'GESMetaContainer'],
    GESTextOverlay: ['GESTextOverlay', 'GESOperation', 'GESTrackElement', 'GESTimelineElement', 'GInitiallyUnowned', 'GObject', 'GESExtractable', 'GESMetaContainer'],
    GESTextOverlayClip: ['GESTextOverlayClip', 'GESOverlayClip', 'GESOperationClip', 'GESClip', 'GESContainer', 'GESTimelineElement', 'GInitiallyUnowned', 'GObject', 'GESExtractable', 'GESMetaContainer'],
    GESTimeline: ['GESTimeline', 'GstBin', 'GstElement', 'GstObject', 'GInitiallyUnowned', 'GObject', 'GESExtractable', 'GESMetaContainer', 'GstChildProxy'],
    GESTitleClip: ['GESTitleClip', 'GESSourceClip', 'GESClip', 'GESContainer', 'GESTimelineElement', 'GInitiallyUnowned', 'GObject', 'GESExtractable', 'GESMetaContainer'],
    GESTitleSource: ['GESTitleSource', 'GESVideoSource', 'GESSource', 'GESTrackElement', 'GESTimelineElement', 'GInitiallyUnowned', 'GObject', 'GESExtractable', 'GESMetaContainer'],
    GESTrack: ['GESTrack', 'GstBin', 'GstElement', 'GstObject', 'GInitiallyUnowned', 'GObject', 'GESMetaContainer', 'GstChildProxy'],
    GESTrackElementAsset: ['GESTrackElementAsset', 'GESAsset', 'GObject', 'GESMetaContainer', 'GAsyncInitable', 'GInitable'],
    GESTransitionClip: ['GESTransitionClip', 'GESBaseTransitionClip', 'GESOperationClip', 'GESClip', 'GESContainer', 'GESTimelineElement', 'GInitiallyUnowned', 'GObject', 'GESExtractable', 'GESMetaContainer'],
    GESUriClip: ['GESUriClip', 'GESSourceClip', 'GESClip', 'GESContainer', 'GESTimelineElement', 'GInitiallyUnowned', 'GObject', 'GESExtractable', 'GESMetaContainer'],
    GESUriClipAsset: ['GESUriClipAsset', 'GESSourceClipAsset', 'GESClipAsset', 'GESAsset', 'GObject', 'GESMetaContainer', 'GAsyncInitable', 'GInitable'],
    GESUriSourceAsset: ['GESUriSourceAsset', 'GESTrackElementAsset', 'GESAsset', 'GObject', 'GESMetaContainer', 'GAsyncInitable', 'GInitable'],
    GESVideoTestSource: ['GESVideoTestSource', 'GESVideoSource', 'GESSource', 'GESTrackElement', 'GESTimelineElement', 'GInitiallyUnowned', 'GObject', 'GESExtractable', 'GESMetaContainer'],
    GESVideoTrack: ['GESVideoTrack', 'GESTrack', 'GstBin', 'GstElement', 'GstObject', 'GInitiallyUnowned', 'GObject', 'GESMetaContainer', 'GstChildProxy'],
    GESVideoTransition: ['GESVideoTransition', 'GESTransition', 'GESOperation', 'GESTrackElement', 'GESTimelineElement', 'GInitiallyUnowned', 'GObject', 'GESExtractable', 'GESMetaContainer'],
    GESVideoUriSource: ['GESVideoUriSource', 'GESVideoSource', 'GESSource', 'GESTrackElement', 'GESTimelineElement', 'GInitiallyUnowned', 'GObject', 'GESExtractable', 'GESMetaContainer'],
    GESXmlFormatter: ['GESXmlFormatter', 'GESBaseXmlFormatter', 'GESFormatter', 'GInitiallyUnowned', 'GObject', 'GESExtractable'],
};

// The GTypes above that ARE widgets are the `Widgets` map in the sibling `.d.ts`; these
// are the ones that merely HOLD one, through `set_child`/`get_child`, descending from
// `GObject.Object`. A renderer places them like a container; a check asking "is this a
// widget" must not count them. Derived from the accessor pair, never from a list — the
// count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    GESEdge: ['edge_start', 'start', 'edge_end', 'end', 'edge_none', 'none'],
    GESEditMode: ['edit_normal', 'normal', 'edit_ripple', 'ripple', 'edit_roll', 'roll', 'edit_trim', 'trim', 'edit_slide', 'slide'],
    GESTextHAlign: ['left', 'center', 'right', 'position', 'absolute'],
    GESTextVAlign: ['baseline', 'bottom', 'top', 'position', 'center', 'absolute'],
    GESVideoStandardTransitionType: ['none', 'bar-wipe-lr', 'bar-wipe-tb', 'box-wipe-tl', 'box-wipe-tr', 'box-wipe-br', 'box-wipe-bl', 'four-box-wipe-ci', 'four-box-wipe-co', 'barndoor-v', 'barndoor-h', 'box-wipe-tc', 'box-wipe-rc', 'box-wipe-bc', 'box-wipe-lc', 'diagonal-tl', 'diagonal-tr', 'bowtie-v', 'bowtie-h', 'barndoor-dbl', 'barndoor-dtl', 'misc-diagonal-dbd', 'misc-diagonal-dd', 'vee-d', 'vee-l', 'vee-u', 'vee-r', 'barnvee-d', 'barnvee-l', 'barnvee-u', 'barnvee-r', 'iris-rect', 'clock-cw12', 'clock-cw3', 'clock-cw6', 'clock-cw9', 'pinwheel-tbv', 'pinwheel-tbh', 'pinwheel-fb', 'fan-ct', 'fan-cr', 'doublefan-fov', 'doublefan-foh', 'singlesweep-cwt', 'singlesweep-cwr', 'singlesweep-cwb', 'singlesweep-cwl', 'doublesweep-pv', 'doublesweep-pd', 'doublesweep-ov', 'doublesweep-oh', 'fan-t', 'fan-r', 'fan-b', 'fan-l', 'doublefan-fiv', 'doublefan-fih', 'singlesweep-cwtl', 'singlesweep-cwbl', 'singlesweep-cwbr', 'singlesweep-cwtr', 'doublesweep-pdtl', 'doublesweep-pdbl', 'saloondoor-t', 'saloondoor-l', 'saloondoor-b', 'saloondoor-r', 'windshield-r', 'windshield-u', 'windshield-v', 'windshield-h', 'crossfade', 'fade-in'],
    GESVideoTestPattern: ['smpte', 'snow', 'black', 'white', 'red', 'green', 'blue', 'checkers-1', 'checkers-2', 'checkers-4', 'checkers-8', 'circular', 'blink', 'smpte75', 'zone-plate', 'gamut', 'chroma-zone-plate', 'solid-color'],
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
    'GESEdge.edge_end': 1,
    'GESEdge.edge_none': 2,
    'GESEdge.edge_start': 0,
    'GESEdge.end': 1,
    'GESEdge.none': 2,
    'GESEdge.start': 0,
    'GESEditMode.edit_normal': 0,
    'GESEditMode.edit_ripple': 1,
    'GESEditMode.edit_roll': 2,
    'GESEditMode.edit_slide': 4,
    'GESEditMode.edit_trim': 3,
    'GESEditMode.normal': 0,
    'GESEditMode.ripple': 1,
    'GESEditMode.roll': 2,
    'GESEditMode.slide': 4,
    'GESEditMode.trim': 3,
    'GESTextHAlign.absolute': 5,
    'GESTextHAlign.center': 1,
    'GESTextHAlign.left': 0,
    'GESTextHAlign.position': 4,
    'GESTextHAlign.right': 2,
    'GESTextVAlign.absolute': 5,
    'GESTextVAlign.baseline': 0,
    'GESTextVAlign.bottom': 1,
    'GESTextVAlign.center': 4,
    'GESTextVAlign.position': 3,
    'GESTextVAlign.top': 2,
    'GESVideoStandardTransitionType.bar-wipe-lr': 1,
    'GESVideoStandardTransitionType.bar-wipe-tb': 2,
    'GESVideoStandardTransitionType.barndoor-dbl': 45,
    'GESVideoStandardTransitionType.barndoor-dtl': 46,
    'GESVideoStandardTransitionType.barndoor-h': 22,
    'GESVideoStandardTransitionType.barndoor-v': 21,
    'GESVideoStandardTransitionType.barnvee-d': 65,
    'GESVideoStandardTransitionType.barnvee-l': 66,
    'GESVideoStandardTransitionType.barnvee-r': 68,
    'GESVideoStandardTransitionType.barnvee-u': 67,
    'GESVideoStandardTransitionType.bowtie-h': 44,
    'GESVideoStandardTransitionType.bowtie-v': 43,
    'GESVideoStandardTransitionType.box-wipe-bc': 25,
    'GESVideoStandardTransitionType.box-wipe-bl': 6,
    'GESVideoStandardTransitionType.box-wipe-br': 5,
    'GESVideoStandardTransitionType.box-wipe-lc': 26,
    'GESVideoStandardTransitionType.box-wipe-rc': 24,
    'GESVideoStandardTransitionType.box-wipe-tc': 23,
    'GESVideoStandardTransitionType.box-wipe-tl': 3,
    'GESVideoStandardTransitionType.box-wipe-tr': 4,
    'GESVideoStandardTransitionType.clock-cw12': 201,
    'GESVideoStandardTransitionType.clock-cw3': 202,
    'GESVideoStandardTransitionType.clock-cw6': 203,
    'GESVideoStandardTransitionType.clock-cw9': 204,
    'GESVideoStandardTransitionType.crossfade': 512,
    'GESVideoStandardTransitionType.diagonal-tl': 41,
    'GESVideoStandardTransitionType.diagonal-tr': 42,
    'GESVideoStandardTransitionType.doublefan-fih': 236,
    'GESVideoStandardTransitionType.doublefan-fiv': 235,
    'GESVideoStandardTransitionType.doublefan-foh': 214,
    'GESVideoStandardTransitionType.doublefan-fov': 213,
    'GESVideoStandardTransitionType.doublesweep-oh': 228,
    'GESVideoStandardTransitionType.doublesweep-ov': 227,
    'GESVideoStandardTransitionType.doublesweep-pd': 226,
    'GESVideoStandardTransitionType.doublesweep-pdbl': 246,
    'GESVideoStandardTransitionType.doublesweep-pdtl': 245,
    'GESVideoStandardTransitionType.doublesweep-pv': 225,
    'GESVideoStandardTransitionType.fade-in': 513,
    'GESVideoStandardTransitionType.fan-b': 233,
    'GESVideoStandardTransitionType.fan-cr': 212,
    'GESVideoStandardTransitionType.fan-ct': 211,
    'GESVideoStandardTransitionType.fan-l': 234,
    'GESVideoStandardTransitionType.fan-r': 232,
    'GESVideoStandardTransitionType.fan-t': 231,
    'GESVideoStandardTransitionType.four-box-wipe-ci': 7,
    'GESVideoStandardTransitionType.four-box-wipe-co': 8,
    'GESVideoStandardTransitionType.iris-rect': 101,
    'GESVideoStandardTransitionType.misc-diagonal-dbd': 47,
    'GESVideoStandardTransitionType.misc-diagonal-dd': 48,
    'GESVideoStandardTransitionType.none': 0,
    'GESVideoStandardTransitionType.pinwheel-fb': 207,
    'GESVideoStandardTransitionType.pinwheel-tbh': 206,
    'GESVideoStandardTransitionType.pinwheel-tbv': 205,
    'GESVideoStandardTransitionType.saloondoor-b': 253,
    'GESVideoStandardTransitionType.saloondoor-l': 252,
    'GESVideoStandardTransitionType.saloondoor-r': 254,
    'GESVideoStandardTransitionType.saloondoor-t': 251,
    'GESVideoStandardTransitionType.singlesweep-cwb': 223,
    'GESVideoStandardTransitionType.singlesweep-cwbl': 242,
    'GESVideoStandardTransitionType.singlesweep-cwbr': 243,
    'GESVideoStandardTransitionType.singlesweep-cwl': 224,
    'GESVideoStandardTransitionType.singlesweep-cwr': 222,
    'GESVideoStandardTransitionType.singlesweep-cwt': 221,
    'GESVideoStandardTransitionType.singlesweep-cwtl': 241,
    'GESVideoStandardTransitionType.singlesweep-cwtr': 244,
    'GESVideoStandardTransitionType.vee-d': 61,
    'GESVideoStandardTransitionType.vee-l': 62,
    'GESVideoStandardTransitionType.vee-r': 64,
    'GESVideoStandardTransitionType.vee-u': 63,
    'GESVideoStandardTransitionType.windshield-h': 264,
    'GESVideoStandardTransitionType.windshield-r': 261,
    'GESVideoStandardTransitionType.windshield-u': 262,
    'GESVideoStandardTransitionType.windshield-v': 263,
    'GESVideoTestPattern.black': 2,
    'GESVideoTestPattern.blink': 12,
    'GESVideoTestPattern.blue': 6,
    'GESVideoTestPattern.checkers-1': 7,
    'GESVideoTestPattern.checkers-2': 8,
    'GESVideoTestPattern.checkers-4': 9,
    'GESVideoTestPattern.checkers-8': 10,
    'GESVideoTestPattern.chroma-zone-plate': 16,
    'GESVideoTestPattern.circular': 11,
    'GESVideoTestPattern.gamut': 15,
    'GESVideoTestPattern.green': 5,
    'GESVideoTestPattern.red': 4,
    'GESVideoTestPattern.smpte': 0,
    'GESVideoTestPattern.smpte75': 13,
    'GESVideoTestPattern.snow': 1,
    'GESVideoTestPattern.solid-color': 17,
    'GESVideoTestPattern.white': 3,
    'GESVideoTestPattern.zone-plate': 14,
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
    'GESMarkerFlags.none': 0,
    'GESMarkerFlags.snappable': 1,
    'GESMetaFlag.readable': 1,
    'GESMetaFlag.readwrite': 3,
    'GESMetaFlag.writable': 2,
    'GESPipelineFlags.audio_preview': 1,
    'GESPipelineFlags.full_preview': 3,
    'GESPipelineFlags.render': 4,
    'GESPipelineFlags.smart_render': 8,
    'GESPipelineFlags.video_preview': 2,
    'GESTrackType.audio': 2,
    'GESTrackType.custom': 16,
    'GESTrackType.text': 8,
    'GESTrackType.unknown': 1,
    'GESTrackType.video': 4,
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
    'GESClip.supported-formats': 'GESTrackType',
    'GESClipAsset.supported-formats': 'GESTrackType',
    'GESMarkerList.flags': 'GESMarkerFlags',
    'GESPipeline.mode': 'GESPipelineFlags',
    'GESTestClip.vpattern': 'GESVideoTestPattern',
    'GESTextOverlayClip.halignment': 'GESTextHAlign',
    'GESTextOverlayClip.valignment': 'GESTextVAlign',
    'GESTitleClip.halignment': 'GESTextHAlign',
    'GESTitleClip.valignment': 'GESTextVAlign',
    'GESTrack.track-type': 'GESTrackType',
    'GESTrackElement.track-type': 'GESTrackType',
    'GESTrackElementAsset.track-type': 'GESTrackType',
    'GESTransitionClip.vtype': 'GESVideoStandardTransitionType',
    'GESUriClip.supported-formats': 'GESTrackType',
    'GESVideoTransition.transition-type': 'GESVideoStandardTransitionType',
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
    'GESAsset.extractable-type': 'GType',
    'GESAsset.id': 'gchararray',
    'GESAsset.proxy': 'GESAsset',
    'GESAudioUriSource.uri': 'gchararray',
    'GESClip.supported-formats': 'GESTrackType',
    'GESClipAsset.supported-formats': 'GESTrackType',
    'GESDiscovererManager.timeout': 'guint64',
    'GESDiscovererManager.use-cache': 'gboolean',
    'GESEffect.bin-description': 'gchararray',
    'GESEffectClip.audio-bin-description': 'gchararray',
    'GESEffectClip.video-bin-description': 'gchararray',
    'GESGroup.duration': 'guint64',
    'GESGroup.in-point': 'guint64',
    'GESGroup.max-duration': 'guint64',
    'GESGroup.priority': 'guint',
    'GESGroup.start': 'guint64',
    'GESImageSource.uri': 'gchararray',
    'GESLayer.auto-transition': 'gboolean',
    'GESLayer.priority': 'guint',
    'GESMarkerList.flags': 'GESMarkerFlags',
    'GESMultiFileSource.uri': 'gchararray',
    'GESPipeline.audio-filter': 'GstElement',
    'GESPipeline.audio-sink': 'GstElement',
    'GESPipeline.mode': 'GESPipelineFlags',
    'GESPipeline.timeline': 'GESTimeline',
    'GESPipeline.video-filter': 'GstElement',
    'GESPipeline.video-sink': 'GstElement',
    'GESProject.uri': 'gchararray',
    'GESTestClip.freq': 'gdouble',
    'GESTestClip.mute': 'gboolean',
    'GESTestClip.volume': 'gdouble',
    'GESTestClip.vpattern': 'GESVideoTestPattern',
    'GESTextOverlayClip.color': 'guint',
    'GESTextOverlayClip.font-desc': 'gchararray',
    'GESTextOverlayClip.halignment': 'GESTextHAlign',
    'GESTextOverlayClip.text': 'gchararray',
    'GESTextOverlayClip.valignment': 'GESTextVAlign',
    'GESTextOverlayClip.xpos': 'gdouble',
    'GESTextOverlayClip.ypos': 'gdouble',
    'GESTimeline.auto-transition': 'gboolean',
    'GESTimeline.snapping-distance': 'guint64',
    'GESTimelineElement.duration': 'guint64',
    'GESTimelineElement.in-point': 'guint64',
    'GESTimelineElement.max-duration': 'guint64',
    'GESTimelineElement.name': 'gchararray',
    'GESTimelineElement.parent': 'GESTimelineElement',
    'GESTimelineElement.priority': 'guint',
    'GESTimelineElement.serialize': 'gboolean',
    'GESTimelineElement.start': 'guint64',
    'GESTimelineElement.timeline': 'GESTimeline',
    'GESTitleClip.background': 'guint',
    'GESTitleClip.color': 'guint',
    'GESTitleClip.font-desc': 'gchararray',
    'GESTitleClip.halignment': 'GESTextHAlign',
    'GESTitleClip.text': 'gchararray',
    'GESTitleClip.valignment': 'GESTextVAlign',
    'GESTitleClip.xpos': 'gdouble',
    'GESTitleClip.ypos': 'gdouble',
    'GESTrack.id': 'gchararray',
    'GESTrack.mixing': 'gboolean',
    'GESTrack.track-type': 'GESTrackType',
    'GESTrackElement.active': 'gboolean',
    'GESTrackElement.auto-clamp-control-sources': 'gboolean',
    'GESTrackElement.has-internal-source': 'gboolean',
    'GESTrackElement.track-type': 'GESTrackType',
    'GESTrackElementAsset.track-type': 'GESTrackType',
    'GESTransitionClip.vtype': 'GESVideoStandardTransitionType',
    'GESUriClip.is-image': 'gboolean',
    'GESUriClip.mute': 'gboolean',
    'GESUriClip.supported-formats': 'GESTrackType',
    'GESUriClip.uri': 'gchararray',
    'GESUriClipAsset.duration': 'guint64',
    'GESVideoTransition.border': 'guint',
    'GESVideoTransition.invert': 'gboolean',
    'GESVideoTransition.transition-type': 'GESVideoStandardTransitionType',
    'GESVideoUriSource.uri': 'gchararray',
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
    'GESDiscovererManager': '1.24',
    'GESDiscovererManager.timeout': '1.24',
    'GESDiscovererManager::discovered': '1.24',
    'GESDiscovererManager::load-serialized-info': '1.24',
    'GESDiscovererManager::source-setup': '1.24',
    'GESLayer::active-changed': '1.18',
    'GESMarker': '1.18',
    'GESMarkerList': '1.18',
    'GESMarkerList.flags': '1.20',
    'GESMarkerList::marker-added': '1.18',
    'GESMarkerList::marker-moved': '1.18',
    'GESMarkerList::marker-removed': '1.18',
    'GESPipeline.audio-filter': '1.6.0',
    'GESPipeline.video-filter': '1.6.0',
    'GESProject::asset-loading': '1.8',
    'GESProject::error-loading': '1.18',
    'GESProject::loading': '1.18',
    'GESSourceClipAsset': '1.18',
    'GESTimeline::select-element-track': '1.18',
    'GESTimelineElement::child-property-added': '1.18',
    'GESTimelineElement::child-property-removed': '1.18',
    'GESTrack.id': '1.18',
    'GESTrackElement.auto-clamp-control-sources': '1.18',
    'GESTrackElement.has-internal-source': '1.18',
};
