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

export namespace Libxfce4windowing {
    /**
     * Libxfce4windowing-0.0
     */

    /**
     * The type of the application.
     *
     * See `xfw_set_client_type`() for details.
     * @gir-type Enum
     * @since 4.19.3
     */
    enum ClientType {
        /**
         * a regular application
         */
        APPLICATION,
        /**
         * a pager or other user-controlled desktop component
         */
        PAGER,
    }

    export namespace Direction {
        export const $gtype: GObject.GType<Direction>;
    }

    /**
     * Represents a direction, either of position ("This workspace is to the left
     * of the current workspace") or movement ("Move this window to the workspace to
     * the right of its current workspace").
     * @gir-type Enum
     */
    enum Direction {
        /**
         * upward from the current location
         */
        UP,
        /**
         * downward from the current location
         */
        DOWN,
        /**
         * to the left of the current location
         */
        LEFT,
        /**
         * to the right of the current location
         */
        RIGHT,
    }

    /**
     * An error code enum describing possible errors returned by this library.
     * @gir-type Struct
     */
    class Error extends GLib.Error {
        static $gtype: GObject.GType<GLib.Error>;

        // Static fields

        /**
         * the operation attempted is not supported.
         */
        static UNSUPPORTED: number;
        /**
         * an internal error has occurred.
         */
        static INTERNAL: number;

        // Constructors

        constructor(options: { message: string; code: number });
    }

    export namespace WindowType {
        export const $gtype: GObject.GType<WindowType>;
    }

    /**
     * Enumeration describing the windows type or function.
     * @gir-type Enum
     */
    enum WindowType {
        /**
         * window is a regular window.
         */
        NORMAL,
        /**
         * window is responsible for drawing the desktop.
         */
        DESKTOP,
        /**
         * window is a dock or panel.
         */
        DOCK,
        /**
         * window is a temporary dialog, like an error alert.
         */
        DIALOG,
        /**
         * window is a detached toolbar.
         */
        TOOLBAR,
        /**
         * window is a popup menu.
         */
        MENU,
        /**
         * window is a utility menu, like a tool picker or
         *                           color palette.
         */
        UTILITY,
        /**
         * window is an application splash screen.
         */
        SPLASHSCREEN,
    }

    /**
     * Represents the windowing environment that is currently running.  Note that
     * for an application running on XWayland, this will return #XFW_WINDOWING_X11.
     * @gir-type Enum
     */
    enum Windowing {
        /**
         * the application is running under an unknown
         *                         or unsupported windowing system.
         */
        UNKNOWN,
        /**
         * the application is running under an X11 server.
         */
        X11,
        /**
         * the application is running under a Wayland
         *                         comopositor.
         */
        WAYLAND,
    }

    /**
     * A macro that evaluates to the major version of libxfce4windowing, in a format
     * that can be used by the C pre-processor.
     */
    const MAJOR_VERSION: number;
    /**
     * A macro that evaluates to the micro version of libxfce4windowing, in a format
     * that can be used by the C pre-processor.
     */
    const MICRO_VERSION: number;
    /**
     * A macro that evaluates to the minor version of libxfce4windowing, in a format
     * that can be used by the C pre-processor.
     */
    const MINOR_VERSION: number;
    /**
     * Checks that the libxfce4windowing library
     * in use is compatible with the given version. Generally you would pass in
     * the constants #LIBXFCE4WINDOWING_MAJOR_VERSION, #LIBXFCE4WINDOWING_MINOR_VERSION and
     * #LIBXFCE4WINDOWING_MICRO_VERSION as the three arguments to this function; that produces
     * a check that the library in use is compatible with the version of
     * libxfce4windowing the extension was compiled against.
     *
     *
     * ```c
     * const gchar *mismatch;
     * mismatch = libxfce4windowing_check_version(LIBXFCE4WINDOWING_MAJOR_VERSION,
     *                                            LIBXFCE4WINDOWING_MINOR_VERSION,
     *                                            LIBXFCE4WINDOWING_MICRO_VERSION);
     * if (G_UNLIKELY(mismatch != NULL)) {
     *   g_error("Version mismatch: %s", mismatch);
     * }
     * ```
     *
     * @param required_major the required major version.
     * @param required_minor the required minor version.
     * @param required_micro the required micro version.
     * @returns `null` if the library is compatible with the given version, or a string describing the version mismatch. The returned string is owned by the library and must not be freed or modified by the caller.
     */
    function check_version(required_major: number, required_minor: number, required_micro: number): string | null;
    function error_quark(): GLib.Quark;
    /**
     * @param closure
     * @param return_value
     * @param n_param_values
     * @param param_values
     * @param invocation_hint
     * @param marshal_data
     */
    function marshal_VOID__FLAGS_FLAGS(
        closure: GObject.Closure,
        return_value: GObject.Value | any,
        n_param_values: number,
        param_values: GObject.Value | any,
        invocation_hint?: any | null,
        marshal_data?: any | null,
    ): void;
    /**
     * Retrieves the {@link Libxfce4windowing.Screen} instance corresponding to the default {@link Gdk.Screen}.
     * @returns an {@link Libxfce4windowing.Screen} instance, with a reference owned by the caller.
     */
    function screen_get_default(): Screen;
    /**
     * Sets the type of the application.  This is used when sending various
     * messages to control the behavior of other windows, to indicate the source of
     * the control.  In general, #XFW_CLIENT_TYPE_APPLICATION will be interpreted
     * as automated control from a regular application, and #XFW_CLIENT_TYPE_PAGER
     * will be interpreted as user-initiated control from a desktop component
     * application like a pager or dock.
     *
     * This does nothing on Wayland, but is safe to call under a Wayland session.
     * @param client_type A {@link Libxfce4windowing.ClientType}
     * @since 4.19.3
     */
    function set_client_type(client_type: ClientType | null): void;
    /**
     * Determines the windowing environment that is currently active.
     * @returns A value from the {@link Libxfce4windowing.Windowing} enum.
     */
    function windowing_get(): Windowing;
    /**
     * @gir-type Callback
     */
    interface CreateWorkspaceFunc {
        (group: WorkspaceGroup, name: string): boolean;
    }
    /**
     * @gir-type Callback
     */
    interface MoveViewportFunc {
        (group: WorkspaceGroup, x: number, y: number): boolean;
    }
    /**
     * @gir-type Callback
     */
    interface SetLayoutFunc {
        (group: WorkspaceGroup, rows: number, columns: number): boolean;
    }
    export namespace WindowCapabilities {
        export const $gtype: GObject.GType<WindowCapabilities>;
    }

    /**
     * Flags bitfield that describes actions that can be taken on the window.
     * @gir-type Flags
     */
    enum WindowCapabilities {
        /**
         * window has no capabilities.
         */
        NONE,
        /**
         * window can be minimized/hidden.
         */
        CAN_MINIMIZE,
        /**
         * window can be unminimized/unhidden.
         */
        CAN_UNMINIMIZE,
        /**
         * window can be maximized.
         */
        CAN_MAXIMIZE,
        /**
         * window can be unmaximized/restored.
         */
        CAN_UNMAXIMIZE,
        /**
         * window can be set fullscreen.
         */
        CAN_FULLSCREEN,
        /**
         * window can be unset fullscreen.
         */
        CAN_UNFULLSCREEN,
        /**
         * window can be shaded.
         */
        CAN_SHADE,
        /**
         * window can be unshaded.
         */
        CAN_UNSHADE,
        /**
         * window can be moved.
         */
        CAN_MOVE,
        /**
         * window can be resized.
         */
        CAN_RESIZE,
        /**
         * window can be placed above others.
         */
        CAN_PLACE_ABOVE,
        /**
         * always above window can be
         *                                             returned to the normal stacking
         *                                             order.
         */
        CAN_UNPLACE_ABOVE,
        /**
         * window can be placed below others.
         */
        CAN_PLACE_BELOW,
        /**
         * always below window can be
         *                                             returned to the normal stacking
         *                                             order.
         */
        CAN_UNPLACE_BELOW,
        /**
         * window can be moved to a
         *                                                different workspace or can be
         *                                                pinned and unpinned.
         */
        CAN_CHANGE_WORKSPACE,
    }

    export namespace WindowState {
        export const $gtype: GObject.GType<WindowState>;
    }

    /**
     * A flags bitfield representing various states the window can hold.
     * @gir-type Flags
     */
    enum WindowState {
        /**
         * window has no state bits set.
         */
        NONE,
        /**
         * window is active (and often has the keyboard
         *                           focus).
         */
        ACTIVE,
        /**
         * window is minimized/hidden.
         */
        MINIMIZED,
        /**
         * window is maximized.
         */
        MAXIMIZED,
        /**
         * window is filling the entire screen.
         */
        FULLSCREEN,
        /**
         * window should not be shown in pagers.
         */
        SKIP_PAGER,
        /**
         * window should not be shown in task lists.
         */
        SKIP_TASKLIST,
        /**
         * window is shown on al workspaces.
         */
        PINNED,
        /**
         * window is hidden, except for its title bar.
         */
        SHADED,
        /**
         * window is always shown above other windows.
         */
        ABOVE,
        /**
         * window is always shown below other windows.
         */
        BELOW,
        /**
         * window is attempting to get the user's attention.
         */
        URGENT,
    }

    export namespace WorkspaceCapabilities {
        export const $gtype: GObject.GType<WorkspaceCapabilities>;
    }

    /**
     * Flags enum representing a bitfield of actions that can be performed on this
     * workspace.
     * @gir-type Flags
     */
    enum WorkspaceCapabilities {
        /**
         * workspace has no capabilities.
         */
        NONE,
        /**
         * workspace can be activated.
         */
        ACTIVATE,
        /**
         * workspace can be removed.
         */
        REMOVE,
    }

    export namespace WorkspaceGroupCapabilities {
        export const $gtype: GObject.GType<WorkspaceGroupCapabilities>;
    }

    /**
     * Flags enum representing a bitfield of actions that can be performed on this
     * workspace group.
     * @gir-type Flags
     */
    enum WorkspaceGroupCapabilities {
        /**
         * group has no capabilities.
         */
        NONE,
        /**
         * new workspaces can be
         *                                                     created in this group.
         */
        CREATE_WORKSPACE,
        /**
         * the viewport coordinates
         *                                                  for this group can be
         *                                                  changed.
         */
        MOVE_VIEWPORT,
        /**
         * the number of rows and columns
         *                                               for this group can be changed.
         */
        SET_LAYOUT,
    }

    export namespace WorkspaceState {
        export const $gtype: GObject.GType<WorkspaceState>;
    }

    /**
     * Flags enum representing a bitfield that describes the workspace's state.
     * @gir-type Flags
     */
    enum WorkspaceState {
        /**
         * workspace has no state information.
         */
        NONE,
        /**
         * workspace is the active workspace in its group.
         */
        ACTIVE,
        /**
         * workspace contains a window that is requesting
         *                              attention.
         */
        URGENT,
        /**
         * workspace should be hidden from pagers or other
         *                              UI elements.
         */
        HIDDEN,
        /**
         * workspace has a valid, visible viewport.
         */
        VIRTUAL,
    }

    namespace Application {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * Emitted when `app`'s icon changes.
             * @signal
             */
            'icon-changed': () => void;
            'notify::class-id': (pspec: GObject.ParamSpec) => void;
            'notify::gicon': (pspec: GObject.ParamSpec) => void;
            'notify::instances': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::windows': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            class_id: string;
            classId: string;
            gicon: Gio.Icon;
            instances: any;
            name: string;
            windows: any;
        }
    }

    /**
     * @gir-type Class
     */
    abstract class Application extends GObject.Object {
        static $gtype: GObject.GType<Application>;

        // Properties

        /**
         * The application class id.
         * @since 4.19.3
         */
        get class_id(): string;
        /**
         * The application class id.
         * @since 4.19.3
         */
        get classId(): string;
        /**
         * The {@link Gio.Icon} that represents this application.
         */
        get gicon(): Gio.Icon;
        /**
         * The list of {@link Libxfce4windowing.ApplicationInstance} belonging to the application.
         */
        get instances(): any;
        /**
         * The application name.
         */
        get name(): string;
        /**
         * The list of {@link Libxfce4windowing.Window} belonging to the application.
         */
        get windows(): any;

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
        connect<K extends keyof Application.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Application.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Application.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Application.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Application.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Application.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * Fetches this application's class id. On X11 this should be the class name of
         * the [WM_CLASS property](https://x.org/releases/X11R7.6/doc/xorg-docs/specs/ICCCM/icccm.html#wm_class_property).
         * On Wayland, it's the [application ID](https://wayland.app/protocols/wlr-foreign-toplevel-management-unstable-v1#zwlr_foreign_toplevel_handle_v1:event:app_id),
         * which should correspond to the basename of the application's desktop file.
         * @returns A UTF-8 formatted string, owned by `app`.
         */
        get_class_id(): string;
        /**
         * Fetches `app`'s icon as a size-independent {@link Gio.Icon}.  If an icon cannot be
         * found, a {@link Gio.Icon} representing a fallback icon will be returned.  Whether or
         * not the returned icon is a fallback icon can be determined using
         * `xfw_application_icon_is_fallback`().
         * @returns a {@link Gio.Icon}, owned by `app`.
         */
        get_gicon(): Gio.Icon;
        /**
         * Fetches `app`'s icon.  If `app` has no icon, a fallback icon may be
         * returned.  Whether or not the returned icon is a fallback icon can be
         * determined using `xfw_application_icon_is_fallback`().
         * @param size the desired icon size.
         * @param scale the UI scale factor.
         * @returns a {@link GdkPixbuf.Pixbuf}, owned by `app`, or `null` if `app` has no icon and a fallback cannot be rendered.
         */
        get_icon(size: number, scale: number): GdkPixbuf.Pixbuf | null;
        /**
         * Finds the {@link Libxfce4windowing.ApplicationInstance} to which `window` belongs.
         * @param window the application window you want to get the instance of.
         * @returns The {@link Libxfce4windowing.ApplicationInstance} to which `window` belongs, or `null` if `window` does not belong to `app`, or if listing instances is not supported on the windowing environment in use. The returned {@link Libxfce4windowing.ApplicationInstance} is owned by `app`.
         */
        get_instance(window: Window): ApplicationInstance | null;
        /**
         * Lists all instances of the application.
         * @returns The list of {@link Libxfce4windowing.ApplicationInstance} of `app`, or `null` if listing instances is not supported on the windowing environment in use. The list and its contents are owned by `app`.
         */
        get_instances(): ApplicationInstance[] | null;
        /**
         * Fetches this application's human-readable name.
         * @returns A UTF-8 formatted string, owned by `app`.
         */
        get_name(): string;
        /**
         * Lists all windows belonging to the application.
         * @returns The list of {@link Libxfce4windowing.Window} belonging to `app`. The list and its contents are owned by `app`.
         */
        get_windows(): Window[];
        /**
         * Determines if `app` does not have an icon, and thus a fallback icon
         * will be returned from `xfw_application_get_icon`() and
         * `xfw_application_get_gicon`().
         * @returns `true` or `false`, depending on if `app`'s icon uses a fallback icon or not.
         */
        icon_is_fallback(): boolean;
    }

    namespace ApplicationWayland {
        // Signal signatures
        interface SignalSignatures extends Application.SignalSignatures {
            'notify::app-id': (pspec: GObject.ParamSpec) => void;
            'notify::class-id': (pspec: GObject.ParamSpec) => void;
            'notify::gicon': (pspec: GObject.ParamSpec) => void;
            'notify::instances': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::windows': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Application.ConstructorProps {
            app_id: string;
            appId: string;
        }
    }

    /**
     * @gir-type Class
     */
    class ApplicationWayland extends Application {
        static $gtype: GObject.GType<ApplicationWayland>;

        // Properties

        get app_id(): string;
        get appId(): string;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ApplicationWayland.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ApplicationWayland.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof ApplicationWayland.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ApplicationWayland.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ApplicationWayland.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ApplicationWayland.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ApplicationWayland.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ApplicationWayland.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace ApplicationX11 {
        // Signal signatures
        interface SignalSignatures extends Application.SignalSignatures {
            'notify::class-id': (pspec: GObject.ParamSpec) => void;
            'notify::gicon': (pspec: GObject.ParamSpec) => void;
            'notify::instances': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::windows': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Application.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class ApplicationX11 extends Application {
        static $gtype: GObject.GType<ApplicationX11>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ApplicationX11.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ApplicationX11.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof ApplicationX11.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ApplicationX11.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ApplicationX11.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ApplicationX11.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ApplicationX11.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ApplicationX11.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace ScreenWayland {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::active-window': (pspec: GObject.ParamSpec) => void;
            'notify::screen': (pspec: GObject.ParamSpec) => void;
            'notify::show-desktop': (pspec: GObject.ParamSpec) => void;
            'notify::workspace-manager': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, Screen.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class ScreenWayland extends GObject.Object implements Screen {
        static $gtype: GObject.GType<ScreenWayland>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ScreenWayland.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ScreenWayland.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof ScreenWayland.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ScreenWayland.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ScreenWayland.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ScreenWayland.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ScreenWayland.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ScreenWayland.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
        /**
         * The currently-active window.
         * @category Inherited from Libxfce4windowing.Screen
         */
        get active_window(): Window;
        /**
         * The currently-active window.
         * @category Inherited from Libxfce4windowing.Screen
         */
        get activeWindow(): Window;
        /**
         * The {@link Gdk.Screen} instance used to construct this {@link Libxfce4windowing.Screen}.
         * @category Inherited from Libxfce4windowing.Screen
         */
        get screen(): Gdk.Screen;
        /**
         * Whether or not to show the desktop.
         * @category Inherited from Libxfce4windowing.Screen
         */
        get show_desktop(): boolean;
        set show_desktop(val: boolean);
        /**
         * Whether or not to show the desktop.
         * @category Inherited from Libxfce4windowing.Screen
         */
        get showDesktop(): boolean;
        set showDesktop(val: boolean);
        /**
         * The {@link Libxfce4windowing.WorkspaceManager} that manages and describes workspace groups
         * and workspaces on this screen instance.
         * @category Inherited from Libxfce4windowing.Screen
         */
        get workspace_manager(): WorkspaceManager;
        /**
         * The {@link Libxfce4windowing.WorkspaceManager} that manages and describes workspace groups
         * and workspaces on this screen instance.
         * @category Inherited from Libxfce4windowing.Screen
         */
        get workspaceManager(): WorkspaceManager;
        /**
         * Retrieves the window on `screen` that is currently active.
         * @returns an {@link Libxfce4windowing.Window}, or `null` if no window is active on `screen`.
         */
        get_active_window(): Window | null;
        /**
         * @returns `true` if the desktop is shown, `false` otherwise.
         */
        get_show_desktop(): boolean;
        /**
         * Retrieves the list of windows currently displayed on `screen`.
         *
         * The list and its contents are owned by `screen`.
         * @returns the list of {@link Libxfce4windowing.Window} on `screen`, or `null` if there are no windows.  The list and its contents are owned by `screen`.
         */
        get_windows(): Window[] | null;
        /**
         * Retrieves the list of windows currently displayed on `screen`, in stacking
         * order, with the bottom-most window first in the returned list.
         * @returns the list of {@link Libxfce4windowing.Window} on `screen`, in stacking order, or `null` if there are no windows.  The list and its contents are owned by `screen`.
         */
        get_windows_stacked(): Window[] | null;
        /**
         * Retrieves this screen's {@link Libxfce4windowing.WorkspaceManager} instance, which can be used
         * to inspect and interact with `screen`'s workspace groups and workspaces.
         * @returns a {@link Libxfce4windowing.WorkspaceManager} instance.  This instance is a singleton and is owned by `screen`.
         */
        get_workspace_manager(): WorkspaceManager;
        /**
         * Showing the desktop minimizes the windows not minimized at the time of the query.
         * The reverse process unminimizes those same windows, if they have not already been
         * unminimized or destroyed. The desktop show state can be tracked via
         * {@link Libxfce4windowing.Screen.show_desktop}.
         *
         * The state of the previously active window is always restored upon unminimization,
         * but there is no guarantee for the rest of the window stacking order on Wayland.
         *
         * A request to switch to the current state is silently ignored.
         * @param show `true` to show the desktop, `false` to restore the previous state.
         */
        set_show_desktop(show: boolean): void;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace ScreenX11 {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::active-window': (pspec: GObject.ParamSpec) => void;
            'notify::screen': (pspec: GObject.ParamSpec) => void;
            'notify::show-desktop': (pspec: GObject.ParamSpec) => void;
            'notify::workspace-manager': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, Screen.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class ScreenX11 extends GObject.Object implements Screen {
        static $gtype: GObject.GType<ScreenX11>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: ScreenX11.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<ScreenX11.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof ScreenX11.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ScreenX11.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof ScreenX11.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, ScreenX11.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof ScreenX11.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<ScreenX11.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
        /**
         * The currently-active window.
         * @category Inherited from Libxfce4windowing.Screen
         */
        get active_window(): Window;
        /**
         * The currently-active window.
         * @category Inherited from Libxfce4windowing.Screen
         */
        get activeWindow(): Window;
        /**
         * The {@link Gdk.Screen} instance used to construct this {@link Libxfce4windowing.Screen}.
         * @category Inherited from Libxfce4windowing.Screen
         */
        get screen(): Gdk.Screen;
        /**
         * Whether or not to show the desktop.
         * @category Inherited from Libxfce4windowing.Screen
         */
        get show_desktop(): boolean;
        set show_desktop(val: boolean);
        /**
         * Whether or not to show the desktop.
         * @category Inherited from Libxfce4windowing.Screen
         */
        get showDesktop(): boolean;
        set showDesktop(val: boolean);
        /**
         * The {@link Libxfce4windowing.WorkspaceManager} that manages and describes workspace groups
         * and workspaces on this screen instance.
         * @category Inherited from Libxfce4windowing.Screen
         */
        get workspace_manager(): WorkspaceManager;
        /**
         * The {@link Libxfce4windowing.WorkspaceManager} that manages and describes workspace groups
         * and workspaces on this screen instance.
         * @category Inherited from Libxfce4windowing.Screen
         */
        get workspaceManager(): WorkspaceManager;
        /**
         * Retrieves the window on `screen` that is currently active.
         * @returns an {@link Libxfce4windowing.Window}, or `null` if no window is active on `screen`.
         */
        get_active_window(): Window | null;
        /**
         * @returns `true` if the desktop is shown, `false` otherwise.
         */
        get_show_desktop(): boolean;
        /**
         * Retrieves the list of windows currently displayed on `screen`.
         *
         * The list and its contents are owned by `screen`.
         * @returns the list of {@link Libxfce4windowing.Window} on `screen`, or `null` if there are no windows.  The list and its contents are owned by `screen`.
         */
        get_windows(): Window[] | null;
        /**
         * Retrieves the list of windows currently displayed on `screen`, in stacking
         * order, with the bottom-most window first in the returned list.
         * @returns the list of {@link Libxfce4windowing.Window} on `screen`, in stacking order, or `null` if there are no windows.  The list and its contents are owned by `screen`.
         */
        get_windows_stacked(): Window[] | null;
        /**
         * Retrieves this screen's {@link Libxfce4windowing.WorkspaceManager} instance, which can be used
         * to inspect and interact with `screen`'s workspace groups and workspaces.
         * @returns a {@link Libxfce4windowing.WorkspaceManager} instance.  This instance is a singleton and is owned by `screen`.
         */
        get_workspace_manager(): WorkspaceManager;
        /**
         * Showing the desktop minimizes the windows not minimized at the time of the query.
         * The reverse process unminimizes those same windows, if they have not already been
         * unminimized or destroyed. The desktop show state can be tracked via
         * {@link Libxfce4windowing.Screen.show_desktop}.
         *
         * The state of the previously active window is always restored upon unminimization,
         * but there is no guarantee for the rest of the window stacking order on Wayland.
         *
         * A request to switch to the current state is silently ignored.
         * @param show `true` to show the desktop, `false` to restore the previous state.
         */
        set_show_desktop(show: boolean): void;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace Window {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * Emitted when `window`'s capabilities change.
             * @signal
             */
            'capabilities-changed': (arg0: WindowCapabilities, arg1: WindowCapabilities) => void;
            /**
             * Emitted when at least one of the `window`'s class ids changes.
             * @signal
             * @since 4.19.3
             */
            'class-changed': () => void;
            /**
             * Emitted when `window` is closed.
             * @signal
             */
            closed: () => void;
            /**
             * Emitted when `window`'s position or size changes.
             * @signal
             */
            'geometry-changed': () => void;
            /**
             * Emitted when `window`'s icon changes.
             * @signal
             */
            'icon-changed': () => void;
            /**
             * Emitted when `window`'s name/title changes.
             * @signal
             */
            'name-changed': () => void;
            /**
             * Emitted when `window`'s state changes.
             * @signal
             */
            'state-changed': (arg0: WindowState, arg1: WindowState) => void;
            /**
             * Emitted when `window`'s type changes.
             * @signal
             */
            'type-changed': (arg0: WindowType) => void;
            /**
             * Emitted when `window` is moved to a different worksapce.
             * @signal
             */
            'workspace-changed': () => void;
            'notify::application': (pspec: GObject.ParamSpec) => void;
            'notify::capabilities': (pspec: GObject.ParamSpec) => void;
            'notify::class-ids': (pspec: GObject.ParamSpec) => void;
            'notify::gicon': (pspec: GObject.ParamSpec) => void;
            'notify::monitors': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::screen': (pspec: GObject.ParamSpec) => void;
            'notify::state': (pspec: GObject.ParamSpec) => void;
            'notify::type': (pspec: GObject.ParamSpec) => void;
            'notify::workspace': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            application: Application;
            capabilities: WindowCapabilities;
            class_ids: string[];
            classIds: string[];
            gicon: Gio.Icon;
            monitors: any;
            name: string;
            screen: Screen;
            state: WindowState;
            type: WindowType;
            workspace: Workspace;
        }
    }

    /**
     * @gir-type Class
     */
    abstract class Window extends GObject.Object {
        static $gtype: GObject.GType<Window>;

        // Properties

        /**
         * The {@link Libxfce4windowing.Application} that owns this window.
         */
        get application(): Application;
        /**
         * The window's capabilities bitfield.
         */
        get capabilities(): WindowCapabilities;
        /**
         * The window's class ids.
         * @since 4.19.3
         */
        get class_ids(): string[];
        /**
         * The window's class ids.
         * @since 4.19.3
         */
        get classIds(): string[];
        /**
         * The {@link Gio.Icon} that represents this window.
         */
        get gicon(): Gio.Icon;
        /**
         * The list of monitors (if any) that the window is displayed on.
         */
        get monitors(): any;
        /**
         * The window's name or title.
         */
        get name(): string;
        /**
         * The {@link Libxfce4windowing.Screen} instances that owns this window.
         */
        get screen(): Screen;
        /**
         * The window's state bitfield.
         */
        get state(): WindowState;
        /**
         * The window's type or function.
         */
        get type(): WindowType;
        get workspace(): Workspace;

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
        connect<K extends keyof Window.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Window.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof Window.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, Window.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof Window.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<Window.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;

        // Methods

        /**
         * @param event_timestamp
         */
        activate(event_timestamp: number): boolean;
        /**
         * @param event_timestamp
         */
        close(event_timestamp: number): boolean;
        /**
         * Fetches `window`'s application.
         * @returns An {@link Libxfce4windowing.Application} instance, with a reference owned by `window`.
         */
        get_application(): Application;
        /**
         * Fetches `window`'s capabilities bitfield.
         * @returns a bitfield with zero or more bits from {@link Libxfce4windowing.WindowCapabilities} set.
         */
        get_capabilities(): WindowCapabilities;
        /**
         * Fetches `window`'s class ids. On X11 this should contain the class and instance
         * names of the [WM_CLASS property](https://x.org/releases/X11R7.6/doc/xorg-docs/specs/ICCCM/icccm.html#wm_class_property).
         * On Wayland, it's likely to be limited to the [application ID](https://wayland.app/protocols/wlr-foreign-toplevel-management-unstable-v1#zwlr_foreign_toplevel_handle_v1:event:app_id),
         * which should correspond to the basename of the application's desktop file.
         * @returns a `null`-terminated array of strings owned by the {@link Libxfce4windowing.Window}.
         */
        get_class_ids(): string[];
        /**
         * Fetches `window`'s position and size.
         * @returns A {@link Gdk.Rectangle} representing `window`'s geometry, which should not be modified or freed.
         */
        get_geometry(): Gdk.Rectangle;
        /**
         * Fetches `window`'s icon as a size-independent {@link Gio.Icon}.  If an icon cannot be
         * found, a {@link Gio.Icon} representing a fallback icon will be returned.  Whether or
         * not the returned icon is a fallback icon can be determined using
         * `xfw_window_icon_is_fallback`().
         * @returns a {@link Gio.Icon}, owned by `window`.
         */
        get_gicon(): Gio.Icon;
        /**
         * Fetches `window`'s icon.  If `window` has no icon, a fallback icon may be
         * returned.  Whether or not the returned icon is a fallback icon can be
         * determined using `xfw_window_icon_is_fallback`().
         * @param size the desired icon size.
         * @param scale the UI scale factor.
         * @returns a {@link GdkPixbuf.Pixbuf}, owned by `window`, or `null` if `window` has no icon and a fallback cannot be rendered.
         */
        get_icon(size: number, scale: number): GdkPixbuf.Pixbuf | null;
        /**
         * Fetches the list of monitors `window` is displayed on, if any.
         * @returns A list of {@link Gdk.Monitor} instances, or `null`.  The list and its contents are owned by `window` and should not be modified or freed.
         */
        get_monitors(): Gdk.Monitor[] | null;
        /**
         * Fetches `window`'s name/title.
         * @returns a window title, or `null` if there is no title.  The returned title should not be modified or freed.
         */
        get_name(): string | null;
        /**
         * Fetches the {@link Libxfce4windowing.Screen} instance that owns `window`.
         * @returns A {@link Libxfce4windowing.Screen} instance, with a reference owned by `window`.
         */
        get_screen(): Screen;
        /**
         * Fetches `window`'s state bitfield.
         * @returns a bitfield with zero or more bits from {@link Libxfce4windowing.WindowState} set.
         */
        get_state(): WindowState;
        get_window_type(): WindowType;
        /**
         * Fetches `window`'s workspace, if any.  This may return `null` if `window` is
         * not on a workspace, or is pinned to all workspaces.
         * @returns A {@link Libxfce4windowing.Workspace} instance, with a reference owned by `window`, or `null`.
         */
        get_workspace(): Workspace | null;
        /**
         * Determines if `window` does not have an icon, and thus a fallback icon
         * will be returned from `xfw_window_get_icon`() and `xfw_window_get_gicon`().
         * @returns `true` or `false`, depending on if `window`'s icon uses a fallback icon or not.
         */
        icon_is_fallback(): boolean;
        is_above(): boolean;
        is_active(): boolean;
        is_below(): boolean;
        is_fullscreen(): boolean;
        /**
         * @param workspace
         */
        is_in_viewport(workspace: Workspace): boolean;
        is_maximized(): boolean;
        is_minimized(): boolean;
        /**
         * @param workspace
         */
        is_on_workspace(workspace: Workspace): boolean;
        is_pinned(): boolean;
        is_shaded(): boolean;
        is_skip_pager(): boolean;
        is_skip_tasklist(): boolean;
        is_urgent(): boolean;
        /**
         * @param workspace
         */
        move_to_workspace(workspace: Workspace): boolean;
        /**
         * @param is_above
         */
        set_above(is_above: boolean): boolean;
        /**
         * @param is_below
         */
        set_below(is_below: boolean): boolean;
        /**
         * @param relative_to
         * @param rect
         */
        set_button_geometry(relative_to: Gdk.Window, rect: Gdk.Rectangle): boolean;
        /**
         * @param is_fullscreen
         */
        set_fullscreen(is_fullscreen: boolean): boolean;
        /**
         * @param rect
         */
        set_geometry(rect: Gdk.Rectangle): boolean;
        /**
         * @param is_maximized
         */
        set_maximized(is_maximized: boolean): boolean;
        /**
         * @param is_minimized
         */
        set_minimized(is_minimized: boolean): boolean;
        /**
         * @param is_pinned
         */
        set_pinned(is_pinned: boolean): boolean;
        /**
         * @param is_shaded
         */
        set_shaded(is_shaded: boolean): boolean;
        /**
         * @param is_skip_pager
         */
        set_skip_pager(is_skip_pager: boolean): boolean;
        /**
         * @param is_skip_tasklist
         */
        set_skip_tasklist(is_skip_tasklist: boolean): boolean;
        start_move(): boolean;
        start_resize(): boolean;
        /**
         * On X11, returns the platform-specific {@link Libxfce4windowing.Window} handle to the underlying
         * window.
         *
         * It is an error to call this function if the application is not currently
         * running on X11.
         * @returns An X11 {@link Libxfce4windowing.Window} handle.
         */
        x11_get_xid(): xlib.Window;
    }

    namespace WindowWayland {
        // Signal signatures
        interface SignalSignatures extends Window.SignalSignatures {
            'notify::handle': (pspec: GObject.ParamSpec) => void;
            'notify::application': (pspec: GObject.ParamSpec) => void;
            'notify::capabilities': (pspec: GObject.ParamSpec) => void;
            'notify::class-ids': (pspec: GObject.ParamSpec) => void;
            'notify::gicon': (pspec: GObject.ParamSpec) => void;
            'notify::monitors': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::screen': (pspec: GObject.ParamSpec) => void;
            'notify::state': (pspec: GObject.ParamSpec) => void;
            'notify::type': (pspec: GObject.ParamSpec) => void;
            'notify::workspace': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Window.ConstructorProps {
            handle: any;
        }
    }

    /**
     * @gir-type Class
     */
    class WindowWayland extends Window {
        static $gtype: GObject.GType<WindowWayland>;

        // Properties

        get handle(): any;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: WindowWayland.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<WindowWayland.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof WindowWayland.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WindowWayland.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof WindowWayland.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WindowWayland.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof WindowWayland.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<WindowWayland.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace WindowX11 {
        // Signal signatures
        interface SignalSignatures extends Window.SignalSignatures {
            'notify::application': (pspec: GObject.ParamSpec) => void;
            'notify::capabilities': (pspec: GObject.ParamSpec) => void;
            'notify::class-ids': (pspec: GObject.ParamSpec) => void;
            'notify::gicon': (pspec: GObject.ParamSpec) => void;
            'notify::monitors': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::screen': (pspec: GObject.ParamSpec) => void;
            'notify::state': (pspec: GObject.ParamSpec) => void;
            'notify::type': (pspec: GObject.ParamSpec) => void;
            'notify::workspace': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends Window.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class WindowX11 extends Window {
        static $gtype: GObject.GType<WindowX11>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: WindowX11.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<WindowX11.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof WindowX11.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WindowX11.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof WindowX11.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WindowX11.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof WindowX11.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<WindowX11.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
    }

    namespace WnckIcon {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::wnck-object': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps
            extends
                GObject.Object.ConstructorProps,
                Gio.Icon.ConstructorProps,
                Gio.Initable.ConstructorProps,
                Gio.LoadableIcon.ConstructorProps {
            wnck_object: GObject.Object;
            wnckObject: GObject.Object;
        }
    }

    /**
     * @gir-type Class
     */
    class WnckIcon extends GObject.Object implements Gio.Icon, Gio.Initable, Gio.LoadableIcon {
        static $gtype: GObject.GType<WnckIcon>;

        // Properties

        get wnck_object(): GObject.Object;
        get wnckObject(): GObject.Object;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: WnckIcon.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<WnckIcon.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof WnckIcon.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WnckIcon.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof WnckIcon.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WnckIcon.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof WnckIcon.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<WnckIcon.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
        /**
         * Checks if two icons are equal.
         * @param icon2 pointer to the second {@link Gio.Icon}.
         * @returns `true` if `icon1` is equal to `icon2`. `false` otherwise.
         */
        equal(icon2?: Gio.Icon | null): boolean;
        /**
         * Gets a hash for an icon.
         * @returns a `guint` containing a hash for the `icon`, suitable for   use in a {@link GLib.HashTable} or similar data structure.
         */
        hash(): number;
        /**
         * Serializes a {@link Gio.Icon} into a {@link GLib.Variant}. An equivalent {@link Gio.Icon} can be retrieved
         * back by calling `g_icon_deserialize()` on the returned value.
         * As serialization will avoid using raw icon data when possible, it only
         * makes sense to transfer the {@link GLib.Variant} between processes on the same machine,
         * (as opposed to over the network), and within the same file system namespace.
         * @returns a {@link GLib.Variant}, or `null` when serialization fails. The {@link GLib.Variant} will not be floating.
         */
        serialize(): GLib.Variant | null;
        /**
         * Generates a textual representation of `icon` that can be used for
         * serialization such as when passing `icon` to a different process or
         * saving it to persistent storage. Use `g_icon_new_for_string()` to
         * get `icon` back from the returned string.
         *
         * The encoding of the returned string is proprietary to {@link Gio.Icon} except
         * in the following two cases
         *
         * - If `icon` is a {@link Gio.FileIcon}, the returned string is a native path
         *   (such as `/path/to/my icon.png`) without escaping
         *   if the {@link Gio.File} for `icon` is a native file.  If the file is not
         *   native, the returned string is the result of `g_file_get_uri()`
         *   (such as `sftp://path/to/my%20icon.png`).
         *
         * - If `icon` is a {@link Gio.ThemedIcon} with exactly one name and no fallbacks,
         *   the encoding is simply the name (such as `network-server`).
         * @returns An allocated NUL-terminated UTF8 string or `null` if `icon` can't be serialized. Use `g_free()` to free.
         */
        to_string(): string | null;
        /**
         * Checks if two icons are equal.
         * @param icon2 pointer to the second {@link Gio.Icon}.
         * @virtual
         */
        vfunc_equal(icon2?: Gio.Icon | null): boolean;
        /**
         * Gets a hash for an icon.
         * @virtual
         */
        vfunc_hash(): number;
        /**
         * Serializes a {@link Gio.Icon} into a {@link GLib.Variant}. An equivalent {@link Gio.Icon} can be retrieved
         * back by calling `g_icon_deserialize()` on the returned value.
         * As serialization will avoid using raw icon data when possible, it only
         * makes sense to transfer the {@link GLib.Variant} between processes on the same machine,
         * (as opposed to over the network), and within the same file system namespace.
         * @virtual
         */
        vfunc_serialize(): GLib.Variant | null;
        /**
         * Serializes the `icon` into string tokens.
         * This is can be invoked when `g_icon_new_for_string()` is called.
         * @virtual
         */
        vfunc_to_tokens(): [boolean, string[], number];
        /**
         * Initializes the object implementing the interface.
         *
         * This method is intended for language bindings. If writing in C,
         * `g_initable_new()` should typically be used instead.
         *
         * The object must be initialized before any real use after initial
         * construction, either with this function or `g_async_initable_init_async()`.
         *
         * Implementations may also support cancellation. If `cancellable` is not `null`,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null` and
         * the object doesn't support cancellable initialization the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         *
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except `g_object_ref()` and
         * `g_object_unref()` are considered to be invalid, and have undefined
         * behaviour. See the [description][iface@Gio.Initable#description] for more details.
         *
         * Callers should not assume that a class which implements {@link Gio.Initable} can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of `init()` can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all {@link Gio.Initable} implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         *
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         *
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * {@link GObject.ObjectClass}.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call `g_initable_init()`
         * on the result of `g_object_new()`, regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @returns `true` if successful. If an error has occurred, this function will     return `false` and set `error` appropriately if present.
         */
        init(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Initializes the object implementing the interface.
         *
         * This method is intended for language bindings. If writing in C,
         * `g_initable_new()` should typically be used instead.
         *
         * The object must be initialized before any real use after initial
         * construction, either with this function or `g_async_initable_init_async()`.
         *
         * Implementations may also support cancellation. If `cancellable` is not `null`,
         * then initialization can be cancelled by triggering the cancellable object
         * from another thread. If the operation was cancelled, the error
         * {@link Gio.IOErrorEnum.CANCELLED} will be returned. If `cancellable` is not `null` and
         * the object doesn't support cancellable initialization the error
         * {@link Gio.IOErrorEnum.NOT_SUPPORTED} will be returned.
         *
         * If the object is not initialized, or initialization returns with an
         * error, then all operations on the object except `g_object_ref()` and
         * `g_object_unref()` are considered to be invalid, and have undefined
         * behaviour. See the [description][iface@Gio.Initable#description] for more details.
         *
         * Callers should not assume that a class which implements {@link Gio.Initable} can be
         * initialized multiple times, unless the class explicitly documents itself as
         * supporting this. Generally, a class’ implementation of `init()` can assume
         * (and assert) that it will only be called once. Previously, this documentation
         * recommended all {@link Gio.Initable} implementations should be idempotent; that
         * recommendation was relaxed in GLib 2.54.
         *
         * If a class explicitly supports being initialized multiple times, it is
         * recommended that the method is idempotent: multiple calls with the same
         * arguments should return the same results. Only the first call initializes
         * the object; further calls return the result of the first call.
         *
         * One reason why a class might need to support idempotent initialization is if
         * it is designed to be used via the singleton pattern, with a
         * {@link GObject.ObjectClass}.constructor that sometimes returns an existing instance.
         * In this pattern, a caller would expect to be able to call `g_initable_init()`
         * on the result of `g_object_new()`, regardless of whether it is in fact a new
         * instance.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @virtual
         */
        vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
        /**
         * Loads a loadable icon. For the asynchronous version of this function,
         * see `g_loadable_icon_load_async()`.
         * @param size an integer.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @returns a {@link Gio.InputStream} to read the icon from.
         */
        load(size: number, cancellable?: Gio.Cancellable | null): [Gio.InputStream, string];
        /**
         * Loads an icon asynchronously. To finish this function, see
         * `g_loadable_icon_load_finish()`. For the synchronous, blocking
         * version of this function, see `g_loadable_icon_load()`.
         * @param size an integer.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         */
        load_async(size: number, cancellable?: Gio.Cancellable | null): globalThis.Promise<[Gio.InputStream, string]>;
        /**
         * Loads an icon asynchronously. To finish this function, see
         * `g_loadable_icon_load_finish()`. For the synchronous, blocking
         * version of this function, see `g_loadable_icon_load()`.
         * @param size an integer.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback}   to call when the request is satisfied
         */
        load_async(
            size: number,
            cancellable: Gio.Cancellable | null,
            callback: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Loads an icon asynchronously. To finish this function, see
         * `g_loadable_icon_load_finish()`. For the synchronous, blocking
         * version of this function, see `g_loadable_icon_load()`.
         * @param size an integer.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback}   to call when the request is satisfied
         */
        load_async(
            size: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): globalThis.Promise<[Gio.InputStream, string]> | void;
        /**
         * Finishes an asynchronous icon load started in `g_loadable_icon_load_async()`.
         * @param res a {@link Gio.AsyncResult}.
         * @returns a {@link Gio.InputStream} to read the icon from.
         */
        load_finish(res: Gio.AsyncResult): [Gio.InputStream, string];
        /**
         * Loads a loadable icon. For the asynchronous version of this function,
         * see `g_loadable_icon_load_async()`.
         * @param size an integer.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @virtual
         */
        vfunc_load(size: number, cancellable?: Gio.Cancellable | null): [Gio.InputStream, string];
        /**
         * Loads an icon asynchronously. To finish this function, see
         * `g_loadable_icon_load_finish()`. For the synchronous, blocking
         * version of this function, see `g_loadable_icon_load()`.
         * @param size an integer.
         * @param cancellable optional {@link Gio.Cancellable} object, `null` to ignore.
         * @param callback a {@link Gio.AsyncReadyCallback}   to call when the request is satisfied
         * @virtual
         */
        vfunc_load_async(
            size: number,
            cancellable?: Gio.Cancellable | null,
            callback?: Gio.AsyncReadyCallback<this> | null,
        ): void;
        /**
         * Finishes an asynchronous icon load started in `g_loadable_icon_load_async()`.
         * @param res a {@link Gio.AsyncResult}.
         * @virtual
         */
        vfunc_load_finish(res: Gio.AsyncResult): [Gio.InputStream, string];
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace WorkspaceDummy {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::capabilities': (pspec: GObject.ParamSpec) => void;
            'notify::group': (pspec: GObject.ParamSpec) => void;
            'notify::id': (pspec: GObject.ParamSpec) => void;
            'notify::layout-column': (pspec: GObject.ParamSpec) => void;
            'notify::layout-row': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::number': (pspec: GObject.ParamSpec) => void;
            'notify::state': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, Workspace.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class WorkspaceDummy extends GObject.Object implements Workspace {
        static $gtype: GObject.GType<WorkspaceDummy>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: WorkspaceDummy.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<WorkspaceDummy.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof WorkspaceDummy.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WorkspaceDummy.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof WorkspaceDummy.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WorkspaceDummy.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof WorkspaceDummy.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<WorkspaceDummy.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
        /**
         * The {@link Libxfce4windowing.WorkspaceCapabilities} bitfield for this workspace.
         * @category Inherited from Libxfce4windowing.Workspace
         */
        get capabilities(): WorkspaceCapabilities;
        set capabilities(val: WorkspaceCapabilities);
        /**
         * The {@link Libxfce4windowing.WorkspaceGroup} that this workspace is a member of, if any.
         * @category Inherited from Libxfce4windowing.Workspace
         */
        get group(): WorkspaceGroup;
        /**
         * The opaque ID of this workspace.
         * @category Inherited from Libxfce4windowing.Workspace
         */
        get id(): string;
        /**
         * The y-coordinate of the workspace on a 2D grid.
         * @category Inherited from Libxfce4windowing.Workspace
         */
        get layout_column(): number;
        /**
         * The y-coordinate of the workspace on a 2D grid.
         * @category Inherited from Libxfce4windowing.Workspace
         */
        get layoutColumn(): number;
        /**
         * The x-coordinate of the workspace on a 2D grid.
         * @category Inherited from Libxfce4windowing.Workspace
         */
        get layout_row(): number;
        /**
         * The x-coordinate of the workspace on a 2D grid.
         * @category Inherited from Libxfce4windowing.Workspace
         */
        get layoutRow(): number;
        /**
         * The human-readable name of this workspace.
         * @category Inherited from Libxfce4windowing.Workspace
         */
        get name(): string;
        set name(val: string);
        /**
         * The ordinal number of this workspace.
         * @category Inherited from Libxfce4windowing.Workspace
         */
        get number(): number;
        /**
         * The {@link Libxfce4windowing.WorkspaceState} bitfield for this workspace.
         * @category Inherited from Libxfce4windowing.Workspace
         */
        get state(): WorkspaceState;
        set state(val: WorkspaceState);
        /**
         * Attempts to set `workspace` as the active workspace in its group.
         *
         * On failure, `error` (if provided) will be set to a description of the error
         * that occurred.
         * @returns `true` if workspace activation succeeded, `false` otherwise.  If `false`, and `error` is non-`null`, an error will be returned that must be freed using `g_error_free`().
         */
        activate(): boolean;
        /**
         * Attempts to assign `workspace` to `group`.
         *
         * On failure, `error` (if provided) will be set to a description of the error
         * that occurred.
         * @param group an {@link Libxfce4windowing.WorkspaceGroup}.
         * @returns `true` if workspace assignment succeeded, `false` otherwise. If `false`, and `error` is non-`null`, an error will be returned that must be freed using `g_error_free()`.
         */
        assign_to_workspace_group(group: WorkspaceGroup): boolean;
        /**
         * Fetches this workspace's capabilities bitfield.
         *
         * The bitfield describes what operations are available on this workspace.
         * @returns a {@link Libxfce4windowing.WorkspaceCapabilities} bitfield.
         */
        get_capabilities(): WorkspaceCapabilities;
        /**
         * Fetches the position and size of the workspace in screen coordinates.
         *
         * The values in the returned {@link Gdk.Rectangle} are owned by `workspace` and should
         * not be modified.
         * @returns a {@link Gdk.Rectangle}, owned by `workspace`.
         */
        get_geometry(): Gdk.Rectangle;
        /**
         * Fetches this workspace's opaque ID.
         * @returns A UTF-8 formatted string, owned by `workspace`.
         */
        get_id(): string;
        /**
         * Fetches the column this workspace belongs to in the workspace's group.
         *
         * This information can be used to lay out workspaces in a grid in a pager
         * UI, for example.
         * @returns a non-negative, 0-indexed integer.
         */
        get_layout_column(): number;
        /**
         * Fetches the row this workspace belongs to in the workspace's group.
         *
         * This information can be used to lay out workspaces in a grid in a pager
         * UI, for example.
         * @returns a non-negative, 0-indexed integer.
         */
        get_layout_row(): number;
        /**
         * Fetches this workspace's human-readable name.
         * @returns A UTF-8 formatted string, owned by `workspace`.
         */
        get_name(): string;
        /**
         * Fetches the workspace that resides in `direction` from the `workspace`, if
         * any.  If workspace is on the edge of the layout, and `direction` points off
         * the edge of the layout, will return `null`.
         * @param direction an {@link Libxfce4windowing.Direction}.
         * @returns a {@link Libxfce4windowing.Workspace}, owned by the parent `group`, or `null` if no workspace exists in `direction`.
         */
        get_neighbor(direction: Direction | null): Workspace | null;
        /**
         * Fetches the ordinal number of this workspace.
         *
         * The number can be used to order workspaces in a UI representation.
         *
         * On X11, this number should be stable across runs of your application.
         *
         * On Wayland, this number depends on the order in which the compositor
         * advertises the workspaces.  This order may be stable, but may not be.
         * @returns a non-negative, 0-indexed integer.
         */
        get_number(): number;
        /**
         * Fetches this workspace's state bitfield.
         * @returns a {@link Libxfce4windowing.WorkspaceState} bitfield.
         */
        get_state(): WorkspaceState;
        /**
         * Fetches the group this workspace belongs to, if any.
         * @returns a {@link Libxfce4windowing.WorkspaceGroup} instance, owned by `workspace`, or `null` if the workspace is not a member of any groups.
         */
        get_workspace_group(): WorkspaceGroup | null;
        /**
         * Attempts to remove `workspace` from its group.
         *
         * On failure, `error` (if provided) will be set to a description of the error
         * that occurred.
         * @returns `true` if workspace removal succeeded, `false` otherwise.  If `false`, and `error` is non-`null`, an error will be returned that must be freed using `g_error_free`().
         */
        remove(): boolean;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace WorkspaceGroupDummy {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::create-workspace-func': (pspec: GObject.ParamSpec) => void;
            'notify::move-viewport-func': (pspec: GObject.ParamSpec) => void;
            'notify::set-layout-func': (pspec: GObject.ParamSpec) => void;
            'notify::active-workspace': (pspec: GObject.ParamSpec) => void;
            'notify::monitors': (pspec: GObject.ParamSpec) => void;
            'notify::screen': (pspec: GObject.ParamSpec) => void;
            'notify::workspace-manager': (pspec: GObject.ParamSpec) => void;
            'notify::workspaces': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, WorkspaceGroup.ConstructorProps {
            create_workspace_func: any;
            createWorkspaceFunc: any;
            move_viewport_func: any;
            moveViewportFunc: any;
            set_layout_func: any;
            setLayoutFunc: any;
        }
    }

    /**
     * @gir-type Class
     */
    class WorkspaceGroupDummy extends GObject.Object implements WorkspaceGroup {
        static $gtype: GObject.GType<WorkspaceGroupDummy>;

        // Properties

        get create_workspace_func(): any;
        set create_workspace_func(val: any);
        get createWorkspaceFunc(): any;
        set createWorkspaceFunc(val: any);
        get move_viewport_func(): any;
        set move_viewport_func(val: any);
        get moveViewportFunc(): any;
        set moveViewportFunc(val: any);
        get set_layout_func(): any;
        set set_layout_func(val: any);
        get setLayoutFunc(): any;
        set setLayoutFunc(val: any);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: WorkspaceGroupDummy.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<WorkspaceGroupDummy.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof WorkspaceGroupDummy.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WorkspaceGroupDummy.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof WorkspaceGroupDummy.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WorkspaceGroupDummy.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof WorkspaceGroupDummy.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<WorkspaceGroupDummy.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;
        /**
         * The active {@link Libxfce4windowing.Workspace} on this {@link Libxfce4windowing.WorkspaceGroup}, or `null`.
         * @category Inherited from Libxfce4windowing.WorkspaceGroup
         */
        get active_workspace(): Workspace;
        /**
         * The active {@link Libxfce4windowing.Workspace} on this {@link Libxfce4windowing.WorkspaceGroup}, or `null`.
         * @category Inherited from Libxfce4windowing.WorkspaceGroup
         */
        get activeWorkspace(): Workspace;
        /**
         * The list of {@link Gdk.Monitor} this {@link Libxfce4windowing.WorkspaceGroup} is displayed on.
         * @category Inherited from Libxfce4windowing.WorkspaceGroup
         */
        get monitors(): any;
        /**
         * The {@link Gdk.Screen} used when creating the {@link Libxfce4windowing.Screen} that owns this
         * {@link Libxfce4windowing.WorkspaceGroup}.
         * @category Inherited from Libxfce4windowing.WorkspaceGroup
         */
        get screen(): Gdk.Screen;
        /**
         * The {@link Libxfce4windowing.WorkspaceManager} instance that manages this {@link Libxfce4windowing.WorkspaceGroup}.
         * @category Inherited from Libxfce4windowing.WorkspaceGroup
         */
        get workspace_manager(): WorkspaceManager;
        /**
         * The {@link Libxfce4windowing.WorkspaceManager} instance that manages this {@link Libxfce4windowing.WorkspaceGroup}.
         * @category Inherited from Libxfce4windowing.WorkspaceGroup
         */
        get workspaceManager(): WorkspaceManager;
        /**
         * The list of {@link Libxfce4windowing.Workspace} in this {@link Libxfce4windowing.WorkspaceGroup}.
         * @category Inherited from Libxfce4windowing.WorkspaceGroup
         */
        get workspaces(): any;
        /**
         * Attempts to create a new workspace on `group`.  Typically, the new workspace
         * will be appended to the existing list of workspaces.
         *
         * On failure, `error` (if provided) will be set to a description of the error
         * that occurred.
         * @param name a name for the new workspace.
         * @returns `true` if workspace creation succeeded, `false` otherwise.  If `false`, and `error` is non-`null`, an error will be returned that must be freed using `g_error_free`().
         */
        create_workspace(name: string): boolean;
        /**
         * Gets the active workspace on `group`, if there is one.
         * @returns an {@link Libxfce4windowing.Workspace}, or `null` if there is no active workspace.
         */
        get_active_workspace(): Workspace | null;
        /**
         * Returns a bitfield describing operations allowed on this `group`.
         * @returns an {@link Libxfce4windowing.WorkspaceGroupCapabilities} bitfield.
         */
        get_capabilities(): WorkspaceGroupCapabilities;
        /**
         * Lists the physical monitors that this workspace group displays on.
         * @returns A list of {@link Gdk.Monitor}, or `null` if `group` is not displayed on any monitors.  The list and its contents are owned by `group`.
         */
        get_monitors(): Gdk.Monitor[] | null;
        /**
         * Fetches the number of workspaces in `group`.
         * @returns an unsigned integer describing the number of workspaces.
         */
        get_workspace_count(): number;
        /**
         * Fetches the {@link Libxfce4windowing.WorkspaceManager} instance that owns `group`.
         * @returns a {@link Libxfce4windowing.WorkspaceManager}, owned by `group`.
         */
        get_workspace_manager(): WorkspaceManager;
        /**
         * Lists the workspaces in `group`.
         * @returns the list of {@link Libxfce4windowing.Workspace} in `group`, or `null` if there are no workspaces. The list and its contents are owned by `group`.
         */
        list_workspaces(): Workspace[] | null;
        /**
         * Moves the workspace group to a new location, and possibly a new monitor.
         *
         * On failure, `error` (if provided) will be set to a description of the error
         * that occurred.
         * @param x a coordinate in the horizontal direction.
         * @param y a coordinate in the vertical direction.
         * @returns `true` if moving the workspace group succeeded, `false` otherwise.  If `false`, and `error` is non-`null`, an error will be returned that must be freed using `g_error_free`().
         */
        move_viewport(x: number, y: number): boolean;
        /**
         * Sets the layout of `group` to `rows` by `columns`.
         *
         * Note that this will not change the number of workspaces if the new layout
         * implies a larger number of workspaces than currently exists.
         *
         * On failure, `error` (if provided) will be set to a description of the error
         * that occurred.
         * @param rows the new numbers of rows.
         * @param columns the new number of columns.
         * @returns `true` if changing the layout of `group` succeede, `false` otherwise.  If `false`, and `error` is non-`null`, an error will be returned that must be freed using `g_error_free`().
         */
        set_layout(rows: number, columns: number): boolean;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace WorkspaceGroupWayland {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             */
            destroyed: () => void;
            'notify::active-workspace': (pspec: GObject.ParamSpec) => void;
            'notify::monitors': (pspec: GObject.ParamSpec) => void;
            'notify::screen': (pspec: GObject.ParamSpec) => void;
            'notify::workspace-manager': (pspec: GObject.ParamSpec) => void;
            'notify::workspaces': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, WorkspaceGroup.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class WorkspaceGroupWayland extends GObject.Object implements WorkspaceGroup {
        static $gtype: GObject.GType<WorkspaceGroupWayland>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: WorkspaceGroupWayland.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<WorkspaceGroupWayland.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof WorkspaceGroupWayland.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WorkspaceGroupWayland.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof WorkspaceGroupWayland.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WorkspaceGroupWayland.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof WorkspaceGroupWayland.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<WorkspaceGroupWayland.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;
        /**
         * The active {@link Libxfce4windowing.Workspace} on this {@link Libxfce4windowing.WorkspaceGroup}, or `null`.
         * @category Inherited from Libxfce4windowing.WorkspaceGroup
         */
        get active_workspace(): Workspace;
        /**
         * The active {@link Libxfce4windowing.Workspace} on this {@link Libxfce4windowing.WorkspaceGroup}, or `null`.
         * @category Inherited from Libxfce4windowing.WorkspaceGroup
         */
        get activeWorkspace(): Workspace;
        /**
         * The list of {@link Gdk.Monitor} this {@link Libxfce4windowing.WorkspaceGroup} is displayed on.
         * @category Inherited from Libxfce4windowing.WorkspaceGroup
         */
        get monitors(): any;
        /**
         * The {@link Gdk.Screen} used when creating the {@link Libxfce4windowing.Screen} that owns this
         * {@link Libxfce4windowing.WorkspaceGroup}.
         * @category Inherited from Libxfce4windowing.WorkspaceGroup
         */
        get screen(): Gdk.Screen;
        /**
         * The {@link Libxfce4windowing.WorkspaceManager} instance that manages this {@link Libxfce4windowing.WorkspaceGroup}.
         * @category Inherited from Libxfce4windowing.WorkspaceGroup
         */
        get workspace_manager(): WorkspaceManager;
        /**
         * The {@link Libxfce4windowing.WorkspaceManager} instance that manages this {@link Libxfce4windowing.WorkspaceGroup}.
         * @category Inherited from Libxfce4windowing.WorkspaceGroup
         */
        get workspaceManager(): WorkspaceManager;
        /**
         * The list of {@link Libxfce4windowing.Workspace} in this {@link Libxfce4windowing.WorkspaceGroup}.
         * @category Inherited from Libxfce4windowing.WorkspaceGroup
         */
        get workspaces(): any;
        /**
         * Attempts to create a new workspace on `group`.  Typically, the new workspace
         * will be appended to the existing list of workspaces.
         *
         * On failure, `error` (if provided) will be set to a description of the error
         * that occurred.
         * @param name a name for the new workspace.
         * @returns `true` if workspace creation succeeded, `false` otherwise.  If `false`, and `error` is non-`null`, an error will be returned that must be freed using `g_error_free`().
         */
        create_workspace(name: string): boolean;
        /**
         * Gets the active workspace on `group`, if there is one.
         * @returns an {@link Libxfce4windowing.Workspace}, or `null` if there is no active workspace.
         */
        get_active_workspace(): Workspace | null;
        /**
         * Returns a bitfield describing operations allowed on this `group`.
         * @returns an {@link Libxfce4windowing.WorkspaceGroupCapabilities} bitfield.
         */
        get_capabilities(): WorkspaceGroupCapabilities;
        /**
         * Lists the physical monitors that this workspace group displays on.
         * @returns A list of {@link Gdk.Monitor}, or `null` if `group` is not displayed on any monitors.  The list and its contents are owned by `group`.
         */
        get_monitors(): Gdk.Monitor[] | null;
        /**
         * Fetches the number of workspaces in `group`.
         * @returns an unsigned integer describing the number of workspaces.
         */
        get_workspace_count(): number;
        /**
         * Fetches the {@link Libxfce4windowing.WorkspaceManager} instance that owns `group`.
         * @returns a {@link Libxfce4windowing.WorkspaceManager}, owned by `group`.
         */
        get_workspace_manager(): WorkspaceManager;
        /**
         * Lists the workspaces in `group`.
         * @returns the list of {@link Libxfce4windowing.Workspace} in `group`, or `null` if there are no workspaces. The list and its contents are owned by `group`.
         */
        list_workspaces(): Workspace[] | null;
        /**
         * Moves the workspace group to a new location, and possibly a new monitor.
         *
         * On failure, `error` (if provided) will be set to a description of the error
         * that occurred.
         * @param x a coordinate in the horizontal direction.
         * @param y a coordinate in the vertical direction.
         * @returns `true` if moving the workspace group succeeded, `false` otherwise.  If `false`, and `error` is non-`null`, an error will be returned that must be freed using `g_error_free`().
         */
        move_viewport(x: number, y: number): boolean;
        /**
         * Sets the layout of `group` to `rows` by `columns`.
         *
         * Note that this will not change the number of workspaces if the new layout
         * implies a larger number of workspaces than currently exists.
         *
         * On failure, `error` (if provided) will be set to a description of the error
         * that occurred.
         * @param rows the new numbers of rows.
         * @param columns the new number of columns.
         * @returns `true` if changing the layout of `group` succeede, `false` otherwise.  If `false`, and `error` is non-`null`, an error will be returned that must be freed using `g_error_free`().
         */
        set_layout(rows: number, columns: number): boolean;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace WorkspaceManagerDummy {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::screen': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, WorkspaceManager.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class WorkspaceManagerDummy extends GObject.Object implements WorkspaceManager {
        static $gtype: GObject.GType<WorkspaceManagerDummy>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: WorkspaceManagerDummy.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<WorkspaceManagerDummy.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof WorkspaceManagerDummy.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WorkspaceManagerDummy.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof WorkspaceManagerDummy.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WorkspaceManagerDummy.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof WorkspaceManagerDummy.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<WorkspaceManagerDummy.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;
        /**
         * The {@link Gdk.Screen} instance used to construct the {@link Libxfce4windowing.Screen} that owns this
         * workspace manager.
         * @category Inherited from Libxfce4windowing.WorkspaceManager
         */
        get screen(): Gdk.Screen;
        /**
         * Lists all workspace groups known to the workspace manager.
         * @returns the list of {@link Libxfce4windowing.WorkspaceGroup} managed by `manager`, or `null` if there are no workspace groups.  The list and its contents are owned by `manager`.
         */
        list_workspace_groups(): WorkspaceGroup[] | null;
        /**
         * List all workspaces known to the workspace manager.
         * @returns the list of {@link Libxfce4windowing.Workspace} managed by `manager`, or `null` if there are no workspaces.  The list and its contents are owned by `manager`.
         */
        list_workspaces(): Workspace[] | null;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace WorkspaceManagerWayland {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::wl-manager': (pspec: GObject.ParamSpec) => void;
            'notify::wl-registry': (pspec: GObject.ParamSpec) => void;
            'notify::screen': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, WorkspaceManager.ConstructorProps {
            wl_manager: any;
            wlManager: any;
            wl_registry: any;
            wlRegistry: any;
        }
    }

    /**
     * @gir-type Class
     */
    class WorkspaceManagerWayland extends GObject.Object implements WorkspaceManager {
        static $gtype: GObject.GType<WorkspaceManagerWayland>;

        // Properties

        get wl_manager(): any;
        get wlManager(): any;
        get wl_registry(): any;
        get wlRegistry(): any;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: WorkspaceManagerWayland.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<WorkspaceManagerWayland.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof WorkspaceManagerWayland.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WorkspaceManagerWayland.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof WorkspaceManagerWayland.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WorkspaceManagerWayland.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof WorkspaceManagerWayland.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<WorkspaceManagerWayland.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;
        /**
         * The {@link Gdk.Screen} instance used to construct the {@link Libxfce4windowing.Screen} that owns this
         * workspace manager.
         * @category Inherited from Libxfce4windowing.WorkspaceManager
         */
        get screen(): Gdk.Screen;
        /**
         * Lists all workspace groups known to the workspace manager.
         * @returns the list of {@link Libxfce4windowing.WorkspaceGroup} managed by `manager`, or `null` if there are no workspace groups.  The list and its contents are owned by `manager`.
         */
        list_workspace_groups(): WorkspaceGroup[] | null;
        /**
         * List all workspaces known to the workspace manager.
         * @returns the list of {@link Libxfce4windowing.Workspace} managed by `manager`, or `null` if there are no workspaces.  The list and its contents are owned by `manager`.
         */
        list_workspaces(): Workspace[] | null;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace WorkspaceManagerX11 {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::screen': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, WorkspaceManager.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class WorkspaceManagerX11 extends GObject.Object implements WorkspaceManager {
        static $gtype: GObject.GType<WorkspaceManagerX11>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: WorkspaceManagerX11.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<WorkspaceManagerX11.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof WorkspaceManagerX11.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WorkspaceManagerX11.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof WorkspaceManagerX11.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WorkspaceManagerX11.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof WorkspaceManagerX11.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<WorkspaceManagerX11.SignalSignatures[K]> extends [any, ...infer Q]
                ? Q
                : never
        ): void;
        emit(signal: string, ...args: any[]): void;
        /**
         * The {@link Gdk.Screen} instance used to construct the {@link Libxfce4windowing.Screen} that owns this
         * workspace manager.
         * @category Inherited from Libxfce4windowing.WorkspaceManager
         */
        get screen(): Gdk.Screen;
        /**
         * Lists all workspace groups known to the workspace manager.
         * @returns the list of {@link Libxfce4windowing.WorkspaceGroup} managed by `manager`, or `null` if there are no workspace groups.  The list and its contents are owned by `manager`.
         */
        list_workspace_groups(): WorkspaceGroup[] | null;
        /**
         * List all workspaces known to the workspace manager.
         * @returns the list of {@link Libxfce4windowing.Workspace} managed by `manager`, or `null` if there are no workspaces.  The list and its contents are owned by `manager`.
         */
        list_workspaces(): Workspace[] | null;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace WorkspaceWayland {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             */
            destroyed: () => void;
            'notify::handle': (pspec: GObject.ParamSpec) => void;
            'notify::capabilities': (pspec: GObject.ParamSpec) => void;
            'notify::group': (pspec: GObject.ParamSpec) => void;
            'notify::id': (pspec: GObject.ParamSpec) => void;
            'notify::layout-column': (pspec: GObject.ParamSpec) => void;
            'notify::layout-row': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::number': (pspec: GObject.ParamSpec) => void;
            'notify::state': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, Workspace.ConstructorProps {
            handle: any;
        }
    }

    /**
     * @gir-type Class
     */
    class WorkspaceWayland extends GObject.Object implements Workspace {
        static $gtype: GObject.GType<WorkspaceWayland>;

        // Properties

        get handle(): any;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: WorkspaceWayland.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<WorkspaceWayland.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof WorkspaceWayland.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WorkspaceWayland.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof WorkspaceWayland.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WorkspaceWayland.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof WorkspaceWayland.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<WorkspaceWayland.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
        /**
         * The {@link Libxfce4windowing.WorkspaceCapabilities} bitfield for this workspace.
         * @category Inherited from Libxfce4windowing.Workspace
         */
        get capabilities(): WorkspaceCapabilities;
        set capabilities(val: WorkspaceCapabilities);
        /**
         * The {@link Libxfce4windowing.WorkspaceGroup} that this workspace is a member of, if any.
         * @category Inherited from Libxfce4windowing.Workspace
         */
        get group(): WorkspaceGroup;
        /**
         * The opaque ID of this workspace.
         * @category Inherited from Libxfce4windowing.Workspace
         */
        get id(): string;
        /**
         * The y-coordinate of the workspace on a 2D grid.
         * @category Inherited from Libxfce4windowing.Workspace
         */
        get layout_column(): number;
        /**
         * The y-coordinate of the workspace on a 2D grid.
         * @category Inherited from Libxfce4windowing.Workspace
         */
        get layoutColumn(): number;
        /**
         * The x-coordinate of the workspace on a 2D grid.
         * @category Inherited from Libxfce4windowing.Workspace
         */
        get layout_row(): number;
        /**
         * The x-coordinate of the workspace on a 2D grid.
         * @category Inherited from Libxfce4windowing.Workspace
         */
        get layoutRow(): number;
        /**
         * The human-readable name of this workspace.
         * @category Inherited from Libxfce4windowing.Workspace
         */
        get name(): string;
        set name(val: string);
        /**
         * The ordinal number of this workspace.
         * @category Inherited from Libxfce4windowing.Workspace
         */
        get number(): number;
        /**
         * The {@link Libxfce4windowing.WorkspaceState} bitfield for this workspace.
         * @category Inherited from Libxfce4windowing.Workspace
         */
        get state(): WorkspaceState;
        set state(val: WorkspaceState);
        /**
         * Attempts to set `workspace` as the active workspace in its group.
         *
         * On failure, `error` (if provided) will be set to a description of the error
         * that occurred.
         * @returns `true` if workspace activation succeeded, `false` otherwise.  If `false`, and `error` is non-`null`, an error will be returned that must be freed using `g_error_free`().
         */
        activate(): boolean;
        /**
         * Attempts to assign `workspace` to `group`.
         *
         * On failure, `error` (if provided) will be set to a description of the error
         * that occurred.
         * @param group an {@link Libxfce4windowing.WorkspaceGroup}.
         * @returns `true` if workspace assignment succeeded, `false` otherwise. If `false`, and `error` is non-`null`, an error will be returned that must be freed using `g_error_free()`.
         */
        assign_to_workspace_group(group: WorkspaceGroup): boolean;
        /**
         * Fetches this workspace's capabilities bitfield.
         *
         * The bitfield describes what operations are available on this workspace.
         * @returns a {@link Libxfce4windowing.WorkspaceCapabilities} bitfield.
         */
        get_capabilities(): WorkspaceCapabilities;
        /**
         * Fetches the position and size of the workspace in screen coordinates.
         *
         * The values in the returned {@link Gdk.Rectangle} are owned by `workspace` and should
         * not be modified.
         * @returns a {@link Gdk.Rectangle}, owned by `workspace`.
         */
        get_geometry(): Gdk.Rectangle;
        /**
         * Fetches this workspace's opaque ID.
         * @returns A UTF-8 formatted string, owned by `workspace`.
         */
        get_id(): string;
        /**
         * Fetches the column this workspace belongs to in the workspace's group.
         *
         * This information can be used to lay out workspaces in a grid in a pager
         * UI, for example.
         * @returns a non-negative, 0-indexed integer.
         */
        get_layout_column(): number;
        /**
         * Fetches the row this workspace belongs to in the workspace's group.
         *
         * This information can be used to lay out workspaces in a grid in a pager
         * UI, for example.
         * @returns a non-negative, 0-indexed integer.
         */
        get_layout_row(): number;
        /**
         * Fetches this workspace's human-readable name.
         * @returns A UTF-8 formatted string, owned by `workspace`.
         */
        get_name(): string;
        /**
         * Fetches the workspace that resides in `direction` from the `workspace`, if
         * any.  If workspace is on the edge of the layout, and `direction` points off
         * the edge of the layout, will return `null`.
         * @param direction an {@link Libxfce4windowing.Direction}.
         * @returns a {@link Libxfce4windowing.Workspace}, owned by the parent `group`, or `null` if no workspace exists in `direction`.
         */
        get_neighbor(direction: Direction | null): Workspace | null;
        /**
         * Fetches the ordinal number of this workspace.
         *
         * The number can be used to order workspaces in a UI representation.
         *
         * On X11, this number should be stable across runs of your application.
         *
         * On Wayland, this number depends on the order in which the compositor
         * advertises the workspaces.  This order may be stable, but may not be.
         * @returns a non-negative, 0-indexed integer.
         */
        get_number(): number;
        /**
         * Fetches this workspace's state bitfield.
         * @returns a {@link Libxfce4windowing.WorkspaceState} bitfield.
         */
        get_state(): WorkspaceState;
        /**
         * Fetches the group this workspace belongs to, if any.
         * @returns a {@link Libxfce4windowing.WorkspaceGroup} instance, owned by `workspace`, or `null` if the workspace is not a member of any groups.
         */
        get_workspace_group(): WorkspaceGroup | null;
        /**
         * Attempts to remove `workspace` from its group.
         *
         * On failure, `error` (if provided) will be set to a description of the error
         * that occurred.
         * @returns `true` if workspace removal succeeded, `false` otherwise.  If `false`, and `error` is non-`null`, an error will be returned that must be freed using `g_error_free`().
         */
        remove(): boolean;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    namespace WorkspaceX11 {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            'notify::capabilities': (pspec: GObject.ParamSpec) => void;
            'notify::group': (pspec: GObject.ParamSpec) => void;
            'notify::id': (pspec: GObject.ParamSpec) => void;
            'notify::layout-column': (pspec: GObject.ParamSpec) => void;
            'notify::layout-row': (pspec: GObject.ParamSpec) => void;
            'notify::name': (pspec: GObject.ParamSpec) => void;
            'notify::number': (pspec: GObject.ParamSpec) => void;
            'notify::state': (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps, Workspace.ConstructorProps {}
    }

    /**
     * @gir-type Class
     */
    class WorkspaceX11 extends GObject.Object implements Workspace {
        static $gtype: GObject.GType<WorkspaceX11>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: WorkspaceX11.SignalSignatures;

        // Constructors

        constructor(properties?: Partial<WorkspaceX11.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals

        /** @signal */
        connect<K extends keyof WorkspaceX11.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WorkspaceX11.SignalSignatures[K]>,
        ): number;
        connect(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        connect_after<K extends keyof WorkspaceX11.SignalSignatures>(
            signal: K,
            callback: GObject.SignalCallback<this, WorkspaceX11.SignalSignatures[K]>,
        ): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;
        /** @signal */
        emit<K extends keyof WorkspaceX11.SignalSignatures>(
            signal: K,
            ...args: GObject.GjsParameters<WorkspaceX11.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never
        ): void;
        emit(signal: string, ...args: any[]): void;
        /**
         * The {@link Libxfce4windowing.WorkspaceCapabilities} bitfield for this workspace.
         * @category Inherited from Libxfce4windowing.Workspace
         */
        get capabilities(): WorkspaceCapabilities;
        set capabilities(val: WorkspaceCapabilities);
        /**
         * The {@link Libxfce4windowing.WorkspaceGroup} that this workspace is a member of, if any.
         * @category Inherited from Libxfce4windowing.Workspace
         */
        get group(): WorkspaceGroup;
        /**
         * The opaque ID of this workspace.
         * @category Inherited from Libxfce4windowing.Workspace
         */
        get id(): string;
        /**
         * The y-coordinate of the workspace on a 2D grid.
         * @category Inherited from Libxfce4windowing.Workspace
         */
        get layout_column(): number;
        /**
         * The y-coordinate of the workspace on a 2D grid.
         * @category Inherited from Libxfce4windowing.Workspace
         */
        get layoutColumn(): number;
        /**
         * The x-coordinate of the workspace on a 2D grid.
         * @category Inherited from Libxfce4windowing.Workspace
         */
        get layout_row(): number;
        /**
         * The x-coordinate of the workspace on a 2D grid.
         * @category Inherited from Libxfce4windowing.Workspace
         */
        get layoutRow(): number;
        /**
         * The human-readable name of this workspace.
         * @category Inherited from Libxfce4windowing.Workspace
         */
        get name(): string;
        set name(val: string);
        /**
         * The ordinal number of this workspace.
         * @category Inherited from Libxfce4windowing.Workspace
         */
        get number(): number;
        /**
         * The {@link Libxfce4windowing.WorkspaceState} bitfield for this workspace.
         * @category Inherited from Libxfce4windowing.Workspace
         */
        get state(): WorkspaceState;
        set state(val: WorkspaceState);
        /**
         * Attempts to set `workspace` as the active workspace in its group.
         *
         * On failure, `error` (if provided) will be set to a description of the error
         * that occurred.
         * @returns `true` if workspace activation succeeded, `false` otherwise.  If `false`, and `error` is non-`null`, an error will be returned that must be freed using `g_error_free`().
         */
        activate(): boolean;
        /**
         * Attempts to assign `workspace` to `group`.
         *
         * On failure, `error` (if provided) will be set to a description of the error
         * that occurred.
         * @param group an {@link Libxfce4windowing.WorkspaceGroup}.
         * @returns `true` if workspace assignment succeeded, `false` otherwise. If `false`, and `error` is non-`null`, an error will be returned that must be freed using `g_error_free()`.
         */
        assign_to_workspace_group(group: WorkspaceGroup): boolean;
        /**
         * Fetches this workspace's capabilities bitfield.
         *
         * The bitfield describes what operations are available on this workspace.
         * @returns a {@link Libxfce4windowing.WorkspaceCapabilities} bitfield.
         */
        get_capabilities(): WorkspaceCapabilities;
        /**
         * Fetches the position and size of the workspace in screen coordinates.
         *
         * The values in the returned {@link Gdk.Rectangle} are owned by `workspace` and should
         * not be modified.
         * @returns a {@link Gdk.Rectangle}, owned by `workspace`.
         */
        get_geometry(): Gdk.Rectangle;
        /**
         * Fetches this workspace's opaque ID.
         * @returns A UTF-8 formatted string, owned by `workspace`.
         */
        get_id(): string;
        /**
         * Fetches the column this workspace belongs to in the workspace's group.
         *
         * This information can be used to lay out workspaces in a grid in a pager
         * UI, for example.
         * @returns a non-negative, 0-indexed integer.
         */
        get_layout_column(): number;
        /**
         * Fetches the row this workspace belongs to in the workspace's group.
         *
         * This information can be used to lay out workspaces in a grid in a pager
         * UI, for example.
         * @returns a non-negative, 0-indexed integer.
         */
        get_layout_row(): number;
        /**
         * Fetches this workspace's human-readable name.
         * @returns A UTF-8 formatted string, owned by `workspace`.
         */
        get_name(): string;
        /**
         * Fetches the workspace that resides in `direction` from the `workspace`, if
         * any.  If workspace is on the edge of the layout, and `direction` points off
         * the edge of the layout, will return `null`.
         * @param direction an {@link Libxfce4windowing.Direction}.
         * @returns a {@link Libxfce4windowing.Workspace}, owned by the parent `group`, or `null` if no workspace exists in `direction`.
         */
        get_neighbor(direction: Direction | null): Workspace | null;
        /**
         * Fetches the ordinal number of this workspace.
         *
         * The number can be used to order workspaces in a UI representation.
         *
         * On X11, this number should be stable across runs of your application.
         *
         * On Wayland, this number depends on the order in which the compositor
         * advertises the workspaces.  This order may be stable, but may not be.
         * @returns a non-negative, 0-indexed integer.
         */
        get_number(): number;
        /**
         * Fetches this workspace's state bitfield.
         * @returns a {@link Libxfce4windowing.WorkspaceState} bitfield.
         */
        get_state(): WorkspaceState;
        /**
         * Fetches the group this workspace belongs to, if any.
         * @returns a {@link Libxfce4windowing.WorkspaceGroup} instance, owned by `workspace`, or `null` if the workspace is not a member of any groups.
         */
        get_workspace_group(): WorkspaceGroup | null;
        /**
         * Attempts to remove `workspace` from its group.
         *
         * On failure, `error` (if provided) will be set to a description of the error
         * that occurred.
         * @returns `true` if workspace removal succeeded, `false` otherwise.  If `false`, and `error` is non-`null`, an error will be returned that must be freed using `g_error_free`().
         */
        remove(): boolean;
        /**
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`.
         *
         * Whenever the `source_property` is changed the `target_property` is
         * updated using the same value. For instance:
         *
         *
         * ```c
         *   g_object_bind_property (action, "active", widget, "sensitive", 0);
         * ```
         *
         *
         * Will result in the "sensitive" property of the widget {@link GObject.Object} instance to be
         * updated with the same value of the "active" property of the action {@link GObject.Object}
         * instance.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well.
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. To remove the binding without affecting the
         * `source` and the `target` you can just call `g_object_unref()` on the returned
         * {@link GObject.Binding} instance.
         *
         * Removing the binding by calling `g_object_unref()` on it must only be done if
         * the binding, `source` and `target` are only used from a single thread and it
         * is clear that both `source` and `target` outlive the binding. Especially it
         * is not safe to rely on this if the binding, `source` or `target` can be
         * finalized from different threads. Keep another reference to the binding and
         * use `g_binding_unbind()` instead to be on the safe side.
         *
         * A {@link GObject.Object} can have multiple bindings.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
        ): GObject.Binding;
        /**
         * Complete version of `g_object_bind_property()`.
         *
         * Creates a binding between `source_property` on `source` and `target_property`
         * on `target`, allowing you to set the transformation functions to be used by
         * the binding.
         *
         * If `flags` contains {@link GObject.BindingFlags.BIDIRECTIONAL} then the binding will be mutual:
         * if `target_property` on `target` changes then the `source_property` on `source`
         * will be updated as well. The `transform_from` function is only used in case
         * of bidirectional bindings, otherwise it will be ignored
         *
         * The binding will automatically be removed when either the `source` or the
         * `target` instances are finalized. This will release the reference that is
         * being held on the {@link GObject.Binding} instance; if you want to hold on to the
         * {@link GObject.Binding} instance, you will need to hold a reference to it.
         *
         * To remove the binding, call `g_binding_unbind()`.
         *
         * A {@link GObject.Object} can have multiple bindings.
         *
         * The same `user_data` parameter will be used for both `transform_to`
         * and `transform_from` transformation functions; the `notify` function will
         * be called once, when the binding is removed. If you need different data
         * for each transformation function, please use
         * `g_object_bind_property_with_closures()` instead.
         * @param source_property the property on `source` to bind
         * @param target the target {@link GObject.Object}
         * @param target_property the property on `target` to bind
         * @param flags flags to pass to {@link GObject.Binding}
         * @param transform_to the transformation function     from the `source` to the `target`, or `null` to use the default
         * @param transform_from the transformation function     from the `target` to the `source`, or `null` to use the default
         * @param notify a function to call when disposing the binding, to free     resources used by the transformation functions, or `null` if not required
         * @returns the {@link GObject.Binding} instance representing the     binding between the two {@link GObject.Object} instances. The binding is released     whenever the {@link GObject.Binding} reference count reaches zero.
         */
        bind_property_full(
            source_property: string,
            target: GObject.Object,
            target_property: string,
            flags: GObject.BindingFlags | null,
            transform_to?: GObject.BindingTransformFunc | null,
            transform_from?: GObject.BindingTransformFunc | null,
            notify?: GLib.DestroyNotify | null,
        ): GObject.Binding;
        /**
         * @param args
         */
        // Conflicted with GObject.Object.bind_property_full
        bind_property_full(...args: never[]): any;
        /**
         * This function is intended for {@link GObject.Object} implementations to re-enforce
         * a [floating][floating-ref] object reference. Doing this is seldom
         * required: all `GInitiallyUnowneds` are created with a floating reference
         * which usually just needs to be sunken by calling `g_object_ref_sink()`.
         */
        force_floating(): void;
        /**
         * Increases the freeze count on `object`. If the freeze count is
         * non-zero, the emission of "notify" signals on `object` is
         * stopped. The signals are queued until the freeze count is decreased
         * to zero. Duplicate notifications are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property modified while the
         * object is frozen.
         *
         * This is necessary for accessors that modify multiple properties to prevent
         * premature notification while the object is still being modified.
         */
        freeze_notify(): void;
        /**
         * Gets a named field from the objects table of associations (see `g_object_set_data()`).
         * @param key name of the key for that association
         * @returns the data if found,          or `null` if no such data exists.
         */
        get_data(key: string): any | null;
        /**
         * Gets a property of an object.
         *
         * The value can be:
         * - an empty GObject.Value initialized by G_VALUE_INIT, which will be automatically initialized with the expected type of the property (since GLib 2.60)
         * - a GObject.Value initialized with the expected type of the property
         * - a GObject.Value initialized with a type to which the expected type of the property can be transformed
         *
         * In general, a copy is made of the property contents and the caller is responsible for freeing the memory by calling GObject.Value.unset.
         *
         * Note that GObject.Object.get_property is really intended for language bindings, GObject.Object.get is much more convenient for C programming.
         * @param property_name The name of the property to get
         * @param value Return location for the property value. Can be an empty GObject.Value initialized by G_VALUE_INIT (auto-initialized with expected type since GLib 2.60), a GObject.Value initialized with the expected property type, or a GObject.Value initialized with a transformable type
         */
        get_property(property_name: string, value: GObject.Value | any): any;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        get_qdata(quark: GLib.Quark): any | null;
        /**
         * Gets `n_properties` properties for an `object`.
         * Obtained properties will be set to `values`. All properties must be valid.
         * Warnings will be emitted and undefined behaviour may result if invalid
         * properties are passed in.
         * @param names the names of each property to get
         * @param values the values of each property to get
         */
        getv(names: string[], values: (GObject.Value | any)[]): void;
        /**
         * Checks whether `object` has a [floating][floating-ref] reference.
         * @returns `true` if `object` has a floating reference
         */
        is_floating(): boolean;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param property_name the name of a property installed on the class of `object`.
         */
        notify(property_name: string): void;
        /**
         * Emits a "notify" signal for the property specified by `pspec` on `object`.
         *
         * This function omits the property name lookup, hence it is faster than
         * `g_object_notify()`.
         *
         * One way to avoid using `g_object_notify()` from within the
         * class that registered the properties, and using `g_object_notify_by_pspec()`
         * instead, is to store the GParamSpec used with
         * `g_object_class_install_property()` inside a static array, e.g.:
         *
         *
         * ```c
         *   typedef enum
         *   {
         *     PROP_FOO = 1,
         *     PROP_LAST
         *   } MyObjectProperty;
         *
         *   static GParamSpec *properties[PROP_LAST];
         *
         *   static void
         *   my_object_class_init (MyObjectClass *klass)
         *   {
         *     properties[PROP_FOO] = g_param_spec_int ("foo", NULL, NULL,
         *                                              0, 100,
         *                                              50,
         *                                              G_PARAM_READWRITE | G_PARAM_STATIC_STRINGS);
         *     g_object_class_install_property (gobject_class,
         *                                      PROP_FOO,
         *                                      properties[PROP_FOO]);
         *   }
         * ```
         *
         *
         * and then notify a change on the "foo" property with:
         *
         *
         * ```c
         *   g_object_notify_by_pspec (self, properties[PROP_FOO]);
         * ```
         *
         * @param pspec the {@link GObject.ParamSpec} of a property installed on the class of `object`.
         */
        notify_by_pspec(pspec: GObject.ParamSpec): void;
        /**
         * Increases the reference count of `object`.
         *
         * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
         * of `object` will be propagated to the return type (using the GCC `typeof()`
         * extension), so any casting the caller needs to do on the return type must be
         * explicit.
         * @returns the same `object`
         */
        ref(): GObject.Object;
        /**
         * Increase the reference count of `object`, and possibly remove the
         * [floating][floating-ref] reference, if `object` has a floating reference.
         *
         * In other words, if the object is floating, then this call "assumes
         * ownership" of the floating reference, converting it to a normal
         * reference by clearing the floating flag while leaving the reference
         * count unchanged.  If the object is not floating, then this call
         * adds a new normal reference increasing the reference count by one.
         *
         * Since GLib 2.56, the type of `object` will be propagated to the return type
         * under the same conditions as for `g_object_ref()`.
         * @returns `object`
         */
        ref_sink(): GObject.Object;
        /**
         * Releases all references to other objects. This can be used to break
         * reference cycles.
         *
         * This function should only be called from object system implementations.
         */
        run_dispose(): void;
        /**
         * Each object carries around a table of associations from
         * strings to pointers.  This function lets you set an association.
         *
         * If the object already had an association with that name,
         * the old association will be destroyed.
         *
         * Internally, the `key` is converted to a {@link GLib.Quark} using `g_quark_from_string()`.
         * This means a copy of `key` is kept permanently (even after `object` has been
         * finalized) — so it is recommended to only use a small, bounded set of values
         * for `key` in your program, to avoid the {@link GLib.Quark} storage growing unbounded.
         * @param key name of the key
         * @param data data to associate with that key
         */
        set_data(key: string, data?: any | null): void;
        /**
         * Sets a property on an object.
         * @param property_name The name of the property to set
         * @param value The value to set the property to
         */
        set_property(property_name: string, value: GObject.Value | any): void;
        /**
         * Remove a specified datum from the object's data associations,
         * without invoking the association's destroy handler.
         * @param key name of the key
         * @returns the data if found, or `null`          if no such data exists.
         */
        steal_data(key: string): any | null;
        /**
         * This function gets back user data pointers stored via
         * `g_object_set_qdata()` and removes the `data` from object
         * without invoking its `destroy()` function (if any was
         * set).
         * Usually, calling this function is only required to update
         * user data pointers with a destroy notifier, for example:
         *
         * ```c
         * void
         * object_add_to_user_list (GObject     *object,
         *                          const gchar *new_string)
         * {
         *   // the quark, naming the object data
         *   GQuark quark_string_list = g_quark_from_static_string ("my-string-list");
         *   // retrieve the old string list
         *   GList *list = g_object_steal_qdata (object, quark_string_list);
         *
         *   // prepend new string
         *   list = g_list_prepend (list, g_strdup (new_string));
         *   // this changed 'list', so we need to set it again
         *   g_object_set_qdata_full (object, quark_string_list, list, free_string_list);
         * }
         * static void
         * free_string_list (gpointer data)
         * {
         *   GList *node, *list = data;
         *
         *   for (node = list; node; node = node->next)
         *     g_free (node->data);
         *   g_list_free (list);
         * }
         * ```
         *
         * Using `g_object_get_qdata()` in the above example, instead of
         * `g_object_steal_qdata()` would have left the destroy function set,
         * and thus the partial string list would have been freed upon
         * `g_object_set_qdata_full()`.
         * @param quark A {@link GLib.Quark}, naming the user data pointer
         * @returns The user data pointer set, or `null`
         */
        steal_qdata(quark: GLib.Quark): any | null;
        /**
         * Reverts the effect of a previous call to
         * `g_object_freeze_notify()`. The freeze count is decreased on `object`
         * and when it reaches zero, queued "notify" signals are emitted.
         *
         * Duplicate notifications for each property are squashed so that at most one
         * {@link GObject.Object.SignalSignatures.notify | GObject.Object::notify} signal is emitted for each property, in the reverse order
         * in which they have been queued.
         *
         * It is an error to call this function when the freeze count is zero.
         */
        thaw_notify(): void;
        /**
         * Decreases the reference count of `object`. When its reference count
         * drops to 0, the object is finalized (i.e. its memory is freed).
         *
         * If the pointer to the {@link GObject.Object} may be reused in future (for example, if it is
         * an instance variable of another object), it is recommended to clear the
         * pointer to `null` rather than retain a dangling pointer to a potentially
         * invalid {@link GObject.Object} instance. Use `g_clear_object()` for this.
         */
        unref(): void;
        /**
         * This function essentially limits the life time of the `closure` to
         * the life time of the object. That is, when the object is finalized,
         * the `closure` is invalidated by calling `g_closure_invalidate()` on
         * it, in order to prevent invocations of the closure with a finalized
         * (nonexisting) object. Also, `g_object_ref()` and `g_object_unref()` are
         * added as marshal guards to the `closure`, to ensure that an extra
         * reference count is held on `object` during invocation of the
         * `closure`.  Usually, this function will be called on closures that
         * use this `object` as closure data.
         * @param closure {@link GObject.Closure} to watch
         */
        watch_closure(closure: GObject.Closure): void;
        /**
         * the `constructed` function is called by `g_object_new()` as the
         *  final step of the object creation process.  At the point of the call, all
         *  construction properties have been set on the object.  The purpose of this
         *  call is to allow for object initialisation steps that can only be performed
         *  after construction properties have been set.  `constructed` implementors
         *  should chain up to the `constructed` call of their parent class to allow it
         *  to complete its initialisation.
         * @virtual
         */
        vfunc_constructed(): void;
        /**
         * emits property change notification for a bunch
         *  of properties. Overriding `dispatch_properties_changed` should be rarely
         *  needed.
         * @param n_pspecs
         * @param pspecs
         * @virtual
         */
        vfunc_dispatch_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
        /**
         * the `dispose` function is supposed to drop all references to other
         *  objects, but keep the instance otherwise intact, so that client method
         *  invocations still work. It may be run multiple times (due to reference
         *  loops). Before returning, `dispose` should chain up to the `dispose` method
         *  of the parent class.
         * @virtual
         */
        vfunc_dispose(): void;
        /**
         * instance finalization function, should finish the finalization of
         *  the instance begun in `dispose` and chain up to the `finalize` method of the
         *  parent class.
         * @virtual
         */
        vfunc_finalize(): void;
        /**
         * the generic getter for all properties of this type. Should be
         *  overridden for every type with properties.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_get_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Emits a "notify" signal for the property `property_name` on `object`.
         *
         * When possible, eg. when signaling a property change from within the class
         * that registered the property, you should use `g_object_notify_by_pspec()`
         * instead.
         *
         * Note that emission of the notify signal may be blocked with
         * `g_object_freeze_notify()`. In this case, the signal emissions are queued
         * and will be emitted (in reverse order) when `g_object_thaw_notify()` is
         * called.
         * @param pspec
         * @virtual
         */
        vfunc_notify(pspec: GObject.ParamSpec): void;
        /**
         * the generic setter for all properties of this type. Should be
         *  overridden for every type with properties. If implementations of
         *  `set_property` don't emit property change notification explicitly, this will
         *  be done implicitly by the type system. However, if the notify signal is
         *  emitted explicitly, the type system will not emit it a second time.
         * @param property_id
         * @param value
         * @param pspec
         * @virtual
         */
        vfunc_set_property(property_id: number, value: GObject.Value | any, pspec: GObject.ParamSpec): void;
        /**
         * Disconnects a handler from an instance so it will not be called during any future or currently ongoing emissions of the signal it has been connected to.
         * @param id Handler ID of the handler to be disconnected
         */
        disconnect(id: number): void;
        /**
         * Sets multiple properties of an object at once. The properties argument should be a dictionary mapping property names to values.
         * @param properties Object containing the properties to set
         */
        set(properties: { [key: string]: any }): void;
        /**
         * Blocks a handler of an instance so it will not be called during any signal emissions
         * @param id Handler ID of the handler to be blocked
         */
        block_signal_handler(id: number): void;
        /**
         * Unblocks a handler so it will be called again during any signal emissions
         * @param id Handler ID of the handler to be unblocked
         */
        unblock_signal_handler(id: number): void;
        /**
         * Stops a signal's emission by the given signal name. This will prevent the default handler and any subsequent signal handlers from being invoked.
         * @param detailedName Name of the signal to stop emission of
         */
        stop_emission_by_name(detailedName: string): void;
    }

    /**
     * @gir-type Alias
     */
    type ApplicationClass = typeof Application;
    /**
     * An opaque structure representing an instance of an {@link Libxfce4windowing.Application}.
     * @gir-type Struct
     */
    abstract class ApplicationInstance {
        static $gtype: GObject.GType<ApplicationInstance>;

        // Methods

        /**
         * Fetches `instance`'s name, which can often be the same as the application name.
         * @returns A string owned by `instance`.
         */
        get_name(): string;
        /**
         * Fetches `instance`'s PID.
         * @returns The process ID of `instance`, or 0 if none is available.
         */
        get_pid(): number;
        /**
         * Lists all windows belonging to the application instance.
         * @returns The list of {@link Libxfce4windowing.Window} belonging to `instance`. The list and its contents are owned by `instance`.
         */
        get_windows(): Window[];
    }

    /**
     * @gir-type Alias
     */
    type ApplicationWaylandClass = typeof ApplicationWayland;
    /**
     * @gir-type Struct
     */
    abstract class ApplicationWaylandPrivate {
        static $gtype: GObject.GType<ApplicationWaylandPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type ApplicationX11Class = typeof ApplicationX11;
    /**
     * @gir-type Struct
     */
    abstract class ApplicationX11Private {
        static $gtype: GObject.GType<ApplicationX11Private>;
    }

    /**
     * @gir-type Alias
     */
    type ScreenIface = typeof Screen;
    /**
     * @gir-type Struct
     */
    abstract class ScreenInterface {
        static $gtype: GObject.GType<ScreenInterface>;
    }

    /**
     * @gir-type Alias
     */
    type ScreenWaylandClass = typeof ScreenWayland;
    /**
     * @gir-type Struct
     */
    abstract class ScreenWaylandPrivate {
        static $gtype: GObject.GType<ScreenWaylandPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type ScreenX11Class = typeof ScreenX11;
    /**
     * @gir-type Struct
     */
    abstract class ScreenX11Private {
        static $gtype: GObject.GType<ScreenX11Private>;
    }

    /**
     * @gir-type Alias
     */
    type WindowClass = typeof Window;
    /**
     * @gir-type Alias
     */
    type WindowWaylandClass = typeof WindowWayland;
    /**
     * @gir-type Struct
     */
    abstract class WindowWaylandPrivate {
        static $gtype: GObject.GType<WindowWaylandPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type WindowX11Class = typeof WindowX11;
    /**
     * @gir-type Struct
     */
    abstract class WindowX11Private {
        static $gtype: GObject.GType<WindowX11Private>;
    }

    /**
     * @gir-type Alias
     */
    type WnckIconClass = typeof WnckIcon;
    /**
     * @gir-type Alias
     */
    type WorkspaceDummyClass = typeof WorkspaceDummy;
    /**
     * @gir-type Struct
     */
    abstract class WorkspaceDummyPrivate {
        static $gtype: GObject.GType<WorkspaceDummyPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type WorkspaceGroupDummyClass = typeof WorkspaceGroupDummy;
    /**
     * @gir-type Struct
     */
    abstract class WorkspaceGroupDummyPrivate {
        static $gtype: GObject.GType<WorkspaceGroupDummyPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type WorkspaceGroupIface = typeof WorkspaceGroup;
    /**
     * @gir-type Struct
     */
    abstract class WorkspaceGroupInterface {
        static $gtype: GObject.GType<WorkspaceGroupInterface>;
    }

    /**
     * @gir-type Alias
     */
    type WorkspaceGroupWaylandClass = typeof WorkspaceGroupWayland;
    /**
     * @gir-type Struct
     */
    abstract class WorkspaceGroupWaylandPrivate {
        static $gtype: GObject.GType<WorkspaceGroupWaylandPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type WorkspaceIface = typeof Workspace;
    /**
     * @gir-type Struct
     */
    abstract class WorkspaceInterface {
        static $gtype: GObject.GType<WorkspaceInterface>;
    }

    /**
     * @gir-type Alias
     */
    type WorkspaceManagerDummyClass = typeof WorkspaceManagerDummy;
    /**
     * @gir-type Struct
     */
    abstract class WorkspaceManagerDummyPrivate {
        static $gtype: GObject.GType<WorkspaceManagerDummyPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type WorkspaceManagerIface = typeof WorkspaceManager;
    /**
     * @gir-type Struct
     */
    abstract class WorkspaceManagerInterface {
        static $gtype: GObject.GType<WorkspaceManagerInterface>;
    }

    /**
     * @gir-type Alias
     */
    type WorkspaceManagerWaylandClass = typeof WorkspaceManagerWayland;
    /**
     * @gir-type Struct
     */
    abstract class WorkspaceManagerWaylandPrivate {
        static $gtype: GObject.GType<WorkspaceManagerWaylandPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type WorkspaceManagerX11Class = typeof WorkspaceManagerX11;
    /**
     * @gir-type Struct
     */
    abstract class WorkspaceManagerX11Private {
        static $gtype: GObject.GType<WorkspaceManagerX11Private>;
    }

    /**
     * @gir-type Alias
     */
    type WorkspaceWaylandClass = typeof WorkspaceWayland;
    /**
     * @gir-type Struct
     */
    abstract class WorkspaceWaylandPrivate {
        static $gtype: GObject.GType<WorkspaceWaylandPrivate>;
    }

    /**
     * @gir-type Alias
     */
    type WorkspaceX11Class = typeof WorkspaceX11;
    /**
     * @gir-type Struct
     */
    abstract class WorkspaceX11Private {
        static $gtype: GObject.GType<WorkspaceX11Private>;
    }

    namespace Screen {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            active_window: Window;
            activeWindow: Window;
            screen: Gdk.Screen;
            show_desktop: boolean;
            showDesktop: boolean;
            workspace_manager: WorkspaceManager;
            workspaceManager: WorkspaceManager;
        }
    }

    export interface ScreenNamespace {
        $gtype: GObject.GType<Screen>;
        prototype: Screen;

        /**
         * Retrieves the {@link Libxfce4windowing.Screen} instance corresponding to the default {@link Gdk.Screen}.
         */
        get_default(): Screen;
    }
    /**
     * @gir-type Interface
     */
    interface Screen extends GObject.Object {
        // Properties

        /**
         * The currently-active window.
         */
        get active_window(): Window;
        /**
         * The currently-active window.
         */
        get activeWindow(): Window;
        /**
         * The {@link Gdk.Screen} instance used to construct this {@link Libxfce4windowing.Screen}.
         */
        get screen(): Gdk.Screen;
        /**
         * Whether or not to show the desktop.
         */
        get show_desktop(): boolean;
        set show_desktop(val: boolean);
        /**
         * Whether or not to show the desktop.
         */
        get showDesktop(): boolean;
        set showDesktop(val: boolean);
        /**
         * The {@link Libxfce4windowing.WorkspaceManager} that manages and describes workspace groups
         * and workspaces on this screen instance.
         */
        get workspace_manager(): WorkspaceManager;
        /**
         * The {@link Libxfce4windowing.WorkspaceManager} that manages and describes workspace groups
         * and workspaces on this screen instance.
         */
        get workspaceManager(): WorkspaceManager;

        // Methods

        /**
         * Retrieves the window on `screen` that is currently active.
         * @returns an {@link Libxfce4windowing.Window}, or `null` if no window is active on `screen`.
         */
        get_active_window(): Window | null;
        /**
         * @returns `true` if the desktop is shown, `false` otherwise.
         */
        get_show_desktop(): boolean;
        /**
         * Retrieves the list of windows currently displayed on `screen`.
         *
         * The list and its contents are owned by `screen`.
         * @returns the list of {@link Libxfce4windowing.Window} on `screen`, or `null` if there are no windows.  The list and its contents are owned by `screen`.
         */
        get_windows(): Window[] | null;
        /**
         * Retrieves the list of windows currently displayed on `screen`, in stacking
         * order, with the bottom-most window first in the returned list.
         * @returns the list of {@link Libxfce4windowing.Window} on `screen`, in stacking order, or `null` if there are no windows.  The list and its contents are owned by `screen`.
         */
        get_windows_stacked(): Window[] | null;
        /**
         * Retrieves this screen's {@link Libxfce4windowing.WorkspaceManager} instance, which can be used
         * to inspect and interact with `screen`'s workspace groups and workspaces.
         * @returns a {@link Libxfce4windowing.WorkspaceManager} instance.  This instance is a singleton and is owned by `screen`.
         */
        get_workspace_manager(): WorkspaceManager;
        /**
         * Showing the desktop minimizes the windows not minimized at the time of the query.
         * The reverse process unminimizes those same windows, if they have not already been
         * unminimized or destroyed. The desktop show state can be tracked via
         * {@link Libxfce4windowing.Screen.show_desktop}.
         *
         * The state of the previously active window is always restored upon unminimization,
         * but there is no guarantee for the rest of the window stacking order on Wayland.
         *
         * A request to switch to the current state is silently ignored.
         * @param show `true` to show the desktop, `false` to restore the previous state.
         */
        set_show_desktop(show: boolean): void;
    }

    export const Screen: ScreenNamespace & {
        new (): Screen; // This allows `obj instanceof Screen`
    };

    namespace Workspace {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            capabilities: WorkspaceCapabilities;
            group: WorkspaceGroup;
            id: string;
            layout_column: number;
            layoutColumn: number;
            layout_row: number;
            layoutRow: number;
            name: string;
            number: number;
            state: WorkspaceState;
        }
    }

    export interface WorkspaceNamespace {
        $gtype: GObject.GType<Workspace>;
        prototype: Workspace;
    }
    /**
     * @gir-type Interface
     */
    interface Workspace extends GObject.Object {
        // Properties

        /**
         * The {@link Libxfce4windowing.WorkspaceCapabilities} bitfield for this workspace.
         */
        get capabilities(): WorkspaceCapabilities;
        set capabilities(val: WorkspaceCapabilities);
        /**
         * The {@link Libxfce4windowing.WorkspaceGroup} that this workspace is a member of, if any.
         */
        get group(): WorkspaceGroup;
        /**
         * The opaque ID of this workspace.
         */
        get id(): string;
        /**
         * The y-coordinate of the workspace on a 2D grid.
         */
        get layout_column(): number;
        /**
         * The y-coordinate of the workspace on a 2D grid.
         */
        get layoutColumn(): number;
        /**
         * The x-coordinate of the workspace on a 2D grid.
         */
        get layout_row(): number;
        /**
         * The x-coordinate of the workspace on a 2D grid.
         */
        get layoutRow(): number;
        /**
         * The human-readable name of this workspace.
         */
        get name(): string;
        set name(val: string);
        /**
         * The ordinal number of this workspace.
         */
        get number(): number;
        /**
         * The {@link Libxfce4windowing.WorkspaceState} bitfield for this workspace.
         */
        get state(): WorkspaceState;
        set state(val: WorkspaceState);

        // Methods

        /**
         * Attempts to set `workspace` as the active workspace in its group.
         *
         * On failure, `error` (if provided) will be set to a description of the error
         * that occurred.
         * @returns `true` if workspace activation succeeded, `false` otherwise.  If `false`, and `error` is non-`null`, an error will be returned that must be freed using `g_error_free`().
         */
        activate(): boolean;
        /**
         * Attempts to assign `workspace` to `group`.
         *
         * On failure, `error` (if provided) will be set to a description of the error
         * that occurred.
         * @param group an {@link Libxfce4windowing.WorkspaceGroup}.
         * @returns `true` if workspace assignment succeeded, `false` otherwise. If `false`, and `error` is non-`null`, an error will be returned that must be freed using `g_error_free()`.
         */
        assign_to_workspace_group(group: WorkspaceGroup): boolean;
        /**
         * Fetches this workspace's capabilities bitfield.
         *
         * The bitfield describes what operations are available on this workspace.
         * @returns a {@link Libxfce4windowing.WorkspaceCapabilities} bitfield.
         */
        get_capabilities(): WorkspaceCapabilities;
        /**
         * Fetches the position and size of the workspace in screen coordinates.
         *
         * The values in the returned {@link Gdk.Rectangle} are owned by `workspace` and should
         * not be modified.
         * @returns a {@link Gdk.Rectangle}, owned by `workspace`.
         */
        get_geometry(): Gdk.Rectangle;
        /**
         * Fetches this workspace's opaque ID.
         * @returns A UTF-8 formatted string, owned by `workspace`.
         */
        get_id(): string;
        /**
         * Fetches the column this workspace belongs to in the workspace's group.
         *
         * This information can be used to lay out workspaces in a grid in a pager
         * UI, for example.
         * @returns a non-negative, 0-indexed integer.
         */
        get_layout_column(): number;
        /**
         * Fetches the row this workspace belongs to in the workspace's group.
         *
         * This information can be used to lay out workspaces in a grid in a pager
         * UI, for example.
         * @returns a non-negative, 0-indexed integer.
         */
        get_layout_row(): number;
        /**
         * Fetches this workspace's human-readable name.
         * @returns A UTF-8 formatted string, owned by `workspace`.
         */
        get_name(): string;
        /**
         * Fetches the workspace that resides in `direction` from the `workspace`, if
         * any.  If workspace is on the edge of the layout, and `direction` points off
         * the edge of the layout, will return `null`.
         * @param direction an {@link Libxfce4windowing.Direction}.
         * @returns a {@link Libxfce4windowing.Workspace}, owned by the parent `group`, or `null` if no workspace exists in `direction`.
         */
        get_neighbor(direction: Direction | null): Workspace | null;
        /**
         * Fetches the ordinal number of this workspace.
         *
         * The number can be used to order workspaces in a UI representation.
         *
         * On X11, this number should be stable across runs of your application.
         *
         * On Wayland, this number depends on the order in which the compositor
         * advertises the workspaces.  This order may be stable, but may not be.
         * @returns a non-negative, 0-indexed integer.
         */
        get_number(): number;
        /**
         * Fetches this workspace's state bitfield.
         * @returns a {@link Libxfce4windowing.WorkspaceState} bitfield.
         */
        get_state(): WorkspaceState;
        /**
         * Fetches the group this workspace belongs to, if any.
         * @returns a {@link Libxfce4windowing.WorkspaceGroup} instance, owned by `workspace`, or `null` if the workspace is not a member of any groups.
         */
        get_workspace_group(): WorkspaceGroup | null;
        /**
         * Attempts to remove `workspace` from its group.
         *
         * On failure, `error` (if provided) will be set to a description of the error
         * that occurred.
         * @returns `true` if workspace removal succeeded, `false` otherwise.  If `false`, and `error` is non-`null`, an error will be returned that must be freed using `g_error_free`().
         */
        remove(): boolean;
    }

    export const Workspace: WorkspaceNamespace & {
        new (): Workspace; // This allows `obj instanceof Workspace`
    };

    namespace WorkspaceGroup {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            active_workspace: Workspace;
            activeWorkspace: Workspace;
            monitors: any;
            screen: Gdk.Screen;
            workspace_manager: WorkspaceManager;
            workspaceManager: WorkspaceManager;
            workspaces: any;
        }
    }

    export interface WorkspaceGroupNamespace {
        $gtype: GObject.GType<WorkspaceGroup>;
        prototype: WorkspaceGroup;
    }
    /**
     * @gir-type Interface
     */
    interface WorkspaceGroup extends GObject.Object {
        // Properties

        /**
         * The active {@link Libxfce4windowing.Workspace} on this {@link Libxfce4windowing.WorkspaceGroup}, or `null`.
         */
        get active_workspace(): Workspace;
        /**
         * The active {@link Libxfce4windowing.Workspace} on this {@link Libxfce4windowing.WorkspaceGroup}, or `null`.
         */
        get activeWorkspace(): Workspace;
        /**
         * The list of {@link Gdk.Monitor} this {@link Libxfce4windowing.WorkspaceGroup} is displayed on.
         */
        get monitors(): any;
        /**
         * The {@link Gdk.Screen} used when creating the {@link Libxfce4windowing.Screen} that owns this
         * {@link Libxfce4windowing.WorkspaceGroup}.
         */
        get screen(): Gdk.Screen;
        /**
         * The {@link Libxfce4windowing.WorkspaceManager} instance that manages this {@link Libxfce4windowing.WorkspaceGroup}.
         */
        get workspace_manager(): WorkspaceManager;
        /**
         * The {@link Libxfce4windowing.WorkspaceManager} instance that manages this {@link Libxfce4windowing.WorkspaceGroup}.
         */
        get workspaceManager(): WorkspaceManager;
        /**
         * The list of {@link Libxfce4windowing.Workspace} in this {@link Libxfce4windowing.WorkspaceGroup}.
         */
        get workspaces(): any;

        // Methods

        /**
         * Attempts to create a new workspace on `group`.  Typically, the new workspace
         * will be appended to the existing list of workspaces.
         *
         * On failure, `error` (if provided) will be set to a description of the error
         * that occurred.
         * @param name a name for the new workspace.
         * @returns `true` if workspace creation succeeded, `false` otherwise.  If `false`, and `error` is non-`null`, an error will be returned that must be freed using `g_error_free`().
         */
        create_workspace(name: string): boolean;
        /**
         * Gets the active workspace on `group`, if there is one.
         * @returns an {@link Libxfce4windowing.Workspace}, or `null` if there is no active workspace.
         */
        get_active_workspace(): Workspace | null;
        /**
         * Returns a bitfield describing operations allowed on this `group`.
         * @returns an {@link Libxfce4windowing.WorkspaceGroupCapabilities} bitfield.
         */
        get_capabilities(): WorkspaceGroupCapabilities;
        /**
         * Lists the physical monitors that this workspace group displays on.
         * @returns A list of {@link Gdk.Monitor}, or `null` if `group` is not displayed on any monitors.  The list and its contents are owned by `group`.
         */
        get_monitors(): Gdk.Monitor[] | null;
        /**
         * Fetches the number of workspaces in `group`.
         * @returns an unsigned integer describing the number of workspaces.
         */
        get_workspace_count(): number;
        /**
         * Fetches the {@link Libxfce4windowing.WorkspaceManager} instance that owns `group`.
         * @returns a {@link Libxfce4windowing.WorkspaceManager}, owned by `group`.
         */
        get_workspace_manager(): WorkspaceManager;
        /**
         * Lists the workspaces in `group`.
         * @returns the list of {@link Libxfce4windowing.Workspace} in `group`, or `null` if there are no workspaces. The list and its contents are owned by `group`.
         */
        list_workspaces(): Workspace[] | null;
        /**
         * Moves the workspace group to a new location, and possibly a new monitor.
         *
         * On failure, `error` (if provided) will be set to a description of the error
         * that occurred.
         * @param x a coordinate in the horizontal direction.
         * @param y a coordinate in the vertical direction.
         * @returns `true` if moving the workspace group succeeded, `false` otherwise.  If `false`, and `error` is non-`null`, an error will be returned that must be freed using `g_error_free`().
         */
        move_viewport(x: number, y: number): boolean;
        /**
         * Sets the layout of `group` to `rows` by `columns`.
         *
         * Note that this will not change the number of workspaces if the new layout
         * implies a larger number of workspaces than currently exists.
         *
         * On failure, `error` (if provided) will be set to a description of the error
         * that occurred.
         * @param rows the new numbers of rows.
         * @param columns the new number of columns.
         * @returns `true` if changing the layout of `group` succeede, `false` otherwise.  If `false`, and `error` is non-`null`, an error will be returned that must be freed using `g_error_free`().
         */
        set_layout(rows: number, columns: number): boolean;
    }

    export const WorkspaceGroup: WorkspaceGroupNamespace & {
        new (): WorkspaceGroup; // This allows `obj instanceof WorkspaceGroup`
    };

    namespace WorkspaceManager {
        // Constructor properties interface

        interface ConstructorProps extends GObject.Object.ConstructorProps {
            screen: Gdk.Screen;
        }
    }

    export interface WorkspaceManagerNamespace {
        $gtype: GObject.GType<WorkspaceManager>;
        prototype: WorkspaceManager;
    }
    /**
     * @gir-type Interface
     */
    interface WorkspaceManager extends GObject.Object {
        // Properties

        /**
         * The {@link Gdk.Screen} instance used to construct the {@link Libxfce4windowing.Screen} that owns this
         * workspace manager.
         */
        get screen(): Gdk.Screen;

        // Methods

        /**
         * Lists all workspace groups known to the workspace manager.
         * @returns the list of {@link Libxfce4windowing.WorkspaceGroup} managed by `manager`, or `null` if there are no workspace groups.  The list and its contents are owned by `manager`.
         */
        list_workspace_groups(): WorkspaceGroup[] | null;
        /**
         * List all workspaces known to the workspace manager.
         * @returns the list of {@link Libxfce4windowing.Workspace} managed by `manager`, or `null` if there are no workspaces.  The list and its contents are owned by `manager`.
         */
        list_workspaces(): Workspace[] | null;
    }

    export const WorkspaceManager: WorkspaceManagerNamespace & {
        new (): WorkspaceManager; // This allows `obj instanceof WorkspaceManager`
    };

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

export default Libxfce4windowing;

// END
