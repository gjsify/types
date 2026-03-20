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
import type PangoCairo from '@girs/pangocairo-1.0';
import type cairo from 'cairo';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type GModule from '@girs/gmodule-2.0';
import type Cogl from '@girs/cogl-2.0';
import type GL from '@girs/gl-1.0';

export namespace CoglPango {
    /**
     * CoglPango-2.0
     */

    /**
     * This updates any internal glyph cache textures as necessary to be
     * able to render the given `layout`.
     *
     * This api should be used to avoid mid-scene modifications of
     * glyph-cache textures which can lead to undefined rendering results.
     * @param layout A {@link Pango.Layout}
     * @since 1.0
     */
    function ensure_glyph_cache_for_layout(layout: Pango.Layout): void;
    /**
     * Clears the glyph cache for `font_map`.
     * @param font_map a {@link CoglPango.FontMap}
     * @since 1.0
     */
    function font_map_clear_glyph_cache(font_map: FontMap): void;
    /**
     * Create a {@link Pango.Context} for the given `font_map`.
     * @param font_map a {@link CoglPango.FontMap}
     * @returns the newly created context: free with `g_object_unref()`.
     */
    function font_map_create_context(font_map: FontMap): Pango.Context;
    /**
     * Retrieves the {@link CoglPango.Renderer} for the passed `font_map`.
     * @param font_map a {@link CoglPango.FontMap}
     * @returns a {@link Pango.Renderer}
     * @since 1.0
     */
    function font_map_get_renderer(font_map: FontMap): Pango.Renderer;
    /**
     * Retrieves whether the {@link CoglPango.Renderer} used by `font_map` will use
     * mipmapping when rendering the glyphs.
     * @param font_map a {@link CoglPango.FontMap}
     * @returns `true` if mipmapping is used, `false` otherwise.
     * @since 1.0
     */
    function font_map_get_use_mipmapping(font_map: FontMap): Cogl.Bool;
    /**
     * Creates a new font map.
     * @returns the newly created {@link Pango.FontMap}
     * @since 1.14
     */
    function font_map_new(): Pango.FontMap;
    /**
     * Sets the resolution for the `font_map`. This is a scale factor
     * between points specified in a {@link Pango.FontDescription} and Cogl units.
     * The default value is %96, meaning that a 10 point font will be 13
     * units high. (10 * 96. / 72. = 13.3).
     * @param font_map a {@link CoglPango.FontMap}
     * @param dpi The resolution in "dots per inch". (Physical inches aren't       actually involved; the terminology is conventional.)
     * @since 1.14
     */
    function font_map_set_resolution(font_map: FontMap, dpi: number): void;
    /**
     * Sets whether the renderer for the passed font map should use
     * mipmapping when rendering a {@link Pango.Layout}.
     * @param font_map a {@link CoglPango.FontMap}
     * @param value `true` to enable the use of mipmapping
     * @since 1.0
     */
    function font_map_set_use_mipmapping(font_map: FontMap, value: Cogl.Bool): void;
    /**
     * Draws a solidly coloured `layout` on the given `framebuffer` at (`x`,
     * `y`) within the `framebuffer`<!-- -->'s current model-view coordinate
     * space.
     * @param layout a {@link Pango.Layout}
     * @param x X coordinate to render the layout at
     * @param y Y coordinate to render the layout at
     * @param color color to use when rendering the layout
     * @param flags
     * @since 1.0
     * @deprecated since 1.16: Use `cogl_pango_show_layout()` instead
     */
    function render_layout(layout: Pango.Layout, x: number, y: number, color: Cogl.Color, flags: number): void;
    /**
     * Renders `line` at the given coordinates using the given color.
     * @param line a {@link Pango.LayoutLine}
     * @param x X coordinate to render the line at
     * @param y Y coordinate to render the line at
     * @param color color to use when rendering the line
     * @since 1.0
     * @deprecated since 1.16: Use `cogl_pango_show_layout()` instead
     */
    function render_layout_line(line: Pango.LayoutLine, x: number, y: number, color: Cogl.Color): void;
    /**
     * Draws a solidly coloured `layout` on the given `framebuffer` at (`x`,
     * `y`) within the `framebuffer`<!-- -->'s current model-view coordinate
     * space.
     * @param layout a {@link Pango.Layout}
     * @param x X coordinate (in Pango units) to render the layout at
     * @param y Y coordinate (in Pango units) to render the layout at
     * @param color color to use when rendering the layout
     * @param flags
     * @since 1.0
     * @deprecated since 1.16: Use `cogl_pango_show_layout()` instead
     */
    function render_layout_subpixel(layout: Pango.Layout, x: number, y: number, color: Cogl.Color, flags: number): void;
    /**
     * Draws a solidly coloured `layout` on the given `framebuffer` at (`x`,
     * `y`) within the `framebuffer`<!-- -->'s current model-view coordinate
     * space.
     * @param framebuffer A {@link Cogl.Framebuffer} to draw too.
     * @param layout a {@link Pango.Layout}
     * @param x X coordinate to render the layout at
     * @param y Y coordinate to render the layout at
     * @param color color to use when rendering the layout
     * @since 1.14
     */
    function show_layout(
        framebuffer: Cogl.Framebuffer,
        layout: Pango.Layout,
        x: number,
        y: number,
        color: Cogl.Color,
    ): void;
    /**
     * Draws a solidly coloured `line` on the given `framebuffer` at (`x`,
     * `y`) within the `framebuffer`<!-- -->'s current model-view coordinate
     * space.
     * @param framebuffer A {@link Cogl.Framebuffer} to draw too.
     * @param line a {@link Pango.LayoutLine}
     * @param x X coordinate to render the line at
     * @param y Y coordinate to render the line at
     * @param color color to use when rendering the line
     * @since 1.14
     */
    function show_layout_line(
        framebuffer: Cogl.Framebuffer,
        line: Pango.LayoutLine,
        x: number,
        y: number,
        color: Cogl.Color,
    ): void;
    namespace Renderer {
        // Signal signatures
        interface SignalSignatures extends Pango.Renderer.SignalSignatures {
            'notify::context': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Pango.Renderer.ConstructorProps {
            context: any;
        }
    }

    /**
     * @gir-type Class
     */
    class Renderer extends Pango.Renderer {
        static $gtype: GObject.GType<Renderer>;

        // Properties

        /**
         * @construct-only
         */
        set context(val: any);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Renderer.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<Renderer.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof Renderer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Renderer.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Renderer.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Renderer.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Renderer.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Renderer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    /**
     * @gir-type Alias
     */
    type RendererClass = typeof Renderer;
    /**
     * @gir-type Alias
     */
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
