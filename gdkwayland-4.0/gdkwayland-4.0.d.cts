
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
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type GModule from '@girs/gmodule-2.0';

/**
 * Callback that gets called when the handle for a surface has been
 * obtained from the Wayland compositor.
 * 
 * This callback is used in [method`GdkWayland`.WaylandToplevel.export_handle].
 * 
 * The `handle` can be passed to other processes, for the purpose of
 * marking surfaces as transient for out-of-process surfaces.
 * @callback 
 * @param toplevel the `GdkToplevel` that is exported
 * @param handle the handle
 */
export interface WaylandToplevelExported {
    (toplevel: WaylandToplevel, handle: string | null): void
}
export module WaylandDevice {

    // Constructor properties interface

    export interface ConstructorProperties extends Gdk.Device.ConstructorProperties {
    }

}

export interface WaylandDevice {

    // Owm methods of GdkWayland-4.0.GdkWayland.WaylandDevice

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
    get_node_path(): string | null
    /**
     * Returns the `xkb_keymap` of a `GdkDevice`.
     * @returns a `struct xkb_keymap`
     */
    get_xkb_keymap(): any | null

    // Class property signals of GdkWayland-4.0.GdkWayland.WaylandDevice

    connect(sigName: "notify::caps-lock-state", callback: (($obj: WaylandDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::caps-lock-state", callback: (($obj: WaylandDevice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::caps-lock-state", ...args: any[]): void
    connect(sigName: "notify::direction", callback: (($obj: WaylandDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::direction", callback: (($obj: WaylandDevice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::direction", ...args: any[]): void
    connect(sigName: "notify::display", callback: (($obj: WaylandDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display", callback: (($obj: WaylandDevice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::display", ...args: any[]): void
    connect(sigName: "notify::has-bidi-layouts", callback: (($obj: WaylandDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-bidi-layouts", callback: (($obj: WaylandDevice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-bidi-layouts", ...args: any[]): void
    connect(sigName: "notify::has-cursor", callback: (($obj: WaylandDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-cursor", callback: (($obj: WaylandDevice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-cursor", ...args: any[]): void
    connect(sigName: "notify::modifier-state", callback: (($obj: WaylandDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modifier-state", callback: (($obj: WaylandDevice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::modifier-state", ...args: any[]): void
    connect(sigName: "notify::n-axes", callback: (($obj: WaylandDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::n-axes", callback: (($obj: WaylandDevice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::n-axes", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: WaylandDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: WaylandDevice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::num-lock-state", callback: (($obj: WaylandDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::num-lock-state", callback: (($obj: WaylandDevice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::num-lock-state", ...args: any[]): void
    connect(sigName: "notify::num-touches", callback: (($obj: WaylandDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::num-touches", callback: (($obj: WaylandDevice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::num-touches", ...args: any[]): void
    connect(sigName: "notify::product-id", callback: (($obj: WaylandDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::product-id", callback: (($obj: WaylandDevice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::product-id", ...args: any[]): void
    connect(sigName: "notify::scroll-lock-state", callback: (($obj: WaylandDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scroll-lock-state", callback: (($obj: WaylandDevice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scroll-lock-state", ...args: any[]): void
    connect(sigName: "notify::seat", callback: (($obj: WaylandDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::seat", callback: (($obj: WaylandDevice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::seat", ...args: any[]): void
    connect(sigName: "notify::source", callback: (($obj: WaylandDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source", callback: (($obj: WaylandDevice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::source", ...args: any[]): void
    connect(sigName: "notify::tool", callback: (($obj: WaylandDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tool", callback: (($obj: WaylandDevice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tool", ...args: any[]): void
    connect(sigName: "notify::vendor-id", callback: (($obj: WaylandDevice, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vendor-id", callback: (($obj: WaylandDevice, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vendor-id", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The Wayland implementation of `GdkDevice`.
 * 
 * Beyond the regular [class`Gdk`.Device] API, the Wayland implementation
 * provides access to Wayland objects such as the `wl_seat` with
 * [method`GdkWayland`.WaylandDevice.get_wl_seat], the `wl_keyboard` with
 * [method`GdkWayland`.WaylandDevice.get_wl_keyboard] and the `wl_pointer` with
 * [method`GdkWayland`.WaylandDevice.get_wl_pointer].
 * @class 
 */
export class WaylandDevice extends Gdk.Device {

    // Own properties of GdkWayland-4.0.GdkWayland.WaylandDevice

    static name: string
    static $gtype: GObject.GType<WaylandDevice>

    // Constructors of GdkWayland-4.0.GdkWayland.WaylandDevice

    constructor(config?: WaylandDevice.ConstructorProperties) 
    _init(config?: WaylandDevice.ConstructorProperties): void
}

export module WaylandDisplay {

    // Constructor properties interface

    export interface ConstructorProperties extends Gdk.Display.ConstructorProperties {
    }

}

export interface WaylandDisplay {

    // Owm methods of GdkWayland-4.0.GdkWayland.WaylandDisplay

    /**
     * Retrieves the EGL display connection object for the given GDK display.
     * @returns the EGL display
     */
    get_egl_display(): any | null
    /**
     * Gets the startup notification ID for a Wayland display, or %NULL
     * if no ID has been defined.
     * @returns the startup notification ID for @display
     */
    get_startup_notification_id(): string | null
    /**
     * Returns %TRUE if the interface was found in the display
     * `wl_registry.global` handler.
     * @param global global interface to query in the registry
     * @returns %TRUE if the global is offered by the compositor
     */
    query_registry(global: string | null): boolean
    /**
     * Sets the cursor theme for the given `display`.
     * @param name the new cursor theme
     * @param size the size to use for cursors
     */
    set_cursor_theme(name: string | null, size: number): void
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
    set_startup_notification_id(startup_id: string | null): void

    // Class property signals of GdkWayland-4.0.GdkWayland.WaylandDisplay

    connect(sigName: "notify::composited", callback: (($obj: WaylandDisplay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composited", callback: (($obj: WaylandDisplay, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composited", ...args: any[]): void
    connect(sigName: "notify::input-shapes", callback: (($obj: WaylandDisplay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-shapes", callback: (($obj: WaylandDisplay, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::input-shapes", ...args: any[]): void
    connect(sigName: "notify::rgba", callback: (($obj: WaylandDisplay, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rgba", callback: (($obj: WaylandDisplay, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rgba", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
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
 * @class 
 */
export class WaylandDisplay extends Gdk.Display {

    // Own properties of GdkWayland-4.0.GdkWayland.WaylandDisplay

    static name: string
    static $gtype: GObject.GType<WaylandDisplay>

    // Constructors of GdkWayland-4.0.GdkWayland.WaylandDisplay

    constructor(config?: WaylandDisplay.ConstructorProperties) 
    _init(config?: WaylandDisplay.ConstructorProperties): void
}

export module WaylandGLContext {

    // Constructor properties interface

    export interface ConstructorProperties extends Gdk.GLContext.ConstructorProperties {
    }

}

export interface WaylandGLContext {

    // Class property signals of GdkWayland-4.0.GdkWayland.WaylandGLContext

    connect(sigName: "notify::allowed-apis", callback: (($obj: WaylandGLContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allowed-apis", callback: (($obj: WaylandGLContext, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::allowed-apis", ...args: any[]): void
    connect(sigName: "notify::api", callback: (($obj: WaylandGLContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::api", callback: (($obj: WaylandGLContext, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::api", ...args: any[]): void
    connect(sigName: "notify::shared-context", callback: (($obj: WaylandGLContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shared-context", callback: (($obj: WaylandGLContext, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::shared-context", ...args: any[]): void
    connect(sigName: "notify::display", callback: (($obj: WaylandGLContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display", callback: (($obj: WaylandGLContext, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::display", ...args: any[]): void
    connect(sigName: "notify::surface", callback: (($obj: WaylandGLContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::surface", callback: (($obj: WaylandGLContext, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::surface", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The Wayland implementation of `GdkGLContext`.
 * @class 
 */
export class WaylandGLContext extends Gdk.GLContext {

    // Own properties of GdkWayland-4.0.GdkWayland.WaylandGLContext

    static name: string
    static $gtype: GObject.GType<WaylandGLContext>

    // Constructors of GdkWayland-4.0.GdkWayland.WaylandGLContext

    constructor(config?: WaylandGLContext.ConstructorProperties) 
    _init(config?: WaylandGLContext.ConstructorProperties): void
}

export module WaylandMonitor {

    // Constructor properties interface

    export interface ConstructorProperties extends Gdk.Monitor.ConstructorProperties {
    }

}

export interface WaylandMonitor {

    // Class property signals of GdkWayland-4.0.GdkWayland.WaylandMonitor

    connect(sigName: "notify::connector", callback: (($obj: WaylandMonitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connector", callback: (($obj: WaylandMonitor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connector", ...args: any[]): void
    connect(sigName: "notify::description", callback: (($obj: WaylandMonitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::description", callback: (($obj: WaylandMonitor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::display", callback: (($obj: WaylandMonitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display", callback: (($obj: WaylandMonitor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::display", ...args: any[]): void
    connect(sigName: "notify::geometry", callback: (($obj: WaylandMonitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::geometry", callback: (($obj: WaylandMonitor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::geometry", ...args: any[]): void
    connect(sigName: "notify::height-mm", callback: (($obj: WaylandMonitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-mm", callback: (($obj: WaylandMonitor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-mm", ...args: any[]): void
    connect(sigName: "notify::manufacturer", callback: (($obj: WaylandMonitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::manufacturer", callback: (($obj: WaylandMonitor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::manufacturer", ...args: any[]): void
    connect(sigName: "notify::model", callback: (($obj: WaylandMonitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model", callback: (($obj: WaylandMonitor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::model", ...args: any[]): void
    connect(sigName: "notify::refresh-rate", callback: (($obj: WaylandMonitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::refresh-rate", callback: (($obj: WaylandMonitor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::refresh-rate", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: WaylandMonitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: WaylandMonitor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::subpixel-layout", callback: (($obj: WaylandMonitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subpixel-layout", callback: (($obj: WaylandMonitor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::subpixel-layout", ...args: any[]): void
    connect(sigName: "notify::valid", callback: (($obj: WaylandMonitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valid", callback: (($obj: WaylandMonitor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valid", ...args: any[]): void
    connect(sigName: "notify::width-mm", callback: (($obj: WaylandMonitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-mm", callback: (($obj: WaylandMonitor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-mm", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The Wayland implementation of `GdkMonitor`.
 * 
 * Beyond the [class`Gdk`.Monitor] API, the Wayland implementation
 * offers access to the Wayland `wl_output` object with
 * [method`GdkWayland`.WaylandMonitor.get_wl_output].
 * @class 
 */
export class WaylandMonitor extends Gdk.Monitor {

    // Own properties of GdkWayland-4.0.GdkWayland.WaylandMonitor

    static name: string
    static $gtype: GObject.GType<WaylandMonitor>

    // Constructors of GdkWayland-4.0.GdkWayland.WaylandMonitor

    constructor(config?: WaylandMonitor.ConstructorProperties) 
    _init(config?: WaylandMonitor.ConstructorProperties): void
}

export module WaylandPopup {

    // Constructor properties interface

    export interface ConstructorProperties extends Gdk.Popup.ConstructorProperties, WaylandSurface.ConstructorProperties {
    }

}

export interface WaylandPopup extends Gdk.Popup {

    // Class property signals of GdkWayland-4.0.GdkWayland.WaylandPopup

    connect(sigName: "notify::cursor", callback: (($obj: WaylandPopup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: WaylandPopup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cursor", ...args: any[]): void
    connect(sigName: "notify::display", callback: (($obj: WaylandPopup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display", callback: (($obj: WaylandPopup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::display", ...args: any[]): void
    connect(sigName: "notify::frame-clock", callback: (($obj: WaylandPopup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::frame-clock", callback: (($obj: WaylandPopup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::frame-clock", ...args: any[]): void
    connect(sigName: "notify::height", callback: (($obj: WaylandPopup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: WaylandPopup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::mapped", callback: (($obj: WaylandPopup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mapped", callback: (($obj: WaylandPopup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mapped", ...args: any[]): void
    connect(sigName: "notify::scale", callback: (($obj: WaylandPopup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale", callback: (($obj: WaylandPopup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: WaylandPopup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: WaylandPopup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::width", callback: (($obj: WaylandPopup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: WaylandPopup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::autohide", callback: (($obj: WaylandPopup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::autohide", callback: (($obj: WaylandPopup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::autohide", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: WaylandPopup, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: WaylandPopup, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The Wayland implementation of `GdkPopup`.
 * @class 
 */
export class WaylandPopup extends WaylandSurface {

    // Own properties of GdkWayland-4.0.GdkWayland.WaylandPopup

    static name: string
    static $gtype: GObject.GType<WaylandPopup>

    // Constructors of GdkWayland-4.0.GdkWayland.WaylandPopup

    constructor(config?: WaylandPopup.ConstructorProperties) 
    _init(config?: WaylandPopup.ConstructorProperties): void
}

export module WaylandSeat {

    // Constructor properties interface

    export interface ConstructorProperties extends Gdk.Seat.ConstructorProperties {
    }

}

export interface WaylandSeat {

    // Class property signals of GdkWayland-4.0.GdkWayland.WaylandSeat

    connect(sigName: "notify::display", callback: (($obj: WaylandSeat, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display", callback: (($obj: WaylandSeat, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::display", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The Wayland implementation of `GdkSeat`.
 * 
 * Beyond the regular [class`Gdk`.Seat] API, the Wayland implementation
 * provides access to the Wayland `wl_seat` object with
 * [method`GdkWayland`.WaylandSeat.get_wl_seat].
 * @class 
 */
export class WaylandSeat extends Gdk.Seat {

    // Own properties of GdkWayland-4.0.GdkWayland.WaylandSeat

    static name: string
    static $gtype: GObject.GType<WaylandSeat>

    // Constructors of GdkWayland-4.0.GdkWayland.WaylandSeat

    constructor(config?: WaylandSeat.ConstructorProperties) 
    _init(config?: WaylandSeat.ConstructorProperties): void
}

export module WaylandSurface {

    // Constructor properties interface

    export interface ConstructorProperties extends Gdk.Surface.ConstructorProperties {
    }

}

export interface WaylandSurface {

    // Class property signals of GdkWayland-4.0.GdkWayland.WaylandSurface

    connect(sigName: "notify::cursor", callback: (($obj: WaylandSurface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: WaylandSurface, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cursor", ...args: any[]): void
    connect(sigName: "notify::display", callback: (($obj: WaylandSurface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display", callback: (($obj: WaylandSurface, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::display", ...args: any[]): void
    connect(sigName: "notify::frame-clock", callback: (($obj: WaylandSurface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::frame-clock", callback: (($obj: WaylandSurface, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::frame-clock", ...args: any[]): void
    connect(sigName: "notify::height", callback: (($obj: WaylandSurface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: WaylandSurface, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::mapped", callback: (($obj: WaylandSurface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mapped", callback: (($obj: WaylandSurface, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mapped", ...args: any[]): void
    connect(sigName: "notify::scale", callback: (($obj: WaylandSurface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale", callback: (($obj: WaylandSurface, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: WaylandSurface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: WaylandSurface, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::width", callback: (($obj: WaylandSurface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: WaylandSurface, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The Wayland implementation of `GdkSurface`.
 * 
 * Beyond the [class`Gdk`.Surface] API, the Wayland implementation offers
 * access to the Wayland `wl_surface` object with
 * [method`GdkWayland`.WaylandSurface.get_wl_surface].
 * @class 
 */
export class WaylandSurface extends Gdk.Surface {

    // Own properties of GdkWayland-4.0.GdkWayland.WaylandSurface

    static name: string
    static $gtype: GObject.GType<WaylandSurface>

    // Constructors of GdkWayland-4.0.GdkWayland.WaylandSurface

    constructor(config?: WaylandSurface.ConstructorProperties) 
    _init(config?: WaylandSurface.ConstructorProperties): void
}

export module WaylandToplevel {

    // Constructor properties interface

    export interface ConstructorProperties extends Gdk.Toplevel.ConstructorProperties, WaylandSurface.ConstructorProperties {
    }

}

export interface WaylandToplevel extends Gdk.Toplevel {

    // Owm methods of GdkWayland-4.0.GdkWayland.WaylandToplevel

    /**
     * Destroy a handle that was obtained with gdk_wayland_toplevel_export_handle().
     * 
     * Note that this API depends on an unstable Wayland protocol,
     * and thus may require changes in the future.
     * @param handle the handle to drop
     */
    drop_exported_handle(handle: string | null): void
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
    export_handle(callback: WaylandToplevelExported): boolean
    /**
     * Sets the application id on a `GdkToplevel`.
     * @param application_id the application id for the `toplevel`
     */
    set_application_id(application_id: string | null): void
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
    set_transient_for_exported(parent_handle_str: string | null): boolean
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
    unexport_handle(): void

    // Class property signals of GdkWayland-4.0.GdkWayland.WaylandToplevel

    connect(sigName: "notify::cursor", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cursor", ...args: any[]): void
    connect(sigName: "notify::display", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::display", ...args: any[]): void
    connect(sigName: "notify::frame-clock", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::frame-clock", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::frame-clock", ...args: any[]): void
    connect(sigName: "notify::height", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::mapped", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mapped", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mapped", ...args: any[]): void
    connect(sigName: "notify::scale", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::width", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::decorated", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::decorated", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::decorated", ...args: any[]): void
    connect(sigName: "notify::deletable", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::deletable", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::deletable", ...args: any[]): void
    connect(sigName: "notify::fullscreen-mode", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::fullscreen-mode", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::fullscreen-mode", ...args: any[]): void
    connect(sigName: "notify::icon-list", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::icon-list", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::icon-list", ...args: any[]): void
    connect(sigName: "notify::modal", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modal", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::modal", ...args: any[]): void
    connect(sigName: "notify::shortcuts-inhibited", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shortcuts-inhibited", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::shortcuts-inhibited", ...args: any[]): void
    connect(sigName: "notify::startup-id", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::startup-id", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::startup-id", ...args: any[]): void
    connect(sigName: "notify::state", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::state", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: "notify::title", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::title", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::transient-for", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::transient-for", callback: (($obj: WaylandToplevel, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::transient-for", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The Wayland implementation of `GdkToplevel`.
 * 
 * Beyond the [iface`Gdk`.Toplevel] API, the Wayland implementation
 * has API to set up cross-process parent-child relationships between
 * surfaces with [method`GdkWayland`.WaylandToplevel.export_handle] and
 * [method`GdkWayland`.WaylandToplevel.set_transient_for_exported].
 * @class 
 */
export class WaylandToplevel extends WaylandSurface {

    // Own properties of GdkWayland-4.0.GdkWayland.WaylandToplevel

    static name: string
    static $gtype: GObject.GType<WaylandToplevel>

    // Constructors of GdkWayland-4.0.GdkWayland.WaylandToplevel

    constructor(config?: WaylandToplevel.ConstructorProperties) 
    _init(config?: WaylandToplevel.ConstructorProperties): void
}

export interface WaylandDeviceClass {
}

export abstract class WaylandDeviceClass {

    // Own properties of GdkWayland-4.0.GdkWayland.WaylandDeviceClass

    static name: string
}

export interface WaylandDisplayClass {
}

export abstract class WaylandDisplayClass {

    // Own properties of GdkWayland-4.0.GdkWayland.WaylandDisplayClass

    static name: string
}

export interface WaylandGLContextClass {
}

export abstract class WaylandGLContextClass {

    // Own properties of GdkWayland-4.0.GdkWayland.WaylandGLContextClass

    static name: string
}

export interface WaylandMonitorClass {
}

export abstract class WaylandMonitorClass {

    // Own properties of GdkWayland-4.0.GdkWayland.WaylandMonitorClass

    static name: string
}

export interface WaylandSeatClass {
}

export abstract class WaylandSeatClass {

    // Own properties of GdkWayland-4.0.GdkWayland.WaylandSeatClass

    static name: string
}

/**
 * Name of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
 */
export const __name__: string
/**
 * Version of the imported GIR library
 * @see https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
 */
export const __version__: string
// END