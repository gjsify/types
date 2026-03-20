/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

import '@girs/gjs';

// Module dependencies
import type xlib from '@girs/xlib-2.0';
import type xfixes from '@girs/xfixes-4.0';
import type Mtk from '@girs/mtk-15';
import type Graphene from '@girs/graphene-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Gio from '@girs/gio-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GDesktopEnums from '@girs/gdesktopenums-3.0';
import type CoglPango from '@girs/coglpango-15';
import type PangoCairo from '@girs/pangocairo-1.0';
import type cairo from 'cairo';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Cogl from '@girs/cogl-15';
import type GL from '@girs/gl-1.0';
import type Clutter from '@girs/clutter-15';
import type Atk from '@girs/atk-1.0';

export namespace Meta {
    /**
     * Meta-15
     */

    /**
     * @gir-type Enum
     */
    export namespace ButtonFunction {
        export const $gtype: GObject.GType<ButtonFunction>;
    }

    /**
     * Function a window button can have.
     *
     * Note, you can't add stuff here without extending the theme format
     * to draw a new function and breaking all existing themes.
     * @gir-type Enum
     */
    enum ButtonFunction {
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
         * Marks the end of the {@link Meta.ButtonFunction} enumeration
         */
        LAST,
    }

    /**
     * @gir-type Enum
     */
    export namespace CloseDialogResponse {
        export const $gtype: GObject.GType<CloseDialogResponse>;
    }

    /**
     * @gir-type Enum
     */
    enum CloseDialogResponse {
        WAIT,
        FORCE_CLOSE,
    }

    /**
     * @gir-type Enum
     */
    export namespace CompEffect {
        export const $gtype: GObject.GType<CompEffect>;
    }

    /**
     * Indicates the appropriate effect to show the user for
     * `meta_compositor_show_window()` and `meta_compositor_hide_window()`
     * @gir-type Enum
     */
    enum CompEffect {
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

    /**
     * @gir-type Enum
     */
    export namespace CompositorType {
        export const $gtype: GObject.GType<CompositorType>;
    }

    /**
     * @gir-type Enum
     */
    enum CompositorType {
        WAYLAND,
        X11,
    }

    /**
     * @gir-type Enum
     */
    export namespace Cursor {
        export const $gtype: GObject.GType<Cursor>;
    }

    /**
     * @gir-type Enum
     */
    enum Cursor {
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

    /**
     * @gir-type Enum
     */
    export namespace DisplayCorner {
        export const $gtype: GObject.GType<DisplayCorner>;
    }

    /**
     * @gir-type Enum
     */
    enum DisplayCorner {
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

    /**
     * @gir-type Enum
     */
    export namespace DisplayDirection {
        export const $gtype: GObject.GType<DisplayDirection>;
    }

    /**
     * @gir-type Enum
     */
    enum DisplayDirection {
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

    /**
     * @gir-type Enum
     */
    export namespace EdgeType {
        export const $gtype: GObject.GType<EdgeType>;
    }

    /**
     * @gir-type Enum
     */
    enum EdgeType {
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

    /**
     * @gir-type Enum
     */
    export namespace ExitCode {
        export const $gtype: GObject.GType<ExitCode>;
    }

    /**
     * @gir-type Enum
     */
    enum ExitCode {
        /**
         * Success
         */
        SUCCESS,
        /**
         * Error
         */
        ERROR,
    }

    /**
     * @gir-type Enum
     */
    export namespace FrameType {
        export const $gtype: GObject.GType<FrameType>;
    }

    /**
     * @gir-type Enum
     */
    enum FrameType {
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
         * Marks the end of the {@link Meta.FrameType} enumeration
         */
        LAST,
    }

    /**
     * @gir-type Enum
     */
    export namespace GrabOp {
        export const $gtype: GObject.GType<GrabOp>;
    }

    /**
     * @gir-type Enum
     */
    enum GrabOp {
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

    /**
     * @gir-type Enum
     */
    export namespace Gravity {
        export const $gtype: GObject.GType<Gravity>;
    }

    /**
     * @gir-type Enum
     */
    enum Gravity {
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

    /**
     * @gir-type Enum
     */
    export namespace InhibitShortcutsDialogResponse {
        export const $gtype: GObject.GType<InhibitShortcutsDialogResponse>;
    }

    /**
     * @gir-type Enum
     */
    enum InhibitShortcutsDialogResponse {
        ALLOW,
        DENY,
    }

    /**
     * @gir-type Enum
     */
    export namespace KeyBindingAction {
        export const $gtype: GObject.GType<KeyBindingAction>;
    }

    /**
     * @gir-type Enum
     */
    enum KeyBindingAction {
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

    /**
     * @gir-type Enum
     */
    export namespace LaterType {
        export const $gtype: GObject.GType<LaterType>;
    }

    /**
     * @gir-type Enum
     */
    enum LaterType {
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

    /**
     * @gir-type Enum
     */
    export namespace MonitorSwitchConfigType {
        export const $gtype: GObject.GType<MonitorSwitchConfigType>;
    }

    /**
     * @gir-type Enum
     */
    enum MonitorSwitchConfigType {
        ALL_MIRROR,
        ALL_LINEAR,
        EXTERNAL,
        BUILTIN,
        UNKNOWN,
    }

    /**
     * @gir-type Enum
     */
    export namespace MotionDirection {
        export const $gtype: GObject.GType<MotionDirection>;
    }

    /**
     * @gir-type Enum
     */
    enum MotionDirection {
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

    /**
     * @gir-type Enum
     */
    export namespace MultiTextureFormat {
        export const $gtype: GObject.GType<MultiTextureFormat>;
    }

    /**
     * A representation for complex pixel formats
     *
     * Some pixel formats that are used in the wild are a bit more complex than
     * just ARGB and all its variants. For example: a component might be put in a
     * different plane (i.e. at a different place in memory). Another example are
     * formats that use Y, U, and V components rather than RGB; if we composite them
     * onto an RGBA framebuffer, we have to make sure for example that these get
     * converted to the right color format first (using e.g. a shader).
     * @gir-type Enum
     */
    enum MultiTextureFormat {
        /**
         * Invalid value
         */
        INVALID,
        /**
         * Any format supported by Cogl (see {@link Cogl.PixelFormat})
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

    /**
     * @gir-type Enum
     */
    export namespace Orientation {
        export const $gtype: GObject.GType<Orientation>;
    }

    /**
     * @gir-type Enum
     */
    enum Orientation {
        UNDEFINED,
        NORMAL,
        BOTTOM_UP,
        LEFT_UP,
        RIGHT_UP,
    }

    /**
     * @gir-type Enum
     */
    export namespace PadDirection {
        export const $gtype: GObject.GType<PadDirection>;
    }

    /**
     * @gir-type Enum
     */
    enum PadDirection {
        UP,
        DOWN,
        CW,
        CCW,
    }

    /**
     * @gir-type Enum
     */
    export namespace PadFeatureType {
        export const $gtype: GObject.GType<PadFeatureType>;
    }

    /**
     * @gir-type Enum
     */
    enum PadFeatureType {
        RING,
        STRIP,
    }

    /**
     * @gir-type Enum
     */
    export namespace PowerSaveChangeReason {
        export const $gtype: GObject.GType<PowerSaveChangeReason>;
    }

    /**
     * @gir-type Enum
     */
    enum PowerSaveChangeReason {
        MODE_CHANGE,
        HOTPLUG,
    }

    /**
     * @gir-type Enum
     */
    export namespace Preference {
        export const $gtype: GObject.GType<Preference>;
    }

    /**
     * @gir-type Enum
     */
    enum Preference {
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

    /**
     * @gir-type Enum
     */
    export namespace SelectionType {
        export const $gtype: GObject.GType<SelectionType>;
    }

    /**
     * @gir-type Enum
     */
    enum SelectionType {
        SELECTION_PRIMARY,
        SELECTION_CLIPBOARD,
        SELECTION_DND,
        N_SELECTION_TYPES,
    }

    /**
     * @gir-type Enum
     */
    export namespace Side {
        export const $gtype: GObject.GType<Side>;
    }

    /**
     * @gir-type Enum
     */
    enum Side {
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

    /**
     * @gir-type Enum
     */
    export namespace SizeChange {
        export const $gtype: GObject.GType<SizeChange>;
    }

    /**
     * @gir-type Enum
     */
    enum SizeChange {
        MAXIMIZE,
        UNMAXIMIZE,
        FULLSCREEN,
        UNFULLSCREEN,
        MONITOR_MOVE,
    }

    /**
     * @gir-type Enum
     */
    export namespace StackLayer {
        export const $gtype: GObject.GType<StackLayer>;
    }

    /**
     * Layers a window can be in.
     * These MUST be in the order of stacking.
     * @gir-type Enum
     */
    enum StackLayer {
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
         * Marks the end of the {@link Meta.StackLayer} enumeration
         */
        LAST,
    }

    /**
     * @gir-type Enum
     */
    export namespace TabList {
        export const $gtype: GObject.GType<TabList>;
    }

    /**
     * @gir-type Enum
     */
    enum TabList {
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

    /**
     * @gir-type Enum
     */
    export namespace TabShowType {
        export const $gtype: GObject.GType<TabShowType>;
    }

    /**
     * @gir-type Enum
     */
    enum TabShowType {
        /**
         * Show icon (Alt-Tab mode)
         */
        ICON,
        /**
         * Show instantly (Alt-Esc mode)
         */
        INSTANTLY,
    }

    /**
     * @gir-type Enum
     */
    export namespace WindowClientType {
        export const $gtype: GObject.GType<WindowClientType>;
    }

    /**
     * @gir-type Enum
     */
    enum WindowClientType {
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
     * @gir-type Enum
     */
    export namespace WindowMenuType {
        export const $gtype: GObject.GType<WindowMenuType>;
    }

    /**
     * Menu the compositor should display for a given window
     * @gir-type Enum
     */
    enum WindowMenuType {
        /**
         * the window manager menu
         */
        WM,
        /**
         * the (fallback) app menu
         */
        APP,
    }

    /**
     * @gir-type Enum
     */
    export namespace WindowType {
        export const $gtype: GObject.GType<WindowType>;
    }

    /**
     * @gir-type Enum
     */
    enum WindowType {
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

    const CURRENT_TIME: number;
    const N_ORIENTATIONS: number;
    const PRIORITY_BEFORE_REDRAW: number;
    const PRIORITY_PREFS_NOTIFY: number;
    const PRIORITY_REDRAW: number;
    const PRIORITY_RESIZE: number;
    const VIRTUAL_CORE_KEYBOARD_ID: number;
    const VIRTUAL_CORE_POINTER_ID: number;
    /**
     * Convert an accelerator keyval and modifier mask into a string parsable by `meta_parse_accelerator`.
     * @param accelerator_mods Accelerator modifier mask.
     * @param accelerator_key Accelerator keyval.
     * @returns The accelerator name.
     */
    function accelerator_name(accelerator_mods: Clutter.ModifierType | null, accelerator_key: number): string;
    /**
     * @param debug_flags
     * @param draw_flags
     * @param pick_flags
     */
    function add_clutter_debug_flags(
        debug_flags: Clutter.DebugFlag | null,
        draw_flags: Clutter.DrawDebugFlag | null,
        pick_flags: Clutter.PickDebugFlag | null,
    ): void;
    /**
     * @param flag
     */
    function add_debug_paint_flag(flag: DebugPaintFlag | null): void;
    /**
     * Ensure log messages for the given topic `topic`
     * will be printed.
     * @param topic Topic for which logging will be started
     */
    function add_verbose_topic(topic: DebugTopic | null): void;
    /**
     * Create a context.
     * @param name Human readable name of display server or window manager
     * @returns A new context instance.
     */
    function create_context(name: string): Context;
    /**
     * Disables unredirection, can be useful in situations where having
     * unredirected windows is undesirable like when recording a video.
     * @param display a {@link Meta.Display}
     */
    function disable_unredirect_for_display(display: Display): void;
    /**
     * Enables unredirection which reduces the overhead for apps like games.
     * @param display a {@link Meta.Display}
     */
    function enable_unredirect_for_display(display: Display): void;
    /**
     * @param code
     */
    function exit(code: ExitCode | null): void;
    /**
     * @param keybinding_action
     */
    function external_binding_name_for_action(keybinding_action: number): string;
    /**
     * Converts a frame type enum value to the name string that would
     * appear in the theme definition file.
     * @param type a {@link Meta.FrameType}
     * @returns the string value
     */
    function frame_type_to_string(type: FrameType | null): string;
    /**
     * @param src
     * @param n
     */
    function g_utf8_strndup(src: string, n: number): string;
    function get_clutter_debug_flags(): [
        Clutter.DebugFlag | null,
        Clutter.DrawDebugFlag | null,
        Clutter.PickDebugFlag | null,
    ];
    function get_debug_paint_flags(): DebugPaintFlag;
    /**
     * @param display a {@link Meta.Display}
     * @returns The {@link Clutter.Stage} for the display
     */
    function get_stage_for_display(display: Display): Clutter.Actor;
    /**
     * @param display a {@link Meta.Display}
     * @returns The top window group corresponding to `display`
     */
    function get_top_window_group_for_display(display: Display): Clutter.Actor;
    /**
     * @param display a {@link Meta.Display}
     * @returns The set of {@link Meta.WindowActor} on `display`
     */
    function get_window_actors(display: Display): Clutter.Actor[];
    /**
     * @param display a {@link Meta.Display}
     * @returns The window group corresponding to `display`
     */
    function get_window_group_for_display(display: Display): Clutter.Actor;
    /**
     * @param gravity
     */
    function gravity_to_string(gravity: Gravity | null): string;
    /**
     * Returns `true` if this instance of Mutter comes from Mutter
     * restarting itself (for example to enable/disable stereo.)
     *
     * See {@link Meta.restart}. If this is the case, any startup visuals
     * or animations should be suppressed.
     */
    function is_restart(): boolean;
    /**
     * @param topic
     */
    function is_topic_enabled(topic: DebugTopic | null): boolean;
    function is_verbose(): boolean;
    function is_wayland_compositor(): boolean;
    /**
     * Allows users to register a custom handler for a
     * builtin key binding.
     * @param name The name of the keybinding to set
     * @param handler The new handler function
     * @returns `true` if the binding known as `name` was found, `false` otherwise.
     */
    function keybindings_set_custom_handler(name: string, handler?: KeyHandlerFunc | null): boolean;
    /**
     * @param orientation
     */
    function orientation_to_transform(orientation: Orientation | null): Mtk.MonitorTransform;
    function pop_no_msg_prefix(): void;
    /**
     * @param pref
     */
    function preference_to_string(pref: Preference | null): string;
    function prefs_bell_is_audible(): boolean;
    /**
     * @param i
     * @param name
     */
    function prefs_change_workspace_name(i: number, name: string): void;
    function prefs_get_action_double_click_titlebar(): GDesktopEnums.TitlebarAction;
    function prefs_get_action_middle_click_titlebar(): GDesktopEnums.TitlebarAction;
    function prefs_get_action_right_click_titlebar(): GDesktopEnums.TitlebarAction;
    function prefs_get_attach_modal_dialogs(): boolean;
    function prefs_get_auto_maximize(): boolean;
    function prefs_get_auto_raise(): boolean;
    function prefs_get_auto_raise_delay(): number;
    function prefs_get_button_layout(): ButtonLayout;
    function prefs_get_center_new_windows(): boolean;
    function prefs_get_check_alive_timeout(): number;
    function prefs_get_compositing_manager(): boolean;
    function prefs_get_cursor_size(): number;
    function prefs_get_cursor_theme(): string;
    function prefs_get_disable_workarounds(): boolean;
    function prefs_get_drag_threshold(): number;
    function prefs_get_draggable_border_width(): number;
    function prefs_get_dynamic_workspaces(): boolean;
    function prefs_get_edge_tiling(): boolean;
    function prefs_get_focus_change_on_pointer_rest(): boolean;
    function prefs_get_focus_mode(): GDesktopEnums.FocusMode;
    function prefs_get_focus_new_windows(): GDesktopEnums.FocusNewWindows;
    function prefs_get_force_fullscreen(): boolean;
    function prefs_get_gnome_accessibility(): boolean;
    function prefs_get_gnome_animations(): boolean;
    /**
     * @param name
     */
    function prefs_get_keybinding_action(name: string): KeyBindingAction;
    /**
     * @param name
     */
    function prefs_get_keybinding_label(name: string): string | null;
    function prefs_get_mouse_button_menu(): number;
    function prefs_get_mouse_button_mods(): Clutter.ModifierType;
    function prefs_get_mouse_button_resize(): number;
    function prefs_get_num_workspaces(): number;
    function prefs_get_raise_on_click(): boolean;
    function prefs_get_show_fallback_app_menu(): boolean;
    function prefs_get_visual_bell(): boolean;
    function prefs_get_visual_bell_type(): GDesktopEnums.VisualBellType;
    /**
     * @param i
     */
    function prefs_get_workspace_name(i: number): string;
    function prefs_get_workspaces_only_on_primary(): boolean;
    /**
     * @param whether
     */
    function prefs_set_force_fullscreen(whether: boolean): void;
    /**
     * @param n_workspaces
     */
    function prefs_set_num_workspaces(n_workspaces: number): void;
    /**
     * @param whether
     */
    function prefs_set_show_fallback_app_menu(whether: boolean): void;
    function push_no_msg_prefix(): void;
    /**
     * @param debug_flags
     * @param draw_flags
     * @param pick_flags
     */
    function remove_clutter_debug_flags(
        debug_flags: Clutter.DebugFlag | null,
        draw_flags: Clutter.DrawDebugFlag | null,
        pick_flags: Clutter.PickDebugFlag | null,
    ): void;
    /**
     * @param flag
     */
    function remove_debug_paint_flag(flag: DebugPaintFlag | null): void;
    /**
     * Stop printing log messages for the given topic `topic`.
     *
     * Note that this method does not stack with {@link Meta.add_verbose_topic};
     * i.e. if two calls to {@link Meta.add_verbose_topic} for the same
     * topic are made, one call to {@link Meta.remove_verbose_topic}  will
     * remove it.
     * @param topic Topic for which logging will be stopped
     */
    function remove_verbose_topic(topic: DebugTopic | null): void;
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
     * - `Meta.Display::show-restart-message`, to display the
     * message passed here on the Clutter stage
     * - `Meta.Display::restart` to actually reexec the compositor.
     * @param message message to display to the user, or `null`
     * @param context a {@link Meta.Context}
     */
    function restart(message: string | null, context: Context): void;
    /**
     * @param topic
     */
    function topic_to_string(topic: DebugTopic | null): string;
    /**
     * @param v1
     * @param v2
     */
    function unsigned_long_equal(v1?: any | null, v2?: any | null): number;
    /**
     * @param v
     */
    function unsigned_long_hash(v?: any | null): number;
    /**
     * @gir-type Callback
     */
    interface IdleMonitorWatchFunc {
        (monitor: IdleMonitor, watch_id: number): void;
    }
    /**
     * @gir-type Callback
     */
    interface KeyHandlerFunc {
        (display: Display, window: Window, event: any | null, binding: KeyBinding): void;
    }
    /**
     * @gir-type Callback
     */
    interface PrefsChangedFunc {
        (pref: Preference): void;
    }
    /**
     * @gir-type Callback
     */
    interface WindowForeachFunc {
        (window: Window): boolean;
    }
    /**
     * @gir-type Flags
     */
    export namespace BackendCapabilities {
        export const $gtype: GObject.GType<BackendCapabilities>;
    }

    /**
     * @gir-type Flags
     */
    enum BackendCapabilities {
        NONE,
        BARRIERS,
    }

    /**
     * @gir-type Flags
     */
    export namespace BarrierDirection {
        export const $gtype: GObject.GType<BarrierDirection>;
    }

    /**
     * @gir-type Flags
     */
    enum BarrierDirection {
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

    /**
     * @gir-type Flags
     */
    export namespace BarrierFlags {
        export const $gtype: GObject.GType<BarrierFlags>;
    }

    /**
     * @gir-type Flags
     */
    enum BarrierFlags {
        NONE,
        STICKY,
    }

    /**
     * @gir-type Flags
     */
    export namespace DebugPaintFlag {
        export const $gtype: GObject.GType<DebugPaintFlag>;
    }

    /**
     * @gir-type Flags
     */
    enum DebugPaintFlag {
        /**
         * default
         */
        NONE,
        /**
         * paint opaque regions
         */
        OPAQUE_REGION,
        /**
         * make cursor updates await compositing
         *   frames
         */
        SYNC_CURSOR_PRIMARY,
        /**
         * always composite frames
         */
        DISABLE_DIRECT_SCANOUT,
    }

    /**
     * @gir-type Flags
     */
    export namespace DebugTopic {
        export const $gtype: GObject.GType<DebugTopic>;
    }

    /**
     * @gir-type Flags
     */
    enum DebugTopic {
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
        /**
         * KMS deadline timers
         */
        KMS_DEADLINE,
        /**
         * session management
         */
        SESSION_MANAGEMENT,
    }

    /**
     * @gir-type Flags
     */
    export namespace Direction {
        export const $gtype: GObject.GType<Direction>;
    }

    /**
     * @gir-type Flags
     */
    enum Direction {
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

    /**
     * @gir-type Flags
     */
    export namespace KeyBindingFlags {
        export const $gtype: GObject.GType<KeyBindingFlags>;
    }

    /**
     * @gir-type Flags
     */
    enum KeyBindingFlags {
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
        /**
         * notifies on release in addition to press
         */
        TRIGGER_RELEASE,
    }

    /**
     * @gir-type Flags
     */
    export namespace KeyboardA11yFlags {
        export const $gtype: GObject.GType<KeyboardA11yFlags>;
    }

    /**
     * Keyboard accessibility features.
     * @gir-type Flags
     */
    enum KeyboardA11yFlags {
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

    /**
     * @gir-type Flags
     */
    export namespace MaximizeFlags {
        export const $gtype: GObject.GType<MaximizeFlags>;
    }

    /**
     * @gir-type Flags
     */
    enum MaximizeFlags {
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

    namespace Backend {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             * @run-last
             */
            'gpu-added': (arg0: any | null) => void;
            /**
             * @signal
             * @run-last
             */
            'keymap-changed': () => void;
            /**
             * @signal
             * @run-last
             */
            'keymap-layout-group-changed': (arg0: number) => void;
            /**
             * @signal
             * @run-last
             */
            'last-device-changed': (arg0: Clutter.InputDevice) => void;
            /**
             * @signal
             * @run-last
             */
            'lid-is-closed-changed': (arg0: boolean) => void;
            /**
             * @signal
             * @run-last
             */
            'prepare-shutdown': () => void;
            'notify::capabilities': (pspec: GObject.ParamSpec) => void;
            'notify::context': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.Initable.ConstructorProps {
            capabilities: BackendCapabilities;
            context: Context;
        }
    }

    /**
     * Handles monitor config, modesetting, cursor sprites, ...
     *
     * MetaBackend is the abstraction that deals with several things like:
     *
     * - Modesetting (depending on the backend, this can be done either by X or KMS)
     * - Initializing the {@link Meta.Settings}
     * - Setting up Monitor configuration
     * - Input device configuration (using the `ClutterDeviceManager`)
     * - Creating the `MetaRenderer`
     * - Setting up the stage of the scene graph (using {@link Meta.Stage})
     * - Creating the object that deals with the cursor (using {@link Meta.CursorTracker})
     *     and its possible pointer constraint (using `MetaPointerConstraint`)
     * - Setting the cursor sprite (using `MetaCursorRenderer`)
     * - Interacting with logind (using the appropriate D-Bus interface)
     * - Querying UPower (over D-Bus) to know when the lid is closed
     * - Setup Remote Desktop / Screencasting (`MetaRemoteDesktop`)
     * - Setup the `MetaEgl` object
     *
     * Note that the {@link Meta.Backend} is not a subclass of {@link Clutter.Backend}.
     * It is responsible for creating the correct one, based on the backend that is
     * used (`MetaBackendNative` or `MetaBackendX11`).
     * @gir-type Class
     */
    abstract class Backend extends GObject.Object implements Gio.Initable {
        static $gtype: GObject.GType<Backend>;

        // Properties

        /**
         * @read-only
         */
        get capabilities(): BackendCapabilities;
        /**
         * @construct-only
         */
        get context(): Context;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Backend.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Backend.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Backend.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Backend.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Backend.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Backend.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Backend.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Backend.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @param timestamp
         */
        freeze_keyboard(timestamp: number): void;
        get_capabilities(): BackendCapabilities;
        /**
         * @returns The {@link Meta.Context}
         */
        get_context(): Context;
        /**
         * @returns the {@link Meta.IdleMonitor} that tracks server-global idle time for all devices.
         */
        get_core_idle_monitor(): IdleMonitor;
        /**
         * Gets the global {@link Meta.Dnd} that's managed by this backend.
         * @returns the {@link Meta.Dnd}
         */
        get_dnd(): Dnd;
        /**
         * @returns A {@link Meta.MonitorManager}
         */
        get_monitor_manager(): MonitorManager;
        /**
         * @returns A {@link Meta.OrientationManager}
         */
        get_orientation_manager(): OrientationManager;
        /**
         * @returns The {@link Meta.RemoteAccessController}
         */
        get_remote_access_controller(): RemoteAccessController;
        /**
         * Gets the global {@link Clutter.Stage} that's managed by this backend.
         * @returns the {@link Clutter.Stage}
         */
        get_stage(): Clutter.Actor;
        is_headless(): boolean;
        /**
         * @returns `true` if the rendering is hardware accelerated, otherwise `false`.
         */
        is_rendering_hardware_accelerated(): boolean;
        /**
         * @param idx
         */
        lock_layout_group(idx: number): void;
        /**
         * @param layouts
         * @param variants
         * @param options
         * @param model
         */
        set_keymap(layouts: string, variants: string, options: string, model: string): void;
        /**
         * @param timestamp
         */
        unfreeze_keyboard(timestamp: number): void;
        /**
         * @param timestamp
         */
        ungrab_keyboard(timestamp: number): void;
        /**
         * Initializes the object implementing the interface.
         *
         * This method is intended for language bindings. If writing in C,
         * `g_initable_new()` should typically be used instead.
         *
         * The object must be initialized before any real use after initial
         * construction, either with this function or `g_async_initable_init_async()`.
         *
         * Implementations may also support cancellation. If `cancellable` is not `null`,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null` and
         * the object doesn't support cancellable initialization the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         *
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except `g_object_ref()` and
         * `g_object_unref()` are considered to be invalid, and have undefined
         * behaviour. See the [description][iface@Gio.Initable#description] for more details.
         *
         * Callers should not assume that a class which implements {@link Gio.Initable} can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of `init()` can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all {@link Gio.Initable} implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         *
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         *
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * {@link GObject.ObjectClass}.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call `g_initable_init()`
         * on the result of `g_object_new()`, regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @returns `true` if successful. If an error has occurred, this function will     return `false` and set `error` appropriately if present.
         */
        init(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Initializes the object implementing the interface.
         *
         * This method is intended for language bindings. If writing in C,
         * `g_initable_new()` should typically be used instead.
         *
         * The object must be initialized before any real use after initial
         * construction, either with this function or `g_async_initable_init_async()`.
         *
         * Implementations may also support cancellation. If `cancellable` is not `null`,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null` and
         * the object doesn't support cancellable initialization the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         *
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except `g_object_ref()` and
         * `g_object_unref()` are considered to be invalid, and have undefined
         * behaviour. See the [description][iface@Gio.Initable#description] for more details.
         *
         * Callers should not assume that a class which implements {@link Gio.Initable} can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of `init()` can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all {@link Gio.Initable} implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         *
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         *
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * {@link GObject.ObjectClass}.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call `g_initable_init()`
         * on the result of `g_object_new()`, regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @virtual
         */
        vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace Background {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             * @run-last
             */
            changed: () => void;
            'notify::meta-display': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            meta_display: Display;
            metaDisplay: Display;
        }
    }

    /**
     * This class handles tracking and painting the root window background.
     *
     * By integrating with {@link Meta.WindowGroup} we can avoid painting parts of
     * the background that are obscured by other windows.
     * @gir-type Class
     */
    class Background extends GObject.Object {
        static $gtype: GObject.GType<Background>;

        // Properties

        /**
         * @construct-only
         */
        get meta_display(): Display;
        /**
         * @construct-only
         */
        get metaDisplay(): Display;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Background.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Background.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](display: Display): Background;

        // Signals

        /** @signal */
        connect<K extends keyof Background.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Background.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Background.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Background.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Background.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Background.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static refresh_all(): void;

        // Methods

        /**
         * @param file1
         * @param file2
         * @param blend_factor
         * @param style
         */
        set_blend(
            file1: Gio.File,
            file2: Gio.File,
            blend_factor: number,
            style: GDesktopEnums.BackgroundStyle | null,
        ): void;
        /**
         * @param color
         */
        set_color(color: Cogl.Color): void;
        /**
         * Set the background to `file`
         * @param file a {@link Gio.File} representing the background file
         * @param style the background style to apply
         */
        set_file(file: Gio.File | null, style: GDesktopEnums.BackgroundStyle | null): void;
        /**
         * @param shading_direction
         * @param color
         * @param second_color
         */
        set_gradient(
            shading_direction: GDesktopEnums.BackgroundShading | null,
            color: Cogl.Color,
            second_color: Cogl.Color,
        ): void;
    }

    namespace BackgroundActor {
        // Signal signatures
        interface SignalSignatures extends Clutter.Actor.SignalSignatures {
            'notify::meta-display': (pspec: GObject.ParamSpec) => void;
            'notify::monitor': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-name': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-role': (pspec: GObject.ParamSpec) => void;
            'notify::actions': (pspec: GObject.ParamSpec) => void;
            'notify::allocation': (pspec: GObject.ParamSpec) => void;
            'notify::background-color': (pspec: GObject.ParamSpec) => void;
            'notify::background-color-set': (pspec: GObject.ParamSpec) => void;
            'notify::child-transform': (pspec: GObject.ParamSpec) => void;
            'notify::child-transform-set': (pspec: GObject.ParamSpec) => void;
            'notify::clip-rect': (pspec: GObject.ParamSpec) => void;
            'notify::clip-to-allocation': (pspec: GObject.ParamSpec) => void;
            'notify::color-state': (pspec: GObject.ParamSpec) => void;
            'notify::constraints': (pspec: GObject.ParamSpec) => void;
            'notify::content': (pspec: GObject.ParamSpec) => void;
            'notify::content-box': (pspec: GObject.ParamSpec) => void;
            'notify::content-gravity': (pspec: GObject.ParamSpec) => void;
            'notify::content-repeat': (pspec: GObject.ParamSpec) => void;
            'notify::context': (pspec: GObject.ParamSpec) => void;
            'notify::effect': (pspec: GObject.ParamSpec) => void;
            'notify::first-child': (pspec: GObject.ParamSpec) => void;
            'notify::fixed-position-set': (pspec: GObject.ParamSpec) => void;
            'notify::fixed-x': (pspec: GObject.ParamSpec) => void;
            'notify::fixed-y': (pspec: GObject.ParamSpec) => void;
            'notify::has-clip': (pspec: GObject.ParamSpec) => void;
            'notify::has-pointer': (pspec: GObject.ParamSpec) => void;
            'notify::height': (pspec: GObject.ParamSpec) => void;
            'notify::last-child': (pspec: GObject.ParamSpec) => void;
            'notify::layout-manager': (pspec: GObject.ParamSpec) => void;
            'notify::magnification-filter': (pspec: GObject.ParamSpec) => void;
            'notify::mapped': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::min-height': (pspec: GObject.ParamSpec) => void;
            'notify::min-height-set': (pspec: GObject.ParamSpec) => void;
            'notify::min-width': (pspec: GObject.ParamSpec) => void;
            'notify::min-width-set': (pspec: GObject.ParamSpec) => void;
            'notify::minification-filter': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::natural-height': (pspec: GObject.ParamSpec) => void;
            'notify::natural-height-set': (pspec: GObject.ParamSpec) => void;
            'notify::natural-width': (pspec: GObject.ParamSpec) => void;
            'notify::natural-width-set': (pspec: GObject.ParamSpec) => void;
            'notify::offscreen-redirect': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::pivot-point': (pspec: GObject.ParamSpec) => void;
            'notify::pivot-point-z': (pspec: GObject.ParamSpec) => void;
            'notify::position': (pspec: GObject.ParamSpec) => void;
            'notify::reactive': (pspec: GObject.ParamSpec) => void;
            'notify::realized': (pspec: GObject.ParamSpec) => void;
            'notify::request-mode': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-angle-x': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-angle-y': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-angle-z': (pspec: GObject.ParamSpec) => void;
            'notify::scale-x': (pspec: GObject.ParamSpec) => void;
            'notify::scale-y': (pspec: GObject.ParamSpec) => void;
            'notify::scale-z': (pspec: GObject.ParamSpec) => void;
            'notify::show-on-set-parent': (pspec: GObject.ParamSpec) => void;
            'notify::size': (pspec: GObject.ParamSpec) => void;
            'notify::text-direction': (pspec: GObject.ParamSpec) => void;
            'notify::transform': (pspec: GObject.ParamSpec) => void;
            'notify::transform-set': (pspec: GObject.ParamSpec) => void;
            'notify::translation-x': (pspec: GObject.ParamSpec) => void;
            'notify::translation-y': (pspec: GObject.ParamSpec) => void;
            'notify::translation-z': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width': (pspec: GObject.ParamSpec) => void;
            'notify::x': (pspec: GObject.ParamSpec) => void;
            'notify::x-align': (pspec: GObject.ParamSpec) => void;
            'notify::x-expand': (pspec: GObject.ParamSpec) => void;
            'notify::y': (pspec: GObject.ParamSpec) => void;
            'notify::y-align': (pspec: GObject.ParamSpec) => void;
            'notify::y-expand': (pspec: GObject.ParamSpec) => void;
            'notify::z-position': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                Clutter.Actor.ConstructorProps<Clutter.LayoutManager, BackgroundContent>,
                Atk.ImplementorIface.ConstructorProps,
                Clutter.Animatable.ConstructorProps {
            meta_display: Display;
            metaDisplay: Display;
            monitor: number;
        }
    }

    /**
     * This class handles tracking and painting the root window background.
     *
     * By integrating with {@link Meta.WindowGroup} we can avoid painting parts of
     * the background that are obscured by other windows.
     * @gir-type Class
     */
    class BackgroundActor
        extends Clutter.Actor<Clutter.LayoutManager, BackgroundContent>
        implements Atk.ImplementorIface, Clutter.Animatable
    {
        static $gtype: GObject.GType<BackgroundActor>;

        // Properties

        /**
         * @construct-only
         */
        get meta_display(): Display;
        /**
         * @construct-only
         */
        get metaDisplay(): Display;
        /**
         * @construct-only
         */
        get monitor(): number;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: BackgroundActor.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<BackgroundActor.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](display: Display, monitor: number): BackgroundActor;
        // Conflicted with Clutter.Actor.new

        static ['new'](...args: never[]): any;

        // Signals

        /** @signal */
        connect<K extends keyof BackgroundActor.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BackgroundActor.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof BackgroundActor.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BackgroundActor.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof BackgroundActor.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<BackgroundActor.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
        /**
         * Finds the {@link GObject.ParamSpec} for `property_name`
         * @param property_name the name of the animatable property to find
         * @returns The {@link GObject.ParamSpec} for the given property   or `null`
         */
        find_property(property_name: string): GObject.ParamSpec;
        /**
         * Get animated actor.
         * @returns a {@link Clutter.Actor}
         */
        get_actor(): Clutter.Actor;
        /**
         * Retrieves the current state of `property_name` and sets `value` with it
         * @param property_name the name of the animatable property to retrieve
         * @param value a {@link GObject.Value} initialized to the type of the property to retrieve
         */
        get_initial_state(property_name: string, value: GObject.Value | any): void;
        /**
         * Asks a {@link Clutter.Animatable} implementation to interpolate a
         * a named property between the initial and final values of
         * a {@link Clutter.Interval}, using `progress` as the interpolation
         * value, and store the result inside `value`.
         *
         * This function should be used for every property animation
         * involving {@link Clutter.Animatable}s.
         * @param property_name the name of the property to interpolate
         * @param interval a {@link Clutter.Interval} with the animation range
         * @param progress the progress to use to interpolate between the   initial and final values of the `interval`
         * @returns `true` if the interpolation was successful,   and `false` otherwise
         */
        interpolate_value(property_name: string, interval: Clutter.Interval, progress: number): [boolean, unknown];
        /**
         * Sets the current state of `property_name` to `value`
         * @param property_name the name of the animatable property to set
         * @param value the value of the animatable property to set
         */
        set_final_state(property_name: string, value: GObject.Value | any): void;
        /**
         * Finds the {@link GObject.ParamSpec} for `property_name`
         * @param property_name the name of the animatable property to find
         * @virtual
         */
        vfunc_find_property(property_name: string): GObject.ParamSpec;
        /**
         * Get animated actor.
         * @virtual
         */
        vfunc_get_actor(): Clutter.Actor;
        /**
         * Retrieves the current state of `property_name` and sets `value` with it
         * @param property_name the name of the animatable property to retrieve
         * @param value a {@link GObject.Value} initialized to the type of the property to retrieve
         * @virtual
         */
        vfunc_get_initial_state(property_name: string, value: GObject.Value | any): void;
        /**
         * Asks a {@link Clutter.Animatable} implementation to interpolate a
         * a named property between the initial and final values of
         * a {@link Clutter.Interval}, using `progress` as the interpolation
         * value, and store the result inside `value`.
         *
         * This function should be used for every property animation
         * involving {@link Clutter.Animatable}s.
         * @param property_name the name of the property to interpolate
         * @param interval a {@link Clutter.Interval} with the animation range
         * @param progress the progress to use to interpolate between the   initial and final values of the `interval`
         * @virtual
         */
        vfunc_interpolate_value(
            property_name: string,
            interval: Clutter.Interval,
            progress: number,
        ): [boolean, unknown];
        /**
         * Sets the current state of `property_name` to `value`
         * @param property_name the name of the animatable property to set
         * @param value the value of the animatable property to set
         * @virtual
         */
        vfunc_set_final_state(property_name: string, value: GObject.Value | any): void;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace BackgroundContent {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::background': (pspec: GObject.ParamSpec) => void;
            'notify::brightness': (pspec: GObject.ParamSpec) => void;
            'notify::gradient': (pspec: GObject.ParamSpec) => void;
            'notify::gradient-height': (pspec: GObject.ParamSpec) => void;
            'notify::gradient-max-darkness': (pspec: GObject.ParamSpec) => void;
            'notify::meta-display': (pspec: GObject.ParamSpec) => void;
            'notify::monitor': (pspec: GObject.ParamSpec) => void;
            'notify::rounded-clip-radius': (pspec: GObject.ParamSpec) => void;
            'notify::vignette': (pspec: GObject.ParamSpec) => void;
            'notify::vignette-sharpness': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, Clutter.Content.ConstructorProps {
            background: Background;
            brightness: number;
            gradient: boolean;
            gradient_height: number;
            gradientHeight: number;
            gradient_max_darkness: number;
            gradientMaxDarkness: number;
            meta_display: Display;
            metaDisplay: Display;
            monitor: number;
            rounded_clip_radius: number;
            roundedClipRadius: number;
            vignette: boolean;
            vignette_sharpness: number;
            vignetteSharpness: number;
        }
    }

    /**
     * This class handles tracking and painting the root window background.
     *
     * By integrating with {@link Meta.WindowGroup} we can avoid painting parts of
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
     * @gir-type Class
     */
    class BackgroundContent extends GObject.Object implements Clutter.Content {
        static $gtype: GObject.GType<BackgroundContent>;

        // Properties

        get background(): Background;
        set background(val: Background);
        get brightness(): number;
        set brightness(val: number);
        get gradient(): boolean;
        set gradient(val: boolean);
        get gradient_height(): number;
        set gradient_height(val: number);
        get gradientHeight(): number;
        set gradientHeight(val: number);
        get gradient_max_darkness(): number;
        set gradient_max_darkness(val: number);
        get gradientMaxDarkness(): number;
        set gradientMaxDarkness(val: number);
        /**
         * @construct-only
         */
        get meta_display(): Display;
        /**
         * @construct-only
         */
        get metaDisplay(): Display;
        /**
         * @construct-only
         */
        get monitor(): number;
        get rounded_clip_radius(): number;
        set rounded_clip_radius(val: number);
        get roundedClipRadius(): number;
        set roundedClipRadius(val: number);
        get vignette(): boolean;
        set vignette(val: boolean);
        get vignette_sharpness(): number;
        set vignette_sharpness(val: number);
        get vignetteSharpness(): number;
        set vignetteSharpness(val: number);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: BackgroundContent.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<BackgroundContent.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof BackgroundContent.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BackgroundContent.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof BackgroundContent.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BackgroundContent.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof BackgroundContent.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<BackgroundContent.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Creates a new actor to draw the background for the given monitor.
         * @param display a {@link Meta.Display}
         * @param monitor Index of the monitor for which to draw the background
         */
        static ['new'](display: Display, monitor: number): Clutter.Content;

        // Methods

        /**
         * @param background
         */
        set_background(background: Background): void;
        /**
         * @param enabled
         * @param height
         * @param tone_start
         */
        set_gradient(enabled: boolean, height: number, tone_start: number): void;
        /**
         * Sets the bounding clip rectangle of the {@link Meta.BackgroundContent} that's used
         * when a rounded clip set via `meta_background_content_set_rounded_clip_radius()`
         * is in effect, set it to  `null` to use no bounding clip, rounding the edges
         * of the full texture.
         * @param bounds The new bounding clip rectangle, or `null`
         */
        set_rounded_clip_bounds(bounds?: Graphene.Rect | null): void;
        /**
         * @param radius
         */
        set_rounded_clip_radius(radius: number): void;
        /**
         * @param enabled
         * @param brightness
         * @param sharpness
         */
        set_vignette(enabled: boolean, brightness: number, sharpness: number): void;
        /**
         * Retrieves the natural size of the `content`, if any.
         *
         * The natural size of a {@link Clutter.Content} is defined as the size the content
         * would have regardless of the allocation of the actor that is painting it,
         * for instance the size of an image data.
         * @returns `true` if the content has a preferred size, and `false`   otherwise
         */
        get_preferred_size(): [boolean, number, number];
        /**
         * Invalidates a {@link Clutter.Content}.
         *
         * This function should be called by {@link Clutter.Content} implementations when
         * they change the way a the content should be painted regardless of the
         * actor state.
         */
        invalidate(): void;
        /**
         * Signals that `content`'s size changed. Attached actors with request mode
         * set to {@link Clutter.RequestMode.CONTENT_SIZE} will have a relayout queued.
         *
         * Attached actors with other request modes are not redrawn. To redraw them
         * too, use {@link Clutter.Content.invalidate}.
         */
        invalidate_size(): void;
        /**
         * virtual function; called each time a {@link Clutter.Content} is attached
         *   to a {@link Clutter.Actor}.
         * @param actor
         * @virtual
         */
        vfunc_attached(actor: Clutter.Actor): void;
        /**
         * virtual function; called each time a {@link Clutter.Content} is detached
         *   from a {@link Clutter.Actor}.
         * @param actor
         * @virtual
         */
        vfunc_detached(actor: Clutter.Actor): void;
        /**
         * Retrieves the natural size of the `content`, if any.
         *
         * The natural size of a {@link Clutter.Content} is defined as the size the content
         * would have regardless of the allocation of the actor that is painting it,
         * for instance the size of an image data.
         * @virtual
         */
        vfunc_get_preferred_size(): [boolean, number, number];
        /**
         * Invalidates a {@link Clutter.Content}.
         *
         * This function should be called by {@link Clutter.Content} implementations when
         * they change the way a the content should be painted regardless of the
         * actor state.
         * @virtual
         */
        vfunc_invalidate(): void;
        /**
         * Signals that `content`'s size changed. Attached actors with request mode
         * set to {@link Clutter.RequestMode.CONTENT_SIZE} will have a relayout queued.
         *
         * Attached actors with other request modes are not redrawn. To redraw them
         * too, use {@link Clutter.Content.invalidate}.
         * @virtual
         */
        vfunc_invalidate_size(): void;
        /**
         * virtual function; called each time the content needs to
         *   paint itself
         * @param actor
         * @param node
         * @param paint_context
         * @virtual
         */
        vfunc_paint_content(actor: Clutter.Actor, node: Clutter.PaintNode, paint_context: Clutter.PaintContext): void;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace BackgroundGroup {
        // Signal signatures
        interface SignalSignatures extends Clutter.Actor.SignalSignatures {
            'notify::accessible-name': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-role': (pspec: GObject.ParamSpec) => void;
            'notify::actions': (pspec: GObject.ParamSpec) => void;
            'notify::allocation': (pspec: GObject.ParamSpec) => void;
            'notify::background-color': (pspec: GObject.ParamSpec) => void;
            'notify::background-color-set': (pspec: GObject.ParamSpec) => void;
            'notify::child-transform': (pspec: GObject.ParamSpec) => void;
            'notify::child-transform-set': (pspec: GObject.ParamSpec) => void;
            'notify::clip-rect': (pspec: GObject.ParamSpec) => void;
            'notify::clip-to-allocation': (pspec: GObject.ParamSpec) => void;
            'notify::color-state': (pspec: GObject.ParamSpec) => void;
            'notify::constraints': (pspec: GObject.ParamSpec) => void;
            'notify::content': (pspec: GObject.ParamSpec) => void;
            'notify::content-box': (pspec: GObject.ParamSpec) => void;
            'notify::content-gravity': (pspec: GObject.ParamSpec) => void;
            'notify::content-repeat': (pspec: GObject.ParamSpec) => void;
            'notify::context': (pspec: GObject.ParamSpec) => void;
            'notify::effect': (pspec: GObject.ParamSpec) => void;
            'notify::first-child': (pspec: GObject.ParamSpec) => void;
            'notify::fixed-position-set': (pspec: GObject.ParamSpec) => void;
            'notify::fixed-x': (pspec: GObject.ParamSpec) => void;
            'notify::fixed-y': (pspec: GObject.ParamSpec) => void;
            'notify::has-clip': (pspec: GObject.ParamSpec) => void;
            'notify::has-pointer': (pspec: GObject.ParamSpec) => void;
            'notify::height': (pspec: GObject.ParamSpec) => void;
            'notify::last-child': (pspec: GObject.ParamSpec) => void;
            'notify::layout-manager': (pspec: GObject.ParamSpec) => void;
            'notify::magnification-filter': (pspec: GObject.ParamSpec) => void;
            'notify::mapped': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::min-height': (pspec: GObject.ParamSpec) => void;
            'notify::min-height-set': (pspec: GObject.ParamSpec) => void;
            'notify::min-width': (pspec: GObject.ParamSpec) => void;
            'notify::min-width-set': (pspec: GObject.ParamSpec) => void;
            'notify::minification-filter': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::natural-height': (pspec: GObject.ParamSpec) => void;
            'notify::natural-height-set': (pspec: GObject.ParamSpec) => void;
            'notify::natural-width': (pspec: GObject.ParamSpec) => void;
            'notify::natural-width-set': (pspec: GObject.ParamSpec) => void;
            'notify::offscreen-redirect': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::pivot-point': (pspec: GObject.ParamSpec) => void;
            'notify::pivot-point-z': (pspec: GObject.ParamSpec) => void;
            'notify::position': (pspec: GObject.ParamSpec) => void;
            'notify::reactive': (pspec: GObject.ParamSpec) => void;
            'notify::realized': (pspec: GObject.ParamSpec) => void;
            'notify::request-mode': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-angle-x': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-angle-y': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-angle-z': (pspec: GObject.ParamSpec) => void;
            'notify::scale-x': (pspec: GObject.ParamSpec) => void;
            'notify::scale-y': (pspec: GObject.ParamSpec) => void;
            'notify::scale-z': (pspec: GObject.ParamSpec) => void;
            'notify::show-on-set-parent': (pspec: GObject.ParamSpec) => void;
            'notify::size': (pspec: GObject.ParamSpec) => void;
            'notify::text-direction': (pspec: GObject.ParamSpec) => void;
            'notify::transform': (pspec: GObject.ParamSpec) => void;
            'notify::transform-set': (pspec: GObject.ParamSpec) => void;
            'notify::translation-x': (pspec: GObject.ParamSpec) => void;
            'notify::translation-y': (pspec: GObject.ParamSpec) => void;
            'notify::translation-z': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width': (pspec: GObject.ParamSpec) => void;
            'notify::x': (pspec: GObject.ParamSpec) => void;
            'notify::x-align': (pspec: GObject.ParamSpec) => void;
            'notify::x-expand': (pspec: GObject.ParamSpec) => void;
            'notify::y': (pspec: GObject.ParamSpec) => void;
            'notify::y-align': (pspec: GObject.ParamSpec) => void;
            'notify::y-expand': (pspec: GObject.ParamSpec) => void;
            'notify::z-position': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                Clutter.Actor.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Clutter.Animatable.ConstructorProps {}
    }

    /**
     * Container for background actors
     *
     * This class is a subclass of ClutterActor with special handling for
     * MetaBackgroundActor/MetaBackgroundGroup when painting children.
     * It makes sure to only draw the parts of the backgrounds not
     * occluded by opaque windows.
     *
     * See {@link Meta.WindowGroup} for more information behind the motivation,
     * and details on implementation.
     * @gir-type Class
     */
    class BackgroundGroup extends Clutter.Actor implements Atk.ImplementorIface, Clutter.Animatable {
        static $gtype: GObject.GType<BackgroundGroup>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: BackgroundGroup.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<BackgroundGroup.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): BackgroundGroup;

        // Signals

        /** @signal */
        connect<K extends keyof BackgroundGroup.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BackgroundGroup.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof BackgroundGroup.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BackgroundGroup.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof BackgroundGroup.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<BackgroundGroup.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
        /**
         * Finds the {@link GObject.ParamSpec} for `property_name`
         * @param property_name the name of the animatable property to find
         * @returns The {@link GObject.ParamSpec} for the given property   or `null`
         */
        find_property(property_name: string): GObject.ParamSpec;
        /**
         * Get animated actor.
         * @returns a {@link Clutter.Actor}
         */
        get_actor(): Clutter.Actor;
        /**
         * Retrieves the current state of `property_name` and sets `value` with it
         * @param property_name the name of the animatable property to retrieve
         * @param value a {@link GObject.Value} initialized to the type of the property to retrieve
         */
        get_initial_state(property_name: string, value: GObject.Value | any): void;
        /**
         * Asks a {@link Clutter.Animatable} implementation to interpolate a
         * a named property between the initial and final values of
         * a {@link Clutter.Interval}, using `progress` as the interpolation
         * value, and store the result inside `value`.
         *
         * This function should be used for every property animation
         * involving {@link Clutter.Animatable}s.
         * @param property_name the name of the property to interpolate
         * @param interval a {@link Clutter.Interval} with the animation range
         * @param progress the progress to use to interpolate between the   initial and final values of the `interval`
         * @returns `true` if the interpolation was successful,   and `false` otherwise
         */
        interpolate_value(property_name: string, interval: Clutter.Interval, progress: number): [boolean, unknown];
        /**
         * Sets the current state of `property_name` to `value`
         * @param property_name the name of the animatable property to set
         * @param value the value of the animatable property to set
         */
        set_final_state(property_name: string, value: GObject.Value | any): void;
        /**
         * Finds the {@link GObject.ParamSpec} for `property_name`
         * @param property_name the name of the animatable property to find
         * @virtual
         */
        vfunc_find_property(property_name: string): GObject.ParamSpec;
        /**
         * Get animated actor.
         * @virtual
         */
        vfunc_get_actor(): Clutter.Actor;
        /**
         * Retrieves the current state of `property_name` and sets `value` with it
         * @param property_name the name of the animatable property to retrieve
         * @param value a {@link GObject.Value} initialized to the type of the property to retrieve
         * @virtual
         */
        vfunc_get_initial_state(property_name: string, value: GObject.Value | any): void;
        /**
         * Asks a {@link Clutter.Animatable} implementation to interpolate a
         * a named property between the initial and final values of
         * a {@link Clutter.Interval}, using `progress` as the interpolation
         * value, and store the result inside `value`.
         *
         * This function should be used for every property animation
         * involving {@link Clutter.Animatable}s.
         * @param property_name the name of the property to interpolate
         * @param interval a {@link Clutter.Interval} with the animation range
         * @param progress the progress to use to interpolate between the   initial and final values of the `interval`
         * @virtual
         */
        vfunc_interpolate_value(
            property_name: string,
            interval: Clutter.Interval,
            progress: number,
        ): [boolean, unknown];
        /**
         * Sets the current state of `property_name` to `value`
         * @param property_name the name of the animatable property to set
         * @param value the value of the animatable property to set
         * @virtual
         */
        vfunc_set_final_state(property_name: string, value: GObject.Value | any): void;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace BackgroundImage {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             * @run-last
             */
            loaded: () => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * Represents a loaded or loading background image.
     * @gir-type Class
     */
    class BackgroundImage extends GObject.Object {
        static $gtype: GObject.GType<BackgroundImage>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: BackgroundImage.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<BackgroundImage.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof BackgroundImage.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BackgroundImage.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof BackgroundImage.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BackgroundImage.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof BackgroundImage.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<BackgroundImage.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * This function is a convenience function for checking for success,
         * without having to call `meta_background_image_get_texture()` and
         * handle the return of a Cogl type.
         * @returns `true` if loading completed successfully, otherwise `false`
         */
        get_success(): boolean;
        /**
         * @returns a {@link Cogl.Texture} if loading succeeded; if  loading failed or has not yet finished, `null`.
         */
        get_texture(): Cogl.Texture;
        /**
         * @returns `true` if loading has already completed, `false` otherwise
         */
        is_loaded(): boolean;
    }

    namespace BackgroundImageCache {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * Caches loading of textures for backgrounds.
     *
     * There's actually nothing background specific about it, other than it is tuned
     * to work well for large images as typically are used for backgrounds.
     * @gir-type Class
     */
    class BackgroundImageCache extends GObject.Object {
        static $gtype: GObject.GType<BackgroundImageCache>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: BackgroundImageCache.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<BackgroundImageCache.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof BackgroundImageCache.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BackgroundImageCache.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof BackgroundImageCache.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BackgroundImageCache.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof BackgroundImageCache.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<BackgroundImageCache.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static get_default(): BackgroundImageCache;

        // Methods

        /**
         * Loads an image to use as a background, or returns a reference to an
         * image that is already in the process of loading or loaded.
         *
         * In either case, what is returned is a {@link Meta.BackgroundImage} which can be dereferenced
         * to get a {@link Cogl.Texture}. If {@link Meta.BackgroundImage.is_loaded} returns `true`,
         * the background is loaded, otherwise the `Meta.BackgroundImage::loaded`
         * signal will be emitted exactly once. The 'loaded' state means that the
         * loading process finished, whether it succeeded or failed.
         * @param file {@link Gio.File} to load
         * @returns a {@link Meta.BackgroundImage} to dereference to get the loaded texture
         */
        load(file: Gio.File): BackgroundImage;
        /**
         * Remove an entry from the cache; this would be used if monitoring
         * showed that the file changed.
         * @param file file to remove from the cache
         */
        purge(file: Gio.File): void;
    }

    namespace Barrier {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * When a pointer barrier is hit, this will trigger. This
             * requires an XI2-enabled server.
             * @signal
             * @run-first
             */
            hit: (arg0: BarrierEvent) => void;
            /**
             * When a pointer barrier hitbox was left, this will trigger.
             * This requires an XI2-enabled server.
             * @signal
             * @run-first
             */
            left: (arg0: BarrierEvent) => void;
            'notify::backend': (pspec: GObject.ParamSpec) => void;
            'notify::directions': (pspec: GObject.ParamSpec) => void;
            'notify::flags': (pspec: GObject.ParamSpec) => void;
            'notify::x1': (pspec: GObject.ParamSpec) => void;
            'notify::x2': (pspec: GObject.ParamSpec) => void;
            'notify::y1': (pspec: GObject.ParamSpec) => void;
            'notify::y2': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.Initable.ConstructorProps {
            backend: Backend;
            directions: BarrierDirection;
            flags: BarrierFlags;
            x1: number;
            x2: number;
            y1: number;
            y2: number;
        }
    }

    /**
     * Pointer barriers
     * @gir-type Class
     */
    class Barrier extends GObject.Object implements Gio.Initable {
        static $gtype: GObject.GType<Barrier>;

        // Properties

        /**
         * @construct-only
         */
        get backend(): Backend;
        /**
         * @construct-only
         */
        get directions(): BarrierDirection;
        /**
         * @construct-only
         */
        get flags(): BarrierFlags;
        /**
         * @construct-only
         */
        get x1(): number;
        /**
         * @construct-only
         */
        get x2(): number;
        /**
         * @construct-only
         */
        get y1(): number;
        /**
         * @construct-only
         */
        get y2(): number;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Barrier.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Barrier.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](
            backend: Backend,
            x1: number,
            y1: number,
            x2: number,
            y2: number,
            directions: BarrierDirection,
            flags: BarrierFlags,
        ): Barrier;

        // Signals

        /** @signal */
        connect<K extends keyof Barrier.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Barrier.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Barrier.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Barrier.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Barrier.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Barrier.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        destroy(): void;
        is_active(): boolean;
        /**
         * In XI2.3, pointer barriers provide a feature where they can
         * be temporarily released so that the pointer goes through
         * them. Pass a {@link Meta.BarrierEvent} to release the barrier for
         * this event sequence.
         * @param event The event to release the pointer for
         */
        release(event: BarrierEvent): void;
        /**
         * Initializes the object implementing the interface.
         *
         * This method is intended for language bindings. If writing in C,
         * `g_initable_new()` should typically be used instead.
         *
         * The object must be initialized before any real use after initial
         * construction, either with this function or `g_async_initable_init_async()`.
         *
         * Implementations may also support cancellation. If `cancellable` is not `null`,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null` and
         * the object doesn't support cancellable initialization the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         *
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except `g_object_ref()` and
         * `g_object_unref()` are considered to be invalid, and have undefined
         * behaviour. See the [description][iface@Gio.Initable#description] for more details.
         *
         * Callers should not assume that a class which implements {@link Gio.Initable} can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of `init()` can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all {@link Gio.Initable} implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         *
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         *
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * {@link GObject.ObjectClass}.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call `g_initable_init()`
         * on the result of `g_object_new()`, regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @returns `true` if successful. If an error has occurred, this function will     return `false` and set `error` appropriately if present.
         */
        init(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Initializes the object implementing the interface.
         *
         * This method is intended for language bindings. If writing in C,
         * `g_initable_new()` should typically be used instead.
         *
         * The object must be initialized before any real use after initial
         * construction, either with this function or `g_async_initable_init_async()`.
         *
         * Implementations may also support cancellation. If `cancellable` is not `null`,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null` and
         * the object doesn't support cancellable initialization the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         *
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except `g_object_ref()` and
         * `g_object_unref()` are considered to be invalid, and have undefined
         * behaviour. See the [description][iface@Gio.Initable#description] for more details.
         *
         * Callers should not assume that a class which implements {@link Gio.Initable} can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of `init()` can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all {@link Gio.Initable} implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         *
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         *
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * {@link GObject.ObjectClass}.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call `g_initable_init()`
         * on the result of `g_object_new()`, regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @virtual
         */
        vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace Compositor {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::backend': (pspec: GObject.ParamSpec) => void;
            'notify::display': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            backend: Backend;
            display: Display;
        }
    }

    /**
     * Compositor API
     *
     * At a high-level, a window is not-visible or visible. When a
     * window is added (with `meta_compositor_add_window()`) it is not visible.
     * `meta_compositor_show_window()` indicates a transition from not-visible to
     * visible. Some of the reasons for this:
     *
     * - Window newly created
     * - Window is unminimized
     * - Window is moved to the current desktop
     * - Window was made sticky
     *
     * `meta_compositor_hide_window()` indicates that the window has transitioned from
     * visible to not-visible. Some reasons include:
     *
     * - Window was destroyed
     * - Window is minimized
     * - Window is moved to a different desktop
     * - Window no longer sticky.
     *
     * Note that combinations are possible - a window might have first
     * been minimized and then moved to a different desktop. The 'effect' parameter
     * to `meta_compositor_show_window()` and `meta_compositor_hide_window()` is a hint
     * as to the appropriate effect to show the user and should not
     * be considered to be indicative of a state change.
     *
     * When the active workspace is changed, `meta_compositor_switch_workspace()` is
     * called first, then `meta_compositor_show_window()` and
     * `meta_compositor_hide_window()` are called individually for each window
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
     * - window group, accessible with `meta_get_window_group_for_display()`
     * - top window group, accessible with `meta_get_top_window_group_for_display()`
     *
     * Mutter will place actors representing windows in the window group, except for
     * override-redirect windows (ie. popups and menus) which will be placed in the
     * top window group.
     * @gir-type Class
     */
    abstract class Compositor extends GObject.Object {
        static $gtype: GObject.GType<Compositor>;

        // Properties

        /**
         * @construct-only
         */
        get backend(): Backend;
        /**
         * @construct-only
         */
        get display(): Display;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Compositor.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Compositor.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Compositor.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Compositor.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Compositor.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Compositor.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Compositor.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Compositor.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @returns The feedback group corresponding to `display`
         */
        get_feedback_group(): Clutter.Actor;
        /**
         * @returns a {@link Meta.Laters}
         */
        get_laters(): Laters;
    }

    namespace Context {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             * @run-last
             */
            'prepare-shutdown': () => void;
            /**
             * @signal
             * @run-last
             */
            started: () => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::nick': (pspec: GObject.ParamSpec) => void;
            'notify::unsafe-mode': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            name: string;
            nick: string;
            unsafe_mode: boolean;
            unsafeMode: boolean;
        }
    }

    /**
     * @gir-type Class
     */
    class Context extends GObject.Object {
        static $gtype: GObject.GType<Context>;

        // Properties

        /**
         * @construct-only
         */
        get name(): string;
        /**
         * @construct-only
         */
        get nick(): string;
        get unsafe_mode(): boolean;
        set unsafe_mode(val: boolean);
        get unsafeMode(): boolean;
        set unsafeMode(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Context.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Context.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Context.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Context.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Context.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Context.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Context.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Context.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * See `g_option_context_add_main_entries()` for more details.
         * @param entries a `null`-terminated array of `GOptionEntrys`
         * @param translation_domain a translation domain to use, or `null`
         */
        add_option_entries(entries: GLib.OptionEntry[], translation_domain?: string | null): void;
        /**
         * See `g_option_context_add_group()` for more details.
         * @param group the group to add
         */
        add_option_group(group: GLib.OptionGroup): void;
        /**
         * @param argv Address of the`argv` parameter of `main()`, or `null`.
         * @returns `true` if the commandline arguments (if any) were valid and if the configuration has been successful, `false` otherwise
         */
        configure(argv?: string[] | null): [boolean, string[] | null];
        destroy(): void;
        /**
         * @returns the {@link Meta.Backend}
         */
        get_backend(): Backend;
        get_compositor_type(): CompositorType;
        /**
         * @returns the {@link Meta.DebugControl}
         */
        get_debug_control(): DebugControl;
        /**
         * @returns the {@link Meta.Display}
         */
        get_display(): Display;
        /**
         * Get the {@link Meta.WaylandCompositor} associated with the MetaContext. The might be
         * none currently associated if the context hasn't been started or if the
         * requested compositor type is not {@link Meta.CompositorType.WAYLAND}.
         * @returns the {@link Meta.WaylandCompositor}
         */
        get_wayland_compositor(): WaylandCompositor | null;
        is_replacing(): boolean;
        notify_ready(): void;
        /**
         * Raises the RLIMIT_NOFILE limit value to the hard limit.
         */
        raise_rlimit_nofile(): boolean;
        /**
         * Restores the RLIMIT_NOFILE limits from when the {@link Meta.Context} was created.
         */
        restore_rlimit_nofile(): boolean;
        run_main_loop(): boolean;
        /**
         * @param wm_keybindings
         */
        set_gnome_wm_keybindings(wm_keybindings: string): void;
        /**
         * @param plugin_gtype
         */
        set_plugin_gtype(plugin_gtype: GObject.GType): void;
        /**
         * @param plugin_name
         */
        set_plugin_name(plugin_name: string): void;
        setup(): boolean;
        start(): boolean;
        terminate(): void;
        /**
         * @param error
         */
        terminate_with_error(error: GLib.Error): void;
    }

    namespace CursorTracker {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             * @run-last
             */
            'cursor-changed': () => void;
            /**
             * @signal
             * @run-last
             */
            'position-invalidated': () => void;
            /**
             * @signal
             * @run-last
             */
            'visibility-changed': () => void;
            'notify::backend': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            backend: Backend;
        }
    }

    /**
     * Mutter cursor tracking helper. Originally only tracking
     * the cursor image, now more of a "core pointer abstraction"
     * @gir-type Class
     */
    class CursorTracker extends GObject.Object {
        static $gtype: GObject.GType<CursorTracker>;

        // Properties

        /**
         * @construct-only
         */
        get backend(): Backend;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: CursorTracker.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<CursorTracker.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof CursorTracker.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CursorTracker.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof CursorTracker.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CursorTracker.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof CursorTracker.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<CursorTracker.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Retrieves the cursor tracker object for `display`.
         * @param display the {@link Meta.Display}
         */
        static get_for_display(display: Display): CursorTracker;

        // Methods

        /**
         * Get the hotspot of the current cursor sprite.
         */
        get_hot(): [number, number];
        /**
         * Get the current pointer position and state.
         */
        get_pointer(): [Graphene.Point | null, Clutter.ModifierType | null];
        get_pointer_visible(): boolean;
        /**
         * Get the scale factor of the cursor sprite
         * @returns The scale factor of the cursor sprite
         */
        get_scale(): number;
        /**
         * Get the {@link Cogl.Texture} of the cursor sprite
         * @returns the {@link Cogl.Texture} of the cursor sprite
         */
        get_sprite(): Cogl.Texture | null;
        /**
         * @param visible
         */
        set_pointer_visible(visible: boolean): void;
    }

    namespace DebugControl {
        // Signal signatures
        interface SignalSignatures extends Gio.DBusInterfaceSkeleton.SignalSignatures {
            'notify::context': (pspec: GObject.ParamSpec) => void;
            'notify::exported': (pspec: GObject.ParamSpec) => void;
            'notify::g-flags': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends Gio.DBusInterfaceSkeleton.ConstructorProps, Gio.DBusInterface.ConstructorProps {
            context: Context;
            exported: boolean;
        }
    }

    /**
     * @gir-type Class
     */
    class DebugControl extends Gio.DBusInterfaceSkeleton implements Gio.DBusInterface {
        static $gtype: GObject.GType<DebugControl>;

        // Properties

        /**
         * @construct-only
         */
        get context(): Context;
        get exported(): boolean;
        set exported(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: DebugControl.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<DebugControl.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof DebugControl.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DebugControl.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof DebugControl.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, DebugControl.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof DebugControl.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<DebugControl.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @param exported
         */
        set_exported(exported: boolean): void;
        /**
         * Gets the {@link Gio.DBusObject} that `interface_` belongs to, if any.
         * @returns A {@link Gio.DBusObject} or `null`. The returned reference should be freed with `g_object_unref()`.
         */
        get_object(): Gio.DBusObject | null;
        /**
         * Gets D-Bus introspection information for the D-Bus interface
         * implemented by `interface_`.
         * @returns A {@link Gio.DBusInterfaceInfo}. Do not free.
         */
        get_info(): Gio.DBusInterfaceInfo;
        /**
         * Sets the {@link Gio.DBusObject} for `interface_` to `object`.
         *
         * Note that `interface_` will hold a weak reference to `object`.
         * @param object A {@link Gio.DBusObject} or `null`.
         */
        set_object(object?: Gio.DBusObject | null): void;
        /**
         * Gets the {@link Gio.DBusObject} that `interface_` belongs to, if any.
         * @virtual
         */
        vfunc_dup_object(): Gio.DBusObject | null;
        /**
         * Gets D-Bus introspection information for the D-Bus interface
         * implemented by `interface_`.
         * @virtual
         */
        vfunc_get_info(): Gio.DBusInterfaceInfo;
        /**
         * Sets the {@link Gio.DBusObject} for `interface_` to `object`.
         *
         * Note that `interface_` will hold a weak reference to `object`.
         * @param object A {@link Gio.DBusObject} or `null`.
         * @virtual
         */
        vfunc_set_object(object?: Gio.DBusObject | null): void;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace Display {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             * @run-last
             */
            'accelerator-activated': (arg0: number, arg1: Clutter.InputDevice, arg2: number) => void;
            /**
             * @signal
             * @run-last
             */
            'accelerator-deactivated': (arg0: number, arg1: Clutter.InputDevice, arg2: number) => void;
            /**
             * @signal
             * @run-last
             */
            closing: () => void;
            /**
             * @signal
             * @run-last
             */
            'cursor-updated': () => void;
            /**
             * @signal
             * @run-last
             */
            'focus-window': (arg0: Window, arg1: number) => void;
            /**
             * @signal
             * @run-last
             */
            'gl-video-memory-purged': () => void;
            /**
             * @signal
             * @run-last
             */
            'grab-op-begin': (arg0: Window, arg1: GrabOp) => void;
            /**
             * @signal
             * @run-last
             */
            'grab-op-end': (arg0: Window, arg1: GrabOp) => void;
            /**
             * @signal
             * @run-last
             */
            'in-fullscreen-changed': () => void;
            /**
             * @signal
             * @run-last
             */
            'init-xserver': (arg0: Gio.Task) => boolean | void;
            /**
             * The ::modifiers-accelerator-activated signal will be emitted when
             * a special modifiers-only keybinding is activated.
             * @signal
             * @run-last
             */
            'modifiers-accelerator-activated': () => boolean | void;
            /**
             * @signal
             * @run-last
             */
            'overlay-key': () => void;
            /**
             * @signal
             * @run-last
             */
            'pad-mode-switch': (arg0: Clutter.InputDevice, arg1: number, arg2: number) => void;
            /**
             * @signal
             * @run-last
             */
            restacked: () => void;
            /**
             * The signal is emitted to indicate that compositor
             * should reexec the process.
             *
             * This is emitted when {@link Meta.restart} is called,
             * either by Mutter internally or by the embedding compositor.
             *
             * See also `Meta.Display::show-restart-message`.
             * @signal
             * @run-last
             */
            restart: () => boolean | void;
            /**
             * @signal
             * @run-last
             */
            'show-osd': (arg0: number, arg1: string, arg2: string) => void;
            /**
             * Requests the pad button mapping OSD to be shown.
             * @signal
             * @run-last
             */
            'show-pad-osd': (
                arg0: Clutter.InputDevice,
                arg1: Gio.Settings,
                arg2: string,
                arg3: boolean,
                arg4: number,
            ) => Clutter.Actor | null;
            /**
             * @signal
             * @run-last
             */
            'show-resize-popup': (arg0: boolean, arg1: Mtk.Rectangle, arg2: number, arg3: number) => boolean | void;
            /**
             * The signal will be emitted to indicate that the compositor
             * should show a message during restart.
             *
             * This is emitted when {@link Meta.restart} is called, either by Mutter
             * internally or by the embedding compositor. The message should be
             * immediately added to the Clutter stage in its final form -
             * `Meta.Display::restart` will be emitted to exit the application and leave the
             * stage contents frozen as soon as the the stage is painted again.
             *
             * On case of failure to restart, this signal will be emitted again
             * with `null` for `message`.
             * @signal
             * @run-last
             */
            'show-restart-message': (arg0: string | null) => boolean | void;
            /**
             * @signal
             * @run-last
             */
            'showing-desktop-changed': () => void;
            /**
             * @signal
             * @run-last
             */
            'window-created': (arg0: Window) => void;
            /**
             * @signal
             * @run-last
             */
            'window-demands-attention': (arg0: Window) => void;
            /**
             * @signal
             * @run-last
             */
            'window-entered-monitor': (arg0: number, arg1: Window) => void;
            /**
             * @signal
             * @run-last
             */
            'window-left-monitor': (arg0: number, arg1: Window) => void;
            /**
             * @signal
             * @run-last
             */
            'window-marked-urgent': (arg0: Window) => void;
            /**
             * @signal
             * @run-last
             */
            'window-visibility-updated': (arg0: any | null, arg1: any | null, arg2: any | null) => void;
            /**
             * @signal
             * @run-last
             */
            'workareas-changed': () => void;
            /**
             * @signal
             * @run-last
             */
            'x11-display-closing': () => void;
            /**
             * @signal
             * @run-last
             */
            'x11-display-opened': () => void;
            /**
             * @signal
             * @run-last
             */
            'x11-display-setup': () => void;
            'notify::compositor-modifiers': (pspec: GObject.ParamSpec) => void;
            'notify::focus-window': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            compositor_modifiers: Clutter.ModifierType;
            compositorModifiers: Clutter.ModifierType;
            focus_window: Window;
            focusWindow: Window;
        }
    }

    /**
     * Mutter display representation
     *
     * The display is represented as a {@link Meta.Display} struct.
     * @gir-type Class
     */
    class Display extends GObject.Object {
        static $gtype: GObject.GType<Display>;

        // Properties

        /**
         * @read-only
         */
        get compositor_modifiers(): Clutter.ModifierType;
        /**
         * @read-only
         */
        get compositorModifiers(): Clutter.ModifierType;
        /**
         * @read-only
         */
        get focus_window(): Window;
        /**
         * @read-only
         */
        get focusWindow(): Window;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Display.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Display.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Display.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Display.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Display.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Display.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Display.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Display.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Add a keybinding at runtime. The key `name` in `schema` needs to be of
         * type `G_VARIANT_TYPE_STRING_ARRAY`, with each string describing a
         * keybinding in the form of "&lt;Control&gt;a" or "&lt;Shift&gt;&lt;Alt&gt;F1". The parser
         * is fairly liberal and allows lower or upper case, and also abbreviations
         * such as "&lt;Ctl&gt;" and "&lt;Ctrl&gt;". If the key is set to the empty list or a
         * list with a single element of either "" or "disabled", the keybinding is
         * disabled.
         *
         * Use `meta_display_remove_keybinding()` to remove the binding.
         * @param name the binding's name
         * @param settings the {@link Gio.Settings} object where `name` is stored
         * @param flags flags to specify binding details
         * @param handler function to run when the keybinding is invoked
         * @returns the corresponding keybinding action if the keybinding was          added successfully, otherwise {@link Meta.KeyBindingAction.NONE}
         */
        add_keybinding(
            name: string,
            settings: Gio.Settings,
            flags: KeyBindingFlags | null,
            handler: KeyHandlerFunc,
        ): number;
        /**
         * Sets the mouse-mode flag to `false`, which means that motion events are
         * no longer ignored in mouse or sloppy focus.
         * This is an internal function. It should be used only for reimplementing
         * keybindings, and only in a manner compatible with core code.
         */
        clear_mouse_mode(): void;
        /**
         * @param timestamp
         */
        close(timestamp: number): void;
        /**
         * @param timestamp
         */
        focus_default_window(timestamp: number): void;
        /**
         * @returns the {@link Meta.Compositor}
         */
        get_compositor(): Compositor;
        get_compositor_modifiers(): Clutter.ModifierType;
        /**
         * @returns the {@link Meta.Context}
         */
        get_context(): Context;
        /**
         * Gets the index of the monitor that currently has the mouse pointer.
         * @returns a monitor index
         */
        get_current_monitor(): number;
        get_current_time(): number;
        get_current_time_roundtrip(): number;
        /**
         * Get our best guess as to the "currently" focused window (that is,
         * the window that we expect will be focused at the point when the X
         * server processes our next request).
         * @returns The current focus window
         */
        get_focus_window(): Window;
        /**
         * Get the keybinding action bound to `keycode`. Builtin keybindings
         * have a fixed associated {@link Meta.KeyBindingAction}, for bindings added
         * dynamically the function will return the keybinding action
         * `meta_display_add_keybinding()` returns on registration.
         * @param keycode Raw keycode
         * @param mask Event mask
         * @returns The action that should be taken for the given key, or {@link Meta.KeyBindingAction.NONE}.
         */
        get_keybinding_action(keycode: number, mask: number): number;
        /**
         * @returns Timestamp of the last user interaction event with a window
         */
        get_last_user_time(): number;
        /**
         * Stores the location and size of the indicated `monitor` in `geometry`.
         * @param monitor the monitor number
         */
        get_monitor_geometry(monitor: number): Mtk.Rectangle;
        /**
         * Determines whether there is a fullscreen window obscuring the specified
         * monitor. If there is a fullscreen window, the desktop environment will
         * typically hide any controls that might obscure the fullscreen window.
         *
         * You can get notification when this changes by connecting to
         * MetaDisplay::in-fullscreen-changed.
         * @param monitor the monitor number
         * @returns `true` if there is a fullscreen window covering the specified monitor.
         */
        get_monitor_in_fullscreen(monitor: number): boolean;
        /**
         * @param rect
         */
        get_monitor_index_for_rect(rect: Mtk.Rectangle): number;
        /**
         * @param which_monitor
         * @param dir
         */
        get_monitor_neighbor_index(which_monitor: number, dir: DisplayDirection | null): number;
        /**
         * Gets the monitor scaling value for the given `monitor`.
         * @param monitor the monitor number
         * @returns the monitor scaling value
         */
        get_monitor_scale(monitor: number): number;
        /**
         * Gets the number of monitors that are joined together to form `display`.
         * @returns the number of monitors
         */
        get_n_monitors(): number;
        /**
         * @param pad
         * @param button_number
         */
        get_pad_button_label(pad: Clutter.InputDevice, button_number: number): string;
        /**
         * @param pad
         * @param feature
         * @param direction
         * @param feature_number
         */
        get_pad_feature_label(
            pad: Clutter.InputDevice,
            feature: PadFeatureType | null,
            direction: PadDirection | null,
            feature_number: number,
        ): string;
        /**
         * Gets the index of the primary monitor on this `display`.
         * @returns a monitor index
         */
        get_primary_monitor(): number;
        /**
         * @returns The selection manager of the display
         */
        get_selection(): Selection;
        /**
         * Retrieve the size of the display.
         */
        get_size(): [number, number];
        /**
         * @returns The sound player of the display
         */
        get_sound_player(): SoundPlayer;
        /**
         * Determine the active window that should be displayed for Alt-TAB.
         * @param type type of tab list
         * @param workspace origin workspace
         * @returns Current window
         */
        get_tab_current(type: TabList | null, workspace: Workspace): Window;
        /**
         * Determine the list of windows that should be displayed for Alt-TAB
         * functionality.  The windows are returned in most recently used order.
         * If `workspace` is not `null`, the list only contains windows that are on
         * `workspace` or have the demands-attention hint set; otherwise it contains
         * all windows.
         * @param type type of tab list
         * @param workspace origin workspace
         * @returns List of windows
         */
        get_tab_list(type: TabList | null, workspace?: Workspace | null): Window[];
        /**
         * Determine the next window that should be displayed for Alt-TAB
         * functionality.
         * @param type type of tab list
         * @param workspace origin workspace
         * @param window starting window
         * @param backward If `true`, look for the previous window.
         * @returns Next window
         */
        get_tab_next(type: TabList | null, workspace: Workspace, window: Window | null, backward: boolean): Window;
        /**
         * @returns The workspace manager of the display
         */
        get_workspace_manager(): WorkspaceManager;
        /**
         * @param accelerator
         * @param flags
         */
        grab_accelerator(accelerator: string, flags: KeyBindingFlags | null): number;
        /**
         * Returns `true` if there is an ongoing grab operation.
         * @returns Whether there is an active display grab operation.
         */
        is_grabbed(): boolean;
        /**
         * Tells whether the event sequence is the used for pointer emulation
         * and single-touch interaction.
         * @param sequence a {@link Clutter.EventSequence}
         * @returns `TRUE` if the sequence emulates pointer behavior
         */
        is_pointer_emulating_sequence(sequence?: Clutter.EventSequence | null): boolean;
        /**
         * List all windows, including override-redirect ones. The windows are
         * in no particular order.
         * @returns List of windows
         */
        list_all_windows(): Window[];
        /**
         * Remove keybinding `name`; the function will fail if `name` is not a known
         * keybinding or has not been added with `meta_display_add_keybinding()`.
         * @param name name of the keybinding to remove
         * @returns `true` if the binding has been removed successfully,          otherwise `false`
         */
        remove_keybinding(name: string): boolean;
        /**
         * @param pad
         * @param edition_mode
         */
        request_pad_osd(pad: Clutter.InputDevice, edition_mode: boolean): void;
        /**
         * @param cursor
         */
        set_cursor(cursor: Cursor | null): void;
        /**
         * @param window
         * @param timestamp
         */
        set_input_focus(window: Window, timestamp: number): void;
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
        sort_windows_by_stacking(windows: Window[]): Window[];
        /**
         * @param action_id
         */
        ungrab_accelerator(action_id: number): boolean;
        /**
         * @param timestamp
         */
        unset_input_focus(timestamp: number): void;
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
        xserver_time_is_before(time1: number, time2: number): boolean;
    }

    namespace Dnd {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             * @run-last
             */
            'dnd-enter': () => void;
            /**
             * @signal
             * @run-last
             */
            'dnd-leave': () => void;
            /**
             * @signal
             * @run-last
             */
            'dnd-position-change': (arg0: number, arg1: number) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class Dnd extends GObject.Object {
        static $gtype: GObject.GType<Dnd>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Dnd.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Dnd.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Dnd.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Dnd.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Dnd.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Dnd.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Dnd.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Dnd.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace IdleMonitor {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::device': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            device: Clutter.InputDevice;
        }
    }

    /**
     * Mutter idle counter (similar to X's IDLETIME)
     * @gir-type Class
     */
    class IdleMonitor extends GObject.Object {
        static $gtype: GObject.GType<IdleMonitor>;

        // Properties

        /**
         * The device to listen to idletime on.
         * @construct-only
         */
        get device(): Clutter.InputDevice;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: IdleMonitor.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<IdleMonitor.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof IdleMonitor.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, IdleMonitor.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof IdleMonitor.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, IdleMonitor.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof IdleMonitor.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<IdleMonitor.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @param interval_msec The idletime interval, in milliseconds
         * @param callback The callback to call when the user has     accumulated `interval_msec` milliseconds of idle time.
         * @returns a watch id Adds a watch for a specific idle time. The callback will be called when the user has accumulated `interval_msec` milliseconds of idle time. This function will return an ID that can either be passed to `meta_idle_monitor_remove_watch()`, or can be used to tell idle time watches apart if you have more than one. Also note that this function will only care about positive transitions (user's idle time exceeding a certain time). If you want to know about when the user has become active, use `meta_idle_monitor_add_user_active_watch()`.
         */
        add_idle_watch(interval_msec: number, callback?: IdleMonitorWatchFunc | null): number;
        /**
         * @param callback The callback to call when the user is     active again.
         * @returns a watch id Add a one-time watch to know when the user is active again. Note that this watch is one-time and will de-activate after the function is called, for efficiency purposes. It's most convenient to call this when an idle watch, as added by `meta_idle_monitor_add_idle_watch()`, has triggered.
         */
        add_user_active_watch(callback?: IdleMonitorWatchFunc | null): number;
        /**
         * @returns The current idle time, in milliseconds, or -1 for not supported
         */
        get_idletime(): number;
        /**
         * Removes an idle time watcher, previously added by
         * `meta_idle_monitor_add_idle_watch()` or
         * `meta_idle_monitor_add_user_active_watch()`.
         * @param id A watch ID
         */
        remove_watch(id: number): void;
    }

    namespace Laters {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class Laters extends GObject.Object {
        static $gtype: GObject.GType<Laters>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Laters.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Laters.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Laters.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Laters.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Laters.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Laters.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Laters.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Laters.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Sets up a callback  to be called at some later time. `when` determines the
         * particular later occasion at which it is called. This is much like `g_idle_add()`,
         * except that the functions interact properly with clutter event handling.
         * If a "later" function is added from a clutter event handler, and is supposed
         * to be run before the stage is redrawn, it will be run before that redraw
         * of the stage, not the next one.
         * @param when enumeration value determining the phase at which to run the callback
         * @param func callback to run later
         * @returns an integer ID (guaranteed to be non-zero) that can be used  to cancel the callback and prevent it from being run.
         */
        add(when: LaterType | null, func: GLib.SourceFunc): number;
        /**
         * Removes a callback added with `meta_later_add()`
         * @param later_id the integer ID returned from `meta_later_add()`
         */
        remove(later_id: number): void;
    }

    namespace LaunchContext {
        // Signal signatures
        interface SignalSignatures extends Gio.AppLaunchContext.SignalSignatures {
            'notify::display': (pspec: GObject.ParamSpec) => void;
            'notify::timestamp': (pspec: GObject.ParamSpec) => void;
            'notify::workspace': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Gio.AppLaunchContext.ConstructorProps {
            display: Display;
            timestamp: number;
            workspace: Workspace;
        }
    }

    /**
     * @gir-type Class
     */
    class LaunchContext extends Gio.AppLaunchContext {
        static $gtype: GObject.GType<LaunchContext>;

        // Properties

        /**
         * @construct-only
         */
        get display(): Display;
        get timestamp(): number;
        set timestamp(val: number);
        get workspace(): Workspace;
        set workspace(val: Workspace);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: LaunchContext.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<LaunchContext.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof LaunchContext.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, LaunchContext.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof LaunchContext.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, LaunchContext.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof LaunchContext.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<LaunchContext.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @param timestamp
         */
        set_timestamp(timestamp: number): void;
        /**
         * @param workspace
         */
        set_workspace(workspace: Workspace): void;
    }

    namespace MonitorManager {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             * @run-last
             */
            'confirm-display-change': () => void;
            /**
             * @signal
             * @run-last
             */
            'monitor-privacy-screen-changed': (arg0: unknown, arg1: boolean) => void;
            /**
             * @signal
             * @run-last
             */
            'monitors-changed': () => void;
            /**
             * @signal
             * @run-last
             */
            'monitors-changed-internal': () => void;
            /**
             * @signal
             * @run-last
             */
            'power-save-mode-changed': (arg0: PowerSaveChangeReason) => void;
            'notify::backend': (pspec: GObject.ParamSpec) => void;
            'notify::has-builtin-panel': (pspec: GObject.ParamSpec) => void;
            'notify::night-light-supported': (pspec: GObject.ParamSpec) => void;
            'notify::panel-orientation-managed': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            backend: Backend;
            has_builtin_panel: boolean;
            hasBuiltinPanel: boolean;
            night_light_supported: boolean;
            nightLightSupported: boolean;
            panel_orientation_managed: boolean;
            panelOrientationManaged: boolean;
        }
    }

    /**
     * A manager for multiple monitors
     *
     * {@link Meta.MonitorManager} is an abstract class which contains methods to handle
     * multiple monitors (both `MetaMonitor` and `MetaLogicalMonitor`) and GPU's
     * (`MetaGpu`). Its functions include reading and/or changing the current
     * configuration and available capabiliies.
     *
     * The {@link Meta.MonitorManager} also provides the "org.gnome.Mutter.DisplayConfig"
     * DBus service, so apps like GNOME Settings can use this functionality.
     * @gir-type Class
     */
    class MonitorManager extends GObject.Object {
        static $gtype: GObject.GType<MonitorManager>;

        // Properties

        /**
         * @construct-only
         */
        get backend(): Backend;
        /**
         * @read-only
         */
        get has_builtin_panel(): boolean;
        /**
         * @read-only
         */
        get hasBuiltinPanel(): boolean;
        /**
         * @read-only
         */
        get night_light_supported(): boolean;
        /**
         * @read-only
         */
        get nightLightSupported(): boolean;
        /**
         * @read-only
         */
        get panel_orientation_managed(): boolean;
        /**
         * @read-only
         */
        get panelOrientationManaged(): boolean;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MonitorManager.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<MonitorManager.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof MonitorManager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MonitorManager.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof MonitorManager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MonitorManager.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof MonitorManager.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MonitorManager.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        can_switch_config(): boolean;
        get_display_configuration_timeout(): number;
        /**
         * Returns whether the built-in display (i.e. a laptop panel) is turned on.
         */
        get_is_builtin_display_on(): boolean;
        /**
         * @param connector A valid connector name
         * @returns The monitor index or -1 if `id` isn't valid or the connector isn't associated with a logical monitor.
         */
        get_monitor_for_connector(connector: string): number;
        get_panel_orientation_managed(): boolean;
        get_switch_config(): MonitorSwitchConfigType;
        /**
         * @param config_type
         */
        switch_config(config_type: MonitorSwitchConfigType | null): void;
    }

    namespace MultiTexture {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * A texture that can have multiple planes.
     *
     * {@link Meta.MultiTexture} allows one to deal with non-trivial formats that
     * have multiple planes, requires subsampling and/or aren't in RGB. A common
     * example of this are decoded video frames, which often use something in the
     * YUV colorspace, combined with subsampling.
     *
     * The basic idea of a {@link Meta.MultiTexture} is the following:
     * - Each plane is represented by a separate {@link Cogl.Texture}. That means that you
     *   should add each of these planes as a layer to your CoglPipeline.
     * - When dealing with a color space that is not RGB, you can ask the
     *   {@link Meta.MultiTexture} to create a shader for you that does the conversion
     *   in the GPU.
     * - In case you need to deal with memory access in a format with subsampling,
     *   you can use `meta_multi_texture_get_width()` and its analogous version
     *   for the height to get the correct size of the texture.
     * @gir-type Class
     */
    class MultiTexture extends GObject.Object {
        static $gtype: GObject.GType<MultiTexture>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: MultiTexture.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<MultiTexture.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](format: MultiTextureFormat, planes: Cogl.Texture, n_planes: number): MultiTexture;

        static new_simple(plane: Cogl.Texture): MultiTexture;

        // Signals

        /** @signal */
        connect<K extends keyof MultiTexture.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MultiTexture.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof MultiTexture.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MultiTexture.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof MultiTexture.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MultiTexture.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Returns the {@link Meta.MultiTextureFormat} that is used by this texture.
         * @returns The texture format that is used by this {@link Meta.MultiTexture}.
         */
        get_format(): MultiTextureFormat;
        /**
         * Returns the height of the {@link Meta.MultiTexture}. Prefer this over calling
         * `cogl_texture_get_height()` on one of the textures, as that might give a
         * different size when dealing with subsampling.
         * @returns The height of the texture.
         */
        get_height(): number;
        /**
         * Returns the number of planes for this texture. Note that this is entirely
         * dependent on the {@link Cogl.PixelFormat} that is used. For example, simple RGB
         * textures will have a single plane, while some more convoluted formats like
         * NV12 and YUV 4:4:4 can have 2 and 3 planes respectively.
         * @returns The number of planes in this {@link Meta.MultiTexture}.
         */
        get_n_planes(): number;
        /**
         * Returns the n'th plane of the {@link Meta.MultiTexture}. Note that it's a programming
         * error to use with an index larger than `meta_multi_texture_get_n_planes()`.
         * @param index the index of the plane
         * @returns The plane at the given `index`.
         */
        get_plane(index: number): Cogl.Texture;
        /**
         * Returns the width of the {@link Meta.MultiTexture}. Prefer this over calling
         * `cogl_texture_get_width()` on one of the textures, as that might give a
         * different size when dealing with subsampling.
         * @returns The width of the texture.
         */
        get_width(): number;
        /**
         * A small function that checks whether the given multi texture uses a "simple"
         * format, i.e. one that can be represented by a {@link Cogl.PixelFormat}.
         * @returns Whether the texture format is #META_MULTI_TEXTURE_FORMAT_SIMPLE
         */
        is_simple(): boolean;
        /**
         * Returns a string representation of `multi_texture`, useful for debugging
         * purposes.
         * @returns A string representation of `multi_texture`. Use `g_free()` when done with it.
         */
        to_string(): string;
    }

    namespace OrientationManager {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             * @run-last
             */
            'orientation-changed': () => void;
            'notify::has-accelerometer': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            has_accelerometer: boolean;
            hasAccelerometer: boolean;
        }
    }

    /**
     * A screen orientation manager
     *
     * {@link Meta.OrientationManager} is a final class which contains methods to
     * read the current screen orientation, as well as a signal that is
     * triggered whenever a screen changes its orientation.
     * @gir-type Class
     */
    class OrientationManager extends GObject.Object {
        static $gtype: GObject.GType<OrientationManager>;

        // Properties

        /**
         * @read-only
         */
        get has_accelerometer(): boolean;
        /**
         * @read-only
         */
        get hasAccelerometer(): boolean;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: OrientationManager.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<OrientationManager.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof OrientationManager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, OrientationManager.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof OrientationManager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, OrientationManager.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof OrientationManager.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<OrientationManager.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_orientation(): Orientation;
    }

    namespace Plugin {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * Entry point for plugins
     * @gir-type Class
     */
    abstract class Plugin extends GObject.Object {
        static $gtype: GObject.GType<Plugin>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Plugin.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Plugin.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Plugin.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Plugin.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Plugin.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Plugin.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Plugin.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Plugin.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * @param gtype
         */
        static manager_set_plugin_type(gtype: GObject.GType): void;

        // Virtual methods

        /**
         * @virtual
         */
        vfunc_confirm_display_change(): void;
        /**
         * Virtual function called to create a "force quit" dialog
         * on non-responsive clients.
         * @param window a {@link Meta.Window}
         * @virtual
         */
        vfunc_create_close_dialog(window: Window): CloseDialog | null;
        /**
         * Virtual function called to create a "inhibit shortcuts" dialog
         * when a client requests compositor shortcuts to be inhibited.
         * @param window a {@link Meta.Window}
         * @virtual
         */
        vfunc_create_inhibit_shortcuts_dialog(window: Window): InhibitShortcutsDialog;
        /**
         * Virtual function called when the window represented by `actor` is destroyed.
         * @param actor a {@link Meta.WindowActor}
         * @virtual
         */
        vfunc_destroy(actor: WindowActor): void;
        /**
         * @virtual
         */
        vfunc_hide_tile_preview(): void;
        /**
         * Virtual function called when handling each keybinding.
         * @param binding a {@link Meta.KeyBinding}
         * @virtual
         */
        vfunc_keybinding_filter(binding: KeyBinding): boolean;
        /**
         * Virtual function called when the workspace-switching effect needs to be
         * killed prematurely.
         * @virtual
         */
        vfunc_kill_switch_workspace(): void;
        /**
         * Virtual function called when the effects on `actor` need to be killed
         * prematurely; the plugin must call the `completed()` callback as if the effect
         * terminated naturally.
         * @param actor a {@link Meta.WindowActor}
         * @virtual
         */
        vfunc_kill_window_effects(actor: WindowActor): void;
        /**
         * Virtual function called when the user triggered the "locate-pointer"
         * mechanism.
         * The common way to implement this function is to show some animation
         * on screen to draw user attention on the pointer location.
         * @virtual
         */
        vfunc_locate_pointer(): void;
        /**
         * Virtual function called when the window represented by `actor` is mapped.
         * @param actor a {@link Meta.WindowActor}
         * @virtual
         */
        vfunc_map(actor: WindowActor): void;
        /**
         * Virtual function called when the window represented by `actor` is minimized.
         * @param actor a {@link Meta.WindowActor}
         * @virtual
         */
        vfunc_minimize(actor: WindowActor): void;
        /**
         * Virtual function that returns information about the {@link Meta.Plugin}.
         * @virtual
         */
        vfunc_plugin_info(): PluginInfo;
        /**
         * @param window
         * @param tile_rect
         * @param tile_monitor_number
         * @virtual
         */
        vfunc_show_tile_preview(window: Window, tile_rect: Mtk.Rectangle, tile_monitor_number: number): void;
        /**
         * @param window
         * @param menu
         * @param x
         * @param y
         * @virtual
         */
        vfunc_show_window_menu(window: Window, menu: WindowMenuType, x: number, y: number): void;
        /**
         * @param window
         * @param menu
         * @param rect
         * @virtual
         */
        vfunc_show_window_menu_for_rect(window: Window, menu: WindowMenuType, rect: Mtk.Rectangle): void;
        /**
         * virtual function called when a window changes size to/from constraints
         * @param actor
         * @param which_change
         * @param old_frame_rect
         * @param old_buffer_rect
         * @virtual
         */
        vfunc_size_change(
            actor: WindowActor,
            which_change: SizeChange,
            old_frame_rect: Mtk.Rectangle,
            old_buffer_rect: Mtk.Rectangle,
        ): void;
        /**
         * @param actor
         * @virtual
         */
        vfunc_size_changed(actor: WindowActor): void;
        /**
         * Virtual function called when the compositor starts managing a screen
         * @virtual
         */
        vfunc_start(): void;
        /**
         * Virtual function called when the window represented by `actor` is destroyed.
         * @param from origin workspace
         * @param to destination workspace
         * @param direction a {@link Meta.MotionDirection}
         * @virtual
         */
        vfunc_switch_workspace(from: number, to: number, direction: MotionDirection): void;
        /**
         * Virtual function called when the window represented by `actor` is unminimized.
         * @param actor a {@link Meta.WindowActor}
         * @virtual
         */
        vfunc_unminimize(actor: WindowActor): void;
        /**
         * Virtual function called when handling each event.
         * @param event
         * @virtual
         */
        vfunc_xevent_filter(event: xlib.XEvent): boolean;

        // Methods

        /**
         * @param ok
         */
        complete_display_change(ok: boolean): void;
        /**
         * @param actor
         */
        destroy_completed(actor: WindowActor): void;
        /**
         * Gets the {@link Meta.Display} corresponding to a plugin.
         * @returns the {@link Meta.Display} for the plugin
         */
        get_display(): Display;
        get_info(): PluginInfo;
        /**
         * @param actor
         */
        map_completed(actor: WindowActor): void;
        /**
         * @param actor
         */
        minimize_completed(actor: WindowActor): void;
        /**
         * @param actor
         */
        size_change_completed(actor: WindowActor): void;
        switch_workspace_completed(): void;
        /**
         * @param actor
         */
        unminimize_completed(actor: WindowActor): void;
    }

    namespace RemoteAccessController {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             * @run-last
             */
            'new-handle': (arg0: RemoteAccessHandle) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class RemoteAccessController extends GObject.Object {
        static $gtype: GObject.GType<RemoteAccessController>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: RemoteAccessController.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<RemoteAccessController.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof RemoteAccessController.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, RemoteAccessController.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof RemoteAccessController.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, RemoteAccessController.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof RemoteAccessController.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<RemoteAccessController.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Inhibits remote access sessions from being created and running. Any active
         * remote access session will be terminated.
         */
        inhibit_remote_access(): void;
        /**
         * Uninhibits remote access sessions from being created and running. If this was
         * the last inhibition that was inhibited, new remote access sessions can now
         * be created.
         */
        uninhibit_remote_access(): void;
    }

    namespace RemoteAccessHandle {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             * @run-last
             */
            stopped: () => void;
            'notify::is-recording': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            is_recording: boolean;
            isRecording: boolean;
        }
    }

    /**
     * @gir-type Class
     */
    class RemoteAccessHandle extends GObject.Object {
        static $gtype: GObject.GType<RemoteAccessHandle>;

        // Properties

        /**
         * @construct-only
         */
        get is_recording(): boolean;
        /**
         * @construct-only
         */
        get isRecording(): boolean;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: RemoteAccessHandle.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<RemoteAccessHandle.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof RemoteAccessHandle.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, RemoteAccessHandle.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof RemoteAccessHandle.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, RemoteAccessHandle.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof RemoteAccessHandle.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<RemoteAccessHandle.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * Stop the associated remote access session.
         * @virtual
         */
        vfunc_stop(): void;

        // Methods

        get_disable_animations(): boolean;
        /**
         * Stop the associated remote access session.
         */
        stop(): void;
    }

    namespace Selection {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             * @run-last
             */
            'owner-changed': (arg0: number, arg1: SelectionSource) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class Selection extends GObject.Object {
        static $gtype: GObject.GType<Selection>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Selection.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Selection.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](display: Display): Selection;

        // Signals

        /** @signal */
        connect<K extends keyof Selection.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Selection.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Selection.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Selection.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Selection.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Selection.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Returns the list of supported mimetypes for the given selection type.
         * @param selection_type Selection to query
         * @returns The supported mimetypes
         */
        get_mimetypes(selection_type: SelectionType | null): string[];
        /**
         * Sets `owner` as the owner of the selection given by `selection_type`,
         * unsets any previous owner there was.
         * @param selection_type Selection type
         * @param owner New selection owner
         */
        set_owner(selection_type: SelectionType | null, owner: SelectionSource): void;
        /**
         * Requests a transfer of `mimetype` on the selection given by
         * `selection_type`.
         * @param selection_type Selection type
         * @param mimetype Mimetype to transfer
         * @param size Maximum size to transfer, -1 for unlimited
         * @param output Output stream to write contents to
         * @param cancellable Cancellable
         */
        transfer_async(
            selection_type: SelectionType | null,
            mimetype: string,
            size: number,
            output: Gio.OutputStream,
            cancellable?: Gio.Cancellable | null,
        ): globalThis.Promise<boolean>;
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
        transfer_async(
            selection_type: SelectionType | null,
            mimetype: string,
            size: number,
            output: Gio.OutputStream,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
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
        transfer_async(
            selection_type: SelectionType | null,
            mimetype: string,
            size: number,
            output: Gio.OutputStream,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<boolean> | void;
        /**
         * Finishes the transfer of a queried mimetype.
         * @param result The async result
         * @returns `TRUE` if the transfer was successful.
         */
        transfer_finish(result: Gio.AsyncResult): boolean;
        /**
         * Unsets `owner` as the owner the selection given by `selection_type`. If
         * `owner` does not own the selection, nothing is done.
         * @param selection_type Selection type
         * @param owner Owner to unset
         */
        unset_owner(selection_type: SelectionType | null, owner: SelectionSource): void;
    }

    namespace SelectionSource {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             * @action
             * @run-last
             */
            activated: () => void;
            /**
             * @signal
             * @action
             * @run-last
             */
            deactivated: () => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class SelectionSource extends GObject.Object {
        static $gtype: GObject.GType<SelectionSource>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SelectionSource.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<SelectionSource.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof SelectionSource.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SelectionSource.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof SelectionSource.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SelectionSource.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof SelectionSource.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<SelectionSource.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * @virtual
         */
        vfunc_activated(): void;
        /**
         * @virtual
         */
        vfunc_deactivated(): void;
        /**
         * Returns the list of supported mimetypes.
         * @virtual
         */
        vfunc_get_mimetypes(): string[];
        /**
         * @param mimetype
         * @param cancellable
         * @param callback
         * @virtual
         */
        vfunc_read_async(
            mimetype: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes a read from the selection source.
         * @param result The async result
         * @virtual
         */
        vfunc_read_finish(result: Gio.AsyncResult): Gio.InputStream;

        // Methods

        /**
         * Returns the list of supported mimetypes.
         * @returns The supported mimetypes
         */
        get_mimetypes(): string[];
        /**
         * Returns `TRUE` if the source is active on a selection.
         * @returns `TRUE` if the source owns a selection.
         */
        is_active(): boolean;
        /**
         * @param mimetype
         * @param cancellable
         */
        read_async(mimetype: string, cancellable?: Gio.Cancellable | null): globalThis.Promise<Gio.InputStream>;
        /**
         * @param mimetype
         * @param cancellable
         * @param callback
         */
        read_async(
            mimetype: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * @param mimetype
         * @param cancellable
         * @param callback
         */
        read_async(
            mimetype: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<Gio.InputStream> | void;
        /**
         * Finishes a read from the selection source.
         * @param result The async result
         * @returns The resulting {@link Gio.InputStream}
         */
        read_finish(result: Gio.AsyncResult): Gio.InputStream;
    }

    namespace SelectionSourceMemory {
        // Signal signatures
        interface SignalSignatures extends SelectionSource.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends SelectionSource.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class SelectionSourceMemory extends SelectionSource {
        static $gtype: GObject.GType<SelectionSourceMemory>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SelectionSourceMemory.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<SelectionSourceMemory.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](mimetype: string, content: GLib.Bytes | Uint8Array): SelectionSourceMemory;

        // Signals

        /** @signal */
        connect<K extends keyof SelectionSourceMemory.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SelectionSourceMemory.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof SelectionSourceMemory.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SelectionSourceMemory.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof SelectionSourceMemory.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<SelectionSourceMemory.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace ShapedTexture {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             * @run-last
             */
            'size-changed': () => void;
            'notify::clutter-context': (pspec: GObject.ParamSpec) => void;
            'notify::color-state': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, Clutter.Content.ConstructorProps {
            clutter_context: Clutter.Context;
            clutterContext: Clutter.Context;
            color_state: Clutter.ColorState;
            colorState: Clutter.ColorState;
        }
    }

    /**
     * A ClutterContent which draws a shaped texture
     *
     * A MetaShapedTexture draws a {@link Cogl.Texture} (often provided from a client
     * surface) in such a way that it matches any required transformations that
     * give its final shape, such as a {@link Mtk.MonitorTransform}, y-invertedness, or a
     * crop-and-scale operation.
     * @gir-type Class
     */
    class ShapedTexture extends GObject.Object implements Clutter.Content {
        static $gtype: GObject.GType<ShapedTexture>;

        // Properties

        /**
         * @construct-only
         */
        get clutter_context(): Clutter.Context;
        /**
         * @construct-only
         */
        get clutterContext(): Clutter.Context;
        /**
         * @construct-only
         */
        get color_state(): Clutter.ColorState;
        /**
         * @construct-only
         */
        get colorState(): Clutter.ColorState;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ShapedTexture.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ShapedTexture.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof ShapedTexture.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ShapedTexture.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ShapedTexture.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ShapedTexture.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ShapedTexture.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ShapedTexture.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Flattens the two layers of the shaped texture into one ARGB32
         * image by alpha blending the two images, and returns the flattened
         * image.
         * @param clip A clipping rectangle, to help prevent extra processing. In the case that the clipping rectangle is partially or fully outside the bounds of the texture, the rectangle will be clipped.
         * @returns a new cairo surface to be freed with `cairo_surface_destroy()`.
         */
        get_image(clip?: Mtk.Rectangle | null): cairo.Surface | null;
        /**
         * @returns the unshaped texture
         */
        get_texture(): MultiTexture;
        /**
         * @param create_mipmaps
         */
        set_create_mipmaps(create_mipmaps: boolean): void;
        /**
         * @param mask_texture
         */
        set_mask_texture(mask_texture: Cogl.Texture): void;
        /**
         * Retrieves the natural size of the `content`, if any.
         *
         * The natural size of a {@link Clutter.Content} is defined as the size the content
         * would have regardless of the allocation of the actor that is painting it,
         * for instance the size of an image data.
         * @returns `true` if the content has a preferred size, and `false`   otherwise
         */
        get_preferred_size(): [boolean, number, number];
        /**
         * Invalidates a {@link Clutter.Content}.
         *
         * This function should be called by {@link Clutter.Content} implementations when
         * they change the way a the content should be painted regardless of the
         * actor state.
         */
        invalidate(): void;
        /**
         * Signals that `content`'s size changed. Attached actors with request mode
         * set to {@link Clutter.RequestMode.CONTENT_SIZE} will have a relayout queued.
         *
         * Attached actors with other request modes are not redrawn. To redraw them
         * too, use {@link Clutter.Content.invalidate}.
         */
        invalidate_size(): void;
        /**
         * virtual function; called each time a {@link Clutter.Content} is attached
         *   to a {@link Clutter.Actor}.
         * @param actor
         * @virtual
         */
        vfunc_attached(actor: Clutter.Actor): void;
        /**
         * virtual function; called each time a {@link Clutter.Content} is detached
         *   from a {@link Clutter.Actor}.
         * @param actor
         * @virtual
         */
        vfunc_detached(actor: Clutter.Actor): void;
        /**
         * Retrieves the natural size of the `content`, if any.
         *
         * The natural size of a {@link Clutter.Content} is defined as the size the content
         * would have regardless of the allocation of the actor that is painting it,
         * for instance the size of an image data.
         * @virtual
         */
        vfunc_get_preferred_size(): [boolean, number, number];
        /**
         * Invalidates a {@link Clutter.Content}.
         *
         * This function should be called by {@link Clutter.Content} implementations when
         * they change the way a the content should be painted regardless of the
         * actor state.
         * @virtual
         */
        vfunc_invalidate(): void;
        /**
         * Signals that `content`'s size changed. Attached actors with request mode
         * set to {@link Clutter.RequestMode.CONTENT_SIZE} will have a relayout queued.
         *
         * Attached actors with other request modes are not redrawn. To redraw them
         * too, use {@link Clutter.Content.invalidate}.
         * @virtual
         */
        vfunc_invalidate_size(): void;
        /**
         * virtual function; called each time the content needs to
         *   paint itself
         * @param actor
         * @param node
         * @param paint_context
         * @virtual
         */
        vfunc_paint_content(actor: Clutter.Actor, node: Clutter.PaintNode, paint_context: Clutter.PaintContext): void;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace SoundPlayer {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class SoundPlayer extends GObject.Object {
        static $gtype: GObject.GType<SoundPlayer>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SoundPlayer.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<SoundPlayer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof SoundPlayer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SoundPlayer.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof SoundPlayer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SoundPlayer.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof SoundPlayer.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<SoundPlayer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Plays a sound from a file.
         * @param file file to play
         * @param description description of the played sound
         * @param cancellable cancellable for the request
         */
        play_from_file(file: Gio.File, description: string, cancellable?: Gio.Cancellable | null): void;
        /**
         * Plays a sound from the sound theme.
         * @param name sound theme name of the event
         * @param description description of the event
         * @param cancellable cancellable for the request
         */
        play_from_theme(name: string, description: string, cancellable?: Gio.Cancellable | null): void;
    }

    namespace Stage {
        // Signal signatures
        interface SignalSignatures extends Clutter.Stage.SignalSignatures {
            'notify::is-grabbed': (pspec: GObject.ParamSpec) => void;
            'notify::key-focus': (pspec: GObject.ParamSpec) => void;
            'notify::perspective': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-name': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-role': (pspec: GObject.ParamSpec) => void;
            'notify::actions': (pspec: GObject.ParamSpec) => void;
            'notify::allocation': (pspec: GObject.ParamSpec) => void;
            'notify::background-color': (pspec: GObject.ParamSpec) => void;
            'notify::background-color-set': (pspec: GObject.ParamSpec) => void;
            'notify::child-transform': (pspec: GObject.ParamSpec) => void;
            'notify::child-transform-set': (pspec: GObject.ParamSpec) => void;
            'notify::clip-rect': (pspec: GObject.ParamSpec) => void;
            'notify::clip-to-allocation': (pspec: GObject.ParamSpec) => void;
            'notify::color-state': (pspec: GObject.ParamSpec) => void;
            'notify::constraints': (pspec: GObject.ParamSpec) => void;
            'notify::content': (pspec: GObject.ParamSpec) => void;
            'notify::content-box': (pspec: GObject.ParamSpec) => void;
            'notify::content-gravity': (pspec: GObject.ParamSpec) => void;
            'notify::content-repeat': (pspec: GObject.ParamSpec) => void;
            'notify::context': (pspec: GObject.ParamSpec) => void;
            'notify::effect': (pspec: GObject.ParamSpec) => void;
            'notify::first-child': (pspec: GObject.ParamSpec) => void;
            'notify::fixed-position-set': (pspec: GObject.ParamSpec) => void;
            'notify::fixed-x': (pspec: GObject.ParamSpec) => void;
            'notify::fixed-y': (pspec: GObject.ParamSpec) => void;
            'notify::has-clip': (pspec: GObject.ParamSpec) => void;
            'notify::has-pointer': (pspec: GObject.ParamSpec) => void;
            'notify::height': (pspec: GObject.ParamSpec) => void;
            'notify::last-child': (pspec: GObject.ParamSpec) => void;
            'notify::layout-manager': (pspec: GObject.ParamSpec) => void;
            'notify::magnification-filter': (pspec: GObject.ParamSpec) => void;
            'notify::mapped': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::min-height': (pspec: GObject.ParamSpec) => void;
            'notify::min-height-set': (pspec: GObject.ParamSpec) => void;
            'notify::min-width': (pspec: GObject.ParamSpec) => void;
            'notify::min-width-set': (pspec: GObject.ParamSpec) => void;
            'notify::minification-filter': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::natural-height': (pspec: GObject.ParamSpec) => void;
            'notify::natural-height-set': (pspec: GObject.ParamSpec) => void;
            'notify::natural-width': (pspec: GObject.ParamSpec) => void;
            'notify::natural-width-set': (pspec: GObject.ParamSpec) => void;
            'notify::offscreen-redirect': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::pivot-point': (pspec: GObject.ParamSpec) => void;
            'notify::pivot-point-z': (pspec: GObject.ParamSpec) => void;
            'notify::position': (pspec: GObject.ParamSpec) => void;
            'notify::reactive': (pspec: GObject.ParamSpec) => void;
            'notify::realized': (pspec: GObject.ParamSpec) => void;
            'notify::request-mode': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-angle-x': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-angle-y': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-angle-z': (pspec: GObject.ParamSpec) => void;
            'notify::scale-x': (pspec: GObject.ParamSpec) => void;
            'notify::scale-y': (pspec: GObject.ParamSpec) => void;
            'notify::scale-z': (pspec: GObject.ParamSpec) => void;
            'notify::show-on-set-parent': (pspec: GObject.ParamSpec) => void;
            'notify::size': (pspec: GObject.ParamSpec) => void;
            'notify::text-direction': (pspec: GObject.ParamSpec) => void;
            'notify::transform': (pspec: GObject.ParamSpec) => void;
            'notify::transform-set': (pspec: GObject.ParamSpec) => void;
            'notify::translation-x': (pspec: GObject.ParamSpec) => void;
            'notify::translation-y': (pspec: GObject.ParamSpec) => void;
            'notify::translation-z': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width': (pspec: GObject.ParamSpec) => void;
            'notify::x': (pspec: GObject.ParamSpec) => void;
            'notify::x-align': (pspec: GObject.ParamSpec) => void;
            'notify::x-expand': (pspec: GObject.ParamSpec) => void;
            'notify::y': (pspec: GObject.ParamSpec) => void;
            'notify::y-align': (pspec: GObject.ParamSpec) => void;
            'notify::y-expand': (pspec: GObject.ParamSpec) => void;
            'notify::z-position': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                Clutter.Stage.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Clutter.Animatable.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class Stage extends Clutter.Stage implements Atk.ImplementorIface, Clutter.Animatable {
        static $gtype: GObject.GType<Stage>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Stage.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Stage.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Stage.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Stage.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Stage.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Stage.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Stage.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Stage.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace StartupNotification {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             * @run-last
             */
            changed: (arg0: StartupSequence) => void;
            'notify::display': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            display: Display;
        }
    }

    /**
     * @gir-type Class
     */
    class StartupNotification extends GObject.Object {
        static $gtype: GObject.GType<StartupNotification>;

        // Properties

        /**
         * @construct-only
         */
        get display(): Display;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: StartupNotification.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<StartupNotification.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof StartupNotification.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StartupNotification.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof StartupNotification.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StartupNotification.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof StartupNotification.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<StartupNotification.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Creates an app launch context.
         * @returns a launch context.
         */
        create_launcher(): LaunchContext;
        /**
         * Get the list of startup sequences arrived in the startup notification object.
         * @returns a {@link GLib.SList} of {@link Meta.StartupSequence} in the {@link Meta.StartupNotification}.
         */
        get_sequences(): StartupSequence[];
    }

    namespace StartupSequence {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             * @run-last
             */
            complete: () => void;
            /**
             * @signal
             * @run-last
             */
            timeout: () => void;
            'notify::application-id': (pspec: GObject.ParamSpec) => void;
            'notify::display': (pspec: GObject.ParamSpec) => void;
            'notify::icon-name': (pspec: GObject.ParamSpec) => void;
            'notify::id': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::timestamp': (pspec: GObject.ParamSpec) => void;
            'notify::wmclass': (pspec: GObject.ParamSpec) => void;
            'notify::workspace': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            application_id: string;
            applicationId: string;
            display: Display;
            icon_name: string;
            iconName: string;
            id: string;
            name: string;
            timestamp: number;
            wmclass: string;
            workspace: number;
        }
    }

    /**
     * @gir-type Class
     */
    class StartupSequence extends GObject.Object {
        static $gtype: GObject.GType<StartupSequence>;

        // Properties

        /**
         * @construct-only
         */
        get application_id(): string;
        /**
         * @construct-only
         */
        get applicationId(): string;
        /**
         * @construct-only
         */
        get display(): Display;
        /**
         * @construct-only
         */
        get icon_name(): string;
        /**
         * @construct-only
         */
        get iconName(): string;
        /**
         * @construct-only
         */
        get id(): string;
        /**
         * @construct-only
         */
        get name(): string;
        /**
         * @construct-only
         */
        get timestamp(): number;
        /**
         * @construct-only
         */
        get wmclass(): string;
        /**
         * @construct-only
         */
        get workspace(): number;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: StartupSequence.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<StartupSequence.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof StartupSequence.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StartupSequence.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof StartupSequence.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StartupSequence.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof StartupSequence.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<StartupSequence.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        complete(): void;
        /**
         * Get the application id of the startup sequence.
         * @returns the application id or `null`.
         */
        get_application_id(): string | null;
        get_completed(): boolean;
        /**
         * Get the icon name of the startup sequence.
         * @returns the icon name or `null`.
         */
        get_icon_name(): string | null;
        get_id(): string;
        get_name(): string;
        get_timestamp(): number;
        /**
         * Get the wmclass of the startup sequence.
         * @returns the wmclass or `null`.
         */
        get_wmclass(): string | null;
        get_workspace(): number;
    }

    namespace WaylandClient {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             * @run-last
             */
            'client-destroyed': () => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * A class that allows to launch a trusted client and detect if an specific
     * Wayland window belongs to it.
     * @gir-type Class
     */
    class WaylandClient extends GObject.Object {
        static $gtype: GObject.GType<WaylandClient>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: WaylandClient.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<WaylandClient.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](context: Context, launcher: Gio.SubprocessLauncher): WaylandClient;

        // Signals

        /** @signal */
        connect<K extends keyof WaylandClient.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WaylandClient.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof WaylandClient.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WaylandClient.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof WaylandClient.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<WaylandClient.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @param window
         */
        hide_from_window_list(window: Window): void;
        /**
         * Mark window as DESKTOP window
         * @param window a MetaWindow
         */
        make_desktop(window: Window): void;
        /**
         * Mark window as DOCK window
         * @param window a MetaWindow
         */
        make_dock(window: Window): void;
        /**
         * @param window
         */
        owns_window(window: Window): boolean;
        /**
         * Shows again this window in window lists, like taskbars, pagers...
         * @param window a MetaWindow
         */
        show_in_window_list(window: Window): void;
        /**
         * Creates a {@link Gio.Subprocess} given a provided array of arguments, launching a new
         * process with the binary specified in the first element of argv, and with the
         * rest of elements as parameters. It also sets up a new Wayland socket and sets
         * the environment variable WAYLAND_SOCKET to make the new process to use it.
         * @param display the current MetaDisplay
         * @param argv Command line arguments
         * @returns A new {@link Gio.Subprocess}, or `null` on error (and `error` will be set)
         */
        spawnv(display: Display, argv: string[]): Gio.Subprocess;
    }

    namespace WaylandCompositor {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             * @run-last
             */
            'prepare-shutdown': () => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class WaylandCompositor extends GObject.Object {
        static $gtype: GObject.GType<WaylandCompositor>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: WaylandCompositor.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<WaylandCompositor.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof WaylandCompositor.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WaylandCompositor.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof WaylandCompositor.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WaylandCompositor.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof WaylandCompositor.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<WaylandCompositor.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @returns the Wayland display object
         */
        get_wayland_display(): any | null;
    }

    namespace WaylandSurface {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             * @run-last
             */
            'actor-changed': () => void;
            /**
             * @signal
             * @run-last
             */
            configure: () => void;
            /**
             * @signal
             * @run-last
             */
            destroy: () => void;
            /**
             * @signal
             * @run-last
             */
            'geometry-changed': () => void;
            /**
             * @signal
             * @run-last
             */
            'pre-state-applied': () => void;
            /**
             * @signal
             * @run-last
             */
            'shortcuts-inhibited': () => void;
            /**
             * @signal
             * @run-last
             */
            'shortcuts-restored': () => void;
            /**
             * @signal
             * @run-last
             */
            unmapped: () => void;
            'notify::window': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            window: Window;
        }
    }

    /**
     * @gir-type Class
     */
    class WaylandSurface extends GObject.Object {
        static $gtype: GObject.GType<WaylandSurface>;

        // Properties

        /**
         * @read-only
         */
        get window(): Window;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: WaylandSurface.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<WaylandSurface.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof WaylandSurface.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WaylandSurface.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof WaylandSurface.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WaylandSurface.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof WaylandSurface.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<WaylandSurface.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Get the {@link Meta.Window} associated with this wayland surface.
         * @returns a {@link Meta.Window}
         */
        get_window(): Window | null;
    }

    namespace Window {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             * @run-last
             */
            focus: () => void;
            /**
             * This is emitted when the monitor with the highest scale
             * intersecting the window changes.
             * @signal
             * @run-last
             */
            'highest-scale-monitor-changed': () => void;
            /**
             * This is emitted when the position of a window might
             * have changed.
             *
             * Specifically, this is emitted when the position of
             * the toplevel window has changed, or when the position
             * of the client window has changed.
             * @signal
             * @run-last
             */
            'position-changed': () => void;
            /**
             * @signal
             * @run-last
             */
            raised: () => void;
            /**
             * This is emitted after a window has been shown.
             * @signal
             * @run-last
             */
            shown: () => void;
            /**
             * This is emitted when the size of a window might
             * have changed.
             *
             * Specifically, this is emitted when the size of
             * the toplevel window has changed, or when the
             * size of the client window has changed.
             * @signal
             * @run-last
             */
            'size-changed': () => void;
            /**
             * @signal
             * @run-last
             */
            unmanaged: () => void;
            /**
             * @signal
             * @run-last
             */
            unmanaging: () => void;
            /**
             * @signal
             * @run-last
             */
            'workspace-changed': () => void;
            'notify::above': (pspec: GObject.ParamSpec) => void;
            'notify::appears-focused': (pspec: GObject.ParamSpec) => void;
            'notify::decorated': (pspec: GObject.ParamSpec) => void;
            'notify::demands-attention': (pspec: GObject.ParamSpec) => void;
            'notify::display': (pspec: GObject.ParamSpec) => void;
            'notify::effect': (pspec: GObject.ParamSpec) => void;
            'notify::fullscreen': (pspec: GObject.ParamSpec) => void;
            'notify::gtk-app-menu-object-path': (pspec: GObject.ParamSpec) => void;
            'notify::gtk-application-id': (pspec: GObject.ParamSpec) => void;
            'notify::gtk-application-object-path': (pspec: GObject.ParamSpec) => void;
            'notify::gtk-menubar-object-path': (pspec: GObject.ParamSpec) => void;
            'notify::gtk-unique-bus-name': (pspec: GObject.ParamSpec) => void;
            'notify::gtk-window-object-path': (pspec: GObject.ParamSpec) => void;
            'notify::is-alive': (pspec: GObject.ParamSpec) => void;
            'notify::mapped': (pspec: GObject.ParamSpec) => void;
            'notify::maximized-horizontally': (pspec: GObject.ParamSpec) => void;
            'notify::maximized-vertically': (pspec: GObject.ParamSpec) => void;
            'notify::minimized': (pspec: GObject.ParamSpec) => void;
            'notify::mutter-hints': (pspec: GObject.ParamSpec) => void;
            'notify::on-all-workspaces': (pspec: GObject.ParamSpec) => void;
            'notify::resizeable': (pspec: GObject.ParamSpec) => void;
            'notify::skip-taskbar': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
            'notify::urgent': (pspec: GObject.ParamSpec) => void;
            'notify::user-time': (pspec: GObject.ParamSpec) => void;
            'notify::window-type': (pspec: GObject.ParamSpec) => void;
            'notify::wm-class': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.Initable.ConstructorProps {
            above: boolean;
            appears_focused: boolean;
            appearsFocused: boolean;
            decorated: boolean;
            demands_attention: boolean;
            demandsAttention: boolean;
            display: Display;
            effect: number;
            fullscreen: boolean;
            gtk_app_menu_object_path: string;
            gtkAppMenuObjectPath: string;
            gtk_application_id: string;
            gtkApplicationId: string;
            gtk_application_object_path: string;
            gtkApplicationObjectPath: string;
            gtk_menubar_object_path: string;
            gtkMenubarObjectPath: string;
            gtk_unique_bus_name: string;
            gtkUniqueBusName: string;
            gtk_window_object_path: string;
            gtkWindowObjectPath: string;
            is_alive: boolean;
            isAlive: boolean;
            mapped: boolean;
            maximized_horizontally: boolean;
            maximizedHorizontally: boolean;
            maximized_vertically: boolean;
            maximizedVertically: boolean;
            minimized: boolean;
            mutter_hints: string;
            mutterHints: string;
            on_all_workspaces: boolean;
            onAllWorkspaces: boolean;
            resizeable: boolean;
            skip_taskbar: boolean;
            skipTaskbar: boolean;
            title: string;
            urgent: boolean;
            user_time: number;
            userTime: number;
            window_type: WindowType;
            windowType: WindowType;
            wm_class: string;
            wmClass: string;
        }
    }

    /**
     * A display-agnostic abstraction for a window.
     *
     * {@link Meta.Window} is the core abstraction in Mutter of a window. It has the
     * properties you'd expect, such as a title, whether it's fullscreen,
     * has decorations, etc.
     *
     * Since a lot of different kinds of windows exist, each window also a
     * {@link Meta.WindowType} which denotes which kind of window we're exactly dealing
     * with. For example, one expects slightly different behaviour from a dialog
     * than a "normal" window. The type of a window can be queried with
     * {@link Meta.Window.get_window_type}.
     *
     * Common API for windows include:
     *
     * - Minimizing: {@link Meta.Window.minimize} / {@link Meta.Window.unminimize}
     * - Maximizing: {@link Meta.Window.maximize} / {@link Meta.Window.unmaximize}
     * - Fullscreen: {@link Meta.Window.make_fullscreen} / {@link Meta.Window.unmake_fullscreen}
     *               / {@link Meta.Window.is_fullscreen}
     *
     * Each {@link Meta.Window} is part of either one or all {@link Meta.Workspace}s of the
     * desktop. You can activate a window on a certain workspace using
     * {@link Meta.Window.activate_with_workspace}, and query on which workspace it is
     * located using {@link Meta.Window.located_on_workspace}. The workspace it is part
     * of can be obtained using {@link Meta.Window.get_workspace}.
     *
     * Each display protocol should make a subclass to be compatible with that
     * protocols' specifics, for example `MetaWindowX11` and `MetaWindowWayland`.
     * This is independent of the protocol that the client uses, which is modeled
     * using the {@link Meta.WindowClientType} enum.
     *
     * To integrate within the Clutter scene graph, which deals with the actual
     * rendering, each {@link Meta.Window} will be part of a {@link Meta.WindowActor}.
     * @gir-type Class
     */
    abstract class Window extends GObject.Object implements Gio.Initable {
        static $gtype: GObject.GType<Window>;

        // Properties

        /**
         * @read-only
         */
        get above(): boolean;
        /**
         * @read-only
         */
        get appears_focused(): boolean;
        /**
         * @read-only
         */
        get appearsFocused(): boolean;
        /**
         * @read-only
         */
        get decorated(): boolean;
        /**
         * @read-only
         */
        get demands_attention(): boolean;
        /**
         * @read-only
         */
        get demandsAttention(): boolean;
        /**
         * @construct-only
         */
        get display(): Display;
        /**
         * @construct-only
         */
        get effect(): number;
        /**
         * @read-only
         */
        get fullscreen(): boolean;
        /**
         * @read-only
         */
        get gtk_app_menu_object_path(): string;
        /**
         * @read-only
         */
        get gtkAppMenuObjectPath(): string;
        /**
         * @read-only
         */
        get gtk_application_id(): string;
        /**
         * @read-only
         */
        get gtkApplicationId(): string;
        /**
         * @read-only
         */
        get gtk_application_object_path(): string;
        /**
         * @read-only
         */
        get gtkApplicationObjectPath(): string;
        /**
         * @read-only
         */
        get gtk_menubar_object_path(): string;
        /**
         * @read-only
         */
        get gtkMenubarObjectPath(): string;
        /**
         * @read-only
         */
        get gtk_unique_bus_name(): string;
        /**
         * @read-only
         */
        get gtkUniqueBusName(): string;
        /**
         * @read-only
         */
        get gtk_window_object_path(): string;
        /**
         * @read-only
         */
        get gtkWindowObjectPath(): string;
        /**
         * @read-only
         */
        get is_alive(): boolean;
        /**
         * @read-only
         */
        get isAlive(): boolean;
        /**
         * @read-only
         */
        get mapped(): boolean;
        /**
         * @read-only
         */
        get maximized_horizontally(): boolean;
        /**
         * @read-only
         */
        get maximizedHorizontally(): boolean;
        /**
         * @read-only
         */
        get maximized_vertically(): boolean;
        /**
         * @read-only
         */
        get maximizedVertically(): boolean;
        /**
         * @read-only
         */
        get minimized(): boolean;
        /**
         * @read-only
         */
        get mutter_hints(): string;
        /**
         * @read-only
         */
        get mutterHints(): string;
        /**
         * @read-only
         */
        get on_all_workspaces(): boolean;
        /**
         * @read-only
         */
        get onAllWorkspaces(): boolean;
        /**
         * @read-only
         */
        get resizeable(): boolean;
        /**
         * @read-only
         */
        get skip_taskbar(): boolean;
        /**
         * @read-only
         */
        get skipTaskbar(): boolean;
        /**
         * @read-only
         */
        get title(): string;
        /**
         * @read-only
         */
        get urgent(): boolean;
        /**
         * @read-only
         */
        get user_time(): number;
        /**
         * @read-only
         */
        get userTime(): number;
        /**
         * @read-only
         */
        get window_type(): WindowType;
        /**
         * @read-only
         */
        get windowType(): WindowType;
        /**
         * @read-only
         */
        get wm_class(): string;
        /**
         * @read-only
         */
        get wmClass(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Window.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Window.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Window.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Window.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Window.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Window.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Window.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Window.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @param current_time
         */
        activate(current_time: number): void;
        /**
         * @param current_time
         * @param workspace
         */
        activate_with_workspace(current_time: number, workspace: Workspace): void;
        allows_move(): boolean;
        allows_resize(): boolean;
        /**
         * @param op
         * @param device
         * @param sequence
         * @param timestamp
         * @param pos_hint
         */
        begin_grab_op(
            op: GrabOp | null,
            device: Clutter.InputDevice | null,
            sequence: Clutter.EventSequence | null,
            timestamp: number,
            pos_hint?: Graphene.Point | null,
        ): boolean;
        can_close(): boolean;
        can_maximize(): boolean;
        can_minimize(): boolean;
        /**
         * @param workspace
         */
        change_workspace(workspace: Workspace): void;
        /**
         * @param space_index
         * @param append
         */
        change_workspace_by_index(space_index: number, append: boolean): void;
        /**
         * @param timestamp
         */
        check_alive(timestamp: number): void;
        /**
         * Converts a desired bounds of the client window into the corresponding bounds
         * of the window frame (excluding invisible borders and client side shadows.)
         * @param client_rect client rectangle in root coordinates
         */
        client_rect_to_frame_rect(client_rect: Mtk.Rectangle): Mtk.Rectangle;
        /**
         * @param timestamp
         */
        ['delete'](timestamp: number): void;
        /**
         * Follow the chain of parents of `window`, skipping transient windows,
         * and return the "root" window which has no non-transient parent.
         * @returns The root ancestor window
         */
        find_root_ancestor(): Window;
        /**
         * @param timestamp
         */
        focus(timestamp: number): void;
        /**
         * If `window` is transient, call `func` with the window for which it's transient,
         * repeatedly until either we find a non-transient window, or `func` returns `false`.
         * @param func Called for each window which is a transient parent of `window`
         */
        foreach_ancestor(func: WindowForeachFunc): void;
        /**
         * Call `func` for every window which is either transient for `window`, or is
         * a transient of a window which is in turn transient for `window`.
         * The order of window enumeration is not defined.
         *
         * Iteration will stop if `func` at any point returns `false`.
         * @param func Called for each window which is a transient of `window` (transitively)
         */
        foreach_transient(func: WindowForeachFunc): void;
        /**
         * Converts a desired frame bounds for a window into the bounds of the client
         * window.
         * @param frame_rect desired frame bounds for the window
         */
        frame_rect_to_client_rect(frame_rect: Mtk.Rectangle): Mtk.Rectangle;
        /**
         * Gets the rectangle that the pixmap or buffer of `window` occupies.
         *
         * For X11 windows, this is the server-side geometry of the toplevel
         * window.
         *
         * For Wayland windows, this is the bounding rectangle of the attached
         * buffer.
         */
        get_buffer_rect(): Mtk.Rectangle;
        /**
         * Returns the {@link Meta.WindowClientType} of the window.
         * @returns The root ancestor window
         */
        get_client_type(): WindowClientType;
        /**
         * Gets the compositor's wrapper object for `window`.
         * @returns the wrapper object.
         */
        get_compositor_private<T = GObject.Object>(): T;
        get_description(): string;
        /**
         * @returns The display for `window`
         */
        get_display(): Display;
        /**
         * Gets the rectangle that bounds `window` that is what the user thinks of
         * as the edge of the window.
         *
         * This doesn't include any extra reactive area that we or the client
         * adds to the window, or any area that the client adds to draw a client-side shadow.
         */
        get_frame_rect(): Mtk.Rectangle;
        /**
         * Gets the type of window decorations that should be used for this window.
         * @returns the frame type
         */
        get_frame_type(): FrameType;
        /**
         * @returns the object path
         */
        get_gtk_app_menu_object_path(): string | null;
        /**
         * @returns the application ID
         */
        get_gtk_application_id(): string | null;
        /**
         * @returns the object path
         */
        get_gtk_application_object_path(): string | null;
        /**
         * @returns the object path
         */
        get_gtk_menubar_object_path(): string | null;
        /**
         * @returns the theme variant or `null`
         */
        get_gtk_theme_variant(): string | null;
        /**
         * @returns the unique name
         */
        get_gtk_unique_bus_name(): string | null;
        /**
         * @returns the object path
         */
        get_gtk_window_object_path(): string | null;
        /**
         * Gets the location of the icon corresponding to the window.
         *
         * The location will be provided set by the task bar or other user interface
         * element displaying the icon, and is relative to the root window.
         * @returns `true` if the icon geometry was successfully retrieved.
         */
        get_icon_geometry(): [boolean, Mtk.Rectangle];
        /**
         * Returns the window id associated with window.
         * @returns The window id
         */
        get_id(): number;
        get_layer(): StackLayer;
        /**
         * Gets the current maximization state of the window, as combination
         * of the {@link Meta.MaximizeFlags.HORIZONTAL} and {@link Meta.MaximizeFlags.VERTICAL} flags;
         * @returns current maximization state
         */
        get_maximized(): MaximizeFlags;
        /**
         * Gets index of the monitor that this window is on.
         * @returns The index of the monitor in the screens monitor list, or -1 if the window has been recently unmanaged and does not have a monitor.
         */
        get_monitor(): number;
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
         * @returns the _MUTTER_HINTS string, or `null` if no hints are set.
         */
        get_mutter_hints(): string | null;
        /**
         * Returns the pid of the process that created this window, if available
         * to the windowing system.
         *
         * Note that the value returned by this is vulnerable to spoofing attacks
         * by the client.
         * @returns the pid, or 0 if not known.
         */
        get_pid(): number;
        get_role(): string;
        /**
         * Gets an unique id for a sandboxed app (currently flatpaks and snaps are
         * supported).
         * @returns the sandboxed application ID or `null`
         */
        get_sandboxed_app_id(): string | null;
        /**
         * The stable sequence number is a monotonicially increasing
         * unique integer assigned to each {@link Meta.Window} upon creation.
         *
         * This number can be useful for sorting windows in a stable
         * fashion.
         * @returns Internal sequence number for this window
         */
        get_stable_sequence(): number;
        /**
         * Gets the startup id of the given {@link Meta.Window}
         * @returns the startup id
         */
        get_startup_id(): string | null;
        /**
         * Returns the matching tiled window on the same monitor as `window`. This is
         * the topmost tiled window in a complementary tile mode that is:
         *
         *  - on the same monitor;
         *  - on the same workspace;
         *  - spanning the remaining monitor width;
         *  - there is no 3rd window stacked between both tiled windows that's
         *    partially visible in the common edge.
         * @returns the matching tiled window or `null` if it doesn't exist.
         */
        get_tile_match(): Window | null;
        /**
         * @returns the current title of the window.
         */
        get_title(): string;
        /**
         * Returns the {@link Meta.Window} for the window that is pointed to by the
         * WM_TRANSIENT_FOR hint on this window (see XGetTransientForHint()
         * or XSetTransientForHint()). Mutter keeps transient windows above their
         * parents. A typical usage of this hint is for a dialog that wants to stay
         * above its associated window.
         * @returns the window this window is transient for, or `null` if the WM_TRANSIENT_FOR hint is unset or does not point to a toplevel window that Mutter knows about.
         */
        get_transient_for(): Window | null;
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
        get_user_time(): number;
        get_window_type(): WindowType;
        /**
         * Return the current value of the name part of `WM_CLASS` X property.
         * @returns the current value of the name part of `WM_CLASS` X property
         */
        get_wm_class(): string | null;
        /**
         * Return the current value of the instance part of `WM_CLASS` X property.
         * @returns the current value of the instance part of `WM_CLASS` X property.
         */
        get_wm_class_instance(): string | null;
        /**
         * Get the work area for all monitors for `window`.
         */
        get_work_area_all_monitors(): Mtk.Rectangle;
        /**
         * Get the work area for the monitor `window` is currently on.
         */
        get_work_area_current_monitor(): Mtk.Rectangle;
        /**
         * Get the work area for `window`, given the monitor index
         * `which_monitor`.
         * @param which_monitor a moniotr to get the work area for
         */
        get_work_area_for_monitor(which_monitor: number): Mtk.Rectangle;
        /**
         * Gets the {@link Meta.Workspace} that the window is currently displayed on.
         *
         * If the window is on all workspaces, returns the currently active
         * workspace.
         * @returns the {@link Meta.Workspace} for the window
         */
        get_workspace(): Workspace;
        /**
         * Tests if `window` has any transients attached to it.
         *
         * If the `attach_modal_dialogs` option is not enabled, this will
         * always return `false`.
         * @returns whether `window` has attached transients
         */
        has_attached_dialogs(): boolean;
        has_focus(): boolean;
        has_pointer(): boolean;
        is_above(): boolean;
        is_always_on_all_workspaces(): boolean;
        /**
         * The function determines whether `window` is an ancestor of `transient`; it does
         * so by traversing the `transient`'s ancestors until it either locates `window`
         * or reaches an ancestor that is not transient.
         * @param _transient a {@link Meta.Window}
         * @returns `true` if window is an ancestor of transient.
         */
        is_ancestor_of_transient(_transient: Window): boolean;
        /**
         * Tests if `window` should be attached to its parent window.
         *
         * If the `attach_modal_dialogs` option is not enabled, this will
         * always return `false`.
         * @returns whether `window` should be attached to its parent
         */
        is_attached_dialog(): boolean;
        /**
         * @returns `true` if the window is currently fullscreen
         */
        is_fullscreen(): boolean;
        is_hidden(): boolean;
        /**
         * @returns `true` if the window is occupies an entire monitor or               the whole screen.
         */
        is_monitor_sized(): boolean;
        is_on_all_workspaces(): boolean;
        /**
         * @returns `true` if the window is on the primary monitor
         */
        is_on_primary_monitor(): boolean;
        /**
         * @returns `true` if this window isn't managed by mutter; it will control its own positioning and mutter won't draw decorations among other things.  In X terminology this is "override redirect".
         */
        is_override_redirect(): boolean;
        /**
         * @returns `true` if this window originates from a host different from the one running mutter.
         */
        is_remote(): boolean;
        /**
         * @returns `true` if the window is occupies the               the whole screen (all monitors).
         */
        is_screen_sized(): boolean;
        /**
         * Gets whether this window should be ignored by task lists.
         * @returns `true` if the skip bar hint is set.
         */
        is_skip_taskbar(): boolean;
        kill(): void;
        /**
         * @param workspace a {@link Meta.Workspace}
         * @returns whether `window` is displayed on `workspace`, or whether it will be displayed on all workspaces.
         */
        located_on_workspace(workspace: Workspace): boolean;
        lower(): void;
        /**
         * @param timestamp
         */
        lower_with_transients(timestamp: number): void;
        make_above(): void;
        make_fullscreen(): void;
        /**
         * @param directions
         */
        maximize(directions: MaximizeFlags | null): void;
        minimize(): void;
        /**
         * Moves the window to the desired location on window's assigned
         * workspace, using the northwest edge of the frame as the reference,
         * instead of the actual window's origin, but only if a frame is present.
         *
         * Otherwise, acts identically to `meta_window_move()`.
         * @param user_op bool to indicate whether or not this is a user operation
         * @param root_x_nw desired x pos
         * @param root_y_nw desired y pos
         */
        move_frame(user_op: boolean, root_x_nw: number, root_y_nw: number): void;
        /**
         * Resizes the window so that its outer bounds (including frame)
         * fit within the given rect
         * @param user_op bool to indicate whether or not this is a user operation
         * @param root_x_nw new x
         * @param root_y_nw new y
         * @param w desired width
         * @param h desired height
         */
        move_resize_frame(user_op: boolean, root_x_nw: number, root_y_nw: number, w: number, h: number): void;
        /**
         * Moves the window to the monitor with index `monitor`, keeping
         * the relative position of the window's top left corner.
         * @param monitor desired monitor index
         */
        move_to_monitor(monitor: number): void;
        /**
         * Transform the coordinates from protocol coordinates to coordinates expected
         * by the stage and internal window management logic.
         * @param protocol_rect rectangle in protocol coordinate space
         */
        protocol_to_stage_rect(protocol_rect: Mtk.Rectangle): Mtk.Rectangle;
        raise(): void;
        /**
         * Raises a window and marks it as the most recently used window on the
         * workspace `target_workspace`. If the window exists on all workspaces, it will
         * become the most recently used sticky window on all other workspaces. This
         * ensures proper tracking among windows on all workspaces while not overriding
         * MRU for other windows.
         * @param workspace the {@link Meta.Workspace} to raise and make it most recent on
         */
        raise_and_make_recent_on_workspace(workspace: Workspace): void;
        /**
         * @param priv
         */
        set_compositor_private(priv: GObject.Object): void;
        set_demands_attention(): void;
        /**
         * Sets or unsets the location of the icon corresponding to the window.
         *
         * If set, the location should correspond to a dock, task bar or other user
         * interface element displaying the icon, and is relative to the root window.
         * @param rect rectangle with the desired geometry or `null`.
         */
        set_icon_geometry(rect?: Mtk.Rectangle | null): void;
        /**
         * @returns `true` if window would be visible, if its workspace was current
         */
        showing_on_its_workspace(): boolean;
        /**
         * Transform the coordinates from stage coordinates to protocol coordinates
         * @param stage_rect x {@link Mtk.Rectangle} in stage coordinate space
         */
        stage_to_protocol_rect(stage_rect: Mtk.Rectangle): Mtk.Rectangle;
        stick(): void;
        unmake_above(): void;
        unmake_fullscreen(): void;
        /**
         * @param directions
         */
        unmaximize(directions: MaximizeFlags | null): void;
        unminimize(): void;
        unset_demands_attention(): void;
        unstick(): void;
        /**
         * Initializes the object implementing the interface.
         *
         * This method is intended for language bindings. If writing in C,
         * `g_initable_new()` should typically be used instead.
         *
         * The object must be initialized before any real use after initial
         * construction, either with this function or `g_async_initable_init_async()`.
         *
         * Implementations may also support cancellation. If `cancellable` is not `null`,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null` and
         * the object doesn't support cancellable initialization the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         *
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except `g_object_ref()` and
         * `g_object_unref()` are considered to be invalid, and have undefined
         * behaviour. See the [description][iface@Gio.Initable#description] for more details.
         *
         * Callers should not assume that a class which implements {@link Gio.Initable} can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of `init()` can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all {@link Gio.Initable} implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         *
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         *
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * {@link GObject.ObjectClass}.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call `g_initable_init()`
         * on the result of `g_object_new()`, regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @returns `true` if successful. If an error has occurred, this function will     return `false` and set `error` appropriately if present.
         */
        init(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Initializes the object implementing the interface.
         *
         * This method is intended for language bindings. If writing in C,
         * `g_initable_new()` should typically be used instead.
         *
         * The object must be initialized before any real use after initial
         * construction, either with this function or `g_async_initable_init_async()`.
         *
         * Implementations may also support cancellation. If `cancellable` is not `null`,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null` and
         * the object doesn't support cancellable initialization the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         *
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except `g_object_ref()` and
         * `g_object_unref()` are considered to be invalid, and have undefined
         * behaviour. See the [description][iface@Gio.Initable#description] for more details.
         *
         * Callers should not assume that a class which implements {@link Gio.Initable} can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of `init()` can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all {@link Gio.Initable} implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         *
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         *
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * {@link GObject.ObjectClass}.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call `g_initable_init()`
         * on the result of `g_object_new()`, regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @virtual
         */
        vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace WindowActor {
        // Signal signatures
        interface SignalSignatures extends Clutter.Actor.SignalSignatures {
            /**
             * Notify that one or more of the surfaces of the window have been damaged.
             * @signal
             * @run-last
             */
            damaged: () => void;
            /**
             * The ::effects-completed signal will be emitted once all pending compositor
             * effects are completed.
             * @signal
             * @run-last
             */
            'effects-completed': () => void;
            /**
             * The ::first-frame signal will be emitted the first time a frame
             * of window contents has been drawn by the application and Mutter
             * has had the chance to drawn that frame to the screen. If the
             * window starts off initially hidden, obscured, or on on a
             * different workspace, the ::first-frame signal will be emitted
             * even though the user doesn't see the contents.
             *
             * MetaDisplay::window-created is a good place to connect to this
             * signal - at that point, the MetaWindowActor for the window
             * exists, but the window has reliably not yet been drawn.
             * Connecting to an existing window that has already been drawn to
             * the screen is not useful.
             * @signal
             * @run-last
             */
            'first-frame': () => void;
            /**
             * @signal
             * @run-last
             */
            thawed: () => void;
            'notify::meta-window': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-name': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-role': (pspec: GObject.ParamSpec) => void;
            'notify::actions': (pspec: GObject.ParamSpec) => void;
            'notify::allocation': (pspec: GObject.ParamSpec) => void;
            'notify::background-color': (pspec: GObject.ParamSpec) => void;
            'notify::background-color-set': (pspec: GObject.ParamSpec) => void;
            'notify::child-transform': (pspec: GObject.ParamSpec) => void;
            'notify::child-transform-set': (pspec: GObject.ParamSpec) => void;
            'notify::clip-rect': (pspec: GObject.ParamSpec) => void;
            'notify::clip-to-allocation': (pspec: GObject.ParamSpec) => void;
            'notify::color-state': (pspec: GObject.ParamSpec) => void;
            'notify::constraints': (pspec: GObject.ParamSpec) => void;
            'notify::content': (pspec: GObject.ParamSpec) => void;
            'notify::content-box': (pspec: GObject.ParamSpec) => void;
            'notify::content-gravity': (pspec: GObject.ParamSpec) => void;
            'notify::content-repeat': (pspec: GObject.ParamSpec) => void;
            'notify::context': (pspec: GObject.ParamSpec) => void;
            'notify::effect': (pspec: GObject.ParamSpec) => void;
            'notify::first-child': (pspec: GObject.ParamSpec) => void;
            'notify::fixed-position-set': (pspec: GObject.ParamSpec) => void;
            'notify::fixed-x': (pspec: GObject.ParamSpec) => void;
            'notify::fixed-y': (pspec: GObject.ParamSpec) => void;
            'notify::has-clip': (pspec: GObject.ParamSpec) => void;
            'notify::has-pointer': (pspec: GObject.ParamSpec) => void;
            'notify::height': (pspec: GObject.ParamSpec) => void;
            'notify::last-child': (pspec: GObject.ParamSpec) => void;
            'notify::layout-manager': (pspec: GObject.ParamSpec) => void;
            'notify::magnification-filter': (pspec: GObject.ParamSpec) => void;
            'notify::mapped': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::min-height': (pspec: GObject.ParamSpec) => void;
            'notify::min-height-set': (pspec: GObject.ParamSpec) => void;
            'notify::min-width': (pspec: GObject.ParamSpec) => void;
            'notify::min-width-set': (pspec: GObject.ParamSpec) => void;
            'notify::minification-filter': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::natural-height': (pspec: GObject.ParamSpec) => void;
            'notify::natural-height-set': (pspec: GObject.ParamSpec) => void;
            'notify::natural-width': (pspec: GObject.ParamSpec) => void;
            'notify::natural-width-set': (pspec: GObject.ParamSpec) => void;
            'notify::offscreen-redirect': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::pivot-point': (pspec: GObject.ParamSpec) => void;
            'notify::pivot-point-z': (pspec: GObject.ParamSpec) => void;
            'notify::position': (pspec: GObject.ParamSpec) => void;
            'notify::reactive': (pspec: GObject.ParamSpec) => void;
            'notify::realized': (pspec: GObject.ParamSpec) => void;
            'notify::request-mode': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-angle-x': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-angle-y': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-angle-z': (pspec: GObject.ParamSpec) => void;
            'notify::scale-x': (pspec: GObject.ParamSpec) => void;
            'notify::scale-y': (pspec: GObject.ParamSpec) => void;
            'notify::scale-z': (pspec: GObject.ParamSpec) => void;
            'notify::show-on-set-parent': (pspec: GObject.ParamSpec) => void;
            'notify::size': (pspec: GObject.ParamSpec) => void;
            'notify::text-direction': (pspec: GObject.ParamSpec) => void;
            'notify::transform': (pspec: GObject.ParamSpec) => void;
            'notify::transform-set': (pspec: GObject.ParamSpec) => void;
            'notify::translation-x': (pspec: GObject.ParamSpec) => void;
            'notify::translation-y': (pspec: GObject.ParamSpec) => void;
            'notify::translation-z': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width': (pspec: GObject.ParamSpec) => void;
            'notify::x': (pspec: GObject.ParamSpec) => void;
            'notify::x-align': (pspec: GObject.ParamSpec) => void;
            'notify::x-expand': (pspec: GObject.ParamSpec) => void;
            'notify::y': (pspec: GObject.ParamSpec) => void;
            'notify::y-align': (pspec: GObject.ParamSpec) => void;
            'notify::y-expand': (pspec: GObject.ParamSpec) => void;
            'notify::z-position': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                Clutter.Actor.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Clutter.Animatable.ConstructorProps {
            meta_window: Window;
            metaWindow: Window;
        }
    }

    /**
     * An actor representing a top-level window in the scene graph
     *
     * {@link Meta.WindowActor} is a {@link Clutter.Actor} that adds a notion of a window to the
     * Clutter scene graph. It contains a {@link Meta.Window} which provides the windowing
     * API, and the {@link Meta.Compositor} that handles it.  For the actual content of the
     * window, it contains a `MetaSurfaceActor`.
     *
     * {@link Meta.WindowActor} takes care of the rendering features you need for your
     * window. For example, it will take the windows' requested opacity and use
     * that for `clutter_actor_set_opacity()`. Furthermore, it will also draw a
     * shadow around the window (using `MetaShadow`) and deal with synchronization
     * between events of the window and the actual render loop. See
     * MetaWindowActor::first-frame for an example of the latter.
     * @gir-type Class
     */
    abstract class WindowActor extends Clutter.Actor implements Atk.ImplementorIface, Clutter.Animatable {
        static $gtype: GObject.GType<WindowActor>;

        // Properties

        /**
         * @construct-only
         */
        get meta_window(): Window;
        /**
         * @construct-only
         */
        get metaWindow(): Window;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: WindowActor.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<WindowActor.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof WindowActor.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WindowActor.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof WindowActor.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WindowActor.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof WindowActor.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<WindowActor.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Freezes the {@link Meta.WindowActor}, which inhibits updates and geometry
         * changes of the window. This property is refcounted, so make sure
         * to call `meta_window_actor_thaw()` the exact same amount of times
         * as this function to allow updates again.
         */
        freeze(): void;
        /**
         * Flattens the layers of `self` into one ARGB32 image by alpha blending
         * the images, and returns the flattened image.
         * @param clip A clipping rectangle, to help prevent extra processing. In the case that the clipping rectangle is partially or fully outside the bounds of the actor, the rectangle will be clipped.
         * @returns a new cairo surface to be freed with `cairo_surface_destroy()`.
         */
        get_image(clip?: Mtk.Rectangle | null): cairo.Surface | null;
        /**
         * Gets the {@link Meta.Window} object that the the {@link Meta.WindowActor} is displaying
         * @returns the displayed {@link Meta.Window}
         */
        get_meta_window(): Window | null;
        /**
         * Gets the ClutterActor that is used to display the contents of the window,
         * or NULL if no texture is shown yet, because the window is not mapped.
         * @returns the {@link Clutter.Actor} for the contents
         */
        get_texture(): ShapedTexture | null;
        /**
         * Gets whether the X window that the actor was displaying has been destroyed
         * @returns `true` when the window is destroyed, otherwise `false`
         */
        is_destroyed(): boolean;
        /**
         * @param clip A clipping rectangle, in actor coordinates, to help prevent extra processing. In the case that the clipping rectangle is partially or fully outside the bounds of the actor, the rectangle will be clipped.
         * @returns a new {@link Clutter.Content}
         */
        paint_to_content(clip?: Mtk.Rectangle | null): Clutter.Content | null;
        sync_visibility(): void;
        /**
         * Thaws/unfreezes the {@link Meta.WindowActor} to allow updates and geometry
         * changes after a window was frozen using `meta_window_actor_freeze()`.
         */
        thaw(): void;
        /**
         * Finds the {@link GObject.ParamSpec} for `property_name`
         * @param property_name the name of the animatable property to find
         * @returns The {@link GObject.ParamSpec} for the given property   or `null`
         */
        find_property(property_name: string): GObject.ParamSpec;
        /**
         * Get animated actor.
         * @returns a {@link Clutter.Actor}
         */
        get_actor(): Clutter.Actor;
        /**
         * Retrieves the current state of `property_name` and sets `value` with it
         * @param property_name the name of the animatable property to retrieve
         * @param value a {@link GObject.Value} initialized to the type of the property to retrieve
         */
        get_initial_state(property_name: string, value: GObject.Value | any): void;
        /**
         * Asks a {@link Clutter.Animatable} implementation to interpolate a
         * a named property between the initial and final values of
         * a {@link Clutter.Interval}, using `progress` as the interpolation
         * value, and store the result inside `value`.
         *
         * This function should be used for every property animation
         * involving {@link Clutter.Animatable}s.
         * @param property_name the name of the property to interpolate
         * @param interval a {@link Clutter.Interval} with the animation range
         * @param progress the progress to use to interpolate between the   initial and final values of the `interval`
         * @returns `true` if the interpolation was successful,   and `false` otherwise
         */
        interpolate_value(property_name: string, interval: Clutter.Interval, progress: number): [boolean, unknown];
        /**
         * Sets the current state of `property_name` to `value`
         * @param property_name the name of the animatable property to set
         * @param value the value of the animatable property to set
         */
        set_final_state(property_name: string, value: GObject.Value | any): void;
        /**
         * Finds the {@link GObject.ParamSpec} for `property_name`
         * @param property_name the name of the animatable property to find
         * @virtual
         */
        vfunc_find_property(property_name: string): GObject.ParamSpec;
        /**
         * Get animated actor.
         * @virtual
         */
        vfunc_get_actor(): Clutter.Actor;
        /**
         * Retrieves the current state of `property_name` and sets `value` with it
         * @param property_name the name of the animatable property to retrieve
         * @param value a {@link GObject.Value} initialized to the type of the property to retrieve
         * @virtual
         */
        vfunc_get_initial_state(property_name: string, value: GObject.Value | any): void;
        /**
         * Asks a {@link Clutter.Animatable} implementation to interpolate a
         * a named property between the initial and final values of
         * a {@link Clutter.Interval}, using `progress` as the interpolation
         * value, and store the result inside `value`.
         *
         * This function should be used for every property animation
         * involving {@link Clutter.Animatable}s.
         * @param property_name the name of the property to interpolate
         * @param interval a {@link Clutter.Interval} with the animation range
         * @param progress the progress to use to interpolate between the   initial and final values of the `interval`
         * @virtual
         */
        vfunc_interpolate_value(
            property_name: string,
            interval: Clutter.Interval,
            progress: number,
        ): [boolean, unknown];
        /**
         * Sets the current state of `property_name` to `value`
         * @param property_name the name of the animatable property to set
         * @param value the value of the animatable property to set
         * @virtual
         */
        vfunc_set_final_state(property_name: string, value: GObject.Value | any): void;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace WindowGroup {
        // Signal signatures
        interface SignalSignatures extends Clutter.Actor.SignalSignatures {
            'notify::accessible-name': (pspec: GObject.ParamSpec) => void;
            'notify::accessible-role': (pspec: GObject.ParamSpec) => void;
            'notify::actions': (pspec: GObject.ParamSpec) => void;
            'notify::allocation': (pspec: GObject.ParamSpec) => void;
            'notify::background-color': (pspec: GObject.ParamSpec) => void;
            'notify::background-color-set': (pspec: GObject.ParamSpec) => void;
            'notify::child-transform': (pspec: GObject.ParamSpec) => void;
            'notify::child-transform-set': (pspec: GObject.ParamSpec) => void;
            'notify::clip-rect': (pspec: GObject.ParamSpec) => void;
            'notify::clip-to-allocation': (pspec: GObject.ParamSpec) => void;
            'notify::color-state': (pspec: GObject.ParamSpec) => void;
            'notify::constraints': (pspec: GObject.ParamSpec) => void;
            'notify::content': (pspec: GObject.ParamSpec) => void;
            'notify::content-box': (pspec: GObject.ParamSpec) => void;
            'notify::content-gravity': (pspec: GObject.ParamSpec) => void;
            'notify::content-repeat': (pspec: GObject.ParamSpec) => void;
            'notify::context': (pspec: GObject.ParamSpec) => void;
            'notify::effect': (pspec: GObject.ParamSpec) => void;
            'notify::first-child': (pspec: GObject.ParamSpec) => void;
            'notify::fixed-position-set': (pspec: GObject.ParamSpec) => void;
            'notify::fixed-x': (pspec: GObject.ParamSpec) => void;
            'notify::fixed-y': (pspec: GObject.ParamSpec) => void;
            'notify::has-clip': (pspec: GObject.ParamSpec) => void;
            'notify::has-pointer': (pspec: GObject.ParamSpec) => void;
            'notify::height': (pspec: GObject.ParamSpec) => void;
            'notify::last-child': (pspec: GObject.ParamSpec) => void;
            'notify::layout-manager': (pspec: GObject.ParamSpec) => void;
            'notify::magnification-filter': (pspec: GObject.ParamSpec) => void;
            'notify::mapped': (pspec: GObject.ParamSpec) => void;
            'notify::margin-bottom': (pspec: GObject.ParamSpec) => void;
            'notify::margin-left': (pspec: GObject.ParamSpec) => void;
            'notify::margin-right': (pspec: GObject.ParamSpec) => void;
            'notify::margin-top': (pspec: GObject.ParamSpec) => void;
            'notify::min-height': (pspec: GObject.ParamSpec) => void;
            'notify::min-height-set': (pspec: GObject.ParamSpec) => void;
            'notify::min-width': (pspec: GObject.ParamSpec) => void;
            'notify::min-width-set': (pspec: GObject.ParamSpec) => void;
            'notify::minification-filter': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::natural-height': (pspec: GObject.ParamSpec) => void;
            'notify::natural-height-set': (pspec: GObject.ParamSpec) => void;
            'notify::natural-width': (pspec: GObject.ParamSpec) => void;
            'notify::natural-width-set': (pspec: GObject.ParamSpec) => void;
            'notify::offscreen-redirect': (pspec: GObject.ParamSpec) => void;
            'notify::opacity': (pspec: GObject.ParamSpec) => void;
            'notify::pivot-point': (pspec: GObject.ParamSpec) => void;
            'notify::pivot-point-z': (pspec: GObject.ParamSpec) => void;
            'notify::position': (pspec: GObject.ParamSpec) => void;
            'notify::reactive': (pspec: GObject.ParamSpec) => void;
            'notify::realized': (pspec: GObject.ParamSpec) => void;
            'notify::request-mode': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-angle-x': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-angle-y': (pspec: GObject.ParamSpec) => void;
            'notify::rotation-angle-z': (pspec: GObject.ParamSpec) => void;
            'notify::scale-x': (pspec: GObject.ParamSpec) => void;
            'notify::scale-y': (pspec: GObject.ParamSpec) => void;
            'notify::scale-z': (pspec: GObject.ParamSpec) => void;
            'notify::show-on-set-parent': (pspec: GObject.ParamSpec) => void;
            'notify::size': (pspec: GObject.ParamSpec) => void;
            'notify::text-direction': (pspec: GObject.ParamSpec) => void;
            'notify::transform': (pspec: GObject.ParamSpec) => void;
            'notify::transform-set': (pspec: GObject.ParamSpec) => void;
            'notify::translation-x': (pspec: GObject.ParamSpec) => void;
            'notify::translation-y': (pspec: GObject.ParamSpec) => void;
            'notify::translation-z': (pspec: GObject.ParamSpec) => void;
            'notify::visible': (pspec: GObject.ParamSpec) => void;
            'notify::width': (pspec: GObject.ParamSpec) => void;
            'notify::x': (pspec: GObject.ParamSpec) => void;
            'notify::x-align': (pspec: GObject.ParamSpec) => void;
            'notify::x-expand': (pspec: GObject.ParamSpec) => void;
            'notify::y': (pspec: GObject.ParamSpec) => void;
            'notify::y-align': (pspec: GObject.ParamSpec) => void;
            'notify::y-expand': (pspec: GObject.ParamSpec) => void;
            'notify::z-position': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                Clutter.Actor.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Clutter.Animatable.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class WindowGroup extends Clutter.Actor implements Atk.ImplementorIface, Clutter.Animatable {
        static $gtype: GObject.GType<WindowGroup>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: WindowGroup.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<WindowGroup.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof WindowGroup.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WindowGroup.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof WindowGroup.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WindowGroup.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof WindowGroup.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<WindowGroup.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
        /**
         * Finds the {@link GObject.ParamSpec} for `property_name`
         * @param property_name the name of the animatable property to find
         * @returns The {@link GObject.ParamSpec} for the given property   or `null`
         */
        find_property(property_name: string): GObject.ParamSpec;
        /**
         * Get animated actor.
         * @returns a {@link Clutter.Actor}
         */
        get_actor(): Clutter.Actor;
        /**
         * Retrieves the current state of `property_name` and sets `value` with it
         * @param property_name the name of the animatable property to retrieve
         * @param value a {@link GObject.Value} initialized to the type of the property to retrieve
         */
        get_initial_state(property_name: string, value: GObject.Value | any): void;
        /**
         * Asks a {@link Clutter.Animatable} implementation to interpolate a
         * a named property between the initial and final values of
         * a {@link Clutter.Interval}, using `progress` as the interpolation
         * value, and store the result inside `value`.
         *
         * This function should be used for every property animation
         * involving {@link Clutter.Animatable}s.
         * @param property_name the name of the property to interpolate
         * @param interval a {@link Clutter.Interval} with the animation range
         * @param progress the progress to use to interpolate between the   initial and final values of the `interval`
         * @returns `true` if the interpolation was successful,   and `false` otherwise
         */
        interpolate_value(property_name: string, interval: Clutter.Interval, progress: number): [boolean, unknown];
        /**
         * Sets the current state of `property_name` to `value`
         * @param property_name the name of the animatable property to set
         * @param value the value of the animatable property to set
         */
        set_final_state(property_name: string, value: GObject.Value | any): void;
        /**
         * Finds the {@link GObject.ParamSpec} for `property_name`
         * @param property_name the name of the animatable property to find
         * @virtual
         */
        vfunc_find_property(property_name: string): GObject.ParamSpec;
        /**
         * Get animated actor.
         * @virtual
         */
        vfunc_get_actor(): Clutter.Actor;
        /**
         * Retrieves the current state of `property_name` and sets `value` with it
         * @param property_name the name of the animatable property to retrieve
         * @param value a {@link GObject.Value} initialized to the type of the property to retrieve
         * @virtual
         */
        vfunc_get_initial_state(property_name: string, value: GObject.Value | any): void;
        /**
         * Asks a {@link Clutter.Animatable} implementation to interpolate a
         * a named property between the initial and final values of
         * a {@link Clutter.Interval}, using `progress` as the interpolation
         * value, and store the result inside `value`.
         *
         * This function should be used for every property animation
         * involving {@link Clutter.Animatable}s.
         * @param property_name the name of the property to interpolate
         * @param interval a {@link Clutter.Interval} with the animation range
         * @param progress the progress to use to interpolate between the   initial and final values of the `interval`
         * @virtual
         */
        vfunc_interpolate_value(
            property_name: string,
            interval: Clutter.Interval,
            progress: number,
        ): [boolean, unknown];
        /**
         * Sets the current state of `property_name` to `value`
         * @param property_name the name of the animatable property to set
         * @param value the value of the animatable property to set
         * @virtual
         */
        vfunc_set_final_state(property_name: string, value: GObject.Value | any): void;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace Workspace {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             * @run-last
             */
            'window-added': (arg0: Window) => void;
            /**
             * @signal
             * @run-last
             */
            'window-removed': (arg0: Window) => void;
            'notify::active': (pspec: GObject.ParamSpec) => void;
            'notify::n-windows': (pspec: GObject.ParamSpec) => void;
            'notify::workspace-index': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            active: boolean;
            n_windows: number;
            nWindows: number;
            workspace_index: number;
            workspaceIndex: number;
        }
    }

    /**
     * Workspaces
     *
     * A workspace is a set of windows which all live on the same
     * screen.  (You may also see the name "desktop" around the place,
     * which is the EWMH's name for the same thing.)  Only one workspace
     * of a screen may be active at once; all windows on all other workspaces
     * are unmapped.
     * @gir-type Class
     */
    class Workspace extends GObject.Object {
        static $gtype: GObject.GType<Workspace>;

        // Properties

        /**
         * @read-only
         */
        get active(): boolean;
        /**
         * @read-only
         */
        get n_windows(): number;
        /**
         * @read-only
         */
        get nWindows(): number;
        /**
         * @read-only
         */
        get workspace_index(): number;
        /**
         * @read-only
         */
        get workspaceIndex(): number;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Workspace.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Workspace.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Workspace.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Workspace.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Workspace.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Workspace.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Workspace.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Workspace.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @param timestamp
         */
        activate(timestamp: number): void;
        /**
         * Switches to `workspace` and possibly activates the window `focus_this`.
         *
         * The window `focus_this` is activated by calling `meta_window_activate()`
         * which will unminimize it and transient parents, raise it and give it
         * the focus.
         *
         * If a window is currently being moved by the user, it will be
         * moved to `workspace`.
         *
         * The advantage of calling this function instead of `meta_workspace_activate()`
         * followed by `meta_window_activate()` is that it happens as a unit, so
         * no other window gets focused first before `focus_this`.
         * @param focus_this the {@link Meta.Window} to be focused, or `null`
         * @param timestamp timestamp for `focus_this`
         */
        activate_with_focus(focus_this: Window, timestamp: number): void;
        /**
         * Gets the {@link Meta.Display} that the workspace is part of.
         * @returns the {@link Meta.Display} for the workspace
         */
        get_display(): Display;
        /**
         * Calculate and retrieve the workspace that is next to `workspace`,
         * according to `direction` and the current workspace layout, as set
         * by `meta_screen_override_workspace_layout()`.
         * @param direction a {@link Meta.MotionDirection}, relative to `workspace`
         * @returns the workspace next to `workspace`, or   `workspace` itself if the neighbor would be outside the layout
         */
        get_neighbor(direction: MotionDirection | null): Workspace;
        /**
         * Stores the work area in `area`.
         */
        get_work_area_all_monitors(): Mtk.Rectangle;
        /**
         * Stores the work area for `which_monitor` on `workspace`
         * in `area`.
         * @param which_monitor a monitor index
         */
        get_work_area_for_monitor(which_monitor: number): Mtk.Rectangle;
        index(): number;
        /**
         * Gets windows contained on the workspace, including workspace->windows
         * and also sticky windows. Override-redirect windows are not included.
         * @returns the list of windows.
         */
        list_windows(): Window[];
        /**
         * Sets a list of struts that will be used in addition to the struts
         * of the windows in the workspace when computing the work area of
         * the workspace.
         * @param struts list of {@link Meta.Strut}
         */
        set_builtin_struts(struts: Strut[]): void;
    }

    namespace WorkspaceManager {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             * @run-last
             */
            'active-workspace-changed': () => void;
            /**
             * @signal
             * @run-last
             */
            'showing-desktop-changed': () => void;
            /**
             * @signal
             * @run-last
             */
            'workspace-added': (arg0: number) => void;
            /**
             * @signal
             * @run-last
             */
            'workspace-removed': (arg0: number) => void;
            /**
             * @signal
             * @run-last
             */
            'workspace-switched': (arg0: number, arg1: number, arg2: MotionDirection) => void;
            /**
             * @signal
             * @run-last
             */
            'workspaces-reordered': () => void;
            'notify::layout-columns': (pspec: GObject.ParamSpec) => void;
            'notify::layout-rows': (pspec: GObject.ParamSpec) => void;
            'notify::n-workspaces': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            layout_columns: number;
            layoutColumns: number;
            layout_rows: number;
            layoutRows: number;
            n_workspaces: number;
            nWorkspaces: number;
        }
    }

    /**
     * @gir-type Class
     */
    class WorkspaceManager extends GObject.Object {
        static $gtype: GObject.GType<WorkspaceManager>;

        // Properties

        /**
         * @read-only
         */
        get layout_columns(): number;
        /**
         * @read-only
         */
        get layoutColumns(): number;
        /**
         * @read-only
         */
        get layout_rows(): number;
        /**
         * @read-only
         */
        get layoutRows(): number;
        /**
         * @read-only
         */
        get n_workspaces(): number;
        /**
         * @read-only
         */
        get nWorkspaces(): number;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: WorkspaceManager.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<WorkspaceManager.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof WorkspaceManager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WorkspaceManager.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof WorkspaceManager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WorkspaceManager.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof WorkspaceManager.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<WorkspaceManager.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Append a new workspace to the workspace manager and (optionally) switch to that
         * display.
         * @param activate `true` if the workspace should be switched to after creation
         * @param timestamp if switching to a new workspace, timestamp to be used when   focusing a window on the new workspace. (Doesn't hurt to pass a valid   timestamp when available even if not switching workspaces.)
         * @returns the newly appended workspace.
         */
        append_new_workspace(activate: boolean, timestamp: number): Workspace;
        /**
         * @returns The current workspace
         */
        get_active_workspace(): Workspace;
        get_active_workspace_index(): number;
        get_layout_columns(): number;
        get_layout_rows(): number;
        get_n_workspaces(): number;
        /**
         * Gets the workspace object for one of a workspace manager's workspaces given the workspace
         * index. It's valid to call this function with an out-of-range index and it
         * will robustly return `null`.
         * @param index index of one of the display's workspaces
         * @returns the workspace object with specified   index, or `null` if the index is out of range.
         */
        get_workspace_by_index(index: number): Workspace | null;
        /**
         * Explicitly set the layout of workspaces. Once this has been called, the contents of the
         * _NET_DESKTOP_LAYOUT property on the root window are completely ignored.
         * @param starting_corner the corner at which the first workspace is found
         * @param vertical_layout if `true` the workspaces are laid out in columns rather than rows
         * @param n_rows number of rows of workspaces, or -1 to determine the number of rows from   `n_columns` and the total number of workspaces
         * @param n_columns number of columns of workspaces, or -1 to determine the number of columns from   `n_rows` and the total number of workspaces
         */
        override_workspace_layout(
            starting_corner: DisplayCorner | null,
            vertical_layout: boolean,
            n_rows: number,
            n_columns: number,
        ): void;
        /**
         * @param workspace
         * @param timestamp
         */
        remove_workspace(workspace: Workspace, timestamp: number): void;
        /**
         * Reorder a workspace to a new index. If the workspace is currently active
         * the "active-workspace-changed" signal will be emitted.
         * If the workspace's index is the same as `new_index` or the workspace
         * will not be found in the list, this function will return.
         *
         * Calling this function will also emit the "workspaces-reordered" signal.
         * @param workspace a {@link Meta.Workspace} to reorder
         * @param new_index the new index of the passed workspace
         */
        reorder_workspace(workspace: Workspace, new_index: number): void;
    }

    namespace X11Display {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * Mutter X display handler
     *
     * The X11 display is represented as a {@link Meta.X11Display} struct.
     * @gir-type Class
     */
    class X11Display extends GObject.Object {
        static $gtype: GObject.GType<X11Display>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: X11Display.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<X11Display.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof X11Display.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, X11Display.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof X11Display.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, X11Display.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof X11Display.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<X11Display.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @param window
         */
        lookup_xwindow(window: Window): xlib.Window;
        /**
         * @param display
         */
        redirect_windows(display: Display): void;
    }

    /**
     * @gir-type Alias
     */
    type BackendClass = typeof Backend;
    /**
     * @gir-type Alias
     */
    type BackgroundActorClass = typeof BackgroundActor;
    /**
     * @gir-type Alias
     */
    type BackgroundClass = typeof Background;
    /**
     * @gir-type Alias
     */
    type BackgroundContentClass = typeof BackgroundContent;
    /**
     * @gir-type Alias
     */
    type BackgroundGroupClass = typeof BackgroundGroup;
    /**
     * @gir-type Alias
     */
    type BackgroundImageCacheClass = typeof BackgroundImageCache;
    /**
     * @gir-type Alias
     */
    type BackgroundImageClass = typeof BackgroundImage;
    /**
     * @gir-type Alias
     */
    type BarrierClass = typeof Barrier;
    /**
     * @gir-type Struct
     */
    class BarrierEvent {
        static $gtype: GObject.GType<BarrierEvent>;

        // Fields

        event_id: number;
        dt: number;
        time: number;
        x: number;
        y: number;
        dx: number;
        dy: number;
        released: boolean;
        grabbed: boolean;

        // Constructors

        constructor(
            properties?: Partial<{
                event_id: number;
                dt: number;
                time: number;
                x: number;
                y: number;
                dx: number;
                dy: number;
                released: boolean;
                grabbed: boolean;
            }>,
        );
    }

    /**
     * @gir-type Struct
     */
    class ButtonLayout {
        static $gtype: GObject.GType<ButtonLayout>;

        // Fields

        left_buttons: ButtonFunction[];
        left_buttons_has_spacer: boolean[];
        right_buttons: ButtonFunction[];
        right_buttons_has_spacer: boolean[];
    }

    /**
     * @gir-type Alias
     */
    type CloseDialogInterface = typeof CloseDialog;
    /**
     * @gir-type Alias
     */
    type CompositorClass = typeof Compositor;
    /**
     * @gir-type Alias
     */
    type ContextClass = typeof Context;
    /**
     * @gir-type Alias
     */
    type CursorTrackerClass = typeof CursorTracker;
    /**
     * @gir-type Alias
     */
    type DebugControlClass = typeof DebugControl;
    /**
     * @gir-type Alias
     */
    type DisplayClass = typeof Display;
    /**
     * @gir-type Alias
     */
    type DndClass = typeof Dnd;
    /**
     * @gir-type Struct
     */
    class Edge {
        static $gtype: GObject.GType<Edge>;

        // Fields

        rect: Mtk.Rectangle;
        side_type: Side;
        edge_type: EdgeType;
    }

    /**
     * @gir-type Struct
     */
    class FrameBorder {
        static $gtype: GObject.GType<FrameBorder>;

        // Fields

        left: number;
        right: number;
        top: number;
        bottom: number;

        // Constructors

        constructor(
            properties?: Partial<{
                left: number;
                right: number;
                top: number;
                bottom: number;
            }>,
        );
    }

    /**
     * @gir-type Struct
     */
    class FrameBorders {
        static $gtype: GObject.GType<FrameBorders>;

        // Fields

        visible: FrameBorder;
        invisible: FrameBorder;
        total: FrameBorder;

        // Constructors

        constructor(
            properties?: Partial<{
                visible: FrameBorder;
                invisible: FrameBorder;
                total: FrameBorder;
            }>,
        );

        // Methods

        clear(): void;
    }

    /**
     * @gir-type Alias
     */
    type IdleMonitorClass = typeof IdleMonitor;
    /**
     * @gir-type Alias
     */
    type InhibitShortcutsDialogInterface = typeof InhibitShortcutsDialog;
    /**
     * @gir-type Struct
     */
    abstract class KeyBinding {
        static $gtype: GObject.GType<KeyBinding>;

        // Methods

        get_mask(): number;
        get_modifiers(): Clutter.ModifierType;
        get_name(): string;
        is_builtin(): boolean;
        is_reversed(): boolean;
    }

    /**
     * @gir-type Alias
     */
    type LatersClass = typeof Laters;
    /**
     * @gir-type Alias
     */
    type LaunchContextClass = typeof LaunchContext;
    /**
     * @gir-type Alias
     */
    type MonitorManagerClass = typeof MonitorManager;
    /**
     * @gir-type Alias
     */
    type MultiTextureClass = typeof MultiTexture;
    /**
     * @gir-type Alias
     */
    type OrientationManagerClass = typeof OrientationManager;
    /**
     * @gir-type Alias
     */
    type PluginClass = typeof Plugin;
    /**
     * @gir-type Struct
     */
    class PluginInfo {
        static $gtype: GObject.GType<PluginInfo>;

        // Fields

        name: string;
        version: string;
        author: string;
        license: string;
        description: string;

        // Constructors

        constructor(
            properties?: Partial<{
                name: string;
                version: string;
                author: string;
                license: string;
                description: string;
            }>,
        );
    }

    /**
     * @gir-type Alias
     */
    type RemoteAccessControllerClass = typeof RemoteAccessController;
    /**
     * @gir-type Alias
     */
    type RemoteAccessHandleClass = typeof RemoteAccessHandle;
    /**
     * @gir-type Alias
     */
    type SelectionClass = typeof Selection;
    /**
     * @gir-type Alias
     */
    type SelectionSourceClass = typeof SelectionSource;
    /**
     * @gir-type Alias
     */
    type SelectionSourceMemoryClass = typeof SelectionSourceMemory;
    /**
     * @gir-type Struct
     */
    abstract class Settings {
        static $gtype: GObject.GType<Settings>;

        // Methods

        get_font_dpi(): number;
        get_ui_scaling_factor(): number;
    }

    /**
     * @gir-type Alias
     */
    type ShapedTextureClass = typeof ShapedTexture;
    /**
     * @gir-type Alias
     */
    type SoundPlayerClass = typeof SoundPlayer;
    /**
     * @gir-type Alias
     */
    type StageClass = typeof Stage;
    /**
     * @gir-type Alias
     */
    type StartupNotificationClass = typeof StartupNotification;
    /**
     * @gir-type Alias
     */
    type StartupSequenceClass = typeof StartupSequence;
    /**
     * @gir-type Struct
     */
    class Strut {
        static $gtype: GObject.GType<Strut>;

        // Fields

        rect: Mtk.Rectangle;
        side: Side;
    }

    /**
     * @gir-type Alias
     */
    type WaylandClientClass = typeof WaylandClient;
    /**
     * @gir-type Alias
     */
    type WaylandCompositorClass = typeof WaylandCompositor;
    /**
     * @gir-type Alias
     */
    type WaylandSurfaceClass = typeof WaylandSurface;
    /**
     * @gir-type Alias
     */
    type WindowActorClass = typeof WindowActor;
    /**
     * @gir-type Alias
     */
    type WindowClass = typeof Window;
    /**
     * @gir-type Alias
     */
    type WindowGroupClass = typeof WindowGroup;
    /**
     * @gir-type Alias
     */
    type WorkspaceClass = typeof Workspace;
    /**
     * @gir-type Alias
     */
    type WorkspaceManagerClass = typeof WorkspaceManager;
    /**
     * @gir-type Alias
     */
    type X11DisplayClass = typeof X11Display;
    namespace CloseDialog {
        /**
         * Interface for implementing CloseDialog.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Call whenever `dialog` should receive keyboard focus,
             * usually when the window would.
             * @virtual
             */
            vfunc_focus(): void;
            /**
             * Hides the close dialog.
             * @virtual
             */
            vfunc_hide(): void;
            /**
             * Shows the close dialog.
             * @virtual
             */
            vfunc_show(): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            window: Window;
        }
    }

    export interface CloseDialogNamespace {
        $gtype: GObject.GType<CloseDialog>;
        prototype: CloseDialog;
    }
    /**
     * @gir-type Interface
     */
    interface CloseDialog extends GObject.Object, CloseDialog.Interface {
        // Properties

        /**
         * @construct-only
         */
        get window(): Window;

        // Methods

        /**
         * Call whenever `dialog` should receive keyboard focus,
         * usually when the window would.
         */
        focus(): void;
        /**
         * Hides the close dialog.
         */
        hide(): void;
        /**
         * Returns whether `dialog` is currently visible.
         * @returns `TRUE` if `dialog` is visible.
         */
        is_visible(): boolean;
        /**
         * Responds and closes the dialog. To be called by {@link Meta.CloseDialog}
         * implementations.
         * @param response a {@link Meta.CloseDialogResponse}
         */
        response(response: CloseDialogResponse | null): void;
        /**
         * Shows the close dialog.
         */
        show(): void;
    }

    export const CloseDialog: CloseDialogNamespace & {
        new (): CloseDialog; // This allows `obj instanceof CloseDialog`
    };

    namespace InhibitShortcutsDialog {
        /**
         * Interface for implementing InhibitShortcutsDialog.
         * Contains only the virtual methods that need to be implemented.
         */
        interface Interface {
            // Virtual methods

            /**
             * Hides the inhibit shortcuts dialog.
             * @virtual
             */
            vfunc_hide(): void;
            /**
             * Shows the inhibit shortcuts dialog.
             * @virtual
             */
            vfunc_show(): void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            window: Window;
        }
    }

    export interface InhibitShortcutsDialogNamespace {
        $gtype: GObject.GType<InhibitShortcutsDialog>;
        prototype: InhibitShortcutsDialog;
    }
    /**
     * @gir-type Interface
     */
    interface InhibitShortcutsDialog extends GObject.Object, InhibitShortcutsDialog.Interface {
        // Properties

        /**
         * @construct-only
         */
        get window(): Window;

        // Methods

        /**
         * Hides the inhibit shortcuts dialog.
         */
        hide(): void;
        /**
         * Responds and closes the dialog. To be called by {@link Meta.InhibitShortcutsDialog}
         * implementations.
         * @param response a {@link Meta.InhibitShortcutsDialogResponse}
         */
        response(response: InhibitShortcutsDialogResponse | null): void;
        /**
         * Shows the inhibit shortcuts dialog.
         */
        show(): void;
    }

    export const InhibitShortcutsDialog: InhibitShortcutsDialogNamespace & {
        new (): InhibitShortcutsDialog; // This allows `obj instanceof InhibitShortcutsDialog`
    };

    /**
     * Name of the imported GIR library
     * `see` https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
     */
    const __name__: string;
    /**
     * Version of the imported GIR library
     * `see` https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
     */
    const __version__: string;
}

export default Meta;

// END
