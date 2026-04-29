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
    enum MagnifierLensShape {
        NONE,
        SQUARE,
        HORIZONTAL,
        VERTICAL,
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
    enum MediaKeyType {
        MUTE,
        MUTE_QUIET,
        VOLUME_UP,
        VOLUME_UP_QUIET,
        VOLUME_DOWN,
        VOLUME_DOWN_QUIET,
        MIC_MUTE,
        EJECT,
        MEDIA,
        PLAY,
        PAUSE,
        STOP,
        PREVIOUS,
        NEXT,
        REWIND,
        FORWARD,
        REPEAT,
        RANDOM,
        SCREENSHOT,
        SCREENSHOT_CLIP,
        SEPARATOR,
        WINDOW_SCREENSHOT,
        WINDOW_SCREENSHOT_CLIP,
        AREA_SCREENSHOT,
        AREA_SCREENSHOT_CLIP,
        TOUCHPAD,
        TOUCHPAD_ON,
        TOUCHPAD_OFF,
        LOGOUT,
        SHUTDOWN,
        HOME,
        CALCULATOR,
        SEARCH,
        EMAIL,
        SCREENSAVER,
        HELP,
        TERMINAL,
        WWW,
        VIDEO_OUT,
        ROTATE_VIDEO,
        ROTATE_VIDEO_LOCK,
        SCREENREADER,
        ON_SCREEN_KEYBOARD,
        INCREASE_TEXT,
        DECREASE_TEXT,
        TOGGLE_CONTRAST,
        SUSPEND,
        HIBERNATE,
        SCREEN_BRIGHTNESS_UP,
        SCREEN_BRIGHTNESS_DOWN,
        KEYBOARD_BRIGHTNESS_UP,
        KEYBOARD_BRIGHTNESS_DOWN,
        KEYBOARD_BRIGHTNESS_TOGGLE,
        BATTERY,
        LAST,
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
    enum NotificationScreenDisplay {
        PRIMARY_SCREEN,
        ACTIVE_SCREEN,
        FIXED_SCREEN,
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
    enum ProxyMode {
        NONE,
        MANUAL,
        AUTO,
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
        DISABLED,
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
        TOGGLE_STUCK,
        TOGGLE_ABOVE,
        MINIMIZE,
        NONE,
        LOWER,
        MENU,
    }

    /**
     * @gir-type Enum
     */
    enum TitlebarScrollAction {
        SHADE,
        OPACITY,
        NONE,
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
    enum VisualBellType {
        FULLSCREEN_FLASH,
        FRAME_FLASH,
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
