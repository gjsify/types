/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * HarfBuzz-0.0
 */

import type * as Gjs from './Gjs';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';

export namespace HarfBuzz {

/**
 * The selectors defined for specifying AAT feature settings.
 */
enum aat_layout_feature_selector_t {
    /**
     * Initial, unset feature selector
     */
    INVALID,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_ALL_TYPOGRAPHIC
     */
    ALL_TYPE_FEATURES_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_ALL_TYPOGRAPHIC
     */
    ALL_TYPE_FEATURES_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_LIGATURES
     */
    REQUIRED_LIGATURES_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_LIGATURES
     */
    REQUIRED_LIGATURES_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_LIGATURES
     */
    COMMON_LIGATURES_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_LIGATURES
     */
    COMMON_LIGATURES_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_LIGATURES
     */
    RARE_LIGATURES_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_LIGATURES
     */
    RARE_LIGATURES_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_LIGATURES
     */
    LOGOS_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_LIGATURES
     */
    LOGOS_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_LIGATURES
     */
    REBUS_PICTURES_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_LIGATURES
     */
    REBUS_PICTURES_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_LIGATURES
     */
    DIPHTHONG_LIGATURES_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_LIGATURES
     */
    DIPHTHONG_LIGATURES_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_LIGATURES
     */
    SQUARED_LIGATURES_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_LIGATURES
     */
    SQUARED_LIGATURES_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_LIGATURES
     */
    ABBREV_SQUARED_LIGATURES_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_LIGATURES
     */
    ABBREV_SQUARED_LIGATURES_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_LIGATURES
     */
    SYMBOL_LIGATURES_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_LIGATURES
     */
    SYMBOL_LIGATURES_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_LIGATURES
     */
    CONTEXTUAL_LIGATURES_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_LIGATURES
     */
    CONTEXTUAL_LIGATURES_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_LIGATURES
     */
    HISTORICAL_LIGATURES_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_LIGATURES
     */
    HISTORICAL_LIGATURES_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_LIGATURES
     */
    UNCONNECTED,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_LIGATURES
     */
    PARTIALLY_CONNECTED,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_LIGATURES
     */
    CURSIVE,
    /**
     * Deprecated
     */
    UPPER_AND_LOWER_CASE,
    /**
     * Deprecated
     */
    ALL_CAPS,
    /**
     * Deprecated
     */
    ALL_LOWER_CASE,
    /**
     * Deprecated
     */
    SMALL_CAPS,
    /**
     * Deprecated
     */
    INITIAL_CAPS,
    /**
     * Deprecated
     */
    INITIAL_CAPS_AND_SMALL_CAPS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_VERTICAL_SUBSTITUTION
     */
    SUBSTITUTE_VERTICAL_FORMS_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_VERTICAL_SUBSTITUTION
     */
    SUBSTITUTE_VERTICAL_FORMS_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_LINGUISTIC_REARRANGEMENT
     */
    LINGUISTIC_REARRANGEMENT_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_LINGUISTIC_REARRANGEMENT
     */
    LINGUISTIC_REARRANGEMENT_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_NUMBER_SPACING
     */
    MONOSPACED_NUMBERS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_NUMBER_SPACING
     */
    PROPORTIONAL_NUMBERS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_NUMBER_SPACING
     */
    THIRD_WIDTH_NUMBERS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_NUMBER_SPACING
     */
    QUARTER_WIDTH_NUMBERS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_SMART_SWASH_TYPE
     */
    WORD_INITIAL_SWASHES_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_SMART_SWASH_TYPE
     */
    WORD_INITIAL_SWASHES_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_SMART_SWASH_TYPE
     */
    WORD_FINAL_SWASHES_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_SMART_SWASH_TYPE
     */
    WORD_FINAL_SWASHES_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_SMART_SWASH_TYPE
     */
    LINE_INITIAL_SWASHES_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_SMART_SWASH_TYPE
     */
    LINE_INITIAL_SWASHES_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_SMART_SWASH_TYPE
     */
    LINE_FINAL_SWASHES_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_SMART_SWASH_TYPE
     */
    LINE_FINAL_SWASHES_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_SMART_SWASH_TYPE
     */
    NON_FINAL_SWASHES_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_SMART_SWASH_TYPE
     */
    NON_FINAL_SWASHES_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_DIACRITICS_TYPE
     */
    SHOW_DIACRITICS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_DIACRITICS_TYPE
     */
    HIDE_DIACRITICS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_DIACRITICS_TYPE
     */
    DECOMPOSE_DIACRITICS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_VERTICAL_POSITION
     */
    NORMAL_POSITION,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_VERTICAL_POSITION
     */
    SUPERIORS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_VERTICAL_POSITION
     */
    INFERIORS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_VERTICAL_POSITION
     */
    ORDINALS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_VERTICAL_POSITION
     */
    SCIENTIFIC_INFERIORS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_FRACTIONS
     */
    NO_FRACTIONS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_FRACTIONS
     */
    VERTICAL_FRACTIONS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_FRACTIONS
     */
    DIAGONAL_FRACTIONS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_OVERLAPPING_CHARACTERS_TYPE
     */
    PREVENT_OVERLAP_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_OVERLAPPING_CHARACTERS_TYPE
     */
    PREVENT_OVERLAP_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_TYPOGRAPHIC_EXTRAS
     */
    HYPHENS_TO_EM_DASH_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_TYPOGRAPHIC_EXTRAS
     */
    HYPHENS_TO_EM_DASH_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_TYPOGRAPHIC_EXTRAS
     */
    HYPHEN_TO_EN_DASH_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_TYPOGRAPHIC_EXTRAS
     */
    HYPHEN_TO_EN_DASH_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_TYPOGRAPHIC_EXTRAS
     */
    SLASHED_ZERO_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_TYPOGRAPHIC_EXTRAS
     */
    SLASHED_ZERO_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_TYPOGRAPHIC_EXTRAS
     */
    FORM_INTERROBANG_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_TYPOGRAPHIC_EXTRAS
     */
    FORM_INTERROBANG_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_TYPOGRAPHIC_EXTRAS
     */
    SMART_QUOTES_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_TYPOGRAPHIC_EXTRAS
     */
    SMART_QUOTES_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_TYPOGRAPHIC_EXTRAS
     */
    PERIODS_TO_ELLIPSIS_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_TYPOGRAPHIC_EXTRAS
     */
    PERIODS_TO_ELLIPSIS_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_MATHEMATICAL_EXTRAS
     */
    HYPHEN_TO_MINUS_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_MATHEMATICAL_EXTRAS
     */
    HYPHEN_TO_MINUS_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_MATHEMATICAL_EXTRAS
     */
    ASTERISK_TO_MULTIPLY_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_MATHEMATICAL_EXTRAS
     */
    ASTERISK_TO_MULTIPLY_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_MATHEMATICAL_EXTRAS
     */
    SLASH_TO_DIVIDE_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_MATHEMATICAL_EXTRAS
     */
    SLASH_TO_DIVIDE_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_MATHEMATICAL_EXTRAS
     */
    INEQUALITY_LIGATURES_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_MATHEMATICAL_EXTRAS
     */
    INEQUALITY_LIGATURES_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_MATHEMATICAL_EXTRAS
     */
    EXPONENTS_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_MATHEMATICAL_EXTRAS
     */
    EXPONENTS_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_MATHEMATICAL_EXTRAS
     */
    MATHEMATICAL_GREEK_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_MATHEMATICAL_EXTRAS
     */
    MATHEMATICAL_GREEK_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_ORNAMENT_SETS_TYPE
     */
    NO_ORNAMENTS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_ORNAMENT_SETS_TYPE
     */
    DINGBATS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_ORNAMENT_SETS_TYPE
     */
    PI_CHARACTERS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_ORNAMENT_SETS_TYPE
     */
    FLEURONS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_ORNAMENT_SETS_TYPE
     */
    DECORATIVE_BORDERS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_ORNAMENT_SETS_TYPE
     */
    INTERNATIONAL_SYMBOLS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_ORNAMENT_SETS_TYPE
     */
    MATH_SYMBOLS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CHARACTER_ALTERNATIVES
     */
    NO_ALTERNATES,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_DESIGN_COMPLEXITY_TYPE
     */
    DESIGN_LEVEL1,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_DESIGN_COMPLEXITY_TYPE
     */
    DESIGN_LEVEL2,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_DESIGN_COMPLEXITY_TYPE
     */
    DESIGN_LEVEL3,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_DESIGN_COMPLEXITY_TYPE
     */
    DESIGN_LEVEL4,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_DESIGN_COMPLEXITY_TYPE
     */
    DESIGN_LEVEL5,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLE_OPTIONS
     */
    NO_STYLE_OPTIONS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLE_OPTIONS
     */
    DISPLAY_TEXT,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLE_OPTIONS
     */
    ENGRAVED_TEXT,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLE_OPTIONS
     */
    ILLUMINATED_CAPS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLE_OPTIONS
     */
    TITLING_CAPS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLE_OPTIONS
     */
    TALL_CAPS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CHARACTER_SHAPE
     */
    TRADITIONAL_CHARACTERS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CHARACTER_SHAPE
     */
    SIMPLIFIED_CHARACTERS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CHARACTER_SHAPE
     */
    JIS1978_CHARACTERS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CHARACTER_SHAPE
     */
    JIS1983_CHARACTERS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CHARACTER_SHAPE
     */
    JIS1990_CHARACTERS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CHARACTER_SHAPE
     */
    TRADITIONAL_ALT_ONE,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CHARACTER_SHAPE
     */
    TRADITIONAL_ALT_TWO,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CHARACTER_SHAPE
     */
    TRADITIONAL_ALT_THREE,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CHARACTER_SHAPE
     */
    TRADITIONAL_ALT_FOUR,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CHARACTER_SHAPE
     */
    TRADITIONAL_ALT_FIVE,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CHARACTER_SHAPE
     */
    EXPERT_CHARACTERS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CHARACTER_SHAPE
     */
    JIS2004_CHARACTERS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CHARACTER_SHAPE
     */
    HOJO_CHARACTERS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CHARACTER_SHAPE
     */
    NLCCHARACTERS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CHARACTER_SHAPE
     */
    TRADITIONAL_NAMES_CHARACTERS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_NUMBER_CASE
     */
    LOWER_CASE_NUMBERS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_NUMBER_CASE
     */
    UPPER_CASE_NUMBERS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_TEXT_SPACING
     */
    PROPORTIONAL_TEXT,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_TEXT_SPACING
     */
    MONOSPACED_TEXT,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_TEXT_SPACING
     */
    HALF_WIDTH_TEXT,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_TEXT_SPACING
     */
    THIRD_WIDTH_TEXT,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_TEXT_SPACING
     */
    QUARTER_WIDTH_TEXT,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_TEXT_SPACING
     */
    ALT_PROPORTIONAL_TEXT,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_TEXT_SPACING
     */
    ALT_HALF_WIDTH_TEXT,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_TRANSLITERATION
     */
    NO_TRANSLITERATION,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_TRANSLITERATION
     */
    HANJA_TO_HANGUL,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_TRANSLITERATION
     */
    HIRAGANA_TO_KATAKANA,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_TRANSLITERATION
     */
    KATAKANA_TO_HIRAGANA,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_TRANSLITERATION
     */
    KANA_TO_ROMANIZATION,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_TRANSLITERATION
     */
    ROMANIZATION_TO_HIRAGANA,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_TRANSLITERATION
     */
    ROMANIZATION_TO_KATAKANA,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_TRANSLITERATION
     */
    HANJA_TO_HANGUL_ALT_ONE,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_TRANSLITERATION
     */
    HANJA_TO_HANGUL_ALT_TWO,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_TRANSLITERATION
     */
    HANJA_TO_HANGUL_ALT_THREE,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_ANNOTATION_TYPE
     */
    NO_ANNOTATION,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_ANNOTATION_TYPE
     */
    BOX_ANNOTATION,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_ANNOTATION_TYPE
     */
    ROUNDED_BOX_ANNOTATION,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_ANNOTATION_TYPE
     */
    CIRCLE_ANNOTATION,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_ANNOTATION_TYPE
     */
    INVERTED_CIRCLE_ANNOTATION,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_ANNOTATION_TYPE
     */
    PARENTHESIS_ANNOTATION,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_ANNOTATION_TYPE
     */
    PERIOD_ANNOTATION,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_ANNOTATION_TYPE
     */
    ROMAN_NUMERAL_ANNOTATION,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_ANNOTATION_TYPE
     */
    DIAMOND_ANNOTATION,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_ANNOTATION_TYPE
     */
    INVERTED_BOX_ANNOTATION,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_ANNOTATION_TYPE
     */
    INVERTED_ROUNDED_BOX_ANNOTATION,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_KANA_SPACING_TYPE
     */
    FULL_WIDTH_KANA,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_KANA_SPACING_TYPE
     */
    PROPORTIONAL_KANA,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_IDEOGRAPHIC_SPACING_TYPE
     */
    FULL_WIDTH_IDEOGRAPHS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_IDEOGRAPHIC_SPACING_TYPE
     */
    PROPORTIONAL_IDEOGRAPHS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_IDEOGRAPHIC_SPACING_TYPE
     */
    HALF_WIDTH_IDEOGRAPHS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_UNICODE_DECOMPOSITION_TYPE
     */
    CANONICAL_COMPOSITION_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_UNICODE_DECOMPOSITION_TYPE
     */
    CANONICAL_COMPOSITION_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_UNICODE_DECOMPOSITION_TYPE
     */
    COMPATIBILITY_COMPOSITION_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_UNICODE_DECOMPOSITION_TYPE
     */
    COMPATIBILITY_COMPOSITION_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_UNICODE_DECOMPOSITION_TYPE
     */
    TRANSCODING_COMPOSITION_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_UNICODE_DECOMPOSITION_TYPE
     */
    TRANSCODING_COMPOSITION_OFF,
    /**
     * Deprecated; use #HB_AAT_LAYOUT_FEATURE_SELECTOR_RUBY_KANA_OFF instead
     */
    NO_RUBY_KANA,
    /**
     * Deprecated; use #HB_AAT_LAYOUT_FEATURE_SELECTOR_RUBY_KANA_ON instead
     */
    RUBY_KANA,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_RUBY_KANA
     */
    RUBY_KANA_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_RUBY_KANA
     */
    RUBY_KANA_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CJK_SYMBOL_ALTERNATIVES_TYPE
     */
    NO_CJK_SYMBOL_ALTERNATIVES,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CJK_SYMBOL_ALTERNATIVES_TYPE
     */
    CJK_SYMBOL_ALT_ONE,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CJK_SYMBOL_ALTERNATIVES_TYPE
     */
    CJK_SYMBOL_ALT_TWO,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CJK_SYMBOL_ALTERNATIVES_TYPE
     */
    CJK_SYMBOL_ALT_THREE,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CJK_SYMBOL_ALTERNATIVES_TYPE
     */
    CJK_SYMBOL_ALT_FOUR,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CJK_SYMBOL_ALTERNATIVES_TYPE
     */
    CJK_SYMBOL_ALT_FIVE,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_IDEOGRAPHIC_ALTERNATIVES_TYPE
     */
    NO_IDEOGRAPHIC_ALTERNATIVES,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_IDEOGRAPHIC_ALTERNATIVES_TYPE
     */
    IDEOGRAPHIC_ALT_ONE,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_IDEOGRAPHIC_ALTERNATIVES_TYPE
     */
    IDEOGRAPHIC_ALT_TWO,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_IDEOGRAPHIC_ALTERNATIVES_TYPE
     */
    IDEOGRAPHIC_ALT_THREE,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_IDEOGRAPHIC_ALTERNATIVES_TYPE
     */
    IDEOGRAPHIC_ALT_FOUR,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_IDEOGRAPHIC_ALTERNATIVES_TYPE
     */
    IDEOGRAPHIC_ALT_FIVE,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CJK_VERTICAL_ROMAN_PLACEMENT_TYPE
     */
    CJK_VERTICAL_ROMAN_CENTERED,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CJK_VERTICAL_ROMAN_PLACEMENT_TYPE
     */
    CJK_VERTICAL_ROMAN_HBASELINE,
    /**
     * Deprecated; use #HB_AAT_LAYOUT_FEATURE_SELECTOR_CJK_ITALIC_ROMAN_OFF instead
     */
    NO_CJK_ITALIC_ROMAN,
    /**
     * Deprecated; use #HB_AAT_LAYOUT_FEATURE_SELECTOR_CJK_ITALIC_ROMAN_ON instead
     */
    CJK_ITALIC_ROMAN,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_ITALIC_CJK_ROMAN
     */
    CJK_ITALIC_ROMAN_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_ITALIC_CJK_ROMAN
     */
    CJK_ITALIC_ROMAN_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CASE_SENSITIVE_LAYOUT
     */
    CASE_SENSITIVE_LAYOUT_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CASE_SENSITIVE_LAYOUT
     */
    CASE_SENSITIVE_LAYOUT_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CASE_SENSITIVE_LAYOUT
     */
    CASE_SENSITIVE_SPACING_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CASE_SENSITIVE_LAYOUT
     */
    CASE_SENSITIVE_SPACING_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_ALTERNATE_KANA
     */
    ALTERNATE_HORIZ_KANA_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_ALTERNATE_KANA
     */
    ALTERNATE_HORIZ_KANA_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_ALTERNATE_KANA
     */
    ALTERNATE_VERT_KANA_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_ALTERNATE_KANA
     */
    ALTERNATE_VERT_KANA_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    NO_STYLISTIC_ALTERNATES,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_ONE_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_ONE_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_TWO_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_TWO_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_THREE_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_THREE_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_FOUR_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_FOUR_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_FIVE_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_FIVE_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_SIX_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_SIX_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_SEVEN_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_SEVEN_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_EIGHT_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_EIGHT_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_NINE_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_NINE_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_TEN_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_TEN_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_ELEVEN_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_ELEVEN_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_TWELVE_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_TWELVE_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_THIRTEEN_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_THIRTEEN_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_FOURTEEN_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_FOURTEEN_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_FIFTEEN_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_FIFTEEN_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_SIXTEEN_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_SIXTEEN_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_SEVENTEEN_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_SEVENTEEN_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_EIGHTEEN_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_EIGHTEEN_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_NINETEEN_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_NINETEEN_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_TWENTY_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_STYLISTIC_ALTERNATIVES
     */
    STYLISTIC_ALT_TWENTY_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CONTEXTUAL_ALTERNATIVES
     */
    CONTEXTUAL_ALTERNATES_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CONTEXTUAL_ALTERNATIVES
     */
    CONTEXTUAL_ALTERNATES_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CONTEXTUAL_ALTERNATIVES
     */
    SWASH_ALTERNATES_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CONTEXTUAL_ALTERNATIVES
     */
    SWASH_ALTERNATES_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CONTEXTUAL_ALTERNATIVES
     */
    CONTEXTUAL_SWASH_ALTERNATES_ON,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CONTEXTUAL_ALTERNATIVES
     */
    CONTEXTUAL_SWASH_ALTERNATES_OFF,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_LOWER_CASE
     */
    DEFAULT_LOWER_CASE,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_LOWER_CASE
     */
    LOWER_CASE_SMALL_CAPS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_LOWER_CASE
     */
    LOWER_CASE_PETITE_CAPS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_UPPER_CASE
     */
    DEFAULT_UPPER_CASE,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_UPPER_CASE
     */
    UPPER_CASE_SMALL_CAPS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_UPPER_CASE
     */
    UPPER_CASE_PETITE_CAPS,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CJK_ROMAN_SPACING_TYPE
     */
    HALF_WIDTH_CJK_ROMAN,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CJK_ROMAN_SPACING_TYPE
     */
    PROPORTIONAL_CJK_ROMAN,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CJK_ROMAN_SPACING_TYPE
     */
    DEFAULT_CJK_ROMAN,
    /**
     * for #HB_AAT_LAYOUT_FEATURE_TYPE_CJK_ROMAN_SPACING_TYPE
     */
    FULL_WIDTH_CJK_ROMAN,
}
/**
 * The possible feature types defined for AAT shaping.
 */
enum aat_layout_feature_type_t {
    /**
     * Initial, unset feature type
     */
    INVALID,
    ALL_TYPOGRAPHIC,
    LIGATURES,
    CURISVE_CONNECTION,
    LETTER_CASE,
    VERTICAL_SUBSTITUTION,
    LINGUISTIC_REARRANGEMENT,
    NUMBER_SPACING,
    SMART_SWASH_TYPE,
    DIACRITICS_TYPE,
    VERTICAL_POSITION,
    FRACTIONS,
    OVERLAPPING_CHARACTERS_TYPE,
    TYPOGRAPHIC_EXTRAS,
    MATHEMATICAL_EXTRAS,
    ORNAMENT_SETS_TYPE,
    CHARACTER_ALTERNATIVES,
    DESIGN_COMPLEXITY_TYPE,
    STYLE_OPTIONS,
    CHARACTER_SHAPE,
    NUMBER_CASE,
    TEXT_SPACING,
    TRANSLITERATION,
    ANNOTATION_TYPE,
    KANA_SPACING_TYPE,
    IDEOGRAPHIC_SPACING_TYPE,
    UNICODE_DECOMPOSITION_TYPE,
    RUBY_KANA,
    CJK_SYMBOL_ALTERNATIVES_TYPE,
    IDEOGRAPHIC_ALTERNATIVES_TYPE,
    CJK_VERTICAL_ROMAN_PLACEMENT_TYPE,
    ITALIC_CJK_ROMAN,
    CASE_SENSITIVE_LAYOUT,
    ALTERNATE_KANA,
    STYLISTIC_ALTERNATIVES,
    CONTEXTUAL_ALTERNATIVES,
    LOWER_CASE,
    UPPER_CASE,
    LANGUAGE_TAG_TYPE,
    CJK_ROMAN_SPACING_TYPE,
}
enum buffer_cluster_level_t {
    /**
     * Return cluster values grouped by graphemes into
     *   monotone order.
     */
    MONOTONE_GRAPHEMES,
    /**
     * Return cluster values grouped into monotone order.
     */
    MONOTONE_CHARACTERS,
    /**
     * Don't group cluster values.
     */
    CHARACTERS,
    /**
     * Default cluster level,
     *   equal to `HB_BUFFER_CLUSTER_LEVEL_MONOTONE_GRAPHEMES`.
     */
    DEFAULT,
}
enum buffer_content_type_t {
    /**
     * Initial value for new buffer.
     */
    INVALID,
    /**
     * The buffer contains input characters (before shaping).
     */
    UNICODE,
    /**
     * The buffer contains output glyphs (after shaping).
     */
    GLYPHS,
}
/**
 * The buffer serialization and de-serialization format used in
 * hb_buffer_serialize_glyphs() and hb_buffer_deserialize_glyphs().
 */
enum buffer_serialize_format_t {
    /**
     * a human-readable, plain text format.
     */
    TEXT,
    /**
     * a machine-readable JSON format.
     */
    JSON,
    /**
     * invalid format.
     */
    INVALID,
}
enum direction_t {
    /**
     * Initial, unset direction.
     */
    INVALID,
    /**
     * Text is set horizontally from left to right.
     */
    LTR,
    /**
     * Text is set horizontally from right to left.
     */
    RTL,
    /**
     * Text is set vertically from top to bottom.
     */
    TTB,
    /**
     * Text is set vertically from bottom to top.
     */
    BTT,
}
enum memory_mode_t {
    DUPLICATE,
    READONLY,
    WRITABLE,
    READONLY_MAY_MAKE_WRITABLE,
}
/**
 * Baseline tags from https://docs.microsoft.com/en-us/typography/opentype/spec/baselinetags
 */
enum ot_layout_baseline_tag_t {
    /**
     * The baseline used by alphabetic scripts such as Latin, Cyrillic and Greek.
     * In vertical writing mode, the alphabetic baseline for characters rotated 90 degrees clockwise.
     * (This would not apply to alphabetic characters that remain upright in vertical writing mode, since these
     * characters are not rotated.)
     */
    ROMAN,
    /**
     * The hanging baseline. In horizontal direction, this is the horizontal
     * line from which syllables seem, to hang in Tibetan and other similar scripts. In vertical writing mode,
     * for Tibetan (or some other similar script) characters rotated 90 degrees clockwise.
     */
    HANGING,
    /**
     * Ideographic character face bottom or left edge,
     * if the direction is horizontal or vertical, respectively.
     */
    IDEO_FACE_BOTTOM_OR_LEFT,
    /**
     * Ideographic character face top or right edge,
     * if the direction is horizontal or vertical, respectively.
     */
    IDEO_FACE_TOP_OR_RIGHT,
    /**
     * Ideographic em-box bottom or left edge,
     * if the direction is horizontal or vertical, respectively.
     */
    IDEO_EMBOX_BOTTOM_OR_LEFT,
    /**
     * Ideographic em-box top or right edge baseline,
     * if the direction is horizontal or vertical, respectively.
     */
    IDEO_EMBOX_TOP_OR_RIGHT,
    /**
     * The baseline about which mathematical characters are centered.
     * In vertical writing mode when mathematical characters rotated 90 degrees clockwise, are centered.
     */
    MATH,
}
/**
 * The GDEF classes defined for glyphs.
 */
enum ot_layout_glyph_class_t {
    /**
     * Glyphs not matching the other classifications
     */
    UNCLASSIFIED,
    /**
     * Spacing, single characters, capable of accepting marks
     */
    BASE_GLYPH,
    /**
     * Glyphs that represent ligation of multiple characters
     */
    LIGATURE,
    /**
     * Non-spacing, combining glyphs that represent marks
     */
    MARK,
    /**
     * Spacing glyphs that represent part of a single character
     */
    COMPONENT,
}
/**
 * The 'MATH' table constants specified at
 * https://docs.microsoft.com/en-us/typography/opentype/spec/math
 */
enum ot_math_constant_t {
    SCRIPT_PERCENT_SCALE_DOWN,
    SCRIPT_SCRIPT_PERCENT_SCALE_DOWN,
    DELIMITED_SUB_FORMULA_MIN_HEIGHT,
    DISPLAY_OPERATOR_MIN_HEIGHT,
    MATH_LEADING,
    AXIS_HEIGHT,
    ACCENT_BASE_HEIGHT,
    FLATTENED_ACCENT_BASE_HEIGHT,
    SUBSCRIPT_SHIFT_DOWN,
    SUBSCRIPT_TOP_MAX,
    SUBSCRIPT_BASELINE_DROP_MIN,
    SUPERSCRIPT_SHIFT_UP,
    SUPERSCRIPT_SHIFT_UP_CRAMPED,
    SUPERSCRIPT_BOTTOM_MIN,
    SUPERSCRIPT_BASELINE_DROP_MAX,
    SUB_SUPERSCRIPT_GAP_MIN,
    SUPERSCRIPT_BOTTOM_MAX_WITH_SUBSCRIPT,
    SPACE_AFTER_SCRIPT,
    UPPER_LIMIT_GAP_MIN,
    UPPER_LIMIT_BASELINE_RISE_MIN,
    LOWER_LIMIT_GAP_MIN,
    LOWER_LIMIT_BASELINE_DROP_MIN,
    STACK_TOP_SHIFT_UP,
    STACK_TOP_DISPLAY_STYLE_SHIFT_UP,
    STACK_BOTTOM_SHIFT_DOWN,
    STACK_BOTTOM_DISPLAY_STYLE_SHIFT_DOWN,
    STACK_GAP_MIN,
    STACK_DISPLAY_STYLE_GAP_MIN,
    STRETCH_STACK_TOP_SHIFT_UP,
    STRETCH_STACK_BOTTOM_SHIFT_DOWN,
    STRETCH_STACK_GAP_ABOVE_MIN,
    STRETCH_STACK_GAP_BELOW_MIN,
    FRACTION_NUMERATOR_SHIFT_UP,
    FRACTION_NUMERATOR_DISPLAY_STYLE_SHIFT_UP,
    FRACTION_DENOMINATOR_SHIFT_DOWN,
    FRACTION_DENOMINATOR_DISPLAY_STYLE_SHIFT_DOWN,
    FRACTION_NUMERATOR_GAP_MIN,
    FRACTION_NUM_DISPLAY_STYLE_GAP_MIN,
    FRACTION_RULE_THICKNESS,
    FRACTION_DENOMINATOR_GAP_MIN,
    FRACTION_DENOM_DISPLAY_STYLE_GAP_MIN,
    SKEWED_FRACTION_HORIZONTAL_GAP,
    SKEWED_FRACTION_VERTICAL_GAP,
    OVERBAR_VERTICAL_GAP,
    OVERBAR_RULE_THICKNESS,
    OVERBAR_EXTRA_ASCENDER,
    UNDERBAR_VERTICAL_GAP,
    UNDERBAR_RULE_THICKNESS,
    UNDERBAR_EXTRA_DESCENDER,
    RADICAL_VERTICAL_GAP,
    RADICAL_DISPLAY_STYLE_VERTICAL_GAP,
    RADICAL_RULE_THICKNESS,
    RADICAL_EXTRA_ASCENDER,
    RADICAL_KERN_BEFORE_DEGREE,
    RADICAL_KERN_AFTER_DEGREE,
    RADICAL_DEGREE_BOTTOM_RAISE_PERCENT,
}
/**
 * The math kerning-table types defined for the four corners
 * of a glyph.
 */
enum ot_math_kern_t {
    TOP_RIGHT,
    TOP_LEFT,
    BOTTOM_RIGHT,
    BOTTOM_LEFT,
}
/**
 * Known metadata tags from https://docs.microsoft.com/en-us/typography/opentype/spec/meta
 */
enum ot_meta_tag_t {
    /**
     * Design languages. Text, using only
     * Basic Latin (ASCII) characters. Indicates languages and/or scripts
     * for the user audiences that the font was primarily designed for.
     */
    DESIGN_LANGUAGES,
    /**
     * Supported languages. Text, using
     * only Basic Latin (ASCII) characters. Indicates languages and/or scripts
     * that the font is declared to be capable of supporting.
     */
    SUPPORTED_LANGUAGES,
}
/**
 * From https://docs.microsoft.com/en-us/typography/opentype/spec/mvar#value-tags
 */
enum ot_metrics_tag_t {
    /**
     * horizontal ascender.
     */
    HORIZONTAL_ASCENDER,
    /**
     * horizontal descender.
     */
    HORIZONTAL_DESCENDER,
    /**
     * horizontal line gap.
     */
    HORIZONTAL_LINE_GAP,
    /**
     * horizontal clipping ascent.
     */
    HORIZONTAL_CLIPPING_ASCENT,
    /**
     * horizontal clipping descent.
     */
    HORIZONTAL_CLIPPING_DESCENT,
    /**
     * vertical ascender.
     */
    VERTICAL_ASCENDER,
    /**
     * vertical descender.
     */
    VERTICAL_DESCENDER,
    /**
     * vertical line gap.
     */
    VERTICAL_LINE_GAP,
    /**
     * horizontal caret rise.
     */
    HORIZONTAL_CARET_RISE,
    /**
     * horizontal caret run.
     */
    HORIZONTAL_CARET_RUN,
    /**
     * horizontal caret offset.
     */
    HORIZONTAL_CARET_OFFSET,
    /**
     * vertical caret rise.
     */
    VERTICAL_CARET_RISE,
    /**
     * vertical caret run.
     */
    VERTICAL_CARET_RUN,
    /**
     * vertical caret offset.
     */
    VERTICAL_CARET_OFFSET,
    /**
     * x height.
     */
    X_HEIGHT,
    /**
     * cap height.
     */
    CAP_HEIGHT,
    /**
     * subscript em x size.
     */
    SUBSCRIPT_EM_X_SIZE,
    /**
     * subscript em y size.
     */
    SUBSCRIPT_EM_Y_SIZE,
    /**
     * subscript em x offset.
     */
    SUBSCRIPT_EM_X_OFFSET,
    /**
     * subscript em y offset.
     */
    SUBSCRIPT_EM_Y_OFFSET,
    /**
     * superscript em x size.
     */
    SUPERSCRIPT_EM_X_SIZE,
    /**
     * superscript em y size.
     */
    SUPERSCRIPT_EM_Y_SIZE,
    /**
     * superscript em x offset.
     */
    SUPERSCRIPT_EM_X_OFFSET,
    /**
     * superscript em y offset.
     */
    SUPERSCRIPT_EM_Y_OFFSET,
    /**
     * strikeout size.
     */
    STRIKEOUT_SIZE,
    /**
     * strikeout offset.
     */
    STRIKEOUT_OFFSET,
    /**
     * underline size.
     */
    UNDERLINE_SIZE,
    /**
     * underline offset.
     */
    UNDERLINE_OFFSET,
}
enum script_t {
    COMMON,
    INHERITED,
    UNKNOWN,
    ARABIC,
    ARMENIAN,
    BENGALI,
    CYRILLIC,
    DEVANAGARI,
    GEORGIAN,
    GREEK,
    GUJARATI,
    GURMUKHI,
    HANGUL,
    HAN,
    HEBREW,
    HIRAGANA,
    KANNADA,
    KATAKANA,
    LAO,
    LATIN,
    MALAYALAM,
    ORIYA,
    TAMIL,
    TELUGU,
    THAI,
    TIBETAN,
    BOPOMOFO,
    BRAILLE,
    CANADIAN_SYLLABICS,
    CHEROKEE,
    ETHIOPIC,
    KHMER,
    MONGOLIAN,
    MYANMAR,
    OGHAM,
    RUNIC,
    SINHALA,
    SYRIAC,
    THAANA,
    YI,
    DESERET,
    GOTHIC,
    OLD_ITALIC,
    BUHID,
    HANUNOO,
    TAGALOG,
    TAGBANWA,
    CYPRIOT,
    LIMBU,
    LINEAR_B,
    OSMANYA,
    SHAVIAN,
    TAI_LE,
    UGARITIC,
    BUGINESE,
    COPTIC,
    GLAGOLITIC,
    KHAROSHTHI,
    NEW_TAI_LUE,
    OLD_PERSIAN,
    SYLOTI_NAGRI,
    TIFINAGH,
    BALINESE,
    CUNEIFORM,
    NKO,
    PHAGS_PA,
    PHOENICIAN,
    CARIAN,
    CHAM,
    KAYAH_LI,
    LEPCHA,
    LYCIAN,
    LYDIAN,
    OL_CHIKI,
    REJANG,
    SAURASHTRA,
    SUNDANESE,
    VAI,
    AVESTAN,
    BAMUM,
    EGYPTIAN_HIEROGLYPHS,
    IMPERIAL_ARAMAIC,
    INSCRIPTIONAL_PAHLAVI,
    INSCRIPTIONAL_PARTHIAN,
    JAVANESE,
    KAITHI,
    LISU,
    MEETEI_MAYEK,
    OLD_SOUTH_ARABIAN,
    OLD_TURKIC,
    SAMARITAN,
    TAI_THAM,
    TAI_VIET,
    BATAK,
    BRAHMI,
    MANDAIC,
    CHAKMA,
    MEROITIC_CURSIVE,
    MEROITIC_HIEROGLYPHS,
    MIAO,
    SHARADA,
    SORA_SOMPENG,
    TAKRI,
    BASSA_VAH,
    CAUCASIAN_ALBANIAN,
    DUPLOYAN,
    ELBASAN,
    GRANTHA,
    KHOJKI,
    KHUDAWADI,
    LINEAR_A,
    MAHAJANI,
    MANICHAEAN,
    MENDE_KIKAKUI,
    MODI,
    MRO,
    NABATAEAN,
    OLD_NORTH_ARABIAN,
    OLD_PERMIC,
    PAHAWH_HMONG,
    PALMYRENE,
    PAU_CIN_HAU,
    PSALTER_PAHLAVI,
    SIDDHAM,
    TIRHUTA,
    WARANG_CITI,
    AHOM,
    ANATOLIAN_HIEROGLYPHS,
    HATRAN,
    MULTANI,
    OLD_HUNGARIAN,
    SIGNWRITING,
    ADLAM,
    BHAIKSUKI,
    MARCHEN,
    OSAGE,
    TANGUT,
    NEWA,
    MASARAM_GONDI,
    NUSHU,
    SOYOMBO,
    ZANABAZAR_SQUARE,
    DOGRA,
    GUNJALA_GONDI,
    HANIFI_ROHINGYA,
    MAKASAR,
    MEDEFAIDRIN,
    OLD_SOGDIAN,
    SOGDIAN,
    ELYMAIC,
    NANDINAGARI,
    NYIAKENG_PUACHUE_HMONG,
    WANCHO,
    CHORASMIAN,
    DIVES_AKURU,
    KHITAN_SMALL_SCRIPT,
    YEZIDI,
    INVALID,
}
/**
 * `HB_UNICODE_COMBINING_CLASS_NOT_REORDERED`
 * `HB_UNICODE_COMBINING_CLASS_OVERLAY`
 * `HB_UNICODE_COMBINING_CLASS_NUKTA`
 * `HB_UNICODE_COMBINING_CLASS_KANA_VOICING`
 * `HB_UNICODE_COMBINING_CLASS_VIRAMA`
 * Data type for the Canonical_Combining_Class (ccc) property
 * from the Unicode Character Database.
 * 
 * <note>Note: newer versions of Unicode may add new values.
 * Client programs should be ready to handle any value in the 0..254 range
 * being returned from hb_unicode_combining_class().</note>
 */
enum unicode_combining_class_t {
    NOT_REORDERED,
    OVERLAY,
    NUKTA,
    KANA_VOICING,
    VIRAMA,
    CCC10,
    CCC11,
    CCC12,
    CCC13,
    CCC14,
    CCC15,
    CCC16,
    CCC17,
    CCC18,
    CCC19,
    CCC20,
    CCC21,
    CCC22,
    CCC23,
    CCC24,
    CCC25,
    CCC26,
    CCC27,
    CCC28,
    CCC29,
    CCC30,
    CCC31,
    CCC32,
    CCC33,
    CCC34,
    CCC35,
    CCC36,
    CCC84,
    CCC91,
    CCC103,
    CCC107,
    CCC118,
    CCC122,
    CCC129,
    CCC130,
    /**
     * 
     * `HB_UNICODE_COMBINING_CLASS_ATTACHED_BELOW_LEFT`
     * `HB_UNICODE_COMBINING_CLASS_ATTACHED_BELOW`
     * `HB_UNICODE_COMBINING_CLASS_ATTACHED_ABOVE`
     * `HB_UNICODE_COMBINING_CLASS_ATTACHED_ABOVE_RIGHT`
     * `HB_UNICODE_COMBINING_CLASS_BELOW_LEFT`
     * `HB_UNICODE_COMBINING_CLASS_BELOW`
     * `HB_UNICODE_COMBINING_CLASS_BELOW_RIGHT`
     * `HB_UNICODE_COMBINING_CLASS_LEFT`
     * `HB_UNICODE_COMBINING_CLASS_RIGHT`
     * `HB_UNICODE_COMBINING_CLASS_ABOVE_LEFT`
     * `HB_UNICODE_COMBINING_CLASS_ABOVE`
     * `HB_UNICODE_COMBINING_CLASS_ABOVE_RIGHT`
     * `HB_UNICODE_COMBINING_CLASS_DOUBLE_BELOW`
     * `HB_UNICODE_COMBINING_CLASS_DOUBLE_ABOVE`
     * `HB_UNICODE_COMBINING_CLASS_IOTA_SUBSCRIPT`
     */
    CCC133,
    ATTACHED_BELOW_LEFT,
    ATTACHED_BELOW,
    ATTACHED_ABOVE,
    ATTACHED_ABOVE_RIGHT,
    BELOW_LEFT,
    BELOW,
    BELOW_RIGHT,
    LEFT,
    RIGHT,
    ABOVE_LEFT,
    ABOVE,
    ABOVE_RIGHT,
    DOUBLE_BELOW,
    DOUBLE_ABOVE,
    IOTA_SUBSCRIPT,
    /**
     * 255
     */
    INVALID,
}
/**
 * Data type for the "General_Category" (gc) property from
 * the Unicode Character Database.
 */
enum unicode_general_category_t {
    CONTROL,
    FORMAT,
    UNASSIGNED,
    PRIVATE_USE,
    SURROGATE,
    LOWERCASE_LETTER,
    MODIFIER_LETTER,
    OTHER_LETTER,
    TITLECASE_LETTER,
    UPPERCASE_LETTER,
    SPACING_MARK,
    ENCLOSING_MARK,
    NON_SPACING_MARK,
    DECIMAL_NUMBER,
    LETTER_NUMBER,
    OTHER_NUMBER,
    CONNECT_PUNCTUATION,
    DASH_PUNCTUATION,
    CLOSE_PUNCTUATION,
    FINAL_PUNCTUATION,
    INITIAL_PUNCTUATION,
    OTHER_PUNCTUATION,
    OPEN_PUNCTUATION,
    CURRENCY_SYMBOL,
    MODIFIER_SYMBOL,
    MATH_SYMBOL,
    OTHER_SYMBOL,
    LINE_SEPARATOR,
    PARAGRAPH_SEPARATOR,
    SPACE_SEPARATOR,
}
enum buffer_diff_flags_t {
    EQUAL,
    CONTENT_TYPE_MISMATCH,
    LENGTH_MISMATCH,
    NOTDEF_PRESENT,
    DOTTED_CIRCLE_PRESENT,
    CODEPOINT_MISMATCH,
    CLUSTER_MISMATCH,
    GLYPH_FLAGS_MISMATCH,
    POSITION_MISMATCH,
}
enum buffer_flags_t {
    /**
     * the default buffer flag.
     */
    DEFAULT,
    /**
     * flag indicating that special handling of the beginning
     *                      of text paragraph can be applied to this buffer. Should usually
     *                      be set, unless you are passing to the buffer only part
     *                      of the text without the full context.
     */
    BOT,
    /**
     * flag indicating that special handling of the end of text
     *                      paragraph can be applied to this buffer, similar to
     *                      `HB_BUFFER_FLAG_BOT`.
     */
    EOT,
    /**
     * flag indication that character with Default_Ignorable
     *                      Unicode property should use the corresponding glyph
     *                      from the font, instead of hiding them (done by
     *                      replacing them with the space glyph and zeroing the
     *                      advance width.)  This flag takes precedence over
     *                      `HB_BUFFER_FLAG_REMOVE_DEFAULT_IGNORABLES`.
     */
    PRESERVE_DEFAULT_IGNORABLES,
    /**
     * flag indication that character with Default_Ignorable
     *                      Unicode property should be removed from glyph string
     *                      instead of hiding them (done by replacing them with the
     *                      space glyph and zeroing the advance width.)
     *                      `HB_BUFFER_FLAG_PRESERVE_DEFAULT_IGNORABLES` takes
     *                      precedence over this flag. Since: 1.8.0
     */
    REMOVE_DEFAULT_IGNORABLES,
    /**
     * flag indicating that a dotted circle should
     *                      not be inserted in the rendering of incorrect
     *                      character sequences (such at <0905 093E>). Since: 2.4
     */
    DO_NOT_INSERT_DOTTED_CIRCLE,
}
/**
 * Flags that control what glyph information are serialized in hb_buffer_serialize_glyphs().
 */
enum buffer_serialize_flags_t {
    /**
     * serialize glyph names, clusters and positions.
     */
    DEFAULT,
    /**
     * do not serialize glyph cluster.
     */
    NO_CLUSTERS,
    /**
     * do not serialize glyph position information.
     */
    NO_POSITIONS,
    /**
     * do no serialize glyph name.
     */
    NO_GLYPH_NAMES,
    /**
     * serialize glyph extents.
     */
    GLYPH_EXTENTS,
    /**
     * serialize glyph flags. Since: 1.5.0
     */
    GLYPH_FLAGS,
    /**
     * do not serialize glyph advances,
     *  glyph offsets will reflect absolute glyph positions. Since: 1.8.0
     */
    NO_ADVANCES,
}
enum glyph_flags_t {
    /**
     * Indicates that if input text is broken at the
     * 				   beginning of the cluster this glyph is part of,
     * 				   then both sides need to be re-shaped, as the
     * 				   result might be different.  On the flip side,
     * 				   it means that when this flag is not present,
     * 				   then it's safe to break the glyph-run at the
     * 				   beginning of this cluster, and the two sides
     * 				   represent the exact same result one would get
     * 				   if breaking input text at the beginning of
     * 				   this cluster and shaping the two sides
     * 				   separately.  This can be used to optimize
     * 				   paragraph layout, by avoiding re-shaping
     * 				   of each line after line-breaking, or limiting
     * 				   the reshaping to a small piece around the
     * 				   breaking point only.
     */
    UNSAFE_TO_BREAK,
    /**
     * All the currently defined flags.
     */
    DEFINED,
}
enum ot_color_palette_flags_t {
    /**
     * Default indicating that there is nothing special
     *   to note about a color palette.
     */
    DEFAULT,
    /**
     * Flag indicating that the color
     *   palette is appropriate to use when displaying the font on a light background such as white.
     */
    USABLE_WITH_LIGHT_BACKGROUND,
    /**
     * Flag indicating that the color
     *   palette is appropriate to use when displaying the font on a dark background such as black.
     */
    USABLE_WITH_DARK_BACKGROUND,
}
/**
 * Flags for math glyph parts.
 */
enum ot_math_glyph_part_flags_t {
    EXTENDER,
}
enum ot_var_axis_flags_t {
    /**
     * The axis should not be exposed directly in user interfaces.
     */
    HIDDEN,
}
/**
 * Used when getting or setting AAT feature selectors. Indicates that
 * there is no selector index corresponding to the selector of interest.
 */
const AAT_LAYOUT_NO_SELECTOR_INDEX: number
/**
 * The default code point for replacing invalid characters in a given encoding.
 * Set to U+FFFD REPLACEMENT CHARACTER.
 */
const BUFFER_REPLACEMENT_CODEPOINT_DEFAULT: number
const FEATURE_GLOBAL_START: number
const LANGUAGE_INVALID: language_t
const MAP_VALUE_INVALID: codepoint_t
const OT_LAYOUT_DEFAULT_LANGUAGE_INDEX: number
const OT_LAYOUT_NO_FEATURE_INDEX: number
const OT_LAYOUT_NO_SCRIPT_INDEX: number
const OT_LAYOUT_NO_VARIATIONS_INDEX: number
const OT_MAX_TAGS_PER_LANGUAGE: number
const OT_MAX_TAGS_PER_SCRIPT: number
const OT_VAR_NO_AXIS_INDEX: number
const SET_VALUE_INVALID: codepoint_t
const UNICODE_MAX: number
/**
 * See Unicode 6.1 for details on the maximum decomposition length.
 */
const UNICODE_MAX_DECOMPOSITION_LEN: number
const VERSION_MAJOR: number
const VERSION_MICRO: number
const VERSION_MINOR: number
const VERSION_STRING: string
function blob_copy_writable_or_fail(blob: blob_t): blob_t
function blob_create_from_file(file_name: string): blob_t
function blob_create_sub_blob(parent: blob_t, offset: number, length: number): blob_t
function blob_get_data(blob: blob_t): string[]
function blob_get_data_writable(blob: blob_t): string[]
function blob_get_empty(): blob_t
function blob_get_length(blob: blob_t): number
function blob_is_immutable(blob: blob_t): bool_t
function blob_make_immutable(blob: blob_t): void
function buffer_add(buffer: buffer_t, codepoint: codepoint_t, cluster: number): void
function buffer_add_codepoints(buffer: buffer_t, text: codepoint_t[], item_offset: number, item_length: number): void
function buffer_add_latin1(buffer: buffer_t, text: Uint8Array, item_offset: number, item_length: number): void
function buffer_add_utf16(buffer: buffer_t, text: number[], item_offset: number, item_length: number): void
function buffer_add_utf32(buffer: buffer_t, text: number[], item_offset: number, item_length: number): void
function buffer_add_utf8(buffer: buffer_t, text: Uint8Array, item_offset: number, item_length: number): void
function buffer_allocation_successful(buffer: buffer_t): bool_t
function buffer_append(buffer: buffer_t, source: buffer_t, start: number, end: number): void
function buffer_clear_contents(buffer: buffer_t): void
function buffer_create(): buffer_t
function buffer_deserialize_glyphs(buffer: buffer_t, buf: string[], font: font_t, format: buffer_serialize_format_t): [ /* returnType */ bool_t, /* end_ptr */ string ]
function buffer_deserialize_unicode(buffer: buffer_t, buf: string[], format: buffer_serialize_format_t): [ /* returnType */ bool_t, /* end_ptr */ string ]
function buffer_diff(buffer: buffer_t, reference: buffer_t, dottedcircle_glyph: codepoint_t, position_fuzz: number): buffer_diff_flags_t
function buffer_get_cluster_level(buffer: buffer_t): buffer_cluster_level_t
function buffer_get_content_type(buffer: buffer_t): buffer_content_type_t
function buffer_get_direction(buffer: buffer_t): direction_t
function buffer_get_empty(): buffer_t
function buffer_get_flags(buffer: buffer_t): buffer_flags_t
function buffer_get_glyph_infos(buffer: buffer_t): glyph_info_t[]
function buffer_get_glyph_positions(buffer: buffer_t): glyph_position_t[]
function buffer_get_invisible_glyph(buffer: buffer_t): codepoint_t
function buffer_get_language(buffer: buffer_t): language_t
function buffer_get_length(buffer: buffer_t): number
function buffer_get_replacement_codepoint(buffer: buffer_t): codepoint_t
function buffer_get_script(buffer: buffer_t): script_t
function buffer_get_segment_properties(buffer: buffer_t): /* props */ segment_properties_t
function buffer_get_unicode_funcs(buffer: buffer_t): unicode_funcs_t
function buffer_guess_segment_properties(buffer: buffer_t): void
function buffer_has_positions(buffer: buffer_t): bool_t
function buffer_normalize_glyphs(buffer: buffer_t): void
function buffer_pre_allocate(buffer: buffer_t, size: number): bool_t
function buffer_reset(buffer: buffer_t): void
function buffer_reverse(buffer: buffer_t): void
function buffer_reverse_clusters(buffer: buffer_t): void
function buffer_reverse_range(buffer: buffer_t, start: number, end: number): void
function buffer_serialize(buffer: buffer_t, start: number, end: number, font: font_t | null, format: buffer_serialize_format_t, flags: buffer_serialize_flags_t): [ /* returnType */ number, /* buf */ Uint8Array, /* buf_consumed */ number | null ]
function buffer_serialize_format_from_string(str: Uint8Array): buffer_serialize_format_t
function buffer_serialize_format_to_string(format: buffer_serialize_format_t): string
function buffer_serialize_glyphs(buffer: buffer_t, start: number, end: number, font: font_t | null, format: buffer_serialize_format_t, flags: buffer_serialize_flags_t): [ /* returnType */ number, /* buf */ Uint8Array, /* buf_consumed */ number | null ]
function buffer_serialize_list_formats(): string[]
function buffer_serialize_unicode(buffer: buffer_t, start: number, end: number, format: buffer_serialize_format_t, flags: buffer_serialize_flags_t): [ /* returnType */ number, /* buf */ Uint8Array, /* buf_consumed */ number | null ]
function buffer_set_cluster_level(buffer: buffer_t, cluster_level: buffer_cluster_level_t): void
function buffer_set_content_type(buffer: buffer_t, content_type: buffer_content_type_t): void
function buffer_set_direction(buffer: buffer_t, direction: direction_t): void
function buffer_set_flags(buffer: buffer_t, flags: buffer_flags_t): void
function buffer_set_invisible_glyph(buffer: buffer_t, invisible: codepoint_t): void
function buffer_set_language(buffer: buffer_t, language: language_t): void
function buffer_set_length(buffer: buffer_t, length: number): bool_t
function buffer_set_message_func(buffer: buffer_t, func: buffer_message_func_t): void
function buffer_set_replacement_codepoint(buffer: buffer_t, replacement: codepoint_t): void
function buffer_set_script(buffer: buffer_t, script: script_t): void
function buffer_set_segment_properties(buffer: buffer_t, props: segment_properties_t): void
function buffer_set_unicode_funcs(buffer: buffer_t, unicode_funcs: unicode_funcs_t): void
function color_get_alpha(color: color_t): number
function color_get_blue(color: color_t): number
function color_get_green(color: color_t): number
function color_get_red(color: color_t): number
function direction_from_string(str: Uint8Array): direction_t
function direction_to_string(direction: direction_t): string
function face_builder_add_table(face: face_t, tag: tag_t, blob: blob_t): bool_t
function face_builder_create(): face_t
function face_collect_unicodes(face: face_t, out: set_t): void
function face_collect_variation_selectors(face: face_t, out: set_t): void
function face_collect_variation_unicodes(face: face_t, variation_selector: codepoint_t, out: set_t): void
function face_count(blob: blob_t): number
function face_create(blob: blob_t, index: number): face_t
function face_create_for_tables(reference_table_func: reference_table_func_t): face_t
function face_get_empty(): face_t
function face_get_glyph_count(face: face_t): number
function face_get_index(face: face_t): number
function face_get_table_tags(face: face_t, start_offset: number): [ /* returnType */ number, /* table_tags */ tag_t[] ]
function face_get_upem(face: face_t): number
function face_is_immutable(face: face_t): bool_t
function face_make_immutable(face: face_t): void
function face_reference_blob(face: face_t): blob_t
function face_reference_table(face: face_t, tag: tag_t): blob_t
function face_set_glyph_count(face: face_t, glyph_count: number): void
function face_set_index(face: face_t, index: number): void
function face_set_upem(face: face_t, upem: number): void
function feature_from_string(str: Uint8Array): [ /* returnType */ bool_t, /* feature */ feature_t ]
function feature_to_string(feature: feature_t): /* buf */ string[]
function font_add_glyph_origin_for_direction(font: font_t, glyph: codepoint_t, direction: direction_t): [ /* x */ position_t, /* y */ position_t ]
function font_create(face: face_t): font_t
function font_create_sub_font(parent: font_t): font_t
function font_funcs_create(): font_funcs_t
function font_funcs_get_empty(): font_funcs_t
function font_funcs_is_immutable(ffuncs: font_funcs_t): bool_t
function font_funcs_make_immutable(ffuncs: font_funcs_t): void
function font_funcs_set_font_h_extents_func(ffuncs: font_funcs_t, func: font_get_font_h_extents_func_t): void
function font_funcs_set_font_v_extents_func(ffuncs: font_funcs_t, func: font_get_font_v_extents_func_t): void
function font_funcs_set_glyph_contour_point_func(ffuncs: font_funcs_t, func: font_get_glyph_contour_point_func_t): void
function font_funcs_set_glyph_extents_func(ffuncs: font_funcs_t, func: font_get_glyph_extents_func_t): void
function font_funcs_set_glyph_from_name_func(ffuncs: font_funcs_t, func: font_get_glyph_from_name_func_t): void
function font_funcs_set_glyph_func(ffuncs: font_funcs_t, func: font_get_glyph_func_t): void
function font_funcs_set_glyph_h_advance_func(ffuncs: font_funcs_t, func: font_get_glyph_h_advance_func_t): void
function font_funcs_set_glyph_h_advances_func(ffuncs: font_funcs_t, func: font_get_glyph_h_advances_func_t): void
function font_funcs_set_glyph_h_kerning_func(ffuncs: font_funcs_t, func: font_get_glyph_h_kerning_func_t): void
function font_funcs_set_glyph_h_origin_func(ffuncs: font_funcs_t, func: font_get_glyph_h_origin_func_t): void
function font_funcs_set_glyph_name_func(ffuncs: font_funcs_t, func: font_get_glyph_name_func_t): void
function font_funcs_set_glyph_v_advance_func(ffuncs: font_funcs_t, func: font_get_glyph_v_advance_func_t): void
function font_funcs_set_glyph_v_advances_func(ffuncs: font_funcs_t, func: font_get_glyph_v_advances_func_t): void
function font_funcs_set_glyph_v_kerning_func(ffuncs: font_funcs_t, func: font_get_glyph_v_kerning_func_t): void
function font_funcs_set_glyph_v_origin_func(ffuncs: font_funcs_t, func: font_get_glyph_v_origin_func_t): void
function font_funcs_set_nominal_glyph_func(ffuncs: font_funcs_t, func: font_get_nominal_glyph_func_t): void
function font_funcs_set_nominal_glyphs_func(ffuncs: font_funcs_t, func: font_get_nominal_glyphs_func_t): void
function font_funcs_set_variation_glyph_func(ffuncs: font_funcs_t, func: font_get_variation_glyph_func_t): void
function font_get_empty(): font_t
function font_get_extents_for_direction(font: font_t, direction: direction_t): /* extents */ font_extents_t
function font_get_face(font: font_t): face_t
function font_get_glyph(font: font_t, unicode: codepoint_t, variation_selector: codepoint_t): [ /* returnType */ bool_t, /* glyph */ codepoint_t ]
function font_get_glyph_advance_for_direction(font: font_t, glyph: codepoint_t, direction: direction_t): [ /* x */ position_t, /* y */ position_t ]
function font_get_glyph_advances_for_direction(font: font_t, direction: direction_t, count: number, first_glyph: codepoint_t, glyph_stride: number, first_advance: position_t, advance_stride: number): void
function font_get_glyph_contour_point(font: font_t, glyph: codepoint_t, point_index: number): [ /* returnType */ bool_t, /* x */ position_t, /* y */ position_t ]
function font_get_glyph_contour_point_for_origin(font: font_t, glyph: codepoint_t, point_index: number, direction: direction_t): [ /* returnType */ bool_t, /* x */ position_t, /* y */ position_t ]
function font_get_glyph_extents(font: font_t, glyph: codepoint_t): [ /* returnType */ bool_t, /* extents */ glyph_extents_t ]
function font_get_glyph_extents_for_origin(font: font_t, glyph: codepoint_t, direction: direction_t): [ /* returnType */ bool_t, /* extents */ glyph_extents_t ]
function font_get_glyph_from_name(font: font_t, name: string[]): [ /* returnType */ bool_t, /* glyph */ codepoint_t ]
function font_get_glyph_h_advance(font: font_t, glyph: codepoint_t): position_t
function font_get_glyph_h_advances(font: font_t, count: number, first_glyph: codepoint_t, glyph_stride: number, first_advance: position_t, advance_stride: number): void
function font_get_glyph_h_kerning(font: font_t, left_glyph: codepoint_t, right_glyph: codepoint_t): position_t
function font_get_glyph_h_origin(font: font_t, glyph: codepoint_t): [ /* returnType */ bool_t, /* x */ position_t, /* y */ position_t ]
function font_get_glyph_kerning_for_direction(font: font_t, first_glyph: codepoint_t, second_glyph: codepoint_t, direction: direction_t): [ /* x */ position_t, /* y */ position_t ]
function font_get_glyph_name(font: font_t, glyph: codepoint_t, name: string[]): bool_t
function font_get_glyph_origin_for_direction(font: font_t, glyph: codepoint_t, direction: direction_t): [ /* x */ position_t, /* y */ position_t ]
function font_get_glyph_v_advance(font: font_t, glyph: codepoint_t): position_t
function font_get_glyph_v_advances(font: font_t, count: number, first_glyph: codepoint_t, glyph_stride: number, first_advance: position_t, advance_stride: number): void
function font_get_glyph_v_kerning(font: font_t, top_glyph: codepoint_t, bottom_glyph: codepoint_t): position_t
function font_get_glyph_v_origin(font: font_t, glyph: codepoint_t): [ /* returnType */ bool_t, /* x */ position_t, /* y */ position_t ]
function font_get_h_extents(font: font_t): [ /* returnType */ bool_t, /* extents */ font_extents_t ]
function font_get_nominal_glyph(font: font_t, unicode: codepoint_t): [ /* returnType */ bool_t, /* glyph */ codepoint_t ]
function font_get_nominal_glyphs(font: font_t, count: number, first_unicode: codepoint_t, unicode_stride: number, first_glyph: codepoint_t, glyph_stride: number): number
function font_get_parent(font: font_t): font_t
function font_get_ppem(font: font_t): [ /* x_ppem */ number, /* y_ppem */ number ]
function font_get_ptem(font: font_t): number
function font_get_scale(font: font_t): [ /* x_scale */ number, /* y_scale */ number ]
function font_get_v_extents(font: font_t): [ /* returnType */ bool_t, /* extents */ font_extents_t ]
function font_get_var_coords_normalized(font: font_t, length: number): number
function font_get_variation_glyph(font: font_t, unicode: codepoint_t, variation_selector: codepoint_t): [ /* returnType */ bool_t, /* glyph */ codepoint_t ]
function font_glyph_from_string(font: font_t, s: Uint8Array): [ /* returnType */ bool_t, /* glyph */ codepoint_t ]
function font_glyph_to_string(font: font_t, glyph: codepoint_t, s: string[]): void
function font_is_immutable(font: font_t): bool_t
function font_make_immutable(font: font_t): void
function font_set_face(font: font_t, face: face_t): void
function font_set_funcs(font: font_t, klass: font_funcs_t): void
function font_set_funcs_data(font: font_t, font_data: object | null): void
function font_set_parent(font: font_t, parent: font_t): void
function font_set_ppem(font: font_t, x_ppem: number, y_ppem: number): void
function font_set_ptem(font: font_t, ptem: number): void
function font_set_scale(font: font_t, x_scale: number, y_scale: number): void
function font_set_var_coords_design(font: font_t, coords: number, coords_length: number): void
function font_set_var_coords_normalized(font: font_t, coords: number, coords_length: number): void
function font_set_var_named_instance(font: font_t, instance_index: number): void
function font_set_variations(font: font_t, variations: variation_t, variations_length: number): void
function font_subtract_glyph_origin_for_direction(font: font_t, glyph: codepoint_t, direction: direction_t): [ /* x */ position_t, /* y */ position_t ]
function ft_font_changed(font: font_t): void
function ft_font_get_load_flags(font: font_t): number
function ft_font_set_funcs(font: font_t): void
function ft_font_set_load_flags(font: font_t, load_flags: number): void
function ft_font_unlock_face(font: font_t): void
function glib_blob_create(gbytes: GLib.Bytes): blob_t
function glib_get_unicode_funcs(): unicode_funcs_t
function glib_script_from_script(script: script_t): GLib.UnicodeScript
function glib_script_to_script(script: GLib.UnicodeScript): script_t
function glyph_info_get_glyph_flags(info: glyph_info_t): glyph_flags_t
function language_from_string(str: Uint8Array): language_t
function language_get_default(): language_t
function language_to_string(language: language_t): string
function map_allocation_successful(map: map_t): bool_t
function map_clear(map: map_t): void
function map_create(): map_t
function map_del(map: map_t, key: codepoint_t): void
function map_get(map: map_t, key: codepoint_t): codepoint_t
function map_get_empty(): map_t
function map_get_population(map: map_t): number
function map_has(map: map_t, key: codepoint_t): bool_t
function map_is_empty(map: map_t): bool_t
function map_set(map: map_t, key: codepoint_t, value: codepoint_t): void
function ot_color_glyph_get_layers(face: face_t, glyph: codepoint_t, start_offset: number): [ /* returnType */ number, /* layers */ ot_color_layer_t[] | null ]
function ot_color_glyph_reference_png(font: font_t, glyph: codepoint_t): blob_t
function ot_color_glyph_reference_svg(face: face_t, glyph: codepoint_t): blob_t
function ot_color_has_layers(face: face_t): bool_t
function ot_color_has_palettes(face: face_t): bool_t
function ot_color_has_png(face: face_t): bool_t
function ot_color_has_svg(face: face_t): bool_t
function ot_color_palette_color_get_name_id(face: face_t, color_index: number): ot_name_id_t
function ot_color_palette_get_colors(face: face_t, palette_index: number, start_offset: number): [ /* returnType */ number, /* colors */ color_t[] | null ]
function ot_color_palette_get_count(face: face_t): number
function ot_color_palette_get_flags(face: face_t, palette_index: number): ot_color_palette_flags_t
function ot_color_palette_get_name_id(face: face_t, palette_index: number): ot_name_id_t
function ot_font_set_funcs(font: font_t): void
function ot_layout_collect_features(face: face_t, table_tag: tag_t, scripts: tag_t, languages: tag_t, features: tag_t): /* feature_indexes */ set_t
function ot_layout_collect_lookups(face: face_t, table_tag: tag_t, scripts: tag_t, languages: tag_t, features: tag_t): /* lookup_indexes */ set_t
function ot_layout_feature_get_characters(face: face_t, table_tag: tag_t, feature_index: number, start_offset: number): [ /* returnType */ number, /* characters */ codepoint_t[] ]
function ot_layout_feature_get_lookups(face: face_t, table_tag: tag_t, feature_index: number, start_offset: number): [ /* returnType */ number, /* lookup_indexes */ number[] ]
function ot_layout_feature_get_name_ids(face: face_t, table_tag: tag_t, feature_index: number): [ /* returnType */ bool_t, /* label_id */ ot_name_id_t | null, /* tooltip_id */ ot_name_id_t | null, /* sample_id */ ot_name_id_t | null, /* num_named_parameters */ number | null, /* first_param_id */ ot_name_id_t | null ]
function ot_layout_feature_with_variations_get_lookups(face: face_t, table_tag: tag_t, feature_index: number, variations_index: number, start_offset: number): [ /* returnType */ number, /* lookup_indexes */ number[] ]
function ot_layout_get_attach_points(face: face_t, glyph: codepoint_t, start_offset: number): [ /* returnType */ number, /* point_array */ number[] ]
function ot_layout_get_baseline(font: font_t, baseline_tag: ot_layout_baseline_tag_t, direction: direction_t, script_tag: tag_t, language_tag: tag_t): [ /* returnType */ bool_t, /* coord */ position_t ]
function ot_layout_get_glyph_class(face: face_t, glyph: codepoint_t): ot_layout_glyph_class_t
function ot_layout_get_glyphs_in_class(face: face_t, klass: ot_layout_glyph_class_t): /* glyphs */ set_t
function ot_layout_get_ligature_carets(font: font_t, direction: direction_t, glyph: codepoint_t, start_offset: number): [ /* returnType */ number, /* caret_array */ position_t[] ]
function ot_layout_get_size_params(face: face_t): [ /* returnType */ bool_t, /* design_size */ number, /* subfamily_id */ number, /* subfamily_name_id */ ot_name_id_t, /* range_start */ number, /* range_end */ number ]
function ot_layout_has_glyph_classes(face: face_t): bool_t
function ot_layout_has_positioning(face: face_t): bool_t
function ot_layout_has_substitution(face: face_t): bool_t
function ot_layout_language_find_feature(face: face_t, table_tag: tag_t, script_index: number, language_index: number, feature_tag: tag_t): [ /* returnType */ bool_t, /* feature_index */ number ]
function ot_layout_language_get_feature_indexes(face: face_t, table_tag: tag_t, script_index: number, language_index: number, start_offset: number): [ /* returnType */ number, /* feature_indexes */ number[] ]
function ot_layout_language_get_feature_tags(face: face_t, table_tag: tag_t, script_index: number, language_index: number, start_offset: number): [ /* returnType */ number, /* feature_tags */ tag_t[] ]
function ot_layout_language_get_required_feature(face: face_t, table_tag: tag_t, script_index: number, language_index: number): [ /* returnType */ bool_t, /* feature_index */ number, /* feature_tag */ tag_t ]
function ot_layout_language_get_required_feature_index(face: face_t, table_tag: tag_t, script_index: number, language_index: number): [ /* returnType */ bool_t, /* feature_index */ number ]
function ot_layout_lookup_collect_glyphs(face: face_t, table_tag: tag_t, lookup_index: number): [ /* glyphs_before */ set_t, /* glyphs_input */ set_t, /* glyphs_after */ set_t, /* glyphs_output */ set_t ]
function ot_layout_lookup_get_glyph_alternates(face: face_t, lookup_index: number, glyph: codepoint_t, start_offset: number): [ /* returnType */ number, /* alternate_glyphs */ codepoint_t[] ]
function ot_layout_lookup_substitute_closure(face: face_t, lookup_index: number): /* glyphs */ set_t
function ot_layout_lookup_would_substitute(face: face_t, lookup_index: number, glyphs: codepoint_t, glyphs_length: number, zero_context: bool_t): bool_t
function ot_layout_lookups_substitute_closure(face: face_t, lookups: set_t): /* glyphs */ set_t
function ot_layout_script_find_language(face: face_t, table_tag: tag_t, script_index: number, language_tag: tag_t, language_index: number): bool_t
function ot_layout_script_get_language_tags(face: face_t, table_tag: tag_t, script_index: number, start_offset: number): [ /* returnType */ number, /* language_tags */ tag_t[] ]
function ot_layout_script_select_language(face: face_t, table_tag: tag_t, script_index: number, language_count: number, language_tags: tag_t): [ /* returnType */ bool_t, /* language_index */ number ]
function ot_layout_table_choose_script(face: face_t, table_tag: tag_t, script_tags: tag_t): [ /* returnType */ bool_t, /* script_index */ number, /* chosen_script */ tag_t ]
function ot_layout_table_find_feature_variations(face: face_t, table_tag: tag_t, coords: number, num_coords: number): [ /* returnType */ bool_t, /* variations_index */ number ]
function ot_layout_table_find_script(face: face_t, table_tag: tag_t, script_tag: tag_t): [ /* returnType */ bool_t, /* script_index */ number ]
function ot_layout_table_get_feature_tags(face: face_t, table_tag: tag_t, start_offset: number): [ /* returnType */ number, /* feature_tags */ tag_t[] ]
function ot_layout_table_get_lookup_count(face: face_t, table_tag: tag_t): number
function ot_layout_table_get_script_tags(face: face_t, table_tag: tag_t, start_offset: number): [ /* returnType */ number, /* script_tags */ tag_t[] ]
function ot_layout_table_select_script(face: face_t, table_tag: tag_t, script_count: number, script_tags: tag_t): [ /* returnType */ bool_t, /* script_index */ number, /* chosen_script */ tag_t ]
function ot_math_get_constant(font: font_t, constant: ot_math_constant_t): position_t
function ot_math_get_glyph_assembly(font: font_t, glyph: codepoint_t, direction: direction_t, start_offset: number): [ /* returnType */ number, /* parts */ ot_math_glyph_part_t[], /* italics_correction */ position_t ]
function ot_math_get_glyph_italics_correction(font: font_t, glyph: codepoint_t): position_t
function ot_math_get_glyph_kerning(font: font_t, glyph: codepoint_t, kern: ot_math_kern_t, correction_height: position_t): position_t
function ot_math_get_glyph_top_accent_attachment(font: font_t, glyph: codepoint_t): position_t
function ot_math_get_glyph_variants(font: font_t, glyph: codepoint_t, direction: direction_t, start_offset: number): [ /* returnType */ number, /* variants */ ot_math_glyph_variant_t[] ]
function ot_math_get_min_connector_overlap(font: font_t, direction: direction_t): position_t
function ot_math_has_data(face: face_t): bool_t
function ot_math_is_glyph_extended_shape(face: face_t, glyph: codepoint_t): bool_t
function ot_meta_get_entry_tags(face: face_t, start_offset: number): [ /* returnType */ number, /* entries */ ot_meta_tag_t[] ]
function ot_meta_reference_entry(face: face_t, meta_tag: ot_meta_tag_t): blob_t
function ot_metrics_get_position(font: font_t, metrics_tag: ot_metrics_tag_t): [ /* returnType */ bool_t, /* position */ position_t | null ]
function ot_metrics_get_variation(font: font_t, metrics_tag: ot_metrics_tag_t): number
function ot_metrics_get_x_variation(font: font_t, metrics_tag: ot_metrics_tag_t): position_t
function ot_metrics_get_y_variation(font: font_t, metrics_tag: ot_metrics_tag_t): position_t
function ot_name_get_utf16(face: face_t, name_id: ot_name_id_t, language: language_t): [ /* returnType */ number, /* text */ number[] ]
function ot_name_get_utf32(face: face_t, name_id: ot_name_id_t, language: language_t): [ /* returnType */ number, /* text */ number[] ]
function ot_name_get_utf8(face: face_t, name_id: ot_name_id_t, language: language_t): [ /* returnType */ number, /* text */ string[] ]
function ot_name_list_names(face: face_t): ot_name_entry_t[]
function ot_shape_glyphs_closure(font: font_t, buffer: buffer_t, features: feature_t[]): /* glyphs */ set_t
function ot_tag_from_language(language: language_t): tag_t
function ot_tag_to_language(tag: tag_t): language_t
function ot_tag_to_script(tag: tag_t): script_t
function ot_tags_from_script(script: script_t, script_tag_1: tag_t, script_tag_2: tag_t): void
function ot_tags_from_script_and_language(script: script_t, language: language_t, script_count?: number | null, language_count?: number | null): [ /* script_tags */ tag_t | null, /* language_tags */ tag_t | null ]
function ot_tags_to_script_and_language(script_tag: tag_t, language_tag: tag_t, script?: script_t | null, language?: language_t | null): void
function ot_var_find_axis(face: face_t, axis_tag: tag_t, axis_index: number): [ /* returnType */ bool_t, /* axis_info */ ot_var_axis_t ]
function ot_var_find_axis_info(face: face_t, axis_tag: tag_t): [ /* returnType */ bool_t, /* axis_info */ ot_var_axis_info_t ]
function ot_var_get_axes(face: face_t, start_offset: number): [ /* returnType */ number, /* axes_array */ ot_var_axis_t[] ]
function ot_var_get_axis_count(face: face_t): number
function ot_var_get_axis_infos(face: face_t, start_offset: number): [ /* returnType */ number, /* axes_array */ ot_var_axis_info_t[] ]
function ot_var_get_named_instance_count(face: face_t): number
function ot_var_has_data(face: face_t): bool_t
function ot_var_named_instance_get_design_coords(face: face_t, instance_index: number): [ /* returnType */ number, /* coords */ number[] ]
function ot_var_named_instance_get_postscript_name_id(face: face_t, instance_index: number): ot_name_id_t
function ot_var_named_instance_get_subfamily_name_id(face: face_t, instance_index: number): ot_name_id_t
function ot_var_normalize_coords(face: face_t, coords_length: number, design_coords: number): /* normalized_coords */ number
function ot_var_normalize_variations(face: face_t, variations: variation_t, variations_length: number): /* coords */ number[]
function script_from_iso15924_tag(tag: tag_t): script_t
function script_from_string(str: Uint8Array): script_t
function script_get_horizontal_direction(script: script_t): direction_t
function script_to_iso15924_tag(script: script_t): tag_t
function segment_properties_equal(a: segment_properties_t, b: segment_properties_t): bool_t
function segment_properties_hash(p: segment_properties_t): number
function set_add(set: set_t, codepoint: codepoint_t): void
function set_add_range(set: set_t, first: codepoint_t, last: codepoint_t): void
function set_allocation_successful(set: set_t): bool_t
function set_clear(set: set_t): void
function set_create(): set_t
function set_del(set: set_t, codepoint: codepoint_t): void
function set_del_range(set: set_t, first: codepoint_t, last: codepoint_t): void
function set_get_empty(): set_t
function set_get_max(set: set_t): codepoint_t
function set_get_min(set: set_t): codepoint_t
function set_get_population(set: set_t): number
function set_has(set: set_t, codepoint: codepoint_t): bool_t
function set_intersect(set: set_t, other: set_t): void
function set_invert(set: set_t): void
function set_is_empty(set: set_t): bool_t
function set_is_equal(set: set_t, other: set_t): bool_t
function set_is_subset(set: set_t, larger_set: set_t): bool_t
function set_next(set: set_t, codepoint: codepoint_t): [ /* returnType */ bool_t, /* codepoint */ codepoint_t ]
function set_next_range(set: set_t, last: codepoint_t): [ /* returnType */ bool_t, /* first */ codepoint_t, /* last */ codepoint_t ]
function set_previous(set: set_t, codepoint: codepoint_t): [ /* returnType */ bool_t, /* codepoint */ codepoint_t ]
function set_previous_range(set: set_t, first: codepoint_t): [ /* returnType */ bool_t, /* first */ codepoint_t, /* last */ codepoint_t ]
function set_set(set: set_t, other: set_t): void
function set_subtract(set: set_t, other: set_t): void
function set_symmetric_difference(set: set_t, other: set_t): void
function set_union(set: set_t, other: set_t): void
function shape(font: font_t, buffer: buffer_t, features: feature_t[] | null): void
function shape_full(font: font_t, buffer: buffer_t, features: feature_t[] | null, shaper_list?: string[] | null): bool_t
function shape_list_shapers(): string[]
function shape_plan_create(face: face_t, props: segment_properties_t, user_features: feature_t[], shaper_list: string[]): shape_plan_t
function shape_plan_create2(face: face_t, props: segment_properties_t, user_features: feature_t[], coords: number[], shaper_list: string[]): shape_plan_t
function shape_plan_create_cached(face: face_t, props: segment_properties_t, user_features: feature_t[], shaper_list: string[]): shape_plan_t
function shape_plan_create_cached2(face: face_t, props: segment_properties_t, user_features: feature_t[], coords: number[], shaper_list: string[]): shape_plan_t
function shape_plan_execute(shape_plan: shape_plan_t, font: font_t, buffer: buffer_t, features: feature_t[]): bool_t
function shape_plan_get_empty(): shape_plan_t
function shape_plan_get_shaper(shape_plan: shape_plan_t): string
function tag_from_string(str: Uint8Array): tag_t
function tag_to_string(tag: tag_t): /* buf */ Uint8Array
function unicode_combining_class(ufuncs: unicode_funcs_t, unicode: codepoint_t): unicode_combining_class_t
function unicode_compose(ufuncs: unicode_funcs_t, a: codepoint_t, b: codepoint_t): [ /* returnType */ bool_t, /* ab */ codepoint_t ]
function unicode_decompose(ufuncs: unicode_funcs_t, ab: codepoint_t): [ /* returnType */ bool_t, /* a */ codepoint_t, /* b */ codepoint_t ]
function unicode_decompose_compatibility(ufuncs: unicode_funcs_t, u: codepoint_t): [ /* returnType */ number, /* decomposed */ codepoint_t ]
function unicode_eastasian_width(ufuncs: unicode_funcs_t, unicode: codepoint_t): number
function unicode_funcs_create(parent?: unicode_funcs_t | null): unicode_funcs_t
function unicode_funcs_get_default(): unicode_funcs_t
function unicode_funcs_get_empty(): unicode_funcs_t
function unicode_funcs_get_parent(ufuncs: unicode_funcs_t): unicode_funcs_t
function unicode_funcs_is_immutable(ufuncs: unicode_funcs_t): bool_t
function unicode_funcs_make_immutable(ufuncs: unicode_funcs_t): void
function unicode_funcs_set_combining_class_func(ufuncs: unicode_funcs_t, func: unicode_combining_class_func_t): void
function unicode_funcs_set_compose_func(ufuncs: unicode_funcs_t, func: unicode_compose_func_t): void
function unicode_funcs_set_decompose_compatibility_func(ufuncs: unicode_funcs_t, func: unicode_decompose_compatibility_func_t): void
function unicode_funcs_set_decompose_func(ufuncs: unicode_funcs_t, func: unicode_decompose_func_t): void
function unicode_funcs_set_eastasian_width_func(ufuncs: unicode_funcs_t, func: unicode_eastasian_width_func_t): void
function unicode_funcs_set_general_category_func(ufuncs: unicode_funcs_t, func: unicode_general_category_func_t): void
function unicode_funcs_set_mirroring_func(ufuncs: unicode_funcs_t, func: unicode_mirroring_func_t): void
function unicode_funcs_set_script_func(ufuncs: unicode_funcs_t, func: unicode_script_func_t): void
function unicode_general_category(ufuncs: unicode_funcs_t, unicode: codepoint_t): unicode_general_category_t
function unicode_mirroring(ufuncs: unicode_funcs_t, unicode: codepoint_t): codepoint_t
function unicode_script(ufuncs: unicode_funcs_t, unicode: codepoint_t): script_t
function variation_from_string(str: string, len: number, variation: variation_t): bool_t
function variation_to_string(variation: variation_t, buf: string, size: number): void
function version(): [ /* major */ number, /* minor */ number, /* micro */ number ]
function version_atleast(major: number, minor: number, micro: number): bool_t
function version_string(): string
interface buffer_message_func_t {
    (buffer: buffer_t, font: font_t, message: string): bool_t
}
interface destroy_func_t {
    (): void
}
interface font_get_font_extents_func_t {
    (font: font_t, font_data: object | null, extents: font_extents_t): bool_t
}
interface font_get_glyph_advance_func_t {
    (font: font_t, font_data: object | null, glyph: codepoint_t): position_t
}
interface font_get_glyph_advances_func_t {
    (font: font_t, font_data: object | null, count: number, first_glyph: codepoint_t, glyph_stride: number, first_advance: position_t, advance_stride: number): void
}
interface font_get_glyph_contour_point_func_t {
    (font: font_t, font_data: object | null, glyph: codepoint_t, point_index: number, x: position_t, y: position_t): bool_t
}
interface font_get_glyph_extents_func_t {
    (font: font_t, font_data: object | null, glyph: codepoint_t, extents: glyph_extents_t): bool_t
}
interface font_get_glyph_from_name_func_t {
    (font: font_t, font_data: object | null, name: string, len: number, glyph: codepoint_t): bool_t
}
interface font_get_glyph_func_t {
    (font: font_t, font_data: object | null, unicode: codepoint_t, variation_selector: codepoint_t, glyph: codepoint_t): bool_t
}
interface font_get_glyph_kerning_func_t {
    (font: font_t, font_data: object | null, first_glyph: codepoint_t, second_glyph: codepoint_t): position_t
}
interface font_get_glyph_name_func_t {
    (font: font_t, font_data: object | null, glyph: codepoint_t, name: string, size: number): bool_t
}
interface font_get_glyph_origin_func_t {
    (font: font_t, font_data: object | null, glyph: codepoint_t, x: position_t, y: position_t): bool_t
}
interface font_get_nominal_glyph_func_t {
    (font: font_t, font_data: object | null, unicode: codepoint_t, glyph: codepoint_t): bool_t
}
interface font_get_nominal_glyphs_func_t {
    (font: font_t, font_data: object | null, count: number, first_unicode: codepoint_t, unicode_stride: number, first_glyph: codepoint_t, glyph_stride: number): number
}
interface font_get_variation_glyph_func_t {
    (font: font_t, font_data: object | null, unicode: codepoint_t, variation_selector: codepoint_t, glyph: codepoint_t): bool_t
}
interface reference_table_func_t {
    (face: face_t, tag: tag_t): blob_t
}
/**
 * A virtual method for the #hb_unicode_funcs_t structure.
 * 
 * This method should retrieve the Canonical Combining Class (ccc)
 * property for a specified Unicode code point.
 */
interface unicode_combining_class_func_t {
    (ufuncs: unicode_funcs_t, unicode: codepoint_t): unicode_combining_class_t
}
/**
 * A virtual method for the #hb_unicode_funcs_t structure.
 * 
 * This method should compose a sequence of two input Unicode code
 * points by canonical equivalence, returning the composed code
 * point in a #hb_codepoint_t output parameter (if successful).
 * The method must return an #hb_bool_t indicating the success
 * of the composition.
 */
interface unicode_compose_func_t {
    (ufuncs: unicode_funcs_t, a: codepoint_t, b: codepoint_t, ab: codepoint_t): bool_t
}
/**
 * Fully decompose `u` to its Unicode compatibility decomposition. The codepoints of the decomposition will be written to `decomposed`.
 * The complete length of the decomposition will be returned.
 * 
 * If `u` has no compatibility decomposition, zero should be returned.
 * 
 * The Unicode standard guarantees that a buffer of length %HB_UNICODE_MAX_DECOMPOSITION_LEN codepoints will always be sufficient for any
 * compatibility decomposition plus an terminating value of 0.  Consequently, `decompose` must be allocated by the caller to be at least this length.  Implementations
 * of this function type must ensure that they do not write past the provided array.
 */
interface unicode_decompose_compatibility_func_t {
    (ufuncs: unicode_funcs_t, u: codepoint_t, decomposed: codepoint_t): number
}
/**
 * A virtual method for the #hb_unicode_funcs_t structure.
 * 
 * This method should decompose an input Unicode code point,
 * returning the two decomposed code points in #hb_codepoint_t
 * output parameters (if successful). The method must return an
 * #hb_bool_t indicating the success of the composition.
 */
interface unicode_decompose_func_t {
    (ufuncs: unicode_funcs_t, ab: codepoint_t, a: codepoint_t, b: codepoint_t): bool_t
}
interface unicode_eastasian_width_func_t {
    (ufuncs: unicode_funcs_t, unicode: codepoint_t): number
}
/**
 * A virtual method for the #hb_unicode_funcs_t structure.
 * 
 * This method should retrieve the General Category property for
 * a specified Unicode code point.
 */
interface unicode_general_category_func_t {
    (ufuncs: unicode_funcs_t, unicode: codepoint_t): unicode_general_category_t
}
/**
 * A virtual method for the #hb_unicode_funcs_t structure.
 * 
 * This method should retrieve the Bi-Directional Mirroring Glyph
 * code point for a specified Unicode code point.
 * 
 * <note>Note: If a code point does not have a specified
 * Bi-Directional Mirroring Glyph defined, the method should
 * return the original code point.</note>
 */
interface unicode_mirroring_func_t {
    (ufuncs: unicode_funcs_t, unicode: codepoint_t): codepoint_t
}
/**
 * A virtual method for the #hb_unicode_funcs_t structure.
 * 
 * This method should retrieve the Script property for a
 * specified Unicode code point.
 */
interface unicode_script_func_t {
    (ufuncs: unicode_funcs_t, unicode: codepoint_t): script_t
}
class blob_t {
    static name: string
}
class buffer_t {
    static name: string
}
class face_t {
    static name: string
}
class feature_t {
    /* Fields of HarfBuzz-0.0.HarfBuzz.feature_t */
    /**
     * a feature tag
     */
    readonly tag: tag_t
    /**
     * 0 disables the feature, non-zero (usually 1) enables the feature.
     * For features implemented as lookup type 3 (like 'salt') the `value` is a one
     * based index into the alternates.
     */
    readonly value: number
    /**
     * the cluster to start applying this feature setting (inclusive).
     */
    readonly start: number
    /**
     * the cluster to end applying this feature setting (exclusive).
     */
    readonly end: number
    /* Methods of HarfBuzz-0.0.HarfBuzz.feature_t */
    /**
     * Converts a #hb_feature_t into a %NULL-terminated string in the format
     * understood by hb_feature_from_string(). The client in responsible for
     * allocating big enough size for `buf,` 128 bytes is more than enough.
     */
    _string(): /* buf */ string[]
    static name: string
}
class font_extents_t {
    /* Fields of HarfBuzz-0.0.HarfBuzz.font_extents_t */
    readonly ascender: position_t
    readonly descender: position_t
    readonly line_gap: position_t
    static name: string
}
class font_funcs_t {
    static name: string
}
class font_t {
    static name: string
}
class glyph_extents_t {
    /* Fields of HarfBuzz-0.0.HarfBuzz.glyph_extents_t */
    readonly x_bearing: position_t
    readonly y_bearing: position_t
    readonly width: position_t
    readonly height: position_t
    static name: string
}
class glyph_info_t {
    /* Fields of HarfBuzz-0.0.HarfBuzz.glyph_info_t */
    /**
     * either a Unicode code point (before shaping) or a glyph index
     *             (after shaping).
     */
    readonly codepoint: codepoint_t
    /**
     * the index of the character in the original text that corresponds
     *           to this #hb_glyph_info_t, or whatever the client passes to
     *           hb_buffer_add(). More than one #hb_glyph_info_t can have the same
     *           `cluster` value, if they resulted from the same character (e.g. one
     *           to many glyph substitution), and when more than one character gets
     *           merged in the same glyph (e.g. many to one glyph substitution) the
     *           #hb_glyph_info_t will have the smallest cluster value of them.
     *           By default some characters are merged into the same cluster
     *           (e.g. combining marks have the same cluster as their bases)
     *           even if they are separate glyphs, hb_buffer_set_cluster_level()
     *           allow selecting more fine-grained cluster handling.
     */
    readonly cluster: number
    static name: string
}
class glyph_position_t {
    /* Fields of HarfBuzz-0.0.HarfBuzz.glyph_position_t */
    /**
     * how much the line advances after drawing this glyph when setting
     *             text in horizontal direction.
     */
    readonly x_advance: position_t
    /**
     * how much the line advances after drawing this glyph when setting
     *             text in vertical direction.
     */
    readonly y_advance: position_t
    /**
     * how much the glyph moves on the X-axis before drawing it, this
     *            should not affect how much the line advances.
     */
    readonly x_offset: position_t
    /**
     * how much the glyph moves on the Y-axis before drawing it, this
     *            should not affect how much the line advances.
     */
    readonly y_offset: position_t
    static name: string
}
class language_t {
    /* Methods of HarfBuzz-0.0.HarfBuzz.language_t */
    /**
     * See hb_language_from_string().
     */
    _string(): string
    static name: string
}
class map_t {
    static name: string
}
class ot_color_layer_t {
    /* Fields of HarfBuzz-0.0.HarfBuzz.ot_color_layer_t */
    readonly glyph: codepoint_t
    readonly color_index: number
    static name: string
}
class ot_math_glyph_part_t {
    /* Fields of HarfBuzz-0.0.HarfBuzz.ot_math_glyph_part_t */
    /**
     * The glyph index of the variant part
     */
    readonly glyph: codepoint_t
    /**
     * The length of the connector on the starting side of the variant part
     */
    readonly start_connector_length: position_t
    /**
     * The length of the connector on the ending side of the variant part
     */
    readonly end_connector_length: position_t
    /**
     * The total advance of the part
     */
    readonly full_advance: position_t
    /**
     * #hb_ot_math_glyph_part_flags_t flags for the part
     */
    readonly flags: ot_math_glyph_part_flags_t
    static name: string
}
class ot_math_glyph_variant_t {
    /* Fields of HarfBuzz-0.0.HarfBuzz.ot_math_glyph_variant_t */
    /**
     * The glyph index of the variant
     */
    readonly glyph: codepoint_t
    /**
     * The advance width of the variant
     */
    readonly advance: position_t
    static name: string
}
class ot_name_entry_t {
    /* Fields of HarfBuzz-0.0.HarfBuzz.ot_name_entry_t */
    /**
     * name ID
     */
    readonly name_id: ot_name_id_t
    /**
     * language
     */
    readonly language: language_t
    static name: string
}
class ot_var_axis_info_t {
    /* Fields of HarfBuzz-0.0.HarfBuzz.ot_var_axis_info_t */
    /**
     * Index of the axis in the variation-axis array
     */
    readonly axis_index: number
    /**
     * The #hb_tag_t tag identifying the design variation of the axis
     */
    readonly tag: tag_t
    /**
     * The `name` table Name ID that provides display names for the axis
     */
    readonly name_id: ot_name_id_t
    /**
     * The #hb_ot_var_axis_flags_t flags for the axis
     */
    readonly flags: ot_var_axis_flags_t
    /**
     * The mininum value on the variation axis that the font covers
     */
    readonly min_value: number
    /**
     * The position on the variation axis corresponding to the font's defaults
     */
    readonly default_value: number
    /**
     * The maximum value on the variation axis that the font covers
     */
    readonly max_value: number
    static name: string
}
class ot_var_axis_t {
    /* Fields of HarfBuzz-0.0.HarfBuzz.ot_var_axis_t */
    readonly tag: tag_t
    readonly name_id: ot_name_id_t
    readonly min_value: number
    readonly default_value: number
    readonly max_value: number
    static name: string
}
class segment_properties_t {
    /* Fields of HarfBuzz-0.0.HarfBuzz.segment_properties_t */
    /**
     * the #hb_direction_t of the buffer, see hb_buffer_set_direction().
     */
    readonly direction: direction_t
    /**
     * the #hb_script_t of the buffer, see hb_buffer_set_script().
     */
    readonly script: script_t
    /**
     * the #hb_language_t of the buffer, see hb_buffer_set_language().
     */
    readonly language: language_t
    static name: string
}
class set_t {
    static name: string
}
class shape_plan_t {
    static name: string
}
class unicode_funcs_t {
    static name: string
}
class user_data_key_t {
    static name: string
}
class variation_t {
    /* Fields of HarfBuzz-0.0.HarfBuzz.variation_t */
    readonly tag: tag_t
    readonly value: number
    /* Methods of HarfBuzz-0.0.HarfBuzz.variation_t */
    _string(buf: string, size: number): void
    static name: string
}
class var_int_t {
    static name: string
}
    type bool_t = number
    type codepoint_t = number
    type color_t = number
    type font_get_font_h_extents_func_t = font_get_font_extents_func_t
    type font_get_font_v_extents_func_t = font_get_font_extents_func_t
    type font_get_glyph_h_advance_func_t = font_get_glyph_advance_func_t
    type font_get_glyph_h_advances_func_t = font_get_glyph_advances_func_t
    type font_get_glyph_h_kerning_func_t = font_get_glyph_kerning_func_t
    type font_get_glyph_h_origin_func_t = font_get_glyph_origin_func_t
    type font_get_glyph_v_advance_func_t = font_get_glyph_advance_func_t
    type font_get_glyph_v_advances_func_t = font_get_glyph_advances_func_t
    type font_get_glyph_v_kerning_func_t = font_get_glyph_kerning_func_t
    type font_get_glyph_v_origin_func_t = font_get_glyph_origin_func_t
    type mask_t = number
    type ot_name_id_t = number
    type position_t = number
    type tag_t = number
}
export default HarfBuzz;