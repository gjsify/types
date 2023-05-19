
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './gdesktopenums-3.0-ambient.d.ts';
import './gdesktopenums-3.0-import.d.ts';
/**
 * GDesktopEnums-3.0
 */

import type GObject from '@girs/gobject-2.0';

export enum BackgroundShading {
    SOLID,
    VERTICAL,
    HORIZONTAL,
}
export enum BackgroundStyle {
    NONE,
    WALLPAPER,
    CENTERED,
    SCALED,
    STRETCHED,
    ZOOM,
    SPANNED,
}
export enum ClockFormat {
    TODO_24H,
    TODO_12H,
}
export enum ColorScheme {
    DEFAULT,
    PREFER_DARK,
    PREFER_LIGHT,
}
export enum DeviceSendEvents {
    ENABLED,
    DISABLED,
    DISABLED_ON_EXTERNAL_MOUSE,
}
export enum FocusMode {
    CLICK,
    SLOPPY,
    MOUSE,
}
export enum FocusNewWindows {
    SMART,
    STRICT,
}
export enum FontAntialiasingMode {
    NONE,
    GRAYSCALE,
    RGBA,
}
export enum FontHinting {
    NONE,
    SLIGHT,
    MEDIUM,
    FULL,
}
export enum FontRgbaOrder {
    RGBA,
    RGB,
    BGR,
    VRGB,
    VBGR,
}
export enum LocationAccuracyLevel {
    COUNTRY,
    CITY,
    NEIGHBORHOOD,
    STREET,
    EXACT,
}
export enum MagnifierCaretTrackingMode {
    NONE,
    CENTERED,
    PROPORTIONAL,
    PUSH,
}
export enum MagnifierFocusTrackingMode {
    NONE,
    CENTERED,
    PROPORTIONAL,
    PUSH,
}
export enum MagnifierMouseTrackingMode {
    NONE,
    CENTERED,
    PROPORTIONAL,
    PUSH,
}
export enum MagnifierScreenPosition {
    NONE,
    FULL_SCREEN,
    TOP_HALF,
    BOTTOM_HALF,
    LEFT_HALF,
    RIGHT_HALF,
}
export enum MouseDwellDirection {
    LEFT,
    RIGHT,
    UP,
    DOWN,
}
export enum MouseDwellMode {
    WINDOW,
    GESTURE,
}
export enum PadButtonAction {
    NONE,
    HELP,
    SWITCH_MONITOR,
    KEYBINDING,
}
export enum PointerAccelProfile {
    DEFAULT,
    FLAT,
    ADAPTIVE,
}
export enum PointingStickScrollMethod {
    DEFAULT,
    NONE,
    ON_BUTTON_DOWN,
}
export enum ProxyMode {
    NONE,
    MANUAL,
    AUTO,
}
export enum ScreensaverMode {
    BLANK_ONLY,
    RANDOM,
    SINGLE,
}
export enum StylusButtonAction {
    DEFAULT,
    MIDDLE,
    RIGHT,
    BACK,
    FORWARD,
}
export enum TabletMapping {
    ABSOLUTE,
    RELATIVE,
}
export enum TitlebarAction {
    TOGGLE_SHADE,
    TOGGLE_MAXIMIZE,
    TOGGLE_MAXIMIZE_HORIZONTALLY,
    TOGGLE_MAXIMIZE_VERTICALLY,
    MINIMIZE,
    NONE,
    LOWER,
    MENU,
}
export enum ToolbarIconSize {
    SMALL,
    LARGE,
}
export enum ToolbarStyle {
    BOTH,
    BOTH_HORIZ,
    ICONS,
    TEXT,
}
export enum TouchpadClickMethod {
    DEFAULT,
    NONE,
    AREAS,
    FINGERS,
}
export enum TouchpadHandedness {
    RIGHT,
    LEFT,
    MOUSE,
}
export enum TouchpadTapButtonMap {
    DEFAULT,
    LRM,
    LMR,
}
export enum UsbProtection {
    LOCKSCREEN,
    ALWAYS,
}
export enum VisualBellType {
    FULLSCREEN_FLASH,
    FRAME_FLASH,
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