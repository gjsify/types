// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * PangoFc-1.0
 */

import type * as Gjs from './Gjs';
import type fontconfig from './fontconfig-2.0';
import type Pango from './Pango-1.0';
import type cairo from './cairo-1.0';
import type HarfBuzz from './HarfBuzz-0.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace PangoFc {

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
const FONT_FEATURES: string
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
const FONT_VARIATIONS: string
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
const GRAVITY: string
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
const PRGNAME: string
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
const VERSION: string
/**
 * Function type for doing final config tweaking on prepared `FcPattern`s.
 * @callback 
 * @param pattern the FcPattern to tweak.
 * @param data user data.
 */
interface SubstituteFunc {
    (pattern: fontconfig.Pattern, data: object | null): void
}
interface Decoder_ConstructProps extends GObject.Object_ConstructProps {
}

interface Decoder {

    // Owm methods of PangoFc-1.0.PangoFc.Decoder

    /**
     * Generates an `FcCharSet` of supported characters for the `fcfont`
     * given.
     * 
     * The returned `FcCharSet` will be a reference to an
     * internal value stored by the `PangoFcDecoder` and must not
     * be modified or freed.
     * @param fcfont the `PangoFcFont` to query.
     */
    get_charset(fcfont: Font): fontconfig.CharSet
    /**
     * Generates a `PangoGlyph` for the given Unicode point using the
     * custom decoder.
     * 
     * For complex scripts where there can be multiple
     * glyphs for a single character, the decoder will return whatever
     * glyph is most convenient for it. (Usually whatever glyph is directly
     * in the fonts character map table.)
     * @param fcfont a `PangoFcFont` to query.
     * @param wc the Unicode code point to convert to a single `PangoGlyph`.
     */
    get_glyph(fcfont: Font, wc: number): Pango.Glyph

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
     */
    vfunc_get_charset(fcfont: Font): fontconfig.CharSet
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
     */
    vfunc_get_glyph(fcfont: Font, wc: number): Pango.Glyph

    // Class property signals of PangoFc-1.0.PangoFc.Decoder

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
class Decoder extends GObject.Object {

    // Own properties of PangoFc-1.0.PangoFc.Decoder

    static name: string
    static $gtype: GObject.GType<Decoder>

    // Constructors of PangoFc-1.0.PangoFc.Decoder

    constructor(config?: Decoder_ConstructProps) 
    _init(config?: Decoder_ConstructProps): void
}

interface Font_ConstructProps extends Pango.Font_ConstructProps {

    // Own constructor properties of PangoFc-1.0.PangoFc.Font

    /**
     * The PangoFc font map this font is associated with.
     */
    fontmap?: FontMap | null
    /**
     * The fontconfig pattern for this font.
     */
    pattern?: object | null
}

interface Font {

    // Own properties of PangoFc-1.0.PangoFc.Font

    /**
     * The fontconfig pattern for this font.
     */
    readonly pattern: object

    // Own fields of PangoFc-1.0.PangoFc.Font

    parent_instance: Pango.Font
    font_pattern: fontconfig.Pattern
    fontmap: Pango.FontMap
    priv: object
    matrix: Pango.Matrix
    description: Pango.FontDescription
    metrics_by_lang: object[]
    is_hinted: number
    is_transformed: number

    // Owm methods of PangoFc-1.0.PangoFc.Font

    /**
     * Gets the glyph index for a given Unicode character
     * for `font`.
     * 
     * If you only want to determine whether the font has
     * the glyph, use [method`PangoFc`.Font.has_char].
     * @param wc Unicode character to look up
     */
    get_glyph(wc: string): number
    /**
     * Returns the languages that are supported by `font`.
     * 
     * This corresponds to the FC_LANG member of the FcPattern.
     * 
     * The returned array is only valid as long as the font
     * and its fontmap are valid.
     */
    get_languages(): Pango.Language | null

    // Overloads of get_languages

    /**
     * Returns the languages that are supported by `font`.
     * 
     * If the font backend does not provide this information,
     * %NULL is returned. For the fontconfig backend, this
     * corresponds to the FC_LANG member of the FcPattern.
     * 
     * The returned array is only valid as long as the font
     * and its fontmap are valid.
     */
    get_languages(): Pango.Language[] | null
    get_languages(...args: any[]): any
    get_languages(...args: any[]): Pango.Language | null | Pango.Language[] | null | any
    /**
     * Returns the index of a glyph suitable for drawing `wc`
     * as an unknown character.
     * 
     * Use PANGO_GET_UNKNOWN_GLYPH() instead.
     * @param wc the Unicode character for which a glyph is needed.
     */
    get_unknown_glyph(wc: string): Pango.Glyph
    /**
     * Determines whether `font` has a glyph for the codepoint `wc`.
     * @param wc Unicode codepoint to look up
     */
    has_char(wc: string): boolean
    /**
     * This function used to adjust each adjacent pair of glyphs
     * in `glyphs` according to kerning information in `font`.
     * 
     * Since 1.44, it does nothing.
     * @param glyphs a `PangoGlyphString`
     */
    kern_glyphs(glyphs: Pango.GlyphString): void
    /**
     * Releases a font previously obtained with
     * [method`PangoFc`.Font.lock_face].
     */
    unlock_face(): void

    // Class property signals of PangoFc-1.0.PangoFc.Font

    connect(sigName: "notify::pattern", callback: (($obj: Font, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pattern", callback: (($obj: Font, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pattern", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
class Font extends Pango.Font {

    // Own properties of PangoFc-1.0.PangoFc.Font

    static name: string
    static $gtype: GObject.GType<Font>

    // Constructors of PangoFc-1.0.PangoFc.Font

    constructor(config?: Font_ConstructProps) 
    _init(config?: Font_ConstructProps): void
    /**
     * Creates a `PangoFontDescription` that matches the specified
     * Fontconfig pattern as closely as possible.
     * 
     * Many possible Fontconfig pattern values, such as %FC_RASTERIZER
     * or %FC_DPI, don't make sense in the context of `PangoFontDescription`,
     * so will be ignored.
     * @param pattern a `FcPattern`
     * @param include_size if %TRUE, the pattern will include the size from   the `pattern;` otherwise the resulting pattern will be unsized.   (only %FC_SIZE is examined, not %FC_PIXEL_SIZE)
     */
    static description_from_pattern(pattern: fontconfig.Pattern, include_size: boolean): Pango.FontDescription
}

interface FontMap_ConstructProps extends Pango.FontMap_ConstructProps {
}

interface FontMap {

    // Owm methods of PangoFc-1.0.PangoFc.FontMap

    /**
     * Clear all cached information and fontsets for this font map.
     * 
     * This should be called whenever there is a change in the
     * output of the default_substitute() virtual function of the
     * font map, or if fontconfig has been reinitialized to new
     * configuration.
     */
    cache_clear(): void
    /**
     * Informs font map that the fontconfig configuration (i.e., FcConfig
     * object) used by this font map has changed.
     * 
     * This currently calls [method`PangoFc`.FontMap.cache_clear] which
     * ensures that list of fonts, etc will be regenerated using the
     * updated configuration.
     */
    config_changed(): void
    /**
     * Creates a new context for this fontmap.
     * 
     * This function is intended only for backend implementations deriving
     * from `PangoFcFontMap`; it is possible that a backend will store
     * additional information needed for correct operation on the `PangoContext`
     * after calling this function.
     */
    create_context(): Pango.Context
    /**
     * Finds the decoder to use for `pattern`.
     * 
     * Decoders can be added to a font map using
     * [method`PangoFc`.FontMap.add_decoder_find_func].
     * @param pattern The `FcPattern` to find the decoder for.
     */
    find_decoder(pattern: fontconfig.Pattern): Decoder | null
    /**
     * Sets a function that will be called to do final configuration
     * substitution on a `FcPattern` before it is used to load
     * the font.
     * 
     * This function can be used to do things like set
     * hinting and antialiasing options.
     * @param func function to call to to do final config tweaking on `FcPattern` objects
     */
    set_default_substitute(func: SubstituteFunc): void
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
    substitute_changed(): void

    // Class property signals of PangoFc-1.0.PangoFc.FontMap

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
class FontMap extends Pango.FontMap {

    // Own properties of PangoFc-1.0.PangoFc.FontMap

    static name: string
    static $gtype: GObject.GType<FontMap>

    // Constructors of PangoFc-1.0.PangoFc.FontMap

    constructor(config?: FontMap_ConstructProps) 
    _init(config?: FontMap_ConstructProps): void
}

interface DecoderClass {

    // Own fields of PangoFc-1.0.PangoFc.DecoderClass

    get_charset: (decoder: Decoder, fcfont: Font) => fontconfig.CharSet
    get_glyph: (decoder: Decoder, fcfont: Font, wc: number) => Pango.Glyph
}

/**
 * Class structure for `PangoFcDecoder`.
 * @record 
 */
abstract class DecoderClass {

    // Own properties of PangoFc-1.0.PangoFc.DecoderClass

    static name: string
}

interface FontClass {
}

abstract class FontClass {

    // Own properties of PangoFc-1.0.PangoFc.FontClass

    static name: string
}

interface FontMapClass {
}

abstract class FontMapClass {

    // Own properties of PangoFc-1.0.PangoFc.FontMapClass

    static name: string
}

interface FontMapPrivate {
}

class FontMapPrivate {

    // Own properties of PangoFc-1.0.PangoFc.FontMapPrivate

    static name: string
}

}
export default PangoFc;