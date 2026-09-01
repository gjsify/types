
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
import type GLib from '@girs/glib-2.0';

export namespace cairo {

    /**
     * cairo-1.0
     */


    /**
     * @gir-type Enum
     */
    export namespace Status {
        export const $gtype: GObject.GType<Status>;
    }

    /**
     * @gir-type Enum
     */
    enum Status {
        SUCCESS = 0,
        NO_MEMORY = 1,
        INVALID_RESTORE = 2,
        INVALID_POP_GROUP = 3,
        NO_CURRENT_POINT = 4,
        INVALID_MATRIX = 5,
        INVALID_STATUS = 6,
        NULL_POINTER = 7,
        INVALID_STRING = 8,
        INVALID_PATH_DATA = 9,
        READ_ERROR = 10,
        WRITE_ERROR = 11,
        SURFACE_FINISHED = 12,
        SURFACE_TYPE_MISMATCH = 13,
        PATTERN_TYPE_MISMATCH = 14,
        INVALID_CONTENT = 15,
        INVALID_FORMAT = 16,
        INVALID_VISUAL = 17,
        FILE_NOT_FOUND = 18,
        INVALID_DASH = 19,
        INVALID_DSC_COMMENT = 20,
        INVALID_INDEX = 21,
        CLIP_NOT_REPRESENTABLE = 22,
        TEMP_FILE_ERROR = 23,
        INVALID_STRIDE = 24,
        FONT_TYPE_MISMATCH = 25,
        USER_FONT_IMMUTABLE = 26,
        USER_FONT_ERROR = 27,
        NEGATIVE_COUNT = 28,
        INVALID_CLUSTERS = 29,
        INVALID_SLANT = 30,
        INVALID_WEIGHT = 31,
        INVALID_SIZE = 32,
        USER_FONT_NOT_IMPLEMENTED = 33,
        DEVICE_TYPE_MISMATCH = 34,
        DEVICE_ERROR = 35,
        INVALID_MESH_CONSTRUCTION = 36,
        DEVICE_FINISHED = 37,
        JBIG2_GLOBAL_MISSING = 38,
    }


    /**
     * @gir-type Enum
     */
    export namespace Content {
        export const $gtype: GObject.GType<Content>;
    }

    /**
     * @gir-type Enum
     */
    enum Content {
        COLOR = 4096,
        ALPHA = 8192,
        COLOR_ALPHA = 12288,
    }


    /**
     * @gir-type Enum
     */
    export namespace Operator {
        export const $gtype: GObject.GType<Operator>;
    }

    /**
     * @gir-type Enum
     */
    enum Operator {
        CLEAR = 0,
        SOURCE = 1,
        OVER = 2,
        IN = 3,
        OUT = 4,
        ATOP = 5,
        DEST = 6,
        DEST_OVER = 7,
        DEST_IN = 8,
        DEST_OUT = 9,
        DEST_ATOP = 10,
        XOR = 11,
        ADD = 12,
        SATURATE = 13,
        MULTIPLY = 14,
        SCREEN = 15,
        OVERLAY = 16,
        DARKEN = 17,
        LIGHTEN = 18,
        COLOR_DODGE = 19,
        COLOR_BURN = 20,
        HARD_LIGHT = 21,
        SOFT_LIGHT = 22,
        DIFFERENCE = 23,
        EXCLUSION = 24,
        HSL_HUE = 25,
        HSL_SATURATION = 26,
        HSL_COLOR = 27,
        HSL_LUMINOSITY = 28,
    }


    /**
     * @gir-type Enum
     */
    export namespace Antialias {
        export const $gtype: GObject.GType<Antialias>;
    }

    /**
     * @gir-type Enum
     */
    enum Antialias {
        DEFAULT = 0,
        NONE = 1,
        GRAY = 2,
        SUBPIXEL = 3,
        FAST = 4,
        GOOD = 5,
        BEST = 6,
    }


    /**
     * @gir-type Enum
     */
    export namespace FillRule {
        export const $gtype: GObject.GType<FillRule>;
    }

    /**
     * @gir-type Enum
     */
    enum FillRule {
        WINDING = 0,
        EVEN_ODD = 1,
    }


    /**
     * @gir-type Enum
     */
    export namespace LineCap {
        export const $gtype: GObject.GType<LineCap>;
    }

    /**
     * @gir-type Enum
     */
    enum LineCap {
        BUTT = 0,
        ROUND = 1,
        SQUARE = 2,
    }


    /**
     * @gir-type Enum
     */
    export namespace LineJoin {
        export const $gtype: GObject.GType<LineJoin>;
    }

    /**
     * @gir-type Enum
     */
    enum LineJoin {
        MITER = 0,
        ROUND = 1,
        BEVEL = 2,
    }


    /**
     * @gir-type Enum
     */
    export namespace TextClusterFlags {
        export const $gtype: GObject.GType<TextClusterFlags>;
    }

    /**
     * @gir-type Enum
     */
    enum TextClusterFlags {
        BACKWARD = 1,
    }


    /**
     * @gir-type Enum
     */
    export namespace FontSlant {
        export const $gtype: GObject.GType<FontSlant>;
    }

    /**
     * @gir-type Enum
     */
    enum FontSlant {
        NORMAL = 0,
        ITALIC = 1,
        OBLIQUE = 2,
    }


    /**
     * @gir-type Enum
     */
    export namespace FontWeight {
        export const $gtype: GObject.GType<FontWeight>;
    }

    /**
     * @gir-type Enum
     */
    enum FontWeight {
        NORMAL = 0,
        BOLD = 1,
    }


    /**
     * @gir-type Enum
     */
    export namespace SubpixelOrder {
        export const $gtype: GObject.GType<SubpixelOrder>;
    }

    /**
     * @gir-type Enum
     */
    enum SubpixelOrder {
        DEFAULT = 0,
        RGB = 1,
        BGR = 2,
        VRGB = 3,
        VBGR = 4,
    }


    /**
     * @gir-type Enum
     */
    export namespace HintStyle {
        export const $gtype: GObject.GType<HintStyle>;
    }

    /**
     * @gir-type Enum
     */
    enum HintStyle {
        DEFAULT = 0,
        NONE = 1,
        SLIGHT = 2,
        MEDIUM = 3,
        FULL = 4,
    }


    /**
     * @gir-type Enum
     */
    export namespace HintMetrics {
        export const $gtype: GObject.GType<HintMetrics>;
    }

    /**
     * @gir-type Enum
     */
    enum HintMetrics {
        DEFAULT = 0,
        OFF = 1,
        ON = 2,
    }


    /**
     * @gir-type Enum
     */
    export namespace FontType {
        export const $gtype: GObject.GType<FontType>;
    }

    /**
     * @gir-type Enum
     */
    enum FontType {
        TOY = 0,
        FT = 1,
        WIN32 = 2,
        QUARTZ = 3,
        USER = 4,
    }


    /**
     * @gir-type Enum
     */
    export namespace PathDataType {
        export const $gtype: GObject.GType<PathDataType>;
    }

    /**
     * @gir-type Enum
     */
    enum PathDataType {
        MOVE_TO = 0,
        LINE_TO = 1,
        CURVE_TO = 2,
        CLOSE_PATH = 3,
    }


    /**
     * @gir-type Enum
     */
    export namespace DeviceType {
        export const $gtype: GObject.GType<DeviceType>;
    }

    /**
     * @gir-type Enum
     */
    enum DeviceType {
        DRM = 0,
        GL = 1,
        SCRIPT = 2,
        XCB = 3,
        XLIB = 4,
        XML = 5,
        COGL = 6,
        WIN32 = 7,
        INVALID = -1,
    }


    /**
     * @gir-type Enum
     */
    export namespace SurfaceType {
        export const $gtype: GObject.GType<SurfaceType>;
    }

    /**
     * @gir-type Enum
     */
    enum SurfaceType {
        IMAGE = 0,
        PDF = 1,
        PS = 2,
        XLIB = 3,
        XCB = 4,
        GLITZ = 5,
        QUARTZ = 6,
        WIN32 = 7,
        BEOS = 8,
        DIRECTFB = 9,
        SVG = 10,
        OS2 = 11,
        WIN32_PRINTING = 12,
        QUARTZ_IMAGE = 13,
        SCRIPT = 14,
        QT = 15,
        RECORDING = 16,
        VG = 17,
        GL = 18,
        DRM = 19,
        TEE = 20,
        XML = 21,
        SKIA = 22,
        SUBSURFACE = 23,
        COGL = 24,
    }


    /**
     * @gir-type Enum
     */
    export namespace Format {
        export const $gtype: GObject.GType<Format>;
    }

    /**
     * @gir-type Enum
     */
    enum Format {
        INVALID = -1,
        ARGB32 = 0,
        RGB24 = 1,
        A8 = 2,
        A1 = 3,
        RGB16_565 = 4,
        RGB30 = 5,
    }


    /**
     * @gir-type Enum
     */
    export namespace PatternType {
        export const $gtype: GObject.GType<PatternType>;
    }

    /**
     * @gir-type Enum
     */
    enum PatternType {
        SOLID = 0,
        SURFACE = 1,
        LINEAR = 2,
        RADIAL = 3,
        MESH = 4,
        RASTER_SOURCE = 5,
    }


    /**
     * @gir-type Enum
     */
    export namespace Extend {
        export const $gtype: GObject.GType<Extend>;
    }

    /**
     * @gir-type Enum
     */
    enum Extend {
        NONE = 0,
        REPEAT = 1,
        REFLECT = 2,
        PAD = 3,
    }


    /**
     * @gir-type Enum
     */
    export namespace Filter {
        export const $gtype: GObject.GType<Filter>;
    }

    /**
     * @gir-type Enum
     */
    enum Filter {
        FAST = 0,
        GOOD = 1,
        BEST = 2,
        NEAREST = 3,
        BILINEAR = 4,
        GAUSSIAN = 5,
    }


    /**
     * @gir-type Enum
     */
    export namespace RegionOverlap {
        export const $gtype: GObject.GType<RegionOverlap>;
    }

    /**
     * @gir-type Enum
     */
    enum RegionOverlap {
        IN = 0,
        OUT = 1,
        PART = 2,
    }


    function image_surface_create(): void;

    /**
     * @gir-type Foreign Struct
     */
    class Context {
        static $gtype: GObject.GType<Context>;
    }


    /**
     * @gir-type Foreign Struct
     */
    class Device {
        static $gtype: GObject.GType<Device>;
    }


    /**
     * @gir-type Foreign Struct
     */
    class Surface {
        static $gtype: GObject.GType<Surface>;
    }


    /**
     * @gir-type Foreign Struct
     */
    class Matrix {
        static $gtype: GObject.GType<Matrix>;
    }


    /**
     * @gir-type Foreign Struct
     */
    class Pattern {
        static $gtype: GObject.GType<Pattern>;
    }


    /**
     * @gir-type Foreign Struct
     */
    class Region {
        static $gtype: GObject.GType<Region>;
    }


    /**
     * @gir-type Foreign Struct
     */
    class FontOptions {
        static $gtype: GObject.GType<FontOptions>;
    }


    /**
     * @gir-type Foreign Struct
     */
    class FontFace {
        static $gtype: GObject.GType<FontFace>;
    }


    /**
     * @gir-type Foreign Struct
     */
    class ScaledFont {
        static $gtype: GObject.GType<ScaledFont>;
    }


    /**
     * @gir-type Foreign Struct
     */
    class Path {
        static $gtype: GObject.GType<Path>;
    }


    /**
     * @gir-type Struct
     */
    class Rectangle {
        static $gtype: GObject.GType<Rectangle>;

        // Fields
        x: number;

        y: number;

        width: number;

        height: number;

        // Constructors

        constructor(properties?: Partial<{
            x: number;
            y: number;
            width: number;
            height: number;
        }>);
    }


    /**
     * @gir-type Struct
     */
    class RectangleInt {
        static $gtype: GObject.GType<RectangleInt>;

        // Fields
        x: number;

        y: number;

        width: number;

        height: number;

        // Constructors

        constructor(properties?: Partial<{
            x: number;
            y: number;
            width: number;
            height: number;
        }>);
    }


    /**
     * @gir-type Struct
     */
    class Glyph {
        static $gtype: GObject.GType<Glyph>;

        // Fields
        index: number;

        x: number;

        y: number;
    }


    /**
     * @gir-type Struct
     */
    class TextCluster {
        static $gtype: GObject.GType<TextCluster>;

        // Fields
        num_bytes: number;

        num_glyphs: number;

        // Constructors

        constructor(properties?: Partial<{
            num_bytes: number;
            num_glyphs: number;
        }>);
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

export default cairo;

// END
