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

    export namespace BackgroundShading {
        export const $gtype: GObject.GType<BackgroundShading>;
    }

    enum BackgroundShading {
        SOLID,
        VERTICAL,
        HORIZONTAL,
    }

    export namespace BackgroundStyle {
        export const $gtype: GObject.GType<BackgroundStyle>;
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

    export namespace DeviceSendEvents {
        export const $gtype: GObject.GType<DeviceSendEvents>;
    }

    enum DeviceSendEvents {
        ENABLED,
        DISABLED,
        DISABLED_ON_EXTERNAL_MOUSE,
    }

    export namespace FocusMode {
        export const $gtype: GObject.GType<FocusMode>;
    }

    enum FocusMode {
        CLICK,
        SLOPPY,
        MOUSE,
    }

    export namespace FocusNewWindows {
        export const $gtype: GObject.GType<FocusNewWindows>;
    }

    enum FocusNewWindows {
        SMART,
        STRICT,
    }

    export namespace MagnifierLensShape {
        export const $gtype: GObject.GType<MagnifierLensShape>;
    }

    enum MagnifierLensShape {
        NONE,
        SQUARE,
        HORIZONTAL,
        VERTICAL,
    }

    export namespace MagnifierMouseTrackingMode {
        export const $gtype: GObject.GType<MagnifierMouseTrackingMode>;
    }

    enum MagnifierMouseTrackingMode {
        NONE,
        CENTERED,
        PROPORTIONAL,
        PUSH,
    }

    export namespace MagnifierScreenPosition {
        export const $gtype: GObject.GType<MagnifierScreenPosition>;
    }

    enum MagnifierScreenPosition {
        NONE,
        FULL_SCREEN,
        TOP_HALF,
        BOTTOM_HALF,
        LEFT_HALF,
        RIGHT_HALF,
    }

    export namespace MediaKeyType {
        export const $gtype: GObject.GType<MediaKeyType>;
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

    export namespace MouseDwellDirection {
        export const $gtype: GObject.GType<MouseDwellDirection>;
    }

    enum MouseDwellDirection {
        LEFT,
        RIGHT,
        UP,
        DOWN,
    }

    export namespace MouseDwellMode {
        export const $gtype: GObject.GType<MouseDwellMode>;
    }

    enum MouseDwellMode {
        WINDOW,
        GESTURE,
    }

    export namespace NotificationScreenDisplay {
        export const $gtype: GObject.GType<NotificationScreenDisplay>;
    }

    enum NotificationScreenDisplay {
        PRIMARY_SCREEN,
        ACTIVE_SCREEN,
        FIXED_SCREEN,
    }

    export namespace PadButtonAction {
        export const $gtype: GObject.GType<PadButtonAction>;
    }

    enum PadButtonAction {
        NONE,
        HELP,
        SWITCH_MONITOR,
        KEYBINDING,
    }

    export namespace PointerAccelProfile {
        export const $gtype: GObject.GType<PointerAccelProfile>;
    }

    enum PointerAccelProfile {
        DEFAULT,
        FLAT,
        ADAPTIVE,
    }

    export namespace ProxyMode {
        export const $gtype: GObject.GType<ProxyMode>;
    }

    enum ProxyMode {
        NONE,
        MANUAL,
        AUTO,
    }

    export namespace ScreensaverMode {
        export const $gtype: GObject.GType<ScreensaverMode>;
    }

    enum ScreensaverMode {
        BLANK_ONLY,
        RANDOM,
        SINGLE,
    }

    export namespace StylusButtonAction {
        export const $gtype: GObject.GType<StylusButtonAction>;
    }

    enum StylusButtonAction {
        DEFAULT,
        MIDDLE,
        RIGHT,
        BACK,
        FORWARD,
        DISABLED,
    }

    export namespace TabletMapping {
        export const $gtype: GObject.GType<TabletMapping>;
    }

    enum TabletMapping {
        ABSOLUTE,
        RELATIVE,
    }

    export namespace TitlebarAction {
        export const $gtype: GObject.GType<TitlebarAction>;
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

    export namespace TitlebarScrollAction {
        export const $gtype: GObject.GType<TitlebarScrollAction>;
    }

    enum TitlebarScrollAction {
        SHADE,
        OPACITY,
        NONE,
    }

    export namespace ToolbarIconSize {
        export const $gtype: GObject.GType<ToolbarIconSize>;
    }

    enum ToolbarIconSize {
        SMALL,
        LARGE,
    }

    export namespace ToolbarStyle {
        export const $gtype: GObject.GType<ToolbarStyle>;
    }

    enum ToolbarStyle {
        BOTH,
        BOTH_HORIZ,
        ICONS,
        TEXT,
    }

    export namespace TouchpadClickMethod {
        export const $gtype: GObject.GType<TouchpadClickMethod>;
    }

    enum TouchpadClickMethod {
        DEFAULT,
        NONE,
        AREAS,
        FINGERS,
    }

    export namespace TouchpadHandedness {
        export const $gtype: GObject.GType<TouchpadHandedness>;
    }

    enum TouchpadHandedness {
        RIGHT,
        LEFT,
        MOUSE,
    }

    export namespace VisualBellType {
        export const $gtype: GObject.GType<VisualBellType>;
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
