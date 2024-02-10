/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './pangoxft-1.0-ambient.d.ts';
import './pangoxft-1.0-import.d.ts';
/**
 * PangoXft-1.0
 */

import type xlib from '@girs/xlib-2.0';
import type xft from '@girs/xft-2.0';
import type PangoOT from '@girs/pangoot-1.0';
import type freetype2 from '@girs/freetype2-2.0';
import type PangoFc from '@girs/pangofc-1.0';
import type fontconfig from '@girs/fontconfig-2.0';
import type Pango from '@girs/pango-1.0';
import type cairo from '@girs/cairo-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type Gio from '@girs/gio-2.0';
import type GModule from '@girs/gmodule-2.0';
import type PangoFT2 from '@girs/pangoft2-1.0';

export namespace PangoXft {
    /**
     * Returns the `PangoXftFontMap` for the given display and screen.
     * The fontmap is owned by Pango and will be valid until
     * the display is closed.
     * @param display an X display
     * @param screen the screen number of a screen within @display
     * @returns a `PangoFontMap` object, owned by Pango.
     */
    function get_font_map(display: xlib.Display, screen: number): Pango.FontMap;
    /**
     * Renders a `PangoGlyphString` onto an Xrender Picture object.
     * @param display an X display
     * @param src_picture the source picture to draw the string with
     * @param dest_picture the destination picture to draw the string onto
     * @param font the font in which to draw the string
     * @param glyphs the glyph string to draw
     * @param x the x position of start of string (in pixels)
     * @param y the y position of baseline (in pixels)
     */
    function picture_render(
        display: xlib.Display,
        src_picture: xlib.Picture,
        dest_picture: xlib.Picture,
        font: Pango.Font,
        glyphs: Pango.GlyphString,
        x: number,
        y: number,
    ): void;
    /**
     * Renders a `PangoGlyphString` onto an XftDraw object wrapping an X drawable.
     * @param draw the XftDraw object.
     * @param color the color in which to draw the string
     * @param font the font in which to draw the string
     * @param glyphs the glyph string to draw
     * @param x the x position of start of string (in pixels)
     * @param y the y position of baseline (in pixels)
     */
    function render(
        draw: xft.Draw,
        color: xft.Color,
        font: Pango.Font,
        glyphs: Pango.GlyphString,
        x: number,
        y: number,
    ): void;
    /**
     * Render a `PangoLayout` onto a XftDraw
     * @param draw an XftDraw
     * @param color the foreground color in which to draw the layout   (may be overridden by color attributes)
     * @param layout a `PangoLayout`
     * @param x the X position of the left of the layout (in Pango units)
     * @param y the Y position of the top of the layout (in Pango units)
     */
    function render_layout(draw: xft.Draw, color: xft.Color, layout: Pango.Layout, x: number, y: number): void;
    /**
     * Render a `PangoLayoutLine` onto a XftDraw
     * @param draw an XftDraw
     * @param color the foreground color in which to draw the layout line   (may be overridden by color attributes)
     * @param line a `PangoLayoutLine`
     * @param x the x position of start of string (in Pango units)
     * @param y the y position of baseline (in Pango units)
     */
    function render_layout_line(draw: xft.Draw, color: xft.Color, line: Pango.LayoutLine, x: number, y: number): void;
    /**
     * Renders a `PangoGlyphString` onto a XftDraw, possibly
     * transforming the layed-out coordinates through a transformation
     * matrix.
     *
     * Note that the transformation matrix for `font` is not
     * changed, so to produce correct rendering results, the `font`
     * must have been loaded using a `PangoContext` with an identical
     * transformation matrix to that passed in to this function.
     * @param draw an XftDraw
     * @param color the color in which to draw the glyphs
     * @param matrix a `PangoMatrix`
     * @param font the font in which to draw the string
     * @param glyphs the glyph string to draw
     * @param x the x position of the start of the string (in Pango   units in user space coordinates)
     * @param y the y position of the baseline (in Pango units   in user space coordinates)
     */
    function render_transformed(
        draw: xft.Draw,
        color: xft.Color,
        matrix: Pango.Matrix | null,
        font: Pango.Font,
        glyphs: Pango.GlyphString,
        x: number,
        y: number,
    ): void;
    /**
     * Sets a function that will be called to do final configuration
     * substitution on a #FcPattern before it is used to load
     * the font. This function can be used to do things like set
     * hinting and antialiasing options.
     * @param display an X Display
     * @param screen the screen number of a screen within @display
     * @param func function to call to to do final config tweaking        on #FcPattern objects.
     */
    function set_default_substitute(display: xlib.Display, screen: number, func: SubstituteFunc): void;
    /**
     * Release any resources that have been cached for the
     * combination of `display` and `screen`. Note that when the
     * X display is closed, resources are released automatically,
     * without needing to call this function.
     * @param display an X display
     * @param screen the screen number of a screen within @display
     */
    function shutdown_display(display: xlib.Display, screen: number): void;
    /**
     * Call this function any time the results of the
     * default substitution function set with
     * pango_xft_set_default_substitute() change.
     * That is, if your substitution function will return different
     * results for the same input pattern, you must call this function.
     * @param display an X Display
     * @param screen the screen number of a screen within @display
     */
    function substitute_changed(display: xlib.Display, screen: number): void;
    interface SubstituteFunc {
        (pattern: fontconfig.Pattern, data?: any | null): void;
    }
    module Font {
        // Constructor properties interface
    }

    /**
     * `PangoXftFont` is an implementation of `PangoFcFont` using the Xft
     * library for rendering.  It is used in conjunction with `PangoXftFontMap`.
     */
    class Font extends PangoFc.Font {
        // Owm methods of PangoXft-1.0.Font

        /**
         * Gets the glyph index for a given Unicode character
         * for `font`.
         *
         * If you only want to determine whether the font has
         * the glyph, use pango_xft_font_has_char().
         *
         * Use pango_fc_font_get_glyph() instead.
         * @param wc Unicode codepoint to look up
         * @returns the glyph index, or 0, if the Unicode  character does not exist in the font.
         */
        get_glyph(wc: number): number;
        /**
         * Returns the index of a glyph suitable for drawing `wc` as an
         * unknown character.
         *
         * Use PANGO_GET_UNKNOWN_GLYPH() instead.
         * @param wc the Unicode character for which a glyph is needed.
         * @returns a glyph index into @font.
         */
        get_unknown_glyph(wc: number): Pango.Glyph;
        /**
         * Determines whether `font` has a glyph for the codepoint `wc`.
         *
         * Use pango_fc_font_has_char() instead.
         * @param wc Unicode codepoint to look up
         * @returns %TRUE if @font has the requested codepoint.
         */
        has_char(wc: number): boolean;
    }

    module FontMap {
        // Constructor properties interface
    }

    /**
     * `PangoXftFontMap` is an implementation of `PangoFcFontMap` suitable for
     * the Xft library as the renderer.  It is used in to create fonts of
     * type `PangoXftFont`.
     */
    class FontMap<A extends GObject.Object = GObject.Object> extends PangoFc.FontMap<A> {}

    module Renderer {
        // Constructor properties interface
    }

    /**
     * `PangoXftRenderer` is a subclass of `PangoRenderer` used for rendering
     * with Pango's Xft backend. It can be used directly, or it can be
     * further subclassed to modify exactly how drawing of individual
     * elements occurs.
     */
    class Renderer extends Pango.Renderer {
        // Own properties of PangoXft-1.0.Renderer

        display: any;
        screen: number;

        // Constructors of PangoXft-1.0.Renderer

        static ['new'](display: xlib.Display, screen: number): Renderer;

        // Owm methods of PangoXft-1.0.Renderer

        /**
         * Sets the default foreground color for a XftRenderer.
         * @param default_color the default foreground color
         */
        set_default_color(default_color: Pango.Color): void;
        /**
         * Sets the XftDraw object that the renderer is drawing to.
         * The renderer must not be currently active.
         * @param draw a XftDraw
         */
        set_draw(draw: xft.Draw): void;
    }

    /**
     * The class structure for `PangoXftRenderer`
     */
    class RendererClass {}

    class RendererPrivate {}

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

export default PangoXft;
// END
