// @ts-nocheck

/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * HarfBuzz-0.0
 */

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
 * @bitfield 
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
 * @bitfield 
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
/**
 * Makes a writable copy of `blob`.
 * @param blob A blob.
 */
function blobCopyWritableOrFail(blob: blob_t): blob_t
function blobCreateFromFile(fileName: string): blob_t
/**
 * Returns a blob that represents a range of bytes in `parent`.  The new
 * blob is always created with %HB_MEMORY_MODE_READONLY, meaning that it
 * will never modify data in the parent blob.  The parent data is not
 * expected to be modified, and will result in undefined behavior if it
 * is.
 * 
 * Makes `parent` immutable.
 * @param parent Parent blob.
 * @param offset Start offset of sub-blob within `parent,` in bytes.
 * @param length Length of sub-blob.
 */
function blobCreateSubBlob(parent: blob_t, offset: number, length: number): blob_t
function blobGetData(blob: blob_t): string[]
/**
 * Tries to make blob data writable (possibly copying it) and
 * return pointer to data.
 * 
 * Fails if blob has been made immutable, or if memory allocation
 * fails.
 * @param blob a blob.
 */
function blobGetDataWritable(blob: blob_t): string[]
/**
 * Returns the singleton empty blob.
 * 
 * See TODO:link object types for more information.
 */
function blobGetEmpty(): blob_t
function blobGetLength(blob: blob_t): number
function blobIsImmutable(blob: blob_t): bool_t
function blobMakeImmutable(blob: blob_t): void
/**
 * Appends a character with the Unicode value of `codepoint` to `buffer,` and
 * gives it the initial cluster value of `cluster`. Clusters can be any thing
 * the client wants, they are usually used to refer to the index of the
 * character in the input text stream and are output in
 * #hb_glyph_info_t.cluster field.
 * 
 * This function does not check the validity of `codepoint,` it is up to the
 * caller to ensure it is a valid Unicode code point.
 * @param buffer an #hb_buffer_t.
 * @param codepoint a Unicode code point.
 * @param cluster the cluster value of `codepoint`.
 */
function bufferAdd(buffer: buffer_t, codepoint: codepoint_t, cluster: number): void
/**
 * Appends characters from `text` array to `buffer`. The `item_offset` is the
 * position of the first character from `text` that will be appended, and
 * `item_length` is the number of character. When shaping part of a larger text
 * (e.g. a run of text from a paragraph), instead of passing just the substring
 * corresponding to the run, it is preferable to pass the whole
 * paragraph and specify the run start and length as `item_offset` and
 * `item_length,` respectively, to give HarfBuzz the full context to be able,
 * for example, to do cross-run Arabic shaping or properly handle combining
 * marks at stat of run.
 * 
 * This function does not check the validity of `text,` it is up to the caller
 * to ensure it contains a valid Unicode code points.
 * @param buffer a #hb_buffer_t to append characters to.
 * @param text an array of Unicode code points to append.
 * @param itemOffset the offset of the first code point to add to the `buffer`.
 * @param itemLength the number of code points to add to the `buffer,` or -1 for the               end of `text` (assuming it is %NULL terminated).
 */
function bufferAddCodepoints(buffer: buffer_t, text: codepoint_t[], itemOffset: number, itemLength: number): void
/**
 * Similar to hb_buffer_add_codepoints(), but allows only access to first 256
 * Unicode code points that can fit in 8-bit strings.
 * 
 * <note>Has nothing to do with non-Unicode Latin-1 encoding.</note>
 * @param buffer an #hb_buffer_t.
 * @param text an array of UTF-8               characters to append.
 * @param itemOffset the offset of the first character to add to the `buffer`.
 * @param itemLength the number of characters to add to the `buffer,` or -1 for the               end of `text` (assuming it is %NULL terminated).
 */
function bufferAddLatin1(buffer: buffer_t, text: Uint8Array, itemOffset: number, itemLength: number): void
/**
 * See hb_buffer_add_codepoints().
 * 
 * Replaces invalid UTF-16 characters with the `buffer` replacement code point,
 * see hb_buffer_set_replacement_codepoint().
 * @param buffer an #hb_buffer_t.
 * @param text an array of UTF-16 characters to append.
 * @param itemOffset the offset of the first character to add to the `buffer`.
 * @param itemLength the number of characters to add to the `buffer,` or -1 for the               end of `text` (assuming it is %NULL terminated).
 */
function bufferAddUtf16(buffer: buffer_t, text: number[], itemOffset: number, itemLength: number): void
/**
 * See hb_buffer_add_codepoints().
 * 
 * Replaces invalid UTF-32 characters with the `buffer` replacement code point,
 * see hb_buffer_set_replacement_codepoint().
 * @param buffer an #hb_buffer_t.
 * @param text an array of UTF-32 characters to append.
 * @param itemOffset the offset of the first character to add to the `buffer`.
 * @param itemLength the number of characters to add to the `buffer,` or -1 for the               end of `text` (assuming it is %NULL terminated).
 */
function bufferAddUtf32(buffer: buffer_t, text: number[], itemOffset: number, itemLength: number): void
/**
 * See hb_buffer_add_codepoints().
 * 
 * Replaces invalid UTF-8 characters with the `buffer` replacement code point,
 * see hb_buffer_set_replacement_codepoint().
 * @param buffer an #hb_buffer_t.
 * @param text an array of UTF-8               characters to append.
 * @param itemOffset the offset of the first character to add to the `buffer`.
 * @param itemLength the number of characters to add to the `buffer,` or -1 for the               end of `text` (assuming it is %NULL terminated).
 */
function bufferAddUtf8(buffer: buffer_t, text: Uint8Array, itemOffset: number, itemLength: number): void
/**
 * Check if allocating memory for the buffer succeeded.
 * @param buffer an #hb_buffer_t.
 */
function bufferAllocationSuccessful(buffer: buffer_t): bool_t
/**
 * Append (part of) contents of another buffer to this buffer.
 * @param buffer an #hb_buffer_t.
 * @param source source #hb_buffer_t.
 * @param start start index into source buffer to copy.  Use 0 to copy from start of buffer.
 * @param end end index into source buffer to copy.  Use `HB_FEATURE_GLOBAL_END` to copy to end of buffer.
 */
function bufferAppend(buffer: buffer_t, source: buffer_t, start: number, end: number): void
/**
 * Similar to hb_buffer_reset(), but does not clear the Unicode functions and
 * the replacement code point.
 * @param buffer an #hb_buffer_t.
 */
function bufferClearContents(buffer: buffer_t): void
/**
 * Creates a new #hb_buffer_t with all properties to defaults.
 */
function bufferCreate(): buffer_t
function bufferDeserializeGlyphs(buffer: buffer_t, buf: string[], font: font_t, format: buffer_serialize_format_t): [ /* returnType */ bool_t, /* endPtr */ string ]
function bufferDeserializeUnicode(buffer: buffer_t, buf: string[], format: buffer_serialize_format_t): [ /* returnType */ bool_t, /* endPtr */ string ]
/**
 * If dottedcircle_glyph is (hb_codepoint_t) -1 then %HB_BUFFER_DIFF_FLAG_DOTTED_CIRCLE_PRESENT
 * and %HB_BUFFER_DIFF_FLAG_NOTDEF_PRESENT are never returned.  This should be used by most
 * callers if just comparing two buffers is needed.
 * @param buffer a buffer.
 * @param reference other buffer to compare to.
 * @param dottedcircleGlyph glyph id of U+25CC DOTTED CIRCLE, or (hb_codepont_t) -1.
 * @param positionFuzz allowed absolute difference in position values.
 */
function bufferDiff(buffer: buffer_t, reference: buffer_t, dottedcircleGlyph: codepoint_t, positionFuzz: number): buffer_diff_flags_t
function bufferGetClusterLevel(buffer: buffer_t): buffer_cluster_level_t
/**
 * see hb_buffer_set_content_type().
 * @param buffer an #hb_buffer_t.
 */
function bufferGetContentType(buffer: buffer_t): buffer_content_type_t
/**
 * See hb_buffer_set_direction()
 * @param buffer an #hb_buffer_t.
 */
function bufferGetDirection(buffer: buffer_t): direction_t
function bufferGetEmpty(): buffer_t
/**
 * See hb_buffer_set_flags().
 * @param buffer an #hb_buffer_t.
 */
function bufferGetFlags(buffer: buffer_t): buffer_flags_t
/**
 * Returns `buffer` glyph information array.  Returned pointer
 * is valid as long as `buffer` contents are not modified.
 * @param buffer an #hb_buffer_t.
 */
function bufferGetGlyphInfos(buffer: buffer_t): glyph_info_t[]
/**
 * Returns `buffer` glyph position array.  Returned pointer
 * is valid as long as `buffer` contents are not modified.
 * @param buffer an #hb_buffer_t.
 */
function bufferGetGlyphPositions(buffer: buffer_t): glyph_position_t[]
/**
 * See hb_buffer_set_invisible_glyph().
 * @param buffer an #hb_buffer_t.
 */
function bufferGetInvisibleGlyph(buffer: buffer_t): codepoint_t
/**
 * See hb_buffer_set_language().
 * @param buffer an #hb_buffer_t.
 */
function bufferGetLanguage(buffer: buffer_t): language_t
/**
 * Returns the number of items in the buffer.
 * @param buffer an #hb_buffer_t.
 */
function bufferGetLength(buffer: buffer_t): number
/**
 * See hb_buffer_set_replacement_codepoint().
 * @param buffer an #hb_buffer_t.
 */
function bufferGetReplacementCodepoint(buffer: buffer_t): codepoint_t
/**
 * See hb_buffer_set_script().
 * @param buffer an #hb_buffer_t.
 */
function bufferGetScript(buffer: buffer_t): script_t
/**
 * Sets `props` to the #hb_segment_properties_t of `buffer`.
 * @param buffer an #hb_buffer_t.
 */
function bufferGetSegmentProperties(buffer: buffer_t): /* props */ segment_properties_t
function bufferGetUnicodeFuncs(buffer: buffer_t): unicode_funcs_t
/**
 * Sets unset buffer segment properties based on buffer Unicode
 * contents.  If buffer is not empty, it must have content type
 * %HB_BUFFER_CONTENT_TYPE_UNICODE.
 * 
 * If buffer script is not set (ie. is %HB_SCRIPT_INVALID), it
 * will be set to the Unicode script of the first character in
 * the buffer that has a script other than %HB_SCRIPT_COMMON,
 * %HB_SCRIPT_INHERITED, and %HB_SCRIPT_UNKNOWN.
 * 
 * Next, if buffer direction is not set (ie. is %HB_DIRECTION_INVALID),
 * it will be set to the natural horizontal direction of the
 * buffer script as returned by hb_script_get_horizontal_direction().
 * If hb_script_get_horizontal_direction() returns %HB_DIRECTION_INVALID,
 * then %HB_DIRECTION_LTR is used.
 * 
 * Finally, if buffer language is not set (ie. is %HB_LANGUAGE_INVALID),
 * it will be set to the process's default language as returned by
 * hb_language_get_default().  This may change in the future by
 * taking buffer script into consideration when choosing a language.
 * Note that hb_language_get_default() is NOT threadsafe the first time
 * it is called.  See documentation for that function for details.
 * @param buffer an #hb_buffer_t.
 */
function bufferGuessSegmentProperties(buffer: buffer_t): void
/**
 * Returns whether `buffer` has glyph position data.
 * A buffer gains position data when hb_buffer_get_glyph_positions() is called on it,
 * and cleared of position data when hb_buffer_clear_contents() is called.
 * @param buffer an #hb_buffer_t.
 */
function bufferHasPositions(buffer: buffer_t): bool_t
/**
 * Reorders a glyph buffer to have canonical in-cluster glyph order / position.
 * The resulting clusters should behave identical to pre-reordering clusters.
 * 
 * <note>This has nothing to do with Unicode normalization.</note>
 * @param buffer an #hb_buffer_t.
 */
function bufferNormalizeGlyphs(buffer: buffer_t): void
/**
 * Pre allocates memory for `buffer` to fit at least `size` number of items.
 * @param buffer an #hb_buffer_t.
 * @param size number of items to pre allocate.
 */
function bufferPreAllocate(buffer: buffer_t, size: number): bool_t
/**
 * Resets the buffer to its initial status, as if it was just newly created
 * with hb_buffer_create().
 * @param buffer an #hb_buffer_t.
 */
function bufferReset(buffer: buffer_t): void
/**
 * Reverses buffer contents.
 * @param buffer an #hb_buffer_t.
 */
function bufferReverse(buffer: buffer_t): void
/**
 * Reverses buffer clusters.  That is, the buffer contents are
 * reversed, then each cluster (consecutive items having the
 * same cluster number) are reversed again.
 * @param buffer an #hb_buffer_t.
 */
function bufferReverseClusters(buffer: buffer_t): void
/**
 * Reverses buffer contents between start to end.
 * @param buffer an #hb_buffer_t.
 * @param start start index.
 * @param end end index.
 */
function bufferReverseRange(buffer: buffer_t, start: number, end: number): void
/**
 * Serializes `buffer` into a textual representation of its content, whether
 * Unicode codepoints or glyph identifiers and positioning information. This is
 * useful for showing the contents of the buffer, for example during debugging.
 * See the documentation of hb_buffer_serialize_unicode() and
 * hb_buffer_serialize_glyphs() for a description of the output format.
 * @param buffer an #hb_buffer_t buffer.
 * @param start the first item in `buffer` to serialize.
 * @param end the last item in `buffer` to serialize.
 * @param font the #hb_font_t used to shape this buffer, needed to        read glyph names and extents. If %NULL, and empty font will be used.
 * @param format the #hb_buffer_serialize_format_t to use for formatting the output.
 * @param flags the #hb_buffer_serialize_flags_t that control what glyph properties         to serialize.
 */
function bufferSerialize(buffer: buffer_t, start: number, end: number, font: font_t | null, format: buffer_serialize_format_t, flags: buffer_serialize_flags_t): [ /* returnType */ number, /* buf */ Uint8Array, /* bufConsumed */ number ]
/**
 * Parses a string into an #hb_buffer_serialize_format_t. Does not check if
 * `str` is a valid buffer serialization format, use
 * hb_buffer_serialize_list_formats() to get the list of supported formats.
 * @param str a string to parse
 */
function bufferSerializeFormatFromString(str: Uint8Array): buffer_serialize_format_t
/**
 * Converts `format` to the string corresponding it, or %NULL if it is not a valid
 * #hb_buffer_serialize_format_t.
 * @param format an #hb_buffer_serialize_format_t to convert.
 */
function bufferSerializeFormatToString(format: buffer_serialize_format_t): string
/**
 * Serializes `buffer` into a textual representation of its glyph content,
 * useful for showing the contents of the buffer, for example during debugging.
 * There are currently two supported serialization formats:
 * 
 * ## text
 * A human-readable, plain text format.
 * The serialized glyphs will look something like:
 * 
 * ```
 * [uni0651=0`5`18,0+0|uni0628=0+1897]
 * ```
 * - The serialized glyphs are delimited with `[` and `]`.
 * - Glyphs are separated with `|`
 * - Each glyph starts with glyph name, or glyph index if
 *   #HB_BUFFER_SERIALIZE_FLAG_NO_GLYPH_NAMES flag is set. Then,
 *   - If #HB_BUFFER_SERIALIZE_FLAG_NO_CLUSTERS is not set, `=` then #hb_glyph_info_t.cluster.
 *   - If #HB_BUFFER_SERIALIZE_FLAG_NO_POSITIONS is not set, the #hb_glyph_position_t in the format:
 *     - If both #hb_glyph_position_t.x_offset and #hb_glyph_position_t.y_offset are not 0, ``x_offset,`y_offset`. Then,
 *     - `+x_advance`, then `,y_advance` if #hb_glyph_position_t.y_advance is not 0. Then,
 *   - If #HB_BUFFER_SERIALIZE_FLAG_GLYPH_EXTENTS is set, the
 *     #hb_glyph_extents_t in the format
 *     `&lt;x_bearing,y_bearing,width,height&gt;`
 * 
 * ## json
 * A machine-readable, structured format.
 * The serialized glyphs will look something like:
 * 
 * ```
 * [{"g":"uni0651","cl":0,"dx":518,"dy":0,"ax":0,"ay":0},
 * {"g":"uni0628","cl":0,"dx":0,"dy":0,"ax":1897,"ay":0}]
 * ```
 * Each glyph is a JSON object, with the following properties:
 * - `g`: the glyph name or glyph index if
 *   #HB_BUFFER_SERIALIZE_FLAG_NO_GLYPH_NAMES flag is set.
 * - `cl`: #hb_glyph_info_t.cluster if
 *   #HB_BUFFER_SERIALIZE_FLAG_NO_CLUSTERS is not set.
 * - `dx`,`dy`,`ax`,`ay`: #hb_glyph_position_t.x_offset, #hb_glyph_position_t.y_offset,
 *    #hb_glyph_position_t.x_advance and #hb_glyph_position_t.y_advance
 *    respectively, if #HB_BUFFER_SERIALIZE_FLAG_NO_POSITIONS is not set.
 * - `xb`,`yb`,`w`,`h`: #hb_glyph_extents_t.x_bearing, #hb_glyph_extents_t.y_bearing,
 *    #hb_glyph_extents_t.width and #hb_glyph_extents_t.height respectively if
 *    #HB_BUFFER_SERIALIZE_FLAG_GLYPH_EXTENTS is set.
 * @param buffer an #hb_buffer_t buffer.
 * @param start the first item in `buffer` to serialize.
 * @param end the last item in `buffer` to serialize.
 * @param font the #hb_font_t used to shape this buffer, needed to        read glyph names and extents. If %NULL, and empty font will be used.
 * @param format the #hb_buffer_serialize_format_t to use for formatting the output.
 * @param flags the #hb_buffer_serialize_flags_t that control what glyph properties         to serialize.
 */
function bufferSerializeGlyphs(buffer: buffer_t, start: number, end: number, font: font_t | null, format: buffer_serialize_format_t, flags: buffer_serialize_flags_t): [ /* returnType */ number, /* buf */ Uint8Array, /* bufConsumed */ number ]
/**
 * Returns a list of supported buffer serialization formats.
 */
function bufferSerializeListFormats(): string[]
/**
 * Serializes `buffer` into a textual representation of its content,
 * when the buffer contains Unicode codepoints (i.e., before shaping). This is
 * useful for showing the contents of the buffer, for example during debugging.
 * There are currently two supported serialization formats:
 * 
 * ## text
 * A human-readable, plain text format.
 * The serialized codepoints will look something like:
 * 
 * ```
 * <U+0651=0|U+0628=1>
 * ```
 * - Glyphs are separated with `|`
 * - Unicode codepoints are expressed as zero-padded four (or more)
 *   digit hexadecimal numbers preceded by `U+`
 * - If #HB_BUFFER_SERIALIZE_FLAG_NO_CLUSTERS is not set, the cluster
 *   will be indicated with a `=` then #hb_glyph_info_t.cluster.
 * 
 * ## json
 * A machine-readable, structured format.
 * The serialized codepoints will be a list of objects with the following
 * properties:
 * - `u`: the Unicode codepoint as a decimal integer
 * - `cl`: #hb_glyph_info_t.cluster if
 *   #HB_BUFFER_SERIALIZE_FLAG_NO_CLUSTERS is not set.
 * 
 * For example:
 * ```
 * [{u:1617,cl:0},{u:1576,cl:1}]
 * ```
 * @param buffer an #hb_buffer_t buffer.
 * @param start the first item in `buffer` to serialize.
 * @param end the last item in `buffer` to serialize.
 * @param format the #hb_buffer_serialize_format_t to use for formatting the output.
 * @param flags 
 */
function bufferSerializeUnicode(buffer: buffer_t, start: number, end: number, format: buffer_serialize_format_t, flags: buffer_serialize_flags_t): [ /* returnType */ number, /* buf */ Uint8Array, /* bufConsumed */ number ]
function bufferSetClusterLevel(buffer: buffer_t, clusterLevel: buffer_cluster_level_t): void
/**
 * Sets the type of `buffer` contents, buffers are either empty, contain
 * characters (before shaping) or glyphs (the result of shaping).
 * @param buffer an #hb_buffer_t.
 * @param contentType the type of buffer contents to set
 */
function bufferSetContentType(buffer: buffer_t, contentType: buffer_content_type_t): void
/**
 * Set the text flow direction of the buffer. No shaping can happen without
 * setting `buffer` direction, and it controls the visual direction for the
 * output glyphs; for RTL direction the glyphs will be reversed. Many layout
 * features depend on the proper setting of the direction, for example,
 * reversing RTL text before shaping, then shaping with LTR direction is not
 * the same as keeping the text in logical order and shaping with RTL
 * direction.
 * @param buffer an #hb_buffer_t.
 * @param direction the #hb_direction_t of the `buffer`
 */
function bufferSetDirection(buffer: buffer_t, direction: direction_t): void
/**
 * Sets `buffer` flags to `flags`. See #hb_buffer_flags_t.
 * @param buffer an #hb_buffer_t.
 * @param flags the buffer flags to set.
 */
function bufferSetFlags(buffer: buffer_t, flags: buffer_flags_t): void
/**
 * Sets the #hb_codepoint_t that replaces invisible characters in
 * the shaping result.  If set to zero (default), the glyph for the
 * U+0020 SPACE character is used.  Otherwise, this value is used
 * verbatim.
 * @param buffer an #hb_buffer_t.
 * @param invisible the invisible #hb_codepoint_t
 */
function bufferSetInvisibleGlyph(buffer: buffer_t, invisible: codepoint_t): void
/**
 * Sets the language of `buffer` to `language`.
 * 
 * Languages are crucial for selecting which OpenType feature to apply to the
 * buffer which can result in applying language-specific behaviour. Languages
 * are orthogonal to the scripts, and though they are related, they are
 * different concepts and should not be confused with each other.
 * 
 * Use hb_language_from_string() to convert from BCP 47 language tags to
 * #hb_language_t.
 * @param buffer an #hb_buffer_t.
 * @param language an hb_language_t to set.
 */
function bufferSetLanguage(buffer: buffer_t, language: language_t): void
/**
 * Similar to hb_buffer_pre_allocate(), but clears any new items added at the
 * end.
 * @param buffer an #hb_buffer_t.
 * @param length the new length of `buffer`.
 */
function bufferSetLength(buffer: buffer_t, length: number): bool_t
function bufferSetMessageFunc(buffer: buffer_t, func: buffer_message_func_t): void
/**
 * Sets the #hb_codepoint_t that replaces invalid entries for a given encoding
 * when adding text to `buffer`.
 * 
 * Default is %HB_BUFFER_REPLACEMENT_CODEPOINT_DEFAULT.
 * @param buffer an #hb_buffer_t.
 * @param replacement the replacement #hb_codepoint_t
 */
function bufferSetReplacementCodepoint(buffer: buffer_t, replacement: codepoint_t): void
/**
 * Sets the script of `buffer` to `script`.
 * 
 * Script is crucial for choosing the proper shaping behaviour for scripts that
 * require it (e.g. Arabic) and the which OpenType features defined in the font
 * to be applied.
 * 
 * You can pass one of the predefined #hb_script_t values, or use
 * hb_script_from_string() or hb_script_from_iso15924_tag() to get the
 * corresponding script from an ISO 15924 script tag.
 * @param buffer an #hb_buffer_t.
 * @param script an #hb_script_t to set.
 */
function bufferSetScript(buffer: buffer_t, script: script_t): void
/**
 * Sets the segment properties of the buffer, a shortcut for calling
 * hb_buffer_set_direction(), hb_buffer_set_script() and
 * hb_buffer_set_language() individually.
 * @param buffer an #hb_buffer_t.
 * @param props an #hb_segment_properties_t to use.
 */
function bufferSetSegmentProperties(buffer: buffer_t, props: segment_properties_t): void
function bufferSetUnicodeFuncs(buffer: buffer_t, unicodeFuncs: unicode_funcs_t): void
/**
 * color: a #hb_color_t we are interested in its channels.
 * @param color 
 */
function colorGetAlpha(color: color_t): number
/**
 * color: a #hb_color_t we are interested in its channels.
 * @param color 
 */
function colorGetBlue(color: color_t): number
/**
 * color: a #hb_color_t we are interested in its channels.
 * @param color 
 */
function colorGetGreen(color: color_t): number
/**
 * color: a #hb_color_t we are interested in its channels.
 * @param color 
 */
function colorGetRed(color: color_t): number
function directionFromString(str: Uint8Array): direction_t
function directionToString(direction: direction_t): string
/**
 * Add table for `tag` with data provided by `blob` to the face.  `face` must
 * be created using hb_face_builder_create().
 * @param face A face object created with hb_face_builder_create()
 * @param tag The #hb_tag_t of the table to add
 * @param blob The blob containing the table data to add
 */
function faceBuilderAddTable(face: face_t, tag: tag_t, blob: blob_t): bool_t
/**
 * Creates a #hb_face_t that can be used with hb_face_builder_add_table().
 * After tables are added to the face, it can be compiled to a binary
 * font file by calling hb_face_reference_blob().
 */
function faceBuilderCreate(): face_t
/**
 * Collects all of the Unicode characters covered by `face` and adds
 * them to the #hb_set_t set `out`.
 * @param face A face object
 * @param out The set to add Unicode characters to
 */
function faceCollectUnicodes(face: face_t, out: set_t): void
/**
 * Collects all Unicode "Variation Selector" characters covered by `face` and adds
 * them to the #hb_set_t set `out`.
 * @param face A face object
 * @param out The set to add Variation Selector characters to
 */
function faceCollectVariationSelectors(face: face_t, out: set_t): void
/**
 * Collects all Unicode characters for `variation_selector` covered by `face` and adds
 * them to the #hb_set_t set `out`.
 * @param face A face object
 * @param variationSelector The Variation Selector to query
 * @param out The set to add Unicode characters to
 */
function faceCollectVariationUnicodes(face: face_t, variationSelector: codepoint_t, out: set_t): void
/**
 * Fetches the number of faces in a blob.
 * @param blob a blob.
 */
function faceCount(blob: blob_t): number
/**
 * Constructs a new face object from the specified blob and
 * a face index into that blob. This is used for blobs of
 * file formats such as Dfont and TTC that can contain more
 * than one face.
 * @param blob #hb_blob_t to work upon
 * @param index The index of the face within `blob`
 */
function faceCreate(blob: blob_t, index: number): face_t
/**
 * Variant of hb_face_create(), built for those cases where it is more
 * convenient to provide data for individual tables instead of the whole font
 * data. With the caveat that hb_face_get_table_tags() does not currently work
 * with faces created this way.
 * 
 * Creates a new face object from the specified `user_data` and `reference_table_func,`
 * with the `destroy` callback.
 * @param referenceTableFunc Table-referencing function
 */
function faceCreateForTables(referenceTableFunc: reference_table_func_t): face_t
/**
 * Fetches the singleton empty face object.
 */
function faceGetEmpty(): face_t
/**
 * Fetches the glyph-count value of the specified face object.
 * @param face A face object
 */
function faceGetGlyphCount(face: face_t): number
/**
 * Fetches the face-index corresponding to the given face.
 * 
 * <note>Note: face indices within a collection are zero-based.</note>
 * @param face A face object
 */
function faceGetIndex(face: face_t): number
/**
 * Fetches a list of all table tags for a face, if possible. The list returned will
 * begin at the offset provided
 * @param face A face object
 * @param startOffset The index of first table tag to retrieve
 */
function faceGetTableTags(face: face_t, startOffset: number): [ /* returnType */ number, /* tableTags */ tag_t[] ]
/**
 * Fetches the units-per-em (upem) value of the specified face object.
 * @param face A face object
 */
function faceGetUpem(face: face_t): number
/**
 * Tests whether the given face object is immutable.
 * @param face A face object
 */
function faceIsImmutable(face: face_t): bool_t
/**
 * Makes the given face object immutable.
 * @param face A face object
 */
function faceMakeImmutable(face: face_t): void
/**
 * Fetches a pointer to the binary blob that contains the
 * specified face. Returns an empty blob if referencing face data is not
 * possible.
 * @param face A face object
 */
function faceReferenceBlob(face: face_t): blob_t
/**
 * Fetches a reference to the specified table within
 * the specified face.
 * @param face A face object
 * @param tag The #hb_tag_t of the table to query
 */
function faceReferenceTable(face: face_t, tag: tag_t): blob_t
/**
 * Sets the glyph count for a face object to the specified value.
 * @param face A face object
 * @param glyphCount The glyph-count value to assign
 */
function faceSetGlyphCount(face: face_t, glyphCount: number): void
/**
 * Assigns the specified face-index to `face`. Fails if the
 * face is immutable.
 * 
 * <note>Note: face indices within a collection are zero-based.</note>
 * @param face A face object
 * @param index The index to assign
 */
function faceSetIndex(face: face_t, index: number): void
/**
 * Sets the units-per-em (upem) for a face object to the specified value.
 * @param face A face object
 * @param upem The units-per-em value to assign
 */
function faceSetUpem(face: face_t, upem: number): void
/**
 * Parses a string into a #hb_feature_t.
 * 
 * The format for specifying feature strings follows. All valid CSS
 * font-feature-settings values other than 'normal' and the global values are
 * also accepted, though not documented below. CSS string escapes are not
 * supported.
 * 
 * The range indices refer to the positions between Unicode characters. The
 * position before the first character is always 0.
 * 
 * The format is Python-esque.  Here is how it all works:
 * 
 * <informaltable pgwide='1' align='left' frame='none'>
 * <tgroup cols='5'>
 * <thead>
 * <row><entry>Syntax</entry>    <entry>Value</entry> <entry>Start</entry> <entry>End</entry></row>
 * </thead>
 * <tbody>
 * <row><entry>Setting value:</entry></row>
 * <row><entry>kern</entry>      <entry>1</entry>     <entry>0</entry>      <entry>∞</entry>   <entry>Turn feature on</entry></row>
 * <row><entry>+kern</entry>     <entry>1</entry>     <entry>0</entry>      <entry>∞</entry>   <entry>Turn feature on</entry></row>
 * <row><entry>-kern</entry>     <entry>0</entry>     <entry>0</entry>      <entry>∞</entry>   <entry>Turn feature off</entry></row>
 * <row><entry>kern=0</entry>    <entry>0</entry>     <entry>0</entry>      <entry>∞</entry>   <entry>Turn feature off</entry></row>
 * <row><entry>kern=1</entry>    <entry>1</entry>     <entry>0</entry>      <entry>∞</entry>   <entry>Turn feature on</entry></row>
 * <row><entry>aalt=2</entry>    <entry>2</entry>     <entry>0</entry>      <entry>∞</entry>   <entry>Choose 2nd alternate</entry></row>
 * <row><entry>Setting index:</entry></row>
 * <row><entry>kern[]</entry>    <entry>1</entry>     <entry>0</entry>      <entry>∞</entry>   <entry>Turn feature on</entry></row>
 * <row><entry>kern[:]</entry>   <entry>1</entry>     <entry>0</entry>      <entry>∞</entry>   <entry>Turn feature on</entry></row>
 * <row><entry>kern[5:]</entry>  <entry>1</entry>     <entry>5</entry>      <entry>∞</entry>   <entry>Turn feature on, partial</entry></row>
 * <row><entry>kern[:5]</entry>  <entry>1</entry>     <entry>0</entry>      <entry>5</entry>   <entry>Turn feature on, partial</entry></row>
 * <row><entry>kern[3:5]</entry> <entry>1</entry>     <entry>3</entry>      <entry>5</entry>   <entry>Turn feature on, range</entry></row>
 * <row><entry>kern[3]</entry>   <entry>1</entry>     <entry>3</entry>      <entry>3+1</entry> <entry>Turn feature on, single char</entry></row>
 * <row><entry>Mixing it all:</entry></row>
 * <row><entry>aalt[3:5]=2</entry> <entry>2</entry>   <entry>3</entry>      <entry>5</entry>   <entry>Turn 2nd alternate on for range</entry></row>
 * </tbody>
 * </tgroup>
 * </informaltable>
 * @param str a string to parse
 */
function featureFromString(str: Uint8Array): [ /* returnType */ bool_t, /* feature */ feature_t ]
/**
 * Converts a #hb_feature_t into a %NULL-terminated string in the format
 * understood by hb_feature_from_string(). The client in responsible for
 * allocating big enough size for `buf,` 128 bytes is more than enough.
 * @param feature an #hb_feature_t to convert
 */
function featureToString(feature: feature_t): /* buf */ string[]
function fontAddGlyphOriginForDirection(font: font_t, glyph: codepoint_t, direction: direction_t): [ /* x */ position_t, /* y */ position_t ]
function fontCreate(face: face_t): font_t
function fontCreateSubFont(parent: font_t): font_t
function fontFuncsCreate(): font_funcs_t
function fontFuncsGetEmpty(): font_funcs_t
function fontFuncsIsImmutable(ffuncs: font_funcs_t): bool_t
function fontFuncsMakeImmutable(ffuncs: font_funcs_t): void
function fontFuncsSetFontHExtentsFunc(ffuncs: font_funcs_t, func: font_get_font_h_extents_func_t): void
function fontFuncsSetFontVExtentsFunc(ffuncs: font_funcs_t, func: font_get_font_v_extents_func_t): void
function fontFuncsSetGlyphContourPointFunc(ffuncs: font_funcs_t, func: font_get_glyph_contour_point_func_t): void
function fontFuncsSetGlyphExtentsFunc(ffuncs: font_funcs_t, func: font_get_glyph_extents_func_t): void
function fontFuncsSetGlyphFromNameFunc(ffuncs: font_funcs_t, func: font_get_glyph_from_name_func_t): void
/**
 * Deprecated.  Use hb_font_funcs_set_nominal_glyph_func() and
 * hb_font_funcs_set_variation_glyph_func() instead.
 * @param ffuncs font functions.
 * @param func callback function.
 */
function fontFuncsSetGlyphFunc(ffuncs: font_funcs_t, func: font_get_glyph_func_t): void
function fontFuncsSetGlyphHAdvanceFunc(ffuncs: font_funcs_t, func: font_get_glyph_h_advance_func_t): void
function fontFuncsSetGlyphHAdvancesFunc(ffuncs: font_funcs_t, func: font_get_glyph_h_advances_func_t): void
function fontFuncsSetGlyphHKerningFunc(ffuncs: font_funcs_t, func: font_get_glyph_h_kerning_func_t): void
function fontFuncsSetGlyphHOriginFunc(ffuncs: font_funcs_t, func: font_get_glyph_h_origin_func_t): void
function fontFuncsSetGlyphNameFunc(ffuncs: font_funcs_t, func: font_get_glyph_name_func_t): void
function fontFuncsSetGlyphVAdvanceFunc(ffuncs: font_funcs_t, func: font_get_glyph_v_advance_func_t): void
function fontFuncsSetGlyphVAdvancesFunc(ffuncs: font_funcs_t, func: font_get_glyph_v_advances_func_t): void
function fontFuncsSetGlyphVKerningFunc(ffuncs: font_funcs_t, func: font_get_glyph_v_kerning_func_t): void
function fontFuncsSetGlyphVOriginFunc(ffuncs: font_funcs_t, func: font_get_glyph_v_origin_func_t): void
function fontFuncsSetNominalGlyphFunc(ffuncs: font_funcs_t, func: font_get_nominal_glyph_func_t): void
function fontFuncsSetNominalGlyphsFunc(ffuncs: font_funcs_t, func: font_get_nominal_glyphs_func_t): void
function fontFuncsSetVariationGlyphFunc(ffuncs: font_funcs_t, func: font_get_variation_glyph_func_t): void
function fontGetEmpty(): font_t
function fontGetExtentsForDirection(font: font_t, direction: direction_t): /* extents */ font_extents_t
function fontGetFace(font: font_t): face_t
function fontGetGlyph(font: font_t, unicode: codepoint_t, variationSelector: codepoint_t): [ /* returnType */ bool_t, /* glyph */ codepoint_t ]
function fontGetGlyphAdvanceForDirection(font: font_t, glyph: codepoint_t, direction: direction_t): [ /* x */ position_t, /* y */ position_t ]
function fontGetGlyphAdvancesForDirection(font: font_t, direction: direction_t, count: number, firstGlyph: codepoint_t, glyphStride: number, firstAdvance: position_t, advanceStride: number): void
function fontGetGlyphContourPoint(font: font_t, glyph: codepoint_t, pointIndex: number): [ /* returnType */ bool_t, /* x */ position_t, /* y */ position_t ]
function fontGetGlyphContourPointForOrigin(font: font_t, glyph: codepoint_t, pointIndex: number, direction: direction_t): [ /* returnType */ bool_t, /* x */ position_t, /* y */ position_t ]
function fontGetGlyphExtents(font: font_t, glyph: codepoint_t): [ /* returnType */ bool_t, /* extents */ glyph_extents_t ]
function fontGetGlyphExtentsForOrigin(font: font_t, glyph: codepoint_t, direction: direction_t): [ /* returnType */ bool_t, /* extents */ glyph_extents_t ]
function fontGetGlyphFromName(font: font_t, name: string[]): [ /* returnType */ bool_t, /* glyph */ codepoint_t ]
function fontGetGlyphHAdvance(font: font_t, glyph: codepoint_t): position_t
function fontGetGlyphHAdvances(font: font_t, count: number, firstGlyph: codepoint_t, glyphStride: number, firstAdvance: position_t, advanceStride: number): void
function fontGetGlyphHKerning(font: font_t, leftGlyph: codepoint_t, rightGlyph: codepoint_t): position_t
function fontGetGlyphHOrigin(font: font_t, glyph: codepoint_t): [ /* returnType */ bool_t, /* x */ position_t, /* y */ position_t ]
function fontGetGlyphKerningForDirection(font: font_t, firstGlyph: codepoint_t, secondGlyph: codepoint_t, direction: direction_t): [ /* x */ position_t, /* y */ position_t ]
function fontGetGlyphName(font: font_t, glyph: codepoint_t, name: string[]): bool_t
function fontGetGlyphOriginForDirection(font: font_t, glyph: codepoint_t, direction: direction_t): [ /* x */ position_t, /* y */ position_t ]
function fontGetGlyphVAdvance(font: font_t, glyph: codepoint_t): position_t
function fontGetGlyphVAdvances(font: font_t, count: number, firstGlyph: codepoint_t, glyphStride: number, firstAdvance: position_t, advanceStride: number): void
function fontGetGlyphVKerning(font: font_t, topGlyph: codepoint_t, bottomGlyph: codepoint_t): position_t
function fontGetGlyphVOrigin(font: font_t, glyph: codepoint_t): [ /* returnType */ bool_t, /* x */ position_t, /* y */ position_t ]
function fontGetHExtents(font: font_t): [ /* returnType */ bool_t, /* extents */ font_extents_t ]
function fontGetNominalGlyph(font: font_t, unicode: codepoint_t): [ /* returnType */ bool_t, /* glyph */ codepoint_t ]
function fontGetNominalGlyphs(font: font_t, count: number, firstUnicode: codepoint_t, unicodeStride: number, firstGlyph: codepoint_t, glyphStride: number): number
function fontGetParent(font: font_t): font_t
function fontGetPpem(font: font_t): [ /* xPpem */ number, /* yPpem */ number ]
/**
 * Gets the "point size" of the font.  A value of 0 means unset.
 * @param font a font.
 */
function fontGetPtem(font: font_t): number
function fontGetScale(font: font_t): [ /* xScale */ number, /* yScale */ number ]
function fontGetVExtents(font: font_t): [ /* returnType */ bool_t, /* extents */ font_extents_t ]
/**
 * Return value is valid as long as variation coordinates of the font
 * are not modified.
 * @param font 
 * @param length 
 */
function fontGetVarCoordsNormalized(font: font_t, length: number): number
function fontGetVariationGlyph(font: font_t, unicode: codepoint_t, variationSelector: codepoint_t): [ /* returnType */ bool_t, /* glyph */ codepoint_t ]
function fontGlyphFromString(font: font_t, s: Uint8Array): [ /* returnType */ bool_t, /* glyph */ codepoint_t ]
function fontGlyphToString(font: font_t, glyph: codepoint_t, s: string[]): void
function fontIsImmutable(font: font_t): bool_t
function fontMakeImmutable(font: font_t): void
/**
 * Sets font-face of `font`.
 * @param font a font.
 * @param face new face.
 */
function fontSetFace(font: font_t, face: face_t): void
function fontSetFuncs(font: font_t, klass: font_funcs_t): void
function fontSetFuncsData(font: font_t, fontData: object | null): void
/**
 * Sets parent font of `font`.
 * @param font a font.
 * @param parent new parent.
 */
function fontSetParent(font: font_t, parent: font_t): void
function fontSetPpem(font: font_t, xPpem: number, yPpem: number): void
/**
 * Sets "point size" of the font.  Set to 0 to unset.
 * 
 * There are 72 points in an inch.
 * @param font a font.
 * @param ptem font size in points.
 */
function fontSetPtem(font: font_t, ptem: number): void
function fontSetScale(font: font_t, xScale: number, yScale: number): void
function fontSetVarCoordsDesign(font: font_t, coords: number, coordsLength: number): void
function fontSetVarCoordsNormalized(font: font_t, coords: number, coordsLength: number): void
/**
 * Sets design coords of a font from a named instance index.
 * @param font a font.
 * @param instanceIndex named instance index.
 */
function fontSetVarNamedInstance(font: font_t, instanceIndex: number): void
function fontSetVariations(font: font_t, variations: variation_t, variationsLength: number): void
function fontSubtractGlyphOriginForDirection(font: font_t, glyph: codepoint_t, direction: direction_t): [ /* x */ position_t, /* y */ position_t ]
function ftFontChanged(font: font_t): void
/**
 * Fetches the FT_Load_Glyph load flags of the specified #hb_font_t.
 * 
 * For more information, see
 * https://www.freetype.org/freetype2/docs/reference/ft2-base_interface.html#ft_load_xxx
 * @param font #hb_font_t to work upon
 */
function ftFontGetLoadFlags(font: font_t): number
/**
 * Configures the font-functions structure of the specified
 * #hb_font_t font object to use FreeType font functions.
 * 
 * In particular, you can use this function to configure an
 * existing #hb_face_t face object for use with FreeType font
 * functions even if that #hb_face_t face object was initially
 * created with hb_face_create(), and therefore was not
 * initially configured to use FreeType font functions.
 * 
 * An #hb_face_t face object created with hb_ft_face_create()
 * is preconfigured for FreeType font functions and does not
 * require this function to be used.
 * 
 * <note>Note: Internally, this function creates an FT_Face.
 * </note>
 * @param font #hb_font_t to work upon
 */
function ftFontSetFuncs(font: font_t): void
/**
 * Sets the FT_Load_Glyph load flags for the specified #hb_font_t.
 * 
 * For more information, see
 * https://www.freetype.org/freetype2/docs/reference/ft2-base_interface.html#ft_load_xxx
 * @param font #hb_font_t to work upon
 * @param loadFlags The FreeType load flags to set
 */
function ftFontSetLoadFlags(font: font_t, loadFlags: number): void
function ftFontUnlockFace(font: font_t): void
/**
 * Creates an #hb_blob_t blob from the specified
 * GBytes data structure.
 * @param gbytes the GBytes structure to work upon
 */
function glibBlobCreate(gbytes: any): blob_t
/**
 * Fetches a Unicode-functions structure that is populated
 * with the appropriate GLib function for each method.
 */
function glibGetUnicodeFuncs(): unicode_funcs_t
/**
 * Fetches the GUnicodeScript identifier that corresponds to the
 * specified #hb_script_t script.
 * @param script The #hb_script_t to query
 */
function glibScriptFromScript(script: script_t): GLib.UnicodeScript
/**
 * Fetches the #hb_script_t script that corresponds to the
 * specified GUnicodeScript identifier.
 * @param script The GUnicodeScript identifier to query
 */
function glibScriptToScript(script: GLib.UnicodeScript): script_t
/**
 * Returns glyph flags encoded within a #hb_glyph_info_t.
 * @param info a #hb_glyph_info_t.
 */
function glyphInfoGetGlyphFlags(info: glyph_info_t): glyph_flags_t
/**
 * Converts `str` representing a BCP 47 language tag to the corresponding
 * #hb_language_t.
 * @param str a string representing       a BCP 47 language tag
 */
function languageFromString(str: Uint8Array): language_t
/**
 * Get default language from current locale.
 * 
 * Note that the first time this function is called, it calls
 * "setlocale (LC_CTYPE, nullptr)" to fetch current locale.  The underlying
 * setlocale function is, in many implementations, NOT threadsafe.  To avoid
 * problems, call this function once before multiple threads can call it.
 * This function is only used from hb_buffer_guess_segment_properties() by
 * HarfBuzz itself.
 */
function languageGetDefault(): language_t
/**
 * See hb_language_from_string().
 * @param language an #hb_language_t to convert.
 */
function languageToString(language: language_t): string
function mapAllocationSuccessful(map: map_t): bool_t
function mapClear(map: map_t): void
function mapCreate(): map_t
function mapDel(map: map_t, key: codepoint_t): void
function mapGet(map: map_t, key: codepoint_t): codepoint_t
function mapGetEmpty(): map_t
function mapGetPopulation(map: map_t): number
function mapHas(map: map_t, key: codepoint_t): bool_t
function mapIsEmpty(map: map_t): bool_t
function mapSet(map: map_t, key: codepoint_t, value: codepoint_t): void
/**
 * Fetches a list of all color layers for the specified glyph index in the specified
 * face. The list returned will begin at the offset provided.
 * @param face #hb_face_t to work upon
 * @param glyph The glyph index to query
 * @param startOffset offset of the first layer to retrieve
 */
function otColorGlyphGetLayers(face: face_t, glyph: codepoint_t, startOffset: number): [ /* returnType */ number, /* layers */ ot_color_layer_t[] | null ]
/**
 * Fetches the PNG image for a glyph. This function takes a font object, not a face object,
 * as input. To get an optimally sized PNG blob, the UPEM value must be set on the `font`
 * object. If UPEM is unset, the blob returned will be the largest PNG available.
 * @param font #hb_font_t to work upon
 * @param glyph a glyph index
 */
function otColorGlyphReferencePng(font: font_t, glyph: codepoint_t): blob_t
/**
 * Fetches the SVG document for a glyph. The blob may be either plain text or gzip-encoded.
 * @param face #hb_face_t to work upon
 * @param glyph a svg glyph index
 */
function otColorGlyphReferenceSvg(face: face_t, glyph: codepoint_t): blob_t
/**
 * Tests whether a face includes any `COLR` color layers.
 * @param face #hb_face_t to work upon
 */
function otColorHasLayers(face: face_t): bool_t
/**
 * Tests whether a face includes a `CPAL` color-palette table.
 * @param face #hb_face_t to work upon
 */
function otColorHasPalettes(face: face_t): bool_t
/**
 * Tests whether a face has PNG glyph images (either in `CBDT` or `sbix` tables).
 * @param face #hb_face_t to work upon
 */
function otColorHasPng(face: face_t): bool_t
/**
 * Tests whether a face includes any `SVG` glyph images.
 * @param face #hb_face_t to work upon.
 */
function otColorHasSvg(face: face_t): bool_t
/**
 * Fetches the `name` table Name ID that provides display names for
 * the specificed color in a face's `CPAL` color palette.
 * 
 * Display names can be generic (e.g., "Background") or specific
 * (e.g., "Eye color").
 * @param face #hb_face_t to work upon
 * @param colorIndex The index of the color
 */
function otColorPaletteColorGetNameId(face: face_t, colorIndex: number): ot_name_id_t
/**
 * Fetches a list of the colors in a color palette.
 * 
 * After calling this function, `colors` will be filled with the palette
 * colors. If `colors` is NULL, the function will just return the number
 * of total colors without storing any actual colors; this can be used
 * for allocating a buffer of suitable size before calling
 * hb_ot_color_palette_get_colors() a second time.
 * @param face #hb_face_t to work upon
 * @param paletteIndex the index of the color palette to query
 * @param startOffset offset of the first color to retrieve
 */
function otColorPaletteGetColors(face: face_t, paletteIndex: number, startOffset: number): [ /* returnType */ number, /* colors */ color_t[] | null ]
/**
 * Fetches the number of color palettes in a face.
 * @param face #hb_face_t to work upon
 */
function otColorPaletteGetCount(face: face_t): number
/**
 * Fetches the flags defined for a color palette.
 * @param face #hb_face_t to work upon
 * @param paletteIndex The index of the color palette
 */
function otColorPaletteGetFlags(face: face_t, paletteIndex: number): ot_color_palette_flags_t
/**
 * Fetches the `name` table Name ID that provides display names for
 * a `CPAL` color palette.
 * 
 * Palette display names can be generic (e.g., "Default") or provide
 * specific, themed names (e.g., "Spring", "Summer", "Fall", and "Winter").
 * @param face #hb_face_t to work upon
 * @param paletteIndex The index of the color palette
 */
function otColorPaletteGetNameId(face: face_t, paletteIndex: number): ot_name_id_t
/**
 * Sets the font functions to use when working with `font`.
 * @param font #hb_font_t to work upon
 */
function otFontSetFuncs(font: font_t): void
/**
 * Fetches a list of all feature indexes in the specified face's GSUB table
 * or GPOS table, underneath the specified scripts, languages, and features.
 * If no list of scripts is provided, all scripts will be queried. If no list
 * of languages is provided, all languages will be queried. If no list of
 * features is provided, all features will be queried.
 * @param face #hb_face_t to work upon
 * @param tableTag HB_OT_TAG_GSUB or HB_OT_TAG_GPOS
 * @param scripts The array of scripts to collect features for
 * @param languages The array of languages to collect features for
 * @param features The array of features to collect
 */
function otLayoutCollectFeatures(face: face_t, tableTag: tag_t, scripts: tag_t, languages: tag_t, features: tag_t): /* featureIndexes */ set_t
/**
 * Fetches a list of all feature-lookup indexes in the specified face's GSUB
 * table or GPOS table, underneath the specified scripts, languages, and
 * features. If no list of scripts is provided, all scripts will be queried.
 * If no list of languages is provided, all languages will be queried. If no
 * list of features is provided, all features will be queried.
 * @param face #hb_face_t to work upon
 * @param tableTag HB_OT_TAG_GSUB or HB_OT_TAG_GPOS
 * @param scripts The array of scripts to collect lookups for
 * @param languages The array of languages to collect lookups for
 * @param features The array of features to collect lookups for
 */
function otLayoutCollectLookups(face: face_t, tableTag: tag_t, scripts: tag_t, languages: tag_t, features: tag_t): /* lookupIndexes */ set_t
/**
 * Fetches a list of the characters defined as having a variant under the specified
 * "Character Variant" ("cvXX") feature tag.
 * @param face #hb_face_t to work upon
 * @param tableTag table tag to query, "GSUB" or "GPOS".
 * @param featureIndex index of feature to query.
 * @param startOffset offset of the first character to retrieve
 */
function otLayoutFeatureGetCharacters(face: face_t, tableTag: tag_t, featureIndex: number, startOffset: number): [ /* returnType */ number, /* characters */ codepoint_t[] ]
/**
 * Fetches a list of all lookups enumerated for the specified feature, in
 * the specified face's GSUB table or GPOS table. The list returned will
 * begin at the offset provided.
 * @param face #hb_face_t to work upon
 * @param tableTag HB_OT_TAG_GSUB or HB_OT_TAG_GPOS
 * @param featureIndex The index of the requested feature
 * @param startOffset offset of the first lookup to retrieve
 */
function otLayoutFeatureGetLookups(face: face_t, tableTag: tag_t, featureIndex: number, startOffset: number): [ /* returnType */ number, /* lookupIndexes */ number[] ]
/**
 * Fetches name indices from feature parameters for "Stylistic Set" ('ssXX') or
 * "Character Variant" ('cvXX') features.
 * @param face #hb_face_t to work upon
 * @param tableTag table tag to query, "GSUB" or "GPOS".
 * @param featureIndex index of feature to query.
 */
function otLayoutFeatureGetNameIds(face: face_t, tableTag: tag_t, featureIndex: number): [ /* returnType */ bool_t, /* labelId */ ot_name_id_t, /* tooltipId */ ot_name_id_t, /* sampleId */ ot_name_id_t, /* numNamedParameters */ number, /* firstParamId */ ot_name_id_t ]
/**
 * Fetches a list of all lookups enumerated for the specified feature, in
 * the specified face's GSUB table or GPOS table, enabled at the specified
 * variations index. The list returned will begin at the offset provided.
 * @param face #hb_face_t to work upon
 * @param tableTag HB_OT_TAG_GSUB or HB_OT_TAG_GPOS
 * @param featureIndex The index of the feature to query
 * @param variationsIndex The index of the feature variation to query
 * @param startOffset offset of the first lookup to retrieve
 */
function otLayoutFeatureWithVariationsGetLookups(face: face_t, tableTag: tag_t, featureIndex: number, variationsIndex: number, startOffset: number): [ /* returnType */ number, /* lookupIndexes */ number[] ]
/**
 * Fetches a list of all attachment points for the specified glyph in the GDEF
 * table of the face. The list returned will begin at the offset provided.
 * 
 * Useful if the client program wishes to cache the list.
 * @param face The #hb_face_t to work on
 * @param glyph The #hb_codepoint_t code point to query
 * @param startOffset offset of the first attachment point to retrieve
 */
function otLayoutGetAttachPoints(face: face_t, glyph: codepoint_t, startOffset: number): [ /* returnType */ number, /* pointArray */ number[] ]
/**
 * Fetches a baseline value from the face.
 * @param font a font
 * @param baselineTag a baseline tag
 * @param direction text direction.
 * @param scriptTag script tag.
 * @param languageTag language tag.
 */
function otLayoutGetBaseline(font: font_t, baselineTag: ot_layout_baseline_tag_t, direction: direction_t, scriptTag: tag_t, languageTag: tag_t): [ /* returnType */ bool_t, /* coord */ position_t ]
/**
 * Fetches the GDEF class of the requested glyph in the specified face.
 * @param face The #hb_face_t to work on
 * @param glyph The #hb_codepoint_t code point to query
 */
function otLayoutGetGlyphClass(face: face_t, glyph: codepoint_t): ot_layout_glyph_class_t
/**
 * Retrieves the set of all glyphs from the face that belong to the requested
 * glyph class in the face's GDEF table.
 * @param face The #hb_face_t to work on
 * @param klass The #hb_ot_layout_glyph_class_t GDEF class to retrieve
 */
function otLayoutGetGlyphsInClass(face: face_t, klass: ot_layout_glyph_class_t): /* glyphs */ set_t
/**
 * Fetches a list of the caret positions defined for a ligature glyph in the GDEF
 * table of the font. The list returned will begin at the offset provided.
 * @param font The #hb_font_t to work on
 * @param direction The #hb_direction_t text direction to use
 * @param glyph The #hb_codepoint_t code point to query
 * @param startOffset offset of the first caret position to retrieve
 */
function otLayoutGetLigatureCarets(font: font_t, direction: direction_t, glyph: codepoint_t, startOffset: number): [ /* returnType */ number, /* caretArray */ position_t[] ]
/**
 * Fetches optical-size feature data (i.e., the `size` feature from GPOS). Note that
 * the subfamily_id and the subfamily name string (accessible via the subfamily_name_id)
 * as used here are defined as pertaining only to fonts within a font family that differ
 * specifically in their respective size ranges; other ways to differentiate fonts within
 * a subfamily are not covered by the `size` feature.
 * 
 * For more information on this distinction, see the [`size` feature documentation](
 * https://docs.microsoft.com/en-us/typography/opentype/spec/features_pt#tag-size).
 * @param face #hb_face_t to work upon
 */
function otLayoutGetSizeParams(face: face_t): [ /* returnType */ bool_t, /* designSize */ number, /* subfamilyId */ number, /* subfamilyNameId */ ot_name_id_t, /* rangeStart */ number, /* rangeEnd */ number ]
/**
 * Tests whether a face has any glyph classes defined in its GDEF table.
 * @param face #hb_face_t to work upon
 */
function otLayoutHasGlyphClasses(face: face_t): bool_t
function otLayoutHasPositioning(face: face_t): bool_t
/**
 * Tests whether the specified face includes any GSUB substitutions.
 * @param face #hb_face_t to work upon
 */
function otLayoutHasSubstitution(face: face_t): bool_t
/**
 * Fetches the index of a given feature tag in the specified face's GSUB table
 * or GPOS table, underneath the specified script and language.
 * @param face #hb_face_t to work upon
 * @param tableTag HB_OT_TAG_GSUB or HB_OT_TAG_GPOS
 * @param scriptIndex The index of the requested script tag
 * @param languageIndex The index of the requested language tag
 * @param featureTag #hb_tag_t of the feature tag requested
 */
function otLayoutLanguageFindFeature(face: face_t, tableTag: tag_t, scriptIndex: number, languageIndex: number, featureTag: tag_t): [ /* returnType */ bool_t, /* featureIndex */ number ]
/**
 * Fetches a list of all features in the specified face's GSUB table
 * or GPOS table, underneath the specified script and language. The list
 * returned will begin at the offset provided.
 * @param face #hb_face_t to work upon
 * @param tableTag HB_OT_TAG_GSUB or HB_OT_TAG_GPOS
 * @param scriptIndex The index of the requested script tag
 * @param languageIndex The index of the requested language tag
 * @param startOffset offset of the first feature tag to retrieve
 */
function otLayoutLanguageGetFeatureIndexes(face: face_t, tableTag: tag_t, scriptIndex: number, languageIndex: number, startOffset: number): [ /* returnType */ number, /* featureIndexes */ number[] ]
/**
 * Fetches a list of all features in the specified face's GSUB table
 * or GPOS table, underneath the specified script and language. The list
 * returned will begin at the offset provided.
 * @param face #hb_face_t to work upon
 * @param tableTag HB_OT_TAG_GSUB or HB_OT_TAG_GPOS
 * @param scriptIndex The index of the requested script tag
 * @param languageIndex The index of the requested language tag
 * @param startOffset offset of the first feature tag to retrieve
 */
function otLayoutLanguageGetFeatureTags(face: face_t, tableTag: tag_t, scriptIndex: number, languageIndex: number, startOffset: number): [ /* returnType */ number, /* featureTags */ tag_t[] ]
/**
 * Fetches the tag of a requested feature index in the given face's GSUB or GPOS table,
 * underneath the specified script and language.
 * @param face #hb_face_t to work upon
 * @param tableTag HB_OT_TAG_GSUB or HB_OT_TAG_GPOS
 * @param scriptIndex The index of the requested script tag
 * @param languageIndex The index of the requested language tag
 */
function otLayoutLanguageGetRequiredFeature(face: face_t, tableTag: tag_t, scriptIndex: number, languageIndex: number): [ /* returnType */ bool_t, /* featureIndex */ number, /* featureTag */ tag_t ]
/**
 * Fetches the index of a requested feature in the given face's GSUB or GPOS table,
 * underneath the specified script and language.
 * @param face #hb_face_t to work upon
 * @param tableTag HB_OT_TAG_GSUB or HB_OT_TAG_GPOS
 * @param scriptIndex The index of the requested script tag
 * @param languageIndex The index of the requested language tag
 */
function otLayoutLanguageGetRequiredFeatureIndex(face: face_t, tableTag: tag_t, scriptIndex: number, languageIndex: number): [ /* returnType */ bool_t, /* featureIndex */ number ]
/**
 * Fetches a list of all glyphs affected by the specified lookup in the
 * specified face's GSUB table or GPOS table.
 * @param face #hb_face_t to work upon
 * @param tableTag HB_OT_TAG_GSUB or HB_OT_TAG_GPOS
 * @param lookupIndex The index of the feature lookup to query
 */
function otLayoutLookupCollectGlyphs(face: face_t, tableTag: tag_t, lookupIndex: number): [ /* glyphsBefore */ set_t, /* glyphsInput */ set_t, /* glyphsAfter */ set_t, /* glyphsOutput */ set_t ]
/**
 * Fetches alternates of a glyph from a given GSUB lookup index.
 * @param face a face.
 * @param lookupIndex index of the feature lookup to query.
 * @param glyph a glyph id.
 * @param startOffset starting offset.
 */
function otLayoutLookupGetGlyphAlternates(face: face_t, lookupIndex: number, glyph: codepoint_t, startOffset: number): [ /* returnType */ number, /* alternateGlyphs */ codepoint_t[] ]
/**
 * Compute the transitive closure of glyphs needed for a
 * specified lookup.
 * @param face #hb_face_t to work upon
 * @param lookupIndex index of the feature lookup to query
 */
function otLayoutLookupSubstituteClosure(face: face_t, lookupIndex: number): /* glyphs */ set_t
/**
 * Tests whether a specified lookup in the specified face would
 * trigger a substitution on the given glyph sequence.
 * @param face #hb_face_t to work upon
 * @param lookupIndex The index of the lookup to query
 * @param glyphs The sequence of glyphs to query for substitution
 * @param glyphsLength The length of the glyph sequence
 * @param zeroContext #hb_bool_t indicating whether substitutions should be context-free
 */
function otLayoutLookupWouldSubstitute(face: face_t, lookupIndex: number, glyphs: codepoint_t, glyphsLength: number, zeroContext: bool_t): bool_t
/**
 * Compute the transitive closure of glyphs needed for all of the
 * provided lookups.
 * @param face #hb_face_t to work upon
 * @param lookups The set of lookups to query
 */
function otLayoutLookupsSubstituteClosure(face: face_t, lookups: set_t): /* glyphs */ set_t
/**
 * Fetches the index of a given language tag in the specified face's GSUB table
 * or GPOS table, underneath the specified script tag.
 * @param face #hb_face_t to work upon
 * @param tableTag HB_OT_TAG_GSUB or HB_OT_TAG_GPOS
 * @param scriptIndex The index of the requested script tag
 * @param languageTag The #hb_tag_t of the requested language
 * @param languageIndex The index of the requested language
 */
function otLayoutScriptFindLanguage(face: face_t, tableTag: tag_t, scriptIndex: number, languageTag: tag_t, languageIndex: number): bool_t
/**
 * Fetches a list of language tags in the given face's GSUB or GPOS table, underneath
 * the specified script index. The list returned will begin at the offset provided.
 * @param face #hb_face_t to work upon
 * @param tableTag HB_OT_TAG_GSUB or HB_OT_TAG_GPOS
 * @param scriptIndex The index of the requested script tag
 * @param startOffset offset of the first language tag to retrieve
 */
function otLayoutScriptGetLanguageTags(face: face_t, tableTag: tag_t, scriptIndex: number, startOffset: number): [ /* returnType */ number, /* languageTags */ tag_t[] ]
/**
 * Fetches the index of a given language tag in the specified face's GSUB table
 * or GPOS table, underneath the specified script index.
 * @param face #hb_face_t to work upon
 * @param tableTag HB_OT_TAG_GSUB or HB_OT_TAG_GPOS
 * @param scriptIndex The index of the requested script tag
 * @param languageCount The number of languages in the specified script
 * @param languageTags The array of language tags
 */
function otLayoutScriptSelectLanguage(face: face_t, tableTag: tag_t, scriptIndex: number, languageCount: number, languageTags: tag_t): [ /* returnType */ bool_t, /* languageIndex */ number ]
/**
 * Deprecated since 2.0.0
 * @param face #hb_face_t to work upon
 * @param tableTag HB_OT_TAG_GSUB or HB_OT_TAG_GPOS
 * @param scriptTags Array of #hb_tag_t script tags
 */
function otLayoutTableChooseScript(face: face_t, tableTag: tag_t, scriptTags: tag_t): [ /* returnType */ bool_t, /* scriptIndex */ number, /* chosenScript */ tag_t ]
/**
 * Fetches a list of feature variations in the specified face's GSUB table
 * or GPOS table, at the specified variation coordinates.
 * @param face #hb_face_t to work upon
 * @param tableTag HB_OT_TAG_GSUB or HB_OT_TAG_GPOS
 * @param coords The variation coordinates to query
 * @param numCoords The number of variation coordinates
 */
function otLayoutTableFindFeatureVariations(face: face_t, tableTag: tag_t, coords: number, numCoords: number): [ /* returnType */ bool_t, /* variationsIndex */ number ]
/**
 * Fetches the index if a given script tag in the specified face's GSUB table
 * or GPOS table.
 * @param face #hb_face_t to work upon
 * @param tableTag HB_OT_TAG_GSUB or HB_OT_TAG_GPOS
 * @param scriptTag #hb_tag_t of the script tag requested
 */
function otLayoutTableFindScript(face: face_t, tableTag: tag_t, scriptTag: tag_t): [ /* returnType */ bool_t, /* scriptIndex */ number ]
/**
 * Fetches a list of all feature tags in the given face's GSUB or GPOS table.
 * @param face #hb_face_t to work upon
 * @param tableTag HB_OT_TAG_GSUB or HB_OT_TAG_GPOS
 * @param startOffset offset of the first feature tag to retrieve
 */
function otLayoutTableGetFeatureTags(face: face_t, tableTag: tag_t, startOffset: number): [ /* returnType */ number, /* featureTags */ tag_t[] ]
/**
 * Fetches the total number of lookups enumerated in the specified
 * face's GSUB table or GPOS table.
 * @param face #hb_face_t to work upon
 * @param tableTag HB_OT_TAG_GSUB or HB_OT_TAG_GPOS
 */
function otLayoutTableGetLookupCount(face: face_t, tableTag: tag_t): number
/**
 * Fetches a list of all scripts enumerated in the specified face's GSUB table
 * or GPOS table. The list returned will begin at the offset provided.
 * @param face #hb_face_t to work upon
 * @param tableTag HB_OT_TAG_GSUB or HB_OT_TAG_GPOS
 * @param startOffset offset of the first script tag to retrieve
 */
function otLayoutTableGetScriptTags(face: face_t, tableTag: tag_t, startOffset: number): [ /* returnType */ number, /* scriptTags */ tag_t[] ]
function otLayoutTableSelectScript(face: face_t, tableTag: tag_t, scriptCount: number, scriptTags: tag_t): [ /* returnType */ bool_t, /* scriptIndex */ number, /* chosenScript */ tag_t ]
/**
 * Fetches the specified math constant. For most constants, the value returned
 * is an #hb_position_t.
 * 
 * However, if the requested constant is #HB_OT_MATH_CONSTANT_SCRIPT_PERCENT_SCALE_DOWN,
 * #HB_OT_MATH_CONSTANT_SCRIPT_SCRIPT_PERCENT_SCALE_DOWN or
 * #HB_OT_MATH_CONSTANT_SCRIPT_PERCENT_SCALE_DOWN, then the return value is
 * an integer between 0 and 100 representing that percentage.
 * @param font #hb_font_t to work upon
 * @param constant #hb_ot_math_constant_t the constant to retrieve
 */
function otMathGetConstant(font: font_t, constant: ot_math_constant_t): position_t
/**
 * Fetches the GlyphAssembly for the specified font, glyph index, and direction.
 * Returned are a list of #hb_ot_math_glyph_part_t glyph parts that can be
 * used to draw the glyph and an italics-correction value (if one is defined
 * in the font).
 * 
 * <note>The `direction` parameter is only used to select between horizontal
 * or vertical directions for the construction. Even though all #hb_direction_t
 * values are accepted, only the result of #HB_DIRECTION_IS_HORIZONTAL is
 * considered.</note>
 * @param font #hb_font_t to work upon
 * @param glyph The index of the glyph to stretch
 * @param direction direction of the stretching (horizontal or vertical)
 * @param startOffset offset of the first glyph part to retrieve
 */
function otMathGetGlyphAssembly(font: font_t, glyph: codepoint_t, direction: direction_t, startOffset: number): [ /* returnType */ number, /* parts */ ot_math_glyph_part_t[], /* italicsCorrection */ position_t ]
/**
 * Fetches an italics-correction value (if one exists) for the specified
 * glyph index.
 * @param font #hb_font_t to work upon
 * @param glyph The glyph index from which to retrieve the value
 */
function otMathGetGlyphItalicsCorrection(font: font_t, glyph: codepoint_t): position_t
/**
 * Fetches the math kerning (cut-ins) value for the specified font, glyph index, and
 * `kern`.
 * 
 * If the MathKern table is found, the function examines it to find a height
 * value that is greater or equal to `correction_height`. If such a height
 * value is found, corresponding kerning value from the table is returned. If
 * no such height value is found, the last kerning value is returned.
 * @param font #hb_font_t to work upon
 * @param glyph The glyph index from which to retrieve the value
 * @param kern The #hb_ot_math_kern_t from which to retrieve the value
 * @param correctionHeight the correction height to use to determine the kerning.
 */
function otMathGetGlyphKerning(font: font_t, glyph: codepoint_t, kern: ot_math_kern_t, correctionHeight: position_t): position_t
/**
 * Fetches a top-accent-attachment value (if one exists) for the specified
 * glyph index.
 * 
 * For any glyph that does not have a top-accent-attachment value - that is,
 * a glyph not covered by the `MathTopAccentAttachment` table (or, when
 * `font` has no `MathTopAccentAttachment` table or no `MATH` table, any
 * glyph) - the function synthesizes a value, returning the position at
 * one-half the glyph's advance width.
 * @param font #hb_font_t to work upon
 * @param glyph The glyph index from which to retrieve the value
 */
function otMathGetGlyphTopAccentAttachment(font: font_t, glyph: codepoint_t): position_t
/**
 * Fetches the MathGlyphConstruction for the specified font, glyph index, and
 * direction. The corresponding list of size variants is returned as a list of
 * #hb_ot_math_glyph_variant_t structs.
 * 
 * <note>The `direction` parameter is only used to select between horizontal
 * or vertical directions for the construction. Even though all #hb_direction_t
 * values are accepted, only the result of #HB_DIRECTION_IS_HORIZONTAL is
 * considered.</note>
 * @param font #hb_font_t to work upon
 * @param glyph The index of the glyph to stretch
 * @param direction The direction of the stretching (horizontal or vertical)
 * @param startOffset offset of the first variant to retrieve
 */
function otMathGetGlyphVariants(font: font_t, glyph: codepoint_t, direction: direction_t, startOffset: number): [ /* returnType */ number, /* variants */ ot_math_glyph_variant_t[] ]
/**
 * Fetches the MathVariants table for the specified font and returns the
 * minimum overlap of connecting glyphs that are required to draw a glyph
 * assembly in the specified direction.
 * 
 * <note>The `direction` parameter is only used to select between horizontal
 * or vertical directions for the construction. Even though all #hb_direction_t
 * values are accepted, only the result of #HB_DIRECTION_IS_HORIZONTAL is
 * considered.</note>
 * @param font #hb_font_t to work upon
 * @param direction direction of the stretching (horizontal or vertical)
 */
function otMathGetMinConnectorOverlap(font: font_t, direction: direction_t): position_t
/**
 * Tests whether a face has a `MATH` table.
 * @param face #hb_face_t to test
 */
function otMathHasData(face: face_t): bool_t
/**
 * Tests whether the given glyph index is an extended shape in the face.
 * @param face #hb_face_t to work upon
 * @param glyph The glyph index to test
 */
function otMathIsGlyphExtendedShape(face: face_t, glyph: codepoint_t): bool_t
function otMetaGetEntryTags(face: face_t, startOffset: number): [ /* returnType */ number, /* entries */ ot_meta_tag_t[] ]
/**
 * It fetches metadata entry of a given tag from a font.
 * @param face a #hb_face_t object.
 * @param metaTag tag of metadata you like to have.
 */
function otMetaReferenceEntry(face: face_t, metaTag: ot_meta_tag_t): blob_t
/**
 * It fetches metrics value corresponding to a given tag from a font.
 * @param font a #hb_font_t object.
 * @param metricsTag tag of metrics value you like to fetch.
 */
function otMetricsGetPosition(font: font_t, metricsTag: ot_metrics_tag_t): [ /* returnType */ bool_t, /* position */ position_t ]
function otMetricsGetVariation(font: font_t, metricsTag: ot_metrics_tag_t): number
function otMetricsGetXVariation(font: font_t, metricsTag: ot_metrics_tag_t): position_t
function otMetricsGetYVariation(font: font_t, metricsTag: ot_metrics_tag_t): position_t
/**
 * Fetches a font name from the OpenType 'name' table.
 * If `language` is #HB_LANGUAGE_INVALID, English ("en") is assumed.
 * Returns string in UTF-16 encoding.
 * @param face font face.
 * @param nameId OpenType name identifier to fetch.
 * @param language language to fetch the name for.
 */
function otNameGetUtf16(face: face_t, nameId: ot_name_id_t, language: language_t): [ /* returnType */ number, /* text */ number[] ]
/**
 * Fetches a font name from the OpenType 'name' table.
 * If `language` is #HB_LANGUAGE_INVALID, English ("en") is assumed.
 * Returns string in UTF-32 encoding.
 * @param face font face.
 * @param nameId OpenType name identifier to fetch.
 * @param language language to fetch the name for.
 */
function otNameGetUtf32(face: face_t, nameId: ot_name_id_t, language: language_t): [ /* returnType */ number, /* text */ number[] ]
/**
 * Fetches a font name from the OpenType 'name' table.
 * If `language` is #HB_LANGUAGE_INVALID, English ("en") is assumed.
 * Returns string in UTF-8 encoding.
 * @param face font face.
 * @param nameId OpenType name identifier to fetch.
 * @param language language to fetch the name for.
 */
function otNameGetUtf8(face: face_t, nameId: ot_name_id_t, language: language_t): [ /* returnType */ number, /* text */ string[] ]
/**
 * Enumerates all available name IDs and language combinations. Returned
 * array is owned by the `face` and should not be modified.  It can be
 * used as long as `face` is alive.
 * @param face font face.
 */
function otNameListNames(face: face_t): ot_name_entry_t[]
/**
 * Computes the transitive closure of glyphs needed for a specified
 * input buffer under the given font and feature list. The closure is
 * computed as a set, not as a list.
 * @param font #hb_font_t to work upon
 * @param buffer The input buffer to compute from
 * @param features The features enabled on the buffer
 */
function otShapeGlyphsClosure(font: font_t, buffer: buffer_t, features: feature_t[]): /* glyphs */ set_t
function otTagFromLanguage(language: language_t): tag_t
function otTagToLanguage(tag: tag_t): language_t
function otTagToScript(tag: tag_t): script_t
function otTagsFromScript(script: script_t, scriptTag1: tag_t, scriptTag2: tag_t): void
/**
 * Converts an #hb_script_t and an #hb_language_t to script and language tags.
 * @param script an #hb_script_t to convert.
 * @param language an #hb_language_t to convert.
 * @param scriptCount maximum number of script tags to retrieve (IN) and actual number of script tags retrieved (OUT)
 * @param languageCount maximum number of language tags to retrieve (IN) and actual number of language tags retrieved (OUT)
 */
function otTagsFromScriptAndLanguage(script: script_t, language: language_t, scriptCount: number | null, languageCount: number | null): [ /* scriptTags */ tag_t, /* languageTags */ tag_t ]
/**
 * Converts a script tag and a language tag to an #hb_script_t and an
 * #hb_language_t.
 * @param scriptTag a script tag
 * @param languageTag a language tag
 * @param script the #hb_script_t corresponding to `script_tag` (OUT).
 * @param language the #hb_language_t corresponding to `script_tag` and `language_tag` (OUT).
 */
function otTagsToScriptAndLanguage(scriptTag: tag_t, languageTag: tag_t, script: script_t | null, language: language_t | null): void
/**
 * Fetches the variation-axis information corresponding to the specified axis tag
 * in the specified face.
 * @param face #hb_face_t to work upon
 * @param axisTag The #hb_tag_t of the variation axis to query
 * @param axisIndex The index of the variation axis
 */
function otVarFindAxis(face: face_t, axisTag: tag_t, axisIndex: number): [ /* returnType */ bool_t, /* axisInfo */ ot_var_axis_t ]
/**
 * Fetches the variation-axis information corresponding to the specified axis tag
 * in the specified face.
 * @param face #hb_face_t to work upon
 * @param axisTag The #hb_tag_t of the variation axis to query
 */
function otVarFindAxisInfo(face: face_t, axisTag: tag_t): [ /* returnType */ bool_t, /* axisInfo */ ot_var_axis_info_t ]
/**
 * Fetches a list of all variation axes in the specified face. The list returned will begin
 * at the offset provided.
 * @param face #hb_face_t to work upon
 * @param startOffset offset of the first lookup to retrieve
 */
function otVarGetAxes(face: face_t, startOffset: number): [ /* returnType */ number, /* axesArray */ ot_var_axis_t[] ]
/**
 * Fetches the number of OpenType variation axes included in the face.
 * @param face The #hb_face_t to work on
 */
function otVarGetAxisCount(face: face_t): number
/**
 * Fetches a list of all variation axes in the specified face. The list returned will begin
 * at the offset provided.
 * @param face #hb_face_t to work upon
 * @param startOffset offset of the first lookup to retrieve
 */
function otVarGetAxisInfos(face: face_t, startOffset: number): [ /* returnType */ number, /* axesArray */ ot_var_axis_info_t[] ]
/**
 * Fetches the number of named instances included in the face.
 * @param face The #hb_face_t to work on
 */
function otVarGetNamedInstanceCount(face: face_t): number
/**
 * Tests whether a face includes any OpenType variation data in the `fvar` table.
 * @param face The #hb_face_t to work on
 */
function otVarHasData(face: face_t): bool_t
/**
 * Fetches the design-space coordinates corresponding to the given
 * named instance in the face.
 * @param face The #hb_face_t to work on
 * @param instanceIndex The index of the named instance to query
 */
function otVarNamedInstanceGetDesignCoords(face: face_t, instanceIndex: number): [ /* returnType */ number, /* coords */ number[] ]
/**
 * Fetches the `name` table Name ID that provides display names for
 * the "PostScript name" defined for the given named instance in the face.
 * @param face The #hb_face_t to work on
 * @param instanceIndex The index of the named instance to query
 */
function otVarNamedInstanceGetPostscriptNameId(face: face_t, instanceIndex: number): ot_name_id_t
/**
 * Fetches the `name` table Name ID that provides display names for
 * the "Subfamily name" defined for the given named instance in the face.
 * @param face The #hb_face_t to work on
 * @param instanceIndex The index of the named instance to query
 */
function otVarNamedInstanceGetSubfamilyNameId(face: face_t, instanceIndex: number): ot_name_id_t
/**
 * Normalizes the given design-space coordinates. The minimum and maximum
 * values for the axis are mapped to the interval [-1,1], with the default
 * axis value mapped to 0.
 * 
 * Any additional scaling defined in the face's `avar` table is also
 * applied, as described at https://docs.microsoft.com/en-us/typography/opentype/spec/avar
 * @param face The #hb_face_t to work on
 * @param coordsLength The length of the coordinate array
 * @param designCoords The design-space coordinates to normalize
 */
function otVarNormalizeCoords(face: face_t, coordsLength: number, designCoords: number): /* normalizedCoords */ number
/**
 * Normalizes all of the coordinates in the given list of variation axes.
 * @param face The #hb_face_t to work on
 * @param variations The array of variations to normalize
 * @param variationsLength The number of variations to normalize
 */
function otVarNormalizeVariations(face: face_t, variations: variation_t, variationsLength: number): /* coords */ number[]
/**
 * Converts an ISO 15924 script tag to a corresponding #hb_script_t.
 * @param tag an #hb_tag_t representing an ISO 15924 tag.
 */
function scriptFromIso15924Tag(tag: tag_t): script_t
/**
 * Converts a string `str` representing an ISO 15924 script tag to a
 * corresponding #hb_script_t. Shorthand for hb_tag_from_string() then
 * hb_script_from_iso15924_tag().
 * @param str a string representing an       ISO 15924 tag.
 */
function scriptFromString(str: Uint8Array): script_t
function scriptGetHorizontalDirection(script: script_t): direction_t
/**
 * See hb_script_from_iso15924_tag().
 * @param script an #hb_script_t to convert.
 */
function scriptToIso15924Tag(script: script_t): tag_t
/**
 * Checks the equality of two #hb_segment_properties_t's.
 * @param a first #hb_segment_properties_t to compare.
 * @param b second #hb_segment_properties_t to compare.
 */
function segmentPropertiesEqual(a: segment_properties_t, b: segment_properties_t): bool_t
/**
 * Creates a hash representing `p`.
 * @param p #hb_segment_properties_t to hash.
 */
function segmentPropertiesHash(p: segment_properties_t): number
function setAdd(set: set_t, codepoint: codepoint_t): void
function setAddRange(set: set_t, first: codepoint_t, last: codepoint_t): void
function setAllocationSuccessful(set: set_t): bool_t
function setClear(set: set_t): void
function setCreate(): set_t
function setDel(set: set_t, codepoint: codepoint_t): void
function setDelRange(set: set_t, first: codepoint_t, last: codepoint_t): void
function setGetEmpty(): set_t
/**
 * Finds the maximum number in the set.
 * @param set a set.
 */
function setGetMax(set: set_t): codepoint_t
/**
 * Finds the minimum number in the set.
 * @param set a set.
 */
function setGetMin(set: set_t): codepoint_t
/**
 * Returns the number of numbers in the set.
 * @param set a set.
 */
function setGetPopulation(set: set_t): number
function setHas(set: set_t, codepoint: codepoint_t): bool_t
function setIntersect(set: set_t, other: set_t): void
function setInvert(set: set_t): void
function setIsEmpty(set: set_t): bool_t
function setIsEqual(set: set_t, other: set_t): bool_t
function setIsSubset(set: set_t, largerSet: set_t): bool_t
/**
 * Gets the next number in `set` that is greater than current value of `codepoint`.
 * 
 * Set `codepoint` to %HB_SET_VALUE_INVALID to get started.
 * @param set a set.
 * @param codepoint 
 */
function setNext(set: set_t, codepoint: codepoint_t): [ /* returnType */ bool_t, /* codepoint */ codepoint_t ]
/**
 * Gets the next consecutive range of numbers in `set` that
 * are greater than current value of `last`.
 * 
 * Set `last` to %HB_SET_VALUE_INVALID to get started.
 * @param set a set.
 * @param last input current last and output last codepoint in the range.
 */
function setNextRange(set: set_t, last: codepoint_t): [ /* returnType */ bool_t, /* first */ codepoint_t, /* last */ codepoint_t ]
/**
 * Gets the previous number in `set` that is lower than current value of `codepoint`.
 * 
 * Set `codepoint` to %HB_SET_VALUE_INVALID to get started.
 * @param set a set.
 * @param codepoint 
 */
function setPrevious(set: set_t, codepoint: codepoint_t): [ /* returnType */ bool_t, /* codepoint */ codepoint_t ]
/**
 * Gets the previous consecutive range of numbers in `set` that
 * are less than current value of `first`.
 * 
 * Set `first` to %HB_SET_VALUE_INVALID to get started.
 * @param set a set.
 * @param first input current first and output first codepoint in the range.
 */
function setPreviousRange(set: set_t, first: codepoint_t): [ /* returnType */ bool_t, /* first */ codepoint_t, /* last */ codepoint_t ]
function setSet(set: set_t, other: set_t): void
function setSubtract(set: set_t, other: set_t): void
function setSymmetricDifference(set: set_t, other: set_t): void
function setUnion(set: set_t, other: set_t): void
/**
 * Shapes `buffer` using `font` turning its Unicode characters content to
 * positioned glyphs. If `features` is not %NULL, it will be used to control the
 * features applied during shaping. If two `features` have the same tag but
 * overlapping ranges the value of the feature with the higher index takes
 * precedence.
 * @param font an #hb_font_t to use for shaping
 * @param buffer an #hb_buffer_t to shape
 * @param features an array of user    specified #hb_feature_t or %NULL
 */
function shape(font: font_t, buffer: buffer_t, features: feature_t[] | null): void
/**
 * See hb_shape() for details. If `shaper_list` is not %NULL, the specified
 * shapers will be used in the given order, otherwise the default shapers list
 * will be used.
 * @param font an #hb_font_t to use for shaping
 * @param buffer an #hb_buffer_t to shape
 * @param features an array of user    specified #hb_feature_t or %NULL
 * @param shaperList a %NULL-terminated    array of shapers to use or %NULL
 */
function shapeFull(font: font_t, buffer: buffer_t, features: feature_t[] | null, shaperList: string[] | null): bool_t
/**
 * Retrieves the list of shapers supported by HarfBuzz.
 */
function shapeListShapers(): string[]
/**
 * Constructs a shaping plan for a combination of `face,` `user_features,` `props,`
 * and `shaper_list`.
 * @param face #hb_face_t to use
 * @param props The #hb_segment_properties_t of the segment
 * @param userFeatures The list of user-selected features
 * @param shaperList List of shapers to try
 */
function shapePlanCreate(face: face_t, props: segment_properties_t, userFeatures: feature_t[], shaperList: string[]): shape_plan_t
/**
 * The variable-font version of #hb_shape_plan_create.
 * Constructs a shaping plan for a combination of `face,` `user_features,` `props,`
 * and `shaper_list,` plus the variation-space coordinates `coords`.
 * @param face #hb_face_t to use
 * @param props The #hb_segment_properties_t of the segment
 * @param userFeatures The list of user-selected features
 * @param coords The list of variation-space coordinates
 * @param shaperList List of shapers to try
 */
function shapePlanCreate2(face: face_t, props: segment_properties_t, userFeatures: feature_t[], coords: number[], shaperList: string[]): shape_plan_t
/**
 * Creates a cached shaping plan suitable for reuse, for a combination
 * of `face,` `user_features,` `props,` and `shaper_list`.
 * @param face #hb_face_t to use
 * @param props The #hb_segment_properties_t of the segment
 * @param userFeatures The list of user-selected features
 * @param shaperList List of shapers to try
 */
function shapePlanCreateCached(face: face_t, props: segment_properties_t, userFeatures: feature_t[], shaperList: string[]): shape_plan_t
/**
 * The variable-font version of #hb_shape_plan_create_cached.
 * Creates a cached shaping plan suitable for reuse, for a combination
 * of `face,` `user_features,` `props,` and `shaper_list,` plus the
 * variation-space coordinates `coords`.
 * @param face #hb_face_t to use
 * @param props The #hb_segment_properties_t of the segment
 * @param userFeatures The list of user-selected features
 * @param coords The list of variation-space coordinates
 * @param shaperList List of shapers to try
 */
function shapePlanCreateCached2(face: face_t, props: segment_properties_t, userFeatures: feature_t[], coords: number[], shaperList: string[]): shape_plan_t
/**
 * Executes the given shaping plan on the specified buffer, using
 * the given `font` and `features`.
 * @param shapePlan A shaping plan
 * @param font The #hb_font_t to use
 * @param buffer The #hb_buffer_t to work upon
 * @param features Features to enable
 */
function shapePlanExecute(shapePlan: shape_plan_t, font: font_t, buffer: buffer_t, features: feature_t[]): bool_t
/**
 * Fetches the singleton empty shaping plan.
 */
function shapePlanGetEmpty(): shape_plan_t
/**
 * Fetches the shaper from a given shaping plan.
 * @param shapePlan A shaping plan
 */
function shapePlanGetShaper(shapePlan: shape_plan_t): string
function tagFromString(str: Uint8Array): tag_t
function tagToString(tag: tag_t): /* buf */ Uint8Array
/**
 * Retrieves the Canonical Combining Class (ccc) property
 * of code point `unicode`.
 * @param ufuncs The Unicode-functions structure
 * @param unicode The code point to query
 */
function unicodeCombiningClass(ufuncs: unicode_funcs_t, unicode: codepoint_t): unicode_combining_class_t
/**
 * Composes the code point sequence `a,``b` by canonical equivalence into
 * code point `ab`.
 * @param ufuncs The Unicode-functions structure
 * @param a The first code point to compose
 * @param b The second code point to compose
 */
function unicodeCompose(ufuncs: unicode_funcs_t, a: codepoint_t, b: codepoint_t): [ /* returnType */ bool_t, /* ab */ codepoint_t ]
/**
 * Decomposes code point `ab` by canonical equivalence, into code points
 * `a` and `b`.
 * @param ufuncs The Unicode-functions structure
 * @param ab The code point to decompose
 */
function unicodeDecompose(ufuncs: unicode_funcs_t, ab: codepoint_t): [ /* returnType */ bool_t, /* a */ codepoint_t, /* b */ codepoint_t ]
/**
 * Fetches the compatibility decomposition of a Unicode
 * code point. Deprecated.
 * @param ufuncs The Unicode-functions structure
 * @param u Code point to decompose
 */
function unicodeDecomposeCompatibility(ufuncs: unicode_funcs_t, u: codepoint_t): [ /* returnType */ number, /* decomposed */ codepoint_t ]
function unicodeEastasianWidth(ufuncs: unicode_funcs_t, unicode: codepoint_t): number
/**
 * Creates a new #hb_unicode_funcs_t structure of Unicode functions.
 * @param parent Parent Unicode-functions structure
 */
function unicodeFuncsCreate(parent: unicode_funcs_t | null): unicode_funcs_t
/**
 * Fetches a pointer to the default Unicode-functions structure that is used
 * when no functions are explicitly set on #hb_buffer_t.
 */
function unicodeFuncsGetDefault(): unicode_funcs_t
/**
 * Fetches the singleton empty Unicode-functions structure.
 */
function unicodeFuncsGetEmpty(): unicode_funcs_t
/**
 * Fetches the parent of the Unicode-functions structure
 * `ufuncs`.
 * @param ufuncs The Unicode-functions structure
 */
function unicodeFuncsGetParent(ufuncs: unicode_funcs_t): unicode_funcs_t
/**
 * Tests whether the specified Unicode-functions structure
 * is immutable.
 * @param ufuncs The Unicode-functions structure
 */
function unicodeFuncsIsImmutable(ufuncs: unicode_funcs_t): bool_t
/**
 * Makes the specified Unicode-functions structure
 * immutable.
 * @param ufuncs The Unicode-functions structure
 */
function unicodeFuncsMakeImmutable(ufuncs: unicode_funcs_t): void
/**
 * Sets the implementation function for #hb_unicode_combining_class_func_t.
 * @param ufuncs A Unicode-functions structure
 * @param func The callback function to assign
 */
function unicodeFuncsSetCombiningClassFunc(ufuncs: unicode_funcs_t, func: unicode_combining_class_func_t): void
/**
 * Sets the implementation function for #hb_unicode_compose_func_t.
 * @param ufuncs A Unicode-functions structure
 * @param func The callback function to assign
 */
function unicodeFuncsSetComposeFunc(ufuncs: unicode_funcs_t, func: unicode_compose_func_t): void
function unicodeFuncsSetDecomposeCompatibilityFunc(ufuncs: unicode_funcs_t, func: unicode_decompose_compatibility_func_t): void
/**
 * Sets the implementation function for #hb_unicode_decompose_func_t.
 * @param ufuncs A Unicode-functions structure
 * @param func The callback function to assign
 */
function unicodeFuncsSetDecomposeFunc(ufuncs: unicode_funcs_t, func: unicode_decompose_func_t): void
function unicodeFuncsSetEastasianWidthFunc(ufuncs: unicode_funcs_t, func: unicode_eastasian_width_func_t): void
/**
 * Sets the implementation function for #hb_unicode_general_category_func_t.
 * @param ufuncs A Unicode-functions structure
 * @param func The callback function to assign
 */
function unicodeFuncsSetGeneralCategoryFunc(ufuncs: unicode_funcs_t, func: unicode_general_category_func_t): void
/**
 * Sets the implementation function for #hb_unicode_mirroring_func_t.
 * @param ufuncs A Unicode-functions structure
 * @param func The callback function to assign
 */
function unicodeFuncsSetMirroringFunc(ufuncs: unicode_funcs_t, func: unicode_mirroring_func_t): void
/**
 * Sets the implementation function for #hb_unicode_script_func_t.
 * @param ufuncs A Unicode-functions structure
 * @param func The callback function to assign
 */
function unicodeFuncsSetScriptFunc(ufuncs: unicode_funcs_t, func: unicode_script_func_t): void
/**
 * Retrieves the General Category (gc) property
 * of code point `unicode`.
 * @param ufuncs The Unicode-functions structure
 * @param unicode The code point to query
 */
function unicodeGeneralCategory(ufuncs: unicode_funcs_t, unicode: codepoint_t): unicode_general_category_t
/**
 * Retrieves the Bi-directional Mirroring Glyph code
 * point defined for code point `unicode`.
 * @param ufuncs The Unicode-functions structure
 * @param unicode The code point to query
 */
function unicodeMirroring(ufuncs: unicode_funcs_t, unicode: codepoint_t): codepoint_t
/**
 * Retrieves the #hb_script_t script to which code
 * point `unicode` belongs.
 * @param ufuncs The Unicode-functions structure
 * @param unicode The code point to query
 */
function unicodeScript(ufuncs: unicode_funcs_t, unicode: codepoint_t): script_t
function variationFromString(str: string, len: number, variation: variation_t): bool_t
function variationToString(variation: variation_t, buf: string, size: number): void
/**
 * Returns library version as three integer components.
 */
function version(): [ /* major */ number, /* minor */ number, /* micro */ number ]
function versionAtleast(major: number, minor: number, micro: number): bool_t
/**
 * Returns library version as a string with three components.
 */
function versionString(): string
interface buffer_message_func_t {
    (buffer: buffer_t, font: font_t, message: string): bool_t
}
interface destroy_func_t {
    (): void
}
interface font_get_font_extents_func_t {
    (font: font_t, fontData: object | null, extents: font_extents_t): bool_t
}
interface font_get_glyph_advance_func_t {
    (font: font_t, fontData: object | null, glyph: codepoint_t): position_t
}
interface font_get_glyph_advances_func_t {
    (font: font_t, fontData: object | null, count: number, firstGlyph: codepoint_t, glyphStride: number, firstAdvance: position_t, advanceStride: number): void
}
interface font_get_glyph_contour_point_func_t {
    (font: font_t, fontData: object | null, glyph: codepoint_t, pointIndex: number, x: position_t, y: position_t): bool_t
}
interface font_get_glyph_extents_func_t {
    (font: font_t, fontData: object | null, glyph: codepoint_t, extents: glyph_extents_t): bool_t
}
interface font_get_glyph_from_name_func_t {
    (font: font_t, fontData: object | null, name: string, len: number, glyph: codepoint_t): bool_t
}
interface font_get_glyph_func_t {
    (font: font_t, fontData: object | null, unicode: codepoint_t, variationSelector: codepoint_t, glyph: codepoint_t): bool_t
}
interface font_get_glyph_kerning_func_t {
    (font: font_t, fontData: object | null, firstGlyph: codepoint_t, secondGlyph: codepoint_t): position_t
}
interface font_get_glyph_name_func_t {
    (font: font_t, fontData: object | null, glyph: codepoint_t, name: string, size: number): bool_t
}
interface font_get_glyph_origin_func_t {
    (font: font_t, fontData: object | null, glyph: codepoint_t, x: position_t, y: position_t): bool_t
}
interface font_get_nominal_glyph_func_t {
    (font: font_t, fontData: object | null, unicode: codepoint_t, glyph: codepoint_t): bool_t
}
interface font_get_nominal_glyphs_func_t {
    (font: font_t, fontData: object | null, count: number, firstUnicode: codepoint_t, unicodeStride: number, firstGlyph: codepoint_t, glyphStride: number): number
}
interface font_get_variation_glyph_func_t {
    (font: font_t, fontData: object | null, unicode: codepoint_t, variationSelector: codepoint_t, glyph: codepoint_t): bool_t
}
interface reference_table_func_t {
    (face: face_t, tag: tag_t): blob_t
}
/**
 * A virtual method for the #hb_unicode_funcs_t structure.
 * 
 * This method should retrieve the Canonical Combining Class (ccc)
 * property for a specified Unicode code point.
 * @callback 
 * @param ufuncs 
 * @param unicode 
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
 * @callback 
 * @param ufuncs 
 * @param a 
 * @param b 
 * @param ab 
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
 * @callback 
 * @param ufuncs a Unicode function structure
 * @param u codepoint to decompose
 * @param decomposed address of codepoint array (of length %HB_UNICODE_MAX_DECOMPOSITION_LEN) to write decomposition into
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
 * @callback 
 * @param ufuncs 
 * @param ab 
 * @param a 
 * @param b 
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
 * @callback 
 * @param ufuncs 
 * @param unicode 
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
 * @callback 
 * @param ufuncs 
 * @param unicode 
 */
interface unicode_mirroring_func_t {
    (ufuncs: unicode_funcs_t, unicode: codepoint_t): codepoint_t
}
/**
 * A virtual method for the #hb_unicode_funcs_t structure.
 * 
 * This method should retrieve the Script property for a
 * specified Unicode code point.
 * @callback 
 * @param ufuncs 
 * @param unicode 
 */
interface unicode_script_func_t {
    (ufuncs: unicode_funcs_t, unicode: codepoint_t): script_t
}
interface blob_t {
}

class blob_t {

    // Own properties of HarfBuzz-0.0.HarfBuzz.blob_t

    static name: string
}

interface buffer_t {
}

/**
 * The main structure holding the input text and its properties before shaping,
 * and output glyphs and their information after shaping.
 * @record 
 */
class buffer_t {

    // Own properties of HarfBuzz-0.0.HarfBuzz.buffer_t

    static name: string
}

interface face_t {
}

/**
 * Data type for holding font faces.
 * @record 
 */
class face_t {

    // Own properties of HarfBuzz-0.0.HarfBuzz.face_t

    static name: string
}

interface feature_t {

    // Own fields of HarfBuzz-0.0.HarfBuzz.feature_t

    /**
     * a feature tag
     * @field 
     */
    tag: tag_t
    /**
     * 0 disables the feature, non-zero (usually 1) enables the feature.
     * For features implemented as lookup type 3 (like 'salt') the `value` is a one
     * based index into the alternates.
     * @field 
     */
    value: number
    /**
     * the cluster to start applying this feature setting (inclusive).
     * @field 
     */
    start: number
    /**
     * the cluster to end applying this feature setting (exclusive).
     * @field 
     */
    end: number

    // Owm methods of HarfBuzz-0.0.HarfBuzz.feature_t

    /**
     * Converts a #hb_feature_t into a %NULL-terminated string in the format
     * understood by hb_feature_from_string(). The client in responsible for
     * allocating big enough size for `buf,` 128 bytes is more than enough.
     */
    string(): /* buf */ string[]
}

/**
 * The #hb_feature_t is the structure that holds information about requested
 * feature application. The feature will be applied with the given value to all
 * glyphs which are in clusters between `start` (inclusive) and `end` (exclusive).
 * Setting start to `HB_FEATURE_GLOBAL_START` and end to `HB_FEATURE_GLOBAL_END`
 * specifies that the feature always applies to the entire buffer.
 * @record 
 */
class feature_t {

    // Own properties of HarfBuzz-0.0.HarfBuzz.feature_t

    static name: string
}

interface font_extents_t {

    // Own fields of HarfBuzz-0.0.HarfBuzz.font_extents_t

    ascender: position_t
    descender: position_t
    lineGap: position_t
}

class font_extents_t {

    // Own properties of HarfBuzz-0.0.HarfBuzz.font_extents_t

    static name: string
}

interface font_funcs_t {
}

class font_funcs_t {

    // Own properties of HarfBuzz-0.0.HarfBuzz.font_funcs_t

    static name: string
}

interface font_t {
}

class font_t {

    // Own properties of HarfBuzz-0.0.HarfBuzz.font_t

    static name: string
}

interface glyph_extents_t {

    // Own fields of HarfBuzz-0.0.HarfBuzz.glyph_extents_t

    xBearing: position_t
    yBearing: position_t
    width: position_t
    height: position_t
}

class glyph_extents_t {

    // Own properties of HarfBuzz-0.0.HarfBuzz.glyph_extents_t

    static name: string
}

interface glyph_info_t {

    // Own fields of HarfBuzz-0.0.HarfBuzz.glyph_info_t

    /**
     * either a Unicode code point (before shaping) or a glyph index
     *             (after shaping).
     * @field 
     */
    codepoint: codepoint_t
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
     * @field 
     */
    cluster: number
}

/**
 * The #hb_glyph_info_t is the structure that holds information about the
 * glyphs and their relation to input text.
 * @record 
 */
class glyph_info_t {

    // Own properties of HarfBuzz-0.0.HarfBuzz.glyph_info_t

    static name: string
}

interface glyph_position_t {

    // Own fields of HarfBuzz-0.0.HarfBuzz.glyph_position_t

    /**
     * how much the line advances after drawing this glyph when setting
     *             text in horizontal direction.
     * @field 
     */
    xAdvance: position_t
    /**
     * how much the line advances after drawing this glyph when setting
     *             text in vertical direction.
     * @field 
     */
    yAdvance: position_t
    /**
     * how much the glyph moves on the X-axis before drawing it, this
     *            should not affect how much the line advances.
     * @field 
     */
    xOffset: position_t
    /**
     * how much the glyph moves on the Y-axis before drawing it, this
     *            should not affect how much the line advances.
     * @field 
     */
    yOffset: position_t
}

/**
 * The #hb_glyph_position_t is the structure that holds the positions of the
 * glyph in both horizontal and vertical directions. All positions in
 * #hb_glyph_position_t are relative to the current point.
 * @record 
 */
class glyph_position_t {

    // Own properties of HarfBuzz-0.0.HarfBuzz.glyph_position_t

    static name: string
}

interface language_t {

    // Owm methods of HarfBuzz-0.0.HarfBuzz.language_t

    /**
     * See hb_language_from_string().
     */
    string(): string
}

class language_t {

    // Own properties of HarfBuzz-0.0.HarfBuzz.language_t

    static name: string
}

interface map_t {
}

class map_t {

    // Own properties of HarfBuzz-0.0.HarfBuzz.map_t

    static name: string
}

interface ot_color_layer_t {

    // Own fields of HarfBuzz-0.0.HarfBuzz.ot_color_layer_t

    glyph: codepoint_t
    colorIndex: number
}

/**
 * Pairs of glyph and color index.
 * @record 
 */
class ot_color_layer_t {

    // Own properties of HarfBuzz-0.0.HarfBuzz.ot_color_layer_t

    static name: string
}

interface ot_math_glyph_part_t {

    // Own fields of HarfBuzz-0.0.HarfBuzz.ot_math_glyph_part_t

    /**
     * The glyph index of the variant part
     * @field 
     */
    glyph: codepoint_t
    /**
     * The length of the connector on the starting side of the variant part
     * @field 
     */
    startConnectorLength: position_t
    /**
     * The length of the connector on the ending side of the variant part
     * @field 
     */
    endConnectorLength: position_t
    /**
     * The total advance of the part
     * @field 
     */
    fullAdvance: position_t
    /**
     * #hb_ot_math_glyph_part_flags_t flags for the part
     * @field 
     */
    flags: ot_math_glyph_part_flags_t
}

/**
 * Data type to hold information for a "part" component of a math-variant glyph.
 * Large variants for stretchable math glyphs (such as parentheses) can be constructed
 * on the fly from parts.
 * @record 
 */
class ot_math_glyph_part_t {

    // Own properties of HarfBuzz-0.0.HarfBuzz.ot_math_glyph_part_t

    static name: string
}

interface ot_math_glyph_variant_t {

    // Own fields of HarfBuzz-0.0.HarfBuzz.ot_math_glyph_variant_t

    /**
     * The glyph index of the variant
     * @field 
     */
    glyph: codepoint_t
    /**
     * The advance width of the variant
     * @field 
     */
    advance: position_t
}

/**
 * Data type to hold math-variant information for a glyph.
 * @record 
 */
class ot_math_glyph_variant_t {

    // Own properties of HarfBuzz-0.0.HarfBuzz.ot_math_glyph_variant_t

    static name: string
}

interface ot_name_entry_t {

    // Own fields of HarfBuzz-0.0.HarfBuzz.ot_name_entry_t

    /**
     * name ID
     * @field 
     */
    nameId: ot_name_id_t
    /**
     * language
     * @field 
     */
    language: language_t
}

/**
 * Structure representing a name ID in a particular language.
 * @record 
 */
class ot_name_entry_t {

    // Own properties of HarfBuzz-0.0.HarfBuzz.ot_name_entry_t

    static name: string
}

interface ot_var_axis_info_t {

    // Own fields of HarfBuzz-0.0.HarfBuzz.ot_var_axis_info_t

    /**
     * Index of the axis in the variation-axis array
     * @field 
     */
    axisIndex: number
    /**
     * The #hb_tag_t tag identifying the design variation of the axis
     * @field 
     */
    tag: tag_t
    /**
     * The `name` table Name ID that provides display names for the axis
     * @field 
     */
    nameId: ot_name_id_t
    /**
     * The #hb_ot_var_axis_flags_t flags for the axis
     * @field 
     */
    flags: ot_var_axis_flags_t
    /**
     * The mininum value on the variation axis that the font covers
     * @field 
     */
    minValue: number
    /**
     * The position on the variation axis corresponding to the font's defaults
     * @field 
     */
    defaultValue: number
    /**
     * The maximum value on the variation axis that the font covers
     * @field 
     */
    maxValue: number
}

/**
 * Data type for holding variation-axis values.
 * 
 * The minimum, default, and maximum values are in un-normalized, user scales.
 * 
 * <note>Note: at present, the only flag defined for `flags` is
 * #HB_OT_VAR_AXIS_FLAG_HIDDEN.</note>
 * @record 
 */
class ot_var_axis_info_t {

    // Own properties of HarfBuzz-0.0.HarfBuzz.ot_var_axis_info_t

    static name: string
}

interface ot_var_axis_t {

    // Own fields of HarfBuzz-0.0.HarfBuzz.ot_var_axis_t

    tag: tag_t
    nameId: ot_name_id_t
    minValue: number
    defaultValue: number
    maxValue: number
}

class ot_var_axis_t {

    // Own properties of HarfBuzz-0.0.HarfBuzz.ot_var_axis_t

    static name: string
}

interface segment_properties_t {

    // Own fields of HarfBuzz-0.0.HarfBuzz.segment_properties_t

    /**
     * the #hb_direction_t of the buffer, see hb_buffer_set_direction().
     * @field 
     */
    direction: direction_t
    /**
     * the #hb_script_t of the buffer, see hb_buffer_set_script().
     * @field 
     */
    script: script_t
    /**
     * the #hb_language_t of the buffer, see hb_buffer_set_language().
     * @field 
     */
    language: language_t
}

/**
 * The structure that holds various text properties of an #hb_buffer_t. Can be
 * set and retrieved using hb_buffer_set_segment_properties() and
 * hb_buffer_get_segment_properties(), respectively.
 * @record 
 */
class segment_properties_t {

    // Own properties of HarfBuzz-0.0.HarfBuzz.segment_properties_t

    static name: string
}

interface set_t {
}

class set_t {

    // Own properties of HarfBuzz-0.0.HarfBuzz.set_t

    static name: string
}

interface shape_plan_t {
}

/**
 * Data type for holding a shaping plan.
 * 
 * Shape plans contain information about how HarfBuzz will shape a
 * particular text segment, based on the segment's properties and the
 * capabilities in the font face in use.
 * 
 * Shape plans can be queried about how shaping will perform, given a set
 * of specific input parameters (script, language, direction, features,
 * etc.).
 * @record 
 */
class shape_plan_t {

    // Own properties of HarfBuzz-0.0.HarfBuzz.shape_plan_t

    static name: string
}

interface unicode_funcs_t {
}

/**
 * Data type containing a set of virtual methods used for
 * accessing various Unicode character properties.
 * 
 * HarfBuzz provides a default function for each of the
 * methods in #hb_unicode_funcs_t. Client programs can implement
 * their own replacements for the individual Unicode functions, as
 * needed, and replace the default by calling the setter for a
 * method.
 * @record 
 */
class unicode_funcs_t {

    // Own properties of HarfBuzz-0.0.HarfBuzz.unicode_funcs_t

    static name: string
}

interface user_data_key_t {
}

class user_data_key_t {

    // Own properties of HarfBuzz-0.0.HarfBuzz.user_data_key_t

    static name: string
}

interface variation_t {

    // Own fields of HarfBuzz-0.0.HarfBuzz.variation_t

    tag: tag_t
    value: number

    // Owm methods of HarfBuzz-0.0.HarfBuzz.variation_t

    string(buf: string, size: number): void
}

class variation_t {

    // Own properties of HarfBuzz-0.0.HarfBuzz.variation_t

    static name: string
}

interface var_int_t {

    // Own fields of HarfBuzz-0.0.HarfBuzz.var_int_t

    u32: number
    i32: number
    u16: number[]
    i16: number[]
    u8: Uint8Array
    i8: Uint8Array
}

class var_int_t {

    // Own properties of HarfBuzz-0.0.HarfBuzz.var_int_t

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