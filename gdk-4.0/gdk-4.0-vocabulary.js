// The widget vocabulary of Gdk-4.0 as runtime data.
//
// GENERATED — do not edit. Provenance: Gdk-4.0 — prop(s) no TypeScript value satisfies: Gdk.GLTextureBuilder.sync
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'Gdk',
    version: '4.0',
    libraryVersion: null,
    childHolders: 0,
    droppedBases: [],
    inlinedBases: [],
    unsettableProps: ['Gdk.GLTextureBuilder.sync'],
    unresolvedProps: [],
    identifierPrefixes: ['Gdk'],
    requiredVocabularies: ['@girs/gio-2.0/vocabulary', '@girs/gobject-2.0/vocabulary'],
};

export const OWN_PROPS = {
    GdkAppLaunchContext: ['display'],
    GdkCicpParams: ['color-primaries', 'matrix-coefficients', 'range', 'transfer-function'],
    GdkClipboard: ['display'],
    GdkCursor: ['fallback', 'hotspot-x', 'hotspot-y', 'name', 'texture'],
    GdkDeviceTool: ['axes', 'hardware-id', 'serial', 'tool-type'],
    GdkDisplayManager: ['default-display'],
    GdkDmabufTextureBuilder: ['color-state', 'display', 'fourcc', 'height', 'modifier', 'n-planes', 'premultiplied', 'update-region', 'update-texture', 'width'],
    GdkGLTextureBuilder: ['color-state', 'context', 'format', 'has-mipmap', 'height', 'id', 'sync', 'update-region', 'update-texture', 'width'],
    GdkMemoryTextureBuilder: ['bytes', 'color-state', 'format', 'height', 'stride', 'update-region', 'update-texture', 'width'],
    GdkMonitor: ['display'],
    GdkTexture: ['color-state', 'height', 'width'],
};

export const OWN_SIGNALS = {
    GdkClipboard: ['changed'],
    GdkContentProvider: ['content-changed'],
    GdkDisplay: ['closed', 'opened', 'seat-added', 'seat-removed', 'setting-changed'],
    GdkDisplayManager: ['display-opened'],
    GdkMonitor: ['invalidate'],
    GdkPaintable: ['invalidate-contents', 'invalidate-size'],
};

// Every GType this namespace can INSTANTIATE -> the declarations its members come from.
//
// The key set is what a UI description file can name: a registered, non-abstract class.
// Not "every widget" — GtkBuilder resolves a name through `g_type_from_name`, which knows
// nothing about widgets, and a `.ui` file is full of `GtkSizeGroup`, `GtkTextTag`,
// `GtkEventController*` and `GtkCellRenderer*`. Use `Widgets` and `CHILD_HOLDERS`
// below for the narrower questions; they did not move.
export const DECLS = {
    GdkAppLaunchContext: ['GdkAppLaunchContext', 'GAppLaunchContext', 'GObject'],
    GdkButtonEvent: ['GdkButtonEvent', 'GdkEvent'],
    GdkCicpParams: ['GdkCicpParams', 'GObject'],
    GdkClipboard: ['GdkClipboard', 'GObject'],
    GdkContentDeserializer: ['GdkContentDeserializer', 'GObject', 'GAsyncResult'],
    GdkContentProvider: ['GdkContentProvider', 'GObject'],
    GdkContentSerializer: ['GdkContentSerializer', 'GObject', 'GAsyncResult'],
    GdkCrossingEvent: ['GdkCrossingEvent', 'GdkEvent'],
    GdkCursor: ['GdkCursor', 'GObject'],
    GdkDNDEvent: ['GdkDNDEvent', 'GdkEvent'],
    GdkDeleteEvent: ['GdkDeleteEvent', 'GdkEvent'],
    GdkDeviceTool: ['GdkDeviceTool', 'GObject'],
    GdkDisplay: ['GdkDisplay', 'GObject'],
    GdkDisplayManager: ['GdkDisplayManager', 'GObject'],
    GdkDmabufTexture: ['GdkDmabufTexture', 'GdkTexture', 'GObject', 'GdkPaintable', 'GIcon', 'GLoadableIcon'],
    GdkDmabufTextureBuilder: ['GdkDmabufTextureBuilder', 'GObject'],
    GdkFocusEvent: ['GdkFocusEvent', 'GdkEvent'],
    GdkGLTexture: ['GdkGLTexture', 'GdkTexture', 'GObject', 'GdkPaintable', 'GIcon', 'GLoadableIcon'],
    GdkGLTextureBuilder: ['GdkGLTextureBuilder', 'GObject'],
    GdkGrabBrokenEvent: ['GdkGrabBrokenEvent', 'GdkEvent'],
    GdkKeyEvent: ['GdkKeyEvent', 'GdkEvent'],
    GdkMemoryTexture: ['GdkMemoryTexture', 'GdkTexture', 'GObject', 'GdkPaintable', 'GIcon', 'GLoadableIcon'],
    GdkMemoryTextureBuilder: ['GdkMemoryTextureBuilder', 'GObject'],
    GdkMonitor: ['GdkMonitor', 'GObject'],
    GdkMotionEvent: ['GdkMotionEvent', 'GdkEvent'],
    GdkPadEvent: ['GdkPadEvent', 'GdkEvent'],
    GdkProximityEvent: ['GdkProximityEvent', 'GdkEvent'],
    GdkScrollEvent: ['GdkScrollEvent', 'GdkEvent'],
    GdkTouchEvent: ['GdkTouchEvent', 'GdkEvent'],
    GdkTouchpadEvent: ['GdkTouchpadEvent', 'GdkEvent'],
};

// The GTypes above that ARE widgets are the `Widgets` map in the sibling `.d.ts`; these
// are the ones that merely HOLD one, through `set_child`/`get_child`, descending from
// `GObject.Object`. A renderer places them like a container; a check asking "is this a
// widget" must not count them. Derived from the accessor pair, never from a list — the
// count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    GdkAxisUse: ['ignore', 'x', 'y', 'delta-x', 'delta-y', 'pressure', 'xtilt', 'ytilt', 'wheel', 'distance', 'rotation', 'slider', 'last'],
    GdkCicpRange: ['narrow', 'full'],
    GdkColorChannel: ['red', 'green', 'blue', 'alpha'],
    GdkCrossingMode: ['normal', 'grab', 'ungrab', 'gtk-grab', 'gtk-ungrab', 'state-changed', 'touch-begin', 'touch-end', 'device-switch'],
    GdkDevicePadFeature: ['button', 'ring', 'strip'],
    GdkDeviceToolType: ['unknown', 'pen', 'eraser', 'brush', 'pencil', 'airbrush', 'mouse', 'lens'],
    GdkDragCancelReason: ['no-target', 'user-cancelled', 'error'],
    GdkEventType: ['delete', 'motion-notify', 'button-press', 'button-release', 'key-press', 'key-release', 'enter-notify', 'leave-notify', 'focus-change', 'proximity-in', 'proximity-out', 'drag-enter', 'drag-leave', 'drag-motion', 'drop-start', 'scroll', 'grab-broken', 'touch-begin', 'touch-update', 'touch-end', 'touch-cancel', 'touchpad-swipe', 'touchpad-pinch', 'pad-button-press', 'pad-button-release', 'pad-ring', 'pad-strip', 'pad-group-mode', 'touchpad-hold', 'pad-dial', 'event-last'],
    GdkFrameResult: ['preparing', 'skipped', 'empty', 'submitted', 'outstanding', 'discarded', 'presented'],
    GdkFullscreenMode: ['current-monitor', 'all-monitors'],
    GdkGravity: ['north-west', 'north', 'north-east', 'west', 'center', 'east', 'south-west', 'south', 'south-east', 'static'],
    GdkInputSource: ['mouse', 'pen', 'keyboard', 'touchscreen', 'touchpad', 'trackpoint', 'tablet-pad'],
    GdkKeyMatch: ['none', 'partial', 'exact'],
    GdkMemoryFormat: ['b8g8r8a8-premultiplied', 'a8r8g8b8-premultiplied', 'r8g8b8a8-premultiplied', 'b8g8r8a8', 'a8r8g8b8', 'r8g8b8a8', 'a8b8g8r8', 'r8g8b8', 'b8g8r8', 'r16g16b16', 'r16g16b16a16-premultiplied', 'r16g16b16a16', 'r16g16b16-float', 'r16g16b16a16-float-premultiplied', 'r16g16b16a16-float', 'r32g32b32-float', 'r32g32b32a32-float-premultiplied', 'r32g32b32a32-float', 'g8a8-premultiplied', 'g8a8', 'g8', 'g16a16-premultiplied', 'g16a16', 'g16', 'a8', 'a16', 'a16-float', 'a32-float', 'a8b8g8r8-premultiplied', 'b8g8r8x8', 'x8r8g8b8', 'r8g8b8x8', 'x8b8g8r8', 'g8-b8r8-420', 'g8-r8b8-420', 'g8-b8r8-422', 'g8-r8b8-422', 'g8-b8r8-444', 'g8-r8b8-444', 'g10x6-b10x6r10x6-420', 'g12x4-b12x4r12x4-420', 'g16-b16r16-420', 'g8-b8-r8-410', 'g8-r8-b8-410', 'g8-b8-r8-411', 'g8-r8-b8-411', 'g8-b8-r8-420', 'g8-r8-b8-420', 'g8-b8-r8-422', 'g8-r8-b8-422', 'g8-b8-r8-444', 'g8-r8-b8-444', 'g8b8g8r8-422', 'g8r8g8b8-422', 'r8g8b8g8-422', 'b8g8r8g8-422', 'x6g10-x6b10-x6r10-420', 'x6g10-x6b10-x6r10-422', 'x6g10-x6b10-x6r10-444', 'x4g12-x4b12-x4r12-420', 'x4g12-x4b12-x4r12-422', 'x4g12-x4b12-x4r12-444', 'g16-b16-r16-420', 'g16-b16-r16-422', 'g16-b16-r16-444', 'argb2101010-premultiplied', 'argb2101010', 'xrgb2101010', 'abgr2101010-premultiplied', 'abgr2101010', 'xbgr2101010', 'n-formats'],
    GdkNotifyType: ['ancestor', 'virtual', 'inferior', 'nonlinear', 'nonlinear-virtual', 'unknown'],
    GdkScrollDirection: ['up', 'down', 'left', 'right', 'smooth'],
    GdkScrollRelativeDirection: ['identical', 'inverted', 'unknown'],
    GdkScrollUnit: ['wheel', 'surface'],
    GdkSubpixelLayout: ['unknown', 'none', 'horizontal-rgb', 'horizontal-bgr', 'vertical-rgb', 'vertical-bgr'],
    GdkSurfaceEdge: ['north-west', 'north', 'north-east', 'west', 'east', 'south-west', 'south', 'south-east'],
    GdkTitlebarGesture: ['double-click', 'right-click', 'middle-click'],
    GdkTouchpadGesturePhase: ['begin', 'update', 'end', 'cancel'],
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
    'GdkAxisUse.delta-x': 3,
    'GdkAxisUse.delta-y': 4,
    'GdkAxisUse.distance': 9,
    'GdkAxisUse.ignore': 0,
    'GdkAxisUse.last': 12,
    'GdkAxisUse.pressure': 5,
    'GdkAxisUse.rotation': 10,
    'GdkAxisUse.slider': 11,
    'GdkAxisUse.wheel': 8,
    'GdkAxisUse.x': 1,
    'GdkAxisUse.xtilt': 6,
    'GdkAxisUse.y': 2,
    'GdkAxisUse.ytilt': 7,
    'GdkCicpRange.full': 1,
    'GdkCicpRange.narrow': 0,
    'GdkColorChannel.alpha': 3,
    'GdkColorChannel.blue': 2,
    'GdkColorChannel.green': 1,
    'GdkColorChannel.red': 0,
    'GdkCrossingMode.device-switch': 8,
    'GdkCrossingMode.grab': 1,
    'GdkCrossingMode.gtk-grab': 3,
    'GdkCrossingMode.gtk-ungrab': 4,
    'GdkCrossingMode.normal': 0,
    'GdkCrossingMode.state-changed': 5,
    'GdkCrossingMode.touch-begin': 6,
    'GdkCrossingMode.touch-end': 7,
    'GdkCrossingMode.ungrab': 2,
    'GdkDevicePadFeature.button': 0,
    'GdkDevicePadFeature.ring': 1,
    'GdkDevicePadFeature.strip': 2,
    'GdkDeviceToolType.airbrush': 5,
    'GdkDeviceToolType.brush': 3,
    'GdkDeviceToolType.eraser': 2,
    'GdkDeviceToolType.lens': 7,
    'GdkDeviceToolType.mouse': 6,
    'GdkDeviceToolType.pen': 1,
    'GdkDeviceToolType.pencil': 4,
    'GdkDeviceToolType.unknown': 0,
    'GdkDragCancelReason.error': 2,
    'GdkDragCancelReason.no-target': 0,
    'GdkDragCancelReason.user-cancelled': 1,
    'GdkEventType.button-press': 2,
    'GdkEventType.button-release': 3,
    'GdkEventType.delete': 0,
    'GdkEventType.drag-enter': 11,
    'GdkEventType.drag-leave': 12,
    'GdkEventType.drag-motion': 13,
    'GdkEventType.drop-start': 14,
    'GdkEventType.enter-notify': 6,
    'GdkEventType.event-last': 30,
    'GdkEventType.focus-change': 8,
    'GdkEventType.grab-broken': 16,
    'GdkEventType.key-press': 4,
    'GdkEventType.key-release': 5,
    'GdkEventType.leave-notify': 7,
    'GdkEventType.motion-notify': 1,
    'GdkEventType.pad-button-press': 23,
    'GdkEventType.pad-button-release': 24,
    'GdkEventType.pad-dial': 29,
    'GdkEventType.pad-group-mode': 27,
    'GdkEventType.pad-ring': 25,
    'GdkEventType.pad-strip': 26,
    'GdkEventType.proximity-in': 9,
    'GdkEventType.proximity-out': 10,
    'GdkEventType.scroll': 15,
    'GdkEventType.touch-begin': 17,
    'GdkEventType.touch-cancel': 20,
    'GdkEventType.touch-end': 19,
    'GdkEventType.touch-update': 18,
    'GdkEventType.touchpad-hold': 28,
    'GdkEventType.touchpad-pinch': 22,
    'GdkEventType.touchpad-swipe': 21,
    'GdkFrameResult.discarded': 5,
    'GdkFrameResult.empty': 2,
    'GdkFrameResult.outstanding': 4,
    'GdkFrameResult.preparing': 0,
    'GdkFrameResult.presented': 6,
    'GdkFrameResult.skipped': 1,
    'GdkFrameResult.submitted': 3,
    'GdkFullscreenMode.all-monitors': 1,
    'GdkFullscreenMode.current-monitor': 0,
    'GdkGravity.center': 5,
    'GdkGravity.east': 6,
    'GdkGravity.north': 2,
    'GdkGravity.north-east': 3,
    'GdkGravity.north-west': 1,
    'GdkGravity.south': 8,
    'GdkGravity.south-east': 9,
    'GdkGravity.south-west': 7,
    'GdkGravity.static': 10,
    'GdkGravity.west': 4,
    'GdkInputSource.keyboard': 2,
    'GdkInputSource.mouse': 0,
    'GdkInputSource.pen': 1,
    'GdkInputSource.tablet-pad': 6,
    'GdkInputSource.touchpad': 4,
    'GdkInputSource.touchscreen': 3,
    'GdkInputSource.trackpoint': 5,
    'GdkKeyMatch.exact': 2,
    'GdkKeyMatch.none': 0,
    'GdkKeyMatch.partial': 1,
    'GdkMemoryFormat.a16': 25,
    'GdkMemoryFormat.a16-float': 26,
    'GdkMemoryFormat.a32-float': 27,
    'GdkMemoryFormat.a8': 24,
    'GdkMemoryFormat.a8b8g8r8': 6,
    'GdkMemoryFormat.a8b8g8r8-premultiplied': 28,
    'GdkMemoryFormat.a8r8g8b8': 4,
    'GdkMemoryFormat.a8r8g8b8-premultiplied': 1,
    'GdkMemoryFormat.abgr2101010': 69,
    'GdkMemoryFormat.abgr2101010-premultiplied': 68,
    'GdkMemoryFormat.argb2101010': 66,
    'GdkMemoryFormat.argb2101010-premultiplied': 65,
    'GdkMemoryFormat.b8g8r8': 8,
    'GdkMemoryFormat.b8g8r8a8': 3,
    'GdkMemoryFormat.b8g8r8a8-premultiplied': 0,
    'GdkMemoryFormat.b8g8r8g8-422': 55,
    'GdkMemoryFormat.b8g8r8x8': 29,
    'GdkMemoryFormat.g10x6-b10x6r10x6-420': 39,
    'GdkMemoryFormat.g12x4-b12x4r12x4-420': 40,
    'GdkMemoryFormat.g16': 23,
    'GdkMemoryFormat.g16-b16-r16-420': 62,
    'GdkMemoryFormat.g16-b16-r16-422': 63,
    'GdkMemoryFormat.g16-b16-r16-444': 64,
    'GdkMemoryFormat.g16-b16r16-420': 41,
    'GdkMemoryFormat.g16a16': 22,
    'GdkMemoryFormat.g16a16-premultiplied': 21,
    'GdkMemoryFormat.g8': 20,
    'GdkMemoryFormat.g8-b8-r8-410': 42,
    'GdkMemoryFormat.g8-b8-r8-411': 44,
    'GdkMemoryFormat.g8-b8-r8-420': 46,
    'GdkMemoryFormat.g8-b8-r8-422': 48,
    'GdkMemoryFormat.g8-b8-r8-444': 50,
    'GdkMemoryFormat.g8-b8r8-420': 33,
    'GdkMemoryFormat.g8-b8r8-422': 35,
    'GdkMemoryFormat.g8-b8r8-444': 37,
    'GdkMemoryFormat.g8-r8-b8-410': 43,
    'GdkMemoryFormat.g8-r8-b8-411': 45,
    'GdkMemoryFormat.g8-r8-b8-420': 47,
    'GdkMemoryFormat.g8-r8-b8-422': 49,
    'GdkMemoryFormat.g8-r8-b8-444': 51,
    'GdkMemoryFormat.g8-r8b8-420': 34,
    'GdkMemoryFormat.g8-r8b8-422': 36,
    'GdkMemoryFormat.g8-r8b8-444': 38,
    'GdkMemoryFormat.g8a8': 19,
    'GdkMemoryFormat.g8a8-premultiplied': 18,
    'GdkMemoryFormat.g8b8g8r8-422': 52,
    'GdkMemoryFormat.g8r8g8b8-422': 53,
    'GdkMemoryFormat.n-formats': 71,
    'GdkMemoryFormat.r16g16b16': 9,
    'GdkMemoryFormat.r16g16b16-float': 12,
    'GdkMemoryFormat.r16g16b16a16': 11,
    'GdkMemoryFormat.r16g16b16a16-float': 14,
    'GdkMemoryFormat.r16g16b16a16-float-premultiplied': 13,
    'GdkMemoryFormat.r16g16b16a16-premultiplied': 10,
    'GdkMemoryFormat.r32g32b32-float': 15,
    'GdkMemoryFormat.r32g32b32a32-float': 17,
    'GdkMemoryFormat.r32g32b32a32-float-premultiplied': 16,
    'GdkMemoryFormat.r8g8b8': 7,
    'GdkMemoryFormat.r8g8b8a8': 5,
    'GdkMemoryFormat.r8g8b8a8-premultiplied': 2,
    'GdkMemoryFormat.r8g8b8g8-422': 54,
    'GdkMemoryFormat.r8g8b8x8': 31,
    'GdkMemoryFormat.x4g12-x4b12-x4r12-420': 59,
    'GdkMemoryFormat.x4g12-x4b12-x4r12-422': 60,
    'GdkMemoryFormat.x4g12-x4b12-x4r12-444': 61,
    'GdkMemoryFormat.x6g10-x6b10-x6r10-420': 56,
    'GdkMemoryFormat.x6g10-x6b10-x6r10-422': 57,
    'GdkMemoryFormat.x6g10-x6b10-x6r10-444': 58,
    'GdkMemoryFormat.x8b8g8r8': 32,
    'GdkMemoryFormat.x8r8g8b8': 30,
    'GdkMemoryFormat.xbgr2101010': 70,
    'GdkMemoryFormat.xrgb2101010': 67,
    'GdkNotifyType.ancestor': 0,
    'GdkNotifyType.inferior': 2,
    'GdkNotifyType.nonlinear': 3,
    'GdkNotifyType.nonlinear-virtual': 4,
    'GdkNotifyType.unknown': 5,
    'GdkNotifyType.virtual': 1,
    'GdkScrollDirection.down': 1,
    'GdkScrollDirection.left': 2,
    'GdkScrollDirection.right': 3,
    'GdkScrollDirection.smooth': 4,
    'GdkScrollDirection.up': 0,
    'GdkScrollRelativeDirection.identical': 0,
    'GdkScrollRelativeDirection.inverted': 1,
    'GdkScrollRelativeDirection.unknown': 2,
    'GdkScrollUnit.surface': 1,
    'GdkScrollUnit.wheel': 0,
    'GdkSubpixelLayout.horizontal-bgr': 3,
    'GdkSubpixelLayout.horizontal-rgb': 2,
    'GdkSubpixelLayout.none': 1,
    'GdkSubpixelLayout.unknown': 0,
    'GdkSubpixelLayout.vertical-bgr': 5,
    'GdkSubpixelLayout.vertical-rgb': 4,
    'GdkSurfaceEdge.east': 4,
    'GdkSurfaceEdge.north': 1,
    'GdkSurfaceEdge.north-east': 2,
    'GdkSurfaceEdge.north-west': 0,
    'GdkSurfaceEdge.south': 6,
    'GdkSurfaceEdge.south-east': 7,
    'GdkSurfaceEdge.south-west': 5,
    'GdkSurfaceEdge.west': 3,
    'GdkTitlebarGesture.double-click': 1,
    'GdkTitlebarGesture.middle-click': 3,
    'GdkTitlebarGesture.right-click': 2,
    'GdkTouchpadGesturePhase.begin': 0,
    'GdkTouchpadGesturePhase.cancel': 3,
    'GdkTouchpadGesturePhase.end': 2,
    'GdkTouchpadGesturePhase.update': 1,
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
    'GdkAnchorHints.flip': 3,
    'GdkAnchorHints.flip-x': 1,
    'GdkAnchorHints.flip-y': 2,
    'GdkAnchorHints.resize': 48,
    'GdkAnchorHints.resize-x': 16,
    'GdkAnchorHints.resize-y': 32,
    'GdkAnchorHints.slide': 12,
    'GdkAnchorHints.slide-x': 4,
    'GdkAnchorHints.slide-y': 8,
    'GdkAxisFlags.delta-x': 8,
    'GdkAxisFlags.delta-y': 16,
    'GdkAxisFlags.distance': 512,
    'GdkAxisFlags.pressure': 32,
    'GdkAxisFlags.rotation': 1024,
    'GdkAxisFlags.slider': 2048,
    'GdkAxisFlags.wheel': 256,
    'GdkAxisFlags.x': 2,
    'GdkAxisFlags.xtilt': 64,
    'GdkAxisFlags.y': 4,
    'GdkAxisFlags.ytilt': 128,
    'GdkDragAction.ask': 8,
    'GdkDragAction.copy': 1,
    'GdkDragAction.link': 4,
    'GdkDragAction.move': 2,
    'GdkDragAction.none': 0,
    'GdkFrameClockPhase.after-paint': 64,
    'GdkFrameClockPhase.before-paint': 2,
    'GdkFrameClockPhase.flush-events': 1,
    'GdkFrameClockPhase.layout': 8,
    'GdkFrameClockPhase.none': 0,
    'GdkFrameClockPhase.paint': 16,
    'GdkFrameClockPhase.resume-events': 32,
    'GdkFrameClockPhase.update': 4,
    'GdkGLAPI.gl': 1,
    'GdkGLAPI.gles': 2,
    'GdkModifierType.alt-mask': 8,
    'GdkModifierType.button1-mask': 256,
    'GdkModifierType.button2-mask': 512,
    'GdkModifierType.button3-mask': 1024,
    'GdkModifierType.button4-mask': 2048,
    'GdkModifierType.button5-mask': 4096,
    'GdkModifierType.control-mask': 4,
    'GdkModifierType.hyper-mask': 134217728,
    'GdkModifierType.lock-mask': 2,
    'GdkModifierType.meta-mask': 268435456,
    'GdkModifierType.no-modifier-mask': 0,
    'GdkModifierType.shift-mask': 1,
    'GdkModifierType.super-mask': 67108864,
    'GdkPaintableFlags.static-contents': 2,
    'GdkPaintableFlags.static-size': 1,
    'GdkSeatCapabilities.all': 31,
    'GdkSeatCapabilities.all-pointing': 7,
    'GdkSeatCapabilities.keyboard': 8,
    'GdkSeatCapabilities.none': 0,
    'GdkSeatCapabilities.pointer': 1,
    'GdkSeatCapabilities.tablet-pad': 16,
    'GdkSeatCapabilities.tablet-stylus': 4,
    'GdkSeatCapabilities.touch': 2,
    'GdkToplevelCapabilities.edge-constraints': 1,
    'GdkToplevelCapabilities.fullscreen': 32,
    'GdkToplevelCapabilities.inhibit-shortcuts': 2,
    'GdkToplevelCapabilities.lower': 128,
    'GdkToplevelCapabilities.maximize': 16,
    'GdkToplevelCapabilities.minimize': 64,
    'GdkToplevelCapabilities.titlebar-gestures': 4,
    'GdkToplevelCapabilities.window-menu': 8,
    'GdkToplevelState.above': 16,
    'GdkToplevelState.below': 32,
    'GdkToplevelState.bottom-resizable': 8192,
    'GdkToplevelState.bottom-tiled': 4096,
    'GdkToplevelState.focused': 64,
    'GdkToplevelState.fullscreen': 8,
    'GdkToplevelState.left-resizable': 32768,
    'GdkToplevelState.left-tiled': 16384,
    'GdkToplevelState.maximized': 2,
    'GdkToplevelState.minimized': 1,
    'GdkToplevelState.right-resizable': 2048,
    'GdkToplevelState.right-tiled': 1024,
    'GdkToplevelState.sticky': 4,
    'GdkToplevelState.suspended': 65536,
    'GdkToplevelState.tiled': 128,
    'GdkToplevelState.top-resizable': 512,
    'GdkToplevelState.top-tiled': 256,
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
    'GdkCicpParams.range': 'GdkCicpRange',
    'GdkDeviceTool.axes': 'GdkAxisFlags',
    'GdkDeviceTool.tool-type': 'GdkDeviceToolType',
    'GdkGLTextureBuilder.format': 'GdkMemoryFormat',
    'GdkMemoryTextureBuilder.format': 'GdkMemoryFormat',
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
    'GdkCicpParams': '4.16',
    'GdkCicpParams.color-primaries': '4.16',
    'GdkCicpParams.matrix-coefficients': '4.16',
    'GdkCicpParams.range': '4.16',
    'GdkCicpParams.transfer-function': '4.16',
    'GdkDmabufTexture': '4.14',
    'GdkDmabufTextureBuilder': '4.14',
    'GdkDmabufTextureBuilder.color-state': '4.16',
    'GdkDmabufTextureBuilder.display': '4.14',
    'GdkDmabufTextureBuilder.fourcc': '4.14',
    'GdkDmabufTextureBuilder.height': '4.14',
    'GdkDmabufTextureBuilder.modifier': '4.14',
    'GdkDmabufTextureBuilder.n-planes': '4.14',
    'GdkDmabufTextureBuilder.premultiplied': '4.14',
    'GdkDmabufTextureBuilder.update-region': '4.14',
    'GdkDmabufTextureBuilder.update-texture': '4.14',
    'GdkDmabufTextureBuilder.width': '4.14',
    'GdkGLTextureBuilder': '4.12',
    'GdkGLTextureBuilder.color-state': '4.16',
    'GdkGLTextureBuilder.context': '4.12',
    'GdkGLTextureBuilder.format': '4.12',
    'GdkGLTextureBuilder.has-mipmap': '4.12',
    'GdkGLTextureBuilder.height': '4.12',
    'GdkGLTextureBuilder.id': '4.12',
    'GdkGLTextureBuilder.sync': '4.12',
    'GdkGLTextureBuilder.update-region': '4.12',
    'GdkGLTextureBuilder.update-texture': '4.12',
    'GdkGLTextureBuilder.width': '4.12',
    'GdkMemoryTextureBuilder': '4.16',
    'GdkMemoryTextureBuilder.bytes': '4.16',
    'GdkMemoryTextureBuilder.color-state': '4.16',
    'GdkMemoryTextureBuilder.format': '4.16',
    'GdkMemoryTextureBuilder.height': '4.16',
    'GdkMemoryTextureBuilder.stride': '4.16',
    'GdkMemoryTextureBuilder.update-region': '4.16',
    'GdkMemoryTextureBuilder.update-texture': '4.16',
    'GdkMemoryTextureBuilder.width': '4.16',
    'GdkTexture.color-state': '4.16',
};
