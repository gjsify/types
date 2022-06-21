// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * CoglPango-1.0
 */

import type * as Gjs from './Gjs';
import type PangoCairo from './PangoCairo-1.0';
import type cairo from './cairo-1.0';
import type Pango from './Pango-1.0';
import type HarfBuzz from './HarfBuzz-0.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type Cogl from './Cogl-1.0';
import type GL from './GL-1.0';

export namespace CoglPango {

/**
 * This updates any internal glyph cache textures as necessary to be
 * able to render the given `layout`.
 * 
 * This api should be used to avoid mid-scene modifications of
 * glyph-cache textures which can lead to undefined rendering results.
 * @param layout A #PangoLayout
 */
function ensure_glyph_cache_for_layout(layout: Pango.Layout): void
/**
 * Clears the glyph cache for `font_map`.
 * @param font_map a #CoglPangoFontMap
 */
function font_map_clear_glyph_cache(font_map: FontMap): void
/**
 * Create a #PangoContext for the given `font_map`.
 * @param font_map a #CoglPangoFontMap
 */
function font_map_create_context(font_map: FontMap): Pango.Context
/**
 * Retrieves the #CoglPangoRenderer for the passed `font_map`.
 * @param font_map a #CoglPangoFontMap
 */
function font_map_get_renderer(font_map: FontMap): Pango.Renderer
/**
 * Retrieves whether the #CoglPangoRenderer used by `font_map` will use
 * mipmapping when rendering the glyphs.
 * @param font_map a #CoglPangoFontMap
 */
function font_map_get_use_mipmapping(font_map: FontMap): Cogl.Bool
/**
 * Creates a new font map.
 */
function font_map_new(): Pango.FontMap
/**
 * Sets the resolution for the `font_map`. This is a scale factor
 * between points specified in a #PangoFontDescription and Cogl units.
 * The default value is %96, meaning that a 10 point font will be 13
 * units high. (10 * 96. / 72. = 13.3).
 * @param font_map a #CoglPangoFontMap
 * @param dpi The resolution in "dots per inch". (Physical inches aren't       actually involved; the terminology is conventional.)
 */
function font_map_set_resolution(font_map: FontMap, dpi: number): void
/**
 * Sets whether the renderer for the passed font map should use
 * mipmapping when rendering a #PangoLayout.
 * @param font_map a #CoglPangoFontMap
 * @param value %TRUE to enable the use of mipmapping
 */
function font_map_set_use_mipmapping(font_map: FontMap, value: Cogl.Bool): void
/**
 * Draws a solidly coloured `layout` on the given `framebuffer` at (`x,`
 * `y)` within the `framebuffer<`!-- -->'s current model-view coordinate
 * space.
 * @param layout a #PangoLayout
 * @param x X coordinate to render the layout at
 * @param y Y coordinate to render the layout at
 * @param color color to use when rendering the layout
 * @param flags 
 */
function render_layout(layout: Pango.Layout, x: number, y: number, color: Cogl.Color, flags: number): void
/**
 * Renders `line` at the given coordinates using the given color.
 * @param line a #PangoLayoutLine
 * @param x X coordinate to render the line at
 * @param y Y coordinate to render the line at
 * @param color color to use when rendering the line
 */
function render_layout_line(line: Pango.LayoutLine, x: number, y: number, color: Cogl.Color): void
/**
 * Draws a solidly coloured `layout` on the given `framebuffer` at (`x,`
 * `y)` within the `framebuffer<`!-- -->'s current model-view coordinate
 * space.
 * @param layout a #PangoLayout
 * @param x X coordinate (in Pango units) to render the layout at
 * @param y Y coordinate (in Pango units) to render the layout at
 * @param color color to use when rendering the layout
 * @param flags 
 */
function render_layout_subpixel(layout: Pango.Layout, x: number, y: number, color: Cogl.Color, flags: number): void
interface Renderer_ConstructProps extends Pango.Renderer_ConstructProps {

    // Own constructor properties of CoglPango-1.0.CoglPango.Renderer

    context?: object | null
}

interface Renderer {

    // Own properties of CoglPango-1.0.CoglPango.Renderer

    readonly context: object

    // Class property signals of CoglPango-1.0.CoglPango.Renderer

    connect(sigName: "notify::context", callback: (($obj: Renderer, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::context", callback: (($obj: Renderer, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::context", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class Renderer extends Pango.Renderer {

    // Own properties of CoglPango-1.0.CoglPango.Renderer

    static name: string
    static $gtype: GObject.GType<Renderer>

    // Constructors of CoglPango-1.0.CoglPango.Renderer

    constructor(config?: Renderer_ConstructProps) 
    _init(config?: Renderer_ConstructProps): void
}

interface RendererClass {
}

abstract class RendererClass {

    // Own properties of CoglPango-1.0.CoglPango.RendererClass

    static name: string
}

    type FontMap = PangoCairo.FontMap
}
export default CoglPango;