// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GdkX11-4.0
 */

import type * as Gjs from './Gjs';
import type xlib from './xlib-2.0';
import type Gdk from './Gdk-4.0';
import type cairo from './cairo-1.0';
import type PangoCairo from './PangoCairo-1.0';
import type Pango from './Pango-1.0';
import type HarfBuzz from './HarfBuzz-0.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type Gio from './Gio-2.0';
import type GdkPixbuf from './GdkPixbuf-2.0';
import type GModule from './GModule-2.0';

export namespace GdkX11 {

enum X11DeviceType {
    LOGICAL,
    PHYSICAL,
    FLOATING,
}
/**
 * Returns the device ID as seen by XInput2.
 * @param device a `GdkDevice`
 */
function x11_device_get_id(device: X11DeviceXI2): number
/**
 * Returns the `GdkDevice` that wraps the given device ID.
 * @param device_manager a `GdkDeviceManager`
 * @param device_id a device ID, as understood by the XInput2 protocol
 */
function x11_device_manager_lookup(device_manager: X11DeviceManagerXI2, device_id: number): X11DeviceXI2 | null
/**
 * Frees the data returned from gdk_x11_display_string_to_compound_text().
 * @param ctext The pointer stored in `ctext` from a call to   gdk_x11_display_string_to_compound_text().
 */
function x11_free_compound_text(ctext: number): void
/**
 * Frees the array of strings created by
 * gdk_x11_display_text_property_to_text_list().
 * @param list the value stored in the `list` parameter by   a call to gdk_x11_display_text_property_to_text_list().
 */
function x11_free_text_list(list: string): void
/**
 * Routine to get the current X server time stamp.
 * @param surface a `GdkSurface`, used for communication   with the server. The surface must have `GDK_PROPERTY_CHANGE_MASK` in   its events mask or a hang will result.
 */
function x11_get_server_time(surface: X11Surface): number
/**
 * Returns the X atom for a `GdkDisplay` corresponding to `atom_name`.
 * This function caches the result, so if called repeatedly it is much
 * faster than XInternAtom(), which is a round trip to the server each time.
 * @param display a `GdkDisplay`
 * @param atom_name a string
 */
function x11_get_xatom_by_name_for_display(display: X11Display, atom_name: string): xlib.Atom
/**
 * Returns the name of an X atom for its display. This
 * function is meant mainly for debugging, so for convenience, unlike
 * XAtomName() and the result doesn’t need to
 * be freed.
 * @param display the `GdkDisplay` where `xatom` is defined
 * @param xatom an X atom
 */
function x11_get_xatom_name_for_display(display: X11Display, xatom: xlib.Atom): string
/**
 * Find the `GdkDisplay` corresponding to `xdisplay,` if any exists.
 * @param xdisplay a pointer to an X Display
 */
function x11_lookup_xdisplay(xdisplay: xlib.Display): X11Display
/**
 * Sets the `SM_CLIENT_ID` property on the application’s leader window so that
 * the window manager can save the application’s state using the X11R6 ICCCM
 * session management protocol.
 * 
 * See the X Session Management Library documentation for more information on
 * session management and the Inter-Client Communication Conventions Manual
 * @param sm_client_id the client id assigned by the session manager    when the connection was opened, or %NULL to remove the property.
 */
function x11_set_sm_client_id(sm_client_id: string | null): void
interface X11AppLaunchContext_ConstructProps extends Gdk.AppLaunchContext_ConstructProps {
}

interface X11AppLaunchContext {

    // Conflicting methods

    get_display(...args: any[]): any

    // Class property signals of GdkX11-4.0.GdkX11.X11AppLaunchContext

    connect(sigName: "notify::display", callback: (($obj: X11AppLaunchContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display", callback: (($obj: X11AppLaunchContext, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::display", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class X11AppLaunchContext extends Gdk.AppLaunchContext {

    // Own properties of GdkX11-4.0.GdkX11.X11AppLaunchContext

    static name: string
    static $gtype: GObject.GType<X11AppLaunchContext>

    // Constructors of GdkX11-4.0.GdkX11.X11AppLaunchContext

    constructor(config?: X11AppLaunchContext_ConstructProps) 
    _init(config?: X11AppLaunchContext_ConstructProps): void
}

interface X11DeviceManagerXI2_ConstructProps extends GObject.Object_ConstructProps {

    // Own constructor properties of GdkX11-4.0.GdkX11.X11DeviceManagerXI2

    display?: Gdk.Display | null
    major?: number | null
    minor?: number | null
    opcode?: number | null
}

interface X11DeviceManagerXI2 {

    // Own properties of GdkX11-4.0.GdkX11.X11DeviceManagerXI2

    readonly display: Gdk.Display
    readonly major: number
    readonly minor: number
    readonly opcode: number

    // Class property signals of GdkX11-4.0.GdkX11.X11DeviceManagerXI2

    connect(sigName: "notify::display", callback: (($obj: X11DeviceManagerXI2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display", callback: (($obj: X11DeviceManagerXI2, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::display", ...args: any[]): void
    connect(sigName: "notify::major", callback: (($obj: X11DeviceManagerXI2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::major", callback: (($obj: X11DeviceManagerXI2, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::major", ...args: any[]): void
    connect(sigName: "notify::minor", callback: (($obj: X11DeviceManagerXI2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::minor", callback: (($obj: X11DeviceManagerXI2, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::minor", ...args: any[]): void
    connect(sigName: "notify::opcode", callback: (($obj: X11DeviceManagerXI2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opcode", callback: (($obj: X11DeviceManagerXI2, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opcode", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class X11DeviceManagerXI2 extends GObject.Object {

    // Own properties of GdkX11-4.0.GdkX11.X11DeviceManagerXI2

    static name: string
    static $gtype: GObject.GType<X11DeviceManagerXI2>

    // Constructors of GdkX11-4.0.GdkX11.X11DeviceManagerXI2

    constructor(config?: X11DeviceManagerXI2_ConstructProps) 
    _init(config?: X11DeviceManagerXI2_ConstructProps): void
}

interface X11DeviceXI2_ConstructProps extends Gdk.Device_ConstructProps {

    // Own constructor properties of GdkX11-4.0.GdkX11.X11DeviceXI2

    device_id?: number | null
}

interface X11DeviceXI2 {

    // Own properties of GdkX11-4.0.GdkX11.X11DeviceXI2

    readonly device_id: number

    // Class property signals of GdkX11-4.0.GdkX11.X11DeviceXI2

    connect(sigName: "notify::device-id", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device-id", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::device-id", ...args: any[]): void
    connect(sigName: "notify::caps-lock-state", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::caps-lock-state", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::caps-lock-state", ...args: any[]): void
    connect(sigName: "notify::direction", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::direction", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::direction", ...args: any[]): void
    connect(sigName: "notify::display", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::display", ...args: any[]): void
    connect(sigName: "notify::has-bidi-layouts", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-bidi-layouts", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-bidi-layouts", ...args: any[]): void
    connect(sigName: "notify::has-cursor", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-cursor", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-cursor", ...args: any[]): void
    connect(sigName: "notify::modifier-state", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::modifier-state", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::modifier-state", ...args: any[]): void
    connect(sigName: "notify::n-axes", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::n-axes", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::n-axes", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::num-lock-state", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::num-lock-state", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::num-lock-state", ...args: any[]): void
    connect(sigName: "notify::num-touches", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::num-touches", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::num-touches", ...args: any[]): void
    connect(sigName: "notify::product-id", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::product-id", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::product-id", ...args: any[]): void
    connect(sigName: "notify::scroll-lock-state", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scroll-lock-state", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scroll-lock-state", ...args: any[]): void
    connect(sigName: "notify::seat", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::seat", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::seat", ...args: any[]): void
    connect(sigName: "notify::source", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::source", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::source", ...args: any[]): void
    connect(sigName: "notify::tool", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tool", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tool", ...args: any[]): void
    connect(sigName: "notify::vendor-id", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vendor-id", callback: (($obj: X11DeviceXI2, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vendor-id", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class X11DeviceXI2 extends Gdk.Device {

    // Own properties of GdkX11-4.0.GdkX11.X11DeviceXI2

    static name: string
    static $gtype: GObject.GType<X11DeviceXI2>

    // Constructors of GdkX11-4.0.GdkX11.X11DeviceXI2

    constructor(config?: X11DeviceXI2_ConstructProps) 
    _init(config?: X11DeviceXI2_ConstructProps): void
}

interface X11Display_ConstructProps extends Gdk.Display_ConstructProps {
}

/**
 * Signal callback interface for `xevent`
 */
interface X11Display_XeventSignalCallback {
    ($obj: X11Display, xevent: object | null): boolean
}

interface X11Display {

    // Owm methods of GdkX11-4.0.GdkX11.X11Display

    /**
     * Pops the error trap pushed by gdk_x11_display_error_trap_push().
     * Will XSync() if necessary and will always block until
     * the error is known to have occurred or not occurred,
     * so the error code can be returned.
     * 
     * If you don’t need to use the return value,
     * gdk_x11_display_error_trap_pop_ignored() would be more efficient.
     */
    error_trap_pop(): number
    /**
     * Pops the error trap pushed by gdk_x11_display_error_trap_push().
     * Does not block to see if an error occurred; merely records the
     * range of requests to ignore errors for, and ignores those errors
     * if they arrive asynchronously.
     */
    error_trap_pop_ignored(): void
    /**
     * Begins a range of X requests on `display` for which X error events
     * will be ignored. Unignored errors (when no trap is pushed) will abort
     * the application. Use gdk_x11_display_error_trap_pop() or
     * gdk_x11_display_error_trap_pop_ignored()to lift a trap pushed
     * with this function.
     */
    error_trap_push(): void
    /**
     * Returns the default group leader surface for all toplevel surfaces
     * on `display`. This surface is implicitly created by GDK.
     * See gdk_x11_surface_set_group().
     */
    get_default_group(): Gdk.Surface
    /**
     * Retrieves the EGL display connection object for the given GDK display.
     * 
     * This function returns `NULL` if GDK is using GLX.
     */
    get_egl_display(): object | null
    /**
     * Retrieves the version of the EGL implementation.
     */
    get_egl_version(): [ /* returnType */ boolean, /* major */ number, /* minor */ number ]
    /**
     * Retrieves the version of the GLX implementation.
     */
    get_glx_version(): [ /* returnType */ boolean, /* major */ number, /* minor */ number ]
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
     */
    get_primary_monitor(): Gdk.Monitor
    /**
     * Retrieves the `GdkX11Screen` of the `display`.
     */
    get_screen(): X11Screen
    /**
     * Gets the startup notification ID for a display.
     */
    get_startup_notification_id(): string

    // Overloads of get_startup_notification_id

    /**
     * Gets the startup notification ID for a Wayland display, or %NULL
     * if no ID has been defined.
     */
    get_startup_notification_id(): string | null
    get_startup_notification_id(...args: any[]): any
    get_startup_notification_id(...args: any[]): string | string | null | any
    /**
     * Returns the timestamp of the last user interaction on
     * `display`. The timestamp is taken from events caused
     * by user interaction such as key presses or pointer
     * movements. See gdk_x11_surface_set_user_time().
     */
    get_user_time(): number
    /**
     * Returns the X cursor belonging to a `GdkCursor`, potentially
     * creating the cursor.
     * 
     * Be aware that the returned cursor may not be unique to `cursor`.
     * It may for example be shared with its fallback cursor. On old
     * X servers that don't support the XCursor extension, all cursors
     * may even fall back to a few default cursors.
     * @param cursor a `GdkCursor`
     */
    get_xcursor(cursor: Gdk.Cursor): xlib.Cursor
    /**
     * Returns the X display of a `GdkDisplay`.
     */
    get_xdisplay(): xlib.Display
    /**
     * Returns the root X window used by `GdkDisplay`.
     */
    get_xrootwindow(): xlib.Window
    /**
     * Returns the X Screen used by `GdkDisplay`.
     */
    get_xscreen(): xlib.Screen
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
    set_cursor_theme(theme: string | null, size: number): void
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
     * @param startup_id the startup notification ID (must be valid utf8)
     */
    set_startup_notification_id(startup_id: string): void
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
    set_surface_scale(scale: number): void
    /**
     * Convert a string from the encoding of the current
     * locale into a form suitable for storing in a window property.
     * @param str a nul-terminated string
     */
    string_to_compound_text(str: string): [ /* returnType */ number, /* encoding */ string, /* format */ number, /* ctext */ Uint8Array ]
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
     */
    text_property_to_text_list(encoding: string, format: number, text: number, length: number, list: string): number
    /**
     * Ungrab `display` after it has been grabbed with
     * gdk_x11_display_grab().
     */
    ungrab(): void
    /**
     * Converts from UTF-8 to compound text.
     * @param str a UTF-8 string
     */
    utf8_to_compound_text(str: string): [ /* returnType */ boolean, /* encoding */ string, /* format */ number, /* ctext */ Uint8Array ]

    // Own signals of GdkX11-4.0.GdkX11.X11Display

    connect(sigName: "xevent", callback: X11Display_XeventSignalCallback): number
    connect_after(sigName: "xevent", callback: X11Display_XeventSignalCallback): number
    emit(sigName: "xevent", xevent: object | null, ...args: any[]): void

    // Class property signals of GdkX11-4.0.GdkX11.X11Display

    connect(sigName: "notify::composited", callback: (($obj: X11Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composited", callback: (($obj: X11Display, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composited", ...args: any[]): void
    connect(sigName: "notify::input-shapes", callback: (($obj: X11Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::input-shapes", callback: (($obj: X11Display, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::input-shapes", ...args: any[]): void
    connect(sigName: "notify::rgba", callback: (($obj: X11Display, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rgba", callback: (($obj: X11Display, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rgba", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class X11Display extends Gdk.Display {

    // Own properties of GdkX11-4.0.GdkX11.X11Display

    static name: string
    static $gtype: GObject.GType<X11Display>

    // Constructors of GdkX11-4.0.GdkX11.X11Display

    constructor(config?: X11Display_ConstructProps) 
    _init(config?: X11Display_ConstructProps): void
    /**
     * Tries to open a new display to the X server given by
     * `display_name`. If opening the display fails, %NULL is
     * returned.
     * @param display_name name of the X display.   See the XOpenDisplay() for details.
     */
    static open(display_name: string | null): Gdk.Display | null

    // Overloads of open

    /**
     * Opens a display.
     * 
     * If opening the display fails, `NULL` is returned.
     * @param display_name the name of the display to open
     */
    static open(display_name: string): Gdk.Display | null
    static open(...args: any[]): any
    static open(args_or_display_name: any[] | string): Gdk.Display | null | any
    /**
     * Sets the program class.
     * 
     * The X11 backend uses the program class to set the class name part
     * of the `WM_CLASS` property on toplevel windows; see the ICCCM.
     * @param display a `GdkDisplay`
     * @param program_class a string
     */
    static set_program_class(display: Gdk.Display, program_class: string): void
}

interface X11Drag_ConstructProps extends Gdk.Drag_ConstructProps {
}

interface X11Drag {

    // Class property signals of GdkX11-4.0.GdkX11.X11Drag

    connect(sigName: "notify::actions", callback: (($obj: X11Drag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::actions", callback: (($obj: X11Drag, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::actions", ...args: any[]): void
    connect(sigName: "notify::content", callback: (($obj: X11Drag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::content", callback: (($obj: X11Drag, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::device", callback: (($obj: X11Drag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::device", callback: (($obj: X11Drag, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::device", ...args: any[]): void
    connect(sigName: "notify::display", callback: (($obj: X11Drag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display", callback: (($obj: X11Drag, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::display", ...args: any[]): void
    connect(sigName: "notify::formats", callback: (($obj: X11Drag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::formats", callback: (($obj: X11Drag, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::formats", ...args: any[]): void
    connect(sigName: "notify::selected-action", callback: (($obj: X11Drag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::selected-action", callback: (($obj: X11Drag, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::selected-action", ...args: any[]): void
    connect(sigName: "notify::surface", callback: (($obj: X11Drag, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::surface", callback: (($obj: X11Drag, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::surface", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class X11Drag extends Gdk.Drag {

    // Own properties of GdkX11-4.0.GdkX11.X11Drag

    static name: string
    static $gtype: GObject.GType<X11Drag>

    // Constructors of GdkX11-4.0.GdkX11.X11Drag

    constructor(config?: X11Drag_ConstructProps) 
    _init(config?: X11Drag_ConstructProps): void
}

interface X11GLContext_ConstructProps extends Gdk.GLContext_ConstructProps {
}

interface X11GLContext {

    // Class property signals of GdkX11-4.0.GdkX11.X11GLContext

    connect(sigName: "notify::allowed-apis", callback: (($obj: X11GLContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::allowed-apis", callback: (($obj: X11GLContext, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::allowed-apis", ...args: any[]): void
    connect(sigName: "notify::api", callback: (($obj: X11GLContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::api", callback: (($obj: X11GLContext, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::api", ...args: any[]): void
    connect(sigName: "notify::shared-context", callback: (($obj: X11GLContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::shared-context", callback: (($obj: X11GLContext, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::shared-context", ...args: any[]): void
    connect(sigName: "notify::display", callback: (($obj: X11GLContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display", callback: (($obj: X11GLContext, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::display", ...args: any[]): void
    connect(sigName: "notify::surface", callback: (($obj: X11GLContext, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::surface", callback: (($obj: X11GLContext, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::surface", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class X11GLContext extends Gdk.GLContext {

    // Own properties of GdkX11-4.0.GdkX11.X11GLContext

    static name: string
    static $gtype: GObject.GType<X11GLContext>

    // Constructors of GdkX11-4.0.GdkX11.X11GLContext

    constructor(config?: X11GLContext_ConstructProps) 
    _init(config?: X11GLContext_ConstructProps): void
}

interface X11Monitor_ConstructProps extends Gdk.Monitor_ConstructProps {
}

interface X11Monitor {

    // Owm methods of GdkX11-4.0.GdkX11.X11Monitor

    /**
     * Returns the XID of the Output corresponding to `monitor`.
     */
    get_output(): xlib.XID
    /**
     * Retrieves the size and position of the “work area” on a monitor
     * within the display coordinate space.
     * 
     * The returned geometry is in ”application pixels”, not in ”device pixels”
     * (see [method`Gdk`.Monitor.get_scale_factor]).
     */
    get_workarea(): /* workarea */ Gdk.Rectangle

    // Class property signals of GdkX11-4.0.GdkX11.X11Monitor

    connect(sigName: "notify::connector", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::connector", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::connector", ...args: any[]): void
    connect(sigName: "notify::display", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::display", ...args: any[]): void
    connect(sigName: "notify::geometry", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::geometry", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::geometry", ...args: any[]): void
    connect(sigName: "notify::height-mm", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-mm", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-mm", ...args: any[]): void
    connect(sigName: "notify::manufacturer", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::manufacturer", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::manufacturer", ...args: any[]): void
    connect(sigName: "notify::model", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::model", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::model", ...args: any[]): void
    connect(sigName: "notify::refresh-rate", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::refresh-rate", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::refresh-rate", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::subpixel-layout", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::subpixel-layout", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::subpixel-layout", ...args: any[]): void
    connect(sigName: "notify::valid", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valid", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valid", ...args: any[]): void
    connect(sigName: "notify::width-mm", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-mm", callback: (($obj: X11Monitor, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-mm", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class X11Monitor extends Gdk.Monitor {

    // Own properties of GdkX11-4.0.GdkX11.X11Monitor

    static name: string
    static $gtype: GObject.GType<X11Monitor>

    // Constructors of GdkX11-4.0.GdkX11.X11Monitor

    constructor(config?: X11Monitor_ConstructProps) 
    _init(config?: X11Monitor_ConstructProps): void
}

interface X11Screen_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `window-manager-changed`
 */
interface X11Screen_WindowManagerChangedSignalCallback {
    ($obj: X11Screen): void
}

interface X11Screen {

    // Owm methods of GdkX11-4.0.GdkX11.X11Screen

    /**
     * Returns the current workspace for `screen` when running under a
     * window manager that supports multiple workspaces, as described
     * in the
     * [Extended Window Manager Hints](http://www.freedesktop.org/Standards/wm-spec) specification.
     */
    get_current_desktop(): number
    /**
     * Gets the XID of the specified output/monitor.
     * If the X server does not support version 1.2 of the RANDR
     * extension, 0 is returned.
     * @param monitor_num number of the monitor, between 0 and gdk_screen_get_n_monitors (screen)
     */
    get_monitor_output(monitor_num: number): xlib.XID
    /**
     * Returns the number of workspaces for `screen` when running under a
     * window manager that supports multiple workspaces, as described
     * in the
     * [Extended Window Manager Hints](http://www.freedesktop.org/Standards/wm-spec) specification.
     */
    get_number_of_desktops(): number
    /**
     * Returns the index of a `GdkX11Screen`.
     */
    get_screen_number(): number
    /**
     * Returns the name of the window manager for `screen`.
     */
    get_window_manager_name(): string
    /**
     * Returns the screen of a `GdkX11Screen`.
     */
    get_xscreen(): xlib.Screen
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
     * @param property_name name of the WM property
     */
    supports_net_wm_hint(property_name: string): boolean

    // Own signals of GdkX11-4.0.GdkX11.X11Screen

    connect(sigName: "window-manager-changed", callback: X11Screen_WindowManagerChangedSignalCallback): number
    connect_after(sigName: "window-manager-changed", callback: X11Screen_WindowManagerChangedSignalCallback): number
    emit(sigName: "window-manager-changed", ...args: any[]): void

    // Class property signals of GdkX11-4.0.GdkX11.X11Screen

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class X11Screen extends GObject.Object {

    // Own properties of GdkX11-4.0.GdkX11.X11Screen

    static name: string
    static $gtype: GObject.GType<X11Screen>

    // Constructors of GdkX11-4.0.GdkX11.X11Screen

    constructor(config?: X11Screen_ConstructProps) 
    _init(config?: X11Screen_ConstructProps): void
}

interface X11Surface_ConstructProps extends Gdk.Surface_ConstructProps {
}

interface X11Surface {

    // Owm methods of GdkX11-4.0.GdkX11.X11Surface

    /**
     * Gets the number of the workspace `surface` is on.
     */
    get_desktop(): number
    /**
     * Returns the group this surface belongs to.
     */
    get_group(): Gdk.Surface | null
    /**
     * Returns the X resource (surface) belonging to a `GdkSurface`.
     */
    get_xid(): xlib.Window
    /**
     * Moves the surface to the correct workspace when running under a
     * window manager that supports multiple workspaces, as described
     * in the [Extended Window Manager Hints](http://www.freedesktop.org/Standards/wm-spec) specification.
     * Will not do anything if the surface is already on all workspaces.
     */
    move_to_current_desktop(): void
    /**
     * Moves the surface to the given workspace when running unde a
     * window manager that supports multiple workspaces, as described
     * in the [Extended Window Manager Hints](http://www.freedesktop.org/Standards/wm-spec) specification.
     * @param desktop the number of the workspace to move the surface to
     */
    move_to_desktop(desktop: number): void
    /**
     * This function can be used to disable frame synchronization for a surface.
     * Normally frame synchronziation will be enabled or disabled based on whether
     * the system has a compositor that supports frame synchronization, but if
     * the surface is not directly managed by the window manager, then frame
     * synchronziation may need to be disabled. This is the case for a surface
     * embedded via the XEMBED protocol.
     * @param frame_sync_enabled whether frame-synchronization should be enabled
     */
    set_frame_sync_enabled(frame_sync_enabled: boolean): void
    /**
     * Sets the group leader of `surface` to be `leader`.
     * See the ICCCM for details.
     * @param leader a `GdkSurface`
     */
    set_group(leader: Gdk.Surface): void
    /**
     * Sets a hint on `surface` that pagers should not
     * display it. See the EWMH for details.
     * @param skips_pager %TRUE to skip pagers
     */
    set_skip_pager_hint(skips_pager: boolean): void
    /**
     * Sets a hint on `surface` that taskbars should not
     * display it. See the EWMH for details.
     * @param skips_taskbar %TRUE to skip taskbars
     */
    set_skip_taskbar_hint(skips_taskbar: boolean): void
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
    set_theme_variant(variant: string): void
    /**
     * Sets a hint on `surface` that it needs user attention.
     * See the ICCCM for details.
     * @param urgent %TRUE to indicate urgenct attention needed
     */
    set_urgency_hint(urgent: boolean): void
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
    set_user_time(timestamp: number): void
    /**
     * This function modifies or removes an arbitrary X11 window
     * property of type UTF8_STRING.  If the given `surface` is
     * not a toplevel surface, it is ignored.
     * @param name Property name, will be interned as an X atom
     * @param value Property value, or %NULL to delete
     */
    set_utf8_property(name: string, value: string | null): void

    // Class property signals of GdkX11-4.0.GdkX11.X11Surface

    connect(sigName: "notify::cursor", callback: (($obj: X11Surface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::cursor", callback: (($obj: X11Surface, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::cursor", ...args: any[]): void
    connect(sigName: "notify::display", callback: (($obj: X11Surface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::display", callback: (($obj: X11Surface, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::display", ...args: any[]): void
    connect(sigName: "notify::frame-clock", callback: (($obj: X11Surface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::frame-clock", callback: (($obj: X11Surface, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::frame-clock", ...args: any[]): void
    connect(sigName: "notify::height", callback: (($obj: X11Surface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height", callback: (($obj: X11Surface, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::mapped", callback: (($obj: X11Surface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::mapped", callback: (($obj: X11Surface, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::mapped", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: X11Surface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: X11Surface, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::width", callback: (($obj: X11Surface, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width", callback: (($obj: X11Surface, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class X11Surface extends Gdk.Surface {

    // Own properties of GdkX11-4.0.GdkX11.X11Surface

    static name: string
    static $gtype: GObject.GType<X11Surface>

    // Constructors of GdkX11-4.0.GdkX11.X11Surface

    constructor(config?: X11Surface_ConstructProps) 
    _init(config?: X11Surface_ConstructProps): void
    /**
     * Looks up the `GdkSurface` that wraps the given native window handle.
     * @param display the `GdkDisplay` corresponding to the   window handle
     * @param window an Xlib Window
     */
    static lookup_for_display(display: X11Display, window: xlib.Window): X11Surface
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