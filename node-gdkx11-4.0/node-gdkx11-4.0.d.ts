
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './node-gdkx11-4.0-import.d.ts';
    
/**
 * GdkX11-4.0
 */

import type xlib from '@girs/xlib-2.0';
import type Gdk from '@girs/gdk-4.0';
import type cairo from '@girs/cairo-1.0';
import type PangoCairo from '@girs/pangocairo-1.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Gio from '@girs/gio-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type GModule from '@girs/gmodule-2.0';

export namespace GdkX11 {

enum X11DeviceType {
    LOGICAL,
    PHYSICAL,
    FLOATING,
}
/**
 * Returns the device ID as seen by XInput2.
 * @param device a `GdkDevice`
 * @returns the XInput2 device ID
 */
function x11DeviceGetId(device: X11DeviceXI2): number
/**
 * Returns the `GdkDevice` that wraps the given device ID.
 * @param deviceManager a `GdkDeviceManager`
 * @param deviceId a device ID, as understood by the XInput2 protocol
 * @returns The   `GdkDevice` wrapping the device ID, or %NULL if the given ID   doesn’t currently represent a device.
 */
function x11DeviceManagerLookup(deviceManager: X11DeviceManagerXI2, deviceId: number): X11DeviceXI2 | null
/**
 * Frees the data returned from gdk_x11_display_string_to_compound_text().
 * @param ctext The pointer stored in `ctext` from a call to   gdk_x11_display_string_to_compound_text().
 */
function x11FreeCompoundText(ctext: number): void
/**
 * Frees the array of strings created by
 * gdk_x11_display_text_property_to_text_list().
 * @param list the value stored in the `list` parameter by   a call to gdk_x11_display_text_property_to_text_list().
 */
function x11FreeTextList(list: string | null): void
/**
 * Routine to get the current X server time stamp.
 * @param surface a `GdkSurface`, used for communication   with the server. The surface must have `GDK_PROPERTY_CHANGE_MASK` in   its events mask or a hang will result.
 * @returns the time stamp
 */
function x11GetServerTime(surface: X11Surface): number
/**
 * Returns the X atom for a `GdkDisplay` corresponding to `atom_name`.
 * This function caches the result, so if called repeatedly it is much
 * faster than XInternAtom(), which is a round trip to the server each time.
 * @param display a `GdkDisplay`
 * @param atomName a string
 * @returns a X atom for a `GdkDisplay`
 */
function x11GetXatomByNameForDisplay(display: X11Display, atomName: string | null): xlib.Atom
/**
 * Returns the name of an X atom for its display. This
 * function is meant mainly for debugging, so for convenience, unlike
 * XAtomName() and the result doesn’t need to
 * be freed.
 * @param display the `GdkDisplay` where `xatom` is defined
 * @param xatom an X atom
 * @returns name of the X atom; this string is owned by GDK,   so it shouldn’t be modified or freed.
 */
function x11GetXatomNameForDisplay(display: X11Display, xatom: xlib.Atom): string | null
/**
 * Find the `GdkDisplay` corresponding to `xdisplay,` if any exists.
 * @param xdisplay a pointer to an X Display
 * @returns the `GdkDisplay`, if found, otherwise %NULL.
 */
function x11LookupXdisplay(xdisplay: xlib.Display): X11Display
/**
 * Sets the `SM_CLIENT_ID` property on the application’s leader window so that
 * the window manager can save the application’s state using the X11R6 ICCCM
 * session management protocol.
 * 
 * See the X Session Management Library documentation for more information on
 * session management and the Inter-Client Communication Conventions Manual
 * @param smClientId the client id assigned by the session manager    when the connection was opened, or %NULL to remove the property.
 */
function x11SetSmClientId(smClientId: string | null): void
module X11AppLaunchContext {

    // Constructor properties interface

    interface ConstructorProperties extends Gdk.AppLaunchContext.ConstructorProperties {
    }

}

interface X11AppLaunchContext {

    // Own properties of GdkX11-4.0.GdkX11.X11AppLaunchContext

    __gtype__: number

    // Conflicting methods

    /**
     * Gets the `GdkDisplay` that `context` is for.
     * @returns the display of @context
     */
    getDisplay(): Gdk.Display

    // Overloads of getDisplay

    /**
     * Gets the display string for the `context`. This is used to ensure new
     * applications are started on the same display as the launching
     * application, by setting the `DISPLAY` environment variable.
     * @virtual 
     * @param info a #GAppInfo
     * @param files a #GList of #GFile objects
     * @returns a display string for the display.
     */
    getDisplay(info: Gio.AppInfo, files: Gio.File[]): string | null
    /**
     * Gets the display string for the `context`. This is used to ensure new
     * applications are started on the same display as the launching
     * application, by setting the `DISPLAY` environment variable.
     * @virtual 
     * @param info a #GAppInfo
     * @param files a #GList of #GFile objects
     * @returns a display string for the display.
     */
    getDisplay(info: Gio.AppInfo, files: Gio.File[]): string | null

    // Class property signals of GdkX11-4.0.GdkX11.X11AppLaunchContext

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::display", callback: (...args: any[]) => void): number
    on(sigName: "notify::display", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::display", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::display", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::display", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class X11AppLaunchContext extends Gdk.AppLaunchContext {

    // Own properties of GdkX11-4.0.GdkX11.X11AppLaunchContext

    static name: string

    // Constructors of GdkX11-4.0.GdkX11.X11AppLaunchContext

    constructor(config?: X11AppLaunchContext.ConstructorProperties) 
    _init(config?: X11AppLaunchContext.ConstructorProperties): void
}

module X11DeviceManagerXI2 {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GdkX11-4.0.GdkX11.X11DeviceManagerXI2

        display?: Gdk.Display | null
        major?: number | null
        minor?: number | null
        opcode?: number | null
    }

}

interface X11DeviceManagerXI2 {

    // Own properties of GdkX11-4.0.GdkX11.X11DeviceManagerXI2

    readonly display: Gdk.Display
    readonly major: number
    readonly minor: number
    readonly opcode: number
    __gtype__: number

    // Class property signals of GdkX11-4.0.GdkX11.X11DeviceManagerXI2

    connect(sigName: "notify::display", callback: (...args: any[]) => void): number
    on(sigName: "notify::display", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::display", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::display", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::display", ...args: any[]): void
    connect(sigName: "notify::major", callback: (...args: any[]) => void): number
    on(sigName: "notify::major", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::major", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::major", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::major", ...args: any[]): void
    connect(sigName: "notify::minor", callback: (...args: any[]) => void): number
    on(sigName: "notify::minor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::minor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::minor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::minor", ...args: any[]): void
    connect(sigName: "notify::opcode", callback: (...args: any[]) => void): number
    on(sigName: "notify::opcode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::opcode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::opcode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::opcode", ...args: any[]): void
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

class X11DeviceManagerXI2 extends GObject.Object {

    // Own properties of GdkX11-4.0.GdkX11.X11DeviceManagerXI2

    static name: string

    // Constructors of GdkX11-4.0.GdkX11.X11DeviceManagerXI2

    constructor(config?: X11DeviceManagerXI2.ConstructorProperties) 
    _init(config?: X11DeviceManagerXI2.ConstructorProperties): void
}

module X11DeviceXI2 {

    // Constructor properties interface

    interface ConstructorProperties extends Gdk.Device.ConstructorProperties {

        // Own constructor properties of GdkX11-4.0.GdkX11.X11DeviceXI2

        deviceId?: number | null
    }

}

interface X11DeviceXI2 {

    // Own properties of GdkX11-4.0.GdkX11.X11DeviceXI2

    readonly deviceId: number
    __gtype__: number

    // Class property signals of GdkX11-4.0.GdkX11.X11DeviceXI2

    connect(sigName: "notify::device-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::device-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::device-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::device-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::device-id", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::caps-lock-state", callback: (...args: any[]) => void): number
    on(sigName: "notify::caps-lock-state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::caps-lock-state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::caps-lock-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::caps-lock-state", ...args: any[]): void
    connect(sigName: "notify::direction", callback: (...args: any[]) => void): number
    on(sigName: "notify::direction", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::direction", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::direction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::direction", ...args: any[]): void
    connect(sigName: "notify::display", callback: (...args: any[]) => void): number
    on(sigName: "notify::display", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::display", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::display", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::display", ...args: any[]): void
    connect(sigName: "notify::has-bidi-layouts", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-bidi-layouts", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-bidi-layouts", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-bidi-layouts", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-bidi-layouts", ...args: any[]): void
    connect(sigName: "notify::has-cursor", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-cursor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-cursor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-cursor", ...args: any[]): void
    connect(sigName: "notify::modifier-state", callback: (...args: any[]) => void): number
    on(sigName: "notify::modifier-state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::modifier-state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::modifier-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::modifier-state", ...args: any[]): void
    connect(sigName: "notify::n-axes", callback: (...args: any[]) => void): number
    on(sigName: "notify::n-axes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::n-axes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::n-axes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::n-axes", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::num-lock-state", callback: (...args: any[]) => void): number
    on(sigName: "notify::num-lock-state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::num-lock-state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::num-lock-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::num-lock-state", ...args: any[]): void
    connect(sigName: "notify::num-touches", callback: (...args: any[]) => void): number
    on(sigName: "notify::num-touches", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::num-touches", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::num-touches", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::num-touches", ...args: any[]): void
    connect(sigName: "notify::product-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::product-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::product-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::product-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::product-id", ...args: any[]): void
    connect(sigName: "notify::scroll-lock-state", callback: (...args: any[]) => void): number
    on(sigName: "notify::scroll-lock-state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scroll-lock-state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scroll-lock-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scroll-lock-state", ...args: any[]): void
    connect(sigName: "notify::seat", callback: (...args: any[]) => void): number
    on(sigName: "notify::seat", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::seat", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::seat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::seat", ...args: any[]): void
    connect(sigName: "notify::source", callback: (...args: any[]) => void): number
    on(sigName: "notify::source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::source", ...args: any[]): void
    connect(sigName: "notify::tool", callback: (...args: any[]) => void): number
    on(sigName: "notify::tool", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tool", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tool", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tool", ...args: any[]): void
    connect(sigName: "notify::vendor-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::vendor-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vendor-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vendor-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vendor-id", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class X11DeviceXI2 extends Gdk.Device {

    // Own properties of GdkX11-4.0.GdkX11.X11DeviceXI2

    static name: string

    // Constructors of GdkX11-4.0.GdkX11.X11DeviceXI2

    constructor(config?: X11DeviceXI2.ConstructorProperties) 
    _init(config?: X11DeviceXI2.ConstructorProperties): void
}

module X11Display {

    // Signal callback interfaces

    /**
     * Signal callback interface for `xevent`
     */
    interface XeventSignalCallback {
        (xevent: any | null): boolean
    }


    // Constructor properties interface

    interface ConstructorProperties extends Gdk.Display.ConstructorProperties {
    }

}

interface X11Display {

    // Own properties of GdkX11-4.0.GdkX11.X11Display

    __gtype__: number

    // Owm methods of GdkX11-4.0.GdkX11.X11Display

    /**
     * Pops the error trap pushed by gdk_x11_display_error_trap_push().
     * Will XSync() if necessary and will always block until
     * the error is known to have occurred or not occurred,
     * so the error code can be returned.
     * 
     * If you don’t need to use the return value,
     * gdk_x11_display_error_trap_pop_ignored() would be more efficient.
     * @returns X error code or 0 on success
     */
    errorTrapPop(): number
    /**
     * Pops the error trap pushed by gdk_x11_display_error_trap_push().
     * Does not block to see if an error occurred; merely records the
     * range of requests to ignore errors for, and ignores those errors
     * if they arrive asynchronously.
     */
    errorTrapPopIgnored(): void
    /**
     * Begins a range of X requests on `display` for which X error events
     * will be ignored. Unignored errors (when no trap is pushed) will abort
     * the application. Use gdk_x11_display_error_trap_pop() or
     * gdk_x11_display_error_trap_pop_ignored()to lift a trap pushed
     * with this function.
     */
    errorTrapPush(): void
    /**
     * Returns the default group leader surface for all toplevel surfaces
     * on `display`. This surface is implicitly created by GDK.
     * See gdk_x11_surface_set_group().
     * @returns The default group leader surface for @display
     */
    getDefaultGroup(): Gdk.Surface
    /**
     * Retrieves the EGL display connection object for the given GDK display.
     * 
     * This function returns `NULL` if GDK is using GLX.
     * @returns the EGL display object
     */
    getEglDisplay(): any | null
    /**
     * Retrieves the version of the EGL implementation.
     * @returns %TRUE if EGL is available
     */
    getEglVersion(): [ /* returnType */ boolean, /* major */ number, /* minor */ number ]
    /**
     * Retrieves the version of the GLX implementation.
     * @returns %TRUE if GLX is available
     */
    getGlxVersion(): [ /* returnType */ boolean, /* major */ number, /* minor */ number ]
    /**
     * Gets the primary monitor for the display.
     * 
     * The primary monitor is considered the monitor where the “main desktop”
     * lives. While normal application surfaces typically allow the window
     * manager to place the surfaces, specialized desktop applications
     * such as panels should place themselves on the primary monitor.
     * 
     * If no monitor is the designated primary monitor, any monitor
     * (usually the first) may be returned.
     * @returns the primary monitor, or any monitor if no   primary monitor is configured by the user
     */
    getPrimaryMonitor(): Gdk.Monitor
    /**
     * Retrieves the `GdkX11Screen` of the `display`.
     * @returns the `GdkX11Screen`
     */
    getScreen(): X11Screen
    /**
     * Gets the startup notification ID for a display.
     * @returns the startup notification ID for @display
     */
    getStartupNotificationId(): string | null
    /**
     * Returns the timestamp of the last user interaction on
     * `display`. The timestamp is taken from events caused
     * by user interaction such as key presses or pointer
     * movements. See gdk_x11_surface_set_user_time().
     * @returns the timestamp of the last user interaction
     */
    getUserTime(): number
    /**
     * Returns the X cursor belonging to a `GdkCursor`, potentially
     * creating the cursor.
     * 
     * Be aware that the returned cursor may not be unique to `cursor`.
     * It may for example be shared with its fallback cursor. On old
     * X servers that don't support the XCursor extension, all cursors
     * may even fall back to a few default cursors.
     * @param cursor a `GdkCursor`
     * @returns an Xlib Cursor.
     */
    getXcursor(cursor: Gdk.Cursor): xlib.Cursor
    /**
     * Returns the X display of a `GdkDisplay`.
     * @returns an X display
     */
    getXdisplay(): xlib.Display
    /**
     * Returns the root X window used by `GdkDisplay`.
     * @returns an X Window
     */
    getXrootwindow(): xlib.Window
    /**
     * Returns the X Screen used by `GdkDisplay`.
     * @returns an X Screen
     */
    getXscreen(): xlib.Screen
    /**
     * Call XGrabServer() on `display`.
     * To ungrab the display again, use gdk_x11_display_ungrab().
     * 
     * gdk_x11_display_grab()/gdk_x11_display_ungrab() calls can be nested.
     */
    grab(): void
    /**
     * Sets the cursor theme from which the images for cursor
     * should be taken.
     * 
     * If the windowing system supports it, existing cursors created
     * with [ctor`Gdk`.Cursor.new_from_name] are updated to reflect the theme
     * change. Custom cursors constructed with [ctor`Gdk`.Cursor.new_from_texture]
     * will have to be handled by the application (GTK applications can learn
     * about cursor theme changes by listening for change notification
     * for the corresponding `GtkSetting`).
     * @param theme the name of the cursor theme to use, or %NULL   to unset a previously set value
     * @param size the cursor size to use, or 0 to keep the previous size
     */
    setCursorTheme(theme: string | null, size: number): void
    /**
     * Sets the startup notification ID for a display.
     * 
     * This is usually taken from the value of the DESKTOP_STARTUP_ID
     * environment variable, but in some cases (such as the application not
     * being launched using exec()) it can come from other sources.
     * 
     * If the ID contains the string "_TIME" then the portion following that
     * string is taken to be the X11 timestamp of the event that triggered
     * the application to be launched and the GDK current event time is set
     * accordingly.
     * 
     * The startup ID is also what is used to signal that the startup is
     * complete (for example, when opening a window or when calling
     * gdk_display_notify_startup_complete()).
     * @param startupId the startup notification ID (must be valid utf8)
     */
    setStartupNotificationId(startupId: string | null): void
    /**
     * Forces a specific window scale for all windows on this display,
     * instead of using the default or user configured scale. This
     * is can be used to disable scaling support by setting `scale` to
     * 1, or to programmatically set the window scale.
     * 
     * Once the scale is set by this call it will not change in response
     * to later user configuration changes.
     * @param scale The new scale value
     */
    setSurfaceScale(scale: number): void
    /**
     * Convert a string from the encoding of the current
     * locale into a form suitable for storing in a window property.
     * @param str a nul-terminated string
     * @returns 0 upon success, non-zero upon failure
     */
    stringToCompoundText(str: string | null): [ /* returnType */ number, /* encoding */ string | null, /* format */ number, /* ctext */ Uint8Array ]
    /**
     * Convert a text string from the encoding as it is stored
     * in a property into an array of strings in the encoding of
     * the current locale. (The elements of the array represent the
     * nul-separated elements of the original text string.)
     * @param encoding a string representing the encoding. The most   common values for this are "STRING", or "COMPOUND_TEXT".   This is value used as the type for the property
     * @param format the format of the property
     * @param text The text data
     * @param length The number of items to transform
     * @param list location to store an  array of strings in   the encoding of the current locale. This array should be   freed using gdk_x11_free_text_list().
     * @returns the number of strings stored in list, or 0,   if the conversion failed
     */
    textPropertyToTextList(encoding: string | null, format: number, text: number, length: number, list: string | null): number
    /**
     * Ungrab `display` after it has been grabbed with
     * gdk_x11_display_grab().
     */
    ungrab(): void
    /**
     * Converts from UTF-8 to compound text.
     * @param str a UTF-8 string
     * @returns %TRUE if the conversion succeeded, otherwise %FALSE
     */
    utf8ToCompoundText(str: string | null): [ /* returnType */ boolean, /* encoding */ string | null, /* format */ number, /* ctext */ Uint8Array ]

    // Own signals of GdkX11-4.0.GdkX11.X11Display

    connect(sigName: "xevent", callback: X11Display.XeventSignalCallback): number
    on(sigName: "xevent", callback: X11Display.XeventSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "xevent", callback: X11Display.XeventSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "xevent", callback: X11Display.XeventSignalCallback): NodeJS.EventEmitter
    emit(sigName: "xevent", ...args: any[]): void

    // Class property signals of GdkX11-4.0.GdkX11.X11Display

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::composited", callback: (...args: any[]) => void): number
    on(sigName: "notify::composited", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::composited", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::composited", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::composited", ...args: any[]): void
    connect(sigName: "notify::input-shapes", callback: (...args: any[]) => void): number
    on(sigName: "notify::input-shapes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::input-shapes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::input-shapes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::input-shapes", ...args: any[]): void
    connect(sigName: "notify::rgba", callback: (...args: any[]) => void): number
    on(sigName: "notify::rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rgba", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rgba", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rgba", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class X11Display extends Gdk.Display {

    // Own properties of GdkX11-4.0.GdkX11.X11Display

    static name: string

    // Constructors of GdkX11-4.0.GdkX11.X11Display

    constructor(config?: X11Display.ConstructorProperties) 
    _init(config?: X11Display.ConstructorProperties): void
    /**
     * Tries to open a new display to the X server given by
     * `display_name`. If opening the display fails, %NULL is
     * returned.
     * @param displayName name of the X display.   See the XOpenDisplay() for details.
     * @returns The new display
     */
    static open(displayName: string | null): Gdk.Display | null
    /**
     * Sets the program class.
     * 
     * The X11 backend uses the program class to set the class name part
     * of the `WM_CLASS` property on toplevel windows; see the ICCCM.
     * @param display a `GdkDisplay`
     * @param programClass a string
     */
    static setProgramClass(display: Gdk.Display, programClass: string | null): void
}

module X11Drag {

    // Constructor properties interface

    interface ConstructorProperties extends Gdk.Drag.ConstructorProperties {
    }

}

interface X11Drag {

    // Own properties of GdkX11-4.0.GdkX11.X11Drag

    __gtype__: number

    // Class property signals of GdkX11-4.0.GdkX11.X11Drag

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::actions", callback: (...args: any[]) => void): number
    on(sigName: "notify::actions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::actions", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::actions", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::actions", ...args: any[]): void
    connect(sigName: "notify::content", callback: (...args: any[]) => void): number
    on(sigName: "notify::content", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::content", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::content", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::device", callback: (...args: any[]) => void): number
    on(sigName: "notify::device", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::device", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::device", ...args: any[]): void
    connect(sigName: "notify::display", callback: (...args: any[]) => void): number
    on(sigName: "notify::display", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::display", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::display", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::display", ...args: any[]): void
    connect(sigName: "notify::formats", callback: (...args: any[]) => void): number
    on(sigName: "notify::formats", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::formats", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::formats", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::formats", ...args: any[]): void
    connect(sigName: "notify::selected-action", callback: (...args: any[]) => void): number
    on(sigName: "notify::selected-action", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::selected-action", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::selected-action", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::selected-action", ...args: any[]): void
    connect(sigName: "notify::surface", callback: (...args: any[]) => void): number
    on(sigName: "notify::surface", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::surface", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::surface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::surface", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class X11Drag extends Gdk.Drag {

    // Own properties of GdkX11-4.0.GdkX11.X11Drag

    static name: string

    // Constructors of GdkX11-4.0.GdkX11.X11Drag

    constructor(config?: X11Drag.ConstructorProperties) 
    _init(config?: X11Drag.ConstructorProperties): void
}

module X11GLContext {

    // Constructor properties interface

    interface ConstructorProperties extends Gdk.GLContext.ConstructorProperties {
    }

}

interface X11GLContext {

    // Own properties of GdkX11-4.0.GdkX11.X11GLContext

    __gtype__: number

    // Class property signals of GdkX11-4.0.GdkX11.X11GLContext

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::allowed-apis", callback: (...args: any[]) => void): number
    on(sigName: "notify::allowed-apis", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::allowed-apis", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::allowed-apis", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::allowed-apis", ...args: any[]): void
    connect(sigName: "notify::api", callback: (...args: any[]) => void): number
    on(sigName: "notify::api", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::api", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::api", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::api", ...args: any[]): void
    connect(sigName: "notify::shared-context", callback: (...args: any[]) => void): number
    on(sigName: "notify::shared-context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::shared-context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::shared-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::shared-context", ...args: any[]): void
    connect(sigName: "notify::display", callback: (...args: any[]) => void): number
    on(sigName: "notify::display", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::display", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::display", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::display", ...args: any[]): void
    connect(sigName: "notify::surface", callback: (...args: any[]) => void): number
    on(sigName: "notify::surface", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::surface", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::surface", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::surface", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class X11GLContext extends Gdk.GLContext {

    // Own properties of GdkX11-4.0.GdkX11.X11GLContext

    static name: string

    // Constructors of GdkX11-4.0.GdkX11.X11GLContext

    constructor(config?: X11GLContext.ConstructorProperties) 
    _init(config?: X11GLContext.ConstructorProperties): void
}

module X11Monitor {

    // Constructor properties interface

    interface ConstructorProperties extends Gdk.Monitor.ConstructorProperties {
    }

}

interface X11Monitor {

    // Own properties of GdkX11-4.0.GdkX11.X11Monitor

    __gtype__: number

    // Owm methods of GdkX11-4.0.GdkX11.X11Monitor

    /**
     * Returns the XID of the Output corresponding to `monitor`.
     * @returns the XID of @monitor
     */
    getOutput(): xlib.XID
    /**
     * Retrieves the size and position of the “work area” on a monitor
     * within the display coordinate space.
     * 
     * The returned geometry is in ”application pixels”, not in ”device pixels”
     * (see [method`Gdk`.Monitor.get_scale_factor]).
     */
    getWorkarea(): /* workarea */ Gdk.Rectangle

    // Class property signals of GdkX11-4.0.GdkX11.X11Monitor

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::connector", callback: (...args: any[]) => void): number
    on(sigName: "notify::connector", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::connector", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::connector", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::connector", ...args: any[]): void
    connect(sigName: "notify::description", callback: (...args: any[]) => void): number
    on(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::description", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::description", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::display", callback: (...args: any[]) => void): number
    on(sigName: "notify::display", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::display", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::display", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::display", ...args: any[]): void
    connect(sigName: "notify::geometry", callback: (...args: any[]) => void): number
    on(sigName: "notify::geometry", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::geometry", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::geometry", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::geometry", ...args: any[]): void
    connect(sigName: "notify::height-mm", callback: (...args: any[]) => void): number
    on(sigName: "notify::height-mm", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::height-mm", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::height-mm", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::height-mm", ...args: any[]): void
    connect(sigName: "notify::manufacturer", callback: (...args: any[]) => void): number
    on(sigName: "notify::manufacturer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::manufacturer", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::manufacturer", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::manufacturer", ...args: any[]): void
    connect(sigName: "notify::model", callback: (...args: any[]) => void): number
    on(sigName: "notify::model", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::model", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::model", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::model", ...args: any[]): void
    connect(sigName: "notify::refresh-rate", callback: (...args: any[]) => void): number
    on(sigName: "notify::refresh-rate", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::refresh-rate", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::refresh-rate", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::refresh-rate", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-factor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-factor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::subpixel-layout", callback: (...args: any[]) => void): number
    on(sigName: "notify::subpixel-layout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::subpixel-layout", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::subpixel-layout", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::subpixel-layout", ...args: any[]): void
    connect(sigName: "notify::valid", callback: (...args: any[]) => void): number
    on(sigName: "notify::valid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::valid", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::valid", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::valid", ...args: any[]): void
    connect(sigName: "notify::width-mm", callback: (...args: any[]) => void): number
    on(sigName: "notify::width-mm", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::width-mm", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::width-mm", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::width-mm", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class X11Monitor extends Gdk.Monitor {

    // Own properties of GdkX11-4.0.GdkX11.X11Monitor

    static name: string

    // Constructors of GdkX11-4.0.GdkX11.X11Monitor

    constructor(config?: X11Monitor.ConstructorProperties) 
    _init(config?: X11Monitor.ConstructorProperties): void
}

module X11Screen {

    // Signal callback interfaces

    /**
     * Signal callback interface for `window-manager-changed`
     */
    interface WindowManagerChangedSignalCallback {
        (): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface X11Screen {

    // Own properties of GdkX11-4.0.GdkX11.X11Screen

    __gtype__: number

    // Owm methods of GdkX11-4.0.GdkX11.X11Screen

    /**
     * Returns the current workspace for `screen` when running under a
     * window manager that supports multiple workspaces, as described
     * in the
     * [Extended Window Manager Hints](http://www.freedesktop.org/Standards/wm-spec) specification.
     * @returns the current workspace, or 0 if workspaces are not supported
     */
    getCurrentDesktop(): number
    /**
     * Gets the XID of the specified output/monitor.
     * If the X server does not support version 1.2 of the RANDR
     * extension, 0 is returned.
     * @param monitorNum number of the monitor, between 0 and gdk_screen_get_n_monitors (screen)
     * @returns the XID of the monitor
     */
    getMonitorOutput(monitorNum: number): xlib.XID
    /**
     * Returns the number of workspaces for `screen` when running under a
     * window manager that supports multiple workspaces, as described
     * in the
     * [Extended Window Manager Hints](http://www.freedesktop.org/Standards/wm-spec) specification.
     * @returns the number of workspaces, or 0 if workspaces are not supported
     */
    getNumberOfDesktops(): number
    /**
     * Returns the index of a `GdkX11Screen`.
     * @returns the position of @screen among the screens   of its display
     */
    getScreenNumber(): number
    /**
     * Returns the name of the window manager for `screen`.
     * @returns the name of the window manager screen @screen, or "unknown" if the window manager is unknown. The string is owned by GDK and should not be freed.
     */
    getWindowManagerName(): string | null
    /**
     * Returns the screen of a `GdkX11Screen`.
     * @returns an Xlib Screen*
     */
    getXscreen(): xlib.Screen
    /**
     * This function is specific to the X11 backend of GDK, and indicates
     * whether the window manager supports a certain hint from the
     * [Extended Window Manager Hints](http://www.freedesktop.org/Standards/wm-spec) specification.
     * 
     * When using this function, keep in mind that the window manager
     * can change over time; so you shouldn’t use this function in
     * a way that impacts persistent application state. A common bug
     * is that your application can start up before the window manager
     * does when the user logs in, and before the window manager starts
     * gdk_x11_screen_supports_net_wm_hint() will return %FALSE for every property.
     * You can monitor the window_manager_changed signal on `GdkX11Screen` to detect
     * a window manager change.
     * @param propertyName name of the WM property
     * @returns %TRUE if the window manager supports @property
     */
    supportsNetWmHint(propertyName: string | null): boolean

    // Own signals of GdkX11-4.0.GdkX11.X11Screen

    connect(sigName: "window-manager-changed", callback: X11Screen.WindowManagerChangedSignalCallback): number
    on(sigName: "window-manager-changed", callback: X11Screen.WindowManagerChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "window-manager-changed", callback: X11Screen.WindowManagerChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "window-manager-changed", callback: X11Screen.WindowManagerChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "window-manager-changed", ...args: any[]): void

    // Class property signals of GdkX11-4.0.GdkX11.X11Screen

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

class X11Screen extends GObject.Object {

    // Own properties of GdkX11-4.0.GdkX11.X11Screen

    static name: string

    // Constructors of GdkX11-4.0.GdkX11.X11Screen

    constructor(config?: X11Screen.ConstructorProperties) 
    _init(config?: X11Screen.ConstructorProperties): void
}

module X11Surface {

    // Constructor properties interface

    interface ConstructorProperties extends Gdk.Surface.ConstructorProperties {
    }

}

interface X11Surface {

    // Own properties of GdkX11-4.0.GdkX11.X11Surface

    __gtype__: number

    // Owm methods of GdkX11-4.0.GdkX11.X11Surface

    /**
     * Gets the number of the workspace `surface` is on.
     * @returns the current workspace of @surface
     */
    getDesktop(): number
    /**
     * Returns the group this surface belongs to.
     * @returns The group of this surface;
     */
    getGroup(): Gdk.Surface | null
    /**
     * Returns the X resource (surface) belonging to a `GdkSurface`.
     * @returns the ID of @drawable’s X resource.
     */
    getXid(): xlib.Window
    /**
     * Moves the surface to the correct workspace when running under a
     * window manager that supports multiple workspaces, as described
     * in the [Extended Window Manager Hints](http://www.freedesktop.org/Standards/wm-spec) specification.
     * Will not do anything if the surface is already on all workspaces.
     */
    moveToCurrentDesktop(): void
    /**
     * Moves the surface to the given workspace when running unde a
     * window manager that supports multiple workspaces, as described
     * in the [Extended Window Manager Hints](http://www.freedesktop.org/Standards/wm-spec) specification.
     * @param desktop the number of the workspace to move the surface to
     */
    moveToDesktop(desktop: number): void
    /**
     * This function can be used to disable frame synchronization for a surface.
     * Normally frame synchronziation will be enabled or disabled based on whether
     * the system has a compositor that supports frame synchronization, but if
     * the surface is not directly managed by the window manager, then frame
     * synchronziation may need to be disabled. This is the case for a surface
     * embedded via the XEMBED protocol.
     * @param frameSyncEnabled whether frame-synchronization should be enabled
     */
    setFrameSyncEnabled(frameSyncEnabled: boolean): void
    /**
     * Sets the group leader of `surface` to be `leader`.
     * See the ICCCM for details.
     * @param leader a `GdkSurface`
     */
    setGroup(leader: Gdk.Surface): void
    /**
     * Sets a hint on `surface` that pagers should not
     * display it. See the EWMH for details.
     * @param skipsPager %TRUE to skip pagers
     */
    setSkipPagerHint(skipsPager: boolean): void
    /**
     * Sets a hint on `surface` that taskbars should not
     * display it. See the EWMH for details.
     * @param skipsTaskbar %TRUE to skip taskbars
     */
    setSkipTaskbarHint(skipsTaskbar: boolean): void
    /**
     * GTK applications can request a dark theme variant. In order to
     * make other applications - namely window managers using GTK for
     * themeing - aware of this choice, GTK uses this function to
     * export the requested theme variant as _GTK_THEME_VARIANT property
     * on toplevel surfaces.
     * 
     * Note that this property is automatically updated by GTK, so this
     * function should only be used by applications which do not use GTK
     * to create toplevel surfaces.
     * @param variant the theme variant to export
     */
    setThemeVariant(variant: string | null): void
    /**
     * Sets a hint on `surface` that it needs user attention.
     * See the ICCCM for details.
     * @param urgent %TRUE to indicate urgenct attention needed
     */
    setUrgencyHint(urgent: boolean): void
    /**
     * The application can use this call to update the _NET_WM_USER_TIME
     * property on a toplevel surface.  This property stores an Xserver
     * time which represents the time of the last user input event
     * received for this surface.  This property may be used by the window
     * manager to alter the focus, stacking, and/or placement behavior of
     * surfaces when they are mapped depending on whether the new surface
     * was created by a user action or is a "pop-up" surface activated by a
     * timer or some other event.
     * 
     * Note that this property is automatically updated by GDK, so this
     * function should only be used by applications which handle input
     * events bypassing GDK.
     * @param timestamp An XServer timestamp to which the property should be set
     */
    setUserTime(timestamp: number): void
    /**
     * This function modifies or removes an arbitrary X11 window
     * property of type UTF8_STRING.  If the given `surface` is
     * not a toplevel surface, it is ignored.
     * @param name Property name, will be interned as an X atom
     * @param value Property value, or %NULL to delete
     */
    setUtf8Property(name: string | null, value: string | null): void

    // Class property signals of GdkX11-4.0.GdkX11.X11Surface

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::cursor", callback: (...args: any[]) => void): number
    on(sigName: "notify::cursor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::cursor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::cursor", ...args: any[]): void
    connect(sigName: "notify::display", callback: (...args: any[]) => void): number
    on(sigName: "notify::display", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::display", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::display", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::display", ...args: any[]): void
    connect(sigName: "notify::frame-clock", callback: (...args: any[]) => void): number
    on(sigName: "notify::frame-clock", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::frame-clock", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::frame-clock", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::frame-clock", ...args: any[]): void
    connect(sigName: "notify::height", callback: (...args: any[]) => void): number
    on(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::height", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::height", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::mapped", callback: (...args: any[]) => void): number
    on(sigName: "notify::mapped", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::mapped", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::mapped", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::mapped", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-factor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-factor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::width", callback: (...args: any[]) => void): number
    on(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class X11Surface extends Gdk.Surface {

    // Own properties of GdkX11-4.0.GdkX11.X11Surface

    static name: string

    // Constructors of GdkX11-4.0.GdkX11.X11Surface

    constructor(config?: X11Surface.ConstructorProperties) 
    _init(config?: X11Surface.ConstructorProperties): void
    /**
     * Looks up the `GdkSurface` that wraps the given native window handle.
     * @param display the `GdkDisplay` corresponding to the   window handle
     * @param window an Xlib Window
     * @returns the `GdkSurface` wrapper   for the native  window
     */
    static lookupForDisplay(display: X11Display, window: xlib.Window): X11Surface
}

interface X11AppLaunchContextClass {
}

abstract class X11AppLaunchContextClass {

    // Own properties of GdkX11-4.0.GdkX11.X11AppLaunchContextClass

    static name: string
}

interface X11DeviceManagerXI2Class {
}

abstract class X11DeviceManagerXI2Class {

    // Own properties of GdkX11-4.0.GdkX11.X11DeviceManagerXI2Class

    static name: string
}

interface X11DeviceXI2Class {
}

abstract class X11DeviceXI2Class {

    // Own properties of GdkX11-4.0.GdkX11.X11DeviceXI2Class

    static name: string
}

interface X11DisplayClass {
}

abstract class X11DisplayClass {

    // Own properties of GdkX11-4.0.GdkX11.X11DisplayClass

    static name: string
}

interface X11DragClass {
}

abstract class X11DragClass {

    // Own properties of GdkX11-4.0.GdkX11.X11DragClass

    static name: string
}

interface X11GLContextClass {
}

abstract class X11GLContextClass {

    // Own properties of GdkX11-4.0.GdkX11.X11GLContextClass

    static name: string
}

interface X11MonitorClass {
}

abstract class X11MonitorClass {

    // Own properties of GdkX11-4.0.GdkX11.X11MonitorClass

    static name: string
}

interface X11ScreenClass {
}

abstract class X11ScreenClass {

    // Own properties of GdkX11-4.0.GdkX11.X11ScreenClass

    static name: string
}

interface X11SurfaceClass {
}

abstract class X11SurfaceClass {

    // Own properties of GdkX11-4.0.GdkX11.X11SurfaceClass

    static name: string
}

}

export default GdkX11;
// END