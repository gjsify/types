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

export namespace Meta {
    /**
     * Function a window button can have.  Note, you can't add stuff here
     * without extending the theme format to draw a new function and
     * breaking all existing themes.
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
         * Marks the end of the #MetaButtonFunction enumeration
         */
        LAST,
    }
    enum CloseDialogResponse {
        WAIT,
        FORCE_CLOSE,
    }
    /**
     * Indicates the appropriate effect to show the user for
     * meta_compositor_show_window() and meta_compositor_hide_window()
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
    enum CompositorType {
        WAYLAND,
        X11,
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
    enum InhibitShortcutsDialogResponse {
        ALLOW,
        DENY,
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
    enum LocaleDirection {
        LTR,
        RTL,
    }
    enum MonitorSwitchConfigType {
        ALL_MIRROR,
        ALL_LINEAR,
        EXTERNAL,
        BUILTIN,
        UNKNOWN,
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
    enum PadActionType {
        BUTTON,
        RING,
        STRIP,
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
    enum SelectionType {
        SELECTION_PRIMARY,
        SELECTION_CLIPBOARD,
        SELECTION_DND,
        N_SELECTION_TYPES,
    }
    enum ShadowMode {
        AUTO,
        FORCED_OFF,
        FORCED_ON,
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
    enum SizeChange {
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
    /**
     * Convert an accelerator keyval and modifier mask into a string parsable by `meta_parse_accelerator`.
     * @param accelerator_mods Accelerator modifier mask.
     * @param accelerator_key Accelerator keyval.
     * @returns The accelerator name.
     */
    function accelerator_name(accelerator_mods: Clutter.ModifierType, accelerator_key: number): string;
    function add_clutter_debug_flags(
        debug_flags: Clutter.DebugFlag,
        draw_flags: Clutter.DrawDebugFlag,
        pick_flags: Clutter.PickDebugFlag,
    ): void;
    function add_debug_paint_flag(flag: DebugPaintFlag): void;
    /**
     * Ensure log messages for the given topic `topic`
     * will be printed.
     * @param topic Topic for which logging will be started
     */
    function add_verbose_topic(topic: DebugTopic): void;
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
    function exit(code: ExitCode): void;
    function external_binding_name_for_action(keybinding_action: number): string;
    function focus_stage_window(display: Display, timestamp: number): void;
    /**
     * Converts a frame type enum value to the name string that would
     * appear in the theme definition file.
     * @param type a #MetaFrameType
     * @returns the string value
     */
    function frame_type_to_string(type: FrameType): string;
    function g_utf8_strndup(src: string, n: number): string;
    function get_clutter_debug_flags(): void;
    function get_debug_paint_flags(): DebugPaintFlag;
    function get_feedback_group_for_display(display: Display): Clutter.Actor;
    function get_locale_direction(): LocaleDirection;
    function get_stage_for_display(display: Display): Clutter.Actor;
    function get_top_window_group_for_display(display: Display): Clutter.Actor;
    function get_window_actors(display: Display): Clutter.Actor[];
    function get_window_group_for_display(display: Display): Clutter.Actor;
    function gravity_to_string(gravity: Gravity): string;
    /**
     * Returns %TRUE if this instance of Mutter comes from Mutter
     * restarting itself (for example to enable/disable stereo.)
     * See meta_restart(). If this is the case, any startup visuals
     * or animations should be suppressed.
     */
    function is_restart(): boolean;
    function is_topic_enabled(topic: DebugTopic): boolean;
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
    function pop_no_msg_prefix(): void;
    function preference_to_string(pref: Preference): string;
    function prefs_bell_is_audible(): boolean;
    function prefs_change_workspace_name(i: number, name: string): void;
    function prefs_get_action_double_click_titlebar(): GDesktopEnums.TitlebarAction;
    function prefs_get_action_middle_click_titlebar(): GDesktopEnums.TitlebarAction;
    function prefs_get_action_right_click_titlebar(): GDesktopEnums.TitlebarAction;
    function prefs_get_attach_modal_dialogs(): boolean;
    function prefs_get_auto_maximize(): boolean;
    function prefs_get_auto_raise(): boolean;
    function prefs_get_auto_raise_delay(): number;
    function prefs_get_button_layout(): void;
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
    function prefs_get_keybinding_label(name: string): string | null;
    function prefs_get_mouse_button_menu(): number;
    function prefs_get_mouse_button_mods(): Clutter.ModifierType;
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
        debug_flags: Clutter.DebugFlag,
        draw_flags: Clutter.DrawDebugFlag,
        pick_flags: Clutter.PickDebugFlag,
    ): void;
    function remove_debug_paint_flag(flag: DebugPaintFlag): void;
    /**
     * Stop printing log messages for the given topic `topic`.  Note
     * that this method does not stack with meta_add_verbose_topic();
     * i.e. if two calls to meta_add_verbose_topic() for the same
     * topic are made, one call to meta_remove_verbose_topic() will
     * remove it.
     * @param topic Topic for which logging will be stopped
     */
    function remove_verbose_topic(topic: DebugTopic): void;
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
    function restart(message: string | null, context: Context): void;
    function topic_to_string(topic: DebugTopic): string;
    function unsigned_long_equal(v1?: any | null, v2?: any | null): number;
    function unsigned_long_hash(v?: any | null): number;
    function x11_error_trap_pop(x11_display: X11Display): void;
    function x11_error_trap_pop_with_return(x11_display: X11Display): number;
    function x11_error_trap_push(x11_display: X11Display): void;
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
    enum BackendCapabilities {
        NONE,
        BARRIERS,
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
    /**
     * Keyboard accessibility features.
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
    module Backend {
        // Signal callback interfaces

        interface GpuAdded {
            (gpu: unknown): void;
        }

        interface KeymapChanged {
            (): void;
        }

        interface KeymapLayoutGroupChanged {
            (object: number): void;
        }

        interface LastDeviceChanged {
            (object: Clutter.InputDevice): void;
        }

        interface LidIsClosedChanged {
            (object: boolean): void;
        }

        interface PrepareShutdown {
            (): void;
        }

        // Constructor properties interface
    }

    abstract class Backend extends GObject.Object {
        // Own properties of Meta-12.Backend

        readonly capabilities: BackendCapabilities;
        context: Context;

        // Owm methods of Meta-12.Backend

        get_capabilities(): BackendCapabilities;
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
    }

    module Background {
        // Signal callback interfaces

        interface Changed {
            (): void;
        }

        // Constructor properties interface
    }

    /**
     * This class handles tracking and painting the root window background.
     * By integrating with #MetaWindowGroup we can avoid painting parts of
     * the background that are obscured by other windows.
     */
    class Background extends GObject.Object {
        // Own properties of Meta-12.Background

        meta_display: Display;
        metaDisplay: Display;

        // Constructors of Meta-12.Background

        static ['new'](display: Display): Background;

        // Owm methods of Meta-12.Background

        static refresh_all(): void;

        // Owm methods of Meta-12.Background

        set_blend(file1: Gio.File, file2: Gio.File, blend_factor: number, style: GDesktopEnums.BackgroundStyle): void;
        set_color(color: Clutter.Color): void;
        /**
         * Set the background to `file`
         * @param file a #GFile representing the background file
         * @param style the background style to apply
         */
        set_file(file: Gio.File | null, style: GDesktopEnums.BackgroundStyle): void;
        set_gradient(
            shading_direction: GDesktopEnums.BackgroundShading,
            color: Clutter.Color,
            second_color: Clutter.Color,
        ): void;
    }

    module BackgroundActor {
        // Constructor properties interface
    }

    /**
     * This class handles tracking and painting the root window background.
     * By integrating with #MetaWindowGroup we can avoid painting parts of
     * the background that are obscured by other windows.
     */
    class BackgroundActor extends Clutter.Actor {
        // Own properties of Meta-12.BackgroundActor

        meta_display: Display;
        metaDisplay: Display;
        monitor: number;

        // Constructors of Meta-12.BackgroundActor

        static ['new'](display: Display, monitor: number): BackgroundActor;
    }

    module BackgroundContent {
        // Constructor properties interface
    }

    /**
     * This class handles tracking and painting the root window background.
     * By integrating with #MetaWindowGroup we can avoid painting parts of
     * the background that are obscured by other windows.
     */
    class BackgroundContent extends GObject.Object {
        // Own properties of Meta-12.BackgroundContent

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

        // Owm methods of Meta-12.BackgroundContent

        /**
         * Creates a new actor to draw the background for the given monitor.
         * @param display
         * @param monitor Index of the monitor for which to draw the background
         */
        static ['new'](display: Display, monitor: number): Clutter.Content;

        // Owm methods of Meta-12.BackgroundContent

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
    }

    module BackgroundGroup {
        // Constructor properties interface
    }

    class BackgroundGroup extends Clutter.Actor {
        // Constructors of Meta-12.BackgroundGroup

        static ['new'](): BackgroundGroup;
    }

    module BackgroundImage {
        // Signal callback interfaces

        interface Loaded {
            (): void;
        }

        // Constructor properties interface
    }

    /**
     * #MetaBackgroundImage is an object that represents a loaded or loading background image.
     */
    class BackgroundImage extends GObject.Object {
        // Owm methods of Meta-12.BackgroundImage

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

    module BackgroundImageCache {
        // Constructor properties interface
    }

    /**
     * #MetaBackgroundImageCache caches loading of textures for backgrounds; there's actually
     * nothing background specific about it, other than it is tuned to work well for
     * large images as typically are used for backgrounds.
     */
    class BackgroundImageCache extends GObject.Object {
        // Owm methods of Meta-12.BackgroundImageCache

        static get_default(): BackgroundImageCache;

        // Owm methods of Meta-12.BackgroundImageCache

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

    module Barrier {
        // Signal callback interfaces

        interface Hit {
            (event: BarrierEvent): void;
        }

        interface Left {
            (event: BarrierEvent): void;
        }

        // Constructor properties interface
    }

    class Barrier extends GObject.Object {
        // Own properties of Meta-12.Barrier

        backend: Backend;
        directions: BarrierDirection;
        display: Display;
        x1: number;
        x2: number;
        y1: number;
        y2: number;

        // Constructors of Meta-12.Barrier

        static ['new'](
            backend: Backend,
            x1: number,
            y1: number,
            x2: number,
            y2: number,
            directions: BarrierDirection,
        ): Barrier;

        // Owm methods of Meta-12.Barrier

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

    module Compositor {
        // Constructor properties interface
    }

    abstract class Compositor extends GObject.Object {
        // Own properties of Meta-12.Compositor

        backend: Backend;
        display: Display;

        // Owm methods of Meta-12.Compositor

        get_feedback_group(): Clutter.Actor;
        get_laters(): Laters;
    }

    module Context {
        // Signal callback interfaces

        interface PrepareShutdown {
            (): void;
        }

        interface Started {
            (): void;
        }

        // Constructor properties interface
    }

    class Context extends GObject.Object {
        // Own properties of Meta-12.Context

        name: string;
        unsafe_mode: boolean;
        unsafeMode: boolean;

        // Owm methods of Meta-12.Context

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
        configure(argv?: string[] | null): boolean;
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

    module CursorTracker {
        // Signal callback interfaces

        interface CursorChanged {
            (): void;
        }

        interface PositionInvalidated {
            (): void;
        }

        interface VisibilityChanged {
            (): void;
        }

        // Constructor properties interface
    }

    class CursorTracker extends GObject.Object {
        // Own properties of Meta-12.CursorTracker

        backend: Backend;

        // Owm methods of Meta-12.CursorTracker

        /**
         * Retrieves the cursor tracker object for `display`.
         * @param display the #MetaDisplay
         */
        static get_for_display(display: Display): CursorTracker;

        // Owm methods of Meta-12.CursorTracker

        /**
         * Get the hotspot of the current cursor sprite.
         */
        get_hot(): void;
        /**
         * Get the current pointer position and state.
         */
        get_pointer(): void;
        get_pointer_visible(): boolean;
        /**
         * Get the scale factor of the cursor sprite
         * @returns The scale factor of the cursor sprite
         */
        get_scale(): number;
        /**
         * Get the #CoglTexture of the cursor sprite
         * @returns the #CoglTexture of the cursor sprite
         */
        get_sprite(): Cogl.Texture | null;
        set_pointer_visible(visible: boolean): void;
    }

    module Display {
        // Signal callback interfaces

        interface AcceleratorActivated {
            (object: number, p0: Clutter.InputDevice, p1: number): void;
        }

        interface Closing {
            (): void;
        }

        interface CursorUpdated {
            (): void;
        }

        interface GlVideoMemoryPurged {
            (): void;
        }

        interface GrabOpBegin {
            (object: Window, p0: GrabOp): void;
        }

        interface GrabOpEnd {
            (object: Window, p0: GrabOp): void;
        }

        interface InFullscreenChanged {
            (): void;
        }

        interface InitXserver {
            (object: Gio.Task): boolean;
        }

        interface ModifiersAcceleratorActivated {
            (): boolean;
        }

        interface OverlayKey {
            (): void;
        }

        interface PadModeSwitch {
            (object: Clutter.InputDevice, p0: number, p1: number): void;
        }

        interface Restacked {
            (): void;
        }

        interface Restart {
            (): boolean;
        }

        interface ShowOsd {
            (object: number, p0: string, p1: string): void;
        }

        interface ShowPadOsd {
            (
                pad: Clutter.InputDevice,
                settings: Gio.Settings,
                layout_path: string,
                edition_mode: boolean,
                monitor_idx: number,
            ): Clutter.Actor | null;
        }

        interface ShowResizePopup {
            (object: boolean, p0: Rectangle, p1: number, p2: number): boolean;
        }

        interface ShowRestartMessage {
            (message?: string | null): boolean;
        }

        interface ShowingDesktopChanged {
            (): void;
        }

        interface WindowCreated {
            (object: Window): void;
        }

        interface WindowDemandsAttention {
            (object: Window): void;
        }

        interface WindowEnteredMonitor {
            (object: number, p0: Window): void;
        }

        interface WindowLeftMonitor {
            (object: number, p0: Window): void;
        }

        interface WindowMarkedUrgent {
            (object: Window): void;
        }

        interface WindowVisibilityUpdated {
            (object?: any | null, p0?: any | null, p1?: any | null): void;
        }

        interface WorkareasChanged {
            (): void;
        }

        interface X11DisplayClosing {
            (): void;
        }

        interface X11DisplayOpened {
            (): void;
        }

        interface X11DisplaySetup {
            (): void;
        }

        // Constructor properties interface
    }

    class Display extends GObject.Object {
        // Own properties of Meta-12.Display

        readonly compositor_modifiers: Clutter.ModifierType;
        readonly compositorModifiers: Clutter.ModifierType;
        readonly focus_window: Window;
        readonly focusWindow: Window;

        // Owm methods of Meta-12.Display

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
        add_keybinding(name: string, settings: Gio.Settings, flags: KeyBindingFlags, handler: KeyHandlerFunc): number;
        /**
         * Sets the mouse-mode flag to %FALSE, which means that motion events are
         * no longer ignored in mouse or sloppy focus.
         * This is an internal function. It should be used only for reimplementing
         * keybindings, and only in a manner compatible with core code.
         */
        clear_mouse_mode(): void;
        close(timestamp: number): void;
        focus_default_window(timestamp: number): void;
        freeze_keyboard(timestamp: number): void;
        get_compositor(): Compositor;
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
        get_monitor_geometry(monitor: number): void;
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
        get_monitor_neighbor_index(which_monitor: number, dir: DisplayDirection): number;
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
        get_pad_action_label(pad: Clutter.InputDevice, action_type: PadActionType, action_number: number): string;
        /**
         * Gets the index of the primary monitor on this `display`.
         * @returns a monitor index
         */
        get_primary_monitor(): number;
        get_selection(): Selection;
        /**
         * Retrieve the size of the display.
         */
        get_size(): void;
        get_sound_player(): SoundPlayer;
        /**
         * Determine the active window that should be displayed for Alt-TAB.
         * @param type type of tab list
         * @param workspace origin workspace
         * @returns Current window
         */
        get_tab_current(type: TabList, workspace: Workspace): Window;
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
        get_tab_list(type: TabList, workspace?: Workspace | null): Window[];
        /**
         * Determine the next window that should be displayed for Alt-TAB
         * functionality.
         * @param type type of tab list
         * @param workspace origin workspace
         * @param window starting window
         * @param backward If %TRUE, look for the previous window.
         * @returns Next window
         */
        get_tab_next(type: TabList, workspace: Workspace, window: Window | null, backward: boolean): Window;
        get_workspace_manager(): WorkspaceManager;
        grab_accelerator(accelerator: string, flags: KeyBindingFlags): number;
        /**
         * Returns %TRUE if there is an ongoing grab operation.
         * @returns Whether there is an active display grab operation.
         */
        is_grabbed(): boolean;
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
        set_cursor(cursor: Cursor): void;
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

    module Dnd {
        // Signal callback interfaces

        interface DndEnter {
            (): void;
        }

        interface DndLeave {
            (): void;
        }

        interface DndPositionChange {
            (object: number, p0: number): void;
        }

        // Constructor properties interface
    }

    class Dnd extends GObject.Object {}

    module IdleMonitor {
        // Constructor properties interface
    }

    class IdleMonitor extends GObject.Object {
        // Own properties of Meta-12.IdleMonitor

        /**
         * The device to listen to idletime on.
         */
        device: Clutter.InputDevice;

        // Owm methods of Meta-12.IdleMonitor

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

    module Laters {
        // Constructor properties interface
    }

    class Laters extends GObject.Object {
        // Owm methods of Meta-12.Laters

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
        add(when: LaterType, func: GLib.SourceFunc): number;
        /**
         * Removes a callback added with meta_later_add()
         * @param later_id the integer ID returned from meta_later_add()
         */
        remove(later_id: number): void;
    }

    module LaunchContext {
        // Constructor properties interface
    }

    class LaunchContext extends Gio.AppLaunchContext {
        // Own properties of Meta-12.LaunchContext

        display: Display;
        timestamp: number;
        workspace: Workspace;

        // Owm methods of Meta-12.LaunchContext

        set_timestamp(timestamp: number): void;
        set_workspace(workspace: Workspace): void;
    }

    module MonitorManager {
        // Signal callback interfaces

        interface ConfirmDisplayChange {
            (): void;
        }

        interface MonitorPrivacyScreenChanged {
            (logical_monitor: unknown, enabled: boolean): void;
        }

        interface MonitorsChanged {
            (): void;
        }

        interface MonitorsChangedInternal {
            (): void;
        }

        interface PowerSaveModeChanged {
            (): void;
        }

        // Constructor properties interface
    }

    class MonitorManager extends GObject.Object {
        // Own properties of Meta-12.MonitorManager

        backend: Backend;
        experimental_hdr: string;
        experimentalHdr: string;
        readonly has_builtin_panel: boolean;
        readonly hasBuiltinPanel: boolean;
        readonly night_light_supported: boolean;
        readonly nightLightSupported: boolean;
        readonly panel_orientation_managed: boolean;
        readonly panelOrientationManaged: boolean;

        // Owm methods of Meta-12.MonitorManager

        can_switch_config(): boolean;
        get_display_configuration_timeout(): number;
        /**
         * Returns whether the built-in display (i.e. a laptop panel) is turned on.
         */
        get_is_builtin_display_on(): boolean;
        get_monitor_for_connector(connector: string): number;
        get_panel_orientation_managed(): boolean;
        get_switch_config(): MonitorSwitchConfigType;
        switch_config(config_type: MonitorSwitchConfigType): void;
    }

    module Plugin {
        // Constructor properties interface
    }

    abstract class Plugin extends GObject.Object {
        // Owm methods of Meta-12.Plugin

        static manager_set_plugin_type(gtype: GObject.GType): void;

        // Owm methods of Meta-12.Plugin

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

    module RemoteAccessController {
        // Signal callback interfaces

        interface NewHandle {
            (object: RemoteAccessHandle): void;
        }

        // Constructor properties interface
    }

    class RemoteAccessController extends GObject.Object {
        // Owm methods of Meta-12.RemoteAccessController

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

    module RemoteAccessHandle {
        // Signal callback interfaces

        interface Stopped {
            (): void;
        }

        // Constructor properties interface
    }

    class RemoteAccessHandle extends GObject.Object {
        // Own properties of Meta-12.RemoteAccessHandle

        is_recording: boolean;
        isRecording: boolean;

        // Owm methods of Meta-12.RemoteAccessHandle

        get_disable_animations(): boolean;
        /**
         * Stop the associated remote access session.
         */
        stop(): void;
    }

    module Selection {
        // Signal callback interfaces

        interface OwnerChanged {
            (object: number, p0: SelectionSource): void;
        }

        // Constructor properties interface
    }

    class Selection extends GObject.Object {
        // Constructors of Meta-12.Selection

        static ['new'](display: Display): Selection;

        // Owm methods of Meta-12.Selection

        /**
         * Returns the list of supported mimetypes for the given selection type.
         * @param selection_type Selection to query
         * @returns The supported mimetypes
         */
        get_mimetypes(selection_type: SelectionType): string[];
        /**
         * Sets `owner` as the owner of the selection given by `selection_type,`
         * unsets any previous owner there was.
         * @param selection_type Selection type
         * @param owner New selection owner
         */
        set_owner(selection_type: SelectionType, owner: SelectionSource): void;
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
            selection_type: SelectionType,
            mimetype: string,
            size: number,
            output: Gio.OutputStream,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
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
        unset_owner(selection_type: SelectionType, owner: SelectionSource): void;
    }

    module SelectionSource {
        // Signal callback interfaces

        interface Activated {
            (): void;
        }

        interface Deactivated {
            (): void;
        }

        // Constructor properties interface
    }

    class SelectionSource extends GObject.Object {
        // Owm methods of Meta-12.SelectionSource

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
        read_async(
            mimetype: string,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes a read from the selection source.
         * @param result The async result
         * @returns The resulting #GInputStream
         */
        read_finish(result: Gio.AsyncResult): Gio.InputStream;
    }

    module SelectionSourceMemory {
        // Constructor properties interface
    }

    class SelectionSourceMemory extends SelectionSource {
        // Constructors of Meta-12.SelectionSourceMemory

        static ['new'](mimetype: string, content: GLib.Bytes): SelectionSourceMemory;
    }

    module ShadowFactory {
        // Signal callback interfaces

        interface Changed {
            (): void;
        }

        // Constructor properties interface
    }

    /**
     * #MetaShadowFactory is used to create window shadows. It caches shadows internally
     * so that multiple shadows created for the same shape with the same radius will
     * share the same MetaShadow.
     */
    class ShadowFactory extends GObject.Object {
        // Constructors of Meta-12.ShadowFactory

        static ['new'](): ShadowFactory;

        // Owm methods of Meta-12.ShadowFactory

        static get_default(): ShadowFactory;

        // Owm methods of Meta-12.ShadowFactory

        /**
         * Gets the shadow parameters for a particular class of shadows
         * for either the focused or unfocused state. If the class name
         * does not name an existing class, default values will be returned
         * without printing an error.
         * @param class_name name of the class of shadow to get the params for
         * @param focused whether the shadow is for a focused window
         */
        get_params(class_name: string, focused: boolean): void;
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

    module ShapedTexture {
        // Signal callback interfaces

        interface SizeChanged {
            (): void;
        }

        // Constructor properties interface
    }

    class ShapedTexture extends GObject.Object {
        // Owm methods of Meta-12.ShapedTexture

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
    }

    module SoundPlayer {
        // Constructor properties interface
    }

    class SoundPlayer extends GObject.Object {
        // Owm methods of Meta-12.SoundPlayer

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

    module Stage {
        // Signal callback interfaces

        interface ActorsPainted {
            (): void;
        }

        // Constructor properties interface
    }

    class Stage extends Clutter.Stage {
        // Owm methods of Meta-12.Stage

        static is_focused(display: Display): boolean;
    }

    module StartupNotification {
        // Signal callback interfaces

        interface Changed {
            (object: StartupSequence): void;
        }

        // Constructor properties interface
    }

    class StartupNotification extends GObject.Object {
        // Own properties of Meta-12.StartupNotification

        display: Display;

        // Owm methods of Meta-12.StartupNotification

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

    module StartupSequence {
        // Signal callback interfaces

        interface Complete {
            (): void;
        }

        interface Timeout {
            (): void;
        }

        // Constructor properties interface
    }

    class StartupSequence extends GObject.Object {
        // Own properties of Meta-12.StartupSequence

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

        // Owm methods of Meta-12.StartupSequence

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

    module WaylandClient {
        // Signal callback interfaces

        interface ClientDestroyed {
            (): void;
        }

        // Constructor properties interface
    }

    class WaylandClient extends GObject.Object {
        // Constructors of Meta-12.WaylandClient

        static ['new'](context: Context, launcher: Gio.SubprocessLauncher): WaylandClient;

        // Owm methods of Meta-12.WaylandClient

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

    module Window {
        // Signal callback interfaces

        interface Focus {
            (): void;
        }

        interface PositionChanged {
            (): void;
        }

        interface Raised {
            (): void;
        }

        interface Shown {
            (): void;
        }

        interface SizeChanged {
            (): void;
        }

        interface Unmanaged {
            (): void;
        }

        interface Unmanaging {
            (): void;
        }

        interface WorkspaceChanged {
            (): void;
        }

        // Constructor properties interface
    }

    abstract class Window extends GObject.Object {
        // Own properties of Meta-12.Window

        readonly above: boolean;
        readonly appears_focused: boolean;
        readonly appearsFocused: boolean;
        readonly decorated: boolean;
        readonly demands_attention: boolean;
        readonly demandsAttention: boolean;
        display: Display;
        effect: number;
        readonly fullscreen: boolean;
        readonly gtk_app_menu_object_path: string;
        readonly gtkAppMenuObjectPath: string;
        readonly gtk_application_id: string;
        readonly gtkApplicationId: string;
        readonly gtk_application_object_path: string;
        readonly gtkApplicationObjectPath: string;
        readonly gtk_menubar_object_path: string;
        readonly gtkMenubarObjectPath: string;
        readonly gtk_unique_bus_name: string;
        readonly gtkUniqueBusName: string;
        readonly gtk_window_object_path: string;
        readonly gtkWindowObjectPath: string;
        readonly icon: any;
        readonly is_alive: boolean;
        readonly isAlive: boolean;
        readonly maximized_horizontally: boolean;
        readonly maximizedHorizontally: boolean;
        readonly maximized_vertically: boolean;
        readonly maximizedVertically: boolean;
        readonly mini_icon: any;
        readonly miniIcon: any;
        readonly minimized: boolean;
        readonly mutter_hints: string;
        readonly mutterHints: string;
        readonly on_all_workspaces: boolean;
        readonly onAllWorkspaces: boolean;
        readonly resizeable: boolean;
        readonly skip_taskbar: boolean;
        readonly skipTaskbar: boolean;
        readonly title: string;
        readonly urgent: boolean;
        readonly user_time: number;
        readonly userTime: number;
        readonly window_type: WindowType;
        readonly windowType: WindowType;
        readonly wm_class: string;
        readonly wmClass: string;
        xwindow: number;

        // Owm methods of Meta-12.Window

        activate(current_time: number): void;
        activate_with_workspace(current_time: number, workspace: Workspace): void;
        allows_move(): boolean;
        allows_resize(): boolean;
        begin_grab_op(
            op: GrabOp,
            device: Clutter.InputDevice | null,
            sequence: Clutter.EventSequence | null,
            timestamp: number,
        ): boolean;
        can_close(): boolean;
        can_maximize(): boolean;
        can_minimize(): boolean;
        change_workspace(workspace: Workspace): void;
        change_workspace_by_index(space_index: number, append: boolean): void;
        check_alive(timestamp: number): void;
        /**
         * Converts a desired bounds of the client window into the corresponding bounds
         * of the window frame (excluding invisible borders and client side shadows.)
         * @param client_rect client rectangle in root coordinates
         */
        client_rect_to_frame_rect(client_rect: Rectangle): void;
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
        frame_rect_to_client_rect(frame_rect: Rectangle): void;
        /**
         * Gets the rectangle that the pixmap or buffer of `window` occupies.
         *
         * For X11 windows, this is the server-side geometry of the toplevel
         * window.
         *
         * For Wayland windows, this is the bounding rectangle of the attached
         * buffer.
         */
        get_buffer_rect(): void;
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
        get_frame_rect(): void;
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
        get_icon_geometry(): boolean;
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
        get_work_area_all_monitors(): void;
        /**
         * Get the work area for the monitor `window` is currently on.
         */
        get_work_area_current_monitor(): void;
        /**
         * Get the work area for `window,` given the monitor index
         * `which_monitor`.
         * @param which_monitor a moniotr to get the work area for
         */
        get_work_area_for_monitor(which_monitor: number): void;
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
        has_pointer(): boolean;
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
        maximize(directions: MaximizeFlags): void;
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
        raise_and_make_recent(): void;
        set_compositor_private(priv: GObject.Object): void;
        set_demands_attention(): void;
        /**
         * Sets or unsets the location of the icon corresponding to the window. If
         * set, the location should correspond to a dock, task bar or other user
         * interface element displaying the icon, and is relative to the root window.
         * @param rect rectangle with the desired geometry or %NULL.
         */
        set_icon_geometry(rect?: Rectangle | null): void;
        shove_titlebar_onscreen(): void;
        showing_on_its_workspace(): boolean;
        shutdown_group(): void;
        stick(): void;
        titlebar_is_onscreen(): boolean;
        unmake_above(): void;
        unmake_fullscreen(): void;
        unmaximize(directions: MaximizeFlags): void;
        unminimize(): void;
        unset_demands_attention(): void;
        unstick(): void;
    }

    module WindowActor {
        // Signal callback interfaces

        interface Damaged {
            (): void;
        }

        interface EffectsCompleted {
            (): void;
        }

        interface FirstFrame {
            (): void;
        }

        interface Thawed {
            (): void;
        }

        // Constructor properties interface
    }

    abstract class WindowActor extends Clutter.Actor {
        // Own properties of Meta-12.WindowActor

        meta_window: Window;
        metaWindow: Window;

        // Owm methods of Meta-12.WindowActor

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
        get_meta_window(): Window | null;
        /**
         * Gets the ClutterActor that is used to display the contents of the window,
         * or NULL if no texture is shown yet, because the window is not mapped.
         * @returns the #ClutterActor for the contents
         */
        get_texture(): ShapedTexture | null;
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
    }

    module WindowGroup {
        // Constructor properties interface
    }

    class WindowGroup extends Clutter.Actor {}

    module Workspace {
        // Signal callback interfaces

        interface WindowAdded {
            (object: Window): void;
        }

        interface WindowRemoved {
            (object: Window): void;
        }

        // Constructor properties interface
    }

    class Workspace extends GObject.Object {
        // Own properties of Meta-12.Workspace

        readonly active: boolean;
        readonly n_windows: number;
        readonly nWindows: number;
        readonly workspace_index: number;
        readonly workspaceIndex: number;

        // Owm methods of Meta-12.Workspace

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
        get_neighbor(direction: MotionDirection): Workspace;
        /**
         * Stores the work area in `area`.
         */
        get_work_area_all_monitors(): void;
        /**
         * Stores the work area for `which_monitor` on `workspace`
         * in `area`.
         * @param which_monitor a monitor index
         */
        get_work_area_for_monitor(which_monitor: number): void;
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

    module WorkspaceManager {
        // Signal callback interfaces

        interface ActiveWorkspaceChanged {
            (): void;
        }

        interface ShowingDesktopChanged {
            (): void;
        }

        interface WorkspaceAdded {
            (object: number): void;
        }

        interface WorkspaceRemoved {
            (object: number): void;
        }

        interface WorkspaceSwitched {
            (object: number, p0: number, p1: MotionDirection): void;
        }

        interface WorkspacesReordered {
            (): void;
        }

        // Constructor properties interface
    }

    class WorkspaceManager extends GObject.Object {
        // Own properties of Meta-12.WorkspaceManager

        readonly layout_columns: number;
        readonly layoutColumns: number;
        readonly layout_rows: number;
        readonly layoutRows: number;
        readonly n_workspaces: number;
        readonly nWorkspaces: number;

        // Owm methods of Meta-12.WorkspaceManager

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
            starting_corner: DisplayCorner,
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

    module X11Display {
        // Constructor properties interface
    }

    class X11Display extends GObject.Object {
        // Owm methods of Meta-12.X11Display

        set_stage_input_region(region: xfixes.XserverRegion): void;
    }

    class BackendClass {}

    class BackgroundActorClass {}

    class BackgroundClass {}

    class BackgroundContentClass {}

    class BackgroundGroupClass {}

    class BackgroundImageCacheClass {}

    class BackgroundImageClass {}

    class BarrierClass {}

    class BarrierEvent {
        // Own fields of Meta-12.BarrierEvent

        event_id: number;
        dt: number;
        time: number;
        x: number;
        y: number;
        dx: number;
        dy: number;
        released: boolean;
        grabbed: boolean;

        // Constructors of Meta-12.BarrierEvent

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

    class ButtonLayout {
        // Own fields of Meta-12.ButtonLayout

        left_buttons: ButtonFunction[];
        left_buttons_has_spacer: boolean[];
        right_buttons: ButtonFunction[];
        right_buttons_has_spacer: boolean[];
    }

    class CloseDialogInterface {}

    class CompositorClass {}

    class ContextClass {}

    class CursorTrackerClass {}

    class DisplayClass {}

    class DndClass {}

    class Edge {
        // Own fields of Meta-12.Edge

        rect: Rectangle;
        side_type: Side;
        edge_type: EdgeType;
    }

    class Frame {}

    class FrameBorder {
        // Own fields of Meta-12.FrameBorder

        left: number;
        right: number;
        top: number;
        bottom: number;

        // Constructors of Meta-12.FrameBorder

        constructor(
            properties?: Partial<{
                left: number;
                right: number;
                top: number;
                bottom: number;
            }>,
        );
    }

    class FrameBorders {
        // Own fields of Meta-12.FrameBorders

        visible: FrameBorder;
        invisible: FrameBorder;
        total: FrameBorder;

        // Constructors of Meta-12.FrameBorders

        constructor(
            properties?: Partial<{
                visible: FrameBorder;
                invisible: FrameBorder;
                total: FrameBorder;
            }>,
        );

        // Owm methods of Meta-12.FrameBorders

        clear(): void;
    }

    class IdleMonitorClass {}

    class InhibitShortcutsDialogInterface {}

    class KeyBinding {
        // Owm methods of Meta-12.KeyBinding

        get_mask(): number;
        get_modifiers(): Clutter.ModifierType;
        get_name(): string;
        is_builtin(): boolean;
        is_reversed(): boolean;
    }

    class LatersClass {}

    class LaunchContextClass {}

    class MonitorManagerClass {}

    class PluginClass {}

    class PluginInfo {
        // Own fields of Meta-12.PluginInfo

        name: string;
        version: string;
        author: string;
        license: string;
        description: string;

        // Constructors of Meta-12.PluginInfo

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

    class Rectangle {
        // Own fields of Meta-12.Rectangle

        x: number;
        y: number;
        width: number;
        height: number;

        // Constructors of Meta-12.Rectangle

        constructor(
            properties?: Partial<{
                x: number;
                y: number;
                width: number;
                height: number;
            }>,
        );

        // Owm methods of Meta-12.Rectangle

        area(): number;
        contains_rect(inner_rect: Rectangle): boolean;
        copy(): Rectangle;
        could_fit_rect(inner_rect: Rectangle): boolean;
        equal(src2: Rectangle): boolean;
        free(): void;
        horiz_overlap(rect2: Rectangle): boolean;
        intersect(src2: Rectangle): boolean;
        overlap(rect2: Rectangle): boolean;
        union(rect2: Rectangle): void;
        vert_overlap(rect2: Rectangle): boolean;
    }

    class RemoteAccessControllerClass {}

    class RemoteAccessHandleClass {}

    class SelectionClass {}

    class SelectionSourceClass {}

    class SelectionSourceMemoryClass {}

    class Settings {
        // Owm methods of Meta-12.Settings

        get_font_dpi(): number;
        get_ui_scaling_factor(): number;
    }

    /**
     * #MetaShadow holds a shadow texture along with information about how to
     * apply that texture to draw a window texture. (E.g., it knows how big the
     * unscaled borders are on each side of the shadow texture.)
     */
    class Shadow {
        // Owm methods of Meta-12.Shadow

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

    class ShadowFactoryClass {}

    /**
     * The #MetaShadowParams structure holds information about how to draw
     * a particular style of shadow.
     */
    class ShadowParams {
        // Own fields of Meta-12.ShadowParams

        radius: number;
        top_fade: number;
        x_offset: number;
        y_offset: number;
        opacity: number;

        // Constructors of Meta-12.ShadowParams

        constructor(
            properties?: Partial<{
                radius: number;
                top_fade: number;
                x_offset: number;
                y_offset: number;
                opacity: number;
            }>,
        );
    }

    class ShapedTextureClass {}

    class SoundPlayerClass {}

    class StageClass {}

    class StartupNotificationClass {}

    class StartupSequenceClass {}

    class Strut {
        // Own fields of Meta-12.Strut

        rect: Rectangle;
        side: Side;
    }

    class WaylandClientClass {}

    class WindowActorClass {}

    class WindowClass {}

    class WindowGroupClass {}

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
        // Constructors of Meta-12.WindowShape

        constructor(region: cairo.Region);

        static ['new'](region: cairo.Region): WindowShape;

        // Owm methods of Meta-12.WindowShape

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

    class WorkspaceClass {}

    class WorkspaceManagerClass {}

    class X11DisplayClass {}

    interface CloseDialog {
        // Own properties of Meta-12.CloseDialog

        window: Window;

        // Owm methods of Meta-12.CloseDialog

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
        response(response: CloseDialogResponse): void;
        /**
         * Shows the close dialog.
         */
        show(): void;

        // Own virtual methods of Meta-12.CloseDialog

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

    interface InhibitShortcutsDialog {
        // Own properties of Meta-12.InhibitShortcutsDialog

        window: Window;

        // Owm methods of Meta-12.InhibitShortcutsDialog

        /**
         * Hides the inhibit shortcuts dialog.
         */
        hide(): void;
        /**
         * Responds and closes the dialog. To be called by #MetaInhibitShortcutsDialog
         * implementations.
         * @param response a #MetaInhibitShortcutsDialogResponse
         */
        response(response: InhibitShortcutsDialogResponse): void;
        /**
         * Shows the inhibit shortcuts dialog.
         */
        show(): void;

        // Own virtual methods of Meta-12.InhibitShortcutsDialog

        /**
         * Hides the inhibit shortcuts dialog.
         */
        vfunc_hide(): void;
        /**
         * Shows the inhibit shortcuts dialog.
         */
        vfunc_show(): void;
    }

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
