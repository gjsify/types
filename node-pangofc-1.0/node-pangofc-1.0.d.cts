
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './node-pangofc-1.0-import.d.ts';
    
/**
 * PangoFc-1.0
 */

import type fontconfig from '@girs/node-fontconfig-2.0';
import type Pango from '@girs/node-pango-1.0';
import type cairo from '@girs/node-cairo-1.0';
import type HarfBuzz from '@girs/node-harfbuzz-0.0';
import type freetype2 from '@girs/node-freetype2-2.0';
import type GObject from '@girs/node-gobject-2.0';
import type GLib from '@girs/node-glib-2.0';
import type Gio from '@girs/node-gio-2.0';

/**
 * Fontconfig property that Pango reads from font
 * patterns to populate list of OpenType features
 * to be enabled for the font by default.
 * 
 * The property will have a number of string elements,
 * each of which is the OpenType feature tag of one feature
 * to enable.
 * 
 * This is equivalent to FC_FONT_FEATURES in versions of
 * fontconfig that have that.
 */
export const FONT_FEATURES: string | null
/**
 * Fontconfig property that Pango reads from font
 * patterns to populate list of OpenType font variations
 * to be used for a font.
 * 
 * The property will have a string elements, each of which
 * a comma-separated list of OpenType axis setting of the
 * form AXIS=VALUE.
 * 
 * This is equivalent to FC_FONT_VARIATIONS in versions of
 * fontconfig that have that.
 */
export const FONT_VARIATIONS: string | null
/**
 * Fontconfig property that Pango sets on any
 * fontconfig pattern it passes to fontconfig
 * if a `PangoGravity` other than %PANGO_GRAVITY_SOUTH
 * is desired.
 * 
 * The property will have a `PangoGravity` value as a string,
 * like "east". This can be used to write fontconfig configuration
 * rules to choose different fonts for horizontal and vertical
 * writing directions.
 */
export const GRAVITY: string | null
/**
 * Fontconfig property that Pango sets on any
 * fontconfig pattern it passes to fontconfig.
 * 
 * The property will have a string equal to what
 * g_get_prgname() returns. This can be used to write
 * fontconfig configuration rules that only affect
 * certain applications.
 * 
 * This is equivalent to FC_PRGNAME in versions of
 * fontconfig that have that.
 */
export const PRGNAME: string | null
/**
 * Fontconfig property that Pango sets on any
 * fontconfig pattern it passes to fontconfig.
 * 
 * The property will have an integer value equal to what
 * [func`Pango`.version] returns. This can be used to write
 * fontconfig configuration rules that only affect certain
 * pango versions (or only pango-using applications, or only
 * non-pango-using applications).
 */
export const VERSION: string | null
/**
 * Function type for doing final config tweaking on prepared `FcPattern`s.
 * @callback 
 * @param pattern the FcPattern to tweak.
 * @param data user data.
 */
export interface SubstituteFunc {
    (pattern: fontconfig.Pattern, data: any | null): void
}
export module Decoder {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Decoder {

    // Own properties of PangoFc-1.0.PangoFc.Decoder

    __gtype__: number

    // Owm methods of PangoFc-1.0.PangoFc.Decoder

    // Has conflict: getCharset(fcfont: Font): fontconfig.CharSet
    // Has conflict: getGlyph(fcfont: Font, wc: number): Pango.Glyph

    // Own virtual methods of PangoFc-1.0.PangoFc.Decoder

    /**
     * Generates an `FcCharSet` of supported characters for the `fcfont`
     * given.
     * 
     * The returned `FcCharSet` will be a reference to an
     * internal value stored by the `PangoFcDecoder` and must not
     * be modified or freed.
     * @virtual 
     * @param fcfont the `PangoFcFont` to query.
     * @returns the `FcCharset` for @fcfont; must not   be modified or freed.
     */
    getCharset(fcfont: Font): fontconfig.CharSet
    /**
     * Generates a `PangoGlyph` for the given Unicode point using the
     * custom decoder.
     * 
     * For complex scripts where there can be multiple
     * glyphs for a single character, the decoder will return whatever
     * glyph is most convenient for it. (Usually whatever glyph is directly
     * in the fonts character map table.)
     * @virtual 
     * @param fcfont a `PangoFcFont` to query.
     * @param wc the Unicode code point to convert to a single `PangoGlyph`.
     * @returns the glyph index, or 0 if the glyph isn't covered by the font.
     */
    getGlyph(fcfont: Font, wc: number): Pango.Glyph

    // Class property signals of PangoFc-1.0.PangoFc.Decoder

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * `PangoFcDecoder` is a virtual base class that implementations will
 * inherit from.
 * 
 * It's the interface that is used to define a custom encoding for a font.
 * These objects are created in your code from a function callback that was
 * originally registered with [method`PangoFc`.FontMap.add_decoder_find_func].
 * Pango requires information about the supported charset for a font as well
 * as the individual character to glyph conversions. Pango gets that
 * information via the #get_charset and #get_glyph callbacks into your
 * object implementation.
 * @class 
 */
export class Decoder extends GObject.Object {

    // Own properties of PangoFc-1.0.PangoFc.Decoder

    static name: string

    // Constructors of PangoFc-1.0.PangoFc.Decoder

    constructor(config?: Decoder.ConstructorProperties) 
    _init(config?: Decoder.ConstructorProperties): void
}

export module Font {

    // Constructor properties interface

    export interface ConstructorProperties extends Pango.Font.ConstructorProperties {

        // Own constructor properties of PangoFc-1.0.PangoFc.Font

        /**
         * The PangoFc font map this font is associated with.
         */
        fontmap?: FontMap | null
        /**
         * The fontconfig pattern for this font.
         */
        pattern?: any | null
    }

}

export interface Font {

    // Own properties of PangoFc-1.0.PangoFc.Font

    /**
     * The fontconfig pattern for this font.
     */
    readonly pattern: any
    __gtype__: number

    // Own fields of PangoFc-1.0.PangoFc.Font

    parentInstance: any
    fontPattern: fontconfig.Pattern
    fontmap: Pango.FontMap
    priv: any
    matrix: Pango.Matrix
    description: Pango.FontDescription
    metricsByLang: any[]
    isHinted: number
    isTransformed: number

    // Owm methods of PangoFc-1.0.PangoFc.Font

    /**
     * Gets the glyph index for a given Unicode character
     * for `font`.
     * 
     * If you only want to determine whether the font has
     * the glyph, use [method`PangoFc`.Font.has_char].
     * @param wc Unicode character to look up
     * @returns the glyph index, or 0, if the Unicode   character doesn't exist in the font.
     */
    getGlyph(wc: string): number
    /**
     * Returns the languages that are supported by `font`.
     * 
     * This corresponds to the FC_LANG member of the FcPattern.
     * 
     * The returned array is only valid as long as the font
     * and its fontmap are valid.
     * @returns a   %NULL-terminated array of `PangoLanguage`*
     */
    getLanguages(): Pango.Language[] | null
    /**
     * Returns the index of a glyph suitable for drawing `wc`
     * as an unknown character.
     * 
     * Use PANGO_GET_UNKNOWN_GLYPH() instead.
     * @param wc the Unicode character for which a glyph is needed.
     * @returns a glyph index into @font.
     */
    getUnknownGlyph(wc: string): Pango.Glyph
    /**
     * Determines whether `font` has a glyph for the codepoint `wc`.
     * @param wc Unicode codepoint to look up
     * @returns %TRUE if @font has the requested codepoint.
     */
    hasChar(wc: string): boolean
    /**
     * This function used to adjust each adjacent pair of glyphs
     * in `glyphs` according to kerning information in `font`.
     * 
     * Since 1.44, it does nothing.
     * @param glyphs a `PangoGlyphString`
     */
    kernGlyphs(glyphs: Pango.GlyphString): void
    /**
     * Releases a font previously obtained with
     * [method`PangoFc`.Font.lock_face].
     */
    unlockFace(): void

    // Class property signals of PangoFc-1.0.PangoFc.Font

    connect(sigName: "notify::pattern", callback: (...args: any[]) => void): number
    on(sigName: "notify::pattern", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pattern", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pattern", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pattern", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

/**
 * `PangoFcFont` is a base class for font implementations
 * using the Fontconfig and FreeType libraries.
 * 
 * It is used in onjunction with [class`PangoFc`.FontMap].
 * When deriving from this class, you need to implement all
 * of its virtual functions other than shutdown() along with
 * the get_glyph_extents() virtual function from `PangoFont`.
 * @class 
 */
export class Font extends Pango.Font {

    // Own properties of PangoFc-1.0.PangoFc.Font

    static name: string

    // Constructors of PangoFc-1.0.PangoFc.Font

    constructor(config?: Font.ConstructorProperties) 
    _init(config?: Font.ConstructorProperties): void
    /**
     * Creates a `PangoFontDescription` that matches the specified
     * Fontconfig pattern as closely as possible.
     * 
     * Many possible Fontconfig pattern values, such as %FC_RASTERIZER
     * or %FC_DPI, don't make sense in the context of `PangoFontDescription`,
     * so will be ignored.
     * @param pattern a `FcPattern`
     * @param includeSize if %TRUE, the pattern will include the size from   the `pattern;` otherwise the resulting pattern will be unsized.   (only %FC_SIZE is examined, not %FC_PIXEL_SIZE)
     * @returns a new `PangoFontDescription`. Free with   pango_font_description_free().
     */
    static descriptionFromPattern(pattern: fontconfig.Pattern, includeSize: boolean): Pango.FontDescription
}

export module FontMap {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.ListModel.ConstructorProperties, Pango.FontMap.ConstructorProperties {
    }

}

export interface FontMap extends Gio.ListModel {

    // Own properties of PangoFc-1.0.PangoFc.FontMap

    __gtype__: number

    // Owm methods of PangoFc-1.0.PangoFc.FontMap

    /**
     * Clear all cached information and fontsets for this font map.
     * 
     * This should be called whenever there is a change in the
     * output of the default_substitute() virtual function of the
     * font map, or if fontconfig has been reinitialized to new
     * configuration.
     */
    cacheClear(): void
    /**
     * Informs font map that the fontconfig configuration (i.e., FcConfig
     * object) used by this font map has changed.
     * 
     * This currently calls [method`PangoFc`.FontMap.cache_clear] which
     * ensures that list of fonts, etc will be regenerated using the
     * updated configuration.
     */
    configChanged(): void
    /**
     * Creates a new context for this fontmap.
     * 
     * This function is intended only for backend implementations deriving
     * from `PangoFcFontMap`; it is possible that a backend will store
     * additional information needed for correct operation on the `PangoContext`
     * after calling this function.
     * @returns a new `PangoContext`
     */
    createContext(): Pango.Context
    /**
     * Finds the decoder to use for `pattern`.
     * 
     * Decoders can be added to a font map using
     * [method`PangoFc`.FontMap.add_decoder_find_func].
     * @param pattern The `FcPattern` to find the decoder for.
     * @returns a newly created `PangoFcDecoder`   object or %NULL if no decoder is set for @pattern.
     */
    findDecoder(pattern: fontconfig.Pattern): Decoder | null
    /**
     * Sets a function that will be called to do final configuration
     * substitution on a `FcPattern` before it is used to load
     * the font.
     * 
     * This function can be used to do things like set
     * hinting and antialiasing options.
     * @param func function to call to to do final config tweaking on `FcPattern` objects
     */
    setDefaultSubstitute(func: SubstituteFunc): void
    /**
     * Clears all cached information for the fontmap and marks
     * all fonts open for the fontmap as dead.
     * 
     * See the shutdown() virtual function of `PangoFcFont`.
     * 
     * This function might be used by a backend when the underlying
     * windowing system for the font map exits. This function is only
     * intended to be called only for backend implementations deriving
     * from `PangoFcFontMap`.
     */
    shutdown(): void
    /**
     * Call this function any time the results of the default
     * substitution function set with
     * [method`PangoFc`.FontMap.set_default_substitute] change.
     * 
     * That is, if your substitution function will return different
     * results for the same input pattern, you must call this function.
     */
    substituteChanged(): void

    // Class property signals of PangoFc-1.0.PangoFc.FontMap

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
 * `PangoFcFontMap` is a base class for font map implementations using the
 * Fontconfig and FreeType libraries.
 * 
 * It is used in the Xft and FreeType backends shipped with Pango,
 * but can also be used when creating new backends. Any backend
 * deriving from this base class will take advantage of the wide
 * range of shapers implemented using FreeType that come with Pango.
 * @class 
 */
export class FontMap extends Pango.FontMap {

    // Own properties of PangoFc-1.0.PangoFc.FontMap

    static name: string

    // Constructors of PangoFc-1.0.PangoFc.FontMap

    constructor(config?: FontMap.ConstructorProperties) 
    _init(config?: FontMap.ConstructorProperties): void
}

export interface DecoderClass {

    // Own fields of PangoFc-1.0.PangoFc.DecoderClass

    getCharset: (decoder: Decoder, fcfont: Font) => fontconfig.CharSet
    getGlyph: (decoder: Decoder, fcfont: Font, wc: number) => Pango.Glyph
}

/**
 * Class structure for `PangoFcDecoder`.
 * @record 
 */
export abstract class DecoderClass {

    // Own properties of PangoFc-1.0.PangoFc.DecoderClass

    static name: string
}

export interface FontClass {
}

export abstract class FontClass {

    // Own properties of PangoFc-1.0.PangoFc.FontClass

    static name: string
}

export interface FontMapClass {
}

export abstract class FontMapClass {

    // Own properties of PangoFc-1.0.PangoFc.FontMapClass

    static name: string
}

export interface FontMapPrivate {
}

export class FontMapPrivate {

    // Own properties of PangoFc-1.0.PangoFc.FontMapPrivate

    static name: string
}

// END