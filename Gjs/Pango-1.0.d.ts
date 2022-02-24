/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Pango-1.0
 */

import type * as Gjs from './Gjs';
import type cairo from './cairo-1.0';
import type HarfBuzz from './HarfBuzz-0.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace Pango {

/**
 * `PangoAlignment` describes how to align the lines of a `PangoLayout`
 * within the available space.
 * 
 * If the `PangoLayout` is set to justify using [method`Pango`.Layout.set_justify],
 * this only affects partial lines.
 * 
 * See [method`Pango`.Layout.set_auto_dir] for how text direction affects
 * the interpretation of `PangoAlignment` values.
 */
enum Alignment {
    /**
     * Put all available space on the right
     */
    LEFT,
    /**
     * Center the line within the available space
     */
    CENTER,
    /**
     * Put all available space on the left
     */
    RIGHT,
}
/**
 * The `PangoAttrType` distinguishes between different types of attributes.
 * 
 * Along with the predefined values, it is possible to allocate additional
 * values for custom attributes using [func`AttrType`.register]. The predefined
 * values are given below. The type of structure used to store the attribute is
 * listed in parentheses after the description.
 */
enum AttrType {
    /**
     * does not happen
     */
    INVALID,
    /**
     * language ([struct`Pango`.AttrLanguage])
     */
    LANGUAGE,
    /**
     * font family name list ([struct`Pango`.AttrString])
     */
    FAMILY,
    /**
     * font slant style ([struct`Pango`.AttrInt])
     */
    STYLE,
    /**
     * font weight ([struct`Pango`.AttrInt])
     */
    WEIGHT,
    /**
     * font variant (normal or small caps) ([struct`Pango`.AttrInt])
     */
    VARIANT,
    /**
     * font stretch ([struct`Pango`.AttrInt])
     */
    STRETCH,
    /**
     * font size in points scaled by %PANGO_SCALE ([struct`Pango`.AttrInt])
     */
    SIZE,
    /**
     * font description ([struct`Pango`.AttrFontDesc])
     */
    FONT_DESC,
    /**
     * foreground color ([struct`Pango`.AttrColor])
     */
    FOREGROUND,
    /**
     * background color ([struct`Pango`.AttrColor])
     */
    BACKGROUND,
    /**
     * whether the text has an underline ([struct`Pango`.AttrInt])
     */
    UNDERLINE,
    /**
     * whether the text is struck-through ([struct`Pango`.AttrInt])
     */
    STRIKETHROUGH,
    /**
     * baseline displacement ([struct`Pango`.AttrInt])
     */
    RISE,
    /**
     * shape ([struct`Pango`.AttrShape])
     */
    SHAPE,
    /**
     * font size scale factor ([struct`Pango`.AttrFloat])
     */
    SCALE,
    /**
     * whether fallback is enabled ([struct`Pango`.AttrInt])
     */
    FALLBACK,
    /**
     * letter spacing ([struct`PangoAttrInt]`)
     */
    LETTER_SPACING,
    /**
     * underline color ([struct`Pango`.AttrColor])
     */
    UNDERLINE_COLOR,
    /**
     * strikethrough color ([struct`Pango`.AttrColor])
     */
    STRIKETHROUGH_COLOR,
    /**
     * font size in pixels scaled by %PANGO_SCALE ([struct`Pango`.AttrInt])
     */
    ABSOLUTE_SIZE,
    /**
     * base text gravity ([struct`Pango`.AttrInt])
     */
    GRAVITY,
    /**
     * gravity hint ([struct`Pango`.AttrInt])
     */
    GRAVITY_HINT,
    /**
     * OpenType font features ([struct`Pango`.AttrFontFeatures]). Since 1.38
     */
    FONT_FEATURES,
    /**
     * foreground alpha ([struct`Pango`.AttrInt]). Since 1.38
     */
    FOREGROUND_ALPHA,
    /**
     * background alpha ([struct`Pango`.AttrInt]). Since 1.38
     */
    BACKGROUND_ALPHA,
    /**
     * whether breaks are allowed ([struct`Pango`.AttrInt]). Since 1.44
     */
    ALLOW_BREAKS,
    /**
     * how to render invisible characters ([struct`Pango`.AttrInt]). Since 1.44
     */
    SHOW,
    /**
     * whether to insert hyphens at intra-word line breaks ([struct`Pango`.AttrInt]). Since 1.44
     */
    INSERT_HYPHENS,
    /**
     * whether the text has an overline ([struct`Pango`.AttrInt]). Since 1.46
     */
    OVERLINE,
    /**
     * overline color ([struct`Pango`.AttrColor]). Since 1.46
     */
    OVERLINE_COLOR,
    /**
     * line height factor ([struct`Pango`.AttrFloat]). Since: 1.50
     */
    LINE_HEIGHT,
    /**
     * line height ([struct`Pango`.AttrInt]). Since: 1.50
     */
    ABSOLUTE_LINE_HEIGHT,
    TEXT_TRANSFORM,
    /**
     * override segmentation to classify the range of the attribute as a single word ([struct`Pango`.AttrInt]). Since 1.50
     */
    WORD,
    /**
     * override segmentation to classify the range of the attribute as a single sentence ([struct`Pango`.AttrInt]). Since 1.50
     */
    SENTENCE,
    /**
     * baseline displacement ([struct`Pango`.AttrInt]). Since 1.50
     */
    BASELINE_SHIFT,
    /**
     * font-relative size change ([struct`Pango`.AttrInt]). Since 1.50
     */
    FONT_SCALE,
}
/**
 * An enumeration that affects baseline shifts between runs.
 */
enum BaselineShift {
    /**
     * Leave the baseline unchanged
     */
    NONE,
    /**
     * Shift the baseline to the superscript position,
     *   relative to the previous run
     */
    SUPERSCRIPT,
    /**
     * Shift the baseline to the subscript position,
     *   relative to the previous run
     */
    SUBSCRIPT,
}
/**
 * `PangoBidiType` represents the bidirectional character
 * type of a Unicode character.
 * 
 * The values in this enumeration are specified by the
 * [Unicode bidirectional algorithm](http://www.unicode.org/reports/tr9/).
 */
enum BidiType {
    /**
     * Left-to-Right
     */
    L,
    /**
     * Left-to-Right Embedding
     */
    LRE,
    /**
     * Left-to-Right Override
     */
    LRO,
    /**
     * Right-to-Left
     */
    R,
    /**
     * Right-to-Left Arabic
     */
    AL,
    /**
     * Right-to-Left Embedding
     */
    RLE,
    /**
     * Right-to-Left Override
     */
    RLO,
    /**
     * Pop Directional Format
     */
    PDF,
    /**
     * European Number
     */
    EN,
    /**
     * European Number Separator
     */
    ES,
    /**
     * European Number Terminator
     */
    ET,
    /**
     * Arabic Number
     */
    AN,
    /**
     * Common Number Separator
     */
    CS,
    /**
     * Nonspacing Mark
     */
    NSM,
    /**
     * Boundary Neutral
     */
    BN,
    /**
     * Paragraph Separator
     */
    B,
    /**
     * Segment Separator
     */
    S,
    /**
     * Whitespace
     */
    WS,
    /**
     * Other Neutrals
     */
    ON,
    /**
     * Left-to-Right isolate. Since 1.48.6
     */
    LRI,
    /**
     * Right-to-Left isolate. Since 1.48.6
     */
    RLI,
    /**
     * First strong isolate. Since 1.48.6
     */
    FSI,
    /**
     * Pop directional isolate. Since 1.48.6
     */
    PDI,
}
/**
 * `PangoCoverageLevel` is used to indicate how well a font can
 * represent a particular Unicode character for a particular script.
 * 
 * Since 1.44, only %PANGO_COVERAGE_NONE and %PANGO_COVERAGE_EXACT
 * will be returned.
 */
enum CoverageLevel {
    /**
     * The character is not representable with
     *   the font.
     */
    NONE,
    /**
     * The character is represented in a
     *   way that may be comprehensible but is not the correct
     *   graphical form. For instance, a Hangul character represented
     *   as a a sequence of Jamos, or a Latin transliteration of a
     *   Cyrillic word.
     */
    FALLBACK,
    /**
     * The character is represented as
     *   basically the correct graphical form, but with a stylistic
     *   variant inappropriate for the current script.
     */
    APPROXIMATE,
    /**
     * The character is represented as the
     *   correct graphical form.
     */
    EXACT,
}
/**
 * `PangoDirection` represents a direction in the Unicode bidirectional
 * algorithm.
 * 
 * Not every value in this enumeration makes sense for every usage of
 * `PangoDirection`; for example, the return value of [func`unichar_direction]`
 * and [func`find_base_dir]` cannot be `PANGO_DIRECTION_WEAK_LTR` or
 * `PANGO_DIRECTION_WEAK_RTL`, since every character is either neutral
 * or has a strong direction; on the other hand `PANGO_DIRECTION_NEUTRAL`
 * doesn't make sense to pass to [func`itemize_with_base_dir]`.
 * 
 * The `PANGO_DIRECTION_TTB_LTR`, `PANGO_DIRECTION_TTB_RTL` values come from
 * an earlier interpretation of this enumeration as the writing direction
 * of a block of text and are no longer used. See `PangoGravity` for how
 * vertical text is handled in Pango.
 * 
 * If you are interested in text direction, you should really use fribidi
 * directly. `PangoDirection` is only retained because it is used in some
 * public apis.
 */
enum Direction {
    /**
     * A strong left-to-right direction
     */
    LTR,
    /**
     * A strong right-to-left direction
     */
    RTL,
    /**
     * Deprecated value; treated the
     *   same as `PANGO_DIRECTION_RTL`.
     */
    TTB_LTR,
    /**
     * Deprecated value; treated the
     *   same as `PANGO_DIRECTION_LTR`
     */
    TTB_RTL,
    /**
     * A weak left-to-right direction
     */
    WEAK_LTR,
    /**
     * A weak right-to-left direction
     */
    WEAK_RTL,
    /**
     * No direction specified
     */
    NEUTRAL,
}
/**
 * `PangoEllipsizeMode` describes what sort of ellipsization
 * should be applied to text.
 * 
 * In the ellipsization process characters are removed from the
 * text in order to make it fit to a given width and replaced
 * with an ellipsis.
 */
enum EllipsizeMode {
    /**
     * No ellipsization
     */
    NONE,
    /**
     * Omit characters at the start of the text
     */
    START,
    /**
     * Omit characters in the middle of the text
     */
    MIDDLE,
    /**
     * Omit characters at the end of the text
     */
    END,
}
/**
 * An enumeration that affects font sizes for superscript
 * and subscript positioning and for (emulated) Small Caps.
 */
enum FontScale {
    /**
     * Leave the font size unchanged
     */
    NONE,
    /**
     * Change the font to a size suitable for superscripts
     */
    SUPERSCRIPT,
    /**
     * Change the font to a size suitable for subscripts
     */
    SUBSCRIPT,
    /**
     * Change the font to a size suitable for Small Caps
     */
    SMALL_CAPS,
}
/**
 * `PangoGravity` represents the orientation of glyphs in a segment
 * of text.
 * 
 * This is useful when rendering vertical text layouts. In those situations,
 * the layout is rotated using a non-identity [struct`Pango`.Matrix], and then
 * glyph orientation is controlled using `PangoGravity`.
 * 
 * Not every value in this enumeration makes sense for every usage of
 * `PangoGravity`; for example, %PANGO_GRAVITY_AUTO only can be passed to
 * [method`Pango`.Context.set_base_gravity] and can only be returned by
 * [method`Pango`.Context.get_base_gravity].
 * 
 * See also: [enum`Pango`.GravityHint]
 */
enum Gravity {
    /**
     * Glyphs stand upright (default) <img align="right" valign="center" src="m-south.png">
     */
    SOUTH,
    /**
     * Glyphs are rotated 90 degrees counter-clockwise. <img align="right" valign="center" src="m-east.png">
     */
    EAST,
    /**
     * Glyphs are upside-down. <img align="right" valign="cener" src="m-north.png">
     */
    NORTH,
    /**
     * Glyphs are rotated 90 degrees clockwise. <img align="right" valign="center" src="m-west.png">
     */
    WEST,
    /**
     * Gravity is resolved from the context matrix
     */
    AUTO,
}
/**
 * `PangoGravityHint` defines how horizontal scripts should behave in a
 * vertical context.
 * 
 * That is, English excerpts in a vertical paragraph for example.
 * 
 * See also [enum`Pango`.Gravity]
 */
enum GravityHint {
    /**
     * scripts will take their natural gravity based
     *   on the base gravity and the script.  This is the default.
     */
    NATURAL,
    /**
     * always use the base gravity set, regardless of
     *   the script.
     */
    STRONG,
    /**
     * for scripts not in their natural direction (eg.
     *   Latin in East gravity), choose per-script gravity such that every script
     *   respects the line progression. This means, Latin and Arabic will take
     *   opposite gravities and both flow top-to-bottom for example.
     */
    LINE,
}
/**
 * Errors that can be returned by [func`Pango`.Layout.deserialize].
 */
enum LayoutDeserializeError {
    /**
     * Unspecified error
     */
    INVALID,
    /**
     * A JSon value could not be
     *   interpreted
     */
    INVALID_VALUE,
    /**
     * A required JSon member was
     *   not found
     */
    MISSING_VALUE,
}
/**
 * The `PangoOverline` enumeration is used to specify whether text
 * should be overlined, and if so, the type of line.
 */
enum Overline {
    /**
     * no overline should be drawn
     */
    NONE,
    /**
     * Draw a single line above the ink
     *   extents of the text being underlined.
     */
    SINGLE,
}
/**
 * `PangoRenderPart` defines different items to render for such
 * purposes as setting colors.
 */
enum RenderPart {
    /**
     * the text itself
     */
    FOREGROUND,
    /**
     * the area behind the text
     */
    BACKGROUND,
    /**
     * underlines
     */
    UNDERLINE,
    /**
     * strikethrough lines
     */
    STRIKETHROUGH,
    /**
     * overlines
     */
    OVERLINE,
}
/**
 * The `PangoScript` enumeration identifies different writing
 * systems.
 * 
 * The values correspond to the names as defined in the Unicode standard. See
 * [Unicode Standard Annex 24: Script names](http://www.unicode.org/reports/tr24/)
 * 
 * Note that this enumeration is deprecated and will not be updated to include values
 * in newer versions of the Unicode standard. Applications should use the
 * [enum`GLib`.UnicodeScript] enumeration instead,
 * whose values are interchangeable with `PangoScript`.
 */
enum Script {
    /**
     * a value never returned from pango_script_for_unichar()
     */
    INVALID_CODE,
    /**
     * a character used by multiple different scripts
     */
    COMMON,
    /**
     * a mark glyph that takes its script from the
     * base glyph to which it is attached
     */
    INHERITED,
    /**
     * Arabic
     */
    ARABIC,
    /**
     * Armenian
     */
    ARMENIAN,
    /**
     * Bengali
     */
    BENGALI,
    /**
     * Bopomofo
     */
    BOPOMOFO,
    /**
     * Cherokee
     */
    CHEROKEE,
    /**
     * Coptic
     */
    COPTIC,
    /**
     * Cyrillic
     */
    CYRILLIC,
    /**
     * Deseret
     */
    DESERET,
    /**
     * Devanagari
     */
    DEVANAGARI,
    /**
     * Ethiopic
     */
    ETHIOPIC,
    /**
     * Georgian
     */
    GEORGIAN,
    /**
     * Gothic
     */
    GOTHIC,
    /**
     * Greek
     */
    GREEK,
    /**
     * Gujarati
     */
    GUJARATI,
    /**
     * Gurmukhi
     */
    GURMUKHI,
    /**
     * Han
     */
    HAN,
    /**
     * Hangul
     */
    HANGUL,
    /**
     * Hebrew
     */
    HEBREW,
    /**
     * Hiragana
     */
    HIRAGANA,
    /**
     * Kannada
     */
    KANNADA,
    /**
     * Katakana
     */
    KATAKANA,
    /**
     * Khmer
     */
    KHMER,
    /**
     * Lao
     */
    LAO,
    /**
     * Latin
     */
    LATIN,
    /**
     * Malayalam
     */
    MALAYALAM,
    /**
     * Mongolian
     */
    MONGOLIAN,
    /**
     * Myanmar
     */
    MYANMAR,
    /**
     * Ogham
     */
    OGHAM,
    /**
     * Old Italic
     */
    OLD_ITALIC,
    /**
     * Oriya
     */
    ORIYA,
    /**
     * Runic
     */
    RUNIC,
    /**
     * Sinhala
     */
    SINHALA,
    /**
     * Syriac
     */
    SYRIAC,
    /**
     * Tamil
     */
    TAMIL,
    /**
     * Telugu
     */
    TELUGU,
    /**
     * Thaana
     */
    THAANA,
    /**
     * Thai
     */
    THAI,
    /**
     * Tibetan
     */
    TIBETAN,
    /**
     * Canadian Aboriginal
     */
    CANADIAN_ABORIGINAL,
    /**
     * Yi
     */
    YI,
    /**
     * Tagalog
     */
    TAGALOG,
    /**
     * Hanunoo
     */
    HANUNOO,
    /**
     * Buhid
     */
    BUHID,
    /**
     * Tagbanwa
     */
    TAGBANWA,
    /**
     * Braille
     */
    BRAILLE,
    /**
     * Cypriot
     */
    CYPRIOT,
    /**
     * Limbu
     */
    LIMBU,
    /**
     * Osmanya
     */
    OSMANYA,
    /**
     * Shavian
     */
    SHAVIAN,
    /**
     * Linear B
     */
    LINEAR_B,
    /**
     * Tai Le
     */
    TAI_LE,
    /**
     * Ugaritic
     */
    UGARITIC,
    /**
     * New Tai Lue. Since 1.10
     */
    NEW_TAI_LUE,
    /**
     * Buginese. Since 1.10
     */
    BUGINESE,
    /**
     * Glagolitic. Since 1.10
     */
    GLAGOLITIC,
    /**
     * Tifinagh. Since 1.10
     */
    TIFINAGH,
    /**
     * Syloti Nagri. Since 1.10
     */
    SYLOTI_NAGRI,
    /**
     * Old Persian. Since 1.10
     */
    OLD_PERSIAN,
    /**
     * Kharoshthi. Since 1.10
     */
    KHAROSHTHI,
    /**
     * an unassigned code point. Since 1.14
     */
    UNKNOWN,
    /**
     * Balinese. Since 1.14
     */
    BALINESE,
    /**
     * Cuneiform. Since 1.14
     */
    CUNEIFORM,
    /**
     * Phoenician. Since 1.14
     */
    PHOENICIAN,
    /**
     * Phags-pa. Since 1.14
     */
    PHAGS_PA,
    /**
     * N'Ko. Since 1.14
     */
    NKO,
    /**
     * Kayah Li. Since 1.20.1
     */
    KAYAH_LI,
    /**
     * Lepcha. Since 1.20.1
     */
    LEPCHA,
    /**
     * Rejang. Since 1.20.1
     */
    REJANG,
    /**
     * Sundanese. Since 1.20.1
     */
    SUNDANESE,
    /**
     * Saurashtra. Since 1.20.1
     */
    SAURASHTRA,
    /**
     * Cham. Since 1.20.1
     */
    CHAM,
    /**
     * Ol Chiki. Since 1.20.1
     */
    OL_CHIKI,
    /**
     * Vai. Since 1.20.1
     */
    VAI,
    /**
     * Carian. Since 1.20.1
     */
    CARIAN,
    /**
     * Lycian. Since 1.20.1
     */
    LYCIAN,
    /**
     * Lydian. Since 1.20.1
     */
    LYDIAN,
    /**
     * Batak. Since 1.32
     */
    BATAK,
    /**
     * Brahmi. Since 1.32
     */
    BRAHMI,
    /**
     * Mandaic. Since 1.32
     */
    MANDAIC,
    /**
     * Chakma. Since: 1.32
     */
    CHAKMA,
    /**
     * Meroitic Cursive. Since: 1.32
     */
    MEROITIC_CURSIVE,
    /**
     * Meroitic Hieroglyphs. Since: 1.32
     */
    MEROITIC_HIEROGLYPHS,
    /**
     * Miao. Since: 1.32
     */
    MIAO,
    /**
     * Sharada. Since: 1.32
     */
    SHARADA,
    /**
     * Sora Sompeng. Since: 1.32
     */
    SORA_SOMPENG,
    /**
     * Takri. Since: 1.32
     */
    TAKRI,
    /**
     * Bassa. Since: 1.40
     */
    BASSA_VAH,
    /**
     * Caucasian Albanian. Since: 1.40
     */
    CAUCASIAN_ALBANIAN,
    /**
     * Duployan. Since: 1.40
     */
    DUPLOYAN,
    /**
     * Elbasan. Since: 1.40
     */
    ELBASAN,
    /**
     * Grantha. Since: 1.40
     */
    GRANTHA,
    /**
     * Kjohki. Since: 1.40
     */
    KHOJKI,
    /**
     * Khudawadi, Sindhi. Since: 1.40
     */
    KHUDAWADI,
    /**
     * Linear A. Since: 1.40
     */
    LINEAR_A,
    /**
     * Mahajani. Since: 1.40
     */
    MAHAJANI,
    /**
     * Manichaean. Since: 1.40
     */
    MANICHAEAN,
    /**
     * Mende Kikakui. Since: 1.40
     */
    MENDE_KIKAKUI,
    /**
     * Modi. Since: 1.40
     */
    MODI,
    /**
     * Mro. Since: 1.40
     */
    MRO,
    /**
     * Nabataean. Since: 1.40
     */
    NABATAEAN,
    /**
     * Old North Arabian. Since: 1.40
     */
    OLD_NORTH_ARABIAN,
    /**
     * Old Permic. Since: 1.40
     */
    OLD_PERMIC,
    /**
     * Pahawh Hmong. Since: 1.40
     */
    PAHAWH_HMONG,
    /**
     * Palmyrene. Since: 1.40
     */
    PALMYRENE,
    /**
     * Pau Cin Hau. Since: 1.40
     */
    PAU_CIN_HAU,
    /**
     * Psalter Pahlavi. Since: 1.40
     */
    PSALTER_PAHLAVI,
    /**
     * Siddham. Since: 1.40
     */
    SIDDHAM,
    /**
     * Tirhuta. Since: 1.40
     */
    TIRHUTA,
    /**
     * Warang Citi. Since: 1.40
     */
    WARANG_CITI,
    /**
     * Ahom. Since: 1.40
     */
    AHOM,
    /**
     * Anatolian Hieroglyphs. Since: 1.40
     */
    ANATOLIAN_HIEROGLYPHS,
    /**
     * Hatran. Since: 1.40
     */
    HATRAN,
    /**
     * Multani. Since: 1.40
     */
    MULTANI,
    /**
     * Old Hungarian. Since: 1.40
     */
    OLD_HUNGARIAN,
    /**
     * Signwriting. Since: 1.40
     */
    SIGNWRITING,
}
/**
 * An enumeration specifying the width of the font relative to other designs
 * within a family.
 */
enum Stretch {
    /**
     * ultra condensed width
     */
    ULTRA_CONDENSED,
    /**
     * extra condensed width
     */
    EXTRA_CONDENSED,
    /**
     * condensed width
     */
    CONDENSED,
    /**
     * semi condensed width
     */
    SEMI_CONDENSED,
    /**
     * the normal width
     */
    NORMAL,
    /**
     * semi expanded width
     */
    SEMI_EXPANDED,
    /**
     * expanded width
     */
    EXPANDED,
    /**
     * extra expanded width
     */
    EXTRA_EXPANDED,
    /**
     * ultra expanded width
     */
    ULTRA_EXPANDED,
}
/**
 * An enumeration specifying the various slant styles possible for a font.
 */
enum Style {
    /**
     * the font is upright.
     */
    NORMAL,
    /**
     * the font is slanted, but in a roman style.
     */
    OBLIQUE,
    /**
     * the font is slanted in an italic style.
     */
    ITALIC,
}
/**
 * `PangoTabAlign` specifies where the text appears relative to the tab stop
 * position.
 */
enum TabAlign {
    /**
     * the text appears to the right of the tab stop position
     */
    LEFT,
    /**
     * the text appears to the left of the tab stop position
     *   until the available space is filled. Since: 1.50
     */
    RIGHT,
    /**
     * the text is centered at the tab stop position
     *   until the available space is filled. Since: 1.50
     */
    CENTER,
    /**
     * text before the first occurrence of the decimal point
     *   character appears to the left of the tab stop position (until the available
     *   space is filled), the rest to the right. Since: 1.50
     */
    DECIMAL,
}
/**
 * An enumeration that affects how Pango treats characters during shaping.
 */
enum TextTransform {
    /**
     * Leave text unchanged
     */
    NONE,
    /**
     * Display letters and numbers as lowercase
     */
    LOWERCASE,
    /**
     * Display letters and numbers as uppercase
     */
    UPPERCASE,
    /**
     * Display the first character of a word
     *   in titlecase
     */
    CAPITALIZE,
}
/**
 * The `PangoUnderline` enumeration is used to specify whether text
 * should be underlined, and if so, the type of underlining.
 */
enum Underline {
    /**
     * no underline should be drawn
     */
    NONE,
    /**
     * a single underline should be drawn
     */
    SINGLE,
    /**
     * a double underline should be drawn
     */
    DOUBLE,
    /**
     * a single underline should be drawn at a
     *   position beneath the ink extents of the text being
     *   underlined. This should be used only for underlining
     *   single characters, such as for keyboard accelerators.
     *   %PANGO_UNDERLINE_SINGLE should be used for extended
     *   portions of text.
     */
    LOW,
    /**
     * an underline indicating an error should
     *   be drawn below. The exact style of rendering is up to the
     *   `PangoRenderer` in use, but typical styles include wavy
     *   or dotted lines.
     *   This underline is typically used to indicate an error such
     *   as a possible mispelling; in some cases a contrasting color
     *   may automatically be used. This type of underlining is
     *   available since Pango 1.4.
     */
    ERROR,
    /**
     * Like `PANGO_UNDERLINE_SINGLE,` but
     *   drawn continuously across multiple runs. This type
     *   of underlining is available since Pango 1.46.
     */
    SINGLE_LINE,
    /**
     * Like `PANGO_UNDERLINE_DOUBLE,` but
     *   drawn continuously across multiple runs. This type
     *   of underlining is available since Pango 1.46.
     */
    DOUBLE_LINE,
    /**
     * Like `PANGO_UNDERLINE_ERROR,` but
     *   drawn continuously across multiple runs. This type
     *   of underlining is available since Pango 1.46.
     */
    ERROR_LINE,
}
/**
 * An enumeration specifying capitalization variant of the font.
 */
enum Variant {
    /**
     * A normal font.
     */
    NORMAL,
    /**
     * A font with the lower case characters
     *   replaced by smaller variants of the capital characters.
     */
    SMALL_CAPS,
    /**
     * A font with all characters
     *   replaced by smaller variants of the capital characters. Since: 1.50
     */
    ALL_SMALL_CAPS,
    /**
     * A font with the lower case characters
     *   replaced by smaller variants of the capital characters.
     *   Petite Caps can be even smaller than Small Caps. Since: 1.50
     */
    PETITE_CAPS,
    /**
     * A font with all characters
     *   replaced by smaller variants of the capital characters.
     *   Petite Caps can be even smaller than Small Caps. Since: 1.50
     */
    ALL_PETITE_CAPS,
    /**
     * A font with the upper case characters
     *   replaced by smaller variants of the capital letters. Since: 1.50
     */
    UNICASE,
    /**
     * A font with capital letters that
     *   are more suitable for all-uppercase titles. Since: 1.50
     */
    TITLE_CAPS,
}
/**
 * An enumeration specifying the weight (boldness) of a font.
 * 
 * Weight is specified as a numeric value ranging from 100 to 1000.
 * This enumeration simply provides some common, predefined values.
 */
enum Weight {
    /**
     * the thin weight (= 100) Since: 1.24
     */
    THIN,
    /**
     * the ultralight weight (= 200)
     */
    ULTRALIGHT,
    /**
     * the light weight (= 300)
     */
    LIGHT,
    /**
     * the semilight weight (= 350) Since: 1.36.7
     */
    SEMILIGHT,
    /**
     * the book weight (= 380) Since: 1.24)
     */
    BOOK,
    /**
     * the default weight (= 400)
     */
    NORMAL,
    /**
     * the normal weight (= 500) Since: 1.24
     */
    MEDIUM,
    /**
     * the semibold weight (= 600)
     */
    SEMIBOLD,
    /**
     * the bold weight (= 700)
     */
    BOLD,
    /**
     * the ultrabold weight (= 800)
     */
    ULTRABOLD,
    /**
     * the heavy weight (= 900)
     */
    HEAVY,
    /**
     * the ultraheavy weight (= 1000) Since: 1.24
     */
    ULTRAHEAVY,
}
/**
 * `PangoWrapMode` describes how to wrap the lines of a `PangoLayout`
 * to the desired width.
 * 
 * For `PANGO_WRAP_WORD,` Pango uses break opportunities that are determined
 * by the Unicode line breaking algorithm. For `PANGO_WRAP_CHAR,` Pango allows
 * breaking at grapheme boundaries that are determined by the Unicode text
 * segmentation algorithm.
 */
enum WrapMode {
    /**
     * wrap lines at word boundaries.
     */
    WORD,
    /**
     * wrap lines at character boundaries.
     */
    CHAR,
    /**
     * wrap lines at word boundaries, but fall back to
     *   character boundaries if there is not enough space for a full word.
     */
    WORD_CHAR,
}
/**
 * The bits in a `PangoFontMask` correspond to the set fields in a
 * `PangoFontDescription`.
 */
enum FontMask {
    /**
     * the font family is specified.
     */
    FAMILY,
    /**
     * the font style is specified.
     */
    STYLE,
    /**
     * the font variant is specified.
     */
    VARIANT,
    /**
     * the font weight is specified.
     */
    WEIGHT,
    /**
     * the font stretch is specified.
     */
    STRETCH,
    /**
     * the font size is specified.
     */
    SIZE,
    /**
     * the font gravity is specified (Since: 1.16.)
     */
    GRAVITY,
    /**
     * OpenType font variations are specified (Since: 1.42)
     */
    VARIATIONS,
}
/**
 * Flags that influence the behavior of [func`Pango`.Layout.deserialize].
 * 
 * New members may be added to this enumeration over time.
 */
enum LayoutDeserializeFlags {
    /**
     * Default behavior
     */
    DEFAULT,
    /**
     * Apply context information
     *   from the serialization to the `PangoContext`
     */
    CONTEXT,
}
/**
 * Flags that influence the behavior of [method`Pango`.Layout.serialize].
 * 
 * New members may be added to this enumeration over time.
 */
enum LayoutSerializeFlags {
    /**
     * Default behavior
     */
    DEFAULT,
    /**
     * Include context information
     */
    CONTEXT,
    /**
     * Include information about the formatted output
     */
    OUTPUT,
}
/**
 * Flags influencing the shaping process.
 * 
 * `PangoShapeFlags` can be passed to [func`Pango`.shape_with_flags].
 */
enum ShapeFlags {
    /**
     * Default value
     */
    NONE,
    /**
     * Round glyph positions and widths to whole device units
     *   This option should be set if the target renderer can't do subpixel positioning of glyphs
     */
    ROUND_POSITIONS,
}
/**
 * These flags affect how Pango treats characters that are normally
 * not visible in the output.
 */
enum ShowFlags {
    /**
     * No special treatment for invisible characters
     */
    NONE,
    /**
     * Render spaces, tabs and newlines visibly
     */
    SPACES,
    /**
     * Render line breaks visibly
     */
    LINE_BREAKS,
    /**
     * Render default-ignorable Unicode
     *   characters visibly
     */
    IGNORABLES,
}
/**
 * Whether the segment should be shifted to center around the baseline.
 * 
 * This is mainly used in vertical writing directions.
 */
const ANALYSIS_FLAG_CENTERED_BASELINE: number
/**
 * Whether this run holds ellipsized text.
 */
const ANALYSIS_FLAG_IS_ELLIPSIS: number
/**
 * Whether to add a hyphen at the end of the run during shaping.
 */
const ANALYSIS_FLAG_NEED_HYPHEN: number
/**
 * Value for `start_index` in `PangoAttribute` that indicates
 * the beginning of the text.
 */
const ATTR_INDEX_FROM_TEXT_BEGINNING: number
/**
 * Value for `end_index` in `PangoAttribute` that indicates
 * the end of the text.
 */
const ATTR_INDEX_TO_TEXT_END: number
/**
 * A `PangoGlyph` value that indicates a zero-width empty glpyh.
 * 
 * This is useful for example in shaper modules, to use as the glyph for
 * various zero-width Unicode characters (those passing [func`is_zero_width]`).
 */
const GLYPH_EMPTY: Glyph
/**
 * A `PangoGlyph` value for invalid input.
 * 
 * `PangoLayout` produces one such glyph per invalid input UTF-8 byte and such
 * a glyph is rendered as a crossed box.
 * 
 * Note that this value is defined such that it has the %PANGO_GLYPH_UNKNOWN_FLAG
 * set.
 */
const GLYPH_INVALID_INPUT: Glyph
/**
 * Flag used in `PangoGlyph` to turn a `gunichar` value of a valid Unicode
 * character into an unknown-character glyph for that `gunichar`.
 * 
 * Such unknown-character glyphs may be rendered as a 'hex box'.
 */
const GLYPH_UNKNOWN_FLAG: Glyph
/**
 * The scale between dimensions used for Pango distances and device units.
 * 
 * The definition of device units is dependent on the output device; it will
 * typically be pixels for a screen, and points for a printer. %PANGO_SCALE is
 * currently 1024, but this may be changed in the future.
 * 
 * When setting font sizes, device units are always considered to be
 * points (as in "12 point font"), rather than pixels.
 */
const SCALE: number
/**
 * The major component of the version of Pango available at compile-time.
 */
const VERSION_MAJOR: number
/**
 * The micro component of the version of Pango available at compile-time.
 */
const VERSION_MICRO: number
/**
 * The minor component of the version of Pango available at compile-time.
 */
const VERSION_MINOR: number
/**
 * A string literal containing the version of Pango available at compile-time.
 */
const VERSION_STRING: string
function attr_allow_breaks_new(allow_breaks: boolean): Attribute
function attr_background_alpha_new(alpha: number): Attribute
function attr_background_new(red: number, green: number, blue: number): Attribute
function attr_baseline_shift_new(shift: number): Attribute
function attr_break(text: string, length: number, attr_list: AttrList, offset: number, attrs: LogAttr[]): void
function attr_fallback_new(enable_fallback: boolean): Attribute
function attr_family_new(family: string): Attribute
function attr_font_desc_new(desc: FontDescription): Attribute
function attr_font_features_new(features: string): Attribute
function attr_font_scale_new(scale: FontScale): Attribute
function attr_foreground_alpha_new(alpha: number): Attribute
function attr_foreground_new(red: number, green: number, blue: number): Attribute
function attr_gravity_hint_new(hint: GravityHint): Attribute
function attr_gravity_new(gravity: Gravity): Attribute
function attr_insert_hyphens_new(insert_hyphens: boolean): Attribute
function attr_language_new(language: Language): Attribute
function attr_letter_spacing_new(letter_spacing: number): Attribute
function attr_line_height_new(factor: number): Attribute
function attr_line_height_new_absolute(height: number): Attribute
function attr_list_from_string(text: string): AttrList | null
function attr_overline_color_new(red: number, green: number, blue: number): Attribute
function attr_overline_new(overline: Overline): Attribute
function attr_rise_new(rise: number): Attribute
function attr_scale_new(scale_factor: number): Attribute
function attr_sentence_new(): Attribute
function attr_shape_new(ink_rect: Rectangle, logical_rect: Rectangle): Attribute
function attr_shape_new_with_data(ink_rect: Rectangle, logical_rect: Rectangle, data?: object | null, copy_func?: AttrDataCopyFunc | null): Attribute
function attr_show_new(flags: ShowFlags): Attribute
function attr_size_new(size: number): Attribute
function attr_size_new_absolute(size: number): Attribute
function attr_stretch_new(stretch: Stretch): Attribute
function attr_strikethrough_color_new(red: number, green: number, blue: number): Attribute
function attr_strikethrough_new(strikethrough: boolean): Attribute
function attr_style_new(style: Style): Attribute
function attr_text_transform_new(transform: TextTransform): Attribute
function attr_type_get_name(type: AttrType): string | null
function attr_type_register(name: string): AttrType
function attr_underline_color_new(red: number, green: number, blue: number): Attribute
function attr_underline_new(underline: Underline): Attribute
function attr_variant_new(variant: Variant): Attribute
function attr_weight_new(weight: Weight): Attribute
function attr_word_new(): Attribute
function bidi_type_for_unichar(ch: number): BidiType
function break_TODO(text: string, length: number, analysis: Analysis, attrs: LogAttr[]): void
function default_break(text: string, length: number, analysis: Analysis | null, attrs: LogAttr, attrs_len: number): void
function extents_to_pixels(inclusive?: Rectangle | null, nearest?: Rectangle | null): void
function find_base_dir(text: string, length: number): Direction
function find_paragraph_boundary(text: string, length: number): [ /* paragraph_delimiter_index */ number, /* next_paragraph_start */ number ]
function font_description_from_string(str: string): FontDescription
function get_log_attrs(text: string, length: number, level: number, language: Language, attrs: LogAttr[]): void
function get_mirror_char(ch: number, mirrored_ch: number): boolean
function gravity_get_for_matrix(matrix?: Matrix | null): Gravity
function gravity_get_for_script(script: Script, base_gravity: Gravity, hint: GravityHint): Gravity
function gravity_get_for_script_and_width(script: Script, wide: boolean, base_gravity: Gravity, hint: GravityHint): Gravity
function gravity_to_rotation(gravity: Gravity): number
function is_zero_width(ch: number): boolean
function itemize(context: Context, text: string, start_index: number, length: number, attrs: AttrList, cached_iter?: AttrIterator | null): Item[]
function itemize_with_base_dir(context: Context, base_dir: Direction, text: string, start_index: number, length: number, attrs: AttrList, cached_iter?: AttrIterator | null): Item[]
function language_from_string(language?: string | null): Language | null
function language_get_default(): Language
function language_get_preferred(): Language | null
function layout_deserialize_error_quark(): GLib.Quark
function log2vis_get_embedding_levels(text: string, length: number, pbase_dir: Direction): number
function markup_parser_finish(context: GLib.MarkupParseContext): [ /* returnType */ boolean, /* attr_list */ AttrList | null, /* text */ string | null, /* accel_char */ number | null ]
function markup_parser_new(accel_marker: number): GLib.MarkupParseContext
function parse_enum(type: GObject.Type, str: string | null, warn: boolean): [ /* returnType */ boolean, /* value */ number | null, /* possible_values */ string | null ]
function parse_markup(markup_text: string, length: number, accel_marker: number): [ /* returnType */ boolean, /* attr_list */ AttrList | null, /* text */ string | null, /* accel_char */ number | null ]
function parse_stretch(str: string, warn: boolean): [ /* returnType */ boolean, /* stretch */ Stretch ]
function parse_style(str: string, warn: boolean): [ /* returnType */ boolean, /* style */ Style ]
function parse_variant(str: string, warn: boolean): [ /* returnType */ boolean, /* variant */ Variant ]
function parse_weight(str: string, warn: boolean): [ /* returnType */ boolean, /* weight */ Weight ]
function quantize_line_geometry(thickness: number, position: number): [ /* thickness */ number, /* position */ number ]
function read_line(stream: object | null, str: GLib.String): number
function reorder_items(items: Item[]): Item[]
function scan_int(pos: string): [ /* returnType */ boolean, /* pos */ string, /* out */ number ]
function scan_string(pos: string, out: GLib.String): [ /* returnType */ boolean, /* pos */ string ]
function scan_word(pos: string, out: GLib.String): [ /* returnType */ boolean, /* pos */ string ]
function script_for_unichar(ch: number): Script
function script_get_sample_language(script: Script): Language | null
function shape(text: string, length: number, analysis: Analysis, glyphs: GlyphString): void
function shape_full(item_text: string, item_length: number, paragraph_text: string | null, paragraph_length: number, analysis: Analysis, glyphs: GlyphString): void
function shape_item(item: Item, paragraph_text: string | null, paragraph_length: number, log_attrs: LogAttr | null, glyphs: GlyphString, flags: ShapeFlags): void
function shape_with_flags(item_text: string, item_length: number, paragraph_text: string | null, paragraph_length: number, analysis: Analysis, glyphs: GlyphString, flags: ShapeFlags): void
function skip_space(pos: string): [ /* returnType */ boolean, /* pos */ string ]
function split_file_list(str: string): string[]
function tab_array_from_string(text: string): TabArray | null
function tailor_break(text: string, length: number, analysis: Analysis, offset: number, attrs: LogAttr[]): void
function trim_string(str: string): string
function unichar_direction(ch: number): Direction
function units_from_double(d: number): number
function units_to_double(i: number): number
function version(): number
function version_check(required_major: number, required_minor: number, required_micro: number): string | null
function version_string(): string
/**
 * Type of a function that can duplicate user data for an attribute.
 */
interface AttrDataCopyFunc {
    (): object | null
}
/**
 * Type of a function filtering a list of attributes.
 */
interface AttrFilterFunc {
    (attribute: Attribute): boolean
}
/**
 * Callback used when enumerating fonts in a fontset.
 * 
 * See [method`Pango`.Fontset.foreach].
 */
interface FontsetForeachFunc {
    (fontset: Fontset, font: Font): boolean
}
interface Context_ConstructProps extends GObject.Object_ConstructProps {
}
class Context {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Pango-1.0.Pango.Context */
    /**
     * Forces a change in the context, which will cause any `PangoLayout`
     * using this context to re-layout.
     * 
     * This function is only useful when implementing a new backend
     * for Pango, something applications won't do. Backends should
     * call this function if they have attached extra data to the context
     * and such data is changed.
     */
    changed(): void
    /**
     * Retrieves the base direction for the context.
     * 
     * See [method`Pango`.Context.set_base_dir].
     */
    get_base_dir(): Direction
    /**
     * Retrieves the base gravity for the context.
     * 
     * See [method`Pango`.Context.set_base_gravity].
     */
    get_base_gravity(): Gravity
    /**
     * Retrieve the default font description for the context.
     */
    get_font_description(): FontDescription
    /**
     * Gets the `PangoFontMap` used to look up fonts for this context.
     */
    get_font_map(): FontMap
    /**
     * Retrieves the gravity for the context.
     * 
     * This is similar to [method`Pango`.Context.get_base_gravity],
     * except for when the base gravity is %PANGO_GRAVITY_AUTO for
     * which [func`Pango`.Gravity.get_for_matrix] is used to return the
     * gravity from the current context matrix.
     */
    get_gravity(): Gravity
    /**
     * Retrieves the gravity hint for the context.
     * 
     * See [method`Pango`.Context.set_gravity_hint] for details.
     */
    get_gravity_hint(): GravityHint
    /**
     * Retrieves the global language tag for the context.
     */
    get_language(): Language
    /**
     * Gets the transformation matrix that will be applied when
     * rendering with this context.
     * 
     * See [method`Pango`.Context.set_matrix].
     */
    get_matrix(): Matrix | null
    /**
     * Get overall metric information for a particular font description.
     * 
     * Since the metrics may be substantially different for different scripts,
     * a language tag can be provided to indicate that the metrics should be
     * retrieved that correspond to the script(s) used by that language.
     * 
     * The `PangoFontDescription` is interpreted in the same way as by [func`itemize]`,
     * and the family name may be a comma separated list of names. If characters
     * from multiple of these families would be used to render the string, then
     * the returned fonts would be a composite of the metrics for the fonts loaded
     * for the individual families.
     */
    get_metrics(desc?: FontDescription | null, language?: Language | null): FontMetrics
    /**
     * Returns whether font rendering with this context should
     * round glyph positions and widths.
     */
    get_round_glyph_positions(): boolean
    /**
     * Returns the current serial number of `context`.
     * 
     * The serial number is initialized to an small number larger than zero
     * when a new context is created and is increased whenever the context
     * is changed using any of the setter functions, or the `PangoFontMap` it
     * uses to find fonts has changed. The serial may wrap, but will never
     * have the value 0. Since it can wrap, never compare it with "less than",
     * always use "not equals".
     * 
     * This can be used to automatically detect changes to a `PangoContext`,
     * and is only useful when implementing objects that need update when their
     * `PangoContext` changes, like `PangoLayout`.
     */
    get_serial(): number
    /**
     * List all families for a context.
     */
    list_families(): /* families */ FontFamily[]
    /**
     * Loads the font in one of the fontmaps in the context
     * that is the closest match for `desc`.
     */
    load_font(desc: FontDescription): Font | null
    /**
     * Load a set of fonts in the context that can be used to render
     * a font matching `desc`.
     */
    load_fontset(desc: FontDescription, language: Language): Fontset | null
    /**
     * Sets the base direction for the context.
     * 
     * The base direction is used in applying the Unicode bidirectional
     * algorithm; if the `direction` is %PANGO_DIRECTION_LTR or
     * %PANGO_DIRECTION_RTL, then the value will be used as the paragraph
     * direction in the Unicode bidirectional algorithm. A value of
     * %PANGO_DIRECTION_WEAK_LTR or %PANGO_DIRECTION_WEAK_RTL is used only
     * for paragraphs that do not contain any strong characters themselves.
     */
    set_base_dir(direction: Direction): void
    /**
     * Sets the base gravity for the context.
     * 
     * The base gravity is used in laying vertical text out.
     */
    set_base_gravity(gravity: Gravity): void
    /**
     * Set the default font description for the context
     */
    set_font_description(desc: FontDescription): void
    /**
     * Sets the font map to be searched when fonts are looked-up
     * in this context.
     * 
     * This is only for internal use by Pango backends, a `PangoContext`
     * obtained via one of the recommended methods should already have a
     * suitable font map.
     */
    set_font_map(font_map: FontMap): void
    /**
     * Sets the gravity hint for the context.
     * 
     * The gravity hint is used in laying vertical text out, and
     * is only relevant if gravity of the context as returned by
     * [method`Pango`.Context.get_gravity] is set to %PANGO_GRAVITY_EAST
     * or %PANGO_GRAVITY_WEST.
     */
    set_gravity_hint(hint: GravityHint): void
    /**
     * Sets the global language tag for the context.
     * 
     * The default language for the locale of the running process
     * can be found using [func`Pango`.Language.get_default].
     */
    set_language(language: Language): void
    /**
     * Sets the transformation matrix that will be applied when rendering
     * with this context.
     * 
     * Note that reported metrics are in the user space coordinates before
     * the application of the matrix, not device-space coordinates after the
     * application of the matrix. So, they don't scale with the matrix, though
     * they may change slightly for different matrices, depending on how the
     * text is fit to the pixel grid.
     */
    set_matrix(matrix?: Matrix | null): void
    /**
     * Sets whether font rendering with this context should
     * round glyph positions and widths to integral positions,
     * in device units.
     * 
     * This is useful when the renderer can't handle subpixel
     * positioning of glyphs.
     * 
     * The default value is to round glyph positions, to remain
     * compatible with previous Pango behavior.
     */
    set_round_glyph_positions(round_positions: boolean): void
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     */
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     */
    connect(sigName: "notify", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Context, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Context_ConstructProps)
    _init (config?: Context_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Context
    static $gtype: GObject.Type
}
interface Coverage_ConstructProps extends GObject.Object_ConstructProps {
}
class Coverage {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Pango-1.0.Pango.Coverage */
    /**
     * Copy an existing `PangoCoverage`.
     */
    copy(): Coverage
    /**
     * Determine whether a particular index is covered by `coverage`.
     */
    get(index_: number): CoverageLevel
    /**
     * Set the coverage for each index in `coverage` to be the max (better)
     * value of the current coverage for the index and the coverage for
     * the corresponding index in `other`.
     */
    max(other: Coverage): void
    /**
     * Increase the reference count on the `PangoCoverage` by one.
     */
    ref(): Coverage
    /**
     * Modify a particular index within `coverage`
     */
    set(index_: number, level: CoverageLevel): void
    /**
     * Convert a `PangoCoverage` structure into a flat binary format.
     */
    to_bytes(): /* bytes */ Uint8Array
    /**
     * Decrease the reference count on the `PangoCoverage` by one.
     * 
     * If the result is zero, free the coverage and all associated memory.
     */
    unref(): void
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     */
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     */
    connect(sigName: "notify", callback: (($obj: Coverage, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Coverage, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Coverage_ConstructProps)
    _init (config?: Coverage_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(): Coverage
    /**
     * Convert data generated from [method`Pango`.Coverage.to_bytes]
     * back to a `PangoCoverage`.
     */
    static from_bytes(bytes: Uint8Array): Coverage | null
    static $gtype: GObject.Type
}
interface Font_ConstructProps extends GObject.Object_ConstructProps {
}
class Font {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Pango-1.0.Pango.Font */
    /**
     * Returns a description of the font, with font size set in points.
     * 
     * Use [method`Pango`.Font.describe_with_absolute_size] if you want
     * the font size in device units.
     */
    describe(): FontDescription
    /**
     * Returns a description of the font, with absolute font size set
     * in device units.
     * 
     * Use [method`Pango`.Font.describe] if you want the font size in points.
     */
    describe_with_absolute_size(): FontDescription
    /**
     * Computes the coverage map for a given font and language tag.
     */
    get_coverage(language: Language): Coverage
    /**
     * Gets the `PangoFontFace` to which `font` belongs.
     */
    get_face(): FontFace
    /**
     * Obtain the OpenType features that are provided by the font.
     * 
     * These are passed to the rendering system, together with features
     * that have been explicitly set via attributes.
     * 
     * Note that this does not include OpenType features which the
     * rendering system enables by default.
     */
    get_features(num_features: number): [ /* features */ HarfBuzz.feature_t[], /* num_features */ number ]
    /**
     * Gets the font map for which the font was created.
     * 
     * Note that the font maintains a *weak* reference to
     * the font map, so if all references to font map are
     * dropped, the font map will be finalized even if there
     * are fonts created with the font map that are still alive.
     * In that case this function will return %NULL.
     * 
     * It is the responsibility of the user to ensure that the
     * font map is kept alive. In most uses this is not an issue
     * as a `PangoContext` holds a reference to the font map.
     */
    get_font_map(): FontMap | null
    /**
     * Gets the logical and ink extents of a glyph within a font.
     * 
     * The coordinate system for each rectangle has its origin at the
     * base line and horizontal origin of the character with increasing
     * coordinates extending to the right and down. The macros PANGO_ASCENT(),
     * PANGO_DESCENT(), PANGO_LBEARING(), and PANGO_RBEARING() can be used to convert
     * from the extents rectangle to more traditional font metrics. The units
     * of the rectangles are in 1/PANGO_SCALE of a device unit.
     * 
     * If `font` is %NULL, this function gracefully sets some sane values in the
     * output variables and returns.
     */
    get_glyph_extents(glyph: Glyph): [ /* ink_rect */ Rectangle | null, /* logical_rect */ Rectangle | null ]
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
    get_languages(): Language[] | null
    /**
     * Gets overall metric information for a font.
     * 
     * Since the metrics may be substantially different for different scripts,
     * a language tag can be provided to indicate that the metrics should be
     * retrieved that correspond to the script(s) used by that language.
     * 
     * If `font` is %NULL, this function gracefully sets some sane values in the
     * output variables and returns.
     */
    get_metrics(language?: Language | null): FontMetrics
    /**
     * Returns whether the font provides a glyph for this character.
     */
    has_char(wc: number): boolean
    /**
     * Serializes the `font` in a way that can be uniquely identified.
     * 
     * There are no guarantees about the format of the output across different
     * versions of Pango.
     * 
     * The intended use of this function is testing, benchmarking and debugging.
     * The format is not meant as a permanent storage format.
     * 
     * To recreate a font from its serialized form, use [func`Pango`.Font.deserialize].
     */
    serialize(): GLib.Bytes
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     */
    watch_closure(closure: Function): void
    /* Virtual methods of Pango-1.0.Pango.Font */
    vfunc_create_hb_font(): HarfBuzz.font_t
    /**
     * Returns a description of the font, with font size set in points.
     * 
     * Use [method`Pango`.Font.describe_with_absolute_size] if you want
     * the font size in device units.
     */
    vfunc_describe(): FontDescription
    vfunc_describe_absolute(): FontDescription
    /**
     * Computes the coverage map for a given font and language tag.
     */
    vfunc_get_coverage(language: Language): Coverage
    /**
     * Obtain the OpenType features that are provided by the font.
     * 
     * These are passed to the rendering system, together with features
     * that have been explicitly set via attributes.
     * 
     * Note that this does not include OpenType features which the
     * rendering system enables by default.
     */
    vfunc_get_features(num_features: number): [ /* features */ HarfBuzz.feature_t[], /* num_features */ number ]
    /**
     * Gets the font map for which the font was created.
     * 
     * Note that the font maintains a *weak* reference to
     * the font map, so if all references to font map are
     * dropped, the font map will be finalized even if there
     * are fonts created with the font map that are still alive.
     * In that case this function will return %NULL.
     * 
     * It is the responsibility of the user to ensure that the
     * font map is kept alive. In most uses this is not an issue
     * as a `PangoContext` holds a reference to the font map.
     */
    vfunc_get_font_map(): FontMap | null
    /**
     * Gets the logical and ink extents of a glyph within a font.
     * 
     * The coordinate system for each rectangle has its origin at the
     * base line and horizontal origin of the character with increasing
     * coordinates extending to the right and down. The macros PANGO_ASCENT(),
     * PANGO_DESCENT(), PANGO_LBEARING(), and PANGO_RBEARING() can be used to convert
     * from the extents rectangle to more traditional font metrics. The units
     * of the rectangles are in 1/PANGO_SCALE of a device unit.
     * 
     * If `font` is %NULL, this function gracefully sets some sane values in the
     * output variables and returns.
     */
    vfunc_get_glyph_extents(glyph: Glyph): [ /* ink_rect */ Rectangle | null, /* logical_rect */ Rectangle | null ]
    /**
     * Gets overall metric information for a font.
     * 
     * Since the metrics may be substantially different for different scripts,
     * a language tag can be provided to indicate that the metrics should be
     * retrieved that correspond to the script(s) used by that language.
     * 
     * If `font` is %NULL, this function gracefully sets some sane values in the
     * output variables and returns.
     */
    vfunc_get_metrics(language?: Language | null): FontMetrics
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     */
    connect(sigName: "notify", callback: (($obj: Font, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Font, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Font_ConstructProps)
    _init (config?: Font_ConstructProps): void
    /* Static methods and pseudo-constructors */
    /**
     * Frees an array of font descriptions.
     */
    static descriptions_free(descs: FontDescription[] | null): void
    /**
     * Loads data previously created via [method`Pango`.Font.serialize].
     * 
     * For a discussion of the supported format, see that function.
     * 
     * Note: to verify that the returned font is identical to
     * the one that was serialized, you can compare `bytes` to the
     * result of serializing the font again.
     */
    static deserialize(context: Context, bytes: GLib.Bytes): Font | null
    static $gtype: GObject.Type
}
interface FontFace_ConstructProps extends GObject.Object_ConstructProps {
}
class FontFace {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Pango-1.0.Pango.FontFace */
    /**
     * Returns a font description that matches the face.
     * 
     * The resulting font description will have the family, style,
     * variant, weight and stretch of the face, but its size field
     * will be unset.
     */
    describe(): FontDescription
    /**
     * Gets a name representing the style of this face.
     * 
     * Note that a font family may contain multiple faces
     * with the same name (e.g. a variable and a non-variable
     * face for the same style).
     */
    get_face_name(): string
    /**
     * Gets the `PangoFontFamily` that `face` belongs to.
     */
    get_family(): FontFamily
    /**
     * Returns whether a `PangoFontFace` is synthesized.
     * 
     * This will be the case if the underlying font rendering engine
     * creates this face from another face, by shearing, emboldening,
     * lightening or modifying it in some other way.
     */
    is_synthesized(): boolean
    /**
     * List the available sizes for a font.
     * 
     * This is only applicable to bitmap fonts. For scalable fonts, stores
     * %NULL at the location pointed to by `sizes` and 0 at the location pointed
     * to by `n_sizes`. The sizes returned are in Pango units and are sorted
     * in ascending order.
     */
    list_sizes(): /* sizes */ number[] | null
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     */
    watch_closure(closure: Function): void
    /* Virtual methods of Pango-1.0.Pango.FontFace */
    /**
     * Returns a font description that matches the face.
     * 
     * The resulting font description will have the family, style,
     * variant, weight and stretch of the face, but its size field
     * will be unset.
     */
    vfunc_describe(): FontDescription
    /**
     * Gets a name representing the style of this face.
     * 
     * Note that a font family may contain multiple faces
     * with the same name (e.g. a variable and a non-variable
     * face for the same style).
     */
    vfunc_get_face_name(): string
    /**
     * Gets the `PangoFontFamily` that `face` belongs to.
     */
    vfunc_get_family(): FontFamily
    /**
     * Returns whether a `PangoFontFace` is synthesized.
     * 
     * This will be the case if the underlying font rendering engine
     * creates this face from another face, by shearing, emboldening,
     * lightening or modifying it in some other way.
     */
    vfunc_is_synthesized(): boolean
    /**
     * List the available sizes for a font.
     * 
     * This is only applicable to bitmap fonts. For scalable fonts, stores
     * %NULL at the location pointed to by `sizes` and 0 at the location pointed
     * to by `n_sizes`. The sizes returned are in Pango units and are sorted
     * in ascending order.
     */
    vfunc_list_sizes(): /* sizes */ number[] | null
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     */
    connect(sigName: "notify", callback: (($obj: FontFace, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FontFace, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FontFace_ConstructProps)
    _init (config?: FontFace_ConstructProps): void
    static $gtype: GObject.Type
}
interface FontFamily_ConstructProps extends GObject.Object_ConstructProps {
}
class FontFamily {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Pango-1.0.Pango.FontFamily */
    /**
     * Gets the `PangoFontFace` of `family` with the given name.
     */
    get_face(name?: string | null): FontFace | null
    /**
     * Gets the name of the family.
     * 
     * The name is unique among all fonts for the font backend and can
     * be used in a `PangoFontDescription` to specify that a face from
     * this family is desired.
     */
    get_name(): string
    /**
     * A monospace font is a font designed for text display where the the
     * characters form a regular grid.
     * 
     * For Western languages this would
     * mean that the advance width of all characters are the same, but
     * this categorization also includes Asian fonts which include
     * double-width characters: characters that occupy two grid cells.
     * g_unichar_iswide() returns a result that indicates whether a
     * character is typically double-width in a monospace font.
     * 
     * The best way to find out the grid-cell size is to call
     * [method`Pango`.FontMetrics.get_approximate_digit_width], since the
     * results of [method`Pango`.FontMetrics.get_approximate_char_width] may
     * be affected by double-width characters.
     */
    is_monospace(): boolean
    /**
     * A variable font is a font which has axes that can be modified to
     * produce different faces.
     * 
     * Such axes are also known as _variations_; see
     * [method`Pango`.FontDescription.set_variations] for more information.
     */
    is_variable(): boolean
    /**
     * Lists the different font faces that make up `family`.
     * 
     * The faces in a family share a common design, but differ in slant, weight,
     * width and other aspects.
     * 
     * Note that the returned faces are not in any particular order, and
     * multiple faces may have the same name or characteristics.
     * 
     * `PangoFontFamily` also implemented the [iface`Gio`.ListModel] interface
     * for enumerating faces.
     */
    list_faces(): /* faces */ FontFace[] | null
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     */
    watch_closure(closure: Function): void
    /* Virtual methods of Pango-1.0.Pango.FontFamily */
    /**
     * Gets the `PangoFontFace` of `family` with the given name.
     */
    vfunc_get_face(name?: string | null): FontFace | null
    /**
     * Gets the name of the family.
     * 
     * The name is unique among all fonts for the font backend and can
     * be used in a `PangoFontDescription` to specify that a face from
     * this family is desired.
     */
    vfunc_get_name(): string
    /**
     * A monospace font is a font designed for text display where the the
     * characters form a regular grid.
     * 
     * For Western languages this would
     * mean that the advance width of all characters are the same, but
     * this categorization also includes Asian fonts which include
     * double-width characters: characters that occupy two grid cells.
     * g_unichar_iswide() returns a result that indicates whether a
     * character is typically double-width in a monospace font.
     * 
     * The best way to find out the grid-cell size is to call
     * [method`Pango`.FontMetrics.get_approximate_digit_width], since the
     * results of [method`Pango`.FontMetrics.get_approximate_char_width] may
     * be affected by double-width characters.
     */
    vfunc_is_monospace(): boolean
    /**
     * A variable font is a font which has axes that can be modified to
     * produce different faces.
     * 
     * Such axes are also known as _variations_; see
     * [method`Pango`.FontDescription.set_variations] for more information.
     */
    vfunc_is_variable(): boolean
    /**
     * Lists the different font faces that make up `family`.
     * 
     * The faces in a family share a common design, but differ in slant, weight,
     * width and other aspects.
     * 
     * Note that the returned faces are not in any particular order, and
     * multiple faces may have the same name or characteristics.
     * 
     * `PangoFontFamily` also implemented the [iface`Gio`.ListModel] interface
     * for enumerating faces.
     */
    vfunc_list_faces(): /* faces */ FontFace[] | null
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     */
    connect(sigName: "notify", callback: (($obj: FontFamily, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FontFamily, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FontFamily_ConstructProps)
    _init (config?: FontFamily_ConstructProps): void
    static $gtype: GObject.Type
}
interface FontMap_ConstructProps extends GObject.Object_ConstructProps {
}
class FontMap {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Pango-1.0.Pango.FontMap */
    /**
     * Forces a change in the context, which will cause any `PangoContext`
     * using this fontmap to change.
     * 
     * This function is only useful when implementing a new backend
     * for Pango, something applications won't do. Backends should
     * call this function if they have attached extra data to the
     * context and such data is changed.
     */
    changed(): void
    /**
     * Creates a `PangoContext` connected to `fontmap`.
     * 
     * This is equivalent to [ctor`Pango`.Context.new] followed by
     * [method`Pango`.Context.set_font_map].
     * 
     * If you are using Pango as part of a higher-level system,
     * that system may have it's own way of create a `PangoContext`.
     * For instance, the GTK toolkit has, among others,
     * gtk_widget_get_pango_context(). Use those instead.
     */
    create_context(): Context
    /**
     * Gets a font family by name.
     */
    get_family(name: string): FontFamily
    /**
     * Returns the current serial number of `fontmap`.
     * 
     * The serial number is initialized to an small number larger than zero
     * when a new fontmap is created and is increased whenever the fontmap
     * is changed. It may wrap, but will never have the value 0. Since it can
     * wrap, never compare it with "less than", always use "not equals".
     * 
     * The fontmap can only be changed using backend-specific API, like changing
     * fontmap resolution.
     * 
     * This can be used to automatically detect changes to a `PangoFontMap`,
     * like in `PangoContext`.
     */
    get_serial(): number
    /**
     * List all families for a fontmap.
     * 
     * Note that the returned families are not in any particular order.
     * 
     * `PangoFontMap` also implemented the [iface`Gio`.ListModel] interface
     * for enumerating families.
     */
    list_families(): /* families */ FontFamily[]
    /**
     * Load the font in the fontmap that is the closest match for `desc`.
     */
    load_font(context: Context, desc: FontDescription): Font | null
    /**
     * Load a set of fonts in the fontmap that can be used to render
     * a font matching `desc`.
     */
    load_fontset(context: Context, desc: FontDescription, language: Language): Fontset | null
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     */
    watch_closure(closure: Function): void
    /* Virtual methods of Pango-1.0.Pango.FontMap */
    /**
     * Forces a change in the context, which will cause any `PangoContext`
     * using this fontmap to change.
     * 
     * This function is only useful when implementing a new backend
     * for Pango, something applications won't do. Backends should
     * call this function if they have attached extra data to the
     * context and such data is changed.
     */
    vfunc_changed(): void
    /**
     * Gets a font family by name.
     */
    vfunc_get_family(name: string): FontFamily
    /**
     * Returns the current serial number of `fontmap`.
     * 
     * The serial number is initialized to an small number larger than zero
     * when a new fontmap is created and is increased whenever the fontmap
     * is changed. It may wrap, but will never have the value 0. Since it can
     * wrap, never compare it with "less than", always use "not equals".
     * 
     * The fontmap can only be changed using backend-specific API, like changing
     * fontmap resolution.
     * 
     * This can be used to automatically detect changes to a `PangoFontMap`,
     * like in `PangoContext`.
     */
    vfunc_get_serial(): number
    /**
     * List all families for a fontmap.
     * 
     * Note that the returned families are not in any particular order.
     * 
     * `PangoFontMap` also implemented the [iface`Gio`.ListModel] interface
     * for enumerating families.
     */
    vfunc_list_families(): /* families */ FontFamily[]
    /**
     * Load the font in the fontmap that is the closest match for `desc`.
     */
    vfunc_load_font(context: Context, desc: FontDescription): Font | null
    /**
     * Load a set of fonts in the fontmap that can be used to render
     * a font matching `desc`.
     */
    vfunc_load_fontset(context: Context, desc: FontDescription, language: Language): Fontset | null
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     */
    connect(sigName: "notify", callback: (($obj: FontMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FontMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FontMap_ConstructProps)
    _init (config?: FontMap_ConstructProps): void
    static $gtype: GObject.Type
}
interface Fontset_ConstructProps extends GObject.Object_ConstructProps {
}
class Fontset {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Pango-1.0.Pango.Fontset */
    /**
     * Iterates through all the fonts in a fontset, calling `func` for
     * each one.
     * 
     * If `func` returns %TRUE, that stops the iteration.
     */
    foreach(func: FontsetForeachFunc): void
    /**
     * Returns the font in the fontset that contains the best
     * glyph for a Unicode character.
     */
    get_font(wc: number): Font
    /**
     * Get overall metric information for the fonts in the fontset.
     */
    get_metrics(): FontMetrics
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     */
    watch_closure(closure: Function): void
    /* Virtual methods of Pango-1.0.Pango.Fontset */
    /**
     * Iterates through all the fonts in a fontset, calling `func` for
     * each one.
     * 
     * If `func` returns %TRUE, that stops the iteration.
     */
    vfunc_foreach(func: FontsetForeachFunc): void
    /**
     * Returns the font in the fontset that contains the best
     * glyph for a Unicode character.
     */
    vfunc_get_font(wc: number): Font
    vfunc_get_language(): Language
    /**
     * Get overall metric information for the fonts in the fontset.
     */
    vfunc_get_metrics(): FontMetrics
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     */
    connect(sigName: "notify", callback: (($obj: Fontset, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Fontset, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Fontset_ConstructProps)
    _init (config?: Fontset_ConstructProps): void
    static $gtype: GObject.Type
}
interface FontsetSimple_ConstructProps extends Fontset_ConstructProps {
}
class FontsetSimple {
    /* Fields of Pango-1.0.Pango.Fontset */
    readonly parent_instance: GObject.Object
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Pango-1.0.Pango.FontsetSimple */
    /**
     * Adds a font to the fontset.
     * 
     * The fontset takes ownership of `font`.
     */
    append(font: Font): void
    /**
     * Returns the number of fonts in the fontset.
     */
    size(): number
    /* Methods of Pango-1.0.Pango.Fontset */
    /**
     * Iterates through all the fonts in a fontset, calling `func` for
     * each one.
     * 
     * If `func` returns %TRUE, that stops the iteration.
     */
    foreach(func: FontsetForeachFunc): void
    /**
     * Returns the font in the fontset that contains the best
     * glyph for a Unicode character.
     */
    get_font(wc: number): Font
    /**
     * Get overall metric information for the fonts in the fontset.
     */
    get_metrics(): FontMetrics
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     */
    watch_closure(closure: Function): void
    /* Virtual methods of Pango-1.0.Pango.Fontset */
    /**
     * Iterates through all the fonts in a fontset, calling `func` for
     * each one.
     * 
     * If `func` returns %TRUE, that stops the iteration.
     */
    vfunc_foreach(func: FontsetForeachFunc): void
    /**
     * Returns the font in the fontset that contains the best
     * glyph for a Unicode character.
     */
    vfunc_get_font(wc: number): Font
    vfunc_get_language(): Language
    /**
     * Get overall metric information for the fonts in the fontset.
     */
    vfunc_get_metrics(): FontMetrics
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     */
    connect(sigName: "notify", callback: (($obj: FontsetSimple, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: FontsetSimple, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: FontsetSimple_ConstructProps)
    _init (config?: FontsetSimple_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(language: Language): FontsetSimple
    static $gtype: GObject.Type
}
interface Layout_ConstructProps extends GObject.Object_ConstructProps {
}
class Layout {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Pango-1.0.Pango.Layout */
    /**
     * Forces recomputation of any state in the `PangoLayout` that
     * might depend on the layout's context.
     * 
     * This function should be called if you make changes to the context
     * subsequent to creating the layout.
     */
    context_changed(): void
    /**
     * Creates a deep copy-by-value of the layout.
     * 
     * The attribute list, tab array, and text from the original layout
     * are all copied by value.
     */
    copy(): Layout
    /**
     * Gets the alignment for the layout: how partial lines are
     * positioned within the horizontal space available.
     */
    get_alignment(): Alignment
    /**
     * Gets the attribute list for the layout, if any.
     */
    get_attributes(): AttrList | null
    /**
     * Gets whether to calculate the base direction for the layout
     * according to its contents.
     * 
     * See [method`Pango`.Layout.set_auto_dir].
     */
    get_auto_dir(): boolean
    /**
     * Gets the Y position of baseline of the first line in `layout`.
     */
    get_baseline(): number
    /**
     * Given an index within a layout, determines the positions that of the
     * strong and weak cursors if the insertion point is at that index.
     * 
     * This is a variant of [method`Pango`.Layout.get_cursor_pos] that applies
     * font metric information about caret slope and offset to the positions
     * it returns.
     * 
     * <picture>
     *   <source srcset="caret-metrics-dark.png" media="(prefers-color-scheme: dark)">
     *   <img alt="Caret metrics" src="caret-metrics-light.png">
     * </picture>
     */
    get_caret_pos(index_: number): [ /* strong_pos */ Rectangle | null, /* weak_pos */ Rectangle | null ]
    /**
     * Returns the number of Unicode characters in the
     * the text of `layout`.
     */
    get_character_count(): number
    /**
     * Retrieves the `PangoContext` used for this layout.
     */
    get_context(): Context
    /**
     * Given an index within a layout, determines the positions that of the
     * strong and weak cursors if the insertion point is at that index.
     * 
     * The position of each cursor is stored as a zero-width rectangle
     * with the height of the run extents.
     * 
     * <picture>
     *   <source srcset="cursor-positions-dark.png" media="(prefers-color-scheme: dark)">
     *   <img alt="Cursor positions" src="cursor-positions-light.png">
     * </picture>
     * 
     * The strong cursor location is the location where characters of the
     * directionality equal to the base direction of the layout are inserted.
     * The weak cursor location is the location where characters of the
     * directionality opposite to the base direction of the layout are inserted.
     * 
     * The following example shows text with both a strong and a weak cursor.
     * 
     * <picture>
     *   <source srcset="split-cursor-dark.png" media="(prefers-color-scheme: dark)">
     *   <img alt="Strong and weak cursors" src="split-cursor-light.png">
     * </picture>
     * 
     * The strong cursor has a little arrow pointing to the right, the weak
     * cursor to the left. Typing a 'c' in this situation will insert the
     * character after the 'b', and typing another Hebrew character, like 'ג',
     * will insert it at the end.
     */
    get_cursor_pos(index_: number): [ /* strong_pos */ Rectangle | null, /* weak_pos */ Rectangle | null ]
    /**
     * Gets the text direction at the given character position in `layout`.
     */
    get_direction(index: number): Direction
    /**
     * Gets the type of ellipsization being performed for `layout`.
     * 
     * See [method`Pango`.Layout.set_ellipsize].
     * 
     * Use [method`Pango`.Layout.is_ellipsized] to query whether any
     * paragraphs were actually ellipsized.
     */
    get_ellipsize(): EllipsizeMode
    /**
     * Computes the logical and ink extents of `layout`.
     * 
     * Logical extents are usually what you want for positioning things. Note
     * that both extents may have non-zero x and y. You may want to use those
     * to offset where you render the layout. Not doing that is a very typical
     * bug that shows up as right-to-left layouts not being correctly positioned
     * in a layout with a set width.
     * 
     * The extents are given in layout coordinates and in Pango units; layout
     * coordinates begin at the top left corner of the layout.
     */
    get_extents(): [ /* ink_rect */ Rectangle | null, /* logical_rect */ Rectangle | null ]
    /**
     * Gets the font description for the layout, if any.
     */
    get_font_description(): FontDescription | null
    /**
     * Gets the height of layout used for ellipsization.
     * 
     * See [method`Pango`.Layout.set_height] for details.
     */
    get_height(): number
    /**
     * Gets the paragraph indent width in Pango units.
     * 
     * A negative value indicates a hanging indentation.
     */
    get_indent(): number
    /**
     * Returns an iterator to iterate over the visual extents of the layout.
     */
    get_iter(): LayoutIter
    /**
     * Gets whether each complete line should be stretched to fill the entire
     * width of the layout.
     */
    get_justify(): boolean
    /**
     * Gets whether the last line should be stretched
     * to fill the entire width of the layout.
     */
    get_justify_last_line(): boolean
    /**
     * Retrieves a particular line from a `PangoLayout`.
     * 
     * Use the faster [method`Pango`.Layout.get_line_readonly] if you do not
     * plan to modify the contents of the line (glyphs, glyph widths, etc.).
     */
    get_line(line: number): LayoutLine | null
    /**
     * Retrieves the count of lines for the `layout`.
     */
    get_line_count(): number
    /**
     * Retrieves a particular line from a `PangoLayout`.
     * 
     * This is a faster alternative to [method`Pango`.Layout.get_line],
     * but the user is not expected to modify the contents of the line
     * (glyphs, glyph widths, etc.).
     */
    get_line_readonly(line: number): LayoutLine | null
    /**
     * Gets the line spacing factor of `layout`.
     * 
     * See [method`Pango`.Layout.set_line_spacing].
     */
    get_line_spacing(): number
    /**
     * Returns the lines of the `layout` as a list.
     * 
     * Use the faster [method`Pango`.Layout.get_lines_readonly] if you do not
     * plan to modify the contents of the lines (glyphs, glyph widths, etc.).
     */
    get_lines(): LayoutLine[]
    /**
     * Returns the lines of the `layout` as a list.
     * 
     * This is a faster alternative to [method`Pango`.Layout.get_lines],
     * but the user is not expected to modify the contents of the lines
     * (glyphs, glyph widths, etc.).
     */
    get_lines_readonly(): LayoutLine[]
    /**
     * Retrieves an array of logical attributes for each character in
     * the `layout`.
     */
    get_log_attrs(): /* attrs */ LogAttr[]
    /**
     * Retrieves an array of logical attributes for each character in
     * the `layout`.
     * 
     * This is a faster alternative to [method`Pango`.Layout.get_log_attrs].
     * The returned array is part of `layout` and must not be modified.
     * Modifying the layout will invalidate the returned array.
     * 
     * The number of attributes returned in `n_attrs` will be one more
     * than the total number of characters in the layout, since there
     * need to be attributes corresponding to both the position before
     * the first character and the position after the last character.
     */
    get_log_attrs_readonly(): LogAttr[]
    /**
     * Computes the logical and ink extents of `layout` in device units.
     * 
     * This function just calls [method`Pango`.Layout.get_extents] followed by
     * two [func`extents_to_pixels]` calls, rounding `ink_rect` and `logical_rect`
     * such that the rounded rectangles fully contain the unrounded one (that is,
     * passes them as first argument to [func`Pango`.extents_to_pixels]).
     */
    get_pixel_extents(): [ /* ink_rect */ Rectangle | null, /* logical_rect */ Rectangle | null ]
    /**
     * Determines the logical width and height of a `PangoLayout` in device
     * units.
     * 
     * [method`Pango`.Layout.get_size] returns the width and height
     * scaled by %PANGO_SCALE. This is simply a convenience function
     * around [method`Pango`.Layout.get_pixel_extents].
     */
    get_pixel_size(): [ /* width */ number | null, /* height */ number | null ]
    /**
     * Returns the current serial number of `layout`.
     * 
     * The serial number is initialized to an small number larger than zero
     * when a new layout is created and is increased whenever the layout is
     * changed using any of the setter functions, or the `PangoContext` it
     * uses has changed. The serial may wrap, but will never have the value 0.
     * Since it can wrap, never compare it with "less than", always use "not equals".
     * 
     * This can be used to automatically detect changes to a `PangoLayout`,
     * and is useful for example to decide whether a layout needs redrawing.
     * To force the serial to be increased, use
     * [method`Pango`.Layout.context_changed].
     */
    get_serial(): number
    /**
     * Obtains whether `layout` is in single paragraph mode.
     * 
     * See [method`Pango`.Layout.set_single_paragraph_mode].
     */
    get_single_paragraph_mode(): boolean
    /**
     * Determines the logical width and height of a `PangoLayout` in Pango
     * units.
     * 
     * This is simply a convenience function around [method`Pango`.Layout.get_extents].
     */
    get_size(): [ /* width */ number | null, /* height */ number | null ]
    /**
     * Gets the amount of spacing between the lines of the layout.
     */
    get_spacing(): number
    /**
     * Gets the current `PangoTabArray` used by this layout.
     * 
     * If no `PangoTabArray` has been set, then the default tabs are
     * in use and %NULL is returned. Default tabs are every 8 spaces.
     * 
     * The return value should be freed with [method`Pango`.TabArray.free].
     */
    get_tabs(): TabArray | null
    /**
     * Gets the text in the layout.
     * 
     * The returned text should not be freed or modified.
     */
    get_text(): string
    /**
     * Counts the number of unknown glyphs in `layout`.
     * 
     * This function can be used to determine if there are any fonts
     * available to render all characters in a certain string, or when
     * used in combination with %PANGO_ATTR_FALLBACK, to check if a
     * certain font supports all the characters in the string.
     */
    get_unknown_glyphs_count(): number
    /**
     * Gets the width to which the lines of the `PangoLayout` should wrap.
     */
    get_width(): number
    /**
     * Gets the wrap mode for the layout.
     * 
     * Use [method`Pango`.Layout.is_wrapped] to query whether
     * any paragraphs were actually wrapped.
     */
    get_wrap(): WrapMode
    /**
     * Converts from byte `index_` within the `layout` to line and X position.
     * 
     * The X position is measured from the left edge of the line.
     */
    index_to_line_x(index_: number, trailing: boolean): [ /* line */ number | null, /* x_pos */ number | null ]
    /**
     * Converts from an index within a `PangoLayout` to the onscreen position
     * corresponding to the grapheme at that index.
     * 
     * The return value is represented as rectangle. Note that `pos->x` is
     * always the leading edge of the grapheme and `pos->x + pos->width` the
     * trailing edge of the grapheme. If the directionality of the grapheme
     * is right-to-left, then `pos->width` will be negative.
     */
    index_to_pos(index_: number): /* pos */ Rectangle
    /**
     * Queries whether the layout had to ellipsize any paragraphs.
     * 
     * This returns %TRUE if the ellipsization mode for `layout`
     * is not %PANGO_ELLIPSIZE_NONE, a positive width is set on `layout,`
     * and there are paragraphs exceeding that width that have to be
     * ellipsized.
     */
    is_ellipsized(): boolean
    /**
     * Queries whether the layout had to wrap any paragraphs.
     * 
     * This returns %TRUE if a positive width is set on `layout,`
     * ellipsization mode of `layout` is set to %PANGO_ELLIPSIZE_NONE,
     * and there are paragraphs exceeding the layout width that have
     * to be wrapped.
     */
    is_wrapped(): boolean
    /**
     * Computes a new cursor position from an old position and a direction.
     * 
     * If `direction` is positive, then the new position will cause the strong
     * or weak cursor to be displayed one position to right of where it was
     * with the old cursor position. If `direction` is negative, it will be
     * moved to the left.
     * 
     * In the presence of bidirectional text, the correspondence between
     * logical and visual order will depend on the direction of the current
     * run, and there may be jumps when the cursor is moved off of the end
     * of a run.
     * 
     * Motion here is in cursor positions, not in characters, so a single
     * call to this function may move the cursor over multiple characters
     * when multiple characters combine to form a single grapheme.
     */
    move_cursor_visually(strong: boolean, old_index: number, old_trailing: number, direction: number): [ /* new_index */ number, /* new_trailing */ number ]
    /**
     * Serializes the `layout` for later deserialization via [func`Pango`.Layout.deserialize].
     * 
     * There are no guarantees about the format of the output across different
     * versions of Pango and [func`Pango`.Layout.deserialize] will reject data
     * that it cannot parse.
     * 
     * The intended use of this function is testing, benchmarking and debugging.
     * The format is not meant as a permanent storage format.
     */
    serialize(flags: LayoutSerializeFlags): GLib.Bytes
    /**
     * Sets the alignment for the layout: how partial lines are
     * positioned within the horizontal space available.
     * 
     * The default alignment is %PANGO_ALIGN_LEFT.
     */
    set_alignment(alignment: Alignment): void
    /**
     * Sets the text attributes for a layout object.
     * 
     * References `attrs,` so the caller can unref its reference.
     */
    set_attributes(attrs?: AttrList | null): void
    /**
     * Sets whether to calculate the base direction
     * for the layout according to its contents.
     * 
     * When this flag is on (the default), then paragraphs in `layout` that
     * begin with strong right-to-left characters (Arabic and Hebrew principally),
     * will have right-to-left layout, paragraphs with letters from other scripts
     * will have left-to-right layout. Paragraphs with only neutral characters
     * get their direction from the surrounding paragraphs.
     * 
     * When %FALSE, the choice between left-to-right and right-to-left
     * layout is done according to the base direction of the layout's
     * `PangoContext`. (See [method`Pango`.Context.set_base_dir]).
     * 
     * When the auto-computed direction of a paragraph differs from the
     * base direction of the context, the interpretation of
     * %PANGO_ALIGN_LEFT and %PANGO_ALIGN_RIGHT are swapped.
     */
    set_auto_dir(auto_dir: boolean): void
    /**
     * Sets the type of ellipsization being performed for `layout`.
     * 
     * Depending on the ellipsization mode `ellipsize` text is
     * removed from the start, middle, or end of text so they
     * fit within the width and height of layout set with
     * [method`Pango`.Layout.set_width] and [method`Pango`.Layout.set_height].
     * 
     * If the layout contains characters such as newlines that
     * force it to be layed out in multiple paragraphs, then whether
     * each paragraph is ellipsized separately or the entire layout
     * is ellipsized as a whole depends on the set height of the layout.
     * 
     * The default value is %PANGO_ELLIPSIZE_NONE.
     * 
     * See [method`Pango`.Layout.set_height] for details.
     */
    set_ellipsize(ellipsize: EllipsizeMode): void
    /**
     * Sets the default font description for the layout.
     * 
     * If no font description is set on the layout, the
     * font description from the layout's context is used.
     */
    set_font_description(desc?: FontDescription | null): void
    /**
     * Sets the height to which the `PangoLayout` should be ellipsized at.
     * 
     * There are two different behaviors, based on whether `height` is positive
     * or negative.
     * 
     * If `height` is positive, it will be the maximum height of the layout. Only
     * lines would be shown that would fit, and if there is any text omitted,
     * an ellipsis added. At least one line is included in each paragraph regardless
     * of how small the height value is. A value of zero will render exactly one
     * line for the entire layout.
     * 
     * If `height` is negative, it will be the (negative of) maximum number of lines
     * per paragraph. That is, the total number of lines shown may well be more than
     * this value if the layout contains multiple paragraphs of text.
     * The default value of -1 means that the first line of each paragraph is ellipsized.
     * This behavior may be changed in the future to act per layout instead of per
     * paragraph. File a bug against pango at
     * [https://gitlab.gnome.org/gnome/pango](https://gitlab.gnome.org/gnome/pango)
     * if your code relies on this behavior.
     * 
     * Height setting only has effect if a positive width is set on
     * `layout` and ellipsization mode of `layout` is not %PANGO_ELLIPSIZE_NONE.
     * The behavior is undefined if a height other than -1 is set and
     * ellipsization mode is set to %PANGO_ELLIPSIZE_NONE, and may change in the
     * future.
     */
    set_height(height: number): void
    /**
     * Sets the width in Pango units to indent each paragraph.
     * 
     * A negative value of `indent` will produce a hanging indentation.
     * That is, the first line will have the full width, and subsequent
     * lines will be indented by the absolute value of `indent`.
     * 
     * The indent setting is ignored if layout alignment is set to
     * %PANGO_ALIGN_CENTER.
     * 
     * The default value is 0.
     */
    set_indent(indent: number): void
    /**
     * Sets whether each complete line should be stretched to fill the
     * entire width of the layout.
     * 
     * Stretching is typically done by adding whitespace, but for some scripts
     * (such as Arabic), the justification may be done in more complex ways,
     * like extending the characters.
     * 
     * Note that this setting is not implemented and so is ignored in
     * Pango older than 1.18.
     * 
     * Note that tabs and justification conflict with each other:
     * Justification will move content away from its tab-aligned
     * positions.
     * 
     * The default value is %FALSE.
     * 
     * Also see [method`Pango`.Layout.set_justify_last_line].
     */
    set_justify(justify: boolean): void
    /**
     * Sets whether the last line should be stretched to fill the
     * entire width of the layout.
     * 
     * This only has an effect if [method`Pango`.Layout.set_justify] has
     * been called as well.
     * 
     * The default value is %FALSE.
     */
    set_justify_last_line(justify: boolean): void
    /**
     * Sets a factor for line spacing.
     * 
     * Typical values are: 0, 1, 1.5, 2. The default values is 0.
     * 
     * If `factor` is non-zero, lines are placed so that
     * 
     *     baseline2 = baseline1 + factor * height2
     * 
     * where height2 is the line height of the second line
     * (as determined by the font(s)). In this case, the spacing
     * set with [method`Pango`.Layout.set_spacing] is ignored.
     * 
     * If `factor` is zero (the default), spacing is applied as before.
     * 
     * Note: for semantics that are closer to the CSS line-height
     * property, see [func`Pango`.attr_line_height_new].
     */
    set_line_spacing(factor: number): void
    /**
     * Sets the layout text and attribute list from marked-up text.
     * 
     * See [Pango Markup](pango_markup.html)).
     * 
     * Replaces the current text and attribute list.
     * 
     * This is the same as [method`Pango`.Layout.set_markup_with_accel],
     * but the markup text isn't scanned for accelerators.
     */
    set_markup(markup: string, length: number): void
    /**
     * Sets the layout text and attribute list from marked-up text.
     * 
     * See [Pango Markup](pango_markup.html)).
     * 
     * Replaces the current text and attribute list.
     * 
     * If `accel_marker` is nonzero, the given character will mark the
     * character following it as an accelerator. For example, `accel_marker`
     * might be an ampersand or underscore. All characters marked
     * as an accelerator will receive a %PANGO_UNDERLINE_LOW attribute,
     * and the first character so marked will be returned in `accel_char`.
     * Two `accel_marker` characters following each other produce a single
     * literal `accel_marker` character.
     */
    set_markup_with_accel(markup: string, length: number, accel_marker: number): /* accel_char */ number | null
    /**
     * Sets the single paragraph mode of `layout`.
     * 
     * If `setting` is %TRUE, do not treat newlines and similar characters
     * as paragraph separators; instead, keep all text in a single paragraph,
     * and display a glyph for paragraph separator characters. Used when
     * you want to allow editing of newlines on a single text line.
     * 
     * The default value is %FALSE.
     */
    set_single_paragraph_mode(setting: boolean): void
    /**
     * Sets the amount of spacing in Pango units between
     * the lines of the layout.
     * 
     * When placing lines with spacing, Pango arranges things so that
     * 
     *     line2.top = line1.bottom + spacing
     * 
     * The default value is 0.
     * 
     * Note: Since 1.44, Pango is using the line height (as determined
     * by the font) for placing lines when the line spacing factor is set
     * to a non-zero value with [method`Pango`.Layout.set_line_spacing].
     * In that case, the `spacing` set with this function is ignored.
     * 
     * Note: for semantics that are closer to the CSS line-height
     * property, see [func`Pango`.attr_line_height_new].
     */
    set_spacing(spacing: number): void
    /**
     * Sets the tabs to use for `layout,` overriding the default tabs.
     * 
     * `PangoLayout` will place content at the next tab position
     * whenever it meets a Tab character (U+0009).
     * 
     * By default, tabs are every 8 spaces. If `tabs` is %NULL, the
     * default tabs are reinstated. `tabs` is copied into the layout;
     * you must free your copy of `tabs` yourself.
     * 
     * Note that tabs and justification conflict with each other:
     * Justification will move content away from its tab-aligned
     * positions. The same is true for alignments other than
     * %PANGO_ALIGN_LEFT.
     */
    set_tabs(tabs?: TabArray | null): void
    /**
     * Sets the text of the layout.
     * 
     * This function validates `text` and renders invalid UTF-8
     * with a placeholder glyph.
     * 
     * Note that if you have used [method`Pango`.Layout.set_markup] or
     * [method`Pango`.Layout.set_markup_with_accel] on `layout` before, you
     * may want to call [method`Pango`.Layout.set_attributes] to clear the
     * attributes set on the layout from the markup as this function does
     * not clear attributes.
     */
    set_text(text: string, length: number): void
    /**
     * Sets the width to which the lines of the `PangoLayout` should wrap or
     * ellipsized.
     * 
     * The default value is -1: no width set.
     */
    set_width(width: number): void
    /**
     * Sets the wrap mode.
     * 
     * The wrap mode only has effect if a width is set on the layout
     * with [method`Pango`.Layout.set_width]. To turn off wrapping,
     * set the width to -1.
     * 
     * The default value is %PANGO_WRAP_WORD.
     */
    set_wrap(wrap: WrapMode): void
    /**
     * A convenience method to serialize a layout to a file.
     * 
     * It is equivalent to calling [method`Pango`.Layout.serialize]
     * followed by [func`GLib`.file_set_contents].
     * 
     * See those two functions for details on the arguments.
     * 
     * It is mostly intended for use inside a debugger to quickly dump
     * a layout to a file for later inspection.
     */
    write_to_file(flags: LayoutSerializeFlags, filename: string): boolean
    /**
     * Converts from X and Y position within a layout to the byte index to the
     * character at that logical position.
     * 
     * If the Y position is not inside the layout, the closest position is
     * chosen (the position will be clamped inside the layout). If the X position
     * is not within the layout, then the start or the end of the line is
     * chosen as described for [method`Pango`.LayoutLine.x_to_index]. If either
     * the X or Y positions were not inside the layout, then the function returns
     * %FALSE; on an exact hit, it returns %TRUE.
     */
    xy_to_index(x: number, y: number): [ /* returnType */ boolean, /* index_ */ number, /* trailing */ number ]
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     */
    watch_closure(closure: Function): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     */
    connect(sigName: "notify", callback: (($obj: Layout, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Layout, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Layout_ConstructProps)
    _init (config?: Layout_ConstructProps): void
    /* Static methods and pseudo-constructors */
    static new(context: Context): Layout
    /**
     * Loads data previously created via [method`Pango`.Layout.serialize].
     * 
     * For a discussion of the supported format, see that function.
     * 
     * Note: to verify that the returned layout is identical to
     * the one that was serialized, you can compare `bytes` to the
     * result of serializing the layout again.
     */
    static deserialize(context: Context, bytes: GLib.Bytes, flags: LayoutDeserializeFlags): Layout | null
    static $gtype: GObject.Type
}
interface Renderer_ConstructProps extends GObject.Object_ConstructProps {
}
class Renderer {
    /* Fields of GObject-2.0.GObject.Object */
    readonly g_type_instance: GObject.TypeInstance
    /* Methods of Pango-1.0.Pango.Renderer */
    /**
     * Does initial setup before rendering operations on `renderer`.
     * 
     * [method`Pango`.Renderer.deactivate] should be called when done drawing.
     * Calls such as [method`Pango`.Renderer.draw_layout] automatically
     * activate the layout before drawing on it.
     * 
     * Calls to [method`Pango`.Renderer.activate] and
     * [method`Pango`.Renderer.deactivate] can be nested and the
     * renderer will only be initialized and deinitialized once.
     */
    activate(): void
    /**
     * Cleans up after rendering operations on `renderer`.
     * 
     * See docs for [method`Pango`.Renderer.activate].
     */
    deactivate(): void
    /**
     * Draw a squiggly line that approximately covers the given rectangle
     * in the style of an underline used to indicate a spelling error.
     * 
     * The width of the underline is rounded to an integer number
     * of up/down segments and the resulting rectangle is centered
     * in the original rectangle.
     * 
     * This should be called while `renderer` is already active.
     * Use [method`Pango`.Renderer.activate] to activate a renderer.
     */
    draw_error_underline(x: number, y: number, width: number, height: number): void
    /**
     * Draws a single glyph with coordinates in device space.
     */
    draw_glyph(font: Font, glyph: Glyph, x: number, y: number): void
    /**
     * Draws the glyphs in `glyph_item` with the specified `PangoRenderer`,
     * embedding the text associated with the glyphs in the output if the
     * output format supports it.
     * 
     * This is useful for rendering text in PDF.
     * 
     * Note that this method does not handle attributes in `glyph_item`.
     * If you want colors, shapes and lines handled automatically according
     * to those attributes, you need to use pango_renderer_draw_layout_line()
     * or pango_renderer_draw_layout().
     * 
     * Note that `text` is the start of the text for layout, which is then
     * indexed by `glyph_item->item->offset`.
     * 
     * If `text` is %NULL, this simply calls [method`Pango`.Renderer.draw_glyphs].
     * 
     * The default implementation of this method simply falls back to
     * [method`Pango`.Renderer.draw_glyphs].
     */
    draw_glyph_item(text: string | null, glyph_item: GlyphItem, x: number, y: number): void
    /**
     * Draws the glyphs in `glyphs` with the specified `PangoRenderer`.
     */
    draw_glyphs(font: Font, glyphs: GlyphString, x: number, y: number): void
    /**
     * Draws `layout` with the specified `PangoRenderer`.
     * 
     * This is equivalent to drawing the lines of the layout, at their
     * respective positions relative to `x,` `y`.
     */
    draw_layout(layout: Layout, x: number, y: number): void
    /**
     * Draws `line` with the specified `PangoRenderer`.
     * 
     * This draws the glyph items that make up the line, as well as
     * shapes, backgrounds and lines that are specified by the attributes
     * of those items.
     */
    draw_layout_line(line: LayoutLine, x: number, y: number): void
    /**
     * Draws an axis-aligned rectangle in user space coordinates with the
     * specified `PangoRenderer`.
     * 
     * This should be called while `renderer` is already active.
     * Use [method`Pango`.Renderer.activate] to activate a renderer.
     */
    draw_rectangle(part: RenderPart, x: number, y: number, width: number, height: number): void
    /**
     * Draws a trapezoid with the parallel sides aligned with the X axis
     * using the given `PangoRenderer`; coordinates are in device space.
     */
    draw_trapezoid(part: RenderPart, y1_: number, x11: number, x21: number, y2: number, x12: number, x22: number): void
    /**
     * Gets the current alpha for the specified part.
     */
    get_alpha(part: RenderPart): number
    /**
     * Gets the current rendering color for the specified part.
     */
    get_color(part: RenderPart): Color | null
    /**
     * Gets the layout currently being rendered using `renderer`.
     * 
     * Calling this function only makes sense from inside a subclass's
     * methods, like in its draw_shape vfunc, for example.
     * 
     * The returned layout should not be modified while still being
     * rendered.
     */
    get_layout(): Layout | null
    /**
     * Gets the layout line currently being rendered using `renderer`.
     * 
     * Calling this function only makes sense from inside a subclass's
     * methods, like in its draw_shape vfunc, for example.
     * 
     * The returned layout line should not be modified while still being
     * rendered.
     */
    get_layout_line(): LayoutLine | null
    /**
     * Gets the transformation matrix that will be applied when
     * rendering.
     * 
     * See [method`Pango`.Renderer.set_matrix].
     */
    get_matrix(): Matrix | null
    /**
     * Informs Pango that the way that the rendering is done
     * for `part` has changed.
     * 
     * This should be called if the rendering changes in a way that would
     * prevent multiple pieces being joined together into one drawing call.
     * For instance, if a subclass of `PangoRenderer` was to add a stipple
     * option for drawing underlines, it needs to call
     * 
     * ```
     * pango_renderer_part_changed (render, PANGO_RENDER_PART_UNDERLINE);
     * ```
     * 
     * When the stipple changes or underlines with different stipples
     * might be joined together. Pango automatically calls this for
     * changes to colors. (See [method`Pango`.Renderer.set_color])
     */
    part_changed(part: RenderPart): void
    /**
     * Sets the alpha for part of the rendering.
     * 
     * Note that the alpha may only be used if a color is
     * specified for `part` as well.
     */
    set_alpha(part: RenderPart, alpha: number): void
    /**
     * Sets the color for part of the rendering.
     * 
     * Also see [method`Pango`.Renderer.set_alpha].
     */
    set_color(part: RenderPart, color?: Color | null): void
    /**
     * Sets the transformation matrix that will be applied when rendering.
     */
    set_matrix(matrix?: Matrix | null): void
    /* Methods of GObject-2.0.GObject.Object */
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target`.
     * 
     * Whenever the `source_property` is changed the `target_property` is
     * updated using the same value. For instance:
     * 
     * 
     * ```c
     *   g_object_bind_property (action, "active", widget, "sensitive", 0);
     * ```
     * 
     * 
     * Will result in the "sensitive" property of the widget #GObject instance to be
     * updated with the same value of the "active" property of the action #GObject
     * instance.
     * 
     * If `flags` contains %G_BINDING_BIDIRECTIONAL then the binding will be mutual:
     * if `target_property` on `target` changes then the `source_property` on `source`
     * will be updated as well.
     * 
     * The binding will automatically be removed when either the `source` or the
     * `target` instances are finalized. To remove the binding without affecting the
     * `source` and the `target` you can just call g_object_unref() on the returned
     * #GBinding instance.
     * 
     * Removing the binding by calling g_object_unref() on it must only be done if
     * the binding, `source` and `target` are only used from a single thread and it
     * is clear that both `source` and `target` outlive the binding. Especially it
     * is not safe to rely on this if the binding, `source` or `target` can be
     * finalized from different threads. Keep another reference to the binding and
     * use g_binding_unbind() instead to be on the safe side.
     * 
     * A #GObject can have multiple bindings.
     */
    bind_property(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags): GObject.Binding
    /**
     * Creates a binding between `source_property` on `source` and `target_property`
     * on `target,` allowing you to set the transformation functions to be used by
     * the binding.
     * 
     * This function is the language bindings friendly version of
     * g_object_bind_property_full(), using #GClosures instead of
     * function pointers.
     */
    bind_property_full(source_property: string, target: GObject.Object, target_property: string, flags: GObject.BindingFlags, transform_to: Function, transform_from: Function): GObject.Binding
    /**
     * This function is intended for #GObject implementations to re-enforce
     * a [floating][floating-ref] object reference. Doing this is seldom
     * required: all #GInitiallyUnowneds are created with a floating reference
     * which usually just needs to be sunken by calling g_object_ref_sink().
     */
    force_floating(): void
    /**
     * Increases the freeze count on `object`. If the freeze count is
     * non-zero, the emission of "notify" signals on `object` is
     * stopped. The signals are queued until the freeze count is decreased
     * to zero. Duplicate notifications are squashed so that at most one
     * #GObject::notify signal is emitted for each property modified while the
     * object is frozen.
     * 
     * This is necessary for accessors that modify multiple properties to prevent
     * premature notification while the object is still being modified.
     */
    freeze_notify(): void
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     */
    get_data(key: string): object | null
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     */
    get_property(property_name: string, value: any): void
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata().
     */
    get_qdata(quark: GLib.Quark): object | null
    /**
     * Gets `n_properties` properties for an `object`.
     * Obtained properties will be set to `values`. All properties must be valid.
     * Warnings will be emitted and undefined behaviour may result if invalid
     * properties are passed in.
     */
    getv(names: string[], values: any[]): void
    /**
     * Checks whether `object` has a [floating][floating-ref] reference.
     */
    is_floating(): boolean
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     */
    notify(property_name: string): void
    /**
     * Emits a "notify" signal for the property specified by `pspec` on `object`.
     * 
     * This function omits the property name lookup, hence it is faster than
     * g_object_notify().
     * 
     * One way to avoid using g_object_notify() from within the
     * class that registered the properties, and using g_object_notify_by_pspec()
     * instead, is to store the GParamSpec used with
     * g_object_class_install_property() inside a static array, e.g.:
     * 
     * 
     * ```c
     *   enum
     *   {
     *     PROP_0,
     *     PROP_FOO,
     *     PROP_LAST
     *   };
     * 
     *   static GParamSpec *properties[PROP_LAST];
     * 
     *   static void
     *   my_object_class_init (MyObjectClass *klass)
     *   {
     *     properties[PROP_FOO] = g_param_spec_int ("foo", "Foo", "The foo",
     *                                              0, 100,
     *                                              50,
     *                                              G_PARAM_READWRITE);
     *     g_object_class_install_property (gobject_class,
     *                                      PROP_FOO,
     *                                      properties[PROP_FOO]);
     *   }
     * ```
     * 
     * 
     * and then notify a change on the "foo" property with:
     * 
     * 
     * ```c
     *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
     * ```
     * 
     */
    notify_by_pspec(pspec: GObject.ParamSpec): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increase the reference count of `object,` and possibly remove the
     * [floating][floating-ref] reference, if `object` has a floating reference.
     * 
     * In other words, if the object is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference by clearing the floating flag while leaving the reference
     * count unchanged.  If the object is not floating, then this call
     * adds a new normal reference increasing the reference count by one.
     * 
     * Since GLib 2.56, the type of `object` will be propagated to the return type
     * under the same conditions as for g_object_ref().
     */
    ref_sink(): GObject.Object
    /**
     * Releases all references to other objects. This can be used to break
     * reference cycles.
     * 
     * This function should only be called from object system implementations.
     */
    run_dispose(): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     */
    set_data(key: string, data?: object | null): void
    /**
     * Sets a property on an object.
     */
    set_property(property_name: string, value: any): void
    /**
     * Remove a specified datum from the object's data associations,
     * without invoking the association's destroy handler.
     */
    steal_data(key: string): object | null
    /**
     * This function gets back user data pointers stored via
     * g_object_set_qdata() and removes the `data` from object
     * without invoking its destroy() function (if any was
     * set).
     * Usually, calling this function is only required to update
     * user data pointers with a destroy notifier, for example:
     * 
     * ```c
     * void
     * object_add_to_user_list (GObject     *object,
     *                          const gchar *new_string)
     * {
     *   // the quark, naming the object data
     *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
     *   // retrieve the old string list
     *   GList *list = g_object_steal_qdata (object, quark_string_list);
     * 
     *   // prepend new string
     *   list = g_list_prepend (list, g_strdup (new_string));
     *   // this changed 'list', so we need to set it again
     *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
     * }
     * static void
     * free_string_list (gpointer data)
     * {
     *   GList *node, *list = data;
     * 
     *   for (node = list; node; node = node->next)
     *     g_free (node->data);
     *   g_list_free (list);
     * }
     * ```
     * 
     * Using g_object_get_qdata() in the above example, instead of
     * g_object_steal_qdata() would have left the destroy function set,
     * and thus the partial string list would have been freed upon
     * g_object_set_qdata_full().
     */
    steal_qdata(quark: GLib.Quark): object | null
    /**
     * Reverts the effect of a previous call to
     * g_object_freeze_notify(). The freeze count is decreased on `object`
     * and when it reaches zero, queued "notify" signals are emitted.
     * 
     * Duplicate notifications for each property are squashed so that at most one
     * #GObject::notify signal is emitted for each property, in the reverse order
     * in which they have been queued.
     * 
     * It is an error to call this function when the freeze count is zero.
     */
    thaw_notify(): void
    /**
     * Decreases the reference count of `object`. When its reference count
     * drops to 0, the object is finalized (i.e. its memory is freed).
     * 
     * If the pointer to the #GObject may be reused in future (for example, if it is
     * an instance variable of another object), it is recommended to clear the
     * pointer to %NULL rather than retain a dangling pointer to a potentially
     * invalid #GObject instance. Use g_clear_object() for this.
     */
    unref(): void
    /**
     * This function essentially limits the life time of the `closure` to
     * the life time of the object. That is, when the object is finalized,
     * the `closure` is invalidated by calling g_closure_invalidate() on
     * it, in order to prevent invocations of the closure with a finalized
     * (nonexisting) object. Also, g_object_ref() and g_object_unref() are
     * added as marshal guards to the `closure,` to ensure that an extra
     * reference count is held on `object` during invocation of the
     * `closure`.  Usually, this function will be called on closures that
     * use this `object` as closure data.
     */
    watch_closure(closure: Function): void
    /* Virtual methods of Pango-1.0.Pango.Renderer */
    vfunc_begin(): void
    /**
     * Draw a squiggly line that approximately covers the given rectangle
     * in the style of an underline used to indicate a spelling error.
     * 
     * The width of the underline is rounded to an integer number
     * of up/down segments and the resulting rectangle is centered
     * in the original rectangle.
     * 
     * This should be called while `renderer` is already active.
     * Use [method`Pango`.Renderer.activate] to activate a renderer.
     */
    vfunc_draw_error_underline(x: number, y: number, width: number, height: number): void
    /**
     * Draws a single glyph with coordinates in device space.
     */
    vfunc_draw_glyph(font: Font, glyph: Glyph, x: number, y: number): void
    /**
     * Draws the glyphs in `glyph_item` with the specified `PangoRenderer`,
     * embedding the text associated with the glyphs in the output if the
     * output format supports it.
     * 
     * This is useful for rendering text in PDF.
     * 
     * Note that this method does not handle attributes in `glyph_item`.
     * If you want colors, shapes and lines handled automatically according
     * to those attributes, you need to use pango_renderer_draw_layout_line()
     * or pango_renderer_draw_layout().
     * 
     * Note that `text` is the start of the text for layout, which is then
     * indexed by `glyph_item->item->offset`.
     * 
     * If `text` is %NULL, this simply calls [method`Pango`.Renderer.draw_glyphs].
     * 
     * The default implementation of this method simply falls back to
     * [method`Pango`.Renderer.draw_glyphs].
     */
    vfunc_draw_glyph_item(text: string | null, glyph_item: GlyphItem, x: number, y: number): void
    /**
     * Draws the glyphs in `glyphs` with the specified `PangoRenderer`.
     */
    vfunc_draw_glyphs(font: Font, glyphs: GlyphString, x: number, y: number): void
    /**
     * Draws an axis-aligned rectangle in user space coordinates with the
     * specified `PangoRenderer`.
     * 
     * This should be called while `renderer` is already active.
     * Use [method`Pango`.Renderer.activate] to activate a renderer.
     */
    vfunc_draw_rectangle(part: RenderPart, x: number, y: number, width: number, height: number): void
    vfunc_draw_shape(attr: AttrShape, x: number, y: number): void
    /**
     * Draws a trapezoid with the parallel sides aligned with the X axis
     * using the given `PangoRenderer`; coordinates are in device space.
     */
    vfunc_draw_trapezoid(part: RenderPart, y1_: number, x11: number, x21: number, y2: number, x12: number, x22: number): void
    vfunc_end(): void
    /**
     * Informs Pango that the way that the rendering is done
     * for `part` has changed.
     * 
     * This should be called if the rendering changes in a way that would
     * prevent multiple pieces being joined together into one drawing call.
     * For instance, if a subclass of `PangoRenderer` was to add a stipple
     * option for drawing underlines, it needs to call
     * 
     * ```
     * pango_renderer_part_changed (render, PANGO_RENDER_PART_UNDERLINE);
     * ```
     * 
     * When the stipple changes or underlines with different stipples
     * might be joined together. Pango automatically calls this for
     * changes to colors. (See [method`Pango`.Renderer.set_color])
     */
    vfunc_part_changed(part: RenderPart): void
    vfunc_prepare_run(run: LayoutRun): void
    /* Virtual methods of GObject-2.0.GObject.Object */
    vfunc_constructed(): void
    vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void
    vfunc_dispose(): void
    vfunc_finalize(): void
    vfunc_get_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /**
     * Emits a "notify" signal for the property `property_name` on `object`.
     * 
     * When possible, eg. when signaling a property change from within the class
     * that registered the property, you should use g_object_notify_by_pspec()
     * instead.
     * 
     * Note that emission of the notify signal may be blocked with
     * g_object_freeze_notify(). In this case, the signal emissions are queued
     * and will be emitted (in reverse order) when g_object_thaw_notify() is
     * called.
     */
    vfunc_notify(pspec: GObject.ParamSpec): void
    vfunc_set_property(property_id: number, value: any, pspec: GObject.ParamSpec): void
    /* Signals of GObject-2.0.GObject.Object */
    /**
     * The notify signal is emitted on an object when one of its properties has
     * its value set through g_object_set_property(), g_object_set(), et al.
     * 
     * Note that getting this signal doesn’t itself guarantee that the value of
     * the property has actually changed. When it is emitted is determined by the
     * derived GObject class. If the implementor did not create the property with
     * %G_PARAM_EXPLICIT_NOTIFY, then any call to g_object_set_property() results
     * in ::notify being emitted, even if the new value is the same as the old.
     * If they did pass %G_PARAM_EXPLICIT_NOTIFY, then this signal is emitted only
     * when they explicitly call g_object_notify() or g_object_notify_by_pspec(),
     * and common practice is to do that only when the value has actually changed.
     * 
     * This signal is typically used to obtain change notification for a
     * single property, by specifying the property name as a detail in the
     * g_signal_connect() call, like this:
     * 
     * 
     * ```c
     * g_signal_connect (text_view->buffer, "notify::paste-target-list",
     *                   G_CALLBACK (gtk_text_view_target_list_notify),
     *                   text_view)
     * ```
     * 
     * 
     * It is important to note that you must use
     * [canonical parameter names][canonical-parameter-names] as
     * detail strings for the notify signal.
     */
    connect(sigName: "notify", callback: (($obj: Renderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify", callback: (($obj: Renderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify", pspec: GObject.ParamSpec): void
    connect(sigName: string, callback: any): number
    connect_after(sigName: string, callback: any): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
    static name: string
    constructor (config?: Renderer_ConstructProps)
    _init (config?: Renderer_ConstructProps): void
    static $gtype: GObject.Type
}
class Analysis {
    /* Fields of Pango-1.0.Pango.Analysis */
    /**
     * unused, reserved
     */
    readonly shape_engine: object
    /**
     * unused, reserved
     */
    readonly lang_engine: object
    /**
     * the font for this segment.
     */
    readonly font: Font
    /**
     * the bidirectional level for this segment.
     */
    readonly level: number
    /**
     * the glyph orientation for this segment (A `PangoGravity`).
     */
    readonly gravity: number
    /**
     * boolean flags for this segment (Since: 1.16).
     */
    readonly flags: number
    /**
     * the detected script for this segment (A `PangoScript`) (Since: 1.18).
     */
    readonly script: number
    /**
     * the detected language for this segment.
     */
    readonly language: Language
    /**
     * extra attributes for this segment.
     */
    readonly extra_attrs: object[]
    static name: string
}
class AttrClass {
    /* Fields of Pango-1.0.Pango.AttrClass */
    /**
     * the type ID for this attribute
     */
    readonly type: AttrType
    readonly copy: (attr: Attribute) => Attribute
    readonly destroy: (attr: Attribute) => void
    readonly equal: (attr1: Attribute, attr2: Attribute) => boolean
    static name: string
}
class AttrColor {
    /* Fields of Pango-1.0.Pango.AttrColor */
    /**
     * the common portion of the attribute
     */
    readonly attr: Attribute
    /**
     * the `PangoColor` which is the value of the attribute
     */
    readonly color: Color
    static name: string
}
class AttrFloat {
    /* Fields of Pango-1.0.Pango.AttrFloat */
    /**
     * the common portion of the attribute
     */
    readonly attr: Attribute
    /**
     * the value of the attribute
     */
    readonly value: number
    static name: string
}
class AttrFontDesc {
    /* Fields of Pango-1.0.Pango.AttrFontDesc */
    /**
     * the common portion of the attribute
     */
    readonly attr: Attribute
    /**
     * the font description which is the value of this attribute
     */
    readonly desc: FontDescription
    static name: string
}
class AttrFontFeatures {
    /* Fields of Pango-1.0.Pango.AttrFontFeatures */
    /**
     * the common portion of the attribute
     */
    readonly attr: Attribute
    /**
     * the features, as a string in CSS syntax
     */
    readonly features: string
    static name: string
}
class AttrInt {
    /* Fields of Pango-1.0.Pango.AttrInt */
    /**
     * the common portion of the attribute
     */
    readonly attr: Attribute
    /**
     * the value of the attribute
     */
    readonly value: number
    static name: string
}
class AttrIterator {
    /* Methods of Pango-1.0.Pango.AttrIterator */
    /**
     * Copy a `PangoAttrIterator`.
     */
    copy(): AttrIterator
    /**
     * Destroy a `PangoAttrIterator` and free all associated memory.
     */
    destroy(): void
    /**
     * Find the current attribute of a particular type
     * at the iterator location.
     * 
     * When multiple attributes of the same type overlap,
     * the attribute whose range starts closest to the
     * current location is used.
     */
    get(type: AttrType): Attribute | null
    /**
     * Gets a list of all attributes at the current position of the
     * iterator.
     */
    get_attrs(): Attribute[]
    /**
     * Get the font and other attributes at the current
     * iterator position.
     */
    get_font(desc: FontDescription): [ /* language */ Language | null, /* extra_attrs */ Attribute[] | null ]
    /**
     * Advance the iterator until the next change of style.
     */
    next(): boolean
    /**
     * Get the range of the current segment.
     * 
     * Note that the stored return values are signed, not unsigned
     * like the values in `PangoAttribute`. To deal with this API
     * oversight, stored return values that wouldn't fit into
     * a signed integer are clamped to %G_MAXINT.
     */
    range(): [ /* start */ number, /* end */ number ]
    static name: string
}
class AttrLanguage {
    /* Fields of Pango-1.0.Pango.AttrLanguage */
    /**
     * the common portion of the attribute
     */
    readonly attr: Attribute
    /**
     * the `PangoLanguage` which is the value of the attribute
     */
    readonly value: Language
    static name: string
}
class AttrList {
    /* Methods of Pango-1.0.Pango.AttrList */
    /**
     * Insert the given attribute into the `PangoAttrList`.
     * 
     * It will replace any attributes of the same type
     * on that segment and be merged with any adjoining
     * attributes that are identical.
     * 
     * This function is slower than [method`Pango`.AttrList.insert]
     * for creating an attribute list in order (potentially
     * much slower for large lists). However,
     * [method`Pango`.AttrList.insert] is not suitable for
     * continually changing a set of attributes since it
     * never removes or combines existing attributes.
     */
    change(attr: Attribute): void
    /**
     * Copy `list` and return an identical new list.
     */
    copy(): AttrList | null
    /**
     * Checks whether `list` and `other_list` contain the same
     * attributes and whether those attributes apply to the
     * same ranges.
     * 
     * Beware that this will return wrong values if any list
     * contains duplicates.
     */
    equal(other_list: AttrList): boolean
    /**
     * Given a `PangoAttrList` and callback function, removes
     * any elements of `list` for which `func` returns %TRUE and
     * inserts them into a new list.
     */
    filter(func: AttrFilterFunc): AttrList | null
    /**
     * Gets a list of all attributes in `list`.
     */
    get_attributes(): Attribute[]
    /**
     * Create a iterator initialized to the beginning of the list.
     * 
     * `list` must not be modified until this iterator is freed.
     */
    get_iterator(): AttrIterator
    /**
     * Insert the given attribute into the `PangoAttrList`.
     * 
     * It will be inserted after all other attributes with a
     * matching `start_index`.
     */
    insert(attr: Attribute): void
    /**
     * Insert the given attribute into the `PangoAttrList`.
     * 
     * It will be inserted before all other attributes with a
     * matching `start_index`.
     */
    insert_before(attr: Attribute): void
    /**
     * Increase the reference count of the given attribute
     * list by one.
     */
    ref(): AttrList
    /**
     * This function opens up a hole in `list,` fills it
     * in with attributes from the left, and then merges
     * `other` on top of the hole.
     * 
     * This operation is equivalent to stretching every attribute
     * that applies at position `pos` in `list` by an amount `len,`
     * and then calling [method`Pango`.AttrList.change] with a copy
     * of each attribute in `other` in sequence (offset in position
     * by `pos,` and limited in length to `len)`.
     * 
     * This operation proves useful for, for instance, inserting
     * a pre-edit string in the middle of an edit buffer.
     * 
     * For backwards compatibility, the function behaves differently
     * when `len` is 0. In this case, the attributes from `other` are
     * not imited to `len,` and are just overlayed on top of `list`.
     * 
     * This mode is useful for merging two lists of attributes together.
     */
    splice(other: AttrList, pos: number, len: number): void
    /**
     * Serializes a `PangoAttrList` to a string.
     * 
     * No guarantees are made about the format of the string,
     * it may change between Pango versions.
     * 
     * The intended use of this function is testing and
     * debugging. The format is not meant as a permanent
     * storage format.
     */
    to_string(): string
    /**
     * Decrease the reference count of the given attribute
     * list by one.
     * 
     * If the result is zero, free the attribute list
     * and the attributes it contains.
     */
    unref(): void
    /**
     * Update indices of attributes in `list` for a change in the
     * text they refer to.
     * 
     * The change that this function applies is removing `remove`
     * bytes at position `pos` and inserting `add` bytes instead.
     * 
     * Attributes that fall entirely in the (`pos,` `pos` + `remove)`
     * range are removed.
     * 
     * Attributes that start or end inside the (`pos,` `pos` + `remove)`
     * range are shortened to reflect the removal.
     * 
     * Attributes start and end positions are updated if they are
     * behind `pos` + `remove`.
     */
    update(pos: number, remove: number, add: number): void
    static name: string
    static new(): AttrList
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): AttrList
    /**
     * Deserializes a `PangoAttrList` from a string.
     * 
     * This is the counterpart to [method`Pango`.AttrList.to_string].
     * See that functions for details about the format.
     */
    static from_string(text: string): AttrList | null
}
class AttrShape {
    /* Fields of Pango-1.0.Pango.AttrShape */
    /**
     * the common portion of the attribute
     */
    readonly attr: Attribute
    /**
     * the ink rectangle to restrict to
     */
    readonly ink_rect: Rectangle
    /**
     * the logical rectangle to restrict to
     */
    readonly logical_rect: Rectangle
    /**
     * user data set (see [func`Pango`.AttrShape.new_with_data])
     */
    readonly data: object
    /**
     * copy function for the user data
     */
    readonly copy_func: AttrDataCopyFunc
    /**
     * destroy function for the user data
     */
    readonly destroy_func: GLib.DestroyNotify
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Creates a new shape attribute.
     * 
     * Like [func`Pango`.AttrShape.new], but a user data pointer
     * is also provided; this pointer can be accessed when later
     * rendering the glyph.
     */
    static new_with_data(ink_rect: Rectangle, logical_rect: Rectangle, data?: object | null, copy_func?: AttrDataCopyFunc | null): Attribute
}
class AttrSize {
    /* Fields of Pango-1.0.Pango.AttrSize */
    /**
     * the common portion of the attribute
     */
    readonly attr: Attribute
    /**
     * size of font, in units of 1/%PANGO_SCALE of a point (for
     *   %PANGO_ATTR_SIZE) or of a device unit (for %PANGO_ATTR_ABSOLUTE_SIZE)
     */
    readonly size: number
    /**
     * whether the font size is in device units or points.
     *   This field is only present for compatibility with Pango-1.8.0
     *   (%PANGO_ATTR_ABSOLUTE_SIZE was added in 1.8.1); and always will
     *   be %FALSE for %PANGO_ATTR_SIZE and %TRUE for %PANGO_ATTR_ABSOLUTE_SIZE.
     */
    readonly absolute: number
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Create a new font-size attribute in device units.
     */
    static new_absolute(size: number): Attribute
}
class AttrString {
    /* Fields of Pango-1.0.Pango.AttrString */
    /**
     * the common portion of the attribute
     */
    readonly attr: Attribute
    /**
     * the string which is the value of the attribute
     */
    readonly value: string
    static name: string
}
class Attribute {
    /* Fields of Pango-1.0.Pango.Attribute */
    /**
     * the class structure holding information about the type of the attribute
     */
    readonly klass: AttrClass
    /**
     * the start index of the range (in bytes).
     */
    readonly start_index: number
    /**
     * end index of the range (in bytes). The character at this index
     *   is not included in the range.
     */
    readonly end_index: number
    /* Methods of Pango-1.0.Pango.Attribute */
    /**
     * Returns the attribute cast to `PangoAttrColor`.
     * 
     * This is mainly useful for language bindings.
     */
    as_color(): AttrColor | null
    /**
     * Returns the attribute cast to `PangoAttrFloat`.
     * 
     * This is mainly useful for language bindings.
     */
    as_float(): AttrFloat | null
    /**
     * Returns the attribute cast to `PangoAttrFontDesc`.
     * 
     * This is mainly useful for language bindings.
     */
    as_font_desc(): AttrFontDesc | null
    /**
     * Returns the attribute cast to `PangoAttrFontFeatures`.
     * 
     * This is mainly useful for language bindings.
     */
    as_font_features(): AttrFontFeatures | null
    /**
     * Returns the attribute cast to `PangoAttrInt`.
     * 
     * This is mainly useful for language bindings.
     */
    as_int(): AttrInt | null
    /**
     * Returns the attribute cast to `PangoAttrLanguage`.
     * 
     * This is mainly useful for language bindings.
     */
    as_language(): AttrLanguage | null
    /**
     * Returns the attribute cast to `PangoAttrShape`.
     * 
     * This is mainly useful for language bindings.
     */
    as_shape(): AttrShape | null
    /**
     * Returns the attribute cast to `PangoAttrSize`.
     * 
     * This is mainly useful for language bindings.
     */
    as_size(): AttrSize | null
    /**
     * Returns the attribute cast to `PangoAttrString`.
     * 
     * This is mainly useful for language bindings.
     */
    as_string(): AttrString | null
    /**
     * Make a copy of an attribute.
     */
    copy(): Attribute
    /**
     * Destroy a `PangoAttribute` and free all associated memory.
     */
    destroy(): void
    /**
     * Compare two attributes for equality.
     * 
     * This compares only the actual value of the two
     * attributes and not the ranges that the attributes
     * apply to.
     */
    equal(attr2: Attribute): boolean
    /**
     * Initializes `attr'`s klass to `klass,` it's start_index to
     * %PANGO_ATTR_INDEX_FROM_TEXT_BEGINNING and end_index to
     * %PANGO_ATTR_INDEX_TO_TEXT_END such that the attribute applies
     * to the entire text by default.
     */
    init(klass: AttrClass): void
    static name: string
}
class Color {
    /* Fields of Pango-1.0.Pango.Color */
    /**
     * value of red component
     */
    readonly red: number
    /**
     * value of green component
     */
    readonly green: number
    /**
     * value of blue component
     */
    readonly blue: number
    /* Methods of Pango-1.0.Pango.Color */
    /**
     * Creates a copy of `src`.
     * 
     * The copy should be freed with [method`Pango`.Color.free].
     * Primarily used by language bindings, not that useful
     * otherwise (since colors can just be copied by assignment
     * in C).
     */
    copy(): Color | null
    /**
     * Frees a color allocated by [method`Pango`.Color.copy].
     */
    free(): void
    /**
     * Fill in the fields of a color from a string specification.
     * 
     * The string can either one of a large set of standard names.
     * (Taken from the CSS Color [specification](https://www.w3.org/TR/css-color-4/#named-colors),
     * or it can be a value in the form `#rgb`, `#rrggbb`,
     * `#rrrgggbbb` or `#rrrrggggbbbb`, where `r`, `g` and `b`
     * are hex digits of the red, green, and blue components
     * of the color, respectively. (White in the four forms is
     * `#fff`, `#ffffff`, `#fffffffff` and `#ffffffffffff`.)
     */
    parse(spec: string): boolean
    /**
     * Fill in the fields of a color from a string specification.
     * 
     * The string can either one of a large set of standard names.
     * (Taken from the CSS Color [specification](https://www.w3.org/TR/css-color-4/#named-colors),
     * or it can be a hexadecimal value in the form `#rgb`,
     * `#rrggbb`, `#rrrgggbbb` or `#rrrrggggbbbb` where `r`, `g`
     * and `b` are hex digits of the red, green, and blue components
     * of the color, respectively. (White in the four forms is
     * `#fff`, `#ffffff`, `#fffffffff` and `#ffffffffffff`.)
     * 
     * Additionally, parse strings of the form `#rgba`, `#rrggbbaa`,
     * `#rrrrggggbbbbaaaa`, if `alpha` is not %NULL, and set `alpha`
     * to the value specified by the hex digits for `a`. If no alpha
     * component is found in `spec,` `alpha` is set to 0xffff (for a
     * solid color).
     */
    parse_with_alpha(spec: string): [ /* returnType */ boolean, /* alpha */ number | null ]
    /**
     * Returns a textual specification of `color`.
     * 
     * The string is in the hexadecimal form `#rrrrggggbbbb`,
     * where `r`, `g` and `b` are hex digits representing the
     * red, green, and blue components respectively.
     */
    to_string(): string
    static name: string
}
abstract class ContextClass {
    static name: string
}
abstract class FontClass {
    /* Fields of Pango-1.0.Pango.FontClass */
    readonly parent_class: GObject.ObjectClass
    readonly describe: (font: Font) => FontDescription
    readonly get_coverage: (font: Font, language: Language) => Coverage
    readonly get_glyph_extents: (font: Font | null, glyph: Glyph) => [ /* ink_rect */ Rectangle | null, /* logical_rect */ Rectangle | null ]
    readonly get_metrics: (font?: Font | null, language?: Language | null) => FontMetrics
    readonly get_font_map: (font?: Font | null) => FontMap | null
    readonly describe_absolute: (font: Font) => FontDescription
    readonly get_features: (font: Font, num_features: number) => [ /* features */ HarfBuzz.feature_t[], /* num_features */ number ]
    readonly create_hb_font: (font: Font) => HarfBuzz.font_t
    static name: string
}
class FontDescription {
    /* Methods of Pango-1.0.Pango.FontDescription */
    /**
     * Determines if the style attributes of `new_match` are a closer match
     * for `desc` than those of `old_match` are, or if `old_match` is %NULL,
     * determines if `new_match` is a match at all.
     * 
     * Approximate matching is done for weight and style; other style attributes
     * must match exactly. Style attributes are all attributes other than family
     * and size-related attributes. Approximate matching for style considers
     * %PANGO_STYLE_OBLIQUE and %PANGO_STYLE_ITALIC as matches, but not as good
     * a match as when the styles are equal.
     * 
     * Note that `old_match` must match `desc`.
     */
    better_match(old_match: FontDescription | null, new_match: FontDescription): boolean
    /**
     * Make a copy of a `PangoFontDescription`.
     */
    copy(): FontDescription | null
    /**
     * Make a copy of a `PangoFontDescription`, but don't duplicate
     * allocated fields.
     * 
     * This is like [method`Pango`.FontDescription.copy], but only a shallow
     * copy is made of the family name and other allocated fields. The result
     * can only be used until `desc` is modified or freed. This is meant
     * to be used when the copy is only needed temporarily.
     */
    copy_static(): FontDescription | null
    /**
     * Compares two font descriptions for equality.
     * 
     * Two font descriptions are considered equal if the fonts they describe
     * are provably identical. This means that their masks do not have to match,
     * as long as other fields are all the same. (Two font descriptions may
     * result in identical fonts being loaded, but still compare %FALSE.)
     */
    equal(desc2: FontDescription): boolean
    /**
     * Frees a font description.
     */
    free(): void
    /**
     * Gets the family name field of a font description.
     * 
     * See [method`Pango`.FontDescription.set_family].
     */
    get_family(): string | null
    /**
     * Gets the gravity field of a font description.
     * 
     * See [method`Pango`.FontDescription.set_gravity].
     */
    get_gravity(): Gravity
    /**
     * Determines which fields in a font description have been set.
     */
    get_set_fields(): FontMask
    /**
     * Gets the size field of a font description.
     * 
     * See [method`Pango`.FontDescription.set_size].
     */
    get_size(): number
    /**
     * Determines whether the size of the font is in points (not absolute)
     * or device units (absolute).
     * 
     * See [method`Pango`.FontDescription.set_size]
     * and [method`Pango`.FontDescription.set_absolute_size].
     */
    get_size_is_absolute(): boolean
    /**
     * Gets the stretch field of a font description.
     * 
     * See [method`Pango`.FontDescription.set_stretch].
     */
    get_stretch(): Stretch
    /**
     * Gets the style field of a `PangoFontDescription`.
     * 
     * See [method`Pango`.FontDescription.set_style].
     */
    get_style(): Style
    /**
     * Gets the variant field of a `PangoFontDescription`.
     * 
     * See [method`Pango`.FontDescription.set_variant].
     */
    get_variant(): Variant
    /**
     * Gets the variations field of a font description.
     * 
     * See [method`Pango`.FontDescription.set_variations].
     */
    get_variations(): string | null
    /**
     * Gets the weight field of a font description.
     * 
     * See [method`Pango`.FontDescription.set_weight].
     */
    get_weight(): Weight
    /**
     * Computes a hash of a `PangoFontDescription` structure.
     * 
     * This is suitable to be used, for example, as an argument
     * to g_hash_table_new(). The hash value is independent of `desc->`mask.
     */
    hash(): number
    /**
     * Merges the fields that are set in `desc_to_merge` into the fields in
     * `desc`.
     * 
     * If `replace_existing` is %FALSE, only fields in `desc` that
     * are not already set are affected. If %TRUE, then fields that are
     * already set will be replaced as well.
     * 
     * If `desc_to_merge` is %NULL, this function performs nothing.
     */
    merge(desc_to_merge: FontDescription | null, replace_existing: boolean): void
    /**
     * Merges the fields that are set in `desc_to_merge` into the fields in
     * `desc,` without copying allocated fields.
     * 
     * This is like [method`Pango`.FontDescription.merge], but only a shallow copy
     * is made of the family name and other allocated fields. `desc` can only
     * be used until `desc_to_merge` is modified or freed. This is meant to
     * be used when the merged font description is only needed temporarily.
     */
    merge_static(desc_to_merge: FontDescription, replace_existing: boolean): void
    /**
     * Sets the size field of a font description, in device units.
     * 
     * This is mutually exclusive with [method`Pango`.FontDescription.set_size]
     * which sets the font size in points.
     */
    set_absolute_size(size: number): void
    /**
     * Sets the family name field of a font description.
     * 
     * The family
     * name represents a family of related font styles, and will
     * resolve to a particular `PangoFontFamily`. In some uses of
     * `PangoFontDescription`, it is also possible to use a comma
     * separated list of family names for this field.
     */
    set_family(family: string): void
    /**
     * Sets the family name field of a font description, without copying the string.
     * 
     * This is like [method`Pango`.FontDescription.set_family], except that no
     * copy of `family` is made. The caller must make sure that the
     * string passed in stays around until `desc` has been freed or the
     * name is set again. This function can be used if `family` is a static
     * string such as a C string literal, or if `desc` is only needed temporarily.
     */
    set_family_static(family: string): void
    /**
     * Sets the gravity field of a font description.
     * 
     * The gravity field
     * specifies how the glyphs should be rotated. If `gravity` is
     * %PANGO_GRAVITY_AUTO, this actually unsets the gravity mask on
     * the font description.
     * 
     * This function is seldom useful to the user. Gravity should normally
     * be set on a `PangoContext`.
     */
    set_gravity(gravity: Gravity): void
    /**
     * Sets the size field of a font description in fractional points.
     * 
     * This is mutually exclusive with
     * [method`Pango`.FontDescription.set_absolute_size].
     */
    set_size(size: number): void
    /**
     * Sets the stretch field of a font description.
     * 
     * The [enum`Pango`.Stretch] field specifies how narrow or
     * wide the font should be.
     */
    set_stretch(stretch: Stretch): void
    /**
     * Sets the style field of a `PangoFontDescription`.
     * 
     * The [enum`Pango`.Style] enumeration describes whether the font is
     * slanted and the manner in which it is slanted; it can be either
     * %PANGO_STYLE_NORMAL, %PANGO_STYLE_ITALIC, or %PANGO_STYLE_OBLIQUE.
     * 
     * Most fonts will either have a italic style or an oblique style,
     * but not both, and font matching in Pango will match italic
     * specifications with oblique fonts and vice-versa if an exact
     * match is not found.
     */
    set_style(style: Style): void
    /**
     * Sets the variant field of a font description.
     * 
     * The [enum`Pango`.Variant] can either be %PANGO_VARIANT_NORMAL
     * or %PANGO_VARIANT_SMALL_CAPS.
     */
    set_variant(variant: Variant): void
    /**
     * Sets the variations field of a font description.
     * 
     * OpenType font variations allow to select a font instance by
     * specifying values for a number of axes, such as width or weight.
     * 
     * The format of the variations string is
     * 
     *     AXIS1=VALUE,AXIS2=VALUE...
     * 
     * with each AXIS a 4 character tag that identifies a font axis,
     * and each VALUE a floating point number. Unknown axes are ignored,
     * and values are clamped to their allowed range.
     * 
     * Pango does not currently have a way to find supported axes of
     * a font. Both harfbuzz and freetype have API for this. See
     * for example [hb_ot_var_get_axis_infos](https://harfbuzz.github.io/harfbuzz-hb-ot-var.html#hb-ot-var-get-axis-infos).
     */
    set_variations(variations?: string | null): void
    /**
     * Sets the variations field of a font description.
     * 
     * This is like [method`Pango`.FontDescription.set_variations], except
     * that no copy of `variations` is made. The caller must make sure that
     * the string passed in stays around until `desc` has been freed
     * or the name is set again. This function can be used if
     * `variations` is a static string such as a C string literal,
     * or if `desc` is only needed temporarily.
     */
    set_variations_static(variations: string): void
    /**
     * Sets the weight field of a font description.
     * 
     * The weight field
     * specifies how bold or light the font should be. In addition
     * to the values of the [enum`Pango`.Weight] enumeration, other
     * intermediate numeric values are possible.
     */
    set_weight(weight: Weight): void
    /**
     * Creates a filename representation of a font description.
     * 
     * The filename is identical to the result from calling
     * [method`Pango`.FontDescription.to_string], but with underscores
     * instead of characters that are untypical in filenames, and in
     * lower case only.
     */
    to_filename(): string
    /**
     * Creates a string representation of a font description.
     * 
     * See [func`Pango`.FontDescription.from_string] for a description
     * of the format of the string representation. The family list in
     * the string description will only have a terminating comma if
     * the last word of the list is a valid style option.
     */
    to_string(): string
    /**
     * Unsets some of the fields in a `PangoFontDescription`.
     * 
     * The unset fields will get back to their default values.
     */
    unset_fields(to_unset: FontMask): void
    static name: string
    static new(): FontDescription
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): FontDescription
    /**
     * Creates a new font description from a string representation.
     * 
     * The string must have the form
     * 
     *     "\[FAMILY-LIST] \[STYLE-OPTIONS] \[SIZE] \[VARIATIONS]",
     * 
     * where FAMILY-LIST is a comma-separated list of families optionally
     * terminated by a comma, STYLE_OPTIONS is a whitespace-separated list
     * of words where each word describes one of style, variant, weight,
     * stretch, or gravity, and SIZE is a decimal number (size in points)
     * or optionally followed by the unit modifier "px" for absolute size.
     * VARIATIONS is a comma-separated list of font variation
     * specifications of the form "\`axis=`value" (the = sign is optional).
     * 
     * The following words are understood as styles:
     * "Normal", "Roman", "Oblique", "Italic".
     * 
     * The following words are understood as variants:
     * "Small-Caps", "All-Small-Caps", "Petite-Caps", "All-Petite-Caps",
     * "Unicase", "Title-Caps".
     * 
     * The following words are understood as weights:
     * "Thin", "Ultra-Light", "Extra-Light", "Light", "Semi-Light",
     * "Demi-Light", "Book", "Regular", "Medium", "Semi-Bold", "Demi-Bold",
     * "Bold", "Ultra-Bold", "Extra-Bold", "Heavy", "Black", "Ultra-Black",
     * "Extra-Black".
     * 
     * The following words are understood as stretch values:
     * "Ultra-Condensed", "Extra-Condensed", "Condensed", "Semi-Condensed",
     * "Semi-Expanded", "Expanded", "Extra-Expanded", "Ultra-Expanded".
     * 
     * The following words are understood as gravity values:
     * "Not-Rotated", "South", "Upside-Down", "North", "Rotated-Left",
     * "East", "Rotated-Right", "West".
     * 
     * Any one of the options may be absent. If FAMILY-LIST is absent, then
     * the family_name field of the resulting font description will be
     * initialized to %NULL. If STYLE-OPTIONS is missing, then all style
     * options will be set to the default values. If SIZE is missing, the
     * size in the resulting font description will be set to 0.
     * 
     * A typical example:
     * 
     *     "Cantarell Italic Light 15 \`wght=`200"
     */
    static from_string(str: string): FontDescription
}
abstract class FontFaceClass {
    /* Fields of Pango-1.0.Pango.FontFaceClass */
    readonly parent_class: GObject.ObjectClass
    readonly get_face_name: (face: FontFace) => string
    readonly describe: (face: FontFace) => FontDescription
    readonly list_sizes: (face: FontFace) => /* sizes */ number[] | null
    readonly is_synthesized: (face: FontFace) => boolean
    readonly get_family: (face: FontFace) => FontFamily
    static name: string
}
abstract class FontFamilyClass {
    /* Fields of Pango-1.0.Pango.FontFamilyClass */
    readonly parent_class: GObject.ObjectClass
    readonly list_faces: (family: FontFamily) => /* faces */ FontFace[] | null
    readonly get_name: (family: FontFamily) => string
    readonly is_monospace: (family: FontFamily) => boolean
    readonly is_variable: (family: FontFamily) => boolean
    readonly get_face: (family: FontFamily, name?: string | null) => FontFace | null
    static name: string
}
abstract class FontMapClass {
    /* Fields of Pango-1.0.Pango.FontMapClass */
    /**
     * parent `GObjectClass`
     */
    readonly parent_class: GObject.ObjectClass
    readonly load_font: (fontmap: FontMap, context: Context, desc: FontDescription) => Font | null
    readonly list_families: (fontmap: FontMap) => /* families */ FontFamily[]
    readonly load_fontset: (fontmap: FontMap, context: Context, desc: FontDescription, language: Language) => Fontset | null
    /**
     * the type of rendering-system-dependent engines that
     * can handle fonts of this fonts loaded with this fontmap.
     */
    readonly shape_engine_type: string
    readonly get_serial: (fontmap: FontMap) => number
    readonly changed: (fontmap: FontMap) => void
    readonly get_family: (fontmap: FontMap, name: string) => FontFamily
    static name: string
}
class FontMetrics {
    /* Methods of Pango-1.0.Pango.FontMetrics */
    /**
     * Gets the approximate character width for a font metrics structure.
     * 
     * This is merely a representative value useful, for example, for
     * determining the initial size for a window. Actual characters in
     * text will be wider and narrower than this.
     */
    get_approximate_char_width(): number
    /**
     * Gets the approximate digit width for a font metrics structure.
     * 
     * This is merely a representative value useful, for example, for
     * determining the initial size for a window. Actual digits in
     * text can be wider or narrower than this, though this value
     * is generally somewhat more accurate than the result of
     * pango_font_metrics_get_approximate_char_width() for digits.
     */
    get_approximate_digit_width(): number
    /**
     * Gets the ascent from a font metrics structure.
     * 
     * The ascent is the distance from the baseline to the logical top
     * of a line of text. (The logical top may be above or below the top
     * of the actual drawn ink. It is necessary to lay out the text to
     * figure where the ink will be.)
     */
    get_ascent(): number
    /**
     * Gets the descent from a font metrics structure.
     * 
     * The descent is the distance from the baseline to the logical bottom
     * of a line of text. (The logical bottom may be above or below the
     * bottom of the actual drawn ink. It is necessary to lay out the text
     * to figure where the ink will be.)
     */
    get_descent(): number
    /**
     * Gets the line height from a font metrics structure.
     * 
     * The line height is the recommended distance between successive
     * baselines in wrapped text using this font.
     * 
     * If the line height is not available, 0 is returned.
     */
    get_height(): number
    /**
     * Gets the suggested position to draw the strikethrough.
     * 
     * The value returned is the distance *above* the
     * baseline of the top of the strikethrough.
     */
    get_strikethrough_position(): number
    /**
     * Gets the suggested thickness to draw for the strikethrough.
     */
    get_strikethrough_thickness(): number
    /**
     * Gets the suggested position to draw the underline.
     * 
     * The value returned is the distance *above* the baseline of the top
     * of the underline. Since most fonts have underline positions beneath
     * the baseline, this value is typically negative.
     */
    get_underline_position(): number
    /**
     * Gets the suggested thickness to draw for the underline.
     */
    get_underline_thickness(): number
    /**
     * Increase the reference count of a font metrics structure by one.
     */
    ref(): FontMetrics | null
    /**
     * Decrease the reference count of a font metrics structure by one.
     * 
     * If the result is zero, frees the structure and any associated memory.
     */
    unref(): void
    static name: string
}
abstract class FontsetClass {
    /* Fields of Pango-1.0.Pango.FontsetClass */
    /**
     * parent `GObjectClass`
     */
    readonly parent_class: GObject.ObjectClass
    readonly get_font: (fontset: Fontset, wc: number) => Font
    readonly get_metrics: (fontset: Fontset) => FontMetrics
    readonly get_language: (fontset: Fontset) => Language
    readonly foreach: (fontset: Fontset, func: FontsetForeachFunc) => void
    static name: string
}
abstract class FontsetSimpleClass {
    static name: string
}
class GlyphGeometry {
    /* Fields of Pango-1.0.Pango.GlyphGeometry */
    /**
     * the logical width to use for the the character.
     */
    readonly width: GlyphUnit
    /**
     * horizontal offset from nominal character position.
     */
    readonly x_offset: GlyphUnit
    /**
     * vertical offset from nominal character position.
     */
    readonly y_offset: GlyphUnit
    static name: string
}
class GlyphInfo {
    /* Fields of Pango-1.0.Pango.GlyphInfo */
    /**
     * the glyph itself.
     */
    readonly glyph: Glyph
    /**
     * the positional information about the glyph.
     */
    readonly geometry: GlyphGeometry
    /**
     * the visual attributes of the glyph.
     */
    readonly attr: GlyphVisAttr
    static name: string
}
class GlyphItem {
    /* Fields of Pango-1.0.Pango.GlyphItem */
    /**
     * corresponding `PangoItem`
     */
    readonly item: Item
    /**
     * corresponding `PangoGlyphString`
     */
    readonly glyphs: GlyphString
    /**
     * shift of the baseline, relative to the baseline
     *   of the containing line. Positive values shift upwards
     */
    readonly y_offset: number
    /**
     * horizontal displacement to apply before the
     *   glyph item. Positive values shift right
     */
    readonly start_x_offset: number
    /**
     * horizontal displacement to apply after th
     *   glyph item. Positive values shift right
     */
    readonly end_x_offset: number
    /* Methods of Pango-1.0.Pango.GlyphItem */
    /**
     * Splits a shaped item (`PangoGlyphItem`) into multiple items based
     * on an attribute list.
     * 
     * The idea is that if you have attributes that don't affect shaping,
     * such as color or underline, to avoid affecting shaping, you filter
     * them out ([method`Pango`.AttrList.filter]), apply the shaping process
     * and then reapply them to the result using this function.
     * 
     * All attributes that start or end inside a cluster are applied
     * to that cluster; for instance, if half of a cluster is underlined
     * and the other-half strikethrough, then the cluster will end
     * up with both underline and strikethrough attributes. In these
     * cases, it may happen that `item->`extra_attrs for some of the
     * result items can have multiple attributes of the same type.
     * 
     * This function takes ownership of `glyph_item;` it will be reused
     * as one of the elements in the list.
     */
    apply_attrs(text: string, list: AttrList): GlyphItem[]
    /**
     * Make a deep copy of an existing `PangoGlyphItem` structure.
     */
    copy(): GlyphItem | null
    /**
     * Frees a `PangoGlyphItem` and resources to which it points.
     */
    free(): void
    /**
     * Given a `PangoGlyphItem` and the corresponding text, determine the
     * width corresponding to each character.
     * 
     * When multiple characters compose a single cluster, the width of the
     * entire cluster is divided equally among the characters.
     * 
     * See also [method`Pango`.GlyphString.get_logical_widths].
     */
    get_logical_widths(text: string, logical_widths: number[]): void
    /**
     * Adds spacing between the graphemes of `glyph_item` to
     * give the effect of typographic letter spacing.
     */
    letter_space(text: string, log_attrs: LogAttr[], letter_spacing: number): void
    /**
     * Modifies `orig` to cover only the text after `split_index,` and
     * returns a new item that covers the text before `split_index` that
     * used to be in `orig`.
     * 
     * You can think of `split_index` as the length of the returned item.
     * `split_index` may not be 0, and it may not be greater than or equal
     * to the length of `orig` (that is, there must be at least one byte
     * assigned to each item, you can't create a zero-length item).
     * 
     * This function is similar in function to pango_item_split() (and uses
     * it internally.)
     */
    split(text: string, split_index: number): GlyphItem
    static name: string
}
class GlyphItemIter {
    /* Fields of Pango-1.0.Pango.GlyphItemIter */
    readonly glyph_item: GlyphItem
    readonly text: string
    readonly start_glyph: number
    readonly start_index: number
    readonly start_char: number
    readonly end_glyph: number
    readonly end_index: number
    readonly end_char: number
    /* Methods of Pango-1.0.Pango.GlyphItemIter */
    /**
     * Make a shallow copy of an existing `PangoGlyphItemIter` structure.
     */
    copy(): GlyphItemIter | null
    /**
     * Frees a `PangoGlyphItem`Iter.
     */
    free(): void
    /**
     * Initializes a `PangoGlyphItemIter` structure to point to the
     * last cluster in a glyph item.
     * 
     * See `PangoGlyphItemIter` for details of cluster orders.
     */
    init_end(glyph_item: GlyphItem, text: string): boolean
    /**
     * Initializes a `PangoGlyphItemIter` structure to point to the
     * first cluster in a glyph item.
     * 
     * See `PangoGlyphItemIter` for details of cluster orders.
     */
    init_start(glyph_item: GlyphItem, text: string): boolean
    /**
     * Advances the iterator to the next cluster in the glyph item.
     * 
     * See `PangoGlyphItemIter` for details of cluster orders.
     */
    next_cluster(): boolean
    /**
     * Moves the iterator to the preceding cluster in the glyph item.
     * See `PangoGlyphItemIter` for details of cluster orders.
     */
    prev_cluster(): boolean
    static name: string
}
class GlyphString {
    /* Fields of Pango-1.0.Pango.GlyphString */
    /**
     * number of glyphs in this glyph string
     */
    readonly num_glyphs: number
    /**
     * array of glyph information
     */
    readonly glyphs: GlyphInfo[]
    /**
     * logical cluster info, indexed by the byte index
     *   within the text corresponding to the glyph string
     */
    readonly log_clusters: number
    /* Methods of Pango-1.0.Pango.GlyphString */
    /**
     * Copy a glyph string and associated storage.
     */
    copy(): GlyphString | null
    /**
     * Compute the logical and ink extents of a glyph string.
     * 
     * See the documentation for [method`Pango`.Font.get_glyph_extents] for details
     * about the interpretation of the rectangles.
     * 
     * Examples of logical (red) and ink (green) rects:
     * 
     * ![](rects1.png) ![](rects2.png)
     */
    extents(font: Font): [ /* ink_rect */ Rectangle | null, /* logical_rect */ Rectangle | null ]
    /**
     * Computes the extents of a sub-portion of a glyph string.
     * 
     * The extents are relative to the start of the glyph string range
     * (the origin of their coordinate system is at the start of the range,
     * not at the start of the entire glyph string).
     */
    extents_range(start: number, end: number, font: Font): [ /* ink_rect */ Rectangle | null, /* logical_rect */ Rectangle | null ]
    /**
     * Free a glyph string and associated storage.
     */
    free(): void
    /**
     * Given a `PangoGlyphString` and corresponding text, determine the width
     * corresponding to each character.
     * 
     * When multiple characters compose a single cluster, the width of the
     * entire cluster is divided equally among the characters.
     * 
     * See also [method`Pango`.GlyphItem.get_logical_widths].
     */
    get_logical_widths(text: string, length: number, embedding_level: number, logical_widths: number[]): void
    /**
     * Computes the logical width of the glyph string.
     * 
     * This can also be computed using [method`Pango`.GlyphString.extents].
     * However, since this only computes the width, it's much faster. This
     * is in fact only a convenience function that computes the sum of
     * `geometry`.width for each glyph in the `glyphs`.
     */
    get_width(): number
    /**
     * Converts from character position to x position.
     * 
     * The X position is measured from the left edge of the run.
     * Character positions are obtained using font metrics for ligatures
     * where available, and computed by dividing up each cluster
     * into equal portions, otherwise.
     * 
     * <picture>
     *   <source srcset="glyphstring-positions-dark.png" media="(prefers-color-scheme: dark)">
     *   <img alt="Glyph positions" src="glyphstring-positions-light.png">
     * </picture>
     */
    index_to_x(text: string, length: number, analysis: Analysis, index_: number, trailing: boolean): /* x_pos */ number
    /**
     * Converts from character position to x position.
     * 
     * This variant of [method`Pango`.GlyphString.index_to_x] additionally
     * accepts a `PangoLogAttr` array. The grapheme boundary information
     * in it can be used to disambiguate positioning inside some complex
     * clusters.
     */
    index_to_x_full(text: string, length: number, analysis: Analysis, attrs: LogAttr | null, index_: number, trailing: boolean): /* x_pos */ number
    /**
     * Resize a glyph string to the given length.
     */
    set_size(new_len: number): void
    /**
     * Convert from x offset to character position.
     * 
     * Character positions are computed by dividing up each cluster into
     * equal portions. In scripts where positioning within a cluster is
     * not allowed (such as Thai), the returned value may not be a valid
     * cursor position; the caller must combine the result with the logical
     * attributes for the text to compute the valid cursor position.
     */
    x_to_index(text: string, length: number, analysis: Analysis, x_pos: number): [ /* index_ */ number, /* trailing */ number ]
    static name: string
    static new(): GlyphString
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): GlyphString
}
class GlyphVisAttr {
    /* Fields of Pango-1.0.Pango.GlyphVisAttr */
    /**
     * set for the first logical glyph in each cluster.
     */
    readonly is_cluster_start: number
    /**
     * set if the the font will render this glyph with color. Since 1.50
     */
    readonly is_color: number
    static name: string
}
class Item {
    /* Fields of Pango-1.0.Pango.Item */
    /**
     * byte offset of the start of this item in text.
     */
    readonly offset: number
    /**
     * length of this item in bytes.
     */
    readonly length: number
    /**
     * number of Unicode characters in the item.
     */
    readonly num_chars: number
    /**
     * analysis results for the item.
     */
    readonly analysis: Analysis
    /* Methods of Pango-1.0.Pango.Item */
    /**
     * Add attributes to a `PangoItem`.
     * 
     * The idea is that you have attributes that don't affect itemization,
     * such as font features, so you filter them out using
     * [method`Pango`.AttrList.filter], itemize your text, then reapply the
     * attributes to the resulting items using this function.
     * 
     * The `iter` should be positioned before the range of the item,
     * and will be advanced past it. This function is meant to be called
     * in a loop over the items resulting from itemization, while passing
     * the iter to each call.
     */
    apply_attrs(iter: AttrIterator): void
    /**
     * Copy an existing `PangoItem` structure.
     */
    copy(): Item | null
    /**
     * Free a `PangoItem` and all associated memory.
     */
    free(): void
    /**
     * Modifies `orig` to cover only the text after `split_index,` and
     * returns a new item that covers the text before `split_index` that
     * used to be in `orig`.
     * 
     * You can think of `split_index` as the length of the returned item.
     * `split_index` may not be 0, and it may not be greater than or equal
     * to the length of `orig` (that is, there must be at least one byte
     * assigned to each item, you can't create a zero-length item).
     * `split_offset` is the length of the first item in chars, and must be
     * provided because the text used to generate the item isn't available,
     * so `pango_item_split()` can't count the char length of the split items
     * itself.
     */
    split(split_index: number, split_offset: number): Item
    static name: string
    static new(): Item
    constructor()
    /* Static methods and pseudo-constructors */
    static new(): Item
}
class Language {
    /* Methods of Pango-1.0.Pango.Language */
    /**
     * Get a string that is representative of the characters needed to
     * render a particular language.
     * 
     * The sample text may be a pangram, but is not necessarily. It is chosen
     * to be demonstrative of normal text in the language, as well as exposing
     * font feature requirements unique to the language. It is suitable for use
     * as sample text in a font selection dialog.
     * 
     * If `language` is %NULL, the default language as found by
     * [func`Pango`.Language.get_default] is used.
     * 
     * If Pango does not have a sample string for `language,` the classic
     * "The quick brown fox..." is returned.  This can be detected by
     * comparing the returned pointer value to that returned for (non-existent)
     * language code "xx".  That is, compare to:
     * 
     * ```
     * pango_language_get_sample_string (pango_language_from_string ("xx"))
     * ```
     */
    get_sample_string(): string
    /**
     * Determines the scripts used to to write `language`.
     * 
     * If nothing is known about the language tag `language,`
     * or if `language` is %NULL, then %NULL is returned.
     * The list of scripts returned starts with the script that the
     * language uses most and continues to the one it uses least.
     * 
     * The value `num_script` points at will be set to the number
     * of scripts in the returned array (or zero if %NULL is returned).
     * 
     * Most languages use only one script for writing, but there are
     * some that use two (Latin and Cyrillic for example), and a few
     * use three (Japanese for example). Applications should not make
     * any assumptions on the maximum number of scripts returned
     * though, except that it is positive if the return value is not
     * %NULL, and it is a small number.
     * 
     * The [method`Pango`.Language.includes_script] function uses this
     * function internally.
     * 
     * Note: while the return value is declared as `PangoScript`, the
     * returned values are from the `GUnicodeScript` enumeration, which
     * may have more values. Callers need to handle unknown values.
     */
    get_scripts(): Script[] | null
    /**
     * Determines if `script` is one of the scripts used to
     * write `language`.
     * 
     * The returned value is conservative; if nothing is known about
     * the language tag `language,` %TRUE will be returned, since, as
     * far as Pango knows, `script` might be used to write `language`.
     * 
     * This routine is used in Pango's itemization process when
     * determining if a supplied language tag is relevant to
     * a particular section of text. It probably is not useful
     * for applications in most circumstances.
     * 
     * This function uses [method`Pango`.Language.get_scripts] internally.
     */
    includes_script(script: Script): boolean
    /**
     * Checks if a language tag matches one of the elements in a list of
     * language ranges.
     * 
     * A language tag is considered to match a range in the list if the
     * range is '*', the range is exactly the tag, or the range is a prefix
     * of the tag, and the character after it in the tag is '-'.
     */
    matches(range_list: string): boolean
    /**
     * Gets the RFC-3066 format string representing the given language tag.
     * 
     * Returns (transfer none): a string representing the language tag
     */
    to_string(): string
    static name: string
    /* Static methods and pseudo-constructors */
    /**
     * Convert a language tag to a `PangoLanguage`.
     * 
     * The language tag must be in a RFC-3066 format. `PangoLanguage` pointers
     * can be efficiently copied (copy the pointer) and compared with other
     * language tags (compare the pointer.)
     * 
     * This function first canonicalizes the string by converting it to
     * lowercase, mapping '_' to '-', and stripping all characters other
     * than letters and '-'.
     * 
     * Use [func`Pango`.Language.get_default] if you want to get the
     * `PangoLanguage` for the current locale of the process.
     */
    static from_string(language?: string | null): Language | null
    /**
     * Returns the `PangoLanguage` for the current locale of the process.
     * 
     * On Unix systems, this is the return value is derived from
     * `setlocale (LC_CTYPE, NULL)`, and the user can
     * affect this through the environment variables LC_ALL, LC_CTYPE or
     * LANG (checked in that order). The locale string typically is in
     * the form lang_COUNTRY, where lang is an ISO-639 language code, and
     * COUNTRY is an ISO-3166 country code. For instance, sv_FI for
     * Swedish as written in Finland or pt_BR for Portuguese as written in
     * Brazil.
     * 
     * On Windows, the C library does not use any such environment
     * variables, and setting them won't affect the behavior of functions
     * like ctime(). The user sets the locale through the Regional Options
     * in the Control Panel. The C library (in the setlocale() function)
     * does not use country and language codes, but country and language
     * names spelled out in English.
     * However, this function does check the above environment
     * variables, and does return a Unix-style locale string based on
     * either said environment variables or the thread's current locale.
     * 
     * Your application should call `setlocale(LC_ALL, "")` for the user
     * settings to take effect. GTK does this in its initialization
     * functions automatically (by calling gtk_set_locale()).
     * See the setlocale() manpage for more details.
     * 
     * Note that the default language can change over the life of an application.
     * 
     * Also note that this function will not do the right thing if you
     * use per-thread locales with uselocale(). In that case, you should
     * just call pango_language_from_string() yourself.
     */
    static get_default(): Language
    /**
     * Returns the list of languages that the user prefers.
     * 
     * The list is specified by the `PANGO_LANGUAGE` or `LANGUAGE`
     * environment variables, in order of preference. Note that this
     * list does not necessarily include the language returned by
     * [func`Pango`.Language.get_default].
     * 
     * When choosing language-specific resources, such as the sample
     * text returned by [method`Pango`.Language.get_sample_string],
     * you should first try the default language, followed by the
     * languages returned by this function.
     */
    static get_preferred(): Language | null
}
abstract class LayoutClass {
    static name: string
}
class LayoutIter {
    /* Methods of Pango-1.0.Pango.LayoutIter */
    /**
     * Determines whether `iter` is on the last line of the layout.
     */
    at_last_line(): boolean
    /**
     * Copies a `PangoLayoutIter`.
     */
    copy(): LayoutIter | null
    /**
     * Frees an iterator that's no longer in use.
     */
    free(): void
    /**
     * Gets the Y position of the current line's baseline, in layout
     * coordinates.
     * 
     * Layout coordinates have the origin at the top left of the entire layout.
     */
    get_baseline(): number
    /**
     * Gets the extents of the current character, in layout coordinates.
     * 
     * Layout coordinates have the origin at the top left of the entire layout.
     * 
     * Only logical extents can sensibly be obtained for characters;
     * ink extents make sense only down to the level of clusters.
     */
    get_char_extents(): /* logical_rect */ Rectangle
    /**
     * Gets the extents of the current cluster, in layout coordinates.
     * 
     * Layout coordinates have the origin at the top left of the entire layout.
     */
    get_cluster_extents(): [ /* ink_rect */ Rectangle | null, /* logical_rect */ Rectangle | null ]
    /**
     * Gets the current byte index.
     * 
     * Note that iterating forward by char moves in visual order,
     * not logical order, so indexes may not be sequential. Also,
     * the index may be equal to the length of the text in the
     * layout, if on the %NULL run (see [method`Pango`.LayoutIter.get_run]).
     */
    get_index(): number
    /**
     * Gets the layout associated with a `PangoLayoutIter`.
     */
    get_layout(): Layout
    /**
     * Obtains the extents of the `PangoLayout` being iterated over.
     */
    get_layout_extents(): [ /* ink_rect */ Rectangle | null, /* logical_rect */ Rectangle | null ]
    /**
     * Gets the current line.
     * 
     * Use the faster [method`Pango`.LayoutIter.get_line_readonly] if
     * you do not plan to modify the contents of the line (glyphs,
     * glyph widths, etc.).
     */
    get_line(): LayoutLine
    /**
     * Obtains the extents of the current line.
     * 
     * Extents are in layout coordinates (origin is the top-left corner
     * of the entire `PangoLayout`). Thus the extents returned by this
     * function will be the same width/height but not at the same x/y
     * as the extents returned from [method`Pango`.LayoutLine.get_extents].
     */
    get_line_extents(): [ /* ink_rect */ Rectangle | null, /* logical_rect */ Rectangle | null ]
    /**
     * Gets the current line for read-only access.
     * 
     * This is a faster alternative to [method`Pango`.LayoutIter.get_line],
     * but the user is not expected to modify the contents of the line
     * (glyphs, glyph widths, etc.).
     */
    get_line_readonly(): LayoutLine
    /**
     * Divides the vertical space in the `PangoLayout` being iterated over
     * between the lines in the layout, and returns the space belonging to
     * the current line.
     * 
     * A line's range includes the line's logical extents. plus half of the
     * spacing above and below the line, if [method`Pango`.Layout.set_spacing]
     * has been called to set layout spacing. The Y positions are in layout
     * coordinates (origin at top left of the entire layout).
     * 
     * Note: Since 1.44, Pango uses line heights for placing lines, and there
     * may be gaps between the ranges returned by this function.
     */
    get_line_yrange(): [ /* y0_ */ number | null, /* y1_ */ number | null ]
    /**
     * Gets the current run.
     * 
     * When iterating by run, at the end of each line, there's a position
     * with a %NULL run, so this function can return %NULL. The %NULL run
     * at the end of each line ensures that all lines have at least one run,
     * even lines consisting of only a newline.
     * 
     * Use the faster [method`Pango`.LayoutIter.get_run_readonly] if you do not
     * plan to modify the contents of the run (glyphs, glyph widths, etc.).
     */
    get_run(): LayoutRun | null
    /**
     * Gets the Y position of the current run's baseline, in layout
     * coordinates.
     * 
     * Layout coordinates have the origin at the top left of the entire layout.
     * 
     * The run baseline can be different from the line baseline, for
     * example due to superscript or subscript positioning.
     */
    get_run_baseline(): number
    /**
     * Gets the extents of the current run in layout coordinates.
     * 
     * Layout coordinates have the origin at the top left of the entire layout.
     */
    get_run_extents(): [ /* ink_rect */ Rectangle | null, /* logical_rect */ Rectangle | null ]
    /**
     * Gets the current run for read-only access.
     * 
     * When iterating by run, at the end of each line, there's a position
     * with a %NULL run, so this function can return %NULL. The %NULL run
     * at the end of each line ensures that all lines have at least one run,
     * even lines consisting of only a newline.
     * 
     * This is a faster alternative to [method`Pango`.LayoutIter.get_run],
     * but the user is not expected to modify the contents of the run (glyphs,
     * glyph widths, etc.).
     */
    get_run_readonly(): LayoutRun | null
    /**
     * Moves `iter` forward to the next character in visual order.
     * 
     * If `iter` was already at the end of the layout, returns %FALSE.
     */
    next_char(): boolean
    /**
     * Moves `iter` forward to the next cluster in visual order.
     * 
     * If `iter` was already at the end of the layout, returns %FALSE.
     */
    next_cluster(): boolean
    /**
     * Moves `iter` forward to the start of the next line.
     * 
     * If `iter` is already on the last line, returns %FALSE.
     */
    next_line(): boolean
    /**
     * Moves `iter` forward to the next run in visual order.
     * 
     * If `iter` was already at the end of the layout, returns %FALSE.
     */
    next_run(): boolean
    static name: string
}
class LayoutLine {
    /* Fields of Pango-1.0.Pango.LayoutLine */
    /**
     * the layout this line belongs to, might be %NULL
     */
    readonly layout: Layout
    /**
     * start of line as byte index into layout->text
     */
    readonly start_index: number
    /**
     * length of line in bytes
     */
    readonly length: number
    /**
     * list of runs in the
     *   line, from left to right
     */
    readonly runs: LayoutRun[]
    /**
     * #TRUE if this is the first line of the paragraph
     */
    readonly is_paragraph_start: number
    /**
     * #Resolved PangoDirection of line
     */
    readonly resolved_dir: number
    /* Methods of Pango-1.0.Pango.LayoutLine */
    /**
     * Computes the logical and ink extents of a layout line.
     * 
     * See [method`Pango`.Font.get_glyph_extents] for details
     * about the interpretation of the rectangles.
     */
    get_extents(): [ /* ink_rect */ Rectangle | null, /* logical_rect */ Rectangle | null ]
    /**
     * Computes the height of the line, as the maximum of the heights
     * of fonts used in this line.
     * 
     * Note that the actual baseline-to-baseline distance between lines
     * of text is influenced by other factors, such as
     * [method`Pango`.Layout.set_spacing] and
     * [method`Pango`.Layout.set_line_spacing].
     */
    get_height(): /* height */ number | null
    /**
     * Returns the length of the line, in bytes.
     */
    get_length(): number
    /**
     * Computes the logical and ink extents of `layout_line` in device units.
     * 
     * This function just calls [method`Pango`.LayoutLine.get_extents] followed by
     * two [func`extents_to_pixels]` calls, rounding `ink_rect` and `logical_rect`
     * such that the rounded rectangles fully contain the unrounded one (that is,
     * passes them as first argument to [func`extents_to_pixels]`).
     */
    get_pixel_extents(): [ /* ink_rect */ Rectangle | null, /* logical_rect */ Rectangle | null ]
    /**
     * Returns the resolved direction of the line.
     */
    get_resolved_direction(): Direction
    /**
     * Returns the start index of the line, as byte index
     * into the text of the layout.
     */
    get_start_index(): number
    /**
     * Gets a list of visual ranges corresponding to a given logical range.
     * 
     * This list is not necessarily minimal - there may be consecutive
     * ranges which are adjacent. The ranges will be sorted from left to
     * right. The ranges are with respect to the left edge of the entire
     * layout, not with respect to the line.
     */
    get_x_ranges(start_index: number, end_index: number): /* ranges */ number[]
    /**
     * Converts an index within a line to a X position.
     */
    index_to_x(index_: number, trailing: boolean): /* x_pos */ number
    /**
     * Increase the reference count of a `PangoLayoutLine` by one.
     */
    ref(): LayoutLine
    /**
     * Decrease the reference count of a `PangoLayoutLine` by one.
     * 
     * If the result is zero, the line and all associated memory
     * will be freed.
     */
    unref(): void
    /**
     * Converts from x offset to the byte index of the corresponding character
     * within the text of the layout.
     * 
     * If `x_pos` is outside the line, `index_` and `trailing` will point to the very
     * first or very last position in the line. This determination is based on the
     * resolved direction of the paragraph; for example, if the resolved direction
     * is right-to-left, then an X position to the right of the line (after it)
     * results in 0 being stored in `index_` and `trailing`. An X position to the
     * left of the line results in `index_` pointing to the (logical) last grapheme
     * in the line and `trailing` being set to the number of characters in that
     * grapheme. The reverse is true for a left-to-right line.
     */
    x_to_index(x_pos: number): [ /* returnType */ boolean, /* index_ */ number, /* trailing */ number ]
    static name: string
}
class LogAttr {
    /* Fields of Pango-1.0.Pango.LogAttr */
    /**
     * if set, can break line in front of character
     */
    readonly is_line_break: number
    /**
     * if set, must break line in front of character
     */
    readonly is_mandatory_break: number
    /**
     * if set, can break here when doing character wrapping
     */
    readonly is_char_break: number
    /**
     * is whitespace character
     */
    readonly is_white: number
    /**
     * if set, cursor can appear in front of character.
     *   i.e. this is a grapheme boundary, or the first character in the text.
     *   This flag implements Unicode's
     *   [Grapheme Cluster Boundaries](http://www.unicode.org/reports/tr29/)
     *   semantics.
     */
    readonly is_cursor_position: number
    /**
     * is first character in a word
     */
    readonly is_word_start: number
    /**
     * is first non-word char after a word
     *   Note that in degenerate cases, you could have both `is_word_start`
     *   and `is_word_end` set for some character.
     */
    readonly is_word_end: number
    /**
     * is a sentence boundary.
     *   There are two ways to divide sentences. The first assigns all
     *   inter-sentence whitespace/control/format chars to some sentence,
     *   so all chars are in some sentence; `is_sentence_boundary` denotes
     *   the boundaries there. The second way doesn't assign
     *   between-sentence spaces, etc. to any sentence, so
     *   `is_sentence_start/``is_sentence_end` mark the boundaries of those sentences.
     */
    readonly is_sentence_boundary: number
    /**
     * is first character in a sentence
     */
    readonly is_sentence_start: number
    /**
     * is first char after a sentence.
     *   Note that in degenerate cases, you could have both `is_sentence_start`
     *   and `is_sentence_end` set for some character. (e.g. no space after a
     *   period, so the next sentence starts right away)
     */
    readonly is_sentence_end: number
    /**
     * if set, backspace deletes one character
     *   rather than the entire grapheme cluster. This field is only meaningful
     *   on grapheme boundaries (where `is_cursor_position` is set). In some languages,
     *   the full grapheme (e.g. letter + diacritics) is considered a unit, while in
     *   others, each decomposed character in the grapheme is a unit. In the default
     *   implementation of [func`break]`, this bit is set on all grapheme boundaries
     *   except those following Latin, Cyrillic or Greek base characters.
     */
    readonly backspace_deletes_character: number
    /**
     * is a whitespace character that can possibly be
     *   expanded for justification purposes. (Since: 1.18)
     */
    readonly is_expandable_space: number
    /**
     * is a word boundary, as defined by UAX#29.
     *   More specifically, means that this is not a position in the middle of a word.
     *   For example, both sides of a punctuation mark are considered word boundaries.
     *   This flag is particularly useful when selecting text word-by-word. This flag
     *   implements Unicode's [Word Boundaries](http://www.unicode.org/reports/tr29/)
     *   semantics. (Since: 1.22)
     */
    readonly is_word_boundary: number
    /**
     * when breaking lines before this char, insert a hyphen.
     *   Since: 1.50
     */
    readonly break_inserts_hyphen: number
    /**
     * when breaking lines before this char, remove the
     *   preceding char. Since 1.50
     */
    readonly break_removes_preceding: number
    readonly reserved: number
    static name: string
}
class Matrix {
    /* Fields of Pango-1.0.Pango.Matrix */
    /**
     * 1st component of the transformation matrix
     */
    readonly xx: number
    /**
     * 2nd component of the transformation matrix
     */
    readonly xy: number
    /**
     * 3rd component of the transformation matrix
     */
    readonly yx: number
    /**
     * 4th component of the transformation matrix
     */
    readonly yy: number
    /**
     * x translation
     */
    readonly x0: number
    /**
     * y translation
     */
    readonly y0: number
    /* Methods of Pango-1.0.Pango.Matrix */
    /**
     * Changes the transformation represented by `matrix` to be the
     * transformation given by first applying transformation
     * given by `new_matrix` then applying the original transformation.
     */
    concat(new_matrix: Matrix): void
    /**
     * Copies a `PangoMatrix`.
     */
    copy(): Matrix | null
    /**
     * Free a `PangoMatrix`.
     */
    free(): void
    /**
     * Returns the scale factor of a matrix on the height of the font.
     * 
     * That is, the scale factor in the direction perpendicular to the
     * vector that the X coordinate is mapped to.  If the scale in the X
     * coordinate is needed as well, use [method`Pango`.Matrix.get_font_scale_factors].
     */
    get_font_scale_factor(): number
    /**
     * Calculates the scale factor of a matrix on the width and height of the font.
     * 
     * That is, `xscale` is the scale factor in the direction of the X coordinate,
     * and `yscale` is the scale factor in the direction perpendicular to the
     * vector that the X coordinate is mapped to.
     * 
     * Note that output numbers will always be non-negative.
     */
    get_font_scale_factors(): [ /* xscale */ number | null, /* yscale */ number | null ]
    /**
     * Gets the slant ratio of a matrix.
     * 
     * For a simple shear matrix in the form:
     * 
     *     1 λ
     *     0 1
     * 
     * this is simply λ.
     */
    get_slant_ratio(): number
    /**
     * Changes the transformation represented by `matrix` to be the
     * transformation given by first rotating by `degrees` degrees
     * counter-clockwise then applying the original transformation.
     */
    rotate(degrees: number): void
    /**
     * Changes the transformation represented by `matrix` to be the
     * transformation given by first scaling by `sx` in the X direction
     * and `sy` in the Y direction then applying the original
     * transformation.
     */
    scale(scale_x: number, scale_y: number): void
    /**
     * Transforms the distance vector (`dx,``dy)` by `matrix`.
     * 
     * This is similar to [method`Pango`.Matrix.transform_point],
     * except that the translation components of the transformation
     * are ignored. The calculation of the returned vector is as follows:
     * 
     * ```
     * dx2 = dx1 * xx + dy1 * xy;
     * dy2 = dx1 * yx + dy1 * yy;
     * ```
     * 
     * Affine transformations are position invariant, so the same vector
     * always transforms to the same vector. If (`x1`,`y1`) transforms
     * to (`x2`,`y2`) then (`x1`+`dx1`,`y1`+`dy1`) will transform to
     * (`x1`+`dx2`,`y1`+`dy2`) for all values of `x1` and `x2`.
     */
    transform_distance(dx: number, dy: number): [ /* dx */ number, /* dy */ number ]
    /**
     * First transforms the `rect` using `matrix,` then calculates the bounding box
     * of the transformed rectangle.
     * 
     * This function is useful for example when you want to draw a rotated
     * `PangoLayout` to an image buffer, and want to know how large the image
     * should be and how much you should shift the layout when rendering.
     * 
     * For better accuracy, you should use [method`Pango`.Matrix.transform_rectangle]
     * on original rectangle in Pango units and convert to pixels afterward
     * using [func`extents_to_pixels]`'s first argument.
     */
    transform_pixel_rectangle(rect?: Rectangle | null): /* rect */ Rectangle | null
    /**
     * Transforms the point (`x,` `y)` by `matrix`.
     */
    transform_point(x: number, y: number): [ /* x */ number, /* y */ number ]
    /**
     * First transforms `rect` using `matrix,` then calculates the bounding box
     * of the transformed rectangle.
     * 
     * This function is useful for example when you want to draw a rotated
     * `PangoLayout` to an image buffer, and want to know how large the image
     * should be and how much you should shift the layout when rendering.
     * 
     * If you have a rectangle in device units (pixels), use
     * [method`Pango`.Matrix.transform_pixel_rectangle].
     * 
     * If you have the rectangle in Pango units and want to convert to
     * transformed pixel bounding box, it is more accurate to transform it first
     * (using this function) and pass the result to pango_extents_to_pixels(),
     * first argument, for an inclusive rounded rectangle.
     * However, there are valid reasons that you may want to convert
     * to pixels first and then transform, for example when the transformed
     * coordinates may overflow in Pango units (large matrix translation for
     * example).
     */
    transform_rectangle(rect?: Rectangle | null): /* rect */ Rectangle | null
    /**
     * Changes the transformation represented by `matrix` to be the
     * transformation given by first translating by (`tx,` `ty)`
     * then applying the original transformation.
     */
    translate(tx: number, ty: number): void
    static name: string
}
class Rectangle {
    /* Fields of Pango-1.0.Pango.Rectangle */
    /**
     * X coordinate of the left side of the rectangle.
     */
    readonly x: number
    /**
     * Y coordinate of the the top side of the rectangle.
     */
    readonly y: number
    /**
     * width of the rectangle.
     */
    readonly width: number
    /**
     * height of the rectangle.
     */
    readonly height: number
    static name: string
}
abstract class RendererClass {
    /* Fields of Pango-1.0.Pango.RendererClass */
    readonly draw_glyphs: (renderer: Renderer, font: Font, glyphs: GlyphString, x: number, y: number) => void
    readonly draw_rectangle: (renderer: Renderer, part: RenderPart, x: number, y: number, width: number, height: number) => void
    readonly draw_error_underline: (renderer: Renderer, x: number, y: number, width: number, height: number) => void
    readonly draw_shape: (renderer: Renderer, attr: AttrShape, x: number, y: number) => void
    readonly draw_trapezoid: (renderer: Renderer, part: RenderPart, y1_: number, x11: number, x21: number, y2: number, x12: number, x22: number) => void
    readonly draw_glyph: (renderer: Renderer, font: Font, glyph: Glyph, x: number, y: number) => void
    readonly part_changed: (renderer: Renderer, part: RenderPart) => void
    readonly begin: (renderer: Renderer) => void
    readonly end: (renderer: Renderer) => void
    readonly prepare_run: (renderer: Renderer, run: LayoutRun) => void
    readonly draw_glyph_item: (renderer: Renderer, text: string | null, glyph_item: GlyphItem, x: number, y: number) => void
    static name: string
}
class RendererPrivate {
    static name: string
}
class ScriptIter {
    /* Methods of Pango-1.0.Pango.ScriptIter */
    /**
     * Frees a `PangoScriptIter`.
     */
    free(): void
    /**
     * Gets information about the range to which `iter` currently points.
     * 
     * The range is the set of locations p where *start <= p < *end.
     * (That is, it doesn't include the character stored at *end)
     * 
     * Note that while the type of the `script` argument is declared
     * as `PangoScript`, as of Pango 1.18, this function simply returns
     * `GUnicodeScript` values. Callers must be prepared to handle unknown
     * values.
     */
    get_range(): [ /* start */ string | null, /* end */ string | null, /* script */ Script | null ]
    /**
     * Advances a `PangoScriptIter` to the next range.
     * 
     * If `iter` is already at the end, it is left unchanged
     * and %FALSE is returned.
     */
    next(): boolean
    static name: string
    static new(text: string, length: number): ScriptIter
    constructor(text: string, length: number)
    /* Static methods and pseudo-constructors */
    static new(text: string, length: number): ScriptIter
}
class TabArray {
    /* Methods of Pango-1.0.Pango.TabArray */
    /**
     * Copies a `PangoTabArray`.
     */
    copy(): TabArray
    /**
     * Frees a tab array and associated resources.
     */
    free(): void
    /**
     * Gets the Unicode character to use as decimal point.
     * 
     * This is only relevant for tabs with %PANGO_TAB_DECIMAL alignment,
     * which align content at the first occurrence of the decimal point
     * character.
     * 
     * The default value of 0 means that Pango will use the
     * decimal point according to the current locale.
     */
    get_decimal_point(tab_index: number): number
    /**
     * Returns %TRUE if the tab positions are in pixels,
     * %FALSE if they are in Pango units.
     */
    get_positions_in_pixels(): boolean
    /**
     * Gets the number of tab stops in `tab_array`.
     */
    get_size(): number
    /**
     * Gets the alignment and position of a tab stop.
     */
    get_tab(tab_index: number): [ /* alignment */ TabAlign | null, /* location */ number | null ]
    /**
     * If non-%NULL, `alignments` and `locations` are filled with allocated
     * arrays.
     * 
     * The arrays are of length [method`Pango`.TabArray.get_size].
     * You must free the returned array.
     */
    get_tabs(): [ /* alignments */ TabAlign | null, /* locations */ number[] | null ]
    /**
     * Resizes a tab array.
     * 
     * You must subsequently initialize any tabs
     * that were added as a result of growing the array.
     */
    resize(new_size: number): void
    /**
     * Sets the Unicode character to use as decimal point.
     * 
     * This is only relevant for tabs with %PANGO_TAB_DECIMAL alignment,
     * which align content at the first occurrence of the decimal point
     * character.
     * 
     * By default, Pango uses the decimal point according
     * to the current locale.
     */
    set_decimal_point(tab_index: number, decimal_point: number): void
    /**
     * Sets whether positions in this array are specified in
     * pixels.
     */
    set_positions_in_pixels(positions_in_pixels: boolean): void
    /**
     * Sets the alignment and location of a tab stop.
     */
    set_tab(tab_index: number, alignment: TabAlign, location: number): void
    /**
     * Utility function to ensure that the tab stops are in increasing order.
     */
    sort(): void
    /**
     * Serializes a `PangoTabArray` to a string.
     * 
     * No guarantees are made about the format of the string,
     * it may change between Pango versions.
     * 
     * The intended use of this function is testing and
     * debugging. The format is not meant as a permanent
     * storage format.
     */
    to_string(): string
    static name: string
    static new(initial_size: number, positions_in_pixels: boolean): TabArray
    constructor(initial_size: number, positions_in_pixels: boolean)
    /* Static methods and pseudo-constructors */
    static new(initial_size: number, positions_in_pixels: boolean): TabArray
    /**
     * Deserializes a `PangoTabArray` from a string.
     * 
     * This is the counterpart to [method`Pango`.TabArray.to_string].
     * See that functions for details about the format.
     */
    static from_string(text: string): TabArray | null
}
    type Glyph = number
    type GlyphUnit = number
    type LayoutRun = GlyphItem
}
export default Pango;