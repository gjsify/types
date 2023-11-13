
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './cairo-1.0-ambient.d.ts';
import './cairo-1.0-import.d.ts';
/**
 * cairo-1.0
 */

import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

export enum Status {
    SUCCESS,
    NO_MEMORY,
    INVALID_RESTORE,
    INVALID_POP_GROUP,
    NO_CURRENT_POINT,
    INVALID_MATRIX,
    INVALID_STATUS,
    NULL_POINTER,
    INVALID_STRING,
    INVALID_PATH_DATA,
    READ_ERROR,
    WRITE_ERROR,
    SURFACE_FINISHED,
    SURFACE_TYPE_MISMATCH,
    PATTERN_TYPE_MISMATCH,
    INVALID_CONTENT,
    INVALID_FORMAT,
    INVALID_VISUAL,
    FILE_NOT_FOUND,
    INVALID_DASH,
    INVALID_DSC_COMMENT,
    INVALID_INDEX,
    CLIP_NOT_REPRESENTABLE,
    TEMP_FILE_ERROR,
    INVALID_STRIDE,
    FONT_TYPE_MISMATCH,
    USER_FONT_IMMUTABLE,
    USER_FONT_ERROR,
    NEGATIVE_COUNT,
    INVALID_CLUSTERS,
    INVALID_SLANT,
    INVALID_WEIGHT,
    INVALID_SIZE,
    USER_FONT_NOT_IMPLEMENTED,
    DEVICE_TYPE_MISMATCH,
    DEVICE_ERROR,
    INVALID_MESH_CONSTRUCTION,
    DEVICE_FINISHED,
    JBIG2_GLOBAL_MISSING,
}
export enum Content {
    COLOR,
    ALPHA,
    COLOR_ALPHA,
}
export enum Operator {
    CLEAR,
    SOURCE,
    OVER,
    IN,
    OUT,
    ATOP,
    DEST,
    DEST_OVER,
    DEST_IN,
    DEST_OUT,
    DEST_ATOP,
    XOR,
    ADD,
    SATURATE,
    MULTIPLY,
    SCREEN,
    OVERLAY,
    DARKEN,
    LIGHTEN,
    COLOR_DODGE,
    COLOR_BURN,
    HARD_LIGHT,
    SOFT_LIGHT,
    DIFFERENCE,
    EXCLUSION,
    HSL_HUE,
    HSL_SATURATION,
    HSL_COLOR,
    HSL_LUMINOSITY,
}
export enum Antialias {
    DEFAULT,
    NONE,
    GRAY,
    SUBPIXEL,
    FAST,
    GOOD,
    BEST,
}
export enum FillRule {
    WINDING,
    EVEN_ODD,
}
export enum LineCap {
    BUTT,
    ROUND,
    SQUARE,
}
export enum LineJoin {
    MITER,
    ROUND,
    BEVEL,
}
export enum TextClusterFlags {
    BACKWARD,
}
export enum FontSlant {
    NORMAL,
    ITALIC,
    OBLIQUE,
}
export enum FontWeight {
    NORMAL,
    BOLD,
}
export enum SubpixelOrder {
    DEFAULT,
    RGB,
    BGR,
    VRGB,
    VBGR,
}
export enum HintStyle {
    DEFAULT,
    NONE,
    SLIGHT,
    MEDIUM,
    FULL,
}
export enum HintMetrics {
    DEFAULT,
    OFF,
    ON,
}
export enum FontType {
    TOY,
    FT,
    WIN32,
    QUARTZ,
    USER,
}
export enum PathDataType {
    MOVE_TO,
    LINE_TO,
    CURVE_TO,
    CLOSE_PATH,
}
export enum DeviceType {
    DRM,
    GL,
    SCRIPT,
    XCB,
    XLIB,
    XML,
    COGL,
    WIN32,
    INVALID,
}
export enum SurfaceType {
    IMAGE,
    PDF,
    PS,
    XLIB,
    XCB,
    GLITZ,
    QUARTZ,
    WIN32,
    BEOS,
    DIRECTFB,
    SVG,
    OS2,
    WIN32_PRINTING,
    QUARTZ_IMAGE,
    SCRIPT,
    QT,
    RECORDING,
    VG,
    GL,
    DRM,
    TEE,
    XML,
    SKIA,
    SUBSURFACE,
    COGL,
}
export enum Format {
    INVALID,
    ARGB32,
    RGB24,
    A8,
    A1,
    RGB16_565,
    RGB30,
}
export enum PatternType {
    SOLID,
    SURFACE,
    LINEAR,
    RADIAL,
    MESH,
    RASTER_SOURCE,
}
export enum Extend {
    NONE,
    REPEAT,
    REFLECT,
    PAD,
}
export enum Filter {
    FAST,
    GOOD,
    BEST,
    NEAREST,
    BILINEAR,
    GAUSSIAN,
}
export enum RegionOverlap {
    IN,
    OUT,
    PART,
}
export function image_surface_create(): void
// TODO
// See
// - https://gitlab.gnome.org/GNOME/gjs/-/blob/master/installed-tests/js/testCairoModule.js
// - https://gitlab.gnome.org/GNOME/gjs/-/blob/master/installed-tests/js/testCairo.js
// - https://gitlab.gnome.org/GNOME/gjs/-/blob/master/doc/cairo.md

// image_surface_create -> ImageSurface
// Context.constructor(surface: cairo.ImageSurface)
// ...

export interface Context {
}

export class Context {

    // Own properties of cairo-1.0.cairo.Context

    static name: string
}

export interface Device {
}

export class Device {

    // Own properties of cairo-1.0.cairo.Device

    static name: string
}

export interface Surface {
}

export class Surface {

    // Own properties of cairo-1.0.cairo.Surface

    static name: string
}

export interface Matrix {
}

export class Matrix {

    // Own properties of cairo-1.0.cairo.Matrix

    static name: string
}

export interface Pattern {
}

export class Pattern {

    // Own properties of cairo-1.0.cairo.Pattern

    static name: string
}

export interface Region {
}

export class Region {

    // Own properties of cairo-1.0.cairo.Region

    static name: string
}

export interface FontOptions {
}

export class FontOptions {

    // Own properties of cairo-1.0.cairo.FontOptions

    static name: string
}

export interface FontFace {
}

export class FontFace {

    // Own properties of cairo-1.0.cairo.FontFace

    static name: string
}

export interface ScaledFont {
}

export class ScaledFont {

    // Own properties of cairo-1.0.cairo.ScaledFont

    static name: string
}

export interface Path {
}

export class Path {

    // Own properties of cairo-1.0.cairo.Path

    static name: string
}

export interface Rectangle {

    // Own fields of cairo-1.0.cairo.Rectangle

    x: number
    y: number
    width: number
    height: number
}

export class Rectangle {

    // Own properties of cairo-1.0.cairo.Rectangle

    static name: string
}

export interface RectangleInt {

    // Own fields of cairo-1.0.cairo.RectangleInt

    x: number
    y: number
    width: number
    height: number
}

export class RectangleInt {

    // Own properties of cairo-1.0.cairo.RectangleInt

    static name: string
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