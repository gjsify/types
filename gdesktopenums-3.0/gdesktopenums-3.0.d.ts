
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

export namespace GDesktopEnums {

    /**
     * GDesktopEnums-3.0
     */


    /**
     * @gir-type Enum
     */
    enum AccentColor {
        BLUE = 0,
        TEAL = 1,
        GREEN = 2,
        YELLOW = 3,
        ORANGE = 4,
        RED = 5,
        PINK = 6,
        PURPLE = 7,
        SLATE = 8,
    }


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
    enum ClockFormat {
        "24H" = 0,
        "12H" = 1,
    }


    /**
     * @gir-type Enum
     */
    enum ColorScheme {
        DEFAULT = 0,
        PREFER_DARK = 1,
        PREFER_LIGHT = 2,
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
    enum FontAntialiasingMode {
        NONE = 0,
        GRAYSCALE = 1,
        RGBA = 2,
    }


    /**
     * @gir-type Enum
     */
    enum FontHinting {
        NONE = 0,
        SLIGHT = 1,
        MEDIUM = 2,
        FULL = 3,
    }


    /**
     * @gir-type Enum
     */
    enum FontRendering {
        AUTOMATIC = 0,
        MANUAL = 1,
    }


    /**
     * @gir-type Enum
     */
    enum FontRgbaOrder {
        RGBA = 0,
        RGB = 1,
        BGR = 2,
        VRGB = 3,
        VBGR = 4,
    }


    /**
     * @gir-type Enum
     */
    enum LocationAccuracyLevel {
        COUNTRY = 0,
        CITY = 1,
        NEIGHBORHOOD = 2,
        STREET = 3,
        EXACT = 4,
    }


    /**
     * @gir-type Enum
     */
    enum MagnifierCaretTrackingMode {
        NONE = 0,
        CENTERED = 1,
        PROPORTIONAL = 2,
        PUSH = 3,
    }


    /**
     * @gir-type Enum
     */
    enum MagnifierFocusTrackingMode {
        NONE = 0,
        CENTERED = 1,
        PROPORTIONAL = 2,
        PUSH = 3,
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
    enum MouseScrollMethod {
        DEFAULT = 0,
        NONE = 1,
        ON_BUTTON_DOWN = 2,
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
    enum PointingStickScrollMethod {
        DEFAULT = 0,
        NONE = 1,
        ON_BUTTON_DOWN = 2,
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
    enum ReducedMotion {
        NO_PREFERENCE = 0,
        REDUCE = 1,
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
        SWITCH_MONITOR = 5,
        KEYBINDING = 6,
    }


    /**
     * @gir-type Enum
     */
    enum StylusEraserButtonMode {
        DEFAULT = 0,
        BUTTON = 1,
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
        MINIMIZE = 4,
        NONE = 5,
        LOWER = 6,
        MENU = 7,
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
    enum TouchpadTapButtonMap {
        DEFAULT = 0,
        LRM = 1,
        LMR = 2,
    }


    /**
     * @gir-type Enum
     */
    enum UsbProtection {
        LOCKSCREEN = 0,
        ALWAYS = 1,
    }


    /**
     * @gir-type Enum
     */
    enum VisualBellType {
        FULLSCREEN_FLASH = 0,
        FRAME_FLASH = 1,
    }


    /**
     * @gir-type Enum
     */
    enum Weekday {
        DEFAULT = 0,
        MONDAY = 1,
        TUESDAY = 2,
        WEDNESDAY = 3,
        THURSDAY = 4,
        FRIDAY = 5,
        SATURDAY = 6,
        SUNDAY = 7,
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

export default GDesktopEnums;

// END
