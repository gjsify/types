/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './wnck-3.0-ambient.d.ts';
import './wnck-3.0-import.d.ts';
/**
 * Wnck-3.0
 */

import type Gtk from '@girs/gtk-3.0';
import type xlib from '@girs/xlib-2.0';
import type Gdk from '@girs/gdk-3.0';
import type cairo from '@girs/cairo-1.0';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type GModule from '@girs/gmodule-2.0';
import type Atk from '@girs/atk-1.0';

export namespace Wnck {
    /**
     * Type describing the role of the libwnck user.
     */
    enum ClientType {
        /**
         * the libwnck user is a normal application.
         */
        APPLICATION,
        /**
         * the libwnck user is an utility application dealing
         * with window management, like pagers and taskbars.
         */
        PAGER,
    }
    /**
     * Type defining a direction in which to search a neighbor #WnckWorkspace.
     */
    enum MotionDirection {
        /**
         * search a neighbor #WnckWorkspace above another
         * #WnckWorkspace.
         */
        UP,
        /**
         * search a neighbor #WnckWorkspace below another
         * #WnckWorkspace.
         */
        DOWN,
        /**
         * search a neighbor #WnckWorkspace at the left of another
         * #WnckWorkspace.
         */
        LEFT,
        /**
         * search a neighbor #WnckWorkspace at the right of another
         * #WnckWorkspace.
         */
        RIGHT,
    }
    /**
     * Mode defining what a #WnckPager will display.
     */
    enum PagerDisplayMode {
        /**
         * the #WnckPager will only display the names of the
         * workspaces.
         */
        NAME,
        /**
         * the #WnckPager will display a representation
         * for each window in the workspaces.
         */
        CONTENT,
    }
    /**
     * Mode defining in which order scrolling on a #WnckPager will cycle through workspaces.
     */
    enum PagerScrollMode {
        /**
         * given that the workspaces are set up in multiple rows,
         * scrolling on the #WnckPager will cycle through the workspaces as if on a
         * 2-dimensional map. Example cycling order with 2 rows and 4 workspaces: 1 3 2 4.
         */
        '2D',
        /**
         * the #WnckPager will always cycle workspaces in a linear
         * manner, irrespective of how many rows are configured. (Hint: Better for mice)
         * Example cycling order with 2 rows and 4 workspaces: 1 2 3 4.
         */
        '1D',
        /**
         * the #WnckPager will not cycle workspaces. Since 3.40.
         */
        NONE,
    }
    /**
     * Type defining the policy of the #WnckTasklist for grouping multiple
     * #WnckWindow of the same #WnckApplication.
     */
    enum TasklistGroupingType {
        /**
         * never group multiple #WnckWindow of the same
         * #WnckApplication.
         */
        NEVER_GROUP,
        /**
         * group multiple #WnckWindow of the same
         * #WnckApplication for some #WnckApplication, when there is not enough place
         * to have a good-looking list of all #WnckWindow.
         */
        AUTO_GROUP,
        /**
         * always group multiple #WnckWindow of the same
         * #WnckApplication, for all #WnckApplication.
         */
        ALWAYS_GROUP,
    }
    /**
     * Flag used when changing the geometry of a #WnckWindow. This is the gravity
     * point to use as a reference for the new position.
     */
    enum WindowGravity {
        /**
         * keep the current gravity point.
         */
        CURRENT,
        /**
         * use the left top corner of the frame window
         * as gravity point.
         */
        NORTHWEST,
        /**
         * use the center of the frame window's top side as
         * gravity point.
         */
        NORTH,
        /**
         * use the right top corner of the frame window
         * as gravity point.
         */
        NORTHEAST,
        /**
         * use the center of the frame window's left side as
         * gravity point.
         */
        WEST,
        /**
         * use the center of the frame window as gravity
         * point.
         */
        CENTER,
        /**
         * use the center of the frame window's right side
         * as gravity point.
         */
        EAST,
        /**
         * use the left bottom corner of the frame
         * window as gravity point.
         */
        SOUTHWEST,
        /**
         * use the center of the frame window's bottom side
         * as gravity point.
         */
        SOUTH,
        /**
         * use the right bottom corner of the frame
         * window as gravity point.
         */
        SOUTHEAST,
        /**
         * use the left top corner of the client window as
         * gravity point.
         */
        STATIC,
    }
    /**
     * Type describing the semantic type of a #WnckWindow.
     */
    enum WindowType {
        /**
         * the window is a normal window.
         */
        NORMAL,
        /**
         * the window is a desktop.
         */
        DESKTOP,
        /**
         * the window is a dock or a panel.
         */
        DOCK,
        /**
         * the window is a dialog window.
         */
        DIALOG,
        /**
         * the window is a tearoff toolbar.
         */
        TOOLBAR,
        /**
         * the window is a tearoff menu.
         */
        MENU,
        /**
         * the window is a small persistent utility window, such
         * as a palette or toolbox.
         */
        UTILITY,
        /**
         * the window is a splash screen displayed as an
         * application is starting up.
         */
        SPLASHSCREEN,
    }
    enum _LayoutCorner {
        TOPLEFT,
        TOPRIGHT,
        BOTTOMRIGHT,
        BOTTOMLEFT,
    }
    enum _LayoutOrientation {
        HORIZONTAL,
        VERTICAL,
    }
    const DEFAULT_ICON_SIZE: number;
    const DEFAULT_MINI_ICON_SIZE: number;
    const MAJOR_VERSION: number;
    const MICRO_VERSION: number;
    const MINOR_VERSION: number;
    /**
     * Looks for the X resource usage of the application with process ID `pid` on
     * display `gdisplay`. If no resource usage can be found, then all fields of
     * `usage` are set to 0.
     *
     * In order to find the resource usage of an application that does not have an
     * X window visible to libwnck (panel applets do not have any toplevel windows,
     * for example), wnck_pid_read_resource_usage() walks through the whole tree of
     * X windows. Since this walk is expensive in CPU, a cache is created. This
     * cache is updated in the background. This means there is a non-null
     * probability that no resource usage will be found for an application, even if
     * it is an X client. If this happens, calling wnck_pid_read_resource_usage()
     * again after a few seconds should work.
     *
     * To properly work, this function requires the XRes extension on the X server.
     * @param gdk_display a <classname>GdkDisplay</classname>.
     * @param pid a process ID.
     * @param usage return location for the X resource usage of the application with process ID @pid.
     */
    function pid_read_resource_usage(gdk_display: Gdk.Display, pid: number, usage: ResourceUsage): void;
    /**
     * Sets the role of the libwnck user.
     *
     * The default role is %WNCK_CLIENT_TYPE_APPLICATION. Therefore, for
     * applications providing some window management features, like pagers or
     * tasklists, it is important to set the role to %WNCK_CLIENT_TYPE_PAGER for
     * libwnck to properly work.
     *
     * This function should only be called once per program. Additional calls
     * with the same client type will be silently ignored. An attempt to change
     * the client type to a differnet value after it has already been set will
     * be ignored and a critical warning will be logged.
     * @param ewmh_sourceindication_client_type a role for the client.
     */
    function set_client_type(ewmh_sourceindication_client_type: ClientType): void;
    /**
     * The default main icon size is %WNCK_DEFAULT_ICON_SIZE. This function allows
     * to change this value.
     * @param size the default size for windows and application standard icons.
     */
    function set_default_icon_size(size: number): void;
    /**
     * The default main icon size is %WNCK_DEFAULT_MINI_ICON_SIZE. This function
     * allows to change this value.
     * @param size the default size for windows and application mini icons.
     */
    function set_default_mini_icon_size(size: number): void;
    /**
     * Makes libwnck stop listening to events and tear down all resources from
     * libwnck. This should be done if you are not going to need the state change
     * notifications for an extended period of time, to avoid wakeups with every
     * key and focus event.
     *
     * After this, all pointers to Wnck object you might still hold are invalid.
     *
     * Due to the fact that <link
     * linkend="getting-started.pitfalls.memory-management">Wnck objects are all
     * owned by libwnck</link>, users of this API through introspection should be
     * extremely careful: they must explicitly clear variables referencing objects
     * before this call. Failure to do so might result in crashes.
     */
    function shutdown(): void;
    /**
     * Looks for the X resource usage of the application owning the X window ID
     * `xid` on display `gdisplay`. If no resource usage can be found, then all
     * fields of `usage` are set to 0.
     *
     * To properly work, this function requires the XRes extension on the X server.
     * @param gdk_display a <classname>GdkDisplay</classname>.
     * @param xid an X window ID.
     * @param usage return location for the X resource usage of the application owning the X window ID @xid.
     */
    function xid_read_resource_usage(gdk_display: Gdk.Display, xid: number, usage: ResourceUsage): void;
    /**
     * Type used as a bitmask to describe the actions that can be done for a
     * #WnckWindow.
     */
    enum WindowActions {
        /**
         * the window may be moved around the screen.
         */
        MOVE,
        /**
         * the window may be resized.
         */
        RESIZE,
        /**
         * the window may be shaded.
         */
        SHADE,
        /**
         * the window may be sticked.
         */
        STICK,
        /**
         * the window may be maximized
         * horizontally.
         */
        MAXIMIZE_HORIZONTALLY,
        /**
         * the window may be maximized
         * vertically.
         */
        MAXIMIZE_VERTICALLY,
        /**
         * the window may be moved between
         * workspaces, or (un)pinned.
         */
        CHANGE_WORKSPACE,
        /**
         * the window may be closed.
         */
        CLOSE,
        /**
         * the window may be unmaximized
         * horizontally.
         */
        UNMAXIMIZE_HORIZONTALLY,
        /**
         * the window may be maximized
         * vertically.
         */
        UNMAXIMIZE_VERTICALLY,
        /**
         * the window may be unshaded.
         */
        UNSHADE,
        /**
         * the window may be unsticked.
         */
        UNSTICK,
        /**
         * the window may be minimized.
         */
        MINIMIZE,
        /**
         * the window may be unminimized.
         */
        UNMINIMIZE,
        /**
         * the window may be maximized.
         */
        MAXIMIZE,
        /**
         * the window may be unmaximized.
         */
        UNMAXIMIZE,
        /**
         * the window may be brought to fullscreen.
         */
        FULLSCREEN,
        /**
         * the window may be made above other windows.
         */
        ABOVE,
        /**
         * the window may be made below other windows.
         */
        BELOW,
    }
    /**
     * Flag used as a bitmask when changing the geometry of a #WnckWindow. This
     * indicates which part of the geometry should be changed.
     */
    enum WindowMoveResizeMask {
        /**
         * X coordinate of the window should be changed.
         */
        X,
        /**
         * Y coordinate of the window should be changed.
         */
        Y,
        /**
         * width of the window should be changed.
         */
        WIDTH,
        /**
         * height of the window should be changed.
         */
        HEIGHT,
    }
    /**
     * Type used as a bitmask to describe the state of a #WnckWindow.
     */
    enum WindowState {
        /**
         * the window is minimized.
         */
        MINIMIZED,
        /**
         * the window is horizontically
         * maximized.
         */
        MAXIMIZED_HORIZONTALLY,
        /**
         * the window is vertically maximized.
         */
        MAXIMIZED_VERTICALLY,
        /**
         * the window is shaded.
         */
        SHADED,
        /**
         * the window should not be included on pagers.
         */
        SKIP_PAGER,
        /**
         * the window should not be included on
         * tasklists.
         */
        SKIP_TASKLIST,
        /**
         * the window is sticky (see
         * wnck_window_is_sticky()).
         */
        STICKY,
        /**
         * the window is not visible on its #WnckWorkspace
         * and viewport (when minimized, for example).
         */
        HIDDEN,
        /**
         * the window is fullscreen.
         */
        FULLSCREEN,
        /**
         * the window needs attention (because
         * the window requested activation but the window manager refused it, for
         * example).
         */
        DEMANDS_ATTENTION,
        /**
         * the window requires a response from the user.
         */
        URGENT,
        /**
         * the window is above other windows (see
         * wnck_window_make_above()).
         */
        ABOVE,
        /**
         * the window is below other windows (see
         * wnck_window_make_below()).
         */
        BELOW,
    }
    module ActionMenu {
        // Constructor properties interface
    }

    /**
     * The #WnckActionMenu struct contains only private fields and should not be
     * directly accessed.
     */
    class ActionMenu extends Gtk.Menu {
        // Own properties of Wnck-3.0.ActionMenu

        window: any;

        // Constructors of Wnck-3.0.ActionMenu

        static ['new'](window: Window): ActionMenu;
    }

    module Application {
        // Signal callback interfaces

        interface IconChanged {
            (): void;
        }

        interface NameChanged {
            (): void;
        }

        // Constructor properties interface
    }

    /**
     * The #WnckApplication struct contains only private fields and should not be
     * directly accessed.
     */
    class Application extends GObject.Object {
        // Owm methods of Wnck-3.0.Application

        /**
         * Gets the #WnckApplication corresponding to the group leader with `xwindow`
         * as X window ID.
         * @param xwindow the X window ID of a group leader.
         */
        static get(xwindow: number): Application;

        // Owm methods of Wnck-3.0.Application

        /**
         * Gets the icon to be used for `app`. If no icon is set for `app,` a
         * suboptimal heuristic is used to find an appropriate icon. If no icon was
         * found, a fallback icon is used.
         * @returns the icon for @app. The caller should reference the returned <classname>GdkPixbuf</classname> if it needs to keep the icon around.
         */
        get_icon(): GdkPixbuf.Pixbuf;
        /**
         * Gets whether a default fallback icon is used for `app` (because none
         * was set on `app)`.
         * @returns %TRUE if the icon for @app is a fallback, %FALSE otherwise.
         */
        get_icon_is_fallback(): boolean;
        /**
         * Gets the icon name of `app` (to be used when `app` is minimized). Since
         * there is no way to properly find this name, various suboptimal heuristics
         * are used to find it.
         * @returns the icon name of @app, or a fallback icon name if no icon name is available.
         */
        get_icon_name(): string;
        /**
         * Gets the mini-icon to be used for `app`. If no mini-icon is set for `app,`
         * a suboptimal heuristic is used to find an appropriate icon. If no mini-icon
         * was found, a fallback mini-icon is used.
         * @returns the mini-icon for @app. The caller should reference the returned <classname>GdkPixbuf</classname> if it needs to keep the mini-icon around.
         */
        get_mini_icon(): GdkPixbuf.Pixbuf;
        /**
         * Gets the number of #WnckWindow belonging to `app`.
         * @returns the number of #WnckWindow belonging to @app.
         */
        get_n_windows(): number;
        /**
         * Gets the name of `app`. Since there is no way to properly find this name,
         * various suboptimal heuristics are used to find it. GTK+ should probably have
         * a function to allow applications to set the _NET_WM_NAME property on the
         * group leader as the application name, and the <ulink
         * url="http://standards.freedesktop.org/wm-spec/wm-spec-latest.html">EWMH</ulink>
         * should say that this is where the application name goes.
         * @returns the name of @app, or a fallback name if no name is available.
         */
        get_name(): string;
        /**
         * Gets the process ID of `app`.
         * @returns the process ID of @app, or 0 if none is available.
         */
        get_pid(): number;
        /**
         * Gets the startup sequence ID used for startup notification of `app`.
         * @returns the startup sequence ID used for startup notification of @app, or %NULL if none is available.
         */
        get_startup_id(): string;
        /**
         * Gets the list of #WnckWindow belonging to `app`.
         * @returns the list of #WnckWindow belonging to @app, or %NULL if the application contains no window. The list should not be modified nor freed, as it is owned by @app.
         */
        get_windows(): Window[];
        /**
         * Gets the X window ID of the group leader window for `app`.
         * @returns the X window ID of the group leader window for @app.
         */
        get_xid(): number;
    }

    module ClassGroup {
        // Signal callback interfaces

        interface IconChanged {
            (): void;
        }

        interface NameChanged {
            (): void;
        }

        // Constructor properties interface
    }

    /**
     * The #WnckClassGroup struct contains only private fields and should not be
     * directly accessed.
     */
    class ClassGroup extends GObject.Object {
        // Owm methods of Wnck-3.0.ClassGroup

        /**
         * Gets the #WnckClassGroup corresponding to `id`.
         * @param id identifier name of the sought resource class.
         */
        static get(id: string): ClassGroup;

        // Owm methods of Wnck-3.0.ClassGroup

        /**
         * Gets the icon to be used for `class_group`. Since there is no way to
         * properly find the icon, a suboptimal heuristic is used to find it. The icon
         * is the first icon found by looking at all the #WnckApplication for each
         * #WnckWindow in `class_group,` then at all the #WnckWindow in `class_group`. If
         * no icon was found, a fallback icon is used.
         * @returns the icon for @class_group. The caller should reference the returned <classname>GdkPixbuf</classname> if it needs to keep the icon around.
         */
        get_icon(): GdkPixbuf.Pixbuf;
        /**
         * Gets the identifier name for `class_group`. This is the resource class for
         * `class_group`.
         * @returns the identifier name of @class_group, or an empty string if the group has no identifier name.
         */
        get_id(): string;
        /**
         * Gets the mini-icon to be used for `class_group`. Since there is no way to
         * properly find the mini-icon, the same suboptimal heuristic as the one for
         * wnck_class_group_get_icon() is used to find it.
         * @returns the mini-icon for @class_group. The caller should reference the returned <classname>GdkPixbuf</classname> if it needs to keep the mini-icon around.
         */
        get_mini_icon(): GdkPixbuf.Pixbuf;
        /**
         * Gets an human-readable name for `class_group`. Since there is no way to
         * properly find this name, a suboptimal heuristic is used to find it. The name
         * is the name of all #WnckApplication for each #WnckWindow in `class_group` if
         * they all have the same name. If all #WnckApplication don't have the same
         * name, the name is the name of all #WnckWindow in `class_group` if they all
         * have the same name. If all #WnckWindow don't have the same name, the
         * resource class name is used.
         * @returns an human-readable name for @class_group.
         */
        get_name(): string;
        /**
         * Gets the resource class name for `class_group`.
         * @returns the resource class name of @class_group, or an empty string if the group has no resource class name.
         */
        get_res_class(): string;
        /**
         * Gets the list of #WnckWindow that are grouped in `class_group`.
         * @returns the list of #WnckWindow grouped in @class_group, or %NULL if the group contains no window. The list should not be modified nor freed, as it is owned by @class_group.
         */
        get_windows(): Window[];
    }

    module Handle {
        // Constructor properties interface
    }

    class Handle extends GObject.Object {
        // Own properties of Wnck-3.0.Handle

        client_type: ClientType;
        clientType: ClientType;

        // Constructors of Wnck-3.0.Handle

        static ['new'](client_type: ClientType): Handle;

        // Owm methods of Wnck-3.0.Handle

        /**
         * Gets the #WnckApplication corresponding to the group leader with `xwindow`
         * as X window ID.
         * @param xwindow the X window ID of a group leader.
         * @returns the #WnckApplication corresponding to @xwindow, or %NULL if there no such #WnckApplication could be found. The returned #WnckApplication is owned by libwnck and must not be referenced or unreferenced.
         */
        get_application(xwindow: number): Application;
        /**
         * Gets the #WnckClassGroup corresponding to `id`.
         * @param id identifier name of the sought resource class.
         * @returns the #WnckClassGroup corresponding to @id, or %NULL if there is no #WnckClassGroup with the specified @id. The returned #WnckClassGroup is owned by libwnck and must not be referenced or unreferenced.
         */
        get_class_group(id: string): ClassGroup;
        /**
         * Gets the default #WnckScreen on the default display.
         * @returns the default #WnckScreen. The returned #WnckScreen is owned by #WnckHandle and must not be referenced or unreferenced. This can return %NULL if not on X11.
         */
        get_default_screen(): Screen | null;
        /**
         * Gets the #WnckScreen for a given screen on the default display.
         * @param index screen number, starting from 0.
         * @returns the #WnckScreen for screen @index, or %NULL if no such screen exists. The returned #WnckScreen is owned by #WnckHandle and must not be referenced or unreferenced.
         */
        get_screen(index: number): Screen;
        /**
         * Gets the #WnckScreen for the root window at `root_window_id,` or
         * %NULL if no #WnckScreen exists for this root window.
         *
         * This function does not work if wnck_handle_get_screen() was not called
         * for the sought #WnckScreen before, and returns %NULL.
         * @param root_window_id an X window ID.
         * @returns the #WnckScreen for the root window at @root_window_id, or %NULL. The returned #WnckScreen is owned by #WnckHandle and must not be referenced or unreferenced.
         */
        get_screen_for_root(root_window_id: number): Screen;
        /**
         * Gets a preexisting #WnckWindow for the X window `xwindow`. This will not
         * create a #WnckWindow if none exists. The function is robust against bogus
         * window IDs.
         * @param xwindow an X window ID.
         * @returns the #WnckWindow for @xwindow. The returned #WnckWindow is owned by libwnck and must not be referenced or unreferenced.
         */
        get_window(xwindow: number): Window;
        /**
         * The default main icon size is %WNCK_DEFAULT_ICON_SIZE. This function allows
         * to change this value.
         * @param icon_size the default size for windows and application standard icons.
         */
        set_default_icon_size(icon_size: number): void;
        /**
         * The default main icon size is %WNCK_DEFAULT_MINI_ICON_SIZE. This function
         * allows to change this value.
         * @param icon_size the default size for windows and application mini icons.
         */
        set_default_mini_icon_size(icon_size: number): void;
    }

    module ImageMenuItem {
        // Constructor properties interface
    }

    class ImageMenuItem extends Gtk.MenuItem {
        // Constructors of Wnck-3.0.ImageMenuItem

        static ['new'](): ImageMenuItem;

        static new_with_label(label: string): ImageMenuItem;

        // Owm methods of Wnck-3.0.ImageMenuItem

        make_label_bold(): void;
        make_label_normal(): void;
        set_image_from_icon_pixbuf(pixbuf: GdkPixbuf.Pixbuf): void;
        set_image_from_window(window: Window): void;
    }

    module Pager {
        // Constructor properties interface
    }

    /**
     * The #WnckPager struct contains only private fields and should not be
     * directly accessed.
     */
    class Pager extends Gtk.Widget {
        // Own properties of Wnck-3.0.Pager

        handle: Handle;

        // Constructors of Wnck-3.0.Pager

        static ['new'](): Pager;

        static new_with_handle(handle: Handle): Pager;

        // Owm methods of Wnck-3.0.Pager

        get_wrap_on_scroll(): boolean;
        /**
         * Sets the display mode for `pager` to `mode`.
         * @param mode a display mode.
         */
        set_display_mode(mode: PagerDisplayMode): void;
        /**
         * Tries to change the number of rows in the layout of #WnckWorkspace on the
         * #WnckScreen `pager` is watching. Since no more than one application should
         * set this property of a #WnckScreen at a time, setting the layout is not
         * guaranteed to work.
         *
         * If `pager` has not been added to a widget hierarchy, the call will fail
         * because `pager` can't know the screen on which to modify the layout.
         * @param n_rows the number of rows to use for the layout of #WnckWorkspace on the #WnckScreen @pager is watching.
         * @returns %TRUE if the layout of #WnckWorkspace has been successfully changed or did not need to be changed, %FALSE otherwise.
         */
        set_n_rows(n_rows: number): boolean;
        /**
         * Tries to change the orientation of the layout of #WnckWorkspace on the
         * #WnckScreen `pager` is watching. Since no more than one application should
         * set this property of a #WnckScreen at a time, setting the layout is not
         * guaranteed to work.
         *
         * If `orientation` is %GTK_ORIENTATION_HORIZONTAL, the #WnckWorkspace will be
         * laid out in rows, with the first #WnckWorkspace in the top left corner.
         *
         * If `orientation` is %GTK_ORIENTATION_VERTICAL, the #WnckWorkspace will be
         * laid out in columns, with the first #WnckWorkspace in the top left corner.
         *
         * For example, if the layout contains one row, but the orientation of the
         * layout is vertical, the #WnckPager will display a column of #WnckWorkspace.
         *
         * Note that setting the orientation will have an effect on the geometry
         * management: if `orientation` is %GTK_ORIENTATION_HORIZONTAL,
         * %GTK_SIZE_REQUEST_WIDTH_FOR_HEIGHT will be used as request mode; if
         * `orientation` is %GTK_ORIENTATION_VERTICAL, GTK_SIZE_REQUEST_HEIGHT_FOR_WIDTH
         * will be used instead.
         *
         * If `pager` has not been added to a widget hierarchy, the call will fail
         * because `pager` can't know the screen on which to modify the orientation.
         * @param orientation orientation to use for the layout of #WnckWorkspace on the #WnckScreen @pager is watching.
         * @returns %TRUE if the layout of #WnckWorkspace has been successfully changed or did not need to be changed, %FALSE otherwise.
         */
        set_orientation(orientation: Gtk.Orientation): boolean;
        /**
         * Sets `pager` to react to input device scrolling in one of the
         * available scroll modes.
         * @param scroll_mode a scroll mode.
         */
        set_scroll_mode(scroll_mode: PagerScrollMode): void;
        /**
         * Sets the shadow type for `pager` to `shadow_type`. The main use of this
         * function is proper integration of #WnckPager in panels with non-system
         * backgrounds.
         * @param shadow_type a shadow type.
         */
        set_shadow_type(shadow_type: Gtk.ShadowType): void;
        /**
         * Sets `pager` to display all #WnckWorkspace or not, according to
         * `show_all_workspaces`.
         * @param show_all_workspaces whether to display all #WnckWorkspace in @pager.
         */
        set_show_all(show_all_workspaces: boolean): void;
        /**
         * Sets the wrapping behavior of the `pager`. Setting it to %TRUE will
         * wrap arround to the start when scrolling over the end and vice
         * versa. By default it is set to %FALSE.
         * @param wrap_on_scroll a boolean.
         */
        set_wrap_on_scroll(wrap_on_scroll: boolean): void;
    }

    module Screen {
        // Signal callback interfaces

        interface ActiveWindowChanged {
            (previously_active_window: Window): void;
        }

        interface ActiveWorkspaceChanged {
            (previously_active_space: Workspace): void;
        }

        interface ApplicationClosed {
            (app: Application): void;
        }

        interface ApplicationOpened {
            (app: Application): void;
        }

        interface BackgroundChanged {
            (): void;
        }

        interface ClassGroupClosed {
            (class_group: ClassGroup): void;
        }

        interface ClassGroupOpened {
            (class_group: ClassGroup): void;
        }

        interface ShowingDesktopChanged {
            (): void;
        }

        interface ViewportsChanged {
            (): void;
        }

        interface WindowClosed {
            (window: Window): void;
        }

        interface WindowManagerChanged {
            (): void;
        }

        interface WindowOpened {
            (window: Window): void;
        }

        interface WindowStackingChanged {
            (): void;
        }

        interface WorkspaceCreated {
            (space: Workspace): void;
        }

        interface WorkspaceDestroyed {
            (space: Workspace): void;
        }

        // Constructor properties interface
    }

    /**
     * The #WnckScreen struct contains only private fields and should not be
     * directly accessed.
     */
    class Screen extends GObject.Object {
        // Owm methods of Wnck-3.0.Screen

        /**
         * Frees the content of `layout`. This does not free `layout` itself, so you
         * might want to free `layout` yourself after calling this.
         * @param layout a #WnckWorkspaceLayout.
         */
        static free_workspace_layout(layout: WorkspaceLayout): void;
        /**
         * Gets the #WnckScreen for a given screen on the default display.
         * @param index screen number, starting from 0.
         */
        static get(index: number): Screen;
        /**
         * Gets the default #WnckScreen on the default display.
         */
        static get_default(): Screen | null;
        /**
         * Gets the #WnckScreen for the root window at `root_window_id,` or
         * %NULL if no #WnckScreen exists for this root window.
         *
         * This function does not work if wnck_screen_get() was not called for the
         * sought #WnckScreen before, and returns %NULL.
         * @param root_window_id an X window ID.
         */
        static get_for_root(root_window_id: number): Screen;

        // Owm methods of Wnck-3.0.Screen

        /**
         * Calculates the layout of #WnckWorkspace, with additional information like
         * the row and column of the #WnckWorkspace with index `space_index`.
         * @param num_workspaces the number of #WnckWorkspace on @screen, or -1 to let wnck_screen_calc_workspace_layout() find this number.
         * @param space_index the index of a #WnckWorkspace.
         * @param layout return location for the layout of #WnckWorkspace with additional information.
         */
        calc_workspace_layout(num_workspaces: number, space_index: number, layout: WorkspaceLayout): void;
        /**
         * Asks the window manager to change the number of #WnckWorkspace on `screen`.
         * @param count the number of #WnckWorkspace to request.
         */
        change_workspace_count(count: number): void;
        /**
         * Synchronously and immediately updates the list of #WnckWindow on `screen`.
         * This bypasses the standard update mechanism, where the list of #WnckWindow
         * is updated in the idle loop.
         *
         * This is usually a bad idea for both performance and correctness reasons (to
         * get things right, you need to write model-view code that tracks changes, not
         * get a static list of open windows). However, this function can be useful for
         * small applications that just do something and then exit.
         */
        force_update(): void;
        /**
         * Gets the active #WnckWindow on `screen`. May return %NULL sometimes, since
         * not all window managers guarantee that a window is always active.
         * @returns the active #WnckWindow on @screen, or %NULL. The returned #WnckWindow is owned by libwnck and must not be referenced or unreferenced.
         */
        get_active_window(): Window;
        /**
         * Gets the active #WnckWorkspace on `screen`. May return %NULL sometimes,
         * if libwnck is in a weird state due to the asynchronous nature of the
         * interaction with the window manager.
         * @returns the active #WnckWorkspace on @screen, or %NULL. The returned #WnckWorkspace is owned by libwnck and must not be referenced or unreferenced.
         */
        get_active_workspace(): Workspace;
        /**
         * Gets the X window ID of the background pixmap of `screen`.
         * @returns the X window ID of the background pixmap of @screen.
         */
        get_background_pixmap(): number;
        /**
         * Gets the handle.
         * @returns a #WnckHandle, or %NULL.
         */
        get_handle(): Handle;
        /**
         * Gets the height of `screen`.
         * @returns the height of @screen.
         */
        get_height(): number;
        /**
         * Gets the index of `screen` on the display to which it belongs. The first
         * #WnckScreen has an index of 0.
         * @returns the index of @space on @screen, or -1 on errors.
         */
        get_number(): number;
        /**
         * Gets the previously active #WnckWindow on `screen`. May return %NULL
         * sometimes, since not all window managers guarantee that a window is always
         * active.
         * @returns the previously active #WnckWindow on @screen, or %NULL. The returned #WnckWindow is owned by libwnck and must not be referenced or unreferenced.
         */
        get_previously_active_window(): Window;
        /**
         * Gets whether `screen` is in the "showing the desktop" mode. This mode is
         * changed when a #WnckScreen::showing-desktop-changed signal gets emitted.
         * @returns %TRUE if @window is fullscreen, %FALSE otherwise.
         */
        get_showing_desktop(): boolean;
        /**
         * Gets the width of `screen`.
         * @returns the width of @screen.
         */
        get_width(): number;
        /**
         * Gets the name of the window manager.
         * @returns the name of the window manager, or %NULL if the window manager does not comply with the <ulink url="http://standards.freedesktop.org/wm-spec/wm-spec-latest.html">EWMH</ulink> specification.
         */
        get_window_manager_name(): string;
        /**
         * Gets the list of #WnckWindow on `screen`. The list is not in a defined
         * order, but should be "stable" (windows should not be reordered in it).
         * However, the stability of the list is established by the window manager, so
         * don't blame libwnck if it breaks down.
         * @returns the list of #WnckWindow on @screen, or %NULL if there is no window on @screen. The list should not be modified nor freed, as it is owned by @screen.
         */
        get_windows(): Window[];
        /**
         * Gets the list of #WnckWindow on `screen` in bottom-to-top order.
         * @returns the list of #WnckWindow in stacking order on @screen, or %NULL if there is no window on @screen. The list should not be modified nor freed, as it is owned by @screen.
         */
        get_windows_stacked(): Window[];
        /**
         * Gets the #WnckWorkspace numbered `workspace` on `screen`.
         * @param workspace a workspace index, starting from 0.
         * @returns the #WnckWorkspace numbered @workspace on @screen, or %NULL if no such workspace exists. The returned #WnckWorkspace is owned by libwnck and must not be referenced or unreferenced.
         */
        get_workspace(workspace: number): Workspace;
        /**
         * Gets the number of #WnckWorkspace on `screen`.
         * @returns the number of #WnckWorkspace on @screen.
         */
        get_workspace_count(): number;
        /**
         * Gets the list of #WnckWorkspace on `screen`. The list is ordered: the
         * first element in the list is the first #WnckWorkspace, etc..
         * @returns the list of #WnckWorkspace on @screen. The list should not be modified nor freed, as it is owned by @screen.
         */
        get_workspaces(): Workspace[];
        /**
         * Asks the window manager to move the viewport of the current #WnckWorkspace
         * on `screen`.
         * @param x X offset in pixels of viewport.
         * @param y Y offset in pixels of viewport.
         */
        move_viewport(x: number, y: number): void;
        /**
         * Gets whether the window manager for `screen` supports a certain hint from
         * the <ulink
         * url="http://standards.freedesktop.org/wm-spec/wm-spec-latest.html">Extended
         * Window Manager Hints specification</ulink> (EWMH).
         *
         * When using this function, keep in mind that the window manager can change
         * over time; so you should not use this function in a way that impacts
         * persistent application state. A common bug is that your application can
         * start up before the window manager does when the user logs in, and before
         * the window manager starts wnck_screen_net_wm_supports() will return %FALSE
         * for every property.
         *
         * See also gdk_x11_screen_supports_net_wm_hint() in GDK.
         * @param atom a property atom.
         * @returns %TRUE if the window manager for @screen supports the @atom hint, %FALSE otherwise.
         */
        net_wm_supports(atom: string): boolean;
        /**
         * Releases the ownership of the layout of #WnckWorkspace on `screen`.
         * `current_token` is used to verify that the caller is the owner of the layout.
         * If the verification fails, nothing happens.
         * @param current_token the token obtained through wnck_screen_try_set_workspace_layout().
         */
        release_workspace_layout(current_token: number): void;
        /**
         * Asks the window manager to set the "showing the desktop" mode on `screen`
         * according to `show`.
         * @param show whether to activate the "showing the desktop" mode on @screen.
         */
        toggle_showing_desktop(show: boolean): void;
        /**
         * Tries to modify the layout of #WnckWorkspace on `screen`. To do this, tries
         * to acquire ownership of the layout. If the current process is the owner of
         * the layout, `current_token` is used to determine if the caller is the owner
         * (there might be more than one part of the same process trying to set the
         * layout). Since no more than one application should set this property of
         * `screen` at a time, setting the layout is not guaranteed to work.
         *
         * If `rows` is 0, the actual number of rows will be determined based on
         * `columns` and the number of #WnckWorkspace. If `columns` is 0, the actual
         * number of columns will be determined based on `rows` and the number of
         * #WnckWorkspace. `rows` and `columns` must not be 0 at the same time.
         *
         * You have to release the ownership of the layout with
         * wnck_screen_release_workspace_layout() when you do not need it anymore.
         * @param current_token a token. Use 0 if you do not called wnck_screen_try_set_workspace_layout() before, or if you did not keep the old token.
         * @param rows the number of rows to use for the #WnckWorkspace layout.
         * @param columns the number of columns to use for the #WnckWorkspace layout.
         * @returns a token to use for future calls to wnck_screen_try_set_workspace_layout() and to wnck_screen_release_workspace_layout(), or 0 if the layout could not be set.
         */
        try_set_workspace_layout(current_token: number, rows: number, columns: number): number;
    }

    module Selector {
        // Constructor properties interface
    }

    /**
     * The #WnckSelector struct contains only private fields and should not be
     * directly accessed.
     */
    class Selector extends Gtk.MenuBar {
        // Own properties of Wnck-3.0.Selector

        handle: Handle;

        // Constructors of Wnck-3.0.Selector

        static ['new'](): Selector;

        static new_with_handle(handle: Handle): Selector;
    }

    module Tasklist {
        // Signal callback interfaces

        interface TaskEnterNotify {
            (windows?: any | null): void;
        }

        interface TaskLeaveNotify {
            (windows?: any | null): void;
        }

        // Constructor properties interface
    }

    /**
     * The #WnckTasklist struct contains only private fields and should not be
     * directly accessed.
     */
    class Tasklist extends Gtk.Container {
        // Own properties of Wnck-3.0.Tasklist

        handle: Handle;
        tooltips_enabled: boolean;
        tooltipsEnabled: boolean;

        // Constructors of Wnck-3.0.Tasklist

        static ['new'](): Tasklist;

        static new_with_handle(handle: Handle): Tasklist;

        // Owm methods of Wnck-3.0.Tasklist

        /**
         * Gets the scroll behavior of the `tasklist`.
         */
        get_scroll_enabled(): boolean;
        /**
         * Since a #WnckTasklist does not have a fixed size (#WnckWindow can be grouped
         * when needed, for example), the standard size request mechanism in GTK+ is
         * not enough to announce what sizes can be used by `tasklist`. The size hints
         * mechanism is a solution for this. See panel_applet_set_size_hints() for more
         * information.
         * @param n_elements return location for the number of elements in the array returned by this function. This number should always be pair.
         * @returns a list of size hints that can be used to allocate an appropriate size for @tasklist.
         */
        get_size_hint_list(n_elements: number): number;
        /**
         * Returns whether tooltips are enabled on the `tasklist`.
         */
        get_tooltips_enabled(): boolean;
        /**
         * Sets the relief type of the buttons in `tasklist` to `relief`. The main use of
         * this function is proper integration of #WnckTasklist in panels with
         * non-system backgrounds.
         * @param relief a relief type.
         */
        set_button_relief(relief: Gtk.ReliefStyle): void;
        /**
         * Sets the grouping policy for `tasklist` to `grouping`.
         * @param grouping a grouping policy.
         */
        set_grouping(grouping: TasklistGroupingType): void;
        /**
         * Sets the maximum size of buttons in `tasklist` before `tasklist` tries to
         * group #WnckWindow in the same #WnckApplication in only one button. This
         * limit is valid only when the grouping policy of `tasklist` is
         * %WNCK_TASKLIST_AUTO_GROUP.
         * @param limit a size in pixels.
         */
        set_grouping_limit(limit: number): void;
        /**
         * Sets `tasklist` to display #WnckWindow from all #WnckWorkspace or not,
         * according to `include_all_workspaces`.
         *
         * Note that if the active #WnckWorkspace has a viewport and if
         * `include_all_workspaces` is %FALSE, then only the #WnckWindow visible in the
         * viewport are displayed in `tasklist`. The rationale for this is that the
         * viewport is generally used to implement workspace-like behavior. A
         * side-effect of this is that, when using multiple #WnckWorkspace with
         * viewport, it is not possible to show all #WnckWindow from a #WnckWorkspace
         * (even those that are not visible in the viewport) in `tasklist` without
         * showing all #WnckWindow from all #WnckWorkspace.
         * @param include_all_workspaces whether to display #WnckWindow from all #WnckWorkspace in @tasklist.
         */
        set_include_all_workspaces(include_all_workspaces: boolean): void;
        /**
         * Sets `tasklist` to close windows with mouse middle click on button,
         * according to `middle_click_close`.
         * @param middle_click_close whether to close windows with middle click on button.
         */
        set_middle_click_close(middle_click_close: boolean): void;
        /**
         * Set the orientation of the `tasklist` to match `orient`.
         * This function can be used to integrate a #WnckTasklist in vertical panels.
         * @param orient a GtkOrientation.
         */
        set_orientation(orient: Gtk.Orientation): void;
        /**
         * Sets the scroll behavior of the `tasklist`. When set to %TRUE, a scroll
         * event over the tasklist will change the current window accordingly.
         * @param scroll_enabled a boolean.
         */
        set_scroll_enabled(scroll_enabled: boolean): void;
        /**
         * Sets `tasklist` to activate or not the #WnckWorkspace a #WnckWindow is on
         * when unminimizing it, according to `switch_workspace_on_unminimize`.
         *
         * FIXME: does it still work?
         * @param switch_workspace_on_unminimize whether to activate the #WnckWorkspace a #WnckWindow is on when unminimizing it.
         */
        set_switch_workspace_on_unminimize(switch_workspace_on_unminimize: boolean): void;
        /**
         * Sets whether tooltips are enabled on the `tasklist`.
         * @param tooltips_enabled a boolean.
         */
        set_tooltips_enabled(tooltips_enabled: boolean): void;
    }

    module Window {
        // Signal callback interfaces

        interface ActionsChanged {
            (changed_mask: WindowActions, new_state: WindowActions): void;
        }

        interface ClassChanged {
            (): void;
        }

        interface GeometryChanged {
            (): void;
        }

        interface IconChanged {
            (): void;
        }

        interface NameChanged {
            (): void;
        }

        interface RoleChanged {
            (): void;
        }

        interface StateChanged {
            (changed_mask: WindowState, new_state: WindowState): void;
        }

        interface TypeChanged {
            (): void;
        }

        interface WorkspaceChanged {
            (): void;
        }

        // Constructor properties interface
    }

    /**
     * The #WnckWindow struct contains only private fields and should not be
     * directly accessed.
     */
    class Window extends GObject.Object {
        // Owm methods of Wnck-3.0.Window

        /**
         * Gets a preexisting #WnckWindow for the X window `xwindow`. This will not
         * create a #WnckWindow if none exists. The function is robust against bogus
         * window IDs.
         * @param xwindow an X window ID.
         */
        static get(xwindow: number): Window;

        // Owm methods of Wnck-3.0.Window

        /**
         * Asks the window manager to make `window` the active window. The
         * window manager may choose to raise `window` along with focusing it, and may
         * decide to refuse the request (to not steal the focus if there is a more
         * recent user activity, for example).
         *
         * This function existed before 2.10, but the `timestamp` argument was missing
         * in earlier versions.
         * @param timestamp the X server timestamp of the user interaction event that caused this call to occur.
         */
        activate(timestamp: number): void;
        /**
         * If `window` has transients, activates the most likely transient
         * instead of the window itself. Otherwise activates `window`.
         *
         * FIXME the ideal behavior of this function is probably to activate
         * the most recently active window among `window` and its transients.
         * This is probably best implemented on the window manager side.
         *
         * This function existed before 2.10, but the `timestamp` argument was missing
         * in earlier versions.
         * @param timestamp the X server timestamp of the user interaction event that caused this call to occur.
         */
        activate_transient(timestamp: number): void;
        /**
         * Closes `window`.
         *
         * This function existed before 2.6, but the `timestamp` argument was missing
         * in earlier versions.
         * @param timestamp the X server timestamp of the user interaction event that caused this call to occur.
         */
        close(timestamp: number): void;
        /**
         * Gets the actions that can be done for `window`.
         * @returns bitmask of actions that can be done for @window.
         */
        get_actions(): WindowActions;
        /**
         * Gets the #WnckApplication to which `window` belongs.
         * @returns the #WnckApplication to which @window belongs. The returned #WnckApplication is owned by libwnck and must not be referenced or unreferenced.
         */
        get_application(): Application;
        /**
         * Gets the #WnckClassGroup to which `window` belongs.
         * @returns the #WnckClassGroup to which @window belongs. The returned #WnckClassGroup is owned by libwnck and must not be referenced or unreferenced.
         */
        get_class_group(): ClassGroup;
        /**
         * Gets the class group name from the <ulink
         * url="http://tronche.com/gui/x/icccm/sec-4.html&num;WM_CLASS">WM_CLASS Property</ulink>
         * for `window`.
         *
         * The class group name is also the identifier name of the #WnckClassGroup to
         * which `window` belongs.
         * @returns the class group name for @window, or %NULL if @window belongs to no class group.
         */
        get_class_group_name(): string;
        /**
         * Gets the class instance name from the <ulink
         * url="http://tronche.com/gui/x/icccm/sec-4.html&num;WM_CLASS">WM_CLASS Property</ulink>
         * for `window`.
         *
         * The class instance name allows to differentiate windows belonging to the
         * same class group, so that they can use different resources.
         * @returns the class instance name for @window, or %NULL if @window has no class instance.
         */
        get_class_instance_name(): string;
        /**
         * Gets the size and position of `window,` as last received
         * in a ConfigureNotify event (i.e. this call does not round-trip
         * to the server, just gets the last size we were notified of).
         * The X and Y coordinates are relative to the root window.
         *
         * The window manager usually adds a frame around windows. If
         * you need to know the size of `window` with the frame, use
         * wnck_window_get_geometry().
         */
        get_client_window_geometry(): void;
        /**
         * Gets the size and position of `window,` including decorations. This
         * function uses the information last received in a ConfigureNotify
         * event and adjusts it according to the size of the frame that is
         * added by the window manager (this call does not round-trip to the
         * server, it just gets the last sizes that were notified). The
         * X and Y coordinates are relative to the root window.
         *
         * If you need to know the actual size of `window` ignoring the frame
         * added by the window manager, use wnck_window_get_client_window_geometry().
         */
        get_geometry(): void;
        /**
         * Gets the group leader of the group of windows to which `window` belongs.
         * @returns the group leader of the group of windows to which @window belongs, or the X window ID of @window if @window does not belong to any group.
         */
        get_group_leader(): number;
        /**
         * Gets the icon to be used for `window`. If no icon was found, a fallback
         * icon is used. wnck_window_get_icon_is_fallback() can be used to tell if the
         * icon is the fallback icon.
         * @returns the icon for @window. The caller should reference the returned <classname>GdkPixbuf</classname> if it needs to keep the icon around.
         */
        get_icon(): GdkPixbuf.Pixbuf;
        /**
         * Gets whether a default fallback icon is used for `window` (because none
         * was set on `window)`.
         * @returns %TRUE if the icon for @window is a fallback, %FALSE otherwise.
         */
        get_icon_is_fallback(): boolean;
        /**
         * Gets the icon name of `window,` as it should be displayed for an icon
         * (minimized state). Always returns some value, even if `window` has no icon
         * name set; use wnck_window_has_icon_name() if you need to know whether the
         * returned icon name is "real" or not.
         *
         * Contrast with wnck_window_get_name(), which returns `window<`!-- -->'s
         * title, not its icon title.
         * @returns the icon name of @window, or a fallback icon name if no icon name is available.
         */
        get_icon_name(): string;
        /**
         * Gets the mini-icon to be used for `window`. If no mini-icon was found, a
         * fallback mini-icon is used. wnck_window_get_icon_is_fallback() can be used
         * to tell if the mini-icon is the fallback mini-icon.
         * @returns the mini-icon for @window. The caller should reference the returned <classname>GdkPixbuf</classname> if it needs to keep the icon around.
         */
        get_mini_icon(): GdkPixbuf.Pixbuf;
        /**
         * Gets the name of `window,` as it should be displayed in a pager
         * or tasklist. Always returns some value, even if `window` has no name
         * set; use wnck_window_has_name() if you need to know whether the returned
         * name is "real" or not.
         *
         * For icons titles, use wnck_window_get_icon_name() instead.
         * @returns the name of @window, or a fallback name if no name is available.
         */
        get_name(): string;
        /**
         * Gets the process ID of `window`.
         * @returns the process ID of @window, or 0 if none is available.
         */
        get_pid(): number;
        /**
         * Gets the role for `window`.
         * The role uniquely identifies a window among all windows that have the same
         * client leader window.
         * @returns role for @window, or %NULL if @window has no role.
         */
        get_role(): string;
        /**
         * Gets the #WnckScreen `window` is on.
         * @returns the #WnckScreen @window is on. The returned #WnckScreen is owned by libwnck and must not be referenced or unreferenced.
         */
        get_screen(): Screen;
        /**
         * Gets the session ID for `window` in Latin-1 encoding.
         * NOTE: this is invalid UTF-8. You can't display this
         * string in a GTK+ widget without converting to UTF-8.
         * See wnck_window_get_session_id_utf8().
         * @returns the session ID for @window in Latin-1, or %NULL if @window has no session ID.
         */
        get_session_id(): string;
        /**
         * Gets the session ID for `window` in UTF-8 encoding.
         * The session ID should be in Latin-1 encoding, so the conversion should work,
         * but a broken client could set a session ID that might not be convertable to
         * UTF-8.
         * @returns the session ID for @window in UTF-8, or %NULL if @window has no session ID.
         */
        get_session_id_utf8(): string;
        /**
         * Gets the sort order of `window,` used for ordering of `window` in
         * #WnckSelector and #WnckTasklist. The sort order is an internal state in
         * libwnck. The initial value is defined when the window is created.
         * @returns the sort order of @window, or G_MAXINT if none is available.
         */
        get_sort_order(): number;
        /**
         * Gets the state of `window`.
         * @returns bitmask of active states for @window.
         */
        get_state(): WindowState;
        /**
         * Gets the #WnckWindow for which `window` is transient.
         * @returns the #WnckWindow for which @window is transient, or %NULL if @window is not transient for any #WnckWindow. The returned #WnckWindow is owned by libwnck and must not be referenced or unreferenced.
         */
        get_transient(): Window;
        /**
         * Gets the semantic type of `window`.
         * @returns the semantic type of @window.
         */
        get_window_type(): WindowType;
        /**
         * Gets the current workspace `window` is on. If the window is pinned (on all
         * workspaces), or not on any workspaces, %NULL may be returned.
         * @returns the single current workspace @window is on, or %NULL. The returned #WnckWorkspace is owned by libwnck and must not be referenced or unreferenced.
         */
        get_workspace(): Workspace;
        /**
         * Gets the X window ID of `window`.
         * @returns the X window ID of @window.
         */
        get_xid(): number;
        /**
         * Checks whether or not `window` has an icon name.
         * wnck_window_get_icon_name() will always return some value, even if
         * `window` has no icon name set; wnck_window_has_icon_name() can
         * be used to tell if that icon name is real or not.
         *
         * (Note that if wnck_window_has_icon_name() returns %FALSE, but
         * wnck_window_has_name() returns %TRUE, then the name returned by
         * wnck_window_get_icon_name() is `window<`!-- -->'s name. Only when both
         * methods return %FALSE does wnck_window_get_icon_name() return a
         * generic fallback name.)
         * @returns %TRUE if wnck_window_get_icon_name() returns @window<!-- -->'s icon name, %FALSE if it returns a fallback name.
         */
        has_icon_name(): boolean;
        /**
         * Checks whether or not `window` has a name. wnck_window_get_name()
         * will always return some value, even if `window` has no name set;
         * wnck_window_has_name() can be used to tell if that name is
         * real or not.
         *
         * For icons titles, use wnck_window_has_icon_name() instead.
         * @returns %TRUE if wnck_window_get_name() returns @window<!-- -->'s name, %FALSE if it returns a fallback name.
         */
        has_name(): boolean;
        /**
         * Gets whether `window` is above other windows. This state may change
         * anytime a #WnckWindow::state-changed signal gets emitted.
         *
         * See wnck_window_make_above() for more details on this state.
         * @returns %TRUE if @window is above other windows, %FALSE otherwise.
         */
        is_above(): boolean;
        /**
         * Gets whether `window` is the active window on its #WnckScreen.
         * @returns %TRUE if @window is the active window on its #WnckScreen, %FALSE otherwise.
         */
        is_active(): boolean;
        /**
         * Gets whether `window` is below other windows. This state may change
         * anytime a #WnckWindow::state-changed signal gets emitted.
         *
         * See wnck_window_make_below() for more details on this state.
         * @returns %TRUE if @window is below other windows, %FALSE otherwise.
         */
        is_below(): boolean;
        /**
         * Gets whether `window` is fullscreen. Fullscreen state may change
         * anytime a #WnckWindow::state-changed signal gets emitted.
         * @returns %TRUE if @window is fullscreen, %FALSE otherwise.
         */
        is_fullscreen(): boolean;
        /**
         * Gets %TRUE if `window` appears in the current viewport of `workspace`.
         * @param workspace a #WnckWorkspace.
         * @returns %TRUE if @window appears in current viewport of @workspace, %FALSE otherwise.
         */
        is_in_viewport(workspace: Workspace): boolean;
        /**
         * Gets whether `window` is maximized. Maximization state may change
         * anytime a #WnckWindow::state-changed signal gets emitted.
         *
         * As for GDK, "maximized" means both vertically and horizontally. If `window`
         * is maximized in only one direction, then `window` is not considered
         * maximized.
         * @returns %TRUE if @window is maximized in both directions, %FALSE otherwise.
         */
        is_maximized(): boolean;
        /**
         * Gets whether `window` is maximized horizontally. Horizontal maximization
         * state may change anytime a #WnckWindow::state-changed signal gets emitted.
         * @returns %TRUE if @window is maximized horizontally, %FALSE otherwise.
         */
        is_maximized_horizontally(): boolean;
        /**
         * Gets whether `window` is maximized vertically. vertiVal maximization
         * state may change anytime a #WnckWindow::state-changed signal gets emitted.
         * @returns %TRUE if @window is maximized vertically, %FALSE otherwise.
         */
        is_maximized_vertically(): boolean;
        /**
         * Gets whether `window` is minimized. Minimization state may change anytime
         * a #WnckWindow::state-changed signal gets emitted.
         * @returns %TRUE if @window is minimized, %FALSE otherwise.
         */
        is_minimized(): boolean;
        /**
         * Gets whether `window` is the most recently activated window on its
         * #WnckScreen.
         *
         * The most recently activated window is identical to the active
         * window for click and sloppy focus methods (since a window is always
         * active in those cases) but differs slightly for mouse focus since
         * there often is no active window.
         * @returns %TRUE if @window was the most recently activated window on its #WnckScreen, %FALSE otherwise.
         */
        is_most_recently_activated(): boolean;
        /**
         * Gets whether `window` appears on `workspace`.
         * @param workspace a #WnckWorkspace.
         * @returns %TRUE if @window appears on @workspace, %FALSE otherwise.
         */
        is_on_workspace(workspace: Workspace): boolean;
        /**
         * Gets whether `window` is on all workspace. Pinned state may change
         * anytime a #WnckWindow::workspace-changed signal gets emitted, but not when
         * a #WnckWindow::state-changed gets emitted.
         * @returns %TRUE if @window is on all workspaces, %FALSE otherwise.
         */
        is_pinned(): boolean;
        /**
         * Gets whether `window` is shaded. Shade state may change anytime
         * a #WnckWindow::state-changed signal gets emitted.
         * @returns %TRUE if @window is shaded, %FALSE otherwise.
         */
        is_shaded(): boolean;
        /**
         * Gets whether `window` is included on pagers. This state may change
         * anytime a #WnckWindow::state-changed signal gets emitted.
         * @returns %TRUE if @window is included on pagers, %FALSE otherwise.
         */
        is_skip_pager(): boolean;
        /**
         * Gets whether `window` is included on tasklists. This state may change
         * anytime a #WnckWindow::state-changed signal gets emitted.
         * @returns %TRUE if @window is included on tasklists, %FALSE otherwise.
         */
        is_skip_tasklist(): boolean;
        /**
         * Gets whether `window` is sticky. Sticky state may change
         * anytime a #WnckWindow::state-changed signal gets emitted.
         *
         * Sticky here means "stuck to the glass", i.e. does not scroll with the
         * viewport. In GDK/GTK+ (e.g. gdk_window_stick()/gtk_window_stick()), sticky
         * means "stuck to the glass" and <emphasis>also</emphasis> that the window is
         * on all workspaces. But here it only means the viewport aspect of it.
         * @returns %TRUE if @window is "stuck to the glass", %FALSE otherwise.
         */
        is_sticky(): boolean;
        /**
         * Like wnck_window_is_on_workspace(), but also checks that
         * the window is in a visible state (i.e. not minimized or shaded).
         * @param workspace a #WnckWorkspace.
         * @returns %TRUE if @window appears on @workspace in normal state, %FALSE otherwise.
         */
        is_visible_on_workspace(workspace: Workspace): boolean;
        /**
         * Asks the window manager to start moving `window` via the keyboard.
         */
        keyboard_move(): void;
        /**
         * Asks the window manager to start resizing `window` via the keyboard.
         */
        keyboard_size(): void;
        /**
         * Asks the window manager to put `window` on top of most windows (`window` will
         * not be on top of focused fullscreen windows, of other windows with this
         * setting and of dock windows).
         */
        make_above(): void;
        /**
         * Asks the window manager to put `window` below most windows.
         */
        make_below(): void;
        /**
         * Asks the window manager to maximize `window`.
         */
        maximize(): void;
        /**
         * Asks the window manager to maximize horizontally `window`.
         */
        maximize_horizontally(): void;
        /**
         * Asks the window manager to maximize vertically `window`.
         */
        maximize_vertically(): void;
        /**
         * Minimizes `window`.
         */
        minimize(): void;
        /**
         * Asks the window manager to move `window` to `space`. If `window` was pinned, it
         * will also result in `window` being visible only on `space`.
         * @param space a #WnckWorkspace.
         */
        move_to_workspace(space: Workspace): void;
        /**
         * Gets whether `window` needs attention. This state may change anytime
         * a #WnckWindow::state-changed signal gets emitted.
         *
         * This state depends on flags such as the demands_attention and is_urgent
         * hints.
         * @returns %TRUE if @window needs attention, %FALSE otherwise.
         */
        needs_attention(): boolean;
        /**
         * Gets whether `window` or one of its transients needs attention. This state
         * may change anytime a #WnckWindow::state-changed signal gets emitted.
         * @returns %TRUE if @window or one of its transients needs attention, %FALSE otherwise.
         */
        or_transient_needs_attention(): boolean;
        /**
         * Asks the window manager to put `window` on all workspaces.
         */
        pin(): void;
        /**
         * Asks the window manager to set the fullscreen state of `window` according to
         * `fullscreen`.
         * @param fullscreen whether to make @window fullscreen.
         */
        set_fullscreen(fullscreen: boolean): void;
        /**
         * Sets the size and position of `window`. The X and Y coordinates should be
         * relative to the root window.
         *
         * Note that the new size and position apply to `window` with its frame added
         * by the window manager. Therefore, using wnck_window_set_geometry() with
         * the values returned by wnck_window_get_geometry() should be a no-op, while
         * using wnck_window_set_geometry() with the values returned by
         * wnck_window_get_client_window_geometry() should reduce the size of `window`
         * and move it.
         * @param gravity the gravity point to use as a reference for the new position.
         * @param geometry_mask a bitmask containing flags for what should be set.
         * @param x new X coordinate in pixels of @window.
         * @param y new Y coordinate in pixels of @window.
         * @param width new width in pixels of @window.
         * @param height new height in pixels of @window.
         */
        set_geometry(
            gravity: WindowGravity,
            geometry_mask: WindowMoveResizeMask,
            x: number,
            y: number,
            width: number,
            height: number,
        ): void;
        /**
         * Sets the icon geometry for `window`. A typical use case for this is the
         * destination of the minimization animation of `window`.
         * @param x X coordinate in pixels.
         * @param y Y coordinate in pixels.
         * @param width width in pixels.
         * @param height height in pixels.
         */
        set_icon_geometry(x: number, y: number, width: number, height: number): void;
        /**
         * Asks the window manager to make `window` included or not included on pagers.
         * @param skip whether @window should be included on pagers.
         */
        set_skip_pager(skip: boolean): void;
        /**
         * Asks the window manager to make `window` included or not included on
         * tasklists.
         * @param skip whether @window should be included on tasklists.
         */
        set_skip_tasklist(skip: boolean): void;
        /**
         * Sets the sort order of `window`. The sort order is used for ordering of
         * `window` in #WnckSelector and #WnckTasklist.
         * @param order new sort order for @window.
         */
        set_sort_order(order: number): void;
        /**
         * Sets the semantic type of `window` to `wintype`.
         * @param wintype a semantic type.
         */
        set_window_type(wintype: WindowType): void;
        /**
         * Asks the window manager to shade `window`.
         */
        shade(): void;
        /**
         * Asks the window manager to keep the `window<`!-- -->'s position fixed on the
         * screen, even when the workspace or viewport scrolls.
         */
        stick(): void;
        /**
         * Gets whether one of the transients of `window` is the most
         * recently activated window. See
         * wnck_window_is_most_recently_activated() for a more complete
         * description of what is meant by most recently activated.  This
         * function is needed because clicking on a #WnckTasklist once will
         * activate a transient instead of `window` itself
         * (wnck_window_activate_transient), and clicking again should
         * minimize `window` and its transients.  (Not doing this can be
         * especially annoying in the case of modal dialogs that don't appear
         * in the #WnckTasklist).
         * @returns %TRUE if one of the transients of @window is the most recently activated window, %FALSE otherwise.
         */
        transient_is_most_recently_activated(): boolean;
        /**
         * Asks the window manager to not put `window` on top of most windows, and to
         * put it again in the stack with other windows.
         */
        unmake_above(): void;
        /**
         * Asks the window manager to not put `window` below most windows, and to
         * put it again in the stack with other windows.
         */
        unmake_below(): void;
        /**
         * Asks the window manager to unmaximize `window`.
         */
        unmaximize(): void;
        /**
         * Asks the window manager to unmaximize horizontally `window`.
         */
        unmaximize_horizontally(): void;
        /**
         * Asks the window manager to unmaximize vertically `window`.
         */
        unmaximize_vertically(): void;
        /**
         * Unminimizes `window` by activating it or one of its transients. See
         * wnck_window_activate_transient() for details on how the activation is done.
         * @param timestamp the X server timestamp of the user interaction event that caused this call to occur.
         */
        unminimize(timestamp: number): void;
        /**
         * Asks the window manager to put `window` only in the currently active
         * workspace, if `window` was previously pinned. If `window` was not pinned,
         * does not change `window<`!-- -->'s workspace. If the active workspace
         * is not known for some reason (it should not happen much), sets
         * `window<`!-- -->'s workspace to the first workspace.
         */
        unpin(): void;
        /**
         * Asks the window manager to unshade `window`.
         */
        unshade(): void;
        /**
         * Asks the window manager to not have `window<`!-- -->'s position fixed on the
         * screen when the workspace or viewport scrolls.
         */
        unstick(): void;
    }

    module Workspace {
        // Signal callback interfaces

        interface NameChanged {
            (): void;
        }

        // Constructor properties interface
    }

    /**
     * The #WnckWorkspace struct contains only private fields and should not be
     * directly accessed.
     */
    class Workspace extends GObject.Object {
        // Owm methods of Wnck-3.0.Workspace

        /**
         * Asks the window manager to make `space` the active workspace. The window
         * manager may decide to refuse the request (to not steal the focus if there is
         * a more recent user activity, for example).
         *
         * This function existed before 2.10, but the `timestamp` argument was missing
         * in earlier versions.
         * @param timestamp the X server timestamp of the user interaction event that caused this call to occur.
         */
        activate(timestamp: number): void;
        /**
         * Changes the name of `space`.
         * @param name new name for @space.
         */
        change_name(name: string): void;
        /**
         * Gets the height of `space`.
         * @returns the height of @space.
         */
        get_height(): number;
        /**
         * Gets the column of `space` in the #WnckWorkspace layout. The first column
         * has an index of 0 and is always the left column, regardless of the starting
         * corner set for the layout and regardless of the default direction of the
         * environment (i.e., in both Left-To-Right and Right-To-Left environments).
         * @returns the column of @space in the #WnckWorkspace layout, or -1 on errors.
         */
        get_layout_column(): number;
        /**
         * Gets the row of `space` in the #WnckWorkspace layout. The first row has an
         * index of 0 and is always the top row, regardless of the starting corner set
         * for the layout.
         * @returns the row of @space in the #WnckWorkspace layout, or -1 on errors.
         */
        get_layout_row(): number;
        /**
         * Gets the human-readable name that should be used to refer to `space`. If
         * the user has not set a special name, a fallback like "Workspace 3" will be
         * used.
         * @returns the name of @space.
         */
        get_name(): string;
        /**
         * Gets the neighbor #WnckWorkspace of `space` in the `direction` direction.
         * @param direction direction in which to search the neighbor.
         * @returns the neighbor #WnckWorkspace of @space in the @direction direction, or %NULL if no such neighbor #WnckWorkspace exists. The returned #WnckWorkspace is owned by libwnck and must not be referenced or unreferenced.
         */
        get_neighbor(direction: MotionDirection): Workspace;
        /**
         * Gets the index of `space` on the #WnckScreen to which it belongs. The
         * first workspace has an index of 0.
         * @returns the index of @space on its #WnckScreen, or -1 on errors.
         */
        get_number(): number;
        /**
         * Gets the #WnckScreen `space` is on.
         * @returns the #WnckScreen @space is on. The returned #WnckScreen is owned by libwnck and must not be referenced or unreferenced.
         */
        get_screen(): Screen;
        /**
         * Gets the X coordinate of the viewport in `space`.
         * @returns the X coordinate of the viewport in @space, or 0 if @space does not contain a viewport.
         */
        get_viewport_x(): number;
        /**
         * Gets the Y coordinate of the viewport in `space`.
         * @returns the Y coordinate of the viewport in @space, or 0 if @space does not contain a viewport.
         */
        get_viewport_y(): number;
        /**
         * Gets the width of `space`.
         * @returns the width of @space.
         */
        get_width(): number;
        /**
         * Gets whether `space` contains a viewport.
         * @returns %TRUE if @space contains a viewport, %FALSE otherwise.
         */
        is_virtual(): boolean;
    }

    class ActionMenuClass {}

    class ActionMenuPrivate {}

    class ApplicationClass {}

    class ApplicationPrivate {}

    class ClassGroupClass {}

    class ClassGroupPrivate {}

    class HandleClass {}

    class IconCache {}

    class ImageMenuItemClass {}

    class PagerClass {}

    class PagerPrivate {}

    /**
     * The #WnckResourceUsage struct contains information about the total resource
     * usage of an X client, and the number of resources allocated for each
     * resource type.
     */
    class ResourceUsage {
        // Own fields of Wnck-3.0.ResourceUsage

        total_bytes_estimate: number;
        pixmap_bytes: number;
        n_pixmaps: number;
        n_windows: number;
        n_gcs: number;
        n_pictures: number;
        n_glyphsets: number;
        n_fonts: number;
        n_colormap_entries: number;
        n_passive_grabs: number;
        n_cursors: number;
        n_other: number;

        // Constructors of Wnck-3.0.ResourceUsage

        constructor(
            properties?: Partial<{
                total_bytes_estimate: number;
                pixmap_bytes: number;
                n_pixmaps: number;
                n_windows: number;
                n_gcs: number;
                n_pictures: number;
                n_glyphsets: number;
                n_fonts: number;
                n_colormap_entries: number;
                n_passive_grabs: number;
                n_cursors: number;
                n_other: number;
            }>,
        );
    }

    class ScreenClass {}

    class ScreenPrivate {}

    class SelectorClass {}

    class SelectorPrivate {}

    class TasklistClass {}

    class TasklistPrivate {}

    class WindowClass {}

    class WindowPrivate {}

    class WorkspaceClass {}

    /**
     * The #WnckWorkspaceLayout struct contains information about the layout of
     * #WnckWorkspace on a #WnckScreen, and the exact position of a specific
     * #WnckWorkspace.
     */
    class WorkspaceLayout {
        // Own fields of Wnck-3.0.WorkspaceLayout

        rows: number;
        cols: number;
        grid: number;
        grid_area: number;
        current_row: number;
        current_col: number;

        // Constructors of Wnck-3.0.WorkspaceLayout

        constructor(
            properties?: Partial<{
                rows: number;
                cols: number;
                grid: number;
                grid_area: number;
                current_row: number;
                current_col: number;
            }>,
        );
    }

    class WorkspacePrivate {}

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

export default Wnck;
// END
