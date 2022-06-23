// @ts-nocheck

/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GdkX11-3.0
 */

import type xlib from './xlib-2.0';
import type cairo from './cairo-1.0';
import type Pango from './Pango-1.0';
import type HarfBuzz from './HarfBuzz-0.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type Gio from './Gio-2.0';
import type GdkPixbuf from './GdkPixbuf-2.0';
import type GModule from './GModule-2.0';
import type Gdk from './Gdk-3.0';

export namespace GdkX11 {

/**
 * Converts from a #GdkAtom to the X atom for the default GDK display
 * with the same string value.
 * @param atom A #GdkAtom
 */
function x11AtomToXatom(atom: Gdk.Atom): xlib.Atom
/**
 * Converts from a #GdkAtom to the X atom for a #GdkDisplay
 * with the same string value. The special value %GDK_NONE
 * is converted to %None.
 * @param display A #GdkDisplay
 * @param atom A #GdkAtom, or %GDK_NONE
 */
function x11AtomToXatomForDisplay(display: X11Display, atom: Gdk.Atom): xlib.Atom
/**
 * Returns the device ID as seen by XInput2.
 * 
 * > If gdk_disable_multidevice() has been called, this function
 * > will respectively return 2/3 for the core pointer and keyboard,
 * > (matching the IDs for the Virtual Core Pointer and Keyboard in
 * > XInput 2), but calling this function on any slave devices (i.e.
 * > those managed via XInput 1.x), will return 0.
 * @param device a #GdkDevice
 */
function x11DeviceGetId(device: X11DeviceCore): number
/**
 * Returns the #GdkDevice that wraps the given device ID.
 * @param deviceManager a #GdkDeviceManager
 * @param deviceId a device ID, as understood by the XInput2 protocol
 */
function x11DeviceManagerLookup(deviceManager: X11DeviceManagerCore, deviceId: number): X11DeviceCore | null
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
function x11FreeTextList(list: string): void
/**
 * Gets the root window of the default screen
 * (see gdk_x11_get_default_screen()).
 */
function x11GetDefaultRootXwindow(): xlib.Window
/**
 * Gets the default GTK+ screen number.
 */
function x11GetDefaultScreen(): number
/**
 * Gets the default GTK+ display.
 */
function x11GetDefaultXdisplay(): xlib.Display
/**
 * Used with gdk_window_set_background_pattern() to inherit background from
 * parent window. Useful for imitating transparency when compositing is not
 * available. Otherwise behaves like a transparent pattern.
 */
function x11GetParentRelativePattern(): cairo.Pattern
/**
 * Routine to get the current X server time stamp.
 * @param window a #GdkWindow, used for communication          with the server.  The window must have          GDK_PROPERTY_CHANGE_MASK in its events mask or a hang will          result.
 */
function x11GetServerTime(window: X11Window): number
/**
 * Returns the X atom for GDK’s default display corresponding to `atom_name`.
 * This function caches the result, so if called repeatedly it is much
 * faster than XInternAtom(), which is a round trip to the server each time.
 * @param atomName a string
 */
function x11GetXatomByName(atomName: string): xlib.Atom
/**
 * Returns the X atom for a #GdkDisplay corresponding to `atom_name`.
 * This function caches the result, so if called repeatedly it is much
 * faster than XInternAtom(), which is a round trip to the server each time.
 * @param display a #GdkDisplay
 * @param atomName a string
 */
function x11GetXatomByNameForDisplay(display: X11Display, atomName: string): xlib.Atom
/**
 * Returns the name of an X atom for GDK’s default display. This
 * function is meant mainly for debugging, so for convenience, unlike
 * XAtomName() and gdk_atom_name(), the result
 * doesn’t need to be freed. Also, this function will never return %NULL,
 * even if `xatom` is invalid.
 * @param xatom an X atom for GDK’s default display
 */
function x11GetXatomName(xatom: xlib.Atom): string
/**
 * Returns the name of an X atom for its display. This
 * function is meant mainly for debugging, so for convenience, unlike
 * XAtomName() and gdk_atom_name(), the result doesn’t need to
 * be freed.
 * @param display the #GdkDisplay where `xatom` is defined
 * @param xatom an X atom
 */
function x11GetXatomNameForDisplay(display: X11Display, xatom: xlib.Atom): string
/**
 * Call gdk_x11_display_grab() on the default display.
 * To ungrab the server again, use gdk_x11_ungrab_server().
 * 
 * gdk_x11_grab_server()/gdk_x11_ungrab_server() calls can be nested.
 */
function x11GrabServer(): void
/**
 * Find the #GdkDisplay corresponding to `xdisplay,` if any exists.
 * @param xdisplay a pointer to an X Display
 */
function x11LookupXdisplay(xdisplay: xlib.Display): X11Display
/**
 * Registers interest in receiving extension events with type codes
 * between `event_base` and `event_base + n_events - 1`.
 * The registered events must have the window field in the same place
 * as core X events (this is not the case for e.g. XKB extension events).
 * 
 * If an event type is registered, events of this type will go through
 * global and window-specific filters (see gdk_window_add_filter()).
 * Unregistered events will only go through global filters.
 * GDK may register the events of some X extensions on its own.
 * 
 * This function should only be needed in unusual circumstances, e.g.
 * when filtering XInput extension events on the root window.
 * @param display a #GdkDisplay
 * @param eventBase first event type code to register
 * @param nEvents number of event type codes to register
 */
function x11RegisterStandardEventType(display: X11Display, eventBase: number, nEvents: number): void
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
/**
 * Ungrab the default display after it has been grabbed with
 * gdk_x11_grab_server().
 */
function x11UngrabServer(): void
/**
 * Convert from an X atom for the default display to the corresponding
 * #GdkAtom.
 * @param xatom an X atom for the default GDK display
 */
function x11XatomToAtom(xatom: xlib.Atom): Gdk.Atom
/**
 * Convert from an X atom for a #GdkDisplay to the corresponding
 * #GdkAtom.
 * @param display A #GdkDisplay
 * @param xatom an X atom
 */
function x11XatomToAtomForDisplay(display: X11Display, xatom: xlib.Atom): Gdk.Atom
interface X11AppLaunchContext_ConstructProps extends Gdk.AppLaunchContext_ConstructProps {
}

interface X11AppLaunchContext {

    // Class property signals of GdkX11-3.0.GdkX11.X11AppLaunchContext

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

    // Own properties of GdkX11-3.0.GdkX11.X11AppLaunchContext

    static name: string
    static $gtype: GObject.GType<X11AppLaunchContext>

    // Constructors of GdkX11-3.0.GdkX11.X11AppLaunchContext

    constructor(config?: X11AppLaunchContext_ConstructProps) 
    _init(config?: X11AppLaunchContext_ConstructProps): void

    // Conflicting static methods

    static new(...args: any[]): any
}

interface X11Cursor_ConstructProps extends Gdk.Cursor_ConstructProps {
}

interface X11Cursor {

    // Owm methods of GdkX11-3.0.GdkX11.X11Cursor

    /**
     * Returns the X cursor belonging to a #GdkCursor.
     */
    getXcursor(): xlib.Cursor
    /**
     * Returns the display of a #GdkCursor.
     */
    getXdisplay(): xlib.Display

    // Conflicting methods

    ref(...args: any[]): any

    // Class property signals of GdkX11-3.0.GdkX11.X11Cursor

    connect(sigName: "notify::cursor-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::cursor-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::cursor-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::cursor-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::cursor-type", ...args: any[]): void
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

class X11Cursor extends Gdk.Cursor {

    // Own properties of GdkX11-3.0.GdkX11.X11Cursor

    static name: string
    static $gtype: GObject.GType<X11Cursor>

    // Constructors of GdkX11-3.0.GdkX11.X11Cursor

    constructor(config?: X11Cursor_ConstructProps) 
    _init(config?: X11Cursor_ConstructProps): void
}

interface X11DeviceCore_ConstructProps extends Gdk.Device_ConstructProps {
}

interface X11DeviceCore {

    // Class property signals of GdkX11-3.0.GdkX11.X11DeviceCore

    connect(sigName: "notify::associated-device", callback: (...args: any[]) => void): number
    on(sigName: "notify::associated-device", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::associated-device", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::associated-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::associated-device", ...args: any[]): void
    connect(sigName: "notify::axes", callback: (...args: any[]) => void): number
    on(sigName: "notify::axes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::axes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::axes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::axes", ...args: any[]): void
    connect(sigName: "notify::device-manager", callback: (...args: any[]) => void): number
    on(sigName: "notify::device-manager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::device-manager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::device-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::device-manager", ...args: any[]): void
    connect(sigName: "notify::display", callback: (...args: any[]) => void): number
    on(sigName: "notify::display", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::display", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::display", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::display", ...args: any[]): void
    connect(sigName: "notify::has-cursor", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-cursor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-cursor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-cursor", ...args: any[]): void
    connect(sigName: "notify::input-mode", callback: (...args: any[]) => void): number
    on(sigName: "notify::input-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::input-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::input-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::input-mode", ...args: any[]): void
    connect(sigName: "notify::input-source", callback: (...args: any[]) => void): number
    on(sigName: "notify::input-source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::input-source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::input-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::input-source", ...args: any[]): void
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
    connect(sigName: "notify::seat", callback: (...args: any[]) => void): number
    on(sigName: "notify::seat", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::seat", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::seat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::seat", ...args: any[]): void
    connect(sigName: "notify::tool", callback: (...args: any[]) => void): number
    on(sigName: "notify::tool", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tool", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tool", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tool", ...args: any[]): void
    connect(sigName: "notify::type", callback: (...args: any[]) => void): number
    on(sigName: "notify::type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::type", ...args: any[]): void
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

class X11DeviceCore extends Gdk.Device {

    // Own properties of GdkX11-3.0.GdkX11.X11DeviceCore

    static name: string
    static $gtype: GObject.GType<X11DeviceCore>

    // Constructors of GdkX11-3.0.GdkX11.X11DeviceCore

    constructor(config?: X11DeviceCore_ConstructProps) 
    _init(config?: X11DeviceCore_ConstructProps): void
}

interface X11DeviceManagerCore_ConstructProps extends Gdk.DeviceManager_ConstructProps {
}

interface X11DeviceManagerCore {

    // Class property signals of GdkX11-3.0.GdkX11.X11DeviceManagerCore

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

class X11DeviceManagerCore extends Gdk.DeviceManager {

    // Own properties of GdkX11-3.0.GdkX11.X11DeviceManagerCore

    static name: string
    static $gtype: GObject.GType<X11DeviceManagerCore>

    // Constructors of GdkX11-3.0.GdkX11.X11DeviceManagerCore

    constructor(config?: X11DeviceManagerCore_ConstructProps) 
    _init(config?: X11DeviceManagerCore_ConstructProps): void
}

interface X11DeviceManagerXI2_ConstructProps extends X11DeviceManagerCore_ConstructProps {

    // Own constructor properties of GdkX11-3.0.GdkX11.X11DeviceManagerXI2

    major?: number | null
    minor?: number | null
    opcode?: number | null
}

interface X11DeviceManagerXI2 {

    // Own properties of GdkX11-3.0.GdkX11.X11DeviceManagerXI2

    readonly major: number
    readonly minor: number
    readonly opcode: number

    // Class property signals of GdkX11-3.0.GdkX11.X11DeviceManagerXI2

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

class X11DeviceManagerXI2 extends X11DeviceManagerCore {

    // Own properties of GdkX11-3.0.GdkX11.X11DeviceManagerXI2

    static name: string
    static $gtype: GObject.GType<X11DeviceManagerXI2>

    // Constructors of GdkX11-3.0.GdkX11.X11DeviceManagerXI2

    constructor(config?: X11DeviceManagerXI2_ConstructProps) 
    _init(config?: X11DeviceManagerXI2_ConstructProps): void
}

interface X11DeviceXI2_ConstructProps extends Gdk.Device_ConstructProps {

    // Own constructor properties of GdkX11-3.0.GdkX11.X11DeviceXI2

    deviceId?: number | null
}

interface X11DeviceXI2 {

    // Own properties of GdkX11-3.0.GdkX11.X11DeviceXI2

    readonly deviceId: number

    // Class property signals of GdkX11-3.0.GdkX11.X11DeviceXI2

    connect(sigName: "notify::device-id", callback: (...args: any[]) => void): number
    on(sigName: "notify::device-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::device-id", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::device-id", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::device-id", ...args: any[]): void
    connect(sigName: "notify::associated-device", callback: (...args: any[]) => void): number
    on(sigName: "notify::associated-device", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::associated-device", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::associated-device", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::associated-device", ...args: any[]): void
    connect(sigName: "notify::axes", callback: (...args: any[]) => void): number
    on(sigName: "notify::axes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::axes", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::axes", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::axes", ...args: any[]): void
    connect(sigName: "notify::device-manager", callback: (...args: any[]) => void): number
    on(sigName: "notify::device-manager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::device-manager", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::device-manager", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::device-manager", ...args: any[]): void
    connect(sigName: "notify::display", callback: (...args: any[]) => void): number
    on(sigName: "notify::display", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::display", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::display", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::display", ...args: any[]): void
    connect(sigName: "notify::has-cursor", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-cursor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-cursor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-cursor", ...args: any[]): void
    connect(sigName: "notify::input-mode", callback: (...args: any[]) => void): number
    on(sigName: "notify::input-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::input-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::input-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::input-mode", ...args: any[]): void
    connect(sigName: "notify::input-source", callback: (...args: any[]) => void): number
    on(sigName: "notify::input-source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::input-source", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::input-source", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::input-source", ...args: any[]): void
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
    connect(sigName: "notify::seat", callback: (...args: any[]) => void): number
    on(sigName: "notify::seat", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::seat", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::seat", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::seat", ...args: any[]): void
    connect(sigName: "notify::tool", callback: (...args: any[]) => void): number
    on(sigName: "notify::tool", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tool", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tool", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tool", ...args: any[]): void
    connect(sigName: "notify::type", callback: (...args: any[]) => void): number
    on(sigName: "notify::type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::type", ...args: any[]): void
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

    // Own properties of GdkX11-3.0.GdkX11.X11DeviceXI2

    static name: string
    static $gtype: GObject.GType<X11DeviceXI2>

    // Constructors of GdkX11-3.0.GdkX11.X11DeviceXI2

    constructor(config?: X11DeviceXI2_ConstructProps) 
    _init(config?: X11DeviceXI2_ConstructProps): void
}

interface X11Display_ConstructProps extends Gdk.Display_ConstructProps {
}

interface X11Display {

    // Owm methods of GdkX11-3.0.GdkX11.X11Display

    /**
     * Pops the error trap pushed by gdk_x11_display_error_trap_push().
     * Will XSync() if necessary and will always block until
     * the error is known to have occurred or not occurred,
     * so the error code can be returned.
     * 
     * If you don’t need to use the return value,
     * gdk_x11_display_error_trap_pop_ignored() would be more efficient.
     * 
     * See gdk_error_trap_pop() for the all-displays-at-once
     * equivalent.
     */
    errorTrapPop(): number
    /**
     * Pops the error trap pushed by gdk_x11_display_error_trap_push().
     * Does not block to see if an error occurred; merely records the
     * range of requests to ignore errors for, and ignores those errors
     * if they arrive asynchronously.
     * 
     * See gdk_error_trap_pop_ignored() for the all-displays-at-once
     * equivalent.
     */
    errorTrapPopIgnored(): void
    /**
     * Begins a range of X requests on `display` for which X error events
     * will be ignored. Unignored errors (when no trap is pushed) will abort
     * the application. Use gdk_x11_display_error_trap_pop() or
     * gdk_x11_display_error_trap_pop_ignored()to lift a trap pushed
     * with this function.
     * 
     * See also gdk_error_trap_push() to push a trap on all displays.
     */
    errorTrapPush(): void
    /**
     * Gets the startup notification ID for a display.
     */
    getStartupNotificationId(): string
    /**
     * Returns the timestamp of the last user interaction on
     * `display`. The timestamp is taken from events caused
     * by user interaction such as key presses or pointer
     * movements. See gdk_x11_window_set_user_time().
     */
    getUserTime(): number
    /**
     * Returns the X display of a #GdkDisplay.
     */
    getXdisplay(): xlib.Display
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
     * with gdk_cursor_new(), gdk_cursor_new_for_display() and
     * gdk_cursor_new_from_name() are updated to reflect the theme
     * change. Custom cursors constructed with
     * gdk_cursor_new_from_pixbuf() will have to be handled
     * by the application (GTK+ applications can learn about
     * cursor theme changes by listening for change notification
     * for the corresponding #GtkSetting).
     * @param theme the name of the cursor theme to use, or %NULL to unset         a previously set value
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
     * gdk_notify_startup_complete()).
     * @param startupId the startup notification ID (must be valid utf8)
     */
    setStartupNotificationId(startupId: string): void
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
    setWindowScale(scale: number): void
    /**
     * Convert a string from the encoding of the current
     * locale into a form suitable for storing in a window property.
     * @param str a nul-terminated string
     */
    stringToCompoundText(str: string): [ /* returnType */ number, /* encoding */ Gdk.Atom, /* format */ number, /* ctext */ Uint8Array ]
    /**
     * Convert a text string from the encoding as it is stored
     * in a property into an array of strings in the encoding of
     * the current locale. (The elements of the array represent the
     * nul-separated elements of the original text string.)
     * @param encoding an atom representing the encoding. The most    common values for this are STRING, or COMPOUND_TEXT.    This is value used as the type for the property
     * @param format the format of the property
     * @param text The text data
     * @param length The number of items to transform
     * @param list location to store an  array of strings in    the encoding of the current locale. This array should be    freed using gdk_free_text_list().
     */
    textPropertyToTextList(encoding: Gdk.Atom, format: number, text: number, length: number, list: string): number
    /**
     * Ungrab `display` after it has been grabbed with
     * gdk_x11_display_grab().
     */
    ungrab(): void
    /**
     * Converts from UTF-8 to compound text.
     * @param str a UTF-8 string
     */
    utf8ToCompoundText(str: string): [ /* returnType */ boolean, /* encoding */ Gdk.Atom, /* format */ number, /* ctext */ Uint8Array ]

    // Class property signals of GdkX11-3.0.GdkX11.X11Display

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class X11Display extends Gdk.Display {

    // Own properties of GdkX11-3.0.GdkX11.X11Display

    static name: string
    static $gtype: GObject.GType<X11Display>

    // Constructors of GdkX11-3.0.GdkX11.X11Display

    constructor(config?: X11Display_ConstructProps) 
    _init(config?: X11Display_ConstructProps): void
    /**
     * Retrieves the version of the GLX implementation.
     * @param display a #GdkDisplay
     */
    static getGlxVersion(display: Gdk.Display): [ /* returnType */ boolean, /* major */ number, /* minor */ number ]
}

interface X11DisplayManager_ConstructProps extends Gdk.DisplayManager_ConstructProps {
}

interface X11DisplayManager {

    // Class property signals of GdkX11-3.0.GdkX11.X11DisplayManager

    connect(sigName: "notify::default-display", callback: (...args: any[]) => void): number
    on(sigName: "notify::default-display", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::default-display", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::default-display", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::default-display", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class X11DisplayManager extends Gdk.DisplayManager {

    // Own properties of GdkX11-3.0.GdkX11.X11DisplayManager

    static name: string
    static $gtype: GObject.GType<X11DisplayManager>

    // Constructors of GdkX11-3.0.GdkX11.X11DisplayManager

    constructor(config?: X11DisplayManager_ConstructProps) 
    _init(config?: X11DisplayManager_ConstructProps): void
}

interface X11DragContext_ConstructProps extends Gdk.DragContext_ConstructProps {
}

interface X11DragContext {

    // Class property signals of GdkX11-3.0.GdkX11.X11DragContext

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class X11DragContext extends Gdk.DragContext {

    // Own properties of GdkX11-3.0.GdkX11.X11DragContext

    static name: string
    static $gtype: GObject.GType<X11DragContext>

    // Constructors of GdkX11-3.0.GdkX11.X11DragContext

    constructor(config?: X11DragContext_ConstructProps) 
    _init(config?: X11DragContext_ConstructProps): void
}

interface X11GLContext_ConstructProps extends Gdk.GLContext_ConstructProps {
}

interface X11GLContext {

    // Class property signals of GdkX11-3.0.GdkX11.X11GLContext

    connect(sigName: "notify::display", callback: (...args: any[]) => void): number
    on(sigName: "notify::display", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::display", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::display", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::display", ...args: any[]): void
    connect(sigName: "notify::shared-context", callback: (...args: any[]) => void): number
    on(sigName: "notify::shared-context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::shared-context", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::shared-context", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::shared-context", ...args: any[]): void
    connect(sigName: "notify::window", callback: (...args: any[]) => void): number
    on(sigName: "notify::window", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::window", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class X11GLContext extends Gdk.GLContext {

    // Own properties of GdkX11-3.0.GdkX11.X11GLContext

    static name: string
    static $gtype: GObject.GType<X11GLContext>

    // Constructors of GdkX11-3.0.GdkX11.X11GLContext

    constructor(config?: X11GLContext_ConstructProps) 
    _init(config?: X11GLContext_ConstructProps): void
}

interface X11Keymap_ConstructProps extends Gdk.Keymap_ConstructProps {
}

interface X11Keymap {

    // Owm methods of GdkX11-3.0.GdkX11.X11Keymap

    /**
     * Extracts the group from the state field sent in an X Key event.
     * This is only needed for code processing raw X events, since #GdkEventKey
     * directly includes an is_modifier field.
     * @param state raw state returned from X
     */
    getGroupForState(state: number): number
    /**
     * Determines whether a particular key code represents a key that
     * is a modifier. That is, it’s a key that normally just affects
     * the keyboard state and the behavior of other keys rather than
     * producing a direct effect itself. This is only needed for code
     * processing raw X events, since #GdkEventKey directly includes
     * an is_modifier field.
     * @param keycode the hardware keycode from a key event
     */
    keyIsModifier(keycode: number): boolean

    // Class property signals of GdkX11-3.0.GdkX11.X11Keymap

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class X11Keymap extends Gdk.Keymap {

    // Own properties of GdkX11-3.0.GdkX11.X11Keymap

    static name: string
    static $gtype: GObject.GType<X11Keymap>

    // Constructors of GdkX11-3.0.GdkX11.X11Keymap

    constructor(config?: X11Keymap_ConstructProps) 
    _init(config?: X11Keymap_ConstructProps): void
}

interface X11Monitor_ConstructProps extends Gdk.Monitor_ConstructProps {
}

interface X11Monitor {

    // Class property signals of GdkX11-3.0.GdkX11.X11Monitor

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
    connect(sigName: "notify::width-mm", callback: (...args: any[]) => void): number
    on(sigName: "notify::width-mm", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::width-mm", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::width-mm", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::width-mm", ...args: any[]): void
    connect(sigName: "notify::workarea", callback: (...args: any[]) => void): number
    on(sigName: "notify::workarea", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::workarea", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::workarea", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::workarea", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class X11Monitor extends Gdk.Monitor {

    // Own properties of GdkX11-3.0.GdkX11.X11Monitor

    static name: string
    static $gtype: GObject.GType<X11Monitor>

    // Constructors of GdkX11-3.0.GdkX11.X11Monitor

    constructor(config?: X11Monitor_ConstructProps) 
    _init(config?: X11Monitor_ConstructProps): void
    static getOutput(monitor: Gdk.Monitor): xlib.XID
}

interface X11Screen_ConstructProps extends Gdk.Screen_ConstructProps {
}

/**
 * Signal callback interface for `window-manager-changed`
 */
interface X11Screen_WindowManagerChangedSignalCallback {
    (): void
}

interface X11Screen {

    // Owm methods of GdkX11-3.0.GdkX11.X11Screen

    /**
     * Returns the current workspace for `screen` when running under a
     * window manager that supports multiple workspaces, as described
     * in the
     * [Extended Window Manager Hints](http://www.freedesktop.org/Standards/wm-spec) specification.
     */
    getCurrentDesktop(): number
    /**
     * Gets the XID of the specified output/monitor.
     * If the X server does not support version 1.2 of the RANDR
     * extension, 0 is returned.
     * @param monitorNum number of the monitor, between 0 and gdk_screen_get_n_monitors (screen)
     */
    getMonitorOutput(monitorNum: number): xlib.XID
    /**
     * Returns the number of workspaces for `screen` when running under a
     * window manager that supports multiple workspaces, as described
     * in the
     * [Extended Window Manager Hints](http://www.freedesktop.org/Standards/wm-spec) specification.
     */
    getNumberOfDesktops(): number
    /**
     * Returns the index of a #GdkScreen.
     */
    getScreenNumber(): number
    /**
     * Returns the name of the window manager for `screen`.
     */
    getWindowManagerName(): string
    /**
     * Returns the screen of a #GdkScreen.
     */
    getXscreen(): xlib.Screen
    /**
     * Looks up the #GdkVisual for a particular screen and X Visual ID.
     * @param xvisualid an X Visual ID.
     */
    lookupVisual(xvisualid: xlib.VisualID): X11Visual
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
     * You can monitor the window_manager_changed signal on #GdkScreen to detect
     * a window manager change.
     * @param property a property atom.
     */
    supportsNetWmHint(property: Gdk.Atom): boolean

    // Own signals of GdkX11-3.0.GdkX11.X11Screen

    connect(sigName: "window-manager-changed", callback: X11Screen_WindowManagerChangedSignalCallback): number
    on(sigName: "window-manager-changed", callback: X11Screen_WindowManagerChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "window-manager-changed", callback: X11Screen_WindowManagerChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "window-manager-changed", callback: X11Screen_WindowManagerChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "window-manager-changed", ...args: any[]): void

    // Class property signals of GdkX11-3.0.GdkX11.X11Screen

    connect(sigName: "notify::font-options", callback: (...args: any[]) => void): number
    on(sigName: "notify::font-options", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::font-options", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::font-options", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::font-options", ...args: any[]): void
    connect(sigName: "notify::resolution", callback: (...args: any[]) => void): number
    on(sigName: "notify::resolution", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::resolution", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::resolution", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::resolution", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class X11Screen extends Gdk.Screen {

    // Own properties of GdkX11-3.0.GdkX11.X11Screen

    static name: string
    static $gtype: GObject.GType<X11Screen>

    // Constructors of GdkX11-3.0.GdkX11.X11Screen

    constructor(config?: X11Screen_ConstructProps) 
    _init(config?: X11Screen_ConstructProps): void
}

interface X11Visual_ConstructProps extends Gdk.Visual_ConstructProps {
}

interface X11Visual {

    // Owm methods of GdkX11-3.0.GdkX11.X11Visual

    /**
     * Returns the X visual belonging to a #GdkVisual.
     */
    getXvisual(): xlib.Visual

    // Class property signals of GdkX11-3.0.GdkX11.X11Visual

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class X11Visual extends Gdk.Visual {

    // Own properties of GdkX11-3.0.GdkX11.X11Visual

    static name: string
    static $gtype: GObject.GType<X11Visual>

    // Constructors of GdkX11-3.0.GdkX11.X11Visual

    constructor(config?: X11Visual_ConstructProps) 
    _init(config?: X11Visual_ConstructProps): void
}

interface X11Window_ConstructProps extends Gdk.Window_ConstructProps {
}

interface X11Window {

    // Owm methods of GdkX11-3.0.GdkX11.X11Window

    /**
     * Gets the number of the workspace `window` is on.
     */
    getDesktop(): number
    /**
     * Returns the X resource (window) belonging to a #GdkWindow.
     */
    getXid(): xlib.Window
    /**
     * Moves the window to the correct workspace when running under a
     * window manager that supports multiple workspaces, as described
     * in the [Extended Window Manager Hints](http://www.freedesktop.org/Standards/wm-spec) specification.
     * Will not do anything if the window is already on all workspaces.
     */
    moveToCurrentDesktop(): void
    /**
     * Moves the window to the given workspace when running unde a
     * window manager that supports multiple workspaces, as described
     * in the [Extended Window Manager Hints](http://www.freedesktop.org/Standards/wm-spec) specification.
     * @param desktop the number of the workspace to move the window to
     */
    moveToDesktop(desktop: number): void
    /**
     * This is the same as gdk_window_set_shadow_width() but it only works
     * on GdkX11Window.
     * @param left The left extent
     * @param right The right extent
     * @param top The top extent
     * @param bottom The bottom extent
     */
    setFrameExtents(left: number, right: number, top: number, bottom: number): void
    /**
     * This function can be used to disable frame synchronization for a window.
     * Normally frame synchronziation will be enabled or disabled based on whether
     * the system has a compositor that supports frame synchronization, but if
     * the window is not directly managed by the window manager, then frame
     * synchronziation may need to be disabled. This is the case for a window
     * embedded via the XEMBED protocol.
     * @param frameSyncEnabled whether frame-synchronization should be enabled
     */
    setFrameSyncEnabled(frameSyncEnabled: boolean): void
    /**
     * Set a hint for the window manager, requesting that the titlebar
     * should be hidden when the window is maximized.
     * 
     * Note that this property is automatically updated by GTK+, so this
     * function should only be used by applications which do not use GTK+
     * to create toplevel windows.
     * @param hideTitlebarWhenMaximized whether to hide the titlebar when                                maximized
     */
    setHideTitlebarWhenMaximized(hideTitlebarWhenMaximized: boolean): void
    /**
     * GTK+ applications can request a dark theme variant. In order to
     * make other applications - namely window managers using GTK+ for
     * themeing - aware of this choice, GTK+ uses this function to
     * export the requested theme variant as _GTK_THEME_VARIANT property
     * on toplevel windows.
     * 
     * Note that this property is automatically updated by GTK+, so this
     * function should only be used by applications which do not use GTK+
     * to create toplevel windows.
     * @param variant the theme variant to export
     */
    setThemeVariant(variant: string): void
    /**
     * The application can use this call to update the _NET_WM_USER_TIME
     * property on a toplevel window.  This property stores an Xserver
     * time which represents the time of the last user input event
     * received for this window.  This property may be used by the window
     * manager to alter the focus, stacking, and/or placement behavior of
     * windows when they are mapped depending on whether the new window
     * was created by a user action or is a "pop-up" window activated by a
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
     * property of type UTF8_STRING.  If the given `window` is
     * not a toplevel window, it is ignored.
     * @param name Property name, will be interned as an X atom
     * @param value Property value, or %NULL to delete
     */
    setUtf8Property(name: string, value: string | null): void

    // Class property signals of GdkX11-3.0.GdkX11.X11Window

    connect(sigName: "notify::cursor", callback: (...args: any[]) => void): number
    on(sigName: "notify::cursor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::cursor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::cursor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::cursor", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
}

class X11Window extends Gdk.Window {

    // Own properties of GdkX11-3.0.GdkX11.X11Window

    static name: string
    static $gtype: GObject.GType<X11Window>

    // Constructors of GdkX11-3.0.GdkX11.X11Window

    constructor(config?: X11Window_ConstructProps) 
    /**
     * Wraps a native window in a #GdkWindow. The function will try to
     * look up the window using gdk_x11_window_lookup_for_display() first.
     * If it does not find it there, it will create a new window.
     * 
     * This may fail if the window has been destroyed. If the window
     * was already known to GDK, a new reference to the existing
     * #GdkWindow is returned.
     * @constructor 
     * @param display the #GdkDisplay where the window handle comes from.
     * @param window an Xlib Window
     */
    static foreignNewForDisplay(display: X11Display, window: xlib.Window): X11Window
    _init(config?: X11Window_ConstructProps): void
    /**
     * Looks up the #GdkWindow that wraps the given native window handle.
     * @param display the #GdkDisplay corresponding to the           window handle
     * @param window an Xlib Window
     */
    static lookupForDisplay(display: X11Display, window: xlib.Window): X11Window
}

interface X11AppLaunchContextClass {
}

abstract class X11AppLaunchContextClass {

    // Own properties of GdkX11-3.0.GdkX11.X11AppLaunchContextClass

    static name: string
}

interface X11CursorClass {
}

abstract class X11CursorClass {

    // Own properties of GdkX11-3.0.GdkX11.X11CursorClass

    static name: string
}

interface X11DeviceCoreClass {
}

abstract class X11DeviceCoreClass {

    // Own properties of GdkX11-3.0.GdkX11.X11DeviceCoreClass

    static name: string
}

interface X11DeviceManagerCoreClass {
}

abstract class X11DeviceManagerCoreClass {

    // Own properties of GdkX11-3.0.GdkX11.X11DeviceManagerCoreClass

    static name: string
}

interface X11DeviceManagerXI2Class {
}

abstract class X11DeviceManagerXI2Class {

    // Own properties of GdkX11-3.0.GdkX11.X11DeviceManagerXI2Class

    static name: string
}

interface X11DeviceXI2Class {
}

abstract class X11DeviceXI2Class {

    // Own properties of GdkX11-3.0.GdkX11.X11DeviceXI2Class

    static name: string
}

interface X11DisplayClass {
}

abstract class X11DisplayClass {

    // Own properties of GdkX11-3.0.GdkX11.X11DisplayClass

    static name: string
}

interface X11DisplayManagerClass {
}

abstract class X11DisplayManagerClass {

    // Own properties of GdkX11-3.0.GdkX11.X11DisplayManagerClass

    static name: string
}

interface X11DragContextClass {
}

abstract class X11DragContextClass {

    // Own properties of GdkX11-3.0.GdkX11.X11DragContextClass

    static name: string
}

interface X11GLContextClass {
}

abstract class X11GLContextClass {

    // Own properties of GdkX11-3.0.GdkX11.X11GLContextClass

    static name: string
}

interface X11KeymapClass {
}

abstract class X11KeymapClass {

    // Own properties of GdkX11-3.0.GdkX11.X11KeymapClass

    static name: string
}

interface X11MonitorClass {
}

abstract class X11MonitorClass {

    // Own properties of GdkX11-3.0.GdkX11.X11MonitorClass

    static name: string
}

interface X11ScreenClass {
}

abstract class X11ScreenClass {

    // Own properties of GdkX11-3.0.GdkX11.X11ScreenClass

    static name: string
}

interface X11VisualClass {
}

abstract class X11VisualClass {

    // Own properties of GdkX11-3.0.GdkX11.X11VisualClass

    static name: string
}

interface X11WindowClass {
}

abstract class X11WindowClass {

    // Own properties of GdkX11-3.0.GdkX11.X11WindowClass

    static name: string
}

}
export default GdkX11;