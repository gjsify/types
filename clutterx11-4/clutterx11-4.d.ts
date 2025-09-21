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
import type CoglPango from '@girs/coglpango-4';
import type PangoCairo from '@girs/pangocairo-1.0';
import type cairo from 'cairo';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type GModule from '@girs/gmodule-2.0';
import type Cogl from '@girs/cogl-4';
import type GL from '@girs/gl-1.0';
import type Clutter from '@girs/clutter-4';
import type Json from '@girs/json-1.0';
import type Atk from '@girs/atk-1.0';

export namespace ClutterX11 {
    /**
     * ClutterX11-4
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
     * Disables the internal polling of X11 events in the main loop.
     *
     * Libraries or applications calling this function will be responsible of
     * polling all X11 events.
     *
     * You also must call clutter_x11_handle_event() to let Clutter process
     * events and maintain its internal state.
     *
     * This function can only be called before calling clutter_init().
     *
     * Even with event handling disabled, Clutter will still select
     * all the events required to maintain its internal state on the stage
     * Window; compositors using Clutter and input regions to pass events
     * through to application windows should not rely on an empty input
     * region, and should instead clear it themselves explicitly using the
     * XFixes extension.
     *
     * This function should not be normally used by applications.
     */
    function disable_event_retrieval(): void;
    /**
     * Retrieves the group for the modifiers set in `event`
     * @param event a #ClutterEvent of type %CLUTTER_KEY_PRESS or %CLUTTER_KEY_RELEASE
     * @returns the group id
     */
    function event_get_key_group(event: Clutter.Event): number;
    /**
     * Retrieves the touch detail froma #ClutterEventSequence.
     * @param sequence a #ClutterEventSequence
     * @returns the touch detail
     */
    function event_sequence_get_touch_detail(sequence: Clutter.EventSequence): number;
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
     * Gets the stage for a particular X window.
     * @param win an X Window ID
     * @returns A #ClutterStage, or% NULL if a stage   does not exist for the window
     */
    function get_stage_from_window(win: xlib.Window): Clutter.Stage;
    /**
     * Retrieves whether the Clutter X11 backend is using ARGB visuals by default
     * @returns %TRUE if ARGB visuals are queried by default
     */
    function get_use_argb_visual(): boolean;
    /**
     * Retrieves whether the Clutter X11 backend will create stereo
     * stages if possible.
     * @returns %TRUE if stereo stages are used if possible
     */
    function get_use_stereo_stage(): boolean;
    /**
     * This function processes a single X event; it can be used to hook
     * into external X11 event processing (for example, a GDK filter
     * function).
     *
     * If clutter_x11_disable_event_retrieval() has been called, you must
     * let this function process events to update Clutter's internal state.
     * @param xevent pointer to XEvent structure
     * @returns #ClutterX11FilterReturn. %CLUTTER_X11_FILTER_REMOVE  indicates that Clutter has internally handled the event and the  caller should do no further processing. %CLUTTER_X11_FILTER_CONTINUE  indicates that Clutter is either not interested in the event,  or has used the event to update internal state without taking  any exclusive action. %CLUTTER_X11_FILTER_TRANSLATE will not  occur.
     */
    function handle_event(xevent: xlib.XEvent): FilterReturn;
    /**
     * Retrieves whether Clutter is running on an X11 server with the
     * XComposite extension
     * @returns %TRUE if the XComposite extension is available
     */
    function has_composite_extension(): boolean;
    /**
     * Queries the X11 backend to check if event collection has been disabled.
     * @returns TRUE if event retrival has been disabled. FALSE otherwise.
     */
    function has_event_retrieval(): boolean;
    /**
     * Gets whether Clutter has XInput support.
     * @returns %TRUE if Clutter was compiled with XInput support   and XInput support is available at run time.
     */
    function has_xinput(): boolean;
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
     * Target the #ClutterStage to use an existing external X Window
     * @param stage a #ClutterStage
     * @param xwindow an existing X Window id
     * @returns %TRUE if foreign window is valid
     */
    function set_stage_foreign(stage: Clutter.Stage, xwindow: xlib.Window): boolean;
    /**
     * Sets whether the Clutter X11 backend should request ARGB visuals by default
     * or not.
     *
     * By default, Clutter requests RGB visuals.
     *
     * If no ARGB visuals are found, the X11 backend will fall back to
     * requesting a RGB visual instead.
     *
     * ARGB visuals are required for the #ClutterStage:use-alpha property to work.
     *
     * This function can only be called once, and before clutter_init() is
     * called.
     * @param use_argb %TRUE if ARGB visuals should be requested by default
     */
    function set_use_argb_visual(use_argb: boolean): void;
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
