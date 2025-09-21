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
import type CoglPango from '@girs/coglpango-8';
import type PangoCairo from '@girs/pangocairo-1.0';
import type cairo from 'cairo';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type GModule from '@girs/gmodule-2.0';
import type Cogl from '@girs/cogl-8';
import type Graphene from '@girs/graphene-1.0';
import type GL from '@girs/gl-1.0';
import type Clutter from '@girs/clutter-8';
import type Json from '@girs/json-1.0';
import type Atk from '@girs/atk-1.0';

export namespace ClutterX11 {
    /**
     * ClutterX11-8
     */

    /**
     * Return values for the #ClutterX11FilterFunc function.
     */

    /**
     * Return values for the #ClutterX11FilterFunc function.
     */
    export namespace FilterReturn {
        export const $gtype: GObject.GType<FilterReturn>;
    }

    enum FilterReturn {
        /**
         * The event was not handled, continues the
         *   processing
         */
        CONTINUE,
        /**
         * Native event translated into a Clutter
         *   event, stops the processing
         */
        TRANSLATE,
        /**
         * Remove the event, stops the processing
         */
        REMOVE,
    }
    /**
     * Retrieves the pointer to the default display.
     * @returns the default display
     */
    function get_default_display(): xlib.Display;
    /**
     * Gets the number of the default X Screen object.
     * @returns the number of the default screen
     */
    function get_default_screen(): number;
    /**
     * Retrieves whether the Clutter X11 backend will create stereo
     * stages if possible.
     * @returns %TRUE if stereo stages are used if possible
     */
    function get_use_stereo_stage(): boolean;
    /**
     * Sets the display connection Clutter should use; must be called
     * before clutter_init(), clutter_init_with_args() or other functions
     * pertaining Clutter's initialization process.
     *
     * If you are parsing the command line arguments by retrieving Clutter's
     * #GOptionGroup with clutter_get_option_group() and calling
     * g_option_context_parse() yourself, you should also call
     * clutter_x11_set_display() before g_option_context_parse().
     * @param xdpy pointer to a X display connection.
     */
    function set_display(xdpy: xlib.Display): void;
    /**
     * Sets whether the backend object for Clutter stages, will,
     * if possible, be created with the ability to support stereo drawing
     * (drawing separate images for the left and right eyes).
     *
     * This function must be called before clutter_init() is called.
     * During paint callbacks, cogl_framebuffer_is_stereo() can be called
     * on the framebuffer retrieved by cogl_get_draw_framebuffer() to
     * determine if stereo support was successfully enabled, and
     * cogl_framebuffer_set_stereo_mode() to determine which buffers
     * will be drawn to.
     *
     * Note that this function *does not* cause the stage to be drawn
     * multiple times with different perspective transformations and thus
     * appear in 3D, it simply enables individual ClutterActors to paint
     * different images for the left and and right eye.
     * @param use_stereo %TRUE if the stereo stages should be used if possible.
     */
    function set_use_stereo_stage(use_stereo: boolean): void;
    /**
     * Traps every X error until clutter_x11_untrap_x_errors() is called.
     */
    function trap_x_errors(): void;
    /**
     * Removes the X error trap and returns the current status.
     * @returns the trapped error code, or 0 for success
     */
    function untrap_x_errors(): number;
    interface FilterFunc {
        (xev: xlib.XEvent, cev: Clutter.Event): FilterReturn;
    }
    abstract class XInputDevice {
        static $gtype: GObject.GType<XInputDevice>;

        // Constructors

        _init(...args: any[]): void;
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

export default ClutterX11;

// END
