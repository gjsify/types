
/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './clutterx11-1.0-ambient.d.ts';
import './clutterx11-1.0-import.d.ts';
/**
 * ClutterX11-1.0
 */

import type xlib from '@girs/xlib-2.0';
import type Clutter from '@girs/clutter-1.0';
import type cairo from '@girs/cairo-1.0';
import type Json from '@girs/json-1.0';
import type Gio from '@girs/gio-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type GL from '@girs/gl-1.0';
import type CoglPango from '@girs/coglpango-1.0';
import type PangoCairo from '@girs/pangocairo-1.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Cogl from '@girs/cogl-1.0';
import type Atk from '@girs/atk-1.0';

export namespace ClutterX11 {

/**
 * Return values for the #ClutterX11FilterFunc function.
 */
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
function disable_event_retrieval(): void
/**
 * Enables the use of the XInput extension if present on connected
 * XServer and support built into Clutter. XInput allows for multiple
 * pointing devices to be used.
 * 
 * This function must be called before clutter_init().
 * 
 * Since XInput might not be supported by the X server, you might
 * want to use clutter_x11_has_xinput() to see if support was enabled.
 */
function enable_xinput(): void
/**
 * Retrieves the group for the modifiers set in `event`
 * @param event a #ClutterEvent of type %CLUTTER_KEY_PRESS or %CLUTTER_KEY_RELEASE
 * @returns the group id
 */
function event_get_key_group(event: Clutter.Event): number
/**
 * Retrieves the touch detail froma #ClutterEventSequence.
 * @param sequence a #ClutterEventSequence
 * @returns the touch detail
 */
function event_sequence_get_touch_detail(sequence: Clutter.EventSequence): number
/**
 * Retrieves the pointer to the default display.
 * @returns the default display
 */
function get_default_display(): xlib.Display
/**
 * Gets the number of the default X Screen object.
 * @returns the number of the default screen
 */
function get_default_screen(): number
/**
 * Retrieves a pointer to the list of input devices
 * @returns a   pointer to the internal list of input devices; the returned list is   owned by Clutter and should not be modified or freed
 */
function get_input_devices(): Clutter.InputDevice[]
/**
 * Gets the stage for a particular X window.
 * @param win an X Window ID
 * @returns A #ClutterStage, or% NULL if a stage   does not exist for the window
 */
function get_stage_from_window(win: xlib.Window): Clutter.Stage
/**
 * Retrieves whether the Clutter X11 backend is using ARGB visuals by default
 * @returns %TRUE if ARGB visuals are queried by default
 */
function get_use_argb_visual(): boolean
/**
 * Retrieves whether the Clutter X11 backend will create stereo
 * stages if possible.
 * @returns %TRUE if stereo stages are used if possible
 */
function get_use_stereo_stage(): boolean
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
function handle_event(xevent: xlib.XEvent): FilterReturn
/**
 * Retrieves whether Clutter is running on an X11 server with the
 * XComposite extension
 * @returns %TRUE if the XComposite extension is available
 */
function has_composite_extension(): boolean
/**
 * Queries the X11 backend to check if event collection has been disabled.
 * @returns TRUE if event retrival has been disabled. FALSE otherwise.
 */
function has_event_retrieval(): boolean
/**
 * Gets whether Clutter has XInput support.
 * @returns %TRUE if Clutter was compiled with XInput support   and XInput support is available at run time.
 */
function has_xinput(): boolean
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
function set_display(xdpy: xlib.Display): void
/**
 * Target the #ClutterStage to use an existing external X Window
 * @param stage a #ClutterStage
 * @param xwindow an existing X Window id
 * @returns %TRUE if foreign window is valid
 */
function set_stage_foreign(stage: Clutter.Stage, xwindow: xlib.Window): boolean
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
function set_use_argb_visual(use_argb: boolean): void
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
function set_use_stereo_stage(use_stereo: boolean): void
/**
 * Traps every X error until clutter_x11_untrap_x_errors() is called.
 */
function trap_x_errors(): void
/**
 * Removes the X error trap and returns the current status.
 * @returns the trapped error code, or 0 for success
 */
function untrap_x_errors(): number
/**
 * Filter function for X11 native events.
 * @callback 
 * @param xev Native X11 event structure
 * @param cev Clutter event structure
 * @returns the result of the filtering
 */
interface FilterFunc {
    (xev: xlib.XEvent, cev: Clutter.Event): FilterReturn
}
module TexturePixmap {

    // Signal callback interfaces

    /**
     * Signal callback interface for `queue-damage-redraw`
     */
    interface QueueDamageRedrawSignalCallback {
        ($obj: TexturePixmap, x: number, y: number, width: number, height: number): void
    }

    /**
     * Signal callback interface for `update-area`
     */
    interface UpdateAreaSignalCallback {
        ($obj: TexturePixmap, x: number, y: number, width: number, height: number): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Clutter.Animatable.ConstructorProperties, Clutter.Container.ConstructorProperties, Clutter.Scriptable.ConstructorProperties, Clutter.Texture.ConstructorProperties {

        // Own constructor properties of ClutterX11-1.0.ClutterX11.TexturePixmap

        automatic_updates?: boolean | null
        pixmap?: number | null
        window?: number | null
        window_redirect_automatic?: boolean | null
    }

}

interface TexturePixmap extends Atk.ImplementorIface, Clutter.Animatable, Clutter.Container, Clutter.Scriptable {

    // Own properties of ClutterX11-1.0.ClutterX11.TexturePixmap

    automatic_updates: boolean
    readonly destroyed: boolean
    pixmap: number
    readonly pixmap_depth: number
    readonly pixmap_height: number
    readonly pixmap_width: number
    window: number
    readonly window_mapped: boolean
    readonly window_override_redirect: boolean
    window_redirect_automatic: boolean
    readonly window_x: number
    readonly window_y: number

    // Owm methods of ClutterX11-1.0.ClutterX11.TexturePixmap

    /**
     * Enables or disables the automatic updates ot `texture` in case the backing
     * pixmap or window is damaged
     * @param setting %TRUE to enable automatic updates
     */
    set_automatic(setting: boolean): void
    /**
     * Sets the X Pixmap to which the texture should be bound.
     * @param pixmap the X Pixmap to which the texture should be bound
     */
    set_pixmap(pixmap: xlib.Pixmap): void
    /**
     * Sets up a suitable pixmap for the window, using the composite and damage
     * extensions if possible, and then calls
     * clutter_x11_texture_pixmap_set_pixmap().
     * 
     * If you want to display a window in a #ClutterTexture, you probably want
     * this function, or its older sister, clutter_glx_texture_pixmap_set_window().
     * 
     * This function has no effect unless the XComposite extension is available.
     * @param window the X window to which the texture should be bound
     * @param automatic %TRUE for automatic window updates, %FALSE for manual.
     */
    set_window(window: xlib.Window, automatic: boolean): void
    /**
     * Resets the texture's pixmap from its window, perhaps in response to the
     * pixmap's invalidation as the window changed size.
     */
    sync_window(): void
    /**
     * Performs the actual binding of texture to the current content of
     * the pixmap. Can be called to update the texture if the pixmap
     * content has changed.
     * @param x the X coordinate of the area to update
     * @param y the Y coordinate of the area to update
     * @param width the width of the area to update
     * @param height the height of the area to update
     */
    update_area(x: number, y: number, width: number, height: number): void

    // Own virtual methods of ClutterX11-1.0.ClutterX11.TexturePixmap

    /**
     * Performs the actual binding of texture to the current content of
     * the pixmap. Can be called to update the texture if the pixmap
     * content has changed.
     * @virtual 
     * @param x the X coordinate of the area to update
     * @param y the Y coordinate of the area to update
     * @param width the width of the area to update
     * @param height the height of the area to update
     */
    vfunc_update_area(x: number, y: number, width: number, height: number): void

    // Own signals of ClutterX11-1.0.ClutterX11.TexturePixmap

    connect(sigName: "queue-damage-redraw", callback: TexturePixmap.QueueDamageRedrawSignalCallback): number
    connect_after(sigName: "queue-damage-redraw", callback: TexturePixmap.QueueDamageRedrawSignalCallback): number
    emit(sigName: "queue-damage-redraw", x: number, y: number, width: number, height: number, ...args: any[]): void
    connect(sigName: "update-area", callback: TexturePixmap.UpdateAreaSignalCallback): number
    connect_after(sigName: "update-area", callback: TexturePixmap.UpdateAreaSignalCallback): number
    emit(sigName: "update-area", x: number, y: number, width: number, height: number, ...args: any[]): void

    // Class property signals of ClutterX11-1.0.ClutterX11.TexturePixmap

    connect(sigName: "notify::automatic-updates", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::automatic-updates", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::automatic-updates", ...args: any[]): void
    connect(sigName: "notify::destroyed", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::destroyed", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::destroyed", ...args: any[]): void
    connect(sigName: "notify::pixmap", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixmap", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pixmap", ...args: any[]): void
    connect(sigName: "notify::pixmap-depth", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixmap-depth", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pixmap-depth", ...args: any[]): void
    connect(sigName: "notify::pixmap-height", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixmap-height", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pixmap-height", ...args: any[]): void
    connect(sigName: "notify::pixmap-width", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixmap-width", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pixmap-width", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::window-mapped", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-mapped", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window-mapped", ...args: any[]): void
    connect(sigName: "notify::window-override-redirect", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-override-redirect", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window-override-redirect", ...args: any[]): void
    connect(sigName: "notify::window-redirect-automatic", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-redirect-automatic", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window-redirect-automatic", ...args: any[]): void
    connect(sigName: "notify::window-x", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-x", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window-x", ...args: any[]): void
    connect(sigName: "notify::window-y", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window-y", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window-y", ...args: any[]): void
    connect(sigName: "notify::disable-slicing", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::disable-slicing", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::disable-slicing", ...args: any[]): void
    connect(sigName: "notify::filename", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filename", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::filename", ...args: any[]): void
    connect(sigName: "notify::filter-quality", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::filter-quality", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::filter-quality", ...args: any[]): void
    connect(sigName: "notify::keep-aspect-ratio", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::keep-aspect-ratio", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::keep-aspect-ratio", ...args: any[]): void
    connect(sigName: "notify::load-async", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::load-async", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::load-async", ...args: any[]): void
    connect(sigName: "notify::load-data-async", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::load-data-async", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::load-data-async", ...args: any[]): void
    connect(sigName: "notify::pick-with-alpha", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pick-with-alpha", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pick-with-alpha", ...args: any[]): void
    connect(sigName: "notify::pixel-format", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pixel-format", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pixel-format", ...args: any[]): void
    connect(sigName: "notify::repeat-x", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::repeat-x", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::repeat-x", ...args: any[]): void
    connect(sigName: "notify::repeat-y", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::repeat-y", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::repeat-y", ...args: any[]): void
    connect(sigName: "notify::sync-size", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sync-size", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sync-size", ...args: any[]): void
    connect(sigName: "notify::tile-waste", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tile-waste", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tile-waste", ...args: any[]): void
    connect(sigName: "notify::actions", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actions", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::actions", ...args: any[]): void
    connect(sigName: "notify::allocation", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allocation", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::allocation", ...args: any[]): void
    connect(sigName: "notify::anchor-gravity", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-gravity", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::anchor-gravity", ...args: any[]): void
    connect(sigName: "notify::anchor-x", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-x", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::anchor-x", ...args: any[]): void
    connect(sigName: "notify::anchor-y", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-y", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::anchor-y", ...args: any[]): void
    connect(sigName: "notify::background-color", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::background-color", ...args: any[]): void
    connect(sigName: "notify::background-color-set", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::background-color-set", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::background-color-set", ...args: any[]): void
    connect(sigName: "notify::child-transform", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-transform", ...args: any[]): void
    connect(sigName: "notify::child-transform-set", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-transform-set", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-transform-set", ...args: any[]): void
    connect(sigName: "notify::clip", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clip", ...args: any[]): void
    connect(sigName: "notify::clip-rect", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-rect", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clip-rect", ...args: any[]): void
    connect(sigName: "notify::clip-to-allocation", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::clip-to-allocation", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::clip-to-allocation", ...args: any[]): void
    connect(sigName: "notify::constraints", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::constraints", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::constraints", ...args: any[]): void
    connect(sigName: "notify::content", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::content-box", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-box", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-box", ...args: any[]): void
    connect(sigName: "notify::content-gravity", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-gravity", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-gravity", ...args: any[]): void
    connect(sigName: "notify::content-repeat", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content-repeat", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content-repeat", ...args: any[]): void
    connect(sigName: "notify::depth", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::depth", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::depth", ...args: any[]): void
    connect(sigName: "notify::effect", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::effect", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::effect", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::first-child", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::fixed-position-set", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-position-set", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fixed-position-set", ...args: any[]): void
    connect(sigName: "notify::fixed-x", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-x", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fixed-x", ...args: any[]): void
    connect(sigName: "notify::fixed-y", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fixed-y", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fixed-y", ...args: any[]): void
    connect(sigName: "notify::has-clip", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-clip", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-clip", ...args: any[]): void
    connect(sigName: "notify::has-pointer", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-pointer", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-pointer", ...args: any[]): void
    connect(sigName: "notify::height", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::last-child", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::layout-manager", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::magnification-filter", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::magnification-filter", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::magnification-filter", ...args: any[]): void
    connect(sigName: "notify::mapped", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mapped", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mapped", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::min-height", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-height", ...args: any[]): void
    connect(sigName: "notify::min-height-set", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-height-set", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-height-set", ...args: any[]): void
    connect(sigName: "notify::min-width", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-width", ...args: any[]): void
    connect(sigName: "notify::min-width-set", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::min-width-set", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::min-width-set", ...args: any[]): void
    connect(sigName: "notify::minification-filter", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::minification-filter", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::minification-filter", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::natural-height", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::natural-height", ...args: any[]): void
    connect(sigName: "notify::natural-height-set", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-height-set", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::natural-height-set", ...args: any[]): void
    connect(sigName: "notify::natural-width", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::natural-width", ...args: any[]): void
    connect(sigName: "notify::natural-width-set", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::natural-width-set", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::natural-width-set", ...args: any[]): void
    connect(sigName: "notify::offscreen-redirect", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::offscreen-redirect", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::offscreen-redirect", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::pivot-point", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pivot-point", ...args: any[]): void
    connect(sigName: "notify::pivot-point-z", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pivot-point-z", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pivot-point-z", ...args: any[]): void
    connect(sigName: "notify::position", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::position", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::reactive", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reactive", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::reactive", ...args: any[]): void
    connect(sigName: "notify::realized", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::realized", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::realized", ...args: any[]): void
    connect(sigName: "notify::request-mode", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::request-mode", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::request-mode", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-x", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-x", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-angle-x", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-y", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-y", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-angle-y", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-z", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-angle-z", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-angle-z", ...args: any[]): void
    connect(sigName: "notify::rotation-center-x", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-x", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-center-x", ...args: any[]): void
    connect(sigName: "notify::rotation-center-y", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-y", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-center-y", ...args: any[]): void
    connect(sigName: "notify::rotation-center-z", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-z", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-center-z", ...args: any[]): void
    connect(sigName: "notify::rotation-center-z-gravity", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rotation-center-z-gravity", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rotation-center-z-gravity", ...args: any[]): void
    connect(sigName: "notify::scale-center-x", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-center-x", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-center-x", ...args: any[]): void
    connect(sigName: "notify::scale-center-y", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-center-y", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-center-y", ...args: any[]): void
    connect(sigName: "notify::scale-gravity", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-gravity", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-gravity", ...args: any[]): void
    connect(sigName: "notify::scale-x", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-x", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-x", ...args: any[]): void
    connect(sigName: "notify::scale-y", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-y", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-y", ...args: any[]): void
    connect(sigName: "notify::scale-z", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-z", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-z", ...args: any[]): void
    connect(sigName: "notify::show-on-set-parent", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::show-on-set-parent", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::show-on-set-parent", ...args: any[]): void
    connect(sigName: "notify::size", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::size", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::text-direction", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::text-direction", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::text-direction", ...args: any[]): void
    connect(sigName: "notify::transform", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transform", ...args: any[]): void
    connect(sigName: "notify::transform-set", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transform-set", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transform-set", ...args: any[]): void
    connect(sigName: "notify::translation-x", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-x", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::translation-x", ...args: any[]): void
    connect(sigName: "notify::translation-y", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-y", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::translation-y", ...args: any[]): void
    connect(sigName: "notify::translation-z", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::translation-z", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::translation-z", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::x", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::x", ...args: any[]): void
    connect(sigName: "notify::x-align", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-align", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::x-align", ...args: any[]): void
    connect(sigName: "notify::x-expand", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::x-expand", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::x-expand", ...args: any[]): void
    connect(sigName: "notify::y", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::y", ...args: any[]): void
    connect(sigName: "notify::y-align", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-align", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::y-align", ...args: any[]): void
    connect(sigName: "notify::y-expand", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::y-expand", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::y-expand", ...args: any[]): void
    connect(sigName: "notify::z-position", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::z-position", callback: (($obj: TexturePixmap, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::z-position", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #ClutterX11TexturePixmap structure contains only private data
 * @class 
 */
class TexturePixmap extends Clutter.Texture {

    // Own properties of ClutterX11-1.0.ClutterX11.TexturePixmap

    static name: string
    static $gtype: GObject.GType<TexturePixmap>

    // Constructors of ClutterX11-1.0.ClutterX11.TexturePixmap

    constructor(config?: TexturePixmap.ConstructorProperties) 
    /**
     * Creates a new #ClutterX11TexturePixmap which can be used to display the
     * contents of an X11 Pixmap inside a Clutter scene graph
     * @constructor 
     * @returns A new #ClutterX11TexturePixmap
     */
    constructor() 
    /**
     * Creates a new #ClutterX11TexturePixmap which can be used to display the
     * contents of an X11 Pixmap inside a Clutter scene graph
     * @constructor 
     * @returns A new #ClutterX11TexturePixmap
     */
    static new(): TexturePixmap
    /**
     * Creates a new #ClutterX11TexturePixmap for `pixmap`
     * @constructor 
     * @param pixmap the X Pixmap to which this texture should be bound
     * @returns A new #ClutterX11TexturePixmap bound to the given X Pixmap
     */
    static new_with_pixmap(pixmap: xlib.Pixmap): TexturePixmap
    /**
     * Creates a new #ClutterX11TexturePixmap for `window`
     * @constructor 
     * @param window the X window to which this texture should be bound
     * @returns A new #ClutterX11TexturePixmap bound to the given X window.
     */
    static new_with_window(window: xlib.Window): TexturePixmap
    _init(config?: TexturePixmap.ConstructorProperties): void
}

interface TexturePixmapClass {

    // Own fields of ClutterX11-1.0.ClutterX11.TexturePixmapClass

    update_area: (texture: TexturePixmap, x: number, y: number, width: number, height: number) => void
}

/**
 * The #ClutterX11TexturePixmapClass structure contains only private data
 * @record 
 */
abstract class TexturePixmapClass {

    // Own properties of ClutterX11-1.0.ClutterX11.TexturePixmapClass

    static name: string
}

interface TexturePixmapPrivate {
}

class TexturePixmapPrivate {

    // Own properties of ClutterX11-1.0.ClutterX11.TexturePixmapPrivate

    static name: string
}

interface XInputDevice {
}

class XInputDevice {

    // Own properties of ClutterX11-1.0.ClutterX11.XInputDevice

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

export default ClutterX11;
// END