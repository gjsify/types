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
        COLOR,
        ALPHA,
        COLOR_ALPHA,
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
        DEFAULT,
        NONE,
        GRAY,
        SUBPIXEL,
        FAST,
        GOOD,
        BEST,
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
        WINDING,
        EVEN_ODD,
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
        BUTT,
        ROUND,
        SQUARE,
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
        MITER,
        ROUND,
        BEVEL,
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
        BACKWARD,
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
        NORMAL,
        ITALIC,
        OBLIQUE,
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
        NORMAL,
        BOLD,
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
        DEFAULT,
        RGB,
        BGR,
        VRGB,
        VBGR,
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
        DEFAULT,
        NONE,
        SLIGHT,
        MEDIUM,
        FULL,
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
        DEFAULT,
        OFF,
        ON,
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
        TOY,
        FT,
        WIN32,
        QUARTZ,
        USER,
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
        MOVE_TO,
        LINE_TO,
        CURVE_TO,
        CLOSE_PATH,
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
        INVALID,
        ARGB32,
        RGB24,
        A8,
        A1,
        RGB16_565,
        RGB30,
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
        SOLID,
        SURFACE,
        LINEAR,
        RADIAL,
        MESH,
        RASTER_SOURCE,
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
        NONE,
        REPEAT,
        REFLECT,
        PAD,
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
        FAST,
        GOOD,
        BEST,
        NEAREST,
        BILINEAR,
        GAUSSIAN,
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
        IN,
        OUT,
        PART,
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

        constructor(
            properties?: Partial<{
                x: number;
                y: number;
                width: number;
                height: number;
            }>,
        );
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

        constructor(
            properties?: Partial<{
                x: number;
                y: number;
                width: number;
                height: number;
            }>,
        );
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
