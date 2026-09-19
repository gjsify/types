// The widget vocabulary of GstVideo-1.0 as runtime data.
//
// GENERATED — do not edit. Provenance: GstVideo-1.0 — inlined base(s) their owner's vocabulary does not emit: GstBase.BaseSink
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'GstVideo',
    version: '1.0',
    libraryVersion: null,
    childHolders: 0,
    droppedBases: [],
    inlinedBases: ['GstBase.BaseSink'],
    unsettableProps: [],
    unresolvedProps: [],
    identifierPrefixes: ['Gst'],
    requiredVocabularies: ['@girs/gobject-2.0/vocabulary', '@girs/gst-1.0/vocabulary', '@girs/gstbase-1.0/vocabulary'],
};

export const OWN_PROPS = {
    GstBaseSink: ['async', 'blocksize', 'enable-last-sample', 'max-bitrate', 'max-lateness', 'processing-deadline', 'qos', 'render-delay', 'sync', 'throttle-time', 'ts-offset'],
    GstVideoAggregatorConvertPad: ['converter-config'],
    GstVideoAggregatorPad: ['max-last-buffer-repeat', 'repeat-after-eos', 'zorder'],
    GstVideoSink: ['show-preroll-frame'],
};

export const OWN_SIGNALS = {
    GstColorBalanceChannel: ['value-changed'],
};

// Every GType this namespace can INSTANTIATE -> the declarations its members come from.
//
// The key set is what a UI description file can name: a registered, non-abstract class.
// Not "every widget" — GtkBuilder resolves a name through `g_type_from_name`, which knows
// nothing about widgets, and a `.ui` file is full of `GtkSizeGroup`, `GtkTextTag`,
// `GtkEventController*` and `GtkCellRenderer*`. Use `Widgets` and `CHILD_HOLDERS`
// below for the narrower questions; they did not move.
export const DECLS = {
    GstColorBalanceChannel: ['GstColorBalanceChannel', 'GObject'],
    GstVideoAggregatorConvertPad: ['GstVideoAggregatorConvertPad', 'GstVideoAggregatorPad', 'GstAggregatorPad', 'GstPad', 'GstObject', 'GInitiallyUnowned', 'GObject'],
    GstVideoAggregatorPad: ['GstVideoAggregatorPad', 'GstAggregatorPad', 'GstPad', 'GstObject', 'GInitiallyUnowned', 'GObject'],
    GstVideoAggregatorParallelConvertPad: ['GstVideoAggregatorParallelConvertPad', 'GstVideoAggregatorConvertPad', 'GstVideoAggregatorPad', 'GstAggregatorPad', 'GstPad', 'GstObject', 'GInitiallyUnowned', 'GObject'],
    GstVideoBufferPool: ['GstVideoBufferPool', 'GstBufferPool', 'GstObject', 'GInitiallyUnowned', 'GObject'],
    GstVideoDmabufPool: ['GstVideoDmabufPool', 'GstVideoBufferPool', 'GstBufferPool', 'GstObject', 'GInitiallyUnowned', 'GObject'],
    GstVideoMultiviewFlagsSet: ['GstVideoMultiviewFlagsSet', 'GstFlagSet'],
    GstVideoSink: ['GstVideoSink', 'GstBaseSink', 'GstElement', 'GstObject', 'GInitiallyUnowned', 'GObject'],
};

// The GTypes above that ARE widgets are the `Widgets` map in the sibling `.d.ts`; these
// are the ones that merely HOLD one, through `set_child`/`get_child`, descending from
// `GObject.Object`. A renderer places them like a container; a check asking "is this a
// widget" must not count them. Derived from the accessor pair, never from a list — the
// count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    GstAncillaryMetaField: ['progressive', 'interlaced-first', 'interlaced-second'],
    GstColorBalanceType: ['hardware', 'software'],
    GstNavigationCommand: ['invalid', 'menu1', 'menu2', 'menu3', 'menu4', 'menu5', 'menu6', 'menu7', 'left', 'right', 'up', 'down', 'activate', 'prev-angle', 'next-angle'],
    GstNavigationEventType: ['invalid', 'key-press', 'key-release', 'mouse-button-press', 'mouse-button-release', 'mouse-move', 'command', 'mouse-scroll', 'touch-down', 'touch-motion', 'touch-up', 'touch-frame', 'touch-cancel', 'mouse-double-click'],
    GstNavigationMessageType: ['invalid', 'mouse-over', 'commands-changed', 'angles-changed', 'event'],
    GstNavigationQueryType: ['invalid', 'commands', 'angles'],
    GstVideoAFDSpec: ['dvb-etsi', 'atsc-a53', 'smpte-st2016-1'],
    GstVideoAFDValue: ['unavailable', '16-9-top-aligned', '14-9-top-aligned', 'greater-than-16-9', '4-3-full-16-9-full', '4-3-full-4-3-pillar', '16-9-letter-16-9-full', '14-9-letter-14-9-pillar', '4-3-full-14-9-center', '16-9-letter-14-9-center', '16-9-letter-4-3-center'],
    GstVideoAlphaMode: ['copy', 'set', 'mult'],
    GstVideoAncillaryDID: ['undefined', 'deletion', 'hanc-3g-audio-data-first', 'hanc-3g-audio-data-last', 'hanc-hdtv-audio-data-first', 'hanc-hdtv-audio-data-last', 'hanc-sdtv-audio-data-1-first', 'hanc-sdtv-audio-data-1-last', 'camera-position', 'hanc-error-detection', 'hanc-sdtv-audio-data-2-first', 'hanc-sdtv-audio-data-2-last'],
    GstVideoAncillaryDID16: ['s334-eia-708', 's334-eia-608', 's2016-3-afd-bar'],
    GstVideoCaptionType: ['unknown', 'cea608-raw', 'cea608-s334-1a', 'cea708-raw', 'cea708-cdp'],
    GstVideoChromaMethod: ['nearest', 'linear'],
    GstVideoChromaMode: ['full', 'upsample-only', 'downsample-only', 'none'],
    GstVideoColorMatrix: ['unknown', 'rgb', 'fcc', 'bt709', 'bt601', 'smpte240m', 'bt2020'],
    GstVideoColorPrimaries: ['unknown', 'bt709', 'bt470m', 'bt470bg', 'smpte170m', 'smpte240m', 'film', 'bt2020', 'adobergb', 'smptest428', 'smpterp431', 'smpteeg432', 'ebu3213'],
    GstVideoColorRange: ['unknown', '0-255', '16-235'],
    GstVideoDitherMethod: ['none', 'verterr', 'floyd-steinberg', 'sierra-lite', 'bayer'],
    GstVideoFieldOrder: ['unknown', 'top-field-first', 'bottom-field-first'],
    GstVideoFormat: ['unknown', 'encoded', 'i420', 'yv12', 'yuy2', 'uyvy', 'ayuv', 'rgbx', 'bgrx', 'xrgb', 'xbgr', 'rgba', 'bgra', 'argb', 'abgr', 'rgb', 'bgr', 'y41b', 'y42b', 'yvyu', 'y444', 'v210', 'v216', 'nv12', 'nv21', 'gray8', 'gray16-be', 'gray16-le', 'v308', 'rgb16', 'bgr16', 'rgb15', 'bgr15', 'uyvp', 'a420', 'rgb8p', 'yuv9', 'yvu9', 'iyu1', 'argb64', 'ayuv64', 'r210', 'i420-10be', 'i420-10le', 'i422-10be', 'i422-10le', 'y444-10be', 'y444-10le', 'gbr', 'gbr-10be', 'gbr-10le', 'nv16', 'nv24', 'nv12-64z32', 'a420-10be', 'a420-10le', 'a422-10be', 'a422-10le', 'a444-10be', 'a444-10le', 'nv61', 'p010-10be', 'p010-10le', 'iyu2', 'vyuy', 'gbra', 'gbra-10be', 'gbra-10le', 'gbr-12be', 'gbr-12le', 'gbra-12be', 'gbra-12le', 'i420-12be', 'i420-12le', 'i422-12be', 'i422-12le', 'y444-12be', 'y444-12le', 'gray10-le32', 'nv12-10le32', 'nv16-10le32', 'nv12-10le40', 'y210', 'y410', 'vuya', 'bgr10a2-le', 'rgb10a2-le', 'y444-16be', 'y444-16le', 'p016-be', 'p016-le', 'p012-be', 'p012-le', 'y212-be', 'y212-le', 'y412-be', 'y412-le', 'nv12-4l4', 'nv12-32l32', 'rgbp', 'bgrp', 'av12', 'argb64-le', 'argb64-be', 'rgba64-le', 'rgba64-be', 'bgra64-le', 'bgra64-be', 'abgr64-le', 'abgr64-be', 'nv12-16l32s', 'nv12-8l128', 'nv12-10be-8l128', 'nv12-10le40-4l4', 'dma-drm', 'mt2110t', 'mt2110r', 'a422', 'a444', 'a444-12le', 'a444-12be', 'a422-12le', 'a422-12be', 'a420-12le', 'a420-12be', 'a444-16le', 'a444-16be', 'a422-16le', 'a422-16be', 'a420-16le', 'a420-16be', 'gbr-16le', 'gbr-16be', 'rbga', 'y216-le', 'y216-be', 'y416-le', 'y416-be', 'gray10-le16', 'nv16-10le40', 'bgr10x2-le', 'rgb10x2-le'],
    GstVideoGLTextureOrientation: ['normal-y-normal', 'normal-y-flip', 'flip-y-normal', 'flip-y-flip'],
    GstVideoGLTextureType: ['luminance', 'luminance-alpha', 'rgb16', 'rgb', 'rgba', 'r', 'rg'],
    GstVideoGammaMode: ['none', 'remap'],
    GstVideoInterlaceMode: ['progressive', 'interleaved', 'mixed', 'fields', 'alternate'],
    GstVideoMatrixMode: ['full', 'input-only', 'output-only', 'none'],
    GstVideoMultiviewFramePacking: ['none', 'mono', 'left', 'right', 'side-by-side', 'side-by-side-quincunx', 'column-interleaved', 'row-interleaved', 'top-bottom', 'checkerboard'],
    GstVideoMultiviewMode: ['none', 'mono', 'left', 'right', 'side-by-side', 'side-by-side-quincunx', 'column-interleaved', 'row-interleaved', 'top-bottom', 'checkerboard', 'frame-by-frame', 'multiview-frame-by-frame', 'separated'],
    GstVideoOrientationMethod: ['identity', '90r', '180', '90l', 'horiz', 'vert', 'ul-lr', 'ur-ll', 'auto', 'custom'],
    GstVideoPrimariesMode: ['none', 'merge-only', 'fast'],
    GstVideoResamplerMethod: ['nearest', 'linear', 'cubic', 'sinc', 'lanczos'],
    GstVideoTileMode: ['unknown', 'zflipz-2x2', 'linear'],
    GstVideoTileType: ['indexed'],
    GstVideoTransferFunction: ['unknown', 'gamma10', 'gamma18', 'gamma20', 'gamma22', 'bt709', 'smpte240m', 'srgb', 'gamma28', 'log100', 'log316', 'bt2020-12', 'adobergb', 'bt2020-10', 'smpte2084', 'arib-std-b67', 'bt601'],
    GstVideoVBIParserResult: ['done', 'ok', 'error'],
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
    'GstAncillaryMetaField.interlaced-first': 16,
    'GstAncillaryMetaField.interlaced-second': 17,
    'GstAncillaryMetaField.progressive': 0,
    'GstColorBalanceType.hardware': 0,
    'GstColorBalanceType.software': 1,
    'GstNavigationCommand.activate': 24,
    'GstNavigationCommand.down': 23,
    'GstNavigationCommand.invalid': 0,
    'GstNavigationCommand.left': 20,
    'GstNavigationCommand.menu1': 1,
    'GstNavigationCommand.menu2': 2,
    'GstNavigationCommand.menu3': 3,
    'GstNavigationCommand.menu4': 4,
    'GstNavigationCommand.menu5': 5,
    'GstNavigationCommand.menu6': 6,
    'GstNavigationCommand.menu7': 7,
    'GstNavigationCommand.next-angle': 31,
    'GstNavigationCommand.prev-angle': 30,
    'GstNavigationCommand.right': 21,
    'GstNavigationCommand.up': 22,
    'GstNavigationEventType.command': 6,
    'GstNavigationEventType.invalid': 0,
    'GstNavigationEventType.key-press': 1,
    'GstNavigationEventType.key-release': 2,
    'GstNavigationEventType.mouse-button-press': 3,
    'GstNavigationEventType.mouse-button-release': 4,
    'GstNavigationEventType.mouse-double-click': 13,
    'GstNavigationEventType.mouse-move': 5,
    'GstNavigationEventType.mouse-scroll': 7,
    'GstNavigationEventType.touch-cancel': 12,
    'GstNavigationEventType.touch-down': 8,
    'GstNavigationEventType.touch-frame': 11,
    'GstNavigationEventType.touch-motion': 9,
    'GstNavigationEventType.touch-up': 10,
    'GstNavigationMessageType.angles-changed': 3,
    'GstNavigationMessageType.commands-changed': 2,
    'GstNavigationMessageType.event': 4,
    'GstNavigationMessageType.invalid': 0,
    'GstNavigationMessageType.mouse-over': 1,
    'GstNavigationQueryType.angles': 2,
    'GstNavigationQueryType.commands': 1,
    'GstNavigationQueryType.invalid': 0,
    'GstVideoAFDSpec.atsc-a53': 1,
    'GstVideoAFDSpec.dvb-etsi': 0,
    'GstVideoAFDSpec.smpte-st2016-1': 2,
    'GstVideoAFDValue.14-9-letter-14-9-pillar': 11,
    'GstVideoAFDValue.14-9-top-aligned': 3,
    'GstVideoAFDValue.16-9-letter-14-9-center': 14,
    'GstVideoAFDValue.16-9-letter-16-9-full': 10,
    'GstVideoAFDValue.16-9-letter-4-3-center': 15,
    'GstVideoAFDValue.16-9-top-aligned': 2,
    'GstVideoAFDValue.4-3-full-14-9-center': 13,
    'GstVideoAFDValue.4-3-full-16-9-full': 8,
    'GstVideoAFDValue.4-3-full-4-3-pillar': 9,
    'GstVideoAFDValue.greater-than-16-9': 4,
    'GstVideoAFDValue.unavailable': 0,
    'GstVideoAlphaMode.copy': 0,
    'GstVideoAlphaMode.mult': 2,
    'GstVideoAlphaMode.set': 1,
    'GstVideoAncillaryDID.camera-position': 240,
    'GstVideoAncillaryDID.deletion': 128,
    'GstVideoAncillaryDID.hanc-3g-audio-data-first': 160,
    'GstVideoAncillaryDID.hanc-3g-audio-data-last': 167,
    'GstVideoAncillaryDID.hanc-error-detection': 244,
    'GstVideoAncillaryDID.hanc-hdtv-audio-data-first': 224,
    'GstVideoAncillaryDID.hanc-hdtv-audio-data-last': 231,
    'GstVideoAncillaryDID.hanc-sdtv-audio-data-1-first': 236,
    'GstVideoAncillaryDID.hanc-sdtv-audio-data-1-last': 239,
    'GstVideoAncillaryDID.hanc-sdtv-audio-data-2-first': 248,
    'GstVideoAncillaryDID.hanc-sdtv-audio-data-2-last': 255,
    'GstVideoAncillaryDID.undefined': 0,
    'GstVideoAncillaryDID16.s2016-3-afd-bar': 16645,
    'GstVideoAncillaryDID16.s334-eia-608': 24834,
    'GstVideoAncillaryDID16.s334-eia-708': 24833,
    'GstVideoCaptionType.cea608-raw': 1,
    'GstVideoCaptionType.cea608-s334-1a': 2,
    'GstVideoCaptionType.cea708-cdp': 4,
    'GstVideoCaptionType.cea708-raw': 3,
    'GstVideoCaptionType.unknown': 0,
    'GstVideoChromaMethod.linear': 1,
    'GstVideoChromaMethod.nearest': 0,
    'GstVideoChromaMode.downsample-only': 2,
    'GstVideoChromaMode.full': 0,
    'GstVideoChromaMode.none': 3,
    'GstVideoChromaMode.upsample-only': 1,
    'GstVideoColorMatrix.bt2020': 6,
    'GstVideoColorMatrix.bt601': 4,
    'GstVideoColorMatrix.bt709': 3,
    'GstVideoColorMatrix.fcc': 2,
    'GstVideoColorMatrix.rgb': 1,
    'GstVideoColorMatrix.smpte240m': 5,
    'GstVideoColorMatrix.unknown': 0,
    'GstVideoColorPrimaries.adobergb': 8,
    'GstVideoColorPrimaries.bt2020': 7,
    'GstVideoColorPrimaries.bt470bg': 3,
    'GstVideoColorPrimaries.bt470m': 2,
    'GstVideoColorPrimaries.bt709': 1,
    'GstVideoColorPrimaries.ebu3213': 12,
    'GstVideoColorPrimaries.film': 6,
    'GstVideoColorPrimaries.smpte170m': 4,
    'GstVideoColorPrimaries.smpte240m': 5,
    'GstVideoColorPrimaries.smpteeg432': 11,
    'GstVideoColorPrimaries.smpterp431': 10,
    'GstVideoColorPrimaries.smptest428': 9,
    'GstVideoColorPrimaries.unknown': 0,
    'GstVideoColorRange.0-255': 1,
    'GstVideoColorRange.16-235': 2,
    'GstVideoColorRange.unknown': 0,
    'GstVideoDitherMethod.bayer': 4,
    'GstVideoDitherMethod.floyd-steinberg': 2,
    'GstVideoDitherMethod.none': 0,
    'GstVideoDitherMethod.sierra-lite': 3,
    'GstVideoDitherMethod.verterr': 1,
    'GstVideoFieldOrder.bottom-field-first': 2,
    'GstVideoFieldOrder.top-field-first': 1,
    'GstVideoFieldOrder.unknown': 0,
    'GstVideoFormat.a420': 34,
    'GstVideoFormat.a420-10be': 54,
    'GstVideoFormat.a420-10le': 55,
    'GstVideoFormat.a420-12be': 124,
    'GstVideoFormat.a420-12le': 123,
    'GstVideoFormat.a420-16be': 130,
    'GstVideoFormat.a420-16le': 129,
    'GstVideoFormat.a422': 117,
    'GstVideoFormat.a422-10be': 56,
    'GstVideoFormat.a422-10le': 57,
    'GstVideoFormat.a422-12be': 122,
    'GstVideoFormat.a422-12le': 121,
    'GstVideoFormat.a422-16be': 128,
    'GstVideoFormat.a422-16le': 127,
    'GstVideoFormat.a444': 118,
    'GstVideoFormat.a444-10be': 58,
    'GstVideoFormat.a444-10le': 59,
    'GstVideoFormat.a444-12be': 120,
    'GstVideoFormat.a444-12le': 119,
    'GstVideoFormat.a444-16be': 126,
    'GstVideoFormat.a444-16le': 125,
    'GstVideoFormat.abgr': 14,
    'GstVideoFormat.abgr64-be': 109,
    'GstVideoFormat.abgr64-le': 108,
    'GstVideoFormat.argb': 13,
    'GstVideoFormat.argb64': 39,
    'GstVideoFormat.argb64-be': 103,
    'GstVideoFormat.argb64-le': 102,
    'GstVideoFormat.av12': 101,
    'GstVideoFormat.ayuv': 6,
    'GstVideoFormat.ayuv64': 40,
    'GstVideoFormat.bgr': 16,
    'GstVideoFormat.bgr10a2-le': 85,
    'GstVideoFormat.bgr10x2-le': 140,
    'GstVideoFormat.bgr15': 32,
    'GstVideoFormat.bgr16': 30,
    'GstVideoFormat.bgra': 12,
    'GstVideoFormat.bgra64-be': 107,
    'GstVideoFormat.bgra64-le': 106,
    'GstVideoFormat.bgrp': 100,
    'GstVideoFormat.bgrx': 8,
    'GstVideoFormat.dma-drm': 114,
    'GstVideoFormat.encoded': 1,
    'GstVideoFormat.gbr': 48,
    'GstVideoFormat.gbr-10be': 49,
    'GstVideoFormat.gbr-10le': 50,
    'GstVideoFormat.gbr-12be': 68,
    'GstVideoFormat.gbr-12le': 69,
    'GstVideoFormat.gbr-16be': 132,
    'GstVideoFormat.gbr-16le': 131,
    'GstVideoFormat.gbra': 65,
    'GstVideoFormat.gbra-10be': 66,
    'GstVideoFormat.gbra-10le': 67,
    'GstVideoFormat.gbra-12be': 70,
    'GstVideoFormat.gbra-12le': 71,
    'GstVideoFormat.gray10-le16': 138,
    'GstVideoFormat.gray10-le32': 78,
    'GstVideoFormat.gray16-be': 26,
    'GstVideoFormat.gray16-le': 27,
    'GstVideoFormat.gray8': 25,
    'GstVideoFormat.i420': 2,
    'GstVideoFormat.i420-10be': 42,
    'GstVideoFormat.i420-10le': 43,
    'GstVideoFormat.i420-12be': 72,
    'GstVideoFormat.i420-12le': 73,
    'GstVideoFormat.i422-10be': 44,
    'GstVideoFormat.i422-10le': 45,
    'GstVideoFormat.i422-12be': 74,
    'GstVideoFormat.i422-12le': 75,
    'GstVideoFormat.iyu1': 38,
    'GstVideoFormat.iyu2': 63,
    'GstVideoFormat.mt2110r': 116,
    'GstVideoFormat.mt2110t': 115,
    'GstVideoFormat.nv12': 23,
    'GstVideoFormat.nv12-10be-8l128': 112,
    'GstVideoFormat.nv12-10le32': 79,
    'GstVideoFormat.nv12-10le40': 81,
    'GstVideoFormat.nv12-10le40-4l4': 113,
    'GstVideoFormat.nv12-16l32s': 110,
    'GstVideoFormat.nv12-32l32': 98,
    'GstVideoFormat.nv12-4l4': 97,
    'GstVideoFormat.nv12-64z32': 53,
    'GstVideoFormat.nv12-8l128': 111,
    'GstVideoFormat.nv16': 51,
    'GstVideoFormat.nv16-10le32': 80,
    'GstVideoFormat.nv16-10le40': 139,
    'GstVideoFormat.nv21': 24,
    'GstVideoFormat.nv24': 52,
    'GstVideoFormat.nv61': 60,
    'GstVideoFormat.p010-10be': 61,
    'GstVideoFormat.p010-10le': 62,
    'GstVideoFormat.p012-be': 91,
    'GstVideoFormat.p012-le': 92,
    'GstVideoFormat.p016-be': 89,
    'GstVideoFormat.p016-le': 90,
    'GstVideoFormat.r210': 41,
    'GstVideoFormat.rbga': 133,
    'GstVideoFormat.rgb': 15,
    'GstVideoFormat.rgb10a2-le': 86,
    'GstVideoFormat.rgb10x2-le': 141,
    'GstVideoFormat.rgb15': 31,
    'GstVideoFormat.rgb16': 29,
    'GstVideoFormat.rgb8p': 35,
    'GstVideoFormat.rgba': 11,
    'GstVideoFormat.rgba64-be': 105,
    'GstVideoFormat.rgba64-le': 104,
    'GstVideoFormat.rgbp': 99,
    'GstVideoFormat.rgbx': 7,
    'GstVideoFormat.unknown': 0,
    'GstVideoFormat.uyvp': 33,
    'GstVideoFormat.uyvy': 5,
    'GstVideoFormat.v210': 21,
    'GstVideoFormat.v216': 22,
    'GstVideoFormat.v308': 28,
    'GstVideoFormat.vuya': 84,
    'GstVideoFormat.vyuy': 64,
    'GstVideoFormat.xbgr': 10,
    'GstVideoFormat.xrgb': 9,
    'GstVideoFormat.y210': 82,
    'GstVideoFormat.y212-be': 93,
    'GstVideoFormat.y212-le': 94,
    'GstVideoFormat.y216-be': 135,
    'GstVideoFormat.y216-le': 134,
    'GstVideoFormat.y410': 83,
    'GstVideoFormat.y412-be': 95,
    'GstVideoFormat.y412-le': 96,
    'GstVideoFormat.y416-be': 137,
    'GstVideoFormat.y416-le': 136,
    'GstVideoFormat.y41b': 17,
    'GstVideoFormat.y42b': 18,
    'GstVideoFormat.y444': 20,
    'GstVideoFormat.y444-10be': 46,
    'GstVideoFormat.y444-10le': 47,
    'GstVideoFormat.y444-12be': 76,
    'GstVideoFormat.y444-12le': 77,
    'GstVideoFormat.y444-16be': 87,
    'GstVideoFormat.y444-16le': 88,
    'GstVideoFormat.yuv9': 36,
    'GstVideoFormat.yuy2': 4,
    'GstVideoFormat.yv12': 3,
    'GstVideoFormat.yvu9': 37,
    'GstVideoFormat.yvyu': 19,
    'GstVideoGLTextureOrientation.flip-y-flip': 3,
    'GstVideoGLTextureOrientation.flip-y-normal': 2,
    'GstVideoGLTextureOrientation.normal-y-flip': 1,
    'GstVideoGLTextureOrientation.normal-y-normal': 0,
    'GstVideoGLTextureType.luminance': 0,
    'GstVideoGLTextureType.luminance-alpha': 1,
    'GstVideoGLTextureType.r': 5,
    'GstVideoGLTextureType.rg': 6,
    'GstVideoGLTextureType.rgb': 3,
    'GstVideoGLTextureType.rgb16': 2,
    'GstVideoGLTextureType.rgba': 4,
    'GstVideoGammaMode.none': 0,
    'GstVideoGammaMode.remap': 1,
    'GstVideoInterlaceMode.alternate': 4,
    'GstVideoInterlaceMode.fields': 3,
    'GstVideoInterlaceMode.interleaved': 1,
    'GstVideoInterlaceMode.mixed': 2,
    'GstVideoInterlaceMode.progressive': 0,
    'GstVideoMatrixMode.full': 0,
    'GstVideoMatrixMode.input-only': 1,
    'GstVideoMatrixMode.none': 3,
    'GstVideoMatrixMode.output-only': 2,
    'GstVideoMultiviewFramePacking.checkerboard': 8,
    'GstVideoMultiviewFramePacking.column-interleaved': 5,
    'GstVideoMultiviewFramePacking.left': 1,
    'GstVideoMultiviewFramePacking.mono': 0,
    'GstVideoMultiviewFramePacking.none': -1,
    'GstVideoMultiviewFramePacking.right': 2,
    'GstVideoMultiviewFramePacking.row-interleaved': 6,
    'GstVideoMultiviewFramePacking.side-by-side': 3,
    'GstVideoMultiviewFramePacking.side-by-side-quincunx': 4,
    'GstVideoMultiviewFramePacking.top-bottom': 7,
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
    'GstVideoOrientationMethod.180': 2,
    'GstVideoOrientationMethod.90l': 3,
    'GstVideoOrientationMethod.90r': 1,
    'GstVideoOrientationMethod.auto': 8,
    'GstVideoOrientationMethod.custom': 9,
    'GstVideoOrientationMethod.horiz': 4,
    'GstVideoOrientationMethod.identity': 0,
    'GstVideoOrientationMethod.ul-lr': 6,
    'GstVideoOrientationMethod.ur-ll': 7,
    'GstVideoOrientationMethod.vert': 5,
    'GstVideoPrimariesMode.fast': 2,
    'GstVideoPrimariesMode.merge-only': 1,
    'GstVideoPrimariesMode.none': 0,
    'GstVideoResamplerMethod.cubic': 2,
    'GstVideoResamplerMethod.lanczos': 4,
    'GstVideoResamplerMethod.linear': 1,
    'GstVideoResamplerMethod.nearest': 0,
    'GstVideoResamplerMethod.sinc': 3,
    'GstVideoTileMode.linear': 131072,
    'GstVideoTileMode.unknown': 0,
    'GstVideoTileMode.zflipz-2x2': 65536,
    'GstVideoTileType.indexed': 0,
    'GstVideoTransferFunction.adobergb': 12,
    'GstVideoTransferFunction.arib-std-b67': 15,
    'GstVideoTransferFunction.bt2020-10': 13,
    'GstVideoTransferFunction.bt2020-12': 11,
    'GstVideoTransferFunction.bt601': 16,
    'GstVideoTransferFunction.bt709': 5,
    'GstVideoTransferFunction.gamma10': 1,
    'GstVideoTransferFunction.gamma18': 2,
    'GstVideoTransferFunction.gamma20': 3,
    'GstVideoTransferFunction.gamma22': 4,
    'GstVideoTransferFunction.gamma28': 8,
    'GstVideoTransferFunction.log100': 9,
    'GstVideoTransferFunction.log316': 10,
    'GstVideoTransferFunction.smpte2084': 14,
    'GstVideoTransferFunction.smpte240m': 6,
    'GstVideoTransferFunction.srgb': 7,
    'GstVideoTransferFunction.unknown': 0,
    'GstVideoVBIParserResult.done': 0,
    'GstVideoVBIParserResult.error': 2,
    'GstVideoVBIParserResult.ok': 1,
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
    'GstNavigationModifierType.button1-mask': 256,
    'GstNavigationModifierType.button2-mask': 512,
    'GstNavigationModifierType.button3-mask': 1024,
    'GstNavigationModifierType.button4-mask': 2048,
    'GstNavigationModifierType.button5-mask': 4096,
    'GstNavigationModifierType.control-mask': 4,
    'GstNavigationModifierType.hyper-mask': 134217728,
    'GstNavigationModifierType.lock-mask': 2,
    'GstNavigationModifierType.mask': 469770239,
    'GstNavigationModifierType.meta-mask': 268435456,
    'GstNavigationModifierType.mod1-mask': 8,
    'GstNavigationModifierType.mod2-mask': 16,
    'GstNavigationModifierType.mod3-mask': 32,
    'GstNavigationModifierType.mod4-mask': 64,
    'GstNavigationModifierType.mod5-mask': 128,
    'GstNavigationModifierType.none': 0,
    'GstNavigationModifierType.shift-mask': 1,
    'GstNavigationModifierType.super-mask': 67108864,
    'GstVideoBufferFlags.bottom-field': 8388608,
    'GstVideoBufferFlags.first-in-bundle': 33554432,
    'GstVideoBufferFlags.interlaced': 1048576,
    'GstVideoBufferFlags.last': 268435456,
    'GstVideoBufferFlags.marker': 512,
    'GstVideoBufferFlags.multiple-view': 16777216,
    'GstVideoBufferFlags.onefield': 8388608,
    'GstVideoBufferFlags.rff': 4194304,
    'GstVideoBufferFlags.tff': 2097152,
    'GstVideoBufferFlags.top-field': 10485760,
    'GstVideoChromaFlags.interlaced': 1,
    'GstVideoChromaFlags.none': 0,
    'GstVideoChromaSite.alt-line': 8,
    'GstVideoChromaSite.cosited': 6,
    'GstVideoChromaSite.dv': 14,
    'GstVideoChromaSite.h-cosited': 2,
    'GstVideoChromaSite.jpeg': 1,
    'GstVideoChromaSite.mpeg2': 2,
    'GstVideoChromaSite.none': 1,
    'GstVideoChromaSite.unknown': 0,
    'GstVideoChromaSite.v-cosited': 4,
    'GstVideoCodecFrameFlags.corrupted': 16,
    'GstVideoCodecFrameFlags.decode-only': 1,
    'GstVideoCodecFrameFlags.force-keyframe': 4,
    'GstVideoCodecFrameFlags.force-keyframe-headers': 8,
    'GstVideoCodecFrameFlags.sync-point': 2,
    'GstVideoDecoderRequestSyncPointFlags.corrupt-output': 2,
    'GstVideoDecoderRequestSyncPointFlags.discard-input': 1,
    'GstVideoDitherFlags.interlaced': 1,
    'GstVideoDitherFlags.none': 0,
    'GstVideoDitherFlags.quantize': 2,
    'GstVideoFlags.none': 0,
    'GstVideoFlags.premultiplied-alpha': 2,
    'GstVideoFlags.variable-fps': 1,
    'GstVideoFormatFlags.alpha': 8,
    'GstVideoFormatFlags.complex': 64,
    'GstVideoFormatFlags.gray': 4,
    'GstVideoFormatFlags.le': 16,
    'GstVideoFormatFlags.palette': 32,
    'GstVideoFormatFlags.rgb': 2,
    'GstVideoFormatFlags.subtiles': 512,
    'GstVideoFormatFlags.tiled': 256,
    'GstVideoFormatFlags.unpack': 128,
    'GstVideoFormatFlags.yuv': 1,
    'GstVideoFrameFlags.bottom-field': 8,
    'GstVideoFrameFlags.first-in-bundle': 32,
    'GstVideoFrameFlags.interlaced': 1,
    'GstVideoFrameFlags.multiple-view': 16,
    'GstVideoFrameFlags.none': 0,
    'GstVideoFrameFlags.onefield': 8,
    'GstVideoFrameFlags.rff': 4,
    'GstVideoFrameFlags.tff': 2,
    'GstVideoFrameFlags.top-field': 10,
    'GstVideoFrameMapFlags.last': 16777216,
    'GstVideoFrameMapFlags.no-ref': 65536,
    'GstVideoMultiviewFlags.half-aspect': 16384,
    'GstVideoMultiviewFlags.left-flipped': 2,
    'GstVideoMultiviewFlags.left-flopped': 4,
    'GstVideoMultiviewFlags.mixed-mono': 32768,
    'GstVideoMultiviewFlags.none': 0,
    'GstVideoMultiviewFlags.right-flipped': 8,
    'GstVideoMultiviewFlags.right-flopped': 16,
    'GstVideoMultiviewFlags.right-view-first': 1,
    'GstVideoOverlayFormatFlags.global-alpha': 2,
    'GstVideoOverlayFormatFlags.none': 0,
    'GstVideoOverlayFormatFlags.premultiplied-alpha': 1,
    'GstVideoPackFlags.interlaced': 2,
    'GstVideoPackFlags.none': 0,
    'GstVideoPackFlags.truncate-range': 1,
    'GstVideoResamplerFlags.half-taps': 1,
    'GstVideoResamplerFlags.none': 0,
    'GstVideoScalerFlags.interlaced': 1,
    'GstVideoScalerFlags.none': 0,
    'GstVideoTimeCodeFlags.drop-frame': 1,
    'GstVideoTimeCodeFlags.interlaced': 2,
    'GstVideoTimeCodeFlags.none': 0,
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
    'GstBaseSink.max-bitrate': '1.2',
    'GstBaseSink.processing-deadline': '1.16',
    'GstVideoAggregatorConvertPad': '1.16',
    'GstVideoAggregatorPad': '1.16',
    'GstVideoAggregatorParallelConvertPad': '1.20',
    'GstVideoDmabufPool': '1.28',
};
