/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './gdkwayland-4.0-ambient.d.ts';
import './gdkwayland-4.0-import.d.ts';
/**
 * GdkWayland-4.0
 */

import type Gdk from '@girs/gdk-4.0';
import type cairo from '@girs/cairo-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type PangoCairo from '@girs/pangocairo-1.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';

export namespace GdkWayland {
    interface WaylandToplevelExported {
        (toplevel: WaylandToplevel, handle: string): void;
    }
    module WaylandDevice {
        // Constructor properties interface
    }

    /**
     * The Wayland implementation of `GdkDevice`.
     *
     * Beyond the regular [class`Gdk`.Device] API, the Wayland implementation
     * provides access to Wayland objects such as the `wl_seat` with
     * [method`GdkWayland`.WaylandDevice.get_wl_seat], the `wl_keyboard` with
     * [method`GdkWayland`.WaylandDevice.get_wl_keyboard] and the `wl_pointer` with
     * [method`GdkWayland`.WaylandDevice.get_wl_pointer].
     */
    class WaylandDevice extends Gdk.Device {
        // Owm methods of GdkWayland-4.0.WaylandDevice

        /**
         * Returns the `/dev/input/event*` path of this device.
         *
         * For `GdkDevice`s that possibly coalesce multiple hardware
         * devices (eg. mouse, keyboard, touch,...), this function
         * will return %NULL.
         *
         * This is most notably implemented for devices of type
         * %GDK_SOURCE_PEN, %GDK_SOURCE_TABLET_PAD.
         * @returns the `/dev/input/event*`   path of this device
         */
        get_node_path(): string | null;
        /**
         * Returns the `xkb_keymap` of a `GdkDevice`.
         * @returns a `struct xkb_keymap`
         */
        get_xkb_keymap(): any | null;
    }

    module WaylandDisplay {
        // Constructor properties interface
    }

    /**
     * The Wayland implementation of `GdkDisplay`.
     *
     * Beyond the regular [class`Gdk`.Display] API, the Wayland implementation
     * provides access to Wayland objects such as the `wl_display` with
     * [method`GdkWayland`.WaylandDisplay.get_wl_display], the `wl_compositor` with
     * [method`GdkWayland`.WaylandDisplay.get_wl_compositor].
     *
     * You can find out what Wayland globals are supported by a display
     * with [method`GdkWayland`.WaylandDisplay.query_registry].
     */
    class WaylandDisplay extends Gdk.Display {
        // Owm methods of GdkWayland-4.0.WaylandDisplay

        /**
         * Retrieves the EGL display connection object for the given GDK display.
         * @returns the EGL display
         */
        get_egl_display(): any | null;
        /**
         * Gets the startup notification ID for a Wayland display, or %NULL
         * if no ID has been defined.
         * @returns the startup notification ID for @display
         */
        get_startup_notification_id(): string | null;
        /**
         * Returns %TRUE if the interface was found in the display
         * `wl_registry.global` handler.
         * @param global global interface to query in the registry
         * @returns %TRUE if the global is offered by the compositor
         */
        query_registry(global: string): boolean;
        /**
         * Sets the cursor theme for the given `display`.
         * @param name the new cursor theme
         * @param size the size to use for cursors
         */
        set_cursor_theme(name: string, size: number): void;
        /**
         * Sets the startup notification ID for a display.
         *
         * This is usually taken from the value of the `DESKTOP_STARTUP_ID`
         * environment variable, but in some cases (such as the application not
         * being launched using exec()) it can come from other sources.
         *
         * The startup ID is also what is used to signal that the startup is
         * complete (for example, when opening a window or when calling
         * [method`Gdk`.Display.notify_startup_complete]).
         * @param startup_id the startup notification ID (must be valid utf8)
         */
        set_startup_notification_id(startup_id: string): void;
    }

    module WaylandGLContext {
        // Constructor properties interface
    }

    /**
     * The Wayland implementation of `GdkGLContext`.
     */
    class WaylandGLContext extends Gdk.GLContext {}

    module WaylandMonitor {
        // Constructor properties interface
    }

    /**
     * The Wayland implementation of `GdkMonitor`.
     *
     * Beyond the [class`Gdk`.Monitor] API, the Wayland implementation
     * offers access to the Wayland `wl_output` object with
     * [method`GdkWayland`.WaylandMonitor.get_wl_output].
     */
    class WaylandMonitor extends Gdk.Monitor {}

    module WaylandPopup {
        // Constructor properties interface
    }

    /**
     * The Wayland implementation of `GdkPopup`.
     */
    class WaylandPopup extends WaylandSurface {}

    module WaylandSeat {
        // Constructor properties interface
    }

    /**
     * The Wayland implementation of `GdkSeat`.
     *
     * Beyond the regular [class`Gdk`.Seat] API, the Wayland implementation
     * provides access to the Wayland `wl_seat` object with
     * [method`GdkWayland`.WaylandSeat.get_wl_seat].
     */
    class WaylandSeat extends Gdk.Seat {}

    module WaylandSurface {
        // Constructor properties interface
    }

    /**
     * The Wayland implementation of `GdkSurface`.
     *
     * Beyond the [class`Gdk`.Surface] API, the Wayland implementation offers
     * access to the Wayland `wl_surface` object with
     * [method`GdkWayland`.WaylandSurface.get_wl_surface].
     */
    class WaylandSurface extends Gdk.Surface {}

    module WaylandToplevel {
        // Constructor properties interface
    }

    /**
     * The Wayland implementation of `GdkToplevel`.
     *
     * Beyond the [iface`Gdk`.Toplevel] API, the Wayland implementation
     * has API to set up cross-process parent-child relationships between
     * surfaces with [method`GdkWayland`.WaylandToplevel.export_handle] and
     * [method`GdkWayland`.WaylandToplevel.set_transient_for_exported].
     */
    class WaylandToplevel extends WaylandSurface {
        // Owm methods of GdkWayland-4.0.WaylandToplevel

        /**
         * Destroy a handle that was obtained with gdk_wayland_toplevel_export_handle().
         *
         * Note that this API depends on an unstable Wayland protocol,
         * and thus may require changes in the future.
         * @param handle the handle to drop
         */
        drop_exported_handle(handle: string): void;
        /**
         * Asynchronously obtains a handle for a surface that can be passed
         * to other processes.
         *
         * When the handle has been obtained, `callback` will be called.
         *
         * It is an error to call this function on a surface that is already
         * exported.
         *
         * When the handle is no longer needed, [method`GdkWayland`.WaylandToplevel.unexport_handle]
         * should be called to clean up resources.
         *
         * The main purpose for obtaining a handle is to mark a surface
         * from another surface as transient for this one, see
         * [method`GdkWayland`.WaylandToplevel.set_transient_for_exported].
         *
         * Before 4.12, this API could not safely be used multiple times,
         * since there was no reference counting for handles. Starting with
         * 4.12, every call to this function obtains a new handle, and every
         * call to [method`GdkWayland`.WaylandToplevel.drop_exported_handle] drops
         * just the handle that it is given.
         *
         * Note that this API depends on an unstable Wayland protocol,
         * and thus may require changes in the future.
         * @param callback callback to call with the handle
         * @returns %TRUE if the handle has been requested, %FALSE if   an error occurred.
         */
        export_handle(callback: WaylandToplevelExported): boolean;
        /**
         * Sets the application id on a `GdkToplevel`.
         * @param application_id the application id for the @toplevel
         */
        set_application_id(application_id: string): void;
        /**
         * Marks `toplevel` as transient for the surface to which the given
         * `parent_handle_str` refers.
         *
         * Typically, the handle will originate from a
         * [method`GdkWayland`.WaylandToplevel.export_handle] call in another process.
         *
         * Note that this API depends on an unstable Wayland protocol,
         * and thus may require changes in the future.
         * @param parent_handle_str an exported handle for a surface
         * @returns %TRUE if the surface has been marked as transient,   %FALSE if an error occurred.
         */
        set_transient_for_exported(parent_handle_str: string): boolean;
        /**
         * Destroys the handle that was obtained with
         * gdk_wayland_toplevel_export_handle().
         *
         * It is an error to call this function on a surface that
         * does not have a handle.
         *
         * Since 4.12, this function does nothing. Use
         * [method`GdkWayland`.WaylandToplevel.drop_exported_handle] instead to drop a
         * handle that was obtained with [method`GdkWayland`.WaylandToplevel.export_handle].
         *
         * Note that this API depends on an unstable Wayland protocol,
         * and thus may require changes in the future.
         */
        unexport_handle(): void;
    }

    class WaylandDeviceClass {}

    class WaylandDisplayClass {}

    class WaylandGLContextClass {}

    class WaylandMonitorClass {}

    class WaylandSeatClass {}

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

export default GdkWayland;
// END
