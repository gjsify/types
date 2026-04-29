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
import type Pango from '@girs/pango-1.0';
import type cairo from 'cairo';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type Gdk from '@girs/gdk-2.0';

export namespace GdkX11 {
    /**
     * GdkX11-2.0
     */

    /**
     * @param property
     */
    function net_wm_supports(property: Gdk.Atom): boolean;
    /**
     * Converts from a {@link Gdk.Atom} to the X atom for the default GDK display
     * with the same string value.
     * @param atom A {@link Gdk.Atom}
     * @returns the X atom corresponding to `atom`.
     */
    function x11_atom_to_xatom(atom: Gdk.Atom): xlib.Atom;
    /**
     * Converts from a {@link Gdk.Atom} to the X atom for a {@link Gdk.Display}
     * with the same string value. The special value `GDK_NONE`
     * is converted to %None.
     * @param display A {@link Gdk.Display}
     * @param atom A {@link Gdk.Atom}, or `GDK_NONE`
     * @returns the X atom corresponding to `atom`, or %None
     * @since 2.2
     */
    function x11_atom_to_xatom_for_display(display: Gdk.Display, atom: Gdk.Atom): xlib.Atom;
    /**
     * Returns the X colormap belonging to a {@link Gdk.Colormap}.
     * @param colormap a {@link Gdk.Colormap}.
     * @returns an Xlib <type>Colormap</type>.
     */
    function x11_colormap_get_xcolormap(colormap: Gdk.Colormap): xlib.Colormap;
    /**
     * Returns the X cursor belonging to a {@link Gdk.Cursor}.
     * @param cursor a {@link Gdk.Cursor}.
     * @returns an Xlib <type>Cursor</type>.
     */
    function x11_cursor_get_xcursor(cursor: Gdk.Cursor): xlib.Cursor;
    /**
     * Gets the startup notification ID for a display.
     * @param display a {@link Gdk.Display}
     * @returns the startup notification ID for `display`
     * @since 2.12
     */
    function x11_display_get_startup_notification_id(display: Gdk.Display): string;
    /**
     * Returns the timestamp of the last user interaction on
     * `display`. The timestamp is taken from events caused
     * by user interaction such as key presses or pointer
     * movements. See `gdk_x11_window_set_user_time()`.
     * @param display a {@link Gdk.Display}
     * @returns the timestamp of the last user interaction
     * @since 2.8
     */
    function x11_display_get_user_time(display: Gdk.Display): number;
    /**
     * Call XGrabServer() on `display`.
     * To ungrab the display again, use `gdk_x11_display_ungrab()`.
     *
     * `gdk_x11_display_grab()`/gdk_x11_display_ungrab() calls can be nested.
     * @param display a {@link Gdk.Display}
     * @since 2.2
     */
    function x11_display_grab(display: Gdk.Display): void;
    /**
     * Sets the cursor theme from which the images for cursor
     * should be taken.
     *
     * If the windowing system supports it, existing cursors created
     * with `gdk_cursor_new()`, `gdk_cursor_new_for_display()` and
     * `gdk_cursor_new_for_name()` are updated to reflect the theme
     * change. Custom cursors constructed with `gdk_cursor_new_from_pixmap()`
     * or `gdk_cursor_new_from_pixbuf()` will have to be handled
     * by the application (GTK+ applications can learn about
     * cursor theme changes by listening for change notification
     * for the corresponding `GtkSetting`).
     * @param display a {@link Gdk.Display}
     * @param theme the name of the cursor theme to use, or `null` to unset         a previously set value
     * @param size the cursor size to use, or 0 to keep the previous size
     * @since 2.8
     */
    function x11_display_set_cursor_theme(display: Gdk.Display, theme: string, size: number): void;
    /**
     * @param display
     * @param str
     * @param encoding
     * @param format
     * @param ctext
     * @param length
     */
    function x11_display_string_to_compound_text(
        display: Gdk.Display,
        str: string,
        encoding: Gdk.Atom,
        format: number,
        ctext: number,
        length: number,
    ): number;
    /**
     * @param display
     * @param encoding
     * @param format
     * @param text
     * @param length
     * @param list
     */
    function x11_display_text_property_to_text_list(
        display: Gdk.Display,
        encoding: Gdk.Atom,
        format: number,
        text: number,
        length: number,
        list: string,
    ): number;
    /**
     * Ungrab `display` after it has been grabbed with
     * `gdk_x11_display_grab()`.
     * @param display a {@link Gdk.Display}
     * @since 2.2
     */
    function x11_display_ungrab(display: Gdk.Display): void;
    /**
     * @param display
     * @param str
     * @param encoding
     * @param format
     * @param ctext
     * @param length
     */
    function x11_display_utf8_to_compound_text(
        display: Gdk.Display,
        str: string,
        encoding: Gdk.Atom,
        format: number,
        ctext: number,
        length: number,
    ): boolean;
    /**
     * Returns the X resource (window or pixmap) belonging to a {@link Gdk.Drawable}.
     * @param drawable a {@link Gdk.Drawable}.
     * @returns the ID of `drawable`'s X resource.
     */
    function x11_drawable_get_xid(drawable: Gdk.Drawable): xlib.XID;
    /**
     * @param font
     */
    function x11_font_get_name(font: Gdk.Font): string;
    /**
     * @param font
     */
    function x11_font_get_xfont(font: Gdk.Font): any | null;
    /**
     * @param ctext
     */
    function x11_free_compound_text(ctext: number): void;
    /**
     * @param list
     */
    function x11_free_text_list(list: string): void;
    /**
     * Gets the root window of the default screen
     * (see `gdk_x11_get_default_screen()`).
     * @returns an Xlib <type>Window</type>.
     */
    function x11_get_default_root_xwindow(): xlib.Window;
    /**
     * Gets the default GTK+ screen number.
     * @returns returns the screen number specified by   the --display command line option or the DISPLAY environment   variable when `gdk_init()` calls XOpenDisplay().
     */
    function x11_get_default_screen(): number;
    /**
     * @param window
     */
    function x11_get_server_time(window: Gdk.Window): number;
    /**
     * Returns the X atom for GDK's default display corresponding to `atom_name`.
     * This function caches the result, so if called repeatedly it is much
     * faster than XInternAtom(), which is a round trip to the server each time.
     * @param atom_name a string
     * @returns a X atom for GDK's default display.
     */
    function x11_get_xatom_by_name(atom_name: string): xlib.Atom;
    /**
     * Returns the X atom for a {@link Gdk.Display} corresponding to `atom_name`.
     * This function caches the result, so if called repeatedly it is much
     * faster than XInternAtom(), which is a round trip to the server each time.
     * @param display a {@link Gdk.Display}
     * @param atom_name a string
     * @returns a X atom for a {@link Gdk.Display}
     * @since 2.2
     */
    function x11_get_xatom_by_name_for_display(display: Gdk.Display, atom_name: string): xlib.Atom;
    /**
     * Returns the name of an X atom for GDK's default display. This
     * function is meant mainly for debugging, so for convenience, unlike
     * <function>XAtomName()</function> and `gdk_atom_name()`, the result
     * doesn't need to be freed. Also, this function will never return `null`,
     * even if `xatom` is invalid.
     * @param xatom an X atom for GDK's default display
     * @returns name of the X atom; this string is owned by GTK+,   so it shouldn't be modifed or freed.
     */
    function x11_get_xatom_name(xatom: xlib.Atom): string;
    /**
     * Returns the name of an X atom for its display. This
     * function is meant mainly for debugging, so for convenience, unlike
     * XAtomName() and `gdk_atom_name()`, the result doesn't need to
     * be freed.
     * @param display the {@link Gdk.Display} where `xatom` is defined
     * @param xatom an X atom
     * @returns name of the X atom; this string is owned by GDK,   so it shouldn't be modifed or freed.
     * @since 2.2
     */
    function x11_get_xatom_name_for_display(display: Gdk.Display, xatom: xlib.Atom): string;
    /**
     * Call `gdk_x11_display_grab()` on the default display.
     * To ungrab the server again, use `gdk_x11_ungrab_server()`.
     *
     * `gdk_x11_grab_server()`/gdk_x11_ungrab_server() calls can be nested.
     */
    function x11_grab_server(): void;
    /**
     * @param display
     * @param event_base
     * @param n_events
     */
    function x11_register_standard_event_type(display: Gdk.Display, event_base: number, n_events: number): void;
    /**
     * Gets the XID of the specified output/monitor.
     * If the X server does not support version 1.2 of the RANDR
     * extension, 0 is returned.
     * @param screen a {@link Gdk.Screen}
     * @param monitor_num number of the monitor, between 0 and gdk_screen_get_n_monitors (screen)
     * @returns the XID of the monitor
     * @since 2.14
     */
    function x11_screen_get_monitor_output(screen: Gdk.Screen, monitor_num: number): xlib.XID;
    /**
     * Returns the index of a {@link Gdk.Screen}.
     * @param screen a {@link Gdk.Screen}.
     * @returns the position of `screen` among the screens of   its display.
     * @since 2.2
     */
    function x11_screen_get_screen_number(screen: Gdk.Screen): number;
    /**
     * @param screen
     */
    function x11_screen_get_window_manager_name(screen: Gdk.Screen): string;
    /**
     * Returns the screen of a {@link Gdk.Screen}.
     * @param screen a {@link Gdk.Screen}.
     * @returns an Xlib <type>Screen*</type>
     * @since 2.2
     */
    function x11_screen_get_xscreen(screen: Gdk.Screen): xlib.Screen;
    /**
     * Looks up the {@link Gdk.Visual} for a particular screen and X Visual ID.
     * @param screen a {@link Gdk.Screen}.
     * @param xvisualid an X Visual ID.
     * @returns the {@link Gdk.Visual} (owned by the screen   object), or `null` if the visual ID wasn't found.
     * @since 2.2
     */
    function x11_screen_lookup_visual(screen: Gdk.Screen, xvisualid: xlib.VisualID): Gdk.Visual;
    /**
     * @param screen
     * @param property
     */
    function x11_screen_supports_net_wm_hint(screen: Gdk.Screen, property: Gdk.Atom): boolean;
    /**
     * Sets the <literal>SM_CLIENT_ID</literal> property on the application's leader window so that
     * the window manager can save the application's state using the X11R6 ICCCM
     * session management protocol.
     *
     * See the X Session Management Library documentation for more information on
     * session management and the Inter-Client Communication Conventions Manual
     * @param sm_client_id the client id assigned by the session manager when the    connection was opened, or `null` to remove the property.
     * @since 2.24
     */
    function x11_set_sm_client_id(sm_client_id: string): void;
    /**
     * Ungrab the default display after it has been grabbed with
     * `gdk_x11_grab_server()`.
     */
    function x11_ungrab_server(): void;
    /**
     * Moves the window to the correct workspace when running under a
     * window manager that supports multiple workspaces, as described
     * in the <ulink url="http://www.freedesktop.org/Standards/wm-spec">Extended
     * Window Manager Hints</ulink>.  Will not do anything if the
     * window is already on all workspaces.
     * @param window a {@link Gdk.Window}
     * @since 2.8
     */
    function x11_window_move_to_current_desktop(window: Gdk.Window): void;
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
     * @param window A toplevel {@link Gdk.Window}
     * @param timestamp An XServer timestamp to which the property should be set
     * @since 2.6
     */
    function x11_window_set_user_time(window: Gdk.Window, timestamp: number): void;
    /**
     * Returns the Gdk object associated with the given X id for the default
     * display.
     * @param xid an X id.
     * @returns the associated Gdk object, which may be a {@link Gdk.Pixmap},     a {@link Gdk.Window} or a {@link Gdk.Font} or `null` if no object is associated     with the X id.
     * @deprecated since 2.24: This function will be removed in GTK+ 3.0. GTK+     only stores windows in its X id table nowadays, so use     `gdk_x11_window_lookup_for_display()` instead.
     */
    function xid_table_lookup(xid: xlib.XID): any | null;
    /**
     * Returns the GDK object associated with the given X id.
     * @param display the {@link Gdk.Display}.
     * @param xid an X id.
     * @returns the associated Gdk object, which may be a {@link Gdk.Pixmap},     a {@link Gdk.Window} or a {@link Gdk.Font} or `null` if no object is associated     with the X id.
     * @since 2.2
     * @deprecated since 2.24: This function will be removed in GTK+ 3.0. GTK+     only stores windows in its X id table nowadays, so use     `gdk_x11_window_lookup_for_display()` instead.
     */
    function xid_table_lookup_for_display(display: Gdk.Display, xid: xlib.XID): any | null;
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

export default GdkX11;

// END
