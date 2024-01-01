
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './node-meta-13-import.d.ts';
    
/**
 * Meta-13
 */

import type xlib from '@girs/node-xlib-2.0';
import type xfixes from '@girs/node-xfixes-4.0';
import type Mtk from '@girs/node-mtk-13';
import type cairo from '@girs/node-cairo-1.0';
import type GObject from '@girs/node-gobject-2.0';
import type GLib from '@girs/node-glib-2.0';
import type Graphene from '@girs/node-graphene-1.0';
import type GDesktopEnums from '@girs/node-gdesktopenums-3.0';
import type CoglPango from '@girs/node-coglpango-13';
import type PangoCairo from '@girs/node-pangocairo-1.0';
import type Pango from '@girs/node-pango-1.0';
import type HarfBuzz from '@girs/node-harfbuzz-0.0';
import type freetype2 from '@girs/node-freetype2-2.0';
import type Gio from '@girs/node-gio-2.0';
import type Cogl from '@girs/node-cogl-13';
import type GL from '@girs/node-gl-1.0';
import type Clutter from '@girs/node-clutter-13';
import type Json from '@girs/node-json-1.0';
import type Atk from '@girs/node-atk-1.0';

/**
 * Function a window button can have.
 * 
 * Note, you can't add stuff here without extending the theme format
 * to draw a new function and breaking all existing themes.
 */
export enum ButtonFunction {
    /**
     * Menu
     */
    MENU,
    /**
     * Minimize
     */
    MINIMIZE,
    /**
     * Maximize
     */
    MAXIMIZE,
    /**
     * Close
     */
    CLOSE,
    /**
     * Marks the end of the #MetaButtonFunction enumeration
     */
    LAST,
}
export enum CloseDialogResponse {
    WAIT,
    FORCE_CLOSE,
}
/**
 * Indicates the appropriate effect to show the user for
 * meta_compositor_show_window() and meta_compositor_hide_window()
 */
export enum CompEffect {
    /**
     * The window is newly created
     *   (also used for a window that was previously on a different
     *   workspace and is changed to become visible on the active
     *   workspace.)
     */
    CREATE,
    /**
     * The window should be shown
     *   as unminimizing from its icon geometry.
     */
    UNMINIMIZE,
    /**
     * The window is being destroyed
     */
    DESTROY,
    /**
     * The window should be shown
     *   as minimizing to its icon geometry.
     */
    MINIMIZE,
    /**
     * No effect, the window should be
     *   shown or hidden immediately.
     */
    NONE,
}
export enum CompositorType {
    WAYLAND,
    X11,
}
export enum Cursor {
    NONE,
    /**
     * Default cursor
     */
    DEFAULT,
    /**
     * Resize northern edge cursor
     */
    NORTH_RESIZE,
    /**
     * Resize southern edge cursor
     */
    SOUTH_RESIZE,
    /**
     * Resize western edge cursor
     */
    WEST_RESIZE,
    /**
     * Resize eastern edge cursor
     */
    EAST_RESIZE,
    /**
     * Resize south-eastern corner cursor
     */
    SE_RESIZE,
    /**
     * Resize south-western corner cursor
     */
    SW_RESIZE,
    /**
     * Resize north-eastern corner cursor
     */
    NE_RESIZE,
    /**
     * Resize north-western corner cursor
     */
    NW_RESIZE,
    /**
     * Move or resize cursor
     */
    MOVE_OR_RESIZE_WINDOW,
    /**
     * Busy cursor
     */
    BUSY,
    /**
     * DND in drag cursor
     */
    DND_IN_DRAG,
    /**
     * DND move cursor
     */
    DND_MOVE,
    /**
     * DND copy cursor
     */
    DND_COPY,
    /**
     * DND unsupported target
     */
    DND_UNSUPPORTED_TARGET,
    /**
     * pointing hand
     */
    POINTING_HAND,
    /**
     * crosshair (action forbidden)
     */
    CROSSHAIR,
    /**
     * I-beam (text input)
     */
    IBEAM,
    /**
     * Invisible cursor
     */
    BLANK,
    LAST,
}
export enum DisplayCorner {
    /**
     * top-left corner
     */
    TOPLEFT,
    /**
     * top-right corner
     */
    TOPRIGHT,
    /**
     * bottom-left corner
     */
    BOTTOMLEFT,
    /**
     * bottom-right corner
     */
    BOTTOMRIGHT,
}
export enum DisplayDirection {
    /**
     * up
     */
    UP,
    /**
     * down
     */
    DOWN,
    /**
     * left
     */
    LEFT,
    /**
     * right
     */
    RIGHT,
}
export enum EdgeType {
    /**
     * Whether the edge belongs to a window
     */
    WINDOW,
    /**
     * Whether the edge belongs to a monitor
     */
    MONITOR,
    /**
     * Whether the edge belongs to a screen
     */
    SCREEN,
}
export enum ExitCode {
    /**
     * Success
     */
    SUCCESS,
    /**
     * Error
     */
    ERROR,
}
export enum FrameType {
    /**
     * Normal frame
     */
    NORMAL,
    /**
     * Dialog frame
     */
    DIALOG,
    /**
     * Modal dialog frame
     */
    MODAL_DIALOG,
    /**
     * Utility frame
     */
    UTILITY,
    /**
     * Menu frame
     */
    MENU,
    /**
     * Border frame
     */
    BORDER,
    /**
     * Attached frame
     */
    ATTACHED,
    /**
     * Marks the end of the #MetaFrameType enumeration
     */
    LAST,
}
export enum GrabOp {
    /**
     * None
     */
    NONE,
    WINDOW_BASE,
    /**
     * Moving with pointer
     */
    MOVING,
    MOVING_UNCONSTRAINED,
    /**
     * Resizing NW with pointer
     */
    RESIZING_NW,
    /**
     * Resizing N with pointer
     */
    RESIZING_N,
    /**
     * Resizing NE with pointer
     */
    RESIZING_NE,
    /**
     * Resizing E with pointer
     */
    RESIZING_E,
    /**
     * Resizing SW with pointer
     */
    RESIZING_SW,
    /**
     * Resizing S with pointer
     */
    RESIZING_S,
    /**
     * Resizing SE with pointer
     */
    RESIZING_SE,
    /**
     * Resizing W with pointer
     */
    RESIZING_W,
    /**
     * Moving with keyboard
     */
    KEYBOARD_MOVING,
    /**
     * Resizing with keyboard
     */
    KEYBOARD_RESIZING_UNKNOWN,
    /**
     * Resizing NS with keyboard
     */
    KEYBOARD_RESIZING_NW,
    /**
     * Resizing N with keyboard
     */
    KEYBOARD_RESIZING_N,
    /**
     * Resizing NE with keyboard
     */
    KEYBOARD_RESIZING_NE,
    /**
     * Resizing E with keyboard
     */
    KEYBOARD_RESIZING_E,
    /**
     * Resizing SW with keyboard
     */
    KEYBOARD_RESIZING_SW,
    /**
     * Resizing S with keyboard
     */
    KEYBOARD_RESIZING_S,
    /**
     * Resizing SE with keyboard
     */
    KEYBOARD_RESIZING_SE,
    /**
     * Resizing W with keyboard
     */
    KEYBOARD_RESIZING_W,
}
export enum Gravity {
    NONE,
    NORTH_WEST,
    NORTH,
    NORTH_EAST,
    WEST,
    CENTER,
    EAST,
    SOUTH_WEST,
    SOUTH,
    SOUTH_EAST,
    STATIC,
}
export enum InhibitShortcutsDialogResponse {
    ALLOW,
    DENY,
}
export enum KeyBindingAction {
    /**
     * FILLME
     */
    NONE,
    /**
     * FILLME
     */
    WORKSPACE_1,
    /**
     * FILLME
     */
    WORKSPACE_2,
    /**
     * FILLME
     */
    WORKSPACE_3,
    /**
     * FILLME
     */
    WORKSPACE_4,
    /**
     * FILLME
     */
    WORKSPACE_5,
    /**
     * FILLME
     */
    WORKSPACE_6,
    /**
     * FILLME
     */
    WORKSPACE_7,
    /**
     * FILLME
     */
    WORKSPACE_8,
    /**
     * FILLME
     */
    WORKSPACE_9,
    /**
     * FILLME
     */
    WORKSPACE_10,
    /**
     * FILLME
     */
    WORKSPACE_11,
    /**
     * FILLME
     */
    WORKSPACE_12,
    /**
     * FILLME
     */
    WORKSPACE_LEFT,
    /**
     * FILLME
     */
    WORKSPACE_RIGHT,
    /**
     * FILLME
     */
    WORKSPACE_UP,
    /**
     * FILLME
     */
    WORKSPACE_DOWN,
    /**
     * FILLME
     */
    WORKSPACE_LAST,
    /**
     * FILLME
     */
    SWITCH_APPLICATIONS,
    /**
     * FILLME
     */
    SWITCH_APPLICATIONS_BACKWARD,
    /**
     * FILLME
     */
    SWITCH_GROUP,
    /**
     * FILLME
     */
    SWITCH_GROUP_BACKWARD,
    /**
     * FILLME
     */
    SWITCH_WINDOWS,
    /**
     * FILLME
     */
    SWITCH_WINDOWS_BACKWARD,
    /**
     * FILLME
     */
    SWITCH_PANELS,
    /**
     * FILLME
     */
    SWITCH_PANELS_BACKWARD,
    /**
     * FILLME
     */
    CYCLE_GROUP,
    /**
     * FILLME
     */
    CYCLE_GROUP_BACKWARD,
    /**
     * FILLME
     */
    CYCLE_WINDOWS,
    /**
     * FILLME
     */
    CYCLE_WINDOWS_BACKWARD,
    /**
     * FILLME
     */
    CYCLE_PANELS,
    /**
     * FILLME
     */
    CYCLE_PANELS_BACKWARD,
    /**
     * FILLME
     */
    SHOW_DESKTOP,
    /**
     * FILLME
     */
    PANEL_RUN_DIALOG,
    /**
     * FILLME
     */
    TOGGLE_RECORDING,
    /**
     * FILLME
     */
    SET_SPEW_MARK,
    /**
     * FILLME
     */
    ACTIVATE_WINDOW_MENU,
    /**
     * FILLME
     */
    TOGGLE_FULLSCREEN,
    /**
     * FILLME
     */
    TOGGLE_MAXIMIZED,
    /**
     * FILLME
     */
    TOGGLE_TILED_LEFT,
    /**
     * FILLME
     */
    TOGGLE_TILED_RIGHT,
    /**
     * FILLME
     */
    TOGGLE_ABOVE,
    /**
     * FILLME
     */
    MAXIMIZE,
    /**
     * FILLME
     */
    UNMAXIMIZE,
    /**
     * FILLME
     */
    TOGGLE_SHADED,
    /**
     * FILLME
     */
    MINIMIZE,
    /**
     * FILLME
     */
    CLOSE,
    /**
     * FILLME
     */
    BEGIN_MOVE,
    /**
     * FILLME
     */
    BEGIN_RESIZE,
    /**
     * FILLME
     */
    TOGGLE_ON_ALL_WORKSPACES,
    /**
     * FILLME
     */
    MOVE_TO_WORKSPACE_1,
    /**
     * FILLME
     */
    MOVE_TO_WORKSPACE_2,
    /**
     * FILLME
     */
    MOVE_TO_WORKSPACE_3,
    /**
     * FILLME
     */
    MOVE_TO_WORKSPACE_4,
    /**
     * FILLME
     */
    MOVE_TO_WORKSPACE_5,
    /**
     * FILLME
     */
    MOVE_TO_WORKSPACE_6,
    /**
     * FILLME
     */
    MOVE_TO_WORKSPACE_7,
    /**
     * FILLME
     */
    MOVE_TO_WORKSPACE_8,
    /**
     * FILLME
     */
    MOVE_TO_WORKSPACE_9,
    /**
     * FILLME
     */
    MOVE_TO_WORKSPACE_10,
    /**
     * FILLME
     */
    MOVE_TO_WORKSPACE_11,
    /**
     * FILLME
     */
    MOVE_TO_WORKSPACE_12,
    /**
     * FILLME
     */
    MOVE_TO_WORKSPACE_LEFT,
    /**
     * FILLME
     */
    MOVE_TO_WORKSPACE_RIGHT,
    /**
     * FILLME
     */
    MOVE_TO_WORKSPACE_UP,
    /**
     * FILLME
     */
    MOVE_TO_WORKSPACE_DOWN,
    /**
     * FILLME
     */
    MOVE_TO_WORKSPACE_LAST,
    /**
     * FILLME
     */
    MOVE_TO_MONITOR_LEFT,
    /**
     * FILLME
     */
    MOVE_TO_MONITOR_RIGHT,
    /**
     * FILLME
     */
    MOVE_TO_MONITOR_UP,
    /**
     * FILLME
     */
    MOVE_TO_MONITOR_DOWN,
    /**
     * FILLME
     */
    RAISE_OR_LOWER,
    /**
     * FILLME
     */
    RAISE,
    /**
     * FILLME
     */
    LOWER,
    /**
     * FILLME
     */
    MAXIMIZE_VERTICALLY,
    /**
     * FILLME
     */
    MAXIMIZE_HORIZONTALLY,
    /**
     * FILLME
     */
    MOVE_TO_CORNER_NW,
    /**
     * FILLME
     */
    MOVE_TO_CORNER_NE,
    /**
     * FILLME
     */
    MOVE_TO_CORNER_SW,
    /**
     * FILLME
     */
    MOVE_TO_CORNER_SE,
    /**
     * FILLME
     */
    MOVE_TO_SIDE_N,
    /**
     * FILLME
     */
    MOVE_TO_SIDE_S,
    /**
     * FILLME
     */
    MOVE_TO_SIDE_E,
    /**
     * FILLME
     */
    MOVE_TO_SIDE_W,
    /**
     * FILLME
     */
    MOVE_TO_CENTER,
    /**
     * FILLME
     */
    OVERLAY_KEY,
    /**
     * FILLME
     */
    LOCATE_POINTER_KEY,
    ISO_NEXT_GROUP,
    /**
     * FILLME
     */
    ALWAYS_ON_TOP,
    SWITCH_MONITOR,
    ROTATE_MONITOR,
    /**
     * FILLME
     */
    LAST,
}
export enum LaterType {
    /**
     * call in a resize processing phase that is done
     *   before GTK+ repainting (including window borders) is done.
     */
    RESIZE,
    /**
     * used by Mutter to compute which windows should be mapped
     */
    CALC_SHOWING,
    /**
     * used by Mutter to see if there's a fullscreen window
     */
    CHECK_FULLSCREEN,
    /**
     * used by Mutter to send it's idea of the stacking order to the server
     */
    SYNC_STACK,
    /**
     * call before the stage is redrawn
     */
    BEFORE_REDRAW,
    /**
     * call at a very low priority (can be blocked
     *    by running animations or redrawing applications)
     */
    IDLE,
}
export enum LocaleDirection {
    LTR,
    RTL,
}
export enum MonitorSwitchConfigType {
    ALL_MIRROR,
    ALL_LINEAR,
    EXTERNAL,
    BUILTIN,
    UNKNOWN,
}
export enum MotionDirection {
    /**
     * Upwards motion
     */
    UP,
    /**
     * Downwards motion
     */
    DOWN,
    /**
     * Motion to the left
     */
    LEFT,
    /**
     * Motion to the right
     */
    RIGHT,
    /**
     * Motion up and to the left
     */
    UP_LEFT,
    /**
     * Motion up and to the right
     */
    UP_RIGHT,
    /**
     * Motion down and to the left
     */
    DOWN_LEFT,
    /**
     * Motion down and to the right
     */
    DOWN_RIGHT,
}
export enum MultiTextureFormat {
    /**
     * Invalid value
     */
    INVALID,
    /**
     * Any format supported by Cogl (see #CoglPixelFormat)
     */
    SIMPLE,
    /**
     * YUYV, 32 bits, 16 bpc (Y), 8 bpc (U & V)
     */
    YUYV,
    /**
     * 2 planes: 1 Y-plane, 1 UV-plane (2x2 subsampled)
     */
    NV12,
    P010,
    /**
     * 3 planes: 1 Y-plane, 1 U-plane (2x2 subsampled), 1 V-plane (2x2 subsampled)
     */
    YUV420,
}
export enum PadDirection {
    UP,
    DOWN,
    CW,
    CCW,
}
export enum PadFeatureType {
    RING,
    STRIP,
}
export enum PowerSaveChangeReason {
    MODE_CHANGE,
    HOTPLUG,
}
export enum Preference {
    /**
     * mouse button modifiers
     */
    MOUSE_BUTTON_MODS,
    /**
     * focus mode
     */
    FOCUS_MODE,
    /**
     * focus new windows
     */
    FOCUS_NEW_WINDOWS,
    /**
     * attach modal dialogs
     */
    ATTACH_MODAL_DIALOGS,
    /**
     * raise on click
     */
    RAISE_ON_CLICK,
    /**
     * action double click titlebar
     */
    ACTION_DOUBLE_CLICK_TITLEBAR,
    /**
     * action middle click titlebar
     */
    ACTION_MIDDLE_CLICK_TITLEBAR,
    /**
     * action right click titlebar
     */
    ACTION_RIGHT_CLICK_TITLEBAR,
    /**
     * auto-raise
     */
    AUTO_RAISE,
    /**
     * auto-raise delay
     */
    AUTO_RAISE_DELAY,
    /**
     * focus change on pointer rest
     */
    FOCUS_CHANGE_ON_POINTER_REST,
    /**
     * number of workspaces
     */
    NUM_WORKSPACES,
    /**
     * dynamic workspaces
     */
    DYNAMIC_WORKSPACES,
    /**
     * keybindings
     */
    KEYBINDINGS,
    /**
     * disable workarounds
     */
    DISABLE_WORKAROUNDS,
    /**
     * button layout
     */
    BUTTON_LAYOUT,
    /**
     * workspace names
     */
    WORKSPACE_NAMES,
    /**
     * visual bell
     */
    VISUAL_BELL,
    /**
     * audible bell
     */
    AUDIBLE_BELL,
    /**
     * visual bell type
     */
    VISUAL_BELL_TYPE,
    /**
     * GNOME accessibility
     */
    GNOME_ACCESSIBILITY,
    /**
     * GNOME animations
     */
    GNOME_ANIMATIONS,
    /**
     * cursor theme
     */
    CURSOR_THEME,
    /**
     * cursor size
     */
    CURSOR_SIZE,
    /**
     * resize with right button
     */
    RESIZE_WITH_RIGHT_BUTTON,
    /**
     * edge tiling
     */
    EDGE_TILING,
    /**
     * force fullscreen
     */
    FORCE_FULLSCREEN,
    /**
     * workspaces only on primary
     */
    WORKSPACES_ONLY_ON_PRIMARY,
    /**
     * draggable border width
     */
    DRAGGABLE_BORDER_WIDTH,
    /**
     * auto-maximize
     */
    AUTO_MAXIMIZE,
    /**
     * center new windows
     */
    CENTER_NEW_WINDOWS,
    /**
     * drag threshold
     */
    DRAG_THRESHOLD,
    /**
     * show pointer location
     */
    LOCATE_POINTER,
    CHECK_ALIVE_TIMEOUT,
}
export enum SelectionType {
    SELECTION_PRIMARY,
    SELECTION_CLIPBOARD,
    SELECTION_DND,
    N_SELECTION_TYPES,
}
export enum ShadowMode {
    AUTO,
    FORCED_OFF,
    FORCED_ON,
}
export enum Side {
    /**
     * Left side
     */
    LEFT,
    /**
     * Right side
     */
    RIGHT,
    /**
     * Top side
     */
    TOP,
    /**
     * Bottom side
     */
    BOTTOM,
}
export enum SizeChange {
    MAXIMIZE,
    UNMAXIMIZE,
    FULLSCREEN,
    UNFULLSCREEN,
    MONITOR_MOVE,
}
/**
 * Layers a window can be in.
 * These MUST be in the order of stacking.
 */
export enum StackLayer {
    /**
     * Desktop layer
     */
    DESKTOP,
    /**
     * Bottom layer
     */
    BOTTOM,
    /**
     * Normal layer
     */
    NORMAL,
    /**
     * Top layer
     */
    TOP,
    /**
     * Dock layer
     */
    DOCK,
    /**
     * Override-redirect layer
     */
    OVERRIDE_REDIRECT,
    /**
     * Marks the end of the #MetaStackLayer enumeration
     */
    LAST,
}
export enum TabList {
    /**
     * Normal windows
     */
    NORMAL,
    /**
     * Dock windows
     */
    DOCKS,
    /**
     * Groups
     */
    GROUP,
    /**
     * All windows
     */
    NORMAL_ALL,
}
export enum TabShowType {
    /**
     * Show icon (Alt-Tab mode)
     */
    ICON,
    /**
     * Show instantly (Alt-Esc mode)
     */
    INSTANTLY,
}
export enum WindowClientType {
    /**
     * A Wayland based window
     */
    WAYLAND,
    /**
     * An X11 based window
     */
    X11,
}
/**
 * Menu the compositor should display for a given window
 */
export enum WindowMenuType {
    /**
     * the window manager menu
     */
    WM,
    /**
     * the (fallback) app menu
     */
    APP,
}
export enum WindowType {
    /**
     * Normal
     */
    NORMAL,
    /**
     * Desktop
     */
    DESKTOP,
    /**
     * Dock
     */
    DOCK,
    /**
     * Dialog
     */
    DIALOG,
    /**
     * Modal dialog
     */
    MODAL_DIALOG,
    /**
     * Toolbar
     */
    TOOLBAR,
    /**
     * Menu
     */
    MENU,
    /**
     * Utility
     */
    UTILITY,
    /**
     * Splashcreen
     */
    SPLASHSCREEN,
    /**
     * Dropdown menu
     */
    DROPDOWN_MENU,
    /**
     * Popup menu
     */
    POPUP_MENU,
    /**
     * Tooltip
     */
    TOOLTIP,
    /**
     * Notification
     */
    NOTIFICATION,
    /**
     * Combobox
     */
    COMBO,
    /**
     * Drag and drop
     */
    DND,
    /**
     * Other override-redirect window type
     */
    OVERRIDE_OTHER,
}
export enum BackendCapabilities {
    NONE,
    BARRIERS,
}
export enum BarrierDirection {
    /**
     * Positive direction in the X axis
     */
    POSITIVE_X,
    /**
     * Positive direction in the Y axis
     */
    POSITIVE_Y,
    /**
     * Negative direction in the X axis
     */
    NEGATIVE_X,
    /**
     * Negative direction in the Y axis
     */
    NEGATIVE_Y,
}
export enum BarrierFlags {
    NONE,
    STICKY,
}
export enum DebugPaintFlag {
    /**
     * default
     */
    NONE,
    /**
     * paint opaque regions
     */
    OPAQUE_REGION,
}
export enum DebugTopic {
    /**
     * verbose logging
     */
    VERBOSE,
    /**
     * focus
     */
    FOCUS,
    /**
     * workarea
     */
    WORKAREA,
    /**
     * stack
     */
    STACK,
    /**
     * session management
     */
    SM,
    /**
     * events
     */
    EVENTS,
    /**
     * window state
     */
    WINDOW_STATE,
    /**
     * window operations
     */
    WINDOW_OPS,
    /**
     * geometry
     */
    GEOMETRY,
    /**
     * window placement
     */
    PLACEMENT,
    /**
     * ping
     */
    PING,
    /**
     * keybindings
     */
    KEYBINDINGS,
    /**
     * sync
     */
    SYNC,
    /**
     * startup
     */
    STARTUP,
    /**
     * preferences
     */
    PREFS,
    /**
     * groups
     */
    GROUPS,
    /**
     * resizing
     */
    RESIZING,
    /**
     * shapes
     */
    SHAPES,
    /**
     * edge resistance
     */
    EDGE_RESISTANCE,
    DBUS,
    INPUT,
    /**
     * Wayland
     */
    WAYLAND,
    /**
     * kernel mode setting
     */
    KMS,
    /**
     * screencasting
     */
    SCREEN_CAST,
    /**
     * remote desktop
     */
    REMOTE_DESKTOP,
    /**
     * backend
     */
    BACKEND,
    /**
     * native backend rendering
     */
    RENDER,
    /**
     * color management
     */
    COLOR,
    /**
     * input events
     */
    INPUT_EVENTS,
    /**
     * eis state
     */
    EIS,
}
export enum Direction {
    /**
     * Left
     */
    LEFT,
    /**
     * Right
     */
    RIGHT,
    /**
     * Top
     */
    TOP,
    /**
     * Bottom
     */
    BOTTOM,
    /**
     * Up
     */
    UP,
    /**
     * Down
     */
    DOWN,
    /**
     * Horizontal
     */
    HORIZONTAL,
    /**
     * Vertical
     */
    VERTICAL,
}
export enum KeyBindingFlags {
    /**
     * none
     */
    NONE,
    /**
     * per-window
     */
    PER_WINDOW,
    /**
     * built-in
     */
    BUILTIN,
    /**
     * is reversed
     */
    IS_REVERSED,
    /**
     * always active
     */
    NON_MASKABLE,
    /**
     * ignore autorepeat
     */
    IGNORE_AUTOREPEAT,
    /**
     * not grabbed automatically
     */
    NO_AUTO_GRAB,
    /**
     * uses a custom keybinding action
     */
    CUSTOM_TRIGGER,
}
/**
 * Keyboard accessibility features.
 * @bitfield 
 */
export enum KeyboardA11yFlags {
    KEYBOARD_ENABLED,
    TIMEOUT_ENABLED,
    MOUSE_KEYS_ENABLED,
    SLOW_KEYS_ENABLED,
    SLOW_KEYS_BEEP_PRESS,
    SLOW_KEYS_BEEP_ACCEPT,
    SLOW_KEYS_BEEP_REJECT,
    BOUNCE_KEYS_ENABLED,
    BOUNCE_KEYS_BEEP_REJECT,
    TOGGLE_KEYS_ENABLED,
    STICKY_KEYS_ENABLED,
    STICKY_KEYS_TWO_KEY_OFF,
    STICKY_KEYS_BEEP,
    FEATURE_STATE_CHANGE_BEEP,
}
export enum MaximizeFlags {
    /**
     * Horizontal
     */
    HORIZONTAL,
    /**
     * Vertical
     */
    VERTICAL,
    /**
     * Both
     */
    BOTH,
}
export enum VirtualModifier {
    /**
     * Shift mask
     */
    SHIFT_MASK,
    /**
     * Control mask
     */
    CONTROL_MASK,
    /**
     * Alt mask
     */
    ALT_MASK,
    /**
     * Meta mask
     */
    META_MASK,
    /**
     * Super mask
     */
    SUPER_MASK,
    /**
     * Hyper mask
     */
    HYPER_MASK,
    /**
     * Mod2 mask
     */
    MOD2_MASK,
    /**
     * Mod3 mask
     */
    MOD3_MASK,
    /**
     * Mod4 mask
     */
    MOD4_MASK,
    /**
     * Mod5 mask
     */
    MOD5_MASK,
}
export const CURRENT_TIME: number
export const DEFAULT_ICON_NAME: string
export const ICON_HEIGHT: number
export const ICON_WIDTH: number
export const MINI_ICON_HEIGHT: number
export const MINI_ICON_WIDTH: number
export const PRIORITY_BEFORE_REDRAW: number
export const PRIORITY_PREFS_NOTIFY: number
export const PRIORITY_REDRAW: number
export const PRIORITY_RESIZE: number
export const VIRTUAL_CORE_KEYBOARD_ID: number
export const VIRTUAL_CORE_POINTER_ID: number
/**
 * Convert an accelerator keyval and modifier mask into a string parsable by `meta_parse_accelerator`.
 * @param acceleratorMods Accelerator modifier mask.
 * @param acceleratorKey Accelerator keyval.
 * @returns The accelerator name.
 */
export function acceleratorName(acceleratorMods: Clutter.ModifierType, acceleratorKey: number): string | null
export function addClutterDebugFlags(debugFlags: Clutter.DebugFlag, drawFlags: Clutter.DrawDebugFlag, pickFlags: Clutter.PickDebugFlag): void
export function addDebugPaintFlag(flag: DebugPaintFlag): void
/**
 * Ensure log messages for the given topic `topic`
 * will be printed.
 * @param topic Topic for which logging will be started
 */
export function addVerboseTopic(topic: DebugTopic): void
export function clutterInit(): void
/**
 * Create a context.
 * @param name Human readable name of display server or window manager
 * @returns A new context instance.
 */
export function createContext(name: string): Context
/**
 * Disables unredirection, can be useful in situations where having
 * unredirected windows is undesirable like when recording a video.
 * @param display a #MetaDisplay
 */
export function disableUnredirectForDisplay(display: Display): void
/**
 * Enables unredirection which reduces the overhead for apps like games.
 * @param display a #MetaDisplay
 */
export function enableUnredirectForDisplay(display: Display): void
export function exit(code: ExitCode): void
export function externalBindingNameForAction(keybindingAction: number): string | null
export function focusStageWindow(display: Display, timestamp: number): void
/**
 * Converts a frame type enum value to the name string that would
 * appear in the theme definition file.
 * @param type a #MetaFrameType
 * @returns the string value
 */
export function frameTypeToString(type: FrameType): string
export function gUtf8Strndup(src: string, n: number): string | null
export function getClutterDebugFlags(): [ /* debugFlags */ Clutter.DebugFlag, /* drawFlags */ Clutter.DrawDebugFlag, /* pickFlags */ Clutter.PickDebugFlag ]
export function getDebugPaintFlags(): DebugPaintFlag
export function getFeedbackGroupForDisplay(display: Display): Clutter.Actor
export function getLocaleDirection(): LocaleDirection
export function getStageForDisplay(display: Display): Clutter.Actor
export function getTopWindowGroupForDisplay(display: Display): Clutter.Actor
export function getWindowActors(display: Display): Clutter.Actor[]
export function getWindowGroupForDisplay(display: Display): Clutter.Actor
export function gravityToString(gravity: Gravity): string
/**
 * Returns %TRUE if this instance of Mutter comes from Mutter
 * restarting itself (for example to enable/disable stereo.)
 * 
 * See [func`Meta`.restart]. If this is the case, any startup visuals
 * or animations should be suppressed.
 */
export function isRestart(): boolean
export function isTopicEnabled(topic: DebugTopic): boolean
export function isVerbose(): boolean
export function isWaylandCompositor(): boolean
/**
 * Allows users to register a custom handler for a
 * builtin key binding.
 * @param name The name of the keybinding to set
 * @param handler The new handler function
 * @returns %TRUE if the binding known as @name was found, %FALSE otherwise.
 */
export function keybindingsSetCustomHandler(name: string, handler: KeyHandlerFunc | null): boolean
export function popNoMsgPrefix(): void
export function preferenceToString(pref: Preference): string
export function prefsBellIsAudible(): boolean
export function prefsChangeWorkspaceName(i: number, name: string): void
export function prefsGetActionDoubleClickTitlebar(): GDesktopEnums.TitlebarAction
export function prefsGetActionMiddleClickTitlebar(): GDesktopEnums.TitlebarAction
export function prefsGetActionRightClickTitlebar(): GDesktopEnums.TitlebarAction
export function prefsGetAttachModalDialogs(): boolean
export function prefsGetAutoMaximize(): boolean
export function prefsGetAutoRaise(): boolean
export function prefsGetAutoRaiseDelay(): number
export function prefsGetButtonLayout(): /* buttonLayout */ ButtonLayout
export function prefsGetCenterNewWindows(): boolean
export function prefsGetCheckAliveTimeout(): number
export function prefsGetCompositingManager(): boolean
export function prefsGetCursorSize(): number
export function prefsGetCursorTheme(): string
export function prefsGetDisableWorkarounds(): boolean
export function prefsGetDragThreshold(): number
export function prefsGetDraggableBorderWidth(): number
export function prefsGetDynamicWorkspaces(): boolean
export function prefsGetEdgeTiling(): boolean
export function prefsGetFocusChangeOnPointerRest(): boolean
export function prefsGetFocusMode(): GDesktopEnums.FocusMode
export function prefsGetFocusNewWindows(): GDesktopEnums.FocusNewWindows
export function prefsGetForceFullscreen(): boolean
export function prefsGetGnomeAccessibility(): boolean
export function prefsGetGnomeAnimations(): boolean
export function prefsGetKeybindingAction(name: string): KeyBindingAction
export function prefsGetKeybindingLabel(name: string): string | null
export function prefsGetMouseButtonMenu(): number
export function prefsGetMouseButtonMods(): Clutter.ModifierType
export function prefsGetMouseButtonResize(): number
export function prefsGetNumWorkspaces(): number
export function prefsGetRaiseOnClick(): boolean
export function prefsGetShowFallbackAppMenu(): boolean
export function prefsGetVisualBell(): boolean
export function prefsGetVisualBellType(): GDesktopEnums.VisualBellType
export function prefsGetWorkspaceName(i: number): string
export function prefsGetWorkspacesOnlyOnPrimary(): boolean
export function prefsSetForceFullscreen(whether: boolean): void
export function prefsSetNumWorkspaces(nWorkspaces: number): void
export function prefsSetShowFallbackAppMenu(whether: boolean): void
export function pushNoMsgPrefix(): void
export function removeClutterDebugFlags(debugFlags: Clutter.DebugFlag, drawFlags: Clutter.DrawDebugFlag, pickFlags: Clutter.PickDebugFlag): void
export function removeDebugPaintFlag(flag: DebugPaintFlag): void
/**
 * Stop printing log messages for the given topic `topic`.
 * 
 * Note that this method does not stack with [func`Meta`.add_verbose_topic];
 * i.e. if two calls to [func`Meta`.add_verbose_topic] for the same
 * topic are made, one call to [func`Meta`.remove_verbose_topic]  will
 * remove it.
 * @param topic Topic for which logging will be stopped
 */
export function removeVerboseTopic(topic: DebugTopic): void
/**
 * Starts the process of restarting the compositor.
 * 
 * Note that Mutter's involvement here is to make the restart
 * visually smooth for the user - it cannot itself safely
 * reexec a program that embeds libmuttter.
 * 
 * So in order for this to work, the compositor must handle two
 * signals
 * 
 * - [signal`Meta`.Display::show-restart-message], to display the
 * message passed here on the Clutter stage
 * - [signal`Meta`.Display::restart] to actually reexec the compositor.
 * @param message message to display to the user, or %NULL
 * @param context a #MetaContext
 */
export function restart(message: string | null, context: Context): void
export function topicToString(topic: DebugTopic): string
export function unsignedLongEqual(v1: any | null, v2: any | null): number
export function unsignedLongHash(v: any | null): number
export function x11ErrorTrapPop(x11Display: X11Display): void
export function x11ErrorTrapPopWithReturn(x11Display: X11Display): number
export function x11ErrorTrapPush(x11Display: X11Display): void
export interface IdleMonitorWatchFunc {
    (monitor: IdleMonitor, watchId: number): void
}
export interface KeyHandlerFunc {
    (display: Display, window: Window, event: any | null, binding: KeyBinding): void
}
export interface PrefsChangedFunc {
    (pref: Preference): void
}
export interface WindowForeachFunc {
    (window: Window): boolean
}
export module CloseDialog {

    // Signal callback interfaces

    /**
     * Signal callback interface for `response`
     */
    export interface ResponseSignalCallback {
        (object: CloseDialogResponse): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Meta-13.Meta.CloseDialog

        window?: Window | null
    }

}

export interface CloseDialog {

    // Own properties of Meta-13.Meta.CloseDialog

    readonly window: Window
    __gtype__: number

    // Owm methods of Meta-13.Meta.CloseDialog

    // Has conflict: focus(): void
    // Has conflict: hide(): void
    /**
     * Returns whether `dialog` is currently visible.
     * @returns #TRUE if @dialog is visible.
     */
    isVisible(): boolean
    /**
     * Responds and closes the dialog. To be called by #MetaCloseDialog
     * implementations.
     * @param response a #MetaCloseDialogResponse
     */
    response(response: CloseDialogResponse): void
    // Has conflict: show(): void

    // Own virtual methods of Meta-13.Meta.CloseDialog

    /**
     * Call whenever `dialog` should receive keyboard focus,
     * usually when the window would.
     * @virtual 
     */
    focus(): void
    /**
     * Hides the close dialog.
     * @virtual 
     */
    hide(): void
    /**
     * Shows the close dialog.
     * @virtual 
     */
    show(): void

    // Own signals of Meta-13.Meta.CloseDialog

    connect(sigName: "response", callback: CloseDialog.ResponseSignalCallback): number
    on(sigName: "response", callback: CloseDialog.ResponseSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "response", callback: CloseDialog.ResponseSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "response", callback: CloseDialog.ResponseSignalCallback): NodeJS.EventEmitter
    emit(sigName: "response", ...args: any[]): void

    // Class property signals of Meta-13.Meta.CloseDialog

    connect(sigName: "notify::window", callback: (...args: any[]) => void): number
    on(sigName: "notify::window", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::window", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class CloseDialog extends GObject.Object {

    // Own properties of Meta-13.Meta.CloseDialog

    static name: string

    // Constructors of Meta-13.Meta.CloseDialog

    constructor(config?: CloseDialog.ConstructorProperties) 
    _init(config?: CloseDialog.ConstructorProperties): void
}

export module InhibitShortcutsDialog {

    // Signal callback interfaces

    /**
     * Signal callback interface for `response`
     */
    export interface ResponseSignalCallback {
        (object: InhibitShortcutsDialogResponse): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Meta-13.Meta.InhibitShortcutsDialog

        window?: Window | null
    }

}

export interface InhibitShortcutsDialog {

    // Own properties of Meta-13.Meta.InhibitShortcutsDialog

    readonly window: Window
    __gtype__: number

    // Owm methods of Meta-13.Meta.InhibitShortcutsDialog

    // Has conflict: hide(): void
    /**
     * Responds and closes the dialog. To be called by #MetaInhibitShortcutsDialog
     * implementations.
     * @param response a #MetaInhibitShortcutsDialogResponse
     */
    response(response: InhibitShortcutsDialogResponse): void
    // Has conflict: show(): void

    // Own virtual methods of Meta-13.Meta.InhibitShortcutsDialog

    /**
     * Hides the inhibit shortcuts dialog.
     * @virtual 
     */
    hide(): void
    /**
     * Shows the inhibit shortcuts dialog.
     * @virtual 
     */
    show(): void

    // Own signals of Meta-13.Meta.InhibitShortcutsDialog

    connect(sigName: "response", callback: InhibitShortcutsDialog.ResponseSignalCallback): number
    on(sigName: "response", callback: InhibitShortcutsDialog.ResponseSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "response", callback: InhibitShortcutsDialog.ResponseSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "response", callback: InhibitShortcutsDialog.ResponseSignalCallback): NodeJS.EventEmitter
    emit(sigName: "response", ...args: any[]): void

    // Class property signals of Meta-13.Meta.InhibitShortcutsDialog

    connect(sigName: "notify::window", callback: (...args: any[]) => void): number
    on(sigName: "notify::window", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::window", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class InhibitShortcutsDialog extends GObject.Object {

    // Own properties of Meta-13.Meta.InhibitShortcutsDialog

    static name: string

    // Constructors of Meta-13.Meta.InhibitShortcutsDialog

    constructor(config?: InhibitShortcutsDialog.ConstructorProperties) 
    _init(config?: InhibitShortcutsDialog.ConstructorProperties): void
}

export module Backend {

    // Signal callback interfaces


    /**
     * Signal callback interface for `keymap-changed`
     */
    export interface KeymapChangedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `keymap-layout-group-changed`
     */
    export interface KeymapLayoutGroupChangedSignalCallback {
        (object: number): void
    }

    /**
     * Signal callback interface for `last-device-changed`
     */
    export interface LastDeviceChangedSignalCallback {
        (object: Clutter.InputDevice): void
    }

    /**
     * Signal callback interface for `lid-is-closed-changed`
     */
    export interface LidIsClosedChangedSignalCallback {
        (object: boolean): void
    }

    /**
     * Signal callback interface for `prepare-shutdown`
     */
    export interface PrepareShutdownSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Gio.Initable.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Meta-13.Meta.Backend

        context?: Context | null
    }

}

export interface Backend extends Gio.Initable {

    // Own properties of Meta-13.Meta.Backend

    readonly capabilities: BackendCapabilities
    readonly context: Context
    __gtype__: number

    // Own fields of Meta-13.Meta.Backend

    parentInstance: GObject.Object

    // Owm methods of Meta-13.Meta.Backend

    getCapabilities(): BackendCapabilities
    getContext(): Context
    getCoreIdleMonitor(): IdleMonitor
    /**
     * Gets the global #MetaDnd that's managed by this backend.
     * @returns the #MetaDnd
     */
    getDnd(): Dnd
    getMonitorManager(): MonitorManager
    getRemoteAccessController(): RemoteAccessController
    /**
     * Gets the global #ClutterStage that's managed by this backend.
     * @returns the #ClutterStage
     */
    getStage(): Clutter.Actor
    isHeadless(): boolean
    isRenderingHardwareAccelerated(): boolean
    lockLayoutGroup(idx: number): void
    setKeymap(layouts: string, variants: string, options: string): void

    // Own signals of Meta-13.Meta.Backend

    connect(sigName: "gpu-added", callback: (...args: any[]) => void): number
    on(sigName: "gpu-added", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "gpu-added", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "gpu-added", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "gpu-added", ...args: any[]): void
    connect(sigName: "keymap-changed", callback: Backend.KeymapChangedSignalCallback): number
    on(sigName: "keymap-changed", callback: Backend.KeymapChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "keymap-changed", callback: Backend.KeymapChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "keymap-changed", callback: Backend.KeymapChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "keymap-changed", ...args: any[]): void
    connect(sigName: "keymap-layout-group-changed", callback: Backend.KeymapLayoutGroupChangedSignalCallback): number
    on(sigName: "keymap-layout-group-changed", callback: Backend.KeymapLayoutGroupChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "keymap-layout-group-changed", callback: Backend.KeymapLayoutGroupChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "keymap-layout-group-changed", callback: Backend.KeymapLayoutGroupChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "keymap-layout-group-changed", ...args: any[]): void
    connect(sigName: "last-device-changed", callback: Backend.LastDeviceChangedSignalCallback): number
    on(sigName: "last-device-changed", callback: Backend.LastDeviceChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "last-device-changed", callback: Backend.LastDeviceChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "last-device-changed", callback: Backend.LastDeviceChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "last-device-changed", ...args: any[]): void
    connect(sigName: "lid-is-closed-changed", callback: Backend.LidIsClosedChangedSignalCallback): number
    on(sigName: "lid-is-closed-changed", callback: Backend.LidIsClosedChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "lid-is-closed-changed", callback: Backend.LidIsClosedChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "lid-is-closed-changed", callback: Backend.LidIsClosedChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "lid-is-closed-changed", ...args: any[]): void
    connect(sigName: "prepare-shutdown", callback: Backend.PrepareShutdownSignalCallback): number
    on(sigName: "prepare-shutdown", callback: Backend.PrepareShutdownSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "prepare-shutdown", callback: Backend.PrepareShutdownSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "prepare-shutdown", callback: Backend.PrepareShutdownSignalCallback): NodeJS.EventEmitter
    emit(sigName: "prepare-shutdown", ...args: any[]): void

    // Class property signals of Meta-13.Meta.Backend

    connect(sigName: "notify::capabilities", callback: (...args: any[]) => void): number
    on(sigName: "notify::capabilities", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::capabilities", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::capabilities", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::capabilities", ...args: any[]): void
    connect(sigName: "notify::context", callback: (...args: any[]) => void): number
    on(sigName: "notify::context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::context", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Handles monitor config, modesetting, cursor sprites, ...
 * 
 * MetaBackend is the abstraction that deals with several things like:
 * - Modesetting (depending on the backend, this can be done either by X or KMS)
 * - Initializing the #MetaSettings
 * - Setting up Monitor configuration
 * - Input device configuration (using the #ClutterDeviceManager)
 * - Creating the #MetaRenderer
 * - Setting up the stage of the scene graph (using #MetaStage)
 * - Creating the object that deals with the cursor (using #MetaCursorTracker)
 *     and its possible pointer constraint (using #MetaPointerConstraint)
 * - Setting the cursor sprite (using #MetaCursorRenderer)
 * - Interacting with logind (using the appropriate D-Bus interface)
 * - Querying UPower (over D-Bus) to know when the lid is closed
 * - Setup Remote Desktop / Screencasting (#MetaRemoteDesktop)
 * - Setup the #MetaEgl object
 * 
 * Note that the #MetaBackend is not a subclass of #ClutterBackend. It is
 * responsible for creating the correct one, based on the backend that is
 * used (#MetaBackendNative or #MetaBackendX11).
 * @class 
 */
export class Backend extends GObject.Object {

    // Own properties of Meta-13.Meta.Backend

    static name: string

    // Constructors of Meta-13.Meta.Backend

    constructor(config?: Backend.ConstructorProperties) 
    _init(config?: Backend.ConstructorProperties): void
}

export module Background {

    // Signal callback interfaces

    /**
     * Signal callback interface for `changed`
     */
    export interface ChangedSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Meta-13.Meta.Background

        metaDisplay?: Display | null
    }

}

export interface Background {

    // Own properties of Meta-13.Meta.Background

    readonly metaDisplay: Display
    __gtype__: number

    // Owm methods of Meta-13.Meta.Background

    setBlend(file1: Gio.File, file2: Gio.File, blendFactor: number, style: GDesktopEnums.BackgroundStyle): void
    setColor(color: Clutter.Color): void
    /**
     * Set the background to `file`
     * @param file a #GFile representing the background file
     * @param style the background style to apply
     */
    setFile(file: Gio.File | null, style: GDesktopEnums.BackgroundStyle): void
    setGradient(shadingDirection: GDesktopEnums.BackgroundShading, color: Clutter.Color, secondColor: Clutter.Color): void

    // Own signals of Meta-13.Meta.Background

    connect(sigName: "changed", callback: Background.ChangedSignalCallback): number
    on(sigName: "changed", callback: Background.ChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: Background.ChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: Background.ChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "changed", ...args: any[]): void

    // Class property signals of Meta-13.Meta.Background

    connect(sigName: "notify::meta-display", callback: (...args: any[]) => void): number
    on(sigName: "notify::meta-display", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::meta-display", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::meta-display", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::meta-display", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * This class handles tracking and painting the root window background.
 * 
 * By integrating with [class`Meta`.WindowGroup] we can avoid painting parts of
 * the background that are obscured by other windows.
 * @class 
 */
export class Background extends GObject.Object {

    // Own properties of Meta-13.Meta.Background

    static name: string

    // Constructors of Meta-13.Meta.Background

    constructor(config?: Background.ConstructorProperties) 
    constructor(display: Display) 
    static new(display: Display): Background
    _init(config?: Background.ConstructorProperties): void
    static refreshAll(): void
}

export module BackgroundActor {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Clutter.Animatable.ConstructorProperties, Clutter.Container.ConstructorProperties, Clutter.Scriptable.ConstructorProperties, Clutter.Actor.ConstructorProperties {

        // Own constructor properties of Meta-13.Meta.BackgroundActor

        metaDisplay?: Display | null
        monitor?: number | null
    }

}

export interface BackgroundActor extends Atk.ImplementorIface, Clutter.Animatable, Clutter.Container, Clutter.Scriptable {

    // Own properties of Meta-13.Meta.BackgroundActor

    readonly metaDisplay: Display
    readonly monitor: number
    __gtype__: number

    // Class property signals of Meta-13.Meta.BackgroundActor

    connect(sigName: "notify::meta-display", callback: (...args: any[]) => void): number
    on(sigName: "notify::meta-display", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::meta-display", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::meta-display", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::meta-display", ...args: any[]): void
    connect(sigName: "notify::monitor", callback: (...args: any[]) => void): number
    on(sigName: "notify::monitor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::monitor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::monitor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::monitor", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::actions", callback: (...args: any[]) => void): number
    on(sigName: "notify::actions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::actions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::actions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::actions", ...args: any[]): void
    connect(sigName: "notify::allocation", callback: (...args: any[]) => void): number
    on(sigName: "notify::allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::allocation", ...args: any[]): void
    connect(sigName: "notify::background-color", callback: (...args: any[]) => void): number
    on(sigName: "notify::background-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::background-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::background-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::background-color", ...args: any[]): void
    connect(sigName: "notify::background-color-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::background-color-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::background-color-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::background-color-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::background-color-set", ...args: any[]): void
    connect(sigName: "notify::child-transform", callback: (...args: any[]) => void): number
    on(sigName: "notify::child-transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::child-transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::child-transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::child-transform", ...args: any[]): void
    connect(sigName: "notify::child-transform-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::child-transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::child-transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::child-transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::child-transform-set", ...args: any[]): void
    connect(sigName: "notify::clip-rect", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip-rect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip-rect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip-rect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip-rect", ...args: any[]): void
    connect(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip-to-allocation", ...args: any[]): void
    connect(sigName: "notify::color-state", callback: (...args: any[]) => void): number
    on(sigName: "notify::color-state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::color-state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::color-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::color-state", ...args: any[]): void
    connect(sigName: "notify::constraints", callback: (...args: any[]) => void): number
    on(sigName: "notify::constraints", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::constraints", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::constraints", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::constraints", ...args: any[]): void
    connect(sigName: "notify::content", callback: (...args: any[]) => void): number
    on(sigName: "notify::content", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::content-box", callback: (...args: any[]) => void): number
    on(sigName: "notify::content-box", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content-box", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content-box", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content-box", ...args: any[]): void
    connect(sigName: "notify::content-gravity", callback: (...args: any[]) => void): number
    on(sigName: "notify::content-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content-gravity", ...args: any[]): void
    connect(sigName: "notify::content-repeat", callback: (...args: any[]) => void): number
    on(sigName: "notify::content-repeat", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content-repeat", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content-repeat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content-repeat", ...args: any[]): void
    connect(sigName: "notify::effect", callback: (...args: any[]) => void): number
    on(sigName: "notify::effect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::effect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::effect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::effect", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (...args: any[]) => void): number
    on(sigName: "notify::first-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::first-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fixed-position-set", ...args: any[]): void
    connect(sigName: "notify::fixed-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::fixed-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fixed-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fixed-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fixed-x", ...args: any[]): void
    connect(sigName: "notify::fixed-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::fixed-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fixed-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fixed-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fixed-y", ...args: any[]): void
    connect(sigName: "notify::has-clip", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-clip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-clip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-clip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-clip", ...args: any[]): void
    connect(sigName: "notify::has-pointer", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-pointer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-pointer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-pointer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-pointer", ...args: any[]): void
    connect(sigName: "notify::height", callback: (...args: any[]) => void): number
    on(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (...args: any[]) => void): number
    on(sigName: "notify::last-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::last-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (...args: any[]) => void): number
    on(sigName: "notify::layout-manager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::layout-manager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::magnification-filter", callback: (...args: any[]) => void): number
    on(sigName: "notify::magnification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::magnification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::magnification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::magnification-filter", ...args: any[]): void
    connect(sigName: "notify::mapped", callback: (...args: any[]) => void): number
    on(sigName: "notify::mapped", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mapped", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mapped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mapped", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-left", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-left", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-right", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-right", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::min-height", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-height", ...args: any[]): void
    connect(sigName: "notify::min-height-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-height-set", ...args: any[]): void
    connect(sigName: "notify::min-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-width", ...args: any[]): void
    connect(sigName: "notify::min-width-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-width-set", ...args: any[]): void
    connect(sigName: "notify::minification-filter", callback: (...args: any[]) => void): number
    on(sigName: "notify::minification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::minification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::minification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::minification-filter", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::natural-height", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-height", ...args: any[]): void
    connect(sigName: "notify::natural-height-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-height-set", ...args: any[]): void
    connect(sigName: "notify::natural-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-width", ...args: any[]): void
    connect(sigName: "notify::natural-width-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-width-set", ...args: any[]): void
    connect(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void): number
    on(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::offscreen-redirect", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (...args: any[]) => void): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::pivot-point", callback: (...args: any[]) => void): number
    on(sigName: "notify::pivot-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pivot-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pivot-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pivot-point", ...args: any[]): void
    connect(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pivot-point-z", ...args: any[]): void
    connect(sigName: "notify::position", callback: (...args: any[]) => void): number
    on(sigName: "notify::position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::reactive", callback: (...args: any[]) => void): number
    on(sigName: "notify::reactive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::reactive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::reactive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::reactive", ...args: any[]): void
    connect(sigName: "notify::realized", callback: (...args: any[]) => void): number
    on(sigName: "notify::realized", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::realized", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::realized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::realized", ...args: any[]): void
    connect(sigName: "notify::request-mode", callback: (...args: any[]) => void): number
    on(sigName: "notify::request-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::request-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::request-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::request-mode", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-angle-x", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-angle-y", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-angle-z", ...args: any[]): void
    connect(sigName: "notify::scale-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-x", ...args: any[]): void
    connect(sigName: "notify::scale-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-y", ...args: any[]): void
    connect(sigName: "notify::scale-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-z", ...args: any[]): void
    connect(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::show-on-set-parent", ...args: any[]): void
    connect(sigName: "notify::size", callback: (...args: any[]) => void): number
    on(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::text-direction", callback: (...args: any[]) => void): number
    on(sigName: "notify::text-direction", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::text-direction", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::text-direction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::text-direction", ...args: any[]): void
    connect(sigName: "notify::transform", callback: (...args: any[]) => void): number
    on(sigName: "notify::transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transform", ...args: any[]): void
    connect(sigName: "notify::transform-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transform-set", ...args: any[]): void
    connect(sigName: "notify::translation-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::translation-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::translation-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::translation-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::translation-x", ...args: any[]): void
    connect(sigName: "notify::translation-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::translation-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::translation-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::translation-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::translation-y", ...args: any[]): void
    connect(sigName: "notify::translation-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::translation-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::translation-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::translation-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::translation-z", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (...args: any[]) => void): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width", callback: (...args: any[]) => void): number
    on(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::x", callback: (...args: any[]) => void): number
    on(sigName: "notify::x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x", ...args: any[]): void
    connect(sigName: "notify::x-align", callback: (...args: any[]) => void): number
    on(sigName: "notify::x-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x-align", ...args: any[]): void
    connect(sigName: "notify::x-expand", callback: (...args: any[]) => void): number
    on(sigName: "notify::x-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x-expand", ...args: any[]): void
    connect(sigName: "notify::y", callback: (...args: any[]) => void): number
    on(sigName: "notify::y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y", ...args: any[]): void
    connect(sigName: "notify::y-align", callback: (...args: any[]) => void): number
    on(sigName: "notify::y-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y-align", ...args: any[]): void
    connect(sigName: "notify::y-expand", callback: (...args: any[]) => void): number
    on(sigName: "notify::y-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y-expand", ...args: any[]): void
    connect(sigName: "notify::z-position", callback: (...args: any[]) => void): number
    on(sigName: "notify::z-position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::z-position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::z-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::z-position", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * This class handles tracking and painting the root window background.
 * 
 * By integrating with [class`Meta`.WindowGroup] we can avoid painting parts of
 * the background that are obscured by other windows.
 * @class 
 */
export class BackgroundActor extends Clutter.Actor {

    // Own properties of Meta-13.Meta.BackgroundActor

    static name: string

    // Constructors of Meta-13.Meta.BackgroundActor

    constructor(config?: BackgroundActor.ConstructorProperties) 
    /**
     * Creates a new actor to draw the background for the given monitor.
     * @constructor 
     * @param display 
     * @param monitor Index of the monitor for which to draw the background
     * @returns the newly created background actor
     */
    constructor(display: Display, monitor: number) 
    /**
     * Creates a new actor to draw the background for the given monitor.
     * @constructor 
     * @param display 
     * @param monitor Index of the monitor for which to draw the background
     * @returns the newly created background actor
     */
    static new(display: Display, monitor: number): BackgroundActor

    // Overloads of new

    /**
     * Creates a new #ClutterActor.
     * 
     * A newly created actor has a floating reference, which will be sunk
     * when it is added to another actor.
     * @constructor 
     * @returns the newly created #ClutterActor
     */
    static new(): Clutter.Actor
    _init(config?: BackgroundActor.ConstructorProperties): void
}

export module BackgroundContent {

    // Constructor properties interface

    export interface ConstructorProperties extends Clutter.Content.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Meta-13.Meta.BackgroundContent

        background?: Background | null
        brightness?: number | null
        gradient?: boolean | null
        gradientHeight?: number | null
        gradientMaxDarkness?: number | null
        metaDisplay?: Display | null
        monitor?: number | null
        roundedClipRadius?: number | null
        vignette?: boolean | null
        vignetteSharpness?: number | null
    }

}

export interface BackgroundContent extends Clutter.Content {

    // Own properties of Meta-13.Meta.BackgroundContent

    background: Background
    brightness: number
    gradient: boolean
    gradientHeight: number
    gradientMaxDarkness: number
    readonly metaDisplay: Display
    readonly monitor: number
    roundedClipRadius: number
    vignette: boolean
    vignetteSharpness: number
    __gtype__: number

    // Owm methods of Meta-13.Meta.BackgroundContent

    setBackground(background: Background): void
    setGradient(enabled: boolean, height: number, toneStart: number): void
    /**
     * Sets the bounding clip rectangle of the #MetaBackgroundContent that's used
     * when a rounded clip set via meta_background_content_set_rounded_clip_radius()
     * is in effect, set it to  %NULL to use no bounding clip, rounding the edges
     * of the full texture.
     * @param bounds The new bounding clip rectangle, or %NULL
     */
    setRoundedClipBounds(bounds: Graphene.Rect | null): void
    setRoundedClipRadius(radius: number): void
    setVignette(enabled: boolean, brightness: number, sharpness: number): void

    // Class property signals of Meta-13.Meta.BackgroundContent

    connect(sigName: "notify::background", callback: (...args: any[]) => void): number
    on(sigName: "notify::background", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::background", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::background", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::background", ...args: any[]): void
    connect(sigName: "notify::brightness", callback: (...args: any[]) => void): number
    on(sigName: "notify::brightness", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::brightness", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::brightness", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::brightness", ...args: any[]): void
    connect(sigName: "notify::gradient", callback: (...args: any[]) => void): number
    on(sigName: "notify::gradient", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::gradient", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::gradient", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::gradient", ...args: any[]): void
    connect(sigName: "notify::gradient-height", callback: (...args: any[]) => void): number
    on(sigName: "notify::gradient-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::gradient-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::gradient-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::gradient-height", ...args: any[]): void
    connect(sigName: "notify::gradient-max-darkness", callback: (...args: any[]) => void): number
    on(sigName: "notify::gradient-max-darkness", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::gradient-max-darkness", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::gradient-max-darkness", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::gradient-max-darkness", ...args: any[]): void
    connect(sigName: "notify::meta-display", callback: (...args: any[]) => void): number
    on(sigName: "notify::meta-display", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::meta-display", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::meta-display", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::meta-display", ...args: any[]): void
    connect(sigName: "notify::monitor", callback: (...args: any[]) => void): number
    on(sigName: "notify::monitor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::monitor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::monitor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::monitor", ...args: any[]): void
    connect(sigName: "notify::rounded-clip-radius", callback: (...args: any[]) => void): number
    on(sigName: "notify::rounded-clip-radius", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rounded-clip-radius", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rounded-clip-radius", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rounded-clip-radius", ...args: any[]): void
    connect(sigName: "notify::vignette", callback: (...args: any[]) => void): number
    on(sigName: "notify::vignette", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vignette", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vignette", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vignette", ...args: any[]): void
    connect(sigName: "notify::vignette-sharpness", callback: (...args: any[]) => void): number
    on(sigName: "notify::vignette-sharpness", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vignette-sharpness", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vignette-sharpness", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vignette-sharpness", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * This class handles tracking and painting the root window background.
 * 
 * By integrating with [class`Meta`.WindowGroup] we can avoid painting parts of
 * the background that are obscured by other windows.
 * 
 * The overall model drawing model of this content is that we have one
 * texture, or two interpolated textures, possibly with alpha or
 * margins that let the underlying background show through, blended
 * over a solid color or a gradient. The result of that combination
 * can then be affected by a "vignette" that darkens the background
 * away from a central point (or as a no-GLSL fallback, simply darkens
 * the background) and by overall opacity.
 * 
 * As of GNOME 3.14, GNOME is only using a fraction of this when the
 * user sets the background through the control center - what can be
 * set is:
 * 
 *  A single image without a border
 *  An animation of images without a border that blend together,
 *   with the blend changing every 4-5 minutes
 *  A solid color with a repeated noise texture blended over it
 * 
 * This all is pretty easy to do in a fragment shader, except when:
 * 
 *  A) We don't have GLSL - in this case, the operation of
 *     interpolating the two textures and blending the result over the
 *     background can't be expressed with Cogl's fixed-function layer
 *     combining (which is confined to what GL's texture environment
 *     combining can do) So we can only handle the above directly if
 *     there are no margins or alpha.
 * 
 *  B) The image textures are sliced. Texture size limits on older
 *     hardware (pre-965 intel hardware, r300, etc.)  is often 2048,
 *     and it would be common to use a texture larger than this for a
 *     background and expect it to be scaled down. Cogl can compensate
 *     for this by breaking the texture up into multiple textures, but
 *     can't multitexture with sliced textures. So we can only handle
 *     the above if there's a single texture.
 * 
 * However, even when we *can* represent everything in a single pass,
 * it's not necessarily efficient. If we want to draw a 1024x768
 * background, it's pretty inefficient to bilinearly texture from
 * two 2560x1440 images and mix that. So the drawing model we take
 * here is that MetaBackground generates a single texture (which
 * might be a 1x1 texture for a solid color, or a 1x2 texture for a
 * gradient, or a repeated texture for wallpaper, or a pre-rendered
 * texture the size of the screen), and we draw with that, possibly
 * adding the vignette and opacity.
 * @class 
 */
export class BackgroundContent extends GObject.Object {

    // Own properties of Meta-13.Meta.BackgroundContent

    static name: string

    // Constructors of Meta-13.Meta.BackgroundContent

    constructor(config?: BackgroundContent.ConstructorProperties) 
    _init(config?: BackgroundContent.ConstructorProperties): void
    /**
     * Creates a new actor to draw the background for the given monitor.
     * @param display 
     * @param monitor Index of the monitor for which to draw the background
     * @returns the newly created background actor
     */
    static new(display: Display, monitor: number): Clutter.Content
}

export module BackgroundGroup {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Clutter.Animatable.ConstructorProperties, Clutter.Container.ConstructorProperties, Clutter.Scriptable.ConstructorProperties, Clutter.Actor.ConstructorProperties {
    }

}

export interface BackgroundGroup extends Atk.ImplementorIface, Clutter.Animatable, Clutter.Container, Clutter.Scriptable {

    // Own properties of Meta-13.Meta.BackgroundGroup

    __gtype__: number

    // Own fields of Meta-13.Meta.BackgroundGroup

    parentInstance: Clutter.Actor

    // Class property signals of Meta-13.Meta.BackgroundGroup

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::actions", callback: (...args: any[]) => void): number
    on(sigName: "notify::actions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::actions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::actions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::actions", ...args: any[]): void
    connect(sigName: "notify::allocation", callback: (...args: any[]) => void): number
    on(sigName: "notify::allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::allocation", ...args: any[]): void
    connect(sigName: "notify::background-color", callback: (...args: any[]) => void): number
    on(sigName: "notify::background-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::background-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::background-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::background-color", ...args: any[]): void
    connect(sigName: "notify::background-color-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::background-color-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::background-color-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::background-color-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::background-color-set", ...args: any[]): void
    connect(sigName: "notify::child-transform", callback: (...args: any[]) => void): number
    on(sigName: "notify::child-transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::child-transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::child-transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::child-transform", ...args: any[]): void
    connect(sigName: "notify::child-transform-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::child-transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::child-transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::child-transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::child-transform-set", ...args: any[]): void
    connect(sigName: "notify::clip-rect", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip-rect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip-rect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip-rect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip-rect", ...args: any[]): void
    connect(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip-to-allocation", ...args: any[]): void
    connect(sigName: "notify::color-state", callback: (...args: any[]) => void): number
    on(sigName: "notify::color-state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::color-state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::color-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::color-state", ...args: any[]): void
    connect(sigName: "notify::constraints", callback: (...args: any[]) => void): number
    on(sigName: "notify::constraints", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::constraints", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::constraints", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::constraints", ...args: any[]): void
    connect(sigName: "notify::content", callback: (...args: any[]) => void): number
    on(sigName: "notify::content", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::content-box", callback: (...args: any[]) => void): number
    on(sigName: "notify::content-box", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content-box", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content-box", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content-box", ...args: any[]): void
    connect(sigName: "notify::content-gravity", callback: (...args: any[]) => void): number
    on(sigName: "notify::content-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content-gravity", ...args: any[]): void
    connect(sigName: "notify::content-repeat", callback: (...args: any[]) => void): number
    on(sigName: "notify::content-repeat", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content-repeat", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content-repeat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content-repeat", ...args: any[]): void
    connect(sigName: "notify::effect", callback: (...args: any[]) => void): number
    on(sigName: "notify::effect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::effect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::effect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::effect", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (...args: any[]) => void): number
    on(sigName: "notify::first-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::first-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fixed-position-set", ...args: any[]): void
    connect(sigName: "notify::fixed-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::fixed-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fixed-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fixed-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fixed-x", ...args: any[]): void
    connect(sigName: "notify::fixed-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::fixed-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fixed-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fixed-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fixed-y", ...args: any[]): void
    connect(sigName: "notify::has-clip", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-clip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-clip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-clip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-clip", ...args: any[]): void
    connect(sigName: "notify::has-pointer", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-pointer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-pointer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-pointer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-pointer", ...args: any[]): void
    connect(sigName: "notify::height", callback: (...args: any[]) => void): number
    on(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (...args: any[]) => void): number
    on(sigName: "notify::last-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::last-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (...args: any[]) => void): number
    on(sigName: "notify::layout-manager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::layout-manager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::magnification-filter", callback: (...args: any[]) => void): number
    on(sigName: "notify::magnification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::magnification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::magnification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::magnification-filter", ...args: any[]): void
    connect(sigName: "notify::mapped", callback: (...args: any[]) => void): number
    on(sigName: "notify::mapped", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mapped", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mapped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mapped", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-left", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-left", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-right", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-right", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::min-height", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-height", ...args: any[]): void
    connect(sigName: "notify::min-height-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-height-set", ...args: any[]): void
    connect(sigName: "notify::min-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-width", ...args: any[]): void
    connect(sigName: "notify::min-width-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-width-set", ...args: any[]): void
    connect(sigName: "notify::minification-filter", callback: (...args: any[]) => void): number
    on(sigName: "notify::minification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::minification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::minification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::minification-filter", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::natural-height", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-height", ...args: any[]): void
    connect(sigName: "notify::natural-height-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-height-set", ...args: any[]): void
    connect(sigName: "notify::natural-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-width", ...args: any[]): void
    connect(sigName: "notify::natural-width-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-width-set", ...args: any[]): void
    connect(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void): number
    on(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::offscreen-redirect", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (...args: any[]) => void): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::pivot-point", callback: (...args: any[]) => void): number
    on(sigName: "notify::pivot-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pivot-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pivot-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pivot-point", ...args: any[]): void
    connect(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pivot-point-z", ...args: any[]): void
    connect(sigName: "notify::position", callback: (...args: any[]) => void): number
    on(sigName: "notify::position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::reactive", callback: (...args: any[]) => void): number
    on(sigName: "notify::reactive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::reactive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::reactive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::reactive", ...args: any[]): void
    connect(sigName: "notify::realized", callback: (...args: any[]) => void): number
    on(sigName: "notify::realized", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::realized", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::realized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::realized", ...args: any[]): void
    connect(sigName: "notify::request-mode", callback: (...args: any[]) => void): number
    on(sigName: "notify::request-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::request-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::request-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::request-mode", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-angle-x", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-angle-y", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-angle-z", ...args: any[]): void
    connect(sigName: "notify::scale-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-x", ...args: any[]): void
    connect(sigName: "notify::scale-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-y", ...args: any[]): void
    connect(sigName: "notify::scale-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-z", ...args: any[]): void
    connect(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::show-on-set-parent", ...args: any[]): void
    connect(sigName: "notify::size", callback: (...args: any[]) => void): number
    on(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::text-direction", callback: (...args: any[]) => void): number
    on(sigName: "notify::text-direction", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::text-direction", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::text-direction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::text-direction", ...args: any[]): void
    connect(sigName: "notify::transform", callback: (...args: any[]) => void): number
    on(sigName: "notify::transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transform", ...args: any[]): void
    connect(sigName: "notify::transform-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transform-set", ...args: any[]): void
    connect(sigName: "notify::translation-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::translation-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::translation-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::translation-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::translation-x", ...args: any[]): void
    connect(sigName: "notify::translation-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::translation-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::translation-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::translation-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::translation-y", ...args: any[]): void
    connect(sigName: "notify::translation-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::translation-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::translation-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::translation-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::translation-z", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (...args: any[]) => void): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width", callback: (...args: any[]) => void): number
    on(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::x", callback: (...args: any[]) => void): number
    on(sigName: "notify::x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x", ...args: any[]): void
    connect(sigName: "notify::x-align", callback: (...args: any[]) => void): number
    on(sigName: "notify::x-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x-align", ...args: any[]): void
    connect(sigName: "notify::x-expand", callback: (...args: any[]) => void): number
    on(sigName: "notify::x-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x-expand", ...args: any[]): void
    connect(sigName: "notify::y", callback: (...args: any[]) => void): number
    on(sigName: "notify::y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y", ...args: any[]): void
    connect(sigName: "notify::y-align", callback: (...args: any[]) => void): number
    on(sigName: "notify::y-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y-align", ...args: any[]): void
    connect(sigName: "notify::y-expand", callback: (...args: any[]) => void): number
    on(sigName: "notify::y-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y-expand", ...args: any[]): void
    connect(sigName: "notify::z-position", callback: (...args: any[]) => void): number
    on(sigName: "notify::z-position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::z-position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::z-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::z-position", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Container for background actors
 * 
 * This class is a subclass of ClutterActor with special handling for
 * MetaBackgroundActor/MetaBackgroundGroup when painting children.
 * It makes sure to only draw the parts of the backgrounds not
 * occluded by opaque windows.
 * 
 * See #MetaWindowGroup for more information behind the motivation,
 * and details on implementation.
 * @class 
 */
export class BackgroundGroup extends Clutter.Actor {

    // Own properties of Meta-13.Meta.BackgroundGroup

    static name: string

    // Constructors of Meta-13.Meta.BackgroundGroup

    constructor(config?: BackgroundGroup.ConstructorProperties) 
    constructor() 
    static new(): BackgroundGroup
    _init(config?: BackgroundGroup.ConstructorProperties): void
}

export module BackgroundImage {

    // Signal callback interfaces

    /**
     * Signal callback interface for `loaded`
     */
    export interface LoadedSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface BackgroundImage {

    // Own properties of Meta-13.Meta.BackgroundImage

    __gtype__: number

    // Owm methods of Meta-13.Meta.BackgroundImage

    /**
     * This function is a convenience function for checking for success,
     * without having to call meta_background_image_get_texture() and
     * handle the return of a Cogl type.
     * @returns %TRUE if loading completed successfully, otherwise %FALSE
     */
    getSuccess(): boolean
    getTexture(): Cogl.Texture
    isLoaded(): boolean

    // Own signals of Meta-13.Meta.BackgroundImage

    connect(sigName: "loaded", callback: BackgroundImage.LoadedSignalCallback): number
    on(sigName: "loaded", callback: BackgroundImage.LoadedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "loaded", callback: BackgroundImage.LoadedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "loaded", callback: BackgroundImage.LoadedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "loaded", ...args: any[]): void

    // Class property signals of Meta-13.Meta.BackgroundImage

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Represents a loaded or loading background image.
 * @class 
 */
export class BackgroundImage extends GObject.Object {

    // Own properties of Meta-13.Meta.BackgroundImage

    static name: string

    // Constructors of Meta-13.Meta.BackgroundImage

    constructor(config?: BackgroundImage.ConstructorProperties) 
    _init(config?: BackgroundImage.ConstructorProperties): void
}

export module BackgroundImageCache {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface BackgroundImageCache {

    // Own properties of Meta-13.Meta.BackgroundImageCache

    __gtype__: number

    // Owm methods of Meta-13.Meta.BackgroundImageCache

    /**
     * Loads an image to use as a background, or returns a reference to an
     * image that is already in the process of loading or loaded.
     * 
     * In either case, what is returned is a [class`Meta`.BackgroundImage] which can be dereferenced
     * to get a [iface`Cogl`.Texture]. If [method`Meta`.BackgroundImage.is_loaded] returns %TRUE,
     * the background is loaded, otherwise the [signal`Meta`.BackgroundImage::loaded]
     * signal will be emitted exactly once. The 'loaded' state means that the
     * loading process finished, whether it succeeded or failed.
     * @param file #GFile to load
     * @returns a #MetaBackgroundImage to dereference to get the loaded texture
     */
    load(file: Gio.File): BackgroundImage
    /**
     * Remove an entry from the cache; this would be used if monitoring
     * showed that the file changed.
     * @param file file to remove from the cache
     */
    purge(file: Gio.File): void

    // Class property signals of Meta-13.Meta.BackgroundImageCache

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Caches loading of textures for backgrounds.
 * 
 * There's actually nothing background specific about it, other than it is tuned
 * to work well for large images as typically are used for backgrounds.
 * @class 
 */
export class BackgroundImageCache extends GObject.Object {

    // Own properties of Meta-13.Meta.BackgroundImageCache

    static name: string

    // Constructors of Meta-13.Meta.BackgroundImageCache

    constructor(config?: BackgroundImageCache.ConstructorProperties) 
    _init(config?: BackgroundImageCache.ConstructorProperties): void
    static getDefault(): BackgroundImageCache
}

export module Barrier {

    // Signal callback interfaces

    /**
     * Signal callback interface for `hit`
     */
    export interface HitSignalCallback {
        (event: BarrierEvent): void
    }

    /**
     * Signal callback interface for `left`
     */
    export interface LeftSignalCallback {
        (event: BarrierEvent): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Gio.Initable.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Meta-13.Meta.Barrier

        backend?: Backend | null
        directions?: BarrierDirection | null
        display?: Display | null
        flags?: BarrierFlags | null
        x1?: number | null
        x2?: number | null
        y1?: number | null
        y2?: number | null
    }

}

export interface Barrier extends Gio.Initable {

    // Own properties of Meta-13.Meta.Barrier

    readonly backend: Backend
    readonly directions: BarrierDirection
    readonly display: Display
    readonly flags: BarrierFlags
    readonly x1: number
    readonly x2: number
    readonly y1: number
    readonly y2: number
    __gtype__: number

    // Own fields of Meta-13.Meta.Barrier

    parentInstance: GObject.Object

    // Owm methods of Meta-13.Meta.Barrier

    destroy(): void
    isActive(): boolean
    /**
     * In XI2.3, pointer barriers provide a feature where they can
     * be temporarily released so that the pointer goes through
     * them. Pass a #MetaBarrierEvent to release the barrier for
     * this event sequence.
     * @param event The event to release the pointer for
     */
    release(event: BarrierEvent): void

    // Own signals of Meta-13.Meta.Barrier

    connect(sigName: "hit", callback: Barrier.HitSignalCallback): number
    on(sigName: "hit", callback: Barrier.HitSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "hit", callback: Barrier.HitSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "hit", callback: Barrier.HitSignalCallback): NodeJS.EventEmitter
    emit(sigName: "hit", ...args: any[]): void
    connect(sigName: "left", callback: Barrier.LeftSignalCallback): number
    on(sigName: "left", callback: Barrier.LeftSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "left", callback: Barrier.LeftSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "left", callback: Barrier.LeftSignalCallback): NodeJS.EventEmitter
    emit(sigName: "left", ...args: any[]): void

    // Class property signals of Meta-13.Meta.Barrier

    connect(sigName: "notify::backend", callback: (...args: any[]) => void): number
    on(sigName: "notify::backend", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::backend", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::backend", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::backend", ...args: any[]): void
    connect(sigName: "notify::directions", callback: (...args: any[]) => void): number
    on(sigName: "notify::directions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::directions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::directions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::directions", ...args: any[]): void
    connect(sigName: "notify::display", callback: (...args: any[]) => void): number
    on(sigName: "notify::display", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::display", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::display", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::display", ...args: any[]): void
    connect(sigName: "notify::flags", callback: (...args: any[]) => void): number
    on(sigName: "notify::flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::flags", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::flags", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::flags", ...args: any[]): void
    connect(sigName: "notify::x1", callback: (...args: any[]) => void): number
    on(sigName: "notify::x1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x1", ...args: any[]): void
    connect(sigName: "notify::x2", callback: (...args: any[]) => void): number
    on(sigName: "notify::x2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x2", ...args: any[]): void
    connect(sigName: "notify::y1", callback: (...args: any[]) => void): number
    on(sigName: "notify::y1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y1", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y1", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y1", ...args: any[]): void
    connect(sigName: "notify::y2", callback: (...args: any[]) => void): number
    on(sigName: "notify::y2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y2", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y2", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y2", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Pointer barriers
 * @class 
 */
export class Barrier extends GObject.Object {

    // Own properties of Meta-13.Meta.Barrier

    static name: string

    // Constructors of Meta-13.Meta.Barrier

    constructor(config?: Barrier.ConstructorProperties) 
    constructor(backend: Backend, x1: number, y1: number, x2: number, y2: number, directions: BarrierDirection, flags: BarrierFlags) 
    static new(backend: Backend, x1: number, y1: number, x2: number, y2: number, directions: BarrierDirection, flags: BarrierFlags): Barrier
    _init(config?: Barrier.ConstructorProperties): void
}

export module Compositor {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Meta-13.Meta.Compositor

        backend?: Backend | null
        display?: Display | null
    }

}

export interface Compositor {

    // Own properties of Meta-13.Meta.Compositor

    readonly backend: Backend
    readonly display: Display
    __gtype__: number

    // Own fields of Meta-13.Meta.Compositor

    parentInstance: GObject.Object

    // Owm methods of Meta-13.Meta.Compositor

    getFeedbackGroup(): Clutter.Actor
    getLaters(): Laters

    // Class property signals of Meta-13.Meta.Compositor

    connect(sigName: "notify::backend", callback: (...args: any[]) => void): number
    on(sigName: "notify::backend", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::backend", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::backend", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::backend", ...args: any[]): void
    connect(sigName: "notify::display", callback: (...args: any[]) => void): number
    on(sigName: "notify::display", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::display", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::display", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::display", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Compositor API
 * 
 * At a high-level, a window is not-visible or visible. When a
 * window is added (with meta_compositor_add_window()) it is not visible.
 * meta_compositor_show_window() indicates a transition from not-visible to
 * visible. Some of the reasons for this:
 * 
 * - Window newly created
 * - Window is unminimized
 * - Window is moved to the current desktop
 * - Window was made sticky
 * 
 * meta_compositor_hide_window() indicates that the window has transitioned from
 * visible to not-visible. Some reasons include:
 * 
 * - Window was destroyed
 * - Window is minimized
 * - Window is moved to a different desktop
 * - Window no longer sticky.
 * 
 * Note that combinations are possible - a window might have first
 * been minimized and then moved to a different desktop. The 'effect' parameter
 * to meta_compositor_show_window() and meta_compositor_hide_window() is a hint
 * as to the appropriate effect to show the user and should not
 * be considered to be indicative of a state change.
 * 
 * When the active workspace is changed, meta_compositor_switch_workspace() is
 * called first, then meta_compositor_show_window() and
 * meta_compositor_hide_window() are called individually for each window
 * affected, with an effect of META_COMP_EFFECT_NONE.
 * If hiding windows will affect the switch workspace animation, the
 * compositor needs to delay hiding the windows until the switch
 * workspace animation completes.
 * 
 * # Containers #
 * 
 * There's two containers in the stage that are used to place window actors, here
 * are listed in the order in which they are painted:
 * 
 * - window group, accessible with meta_get_window_group_for_display()
 * - top window group, accessible with meta_get_top_window_group_for_display()
 * 
 * Mutter will place actors representing windows in the window group, except for
 * override-redirect windows (ie. popups and menus) which will be placed in the
 * top window group.
 * @class 
 */
export class Compositor extends GObject.Object {

    // Own properties of Meta-13.Meta.Compositor

    static name: string

    // Constructors of Meta-13.Meta.Compositor

    constructor(config?: Compositor.ConstructorProperties) 
    _init(config?: Compositor.ConstructorProperties): void
}

export module Context {

    // Signal callback interfaces

    /**
     * Signal callback interface for `prepare-shutdown`
     */
    export interface PrepareShutdownSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `started`
     */
    export interface StartedSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Meta-13.Meta.Context

        name?: string | null
        unsafeMode?: boolean | null
    }

}

export interface Context {

    // Own properties of Meta-13.Meta.Context

    readonly name: string | null
    unsafeMode: boolean
    __gtype__: number

    // Own fields of Meta-13.Meta.Context

    parentInstance: GObject.Object

    // Owm methods of Meta-13.Meta.Context

    /**
     * See g_option_context_add_main_entries() for more details.
     * @param entries a %NULL-terminated array of #GOptionEntrys
     * @param translationDomain a translation domain to use, or %NULL
     */
    addOptionEntries(entries: GLib.OptionEntry[], translationDomain: string | null): void
    /**
     * See g_option_context_add_group() for more details.
     * @param group the group to add
     */
    addOptionGroup(group: GLib.OptionGroup): void
    configure(argv: string[] | null): [ /* returnType */ boolean, /* argv */ string[] | null ]
    destroy(): void
    getBackend(): Backend
    getCompositorType(): CompositorType
    getDisplay(): Display
    /**
     * Get the #MetaWaylandCompositor associated with the MetaContext. The might be
     * none currently associated if the context hasn't been started or if the
     * requested compositor type is not %META_COMPOSITOR_TYPE_WAYLAND.
     * @returns the #MetaWaylandCompositor
     */
    getWaylandCompositor(): WaylandCompositor | null
    isReplacing(): boolean
    notifyReady(): void
    /**
     * Raises the RLIMIT_NOFILE limit value to the hard limit.
     */
    raiseRlimitNofile(): boolean
    /**
     * Restores the RLIMIT_NOFILE limits from when the #MetaContext was created.
     */
    restoreRlimitNofile(): boolean
    runMainLoop(): boolean
    setGnomeWmKeybindings(wmKeybindings: string): void
    setPluginGtype(pluginGtype: GObject.GType): void
    setPluginName(pluginName: string): void
    setup(): boolean
    start(): boolean
    terminate(): void
    terminateWithError(error: GLib.Error): void

    // Own signals of Meta-13.Meta.Context

    connect(sigName: "prepare-shutdown", callback: Context.PrepareShutdownSignalCallback): number
    on(sigName: "prepare-shutdown", callback: Context.PrepareShutdownSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "prepare-shutdown", callback: Context.PrepareShutdownSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "prepare-shutdown", callback: Context.PrepareShutdownSignalCallback): NodeJS.EventEmitter
    emit(sigName: "prepare-shutdown", ...args: any[]): void
    connect(sigName: "started", callback: Context.StartedSignalCallback): number
    on(sigName: "started", callback: Context.StartedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "started", callback: Context.StartedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "started", callback: Context.StartedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "started", ...args: any[]): void

    // Class property signals of Meta-13.Meta.Context

    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::unsafe-mode", callback: (...args: any[]) => void): number
    on(sigName: "notify::unsafe-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::unsafe-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::unsafe-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::unsafe-mode", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Context extends GObject.Object {

    // Own properties of Meta-13.Meta.Context

    static name: string

    // Constructors of Meta-13.Meta.Context

    constructor(config?: Context.ConstructorProperties) 
    _init(config?: Context.ConstructorProperties): void
}

export module CursorTracker {

    // Signal callback interfaces

    /**
     * Signal callback interface for `cursor-changed`
     */
    export interface CursorChangedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `position-invalidated`
     */
    export interface PositionInvalidatedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `visibility-changed`
     */
    export interface VisibilityChangedSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Meta-13.Meta.CursorTracker

        backend?: Backend | null
    }

}

export interface CursorTracker {

    // Own properties of Meta-13.Meta.CursorTracker

    readonly backend: Backend
    __gtype__: number

    // Own fields of Meta-13.Meta.CursorTracker

    parentInstance: GObject.Object

    // Owm methods of Meta-13.Meta.CursorTracker

    /**
     * Get the hotspot of the current cursor sprite.
     */
    getHot(): [ /* x */ number, /* y */ number ]
    /**
     * Get the current pointer position and state.
     */
    getPointer(): [ /* coords */ Graphene.Point, /* mods */ Clutter.ModifierType ]
    getPointerVisible(): boolean
    /**
     * Get the scale factor of the cursor sprite
     * @returns The scale factor of the cursor sprite
     */
    getScale(): number
    /**
     * Get the #CoglTexture of the cursor sprite
     * @returns the #CoglTexture of the cursor sprite
     */
    getSprite(): Cogl.Texture | null
    setPointerVisible(visible: boolean): void

    // Own signals of Meta-13.Meta.CursorTracker

    connect(sigName: "cursor-changed", callback: CursorTracker.CursorChangedSignalCallback): number
    on(sigName: "cursor-changed", callback: CursorTracker.CursorChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cursor-changed", callback: CursorTracker.CursorChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cursor-changed", callback: CursorTracker.CursorChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "cursor-changed", ...args: any[]): void
    connect(sigName: "position-invalidated", callback: CursorTracker.PositionInvalidatedSignalCallback): number
    on(sigName: "position-invalidated", callback: CursorTracker.PositionInvalidatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "position-invalidated", callback: CursorTracker.PositionInvalidatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "position-invalidated", callback: CursorTracker.PositionInvalidatedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "position-invalidated", ...args: any[]): void
    connect(sigName: "visibility-changed", callback: CursorTracker.VisibilityChangedSignalCallback): number
    on(sigName: "visibility-changed", callback: CursorTracker.VisibilityChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "visibility-changed", callback: CursorTracker.VisibilityChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "visibility-changed", callback: CursorTracker.VisibilityChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "visibility-changed", ...args: any[]): void

    // Class property signals of Meta-13.Meta.CursorTracker

    connect(sigName: "notify::backend", callback: (...args: any[]) => void): number
    on(sigName: "notify::backend", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::backend", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::backend", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::backend", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Mutter cursor tracking helper. Originally only tracking
 * the cursor image, now more of a "core pointer abstraction"
 * @class 
 */
export class CursorTracker extends GObject.Object {

    // Own properties of Meta-13.Meta.CursorTracker

    static name: string

    // Constructors of Meta-13.Meta.CursorTracker

    constructor(config?: CursorTracker.ConstructorProperties) 
    _init(config?: CursorTracker.ConstructorProperties): void
    /**
     * Retrieves the cursor tracker object for `display`.
     * @param display the #MetaDisplay
     * @returns the cursor tracker object for @display.
     */
    static getForDisplay(display: Display): CursorTracker
}

export module Display {

    // Signal callback interfaces

    /**
     * Signal callback interface for `accelerator-activated`
     */
    export interface AcceleratorActivatedSignalCallback {
        (object: number, p0: Clutter.InputDevice, p1: number): void
    }

    /**
     * Signal callback interface for `closing`
     */
    export interface ClosingSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `cursor-updated`
     */
    export interface CursorUpdatedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `gl-video-memory-purged`
     */
    export interface GlVideoMemoryPurgedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `grab-op-begin`
     */
    export interface GrabOpBeginSignalCallback {
        (object: Window, p0: GrabOp): void
    }

    /**
     * Signal callback interface for `grab-op-end`
     */
    export interface GrabOpEndSignalCallback {
        (object: Window, p0: GrabOp): void
    }

    /**
     * Signal callback interface for `in-fullscreen-changed`
     */
    export interface InFullscreenChangedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `init-xserver`
     */
    export interface InitXserverSignalCallback {
        (object: Gio.Task): boolean
    }

    /**
     * Signal callback interface for `modifiers-accelerator-activated`
     */
    export interface ModifiersAcceleratorActivatedSignalCallback {
        (): boolean
    }

    /**
     * Signal callback interface for `overlay-key`
     */
    export interface OverlayKeySignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `pad-mode-switch`
     */
    export interface PadModeSwitchSignalCallback {
        (object: Clutter.InputDevice, p0: number, p1: number): void
    }

    /**
     * Signal callback interface for `restacked`
     */
    export interface RestackedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `restart`
     */
    export interface RestartSignalCallback {
        (): boolean
    }

    /**
     * Signal callback interface for `show-osd`
     */
    export interface ShowOsdSignalCallback {
        (object: number, p0: string | null, p1: string | null): void
    }

    /**
     * Signal callback interface for `show-pad-osd`
     */
    export interface ShowPadOsdSignalCallback {
        (pad: Clutter.InputDevice, settings: Gio.Settings, layoutPath: string | null, editionMode: boolean, monitorIdx: number): Clutter.Actor | null
    }

    /**
     * Signal callback interface for `show-resize-popup`
     */
    export interface ShowResizePopupSignalCallback {
        (object: boolean, p0: Mtk.Rectangle, p1: number, p2: number): boolean
    }

    /**
     * Signal callback interface for `show-restart-message`
     */
    export interface ShowRestartMessageSignalCallback {
        (message: string | null): boolean
    }

    /**
     * Signal callback interface for `showing-desktop-changed`
     */
    export interface ShowingDesktopChangedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `window-created`
     */
    export interface WindowCreatedSignalCallback {
        (object: Window): void
    }

    /**
     * Signal callback interface for `window-demands-attention`
     */
    export interface WindowDemandsAttentionSignalCallback {
        (object: Window): void
    }

    /**
     * Signal callback interface for `window-entered-monitor`
     */
    export interface WindowEnteredMonitorSignalCallback {
        (object: number, p0: Window): void
    }

    /**
     * Signal callback interface for `window-left-monitor`
     */
    export interface WindowLeftMonitorSignalCallback {
        (object: number, p0: Window): void
    }

    /**
     * Signal callback interface for `window-marked-urgent`
     */
    export interface WindowMarkedUrgentSignalCallback {
        (object: Window): void
    }

    /**
     * Signal callback interface for `window-visibility-updated`
     */
    export interface WindowVisibilityUpdatedSignalCallback {
        (object: any | null, p0: any | null, p1: any | null): void
    }

    /**
     * Signal callback interface for `workareas-changed`
     */
    export interface WorkareasChangedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `x11-display-closing`
     */
    export interface X11DisplayClosingSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `x11-display-opened`
     */
    export interface X11DisplayOpenedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `x11-display-setup`
     */
    export interface X11DisplaySetupSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Display {

    // Own properties of Meta-13.Meta.Display

    readonly compositorModifiers: Clutter.ModifierType
    readonly focusWindow: Window
    __gtype__: number

    // Owm methods of Meta-13.Meta.Display

    /**
     * Add a keybinding at runtime. The key `name` in `schema` needs to be of
     * type %G_VARIANT_TYPE_STRING_ARRAY, with each string describing a
     * keybinding in the form of "&lt;Control&gt;a" or "&lt;Shift&gt;&lt;Alt&gt;F1". The parser
     * is fairly liberal and allows lower or upper case, and also abbreviations
     * such as "&lt;Ctl&gt;" and "&lt;Ctrl&gt;". If the key is set to the empty list or a
     * list with a single element of either "" or "disabled", the keybinding is
     * disabled.
     * 
     * Use meta_display_remove_keybinding() to remove the binding.
     * @param name the binding's name
     * @param settings the #GSettings object where `name` is stored
     * @param flags flags to specify binding details
     * @param handler function to run when the keybinding is invoked
     * @returns the corresponding keybinding action if the keybinding was          added successfully, otherwise %META_KEYBINDING_ACTION_NONE
     */
    addKeybinding(name: string, settings: Gio.Settings, flags: KeyBindingFlags, handler: KeyHandlerFunc): number
    /**
     * Sets the mouse-mode flag to %FALSE, which means that motion events are
     * no longer ignored in mouse or sloppy focus.
     * This is an internal function. It should be used only for reimplementing
     * keybindings, and only in a manner compatible with core code.
     */
    clearMouseMode(): void
    close(timestamp: number): void
    focusDefaultWindow(timestamp: number): void
    freezeKeyboard(timestamp: number): void
    getCompositor(): Compositor
    getCompositorModifiers(): Clutter.ModifierType
    getContext(): Context
    /**
     * Gets the index of the monitor that currently has the mouse pointer.
     * @returns a monitor index
     */
    getCurrentMonitor(): number
    getCurrentTime(): number
    getCurrentTimeRoundtrip(): number
    /**
     * Get our best guess as to the "currently" focused window (that is,
     * the window that we expect will be focused at the point when the X
     * server processes our next request).
     * @returns The current focus window
     */
    getFocusWindow(): Window
    /**
     * Get the keybinding action bound to `keycode`. Builtin keybindings
     * have a fixed associated #MetaKeyBindingAction, for bindings added
     * dynamically the function will return the keybinding action
     * meta_display_add_keybinding() returns on registration.
     * @param keycode Raw keycode
     * @param mask Event mask
     * @returns The action that should be taken for the given key, or %META_KEYBINDING_ACTION_NONE.
     */
    getKeybindingAction(keycode: number, mask: number): number
    getLastUserTime(): number
    /**
     * Stores the location and size of the indicated `monitor` in `geometry`.
     * @param monitor the monitor number
     */
    getMonitorGeometry(monitor: number): /* geometry */ Mtk.Rectangle
    /**
     * Determines whether there is a fullscreen window obscuring the specified
     * monitor. If there is a fullscreen window, the desktop environment will
     * typically hide any controls that might obscure the fullscreen window.
     * 
     * You can get notification when this changes by connecting to
     * MetaDisplay::in-fullscreen-changed.
     * @param monitor the monitor number
     * @returns %TRUE if there is a fullscreen window covering the specified monitor.
     */
    getMonitorInFullscreen(monitor: number): boolean
    getMonitorIndexForRect(rect: Mtk.Rectangle): number
    getMonitorNeighborIndex(whichMonitor: number, dir: DisplayDirection): number
    /**
     * Gets the monitor scaling value for the given `monitor`.
     * @param monitor the monitor number
     * @returns the monitor scaling value
     */
    getMonitorScale(monitor: number): number
    /**
     * Gets the number of monitors that are joined together to form `display`.
     * @returns the number of monitors
     */
    getNMonitors(): number
    getPadButtonLabel(pad: Clutter.InputDevice, buttonNumber: number): string | null
    getPadFeatureLabel(pad: Clutter.InputDevice, feature: PadFeatureType, direction: PadDirection, featureNumber: number): string | null
    /**
     * Gets the index of the primary monitor on this `display`.
     * @returns a monitor index
     */
    getPrimaryMonitor(): number
    getSelection(): Selection
    /**
     * Retrieve the size of the display.
     */
    getSize(): [ /* width */ number, /* height */ number ]
    getSoundPlayer(): SoundPlayer
    /**
     * Determine the active window that should be displayed for Alt-TAB.
     * @param type type of tab list
     * @param workspace origin workspace
     * @returns Current window
     */
    getTabCurrent(type: TabList, workspace: Workspace): Window
    /**
     * Determine the list of windows that should be displayed for Alt-TAB
     * functionality.  The windows are returned in most recently used order.
     * If `workspace` is not %NULL, the list only contains windows that are on
     * `workspace` or have the demands-attention hint set; otherwise it contains
     * all windows.
     * @param type type of tab list
     * @param workspace origin workspace
     * @returns List of windows
     */
    getTabList(type: TabList, workspace: Workspace | null): Window[]
    /**
     * Determine the next window that should be displayed for Alt-TAB
     * functionality.
     * @param type type of tab list
     * @param workspace origin workspace
     * @param window starting window
     * @param backward If %TRUE, look for the previous window.
     * @returns Next window
     */
    getTabNext(type: TabList, workspace: Workspace, window: Window | null, backward: boolean): Window
    getWorkspaceManager(): WorkspaceManager
    grabAccelerator(accelerator: string, flags: KeyBindingFlags): number
    /**
     * Returns %TRUE if there is an ongoing grab operation.
     * @returns Whether there is an active display grab operation.
     */
    isGrabbed(): boolean
    /**
     * Tells whether the event sequence is the used for pointer emulation
     * and single-touch interaction.
     * @param sequence a #ClutterEventSequence
     * @returns #TRUE if the sequence emulates pointer behavior
     */
    isPointerEmulatingSequence(sequence: Clutter.EventSequence | null): boolean
    /**
     * List all windows, including override-redirect ones. The windows are
     * in no particular order.
     * @returns List of windows
     */
    listAllWindows(): Window[]
    /**
     * Remove keybinding `name;` the function will fail if `name` is not a known
     * keybinding or has not been added with meta_display_add_keybinding().
     * @param name name of the keybinding to remove
     * @returns %TRUE if the binding has been removed successfully,          otherwise %FALSE
     */
    removeKeybinding(name: string): boolean
    requestPadOsd(pad: Clutter.InputDevice, editionMode: boolean): void
    setCursor(cursor: Cursor): void
    setInputFocus(window: Window, focusFrame: boolean, timestamp: number): void
    /**
     * Sorts a set of windows according to their current stacking order. If windows
     * from multiple screens are present in the set of input windows, then all the
     * windows on screen 0 are sorted below all the windows on screen 1, and so forth.
     * Since the stacking order of override-redirect windows isn't controlled by
     * Metacity, if override-redirect windows are in the input, the result may not
     * correspond to the actual stacking order in the X server.
     * 
     * An example of using this would be to sort the list of transient dialogs for a
     * window into their current stacking order.
     * @param windows Set of windows
     * @returns Input windows sorted by stacking order, from lowest to highest
     */
    sortWindowsByStacking(windows: Window[]): Window[]
    supportsExtendedBarriers(): boolean
    unfreezeKeyboard(timestamp: number): void
    ungrabAccelerator(actionId: number): boolean
    ungrabKeyboard(timestamp: number): void
    unsetInputFocus(timestamp: number): void
    /**
     * Xserver time can wraparound, thus comparing two timestamps needs to take
     * this into account. If no wraparound has occurred, this is equivalent to
     *   time1 < time2
     * Otherwise, we need to account for the fact that wraparound can occur
     * and the fact that a timestamp of 0 must be special-cased since it
     * means "older than anything else".
     * 
     * Note that this is NOT an equivalent for time1 <= time2; if that's what
     * you need then you'll need to swap the order of the arguments and negate
     * the result.
     * @param time1 An event timestamp
     * @param time2 An event timestamp
     */
    xserverTimeIsBefore(time1: number, time2: number): boolean

    // Own signals of Meta-13.Meta.Display

    connect(sigName: "accelerator-activated", callback: Display.AcceleratorActivatedSignalCallback): number
    on(sigName: "accelerator-activated", callback: Display.AcceleratorActivatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "accelerator-activated", callback: Display.AcceleratorActivatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "accelerator-activated", callback: Display.AcceleratorActivatedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "accelerator-activated", p0: Clutter.InputDevice, p1: number, ...args: any[]): void
    connect(sigName: "closing", callback: Display.ClosingSignalCallback): number
    on(sigName: "closing", callback: Display.ClosingSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "closing", callback: Display.ClosingSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "closing", callback: Display.ClosingSignalCallback): NodeJS.EventEmitter
    emit(sigName: "closing", ...args: any[]): void
    connect(sigName: "cursor-updated", callback: Display.CursorUpdatedSignalCallback): number
    on(sigName: "cursor-updated", callback: Display.CursorUpdatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "cursor-updated", callback: Display.CursorUpdatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "cursor-updated", callback: Display.CursorUpdatedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "cursor-updated", ...args: any[]): void
    connect(sigName: "gl-video-memory-purged", callback: Display.GlVideoMemoryPurgedSignalCallback): number
    on(sigName: "gl-video-memory-purged", callback: Display.GlVideoMemoryPurgedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "gl-video-memory-purged", callback: Display.GlVideoMemoryPurgedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "gl-video-memory-purged", callback: Display.GlVideoMemoryPurgedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "gl-video-memory-purged", ...args: any[]): void
    connect(sigName: "grab-op-begin", callback: Display.GrabOpBeginSignalCallback): number
    on(sigName: "grab-op-begin", callback: Display.GrabOpBeginSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "grab-op-begin", callback: Display.GrabOpBeginSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "grab-op-begin", callback: Display.GrabOpBeginSignalCallback): NodeJS.EventEmitter
    emit(sigName: "grab-op-begin", p0: GrabOp, ...args: any[]): void
    connect(sigName: "grab-op-end", callback: Display.GrabOpEndSignalCallback): number
    on(sigName: "grab-op-end", callback: Display.GrabOpEndSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "grab-op-end", callback: Display.GrabOpEndSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "grab-op-end", callback: Display.GrabOpEndSignalCallback): NodeJS.EventEmitter
    emit(sigName: "grab-op-end", p0: GrabOp, ...args: any[]): void
    connect(sigName: "in-fullscreen-changed", callback: Display.InFullscreenChangedSignalCallback): number
    on(sigName: "in-fullscreen-changed", callback: Display.InFullscreenChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "in-fullscreen-changed", callback: Display.InFullscreenChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "in-fullscreen-changed", callback: Display.InFullscreenChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "in-fullscreen-changed", ...args: any[]): void
    connect(sigName: "init-xserver", callback: Display.InitXserverSignalCallback): number
    on(sigName: "init-xserver", callback: Display.InitXserverSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "init-xserver", callback: Display.InitXserverSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "init-xserver", callback: Display.InitXserverSignalCallback): NodeJS.EventEmitter
    emit(sigName: "init-xserver", ...args: any[]): void
    connect(sigName: "modifiers-accelerator-activated", callback: Display.ModifiersAcceleratorActivatedSignalCallback): number
    on(sigName: "modifiers-accelerator-activated", callback: Display.ModifiersAcceleratorActivatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "modifiers-accelerator-activated", callback: Display.ModifiersAcceleratorActivatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "modifiers-accelerator-activated", callback: Display.ModifiersAcceleratorActivatedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "modifiers-accelerator-activated", ...args: any[]): void
    connect(sigName: "overlay-key", callback: Display.OverlayKeySignalCallback): number
    on(sigName: "overlay-key", callback: Display.OverlayKeySignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "overlay-key", callback: Display.OverlayKeySignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "overlay-key", callback: Display.OverlayKeySignalCallback): NodeJS.EventEmitter
    emit(sigName: "overlay-key", ...args: any[]): void
    connect(sigName: "pad-mode-switch", callback: Display.PadModeSwitchSignalCallback): number
    on(sigName: "pad-mode-switch", callback: Display.PadModeSwitchSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "pad-mode-switch", callback: Display.PadModeSwitchSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "pad-mode-switch", callback: Display.PadModeSwitchSignalCallback): NodeJS.EventEmitter
    emit(sigName: "pad-mode-switch", p0: number, p1: number, ...args: any[]): void
    connect(sigName: "restacked", callback: Display.RestackedSignalCallback): number
    on(sigName: "restacked", callback: Display.RestackedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "restacked", callback: Display.RestackedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "restacked", callback: Display.RestackedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "restacked", ...args: any[]): void
    connect(sigName: "restart", callback: Display.RestartSignalCallback): number
    on(sigName: "restart", callback: Display.RestartSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "restart", callback: Display.RestartSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "restart", callback: Display.RestartSignalCallback): NodeJS.EventEmitter
    emit(sigName: "restart", ...args: any[]): void
    connect(sigName: "show-osd", callback: Display.ShowOsdSignalCallback): number
    on(sigName: "show-osd", callback: Display.ShowOsdSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "show-osd", callback: Display.ShowOsdSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "show-osd", callback: Display.ShowOsdSignalCallback): NodeJS.EventEmitter
    emit(sigName: "show-osd", p0: string | null, p1: string | null, ...args: any[]): void
    connect(sigName: "show-pad-osd", callback: Display.ShowPadOsdSignalCallback): number
    on(sigName: "show-pad-osd", callback: Display.ShowPadOsdSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "show-pad-osd", callback: Display.ShowPadOsdSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "show-pad-osd", callback: Display.ShowPadOsdSignalCallback): NodeJS.EventEmitter
    emit(sigName: "show-pad-osd", settings: Gio.Settings, layoutPath: string | null, editionMode: boolean, monitorIdx: number, ...args: any[]): void
    connect(sigName: "show-resize-popup", callback: Display.ShowResizePopupSignalCallback): number
    on(sigName: "show-resize-popup", callback: Display.ShowResizePopupSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "show-resize-popup", callback: Display.ShowResizePopupSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "show-resize-popup", callback: Display.ShowResizePopupSignalCallback): NodeJS.EventEmitter
    emit(sigName: "show-resize-popup", p0: Mtk.Rectangle, p1: number, p2: number, ...args: any[]): void
    connect(sigName: "show-restart-message", callback: Display.ShowRestartMessageSignalCallback): number
    on(sigName: "show-restart-message", callback: Display.ShowRestartMessageSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "show-restart-message", callback: Display.ShowRestartMessageSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "show-restart-message", callback: Display.ShowRestartMessageSignalCallback): NodeJS.EventEmitter
    emit(sigName: "show-restart-message", ...args: any[]): void
    connect(sigName: "showing-desktop-changed", callback: Display.ShowingDesktopChangedSignalCallback): number
    on(sigName: "showing-desktop-changed", callback: Display.ShowingDesktopChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "showing-desktop-changed", callback: Display.ShowingDesktopChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "showing-desktop-changed", callback: Display.ShowingDesktopChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "showing-desktop-changed", ...args: any[]): void
    connect(sigName: "window-created", callback: Display.WindowCreatedSignalCallback): number
    on(sigName: "window-created", callback: Display.WindowCreatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "window-created", callback: Display.WindowCreatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "window-created", callback: Display.WindowCreatedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "window-created", ...args: any[]): void
    connect(sigName: "window-demands-attention", callback: Display.WindowDemandsAttentionSignalCallback): number
    on(sigName: "window-demands-attention", callback: Display.WindowDemandsAttentionSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "window-demands-attention", callback: Display.WindowDemandsAttentionSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "window-demands-attention", callback: Display.WindowDemandsAttentionSignalCallback): NodeJS.EventEmitter
    emit(sigName: "window-demands-attention", ...args: any[]): void
    connect(sigName: "window-entered-monitor", callback: Display.WindowEnteredMonitorSignalCallback): number
    on(sigName: "window-entered-monitor", callback: Display.WindowEnteredMonitorSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "window-entered-monitor", callback: Display.WindowEnteredMonitorSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "window-entered-monitor", callback: Display.WindowEnteredMonitorSignalCallback): NodeJS.EventEmitter
    emit(sigName: "window-entered-monitor", p0: Window, ...args: any[]): void
    connect(sigName: "window-left-monitor", callback: Display.WindowLeftMonitorSignalCallback): number
    on(sigName: "window-left-monitor", callback: Display.WindowLeftMonitorSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "window-left-monitor", callback: Display.WindowLeftMonitorSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "window-left-monitor", callback: Display.WindowLeftMonitorSignalCallback): NodeJS.EventEmitter
    emit(sigName: "window-left-monitor", p0: Window, ...args: any[]): void
    connect(sigName: "window-marked-urgent", callback: Display.WindowMarkedUrgentSignalCallback): number
    on(sigName: "window-marked-urgent", callback: Display.WindowMarkedUrgentSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "window-marked-urgent", callback: Display.WindowMarkedUrgentSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "window-marked-urgent", callback: Display.WindowMarkedUrgentSignalCallback): NodeJS.EventEmitter
    emit(sigName: "window-marked-urgent", ...args: any[]): void
    connect(sigName: "window-visibility-updated", callback: Display.WindowVisibilityUpdatedSignalCallback): number
    on(sigName: "window-visibility-updated", callback: Display.WindowVisibilityUpdatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "window-visibility-updated", callback: Display.WindowVisibilityUpdatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "window-visibility-updated", callback: Display.WindowVisibilityUpdatedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "window-visibility-updated", p0: any | null, p1: any | null, ...args: any[]): void
    connect(sigName: "workareas-changed", callback: Display.WorkareasChangedSignalCallback): number
    on(sigName: "workareas-changed", callback: Display.WorkareasChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "workareas-changed", callback: Display.WorkareasChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "workareas-changed", callback: Display.WorkareasChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "workareas-changed", ...args: any[]): void
    connect(sigName: "x11-display-closing", callback: Display.X11DisplayClosingSignalCallback): number
    on(sigName: "x11-display-closing", callback: Display.X11DisplayClosingSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "x11-display-closing", callback: Display.X11DisplayClosingSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "x11-display-closing", callback: Display.X11DisplayClosingSignalCallback): NodeJS.EventEmitter
    emit(sigName: "x11-display-closing", ...args: any[]): void
    connect(sigName: "x11-display-opened", callback: Display.X11DisplayOpenedSignalCallback): number
    on(sigName: "x11-display-opened", callback: Display.X11DisplayOpenedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "x11-display-opened", callback: Display.X11DisplayOpenedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "x11-display-opened", callback: Display.X11DisplayOpenedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "x11-display-opened", ...args: any[]): void
    connect(sigName: "x11-display-setup", callback: Display.X11DisplaySetupSignalCallback): number
    on(sigName: "x11-display-setup", callback: Display.X11DisplaySetupSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "x11-display-setup", callback: Display.X11DisplaySetupSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "x11-display-setup", callback: Display.X11DisplaySetupSignalCallback): NodeJS.EventEmitter
    emit(sigName: "x11-display-setup", ...args: any[]): void

    // Class property signals of Meta-13.Meta.Display

    connect(sigName: "notify::compositor-modifiers", callback: (...args: any[]) => void): number
    on(sigName: "notify::compositor-modifiers", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::compositor-modifiers", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::compositor-modifiers", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::compositor-modifiers", ...args: any[]): void
    connect(sigName: "notify::focus-window", callback: (...args: any[]) => void): number
    on(sigName: "notify::focus-window", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::focus-window", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::focus-window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::focus-window", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Mutter display representation
 * 
 * The display is represented as a #MetaDisplay struct.
 * @class 
 */
export class Display extends GObject.Object {

    // Own properties of Meta-13.Meta.Display

    static name: string

    // Constructors of Meta-13.Meta.Display

    constructor(config?: Display.ConstructorProperties) 
    _init(config?: Display.ConstructorProperties): void
}

export module Dnd {

    // Signal callback interfaces

    /**
     * Signal callback interface for `dnd-enter`
     */
    export interface DndEnterSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `dnd-leave`
     */
    export interface DndLeaveSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `dnd-position-change`
     */
    export interface DndPositionChangeSignalCallback {
        (object: number, p0: number): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Dnd {

    // Own properties of Meta-13.Meta.Dnd

    __gtype__: number

    // Own signals of Meta-13.Meta.Dnd

    connect(sigName: "dnd-enter", callback: Dnd.DndEnterSignalCallback): number
    on(sigName: "dnd-enter", callback: Dnd.DndEnterSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "dnd-enter", callback: Dnd.DndEnterSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "dnd-enter", callback: Dnd.DndEnterSignalCallback): NodeJS.EventEmitter
    emit(sigName: "dnd-enter", ...args: any[]): void
    connect(sigName: "dnd-leave", callback: Dnd.DndLeaveSignalCallback): number
    on(sigName: "dnd-leave", callback: Dnd.DndLeaveSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "dnd-leave", callback: Dnd.DndLeaveSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "dnd-leave", callback: Dnd.DndLeaveSignalCallback): NodeJS.EventEmitter
    emit(sigName: "dnd-leave", ...args: any[]): void
    connect(sigName: "dnd-position-change", callback: Dnd.DndPositionChangeSignalCallback): number
    on(sigName: "dnd-position-change", callback: Dnd.DndPositionChangeSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "dnd-position-change", callback: Dnd.DndPositionChangeSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "dnd-position-change", callback: Dnd.DndPositionChangeSignalCallback): NodeJS.EventEmitter
    emit(sigName: "dnd-position-change", p0: number, ...args: any[]): void

    // Class property signals of Meta-13.Meta.Dnd

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Dnd extends GObject.Object {

    // Own properties of Meta-13.Meta.Dnd

    static name: string

    // Constructors of Meta-13.Meta.Dnd

    constructor(config?: Dnd.ConstructorProperties) 
    _init(config?: Dnd.ConstructorProperties): void
}

export module IdleMonitor {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Meta-13.Meta.IdleMonitor

        /**
         * The device to listen to idletime on.
         */
        device?: Clutter.InputDevice | null
    }

}

export interface IdleMonitor {

    // Own properties of Meta-13.Meta.IdleMonitor

    /**
     * The device to listen to idletime on.
     */
    readonly device: Clutter.InputDevice
    __gtype__: number

    // Owm methods of Meta-13.Meta.IdleMonitor

    addIdleWatch(intervalMsec: number, callback: IdleMonitorWatchFunc | null): number
    addUserActiveWatch(callback: IdleMonitorWatchFunc | null): number
    getIdletime(): number
    /**
     * Removes an idle time watcher, previously added by
     * meta_idle_monitor_add_idle_watch() or
     * meta_idle_monitor_add_user_active_watch().
     * @param id A watch ID
     */
    removeWatch(id: number): void

    // Class property signals of Meta-13.Meta.IdleMonitor

    connect(sigName: "notify::device", callback: (...args: any[]) => void): number
    on(sigName: "notify::device", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::device", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::device", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Mutter idle counter (similar to X's IDLETIME)
 * @class 
 */
export class IdleMonitor extends GObject.Object {

    // Own properties of Meta-13.Meta.IdleMonitor

    static name: string

    // Constructors of Meta-13.Meta.IdleMonitor

    constructor(config?: IdleMonitor.ConstructorProperties) 
    _init(config?: IdleMonitor.ConstructorProperties): void
}

export module Laters {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Laters {

    // Own properties of Meta-13.Meta.Laters

    __gtype__: number

    // Owm methods of Meta-13.Meta.Laters

    /**
     * Sets up a callback  to be called at some later time. `when` determines the
     * particular later occasion at which it is called. This is much like g_idle_add(),
     * except that the functions interact properly with clutter event handling.
     * If a "later" function is added from a clutter event handler, and is supposed
     * to be run before the stage is redrawn, it will be run before that redraw
     * of the stage, not the next one.
     * @param when enumeration value determining the phase at which to run the callback
     * @param func callback to run later
     * @returns an integer ID (guaranteed to be non-zero) that can be used  to cancel the callback and prevent it from being run.
     */
    add(when: LaterType, func: GLib.SourceFunc): number
    /**
     * Removes a callback added with meta_later_add()
     * @param laterId the integer ID returned from meta_later_add()
     */
    remove(laterId: number): void

    // Class property signals of Meta-13.Meta.Laters

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Laters extends GObject.Object {

    // Own properties of Meta-13.Meta.Laters

    static name: string

    // Constructors of Meta-13.Meta.Laters

    constructor(config?: Laters.ConstructorProperties) 
    _init(config?: Laters.ConstructorProperties): void
}

export module LaunchContext {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.AppLaunchContext.ConstructorProperties {

        // Own constructor properties of Meta-13.Meta.LaunchContext

        display?: Display | null
        timestamp?: number | null
        workspace?: Workspace | null
    }

}

export interface LaunchContext {

    // Own properties of Meta-13.Meta.LaunchContext

    readonly display: Display
    timestamp: number
    workspace: Workspace
    __gtype__: number

    // Owm methods of Meta-13.Meta.LaunchContext

    setTimestamp(timestamp: number): void
    setWorkspace(workspace: Workspace): void

    // Class property signals of Meta-13.Meta.LaunchContext

    connect(sigName: "notify::display", callback: (...args: any[]) => void): number
    on(sigName: "notify::display", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::display", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::display", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::display", ...args: any[]): void
    connect(sigName: "notify::timestamp", callback: (...args: any[]) => void): number
    on(sigName: "notify::timestamp", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::timestamp", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::timestamp", ...args: any[]): void
    connect(sigName: "notify::workspace", callback: (...args: any[]) => void): number
    on(sigName: "notify::workspace", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::workspace", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::workspace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::workspace", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class LaunchContext extends Gio.AppLaunchContext {

    // Own properties of Meta-13.Meta.LaunchContext

    static name: string

    // Constructors of Meta-13.Meta.LaunchContext

    constructor(config?: LaunchContext.ConstructorProperties) 
    _init(config?: LaunchContext.ConstructorProperties): void
}

export module MonitorManager {

    // Signal callback interfaces

    /**
     * Signal callback interface for `confirm-display-change`
     */
    export interface ConfirmDisplayChangeSignalCallback {
        (): void
    }


    /**
     * Signal callback interface for `monitors-changed`
     */
    export interface MonitorsChangedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `monitors-changed-internal`
     */
    export interface MonitorsChangedInternalSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `power-save-mode-changed`
     */
    export interface PowerSaveModeChangedSignalCallback {
        (object: PowerSaveChangeReason): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Meta-13.Meta.MonitorManager

        backend?: Backend | null
        experimentalHdr?: string | null
    }

}

export interface MonitorManager {

    // Own properties of Meta-13.Meta.MonitorManager

    readonly backend: Backend
    experimentalHdr: string | null
    readonly hasBuiltinPanel: boolean
    readonly nightLightSupported: boolean
    readonly panelOrientationManaged: boolean
    __gtype__: number

    // Owm methods of Meta-13.Meta.MonitorManager

    canSwitchConfig(): boolean
    getDisplayConfigurationTimeout(): number
    /**
     * Returns whether the built-in display (i.e. a laptop panel) is turned on.
     */
    getIsBuiltinDisplayOn(): boolean
    getMonitorForConnector(connector: string): number
    getPanelOrientationManaged(): boolean
    getSwitchConfig(): MonitorSwitchConfigType
    switchConfig(configType: MonitorSwitchConfigType): void

    // Own signals of Meta-13.Meta.MonitorManager

    connect(sigName: "confirm-display-change", callback: MonitorManager.ConfirmDisplayChangeSignalCallback): number
    on(sigName: "confirm-display-change", callback: MonitorManager.ConfirmDisplayChangeSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "confirm-display-change", callback: MonitorManager.ConfirmDisplayChangeSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "confirm-display-change", callback: MonitorManager.ConfirmDisplayChangeSignalCallback): NodeJS.EventEmitter
    emit(sigName: "confirm-display-change", ...args: any[]): void
    connect(sigName: "monitor-privacy-screen-changed", callback: (...args: any[]) => void): number
    on(sigName: "monitor-privacy-screen-changed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "monitor-privacy-screen-changed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "monitor-privacy-screen-changed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "monitor-privacy-screen-changed", enabled: boolean, ...args: any[]): void
    connect(sigName: "monitors-changed", callback: MonitorManager.MonitorsChangedSignalCallback): number
    on(sigName: "monitors-changed", callback: MonitorManager.MonitorsChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "monitors-changed", callback: MonitorManager.MonitorsChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "monitors-changed", callback: MonitorManager.MonitorsChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "monitors-changed", ...args: any[]): void
    connect(sigName: "monitors-changed-internal", callback: MonitorManager.MonitorsChangedInternalSignalCallback): number
    on(sigName: "monitors-changed-internal", callback: MonitorManager.MonitorsChangedInternalSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "monitors-changed-internal", callback: MonitorManager.MonitorsChangedInternalSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "monitors-changed-internal", callback: MonitorManager.MonitorsChangedInternalSignalCallback): NodeJS.EventEmitter
    emit(sigName: "monitors-changed-internal", ...args: any[]): void
    connect(sigName: "power-save-mode-changed", callback: MonitorManager.PowerSaveModeChangedSignalCallback): number
    on(sigName: "power-save-mode-changed", callback: MonitorManager.PowerSaveModeChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "power-save-mode-changed", callback: MonitorManager.PowerSaveModeChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "power-save-mode-changed", callback: MonitorManager.PowerSaveModeChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "power-save-mode-changed", ...args: any[]): void

    // Class property signals of Meta-13.Meta.MonitorManager

    connect(sigName: "notify::backend", callback: (...args: any[]) => void): number
    on(sigName: "notify::backend", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::backend", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::backend", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::backend", ...args: any[]): void
    connect(sigName: "notify::experimental-hdr", callback: (...args: any[]) => void): number
    on(sigName: "notify::experimental-hdr", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::experimental-hdr", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::experimental-hdr", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::experimental-hdr", ...args: any[]): void
    connect(sigName: "notify::has-builtin-panel", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-builtin-panel", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-builtin-panel", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-builtin-panel", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-builtin-panel", ...args: any[]): void
    connect(sigName: "notify::night-light-supported", callback: (...args: any[]) => void): number
    on(sigName: "notify::night-light-supported", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::night-light-supported", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::night-light-supported", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::night-light-supported", ...args: any[]): void
    connect(sigName: "notify::panel-orientation-managed", callback: (...args: any[]) => void): number
    on(sigName: "notify::panel-orientation-managed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::panel-orientation-managed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::panel-orientation-managed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::panel-orientation-managed", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A manager for multiple monitors
 * 
 * #MetaMonitorManager is an abstract class which contains methods to handle
 * multiple monitors (both #MetaMonitor and #MetaLogicalMonitor) and GPU's
 * (#MetaGpu). Its functions include reading and/or changing the current
 * configuration and available capabiliies.
 * 
 * The #MetaMonitorManager also provides the "org.gnome.Mutter.DisplayConfig"
 * DBus service, so apps like GNOME Settings can use this functionality.
 * @class 
 */
export class MonitorManager extends GObject.Object {

    // Own properties of Meta-13.Meta.MonitorManager

    static name: string

    // Constructors of Meta-13.Meta.MonitorManager

    constructor(config?: MonitorManager.ConstructorProperties) 
    _init(config?: MonitorManager.ConstructorProperties): void
}

export module MultiTexture {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface MultiTexture {

    // Own properties of Meta-13.Meta.MultiTexture

    __gtype__: number

    // Owm methods of Meta-13.Meta.MultiTexture

    /**
     * Returns the #MetaMultiTextureFormat that is used by this texture.
     * @returns The texture format that is used by this #MetaMultiTexture.
     */
    getFormat(): MultiTextureFormat
    /**
     * Returns the height of the #MetaMultiTexture. Prefer this over calling
     * cogl_texture_get_height() on one of the textures, as that might give a
     * different size when dealing with subsampling.
     * @returns The height of the texture.
     */
    getHeight(): number
    /**
     * Returns the number of planes for this texture. Note that this is entirely
     * dependent on the #CoglPixelFormat that is used. For example, simple RGB
     * textures will have a single plane, while some more convoluted formats like
     * NV12 and YUV 4:4:4 can have 2 and 3 planes respectively.
     * @returns The number of planes in this #MetaMultiTexture.
     */
    getNPlanes(): number
    /**
     * Returns the n'th plane of the #MetaMultiTexture. Note that it's a programming
     * error to use with an index larger than meta_multi_texture_get_n_planes().
     * @param index the index of the plane
     * @returns The plane at the given @index.
     */
    getPlane(index: number): Cogl.Texture
    /**
     * Returns the width of the #MetaMultiTexture. Prefer this over calling
     * cogl_texture_get_width() on one of the textures, as that might give a
     * different size when dealing with subsampling.
     * @returns The width of the texture.
     */
    getWidth(): number
    /**
     * A small function that checks whether the given multi texture uses a "simple"
     * format, i.e. one that can be represented by a #CoglPixelFormat.
     * @returns Whether the texture format is #META_MULTI_TEXTURE_FORMAT_SIMPLE
     */
    isSimple(): boolean
    /**
     * Returns a string representation of `multi_texture,` useful for debugging
     * purposes.
     * @returns A string representation of @multi_texture. Use g_free() when done with it.
     */
    toString(): string | null

    // Class property signals of Meta-13.Meta.MultiTexture

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class MultiTexture extends GObject.Object {

    // Own properties of Meta-13.Meta.MultiTexture

    static name: string

    // Constructors of Meta-13.Meta.MultiTexture

    constructor(config?: MultiTexture.ConstructorProperties) 
    /**
     * Creates a #MetaMultiTexture with the given `format`. Each of the
     * #CoglTexture<!-- -->s represents a plane.
     * @constructor 
     * @param format The format of the #MetaMultiTexture
     * @param planes The actual planes of the texture
     * @param nPlanes The number of planes
     * @returns A new #MetaMultiTexture. Use g_object_unref() when you're done with it.
     */
    constructor(format: MultiTextureFormat, planes: Cogl.Texture, nPlanes: number) 
    /**
     * Creates a #MetaMultiTexture with the given `format`. Each of the
     * #CoglTexture<!-- -->s represents a plane.
     * @constructor 
     * @param format The format of the #MetaMultiTexture
     * @param planes The actual planes of the texture
     * @param nPlanes The number of planes
     * @returns A new #MetaMultiTexture. Use g_object_unref() when you're done with it.
     */
    static new(format: MultiTextureFormat, planes: Cogl.Texture, nPlanes: number): MultiTexture
    /**
     * Creates a #MetaMultiTexture for a "simple" texture, i.e. with only one
     * plane, in a format that can be represented using #CoglPixelFormat.
     * @constructor 
     * @param plane The single plane of the texture
     * @returns A new #MetaMultiTexture. Use g_object_unref() when you're done with it.
     */
    static newSimple(plane: Cogl.Texture): MultiTexture
    _init(config?: MultiTexture.ConstructorProperties): void
}

export module Plugin {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Plugin {

    // Own properties of Meta-13.Meta.Plugin

    __gtype__: number

    // Own fields of Meta-13.Meta.Plugin

    parentInstance: GObject.Object

    // Owm methods of Meta-13.Meta.Plugin

    completeDisplayChange(ok: boolean): void
    destroyCompleted(actor: WindowActor): void
    /**
     * Gets the #MetaDisplay corresponding to a plugin.
     * @returns the #MetaDisplay for the plugin
     */
    getDisplay(): Display
    getInfo(): PluginInfo
    mapCompleted(actor: WindowActor): void
    minimizeCompleted(actor: WindowActor): void
    sizeChangeCompleted(actor: WindowActor): void
    switchWorkspaceCompleted(): void
    unminimizeCompleted(actor: WindowActor): void

    // Own virtual methods of Meta-13.Meta.Plugin

    confirmDisplayChange(): void
    /**
     * Virtual function called when the window represented by `actor` is destroyed.
     * @virtual 
     * @param actor a #MetaWindowActor
     */
    destroy(actor: WindowActor): void
    hideTilePreview(): void
    /**
     * Virtual function called when handling each keybinding.
     * @virtual 
     * @param binding a #MetaKeyBinding
     * @returns %TRUE if the plugin handled the keybinding.
     */
    keybindingFilter(binding: KeyBinding): boolean
    /**
     * Virtual function called when the workspace-switching effect needs to be
     * killed prematurely.
     * @virtual 
     */
    killSwitchWorkspace(): void
    /**
     * Virtual function called when the effects on `actor` need to be killed
     * prematurely; the plugin must call the completed() callback as if the effect
     * terminated naturally.
     * @virtual 
     * @param actor a #MetaWindowActor
     */
    killWindowEffects(actor: WindowActor): void
    /**
     * Virtual function called when the user triggered the "locate-pointer"
     * mechanism.
     * The common way to implement this function is to show some animation
     * on screen to draw user attention on the pointer location.
     * @virtual 
     */
    locatePointer(): void
    /**
     * Virtual function called when the window represented by `actor` is mapped.
     * @virtual 
     * @param actor a #MetaWindowActor
     */
    map(actor: WindowActor): void
    /**
     * Virtual function called when the window represented by `actor` is minimized.
     * @virtual 
     * @param actor a #MetaWindowActor
     */
    minimize(actor: WindowActor): void
    /**
     * Virtual function that returns information about the #MetaPlugin.
     * @virtual 
     * @returns a #MetaPluginInfo.
     */
    pluginInfo(): PluginInfo
    showTilePreview(window: Window, tileRect: Mtk.Rectangle, tileMonitorNumber: number): void
    showWindowMenu(window: Window, menu: WindowMenuType, x: number, y: number): void
    showWindowMenuForRect(window: Window, menu: WindowMenuType, rect: Mtk.Rectangle): void
    sizeChange(actor: WindowActor, whichChange: SizeChange, oldFrameRect: Mtk.Rectangle, oldBufferRect: Mtk.Rectangle): void
    sizeChanged(actor: WindowActor): void
    /**
     * Virtual function called when the compositor starts managing a screen
     * @virtual 
     */
    start(): void
    /**
     * Virtual function called when the window represented by `actor` is destroyed.
     * @virtual 
     * @param from origin workspace
     * @param to destination workspace
     * @param direction a #MetaMotionDirection
     */
    switchWorkspace(from: number, to: number, direction: MotionDirection): void
    /**
     * Virtual function called when the window represented by `actor` is unminimized.
     * @virtual 
     * @param actor a #MetaWindowActor
     */
    unminimize(actor: WindowActor): void
    /**
     * Virtual function called when handling each event.
     * @virtual 
     * @param event 
     * @returns %TRUE if the plugin handled the event type (i.e., if the return value is %FALSE, there will be no subsequent call to the manager completed() callback, and the compositor must ensure that any appropriate post-effect cleanup is carried out.
     */
    xeventFilter(event: xlib.XEvent): boolean

    // Class property signals of Meta-13.Meta.Plugin

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Entry point for plugins
 * @class 
 */
export class Plugin extends GObject.Object {

    // Own properties of Meta-13.Meta.Plugin

    static name: string

    // Constructors of Meta-13.Meta.Plugin

    constructor(config?: Plugin.ConstructorProperties) 
    _init(config?: Plugin.ConstructorProperties): void
    static managerSetPluginType(gtype: GObject.GType): void
}

export module RemoteAccessController {

    // Signal callback interfaces

    /**
     * Signal callback interface for `new-handle`
     */
    export interface NewHandleSignalCallback {
        (object: RemoteAccessHandle): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface RemoteAccessController {

    // Own properties of Meta-13.Meta.RemoteAccessController

    __gtype__: number

    // Owm methods of Meta-13.Meta.RemoteAccessController

    /**
     * Inhibits remote access sessions from being created and running. Any active
     * remote access session will be terminated.
     */
    inhibitRemoteAccess(): void
    /**
     * Uninhibits remote access sessions from being created and running. If this was
     * the last inhibitation that was inhibited, new remote access sessions can now
     * be created.
     */
    uninhibitRemoteAccess(): void

    // Own signals of Meta-13.Meta.RemoteAccessController

    connect(sigName: "new-handle", callback: RemoteAccessController.NewHandleSignalCallback): number
    on(sigName: "new-handle", callback: RemoteAccessController.NewHandleSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "new-handle", callback: RemoteAccessController.NewHandleSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "new-handle", callback: RemoteAccessController.NewHandleSignalCallback): NodeJS.EventEmitter
    emit(sigName: "new-handle", ...args: any[]): void

    // Class property signals of Meta-13.Meta.RemoteAccessController

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class RemoteAccessController extends GObject.Object {

    // Own properties of Meta-13.Meta.RemoteAccessController

    static name: string

    // Constructors of Meta-13.Meta.RemoteAccessController

    constructor(config?: RemoteAccessController.ConstructorProperties) 
    _init(config?: RemoteAccessController.ConstructorProperties): void
}

export module RemoteAccessHandle {

    // Signal callback interfaces

    /**
     * Signal callback interface for `stopped`
     */
    export interface StoppedSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Meta-13.Meta.RemoteAccessHandle

        isRecording?: boolean | null
    }

}

export interface RemoteAccessHandle {

    // Own properties of Meta-13.Meta.RemoteAccessHandle

    readonly isRecording: boolean
    __gtype__: number

    // Own fields of Meta-13.Meta.RemoteAccessHandle

    parentInstance: GObject.Object

    // Owm methods of Meta-13.Meta.RemoteAccessHandle

    getDisableAnimations(): boolean
    // Has conflict: stop(): void

    // Own virtual methods of Meta-13.Meta.RemoteAccessHandle

    /**
     * Stop the associated remote access session.
     * @virtual 
     */
    stop(): void

    // Own signals of Meta-13.Meta.RemoteAccessHandle

    connect(sigName: "stopped", callback: RemoteAccessHandle.StoppedSignalCallback): number
    on(sigName: "stopped", callback: RemoteAccessHandle.StoppedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "stopped", callback: RemoteAccessHandle.StoppedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "stopped", callback: RemoteAccessHandle.StoppedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "stopped", ...args: any[]): void

    // Class property signals of Meta-13.Meta.RemoteAccessHandle

    connect(sigName: "notify::is-recording", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-recording", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-recording", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-recording", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-recording", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class RemoteAccessHandle extends GObject.Object {

    // Own properties of Meta-13.Meta.RemoteAccessHandle

    static name: string

    // Constructors of Meta-13.Meta.RemoteAccessHandle

    constructor(config?: RemoteAccessHandle.ConstructorProperties) 
    _init(config?: RemoteAccessHandle.ConstructorProperties): void
}

export module Selection {

    // Signal callback interfaces

    /**
     * Signal callback interface for `owner-changed`
     */
    export interface OwnerChangedSignalCallback {
        (object: number, p0: SelectionSource): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Selection {

    // Own properties of Meta-13.Meta.Selection

    __gtype__: number

    // Owm methods of Meta-13.Meta.Selection

    /**
     * Returns the list of supported mimetypes for the given selection type.
     * @param selectionType Selection to query
     * @returns The supported mimetypes
     */
    getMimetypes(selectionType: SelectionType): string[]
    /**
     * Sets `owner` as the owner of the selection given by `selection_type,`
     * unsets any previous owner there was.
     * @param selectionType Selection type
     * @param owner New selection owner
     */
    setOwner(selectionType: SelectionType, owner: SelectionSource): void
    /**
     * Requests a transfer of `mimetype` on the selection given by
     * `selection_type`.
     * @param selectionType Selection type
     * @param mimetype Mimetype to transfer
     * @param size Maximum size to transfer, -1 for unlimited
     * @param output Output stream to write contents to
     * @param cancellable Cancellable
     * @param callback User callback
     */
    transferAsync(selectionType: SelectionType, mimetype: string, size: number, output: Gio.OutputStream, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the transfer of a queried mimetype.
     * @param result The async result
     * @returns #TRUE if the transfer was successful.
     */
    transferFinish(result: Gio.AsyncResult): boolean
    /**
     * Unsets `owner` as the owner the selection given by `selection_type`. If
     * `owner` does not own the selection, nothing is done.
     * @param selectionType Selection type
     * @param owner Owner to unset
     */
    unsetOwner(selectionType: SelectionType, owner: SelectionSource): void

    // Own signals of Meta-13.Meta.Selection

    connect(sigName: "owner-changed", callback: Selection.OwnerChangedSignalCallback): number
    on(sigName: "owner-changed", callback: Selection.OwnerChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "owner-changed", callback: Selection.OwnerChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "owner-changed", callback: Selection.OwnerChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "owner-changed", p0: SelectionSource, ...args: any[]): void

    // Class property signals of Meta-13.Meta.Selection

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Selection extends GObject.Object {

    // Own properties of Meta-13.Meta.Selection

    static name: string

    // Constructors of Meta-13.Meta.Selection

    constructor(config?: Selection.ConstructorProperties) 
    constructor(display: Display) 
    static new(display: Display): Selection
    _init(config?: Selection.ConstructorProperties): void
}

export module SelectionSource {

    // Signal callback interfaces

    /**
     * Signal callback interface for `activated`
     */
    export interface ActivatedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `deactivated`
     */
    export interface DeactivatedSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface SelectionSource {

    // Own properties of Meta-13.Meta.SelectionSource

    __gtype__: number

    // Own fields of Meta-13.Meta.SelectionSource

    parentInstance: GObject.Object

    // Owm methods of Meta-13.Meta.SelectionSource

    // Has conflict: getMimetypes(): string[]
    /**
     * Returns #TRUE if the source is active on a selection.
     * @returns #TRUE if the source owns a selection.
     */
    isActive(): boolean
    // Has conflict: readAsync(mimetype: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: readFinish(result: Gio.AsyncResult): Gio.InputStream

    // Own virtual methods of Meta-13.Meta.SelectionSource

    activated(): void
    deactivated(): void
    /**
     * Returns the list of supported mimetypes.
     * @virtual 
     * @returns The supported mimetypes
     */
    getMimetypes(): string[]
    readAsync(mimetype: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes a read from the selection source.
     * @virtual 
     * @param result The async result
     * @returns The resulting #GInputStream
     */
    readFinish(result: Gio.AsyncResult): Gio.InputStream

    // Own signals of Meta-13.Meta.SelectionSource

    connect(sigName: "activated", callback: SelectionSource.ActivatedSignalCallback): number
    on(sigName: "activated", callback: SelectionSource.ActivatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "activated", callback: SelectionSource.ActivatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "activated", callback: SelectionSource.ActivatedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "activated", ...args: any[]): void
    connect(sigName: "deactivated", callback: SelectionSource.DeactivatedSignalCallback): number
    on(sigName: "deactivated", callback: SelectionSource.DeactivatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "deactivated", callback: SelectionSource.DeactivatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "deactivated", callback: SelectionSource.DeactivatedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "deactivated", ...args: any[]): void

    // Class property signals of Meta-13.Meta.SelectionSource

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SelectionSource extends GObject.Object {

    // Own properties of Meta-13.Meta.SelectionSource

    static name: string

    // Constructors of Meta-13.Meta.SelectionSource

    constructor(config?: SelectionSource.ConstructorProperties) 
    _init(config?: SelectionSource.ConstructorProperties): void
}

export module SelectionSourceMemory {

    // Constructor properties interface

    export interface ConstructorProperties extends SelectionSource.ConstructorProperties {
    }

}

export interface SelectionSourceMemory {

    // Own properties of Meta-13.Meta.SelectionSourceMemory

    __gtype__: number

    // Class property signals of Meta-13.Meta.SelectionSourceMemory

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SelectionSourceMemory extends SelectionSource {

    // Own properties of Meta-13.Meta.SelectionSourceMemory

    static name: string

    // Constructors of Meta-13.Meta.SelectionSourceMemory

    constructor(config?: SelectionSourceMemory.ConstructorProperties) 
    constructor(mimetype: string, content: any) 
    static new(mimetype: string, content: any): SelectionSourceMemory
    _init(config?: SelectionSourceMemory.ConstructorProperties): void
}

export module ShadowFactory {

    // Signal callback interfaces

    /**
     * Signal callback interface for `changed`
     */
    export interface ChangedSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface ShadowFactory {

    // Own properties of Meta-13.Meta.ShadowFactory

    __gtype__: number

    // Owm methods of Meta-13.Meta.ShadowFactory

    /**
     * Gets the shadow parameters for a particular class of shadows
     * for either the focused or unfocused state. If the class name
     * does not name an existing class, default values will be returned
     * without printing an error.
     * @param className name of the class of shadow to get the params for
     * @param focused whether the shadow is for a focused window
     */
    getParams(className: string, focused: boolean): /* params */ ShadowParams
    /**
     * Gets the appropriate shadow object for drawing shadows for the
     * specified window shape. The region that we are shadowing is specified
     * as a combination of a size-invariant extracted shape and the size.
     * In some cases, the same shadow object can be shared between sizes;
     * in other cases a different shadow object is used for each size.
     * @param shape the size-invariant shape of the window's region
     * @param width the actual width of the window's region
     * @param height the actual height of the window's region
     * @param className name of the class of window shadows
     * @param focused whether the shadow is for a focused window
     * @returns a newly referenced #MetaShadow; unref with  meta_shadow_unref()
     */
    getShadow(shape: WindowShape, width: number, height: number, className: string, focused: boolean): Shadow
    /**
     * Updates the shadow parameters for a particular class of shadows
     * for either the focused or unfocused state. If the class name
     * does not name an existing class, a new class will be created
     * (the other focus state for that class will have default values
     * assigned to it.)
     * @param className name of the class of shadow to set the params for.  the default shadow classes are the names of the different  theme frame types (normal, dialog, modal_dialog, utility,  border, menu, attached) and in addition, popup-menu  and dropdown-menu.
     * @param focused whether the shadow is for a focused window
     * @param params new parameter values
     */
    setParams(className: string, focused: boolean, params: ShadowParams): void

    // Own signals of Meta-13.Meta.ShadowFactory

    connect(sigName: "changed", callback: ShadowFactory.ChangedSignalCallback): number
    on(sigName: "changed", callback: ShadowFactory.ChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: ShadowFactory.ChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: ShadowFactory.ChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "changed", ...args: any[]): void

    // Class property signals of Meta-13.Meta.ShadowFactory

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Create window shadows.
 * 
 * It caches shadows internally so that multiple shadows created for
 * the same shape with the same radius will share the same [struct`Meta`.Shadow].
 * @class 
 */
export class ShadowFactory extends GObject.Object {

    // Own properties of Meta-13.Meta.ShadowFactory

    static name: string

    // Constructors of Meta-13.Meta.ShadowFactory

    constructor(config?: ShadowFactory.ConstructorProperties) 
    constructor() 
    static new(): ShadowFactory
    _init(config?: ShadowFactory.ConstructorProperties): void
    static getDefault(): ShadowFactory
}

export module ShapedTexture {

    // Signal callback interfaces

    /**
     * Signal callback interface for `size-changed`
     */
    export interface SizeChangedSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Clutter.Content.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface ShapedTexture extends Clutter.Content {

    // Own properties of Meta-13.Meta.ShapedTexture

    __gtype__: number

    // Owm methods of Meta-13.Meta.ShapedTexture

    /**
     * Flattens the two layers of the shaped texture into one ARGB32
     * image by alpha blending the two images, and returns the flattened
     * image.
     * @param clip A clipping rectangle, to help prevent extra processing. In the case that the clipping rectangle is partially or fully outside the bounds of the texture, the rectangle will be clipped.
     * @returns a new cairo surface to be freed with cairo_surface_destroy().
     */
    getImage(clip: Mtk.Rectangle | null): cairo.Surface | null
    getTexture(): MultiTexture
    setCreateMipmaps(createMipmaps: boolean): void
    setMaskTexture(maskTexture: Cogl.Texture): void

    // Own signals of Meta-13.Meta.ShapedTexture

    connect(sigName: "size-changed", callback: ShapedTexture.SizeChangedSignalCallback): number
    on(sigName: "size-changed", callback: ShapedTexture.SizeChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "size-changed", callback: ShapedTexture.SizeChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "size-changed", callback: ShapedTexture.SizeChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "size-changed", ...args: any[]): void

    // Class property signals of Meta-13.Meta.ShapedTexture

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A ClutterContent which draws a shaped texture
 * 
 * A MetaShapedTexture draws a #CoglTexture (often provided from a client
 * surface) in such a way that it matches any required transformations that
 * give its final shape, such as a #MetaMonitorTransform, y-invertedness, or a
 * crop-and-scale operation.
 * @class 
 */
export class ShapedTexture extends GObject.Object {

    // Own properties of Meta-13.Meta.ShapedTexture

    static name: string

    // Constructors of Meta-13.Meta.ShapedTexture

    constructor(config?: ShapedTexture.ConstructorProperties) 
    _init(config?: ShapedTexture.ConstructorProperties): void
}

export module SoundPlayer {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface SoundPlayer {

    // Own properties of Meta-13.Meta.SoundPlayer

    __gtype__: number

    // Owm methods of Meta-13.Meta.SoundPlayer

    /**
     * Plays a sound from a file.
     * @param file file to play
     * @param description description of the played sound
     * @param cancellable cancellable for the request
     */
    playFromFile(file: Gio.File, description: string, cancellable: Gio.Cancellable | null): void
    /**
     * Plays a sound from the sound theme.
     * @param name sound theme name of the event
     * @param description description of the event
     * @param cancellable cancellable for the request
     */
    playFromTheme(name: string, description: string, cancellable: Gio.Cancellable | null): void

    // Class property signals of Meta-13.Meta.SoundPlayer

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SoundPlayer extends GObject.Object {

    // Own properties of Meta-13.Meta.SoundPlayer

    static name: string

    // Constructors of Meta-13.Meta.SoundPlayer

    constructor(config?: SoundPlayer.ConstructorProperties) 
    _init(config?: SoundPlayer.ConstructorProperties): void
}

export module Stage {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Clutter.Animatable.ConstructorProperties, Clutter.Container.ConstructorProperties, Clutter.Scriptable.ConstructorProperties, Clutter.Stage.ConstructorProperties {
    }

}

export interface Stage extends Atk.ImplementorIface, Clutter.Animatable, Clutter.Container, Clutter.Scriptable {

    // Own properties of Meta-13.Meta.Stage

    __gtype__: number

    // Class property signals of Meta-13.Meta.Stage

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::is-grabbed", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-grabbed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-grabbed", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-grabbed", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-grabbed", ...args: any[]): void
    connect(sigName: "notify::key-focus", callback: (...args: any[]) => void): number
    on(sigName: "notify::key-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::key-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::key-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::key-focus", ...args: any[]): void
    connect(sigName: "notify::perspective", callback: (...args: any[]) => void): number
    on(sigName: "notify::perspective", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::perspective", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::perspective", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::perspective", ...args: any[]): void
    connect(sigName: "notify::title", callback: (...args: any[]) => void): number
    on(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::actions", callback: (...args: any[]) => void): number
    on(sigName: "notify::actions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::actions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::actions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::actions", ...args: any[]): void
    connect(sigName: "notify::allocation", callback: (...args: any[]) => void): number
    on(sigName: "notify::allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::allocation", ...args: any[]): void
    connect(sigName: "notify::background-color", callback: (...args: any[]) => void): number
    on(sigName: "notify::background-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::background-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::background-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::background-color", ...args: any[]): void
    connect(sigName: "notify::background-color-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::background-color-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::background-color-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::background-color-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::background-color-set", ...args: any[]): void
    connect(sigName: "notify::child-transform", callback: (...args: any[]) => void): number
    on(sigName: "notify::child-transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::child-transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::child-transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::child-transform", ...args: any[]): void
    connect(sigName: "notify::child-transform-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::child-transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::child-transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::child-transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::child-transform-set", ...args: any[]): void
    connect(sigName: "notify::clip-rect", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip-rect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip-rect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip-rect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip-rect", ...args: any[]): void
    connect(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip-to-allocation", ...args: any[]): void
    connect(sigName: "notify::color-state", callback: (...args: any[]) => void): number
    on(sigName: "notify::color-state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::color-state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::color-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::color-state", ...args: any[]): void
    connect(sigName: "notify::constraints", callback: (...args: any[]) => void): number
    on(sigName: "notify::constraints", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::constraints", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::constraints", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::constraints", ...args: any[]): void
    connect(sigName: "notify::content", callback: (...args: any[]) => void): number
    on(sigName: "notify::content", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::content-box", callback: (...args: any[]) => void): number
    on(sigName: "notify::content-box", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content-box", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content-box", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content-box", ...args: any[]): void
    connect(sigName: "notify::content-gravity", callback: (...args: any[]) => void): number
    on(sigName: "notify::content-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content-gravity", ...args: any[]): void
    connect(sigName: "notify::content-repeat", callback: (...args: any[]) => void): number
    on(sigName: "notify::content-repeat", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content-repeat", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content-repeat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content-repeat", ...args: any[]): void
    connect(sigName: "notify::effect", callback: (...args: any[]) => void): number
    on(sigName: "notify::effect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::effect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::effect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::effect", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (...args: any[]) => void): number
    on(sigName: "notify::first-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::first-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fixed-position-set", ...args: any[]): void
    connect(sigName: "notify::fixed-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::fixed-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fixed-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fixed-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fixed-x", ...args: any[]): void
    connect(sigName: "notify::fixed-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::fixed-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fixed-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fixed-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fixed-y", ...args: any[]): void
    connect(sigName: "notify::has-clip", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-clip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-clip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-clip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-clip", ...args: any[]): void
    connect(sigName: "notify::has-pointer", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-pointer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-pointer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-pointer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-pointer", ...args: any[]): void
    connect(sigName: "notify::height", callback: (...args: any[]) => void): number
    on(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (...args: any[]) => void): number
    on(sigName: "notify::last-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::last-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (...args: any[]) => void): number
    on(sigName: "notify::layout-manager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::layout-manager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::magnification-filter", callback: (...args: any[]) => void): number
    on(sigName: "notify::magnification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::magnification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::magnification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::magnification-filter", ...args: any[]): void
    connect(sigName: "notify::mapped", callback: (...args: any[]) => void): number
    on(sigName: "notify::mapped", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mapped", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mapped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mapped", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-left", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-left", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-right", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-right", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::min-height", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-height", ...args: any[]): void
    connect(sigName: "notify::min-height-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-height-set", ...args: any[]): void
    connect(sigName: "notify::min-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-width", ...args: any[]): void
    connect(sigName: "notify::min-width-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-width-set", ...args: any[]): void
    connect(sigName: "notify::minification-filter", callback: (...args: any[]) => void): number
    on(sigName: "notify::minification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::minification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::minification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::minification-filter", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::natural-height", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-height", ...args: any[]): void
    connect(sigName: "notify::natural-height-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-height-set", ...args: any[]): void
    connect(sigName: "notify::natural-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-width", ...args: any[]): void
    connect(sigName: "notify::natural-width-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-width-set", ...args: any[]): void
    connect(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void): number
    on(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::offscreen-redirect", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (...args: any[]) => void): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::pivot-point", callback: (...args: any[]) => void): number
    on(sigName: "notify::pivot-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pivot-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pivot-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pivot-point", ...args: any[]): void
    connect(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pivot-point-z", ...args: any[]): void
    connect(sigName: "notify::position", callback: (...args: any[]) => void): number
    on(sigName: "notify::position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::reactive", callback: (...args: any[]) => void): number
    on(sigName: "notify::reactive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::reactive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::reactive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::reactive", ...args: any[]): void
    connect(sigName: "notify::realized", callback: (...args: any[]) => void): number
    on(sigName: "notify::realized", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::realized", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::realized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::realized", ...args: any[]): void
    connect(sigName: "notify::request-mode", callback: (...args: any[]) => void): number
    on(sigName: "notify::request-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::request-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::request-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::request-mode", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-angle-x", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-angle-y", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-angle-z", ...args: any[]): void
    connect(sigName: "notify::scale-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-x", ...args: any[]): void
    connect(sigName: "notify::scale-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-y", ...args: any[]): void
    connect(sigName: "notify::scale-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-z", ...args: any[]): void
    connect(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::show-on-set-parent", ...args: any[]): void
    connect(sigName: "notify::size", callback: (...args: any[]) => void): number
    on(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::text-direction", callback: (...args: any[]) => void): number
    on(sigName: "notify::text-direction", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::text-direction", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::text-direction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::text-direction", ...args: any[]): void
    connect(sigName: "notify::transform", callback: (...args: any[]) => void): number
    on(sigName: "notify::transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transform", ...args: any[]): void
    connect(sigName: "notify::transform-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transform-set", ...args: any[]): void
    connect(sigName: "notify::translation-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::translation-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::translation-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::translation-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::translation-x", ...args: any[]): void
    connect(sigName: "notify::translation-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::translation-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::translation-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::translation-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::translation-y", ...args: any[]): void
    connect(sigName: "notify::translation-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::translation-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::translation-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::translation-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::translation-z", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (...args: any[]) => void): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width", callback: (...args: any[]) => void): number
    on(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::x", callback: (...args: any[]) => void): number
    on(sigName: "notify::x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x", ...args: any[]): void
    connect(sigName: "notify::x-align", callback: (...args: any[]) => void): number
    on(sigName: "notify::x-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x-align", ...args: any[]): void
    connect(sigName: "notify::x-expand", callback: (...args: any[]) => void): number
    on(sigName: "notify::x-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x-expand", ...args: any[]): void
    connect(sigName: "notify::y", callback: (...args: any[]) => void): number
    on(sigName: "notify::y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y", ...args: any[]): void
    connect(sigName: "notify::y-align", callback: (...args: any[]) => void): number
    on(sigName: "notify::y-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y-align", ...args: any[]): void
    connect(sigName: "notify::y-expand", callback: (...args: any[]) => void): number
    on(sigName: "notify::y-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y-expand", ...args: any[]): void
    connect(sigName: "notify::z-position", callback: (...args: any[]) => void): number
    on(sigName: "notify::z-position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::z-position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::z-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::z-position", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Stage extends Clutter.Stage {

    // Own properties of Meta-13.Meta.Stage

    static name: string

    // Constructors of Meta-13.Meta.Stage

    constructor(config?: Stage.ConstructorProperties) 
    _init(config?: Stage.ConstructorProperties): void
    static isFocused(display: Display): boolean
}

export module StartupNotification {

    // Signal callback interfaces

    /**
     * Signal callback interface for `changed`
     */
    export interface ChangedSignalCallback {
        (object: StartupSequence): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Meta-13.Meta.StartupNotification

        display?: Display | null
    }

}

export interface StartupNotification {

    // Own properties of Meta-13.Meta.StartupNotification

    readonly display: Display
    __gtype__: number

    // Owm methods of Meta-13.Meta.StartupNotification

    /**
     * Creates an app launch context.
     * @returns a launch context.
     */
    createLauncher(): LaunchContext
    /**
     * Get the list of startup sequences arrived in the startup notification object.
     * @returns a #GSList of #MetaStartupSequence in the #MetaStartupNotification.
     */
    getSequences(): StartupSequence[]

    // Own signals of Meta-13.Meta.StartupNotification

    connect(sigName: "changed", callback: StartupNotification.ChangedSignalCallback): number
    on(sigName: "changed", callback: StartupNotification.ChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "changed", callback: StartupNotification.ChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "changed", callback: StartupNotification.ChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "changed", ...args: any[]): void

    // Class property signals of Meta-13.Meta.StartupNotification

    connect(sigName: "notify::display", callback: (...args: any[]) => void): number
    on(sigName: "notify::display", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::display", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::display", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::display", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class StartupNotification extends GObject.Object {

    // Own properties of Meta-13.Meta.StartupNotification

    static name: string

    // Constructors of Meta-13.Meta.StartupNotification

    constructor(config?: StartupNotification.ConstructorProperties) 
    _init(config?: StartupNotification.ConstructorProperties): void
}

export module StartupSequence {

    // Signal callback interfaces

    /**
     * Signal callback interface for `complete`
     */
    export interface CompleteSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `timeout`
     */
    export interface TimeoutSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Meta-13.Meta.StartupSequence

        applicationId?: string | null
        display?: Display | null
        iconName?: string | null
        id?: string | null
        name?: string | null
        timestamp?: number | null
        wmclass?: string | null
        workspace?: number | null
    }

}

export interface StartupSequence {

    // Own properties of Meta-13.Meta.StartupSequence

    readonly applicationId: string | null
    readonly display: Display
    readonly iconName: string | null
    readonly id: string | null
    readonly name: string | null
    readonly timestamp: number
    readonly wmclass: string | null
    readonly workspace: number
    __gtype__: number

    // Own fields of Meta-13.Meta.StartupSequence

    parentInstance: GObject.Object

    // Owm methods of Meta-13.Meta.StartupSequence

    complete(): void
    /**
     * Get the application id of the startup sequence.
     * @returns the application id or %NULL.
     */
    getApplicationId(): string | null
    getCompleted(): boolean
    /**
     * Get the icon name of the startup sequence.
     * @returns the icon name or %NULL.
     */
    getIconName(): string | null
    getId(): string
    getName(): string
    getTimestamp(): number
    /**
     * Get the wmclass of the startup sequence.
     * @returns the wmclass or %NULL.
     */
    getWmclass(): string | null
    getWorkspace(): number

    // Own signals of Meta-13.Meta.StartupSequence

    connect(sigName: "complete", callback: StartupSequence.CompleteSignalCallback): number
    on(sigName: "complete", callback: StartupSequence.CompleteSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "complete", callback: StartupSequence.CompleteSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "complete", callback: StartupSequence.CompleteSignalCallback): NodeJS.EventEmitter
    emit(sigName: "complete", ...args: any[]): void
    connect(sigName: "timeout", callback: StartupSequence.TimeoutSignalCallback): number
    on(sigName: "timeout", callback: StartupSequence.TimeoutSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "timeout", callback: StartupSequence.TimeoutSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "timeout", callback: StartupSequence.TimeoutSignalCallback): NodeJS.EventEmitter
    emit(sigName: "timeout", ...args: any[]): void

    // Class property signals of Meta-13.Meta.StartupSequence

    connect(sigName: "notify::application-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::application-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::application-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::application-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::application-id", ...args: any[]): void
    connect(sigName: "notify::display", callback: (...args: any[]) => void): number
    on(sigName: "notify::display", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::display", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::display", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::display", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::icon-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::icon-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::icon-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::id", callback: (...args: any[]) => void): number
    on(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::timestamp", callback: (...args: any[]) => void): number
    on(sigName: "notify::timestamp", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::timestamp", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::timestamp", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::timestamp", ...args: any[]): void
    connect(sigName: "notify::wmclass", callback: (...args: any[]) => void): number
    on(sigName: "notify::wmclass", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::wmclass", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::wmclass", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::wmclass", ...args: any[]): void
    connect(sigName: "notify::workspace", callback: (...args: any[]) => void): number
    on(sigName: "notify::workspace", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::workspace", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::workspace", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::workspace", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class StartupSequence extends GObject.Object {

    // Own properties of Meta-13.Meta.StartupSequence

    static name: string

    // Constructors of Meta-13.Meta.StartupSequence

    constructor(config?: StartupSequence.ConstructorProperties) 
    _init(config?: StartupSequence.ConstructorProperties): void
}

export module WaylandClient {

    // Signal callback interfaces

    /**
     * Signal callback interface for `client-destroyed`
     */
    export interface ClientDestroyedSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface WaylandClient {

    // Own properties of Meta-13.Meta.WaylandClient

    __gtype__: number

    // Owm methods of Meta-13.Meta.WaylandClient

    hideFromWindowList(window: Window): void
    ownsWindow(window: Window): boolean
    /**
     * Shows again this window in window lists, like taskbars, pagers...
     * @param window a MetaWindow
     */
    showInWindowList(window: Window): void
    /**
     * Creates a #GSubprocess given a provided array of arguments, launching a new
     * process with the binary specified in the first element of argv, and with the
     * rest of elements as parameters. It also sets up a new Wayland socket and sets
     * the environment variable WAYLAND_SOCKET to make the new process to use it.
     * @param display the current MetaDisplay
     * @param argv Command line arguments
     * @returns A new #GSubprocess, or %NULL on error (and @error will be set)
     */
    spawnv(display: Display, argv: string[]): Gio.Subprocess

    // Own signals of Meta-13.Meta.WaylandClient

    connect(sigName: "client-destroyed", callback: WaylandClient.ClientDestroyedSignalCallback): number
    on(sigName: "client-destroyed", callback: WaylandClient.ClientDestroyedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "client-destroyed", callback: WaylandClient.ClientDestroyedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "client-destroyed", callback: WaylandClient.ClientDestroyedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "client-destroyed", ...args: any[]): void

    // Class property signals of Meta-13.Meta.WaylandClient

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class WaylandClient extends GObject.Object {

    // Own properties of Meta-13.Meta.WaylandClient

    static name: string

    // Constructors of Meta-13.Meta.WaylandClient

    constructor(config?: WaylandClient.ConstructorProperties) 
    /**
     * Creates a new #MetaWaylandClient. The GSubprocesslauncher passed is
     * stored internally and will be used to launch the subprocess.
     * @constructor 
     * @param context a #MetaContext
     * @param launcher a GSubprocessLauncher to use to launch the subprocess
     * @returns A #MetaWaylandClient or %NULL if %error is set. Free with g_object_unref().
     */
    constructor(context: Context, launcher: Gio.SubprocessLauncher) 
    /**
     * Creates a new #MetaWaylandClient. The GSubprocesslauncher passed is
     * stored internally and will be used to launch the subprocess.
     * @constructor 
     * @param context a #MetaContext
     * @param launcher a GSubprocessLauncher to use to launch the subprocess
     * @returns A #MetaWaylandClient or %NULL if %error is set. Free with g_object_unref().
     */
    static new(context: Context, launcher: Gio.SubprocessLauncher): WaylandClient
    _init(config?: WaylandClient.ConstructorProperties): void
}

export module WaylandCompositor {

    // Signal callback interfaces

    /**
     * Signal callback interface for `prepare-shutdown`
     */
    export interface PrepareShutdownSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface WaylandCompositor {

    // Own properties of Meta-13.Meta.WaylandCompositor

    __gtype__: number

    // Owm methods of Meta-13.Meta.WaylandCompositor

    getWaylandDisplay(): any | null

    // Own signals of Meta-13.Meta.WaylandCompositor

    connect(sigName: "prepare-shutdown", callback: WaylandCompositor.PrepareShutdownSignalCallback): number
    on(sigName: "prepare-shutdown", callback: WaylandCompositor.PrepareShutdownSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "prepare-shutdown", callback: WaylandCompositor.PrepareShutdownSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "prepare-shutdown", callback: WaylandCompositor.PrepareShutdownSignalCallback): NodeJS.EventEmitter
    emit(sigName: "prepare-shutdown", ...args: any[]): void

    // Class property signals of Meta-13.Meta.WaylandCompositor

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class WaylandCompositor extends GObject.Object {

    // Own properties of Meta-13.Meta.WaylandCompositor

    static name: string

    // Constructors of Meta-13.Meta.WaylandCompositor

    constructor(config?: WaylandCompositor.ConstructorProperties) 
    _init(config?: WaylandCompositor.ConstructorProperties): void
}

export module Window {

    // Signal callback interfaces

    /**
     * Signal callback interface for `focus`
     */
    export interface FocusSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `highest-scale-monitor-changed`
     */
    export interface HighestScaleMonitorChangedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `position-changed`
     */
    export interface PositionChangedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `raised`
     */
    export interface RaisedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `shown`
     */
    export interface ShownSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `size-changed`
     */
    export interface SizeChangedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `unmanaged`
     */
    export interface UnmanagedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `unmanaging`
     */
    export interface UnmanagingSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `workspace-changed`
     */
    export interface WorkspaceChangedSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Gio.Initable.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Meta-13.Meta.Window

        display?: Display | null
        effect?: number | null
        xwindow?: number | null
    }

}

export interface Window extends Gio.Initable {

    // Own properties of Meta-13.Meta.Window

    readonly above: boolean
    readonly appearsFocused: boolean
    readonly decorated: boolean
    readonly demandsAttention: boolean
    readonly display: Display
    readonly effect: number
    readonly fullscreen: boolean
    readonly gtkAppMenuObjectPath: string | null
    readonly gtkApplicationId: string | null
    readonly gtkApplicationObjectPath: string | null
    readonly gtkMenubarObjectPath: string | null
    readonly gtkUniqueBusName: string | null
    readonly gtkWindowObjectPath: string | null
    readonly icon: any
    readonly isAlive: boolean
    readonly maximizedHorizontally: boolean
    readonly maximizedVertically: boolean
    readonly miniIcon: any
    readonly minimized: boolean
    readonly mutterHints: string | null
    readonly onAllWorkspaces: boolean
    readonly resizeable: boolean
    readonly skipTaskbar: boolean
    readonly title: string | null
    readonly urgent: boolean
    readonly userTime: number
    readonly windowType: WindowType
    readonly wmClass: string | null
    readonly xwindow: number
    __gtype__: number

    // Owm methods of Meta-13.Meta.Window

    activate(currentTime: number): void
    activateWithWorkspace(currentTime: number, workspace: Workspace): void
    allowsMove(): boolean
    allowsResize(): boolean
    beginGrabOp(op: GrabOp, device: Clutter.InputDevice | null, sequence: Clutter.EventSequence | null, timestamp: number): boolean
    canClose(): boolean
    canMaximize(): boolean
    canMinimize(): boolean
    changeWorkspace(workspace: Workspace): void
    changeWorkspaceByIndex(spaceIndex: number, append: boolean): void
    checkAlive(timestamp: number): void
    /**
     * Converts a desired bounds of the client window into the corresponding bounds
     * of the window frame (excluding invisible borders and client side shadows.)
     * @param clientRect client rectangle in root coordinates
     */
    clientRectToFrameRect(clientRect: Mtk.Rectangle): /* frameRect */ Mtk.Rectangle
    computeGroup(): void
    delete(timestamp: number): void
    /**
     * Follow the chain of parents of `window,` skipping transient windows,
     * and return the "root" window which has no non-transient parent.
     * @returns The root ancestor window
     */
    findRootAncestor(): Window
    focus(timestamp: number): void
    /**
     * If `window` is transient, call `func` with the window for which it's transient,
     * repeatedly until either we find a non-transient window, or `func` returns %FALSE.
     * @param func Called for each window which is a transient parent of `window`
     */
    foreachAncestor(func: WindowForeachFunc): void
    /**
     * Call `func` for every window which is either transient for `window,` or is
     * a transient of a window which is in turn transient for `window`.
     * The order of window enumeration is not defined.
     * 
     * Iteration will stop if `func` at any point returns %FALSE.
     * @param func Called for each window which is a transient of `window` (transitively)
     */
    foreachTransient(func: WindowForeachFunc): void
    /**
     * Converts a desired frame bounds for a window into the bounds of the client
     * window.
     * @param frameRect desired frame bounds for the window
     */
    frameRectToClientRect(frameRect: Mtk.Rectangle): /* clientRect */ Mtk.Rectangle
    /**
     * Gets the rectangle that the pixmap or buffer of `window` occupies.
     * 
     * For X11 windows, this is the server-side geometry of the toplevel
     * window.
     * 
     * For Wayland windows, this is the bounding rectangle of the attached
     * buffer.
     */
    getBufferRect(): /* rect */ Mtk.Rectangle
    /**
     * Returns name of the client machine from which this windows was created,
     * if known (obtained from the WM_CLIENT_MACHINE property).
     * @returns the machine name, or %NULL; the string is owned by the window manager and should not be freed or modified by the caller.
     */
    getClientMachine(): string | null
    /**
     * Returns the #MetaWindowClientType of the window.
     * @returns The root ancestor window
     */
    getClientType(): WindowClientType
    /**
     * Gets the compositor's wrapper object for `window`.
     * @returns the wrapper object.
     */
    getCompositorPrivate(): GObject.Object
    getDescription(): string
    getDisplay(): Display
    /**
     * Gets a region representing the outer bounds of the window's frame.
     * @returns a #cairo_region_t  holding the outer bounds of the window, or %NULL if the window  doesn't have a frame.
     */
    getFrameBounds(): cairo.Region | null
    /**
     * Gets the rectangle that bounds `window` that is what the user thinks of
     * as the edge of the window.
     * 
     * This doesn't include any extra reactive area that we or the client
     * adds to the window, or any area that the client adds to draw a client-side shadow.
     */
    getFrameRect(): /* rect */ Mtk.Rectangle
    /**
     * Gets the type of window decorations that should be used for this window.
     * @returns the frame type
     */
    getFrameType(): FrameType
    getGtkAppMenuObjectPath(): string | null
    getGtkApplicationId(): string | null
    getGtkApplicationObjectPath(): string | null
    getGtkMenubarObjectPath(): string | null
    getGtkThemeVariant(): string | null
    getGtkUniqueBusName(): string | null
    getGtkWindowObjectPath(): string | null
    /**
     * Gets the location of the icon corresponding to the window.
     * 
     * The location will be provided set by the task bar or other user interface
     * element displaying the icon, and is relative to the root window.
     * @returns %TRUE if the icon geometry was successfully retrieved.
     */
    getIconGeometry(): [ /* returnType */ boolean, /* rect */ Mtk.Rectangle ]
    /**
     * Returns the window id associated with window.
     * @returns The window id
     */
    getId(): number
    getLayer(): StackLayer
    /**
     * Gets the current maximization state of the window, as combination
     * of the %META_MAXIMIZE_HORIZONTAL and %META_MAXIMIZE_VERTICAL flags;
     * @returns current maximization state
     */
    getMaximized(): MaximizeFlags
    /**
     * Gets index of the monitor that this window is on.
     * @returns The index of the monitor in the screens monitor list, or -1 if the window has been recently unmanaged and does not have a monitor.
     */
    getMonitor(): number
    /**
     * Gets the current value of the _MUTTER_HINTS property.
     * 
     * The purpose of the hints is to allow fine-tuning of the Window Manager and
     * Compositor behaviour on per-window basis, and is intended primarily for
     * hints that are plugin-specific.
     * 
     * The property is a list of colon-separated key=value pairs. The key names for
     * any plugin-specific hints must be suitably namespaced to allow for shared
     * use; 'mutter-' key prefix is reserved for internal use, and must not be used
     * by plugins.
     * @returns the _MUTTER_HINTS string, or %NULL if no hints are set.
     */
    getMutterHints(): string | null
    /**
     * Returns the pid of the process that created this window, if available
     * to the windowing system.
     * 
     * Note that the value returned by this is vulnerable to spoofing attacks
     * by the client.
     * @returns the pid, or 0 if not known.
     */
    getPid(): number
    getRole(): string
    /**
     * Gets an unique id for a sandboxed app (currently flatpaks and snaps are
     * supported).
     * @returns the sandboxed application ID or %NULL
     */
    getSandboxedAppId(): string | null
    /**
     * The stable sequence number is a monotonicially increasing
     * unique integer assigned to each #MetaWindow upon creation.
     * 
     * This number can be useful for sorting windows in a stable
     * fashion.
     * @returns Internal sequence number for this window
     */
    getStableSequence(): number
    /**
     * Gets the startup id of the given #MetaWindow
     * @returns the startup id
     */
    getStartupId(): string | null
    /**
     * Returns the matching tiled window on the same monitor as `window`. This is
     * the topmost tiled window in a complementary tile mode that is:
     * 
     *  - on the same monitor;
     *  - on the same workspace;
     *  - spanning the remaining monitor width;
     *  - there is no 3rd window stacked between both tiled windows that's
     *    partially visible in the common edge.
     * @returns the matching tiled window or %NULL if it doesn't exist.
     */
    getTileMatch(): Window | null
    getTitle(): string
    /**
     * Returns the #MetaWindow for the window that is pointed to by the
     * WM_TRANSIENT_FOR hint on this window (see XGetTransientForHint()
     * or XSetTransientForHint()). Mutter keeps transient windows above their
     * parents. A typical usage of this hint is for a dialog that wants to stay
     * above its associated window.
     * @returns the window this window is transient for, or %NULL if the WM_TRANSIENT_FOR hint is unset or does not point to a toplevel window that Mutter knows about.
     */
    getTransientFor(): Window | null
    /**
     * The user time represents a timestamp for the last time the user
     * interacted with this window.
     * 
     * Note this property is only available for non-override-redirect windows.
     * 
     * The property is set by Mutter initially upon window creation,
     * and updated thereafter on input events (key and button presses) seen by Mutter,
     * client updates to the _NET_WM_USER_TIME property (if later than the current time)
     * and when focusing the window.
     * @returns The last time the user interacted with this window.
     */
    getUserTime(): number
    getWindowType(): WindowType
    /**
     * Return the current value of the name part of `WM_CLASS` X property.
     * @returns the current value of the name part of `WM_CLASS` X property
     */
    getWmClass(): string | null
    /**
     * Return the current value of the instance part of `WM_CLASS` X property.
     * @returns the current value of the instance part of `WM_CLASS` X property.
     */
    getWmClassInstance(): string | null
    /**
     * Get the work area for all monitors for `window`.
     */
    getWorkAreaAllMonitors(): /* area */ Mtk.Rectangle
    /**
     * Get the work area for the monitor `window` is currently on.
     */
    getWorkAreaCurrentMonitor(): /* area */ Mtk.Rectangle
    /**
     * Get the work area for `window,` given the monitor index
     * `which_monitor`.
     * @param whichMonitor a moniotr to get the work area for
     */
    getWorkAreaForMonitor(whichMonitor: number): /* area */ Mtk.Rectangle
    /**
     * Gets the [class`Meta`.Workspace] that the window is currently displayed on.
     * 
     * If the window is on all workspaces, returns the currently active
     * workspace.
     * @returns the #MetaWorkspace for the window
     */
    getWorkspace(): Workspace
    groupLeaderChanged(): void
    /**
     * Tests if `window` has any transients attached to it.
     * 
     * If the `attach_modal_dialogs` option is not enabled, this will
     * always return %FALSE.
     * @returns whether @window has attached transients
     */
    hasAttachedDialogs(): boolean
    hasFocus(): boolean
    hasPointer(): boolean
    isAbove(): boolean
    isAlwaysOnAllWorkspaces(): boolean
    /**
     * The function determines whether `window` is an ancestor of `transient;` it does
     * so by traversing the `transient'`s ancestors until it either locates `window`
     * or reaches an ancestor that is not transient.
     * @param transient a #MetaWindow
     * @returns %TRUE if window is an ancestor of transient.
     */
    isAncestorOfTransient(transient: Window): boolean
    /**
     * Tests if `window` should be attached to its parent window.
     * 
     * If the `attach_modal_dialogs` option is not enabled, this will
     * always return %FALSE.
     * @returns whether @window should be attached to its parent
     */
    isAttachedDialog(): boolean
    /**
     * Check if if the window has decorations drawn by the client.
     * 
     * `window->decorated` refers only to whether we should add decorations.
     */
    isClientDecorated(): boolean
    isFullscreen(): boolean
    isHidden(): boolean
    isMonitorSized(): boolean
    isOnAllWorkspaces(): boolean
    isOnPrimaryMonitor(): boolean
    isOverrideRedirect(): boolean
    isRemote(): boolean
    isScreenSized(): boolean
    /**
     * Gets whether this window should be ignored by task lists.
     * @returns %TRUE if the skip bar hint is set.
     */
    isSkipTaskbar(): boolean
    kill(): void
    locatedOnWorkspace(workspace: Workspace): boolean
    lower(): void
    lowerWithTransients(timestamp: number): void
    makeAbove(): void
    makeFullscreen(): void
    maximize(directions: MaximizeFlags): void
    minimize(): void
    /**
     * Moves the window to the desired location on window's assigned
     * workspace, using the northwest edge of the frame as the reference,
     * instead of the actual window's origin, but only if a frame is present.
     * 
     * Otherwise, acts identically to meta_window_move().
     * @param userOp bool to indicate whether or not this is a user operation
     * @param rootXNw desired x pos
     * @param rootYNw desired y pos
     */
    moveFrame(userOp: boolean, rootXNw: number, rootYNw: number): void
    /**
     * Resizes the window so that its outer bounds (including frame)
     * fit within the given rect
     * @param userOp bool to indicate whether or not this is a user operation
     * @param rootXNw new x
     * @param rootYNw new y
     * @param w desired width
     * @param h desired height
     */
    moveResizeFrame(userOp: boolean, rootXNw: number, rootYNw: number, w: number, h: number): void
    /**
     * Moves the window to the monitor with index `monitor,` keeping
     * the relative position of the window's top left corner.
     * @param monitor desired monitor index
     */
    moveToMonitor(monitor: number): void
    raise(): void
    raiseAndMakeRecent(): void
    setCompositorPrivate(priv: GObject.Object): void
    setDemandsAttention(): void
    /**
     * Sets or unsets the location of the icon corresponding to the window.
     * 
     * If set, the location should correspond to a dock, task bar or other user
     * interface element displaying the icon, and is relative to the root window.
     * @param rect rectangle with the desired geometry or %NULL.
     */
    setIconGeometry(rect: Mtk.Rectangle | null): void
    shoveTitlebarOnscreen(): void
    showingOnItsWorkspace(): boolean
    shutdownGroup(): void
    stick(): void
    titlebarIsOnscreen(): boolean
    unmakeAbove(): void
    unmakeFullscreen(): void
    unmaximize(directions: MaximizeFlags): void
    unminimize(): void
    unsetDemandsAttention(): void
    unstick(): void

    // Own signals of Meta-13.Meta.Window

    connect(sigName: "focus", callback: Window.FocusSignalCallback): number
    on(sigName: "focus", callback: Window.FocusSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "focus", callback: Window.FocusSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "focus", callback: Window.FocusSignalCallback): NodeJS.EventEmitter
    emit(sigName: "focus", ...args: any[]): void
    connect(sigName: "highest-scale-monitor-changed", callback: Window.HighestScaleMonitorChangedSignalCallback): number
    on(sigName: "highest-scale-monitor-changed", callback: Window.HighestScaleMonitorChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "highest-scale-monitor-changed", callback: Window.HighestScaleMonitorChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "highest-scale-monitor-changed", callback: Window.HighestScaleMonitorChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "highest-scale-monitor-changed", ...args: any[]): void
    connect(sigName: "position-changed", callback: Window.PositionChangedSignalCallback): number
    on(sigName: "position-changed", callback: Window.PositionChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "position-changed", callback: Window.PositionChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "position-changed", callback: Window.PositionChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "position-changed", ...args: any[]): void
    connect(sigName: "raised", callback: Window.RaisedSignalCallback): number
    on(sigName: "raised", callback: Window.RaisedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "raised", callback: Window.RaisedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "raised", callback: Window.RaisedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "raised", ...args: any[]): void
    connect(sigName: "shown", callback: Window.ShownSignalCallback): number
    on(sigName: "shown", callback: Window.ShownSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "shown", callback: Window.ShownSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "shown", callback: Window.ShownSignalCallback): NodeJS.EventEmitter
    emit(sigName: "shown", ...args: any[]): void
    connect(sigName: "size-changed", callback: Window.SizeChangedSignalCallback): number
    on(sigName: "size-changed", callback: Window.SizeChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "size-changed", callback: Window.SizeChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "size-changed", callback: Window.SizeChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "size-changed", ...args: any[]): void
    connect(sigName: "unmanaged", callback: Window.UnmanagedSignalCallback): number
    on(sigName: "unmanaged", callback: Window.UnmanagedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "unmanaged", callback: Window.UnmanagedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "unmanaged", callback: Window.UnmanagedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "unmanaged", ...args: any[]): void
    connect(sigName: "unmanaging", callback: Window.UnmanagingSignalCallback): number
    on(sigName: "unmanaging", callback: Window.UnmanagingSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "unmanaging", callback: Window.UnmanagingSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "unmanaging", callback: Window.UnmanagingSignalCallback): NodeJS.EventEmitter
    emit(sigName: "unmanaging", ...args: any[]): void
    connect(sigName: "workspace-changed", callback: Window.WorkspaceChangedSignalCallback): number
    on(sigName: "workspace-changed", callback: Window.WorkspaceChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "workspace-changed", callback: Window.WorkspaceChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "workspace-changed", callback: Window.WorkspaceChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "workspace-changed", ...args: any[]): void

    // Class property signals of Meta-13.Meta.Window

    connect(sigName: "notify::above", callback: (...args: any[]) => void): number
    on(sigName: "notify::above", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::above", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::above", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::above", ...args: any[]): void
    connect(sigName: "notify::appears-focused", callback: (...args: any[]) => void): number
    on(sigName: "notify::appears-focused", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::appears-focused", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::appears-focused", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::appears-focused", ...args: any[]): void
    connect(sigName: "notify::decorated", callback: (...args: any[]) => void): number
    on(sigName: "notify::decorated", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::decorated", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::decorated", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::decorated", ...args: any[]): void
    connect(sigName: "notify::demands-attention", callback: (...args: any[]) => void): number
    on(sigName: "notify::demands-attention", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::demands-attention", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::demands-attention", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::demands-attention", ...args: any[]): void
    connect(sigName: "notify::display", callback: (...args: any[]) => void): number
    on(sigName: "notify::display", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::display", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::display", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::display", ...args: any[]): void
    connect(sigName: "notify::effect", callback: (...args: any[]) => void): number
    on(sigName: "notify::effect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::effect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::effect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::effect", ...args: any[]): void
    connect(sigName: "notify::fullscreen", callback: (...args: any[]) => void): number
    on(sigName: "notify::fullscreen", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fullscreen", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fullscreen", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fullscreen", ...args: any[]): void
    connect(sigName: "notify::gtk-app-menu-object-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::gtk-app-menu-object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::gtk-app-menu-object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::gtk-app-menu-object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::gtk-app-menu-object-path", ...args: any[]): void
    connect(sigName: "notify::gtk-application-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::gtk-application-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::gtk-application-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::gtk-application-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::gtk-application-id", ...args: any[]): void
    connect(sigName: "notify::gtk-application-object-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::gtk-application-object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::gtk-application-object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::gtk-application-object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::gtk-application-object-path", ...args: any[]): void
    connect(sigName: "notify::gtk-menubar-object-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::gtk-menubar-object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::gtk-menubar-object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::gtk-menubar-object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::gtk-menubar-object-path", ...args: any[]): void
    connect(sigName: "notify::gtk-unique-bus-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::gtk-unique-bus-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::gtk-unique-bus-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::gtk-unique-bus-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::gtk-unique-bus-name", ...args: any[]): void
    connect(sigName: "notify::gtk-window-object-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::gtk-window-object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::gtk-window-object-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::gtk-window-object-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::gtk-window-object-path", ...args: any[]): void
    connect(sigName: "notify::icon", callback: (...args: any[]) => void): number
    on(sigName: "notify::icon", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::icon", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::icon", ...args: any[]): void
    connect(sigName: "notify::is-alive", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-alive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-alive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-alive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-alive", ...args: any[]): void
    connect(sigName: "notify::maximized-horizontally", callback: (...args: any[]) => void): number
    on(sigName: "notify::maximized-horizontally", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::maximized-horizontally", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::maximized-horizontally", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::maximized-horizontally", ...args: any[]): void
    connect(sigName: "notify::maximized-vertically", callback: (...args: any[]) => void): number
    on(sigName: "notify::maximized-vertically", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::maximized-vertically", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::maximized-vertically", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::maximized-vertically", ...args: any[]): void
    connect(sigName: "notify::mini-icon", callback: (...args: any[]) => void): number
    on(sigName: "notify::mini-icon", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mini-icon", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mini-icon", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mini-icon", ...args: any[]): void
    connect(sigName: "notify::minimized", callback: (...args: any[]) => void): number
    on(sigName: "notify::minimized", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::minimized", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::minimized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::minimized", ...args: any[]): void
    connect(sigName: "notify::mutter-hints", callback: (...args: any[]) => void): number
    on(sigName: "notify::mutter-hints", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mutter-hints", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mutter-hints", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mutter-hints", ...args: any[]): void
    connect(sigName: "notify::on-all-workspaces", callback: (...args: any[]) => void): number
    on(sigName: "notify::on-all-workspaces", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::on-all-workspaces", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::on-all-workspaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::on-all-workspaces", ...args: any[]): void
    connect(sigName: "notify::resizeable", callback: (...args: any[]) => void): number
    on(sigName: "notify::resizeable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::resizeable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::resizeable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::resizeable", ...args: any[]): void
    connect(sigName: "notify::skip-taskbar", callback: (...args: any[]) => void): number
    on(sigName: "notify::skip-taskbar", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::skip-taskbar", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::skip-taskbar", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::skip-taskbar", ...args: any[]): void
    connect(sigName: "notify::title", callback: (...args: any[]) => void): number
    on(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::urgent", callback: (...args: any[]) => void): number
    on(sigName: "notify::urgent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::urgent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::urgent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::urgent", ...args: any[]): void
    connect(sigName: "notify::user-time", callback: (...args: any[]) => void): number
    on(sigName: "notify::user-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::user-time", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::user-time", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::user-time", ...args: any[]): void
    connect(sigName: "notify::window-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::window-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::window-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::window-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::window-type", ...args: any[]): void
    connect(sigName: "notify::wm-class", callback: (...args: any[]) => void): number
    on(sigName: "notify::wm-class", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::wm-class", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::wm-class", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::wm-class", ...args: any[]): void
    connect(sigName: "notify::xwindow", callback: (...args: any[]) => void): number
    on(sigName: "notify::xwindow", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::xwindow", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::xwindow", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::xwindow", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * A display-agnostic abstraction for a window.
 * 
 * #MetaWindow is the core abstraction in Mutter of a window. It has the
 * properties you'd expect, such as a title, whether it's fullscreen,
 * has decorations, etc.
 * 
 * Since a lot of different kinds of windows exist, each window also a
 * [enum`Meta`.WindowType] which denotes which kind of window we're exactly dealing
 * with. For example, one expects slightly different behaviour from a dialog
 * than a "normal" window. The type of a window can be queried with
 * [method`Meta`.Window.get_window_type].
 * 
 * Common API for windows include:
 * 
 * - Minimizing: [method`Meta`.Window.minimize] / [method`Meta`.Window.unminimize]
 * - Maximizing: [method`Meta`.Window.maximize] / [method`Meta`.Window.unmaximize]
 * - Fullscreen: [method`Meta`.Window.make_fullscreen] / [method`Meta`.Window.unmake_fullscreen]
 *               / [method`Meta`.Window.is_fullscreen]
 * 
 * Each #MetaWindow is part of either one or all [class`Meta`.Workspace]s of the
 * desktop. You can activate a window on a certain workspace using
 * [method`Meta`.Window.activate_with_workspace], and query on which workspace it is
 * located using [method`Meta`.Window.located_on_workspace]. The workspace it is part
 * of can be obtained using [method`Meta`.Window.get_workspace].
 * 
 * Each display protocol should make a subclass to be compatible with that
 * protocols' specifics, for example #MetaWindowX11 and #MetaWindowWayland.
 * This is independent of the protocol that the client uses, which is modeled
 * using the [enum`Meta`.WindowClientType] enum.
 * 
 * To integrate within the Clutter scene graph, which deals with the actual
 * rendering, each #MetaWindow will be part of a [class`Meta`.WindowActor].
 * @class 
 */
export class Window extends GObject.Object {

    // Own properties of Meta-13.Meta.Window

    static name: string

    // Constructors of Meta-13.Meta.Window

    constructor(config?: Window.ConstructorProperties) 
    _init(config?: Window.ConstructorProperties): void
}

export module WindowActor {

    // Signal callback interfaces

    /**
     * Signal callback interface for `damaged`
     */
    export interface DamagedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `effects-completed`
     */
    export interface EffectsCompletedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `first-frame`
     */
    export interface FirstFrameSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `thawed`
     */
    export interface ThawedSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Clutter.Animatable.ConstructorProperties, Clutter.Container.ConstructorProperties, Clutter.Scriptable.ConstructorProperties, Clutter.Actor.ConstructorProperties {

        // Own constructor properties of Meta-13.Meta.WindowActor

        metaWindow?: Window | null
    }

}

export interface WindowActor extends Atk.ImplementorIface, Clutter.Animatable, Clutter.Container, Clutter.Scriptable {

    // Own properties of Meta-13.Meta.WindowActor

    readonly metaWindow: Window
    __gtype__: number

    // Own fields of Meta-13.Meta.WindowActor

    parentInstance: Clutter.Actor

    // Owm methods of Meta-13.Meta.WindowActor

    /**
     * Freezes the #MetaWindowActor, which inhibits updates and geometry
     * changes of the window. This property is refcounted, so make sure
     * to call meta_window_actor_thaw() the exact same amount of times
     * as this function to allow updates again.
     */
    freeze(): void
    /**
     * Flattens the layers of `self` into one ARGB32 image by alpha blending
     * the images, and returns the flattened image.
     * @param clip A clipping rectangle, to help prevent extra processing. In the case that the clipping rectangle is partially or fully outside the bounds of the actor, the rectangle will be clipped.
     * @returns a new cairo surface to be freed with cairo_surface_destroy().
     */
    getImage(clip: Mtk.Rectangle | null): cairo.Surface | null
    /**
     * Gets the #MetaWindow object that the the #MetaWindowActor is displaying
     * @returns the displayed #MetaWindow
     */
    getMetaWindow(): Window | null
    /**
     * Gets the ClutterActor that is used to display the contents of the window,
     * or NULL if no texture is shown yet, because the window is not mapped.
     * @returns the #ClutterActor for the contents
     */
    getTexture(): ShapedTexture | null
    /**
     * Gets whether the X window that the actor was displaying has been destroyed
     * @returns %TRUE when the window is destroyed, otherwise %FALSE
     */
    isDestroyed(): boolean
    paintToContent(clip: Mtk.Rectangle | null): Clutter.Content | null
    syncVisibility(): void
    /**
     * Thaws/unfreezes the #MetaWindowActor to allow updates and geometry
     * changes after a window was frozen using meta_window_actor_freeze().
     */
    thaw(): void

    // Own signals of Meta-13.Meta.WindowActor

    connect(sigName: "damaged", callback: WindowActor.DamagedSignalCallback): number
    on(sigName: "damaged", callback: WindowActor.DamagedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "damaged", callback: WindowActor.DamagedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "damaged", callback: WindowActor.DamagedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "damaged", ...args: any[]): void
    connect(sigName: "effects-completed", callback: WindowActor.EffectsCompletedSignalCallback): number
    on(sigName: "effects-completed", callback: WindowActor.EffectsCompletedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "effects-completed", callback: WindowActor.EffectsCompletedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "effects-completed", callback: WindowActor.EffectsCompletedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "effects-completed", ...args: any[]): void
    connect(sigName: "first-frame", callback: WindowActor.FirstFrameSignalCallback): number
    on(sigName: "first-frame", callback: WindowActor.FirstFrameSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "first-frame", callback: WindowActor.FirstFrameSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "first-frame", callback: WindowActor.FirstFrameSignalCallback): NodeJS.EventEmitter
    emit(sigName: "first-frame", ...args: any[]): void
    connect(sigName: "thawed", callback: WindowActor.ThawedSignalCallback): number
    on(sigName: "thawed", callback: WindowActor.ThawedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "thawed", callback: WindowActor.ThawedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "thawed", callback: WindowActor.ThawedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "thawed", ...args: any[]): void

    // Class property signals of Meta-13.Meta.WindowActor

    connect(sigName: "notify::meta-window", callback: (...args: any[]) => void): number
    on(sigName: "notify::meta-window", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::meta-window", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::meta-window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::meta-window", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::actions", callback: (...args: any[]) => void): number
    on(sigName: "notify::actions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::actions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::actions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::actions", ...args: any[]): void
    connect(sigName: "notify::allocation", callback: (...args: any[]) => void): number
    on(sigName: "notify::allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::allocation", ...args: any[]): void
    connect(sigName: "notify::background-color", callback: (...args: any[]) => void): number
    on(sigName: "notify::background-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::background-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::background-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::background-color", ...args: any[]): void
    connect(sigName: "notify::background-color-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::background-color-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::background-color-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::background-color-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::background-color-set", ...args: any[]): void
    connect(sigName: "notify::child-transform", callback: (...args: any[]) => void): number
    on(sigName: "notify::child-transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::child-transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::child-transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::child-transform", ...args: any[]): void
    connect(sigName: "notify::child-transform-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::child-transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::child-transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::child-transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::child-transform-set", ...args: any[]): void
    connect(sigName: "notify::clip-rect", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip-rect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip-rect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip-rect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip-rect", ...args: any[]): void
    connect(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip-to-allocation", ...args: any[]): void
    connect(sigName: "notify::color-state", callback: (...args: any[]) => void): number
    on(sigName: "notify::color-state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::color-state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::color-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::color-state", ...args: any[]): void
    connect(sigName: "notify::constraints", callback: (...args: any[]) => void): number
    on(sigName: "notify::constraints", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::constraints", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::constraints", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::constraints", ...args: any[]): void
    connect(sigName: "notify::content", callback: (...args: any[]) => void): number
    on(sigName: "notify::content", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::content-box", callback: (...args: any[]) => void): number
    on(sigName: "notify::content-box", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content-box", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content-box", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content-box", ...args: any[]): void
    connect(sigName: "notify::content-gravity", callback: (...args: any[]) => void): number
    on(sigName: "notify::content-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content-gravity", ...args: any[]): void
    connect(sigName: "notify::content-repeat", callback: (...args: any[]) => void): number
    on(sigName: "notify::content-repeat", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content-repeat", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content-repeat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content-repeat", ...args: any[]): void
    connect(sigName: "notify::effect", callback: (...args: any[]) => void): number
    on(sigName: "notify::effect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::effect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::effect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::effect", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (...args: any[]) => void): number
    on(sigName: "notify::first-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::first-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fixed-position-set", ...args: any[]): void
    connect(sigName: "notify::fixed-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::fixed-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fixed-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fixed-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fixed-x", ...args: any[]): void
    connect(sigName: "notify::fixed-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::fixed-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fixed-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fixed-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fixed-y", ...args: any[]): void
    connect(sigName: "notify::has-clip", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-clip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-clip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-clip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-clip", ...args: any[]): void
    connect(sigName: "notify::has-pointer", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-pointer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-pointer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-pointer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-pointer", ...args: any[]): void
    connect(sigName: "notify::height", callback: (...args: any[]) => void): number
    on(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (...args: any[]) => void): number
    on(sigName: "notify::last-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::last-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (...args: any[]) => void): number
    on(sigName: "notify::layout-manager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::layout-manager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::magnification-filter", callback: (...args: any[]) => void): number
    on(sigName: "notify::magnification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::magnification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::magnification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::magnification-filter", ...args: any[]): void
    connect(sigName: "notify::mapped", callback: (...args: any[]) => void): number
    on(sigName: "notify::mapped", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mapped", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mapped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mapped", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-left", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-left", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-right", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-right", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::min-height", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-height", ...args: any[]): void
    connect(sigName: "notify::min-height-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-height-set", ...args: any[]): void
    connect(sigName: "notify::min-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-width", ...args: any[]): void
    connect(sigName: "notify::min-width-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-width-set", ...args: any[]): void
    connect(sigName: "notify::minification-filter", callback: (...args: any[]) => void): number
    on(sigName: "notify::minification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::minification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::minification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::minification-filter", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::natural-height", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-height", ...args: any[]): void
    connect(sigName: "notify::natural-height-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-height-set", ...args: any[]): void
    connect(sigName: "notify::natural-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-width", ...args: any[]): void
    connect(sigName: "notify::natural-width-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-width-set", ...args: any[]): void
    connect(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void): number
    on(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::offscreen-redirect", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (...args: any[]) => void): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::pivot-point", callback: (...args: any[]) => void): number
    on(sigName: "notify::pivot-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pivot-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pivot-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pivot-point", ...args: any[]): void
    connect(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pivot-point-z", ...args: any[]): void
    connect(sigName: "notify::position", callback: (...args: any[]) => void): number
    on(sigName: "notify::position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::reactive", callback: (...args: any[]) => void): number
    on(sigName: "notify::reactive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::reactive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::reactive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::reactive", ...args: any[]): void
    connect(sigName: "notify::realized", callback: (...args: any[]) => void): number
    on(sigName: "notify::realized", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::realized", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::realized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::realized", ...args: any[]): void
    connect(sigName: "notify::request-mode", callback: (...args: any[]) => void): number
    on(sigName: "notify::request-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::request-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::request-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::request-mode", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-angle-x", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-angle-y", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-angle-z", ...args: any[]): void
    connect(sigName: "notify::scale-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-x", ...args: any[]): void
    connect(sigName: "notify::scale-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-y", ...args: any[]): void
    connect(sigName: "notify::scale-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-z", ...args: any[]): void
    connect(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::show-on-set-parent", ...args: any[]): void
    connect(sigName: "notify::size", callback: (...args: any[]) => void): number
    on(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::text-direction", callback: (...args: any[]) => void): number
    on(sigName: "notify::text-direction", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::text-direction", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::text-direction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::text-direction", ...args: any[]): void
    connect(sigName: "notify::transform", callback: (...args: any[]) => void): number
    on(sigName: "notify::transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transform", ...args: any[]): void
    connect(sigName: "notify::transform-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transform-set", ...args: any[]): void
    connect(sigName: "notify::translation-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::translation-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::translation-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::translation-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::translation-x", ...args: any[]): void
    connect(sigName: "notify::translation-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::translation-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::translation-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::translation-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::translation-y", ...args: any[]): void
    connect(sigName: "notify::translation-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::translation-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::translation-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::translation-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::translation-z", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (...args: any[]) => void): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width", callback: (...args: any[]) => void): number
    on(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::x", callback: (...args: any[]) => void): number
    on(sigName: "notify::x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x", ...args: any[]): void
    connect(sigName: "notify::x-align", callback: (...args: any[]) => void): number
    on(sigName: "notify::x-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x-align", ...args: any[]): void
    connect(sigName: "notify::x-expand", callback: (...args: any[]) => void): number
    on(sigName: "notify::x-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x-expand", ...args: any[]): void
    connect(sigName: "notify::y", callback: (...args: any[]) => void): number
    on(sigName: "notify::y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y", ...args: any[]): void
    connect(sigName: "notify::y-align", callback: (...args: any[]) => void): number
    on(sigName: "notify::y-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y-align", ...args: any[]): void
    connect(sigName: "notify::y-expand", callback: (...args: any[]) => void): number
    on(sigName: "notify::y-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y-expand", ...args: any[]): void
    connect(sigName: "notify::z-position", callback: (...args: any[]) => void): number
    on(sigName: "notify::z-position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::z-position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::z-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::z-position", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * An actor representing a top-level window in the scene graph
 * 
 * #MetaWindowActor is a #ClutterActor that adds a notion of a window to the
 * Clutter scene graph. It contains a #MetaWindow which provides the windowing
 * API, and the #MetaCompositor that handles it.  For the actual content of the
 * window, it contains a #MetaSurfaceActor.
 * 
 * #MetaWindowActor takes care of the rendering features you need for your
 * window. For example, it will take the windows' requested opacity and use
 * that for clutter_actor_set_opacity(). Furthermore, it will also draw a
 * shadow around the window (using #MetaShadow) and deal with synchronization
 * between events of the window and the actual render loop. See
 * MetaWindowActor::first-frame for an example of the latter.
 * @class 
 */
export class WindowActor extends Clutter.Actor {

    // Own properties of Meta-13.Meta.WindowActor

    static name: string

    // Constructors of Meta-13.Meta.WindowActor

    constructor(config?: WindowActor.ConstructorProperties) 
    _init(config?: WindowActor.ConstructorProperties): void
}

export module WindowGroup {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Clutter.Animatable.ConstructorProperties, Clutter.Container.ConstructorProperties, Clutter.Scriptable.ConstructorProperties, Clutter.Actor.ConstructorProperties {
    }

}

export interface WindowGroup extends Atk.ImplementorIface, Clutter.Animatable, Clutter.Container, Clutter.Scriptable {

    // Own properties of Meta-13.Meta.WindowGroup

    __gtype__: number

    // Class property signals of Meta-13.Meta.WindowGroup

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::actions", callback: (...args: any[]) => void): number
    on(sigName: "notify::actions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::actions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::actions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::actions", ...args: any[]): void
    connect(sigName: "notify::allocation", callback: (...args: any[]) => void): number
    on(sigName: "notify::allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::allocation", ...args: any[]): void
    connect(sigName: "notify::background-color", callback: (...args: any[]) => void): number
    on(sigName: "notify::background-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::background-color", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::background-color", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::background-color", ...args: any[]): void
    connect(sigName: "notify::background-color-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::background-color-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::background-color-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::background-color-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::background-color-set", ...args: any[]): void
    connect(sigName: "notify::child-transform", callback: (...args: any[]) => void): number
    on(sigName: "notify::child-transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::child-transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::child-transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::child-transform", ...args: any[]): void
    connect(sigName: "notify::child-transform-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::child-transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::child-transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::child-transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::child-transform-set", ...args: any[]): void
    connect(sigName: "notify::clip-rect", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip-rect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip-rect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip-rect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip-rect", ...args: any[]): void
    connect(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void): number
    on(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::clip-to-allocation", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::clip-to-allocation", ...args: any[]): void
    connect(sigName: "notify::color-state", callback: (...args: any[]) => void): number
    on(sigName: "notify::color-state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::color-state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::color-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::color-state", ...args: any[]): void
    connect(sigName: "notify::constraints", callback: (...args: any[]) => void): number
    on(sigName: "notify::constraints", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::constraints", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::constraints", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::constraints", ...args: any[]): void
    connect(sigName: "notify::content", callback: (...args: any[]) => void): number
    on(sigName: "notify::content", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::content-box", callback: (...args: any[]) => void): number
    on(sigName: "notify::content-box", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content-box", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content-box", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content-box", ...args: any[]): void
    connect(sigName: "notify::content-gravity", callback: (...args: any[]) => void): number
    on(sigName: "notify::content-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content-gravity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content-gravity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content-gravity", ...args: any[]): void
    connect(sigName: "notify::content-repeat", callback: (...args: any[]) => void): number
    on(sigName: "notify::content-repeat", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content-repeat", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content-repeat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content-repeat", ...args: any[]): void
    connect(sigName: "notify::effect", callback: (...args: any[]) => void): number
    on(sigName: "notify::effect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::effect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::effect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::effect", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (...args: any[]) => void): number
    on(sigName: "notify::first-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::first-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::first-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fixed-position-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fixed-position-set", ...args: any[]): void
    connect(sigName: "notify::fixed-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::fixed-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fixed-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fixed-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fixed-x", ...args: any[]): void
    connect(sigName: "notify::fixed-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::fixed-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::fixed-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::fixed-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::fixed-y", ...args: any[]): void
    connect(sigName: "notify::has-clip", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-clip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-clip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-clip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-clip", ...args: any[]): void
    connect(sigName: "notify::has-pointer", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-pointer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-pointer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-pointer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-pointer", ...args: any[]): void
    connect(sigName: "notify::height", callback: (...args: any[]) => void): number
    on(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (...args: any[]) => void): number
    on(sigName: "notify::last-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::last-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::last-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (...args: any[]) => void): number
    on(sigName: "notify::layout-manager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::layout-manager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::layout-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::magnification-filter", callback: (...args: any[]) => void): number
    on(sigName: "notify::magnification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::magnification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::magnification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::magnification-filter", ...args: any[]): void
    connect(sigName: "notify::mapped", callback: (...args: any[]) => void): number
    on(sigName: "notify::mapped", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mapped", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mapped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mapped", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-left", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-left", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-right", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-right", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::min-height", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-height", ...args: any[]): void
    connect(sigName: "notify::min-height-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-height-set", ...args: any[]): void
    connect(sigName: "notify::min-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-width", ...args: any[]): void
    connect(sigName: "notify::min-width-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::min-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::min-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::min-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::min-width-set", ...args: any[]): void
    connect(sigName: "notify::minification-filter", callback: (...args: any[]) => void): number
    on(sigName: "notify::minification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::minification-filter", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::minification-filter", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::minification-filter", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::natural-height", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-height", ...args: any[]): void
    connect(sigName: "notify::natural-height-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-height-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-height-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-height-set", ...args: any[]): void
    connect(sigName: "notify::natural-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-width", ...args: any[]): void
    connect(sigName: "notify::natural-width-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::natural-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::natural-width-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::natural-width-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::natural-width-set", ...args: any[]): void
    connect(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void): number
    on(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::offscreen-redirect", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::offscreen-redirect", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (...args: any[]) => void): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::pivot-point", callback: (...args: any[]) => void): number
    on(sigName: "notify::pivot-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pivot-point", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pivot-point", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pivot-point", ...args: any[]): void
    connect(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pivot-point-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pivot-point-z", ...args: any[]): void
    connect(sigName: "notify::position", callback: (...args: any[]) => void): number
    on(sigName: "notify::position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::reactive", callback: (...args: any[]) => void): number
    on(sigName: "notify::reactive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::reactive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::reactive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::reactive", ...args: any[]): void
    connect(sigName: "notify::realized", callback: (...args: any[]) => void): number
    on(sigName: "notify::realized", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::realized", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::realized", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::realized", ...args: any[]): void
    connect(sigName: "notify::request-mode", callback: (...args: any[]) => void): number
    on(sigName: "notify::request-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::request-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::request-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::request-mode", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-angle-x", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-angle-y", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rotation-angle-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rotation-angle-z", ...args: any[]): void
    connect(sigName: "notify::scale-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-x", ...args: any[]): void
    connect(sigName: "notify::scale-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-y", ...args: any[]): void
    connect(sigName: "notify::scale-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-z", ...args: any[]): void
    connect(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::show-on-set-parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::show-on-set-parent", ...args: any[]): void
    connect(sigName: "notify::size", callback: (...args: any[]) => void): number
    on(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::text-direction", callback: (...args: any[]) => void): number
    on(sigName: "notify::text-direction", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::text-direction", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::text-direction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::text-direction", ...args: any[]): void
    connect(sigName: "notify::transform", callback: (...args: any[]) => void): number
    on(sigName: "notify::transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transform", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transform", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transform", ...args: any[]): void
    connect(sigName: "notify::transform-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::transform-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::transform-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::transform-set", ...args: any[]): void
    connect(sigName: "notify::translation-x", callback: (...args: any[]) => void): number
    on(sigName: "notify::translation-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::translation-x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::translation-x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::translation-x", ...args: any[]): void
    connect(sigName: "notify::translation-y", callback: (...args: any[]) => void): number
    on(sigName: "notify::translation-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::translation-y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::translation-y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::translation-y", ...args: any[]): void
    connect(sigName: "notify::translation-z", callback: (...args: any[]) => void): number
    on(sigName: "notify::translation-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::translation-z", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::translation-z", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::translation-z", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (...args: any[]) => void): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width", callback: (...args: any[]) => void): number
    on(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::x", callback: (...args: any[]) => void): number
    on(sigName: "notify::x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x", ...args: any[]): void
    connect(sigName: "notify::x-align", callback: (...args: any[]) => void): number
    on(sigName: "notify::x-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x-align", ...args: any[]): void
    connect(sigName: "notify::x-expand", callback: (...args: any[]) => void): number
    on(sigName: "notify::x-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::x-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::x-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::x-expand", ...args: any[]): void
    connect(sigName: "notify::y", callback: (...args: any[]) => void): number
    on(sigName: "notify::y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y", ...args: any[]): void
    connect(sigName: "notify::y-align", callback: (...args: any[]) => void): number
    on(sigName: "notify::y-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y-align", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y-align", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y-align", ...args: any[]): void
    connect(sigName: "notify::y-expand", callback: (...args: any[]) => void): number
    on(sigName: "notify::y-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::y-expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::y-expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::y-expand", ...args: any[]): void
    connect(sigName: "notify::z-position", callback: (...args: any[]) => void): number
    on(sigName: "notify::z-position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::z-position", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::z-position", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::z-position", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class WindowGroup extends Clutter.Actor {

    // Own properties of Meta-13.Meta.WindowGroup

    static name: string

    // Constructors of Meta-13.Meta.WindowGroup

    constructor(config?: WindowGroup.ConstructorProperties) 
    _init(config?: WindowGroup.ConstructorProperties): void
}

export module Workspace {

    // Signal callback interfaces

    /**
     * Signal callback interface for `window-added`
     */
    export interface WindowAddedSignalCallback {
        (object: Window): void
    }

    /**
     * Signal callback interface for `window-removed`
     */
    export interface WindowRemovedSignalCallback {
        (object: Window): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Workspace {

    // Own properties of Meta-13.Meta.Workspace

    readonly active: boolean
    readonly nWindows: number
    readonly workspaceIndex: number
    __gtype__: number

    // Owm methods of Meta-13.Meta.Workspace

    activate(timestamp: number): void
    /**
     * Switches to `workspace` and possibly activates the window `focus_this`.
     * 
     * The window `focus_this` is activated by calling meta_window_activate()
     * which will unminimize it and transient parents, raise it and give it
     * the focus.
     * 
     * If a window is currently being moved by the user, it will be
     * moved to `workspace`.
     * 
     * The advantage of calling this function instead of meta_workspace_activate()
     * followed by meta_window_activate() is that it happens as a unit, so
     * no other window gets focused first before `focus_this`.
     * @param focusThis the #MetaWindow to be focused, or %NULL
     * @param timestamp timestamp for `focus_this`
     */
    activateWithFocus(focusThis: Window, timestamp: number): void
    /**
     * Gets the #MetaDisplay that the workspace is part of.
     * @returns the #MetaDisplay for the workspace
     */
    getDisplay(): Display
    /**
     * Calculate and retrieve the workspace that is next to `workspace,`
     * according to `direction` and the current workspace layout, as set
     * by meta_screen_override_workspace_layout().
     * @param direction a #MetaMotionDirection, relative to `workspace`
     * @returns the workspace next to @workspace, or   @workspace itself if the neighbor would be outside the layout
     */
    getNeighbor(direction: MotionDirection): Workspace
    /**
     * Stores the work area in `area`.
     */
    getWorkAreaAllMonitors(): /* area */ Mtk.Rectangle
    /**
     * Stores the work area for `which_monitor` on `workspace`
     * in `area`.
     * @param whichMonitor a monitor index
     */
    getWorkAreaForMonitor(whichMonitor: number): /* area */ Mtk.Rectangle
    index(): number
    /**
     * Gets windows contained on the workspace, including workspace->windows
     * and also sticky windows. Override-redirect windows are not included.
     * @returns the list of windows.
     */
    listWindows(): Window[]
    /**
     * Sets a list of struts that will be used in addition to the struts
     * of the windows in the workspace when computing the work area of
     * the workspace.
     * @param struts list of #MetaStrut
     */
    setBuiltinStruts(struts: Strut[]): void

    // Own signals of Meta-13.Meta.Workspace

    connect(sigName: "window-added", callback: Workspace.WindowAddedSignalCallback): number
    on(sigName: "window-added", callback: Workspace.WindowAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "window-added", callback: Workspace.WindowAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "window-added", callback: Workspace.WindowAddedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "window-added", ...args: any[]): void
    connect(sigName: "window-removed", callback: Workspace.WindowRemovedSignalCallback): number
    on(sigName: "window-removed", callback: Workspace.WindowRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "window-removed", callback: Workspace.WindowRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "window-removed", callback: Workspace.WindowRemovedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "window-removed", ...args: any[]): void

    // Class property signals of Meta-13.Meta.Workspace

    connect(sigName: "notify::active", callback: (...args: any[]) => void): number
    on(sigName: "notify::active", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::active", ...args: any[]): void
    connect(sigName: "notify::n-windows", callback: (...args: any[]) => void): number
    on(sigName: "notify::n-windows", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::n-windows", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::n-windows", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::n-windows", ...args: any[]): void
    connect(sigName: "notify::workspace-index", callback: (...args: any[]) => void): number
    on(sigName: "notify::workspace-index", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::workspace-index", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::workspace-index", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::workspace-index", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Workspaces
 * 
 * A workspace is a set of windows which all live on the same
 * screen.  (You may also see the name "desktop" around the place,
 * which is the EWMH's name for the same thing.)  Only one workspace
 * of a screen may be active at once; all windows on all other workspaces
 * are unmapped.
 * @class 
 */
export class Workspace extends GObject.Object {

    // Own properties of Meta-13.Meta.Workspace

    static name: string

    // Constructors of Meta-13.Meta.Workspace

    constructor(config?: Workspace.ConstructorProperties) 
    _init(config?: Workspace.ConstructorProperties): void
}

export module WorkspaceManager {

    // Signal callback interfaces

    /**
     * Signal callback interface for `active-workspace-changed`
     */
    export interface ActiveWorkspaceChangedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `showing-desktop-changed`
     */
    export interface ShowingDesktopChangedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `workspace-added`
     */
    export interface WorkspaceAddedSignalCallback {
        (object: number): void
    }

    /**
     * Signal callback interface for `workspace-removed`
     */
    export interface WorkspaceRemovedSignalCallback {
        (object: number): void
    }

    /**
     * Signal callback interface for `workspace-switched`
     */
    export interface WorkspaceSwitchedSignalCallback {
        (object: number, p0: number, p1: MotionDirection): void
    }

    /**
     * Signal callback interface for `workspaces-reordered`
     */
    export interface WorkspacesReorderedSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface WorkspaceManager {

    // Own properties of Meta-13.Meta.WorkspaceManager

    readonly layoutColumns: number
    readonly layoutRows: number
    readonly nWorkspaces: number
    __gtype__: number

    // Owm methods of Meta-13.Meta.WorkspaceManager

    /**
     * Append a new workspace to the workspace manager and (optionally) switch to that
     * display.
     * @param activate %TRUE if the workspace should be switched to after creation
     * @param timestamp if switching to a new workspace, timestamp to be used when   focusing a window on the new workspace. (Doesn't hurt to pass a valid   timestamp when available even if not switching workspaces.)
     * @returns the newly appended workspace.
     */
    appendNewWorkspace(activate: boolean, timestamp: number): Workspace
    getActiveWorkspace(): Workspace
    getActiveWorkspaceIndex(): number
    getNWorkspaces(): number
    /**
     * Gets the workspace object for one of a workspace manager's workspaces given the workspace
     * index. It's valid to call this function with an out-of-range index and it
     * will robustly return %NULL.
     * @param index index of one of the display's workspaces
     * @returns the workspace object with specified   index, or %NULL if the index is out of range.
     */
    getWorkspaceByIndex(index: number): Workspace | null
    /**
     * Explicitly set the layout of workspaces. Once this has been called, the contents of the
     * _NET_DESKTOP_LAYOUT property on the root window are completely ignored.
     * @param startingCorner the corner at which the first workspace is found
     * @param verticalLayout if %TRUE the workspaces are laid out in columns rather than rows
     * @param nRows number of rows of workspaces, or -1 to determine the number of rows from   `n_columns` and the total number of workspaces
     * @param nColumns number of columns of workspaces, or -1 to determine the number of columns from   `n_rows` and the total number of workspaces
     */
    overrideWorkspaceLayout(startingCorner: DisplayCorner, verticalLayout: boolean, nRows: number, nColumns: number): void
    removeWorkspace(workspace: Workspace, timestamp: number): void
    /**
     * Reorder a workspace to a new index. If the workspace is currently active
     * the "active-workspace-changed" signal will be emitted.
     * If the workspace's index is the same as `new_index` or the workspace
     * will not be found in the list, this function will return.
     * 
     * Calling this function will also emit the "workspaces-reordered" signal.
     * @param workspace a #MetaWorkspace to reorder
     * @param newIndex the new index of the passed workspace
     */
    reorderWorkspace(workspace: Workspace, newIndex: number): void

    // Own signals of Meta-13.Meta.WorkspaceManager

    connect(sigName: "active-workspace-changed", callback: WorkspaceManager.ActiveWorkspaceChangedSignalCallback): number
    on(sigName: "active-workspace-changed", callback: WorkspaceManager.ActiveWorkspaceChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "active-workspace-changed", callback: WorkspaceManager.ActiveWorkspaceChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "active-workspace-changed", callback: WorkspaceManager.ActiveWorkspaceChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "active-workspace-changed", ...args: any[]): void
    connect(sigName: "showing-desktop-changed", callback: WorkspaceManager.ShowingDesktopChangedSignalCallback): number
    on(sigName: "showing-desktop-changed", callback: WorkspaceManager.ShowingDesktopChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "showing-desktop-changed", callback: WorkspaceManager.ShowingDesktopChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "showing-desktop-changed", callback: WorkspaceManager.ShowingDesktopChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "showing-desktop-changed", ...args: any[]): void
    connect(sigName: "workspace-added", callback: WorkspaceManager.WorkspaceAddedSignalCallback): number
    on(sigName: "workspace-added", callback: WorkspaceManager.WorkspaceAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "workspace-added", callback: WorkspaceManager.WorkspaceAddedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "workspace-added", callback: WorkspaceManager.WorkspaceAddedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "workspace-added", ...args: any[]): void
    connect(sigName: "workspace-removed", callback: WorkspaceManager.WorkspaceRemovedSignalCallback): number
    on(sigName: "workspace-removed", callback: WorkspaceManager.WorkspaceRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "workspace-removed", callback: WorkspaceManager.WorkspaceRemovedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "workspace-removed", callback: WorkspaceManager.WorkspaceRemovedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "workspace-removed", ...args: any[]): void
    connect(sigName: "workspace-switched", callback: WorkspaceManager.WorkspaceSwitchedSignalCallback): number
    on(sigName: "workspace-switched", callback: WorkspaceManager.WorkspaceSwitchedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "workspace-switched", callback: WorkspaceManager.WorkspaceSwitchedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "workspace-switched", callback: WorkspaceManager.WorkspaceSwitchedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "workspace-switched", p0: number, p1: MotionDirection, ...args: any[]): void
    connect(sigName: "workspaces-reordered", callback: WorkspaceManager.WorkspacesReorderedSignalCallback): number
    on(sigName: "workspaces-reordered", callback: WorkspaceManager.WorkspacesReorderedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "workspaces-reordered", callback: WorkspaceManager.WorkspacesReorderedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "workspaces-reordered", callback: WorkspaceManager.WorkspacesReorderedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "workspaces-reordered", ...args: any[]): void

    // Class property signals of Meta-13.Meta.WorkspaceManager

    connect(sigName: "notify::layout-columns", callback: (...args: any[]) => void): number
    on(sigName: "notify::layout-columns", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::layout-columns", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::layout-columns", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::layout-columns", ...args: any[]): void
    connect(sigName: "notify::layout-rows", callback: (...args: any[]) => void): number
    on(sigName: "notify::layout-rows", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::layout-rows", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::layout-rows", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::layout-rows", ...args: any[]): void
    connect(sigName: "notify::n-workspaces", callback: (...args: any[]) => void): number
    on(sigName: "notify::n-workspaces", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::n-workspaces", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::n-workspaces", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::n-workspaces", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class WorkspaceManager extends GObject.Object {

    // Own properties of Meta-13.Meta.WorkspaceManager

    static name: string

    // Constructors of Meta-13.Meta.WorkspaceManager

    constructor(config?: WorkspaceManager.ConstructorProperties) 
    _init(config?: WorkspaceManager.ConstructorProperties): void
}

export module X11Display {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface X11Display {

    // Own properties of Meta-13.Meta.X11Display

    __gtype__: number

    // Owm methods of Meta-13.Meta.X11Display

    redirectWindows(display: Display): void
    setStageInputRegion(region: xfixes.XserverRegion): void

    // Class property signals of Meta-13.Meta.X11Display

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * Mutter X display handler
 * 
 * The X11 display is represented as a #MetaX11Display struct.
 * @class 
 */
export class X11Display extends GObject.Object {

    // Own properties of Meta-13.Meta.X11Display

    static name: string

    // Constructors of Meta-13.Meta.X11Display

    constructor(config?: X11Display.ConstructorProperties) 
    _init(config?: X11Display.ConstructorProperties): void
}

export interface BackendClass {
}

export abstract class BackendClass {

    // Own properties of Meta-13.Meta.BackendClass

    static name: string
}

export interface BackgroundActorClass {

    // Own fields of Meta-13.Meta.BackgroundActorClass

    parentClass: Clutter.ActorClass
}

export abstract class BackgroundActorClass {

    // Own properties of Meta-13.Meta.BackgroundActorClass

    static name: string
}

export interface BackgroundClass {

    // Own fields of Meta-13.Meta.BackgroundClass

    parentClass: GObject.ObjectClass
}

export abstract class BackgroundClass {

    // Own properties of Meta-13.Meta.BackgroundClass

    static name: string
}

export interface BackgroundContentClass {

    // Own fields of Meta-13.Meta.BackgroundContentClass

    parentClass: GObject.ObjectClass
}

export abstract class BackgroundContentClass {

    // Own properties of Meta-13.Meta.BackgroundContentClass

    static name: string
}

export interface BackgroundGroupClass {

    // Own fields of Meta-13.Meta.BackgroundGroupClass

    parentClass: Clutter.ActorClass
}

export abstract class BackgroundGroupClass {

    // Own properties of Meta-13.Meta.BackgroundGroupClass

    static name: string
}

export interface BackgroundImageCacheClass {

    // Own fields of Meta-13.Meta.BackgroundImageCacheClass

    parentClass: GObject.ObjectClass
}

export abstract class BackgroundImageCacheClass {

    // Own properties of Meta-13.Meta.BackgroundImageCacheClass

    static name: string
}

export interface BackgroundImageClass {

    // Own fields of Meta-13.Meta.BackgroundImageClass

    parentClass: GObject.ObjectClass
}

export abstract class BackgroundImageClass {

    // Own properties of Meta-13.Meta.BackgroundImageClass

    static name: string
}

export interface BarrierClass {

    // Own fields of Meta-13.Meta.BarrierClass

    parentClass: GObject.ObjectClass
}

export abstract class BarrierClass {

    // Own properties of Meta-13.Meta.BarrierClass

    static name: string
}

export interface BarrierEvent {

    // Own fields of Meta-13.Meta.BarrierEvent

    /**
     * A unique integer ID identifying a
     * consecutive series of motions at or along the barrier
     * @field 
     */
    eventId: number
    /**
     * Server time, in milliseconds, since the last event
     * sent for this barrier
     * @field 
     */
    dt: number
    /**
     * Server time, in milliseconds
     * @field 
     */
    time: number
    /**
     * The cursor X position in screen coordinates
     * @field 
     */
    x: number
    /**
     * The cursor Y position in screen coordinates.
     * @field 
     */
    y: number
    /**
     * If the cursor hadn't been constrained, the delta
     * of X movement past the barrier, in screen coordinates
     * @field 
     */
    dx: number
    /**
     * If the cursor hadn't been constrained, the delta
     * of X movement past the barrier, in screen coordinates
     * @field 
     */
    dy: number
    /**
     * A boolean flag, %TRUE if this event generated
     * by the pointer leaving the barrier as a result of a client
     * calling meta_barrier_release() (will be set only for
     * MetaBarrier::leave signals)
     * @field 
     */
    released: boolean
    /**
     * A boolean flag, %TRUE if the pointer was grabbed
     * at the time this event was sent
     * @field 
     */
    grabbed: boolean
}

export class BarrierEvent {

    // Own properties of Meta-13.Meta.BarrierEvent

    static name: string
}

export interface ButtonLayout {

    // Own fields of Meta-13.Meta.ButtonLayout

    leftButtons: ButtonFunction[]
    leftButtonsHasSpacer: boolean[]
    rightButtons: ButtonFunction[]
    rightButtonsHasSpacer: boolean[]
}

export class ButtonLayout {

    // Own properties of Meta-13.Meta.ButtonLayout

    static name: string
}

export interface CloseDialogInterface {

    // Own fields of Meta-13.Meta.CloseDialogInterface

    parentIface: GObject.TypeInterface
    show: (dialog: CloseDialog) => void
    hide: (dialog: CloseDialog) => void
    focus: (dialog: CloseDialog) => void
}

export abstract class CloseDialogInterface {

    // Own properties of Meta-13.Meta.CloseDialogInterface

    static name: string
}

export interface CompositorClass {
}

export abstract class CompositorClass {

    // Own properties of Meta-13.Meta.CompositorClass

    static name: string
}

export interface ContextClass {
}

export abstract class ContextClass {

    // Own properties of Meta-13.Meta.ContextClass

    static name: string
}

export interface CursorTrackerClass {
}

export abstract class CursorTrackerClass {

    // Own properties of Meta-13.Meta.CursorTrackerClass

    static name: string
}

export interface DisplayClass {
}

export abstract class DisplayClass {

    // Own properties of Meta-13.Meta.DisplayClass

    static name: string
}

export interface DndClass {

    // Own fields of Meta-13.Meta.DndClass

    parentClass: GObject.ObjectClass
}

export abstract class DndClass {

    // Own properties of Meta-13.Meta.DndClass

    static name: string
}

export interface Edge {

    // Own fields of Meta-13.Meta.Edge

    /**
     * #MtkRectangle with the bounds of the edge
     * @field 
     */
    rect: Mtk.Rectangle
    /**
     * Side
     * @field 
     */
    sideType: Side
    /**
     * To what belongs the edge
     * @field 
     */
    edgeType: EdgeType
}

export class Edge {

    // Own properties of Meta-13.Meta.Edge

    static name: string
}

export interface Frame {
}

export class Frame {

    // Own properties of Meta-13.Meta.Frame

    static name: string
}

export interface FrameBorder {

    // Own fields of Meta-13.Meta.FrameBorder

    /**
     * left border
     * @field 
     */
    left: number
    /**
     * right border
     * @field 
     */
    right: number
    /**
     * top border
     * @field 
     */
    top: number
    /**
     * bottom border
     * @field 
     */
    bottom: number
}

export class FrameBorder {

    // Own properties of Meta-13.Meta.FrameBorder

    static name: string
}

export interface FrameBorders {

    // Own fields of Meta-13.Meta.FrameBorders

    /**
     * inner visible portion of frame border
     * @field 
     */
    visible: FrameBorder
    /**
     * outer invisible portion of frame border
     * @field 
     */
    invisible: FrameBorder
    /**
     * sum of the two borders above
     * @field 
     */
    total: FrameBorder

    // Owm methods of Meta-13.Meta.FrameBorders

    clear(): void
}

export class FrameBorders {

    // Own properties of Meta-13.Meta.FrameBorders

    static name: string
}

export interface Group {

    // Owm methods of Meta-13.Meta.Group

    getSize(): number
    getStartupId(): string
    listWindows(): Window[]
    updateLayers(): void
}

/**
 * Mutter window groups
 * @record 
 */
export class Group {

    // Own properties of Meta-13.Meta.Group

    static name: string
}

export interface IdleMonitorClass {

    // Own fields of Meta-13.Meta.IdleMonitorClass

    parentClass: GObject.ObjectClass
}

export abstract class IdleMonitorClass {

    // Own properties of Meta-13.Meta.IdleMonitorClass

    static name: string
}

export interface InhibitShortcutsDialogInterface {

    // Own fields of Meta-13.Meta.InhibitShortcutsDialogInterface

    parentIface: GObject.TypeInterface
    show: (dialog: InhibitShortcutsDialog) => void
    hide: (dialog: InhibitShortcutsDialog) => void
}

export abstract class InhibitShortcutsDialogInterface {

    // Own properties of Meta-13.Meta.InhibitShortcutsDialogInterface

    static name: string
}

export interface KeyBinding {

    // Owm methods of Meta-13.Meta.KeyBinding

    getMask(): number
    getModifiers(): Clutter.ModifierType
    getName(): string
    isBuiltin(): boolean
    isReversed(): boolean
}

export class KeyBinding {

    // Own properties of Meta-13.Meta.KeyBinding

    static name: string
}

export interface LatersClass {

    // Own fields of Meta-13.Meta.LatersClass

    parentClass: GObject.ObjectClass
}

export abstract class LatersClass {

    // Own properties of Meta-13.Meta.LatersClass

    static name: string
}

export interface LaunchContextClass {

    // Own fields of Meta-13.Meta.LaunchContextClass

    parentClass: Gio.AppLaunchContextClass
}

export abstract class LaunchContextClass {

    // Own properties of Meta-13.Meta.LaunchContextClass

    static name: string
}

export interface MonitorManagerClass {
}

export abstract class MonitorManagerClass {

    // Own properties of Meta-13.Meta.MonitorManagerClass

    static name: string
}

export interface MultiTextureClass {

    // Own fields of Meta-13.Meta.MultiTextureClass

    parentClass: GObject.ObjectClass
}

export abstract class MultiTextureClass {

    // Own properties of Meta-13.Meta.MultiTextureClass

    static name: string
}

export interface PluginClass {

    // Own fields of Meta-13.Meta.PluginClass

    start: (plugin: Plugin) => void
    minimize: (plugin: Plugin, actor: WindowActor) => void
    unminimize: (plugin: Plugin, actor: WindowActor) => void
    sizeChanged: (plugin: Plugin, actor: WindowActor) => void
    sizeChange: (plugin: Plugin, actor: WindowActor, whichChange: SizeChange, oldFrameRect: Mtk.Rectangle, oldBufferRect: Mtk.Rectangle) => void
    map: (plugin: Plugin, actor: WindowActor) => void
    destroy: (plugin: Plugin, actor: WindowActor) => void
    switchWorkspace: (plugin: Plugin, from: number, to: number, direction: MotionDirection) => void
    showTilePreview: (plugin: Plugin, window: Window, tileRect: Mtk.Rectangle, tileMonitorNumber: number) => void
    hideTilePreview: (plugin: Plugin) => void
    showWindowMenu: (plugin: Plugin, window: Window, menu: WindowMenuType, x: number, y: number) => void
    showWindowMenuForRect: (plugin: Plugin, window: Window, menu: WindowMenuType, rect: Mtk.Rectangle) => void
    killWindowEffects: (plugin: Plugin, actor: WindowActor) => void
    killSwitchWorkspace: (plugin: Plugin) => void
    xeventFilter: (plugin: Plugin, event: xlib.XEvent) => boolean
    keybindingFilter: (plugin: Plugin, binding: KeyBinding) => boolean
    confirmDisplayChange: (plugin: Plugin) => void
    pluginInfo: (plugin: Plugin) => PluginInfo
    locatePointer: (plugin: Plugin) => void
}

export abstract class PluginClass {

    // Own properties of Meta-13.Meta.PluginClass

    static name: string
}

export interface PluginInfo {

    // Own fields of Meta-13.Meta.PluginInfo

    /**
     * name of the plugin
     * @field 
     */
    name: string
    /**
     * version of the plugin
     * @field 
     */
    version: string
    /**
     * author of the plugin
     * @field 
     */
    author: string
    /**
     * license of the plugin
     * @field 
     */
    license: string
    /**
     * description of the plugin
     * @field 
     */
    description: string
}

export class PluginInfo {

    // Own properties of Meta-13.Meta.PluginInfo

    static name: string
}

export interface RemoteAccessControllerClass {

    // Own fields of Meta-13.Meta.RemoteAccessControllerClass

    parentClass: GObject.ObjectClass
}

export abstract class RemoteAccessControllerClass {

    // Own properties of Meta-13.Meta.RemoteAccessControllerClass

    static name: string
}

export interface RemoteAccessHandleClass {

    // Own fields of Meta-13.Meta.RemoteAccessHandleClass

    parentClass: GObject.ObjectClass
    stop: (handle: RemoteAccessHandle) => void
}

export abstract class RemoteAccessHandleClass {

    // Own properties of Meta-13.Meta.RemoteAccessHandleClass

    static name: string
}

export interface SelectionClass {

    // Own fields of Meta-13.Meta.SelectionClass

    parentClass: GObject.ObjectClass
}

export abstract class SelectionClass {

    // Own properties of Meta-13.Meta.SelectionClass

    static name: string
}

export interface SelectionSourceClass {

    // Own fields of Meta-13.Meta.SelectionSourceClass

    parentClass: GObject.ObjectClass
    activated: (source: SelectionSource) => void
    deactivated: (source: SelectionSource) => void
    getMimetypes: (source: SelectionSource) => string[]
    readAsync: (source: SelectionSource, mimetype: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null) => void
    readFinish: (source: SelectionSource, result: Gio.AsyncResult) => Gio.InputStream
}

export abstract class SelectionSourceClass {

    // Own properties of Meta-13.Meta.SelectionSourceClass

    static name: string
}

export interface SelectionSourceMemoryClass {

    // Own fields of Meta-13.Meta.SelectionSourceMemoryClass

    parentClass: SelectionSourceClass
}

export abstract class SelectionSourceMemoryClass {

    // Own properties of Meta-13.Meta.SelectionSourceMemoryClass

    static name: string
}

export interface Settings {

    // Owm methods of Meta-13.Meta.Settings

    getFontDpi(): number
    getUiScalingFactor(): number
}

export class Settings {

    // Own properties of Meta-13.Meta.Settings

    static name: string
}

export interface Shadow {

    // Owm methods of Meta-13.Meta.Shadow

    /**
     * Computes the bounds of the pixels that will be affected by
     * meta_shadow_paint()
     * @param windowX x position of the region to paint a shadow for
     * @param windowY y position of the region to paint a shadow for
     * @param windowWidth actual width of the region to paint a shadow for
     * @param windowHeight actual height of the region to paint a shadow for
     * @param bounds 
     */
    getBounds(windowX: number, windowY: number, windowWidth: number, windowHeight: number, bounds: Mtk.Rectangle): void
    /**
     * Paints the shadow at the given position, for the specified actual
     * size of the region.
     * 
     * Since a #MetaShadow can be shared between different sizes with
     * the same extracted [struct`Meta`.WindowShape] the size needs to be passed in here.
     * @param framebuffer 
     * @param windowX x position of the region to paint a shadow for
     * @param windowY y position of the region to paint a shadow for
     * @param windowWidth actual width of the region to paint a shadow for
     * @param windowHeight actual height of the region to paint a shadow for
     * @param opacity 
     * @param clip if non-%NULL specifies the visible portion   of the shadow.
     * @param clipStrictly if %TRUE, drawing will be clipped strictly   to `clip,` otherwise, it will be only used to optimize   drawing.
     */
    paint(framebuffer: Cogl.Framebuffer, windowX: number, windowY: number, windowWidth: number, windowHeight: number, opacity: number, clip: cairo.Region | null, clipStrictly: boolean): void
    ref(): Shadow
    unref(): void
}

/**
 * Holds a shadow texture along with information about how to
 * apply that texture to draw a window texture.
 * 
 * E.g., it knows how big the unscaled borders are on each
 * side of the shadow texture.
 * @record 
 */
export class Shadow {

    // Own properties of Meta-13.Meta.Shadow

    static name: string
}

export interface ShadowFactoryClass {

    // Own fields of Meta-13.Meta.ShadowFactoryClass

    parentClass: GObject.ObjectClass
}

export abstract class ShadowFactoryClass {

    // Own properties of Meta-13.Meta.ShadowFactoryClass

    static name: string
}

export interface ShadowParams {

    // Own fields of Meta-13.Meta.ShadowParams

    /**
     * the radius (gaussian standard deviation) of the shadow
     * @field 
     */
    radius: number
    /**
     * if >= 0, the shadow doesn't extend above the top
     *  of the shape, and fades out over the given number of pixels
     * @field 
     */
    topFade: number
    /**
     * horizontal offset of the shadow with respect to the
     *  shape being shadowed, in pixels
     * @field 
     */
    xOffset: number
    /**
     * vertical offset of the shadow with respect to the
     *  shape being shadowed, in pixels
     * @field 
     */
    yOffset: number
    /**
     * opacity of the shadow, from 0 to 255
     * @field 
     */
    opacity: number
}

/**
 * Information about how to draw a particular style of shadow.
 * @record 
 */
export class ShadowParams {

    // Own properties of Meta-13.Meta.ShadowParams

    static name: string
}

export interface ShapedTextureClass {

    // Own fields of Meta-13.Meta.ShapedTextureClass

    parentClass: GObject.ObjectClass
}

export abstract class ShapedTextureClass {

    // Own properties of Meta-13.Meta.ShapedTextureClass

    static name: string
}

export interface SoundPlayerClass {

    // Own fields of Meta-13.Meta.SoundPlayerClass

    parentClass: GObject.ObjectClass
}

export abstract class SoundPlayerClass {

    // Own properties of Meta-13.Meta.SoundPlayerClass

    static name: string
}

export interface StageClass {

    // Own fields of Meta-13.Meta.StageClass

    parentClass: Clutter.StageClass
}

export abstract class StageClass {

    // Own properties of Meta-13.Meta.StageClass

    static name: string
}

export interface StartupNotificationClass {

    // Own fields of Meta-13.Meta.StartupNotificationClass

    parentClass: GObject.ObjectClass
}

export abstract class StartupNotificationClass {

    // Own properties of Meta-13.Meta.StartupNotificationClass

    static name: string
}

export interface StartupSequenceClass {
}

export abstract class StartupSequenceClass {

    // Own properties of Meta-13.Meta.StartupSequenceClass

    static name: string
}

export interface Strut {

    // Own fields of Meta-13.Meta.Strut

    /**
     * #MtkRectangle the #MetaStrut is on
     * @field 
     */
    rect: Mtk.Rectangle
    /**
     * #MetaSide the #MetaStrut is on
     * @field 
     */
    side: Side
}

export class Strut {

    // Own properties of Meta-13.Meta.Strut

    static name: string
}

export interface WaylandClientClass {

    // Own fields of Meta-13.Meta.WaylandClientClass

    parentClass: GObject.ObjectClass
}

export abstract class WaylandClientClass {

    // Own properties of Meta-13.Meta.WaylandClientClass

    static name: string
}

export interface WaylandCompositorClass {

    // Own fields of Meta-13.Meta.WaylandCompositorClass

    parentClass: GObject.ObjectClass
}

export abstract class WaylandCompositorClass {

    // Own properties of Meta-13.Meta.WaylandCompositorClass

    static name: string
}

export interface WindowActorClass {
}

export abstract class WindowActorClass {

    // Own properties of Meta-13.Meta.WindowActorClass

    static name: string
}

export interface WindowClass {
}

export abstract class WindowClass {

    // Own properties of Meta-13.Meta.WindowClass

    static name: string
}

export interface WindowGroupClass {

    // Own fields of Meta-13.Meta.WindowGroupClass

    parentClass: Clutter.ActorClass
}

export abstract class WindowGroupClass {

    // Own properties of Meta-13.Meta.WindowGroupClass

    static name: string
}

export interface WindowShape {

    // Owm methods of Meta-13.Meta.WindowShape

    equal(shapeB: WindowShape): boolean
    getBorders(borderTop: number, borderRight: number, borderBottom: number, borderLeft: number): void
    hash(): number
    ref(): WindowShape
    /**
     * Converts the shape to to a cairo_region_t using the given width
     * and height for the central scaled region.
     * @param centerWidth size of the central region horizontally
     * @param centerHeight size of the central region vertically
     * @returns a newly created region
     */
    toRegion(centerWidth: number, centerHeight: number): cairo.Region
    unref(): void
}

/**
 * Represents a 9-sliced region with borders on all sides that
 * are unscaled, and a constant central region that is scaled.
 * 
 * For example, the regions representing two windows that are rounded rectangles,
 * with the same corner radius but different sizes, have the same MetaWindowShape.
 * 
 * #MetaWindowShape is designed to be used as part of a hash table key, so has
 * efficient hash and equal functions.
 * @record 
 */
export class WindowShape {

    // Own properties of Meta-13.Meta.WindowShape

    static name: string

    // Constructors of Meta-13.Meta.WindowShape

    constructor(region: cairo.Region) 
    static new(region: cairo.Region): WindowShape
}

export interface WorkspaceClass {
}

export abstract class WorkspaceClass {

    // Own properties of Meta-13.Meta.WorkspaceClass

    static name: string
}

export interface WorkspaceManagerClass {

    // Own fields of Meta-13.Meta.WorkspaceManagerClass

    parentClass: GObject.ObjectClass
}

export abstract class WorkspaceManagerClass {

    // Own properties of Meta-13.Meta.WorkspaceManagerClass

    static name: string
}

export interface X11DisplayClass {

    // Own fields of Meta-13.Meta.X11DisplayClass

    parentClass: GObject.ObjectClass
}

export abstract class X11DisplayClass {

    // Own properties of Meta-13.Meta.X11DisplayClass

    static name: string
}

// END