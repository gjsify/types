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
import type Gtk from '@girs/gtk-3.0';
import type Gdk from '@girs/gdk-3.0';
import type cairo from 'cairo';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type Atk from '@girs/atk-1.0';
import type GDesktopEnums from '@girs/gdesktopenums-3.0';
import type CoglPango from '@girs/coglpango-10';
import type PangoCairo from '@girs/pangocairo-1.0';
import type Cogl from '@girs/cogl-10';
import type Graphene from '@girs/graphene-1.0';
import type GL from '@girs/gl-1.0';
import type Clutter from '@girs/clutter-10';
import type Json from '@girs/json-1.0';

export namespace Meta {
    /**
     * Meta-10
     */

    /**
     * Function a window button can have.  Note, you can't add stuff here
     * without extending the theme format to draw a new function and
     * breaking all existing themes.
     */

    /**
     * Function a window button can have.  Note, you can't add stuff here
     * without extending the theme format to draw a new function and
     * breaking all existing themes.
     */
    export namespace ButtonFunction {
        export const $gtype: GObject.GType<ButtonFunction>;
    }

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
         * Marks the end of the #MetaButtonFunction enumeration
         */
        LAST,
    }

    export namespace CloseDialogResponse {
        export const $gtype: GObject.GType<CloseDialogResponse>;
    }

    enum CloseDialogResponse {
        WAIT,
        FORCE_CLOSE,
    }
    /**
     * Indicates the appropriate effect to show the user for
     * meta_compositor_show_window() and meta_compositor_hide_window()
     */

    /**
     * Indicates the appropriate effect to show the user for
     * meta_compositor_show_window() and meta_compositor_hide_window()
     */
    export namespace CompEffect {
        export const $gtype: GObject.GType<CompEffect>;
    }

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

    export namespace CompositorType {
        export const $gtype: GObject.GType<CompositorType>;
    }

    enum CompositorType {
        WAYLAND,
        X11,
    }

    export namespace Cursor {
        export const $gtype: GObject.GType<Cursor>;
    }

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

    export namespace DisplayCorner {
        export const $gtype: GObject.GType<DisplayCorner>;
    }

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

    export namespace DisplayDirection {
        export const $gtype: GObject.GType<DisplayDirection>;
    }

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

    export namespace EdgeType {
        export const $gtype: GObject.GType<EdgeType>;
    }

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

    export namespace ExitCode {
        export const $gtype: GObject.GType<ExitCode>;
    }

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

    export namespace FrameType {
        export const $gtype: GObject.GType<FrameType>;
    }

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
         * Marks the end of the #MetaFrameType enumeration
         */
        LAST,
    }

    export namespace GrabOp {
        export const $gtype: GObject.GType<GrabOp>;
    }

    enum GrabOp {
        /**
         * None
         */
        NONE,
        WINDOW_BASE,
        WAYLAND_POPUP,
        FRAME_BUTTON,
        /**
         * Moving with pointer
         */
        MOVING,
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

    export namespace Gravity {
        export const $gtype: GObject.GType<Gravity>;
    }

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

    export namespace InhibitShortcutsDialogResponse {
        export const $gtype: GObject.GType<InhibitShortcutsDialogResponse>;
    }

    enum InhibitShortcutsDialogResponse {
        ALLOW,
        DENY,
    }

    export namespace KeyBindingAction {
        export const $gtype: GObject.GType<KeyBindingAction>;
    }

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

    export namespace LaterType {
        export const $gtype: GObject.GType<LaterType>;
    }

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

    export namespace LocaleDirection {
        export const $gtype: GObject.GType<LocaleDirection>;
    }

    enum LocaleDirection {
        LTR,
        RTL,
    }

    export namespace MonitorSwitchConfigType {
        export const $gtype: GObject.GType<MonitorSwitchConfigType>;
    }

    enum MonitorSwitchConfigType {
        ALL_MIRROR,
        ALL_LINEAR,
        EXTERNAL,
        BUILTIN,
        UNKNOWN,
    }

    export namespace MotionDirection {
        export const $gtype: GObject.GType<MotionDirection>;
    }

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

    export namespace PadActionType {
        export const $gtype: GObject.GType<PadActionType>;
    }

    enum PadActionType {
        BUTTON,
        RING,
        STRIP,
    }

    export namespace Preference {
        export const $gtype: GObject.GType<Preference>;
    }

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

    export namespace SelectionType {
        export const $gtype: GObject.GType<SelectionType>;
    }

    enum SelectionType {
        SELECTION_PRIMARY,
        SELECTION_CLIPBOARD,
        SELECTION_DND,
        N_SELECTION_TYPES,
    }

    export namespace ShadowMode {
        export const $gtype: GObject.GType<ShadowMode>;
    }

    enum ShadowMode {
        AUTO,
        FORCED_OFF,
        FORCED_ON,
    }

    export namespace Side {
        export const $gtype: GObject.GType<Side>;
    }

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

    export namespace SizeChange {
        export const $gtype: GObject.GType<SizeChange>;
    }

    enum SizeChange {
        MAXIMIZE,
        UNMAXIMIZE,
        FULLSCREEN,
        UNFULLSCREEN,
    }
    /**
     * Layers a window can be in.
     * These MUST be in the order of stacking.
     */

    /**
     * Layers a window can be in.
     * These MUST be in the order of stacking.
     */
    export namespace StackLayer {
        export const $gtype: GObject.GType<StackLayer>;
    }

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
         * Marks the end of the #MetaStackLayer enumeration
         */
        LAST,
    }

    export namespace TabList {
        export const $gtype: GObject.GType<TabList>;
    }

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

    export namespace TabShowType {
        export const $gtype: GObject.GType<TabShowType>;
    }

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

    export namespace WindowClientType {
        export const $gtype: GObject.GType<WindowClientType>;
    }

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
     * Menu the compositor should display for a given window
     */

    /**
     * Menu the compositor should display for a given window
     */
    export namespace WindowMenuType {
        export const $gtype: GObject.GType<WindowMenuType>;
    }

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

    export namespace WindowType {
        export const $gtype: GObject.GType<WindowType>;
    }

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
    const DEFAULT_ICON_NAME: string;
    const ICON_HEIGHT: number;
    const ICON_WIDTH: number;
    const MINI_ICON_HEIGHT: number;
    const MINI_ICON_WIDTH: number;
    const PRIORITY_BEFORE_REDRAW: number;
    const PRIORITY_PREFS_NOTIFY: number;
    const PRIORITY_REDRAW: number;
    const PRIORITY_RESIZE: number;
    const VIRTUAL_CORE_KEYBOARD_ID: number;
    const VIRTUAL_CORE_POINTER_ID: number;
    function add_clutter_debug_flags(
        debug_flags: Clutter.DebugFlag | null,
        draw_flags: Clutter.DrawDebugFlag | null,
        pick_flags: Clutter.PickDebugFlag | null,
    ): void;
    function add_debug_paint_flag(flag: DebugPaintFlag | null): void;
    /**
     * Ensure log messages for the given topic `topic`
     * will be printed.
     * @param topic Topic for which logging will be started
     */
    function add_verbose_topic(topic: DebugTopic | null): void;
    function clutter_init(): void;
    /**
     * Create a context.
     * @param name Human readable name of display server or window manager
     * @returns A new context instance.
     */
    function create_context(name: string): Context;
    /**
     * Disables unredirection, can be useful in situations where having
     * unredirected windows is undesirable like when recording a video.
     * @param display a #MetaDisplay
     */
    function disable_unredirect_for_display(display: Display): void;
    /**
     * Enables unredirection which reduces the overhead for apps like games.
     * @param display a #MetaDisplay
     */
    function enable_unredirect_for_display(display: Display): void;
    function exit(code: ExitCode | null): void;
    function external_binding_name_for_action(keybinding_action: number): string;
    function focus_stage_window(display: Display, timestamp: number): void;
    /**
     * Converts a frame type enum value to the name string that would
     * appear in the theme definition file.
     * @param type a #MetaFrameType
     * @returns the string value
     */
    function frame_type_to_string(type: FrameType | null): string;
    function g_utf8_strndup(src: string, n: number): string;
    /**
     * Accessor for the singleton MetaBackend.
     * @returns The only #MetaBackend there is.
     */
    function get_backend(): Backend;
    function get_clutter_debug_flags(): [
        Clutter.DebugFlag | null,
        Clutter.DrawDebugFlag | null,
        Clutter.PickDebugFlag | null,
    ];
    function get_debug_paint_flags(): DebugPaintFlag;
    function get_feedback_group_for_display(display: Display): Clutter.Actor;
    function get_locale_direction(): LocaleDirection;
    function get_stage_for_display(display: Display): Clutter.Actor;
    function get_top_window_group_for_display(display: Display): Clutter.Actor;
    function get_window_actors(display: Display): Clutter.Actor[];
    function get_window_group_for_display(display: Display): Clutter.Actor;
    function gravity_to_string(gravity: Gravity | null): string;
    /**
     * Returns %TRUE if this instance of Mutter comes from Mutter
     * restarting itself (for example to enable/disable stereo.)
     * See meta_restart(). If this is the case, any startup visuals
     * or animations should be suppressed.
     */
    function is_restart(): boolean;
    /**
     * Returns whether X synchronisation is currently enabled.
     *
     * FIXME: This is *only* called by meta_display_open(), but by that time
     * we have already turned syncing on or off on startup, and we don't
     * have any way to do so while Mutter is running, so it's rather
     * pointless.
     * @returns %TRUE if we must wait for events whenever we send X requests; %FALSE otherwise.
     */
    function is_syncing(): boolean;
    function is_topic_enabled(topic: DebugTopic | null): boolean;
    function is_verbose(): boolean;
    function is_wayland_compositor(): boolean;
    /**
     * Allows users to register a custom handler for a
     * builtin key binding.
     * @param name The name of the keybinding to set
     * @param handler The new handler function
     * @returns %TRUE if the binding known as @name was found, %FALSE otherwise.
     */
    function keybindings_set_custom_handler(name: string, handler?: KeyHandlerFunc | null): boolean;
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
    function later_add(when: LaterType | null, func: GLib.SourceFunc): number;
    /**
     * Removes a callback added with meta_later_add()
     * @param later_id the integer ID returned from meta_later_add()
     */
    function later_remove(later_id: number): void;
    function pop_no_msg_prefix(): void;
    function preference_to_string(pref: Preference | null): string;
    function prefs_bell_is_audible(): boolean;
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
    function prefs_get_keybinding_action(name: string): KeyBindingAction;
    function prefs_get_mouse_button_menu(): number;
    function prefs_get_mouse_button_mods(): VirtualModifier;
    function prefs_get_mouse_button_resize(): number;
    function prefs_get_num_workspaces(): number;
    function prefs_get_raise_on_click(): boolean;
    function prefs_get_show_fallback_app_menu(): boolean;
    function prefs_get_titlebar_font(): Pango.FontDescription;
    function prefs_get_visual_bell(): boolean;
    function prefs_get_visual_bell_type(): GDesktopEnums.VisualBellType;
    function prefs_get_workspace_name(i: number): string;
    function prefs_get_workspaces_only_on_primary(): boolean;
    function prefs_set_force_fullscreen(whether: boolean): void;
    function prefs_set_num_workspaces(n_workspaces: number): void;
    function prefs_set_show_fallback_app_menu(whether: boolean): void;
    function push_no_msg_prefix(): void;
    function rect(x: number, y: number, width: number, height: number): Rectangle;
    function remove_clutter_debug_flags(
        debug_flags: Clutter.DebugFlag | null,
        draw_flags: Clutter.DrawDebugFlag | null,
        pick_flags: Clutter.PickDebugFlag | null,
    ): void;
    function remove_debug_paint_flag(flag: DebugPaintFlag | null): void;
    /**
     * Stop printing log messages for the given topic `topic`.  Note
     * that this method does not stack with meta_add_verbose_topic();
     * i.e. if two calls to meta_add_verbose_topic() for the same
     * topic are made, one call to meta_remove_verbose_topic() will
     * remove it.
     * @param topic Topic for which logging will be stopped
     */
    function remove_verbose_topic(topic: DebugTopic | null): void;
    /**
     * Starts the process of restarting the compositor. Note that Mutter's
     * involvement here is to make the restart visually smooth for the
     * user - it cannot itself safely reexec a program that embeds libmuttter.
     * So in order for this to work, the compositor must handle two
     * signals -  MetaDisplay::show-restart-message, to display the
     * message passed here on the Clutter stage, and ::restart to actually
     * reexec the compositor.
     * @param message message to display to the user, or %NULL
     */
    function restart(message?: string | null): void;
    function topic_to_string(topic: DebugTopic | null): string;
    function unsigned_long_equal(v1?: any | null, v2?: any | null): number;
    function unsigned_long_hash(v?: any | null): number;
    function x11_error_trap_pop(x11_display: X11Display): void;
    function x11_error_trap_pop_with_return(x11_display: X11Display): number;
    function x11_error_trap_push(x11_display: X11Display): void;
    function x11_init_gdk_display(): boolean;
    interface IdleMonitorWatchFunc {
        (monitor: IdleMonitor, watch_id: number): void;
    }
    interface KeyHandlerFunc {
        (display: Display, window: Window, event: any | null, binding: KeyBinding): void;
    }
    interface PrefsChangedFunc {
        (pref: Preference): void;
    }
    interface WindowForeachFunc {
        (window: Window): boolean;
    }

    export namespace BarrierDirection {
        export const $gtype: GObject.GType<BarrierDirection>;
    }

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

    export namespace DebugPaintFlag {
        export const $gtype: GObject.GType<DebugPaintFlag>;
    }

    enum DebugPaintFlag {
        /**
         * default
         */
        NONE,
        /**
         * paint opaque regions
         */
        OPAQUE_REGION,
    }

    export namespace DebugTopic {
        export const $gtype: GObject.GType<DebugTopic>;
    }

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
    }

    export namespace Direction {
        export const $gtype: GObject.GType<Direction>;
    }

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

    export namespace FrameFlags {
        export const $gtype: GObject.GType<FrameFlags>;
    }

    enum FrameFlags {
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
         * frame is shaded
         */
        SHADED,
        /**
         * frame is stuck
         */
        STUCK,
        /**
         * frame is maximized
         */
        MAXIMIZED,
        /**
         * frame allows shade
         */
        ALLOWS_SHADE,
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

    export namespace KeyBindingFlags {
        export const $gtype: GObject.GType<KeyBindingFlags>;
    }

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
        IGNORE_AUTOREPEAT,
        /**
         * not grabbed automatically
         */
        NO_AUTO_GRAB,
    }

    export namespace MaximizeFlags {
        export const $gtype: GObject.GType<MaximizeFlags>;
    }

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

    export namespace VirtualModifier {
        export const $gtype: GObject.GType<VirtualModifier>;
    }

    enum VirtualModifier {
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
    namespace Backend {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'gpu-added': (arg0: unknown) => void;
            'keymap-changed': () => void;
            'keymap-layout-group-changed': (arg0: number) => void;
            'last-device-changed': (arg0: Clutter.InputDevice) => void;
            'lid-is-closed-changed': (arg0: boolean) => void;
            'prepare-shutdown': () => void;
            'notify::context': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, Gio.Initable.ConstructorProps {
            context: Context;
        }
    }

    abstract class Backend extends GObject.Object implements Gio.Initable {
        static $gtype: GObject.GType<Backend>;

        // Properties

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

        connect<K extends keyof Backend.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Backend.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Backend.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Backend.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Backend.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Backend.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        get_context(): Context;
        get_core_idle_monitor(): IdleMonitor;
        /**
         * Gets the global #MetaDnd that's managed by this backend.
         * @returns the #MetaDnd
         */
        get_dnd(): Dnd;
        get_monitor_manager(): MonitorManager;
        get_remote_access_controller(): RemoteAccessController;
        /**
         * Gets the global #ClutterStage that's managed by this backend.
         * @returns the #ClutterStage
         */
        get_stage(): Clutter.Actor;
        is_headless(): boolean;
        is_rendering_hardware_accelerated(): boolean;
        lock_layout_group(idx: number): void;
        set_keymap(layouts: string, variants: string, options: string): void;

        // Inherited methods
        /**
         * Initializes the object implementing the interface.
         *
         * This method is intended for language bindings. If writing in C,
         * g_initable_new() should typically be used instead.
         *
         * The object must be initialized before any real use after initial
         * construction, either with this function or g_async_initable_init_async().
         *
         * Implementations may also support cancellation. If `cancellable` is not %NULL,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL and
         * the object doesn't support cancellable initialization the error
         * %G_IO_ERROR_NOT_SUPPORTED will be returned.
         *
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except g_object_ref() and
         * g_object_unref() are considered to be invalid, and have undefined
         * behaviour. See the [description][iface`Gio`.Initable#description] for more details.
         *
         * Callers should not assume that a class which implements #GInitable can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of init() can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all #GInitable implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         *
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         *
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * #GObjectClass.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call g_initable_init()
         * on the result of g_object_new(), regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
         * @returns %TRUE if successful. If an error has occurred, this function will     return %FALSE and set @error appropriately if present.
         */
        init(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Initializes the object implementing the interface.
         *
         * This method is intended for language bindings. If writing in C,
         * g_initable_new() should typically be used instead.
         *
         * The object must be initialized before any real use after initial
         * construction, either with this function or g_async_initable_init_async().
         *
         * Implementations may also support cancellation. If `cancellable` is not %NULL,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * %G_IO_ERROR_CANCELLED will be returned. If `cancellable` is not %NULL and
         * the object doesn't support cancellable initialization the error
         * %G_IO_ERROR_NOT_SUPPORTED will be returned.
         *
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except g_object_ref() and
         * g_object_unref() are considered to be invalid, and have undefined
         * behaviour. See the [description][iface`Gio`.Initable#description] for more details.
         *
         * Callers should not assume that a class which implements #GInitable can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of init() can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all #GInitable implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         *
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         *
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * #GObjectClass.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call g_initable_init()
         * on the result of g_object_new(), regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional #GCancellable object, %NULL to ignore.
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
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
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
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
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
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
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
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
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
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
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
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
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
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
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
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
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
     * By integrating with #MetaWindowGroup we can avoid painting parts of
     * the background that are obscured by other windows.
     */
    class Background extends GObject.Object {
        static $gtype: GObject.GType<Background>;

        // Properties

        get meta_display(): Display;
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

        connect<K extends keyof Background.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Background.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Background.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Background.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Background.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Background.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static refresh_all(): void;

        // Methods

        set_blend(
            file1: Gio.File,
            file2: Gio.File,
            blend_factor: number,
            style: GDesktopEnums.BackgroundStyle | null,
        ): void;
        set_color(color: Clutter.Color): void;
        /**
         * Set the background to `file`
         * @param file a #GFile representing the background file
         * @param style the background style to apply
         */
        set_file(file: Gio.File | null, style: GDesktopEnums.BackgroundStyle | null): void;
        set_gradient(
            shading_direction: GDesktopEnums.BackgroundShading | null,
            color: Clutter.Color,
            second_color: Clutter.Color,
        ): void;
    }

    namespace BackgroundActor {
        // Signal signatures
        interface SignalSignatures extends Clutter.Actor.SignalSignatures {
            'notify::meta-display': (pspec: GObject.ParamSpec) => void;
            'notify::monitor': (pspec: GObject.ParamSpec) => void;
            'notify::actions': (pspec: GObject.ParamSpec) => void;
            'notify::allocation': (pspec: GObject.ParamSpec) => void;
            'notify::background-color': (pspec: GObject.ParamSpec) => void;
            'notify::background-color-set': (pspec: GObject.ParamSpec) => void;
            'notify::child-transform': (pspec: GObject.ParamSpec) => void;
            'notify::child-transform-set': (pspec: GObject.ParamSpec) => void;
            'notify::clip-rect': (pspec: GObject.ParamSpec) => void;
            'notify::clip-to-allocation': (pspec: GObject.ParamSpec) => void;
            'notify::constraints': (pspec: GObject.ParamSpec) => void;
            'notify::content': (pspec: GObject.ParamSpec) => void;
            'notify::content-box': (pspec: GObject.ParamSpec) => void;
            'notify::content-gravity': (pspec: GObject.ParamSpec) => void;
            'notify::content-repeat': (pspec: GObject.ParamSpec) => void;
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
            extends Clutter.Actor.ConstructorProps<Clutter.LayoutManager, BackgroundContent>,
                Atk.ImplementorIface.ConstructorProps,
                Clutter.Animatable.ConstructorProps,
                Clutter.Container.ConstructorProps,
                Clutter.Scriptable.ConstructorProps {
            meta_display: Display;
            metaDisplay: Display;
            monitor: number;
        }
    }

    /**
     * This class handles tracking and painting the root window background.
     * By integrating with #MetaWindowGroup we can avoid painting parts of
     * the background that are obscured by other windows.
     */
    class BackgroundActor
        extends Clutter.Actor<Clutter.LayoutManager, BackgroundContent>
        implements Atk.ImplementorIface, Clutter.Animatable, Clutter.Container, Clutter.Scriptable
    {
        static $gtype: GObject.GType<BackgroundActor>;

        // Properties

        get meta_display(): Display;
        get metaDisplay(): Display;
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

        connect<K extends keyof BackgroundActor.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BackgroundActor.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof BackgroundActor.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BackgroundActor.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof BackgroundActor.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<BackgroundActor.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Inherited methods
        /**
         * Finds the #GParamSpec for `property_name`
         * @param property_name the name of the animatable property to find
         * @returns The #GParamSpec for the given property   or %NULL
         */
        find_property(property_name: string): GObject.ParamSpec;
        /**
         * Get animated actor.
         * @returns a #ClutterActor
         */
        get_actor(): Clutter.Actor;
        /**
         * Retrieves the current state of `property_name` and sets `value` with it
         * @param property_name the name of the animatable property to retrieve
         * @param value a #GValue initialized to the type of the property to retrieve
         */
        get_initial_state(property_name: string, value: GObject.Value | any): void;
        /**
         * Asks a #ClutterAnimatable implementation to interpolate a
         * a named property between the initial and final values of
         * a #ClutterInterval, using `progress` as the interpolation
         * value, and store the result inside `value`.
         *
         * This function should be used for every property animation
         * involving #ClutterAnimatable<!-- -->s.
         *
         * This function replaces clutter_animatable_animate_property().
         * @param property_name the name of the property to interpolate
         * @param interval a #ClutterInterval with the animation range
         * @param progress the progress to use to interpolate between the   initial and final values of the @interval
         * @returns %TRUE if the interpolation was successful,   and %FALSE otherwise
         */
        interpolate_value(property_name: string, interval: Clutter.Interval, progress: number): [boolean, unknown];
        /**
         * Sets the current state of `property_name` to `value`
         * @param property_name the name of the animatable property to set
         * @param value the value of the animatable property to set
         */
        set_final_state(property_name: string, value: GObject.Value | any): void;
        /**
         * Finds the #GParamSpec for `property_name`
         * @param property_name the name of the animatable property to find
         */
        vfunc_find_property(property_name: string): GObject.ParamSpec;
        /**
         * Get animated actor.
         */
        vfunc_get_actor(): Clutter.Actor;
        /**
         * Retrieves the current state of `property_name` and sets `value` with it
         * @param property_name the name of the animatable property to retrieve
         * @param value a #GValue initialized to the type of the property to retrieve
         */
        vfunc_get_initial_state(property_name: string, value: GObject.Value | any): void;
        /**
         * Asks a #ClutterAnimatable implementation to interpolate a
         * a named property between the initial and final values of
         * a #ClutterInterval, using `progress` as the interpolation
         * value, and store the result inside `value`.
         *
         * This function should be used for every property animation
         * involving #ClutterAnimatable<!-- -->s.
         *
         * This function replaces clutter_animatable_animate_property().
         * @param property_name the name of the property to interpolate
         * @param interval a #ClutterInterval with the animation range
         * @param progress the progress to use to interpolate between the   initial and final values of the @interval
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
         */
        vfunc_set_final_state(property_name: string, value: GObject.Value | any): void;
        /**
         * Adds a #ClutterActor to `container`. This function will emit the
         * "actor-added" signal. The actor should be parented to
         * `container`. You cannot add a #ClutterActor to more than one
         * #ClutterContainer.
         *
         * This function will call #ClutterContainerIface.add(), which is a
         * deprecated virtual function. The default implementation will
         * call clutter_actor_add_child().
         * @param actor the first #ClutterActor to add
         */
        add_actor(actor: Clutter.Actor): void;
        /**
         * Gets a container specific property of a child of `container,` In general,
         * a copy is made of the property contents and the caller is responsible for
         * freeing the memory by calling g_value_unset().
         *
         * Note that clutter_container_child_set_property() is really intended for
         * language bindings, clutter_container_child_set() is much more convenient
         * for C programming.
         * @param child a #ClutterActor that is a child of @container.
         * @param property the name of the property to set.
         * @param value the value.
         */
        child_get_property(child: Clutter.Actor, property: string, value: GObject.Value | any): void;
        /**
         * Calls the #ClutterContainerIface.child_notify() virtual function
         * of #ClutterContainer. The default implementation will emit the
         * #ClutterContainer::child-notify signal.
         * @param child a #ClutterActor
         * @param pspec a #GParamSpec
         */
        child_notify(child: Clutter.Actor, pspec: GObject.ParamSpec): void;
        /**
         * Sets a container-specific property on a child of `container`.
         * @param child a #ClutterActor that is a child of @container.
         * @param property the name of the property to set.
         * @param value the value.
         */
        child_set_property(child: Clutter.Actor, property: string, value: GObject.Value | any): void;
        /**
         * Creates the #ClutterChildMeta wrapping `actor` inside the
         * `container,` if the #ClutterContainerIface::child_meta_type
         * class member is not set to %G_TYPE_INVALID.
         *
         * This function is only useful when adding a #ClutterActor to
         * a #ClutterContainer implementation outside of the
         * #ClutterContainer::add() virtual function implementation.
         *
         * Applications should not call this function.
         * @param actor a #ClutterActor
         */
        create_child_meta(actor: Clutter.Actor): void;
        /**
         * Destroys the #ClutterChildMeta wrapping `actor` inside the
         * `container,` if any.
         *
         * This function is only useful when removing a #ClutterActor to
         * a #ClutterContainer implementation outside of the
         * #ClutterContainer::add() virtual function implementation.
         *
         * Applications should not call this function.
         * @param actor a #ClutterActor
         */
        destroy_child_meta(actor: Clutter.Actor): void;
        /**
         * Finds a child actor of a container by its name. Search recurses
         * into any child container.
         * @param child_name the name of the requested child.
         * @returns The child actor with the requested name,   or %NULL if no actor with that name was found.
         */
        find_child_by_name(child_name: string): Clutter.Actor;
        /**
         * Retrieves the #ClutterChildMeta which contains the data about the
         * `container` specific state for `actor`.
         * @param actor a #ClutterActor that is a child of @container.
         * @returns the #ClutterChildMeta for the @actor child   of @container or %NULL if the specifiec actor does not exist or the   container is not configured to provide #ClutterChildMeta<!-- -->s
         */
        get_child_meta(actor: Clutter.Actor): Clutter.ChildMeta;
        /**
         * Removes `actor` from `container`. The actor should be unparented, so
         * if you want to keep it around you must hold a reference to it
         * yourself, using g_object_ref(). When the actor has been removed,
         * the "actor-removed" signal is emitted by `container`.
         *
         * This function will call #ClutterContainerIface.remove(), which is a
         * deprecated virtual function. The default implementation will call
         * clutter_actor_remove_child().
         * @param actor a #ClutterActor
         */
        remove_actor(actor: Clutter.Actor): void;
        vfunc_actor_added(actor: Clutter.Actor): void;
        vfunc_actor_removed(actor: Clutter.Actor): void;
        /**
         * Adds a #ClutterActor to `container`. This function will emit the
         * "actor-added" signal. The actor should be parented to
         * `container`. You cannot add a #ClutterActor to more than one
         * #ClutterContainer.
         *
         * This function will call #ClutterContainerIface.add(), which is a
         * deprecated virtual function. The default implementation will
         * call clutter_actor_add_child().
         * @param actor the first #ClutterActor to add
         */
        vfunc_add(actor: Clutter.Actor): void;
        /**
         * Calls the #ClutterContainerIface.child_notify() virtual function
         * of #ClutterContainer. The default implementation will emit the
         * #ClutterContainer::child-notify signal.
         * @param child a #ClutterActor
         * @param pspec a #GParamSpec
         */
        vfunc_child_notify(child: Clutter.Actor, pspec: GObject.ParamSpec): void;
        /**
         * Creates the #ClutterChildMeta wrapping `actor` inside the
         * `container,` if the #ClutterContainerIface::child_meta_type
         * class member is not set to %G_TYPE_INVALID.
         *
         * This function is only useful when adding a #ClutterActor to
         * a #ClutterContainer implementation outside of the
         * #ClutterContainer::add() virtual function implementation.
         *
         * Applications should not call this function.
         * @param actor a #ClutterActor
         */
        vfunc_create_child_meta(actor: Clutter.Actor): void;
        /**
         * Destroys the #ClutterChildMeta wrapping `actor` inside the
         * `container,` if any.
         *
         * This function is only useful when removing a #ClutterActor to
         * a #ClutterContainer implementation outside of the
         * #ClutterContainer::add() virtual function implementation.
         *
         * Applications should not call this function.
         * @param actor a #ClutterActor
         */
        vfunc_destroy_child_meta(actor: Clutter.Actor): void;
        /**
         * Retrieves the #ClutterChildMeta which contains the data about the
         * `container` specific state for `actor`.
         * @param actor a #ClutterActor that is a child of @container.
         */
        vfunc_get_child_meta(actor: Clutter.Actor): Clutter.ChildMeta;
        /**
         * Removes `actor` from `container`. The actor should be unparented, so
         * if you want to keep it around you must hold a reference to it
         * yourself, using g_object_ref(). When the actor has been removed,
         * the "actor-removed" signal is emitted by `container`.
         *
         * This function will call #ClutterContainerIface.remove(), which is a
         * deprecated virtual function. The default implementation will call
         * clutter_actor_remove_child().
         * @param actor a #ClutterActor
         */
        vfunc_remove(actor: Clutter.Actor): void;
        /**
         * Retrieves the id of `scriptable` set using clutter_scriptable_set_id().
         * @returns the id of the object. The returned string is owned by   the scriptable object and should never be modified of freed
         */
        get_id(): string;
        /**
         * Parses the passed JSON node. The implementation must set the type
         * of the passed #GValue pointer using g_value_init().
         * @param script the #ClutterScript creating the scriptable instance
         * @param value the generic value to be set
         * @param name the name of the node
         * @param node the JSON node to be parsed
         * @returns %TRUE if the node was successfully parsed, %FALSE otherwise.
         */
        parse_custom_node(script: Clutter.Script, value: GObject.Value | any, name: string, node: Json.Node): boolean;
        /**
         * Overrides the common properties setting. The underlying virtual
         * function should be used when implementing custom properties.
         * @param script the #ClutterScript creating the scriptable instance
         * @param name the name of the property
         * @param value the value of the property
         */
        set_custom_property(script: Clutter.Script, name: string, value: GObject.Value | any): void;
        /**
         * Sets `id_` as the unique Clutter script it for this instance of
         * #ClutterScriptableIface.
         *
         * This name can be used by user interface designer applications to
         * define a unique name for an object constructable using the UI
         * definition language parsed by #ClutterScript.
         * @param id_ the #ClutterScript id of the object
         */
        set_id(id_: string): void;
        /**
         * Retrieves the id of `scriptable` set using clutter_scriptable_set_id().
         */
        vfunc_get_id(): string;
        /**
         * Parses the passed JSON node. The implementation must set the type
         * of the passed #GValue pointer using g_value_init().
         * @param script the #ClutterScript creating the scriptable instance
         * @param value the generic value to be set
         * @param name the name of the node
         * @param node the JSON node to be parsed
         */
        vfunc_parse_custom_node(
            script: Clutter.Script,
            value: GObject.Value | any,
            name: string,
            node: Json.Node,
        ): boolean;
        /**
         * Overrides the common properties setting. The underlying virtual
         * function should be used when implementing custom properties.
         * @param script the #ClutterScript creating the scriptable instance
         * @param name the name of the property
         * @param value the value of the property
         */
        vfunc_set_custom_property(script: Clutter.Script, name: string, value: GObject.Value | any): void;
        /**
         * Sets `id_` as the unique Clutter script it for this instance of
         * #ClutterScriptableIface.
         *
         * This name can be used by user interface designer applications to
         * define a unique name for an object constructable using the UI
         * definition language parsed by #ClutterScript.
         * @param id_ the #ClutterScript id of the object
         */
        vfunc_set_id(id_: string): void;
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
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
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
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
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
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
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
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
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
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
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
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
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
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
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
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
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
     * By integrating with #MetaWindowGroup we can avoid painting parts of
     * the background that are obscured by other windows.
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
        get meta_display(): Display;
        get metaDisplay(): Display;
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

        connect<K extends keyof BackgroundContent.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BackgroundContent.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof BackgroundContent.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BackgroundContent.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof BackgroundContent.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<BackgroundContent.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Creates a new actor to draw the background for the given monitor.
         * @param display
         * @param monitor Index of the monitor for which to draw the background
         */
        static ['new'](display: Display, monitor: number): Clutter.Content;

        // Methods

        set_background(background: Background): void;
        set_gradient(enabled: boolean, height: number, tone_start: number): void;
        /**
         * Sets the bounding clip rectangle of the #MetaBackgroundContent that's used
         * when a rounded clip set via meta_background_content_set_rounded_clip_radius()
         * is in effect, set it to  %NULL to use no bounding clip, rounding the edges
         * of the full texture.
         * @param bounds The new bounding clip rectangle, or %NULL
         */
        set_rounded_clip_bounds(bounds?: Graphene.Rect | null): void;
        set_rounded_clip_radius(radius: number): void;
        set_vignette(enabled: boolean, brightness: number, sharpness: number): void;

        // Inherited methods
        /**
         * Retrieves the natural size of the `content,` if any.
         *
         * The natural size of a #ClutterContent is defined as the size the content
         * would have regardless of the allocation of the actor that is painting it,
         * for instance the size of an image data.
         * @returns %TRUE if the content has a preferred size, and %FALSE   otherwise
         */
        get_preferred_size(): [boolean, number, number];
        /**
         * Invalidates a #ClutterContent.
         *
         * This function should be called by #ClutterContent implementations when
         * they change the way a the content should be painted regardless of the
         * actor state.
         */
        invalidate(): void;
        /**
         * Signals that `content'`s size changed. Attached actors with request mode
         * set to %CLUTTER_REQUEST_CONTENT_SIZE will have a relayout queued.
         *
         * Attached actors with other request modes are not redrawn. To redraw them
         * too, use clutter_content_invalidate().
         */
        invalidate_size(): void;
        vfunc_attached(actor: Clutter.Actor): void;
        vfunc_detached(actor: Clutter.Actor): void;
        /**
         * Retrieves the natural size of the `content,` if any.
         *
         * The natural size of a #ClutterContent is defined as the size the content
         * would have regardless of the allocation of the actor that is painting it,
         * for instance the size of an image data.
         */
        vfunc_get_preferred_size(): [boolean, number, number];
        /**
         * Invalidates a #ClutterContent.
         *
         * This function should be called by #ClutterContent implementations when
         * they change the way a the content should be painted regardless of the
         * actor state.
         */
        vfunc_invalidate(): void;
        /**
         * Signals that `content'`s size changed. Attached actors with request mode
         * set to %CLUTTER_REQUEST_CONTENT_SIZE will have a relayout queued.
         *
         * Attached actors with other request modes are not redrawn. To redraw them
         * too, use clutter_content_invalidate().
         */
        vfunc_invalidate_size(): void;
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
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
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
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
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
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
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
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
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
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
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
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
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
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
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
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
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
            'notify::actions': (pspec: GObject.ParamSpec) => void;
            'notify::allocation': (pspec: GObject.ParamSpec) => void;
            'notify::background-color': (pspec: GObject.ParamSpec) => void;
            'notify::background-color-set': (pspec: GObject.ParamSpec) => void;
            'notify::child-transform': (pspec: GObject.ParamSpec) => void;
            'notify::child-transform-set': (pspec: GObject.ParamSpec) => void;
            'notify::clip-rect': (pspec: GObject.ParamSpec) => void;
            'notify::clip-to-allocation': (pspec: GObject.ParamSpec) => void;
            'notify::constraints': (pspec: GObject.ParamSpec) => void;
            'notify::content': (pspec: GObject.ParamSpec) => void;
            'notify::content-box': (pspec: GObject.ParamSpec) => void;
            'notify::content-gravity': (pspec: GObject.ParamSpec) => void;
            'notify::content-repeat': (pspec: GObject.ParamSpec) => void;
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
            extends Clutter.Actor.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Clutter.Animatable.ConstructorProps,
                Clutter.Container.ConstructorProps,
                Clutter.Scriptable.ConstructorProps {}
    }

    class BackgroundGroup
        extends Clutter.Actor
        implements Atk.ImplementorIface, Clutter.Animatable, Clutter.Container, Clutter.Scriptable
    {
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

        connect<K extends keyof BackgroundGroup.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BackgroundGroup.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof BackgroundGroup.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BackgroundGroup.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof BackgroundGroup.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<BackgroundGroup.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Inherited methods
        /**
         * Finds the #GParamSpec for `property_name`
         * @param property_name the name of the animatable property to find
         * @returns The #GParamSpec for the given property   or %NULL
         */
        find_property(property_name: string): GObject.ParamSpec;
        /**
         * Get animated actor.
         * @returns a #ClutterActor
         */
        get_actor(): Clutter.Actor;
        /**
         * Retrieves the current state of `property_name` and sets `value` with it
         * @param property_name the name of the animatable property to retrieve
         * @param value a #GValue initialized to the type of the property to retrieve
         */
        get_initial_state(property_name: string, value: GObject.Value | any): void;
        /**
         * Asks a #ClutterAnimatable implementation to interpolate a
         * a named property between the initial and final values of
         * a #ClutterInterval, using `progress` as the interpolation
         * value, and store the result inside `value`.
         *
         * This function should be used for every property animation
         * involving #ClutterAnimatable<!-- -->s.
         *
         * This function replaces clutter_animatable_animate_property().
         * @param property_name the name of the property to interpolate
         * @param interval a #ClutterInterval with the animation range
         * @param progress the progress to use to interpolate between the   initial and final values of the @interval
         * @returns %TRUE if the interpolation was successful,   and %FALSE otherwise
         */
        interpolate_value(property_name: string, interval: Clutter.Interval, progress: number): [boolean, unknown];
        /**
         * Sets the current state of `property_name` to `value`
         * @param property_name the name of the animatable property to set
         * @param value the value of the animatable property to set
         */
        set_final_state(property_name: string, value: GObject.Value | any): void;
        /**
         * Finds the #GParamSpec for `property_name`
         * @param property_name the name of the animatable property to find
         */
        vfunc_find_property(property_name: string): GObject.ParamSpec;
        /**
         * Get animated actor.
         */
        vfunc_get_actor(): Clutter.Actor;
        /**
         * Retrieves the current state of `property_name` and sets `value` with it
         * @param property_name the name of the animatable property to retrieve
         * @param value a #GValue initialized to the type of the property to retrieve
         */
        vfunc_get_initial_state(property_name: string, value: GObject.Value | any): void;
        /**
         * Asks a #ClutterAnimatable implementation to interpolate a
         * a named property between the initial and final values of
         * a #ClutterInterval, using `progress` as the interpolation
         * value, and store the result inside `value`.
         *
         * This function should be used for every property animation
         * involving #ClutterAnimatable<!-- -->s.
         *
         * This function replaces clutter_animatable_animate_property().
         * @param property_name the name of the property to interpolate
         * @param interval a #ClutterInterval with the animation range
         * @param progress the progress to use to interpolate between the   initial and final values of the @interval
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
         */
        vfunc_set_final_state(property_name: string, value: GObject.Value | any): void;
        /**
         * Adds a #ClutterActor to `container`. This function will emit the
         * "actor-added" signal. The actor should be parented to
         * `container`. You cannot add a #ClutterActor to more than one
         * #ClutterContainer.
         *
         * This function will call #ClutterContainerIface.add(), which is a
         * deprecated virtual function. The default implementation will
         * call clutter_actor_add_child().
         * @param actor the first #ClutterActor to add
         */
        add_actor(actor: Clutter.Actor): void;
        /**
         * Gets a container specific property of a child of `container,` In general,
         * a copy is made of the property contents and the caller is responsible for
         * freeing the memory by calling g_value_unset().
         *
         * Note that clutter_container_child_set_property() is really intended for
         * language bindings, clutter_container_child_set() is much more convenient
         * for C programming.
         * @param child a #ClutterActor that is a child of @container.
         * @param property the name of the property to set.
         * @param value the value.
         */
        child_get_property(child: Clutter.Actor, property: string, value: GObject.Value | any): void;
        /**
         * Calls the #ClutterContainerIface.child_notify() virtual function
         * of #ClutterContainer. The default implementation will emit the
         * #ClutterContainer::child-notify signal.
         * @param child a #ClutterActor
         * @param pspec a #GParamSpec
         */
        child_notify(child: Clutter.Actor, pspec: GObject.ParamSpec): void;
        /**
         * Sets a container-specific property on a child of `container`.
         * @param child a #ClutterActor that is a child of @container.
         * @param property the name of the property to set.
         * @param value the value.
         */
        child_set_property(child: Clutter.Actor, property: string, value: GObject.Value | any): void;
        /**
         * Creates the #ClutterChildMeta wrapping `actor` inside the
         * `container,` if the #ClutterContainerIface::child_meta_type
         * class member is not set to %G_TYPE_INVALID.
         *
         * This function is only useful when adding a #ClutterActor to
         * a #ClutterContainer implementation outside of the
         * #ClutterContainer::add() virtual function implementation.
         *
         * Applications should not call this function.
         * @param actor a #ClutterActor
         */
        create_child_meta(actor: Clutter.Actor): void;
        /**
         * Destroys the #ClutterChildMeta wrapping `actor` inside the
         * `container,` if any.
         *
         * This function is only useful when removing a #ClutterActor to
         * a #ClutterContainer implementation outside of the
         * #ClutterContainer::add() virtual function implementation.
         *
         * Applications should not call this function.
         * @param actor a #ClutterActor
         */
        destroy_child_meta(actor: Clutter.Actor): void;
        /**
         * Finds a child actor of a container by its name. Search recurses
         * into any child container.
         * @param child_name the name of the requested child.
         * @returns The child actor with the requested name,   or %NULL if no actor with that name was found.
         */
        find_child_by_name(child_name: string): Clutter.Actor;
        /**
         * Retrieves the #ClutterChildMeta which contains the data about the
         * `container` specific state for `actor`.
         * @param actor a #ClutterActor that is a child of @container.
         * @returns the #ClutterChildMeta for the @actor child   of @container or %NULL if the specifiec actor does not exist or the   container is not configured to provide #ClutterChildMeta<!-- -->s
         */
        get_child_meta(actor: Clutter.Actor): Clutter.ChildMeta;
        /**
         * Removes `actor` from `container`. The actor should be unparented, so
         * if you want to keep it around you must hold a reference to it
         * yourself, using g_object_ref(). When the actor has been removed,
         * the "actor-removed" signal is emitted by `container`.
         *
         * This function will call #ClutterContainerIface.remove(), which is a
         * deprecated virtual function. The default implementation will call
         * clutter_actor_remove_child().
         * @param actor a #ClutterActor
         */
        remove_actor(actor: Clutter.Actor): void;
        vfunc_actor_added(actor: Clutter.Actor): void;
        vfunc_actor_removed(actor: Clutter.Actor): void;
        /**
         * Adds a #ClutterActor to `container`. This function will emit the
         * "actor-added" signal. The actor should be parented to
         * `container`. You cannot add a #ClutterActor to more than one
         * #ClutterContainer.
         *
         * This function will call #ClutterContainerIface.add(), which is a
         * deprecated virtual function. The default implementation will
         * call clutter_actor_add_child().
         * @param actor the first #ClutterActor to add
         */
        vfunc_add(actor: Clutter.Actor): void;
        /**
         * Calls the #ClutterContainerIface.child_notify() virtual function
         * of #ClutterContainer. The default implementation will emit the
         * #ClutterContainer::child-notify signal.
         * @param child a #ClutterActor
         * @param pspec a #GParamSpec
         */
        vfunc_child_notify(child: Clutter.Actor, pspec: GObject.ParamSpec): void;
        /**
         * Creates the #ClutterChildMeta wrapping `actor` inside the
         * `container,` if the #ClutterContainerIface::child_meta_type
         * class member is not set to %G_TYPE_INVALID.
         *
         * This function is only useful when adding a #ClutterActor to
         * a #ClutterContainer implementation outside of the
         * #ClutterContainer::add() virtual function implementation.
         *
         * Applications should not call this function.
         * @param actor a #ClutterActor
         */
        vfunc_create_child_meta(actor: Clutter.Actor): void;
        /**
         * Destroys the #ClutterChildMeta wrapping `actor` inside the
         * `container,` if any.
         *
         * This function is only useful when removing a #ClutterActor to
         * a #ClutterContainer implementation outside of the
         * #ClutterContainer::add() virtual function implementation.
         *
         * Applications should not call this function.
         * @param actor a #ClutterActor
         */
        vfunc_destroy_child_meta(actor: Clutter.Actor): void;
        /**
         * Retrieves the #ClutterChildMeta which contains the data about the
         * `container` specific state for `actor`.
         * @param actor a #ClutterActor that is a child of @container.
         */
        vfunc_get_child_meta(actor: Clutter.Actor): Clutter.ChildMeta;
        /**
         * Removes `actor` from `container`. The actor should be unparented, so
         * if you want to keep it around you must hold a reference to it
         * yourself, using g_object_ref(). When the actor has been removed,
         * the "actor-removed" signal is emitted by `container`.
         *
         * This function will call #ClutterContainerIface.remove(), which is a
         * deprecated virtual function. The default implementation will call
         * clutter_actor_remove_child().
         * @param actor a #ClutterActor
         */
        vfunc_remove(actor: Clutter.Actor): void;
        /**
         * Retrieves the id of `scriptable` set using clutter_scriptable_set_id().
         * @returns the id of the object. The returned string is owned by   the scriptable object and should never be modified of freed
         */
        get_id(): string;
        /**
         * Parses the passed JSON node. The implementation must set the type
         * of the passed #GValue pointer using g_value_init().
         * @param script the #ClutterScript creating the scriptable instance
         * @param value the generic value to be set
         * @param name the name of the node
         * @param node the JSON node to be parsed
         * @returns %TRUE if the node was successfully parsed, %FALSE otherwise.
         */
        parse_custom_node(script: Clutter.Script, value: GObject.Value | any, name: string, node: Json.Node): boolean;
        /**
         * Overrides the common properties setting. The underlying virtual
         * function should be used when implementing custom properties.
         * @param script the #ClutterScript creating the scriptable instance
         * @param name the name of the property
         * @param value the value of the property
         */
        set_custom_property(script: Clutter.Script, name: string, value: GObject.Value | any): void;
        /**
         * Sets `id_` as the unique Clutter script it for this instance of
         * #ClutterScriptableIface.
         *
         * This name can be used by user interface designer applications to
         * define a unique name for an object constructable using the UI
         * definition language parsed by #ClutterScript.
         * @param id_ the #ClutterScript id of the object
         */
        set_id(id_: string): void;
        /**
         * Retrieves the id of `scriptable` set using clutter_scriptable_set_id().
         */
        vfunc_get_id(): string;
        /**
         * Parses the passed JSON node. The implementation must set the type
         * of the passed #GValue pointer using g_value_init().
         * @param script the #ClutterScript creating the scriptable instance
         * @param value the generic value to be set
         * @param name the name of the node
         * @param node the JSON node to be parsed
         */
        vfunc_parse_custom_node(
            script: Clutter.Script,
            value: GObject.Value | any,
            name: string,
            node: Json.Node,
        ): boolean;
        /**
         * Overrides the common properties setting. The underlying virtual
         * function should be used when implementing custom properties.
         * @param script the #ClutterScript creating the scriptable instance
         * @param name the name of the property
         * @param value the value of the property
         */
        vfunc_set_custom_property(script: Clutter.Script, name: string, value: GObject.Value | any): void;
        /**
         * Sets `id_` as the unique Clutter script it for this instance of
         * #ClutterScriptableIface.
         *
         * This name can be used by user interface designer applications to
         * define a unique name for an object constructable using the UI
         * definition language parsed by #ClutterScript.
         * @param id_ the #ClutterScript id of the object
         */
        vfunc_set_id(id_: string): void;
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
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
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
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
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
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
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
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
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
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
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
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
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
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
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
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
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
            loaded: () => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * #MetaBackgroundImage is an object that represents a loaded or loading background image.
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

        connect<K extends keyof BackgroundImage.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BackgroundImage.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof BackgroundImage.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BackgroundImage.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof BackgroundImage.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<BackgroundImage.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * This function is a convenience function for checking for success,
         * without having to call meta_background_image_get_texture() and
         * handle the return of a Cogl type.
         * @returns %TRUE if loading completed successfully, otherwise %FALSE
         */
        get_success(): boolean;
        get_texture(): Cogl.Texture;
        is_loaded(): boolean;
    }

    namespace BackgroundImageCache {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * #MetaBackgroundImageCache caches loading of textures for backgrounds; there's actually
     * nothing background specific about it, other than it is tuned to work well for
     * large images as typically are used for backgrounds.
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

        connect<K extends keyof BackgroundImageCache.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BackgroundImageCache.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof BackgroundImageCache.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, BackgroundImageCache.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
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
         * image that is already in the process of loading or loaded. In either
         * case, what is returned is a #MetaBackgroundImage which can be dereferenced
         * to get a #CoglTexture. If meta_background_image_is_loaded() returns %TRUE,
         * the background is loaded, otherwise the MetaBackgroundImage::loaded
         * signal will be emitted exactly once. The 'loaded' state means that the
         * loading process finished, whether it succeeded or failed.
         * @param file #GFile to load
         * @returns a #MetaBackgroundImage to dereference to get the loaded texture
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
            hit: (arg0: BarrierEvent) => void;
            left: (arg0: BarrierEvent) => void;
            'notify::directions': (pspec: GObject.ParamSpec) => void;
            'notify::display': (pspec: GObject.ParamSpec) => void;
            'notify::x1': (pspec: GObject.ParamSpec) => void;
            'notify::x2': (pspec: GObject.ParamSpec) => void;
            'notify::y1': (pspec: GObject.ParamSpec) => void;
            'notify::y2': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            directions: BarrierDirection;
            display: Display;
            x1: number;
            x2: number;
            y1: number;
            y2: number;
        }
    }

    /**
     * The <structname>MetaBarrier</structname> structure contains
     * only private data and should be accessed using the provided API
     */
    class Barrier extends GObject.Object {
        static $gtype: GObject.GType<Barrier>;

        // Properties

        get directions(): BarrierDirection;
        get display(): Display;
        get x1(): number;
        get x2(): number;
        get y1(): number;
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

        // Signals

        connect<K extends keyof Barrier.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Barrier.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Barrier.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Barrier.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
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
         * them. Pass a #MetaBarrierEvent to release the barrier for
         * this event sequence.
         * @param event The event to release the pointer for
         */
        release(event: BarrierEvent): void;
    }

    namespace Context {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::unsafe-mode': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            name: string;
            unsafe_mode: boolean;
            unsafeMode: boolean;
        }
    }

    class Context extends GObject.Object {
        static $gtype: GObject.GType<Context>;

        // Properties

        get name(): string;
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

        connect<K extends keyof Context.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Context.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Context.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Context.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Context.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Context.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * See g_option_context_add_main_entries() for more details.
         * @param entries a %NULL-terminated array of #GOptionEntrys
         * @param translation_domain a translation domain to use, or %NULL
         */
        add_option_entries(entries: GLib.OptionEntry[], translation_domain?: string | null): void;
        /**
         * See g_option_context_add_group() for more details.
         * @param group the group to add
         */
        add_option_group(group: GLib.OptionGroup): void;
        configure(argv?: string[] | null): [boolean, string[] | null];
        destroy(): void;
        get_backend(): Backend;
        get_compositor_type(): CompositorType;
        get_display(): Display;
        is_replacing(): boolean;
        notify_ready(): void;
        /**
         * Raises the RLIMIT_NOFILE limit value to the hard limit.
         */
        raise_rlimit_nofile(): boolean;
        /**
         * Restores the RLIMIT_NOFILE limits from when the #MetaContext was created.
         */
        restore_rlimit_nofile(): boolean;
        run_main_loop(): boolean;
        set_gnome_wm_keybindings(wm_keybindings: string): void;
        set_plugin_gtype(plugin_gtype: GObject.GType): void;
        set_plugin_name(plugin_name: string): void;
        setup(): boolean;
        start(): boolean;
        terminate(): void;
        terminate_with_error(error: GLib.Error): void;
    }

    namespace CursorTracker {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'cursor-changed': () => void;
            'position-invalidated': () => void;
            'visibility-changed': () => void;
            'notify::backend': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            backend: Backend;
        }
    }

    class CursorTracker extends GObject.Object {
        static $gtype: GObject.GType<CursorTracker>;

        // Properties

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

        connect<K extends keyof CursorTracker.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CursorTracker.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof CursorTracker.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, CursorTracker.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof CursorTracker.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<CursorTracker.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Retrieves the cursor tracker object for `display`.
         * @param display the #MetaDisplay
         */
        static get_for_display(display: Display): CursorTracker;

        // Methods

        get_hot(): [number, number];
        /**
         * Get the current pointer position and state.
         */
        get_pointer(): [Graphene.Point, Clutter.ModifierType];
        get_pointer_visible(): boolean;
        get_scale(): number;
        get_sprite(): Cogl.Texture;
        set_pointer_visible(visible: boolean): void;
    }

    namespace Display {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'accelerator-activated': (arg0: number, arg1: Clutter.InputDevice, arg2: number) => void;
            closing: () => void;
            'cursor-updated': () => void;
            'gl-video-memory-purged': () => void;
            'grab-op-begin': (arg0: Window, arg1: GrabOp) => void;
            'grab-op-end': (arg0: Window, arg1: GrabOp) => void;
            'in-fullscreen-changed': () => void;
            'init-xserver': (arg0: Gio.Task) => boolean | void;
            'modifiers-accelerator-activated': () => boolean | void;
            'overlay-key': () => void;
            'pad-mode-switch': (arg0: Clutter.InputDevice, arg1: number, arg2: number) => void;
            restacked: () => void;
            restart: () => boolean | void;
            'show-osd': (arg0: number, arg1: string, arg2: string) => void;
            'show-pad-osd': (
                arg0: Clutter.InputDevice,
                arg1: Gio.Settings,
                arg2: string,
                arg3: boolean,
                arg4: number,
            ) => Clutter.Actor | null;
            'show-resize-popup': (arg0: boolean, arg1: Rectangle, arg2: number, arg3: number) => boolean | void;
            'show-restart-message': (arg0: string | null) => boolean | void;
            'showing-desktop-changed': () => void;
            'window-created': (arg0: Window) => void;
            'window-demands-attention': (arg0: Window) => void;
            'window-entered-monitor': (arg0: number, arg1: Window) => void;
            'window-left-monitor': (arg0: number, arg1: Window) => void;
            'window-marked-urgent': (arg0: Window) => void;
            'window-visibility-updated': (arg0: any | null, arg1: any | null, arg2: any | null) => void;
            'workareas-changed': () => void;
            'x11-display-closing': () => void;
            'x11-display-opened': () => void;
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

    class Display extends GObject.Object {
        static $gtype: GObject.GType<Display>;

        // Properties

        get compositor_modifiers(): Clutter.ModifierType;
        get compositorModifiers(): Clutter.ModifierType;
        get focus_window(): Window;
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

        connect<K extends keyof Display.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Display.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Display.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Display.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Display.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Display.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Save the specified serial and ignore crossing events with that
         * serial for the purpose of focus-follows-mouse. This can be used
         * for certain changes to the window hierarchy that we don't want
         * to change the focus window, even if they cause the pointer to
         * end up in a new window.
         * @param serial the serial to ignore
         */
        add_ignored_crossing_serial(serial: number): void;
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
         * @param settings the #GSettings object where @name is stored
         * @param flags flags to specify binding details
         * @param handler function to run when the keybinding is invoked
         * @returns the corresponding keybinding action if the keybinding was          added successfully, otherwise %META_KEYBINDING_ACTION_NONE
         */
        add_keybinding(
            name: string,
            settings: Gio.Settings,
            flags: KeyBindingFlags | null,
            handler: KeyHandlerFunc,
        ): number;
        begin_grab_op(
            window: Window,
            op: GrabOp | null,
            pointer_already_grabbed: boolean,
            frame_action: boolean,
            button: number,
            modmask: number,
            timestamp: number,
            root_x: number,
            root_y: number,
        ): boolean;
        /**
         * Sets the mouse-mode flag to %FALSE, which means that motion events are
         * no longer ignored in mouse or sloppy focus.
         * This is an internal function. It should be used only for reimplementing
         * keybindings, and only in a manner compatible with core code.
         */
        clear_mouse_mode(): void;
        close(timestamp: number): void;
        end_grab_op(timestamp: number): void;
        focus_default_window(timestamp: number): void;
        freeze_keyboard(timestamp: number): void;
        get_compositor_modifiers(): Clutter.ModifierType;
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
         * Gets the current grab operation, if any.
         * @returns the current grab operation, or %META_GRAB_OP_NONE if Mutter doesn't currently have a grab.
         */
        get_grab_op(): GrabOp;
        /**
         * Get the keybinding action bound to `keycode`. Builtin keybindings
         * have a fixed associated #MetaKeyBindingAction, for bindings added
         * dynamically the function will return the keybinding action
         * meta_display_add_keybinding() returns on registration.
         * @param keycode Raw keycode
         * @param mask Event mask
         * @returns The action that should be taken for the given key, or %META_KEYBINDING_ACTION_NONE.
         */
        get_keybinding_action(keycode: number, mask: number): number;
        get_last_user_time(): number;
        /**
         * Stores the location and size of the indicated `monitor` in `geometry`.
         * @param monitor the monitor number
         */
        get_monitor_geometry(monitor: number): Rectangle;
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
        get_monitor_in_fullscreen(monitor: number): boolean;
        get_monitor_index_for_rect(rect: Rectangle): number;
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
        get_pad_action_label(
            pad: Clutter.InputDevice,
            action_type: PadActionType | null,
            action_number: number,
        ): string;
        /**
         * Gets the index of the primary monitor on this `display`.
         * @returns a monitor index
         */
        get_primary_monitor(): number;
        get_selection(): Selection;
        /**
         * Retrieve the size of the display.
         */
        get_size(): [number, number];
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
         * If `workspace` is not %NULL, the list only contains windows that are on
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
         * @param backward If %TRUE, look for the previous window.
         * @returns Next window
         */
        get_tab_next(type: TabList | null, workspace: Workspace, window: Window | null, backward: boolean): Window;
        get_workspace_manager(): WorkspaceManager;
        grab_accelerator(accelerator: string, flags: KeyBindingFlags | null): number;
        /**
         * Tells whether the event sequence is the used for pointer emulation
         * and single-touch interaction.
         * @param sequence a #ClutterEventSequence
         * @returns #TRUE if the sequence emulates pointer behavior
         */
        is_pointer_emulating_sequence(sequence?: Clutter.EventSequence | null): boolean;
        /**
         * List all windows, including override-redirect ones. The windows are
         * in no particular order.
         * @returns List of windows
         */
        list_all_windows(): Window[];
        /**
         * Remove keybinding `name;` the function will fail if `name` is not a known
         * keybinding or has not been added with meta_display_add_keybinding().
         * @param name name of the keybinding to remove
         * @returns %TRUE if the binding has been removed successfully,          otherwise %FALSE
         */
        remove_keybinding(name: string): boolean;
        request_pad_osd(pad: Clutter.InputDevice, edition_mode: boolean): void;
        set_cursor(cursor: Cursor | null): void;
        set_input_focus(window: Window, focus_frame: boolean, timestamp: number): void;
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
        supports_extended_barriers(): boolean;
        unfreeze_keyboard(timestamp: number): void;
        ungrab_accelerator(action_id: number): boolean;
        ungrab_keyboard(timestamp: number): void;
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
            'dnd-enter': () => void;
            'dnd-leave': () => void;
            'dnd-position-change': (arg0: number, arg1: number) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

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

        connect<K extends keyof Dnd.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Dnd.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Dnd.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Dnd.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
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

    class IdleMonitor extends GObject.Object {
        static $gtype: GObject.GType<IdleMonitor>;

        // Properties

        /**
         * The device to listen to idletime on.
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

        connect<K extends keyof IdleMonitor.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, IdleMonitor.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof IdleMonitor.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, IdleMonitor.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof IdleMonitor.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<IdleMonitor.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        add_idle_watch(interval_msec: number, callback?: IdleMonitorWatchFunc | null): number;
        add_user_active_watch(callback?: IdleMonitorWatchFunc | null): number;
        get_idletime(): number;
        /**
         * Removes an idle time watcher, previously added by
         * meta_idle_monitor_add_idle_watch() or
         * meta_idle_monitor_add_user_active_watch().
         * @param id A watch ID
         */
        remove_watch(id: number): void;
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

    class LaunchContext extends Gio.AppLaunchContext {
        static $gtype: GObject.GType<LaunchContext>;

        // Properties

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

        connect<K extends keyof LaunchContext.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, LaunchContext.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof LaunchContext.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, LaunchContext.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof LaunchContext.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<LaunchContext.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        set_timestamp(timestamp: number): void;
        set_workspace(workspace: Workspace): void;
    }

    namespace MonitorManager {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'confirm-display-change': () => void;
            'monitor-privacy-screen-changed': (arg0: unknown, arg1: boolean) => void;
            'monitors-changed': () => void;
            'monitors-changed-internal': () => void;
            'power-save-mode-changed': () => void;
            'notify::backend': (pspec: GObject.ParamSpec) => void;
            'notify::has-builtin-panel': (pspec: GObject.ParamSpec) => void;
            'notify::panel-orientation-managed': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            backend: Backend;
            has_builtin_panel: boolean;
            hasBuiltinPanel: boolean;
            panel_orientation_managed: boolean;
            panelOrientationManaged: boolean;
        }
    }

    class MonitorManager extends GObject.Object {
        static $gtype: GObject.GType<MonitorManager>;

        // Properties

        get backend(): Backend;
        get has_builtin_panel(): boolean;
        get hasBuiltinPanel(): boolean;
        get panel_orientation_managed(): boolean;
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

        connect<K extends keyof MonitorManager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MonitorManager.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof MonitorManager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, MonitorManager.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof MonitorManager.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<MonitorManager.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        /**
         * Accessor for the singleton MetaMonitorManager.
         */
        static get(): MonitorManager;
        static get_display_configuration_timeout(): number;

        // Methods

        can_switch_config(): boolean;
        /**
         * Returns whether the built-in display (i.e. a laptop panel) is turned on.
         */
        get_is_builtin_display_on(): boolean;
        get_monitor_for_connector(connector: string): number;
        get_panel_orientation_managed(): boolean;
        get_switch_config(): MonitorSwitchConfigType;
        switch_config(config_type: MonitorSwitchConfigType | null): void;
    }

    namespace Plugin {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

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

        connect<K extends keyof Plugin.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Plugin.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Plugin.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Plugin.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Plugin.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Plugin.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static manager_set_plugin_type(gtype: GObject.GType): void;

        // Virtual methods

        vfunc_confirm_display_change(): void;
        /**
         * Virtual function called when the window represented by `actor` is destroyed.
         * @param actor a #MetaWindowActor
         */
        vfunc_destroy(actor: WindowActor): void;
        vfunc_hide_tile_preview(): void;
        /**
         * Virtual function called when handling each keybinding.
         * @param binding a #MetaKeyBinding
         */
        vfunc_keybinding_filter(binding: KeyBinding): boolean;
        /**
         * Virtual function called when the workspace-switching effect needs to be
         * killed prematurely.
         */
        vfunc_kill_switch_workspace(): void;
        /**
         * Virtual function called when the effects on `actor` need to be killed
         * prematurely; the plugin must call the completed() callback as if the effect
         * terminated naturally.
         * @param actor a #MetaWindowActor
         */
        vfunc_kill_window_effects(actor: WindowActor): void;
        /**
         * Virtual function called when the user triggered the "locate-pointer"
         * mechanism.
         * The common way to implement this function is to show some animation
         * on screen to draw user attention on the pointer location.
         */
        vfunc_locate_pointer(): void;
        /**
         * Virtual function called when the window represented by `actor` is mapped.
         * @param actor a #MetaWindowActor
         */
        vfunc_map(actor: WindowActor): void;
        /**
         * Virtual function called when the window represented by `actor` is minimized.
         * @param actor a #MetaWindowActor
         */
        vfunc_minimize(actor: WindowActor): void;
        /**
         * Virtual function that returns information about the #MetaPlugin.
         */
        vfunc_plugin_info(): PluginInfo;
        vfunc_show_tile_preview(window: Window, tile_rect: Rectangle, tile_monitor_number: number): void;
        vfunc_show_window_menu(window: Window, menu: WindowMenuType, x: number, y: number): void;
        vfunc_show_window_menu_for_rect(window: Window, menu: WindowMenuType, rect: Rectangle): void;
        vfunc_size_change(
            actor: WindowActor,
            which_change: SizeChange,
            old_frame_rect: Rectangle,
            old_buffer_rect: Rectangle,
        ): void;
        vfunc_size_changed(actor: WindowActor): void;
        /**
         * Virtual function called when the compositor starts managing a screen
         */
        vfunc_start(): void;
        /**
         * Virtual function called when the window represented by `actor` is destroyed.
         * @param from origin workspace
         * @param to destination workspace
         * @param direction a #MetaMotionDirection
         */
        vfunc_switch_workspace(from: number, to: number, direction: MotionDirection): void;
        /**
         * Virtual function called when the window represented by `actor` is unminimized.
         * @param actor a #MetaWindowActor
         */
        vfunc_unminimize(actor: WindowActor): void;
        /**
         * Virtual function called when handling each event.
         * @param event
         */
        vfunc_xevent_filter(event: xlib.XEvent): boolean;

        // Methods

        complete_display_change(ok: boolean): void;
        destroy_completed(actor: WindowActor): void;
        /**
         * Gets the #MetaDisplay corresponding to a plugin.
         * @returns the #MetaDisplay for the plugin
         */
        get_display(): Display;
        get_info(): PluginInfo;
        map_completed(actor: WindowActor): void;
        minimize_completed(actor: WindowActor): void;
        size_change_completed(actor: WindowActor): void;
        switch_workspace_completed(): void;
        unminimize_completed(actor: WindowActor): void;
    }

    namespace RemoteAccessController {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'new-handle': (arg0: RemoteAccessHandle) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

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

        connect<K extends keyof RemoteAccessController.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, RemoteAccessController.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof RemoteAccessController.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, RemoteAccessController.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
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
         * the last inhibitation that was inhibited, new remote access sessions can now
         * be created.
         */
        uninhibit_remote_access(): void;
    }

    namespace RemoteAccessHandle {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            stopped: () => void;
            'notify::is-recording': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            is_recording: boolean;
            isRecording: boolean;
        }
    }

    class RemoteAccessHandle extends GObject.Object {
        static $gtype: GObject.GType<RemoteAccessHandle>;

        // Properties

        get is_recording(): boolean;
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

        connect<K extends keyof RemoteAccessHandle.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, RemoteAccessHandle.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof RemoteAccessHandle.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, RemoteAccessHandle.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof RemoteAccessHandle.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<RemoteAccessHandle.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        /**
         * Stop the associated remote access session.
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
            'owner-changed': (arg0: number, arg1: SelectionSource) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

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

        connect<K extends keyof Selection.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Selection.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Selection.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Selection.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
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
         * Sets `owner` as the owner of the selection given by `selection_type,`
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
         * @returns #TRUE if the transfer was successful.
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
            activated: () => void;
            deactivated: () => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

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

        connect<K extends keyof SelectionSource.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SelectionSource.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof SelectionSource.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SelectionSource.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof SelectionSource.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<SelectionSource.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods

        vfunc_activated(): void;
        vfunc_deactivated(): void;
        /**
         * Returns the list of supported mimetypes.
         */
        vfunc_get_mimetypes(): string[];
        vfunc_read_async(
            mimetype: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes a read from the selection source.
         * @param result The async result
         */
        vfunc_read_finish(result: Gio.AsyncResult): Gio.InputStream;

        // Methods

        /**
         * Returns the list of supported mimetypes.
         * @returns The supported mimetypes
         */
        get_mimetypes(): string[];
        /**
         * Returns #TRUE if the source is active on a selection.
         * @returns #TRUE if the source owns a selection.
         */
        is_active(): boolean;
        read_async(mimetype: string, cancellable?: Gio.Cancellable | null): globalThis.Promise<Gio.InputStream>;
        read_async(
            mimetype: string,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        read_async(
            mimetype: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<Gio.InputStream> | void;
        /**
         * Finishes a read from the selection source.
         * @param result The async result
         * @returns The resulting #GInputStream
         */
        read_finish(result: Gio.AsyncResult): Gio.InputStream;
    }

    namespace SelectionSourceMemory {
        // Signal signatures
        interface SignalSignatures extends SelectionSource.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends SelectionSource.ConstructorProps {}
    }

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

        connect<K extends keyof SelectionSourceMemory.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SelectionSourceMemory.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof SelectionSourceMemory.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SelectionSourceMemory.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof SelectionSourceMemory.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<SelectionSourceMemory.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace ShadowFactory {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            changed: () => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

    /**
     * #MetaShadowFactory is used to create window shadows. It caches shadows internally
     * so that multiple shadows created for the same shape with the same radius will
     * share the same MetaShadow.
     */
    class ShadowFactory extends GObject.Object {
        static $gtype: GObject.GType<ShadowFactory>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ShadowFactory.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ShadowFactory.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ['new'](): ShadowFactory;

        // Signals

        connect<K extends keyof ShadowFactory.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ShadowFactory.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ShadowFactory.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ShadowFactory.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof ShadowFactory.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ShadowFactory.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static get_default(): ShadowFactory;

        // Methods

        /**
         * Gets the shadow parameters for a particular class of shadows
         * for either the focused or unfocused state. If the class name
         * does not name an existing class, default values will be returned
         * without printing an error.
         * @param class_name name of the class of shadow to get the params for
         * @param focused whether the shadow is for a focused window
         */
        get_params(class_name: string, focused: boolean): ShadowParams;
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
        get_shadow(shape: WindowShape, width: number, height: number, class_name: string, focused: boolean): Shadow;
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
        set_params(class_name: string, focused: boolean, params: ShadowParams): void;
    }

    namespace ShapedTexture {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'size-changed': () => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, Clutter.Content.ConstructorProps {}
    }

    class ShapedTexture extends GObject.Object implements Clutter.Content {
        static $gtype: GObject.GType<ShapedTexture>;

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

        connect<K extends keyof ShapedTexture.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ShapedTexture.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof ShapedTexture.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ShapedTexture.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
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
         * @returns a new cairo surface to be freed with cairo_surface_destroy().
         */
        get_image(clip?: cairo.RectangleInt | null): cairo.Surface | null;
        get_texture(): Cogl.Texture;
        set_create_mipmaps(create_mipmaps: boolean): void;
        set_mask_texture(mask_texture: Cogl.Texture): void;

        // Inherited methods
        /**
         * Retrieves the natural size of the `content,` if any.
         *
         * The natural size of a #ClutterContent is defined as the size the content
         * would have regardless of the allocation of the actor that is painting it,
         * for instance the size of an image data.
         * @returns %TRUE if the content has a preferred size, and %FALSE   otherwise
         */
        get_preferred_size(): [boolean, number, number];
        /**
         * Invalidates a #ClutterContent.
         *
         * This function should be called by #ClutterContent implementations when
         * they change the way a the content should be painted regardless of the
         * actor state.
         */
        invalidate(): void;
        /**
         * Signals that `content'`s size changed. Attached actors with request mode
         * set to %CLUTTER_REQUEST_CONTENT_SIZE will have a relayout queued.
         *
         * Attached actors with other request modes are not redrawn. To redraw them
         * too, use clutter_content_invalidate().
         */
        invalidate_size(): void;
        vfunc_attached(actor: Clutter.Actor): void;
        vfunc_detached(actor: Clutter.Actor): void;
        /**
         * Retrieves the natural size of the `content,` if any.
         *
         * The natural size of a #ClutterContent is defined as the size the content
         * would have regardless of the allocation of the actor that is painting it,
         * for instance the size of an image data.
         */
        vfunc_get_preferred_size(): [boolean, number, number];
        /**
         * Invalidates a #ClutterContent.
         *
         * This function should be called by #ClutterContent implementations when
         * they change the way a the content should be painted regardless of the
         * actor state.
         */
        vfunc_invalidate(): void;
        /**
         * Signals that `content'`s size changed. Attached actors with request mode
         * set to %CLUTTER_REQUEST_CONTENT_SIZE will have a relayout queued.
         *
         * Attached actors with other request modes are not redrawn. To redraw them
         * too, use clutter_content_invalidate().
         */
        vfunc_invalidate_size(): void;
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
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
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
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
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
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
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
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
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
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
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
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
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
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
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
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
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

        connect<K extends keyof SoundPlayer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SoundPlayer.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof SoundPlayer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, SoundPlayer.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
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
            'actors-painted': () => void;
            'notify::key-focus': (pspec: GObject.ParamSpec) => void;
            'notify::perspective': (pspec: GObject.ParamSpec) => void;
            'notify::title': (pspec: GObject.ParamSpec) => void;
            'notify::actions': (pspec: GObject.ParamSpec) => void;
            'notify::allocation': (pspec: GObject.ParamSpec) => void;
            'notify::background-color': (pspec: GObject.ParamSpec) => void;
            'notify::background-color-set': (pspec: GObject.ParamSpec) => void;
            'notify::child-transform': (pspec: GObject.ParamSpec) => void;
            'notify::child-transform-set': (pspec: GObject.ParamSpec) => void;
            'notify::clip-rect': (pspec: GObject.ParamSpec) => void;
            'notify::clip-to-allocation': (pspec: GObject.ParamSpec) => void;
            'notify::constraints': (pspec: GObject.ParamSpec) => void;
            'notify::content': (pspec: GObject.ParamSpec) => void;
            'notify::content-box': (pspec: GObject.ParamSpec) => void;
            'notify::content-gravity': (pspec: GObject.ParamSpec) => void;
            'notify::content-repeat': (pspec: GObject.ParamSpec) => void;
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
            extends Clutter.Stage.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Clutter.Animatable.ConstructorProps,
                Clutter.Container.ConstructorProps,
                Clutter.Scriptable.ConstructorProps {}
    }

    class Stage
        extends Clutter.Stage
        implements Atk.ImplementorIface, Clutter.Animatable, Clutter.Container, Clutter.Scriptable
    {
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

        connect<K extends keyof Stage.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Stage.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Stage.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Stage.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Stage.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Stage.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods

        static is_focused(display: Display): boolean;

        // Inherited methods
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
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
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
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
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
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
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
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
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
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
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
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
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
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
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
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
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
            changed: (arg0: StartupSequence) => void;
            'notify::display': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            display: Display;
        }
    }

    class StartupNotification extends GObject.Object {
        static $gtype: GObject.GType<StartupNotification>;

        // Properties

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

        connect<K extends keyof StartupNotification.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StartupNotification.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof StartupNotification.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StartupNotification.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
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
         * @returns a #GSList of #MetaStartupSequence in the #MetaStartupNotification.
         */
        get_sequences(): StartupSequence[];
    }

    namespace StartupSequence {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            complete: () => void;
            timeout: () => void;
            'notify::application-id': (pspec: GObject.ParamSpec) => void;
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
            icon_name: string;
            iconName: string;
            id: string;
            name: string;
            timestamp: number;
            wmclass: string;
            workspace: number;
        }
    }

    class StartupSequence extends GObject.Object {
        static $gtype: GObject.GType<StartupSequence>;

        // Properties

        get application_id(): string;
        get applicationId(): string;
        get icon_name(): string;
        get iconName(): string;
        get id(): string;
        get name(): string;
        get timestamp(): number;
        get wmclass(): string;
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

        connect<K extends keyof StartupSequence.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StartupSequence.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof StartupSequence.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, StartupSequence.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof StartupSequence.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<StartupSequence.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        complete(): void;
        /**
         * Get the application id of the startup sequence.
         * @returns the application id or %NULL.
         */
        get_application_id(): string | null;
        get_completed(): boolean;
        /**
         * Get the icon name of the startup sequence.
         * @returns the icon name or %NULL.
         */
        get_icon_name(): string | null;
        get_id(): string;
        get_name(): string;
        get_timestamp(): number;
        /**
         * Get the wmclass of the startup sequence.
         * @returns the wmclass or %NULL.
         */
        get_wmclass(): string | null;
        get_workspace(): number;
    }

    namespace WaylandClient {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

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

        static ['new'](launcher: Gio.SubprocessLauncher): WaylandClient;

        // Signals

        connect<K extends keyof WaylandClient.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WaylandClient.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof WaylandClient.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WaylandClient.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof WaylandClient.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<WaylandClient.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        hide_from_window_list(window: Window): void;
        owns_window(window: Window): boolean;
        /**
         * Shows again this window in window lists, like taskbars, pagers...
         * @param window a MetaWindow
         */
        show_in_window_list(window: Window): void;
        /**
         * Creates a #GSubprocess given a provided array of arguments, launching a new
         * process with the binary specified in the first element of argv, and with the
         * rest of elements as parameters. It also sets up a new Wayland socket and sets
         * the environment variable WAYLAND_SOCKET to make the new process to use it.
         * @param display the current MetaDisplay
         * @param argv Command line arguments
         * @returns A new #GSubprocess, or %NULL on error (and @error will be set)
         */
        spawnv(display: Display, argv: string[]): Gio.Subprocess;
    }

    namespace Window {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            focus: () => void;
            'monitor-changed': (arg0: number) => void;
            'position-changed': () => void;
            raised: () => void;
            shown: () => void;
            'size-changed': () => void;
            unmanaged: () => void;
            unmanaging: () => void;
            'workspace-changed': () => void;
            'notify::above': (pspec: GObject.ParamSpec) => void;
            'notify::appears-focused': (pspec: GObject.ParamSpec) => void;
            'notify::decorated': (pspec: GObject.ParamSpec) => void;
            'notify::demands-attention': (pspec: GObject.ParamSpec) => void;
            'notify::fullscreen': (pspec: GObject.ParamSpec) => void;
            'notify::gtk-app-menu-object-path': (pspec: GObject.ParamSpec) => void;
            'notify::gtk-application-id': (pspec: GObject.ParamSpec) => void;
            'notify::gtk-application-object-path': (pspec: GObject.ParamSpec) => void;
            'notify::gtk-menubar-object-path': (pspec: GObject.ParamSpec) => void;
            'notify::gtk-unique-bus-name': (pspec: GObject.ParamSpec) => void;
            'notify::gtk-window-object-path': (pspec: GObject.ParamSpec) => void;
            'notify::icon': (pspec: GObject.ParamSpec) => void;
            'notify::is-alive': (pspec: GObject.ParamSpec) => void;
            'notify::maximized-horizontally': (pspec: GObject.ParamSpec) => void;
            'notify::maximized-vertically': (pspec: GObject.ParamSpec) => void;
            'notify::mini-icon': (pspec: GObject.ParamSpec) => void;
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

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            above: boolean;
            appears_focused: boolean;
            appearsFocused: boolean;
            decorated: boolean;
            demands_attention: boolean;
            demandsAttention: boolean;
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
            icon: any;
            is_alive: boolean;
            isAlive: boolean;
            maximized_horizontally: boolean;
            maximizedHorizontally: boolean;
            maximized_vertically: boolean;
            maximizedVertically: boolean;
            mini_icon: any;
            miniIcon: any;
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

    abstract class Window extends GObject.Object {
        static $gtype: GObject.GType<Window>;

        // Properties

        get above(): boolean;
        get appears_focused(): boolean;
        get appearsFocused(): boolean;
        get decorated(): boolean;
        get demands_attention(): boolean;
        get demandsAttention(): boolean;
        get fullscreen(): boolean;
        get gtk_app_menu_object_path(): string;
        get gtkAppMenuObjectPath(): string;
        get gtk_application_id(): string;
        get gtkApplicationId(): string;
        get gtk_application_object_path(): string;
        get gtkApplicationObjectPath(): string;
        get gtk_menubar_object_path(): string;
        get gtkMenubarObjectPath(): string;
        get gtk_unique_bus_name(): string;
        get gtkUniqueBusName(): string;
        get gtk_window_object_path(): string;
        get gtkWindowObjectPath(): string;
        get icon(): any;
        get is_alive(): boolean;
        get isAlive(): boolean;
        get maximized_horizontally(): boolean;
        get maximizedHorizontally(): boolean;
        get maximized_vertically(): boolean;
        get maximizedVertically(): boolean;
        get mini_icon(): any;
        get miniIcon(): any;
        get minimized(): boolean;
        get mutter_hints(): string;
        get mutterHints(): string;
        get on_all_workspaces(): boolean;
        get onAllWorkspaces(): boolean;
        get resizeable(): boolean;
        get skip_taskbar(): boolean;
        get skipTaskbar(): boolean;
        get title(): string;
        get urgent(): boolean;
        get user_time(): number;
        get userTime(): number;
        get window_type(): WindowType;
        get windowType(): WindowType;
        get wm_class(): string;
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

        connect<K extends keyof Window.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Window.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Window.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Window.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Window.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Window.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        activate(current_time: number): void;
        activate_with_workspace(current_time: number, workspace: Workspace): void;
        allows_move(): boolean;
        allows_resize(): boolean;
        begin_grab_op(op: GrabOp | null, frame_action: boolean, timestamp: number): void;
        can_close(): boolean;
        can_maximize(): boolean;
        can_minimize(): boolean;
        can_shade(): boolean;
        change_workspace(workspace: Workspace): void;
        change_workspace_by_index(space_index: number, append: boolean): void;
        check_alive(timestamp: number): void;
        /**
         * Converts a desired bounds of the client window into the corresponding bounds
         * of the window frame (excluding invisible borders and client side shadows.)
         * @param client_rect client rectangle in root coordinates
         */
        client_rect_to_frame_rect(client_rect: Rectangle): Rectangle;
        compute_group(): void;
        ['delete'](timestamp: number): void;
        /**
         * Follow the chain of parents of `window,` skipping transient windows,
         * and return the "root" window which has no non-transient parent.
         * @returns The root ancestor window
         */
        find_root_ancestor(): Window;
        focus(timestamp: number): void;
        /**
         * If `window` is transient, call `func` with the window for which it's transient,
         * repeatedly until either we find a non-transient window, or `func` returns %FALSE.
         * @param func Called for each window which is a transient parent of @window
         */
        foreach_ancestor(func: WindowForeachFunc): void;
        /**
         * Call `func` for every window which is either transient for `window,` or is
         * a transient of a window which is in turn transient for `window`.
         * The order of window enumeration is not defined.
         *
         * Iteration will stop if `func` at any point returns %FALSE.
         * @param func Called for each window which is a transient of @window (transitively)
         */
        foreach_transient(func: WindowForeachFunc): void;
        /**
         * Converts a desired frame bounds for a window into the bounds of the client
         * window.
         * @param frame_rect desired frame bounds for the window
         */
        frame_rect_to_client_rect(frame_rect: Rectangle): Rectangle;
        /**
         * Gets the rectangle that the pixmap or buffer of `window` occupies.
         *
         * For X11 windows, this is the server-side geometry of the toplevel
         * window.
         *
         * For Wayland windows, this is the bounding rectangle of the attached
         * buffer.
         */
        get_buffer_rect(): Rectangle;
        /**
         * Returns name of the client machine from which this windows was created,
         * if known (obtained from the WM_CLIENT_MACHINE property).
         * @returns the machine name, or %NULL; the string is owned by the window manager and should not be freed or modified by the caller.
         */
        get_client_machine(): string | null;
        /**
         * Returns the #MetaWindowClientType of the window.
         * @returns The root ancestor window
         */
        get_client_type(): WindowClientType;
        /**
         * Gets the compositor's wrapper object for `window`.
         * @returns the wrapper object.
         */
        get_compositor_private<T = GObject.Object>(): T;
        get_description(): string;
        get_display(): Display;
        /**
         * Gets a region representing the outer bounds of the window's frame.
         * @returns a #cairo_region_t  holding the outer bounds of the window, or %NULL if the window  doesn't have a frame.
         */
        get_frame_bounds(): cairo.Region | null;
        /**
         * Gets the rectangle that bounds `window` that is what the user thinks of
         * as the edge of the window. This doesn't include any extra reactive
         * area that we or the client adds to the window, or any area that the
         * client adds to draw a client-side shadow.
         */
        get_frame_rect(): Rectangle;
        /**
         * Gets the type of window decorations that should be used for this window.
         * @returns the frame type
         */
        get_frame_type(): FrameType;
        get_gtk_app_menu_object_path(): string | null;
        get_gtk_application_id(): string | null;
        get_gtk_application_object_path(): string | null;
        get_gtk_menubar_object_path(): string | null;
        get_gtk_theme_variant(): string | null;
        get_gtk_unique_bus_name(): string | null;
        get_gtk_window_object_path(): string | null;
        /**
         * Gets the location of the icon corresponding to the window. The location
         * will be provided set by the task bar or other user interface element
         * displaying the icon, and is relative to the root window.
         * @returns %TRUE if the icon geometry was successfully retrieved.
         */
        get_icon_geometry(): [boolean, Rectangle];
        /**
         * Returns the window id associated with window.
         * @returns The window id
         */
        get_id(): number;
        get_layer(): StackLayer;
        /**
         * Gets the current maximization state of the window, as combination
         * of the %META_MAXIMIZE_HORIZONTAL and %META_MAXIMIZE_VERTICAL flags;
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
         * @returns the _MUTTER_HINTS string, or %NULL if no hints are set.
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
         * @returns the sandboxed application ID or %NULL
         */
        get_sandboxed_app_id(): string | null;
        /**
         * The stable sequence number is a monotonicially increasing
         * unique integer assigned to each #MetaWindow upon creation.
         *
         * This number can be useful for sorting windows in a stable
         * fashion.
         * @returns Internal sequence number for this window
         */
        get_stable_sequence(): number;
        /**
         * Gets the startup id of the given #MetaWindow
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
         * @returns the matching tiled window or %NULL if it doesn't exist.
         */
        get_tile_match(): Window | null;
        get_title(): string;
        /**
         * Returns the #MetaWindow for the window that is pointed to by the
         * WM_TRANSIENT_FOR hint on this window (see XGetTransientForHint()
         * or XSetTransientForHint()). Mutter keeps transient windows above their
         * parents. A typical usage of this hint is for a dialog that wants to stay
         * above its associated window.
         * @returns the window this window is transient for, or %NULL if the WM_TRANSIENT_FOR hint is unset or does not point to a toplevel window that Mutter knows about.
         */
        get_transient_for(): Window | null;
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
        get_user_time(): number;
        get_window_type(): WindowType;
        /**
         * Return the current value of the name part of WM_CLASS X property.
         * @returns the current value of the name part of WM_CLASS X property
         */
        get_wm_class(): string | null;
        /**
         * Return the current value of the instance part of WM_CLASS X property.
         * @returns the current value of the instance part of WM_CLASS X property.
         */
        get_wm_class_instance(): string | null;
        /**
         * Get the work area for all monitors for `window`.
         */
        get_work_area_all_monitors(): Rectangle;
        /**
         * Get the work area for the monitor `window` is currently on.
         */
        get_work_area_current_monitor(): Rectangle;
        /**
         * Get the work area for `window,` given the monitor index
         * `which_monitor`.
         * @param which_monitor a moniotr to get the work area for
         */
        get_work_area_for_monitor(which_monitor: number): Rectangle;
        /**
         * Gets the #MetaWorkspace that the window is currently displayed on.
         * If the window is on all workspaces, returns the currently active
         * workspace.
         * @returns the #MetaWorkspace for the window
         */
        get_workspace(): Workspace;
        group_leader_changed(): void;
        /**
         * Tests if `window` has any transients attached to it.
         * (If the "attach_modal_dialogs" option is not enabled, this will
         * always return %FALSE.)
         * @returns whether @window has attached transients
         */
        has_attached_dialogs(): boolean;
        has_focus(): boolean;
        is_above(): boolean;
        is_always_on_all_workspaces(): boolean;
        /**
         * The function determines whether `window` is an ancestor of `transient;` it does
         * so by traversing the `transient'`s ancestors until it either locates `window`
         * or reaches an ancestor that is not transient.
         * @param _transient a #MetaWindow
         * @returns %TRUE if window is an ancestor of transient.
         */
        is_ancestor_of_transient(_transient: Window): boolean;
        /**
         * Tests if `window` should be attached to its parent window.
         * (If the "attach_modal_dialogs" option is not enabled, this will
         * always return %FALSE.)
         * @returns whether @window should be attached to its parent
         */
        is_attached_dialog(): boolean;
        /**
         * Check if if the window has decorations drawn by the client.
         * (window->decorated refers only to whether we should add decorations)
         */
        is_client_decorated(): boolean;
        is_fullscreen(): boolean;
        is_hidden(): boolean;
        is_monitor_sized(): boolean;
        is_on_all_workspaces(): boolean;
        is_on_primary_monitor(): boolean;
        is_override_redirect(): boolean;
        is_remote(): boolean;
        is_screen_sized(): boolean;
        is_shaded(): boolean;
        /**
         * Gets whether this window should be ignored by task lists.
         * @returns %TRUE if the skip bar hint is set.
         */
        is_skip_taskbar(): boolean;
        kill(): void;
        located_on_workspace(workspace: Workspace): boolean;
        lower(): void;
        lower_with_transients(timestamp: number): void;
        make_above(): void;
        make_fullscreen(): void;
        maximize(directions: MaximizeFlags | null): void;
        minimize(): void;
        /**
         * Moves the window to the desired location on window's assigned
         * workspace, using the northwest edge of the frame as the reference,
         * instead of the actual window's origin, but only if a frame is present.
         * Otherwise, acts identically to meta_window_move().
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
         * Moves the window to the monitor with index `monitor,` keeping
         * the relative position of the window's top left corner.
         * @param monitor desired monitor index
         */
        move_to_monitor(monitor: number): void;
        raise(): void;
        set_compositor_private(priv: GObject.Object): void;
        set_demands_attention(): void;
        /**
         * Sets or unsets the location of the icon corresponding to the window. If
         * set, the location should correspond to a dock, task bar or other user
         * interface element displaying the icon, and is relative to the root window.
         * @param rect rectangle with the desired geometry or %NULL.
         */
        set_icon_geometry(rect?: Rectangle | null): void;
        shade(timestamp: number): void;
        shove_titlebar_onscreen(): void;
        showing_on_its_workspace(): boolean;
        shutdown_group(): void;
        stick(): void;
        titlebar_is_onscreen(): boolean;
        unmake_above(): void;
        unmake_fullscreen(): void;
        unmaximize(directions: MaximizeFlags | null): void;
        unminimize(): void;
        unset_demands_attention(): void;
        unshade(timestamp: number): void;
        unstick(): void;
    }

    namespace WindowActor {
        // Signal signatures
        interface SignalSignatures extends Clutter.Actor.SignalSignatures {
            damaged: () => void;
            'effects-completed': () => void;
            'first-frame': () => void;
            thawed: () => void;
            'notify::meta-window': (pspec: GObject.ParamSpec) => void;
            'notify::actions': (pspec: GObject.ParamSpec) => void;
            'notify::allocation': (pspec: GObject.ParamSpec) => void;
            'notify::background-color': (pspec: GObject.ParamSpec) => void;
            'notify::background-color-set': (pspec: GObject.ParamSpec) => void;
            'notify::child-transform': (pspec: GObject.ParamSpec) => void;
            'notify::child-transform-set': (pspec: GObject.ParamSpec) => void;
            'notify::clip-rect': (pspec: GObject.ParamSpec) => void;
            'notify::clip-to-allocation': (pspec: GObject.ParamSpec) => void;
            'notify::constraints': (pspec: GObject.ParamSpec) => void;
            'notify::content': (pspec: GObject.ParamSpec) => void;
            'notify::content-box': (pspec: GObject.ParamSpec) => void;
            'notify::content-gravity': (pspec: GObject.ParamSpec) => void;
            'notify::content-repeat': (pspec: GObject.ParamSpec) => void;
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
            extends Clutter.Actor.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Clutter.Animatable.ConstructorProps,
                Clutter.Container.ConstructorProps,
                Clutter.Scriptable.ConstructorProps {
            meta_window: Window;
            metaWindow: Window;
        }
    }

    abstract class WindowActor
        extends Clutter.Actor
        implements Atk.ImplementorIface, Clutter.Animatable, Clutter.Container, Clutter.Scriptable
    {
        static $gtype: GObject.GType<WindowActor>;

        // Properties

        get meta_window(): Window;
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

        connect<K extends keyof WindowActor.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WindowActor.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof WindowActor.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WindowActor.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof WindowActor.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<WindowActor.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Freezes the #MetaWindowActor, which inhibits updates and geometry
         * changes of the window. This property is refcounted, so make sure
         * to call meta_window_actor_thaw() the exact same amount of times
         * as this function to allow updates again.
         */
        freeze(): void;
        /**
         * Flattens the layers of `self` into one ARGB32 image by alpha blending
         * the images, and returns the flattened image.
         * @param clip A clipping rectangle, to help prevent extra processing. In the case that the clipping rectangle is partially or fully outside the bounds of the actor, the rectangle will be clipped.
         * @returns a new cairo surface to be freed with cairo_surface_destroy().
         */
        get_image(clip?: cairo.RectangleInt | null): cairo.Surface | null;
        /**
         * Gets the #MetaWindow object that the the #MetaWindowActor is displaying
         * @returns the displayed #MetaWindow
         */
        get_meta_window(): Window;
        /**
         * Gets the ClutterActor that is used to display the contents of the window,
         * or NULL if no texture is shown yet, because the window is not mapped.
         * @returns the #ClutterActor for the contents
         */
        get_texture(): ShapedTexture;
        /**
         * Gets whether the X window that the actor was displaying has been destroyed
         * @returns %TRUE when the window is destroyed, otherwise %FALSE
         */
        is_destroyed(): boolean;
        paint_to_content(clip?: Rectangle | null): Clutter.Content | null;
        sync_visibility(): void;
        /**
         * Thaws/unfreezes the #MetaWindowActor to allow updates and geometry
         * changes after a window was frozen using meta_window_actor_freeze().
         */
        thaw(): void;

        // Inherited methods
        /**
         * Finds the #GParamSpec for `property_name`
         * @param property_name the name of the animatable property to find
         * @returns The #GParamSpec for the given property   or %NULL
         */
        find_property(property_name: string): GObject.ParamSpec;
        /**
         * Get animated actor.
         * @returns a #ClutterActor
         */
        get_actor(): Clutter.Actor;
        /**
         * Retrieves the current state of `property_name` and sets `value` with it
         * @param property_name the name of the animatable property to retrieve
         * @param value a #GValue initialized to the type of the property to retrieve
         */
        get_initial_state(property_name: string, value: GObject.Value | any): void;
        /**
         * Asks a #ClutterAnimatable implementation to interpolate a
         * a named property between the initial and final values of
         * a #ClutterInterval, using `progress` as the interpolation
         * value, and store the result inside `value`.
         *
         * This function should be used for every property animation
         * involving #ClutterAnimatable<!-- -->s.
         *
         * This function replaces clutter_animatable_animate_property().
         * @param property_name the name of the property to interpolate
         * @param interval a #ClutterInterval with the animation range
         * @param progress the progress to use to interpolate between the   initial and final values of the @interval
         * @returns %TRUE if the interpolation was successful,   and %FALSE otherwise
         */
        interpolate_value(property_name: string, interval: Clutter.Interval, progress: number): [boolean, unknown];
        /**
         * Sets the current state of `property_name` to `value`
         * @param property_name the name of the animatable property to set
         * @param value the value of the animatable property to set
         */
        set_final_state(property_name: string, value: GObject.Value | any): void;
        /**
         * Finds the #GParamSpec for `property_name`
         * @param property_name the name of the animatable property to find
         */
        vfunc_find_property(property_name: string): GObject.ParamSpec;
        /**
         * Get animated actor.
         */
        vfunc_get_actor(): Clutter.Actor;
        /**
         * Retrieves the current state of `property_name` and sets `value` with it
         * @param property_name the name of the animatable property to retrieve
         * @param value a #GValue initialized to the type of the property to retrieve
         */
        vfunc_get_initial_state(property_name: string, value: GObject.Value | any): void;
        /**
         * Asks a #ClutterAnimatable implementation to interpolate a
         * a named property between the initial and final values of
         * a #ClutterInterval, using `progress` as the interpolation
         * value, and store the result inside `value`.
         *
         * This function should be used for every property animation
         * involving #ClutterAnimatable<!-- -->s.
         *
         * This function replaces clutter_animatable_animate_property().
         * @param property_name the name of the property to interpolate
         * @param interval a #ClutterInterval with the animation range
         * @param progress the progress to use to interpolate between the   initial and final values of the @interval
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
         */
        vfunc_set_final_state(property_name: string, value: GObject.Value | any): void;
        /**
         * Adds a #ClutterActor to `container`. This function will emit the
         * "actor-added" signal. The actor should be parented to
         * `container`. You cannot add a #ClutterActor to more than one
         * #ClutterContainer.
         *
         * This function will call #ClutterContainerIface.add(), which is a
         * deprecated virtual function. The default implementation will
         * call clutter_actor_add_child().
         * @param actor the first #ClutterActor to add
         */
        add_actor(actor: Clutter.Actor): void;
        /**
         * Gets a container specific property of a child of `container,` In general,
         * a copy is made of the property contents and the caller is responsible for
         * freeing the memory by calling g_value_unset().
         *
         * Note that clutter_container_child_set_property() is really intended for
         * language bindings, clutter_container_child_set() is much more convenient
         * for C programming.
         * @param child a #ClutterActor that is a child of @container.
         * @param property the name of the property to set.
         * @param value the value.
         */
        child_get_property(child: Clutter.Actor, property: string, value: GObject.Value | any): void;
        /**
         * Calls the #ClutterContainerIface.child_notify() virtual function
         * of #ClutterContainer. The default implementation will emit the
         * #ClutterContainer::child-notify signal.
         * @param child a #ClutterActor
         * @param pspec a #GParamSpec
         */
        child_notify(child: Clutter.Actor, pspec: GObject.ParamSpec): void;
        /**
         * Sets a container-specific property on a child of `container`.
         * @param child a #ClutterActor that is a child of @container.
         * @param property the name of the property to set.
         * @param value the value.
         */
        child_set_property(child: Clutter.Actor, property: string, value: GObject.Value | any): void;
        /**
         * Creates the #ClutterChildMeta wrapping `actor` inside the
         * `container,` if the #ClutterContainerIface::child_meta_type
         * class member is not set to %G_TYPE_INVALID.
         *
         * This function is only useful when adding a #ClutterActor to
         * a #ClutterContainer implementation outside of the
         * #ClutterContainer::add() virtual function implementation.
         *
         * Applications should not call this function.
         * @param actor a #ClutterActor
         */
        create_child_meta(actor: Clutter.Actor): void;
        /**
         * Destroys the #ClutterChildMeta wrapping `actor` inside the
         * `container,` if any.
         *
         * This function is only useful when removing a #ClutterActor to
         * a #ClutterContainer implementation outside of the
         * #ClutterContainer::add() virtual function implementation.
         *
         * Applications should not call this function.
         * @param actor a #ClutterActor
         */
        destroy_child_meta(actor: Clutter.Actor): void;
        /**
         * Finds a child actor of a container by its name. Search recurses
         * into any child container.
         * @param child_name the name of the requested child.
         * @returns The child actor with the requested name,   or %NULL if no actor with that name was found.
         */
        find_child_by_name(child_name: string): Clutter.Actor;
        /**
         * Retrieves the #ClutterChildMeta which contains the data about the
         * `container` specific state for `actor`.
         * @param actor a #ClutterActor that is a child of @container.
         * @returns the #ClutterChildMeta for the @actor child   of @container or %NULL if the specifiec actor does not exist or the   container is not configured to provide #ClutterChildMeta<!-- -->s
         */
        get_child_meta(actor: Clutter.Actor): Clutter.ChildMeta;
        /**
         * Removes `actor` from `container`. The actor should be unparented, so
         * if you want to keep it around you must hold a reference to it
         * yourself, using g_object_ref(). When the actor has been removed,
         * the "actor-removed" signal is emitted by `container`.
         *
         * This function will call #ClutterContainerIface.remove(), which is a
         * deprecated virtual function. The default implementation will call
         * clutter_actor_remove_child().
         * @param actor a #ClutterActor
         */
        remove_actor(actor: Clutter.Actor): void;
        vfunc_actor_added(actor: Clutter.Actor): void;
        vfunc_actor_removed(actor: Clutter.Actor): void;
        /**
         * Adds a #ClutterActor to `container`. This function will emit the
         * "actor-added" signal. The actor should be parented to
         * `container`. You cannot add a #ClutterActor to more than one
         * #ClutterContainer.
         *
         * This function will call #ClutterContainerIface.add(), which is a
         * deprecated virtual function. The default implementation will
         * call clutter_actor_add_child().
         * @param actor the first #ClutterActor to add
         */
        vfunc_add(actor: Clutter.Actor): void;
        /**
         * Calls the #ClutterContainerIface.child_notify() virtual function
         * of #ClutterContainer. The default implementation will emit the
         * #ClutterContainer::child-notify signal.
         * @param child a #ClutterActor
         * @param pspec a #GParamSpec
         */
        vfunc_child_notify(child: Clutter.Actor, pspec: GObject.ParamSpec): void;
        /**
         * Creates the #ClutterChildMeta wrapping `actor` inside the
         * `container,` if the #ClutterContainerIface::child_meta_type
         * class member is not set to %G_TYPE_INVALID.
         *
         * This function is only useful when adding a #ClutterActor to
         * a #ClutterContainer implementation outside of the
         * #ClutterContainer::add() virtual function implementation.
         *
         * Applications should not call this function.
         * @param actor a #ClutterActor
         */
        vfunc_create_child_meta(actor: Clutter.Actor): void;
        /**
         * Destroys the #ClutterChildMeta wrapping `actor` inside the
         * `container,` if any.
         *
         * This function is only useful when removing a #ClutterActor to
         * a #ClutterContainer implementation outside of the
         * #ClutterContainer::add() virtual function implementation.
         *
         * Applications should not call this function.
         * @param actor a #ClutterActor
         */
        vfunc_destroy_child_meta(actor: Clutter.Actor): void;
        /**
         * Retrieves the #ClutterChildMeta which contains the data about the
         * `container` specific state for `actor`.
         * @param actor a #ClutterActor that is a child of @container.
         */
        vfunc_get_child_meta(actor: Clutter.Actor): Clutter.ChildMeta;
        /**
         * Removes `actor` from `container`. The actor should be unparented, so
         * if you want to keep it around you must hold a reference to it
         * yourself, using g_object_ref(). When the actor has been removed,
         * the "actor-removed" signal is emitted by `container`.
         *
         * This function will call #ClutterContainerIface.remove(), which is a
         * deprecated virtual function. The default implementation will call
         * clutter_actor_remove_child().
         * @param actor a #ClutterActor
         */
        vfunc_remove(actor: Clutter.Actor): void;
        /**
         * Retrieves the id of `scriptable` set using clutter_scriptable_set_id().
         * @returns the id of the object. The returned string is owned by   the scriptable object and should never be modified of freed
         */
        get_id(): string;
        /**
         * Parses the passed JSON node. The implementation must set the type
         * of the passed #GValue pointer using g_value_init().
         * @param script the #ClutterScript creating the scriptable instance
         * @param value the generic value to be set
         * @param name the name of the node
         * @param node the JSON node to be parsed
         * @returns %TRUE if the node was successfully parsed, %FALSE otherwise.
         */
        parse_custom_node(script: Clutter.Script, value: GObject.Value | any, name: string, node: Json.Node): boolean;
        /**
         * Overrides the common properties setting. The underlying virtual
         * function should be used when implementing custom properties.
         * @param script the #ClutterScript creating the scriptable instance
         * @param name the name of the property
         * @param value the value of the property
         */
        set_custom_property(script: Clutter.Script, name: string, value: GObject.Value | any): void;
        /**
         * Sets `id_` as the unique Clutter script it for this instance of
         * #ClutterScriptableIface.
         *
         * This name can be used by user interface designer applications to
         * define a unique name for an object constructable using the UI
         * definition language parsed by #ClutterScript.
         * @param id_ the #ClutterScript id of the object
         */
        set_id(id_: string): void;
        /**
         * Retrieves the id of `scriptable` set using clutter_scriptable_set_id().
         */
        vfunc_get_id(): string;
        /**
         * Parses the passed JSON node. The implementation must set the type
         * of the passed #GValue pointer using g_value_init().
         * @param script the #ClutterScript creating the scriptable instance
         * @param value the generic value to be set
         * @param name the name of the node
         * @param node the JSON node to be parsed
         */
        vfunc_parse_custom_node(
            script: Clutter.Script,
            value: GObject.Value | any,
            name: string,
            node: Json.Node,
        ): boolean;
        /**
         * Overrides the common properties setting. The underlying virtual
         * function should be used when implementing custom properties.
         * @param script the #ClutterScript creating the scriptable instance
         * @param name the name of the property
         * @param value the value of the property
         */
        vfunc_set_custom_property(script: Clutter.Script, name: string, value: GObject.Value | any): void;
        /**
         * Sets `id_` as the unique Clutter script it for this instance of
         * #ClutterScriptableIface.
         *
         * This name can be used by user interface designer applications to
         * define a unique name for an object constructable using the UI
         * definition language parsed by #ClutterScript.
         * @param id_ the #ClutterScript id of the object
         */
        vfunc_set_id(id_: string): void;
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
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
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
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
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
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
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
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
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
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
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
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
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
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
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
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
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
            'notify::actions': (pspec: GObject.ParamSpec) => void;
            'notify::allocation': (pspec: GObject.ParamSpec) => void;
            'notify::background-color': (pspec: GObject.ParamSpec) => void;
            'notify::background-color-set': (pspec: GObject.ParamSpec) => void;
            'notify::child-transform': (pspec: GObject.ParamSpec) => void;
            'notify::child-transform-set': (pspec: GObject.ParamSpec) => void;
            'notify::clip-rect': (pspec: GObject.ParamSpec) => void;
            'notify::clip-to-allocation': (pspec: GObject.ParamSpec) => void;
            'notify::constraints': (pspec: GObject.ParamSpec) => void;
            'notify::content': (pspec: GObject.ParamSpec) => void;
            'notify::content-box': (pspec: GObject.ParamSpec) => void;
            'notify::content-gravity': (pspec: GObject.ParamSpec) => void;
            'notify::content-repeat': (pspec: GObject.ParamSpec) => void;
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
            extends Clutter.Actor.ConstructorProps,
                Atk.ImplementorIface.ConstructorProps,
                Clutter.Animatable.ConstructorProps,
                Clutter.Container.ConstructorProps,
                Clutter.Scriptable.ConstructorProps {}
    }

    class WindowGroup
        extends Clutter.Actor
        implements Atk.ImplementorIface, Clutter.Animatable, Clutter.Container, Clutter.Scriptable
    {
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

        connect<K extends keyof WindowGroup.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WindowGroup.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof WindowGroup.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WindowGroup.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof WindowGroup.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<WindowGroup.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Inherited methods
        /**
         * Finds the #GParamSpec for `property_name`
         * @param property_name the name of the animatable property to find
         * @returns The #GParamSpec for the given property   or %NULL
         */
        find_property(property_name: string): GObject.ParamSpec;
        /**
         * Get animated actor.
         * @returns a #ClutterActor
         */
        get_actor(): Clutter.Actor;
        /**
         * Retrieves the current state of `property_name` and sets `value` with it
         * @param property_name the name of the animatable property to retrieve
         * @param value a #GValue initialized to the type of the property to retrieve
         */
        get_initial_state(property_name: string, value: GObject.Value | any): void;
        /**
         * Asks a #ClutterAnimatable implementation to interpolate a
         * a named property between the initial and final values of
         * a #ClutterInterval, using `progress` as the interpolation
         * value, and store the result inside `value`.
         *
         * This function should be used for every property animation
         * involving #ClutterAnimatable<!-- -->s.
         *
         * This function replaces clutter_animatable_animate_property().
         * @param property_name the name of the property to interpolate
         * @param interval a #ClutterInterval with the animation range
         * @param progress the progress to use to interpolate between the   initial and final values of the @interval
         * @returns %TRUE if the interpolation was successful,   and %FALSE otherwise
         */
        interpolate_value(property_name: string, interval: Clutter.Interval, progress: number): [boolean, unknown];
        /**
         * Sets the current state of `property_name` to `value`
         * @param property_name the name of the animatable property to set
         * @param value the value of the animatable property to set
         */
        set_final_state(property_name: string, value: GObject.Value | any): void;
        /**
         * Finds the #GParamSpec for `property_name`
         * @param property_name the name of the animatable property to find
         */
        vfunc_find_property(property_name: string): GObject.ParamSpec;
        /**
         * Get animated actor.
         */
        vfunc_get_actor(): Clutter.Actor;
        /**
         * Retrieves the current state of `property_name` and sets `value` with it
         * @param property_name the name of the animatable property to retrieve
         * @param value a #GValue initialized to the type of the property to retrieve
         */
        vfunc_get_initial_state(property_name: string, value: GObject.Value | any): void;
        /**
         * Asks a #ClutterAnimatable implementation to interpolate a
         * a named property between the initial and final values of
         * a #ClutterInterval, using `progress` as the interpolation
         * value, and store the result inside `value`.
         *
         * This function should be used for every property animation
         * involving #ClutterAnimatable<!-- -->s.
         *
         * This function replaces clutter_animatable_animate_property().
         * @param property_name the name of the property to interpolate
         * @param interval a #ClutterInterval with the animation range
         * @param progress the progress to use to interpolate between the   initial and final values of the @interval
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
         */
        vfunc_set_final_state(property_name: string, value: GObject.Value | any): void;
        /**
         * Adds a #ClutterActor to `container`. This function will emit the
         * "actor-added" signal. The actor should be parented to
         * `container`. You cannot add a #ClutterActor to more than one
         * #ClutterContainer.
         *
         * This function will call #ClutterContainerIface.add(), which is a
         * deprecated virtual function. The default implementation will
         * call clutter_actor_add_child().
         * @param actor the first #ClutterActor to add
         */
        add_actor(actor: Clutter.Actor): void;
        /**
         * Gets a container specific property of a child of `container,` In general,
         * a copy is made of the property contents and the caller is responsible for
         * freeing the memory by calling g_value_unset().
         *
         * Note that clutter_container_child_set_property() is really intended for
         * language bindings, clutter_container_child_set() is much more convenient
         * for C programming.
         * @param child a #ClutterActor that is a child of @container.
         * @param property the name of the property to set.
         * @param value the value.
         */
        child_get_property(child: Clutter.Actor, property: string, value: GObject.Value | any): void;
        /**
         * Calls the #ClutterContainerIface.child_notify() virtual function
         * of #ClutterContainer. The default implementation will emit the
         * #ClutterContainer::child-notify signal.
         * @param child a #ClutterActor
         * @param pspec a #GParamSpec
         */
        child_notify(child: Clutter.Actor, pspec: GObject.ParamSpec): void;
        /**
         * Sets a container-specific property on a child of `container`.
         * @param child a #ClutterActor that is a child of @container.
         * @param property the name of the property to set.
         * @param value the value.
         */
        child_set_property(child: Clutter.Actor, property: string, value: GObject.Value | any): void;
        /**
         * Creates the #ClutterChildMeta wrapping `actor` inside the
         * `container,` if the #ClutterContainerIface::child_meta_type
         * class member is not set to %G_TYPE_INVALID.
         *
         * This function is only useful when adding a #ClutterActor to
         * a #ClutterContainer implementation outside of the
         * #ClutterContainer::add() virtual function implementation.
         *
         * Applications should not call this function.
         * @param actor a #ClutterActor
         */
        create_child_meta(actor: Clutter.Actor): void;
        /**
         * Destroys the #ClutterChildMeta wrapping `actor` inside the
         * `container,` if any.
         *
         * This function is only useful when removing a #ClutterActor to
         * a #ClutterContainer implementation outside of the
         * #ClutterContainer::add() virtual function implementation.
         *
         * Applications should not call this function.
         * @param actor a #ClutterActor
         */
        destroy_child_meta(actor: Clutter.Actor): void;
        /**
         * Finds a child actor of a container by its name. Search recurses
         * into any child container.
         * @param child_name the name of the requested child.
         * @returns The child actor with the requested name,   or %NULL if no actor with that name was found.
         */
        find_child_by_name(child_name: string): Clutter.Actor;
        /**
         * Retrieves the #ClutterChildMeta which contains the data about the
         * `container` specific state for `actor`.
         * @param actor a #ClutterActor that is a child of @container.
         * @returns the #ClutterChildMeta for the @actor child   of @container or %NULL if the specifiec actor does not exist or the   container is not configured to provide #ClutterChildMeta<!-- -->s
         */
        get_child_meta(actor: Clutter.Actor): Clutter.ChildMeta;
        /**
         * Removes `actor` from `container`. The actor should be unparented, so
         * if you want to keep it around you must hold a reference to it
         * yourself, using g_object_ref(). When the actor has been removed,
         * the "actor-removed" signal is emitted by `container`.
         *
         * This function will call #ClutterContainerIface.remove(), which is a
         * deprecated virtual function. The default implementation will call
         * clutter_actor_remove_child().
         * @param actor a #ClutterActor
         */
        remove_actor(actor: Clutter.Actor): void;
        vfunc_actor_added(actor: Clutter.Actor): void;
        vfunc_actor_removed(actor: Clutter.Actor): void;
        /**
         * Adds a #ClutterActor to `container`. This function will emit the
         * "actor-added" signal. The actor should be parented to
         * `container`. You cannot add a #ClutterActor to more than one
         * #ClutterContainer.
         *
         * This function will call #ClutterContainerIface.add(), which is a
         * deprecated virtual function. The default implementation will
         * call clutter_actor_add_child().
         * @param actor the first #ClutterActor to add
         */
        vfunc_add(actor: Clutter.Actor): void;
        /**
         * Calls the #ClutterContainerIface.child_notify() virtual function
         * of #ClutterContainer. The default implementation will emit the
         * #ClutterContainer::child-notify signal.
         * @param child a #ClutterActor
         * @param pspec a #GParamSpec
         */
        vfunc_child_notify(child: Clutter.Actor, pspec: GObject.ParamSpec): void;
        /**
         * Creates the #ClutterChildMeta wrapping `actor` inside the
         * `container,` if the #ClutterContainerIface::child_meta_type
         * class member is not set to %G_TYPE_INVALID.
         *
         * This function is only useful when adding a #ClutterActor to
         * a #ClutterContainer implementation outside of the
         * #ClutterContainer::add() virtual function implementation.
         *
         * Applications should not call this function.
         * @param actor a #ClutterActor
         */
        vfunc_create_child_meta(actor: Clutter.Actor): void;
        /**
         * Destroys the #ClutterChildMeta wrapping `actor` inside the
         * `container,` if any.
         *
         * This function is only useful when removing a #ClutterActor to
         * a #ClutterContainer implementation outside of the
         * #ClutterContainer::add() virtual function implementation.
         *
         * Applications should not call this function.
         * @param actor a #ClutterActor
         */
        vfunc_destroy_child_meta(actor: Clutter.Actor): void;
        /**
         * Retrieves the #ClutterChildMeta which contains the data about the
         * `container` specific state for `actor`.
         * @param actor a #ClutterActor that is a child of @container.
         */
        vfunc_get_child_meta(actor: Clutter.Actor): Clutter.ChildMeta;
        /**
         * Removes `actor` from `container`. The actor should be unparented, so
         * if you want to keep it around you must hold a reference to it
         * yourself, using g_object_ref(). When the actor has been removed,
         * the "actor-removed" signal is emitted by `container`.
         *
         * This function will call #ClutterContainerIface.remove(), which is a
         * deprecated virtual function. The default implementation will call
         * clutter_actor_remove_child().
         * @param actor a #ClutterActor
         */
        vfunc_remove(actor: Clutter.Actor): void;
        /**
         * Retrieves the id of `scriptable` set using clutter_scriptable_set_id().
         * @returns the id of the object. The returned string is owned by   the scriptable object and should never be modified of freed
         */
        get_id(): string;
        /**
         * Parses the passed JSON node. The implementation must set the type
         * of the passed #GValue pointer using g_value_init().
         * @param script the #ClutterScript creating the scriptable instance
         * @param value the generic value to be set
         * @param name the name of the node
         * @param node the JSON node to be parsed
         * @returns %TRUE if the node was successfully parsed, %FALSE otherwise.
         */
        parse_custom_node(script: Clutter.Script, value: GObject.Value | any, name: string, node: Json.Node): boolean;
        /**
         * Overrides the common properties setting. The underlying virtual
         * function should be used when implementing custom properties.
         * @param script the #ClutterScript creating the scriptable instance
         * @param name the name of the property
         * @param value the value of the property
         */
        set_custom_property(script: Clutter.Script, name: string, value: GObject.Value | any): void;
        /**
         * Sets `id_` as the unique Clutter script it for this instance of
         * #ClutterScriptableIface.
         *
         * This name can be used by user interface designer applications to
         * define a unique name for an object constructable using the UI
         * definition language parsed by #ClutterScript.
         * @param id_ the #ClutterScript id of the object
         */
        set_id(id_: string): void;
        /**
         * Retrieves the id of `scriptable` set using clutter_scriptable_set_id().
         */
        vfunc_get_id(): string;
        /**
         * Parses the passed JSON node. The implementation must set the type
         * of the passed #GValue pointer using g_value_init().
         * @param script the #ClutterScript creating the scriptable instance
         * @param value the generic value to be set
         * @param name the name of the node
         * @param node the JSON node to be parsed
         */
        vfunc_parse_custom_node(
            script: Clutter.Script,
            value: GObject.Value | any,
            name: string,
            node: Json.Node,
        ): boolean;
        /**
         * Overrides the common properties setting. The underlying virtual
         * function should be used when implementing custom properties.
         * @param script the #ClutterScript creating the scriptable instance
         * @param name the name of the property
         * @param value the value of the property
         */
        vfunc_set_custom_property(script: Clutter.Script, name: string, value: GObject.Value | any): void;
        /**
         * Sets `id_` as the unique Clutter script it for this instance of
         * #ClutterScriptableIface.
         *
         * This name can be used by user interface designer applications to
         * define a unique name for an object constructable using the UI
         * definition language parsed by #ClutterScript.
         * @param id_ the #ClutterScript id of the object
         */
        vfunc_set_id(id_: string): void;
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
         * Will result in the "sensitive" property of the widget #GObject instance to be
         * updated with the same value of the "active" property of the action #GObject
         * instance.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call g_object_unref() on the returned
         * #GBinding instance.
         *
         * Removing the binding by calling g_object_unref() on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use g_binding_unbind() instead to be on the safe side.
         *
         * A #GObject can have multiple bindings.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of g_object_bind_property().
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target,` allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the #GBinding instance; if you want to hold on to the
         * #GBinding instance, you will need to hold a reference to it.
         *
         * To remove the binding, call g_binding_unbind().
         *
         * A #GObject can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * g_object_bind_property_with_closures() instead.
         * @param source_property the property on @source to bind
         * @param target the target #GObject
         * @param target_property the property on @target to bind
         * @param flags flags to pass to #GBinding
         * @param transform_to the transformation function     from the @source to the @target, or %NULL to use the default
         * @param transform_from the transformation function     from the @target to the @source, or %NULL to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or %NULL if not required
         * @returns the #GBinding instance representing the     binding between the two #GObject instances. The binding is released     whenever the #GBinding reference count reaches zero.
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
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for #GObject implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all #GInitiallyUnowneds are created with a floating reference
         * which usually just needs to be sunken by calling g_object_ref_sink().
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * #GObject::notify signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see g_object_set_data()).
         * @param key name of the key for that association
         * @returns the data if found,          or %NULL if no such data exists.
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
         * g_object_set_qdata().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
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
         * @returns %TRUE if @object has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param property_name the name of a property installed on the class of @object.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * g_object_notify().
         *
         * One way to avoid using g_object_notify() from within the
         * class that registered the properties, and using g_object_notify_by_pspec()
         * instead, is to store the GParamSpec used with
         * g_object_class_install_property() inside a static array, e.g.:
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
         * @param pspec the #GParamSpec of a property installed on the class of @object.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC typeof()
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same @object
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object,` and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for g_object_ref().
         * @returns @object
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
         * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the #GQuark storage growing unbounded.
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
         * @returns the data if found, or %NULL          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * g_object_set_qdata() and removes the `data` from object
         * without invoking its destroy() function (if any was
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
         * Using g_object_get_qdata() in the above example, instead of
         * g_object_steal_qdata() would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * g_object_set_qdata_full().
         * @param quark A #GQuark, naming the user data pointer
         * @returns The user data pointer set, or %NULL
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * g_object_freeze_notify(). The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * #GObject::notify signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the #GObject may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to %NULL rather than retain a dangling pointer to a potentially
         * invalid #GObject instance. Use g_clear_object() for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling g_closure_invalidate() on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
         * added as marshal guards to the `closure,` to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure #GClosure to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by g_object_new() as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use g_object_notify_by_pspec()
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * g_object_freeze_notify(). In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when g_object_thaw_notify() is
         * called.
         * @param pspec
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
            'window-added': (arg0: Window) => void;
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

    class Workspace extends GObject.Object {
        static $gtype: GObject.GType<Workspace>;

        // Properties

        get active(): boolean;
        get n_windows(): number;
        get nWindows(): number;
        get workspace_index(): number;
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

        connect<K extends keyof Workspace.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Workspace.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof Workspace.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Workspace.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof Workspace.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Workspace.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        activate(timestamp: number): void;
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
         * @param timestamp timestamp for @focus_this
         */
        activate_with_focus(focus_this: Window, timestamp: number): void;
        /**
         * Gets the #MetaDisplay that the workspace is part of.
         * @returns the #MetaDisplay for the workspace
         */
        get_display(): Display;
        /**
         * Calculate and retrieve the workspace that is next to `workspace,`
         * according to `direction` and the current workspace layout, as set
         * by meta_screen_override_workspace_layout().
         * @param direction a #MetaMotionDirection, relative to @workspace
         * @returns the workspace next to @workspace, or   @workspace itself if the neighbor would be outside the layout
         */
        get_neighbor(direction: MotionDirection | null): Workspace;
        /**
         * Stores the work area in `area`.
         */
        get_work_area_all_monitors(): Rectangle;
        /**
         * Stores the work area for `which_monitor` on `workspace`
         * in `area`.
         * @param which_monitor a monitor index
         */
        get_work_area_for_monitor(which_monitor: number): Rectangle;
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
         * @param struts list of #MetaStrut
         */
        set_builtin_struts(struts: Strut[]): void;
    }

    namespace WorkspaceManager {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'active-workspace-changed': () => void;
            'showing-desktop-changed': () => void;
            'workspace-added': (arg0: number) => void;
            'workspace-removed': (arg0: number) => void;
            'workspace-switched': (arg0: number, arg1: number, arg2: MotionDirection) => void;
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

    class WorkspaceManager extends GObject.Object {
        static $gtype: GObject.GType<WorkspaceManager>;

        // Properties

        get layout_columns(): number;
        get layoutColumns(): number;
        get layout_rows(): number;
        get layoutRows(): number;
        get n_workspaces(): number;
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

        connect<K extends keyof WorkspaceManager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WorkspaceManager.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof WorkspaceManager.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WorkspaceManager.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof WorkspaceManager.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<WorkspaceManager.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Append a new workspace to the workspace manager and (optionally) switch to that
         * display.
         * @param activate %TRUE if the workspace should be switched to after creation
         * @param timestamp if switching to a new workspace, timestamp to be used when   focusing a window on the new workspace. (Doesn't hurt to pass a valid   timestamp when available even if not switching workspaces.)
         * @returns the newly appended workspace.
         */
        append_new_workspace(activate: boolean, timestamp: number): Workspace;
        get_active_workspace(): Workspace;
        get_active_workspace_index(): number;
        get_n_workspaces(): number;
        /**
         * Gets the workspace object for one of a workspace manager's workspaces given the workspace
         * index. It's valid to call this function with an out-of-range index and it
         * will robustly return %NULL.
         * @param index index of one of the display's workspaces
         * @returns the workspace object with specified   index, or %NULL if the index is out of range.
         */
        get_workspace_by_index(index: number): Workspace | null;
        /**
         * Explicitly set the layout of workspaces. Once this has been called, the contents of the
         * _NET_DESKTOP_LAYOUT property on the root window are completely ignored.
         * @param starting_corner the corner at which the first workspace is found
         * @param vertical_layout if %TRUE the workspaces are laid out in columns rather than rows
         * @param n_rows number of rows of workspaces, or -1 to determine the number of rows from   @n_columns and the total number of workspaces
         * @param n_columns number of columns of workspaces, or -1 to determine the number of columns from   @n_rows and the total number of workspaces
         */
        override_workspace_layout(
            starting_corner: DisplayCorner | null,
            vertical_layout: boolean,
            n_rows: number,
            n_columns: number,
        ): void;
        remove_workspace(workspace: Workspace, timestamp: number): void;
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
        reorder_workspace(workspace: Workspace, new_index: number): void;
    }

    namespace X11Display {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {}

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {}
    }

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

        connect<K extends keyof X11Display.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, X11Display.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        connect_after<K extends keyof X11Display.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, X11Display.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        emit<K extends keyof X11Display.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<X11Display.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        clear_stage_input_region(): void;
        get_damage_event_base(): number;
        get_screen_number(): number;
        get_shape_event_base(): number;
        has_shape(): boolean;
        set_cm_selection(): void;
        set_stage_input_region(region: xfixes.XserverRegion): void;
        xwindow_is_a_no_focus_window(xwindow: xlib.Window): boolean;
    }

    type BackendClass = typeof Backend;
    type BackgroundActorClass = typeof BackgroundActor;
    type BackgroundClass = typeof Background;
    type BackgroundContentClass = typeof BackgroundContent;
    type BackgroundGroupClass = typeof BackgroundGroup;
    type BackgroundImageCacheClass = typeof BackgroundImageCache;
    type BackgroundImageClass = typeof BackgroundImage;
    type BarrierClass = typeof Barrier;
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
        _init(...args: any[]): void;
    }

    abstract class BarrierPrivate {
        static $gtype: GObject.GType<BarrierPrivate>;

        // Constructors

        _init(...args: any[]): void;
    }

    class ButtonLayout {
        static $gtype: GObject.GType<ButtonLayout>;

        // Fields

        left_buttons: ButtonFunction[];
        left_buttons_has_spacer: boolean[];
        right_buttons: ButtonFunction[];
        right_buttons_has_spacer: boolean[];

        // Constructors

        _init(...args: any[]): void;
    }

    type CloseDialogInterface = typeof CloseDialog;
    type ContextClass = typeof Context;
    type CursorTrackerClass = typeof CursorTracker;
    type DisplayClass = typeof Display;
    type DndClass = typeof Dnd;
    class Edge {
        static $gtype: GObject.GType<Edge>;

        // Fields

        rect: Rectangle;
        side_type: Side;
        edge_type: EdgeType;

        // Constructors

        _init(...args: any[]): void;
    }

    abstract class Frame {
        static $gtype: GObject.GType<Frame>;

        // Constructors

        _init(...args: any[]): void;
    }

    class FrameBorders {
        static $gtype: GObject.GType<FrameBorders>;

        // Fields

        visible: Gtk.Border;
        invisible: Gtk.Border;
        total: Gtk.Border;

        // Constructors

        constructor(
            properties?: Partial<{
                visible: Gtk.Border;
                invisible: Gtk.Border;
                total: Gtk.Border;
            }>,
        );
        _init(...args: any[]): void;

        // Methods

        clear(): void;
    }

    type IdleMonitorClass = typeof IdleMonitor;
    type InhibitShortcutsDialogInterface = typeof InhibitShortcutsDialog;
    class KeyBinding {
        static $gtype: GObject.GType<KeyBinding>;

        // Constructors

        _init(...args: any[]): void;

        // Methods

        get_mask(): number;
        get_modifiers(): VirtualModifier;
        get_name(): string;
        is_builtin(): boolean;
        is_reversed(): boolean;
    }

    abstract class Laters {
        static $gtype: GObject.GType<Laters>;

        // Constructors

        _init(...args: any[]): void;

        // Methods

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
        add(when: LaterType | null, func: GLib.SourceFunc): number;
        /**
         * Removes a callback added with meta_later_add()
         * @param later_id the integer ID returned from meta_later_add()
         */
        remove(later_id: number): void;
    }

    type LaunchContextClass = typeof LaunchContext;
    type MonitorManagerClass = typeof MonitorManager;
    type PluginClass = typeof Plugin;
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
        _init(...args: any[]): void;
    }

    class Rectangle {
        static $gtype: GObject.GType<Rectangle>;

        // Fields

        x: number;
        y: number;
        width: number;
        height: number;

        // Constructors

        constructor(
            properties?: Partial<{
                x: number;
                y: number;
                width: number;
                height: number;
            }>,
        );
        _init(...args: any[]): void;

        // Methods

        area(): number;
        contains_rect(inner_rect: Rectangle): boolean;
        copy(): Rectangle;
        could_fit_rect(inner_rect: Rectangle): boolean;
        equal(src2: Rectangle): boolean;
        free(): void;
        horiz_overlap(rect2: Rectangle): boolean;
        intersect(src2: Rectangle): [boolean, Rectangle];
        overlap(rect2: Rectangle): boolean;
        union(rect2: Rectangle): Rectangle;
        vert_overlap(rect2: Rectangle): boolean;
    }

    type RemoteAccessControllerClass = typeof RemoteAccessController;
    type RemoteAccessHandleClass = typeof RemoteAccessHandle;
    type SelectionClass = typeof Selection;
    type SelectionSourceClass = typeof SelectionSource;
    type SelectionSourceMemoryClass = typeof SelectionSourceMemory;
    abstract class Settings {
        static $gtype: GObject.GType<Settings>;

        // Constructors

        _init(...args: any[]): void;

        // Methods

        get_font_dpi(): number;
        get_ui_scaling_factor(): number;
    }

    /**
     * #MetaShadow holds a shadow texture along with information about how to
     * apply that texture to draw a window texture. (E.g., it knows how big the
     * unscaled borders are on each side of the shadow texture.)
     */
    class Shadow {
        static $gtype: GObject.GType<Shadow>;

        // Constructors

        _init(...args: any[]): void;

        // Methods

        /**
         * Computes the bounds of the pixels that will be affected by
         * meta_shadow_paint()
         * @param window_x x position of the region to paint a shadow for
         * @param window_y y position of the region to paint a shadow for
         * @param window_width actual width of the region to paint a shadow for
         * @param window_height actual height of the region to paint a shadow for
         * @param bounds
         */
        get_bounds(
            window_x: number,
            window_y: number,
            window_width: number,
            window_height: number,
            bounds: cairo.RectangleInt,
        ): void;
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
         * @param clip_strictly if %TRUE, drawing will be clipped strictly   to @clip, otherwise, it will be only used to optimize   drawing.
         */
        paint(
            framebuffer: Cogl.Framebuffer,
            window_x: number,
            window_y: number,
            window_width: number,
            window_height: number,
            opacity: number,
            clip: cairo.Region | null,
            clip_strictly: boolean,
        ): void;
        ref(): Shadow;
        unref(): void;
    }

    type ShadowFactoryClass = typeof ShadowFactory;
    /**
     * The #MetaShadowParams structure holds information about how to draw
     * a particular style of shadow.
     */
    class ShadowParams {
        static $gtype: GObject.GType<ShadowParams>;

        // Fields

        radius: number;
        top_fade: number;
        x_offset: number;
        y_offset: number;
        opacity: number;

        // Constructors

        constructor(
            properties?: Partial<{
                radius: number;
                top_fade: number;
                x_offset: number;
                y_offset: number;
                opacity: number;
            }>,
        );
        _init(...args: any[]): void;
    }

    type ShapedTextureClass = typeof ShapedTexture;
    type SoundPlayerClass = typeof SoundPlayer;
    type StageClass = typeof Stage;
    type StartupNotificationClass = typeof StartupNotification;
    type StartupSequenceClass = typeof StartupSequence;
    class Strut {
        static $gtype: GObject.GType<Strut>;

        // Fields

        rect: Rectangle;
        side: Side;

        // Constructors

        _init(...args: any[]): void;
    }

    abstract class Theme {
        static $gtype: GObject.GType<Theme>;

        // Constructors

        _init(...args: any[]): void;

        // Methods

        free(): void;
    }

    type WaylandClientClass = typeof WaylandClient;
    type WindowActorClass = typeof WindowActor;
    type WindowClass = typeof Window;
    type WindowGroupClass = typeof WindowGroup;
    /**
     * #MetaWindowShape represents a 9-sliced region with borders on all sides that
     * are unscaled, and a constant central region that is scaled. For example,
     * the regions representing two windows that are rounded rectangles,
     * with the same corner radius but different sizes, have the
     * same MetaWindowShape.
     * #MetaWindowShape is designed to be used as part of a hash table key, so has
     * efficient hash and equal functions.
     */
    class WindowShape {
        static $gtype: GObject.GType<WindowShape>;

        // Constructors

        constructor(region: cairo.Region);
        _init(...args: any[]): void;

        static ['new'](region: cairo.Region): WindowShape;

        // Methods

        equal(shape_b: WindowShape): boolean;
        get_borders(border_top: number, border_right: number, border_bottom: number, border_left: number): void;
        hash(): number;
        ref(): WindowShape;
        /**
         * Converts the shape to to a cairo_region_t using the given width
         * and height for the central scaled region.
         * @param center_width size of the central region horizontally
         * @param center_height size of the central region vertically
         * @returns a newly created region
         */
        to_region(center_width: number, center_height: number): cairo.Region;
        unref(): void;
    }

    type WorkspaceClass = typeof Workspace;
    type WorkspaceManagerClass = typeof WorkspaceManager;
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
             */
            vfunc_focus(): void;
            /**
             * Hides the close dialog.
             */
            vfunc_hide(): void;
            /**
             * Shows the close dialog.
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
    interface CloseDialog extends GObject.Object, CloseDialog.Interface {
        // Properties

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
         * @returns #TRUE if @dialog is visible.
         */
        is_visible(): boolean;
        /**
         * Responds and closes the dialog. To be called by #MetaCloseDialog
         * implementations.
         * @param response a #MetaCloseDialogResponse
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
             */
            vfunc_hide(): void;
            /**
             * Shows the inhibit shortcuts dialog.
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
    interface InhibitShortcutsDialog extends GObject.Object, InhibitShortcutsDialog.Interface {
        // Properties

        get window(): Window;

        // Methods

        /**
         * Hides the inhibit shortcuts dialog.
         */
        hide(): void;
        /**
         * Responds and closes the dialog. To be called by #MetaInhibitShortcutsDialog
         * implementations.
         * @param response a #MetaInhibitShortcutsDialogResponse
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
