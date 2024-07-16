/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

/**
 * CDesktopEnums-3.0
 */

import type GObject from '@girs/gobject-2.0';

export namespace CDesktopEnums {
    enum BackgroundShading {
        SOLID,
        VERTICAL,
        HORIZONTAL,
    }
    enum BackgroundStyle {
        NONE,
        WALLPAPER,
        CENTERED,
        SCALED,
        STRETCHED,
        ZOOM,
        SPANNED,
    }
    enum DeviceSendEvents {
        ENABLED,
        DISABLED,
        DISABLED_ON_EXTERNAL_MOUSE,
    }
    enum FocusMode {
        CLICK,
        SLOPPY,
        MOUSE,
    }
    enum FocusNewWindows {
        SMART,
        STRICT,
    }
    enum MagnifierLensShape {
        NONE,
        SQUARE,
        HORIZONTAL,
        VERTICAL,
    }
    enum MagnifierMouseTrackingMode {
        NONE,
        CENTERED,
        PROPORTIONAL,
        PUSH,
    }
    enum MagnifierScreenPosition {
        NONE,
        FULL_SCREEN,
        TOP_HALF,
        BOTTOM_HALF,
        LEFT_HALF,
        RIGHT_HALF,
    }
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
    enum MouseDwellDirection {
        LEFT,
        RIGHT,
        UP,
        DOWN,
    }
    enum MouseDwellMode {
        WINDOW,
        GESTURE,
    }
    enum NotificationScreenDisplay {
        PRIMARY_SCREEN,
        ACTIVE_SCREEN,
        FIXED_SCREEN,
    }
    enum PadButtonAction {
        NONE,
        HELP,
        SWITCH_MONITOR,
        KEYBINDING,
    }
    enum PointerAccelProfile {
        DEFAULT,
        FLAT,
        ADAPTIVE,
    }
    enum ProxyMode {
        NONE,
        MANUAL,
        AUTO,
    }
    enum ScreensaverMode {
        BLANK_ONLY,
        RANDOM,
        SINGLE,
    }
    enum StylusButtonAction {
        DEFAULT,
        MIDDLE,
        RIGHT,
        BACK,
        FORWARD,
        DISABLED,
    }
    enum TabletMapping {
        ABSOLUTE,
        RELATIVE,
    }
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
    enum TitlebarScrollAction {
        SHADE,
        OPACITY,
        NONE,
    }
    enum ToolbarIconSize {
        SMALL,
        LARGE,
    }
    enum ToolbarStyle {
        BOTH,
        BOTH_HORIZ,
        ICONS,
        TEXT,
    }
    enum TouchpadClickMethod {
        DEFAULT,
        NONE,
        AREAS,
        FINGERS,
    }
    enum TouchpadHandedness {
        RIGHT,
        LEFT,
        MOUSE,
    }
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
