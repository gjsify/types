// The widget vocabulary of Gdk-3.0 as runtime data.
//
// GENERATED — do not edit. Provenance: Gdk-3.0 — library 3.24.53
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'Gdk',
    version: '3.0',
    libraryVersion: '3.24.53',
    childHolders: 0,
    droppedBases: [],
    inlinedBases: [],
    unsettableProps: [],
    unresolvedProps: [],
    identifierPrefixes: ['Gdk'],
    requiredVocabularies: ['@girs/gio-2.0/vocabulary', '@girs/gobject-2.0/vocabulary'],
};

export const OWN_PROPS = {
    GdkAppLaunchContext: ['display'],
    GdkDeviceTool: ['axes', 'hardware-id', 'serial', 'tool-type'],
    GdkDisplayManager: ['default-display'],
    GdkDrawingContext: ['clip', 'window'],
    GdkMonitor: ['display'],
    GdkScreen: ['font-options', 'resolution'],
};

export const OWN_SIGNALS = {
    GdkDisplay: ['closed', 'monitor-added', 'monitor-removed', 'opened', 'seat-added', 'seat-removed'],
    GdkDisplayManager: ['display-opened'],
    GdkDragContext: ['action-changed', 'cancel', 'dnd-finished', 'drop-performed'],
    GdkKeymap: ['direction-changed', 'keys-changed', 'state-changed'],
    GdkMonitor: ['invalidate'],
    GdkScreen: ['composited-changed', 'monitors-changed', 'size-changed'],
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
    GdkDeviceTool: ['GdkDeviceTool', 'GObject'],
    GdkDisplay: ['GdkDisplay', 'GObject'],
    GdkDisplayManager: ['GdkDisplayManager', 'GObject'],
    GdkDragContext: ['GdkDragContext', 'GObject'],
    GdkDrawingContext: ['GdkDrawingContext', 'GObject'],
    GdkKeymap: ['GdkKeymap', 'GObject'],
    GdkMonitor: ['GdkMonitor', 'GObject'],
    GdkScreen: ['GdkScreen', 'GObject'],
    GdkVisual: ['GdkVisual', 'GObject'],
};

// The GTypes above that ARE widgets are the `Widgets` map in the sibling `.d.ts`; these
// are the ones that merely HOLD one, through `set_child`/`get_child`, descending from
// `GObject.Object`. A renderer places them like a container; a check asking "is this a
// widget" must not count them. Derived from the accessor pair, never from a list — the
// count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    GdkAxisUse: ['ignore', 'x', 'y', 'pressure', 'xtilt', 'ytilt', 'wheel', 'distance', 'rotation', 'slider', 'last'],
    GdkByteOrder: ['lsb-first', 'msb-first'],
    GdkCrossingMode: ['normal', 'grab', 'ungrab', 'gtk-grab', 'gtk-ungrab', 'state-changed', 'touch-begin', 'touch-end', 'device-switch'],
    GdkCursorType: ['x-cursor', 'arrow', 'based-arrow-down', 'based-arrow-up', 'boat', 'bogosity', 'bottom-left-corner', 'bottom-right-corner', 'bottom-side', 'bottom-tee', 'box-spiral', 'center-ptr', 'circle', 'clock', 'coffee-mug', 'cross', 'cross-reverse', 'crosshair', 'diamond-cross', 'dot', 'dotbox', 'double-arrow', 'draft-large', 'draft-small', 'draped-box', 'exchange', 'fleur', 'gobbler', 'gumby', 'hand1', 'hand2', 'heart', 'icon', 'iron-cross', 'left-ptr', 'left-side', 'left-tee', 'leftbutton', 'll-angle', 'lr-angle', 'man', 'middlebutton', 'mouse', 'pencil', 'pirate', 'plus', 'question-arrow', 'right-ptr', 'right-side', 'right-tee', 'rightbutton', 'rtl-logo', 'sailboat', 'sb-down-arrow', 'sb-h-double-arrow', 'sb-left-arrow', 'sb-right-arrow', 'sb-up-arrow', 'sb-v-double-arrow', 'shuttle', 'sizing', 'spider', 'spraycan', 'star', 'target', 'tcross', 'top-left-arrow', 'top-left-corner', 'top-right-corner', 'top-side', 'top-tee', 'trek', 'ul-angle', 'umbrella', 'ur-angle', 'watch', 'xterm', 'last-cursor', 'blank-cursor', 'cursor-is-pixmap'],
    GdkDevicePadFeature: ['button', 'ring', 'strip'],
    GdkDeviceToolType: ['unknown', 'pen', 'eraser', 'brush', 'pencil', 'airbrush', 'mouse', 'lens'],
    GdkDeviceType: ['master', 'slave', 'floating'],
    GdkDragCancelReason: ['no-target', 'user-cancelled', 'error'],
    GdkDragProtocol: ['none', 'motif', 'xdnd', 'rootwin', 'win32-dropfiles', 'ole2', 'local', 'wayland'],
    GdkEventType: ['nothing', 'delete', 'destroy', 'expose', 'motion-notify', 'button-press', '2button-press', 'double-button-press', '3button-press', 'triple-button-press', 'button-release', 'key-press', 'key-release', 'enter-notify', 'leave-notify', 'focus-change', 'configure', 'map', 'unmap', 'property-notify', 'selection-clear', 'selection-request', 'selection-notify', 'proximity-in', 'proximity-out', 'drag-enter', 'drag-leave', 'drag-motion', 'drag-status', 'drop-start', 'drop-finished', 'client-event', 'visibility-notify', 'scroll', 'window-state', 'setting', 'owner-change', 'grab-broken', 'damage', 'touch-begin', 'touch-update', 'touch-end', 'touch-cancel', 'touchpad-swipe', 'touchpad-pinch', 'pad-button-press', 'pad-button-release', 'pad-ring', 'pad-strip', 'pad-group-mode', 'event-last'],
    GdkFilterReturn: ['continue', 'translate', 'remove'],
    GdkFullscreenMode: ['current-monitor', 'all-monitors'],
    GdkGrabOwnership: ['none', 'window', 'application'],
    GdkGrabStatus: ['success', 'already-grabbed', 'invalid-time', 'not-viewable', 'frozen', 'failed'],
    GdkGravity: ['north-west', 'north', 'north-east', 'west', 'center', 'east', 'south-west', 'south', 'south-east', 'static'],
    GdkInputMode: ['disabled', 'screen', 'window'],
    GdkInputSource: ['mouse', 'pen', 'eraser', 'cursor', 'keyboard', 'touchscreen', 'touchpad', 'trackpoint', 'tablet-pad'],
    GdkModifierIntent: ['primary-accelerator', 'context-menu', 'extend-selection', 'modify-selection', 'no-text-input', 'shift-group', 'default-mod-mask'],
    GdkNotifyType: ['ancestor', 'virtual', 'inferior', 'nonlinear', 'nonlinear-virtual', 'unknown'],
    GdkOwnerChange: ['new-owner', 'destroy', 'close'],
    GdkPropMode: ['replace', 'prepend', 'append'],
    GdkPropertyState: ['new-value', 'delete'],
    GdkScrollDirection: ['up', 'down', 'left', 'right', 'smooth'],
    GdkSettingAction: ['new', 'changed', 'deleted'],
    GdkStatus: ['ok', 'error', 'error-param', 'error-file', 'error-mem'],
    GdkSubpixelLayout: ['unknown', 'none', 'horizontal-rgb', 'horizontal-bgr', 'vertical-rgb', 'vertical-bgr'],
    GdkTouchpadGesturePhase: ['begin', 'update', 'end', 'cancel'],
    GdkVisibilityState: ['unobscured', 'partial', 'fully-obscured'],
    GdkVisualType: ['static-gray', 'grayscale', 'static-color', 'pseudo-color', 'true-color', 'direct-color'],
    GdkWindowEdge: ['north-west', 'north', 'north-east', 'west', 'east', 'south-west', 'south', 'south-east'],
    GdkWindowType: ['root', 'toplevel', 'child', 'temp', 'foreign', 'offscreen', 'subsurface'],
    GdkWindowTypeHint: ['normal', 'dialog', 'menu', 'toolbar', 'splashscreen', 'utility', 'dock', 'desktop', 'dropdown-menu', 'popup-menu', 'tooltip', 'notification', 'combo', 'dnd'],
    GdkWindowWindowClass: ['input-output', 'input-only'],
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
    'GdkAxisUse.distance': 7,
    'GdkAxisUse.ignore': 0,
    'GdkAxisUse.last': 10,
    'GdkAxisUse.pressure': 3,
    'GdkAxisUse.rotation': 8,
    'GdkAxisUse.slider': 9,
    'GdkAxisUse.wheel': 6,
    'GdkAxisUse.x': 1,
    'GdkAxisUse.xtilt': 4,
    'GdkAxisUse.y': 2,
    'GdkAxisUse.ytilt': 5,
    'GdkByteOrder.lsb-first': 0,
    'GdkByteOrder.msb-first': 1,
    'GdkCrossingMode.device-switch': 8,
    'GdkCrossingMode.grab': 1,
    'GdkCrossingMode.gtk-grab': 3,
    'GdkCrossingMode.gtk-ungrab': 4,
    'GdkCrossingMode.normal': 0,
    'GdkCrossingMode.state-changed': 5,
    'GdkCrossingMode.touch-begin': 6,
    'GdkCrossingMode.touch-end': 7,
    'GdkCrossingMode.ungrab': 2,
    'GdkCursorType.arrow': 2,
    'GdkCursorType.based-arrow-down': 4,
    'GdkCursorType.based-arrow-up': 6,
    'GdkCursorType.blank-cursor': -2,
    'GdkCursorType.boat': 8,
    'GdkCursorType.bogosity': 10,
    'GdkCursorType.bottom-left-corner': 12,
    'GdkCursorType.bottom-right-corner': 14,
    'GdkCursorType.bottom-side': 16,
    'GdkCursorType.bottom-tee': 18,
    'GdkCursorType.box-spiral': 20,
    'GdkCursorType.center-ptr': 22,
    'GdkCursorType.circle': 24,
    'GdkCursorType.clock': 26,
    'GdkCursorType.coffee-mug': 28,
    'GdkCursorType.cross': 30,
    'GdkCursorType.cross-reverse': 32,
    'GdkCursorType.crosshair': 34,
    'GdkCursorType.cursor-is-pixmap': -1,
    'GdkCursorType.diamond-cross': 36,
    'GdkCursorType.dot': 38,
    'GdkCursorType.dotbox': 40,
    'GdkCursorType.double-arrow': 42,
    'GdkCursorType.draft-large': 44,
    'GdkCursorType.draft-small': 46,
    'GdkCursorType.draped-box': 48,
    'GdkCursorType.exchange': 50,
    'GdkCursorType.fleur': 52,
    'GdkCursorType.gobbler': 54,
    'GdkCursorType.gumby': 56,
    'GdkCursorType.hand1': 58,
    'GdkCursorType.hand2': 60,
    'GdkCursorType.heart': 62,
    'GdkCursorType.icon': 64,
    'GdkCursorType.iron-cross': 66,
    'GdkCursorType.last-cursor': 153,
    'GdkCursorType.left-ptr': 68,
    'GdkCursorType.left-side': 70,
    'GdkCursorType.left-tee': 72,
    'GdkCursorType.leftbutton': 74,
    'GdkCursorType.ll-angle': 76,
    'GdkCursorType.lr-angle': 78,
    'GdkCursorType.man': 80,
    'GdkCursorType.middlebutton': 82,
    'GdkCursorType.mouse': 84,
    'GdkCursorType.pencil': 86,
    'GdkCursorType.pirate': 88,
    'GdkCursorType.plus': 90,
    'GdkCursorType.question-arrow': 92,
    'GdkCursorType.right-ptr': 94,
    'GdkCursorType.right-side': 96,
    'GdkCursorType.right-tee': 98,
    'GdkCursorType.rightbutton': 100,
    'GdkCursorType.rtl-logo': 102,
    'GdkCursorType.sailboat': 104,
    'GdkCursorType.sb-down-arrow': 106,
    'GdkCursorType.sb-h-double-arrow': 108,
    'GdkCursorType.sb-left-arrow': 110,
    'GdkCursorType.sb-right-arrow': 112,
    'GdkCursorType.sb-up-arrow': 114,
    'GdkCursorType.sb-v-double-arrow': 116,
    'GdkCursorType.shuttle': 118,
    'GdkCursorType.sizing': 120,
    'GdkCursorType.spider': 122,
    'GdkCursorType.spraycan': 124,
    'GdkCursorType.star': 126,
    'GdkCursorType.target': 128,
    'GdkCursorType.tcross': 130,
    'GdkCursorType.top-left-arrow': 132,
    'GdkCursorType.top-left-corner': 134,
    'GdkCursorType.top-right-corner': 136,
    'GdkCursorType.top-side': 138,
    'GdkCursorType.top-tee': 140,
    'GdkCursorType.trek': 142,
    'GdkCursorType.ul-angle': 144,
    'GdkCursorType.umbrella': 146,
    'GdkCursorType.ur-angle': 148,
    'GdkCursorType.watch': 150,
    'GdkCursorType.x-cursor': 0,
    'GdkCursorType.xterm': 152,
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
    'GdkDeviceType.floating': 2,
    'GdkDeviceType.master': 0,
    'GdkDeviceType.slave': 1,
    'GdkDragCancelReason.error': 2,
    'GdkDragCancelReason.no-target': 0,
    'GdkDragCancelReason.user-cancelled': 1,
    'GdkDragProtocol.local': 6,
    'GdkDragProtocol.motif': 1,
    'GdkDragProtocol.none': 0,
    'GdkDragProtocol.ole2': 5,
    'GdkDragProtocol.rootwin': 3,
    'GdkDragProtocol.wayland': 7,
    'GdkDragProtocol.win32-dropfiles': 4,
    'GdkDragProtocol.xdnd': 2,
    'GdkEventType.2button-press': 5,
    'GdkEventType.3button-press': 6,
    'GdkEventType.button-press': 4,
    'GdkEventType.button-release': 7,
    'GdkEventType.client-event': 28,
    'GdkEventType.configure': 13,
    'GdkEventType.damage': 36,
    'GdkEventType.delete': 0,
    'GdkEventType.destroy': 1,
    'GdkEventType.double-button-press': 5,
    'GdkEventType.drag-enter': 22,
    'GdkEventType.drag-leave': 23,
    'GdkEventType.drag-motion': 24,
    'GdkEventType.drag-status': 25,
    'GdkEventType.drop-finished': 27,
    'GdkEventType.drop-start': 26,
    'GdkEventType.enter-notify': 10,
    'GdkEventType.event-last': 48,
    'GdkEventType.expose': 2,
    'GdkEventType.focus-change': 12,
    'GdkEventType.grab-broken': 35,
    'GdkEventType.key-press': 8,
    'GdkEventType.key-release': 9,
    'GdkEventType.leave-notify': 11,
    'GdkEventType.map': 14,
    'GdkEventType.motion-notify': 3,
    'GdkEventType.nothing': -1,
    'GdkEventType.owner-change': 34,
    'GdkEventType.pad-button-press': 43,
    'GdkEventType.pad-button-release': 44,
    'GdkEventType.pad-group-mode': 47,
    'GdkEventType.pad-ring': 45,
    'GdkEventType.pad-strip': 46,
    'GdkEventType.property-notify': 16,
    'GdkEventType.proximity-in': 20,
    'GdkEventType.proximity-out': 21,
    'GdkEventType.scroll': 31,
    'GdkEventType.selection-clear': 17,
    'GdkEventType.selection-notify': 19,
    'GdkEventType.selection-request': 18,
    'GdkEventType.setting': 33,
    'GdkEventType.touch-begin': 37,
    'GdkEventType.touch-cancel': 40,
    'GdkEventType.touch-end': 39,
    'GdkEventType.touch-update': 38,
    'GdkEventType.touchpad-pinch': 42,
    'GdkEventType.touchpad-swipe': 41,
    'GdkEventType.triple-button-press': 6,
    'GdkEventType.unmap': 15,
    'GdkEventType.visibility-notify': 29,
    'GdkEventType.window-state': 32,
    'GdkFilterReturn.continue': 0,
    'GdkFilterReturn.remove': 2,
    'GdkFilterReturn.translate': 1,
    'GdkFullscreenMode.all-monitors': 1,
    'GdkFullscreenMode.current-monitor': 0,
    'GdkGrabOwnership.application': 2,
    'GdkGrabOwnership.none': 0,
    'GdkGrabOwnership.window': 1,
    'GdkGrabStatus.already-grabbed': 1,
    'GdkGrabStatus.failed': 5,
    'GdkGrabStatus.frozen': 4,
    'GdkGrabStatus.invalid-time': 2,
    'GdkGrabStatus.not-viewable': 3,
    'GdkGrabStatus.success': 0,
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
    'GdkInputMode.disabled': 0,
    'GdkInputMode.screen': 1,
    'GdkInputMode.window': 2,
    'GdkInputSource.cursor': 3,
    'GdkInputSource.eraser': 2,
    'GdkInputSource.keyboard': 4,
    'GdkInputSource.mouse': 0,
    'GdkInputSource.pen': 1,
    'GdkInputSource.tablet-pad': 8,
    'GdkInputSource.touchpad': 6,
    'GdkInputSource.touchscreen': 5,
    'GdkInputSource.trackpoint': 7,
    'GdkModifierIntent.context-menu': 1,
    'GdkModifierIntent.default-mod-mask': 6,
    'GdkModifierIntent.extend-selection': 2,
    'GdkModifierIntent.modify-selection': 3,
    'GdkModifierIntent.no-text-input': 4,
    'GdkModifierIntent.primary-accelerator': 0,
    'GdkModifierIntent.shift-group': 5,
    'GdkNotifyType.ancestor': 0,
    'GdkNotifyType.inferior': 2,
    'GdkNotifyType.nonlinear': 3,
    'GdkNotifyType.nonlinear-virtual': 4,
    'GdkNotifyType.unknown': 5,
    'GdkNotifyType.virtual': 1,
    'GdkOwnerChange.close': 2,
    'GdkOwnerChange.destroy': 1,
    'GdkOwnerChange.new-owner': 0,
    'GdkPropMode.append': 2,
    'GdkPropMode.prepend': 1,
    'GdkPropMode.replace': 0,
    'GdkPropertyState.delete': 1,
    'GdkPropertyState.new-value': 0,
    'GdkScrollDirection.down': 1,
    'GdkScrollDirection.left': 2,
    'GdkScrollDirection.right': 3,
    'GdkScrollDirection.smooth': 4,
    'GdkScrollDirection.up': 0,
    'GdkSettingAction.changed': 1,
    'GdkSettingAction.deleted': 2,
    'GdkSettingAction.new': 0,
    'GdkStatus.error': -1,
    'GdkStatus.error-file': -3,
    'GdkStatus.error-mem': -4,
    'GdkStatus.error-param': -2,
    'GdkStatus.ok': 0,
    'GdkSubpixelLayout.horizontal-bgr': 3,
    'GdkSubpixelLayout.horizontal-rgb': 2,
    'GdkSubpixelLayout.none': 1,
    'GdkSubpixelLayout.unknown': 0,
    'GdkSubpixelLayout.vertical-bgr': 5,
    'GdkSubpixelLayout.vertical-rgb': 4,
    'GdkTouchpadGesturePhase.begin': 0,
    'GdkTouchpadGesturePhase.cancel': 3,
    'GdkTouchpadGesturePhase.end': 2,
    'GdkTouchpadGesturePhase.update': 1,
    'GdkVisibilityState.fully-obscured': 2,
    'GdkVisibilityState.partial': 1,
    'GdkVisibilityState.unobscured': 0,
    'GdkVisualType.direct-color': 5,
    'GdkVisualType.grayscale': 1,
    'GdkVisualType.pseudo-color': 3,
    'GdkVisualType.static-color': 2,
    'GdkVisualType.static-gray': 0,
    'GdkVisualType.true-color': 4,
    'GdkWindowEdge.east': 4,
    'GdkWindowEdge.north': 1,
    'GdkWindowEdge.north-east': 2,
    'GdkWindowEdge.north-west': 0,
    'GdkWindowEdge.south': 6,
    'GdkWindowEdge.south-east': 7,
    'GdkWindowEdge.south-west': 5,
    'GdkWindowEdge.west': 3,
    'GdkWindowType.child': 2,
    'GdkWindowType.foreign': 4,
    'GdkWindowType.offscreen': 5,
    'GdkWindowType.root': 0,
    'GdkWindowType.subsurface': 6,
    'GdkWindowType.temp': 3,
    'GdkWindowType.toplevel': 1,
    'GdkWindowTypeHint.combo': 12,
    'GdkWindowTypeHint.desktop': 7,
    'GdkWindowTypeHint.dialog': 1,
    'GdkWindowTypeHint.dnd': 13,
    'GdkWindowTypeHint.dock': 6,
    'GdkWindowTypeHint.dropdown-menu': 8,
    'GdkWindowTypeHint.menu': 2,
    'GdkWindowTypeHint.normal': 0,
    'GdkWindowTypeHint.notification': 11,
    'GdkWindowTypeHint.popup-menu': 9,
    'GdkWindowTypeHint.splashscreen': 4,
    'GdkWindowTypeHint.toolbar': 3,
    'GdkWindowTypeHint.tooltip': 10,
    'GdkWindowTypeHint.utility': 5,
    'GdkWindowWindowClass.input-only': 1,
    'GdkWindowWindowClass.input-output': 0,
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
    'GdkAxisFlags.distance': 128,
    'GdkAxisFlags.pressure': 8,
    'GdkAxisFlags.rotation': 256,
    'GdkAxisFlags.slider': 512,
    'GdkAxisFlags.wheel': 64,
    'GdkAxisFlags.x': 2,
    'GdkAxisFlags.xtilt': 16,
    'GdkAxisFlags.y': 4,
    'GdkAxisFlags.ytilt': 32,
    'GdkDragAction.ask': 32,
    'GdkDragAction.copy': 2,
    'GdkDragAction.default': 1,
    'GdkDragAction.link': 8,
    'GdkDragAction.move': 4,
    'GdkDragAction.private': 16,
    'GdkEventMask.all-events-mask': 67108862,
    'GdkEventMask.button-motion-mask': 16,
    'GdkEventMask.button-press-mask': 256,
    'GdkEventMask.button-release-mask': 512,
    'GdkEventMask.button1-motion-mask': 32,
    'GdkEventMask.button2-motion-mask': 64,
    'GdkEventMask.button3-motion-mask': 128,
    'GdkEventMask.enter-notify-mask': 4096,
    'GdkEventMask.exposure-mask': 2,
    'GdkEventMask.focus-change-mask': 16384,
    'GdkEventMask.key-press-mask': 1024,
    'GdkEventMask.key-release-mask': 2048,
    'GdkEventMask.leave-notify-mask': 8192,
    'GdkEventMask.pointer-motion-hint-mask': 8,
    'GdkEventMask.pointer-motion-mask': 4,
    'GdkEventMask.property-change-mask': 65536,
    'GdkEventMask.proximity-in-mask': 262144,
    'GdkEventMask.proximity-out-mask': 524288,
    'GdkEventMask.scroll-mask': 2097152,
    'GdkEventMask.smooth-scroll-mask': 8388608,
    'GdkEventMask.structure-mask': 32768,
    'GdkEventMask.substructure-mask': 1048576,
    'GdkEventMask.tablet-pad-mask': 33554432,
    'GdkEventMask.touch-mask': 4194304,
    'GdkEventMask.touchpad-gesture-mask': 16777216,
    'GdkEventMask.visibility-notify-mask': 131072,
    'GdkFrameClockPhase.after-paint': 64,
    'GdkFrameClockPhase.before-paint': 2,
    'GdkFrameClockPhase.flush-events': 1,
    'GdkFrameClockPhase.layout': 8,
    'GdkFrameClockPhase.none': 0,
    'GdkFrameClockPhase.paint': 16,
    'GdkFrameClockPhase.resume-events': 32,
    'GdkFrameClockPhase.update': 4,
    'GdkModifierType.button1-mask': 256,
    'GdkModifierType.button2-mask': 512,
    'GdkModifierType.button3-mask': 1024,
    'GdkModifierType.button4-mask': 2048,
    'GdkModifierType.button5-mask': 4096,
    'GdkModifierType.control-mask': 4,
    'GdkModifierType.hyper-mask': 134217728,
    'GdkModifierType.lock-mask': 2,
    'GdkModifierType.meta-mask': 268435456,
    'GdkModifierType.mod1-mask': 8,
    'GdkModifierType.mod2-mask': 16,
    'GdkModifierType.mod3-mask': 32,
    'GdkModifierType.mod4-mask': 64,
    'GdkModifierType.mod5-mask': 128,
    'GdkModifierType.modifier-mask': 1543512063,
    'GdkModifierType.modifier-reserved-13-mask': 8192,
    'GdkModifierType.modifier-reserved-14-mask': 16384,
    'GdkModifierType.modifier-reserved-15-mask': 32768,
    'GdkModifierType.modifier-reserved-16-mask': 65536,
    'GdkModifierType.modifier-reserved-17-mask': 131072,
    'GdkModifierType.modifier-reserved-18-mask': 262144,
    'GdkModifierType.modifier-reserved-19-mask': 524288,
    'GdkModifierType.modifier-reserved-20-mask': 1048576,
    'GdkModifierType.modifier-reserved-21-mask': 2097152,
    'GdkModifierType.modifier-reserved-22-mask': 4194304,
    'GdkModifierType.modifier-reserved-23-mask': 8388608,
    'GdkModifierType.modifier-reserved-24-mask': 16777216,
    'GdkModifierType.modifier-reserved-25-mask': 33554432,
    'GdkModifierType.modifier-reserved-29-mask': 536870912,
    'GdkModifierType.release-mask': 1073741824,
    'GdkModifierType.shift-mask': 1,
    'GdkModifierType.super-mask': 67108864,
    'GdkSeatCapabilities.all': 15,
    'GdkSeatCapabilities.all-pointing': 7,
    'GdkSeatCapabilities.keyboard': 8,
    'GdkSeatCapabilities.none': 0,
    'GdkSeatCapabilities.pointer': 1,
    'GdkSeatCapabilities.tablet-stylus': 4,
    'GdkSeatCapabilities.touch': 2,
    'GdkWMDecoration.all': 1,
    'GdkWMDecoration.border': 2,
    'GdkWMDecoration.maximize': 64,
    'GdkWMDecoration.menu': 16,
    'GdkWMDecoration.minimize': 32,
    'GdkWMDecoration.resizeh': 4,
    'GdkWMDecoration.title': 8,
    'GdkWMFunction.all': 1,
    'GdkWMFunction.close': 32,
    'GdkWMFunction.maximize': 16,
    'GdkWMFunction.minimize': 8,
    'GdkWMFunction.move': 4,
    'GdkWMFunction.resize': 2,
    'GdkWindowAttributesType.cursor': 16,
    'GdkWindowAttributesType.noredir': 128,
    'GdkWindowAttributesType.title': 2,
    'GdkWindowAttributesType.type-hint': 256,
    'GdkWindowAttributesType.visual': 32,
    'GdkWindowAttributesType.wmclass': 64,
    'GdkWindowAttributesType.x': 4,
    'GdkWindowAttributesType.y': 8,
    'GdkWindowHints.aspect': 16,
    'GdkWindowHints.base-size': 8,
    'GdkWindowHints.max-size': 4,
    'GdkWindowHints.min-size': 2,
    'GdkWindowHints.pos': 1,
    'GdkWindowHints.resize-inc': 32,
    'GdkWindowHints.user-pos': 128,
    'GdkWindowHints.user-size': 256,
    'GdkWindowHints.win-gravity': 64,
    'GdkWindowState.above': 32,
    'GdkWindowState.below': 64,
    'GdkWindowState.bottom-resizable': 16384,
    'GdkWindowState.bottom-tiled': 8192,
    'GdkWindowState.focused': 128,
    'GdkWindowState.fullscreen': 16,
    'GdkWindowState.iconified': 2,
    'GdkWindowState.left-resizable': 65536,
    'GdkWindowState.left-tiled': 32768,
    'GdkWindowState.maximized': 4,
    'GdkWindowState.right-resizable': 4096,
    'GdkWindowState.right-tiled': 2048,
    'GdkWindowState.sticky': 8,
    'GdkWindowState.tiled': 256,
    'GdkWindowState.top-resizable': 1024,
    'GdkWindowState.top-tiled': 512,
    'GdkWindowState.withdrawn': 1,
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
    'GdkDeviceTool.axes': 'GdkAxisFlags',
    'GdkDeviceTool.tool-type': 'GdkDeviceToolType',
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
    'GdkDisplay::closed': '2.2',
    'GdkDisplay::monitor-added': '3.22',
    'GdkDisplay::monitor-removed': '3.22',
    'GdkDisplay::seat-added': '3.20',
    'GdkDisplay::seat-removed': '3.20',
    'GdkDisplayManager::display-opened': '2.2',
    'GdkDragContext::action-changed': '3.20',
    'GdkDragContext::cancel': '3.20',
    'GdkDragContext::dnd-finished': '3.20',
    'GdkDragContext::drop-performed': '3.20',
    'GdkDrawingContext.clip': '3.22',
    'GdkDrawingContext.window': '3.22',
    'GdkKeymap::direction-changed': '2.0',
    'GdkKeymap::keys-changed': '2.2',
    'GdkKeymap::state-changed': '2.16',
    'GdkScreen::composited-changed': '2.10',
    'GdkScreen::monitors-changed': '2.14',
    'GdkScreen::size-changed': '2.2',
};
