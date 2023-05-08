
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */
/**
 * CoglPango-1.0
 */

import type PangoCairo from '@girs/pangocairo-1.0';
import type cairo from '@girs/cairo-1.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Gio from '@girs/gio-2.0';
import type Cogl from '@girs/cogl-1.0';
import type GL from '@girs/gl-1.0';

export namespace CoglPango {

/**
 * This updates any internal glyph cache textures as necessary to be
 * able to render the given `layout`.
 * 
 * This api should be used to avoid mid-scene modifications of
 * glyph-cache textures which can lead to undefined rendering results.
 * @param layout A #PangoLayout
 */
function ensureGlyphCacheForLayout(layout: Pango.Layout): void
/**
 * Clears the glyph cache for `font_map`.
 * @param fontMap a #CoglPangoFontMap
 */
function fontMapClearGlyphCache(fontMap: FontMap): void
/**
 * Create a #PangoContext for the given `font_map`.
 * @param fontMap a #CoglPangoFontMap
 * @returns the newly created context: free with g_object_unref().
 */
function fontMapCreateContext(fontMap: FontMap): Pango.Context
/**
 * Retrieves the #CoglPangoRenderer for the passed `font_map`.
 * @param fontMap a #CoglPangoFontMap
 * @returns a #PangoRenderer
 */
function fontMapGetRenderer(fontMap: FontMap): Pango.Renderer
/**
 * Retrieves whether the #CoglPangoRenderer used by `font_map` will use
 * mipmapping when rendering the glyphs.
 * @param fontMap a #CoglPangoFontMap
 * @returns %TRUE if mipmapping is used, %FALSE otherwise.
 */
function fontMapGetUseMipmapping(fontMap: FontMap): Cogl.Bool
/**
 * Creates a new font map.
 * @returns the newly created #PangoFontMap
 */
function fontMapNew(): Pango.FontMap
/**
 * Sets the resolution for the `font_map`. This is a scale factor
 * between points specified in a #PangoFontDescription and Cogl units.
 * The default value is %96, meaning that a 10 point font will be 13
 * units high. (10 * 96. / 72. = 13.3).
 * @param fontMap a #CoglPangoFontMap
 * @param dpi The resolution in "dots per inch". (Physical inches aren't       actually involved; the terminology is conventional.)
 */
function fontMapSetResolution(fontMap: FontMap, dpi: number): void
/**
 * Sets whether the renderer for the passed font map should use
 * mipmapping when rendering a #PangoLayout.
 * @param fontMap a #CoglPangoFontMap
 * @param value %TRUE to enable the use of mipmapping
 */
function fontMapSetUseMipmapping(fontMap: FontMap, value: Cogl.Bool): void
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
function renderLayout(layout: Pango.Layout, x: number, y: number, color: Cogl.Color, flags: number): void
/**
 * Renders `line` at the given coordinates using the given color.
 * @param line a #PangoLayoutLine
 * @param x X coordinate to render the line at
 * @param y Y coordinate to render the line at
 * @param color color to use when rendering the line
 */
function renderLayoutLine(line: Pango.LayoutLine, x: number, y: number, color: Cogl.Color): void
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
function renderLayoutSubpixel(layout: Pango.Layout, x: number, y: number, color: Cogl.Color, flags: number): void
module Renderer {

    // Constructor properties interface

    interface ConstructorProperties extends Pango.Renderer.ConstructorProperties {

        // Own constructor properties of CoglPango-1.0.CoglPango.Renderer

        context?: any | null
    }

}

interface Renderer {

    // Own properties of CoglPango-1.0.CoglPango.Renderer

    readonly context: any
    __gtype__: number

    // Class property signals of CoglPango-1.0.CoglPango.Renderer

    connect(sigName: "notify::context", callback: (...args: any[]) => void): number
    on(sigName: "notify::context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::context", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class Renderer extends Pango.Renderer {

    // Own properties of CoglPango-1.0.CoglPango.Renderer

    static name: string

    // Constructors of CoglPango-1.0.CoglPango.Renderer

    constructor(config?: Renderer.ConstructorProperties) 
    _init(config?: Renderer.ConstructorProperties): void
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