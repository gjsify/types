
/*
 * Type Definitions for node-gtk (https://github.com/romgrk/node-gtk)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/gjsify/ts-for-gir
 */

import './node-wnck-3.0-import.d.ts';
    
/**
 * Wnck-3.0
 */

import type Gtk from '@girs/node-gtk-3.0';
import type xlib from '@girs/node-xlib-2.0';
import type Gdk from '@girs/node-gdk-3.0';
import type cairo from '@girs/node-cairo-1.0';
import type Pango from '@girs/node-pango-1.0';
import type HarfBuzz from '@girs/node-harfbuzz-0.0';
import type freetype2 from '@girs/node-freetype2-2.0';
import type GObject from '@girs/node-gobject-2.0';
import type GLib from '@girs/node-glib-2.0';
import type Gio from '@girs/node-gio-2.0';
import type GdkPixbuf from '@girs/node-gdkpixbuf-2.0';
import type GModule from '@girs/node-gmodule-2.0';
import type Atk from '@girs/node-atk-1.0';

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
 * @param gdkDisplay a <classname>GdkDisplay</classname>.
 * @param pid a process ID.
 * @param usage return location for the X resource usage of the application with process ID `pid`.
 */
function pidReadResourceUsage(gdkDisplay: Gdk.Display, pid: number, usage: ResourceUsage): void
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
 * @param ewmhSourceindicationClientType a role for the client.
 */
function setClientType(ewmhSourceindicationClientType: ClientType): void
/**
 * The default main icon size is %WNCK_DEFAULT_ICON_SIZE. This function allows
 * to change this value.
 * @param size the default size for windows and application standard icons.
 */
function setDefaultIconSize(size: number): void
/**
 * The default main icon size is %WNCK_DEFAULT_MINI_ICON_SIZE. This function
 * allows to change this value.
 * @param size the default size for windows and application mini icons.
 */
function setDefaultMiniIconSize(size: number): void
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
 * @param gdkDisplay a <classname>GdkDisplay</classname>.
 * @param xid an X window ID.
 * @param usage return location for the X resource usage of the application owning the X window ID `xid`.
 */
function xidReadResourceUsage(gdkDisplay: Gdk.Display, xid: number, usage: ResourceUsage): void
module ActionMenu {

    // Constructor properties interface

    interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Menu.ConstructorProperties {

        // Own constructor properties of Wnck-3.0.Wnck.ActionMenu

        window?: any | null
    }

}

interface ActionMenu extends Atk.ImplementorIface, Gtk.Buildable {

    // Own properties of Wnck-3.0.Wnck.ActionMenu

    readonly window: any & Gdk.Window
    __gtype__: number

    // Own fields of Wnck-3.0.Wnck.ActionMenu

    parentInstance: any
    priv: ActionMenuPrivate

    // Conflicting methods

    /**
     * Gets the name of the `buildable` object.
     * 
     * #GtkBuilder sets the name based on the
     * [GtkBuilder UI definition][BUILDER-UI]
     * used to construct the `buildable`.
     * @virtual 
     * @returns the name set with gtk_buildable_set_name()
     */
    getName(): string | null
    /**
     * Retrieves the name of a widget. See gtk_widget_set_name() for the
     * significance of widget names.
     * @returns name of the widget. This string is owned by GTK+ and should not be modified or freed
     */
    getName(): string | null

    // Overloads of getName

    /**
     * Gets the name of the `buildable` object.
     * 
     * #GtkBuilder sets the name based on the
     * [GtkBuilder UI definition][BUILDER-UI]
     * used to construct the `buildable`.
     * @virtual 
     * @returns the name set with gtk_buildable_set_name()
     */
    getName(): string | null
    /**
     * Sets the name of the `buildable` object.
     * @virtual 
     * @param name name to set
     */
    setName(name: string | null): void
    /**
     * Widgets can be named, which allows you to refer to them from a
     * CSS file. You can apply a style to widgets with a particular name
     * in the CSS file. See the documentation for the CSS syntax (on the
     * same page as the docs for #GtkStyleContext).
     * 
     * Note that the CSS syntax has certain special characters to delimit
     * and represent elements in a selector (period, #, >, *...), so using
     * these will make your widget impossible to match by name. Any combination
     * of alphanumeric symbols, dashes and underscores will suffice.
     * @param name name for the widget
     */
    setName(name: string | null): void

    // Overloads of setName

    /**
     * Sets the name of the `buildable` object.
     * @virtual 
     * @param name name to set
     */
    setName(name: string | null): void
    /**
     * Sets an accelerator path for this menu from which accelerator paths
     * for its immediate children, its menu items, can be constructed.
     * The main purpose of this function is to spare the programmer the
     * inconvenience of having to call gtk_menu_item_set_accel_path() on
     * each menu item that should support runtime user changable accelerators.
     * Instead, by just calling gtk_menu_set_accel_path() on their parent,
     * each menu item of this menu, that contains a label describing its
     * purpose, automatically gets an accel path assigned.
     * 
     * For example, a menu containing menu items “New” and “Exit”, will, after
     * `gtk_menu_set_accel_path (menu, "<Gnumeric-Sheet>/File");` has been
     * called, assign its items the accel paths: `"<Gnumeric-Sheet>/File/New"`
     * and `"<Gnumeric-Sheet>/File/Exit"`.
     * 
     * Assigning accel paths to menu items then enables the user to change
     * their accelerators at runtime. More details about accelerator paths
     * and their default setups can be found at gtk_accel_map_add_entry().
     * 
     * Note that `accel_path` string will be stored in a #GQuark. Therefore,
     * if you pass a static string, you can save some memory by interning
     * it first with g_intern_static_string().
     * @param accelPath a valid accelerator path, or %NULL to unset the path
     */
    setAccelPath(accelPath: string | null): void

    // Overloads of setAccelPath

    /**
     * Given an accelerator group, `accel_group,` and an accelerator path,
     * `accel_path,` sets up an accelerator in `accel_group` so whenever the
     * key binding that is defined for `accel_path` is pressed, `widget`
     * will be activated.  This removes any accelerators (for any
     * accelerator group) installed by previous calls to
     * gtk_widget_set_accel_path(). Associating accelerators with
     * paths allows them to be modified by the user and the modifications
     * to be saved for future use. (See gtk_accel_map_save().)
     * 
     * This function is a low level function that would most likely
     * be used by a menu creation system like #GtkUIManager. If you
     * use #GtkUIManager, setting up accelerator paths will be done
     * automatically.
     * 
     * Even when you you aren’t using #GtkUIManager, if you only want to
     * set up accelerators on menu items gtk_menu_item_set_accel_path()
     * provides a somewhat more convenient interface.
     * 
     * Note that `accel_path` string will be stored in a #GQuark. Therefore, if you
     * pass a static string, you can save some memory by interning it first with
     * g_intern_static_string().
     * @param accelPath path used to look up the accelerator
     * @param accelGroup a #GtkAccelGroup.
     */
    setAccelPath(accelPath: string | null, accelGroup: Gtk.AccelGroup | null): void
    /**
     * Given an accelerator group, `accel_group,` and an accelerator path,
     * `accel_path,` sets up an accelerator in `accel_group` so whenever the
     * key binding that is defined for `accel_path` is pressed, `widget`
     * will be activated.  This removes any accelerators (for any
     * accelerator group) installed by previous calls to
     * gtk_widget_set_accel_path(). Associating accelerators with
     * paths allows them to be modified by the user and the modifications
     * to be saved for future use. (See gtk_accel_map_save().)
     * 
     * This function is a low level function that would most likely
     * be used by a menu creation system like #GtkUIManager. If you
     * use #GtkUIManager, setting up accelerator paths will be done
     * automatically.
     * 
     * Even when you you aren’t using #GtkUIManager, if you only want to
     * set up accelerators on menu items gtk_menu_item_set_accel_path()
     * provides a somewhat more convenient interface.
     * 
     * Note that `accel_path` string will be stored in a #GQuark. Therefore, if you
     * pass a static string, you can save some memory by interning it first with
     * g_intern_static_string().
     * @param accelPath path used to look up the accelerator
     * @param accelGroup a #GtkAccelGroup.
     */
    setAccelPath(accelPath: string | null, accelGroup: Gtk.AccelGroup | null): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param childProperty the name of a child property installed on     the class of `container`
     */
    childNotify(child: Gtk.Widget, childProperty: string | null): void

    // Overloads of childNotify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @virtual 
     * @param childProperty the name of a child property installed on the                  class of `widget’`s parent
     */
    childNotify(childProperty: GObject.ParamSpec): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @virtual 
     * @param childProperty the name of a child property installed on the                  class of `widget’`s parent
     */
    childNotify(childProperty: GObject.ParamSpec): void

    // Class property signals of Wnck-3.0.Wnck.ActionMenu

    connect(sigName: "notify::window", callback: (...args: any[]) => void): number
    on(sigName: "notify::window", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::window", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::accel-group", callback: (...args: any[]) => void): number
    on(sigName: "notify::accel-group", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accel-group", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accel-group", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accel-group", ...args: any[]): void
    connect(sigName: "notify::accel-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::accel-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accel-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accel-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accel-path", ...args: any[]): void
    connect(sigName: "notify::active", callback: (...args: any[]) => void): number
    on(sigName: "notify::active", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::active", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::active", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::active", ...args: any[]): void
    connect(sigName: "notify::anchor-hints", callback: (...args: any[]) => void): number
    on(sigName: "notify::anchor-hints", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::anchor-hints", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::anchor-hints", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::anchor-hints", ...args: any[]): void
    connect(sigName: "notify::attach-widget", callback: (...args: any[]) => void): number
    on(sigName: "notify::attach-widget", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::attach-widget", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::attach-widget", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::attach-widget", ...args: any[]): void
    connect(sigName: "notify::menu-type-hint", callback: (...args: any[]) => void): number
    on(sigName: "notify::menu-type-hint", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::menu-type-hint", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::menu-type-hint", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::menu-type-hint", ...args: any[]): void
    connect(sigName: "notify::monitor", callback: (...args: any[]) => void): number
    on(sigName: "notify::monitor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::monitor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::monitor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::monitor", ...args: any[]): void
    connect(sigName: "notify::rect-anchor-dx", callback: (...args: any[]) => void): number
    on(sigName: "notify::rect-anchor-dx", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rect-anchor-dx", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rect-anchor-dx", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rect-anchor-dx", ...args: any[]): void
    connect(sigName: "notify::rect-anchor-dy", callback: (...args: any[]) => void): number
    on(sigName: "notify::rect-anchor-dy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::rect-anchor-dy", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::rect-anchor-dy", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::rect-anchor-dy", ...args: any[]): void
    connect(sigName: "notify::reserve-toggle-size", callback: (...args: any[]) => void): number
    on(sigName: "notify::reserve-toggle-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::reserve-toggle-size", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::reserve-toggle-size", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::reserve-toggle-size", ...args: any[]): void
    connect(sigName: "notify::tearoff-state", callback: (...args: any[]) => void): number
    on(sigName: "notify::tearoff-state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tearoff-state", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tearoff-state", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tearoff-state", ...args: any[]): void
    connect(sigName: "notify::tearoff-title", callback: (...args: any[]) => void): number
    on(sigName: "notify::tearoff-title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tearoff-title", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tearoff-title", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tearoff-title", ...args: any[]): void
    connect(sigName: "notify::take-focus", callback: (...args: any[]) => void): number
    on(sigName: "notify::take-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::take-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::take-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::take-focus", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::border-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::border-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::border-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (...args: any[]) => void): number
    on(sigName: "notify::child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (...args: any[]) => void): number
    on(sigName: "notify::resize-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::resize-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::resize-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (...args: any[]) => void): number
    on(sigName: "notify::app-paintable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::app-paintable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::app-paintable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (...args: any[]) => void): number
    on(sigName: "notify::composite-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::composite-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::composite-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (...args: any[]) => void): number
    on(sigName: "notify::double-buffered", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::double-buffered", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::double-buffered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (...args: any[]) => void): number
    on(sigName: "notify::events", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::events", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (...args: any[]) => void): number
    on(sigName: "notify::expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): number
    on(sigName: "notify::focus-on-click", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::focus-on-click", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (...args: any[]) => void): number
    on(sigName: "notify::halign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::halign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-tooltip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-tooltip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (...args: any[]) => void): number
    on(sigName: "notify::height-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::height-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (...args: any[]) => void): number
    on(sigName: "notify::hexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::hexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-end", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-end", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-left", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-left", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-right", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-right", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-start", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-start", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (...args: any[]) => void): number
    on(sigName: "notify::no-show-all", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::no-show-all", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::no-show-all", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (...args: any[]) => void): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (...args: any[]) => void): number
    on(sigName: "notify::receives-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::receives-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-factor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-factor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (...args: any[]) => void): number
    on(sigName: "notify::sensitive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sensitive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (...args: any[]) => void): number
    on(sigName: "notify::style", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::style", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::style", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): number
    on(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): number
    on(sigName: "notify::tooltip-text", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-text", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (...args: any[]) => void): number
    on(sigName: "notify::valign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::valign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (...args: any[]) => void): number
    on(sigName: "notify::vexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::vexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (...args: any[]) => void): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (...args: any[]) => void): number
    on(sigName: "notify::width-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::width-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
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

    // Constructors of Wnck-3.0.Wnck.ActionMenu

    constructor(config?: ActionMenu.ConstructorProperties) 
    /**
     * Creates a new #WnckActionMenu. The #WnckActionMenu will be filled with menu
     * items for window operations on `window`.
     * @constructor 
     * @param window the #WnckWindow for which a menu will be created.
     * @returns a newly created #WnckActionMenu.
     */
    constructor(window: Window) 
    /**
     * Creates a new #WnckActionMenu. The #WnckActionMenu will be filled with menu
     * items for window operations on `window`.
     * @constructor 
     * @param window the #WnckWindow for which a menu will be created.
     * @returns a newly created #WnckActionMenu.
     */
    static new(window: Window): ActionMenu

    // Overloads of new

    /**
     * Creates a new #GtkMenu
     * @constructor 
     * @returns a new #GtkMenu
     */
    static new(): Gtk.Menu
    _init(config?: ActionMenu.ConstructorProperties): void
}

module Application {

    // Signal callback interfaces

    /**
     * Signal callback interface for `icon-changed`
     */
    interface IconChangedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `name-changed`
     */
    interface NameChangedSignalCallback {
        (): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Application {

    // Own properties of Wnck-3.0.Wnck.Application

    __gtype__: number

    // Own fields of Wnck-3.0.Wnck.Application

    parentInstance: GObject.Object
    priv: ApplicationPrivate

    // Owm methods of Wnck-3.0.Wnck.Application

    /**
     * Gets the icon to be used for `app`. If no icon is set for `app,` a
     * suboptimal heuristic is used to find an appropriate icon. If no icon was
     * found, a fallback icon is used.
     * @returns the icon for @app. The caller should reference the returned <classname>GdkPixbuf</classname> if it needs to keep the icon around.
     */
    getIcon(): GdkPixbuf.Pixbuf
    /**
     * Gets whether a default fallback icon is used for `app` (because none
     * was set on `app)`.
     * @returns %TRUE if the icon for @app is a fallback, %FALSE otherwise.
     */
    getIconIsFallback(): boolean
    /**
     * Gets the icon name of `app` (to be used when `app` is minimized). Since
     * there is no way to properly find this name, various suboptimal heuristics
     * are used to find it.
     * @returns the icon name of @app, or a fallback icon name if no icon name is available.
     */
    getIconName(): string | null
    /**
     * Gets the mini-icon to be used for `app`. If no mini-icon is set for `app,`
     * a suboptimal heuristic is used to find an appropriate icon. If no mini-icon
     * was found, a fallback mini-icon is used.
     * @returns the mini-icon for @app. The caller should reference the returned <classname>GdkPixbuf</classname> if it needs to keep the mini-icon around.
     */
    getMiniIcon(): GdkPixbuf.Pixbuf
    /**
     * Gets the number of #WnckWindow belonging to `app`.
     * @returns the number of #WnckWindow belonging to @app.
     */
    getNWindows(): number
    /**
     * Gets the name of `app`. Since there is no way to properly find this name,
     * various suboptimal heuristics are used to find it. GTK+ should probably have
     * a function to allow applications to set the _NET_WM_NAME property on the
     * group leader as the application name, and the <ulink
     * url="http://standards.freedesktop.org/wm-spec/wm-spec-latest.html">EWMH</ulink>
     * should say that this is where the application name goes.
     * @returns the name of @app, or a fallback name if no name is available.
     */
    getName(): string | null
    /**
     * Gets the process ID of `app`.
     * @returns the process ID of @app, or 0 if none is available.
     */
    getPid(): number
    /**
     * Gets the startup sequence ID used for startup notification of `app`.
     * @returns the startup sequence ID used for startup notification of @app, or %NULL if none is available.
     */
    getStartupId(): string | null
    /**
     * Gets the list of #WnckWindow belonging to `app`.
     * @returns the list of #WnckWindow belonging to @app, or %NULL if the application contains no window. The list should not be modified nor freed, as it is owned by @app.
     */
    getWindows(): Window[]
    /**
     * Gets the X window ID of the group leader window for `app`.
     * @returns the X window ID of the group leader window for @app.
     */
    getXid(): number

    // Own virtual methods of Wnck-3.0.Wnck.Application

    iconChanged(): void
    nameChanged(): void

    // Own signals of Wnck-3.0.Wnck.Application

    connect(sigName: "icon-changed", callback: Application.IconChangedSignalCallback): number
    on(sigName: "icon-changed", callback: Application.IconChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "icon-changed", callback: Application.IconChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "icon-changed", callback: Application.IconChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "icon-changed", ...args: any[]): void
    connect(sigName: "name-changed", callback: Application.NameChangedSignalCallback): number
    on(sigName: "name-changed", callback: Application.NameChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "name-changed", callback: Application.NameChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "name-changed", callback: Application.NameChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "name-changed", ...args: any[]): void

    // Class property signals of Wnck-3.0.Wnck.Application

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

    // Constructors of Wnck-3.0.Wnck.Application

    constructor(config?: Application.ConstructorProperties) 
    _init(config?: Application.ConstructorProperties): void
    /**
     * Gets the #WnckApplication corresponding to the group leader with `xwindow`
     * as X window ID.
     * @param xwindow the X window ID of a group leader.
     * @returns the #WnckApplication corresponding to @xwindow, or %NULL if there no such #WnckApplication could be found. The returned #WnckApplication is owned by libwnck and must not be referenced or unreferenced.
     */
    static get(xwindow: number): Application
}

module ClassGroup {

    // Signal callback interfaces

    /**
     * Signal callback interface for `icon-changed`
     */
    interface IconChangedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `name-changed`
     */
    interface NameChangedSignalCallback {
        (): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface ClassGroup {

    // Own properties of Wnck-3.0.Wnck.ClassGroup

    __gtype__: number

    // Own fields of Wnck-3.0.Wnck.ClassGroup

    parentInstance: GObject.Object
    priv: ClassGroupPrivate

    // Owm methods of Wnck-3.0.Wnck.ClassGroup

    /**
     * Gets the icon to be used for `class_group`. Since there is no way to
     * properly find the icon, a suboptimal heuristic is used to find it. The icon
     * is the first icon found by looking at all the #WnckApplication for each
     * #WnckWindow in `class_group,` then at all the #WnckWindow in `class_group`. If
     * no icon was found, a fallback icon is used.
     * @returns the icon for @class_group. The caller should reference the returned <classname>GdkPixbuf</classname> if it needs to keep the icon around.
     */
    getIcon(): GdkPixbuf.Pixbuf
    /**
     * Gets the identifier name for `class_group`. This is the resource class for
     * `class_group`.
     * @returns the identifier name of @class_group, or an empty string if the group has no identifier name.
     */
    getId(): string | null
    /**
     * Gets the mini-icon to be used for `class_group`. Since there is no way to
     * properly find the mini-icon, the same suboptimal heuristic as the one for
     * wnck_class_group_get_icon() is used to find it.
     * @returns the mini-icon for @class_group. The caller should reference the returned <classname>GdkPixbuf</classname> if it needs to keep the mini-icon around.
     */
    getMiniIcon(): GdkPixbuf.Pixbuf
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
    getName(): string | null
    /**
     * Gets the resource class name for `class_group`.
     * @returns the resource class name of @class_group, or an empty string if the group has no resource class name.
     */
    getResClass(): string | null
    /**
     * Gets the list of #WnckWindow that are grouped in `class_group`.
     * @returns the list of #WnckWindow grouped in @class_group, or %NULL if the group contains no window. The list should not be modified nor freed, as it is owned by @class_group.
     */
    getWindows(): Window[]

    // Own virtual methods of Wnck-3.0.Wnck.ClassGroup

    iconChanged(): void
    nameChanged(): void

    // Own signals of Wnck-3.0.Wnck.ClassGroup

    connect(sigName: "icon-changed", callback: ClassGroup.IconChangedSignalCallback): number
    on(sigName: "icon-changed", callback: ClassGroup.IconChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "icon-changed", callback: ClassGroup.IconChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "icon-changed", callback: ClassGroup.IconChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "icon-changed", ...args: any[]): void
    connect(sigName: "name-changed", callback: ClassGroup.NameChangedSignalCallback): number
    on(sigName: "name-changed", callback: ClassGroup.NameChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "name-changed", callback: ClassGroup.NameChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "name-changed", callback: ClassGroup.NameChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "name-changed", ...args: any[]): void

    // Class property signals of Wnck-3.0.Wnck.ClassGroup

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

    // Constructors of Wnck-3.0.Wnck.ClassGroup

    constructor(config?: ClassGroup.ConstructorProperties) 
    _init(config?: ClassGroup.ConstructorProperties): void
    /**
     * Gets the #WnckClassGroup corresponding to `id`.
     * @param id identifier name of the sought resource class.
     * @returns the #WnckClassGroup corresponding to @id, or %NULL if there is no #WnckClassGroup with the specified @id. The returned #WnckClassGroup is owned by libwnck and must not be referenced or unreferenced.
     */
    static get(id: string | null): ClassGroup
}

module Handle {

    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Wnck-3.0.Wnck.Handle

        clientType?: ClientType | null
    }

}

interface Handle {

    // Own properties of Wnck-3.0.Wnck.Handle

    clientType: ClientType
    __gtype__: number

    // Owm methods of Wnck-3.0.Wnck.Handle

    /**
     * Gets the #WnckApplication corresponding to the group leader with `xwindow`
     * as X window ID.
     * @param xwindow the X window ID of a group leader.
     * @returns the #WnckApplication corresponding to @xwindow, or %NULL if there no such #WnckApplication could be found. The returned #WnckApplication is owned by libwnck and must not be referenced or unreferenced.
     */
    getApplication(xwindow: number): Application
    /**
     * Gets the #WnckClassGroup corresponding to `id`.
     * @param id identifier name of the sought resource class.
     * @returns the #WnckClassGroup corresponding to @id, or %NULL if there is no #WnckClassGroup with the specified @id. The returned #WnckClassGroup is owned by libwnck and must not be referenced or unreferenced.
     */
    getClassGroup(id: string | null): ClassGroup
    /**
     * Gets the default #WnckScreen on the default display.
     * @returns the default #WnckScreen. The returned #WnckScreen is owned by #WnckHandle and must not be referenced or unreferenced. This can return %NULL if not on X11.
     */
    getDefaultScreen(): Screen | null
    /**
     * Gets the #WnckScreen for a given screen on the default display.
     * @param index screen number, starting from 0.
     * @returns the #WnckScreen for screen @index, or %NULL if no such screen exists. The returned #WnckScreen is owned by #WnckHandle and must not be referenced or unreferenced.
     */
    getScreen(index: number): Screen
    /**
     * Gets the #WnckScreen for the root window at `root_window_id,` or
     * %NULL if no #WnckScreen exists for this root window.
     * 
     * This function does not work if wnck_handle_get_screen() was not called
     * for the sought #WnckScreen before, and returns %NULL.
     * @param rootWindowId an X window ID.
     * @returns the #WnckScreen for the root window at @root_window_id, or %NULL. The returned #WnckScreen is owned by #WnckHandle and must not be referenced or unreferenced.
     */
    getScreenForRoot(rootWindowId: number): Screen
    /**
     * Gets a preexisting #WnckWindow for the X window `xwindow`. This will not
     * create a #WnckWindow if none exists. The function is robust against bogus
     * window IDs.
     * @param xwindow an X window ID.
     * @returns the #WnckWindow for @xwindow. The returned #WnckWindow is owned by libwnck and must not be referenced or unreferenced.
     */
    getWindow(xwindow: number): Window
    /**
     * The default main icon size is %WNCK_DEFAULT_ICON_SIZE. This function allows
     * to change this value.
     * @param iconSize the default size for windows and application standard icons.
     */
    setDefaultIconSize(iconSize: number): void
    /**
     * The default main icon size is %WNCK_DEFAULT_MINI_ICON_SIZE. This function
     * allows to change this value.
     * @param iconSize the default size for windows and application mini icons.
     */
    setDefaultMiniIconSize(iconSize: number): void

    // Class property signals of Wnck-3.0.Wnck.Handle

    connect(sigName: "notify::client-type", callback: (...args: any[]) => void): number
    on(sigName: "notify::client-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::client-type", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::client-type", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::client-type", ...args: any[]): void
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
    disconnect(id: number): void
}

class Handle extends GObject.Object {

    // Own properties of Wnck-3.0.Wnck.Handle

    static name: string

    // Constructors of Wnck-3.0.Wnck.Handle

    constructor(config?: Handle.ConstructorProperties) 
    /**
     * Creates a new #WnckHandle object with a given `client_type`.
     * @constructor 
     * @param clientType a role for the client
     * @returns newly created #WnckHandle.
     */
    constructor(clientType: ClientType) 
    /**
     * Creates a new #WnckHandle object with a given `client_type`.
     * @constructor 
     * @param clientType a role for the client
     * @returns newly created #WnckHandle.
     */
    static new(clientType: ClientType): Handle
    _init(config?: Handle.ConstructorProperties): void
}

module ImageMenuItem {

    // Constructor properties interface

    interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Actionable.ConstructorProperties, Gtk.Activatable.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.MenuItem.ConstructorProperties {
    }

}

interface ImageMenuItem extends Atk.ImplementorIface, Gtk.Actionable, Gtk.Activatable, Gtk.Buildable {

    // Own properties of Wnck-3.0.Wnck.ImageMenuItem

    __gtype__: number

    // Owm methods of Wnck-3.0.Wnck.ImageMenuItem

    makeLabelBold(): void
    makeLabelNormal(): void
    setImageFromIconPixbuf(pixbuf: GdkPixbuf.Pixbuf): void
    setImageFromWindow(window: Window): void

    // Conflicting methods

    /**
     * Emits the #GtkMenuItem::activate signal on the given item
     * @virtual 
     */
    activate(): void

    // Overloads of activate

    /**
     * For widgets that can be “activated” (buttons, menu items, etc.)
     * this function activates them. Activation is what happens when you
     * press Enter on a widget during key navigation. If `widget` isn't
     * activatable, the function returns %FALSE.
     * @returns %TRUE if the widget was activatable
     */
    activate(): boolean
    /**
     * For widgets that can be “activated” (buttons, menu items, etc.)
     * this function activates them. Activation is what happens when you
     * press Enter on a widget during key navigation. If `widget` isn't
     * activatable, the function returns %FALSE.
     * @returns %TRUE if the widget was activatable
     */
    activate(): boolean
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @virtual 
     * @param childProperty the name of a child property installed on the                  class of `widget’`s parent
     */
    childNotify(childProperty: GObject.ParamSpec): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param childProperty the name of a child property installed on     the class of `container`
     */
    childNotify(child: Gtk.Widget, childProperty: string | null): void

    // Overloads of childNotify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @virtual 
     * @param childProperty the name of a child property installed on the                  class of `widget’`s parent
     */
    childNotify(childProperty: GObject.ParamSpec): void
    /**
     * Retrieves the name of a widget. See gtk_widget_set_name() for the
     * significance of widget names.
     * @returns name of the widget. This string is owned by GTK+ and should not be modified or freed
     */
    getName(): string | null

    // Overloads of getName

    /**
     * Gets the name of the `buildable` object.
     * 
     * #GtkBuilder sets the name based on the
     * [GtkBuilder UI definition][BUILDER-UI]
     * used to construct the `buildable`.
     * @virtual 
     * @returns the name set with gtk_buildable_set_name()
     */
    getName(): string | null
    /**
     * Gets the name of the `buildable` object.
     * 
     * #GtkBuilder sets the name based on the
     * [GtkBuilder UI definition][BUILDER-UI]
     * used to construct the `buildable`.
     * @virtual 
     * @returns the name set with gtk_buildable_set_name()
     */
    getName(): string | null
    /**
     * Set the accelerator path on `menu_item,` through which runtime
     * changes of the menu item’s accelerator caused by the user can be
     * identified and saved to persistent storage (see gtk_accel_map_save()
     * on this). To set up a default accelerator for this menu item, call
     * gtk_accel_map_add_entry() with the same `accel_path`. See also
     * gtk_accel_map_add_entry() on the specifics of accelerator paths,
     * and gtk_menu_set_accel_path() for a more convenient variant of
     * this function.
     * 
     * This function is basically a convenience wrapper that handles
     * calling gtk_widget_set_accel_path() with the appropriate accelerator
     * group for the menu item.
     * 
     * Note that you do need to set an accelerator on the parent menu with
     * gtk_menu_set_accel_group() for this to work.
     * 
     * Note that `accel_path` string will be stored in a #GQuark.
     * Therefore, if you pass a static string, you can save some memory
     * by interning it first with g_intern_static_string().
     * @param accelPath accelerator path, corresponding to this menu     item’s functionality, or %NULL to unset the current path.
     */
    setAccelPath(accelPath: string | null): void

    // Overloads of setAccelPath

    /**
     * Given an accelerator group, `accel_group,` and an accelerator path,
     * `accel_path,` sets up an accelerator in `accel_group` so whenever the
     * key binding that is defined for `accel_path` is pressed, `widget`
     * will be activated.  This removes any accelerators (for any
     * accelerator group) installed by previous calls to
     * gtk_widget_set_accel_path(). Associating accelerators with
     * paths allows them to be modified by the user and the modifications
     * to be saved for future use. (See gtk_accel_map_save().)
     * 
     * This function is a low level function that would most likely
     * be used by a menu creation system like #GtkUIManager. If you
     * use #GtkUIManager, setting up accelerator paths will be done
     * automatically.
     * 
     * Even when you you aren’t using #GtkUIManager, if you only want to
     * set up accelerators on menu items gtk_menu_item_set_accel_path()
     * provides a somewhat more convenient interface.
     * 
     * Note that `accel_path` string will be stored in a #GQuark. Therefore, if you
     * pass a static string, you can save some memory by interning it first with
     * g_intern_static_string().
     * @param accelPath path used to look up the accelerator
     * @param accelGroup a #GtkAccelGroup.
     */
    setAccelPath(accelPath: string | null, accelGroup: Gtk.AccelGroup | null): void
    /**
     * Given an accelerator group, `accel_group,` and an accelerator path,
     * `accel_path,` sets up an accelerator in `accel_group` so whenever the
     * key binding that is defined for `accel_path` is pressed, `widget`
     * will be activated.  This removes any accelerators (for any
     * accelerator group) installed by previous calls to
     * gtk_widget_set_accel_path(). Associating accelerators with
     * paths allows them to be modified by the user and the modifications
     * to be saved for future use. (See gtk_accel_map_save().)
     * 
     * This function is a low level function that would most likely
     * be used by a menu creation system like #GtkUIManager. If you
     * use #GtkUIManager, setting up accelerator paths will be done
     * automatically.
     * 
     * Even when you you aren’t using #GtkUIManager, if you only want to
     * set up accelerators on menu items gtk_menu_item_set_accel_path()
     * provides a somewhat more convenient interface.
     * 
     * Note that `accel_path` string will be stored in a #GQuark. Therefore, if you
     * pass a static string, you can save some memory by interning it first with
     * g_intern_static_string().
     * @param accelPath path used to look up the accelerator
     * @param accelGroup a #GtkAccelGroup.
     */
    setAccelPath(accelPath: string | null, accelGroup: Gtk.AccelGroup | null): void
    /**
     * Widgets can be named, which allows you to refer to them from a
     * CSS file. You can apply a style to widgets with a particular name
     * in the CSS file. See the documentation for the CSS syntax (on the
     * same page as the docs for #GtkStyleContext).
     * 
     * Note that the CSS syntax has certain special characters to delimit
     * and represent elements in a selector (period, #, >, *...), so using
     * these will make your widget impossible to match by name. Any combination
     * of alphanumeric symbols, dashes and underscores will suffice.
     * @param name name for the widget
     */
    setName(name: string | null): void

    // Overloads of setName

    /**
     * Sets the name of the `buildable` object.
     * @virtual 
     * @param name name to set
     */
    setName(name: string | null): void
    /**
     * Sets the name of the `buildable` object.
     * @virtual 
     * @param name name to set
     */
    setName(name: string | null): void

    // Class property signals of Wnck-3.0.Wnck.ImageMenuItem

    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::accel-path", callback: (...args: any[]) => void): number
    on(sigName: "notify::accel-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::accel-path", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::accel-path", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::accel-path", ...args: any[]): void
    connect(sigName: "notify::label", callback: (...args: any[]) => void): number
    on(sigName: "notify::label", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::label", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::label", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::right-justified", callback: (...args: any[]) => void): number
    on(sigName: "notify::right-justified", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::right-justified", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::right-justified", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::right-justified", ...args: any[]): void
    connect(sigName: "notify::submenu", callback: (...args: any[]) => void): number
    on(sigName: "notify::submenu", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::submenu", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::submenu", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::submenu", ...args: any[]): void
    connect(sigName: "notify::use-underline", callback: (...args: any[]) => void): number
    on(sigName: "notify::use-underline", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::use-underline", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::use-underline", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::use-underline", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::border-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::border-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::border-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (...args: any[]) => void): number
    on(sigName: "notify::child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (...args: any[]) => void): number
    on(sigName: "notify::resize-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::resize-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::resize-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (...args: any[]) => void): number
    on(sigName: "notify::app-paintable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::app-paintable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::app-paintable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (...args: any[]) => void): number
    on(sigName: "notify::composite-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::composite-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::composite-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (...args: any[]) => void): number
    on(sigName: "notify::double-buffered", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::double-buffered", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::double-buffered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (...args: any[]) => void): number
    on(sigName: "notify::events", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::events", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (...args: any[]) => void): number
    on(sigName: "notify::expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): number
    on(sigName: "notify::focus-on-click", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::focus-on-click", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (...args: any[]) => void): number
    on(sigName: "notify::halign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::halign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-tooltip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-tooltip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (...args: any[]) => void): number
    on(sigName: "notify::height-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::height-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (...args: any[]) => void): number
    on(sigName: "notify::hexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::hexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-end", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-end", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-left", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-left", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-right", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-right", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-start", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-start", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (...args: any[]) => void): number
    on(sigName: "notify::no-show-all", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::no-show-all", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::no-show-all", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (...args: any[]) => void): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (...args: any[]) => void): number
    on(sigName: "notify::receives-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::receives-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-factor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-factor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (...args: any[]) => void): number
    on(sigName: "notify::sensitive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sensitive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (...args: any[]) => void): number
    on(sigName: "notify::style", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::style", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::style", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): number
    on(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): number
    on(sigName: "notify::tooltip-text", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-text", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (...args: any[]) => void): number
    on(sigName: "notify::valign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::valign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (...args: any[]) => void): number
    on(sigName: "notify::vexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::vexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (...args: any[]) => void): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (...args: any[]) => void): number
    on(sigName: "notify::width-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::width-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: (...args: any[]) => void): number
    on(sigName: "notify::window", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::window", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::window", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::action-name", callback: (...args: any[]) => void): number
    on(sigName: "notify::action-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::action-name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::action-name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::action-name", ...args: any[]): void
    connect(sigName: "notify::action-target", callback: (...args: any[]) => void): number
    on(sigName: "notify::action-target", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::action-target", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::action-target", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::action-target", ...args: any[]): void
    connect(sigName: "notify::related-action", callback: (...args: any[]) => void): number
    on(sigName: "notify::related-action", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::related-action", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::related-action", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::related-action", ...args: any[]): void
    connect(sigName: "notify::use-action-appearance", callback: (...args: any[]) => void): number
    on(sigName: "notify::use-action-appearance", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::use-action-appearance", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::use-action-appearance", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::use-action-appearance", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: string, callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: string, callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: string, ...args: any[]): void
    disconnect(id: number): void
}

class ImageMenuItem extends Gtk.MenuItem {

    // Own properties of Wnck-3.0.Wnck.ImageMenuItem

    static name: string

    // Constructors of Wnck-3.0.Wnck.ImageMenuItem

    constructor(config?: ImageMenuItem.ConstructorProperties) 
    constructor() 
    static new(): ImageMenuItem
    static newWithLabel(label: string | null): ImageMenuItem
    _init(config?: ImageMenuItem.ConstructorProperties): void
}

module Pager {

    // Constructor properties interface

    interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Widget.ConstructorProperties {

        // Own constructor properties of Wnck-3.0.Wnck.Pager

        handle?: Handle | null
    }

}

interface Pager extends Atk.ImplementorIface, Gtk.Buildable {

    // Own properties of Wnck-3.0.Wnck.Pager

    readonly handle: Handle
    __gtype__: number

    // Own fields of Wnck-3.0.Wnck.Pager

    parentInstance: any
    priv: PagerPrivate

    // Owm methods of Wnck-3.0.Wnck.Pager

    getWrapOnScroll(): boolean
    /**
     * Sets the display mode for `pager` to `mode`.
     * @param mode a display mode.
     */
    setDisplayMode(mode: PagerDisplayMode): void
    /**
     * Tries to change the number of rows in the layout of #WnckWorkspace on the
     * #WnckScreen `pager` is watching. Since no more than one application should
     * set this property of a #WnckScreen at a time, setting the layout is not
     * guaranteed to work.
     * 
     * If `pager` has not been added to a widget hierarchy, the call will fail
     * because `pager` can't know the screen on which to modify the layout.
     * @param nRows the number of rows to use for the layout of #WnckWorkspace on the #WnckScreen `pager` is watching.
     * @returns %TRUE if the layout of #WnckWorkspace has been successfully changed or did not need to be changed, %FALSE otherwise.
     */
    setNRows(nRows: number): boolean
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
     * @returns %TRUE if the layout of #WnckWorkspace has been successfully changed or did not need to be changed, %FALSE otherwise.
     */
    setOrientation(orientation: Gtk.Orientation): boolean
    /**
     * Sets `pager` to react to input device scrolling in one of the
     * available scroll modes.
     * @param scrollMode a scroll mode.
     */
    setScrollMode(scrollMode: PagerScrollMode): void
    /**
     * Sets the shadow type for `pager` to `shadow_type`. The main use of this
     * function is proper integration of #WnckPager in panels with non-system
     * backgrounds.
     * @param shadowType a shadow type.
     */
    setShadowType(shadowType: Gtk.ShadowType): void
    /**
     * Sets `pager` to display all #WnckWorkspace or not, according to
     * `show_all_workspaces`.
     * @param showAllWorkspaces whether to display all #WnckWorkspace in `pager`.
     */
    setShowAll(showAllWorkspaces: boolean): void
    /**
     * Sets the wrapping behavior of the `pager`. Setting it to %TRUE will
     * wrap arround to the start when scrolling over the end and vice
     * versa. By default it is set to %FALSE.
     * @param wrapOnScroll a boolean.
     */
    setWrapOnScroll(wrapOnScroll: boolean): void

    // Conflicting methods

    /**
     * Retrieves the name of a widget. See gtk_widget_set_name() for the
     * significance of widget names.
     * @returns name of the widget. This string is owned by GTK+ and should not be modified or freed
     */
    getName(): string | null

    // Overloads of getName

    /**
     * Gets the name of the `buildable` object.
     * 
     * #GtkBuilder sets the name based on the
     * [GtkBuilder UI definition][BUILDER-UI]
     * used to construct the `buildable`.
     * @virtual 
     * @returns the name set with gtk_buildable_set_name()
     */
    getName(): string | null
    /**
     * Gets the name of the `buildable` object.
     * 
     * #GtkBuilder sets the name based on the
     * [GtkBuilder UI definition][BUILDER-UI]
     * used to construct the `buildable`.
     * @virtual 
     * @returns the name set with gtk_buildable_set_name()
     */
    getName(): string | null
    /**
     * Widgets can be named, which allows you to refer to them from a
     * CSS file. You can apply a style to widgets with a particular name
     * in the CSS file. See the documentation for the CSS syntax (on the
     * same page as the docs for #GtkStyleContext).
     * 
     * Note that the CSS syntax has certain special characters to delimit
     * and represent elements in a selector (period, #, >, *...), so using
     * these will make your widget impossible to match by name. Any combination
     * of alphanumeric symbols, dashes and underscores will suffice.
     * @param name name for the widget
     */
    setName(name: string | null): void

    // Overloads of setName

    /**
     * Sets the name of the `buildable` object.
     * @virtual 
     * @param name name to set
     */
    setName(name: string | null): void
    /**
     * Sets the name of the `buildable` object.
     * @virtual 
     * @param name name to set
     */
    setName(name: string | null): void

    // Class property signals of Wnck-3.0.Wnck.Pager

    connect(sigName: "notify::handle", callback: (...args: any[]) => void): number
    on(sigName: "notify::handle", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::handle", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::handle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::handle", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (...args: any[]) => void): number
    on(sigName: "notify::app-paintable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::app-paintable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::app-paintable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (...args: any[]) => void): number
    on(sigName: "notify::composite-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::composite-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::composite-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (...args: any[]) => void): number
    on(sigName: "notify::double-buffered", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::double-buffered", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::double-buffered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (...args: any[]) => void): number
    on(sigName: "notify::events", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::events", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (...args: any[]) => void): number
    on(sigName: "notify::expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): number
    on(sigName: "notify::focus-on-click", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::focus-on-click", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (...args: any[]) => void): number
    on(sigName: "notify::halign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::halign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-tooltip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-tooltip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (...args: any[]) => void): number
    on(sigName: "notify::height-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::height-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (...args: any[]) => void): number
    on(sigName: "notify::hexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::hexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-end", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-end", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-left", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-left", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-right", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-right", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-start", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-start", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (...args: any[]) => void): number
    on(sigName: "notify::no-show-all", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::no-show-all", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::no-show-all", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (...args: any[]) => void): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (...args: any[]) => void): number
    on(sigName: "notify::receives-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::receives-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-factor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-factor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (...args: any[]) => void): number
    on(sigName: "notify::sensitive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sensitive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (...args: any[]) => void): number
    on(sigName: "notify::style", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::style", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::style", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): number
    on(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): number
    on(sigName: "notify::tooltip-text", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-text", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (...args: any[]) => void): number
    on(sigName: "notify::valign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::valign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (...args: any[]) => void): number
    on(sigName: "notify::vexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::vexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (...args: any[]) => void): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (...args: any[]) => void): number
    on(sigName: "notify::width-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::width-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::width-request", ...args: any[]): void
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

    // Constructors of Wnck-3.0.Wnck.Pager

    constructor(config?: Pager.ConstructorProperties) 
    /**
     * Creates a new #WnckPager. The #WnckPager will show the #WnckWorkspace of the
     * #WnckScreen it is on.
     * @constructor 
     * @returns a newly created #WnckPager.
     */
    constructor() 
    /**
     * Creates a new #WnckPager. The #WnckPager will show the #WnckWorkspace of the
     * #WnckScreen it is on.
     * @constructor 
     * @returns a newly created #WnckPager.
     */
    static new(): Pager
    /**
     * Creates a new #WnckPager. The #WnckPager will show the #WnckWorkspace of the
     * #WnckScreen it is on.
     * @constructor 
     * @param handle a #WnckHandle
     * @returns a newly created #WnckPager.
     */
    static newWithHandle(handle: Handle): Pager
    _init(config?: Pager.ConstructorProperties): void
}

module Screen {

    // Signal callback interfaces

    /**
     * Signal callback interface for `active-window-changed`
     */
    interface ActiveWindowChangedSignalCallback {
        (previouslyActiveWindow: Window): void
    }

    /**
     * Signal callback interface for `active-workspace-changed`
     */
    interface ActiveWorkspaceChangedSignalCallback {
        (previouslyActiveSpace: Workspace): void
    }

    /**
     * Signal callback interface for `application-closed`
     */
    interface ApplicationClosedSignalCallback {
        (app: Application): void
    }

    /**
     * Signal callback interface for `application-opened`
     */
    interface ApplicationOpenedSignalCallback {
        (app: Application): void
    }

    /**
     * Signal callback interface for `background-changed`
     */
    interface BackgroundChangedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `class-group-closed`
     */
    interface ClassGroupClosedSignalCallback {
        (classGroup: ClassGroup): void
    }

    /**
     * Signal callback interface for `class-group-opened`
     */
    interface ClassGroupOpenedSignalCallback {
        (classGroup: ClassGroup): void
    }

    /**
     * Signal callback interface for `showing-desktop-changed`
     */
    interface ShowingDesktopChangedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `viewports-changed`
     */
    interface ViewportsChangedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `window-closed`
     */
    interface WindowClosedSignalCallback {
        (window: Window): void
    }

    /**
     * Signal callback interface for `window-manager-changed`
     */
    interface WindowManagerChangedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `window-opened`
     */
    interface WindowOpenedSignalCallback {
        (window: Window): void
    }

    /**
     * Signal callback interface for `window-stacking-changed`
     */
    interface WindowStackingChangedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `workspace-created`
     */
    interface WorkspaceCreatedSignalCallback {
        (space: Workspace): void
    }

    /**
     * Signal callback interface for `workspace-destroyed`
     */
    interface WorkspaceDestroyedSignalCallback {
        (space: Workspace): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Screen {

    // Own properties of Wnck-3.0.Wnck.Screen

    __gtype__: number

    // Own fields of Wnck-3.0.Wnck.Screen

    parentInstance: GObject.Object
    priv: ScreenPrivate

    // Owm methods of Wnck-3.0.Wnck.Screen

    /**
     * Calculates the layout of #WnckWorkspace, with additional information like
     * the row and column of the #WnckWorkspace with index `space_index`.
     * @param numWorkspaces the number of #WnckWorkspace on `screen,` or -1 to let wnck_screen_calc_workspace_layout() find this number.
     * @param spaceIndex the index of a #WnckWorkspace.
     * @param layout return location for the layout of #WnckWorkspace with additional information.
     */
    calcWorkspaceLayout(numWorkspaces: number, spaceIndex: number, layout: WorkspaceLayout): void
    /**
     * Asks the window manager to change the number of #WnckWorkspace on `screen`.
     * @param count the number of #WnckWorkspace to request.
     */
    changeWorkspaceCount(count: number): void
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
    forceUpdate(): void
    /**
     * Gets the active #WnckWindow on `screen`. May return %NULL sometimes, since
     * not all window managers guarantee that a window is always active.
     * @returns the active #WnckWindow on @screen, or %NULL. The returned #WnckWindow is owned by libwnck and must not be referenced or unreferenced.
     */
    getActiveWindow(): Window
    /**
     * Gets the active #WnckWorkspace on `screen`. May return %NULL sometimes,
     * if libwnck is in a weird state due to the asynchronous nature of the
     * interaction with the window manager.
     * @returns the active #WnckWorkspace on @screen, or %NULL. The returned #WnckWorkspace is owned by libwnck and must not be referenced or unreferenced.
     */
    getActiveWorkspace(): Workspace
    /**
     * Gets the X window ID of the background pixmap of `screen`.
     * @returns the X window ID of the background pixmap of @screen.
     */
    getBackgroundPixmap(): number
    /**
     * Gets the handle.
     * @returns a #WnckHandle, or %NULL.
     */
    getHandle(): Handle
    /**
     * Gets the height of `screen`.
     * @returns the height of @screen.
     */
    getHeight(): number
    /**
     * Gets the index of `screen` on the display to which it belongs. The first
     * #WnckScreen has an index of 0.
     * @returns the index of @space on @screen, or -1 on errors.
     */
    getNumber(): number
    /**
     * Gets the previously active #WnckWindow on `screen`. May return %NULL
     * sometimes, since not all window managers guarantee that a window is always
     * active.
     * @returns the previously active #WnckWindow on @screen, or %NULL. The returned #WnckWindow is owned by libwnck and must not be referenced or unreferenced.
     */
    getPreviouslyActiveWindow(): Window
    /**
     * Gets whether `screen` is in the "showing the desktop" mode. This mode is
     * changed when a #WnckScreen::showing-desktop-changed signal gets emitted.
     * @returns %TRUE if @window is fullscreen, %FALSE otherwise.
     */
    getShowingDesktop(): boolean
    /**
     * Gets the width of `screen`.
     * @returns the width of @screen.
     */
    getWidth(): number
    /**
     * Gets the name of the window manager.
     * @returns the name of the window manager, or %NULL if the window manager does not comply with the <ulink url="http://standards.freedesktop.org/wm-spec/wm-spec-latest.html">EWMH</ulink> specification.
     */
    getWindowManagerName(): string | null
    /**
     * Gets the list of #WnckWindow on `screen`. The list is not in a defined
     * order, but should be "stable" (windows should not be reordered in it).
     * However, the stability of the list is established by the window manager, so
     * don't blame libwnck if it breaks down.
     * @returns the list of #WnckWindow on @screen, or %NULL if there is no window on @screen. The list should not be modified nor freed, as it is owned by @screen.
     */
    getWindows(): Window[]
    /**
     * Gets the list of #WnckWindow on `screen` in bottom-to-top order.
     * @returns the list of #WnckWindow in stacking order on @screen, or %NULL if there is no window on @screen. The list should not be modified nor freed, as it is owned by @screen.
     */
    getWindowsStacked(): Window[]
    /**
     * Gets the #WnckWorkspace numbered `workspace` on `screen`.
     * @param workspace a workspace index, starting from 0.
     * @returns the #WnckWorkspace numbered @workspace on @screen, or %NULL if no such workspace exists. The returned #WnckWorkspace is owned by libwnck and must not be referenced or unreferenced.
     */
    getWorkspace(workspace: number): Workspace
    /**
     * Gets the number of #WnckWorkspace on `screen`.
     * @returns the number of #WnckWorkspace on @screen.
     */
    getWorkspaceCount(): number
    /**
     * Gets the list of #WnckWorkspace on `screen`. The list is ordered: the
     * first element in the list is the first #WnckWorkspace, etc..
     * @returns the list of #WnckWorkspace on @screen. The list should not be modified nor freed, as it is owned by @screen.
     */
    getWorkspaces(): Workspace[]
    /**
     * Asks the window manager to move the viewport of the current #WnckWorkspace
     * on `screen`.
     * @param x X offset in pixels of viewport.
     * @param y Y offset in pixels of viewport.
     */
    moveViewport(x: number, y: number): void
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
    netWmSupports(atom: string | null): boolean
    /**
     * Releases the ownership of the layout of #WnckWorkspace on `screen`.
     * `current_token` is used to verify that the caller is the owner of the layout.
     * If the verification fails, nothing happens.
     * @param currentToken the token obtained through wnck_screen_try_set_workspace_layout().
     */
    releaseWorkspaceLayout(currentToken: number): void
    /**
     * Asks the window manager to set the "showing the desktop" mode on `screen`
     * according to `show`.
     * @param show whether to activate the "showing the desktop" mode on `screen`.
     */
    toggleShowingDesktop(show: boolean): void
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
     * @param currentToken a token. Use 0 if you do not called wnck_screen_try_set_workspace_layout() before, or if you did not keep the old token.
     * @param rows the number of rows to use for the #WnckWorkspace layout.
     * @param columns the number of columns to use for the #WnckWorkspace layout.
     * @returns a token to use for future calls to wnck_screen_try_set_workspace_layout() and to wnck_screen_release_workspace_layout(), or 0 if the layout could not be set.
     */
    trySetWorkspaceLayout(currentToken: number, rows: number, columns: number): number

    // Own virtual methods of Wnck-3.0.Wnck.Screen

    activeWindowChanged(previousWindow: Window): void
    activeWorkspaceChanged(previousWorkspace: Workspace): void
    applicationClosed(app: Application): void
    applicationOpened(app: Application): void
    backgroundChanged(): void
    classGroupClosed(classGroup: ClassGroup): void
    classGroupOpened(classGroup: ClassGroup): void
    showingDesktopChanged(): void
    viewportsChanged(): void
    windowClosed(window: Window): void
    windowManagerChanged(): void
    windowOpened(window: Window): void
    windowStackingChanged(): void
    workspaceCreated(space: Workspace): void
    workspaceDestroyed(space: Workspace): void

    // Own signals of Wnck-3.0.Wnck.Screen

    connect(sigName: "active-window-changed", callback: Screen.ActiveWindowChangedSignalCallback): number
    on(sigName: "active-window-changed", callback: Screen.ActiveWindowChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "active-window-changed", callback: Screen.ActiveWindowChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "active-window-changed", callback: Screen.ActiveWindowChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "active-window-changed", ...args: any[]): void
    connect(sigName: "active-workspace-changed", callback: Screen.ActiveWorkspaceChangedSignalCallback): number
    on(sigName: "active-workspace-changed", callback: Screen.ActiveWorkspaceChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "active-workspace-changed", callback: Screen.ActiveWorkspaceChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "active-workspace-changed", callback: Screen.ActiveWorkspaceChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "active-workspace-changed", ...args: any[]): void
    connect(sigName: "application-closed", callback: Screen.ApplicationClosedSignalCallback): number
    on(sigName: "application-closed", callback: Screen.ApplicationClosedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "application-closed", callback: Screen.ApplicationClosedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "application-closed", callback: Screen.ApplicationClosedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "application-closed", ...args: any[]): void
    connect(sigName: "application-opened", callback: Screen.ApplicationOpenedSignalCallback): number
    on(sigName: "application-opened", callback: Screen.ApplicationOpenedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "application-opened", callback: Screen.ApplicationOpenedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "application-opened", callback: Screen.ApplicationOpenedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "application-opened", ...args: any[]): void
    connect(sigName: "background-changed", callback: Screen.BackgroundChangedSignalCallback): number
    on(sigName: "background-changed", callback: Screen.BackgroundChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "background-changed", callback: Screen.BackgroundChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "background-changed", callback: Screen.BackgroundChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "background-changed", ...args: any[]): void
    connect(sigName: "class-group-closed", callback: Screen.ClassGroupClosedSignalCallback): number
    on(sigName: "class-group-closed", callback: Screen.ClassGroupClosedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "class-group-closed", callback: Screen.ClassGroupClosedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "class-group-closed", callback: Screen.ClassGroupClosedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "class-group-closed", ...args: any[]): void
    connect(sigName: "class-group-opened", callback: Screen.ClassGroupOpenedSignalCallback): number
    on(sigName: "class-group-opened", callback: Screen.ClassGroupOpenedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "class-group-opened", callback: Screen.ClassGroupOpenedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "class-group-opened", callback: Screen.ClassGroupOpenedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "class-group-opened", ...args: any[]): void
    connect(sigName: "showing-desktop-changed", callback: Screen.ShowingDesktopChangedSignalCallback): number
    on(sigName: "showing-desktop-changed", callback: Screen.ShowingDesktopChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "showing-desktop-changed", callback: Screen.ShowingDesktopChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "showing-desktop-changed", callback: Screen.ShowingDesktopChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "showing-desktop-changed", ...args: any[]): void
    connect(sigName: "viewports-changed", callback: Screen.ViewportsChangedSignalCallback): number
    on(sigName: "viewports-changed", callback: Screen.ViewportsChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "viewports-changed", callback: Screen.ViewportsChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "viewports-changed", callback: Screen.ViewportsChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "viewports-changed", ...args: any[]): void
    connect(sigName: "window-closed", callback: Screen.WindowClosedSignalCallback): number
    on(sigName: "window-closed", callback: Screen.WindowClosedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "window-closed", callback: Screen.WindowClosedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "window-closed", callback: Screen.WindowClosedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "window-closed", ...args: any[]): void
    connect(sigName: "window-manager-changed", callback: Screen.WindowManagerChangedSignalCallback): number
    on(sigName: "window-manager-changed", callback: Screen.WindowManagerChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "window-manager-changed", callback: Screen.WindowManagerChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "window-manager-changed", callback: Screen.WindowManagerChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "window-manager-changed", ...args: any[]): void
    connect(sigName: "window-opened", callback: Screen.WindowOpenedSignalCallback): number
    on(sigName: "window-opened", callback: Screen.WindowOpenedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "window-opened", callback: Screen.WindowOpenedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "window-opened", callback: Screen.WindowOpenedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "window-opened", ...args: any[]): void
    connect(sigName: "window-stacking-changed", callback: Screen.WindowStackingChangedSignalCallback): number
    on(sigName: "window-stacking-changed", callback: Screen.WindowStackingChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "window-stacking-changed", callback: Screen.WindowStackingChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "window-stacking-changed", callback: Screen.WindowStackingChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "window-stacking-changed", ...args: any[]): void
    connect(sigName: "workspace-created", callback: Screen.WorkspaceCreatedSignalCallback): number
    on(sigName: "workspace-created", callback: Screen.WorkspaceCreatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "workspace-created", callback: Screen.WorkspaceCreatedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "workspace-created", callback: Screen.WorkspaceCreatedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "workspace-created", ...args: any[]): void
    connect(sigName: "workspace-destroyed", callback: Screen.WorkspaceDestroyedSignalCallback): number
    on(sigName: "workspace-destroyed", callback: Screen.WorkspaceDestroyedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "workspace-destroyed", callback: Screen.WorkspaceDestroyedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "workspace-destroyed", callback: Screen.WorkspaceDestroyedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "workspace-destroyed", ...args: any[]): void

    // Class property signals of Wnck-3.0.Wnck.Screen

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

    // Constructors of Wnck-3.0.Wnck.Screen

    constructor(config?: Screen.ConstructorProperties) 
    _init(config?: Screen.ConstructorProperties): void
    /**
     * Frees the content of `layout`. This does not free `layout` itself, so you
     * might want to free `layout` yourself after calling this.
     * @param layout a #WnckWorkspaceLayout.
     */
    static freeWorkspaceLayout(layout: WorkspaceLayout): void
    /**
     * Gets the #WnckScreen for a given screen on the default display.
     * @param index screen number, starting from 0.
     * @returns the #WnckScreen for screen @index, or %NULL if no such screen exists. The returned #WnckScreen is owned by libwnck and must not be referenced or unreferenced.
     */
    static get(index: number): Screen
    /**
     * Gets the default #WnckScreen on the default display.
     * @returns the default #WnckScreen. The returned #WnckScreen is owned by libwnck and must not be referenced or unreferenced. This can return %NULL if not on X11.
     */
    static getDefault(): Screen | null
    /**
     * Gets the #WnckScreen for the root window at `root_window_id,` or
     * %NULL if no #WnckScreen exists for this root window.
     * 
     * This function does not work if wnck_screen_get() was not called for the
     * sought #WnckScreen before, and returns %NULL.
     * @param rootWindowId an X window ID.
     * @returns the #WnckScreen for the root window at @root_window_id, or %NULL. The returned #WnckScreen is owned by libwnck and must not be referenced or unreferenced.
     */
    static getForRoot(rootWindowId: number): Screen
}

module Selector {

    // Constructor properties interface

    interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.MenuBar.ConstructorProperties {

        // Own constructor properties of Wnck-3.0.Wnck.Selector

        handle?: Handle | null
    }

}

interface Selector extends Atk.ImplementorIface, Gtk.Buildable {

    // Own properties of Wnck-3.0.Wnck.Selector

    readonly handle: Handle
    __gtype__: number

    // Own fields of Wnck-3.0.Wnck.Selector

    parentInstance: any
    priv: SelectorPrivate

    // Conflicting methods

    /**
     * Gets the name of the `buildable` object.
     * 
     * #GtkBuilder sets the name based on the
     * [GtkBuilder UI definition][BUILDER-UI]
     * used to construct the `buildable`.
     * @virtual 
     * @returns the name set with gtk_buildable_set_name()
     */
    getName(): string | null
    /**
     * Retrieves the name of a widget. See gtk_widget_set_name() for the
     * significance of widget names.
     * @returns name of the widget. This string is owned by GTK+ and should not be modified or freed
     */
    getName(): string | null

    // Overloads of getName

    /**
     * Gets the name of the `buildable` object.
     * 
     * #GtkBuilder sets the name based on the
     * [GtkBuilder UI definition][BUILDER-UI]
     * used to construct the `buildable`.
     * @virtual 
     * @returns the name set with gtk_buildable_set_name()
     */
    getName(): string | null
    /**
     * Sets the name of the `buildable` object.
     * @virtual 
     * @param name name to set
     */
    setName(name: string | null): void
    /**
     * Widgets can be named, which allows you to refer to them from a
     * CSS file. You can apply a style to widgets with a particular name
     * in the CSS file. See the documentation for the CSS syntax (on the
     * same page as the docs for #GtkStyleContext).
     * 
     * Note that the CSS syntax has certain special characters to delimit
     * and represent elements in a selector (period, #, >, *...), so using
     * these will make your widget impossible to match by name. Any combination
     * of alphanumeric symbols, dashes and underscores will suffice.
     * @param name name for the widget
     */
    setName(name: string | null): void

    // Overloads of setName

    /**
     * Sets the name of the `buildable` object.
     * @virtual 
     * @param name name to set
     */
    setName(name: string | null): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param childProperty the name of a child property installed on     the class of `container`
     */
    childNotify(child: Gtk.Widget, childProperty: string | null): void

    // Overloads of childNotify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @virtual 
     * @param childProperty the name of a child property installed on the                  class of `widget’`s parent
     */
    childNotify(childProperty: GObject.ParamSpec): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @virtual 
     * @param childProperty the name of a child property installed on the                  class of `widget’`s parent
     */
    childNotify(childProperty: GObject.ParamSpec): void

    // Class property signals of Wnck-3.0.Wnck.Selector

    connect(sigName: "notify::handle", callback: (...args: any[]) => void): number
    on(sigName: "notify::handle", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::handle", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::handle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::handle", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::child-pack-direction", callback: (...args: any[]) => void): number
    on(sigName: "notify::child-pack-direction", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::child-pack-direction", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::child-pack-direction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::child-pack-direction", ...args: any[]): void
    connect(sigName: "notify::pack-direction", callback: (...args: any[]) => void): number
    on(sigName: "notify::pack-direction", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::pack-direction", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::pack-direction", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::pack-direction", ...args: any[]): void
    connect(sigName: "notify::take-focus", callback: (...args: any[]) => void): number
    on(sigName: "notify::take-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::take-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::take-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::take-focus", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::border-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::border-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::border-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (...args: any[]) => void): number
    on(sigName: "notify::child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (...args: any[]) => void): number
    on(sigName: "notify::resize-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::resize-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::resize-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (...args: any[]) => void): number
    on(sigName: "notify::app-paintable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::app-paintable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::app-paintable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (...args: any[]) => void): number
    on(sigName: "notify::composite-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::composite-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::composite-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (...args: any[]) => void): number
    on(sigName: "notify::double-buffered", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::double-buffered", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::double-buffered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (...args: any[]) => void): number
    on(sigName: "notify::events", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::events", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (...args: any[]) => void): number
    on(sigName: "notify::expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): number
    on(sigName: "notify::focus-on-click", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::focus-on-click", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (...args: any[]) => void): number
    on(sigName: "notify::halign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::halign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-tooltip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-tooltip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (...args: any[]) => void): number
    on(sigName: "notify::height-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::height-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (...args: any[]) => void): number
    on(sigName: "notify::hexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::hexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-end", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-end", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-left", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-left", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-right", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-right", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-start", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-start", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (...args: any[]) => void): number
    on(sigName: "notify::no-show-all", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::no-show-all", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::no-show-all", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (...args: any[]) => void): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (...args: any[]) => void): number
    on(sigName: "notify::receives-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::receives-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-factor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-factor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (...args: any[]) => void): number
    on(sigName: "notify::sensitive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sensitive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (...args: any[]) => void): number
    on(sigName: "notify::style", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::style", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::style", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): number
    on(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): number
    on(sigName: "notify::tooltip-text", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-text", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (...args: any[]) => void): number
    on(sigName: "notify::valign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::valign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (...args: any[]) => void): number
    on(sigName: "notify::vexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::vexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (...args: any[]) => void): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (...args: any[]) => void): number
    on(sigName: "notify::width-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::width-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::width-request", ...args: any[]): void
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

    // Constructors of Wnck-3.0.Wnck.Selector

    constructor(config?: Selector.ConstructorProperties) 
    /**
     * Creates a new #WnckSelector. The #WnckSelector will list #WnckWindow of the
     * #WnckScreen it is on.
     * @constructor 
     * @returns a newly created #WnckSelector.
     */
    constructor() 
    /**
     * Creates a new #WnckSelector. The #WnckSelector will list #WnckWindow of the
     * #WnckScreen it is on.
     * @constructor 
     * @returns a newly created #WnckSelector.
     */
    static new(): Selector
    /**
     * Creates a new #WnckSelector. The #WnckSelector will list #WnckWindow of the
     * #WnckScreen it is on.
     * @constructor 
     * @param handle a #WnckHandle
     * @returns a newly created #WnckSelector.
     */
    static newWithHandle(handle: Handle): Selector
    _init(config?: Selector.ConstructorProperties): void
}

module Tasklist {

    // Signal callback interfaces

    /**
     * Signal callback interface for `task-enter-notify`
     */
    interface TaskEnterNotifySignalCallback {
        (windows: any | null): void
    }

    /**
     * Signal callback interface for `task-leave-notify`
     */
    interface TaskLeaveNotifySignalCallback {
        (windows: any | null): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Container.ConstructorProperties {

        // Own constructor properties of Wnck-3.0.Wnck.Tasklist

        handle?: Handle | null
        tooltipsEnabled?: boolean | null
    }

}

interface Tasklist extends Atk.ImplementorIface, Gtk.Buildable {

    // Own properties of Wnck-3.0.Wnck.Tasklist

    readonly handle: Handle
    tooltipsEnabled: boolean
    __gtype__: number

    // Own fields of Wnck-3.0.Wnck.Tasklist

    parentInstance: any
    priv: TasklistPrivate

    // Owm methods of Wnck-3.0.Wnck.Tasklist

    /**
     * Gets the scroll behavior of the `tasklist`.
     */
    getScrollEnabled(): boolean
    /**
     * Since a #WnckTasklist does not have a fixed size (#WnckWindow can be grouped
     * when needed, for example), the standard size request mechanism in GTK+ is
     * not enough to announce what sizes can be used by `tasklist`. The size hints
     * mechanism is a solution for this. See panel_applet_set_size_hints() for more
     * information.
     * @param nElements return location for the number of elements in the array returned by this function. This number should always be pair.
     * @returns a list of size hints that can be used to allocate an appropriate size for @tasklist.
     */
    getSizeHintList(nElements: number): number
    /**
     * Returns whether tooltips are enabled on the `tasklist`.
     */
    getTooltipsEnabled(): boolean
    /**
     * Sets the relief type of the buttons in `tasklist` to `relief`. The main use of
     * this function is proper integration of #WnckTasklist in panels with
     * non-system backgrounds.
     * @param relief a relief type.
     */
    setButtonRelief(relief: Gtk.ReliefStyle): void
    /**
     * Sets the grouping policy for `tasklist` to `grouping`.
     * @param grouping a grouping policy.
     */
    setGrouping(grouping: TasklistGroupingType): void
    /**
     * Sets the maximum size of buttons in `tasklist` before `tasklist` tries to
     * group #WnckWindow in the same #WnckApplication in only one button. This
     * limit is valid only when the grouping policy of `tasklist` is
     * %WNCK_TASKLIST_AUTO_GROUP.
     * @param limit a size in pixels.
     */
    setGroupingLimit(limit: number): void
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
     * @param includeAllWorkspaces whether to display #WnckWindow from all #WnckWorkspace in `tasklist`.
     */
    setIncludeAllWorkspaces(includeAllWorkspaces: boolean): void
    /**
     * Sets `tasklist` to close windows with mouse middle click on button,
     * according to `middle_click_close`.
     * @param middleClickClose whether to close windows with middle click on button.
     */
    setMiddleClickClose(middleClickClose: boolean): void
    /**
     * Set the orientation of the `tasklist` to match `orient`.
     * This function can be used to integrate a #WnckTasklist in vertical panels.
     * @param orient a GtkOrientation.
     */
    setOrientation(orient: Gtk.Orientation): void
    /**
     * Sets the scroll behavior of the `tasklist`. When set to %TRUE, a scroll
     * event over the tasklist will change the current window accordingly.
     * @param scrollEnabled a boolean.
     */
    setScrollEnabled(scrollEnabled: boolean): void
    /**
     * Sets `tasklist` to activate or not the #WnckWorkspace a #WnckWindow is on
     * when unminimizing it, according to `switch_workspace_on_unminimize`.
     * 
     * FIXME: does it still work?
     * @param switchWorkspaceOnUnminimize whether to activate the #WnckWorkspace a #WnckWindow is on when unminimizing it.
     */
    setSwitchWorkspaceOnUnminimize(switchWorkspaceOnUnminimize: boolean): void
    /**
     * Sets whether tooltips are enabled on the `tasklist`.
     * @param tooltipsEnabled a boolean.
     */
    setTooltipsEnabled(tooltipsEnabled: boolean): void

    // Conflicting methods

    /**
     * Gets the name of the `buildable` object.
     * 
     * #GtkBuilder sets the name based on the
     * [GtkBuilder UI definition][BUILDER-UI]
     * used to construct the `buildable`.
     * @virtual 
     * @returns the name set with gtk_buildable_set_name()
     */
    getName(): string | null
    /**
     * Retrieves the name of a widget. See gtk_widget_set_name() for the
     * significance of widget names.
     * @returns name of the widget. This string is owned by GTK+ and should not be modified or freed
     */
    getName(): string | null

    // Overloads of getName

    /**
     * Gets the name of the `buildable` object.
     * 
     * #GtkBuilder sets the name based on the
     * [GtkBuilder UI definition][BUILDER-UI]
     * used to construct the `buildable`.
     * @virtual 
     * @returns the name set with gtk_buildable_set_name()
     */
    getName(): string | null
    /**
     * Sets the name of the `buildable` object.
     * @virtual 
     * @param name name to set
     */
    setName(name: string | null): void
    /**
     * Widgets can be named, which allows you to refer to them from a
     * CSS file. You can apply a style to widgets with a particular name
     * in the CSS file. See the documentation for the CSS syntax (on the
     * same page as the docs for #GtkStyleContext).
     * 
     * Note that the CSS syntax has certain special characters to delimit
     * and represent elements in a selector (period, #, >, *...), so using
     * these will make your widget impossible to match by name. Any combination
     * of alphanumeric symbols, dashes and underscores will suffice.
     * @param name name for the widget
     */
    setName(name: string | null): void

    // Overloads of setName

    /**
     * Sets the name of the `buildable` object.
     * @virtual 
     * @param name name to set
     */
    setName(name: string | null): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param childProperty the name of a child property installed on     the class of `container`
     */
    childNotify(child: Gtk.Widget, childProperty: string | null): void

    // Overloads of childNotify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @virtual 
     * @param childProperty the name of a child property installed on the                  class of `widget’`s parent
     */
    childNotify(childProperty: GObject.ParamSpec): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @virtual 
     * @param childProperty the name of a child property installed on the                  class of `widget’`s parent
     */
    childNotify(childProperty: GObject.ParamSpec): void

    // Own signals of Wnck-3.0.Wnck.Tasklist

    connect(sigName: "task-enter-notify", callback: Tasklist.TaskEnterNotifySignalCallback): number
    on(sigName: "task-enter-notify", callback: Tasklist.TaskEnterNotifySignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "task-enter-notify", callback: Tasklist.TaskEnterNotifySignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "task-enter-notify", callback: Tasklist.TaskEnterNotifySignalCallback): NodeJS.EventEmitter
    emit(sigName: "task-enter-notify", ...args: any[]): void
    connect(sigName: "task-leave-notify", callback: Tasklist.TaskLeaveNotifySignalCallback): number
    on(sigName: "task-leave-notify", callback: Tasklist.TaskLeaveNotifySignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "task-leave-notify", callback: Tasklist.TaskLeaveNotifySignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "task-leave-notify", callback: Tasklist.TaskLeaveNotifySignalCallback): NodeJS.EventEmitter
    emit(sigName: "task-leave-notify", ...args: any[]): void

    // Class property signals of Wnck-3.0.Wnck.Tasklist

    connect(sigName: "notify::handle", callback: (...args: any[]) => void): number
    on(sigName: "notify::handle", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::handle", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::handle", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::handle", ...args: any[]): void
    connect(sigName: "notify::tooltips-enabled", callback: (...args: any[]) => void): number
    on(sigName: "notify::tooltips-enabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tooltips-enabled", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tooltips-enabled", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tooltips-enabled", ...args: any[]): void
    connect(sigName: "notify::__gtype__", callback: (...args: any[]) => void): number
    on(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::__gtype__", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::__gtype__", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::__gtype__", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: (...args: any[]) => void): number
    on(sigName: "notify::border-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::border-width", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::border-width", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: (...args: any[]) => void): number
    on(sigName: "notify::child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: (...args: any[]) => void): number
    on(sigName: "notify::resize-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::resize-mode", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::resize-mode", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: (...args: any[]) => void): number
    on(sigName: "notify::app-paintable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::app-paintable", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::app-paintable", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: (...args: any[]) => void): number
    on(sigName: "notify::can-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::can-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::can-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: (...args: any[]) => void): number
    on(sigName: "notify::composite-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::composite-child", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::composite-child", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: (...args: any[]) => void): number
    on(sigName: "notify::double-buffered", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::double-buffered", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::double-buffered", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: (...args: any[]) => void): number
    on(sigName: "notify::events", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::events", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::events", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: (...args: any[]) => void): number
    on(sigName: "notify::expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::expand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::expand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): number
    on(sigName: "notify::focus-on-click", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::focus-on-click", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::focus-on-click", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: (...args: any[]) => void): number
    on(sigName: "notify::halign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::halign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::halign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): number
    on(sigName: "notify::has-tooltip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::has-tooltip", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::has-tooltip", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: (...args: any[]) => void): number
    on(sigName: "notify::height-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::height-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::height-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: (...args: any[]) => void): number
    on(sigName: "notify::hexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::hexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::hexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::hexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: (...args: any[]) => void): number
    on(sigName: "notify::is-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::is-focus", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::is-focus", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-bottom", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-bottom", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-end", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-end", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-end", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-left", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-left", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-left", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-right", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-right", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-right", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-start", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-start", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-start", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: (...args: any[]) => void): number
    on(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::margin-top", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::margin-top", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: (...args: any[]) => void): number
    on(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::name", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::name", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: (...args: any[]) => void): number
    on(sigName: "notify::no-show-all", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::no-show-all", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::no-show-all", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: (...args: any[]) => void): number
    on(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::opacity", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::opacity", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: (...args: any[]) => void): number
    on(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::parent", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::parent", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: (...args: any[]) => void): number
    on(sigName: "notify::receives-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::receives-default", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::receives-default", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: (...args: any[]) => void): number
    on(sigName: "notify::scale-factor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::scale-factor", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::scale-factor", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: (...args: any[]) => void): number
    on(sigName: "notify::sensitive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::sensitive", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::sensitive", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: (...args: any[]) => void): number
    on(sigName: "notify::style", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::style", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::style", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): number
    on(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-markup", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): number
    on(sigName: "notify::tooltip-text", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::tooltip-text", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::tooltip-text", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: (...args: any[]) => void): number
    on(sigName: "notify::valign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::valign", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::valign", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: (...args: any[]) => void): number
    on(sigName: "notify::vexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vexpand", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vexpand", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): number
    on(sigName: "notify::vexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::vexpand-set", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::vexpand-set", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: (...args: any[]) => void): number
    on(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::visible", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::visible", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: (...args: any[]) => void): number
    on(sigName: "notify::width-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    once(sigName: "notify::width-request", callback: (...args: any[]) => void, after?: boolean): NodeJS.EventEmitter
    off(sigName: "notify::width-request", callback: (...args: any[]) => void): NodeJS.EventEmitter
    emit(sigName: "notify::width-request", ...args: any[]): void
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

    // Constructors of Wnck-3.0.Wnck.Tasklist

    constructor(config?: Tasklist.ConstructorProperties) 
    /**
     * Creates a new #WnckTasklist. The #WnckTasklist will list #WnckWindow of the
     * #WnckScreen it is on.
     * @constructor 
     * @returns a newly created #WnckTasklist.
     */
    constructor() 
    /**
     * Creates a new #WnckTasklist. The #WnckTasklist will list #WnckWindow of the
     * #WnckScreen it is on.
     * @constructor 
     * @returns a newly created #WnckTasklist.
     */
    static new(): Tasklist
    /**
     * Creates a new #WnckTasklist. The #WnckTasklist will list #WnckWindow of the
     * #WnckScreen it is on.
     * @constructor 
     * @param handle a #WnckHandle
     * @returns a newly created #WnckTasklist.
     */
    static newWithHandle(handle: Handle): Tasklist
    _init(config?: Tasklist.ConstructorProperties): void
}

module Window {

    // Signal callback interfaces

    /**
     * Signal callback interface for `actions-changed`
     */
    interface ActionsChangedSignalCallback {
        (changedMask: WindowActions, newState: WindowActions): void
    }

    /**
     * Signal callback interface for `class-changed`
     */
    interface ClassChangedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `geometry-changed`
     */
    interface GeometryChangedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `icon-changed`
     */
    interface IconChangedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `name-changed`
     */
    interface NameChangedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `role-changed`
     */
    interface RoleChangedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `state-changed`
     */
    interface StateChangedSignalCallback {
        (changedMask: WindowState, newState: WindowState): void
    }

    /**
     * Signal callback interface for `type-changed`
     */
    interface TypeChangedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `workspace-changed`
     */
    interface WorkspaceChangedSignalCallback {
        (): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Window {

    // Own properties of Wnck-3.0.Wnck.Window

    __gtype__: number

    // Own fields of Wnck-3.0.Wnck.Window

    parentInstance: GObject.Object
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
    activateTransient(timestamp: number): void
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
     * @returns bitmask of actions that can be done for @window.
     */
    getActions(): WindowActions
    /**
     * Gets the #WnckApplication to which `window` belongs.
     * @returns the #WnckApplication to which @window belongs. The returned #WnckApplication is owned by libwnck and must not be referenced or unreferenced.
     */
    getApplication(): Application
    /**
     * Gets the #WnckClassGroup to which `window` belongs.
     * @returns the #WnckClassGroup to which @window belongs. The returned #WnckClassGroup is owned by libwnck and must not be referenced or unreferenced.
     */
    getClassGroup(): ClassGroup
    /**
     * Gets the class group name from the <ulink
     * url="http://tronche.com/gui/x/icccm/sec-4.html&num;WM_CLASS">WM_CLASS Property</ulink>
     * for `window`.
     * 
     * The class group name is also the identifier name of the #WnckClassGroup to
     * which `window` belongs.
     * @returns the class group name for @window, or %NULL if @window belongs to no class group.
     */
    getClassGroupName(): string | null
    /**
     * Gets the class instance name from the <ulink
     * url="http://tronche.com/gui/x/icccm/sec-4.html&num;WM_CLASS">WM_CLASS Property</ulink>
     * for `window`.
     * 
     * The class instance name allows to differentiate windows belonging to the
     * same class group, so that they can use different resources.
     * @returns the class instance name for @window, or %NULL if @window has no class instance.
     */
    getClassInstanceName(): string | null
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
    getClientWindowGeometry(): [ /* xp */ number, /* yp */ number, /* widthp */ number, /* heightp */ number ]
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
    getGeometry(): [ /* xp */ number, /* yp */ number, /* widthp */ number, /* heightp */ number ]
    /**
     * Gets the group leader of the group of windows to which `window` belongs.
     * @returns the group leader of the group of windows to which @window belongs, or the X window ID of @window if @window does not belong to any group.
     */
    getGroupLeader(): number
    /**
     * Gets the icon to be used for `window`. If no icon was found, a fallback
     * icon is used. wnck_window_get_icon_is_fallback() can be used to tell if the
     * icon is the fallback icon.
     * @returns the icon for @window. The caller should reference the returned <classname>GdkPixbuf</classname> if it needs to keep the icon around.
     */
    getIcon(): GdkPixbuf.Pixbuf
    /**
     * Gets whether a default fallback icon is used for `window` (because none
     * was set on `window)`.
     * @returns %TRUE if the icon for @window is a fallback, %FALSE otherwise.
     */
    getIconIsFallback(): boolean
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
    getIconName(): string | null
    /**
     * Gets the mini-icon to be used for `window`. If no mini-icon was found, a
     * fallback mini-icon is used. wnck_window_get_icon_is_fallback() can be used
     * to tell if the mini-icon is the fallback mini-icon.
     * @returns the mini-icon for @window. The caller should reference the returned <classname>GdkPixbuf</classname> if it needs to keep the icon around.
     */
    getMiniIcon(): GdkPixbuf.Pixbuf
    /**
     * Gets the name of `window,` as it should be displayed in a pager
     * or tasklist. Always returns some value, even if `window` has no name
     * set; use wnck_window_has_name() if you need to know whether the returned
     * name is "real" or not.
     * 
     * For icons titles, use wnck_window_get_icon_name() instead.
     * @returns the name of @window, or a fallback name if no name is available.
     */
    getName(): string | null
    /**
     * Gets the process ID of `window`.
     * @returns the process ID of @window, or 0 if none is available.
     */
    getPid(): number
    /**
     * Gets the role for `window`.
     * The role uniquely identifies a window among all windows that have the same
     * client leader window.
     * @returns role for @window, or %NULL if @window has no role.
     */
    getRole(): string | null
    /**
     * Gets the #WnckScreen `window` is on.
     * @returns the #WnckScreen @window is on. The returned #WnckScreen is owned by libwnck and must not be referenced or unreferenced.
     */
    getScreen(): Screen
    /**
     * Gets the session ID for `window` in Latin-1 encoding.
     * NOTE: this is invalid UTF-8. You can't display this
     * string in a GTK+ widget without converting to UTF-8.
     * See wnck_window_get_session_id_utf8().
     * @returns the session ID for @window in Latin-1, or %NULL if @window has no session ID.
     */
    getSessionId(): string | null
    /**
     * Gets the session ID for `window` in UTF-8 encoding.
     * The session ID should be in Latin-1 encoding, so the conversion should work,
     * but a broken client could set a session ID that might not be convertable to
     * UTF-8.
     * @returns the session ID for @window in UTF-8, or %NULL if @window has no session ID.
     */
    getSessionIdUtf8(): string | null
    /**
     * Gets the sort order of `window,` used for ordering of `window` in
     * #WnckSelector and #WnckTasklist. The sort order is an internal state in
     * libwnck. The initial value is defined when the window is created.
     * @returns the sort order of @window, or G_MAXINT if none is available.
     */
    getSortOrder(): number
    /**
     * Gets the state of `window`.
     * @returns bitmask of active states for @window.
     */
    getState(): WindowState
    /**
     * Gets the #WnckWindow for which `window` is transient.
     * @returns the #WnckWindow for which @window is transient, or %NULL if @window is not transient for any #WnckWindow. The returned #WnckWindow is owned by libwnck and must not be referenced or unreferenced.
     */
    getTransient(): Window
    /**
     * Gets the semantic type of `window`.
     * @returns the semantic type of @window.
     */
    getWindowType(): WindowType
    /**
     * Gets the current workspace `window` is on. If the window is pinned (on all
     * workspaces), or not on any workspaces, %NULL may be returned.
     * @returns the single current workspace @window is on, or %NULL. The returned #WnckWorkspace is owned by libwnck and must not be referenced or unreferenced.
     */
    getWorkspace(): Workspace
    /**
     * Gets the X window ID of `window`.
     * @returns the X window ID of @window.
     */
    getXid(): number
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
    hasIconName(): boolean
    /**
     * Checks whether or not `window` has a name. wnck_window_get_name()
     * will always return some value, even if `window` has no name set;
     * wnck_window_has_name() can be used to tell if that name is
     * real or not.
     * 
     * For icons titles, use wnck_window_has_icon_name() instead.
     * @returns %TRUE if wnck_window_get_name() returns @window<!-- -->'s name, %FALSE if it returns a fallback name.
     */
    hasName(): boolean
    /**
     * Gets whether `window` is above other windows. This state may change
     * anytime a #WnckWindow::state-changed signal gets emitted.
     * 
     * See wnck_window_make_above() for more details on this state.
     * @returns %TRUE if @window is above other windows, %FALSE otherwise.
     */
    isAbove(): boolean
    /**
     * Gets whether `window` is the active window on its #WnckScreen.
     * @returns %TRUE if @window is the active window on its #WnckScreen, %FALSE otherwise.
     */
    isActive(): boolean
    /**
     * Gets whether `window` is below other windows. This state may change
     * anytime a #WnckWindow::state-changed signal gets emitted.
     * 
     * See wnck_window_make_below() for more details on this state.
     * @returns %TRUE if @window is below other windows, %FALSE otherwise.
     */
    isBelow(): boolean
    /**
     * Gets whether `window` is fullscreen. Fullscreen state may change
     * anytime a #WnckWindow::state-changed signal gets emitted.
     * @returns %TRUE if @window is fullscreen, %FALSE otherwise.
     */
    isFullscreen(): boolean
    /**
     * Gets %TRUE if `window` appears in the current viewport of `workspace`.
     * @param workspace a #WnckWorkspace.
     * @returns %TRUE if @window appears in current viewport of @workspace, %FALSE otherwise.
     */
    isInViewport(workspace: Workspace): boolean
    /**
     * Gets whether `window` is maximized. Maximization state may change
     * anytime a #WnckWindow::state-changed signal gets emitted.
     * 
     * As for GDK, "maximized" means both vertically and horizontally. If `window`
     * is maximized in only one direction, then `window` is not considered
     * maximized.
     * @returns %TRUE if @window is maximized in both directions, %FALSE otherwise.
     */
    isMaximized(): boolean
    /**
     * Gets whether `window` is maximized horizontally. Horizontal maximization
     * state may change anytime a #WnckWindow::state-changed signal gets emitted.
     * @returns %TRUE if @window is maximized horizontally, %FALSE otherwise.
     */
    isMaximizedHorizontally(): boolean
    /**
     * Gets whether `window` is maximized vertically. vertiVal maximization
     * state may change anytime a #WnckWindow::state-changed signal gets emitted.
     * @returns %TRUE if @window is maximized vertically, %FALSE otherwise.
     */
    isMaximizedVertically(): boolean
    /**
     * Gets whether `window` is minimized. Minimization state may change anytime
     * a #WnckWindow::state-changed signal gets emitted.
     * @returns %TRUE if @window is minimized, %FALSE otherwise.
     */
    isMinimized(): boolean
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
    isMostRecentlyActivated(): boolean
    /**
     * Gets whether `window` appears on `workspace`.
     * @param workspace a #WnckWorkspace.
     * @returns %TRUE if @window appears on @workspace, %FALSE otherwise.
     */
    isOnWorkspace(workspace: Workspace): boolean
    /**
     * Gets whether `window` is on all workspace. Pinned state may change
     * anytime a #WnckWindow::workspace-changed signal gets emitted, but not when
     * a #WnckWindow::state-changed gets emitted.
     * @returns %TRUE if @window is on all workspaces, %FALSE otherwise.
     */
    isPinned(): boolean
    /**
     * Gets whether `window` is shaded. Shade state may change anytime
     * a #WnckWindow::state-changed signal gets emitted.
     * @returns %TRUE if @window is shaded, %FALSE otherwise.
     */
    isShaded(): boolean
    /**
     * Gets whether `window` is included on pagers. This state may change
     * anytime a #WnckWindow::state-changed signal gets emitted.
     * @returns %TRUE if @window is included on pagers, %FALSE otherwise.
     */
    isSkipPager(): boolean
    /**
     * Gets whether `window` is included on tasklists. This state may change
     * anytime a #WnckWindow::state-changed signal gets emitted.
     * @returns %TRUE if @window is included on tasklists, %FALSE otherwise.
     */
    isSkipTasklist(): boolean
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
    isSticky(): boolean
    /**
     * Like wnck_window_is_on_workspace(), but also checks that
     * the window is in a visible state (i.e. not minimized or shaded).
     * @param workspace a #WnckWorkspace.
     * @returns %TRUE if @window appears on @workspace in normal state, %FALSE otherwise.
     */
    isVisibleOnWorkspace(workspace: Workspace): boolean
    /**
     * Asks the window manager to start moving `window` via the keyboard.
     */
    keyboardMove(): void
    /**
     * Asks the window manager to start resizing `window` via the keyboard.
     */
    keyboardSize(): void
    /**
     * Asks the window manager to put `window` on top of most windows (`window` will
     * not be on top of focused fullscreen windows, of other windows with this
     * setting and of dock windows).
     */
    makeAbove(): void
    /**
     * Asks the window manager to put `window` below most windows.
     */
    makeBelow(): void
    /**
     * Asks the window manager to maximize `window`.
     */
    maximize(): void
    /**
     * Asks the window manager to maximize horizontally `window`.
     */
    maximizeHorizontally(): void
    /**
     * Asks the window manager to maximize vertically `window`.
     */
    maximizeVertically(): void
    /**
     * Minimizes `window`.
     */
    minimize(): void
    /**
     * Asks the window manager to move `window` to `space`. If `window` was pinned, it
     * will also result in `window` being visible only on `space`.
     * @param space a #WnckWorkspace.
     */
    moveToWorkspace(space: Workspace): void
    /**
     * Gets whether `window` needs attention. This state may change anytime
     * a #WnckWindow::state-changed signal gets emitted.
     * 
     * This state depends on flags such as the demands_attention and is_urgent
     * hints.
     * @returns %TRUE if @window needs attention, %FALSE otherwise.
     */
    needsAttention(): boolean
    /**
     * Gets whether `window` or one of its transients needs attention. This state
     * may change anytime a #WnckWindow::state-changed signal gets emitted.
     * @returns %TRUE if @window or one of its transients needs attention, %FALSE otherwise.
     */
    orTransientNeedsAttention(): boolean
    /**
     * Asks the window manager to put `window` on all workspaces.
     */
    pin(): void
    /**
     * Asks the window manager to set the fullscreen state of `window` according to
     * `fullscreen`.
     * @param fullscreen whether to make `window` fullscreen.
     */
    setFullscreen(fullscreen: boolean): void
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
     * @param geometryMask a bitmask containing flags for what should be set.
     * @param x new X coordinate in pixels of `window`.
     * @param y new Y coordinate in pixels of `window`.
     * @param width new width in pixels of `window`.
     * @param height new height in pixels of `window`.
     */
    setGeometry(gravity: WindowGravity, geometryMask: WindowMoveResizeMask, x: number, y: number, width: number, height: number): void
    /**
     * Sets the icon geometry for `window`. A typical use case for this is the
     * destination of the minimization animation of `window`.
     * @param x X coordinate in pixels.
     * @param y Y coordinate in pixels.
     * @param width width in pixels.
     * @param height height in pixels.
     */
    setIconGeometry(x: number, y: number, width: number, height: number): void
    /**
     * Asks the window manager to make `window` included or not included on pagers.
     * @param skip whether `window` should be included on pagers.
     */
    setSkipPager(skip: boolean): void
    /**
     * Asks the window manager to make `window` included or not included on
     * tasklists.
     * @param skip whether `window` should be included on tasklists.
     */
    setSkipTasklist(skip: boolean): void
    /**
     * Sets the sort order of `window`. The sort order is used for ordering of
     * `window` in #WnckSelector and #WnckTasklist.
     * @param order new sort order for `window`.
     */
    setSortOrder(order: number): void
    /**
     * Sets the semantic type of `window` to `wintype`.
     * @param wintype a semantic type.
     */
    setWindowType(wintype: WindowType): void
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
     * @returns %TRUE if one of the transients of @window is the most recently activated window, %FALSE otherwise.
     */
    transientIsMostRecentlyActivated(): boolean
    /**
     * Asks the window manager to not put `window` on top of most windows, and to
     * put it again in the stack with other windows.
     */
    unmakeAbove(): void
    /**
     * Asks the window manager to not put `window` below most windows, and to
     * put it again in the stack with other windows.
     */
    unmakeBelow(): void
    /**
     * Asks the window manager to unmaximize `window`.
     */
    unmaximize(): void
    /**
     * Asks the window manager to unmaximize horizontally `window`.
     */
    unmaximizeHorizontally(): void
    /**
     * Asks the window manager to unmaximize vertically `window`.
     */
    unmaximizeVertically(): void
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

    actionsChanged(changedMask: WindowActions, newActions: WindowActions): void
    classChanged(): void
    geometryChanged(): void
    iconChanged(): void
    nameChanged(): void
    roleChanged(): void
    stateChanged(changedMask: WindowState, newState: WindowState): void
    typeChanged(): void
    workspaceChanged(): void

    // Own signals of Wnck-3.0.Wnck.Window

    connect(sigName: "actions-changed", callback: Window.ActionsChangedSignalCallback): number
    on(sigName: "actions-changed", callback: Window.ActionsChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "actions-changed", callback: Window.ActionsChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "actions-changed", callback: Window.ActionsChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "actions-changed", newState: WindowActions, ...args: any[]): void
    connect(sigName: "class-changed", callback: Window.ClassChangedSignalCallback): number
    on(sigName: "class-changed", callback: Window.ClassChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "class-changed", callback: Window.ClassChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "class-changed", callback: Window.ClassChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "class-changed", ...args: any[]): void
    connect(sigName: "geometry-changed", callback: Window.GeometryChangedSignalCallback): number
    on(sigName: "geometry-changed", callback: Window.GeometryChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "geometry-changed", callback: Window.GeometryChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "geometry-changed", callback: Window.GeometryChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "geometry-changed", ...args: any[]): void
    connect(sigName: "icon-changed", callback: Window.IconChangedSignalCallback): number
    on(sigName: "icon-changed", callback: Window.IconChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "icon-changed", callback: Window.IconChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "icon-changed", callback: Window.IconChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "icon-changed", ...args: any[]): void
    connect(sigName: "name-changed", callback: Window.NameChangedSignalCallback): number
    on(sigName: "name-changed", callback: Window.NameChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "name-changed", callback: Window.NameChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "name-changed", callback: Window.NameChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "name-changed", ...args: any[]): void
    connect(sigName: "role-changed", callback: Window.RoleChangedSignalCallback): number
    on(sigName: "role-changed", callback: Window.RoleChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "role-changed", callback: Window.RoleChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "role-changed", callback: Window.RoleChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "role-changed", ...args: any[]): void
    connect(sigName: "state-changed", callback: Window.StateChangedSignalCallback): number
    on(sigName: "state-changed", callback: Window.StateChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "state-changed", callback: Window.StateChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "state-changed", callback: Window.StateChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "state-changed", newState: WindowState, ...args: any[]): void
    connect(sigName: "type-changed", callback: Window.TypeChangedSignalCallback): number
    on(sigName: "type-changed", callback: Window.TypeChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "type-changed", callback: Window.TypeChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "type-changed", callback: Window.TypeChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "type-changed", ...args: any[]): void
    connect(sigName: "workspace-changed", callback: Window.WorkspaceChangedSignalCallback): number
    on(sigName: "workspace-changed", callback: Window.WorkspaceChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "workspace-changed", callback: Window.WorkspaceChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "workspace-changed", callback: Window.WorkspaceChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "workspace-changed", ...args: any[]): void

    // Class property signals of Wnck-3.0.Wnck.Window

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

    // Constructors of Wnck-3.0.Wnck.Window

    constructor(config?: Window.ConstructorProperties) 
    _init(config?: Window.ConstructorProperties): void
    /**
     * Gets a preexisting #WnckWindow for the X window `xwindow`. This will not
     * create a #WnckWindow if none exists. The function is robust against bogus
     * window IDs.
     * @param xwindow an X window ID.
     * @returns the #WnckWindow for @xwindow. The returned #WnckWindow is owned by libwnck and must not be referenced or unreferenced.
     */
    static get(xwindow: number): Window
}

module Workspace {

    // Signal callback interfaces

    /**
     * Signal callback interface for `name-changed`
     */
    interface NameChangedSignalCallback {
        (): void
    }


    // Constructor properties interface

    interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

interface Workspace {

    // Own properties of Wnck-3.0.Wnck.Workspace

    __gtype__: number

    // Own fields of Wnck-3.0.Wnck.Workspace

    parentInstance: GObject.Object
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
    changeName(name: string | null): void
    /**
     * Gets the height of `space`.
     * @returns the height of @space.
     */
    getHeight(): number
    /**
     * Gets the column of `space` in the #WnckWorkspace layout. The first column
     * has an index of 0 and is always the left column, regardless of the starting
     * corner set for the layout and regardless of the default direction of the
     * environment (i.e., in both Left-To-Right and Right-To-Left environments).
     * @returns the column of @space in the #WnckWorkspace layout, or -1 on errors.
     */
    getLayoutColumn(): number
    /**
     * Gets the row of `space` in the #WnckWorkspace layout. The first row has an
     * index of 0 and is always the top row, regardless of the starting corner set
     * for the layout.
     * @returns the row of @space in the #WnckWorkspace layout, or -1 on errors.
     */
    getLayoutRow(): number
    /**
     * Gets the human-readable name that should be used to refer to `space`. If
     * the user has not set a special name, a fallback like "Workspace 3" will be
     * used.
     * @returns the name of @space.
     */
    getName(): string | null
    /**
     * Gets the neighbor #WnckWorkspace of `space` in the `direction` direction.
     * @param direction direction in which to search the neighbor.
     * @returns the neighbor #WnckWorkspace of @space in the @direction direction, or %NULL if no such neighbor #WnckWorkspace exists. The returned #WnckWorkspace is owned by libwnck and must not be referenced or unreferenced.
     */
    getNeighbor(direction: MotionDirection): Workspace
    /**
     * Gets the index of `space` on the #WnckScreen to which it belongs. The
     * first workspace has an index of 0.
     * @returns the index of @space on its #WnckScreen, or -1 on errors.
     */
    getNumber(): number
    /**
     * Gets the #WnckScreen `space` is on.
     * @returns the #WnckScreen @space is on. The returned #WnckScreen is owned by libwnck and must not be referenced or unreferenced.
     */
    getScreen(): Screen
    /**
     * Gets the X coordinate of the viewport in `space`.
     * @returns the X coordinate of the viewport in @space, or 0 if @space does not contain a viewport.
     */
    getViewportX(): number
    /**
     * Gets the Y coordinate of the viewport in `space`.
     * @returns the Y coordinate of the viewport in @space, or 0 if @space does not contain a viewport.
     */
    getViewportY(): number
    /**
     * Gets the width of `space`.
     * @returns the width of @space.
     */
    getWidth(): number
    /**
     * Gets whether `space` contains a viewport.
     * @returns %TRUE if @space contains a viewport, %FALSE otherwise.
     */
    isVirtual(): boolean

    // Own virtual methods of Wnck-3.0.Wnck.Workspace

    nameChanged(): void

    // Own signals of Wnck-3.0.Wnck.Workspace

    connect(sigName: "name-changed", callback: Workspace.NameChangedSignalCallback): number
    on(sigName: "name-changed", callback: Workspace.NameChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    once(sigName: "name-changed", callback: Workspace.NameChangedSignalCallback, after?: boolean): NodeJS.EventEmitter
    off(sigName: "name-changed", callback: Workspace.NameChangedSignalCallback): NodeJS.EventEmitter
    emit(sigName: "name-changed", ...args: any[]): void

    // Class property signals of Wnck-3.0.Wnck.Workspace

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

    // Constructors of Wnck-3.0.Wnck.Workspace

    constructor(config?: Workspace.ConstructorProperties) 
    _init(config?: Workspace.ConstructorProperties): void
}

interface ActionMenuClass {

    // Own fields of Wnck-3.0.Wnck.ActionMenuClass

    parentClass: Gtk.MenuClass
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

    parentClass: GObject.ObjectClass
    nameChanged: (app: Application) => void
    iconChanged: (app: Application) => void
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

    parentClass: GObject.ObjectClass
    nameChanged: (group: ClassGroup) => void
    iconChanged: (group: ClassGroup) => void
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

interface HandleClass {

    // Own fields of Wnck-3.0.Wnck.HandleClass

    parentClass: GObject.ObjectClass
}

abstract class HandleClass {

    // Own properties of Wnck-3.0.Wnck.HandleClass

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

    parentClass: Gtk.MenuItemClass
}

abstract class ImageMenuItemClass {

    // Own properties of Wnck-3.0.Wnck.ImageMenuItemClass

    static name: string
}

interface PagerClass {

    // Own fields of Wnck-3.0.Wnck.PagerClass

    parentClass: Gtk.ContainerClass
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
    totalBytesEstimate: number
    /**
     * number of bytes allocated in the X server for resources of
     * type Pixmap.
     * @field 
     */
    pixmapBytes: number
    /**
     * number of Pixmap resources allocated.
     * @field 
     */
    nPixmaps: number
    /**
     * number of Window resources allocated.
     * @field 
     */
    nWindows: number
    /**
     * number of GContext resources allocated.
     * @field 
     */
    nGcs: number
    /**
     * number of Picture resources allocated.
     * @field 
     */
    nPictures: number
    /**
     * number of Glyphset resources allocated.
     * @field 
     */
    nGlyphsets: number
    /**
     * number of Font resources allocated.
     * @field 
     */
    nFonts: number
    /**
     * number of Colormap resources allocated.
     * @field 
     */
    nColormapEntries: number
    /**
     * number of PassiveGrab resources allocated.
     * @field 
     */
    nPassiveGrabs: number
    /**
     * number of Cursor resources allocated.
     * @field 
     */
    nCursors: number
    /**
     * number of other resources allocated.
     * @field 
     */
    nOther: number
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

    parentClass: GObject.ObjectClass
    activeWindowChanged: (screen: Screen, previousWindow: Window) => void
    activeWorkspaceChanged: (screen: Screen, previousWorkspace: Workspace) => void
    windowStackingChanged: (screen: Screen) => void
    windowOpened: (screen: Screen, window: Window) => void
    windowClosed: (screen: Screen, window: Window) => void
    workspaceCreated: (screen: Screen, space: Workspace) => void
    workspaceDestroyed: (screen: Screen, space: Workspace) => void
    applicationOpened: (screen: Screen, app: Application) => void
    applicationClosed: (screen: Screen, app: Application) => void
    backgroundChanged: (screen: Screen) => void
    classGroupOpened: (screen: Screen, classGroup: ClassGroup) => void
    classGroupClosed: (screen: Screen, classGroup: ClassGroup) => void
    showingDesktopChanged: (screen: Screen) => void
    viewportsChanged: (screen: Screen) => void
    windowManagerChanged: (screen: Screen) => void
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

    parentClass: Gtk.MenuBarClass
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

    parentClass: Gtk.ContainerClass
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

    parentClass: GObject.ObjectClass
    nameChanged: (window: Window) => void
    stateChanged: (window: Window, changedMask: WindowState, newState: WindowState) => void
    workspaceChanged: (window: Window) => void
    iconChanged: (window: Window) => void
    actionsChanged: (window: Window, changedMask: WindowActions, newActions: WindowActions) => void
    geometryChanged: (window: Window) => void
    classChanged: (window: Window) => void
    roleChanged: (window: Window) => void
    typeChanged: (window: Window) => void
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

    parentClass: GObject.ObjectClass
    nameChanged: (space: Workspace) => void
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
    gridArea: number
    /**
     * row of the specific #WnckWorkspace, starting from 0.
     * @field 
     */
    currentRow: number
    /**
     * column of the specific #WnckWorkspace, starting from 0.
     * @field 
     */
    currentCol: number
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
// END