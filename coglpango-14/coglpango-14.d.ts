/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

// Module dependencies
import type PangoCairo from '@girs/pangocairo-1.0';
import type cairo from '@girs/cairo-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type GModule from '@girs/gmodule-2.0';
import type Mtk from '@girs/mtk-14';
import type Graphene from '@girs/graphene-1.0';
import type Cogl from '@girs/cogl-14';
import type xlib from '@girs/xlib-2.0';
import type GL from '@girs/gl-1.0';

export namespace CoglPango {
    /**
     * CoglPango-14
     */

    /**
     * This updates any internal glyph cache textures as necessary to be
     * able to render the given `layout`.
     *
     * This api should be used to avoid mid-scene modifications of
     * glyph-cache textures which can lead to undefined rendering results.
     * @param layout A #PangoLayout
     */
    function ensure_glyph_cache_for_layout(layout: Pango.Layout): void;
    /**
     * Clears the glyph cache for `font_map`.
     * @param font_map a #CoglPangoFontMap
     */
    function font_map_clear_glyph_cache(font_map: FontMap): void;
    /**
     * Create a [class`Pango`.Context] for the given `font_map`.
     * @param font_map a #CoglPangoFontMap
     * @returns the newly created context: free with [method@GObject.Object.unref].
     */
    function font_map_create_context(font_map: FontMap): Pango.Context;
    /**
     * Retrieves the [class`CoglPango`.Renderer] for the passed `font_map`.
     * @param font_map a #CoglPangoFontMap
     * @returns a #PangoRenderer
     */
    function font_map_get_renderer(font_map: FontMap): Pango.Renderer;
    /**
     * Retrieves whether the [class`CoglPango`.Renderer] used by `font_map` will use
     * mipmapping when rendering the glyphs.
     * @param font_map a #CoglPangoFontMap
     * @returns %TRUE if mipmapping is used, %FALSE otherwise.
     */
    function font_map_get_use_mipmapping(font_map: FontMap): boolean;
    /**
     * Creates a new font map.
     * @returns the newly created #PangoFontMap
     */
    function font_map_new(): Pango.FontMap;
    /**
     * Sets the resolution for the `font_map`.
     *
     * This is a scale factor between points specified in a
     * [struct`Pango`.FontDescription] and Cogl units.
     * The default value is %96, meaning that a 10 point font will be 13
     * units high. (10 * 96. / 72. = 13.3).
     * @param font_map a #CoglPangoFontMap
     * @param dpi The resolution in "dots per inch". (Physical inches aren't       actually involved; the terminology is conventional.)
     */
    function font_map_set_resolution(font_map: FontMap, dpi: number): void;
    /**
     * Sets whether the renderer for the passed font map should use
     * mipmapping when rendering a [class`Pango`.Layout].
     * @param font_map a #CoglPangoFontMap
     * @param value %TRUE to enable the use of mipmapping
     */
    function font_map_set_use_mipmapping(font_map: FontMap, value: boolean): void;
    module Renderer {
        // Constructor properties interface

        interface ConstructorProps extends Pango.Renderer.ConstructorProps {
            context: Cogl.Context;
        }
    }

    class Renderer extends Pango.Renderer {
        static $gtype: GObject.GType<Renderer>;

        // Properties

        set context(val: Cogl.Context);

        // Constructors

        constructor(properties?: Partial<Renderer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;
    }

    type RendererClass = typeof Renderer;
    type FontMap = PangoCairo.FontMap;
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

export default CoglPango;

// END
