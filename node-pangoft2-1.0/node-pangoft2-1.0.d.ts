
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */
/**
 * PangoFT2-1.0
 */

import type freetype2 from '@girs/freetype2-2.0';
import type PangoFc from '@girs/pangofc-1.0';
import type fontconfig from '@girs/fontconfig-2.0';
import type Pango from '@girs/pango-1.0';
import type cairo from '@girs/cairo-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Gio from '@girs/gio-2.0';

export namespace PangoFT2 {

/**
 * Gets the `PangoCoverage` for a `PangoFT2Font`.
 * 
 * Use [method`Pango`.Font.get_coverage] instead.
 * @param font a Pango FT2 font
 * @param language a language tag.
 * @returns a `PangoCoverage`
 */
function fontGetCoverage(font: Pango.Font, language: Pango.Language): Pango.Coverage
/**
 * Retrieves kerning information for a combination of two glyphs.
 * 
 * Use pango_fc_font_kern_glyphs() instead.
 * @param font a `PangoFont`
 * @param left the left `PangoGlyph`
 * @param right the right `PangoGlyph`
 * @returns The amount of kerning (in Pango units) to   apply for the given combination of glyphs.
 */
function fontGetKerning(font: Pango.Font, left: Pango.Glyph, right: Pango.Glyph): number
/**
 * Return the index of a glyph suitable for drawing unknown
 * characters with `font,` or %PANGO_GLYPH_EMPTY if no suitable
 * glyph found.
 * 
 * If you want to draw an unknown-box for a character that
 * is not covered by the font, use PANGO_GET_UNKNOWN_GLYPH()
 * instead.
 * @param font a `PangoFont`
 * @returns a glyph index into @font, or %PANGO_GLYPH_EMPTY
 */
function getUnknownGlyph(font: Pango.Font): Pango.Glyph
/**
 * Renders a `PangoGlyphString` onto a FreeType2 bitmap.
 * @param bitmap the FreeType2 bitmap onto which to draw the string
 * @param font the font in which to draw the string
 * @param glyphs the glyph string to draw
 * @param x the x position of the start of the string (in pixels)
 * @param y the y position of the baseline (in pixels)
 */
function render(bitmap: freetype2.Bitmap, font: Pango.Font, glyphs: Pango.GlyphString, x: number, y: number): void
/**
 * Render a `PangoLayout` onto a FreeType2 bitmap
 * @param bitmap a FT_Bitmap to render the layout onto
 * @param layout a `PangoLayout`
 * @param x the X position of the left of the layout (in pixels)
 * @param y the Y position of the top of the layout (in pixels)
 */
function renderLayout(bitmap: freetype2.Bitmap, layout: Pango.Layout, x: number, y: number): void
/**
 * Render a `PangoLayoutLine` onto a FreeType2 bitmap
 * @param bitmap a FT_Bitmap to render the line onto
 * @param line a `PangoLayoutLine`
 * @param x the x position of start of string (in pixels)
 * @param y the y position of baseline (in pixels)
 */
function renderLayoutLine(bitmap: freetype2.Bitmap, line: Pango.LayoutLine, x: number, y: number): void
/**
 * Render a `PangoLayoutLine` onto a FreeType2 bitmap, with he
 * location specified in fixed-point Pango units rather than
 * pixels.
 * 
 * (Using this will avoid extra inaccuracies from rounding
 * to integer pixels multiple times, even if the final glyph
 * positions are integers.)
 * @param bitmap a FT_Bitmap to render the line onto
 * @param line a `PangoLayoutLine`
 * @param x the x position of start of string (in Pango units)
 * @param y the y position of baseline (in Pango units)
 */
function renderLayoutLineSubpixel(bitmap: freetype2.Bitmap, line: Pango.LayoutLine, x: number, y: number): void
/**
 * Render a `PangoLayout` onto a FreeType2 bitmap, with he
 * location specified in fixed-point Pango units rather than
 * pixels.
 * 
 * (Using this will avoid extra inaccuracies from rounding
 * to integer pixels multiple times, even if the final glyph
 * positions are integers.)
 * @param bitmap a FT_Bitmap to render the layout onto
 * @param layout a `PangoLayout`
 * @param x the X position of the left of the layout (in Pango units)
 * @param y the Y position of the top of the layout (in Pango units)
 */
function renderLayoutSubpixel(bitmap: freetype2.Bitmap, layout: Pango.Layout, x: number, y: number): void
/**
 * Renders a `PangoGlyphString` onto a FreeType2 bitmap, possibly
 * transforming the layed-out coordinates through a transformation
 * matrix.
 * 
 * Note that the transformation matrix for `font` is not
 * changed, so to produce correct rendering results, the `font`
 * must have been loaded using a `PangoContext` with an identical
 * transformation matrix to that passed in to this function.
 * @param bitmap the FreeType2 bitmap onto which to draw the string
 * @param matrix a `PangoMatrix`
 * @param font the font in which to draw the string
 * @param glyphs the glyph string to draw
 * @param x the x position of the start of the string (in Pango   units in user space coordinates)
 * @param y the y position of the baseline (in Pango units   in user space coordinates)
 */
function renderTransformed(bitmap: freetype2.Bitmap, matrix: Pango.Matrix | null, font: Pango.Font, glyphs: Pango.GlyphString, x: number, y: number): void
/**
 * Free the global fontmap. (See pango_ft2_font_map_for_display())
 * Use of the global PangoFT2 fontmap is deprecated.
 */
function shutdownDisplay(): void
/**
 * Function type for doing final config tweaking on prepared FcPatterns.
 * @callback 
 * @param pattern the FcPattern to tweak.
 * @param data user data.
 */
interface SubstituteFunc {
    (pattern: fontconfig.Pattern, data: any | null): void
}
module FontMap {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.ListModel.ConstructorProperties, PangoFc.FontMap.ConstructorProperties {
    }

}

interface FontMap extends Gio.ListModel {

    // Own properties of PangoFT2-1.0.PangoFT2.FontMap

    __gtype__: number

    // Owm methods of PangoFT2-1.0.PangoFT2.FontMap

    /**
     * Sets a function that will be called to do final configuration
     * substitution on a `FcPattern` before it is used to load
     * the font.
     * 
     * This function can be used to do things like set
     * hinting and antialiasing options.
     * @param func function to call to to do final config tweaking        on #FcPattern objects.
     */
    setDefaultSubstitute(func: SubstituteFunc): void

    // Overloads of setDefaultSubstitute

    /**
     * Sets a function that will be called to do final configuration
     * substitution on a `FcPattern` before it is used to load
     * the font.
     * 
     * This function can be used to do things like set
     * hinting and antialiasing options.
     * @param func function to call to to do final config tweaking on `FcPattern` objects
     */
    setDefaultSubstitute(func: PangoFc.SubstituteFunc): void
    /**
     * Sets the horizontal and vertical resolutions for the fontmap.
     * @param dpiX dots per inch in the X direction
     * @param dpiY dots per inch in the Y direction
     */
    setResolution(dpiX: number, dpiY: number): void
    /**
     * Call this function any time the results of the
     * default substitution function set with
     * pango_ft2_font_map_set_default_substitute() change.
     * 
     * That is, if your substitution function will return different
     * results for the same input pattern, you must call this function.
     */
    substituteChanged(): void

    // Class property signals of PangoFT2-1.0.PangoFT2.FontMap

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::item-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::item-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::item-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::item-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::item-type", ...args: any[]): void
    connect(sigName: "notify::n-items", callback: (...args: any[]) => void): number
    on(sigName: "notify::n-items", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::n-items", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::n-items", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::n-items", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * The `PangoFT2FontMap` is the `PangoFontMap` implementation for FreeType fonts.
 * @class 
 */
class FontMap extends PangoFc.FontMap {

    // Own properties of PangoFT2-1.0.PangoFT2.FontMap

    static name: string

    // Constructors of PangoFT2-1.0.PangoFT2.FontMap

    constructor(config?: FontMap.ConstructorProperties) 
    /**
     * Create a new `PangoFT2FontMap` object.
     * 
     * A fontmap is used to cache information about available fonts,
     * and holds certain global parameters such as the resolution and
     * the default substitute function (see
     * [method`PangoFT2`.FontMap.set_default_substitute]).
     * @constructor 
     * @returns the newly created fontmap object. Unref with g_object_unref() when you are finished with it.
     */
    constructor() 
    /**
     * Create a new `PangoFT2FontMap` object.
     * 
     * A fontmap is used to cache information about available fonts,
     * and holds certain global parameters such as the resolution and
     * the default substitute function (see
     * [method`PangoFT2`.FontMap.set_default_substitute]).
     * @constructor 
     * @returns the newly created fontmap object. Unref with g_object_unref() when you are finished with it.
     */
    static new(): FontMap
    _init(config?: FontMap.ConstructorProperties): void
}

}

export default PangoFT2;