
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
import type xlib from '@girs/xlib-2.0';
import type xft from '@girs/xft-2.0';
import type PangoOT from '@girs/pangoot-1.0';
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
import type PangoFT2 from '@girs/pangoft2-1.0';

export namespace PangoXft {

    /**
     * PangoXft-1.0
     */


    /**
     * Returns the {@link PangoXft.FontMap} for the given display and screen.
     * The fontmap is owned by Pango and will be valid until
     * the display is closed.
     * @param display an X display
     * @param screen the screen number of a screen within `display`
     * @returns a {@link Pango.FontMap} object, owned by Pango.
     * @since 1.2
     */
    function get_font_map(display: xlib.Display, screen: number): Pango.FontMap;

    /**
     * Renders a {@link Pango.GlyphString} onto an Xrender Picture object.
     * @param display an X display
     * @param src_picture the source picture to draw the string with
     * @param dest_picture the destination picture to draw the string onto
     * @param font the font in which to draw the string
     * @param glyphs the glyph string to draw
     * @param x the x position of start of string (in pixels)
     * @param y the y position of baseline (in pixels)
     */
    function picture_render(display: xlib.Display, src_picture: xlib.Picture, dest_picture: xlib.Picture, font: Pango.Font, glyphs: Pango.GlyphString, x: number, y: number): void;

    /**
     * Renders a {@link Pango.GlyphString} onto an XftDraw object wrapping an X drawable.
     * @param draw the XftDraw object.
     * @param color the color in which to draw the string
     * @param font the font in which to draw the string
     * @param glyphs the glyph string to draw
     * @param x the x position of start of string (in pixels)
     * @param y the y position of baseline (in pixels)
     */
    function render(draw: xft.Draw, color: xft.Color, font: Pango.Font, glyphs: Pango.GlyphString, x: number, y: number): void;

    /**
     * Render a {@link Pango.Layout} onto a XftDraw
     * @param draw an XftDraw
     * @param color the foreground color in which to draw the layout   (may be overridden by color attributes)
     * @param layout a {@link Pango.Layout}
     * @param x the X position of the left of the layout (in Pango units)
     * @param y the Y position of the top of the layout (in Pango units)
     * @since 1.8
     */
    function render_layout(draw: xft.Draw, color: xft.Color, layout: Pango.Layout, x: number, y: number): void;

    /**
     * Render a {@link Pango.LayoutLine} onto a XftDraw
     * @param draw an XftDraw
     * @param color the foreground color in which to draw the layout line   (may be overridden by color attributes)
     * @param line a {@link Pango.LayoutLine}
     * @param x the x position of start of string (in Pango units)
     * @param y the y position of baseline (in Pango units)
     * @since 1.8
     */
    function render_layout_line(draw: xft.Draw, color: xft.Color, line: Pango.LayoutLine, x: number, y: number): void;

    /**
     * Renders a {@link Pango.GlyphString} onto a XftDraw, possibly
     * transforming the layed-out coordinates through a transformation
     * matrix.
     * 
     * Note that the transformation matrix for `font` is not
     * changed, so to produce correct rendering results, the `font`
     * must have been loaded using a {@link Pango.Context} with an identical
     * transformation matrix to that passed in to this function.
     * @param draw an XftDraw
     * @param color the color in which to draw the glyphs
     * @param matrix a {@link Pango.Matrix}
     * @param font the font in which to draw the string
     * @param glyphs the glyph string to draw
     * @param x the x position of the start of the string (in Pango   units in user space coordinates)
     * @param y the y position of the baseline (in Pango units   in user space coordinates)
     * @since 1.8
     */
    function render_transformed(draw: xft.Draw, color: xft.Color, matrix: Pango.Matrix | null, font: Pango.Font, glyphs: Pango.GlyphString, x: number, y: number): void;

    /**
     * Sets a function that will be called to do final configuration
     * substitution on a {@link fontconfig.Pattern} before it is used to load
     * the font. This function can be used to do things like set
     * hinting and antialiasing options.
     * @param display an X Display
     * @param screen the screen number of a screen within `display`
     * @param func function to call to to do final config tweaking        on {@link fontconfig.Pattern} objects.
     * @since 1.2
     * @deprecated since 1.46: Use `pango_fc_font_map_set_default_substitute()` instead.
     */
    function set_default_substitute(display: xlib.Display, screen: number, func: SubstituteFunc): void;

    /**
     * Release any resources that have been cached for the
     * combination of `display` and `screen`. Note that when the
     * X display is closed, resources are released automatically,
     * without needing to call this function.
     * @param display an X display
     * @param screen the screen number of a screen within `display`
     * @since 1.2
     */
    function shutdown_display(display: xlib.Display, screen: number): void;

    /**
     * Call this function any time the results of the
     * default substitution function set with
     * `pango_xft_set_default_substitute()` change.
     * That is, if your substitution function will return different
     * results for the same input pattern, you must call this function.
     * @param display an X Display
     * @param screen the screen number of a screen within `display`
     * @since 1.2
     * @deprecated since 1.46: Use `pango_fc_font_map_substitute_changed()` instead.
     */
    function substitute_changed(display: xlib.Display, screen: number): void;

    /**
     * @gir-type Callback
     */
    interface SubstituteFunc {
        (pattern: fontconfig.Pattern, data: null): void;
    }

    namespace Font {
        // Signal signatures
        interface SignalSignatures extends PangoFc.Font.SignalSignatures {
            "notify::fontmap": (pspec: GObject.ParamSpec) => void;
            "notify::pattern": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends PangoFc.Font.ConstructorProps {}
    }

    /**
     * {@link PangoXft.Font} is an implementation of {@link PangoFc.Font} using the Xft
     * library for rendering.  It is used in conjunction with {@link PangoXft.FontMap}.
     * @gir-type Class
     */
    class Font extends PangoFc.Font {
        static $gtype: GObject.GType<Font>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Font.SignalSignatures;

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

        // Methods
        /**
         * Gets the glyph index for a given Unicode character
         * for `font`.
         * 
         * If you only want to determine whether the font has
         * the glyph, use `pango_xft_font_has_char()`.
         * 
         * Use `pango_fc_font_get_glyph()` instead.
         * @param wc Unicode codepoint to look up
         * @returns the glyph index, or 0, if the Unicode  character does not exist in the font.
         */
        get_glyph(wc: string): number;

        /**
         * Returns the index of a glyph suitable for drawing `wc` as an
         * unknown character.
         * 
         * Use PANGO_GET_UNKNOWN_GLYPH() instead.
         * @param wc the Unicode character for which a glyph is needed.
         * @returns a glyph index into `font`.
         */
        get_unknown_glyph(wc: string): Pango.Glyph;

        /**
         * Determines whether `font` has a glyph for the codepoint `wc`.
         * 
         * Use `pango_fc_font_has_char()` instead.
         * @param wc Unicode codepoint to look up
         * @returns `true` if `font` has the requested codepoint.
         */
        has_char(wc: string): boolean;
    }


    namespace FontMap {
        // Signal signatures
        interface SignalSignatures extends PangoFc.FontMap.SignalSignatures {
            "notify::item-type": (pspec: GObject.ParamSpec) => void;
            "notify::n-items": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps<A extends GObject.Object = GObject.Object> extends PangoFc.FontMap.ConstructorProps, Gio.ListModel.ConstructorProps {}
    }

    /**
     * {@link PangoXft.FontMap} is an implementation of {@link PangoFc.FontMap} suitable for
     * the Xft library as the renderer.  It is used in to create fonts of
     * type {@link PangoXft.Font}.
     * @gir-type Class
     */
    class FontMap<A extends GObject.Object = GObject.Object> extends PangoFc.FontMap implements Gio.ListModel<A> {
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
        get_item(position: number): A | null;

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
        vfunc_get_item(position: number): A | null;

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


    namespace Renderer {
        // Signal signatures
        interface SignalSignatures extends Pango.Renderer.SignalSignatures {
            "notify::display": (pspec: GObject.ParamSpec) => void;
            "notify::screen": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Pango.Renderer.ConstructorProps {
            display: never;
            screen: number;
        }
    }

    /**
     * {@link PangoXft.Renderer} is a subclass of {@link Pango.Renderer} used for rendering
     * with Pango's Xft backend. It can be used directly, or it can be
     * further subclassed to modify exactly how drawing of individual
     * elements occurs.
     * @gir-type Class
     * @since 1.8
     */
    class Renderer extends Pango.Renderer {
        static $gtype: GObject.GType<Renderer>;

        // Properties
        /**
         * @construct-only
         */
        set display(val: never);

        /**
         * @construct-only
         * @default 0
         */
        set screen(val: number);

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

        static ["new"](display: xlib.Display, screen: number): Renderer;

        // Signals
        /** @signal */
        connect<K extends keyof Renderer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Renderer.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Renderer.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Renderer.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Renderer.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Renderer.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * draw the specified glyphs using
         *   the current foreground color and other foreground
         *   attributes
         * @param xft_font 
         * @param glyphs 
         * @param n_glyphs 
         * @virtual
         */
        vfunc_composite_glyphs(xft_font: xft.Font, glyphs: xft.GlyphSpec, n_glyphs: number): void;

        /**
         * draw the specified trapezoids using
         *   the current color and other attributes for `part`
         * @param part 
         * @param trapezoids 
         * @param n_trapezoids 
         * @virtual
         */
        vfunc_composite_trapezoids(part: Pango.RenderPart, trapezoids: xlib.XTrapezoid, n_trapezoids: number): void;

        // Methods
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
     * @gir-type Alias
     */
    type RendererClass = typeof Renderer;

    /**
     * @gir-type Struct
     */
    abstract class RendererPrivate {
        static $gtype: GObject.GType<RendererPrivate>;
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

export default PangoXft;

// END
