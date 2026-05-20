
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
import type Clutter from '@girs/clutter-3';
import type cairo from 'cairo';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Json from '@girs/json-1.0';
import type Gio from '@girs/gio-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GL from '@girs/gl-1.0';
import type CoglPango from '@girs/coglpango-3';
import type PangoCairo from '@girs/pangocairo-1.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Cogl from '@girs/cogl-3';
import type Atk from '@girs/atk-1.0';

export namespace ClutterX11 {

    /**
     * ClutterX11-3
     */


    /**
     * @gir-type Enum
     */
    export namespace FilterReturn {
        export const $gtype: GObject.GType<FilterReturn>;
    }

    /**
     * Return values for the {@link ClutterX11.FilterFunc} function.
     * @gir-type Enum
     * @since 0.6
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
     * You also must call `clutter_x11_handle_event()` to let Clutter process
     * events and maintain its internal state.
     * 
     * This function can only be called before calling `clutter_init()`.
     * 
     * Even with event handling disabled, Clutter will still select
     * all the events required to maintain its internal state on the stage
     * Window; compositors using Clutter and input regions to pass events
     * through to application windows should not rely on an empty input
     * region, and should instead clear it themselves explicitly using the
     * XFixes extension.
     * 
     * This function should not be normally used by applications.
     * @since 0.8
     */
    function disable_event_retrieval(): void;

    /**
     * Enables the use of the XInput extension if present on connected
     * XServer and support built into Clutter. XInput allows for multiple
     * pointing devices to be used.
     * 
     * This function must be called before `clutter_init()`.
     * 
     * Since XInput might not be supported by the X server, you might
     * want to use `clutter_x11_has_xinput()` to see if support was enabled.
     * @since 0.8
     * @deprecated since 1.14: This function does not do anything; XInput support   is enabled by default in Clutter. Use the CLUTTER_DISABLE_XINPUT   environment variable to disable XInput support and use Xlib core   events instead.
     */
    function enable_xinput(): void;

    /**
     * Retrieves the group for the modifiers set in `event`
     * @param event a {@link Clutter.Event} of type {@link Clutter.EventType.KEY_PRESS} or {@link Clutter.EventType.KEY_RELEASE}
     * @returns the group id
     * @since 1.4
     */
    function event_get_key_group(event: Clutter.Event): number;

    /**
     * Retrieves the touch detail froma {@link Clutter.EventSequence}.
     * @param sequence a {@link Clutter.EventSequence}
     * @returns the touch detail
     * @since 1.12
     */
    function event_sequence_get_touch_detail(sequence: Clutter.EventSequence): number;

    /**
     * Retrieves the pointer to the default display.
     * @returns the default display
     * @since 0.6
     */
    function get_default_display(): xlib.Display;

    /**
     * Gets the number of the default X Screen object.
     * @returns the number of the default screen
     * @since 0.6
     */
    function get_default_screen(): number;

    /**
     * Retrieves a pointer to the list of input devices
     * @returns a   pointer to the internal list of input devices; the returned list is   owned by Clutter and should not be modified or freed
     * @since 0.8
     * @deprecated since 1.2: Use `clutter_device_manager_peek_devices()` instead
     */
    function get_input_devices(): Clutter.InputDevice[];

    /**
     * Gets the stage for a particular X window.
     * @param win an X Window ID
     * @returns A {@link Clutter.Stage}, or% NULL if a stage   does not exist for the window
     * @since 0.8
     */
    function get_stage_from_window(win: xlib.Window): Clutter.Stage;

    /**
     * Retrieves whether the Clutter X11 backend is using ARGB visuals by default
     * @returns `true` if ARGB visuals are queried by default
     * @since 1.2
     */
    function get_use_argb_visual(): boolean;

    /**
     * Retrieves whether the Clutter X11 backend will create stereo
     * stages if possible.
     * @returns `true` if stereo stages are used if possible
     * @since 1.22
     */
    function get_use_stereo_stage(): boolean;

    /**
     * This function processes a single X event; it can be used to hook
     * into external X11 event processing (for example, a GDK filter
     * function).
     * 
     * If `clutter_x11_disable_event_retrieval()` has been called, you must
     * let this function process events to update Clutter's internal state.
     * @param xevent pointer to XEvent structure
     * @returns {@link ClutterX11.FilterReturn}. {@link ClutterX11.FilterReturn.REMOVE}  indicates that Clutter has internally handled the event and the  caller should do no further processing. {@link ClutterX11.FilterReturn.CONTINUE}  indicates that Clutter is either not interested in the event,  or has used the event to update internal state without taking  any exclusive action. {@link ClutterX11.FilterReturn.TRANSLATE} will not  occur.
     * @since 0.8
     */
    function handle_event(xevent: xlib.XEvent): FilterReturn;

    /**
     * Retrieves whether Clutter is running on an X11 server with the
     * XComposite extension
     * @returns `true` if the XComposite extension is available
     */
    function has_composite_extension(): boolean;

    /**
     * Queries the X11 backend to check if event collection has been disabled.
     * @returns TRUE if event retrival has been disabled. FALSE otherwise.
     * @since 0.8
     */
    function has_event_retrieval(): boolean;

    /**
     * Gets whether Clutter has XInput support.
     * @returns `true` if Clutter was compiled with XInput support   and XInput support is available at run time.
     * @since 0.8
     */
    function has_xinput(): boolean;

    /**
     * Sets the display connection Clutter should use; must be called
     * before `clutter_init()`, `clutter_init_with_args()` or other functions
     * pertaining Clutter's initialization process.
     * 
     * If you are parsing the command line arguments by retrieving Clutter's
     * {@link GLib.OptionGroup} with `clutter_get_option_group()` and calling
     * `g_option_context_parse()` yourself, you should also call
     * `clutter_x11_set_display()` before `g_option_context_parse()`.
     * @param xdpy pointer to a X display connection.
     * @since 0.8
     */
    function set_display(xdpy: xlib.Display): void;

    /**
     * Target the {@link Clutter.Stage} to use an existing external X Window
     * @param stage a {@link Clutter.Stage}
     * @param xwindow an existing X Window id
     * @returns `true` if foreign window is valid
     * @since 0.4
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
     * ARGB visuals are required for the {@link Clutter.Stage.use_alpha} property to work.
     * 
     * This function can only be called once, and before `clutter_init()` is
     * called.
     * @param use_argb `true` if ARGB visuals should be requested by default
     * @since 1.2
     */
    function set_use_argb_visual(use_argb: boolean): void;

    /**
     * Sets whether the backend object for Clutter stages, will,
     * if possible, be created with the ability to support stereo drawing
     * (drawing separate images for the left and right eyes).
     * 
     * This function must be called before `clutter_init()` is called.
     * During paint callbacks, `cogl_framebuffer_is_stereo()` can be called
     * on the framebuffer retrieved by `cogl_get_draw_framebuffer()` to
     * determine if stereo support was successfully enabled, and
     * `cogl_framebuffer_set_stereo_mode()` to determine which buffers
     * will be drawn to.
     * 
     * Note that this function *does not* cause the stage to be drawn
     * multiple times with different perspective transformations and thus
     * appear in 3D, it simply enables individual ClutterActors to paint
     * different images for the left and and right eye.
     * @param use_stereo `true` if the stereo stages should be used if possible.
     * @since 1.22
     */
    function set_use_stereo_stage(use_stereo: boolean): void;

    /**
     * Traps every X error until `clutter_x11_untrap_x_errors()` is called.
     * @since 0.6
     */
    function trap_x_errors(): void;

    /**
     * Removes the X error trap and returns the current status.
     * @returns the trapped error code, or 0 for success
     * @since 0.4
     */
    function untrap_x_errors(): number;

    /**
     * @gir-type Callback
     */
    interface FilterFunc {
        (xev: xlib.XEvent, cev: Clutter.Event): FilterReturn;
    }

    namespace TexturePixmap {
        // Signal signatures
        interface SignalSignatures extends Clutter.Texture.SignalSignatures {
            /**
             * ::queue-damage-redraw is emitted to notify that some sub-region
             * of the texture has been changed (either by an automatic damage
             * update or by an explicit call to
             * clutter_x11_texture_pixmap_update_area). This usually means a
             * redraw needs to be queued for the actor.
             * 
             * The default handler will queue a clipped redraw in response to
             * the damage, using the assumption that the pixmap is being painted
             * to a rectangle covering the transformed allocation of the actor.
             * If you sub-class and change the paint method so this isn't true
             * then you must also provide your own damage signal handler to
             * queue a redraw that blocks this default behaviour.
             * @signal
             * @since 1.2
             * @run-first
             */
            "queue-damage-redraw": (arg0: number, arg1: number, arg2: number, arg3: number) => void;
            /**
             * The ::update-area signal is emitted to ask the texture to update its
             * content from its source pixmap.
             * @signal
             * @since 0.8
             * @run-first
             */
            "update-area": (arg0: number, arg1: number, arg2: number, arg3: number) => void;
            "notify::automatic-updates": (pspec: GObject.ParamSpec) => void;
            "notify::destroyed": (pspec: GObject.ParamSpec) => void;
            "notify::pixmap": (pspec: GObject.ParamSpec) => void;
            "notify::pixmap-depth": (pspec: GObject.ParamSpec) => void;
            "notify::pixmap-height": (pspec: GObject.ParamSpec) => void;
            "notify::pixmap-width": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
            "notify::window-mapped": (pspec: GObject.ParamSpec) => void;
            "notify::window-override-redirect": (pspec: GObject.ParamSpec) => void;
            "notify::window-redirect-automatic": (pspec: GObject.ParamSpec) => void;
            "notify::window-x": (pspec: GObject.ParamSpec) => void;
            "notify::window-y": (pspec: GObject.ParamSpec) => void;
            "notify::disable-slicing": (pspec: GObject.ParamSpec) => void;
            "notify::filename": (pspec: GObject.ParamSpec) => void;
            "notify::filter-quality": (pspec: GObject.ParamSpec) => void;
            "notify::keep-aspect-ratio": (pspec: GObject.ParamSpec) => void;
            "notify::load-async": (pspec: GObject.ParamSpec) => void;
            "notify::load-data-async": (pspec: GObject.ParamSpec) => void;
            "notify::pick-with-alpha": (pspec: GObject.ParamSpec) => void;
            "notify::repeat-x": (pspec: GObject.ParamSpec) => void;
            "notify::repeat-y": (pspec: GObject.ParamSpec) => void;
            "notify::sync-size": (pspec: GObject.ParamSpec) => void;
            "notify::tile-waste": (pspec: GObject.ParamSpec) => void;
            "notify::actions": (pspec: GObject.ParamSpec) => void;
            "notify::allocation": (pspec: GObject.ParamSpec) => void;
            "notify::anchor-gravity": (pspec: GObject.ParamSpec) => void;
            "notify::anchor-x": (pspec: GObject.ParamSpec) => void;
            "notify::anchor-y": (pspec: GObject.ParamSpec) => void;
            "notify::background-color": (pspec: GObject.ParamSpec) => void;
            "notify::background-color-set": (pspec: GObject.ParamSpec) => void;
            "notify::child-transform-set": (pspec: GObject.ParamSpec) => void;
            "notify::clip": (pspec: GObject.ParamSpec) => void;
            "notify::clip-rect": (pspec: GObject.ParamSpec) => void;
            "notify::clip-to-allocation": (pspec: GObject.ParamSpec) => void;
            "notify::constraints": (pspec: GObject.ParamSpec) => void;
            "notify::content": (pspec: GObject.ParamSpec) => void;
            "notify::content-box": (pspec: GObject.ParamSpec) => void;
            "notify::content-gravity": (pspec: GObject.ParamSpec) => void;
            "notify::content-repeat": (pspec: GObject.ParamSpec) => void;
            "notify::depth": (pspec: GObject.ParamSpec) => void;
            "notify::effect": (pspec: GObject.ParamSpec) => void;
            "notify::first-child": (pspec: GObject.ParamSpec) => void;
            "notify::fixed-position-set": (pspec: GObject.ParamSpec) => void;
            "notify::fixed-x": (pspec: GObject.ParamSpec) => void;
            "notify::fixed-y": (pspec: GObject.ParamSpec) => void;
            "notify::has-clip": (pspec: GObject.ParamSpec) => void;
            "notify::has-pointer": (pspec: GObject.ParamSpec) => void;
            "notify::height": (pspec: GObject.ParamSpec) => void;
            "notify::last-child": (pspec: GObject.ParamSpec) => void;
            "notify::layout-manager": (pspec: GObject.ParamSpec) => void;
            "notify::magnification-filter": (pspec: GObject.ParamSpec) => void;
            "notify::mapped": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::min-height": (pspec: GObject.ParamSpec) => void;
            "notify::min-height-set": (pspec: GObject.ParamSpec) => void;
            "notify::min-width": (pspec: GObject.ParamSpec) => void;
            "notify::min-width-set": (pspec: GObject.ParamSpec) => void;
            "notify::minification-filter": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::natural-height": (pspec: GObject.ParamSpec) => void;
            "notify::natural-height-set": (pspec: GObject.ParamSpec) => void;
            "notify::natural-width": (pspec: GObject.ParamSpec) => void;
            "notify::natural-width-set": (pspec: GObject.ParamSpec) => void;
            "notify::offscreen-redirect": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::pivot-point": (pspec: GObject.ParamSpec) => void;
            "notify::pivot-point-z": (pspec: GObject.ParamSpec) => void;
            "notify::position": (pspec: GObject.ParamSpec) => void;
            "notify::reactive": (pspec: GObject.ParamSpec) => void;
            "notify::realized": (pspec: GObject.ParamSpec) => void;
            "notify::request-mode": (pspec: GObject.ParamSpec) => void;
            "notify::rotation-angle-x": (pspec: GObject.ParamSpec) => void;
            "notify::rotation-angle-y": (pspec: GObject.ParamSpec) => void;
            "notify::rotation-angle-z": (pspec: GObject.ParamSpec) => void;
            "notify::rotation-center-x": (pspec: GObject.ParamSpec) => void;
            "notify::rotation-center-y": (pspec: GObject.ParamSpec) => void;
            "notify::rotation-center-z": (pspec: GObject.ParamSpec) => void;
            "notify::rotation-center-z-gravity": (pspec: GObject.ParamSpec) => void;
            "notify::rotation-center-zgravity": (pspec: GObject.ParamSpec) => void;
            "notify::scale-center-x": (pspec: GObject.ParamSpec) => void;
            "notify::scale-center-y": (pspec: GObject.ParamSpec) => void;
            "notify::scale-gravity": (pspec: GObject.ParamSpec) => void;
            "notify::scale-x": (pspec: GObject.ParamSpec) => void;
            "notify::scale-y": (pspec: GObject.ParamSpec) => void;
            "notify::scale-z": (pspec: GObject.ParamSpec) => void;
            "notify::show-on-set-parent": (pspec: GObject.ParamSpec) => void;
            "notify::size": (pspec: GObject.ParamSpec) => void;
            "notify::text-direction": (pspec: GObject.ParamSpec) => void;
            "notify::transform-set": (pspec: GObject.ParamSpec) => void;
            "notify::translation-x": (pspec: GObject.ParamSpec) => void;
            "notify::translation-y": (pspec: GObject.ParamSpec) => void;
            "notify::translation-z": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width": (pspec: GObject.ParamSpec) => void;
            "notify::x": (pspec: GObject.ParamSpec) => void;
            "notify::x-align": (pspec: GObject.ParamSpec) => void;
            "notify::x-expand": (pspec: GObject.ParamSpec) => void;
            "notify::y": (pspec: GObject.ParamSpec) => void;
            "notify::y-align": (pspec: GObject.ParamSpec) => void;
            "notify::y-expand": (pspec: GObject.ParamSpec) => void;
            "notify::z-position": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Clutter.Texture.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Clutter.Animatable.ConstructorProps, Clutter.Container.ConstructorProps, Clutter.Scriptable.ConstructorProps {
            automatic_updates: boolean;
            automaticUpdates: boolean;
            destroyed: boolean;
            pixmap: bigint | number;
            pixmap_depth: number;
            pixmapDepth: number;
            pixmap_height: number;
            pixmapHeight: number;
            pixmap_width: number;
            pixmapWidth: number;
            window: bigint | number;
            window_mapped: boolean;
            windowMapped: boolean;
            window_override_redirect: boolean;
            windowOverrideRedirect: boolean;
            window_redirect_automatic: boolean;
            windowRedirectAutomatic: boolean;
            window_x: number;
            windowX: number;
            window_y: number;
            windowY: number;
        }
    }

    /**
     * The {@link ClutterX11.TexturePixmap} structure contains only private data
     * @gir-type Class
     * @since 0.8
     */
    class TexturePixmap extends Clutter.Texture implements Atk.ImplementorIface, Clutter.Animatable, Clutter.Container, Clutter.Scriptable {
        static $gtype: GObject.GType<TexturePixmap>;

        // Properties
        get automatic_updates(): boolean;
        set automatic_updates(val: boolean);

        get automaticUpdates(): boolean;
        set automaticUpdates(val: boolean);

        /**
         * @read-only
         */
        get destroyed(): boolean;

        get pixmap(): number;
        set pixmap(val: bigint | number);

        /**
         * @read-only
         */
        get pixmap_depth(): number;

        /**
         * @read-only
         */
        get pixmapDepth(): number;

        /**
         * @read-only
         */
        get pixmap_height(): number;

        /**
         * @read-only
         */
        get pixmapHeight(): number;

        /**
         * @read-only
         */
        get pixmap_width(): number;

        /**
         * @read-only
         */
        get pixmapWidth(): number;

        get window(): number;
        set window(val: bigint | number);

        /**
         * @read-only
         */
        get window_mapped(): boolean;

        /**
         * @read-only
         */
        get windowMapped(): boolean;

        /**
         * @read-only
         */
        get window_override_redirect(): boolean;

        /**
         * @read-only
         */
        get windowOverrideRedirect(): boolean;

        get window_redirect_automatic(): boolean;
        set window_redirect_automatic(val: boolean);

        get windowRedirectAutomatic(): boolean;
        set windowRedirectAutomatic(val: boolean);

        /**
         * @read-only
         */
        get window_x(): number;

        /**
         * @read-only
         */
        get windowX(): number;

        /**
         * @read-only
         */
        get window_y(): number;

        /**
         * @read-only
         */
        get windowY(): number;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: TexturePixmap.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<TexturePixmap.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): TexturePixmap;

        static new_with_pixmap(pixmap: xlib.Pixmap): TexturePixmap;

        static new_with_window(window: xlib.Window): TexturePixmap;

        // Signals
        /** @signal */
        connect<K extends keyof TexturePixmap.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TexturePixmap.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof TexturePixmap.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TexturePixmap.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof TexturePixmap.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<TexturePixmap.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * Performs the actual binding of texture to the current content of
         * the pixmap. Can be called to update the texture if the pixmap
         * content has changed.
         * @param x the X coordinate of the area to update
         * @param y the Y coordinate of the area to update
         * @param width the width of the area to update
         * @param height the height of the area to update
         * @virtual
         */
        vfunc_update_area(x: number, y: number, width: number, height: number): void;

        // Methods
        /**
         * Enables or disables the automatic updates ot `texture` in case the backing
         * pixmap or window is damaged
         * @param setting `true` to enable automatic updates
         */
        set_automatic(setting: boolean): void;

        /**
         * Sets the X Pixmap to which the texture should be bound.
         * @param pixmap the X Pixmap to which the texture should be bound
         */
        set_pixmap(pixmap: xlib.Pixmap): void;

        /**
         * Sets up a suitable pixmap for the window, using the composite and damage
         * extensions if possible, and then calls
         * `clutter_x11_texture_pixmap_set_pixmap()`.
         * 
         * If you want to display a window in a {@link Clutter.Texture}, you probably want
         * this function, or its older sister, `clutter_glx_texture_pixmap_set_window()`.
         * 
         * This function has no effect unless the XComposite extension is available.
         * @param window the X window to which the texture should be bound
         * @param automatic `true` for automatic window updates, `false` for manual.
         */
        set_window(window: xlib.Window, automatic: boolean): void;

        /**
         * Resets the texture's pixmap from its window, perhaps in response to the
         * pixmap's invalidation as the window changed size.
         */
        sync_window(): void;

        /**
         * Performs the actual binding of texture to the current content of
         * the pixmap. Can be called to update the texture if the pixmap
         * content has changed.
         * @param x the X coordinate of the area to update
         * @param y the Y coordinate of the area to update
         * @param width the width of the area to update
         * @param height the height of the area to update
         */
        update_area(x: number, y: number, width: number, height: number): void;
    }


    /**
     * @gir-type Alias
     */
    type TexturePixmapClass = typeof TexturePixmap;

    /**
     * @gir-type Struct
     */
    abstract class TexturePixmapPrivate {
        static $gtype: GObject.GType<TexturePixmapPrivate>;
    }


    /**
     * @gir-type Struct
     */
    abstract class XInputDevice {
        static $gtype: GObject.GType<XInputDevice>;
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
