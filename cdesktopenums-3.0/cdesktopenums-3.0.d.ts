
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
import type GObject from '@girs/gobject-2.0';

export namespace CDesktopEnums {

    /**
     * CDesktopEnums-3.0
     */


    /**
     * @gir-type Enum
     */
    enum BackgroundShading {
        SOLID = 0,
        VERTICAL = 1,
        HORIZONTAL = 2,
    }


    /**
     * @gir-type Enum
     */
    enum BackgroundStyle {
        NONE = 0,
        WALLPAPER = 1,
        CENTERED = 2,
        SCALED = 3,
        STRETCHED = 4,
        ZOOM = 5,
        SPANNED = 6,
    }


    /**
     * @gir-type Enum
     */
    enum DeviceSendEvents {
        ENABLED = 0,
        DISABLED = 1,
        DISABLED_ON_EXTERNAL_MOUSE = 2,
    }


    /**
     * @gir-type Enum
     */
    enum FocusMode {
        CLICK = 0,
        SLOPPY = 1,
        MOUSE = 2,
    }


    /**
     * @gir-type Enum
     */
    enum FocusNewWindows {
        SMART = 0,
        STRICT = 1,
    }


    /**
     * @gir-type Enum
     */
    enum MagnifierLensShape {
        NONE = 0,
        SQUARE = 1,
        HORIZONTAL = 2,
        VERTICAL = 3,
    }


    /**
     * @gir-type Enum
     */
    enum MagnifierMouseTrackingMode {
        NONE = 0,
        CENTERED = 1,
        PROPORTIONAL = 2,
        PUSH = 3,
    }


    /**
     * @gir-type Enum
     */
    enum MagnifierScreenPosition {
        NONE = 0,
        FULL_SCREEN = 1,
        TOP_HALF = 2,
        BOTTOM_HALF = 3,
        LEFT_HALF = 4,
        RIGHT_HALF = 5,
    }


    /**
     * @gir-type Enum
     */
    enum MediaKeyType {
        MUTE = 0,
        MUTE_QUIET = 1,
        VOLUME_UP = 2,
        VOLUME_UP_QUIET = 3,
        VOLUME_DOWN = 4,
        VOLUME_DOWN_QUIET = 5,
        MIC_MUTE = 6,
        EJECT = 7,
        MEDIA = 8,
        PLAY = 9,
        PAUSE = 10,
        STOP = 11,
        PREVIOUS = 12,
        NEXT = 13,
        REWIND = 14,
        FORWARD = 15,
        REPEAT = 16,
        RANDOM = 17,
        SCREENSHOT = 18,
        SCREENSHOT_CLIP = 19,
        SEPARATOR = 20,
        WINDOW_SCREENSHOT = 21,
        WINDOW_SCREENSHOT_CLIP = 22,
        AREA_SCREENSHOT = 23,
        AREA_SCREENSHOT_CLIP = 24,
        TOUCHPAD = 25,
        TOUCHPAD_ON = 26,
        TOUCHPAD_OFF = 27,
        LOGOUT = 28,
        SHUTDOWN = 29,
        HOME = 30,
        CALCULATOR = 31,
        SEARCH = 32,
        EMAIL = 33,
        SCREENSAVER = 34,
        HELP = 35,
        TERMINAL = 36,
        WWW = 37,
        VIDEO_OUT = 38,
        ROTATE_VIDEO = 39,
        ROTATE_VIDEO_LOCK = 40,
        SCREENREADER = 41,
        ON_SCREEN_KEYBOARD = 42,
        INCREASE_TEXT = 43,
        DECREASE_TEXT = 44,
        TOGGLE_CONTRAST = 45,
        SUSPEND = 46,
        HIBERNATE = 47,
        SCREEN_BRIGHTNESS_UP = 48,
        SCREEN_BRIGHTNESS_DOWN = 49,
        KEYBOARD_BRIGHTNESS_UP = 50,
        KEYBOARD_BRIGHTNESS_DOWN = 51,
        KEYBOARD_BRIGHTNESS_TOGGLE = 52,
        BATTERY = 53,
        LAST = 54,
    }


    /**
     * @gir-type Enum
     */
    enum MouseDwellDirection {
        LEFT = 0,
        RIGHT = 1,
        UP = 2,
        DOWN = 3,
    }


    /**
     * @gir-type Enum
     */
    enum MouseDwellMode {
        WINDOW = 0,
        GESTURE = 1,
    }


    /**
     * @gir-type Enum
     */
    enum NotificationScreenDisplay {
        PRIMARY_SCREEN = 0,
        ACTIVE_SCREEN = 1,
        FIXED_SCREEN = 2,
    }


    /**
     * @gir-type Enum
     */
    enum PadButtonAction {
        NONE = 0,
        HELP = 1,
        SWITCH_MONITOR = 2,
        KEYBINDING = 3,
    }


    /**
     * @gir-type Enum
     */
    enum PointerAccelProfile {
        DEFAULT = 0,
        FLAT = 1,
        ADAPTIVE = 2,
    }


    /**
     * @gir-type Enum
     */
    enum ProxyMode {
        NONE = 0,
        MANUAL = 1,
        AUTO = 2,
    }


    /**
     * @gir-type Enum
     */
    enum ScreensaverMode {
        BLANK_ONLY = 0,
        RANDOM = 1,
        SINGLE = 2,
    }


    /**
     * @gir-type Enum
     */
    enum StylusButtonAction {
        DEFAULT = 0,
        MIDDLE = 1,
        RIGHT = 2,
        BACK = 3,
        FORWARD = 4,
        DISABLED = 5,
    }


    /**
     * @gir-type Enum
     */
    enum TabletMapping {
        ABSOLUTE = 0,
        RELATIVE = 1,
    }


    /**
     * @gir-type Enum
     */
    enum TitlebarAction {
        TOGGLE_SHADE = 0,
        TOGGLE_MAXIMIZE = 1,
        TOGGLE_MAXIMIZE_HORIZONTALLY = 2,
        TOGGLE_MAXIMIZE_VERTICALLY = 3,
        TOGGLE_STUCK = 4,
        TOGGLE_ABOVE = 5,
        MINIMIZE = 6,
        NONE = 7,
        LOWER = 8,
        MENU = 9,
    }


    /**
     * @gir-type Enum
     */
    enum TitlebarScrollAction {
        SHADE = 10,
        OPACITY = 11,
        NONE = 12,
    }


    /**
     * @gir-type Enum
     */
    enum ToolbarIconSize {
        SMALL = 0,
        LARGE = 1,
    }


    /**
     * @gir-type Enum
     */
    enum ToolbarStyle {
        BOTH = 0,
        BOTH_HORIZ = 1,
        ICONS = 2,
        TEXT = 3,
    }


    /**
     * @gir-type Enum
     */
    enum TouchpadClickMethod {
        DEFAULT = 0,
        NONE = 1,
        AREAS = 2,
        FINGERS = 3,
    }


    /**
     * @gir-type Enum
     */
    enum TouchpadHandedness {
        RIGHT = 0,
        LEFT = 1,
        MOUSE = 2,
    }


    /**
     * @gir-type Enum
     */
    enum VisualBellType {
        FULLSCREEN_FLASH = 0,
        FRAME_FLASH = 1,
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

export default CDesktopEnums;

// END
