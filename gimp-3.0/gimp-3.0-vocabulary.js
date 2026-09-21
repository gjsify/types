// The widget vocabulary of Gimp-3.0 as runtime data.
//
// GENERATED — do not edit. Provenance: Gimp-3.0 — library 3.2.4 — dropped empty base(s): GObject.TypeModule GObject.TypePlugin
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'Gimp',
    version: '3.0',
    libraryVersion: '3.2.4',
    childHolders: 0,
    droppedBases: ['GObject.TypeModule', 'GObject.TypePlugin'],
    inlinedBases: [],
    unsettableProps: [],
    unresolvedProps: [],
    identifierPrefixes: ['Gimp'],
    requiredVocabularies: ['@girs/gexiv2-0.10/vocabulary', '@girs/gio-2.0/vocabulary', '@girs/gobject-2.0/vocabulary'],
};

export const OWN_PROPS = {
    GimpColorConfig: ['cmyk-profile', 'display-optimize', 'display-profile', 'display-profile-from-gdk', 'display-rendering-intent', 'display-use-black-point-compensation', 'gray-profile', 'mode', 'out-of-gamut-color', 'rgb-profile', 'show-hsv', 'show-rgb-u8', 'simulation-gamut-check', 'simulation-optimize', 'simulation-profile', 'simulation-rendering-intent', 'simulation-use-black-point-compensation'],
    GimpCurve: ['curve-type', 'n-samples'],
    GimpDisplay: ['id'],
    GimpDrawableFilter: ['id'],
    GimpExportOptions: ['capabilities'],
    GimpExportProcedure: ['capabilities', 'supports-comment', 'supports-exif', 'supports-iptc', 'supports-profile', 'supports-thumbnail', 'supports-xmp'],
    GimpImage: ['id'],
    GimpItem: ['id'],
    GimpModule: ['auto-load'],
    GimpPlugIn: ['program-name', 'read-channel', 'write-channel'],
    GimpProcedure: ['name', 'plug-in', 'procedure-type'],
    GimpResource: ['id'],
    GimpUnit: ['abbreviation', 'digits', 'factor', 'id', 'name', 'symbol'],
};

export const OWN_SIGNALS = {
    GimpChoice: ['sensitivity-changed'],
    GimpColorTransform: ['progress'],
    GimpCurve: ['points-changed', 'samples-changed'],
};

// Every GType this namespace can INSTANTIATE -> the declarations its members come from.
//
// The key set is what a UI description file can name: a registered, non-abstract class.
// Not "every widget" — GtkBuilder resolves a name through `g_type_from_name`, which knows
// nothing about widgets, and a `.ui` file is full of `GtkSizeGroup`, `GtkTextTag`,
// `GtkEventController*` and `GtkCellRenderer*`. Use `Widgets` and `CHILD_HOLDERS`
// below for the narrower questions; they did not move.
export const DECLS = {
    GimpBatchProcedure: ['GimpBatchProcedure', 'GimpProcedure', 'GObject'],
    GimpBrush: ['GimpBrush', 'GimpResource', 'GObject', 'GimpConfigInterface'],
    GimpChannel: ['GimpChannel', 'GimpDrawable', 'GimpItem', 'GObject'],
    GimpChoice: ['GimpChoice', 'GObject'],
    GimpColorConfig: ['GimpColorConfig', 'GObject', 'GimpConfigInterface'],
    GimpColorProfile: ['GimpColorProfile', 'GObject'],
    GimpColorTransform: ['GimpColorTransform', 'GObject'],
    GimpConfigPath: ['GimpConfigPath'],
    GimpCurve: ['GimpCurve', 'GObject'],
    GimpDisplay: ['GimpDisplay', 'GObject'],
    GimpDrawableFilter: ['GimpDrawableFilter', 'GObject'],
    GimpExportOptions: ['GimpExportOptions', 'GObject'],
    GimpExportProcedure: ['GimpExportProcedure', 'GimpFileProcedure', 'GimpProcedure', 'GObject'],
    GimpFont: ['GimpFont', 'GimpResource', 'GObject', 'GimpConfigInterface'],
    GimpGradient: ['GimpGradient', 'GimpResource', 'GObject', 'GimpConfigInterface'],
    GimpGroupLayer: ['GimpGroupLayer', 'GimpLayer', 'GimpDrawable', 'GimpItem', 'GObject'],
    GimpImage: ['GimpImage', 'GObject'],
    GimpImageProcedure: ['GimpImageProcedure', 'GimpProcedure', 'GObject'],
    GimpLayer: ['GimpLayer', 'GimpDrawable', 'GimpItem', 'GObject'],
    GimpLayerMask: ['GimpLayerMask', 'GimpChannel', 'GimpDrawable', 'GimpItem', 'GObject'],
    GimpLinkLayer: ['GimpLinkLayer', 'GimpLayer', 'GimpDrawable', 'GimpItem', 'GObject', 'GimpRasterizable'],
    GimpLoadProcedure: ['GimpLoadProcedure', 'GimpFileProcedure', 'GimpProcedure', 'GObject'],
    GimpMemsize: ['GimpMemsize'],
    GimpMetadata: ['GimpMetadata', 'GExiv2Metadata', 'GObject'],
    GimpModule: ['GimpModule', 'GObject'],
    GimpModuleDB: ['GimpModuleDB', 'GObject', 'GListModel'],
    GimpPDB: ['GimpPDB', 'GObject'],
    GimpPalette: ['GimpPalette', 'GimpResource', 'GObject', 'GimpConfigInterface'],
    GimpParamArray: ['GimpParamArray', 'GParam'],
    GimpParamBrush: ['GimpParamBrush', 'GimpParamResource', 'GimpParamObject', 'GParam'],
    GimpParamChannel: ['GimpParamChannel', 'GimpParamDrawable', 'GimpParamItem', 'GParam'],
    GimpParamChoice: ['GimpParamChoice', 'GParam'],
    GimpParamColor: ['GimpParamColor', 'GimpParamObject', 'GParam'],
    GimpParamConfigPath: ['GimpParamConfigPath', 'GParam'],
    GimpParamCoreObjectArray: ['GimpParamCoreObjectArray', 'GParam'],
    GimpParamCurve: ['GimpParamCurve', 'GParam'],
    GimpParamDisplay: ['GimpParamDisplay', 'GParam'],
    GimpParamDoubleArray: ['GimpParamDoubleArray', 'GimpParamArray', 'GParam'],
    GimpParamDrawable: ['GimpParamDrawable', 'GimpParamItem', 'GParam'],
    GimpParamDrawableFilter: ['GimpParamDrawableFilter', 'GParam'],
    GimpParamExportOptions: ['GimpParamExportOptions', 'GParam'],
    GimpParamFile: ['GimpParamFile', 'GimpParamObject', 'GParam'],
    GimpParamFont: ['GimpParamFont', 'GimpParamResource', 'GimpParamObject', 'GParam'],
    GimpParamGradient: ['GimpParamGradient', 'GimpParamResource', 'GimpParamObject', 'GParam'],
    GimpParamGroupLayer: ['GimpParamGroupLayer', 'GimpParamLayer', 'GimpParamDrawable', 'GimpParamItem', 'GParam'],
    GimpParamImage: ['GimpParamImage', 'GParam'],
    GimpParamInt32Array: ['GimpParamInt32Array', 'GimpParamArray', 'GParam'],
    GimpParamItem: ['GimpParamItem', 'GParam'],
    GimpParamLayer: ['GimpParamLayer', 'GimpParamDrawable', 'GimpParamItem', 'GParam'],
    GimpParamLayerMask: ['GimpParamLayerMask', 'GimpParamChannel', 'GimpParamDrawable', 'GimpParamItem', 'GParam'],
    GimpParamLinkLayer: ['GimpParamLinkLayer', 'GimpParamLayer', 'GimpParamDrawable', 'GimpParamItem', 'GParam'],
    GimpParamMatrix2: ['GimpParamMatrix2', 'GParam'],
    GimpParamMatrix3: ['GimpParamMatrix3', 'GParam'],
    GimpParamMemsize: ['GimpParamMemsize', 'GParam'],
    GimpParamPalette: ['GimpParamPalette', 'GimpParamResource', 'GimpParamObject', 'GParam'],
    GimpParamParasite: ['GimpParamParasite', 'GParam'],
    GimpParamPath: ['GimpParamPath', 'GimpParamItem', 'GParam'],
    GimpParamPattern: ['GimpParamPattern', 'GimpParamResource', 'GimpParamObject', 'GParam'],
    GimpParamRasterizable: ['GimpParamRasterizable', 'GimpParamDrawable', 'GimpParamItem', 'GParam'],
    GimpParamResource: ['GimpParamResource', 'GimpParamObject', 'GParam'],
    GimpParamSelection: ['GimpParamSelection', 'GimpParamChannel', 'GimpParamDrawable', 'GimpParamItem', 'GParam'],
    GimpParamTextLayer: ['GimpParamTextLayer', 'GimpParamLayer', 'GimpParamDrawable', 'GimpParamItem', 'GParam'],
    GimpParamUnit: ['GimpParamUnit', 'GimpParamObject', 'GParam'],
    GimpParamValueArray: ['GimpParamValueArray', 'GParam'],
    GimpParamVectorLayer: ['GimpParamVectorLayer', 'GimpParamLayer', 'GimpParamDrawable', 'GimpParamItem', 'GParam'],
    GimpPath: ['GimpPath', 'GimpItem', 'GObject'],
    GimpPattern: ['GimpPattern', 'GimpResource', 'GObject', 'GimpConfigInterface'],
    GimpPlugIn: ['GimpPlugIn', 'GObject'],
    GimpProcedure: ['GimpProcedure', 'GObject'],
    GimpSelection: ['GimpSelection', 'GimpChannel', 'GimpDrawable', 'GimpItem', 'GObject'],
    GimpTextLayer: ['GimpTextLayer', 'GimpLayer', 'GimpDrawable', 'GimpItem', 'GObject', 'GimpRasterizable'],
    GimpThumbnailProcedure: ['GimpThumbnailProcedure', 'GimpProcedure', 'GObject'],
    GimpUnit: ['GimpUnit', 'GObject'],
    GimpVectorLayer: ['GimpVectorLayer', 'GimpLayer', 'GimpDrawable', 'GimpItem', 'GObject', 'GimpRasterizable'],
    GimpVectorLoadProcedure: ['GimpVectorLoadProcedure', 'GimpLoadProcedure', 'GimpFileProcedure', 'GimpProcedure', 'GObject'],
};

// The GTypes above that ARE widgets are the `Widgets` map in the sibling `.d.ts`; these
// are the ones that merely HOLD one, through `set_child`/`get_child`, descending from
// `GObject.Object`. A renderer places them like a container; a check asking "is this a
// widget" must not count them. Derived from the accessor pair, never from a list — the
// count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    GimpAddMaskType: ['white', 'black', 'alpha', 'alpha-transfer', 'selection', 'copy', 'channel'],
    GimpBrushApplicationMode: ['hard', 'soft'],
    GimpBrushGeneratedShape: ['circle', 'square', 'diamond'],
    GimpCapStyle: ['butt', 'round', 'square'],
    GimpChannelOps: ['add', 'subtract', 'replace', 'intersect'],
    GimpChannelType: ['red', 'green', 'blue', 'gray', 'indexed', 'alpha'],
    GimpCheckSize: ['small-checks', 'medium-checks', 'large-checks'],
    GimpCheckType: ['light-checks', 'gray-checks', 'dark-checks', 'white-only', 'gray-only', 'black-only', 'custom-checks'],
    GimpCloneType: ['image', 'pattern'],
    GimpColorManagementMode: ['off', 'display', 'softproof'],
    GimpColorRenderingIntent: ['perceptual', 'relative-colorimetric', 'saturation', 'absolute-colorimetric'],
    GimpColorTag: ['none', 'blue', 'green', 'yellow', 'orange', 'brown', 'red', 'violet', 'gray'],
    GimpComponentType: ['u8', 'u16', 'u32', 'half', 'float', 'double'],
    GimpConvertDitherType: ['none', 'fs', 'fs-lowbleed', 'fixed'],
    GimpConvertPaletteType: ['generate', 'web', 'mono', 'custom'],
    GimpConvolveType: ['blur', 'sharpen'],
    GimpCurvePointType: ['smooth', 'corner'],
    GimpCurveType: ['smooth', 'free'],
    GimpDesaturateMode: ['lightness', 'luma', 'average', 'luminance', 'value'],
    GimpDodgeBurnType: ['dodge', 'burn'],
    GimpFileChooserAction: ['any', 'open', 'save', 'select-folder', 'create-folder'],
    GimpFillType: ['foreground', 'background', 'cielab-middle-gray', 'white', 'transparent', 'pattern'],
    GimpForegroundExtractMode: ['matting'],
    GimpGradientBlendColorSpace: ['rgb-perceptual', 'rgb-linear', 'cie-lab'],
    GimpGradientSegmentColor: ['rgb', 'hsv-ccw', 'hsv-cw'],
    GimpGradientSegmentType: ['linear', 'curved', 'sine', 'sphere-increasing', 'sphere-decreasing', 'step'],
    GimpGradientType: ['linear', 'bilinear', 'radial', 'square', 'conical-symmetric', 'conical-asymmetric', 'shapeburst-angular', 'shapeburst-spherical', 'shapeburst-dimpled', 'spiral-clockwise', 'spiral-anticlockwise'],
    GimpGridStyle: ['dots', 'intersections', 'on-off-dash', 'double-dash', 'solid'],
    GimpHistogramChannel: ['value', 'red', 'green', 'blue', 'alpha', 'luminance'],
    GimpHueRange: ['all', 'red', 'yellow', 'green', 'cyan', 'blue', 'magenta'],
    GimpIconType: ['icon-name', 'pixbuf', 'image-file'],
    GimpImageBaseType: ['rgb', 'gray', 'indexed'],
    GimpImageType: ['rgb-image', 'rgba-image', 'gray-image', 'graya-image', 'indexed-image', 'indexeda-image'],
    GimpInkBlobType: ['circle', 'square', 'diamond'],
    GimpInterpolationType: ['none', 'linear', 'cubic', 'nohalo', 'lohalo'],
    GimpJoinStyle: ['miter', 'round', 'bevel'],
    GimpLayerColorSpace: ['auto', 'rgb-linear', 'rgb-non-linear', 'lab', 'rgb-perceptual'],
    GimpLayerCompositeMode: ['auto', 'union', 'clip-to-backdrop', 'clip-to-layer', 'intersection'],
    GimpLayerMode: ['normal-legacy', 'dissolve', 'behind-legacy', 'multiply-legacy', 'screen-legacy', 'overlay-legacy', 'difference-legacy', 'addition-legacy', 'subtract-legacy', 'darken-only-legacy', 'lighten-only-legacy', 'hsv-hue-legacy', 'hsv-saturation-legacy', 'hsl-color-legacy', 'hsv-value-legacy', 'divide-legacy', 'dodge-legacy', 'burn-legacy', 'hardlight-legacy', 'softlight-legacy', 'grain-extract-legacy', 'grain-merge-legacy', 'color-erase-legacy', 'overlay', 'lch-hue', 'lch-chroma', 'lch-color', 'lch-lightness', 'normal', 'behind', 'multiply', 'screen', 'difference', 'addition', 'subtract', 'darken-only', 'lighten-only', 'hsv-hue', 'hsv-saturation', 'hsl-color', 'hsv-value', 'divide', 'dodge', 'burn', 'hardlight', 'softlight', 'grain-extract', 'grain-merge', 'vivid-light', 'pin-light', 'linear-light', 'hard-mix', 'exclusion', 'linear-burn', 'luma-darken-only', 'luma-lighten-only', 'luminance', 'color-erase', 'erase', 'merge', 'split', 'pass-through', 'replace', 'overwrite'],
    GimpMaskApplyMode: ['apply', 'discard'],
    GimpMergeType: ['expand-as-necessary', 'clip-to-image', 'clip-to-bottom-layer', 'flatten-image'],
    GimpMessageHandlerType: ['message-box', 'console', 'error-console'],
    GimpOffsetType: ['color', 'transparent', 'wrap-around'],
    GimpOrientationType: ['horizontal', 'vertical', 'unknown'],
    GimpPDBErrorHandler: ['internal', 'plugin'],
    GimpPDBProcType: ['internal', 'plugin', 'persistent', 'temporary'],
    GimpPDBStatusType: ['execution-error', 'calling-error', 'pass-through', 'success', 'cancel'],
    GimpPaintApplicationMode: ['constant', 'incremental'],
    GimpPathStrokeType: ['bezier'],
    GimpPrecision: ['u8-linear', 'u8-non-linear', 'u8-perceptual', 'u16-linear', 'u16-non-linear', 'u16-perceptual', 'u32-linear', 'u32-non-linear', 'u32-perceptual', 'half-linear', 'half-non-linear', 'half-perceptual', 'float-linear', 'float-non-linear', 'float-perceptual', 'double-linear', 'double-non-linear', 'double-perceptual'],
    GimpProgressCommand: ['start', 'end', 'set-text', 'set-value', 'pulse', 'get-window'],
    GimpRepeatMode: ['none', 'truncate', 'sawtooth', 'triangular'],
    GimpRotationType: ['degrees90', 'degrees180', 'degrees270'],
    GimpRunMode: ['interactive', 'noninteractive', 'with-last-vals'],
    GimpSelectCriterion: ['composite', 'rgb-red', 'rgb-green', 'rgb-blue', 'hsv-hue', 'hsv-saturation', 'hsv-value', 'lch-lightness', 'lch-chroma', 'lch-hue', 'alpha'],
    GimpSizeType: ['pixels', 'points'],
    GimpStackTraceMode: ['never', 'query', 'always'],
    GimpStrokeMethod: ['line', 'paint-method'],
    GimpTRCType: ['linear', 'non-linear', 'perceptual'],
    GimpTextDirection: ['ltr', 'rtl', 'ttb-rtl', 'ttb-rtl-upright', 'ttb-ltr', 'ttb-ltr-upright'],
    GimpTextHintStyle: ['none', 'slight', 'medium', 'full'],
    GimpTextJustification: ['left', 'right', 'center', 'fill'],
    GimpTextOutline: ['none', 'stroke-only', 'stroke-fill'],
    GimpTextOutlineDirection: ['outer', 'inner', 'centered'],
    GimpTransferMode: ['shadows', 'midtones', 'highlights'],
    GimpTransformDirection: ['forward', 'backward'],
    GimpTransformResize: ['adjust', 'clip', 'crop', 'crop-with-aspect'],
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
    'GimpAddMaskType.alpha': 2,
    'GimpAddMaskType.alpha-transfer': 3,
    'GimpAddMaskType.black': 1,
    'GimpAddMaskType.channel': 6,
    'GimpAddMaskType.copy': 5,
    'GimpAddMaskType.selection': 4,
    'GimpAddMaskType.white': 0,
    'GimpBrushApplicationMode.hard': 0,
    'GimpBrushApplicationMode.soft': 1,
    'GimpBrushGeneratedShape.circle': 0,
    'GimpBrushGeneratedShape.diamond': 2,
    'GimpBrushGeneratedShape.square': 1,
    'GimpCapStyle.butt': 0,
    'GimpCapStyle.round': 1,
    'GimpCapStyle.square': 2,
    'GimpChannelOps.add': 0,
    'GimpChannelOps.intersect': 3,
    'GimpChannelOps.replace': 2,
    'GimpChannelOps.subtract': 1,
    'GimpChannelType.alpha': 5,
    'GimpChannelType.blue': 2,
    'GimpChannelType.gray': 3,
    'GimpChannelType.green': 1,
    'GimpChannelType.indexed': 4,
    'GimpChannelType.red': 0,
    'GimpCheckSize.large-checks': 2,
    'GimpCheckSize.medium-checks': 1,
    'GimpCheckSize.small-checks': 0,
    'GimpCheckType.black-only': 5,
    'GimpCheckType.custom-checks': 6,
    'GimpCheckType.dark-checks': 2,
    'GimpCheckType.gray-checks': 1,
    'GimpCheckType.gray-only': 4,
    'GimpCheckType.light-checks': 0,
    'GimpCheckType.white-only': 3,
    'GimpCloneType.image': 0,
    'GimpCloneType.pattern': 1,
    'GimpColorManagementMode.display': 1,
    'GimpColorManagementMode.off': 0,
    'GimpColorManagementMode.softproof': 2,
    'GimpColorRenderingIntent.absolute-colorimetric': 3,
    'GimpColorRenderingIntent.perceptual': 0,
    'GimpColorRenderingIntent.relative-colorimetric': 1,
    'GimpColorRenderingIntent.saturation': 2,
    'GimpColorTag.blue': 1,
    'GimpColorTag.brown': 5,
    'GimpColorTag.gray': 8,
    'GimpColorTag.green': 2,
    'GimpColorTag.none': 0,
    'GimpColorTag.orange': 4,
    'GimpColorTag.red': 6,
    'GimpColorTag.violet': 7,
    'GimpColorTag.yellow': 3,
    'GimpComponentType.double': 700,
    'GimpComponentType.float': 600,
    'GimpComponentType.half': 500,
    'GimpComponentType.u16': 200,
    'GimpComponentType.u32': 300,
    'GimpComponentType.u8': 100,
    'GimpConvertDitherType.fixed': 3,
    'GimpConvertDitherType.fs': 1,
    'GimpConvertDitherType.fs-lowbleed': 2,
    'GimpConvertDitherType.none': 0,
    'GimpConvertPaletteType.custom': 3,
    'GimpConvertPaletteType.generate': 0,
    'GimpConvertPaletteType.mono': 2,
    'GimpConvertPaletteType.web': 1,
    'GimpConvolveType.blur': 0,
    'GimpConvolveType.sharpen': 1,
    'GimpCurvePointType.corner': 1,
    'GimpCurvePointType.smooth': 0,
    'GimpCurveType.free': 1,
    'GimpCurveType.smooth': 0,
    'GimpDesaturateMode.average': 2,
    'GimpDesaturateMode.lightness': 0,
    'GimpDesaturateMode.luma': 1,
    'GimpDesaturateMode.luminance': 3,
    'GimpDesaturateMode.value': 4,
    'GimpDodgeBurnType.burn': 1,
    'GimpDodgeBurnType.dodge': 0,
    'GimpFileChooserAction.any': -1,
    'GimpFileChooserAction.create-folder': 3,
    'GimpFileChooserAction.open': 0,
    'GimpFileChooserAction.save': 1,
    'GimpFileChooserAction.select-folder': 2,
    'GimpFillType.background': 1,
    'GimpFillType.cielab-middle-gray': 2,
    'GimpFillType.foreground': 0,
    'GimpFillType.pattern': 5,
    'GimpFillType.transparent': 4,
    'GimpFillType.white': 3,
    'GimpForegroundExtractMode.matting': 0,
    'GimpGradientBlendColorSpace.cie-lab': 2,
    'GimpGradientBlendColorSpace.rgb-linear': 1,
    'GimpGradientBlendColorSpace.rgb-perceptual': 0,
    'GimpGradientSegmentColor.hsv-ccw': 1,
    'GimpGradientSegmentColor.hsv-cw': 2,
    'GimpGradientSegmentColor.rgb': 0,
    'GimpGradientSegmentType.curved': 1,
    'GimpGradientSegmentType.linear': 0,
    'GimpGradientSegmentType.sine': 2,
    'GimpGradientSegmentType.sphere-decreasing': 4,
    'GimpGradientSegmentType.sphere-increasing': 3,
    'GimpGradientSegmentType.step': 5,
    'GimpGradientType.bilinear': 1,
    'GimpGradientType.conical-asymmetric': 5,
    'GimpGradientType.conical-symmetric': 4,
    'GimpGradientType.linear': 0,
    'GimpGradientType.radial': 2,
    'GimpGradientType.shapeburst-angular': 6,
    'GimpGradientType.shapeburst-dimpled': 8,
    'GimpGradientType.shapeburst-spherical': 7,
    'GimpGradientType.spiral-anticlockwise': 10,
    'GimpGradientType.spiral-clockwise': 9,
    'GimpGradientType.square': 3,
    'GimpGridStyle.dots': 0,
    'GimpGridStyle.double-dash': 3,
    'GimpGridStyle.intersections': 1,
    'GimpGridStyle.on-off-dash': 2,
    'GimpGridStyle.solid': 4,
    'GimpHistogramChannel.alpha': 4,
    'GimpHistogramChannel.blue': 3,
    'GimpHistogramChannel.green': 2,
    'GimpHistogramChannel.luminance': 5,
    'GimpHistogramChannel.red': 1,
    'GimpHistogramChannel.value': 0,
    'GimpHueRange.all': 0,
    'GimpHueRange.blue': 5,
    'GimpHueRange.cyan': 4,
    'GimpHueRange.green': 3,
    'GimpHueRange.magenta': 6,
    'GimpHueRange.red': 1,
    'GimpHueRange.yellow': 2,
    'GimpIconType.icon-name': 0,
    'GimpIconType.image-file': 2,
    'GimpIconType.pixbuf': 1,
    'GimpImageBaseType.gray': 1,
    'GimpImageBaseType.indexed': 2,
    'GimpImageBaseType.rgb': 0,
    'GimpImageType.gray-image': 2,
    'GimpImageType.graya-image': 3,
    'GimpImageType.indexed-image': 4,
    'GimpImageType.indexeda-image': 5,
    'GimpImageType.rgb-image': 0,
    'GimpImageType.rgba-image': 1,
    'GimpInkBlobType.circle': 0,
    'GimpInkBlobType.diamond': 2,
    'GimpInkBlobType.square': 1,
    'GimpInterpolationType.cubic': 2,
    'GimpInterpolationType.linear': 1,
    'GimpInterpolationType.lohalo': 4,
    'GimpInterpolationType.nohalo': 3,
    'GimpInterpolationType.none': 0,
    'GimpJoinStyle.bevel': 2,
    'GimpJoinStyle.miter': 0,
    'GimpJoinStyle.round': 1,
    'GimpLayerColorSpace.auto': 0,
    'GimpLayerColorSpace.lab': 3,
    'GimpLayerColorSpace.rgb-linear': 1,
    'GimpLayerColorSpace.rgb-non-linear': 2,
    'GimpLayerColorSpace.rgb-perceptual': 4,
    'GimpLayerCompositeMode.auto': 0,
    'GimpLayerCompositeMode.clip-to-backdrop': 2,
    'GimpLayerCompositeMode.clip-to-layer': 3,
    'GimpLayerCompositeMode.intersection': 4,
    'GimpLayerCompositeMode.union': 1,
    'GimpLayerMode.addition': 33,
    'GimpLayerMode.addition-legacy': 7,
    'GimpLayerMode.behind': 29,
    'GimpLayerMode.behind-legacy': 2,
    'GimpLayerMode.burn': 43,
    'GimpLayerMode.burn-legacy': 17,
    'GimpLayerMode.color-erase': 57,
    'GimpLayerMode.color-erase-legacy': 22,
    'GimpLayerMode.darken-only': 35,
    'GimpLayerMode.darken-only-legacy': 9,
    'GimpLayerMode.difference': 32,
    'GimpLayerMode.difference-legacy': 6,
    'GimpLayerMode.dissolve': 1,
    'GimpLayerMode.divide': 41,
    'GimpLayerMode.divide-legacy': 15,
    'GimpLayerMode.dodge': 42,
    'GimpLayerMode.dodge-legacy': 16,
    'GimpLayerMode.erase': 58,
    'GimpLayerMode.exclusion': 52,
    'GimpLayerMode.grain-extract': 46,
    'GimpLayerMode.grain-extract-legacy': 20,
    'GimpLayerMode.grain-merge': 47,
    'GimpLayerMode.grain-merge-legacy': 21,
    'GimpLayerMode.hard-mix': 51,
    'GimpLayerMode.hardlight': 44,
    'GimpLayerMode.hardlight-legacy': 18,
    'GimpLayerMode.hsl-color': 39,
    'GimpLayerMode.hsl-color-legacy': 13,
    'GimpLayerMode.hsv-hue': 37,
    'GimpLayerMode.hsv-hue-legacy': 11,
    'GimpLayerMode.hsv-saturation': 38,
    'GimpLayerMode.hsv-saturation-legacy': 12,
    'GimpLayerMode.hsv-value': 40,
    'GimpLayerMode.hsv-value-legacy': 14,
    'GimpLayerMode.lch-chroma': 25,
    'GimpLayerMode.lch-color': 26,
    'GimpLayerMode.lch-hue': 24,
    'GimpLayerMode.lch-lightness': 27,
    'GimpLayerMode.lighten-only': 36,
    'GimpLayerMode.lighten-only-legacy': 10,
    'GimpLayerMode.linear-burn': 53,
    'GimpLayerMode.linear-light': 50,
    'GimpLayerMode.luma-darken-only': 54,
    'GimpLayerMode.luma-lighten-only': 55,
    'GimpLayerMode.luminance': 56,
    'GimpLayerMode.merge': 59,
    'GimpLayerMode.multiply': 30,
    'GimpLayerMode.multiply-legacy': 3,
    'GimpLayerMode.normal': 28,
    'GimpLayerMode.normal-legacy': 0,
    'GimpLayerMode.overlay': 23,
    'GimpLayerMode.overlay-legacy': 5,
    'GimpLayerMode.overwrite': 63,
    'GimpLayerMode.pass-through': 61,
    'GimpLayerMode.pin-light': 49,
    'GimpLayerMode.replace': 62,
    'GimpLayerMode.screen': 31,
    'GimpLayerMode.screen-legacy': 4,
    'GimpLayerMode.softlight': 45,
    'GimpLayerMode.softlight-legacy': 19,
    'GimpLayerMode.split': 60,
    'GimpLayerMode.subtract': 34,
    'GimpLayerMode.subtract-legacy': 8,
    'GimpLayerMode.vivid-light': 48,
    'GimpMaskApplyMode.apply': 0,
    'GimpMaskApplyMode.discard': 1,
    'GimpMergeType.clip-to-bottom-layer': 2,
    'GimpMergeType.clip-to-image': 1,
    'GimpMergeType.expand-as-necessary': 0,
    'GimpMergeType.flatten-image': 3,
    'GimpMessageHandlerType.console': 1,
    'GimpMessageHandlerType.error-console': 2,
    'GimpMessageHandlerType.message-box': 0,
    'GimpOffsetType.color': 0,
    'GimpOffsetType.transparent': 1,
    'GimpOffsetType.wrap-around': 2,
    'GimpOrientationType.horizontal': 0,
    'GimpOrientationType.unknown': 2,
    'GimpOrientationType.vertical': 1,
    'GimpPDBErrorHandler.internal': 0,
    'GimpPDBErrorHandler.plugin': 1,
    'GimpPDBProcType.internal': 0,
    'GimpPDBProcType.persistent': 2,
    'GimpPDBProcType.plugin': 1,
    'GimpPDBProcType.temporary': 3,
    'GimpPDBStatusType.calling-error': 1,
    'GimpPDBStatusType.cancel': 4,
    'GimpPDBStatusType.execution-error': 0,
    'GimpPDBStatusType.pass-through': 2,
    'GimpPDBStatusType.success': 3,
    'GimpPaintApplicationMode.constant': 0,
    'GimpPaintApplicationMode.incremental': 1,
    'GimpPathStrokeType.bezier': 0,
    'GimpPrecision.double-linear': 700,
    'GimpPrecision.double-non-linear': 750,
    'GimpPrecision.double-perceptual': 775,
    'GimpPrecision.float-linear': 600,
    'GimpPrecision.float-non-linear': 650,
    'GimpPrecision.float-perceptual': 675,
    'GimpPrecision.half-linear': 500,
    'GimpPrecision.half-non-linear': 550,
    'GimpPrecision.half-perceptual': 575,
    'GimpPrecision.u16-linear': 200,
    'GimpPrecision.u16-non-linear': 250,
    'GimpPrecision.u16-perceptual': 275,
    'GimpPrecision.u32-linear': 300,
    'GimpPrecision.u32-non-linear': 350,
    'GimpPrecision.u32-perceptual': 375,
    'GimpPrecision.u8-linear': 100,
    'GimpPrecision.u8-non-linear': 150,
    'GimpPrecision.u8-perceptual': 175,
    'GimpProgressCommand.end': 1,
    'GimpProgressCommand.get-window': 5,
    'GimpProgressCommand.pulse': 4,
    'GimpProgressCommand.set-text': 2,
    'GimpProgressCommand.set-value': 3,
    'GimpProgressCommand.start': 0,
    'GimpRepeatMode.none': 0,
    'GimpRepeatMode.sawtooth': 2,
    'GimpRepeatMode.triangular': 3,
    'GimpRepeatMode.truncate': 1,
    'GimpRotationType.degrees180': 1,
    'GimpRotationType.degrees270': 2,
    'GimpRotationType.degrees90': 0,
    'GimpRunMode.interactive': 0,
    'GimpRunMode.noninteractive': 1,
    'GimpRunMode.with-last-vals': 2,
    'GimpSelectCriterion.alpha': 10,
    'GimpSelectCriterion.composite': 0,
    'GimpSelectCriterion.hsv-hue': 4,
    'GimpSelectCriterion.hsv-saturation': 5,
    'GimpSelectCriterion.hsv-value': 6,
    'GimpSelectCriterion.lch-chroma': 8,
    'GimpSelectCriterion.lch-hue': 9,
    'GimpSelectCriterion.lch-lightness': 7,
    'GimpSelectCriterion.rgb-blue': 3,
    'GimpSelectCriterion.rgb-green': 2,
    'GimpSelectCriterion.rgb-red': 1,
    'GimpSizeType.pixels': 0,
    'GimpSizeType.points': 1,
    'GimpStackTraceMode.always': 2,
    'GimpStackTraceMode.never': 0,
    'GimpStackTraceMode.query': 1,
    'GimpStrokeMethod.line': 0,
    'GimpStrokeMethod.paint-method': 1,
    'GimpTRCType.linear': 0,
    'GimpTRCType.non-linear': 1,
    'GimpTRCType.perceptual': 2,
    'GimpTextDirection.ltr': 0,
    'GimpTextDirection.rtl': 1,
    'GimpTextDirection.ttb-ltr': 4,
    'GimpTextDirection.ttb-ltr-upright': 5,
    'GimpTextDirection.ttb-rtl': 2,
    'GimpTextDirection.ttb-rtl-upright': 3,
    'GimpTextHintStyle.full': 3,
    'GimpTextHintStyle.medium': 2,
    'GimpTextHintStyle.none': 0,
    'GimpTextHintStyle.slight': 1,
    'GimpTextJustification.center': 2,
    'GimpTextJustification.fill': 3,
    'GimpTextJustification.left': 0,
    'GimpTextJustification.right': 1,
    'GimpTextOutline.none': 0,
    'GimpTextOutline.stroke-fill': 2,
    'GimpTextOutline.stroke-only': 1,
    'GimpTextOutlineDirection.centered': 2,
    'GimpTextOutlineDirection.inner': 1,
    'GimpTextOutlineDirection.outer': 0,
    'GimpTransferMode.highlights': 2,
    'GimpTransferMode.midtones': 1,
    'GimpTransferMode.shadows': 0,
    'GimpTransformDirection.backward': 1,
    'GimpTransformDirection.forward': 0,
    'GimpTransformResize.adjust': 0,
    'GimpTransformResize.clip': 1,
    'GimpTransformResize.crop': 2,
    'GimpTransformResize.crop-with-aspect': 3,
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
    'GimpExportCapabilities.can-handle-alpha': 16,
    'GimpExportCapabilities.can-handle-bitmap': 8,
    'GimpExportCapabilities.can-handle-gray': 2,
    'GimpExportCapabilities.can-handle-indexed': 4,
    'GimpExportCapabilities.can-handle-layer-effects': 256,
    'GimpExportCapabilities.can-handle-layer-masks': 128,
    'GimpExportCapabilities.can-handle-layers': 32,
    'GimpExportCapabilities.can-handle-layers-as-animation': 64,
    'GimpExportCapabilities.can-handle-rgb': 1,
    'GimpExportCapabilities.needs-alpha': 512,
    'GimpExportCapabilities.needs-crop': 1024,
    'GimpProcedureSensitivityMask.always': 2147483647,
    'GimpProcedureSensitivityMask.drawable': 1,
    'GimpProcedureSensitivityMask.drawables': 4,
    'GimpProcedureSensitivityMask.no-drawables': 8,
    'GimpProcedureSensitivityMask.no-image': 16,
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
    'GimpColorConfig.display-rendering-intent': 'GimpColorRenderingIntent',
    'GimpColorConfig.mode': 'GimpColorManagementMode',
    'GimpColorConfig.simulation-rendering-intent': 'GimpColorRenderingIntent',
    'GimpCurve.curve-type': 'GimpCurveType',
    'GimpExportOptions.capabilities': 'GimpExportCapabilities',
    'GimpExportProcedure.capabilities': 'GimpExportCapabilities',
    'GimpProcedure.procedure-type': 'GimpPDBProcType',
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
    'GimpColorConfig.cmyk-profile': 'GimpConfigPath',
    'GimpColorConfig.display-optimize': 'gboolean',
    'GimpColorConfig.display-profile': 'GimpConfigPath',
    'GimpColorConfig.display-profile-from-gdk': 'gboolean',
    'GimpColorConfig.display-rendering-intent': 'GimpColorRenderingIntent',
    'GimpColorConfig.display-use-black-point-compensation': 'gboolean',
    'GimpColorConfig.gray-profile': 'GimpConfigPath',
    'GimpColorConfig.mode': 'GimpColorManagementMode',
    'GimpColorConfig.out-of-gamut-color': 'GeglColor',
    'GimpColorConfig.rgb-profile': 'GimpConfigPath',
    'GimpColorConfig.show-hsv': 'gboolean',
    'GimpColorConfig.show-rgb-u8': 'gboolean',
    'GimpColorConfig.simulation-gamut-check': 'gboolean',
    'GimpColorConfig.simulation-optimize': 'gboolean',
    'GimpColorConfig.simulation-profile': 'GimpConfigPath',
    'GimpColorConfig.simulation-rendering-intent': 'GimpColorRenderingIntent',
    'GimpColorConfig.simulation-use-black-point-compensation': 'gboolean',
    'GimpCurve.curve-type': 'GimpCurveType',
    'GimpCurve.n-samples': 'gint',
    'GimpDisplay.id': 'gint',
    'GimpDrawableFilter.id': 'gint',
    'GimpExportOptions.capabilities': 'GimpExportCapabilities',
    'GimpExportProcedure.capabilities': 'GimpExportCapabilities',
    'GimpExportProcedure.supports-comment': 'gboolean',
    'GimpExportProcedure.supports-exif': 'gboolean',
    'GimpExportProcedure.supports-iptc': 'gboolean',
    'GimpExportProcedure.supports-profile': 'gboolean',
    'GimpExportProcedure.supports-thumbnail': 'gboolean',
    'GimpExportProcedure.supports-xmp': 'gboolean',
    'GimpImage.id': 'gint',
    'GimpItem.id': 'gint',
    'GimpModule.auto-load': 'gboolean',
    'GimpPlugIn.program-name': 'gchararray',
    'GimpProcedure.name': 'gchararray',
    'GimpProcedure.plug-in': 'GimpPlugIn',
    'GimpProcedure.procedure-type': 'GimpPDBProcType',
    'GimpResource.id': 'gint',
    'GimpUnit.abbreviation': 'gchararray',
    'GimpUnit.digits': 'gint',
    'GimpUnit.factor': 'gdouble',
    'GimpUnit.id': 'gint',
    'GimpUnit.name': 'gchararray',
    'GimpUnit.symbol': 'gchararray',
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
    'GimpCurve.curve-type': '3.2',
    'GimpCurve.n-samples': '3.2',
    'GimpCurve::points-changed': '3.2',
    'GimpCurve::samples-changed': '3.2',
    'GimpExportOptions.capabilities': '3.0.0',
    'GimpExportProcedure.capabilities': '3.0.0',
    'GimpExportProcedure.supports-comment': '3.0.0',
    'GimpExportProcedure.supports-exif': '3.0.0',
    'GimpExportProcedure.supports-iptc': '3.0.0',
    'GimpExportProcedure.supports-profile': '3.0.0',
    'GimpExportProcedure.supports-thumbnail': '3.0.0',
    'GimpExportProcedure.supports-xmp': '3.0.0',
    'GimpPlugIn': '3.0',
};
