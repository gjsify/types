
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './node-gdkx11-2.0-import.d.ts';
    
/**
 * GdkX11-2.0
 */

import type xlib from '@girs/xlib-2.0';
import type Pango from '@girs/pango-1.0';
import type cairo from '@girs/cairo-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Gio from '@girs/gio-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type GModule from '@girs/gmodule-2.0';
import type Gdk from '@girs/gdk-2.0';

export function netWmSupports(property: Gdk.Atom): boolean
/**
 * Converts from a #GdkAtom to the X atom for the default GDK display
 * with the same string value.
 * @param atom A #GdkAtom
 * @returns the X atom corresponding to @atom.
 */
export function x11AtomToXatom(atom: Gdk.Atom): xlib.Atom
/**
 * Converts from a #GdkAtom to the X atom for a #GdkDisplay
 * with the same string value. The special value %GDK_NONE
 * is converted to %None.
 * @param display A #GdkDisplay
 * @param atom A #GdkAtom, or %GDK_NONE
 * @returns the X atom corresponding to @atom, or %None
 */
export function x11AtomToXatomForDisplay(display: Gdk.Display, atom: Gdk.Atom): xlib.Atom
/**
 * Returns the X colormap belonging to a #GdkColormap.
 * @param colormap a #GdkColormap.
 * @returns an Xlib <type>Colormap</type>.
 */
export function x11ColormapGetXcolormap(colormap: Gdk.Colormap): xlib.Colormap
/**
 * Returns the X cursor belonging to a #GdkCursor.
 * @param cursor a #GdkCursor.
 * @returns an Xlib <type>Cursor</type>.
 */
export function x11CursorGetXcursor(cursor: Gdk.Cursor): xlib.Cursor
/**
 * Gets the startup notification ID for a display.
 * @param display a #GdkDisplay
 * @returns the startup notification ID for @display
 */
export function x11DisplayGetStartupNotificationId(display: Gdk.Display): string | null
/**
 * Returns the timestamp of the last user interaction on
 * `display`. The timestamp is taken from events caused
 * by user interaction such as key presses or pointer
 * movements. See gdk_x11_window_set_user_time().
 * @param display a #GdkDisplay
 * @returns the timestamp of the last user interaction
 */
export function x11DisplayGetUserTime(display: Gdk.Display): number
/**
 * Call XGrabServer() on `display`.
 * To ungrab the display again, use gdk_x11_display_ungrab().
 * 
 * gdk_x11_display_grab()/gdk_x11_display_ungrab() calls can be nested.
 * @param display a #GdkDisplay
 */
export function x11DisplayGrab(display: Gdk.Display): void
/**
 * Sets the cursor theme from which the images for cursor
 * should be taken.
 * 
 * If the windowing system supports it, existing cursors created
 * with gdk_cursor_new(), gdk_cursor_new_for_display() and
 * gdk_cursor_new_for_name() are updated to reflect the theme
 * change. Custom cursors constructed with gdk_cursor_new_from_pixmap()
 * or gdk_cursor_new_from_pixbuf() will have to be handled
 * by the application (GTK+ applications can learn about
 * cursor theme changes by listening for change notification
 * for the corresponding #GtkSetting).
 * @param display a #GdkDisplay
 * @param theme the name of the cursor theme to use, or %NULL to unset         a previously set value
 * @param size the cursor size to use, or 0 to keep the previous size
 */
export function x11DisplaySetCursorTheme(display: Gdk.Display, theme: string | null, size: number): void
export function x11DisplayStringToCompoundText(display: Gdk.Display, str: string | null, encoding: Gdk.Atom, format: number, ctext: number, length: number): number
export function x11DisplayTextPropertyToTextList(display: Gdk.Display, encoding: Gdk.Atom, format: number, text: number, length: number, list: string | null): number
/**
 * Ungrab `display` after it has been grabbed with
 * gdk_x11_display_grab().
 * @param display a #GdkDisplay
 */
export function x11DisplayUngrab(display: Gdk.Display): void
export function x11DisplayUtf8ToCompoundText(display: Gdk.Display, str: string | null, encoding: Gdk.Atom, format: number, ctext: number, length: number): boolean
/**
 * Returns the X resource (window or pixmap) belonging to a #GdkDrawable.
 * @param drawable a #GdkDrawable.
 * @returns the ID of @drawable's X resource.
 */
export function x11DrawableGetXid(drawable: Gdk.Drawable): xlib.XID
export function x11FontGetName(font: Gdk.Font): string | null
export function x11FontGetXfont(font: Gdk.Font): any | null
export function x11FreeCompoundText(ctext: number): void
export function x11FreeTextList(list: string | null): void
/**
 * Gets the root window of the default screen
 * (see gdk_x11_get_default_screen()).
 * @returns an Xlib <type>Window</type>.
 */
export function x11GetDefaultRootXwindow(): xlib.Window
/**
 * Gets the default GTK+ screen number.
 * @returns returns the screen number specified by   the --display command line option or the DISPLAY environment   variable when gdk_init() calls XOpenDisplay().
 */
export function x11GetDefaultScreen(): number
export function x11GetServerTime(window: Gdk.Window): number
/**
 * Returns the X atom for GDK's default display corresponding to `atom_name`.
 * This function caches the result, so if called repeatedly it is much
 * faster than XInternAtom(), which is a round trip to the server each time.
 * @param atomName a string
 * @returns a X atom for GDK's default display.
 */
export function x11GetXatomByName(atomName: string | null): xlib.Atom
/**
 * Returns the X atom for a #GdkDisplay corresponding to `atom_name`.
 * This function caches the result, so if called repeatedly it is much
 * faster than XInternAtom(), which is a round trip to the server each time.
 * @param display a #GdkDisplay
 * @param atomName a string
 * @returns a X atom for a #GdkDisplay
 */
export function x11GetXatomByNameForDisplay(display: Gdk.Display, atomName: string | null): xlib.Atom
/**
 * Returns the name of an X atom for GDK's default display. This
 * function is meant mainly for debugging, so for convenience, unlike
 * <function>XAtomName()</function> and gdk_atom_name(), the result
 * doesn't need to be freed. Also, this function will never return %NULL,
 * even if `xatom` is invalid.
 * @param xatom an X atom for GDK's default display
 * @returns name of the X atom; this string is owned by GTK+,   so it shouldn't be modifed or freed.
 */
export function x11GetXatomName(xatom: xlib.Atom): string | null
/**
 * Returns the name of an X atom for its display. This
 * function is meant mainly for debugging, so for convenience, unlike
 * XAtomName() and gdk_atom_name(), the result doesn't need to
 * be freed.
 * @param display the #GdkDisplay where `xatom` is defined
 * @param xatom an X atom
 * @returns name of the X atom; this string is owned by GDK,   so it shouldn't be modifed or freed.
 */
export function x11GetXatomNameForDisplay(display: Gdk.Display, xatom: xlib.Atom): string | null
/**
 * Call gdk_x11_display_grab() on the default display.
 * To ungrab the server again, use gdk_x11_ungrab_server().
 * 
 * gdk_x11_grab_server()/gdk_x11_ungrab_server() calls can be nested.
 */
export function x11GrabServer(): void
export function x11RegisterStandardEventType(display: Gdk.Display, eventBase: number, nEvents: number): void
/**
 * Gets the XID of the specified output/monitor.
 * If the X server does not support version 1.2 of the RANDR
 * extension, 0 is returned.
 * @param screen a #GdkScreen
 * @param monitorNum number of the monitor, between 0 and gdk_screen_get_n_monitors (screen)
 * @returns the XID of the monitor
 */
export function x11ScreenGetMonitorOutput(screen: Gdk.Screen, monitorNum: number): xlib.XID
/**
 * Returns the index of a #GdkScreen.
 * @param screen a #GdkScreen.
 * @returns the position of @screen among the screens of   its display.
 */
export function x11ScreenGetScreenNumber(screen: Gdk.Screen): number
export function x11ScreenGetWindowManagerName(screen: Gdk.Screen): string | null
/**
 * Returns the screen of a #GdkScreen.
 * @param screen a #GdkScreen.
 * @returns an Xlib <type>Screen*</type>
 */
export function x11ScreenGetXscreen(screen: Gdk.Screen): xlib.Screen
/**
 * Looks up the #GdkVisual for a particular screen and X Visual ID.
 * @param screen a #GdkScreen.
 * @param xvisualid an X Visual ID.
 * @returns the #GdkVisual (owned by the screen   object), or %NULL if the visual ID wasn't found.
 */
export function x11ScreenLookupVisual(screen: Gdk.Screen, xvisualid: xlib.VisualID): Gdk.Visual
export function x11ScreenSupportsNetWmHint(screen: Gdk.Screen, property: Gdk.Atom): boolean
/**
 * Sets the <literal>SM_CLIENT_ID</literal> property on the application's leader window so that
 * the window manager can save the application's state using the X11R6 ICCCM
 * session management protocol.
 * 
 * See the X Session Management Library documentation for more information on
 * session management and the Inter-Client Communication Conventions Manual
 * @param smClientId the client id assigned by the session manager when the    connection was opened, or %NULL to remove the property.
 */
export function x11SetSmClientId(smClientId: string | null): void
/**
 * Ungrab the default display after it has been grabbed with
 * gdk_x11_grab_server().
 */
export function x11UngrabServer(): void
/**
 * Moves the window to the correct workspace when running under a
 * window manager that supports multiple workspaces, as described
 * in the <ulink url="http://www.freedesktop.org/Standards/wm-spec">Extended
 * Window Manager Hints</ulink>.  Will not do anything if the
 * window is already on all workspaces.
 * @param window a #GdkWindow
 */
export function x11WindowMoveToCurrentDesktop(window: Gdk.Window): void
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
 * @param window A toplevel #GdkWindow
 * @param timestamp An XServer timestamp to which the property should be set
 */
export function x11WindowSetUserTime(window: Gdk.Window, timestamp: number): void
/**
 * Returns the Gdk object associated with the given X id for the default
 * display.
 * @param xid an X id.
 * @returns the associated Gdk object, which may be a #GdkPixmap,     a #GdkWindow or a #GdkFont or %NULL if no object is associated     with the X id.
 */
export function xidTableLookup(xid: xlib.XID): any | null
/**
 * Returns the GDK object associated with the given X id.
 * @param display the #GdkDisplay.
 * @param xid an X id.
 * @returns the associated Gdk object, which may be a #GdkPixmap,     a #GdkWindow or a #GdkFont or %NULL if no object is associated     with the X id.
 */
export function xidTableLookupForDisplay(display: Gdk.Display, xid: xlib.XID): any | null
// END