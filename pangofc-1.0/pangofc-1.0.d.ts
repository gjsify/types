
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
import type fontconfig from '@girs/fontconfig-2.0';
import type Pango from '@girs/pango-1.0';
import type cairo from 'cairo';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace PangoFc {

    /**
     * PangoFc-1.0
     */


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
     * @since 1.34
     * @deprecated since 1.56: Use FC_FONT_FEATURES
     */
    const FONT_FEATURES: string;

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
     * @deprecated since 1.56: Use FC_FONT_VARIATIONS
     */
    const FONT_VARIATIONS: string;

    /**
     * Fontconfig property that Pango sets on any
     * fontconfig pattern it passes to fontconfig
     * if a {@link Pango.Gravity} other than {@link Pango.Gravity.SOUTH}
     * is desired.
     * 
     * The property will have a {@link Pango.Gravity} value as a string,
     * like "east". This can be used to write fontconfig configuration
     * rules to choose different fonts for horizontal and vertical
     * writing directions.
     * @since 1.20
     */
    const GRAVITY: string;

    /**
     * Fontconfig property that Pango sets on any
     * fontconfig pattern it passes to fontconfig.
     * 
     * The property will have a string equal to what
     * `g_get_prgname()` returns. This can be used to write
     * fontconfig configuration rules that only affect
     * certain applications.
     * 
     * This is equivalent to FC_PRGNAME in versions of
     * fontconfig that have that.
     * @since 1.24
     * @deprecated since 1.56: Use FC_PRGNAME
     */
    const PRGNAME: string;

    /**
     * Fontconfig property that Pango sets on any
     * fontconfig pattern it passes to fontconfig.
     * 
     * The property will have an integer value equal to what
     * {@link Pango.version} returns. This can be used to write
     * fontconfig configuration rules that only affect certain
     * pango versions (or only pango-using applications, or only
     * non-pango-using applications).
     * @since 1.20
     */
    const VERSION: string;

    /**
     * @gir-type Callback
     */
    interface SubstituteFunc {
        (pattern: fontconfig.Pattern, data: null): void;
    }

    namespace Decoder {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {

        }
    }

    /**
     * {@link PangoFc.Decoder} is a virtual base class that implementations will
     * inherit from.
     * 
     * It's the interface that is used to define a custom encoding for a font.
     * These objects are created in your code from a function callback that was
     * originally registered with {@link PangoFc.FontMap.add_decoder_find_func}.
     * Pango requires information about the supported charset for a font as well
     * as the individual character to glyph conversions. Pango gets that
     * information via the {@link GLib.get_charset} and `get_glyph` callbacks into your
     * object implementation.
     * @gir-type Class
     * @since 1.6
     */
    abstract class Decoder extends GObject.Object {
        static $gtype: GObject.GType<Decoder>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Decoder.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Decoder.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof Decoder.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Decoder.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Decoder.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Decoder.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Decoder.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Decoder.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * Generates an {@link fontconfig.CharSet} of supported characters for the `fcfont`
         * given.
         * 
         * The returned {@link fontconfig.CharSet} will be a reference to an
         * internal value stored by the {@link PangoFc.Decoder} and must not
         * be modified or freed.
         * @param fcfont the {@link PangoFc.Font} to query.
         * @virtual
         */
        vfunc_get_charset(fcfont: Font): fontconfig.CharSet;

        /**
         * Generates a {@link Pango.Glyph} for the given Unicode point using the
         * custom decoder.
         * 
         * For complex scripts where there can be multiple
         * glyphs for a single character, the decoder will return whatever
         * glyph is most convenient for it. (Usually whatever glyph is directly
         * in the fonts character map table.)
         * @param fcfont a {@link PangoFc.Font} to query.
         * @param wc the Unicode code point to convert to a single {@link Pango.Glyph}.
         * @virtual
         */
        vfunc_get_glyph(fcfont: Font, wc: number): Pango.Glyph;

        // Methods
        /**
         * Generates an {@link fontconfig.CharSet} of supported characters for the `fcfont`
         * given.
         * 
         * The returned {@link fontconfig.CharSet} will be a reference to an
         * internal value stored by the {@link PangoFc.Decoder} and must not
         * be modified or freed.
         * @param fcfont the {@link PangoFc.Font} to query.
         * @returns the `FcCharset` for `fcfont`; must not   be modified or freed.
         */
        get_charset(fcfont: Font): fontconfig.CharSet;

        /**
         * Generates a {@link Pango.Glyph} for the given Unicode point using the
         * custom decoder.
         * 
         * For complex scripts where there can be multiple
         * glyphs for a single character, the decoder will return whatever
         * glyph is most convenient for it. (Usually whatever glyph is directly
         * in the fonts character map table.)
         * @param fcfont a {@link PangoFc.Font} to query.
         * @param wc the Unicode code point to convert to a single {@link Pango.Glyph}.
         * @returns the glyph index, or 0 if the glyph isn't covered by the font.
         */
        get_glyph(fcfont: Font, wc: number): Pango.Glyph;
    }


    namespace Font {
        // Signal signatures
        interface SignalSignatures extends Pango.Font.SignalSignatures {
            "notify::fontmap": (pspec: GObject.ParamSpec) => void;
            "notify::pattern": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Pango.Font.ConstructorProps {
            fontmap: FontMap;
            pattern: never;
        }
    }

    /**
     * {@link PangoFc.Font} is a base class for font implementations
     * using the Fontconfig and FreeType libraries.
     * 
     * It is used in onjunction with {@link PangoFc.FontMap}.
     * When deriving from this class, you need to implement all
     * of its virtual functions other than `shutdown()` along with
     * the `get_glyph_extents()` virtual function from {@link Pango.Font}.
     * @gir-type Class
     */
    abstract class Font extends Pango.Font {
        static $gtype: GObject.GType<Font>;

        // Properties
        /**
         * The PangoFc font map this font is associated with.
         */
        get fontmap(): FontMap;
        set fontmap(val: FontMap);

        /**
         * The fontconfig pattern for this font.
         * @construct-only
         */
        get pattern(): null;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Font.SignalSignatures;

        // Fields
        priv: null;

        matrix: Pango.Matrix;

        metrics_by_lang: null[];

        is_hinted: number;

        is_transformed: number;

        // Constructors
        constructor(properties?: Partial<Font.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof Font.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Font.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Font.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Font.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Font.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Font.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Creates a {@link Pango.FontDescription} that matches the specified
         * Fontconfig pattern as closely as possible.
         * 
         * Many possible Fontconfig pattern values, such as `FC_RASTERIZER`
         * or `FC_DPI`, don't make sense in the context of {@link Pango.FontDescription},
         * so will be ignored.
         * @param pattern a {@link fontconfig.Pattern}
         * @param include_size if `true`, the pattern will include the size from   the `pattern`; otherwise the resulting pattern will be unsized.   (only `FC_SIZE` is examined, not `FC_PIXEL_SIZE`)
         */
        static description_from_pattern(pattern: fontconfig.Pattern, include_size: boolean): Pango.FontDescription;

        // Methods
        /**
         * Gets the glyph index for a given Unicode character
         * for `font`.
         * 
         * If you only want to determine whether the font has
         * the glyph, use {@link PangoFc.Font.has_char}.
         * @param wc Unicode character to look up
         * @returns the glyph index, or 0, if the Unicode   character doesn't exist in the font.
         */
        get_glyph(wc: string): number;

        /**
         * Returns the languages that are supported by `font`.
         * 
         * This corresponds to the FC_LANG member of the FcPattern.
         * 
         * The returned array is only valid as long as the font
         * and its fontmap are valid.
         * @returns a   `null`-terminated array of {@link Pango.Language}*
         */
        get_languages(): (Pango.Language[] | null);

        /**
         * Returns the index of a glyph suitable for drawing `wc`
         * as an unknown character.
         * 
         * Use PANGO_GET_UNKNOWN_GLYPH() instead.
         * @param wc the Unicode character for which a glyph is needed.
         * @returns a glyph index into `font`.
         */
        get_unknown_glyph(wc: string): Pango.Glyph;

        /**
         * Determines whether `font` has a glyph for the codepoint `wc`.
         * @param wc Unicode codepoint to look up
         * @returns `true` if `font` has the requested codepoint.
         */
        has_char(wc: string): boolean;

        /**
         * This function used to adjust each adjacent pair of glyphs
         * in `glyphs` according to kerning information in `font`.
         * 
         * Since 1.44, it does nothing.
         * @param glyphs a {@link Pango.GlyphString}
         */
        kern_glyphs(glyphs: Pango.GlyphString): void;

        /**
         * Releases a font previously obtained with
         * {@link PangoFc.Font.lock_face}.
         */
        unlock_face(): void;
    }


    namespace FontMap {
        // Signal signatures
        interface SignalSignatures extends Pango.FontMap.SignalSignatures {
            "notify::item-type": (pspec: GObject.ParamSpec) => void;
            "notify::n-items": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps<A extends GObject.Object = GObject.Object> extends Pango.FontMap.ConstructorProps, Gio.ListModel.ConstructorProps {

        }
    }

    /**
     * {@link PangoFc.FontMap} is a base class for font map implementations using the
     * Fontconfig and FreeType libraries.
     * 
     * It is used in the Xft and FreeType backends shipped with Pango,
     * but can also be used when creating new backends. Any backend
     * deriving from this base class will take advantage of the wide
     * range of shapers implemented using FreeType that come with Pango.
     * @gir-type Class
     */
    abstract class FontMap<A extends GObject.Object = GObject.Object> extends Pango.FontMap implements Gio.ListModel<A> {
        static $gtype: GObject.GType<FontMap>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FontMap.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<FontMap.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof FontMap.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FontMap.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof FontMap.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FontMap.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof FontMap.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<FontMap.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Clear all cached information and fontsets for this font map.
         * 
         * This should be called whenever there is a change in the
         * output of the `default_substitute()` virtual function of the
         * font map, or if fontconfig has been reinitialized to new
         * configuration.
         */
        cache_clear(): void;

        /**
         * Informs font map that the fontconfig configuration (i.e.,
         * the {@link fontconfig.Config} object) used by this font map has changed.
         * 
         * This currently calls {@link PangoFc.FontMap.cache_clear} which
         * ensures that list of fonts, etc will be regenerated using the
         * updated configuration.
         */
        config_changed(): void;

        /**
         * Creates a new context for this fontmap.
         * 
         * This function is intended only for backend implementations deriving
         * from {@link PangoFc.FontMap}; it is possible that a backend will store
         * additional information needed for correct operation on the {@link Pango.Context}
         * after calling this function.
         * @returns a new {@link Pango.Context}
         */
        create_context(): Pango.Context;

        /**
         * Finds the decoder to use for `pattern`.
         * 
         * Decoders can be added to a font map using
         * {@link PangoFc.FontMap.add_decoder_find_func}.
         * @param pattern The {@link fontconfig.Pattern} to find the decoder for.
         * @returns a newly created {@link PangoFc.Decoder}   object or `null` if no decoder is set for `pattern`.
         */
        find_decoder(pattern: fontconfig.Pattern): (Decoder | null);

        /**
         * Sets a function that will be called to do final configuration
         * substitution on a {@link fontconfig.Pattern} before it is used to load
         * the font.
         * 
         * This function can be used to do things like set
         * hinting and antialiasing options.
         * @param func function to call to to do final config tweaking on {@link fontconfig.Pattern} objects
         */
        set_default_substitute(func: SubstituteFunc): void;

        /**
         * Clears all cached information for the fontmap and marks
         * all fonts open for the fontmap as dead.
         * 
         * See the `shutdown()` virtual function of {@link PangoFc.Font}.
         * 
         * This function might be used by a backend when the underlying
         * windowing system for the font map exits. This function is only
         * intended to be called only for backend implementations deriving
         * from {@link PangoFc.FontMap}.
         */
        shutdown(): void;

        /**
         * Call this function any time the results of the default
         * substitution function set with
         * {@link PangoFc.FontMap.set_default_substitute} change.
         * 
         * That is, if your substitution function will return different
         * results for the same input pattern, you must call this function.
         */
        substitute_changed(): void;

        /**
         * Gets the type of the items in `list`.
         * 
         * All items returned from `g_list_model_get_item()` are of the type
         * returned by this function, or a subtype, or if the type is an
         * interface, they are an implementation of that interface.
         * 
         * The item type of a {@link Gio.ListModel} can not change during the life of the
         * model.
         * @returns the {@link GObject.GType} of the items contained in `list`.
         */
        get_item_type(): GObject.GType;

        /**
         * Gets the number of items in `list`.
         * 
         * Depending on the model implementation, calling this function may be
         * less efficient than iterating the list with increasing values for
         * `position` until `g_list_model_get_item()` returns `null`.
         * @returns the number of items in `list`.
         */
        get_n_items(): number;

        /**
         * Get the item at `position`.
         * 
         * If `position` is greater than the number of items in `list`, `null` is
         * returned.
         * 
         * `null` is never returned for an index that is smaller than the length
         * of the list.
         * 
         * This function is meant to be used by language bindings in place
         * of `g_list_model_get_item()`.
         * 
         * See also: `g_list_model_get_n_items()`
         * @param position the position of the item to fetch
         * @returns the object at `position`.
         */
        get_item(position: number): (A | null);

        /**
         * Emits the {@link Gio.ListModel.SignalSignatures.items_changed | Gio.ListModel::items-changed} signal on `list`.
         * 
         * This function should only be called by classes implementing
         * {@link Gio.ListModel}. It has to be called after the internal representation
         * of `list` has been updated, because handlers connected to this signal
         * might query the new state of the list.
         * 
         * Implementations must only make changes to the model (as visible to
         * its consumer) in places that will not cause problems for that
         * consumer.  For models that are driven directly by a write API (such
         * as {@link Gio.ListStore}), changes can be reported in response to uses of that
         * API.  For models that represent remote data, changes should only be
         * made from a fresh mainloop dispatch.  It is particularly not
         * permitted to make changes in response to a call to the {@link Gio.ListModel}
         * consumer API.
         * 
         * Stated another way: in general, it is assumed that code making a
         * series of accesses to the model via the API, without returning to the
         * mainloop, and without calling other code, will continue to view the
         * same contents of the model.
         * @param position the position at which `list` changed
         * @param removed the number of items removed
         * @param added the number of items added
         */
        items_changed(position: number, removed: number, added: number): void;

        /**
         * Get the item at `position`. If `position` is greater than the number of
         * items in `list`, `null` is returned.
         * 
         * `null` is never returned for an index that is smaller than the length
         * of the list.  See `g_list_model_get_n_items()`.
         * 
         * The same {@link GObject.Object} instance may not appear more than once in a {@link Gio.ListModel}.
         * @param position the position of the item to fetch
         * @virtual
         */
        vfunc_get_item(position: number): (A | null);

        /**
         * Gets the type of the items in `list`.
         * 
         * All items returned from `g_list_model_get_item()` are of the type
         * returned by this function, or a subtype, or if the type is an
         * interface, they are an implementation of that interface.
         * 
         * The item type of a {@link Gio.ListModel} can not change during the life of the
         * model.
         * @virtual
         */
        vfunc_get_item_type(): GObject.GType;

        /**
         * Gets the number of items in `list`.
         * 
         * Depending on the model implementation, calling this function may be
         * less efficient than iterating the list with increasing values for
         * `position` until `g_list_model_get_item()` returns `null`.
         * @virtual
         */
        vfunc_get_n_items(): number;
    }


    /**
     * @gir-type Alias
     */
    type DecoderClass = typeof Decoder;

    /**
     * @gir-type Alias
     */
    type FontClass = typeof Font;

    /**
     * @gir-type Alias
     */
    type FontMapClass = typeof FontMap;

    /**
     * @gir-type Struct
     */
    abstract class FontMapPrivate {
        static $gtype: GObject.GType<FontMapPrivate>;
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

export default PangoFc;

// END
