// The widget vocabulary of Meta-4 as runtime data.
//
// GENERATED — do not edit. Provenance: Meta-4 — library 3.32.2 — dropped empty base(s): Atk.ImplementorIface
//
// The type half of this subpath is the sibling `.d.ts`. This file exists because
// types are erased: a consumer that wants to ask the installed library whether every
// name here is real needs values, not declarations.

export const PROVENANCE = {
    namespace: 'Meta',
    version: '4',
    libraryVersion: '3.32.2',
    childHolders: 0,
    droppedBases: ['Atk.ImplementorIface'],
    inlinedBases: [],
    unsettableProps: [],
    unresolvedProps: [],
    identifierPrefixes: ['Meta'],
    requiredVocabularies: ['@girs/clutter-4/vocabulary', '@girs/gio-2.0/vocabulary', '@girs/gobject-2.0/vocabulary'],
};

export const OWN_PROPS = {
    MetaBackground: ['meta-display'],
    MetaBackgroundActor: ['background', 'brightness', 'gradient', 'gradient-height', 'gradient-max-darkness', 'meta-display', 'monitor', 'vignette', 'vignette-sharpness'],
    MetaBarrier: ['directions', 'display', 'x1', 'x2', 'y1', 'y2'],
    MetaIdleMonitor: ['device-id'],
    MetaLaunchContext: ['display', 'timestamp', 'workspace'],
    MetaMonitorManager: ['backend'],
    MetaStartupNotification: ['display'],
    MetaStartupSequence: ['application-id', 'icon-name', 'id', 'name', 'timestamp', 'wmclass', 'workspace'],
};

export const OWN_SIGNALS = {
    MetaBackground: ['changed'],
    MetaBackgroundImage: ['loaded'],
    MetaBarrier: ['hit', 'left'],
    MetaCursorTracker: ['cursor-changed', 'cursor-moved'],
    MetaDisplay: ['accelerator-activated', 'cursor-updated', 'gl-video-memory-purged', 'grab-op-begin', 'grab-op-end', 'in-fullscreen-changed', 'modifiers-accelerator-activated', 'overlay-key', 'pad-mode-switch', 'restacked', 'restart', 'show-osd', 'show-pad-osd', 'show-resize-popup', 'show-restart-message', 'showing-desktop-changed', 'window-created', 'window-demands-attention', 'window-entered-monitor', 'window-left-monitor', 'window-marked-urgent', 'workareas-changed', 'x11-display-closing', 'x11-display-opened'],
    MetaDnd: ['dnd-enter', 'dnd-leave', 'dnd-position-change'],
    MetaMonitorManager: ['confirm-display-change', 'monitors-changed', 'monitors-changed-internal', 'power-save-mode-changed'],
    MetaRemoteAccessController: ['new-handle'],
    MetaRemoteAccessHandle: ['stopped'],
    MetaShadowFactory: ['changed'],
    MetaShapedTexture: ['size-changed'],
    MetaStage: ['actors-painted'],
    MetaStartupNotification: ['changed'],
    MetaStartupSequence: ['complete'],
    MetaWorkspace: ['window-added', 'window-removed'],
    MetaWorkspaceManager: ['active-workspace-changed', 'showing-desktop-changed', 'workspace-added', 'workspace-removed', 'workspace-switched'],
};

// Every GType this namespace can INSTANTIATE -> the declarations its members come from.
//
// The key set is what a UI description file can name: a registered, non-abstract class.
// Not "every widget" — GtkBuilder resolves a name through `g_type_from_name`, which knows
// nothing about widgets, and a `.ui` file is full of `GtkSizeGroup`, `GtkTextTag`,
// `GtkEventController*` and `GtkCellRenderer*`. Use `Widgets` and `CHILD_HOLDERS`
// below for the narrower questions; they did not move.
export const DECLS = {
    MetaBackground: ['MetaBackground', 'GObject'],
    MetaBackgroundActor: ['MetaBackgroundActor', 'ClutterActor', 'GInitiallyUnowned', 'GObject', 'ClutterAnimatable', 'ClutterContainer', 'ClutterScriptable'],
    MetaBackgroundGroup: ['MetaBackgroundGroup', 'ClutterActor', 'GInitiallyUnowned', 'GObject', 'ClutterAnimatable', 'ClutterContainer', 'ClutterScriptable'],
    MetaBackgroundImage: ['MetaBackgroundImage', 'GObject'],
    MetaBackgroundImageCache: ['MetaBackgroundImageCache', 'GObject'],
    MetaBarrier: ['MetaBarrier', 'GObject'],
    MetaCursorTracker: ['MetaCursorTracker', 'GObject'],
    MetaDisplay: ['MetaDisplay', 'GObject'],
    MetaDnd: ['MetaDnd', 'GObject'],
    MetaIdleMonitor: ['MetaIdleMonitor', 'GObject'],
    MetaLaunchContext: ['MetaLaunchContext', 'GAppLaunchContext', 'GObject'],
    MetaMonitorManager: ['MetaMonitorManager', 'GObject'],
    MetaRemoteAccessController: ['MetaRemoteAccessController', 'GObject'],
    MetaRemoteAccessHandle: ['MetaRemoteAccessHandle', 'GObject'],
    MetaShadowFactory: ['MetaShadowFactory', 'GObject'],
    MetaShapedTexture: ['MetaShapedTexture', 'ClutterActor', 'GInitiallyUnowned', 'GObject', 'ClutterAnimatable', 'ClutterContainer', 'ClutterScriptable'],
    MetaSoundPlayer: ['MetaSoundPlayer', 'GObject'],
    MetaStage: ['MetaStage', 'ClutterStage', 'ClutterGroup', 'ClutterActor', 'GInitiallyUnowned', 'GObject', 'ClutterAnimatable', 'ClutterContainer', 'ClutterScriptable'],
    MetaStartupNotification: ['MetaStartupNotification', 'GObject'],
    MetaStartupSequence: ['MetaStartupSequence', 'GObject'],
    MetaWindowGroup: ['MetaWindowGroup', 'ClutterActor', 'GInitiallyUnowned', 'GObject', 'ClutterAnimatable', 'ClutterContainer', 'ClutterScriptable'],
    MetaWorkspace: ['MetaWorkspace', 'GObject'],
    MetaWorkspaceManager: ['MetaWorkspaceManager', 'GObject'],
    MetaX11Display: ['MetaX11Display', 'GObject'],
};

// The GTypes above that ARE widgets are the `Widgets` map in the sibling `.d.ts`; these
// are the ones that merely HOLD one, through `set_child`/`get_child`, descending from
// `GObject.Object`. A renderer places them like a container; a check asking "is this a
// widget" must not count them. Derived from the accessor pair, never from a list — the
// count is in the provenance line above.
export const CHILD_HOLDERS = [];

export const ENUM_NICKS = {
    MetaButtonFunction: ['menu', 'minimize', 'maximize', 'close', 'last'],
    MetaCloseDialogResponse: ['wait', 'force-close'],
    MetaCompEffect: ['create', 'unminimize', 'destroy', 'minimize', 'none'],
    MetaCursor: ['none', 'default', 'north-resize', 'south-resize', 'west-resize', 'east-resize', 'se-resize', 'sw-resize', 'ne-resize', 'nw-resize', 'move-or-resize-window', 'busy', 'dnd-in-drag', 'dnd-move', 'dnd-copy', 'dnd-unsupported-target', 'pointing-hand', 'crosshair', 'ibeam', 'last'],
    MetaDisplayCorner: ['topleft', 'topright', 'bottomleft', 'bottomright'],
    MetaDisplayDirection: ['up', 'down', 'left', 'right'],
    MetaEdgeType: ['window', 'monitor', 'screen'],
    MetaExitCode: ['success', 'error'],
    MetaFrameType: ['normal', 'dialog', 'modal-dialog', 'utility', 'menu', 'border', 'attached', 'last'],
    MetaGrabOp: ['none', 'window-base', 'compositor', 'wayland-popup', 'frame-button', 'moving', 'resizing-nw', 'resizing-n', 'resizing-ne', 'resizing-e', 'resizing-sw', 'resizing-s', 'resizing-se', 'resizing-w', 'keyboard-moving', 'keyboard-resizing-unknown', 'keyboard-resizing-nw', 'keyboard-resizing-n', 'keyboard-resizing-ne', 'keyboard-resizing-e', 'keyboard-resizing-sw', 'keyboard-resizing-s', 'keyboard-resizing-se', 'keyboard-resizing-w'],
    MetaInhibitShortcutsDialogResponse: ['allow', 'deny'],
    MetaKeyBindingAction: ['none', 'workspace-1', 'workspace-2', 'workspace-3', 'workspace-4', 'workspace-5', 'workspace-6', 'workspace-7', 'workspace-8', 'workspace-9', 'workspace-10', 'workspace-11', 'workspace-12', 'workspace-left', 'workspace-right', 'workspace-up', 'workspace-down', 'workspace-last', 'switch-applications', 'switch-applications-backward', 'switch-group', 'switch-group-backward', 'switch-windows', 'switch-windows-backward', 'switch-panels', 'switch-panels-backward', 'cycle-group', 'cycle-group-backward', 'cycle-windows', 'cycle-windows-backward', 'cycle-panels', 'cycle-panels-backward', 'show-desktop', 'panel-main-menu', 'panel-run-dialog', 'toggle-recording', 'set-spew-mark', 'activate-window-menu', 'toggle-fullscreen', 'toggle-maximized', 'toggle-tiled-left', 'toggle-tiled-right', 'toggle-above', 'maximize', 'unmaximize', 'toggle-shaded', 'minimize', 'close', 'begin-move', 'begin-resize', 'toggle-on-all-workspaces', 'move-to-workspace-1', 'move-to-workspace-2', 'move-to-workspace-3', 'move-to-workspace-4', 'move-to-workspace-5', 'move-to-workspace-6', 'move-to-workspace-7', 'move-to-workspace-8', 'move-to-workspace-9', 'move-to-workspace-10', 'move-to-workspace-11', 'move-to-workspace-12', 'move-to-workspace-left', 'move-to-workspace-right', 'move-to-workspace-up', 'move-to-workspace-down', 'move-to-workspace-last', 'move-to-monitor-left', 'move-to-monitor-right', 'move-to-monitor-up', 'move-to-monitor-down', 'raise-or-lower', 'raise', 'lower', 'maximize-vertically', 'maximize-horizontally', 'move-to-corner-nw', 'move-to-corner-ne', 'move-to-corner-sw', 'move-to-corner-se', 'move-to-side-n', 'move-to-side-s', 'move-to-side-e', 'move-to-side-w', 'move-to-center', 'overlay-key', 'iso-next-group', 'always-on-top', 'switch-monitor', 'rotate-monitor', 'last'],
    MetaLaterType: ['resize', 'calc-showing', 'check-fullscreen', 'sync-stack', 'before-redraw', 'idle'],
    MetaLocaleDirection: ['ltr', 'rtl'],
    MetaMonitorSwitchConfigType: ['all-mirror', 'all-linear', 'external', 'builtin', 'unknown'],
    MetaMotionDirection: ['up', 'down', 'left', 'right', 'up-left', 'up-right', 'down-left', 'down-right'],
    MetaPadActionType: ['button', 'ring', 'strip'],
    MetaPreference: ['mouse-button-mods', 'focus-mode', 'focus-new-windows', 'attach-modal-dialogs', 'raise-on-click', 'action-double-click-titlebar', 'action-middle-click-titlebar', 'action-right-click-titlebar', 'auto-raise', 'auto-raise-delay', 'focus-change-on-pointer-rest', 'titlebar-font', 'num-workspaces', 'dynamic-workspaces', 'keybindings', 'disable-workarounds', 'button-layout', 'workspace-names', 'visual-bell', 'audible-bell', 'visual-bell-type', 'gnome-accessibility', 'gnome-animations', 'cursor-theme', 'cursor-size', 'resize-with-right-button', 'edge-tiling', 'force-fullscreen', 'workspaces-only-on-primary', 'draggable-border-width', 'auto-maximize', 'center-new-windows', 'drag-threshold'],
    MetaShadowMode: ['auto', 'forced-off', 'forced-on'],
    MetaSide: ['left', 'right', 'top', 'bottom'],
    MetaSizeChange: ['maximize', 'unmaximize', 'fullscreen', 'unfullscreen'],
    MetaStackLayer: ['desktop', 'bottom', 'normal', 'top', 'dock', 'override-redirect', 'last'],
    MetaTabList: ['normal', 'docks', 'group', 'normal-all'],
    MetaTabShowType: ['icon', 'instantly'],
    MetaWindowClientType: ['wayland', 'x11'],
    MetaWindowMenuType: ['wm', 'app'],
    MetaWindowType: ['normal', 'desktop', 'dock', 'dialog', 'modal-dialog', 'toolbar', 'menu', 'utility', 'splashscreen', 'dropdown-menu', 'popup-menu', 'tooltip', 'notification', 'combo', 'dnd', 'override-other'],
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
    'MetaButtonFunction.close': 3,
    'MetaButtonFunction.last': 4,
    'MetaButtonFunction.maximize': 2,
    'MetaButtonFunction.menu': 0,
    'MetaButtonFunction.minimize': 1,
    'MetaCloseDialogResponse.force-close': 1,
    'MetaCloseDialogResponse.wait': 0,
    'MetaCompEffect.create': 0,
    'MetaCompEffect.destroy': 2,
    'MetaCompEffect.minimize': 3,
    'MetaCompEffect.none': 4,
    'MetaCompEffect.unminimize': 1,
    'MetaCursor.busy': 11,
    'MetaCursor.crosshair': 17,
    'MetaCursor.default': 1,
    'MetaCursor.dnd-copy': 14,
    'MetaCursor.dnd-in-drag': 12,
    'MetaCursor.dnd-move': 13,
    'MetaCursor.dnd-unsupported-target': 15,
    'MetaCursor.east-resize': 5,
    'MetaCursor.ibeam': 18,
    'MetaCursor.last': 19,
    'MetaCursor.move-or-resize-window': 10,
    'MetaCursor.ne-resize': 8,
    'MetaCursor.none': 0,
    'MetaCursor.north-resize': 2,
    'MetaCursor.nw-resize': 9,
    'MetaCursor.pointing-hand': 16,
    'MetaCursor.se-resize': 6,
    'MetaCursor.south-resize': 3,
    'MetaCursor.sw-resize': 7,
    'MetaCursor.west-resize': 4,
    'MetaDisplayCorner.bottomleft': 2,
    'MetaDisplayCorner.bottomright': 3,
    'MetaDisplayCorner.topleft': 0,
    'MetaDisplayCorner.topright': 1,
    'MetaDisplayDirection.down': 1,
    'MetaDisplayDirection.left': 2,
    'MetaDisplayDirection.right': 3,
    'MetaDisplayDirection.up': 0,
    'MetaEdgeType.monitor': 1,
    'MetaEdgeType.screen': 2,
    'MetaEdgeType.window': 0,
    'MetaExitCode.error': 1,
    'MetaExitCode.success': 0,
    'MetaFrameType.attached': 6,
    'MetaFrameType.border': 5,
    'MetaFrameType.dialog': 1,
    'MetaFrameType.last': 7,
    'MetaFrameType.menu': 4,
    'MetaFrameType.modal-dialog': 2,
    'MetaFrameType.normal': 0,
    'MetaFrameType.utility': 3,
    'MetaGrabOp.compositor': 2,
    'MetaGrabOp.frame-button': 4,
    'MetaGrabOp.keyboard-moving': 257,
    'MetaGrabOp.keyboard-resizing-e': 8449,
    'MetaGrabOp.keyboard-resizing-n': 33025,
    'MetaGrabOp.keyboard-resizing-ne': 41217,
    'MetaGrabOp.keyboard-resizing-nw': 37121,
    'MetaGrabOp.keyboard-resizing-s': 16641,
    'MetaGrabOp.keyboard-resizing-se': 24833,
    'MetaGrabOp.keyboard-resizing-sw': 20737,
    'MetaGrabOp.keyboard-resizing-unknown': 769,
    'MetaGrabOp.keyboard-resizing-w': 4353,
    'MetaGrabOp.moving': 1,
    'MetaGrabOp.none': 0,
    'MetaGrabOp.resizing-e': 8193,
    'MetaGrabOp.resizing-n': 32769,
    'MetaGrabOp.resizing-ne': 40961,
    'MetaGrabOp.resizing-nw': 36865,
    'MetaGrabOp.resizing-s': 16385,
    'MetaGrabOp.resizing-se': 24577,
    'MetaGrabOp.resizing-sw': 20481,
    'MetaGrabOp.resizing-w': 4097,
    'MetaGrabOp.wayland-popup': 3,
    'MetaGrabOp.window-base': 1,
    'MetaInhibitShortcutsDialogResponse.allow': 0,
    'MetaInhibitShortcutsDialogResponse.deny': 1,
    'MetaKeyBindingAction.activate-window-menu': 37,
    'MetaKeyBindingAction.always-on-top': 88,
    'MetaKeyBindingAction.begin-move': 48,
    'MetaKeyBindingAction.begin-resize': 49,
    'MetaKeyBindingAction.close': 47,
    'MetaKeyBindingAction.cycle-group': 26,
    'MetaKeyBindingAction.cycle-group-backward': 27,
    'MetaKeyBindingAction.cycle-panels': 30,
    'MetaKeyBindingAction.cycle-panels-backward': 31,
    'MetaKeyBindingAction.cycle-windows': 28,
    'MetaKeyBindingAction.cycle-windows-backward': 29,
    'MetaKeyBindingAction.iso-next-group': 87,
    'MetaKeyBindingAction.last': 91,
    'MetaKeyBindingAction.lower': 74,
    'MetaKeyBindingAction.maximize': 43,
    'MetaKeyBindingAction.maximize-horizontally': 76,
    'MetaKeyBindingAction.maximize-vertically': 75,
    'MetaKeyBindingAction.minimize': 46,
    'MetaKeyBindingAction.move-to-center': 85,
    'MetaKeyBindingAction.move-to-corner-ne': 78,
    'MetaKeyBindingAction.move-to-corner-nw': 77,
    'MetaKeyBindingAction.move-to-corner-se': 80,
    'MetaKeyBindingAction.move-to-corner-sw': 79,
    'MetaKeyBindingAction.move-to-monitor-down': 71,
    'MetaKeyBindingAction.move-to-monitor-left': 68,
    'MetaKeyBindingAction.move-to-monitor-right': 69,
    'MetaKeyBindingAction.move-to-monitor-up': 70,
    'MetaKeyBindingAction.move-to-side-e': 83,
    'MetaKeyBindingAction.move-to-side-n': 81,
    'MetaKeyBindingAction.move-to-side-s': 82,
    'MetaKeyBindingAction.move-to-side-w': 84,
    'MetaKeyBindingAction.move-to-workspace-1': 51,
    'MetaKeyBindingAction.move-to-workspace-10': 60,
    'MetaKeyBindingAction.move-to-workspace-11': 61,
    'MetaKeyBindingAction.move-to-workspace-12': 62,
    'MetaKeyBindingAction.move-to-workspace-2': 52,
    'MetaKeyBindingAction.move-to-workspace-3': 53,
    'MetaKeyBindingAction.move-to-workspace-4': 54,
    'MetaKeyBindingAction.move-to-workspace-5': 55,
    'MetaKeyBindingAction.move-to-workspace-6': 56,
    'MetaKeyBindingAction.move-to-workspace-7': 57,
    'MetaKeyBindingAction.move-to-workspace-8': 58,
    'MetaKeyBindingAction.move-to-workspace-9': 59,
    'MetaKeyBindingAction.move-to-workspace-down': 66,
    'MetaKeyBindingAction.move-to-workspace-last': 67,
    'MetaKeyBindingAction.move-to-workspace-left': 63,
    'MetaKeyBindingAction.move-to-workspace-right': 64,
    'MetaKeyBindingAction.move-to-workspace-up': 65,
    'MetaKeyBindingAction.none': 0,
    'MetaKeyBindingAction.overlay-key': 86,
    'MetaKeyBindingAction.panel-main-menu': 33,
    'MetaKeyBindingAction.panel-run-dialog': 34,
    'MetaKeyBindingAction.raise': 73,
    'MetaKeyBindingAction.raise-or-lower': 72,
    'MetaKeyBindingAction.rotate-monitor': 90,
    'MetaKeyBindingAction.set-spew-mark': 36,
    'MetaKeyBindingAction.show-desktop': 32,
    'MetaKeyBindingAction.switch-applications': 18,
    'MetaKeyBindingAction.switch-applications-backward': 19,
    'MetaKeyBindingAction.switch-group': 20,
    'MetaKeyBindingAction.switch-group-backward': 21,
    'MetaKeyBindingAction.switch-monitor': 89,
    'MetaKeyBindingAction.switch-panels': 24,
    'MetaKeyBindingAction.switch-panels-backward': 25,
    'MetaKeyBindingAction.switch-windows': 22,
    'MetaKeyBindingAction.switch-windows-backward': 23,
    'MetaKeyBindingAction.toggle-above': 42,
    'MetaKeyBindingAction.toggle-fullscreen': 38,
    'MetaKeyBindingAction.toggle-maximized': 39,
    'MetaKeyBindingAction.toggle-on-all-workspaces': 50,
    'MetaKeyBindingAction.toggle-recording': 35,
    'MetaKeyBindingAction.toggle-shaded': 45,
    'MetaKeyBindingAction.toggle-tiled-left': 40,
    'MetaKeyBindingAction.toggle-tiled-right': 41,
    'MetaKeyBindingAction.unmaximize': 44,
    'MetaKeyBindingAction.workspace-1': 1,
    'MetaKeyBindingAction.workspace-10': 10,
    'MetaKeyBindingAction.workspace-11': 11,
    'MetaKeyBindingAction.workspace-12': 12,
    'MetaKeyBindingAction.workspace-2': 2,
    'MetaKeyBindingAction.workspace-3': 3,
    'MetaKeyBindingAction.workspace-4': 4,
    'MetaKeyBindingAction.workspace-5': 5,
    'MetaKeyBindingAction.workspace-6': 6,
    'MetaKeyBindingAction.workspace-7': 7,
    'MetaKeyBindingAction.workspace-8': 8,
    'MetaKeyBindingAction.workspace-9': 9,
    'MetaKeyBindingAction.workspace-down': 16,
    'MetaKeyBindingAction.workspace-last': 17,
    'MetaKeyBindingAction.workspace-left': 13,
    'MetaKeyBindingAction.workspace-right': 14,
    'MetaKeyBindingAction.workspace-up': 15,
    'MetaLaterType.before-redraw': 4,
    'MetaLaterType.calc-showing': 1,
    'MetaLaterType.check-fullscreen': 2,
    'MetaLaterType.idle': 5,
    'MetaLaterType.resize': 0,
    'MetaLaterType.sync-stack': 3,
    'MetaLocaleDirection.ltr': 0,
    'MetaLocaleDirection.rtl': 1,
    'MetaMonitorSwitchConfigType.all-linear': 1,
    'MetaMonitorSwitchConfigType.all-mirror': 0,
    'MetaMonitorSwitchConfigType.builtin': 3,
    'MetaMonitorSwitchConfigType.external': 2,
    'MetaMonitorSwitchConfigType.unknown': 4,
    'MetaMotionDirection.down': -2,
    'MetaMotionDirection.down-left': -7,
    'MetaMotionDirection.down-right': -8,
    'MetaMotionDirection.left': -3,
    'MetaMotionDirection.right': -4,
    'MetaMotionDirection.up': -1,
    'MetaMotionDirection.up-left': -5,
    'MetaMotionDirection.up-right': -6,
    'MetaPadActionType.button': 0,
    'MetaPadActionType.ring': 1,
    'MetaPadActionType.strip': 2,
    'MetaPreference.action-double-click-titlebar': 5,
    'MetaPreference.action-middle-click-titlebar': 6,
    'MetaPreference.action-right-click-titlebar': 7,
    'MetaPreference.attach-modal-dialogs': 3,
    'MetaPreference.audible-bell': 19,
    'MetaPreference.auto-maximize': 30,
    'MetaPreference.auto-raise': 8,
    'MetaPreference.auto-raise-delay': 9,
    'MetaPreference.button-layout': 16,
    'MetaPreference.center-new-windows': 31,
    'MetaPreference.cursor-size': 24,
    'MetaPreference.cursor-theme': 23,
    'MetaPreference.disable-workarounds': 15,
    'MetaPreference.drag-threshold': 32,
    'MetaPreference.draggable-border-width': 29,
    'MetaPreference.dynamic-workspaces': 13,
    'MetaPreference.edge-tiling': 26,
    'MetaPreference.focus-change-on-pointer-rest': 10,
    'MetaPreference.focus-mode': 1,
    'MetaPreference.focus-new-windows': 2,
    'MetaPreference.force-fullscreen': 27,
    'MetaPreference.gnome-accessibility': 21,
    'MetaPreference.gnome-animations': 22,
    'MetaPreference.keybindings': 14,
    'MetaPreference.mouse-button-mods': 0,
    'MetaPreference.num-workspaces': 12,
    'MetaPreference.raise-on-click': 4,
    'MetaPreference.resize-with-right-button': 25,
    'MetaPreference.titlebar-font': 11,
    'MetaPreference.visual-bell': 18,
    'MetaPreference.visual-bell-type': 20,
    'MetaPreference.workspace-names': 17,
    'MetaPreference.workspaces-only-on-primary': 28,
    'MetaShadowMode.auto': 0,
    'MetaShadowMode.forced-off': 1,
    'MetaShadowMode.forced-on': 2,
    'MetaSide.bottom': 8,
    'MetaSide.left': 1,
    'MetaSide.right': 2,
    'MetaSide.top': 4,
    'MetaSizeChange.fullscreen': 2,
    'MetaSizeChange.maximize': 0,
    'MetaSizeChange.unfullscreen': 3,
    'MetaSizeChange.unmaximize': 1,
    'MetaStackLayer.bottom': 1,
    'MetaStackLayer.desktop': 0,
    'MetaStackLayer.dock': 4,
    'MetaStackLayer.last': 8,
    'MetaStackLayer.normal': 2,
    'MetaStackLayer.override-redirect': 7,
    'MetaStackLayer.top': 4,
    'MetaTabList.docks': 1,
    'MetaTabList.group': 2,
    'MetaTabList.normal': 0,
    'MetaTabList.normal-all': 3,
    'MetaTabShowType.icon': 0,
    'MetaTabShowType.instantly': 1,
    'MetaWindowClientType.wayland': 0,
    'MetaWindowClientType.x11': 1,
    'MetaWindowMenuType.app': 1,
    'MetaWindowMenuType.wm': 0,
    'MetaWindowType.combo': 13,
    'MetaWindowType.desktop': 1,
    'MetaWindowType.dialog': 3,
    'MetaWindowType.dnd': 14,
    'MetaWindowType.dock': 2,
    'MetaWindowType.dropdown-menu': 9,
    'MetaWindowType.menu': 6,
    'MetaWindowType.modal-dialog': 4,
    'MetaWindowType.normal': 0,
    'MetaWindowType.notification': 12,
    'MetaWindowType.override-other': 15,
    'MetaWindowType.popup-menu': 10,
    'MetaWindowType.splashscreen': 8,
    'MetaWindowType.toolbar': 5,
    'MetaWindowType.tooltip': 11,
    'MetaWindowType.utility': 7,
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
    'MetaBarrierDirection.negative-x': 4,
    'MetaBarrierDirection.negative-y': 8,
    'MetaBarrierDirection.positive-x': 1,
    'MetaBarrierDirection.positive-y': 2,
    'MetaDebugTopic.compositor': 1048576,
    'MetaDebugTopic.dbus': 4194304,
    'MetaDebugTopic.edge-resistance': 2097152,
    'MetaDebugTopic.errors': 16384,
    'MetaDebugTopic.events': 32,
    'MetaDebugTopic.focus': 1,
    'MetaDebugTopic.geometry': 256,
    'MetaDebugTopic.groups': 131072,
    'MetaDebugTopic.keybindings': 4096,
    'MetaDebugTopic.ping': 1024,
    'MetaDebugTopic.placement': 512,
    'MetaDebugTopic.prefs': 65536,
    'MetaDebugTopic.resizing': 262144,
    'MetaDebugTopic.shapes': 524288,
    'MetaDebugTopic.sm': 16,
    'MetaDebugTopic.stack': 4,
    'MetaDebugTopic.startup': 32768,
    'MetaDebugTopic.sync': 8192,
    'MetaDebugTopic.themes': 8,
    'MetaDebugTopic.verbose': -1,
    'MetaDebugTopic.window-ops': 128,
    'MetaDebugTopic.window-state': 64,
    'MetaDebugTopic.workarea': 2,
    'MetaDebugTopic.xinerama': 2048,
    'MetaDirection.bottom': 8,
    'MetaDirection.down': 8,
    'MetaDirection.horizontal': 3,
    'MetaDirection.left': 1,
    'MetaDirection.right': 2,
    'MetaDirection.top': 4,
    'MetaDirection.up': 4,
    'MetaDirection.vertical': 12,
    'MetaFrameFlags.above': 8192,
    'MetaFrameFlags.allows-delete': 1,
    'MetaFrameFlags.allows-horizontal-resize': 32,
    'MetaFrameFlags.allows-maximize': 8,
    'MetaFrameFlags.allows-menu': 2,
    'MetaFrameFlags.allows-minimize': 4,
    'MetaFrameFlags.allows-move': 2048,
    'MetaFrameFlags.allows-shade': 1024,
    'MetaFrameFlags.allows-vertical-resize': 16,
    'MetaFrameFlags.fullscreen': 4096,
    'MetaFrameFlags.has-focus': 64,
    'MetaFrameFlags.maximized': 512,
    'MetaFrameFlags.shaded': 128,
    'MetaFrameFlags.stuck': 256,
    'MetaFrameFlags.tiled-left': 16384,
    'MetaFrameFlags.tiled-right': 32768,
    'MetaKeyBindingFlags.builtin': 2,
    'MetaKeyBindingFlags.ignore-autorepeat': 16,
    'MetaKeyBindingFlags.is-reversed': 4,
    'MetaKeyBindingFlags.non-maskable': 8,
    'MetaKeyBindingFlags.none': 0,
    'MetaKeyBindingFlags.per-window': 1,
    'MetaMaximizeFlags.both': 3,
    'MetaMaximizeFlags.horizontal': 1,
    'MetaMaximizeFlags.vertical': 2,
    'MetaModalOptions.keyboard-already-grabbed': 2,
    'MetaModalOptions.pointer-already-grabbed': 1,
    'MetaVirtualModifier.alt-mask': 128,
    'MetaVirtualModifier.control-mask': 64,
    'MetaVirtualModifier.hyper-mask': 1024,
    'MetaVirtualModifier.meta-mask': 256,
    'MetaVirtualModifier.mod2-mask': 2048,
    'MetaVirtualModifier.mod3-mask': 4096,
    'MetaVirtualModifier.mod4-mask': 8192,
    'MetaVirtualModifier.mod5-mask': 16384,
    'MetaVirtualModifier.shift-mask': 32,
    'MetaVirtualModifier.super-mask': 512,
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
    'MetaBarrier.directions': 'MetaBarrierDirection',
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
