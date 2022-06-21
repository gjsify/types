// @ts-nocheck

/*
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Wnck-3.0
 */

import type * as Gjs from './Gjs';
import type Gtk from './Gtk-3.0';
import type xlib from './xlib-2.0';
import type Gdk from './Gdk-3.0';
import type cairo from './cairo-1.0';
import type Pango from './Pango-1.0';
import type HarfBuzz from './HarfBuzz-0.0';
import type GObject from './GObject-2.0';
import type GLib from './GLib-2.0';
import type Gio from './Gio-2.0';
import type GdkPixbuf from './GdkPixbuf-2.0';
import type GModule from './GModule-2.0';
import type Atk from './Atk-1.0';

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
    TODO_2D,
    /**
     * the #WnckPager will always cycle workspaces in a linear
     * manner, irrespective of how many rows are configured. (Hint: Better for mice)
     * Example cycling order with 2 rows and 4 workspaces: 1 2 3 4.
     */
    TODO_1D,
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
/**
 * Type used as a bitmask to describe the actions that can be done for a
 * #WnckWindow.
 * @bitfield 
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
 * @bitfield 
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
 * @bitfield 
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
const DEFAULT_ICON_SIZE: number
const DEFAULT_MINI_ICON_SIZE: number
const MAJOR_VERSION: number
const MICRO_VERSION: number
const MINOR_VERSION: number
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
 * @param usage return location for the X resource usage of the application with process ID `pid`.
 */
function pid_read_resource_usage(gdk_display: Gdk.Display, pid: number, usage: ResourceUsage): void
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
function set_client_type(ewmh_sourceindication_client_type: ClientType): void
/**
 * The default main icon size is %WNCK_DEFAULT_ICON_SIZE. This function allows
 * to change this value.
 * @param size the default size for windows and application standard icons.
 */
function set_default_icon_size(size: number): void
/**
 * The default main icon size is %WNCK_DEFAULT_MINI_ICON_SIZE. This function
 * allows to change this value.
 * @param size the default size for windows and application mini icons.
 */
function set_default_mini_icon_size(size: number): void
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
function shutdown(): void
/**
 * Looks for the X resource usage of the application owning the X window ID
 * `xid` on display `gdisplay`. If no resource usage can be found, then all
 * fields of `usage` are set to 0.
 * 
 * To properly work, this function requires the XRes extension on the X server.
 * @param gdk_display a <classname>GdkDisplay</classname>.
 * @param xid an X window ID.
 * @param usage return location for the X resource usage of the application owning the X window ID `xid`.
 */
function xid_read_resource_usage(gdk_display: Gdk.Display, xid: number, usage: ResourceUsage): void
interface ActionMenu_ConstructProps extends Atk.ImplementorIface_ConstructProps, Gtk.Buildable_ConstructProps, Gtk.Menu_ConstructProps {

    // Own constructor properties of Wnck-3.0.Wnck.ActionMenu

    window?: object | null
}

interface ActionMenu extends Atk.ImplementorIface, Gtk.Buildable {

    // Own properties of Wnck-3.0.Wnck.ActionMenu

    readonly window: object

    // Own fields of Wnck-3.0.Wnck.ActionMenu

    parent_instance: Gtk.Menu
    priv: ActionMenuPrivate

    // Conflicting methods

    set_accel_path(...args: any[]): any
    child_notify(...args: any[]): any

    // Class property signals of Wnck-3.0.Wnck.ActionMenu

    connect(sigName: "notify::window", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::accel-group", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accel-group", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accel-group", ...args: any[]): void
    connect(sigName: "notify::accel-path", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accel-path", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accel-path", ...args: any[]): void
    connect(sigName: "notify::active", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::active", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::active", ...args: any[]): void
    connect(sigName: "notify::anchor-hints", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::anchor-hints", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::anchor-hints", ...args: any[]): void
    connect(sigName: "notify::attach-widget", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::attach-widget", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::attach-widget", ...args: any[]): void
    connect(sigName: "notify::menu-type-hint", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::menu-type-hint", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::menu-type-hint", ...args: any[]): void
    connect(sigName: "notify::monitor", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::monitor", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::monitor", ...args: any[]): void
    connect(sigName: "notify::rect-anchor-dx", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rect-anchor-dx", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rect-anchor-dx", ...args: any[]): void
    connect(sigName: "notify::rect-anchor-dy", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::rect-anchor-dy", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::rect-anchor-dy", ...args: any[]): void
    connect(sigName: "notify::reserve-toggle-size", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::reserve-toggle-size", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::reserve-toggle-size", ...args: any[]): void
    connect(sigName: "notify::tearoff-state", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tearoff-state", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tearoff-state", ...args: any[]): void
    connect(sigName: "notify::tearoff-title", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tearoff-title", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tearoff-title", ...args: any[]): void
    connect(sigName: "notify::take-focus", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::take-focus", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::take-focus", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: ActionMenu, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #WnckActionMenu struct contains only private fields and should not be
 * directly accessed.
 * @class 
 */
class ActionMenu extends Gtk.Menu {

    // Own properties of Wnck-3.0.Wnck.ActionMenu

    static name: string
    static $gtype: GObject.GType<ActionMenu>

    // Constructors of Wnck-3.0.Wnck.ActionMenu

    constructor(config?: ActionMenu_ConstructProps) 
    /**
     * Creates a new #WnckActionMenu. The #WnckActionMenu will be filled with menu
     * items for window operations on `window`.
     * @constructor 
     * @param window the #WnckWindow for which a menu will be created.
     */
    constructor(window: Window) 
    /**
     * Creates a new #WnckActionMenu. The #WnckActionMenu will be filled with menu
     * items for window operations on `window`.
     * @constructor 
     * @param window the #WnckWindow for which a menu will be created.
     */
    static new(window: Window): ActionMenu

    // Overloads of new

    /**
     * Creates a new #GtkMenu
     * @constructor 
     */
    static new(): Gtk.Menu
    _init(config?: ActionMenu_ConstructProps): void
}

interface Application_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `icon-changed`
 */
interface Application_IconChangedSignalCallback {
    ($obj: Application): void
}

/**
 * Signal callback interface for `name-changed`
 */
interface Application_NameChangedSignalCallback {
    ($obj: Application): void
}

interface Application {

    // Own fields of Wnck-3.0.Wnck.Application

    parent_instance: GObject.Object
    priv: ApplicationPrivate

    // Owm methods of Wnck-3.0.Wnck.Application

    /**
     * Gets the icon to be used for `app`. If no icon is set for `app,` a
     * suboptimal heuristic is used to find an appropriate icon. If no icon was
     * found, a fallback icon is used.
     */
    get_icon(): GdkPixbuf.Pixbuf
    /**
     * Gets whether a default fallback icon is used for `app` (because none
     * was set on `app)`.
     */
    get_icon_is_fallback(): boolean
    /**
     * Gets the icon name of `app` (to be used when `app` is minimized). Since
     * there is no way to properly find this name, various suboptimal heuristics
     * are used to find it.
     */
    get_icon_name(): string
    /**
     * Gets the mini-icon to be used for `app`. If no mini-icon is set for `app,`
     * a suboptimal heuristic is used to find an appropriate icon. If no mini-icon
     * was found, a fallback mini-icon is used.
     */
    get_mini_icon(): GdkPixbuf.Pixbuf
    /**
     * Gets the number of #WnckWindow belonging to `app`.
     */
    get_n_windows(): number
    /**
     * Gets the name of `app`. Since there is no way to properly find this name,
     * various suboptimal heuristics are used to find it. GTK+ should probably have
     * a function to allow applications to set the _NET_WM_NAME property on the
     * group leader as the application name, and the <ulink
     * url="http://standards.freedesktop.org/wm-spec/wm-spec-latest.html">EWMH</ulink>
     * should say that this is where the application name goes.
     */
    get_name(): string
    /**
     * Gets the process ID of `app`.
     */
    get_pid(): number
    /**
     * Gets the startup sequence ID used for startup notification of `app`.
     */
    get_startup_id(): string
    /**
     * Gets the list of #WnckWindow belonging to `app`.
     */
    get_windows(): Window[]
    /**
     * Gets the X window ID of the group leader window for `app`.
     */
    get_xid(): number

    // Own virtual methods of Wnck-3.0.Wnck.Application

    vfunc_icon_changed(): void
    vfunc_name_changed(): void

    // Own signals of Wnck-3.0.Wnck.Application

    connect(sigName: "icon-changed", callback: Application_IconChangedSignalCallback): number
    connect_after(sigName: "icon-changed", callback: Application_IconChangedSignalCallback): number
    emit(sigName: "icon-changed", ...args: any[]): void
    connect(sigName: "name-changed", callback: Application_NameChangedSignalCallback): number
    connect_after(sigName: "name-changed", callback: Application_NameChangedSignalCallback): number
    emit(sigName: "name-changed", ...args: any[]): void

    // Class property signals of Wnck-3.0.Wnck.Application

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #WnckApplication struct contains only private fields and should not be
 * directly accessed.
 * @class 
 */
class Application extends GObject.Object {

    // Own properties of Wnck-3.0.Wnck.Application

    static name: string
    static $gtype: GObject.GType<Application>

    // Constructors of Wnck-3.0.Wnck.Application

    constructor(config?: Application_ConstructProps) 
    _init(config?: Application_ConstructProps): void
    /**
     * Gets the #WnckApplication corresponding to the group leader with `xwindow`
     * as X window ID.
     * @param xwindow the X window ID of a group leader.
     */
    static get(xwindow: number): Application
}

interface ClassGroup_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `icon-changed`
 */
interface ClassGroup_IconChangedSignalCallback {
    ($obj: ClassGroup): void
}

/**
 * Signal callback interface for `name-changed`
 */
interface ClassGroup_NameChangedSignalCallback {
    ($obj: ClassGroup): void
}

interface ClassGroup {

    // Own fields of Wnck-3.0.Wnck.ClassGroup

    parent_instance: GObject.Object
    priv: ClassGroupPrivate

    // Owm methods of Wnck-3.0.Wnck.ClassGroup

    /**
     * Gets the icon to be used for `class_group`. Since there is no way to
     * properly find the icon, a suboptimal heuristic is used to find it. The icon
     * is the first icon found by looking at all the #WnckApplication for each
     * #WnckWindow in `class_group,` then at all the #WnckWindow in `class_group`. If
     * no icon was found, a fallback icon is used.
     */
    get_icon(): GdkPixbuf.Pixbuf
    /**
     * Gets the identifier name for `class_group`. This is the resource class for
     * `class_group`.
     */
    get_id(): string
    /**
     * Gets the mini-icon to be used for `class_group`. Since there is no way to
     * properly find the mini-icon, the same suboptimal heuristic as the one for
     * wnck_class_group_get_icon() is used to find it.
     */
    get_mini_icon(): GdkPixbuf.Pixbuf
    /**
     * Gets an human-readable name for `class_group`. Since there is no way to
     * properly find this name, a suboptimal heuristic is used to find it. The name
     * is the name of all #WnckApplication for each #WnckWindow in `class_group` if
     * they all have the same name. If all #WnckApplication don't have the same
     * name, the name is the name of all #WnckWindow in `class_group` if they all
     * have the same name. If all #WnckWindow don't have the same name, the
     * resource class name is used.
     */
    get_name(): string
    /**
     * Gets the resource class name for `class_group`.
     */
    get_res_class(): string
    /**
     * Gets the list of #WnckWindow that are grouped in `class_group`.
     */
    get_windows(): Window[]

    // Own virtual methods of Wnck-3.0.Wnck.ClassGroup

    vfunc_icon_changed(): void
    vfunc_name_changed(): void

    // Own signals of Wnck-3.0.Wnck.ClassGroup

    connect(sigName: "icon-changed", callback: ClassGroup_IconChangedSignalCallback): number
    connect_after(sigName: "icon-changed", callback: ClassGroup_IconChangedSignalCallback): number
    emit(sigName: "icon-changed", ...args: any[]): void
    connect(sigName: "name-changed", callback: ClassGroup_NameChangedSignalCallback): number
    connect_after(sigName: "name-changed", callback: ClassGroup_NameChangedSignalCallback): number
    emit(sigName: "name-changed", ...args: any[]): void

    // Class property signals of Wnck-3.0.Wnck.ClassGroup

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #WnckClassGroup struct contains only private fields and should not be
 * directly accessed.
 * @class 
 */
class ClassGroup extends GObject.Object {

    // Own properties of Wnck-3.0.Wnck.ClassGroup

    static name: string
    static $gtype: GObject.GType<ClassGroup>

    // Constructors of Wnck-3.0.Wnck.ClassGroup

    constructor(config?: ClassGroup_ConstructProps) 
    _init(config?: ClassGroup_ConstructProps): void
    /**
     * Gets the #WnckClassGroup corresponding to `id`.
     * @param id identifier name of the sought resource class.
     */
    static get(id: string): ClassGroup
}

interface ImageMenuItem_ConstructProps extends Atk.ImplementorIface_ConstructProps, Gtk.Actionable_ConstructProps, Gtk.Activatable_ConstructProps, Gtk.Buildable_ConstructProps, Gtk.MenuItem_ConstructProps {
}

interface ImageMenuItem extends Atk.ImplementorIface, Gtk.Actionable, Gtk.Activatable, Gtk.Buildable {

    // Owm methods of Wnck-3.0.Wnck.ImageMenuItem

    make_label_bold(): void
    make_label_normal(): void
    set_image_from_icon_pixbuf(pixbuf: GdkPixbuf.Pixbuf): void
    set_image_from_window(window: Window): void

    // Conflicting methods

    activate(...args: any[]): any
    child_notify(...args: any[]): any
    set_accel_path(...args: any[]): any

    // Class property signals of Wnck-3.0.Wnck.ImageMenuItem

    connect(sigName: "notify::accel-path", callback: (($obj: ImageMenuItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::accel-path", callback: (($obj: ImageMenuItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::accel-path", ...args: any[]): void
    connect(sigName: "notify::label", callback: (($obj: ImageMenuItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::label", callback: (($obj: ImageMenuItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::right-justified", callback: (($obj: ImageMenuItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::right-justified", callback: (($obj: ImageMenuItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::right-justified", ...args: any[]): void
    connect(sigName: "notify::submenu", callback: (($obj: ImageMenuItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::submenu", callback: (($obj: ImageMenuItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::submenu", ...args: any[]): void
    connect(sigName: "notify::use-underline", callback: (($obj: ImageMenuItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-underline", callback: (($obj: ImageMenuItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-underline", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: ImageMenuItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: ImageMenuItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: ImageMenuItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: ImageMenuItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: ImageMenuItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: ImageMenuItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: ImageMenuItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: ImageMenuItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: ImageMenuItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: ImageMenuItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: ImageMenuItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: ImageMenuItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: ImageMenuItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: ImageMenuItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: ImageMenuItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: ImageMenuItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: ImageMenuItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: ImageMenuItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: ImageMenuItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: ImageMenuItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: ImageMenuItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: ImageMenuItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: ImageMenuItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: ImageMenuItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: ImageMenuItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: ImageMenuItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: ImageMenuItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: ImageMenuItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: ImageMenuItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: ImageMenuItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: ImageMenuItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: ImageMenuItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: ImageMenuItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: ImageMenuItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: ImageMenuItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: ImageMenuItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: ImageMenuItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: ImageMenuItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: ImageMenuItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: ImageMenuItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: ImageMenuItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: ImageMenuItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: ImageMenuItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: ImageMenuItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: ImageMenuItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: ImageMenuItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: ImageMenuItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: ImageMenuItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: ImageMenuItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: ImageMenuItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: ImageMenuItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: ImageMenuItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: ImageMenuItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: ImageMenuItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: ImageMenuItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: ImageMenuItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: ImageMenuItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: ImageMenuItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: ImageMenuItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: ImageMenuItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: ImageMenuItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: ImageMenuItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: ImageMenuItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: ImageMenuItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: ImageMenuItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: ImageMenuItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: ImageMenuItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: ImageMenuItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: ImageMenuItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: ImageMenuItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: ImageMenuItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: ImageMenuItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: ImageMenuItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: ImageMenuItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: ImageMenuItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: ImageMenuItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: ImageMenuItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: ImageMenuItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: ImageMenuItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: ImageMenuItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: ImageMenuItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: ImageMenuItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: ImageMenuItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: ImageMenuItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::action-name", callback: (($obj: ImageMenuItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::action-name", callback: (($obj: ImageMenuItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::action-name", ...args: any[]): void
    connect(sigName: "notify::action-target", callback: (($obj: ImageMenuItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::action-target", callback: (($obj: ImageMenuItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::action-target", ...args: any[]): void
    connect(sigName: "notify::related-action", callback: (($obj: ImageMenuItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::related-action", callback: (($obj: ImageMenuItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::related-action", ...args: any[]): void
    connect(sigName: "notify::use-action-appearance", callback: (($obj: ImageMenuItem, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::use-action-appearance", callback: (($obj: ImageMenuItem, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::use-action-appearance", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ImageMenuItem extends Gtk.MenuItem {

    // Own properties of Wnck-3.0.Wnck.ImageMenuItem

    static name: string
    static $gtype: GObject.GType<ImageMenuItem>

    // Constructors of Wnck-3.0.Wnck.ImageMenuItem

    constructor(config?: ImageMenuItem_ConstructProps) 
    constructor() 
    static new(): ImageMenuItem
    static new_with_label(label: string): ImageMenuItem
    _init(config?: ImageMenuItem_ConstructProps): void
}

interface Pager_ConstructProps extends Atk.ImplementorIface_ConstructProps, Gtk.Buildable_ConstructProps, Gtk.Widget_ConstructProps {
}

interface Pager extends Atk.ImplementorIface, Gtk.Buildable {

    // Own fields of Wnck-3.0.Wnck.Pager

    parent_instance: Gtk.Container
    priv: PagerPrivate

    // Owm methods of Wnck-3.0.Wnck.Pager

    get_wrap_on_scroll(): boolean
    /**
     * Sets the display mode for `pager` to `mode`.
     * @param mode a display mode.
     */
    set_display_mode(mode: PagerDisplayMode): void
    /**
     * Tries to change the number of rows in the layout of #WnckWorkspace on the
     * #WnckScreen `pager` is watching. Since no more than one application should
     * set this property of a #WnckScreen at a time, setting the layout is not
     * guaranteed to work.
     * 
     * If `pager` has not been added to a widget hierarchy, the call will fail
     * because `pager` can't know the screen on which to modify the layout.
     * @param n_rows the number of rows to use for the layout of #WnckWorkspace on the #WnckScreen `pager` is watching.
     */
    set_n_rows(n_rows: number): boolean
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
     * @param orientation orientation to use for the layout of #WnckWorkspace on the #WnckScreen `pager` is watching.
     */
    set_orientation(orientation: Gtk.Orientation): boolean
    /**
     * Sets `pager` to react to input device scrolling in one of the
     * available scroll modes.
     * @param scroll_mode a scroll mode.
     */
    set_scroll_mode(scroll_mode: PagerScrollMode): void
    /**
     * Sets the shadow type for `pager` to `shadow_type`. The main use of this
     * function is proper integration of #WnckPager in panels with non-system
     * backgrounds.
     * @param shadow_type a shadow type.
     */
    set_shadow_type(shadow_type: Gtk.ShadowType): void
    /**
     * Sets `pager` to display all #WnckWorkspace or not, according to
     * `show_all_workspaces`.
     * @param show_all_workspaces whether to display all #WnckWorkspace in `pager`.
     */
    set_show_all(show_all_workspaces: boolean): void
    /**
     * Sets the wrapping behavior of the `pager`. Setting it to %TRUE will
     * wrap arround to the start when scrolling over the end and vice
     * versa. By default it is set to %FALSE.
     * @param wrap_on_scroll a boolean.
     */
    set_wrap_on_scroll(wrap_on_scroll: boolean): void

    // Class property signals of Wnck-3.0.Wnck.Pager

    connect(sigName: "notify::app-paintable", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: Pager, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #WnckPager struct contains only private fields and should not be
 * directly accessed.
 * @class 
 */
class Pager extends Gtk.Widget {

    // Own properties of Wnck-3.0.Wnck.Pager

    static name: string
    static $gtype: GObject.GType<Pager>

    // Constructors of Wnck-3.0.Wnck.Pager

    constructor(config?: Pager_ConstructProps) 
    /**
     * Creates a new #WnckPager. The #WnckPager will show the #WnckWorkspace of the
     * #WnckScreen it is on.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #WnckPager. The #WnckPager will show the #WnckWorkspace of the
     * #WnckScreen it is on.
     * @constructor 
     */
    static new(): Pager
    _init(config?: Pager_ConstructProps): void
}

interface Screen_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `active-window-changed`
 */
interface Screen_ActiveWindowChangedSignalCallback {
    ($obj: Screen, previously_active_window: Window): void
}

/**
 * Signal callback interface for `active-workspace-changed`
 */
interface Screen_ActiveWorkspaceChangedSignalCallback {
    ($obj: Screen, previously_active_space: Workspace): void
}

/**
 * Signal callback interface for `application-closed`
 */
interface Screen_ApplicationClosedSignalCallback {
    ($obj: Screen, app: Application): void
}

/**
 * Signal callback interface for `application-opened`
 */
interface Screen_ApplicationOpenedSignalCallback {
    ($obj: Screen, app: Application): void
}

/**
 * Signal callback interface for `background-changed`
 */
interface Screen_BackgroundChangedSignalCallback {
    ($obj: Screen): void
}

/**
 * Signal callback interface for `class-group-closed`
 */
interface Screen_ClassGroupClosedSignalCallback {
    ($obj: Screen, class_group: ClassGroup): void
}

/**
 * Signal callback interface for `class-group-opened`
 */
interface Screen_ClassGroupOpenedSignalCallback {
    ($obj: Screen, class_group: ClassGroup): void
}

/**
 * Signal callback interface for `showing-desktop-changed`
 */
interface Screen_ShowingDesktopChangedSignalCallback {
    ($obj: Screen): void
}

/**
 * Signal callback interface for `viewports-changed`
 */
interface Screen_ViewportsChangedSignalCallback {
    ($obj: Screen): void
}

/**
 * Signal callback interface for `window-closed`
 */
interface Screen_WindowClosedSignalCallback {
    ($obj: Screen, window: Window): void
}

/**
 * Signal callback interface for `window-manager-changed`
 */
interface Screen_WindowManagerChangedSignalCallback {
    ($obj: Screen): void
}

/**
 * Signal callback interface for `window-opened`
 */
interface Screen_WindowOpenedSignalCallback {
    ($obj: Screen, window: Window): void
}

/**
 * Signal callback interface for `window-stacking-changed`
 */
interface Screen_WindowStackingChangedSignalCallback {
    ($obj: Screen): void
}

/**
 * Signal callback interface for `workspace-created`
 */
interface Screen_WorkspaceCreatedSignalCallback {
    ($obj: Screen, space: Workspace): void
}

/**
 * Signal callback interface for `workspace-destroyed`
 */
interface Screen_WorkspaceDestroyedSignalCallback {
    ($obj: Screen, space: Workspace): void
}

interface Screen {

    // Own fields of Wnck-3.0.Wnck.Screen

    parent_instance: GObject.Object
    priv: ScreenPrivate

    // Owm methods of Wnck-3.0.Wnck.Screen

    /**
     * Calculates the layout of #WnckWorkspace, with additional information like
     * the row and column of the #WnckWorkspace with index `space_index`.
     * @param num_workspaces the number of #WnckWorkspace on `screen,` or -1 to let wnck_screen_calc_workspace_layout() find this number.
     * @param space_index the index of a #WnckWorkspace.
     * @param layout return location for the layout of #WnckWorkspace with additional information.
     */
    calc_workspace_layout(num_workspaces: number, space_index: number, layout: WorkspaceLayout): void
    /**
     * Asks the window manager to change the number of #WnckWorkspace on `screen`.
     * @param count the number of #WnckWorkspace to request.
     */
    change_workspace_count(count: number): void
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
    force_update(): void
    /**
     * Gets the active #WnckWindow on `screen`. May return %NULL sometimes, since
     * not all window managers guarantee that a window is always active.
     */
    get_active_window(): Window
    /**
     * Gets the active #WnckWorkspace on `screen`. May return %NULL sometimes,
     * if libwnck is in a weird state due to the asynchronous nature of the
     * interaction with the window manager.
     */
    get_active_workspace(): Workspace
    /**
     * Gets the X window ID of the background pixmap of `screen`.
     */
    get_background_pixmap(): number
    /**
     * Gets the height of `screen`.
     */
    get_height(): number
    /**
     * Gets the index of `screen` on the display to which it belongs. The first
     * #WnckScreen has an index of 0.
     */
    get_number(): number
    /**
     * Gets the previously active #WnckWindow on `screen`. May return %NULL
     * sometimes, since not all window managers guarantee that a window is always
     * active.
     */
    get_previously_active_window(): Window
    /**
     * Gets whether `screen` is in the "showing the desktop" mode. This mode is
     * changed when a #WnckScreen::showing-desktop-changed signal gets emitted.
     */
    get_showing_desktop(): boolean
    /**
     * Gets the width of `screen`.
     */
    get_width(): number
    /**
     * Gets the name of the window manager.
     */
    get_window_manager_name(): string
    /**
     * Gets the list of #WnckWindow on `screen`. The list is not in a defined
     * order, but should be "stable" (windows should not be reordered in it).
     * However, the stability of the list is established by the window manager, so
     * don't blame libwnck if it breaks down.
     */
    get_windows(): Window[]
    /**
     * Gets the list of #WnckWindow on `screen` in bottom-to-top order.
     */
    get_windows_stacked(): Window[]
    /**
     * Gets the #WnckWorkspace numbered `workspace` on `screen`.
     * @param workspace a workspace index, starting from 0.
     */
    get_workspace(workspace: number): Workspace
    /**
     * Gets the number of #WnckWorkspace on `screen`.
     */
    get_workspace_count(): number
    /**
     * Gets the list of #WnckWorkspace on `screen`. The list is ordered: the
     * first element in the list is the first #WnckWorkspace, etc..
     */
    get_workspaces(): Workspace[]
    /**
     * Asks the window manager to move the viewport of the current #WnckWorkspace
     * on `screen`.
     * @param x X offset in pixels of viewport.
     * @param y Y offset in pixels of viewport.
     */
    move_viewport(x: number, y: number): void
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
     */
    net_wm_supports(atom: string): boolean
    /**
     * Releases the ownership of the layout of #WnckWorkspace on `screen`.
     * `current_token` is used to verify that the caller is the owner of the layout.
     * If the verification fails, nothing happens.
     * @param current_token the token obtained through wnck_screen_try_set_workspace_layout().
     */
    release_workspace_layout(current_token: number): void
    /**
     * Asks the window manager to set the "showing the desktop" mode on `screen`
     * according to `show`.
     * @param show whether to activate the "showing the desktop" mode on `screen`.
     */
    toggle_showing_desktop(show: boolean): void
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
     */
    try_set_workspace_layout(current_token: number, rows: number, columns: number): number

    // Own virtual methods of Wnck-3.0.Wnck.Screen

    vfunc_active_window_changed(previous_window: Window): void
    vfunc_active_workspace_changed(previous_workspace: Workspace): void
    vfunc_application_closed(app: Application): void
    vfunc_application_opened(app: Application): void
    vfunc_background_changed(): void
    vfunc_class_group_closed(class_group: ClassGroup): void
    vfunc_class_group_opened(class_group: ClassGroup): void
    vfunc_showing_desktop_changed(): void
    vfunc_viewports_changed(): void
    vfunc_window_closed(window: Window): void
    vfunc_window_manager_changed(): void
    vfunc_window_opened(window: Window): void
    vfunc_window_stacking_changed(): void
    vfunc_workspace_created(space: Workspace): void
    vfunc_workspace_destroyed(space: Workspace): void

    // Own signals of Wnck-3.0.Wnck.Screen

    connect(sigName: "active-window-changed", callback: Screen_ActiveWindowChangedSignalCallback): number
    connect_after(sigName: "active-window-changed", callback: Screen_ActiveWindowChangedSignalCallback): number
    emit(sigName: "active-window-changed", previously_active_window: Window, ...args: any[]): void
    connect(sigName: "active-workspace-changed", callback: Screen_ActiveWorkspaceChangedSignalCallback): number
    connect_after(sigName: "active-workspace-changed", callback: Screen_ActiveWorkspaceChangedSignalCallback): number
    emit(sigName: "active-workspace-changed", previously_active_space: Workspace, ...args: any[]): void
    connect(sigName: "application-closed", callback: Screen_ApplicationClosedSignalCallback): number
    connect_after(sigName: "application-closed", callback: Screen_ApplicationClosedSignalCallback): number
    emit(sigName: "application-closed", app: Application, ...args: any[]): void
    connect(sigName: "application-opened", callback: Screen_ApplicationOpenedSignalCallback): number
    connect_after(sigName: "application-opened", callback: Screen_ApplicationOpenedSignalCallback): number
    emit(sigName: "application-opened", app: Application, ...args: any[]): void
    connect(sigName: "background-changed", callback: Screen_BackgroundChangedSignalCallback): number
    connect_after(sigName: "background-changed", callback: Screen_BackgroundChangedSignalCallback): number
    emit(sigName: "background-changed", ...args: any[]): void
    connect(sigName: "class-group-closed", callback: Screen_ClassGroupClosedSignalCallback): number
    connect_after(sigName: "class-group-closed", callback: Screen_ClassGroupClosedSignalCallback): number
    emit(sigName: "class-group-closed", class_group: ClassGroup, ...args: any[]): void
    connect(sigName: "class-group-opened", callback: Screen_ClassGroupOpenedSignalCallback): number
    connect_after(sigName: "class-group-opened", callback: Screen_ClassGroupOpenedSignalCallback): number
    emit(sigName: "class-group-opened", class_group: ClassGroup, ...args: any[]): void
    connect(sigName: "showing-desktop-changed", callback: Screen_ShowingDesktopChangedSignalCallback): number
    connect_after(sigName: "showing-desktop-changed", callback: Screen_ShowingDesktopChangedSignalCallback): number
    emit(sigName: "showing-desktop-changed", ...args: any[]): void
    connect(sigName: "viewports-changed", callback: Screen_ViewportsChangedSignalCallback): number
    connect_after(sigName: "viewports-changed", callback: Screen_ViewportsChangedSignalCallback): number
    emit(sigName: "viewports-changed", ...args: any[]): void
    connect(sigName: "window-closed", callback: Screen_WindowClosedSignalCallback): number
    connect_after(sigName: "window-closed", callback: Screen_WindowClosedSignalCallback): number
    emit(sigName: "window-closed", window: Window, ...args: any[]): void
    connect(sigName: "window-manager-changed", callback: Screen_WindowManagerChangedSignalCallback): number
    connect_after(sigName: "window-manager-changed", callback: Screen_WindowManagerChangedSignalCallback): number
    emit(sigName: "window-manager-changed", ...args: any[]): void
    connect(sigName: "window-opened", callback: Screen_WindowOpenedSignalCallback): number
    connect_after(sigName: "window-opened", callback: Screen_WindowOpenedSignalCallback): number
    emit(sigName: "window-opened", window: Window, ...args: any[]): void
    connect(sigName: "window-stacking-changed", callback: Screen_WindowStackingChangedSignalCallback): number
    connect_after(sigName: "window-stacking-changed", callback: Screen_WindowStackingChangedSignalCallback): number
    emit(sigName: "window-stacking-changed", ...args: any[]): void
    connect(sigName: "workspace-created", callback: Screen_WorkspaceCreatedSignalCallback): number
    connect_after(sigName: "workspace-created", callback: Screen_WorkspaceCreatedSignalCallback): number
    emit(sigName: "workspace-created", space: Workspace, ...args: any[]): void
    connect(sigName: "workspace-destroyed", callback: Screen_WorkspaceDestroyedSignalCallback): number
    connect_after(sigName: "workspace-destroyed", callback: Screen_WorkspaceDestroyedSignalCallback): number
    emit(sigName: "workspace-destroyed", space: Workspace, ...args: any[]): void

    // Class property signals of Wnck-3.0.Wnck.Screen

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #WnckScreen struct contains only private fields and should not be
 * directly accessed.
 * @class 
 */
class Screen extends GObject.Object {

    // Own properties of Wnck-3.0.Wnck.Screen

    static name: string
    static $gtype: GObject.GType<Screen>

    // Constructors of Wnck-3.0.Wnck.Screen

    constructor(config?: Screen_ConstructProps) 
    _init(config?: Screen_ConstructProps): void
    /**
     * Frees the content of `layout`. This does not free `layout` itself, so you
     * might want to free `layout` yourself after calling this.
     * @param layout a #WnckWorkspaceLayout.
     */
    static free_workspace_layout(layout: WorkspaceLayout): void
    /**
     * Gets the #WnckScreen for a given screen on the default display.
     * @param index screen number, starting from 0.
     */
    static get(index: number): Screen
    /**
     * Gets the default #WnckScreen on the default display.
     */
    static get_default(): Screen | null
    /**
     * Gets the #WnckScreen for the root window at `root_window_id,` or
     * %NULL if no #WnckScreen exists for this root window.
     * 
     * This function does not work if wnck_screen_get() was not called for the
     * sought #WnckScreen before, and returns %NULL.
     * @param root_window_id an X window ID.
     */
    static get_for_root(root_window_id: number): Screen
}

interface Selector_ConstructProps extends Atk.ImplementorIface_ConstructProps, Gtk.Buildable_ConstructProps, Gtk.MenuBar_ConstructProps {
}

interface Selector extends Atk.ImplementorIface, Gtk.Buildable {

    // Own fields of Wnck-3.0.Wnck.Selector

    parent_instance: Gtk.MenuBar
    priv: SelectorPrivate

    // Conflicting methods

    child_notify(...args: any[]): any

    // Class property signals of Wnck-3.0.Wnck.Selector

    connect(sigName: "notify::child-pack-direction", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child-pack-direction", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child-pack-direction", ...args: any[]): void
    connect(sigName: "notify::pack-direction", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::pack-direction", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::pack-direction", ...args: any[]): void
    connect(sigName: "notify::take-focus", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::take-focus", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::take-focus", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: Selector, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #WnckSelector struct contains only private fields and should not be
 * directly accessed.
 * @class 
 */
class Selector extends Gtk.MenuBar {

    // Own properties of Wnck-3.0.Wnck.Selector

    static name: string
    static $gtype: GObject.GType<Selector>

    // Constructors of Wnck-3.0.Wnck.Selector

    constructor(config?: Selector_ConstructProps) 
    /**
     * Creates a new #WnckSelector. The #WnckSelector will list #WnckWindow of the
     * #WnckScreen it is on.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #WnckSelector. The #WnckSelector will list #WnckWindow of the
     * #WnckScreen it is on.
     * @constructor 
     */
    static new(): Selector
    _init(config?: Selector_ConstructProps): void
}

interface Tasklist_ConstructProps extends Atk.ImplementorIface_ConstructProps, Gtk.Buildable_ConstructProps, Gtk.Container_ConstructProps {
}

/**
 * Signal callback interface for `task-enter-notify`
 */
interface Tasklist_TaskEnterNotifySignalCallback {
    ($obj: Tasklist, windows: object | null): void
}

/**
 * Signal callback interface for `task-leave-notify`
 */
interface Tasklist_TaskLeaveNotifySignalCallback {
    ($obj: Tasklist, windows: object | null): void
}

interface Tasklist extends Atk.ImplementorIface, Gtk.Buildable {

    // Own fields of Wnck-3.0.Wnck.Tasklist

    parent_instance: Gtk.Container
    priv: TasklistPrivate

    // Owm methods of Wnck-3.0.Wnck.Tasklist

    /**
     * Gets the scroll behavior of the `tasklist`.
     */
    get_scroll_enabled(): boolean
    /**
     * Since a #WnckTasklist does not have a fixed size (#WnckWindow can be grouped
     * when needed, for example), the standard size request mechanism in GTK+ is
     * not enough to announce what sizes can be used by `tasklist`. The size hints
     * mechanism is a solution for this. See panel_applet_set_size_hints() for more
     * information.
     * @param n_elements return location for the number of elements in the array returned by this function. This number should always be pair.
     */
    get_size_hint_list(n_elements: number): number
    /**
     * Sets the relief type of the buttons in `tasklist` to `relief`. The main use of
     * this function is proper integration of #WnckTasklist in panels with
     * non-system backgrounds.
     * @param relief a relief type.
     */
    set_button_relief(relief: Gtk.ReliefStyle): void
    /**
     * Sets the grouping policy for `tasklist` to `grouping`.
     * @param grouping a grouping policy.
     */
    set_grouping(grouping: TasklistGroupingType): void
    /**
     * Sets the maximum size of buttons in `tasklist` before `tasklist` tries to
     * group #WnckWindow in the same #WnckApplication in only one button. This
     * limit is valid only when the grouping policy of `tasklist` is
     * %WNCK_TASKLIST_AUTO_GROUP.
     * @param limit a size in pixels.
     */
    set_grouping_limit(limit: number): void
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
     * @param include_all_workspaces whether to display #WnckWindow from all #WnckWorkspace in `tasklist`.
     */
    set_include_all_workspaces(include_all_workspaces: boolean): void
    /**
     * Sets `tasklist` to close windows with mouse middle click on button,
     * according to `middle_click_close`.
     * @param middle_click_close whether to close windows with middle click on button.
     */
    set_middle_click_close(middle_click_close: boolean): void
    /**
     * Set the orientation of the `tasklist` to match `orient`.
     * This function can be used to integrate a #WnckTasklist in vertical panels.
     * @param orient a GtkOrientation.
     */
    set_orientation(orient: Gtk.Orientation): void
    /**
     * Sets the scroll behavior of the `tasklist`. When set to %TRUE, a scroll
     * event over the tasklist will change the current window accordingly.
     * @param scroll_enabled a boolean.
     */
    set_scroll_enabled(scroll_enabled: boolean): void
    /**
     * Sets `tasklist` to activate or not the #WnckWorkspace a #WnckWindow is on
     * when unminimizing it, according to `switch_workspace_on_unminimize`.
     * 
     * FIXME: does it still work?
     * @param switch_workspace_on_unminimize whether to activate the #WnckWorkspace a #WnckWindow is on when unminimizing it.
     */
    set_switch_workspace_on_unminimize(switch_workspace_on_unminimize: boolean): void

    // Conflicting methods

    child_notify(...args: any[]): any

    // Own signals of Wnck-3.0.Wnck.Tasklist

    connect(sigName: "task-enter-notify", callback: Tasklist_TaskEnterNotifySignalCallback): number
    connect_after(sigName: "task-enter-notify", callback: Tasklist_TaskEnterNotifySignalCallback): number
    emit(sigName: "task-enter-notify", windows: object | null, ...args: any[]): void
    connect(sigName: "task-leave-notify", callback: Tasklist_TaskLeaveNotifySignalCallback): number
    connect_after(sigName: "task-leave-notify", callback: Tasklist_TaskLeaveNotifySignalCallback): number
    emit(sigName: "task-leave-notify", windows: object | null, ...args: any[]): void

    // Class property signals of Wnck-3.0.Wnck.Tasklist

    connect(sigName: "notify::border-width", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::border-width", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::child", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::resize-mode", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::app-paintable", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-default", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::can-focus", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::composite-child", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::double-buffered", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::events", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::expand", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::focus-on-click", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::halign", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-default", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-focus", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::has-tooltip", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::height-request", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::hexpand-set", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::is-focus", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-bottom", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-end", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-left", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-right", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-start", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::margin-top", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::name", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::no-show-all", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::opacity", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::parent", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::receives-default", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::scale-factor", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::sensitive", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::style", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-markup", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::tooltip-text", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::valign", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::vexpand-set", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::visible", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::width-request", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    connect_after(sigName: "notify::window", callback: (($obj: Tasklist, pspec: GObject.ParamSpec) => void)): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #WnckTasklist struct contains only private fields and should not be
 * directly accessed.
 * @class 
 */
class Tasklist extends Gtk.Container {

    // Own properties of Wnck-3.0.Wnck.Tasklist

    static name: string
    static $gtype: GObject.GType<Tasklist>

    // Constructors of Wnck-3.0.Wnck.Tasklist

    constructor(config?: Tasklist_ConstructProps) 
    /**
     * Creates a new #WnckTasklist. The #WnckTasklist will list #WnckWindow of the
     * #WnckScreen it is on.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #WnckTasklist. The #WnckTasklist will list #WnckWindow of the
     * #WnckScreen it is on.
     * @constructor 
     */
    static new(): Tasklist
    _init(config?: Tasklist_ConstructProps): void
}

interface Window_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `actions-changed`
 */
interface Window_ActionsChangedSignalCallback {
    ($obj: Window, changed_mask: WindowActions, new_state: WindowActions): void
}

/**
 * Signal callback interface for `class-changed`
 */
interface Window_ClassChangedSignalCallback {
    ($obj: Window): void
}

/**
 * Signal callback interface for `geometry-changed`
 */
interface Window_GeometryChangedSignalCallback {
    ($obj: Window): void
}

/**
 * Signal callback interface for `icon-changed`
 */
interface Window_IconChangedSignalCallback {
    ($obj: Window): void
}

/**
 * Signal callback interface for `name-changed`
 */
interface Window_NameChangedSignalCallback {
    ($obj: Window): void
}

/**
 * Signal callback interface for `role-changed`
 */
interface Window_RoleChangedSignalCallback {
    ($obj: Window): void
}

/**
 * Signal callback interface for `state-changed`
 */
interface Window_StateChangedSignalCallback {
    ($obj: Window, changed_mask: WindowState, new_state: WindowState): void
}

/**
 * Signal callback interface for `type-changed`
 */
interface Window_TypeChangedSignalCallback {
    ($obj: Window): void
}

/**
 * Signal callback interface for `workspace-changed`
 */
interface Window_WorkspaceChangedSignalCallback {
    ($obj: Window): void
}

interface Window {

    // Own fields of Wnck-3.0.Wnck.Window

    parent_instance: GObject.Object
    priv: WindowPrivate

    // Owm methods of Wnck-3.0.Wnck.Window

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
    activate(timestamp: number): void
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
    activate_transient(timestamp: number): void
    /**
     * Closes `window`.
     * 
     * This function existed before 2.6, but the `timestamp` argument was missing
     * in earlier versions.
     * @param timestamp the X server timestamp of the user interaction event that caused this call to occur.
     */
    close(timestamp: number): void
    /**
     * Gets the actions that can be done for `window`.
     */
    get_actions(): WindowActions
    /**
     * Gets the #WnckApplication to which `window` belongs.
     */
    get_application(): Application
    /**
     * Gets the #WnckClassGroup to which `window` belongs.
     */
    get_class_group(): ClassGroup
    /**
     * Gets the class group name from the <ulink
     * url="http://tronche.com/gui/x/icccm/sec-4.html&num;WM_CLASS">WM_CLASS Property</ulink>
     * for `window`.
     * 
     * The class group name is also the identifier name of the #WnckClassGroup to
     * which `window` belongs.
     */
    get_class_group_name(): string
    /**
     * Gets the class instance name from the <ulink
     * url="http://tronche.com/gui/x/icccm/sec-4.html&num;WM_CLASS">WM_CLASS Property</ulink>
     * for `window`.
     * 
     * The class instance name allows to differentiate windows belonging to the
     * same class group, so that they can use different resources.
     */
    get_class_instance_name(): string
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
    get_client_window_geometry(): [ /* xp */ number, /* yp */ number, /* widthp */ number, /* heightp */ number ]
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
    get_geometry(): [ /* xp */ number, /* yp */ number, /* widthp */ number, /* heightp */ number ]
    /**
     * Gets the group leader of the group of windows to which `window` belongs.
     */
    get_group_leader(): number
    /**
     * Gets the icon to be used for `window`. If no icon was found, a fallback
     * icon is used. wnck_window_get_icon_is_fallback() can be used to tell if the
     * icon is the fallback icon.
     */
    get_icon(): GdkPixbuf.Pixbuf
    /**
     * Gets whether a default fallback icon is used for `window` (because none
     * was set on `window)`.
     */
    get_icon_is_fallback(): boolean
    /**
     * Gets the icon name of `window,` as it should be displayed for an icon
     * (minimized state). Always returns some value, even if `window` has no icon
     * name set; use wnck_window_has_icon_name() if you need to know whether the
     * returned icon name is "real" or not.
     * 
     * Contrast with wnck_window_get_name(), which returns `window<`!-- -->'s
     * title, not its icon title.
     */
    get_icon_name(): string
    /**
     * Gets the mini-icon to be used for `window`. If no mini-icon was found, a
     * fallback mini-icon is used. wnck_window_get_icon_is_fallback() can be used
     * to tell if the mini-icon is the fallback mini-icon.
     */
    get_mini_icon(): GdkPixbuf.Pixbuf
    /**
     * Gets the name of `window,` as it should be displayed in a pager
     * or tasklist. Always returns some value, even if `window` has no name
     * set; use wnck_window_has_name() if you need to know whether the returned
     * name is "real" or not.
     * 
     * For icons titles, use wnck_window_get_icon_name() instead.
     */
    get_name(): string
    /**
     * Gets the process ID of `window`.
     */
    get_pid(): number
    /**
     * Gets the role for `window`.
     * The role uniquely identifies a window among all windows that have the same
     * client leader window.
     */
    get_role(): string
    /**
     * Gets the #WnckScreen `window` is on.
     */
    get_screen(): Screen
    /**
     * Gets the session ID for `window` in Latin-1 encoding.
     * NOTE: this is invalid UTF-8. You can't display this
     * string in a GTK+ widget without converting to UTF-8.
     * See wnck_window_get_session_id_utf8().
     */
    get_session_id(): string
    /**
     * Gets the session ID for `window` in UTF-8 encoding.
     * The session ID should be in Latin-1 encoding, so the conversion should work,
     * but a broken client could set a session ID that might not be convertable to
     * UTF-8.
     */
    get_session_id_utf8(): string
    /**
     * Gets the sort order of `window,` used for ordering of `window` in
     * #WnckSelector and #WnckTasklist. The sort order is an internal state in
     * libwnck. The initial value is defined when the window is created.
     */
    get_sort_order(): number
    /**
     * Gets the state of `window`.
     */
    get_state(): WindowState
    /**
     * Gets the #WnckWindow for which `window` is transient.
     */
    get_transient(): Window
    /**
     * Gets the semantic type of `window`.
     */
    get_window_type(): WindowType
    /**
     * Gets the current workspace `window` is on. If the window is pinned (on all
     * workspaces), or not on any workspaces, %NULL may be returned.
     */
    get_workspace(): Workspace
    /**
     * Gets the X window ID of `window`.
     */
    get_xid(): number
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
     */
    has_icon_name(): boolean
    /**
     * Checks whether or not `window` has a name. wnck_window_get_name()
     * will always return some value, even if `window` has no name set;
     * wnck_window_has_name() can be used to tell if that name is
     * real or not.
     * 
     * For icons titles, use wnck_window_has_icon_name() instead.
     */
    has_name(): boolean
    /**
     * Gets whether `window` is above other windows. This state may change
     * anytime a #WnckWindow::state-changed signal gets emitted.
     * 
     * See wnck_window_make_above() for more details on this state.
     */
    is_above(): boolean
    /**
     * Gets whether `window` is the active window on its #WnckScreen.
     */
    is_active(): boolean
    /**
     * Gets whether `window` is below other windows. This state may change
     * anytime a #WnckWindow::state-changed signal gets emitted.
     * 
     * See wnck_window_make_below() for more details on this state.
     */
    is_below(): boolean
    /**
     * Gets whether `window` is fullscreen. Fullscreen state may change
     * anytime a #WnckWindow::state-changed signal gets emitted.
     */
    is_fullscreen(): boolean
    /**
     * Gets %TRUE if `window` appears in the current viewport of `workspace`.
     * @param workspace a #WnckWorkspace.
     */
    is_in_viewport(workspace: Workspace): boolean
    /**
     * Gets whether `window` is maximized. Maximization state may change
     * anytime a #WnckWindow::state-changed signal gets emitted.
     * 
     * As for GDK, "maximized" means both vertically and horizontally. If `window`
     * is maximized in only one direction, then `window` is not considered
     * maximized.
     */
    is_maximized(): boolean
    /**
     * Gets whether `window` is maximized horizontally. Horizontal maximization
     * state may change anytime a #WnckWindow::state-changed signal gets emitted.
     */
    is_maximized_horizontally(): boolean
    /**
     * Gets whether `window` is maximized vertically. vertiVal maximization
     * state may change anytime a #WnckWindow::state-changed signal gets emitted.
     */
    is_maximized_vertically(): boolean
    /**
     * Gets whether `window` is minimized. Minimization state may change anytime
     * a #WnckWindow::state-changed signal gets emitted.
     */
    is_minimized(): boolean
    /**
     * Gets whether `window` is the most recently activated window on its
     * #WnckScreen.
     * 
     * The most recently activated window is identical to the active
     * window for click and sloppy focus methods (since a window is always
     * active in those cases) but differs slightly for mouse focus since
     * there often is no active window.
     */
    is_most_recently_activated(): boolean
    /**
     * Gets whether `window` appears on `workspace`.
     * @param workspace a #WnckWorkspace.
     */
    is_on_workspace(workspace: Workspace): boolean
    /**
     * Gets whether `window` is on all workspace. Pinned state may change
     * anytime a #WnckWindow::workspace-changed signal gets emitted, but not when
     * a #WnckWindow::state-changed gets emitted.
     */
    is_pinned(): boolean
    /**
     * Gets whether `window` is shaded. Shade state may change anytime
     * a #WnckWindow::state-changed signal gets emitted.
     */
    is_shaded(): boolean
    /**
     * Gets whether `window` is included on pagers. This state may change
     * anytime a #WnckWindow::state-changed signal gets emitted.
     */
    is_skip_pager(): boolean
    /**
     * Gets whether `window` is included on tasklists. This state may change
     * anytime a #WnckWindow::state-changed signal gets emitted.
     */
    is_skip_tasklist(): boolean
    /**
     * Gets whether `window` is sticky. Sticky state may change
     * anytime a #WnckWindow::state-changed signal gets emitted.
     * 
     * Sticky here means "stuck to the glass", i.e. does not scroll with the
     * viewport. In GDK/GTK+ (e.g. gdk_window_stick()/gtk_window_stick()), sticky
     * means "stuck to the glass" and <emphasis>also</emphasis> that the window is
     * on all workspaces. But here it only means the viewport aspect of it.
     */
    is_sticky(): boolean
    /**
     * Like wnck_window_is_on_workspace(), but also checks that
     * the window is in a visible state (i.e. not minimized or shaded).
     * @param workspace a #WnckWorkspace.
     */
    is_visible_on_workspace(workspace: Workspace): boolean
    /**
     * Asks the window manager to start moving `window` via the keyboard.
     */
    keyboard_move(): void
    /**
     * Asks the window manager to start resizing `window` via the keyboard.
     */
    keyboard_size(): void
    /**
     * Asks the window manager to put `window` on top of most windows (`window` will
     * not be on top of focused fullscreen windows, of other windows with this
     * setting and of dock windows).
     */
    make_above(): void
    /**
     * Asks the window manager to put `window` below most windows.
     */
    make_below(): void
    /**
     * Asks the window manager to maximize `window`.
     */
    maximize(): void
    /**
     * Asks the window manager to maximize horizontally `window`.
     */
    maximize_horizontally(): void
    /**
     * Asks the window manager to maximize vertically `window`.
     */
    maximize_vertically(): void
    /**
     * Minimizes `window`.
     */
    minimize(): void
    /**
     * Asks the window manager to move `window` to `space`. If `window` was pinned, it
     * will also result in `window` being visible only on `space`.
     * @param space a #WnckWorkspace.
     */
    move_to_workspace(space: Workspace): void
    /**
     * Gets whether `window` needs attention. This state may change anytime
     * a #WnckWindow::state-changed signal gets emitted.
     * 
     * This state depends on flags such as the demands_attention and is_urgent
     * hints.
     */
    needs_attention(): boolean
    /**
     * Gets whether `window` or one of its transients needs attention. This state
     * may change anytime a #WnckWindow::state-changed signal gets emitted.
     */
    or_transient_needs_attention(): boolean
    /**
     * Asks the window manager to put `window` on all workspaces.
     */
    pin(): void
    /**
     * Asks the window manager to set the fullscreen state of `window` according to
     * `fullscreen`.
     * @param fullscreen whether to make `window` fullscreen.
     */
    set_fullscreen(fullscreen: boolean): void
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
     * @param x new X coordinate in pixels of `window`.
     * @param y new Y coordinate in pixels of `window`.
     * @param width new width in pixels of `window`.
     * @param height new height in pixels of `window`.
     */
    set_geometry(gravity: WindowGravity, geometry_mask: WindowMoveResizeMask, x: number, y: number, width: number, height: number): void
    /**
     * Sets the icon geometry for `window`. A typical use case for this is the
     * destination of the minimization animation of `window`.
     * @param x X coordinate in pixels.
     * @param y Y coordinate in pixels.
     * @param width width in pixels.
     * @param height height in pixels.
     */
    set_icon_geometry(x: number, y: number, width: number, height: number): void
    /**
     * Asks the window manager to make `window` included or not included on pagers.
     * @param skip whether `window` should be included on pagers.
     */
    set_skip_pager(skip: boolean): void
    /**
     * Asks the window manager to make `window` included or not included on
     * tasklists.
     * @param skip whether `window` should be included on tasklists.
     */
    set_skip_tasklist(skip: boolean): void
    /**
     * Sets the sort order of `window`. The sort order is used for ordering of
     * `window` in #WnckSelector and #WnckTasklist.
     * @param order new sort order for `window`.
     */
    set_sort_order(order: number): void
    /**
     * Sets the semantic type of `window` to `wintype`.
     * @param wintype a semantic type.
     */
    set_window_type(wintype: WindowType): void
    /**
     * Asks the window manager to shade `window`.
     */
    shade(): void
    /**
     * Asks the window manager to keep the `window<`!-- -->'s position fixed on the
     * screen, even when the workspace or viewport scrolls.
     */
    stick(): void
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
     */
    transient_is_most_recently_activated(): boolean
    /**
     * Asks the window manager to not put `window` on top of most windows, and to
     * put it again in the stack with other windows.
     */
    unmake_above(): void
    /**
     * Asks the window manager to not put `window` below most windows, and to
     * put it again in the stack with other windows.
     */
    unmake_below(): void
    /**
     * Asks the window manager to unmaximize `window`.
     */
    unmaximize(): void
    /**
     * Asks the window manager to unmaximize horizontally `window`.
     */
    unmaximize_horizontally(): void
    /**
     * Asks the window manager to unmaximize vertically `window`.
     */
    unmaximize_vertically(): void
    /**
     * Unminimizes `window` by activating it or one of its transients. See
     * wnck_window_activate_transient() for details on how the activation is done.
     * @param timestamp the X server timestamp of the user interaction event that caused this call to occur.
     */
    unminimize(timestamp: number): void
    /**
     * Asks the window manager to put `window` only in the currently active
     * workspace, if `window` was previously pinned. If `window` was not pinned,
     * does not change `window<`!-- -->'s workspace. If the active workspace
     * is not known for some reason (it should not happen much), sets
     * `window<`!-- -->'s workspace to the first workspace.
     */
    unpin(): void
    /**
     * Asks the window manager to unshade `window`.
     */
    unshade(): void
    /**
     * Asks the window manager to not have `window<`!-- -->'s position fixed on the
     * screen when the workspace or viewport scrolls.
     */
    unstick(): void

    // Own virtual methods of Wnck-3.0.Wnck.Window

    vfunc_actions_changed(changed_mask: WindowActions, new_actions: WindowActions): void
    vfunc_class_changed(): void
    vfunc_geometry_changed(): void
    vfunc_icon_changed(): void
    vfunc_name_changed(): void
    vfunc_role_changed(): void
    vfunc_state_changed(changed_mask: WindowState, new_state: WindowState): void
    vfunc_type_changed(): void
    vfunc_workspace_changed(): void

    // Own signals of Wnck-3.0.Wnck.Window

    connect(sigName: "actions-changed", callback: Window_ActionsChangedSignalCallback): number
    connect_after(sigName: "actions-changed", callback: Window_ActionsChangedSignalCallback): number
    emit(sigName: "actions-changed", changed_mask: WindowActions, new_state: WindowActions, ...args: any[]): void
    connect(sigName: "class-changed", callback: Window_ClassChangedSignalCallback): number
    connect_after(sigName: "class-changed", callback: Window_ClassChangedSignalCallback): number
    emit(sigName: "class-changed", ...args: any[]): void
    connect(sigName: "geometry-changed", callback: Window_GeometryChangedSignalCallback): number
    connect_after(sigName: "geometry-changed", callback: Window_GeometryChangedSignalCallback): number
    emit(sigName: "geometry-changed", ...args: any[]): void
    connect(sigName: "icon-changed", callback: Window_IconChangedSignalCallback): number
    connect_after(sigName: "icon-changed", callback: Window_IconChangedSignalCallback): number
    emit(sigName: "icon-changed", ...args: any[]): void
    connect(sigName: "name-changed", callback: Window_NameChangedSignalCallback): number
    connect_after(sigName: "name-changed", callback: Window_NameChangedSignalCallback): number
    emit(sigName: "name-changed", ...args: any[]): void
    connect(sigName: "role-changed", callback: Window_RoleChangedSignalCallback): number
    connect_after(sigName: "role-changed", callback: Window_RoleChangedSignalCallback): number
    emit(sigName: "role-changed", ...args: any[]): void
    connect(sigName: "state-changed", callback: Window_StateChangedSignalCallback): number
    connect_after(sigName: "state-changed", callback: Window_StateChangedSignalCallback): number
    emit(sigName: "state-changed", changed_mask: WindowState, new_state: WindowState, ...args: any[]): void
    connect(sigName: "type-changed", callback: Window_TypeChangedSignalCallback): number
    connect_after(sigName: "type-changed", callback: Window_TypeChangedSignalCallback): number
    emit(sigName: "type-changed", ...args: any[]): void
    connect(sigName: "workspace-changed", callback: Window_WorkspaceChangedSignalCallback): number
    connect_after(sigName: "workspace-changed", callback: Window_WorkspaceChangedSignalCallback): number
    emit(sigName: "workspace-changed", ...args: any[]): void

    // Class property signals of Wnck-3.0.Wnck.Window

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #WnckWindow struct contains only private fields and should not be
 * directly accessed.
 * @class 
 */
class Window extends GObject.Object {

    // Own properties of Wnck-3.0.Wnck.Window

    static name: string
    static $gtype: GObject.GType<Window>

    // Constructors of Wnck-3.0.Wnck.Window

    constructor(config?: Window_ConstructProps) 
    _init(config?: Window_ConstructProps): void
    /**
     * Gets a preexisting #WnckWindow for the X window `xwindow`. This will not
     * create a #WnckWindow if none exists. The function is robust against bogus
     * window IDs.
     * @param xwindow an X window ID.
     */
    static get(xwindow: number): Window
}

interface Workspace_ConstructProps extends GObject.Object_ConstructProps {
}

/**
 * Signal callback interface for `name-changed`
 */
interface Workspace_NameChangedSignalCallback {
    ($obj: Workspace): void
}

interface Workspace {

    // Own fields of Wnck-3.0.Wnck.Workspace

    parent_instance: GObject.Object
    priv: WorkspacePrivate

    // Owm methods of Wnck-3.0.Wnck.Workspace

    /**
     * Asks the window manager to make `space` the active workspace. The window
     * manager may decide to refuse the request (to not steal the focus if there is
     * a more recent user activity, for example).
     * 
     * This function existed before 2.10, but the `timestamp` argument was missing
     * in earlier versions.
     * @param timestamp the X server timestamp of the user interaction event that caused this call to occur.
     */
    activate(timestamp: number): void
    /**
     * Changes the name of `space`.
     * @param name new name for `space`.
     */
    change_name(name: string): void
    /**
     * Gets the height of `space`.
     */
    get_height(): number
    /**
     * Gets the column of `space` in the #WnckWorkspace layout. The first column
     * has an index of 0 and is always the left column, regardless of the starting
     * corner set for the layout and regardless of the default direction of the
     * environment (i.e., in both Left-To-Right and Right-To-Left environments).
     */
    get_layout_column(): number
    /**
     * Gets the row of `space` in the #WnckWorkspace layout. The first row has an
     * index of 0 and is always the top row, regardless of the starting corner set
     * for the layout.
     */
    get_layout_row(): number
    /**
     * Gets the human-readable name that should be used to refer to `space`. If
     * the user has not set a special name, a fallback like "Workspace 3" will be
     * used.
     */
    get_name(): string
    /**
     * Gets the neighbor #WnckWorkspace of `space` in the `direction` direction.
     * @param direction direction in which to search the neighbor.
     */
    get_neighbor(direction: MotionDirection): Workspace
    /**
     * Gets the index of `space` on the #WnckScreen to which it belongs. The
     * first workspace has an index of 0.
     */
    get_number(): number
    /**
     * Gets the #WnckScreen `space` is on.
     */
    get_screen(): Screen
    /**
     * Gets the X coordinate of the viewport in `space`.
     */
    get_viewport_x(): number
    /**
     * Gets the Y coordinate of the viewport in `space`.
     */
    get_viewport_y(): number
    /**
     * Gets the width of `space`.
     */
    get_width(): number
    /**
     * Gets whether `space` contains a viewport.
     */
    is_virtual(): boolean

    // Own virtual methods of Wnck-3.0.Wnck.Workspace

    vfunc_name_changed(): void

    // Own signals of Wnck-3.0.Wnck.Workspace

    connect(sigName: "name-changed", callback: Workspace_NameChangedSignalCallback): number
    connect_after(sigName: "name-changed", callback: Workspace_NameChangedSignalCallback): number
    emit(sigName: "name-changed", ...args: any[]): void

    // Class property signals of Wnck-3.0.Wnck.Workspace

    connect(sigName: string, callback: (...args: any[]) => void): number
    connect_after(sigName: string, callback: (...args: any[]) => void): number
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

/**
 * The #WnckWorkspace struct contains only private fields and should not be
 * directly accessed.
 * @class 
 */
class Workspace extends GObject.Object {

    // Own properties of Wnck-3.0.Wnck.Workspace

    static name: string
    static $gtype: GObject.GType<Workspace>

    // Constructors of Wnck-3.0.Wnck.Workspace

    constructor(config?: Workspace_ConstructProps) 
    _init(config?: Workspace_ConstructProps): void
}

interface ActionMenuClass {

    // Own fields of Wnck-3.0.Wnck.ActionMenuClass

    parent_class: Gtk.MenuClass
    pad1: () => void
    pad2: () => void
    pad3: () => void
    pad4: () => void
}

abstract class ActionMenuClass {

    // Own properties of Wnck-3.0.Wnck.ActionMenuClass

    static name: string
}

interface ActionMenuPrivate {
}

class ActionMenuPrivate {

    // Own properties of Wnck-3.0.Wnck.ActionMenuPrivate

    static name: string
}

interface ApplicationClass {

    // Own fields of Wnck-3.0.Wnck.ApplicationClass

    parent_class: GObject.ObjectClass
    name_changed: (app: Application) => void
    icon_changed: (app: Application) => void
    pad1: () => void
    pad2: () => void
    pad3: () => void
    pad4: () => void
}

abstract class ApplicationClass {

    // Own properties of Wnck-3.0.Wnck.ApplicationClass

    static name: string
}

interface ApplicationPrivate {
}

class ApplicationPrivate {

    // Own properties of Wnck-3.0.Wnck.ApplicationPrivate

    static name: string
}

interface ClassGroupClass {

    // Own fields of Wnck-3.0.Wnck.ClassGroupClass

    parent_class: GObject.ObjectClass
    name_changed: (group: ClassGroup) => void
    icon_changed: (group: ClassGroup) => void
    pad1: () => void
    pad2: () => void
    pad3: () => void
    pad4: () => void
}

abstract class ClassGroupClass {

    // Own properties of Wnck-3.0.Wnck.ClassGroupClass

    static name: string
}

interface ClassGroupPrivate {
}

class ClassGroupPrivate {

    // Own properties of Wnck-3.0.Wnck.ClassGroupPrivate

    static name: string
}

interface Handle {
}

class Handle {

    // Own properties of Wnck-3.0.Wnck.Handle

    static name: string
}

interface IconCache {
}

class IconCache {

    // Own properties of Wnck-3.0.Wnck.IconCache

    static name: string
}

interface ImageMenuItemClass {

    // Own fields of Wnck-3.0.Wnck.ImageMenuItemClass

    parent_class: Gtk.MenuItemClass
}

abstract class ImageMenuItemClass {

    // Own properties of Wnck-3.0.Wnck.ImageMenuItemClass

    static name: string
}

interface PagerClass {

    // Own fields of Wnck-3.0.Wnck.PagerClass

    parent_class: Gtk.ContainerClass
    pad1: () => void
    pad2: () => void
    pad3: () => void
    pad4: () => void
}

abstract class PagerClass {

    // Own properties of Wnck-3.0.Wnck.PagerClass

    static name: string
}

interface PagerPrivate {
}

class PagerPrivate {

    // Own properties of Wnck-3.0.Wnck.PagerPrivate

    static name: string
}

interface ResourceUsage {

    // Own fields of Wnck-3.0.Wnck.ResourceUsage

    /**
     * estimation of the total number of bytes allocated in
     * the X server.
     * @field 
     */
    total_bytes_estimate: number
    /**
     * number of bytes allocated in the X server for resources of
     * type Pixmap.
     * @field 
     */
    pixmap_bytes: number
    /**
     * number of Pixmap resources allocated.
     * @field 
     */
    n_pixmaps: number
    /**
     * number of Window resources allocated.
     * @field 
     */
    n_windows: number
    /**
     * number of GContext resources allocated.
     * @field 
     */
    n_gcs: number
    /**
     * number of Picture resources allocated.
     * @field 
     */
    n_pictures: number
    /**
     * number of Glyphset resources allocated.
     * @field 
     */
    n_glyphsets: number
    /**
     * number of Font resources allocated.
     * @field 
     */
    n_fonts: number
    /**
     * number of Colormap resources allocated.
     * @field 
     */
    n_colormap_entries: number
    /**
     * number of PassiveGrab resources allocated.
     * @field 
     */
    n_passive_grabs: number
    /**
     * number of Cursor resources allocated.
     * @field 
     */
    n_cursors: number
    /**
     * number of other resources allocated.
     * @field 
     */
    n_other: number
}

/**
 * The #WnckResourceUsage struct contains information about the total resource
 * usage of an X client, and the number of resources allocated for each
 * resource type.
 * @record 
 */
class ResourceUsage {

    // Own properties of Wnck-3.0.Wnck.ResourceUsage

    static name: string
}

interface ScreenClass {

    // Own fields of Wnck-3.0.Wnck.ScreenClass

    parent_class: GObject.ObjectClass
    active_window_changed: (screen: Screen, previous_window: Window) => void
    active_workspace_changed: (screen: Screen, previous_workspace: Workspace) => void
    window_stacking_changed: (screen: Screen) => void
    window_opened: (screen: Screen, window: Window) => void
    window_closed: (screen: Screen, window: Window) => void
    workspace_created: (screen: Screen, space: Workspace) => void
    workspace_destroyed: (screen: Screen, space: Workspace) => void
    application_opened: (screen: Screen, app: Application) => void
    application_closed: (screen: Screen, app: Application) => void
    background_changed: (screen: Screen) => void
    class_group_opened: (screen: Screen, class_group: ClassGroup) => void
    class_group_closed: (screen: Screen, class_group: ClassGroup) => void
    showing_desktop_changed: (screen: Screen) => void
    viewports_changed: (screen: Screen) => void
    window_manager_changed: (screen: Screen) => void
    pad2: () => void
    pad3: () => void
    pad4: () => void
    pad5: () => void
    pad6: () => void
}

abstract class ScreenClass {

    // Own properties of Wnck-3.0.Wnck.ScreenClass

    static name: string
}

interface ScreenPrivate {
}

class ScreenPrivate {

    // Own properties of Wnck-3.0.Wnck.ScreenPrivate

    static name: string
}

interface SelectorClass {

    // Own fields of Wnck-3.0.Wnck.SelectorClass

    parent_class: Gtk.MenuBarClass
    pad1: () => void
    pad2: () => void
    pad3: () => void
    pad4: () => void
}

abstract class SelectorClass {

    // Own properties of Wnck-3.0.Wnck.SelectorClass

    static name: string
}

interface SelectorPrivate {
}

class SelectorPrivate {

    // Own properties of Wnck-3.0.Wnck.SelectorPrivate

    static name: string
}

interface TasklistClass {

    // Own fields of Wnck-3.0.Wnck.TasklistClass

    parent_class: Gtk.ContainerClass
    pad1: () => void
    pad2: () => void
    pad3: () => void
    pad4: () => void
}

abstract class TasklistClass {

    // Own properties of Wnck-3.0.Wnck.TasklistClass

    static name: string
}

interface TasklistPrivate {
}

class TasklistPrivate {

    // Own properties of Wnck-3.0.Wnck.TasklistPrivate

    static name: string
}

interface WindowClass {

    // Own fields of Wnck-3.0.Wnck.WindowClass

    parent_class: GObject.ObjectClass
    name_changed: (window: Window) => void
    state_changed: (window: Window, changed_mask: WindowState, new_state: WindowState) => void
    workspace_changed: (window: Window) => void
    icon_changed: (window: Window) => void
    actions_changed: (window: Window, changed_mask: WindowActions, new_actions: WindowActions) => void
    geometry_changed: (window: Window) => void
    class_changed: (window: Window) => void
    role_changed: (window: Window) => void
    type_changed: (window: Window) => void
    pad1: () => void
}

abstract class WindowClass {

    // Own properties of Wnck-3.0.Wnck.WindowClass

    static name: string
}

interface WindowPrivate {
}

class WindowPrivate {

    // Own properties of Wnck-3.0.Wnck.WindowPrivate

    static name: string
}

interface WorkspaceClass {

    // Own fields of Wnck-3.0.Wnck.WorkspaceClass

    parent_class: GObject.ObjectClass
    name_changed: (space: Workspace) => void
    pad1: () => void
    pad2: () => void
    pad3: () => void
    pad4: () => void
}

abstract class WorkspaceClass {

    // Own properties of Wnck-3.0.Wnck.WorkspaceClass

    static name: string
}

interface WorkspaceLayout {

    // Own fields of Wnck-3.0.Wnck.WorkspaceLayout

    /**
     * number of rows in the layout grid.
     * @field 
     */
    rows: number
    /**
     * number of columns in the layout grid.
     * @field 
     */
    cols: number
    /**
     * array of size `grid_area` containing the index (starting from 0) of
     * the #WnckWorkspace for each position in the layout grid, or -1 if the
     * position does not correspond to any #WnckWorkspace.
     * @field 
     */
    grid: number
    /**
     * size of the grid containing all #WnckWorkspace. This can be
     * bigger than the number of #WnckWorkspace because the grid might not be
     * filled.
     * @field 
     */
    grid_area: number
    /**
     * row of the specific #WnckWorkspace, starting from 0.
     * @field 
     */
    current_row: number
    /**
     * column of the specific #WnckWorkspace, starting from 0.
     * @field 
     */
    current_col: number
}

/**
 * The #WnckWorkspaceLayout struct contains information about the layout of
 * #WnckWorkspace on a #WnckScreen, and the exact position of a specific
 * #WnckWorkspace.
 * @record 
 */
class WorkspaceLayout {

    // Own properties of Wnck-3.0.Wnck.WorkspaceLayout

    static name: string
}

interface WorkspacePrivate {
}

class WorkspacePrivate {

    // Own properties of Wnck-3.0.Wnck.WorkspacePrivate

    static name: string
}

}
export default Wnck;