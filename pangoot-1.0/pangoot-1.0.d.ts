
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './pangoot-1.0-ambient.d.ts';
import './pangoot-1.0-import.d.ts';
/**
 * PangoOT-1.0
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

export namespace PangoOT {

/**
 * The PangoOTTableType enumeration values are used to
 * identify the various OpenType tables in the
 * pango_ot_info_… functions.
 */
enum TableType {
    /**
     * The GSUB table.
     */
    GSUB,
    /**
     * The GPOS table.
     */
    GPOS,
}
/**
 * This is used as the property bit in pango_ot_ruleset_add_feature() when a
 * feature should be applied to all glyphs.
 */
const ALL_GLYPHS: number
/**
 * This is used as the language index in pango_ot_info_find_feature() when
 * the default language system of the script is desired.
 * 
 * It is also returned by pango_ot_info_find_language() if the requested language
 * is not found, or the requested language tag was PANGO_OT_TAG_DEFAULT_LANGUAGE.
 * The end result is that one can always call pango_ot_tag_from_language()
 * followed by pango_ot_info_find_language() and pass the result to
 * pango_ot_info_find_feature() without having to worry about falling back to
 * default language system explicitly.
 */
const DEFAULT_LANGUAGE: number
/**
 * This is used as a feature index that represent no feature, that is, should be
 * skipped.  It may be returned as feature index by pango_ot_info_find_feature()
 * if the feature is not found, and pango_ot_ruleset_add_feature() function
 * automatically skips this value, so no special handling is required by the user.
 */
const NO_FEATURE: number
/**
 * This is used as a script index that represent no script, that is, when the
 * requested script was not found, and a default ('DFLT') script was not found
 * either.  It may be returned as script index by pango_ot_info_find_script()
 * if the script or a default script are not found, all other functions
 * taking a script index essentially return if the input script index is
 * this value, so no special handling is required by the user.
 */
const NO_SCRIPT: number
/**
 * Finds the OpenType language-system tag best describing `language`.
 * @param language A `PangoLanguage`
 * @returns `PangoOTTag` best matching @language or %PANGO_OT_TAG_DEFAULT_LANGUAGE if none found or if @language is %NULL.
 */
function tag_from_language(language: Pango.Language | null): Tag
/**
 * Finds the OpenType script tag corresponding to `script`.
 * 
 * The %PANGO_SCRIPT_COMMON, %PANGO_SCRIPT_INHERITED, and
 * %PANGO_SCRIPT_UNKNOWN scripts are mapped to the OpenType
 * 'DFLT' script tag that is also defined as
 * %PANGO_OT_TAG_DEFAULT_SCRIPT.
 * 
 * Note that multiple `PangoScript` values may map to the same
 * OpenType script tag.  In particular, %PANGO_SCRIPT_HIRAGANA
 * and %PANGO_SCRIPT_KATAKANA both map to the OT tag 'kana'.
 * @param script A `PangoScript`
 * @returns `PangoOTTag` corresponding to @script or %PANGO_OT_TAG_DEFAULT_SCRIPT if none found.
 */
function tag_from_script(script: Pango.Script): Tag
/**
 * Finds a `PangoLanguage` corresponding to `language_tag`.
 * @param language_tag A `PangoOTTag` OpenType language-system tag
 * @returns `PangoLanguage` best matching @language_tag or `PangoLanguage` corresponding to the string "xx" if none found.
 */
function tag_to_language(language_tag: Tag): Pango.Language
/**
 * Finds the `PangoScript` corresponding to `script_tag`.
 * 
 * The 'DFLT' script tag is mapped to %PANGO_SCRIPT_COMMON.
 * 
 * Note that an OpenType script tag may correspond to multiple
 * `PangoScript` values.  In such cases, the `PangoScript` value
 * with the smallest value is returned.
 * In particular, %PANGO_SCRIPT_HIRAGANA
 * and %PANGO_SCRIPT_KATAKANA both map to the OT tag 'kana'.
 * This function will return %PANGO_SCRIPT_HIRAGANA for
 * 'kana'.
 * @param script_tag A `PangoOTTag` OpenType script tag
 * @returns `PangoScript` corresponding to @script_tag or %PANGO_SCRIPT_UNKNOWN if none found.
 */
function tag_to_script(script_tag: Tag): Pango.Script
module Info {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Info {

    // Owm methods of PangoOT-1.0.PangoOT.Info

    /**
     * Finds the index of a feature.
     * 
     * If the feature is not found, sets `feature_index` to PANGO_OT_NO_FEATURE,
     * which is safe to pass to [method`PangoOT`.Ruleset.add_feature] and similar
     * functions.
     * 
     * In the future, this may set `feature_index` to an special value that if
     * used in [method`PangoOT`.Ruleset.add_feature] will ask Pango to synthesize
     * the requested feature based on Unicode properties and data. However, this
     * function will still return %FALSE in those cases. So, users may want to
     * ignore the return value of this function in certain cases.
     * @param table_type the table type to obtain information about
     * @param feature_tag the tag of the feature to find
     * @param script_index the index of the script
     * @param language_index the index of the language whose features are searched,   or %PANGO_OT_DEFAULT_LANGUAGE to use the default language of the script
     * @returns %TRUE if the feature was found
     */
    find_feature(table_type: TableType, feature_tag: Tag, script_index: number, language_index: number): [ /* returnType */ boolean, /* feature_index */ number ]
    /**
     * Finds the index of a language and its required feature index.
     * 
     * If the language is not found, sets `language_index` to %PANGO_OT_DEFAULT_LANGUAGE
     * and the required feature of the default language system is returned in
     * required_feature_index. For best compatibility with some fonts, also
     * searches the language system tag 'dflt' before falling back to the default
     * language system, but that is transparent to the user. The user can simply
     * ignore the return value of this function to automatically fall back to the
     * default language system.
     * @param table_type the table type to obtain information about
     * @param script_index the index of the script whose languages are searched
     * @param language_tag the tag of the language to find
     * @returns %TRUE if the language was found
     */
    find_language(table_type: TableType, script_index: number, language_tag: Tag): [ /* returnType */ boolean, /* language_index */ number, /* required_feature_index */ number ]
    /**
     * Finds the index of a script.
     * 
     * If not found, tries to find the 'DFLT' and then 'dflt' scripts and
     * return the index of that in `script_index`. If none of those is found
     * either, %PANGO_OT_NO_SCRIPT is placed in `script_index`.
     * 
     * All other functions taking an input script_index parameter know
     * how to handle %PANGO_OT_NO_SCRIPT, so one can ignore the return
     * value of this function completely and proceed, to enjoy the automatic
     * fallback to the 'DFLT'/'dflt' script.
     * @param table_type the table type to obtain information about
     * @param script_tag the tag of the script to find
     * @returns %TRUE if the script was found
     */
    find_script(table_type: TableType, script_tag: Tag): [ /* returnType */ boolean, /* script_index */ number ]
    /**
     * Obtains the list of features for the given language of the given script.
     * @param table_type the table type to obtain information about
     * @param tag unused parameter
     * @param script_index the index of the script to obtain information about
     * @param language_index the index of the language to list features for, or   %PANGO_OT_DEFAULT_LANGUAGE, to list features for the default   language of the script
     * @returns a newly-allocated zero-terminated   array containing the tags of the available features
     */
    list_features(table_type: TableType, tag: Tag, script_index: number, language_index: number): Tag
    /**
     * Obtains the list of available languages for a given script.
     * @param table_type the table type to obtain information about
     * @param script_index the index of the script to list languages for
     * @param language_tag unused parameter
     * @returns a newly-allocated zero-terminated   array containing the tags of the available languages
     */
    list_languages(table_type: TableType, script_index: number, language_tag: Tag): Tag
    /**
     * Obtains the list of available scripts.
     * @param table_type the table type to obtain information about
     * @returns a newly-allocated zero-terminated   array containing the tags of the available scripts
     */
    list_scripts(table_type: TableType): Tag

    // Class property signals of PangoOT-1.0.PangoOT.Info

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Info extends GObject.Object {

    // Own properties of PangoOT-1.0.PangoOT.Info

    static name: string
    static $gtype: GObject.GType<Info>

    // Constructors of PangoOT-1.0.PangoOT.Info

    constructor(config?: Info.ConstructorProperties) 
    _init(config?: Info.ConstructorProperties): void
    /**
     * Returns the `PangoOTInfo` structure for the given FreeType font face.
     * @param face a `FT_Face`
     * @returns the `PangoOTInfo` for @face.   This object will have the same lifetime as @face.
     */
    static get(face: freetype2.Face): Info
}

module Ruleset {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Ruleset {

    // Owm methods of PangoOT-1.0.PangoOT.Ruleset

    /**
     * Adds a feature to the ruleset.
     * @param table_type the table type to add a feature to
     * @param feature_index the index of the feature to add
     * @param property_bit the property bit to use for this feature. Used to   identify the glyphs that this feature should be applied to, or   %PANGO_OT_ALL_GLYPHS if it should be applied to all glyphs.
     */
    add_feature(table_type: TableType, feature_index: number, property_bit: number): void
    /**
     * Gets the number of GSUB and GPOS features in the ruleset.
     * @returns Total number of features in the @ruleset
     */
    get_feature_count(): [ /* returnType */ number, /* n_gsub_features */ number, /* n_gpos_features */ number ]
    /**
     * This is a convenience function that first tries to find the feature
     * using [method`PangoOT`.Info.find_feature] and the ruleset script and
     * language passed to [ctor`PangoOT`.Ruleset.new_for] and if the feature
     * is found, adds it to the ruleset.
     * 
     * If `ruleset` was not created using [ctor`PangoOT`.Ruleset.new_for],
     * this function does nothing.
     * @param table_type the table type to add a feature to
     * @param feature_tag the tag of the feature to add
     * @param property_bit the property bit to use for this feature. Used to   identify the glyphs that this feature should be applied to, or   %PANGO_OT_ALL_GLYPHS if it should be applied to all glyphs.
     * @returns %TRUE if the feature was found and added to ruleset,   %FALSE otherwise
     */
    maybe_add_feature(table_type: TableType, feature_tag: Tag, property_bit: number): boolean
    /**
     * This is a convenience function that for each feature in the feature map
     * array `features` converts the feature name to a `PangoOTTag` feature tag
     * using PANGO_OT_TAG_MAKE() and calls [method`PangoOT`.Ruleset.maybe_add_feature]
     * on it.
     * @param table_type the table type to add features to
     * @param features array of feature name and property bits to add
     * @param n_features number of feature records in `features` array
     * @returns The number of features in @features that were found   and added to @ruleset
     */
    maybe_add_features(table_type: TableType, features: FeatureMap, n_features: number): number
    /**
     * Performs the OpenType GPOS positioning on `buffer` using
     * the features in `ruleset`.
     * @param buffer a `PangoOTBuffer`
     */
    position(buffer: Buffer): void
    /**
     * Performs the OpenType GSUB substitution on `buffer` using
     * the features in `ruleset`.
     * @param buffer a `PangoOTBuffer`
     */
    substitute(buffer: Buffer): void

    // Class property signals of PangoOT-1.0.PangoOT.Ruleset

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The `PangoOTRuleset` structure holds a set of features selected
 * from the tables in an OpenType font.
 * 
 * A feature is an operation such as adjusting glyph positioning
 * that should be applied to a text feature such as a certain
 * type of accent.
 * 
 * A `PangoOTRuleset` is created with [ctor`PangoOT`.Ruleset.new],
 * features are added to it with [method`PangoOT`.Ruleset.add_feature],
 * then it is applied to a `PangoGlyphString` with
 * [method`PangoOT`.Ruleset.position].
 * @class 
 */
class Ruleset extends GObject.Object {

    // Own properties of PangoOT-1.0.PangoOT.Ruleset

    static name: string
    static $gtype: GObject.GType<Ruleset>

    // Constructors of PangoOT-1.0.PangoOT.Ruleset

    constructor(config?: Ruleset.ConstructorProperties) 
    /**
     * Creates a new `PangoOTRuleset` for the given OpenType info.
     * @constructor 
     * @param info a `PangoOTInfo`
     * @returns the newly allocated `PangoOTRuleset`
     */
    constructor(info: Info) 
    /**
     * Creates a new `PangoOTRuleset` for the given OpenType info.
     * @constructor 
     * @param info a `PangoOTInfo`
     * @returns the newly allocated `PangoOTRuleset`
     */
    static new(info: Info): Ruleset
    /**
     * Creates a new `PangoOTRuleset` for the given OpenType info, script, and
     * language.
     * 
     * This function is part of a convenience scheme that highly simplifies
     * using a `PangoOTRuleset` to represent features for a specific pair of script
     * and language.  So one can use this function passing in the script and
     * language of interest, and later try to add features to the ruleset by just
     * specifying the feature name or tag, without having to deal with finding
     * script, language, or feature indices manually.
     * 
     * In addition to what [ctor`PangoOT`.Ruleset.new] does, this function will:
     * 
     * * Find the `PangoOTTag` script and language tags associated with
     *   `script` and `language` using [func`PangoOT`.tag_from_script] and
     *   [func`PangoOT`.tag_from_language],
     * 
     * * For each of table types %PANGO_OT_TABLE_GSUB and %PANGO_OT_TABLE_GPOS,
     *   find the script index of the script tag found and the language
     *   system index of the language tag found in that script system, using
     *   [method`PangoOT`.Info.find_script] and [method`PangoOT`.Info.find_language],
     * 
     * * For found language-systems, if they have required feature index,
     *   add that feature to the ruleset using [method`PangoOT`.Ruleset.add_feature],
     * 
     * * Remember found script and language indices for both table types,
     *   and use them in future [method`PangoOT`.Ruleset.maybe_add_feature] and
     *   [method`PangoOT`.Ruleset.maybe_add_features].
     * 
     * Because of the way return values of [method`PangoOT`.Info.find_script] and
     * [method`PangoOT`.Info.find_language] are ignored, this function automatically
     * finds and uses the 'DFLT' script and the default language-system.
     * @constructor 
     * @param info a `PangoOTInfo`
     * @param script a `PangoScript`
     * @param language a `PangoLanguage`
     * @returns the newly allocated `PangoOTRuleset`
     */
    static new_for(info: Info, script: Pango.Script, language: Pango.Language): Ruleset
    /**
     * Creates a new `PangoOTRuleset` for the given OpenType info and
     * matching the given ruleset description.
     * 
     * This is a convenience function that calls [ctor`PangoOT`.Ruleset.new_for]
     * and adds the static GSUB/GPOS features to the resulting ruleset,
     * followed by adding other features to both GSUB and GPOS.
     * 
     * The static feature map members of `desc` should be alive as
     * long as `info` is.
     * @constructor 
     * @param info a `PangoOTInfo`
     * @param desc a `PangoOTRulesetDescription`
     * @returns the newly allocated `PangoOTRuleset`
     */
    static new_from_description(info: Info, desc: RulesetDescription): Ruleset
    _init(config?: Ruleset.ConstructorProperties): void
    /**
     * Returns a ruleset for the given OpenType info and ruleset
     * description.
     * 
     * Rulesets are created on demand using
     * [ctor`PangoOT`.Ruleset.new_from_description].
     * The returned ruleset should not be modified or destroyed.
     * 
     * The static feature map members of `desc` should be alive as
     * long as `info` is.
     * @param info a `PangoOTInfo`
     * @param desc a `PangoOTRulesetDescription`
     * @returns the `PangoOTRuleset` for @desc. This object will have   the same lifetime as @info.
     */
    static get_for_description(info: Info, desc: RulesetDescription): Ruleset
}

interface Buffer {

    // Owm methods of PangoOT-1.0.PangoOT.Buffer

    /**
     * Appends a glyph to a `PangoOTBuffer`, with `properties` identifying which
     * features should be applied on this glyph.
     * 
     * See [method`PangoOT`.Ruleset.add_feature].
     * @param glyph the glyph index to add, like a `PangoGlyph`
     * @param properties the glyph properties
     * @param cluster the cluster that this glyph belongs to
     */
    add_glyph(glyph: number, properties: number, cluster: number): void
    /**
     * Empties a `PangoOTBuffer`, make it ready to add glyphs to.
     */
    clear(): void
    /**
     * Destroys a `PangoOTBuffer` and free all associated memory.
     */
    destroy(): void
    /**
     * Gets the glyph array contained in a `PangoOTBuffer`.
     * 
     * The glyphs are owned by the buffer and should not be freed,
     * and are only valid as long as buffer is not modified.
     */
    get_glyphs(): /* glyphs */ Glyph[]
    /**
     * Exports the glyphs in a `PangoOTBuffer` into a `PangoGlyphString`.
     * 
     * This is typically used after the OpenType layout processing
     * is over, to convert the resulting glyphs into a generic Pango
     * glyph string.
     * @param glyphs a `PangoGlyphString`
     */
    output(glyphs: Pango.GlyphString): void
    /**
     * Sets whether glyphs will be rendered right-to-left.
     * 
     * This setting is needed for proper horizontal positioning
     * of right-to-left scripts.
     * @param rtl %TRUE for right-to-left text
     */
    set_rtl(rtl: boolean): void
    /**
     * Sets whether characters with a mark class should be forced to zero width.
     * 
     * This setting is needed for proper positioning of Arabic accents,
     * but will produce incorrect results with standard OpenType Indic
     * fonts.
     * @param zero_width_marks %TRUE if characters with a mark class should   be forced to zero width
     */
    set_zero_width_marks(zero_width_marks: boolean): void
}

class Buffer {

    // Own properties of PangoOT-1.0.PangoOT.Buffer

    static name: string

    // Constructors of PangoOT-1.0.PangoOT.Buffer

    /**
     * Creates a new `PangoOTBuffer` for the given OpenType font.
     * @constructor 
     * @param font a `PangoFcFont`
     * @returns the newly allocated `PangoOTBuffer`, which should   be freed with [method@PangoOT.Buffer.destroy].
     */
    constructor(font: PangoFc.Font) 
    /**
     * Creates a new `PangoOTBuffer` for the given OpenType font.
     * @constructor 
     * @param font a `PangoFcFont`
     * @returns the newly allocated `PangoOTBuffer`, which should   be freed with [method@PangoOT.Buffer.destroy].
     */
    static new(font: PangoFc.Font): Buffer
}

interface FeatureMap {

    // Own fields of PangoOT-1.0.PangoOT.FeatureMap

    /**
     * feature tag in represented as four-letter ASCII string.
     * @field 
     */
    feature_name: number[]
    /**
     * the property bit to use for this feature.  See
     * pango_ot_ruleset_add_feature() for details.
     * @field 
     */
    property_bit: number
}

/**
 * The `PangoOTFeatureMap` typedef is used to represent an OpenType
 * feature with the property bit associated with it.  The feature tag is
 * represented as a char array instead of a `PangoOTTag` for convenience.
 * @record 
 */
class FeatureMap {

    // Own properties of PangoOT-1.0.PangoOT.FeatureMap

    static name: string
}

interface Glyph {

    // Own fields of PangoOT-1.0.PangoOT.Glyph

    /**
     * the glyph itself.
     * @field 
     */
    glyph: number
    /**
     * the properties value, identifying which features should be
     * applied on this glyph.  See pango_ot_ruleset_add_feature().
     * @field 
     */
    properties: number
    /**
     * the cluster that this glyph belongs to.
     * @field 
     */
    cluster: number
    /**
     * a component value, set by the OpenType layout engine.
     * @field 
     */
    component: number
    /**
     * a ligature index value, set by the OpenType layout engine.
     * @field 
     */
    ligID: number
    /**
     * for Pango internal use
     * @field 
     */
    internal: number
}

/**
 * The `PangoOTGlyph` structure represents a single glyph together with
 * information used for OpenType layout processing of the glyph.
 * It contains the following fields.
 * @record 
 */
class Glyph {

    // Own properties of PangoOT-1.0.PangoOT.Glyph

    static name: string
}

interface RulesetDescription {

    // Own fields of PangoOT-1.0.PangoOT.RulesetDescription

    /**
     * a `PangoScript`
     * @field 
     */
    script: Pango.Script
    /**
     * a `PangoLanguage`
     * @field 
     */
    language: Pango.Language
    /**
     * static map of GSUB features
     * @field 
     */
    static_gsub_features: FeatureMap
    /**
     * length of `static_gsub_features,` or 0.
     * @field 
     */
    n_static_gsub_features: number
    /**
     * static map of GPOS features
     * @field 
     */
    static_gpos_features: FeatureMap
    /**
     * length of `static_gpos_features,` or 0.
     * @field 
     */
    n_static_gpos_features: number
    /**
     * map of extra features to add to both
     *   GSUB and GPOS. Unlike the static maps, this pointer need not
     *   live beyond the life of function calls taking this struct.
     * @field 
     */
    other_features: FeatureMap
    /**
     * length of `other_features,` or 0.
     * @field 
     */
    n_other_features: number

    // Owm methods of PangoOT-1.0.PangoOT.RulesetDescription

    /**
     * Creates a copy of `desc,` which should be freed with
     * [method`PangoOT`.RulesetDescription.free].
     * 
     * Primarily used internally by [func`PangoOT`.Ruleset.get_for_description]
     * to cache rulesets for ruleset descriptions.
     * @returns the newly allocated `PangoOTRulesetDescription`
     */
    copy(): RulesetDescription
    /**
     * Compares two ruleset descriptions for equality.
     * 
     * Two ruleset descriptions are considered equal if the rulesets
     * they describe are provably identical. This means that their
     * script, language, and all feature sets should be equal.
     * 
     * For static feature sets, the array addresses are compared directly,
     * while for other features, the list of features is compared one by
     * one.(Two ruleset descriptions may result in identical rulesets
     * being created, but still compare %FALSE.)
     * @param desc2 a ruleset description
     * @returns %TRUE if two ruleset descriptions are identical,   %FALSE otherwise
     */
    equal(desc2: RulesetDescription): boolean
    /**
     * Frees a ruleset description allocated by
     * pango_ot_ruleset_description_copy().
     */
    free(): void
    /**
     * Computes a hash of a `PangoOTRulesetDescription` structure suitable
     * to be used, for example, as an argument to g_hash_table_new().
     * @returns the hash value
     */
    hash(): number
}

/**
 * The `PangoOTRuleset` structure holds all the information needed
 * to build a complete `PangoOTRuleset` from an OpenType font.
 * The main use of this struct is to act as the key for a per-font
 * hash of rulesets.  The user populates a ruleset description and
 * gets the ruleset using pango_ot_ruleset_get_for_description()
 * or create a new one using pango_ot_ruleset_new_from_description().
 * @record 
 */
class RulesetDescription {

    // Own properties of PangoOT-1.0.PangoOT.RulesetDescription

    static name: string
}

    type Tag = number
/**
 * Name of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
 */
const __name__: string
/**
 * Version of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
 */
const __version__: string
}

export default PangoOT;
// END