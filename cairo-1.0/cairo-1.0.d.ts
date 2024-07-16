/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

/**
 * cairo-1.0
 */

import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';

export namespace cairo {
    enum Status {
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
    enum Content {
        COLOR,
        ALPHA,
        COLOR_ALPHA,
    }
    enum Operator {
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
    enum Antialias {
        DEFAULT,
        NONE,
        GRAY,
        SUBPIXEL,
        FAST,
        GOOD,
        BEST,
    }
    enum FillRule {
        WINDING,
        EVEN_ODD,
    }
    enum LineCap {
        BUTT,
        ROUND,
        SQUARE,
    }
    enum LineJoin {
        MITER,
        ROUND,
        BEVEL,
    }
    enum TextClusterFlags {
        BACKWARD,
    }
    enum FontSlant {
        NORMAL,
        ITALIC,
        OBLIQUE,
    }
    enum FontWeight {
        NORMAL,
        BOLD,
    }
    enum SubpixelOrder {
        DEFAULT,
        RGB,
        BGR,
        VRGB,
        VBGR,
    }
    enum HintStyle {
        DEFAULT,
        NONE,
        SLIGHT,
        MEDIUM,
        FULL,
    }
    enum HintMetrics {
        DEFAULT,
        OFF,
        ON,
    }
    enum FontType {
        TOY,
        FT,
        WIN32,
        QUARTZ,
        USER,
    }
    enum PathDataType {
        MOVE_TO,
        LINE_TO,
        CURVE_TO,
        CLOSE_PATH,
    }
    enum DeviceType {
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
    enum SurfaceType {
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
    enum Format {
        INVALID,
        ARGB32,
        RGB24,
        A8,
        A1,
        RGB16_565,
        RGB30,
    }
    enum PatternType {
        SOLID,
        SURFACE,
        LINEAR,
        RADIAL,
        MESH,
        RASTER_SOURCE,
    }
    enum Extend {
        NONE,
        REPEAT,
        REFLECT,
        PAD,
    }
    enum Filter {
        FAST,
        GOOD,
        BEST,
        NEAREST,
        BILINEAR,
        GAUSSIAN,
    }
    enum RegionOverlap {
        IN,
        OUT,
        PART,
    }
    function image_surface_create(): void;
    class Context {
        static $gtype: GObject.GType<Context>;

        // Constructors of cairo.Context

        _init(...args: any[]): void;
    }

    class Device {
        static $gtype: GObject.GType<Device>;

        // Constructors of cairo.Device

        _init(...args: any[]): void;
    }

    class Surface {
        static $gtype: GObject.GType<Surface>;

        // Constructors of cairo.Surface

        _init(...args: any[]): void;
    }

    class Matrix {
        static $gtype: GObject.GType<Matrix>;

        // Constructors of cairo.Matrix

        _init(...args: any[]): void;
    }

    class Pattern {
        static $gtype: GObject.GType<Pattern>;

        // Constructors of cairo.Pattern

        _init(...args: any[]): void;
    }

    class Region {
        static $gtype: GObject.GType<Region>;

        // Constructors of cairo.Region

        _init(...args: any[]): void;
    }

    class FontOptions {
        static $gtype: GObject.GType<FontOptions>;

        // Constructors of cairo.FontOptions

        _init(...args: any[]): void;
    }

    class FontFace {
        static $gtype: GObject.GType<FontFace>;

        // Constructors of cairo.FontFace

        _init(...args: any[]): void;
    }

    class ScaledFont {
        static $gtype: GObject.GType<ScaledFont>;

        // Constructors of cairo.ScaledFont

        _init(...args: any[]): void;
    }

    class Path {
        static $gtype: GObject.GType<Path>;

        // Constructors of cairo.Path

        _init(...args: any[]): void;
    }

    class Rectangle {
        static $gtype: GObject.GType<Rectangle>;

        // Own fields of cairo.Rectangle

        x: number;
        y: number;
        width: number;
        height: number;

        // Constructors of cairo.Rectangle

        constructor(
            properties?: Partial<{
                x: number;
                y: number;
                width: number;
                height: number;
            }>,
        );
        _init(...args: any[]): void;
    }

    class RectangleInt {
        static $gtype: GObject.GType<RectangleInt>;

        // Own fields of cairo.RectangleInt

        x: number;
        y: number;
        width: number;
        height: number;

        // Constructors of cairo.RectangleInt

        constructor(
            properties?: Partial<{
                x: number;
                y: number;
                width: number;
                height: number;
            }>,
        );
        _init(...args: any[]): void;
    }

    // TODO
    // See
    // - https://gitlab.gnome.org/GNOME/gjs/-/blob/master/installed-tests/js/testCairoModule.js
    // - https://gitlab.gnome.org/GNOME/gjs/-/blob/master/installed-tests/js/testCairo.js
    // - https://gitlab.gnome.org/GNOME/gjs/-/blob/master/doc/cairo.md

    // image_surface_create -> ImageSurface
    // Context.constructor(surface: cairo.ImageSurface)
    // ...

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

export default cairo;
// END
