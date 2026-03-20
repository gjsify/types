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
        BLUE,
        TEAL,
        GREEN,
        YELLOW,
        ORANGE,
        RED,
        PINK,
        PURPLE,
        SLATE,
    }

    /**
     * @gir-type Enum
     */
    enum BackgroundShading {
        SOLID,
        VERTICAL,
        HORIZONTAL,
    }

    /**
     * @gir-type Enum
     */
    enum BackgroundStyle {
        NONE,
        WALLPAPER,
        CENTERED,
        SCALED,
        STRETCHED,
        ZOOM,
        SPANNED,
    }

    /**
     * @gir-type Enum
     */
    enum ClockFormat {
        '24H',
        '12H',
    }

    /**
     * @gir-type Enum
     */
    enum ColorScheme {
        DEFAULT,
        PREFER_DARK,
        PREFER_LIGHT,
    }

    /**
     * @gir-type Enum
     */
    enum DeviceSendEvents {
        ENABLED,
        DISABLED,
        DISABLED_ON_EXTERNAL_MOUSE,
    }

    /**
     * @gir-type Enum
     */
    enum FocusMode {
        CLICK,
        SLOPPY,
        MOUSE,
    }

    /**
     * @gir-type Enum
     */
    enum FocusNewWindows {
        SMART,
        STRICT,
    }

    /**
     * @gir-type Enum
     */
    enum FontAntialiasingMode {
        NONE,
        GRAYSCALE,
        RGBA,
    }

    /**
     * @gir-type Enum
     */
    enum FontHinting {
        NONE,
        SLIGHT,
        MEDIUM,
        FULL,
    }

    /**
     * @gir-type Enum
     */
    enum FontRendering {
        AUTOMATIC,
        MANUAL,
    }

    /**
     * @gir-type Enum
     */
    enum FontRgbaOrder {
        RGBA,
        RGB,
        BGR,
        VRGB,
        VBGR,
    }

    /**
     * @gir-type Enum
     */
    enum LocationAccuracyLevel {
        COUNTRY,
        CITY,
        NEIGHBORHOOD,
        STREET,
        EXACT,
    }

    /**
     * @gir-type Enum
     */
    enum MagnifierCaretTrackingMode {
        NONE,
        CENTERED,
        PROPORTIONAL,
        PUSH,
    }

    /**
     * @gir-type Enum
     */
    enum MagnifierFocusTrackingMode {
        NONE,
        CENTERED,
        PROPORTIONAL,
        PUSH,
    }

    /**
     * @gir-type Enum
     */
    enum MagnifierMouseTrackingMode {
        NONE,
        CENTERED,
        PROPORTIONAL,
        PUSH,
    }

    /**
     * @gir-type Enum
     */
    enum MagnifierScreenPosition {
        NONE,
        FULL_SCREEN,
        TOP_HALF,
        BOTTOM_HALF,
        LEFT_HALF,
        RIGHT_HALF,
    }

    /**
     * @gir-type Enum
     */
    enum MouseDwellDirection {
        LEFT,
        RIGHT,
        UP,
        DOWN,
    }

    /**
     * @gir-type Enum
     */
    enum MouseDwellMode {
        WINDOW,
        GESTURE,
    }

    /**
     * @gir-type Enum
     */
    enum PadButtonAction {
        NONE,
        HELP,
        SWITCH_MONITOR,
        KEYBINDING,
    }

    /**
     * @gir-type Enum
     */
    enum PointerAccelProfile {
        DEFAULT,
        FLAT,
        ADAPTIVE,
    }

    /**
     * @gir-type Enum
     */
    enum PointingStickScrollMethod {
        DEFAULT,
        NONE,
        ON_BUTTON_DOWN,
    }

    /**
     * @gir-type Enum
     */
    enum ProxyMode {
        NONE,
        MANUAL,
        AUTO,
    }

    /**
     * @gir-type Enum
     */
    enum ReducedMotion {
        NO_PREFERENCE,
        REDUCE,
    }

    /**
     * @gir-type Enum
     */
    enum ScreensaverMode {
        BLANK_ONLY,
        RANDOM,
        SINGLE,
    }

    /**
     * @gir-type Enum
     */
    enum StylusButtonAction {
        DEFAULT,
        MIDDLE,
        RIGHT,
        BACK,
        FORWARD,
        SWITCH_MONITOR,
        KEYBINDING,
    }

    /**
     * @gir-type Enum
     */
    enum StylusEraserButtonMode {
        DEFAULT,
        BUTTON,
    }

    /**
     * @gir-type Enum
     */
    enum TabletMapping {
        ABSOLUTE,
        RELATIVE,
    }

    /**
     * @gir-type Enum
     */
    enum TitlebarAction {
        TOGGLE_SHADE,
        TOGGLE_MAXIMIZE,
        TOGGLE_MAXIMIZE_HORIZONTALLY,
        TOGGLE_MAXIMIZE_VERTICALLY,
        MINIMIZE,
        NONE,
        LOWER,
        MENU,
    }

    /**
     * @gir-type Enum
     */
    enum ToolbarIconSize {
        SMALL,
        LARGE,
    }

    /**
     * @gir-type Enum
     */
    enum ToolbarStyle {
        BOTH,
        BOTH_HORIZ,
        ICONS,
        TEXT,
    }

    /**
     * @gir-type Enum
     */
    enum TouchpadClickMethod {
        DEFAULT,
        NONE,
        AREAS,
        FINGERS,
    }

    /**
     * @gir-type Enum
     */
    enum TouchpadHandedness {
        RIGHT,
        LEFT,
        MOUSE,
    }

    /**
     * @gir-type Enum
     */
    enum TouchpadTapButtonMap {
        DEFAULT,
        LRM,
        LMR,
    }

    /**
     * @gir-type Enum
     */
    enum UsbProtection {
        LOCKSCREEN,
        ALWAYS,
    }

    /**
     * @gir-type Enum
     */
    enum VisualBellType {
        FULLSCREEN_FLASH,
        FRAME_FLASH,
    }

    /**
     * @gir-type Enum
     */
    enum Weekday {
        DEFAULT,
        MONDAY,
        TUESDAY,
        WEDNESDAY,
        THURSDAY,
        FRIDAY,
        SATURDAY,
        SUNDAY,
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
