
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './meta-12-ambient.d.ts';
import './meta-12-import.d.ts';
/**
 * Meta-12
 */

import type xlib from '@girs/xlib-2.0';
import type xfixes from '@girs/xfixes-4.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GDesktopEnums from '@girs/gdesktopenums-3.0';
import type CoglPango from '@girs/coglpango-12';
import type PangoCairo from '@girs/pangocairo-1.0';
import type cairo from '@girs/cairo-1.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type Cogl from '@girs/cogl-12';
import type Graphene from '@girs/graphene-1.0';
import type GL from '@girs/gl-1.0';
import type Clutter from '@girs/clutter-12';
import type Json from '@girs/json-1.0';
import type Atk from '@girs/atk-1.0';

/**
 * Function a window button can have.  Note, you can't add stuff here
 * without extending the theme format to draw a new function and
 * breaking all existing themes.
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
export enum PadActionType {
    BUTTON,
    RING,
    STRIP,
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
     * title-bar font
     */
    TITLEBAR_FONT,
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
export enum FrameFlags {
    /**
     * frame allows delete
     */
    ALLOWS_DELETE,
    /**
     * frame allows menu
     */
    ALLOWS_MENU,
    /**
     * frame allows minimize
     */
    ALLOWS_MINIMIZE,
    /**
     * frame allows maximize
     */
    ALLOWS_MAXIMIZE,
    /**
     * frame allows vertical resize
     */
    ALLOWS_VERTICAL_RESIZE,
    /**
     * frame allows horizontal resize
     */
    ALLOWS_HORIZONTAL_RESIZE,
    /**
     * frame has focus
     */
    HAS_FOCUS,
    /**
     * frame is stuck
     */
    STUCK,
    /**
     * frame is maximized
     */
    MAXIMIZED,
    /**
     * frame allows move
     */
    ALLOWS_MOVE,
    /**
     * frame allows fullscreen
     */
    FULLSCREEN,
    /**
     * frame is above
     */
    ABOVE,
    /**
     * frame is tiled to the left
     */
    TILED_LEFT,
    /**
     * frame is tiled to the right
     */
    TILED_RIGHT,
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
    IGNORE_AUTOREPEAT,
    /**
     * not grabbed automatically
     */
    NO_AUTO_GRAB,
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
export const DEFAULT_ICON_NAME: string | null
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
 * @param accelerator_mods Accelerator modifier mask.
 * @param accelerator_key Accelerator keyval.
 * @returns The accelerator name.
 */
export function accelerator_name(accelerator_mods: Clutter.ModifierType, accelerator_key: number): string | null
export function add_clutter_debug_flags(debug_flags: Clutter.DebugFlag, draw_flags: Clutter.DrawDebugFlag, pick_flags: Clutter.PickDebugFlag): void
export function add_debug_paint_flag(flag: DebugPaintFlag): void
/**
 * Ensure log messages for the given topic `topic`
 * will be printed.
 * @param topic Topic for which logging will be started
 */
export function add_verbose_topic(topic: DebugTopic): void
export function clutter_init(): void
/**
 * Create a context.
 * @param name Human readable name of display server or window manager
 * @returns A new context instance.
 */
export function create_context(name: string | null): Context
/**
 * Disables unredirection, can be useful in situations where having
 * unredirected windows is undesirable like when recording a video.
 * @param display a #MetaDisplay
 */
export function disable_unredirect_for_display(display: Display): void
/**
 * Enables unredirection which reduces the overhead for apps like games.
 * @param display a #MetaDisplay
 */
export function enable_unredirect_for_display(display: Display): void
export function exit(code: ExitCode): void
export function external_binding_name_for_action(keybinding_action: number): string | null
export function focus_stage_window(display: Display, timestamp: number): void
/**
 * Converts a frame type enum value to the name string that would
 * appear in the theme definition file.
 * @param type a #MetaFrameType
 * @returns the string value
 */
export function frame_type_to_string(type: FrameType): string | null
export function g_utf8_strndup(src: string | null, n: number): string | null
export function get_clutter_debug_flags(): [ /* debug_flags */ Clutter.DebugFlag, /* draw_flags */ Clutter.DrawDebugFlag, /* pick_flags */ Clutter.PickDebugFlag ]
export function get_debug_paint_flags(): DebugPaintFlag
export function get_feedback_group_for_display(display: Display): Clutter.Actor
export function get_locale_direction(): LocaleDirection
export function get_stage_for_display(display: Display): Clutter.Actor
export function get_top_window_group_for_display(display: Display): Clutter.Actor
export function get_window_actors(display: Display): Clutter.Actor[]
export function get_window_group_for_display(display: Display): Clutter.Actor
export function gravity_to_string(gravity: Gravity): string | null
/**
 * Returns %TRUE if this instance of Mutter comes from Mutter
 * restarting itself (for example to enable/disable stereo.)
 * See meta_restart(). If this is the case, any startup visuals
 * or animations should be suppressed.
 */
export function is_restart(): boolean
export function is_topic_enabled(topic: DebugTopic): boolean
export function is_verbose(): boolean
export function is_wayland_compositor(): boolean
/**
 * Allows users to register a custom handler for a
 * builtin key binding.
 * @param name The name of the keybinding to set
 * @param handler The new handler function
 * @returns %TRUE if the binding known as @name was found, %FALSE otherwise.
 */
export function keybindings_set_custom_handler(name: string | null, handler: KeyHandlerFunc | null): boolean
export function pop_no_msg_prefix(): void
export function preference_to_string(pref: Preference): string | null
export function prefs_bell_is_audible(): boolean
export function prefs_change_workspace_name(i: number, name: string | null): void
export function prefs_get_action_double_click_titlebar(): GDesktopEnums.TitlebarAction
export function prefs_get_action_middle_click_titlebar(): GDesktopEnums.TitlebarAction
export function prefs_get_action_right_click_titlebar(): GDesktopEnums.TitlebarAction
export function prefs_get_attach_modal_dialogs(): boolean
export function prefs_get_auto_maximize(): boolean
export function prefs_get_auto_raise(): boolean
export function prefs_get_auto_raise_delay(): number
export function prefs_get_button_layout(): /* button_layout */ ButtonLayout
export function prefs_get_center_new_windows(): boolean
export function prefs_get_check_alive_timeout(): number
export function prefs_get_compositing_manager(): boolean
export function prefs_get_cursor_size(): number
export function prefs_get_cursor_theme(): string | null
export function prefs_get_disable_workarounds(): boolean
export function prefs_get_drag_threshold(): number
export function prefs_get_draggable_border_width(): number
export function prefs_get_dynamic_workspaces(): boolean
export function prefs_get_edge_tiling(): boolean
export function prefs_get_focus_change_on_pointer_rest(): boolean
export function prefs_get_focus_mode(): GDesktopEnums.FocusMode
export function prefs_get_focus_new_windows(): GDesktopEnums.FocusNewWindows
export function prefs_get_force_fullscreen(): boolean
export function prefs_get_gnome_accessibility(): boolean
export function prefs_get_gnome_animations(): boolean
export function prefs_get_keybinding_action(name: string | null): KeyBindingAction
export function prefs_get_keybinding_label(name: string | null): string | null
export function prefs_get_mouse_button_menu(): number
export function prefs_get_mouse_button_mods(): Clutter.ModifierType
export function prefs_get_mouse_button_resize(): number
export function prefs_get_num_workspaces(): number
export function prefs_get_raise_on_click(): boolean
export function prefs_get_show_fallback_app_menu(): boolean
export function prefs_get_titlebar_font(): Pango.FontDescription
export function prefs_get_visual_bell(): boolean
export function prefs_get_visual_bell_type(): GDesktopEnums.VisualBellType
export function prefs_get_workspace_name(i: number): string | null
export function prefs_get_workspaces_only_on_primary(): boolean
export function prefs_set_force_fullscreen(whether: boolean): void
export function prefs_set_num_workspaces(n_workspaces: number): void
export function prefs_set_show_fallback_app_menu(whether: boolean): void
export function push_no_msg_prefix(): void
export function rect(x: number, y: number, width: number, height: number): Rectangle
export function remove_clutter_debug_flags(debug_flags: Clutter.DebugFlag, draw_flags: Clutter.DrawDebugFlag, pick_flags: Clutter.PickDebugFlag): void
export function remove_debug_paint_flag(flag: DebugPaintFlag): void
/**
 * Stop printing log messages for the given topic `topic`.  Note
 * that this method does not stack with meta_add_verbose_topic();
 * i.e. if two calls to meta_add_verbose_topic() for the same
 * topic are made, one call to meta_remove_verbose_topic() will
 * remove it.
 * @param topic Topic for which logging will be stopped
 */
export function remove_verbose_topic(topic: DebugTopic): void
/**
 * Starts the process of restarting the compositor. Note that Mutter's
 * involvement here is to make the restart visually smooth for the
 * user - it cannot itself safely reexec a program that embeds libmuttter.
 * So in order for this to work, the compositor must handle two
 * signals -  MetaDisplay::show-restart-message, to display the
 * message passed here on the Clutter stage, and ::restart to actually
 * reexec the compositor.
 * @param message message to display to the user, or %NULL
 * @param context a #MetaContext
 */
export function restart(message: string | null, context: Context): void
export function topic_to_string(topic: DebugTopic): string | null
export function unsigned_long_equal(v1: any | null, v2: any | null): number
export function unsigned_long_hash(v: any | null): number
export function x11_error_trap_pop(x11_display: X11Display): void
export function x11_error_trap_pop_with_return(x11_display: X11Display): number
export function x11_error_trap_push(x11_display: X11Display): void
export interface IdleMonitorWatchFunc {
    (monitor: IdleMonitor, watch_id: number): void
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
        ($obj: CloseDialog, object: CloseDialogResponse): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Meta-12.Meta.CloseDialog

        window?: Window | null
    }

}

export interface CloseDialog {

    // Own properties of Meta-12.Meta.CloseDialog

    readonly window: Window

    // Owm methods of Meta-12.Meta.CloseDialog

    /**
     * Call whenever `dialog` should receive keyboard focus,
     * usually when the window would.
     */
    focus(): void
    /**
     * Hides the close dialog.
     */
    hide(): void
    /**
     * Returns whether `dialog` is currently visible.
     * @returns #TRUE if @dialog is visible.
     */
    is_visible(): boolean
    /**
     * Responds and closes the dialog. To be called by #MetaCloseDialog
     * implementations.
     * @param response a #MetaCloseDialogResponse
     */
    response(response: CloseDialogResponse): void
    /**
     * Shows the close dialog.
     */
    show(): void

    // Own virtual methods of Meta-12.Meta.CloseDialog

    /**
     * Call whenever `dialog` should receive keyboard focus,
     * usually when the window would.
     * @virtual 
     */
    vfunc_focus(): void
    /**
     * Hides the close dialog.
     * @virtual 
     */
    vfunc_hide(): void
    /**
     * Shows the close dialog.
     * @virtual 
     */
    vfunc_show(): void

    // Own signals of Meta-12.Meta.CloseDialog

    connect(sigName: "response", callback: CloseDialog.ResponseSignalCallback): number
    connect_after(sigName: "response", callback: CloseDialog.ResponseSignalCallback): number
    emit(sigName: "response", object: CloseDialogResponse, ...args: any[]): void

    // Class property signals of Meta-12.Meta.CloseDialog

    connect(sigName: "notify::window", callback: (($obj: CloseDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: CloseDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class CloseDialog extends GObject.Object {

    // Own properties of Meta-12.Meta.CloseDialog

    static name: string
    static $gtype: GObject.GType<CloseDialog>

    // Constructors of Meta-12.Meta.CloseDialog

    constructor(config?: CloseDialog.ConstructorProperties) 
    _init(config?: CloseDialog.ConstructorProperties): void
}

export module InhibitShortcutsDialog {

    // Signal callback interfaces

    /**
     * Signal callback interface for `response`
     */
    export interface ResponseSignalCallback {
        ($obj: InhibitShortcutsDialog, object: InhibitShortcutsDialogResponse): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Meta-12.Meta.InhibitShortcutsDialog

        window?: Window | null
    }

}

export interface InhibitShortcutsDialog {

    // Own properties of Meta-12.Meta.InhibitShortcutsDialog

    readonly window: Window

    // Owm methods of Meta-12.Meta.InhibitShortcutsDialog

    /**
     * Hides the inhibit shortcuts dialog.
     */
    hide(): void
    /**
     * Responds and closes the dialog. To be called by #MetaInhibitShortcutsDialog
     * implementations.
     * @param response a #MetaInhibitShortcutsDialogResponse
     */
    response(response: InhibitShortcutsDialogResponse): void
    /**
     * Shows the inhibit shortcuts dialog.
     */
    show(): void

    // Own virtual methods of Meta-12.Meta.InhibitShortcutsDialog

    /**
     * Hides the inhibit shortcuts dialog.
     * @virtual 
     */
    vfunc_hide(): void
    /**
     * Shows the inhibit shortcuts dialog.
     * @virtual 
     */
    vfunc_show(): void

    // Own signals of Meta-12.Meta.InhibitShortcutsDialog

    connect(sigName: "response", callback: InhibitShortcutsDialog.ResponseSignalCallback): number
    connect_after(sigName: "response", callback: InhibitShortcutsDialog.ResponseSignalCallback): number
    emit(sigName: "response", object: InhibitShortcutsDialogResponse, ...args: any[]): void

    // Class property signals of Meta-12.Meta.InhibitShortcutsDialog

    connect(sigName: "notify::window", callback: (($obj: InhibitShortcutsDialog, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: InhibitShortcutsDialog, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class InhibitShortcutsDialog extends GObject.Object {

    // Own properties of Meta-12.Meta.InhibitShortcutsDialog

    static name: string
    static $gtype: GObject.GType<InhibitShortcutsDialog>

    // Constructors of Meta-12.Meta.InhibitShortcutsDialog

    constructor(config?: InhibitShortcutsDialog.ConstructorProperties) 
    _init(config?: InhibitShortcutsDialog.ConstructorProperties): void
}

export module Backend {

    // Signal callback interfaces


    /**
     * Signal callback interface for `keymap-changed`
     */
    export interface KeymapChangedSignalCallback {
        ($obj: Backend): void
    }

    /**
     * Signal callback interface for `keymap-layout-group-changed`
     */
    export interface KeymapLayoutGroupChangedSignalCallback {
        ($obj: Backend, object: number): void
    }

    /**
     * Signal callback interface for `last-device-changed`
     */
    export interface LastDeviceChangedSignalCallback {
        ($obj: Backend, object: Clutter.InputDevice): void
    }

    /**
     * Signal callback interface for `lid-is-closed-changed`
     */
    export interface LidIsClosedChangedSignalCallback {
        ($obj: Backend, object: boolean): void
    }

    /**
     * Signal callback interface for `prepare-shutdown`
     */
    export interface PrepareShutdownSignalCallback {
        ($obj: Backend): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Gio.Initable.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Meta-12.Meta.Backend

        context?: Context | null
    }

}

export interface Backend extends Gio.Initable {

    // Own properties of Meta-12.Meta.Backend

    readonly capabilities: BackendCapabilities
    readonly context: Context

    // Own fields of Meta-12.Meta.Backend

    parent_instance: GObject.Object

    // Owm methods of Meta-12.Meta.Backend

    get_capabilities(): BackendCapabilities
    get_context(): Context
    get_core_idle_monitor(): IdleMonitor
    /**
     * Gets the global #MetaDnd that's managed by this backend.
     * @returns the #MetaDnd
     */
    get_dnd(): Dnd
    get_monitor_manager(): MonitorManager
    get_remote_access_controller(): RemoteAccessController
    /**
     * Gets the global #ClutterStage that's managed by this backend.
     * @returns the #ClutterStage
     */
    get_stage(): Clutter.Actor
    is_headless(): boolean
    is_rendering_hardware_accelerated(): boolean
    lock_layout_group(idx: number): void
    set_keymap(layouts: string | null, variants: string | null, options: string | null): void

    // Own signals of Meta-12.Meta.Backend

    connect(sigName: "gpu-added", callback: (...args: any[]) => void): number
    connect_after(sigName: "gpu-added", callback: (...args: any[]) => void): number
    emit(sigName: "gpu-added", gpu: any, ...args: any[]): void
    connect(sigName: "keymap-changed", callback: Backend.KeymapChangedSignalCallback): number
    connect_after(sigName: "keymap-changed", callback: Backend.KeymapChangedSignalCallback): number
    emit(sigName: "keymap-changed", ...args: any[]): void
    connect(sigName: "keymap-layout-group-changed", callback: Backend.KeymapLayoutGroupChangedSignalCallback): number
    connect_after(sigName: "keymap-layout-group-changed", callback: Backend.KeymapLayoutGroupChangedSignalCallback): number
    emit(sigName: "keymap-layout-group-changed", object: number, ...args: any[]): void
    connect(sigName: "last-device-changed", callback: Backend.LastDeviceChangedSignalCallback): number
    connect_after(sigName: "last-device-changed", callback: Backend.LastDeviceChangedSignalCallback): number
    emit(sigName: "last-device-changed", object: Clutter.InputDevice, ...args: any[]): void
    connect(sigName: "lid-is-closed-changed", callback: Backend.LidIsClosedChangedSignalCallback): number
    connect_after(sigName: "lid-is-closed-changed", callback: Backend.LidIsClosedChangedSignalCallback): number
    emit(sigName: "lid-is-closed-changed", object: boolean, ...args: any[]): void
    connect(sigName: "prepare-shutdown", callback: Backend.PrepareShutdownSignalCallback): number
    connect_after(sigName: "prepare-shutdown", callback: Backend.PrepareShutdownSignalCallback): number
    emit(sigName: "prepare-shutdown", ...args: any[]): void

    // Class property signals of Meta-12.Meta.Backend

    connect(sigName: "notify::capabilities", callback: (($obj: Backend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::capabilities", callback: (($obj: Backend, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::capabilities", ...args: any[]): void
    connect(sigName: "notify::context", callback: (($obj: Backend, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::context", callback: (($obj: Backend, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::context", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Backend extends GObject.Object {

    // Own properties of Meta-12.Meta.Backend

    static name: string
    static $gtype: GObject.GType<Backend>

    // Constructors of Meta-12.Meta.Backend

    constructor(config?: Backend.ConstructorProperties) 
    _init(config?: Backend.ConstructorProperties): void
}

export module Background {

    // Signal callback interfaces

    /**
     * Signal callback interface for `changed`
     */
    export interface ChangedSignalCallback {
        ($obj: Background): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Meta-12.Meta.Background

        meta_display?: Display | null
    }

}

export interface Background {

    // Own properties of Meta-12.Meta.Background

    readonly meta_display: Display

    // Owm methods of Meta-12.Meta.Background

    set_blend(file1: Gio.File, file2: Gio.File, blend_factor: number, style: GDesktopEnums.BackgroundStyle): void
    set_color(color: Clutter.Color): void
    /**
     * Set the background to `file`
     * @param file a #GFile representing the background file
     * @param style the background style to apply
     */
    set_file(file: Gio.File | null, style: GDesktopEnums.BackgroundStyle): void
    set_gradient(shading_direction: GDesktopEnums.BackgroundShading, color: Clutter.Color, second_color: Clutter.Color): void

    // Own signals of Meta-12.Meta.Background

    connect(sigName: "changed", callback: Background.ChangedSignalCallback): number
    connect_after(sigName: "changed", callback: Background.ChangedSignalCallback): number
    emit(sigName: "changed", ...args: any[]): void

    // Class property signals of Meta-12.Meta.Background

    connect(sigName: "notify::meta-display", callback: (($obj: Background, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::meta-display", callback: (($obj: Background, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::meta-display", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * This class handles tracking and painting the root window background.
 * By integrating with #MetaWindowGroup we can avoid painting parts of
 * the background that are obscured by other windows.
 * @class 
 */
export class Background extends GObject.Object {

    // Own properties of Meta-12.Meta.Background

    static name: string
    static $gtype: GObject.GType<Background>

    // Constructors of Meta-12.Meta.Background

    constructor(config?: Background.ConstructorProperties) 
    constructor(display: Display) 
    static new(display: Display): Background
    _init(config?: Background.ConstructorProperties): void
    static refresh_all(): void
}

export module BackgroundActor {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Clutter.Animatable.ConstructorProperties, Clutter.Container.ConstructorProperties, Clutter.Scriptable.ConstructorProperties, Clutter.Actor.ConstructorProperties {

        // Own constructor properties of Meta-12.Meta.BackgroundActor

        meta_display?: Display | null
        monitor?: number | null
    }

}

export interface BackgroundActor extends Atk.ImplementorIface, Clutter.Animatable, Clutter.Container, Clutter.Scriptable {

    // Own properties of Meta-12.Meta.BackgroundActor

    readonly meta_display: Display
    readonly monitor: number

    // Class property signals of Meta-12.Meta.BackgroundActor

    connect(sigName: "notify::meta-display", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::meta-display", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::meta-display", ...args: any[]): void
    connect(sigName: "notify::monitor", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::monitor", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::monitor", ...args: any[]): void
    connect(sigName: "notify::actions", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actions", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::actions", ...args: any[]): void
    connect(sigName: "notify::allocation", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allocation", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::allocation", ...args: any[]): void
    connect(sigName: "notify::background-color", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::background-color", ...args: any[]): void
    connect(sigName: "notify::background-color-set", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color-set", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::background-color-set", ...args: any[]): void
    connect(sigName: "notify::child-transform", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-transform", ...args: any[]): void
    connect(sigName: "notify::child-transform-set", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform-set", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-transform-set", ...args: any[]): void
    connect(sigName: "notify::clip-rect", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-rect", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clip-rect", ...args: any[]): void
    connect(sigName: "notify::clip-to-allocation", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-to-allocation", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clip-to-allocation", ...args: any[]): void
    connect(sigName: "notify::color-state", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::color-state", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::color-state", ...args: any[]): void
    connect(sigName: "notify::constraints", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constraints", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::constraints", ...args: any[]): void
    connect(sigName: "notify::content", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::content-box", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-box", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-box", ...args: any[]): void
    connect(sigName: "notify::content-gravity", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-gravity", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-gravity", ...args: any[]): void
    connect(sigName: "notify::content-repeat", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-repeat", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-repeat", ...args: any[]): void
    connect(sigName: "notify::effect", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::effect", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::effect", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::fixed-position-set", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-position-set", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fixed-position-set", ...args: any[]): void
    connect(sigName: "notify::fixed-x", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-x", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fixed-x", ...args: any[]): void
    connect(sigName: "notify::fixed-y", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-y", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fixed-y", ...args: any[]): void
    connect(sigName: "notify::has-clip", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-clip", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-clip", ...args: any[]): void
    connect(sigName: "notify::has-pointer", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-pointer", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-pointer", ...args: any[]): void
    connect(sigName: "notify::height", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::magnification-filter", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::magnification-filter", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::magnification-filter", ...args: any[]): void
    connect(sigName: "notify::mapped", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mapped", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mapped", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::min-height", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-height", ...args: any[]): void
    connect(sigName: "notify::min-height-set", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height-set", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-height-set", ...args: any[]): void
    connect(sigName: "notify::min-width", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-width", ...args: any[]): void
    connect(sigName: "notify::min-width-set", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width-set", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-width-set", ...args: any[]): void
    connect(sigName: "notify::minification-filter", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::minification-filter", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::minification-filter", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::natural-height", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::natural-height", ...args: any[]): void
    connect(sigName: "notify::natural-height-set", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height-set", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::natural-height-set", ...args: any[]): void
    connect(sigName: "notify::natural-width", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::natural-width", ...args: any[]): void
    connect(sigName: "notify::natural-width-set", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width-set", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::natural-width-set", ...args: any[]): void
    connect(sigName: "notify::offscreen-redirect", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offscreen-redirect", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::offscreen-redirect", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::pivot-point", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pivot-point", ...args: any[]): void
    connect(sigName: "notify::pivot-point-z", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point-z", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pivot-point-z", ...args: any[]): void
    connect(sigName: "notify::position", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::reactive", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reactive", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::reactive", ...args: any[]): void
    connect(sigName: "notify::realized", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::realized", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::realized", ...args: any[]): void
    connect(sigName: "notify::request-mode", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::request-mode", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::request-mode", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-x", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-x", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-angle-x", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-y", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-y", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-angle-y", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-z", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-z", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-angle-z", ...args: any[]): void
    connect(sigName: "notify::scale-x", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-x", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-x", ...args: any[]): void
    connect(sigName: "notify::scale-y", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-y", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-y", ...args: any[]): void
    connect(sigName: "notify::scale-z", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-z", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-z", ...args: any[]): void
    connect(sigName: "notify::show-on-set-parent", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-on-set-parent", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-on-set-parent", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::text-direction", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-direction", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-direction", ...args: any[]): void
    connect(sigName: "notify::transform", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transform", ...args: any[]): void
    connect(sigName: "notify::transform-set", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform-set", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transform-set", ...args: any[]): void
    connect(sigName: "notify::translation-x", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-x", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::translation-x", ...args: any[]): void
    connect(sigName: "notify::translation-y", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-y", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::translation-y", ...args: any[]): void
    connect(sigName: "notify::translation-z", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-z", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::translation-z", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::x", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::x", ...args: any[]): void
    connect(sigName: "notify::x-align", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-align", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::x-align", ...args: any[]): void
    connect(sigName: "notify::x-expand", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-expand", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::x-expand", ...args: any[]): void
    connect(sigName: "notify::y", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::y", ...args: any[]): void
    connect(sigName: "notify::y-align", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-align", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::y-align", ...args: any[]): void
    connect(sigName: "notify::y-expand", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-expand", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::y-expand", ...args: any[]): void
    connect(sigName: "notify::z-position", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::z-position", callback: (($obj: BackgroundActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::z-position", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * This class handles tracking and painting the root window background.
 * By integrating with #MetaWindowGroup we can avoid painting parts of
 * the background that are obscured by other windows.
 * @class 
 */
export class BackgroundActor extends Clutter.Actor {

    // Own properties of Meta-12.Meta.BackgroundActor

    static name: string
    static $gtype: GObject.GType<BackgroundActor>

    // Constructors of Meta-12.Meta.BackgroundActor

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

        // Own constructor properties of Meta-12.Meta.BackgroundContent

        background?: Background | null
        brightness?: number | null
        gradient?: boolean | null
        gradient_height?: number | null
        gradient_max_darkness?: number | null
        meta_display?: Display | null
        monitor?: number | null
        rounded_clip_radius?: number | null
        vignette?: boolean | null
        vignette_sharpness?: number | null
    }

}

export interface BackgroundContent extends Clutter.Content {

    // Own properties of Meta-12.Meta.BackgroundContent

    background: Background
    brightness: number
    gradient: boolean
    gradient_height: number
    gradient_max_darkness: number
    readonly meta_display: Display
    readonly monitor: number
    rounded_clip_radius: number
    vignette: boolean
    vignette_sharpness: number

    // Owm methods of Meta-12.Meta.BackgroundContent

    set_background(background: Background): void
    set_gradient(enabled: boolean, height: number, tone_start: number): void
    /**
     * Sets the bounding clip rectangle of the #MetaBackgroundContent that's used
     * when a rounded clip set via meta_background_content_set_rounded_clip_radius()
     * is in effect, set it to  %NULL to use no bounding clip, rounding the edges
     * of the full texture.
     * @param bounds The new bounding clip rectangle, or %NULL
     */
    set_rounded_clip_bounds(bounds: Graphene.Rect | null): void
    set_rounded_clip_radius(radius: number): void
    set_vignette(enabled: boolean, brightness: number, sharpness: number): void

    // Class property signals of Meta-12.Meta.BackgroundContent

    connect(sigName: "notify::background", callback: (($obj: BackgroundContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background", callback: (($obj: BackgroundContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::background", ...args: any[]): void
    connect(sigName: "notify::brightness", callback: (($obj: BackgroundContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::brightness", callback: (($obj: BackgroundContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::brightness", ...args: any[]): void
    connect(sigName: "notify::gradient", callback: (($obj: BackgroundContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gradient", callback: (($obj: BackgroundContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::gradient", ...args: any[]): void
    connect(sigName: "notify::gradient-height", callback: (($obj: BackgroundContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gradient-height", callback: (($obj: BackgroundContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::gradient-height", ...args: any[]): void
    connect(sigName: "notify::gradient-max-darkness", callback: (($obj: BackgroundContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gradient-max-darkness", callback: (($obj: BackgroundContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::gradient-max-darkness", ...args: any[]): void
    connect(sigName: "notify::meta-display", callback: (($obj: BackgroundContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::meta-display", callback: (($obj: BackgroundContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::meta-display", ...args: any[]): void
    connect(sigName: "notify::monitor", callback: (($obj: BackgroundContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::monitor", callback: (($obj: BackgroundContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::monitor", ...args: any[]): void
    connect(sigName: "notify::rounded-clip-radius", callback: (($obj: BackgroundContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rounded-clip-radius", callback: (($obj: BackgroundContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rounded-clip-radius", ...args: any[]): void
    connect(sigName: "notify::vignette", callback: (($obj: BackgroundContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vignette", callback: (($obj: BackgroundContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vignette", ...args: any[]): void
    connect(sigName: "notify::vignette-sharpness", callback: (($obj: BackgroundContent, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vignette-sharpness", callback: (($obj: BackgroundContent, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vignette-sharpness", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * This class handles tracking and painting the root window background.
 * By integrating with #MetaWindowGroup we can avoid painting parts of
 * the background that are obscured by other windows.
 * @class 
 */
export class BackgroundContent extends GObject.Object {

    // Own properties of Meta-12.Meta.BackgroundContent

    static name: string
    static $gtype: GObject.GType<BackgroundContent>

    // Constructors of Meta-12.Meta.BackgroundContent

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

    // Own fields of Meta-12.Meta.BackgroundGroup

    parent_instance: Clutter.Actor

    // Class property signals of Meta-12.Meta.BackgroundGroup

    connect(sigName: "notify::actions", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actions", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::actions", ...args: any[]): void
    connect(sigName: "notify::allocation", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allocation", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::allocation", ...args: any[]): void
    connect(sigName: "notify::background-color", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::background-color", ...args: any[]): void
    connect(sigName: "notify::background-color-set", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color-set", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::background-color-set", ...args: any[]): void
    connect(sigName: "notify::child-transform", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-transform", ...args: any[]): void
    connect(sigName: "notify::child-transform-set", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform-set", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-transform-set", ...args: any[]): void
    connect(sigName: "notify::clip-rect", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-rect", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clip-rect", ...args: any[]): void
    connect(sigName: "notify::clip-to-allocation", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-to-allocation", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clip-to-allocation", ...args: any[]): void
    connect(sigName: "notify::color-state", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::color-state", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::color-state", ...args: any[]): void
    connect(sigName: "notify::constraints", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constraints", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::constraints", ...args: any[]): void
    connect(sigName: "notify::content", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::content-box", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-box", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-box", ...args: any[]): void
    connect(sigName: "notify::content-gravity", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-gravity", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-gravity", ...args: any[]): void
    connect(sigName: "notify::content-repeat", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-repeat", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-repeat", ...args: any[]): void
    connect(sigName: "notify::effect", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::effect", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::effect", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::fixed-position-set", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-position-set", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fixed-position-set", ...args: any[]): void
    connect(sigName: "notify::fixed-x", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-x", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fixed-x", ...args: any[]): void
    connect(sigName: "notify::fixed-y", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-y", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fixed-y", ...args: any[]): void
    connect(sigName: "notify::has-clip", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-clip", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-clip", ...args: any[]): void
    connect(sigName: "notify::has-pointer", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-pointer", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-pointer", ...args: any[]): void
    connect(sigName: "notify::height", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::magnification-filter", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::magnification-filter", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::magnification-filter", ...args: any[]): void
    connect(sigName: "notify::mapped", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mapped", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mapped", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::min-height", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-height", ...args: any[]): void
    connect(sigName: "notify::min-height-set", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height-set", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-height-set", ...args: any[]): void
    connect(sigName: "notify::min-width", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-width", ...args: any[]): void
    connect(sigName: "notify::min-width-set", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width-set", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-width-set", ...args: any[]): void
    connect(sigName: "notify::minification-filter", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::minification-filter", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::minification-filter", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::natural-height", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::natural-height", ...args: any[]): void
    connect(sigName: "notify::natural-height-set", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height-set", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::natural-height-set", ...args: any[]): void
    connect(sigName: "notify::natural-width", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::natural-width", ...args: any[]): void
    connect(sigName: "notify::natural-width-set", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width-set", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::natural-width-set", ...args: any[]): void
    connect(sigName: "notify::offscreen-redirect", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offscreen-redirect", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::offscreen-redirect", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::pivot-point", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pivot-point", ...args: any[]): void
    connect(sigName: "notify::pivot-point-z", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point-z", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pivot-point-z", ...args: any[]): void
    connect(sigName: "notify::position", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::reactive", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reactive", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::reactive", ...args: any[]): void
    connect(sigName: "notify::realized", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::realized", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::realized", ...args: any[]): void
    connect(sigName: "notify::request-mode", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::request-mode", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::request-mode", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-x", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-x", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-angle-x", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-y", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-y", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-angle-y", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-z", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-z", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-angle-z", ...args: any[]): void
    connect(sigName: "notify::scale-x", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-x", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-x", ...args: any[]): void
    connect(sigName: "notify::scale-y", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-y", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-y", ...args: any[]): void
    connect(sigName: "notify::scale-z", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-z", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-z", ...args: any[]): void
    connect(sigName: "notify::show-on-set-parent", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-on-set-parent", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-on-set-parent", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::text-direction", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-direction", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-direction", ...args: any[]): void
    connect(sigName: "notify::transform", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transform", ...args: any[]): void
    connect(sigName: "notify::transform-set", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform-set", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transform-set", ...args: any[]): void
    connect(sigName: "notify::translation-x", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-x", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::translation-x", ...args: any[]): void
    connect(sigName: "notify::translation-y", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-y", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::translation-y", ...args: any[]): void
    connect(sigName: "notify::translation-z", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-z", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::translation-z", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::x", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::x", ...args: any[]): void
    connect(sigName: "notify::x-align", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-align", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::x-align", ...args: any[]): void
    connect(sigName: "notify::x-expand", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-expand", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::x-expand", ...args: any[]): void
    connect(sigName: "notify::y", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::y", ...args: any[]): void
    connect(sigName: "notify::y-align", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-align", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::y-align", ...args: any[]): void
    connect(sigName: "notify::y-expand", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-expand", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::y-expand", ...args: any[]): void
    connect(sigName: "notify::z-position", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::z-position", callback: (($obj: BackgroundGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::z-position", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class BackgroundGroup extends Clutter.Actor {

    // Own properties of Meta-12.Meta.BackgroundGroup

    static name: string
    static $gtype: GObject.GType<BackgroundGroup>

    // Constructors of Meta-12.Meta.BackgroundGroup

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
        ($obj: BackgroundImage): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface BackgroundImage {

    // Owm methods of Meta-12.Meta.BackgroundImage

    /**
     * This function is a convenience function for checking for success,
     * without having to call meta_background_image_get_texture() and
     * handle the return of a Cogl type.
     * @returns %TRUE if loading completed successfully, otherwise %FALSE
     */
    get_success(): boolean
    get_texture(): Cogl.Texture
    is_loaded(): boolean

    // Own signals of Meta-12.Meta.BackgroundImage

    connect(sigName: "loaded", callback: BackgroundImage.LoadedSignalCallback): number
    connect_after(sigName: "loaded", callback: BackgroundImage.LoadedSignalCallback): number
    emit(sigName: "loaded", ...args: any[]): void

    // Class property signals of Meta-12.Meta.BackgroundImage

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * #MetaBackgroundImage is an object that represents a loaded or loading background image.
 * @class 
 */
export class BackgroundImage extends GObject.Object {

    // Own properties of Meta-12.Meta.BackgroundImage

    static name: string
    static $gtype: GObject.GType<BackgroundImage>

    // Constructors of Meta-12.Meta.BackgroundImage

    constructor(config?: BackgroundImage.ConstructorProperties) 
    _init(config?: BackgroundImage.ConstructorProperties): void
}

export module BackgroundImageCache {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface BackgroundImageCache {

    // Owm methods of Meta-12.Meta.BackgroundImageCache

    /**
     * Loads an image to use as a background, or returns a reference to an
     * image that is already in the process of loading or loaded. In either
     * case, what is returned is a #MetaBackgroundImage which can be dereferenced
     * to get a #CoglTexture. If meta_background_image_is_loaded() returns %TRUE,
     * the background is loaded, otherwise the MetaBackgroundImage::loaded
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

    // Class property signals of Meta-12.Meta.BackgroundImageCache

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * #MetaBackgroundImageCache caches loading of textures for backgrounds; there's actually
 * nothing background specific about it, other than it is tuned to work well for
 * large images as typically are used for backgrounds.
 * @class 
 */
export class BackgroundImageCache extends GObject.Object {

    // Own properties of Meta-12.Meta.BackgroundImageCache

    static name: string
    static $gtype: GObject.GType<BackgroundImageCache>

    // Constructors of Meta-12.Meta.BackgroundImageCache

    constructor(config?: BackgroundImageCache.ConstructorProperties) 
    _init(config?: BackgroundImageCache.ConstructorProperties): void
    static get_default(): BackgroundImageCache
}

export module Barrier {

    // Signal callback interfaces

    /**
     * Signal callback interface for `hit`
     */
    export interface HitSignalCallback {
        ($obj: Barrier, event: BarrierEvent): void
    }

    /**
     * Signal callback interface for `left`
     */
    export interface LeftSignalCallback {
        ($obj: Barrier, event: BarrierEvent): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Gio.Initable.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Meta-12.Meta.Barrier

        backend?: Backend | null
        directions?: BarrierDirection | null
        display?: Display | null
        x1?: number | null
        x2?: number | null
        y1?: number | null
        y2?: number | null
    }

}

export interface Barrier extends Gio.Initable {

    // Own properties of Meta-12.Meta.Barrier

    readonly backend: Backend
    readonly directions: BarrierDirection
    readonly display: Display
    readonly x1: number
    readonly x2: number
    readonly y1: number
    readonly y2: number

    // Own fields of Meta-12.Meta.Barrier

    parent_instance: GObject.Object

    // Owm methods of Meta-12.Meta.Barrier

    destroy(): void
    is_active(): boolean
    /**
     * In XI2.3, pointer barriers provide a feature where they can
     * be temporarily released so that the pointer goes through
     * them. Pass a #MetaBarrierEvent to release the barrier for
     * this event sequence.
     * @param event The event to release the pointer for
     */
    release(event: BarrierEvent): void

    // Own signals of Meta-12.Meta.Barrier

    connect(sigName: "hit", callback: Barrier.HitSignalCallback): number
    connect_after(sigName: "hit", callback: Barrier.HitSignalCallback): number
    emit(sigName: "hit", event: BarrierEvent, ...args: any[]): void
    connect(sigName: "left", callback: Barrier.LeftSignalCallback): number
    connect_after(sigName: "left", callback: Barrier.LeftSignalCallback): number
    emit(sigName: "left", event: BarrierEvent, ...args: any[]): void

    // Class property signals of Meta-12.Meta.Barrier

    connect(sigName: "notify::backend", callback: (($obj: Barrier, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::backend", callback: (($obj: Barrier, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::backend", ...args: any[]): void
    connect(sigName: "notify::directions", callback: (($obj: Barrier, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::directions", callback: (($obj: Barrier, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::directions", ...args: any[]): void
    connect(sigName: "notify::display", callback: (($obj: Barrier, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display", callback: (($obj: Barrier, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::display", ...args: any[]): void
    connect(sigName: "notify::x1", callback: (($obj: Barrier, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x1", callback: (($obj: Barrier, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::x1", ...args: any[]): void
    connect(sigName: "notify::x2", callback: (($obj: Barrier, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x2", callback: (($obj: Barrier, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::x2", ...args: any[]): void
    connect(sigName: "notify::y1", callback: (($obj: Barrier, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y1", callback: (($obj: Barrier, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::y1", ...args: any[]): void
    connect(sigName: "notify::y2", callback: (($obj: Barrier, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y2", callback: (($obj: Barrier, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::y2", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Barrier extends GObject.Object {

    // Own properties of Meta-12.Meta.Barrier

    static name: string
    static $gtype: GObject.GType<Barrier>

    // Constructors of Meta-12.Meta.Barrier

    constructor(config?: Barrier.ConstructorProperties) 
    constructor(backend: Backend, x1: number, y1: number, x2: number, y2: number, directions: BarrierDirection) 
    static new(backend: Backend, x1: number, y1: number, x2: number, y2: number, directions: BarrierDirection): Barrier
    _init(config?: Barrier.ConstructorProperties): void
}

export module Compositor {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Meta-12.Meta.Compositor

        backend?: Backend | null
        display?: Display | null
    }

}

export interface Compositor {

    // Own properties of Meta-12.Meta.Compositor

    readonly backend: Backend
    readonly display: Display

    // Own fields of Meta-12.Meta.Compositor

    parent_instance: GObject.Object

    // Owm methods of Meta-12.Meta.Compositor

    get_feedback_group(): Clutter.Actor
    get_laters(): Laters

    // Class property signals of Meta-12.Meta.Compositor

    connect(sigName: "notify::backend", callback: (($obj: Compositor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::backend", callback: (($obj: Compositor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::backend", ...args: any[]): void
    connect(sigName: "notify::display", callback: (($obj: Compositor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display", callback: (($obj: Compositor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::display", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Compositor extends GObject.Object {

    // Own properties of Meta-12.Meta.Compositor

    static name: string
    static $gtype: GObject.GType<Compositor>

    // Constructors of Meta-12.Meta.Compositor

    constructor(config?: Compositor.ConstructorProperties) 
    _init(config?: Compositor.ConstructorProperties): void
}

export module Context {

    // Signal callback interfaces

    /**
     * Signal callback interface for `prepare-shutdown`
     */
    export interface PrepareShutdownSignalCallback {
        ($obj: Context): void
    }

    /**
     * Signal callback interface for `started`
     */
    export interface StartedSignalCallback {
        ($obj: Context): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Meta-12.Meta.Context

        name?: string | null
        unsafe_mode?: boolean | null
    }

}

export interface Context {

    // Own properties of Meta-12.Meta.Context

    readonly name: string | null
    unsafe_mode: boolean

    // Own fields of Meta-12.Meta.Context

    parent_instance: GObject.Object

    // Owm methods of Meta-12.Meta.Context

    /**
     * See g_option_context_add_main_entries() for more details.
     * @param entries a %NULL-terminated array of #GOptionEntrys
     * @param translation_domain a translation domain to use, or %NULL
     */
    add_option_entries(entries: GLib.OptionEntry[], translation_domain: string | null): void
    /**
     * See g_option_context_add_group() for more details.
     * @param group the group to add
     */
    add_option_group(group: GLib.OptionGroup): void
    configure(argv: string[] | null): [ /* returnType */ boolean, /* argv */ string[] | null ]
    destroy(): void
    get_backend(): Backend
    get_compositor_type(): CompositorType
    get_display(): Display
    is_replacing(): boolean
    notify_ready(): void
    /**
     * Raises the RLIMIT_NOFILE limit value to the hard limit.
     */
    raise_rlimit_nofile(): boolean
    /**
     * Restores the RLIMIT_NOFILE limits from when the #MetaContext was created.
     */
    restore_rlimit_nofile(): boolean
    run_main_loop(): boolean
    set_gnome_wm_keybindings(wm_keybindings: string | null): void
    set_plugin_gtype(plugin_gtype: GObject.GType): void
    set_plugin_name(plugin_name: string | null): void
    setup(): boolean
    start(): boolean
    terminate(): void
    terminate_with_error(error: GLib.Error): void

    // Own signals of Meta-12.Meta.Context

    connect(sigName: "prepare-shutdown", callback: Context.PrepareShutdownSignalCallback): number
    connect_after(sigName: "prepare-shutdown", callback: Context.PrepareShutdownSignalCallback): number
    emit(sigName: "prepare-shutdown", ...args: any[]): void
    connect(sigName: "started", callback: Context.StartedSignalCallback): number
    connect_after(sigName: "started", callback: Context.StartedSignalCallback): number
    emit(sigName: "started", ...args: any[]): void

    // Class property signals of Meta-12.Meta.Context

    connect(sigName: "notify::name", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::unsafe-mode", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::unsafe-mode", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::unsafe-mode", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Context extends GObject.Object {

    // Own properties of Meta-12.Meta.Context

    static name: string
    static $gtype: GObject.GType<Context>

    // Constructors of Meta-12.Meta.Context

    constructor(config?: Context.ConstructorProperties) 
    _init(config?: Context.ConstructorProperties): void
}

export module CursorTracker {

    // Signal callback interfaces

    /**
     * Signal callback interface for `cursor-changed`
     */
    export interface CursorChangedSignalCallback {
        ($obj: CursorTracker): void
    }

    /**
     * Signal callback interface for `position-invalidated`
     */
    export interface PositionInvalidatedSignalCallback {
        ($obj: CursorTracker): void
    }

    /**
     * Signal callback interface for `visibility-changed`
     */
    export interface VisibilityChangedSignalCallback {
        ($obj: CursorTracker): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Meta-12.Meta.CursorTracker

        backend?: Backend | null
    }

}

export interface CursorTracker {

    // Own properties of Meta-12.Meta.CursorTracker

    readonly backend: Backend

    // Own fields of Meta-12.Meta.CursorTracker

    parent_instance: GObject.Object

    // Owm methods of Meta-12.Meta.CursorTracker

    /**
     * Get the hotspot of the current cursor sprite.
     */
    get_hot(): [ /* x */ number, /* y */ number ]
    /**
     * Get the current pointer position and state.
     */
    get_pointer(): [ /* coords */ Graphene.Point, /* mods */ Clutter.ModifierType ]
    get_pointer_visible(): boolean
    /**
     * Get the scale factor of the cursor sprite
     * @returns The scale factor of the cursor sprite
     */
    get_scale(): number
    /**
     * Get the #CoglTexture of the cursor sprite
     * @returns the #CoglTexture of the cursor sprite
     */
    get_sprite(): Cogl.Texture | null
    set_pointer_visible(visible: boolean): void

    // Own signals of Meta-12.Meta.CursorTracker

    connect(sigName: "cursor-changed", callback: CursorTracker.CursorChangedSignalCallback): number
    connect_after(sigName: "cursor-changed", callback: CursorTracker.CursorChangedSignalCallback): number
    emit(sigName: "cursor-changed", ...args: any[]): void
    connect(sigName: "position-invalidated", callback: CursorTracker.PositionInvalidatedSignalCallback): number
    connect_after(sigName: "position-invalidated", callback: CursorTracker.PositionInvalidatedSignalCallback): number
    emit(sigName: "position-invalidated", ...args: any[]): void
    connect(sigName: "visibility-changed", callback: CursorTracker.VisibilityChangedSignalCallback): number
    connect_after(sigName: "visibility-changed", callback: CursorTracker.VisibilityChangedSignalCallback): number
    emit(sigName: "visibility-changed", ...args: any[]): void

    // Class property signals of Meta-12.Meta.CursorTracker

    connect(sigName: "notify::backend", callback: (($obj: CursorTracker, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::backend", callback: (($obj: CursorTracker, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::backend", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class CursorTracker extends GObject.Object {

    // Own properties of Meta-12.Meta.CursorTracker

    static name: string
    static $gtype: GObject.GType<CursorTracker>

    // Constructors of Meta-12.Meta.CursorTracker

    constructor(config?: CursorTracker.ConstructorProperties) 
    _init(config?: CursorTracker.ConstructorProperties): void
    /**
     * Retrieves the cursor tracker object for `display`.
     * @param display the #MetaDisplay
     * @returns the cursor tracker object for @display.
     */
    static get_for_display(display: Display): CursorTracker
}

export module Display {

    // Signal callback interfaces

    /**
     * Signal callback interface for `accelerator-activated`
     */
    export interface AcceleratorActivatedSignalCallback {
        ($obj: Display, object: number, p0: Clutter.InputDevice, p1: number): void
    }

    /**
     * Signal callback interface for `closing`
     */
    export interface ClosingSignalCallback {
        ($obj: Display): void
    }

    /**
     * Signal callback interface for `cursor-updated`
     */
    export interface CursorUpdatedSignalCallback {
        ($obj: Display): void
    }

    /**
     * Signal callback interface for `gl-video-memory-purged`
     */
    export interface GlVideoMemoryPurgedSignalCallback {
        ($obj: Display): void
    }

    /**
     * Signal callback interface for `grab-op-begin`
     */
    export interface GrabOpBeginSignalCallback {
        ($obj: Display, object: Window, p0: GrabOp): void
    }

    /**
     * Signal callback interface for `grab-op-end`
     */
    export interface GrabOpEndSignalCallback {
        ($obj: Display, object: Window, p0: GrabOp): void
    }

    /**
     * Signal callback interface for `in-fullscreen-changed`
     */
    export interface InFullscreenChangedSignalCallback {
        ($obj: Display): void
    }

    /**
     * Signal callback interface for `init-xserver`
     */
    export interface InitXserverSignalCallback {
        ($obj: Display, object: Gio.Task): boolean
    }

    /**
     * Signal callback interface for `modifiers-accelerator-activated`
     */
    export interface ModifiersAcceleratorActivatedSignalCallback {
        ($obj: Display): boolean
    }

    /**
     * Signal callback interface for `overlay-key`
     */
    export interface OverlayKeySignalCallback {
        ($obj: Display): void
    }

    /**
     * Signal callback interface for `pad-mode-switch`
     */
    export interface PadModeSwitchSignalCallback {
        ($obj: Display, object: Clutter.InputDevice, p0: number, p1: number): void
    }

    /**
     * Signal callback interface for `restacked`
     */
    export interface RestackedSignalCallback {
        ($obj: Display): void
    }

    /**
     * Signal callback interface for `restart`
     */
    export interface RestartSignalCallback {
        ($obj: Display): boolean
    }

    /**
     * Signal callback interface for `show-osd`
     */
    export interface ShowOsdSignalCallback {
        ($obj: Display, object: number, p0: string | null, p1: string | null): void
    }

    /**
     * Signal callback interface for `show-pad-osd`
     */
    export interface ShowPadOsdSignalCallback {
        ($obj: Display, pad: Clutter.InputDevice, settings: Gio.Settings, layout_path: string | null, edition_mode: boolean, monitor_idx: number): Clutter.Actor | null
    }

    /**
     * Signal callback interface for `show-resize-popup`
     */
    export interface ShowResizePopupSignalCallback {
        ($obj: Display, object: boolean, p0: Rectangle, p1: number, p2: number): boolean
    }

    /**
     * Signal callback interface for `show-restart-message`
     */
    export interface ShowRestartMessageSignalCallback {
        ($obj: Display, message: string | null): boolean
    }

    /**
     * Signal callback interface for `showing-desktop-changed`
     */
    export interface ShowingDesktopChangedSignalCallback {
        ($obj: Display): void
    }

    /**
     * Signal callback interface for `window-created`
     */
    export interface WindowCreatedSignalCallback {
        ($obj: Display, object: Window): void
    }

    /**
     * Signal callback interface for `window-demands-attention`
     */
    export interface WindowDemandsAttentionSignalCallback {
        ($obj: Display, object: Window): void
    }

    /**
     * Signal callback interface for `window-entered-monitor`
     */
    export interface WindowEnteredMonitorSignalCallback {
        ($obj: Display, object: number, p0: Window): void
    }

    /**
     * Signal callback interface for `window-left-monitor`
     */
    export interface WindowLeftMonitorSignalCallback {
        ($obj: Display, object: number, p0: Window): void
    }

    /**
     * Signal callback interface for `window-marked-urgent`
     */
    export interface WindowMarkedUrgentSignalCallback {
        ($obj: Display, object: Window): void
    }

    /**
     * Signal callback interface for `window-visibility-updated`
     */
    export interface WindowVisibilityUpdatedSignalCallback {
        ($obj: Display, object: any | null, p0: any | null, p1: any | null): void
    }

    /**
     * Signal callback interface for `workareas-changed`
     */
    export interface WorkareasChangedSignalCallback {
        ($obj: Display): void
    }

    /**
     * Signal callback interface for `x11-display-closing`
     */
    export interface X11DisplayClosingSignalCallback {
        ($obj: Display): void
    }

    /**
     * Signal callback interface for `x11-display-opened`
     */
    export interface X11DisplayOpenedSignalCallback {
        ($obj: Display): void
    }

    /**
     * Signal callback interface for `x11-display-setup`
     */
    export interface X11DisplaySetupSignalCallback {
        ($obj: Display): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Display {

    // Own properties of Meta-12.Meta.Display

    readonly compositor_modifiers: Clutter.ModifierType
    readonly focus_window: Window

    // Owm methods of Meta-12.Meta.Display

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
    add_keybinding(name: string | null, settings: Gio.Settings, flags: KeyBindingFlags, handler: KeyHandlerFunc): number
    /**
     * Sets the mouse-mode flag to %FALSE, which means that motion events are
     * no longer ignored in mouse or sloppy focus.
     * This is an internal function. It should be used only for reimplementing
     * keybindings, and only in a manner compatible with core code.
     */
    clear_mouse_mode(): void
    close(timestamp: number): void
    focus_default_window(timestamp: number): void
    freeze_keyboard(timestamp: number): void
    get_compositor(): Compositor
    get_compositor_modifiers(): Clutter.ModifierType
    get_context(): Context
    /**
     * Gets the index of the monitor that currently has the mouse pointer.
     * @returns a monitor index
     */
    get_current_monitor(): number
    get_current_time(): number
    get_current_time_roundtrip(): number
    /**
     * Get our best guess as to the "currently" focused window (that is,
     * the window that we expect will be focused at the point when the X
     * server processes our next request).
     * @returns The current focus window
     */
    get_focus_window(): Window
    /**
     * Get the keybinding action bound to `keycode`. Builtin keybindings
     * have a fixed associated #MetaKeyBindingAction, for bindings added
     * dynamically the function will return the keybinding action
     * meta_display_add_keybinding() returns on registration.
     * @param keycode Raw keycode
     * @param mask Event mask
     * @returns The action that should be taken for the given key, or %META_KEYBINDING_ACTION_NONE.
     */
    get_keybinding_action(keycode: number, mask: number): number
    get_last_user_time(): number
    /**
     * Stores the location and size of the indicated `monitor` in `geometry`.
     * @param monitor the monitor number
     */
    get_monitor_geometry(monitor: number): /* geometry */ Rectangle
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
    get_monitor_in_fullscreen(monitor: number): boolean
    get_monitor_index_for_rect(rect: Rectangle): number
    get_monitor_neighbor_index(which_monitor: number, dir: DisplayDirection): number
    /**
     * Gets the monitor scaling value for the given `monitor`.
     * @param monitor the monitor number
     * @returns the monitor scaling value
     */
    get_monitor_scale(monitor: number): number
    /**
     * Gets the number of monitors that are joined together to form `display`.
     * @returns the number of monitors
     */
    get_n_monitors(): number
    get_pad_action_label(pad: Clutter.InputDevice, action_type: PadActionType, action_number: number): string | null
    /**
     * Gets the index of the primary monitor on this `display`.
     * @returns a monitor index
     */
    get_primary_monitor(): number
    get_selection(): Selection
    /**
     * Retrieve the size of the display.
     */
    get_size(): [ /* width */ number, /* height */ number ]
    get_sound_player(): SoundPlayer
    /**
     * Determine the active window that should be displayed for Alt-TAB.
     * @param type type of tab list
     * @param workspace origin workspace
     * @returns Current window
     */
    get_tab_current(type: TabList, workspace: Workspace): Window
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
    get_tab_list(type: TabList, workspace: Workspace | null): Window[]
    /**
     * Determine the next window that should be displayed for Alt-TAB
     * functionality.
     * @param type type of tab list
     * @param workspace origin workspace
     * @param window starting window
     * @param backward If %TRUE, look for the previous window.
     * @returns Next window
     */
    get_tab_next(type: TabList, workspace: Workspace, window: Window | null, backward: boolean): Window
    get_workspace_manager(): WorkspaceManager
    grab_accelerator(accelerator: string | null, flags: KeyBindingFlags): number
    /**
     * Returns %TRUE if there is an ongoing grab operation.
     * @returns Whether there is an active display grab operation.
     */
    is_grabbed(): boolean
    /**
     * Tells whether the event sequence is the used for pointer emulation
     * and single-touch interaction.
     * @param sequence a #ClutterEventSequence
     * @returns #TRUE if the sequence emulates pointer behavior
     */
    is_pointer_emulating_sequence(sequence: Clutter.EventSequence | null): boolean
    /**
     * List all windows, including override-redirect ones. The windows are
     * in no particular order.
     * @returns List of windows
     */
    list_all_windows(): Window[]
    /**
     * Remove keybinding `name;` the function will fail if `name` is not a known
     * keybinding or has not been added with meta_display_add_keybinding().
     * @param name name of the keybinding to remove
     * @returns %TRUE if the binding has been removed successfully,          otherwise %FALSE
     */
    remove_keybinding(name: string | null): boolean
    request_pad_osd(pad: Clutter.InputDevice, edition_mode: boolean): void
    set_cursor(cursor: Cursor): void
    set_input_focus(window: Window, focus_frame: boolean, timestamp: number): void
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
    sort_windows_by_stacking(windows: Window[]): Window[]
    supports_extended_barriers(): boolean
    unfreeze_keyboard(timestamp: number): void
    ungrab_accelerator(action_id: number): boolean
    ungrab_keyboard(timestamp: number): void
    unset_input_focus(timestamp: number): void
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
    xserver_time_is_before(time1: number, time2: number): boolean

    // Own signals of Meta-12.Meta.Display

    connect(sigName: "accelerator-activated", callback: Display.AcceleratorActivatedSignalCallback): number
    connect_after(sigName: "accelerator-activated", callback: Display.AcceleratorActivatedSignalCallback): number
    emit(sigName: "accelerator-activated", object: number, p0: Clutter.InputDevice, p1: number, ...args: any[]): void
    connect(sigName: "closing", callback: Display.ClosingSignalCallback): number
    connect_after(sigName: "closing", callback: Display.ClosingSignalCallback): number
    emit(sigName: "closing", ...args: any[]): void
    connect(sigName: "cursor-updated", callback: Display.CursorUpdatedSignalCallback): number
    connect_after(sigName: "cursor-updated", callback: Display.CursorUpdatedSignalCallback): number
    emit(sigName: "cursor-updated", ...args: any[]): void
    connect(sigName: "gl-video-memory-purged", callback: Display.GlVideoMemoryPurgedSignalCallback): number
    connect_after(sigName: "gl-video-memory-purged", callback: Display.GlVideoMemoryPurgedSignalCallback): number
    emit(sigName: "gl-video-memory-purged", ...args: any[]): void
    connect(sigName: "grab-op-begin", callback: Display.GrabOpBeginSignalCallback): number
    connect_after(sigName: "grab-op-begin", callback: Display.GrabOpBeginSignalCallback): number
    emit(sigName: "grab-op-begin", object: Window, p0: GrabOp, ...args: any[]): void
    connect(sigName: "grab-op-end", callback: Display.GrabOpEndSignalCallback): number
    connect_after(sigName: "grab-op-end", callback: Display.GrabOpEndSignalCallback): number
    emit(sigName: "grab-op-end", object: Window, p0: GrabOp, ...args: any[]): void
    connect(sigName: "in-fullscreen-changed", callback: Display.InFullscreenChangedSignalCallback): number
    connect_after(sigName: "in-fullscreen-changed", callback: Display.InFullscreenChangedSignalCallback): number
    emit(sigName: "in-fullscreen-changed", ...args: any[]): void
    connect(sigName: "init-xserver", callback: Display.InitXserverSignalCallback): number
    connect_after(sigName: "init-xserver", callback: Display.InitXserverSignalCallback): number
    emit(sigName: "init-xserver", object: Gio.Task, ...args: any[]): void
    connect(sigName: "modifiers-accelerator-activated", callback: Display.ModifiersAcceleratorActivatedSignalCallback): number
    connect_after(sigName: "modifiers-accelerator-activated", callback: Display.ModifiersAcceleratorActivatedSignalCallback): number
    emit(sigName: "modifiers-accelerator-activated", ...args: any[]): void
    connect(sigName: "overlay-key", callback: Display.OverlayKeySignalCallback): number
    connect_after(sigName: "overlay-key", callback: Display.OverlayKeySignalCallback): number
    emit(sigName: "overlay-key", ...args: any[]): void
    connect(sigName: "pad-mode-switch", callback: Display.PadModeSwitchSignalCallback): number
    connect_after(sigName: "pad-mode-switch", callback: Display.PadModeSwitchSignalCallback): number
    emit(sigName: "pad-mode-switch", object: Clutter.InputDevice, p0: number, p1: number, ...args: any[]): void
    connect(sigName: "restacked", callback: Display.RestackedSignalCallback): number
    connect_after(sigName: "restacked", callback: Display.RestackedSignalCallback): number
    emit(sigName: "restacked", ...args: any[]): void
    connect(sigName: "restart", callback: Display.RestartSignalCallback): number
    connect_after(sigName: "restart", callback: Display.RestartSignalCallback): number
    emit(sigName: "restart", ...args: any[]): void
    connect(sigName: "show-osd", callback: Display.ShowOsdSignalCallback): number
    connect_after(sigName: "show-osd", callback: Display.ShowOsdSignalCallback): number
    emit(sigName: "show-osd", object: number, p0: string | null, p1: string | null, ...args: any[]): void
    connect(sigName: "show-pad-osd", callback: Display.ShowPadOsdSignalCallback): number
    connect_after(sigName: "show-pad-osd", callback: Display.ShowPadOsdSignalCallback): number
    emit(sigName: "show-pad-osd", pad: Clutter.InputDevice, settings: Gio.Settings, layout_path: string | null, edition_mode: boolean, monitor_idx: number, ...args: any[]): void
    connect(sigName: "show-resize-popup", callback: Display.ShowResizePopupSignalCallback): number
    connect_after(sigName: "show-resize-popup", callback: Display.ShowResizePopupSignalCallback): number
    emit(sigName: "show-resize-popup", object: boolean, p0: Rectangle, p1: number, p2: number, ...args: any[]): void
    connect(sigName: "show-restart-message", callback: Display.ShowRestartMessageSignalCallback): number
    connect_after(sigName: "show-restart-message", callback: Display.ShowRestartMessageSignalCallback): number
    emit(sigName: "show-restart-message", message: string | null, ...args: any[]): void
    connect(sigName: "showing-desktop-changed", callback: Display.ShowingDesktopChangedSignalCallback): number
    connect_after(sigName: "showing-desktop-changed", callback: Display.ShowingDesktopChangedSignalCallback): number
    emit(sigName: "showing-desktop-changed", ...args: any[]): void
    connect(sigName: "window-created", callback: Display.WindowCreatedSignalCallback): number
    connect_after(sigName: "window-created", callback: Display.WindowCreatedSignalCallback): number
    emit(sigName: "window-created", object: Window, ...args: any[]): void
    connect(sigName: "window-demands-attention", callback: Display.WindowDemandsAttentionSignalCallback): number
    connect_after(sigName: "window-demands-attention", callback: Display.WindowDemandsAttentionSignalCallback): number
    emit(sigName: "window-demands-attention", object: Window, ...args: any[]): void
    connect(sigName: "window-entered-monitor", callback: Display.WindowEnteredMonitorSignalCallback): number
    connect_after(sigName: "window-entered-monitor", callback: Display.WindowEnteredMonitorSignalCallback): number
    emit(sigName: "window-entered-monitor", object: number, p0: Window, ...args: any[]): void
    connect(sigName: "window-left-monitor", callback: Display.WindowLeftMonitorSignalCallback): number
    connect_after(sigName: "window-left-monitor", callback: Display.WindowLeftMonitorSignalCallback): number
    emit(sigName: "window-left-monitor", object: number, p0: Window, ...args: any[]): void
    connect(sigName: "window-marked-urgent", callback: Display.WindowMarkedUrgentSignalCallback): number
    connect_after(sigName: "window-marked-urgent", callback: Display.WindowMarkedUrgentSignalCallback): number
    emit(sigName: "window-marked-urgent", object: Window, ...args: any[]): void
    connect(sigName: "window-visibility-updated", callback: Display.WindowVisibilityUpdatedSignalCallback): number
    connect_after(sigName: "window-visibility-updated", callback: Display.WindowVisibilityUpdatedSignalCallback): number
    emit(sigName: "window-visibility-updated", object: any | null, p0: any | null, p1: any | null, ...args: any[]): void
    connect(sigName: "workareas-changed", callback: Display.WorkareasChangedSignalCallback): number
    connect_after(sigName: "workareas-changed", callback: Display.WorkareasChangedSignalCallback): number
    emit(sigName: "workareas-changed", ...args: any[]): void
    connect(sigName: "x11-display-closing", callback: Display.X11DisplayClosingSignalCallback): number
    connect_after(sigName: "x11-display-closing", callback: Display.X11DisplayClosingSignalCallback): number
    emit(sigName: "x11-display-closing", ...args: any[]): void
    connect(sigName: "x11-display-opened", callback: Display.X11DisplayOpenedSignalCallback): number
    connect_after(sigName: "x11-display-opened", callback: Display.X11DisplayOpenedSignalCallback): number
    emit(sigName: "x11-display-opened", ...args: any[]): void
    connect(sigName: "x11-display-setup", callback: Display.X11DisplaySetupSignalCallback): number
    connect_after(sigName: "x11-display-setup", callback: Display.X11DisplaySetupSignalCallback): number
    emit(sigName: "x11-display-setup", ...args: any[]): void

    // Class property signals of Meta-12.Meta.Display

    connect(sigName: "notify::compositor-modifiers", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::compositor-modifiers", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::compositor-modifiers", ...args: any[]): void
    connect(sigName: "notify::focus-window", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-window", callback: (($obj: Display, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Display extends GObject.Object {

    // Own properties of Meta-12.Meta.Display

    static name: string
    static $gtype: GObject.GType<Display>

    // Constructors of Meta-12.Meta.Display

    constructor(config?: Display.ConstructorProperties) 
    _init(config?: Display.ConstructorProperties): void
}

export module Dnd {

    // Signal callback interfaces

    /**
     * Signal callback interface for `dnd-enter`
     */
    export interface DndEnterSignalCallback {
        ($obj: Dnd): void
    }

    /**
     * Signal callback interface for `dnd-leave`
     */
    export interface DndLeaveSignalCallback {
        ($obj: Dnd): void
    }

    /**
     * Signal callback interface for `dnd-position-change`
     */
    export interface DndPositionChangeSignalCallback {
        ($obj: Dnd, object: number, p0: number): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Dnd {

    // Own signals of Meta-12.Meta.Dnd

    connect(sigName: "dnd-enter", callback: Dnd.DndEnterSignalCallback): number
    connect_after(sigName: "dnd-enter", callback: Dnd.DndEnterSignalCallback): number
    emit(sigName: "dnd-enter", ...args: any[]): void
    connect(sigName: "dnd-leave", callback: Dnd.DndLeaveSignalCallback): number
    connect_after(sigName: "dnd-leave", callback: Dnd.DndLeaveSignalCallback): number
    emit(sigName: "dnd-leave", ...args: any[]): void
    connect(sigName: "dnd-position-change", callback: Dnd.DndPositionChangeSignalCallback): number
    connect_after(sigName: "dnd-position-change", callback: Dnd.DndPositionChangeSignalCallback): number
    emit(sigName: "dnd-position-change", object: number, p0: number, ...args: any[]): void

    // Class property signals of Meta-12.Meta.Dnd

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Dnd extends GObject.Object {

    // Own properties of Meta-12.Meta.Dnd

    static name: string
    static $gtype: GObject.GType<Dnd>

    // Constructors of Meta-12.Meta.Dnd

    constructor(config?: Dnd.ConstructorProperties) 
    _init(config?: Dnd.ConstructorProperties): void
}

export module IdleMonitor {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Meta-12.Meta.IdleMonitor

        /**
         * The device to listen to idletime on.
         */
        device?: Clutter.InputDevice | null
    }

}

export interface IdleMonitor {

    // Own properties of Meta-12.Meta.IdleMonitor

    /**
     * The device to listen to idletime on.
     */
    readonly device: Clutter.InputDevice

    // Owm methods of Meta-12.Meta.IdleMonitor

    add_idle_watch(interval_msec: number, callback: IdleMonitorWatchFunc | null): number
    add_user_active_watch(callback: IdleMonitorWatchFunc | null): number
    get_idletime(): number
    /**
     * Removes an idle time watcher, previously added by
     * meta_idle_monitor_add_idle_watch() or
     * meta_idle_monitor_add_user_active_watch().
     * @param id A watch ID
     */
    remove_watch(id: number): void

    // Class property signals of Meta-12.Meta.IdleMonitor

    connect(sigName: "notify::device", callback: (($obj: IdleMonitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device", callback: (($obj: IdleMonitor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::device", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class IdleMonitor extends GObject.Object {

    // Own properties of Meta-12.Meta.IdleMonitor

    static name: string
    static $gtype: GObject.GType<IdleMonitor>

    // Constructors of Meta-12.Meta.IdleMonitor

    constructor(config?: IdleMonitor.ConstructorProperties) 
    _init(config?: IdleMonitor.ConstructorProperties): void
}

export module Laters {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Laters {

    // Owm methods of Meta-12.Meta.Laters

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
     * @param later_id the integer ID returned from meta_later_add()
     */
    remove(later_id: number): void

    // Class property signals of Meta-12.Meta.Laters

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Laters extends GObject.Object {

    // Own properties of Meta-12.Meta.Laters

    static name: string
    static $gtype: GObject.GType<Laters>

    // Constructors of Meta-12.Meta.Laters

    constructor(config?: Laters.ConstructorProperties) 
    _init(config?: Laters.ConstructorProperties): void
}

export module LaunchContext {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.AppLaunchContext.ConstructorProperties {

        // Own constructor properties of Meta-12.Meta.LaunchContext

        display?: Display | null
        timestamp?: number | null
        workspace?: Workspace | null
    }

}

export interface LaunchContext {

    // Own properties of Meta-12.Meta.LaunchContext

    readonly display: Display
    timestamp: number
    workspace: Workspace

    // Owm methods of Meta-12.Meta.LaunchContext

    set_timestamp(timestamp: number): void
    set_workspace(workspace: Workspace): void

    // Class property signals of Meta-12.Meta.LaunchContext

    connect(sigName: "notify::display", callback: (($obj: LaunchContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display", callback: (($obj: LaunchContext, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::display", ...args: any[]): void
    connect(sigName: "notify::timestamp", callback: (($obj: LaunchContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timestamp", callback: (($obj: LaunchContext, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::timestamp", ...args: any[]): void
    connect(sigName: "notify::workspace", callback: (($obj: LaunchContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::workspace", callback: (($obj: LaunchContext, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::workspace", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class LaunchContext extends Gio.AppLaunchContext {

    // Own properties of Meta-12.Meta.LaunchContext

    static name: string
    static $gtype: GObject.GType<LaunchContext>

    // Constructors of Meta-12.Meta.LaunchContext

    constructor(config?: LaunchContext.ConstructorProperties) 
    _init(config?: LaunchContext.ConstructorProperties): void
}

export module MonitorManager {

    // Signal callback interfaces

    /**
     * Signal callback interface for `confirm-display-change`
     */
    export interface ConfirmDisplayChangeSignalCallback {
        ($obj: MonitorManager): void
    }


    /**
     * Signal callback interface for `monitors-changed`
     */
    export interface MonitorsChangedSignalCallback {
        ($obj: MonitorManager): void
    }

    /**
     * Signal callback interface for `monitors-changed-internal`
     */
    export interface MonitorsChangedInternalSignalCallback {
        ($obj: MonitorManager): void
    }

    /**
     * Signal callback interface for `power-save-mode-changed`
     */
    export interface PowerSaveModeChangedSignalCallback {
        ($obj: MonitorManager): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Meta-12.Meta.MonitorManager

        backend?: Backend | null
        experimental_hdr?: string | null
    }

}

export interface MonitorManager {

    // Own properties of Meta-12.Meta.MonitorManager

    readonly backend: Backend
    experimental_hdr: string | null
    readonly has_builtin_panel: boolean
    readonly night_light_supported: boolean
    readonly panel_orientation_managed: boolean

    // Owm methods of Meta-12.Meta.MonitorManager

    can_switch_config(): boolean
    get_display_configuration_timeout(): number
    /**
     * Returns whether the built-in display (i.e. a laptop panel) is turned on.
     */
    get_is_builtin_display_on(): boolean
    get_monitor_for_connector(connector: string | null): number
    get_panel_orientation_managed(): boolean
    get_switch_config(): MonitorSwitchConfigType
    switch_config(config_type: MonitorSwitchConfigType): void

    // Own signals of Meta-12.Meta.MonitorManager

    connect(sigName: "confirm-display-change", callback: MonitorManager.ConfirmDisplayChangeSignalCallback): number
    connect_after(sigName: "confirm-display-change", callback: MonitorManager.ConfirmDisplayChangeSignalCallback): number
    emit(sigName: "confirm-display-change", ...args: any[]): void
    connect(sigName: "monitor-privacy-screen-changed", callback: (...args: any[]) => void): number
    connect_after(sigName: "monitor-privacy-screen-changed", callback: (...args: any[]) => void): number
    emit(sigName: "monitor-privacy-screen-changed", logical_monitor: any, enabled: boolean, ...args: any[]): void
    connect(sigName: "monitors-changed", callback: MonitorManager.MonitorsChangedSignalCallback): number
    connect_after(sigName: "monitors-changed", callback: MonitorManager.MonitorsChangedSignalCallback): number
    emit(sigName: "monitors-changed", ...args: any[]): void
    connect(sigName: "monitors-changed-internal", callback: MonitorManager.MonitorsChangedInternalSignalCallback): number
    connect_after(sigName: "monitors-changed-internal", callback: MonitorManager.MonitorsChangedInternalSignalCallback): number
    emit(sigName: "monitors-changed-internal", ...args: any[]): void
    connect(sigName: "power-save-mode-changed", callback: MonitorManager.PowerSaveModeChangedSignalCallback): number
    connect_after(sigName: "power-save-mode-changed", callback: MonitorManager.PowerSaveModeChangedSignalCallback): number
    emit(sigName: "power-save-mode-changed", ...args: any[]): void

    // Class property signals of Meta-12.Meta.MonitorManager

    connect(sigName: "notify::backend", callback: (($obj: MonitorManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::backend", callback: (($obj: MonitorManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::backend", ...args: any[]): void
    connect(sigName: "notify::experimental-hdr", callback: (($obj: MonitorManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::experimental-hdr", callback: (($obj: MonitorManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::experimental-hdr", ...args: any[]): void
    connect(sigName: "notify::has-builtin-panel", callback: (($obj: MonitorManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-builtin-panel", callback: (($obj: MonitorManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-builtin-panel", ...args: any[]): void
    connect(sigName: "notify::night-light-supported", callback: (($obj: MonitorManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::night-light-supported", callback: (($obj: MonitorManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::night-light-supported", ...args: any[]): void
    connect(sigName: "notify::panel-orientation-managed", callback: (($obj: MonitorManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::panel-orientation-managed", callback: (($obj: MonitorManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::panel-orientation-managed", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class MonitorManager extends GObject.Object {

    // Own properties of Meta-12.Meta.MonitorManager

    static name: string
    static $gtype: GObject.GType<MonitorManager>

    // Constructors of Meta-12.Meta.MonitorManager

    constructor(config?: MonitorManager.ConstructorProperties) 
    _init(config?: MonitorManager.ConstructorProperties): void
}

export module Plugin {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Plugin {

    // Own fields of Meta-12.Meta.Plugin

    parent_instance: GObject.Object

    // Owm methods of Meta-12.Meta.Plugin

    complete_display_change(ok: boolean): void
    destroy_completed(actor: WindowActor): void
    /**
     * Gets the #MetaDisplay corresponding to a plugin.
     * @returns the #MetaDisplay for the plugin
     */
    get_display(): Display
    get_info(): PluginInfo
    map_completed(actor: WindowActor): void
    minimize_completed(actor: WindowActor): void
    size_change_completed(actor: WindowActor): void
    switch_workspace_completed(): void
    unminimize_completed(actor: WindowActor): void

    // Own virtual methods of Meta-12.Meta.Plugin

    vfunc_confirm_display_change(): void
    /**
     * Virtual function called when the window represented by `actor` is destroyed.
     * @virtual 
     * @param actor a #MetaWindowActor
     */
    vfunc_destroy(actor: WindowActor): void
    vfunc_hide_tile_preview(): void
    /**
     * Virtual function called when handling each keybinding.
     * @virtual 
     * @param binding a #MetaKeyBinding
     * @returns %TRUE if the plugin handled the keybinding.
     */
    vfunc_keybinding_filter(binding: KeyBinding): boolean
    /**
     * Virtual function called when the workspace-switching effect needs to be
     * killed prematurely.
     * @virtual 
     */
    vfunc_kill_switch_workspace(): void
    /**
     * Virtual function called when the effects on `actor` need to be killed
     * prematurely; the plugin must call the completed() callback as if the effect
     * terminated naturally.
     * @virtual 
     * @param actor a #MetaWindowActor
     */
    vfunc_kill_window_effects(actor: WindowActor): void
    /**
     * Virtual function called when the user triggered the "locate-pointer"
     * mechanism.
     * The common way to implement this function is to show some animation
     * on screen to draw user attention on the pointer location.
     * @virtual 
     */
    vfunc_locate_pointer(): void
    /**
     * Virtual function called when the window represented by `actor` is mapped.
     * @virtual 
     * @param actor a #MetaWindowActor
     */
    vfunc_map(actor: WindowActor): void
    /**
     * Virtual function called when the window represented by `actor` is minimized.
     * @virtual 
     * @param actor a #MetaWindowActor
     */
    vfunc_minimize(actor: WindowActor): void
    /**
     * Virtual function that returns information about the #MetaPlugin.
     * @virtual 
     * @returns a #MetaPluginInfo.
     */
    vfunc_plugin_info(): PluginInfo
    vfunc_show_tile_preview(window: Window, tile_rect: Rectangle, tile_monitor_number: number): void
    vfunc_show_window_menu(window: Window, menu: WindowMenuType, x: number, y: number): void
    vfunc_show_window_menu_for_rect(window: Window, menu: WindowMenuType, rect: Rectangle): void
    vfunc_size_change(actor: WindowActor, which_change: SizeChange, old_frame_rect: Rectangle, old_buffer_rect: Rectangle): void
    vfunc_size_changed(actor: WindowActor): void
    /**
     * Virtual function called when the compositor starts managing a screen
     * @virtual 
     */
    vfunc_start(): void
    /**
     * Virtual function called when the window represented by `actor` is destroyed.
     * @virtual 
     * @param from origin workspace
     * @param to destination workspace
     * @param direction a #MetaMotionDirection
     */
    vfunc_switch_workspace(from: number, to: number, direction: MotionDirection): void
    /**
     * Virtual function called when the window represented by `actor` is unminimized.
     * @virtual 
     * @param actor a #MetaWindowActor
     */
    vfunc_unminimize(actor: WindowActor): void
    /**
     * Virtual function called when handling each event.
     * @virtual 
     * @param event 
     * @returns %TRUE if the plugin handled the event type (i.e., if the return value is %FALSE, there will be no subsequent call to the manager completed() callback, and the compositor must ensure that any appropriate post-effect cleanup is carried out.
     */
    vfunc_xevent_filter(event: xlib.XEvent): boolean

    // Class property signals of Meta-12.Meta.Plugin

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Plugin extends GObject.Object {

    // Own properties of Meta-12.Meta.Plugin

    static name: string
    static $gtype: GObject.GType<Plugin>

    // Constructors of Meta-12.Meta.Plugin

    constructor(config?: Plugin.ConstructorProperties) 
    _init(config?: Plugin.ConstructorProperties): void
    static manager_set_plugin_type(gtype: GObject.GType): void
}

export module RemoteAccessController {

    // Signal callback interfaces

    /**
     * Signal callback interface for `new-handle`
     */
    export interface NewHandleSignalCallback {
        ($obj: RemoteAccessController, object: RemoteAccessHandle): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface RemoteAccessController {

    // Owm methods of Meta-12.Meta.RemoteAccessController

    /**
     * Inhibits remote access sessions from being created and running. Any active
     * remote access session will be terminated.
     */
    inhibit_remote_access(): void
    /**
     * Uninhibits remote access sessions from being created and running. If this was
     * the last inhibitation that was inhibited, new remote access sessions can now
     * be created.
     */
    uninhibit_remote_access(): void

    // Own signals of Meta-12.Meta.RemoteAccessController

    connect(sigName: "new-handle", callback: RemoteAccessController.NewHandleSignalCallback): number
    connect_after(sigName: "new-handle", callback: RemoteAccessController.NewHandleSignalCallback): number
    emit(sigName: "new-handle", object: RemoteAccessHandle, ...args: any[]): void

    // Class property signals of Meta-12.Meta.RemoteAccessController

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class RemoteAccessController extends GObject.Object {

    // Own properties of Meta-12.Meta.RemoteAccessController

    static name: string
    static $gtype: GObject.GType<RemoteAccessController>

    // Constructors of Meta-12.Meta.RemoteAccessController

    constructor(config?: RemoteAccessController.ConstructorProperties) 
    _init(config?: RemoteAccessController.ConstructorProperties): void
}

export module RemoteAccessHandle {

    // Signal callback interfaces

    /**
     * Signal callback interface for `stopped`
     */
    export interface StoppedSignalCallback {
        ($obj: RemoteAccessHandle): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Meta-12.Meta.RemoteAccessHandle

        is_recording?: boolean | null
    }

}

export interface RemoteAccessHandle {

    // Own properties of Meta-12.Meta.RemoteAccessHandle

    readonly is_recording: boolean

    // Own fields of Meta-12.Meta.RemoteAccessHandle

    parent_instance: GObject.Object

    // Owm methods of Meta-12.Meta.RemoteAccessHandle

    get_disable_animations(): boolean
    /**
     * Stop the associated remote access session.
     */
    stop(): void

    // Own virtual methods of Meta-12.Meta.RemoteAccessHandle

    /**
     * Stop the associated remote access session.
     * @virtual 
     */
    vfunc_stop(): void

    // Own signals of Meta-12.Meta.RemoteAccessHandle

    connect(sigName: "stopped", callback: RemoteAccessHandle.StoppedSignalCallback): number
    connect_after(sigName: "stopped", callback: RemoteAccessHandle.StoppedSignalCallback): number
    emit(sigName: "stopped", ...args: any[]): void

    // Class property signals of Meta-12.Meta.RemoteAccessHandle

    connect(sigName: "notify::is-recording", callback: (($obj: RemoteAccessHandle, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-recording", callback: (($obj: RemoteAccessHandle, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-recording", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class RemoteAccessHandle extends GObject.Object {

    // Own properties of Meta-12.Meta.RemoteAccessHandle

    static name: string
    static $gtype: GObject.GType<RemoteAccessHandle>

    // Constructors of Meta-12.Meta.RemoteAccessHandle

    constructor(config?: RemoteAccessHandle.ConstructorProperties) 
    _init(config?: RemoteAccessHandle.ConstructorProperties): void
}

export module Selection {

    // Signal callback interfaces

    /**
     * Signal callback interface for `owner-changed`
     */
    export interface OwnerChangedSignalCallback {
        ($obj: Selection, object: number, p0: SelectionSource): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Selection {

    // Owm methods of Meta-12.Meta.Selection

    /**
     * Returns the list of supported mimetypes for the given selection type.
     * @param selection_type Selection to query
     * @returns The supported mimetypes
     */
    get_mimetypes(selection_type: SelectionType): string[]
    /**
     * Sets `owner` as the owner of the selection given by `selection_type,`
     * unsets any previous owner there was.
     * @param selection_type Selection type
     * @param owner New selection owner
     */
    set_owner(selection_type: SelectionType, owner: SelectionSource): void
    /**
     * Requests a transfer of `mimetype` on the selection given by
     * `selection_type`.
     * @param selection_type Selection type
     * @param mimetype Mimetype to transfer
     * @param size Maximum size to transfer, -1 for unlimited
     * @param output Output stream to write contents to
     * @param cancellable Cancellable
     * @param callback User callback
     */
    transfer_async(selection_type: SelectionType, mimetype: string | null, size: number, output: Gio.OutputStream, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of transfer_async

    /**
     * Promisified version of {@link transfer_async}
     * 
     * Requests a transfer of `mimetype` on the selection given by
     * `selection_type`.
     * @param selection_type Selection type
     * @param mimetype Mimetype to transfer
     * @param size Maximum size to transfer, -1 for unlimited
     * @param output Output stream to write contents to
     * @param cancellable Cancellable
     * @returns A Promise of: #TRUE if the transfer was successful.
     */
    transfer_async(selection_type: SelectionType, mimetype: string | null, size: number, output: Gio.OutputStream, cancellable: Gio.Cancellable | null): globalThis.Promise<boolean>
    /**
     * Finishes the transfer of a queried mimetype.
     * @param result The async result
     * @returns #TRUE if the transfer was successful.
     */
    transfer_finish(result: Gio.AsyncResult): boolean
    /**
     * Unsets `owner` as the owner the selection given by `selection_type`. If
     * `owner` does not own the selection, nothing is done.
     * @param selection_type Selection type
     * @param owner Owner to unset
     */
    unset_owner(selection_type: SelectionType, owner: SelectionSource): void

    // Own signals of Meta-12.Meta.Selection

    connect(sigName: "owner-changed", callback: Selection.OwnerChangedSignalCallback): number
    connect_after(sigName: "owner-changed", callback: Selection.OwnerChangedSignalCallback): number
    emit(sigName: "owner-changed", object: number, p0: SelectionSource, ...args: any[]): void

    // Class property signals of Meta-12.Meta.Selection

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Selection extends GObject.Object {

    // Own properties of Meta-12.Meta.Selection

    static name: string
    static $gtype: GObject.GType<Selection>

    // Constructors of Meta-12.Meta.Selection

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
        ($obj: SelectionSource): void
    }

    /**
     * Signal callback interface for `deactivated`
     */
    export interface DeactivatedSignalCallback {
        ($obj: SelectionSource): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface SelectionSource {

    // Own fields of Meta-12.Meta.SelectionSource

    parent_instance: GObject.Object

    // Owm methods of Meta-12.Meta.SelectionSource

    /**
     * Returns the list of supported mimetypes.
     * @returns The supported mimetypes
     */
    get_mimetypes(): string[]
    /**
     * Returns #TRUE if the source is active on a selection.
     * @returns #TRUE if the source owns a selection.
     */
    is_active(): boolean
    read_async(mimetype: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void

    // Overloads of read_async

    /**
     * Promisified version of {@link read_async}
     * 
     * 
     * @param mimetype 
     * @param cancellable 
     * @returns A Promise of: The resulting #GInputStream
     */
    read_async(mimetype: string | null, cancellable: Gio.Cancellable | null): globalThis.Promise<Gio.InputStream>
    /**
     * Finishes a read from the selection source.
     * @param result The async result
     * @returns The resulting #GInputStream
     */
    read_finish(result: Gio.AsyncResult): Gio.InputStream

    // Own virtual methods of Meta-12.Meta.SelectionSource

    vfunc_activated(): void
    vfunc_deactivated(): void
    /**
     * Returns the list of supported mimetypes.
     * @virtual 
     * @returns The supported mimetypes
     */
    vfunc_get_mimetypes(): string[]
    vfunc_read_async(mimetype: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback<this> | null): void
    /**
     * Finishes a read from the selection source.
     * @virtual 
     * @param result The async result
     * @returns The resulting #GInputStream
     */
    vfunc_read_finish(result: Gio.AsyncResult): Gio.InputStream

    // Own signals of Meta-12.Meta.SelectionSource

    connect(sigName: "activated", callback: SelectionSource.ActivatedSignalCallback): number
    connect_after(sigName: "activated", callback: SelectionSource.ActivatedSignalCallback): number
    emit(sigName: "activated", ...args: any[]): void
    connect(sigName: "deactivated", callback: SelectionSource.DeactivatedSignalCallback): number
    connect_after(sigName: "deactivated", callback: SelectionSource.DeactivatedSignalCallback): number
    emit(sigName: "deactivated", ...args: any[]): void

    // Class property signals of Meta-12.Meta.SelectionSource

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SelectionSource extends GObject.Object {

    // Own properties of Meta-12.Meta.SelectionSource

    static name: string
    static $gtype: GObject.GType<SelectionSource>

    // Constructors of Meta-12.Meta.SelectionSource

    constructor(config?: SelectionSource.ConstructorProperties) 
    _init(config?: SelectionSource.ConstructorProperties): void
}

export module SelectionSourceMemory {

    // Constructor properties interface

    export interface ConstructorProperties extends SelectionSource.ConstructorProperties {
    }

}

export interface SelectionSourceMemory {

    // Class property signals of Meta-12.Meta.SelectionSourceMemory

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SelectionSourceMemory extends SelectionSource {

    // Own properties of Meta-12.Meta.SelectionSourceMemory

    static name: string
    static $gtype: GObject.GType<SelectionSourceMemory>

    // Constructors of Meta-12.Meta.SelectionSourceMemory

    constructor(config?: SelectionSourceMemory.ConstructorProperties) 
    constructor(mimetype: string | null, content: GLib.Bytes) 
    static new(mimetype: string | null, content: GLib.Bytes): SelectionSourceMemory
    _init(config?: SelectionSourceMemory.ConstructorProperties): void
}

export module ShadowFactory {

    // Signal callback interfaces

    /**
     * Signal callback interface for `changed`
     */
    export interface ChangedSignalCallback {
        ($obj: ShadowFactory): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface ShadowFactory {

    // Owm methods of Meta-12.Meta.ShadowFactory

    /**
     * Gets the shadow parameters for a particular class of shadows
     * for either the focused or unfocused state. If the class name
     * does not name an existing class, default values will be returned
     * without printing an error.
     * @param class_name name of the class of shadow to get the params for
     * @param focused whether the shadow is for a focused window
     */
    get_params(class_name: string | null, focused: boolean): /* params */ ShadowParams
    /**
     * Gets the appropriate shadow object for drawing shadows for the
     * specified window shape. The region that we are shadowing is specified
     * as a combination of a size-invariant extracted shape and the size.
     * In some cases, the same shadow object can be shared between sizes;
     * in other cases a different shadow object is used for each size.
     * @param shape the size-invariant shape of the window's region
     * @param width the actual width of the window's region
     * @param height the actual height of the window's region
     * @param class_name name of the class of window shadows
     * @param focused whether the shadow is for a focused window
     * @returns a newly referenced #MetaShadow; unref with  meta_shadow_unref()
     */
    get_shadow(shape: WindowShape, width: number, height: number, class_name: string | null, focused: boolean): Shadow
    /**
     * Updates the shadow parameters for a particular class of shadows
     * for either the focused or unfocused state. If the class name
     * does not name an existing class, a new class will be created
     * (the other focus state for that class will have default values
     * assigned to it.)
     * @param class_name name of the class of shadow to set the params for.  the default shadow classes are the names of the different  theme frame types (normal, dialog, modal_dialog, utility,  border, menu, attached) and in addition, popup-menu  and dropdown-menu.
     * @param focused whether the shadow is for a focused window
     * @param params new parameter values
     */
    set_params(class_name: string | null, focused: boolean, params: ShadowParams): void

    // Own signals of Meta-12.Meta.ShadowFactory

    connect(sigName: "changed", callback: ShadowFactory.ChangedSignalCallback): number
    connect_after(sigName: "changed", callback: ShadowFactory.ChangedSignalCallback): number
    emit(sigName: "changed", ...args: any[]): void

    // Class property signals of Meta-12.Meta.ShadowFactory

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * #MetaShadowFactory is used to create window shadows. It caches shadows internally
 * so that multiple shadows created for the same shape with the same radius will
 * share the same MetaShadow.
 * @class 
 */
export class ShadowFactory extends GObject.Object {

    // Own properties of Meta-12.Meta.ShadowFactory

    static name: string
    static $gtype: GObject.GType<ShadowFactory>

    // Constructors of Meta-12.Meta.ShadowFactory

    constructor(config?: ShadowFactory.ConstructorProperties) 
    constructor() 
    static new(): ShadowFactory
    _init(config?: ShadowFactory.ConstructorProperties): void
    static get_default(): ShadowFactory
}

export module ShapedTexture {

    // Signal callback interfaces

    /**
     * Signal callback interface for `size-changed`
     */
    export interface SizeChangedSignalCallback {
        ($obj: ShapedTexture): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Clutter.Content.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface ShapedTexture extends Clutter.Content {

    // Owm methods of Meta-12.Meta.ShapedTexture

    /**
     * Flattens the two layers of the shaped texture into one ARGB32
     * image by alpha blending the two images, and returns the flattened
     * image.
     * @param clip A clipping rectangle, to help prevent extra processing. In the case that the clipping rectangle is partially or fully outside the bounds of the texture, the rectangle will be clipped.
     * @returns a new cairo surface to be freed with cairo_surface_destroy().
     */
    get_image(clip: cairo.RectangleInt | null): cairo.Surface | null
    get_texture(): Cogl.Texture
    set_create_mipmaps(create_mipmaps: boolean): void
    set_mask_texture(mask_texture: Cogl.Texture): void

    // Own signals of Meta-12.Meta.ShapedTexture

    connect(sigName: "size-changed", callback: ShapedTexture.SizeChangedSignalCallback): number
    connect_after(sigName: "size-changed", callback: ShapedTexture.SizeChangedSignalCallback): number
    emit(sigName: "size-changed", ...args: any[]): void

    // Class property signals of Meta-12.Meta.ShapedTexture

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class ShapedTexture extends GObject.Object {

    // Own properties of Meta-12.Meta.ShapedTexture

    static name: string
    static $gtype: GObject.GType<ShapedTexture>

    // Constructors of Meta-12.Meta.ShapedTexture

    constructor(config?: ShapedTexture.ConstructorProperties) 
    _init(config?: ShapedTexture.ConstructorProperties): void
}

export module SoundPlayer {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface SoundPlayer {

    // Owm methods of Meta-12.Meta.SoundPlayer

    /**
     * Plays a sound from a file.
     * @param file file to play
     * @param description description of the played sound
     * @param cancellable cancellable for the request
     */
    play_from_file(file: Gio.File, description: string | null, cancellable: Gio.Cancellable | null): void
    /**
     * Plays a sound from the sound theme.
     * @param name sound theme name of the event
     * @param description description of the event
     * @param cancellable cancellable for the request
     */
    play_from_theme(name: string | null, description: string | null, cancellable: Gio.Cancellable | null): void

    // Class property signals of Meta-12.Meta.SoundPlayer

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class SoundPlayer extends GObject.Object {

    // Own properties of Meta-12.Meta.SoundPlayer

    static name: string
    static $gtype: GObject.GType<SoundPlayer>

    // Constructors of Meta-12.Meta.SoundPlayer

    constructor(config?: SoundPlayer.ConstructorProperties) 
    _init(config?: SoundPlayer.ConstructorProperties): void
}

export module Stage {

    // Signal callback interfaces

    /**
     * Signal callback interface for `actors-painted`
     */
    export interface ActorsPaintedSignalCallback {
        ($obj: Stage): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Clutter.Animatable.ConstructorProperties, Clutter.Container.ConstructorProperties, Clutter.Scriptable.ConstructorProperties, Clutter.Stage.ConstructorProperties {
    }

}

export interface Stage extends Atk.ImplementorIface, Clutter.Animatable, Clutter.Container, Clutter.Scriptable {

    // Own signals of Meta-12.Meta.Stage

    connect(sigName: "actors-painted", callback: Stage.ActorsPaintedSignalCallback): number
    connect_after(sigName: "actors-painted", callback: Stage.ActorsPaintedSignalCallback): number
    emit(sigName: "actors-painted", ...args: any[]): void

    // Class property signals of Meta-12.Meta.Stage

    connect(sigName: "notify::is-grabbed", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-grabbed", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-grabbed", ...args: any[]): void
    connect(sigName: "notify::key-focus", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::key-focus", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::key-focus", ...args: any[]): void
    connect(sigName: "notify::perspective", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::perspective", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::perspective", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::actions", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actions", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::actions", ...args: any[]): void
    connect(sigName: "notify::allocation", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allocation", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::allocation", ...args: any[]): void
    connect(sigName: "notify::background-color", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::background-color", ...args: any[]): void
    connect(sigName: "notify::background-color-set", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color-set", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::background-color-set", ...args: any[]): void
    connect(sigName: "notify::child-transform", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-transform", ...args: any[]): void
    connect(sigName: "notify::child-transform-set", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform-set", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-transform-set", ...args: any[]): void
    connect(sigName: "notify::clip-rect", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-rect", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clip-rect", ...args: any[]): void
    connect(sigName: "notify::clip-to-allocation", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-to-allocation", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clip-to-allocation", ...args: any[]): void
    connect(sigName: "notify::color-state", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::color-state", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::color-state", ...args: any[]): void
    connect(sigName: "notify::constraints", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constraints", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::constraints", ...args: any[]): void
    connect(sigName: "notify::content", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::content-box", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-box", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-box", ...args: any[]): void
    connect(sigName: "notify::content-gravity", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-gravity", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-gravity", ...args: any[]): void
    connect(sigName: "notify::content-repeat", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-repeat", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-repeat", ...args: any[]): void
    connect(sigName: "notify::effect", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::effect", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::effect", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::fixed-position-set", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-position-set", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fixed-position-set", ...args: any[]): void
    connect(sigName: "notify::fixed-x", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-x", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fixed-x", ...args: any[]): void
    connect(sigName: "notify::fixed-y", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-y", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fixed-y", ...args: any[]): void
    connect(sigName: "notify::has-clip", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-clip", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-clip", ...args: any[]): void
    connect(sigName: "notify::has-pointer", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-pointer", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-pointer", ...args: any[]): void
    connect(sigName: "notify::height", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::magnification-filter", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::magnification-filter", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::magnification-filter", ...args: any[]): void
    connect(sigName: "notify::mapped", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mapped", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mapped", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::min-height", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-height", ...args: any[]): void
    connect(sigName: "notify::min-height-set", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height-set", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-height-set", ...args: any[]): void
    connect(sigName: "notify::min-width", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-width", ...args: any[]): void
    connect(sigName: "notify::min-width-set", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width-set", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-width-set", ...args: any[]): void
    connect(sigName: "notify::minification-filter", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::minification-filter", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::minification-filter", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::natural-height", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::natural-height", ...args: any[]): void
    connect(sigName: "notify::natural-height-set", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height-set", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::natural-height-set", ...args: any[]): void
    connect(sigName: "notify::natural-width", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::natural-width", ...args: any[]): void
    connect(sigName: "notify::natural-width-set", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width-set", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::natural-width-set", ...args: any[]): void
    connect(sigName: "notify::offscreen-redirect", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offscreen-redirect", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::offscreen-redirect", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::pivot-point", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pivot-point", ...args: any[]): void
    connect(sigName: "notify::pivot-point-z", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point-z", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pivot-point-z", ...args: any[]): void
    connect(sigName: "notify::position", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::reactive", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reactive", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::reactive", ...args: any[]): void
    connect(sigName: "notify::realized", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::realized", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::realized", ...args: any[]): void
    connect(sigName: "notify::request-mode", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::request-mode", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::request-mode", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-x", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-x", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-angle-x", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-y", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-y", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-angle-y", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-z", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-z", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-angle-z", ...args: any[]): void
    connect(sigName: "notify::scale-x", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-x", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-x", ...args: any[]): void
    connect(sigName: "notify::scale-y", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-y", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-y", ...args: any[]): void
    connect(sigName: "notify::scale-z", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-z", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-z", ...args: any[]): void
    connect(sigName: "notify::show-on-set-parent", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-on-set-parent", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-on-set-parent", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::text-direction", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-direction", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-direction", ...args: any[]): void
    connect(sigName: "notify::transform", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transform", ...args: any[]): void
    connect(sigName: "notify::transform-set", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform-set", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transform-set", ...args: any[]): void
    connect(sigName: "notify::translation-x", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-x", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::translation-x", ...args: any[]): void
    connect(sigName: "notify::translation-y", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-y", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::translation-y", ...args: any[]): void
    connect(sigName: "notify::translation-z", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-z", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::translation-z", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::x", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::x", ...args: any[]): void
    connect(sigName: "notify::x-align", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-align", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::x-align", ...args: any[]): void
    connect(sigName: "notify::x-expand", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-expand", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::x-expand", ...args: any[]): void
    connect(sigName: "notify::y", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::y", ...args: any[]): void
    connect(sigName: "notify::y-align", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-align", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::y-align", ...args: any[]): void
    connect(sigName: "notify::y-expand", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-expand", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::y-expand", ...args: any[]): void
    connect(sigName: "notify::z-position", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::z-position", callback: (($obj: Stage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::z-position", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Stage extends Clutter.Stage {

    // Own properties of Meta-12.Meta.Stage

    static name: string
    static $gtype: GObject.GType<Stage>

    // Constructors of Meta-12.Meta.Stage

    constructor(config?: Stage.ConstructorProperties) 
    _init(config?: Stage.ConstructorProperties): void
    static is_focused(display: Display): boolean
}

export module StartupNotification {

    // Signal callback interfaces

    /**
     * Signal callback interface for `changed`
     */
    export interface ChangedSignalCallback {
        ($obj: StartupNotification, object: StartupSequence): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Meta-12.Meta.StartupNotification

        display?: Display | null
    }

}

export interface StartupNotification {

    // Own properties of Meta-12.Meta.StartupNotification

    readonly display: Display

    // Owm methods of Meta-12.Meta.StartupNotification

    /**
     * Creates an app launch context.
     * @returns a launch context.
     */
    create_launcher(): LaunchContext
    /**
     * Get the list of startup sequences arrived in the startup notification object.
     * @returns a #GSList of #MetaStartupSequence in the #MetaStartupNotification.
     */
    get_sequences(): StartupSequence[]

    // Own signals of Meta-12.Meta.StartupNotification

    connect(sigName: "changed", callback: StartupNotification.ChangedSignalCallback): number
    connect_after(sigName: "changed", callback: StartupNotification.ChangedSignalCallback): number
    emit(sigName: "changed", object: StartupSequence, ...args: any[]): void

    // Class property signals of Meta-12.Meta.StartupNotification

    connect(sigName: "notify::display", callback: (($obj: StartupNotification, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display", callback: (($obj: StartupNotification, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::display", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class StartupNotification extends GObject.Object {

    // Own properties of Meta-12.Meta.StartupNotification

    static name: string
    static $gtype: GObject.GType<StartupNotification>

    // Constructors of Meta-12.Meta.StartupNotification

    constructor(config?: StartupNotification.ConstructorProperties) 
    _init(config?: StartupNotification.ConstructorProperties): void
}

export module StartupSequence {

    // Signal callback interfaces

    /**
     * Signal callback interface for `complete`
     */
    export interface CompleteSignalCallback {
        ($obj: StartupSequence): void
    }

    /**
     * Signal callback interface for `timeout`
     */
    export interface TimeoutSignalCallback {
        ($obj: StartupSequence): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Meta-12.Meta.StartupSequence

        application_id?: string | null
        display?: Display | null
        icon_name?: string | null
        id?: string | null
        name?: string | null
        timestamp?: number | null
        wmclass?: string | null
        workspace?: number | null
    }

}

export interface StartupSequence {

    // Own properties of Meta-12.Meta.StartupSequence

    readonly application_id: string | null
    readonly display: Display
    readonly icon_name: string | null
    readonly id: string | null
    readonly name: string | null
    readonly timestamp: number
    readonly wmclass: string | null
    readonly workspace: number

    // Own fields of Meta-12.Meta.StartupSequence

    parent_instance: GObject.Object

    // Owm methods of Meta-12.Meta.StartupSequence

    complete(): void
    /**
     * Get the application id of the startup sequence.
     * @returns the application id or %NULL.
     */
    get_application_id(): string | null
    get_completed(): boolean
    /**
     * Get the icon name of the startup sequence.
     * @returns the icon name or %NULL.
     */
    get_icon_name(): string | null
    get_id(): string | null
    get_name(): string | null
    get_timestamp(): number
    /**
     * Get the wmclass of the startup sequence.
     * @returns the wmclass or %NULL.
     */
    get_wmclass(): string | null
    get_workspace(): number

    // Own signals of Meta-12.Meta.StartupSequence

    connect(sigName: "complete", callback: StartupSequence.CompleteSignalCallback): number
    connect_after(sigName: "complete", callback: StartupSequence.CompleteSignalCallback): number
    emit(sigName: "complete", ...args: any[]): void
    connect(sigName: "timeout", callback: StartupSequence.TimeoutSignalCallback): number
    connect_after(sigName: "timeout", callback: StartupSequence.TimeoutSignalCallback): number
    emit(sigName: "timeout", ...args: any[]): void

    // Class property signals of Meta-12.Meta.StartupSequence

    connect(sigName: "notify::application-id", callback: (($obj: StartupSequence, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::application-id", callback: (($obj: StartupSequence, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::application-id", ...args: any[]): void
    connect(sigName: "notify::display", callback: (($obj: StartupSequence, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display", callback: (($obj: StartupSequence, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::display", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: (($obj: StartupSequence, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-name", callback: (($obj: StartupSequence, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::id", callback: (($obj: StartupSequence, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::id", callback: (($obj: StartupSequence, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: StartupSequence, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: StartupSequence, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::timestamp", callback: (($obj: StartupSequence, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::timestamp", callback: (($obj: StartupSequence, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::timestamp", ...args: any[]): void
    connect(sigName: "notify::wmclass", callback: (($obj: StartupSequence, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wmclass", callback: (($obj: StartupSequence, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::wmclass", ...args: any[]): void
    connect(sigName: "notify::workspace", callback: (($obj: StartupSequence, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::workspace", callback: (($obj: StartupSequence, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::workspace", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class StartupSequence extends GObject.Object {

    // Own properties of Meta-12.Meta.StartupSequence

    static name: string
    static $gtype: GObject.GType<StartupSequence>

    // Constructors of Meta-12.Meta.StartupSequence

    constructor(config?: StartupSequence.ConstructorProperties) 
    _init(config?: StartupSequence.ConstructorProperties): void
}

export module WaylandClient {

    // Signal callback interfaces

    /**
     * Signal callback interface for `client-destroyed`
     */
    export interface ClientDestroyedSignalCallback {
        ($obj: WaylandClient): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface WaylandClient {

    // Owm methods of Meta-12.Meta.WaylandClient

    hide_from_window_list(window: Window): void
    owns_window(window: Window): boolean
    /**
     * Shows again this window in window lists, like taskbars, pagers...
     * @param window a MetaWindow
     */
    show_in_window_list(window: Window): void
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

    // Own signals of Meta-12.Meta.WaylandClient

    connect(sigName: "client-destroyed", callback: WaylandClient.ClientDestroyedSignalCallback): number
    connect_after(sigName: "client-destroyed", callback: WaylandClient.ClientDestroyedSignalCallback): number
    emit(sigName: "client-destroyed", ...args: any[]): void

    // Class property signals of Meta-12.Meta.WaylandClient

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class WaylandClient extends GObject.Object {

    // Own properties of Meta-12.Meta.WaylandClient

    static name: string
    static $gtype: GObject.GType<WaylandClient>

    // Constructors of Meta-12.Meta.WaylandClient

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

export module Window {

    // Signal callback interfaces

    /**
     * Signal callback interface for `focus`
     */
    export interface FocusSignalCallback {
        ($obj: Window): void
    }

    /**
     * Signal callback interface for `position-changed`
     */
    export interface PositionChangedSignalCallback {
        ($obj: Window): void
    }

    /**
     * Signal callback interface for `raised`
     */
    export interface RaisedSignalCallback {
        ($obj: Window): void
    }

    /**
     * Signal callback interface for `shown`
     */
    export interface ShownSignalCallback {
        ($obj: Window): void
    }

    /**
     * Signal callback interface for `size-changed`
     */
    export interface SizeChangedSignalCallback {
        ($obj: Window): void
    }

    /**
     * Signal callback interface for `unmanaged`
     */
    export interface UnmanagedSignalCallback {
        ($obj: Window): void
    }

    /**
     * Signal callback interface for `unmanaging`
     */
    export interface UnmanagingSignalCallback {
        ($obj: Window): void
    }

    /**
     * Signal callback interface for `workspace-changed`
     */
    export interface WorkspaceChangedSignalCallback {
        ($obj: Window): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Gio.Initable.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Meta-12.Meta.Window

        display?: Display | null
        effect?: number | null
        xwindow?: number | null
    }

}

export interface Window extends Gio.Initable {

    // Own properties of Meta-12.Meta.Window

    readonly above: boolean
    readonly appears_focused: boolean
    readonly decorated: boolean
    readonly demands_attention: boolean
    readonly display: Display
    readonly effect: number
    readonly fullscreen: boolean
    readonly gtk_app_menu_object_path: string | null
    readonly gtk_application_id: string | null
    readonly gtk_application_object_path: string | null
    readonly gtk_menubar_object_path: string | null
    readonly gtk_unique_bus_name: string | null
    readonly gtk_window_object_path: string | null
    readonly icon: any
    readonly is_alive: boolean
    readonly maximized_horizontally: boolean
    readonly maximized_vertically: boolean
    readonly mini_icon: any
    readonly minimized: boolean
    readonly mutter_hints: string | null
    readonly on_all_workspaces: boolean
    readonly resizeable: boolean
    readonly skip_taskbar: boolean
    readonly title: string | null
    readonly urgent: boolean
    readonly user_time: number
    readonly window_type: WindowType
    readonly wm_class: string | null
    readonly xwindow: number

    // Owm methods of Meta-12.Meta.Window

    activate(current_time: number): void
    activate_with_workspace(current_time: number, workspace: Workspace): void
    allows_move(): boolean
    allows_resize(): boolean
    begin_grab_op(op: GrabOp, device: Clutter.InputDevice | null, sequence: Clutter.EventSequence | null, timestamp: number): boolean
    can_close(): boolean
    can_maximize(): boolean
    can_minimize(): boolean
    change_workspace(workspace: Workspace): void
    change_workspace_by_index(space_index: number, append: boolean): void
    check_alive(timestamp: number): void
    /**
     * Converts a desired bounds of the client window into the corresponding bounds
     * of the window frame (excluding invisible borders and client side shadows.)
     * @param client_rect client rectangle in root coordinates
     */
    client_rect_to_frame_rect(client_rect: Rectangle): /* frame_rect */ Rectangle
    compute_group(): void
    delete(timestamp: number): void
    /**
     * Follow the chain of parents of `window,` skipping transient windows,
     * and return the "root" window which has no non-transient parent.
     * @returns The root ancestor window
     */
    find_root_ancestor(): Window
    focus(timestamp: number): void
    /**
     * If `window` is transient, call `func` with the window for which it's transient,
     * repeatedly until either we find a non-transient window, or `func` returns %FALSE.
     * @param func Called for each window which is a transient parent of `window`
     */
    foreach_ancestor(func: WindowForeachFunc): void
    /**
     * Call `func` for every window which is either transient for `window,` or is
     * a transient of a window which is in turn transient for `window`.
     * The order of window enumeration is not defined.
     * 
     * Iteration will stop if `func` at any point returns %FALSE.
     * @param func Called for each window which is a transient of `window` (transitively)
     */
    foreach_transient(func: WindowForeachFunc): void
    /**
     * Converts a desired frame bounds for a window into the bounds of the client
     * window.
     * @param frame_rect desired frame bounds for the window
     */
    frame_rect_to_client_rect(frame_rect: Rectangle): /* client_rect */ Rectangle
    /**
     * Gets the rectangle that the pixmap or buffer of `window` occupies.
     * 
     * For X11 windows, this is the server-side geometry of the toplevel
     * window.
     * 
     * For Wayland windows, this is the bounding rectangle of the attached
     * buffer.
     */
    get_buffer_rect(): /* rect */ Rectangle
    /**
     * Returns name of the client machine from which this windows was created,
     * if known (obtained from the WM_CLIENT_MACHINE property).
     * @returns the machine name, or %NULL; the string is owned by the window manager and should not be freed or modified by the caller.
     */
    get_client_machine(): string | null
    /**
     * Returns the #MetaWindowClientType of the window.
     * @returns The root ancestor window
     */
    get_client_type(): WindowClientType
    /**
     * Gets the compositor's wrapper object for `window`.
     * @returns the wrapper object.
     */
    get_compositor_private(): GObject.Object
    get_description(): string | null
    get_display(): Display
    /**
     * Gets a region representing the outer bounds of the window's frame.
     * @returns a #cairo_region_t  holding the outer bounds of the window, or %NULL if the window  doesn't have a frame.
     */
    get_frame_bounds(): cairo.Region | null
    /**
     * Gets the rectangle that bounds `window` that is what the user thinks of
     * as the edge of the window. This doesn't include any extra reactive
     * area that we or the client adds to the window, or any area that the
     * client adds to draw a client-side shadow.
     */
    get_frame_rect(): /* rect */ Rectangle
    /**
     * Gets the type of window decorations that should be used for this window.
     * @returns the frame type
     */
    get_frame_type(): FrameType
    get_gtk_app_menu_object_path(): string | null
    get_gtk_application_id(): string | null
    get_gtk_application_object_path(): string | null
    get_gtk_menubar_object_path(): string | null
    get_gtk_theme_variant(): string | null
    get_gtk_unique_bus_name(): string | null
    get_gtk_window_object_path(): string | null
    /**
     * Gets the location of the icon corresponding to the window. The location
     * will be provided set by the task bar or other user interface element
     * displaying the icon, and is relative to the root window.
     * @returns %TRUE if the icon geometry was successfully retrieved.
     */
    get_icon_geometry(): [ /* returnType */ boolean, /* rect */ Rectangle ]
    /**
     * Returns the window id associated with window.
     * @returns The window id
     */
    get_id(): number
    get_layer(): StackLayer
    /**
     * Gets the current maximization state of the window, as combination
     * of the %META_MAXIMIZE_HORIZONTAL and %META_MAXIMIZE_VERTICAL flags;
     * @returns current maximization state
     */
    get_maximized(): MaximizeFlags
    /**
     * Gets index of the monitor that this window is on.
     * @returns The index of the monitor in the screens monitor list, or -1 if the window has been recently unmanaged and does not have a monitor.
     */
    get_monitor(): number
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
    get_mutter_hints(): string | null
    /**
     * Returns the pid of the process that created this window, if available
     * to the windowing system.
     * 
     * Note that the value returned by this is vulnerable to spoofing attacks
     * by the client.
     * @returns the pid, or 0 if not known.
     */
    get_pid(): number
    get_role(): string | null
    /**
     * Gets an unique id for a sandboxed app (currently flatpaks and snaps are
     * supported).
     * @returns the sandboxed application ID or %NULL
     */
    get_sandboxed_app_id(): string | null
    /**
     * The stable sequence number is a monotonicially increasing
     * unique integer assigned to each #MetaWindow upon creation.
     * 
     * This number can be useful for sorting windows in a stable
     * fashion.
     * @returns Internal sequence number for this window
     */
    get_stable_sequence(): number
    /**
     * Gets the startup id of the given #MetaWindow
     * @returns the startup id
     */
    get_startup_id(): string | null
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
    get_tile_match(): Window | null
    get_title(): string | null
    /**
     * Returns the #MetaWindow for the window that is pointed to by the
     * WM_TRANSIENT_FOR hint on this window (see XGetTransientForHint()
     * or XSetTransientForHint()). Mutter keeps transient windows above their
     * parents. A typical usage of this hint is for a dialog that wants to stay
     * above its associated window.
     * @returns the window this window is transient for, or %NULL if the WM_TRANSIENT_FOR hint is unset or does not point to a toplevel window that Mutter knows about.
     */
    get_transient_for(): Window | null
    /**
     * The user time represents a timestamp for the last time the user
     * interacted with this window.  Note this property is only available
     * for non-override-redirect windows.
     * 
     * The property is set by Mutter initially upon window creation,
     * and updated thereafter on input events (key and button presses) seen by Mutter,
     * client updates to the _NET_WM_USER_TIME property (if later than the current time)
     * and when focusing the window.
     * @returns The last time the user interacted with this window.
     */
    get_user_time(): number
    get_window_type(): WindowType
    /**
     * Return the current value of the name part of WM_CLASS X property.
     * @returns the current value of the name part of WM_CLASS X property
     */
    get_wm_class(): string | null
    /**
     * Return the current value of the instance part of WM_CLASS X property.
     * @returns the current value of the instance part of WM_CLASS X property.
     */
    get_wm_class_instance(): string | null
    /**
     * Get the work area for all monitors for `window`.
     */
    get_work_area_all_monitors(): /* area */ Rectangle
    /**
     * Get the work area for the monitor `window` is currently on.
     */
    get_work_area_current_monitor(): /* area */ Rectangle
    /**
     * Get the work area for `window,` given the monitor index
     * `which_monitor`.
     * @param which_monitor a moniotr to get the work area for
     */
    get_work_area_for_monitor(which_monitor: number): /* area */ Rectangle
    /**
     * Gets the #MetaWorkspace that the window is currently displayed on.
     * If the window is on all workspaces, returns the currently active
     * workspace.
     * @returns the #MetaWorkspace for the window
     */
    get_workspace(): Workspace
    group_leader_changed(): void
    /**
     * Tests if `window` has any transients attached to it.
     * (If the "attach_modal_dialogs" option is not enabled, this will
     * always return %FALSE.)
     * @returns whether @window has attached transients
     */
    has_attached_dialogs(): boolean
    has_focus(): boolean
    has_pointer(): boolean
    is_above(): boolean
    is_always_on_all_workspaces(): boolean
    /**
     * The function determines whether `window` is an ancestor of `transient;` it does
     * so by traversing the `transient'`s ancestors until it either locates `window`
     * or reaches an ancestor that is not transient.
     * @param transient a #MetaWindow
     * @returns %TRUE if window is an ancestor of transient.
     */
    is_ancestor_of_transient(transient: Window): boolean
    /**
     * Tests if `window` should be attached to its parent window.
     * (If the "attach_modal_dialogs" option is not enabled, this will
     * always return %FALSE.)
     * @returns whether @window should be attached to its parent
     */
    is_attached_dialog(): boolean
    /**
     * Check if if the window has decorations drawn by the client.
     * (window->decorated refers only to whether we should add decorations)
     */
    is_client_decorated(): boolean
    is_fullscreen(): boolean
    is_hidden(): boolean
    is_monitor_sized(): boolean
    is_on_all_workspaces(): boolean
    is_on_primary_monitor(): boolean
    is_override_redirect(): boolean
    is_remote(): boolean
    is_screen_sized(): boolean
    /**
     * Gets whether this window should be ignored by task lists.
     * @returns %TRUE if the skip bar hint is set.
     */
    is_skip_taskbar(): boolean
    kill(): void
    located_on_workspace(workspace: Workspace): boolean
    lower(): void
    lower_with_transients(timestamp: number): void
    make_above(): void
    make_fullscreen(): void
    maximize(directions: MaximizeFlags): void
    minimize(): void
    /**
     * Moves the window to the desired location on window's assigned
     * workspace, using the northwest edge of the frame as the reference,
     * instead of the actual window's origin, but only if a frame is present.
     * Otherwise, acts identically to meta_window_move().
     * @param user_op bool to indicate whether or not this is a user operation
     * @param root_x_nw desired x pos
     * @param root_y_nw desired y pos
     */
    move_frame(user_op: boolean, root_x_nw: number, root_y_nw: number): void
    /**
     * Resizes the window so that its outer bounds (including frame)
     * fit within the given rect
     * @param user_op bool to indicate whether or not this is a user operation
     * @param root_x_nw new x
     * @param root_y_nw new y
     * @param w desired width
     * @param h desired height
     */
    move_resize_frame(user_op: boolean, root_x_nw: number, root_y_nw: number, w: number, h: number): void
    /**
     * Moves the window to the monitor with index `monitor,` keeping
     * the relative position of the window's top left corner.
     * @param monitor desired monitor index
     */
    move_to_monitor(monitor: number): void
    raise(): void
    raise_and_make_recent(): void
    set_compositor_private(priv: GObject.Object): void
    set_demands_attention(): void
    /**
     * Sets or unsets the location of the icon corresponding to the window. If
     * set, the location should correspond to a dock, task bar or other user
     * interface element displaying the icon, and is relative to the root window.
     * @param rect rectangle with the desired geometry or %NULL.
     */
    set_icon_geometry(rect: Rectangle | null): void
    shove_titlebar_onscreen(): void
    showing_on_its_workspace(): boolean
    shutdown_group(): void
    stick(): void
    titlebar_is_onscreen(): boolean
    unmake_above(): void
    unmake_fullscreen(): void
    unmaximize(directions: MaximizeFlags): void
    unminimize(): void
    unset_demands_attention(): void
    unstick(): void

    // Own signals of Meta-12.Meta.Window

    connect(sigName: "focus", callback: Window.FocusSignalCallback): number
    connect_after(sigName: "focus", callback: Window.FocusSignalCallback): number
    emit(sigName: "focus", ...args: any[]): void
    connect(sigName: "position-changed", callback: Window.PositionChangedSignalCallback): number
    connect_after(sigName: "position-changed", callback: Window.PositionChangedSignalCallback): number
    emit(sigName: "position-changed", ...args: any[]): void
    connect(sigName: "raised", callback: Window.RaisedSignalCallback): number
    connect_after(sigName: "raised", callback: Window.RaisedSignalCallback): number
    emit(sigName: "raised", ...args: any[]): void
    connect(sigName: "shown", callback: Window.ShownSignalCallback): number
    connect_after(sigName: "shown", callback: Window.ShownSignalCallback): number
    emit(sigName: "shown", ...args: any[]): void
    connect(sigName: "size-changed", callback: Window.SizeChangedSignalCallback): number
    connect_after(sigName: "size-changed", callback: Window.SizeChangedSignalCallback): number
    emit(sigName: "size-changed", ...args: any[]): void
    connect(sigName: "unmanaged", callback: Window.UnmanagedSignalCallback): number
    connect_after(sigName: "unmanaged", callback: Window.UnmanagedSignalCallback): number
    emit(sigName: "unmanaged", ...args: any[]): void
    connect(sigName: "unmanaging", callback: Window.UnmanagingSignalCallback): number
    connect_after(sigName: "unmanaging", callback: Window.UnmanagingSignalCallback): number
    emit(sigName: "unmanaging", ...args: any[]): void
    connect(sigName: "workspace-changed", callback: Window.WorkspaceChangedSignalCallback): number
    connect_after(sigName: "workspace-changed", callback: Window.WorkspaceChangedSignalCallback): number
    emit(sigName: "workspace-changed", ...args: any[]): void

    // Class property signals of Meta-12.Meta.Window

    connect(sigName: "notify::above", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::above", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::above", ...args: any[]): void
    connect(sigName: "notify::appears-focused", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::appears-focused", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::appears-focused", ...args: any[]): void
    connect(sigName: "notify::decorated", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::decorated", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::decorated", ...args: any[]): void
    connect(sigName: "notify::demands-attention", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::demands-attention", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::demands-attention", ...args: any[]): void
    connect(sigName: "notify::display", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::display", ...args: any[]): void
    connect(sigName: "notify::effect", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::effect", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::effect", ...args: any[]): void
    connect(sigName: "notify::fullscreen", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fullscreen", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fullscreen", ...args: any[]): void
    connect(sigName: "notify::gtk-app-menu-object-path", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gtk-app-menu-object-path", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::gtk-app-menu-object-path", ...args: any[]): void
    connect(sigName: "notify::gtk-application-id", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gtk-application-id", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::gtk-application-id", ...args: any[]): void
    connect(sigName: "notify::gtk-application-object-path", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gtk-application-object-path", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::gtk-application-object-path", ...args: any[]): void
    connect(sigName: "notify::gtk-menubar-object-path", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gtk-menubar-object-path", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::gtk-menubar-object-path", ...args: any[]): void
    connect(sigName: "notify::gtk-unique-bus-name", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gtk-unique-bus-name", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::gtk-unique-bus-name", ...args: any[]): void
    connect(sigName: "notify::gtk-window-object-path", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::gtk-window-object-path", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::gtk-window-object-path", ...args: any[]): void
    connect(sigName: "notify::icon", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon", ...args: any[]): void
    connect(sigName: "notify::is-alive", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-alive", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-alive", ...args: any[]): void
    connect(sigName: "notify::maximized-horizontally", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::maximized-horizontally", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::maximized-horizontally", ...args: any[]): void
    connect(sigName: "notify::maximized-vertically", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::maximized-vertically", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::maximized-vertically", ...args: any[]): void
    connect(sigName: "notify::mini-icon", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mini-icon", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mini-icon", ...args: any[]): void
    connect(sigName: "notify::minimized", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::minimized", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::minimized", ...args: any[]): void
    connect(sigName: "notify::mutter-hints", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mutter-hints", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mutter-hints", ...args: any[]): void
    connect(sigName: "notify::on-all-workspaces", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::on-all-workspaces", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::on-all-workspaces", ...args: any[]): void
    connect(sigName: "notify::resizeable", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resizeable", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resizeable", ...args: any[]): void
    connect(sigName: "notify::skip-taskbar", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::skip-taskbar", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::skip-taskbar", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::urgent", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::urgent", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::urgent", ...args: any[]): void
    connect(sigName: "notify::user-time", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::user-time", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::user-time", ...args: any[]): void
    connect(sigName: "notify::window-type", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-type", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window-type", ...args: any[]): void
    connect(sigName: "notify::wm-class", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::wm-class", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::wm-class", ...args: any[]): void
    connect(sigName: "notify::xwindow", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::xwindow", callback: (($obj: Window, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::xwindow", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Window extends GObject.Object {

    // Own properties of Meta-12.Meta.Window

    static name: string
    static $gtype: GObject.GType<Window>

    // Constructors of Meta-12.Meta.Window

    constructor(config?: Window.ConstructorProperties) 
    _init(config?: Window.ConstructorProperties): void
}

export module WindowActor {

    // Signal callback interfaces

    /**
     * Signal callback interface for `damaged`
     */
    export interface DamagedSignalCallback {
        ($obj: WindowActor): void
    }

    /**
     * Signal callback interface for `effects-completed`
     */
    export interface EffectsCompletedSignalCallback {
        ($obj: WindowActor): void
    }

    /**
     * Signal callback interface for `first-frame`
     */
    export interface FirstFrameSignalCallback {
        ($obj: WindowActor): void
    }

    /**
     * Signal callback interface for `thawed`
     */
    export interface ThawedSignalCallback {
        ($obj: WindowActor): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Clutter.Animatable.ConstructorProperties, Clutter.Container.ConstructorProperties, Clutter.Scriptable.ConstructorProperties, Clutter.Actor.ConstructorProperties {

        // Own constructor properties of Meta-12.Meta.WindowActor

        meta_window?: Window | null
    }

}

export interface WindowActor extends Atk.ImplementorIface, Clutter.Animatable, Clutter.Container, Clutter.Scriptable {

    // Own properties of Meta-12.Meta.WindowActor

    readonly meta_window: Window

    // Own fields of Meta-12.Meta.WindowActor

    parent_instance: Clutter.Actor

    // Owm methods of Meta-12.Meta.WindowActor

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
    get_image(clip: cairo.RectangleInt | null): cairo.Surface | null
    /**
     * Gets the #MetaWindow object that the the #MetaWindowActor is displaying
     * @returns the displayed #MetaWindow
     */
    get_meta_window(): Window | null
    /**
     * Gets the ClutterActor that is used to display the contents of the window,
     * or NULL if no texture is shown yet, because the window is not mapped.
     * @returns the #ClutterActor for the contents
     */
    get_texture(): ShapedTexture | null
    /**
     * Gets whether the X window that the actor was displaying has been destroyed
     * @returns %TRUE when the window is destroyed, otherwise %FALSE
     */
    is_destroyed(): boolean
    paint_to_content(clip: Rectangle | null): Clutter.Content | null
    sync_visibility(): void
    /**
     * Thaws/unfreezes the #MetaWindowActor to allow updates and geometry
     * changes after a window was frozen using meta_window_actor_freeze().
     */
    thaw(): void

    // Own signals of Meta-12.Meta.WindowActor

    connect(sigName: "damaged", callback: WindowActor.DamagedSignalCallback): number
    connect_after(sigName: "damaged", callback: WindowActor.DamagedSignalCallback): number
    emit(sigName: "damaged", ...args: any[]): void
    connect(sigName: "effects-completed", callback: WindowActor.EffectsCompletedSignalCallback): number
    connect_after(sigName: "effects-completed", callback: WindowActor.EffectsCompletedSignalCallback): number
    emit(sigName: "effects-completed", ...args: any[]): void
    connect(sigName: "first-frame", callback: WindowActor.FirstFrameSignalCallback): number
    connect_after(sigName: "first-frame", callback: WindowActor.FirstFrameSignalCallback): number
    emit(sigName: "first-frame", ...args: any[]): void
    connect(sigName: "thawed", callback: WindowActor.ThawedSignalCallback): number
    connect_after(sigName: "thawed", callback: WindowActor.ThawedSignalCallback): number
    emit(sigName: "thawed", ...args: any[]): void

    // Class property signals of Meta-12.Meta.WindowActor

    connect(sigName: "notify::meta-window", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::meta-window", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::meta-window", ...args: any[]): void
    connect(sigName: "notify::actions", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actions", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::actions", ...args: any[]): void
    connect(sigName: "notify::allocation", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allocation", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::allocation", ...args: any[]): void
    connect(sigName: "notify::background-color", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::background-color", ...args: any[]): void
    connect(sigName: "notify::background-color-set", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color-set", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::background-color-set", ...args: any[]): void
    connect(sigName: "notify::child-transform", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-transform", ...args: any[]): void
    connect(sigName: "notify::child-transform-set", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform-set", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-transform-set", ...args: any[]): void
    connect(sigName: "notify::clip-rect", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-rect", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clip-rect", ...args: any[]): void
    connect(sigName: "notify::clip-to-allocation", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-to-allocation", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clip-to-allocation", ...args: any[]): void
    connect(sigName: "notify::color-state", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::color-state", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::color-state", ...args: any[]): void
    connect(sigName: "notify::constraints", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constraints", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::constraints", ...args: any[]): void
    connect(sigName: "notify::content", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::content-box", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-box", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-box", ...args: any[]): void
    connect(sigName: "notify::content-gravity", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-gravity", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-gravity", ...args: any[]): void
    connect(sigName: "notify::content-repeat", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-repeat", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-repeat", ...args: any[]): void
    connect(sigName: "notify::effect", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::effect", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::effect", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::fixed-position-set", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-position-set", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fixed-position-set", ...args: any[]): void
    connect(sigName: "notify::fixed-x", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-x", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fixed-x", ...args: any[]): void
    connect(sigName: "notify::fixed-y", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-y", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fixed-y", ...args: any[]): void
    connect(sigName: "notify::has-clip", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-clip", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-clip", ...args: any[]): void
    connect(sigName: "notify::has-pointer", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-pointer", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-pointer", ...args: any[]): void
    connect(sigName: "notify::height", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::magnification-filter", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::magnification-filter", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::magnification-filter", ...args: any[]): void
    connect(sigName: "notify::mapped", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mapped", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mapped", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::min-height", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-height", ...args: any[]): void
    connect(sigName: "notify::min-height-set", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height-set", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-height-set", ...args: any[]): void
    connect(sigName: "notify::min-width", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-width", ...args: any[]): void
    connect(sigName: "notify::min-width-set", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width-set", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-width-set", ...args: any[]): void
    connect(sigName: "notify::minification-filter", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::minification-filter", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::minification-filter", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::natural-height", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::natural-height", ...args: any[]): void
    connect(sigName: "notify::natural-height-set", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height-set", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::natural-height-set", ...args: any[]): void
    connect(sigName: "notify::natural-width", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::natural-width", ...args: any[]): void
    connect(sigName: "notify::natural-width-set", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width-set", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::natural-width-set", ...args: any[]): void
    connect(sigName: "notify::offscreen-redirect", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offscreen-redirect", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::offscreen-redirect", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::pivot-point", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pivot-point", ...args: any[]): void
    connect(sigName: "notify::pivot-point-z", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point-z", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pivot-point-z", ...args: any[]): void
    connect(sigName: "notify::position", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::reactive", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reactive", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::reactive", ...args: any[]): void
    connect(sigName: "notify::realized", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::realized", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::realized", ...args: any[]): void
    connect(sigName: "notify::request-mode", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::request-mode", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::request-mode", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-x", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-x", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-angle-x", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-y", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-y", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-angle-y", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-z", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-z", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-angle-z", ...args: any[]): void
    connect(sigName: "notify::scale-x", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-x", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-x", ...args: any[]): void
    connect(sigName: "notify::scale-y", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-y", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-y", ...args: any[]): void
    connect(sigName: "notify::scale-z", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-z", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-z", ...args: any[]): void
    connect(sigName: "notify::show-on-set-parent", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-on-set-parent", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-on-set-parent", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::text-direction", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-direction", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-direction", ...args: any[]): void
    connect(sigName: "notify::transform", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transform", ...args: any[]): void
    connect(sigName: "notify::transform-set", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform-set", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transform-set", ...args: any[]): void
    connect(sigName: "notify::translation-x", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-x", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::translation-x", ...args: any[]): void
    connect(sigName: "notify::translation-y", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-y", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::translation-y", ...args: any[]): void
    connect(sigName: "notify::translation-z", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-z", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::translation-z", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::x", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::x", ...args: any[]): void
    connect(sigName: "notify::x-align", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-align", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::x-align", ...args: any[]): void
    connect(sigName: "notify::x-expand", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-expand", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::x-expand", ...args: any[]): void
    connect(sigName: "notify::y", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::y", ...args: any[]): void
    connect(sigName: "notify::y-align", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-align", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::y-align", ...args: any[]): void
    connect(sigName: "notify::y-expand", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-expand", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::y-expand", ...args: any[]): void
    connect(sigName: "notify::z-position", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::z-position", callback: (($obj: WindowActor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::z-position", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class WindowActor extends Clutter.Actor {

    // Own properties of Meta-12.Meta.WindowActor

    static name: string
    static $gtype: GObject.GType<WindowActor>

    // Constructors of Meta-12.Meta.WindowActor

    constructor(config?: WindowActor.ConstructorProperties) 
    _init(config?: WindowActor.ConstructorProperties): void
}

export module WindowGroup {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Clutter.Animatable.ConstructorProperties, Clutter.Container.ConstructorProperties, Clutter.Scriptable.ConstructorProperties, Clutter.Actor.ConstructorProperties {
    }

}

export interface WindowGroup extends Atk.ImplementorIface, Clutter.Animatable, Clutter.Container, Clutter.Scriptable {

    // Class property signals of Meta-12.Meta.WindowGroup

    connect(sigName: "notify::actions", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actions", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::actions", ...args: any[]): void
    connect(sigName: "notify::allocation", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allocation", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::allocation", ...args: any[]): void
    connect(sigName: "notify::background-color", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::background-color", ...args: any[]): void
    connect(sigName: "notify::background-color-set", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color-set", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::background-color-set", ...args: any[]): void
    connect(sigName: "notify::child-transform", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-transform", ...args: any[]): void
    connect(sigName: "notify::child-transform-set", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform-set", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-transform-set", ...args: any[]): void
    connect(sigName: "notify::clip-rect", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-rect", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clip-rect", ...args: any[]): void
    connect(sigName: "notify::clip-to-allocation", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-to-allocation", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clip-to-allocation", ...args: any[]): void
    connect(sigName: "notify::color-state", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::color-state", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::color-state", ...args: any[]): void
    connect(sigName: "notify::constraints", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constraints", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::constraints", ...args: any[]): void
    connect(sigName: "notify::content", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::content-box", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-box", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-box", ...args: any[]): void
    connect(sigName: "notify::content-gravity", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-gravity", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-gravity", ...args: any[]): void
    connect(sigName: "notify::content-repeat", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-repeat", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-repeat", ...args: any[]): void
    connect(sigName: "notify::effect", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::effect", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::effect", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::fixed-position-set", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-position-set", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fixed-position-set", ...args: any[]): void
    connect(sigName: "notify::fixed-x", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-x", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fixed-x", ...args: any[]): void
    connect(sigName: "notify::fixed-y", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-y", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fixed-y", ...args: any[]): void
    connect(sigName: "notify::has-clip", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-clip", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-clip", ...args: any[]): void
    connect(sigName: "notify::has-pointer", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-pointer", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-pointer", ...args: any[]): void
    connect(sigName: "notify::height", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::magnification-filter", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::magnification-filter", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::magnification-filter", ...args: any[]): void
    connect(sigName: "notify::mapped", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mapped", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mapped", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::min-height", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-height", ...args: any[]): void
    connect(sigName: "notify::min-height-set", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height-set", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-height-set", ...args: any[]): void
    connect(sigName: "notify::min-width", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-width", ...args: any[]): void
    connect(sigName: "notify::min-width-set", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width-set", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-width-set", ...args: any[]): void
    connect(sigName: "notify::minification-filter", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::minification-filter", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::minification-filter", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::natural-height", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::natural-height", ...args: any[]): void
    connect(sigName: "notify::natural-height-set", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height-set", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::natural-height-set", ...args: any[]): void
    connect(sigName: "notify::natural-width", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::natural-width", ...args: any[]): void
    connect(sigName: "notify::natural-width-set", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width-set", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::natural-width-set", ...args: any[]): void
    connect(sigName: "notify::offscreen-redirect", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offscreen-redirect", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::offscreen-redirect", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::pivot-point", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pivot-point", ...args: any[]): void
    connect(sigName: "notify::pivot-point-z", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point-z", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pivot-point-z", ...args: any[]): void
    connect(sigName: "notify::position", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::reactive", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reactive", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::reactive", ...args: any[]): void
    connect(sigName: "notify::realized", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::realized", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::realized", ...args: any[]): void
    connect(sigName: "notify::request-mode", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::request-mode", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::request-mode", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-x", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-x", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-angle-x", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-y", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-y", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-angle-y", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-z", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-z", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-angle-z", ...args: any[]): void
    connect(sigName: "notify::scale-x", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-x", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-x", ...args: any[]): void
    connect(sigName: "notify::scale-y", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-y", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-y", ...args: any[]): void
    connect(sigName: "notify::scale-z", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-z", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-z", ...args: any[]): void
    connect(sigName: "notify::show-on-set-parent", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-on-set-parent", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-on-set-parent", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::text-direction", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-direction", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-direction", ...args: any[]): void
    connect(sigName: "notify::transform", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transform", ...args: any[]): void
    connect(sigName: "notify::transform-set", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform-set", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transform-set", ...args: any[]): void
    connect(sigName: "notify::translation-x", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-x", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::translation-x", ...args: any[]): void
    connect(sigName: "notify::translation-y", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-y", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::translation-y", ...args: any[]): void
    connect(sigName: "notify::translation-z", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-z", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::translation-z", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::x", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::x", ...args: any[]): void
    connect(sigName: "notify::x-align", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-align", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::x-align", ...args: any[]): void
    connect(sigName: "notify::x-expand", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-expand", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::x-expand", ...args: any[]): void
    connect(sigName: "notify::y", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::y", ...args: any[]): void
    connect(sigName: "notify::y-align", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-align", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::y-align", ...args: any[]): void
    connect(sigName: "notify::y-expand", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-expand", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::y-expand", ...args: any[]): void
    connect(sigName: "notify::z-position", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::z-position", callback: (($obj: WindowGroup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::z-position", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class WindowGroup extends Clutter.Actor {

    // Own properties of Meta-12.Meta.WindowGroup

    static name: string
    static $gtype: GObject.GType<WindowGroup>

    // Constructors of Meta-12.Meta.WindowGroup

    constructor(config?: WindowGroup.ConstructorProperties) 
    _init(config?: WindowGroup.ConstructorProperties): void
}

export module Workspace {

    // Signal callback interfaces

    /**
     * Signal callback interface for `window-added`
     */
    export interface WindowAddedSignalCallback {
        ($obj: Workspace, object: Window): void
    }

    /**
     * Signal callback interface for `window-removed`
     */
    export interface WindowRemovedSignalCallback {
        ($obj: Workspace, object: Window): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Workspace {

    // Own properties of Meta-12.Meta.Workspace

    readonly active: boolean
    readonly n_windows: number
    readonly workspace_index: number

    // Owm methods of Meta-12.Meta.Workspace

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
     * @param focus_this the #MetaWindow to be focused, or %NULL
     * @param timestamp timestamp for `focus_this`
     */
    activate_with_focus(focus_this: Window, timestamp: number): void
    /**
     * Gets the #MetaDisplay that the workspace is part of.
     * @returns the #MetaDisplay for the workspace
     */
    get_display(): Display
    /**
     * Calculate and retrieve the workspace that is next to `workspace,`
     * according to `direction` and the current workspace layout, as set
     * by meta_screen_override_workspace_layout().
     * @param direction a #MetaMotionDirection, relative to `workspace`
     * @returns the workspace next to @workspace, or   @workspace itself if the neighbor would be outside the layout
     */
    get_neighbor(direction: MotionDirection): Workspace
    /**
     * Stores the work area in `area`.
     */
    get_work_area_all_monitors(): /* area */ Rectangle
    /**
     * Stores the work area for `which_monitor` on `workspace`
     * in `area`.
     * @param which_monitor a monitor index
     */
    get_work_area_for_monitor(which_monitor: number): /* area */ Rectangle
    index(): number
    /**
     * Gets windows contained on the workspace, including workspace->windows
     * and also sticky windows. Override-redirect windows are not included.
     * @returns the list of windows.
     */
    list_windows(): Window[]
    /**
     * Sets a list of struts that will be used in addition to the struts
     * of the windows in the workspace when computing the work area of
     * the workspace.
     * @param struts list of #MetaStrut
     */
    set_builtin_struts(struts: Strut[]): void

    // Own signals of Meta-12.Meta.Workspace

    connect(sigName: "window-added", callback: Workspace.WindowAddedSignalCallback): number
    connect_after(sigName: "window-added", callback: Workspace.WindowAddedSignalCallback): number
    emit(sigName: "window-added", object: Window, ...args: any[]): void
    connect(sigName: "window-removed", callback: Workspace.WindowRemovedSignalCallback): number
    connect_after(sigName: "window-removed", callback: Workspace.WindowRemovedSignalCallback): number
    emit(sigName: "window-removed", object: Window, ...args: any[]): void

    // Class property signals of Meta-12.Meta.Workspace

    connect(sigName: "notify::active", callback: (($obj: Workspace, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: Workspace, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::active", ...args: any[]): void
    connect(sigName: "notify::n-windows", callback: (($obj: Workspace, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::n-windows", callback: (($obj: Workspace, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::n-windows", ...args: any[]): void
    connect(sigName: "notify::workspace-index", callback: (($obj: Workspace, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::workspace-index", callback: (($obj: Workspace, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::workspace-index", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class Workspace extends GObject.Object {

    // Own properties of Meta-12.Meta.Workspace

    static name: string
    static $gtype: GObject.GType<Workspace>

    // Constructors of Meta-12.Meta.Workspace

    constructor(config?: Workspace.ConstructorProperties) 
    _init(config?: Workspace.ConstructorProperties): void
}

export module WorkspaceManager {

    // Signal callback interfaces

    /**
     * Signal callback interface for `active-workspace-changed`
     */
    export interface ActiveWorkspaceChangedSignalCallback {
        ($obj: WorkspaceManager): void
    }

    /**
     * Signal callback interface for `showing-desktop-changed`
     */
    export interface ShowingDesktopChangedSignalCallback {
        ($obj: WorkspaceManager): void
    }

    /**
     * Signal callback interface for `workspace-added`
     */
    export interface WorkspaceAddedSignalCallback {
        ($obj: WorkspaceManager, object: number): void
    }

    /**
     * Signal callback interface for `workspace-removed`
     */
    export interface WorkspaceRemovedSignalCallback {
        ($obj: WorkspaceManager, object: number): void
    }

    /**
     * Signal callback interface for `workspace-switched`
     */
    export interface WorkspaceSwitchedSignalCallback {
        ($obj: WorkspaceManager, object: number, p0: number, p1: MotionDirection): void
    }

    /**
     * Signal callback interface for `workspaces-reordered`
     */
    export interface WorkspacesReorderedSignalCallback {
        ($obj: WorkspaceManager): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface WorkspaceManager {

    // Own properties of Meta-12.Meta.WorkspaceManager

    readonly layout_columns: number
    readonly layout_rows: number
    readonly n_workspaces: number

    // Owm methods of Meta-12.Meta.WorkspaceManager

    /**
     * Append a new workspace to the workspace manager and (optionally) switch to that
     * display.
     * @param activate %TRUE if the workspace should be switched to after creation
     * @param timestamp if switching to a new workspace, timestamp to be used when   focusing a window on the new workspace. (Doesn't hurt to pass a valid   timestamp when available even if not switching workspaces.)
     * @returns the newly appended workspace.
     */
    append_new_workspace(activate: boolean, timestamp: number): Workspace
    get_active_workspace(): Workspace
    get_active_workspace_index(): number
    get_n_workspaces(): number
    /**
     * Gets the workspace object for one of a workspace manager's workspaces given the workspace
     * index. It's valid to call this function with an out-of-range index and it
     * will robustly return %NULL.
     * @param index index of one of the display's workspaces
     * @returns the workspace object with specified   index, or %NULL if the index is out of range.
     */
    get_workspace_by_index(index: number): Workspace | null
    /**
     * Explicitly set the layout of workspaces. Once this has been called, the contents of the
     * _NET_DESKTOP_LAYOUT property on the root window are completely ignored.
     * @param starting_corner the corner at which the first workspace is found
     * @param vertical_layout if %TRUE the workspaces are laid out in columns rather than rows
     * @param n_rows number of rows of workspaces, or -1 to determine the number of rows from   `n_columns` and the total number of workspaces
     * @param n_columns number of columns of workspaces, or -1 to determine the number of columns from   `n_rows` and the total number of workspaces
     */
    override_workspace_layout(starting_corner: DisplayCorner, vertical_layout: boolean, n_rows: number, n_columns: number): void
    remove_workspace(workspace: Workspace, timestamp: number): void
    /**
     * Reorder a workspace to a new index. If the workspace is currently active
     * the "active-workspace-changed" signal will be emitted.
     * If the workspace's index is the same as `new_index` or the workspace
     * will not be found in the list, this function will return.
     * 
     * Calling this function will also emit the "workspaces-reordered" signal.
     * @param workspace a #MetaWorkspace to reorder
     * @param new_index the new index of the passed workspace
     */
    reorder_workspace(workspace: Workspace, new_index: number): void

    // Own signals of Meta-12.Meta.WorkspaceManager

    connect(sigName: "active-workspace-changed", callback: WorkspaceManager.ActiveWorkspaceChangedSignalCallback): number
    connect_after(sigName: "active-workspace-changed", callback: WorkspaceManager.ActiveWorkspaceChangedSignalCallback): number
    emit(sigName: "active-workspace-changed", ...args: any[]): void
    connect(sigName: "showing-desktop-changed", callback: WorkspaceManager.ShowingDesktopChangedSignalCallback): number
    connect_after(sigName: "showing-desktop-changed", callback: WorkspaceManager.ShowingDesktopChangedSignalCallback): number
    emit(sigName: "showing-desktop-changed", ...args: any[]): void
    connect(sigName: "workspace-added", callback: WorkspaceManager.WorkspaceAddedSignalCallback): number
    connect_after(sigName: "workspace-added", callback: WorkspaceManager.WorkspaceAddedSignalCallback): number
    emit(sigName: "workspace-added", object: number, ...args: any[]): void
    connect(sigName: "workspace-removed", callback: WorkspaceManager.WorkspaceRemovedSignalCallback): number
    connect_after(sigName: "workspace-removed", callback: WorkspaceManager.WorkspaceRemovedSignalCallback): number
    emit(sigName: "workspace-removed", object: number, ...args: any[]): void
    connect(sigName: "workspace-switched", callback: WorkspaceManager.WorkspaceSwitchedSignalCallback): number
    connect_after(sigName: "workspace-switched", callback: WorkspaceManager.WorkspaceSwitchedSignalCallback): number
    emit(sigName: "workspace-switched", object: number, p0: number, p1: MotionDirection, ...args: any[]): void
    connect(sigName: "workspaces-reordered", callback: WorkspaceManager.WorkspacesReorderedSignalCallback): number
    connect_after(sigName: "workspaces-reordered", callback: WorkspaceManager.WorkspacesReorderedSignalCallback): number
    emit(sigName: "workspaces-reordered", ...args: any[]): void

    // Class property signals of Meta-12.Meta.WorkspaceManager

    connect(sigName: "notify::layout-columns", callback: (($obj: WorkspaceManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-columns", callback: (($obj: WorkspaceManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::layout-columns", ...args: any[]): void
    connect(sigName: "notify::layout-rows", callback: (($obj: WorkspaceManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-rows", callback: (($obj: WorkspaceManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::layout-rows", ...args: any[]): void
    connect(sigName: "notify::n-workspaces", callback: (($obj: WorkspaceManager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::n-workspaces", callback: (($obj: WorkspaceManager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::n-workspaces", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class WorkspaceManager extends GObject.Object {

    // Own properties of Meta-12.Meta.WorkspaceManager

    static name: string
    static $gtype: GObject.GType<WorkspaceManager>

    // Constructors of Meta-12.Meta.WorkspaceManager

    constructor(config?: WorkspaceManager.ConstructorProperties) 
    _init(config?: WorkspaceManager.ConstructorProperties): void
}

export module X11Display {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface X11Display {

    // Owm methods of Meta-12.Meta.X11Display

    set_stage_input_region(region: xfixes.XserverRegion): void

    // Class property signals of Meta-12.Meta.X11Display

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

export class X11Display extends GObject.Object {

    // Own properties of Meta-12.Meta.X11Display

    static name: string
    static $gtype: GObject.GType<X11Display>

    // Constructors of Meta-12.Meta.X11Display

    constructor(config?: X11Display.ConstructorProperties) 
    _init(config?: X11Display.ConstructorProperties): void
}

export interface BackendClass {
}

export abstract class BackendClass {

    // Own properties of Meta-12.Meta.BackendClass

    static name: string
}

export interface BackgroundActorClass {

    // Own fields of Meta-12.Meta.BackgroundActorClass

    parent_class: Clutter.ActorClass
}

export abstract class BackgroundActorClass {

    // Own properties of Meta-12.Meta.BackgroundActorClass

    static name: string
}

export interface BackgroundClass {

    // Own fields of Meta-12.Meta.BackgroundClass

    parent_class: GObject.ObjectClass
}

export abstract class BackgroundClass {

    // Own properties of Meta-12.Meta.BackgroundClass

    static name: string
}

export interface BackgroundContentClass {

    // Own fields of Meta-12.Meta.BackgroundContentClass

    parent_class: GObject.ObjectClass
}

export abstract class BackgroundContentClass {

    // Own properties of Meta-12.Meta.BackgroundContentClass

    static name: string
}

export interface BackgroundGroupClass {

    // Own fields of Meta-12.Meta.BackgroundGroupClass

    parent_class: Clutter.ActorClass
}

export abstract class BackgroundGroupClass {

    // Own properties of Meta-12.Meta.BackgroundGroupClass

    static name: string
}

export interface BackgroundImageCacheClass {

    // Own fields of Meta-12.Meta.BackgroundImageCacheClass

    parent_class: GObject.ObjectClass
}

export abstract class BackgroundImageCacheClass {

    // Own properties of Meta-12.Meta.BackgroundImageCacheClass

    static name: string
}

export interface BackgroundImageClass {

    // Own fields of Meta-12.Meta.BackgroundImageClass

    parent_class: GObject.ObjectClass
}

export abstract class BackgroundImageClass {

    // Own properties of Meta-12.Meta.BackgroundImageClass

    static name: string
}

export interface BarrierClass {

    // Own fields of Meta-12.Meta.BarrierClass

    parent_class: GObject.ObjectClass
}

export abstract class BarrierClass {

    // Own properties of Meta-12.Meta.BarrierClass

    static name: string
}

export interface BarrierEvent {

    // Own fields of Meta-12.Meta.BarrierEvent

    /**
     * A unique integer ID identifying a
     * consecutive series of motions at or along the barrier
     * @field 
     */
    event_id: number
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

    // Own properties of Meta-12.Meta.BarrierEvent

    static name: string
}

export interface ButtonLayout {

    // Own fields of Meta-12.Meta.ButtonLayout

    left_buttons: ButtonFunction[]
    left_buttons_has_spacer: boolean[]
    right_buttons: ButtonFunction[]
    right_buttons_has_spacer: boolean[]
}

export class ButtonLayout {

    // Own properties of Meta-12.Meta.ButtonLayout

    static name: string
}

export interface CloseDialogInterface {

    // Own fields of Meta-12.Meta.CloseDialogInterface

    parent_iface: GObject.TypeInterface
    show: (dialog: CloseDialog) => void
    hide: (dialog: CloseDialog) => void
    focus: (dialog: CloseDialog) => void
}

export abstract class CloseDialogInterface {

    // Own properties of Meta-12.Meta.CloseDialogInterface

    static name: string
}

export interface CompositorClass {
}

export abstract class CompositorClass {

    // Own properties of Meta-12.Meta.CompositorClass

    static name: string
}

export interface ContextClass {
}

export abstract class ContextClass {

    // Own properties of Meta-12.Meta.ContextClass

    static name: string
}

export interface CursorTrackerClass {
}

export abstract class CursorTrackerClass {

    // Own properties of Meta-12.Meta.CursorTrackerClass

    static name: string
}

export interface DisplayClass {
}

export abstract class DisplayClass {

    // Own properties of Meta-12.Meta.DisplayClass

    static name: string
}

export interface DndClass {

    // Own fields of Meta-12.Meta.DndClass

    parent_class: GObject.ObjectClass
}

export abstract class DndClass {

    // Own properties of Meta-12.Meta.DndClass

    static name: string
}

export interface Edge {

    // Own fields of Meta-12.Meta.Edge

    /**
     * #MetaRectangle with the bounds of the edge
     * @field 
     */
    rect: Rectangle
    /**
     * Side
     * @field 
     */
    side_type: Side
    /**
     * To what belongs the edge
     * @field 
     */
    edge_type: EdgeType
}

export class Edge {

    // Own properties of Meta-12.Meta.Edge

    static name: string
}

export interface Frame {
}

export class Frame {

    // Own properties of Meta-12.Meta.Frame

    static name: string
}

export interface FrameBorder {

    // Own fields of Meta-12.Meta.FrameBorder

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

    // Own properties of Meta-12.Meta.FrameBorder

    static name: string
}

export interface FrameBorders {

    // Own fields of Meta-12.Meta.FrameBorders

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

    // Owm methods of Meta-12.Meta.FrameBorders

    clear(): void
}

export class FrameBorders {

    // Own properties of Meta-12.Meta.FrameBorders

    static name: string
}

export interface Group {

    // Owm methods of Meta-12.Meta.Group

    get_size(): number
    get_startup_id(): string | null
    list_windows(): Window[]
    update_layers(): void
}

export class Group {

    // Own properties of Meta-12.Meta.Group

    static name: string
}

export interface IdleMonitorClass {

    // Own fields of Meta-12.Meta.IdleMonitorClass

    parent_class: GObject.ObjectClass
}

export abstract class IdleMonitorClass {

    // Own properties of Meta-12.Meta.IdleMonitorClass

    static name: string
}

export interface InhibitShortcutsDialogInterface {

    // Own fields of Meta-12.Meta.InhibitShortcutsDialogInterface

    parent_iface: GObject.TypeInterface
    show: (dialog: InhibitShortcutsDialog) => void
    hide: (dialog: InhibitShortcutsDialog) => void
}

export abstract class InhibitShortcutsDialogInterface {

    // Own properties of Meta-12.Meta.InhibitShortcutsDialogInterface

    static name: string
}

export interface KeyBinding {

    // Owm methods of Meta-12.Meta.KeyBinding

    get_mask(): number
    get_modifiers(): Clutter.ModifierType
    get_name(): string | null
    is_builtin(): boolean
    is_reversed(): boolean
}

export class KeyBinding {

    // Own properties of Meta-12.Meta.KeyBinding

    static name: string
}

export interface LatersClass {

    // Own fields of Meta-12.Meta.LatersClass

    parent_class: GObject.ObjectClass
}

export abstract class LatersClass {

    // Own properties of Meta-12.Meta.LatersClass

    static name: string
}

export interface LaunchContextClass {

    // Own fields of Meta-12.Meta.LaunchContextClass

    parent_class: Gio.AppLaunchContextClass
}

export abstract class LaunchContextClass {

    // Own properties of Meta-12.Meta.LaunchContextClass

    static name: string
}

export interface MonitorManagerClass {
}

export abstract class MonitorManagerClass {

    // Own properties of Meta-12.Meta.MonitorManagerClass

    static name: string
}

export interface PluginClass {

    // Own fields of Meta-12.Meta.PluginClass

    start: (plugin: Plugin) => void
    minimize: (plugin: Plugin, actor: WindowActor) => void
    unminimize: (plugin: Plugin, actor: WindowActor) => void
    size_changed: (plugin: Plugin, actor: WindowActor) => void
    size_change: (plugin: Plugin, actor: WindowActor, which_change: SizeChange, old_frame_rect: Rectangle, old_buffer_rect: Rectangle) => void
    map: (plugin: Plugin, actor: WindowActor) => void
    destroy: (plugin: Plugin, actor: WindowActor) => void
    switch_workspace: (plugin: Plugin, from: number, to: number, direction: MotionDirection) => void
    show_tile_preview: (plugin: Plugin, window: Window, tile_rect: Rectangle, tile_monitor_number: number) => void
    hide_tile_preview: (plugin: Plugin) => void
    show_window_menu: (plugin: Plugin, window: Window, menu: WindowMenuType, x: number, y: number) => void
    show_window_menu_for_rect: (plugin: Plugin, window: Window, menu: WindowMenuType, rect: Rectangle) => void
    kill_window_effects: (plugin: Plugin, actor: WindowActor) => void
    kill_switch_workspace: (plugin: Plugin) => void
    xevent_filter: (plugin: Plugin, event: xlib.XEvent) => boolean
    keybinding_filter: (plugin: Plugin, binding: KeyBinding) => boolean
    confirm_display_change: (plugin: Plugin) => void
    plugin_info: (plugin: Plugin) => PluginInfo
    locate_pointer: (plugin: Plugin) => void
}

export abstract class PluginClass {

    // Own properties of Meta-12.Meta.PluginClass

    static name: string
}

export interface PluginInfo {

    // Own fields of Meta-12.Meta.PluginInfo

    /**
     * name of the plugin
     * @field 
     */
    name: string | null
    /**
     * version of the plugin
     * @field 
     */
    version: string | null
    /**
     * author of the plugin
     * @field 
     */
    author: string | null
    /**
     * license of the plugin
     * @field 
     */
    license: string | null
    /**
     * description of the plugin
     * @field 
     */
    description: string | null
}

export class PluginInfo {

    // Own properties of Meta-12.Meta.PluginInfo

    static name: string
}

export interface Rectangle {

    // Own fields of Meta-12.Meta.Rectangle

    /**
     * X coordinate of the top-left corner
     * @field 
     */
    x: number
    /**
     * Y coordinate of the top-left corner
     * @field 
     */
    y: number
    /**
     * Width of the rectangle
     * @field 
     */
    width: number
    /**
     * Height of the rectangle
     * @field 
     */
    height: number

    // Owm methods of Meta-12.Meta.Rectangle

    area(): number
    contains_rect(inner_rect: Rectangle): boolean
    copy(): Rectangle
    could_fit_rect(inner_rect: Rectangle): boolean
    equal(src2: Rectangle): boolean
    free(): void
    horiz_overlap(rect2: Rectangle): boolean
    intersect(src2: Rectangle): [ /* returnType */ boolean, /* dest */ Rectangle ]
    overlap(rect2: Rectangle): boolean
    union(rect2: Rectangle): /* dest */ Rectangle
    vert_overlap(rect2: Rectangle): boolean
}

export class Rectangle {

    // Own properties of Meta-12.Meta.Rectangle

    static name: string
}

export interface RemoteAccessControllerClass {

    // Own fields of Meta-12.Meta.RemoteAccessControllerClass

    parent_class: GObject.ObjectClass
}

export abstract class RemoteAccessControllerClass {

    // Own properties of Meta-12.Meta.RemoteAccessControllerClass

    static name: string
}

export interface RemoteAccessHandleClass {

    // Own fields of Meta-12.Meta.RemoteAccessHandleClass

    parent_class: GObject.ObjectClass
    stop: (handle: RemoteAccessHandle) => void
}

export abstract class RemoteAccessHandleClass {

    // Own properties of Meta-12.Meta.RemoteAccessHandleClass

    static name: string
}

export interface SelectionClass {

    // Own fields of Meta-12.Meta.SelectionClass

    parent_class: GObject.ObjectClass
}

export abstract class SelectionClass {

    // Own properties of Meta-12.Meta.SelectionClass

    static name: string
}

export interface SelectionSourceClass {

    // Own fields of Meta-12.Meta.SelectionSourceClass

    parent_class: GObject.ObjectClass
    activated: (source: SelectionSource) => void
    deactivated: (source: SelectionSource) => void
    get_mimetypes: (source: SelectionSource) => string[]
    read_async: (source: SelectionSource, mimetype: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null) => void
    read_finish: (source: SelectionSource, result: Gio.AsyncResult) => Gio.InputStream
}

export abstract class SelectionSourceClass {

    // Own properties of Meta-12.Meta.SelectionSourceClass

    static name: string
}

export interface SelectionSourceMemoryClass {

    // Own fields of Meta-12.Meta.SelectionSourceMemoryClass

    parent_class: SelectionSourceClass
}

export abstract class SelectionSourceMemoryClass {

    // Own properties of Meta-12.Meta.SelectionSourceMemoryClass

    static name: string
}

export interface Settings {

    // Owm methods of Meta-12.Meta.Settings

    get_font_dpi(): number
    get_ui_scaling_factor(): number
}

export class Settings {

    // Own properties of Meta-12.Meta.Settings

    static name: string
}

export interface Shadow {

    // Owm methods of Meta-12.Meta.Shadow

    /**
     * Computes the bounds of the pixels that will be affected by
     * meta_shadow_paint()
     * @param window_x x position of the region to paint a shadow for
     * @param window_y y position of the region to paint a shadow for
     * @param window_width actual width of the region to paint a shadow for
     * @param window_height actual height of the region to paint a shadow for
     * @param bounds 
     */
    get_bounds(window_x: number, window_y: number, window_width: number, window_height: number, bounds: cairo.RectangleInt): void
    /**
     * Paints the shadow at the given position, for the specified actual
     * size of the region. (Since a #MetaShadow can be shared between
     * different sizes with the same extracted #MetaWindowShape the
     * size needs to be passed in here.)
     * @param framebuffer 
     * @param window_x x position of the region to paint a shadow for
     * @param window_y y position of the region to paint a shadow for
     * @param window_width actual width of the region to paint a shadow for
     * @param window_height actual height of the region to paint a shadow for
     * @param opacity 
     * @param clip if non-%NULL specifies the visible portion   of the shadow.
     * @param clip_strictly if %TRUE, drawing will be clipped strictly   to `clip,` otherwise, it will be only used to optimize   drawing.
     */
    paint(framebuffer: Cogl.Framebuffer, window_x: number, window_y: number, window_width: number, window_height: number, opacity: number, clip: cairo.Region | null, clip_strictly: boolean): void
    ref(): Shadow
    unref(): void
}

/**
 * #MetaShadow holds a shadow texture along with information about how to
 * apply that texture to draw a window texture. (E.g., it knows how big the
 * unscaled borders are on each side of the shadow texture.)
 * @record 
 */
export class Shadow {

    // Own properties of Meta-12.Meta.Shadow

    static name: string
}

export interface ShadowFactoryClass {

    // Own fields of Meta-12.Meta.ShadowFactoryClass

    parent_class: GObject.ObjectClass
}

export abstract class ShadowFactoryClass {

    // Own properties of Meta-12.Meta.ShadowFactoryClass

    static name: string
}

export interface ShadowParams {

    // Own fields of Meta-12.Meta.ShadowParams

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
    top_fade: number
    /**
     * horizontal offset of the shadow with respect to the
     *  shape being shadowed, in pixels
     * @field 
     */
    x_offset: number
    /**
     * vertical offset of the shadow with respect to the
     *  shape being shadowed, in pixels
     * @field 
     */
    y_offset: number
    /**
     * opacity of the shadow, from 0 to 255
     * @field 
     */
    opacity: number
}

/**
 * The #MetaShadowParams structure holds information about how to draw
 * a particular style of shadow.
 * @record 
 */
export class ShadowParams {

    // Own properties of Meta-12.Meta.ShadowParams

    static name: string
}

export interface ShapedTextureClass {

    // Own fields of Meta-12.Meta.ShapedTextureClass

    parent_class: GObject.ObjectClass
}

export abstract class ShapedTextureClass {

    // Own properties of Meta-12.Meta.ShapedTextureClass

    static name: string
}

export interface SoundPlayerClass {

    // Own fields of Meta-12.Meta.SoundPlayerClass

    parent_class: GObject.ObjectClass
}

export abstract class SoundPlayerClass {

    // Own properties of Meta-12.Meta.SoundPlayerClass

    static name: string
}

export interface StageClass {

    // Own fields of Meta-12.Meta.StageClass

    parent_class: Clutter.StageClass
}

export abstract class StageClass {

    // Own properties of Meta-12.Meta.StageClass

    static name: string
}

export interface StartupNotificationClass {

    // Own fields of Meta-12.Meta.StartupNotificationClass

    parent_class: GObject.ObjectClass
}

export abstract class StartupNotificationClass {

    // Own properties of Meta-12.Meta.StartupNotificationClass

    static name: string
}

export interface StartupSequenceClass {
}

export abstract class StartupSequenceClass {

    // Own properties of Meta-12.Meta.StartupSequenceClass

    static name: string
}

export interface Strut {

    // Own fields of Meta-12.Meta.Strut

    /**
     * #MetaRectangle the #MetaStrut is on
     * @field 
     */
    rect: Rectangle
    /**
     * #MetaSide the #MetaStrut is on
     * @field 
     */
    side: Side
}

export class Strut {

    // Own properties of Meta-12.Meta.Strut

    static name: string
}

export interface WaylandClientClass {

    // Own fields of Meta-12.Meta.WaylandClientClass

    parent_class: GObject.ObjectClass
}

export abstract class WaylandClientClass {

    // Own properties of Meta-12.Meta.WaylandClientClass

    static name: string
}

export interface WindowActorClass {
}

export abstract class WindowActorClass {

    // Own properties of Meta-12.Meta.WindowActorClass

    static name: string
}

export interface WindowClass {
}

export abstract class WindowClass {

    // Own properties of Meta-12.Meta.WindowClass

    static name: string
}

export interface WindowGroupClass {

    // Own fields of Meta-12.Meta.WindowGroupClass

    parent_class: Clutter.ActorClass
}

export abstract class WindowGroupClass {

    // Own properties of Meta-12.Meta.WindowGroupClass

    static name: string
}

export interface WindowShape {

    // Owm methods of Meta-12.Meta.WindowShape

    equal(shape_b: WindowShape): boolean
    get_borders(border_top: number, border_right: number, border_bottom: number, border_left: number): void
    hash(): number
    ref(): WindowShape
    /**
     * Converts the shape to to a cairo_region_t using the given width
     * and height for the central scaled region.
     * @param center_width size of the central region horizontally
     * @param center_height size of the central region vertically
     * @returns a newly created region
     */
    to_region(center_width: number, center_height: number): cairo.Region
    unref(): void
}

/**
 * #MetaWindowShape represents a 9-sliced region with borders on all sides that
 * are unscaled, and a constant central region that is scaled. For example,
 * the regions representing two windows that are rounded rectangles,
 * with the same corner radius but different sizes, have the
 * same MetaWindowShape.
 * #MetaWindowShape is designed to be used as part of a hash table key, so has
 * efficient hash and equal functions.
 * @record 
 */
export class WindowShape {

    // Own properties of Meta-12.Meta.WindowShape

    static name: string

    // Constructors of Meta-12.Meta.WindowShape

    constructor(region: cairo.Region) 
    static new(region: cairo.Region): WindowShape
}

export interface WorkspaceClass {
}

export abstract class WorkspaceClass {

    // Own properties of Meta-12.Meta.WorkspaceClass

    static name: string
}

export interface WorkspaceManagerClass {

    // Own fields of Meta-12.Meta.WorkspaceManagerClass

    parent_class: GObject.ObjectClass
}

export abstract class WorkspaceManagerClass {

    // Own properties of Meta-12.Meta.WorkspaceManagerClass

    static name: string
}

export interface X11DisplayClass {

    // Own fields of Meta-12.Meta.X11DisplayClass

    parent_class: GObject.ObjectClass
}

export abstract class X11DisplayClass {

    // Own properties of Meta-12.Meta.X11DisplayClass

    static name: string
}

/**
 * Name of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
 */
export const __name__: string
/**
 * Version of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
 */
export const __version__: string
// END