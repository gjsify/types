
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
import type PangoFT2 from '@girs/pangoft2-1.0';

export namespace PangoXft {

/**
 * Returns the `PangoXftFontMap` for the given display and screen.
 * The fontmap is owned by Pango and will be valid until
 * the display is closed.
 * @param display an X display
 * @param screen the screen number of a screen within `display`
 * @returns a `PangoFontMap` object, owned by Pango.
 */
function get_font_map(display: xlib.Display, screen: number): Pango.FontMap
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
function picture_render(display: xlib.Display, src_picture: xlib.Picture, dest_picture: xlib.Picture, font: Pango.Font, glyphs: Pango.GlyphString, x: number, y: number): void
/**
 * Renders a `PangoGlyphString` onto an XftDraw object wrapping an X drawable.
 * @param draw the XftDraw object.
 * @param color the color in which to draw the string
 * @param font the font in which to draw the string
 * @param glyphs the glyph string to draw
 * @param x the x position of start of string (in pixels)
 * @param y the y position of baseline (in pixels)
 */
function render(draw: xft.Draw, color: xft.Color, font: Pango.Font, glyphs: Pango.GlyphString, x: number, y: number): void
/**
 * Render a `PangoLayout` onto a XftDraw
 * @param draw an XftDraw
 * @param color the foreground color in which to draw the layout   (may be overridden by color attributes)
 * @param layout a `PangoLayout`
 * @param x the X position of the left of the layout (in Pango units)
 * @param y the Y position of the top of the layout (in Pango units)
 */
function render_layout(draw: xft.Draw, color: xft.Color, layout: Pango.Layout, x: number, y: number): void
/**
 * Render a `PangoLayoutLine` onto a XftDraw
 * @param draw an XftDraw
 * @param color the foreground color in which to draw the layout line   (may be overridden by color attributes)
 * @param line a `PangoLayoutLine`
 * @param x the x position of start of string (in Pango units)
 * @param y the y position of baseline (in Pango units)
 */
function render_layout_line(draw: xft.Draw, color: xft.Color, line: Pango.LayoutLine, x: number, y: number): void
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
function render_transformed(draw: xft.Draw, color: xft.Color, matrix: Pango.Matrix | null, font: Pango.Font, glyphs: Pango.GlyphString, x: number, y: number): void
/**
 * Sets a function that will be called to do final configuration
 * substitution on a #FcPattern before it is used to load
 * the font. This function can be used to do things like set
 * hinting and antialiasing options.
 * @param display an X Display
 * @param screen the screen number of a screen within `display`
 * @param func function to call to to do final config tweaking        on #FcPattern objects.
 */
function set_default_substitute(display: xlib.Display, screen: number, func: SubstituteFunc): void
/**
 * Release any resources that have been cached for the
 * combination of `display` and `screen`. Note that when the
 * X display is closed, resources are released automatically,
 * without needing to call this function.
 * @param display an X display
 * @param screen the screen number of a screen within `display`
 */
function shutdown_display(display: xlib.Display, screen: number): void
/**
 * Call this function any time the results of the
 * default substitution function set with
 * pango_xft_set_default_substitute() change.
 * That is, if your substitution function will return different
 * results for the same input pattern, you must call this function.
 * @param display an X Display
 * @param screen the screen number of a screen within `display`
 */
function substitute_changed(display: xlib.Display, screen: number): void
/**
 * Function type for doing final config tweaking on prepared FcPatterns.
 * @callback 
 * @param pattern the FcPattern to tweak.
 * @param data user data.
 */
interface SubstituteFunc {
    (pattern: fontconfig.Pattern, data: any | null): void
}
module Font {

    // Constructor properties interface

    interface ConstructorProperties extends PangoFc.Font.ConstructorProperties {
    }

}

interface Font {

    // Conflicting properties

    parent_instance: Pango.Font & GObject.Object & GObject.Object

    // Owm methods of PangoXft-1.0.PangoXft.Font

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
    get_glyph(wc: string): number
    /**
     * Returns the index of a glyph suitable for drawing `wc` as an
     * unknown character.
     * 
     * Use PANGO_GET_UNKNOWN_GLYPH() instead.
     * @param wc the Unicode character for which a glyph is needed.
     * @returns a glyph index into @font.
     */
    get_unknown_glyph(wc: string): Pango.Glyph
    /**
     * Determines whether `font` has a glyph for the codepoint `wc`.
     * 
     * Use pango_fc_font_has_char() instead.
     * @param wc Unicode codepoint to look up
     * @returns %TRUE if @font has the requested codepoint.
     */
    has_char(wc: string): boolean

    // Class property signals of PangoXft-1.0.PangoXft.Font

    connect(sigName: "notify::pattern", callback: (($obj: Font, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pattern", callback: (($obj: Font, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pattern", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * `PangoXftFont` is an implementation of `PangoFcFont` using the Xft
 * library for rendering.  It is used in conjunction with `PangoXftFontMap`.
 * @class 
 */
class Font extends PangoFc.Font {

    // Own properties of PangoXft-1.0.PangoXft.Font

    static name: string
    static $gtype: GObject.GType<Font>

    // Constructors of PangoXft-1.0.PangoXft.Font

    constructor(config?: Font.ConstructorProperties) 
    _init(config?: Font.ConstructorProperties): void
}

module FontMap {

    // Constructor properties interface

    interface ConstructorProperties extends Gio.ListModel.ConstructorProperties, PangoFc.FontMap.ConstructorProperties {
    }

}

interface FontMap extends Gio.ListModel {

    // Class property signals of PangoXft-1.0.PangoXft.FontMap

    connect(sigName: "notify::item-type", callback: (($obj: FontMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::item-type", callback: (($obj: FontMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::item-type", ...args: any[]): void
    connect(sigName: "notify::n-items", callback: (($obj: FontMap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::n-items", callback: (($obj: FontMap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::n-items", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * `PangoXftFontMap` is an implementation of `PangoFcFontMap` suitable for
 * the Xft library as the renderer.  It is used in to create fonts of
 * type `PangoXftFont`.
 * @class 
 */
class FontMap extends PangoFc.FontMap {

    // Own properties of PangoXft-1.0.PangoXft.FontMap

    static name: string
    static $gtype: GObject.GType<FontMap>

    // Constructors of PangoXft-1.0.PangoXft.FontMap

    constructor(config?: FontMap.ConstructorProperties) 
    _init(config?: FontMap.ConstructorProperties): void
}

module Renderer {

    // Constructor properties interface

    interface ConstructorProperties extends Pango.Renderer.ConstructorProperties {

        // Own constructor properties of PangoXft-1.0.PangoXft.Renderer

        display?: any | null
        screen?: number | null
    }

}

interface Renderer {

    // Own properties of PangoXft-1.0.PangoXft.Renderer

    readonly display: any
    readonly screen: number

    // Owm methods of PangoXft-1.0.PangoXft.Renderer

    /**
     * Sets the default foreground color for a XftRenderer.
     * @param default_color the default foreground color
     */
    set_default_color(default_color: Pango.Color): void
    /**
     * Sets the XftDraw object that the renderer is drawing to.
     * The renderer must not be currently active.
     * @param draw a XftDraw
     */
    set_draw(draw: xft.Draw): void

    // Own virtual methods of PangoXft-1.0.PangoXft.Renderer

    vfunc_composite_glyphs(xft_font: xft.Font, glyphs: xft.GlyphSpec, n_glyphs: number): void
    vfunc_composite_trapezoids(part: Pango.RenderPart, trapezoids: xlib.XTrapezoid, n_trapezoids: number): void

    // Class property signals of PangoXft-1.0.PangoXft.Renderer

    connect(sigName: "notify::display", callback: (($obj: Renderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display", callback: (($obj: Renderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::display", ...args: any[]): void
    connect(sigName: "notify::screen", callback: (($obj: Renderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::screen", callback: (($obj: Renderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::screen", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * `PangoXftRenderer` is a subclass of `PangoRenderer` used for rendering
 * with Pango's Xft backend. It can be used directly, or it can be
 * further subclassed to modify exactly how drawing of individual
 * elements occurs.
 * @class 
 */
class Renderer extends Pango.Renderer {

    // Own properties of PangoXft-1.0.PangoXft.Renderer

    static name: string
    static $gtype: GObject.GType<Renderer>

    // Constructors of PangoXft-1.0.PangoXft.Renderer

    constructor(config?: Renderer.ConstructorProperties) 
    /**
     * Create a new `PangoXftRenderer` to allow rendering Pango objects
     * with the Xft library.
     * 
     * You must call pango_xft_renderer_set_draw() before
     * using the renderer.
     * @constructor 
     * @param display an X display
     * @param screen the index of the screen for `display` to which rendering will be done
     * @returns the newly created `PangoXftRenderer`
     */
    constructor(display: xlib.Display, screen: number) 
    /**
     * Create a new `PangoXftRenderer` to allow rendering Pango objects
     * with the Xft library.
     * 
     * You must call pango_xft_renderer_set_draw() before
     * using the renderer.
     * @constructor 
     * @param display an X display
     * @param screen the index of the screen for `display` to which rendering will be done
     * @returns the newly created `PangoXftRenderer`
     */
    static new(display: xlib.Display, screen: number): Renderer
    _init(config?: Renderer.ConstructorProperties): void
}

interface RendererClass {

    // Own fields of PangoXft-1.0.PangoXft.RendererClass

    composite_trapezoids: (xftrenderer: Renderer, part: Pango.RenderPart, trapezoids: xlib.XTrapezoid, n_trapezoids: number) => void
    composite_glyphs: (xftrenderer: Renderer, xft_font: xft.Font, glyphs: xft.GlyphSpec, n_glyphs: number) => void
}

/**
 * The class structure for `PangoXftRenderer`
 * @record 
 */
abstract class RendererClass {

    // Own properties of PangoXft-1.0.PangoXft.RendererClass

    static name: string
}

interface RendererPrivate {
}

class RendererPrivate {

    // Own properties of PangoXft-1.0.PangoXft.RendererPrivate

    static name: string
}

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

export default PangoXft;
// END