
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
import type Gtk from '@girs/gtk-3.0';
import type xlib from '@girs/xlib-2.0';
import type Gdk from '@girs/gdk-3.0';
import type cairo from 'cairo';
import type GObject from '@girs/gobject-2.0';
import type GLib from '@girs/glib-2.0';
import type Pango from '@girs/pango-1.0';
import type HarfBuzz from '@girs/harfbuzz-0.0';
import type freetype2 from '@girs/freetype2-2.0';
import type Gio from '@girs/gio-2.0';
import type GModule from '@girs/gmodule-2.0';
import type GdkPixbuf from '@girs/gdkpixbuf-2.0';
import type Atk from '@girs/atk-1.0';

export namespace Wnck {

    /**
     * Wnck-3.0
     */


    /**
     * @gir-type Enum
     */
    export namespace ClientType {
        export const $gtype: GObject.GType<ClientType>;
    }

    /**
     * Type describing the role of the libwnck user.
     * @gir-type Enum
     * @since 2.14
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
     * @gir-type Enum
     */
    export namespace MotionDirection {
        export const $gtype: GObject.GType<MotionDirection>;
    }

    /**
     * Type defining a direction in which to search a neighbor {@link Wnck.Workspace}.
     * @gir-type Enum
     * @since 2.14
     */
    enum MotionDirection {
        /**
         * search a neighbor {@link Wnck.Workspace} above another
         * {@link Wnck.Workspace}.
         */
        UP,
        /**
         * search a neighbor {@link Wnck.Workspace} below another
         * {@link Wnck.Workspace}.
         */
        DOWN,
        /**
         * search a neighbor {@link Wnck.Workspace} at the left of another
         * {@link Wnck.Workspace}.
         */
        LEFT,
        /**
         * search a neighbor {@link Wnck.Workspace} at the right of another
         * {@link Wnck.Workspace}.
         */
        RIGHT,
    }


    /**
     * @gir-type Enum
     */
    export namespace PagerDisplayMode {
        export const $gtype: GObject.GType<PagerDisplayMode>;
    }

    /**
     * Mode defining what a {@link Wnck.Pager} will display.
     * @gir-type Enum
     */
    enum PagerDisplayMode {
        /**
         * the {@link Wnck.Pager} will only display the names of the
         * workspaces.
         */
        NAME,
        /**
         * the {@link Wnck.Pager} will display a representation
         * for each window in the workspaces.
         */
        CONTENT,
    }


    /**
     * @gir-type Enum
     */
    export namespace PagerScrollMode {
        export const $gtype: GObject.GType<PagerScrollMode>;
    }

    /**
     * Mode defining in which order scrolling on a {@link Wnck.Pager} will cycle through workspaces.
     * @gir-type Enum
     * @since 3.36
     */
    enum PagerScrollMode {
        /**
         * given that the workspaces are set up in multiple rows,
         * scrolling on the {@link Wnck.Pager} will cycle through the workspaces as if on a
         * 2-dimensional map. Example cycling order with 2 rows and 4 workspaces: 1 3 2 4.
         */
        "2D",
        /**
         * the {@link Wnck.Pager} will always cycle workspaces in a linear
         * manner, irrespective of how many rows are configured. (Hint: Better for mice)
         * Example cycling order with 2 rows and 4 workspaces: 1 2 3 4.
         */
        "1D",
        /**
         * the {@link Wnck.Pager} will not cycle workspaces. Since 3.40.
         */
        NONE,
    }


    /**
     * @gir-type Enum
     */
    export namespace TasklistGroupingType {
        export const $gtype: GObject.GType<TasklistGroupingType>;
    }

    /**
     * Type defining the policy of the {@link Wnck.Tasklist} for grouping multiple
     * {@link Wnck.Window} of the same {@link Wnck.Application}.
     * @gir-type Enum
     */
    enum TasklistGroupingType {
        /**
         * never group multiple {@link Wnck.Window} of the same
         * {@link Wnck.Application}.
         */
        NEVER_GROUP,
        /**
         * group multiple {@link Wnck.Window} of the same
         * {@link Wnck.Application} for some {@link Wnck.Application}, when there is not enough place
         * to have a good-looking list of all {@link Wnck.Window}.
         */
        AUTO_GROUP,
        /**
         * always group multiple {@link Wnck.Window} of the same
         * {@link Wnck.Application}, for all {@link Wnck.Application}.
         */
        ALWAYS_GROUP,
    }


    /**
     * @gir-type Enum
     */
    export namespace WindowGravity {
        export const $gtype: GObject.GType<WindowGravity>;
    }

    /**
     * Flag used when changing the geometry of a {@link Wnck.Window}. This is the gravity
     * point to use as a reference for the new position.
     * @gir-type Enum
     * @since 2.16
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
     * @gir-type Enum
     */
    export namespace WindowType {
        export const $gtype: GObject.GType<WindowType>;
    }

    /**
     * Type describing the semantic type of a {@link Wnck.Window}.
     * @gir-type Enum
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


    /**
     * @gir-type Enum
     */
    enum _LayoutCorner {
        TOPLEFT,
        TOPRIGHT,
        BOTTOMRIGHT,
        BOTTOMLEFT,
    }


    /**
     * @gir-type Enum
     */
    enum _LayoutOrientation {
        HORIZONTAL,
        VERTICAL,
    }


    const DEFAULT_ICON_SIZE: number;

    const DEFAULT_MINI_ICON_SIZE: number;

    /**
     * @since 3.0
     */
    const MAJOR_VERSION: number;

    /**
     * @since 3.0
     */
    const MICRO_VERSION: number;

    /**
     * @since 3.0
     */
    const MINOR_VERSION: number;

    /**
     * Looks for the X resource usage of the application with process ID `pid` on
     * display `gdisplay`. If no resource usage can be found, then all fields of
     * `usage` are set to 0.
     * 
     * In order to find the resource usage of an application that does not have an
     * X window visible to libwnck (panel applets do not have any toplevel windows,
     * for example), `wnck_pid_read_resource_usage()` walks through the whole tree of
     * X windows. Since this walk is expensive in CPU, a cache is created. This
     * cache is updated in the background. This means there is a non-null
     * probability that no resource usage will be found for an application, even if
     * it is an X client. If this happens, calling `wnck_pid_read_resource_usage()`
     * again after a few seconds should work.
     * 
     * To properly work, this function requires the XRes extension on the X server.
     * @param gdk_display a <classname>GdkDisplay</classname>.
     * @param pid a process ID.
     * @param usage return location for the X resource usage of the application with process ID `pid`.
     * @since 2.6
     */
    function pid_read_resource_usage(gdk_display: Gdk.Display, pid: (bigint | number), usage: ResourceUsage): void;

    /**
     * Sets the role of the libwnck user.
     * 
     * The default role is {@link Wnck.ClientType.APPLICATION}. Therefore, for
     * applications providing some window management features, like pagers or
     * tasklists, it is important to set the role to {@link Wnck.ClientType.PAGER} for
     * libwnck to properly work.
     * 
     * This function should only be called once per program. Additional calls
     * with the same client type will be silently ignored. An attempt to change
     * the client type to a differnet value after it has already been set will
     * be ignored and a critical warning will be logged.
     * @param ewmh_sourceindication_client_type a role for the client.
     * @since 2.14
     */
    function set_client_type(ewmh_sourceindication_client_type: ClientType): void;

    /**
     * The default main icon size is `WNCK_DEFAULT_ICON_SIZE`. This function allows
     * to change this value.
     * @param size the default size for windows and application standard icons.
     * @since 2.4.6
     */
    function set_default_icon_size(size: (bigint | number)): void;

    /**
     * The default main icon size is `WNCK_DEFAULT_MINI_ICON_SIZE`. This function
     * allows to change this value.
     * @param size the default size for windows and application mini icons.
     * @since 2.4.6
     */
    function set_default_mini_icon_size(size: (bigint | number)): void;

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
     * @since 3.4
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
     * @param usage return location for the X resource usage of the application owning the X window ID `xid`.
     * @since 2.6
     */
    function xid_read_resource_usage(gdk_display: Gdk.Display, xid: (bigint | number), usage: ResourceUsage): void;

    /**
     * @gir-type Flags
     */
    export namespace WindowActions {
        export const $gtype: GObject.GType<WindowActions>;
    }

    /**
     * Type used as a bitmask to describe the actions that can be done for a
     * {@link Wnck.Window}.
     * @gir-type Flags
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
     * @gir-type Flags
     */
    export namespace WindowMoveResizeMask {
        export const $gtype: GObject.GType<WindowMoveResizeMask>;
    }

    /**
     * Flag used as a bitmask when changing the geometry of a {@link Wnck.Window}. This
     * indicates which part of the geometry should be changed.
     * @gir-type Flags
     * @since 2.16
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
     * @gir-type Flags
     */
    export namespace WindowState {
        export const $gtype: GObject.GType<WindowState>;
    }

    /**
     * Type used as a bitmask to describe the state of a {@link Wnck.Window}.
     * @gir-type Flags
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
         * `wnck_window_is_sticky()`).
         */
        STICKY,
        /**
         * the window is not visible on its {@link Wnck.Workspace}
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
         * `wnck_window_make_above()`).
         */
        ABOVE,
        /**
         * the window is below other windows (see
         * `wnck_window_make_below()`).
         */
        BELOW,
    }


    namespace ActionMenu {
        // Signal signatures
        interface SignalSignatures extends Gtk.Menu.SignalSignatures {
            "notify::window": (pspec: GObject.ParamSpec) => void;
            "notify::accel-group": (pspec: GObject.ParamSpec) => void;
            "notify::accel-path": (pspec: GObject.ParamSpec) => void;
            "notify::active": (pspec: GObject.ParamSpec) => void;
            "notify::anchor-hints": (pspec: GObject.ParamSpec) => void;
            "notify::attach-widget": (pspec: GObject.ParamSpec) => void;
            "notify::menu-type-hint": (pspec: GObject.ParamSpec) => void;
            "notify::monitor": (pspec: GObject.ParamSpec) => void;
            "notify::rect-anchor-dx": (pspec: GObject.ParamSpec) => void;
            "notify::rect-anchor-dy": (pspec: GObject.ParamSpec) => void;
            "notify::reserve-toggle-size": (pspec: GObject.ParamSpec) => void;
            "notify::tearoff-state": (pspec: GObject.ParamSpec) => void;
            "notify::tearoff-title": (pspec: GObject.ParamSpec) => void;
            "notify::take-focus": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Menu.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {
            window: (any | any);
        }
    }

    /**
     * The {@link Wnck.ActionMenu} struct contains only private fields and should not be
     * directly accessed.
     * @gir-type Class
     */
    class ActionMenu extends Gtk.Menu implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<ActionMenu>;

        // Properties
        /**
         * @construct-only
         */
    // This accessor conflicts with another accessor's type in a parent class or interface.
        get window(): (any | any);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ActionMenu.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ActionMenu.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](window: Window): ActionMenu;

        // Conflicted with Gtk.Menu.new
        static ["new"](...args: never[]): any;

        // Signals
        /** @signal */
        connect<K extends keyof ActionMenu.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ActionMenu.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ActionMenu.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ActionMenu.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ActionMenu.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ActionMenu.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace Application {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * Emitted when the icon of `app` changes.
             * @signal
             * @run-last
             */
            "icon-changed": () => void;
            /**
             * Emitted when the name of `app` changes.
             * @signal
             * @run-last
             */
            "name-changed": () => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {

        }
    }

    /**
     * The {@link Wnck.Application} struct contains only private fields and should not be
     * directly accessed.
     * @gir-type Class
     */
    class Application extends GObject.Object {
        static $gtype: GObject.GType<Application>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Application.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Application.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof Application.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Application.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Application.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Application.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Application.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Application.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Gets the {@link Wnck.Application} corresponding to the group leader with `xwindow`
         * as X window ID.
         * @param xwindow the X window ID of a group leader.
         */
        static get(xwindow: (bigint | number)): Application;

        // Virtual methods
        /**
         * @virtual
         */
        vfunc_icon_changed(): void;

        /**
         * @virtual
         */
        vfunc_name_changed(): void;

        // Methods
        /**
         * Gets the icon to be used for `app`. If no icon is set for `app`, a
         * suboptimal heuristic is used to find an appropriate icon. If no icon was
         * found, a fallback icon is used.
         * @returns the icon for `app`. The caller should reference the returned <classname>GdkPixbuf</classname> if it needs to keep the icon around.
         */
        get_icon(): GdkPixbuf.Pixbuf;

        /**
         * Gets whether a default fallback icon is used for `app` (because none
         * was set on `app`).
         * @returns `true` if the icon for `app` is a fallback, `false` otherwise.
         */
        get_icon_is_fallback(): boolean;

        /**
         * Gets the icon name of `app` (to be used when `app` is minimized). Since
         * there is no way to properly find this name, various suboptimal heuristics
         * are used to find it.
         * @returns the icon name of `app`, or a fallback icon name if no icon name is available.
         */
        get_icon_name(): string;

        /**
         * Gets the mini-icon to be used for `app`. If no mini-icon is set for `app`,
         * a suboptimal heuristic is used to find an appropriate icon. If no mini-icon
         * was found, a fallback mini-icon is used.
         * @returns the mini-icon for `app`. The caller should reference the returned <classname>GdkPixbuf</classname> if it needs to keep the mini-icon around.
         */
        get_mini_icon(): GdkPixbuf.Pixbuf;

        /**
         * Gets the number of {@link Wnck.Window} belonging to `app`.
         * @returns the number of {@link Wnck.Window} belonging to `app`.
         */
        get_n_windows(): number;

        /**
         * Gets the name of `app`. Since there is no way to properly find this name,
         * various suboptimal heuristics are used to find it. GTK+ should probably have
         * a function to allow applications to set the _NET_WM_NAME property on the
         * group leader as the application name, and the <ulink
         * url="http://standards.freedesktop.org/wm-spec/wm-spec-latest.html">EWMH</ulink>
         * should say that this is where the application name goes.
         * @returns the name of `app`, or a fallback name if no name is available.
         */
        get_name(): string;

        /**
         * Gets the process ID of `app`.
         * @returns the process ID of `app`, or 0 if none is available.
         */
        get_pid(): number;

        /**
         * Gets the startup sequence ID used for startup notification of `app`.
         * @returns the startup sequence ID used for startup notification of `app`, or `null` if none is available.
         */
        get_startup_id(): string;

        /**
         * Gets the list of {@link Wnck.Window} belonging to `app`.
         * @returns the list of {@link Wnck.Window} belonging to `app`, or `null` if the application contains no window. The list should not be modified nor freed, as it is owned by `app`.
         */
        get_windows(): Window[];

        /**
         * Gets the X window ID of the group leader window for `app`.
         * @returns the X window ID of the group leader window for `app`.
         */
        get_xid(): number;
    }


    namespace ClassGroup {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * Emitted when the icon of `class_group` changes.
             * @signal
             * @run-last
             */
            "icon-changed": () => void;
            /**
             * Emitted when the name of `class_group` changes.
             * @signal
             * @run-last
             */
            "name-changed": () => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {

        }
    }

    /**
     * The {@link Wnck.ClassGroup} struct contains only private fields and should not be
     * directly accessed.
     * @gir-type Class
     */
    class ClassGroup extends GObject.Object {
        static $gtype: GObject.GType<ClassGroup>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ClassGroup.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ClassGroup.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof ClassGroup.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ClassGroup.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ClassGroup.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ClassGroup.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ClassGroup.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ClassGroup.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Gets the {@link Wnck.ClassGroup} corresponding to `id`.
         * @param id identifier name of the sought resource class.
         */
        static get(id: string): ClassGroup;

        // Virtual methods
        /**
         * @virtual
         */
        vfunc_icon_changed(): void;

        /**
         * @virtual
         */
        vfunc_name_changed(): void;

        // Methods
        /**
         * Gets the icon to be used for `class_group`. Since there is no way to
         * properly find the icon, a suboptimal heuristic is used to find it. The icon
         * is the first icon found by looking at all the {@link Wnck.Application} for each
         * {@link Wnck.Window} in `class_group`, then at all the {@link Wnck.Window} in `class_group`. If
         * no icon was found, a fallback icon is used.
         * @returns the icon for `class_group`. The caller should reference the returned <classname>GdkPixbuf</classname> if it needs to keep the icon around.
         */
        get_icon(): GdkPixbuf.Pixbuf;

        /**
         * Gets the identifier name for `class_group`. This is the resource class for
         * `class_group`.
         * @returns the identifier name of `class_group`, or an empty string if the group has no identifier name.
         */
        get_id(): string;

        /**
         * Gets the mini-icon to be used for `class_group`. Since there is no way to
         * properly find the mini-icon, the same suboptimal heuristic as the one for
         * `wnck_class_group_get_icon()` is used to find it.
         * @returns the mini-icon for `class_group`. The caller should reference the returned <classname>GdkPixbuf</classname> if it needs to keep the mini-icon around.
         */
        get_mini_icon(): GdkPixbuf.Pixbuf;

        /**
         * Gets an human-readable name for `class_group`. Since there is no way to
         * properly find this name, a suboptimal heuristic is used to find it. The name
         * is the name of all {@link Wnck.Application} for each {@link Wnck.Window} in `class_group` if
         * they all have the same name. If all {@link Wnck.Application} don't have the same
         * name, the name is the name of all {@link Wnck.Window} in `class_group` if they all
         * have the same name. If all {@link Wnck.Window} don't have the same name, the
         * resource class name is used.
         * @returns an human-readable name for `class_group`.
         */
        get_name(): string;

        /**
         * Gets the resource class name for `class_group`.
         * @returns the resource class name of `class_group`, or an empty string if the group has no resource class name.
         */
        get_res_class(): string;

        /**
         * Gets the list of {@link Wnck.Window} that are grouped in `class_group`.
         * @returns the list of {@link Wnck.Window} grouped in `class_group`, or `null` if the group contains no window. The list should not be modified nor freed, as it is owned by `class_group`.
         */
        get_windows(): Window[];
    }


    namespace Handle {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::client-type": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            client_type: ClientType;
            clientType: ClientType;
        }
    }

    /**
     * The {@link Wnck.Handle} struct contains only private fields and should not be
     * directly accessed.
     * @gir-type Class
     */
    class Handle extends GObject.Object {
        static $gtype: GObject.GType<Handle>;

        // Properties
        /**
         * @default Wnck.ClientType.APPLICATION
         */
        get client_type(): ClientType;
        set client_type(val: ClientType);

        /**
         * @default Wnck.ClientType.APPLICATION
         */
        get clientType(): ClientType;
        set clientType(val: ClientType);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Handle.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Handle.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](client_type: ClientType): Handle;

        // Signals
        /** @signal */
        connect<K extends keyof Handle.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Handle.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Handle.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Handle.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Handle.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Handle.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Gets the {@link Wnck.Application} corresponding to the group leader with `xwindow`
         * as X window ID.
         * @param xwindow the X window ID of a group leader.
         * @returns the {@link Wnck.Application} corresponding to `xwindow`, or `null` if there no such {@link Wnck.Application} could be found. The returned {@link Wnck.Application} is owned by libwnck and must not be referenced or unreferenced.
         */
        get_application(xwindow: (bigint | number)): Application;

        /**
         * Gets the {@link Wnck.ClassGroup} corresponding to `id`.
         * @param id identifier name of the sought resource class.
         * @returns the {@link Wnck.ClassGroup} corresponding to `id`, or `null` if there is no {@link Wnck.ClassGroup} with the specified `id`. The returned {@link Wnck.ClassGroup} is owned by libwnck and must not be referenced or unreferenced.
         */
        get_class_group(id: string): ClassGroup;

        /**
         * Gets the default {@link Wnck.Screen} on the default display.
         * @returns the default {@link Wnck.Screen}. The returned {@link Wnck.Screen} is owned by {@link Wnck.Handle} and must not be referenced or unreferenced. This can return `null` if not on X11.
         */
        get_default_screen(): (Screen | null);

        /**
         * Gets the {@link Wnck.Screen} for a given screen on the default display.
         * @param index screen number, starting from 0.
         * @returns the {@link Wnck.Screen} for screen `index`, or `null` if no such screen exists. The returned {@link Wnck.Screen} is owned by {@link Wnck.Handle} and must not be referenced or unreferenced.
         */
        get_screen(index: number): Screen;

        /**
         * Gets the {@link Wnck.Screen} for the root window at `root_window_id`, or
         * `null` if no {@link Wnck.Screen} exists for this root window.
         * 
         * This function does not work if `wnck_handle_get_screen()` was not called
         * for the sought {@link Wnck.Screen} before, and returns `null`.
         * @param root_window_id an X window ID.
         * @returns the {@link Wnck.Screen} for the root window at `root_window_id`, or `null`. The returned {@link Wnck.Screen} is owned by {@link Wnck.Handle} and must not be referenced or unreferenced.
         */
        get_screen_for_root(root_window_id: (bigint | number)): Screen;

        /**
         * Gets a preexisting {@link Wnck.Window} for the X window `xwindow`. This will not
         * create a {@link Wnck.Window} if none exists. The function is robust against bogus
         * window IDs.
         * @param xwindow an X window ID.
         * @returns the {@link Wnck.Window} for `xwindow`. The returned {@link Wnck.Window} is owned by libwnck and must not be referenced or unreferenced.
         */
        get_window(xwindow: (bigint | number)): Window;

        /**
         * The default main icon size is `WNCK_DEFAULT_ICON_SIZE`. This function allows
         * to change this value.
         * @param icon_size the default size for windows and application standard icons.
         */
        set_default_icon_size(icon_size: (bigint | number)): void;

        /**
         * The default main icon size is `WNCK_DEFAULT_MINI_ICON_SIZE`. This function
         * allows to change this value.
         * @param icon_size the default size for windows and application mini icons.
         */
        set_default_mini_icon_size(icon_size: (bigint | number)): void;
    }


    namespace ImageMenuItem {
        // Signal signatures
        interface SignalSignatures extends Gtk.MenuItem.SignalSignatures {
            "notify::accel-path": (pspec: GObject.ParamSpec) => void;
            "notify::label": (pspec: GObject.ParamSpec) => void;
            "notify::right-justified": (pspec: GObject.ParamSpec) => void;
            "notify::submenu": (pspec: GObject.ParamSpec) => void;
            "notify::use-underline": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
            "notify::action-name": (pspec: GObject.ParamSpec) => void;
            "notify::action-target": (pspec: GObject.ParamSpec) => void;
            "notify::related-action": (pspec: GObject.ParamSpec) => void;
            "notify::use-action-appearance": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.MenuItem.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Actionable.ConstructorProps, Gtk.Activatable.ConstructorProps, Gtk.Buildable.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    class ImageMenuItem extends Gtk.MenuItem implements Atk.ImplementorIface, Gtk.Actionable, Gtk.Activatable, Gtk.Buildable {
        static $gtype: GObject.GType<ImageMenuItem>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ImageMenuItem.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<ImageMenuItem.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): ImageMenuItem;

        static new_with_label(label: string): ImageMenuItem;

        // Signals
        /** @signal */
        connect<K extends keyof ImageMenuItem.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ImageMenuItem.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof ImageMenuItem.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, ImageMenuItem.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof ImageMenuItem.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<ImageMenuItem.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        make_label_bold(): void;

        make_label_normal(): void;

        /**
         * @param pixbuf 
         */
        set_image_from_icon_pixbuf(pixbuf: GdkPixbuf.Pixbuf): void;

        /**
         * @param window 
         */
        set_image_from_window(window: Window): void;

        /**
         * @default null
          * @category Inherited from Gtk.Actionable
         */
        get action_name(): (string | null);
        set action_name(val: (string | null));

        /**
         * @default null
          * @category Inherited from Gtk.Actionable
         */
        get actionName(): (string | null);
        set actionName(val: (string | null));

        /** @category Inherited from Gtk.Actionable */
        get action_target(): GLib.Variant;
        set action_target(val: GLib.Variant);

        /** @category Inherited from Gtk.Actionable */
        get actionTarget(): GLib.Variant;
        set actionTarget(val: GLib.Variant);

        /**
         * The action that this activatable will activate and receive
         * updates from for various states and possibly appearance.
         * 
         * > {@link Gtk.Activatable} implementors need to handle the this property and
         * > call `gtk_activatable_do_set_related_action()` when it changes.
         * @since 2.16
         * @deprecated since 3.10
          * @category Inherited from Gtk.Activatable
         */
        get related_action(): Gtk.Action;
        set related_action(val: Gtk.Action);

        /**
         * The action that this activatable will activate and receive
         * updates from for various states and possibly appearance.
         * 
         * > {@link Gtk.Activatable} implementors need to handle the this property and
         * > call `gtk_activatable_do_set_related_action()` when it changes.
         * @since 2.16
         * @deprecated since 3.10
          * @category Inherited from Gtk.Activatable
         */
        get relatedAction(): Gtk.Action;
        set relatedAction(val: Gtk.Action);

        /**
         * Whether this activatable should reset its layout
         * and appearance when setting the related action or when
         * the action changes appearance.
         * 
         * See the {@link Gtk.Action} documentation directly to find which properties
         * should be ignored by the {@link Gtk.Activatable} when this property is `false`.
         * 
         * > {@link Gtk.Activatable} implementors need to handle this property
         * > and call `gtk_activatable_sync_action_properties()` on the activatable
         * > widget when it changes.
         * @since 2.16
         * @deprecated since 3.10
         * @default true
          * @category Inherited from Gtk.Activatable
         */
        get use_action_appearance(): boolean;
        set use_action_appearance(val: boolean);

        /**
         * Whether this activatable should reset its layout
         * and appearance when setting the related action or when
         * the action changes appearance.
         * 
         * See the {@link Gtk.Action} documentation directly to find which properties
         * should be ignored by the {@link Gtk.Activatable} when this property is `false`.
         * 
         * > {@link Gtk.Activatable} implementors need to handle this property
         * > and call `gtk_activatable_sync_action_properties()` on the activatable
         * > widget when it changes.
         * @since 2.16
         * @deprecated since 3.10
         * @default true
          * @category Inherited from Gtk.Activatable
         */
        get useActionAppearance(): boolean;
        set useActionAppearance(val: boolean);

        /**
         * Gets the action name for `actionable`.
         * 
         * See `gtk_actionable_set_action_name()` for more information.
         * @returns the action name, or `null` if none is set
         */
        get_action_name(): (string | null);

        /**
         * Gets the current target value of `actionable`.
         * 
         * See `gtk_actionable_set_action_target_value()` for more information.
         * @returns the current target value
         */
        get_action_target_value(): GLib.Variant;

        /**
         * Specifies the name of the action with which this widget should be
         * associated.  If `action_name` is `null` then the widget will be
         * unassociated from any previous action.
         * 
         * Usually this function is used when the widget is located (or will be
         * located) within the hierarchy of a {@link Gtk.ApplicationWindow}.
         * 
         * Names are of the form “win.save” or “app.quit” for actions on the
         * containing {@link Gtk.ApplicationWindow} or its associated {@link Gtk.Application},
         * respectively.  This is the same form used for actions in the {@link Gio.Menu}
         * associated with the window.
         * @param action_name an action name, or `null`
         */
        set_action_name(action_name: (string | null)): void;

        /**
         * Sets the target value of an actionable widget.
         * 
         * If `target_value` is `null` then the target value is unset.
         * 
         * The target value has two purposes.  First, it is used as the
         * parameter to activation of the action associated with the
         * {@link Gtk.Actionable} widget. Second, it is used to determine if the widget
         * should be rendered as “active” — the widget is active if the state
         * is equal to the given target.
         * 
         * Consider the example of associating a set of buttons with a {@link Gio.Action}
         * with string state in a typical “radio button” situation.  Each button
         * will be associated with the same action, but with a different target
         * value for that action.  Clicking on a particular button will activate
         * the action with the target of that button, which will typically cause
         * the action’s state to change to that value.  Since the action’s state
         * is now equal to the target value of the button, the button will now
         * be rendered as active (and the other buttons, with different targets,
         * rendered inactive).
         * @param target_value a {@link GLib.Variant} to set as the target value, or `null`
         */
        set_action_target_value(target_value: (GLib.Variant | null)): void;

        /**
         * Sets the action-name and associated string target value of an
         * actionable widget.
         * 
         * `detailed_action_name` is a string in the format accepted by
         * `g_action_parse_detailed_name()`.
         * 
         * (Note that prior to version 3.22.25,
         * this function is only usable for actions with a simple "s" target, and
         * `detailed_action_name` must be of the form `"action::target"` where
         * `action` is the action name and `target` is the string to use
         * as the target.)
         * @param detailed_action_name the detailed action name
         */
        set_detailed_action_name(detailed_action_name: string): void;

        /**
         * Gets the action name for `actionable`.
         * 
         * See `gtk_actionable_set_action_name()` for more information.
         * @virtual
         */
        vfunc_get_action_name(): (string | null);

        /**
         * Gets the current target value of `actionable`.
         * 
         * See `gtk_actionable_set_action_target_value()` for more information.
         * @virtual
         */
        vfunc_get_action_target_value(): GLib.Variant;

        /**
         * Specifies the name of the action with which this widget should be
         * associated.  If `action_name` is `null` then the widget will be
         * unassociated from any previous action.
         * 
         * Usually this function is used when the widget is located (or will be
         * located) within the hierarchy of a {@link Gtk.ApplicationWindow}.
         * 
         * Names are of the form “win.save” or “app.quit” for actions on the
         * containing {@link Gtk.ApplicationWindow} or its associated {@link Gtk.Application},
         * respectively.  This is the same form used for actions in the {@link Gio.Menu}
         * associated with the window.
         * @param action_name an action name, or `null`
         * @virtual
         */
        vfunc_set_action_name(action_name: (string | null)): void;

        /**
         * Sets the target value of an actionable widget.
         * 
         * If `target_value` is `null` then the target value is unset.
         * 
         * The target value has two purposes.  First, it is used as the
         * parameter to activation of the action associated with the
         * {@link Gtk.Actionable} widget. Second, it is used to determine if the widget
         * should be rendered as “active” — the widget is active if the state
         * is equal to the given target.
         * 
         * Consider the example of associating a set of buttons with a {@link Gio.Action}
         * with string state in a typical “radio button” situation.  Each button
         * will be associated with the same action, but with a different target
         * value for that action.  Clicking on a particular button will activate
         * the action with the target of that button, which will typically cause
         * the action’s state to change to that value.  Since the action’s state
         * is now equal to the target value of the button, the button will now
         * be rendered as active (and the other buttons, with different targets,
         * rendered inactive).
         * @param target_value a {@link GLib.Variant} to set as the target value, or `null`
         * @virtual
         */
        vfunc_set_action_target_value(target_value: (GLib.Variant | null)): void;

        /**
         * This is a utility function for {@link Gtk.Activatable} implementors.
         * 
         * When implementing {@link Gtk.Activatable} you must call this when
         * handling changes of the {@link Gtk.Activatable.related_action}, and
         * you must also use this to break references in {@link GObject.Object}->dispose().
         * 
         * This function adds a reference to the currently set related
         * action for you, it also makes sure the {@link Gtk.Activatable}->update()
         * method is called when the related {@link Gtk.Action} properties change
         * and registers to the action’s proxy list.
         * 
         * > Be careful to call this before setting the local
         * > copy of the {@link Gtk.Action} property, since this function uses
         * > `gtk_activatable_get_related_action()` to retrieve the
         * > previous action.
         * @param action the {@link Gtk.Action} to set
         */
        do_set_related_action(action: Gtk.Action): void;

        /**
         * Gets the related {@link Gtk.Action} for `activatable`.
         * @returns the related {@link Gtk.Action} if one is set.
         */
        get_related_action(): Gtk.Action;

        /**
         * Gets whether this activatable should reset its layout
         * and appearance when setting the related action or when
         * the action changes appearance.
         * @returns whether `activatable` uses its actions appearance.
         */
        get_use_action_appearance(): boolean;

        /**
         * Sets the related action on the `activatable` object.
         * 
         * > {@link Gtk.Activatable} implementors need to handle the {@link Gtk.Activatable.related_action}
         * > property and call `gtk_activatable_do_set_related_action()` when it changes.
         * @param action the {@link Gtk.Action} to set
         */
        set_related_action(action: Gtk.Action): void;

        /**
         * Sets whether this activatable should reset its layout and appearance
         * when setting the related action or when the action changes appearance
         * 
         * > {@link Gtk.Activatable} implementors need to handle the
         * > {@link Gtk.Activatable.use_action_appearance} property and call
         * > `gtk_activatable_sync_action_properties()` to update `activatable`
         * > if needed.
         * @param use_appearance whether to use the actions appearance
         */
        set_use_action_appearance(use_appearance: boolean): void;

        /**
         * This is called to update the activatable completely, this is called
         * internally when the {@link Gtk.Activatable.related_action} property is set
         * or unset and by the implementing class when
         * {@link Gtk.Activatable.use_action_appearance} changes.
         * @param action the related {@link Gtk.Action} or `null`
         */
        sync_action_properties(action: (Gtk.Action | null)): void;

        /**
         * This is called to update the activatable completely, this is called
         * internally when the {@link Gtk.Activatable.related_action} property is set
         * or unset and by the implementing class when
         * {@link Gtk.Activatable.use_action_appearance} changes.
         * @param action the related {@link Gtk.Action} or `null`
         * @virtual
         */
        vfunc_sync_action_properties(action: (Gtk.Action | null)): void;

        /**
         * Called to update the activatable when its related action’s properties change.
         * You must check the {@link Gtk.Activatable.use_action_appearance} property only apply action
         * properties that are meant to effect the appearance accordingly.
         * @param action 
         * @param property_name 
         * @virtual
         */
        vfunc_update(action: Gtk.Action, property_name: string): void;

        /**
         * For widgets that can be “activated” (buttons, menu items, etc.)
         * this function activates them. Activation is what happens when you
         * press Enter on a widget during key navigation. If `widget` isn't
         * activatable, the function returns `false`.
         * @returns `true` if the widget was activatable
         */
        activate(): boolean;

        /**
         * @param args 
         */
        // Conflicted with Gtk.MenuItem.activate
        activate(...args: never[]): any;

        /**
         * Emits a {@link Gtk.Widget.SignalSignatures.child_notify | Gtk.Widget::child-notify} signal for the
         * [child property][child-properties] `child_property`
         * on `widget`.
         * 
         * This is the analogue of `g_object_notify()` for child properties.
         * 
         * Also see `gtk_container_child_notify()`.
         * @param child_property the name of a child property installed on the                  class of `widget`’s parent
         */
        child_notify(child_property: string): void;

        /**
         * @param args 
         */
        // Conflicted with Gtk.Container.child_notify
        child_notify(...args: never[]): any;

        /**
         * Given an accelerator group, `accel_group`, and an accelerator path,
         * `accel_path`, sets up an accelerator in `accel_group` so whenever the
         * key binding that is defined for `accel_path` is pressed, `widget`
         * will be activated.  This removes any accelerators (for any
         * accelerator group) installed by previous calls to
         * `gtk_widget_set_accel_path()`. Associating accelerators with
         * paths allows them to be modified by the user and the modifications
         * to be saved for future use. (See `gtk_accel_map_save()`.)
         * 
         * This function is a low level function that would most likely
         * be used by a menu creation system like {@link Gtk.UIManager}. If you
         * use {@link Gtk.UIManager}, setting up accelerator paths will be done
         * automatically.
         * 
         * Even when you you aren’t using {@link Gtk.UIManager}, if you only want to
         * set up accelerators on menu items `gtk_menu_item_set_accel_path()`
         * provides a somewhat more convenient interface.
         * 
         * Note that `accel_path` string will be stored in a {@link GLib.Quark}. Therefore, if you
         * pass a static string, you can save some memory by interning it first with
         * `g_intern_static_string()`.
         * @param accel_path path used to look up the accelerator
         * @param accel_group a {@link Gtk.AccelGroup}.
         */
        set_accel_path(accel_path: (string | null), accel_group: (Gtk.AccelGroup | null)): void;

        /**
         * @param args 
         */
        // Conflicted with Gtk.MenuItem.set_accel_path
        set_accel_path(...args: never[]): any;
    }


    namespace Pager {
        // Signal signatures
        interface SignalSignatures extends Gtk.Widget.SignalSignatures {
            "notify::handle": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Widget.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {
            handle: Handle;
        }
    }

    /**
     * The {@link Wnck.Pager} struct contains only private fields and should not be
     * directly accessed.
     * @gir-type Class
     */
    class Pager extends Gtk.Widget implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<Pager>;

        // Properties
        /**
         * @construct-only
         */
        get handle(): Handle;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Pager.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Pager.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Pager;

        static new_with_handle(handle: Handle): Pager;

        // Signals
        /** @signal */
        connect<K extends keyof Pager.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Pager.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Pager.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Pager.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Pager.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Pager.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @returns `true` if the `pager` wraps workspaces on a scroll event that hits a border, `false` otherwise.
         */
        get_wrap_on_scroll(): boolean;

        /**
         * Sets the display mode for `pager` to `mode`.
         * @param mode a display mode.
         */
        set_display_mode(mode: PagerDisplayMode): void;

        /**
         * Tries to change the number of rows in the layout of {@link Wnck.Workspace} on the
         * {@link Wnck.Screen} `pager` is watching. Since no more than one application should
         * set this property of a {@link Wnck.Screen} at a time, setting the layout is not
         * guaranteed to work.
         * 
         * If `pager` has not been added to a widget hierarchy, the call will fail
         * because `pager` can't know the screen on which to modify the layout.
         * @param n_rows the number of rows to use for the layout of {@link Wnck.Workspace} on the {@link Wnck.Screen} `pager` is watching.
         * @returns `true` if the layout of {@link Wnck.Workspace} has been successfully changed or did not need to be changed, `false` otherwise.
         */
        set_n_rows(n_rows: number): boolean;

        /**
         * Tries to change the orientation of the layout of {@link Wnck.Workspace} on the
         * {@link Wnck.Screen} `pager` is watching. Since no more than one application should
         * set this property of a {@link Wnck.Screen} at a time, setting the layout is not
         * guaranteed to work.
         * 
         * If `orientation` is {@link Gtk.Orientation.HORIZONTAL}, the {@link Wnck.Workspace} will be
         * laid out in rows, with the first {@link Wnck.Workspace} in the top left corner.
         * 
         * If `orientation` is {@link Gtk.Orientation.VERTICAL}, the {@link Wnck.Workspace} will be
         * laid out in columns, with the first {@link Wnck.Workspace} in the top left corner.
         * 
         * For example, if the layout contains one row, but the orientation of the
         * layout is vertical, the {@link Wnck.Pager} will display a column of {@link Wnck.Workspace}.
         * 
         * Note that setting the orientation will have an effect on the geometry
         * management: if `orientation` is {@link Gtk.Orientation.HORIZONTAL},
         * {@link Gtk.SizeRequestMode.WIDTH_FOR_HEIGHT} will be used as request mode; if
         * `orientation` is {@link Gtk.Orientation.VERTICAL}, GTK_SIZE_REQUEST_HEIGHT_FOR_WIDTH
         * will be used instead.
         * 
         * If `pager` has not been added to a widget hierarchy, the call will fail
         * because `pager` can't know the screen on which to modify the orientation.
         * @param orientation orientation to use for the layout of {@link Wnck.Workspace} on the {@link Wnck.Screen} `pager` is watching.
         * @returns `true` if the layout of {@link Wnck.Workspace} has been successfully changed or did not need to be changed, `false` otherwise.
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
         * function is proper integration of {@link Wnck.Pager} in panels with non-system
         * backgrounds.
         * @param shadow_type a shadow type.
         */
        set_shadow_type(shadow_type: Gtk.ShadowType): void;

        /**
         * Sets `pager` to display all {@link Wnck.Workspace} or not, according to
         * `show_all_workspaces`.
         * @param show_all_workspaces whether to display all {@link Wnck.Workspace} in `pager`.
         */
        set_show_all(show_all_workspaces: boolean): void;

        /**
         * Sets the wrapping behavior of the `pager`. Setting it to `true` will
         * wrap arround to the start when scrolling over the end and vice
         * versa. By default it is set to `false`.
         * @param wrap_on_scroll a boolean.
         */
        set_wrap_on_scroll(wrap_on_scroll: boolean): void;

        /**
         * Adds a child to `buildable`. `type` is an optional string
         * describing how the child should be added.
         * @param builder a {@link Gtk.Builder}
         * @param child child to add
         * @param type kind of child or `null`
         */
        add_child(builder: Gtk.Builder, child: GObject.Object, type: (string | null)): void;

        /**
         * Constructs a child of `buildable` with the name `name`.
         * 
         * {@link Gtk.Builder} calls this function if a “constructor” has been
         * specified in the UI definition.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param name name of child to construct
         * @returns the constructed child
         */
        construct_child<T = GObject.Object>(builder: Gtk.Builder, name: string): T;

        /**
         * This is similar to `gtk_buildable_parser_finished()` but is
         * called once for each custom tag handled by the `buildable`.
         * @param builder a {@link Gtk.Builder}
         * @param child child object or `null` for non-child tags
         * @param tagname the name of the tag
         * @param data user data created in custom_tag_start
         */
        custom_finished(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string, data: (any | null)): void;

        /**
         * This is called at the end of each custom element handled by
         * the buildable.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @param data user data that will be passed in to parser functions
         */
        custom_tag_end(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string, data: (any | null)): void;

        /**
         * This is called for each unknown element under `<child>`.
         * @param builder a {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @returns `true` if a object has a custom implementation, `false`          if it doesn't.
         */
        custom_tag_start(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string): [boolean, GLib.MarkupParser, any];

        /**
         * Get the internal child called `childname` of the `buildable` object.
         * @param builder a {@link Gtk.Builder}
         * @param childname name of child
         * @returns the internal child of the buildable object
         */
        get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;

        /**
         * Gets the name of the `buildable` object.
         * 
         * {@link Gtk.Builder} sets the name based on the
         * [GtkBuilder UI definition][BUILDER-UI]
         * used to construct the `buildable`.
         * @returns the name set with `gtk_buildable_set_name()`
         */
        get_name(): string;

        /**
         * Called when the builder finishes the parsing of a
         * [GtkBuilder UI definition][BUILDER-UI].
         * Note that this will be called once for each time
         * `gtk_builder_add_from_file()` or `gtk_builder_add_from_string()`
         * is called on a builder.
         * @param builder a {@link Gtk.Builder}
         */
        parser_finished(builder: Gtk.Builder): void;

        /**
         * Sets the property name `name` to `value` on the `buildable` object.
         * @param builder a {@link Gtk.Builder}
         * @param name name of property
         * @param value value of property
         */
        set_buildable_property(builder: Gtk.Builder, name: string, value: (GObject.Value | any)): void;

        /**
         * Sets the name of the `buildable` object.
         * @param name name to set
         */
        set_name(name: string): void;

        /**
         * Adds a child to `buildable`. `type` is an optional string
         * describing how the child should be added.
         * @param builder a {@link Gtk.Builder}
         * @param child child to add
         * @param type kind of child or `null`
         * @virtual
         */
        vfunc_add_child(builder: Gtk.Builder, child: GObject.Object, type: (string | null)): void;

        /**
         * Constructs a child of `buildable` with the name `name`.
         * 
         * {@link Gtk.Builder} calls this function if a “constructor” has been
         * specified in the UI definition.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param name name of child to construct
         * @virtual
         */
        vfunc_construct_child<T = GObject.Object>(builder: Gtk.Builder, name: string): T;

        /**
         * This is similar to `gtk_buildable_parser_finished()` but is
         * called once for each custom tag handled by the `buildable`.
         * @param builder a {@link Gtk.Builder}
         * @param child child object or `null` for non-child tags
         * @param tagname the name of the tag
         * @param data user data created in custom_tag_start
         * @virtual
         */
        vfunc_custom_finished(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string, data: (any | null)): void;

        /**
         * This is called at the end of each custom element handled by
         * the buildable.
         * @param builder {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @param data user data that will be passed in to parser functions
         * @virtual
         */
        vfunc_custom_tag_end(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string, data: (any | null)): void;

        /**
         * This is called for each unknown element under `<child>`.
         * @param builder a {@link Gtk.Builder} used to construct this object
         * @param child child object or `null` for non-child tags
         * @param tagname name of tag
         * @virtual
         */
        vfunc_custom_tag_start(builder: Gtk.Builder, child: (GObject.Object | null), tagname: string): [boolean, GLib.MarkupParser, any];

        /**
         * Get the internal child called `childname` of the `buildable` object.
         * @param builder a {@link Gtk.Builder}
         * @param childname name of child
         * @virtual
         */
        vfunc_get_internal_child<T = GObject.Object>(builder: Gtk.Builder, childname: string): T;

        /**
         * Gets the name of the `buildable` object.
         * 
         * {@link Gtk.Builder} sets the name based on the
         * [GtkBuilder UI definition][BUILDER-UI]
         * used to construct the `buildable`.
         * @virtual
         */
        vfunc_get_name(): string;

        /**
         * Called when the builder finishes the parsing of a
         * [GtkBuilder UI definition][BUILDER-UI].
         * Note that this will be called once for each time
         * `gtk_builder_add_from_file()` or `gtk_builder_add_from_string()`
         * is called on a builder.
         * @param builder a {@link Gtk.Builder}
         * @virtual
         */
        vfunc_parser_finished(builder: Gtk.Builder): void;

        /**
         * Sets the property name `name` to `value` on the `buildable` object.
         * @param builder a {@link Gtk.Builder}
         * @param name name of property
         * @param value value of property
         * @virtual
         */
        vfunc_set_buildable_property(builder: Gtk.Builder, name: string, value: unknown): void;

        /**
         * Sets the name of the `buildable` object.
         * @param name name to set
         * @virtual
         */
        vfunc_set_name(name: string): void;
    }


    namespace Screen {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * Emitted when the active window on `screen` has changed.
             * @signal
             * @run-last
             */
            "active-window-changed": (arg0: Window) => void;
            /**
             * Emitted when the active workspace on `screen` has changed.
             * @signal
             * @run-last
             */
            "active-workspace-changed": (arg0: Workspace) => void;
            /**
             * Emitted when a {@link Wnck.Application} is closed on `screen`.
             * @signal
             * @run-last
             */
            "application-closed": (arg0: Application) => void;
            /**
             * Emitted when a new {@link Wnck.Application} is opened on `screen`.
             * @signal
             * @run-last
             */
            "application-opened": (arg0: Application) => void;
            /**
             * Emitted when the background on the root window of `screen` has changed.
             * @signal
             * @run-last
             */
            "background-changed": () => void;
            /**
             * Emitted when a {@link Wnck.ClassGroup} is closed on `screen`.
             * @signal
             * @since 2.20
             * @run-last
             */
            "class-group-closed": (arg0: ClassGroup) => void;
            /**
             * Emitted when a new {@link Wnck.ClassGroup} is opened on `screen`.
             * @signal
             * @since 2.20
             * @run-last
             */
            "class-group-opened": (arg0: ClassGroup) => void;
            /**
             * Emitted when "showing the desktop" mode of `screen` is toggled.
             * @signal
             * @since 2.20
             * @run-last
             */
            "showing-desktop-changed": () => void;
            /**
             * Emitted when a viewport position has changed in a {@link Wnck.Workspace} of
             * `screen` or when a {@link Wnck.Workspace} of `screen` gets or loses its viewport.
             * @signal
             * @since 2.20
             * @run-last
             */
            "viewports-changed": () => void;
            /**
             * Emitted when a {@link Wnck.Window} is closed on `screen`.
             * @signal
             * @run-last
             */
            "window-closed": (arg0: Window) => void;
            /**
             * Emitted when the window manager on `screen` has changed.
             * @signal
             * @since 2.20
             * @run-last
             */
            "window-manager-changed": () => void;
            /**
             * Emitted when a new {@link Wnck.Window} is opened on `screen`.
             * @signal
             * @run-last
             */
            "window-opened": (arg0: Window) => void;
            /**
             * Emitted when the stacking order of {@link Wnck.Window} on `screen` has changed.
             * @signal
             * @run-last
             */
            "window-stacking-changed": () => void;
            /**
             * Emitted when a {@link Wnck.Workspace} is created on `screen`.
             * @signal
             * @run-last
             */
            "workspace-created": (arg0: Workspace) => void;
            /**
             * Emitted when a {@link Wnck.Workspace} is destroyed on `screen`.
             * @signal
             * @run-last
             */
            "workspace-destroyed": (arg0: Workspace) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {

        }
    }

    /**
     * The {@link Wnck.Screen} struct contains only private fields and should not be
     * directly accessed.
     * @gir-type Class
     */
    class Screen extends GObject.Object {
        static $gtype: GObject.GType<Screen>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Screen.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Screen.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof Screen.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Screen.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Screen.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Screen.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Screen.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Screen.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Frees the content of `layout`. This does not free `layout` itself, so you
         * might want to free `layout` yourself after calling this.
         * @param layout a {@link Wnck.WorkspaceLayout}.
         */
        static free_workspace_layout(layout: WorkspaceLayout): void;

        /**
         * Gets the {@link Wnck.Screen} for a given screen on the default display.
         * @param index screen number, starting from 0.
         */
        static get(index: number): Screen;

        /**
         * Gets the default {@link Wnck.Screen} on the default display.
         */
        static get_default(): (Screen | null);

        /**
         * Gets the {@link Wnck.Screen} for the root window at `root_window_id`, or
         * `null` if no {@link Wnck.Screen} exists for this root window.
         * 
         * This function does not work if `wnck_screen_get()` was not called for the
         * sought {@link Wnck.Screen} before, and returns `null`.
         * @param root_window_id an X window ID.
         */
        static get_for_root(root_window_id: (bigint | number)): Screen;

        // Virtual methods
        /**
         * @param previous_window 
         * @virtual
         */
        vfunc_active_window_changed(previous_window: Window): void;

        /**
         * @param previous_workspace 
         * @virtual
         */
        vfunc_active_workspace_changed(previous_workspace: Workspace): void;

        /**
         * @param app 
         * @virtual
         */
        vfunc_application_closed(app: Application): void;

        /**
         * @param app 
         * @virtual
         */
        vfunc_application_opened(app: Application): void;

        /**
         * @virtual
         */
        vfunc_background_changed(): void;

        /**
         * @param class_group 
         * @virtual
         */
        vfunc_class_group_closed(class_group: ClassGroup): void;

        /**
         * @param class_group 
         * @virtual
         */
        vfunc_class_group_opened(class_group: ClassGroup): void;

        /**
         * @virtual
         */
        vfunc_showing_desktop_changed(): void;

        /**
         * @virtual
         */
        vfunc_viewports_changed(): void;

        /**
         * @param window 
         * @virtual
         */
        vfunc_window_closed(window: Window): void;

        /**
         * @virtual
         */
        vfunc_window_manager_changed(): void;

        /**
         * @param window 
         * @virtual
         */
        vfunc_window_opened(window: Window): void;

        /**
         * @virtual
         */
        vfunc_window_stacking_changed(): void;

        /**
         * @param space 
         * @virtual
         */
        vfunc_workspace_created(space: Workspace): void;

        /**
         * @param space 
         * @virtual
         */
        vfunc_workspace_destroyed(space: Workspace): void;

        // Methods
        /**
         * Calculates the layout of {@link Wnck.Workspace}, with additional information like
         * the row and column of the {@link Wnck.Workspace} with index `space_index`.
         * @param num_workspaces the number of {@link Wnck.Workspace} on `screen`, or -1 to let `wnck_screen_calc_workspace_layout()` find this number.
         * @param space_index the index of a {@link Wnck.Workspace}.
         * @param layout return location for the layout of {@link Wnck.Workspace} with additional information.
         */
        calc_workspace_layout(num_workspaces: number, space_index: number, layout: WorkspaceLayout): void;

        /**
         * Asks the window manager to change the number of {@link Wnck.Workspace} on `screen`.
         * @param count the number of {@link Wnck.Workspace} to request.
         */
        change_workspace_count(count: number): void;

        /**
         * Synchronously and immediately updates the list of {@link Wnck.Window} on `screen`.
         * This bypasses the standard update mechanism, where the list of {@link Wnck.Window}
         * is updated in the idle loop.
         * 
         * This is usually a bad idea for both performance and correctness reasons (to
         * get things right, you need to write model-view code that tracks changes, not
         * get a static list of open windows). However, this function can be useful for
         * small applications that just do something and then exit.
         */
        force_update(): void;

        /**
         * Gets the active {@link Wnck.Window} on `screen`. May return `null` sometimes, since
         * not all window managers guarantee that a window is always active.
         * @returns the active {@link Wnck.Window} on `screen`, or `null`. The returned {@link Wnck.Window} is owned by libwnck and must not be referenced or unreferenced.
         */
        get_active_window(): Window;

        /**
         * Gets the active {@link Wnck.Workspace} on `screen`. May return `null` sometimes,
         * if libwnck is in a weird state due to the asynchronous nature of the
         * interaction with the window manager.
         * @returns the active {@link Wnck.Workspace} on `screen`, or `null`. The returned {@link Wnck.Workspace} is owned by libwnck and must not be referenced or unreferenced.
         */
        get_active_workspace(): Workspace;

        /**
         * Gets the X window ID of the background pixmap of `screen`.
         * @returns the X window ID of the background pixmap of `screen`.
         */
        get_background_pixmap(): number;

        /**
         * Gets the handle.
         * @returns a {@link Wnck.Handle}, or `null`.
         */
        get_handle(): Handle;

        /**
         * Gets the height of `screen`.
         * @returns the height of `screen`.
         */
        get_height(): number;

        /**
         * Gets the index of `screen` on the display to which it belongs. The first
         * {@link Wnck.Screen} has an index of 0.
         * @returns the index of `space` on `screen`, or -1 on errors.
         */
        get_number(): number;

        /**
         * Gets the previously active {@link Wnck.Window} on `screen`. May return `null`
         * sometimes, since not all window managers guarantee that a window is always
         * active.
         * @returns the previously active {@link Wnck.Window} on `screen`, or `null`. The returned {@link Wnck.Window} is owned by libwnck and must not be referenced or unreferenced.
         */
        get_previously_active_window(): Window;

        /**
         * Gets whether `screen` is in the "showing the desktop" mode. This mode is
         * changed when a {@link Wnck.Screen.SignalSignatures.showing_desktop_changed | Wnck.Screen::showing-desktop-changed} signal gets emitted.
         * @returns `true` if `window` is fullscreen, `false` otherwise.
         */
        get_showing_desktop(): boolean;

        /**
         * Gets the width of `screen`.
         * @returns the width of `screen`.
         */
        get_width(): number;

        /**
         * Gets the name of the window manager.
         * @returns the name of the window manager, or `null` if the window manager does not comply with the <ulink url="http://standards.freedesktop.org/wm-spec/wm-spec-latest.html">EWMH</ulink> specification.
         */
        get_window_manager_name(): string;

        /**
         * Gets the list of {@link Wnck.Window} on `screen`. The list is not in a defined
         * order, but should be "stable" (windows should not be reordered in it).
         * However, the stability of the list is established by the window manager, so
         * don't blame libwnck if it breaks down.
         * @returns the list of {@link Wnck.Window} on `screen`, or `null` if there is no window on `screen`. The list should not be modified nor freed, as it is owned by `screen`.
         */
        get_windows(): Window[];

        /**
         * Gets the list of {@link Wnck.Window} on `screen` in bottom-to-top order.
         * @returns the list of {@link Wnck.Window} in stacking order on `screen`, or `null` if there is no window on `screen`. The list should not be modified nor freed, as it is owned by `screen`.
         */
        get_windows_stacked(): Window[];

        /**
         * Gets the {@link Wnck.Workspace} numbered `workspace` on `screen`.
         * @param workspace a workspace index, starting from 0.
         * @returns the {@link Wnck.Workspace} numbered `workspace` on `screen`, or `null` if no such workspace exists. The returned {@link Wnck.Workspace} is owned by libwnck and must not be referenced or unreferenced.
         */
        get_workspace(workspace: number): Workspace;

        /**
         * Gets the number of {@link Wnck.Workspace} on `screen`.
         * @returns the number of {@link Wnck.Workspace} on `screen`.
         */
        get_workspace_count(): number;

        /**
         * Gets the list of {@link Wnck.Workspace} on `screen`. The list is ordered: the
         * first element in the list is the first {@link Wnck.Workspace}, etc..
         * @returns the list of {@link Wnck.Workspace} on `screen`. The list should not be modified nor freed, as it is owned by `screen`.
         */
        get_workspaces(): Workspace[];

        /**
         * Asks the window manager to move the viewport of the current {@link Wnck.Workspace}
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
         * the window manager starts `wnck_screen_net_wm_supports()` will return `false`
         * for every property.
         * 
         * See also `gdk_x11_screen_supports_net_wm_hint()` in GDK.
         * @param atom a property atom.
         * @returns `true` if the window manager for `screen` supports the `atom` hint, `false` otherwise.
         */
        net_wm_supports(atom: string): boolean;

        /**
         * Releases the ownership of the layout of {@link Wnck.Workspace} on `screen`.
         * `current_token` is used to verify that the caller is the owner of the layout.
         * If the verification fails, nothing happens.
         * @param current_token the token obtained through `wnck_screen_try_set_workspace_layout()`.
         */
        release_workspace_layout(current_token: number): void;

        /**
         * Asks the window manager to set the "showing the desktop" mode on `screen`
         * according to `show`.
         * @param show whether to activate the "showing the desktop" mode on `screen`.
         */
        toggle_showing_desktop(show: boolean): void;

        /**
         * Tries to modify the layout of {@link Wnck.Workspace} on `screen`. To do this, tries
         * to acquire ownership of the layout. If the current process is the owner of
         * the layout, `current_token` is used to determine if the caller is the owner
         * (there might be more than one part of the same process trying to set the
         * layout). Since no more than one application should set this property of
         * `screen` at a time, setting the layout is not guaranteed to work.
         * 
         * If `rows` is 0, the actual number of rows will be determined based on
         * `columns` and the number of {@link Wnck.Workspace}. If `columns` is 0, the actual
         * number of columns will be determined based on `rows` and the number of
         * {@link Wnck.Workspace}. `rows` and `columns` must not be 0 at the same time.
         * 
         * You have to release the ownership of the layout with
         * `wnck_screen_release_workspace_layout()` when you do not need it anymore.
         * @param current_token a token. Use 0 if you do not called `wnck_screen_try_set_workspace_layout()` before, or if you did not keep the old token.
         * @param rows the number of rows to use for the {@link Wnck.Workspace} layout.
         * @param columns the number of columns to use for the {@link Wnck.Workspace} layout.
         * @returns a token to use for future calls to `wnck_screen_try_set_workspace_layout()` and to `wnck_screen_release_workspace_layout()`, or 0 if the layout could not be set.
         */
        try_set_workspace_layout(current_token: number, rows: number, columns: number): number;
    }


    namespace Selector {
        // Signal signatures
        interface SignalSignatures extends Gtk.MenuBar.SignalSignatures {
            "notify::handle": (pspec: GObject.ParamSpec) => void;
            "notify::child-pack-direction": (pspec: GObject.ParamSpec) => void;
            "notify::pack-direction": (pspec: GObject.ParamSpec) => void;
            "notify::take-focus": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.MenuBar.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {
            handle: Handle;
        }
    }

    /**
     * The {@link Wnck.Selector} struct contains only private fields and should not be
     * directly accessed.
     * @gir-type Class
     */
    class Selector extends Gtk.MenuBar implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<Selector>;

        // Properties
        /**
         * @construct-only
         */
        get handle(): Handle;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Selector.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Selector.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Selector;

        static new_with_handle(handle: Handle): Selector;

        // Signals
        /** @signal */
        connect<K extends keyof Selector.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Selector.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Selector.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Selector.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Selector.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Selector.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace Tasklist {
        // Signal signatures
        interface SignalSignatures extends Gtk.Container.SignalSignatures {
            /**
             * Emitted when the task is entered.
             * @signal
             * @run-last
             */
            "task-enter-notify": (arg0: (any | null)) => void;
            /**
             * Emitted when the task is entered.
             * @signal
             * @run-last
             */
            "task-leave-notify": (arg0: (any | null)) => void;
            "notify::handle": (pspec: GObject.ParamSpec) => void;
            "notify::tooltips-enabled": (pspec: GObject.ParamSpec) => void;
            "notify::border-width": (pspec: GObject.ParamSpec) => void;
            "notify::child": (pspec: GObject.ParamSpec) => void;
            "notify::resize-mode": (pspec: GObject.ParamSpec) => void;
            "notify::app-paintable": (pspec: GObject.ParamSpec) => void;
            "notify::can-default": (pspec: GObject.ParamSpec) => void;
            "notify::can-focus": (pspec: GObject.ParamSpec) => void;
            "notify::composite-child": (pspec: GObject.ParamSpec) => void;
            "notify::double-buffered": (pspec: GObject.ParamSpec) => void;
            "notify::events": (pspec: GObject.ParamSpec) => void;
            "notify::expand": (pspec: GObject.ParamSpec) => void;
            "notify::focus-on-click": (pspec: GObject.ParamSpec) => void;
            "notify::halign": (pspec: GObject.ParamSpec) => void;
            "notify::has-default": (pspec: GObject.ParamSpec) => void;
            "notify::has-focus": (pspec: GObject.ParamSpec) => void;
            "notify::has-tooltip": (pspec: GObject.ParamSpec) => void;
            "notify::height-request": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand": (pspec: GObject.ParamSpec) => void;
            "notify::hexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::is-focus": (pspec: GObject.ParamSpec) => void;
            "notify::margin": (pspec: GObject.ParamSpec) => void;
            "notify::margin-bottom": (pspec: GObject.ParamSpec) => void;
            "notify::margin-end": (pspec: GObject.ParamSpec) => void;
            "notify::margin-left": (pspec: GObject.ParamSpec) => void;
            "notify::margin-right": (pspec: GObject.ParamSpec) => void;
            "notify::margin-start": (pspec: GObject.ParamSpec) => void;
            "notify::margin-top": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::no-show-all": (pspec: GObject.ParamSpec) => void;
            "notify::opacity": (pspec: GObject.ParamSpec) => void;
            "notify::parent": (pspec: GObject.ParamSpec) => void;
            "notify::receives-default": (pspec: GObject.ParamSpec) => void;
            "notify::scale-factor": (pspec: GObject.ParamSpec) => void;
            "notify::sensitive": (pspec: GObject.ParamSpec) => void;
            "notify::style": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-markup": (pspec: GObject.ParamSpec) => void;
            "notify::tooltip-text": (pspec: GObject.ParamSpec) => void;
            "notify::valign": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand": (pspec: GObject.ParamSpec) => void;
            "notify::vexpand-set": (pspec: GObject.ParamSpec) => void;
            "notify::visible": (pspec: GObject.ParamSpec) => void;
            "notify::width-request": (pspec: GObject.ParamSpec) => void;
            "notify::window": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Gtk.Container.ConstructorProps, Atk.ImplementorIface.ConstructorProps, Gtk.Buildable.ConstructorProps {
            handle: Handle;
            tooltips_enabled: boolean;
            tooltipsEnabled: boolean;
        }
    }

    /**
     * The {@link Wnck.Tasklist} struct contains only private fields and should not be
     * directly accessed.
     * @gir-type Class
     */
    class Tasklist extends Gtk.Container implements Atk.ImplementorIface, Gtk.Buildable {
        static $gtype: GObject.GType<Tasklist>;

        // Properties
        /**
         * @construct-only
         */
        get handle(): Handle;

        /**
         * @default true
         */
        get tooltips_enabled(): boolean;
        set tooltips_enabled(val: boolean);

        /**
         * @default true
         */
        get tooltipsEnabled(): boolean;
        set tooltipsEnabled(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Tasklist.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Tasklist.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): Tasklist;

        static new_with_handle(handle: Handle): Tasklist;

        // Signals
        /** @signal */
        connect<K extends keyof Tasklist.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Tasklist.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Tasklist.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Tasklist.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Tasklist.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Tasklist.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * Gets the scroll behavior of the `tasklist`.
         */
        get_scroll_enabled(): boolean;

        /**
         * Since a {@link Wnck.Tasklist} does not have a fixed size ({@link Wnck.Window} can be grouped
         * when needed, for example), the standard size request mechanism in GTK+ is
         * not enough to announce what sizes can be used by `tasklist`. The size hints
         * mechanism is a solution for this. See `panel_applet_set_size_hints()` for more
         * information.
         * @param n_elements return location for the number of elements in the array returned by this function. This number should always be pair.
         * @returns a list of size hints that can be used to allocate an appropriate size for `tasklist`.
         */
        get_size_hint_list(n_elements: number): number;

        /**
         * Returns whether tooltips are enabled on the `tasklist`.
         */
        get_tooltips_enabled(): boolean;

        /**
         * Sets the relief type of the buttons in `tasklist` to `relief`. The main use of
         * this function is proper integration of {@link Wnck.Tasklist} in panels with
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
         * group {@link Wnck.Window} in the same {@link Wnck.Application} in only one button. This
         * limit is valid only when the grouping policy of `tasklist` is
         * {@link Wnck.TasklistGroupingType.AUTO_GROUP}.
         * @param limit a size in pixels.
         */
        set_grouping_limit(limit: number): void;

        /**
         * Sets `tasklist` to display {@link Wnck.Window} from all {@link Wnck.Workspace} or not,
         * according to `include_all_workspaces`.
         * 
         * Note that if the active {@link Wnck.Workspace} has a viewport and if
         * `include_all_workspaces` is `false`, then only the {@link Wnck.Window} visible in the
         * viewport are displayed in `tasklist`. The rationale for this is that the
         * viewport is generally used to implement workspace-like behavior. A
         * side-effect of this is that, when using multiple {@link Wnck.Workspace} with
         * viewport, it is not possible to show all {@link Wnck.Window} from a {@link Wnck.Workspace}
         * (even those that are not visible in the viewport) in `tasklist` without
         * showing all {@link Wnck.Window} from all {@link Wnck.Workspace}.
         * @param include_all_workspaces whether to display {@link Wnck.Window} from all {@link Wnck.Workspace} in `tasklist`.
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
         * This function can be used to integrate a {@link Wnck.Tasklist} in vertical panels.
         * @param orient a GtkOrientation.
         */
        set_orientation(orient: Gtk.Orientation): void;

        /**
         * Sets the scroll behavior of the `tasklist`. When set to `true`, a scroll
         * event over the tasklist will change the current window accordingly.
         * @param scroll_enabled a boolean.
         */
        set_scroll_enabled(scroll_enabled: boolean): void;

        /**
         * Sets `tasklist` to activate or not the {@link Wnck.Workspace} a {@link Wnck.Window} is on
         * when unminimizing it, according to `switch_workspace_on_unminimize`.
         * 
         * FIXME: does it still work?
         * @param switch_workspace_on_unminimize whether to activate the {@link Wnck.Workspace} a {@link Wnck.Window} is on when unminimizing it.
         */
        set_switch_workspace_on_unminimize(switch_workspace_on_unminimize: boolean): void;

        /**
         * Sets whether tooltips are enabled on the `tasklist`.
         * @param tooltips_enabled a boolean.
         */
        set_tooltips_enabled(tooltips_enabled: boolean): void;
    }


    namespace Window {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * Emitted when the actions availabilities for `window` change.
             * @signal
             * @run-last
             */
            "actions-changed": (arg0: WindowActions, arg1: WindowActions) => void;
            /**
             * Emitted when the class name or instance name of `window` changes.
             * @signal
             * @run-last
             */
            "class-changed": () => void;
            /**
             * Emitted when the geometry of `window` changes.
             * @signal
             * @run-last
             */
            "geometry-changed": () => void;
            /**
             * Emitted when the icon of `window` changes.
             * @signal
             * @run-last
             */
            "icon-changed": () => void;
            /**
             * Emitted when the name of `window` changes.
             * @signal
             * @run-last
             */
            "name-changed": () => void;
            /**
             * Emitted when the role of `window` changes.
             * @signal
             * @run-last
             */
            "role-changed": () => void;
            /**
             * Emitted when the state of `window` changes. This can happen when `window` is
             * (un)minimized, (un)maximized, (un)sticked, (un)shaded, (un)made above,
             * (un)made below, (un)set fullscreen, when it needs attention, etc. See
             * {@link Wnck.WindowState} for the complete list of states that might have changed.
             * @signal
             * @run-last
             */
            "state-changed": (arg0: WindowState, arg1: WindowState) => void;
            /**
             * Emitted when the EWMH type hint of the window changes.
             * @signal
             * @since 3.20
             * @run-last
             */
            "type-changed": () => void;
            /**
             * Emitted when the current workspace of `window` changes, or if `window` has
             * been pinned or unpinned.
             * @signal
             * @run-last
             */
            "workspace-changed": () => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {

        }
    }

    /**
     * The {@link Wnck.Window} struct contains only private fields and should not be
     * directly accessed.
     * @gir-type Class
     */
    class Window extends GObject.Object {
        static $gtype: GObject.GType<Window>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Window.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Window.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof Window.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Window.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Window.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Window.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Window.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Window.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Static methods
        /**
         * Gets a preexisting {@link Wnck.Window} for the X window `xwindow`. This will not
         * create a {@link Wnck.Window} if none exists. The function is robust against bogus
         * window IDs.
         * @param xwindow an X window ID.
         */
        static get(xwindow: (bigint | number)): Window;

        // Virtual methods
        /**
         * @param changed_mask 
         * @param new_actions 
         * @virtual
         */
        vfunc_actions_changed(changed_mask: WindowActions, new_actions: WindowActions): void;

        /**
         * @virtual
         */
        vfunc_class_changed(): void;

        /**
         * @virtual
         */
        vfunc_geometry_changed(): void;

        /**
         * @virtual
         */
        vfunc_icon_changed(): void;

        /**
         * @virtual
         */
        vfunc_name_changed(): void;

        /**
         * @virtual
         */
        vfunc_role_changed(): void;

        /**
         * @param changed_mask 
         * @param new_state 
         * @virtual
         */
        vfunc_state_changed(changed_mask: WindowState, new_state: WindowState): void;

        /**
         * @virtual
         */
        vfunc_type_changed(): void;

        /**
         * @virtual
         */
        vfunc_workspace_changed(): void;

        // Methods
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
         * @returns bitmask of actions that can be done for `window`.
         */
        get_actions(): WindowActions;

        /**
         * Gets the {@link Wnck.Application} to which `window` belongs.
         * @returns the {@link Wnck.Application} to which `window` belongs. The returned {@link Wnck.Application} is owned by libwnck and must not be referenced or unreferenced.
         */
        get_application(): Application;

        /**
         * Gets the {@link Wnck.ClassGroup} to which `window` belongs.
         * @returns the {@link Wnck.ClassGroup} to which `window` belongs. The returned {@link Wnck.ClassGroup} is owned by libwnck and must not be referenced or unreferenced.
         */
        get_class_group(): ClassGroup;

        /**
         * Gets the class group name from the <ulink
         * url="http://tronche.com/gui/x/icccm/sec-4.html&num;WM_CLASS">WM_CLASS Property</ulink>
         * for `window`.
         * 
         * The class group name is also the identifier name of the {@link Wnck.ClassGroup} to
         * which `window` belongs.
         * @returns the class group name for `window`, or `null` if `window` belongs to no class group.
         */
        get_class_group_name(): string;

        /**
         * Gets the class instance name from the <ulink
         * url="http://tronche.com/gui/x/icccm/sec-4.html&num;WM_CLASS">WM_CLASS Property</ulink>
         * for `window`.
         * 
         * The class instance name allows to differentiate windows belonging to the
         * same class group, so that they can use different resources.
         * @returns the class instance name for `window`, or `null` if `window` has no class instance.
         */
        get_class_instance_name(): string;

        /**
         * Gets the size and position of `window`, as last received
         * in a ConfigureNotify event (i.e. this call does not round-trip
         * to the server, just gets the last size we were notified of).
         * The X and Y coordinates are relative to the root window.
         * 
         * The window manager usually adds a frame around windows. If
         * you need to know the size of `window` with the frame, use
         * `wnck_window_get_geometry()`.
         */
        get_client_window_geometry(): [number, number, number, number];

        /**
         * Gets the size and position of `window`, including decorations. This
         * function uses the information last received in a ConfigureNotify
         * event and adjusts it according to the size of the frame that is
         * added by the window manager (this call does not round-trip to the
         * server, it just gets the last sizes that were notified). The
         * X and Y coordinates are relative to the root window.
         * 
         * If you need to know the actual size of `window` ignoring the frame
         * added by the window manager, use `wnck_window_get_client_window_geometry()`.
         */
        get_geometry(): [number, number, number, number];

        /**
         * Gets the group leader of the group of windows to which `window` belongs.
         * @returns the group leader of the group of windows to which `window` belongs, or the X window ID of `window` if `window` does not belong to any group.
         */
        get_group_leader(): number;

        /**
         * Gets the icon to be used for `window`. If no icon was found, a fallback
         * icon is used. `wnck_window_get_icon_is_fallback()` can be used to tell if the
         * icon is the fallback icon.
         * @returns the icon for `window`. The caller should reference the returned <classname>GdkPixbuf</classname> if it needs to keep the icon around.
         */
        get_icon(): GdkPixbuf.Pixbuf;

        /**
         * Gets whether a default fallback icon is used for `window` (because none
         * was set on `window`).
         * @returns `true` if the icon for `window` is a fallback, `false` otherwise.
         */
        get_icon_is_fallback(): boolean;

        /**
         * Gets the icon name of `window`, as it should be displayed for an icon
         * (minimized state). Always returns some value, even if `window` has no icon
         * name set; use `wnck_window_has_icon_name()` if you need to know whether the
         * returned icon name is "real" or not.
         * 
         * Contrast with `wnck_window_get_name()`, which returns `window`<!-- -->'s
         * title, not its icon title.
         * @returns the icon name of `window`, or a fallback icon name if no icon name is available.
         */
        get_icon_name(): string;

        /**
         * Gets the mini-icon to be used for `window`. If no mini-icon was found, a
         * fallback mini-icon is used. `wnck_window_get_icon_is_fallback()` can be used
         * to tell if the mini-icon is the fallback mini-icon.
         * @returns the mini-icon for `window`. The caller should reference the returned <classname>GdkPixbuf</classname> if it needs to keep the icon around.
         */
        get_mini_icon(): GdkPixbuf.Pixbuf;

        /**
         * Gets the name of `window`, as it should be displayed in a pager
         * or tasklist. Always returns some value, even if `window` has no name
         * set; use `wnck_window_has_name()` if you need to know whether the returned
         * name is "real" or not.
         * 
         * For icons titles, use `wnck_window_get_icon_name()` instead.
         * @returns the name of `window`, or a fallback name if no name is available.
         */
        get_name(): string;

        /**
         * Gets the process ID of `window`.
         * @returns the process ID of `window`, or 0 if none is available.
         */
        get_pid(): number;

        /**
         * Gets the role for `window`.
         * The role uniquely identifies a window among all windows that have the same
         * client leader window.
         * @returns role for `window`, or `null` if `window` has no role.
         */
        get_role(): string;

        /**
         * Gets the {@link Wnck.Screen} `window` is on.
         * @returns the {@link Wnck.Screen} `window` is on. The returned {@link Wnck.Screen} is owned by libwnck and must not be referenced or unreferenced.
         */
        get_screen(): Screen;

        /**
         * Gets the session ID for `window` in Latin-1 encoding.
         * NOTE: this is invalid UTF-8. You can't display this
         * string in a GTK+ widget without converting to UTF-8.
         * See `wnck_window_get_session_id_utf8()`.
         * @returns the session ID for `window` in Latin-1, or `null` if `window` has no session ID.
         */
        get_session_id(): string;

        /**
         * Gets the session ID for `window` in UTF-8 encoding.
         * The session ID should be in Latin-1 encoding, so the conversion should work,
         * but a broken client could set a session ID that might not be convertable to
         * UTF-8.
         * @returns the session ID for `window` in UTF-8, or `null` if `window` has no session ID.
         */
        get_session_id_utf8(): string;

        /**
         * Gets the sort order of `window`, used for ordering of `window` in
         * {@link Wnck.Selector} and {@link Wnck.Tasklist}. The sort order is an internal state in
         * libwnck. The initial value is defined when the window is created.
         * @returns the sort order of `window`, or G_MAXINT if none is available.
         */
        get_sort_order(): number;

        /**
         * Gets the state of `window`.
         * @returns bitmask of active states for `window`.
         */
        get_state(): WindowState;

        /**
         * Gets the {@link Wnck.Window} for which `window` is transient.
         * @returns the {@link Wnck.Window} for which `window` is transient, or `null` if `window` is not transient for any {@link Wnck.Window}. The returned {@link Wnck.Window} is owned by libwnck and must not be referenced or unreferenced.
         */
        get_transient(): Window;

        /**
         * Gets the semantic type of `window`.
         * @returns the semantic type of `window`.
         */
        get_window_type(): WindowType;

        /**
         * Gets the current workspace `window` is on. If the window is pinned (on all
         * workspaces), or not on any workspaces, `null` may be returned.
         * @returns the single current workspace `window` is on, or `null`. The returned {@link Wnck.Workspace} is owned by libwnck and must not be referenced or unreferenced.
         */
        get_workspace(): Workspace;

        /**
         * Gets the X window ID of `window`.
         * @returns the X window ID of `window`.
         */
        get_xid(): number;

        /**
         * Checks whether or not `window` has an icon name.
         * `wnck_window_get_icon_name()` will always return some value, even if
         * `window` has no icon name set; `wnck_window_has_icon_name()` can
         * be used to tell if that icon name is real or not.
         * 
         * (Note that if `wnck_window_has_icon_name()` returns `false`, but
         * `wnck_window_has_name()` returns `true`, then the name returned by
         * `wnck_window_get_icon_name()` is `window`<!-- -->'s name. Only when both
         * methods return `false` does `wnck_window_get_icon_name()` return a
         * generic fallback name.)
         * @returns `true` if `wnck_window_get_icon_name()` returns `window`<!-- -->'s icon name, `false` if it returns a fallback name.
         */
        has_icon_name(): boolean;

        /**
         * Checks whether or not `window` has a name. `wnck_window_get_name()`
         * will always return some value, even if `window` has no name set;
         * `wnck_window_has_name()` can be used to tell if that name is
         * real or not.
         * 
         * For icons titles, use `wnck_window_has_icon_name()` instead.
         * @returns `true` if `wnck_window_get_name()` returns `window`<!-- -->'s name, `false` if it returns a fallback name.
         */
        has_name(): boolean;

        /**
         * Gets whether `window` is above other windows. This state may change
         * anytime a {@link Wnck.Window.SignalSignatures.state_changed | Wnck.Window::state-changed} signal gets emitted.
         * 
         * See `wnck_window_make_above()` for more details on this state.
         * @returns `true` if `window` is above other windows, `false` otherwise.
         */
        is_above(): boolean;

        /**
         * Gets whether `window` is the active window on its {@link Wnck.Screen}.
         * @returns `true` if `window` is the active window on its {@link Wnck.Screen}, `false` otherwise.
         */
        is_active(): boolean;

        /**
         * Gets whether `window` is below other windows. This state may change
         * anytime a {@link Wnck.Window.SignalSignatures.state_changed | Wnck.Window::state-changed} signal gets emitted.
         * 
         * See `wnck_window_make_below()` for more details on this state.
         * @returns `true` if `window` is below other windows, `false` otherwise.
         */
        is_below(): boolean;

        /**
         * Gets whether `window` is fullscreen. Fullscreen state may change
         * anytime a {@link Wnck.Window.SignalSignatures.state_changed | Wnck.Window::state-changed} signal gets emitted.
         * @returns `true` if `window` is fullscreen, `false` otherwise.
         */
        is_fullscreen(): boolean;

        /**
         * Gets `true` if `window` appears in the current viewport of `workspace`.
         * @param workspace a {@link Wnck.Workspace}.
         * @returns `true` if `window` appears in current viewport of `workspace`, `false` otherwise.
         */
        is_in_viewport(workspace: Workspace): boolean;

        /**
         * Gets whether `window` is maximized. Maximization state may change
         * anytime a {@link Wnck.Window.SignalSignatures.state_changed | Wnck.Window::state-changed} signal gets emitted.
         * 
         * As for GDK, "maximized" means both vertically and horizontally. If `window`
         * is maximized in only one direction, then `window` is not considered
         * maximized.
         * @returns `true` if `window` is maximized in both directions, `false` otherwise.
         */
        is_maximized(): boolean;

        /**
         * Gets whether `window` is maximized horizontally. Horizontal maximization
         * state may change anytime a {@link Wnck.Window.SignalSignatures.state_changed | Wnck.Window::state-changed} signal gets emitted.
         * @returns `true` if `window` is maximized horizontally, `false` otherwise.
         */
        is_maximized_horizontally(): boolean;

        /**
         * Gets whether `window` is maximized vertically. vertiVal maximization
         * state may change anytime a {@link Wnck.Window.SignalSignatures.state_changed | Wnck.Window::state-changed} signal gets emitted.
         * @returns `true` if `window` is maximized vertically, `false` otherwise.
         */
        is_maximized_vertically(): boolean;

        /**
         * Gets whether `window` is minimized. Minimization state may change anytime
         * a {@link Wnck.Window.SignalSignatures.state_changed | Wnck.Window::state-changed} signal gets emitted.
         * @returns `true` if `window` is minimized, `false` otherwise.
         */
        is_minimized(): boolean;

        /**
         * Gets whether `window` is the most recently activated window on its
         * {@link Wnck.Screen}.
         * 
         * The most recently activated window is identical to the active
         * window for click and sloppy focus methods (since a window is always
         * active in those cases) but differs slightly for mouse focus since
         * there often is no active window.
         * @returns `true` if `window` was the most recently activated window on its {@link Wnck.Screen}, `false` otherwise.
         */
        is_most_recently_activated(): boolean;

        /**
         * Gets whether `window` appears on `workspace`.
         * @param workspace a {@link Wnck.Workspace}.
         * @returns `true` if `window` appears on `workspace`, `false` otherwise.
         */
        is_on_workspace(workspace: Workspace): boolean;

        /**
         * Gets whether `window` is on all workspace. Pinned state may change
         * anytime a {@link Wnck.Window.SignalSignatures.workspace_changed | Wnck.Window::workspace-changed} signal gets emitted, but not when
         * a {@link Wnck.Window.SignalSignatures.state_changed | Wnck.Window::state-changed} gets emitted.
         * @returns `true` if `window` is on all workspaces, `false` otherwise.
         */
        is_pinned(): boolean;

        /**
         * Gets whether `window` is shaded. Shade state may change anytime
         * a {@link Wnck.Window.SignalSignatures.state_changed | Wnck.Window::state-changed} signal gets emitted.
         * @returns `true` if `window` is shaded, `false` otherwise.
         */
        is_shaded(): boolean;

        /**
         * Gets whether `window` is included on pagers. This state may change
         * anytime a {@link Wnck.Window.SignalSignatures.state_changed | Wnck.Window::state-changed} signal gets emitted.
         * @returns `true` if `window` is included on pagers, `false` otherwise.
         */
        is_skip_pager(): boolean;

        /**
         * Gets whether `window` is included on tasklists. This state may change
         * anytime a {@link Wnck.Window.SignalSignatures.state_changed | Wnck.Window::state-changed} signal gets emitted.
         * @returns `true` if `window` is included on tasklists, `false` otherwise.
         */
        is_skip_tasklist(): boolean;

        /**
         * Gets whether `window` is sticky. Sticky state may change
         * anytime a {@link Wnck.Window.SignalSignatures.state_changed | Wnck.Window::state-changed} signal gets emitted.
         * 
         * Sticky here means "stuck to the glass", i.e. does not scroll with the
         * viewport. In GDK/GTK+ (e.g. `gdk_window_stick()`/gtk_window_stick()), sticky
         * means "stuck to the glass" and <emphasis>also</emphasis> that the window is
         * on all workspaces. But here it only means the viewport aspect of it.
         * @returns `true` if `window` is "stuck to the glass", `false` otherwise.
         */
        is_sticky(): boolean;

        /**
         * Like `wnck_window_is_on_workspace()`, but also checks that
         * the window is in a visible state (i.e. not minimized or shaded).
         * @param workspace a {@link Wnck.Workspace}.
         * @returns `true` if `window` appears on `workspace` in normal state, `false` otherwise.
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
         * @param space a {@link Wnck.Workspace}.
         */
        move_to_workspace(space: Workspace): void;

        /**
         * Gets whether `window` needs attention. This state may change anytime
         * a {@link Wnck.Window.SignalSignatures.state_changed | Wnck.Window::state-changed} signal gets emitted.
         * 
         * This state depends on flags such as the demands_attention and is_urgent
         * hints.
         * @returns `true` if `window` needs attention, `false` otherwise.
         */
        needs_attention(): boolean;

        /**
         * Gets whether `window` or one of its transients needs attention. This state
         * may change anytime a {@link Wnck.Window.SignalSignatures.state_changed | Wnck.Window::state-changed} signal gets emitted.
         * @returns `true` if `window` or one of its transients needs attention, `false` otherwise.
         */
        or_transient_needs_attention(): boolean;

        /**
         * Asks the window manager to put `window` on all workspaces.
         */
        pin(): void;

        /**
         * Asks the window manager to set the fullscreen state of `window` according to
         * `fullscreen`.
         * @param fullscreen whether to make `window` fullscreen.
         */
        set_fullscreen(fullscreen: boolean): void;

        /**
         * Sets the size and position of `window`. The X and Y coordinates should be
         * relative to the root window.
         * 
         * Note that the new size and position apply to `window` with its frame added
         * by the window manager. Therefore, using `wnck_window_set_geometry()` with
         * the values returned by `wnck_window_get_geometry()` should be a no-op, while
         * using `wnck_window_set_geometry()` with the values returned by
         * `wnck_window_get_client_window_geometry()` should reduce the size of `window`
         * and move it.
         * @param gravity the gravity point to use as a reference for the new position.
         * @param geometry_mask a bitmask containing flags for what should be set.
         * @param x new X coordinate in pixels of `window`.
         * @param y new Y coordinate in pixels of `window`.
         * @param width new width in pixels of `window`.
         * @param height new height in pixels of `window`.
         */
        set_geometry(gravity: WindowGravity, geometry_mask: WindowMoveResizeMask, x: number, y: number, width: number, height: number): void;

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
         * @param skip whether `window` should be included on pagers.
         */
        set_skip_pager(skip: boolean): void;

        /**
         * Asks the window manager to make `window` included or not included on
         * tasklists.
         * @param skip whether `window` should be included on tasklists.
         */
        set_skip_tasklist(skip: boolean): void;

        /**
         * Sets the sort order of `window`. The sort order is used for ordering of
         * `window` in {@link Wnck.Selector} and {@link Wnck.Tasklist}.
         * @param order new sort order for `window`.
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
         * Asks the window manager to keep the `window`<!-- -->'s position fixed on the
         * screen, even when the workspace or viewport scrolls.
         */
        stick(): void;

        /**
         * Gets whether one of the transients of `window` is the most
         * recently activated window. See
         * `wnck_window_is_most_recently_activated()` for a more complete
         * description of what is meant by most recently activated.  This
         * function is needed because clicking on a {@link Wnck.Tasklist} once will
         * activate a transient instead of `window` itself
         * (wnck_window_activate_transient), and clicking again should
         * minimize `window` and its transients.  (Not doing this can be
         * especially annoying in the case of modal dialogs that don't appear
         * in the {@link Wnck.Tasklist}).
         * @returns `true` if one of the transients of `window` is the most recently activated window, `false` otherwise.
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
         * `wnck_window_activate_transient()` for details on how the activation is done.
         * @param timestamp the X server timestamp of the user interaction event that caused this call to occur.
         */
        unminimize(timestamp: number): void;

        /**
         * Asks the window manager to put `window` only in the currently active
         * workspace, if `window` was previously pinned. If `window` was not pinned,
         * does not change `window`<!-- -->'s workspace. If the active workspace
         * is not known for some reason (it should not happen much), sets
         * `window`<!-- -->'s workspace to the first workspace.
         */
        unpin(): void;

        /**
         * Asks the window manager to unshade `window`.
         */
        unshade(): void;

        /**
         * Asks the window manager to not have `window`<!-- -->'s position fixed on the
         * screen when the workspace or viewport scrolls.
         */
        unstick(): void;
    }


    namespace Workspace {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * Emitted when the name of `space` changes.
             * @signal
             * @run-last
             */
            "name-changed": () => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {

        }
    }

    /**
     * The {@link Wnck.Workspace} struct contains only private fields and should not be
     * directly accessed.
     * @gir-type Class
     */
    class Workspace extends GObject.Object {
        static $gtype: GObject.GType<Workspace>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Workspace.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Workspace.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof Workspace.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Workspace.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Workspace.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Workspace.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Workspace.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Workspace.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @virtual
         */
        vfunc_name_changed(): void;

        // Methods
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
         * @param name new name for `space`.
         */
        change_name(name: string): void;

        /**
         * Gets the height of `space`.
         * @returns the height of `space`.
         */
        get_height(): number;

        /**
         * Gets the column of `space` in the {@link Wnck.Workspace} layout. The first column
         * has an index of 0 and is always the left column, regardless of the starting
         * corner set for the layout and regardless of the default direction of the
         * environment (i.e., in both Left-To-Right and Right-To-Left environments).
         * @returns the column of `space` in the {@link Wnck.Workspace} layout, or -1 on errors.
         */
        get_layout_column(): number;

        /**
         * Gets the row of `space` in the {@link Wnck.Workspace} layout. The first row has an
         * index of 0 and is always the top row, regardless of the starting corner set
         * for the layout.
         * @returns the row of `space` in the {@link Wnck.Workspace} layout, or -1 on errors.
         */
        get_layout_row(): number;

        /**
         * Gets the human-readable name that should be used to refer to `space`. If
         * the user has not set a special name, a fallback like "Workspace 3" will be
         * used.
         * @returns the name of `space`.
         */
        get_name(): string;

        /**
         * Gets the neighbor {@link Wnck.Workspace} of `space` in the `direction` direction.
         * @param direction direction in which to search the neighbor.
         * @returns the neighbor {@link Wnck.Workspace} of `space` in the `direction` direction, or `null` if no such neighbor {@link Wnck.Workspace} exists. The returned {@link Wnck.Workspace} is owned by libwnck and must not be referenced or unreferenced.
         */
        get_neighbor(direction: MotionDirection): Workspace;

        /**
         * Gets the index of `space` on the {@link Wnck.Screen} to which it belongs. The
         * first workspace has an index of 0.
         * @returns the index of `space` on its {@link Wnck.Screen}, or -1 on errors.
         */
        get_number(): number;

        /**
         * Gets the {@link Wnck.Screen} `space` is on.
         * @returns the {@link Wnck.Screen} `space` is on. The returned {@link Wnck.Screen} is owned by libwnck and must not be referenced or unreferenced.
         */
        get_screen(): Screen;

        /**
         * Gets the X coordinate of the viewport in `space`.
         * @returns the X coordinate of the viewport in `space`, or 0 if `space` does not contain a viewport.
         */
        get_viewport_x(): number;

        /**
         * Gets the Y coordinate of the viewport in `space`.
         * @returns the Y coordinate of the viewport in `space`, or 0 if `space` does not contain a viewport.
         */
        get_viewport_y(): number;

        /**
         * Gets the width of `space`.
         * @returns the width of `space`.
         */
        get_width(): number;

        /**
         * Gets whether `space` contains a viewport.
         * @returns `true` if `space` contains a viewport, `false` otherwise.
         */
        is_virtual(): boolean;
    }


    /**
     * @gir-type Alias
     */
    type ActionMenuClass = typeof ActionMenu;

    /**
     * @gir-type Struct
     */
    abstract class ActionMenuPrivate {
        static $gtype: GObject.GType<ActionMenuPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type ApplicationClass = typeof Application;

    /**
     * @gir-type Struct
     */
    abstract class ApplicationPrivate {
        static $gtype: GObject.GType<ApplicationPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type ClassGroupClass = typeof ClassGroup;

    /**
     * @gir-type Struct
     */
    abstract class ClassGroupPrivate {
        static $gtype: GObject.GType<ClassGroupPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type HandleClass = typeof Handle;

    /**
     * @gir-type Struct
     */
    abstract class IconCache {
        static $gtype: GObject.GType<IconCache>;
    }


    /**
     * @gir-type Alias
     */
    type ImageMenuItemClass = typeof ImageMenuItem;

    /**
     * @gir-type Alias
     */
    type PagerClass = typeof Pager;

    /**
     * @gir-type Struct
     */
    abstract class PagerPrivate {
        static $gtype: GObject.GType<PagerPrivate>;
    }


    /**
     * The {@link Wnck.ResourceUsage} struct contains information about the total resource
     * usage of an X client, and the number of resources allocated for each
     * resource type.
     * @gir-type Struct
     * @since 2.6
     */
    class ResourceUsage {
        static $gtype: GObject.GType<ResourceUsage>;

        // Fields
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
    }


    /**
     * @gir-type Alias
     */
    type ScreenClass = typeof Screen;

    /**
     * @gir-type Struct
     */
    abstract class ScreenPrivate {
        static $gtype: GObject.GType<ScreenPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type SelectorClass = typeof Selector;

    /**
     * @gir-type Struct
     */
    abstract class SelectorPrivate {
        static $gtype: GObject.GType<SelectorPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type TasklistClass = typeof Tasklist;

    /**
     * @gir-type Struct
     */
    abstract class TasklistPrivate {
        static $gtype: GObject.GType<TasklistPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type WindowClass = typeof Window;

    /**
     * @gir-type Struct
     */
    abstract class WindowPrivate {
        static $gtype: GObject.GType<WindowPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type WorkspaceClass = typeof Workspace;

    /**
     * The {@link Wnck.WorkspaceLayout} struct contains information about the layout of
     * {@link Wnck.Workspace} on a {@link Wnck.Screen}, and the exact position of a specific
     * {@link Wnck.Workspace}.
     * @gir-type Struct
     * @since 2.12
     * @deprecated since 2.20
     */
    class WorkspaceLayout {
        static $gtype: GObject.GType<WorkspaceLayout>;

        // Fields
        rows: number;

        cols: number;

        grid: number;

        grid_area: number;

        current_row: number;

        current_col: number;

        // Constructors

        constructor(properties?: Partial<{
            rows: number;
            cols: number;
            grid: number;
            grid_area: number;
            current_row: number;
            current_col: number;
        }>);
    }


    /**
     * @gir-type Struct
     */
    abstract class WorkspacePrivate {
        static $gtype: GObject.GType<WorkspacePrivate>;
    }


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
