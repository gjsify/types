
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
import type freetype2 from '@girs/freetype2-2.0';
import type PangoFc from '@girs/pangofc-1.0';
import type fontconfig from '@girs/fontconfig-2.0';
import type Pango from '@girs/pango-1.0';
import type cairo from 'cairo';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type Gio from '@girs/gio-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace PangoFT2 {

    /**
     * PangoFT2-1.0
     */


    /**
     * Gets the {@link Pango.Coverage} for a `PangoFT2Font`.
     * 
     * Use {@link Pango.Font.get_coverage} instead.
     * @param font a Pango FT2 font
     * @param language a language tag.
     * @returns a {@link Pango.Coverage}
     */
    function font_get_coverage(font: Pango.Font, language: Pango.Language): Pango.Coverage;

    /**
     * Retrieves kerning information for a combination of two glyphs.
     * 
     * Use `pango_fc_font_kern_glyphs()` instead.
     * @param font a {@link Pango.Font}
     * @param left the left {@link Pango.Glyph}
     * @param right the right {@link Pango.Glyph}
     * @returns The amount of kerning (in Pango units) to   apply for the given combination of glyphs.
     */
    function font_get_kerning(font: Pango.Font, left: Pango.Glyph, right: Pango.Glyph): number;

    /**
     * Return the index of a glyph suitable for drawing unknown
     * characters with `font`, or `PANGO_GLYPH_EMPTY` if no suitable
     * glyph found.
     * 
     * If you want to draw an unknown-box for a character that
     * is not covered by the font, use PANGO_GET_UNKNOWN_GLYPH()
     * instead.
     * @param font a {@link Pango.Font}
     * @returns a glyph index into `font`, or `PANGO_GLYPH_EMPTY`
     */
    function get_unknown_glyph(font: Pango.Font): Pango.Glyph;

    /**
     * Renders a {@link Pango.GlyphString} onto a FreeType2 bitmap.
     * @param bitmap the FreeType2 bitmap onto which to draw the string
     * @param font the font in which to draw the string
     * @param glyphs the glyph string to draw
     * @param x the x position of the start of the string (in pixels)
     * @param y the y position of the baseline (in pixels)
     */
    function render(bitmap: freetype2.Bitmap, font: Pango.Font, glyphs: Pango.GlyphString, x: number, y: number): void;

    /**
     * Render a {@link Pango.Layout} onto a FreeType2 bitmap
     * @param bitmap a FT_Bitmap to render the layout onto
     * @param layout a {@link Pango.Layout}
     * @param x the X position of the left of the layout (in pixels)
     * @param y the Y position of the top of the layout (in pixels)
     */
    function render_layout(bitmap: freetype2.Bitmap, layout: Pango.Layout, x: number, y: number): void;

    /**
     * Render a {@link Pango.LayoutLine} onto a FreeType2 bitmap
     * @param bitmap a FT_Bitmap to render the line onto
     * @param line a {@link Pango.LayoutLine}
     * @param x the x position of start of string (in pixels)
     * @param y the y position of baseline (in pixels)
     */
    function render_layout_line(bitmap: freetype2.Bitmap, line: Pango.LayoutLine, x: number, y: number): void;

    /**
     * Render a {@link Pango.LayoutLine} onto a FreeType2 bitmap, with he
     * location specified in fixed-point Pango units rather than
     * pixels.
     * 
     * (Using this will avoid extra inaccuracies from rounding
     * to integer pixels multiple times, even if the final glyph
     * positions are integers.)
     * @param bitmap a FT_Bitmap to render the line onto
     * @param line a {@link Pango.LayoutLine}
     * @param x the x position of start of string (in Pango units)
     * @param y the y position of baseline (in Pango units)
     * @since 1.6
     */
    function render_layout_line_subpixel(bitmap: freetype2.Bitmap, line: Pango.LayoutLine, x: number, y: number): void;

    /**
     * Render a {@link Pango.Layout} onto a FreeType2 bitmap, with he
     * location specified in fixed-point Pango units rather than
     * pixels.
     * 
     * (Using this will avoid extra inaccuracies from rounding
     * to integer pixels multiple times, even if the final glyph
     * positions are integers.)
     * @param bitmap a FT_Bitmap to render the layout onto
     * @param layout a {@link Pango.Layout}
     * @param x the X position of the left of the layout (in Pango units)
     * @param y the Y position of the top of the layout (in Pango units)
     * @since 1.6
     */
    function render_layout_subpixel(bitmap: freetype2.Bitmap, layout: Pango.Layout, x: number, y: number): void;

    /**
     * Renders a {@link Pango.GlyphString} onto a FreeType2 bitmap, possibly
     * transforming the layed-out coordinates through a transformation
     * matrix.
     * 
     * Note that the transformation matrix for `font` is not
     * changed, so to produce correct rendering results, the `font`
     * must have been loaded using a {@link Pango.Context} with an identical
     * transformation matrix to that passed in to this function.
     * @param bitmap the FreeType2 bitmap onto which to draw the string
     * @param matrix a {@link Pango.Matrix}
     * @param font the font in which to draw the string
     * @param glyphs the glyph string to draw
     * @param x the x position of the start of the string (in Pango   units in user space coordinates)
     * @param y the y position of the baseline (in Pango units   in user space coordinates)
     * @since 1.6
     */
    function render_transformed(bitmap: freetype2.Bitmap, matrix: (Pango.Matrix | null), font: Pango.Font, glyphs: Pango.GlyphString, x: number, y: number): void;

    /**
     * Free the global fontmap. (See `pango_ft2_font_map_for_display()`)
     * Use of the global PangoFT2 fontmap is deprecated.
     */
    function shutdown_display(): void;

    /**
     * @gir-type Callback
     */
    interface SubstituteFunc {
        (pattern: fontconfig.Pattern, data: null): void;
    }

    namespace FontMap {
        // Signal signatures
        interface SignalSignatures extends PangoFc.FontMap.SignalSignatures {
            "notify::item-type": (pspec: GObject.ParamSpec) => void;
            "notify::n-items": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps<A extends GObject.Object = GObject.Object> extends PangoFc.FontMap.ConstructorProps<A>, Gio.ListModel.ConstructorProps {

        }
    }

    /**
     * The {@link PangoFT2.FontMap} is the {@link Pango.FontMap} implementation for FreeType fonts.
     * @gir-type Class
     */
    class FontMap<A extends GObject.Object = GObject.Object> extends PangoFc.FontMap<A> implements Gio.ListModel<A> {
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

        static ["new"](): FontMap;

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
         * Sets a function that will be called to do final configuration
         * substitution on a {@link fontconfig.Pattern} before it is used to load
         * the font.
         * 
         * This function can be used to do things like set
         * hinting and antialiasing options.
         * @param func function to call to to do final config tweaking        on {@link fontconfig.Pattern} objects.
         */
        set_default_substitute(func: SubstituteFunc): void;

        /**
         * @param args 
         */
    // Conflicted with PangoFc.FontMap.set_default_substitute
        set_default_substitute(...args: never[]): any;

        /**
         * Sets the horizontal and vertical resolutions for the fontmap.
         * @param dpi_x dots per inch in the X direction
         * @param dpi_y dots per inch in the Y direction
         */
        set_resolution(dpi_x: number, dpi_y: number): void;

        /**
         * Call this function any time the results of the
         * default substitution function set with
         * `pango_ft2_font_map_set_default_substitute()` change.
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

export default PangoFT2;

// END
